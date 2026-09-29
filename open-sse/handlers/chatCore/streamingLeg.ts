import { projectFailureUsageErrorCode, type FailureUsageAggregate } from "./failureUsage.ts";
import { buildClaudePromptCacheLogMeta } from "./executorHelpers.ts";
import { recoverAnthropicThinkingSignature } from "./thinkingSignatureRecovery.ts";
import { runProviderExecutionPipeline } from "./providerExecutionPipeline.ts";
import { runCredentialRefreshRetry } from "./credentialRefreshRetry.ts";
import { onFailure, onStreamThrow } from "./recoveryPolicy.ts";
import { markCodexScopeRateLimited } from "./codexFailover.ts";
import { deleteSessionAccountAffinity } from "@/lib/db/sessionAccountAffinity";
import { normalizeHeaders } from "../../utils/headers.ts";
import { FORMATS } from "../../translator/formats.ts";
import { COLORS } from "../../utils/stream.ts";
import type { PersistAttemptLogsArgs } from "./attemptLogging.ts";
import {
  REASONING_BUFFER_MIN_TRIGGER,
  buildReasoningProbeTruncatedResponse,
  isEmptyContentUpstreamFailure,
  isTinyBudgetReasoningProbe,
  toPositiveInteger,
} from "../../services/reasoningTokenBuffer.ts";
import {
  createErrorResult,
  parseUpstreamError,
  formatProviderError,
  projectPublicErrorIdentifier,
  sanitizeErrorMessage,
  sanitizeUpstreamDetails,
} from "../../utils/error.ts";
import { HTTP_STATUS, ANTIGRAVITY_PRE_RESPONSE_TIMEOUT_CODE } from "../../config/constants.ts";
import { applyStatusRestatement } from "../../config/upstreamStatusRestatement.ts";
import { updateProviderConnection } from "@/lib/db/providers";
import {
  createSafeAbortError,
  createStreamingErrorResult,
  isSemaphoreCapacityError,
  getSafeErrorMetadata,
} from "./streamErrorResult.ts";
import { logAuditEvent } from "@/lib/compliance";
import { trackPendingRequest, appendRequestLog } from "@/lib/usageDb";
import { updatePendingScope } from "@/lib/usage/pendingRequestScope";
import { getProviderCredentials, extractSessionAffinityKey } from "@/sse/services/auth";
import { updateFromHeaders, updateFromResponseBody } from "../../services/rateLimitManager.ts";
import * as localLimiterErrors from "../../services/rateLimitManager/errors.ts";
import { markBlocked as markAccountSemaphoreBlocked } from "../../services/accountSemaphore.ts";
import { lockModel, recordCoreOwnedAntigravityQuotaState } from "../../services/accountFallback.ts";
import {
  getNextFamilyFallback,
  isContextOverflowError,
  findLargerContextModel,
  getModelFamily,
} from "../../services/modelFamilyFallback.ts";
import { isLocalStreamLifecycleError } from "@/shared/utils/circuitBreaker";
import { shouldIsolateProbeFailures } from "@/shared/utils/probeOrigin";
import { writeTerminalStatus } from "@/shared/utils/terminalStatus";

export type LoggerLike =
  | {
      warn?: (...args: unknown[]) => void;
      debug?: (...args: unknown[]) => void;
      info?: (...args: unknown[]) => void;
      error?: (...args: unknown[]) => void;
    }
  | null
  | undefined;

/**
 * Mirrors the unexported `ErrorResponseBody` from `open-sse/utils/error.ts:17`.
 * That interface is module-private; widening its export surface is not this
 * commit's business, so the shape is restated here and nowhere else.
 */
interface ErrorResponseBody {
  error: {
    message: string;
    type?: string;
    code?: string;
    reason?: string;
  };
  upstream_details?: Record<string, unknown> | null;
}

/**
 * The streaming half of `handleChatCore`, lifted verbatim out of the barrel.
 *
 * Unlike the non-streaming leg, this one does not own every exit: six values it
 * assigns are read again by the streaming response section that follows the
 * call. They come back through {@link StreamingLegOutcome.carry} so the data
 * flow stays visible instead of travelling through a shared mutable closure.
 */
