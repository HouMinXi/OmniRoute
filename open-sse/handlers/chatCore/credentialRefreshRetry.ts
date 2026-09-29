import { FORMATS } from "../../translator/formats.ts";
import {
  refreshWithRetry,
  isUnrecoverableRefreshError,
  runWithOnPersist,
  runWithCasGuard,
} from "../../services/tokenRefresh.ts";
import { runWithCapture } from "../../utils/providerRequestLogging.ts";
import { sanitizeErrorMessage } from "../../utils/error.ts";
import { HTTP_STATUS } from "../../config/constants.ts";
import { getProviderConnectionById } from "@/lib/db/providers";
import { wasRefreshTokenRotated } from "@omniroute/open-sse/services/refreshSerializer.ts";
import { getUpstreamErrorIdentifier } from "./streamErrorResult.ts";
import { buildExecutorClientHeaders } from "./executorClientHeaders.ts";
import { getExecutionConnectionId } from "./executionCredentials.ts";
import { prepareUpstreamBody } from "./upstreamBody.ts";
import { updatePendingScope } from "@/lib/usage/pendingRequestScope";
import { normalizeExecutorResult } from "./upstreamTimeouts.ts";
import { shouldIsolateProbeFailures } from "@/shared/utils/probeOrigin";
import type { StreamingLegDeps } from "./streamingLeg.ts";

/**
 * The 401/403 credential-refresh-and-retry sub-slice of {@link runStreamingLeg},
 * lifted out verbatim to keep the response-path leaf under the new-file line cap.
 *
 * Runs only when the initial provider dispatch came back unauthorized/forbidden
 * and the failure isn't attributable to a stripped `stream_options` (which can
 * masquerade as an auth error). On a successful refresh it retries the request
 * once with the rotated credentials; the caller inherits whatever this returns
 * (a fresh response on success, the original one otherwise).
 */
export interface CredentialRefreshRetryDeps extends Pick<
  StreamingLegDeps,
  | "targetFormat"
  | "credentials"
  | "provider"
  | "log"
  | "onCredentialsRefreshed"
  | "connectionId"
  | "effectiveModel"
  | "trustedEffortContext"
  | "isOpencodeClient"
  | "body"
  | "clientRawRequest"
  | "getExecutionCredentials"
  | "assertManagedLeaseFence"
  | "executor"
  | "streamController"
  | "extendedContext"
  | "buildUpstreamHeadersForExecute"
  | "userAgent"
  | "clientResponseFormat"
  | "isCombo"
  | "contextEditingEnabled"
  | "correlationId"
  | "reqLogger"
  | "pendingScope"
  | "getManagedLeaseFenceErrorCode"
  | "managedLeaseFenceErrorResult"
  | "providerRequestCapture"
  | "translatedBody"
  | "upstreamStream"
> {
  providerResponse: Response & { body?: unknown };
  providerUrl: string;
  providerHeaders: Record<string, unknown> | Headers | null | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- mirrors StreamingLegDeps.finalBody
  finalBody: any;
}

export interface CredentialRefreshRetryOutcome {
  /** Set when the lease fence rejected the retry; the caller returns this immediately. */
  earlyReturn: ReturnType<StreamingLegDeps["managedLeaseFenceErrorResult"]> | null;
  providerResponse: Response & { body?: unknown };
  providerUrl: string;
  providerHeaders: Record<string, unknown> | Headers | null | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- mirrors StreamingLegDeps.finalBody
  finalBody: any;
  upstreamErrorParsed: boolean;
  parsedStatusCode: number;
  parsedMessage: string;
  parsedRetryAfterMs: number | null;
  upstreamErrorBody: unknown;
}

