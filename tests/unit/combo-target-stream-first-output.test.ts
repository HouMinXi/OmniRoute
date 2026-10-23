import { test } from "node:test";
import assert from "node:assert/strict";
import { buildTargetTimeoutRunner } from "../../open-sse/services/combo/targetTimeoutRunner.ts";
import {
  awaitFirstOutput,
  SseOutputScanner,
} from "../../open-sse/services/combo/firstOutputStream.ts";
import { OPENAI_RESPONSES_IN_PROGRESS_FRAME } from "../../open-sse/utils/sseHeartbeat.ts";
import type { ComboLogger } from "../../open-sse/services/combo/types.ts";

const noopLog: ComboLogger = { warn() {}, info() {}, error() {}, debug() {} };

const enc = new TextEncoder();

function frame(delta: Record<string, unknown>) {
  return `data: ${JSON.stringify({
    id: "chatcmpl-test",
    object: "chat.completion.chunk",
    choices: [{ index: 0, delta, finish_reason: null }],
  })}\n\n`;
}

/**
 * SSE body that emits the given frames, then either closes or stalls forever. `cancelled` flips
 * when the target is torn down, either through the target's abort signal or a cancel.
 */
function sseBody(
  frames: (string | Uint8Array)[],
  opts: { stall?: boolean; cancelled?: () => void; signal?: AbortSignal | null } = {}
) {
  return new ReadableStream<Uint8Array>({
    start(controller) {
      for (const f of frames) controller.enqueue(typeof f === "string" ? enc.encode(f) : f);
      if (!opts.stall) controller.close();
      opts.signal?.addEventListener(
        "abort",
        () => {
          opts.cancelled?.();
          controller.error(new Error("aborted"));
        },
        { once: true }
      );
    },
    cancel() {
      opts.cancelled?.();
    },
  });
}

function sseResponse(body: ReadableStream<Uint8Array>, status = 200) {
  return new Response(body, {
    status,
    headers: { "content-type": "text/event-stream" },
  });
}

test("a streaming target that never produces output is abandoned within the per-target budget", async () => {
  let cancelled = false;
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () =>
      sseResponse(
        sseBody([": keepalive\n\n"], { stall: true, cancelled: () => (cancelled = true) })
      ),
    comboTargetTimeoutMs: 80,
    log: noopLog,
  });

  const started = Date.now();
  const res = await runner({}, "stalled-model");

  assert.equal(res.status, 504, "a silent stream must fail over, not hold the combo");
  const body = await res.json();
  assert.equal(body?.error?.code, "combo_target_timeout");
  assert.match(res.headers.get("content-type") ?? "", /json/);
  assert.ok(Date.now() - started < 2000, "failover must land near the budget");
  assert.equal(cancelled, true, "the stalled upstream stream must be released");
});

test("the gateway's own Responses heartbeat is not output", async () => {
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () =>
      sseResponse(sseBody([OPENAI_RESPONSES_IN_PROGRESS_FRAME], { stall: true })),
    comboTargetTimeoutMs: 120,
    log: noopLog,
  });

  const res = await runner({}, "responses-model");
  assert.equal(res.status, 504, "a keepalive frame says nothing about the answer");
});

test("an event: progress tick is not output", async () => {
  const progress = 'event: progress\ndata: {"tokens_generated":0,"elapsed_ms":2000}\n\n';
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () => sseResponse(sseBody([progress], { stall: true })),
    comboTargetTimeoutMs: 120,
    log: noopLog,
  });

  const res = await runner({}, "progress-model");
  assert.equal(res.status, 504);
});

test("a streaming target that emits output right away is passed through byte for byte", async () => {
  const frames = [
    frame({ role: "assistant" }),
    frame({ content: "hello" }),
    frame({ content: " world" }),
    "data: [DONE]\n\n",
  ];
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () => sseResponse(sseBody(frames)),
    comboTargetTimeoutMs: 5000,
    log: noopLog,
  });

  const res = await runner({}, "fast-model");
  assert.equal(res.status, 200);
  assert.equal(await res.text(), frames.join(""));
});