export interface StreamingLegDeps {
  body: Record<string, unknown>;
  model: string | null | undefined;
  apiKeyInfo: ({ id?: string | null; name?: string } & Record<string, unknown>) | null;
  applyProviderFailureClassification: ({
    statusCode,
    message,
    headers,
    upstreamErrorBody,
    retryAfterMs,
    targetModel,
  }: {
    statusCode: number;
    message: string;
    headers?: Headers | null;
    upstreamErrorBody?: unknown;
    retryAfterMs?: number | null;
    targetModel: string;
  }) => Promise<void>;
  assertManagedLeaseFence: (attemptConnectionId: string | null | undefined) => void;
  buildErrorBody: (
    statusCode: number,
    message: string,
    upstreamDetails?: unknown,
    classification?: import("../../utils/error.ts").ErrorBodyClassification
  ) => ErrorResponseBody;
  buildUpstreamHeadersForExecute: (modelToCall: string) => Record<string, string>;
  claudePromptCacheLogMeta: Record<string, unknown> | null | undefined;
  clientRawRequest:
    | {
        headers?: Record<string, string | string[]>;
        signal?: AbortSignal;
      }
    | null
    | undefined;
  clientResponseFormat: string;
  comboStrategy: unknown;
  connectionId: string | null | undefined;
  contextEditingEnabled: boolean;
  correlationId: unknown;
  credentials: ({ connectionId?: string | null } & Record<string, unknown>) | null | undefined;
  currentModel: string;
  effectiveModel: string;
  effectiveServiceTier: import("./serviceTier.js").EffectiveServiceTier;
  executeProviderRequest: (
    modelToCall?: string,
    allowDedup?: boolean
  ) => Promise<import("./executeProviderRequest.ts").ChatCoreExecutorResult>;
  executeRefreshCredentials: (
    currentCreds: Record<string, unknown>
  ) => Promise<Record<string, unknown> | null>;
  executor: {
    execute: (args: Record<string, unknown>) => Promise<unknown>;
    refreshCredentials?: (credentials: unknown, log?: LoggerLike | null) => Promise<unknown>;
  };
  extendedContext: unknown;
  // The barrel declares `let finalBody;` -- implicit any under strict:false -- so it
  // can hold either a translated request Record or a ChatCoreExecutorResult. Naming
  // either one here would narrow what upstream deliberately left open.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  finalBody: any;
  getCurrentConnectionId: () => string | null | undefined;
  getExecutionCredentials: () => Record<string, unknown> & {
    providerSpecificData: Record<string, unknown>;
  };
  getManagedLeaseFenceErrorCode: (code: string | undefined) => string | undefined;
  handleCredentialsRefreshed: (refreshed: Record<string, unknown>) => Promise<void>;
  isCombo: boolean;
  isOpencodeClient: boolean;
  log: LoggerLike | null | undefined;
  managedLease: unknown;
  managedLeaseFenceErrorResult: (code: string) => {
    errorType: string;
    errorCode: string;
    success: false;
    status: number;
    error: string;
    rawMessage: string;
    response: Response;
    retryAfterMs?: number;
  };
  onCredentialsRefreshed: (refreshed: unknown) => void | Promise<void>;
  pendingScope: {
    id: string;
    model: string | null | undefined;
    provider: string | null | undefined;
    connectionId: string | null | undefined;
  };
  persistAttemptLogs: (args: PersistAttemptLogsArgs) => void;
  persistFailureUsage: (
    statusCode: number,
    errorCode?: string | null,
    aggregate?: FailureUsageAggregate | null
  ) => void;
  pipelineRecovered: boolean;
  provider: string | null | undefined;
  providerHeaders: Record<string, unknown> | Headers | null | undefined;
  providerRequestCapture: import("../../utils/providerRequestLogging.ts").Capture;
  providerResponse: (Response & { body?: unknown }) | null | undefined;
  reqLogger: {
    sessionPath: null;
    logClientRawRequest: (
      endpoint: unknown,
      body: unknown,
      headers?:
        Headers | Record<string, unknown> | { entries?: () => IterableIterator<[string, string]> },
      effectiveInput?: unknown
    ) => void;
    logRouteDecision: (decision: unknown) => void;
    logOpenAIRequest: (body: unknown) => void;
    logTargetRequest: (
      url: unknown,
      headers:
        Headers | Record<string, unknown> | { entries?: () => IterableIterator<[string, string]> },
      body: unknown
    ) => void;
    logProviderResponse: (
      status: unknown,
      statusText: unknown,
      headers:
        Headers | Record<string, unknown> | { entries?: () => IterableIterator<[string, string]> },
      body: unknown
    ) => void;
    appendProviderChunk: (chunk: string) => void;
    appendOpenAIChunk: (chunk: string) => void;
    logConvertedResponse: (body: unknown) => void;
    appendConvertedChunk: (chunk: string) => void;
    logError: (error: unknown, requestBody?: unknown) => void;
    logToolLoopReceipt: (receipt: unknown) => void;
    getPipelinePayloads: () =>
      import("../../utils/requestLogger.js").RequestPipelinePayloads | null;
  };
  resolveEffectiveServiceTier: (
    requestBody?: unknown
  ) => import("./serviceTier.js").EffectiveServiceTier;
  sessionAffinityKey: string | null | undefined;
  skillRequestId: `${string}-${string}-${string}-${string}-${string}`;
  sourceFormat: string;
  stream: boolean;
  streamController: {
    signal: AbortSignal;
    startTime: number;
    isConnected: () => boolean;
    handleDisconnect: (reason?: string) => void;
    handleComplete: () => void;
    markClientTerminalSeen: () => void;
    markCompletedToolHandoffSeen: () => void;
    registerCompletedToolHandoffDrain: (drain: () => void) => void;
    shouldDeferCompletedToolHandoff: () => boolean;
    handleError: (error: unknown) => void;
    abort: () => void;
    clientResponseFormat: string;
    clientDisconnectGracePeriodMs: number;
  };
  targetFormat: string;
  translatedBody: Record<string, unknown>;
  triedModels: Set<string>;
  trustedEffortContext: Readonly<{
    originModel: string | null | undefined;
    resolvedThinkingEffort: string | null | undefined;
    defaultThinkingEffort: string | null | undefined;
  }>;
  upstreamStream: boolean;
  userAgent: string | null | undefined;
}