export async function runCredentialRefreshRetry(
  deps: CredentialRefreshRetryDeps
): Promise<CredentialRefreshRetryOutcome> {
  const {
    targetFormat,
    credentials,
    provider,
    log,
    onCredentialsRefreshed,
    connectionId,
    effectiveModel,
    trustedEffortContext,
    isOpencodeClient,
    body,
    clientRawRequest,
    getExecutionCredentials,
    assertManagedLeaseFence,
    executor,
    streamController,
    extendedContext,
    buildUpstreamHeadersForExecute,
    userAgent,
    clientResponseFormat,
    isCombo,
    contextEditingEnabled,
    correlationId,
    reqLogger,
    pendingScope,
    getManagedLeaseFenceErrorCode,
    managedLeaseFenceErrorResult,
    providerRequestCapture,
    translatedBody,
    upstreamStream,
  } = deps;
  let providerResponse = deps.providerResponse;
  let providerUrl = deps.providerUrl;
  let providerHeaders = deps.providerHeaders;
  let finalBody = deps.finalBody;

  let upstreamErrorParsed = false;
  const parsedStatusCode = providerResponse.status;
  const parsedMessage = "";
  const parsedRetryAfterMs: number | null = null;
  const upstreamErrorBody: unknown = null;

  // Track whether stream_options was present and stripped — if so, 401/403 after
  // that may be from the modification rather than a genuine auth failure, so we
  // skip the credential refresh attempt in that case.
  const hadStreamOptions =
    targetFormat === FORMATS.OPENAI_RESPONSES && "stream_options" in translatedBody;
  if (hadStreamOptions) {
    delete translatedBody.stream_options;
  }

  // Handle 401/403 - try token refresh using executor
  // T-PROBE: probe-origin failures never attempt the refresh — a probe must
  // not consume a rotating refresh token nor persist an "expired"
  // deactivation on refresh failure (#9817). The 401/403 then flows into
  // the normal providerFailure classification (record-only in probe mode).
  if (
    (providerResponse.status === HTTP_STATUS.UNAUTHORIZED ||
      providerResponse.status === HTTP_STATUS.FORBIDDEN) &&
    !hadStreamOptions && // Skip refresh if failure may be from stream_options removal, not auth
    !(await shouldIsolateProbeFailures())
  ) {
    // Fix A: wrap refreshCredentials in runWithOnPersist so the persist callback
    // executes INSIDE the per-connection mutex held by getAccessToken. This makes
    // [network refresh + DB write + outer-state mutation] one atomic step and
    // prevents concurrent requests from reading a stale refreshToken before the
    // DB has been updated (refresh_token_reused on Codex/OpenAI).
    //
    // Not every executor routes refresh through getAccessToken (e.g. github.ts
    // calls refreshCopilotToken directly). When the persistFn doesn't fire from
    // inside getAccessToken, we still need to do the credentials mutation + user
    // callback after refreshCredentials returns. The `persistFnRan` flag tracks
    // which path executed so we don't double-fire (race-prone) or skip (regression).
    // Front 3: remember the refresh_token we are about to present so that, if the
    // refresh fails as unrecoverable, we can tell a genuine death apart from a
    // stale-token reuse that a concurrent/sibling refresh already rotated past.
    const attemptedRefreshToken =
      typeof credentials?.refreshToken === "string" ? credentials.refreshToken : null;
    let persistFnRan = false;
    const persistFn = onCredentialsRefreshed
      ? async (refreshResult: Record<string, unknown>) => {
          persistFnRan = true;
          // Mutate the shared credentials object so subsequent executor calls
          // in this request see the new tokens. Runs INSIDE the mutex.
          Object.assign(credentials, refreshResult);
          await onCredentialsRefreshed(refreshResult);
        }
      : undefined;

    // #4038: build a compare-and-swap reread so getAccessToken can skip the persist if a
    // concurrent writer (sibling request / HealthCheck / replica) already rotated this
    // connection's refresh_token past the one we presented — overwriting would revert it
    // and revoke the token family. No connectionId ⇒ no guard (behavior unchanged).
    const casConnectionId =
      typeof credentials?.connectionId === "string" ? credentials.connectionId.trim() : "";
    const casReread = casConnectionId
      ? async () => {
          const latest = await getProviderConnectionById(casConnectionId);
          return typeof latest?.refreshToken === "string" ? latest.refreshToken : null;
        }
      : null;

    const newCredentials = (await refreshWithRetry(
      () =>
        runWithCasGuard(
          casReread ? { expectedRefreshToken: attemptedRefreshToken, reread: casReread } : null,
          () => runWithOnPersist(persistFn, () => executor.refreshCredentials(credentials, log))
        ),
      3,
      log,
      provider // Explicitly pass the provider to avoid universally tripping the "unknown" circuit breaker
    )) as null | {
      accessToken?: string;
      copilotToken?: string;
    };

    if (newCredentials?.accessToken || newCredentials?.copilotToken) {
      log?.info?.("TOKEN", `${provider?.toUpperCase()} | refreshed`);

      // Fall back to post-mutex mutation only for executors that don't route
      // through getAccessToken (and therefore never fire onPersist). For
      // executors that DO route through it (Codex, Claude, Gemini, etc.) the
      // mutation already happened atomically inside the mutex.
      if (!persistFnRan) {
        Object.assign(credentials, newCredentials);
        if (onCredentialsRefreshed) {
          await onCredentialsRefreshed(newCredentials);
        }
      }

      // Retry with new credentials — model + extra headers follow translatedBody.model so they
      // stay aligned if this block ever runs after a path that mutates body.model (e.g. fallback).
      try {
        const retryModelId = String(translatedBody.model || effectiveModel);
        const retryBody = await prepareUpstreamBody({
          translatedBody,
          modelToCall: retryModelId,
          ...trustedEffortContext,
          provider,
          targetFormat,
          credentials: getExecutionCredentials(),
          log,
          bypassDefaultToolLimit: isOpencodeClient,
          isOpencodeClient,
          rawBody: body,
          clientRawRequest,
        });
        assertManagedLeaseFence(getExecutionConnectionId(getExecutionCredentials()));
        const retryResult = normalizeExecutorResult(
          await runWithCapture(providerRequestCapture, () =>
            executor.execute({
              model: retryModelId,
              body: retryBody,
              stream: upstreamStream,
              credentials: getExecutionCredentials(),
              signal: streamController.signal,
              log,
              extendedContext,
              upstreamExtraHeaders: buildUpstreamHeadersForExecute(retryModelId),
              clientHeaders: buildExecutorClientHeaders(clientRawRequest?.headers, userAgent),
              clientResponseFormat,
              onCredentialsRefreshed,
              skipUpstreamRetry: isCombo,
              contextEditing: { enabled: contextEditingEnabled },
              correlationId,
            })
          )
        );

        if (retryResult.response.ok) {
          providerResponse = retryResult.response;
          providerUrl = retryResult.url;
          providerHeaders = new Headers(retryResult.headers || {});
          finalBody = providerRequestCapture.body(retryResult.transformedBody);
          reqLogger.logTargetRequest(providerUrl, providerHeaders, finalBody);
          updatePendingScope(pendingScope, {
            providerRequest: finalBody,
            providerUrl,
            stage: "provider_response_started",
          });
          upstreamErrorParsed = false; // Reset since new response is OK
        } else {
          providerResponse = retryResult.response;
          upstreamErrorParsed = false; // Let it be parsed downstream
        }
      } catch (retryErr) {
        const retryLeaseFenceCode = getManagedLeaseFenceErrorCode(
          getUpstreamErrorIdentifier(retryErr)
        );
        if (retryLeaseFenceCode) {
          return {
            earlyReturn: managedLeaseFenceErrorResult(retryLeaseFenceCode),
            providerResponse,
            providerUrl,
            providerHeaders,
            finalBody,
            upstreamErrorParsed,
            parsedStatusCode,
            parsedMessage,
            parsedRetryAfterMs,
            upstreamErrorBody,
          };
        }
        // Refresh succeeded but the retry leg failed (network blip, AbortError,
        // executor throw). Don't swallow — the operator-visible signal "the user
        // saw 401 even though auth was actually fixed" is much more confusing
        // than the original 401 alone. Surface at error level with sanitization.
        log?.error?.(
          "TOKEN",
          `${provider?.toUpperCase()} | retry after refresh failed: ${sanitizeErrorMessage(retryErr)}`
        );
      }
    } else {
      log?.warn?.("TOKEN", `${provider?.toUpperCase()} | refresh failed`);
      if (isUnrecoverableRefreshError(newCredentials) && onCredentialsRefreshed) {
        // Front 3 (reuse-race tolerance): before deactivating, re-read the DB.
        // If a sibling/concurrent refresh already rotated this connection's
        // refresh_token (common for Codex/OpenAI under one shared Auth0 client),
        // the failure we saw was a stale-token reuse — the account is healthy
        // with the newer token, so keep it active instead of killing it.
        let alreadyRotated = false;
        if (typeof connectionId === "string" && connectionId && attemptedRefreshToken) {
          try {
            const latest = await getProviderConnectionById(connectionId);
            if (wasRefreshTokenRotated(attemptedRefreshToken, latest?.refreshToken)) {
              alreadyRotated = true;
              log?.warn?.(
                "TOKEN",
                `${provider.toUpperCase()} | refresh_token already rotated by a concurrent refresh — keeping connection active`
              );
            }
          } catch {
            // DB read failed — fall through to the safe default (deactivate).
          }
        }
        if (!alreadyRotated) {
          await onCredentialsRefreshed({ testStatus: "expired", isActive: false });
        }
      }
    }
  }

  return {
    earlyReturn: null,
    providerResponse,
    providerUrl,
    providerHeaders,
    finalBody,
    upstreamErrorParsed,
    parsedStatusCode,
    parsedMessage,
    parsedRetryAfterMs,
    upstreamErrorBody,
  };
}