test("keepalive comments ahead of the first token are replayed, not swallowed", async () => {
  const frames = [": keepalive\n\n", frame({ content: "hi" }), "data: [DONE]\n\n"];
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () => sseResponse(sseBody(frames)),
    comboTargetTimeoutMs: 5000,
    log: noopLog,
  });

  const res = await runner({}, "slow-first-token");
  assert.equal(res.status, 200);
  assert.equal(await res.text(), frames.join(""));
});

test("a tool call without any text still counts as the target producing output", async () => {
  const frames = [
    frame({
      tool_calls: [
        { index: 0, id: "call_1", type: "function", function: { name: "run", arguments: "" } },
      ],
    }),
    frame({ tool_calls: [{ index: 0, function: { arguments: '{"command":"echo hi"}' } }] }),
    "data: [DONE]\n\n",
  ];
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () => sseResponse(sseBody(frames)),
    comboTargetTimeoutMs: 5000,
    log: noopLog,
  });

  const res = await runner({}, "tool-model");
  assert.equal(res.status, 200);
  assert.equal(await res.text(), frames.join(""));
});

test("a refusal delta counts as output, matching the shared predicate", async () => {
  const frames = [frame({ refusal: "I cannot help with that" })];
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () => sseResponse(sseBody(frames, { stall: true })),
    comboTargetTimeoutMs: 5000,
    log: noopLog,
  });

  const res = await runner({}, "refusal-model");
  assert.equal(res.status, 200, "a refusal is the model answering, not silence");
});

test("a Responses-protocol reasoning delta counts as output", async () => {
  const frames = ['data: {"type":"response.reasoning_text.delta","delta":"thinking"}\n\n'];
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () => sseResponse(sseBody(frames, { stall: true })),
    comboTargetTimeoutMs: 5000,
    log: noopLog,
  });

  const res = await runner({}, "codex-model");
  assert.equal(res.status, 200);
});

test("a Messages-protocol content block delta counts as output", async () => {
  const frames = [
    'data: {"type":"content_block_delta","delta":{"type":"text_delta","text":"hi"}}\n\n',
  ];
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () => sseResponse(sseBody(frames, { stall: true })),
    comboTargetTimeoutMs: 5000,
    log: noopLog,
  });

  const res = await runner({}, "claude-model");
  assert.equal(res.status, 200);
});

test("heartbeat-only frames do not end the guard", async () => {
  const frames = ['data: {"type":"ping"}\n\n', 'data: {"choices":[{"index":0,"delta":{}}]}\n\n'];
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () => sseResponse(sseBody(frames, { stall: true })),
    comboTargetTimeoutMs: 120,
    log: noopLog,
  });

  const res = await runner({}, "heartbeat-model");
  assert.equal(res.status, 504, "a stream that only sends heartbeats is still silent");
});

test("a message_start-only stream is a heartbeat, not output", async () => {
  const frames = ['data: {"type":"message_start","message":{"id":"m1"}}\n\n'];
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () => sseResponse(sseBody(frames, { stall: true })),
    comboTargetTimeoutMs: 120,
    log: noopLog,
  });

  const res = await runner({}, "messages-model");
  assert.equal(res.status, 504, "message_start says nothing about the answer yet");
});

test("a body that closes before any output is left to the empty-response path", async () => {
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () => sseResponse(sseBody([])),
    comboTargetTimeoutMs: 5000,
    log: noopLog,
  });

  const res = await runner({}, "empty-model");
  assert.equal(res.status, 200, "an empty stream is not a per-target timeout");
});

test("an answer that arrives without a trailing blank line is not thrown away", async () => {
  const unTerminated = 'data: {"choices":[{"delta":{"content":"hello"}}]}\n';
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () => sseResponse(sseBody([unTerminated])),
    comboTargetTimeoutMs: 5000,
    log: noopLog,
  });

  const res = await runner({}, "unterminated-model");
  assert.equal(res.status, 200);
  assert.equal(await res.text(), unTerminated);
});

test("an event split across several data lines is still recognised as output", async () => {
  const frames = ['data: {"type":"response.output_text.delta",\ndata: "delta":"hi"}\n\n'];
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () => sseResponse(sseBody(frames, { stall: true })),
    comboTargetTimeoutMs: 5000,
    log: noopLog,
  });

  const res = await runner({}, "multi-line-model");
  assert.equal(res.status, 200);
});

