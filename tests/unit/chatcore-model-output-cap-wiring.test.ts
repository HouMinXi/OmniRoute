// Direct output-budget tests cannot prove handleChatCore passes capability caps
// through its non-combo runtime path. This drives that public handler with a
// temporary DB and upstream fetch stub.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-model-cap-wiring-"));
process.env.DATA_DIR = TEST_DATA_DIR;

const core = await import("../../src/lib/db/core.ts");
const overridesDb = await import("../../src/lib/db/modelCapabilityOverrides.ts");
const featureFlagsDb = await import("../../src/lib/db/featureFlags.ts");
const { handleChatCore } = await import("../../open-sse/handlers/chatCore.ts");

const PROVIDER = "capwire-testprov";
const MODEL = "capwire-testmodel";
const OUTPUT_CAP = 1000;
const INPUT_CAP = 10;
const REQUESTED_MAX_TOKENS = 50_000;
const originalFetch = globalThis.fetch;
type DispatchedBody = { max_tokens?: number };
let dispatchedBody: DispatchedBody | null = null;
let fetchCalls = 0;
function noteDispatchedBody(body: DispatchedBody | null): DispatchedBody | null {
  dispatchedBody = body;
  return dispatchedBody;
}
function readDispatchedBody(): DispatchedBody | null {
  return noteDispatchedBody(dispatchedBody);
}
const silentLog = { debug() {}, info() {}, warn() {}, error() {} };

function buildRequest(maxTokens: number, content = "hello") {
  const body = {
    model: MODEL,
    messages: [{ role: "user", content }],
    max_tokens: maxTokens,
    stream: false,
  };
  return {
    body,
    modelInfo: { provider: PROVIDER, model: MODEL, extendedContext: false },
    credentials: {
      apiKey: "sk-test",
      providerSpecificData: { baseUrl: "https://capwire.example.test" },
    },
    clientRawRequest: {
      endpoint: "/v1/chat/completions",
      body,
      headers: new Headers({ accept: "application/json" }),
    },
    userAgent: "unit-test",
    isCombo: false,
    log: silentLog,
    comboStrategy: null,
    connectionId: "capwire",
    comboName: null,
    onCredentialsRefreshed: async () => {},
    onRequestSuccess: () => {},
    onStreamFailure: () => {},
    onDisconnect: () => {},
  };
}

test.before(() => {
  core.resetDbInstance();
  assert.equal(
    overridesDb.setModelCapabilityOverride(`${PROVIDER}/${MODEL}`, "max_output_tokens", OUTPUT_CAP),
    true
  );
  assert.equal(
    overridesDb.setModelCapabilityOverride(`${PROVIDER}/${MODEL}`, "max_input_tokens", INPUT_CAP),
    true
  );
  globalThis.fetch = async (_input: RequestInfo | URL, init?: RequestInit) => {
    fetchCalls += 1;
    noteDispatchedBody(init?.body ? (JSON.parse(String(init.body)) as DispatchedBody) : null);
    return new Response(
      JSON.stringify({
        id: "chatcmpl-capwire",
        choices: [
          { index: 0, message: { role: "assistant", content: "ok" }, finish_reason: "stop" },
        ],
        usage: { prompt_tokens: 1, completion_tokens: 1, total_tokens: 2 },
      }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  };
});

test.after(() => {
  globalThis.fetch = originalFetch;
  featureFlagsDb.removeFeatureFlagOverride("DISABLE_CONTEXT_WINDOW_CHECKS");
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
});

test("handleChatCore clamps an over-cap max_tokens to the model's output cap before dispatch", async () => {
  dispatchedBody = null;
  fetchCalls = 0;
  await handleChatCore(buildRequest(REQUESTED_MAX_TOKENS));
  assert.equal(fetchCalls, 1);
  const sent = readDispatchedBody();
  if (sent === null) throw new Error("expected a dispatched body");
  assert.equal(sent.max_tokens, OUTPUT_CAP);
});

test("handleChatCore leaves a max_tokens below the cap untouched", async () => {
  dispatchedBody = null;
  fetchCalls = 0;
  const underCap = OUTPUT_CAP - 1;
  await handleChatCore(buildRequest(underCap));
  assert.equal(fetchCalls, 1);
  const sent = readDispatchedBody();
  if (sent === null) throw new Error("expected a dispatched body");
  assert.equal(sent.max_tokens, underCap);
});

test("handleChatCore rejects input over the model input cap before upstream dispatch", async () => {
  dispatchedBody = null;
  fetchCalls = 0;
  const result = await handleChatCore(buildRequest(1, "x".repeat(200)));
  assert.ok("status" in result, "input-cap rejection must return a status");
  assert.equal(result.status, 400);
  assert.equal(fetchCalls, 0, "input-cap rejection must not call the upstream");
  assert.match(JSON.stringify(result), /maximum input tokens/i);
});

test("handleChatCore dispatches input within the model input cap", async () => {
  dispatchedBody = null;
  fetchCalls = 0;
  await handleChatCore(buildRequest(1, "x"));
  assert.equal(fetchCalls, 1);
  assert.ok(dispatchedBody, "input below the cap must reach the upstream");
});

test("DISABLE_CONTEXT_WINDOW_CHECKS lets direct-model input exceed the declared input cap", async () => {
  dispatchedBody = null;
  fetchCalls = 0;
  featureFlagsDb.setFeatureFlagOverride("DISABLE_CONTEXT_WINDOW_CHECKS", "true");
  try {
    const result = await handleChatCore(buildRequest(1, "x".repeat(200)));
    assert.ok("success" in result, "disabled context checks must return a success result");
    assert.equal(result.success, true);
    assert.equal(fetchCalls, 1, "disabled context checks must let the upstream decide");
    assert.ok(dispatchedBody, "oversized input must reach the upstream when the flag is enabled");
  } finally {
    featureFlagsDb.removeFeatureFlagOverride("DISABLE_CONTEXT_WINDOW_CHECKS");
  }
});

test("DISABLE_CONTEXT_WINDOW_CHECKS keeps the direct model output cap active", async () => {
  dispatchedBody = null;
  fetchCalls = 0;
  featureFlagsDb.setFeatureFlagOverride("DISABLE_CONTEXT_WINDOW_CHECKS", "true");
  try {
    const result = await handleChatCore(buildRequest(REQUESTED_MAX_TOKENS, "x".repeat(200)));
    assert.ok("success" in result, "disabled context checks must return a success result");
    assert.equal(result.success, true);
    assert.equal(fetchCalls, 1);
    const sent = readDispatchedBody();
    if (sent === null) throw new Error("expected a dispatched body");
    assert.equal(sent.max_tokens, OUTPUT_CAP);
  } finally {
    featureFlagsDb.removeFeatureFlagOverride("DISABLE_CONTEXT_WINDOW_CHECKS");
  }
});
