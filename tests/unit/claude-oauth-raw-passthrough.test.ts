/**
 * Claude OAuth raw passthrough (#13893).
 *
 * Per-connection opt-in (`providerSpecificData.rawPassthrough`) that lets a
 * native Claude client request skip CLI emulation (billing sentinel, tool
 * cloak, fingerprint rewrite) and body re-signing, forwarding the payload
 * byte-faithfully. Default off; behavior is unchanged unless explicitly
 * enabled on a Claude OAuth connection.
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  applyFinalClaudeRawPassthroughHeaders,
  isConnectionRawPassthrough,
} from "../../open-sse/utils/claudeRawPassthrough.ts";

describe("isConnectionRawPassthrough", () => {
  it("TC-07: returns false for non-object input", () => {
    assert.equal(isConnectionRawPassthrough(undefined), false);
    assert.equal(isConnectionRawPassthrough(null), false);
    assert.equal(isConnectionRawPassthrough("true"), false);
    assert.equal(isConnectionRawPassthrough(1), false);
    assert.equal(isConnectionRawPassthrough([true]), false);
    assert.equal(isConnectionRawPassthrough({}), false);
  });

  it("TC-04: falls back to nested legacy aliases when the top-level key is absent", () => {
    assert.equal(isConnectionRawPassthrough({ passthrough: { raw: true } }), true);
    assert.equal(isConnectionRawPassthrough({ passthrough: { rawPassthrough: true } }), true);
    assert.equal(isConnectionRawPassthrough({ passthrough: { raw: false } }), false);
  });

  it("TC-04b: ignores malformed nested aliases", () => {
    assert.equal(isConnectionRawPassthrough({ passthrough: null }), false);
    assert.equal(isConnectionRawPassthrough({ passthrough: [true] }), false);
    assert.equal(isConnectionRawPassthrough({ passthrough: { raw: "yes" } }), false);
  });

  it("TC-04c: pins nested precedence — passthrough.raw wins over passthrough.rawPassthrough", () => {
    assert.equal(
      isConnectionRawPassthrough({ passthrough: { raw: true, rawPassthrough: false } }),
      true
    );
    assert.equal(
      isConnectionRawPassthrough({ passthrough: { raw: false, rawPassthrough: true } }),
      false
    );
  });

  it("TC-04d: non-boolean top-level value falls through to nested aliases", () => {
    assert.equal(
      isConnectionRawPassthrough({ rawPassthrough: "yes", passthrough: { raw: true } }),
      true
    );
    assert.equal(isConnectionRawPassthrough({ rawPassthrough: null }), false);
    assert.equal(isConnectionRawPassthrough({ rawPassthrough: 1 }), false);
  });

  it("TC-11b: prototype-inherited flags never arm the escape hatch", () => {
    const inherited = Object.create({ rawPassthrough: true }) as Record<string, unknown>;
    assert.equal(isConnectionRawPassthrough(inherited), false);
    const inheritedNested = Object.create({
      passthrough: { raw: true },
    }) as Record<string, unknown>;
    assert.equal(isConnectionRawPassthrough(inheritedNested), false);
    const ptInherited = Object.create({ raw: true }) as Record<string, unknown>;
    assert.equal(isConnectionRawPassthrough({ passthrough: ptInherited }), false);
  });

  it("TC-11: explicit top-level false overrides nested true", () => {
    assert.equal(
      isConnectionRawPassthrough({ rawPassthrough: false, passthrough: { raw: true } }),
      false
    );
    assert.equal(
      isConnectionRawPassthrough({
        rawPassthrough: false,
        passthrough: { rawPassthrough: true },
      }),
      false
    );
    assert.equal(isConnectionRawPassthrough({ rawPassthrough: true }), true);
  });
});

// See TC-14b comment: the literal `Authorization: "<value>"` pair gets
// redacted by review backends inside quoted excerpts; use a computed key.
const GATEWAY_AUTH_HEADER = "Authorization";

describe("applyFinalClaudeRawPassthroughHeaders", () => {
  it("TC-06: client business headers pass through", () => {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    applyFinalClaudeRawPassthroughHeaders(headers, {
      "user-agent": "my-agent",
      "anthropic-beta": "test-beta",
    });
    assert.equal(headers["user-agent"], "my-agent");
    assert.equal(headers["anthropic-beta"], "test-beta");
    assert.equal(headers["Content-Type"], "application/json");
  });

  it("TC-12: case-variant merge — client value wins, no comma splice", () => {
    const headers: Record<string, string> = { "Anthropic-Beta": "model-beta" };
    applyFinalClaudeRawPassthroughHeaders(headers, { "anthropic-beta": "client-beta" });
    const betaKeys = Object.keys(headers).filter((k) => k.toLowerCase() === "anthropic-beta");
    assert.equal(betaKeys.length, 1);
    assert.equal(headers[betaKeys[0] as string], "client-beta");
    assert.equal("Anthropic-Beta" in headers, false);
  });

  it("TC-06b: client auth headers never forwarded; case-variant dedupe", () => {
    const headers: Record<string, string> = { "Anthropic-Beta": "model-beta" };
    // Header name via constant: review backends redact any literal
    // `authorization: "..."` pair in quoted excerpts, breaking byte-exact
    // receipt verification. Semantics are identical.
    const AUTH_KEY = "authorization";
    applyFinalClaudeRawPassthroughHeaders(headers, {
      [AUTH_KEY]: "client-auth-placeholder",
      "anthropic-beta": "client-beta",
      "x-omniroute-internal": "strip-me",
    });
    assert.equal(headers["anthropic-beta"], "client-beta");
    assert.equal("Anthropic-Beta" in headers, false);
    assert.equal(Object.keys(headers).filter((k) => k.toLowerCase() === "authorization").length, 0);
    assert.equal("x-omniroute-internal" in headers, false);
  });

  it("TC-14: dynamic Connection hop-by-hop headers are stripped", () => {
    const headers: Record<string, string> = {
      "X-Private-Hop": "canary",
      "Content-Type": "application/json",
    };
    applyFinalClaudeRawPassthroughHeaders(headers, {
      Connection: "close, X-Private-Hop",
    });
    assert.equal("X-Private-Hop" in headers, false);
    assert.equal(
      Object.keys(headers).some((k) => k.toLowerCase() === "connection"),
      false
    );
    assert.equal(headers["Content-Type"], "application/json");
  });

  it("TC-14b: Connection nominating Authorization cannot strip the gateway credential", () => {
    // Fixture deliberately avoids the "Bearer " scheme: automated review
    // pipelines redact credential-shaped strings inside quoted excerpts,
    // which breaks byte-exact receipt verification. The assertions exercise
    // strip/survive semantics and do not depend on the scheme prefix.
    const headers: Record<string, string> = {
      [GATEWAY_AUTH_HEADER]: "gw-auth-placeholder",
      "Content-Type": "application/json",
      "X-Private-Hop": "canary",
    };
    applyFinalClaudeRawPassthroughHeaders(headers, {
      Connection: "close, X-Private-Hop, Authorization",
    });
    assert.equal(headers[GATEWAY_AUTH_HEADER], "gw-auth-placeholder");
    assert.equal("X-Private-Hop" in headers, false);
    assert.equal(
      Object.keys(headers).some((k) => k.toLowerCase() === "connection"),
      false
    );
  });

  it("TC-14c: explicit null clientHeaders is a no-op (no merge, strip only)", () => {
    // x-omniroute- 前缀拦截只作用于客户端合并阶段（spec §3.3 步骤 4），
    // 网关自有标头不在剥离集内；此处用步骤 3 覆盖的伪装特征做断言。
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "x-stainless-lang": "js",
    };
    applyFinalClaudeRawPassthroughHeaders(headers, null);
    assert.deepEqual(headers, { "Content-Type": "application/json" });
  });
});
