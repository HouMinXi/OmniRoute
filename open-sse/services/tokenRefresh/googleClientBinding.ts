import { resolvePublicCred } from "../../utils/publicCreds.ts";

/**
 * Built-in (env-override-free) Google client credentials per provider.
 *
 * `PROVIDERS[x].clientId` resolves env overrides first
 * (ANTIGRAVITY_OAUTH_CLIENT_ID / GEMINI_OAUTH_CLIENT_ID), so once an operator
 * configures a custom OAuth client the resolved value can no longer see the
 * embedded client that issued the refresh tokens of every pre-existing
 * connection. Those connections must keep refreshing against the built-in
 * client of THEIR provider: Google binds a refresh token to the client that
 * issued it and answers any other client with 401 unauthorized_client.
 * gemini and antigravity embed DIFFERENT desktop clients, so the fallback is
 * keyed by provider, not global.
 */
const BUILTIN_ANTIGRAVITY_CLIENT = {
  clientId: resolvePublicCred("antigravity_id"),
  clientSecret: resolvePublicCred("antigravity_alt"),
} as const;

const BUILTIN_GEMINI_CLIENT = {
  clientId: resolvePublicCred("gemini_id"),
  clientSecret: resolvePublicCred("gemini_alt"),
} as const;

function builtinClientFor(provider: string) {
  return provider === "gemini" ? BUILTIN_GEMINI_CLIENT : BUILTIN_ANTIGRAVITY_CLIENT;
}

/**
 * Pick the OAuth client credentials a Google refresh must use.
 *
 * The marker lives in the connection's providerSpecificData.oauthClient:
 *   - "custom": the connection was authorized under the operator's custom
 *     client (env override set at authorize time), so the refresh must
 *     present that same client.
 *   - "builtin" or missing: the connection predates the marker or was
 *     authorized with the embedded desktop client. Missing deliberately
 *     means built-in: every connection created before this marker existed
 *     was issued by an embedded client, because no per-connection custom
 *     client could be recorded at all.
 *
 * When no custom credentials are configured, both branches resolve to the
 * same built-in client and the choice is moot.
 */
export function selectGoogleRefreshClient(
  provider: string,
  oauthClientMarker: unknown,
  configuredClient: { clientId?: string; clientSecret?: string } | null | undefined
): { clientId: string; clientSecret: string } {
  if (
    oauthClientMarker === "custom" &&
    configuredClient?.clientId &&
    configuredClient?.clientSecret
  ) {
    return {
      clientId: configuredClient.clientId,
      clientSecret: configuredClient.clientSecret,
    };
  }
  const builtin = builtinClientFor(provider);
  return { clientId: builtin.clientId, clientSecret: builtin.clientSecret };
}