/**
 * Values the barrel must write back before continuing down the streaming path.
 *
 * Two kinds of state live here. Most entries are plain values the block assigns
 * and the streaming response section reads afterwards. `currentModel` and
 * `pipelineRecovered` are different: the block *rebinds* them during model
 * fallback and recovery, and a rebind inside this function is invisible to the
 * caller, so they have to travel back explicitly. `providerUrl` is rebound too
 * but is deliberately absent -- the barrel never reads it after the call.
 *
 * `credentials` is also absent, for the opposite reason: it is only ever
 * updated via Object.assign, which writes through into the object the barrel
 * still holds.
 */
export interface StreamingLegCarry {
  claudePromptCacheLogMeta: Record<string, unknown> | null | undefined;
  currentModel: string;
  effectiveServiceTier: import("./serviceTier.js").EffectiveServiceTier;
  // The barrel declares `let finalBody;` -- implicit any under strict:false -- so it
  // can hold either a translated request Record or a ChatCoreExecutorResult. Naming
  // either one here would narrow what upstream deliberately left open.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  finalBody: any;
  pipelineRecovered: boolean;
  providerHeaders: Record<string, unknown> | Headers | null | undefined;
  providerResponse: (Response & { body?: unknown }) | null | undefined;
  translatedBody: Record<string, unknown>;
}

export type StreamingLegOutcome =
  | { kind: "returned"; value: unknown; carry: StreamingLegCarry }
  | { kind: "fellThrough"; carry: StreamingLegCarry };

