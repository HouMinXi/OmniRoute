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
import { DefaultExecutor } from "../../open-sse/executors/default.ts";

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

// ── 执行器级（Task 4）：base.ts 守卫接线 ─────────────────────────────────────
type CapturedCall = { url: string; headers: Record<string, string>; bodyText: string };

/** 驱动真实 execute()，stub 上游 fetch 捕获最终发包。 */
async function runClaudeOAuthExecute(input: {
  rawPassthrough?: boolean;
  isClaudePassthrough?: boolean;
  extraBodyText?: string;
}): Promise<CapturedCall> {
  const executor = new DefaultExecutor("claude");
  const calls: CapturedCall[] = [];
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
    calls.push({
      url: String(url),
      headers: (init?.headers ?? {}) as Record<string, string>,
      bodyText: String(init?.body ?? ""),
    });
    return new Response(
      JSON.stringify({
        id: "msg_test",
        type: "message",
        role: "assistant",
        content: [{ type: "text", text: "ok" }],
        stop_reason: "end_turn",
        usage: { input_tokens: 1, output_tokens: 1 },
      }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  }) as typeof fetch;
  try {
    const psd: Record<string, unknown> = {};
    if (input.rawPassthrough !== undefined) psd.rawPassthrough = input.rawPassthrough;
    const body: Record<string, unknown> = {
      messages: [{ role: "user", content: "hi" }],
      max_tokens: 16,
      system: "client-orig-system",
      tools: [
        {
          name: "read_file",
          input_schema: { type: "object" },
          cache_control: { type: "ephemeral" },
        },
      ],
    };
    if (input.extraBodyText) {
      (body.system as unknown) = [{ type: "text", text: input.extraBodyText }];
    }
    await executor.execute({
      model: "claude-sonnet-4-6",
      body,
      stream: false,
      credentials: {
        // hasClaudeOAuthToken 门槛要求 sk-ant-oat 前缀（base.ts 执行器内联计算）；占位值仅保留前缀形状。
        accessToken: "sk-ant-oat-placeholder",
        providerSpecificData: psd,
      },
      isClaudePassthrough: input.isClaudePassthrough,
    });
  } finally {
    globalThis.fetch = originalFetch;
  }
  // OAuth 路径会先打 /api/claude_cli/bootstrap 元数据请求，取真正的 messages 发包。
  const dispatch = calls.find((c) => c.url.includes("/v1/messages"));
  assert.ok(dispatch, "messages dispatch expected");
  return dispatch;
}

describe("executor wiring (Task 4)", () => {
  it("TC-01: flag off keeps the existing cloak byte behavior", async () => {
    const call = await runClaudeOAuthExecute({ rawPassthrough: false, isClaudePassthrough: true });
    const parsed = JSON.parse(call.bodyText) as Record<string, unknown>;
    const sys = parsed.system as Array<Record<string, unknown>>;
    assert.ok(
      sys.some((b) => String(b.text).startsWith("x-anthropic-billing-header:")),
      "billing line must be prepended when the flag is off"
    );
    assert.ok(
      sys.some((b) => String(b.text).startsWith("You are Claude Code")),
      "sentinel must be prepended when the flag is off"
    );
    assert.ok(!call.bodyText.includes("cch=00000;"), "cch placeholder must be signed");
    const tools = parsed.tools as Array<Record<string, unknown>>;
    assert.equal("cache_control" in tools[0], false, "cloak strips tool cache_control");
    assert.ok(
      Object.keys(call.headers).some((k) => k.toLowerCase().startsWith("x-stainless-")),
      "CLI fingerprint headers must be present when the flag is off"
    );
  });

  it("TC-02: flag on skips cloak, billing, sentinel, fingerprint and signing", async () => {
    const call = await runClaudeOAuthExecute({ rawPassthrough: true, isClaudePassthrough: true });
    const parsed = JSON.parse(call.bodyText) as Record<string, unknown>;
    assert.equal(parsed.system, "client-orig-system", "system blocks must stay untouched");
    const tools = parsed.tools as Array<Record<string, unknown>>;
    assert.deepEqual(tools[0].cache_control, { type: "ephemeral" });
    assert.equal(tools[0].name, "read_file", "tool name must not be cloaked");
    const lower = Object.keys(call.headers).map((k) => k.toLowerCase());
    assert.ok(!lower.some((k) => k.startsWith("x-stainless-")), "no x-stainless-* headers");
    assert.ok(!lower.includes("x-app"), "no x-app header");
  });

  it("TC-03: format mismatch silently falls back to the standard cloak", async () => {
    const call = await runClaudeOAuthExecute({ rawPassthrough: true, isClaudePassthrough: false });
    const parsed = JSON.parse(call.bodyText) as Record<string, unknown>;
    const sys = parsed.system as Array<Record<string, unknown>>;
    assert.ok(
      Array.isArray(sys) &&
        sys.some((b) => String(b.text).startsWith("x-anthropic-billing-header:")),
      "billing line must appear when isClaudePassthrough is false"
    );
  });

  it("TC-10: first dispatch leaves a literal cch=00000; pattern untouched", async () => {
    const call = await runClaudeOAuthExecute({
      rawPassthrough: true,
      isClaudePassthrough: true,
      extraBodyText: "client literal x-anthropic-billing-header: cch=00000;",
    });
    assert.ok(
      call.bodyText.includes("cch=00000;"),
      "signRequestBody must not recompute the client literal in raw passthrough mode"
    );
    // 计数钉：cloak 跳过时不存在计费行自带的第二个 cch=（CCH_PATTERN 无 /g，
    // 只签第一处——若伪装块仍运行，计费行被签名后此处会看到两个 cch=）。
    const cchCount = (call.bodyText.match(/cch=/g) ?? []).length;
    assert.equal(cchCount, 1, "only the client literal cch= may appear; no billing line");
  });
});
