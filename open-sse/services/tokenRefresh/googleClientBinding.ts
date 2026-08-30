import { resolvePublicCred } from "../../utils/publicCreds.ts";

/**
 * Built-in (env-override-free) Google client credentials.
 *
 * `PROVIDERS.antigravity.clientId` resolves env overrides first
 * (ANTIGRAVITY_OAUTH_CLIENT_ID), so once an operator configures a custom
 * OAuth web client it can no longer see the embedded desktop client that
 * issued the refresh tokens of every pre-existing connection. Those
 * connections must keep refreshing against the built-in client: Google binds
 * a refresh token to the client that issued it and answers any other client
 * with 401 unauthorized_client.
 */
export const BUILTIN_ANTIGRAVITY_CLIENT = {
  clientId: resolvePublicCred("antigravity_id"),
  clientSecret: resolvePublicCred("antigravity_alt"),
} as const;

/**
 * Pick the OAuth client credentials a Google refresh must use.
 *
 * The marker lives in the connection's providerSpecificData.oauthClient:
 *   - "custom": the connection was authorized under the operator's custom
 *     client (ANTIGRAVITY_OAUTH_CLIENT_ID/SECRET set at authorize time), so
 *     the refresh must present that same client.
 *   - "builtin" or missing: the connection predates the marker or was
 *     authorized with the embedded desktop client. Missing deliberately
 *     means built-in: every connection created before this marker existed
 *     was issued by the embedded client, because a custom client could not
 *     be configured for antigravity OAuth at all (redirect_uri stayed
 *     loopback).
 *
 * When no custom credentials are configured, both branches resolve to the
 * same built-in client and the choice is moot.
 */
export function selectGoogleRefreshClient(
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
  return {
    clientId: BUILTIN_ANTIGRAVITY_CLIENT.clientId,
    clientSecret: BUILTIN_ANTIGRAVITY_CLIENT.clientSecret,
  };
}
