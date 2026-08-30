import assert from "node:assert";
import { test, mock } from "node:test";

// A Google refresh token is bound to the OAuth client that issued it. When an
// operator overrides ANTIGRAVITY_OAUTH_CLIENT_ID/SECRET with their own web
// client, existing connections (issued by the built-in desktop client) must
// keep refreshing against the built-in credentials, and only connections
// created under the custom client should refresh against the custom one.
// Regression: 2026-08-30, switching env credentials globally made every
// existing antigravity/agy refresh return 401 unauthorized_client.
import { getAccessToken } from "../../open-sse/services/tokenRefresh.ts";

const BUILTIN_ID = "builtin-client-id.apps.googleusercontent.com"; // unused after assert rewrite
const CUSTOM_ID = "custom-client-id.apps.googleusercontent.com";

async function captureRefreshCall(providerOverridePsd, provider = "antigravity") {
  const calls = [];
  // refreshGoogleToken reads PROVIDERS[provider].clientId from
  // ../config/constants.ts. The registry resolves the built-in desktop client
  // unless env overrides exist; point the env at the "custom" client so the
  // proxy below reports which one the refresh actually used.
  const realId = process.env.ANTIGRAVITY_OAUTH_CLIENT_ID;
  const realSecret = process.env.ANTIGRAVITY_OAUTH_CLIENT_SECRET;
  process.env.ANTIGRAVITY_OAUTH_CLIENT_ID = CUSTOM_ID;
  process.env.ANTIGRAVITY_OAUTH_CLIENT_SECRET = "custom-secret";
  const config = await import("../../open-sse/config/constants.ts");
  const fake = new Proxy(
    { [provider]: { clientId: CUSTOM_ID, clientSecret: "custom-secret" } },
    {
      get(t, p) {
        if (p === provider) return t[p];
        return { clientId: BUILTIN_ID, clientSecret: "builtin-secret" };
      },
    }
  );
  // Temporarily replace the exported binding is not possible for const; instead
  // patch via globalThis fetch to capture what refreshGoogleToken sends.
  const realFetch = globalThis.fetch;
  globalThis.fetch = async (url, init) => {
    if (String(url).includes("oauth2.googleapis.com/token")) {
      const body = new URLSearchParams(init.body);
      calls.push({ client_id: body.get("client_id"), client_secret: body.get("client_secret") });
    }
    return {
      ok: true,
      json: async () => ({ access_token: "at", expires_in: 3600, refresh_token: undefined }),
      text: async () => "{}",
    };
  };
  try {
    await getAccessToken(
      provider,
      {
        connectionId: "test-conn",
        refreshToken: "rt",
        accessToken: null,
        providerSpecificData: providerOverridePsd,
      },
      { warn() {}, info() {}, error() {} }
    );
  } finally {
    globalThis.fetch = realFetch;
    if (realId === undefined) delete process.env.ANTIGRAVITY_OAUTH_CLIENT_ID;
    else process.env.ANTIGRAVITY_OAUTH_CLIENT_ID = realId;
    if (realSecret === undefined) delete process.env.ANTIGRAVITY_OAUTH_CLIENT_SECRET;
    else process.env.ANTIGRAVITY_OAUTH_CLIENT_SECRET = realSecret;
  }
  return calls;
}

test("existing connection without oauthClient marker refreshes with the built-in client", async () => {
  const calls = await captureRefreshCall(undefined);
  assert.equal(calls.length, 1);
  // The built-in client is the masked constant decoded at runtime; asserting
  // it is NOT the env-configured custom client is the behavioral contract.
  assert.notEqual(calls[0].client_id, CUSTOM_ID);
  assert.ok(calls[0].client_id.endsWith(".apps.googleusercontent.com"));
});

test("connection marked oauthClient=builtin refreshes with the built-in client", async () => {
  const calls = await captureRefreshCall({ oauthClient: "builtin" });
  assert.equal(calls.length, 1);
  assert.notEqual(calls[0].client_id, CUSTOM_ID);
  assert.ok(calls[0].client_id.endsWith(".apps.googleusercontent.com"));
});

test("connection marked oauthClient=custom refreshes with the custom client", async () => {
  const calls = await captureRefreshCall({ oauthClient: "custom" });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].client_id, CUSTOM_ID);
});
