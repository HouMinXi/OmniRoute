import test from "node:test";
import assert from "node:assert/strict";

const { runEmptyTurnRetryLoop } = await import(
  "../../open-sse/handlers/chatCore/emptyTurnRetryLoop.ts"
);

function sseResponse(text: string, status = 200): Response {
  const body = new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode(text));
      controller.close();
    },
  });
  return new Response(body, { status, headers: { "content-type": "text/event-stream" } });
}

function sse(...frames: string[]): string {
  return frames.map((f) => `data: ${f}\n\n`).join("") + "data: [DONE]\n\n";
}

const chatChunk = (delta: Record<string, unknown>, finish: string | null = null) =>
  JSON.stringify({
    id: "chatcmpl-probe",
    object: "chat.completion.chunk",
    model: "probe",
    choices: [{ delta, finish_reason: finish }],
  });

const EMPTY_TURN = sse(
  chatChunk({ reasoning_content: "only thinking" }),
  chatChunk({}, "stop")
);
const USEFUL_TURN = sse(chatChunk({ content: "hello" }), chatChunk({}, "stop"));

test("#14715 a rejected retry restores the original connection id", async () => {
  const credentials: Record<string, unknown> = { connectionId: "conn-original" };
  let seenOnExecute: string | null = null;

  await runEmptyTurnRetryLoop({
    providerResponse: sseResponse(EMPTY_TURN),
    credentials,
    provider: "openai",
    currentModel: "gpt-6-sol",
    model: "gpt-6-sol",
    targetFormat: "openai",
    clientResponseFormat: "openai",
    aborted: false,
    timeoutMs: 1000,
    maxTimeoutMs: 1000,
    maxRetries: 1,
    translatedBody: {},
    providerUrl: "https://example.test",
    providerHeaders: {},
    correlationId: "c",
    traceId: "t",
    log: null,
    getProviderCredentials: async () => ({ connectionId: "conn-retry" }),
    executeProviderRequest: async () => {
      seenOnExecute = String(credentials.connectionId);
      return { response: sseResponse(EMPTY_TURN, 500) };
    },
    noteOutcome: () => {},
    logTargetRequest: () => {},
    captureBody: (body: unknown) => body,
  });

  assert.equal(seenOnExecute, "conn-retry");
  assert.equal(credentials.connectionId, "conn-original");
});

test("#14715 an accepted retry keeps the retry connection", async () => {
  const credentials: Record<string, unknown> = { connectionId: "conn-original" };

  const result = await runEmptyTurnRetryLoop({
    providerResponse: sseResponse(EMPTY_TURN),
    credentials,
    provider: "openai",
    currentModel: "gpt-6-sol",
    model: "gpt-6-sol",
    targetFormat: "openai",
    clientResponseFormat: "openai",
    aborted: false,
    timeoutMs: 1000,
    maxTimeoutMs: 1000,
    maxRetries: 1,
    translatedBody: {},
    providerUrl: "https://example.test",
    providerHeaders: {},
    correlationId: "c",
    traceId: "t",
    log: null,
    getProviderCredentials: async () => ({ connectionId: "conn-retry" }),
    executeProviderRequest: async () => ({ response: sseResponse(USEFUL_TURN) }),
    noteOutcome: () => {},
    logTargetRequest: () => {},
    captureBody: (body: unknown) => body,
  });

  assert.equal(credentials.connectionId, "conn-retry");
  assert.equal(result.providerResponse.ok, true);
});