export async function runStreamingLeg(deps: StreamingLegDeps): Promise<StreamingLegOutcome> {
  let {
    body,
    model,
    apiKeyInfo,
    applyProviderFailureClassification,
    assertManagedLeaseFence,
    buildErrorBody,
    buildUpstreamHeadersForExecute,
    claudePromptCacheLogMeta,
    clientRawRequest,
    clientResponseFormat,
    comboStrategy,
    connectionId,
    contextEditingEnabled,
    correlationId,
    credentials,
    currentModel,
    effectiveModel,
    effectiveServiceTier,
    executeProviderRequest,
    executeRefreshCredentials,
    executor,
    extendedContext,
    finalBody,
    getCurrentConnectionId,
    getExecutionCredentials,
    getManagedLeaseFenceErrorCode,
    handleCredentialsRefreshed,
    isCombo,
    isOpencodeClient,
    log,
    managedLease,
    managedLeaseFenceErrorResult,
    onCredentialsRefreshed,
    pendingScope,
    persistAttemptLogs,
    persistFailureUsage,
    pipelineRecovered,
    provider,
    providerHeaders,
    providerRequestCapture,
    providerResponse,
    reqLogger,
    resolveEffectiveServiceTier,
    sessionAffinityKey,
    skillRequestId,
    sourceFormat,
    stream,
    streamController,
    targetFormat,
    translatedBody,
    triedModels,
    trustedEffortContext,
    upstreamStream,
    userAgent,
  } = deps;

  // Assigned on every path through the execution pipeline below before it is
  // read, and never consumed by the barrel afterwards, so it stays local.
  //
  // Declared without an initialiser deliberately, but note that typecheck:core
  // does not enforce that: definite-assignment analysis needs strictNullChecks
  // and this repo compiles with strict: false. The guarantee is pinned by
  // tests/unit/chatcore/streaming-leg-carry.test.ts, which re-checks this file
  // with the flag on.
  let providerUrl: string;

  const carry = (): StreamingLegCarry => ({
    claudePromptCacheLogMeta,
    currentModel,
    effectiveServiceTier,
    finalBody,
    pipelineRecovered,
    providerHeaders,
    providerResponse,
    translatedBody,
  });

  try {
    const pipelineOutcome = await runProviderExecutionPipeline({
      policy: {
        allowAccountRotation: !managedLease && comboStrategy !== "context-relay",
        allowModelFallback: true,
        expectedConnectionId: managedLease
          ? String(getCurrentConnectionId() || connectionId || "") || undefined
          : undefined,
      },
      target: {
        provider,
        requestedModel: effectiveModel,
        sourceFormat,
        targetFormat,
        stream,
      },
      connection: {
        initialConnectionId: String(getCurrentConnectionId() || connectionId || ""),
        getCurrentConnectionId: () => getCurrentConnectionId() || undefined,
        getCredentials: () => (credentials || {}) as Record<string, unknown>,
        replaceCredentials: (next) => {
          Object.assign(credentials, next);
        },
        onCredentialsRefreshed: handleCredentialsRefreshed,
        refreshCredentials: executeRefreshCredentials,
        assertManagedLeaseFence: (id) => {
          assertManagedLeaseFence(id);
        },
        getProviderCredentials,
      },
      wire: {
        body: translatedBody as Record<string, unknown>,
        currentModel,
        triedModels,
        setBodyAndModel: (body, model) => {
          translatedBody = body as typeof translatedBody;
          currentModel = model;
          triedModels.add(model);
        },
      },
      state: {
        updatePendingStage: (stage, data) => {
          updatePendingScope(pendingScope, { stage, ...(data || {}) });
        },
        recordRateLimitHeaders: updateFromHeaders,
        recordRateLimitBody: updateFromResponseBody,
        writeTerminalStatus,
        persistConnectionPatch: updateProviderConnection,
        setConnectionRateLimitedUntil: async (id, untilMs) => {
          const { setConnectionRateLimitUntil } = await import("@/lib/db/providers");
          setConnectionRateLimitUntil(id, untilMs);
        },
        lockModel,
        recordAntigravityQuotaState: recordCoreOwnedAntigravityQuotaState,
        markAccountSemaphoreBlocked: (key) => {
          markAccountSemaphoreBlocked(key, Date.now() + 60_000);
        },
        isolateProbeFailures: () => shouldIsolateProbeFailures(),
        onCodexScopeRateLimited: async (params) => {
          await markCodexScopeRateLimited({
            failedConnectionId: params.failedConnectionId,
            model: params.model,
            rateLimitedUntil: params.rateLimitedUntil,
            credentials: (params.credentials || credentials) as {
              connectionId?: string | null;
              providerSpecificData?: unknown;
            },
          });
        },
        onClearSessionAffinity: () => {
          const key =
            sessionAffinityKey ||
            extractSessionAffinityKey(body, clientRawRequest?.headers) ||
            null;
          if (!key) return;
          try {
            deleteSessionAccountAffinity(key, "codex");
          } catch {
            // best-effort
          }
        },
        onAuditAccountRotation: (params) => {
          logAuditEvent({
            action: params.action,
            actor: apiKeyInfo?.name || "system",
            target: params.newConnectionId,
            details: {
              failed_connection_id: params.failedConnectionId,
              new_connection_id: params.newConnectionId,
              attempt: params.attempt,
              retry_after_ms: params.retryAfterMs,
            },
          });
        },
      },
      sendProviderAttempt: (modelToCall, allowDedup) =>
        executeProviderRequest(modelToCall, allowDedup),
    });

    pipelineRecovered = true;
    currentModel = pipelineOutcome.model;
    if (pipelineOutcome.kind === "error") {
      providerResponse = pipelineOutcome.result.response;
      providerUrl = "";
      providerHeaders = normalizeHeaders(pipelineOutcome.result.response.headers);
      finalBody = translatedBody;
    } else {
      const result = {
        response: pipelineOutcome.response,
        url: pipelineOutcome.url,
        headers: pipelineOutcome.headers,
        transformedBody: pipelineOutcome.transformedBody,
      };
      providerResponse = result.response;
      providerUrl = result.url;
      providerHeaders = result.headers;
      finalBody = providerRequestCapture.body(result.transformedBody);
    }
    const responseConnectionId = getCurrentConnectionId();
    effectiveServiceTier = resolveEffectiveServiceTier(finalBody);
    claudePromptCacheLogMeta = buildClaudePromptCacheLogMeta(
      targetFormat,
      finalBody,
      providerHeaders,
      clientRawRequest?.headers
    );

    // Log target request (final request to provider)
    reqLogger.logTargetRequest(providerUrl, providerHeaders, finalBody);
    updatePendingScope(pendingScope, {
      providerRequest: finalBody,
      providerUrl,
      stage: "provider_response_started",
    });
    // Update rate limiter from response headers (learn limits dynamically)
    updateFromHeaders(
      provider,
      responseConnectionId,
      providerResponse.headers,
      providerResponse.status,
      model
    );

    // Store rate-limit headers for quota saturation signals
    try {
      const { storeRateLimitHeaders } = await import("@/lib/quota/saturationSignals");
      storeRateLimitHeaders(
        responseConnectionId,
        provider,
        providerResponse.headers as unknown as Record<string, string>
      );
    } catch {
      // fail-open: saturation signal is best-effort
    }
  } catch (error) {
    onStreamThrow();
    trackPendingRequest(model, provider, connectionId, false);
    const errorMetadata = getSafeErrorMetadata(error);
    const managedLeaseFenceCode = getManagedLeaseFenceErrorCode(errorMetadata.code);
    if (managedLeaseFenceCode)
      return {
        kind: "returned" as const,
        value: managedLeaseFenceErrorResult(managedLeaseFenceCode),
        carry: carry(),
      };
    // isSemaphoreCapacityError already reads the code through getSafeErrorMetadata,
    // so a hostile rejection cannot escape this classification.
    if (isSemaphoreCapacityError(error)) {
      const semaphoreCode = errorMetadata.code as string;
      appendRequestLog({
        model,
        provider,
        connectionId,
        status: `FAILED ${semaphoreCode}`,
      }).catch(() => {});
      const failureMessage = sanitizeErrorMessage(errorMetadata.message) || "Semaphore timeout";
      persistAttemptLogs({
        status: HTTP_STATUS.RATE_LIMITED,
        error: failureMessage,
        providerRequest: finalBody || translatedBody,
        clientResponse: buildErrorBody(HTTP_STATUS.RATE_LIMITED, failureMessage),
        claudeCacheMeta: claudePromptCacheLogMeta,
        cacheSource: "upstream",
      });
      persistFailureUsage(HTTP_STATUS.RATE_LIMITED, semaphoreCode);
      const result = stream
        ? createStreamingErrorResult(HTTP_STATUS.RATE_LIMITED, failureMessage, semaphoreCode)
        : createErrorResult(HTTP_STATUS.RATE_LIMITED, failureMessage);
      return {
        kind: "returned" as const,
        value: {
          ...result,
          errorType: "account_semaphore_capacity",
          errorCode: semaphoreCode,
        },
        carry: carry(),
      };
    }
    // abort(reason) can reject with a raw string lacking `name`/`status`; classify
    // it through isLocalStreamLifecycleError so it maps to 499 rather than the
    // 502 provider-failure default.
    let isRequestAborted = errorMetadata.name === "AbortError";
    if (!isRequestAborted) {
      try {
        isRequestAborted = isLocalStreamLifecycleError(error);
      } catch {
        // A hostile Proxy must not escape the provider-error boundary during classification.
      }
    }
    // #8376: proxyFetch tags unreachable transport failures so they remain
    // distinguishable from ordinary provider 5xx responses.
    const isProxyUnreachableFailure =
      !isRequestAborted && errorMetadata.errorCode === "proxy_unreachable";
    const errorCode = errorMetadata.code;
    const localRateLimitFailure = localLimiterErrors.getClientSafeLocalRateLimitError(error);
    const failureStatus = isRequestAborted
      ? 499
      : isProxyUnreachableFailure
        ? HTTP_STATUS.BAD_GATEWAY
        : localRateLimitFailure
          ? localRateLimitFailure.status
          : errorMetadata.name === "TimeoutError" || errorMetadata.name === "BodyTimeoutError"
            ? HTTP_STATUS.GATEWAY_TIMEOUT
            : errorMetadata.status
              ? errorMetadata.status
              : HTTP_STATUS.BAD_GATEWAY;
    const failureMessage = isRequestAborted
      ? "Request aborted"
      : (() => {
          try {
            return formatProviderError(
              localRateLimitFailure ?? error,
              provider,
              model,
              failureStatus
            );
          } catch {
            // Formatting is diagnostic only; hostile rejection metadata falls back safely.
            return errorMetadata.message || "Upstream provider error";
          }
        })();
    const safeFailureMessage = sanitizeErrorMessage(failureMessage) || "Upstream provider error";
    const upstreamErrorCode =
      localRateLimitFailure?.code ?? (isProxyUnreachableFailure ? "proxy_unreachable" : errorCode);
    // Tag our own deadline timeouts (fetch-start TimeoutError / body BodyTimeoutError,
    // both surfaced as a 504) as "upstream_timeout" so the cooldown layer can tell a
    // slow-but-not-failed request apart from a real provider 5xx. (Antigravity already
    // tags its pre-response timeout via the code below.)
    const isOwnDeadlineTimeout =
      failureStatus === HTTP_STATUS.GATEWAY_TIMEOUT &&
      (errorMetadata.name === "TimeoutError" || errorMetadata.name === "BodyTimeoutError");
    const upstreamErrorType =
      upstreamErrorCode === ANTIGRAVITY_PRE_RESPONSE_TIMEOUT_CODE || isOwnDeadlineTimeout
        ? "upstream_timeout"
        : failureStatus === 401
          ? "authentication_error"
          : undefined;
    appendRequestLog({
      model,
      provider,
      connectionId,
      status: `FAILED ${failureStatus}`,
    }).catch(() => {});
    persistAttemptLogs({
      status: failureStatus,
      error: safeFailureMessage,
      providerRequest: finalBody || translatedBody,
      // On a client-abort (AbortError), the client already disconnected before
      // we ever got here — this body is what we WOULD have sent, not what was
      // actually delivered. Logging it as `clientResponse` is misleading (the
      // dashboard reads that field as "what the client received"), so omit it
      // for this case; `error` above already records the failure reason.
      clientResponse:
        errorMetadata.name === "AbortError"
          ? undefined
          : buildErrorBody(failureStatus, failureMessage),
      claudeCacheMeta: claudePromptCacheLogMeta,
      cacheSource: "upstream",
    });
    if (isRequestAborted) {
      streamController.handleError(createSafeAbortError());
      return {
        kind: "returned" as const,
        value: createErrorResult(499, "Request aborted"),
        carry: carry(),
      };
    }
    const persistentErrorCode = projectFailureUsageErrorCode({
      statusCode: failureStatus,
      message: failureMessage,
      errorCode: projectPublicErrorIdentifier(
        upstreamErrorCode || errorMetadata.name,
        "upstream_error"
      ),
      errorType: upstreamErrorType,
    });
    persistFailureUsage(failureStatus, persistentErrorCode);
    console.log(`${COLORS.red}[ERROR] ${safeFailureMessage}${COLORS.reset}`);
    if (stream && upstreamErrorCode) {
      const result = createStreamingErrorResult(
        failureStatus,
        failureMessage,
        upstreamErrorCode,
        upstreamErrorType
      );
      localLimiterErrors.markTrustedLocalRateLimitResponse(result.response, error);
      return {
        kind: "returned" as const,
        value: {
          ...result,
          errorType: upstreamErrorType,
          errorCode: upstreamErrorCode,
        },
        carry: carry(),
      };
    }
    const result = createErrorResult(
      failureStatus,
      failureMessage,
      null,
      upstreamErrorCode,
      upstreamErrorType
    );
    localLimiterErrors.markTrustedLocalRateLimitResponse(result.response, error);
    return { kind: "returned" as const, value: result, carry: carry() };
  }
  const refreshRetryOutcome = await runCredentialRefreshRetry({
    body,
    buildUpstreamHeadersForExecute,
    clientRawRequest,
    clientResponseFormat,
    connectionId,
    contextEditingEnabled,
    correlationId,
    credentials,
    effectiveModel,
    executor,
    extendedContext,
    finalBody,
    getExecutionCredentials,
    getManagedLeaseFenceErrorCode,
    isCombo,
    isOpencodeClient,
    log,
    managedLeaseFenceErrorResult,
    onCredentialsRefreshed,
    pendingScope,
    provider,
    providerHeaders,
    providerRequestCapture,
    providerResponse,
    providerUrl,
    reqLogger,
    streamController,
    targetFormat,
    translatedBody,
    trustedEffortContext,
    upstreamStream,
    userAgent,
    assertManagedLeaseFence,
  });
  if (refreshRetryOutcome.earlyReturn) {
    return {
      kind: "returned" as const,
      value: refreshRetryOutcome.earlyReturn,
      carry: carry(),
    };
  }
  providerResponse = refreshRetryOutcome.providerResponse;
  providerUrl = refreshRetryOutcome.providerUrl;
  providerHeaders = refreshRetryOutcome.providerHeaders;
  finalBody = refreshRetryOutcome.finalBody;
  let upstreamErrorParsed = refreshRetryOutcome.upstreamErrorParsed;
  let parsedStatusCode = refreshRetryOutcome.parsedStatusCode;
  let parsedMessage = refreshRetryOutcome.parsedMessage;
  let parsedRetryAfterMs = refreshRetryOutcome.parsedRetryAfterMs;
  let upstreamErrorBody: unknown = refreshRetryOutcome.upstreamErrorBody;

  // Check provider response - return error info for fallback handling
  providerFailure: if (!providerResponse.ok) {
    trackPendingRequest(model, provider, connectionId, false);

    let statusCode = providerResponse.status;
    let message = "";
    let retryAfterMs: number | null = null;
    let upstreamErrorCode: string | undefined;
    let upstreamErrorType: string | undefined;

    if (upstreamErrorParsed) {
      statusCode = parsedStatusCode;
      message = parsedMessage;
      retryAfterMs = parsedRetryAfterMs;
    } else {
      const details = await parseUpstreamError(providerResponse, provider);
      statusCode = details.statusCode;
      message = details.message;
      retryAfterMs = details.retryAfterMs;
      upstreamErrorBody = details.responseBody;
      upstreamErrorCode = typeof details.errorCode === "string" ? details.errorCode : undefined;
      upstreamErrorType = typeof details.errorType === "string" ? details.errorType : undefined;
    }

    // Gateways like agentrouter misstate temporary quota exhaustion as 403/400,
    // which downstream classification treats as AUTH_ERROR and clients like
    // Claude Code treat as permanent. Restate to 429 (+ synthetic Retry-After)
    // BEFORE any classification so both the fallback engine and the surfaced
    // client status see a retryable error. Registry-scoped per provider.
    const restatement = applyStatusRestatement({
      provider,
      status: statusCode,
      message,
      body: upstreamErrorBody,
      retryAfterMs,
    });
    if (restatement.ruleId) {
      statusCode = restatement.status;
      retryAfterMs = restatement.retryAfterMs;
      log?.info?.(
        "STATUS_RESTATE",
        `${provider} ${restatement.fromStatus}→${statusCode} (${restatement.ruleId})`
      );
    }

    const signatureRecovery = pipelineRecovered
      ? { attempted: false, succeeded: false, execution: null, error: null, recoveryBody: null }
      : await recoverAnthropicThinkingSignature({
          provider,
          statusCode,
          message,
          body: translatedBody,
          execute: async (recoveryBody) => {
            translatedBody = recoveryBody as typeof translatedBody;
            return executeProviderRequest(currentModel, false);
          },
          parseError: (response) => parseUpstreamError(response, provider),
        });
    if (!pipelineRecovered && signatureRecovery.attempted && signatureRecovery.execution) {
      providerResponse = signatureRecovery.execution.response;
      if (signatureRecovery.succeeded) {
        providerUrl = signatureRecovery.execution.url;
        providerHeaders = signatureRecovery.execution.headers;
        finalBody = providerRequestCapture.body(signatureRecovery.execution.transformedBody);
        reqLogger.logTargetRequest(providerUrl, providerHeaders, finalBody);
        updatePendingScope(pendingScope, {
          providerRequest: finalBody,
          providerUrl,
          stage: "provider_response_started",
        });
        log?.info?.(
          "THINKING_SIGNATURE",
          `Recovered ${provider}/${currentModel} after one historical-thinking retry`
        );
      } else if (signatureRecovery.error) {
        statusCode = signatureRecovery.error.statusCode;
        message = signatureRecovery.error.message;
        retryAfterMs = signatureRecovery.error.retryAfterMs;
        upstreamErrorBody = signatureRecovery.error.responseBody;
        upstreamErrorCode =
          typeof signatureRecovery.error.errorCode === "string"
            ? signatureRecovery.error.errorCode
            : undefined;
        upstreamErrorType =
          typeof signatureRecovery.error.errorType === "string"
            ? signatureRecovery.error.errorType
            : undefined;
      }
    }

    if (signatureRecovery.succeeded) break providerFailure;

    // #10281 — tiny-budget reasoning probes (e.g. Claude Code's `/model` check
    // sends `max_tokens: 1`): the model burns the whole budget on thinking, and
    // some upstreams (e.g. api.cline.bot for deepseek-v4-flash) answer the empty
    // outcome with a 5xx ("empty response content") instead of a truncated 200.
    // Answer such probes with a valid truncated response rather than relaying the
    // upstream failure — which would also mark the connection unavailable and
    // poison fallback/cooldown bookkeeping for a request that is only a probe.
    if (
      !stream &&
      isTinyBudgetReasoningProbe({ model: currentModel, body: finalBody || translatedBody }) &&
      isEmptyContentUpstreamFailure(statusCode, message)
    ) {
      providerResponse = buildReasoningProbeTruncatedResponse({
        model: currentModel,
        maxTokens: toPositiveInteger(
          (finalBody || translatedBody)?.max_tokens ??
            (finalBody || translatedBody)?.max_completion_tokens
        ),
        requestId: skillRequestId,
      });
      log?.warn?.(
        "PROBE",
        `Reasoning probe (max_tokens < ${REASONING_BUFFER_MIN_TRIGGER}) answered with truncated 200 — upstream reported "${message}"`
      );
      break providerFailure;
    }

    const errorConnectionId = getCurrentConnectionId() || connectionId;
    await applyProviderFailureClassification({
      statusCode,
      message,
      headers: providerResponse.headers,
      upstreamErrorBody,
      retryAfterMs,
      targetModel: currentModel,
    });

    appendRequestLog({
      model,
      provider,
      connectionId: errorConnectionId,
      status: `FAILED ${statusCode}`,
    }).catch(() => {});

    const errMsg = formatProviderError(new Error(message), provider, model, statusCode);
    const safeErrMsg = sanitizeErrorMessage(errMsg) || "Upstream provider error";
    const safeUpstreamErrorBody = sanitizeUpstreamDetails(upstreamErrorBody);
    console.log(`${COLORS.red}[ERROR] ${safeErrMsg}${COLORS.reset}`);

    // Log Antigravity retry time if available
    if (retryAfterMs && provider === "antigravity") {
      const retrySeconds = Math.ceil(retryAfterMs / 1000);
      log?.debug?.("RETRY", `Antigravity quota reset in ${retrySeconds}s (${retryAfterMs}ms)`);
    }

    // Log error with full request body for debugging
    reqLogger.logError(new Error(message), finalBody || translatedBody);
    reqLogger.logProviderResponse(
      providerResponse.status,
      providerResponse.statusText,
      providerResponse.headers,
      safeUpstreamErrorBody
    );

    // Rate limiter updated in applyProviderFailureClassification

    // ── T5: Intra-family model fallback ──────────────────────────────────────
    // Before returning a model-unavailable error upstream, try sibling models
    // from the same family. This keeps the request alive on the same account
    // instead of failing the entire combo.
    const familyRecovery = onFailure({
      view: { kind: "pipeline" },
      status: statusCode,
      message,
      provider,
      model: currentModel,
      connectionId: String(getCurrentConnectionId() || connectionId || ""),
      allowAccountRotation: !managedLease && comboStrategy !== "context-relay",
      allowModelFallback: !pipelineRecovered,
      isolateProbe: await shouldIsolateProbeFailures(),
      nextModel: getNextFamilyFallback(currentModel, triedModels, provider),
      canRefresh: false,
    });
    if (!pipelineRecovered && familyRecovery.dispatch.action === "fallback-model") {
      const nextModel = familyRecovery.dispatch.nextModel;
      if (nextModel) {
        triedModels.add(nextModel);
        currentModel = nextModel;
        translatedBody.model = nextModel;
        log?.info?.("MODEL_FALLBACK", `${model} unavailable (${statusCode}) → trying ${nextModel}`);
        // Re-execute with the fallback model
        try {
          const fallbackResult = await executeProviderRequest(nextModel, false);
          if (fallbackResult.response.ok) {
            providerResponse = fallbackResult.response;
            providerUrl = fallbackResult.url;
            providerHeaders = fallbackResult.headers;
            finalBody = providerRequestCapture.body(fallbackResult.transformedBody);
            reqLogger.logTargetRequest(providerUrl, providerHeaders, finalBody);
            updatePendingScope(pendingScope, {
              providerRequest: finalBody,
              providerUrl,
              stage: "provider_response_started",
            });
            // Continue processing with the fallback response — skip error return
            log?.info?.("MODEL_FALLBACK", `Serving ${nextModel} as fallback for ${model}`);
            // Jump to streaming/non-streaming handling below
            // We fall through by NOT returning here
          } else {
            // Fallback also failed — return original error
            persistAttemptLogs({
              status: statusCode,
              error: safeErrMsg,
              providerRequest: finalBody || translatedBody,
              providerResponse: safeUpstreamErrorBody,
              clientResponse: buildErrorBody(statusCode, errMsg),
              cacheSource: "upstream",
            });
            persistFailureUsage(statusCode, "model_unavailable");
            return {
              kind: "returned" as const,
              value: createErrorResult(
                statusCode,
                errMsg,
                retryAfterMs,
                upstreamErrorCode,
                upstreamErrorType,
                upstreamErrorBody,
                { passthrough: sourceFormat === FORMATS.CLAUDE }
              ),
              carry: carry(),
            };
          }
        } catch {
          persistAttemptLogs({
            status: statusCode,
            error: safeErrMsg,
            providerRequest: finalBody || translatedBody,
            providerResponse: safeUpstreamErrorBody,
            clientResponse: buildErrorBody(statusCode, errMsg),
            cacheSource: "upstream",
          });
          persistFailureUsage(statusCode, "model_unavailable");
          return {
            kind: "returned" as const,
            value: createErrorResult(
              statusCode,
              errMsg,
              retryAfterMs,
              upstreamErrorCode,
              upstreamErrorType,
              upstreamErrorBody,
              { passthrough: sourceFormat === FORMATS.CLAUDE }
            ),
            carry: carry(),
          };
        }
      } else {
        persistAttemptLogs({
          status: statusCode,
          error: safeErrMsg,
          providerRequest: finalBody || translatedBody,
          providerResponse: safeUpstreamErrorBody,
          clientResponse: buildErrorBody(statusCode, errMsg),
          cacheSource: "upstream",
        });
        persistFailureUsage(statusCode, "model_unavailable");
        return {
          kind: "returned" as const,
          value: createErrorResult(
            statusCode,
            errMsg,
            retryAfterMs,
            upstreamErrorCode,
            upstreamErrorType,
            upstreamErrorBody,
            { passthrough: sourceFormat === FORMATS.CLAUDE }
          ),
          carry: carry(),
        };
      }
    } else if (isContextOverflowError(statusCode, message)) {
      const familyCandidates = getModelFamily(currentModel, provider).filter(
        (m) => m !== currentModel && !triedModels.has(m)
      );
      const nextModel =
        findLargerContextModel(currentModel, familyCandidates, provider) ??
        getNextFamilyFallback(currentModel, triedModels, provider);
      if (nextModel) {
        triedModels.add(nextModel);
        currentModel = nextModel;
        translatedBody.model = nextModel;
        log?.info?.("CONTEXT_OVERFLOW_FALLBACK", `${model} context overflow → trying ${nextModel}`);
        try {
          const fallbackResult = await executeProviderRequest(nextModel, false);
          if (fallbackResult.response.ok) {
            providerResponse = fallbackResult.response;
            providerUrl = fallbackResult.url;
            providerHeaders = fallbackResult.headers;
            finalBody = providerRequestCapture.body(fallbackResult.transformedBody);
            reqLogger.logTargetRequest(providerUrl, providerHeaders, finalBody);
            updatePendingScope(pendingScope, {
              providerRequest: finalBody,
              providerUrl,
              stage: "provider_response_started",
            });
            log?.info?.(
              "CONTEXT_OVERFLOW_FALLBACK",
              `Serving ${nextModel} as fallback for ${model}`
            );
          } else {
            persistAttemptLogs({
              status: statusCode,
              error: safeErrMsg,
              providerRequest: finalBody || translatedBody,
              providerResponse: safeUpstreamErrorBody,
              clientResponse: buildErrorBody(statusCode, errMsg),
              cacheSource: "upstream",
            });
            persistFailureUsage(statusCode, "context_overflow");
            return {
              kind: "returned" as const,
              value: createErrorResult(
                statusCode,
                errMsg,
                retryAfterMs,
                upstreamErrorCode,
                upstreamErrorType,
                upstreamErrorBody,
                { passthrough: sourceFormat === FORMATS.CLAUDE }
              ),
              carry: carry(),
            };
          }
        } catch {
          persistAttemptLogs({
            status: statusCode,
            error: safeErrMsg,
            providerRequest: finalBody || translatedBody,
            providerResponse: safeUpstreamErrorBody,
            clientResponse: buildErrorBody(statusCode, errMsg),
            cacheSource: "upstream",
          });
          persistFailureUsage(statusCode, "context_overflow");
          return {
            kind: "returned" as const,
            value: createErrorResult(
              statusCode,
              errMsg,
              retryAfterMs,
              upstreamErrorCode,
              upstreamErrorType,
              upstreamErrorBody,
              { passthrough: sourceFormat === FORMATS.CLAUDE }
            ),
            carry: carry(),
          };
        }
      } else {
        persistAttemptLogs({
          status: statusCode,
          error: safeErrMsg,
          providerRequest: finalBody || translatedBody,
          providerResponse: safeUpstreamErrorBody,
          clientResponse: buildErrorBody(statusCode, errMsg),
          cacheSource: "upstream",
        });
        persistFailureUsage(statusCode, "context_overflow");
        return {
          kind: "returned" as const,
          value: createErrorResult(
            statusCode,
            errMsg,
            retryAfterMs,
            upstreamErrorCode,
            upstreamErrorType,
            upstreamErrorBody,
            { passthrough: sourceFormat === FORMATS.CLAUDE }
          ),
          carry: carry(),
        };
      }
    } else {
      persistAttemptLogs({
        status: statusCode,
        error: safeErrMsg,
        providerRequest: finalBody || translatedBody,
        providerResponse: safeUpstreamErrorBody,
        clientResponse: buildErrorBody(statusCode, errMsg),
        cacheSource: "upstream",
      });
      persistFailureUsage(statusCode, `upstream_${statusCode}`);

      // Emergency budget fallback is orchestrated exclusively by the routing layer
      // (src/sse/handlers/chat.ts), which resolves credentials FOR the emergency
      // provider through account selection. The executor-level hop that used to
      // live here re-sent the FAILING provider's credentials to the emergency
      // provider's endpoint (e.g. the OpenAI API key to integrate.api.nvidia.com)
      // — a cross-provider credential leak that also never succeeded upstream.
      return {
        kind: "returned" as const,
        value: createErrorResult(
          statusCode,
          errMsg,
          retryAfterMs,
          upstreamErrorCode,
          upstreamErrorType,
          upstreamErrorBody,
          { passthrough: sourceFormat === FORMATS.CLAUDE }
        ),
        carry: carry(),
      };
    }
    // ── End T5 ───────────────────────────────────────────────────────────────
  }

  return { kind: "fellThrough", carry: carry() };
}