test("the scanner joins the data lines of one event before deciding", async () => {
  const scanner = new SseOutputScanner();
  assert.equal(scanner.push('data: {"type":"response.output_text.delta",\n'), false);
  assert.equal(scanner.push('data: "delta":"hi"}\n\n'), true);
});

test("bare CR line endings are read as line breaks", async () => {
  const scanner = new SseOutputScanner();
  assert.equal(scanner.push('data: {"choices":[{"delta":{"content":"hi"}}]}\r'), false);
  assert.equal(scanner.push("\r"), true);
});

test("a CRLF split across chunks is one line break, not two", async () => {
  const scanner = new SseOutputScanner();
  assert.equal(scanner.push('data: {"choices":[{"delta":{"content":"hi"}}]}\r'), false);
  assert.equal(scanner.push("\n\r\n"), true);
});

test("an unterminated flood releases the gate instead of buffering forever", async () => {
  const scanner = new SseOutputScanner();
  assert.equal(scanner.push("x".repeat(70 * 1024)), false);
  assert.equal(scanner.overflowedWithoutOutput(), true);
});

test("a non-2xx streaming response keeps its status", async () => {
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () => sseResponse(sseBody([], { stall: true }), 429),
    comboTargetTimeoutMs: 5000,
    log: noopLog,
  });

  const res = await runner({}, "rate-limited-model");
  assert.equal(res.status, 429, "a rate limit keeps its meaning instead of becoming a 504");
});

test("the gate budget is what the dispatch left over", async () => {
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () => {
      await new Promise((resolve) => setTimeout(resolve, 600));
      return sseResponse(sseBody([], { stall: true }));
    },
    comboTargetTimeoutMs: 1000,
    log: noopLog,
  });

  const started = Date.now();
  const res = await runner({}, "slow-dispatch-model");
  const elapsed = Date.now() - started;

  assert.equal(res.status, 504);
  // 600ms of dispatch plus the ~400ms left over; a second full 1000ms budget would overshoot.
  assert.ok(elapsed < 1300, `expected the leftover budget to bound the wait, took ${elapsed}ms`);
  assert.ok(
    elapsed > 800,
    `expected the wait to actually use the leftover budget, took ${elapsed}ms`
  );
});

test("a parent hedge abort during the first-output wait is not a timeout", async () => {
  const parent = new AbortController();
  let cancelled = false;
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async (_b, _m, target) =>
      sseResponse(
        sseBody([], {
          stall: true,
          cancelled: () => (cancelled = true),
          signal: target?.modelAbortSignal ?? null,
        })
      ),
    comboTargetTimeoutMs: 5000,
    log: noopLog,
  });

  const started = Date.now();
  const pending = runner({}, "hedged-model", { modelAbortSignal: parent.signal });
  setTimeout(() => parent.abort(), 60);
  const res = await pending;

  assert.notEqual(res.status, 504, "losing a hedge race must not be charged as a timeout");
  assert.equal(cancelled, true, "the hedge cancel must reach the target body");
  assert.ok(Date.now() - started < 2000, "the cancel must not wait for the full budget");
});

test("the gate gives up as soon as its signal aborts", async () => {
  const controller = new AbortController();
  const started = Date.now();
  const pending = awaitFirstOutput(
    sseResponse(sseBody([], { stall: true })),
    5000,
    controller.signal
  );
  setTimeout(() => controller.abort(), 40);
  const result = await pending;

  assert.equal(result.kind, "stalled");
  assert.equal(result.kind === "stalled" ? result.reason : "", "cancelled");
  assert.ok(Date.now() - started < 2000, "the abort must not wait for the full budget");
});

test("a non-streaming response is untouched", async () => {
  const runner = buildTargetTimeoutRunner({
    handleSingleModel: async () =>
      new Response(JSON.stringify({ choices: [{ message: { content: "ok" } }] }), {
        status: 200,
        headers: { "content-type": "application/json" },
      }),
    comboTargetTimeoutMs: 5000,
    log: noopLog,
  });

  const res = await runner({}, "json-model");
  assert.equal(res.status, 200);
  assert.equal((await res.json())?.choices?.[0]?.message?.content, "ok");
});
