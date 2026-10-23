/**
 * A streamed tool call must not re-send argument text that the client already
 * received. The credential transform holds back a trailing window (512 bytes by
 * default) so a credential split across frames can still be recognised, and
 * flushes what is left when the stream ends — the flush frame is a clone of the
 * last frame seen, so it must carry only that residual, never the entries the
 * cloned frame already emitted (#18012).
 */
import { test } from "node:test";
import assert from "node:assert/strict";

import { createCredentialSseTransform } from "../../src/lib/streamingCredentialTransform.ts";
import { DEFAULT_CREDENTIAL_WINDOW_SIZE } from "../../src/lib/streamingCredentialTransform.ts";

const TOTAL = 9_908;
const ARGUMENT_JSON = '{"path":"/tmp/probe.txt","content":"' + "x".repeat(TOTAL - 60) + '"}';

function sseFrame(delta: Record<string, unknown>, finish: string | null = null): string {
  return `data: ${JSON.stringify({
    id: "chatcmpl_test",
    object: "chat.completion.chunk",
    created: 1,
    model: "grok-4.7",
    choices: [{ index: 0, delta, finish_reason: finish }],
  })}\n\n`;
}

function toolFrame(args: string): string {
  return sseFrame({
    tool_calls: [
      { index: 0, id: "call_1", type: "function", function: { name: "write_file", arguments: args } },
    ],
  });
}

async function transformToArguments(frames: string[]): Promise<{ perFrame: number[][]; joined: string }> {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(frames.join(""));
  const source = new ReadableStream({
    start(controller) {
      // Split inside frames, the way a socket delivers bytes.
      for (let i = 0; i < bytes.length; i += 700) {
        controller.enqueue(bytes.slice(i, Math.min(i + 700, bytes.length)));
      }
      controller.close();
    },
  });

  const reader = source.pipeThrough(createCredentialSseTransform()).getReader();
  const decoder = new TextDecoder();
  let text = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    text += decoder.decode(value, { stream: true });
  }

  const perFrame: number[][] = [];
  const pieces: string[] = [];
  for (const line of text.split("\n")) {
    if (!line.startsWith("data:")) continue;
    const payload = line.slice(5).trim();
    if (!payload || payload === "[DONE]") continue;
    let event: { choices?: Array<{ delta?: { tool_calls?: Array<{ function?: { arguments?: string } }> } }> };
    try {
      event = JSON.parse(payload);
    } catch {
      continue;
    }
    for (const choice of event.choices ?? []) {
      const entries = choice.delta?.tool_calls ?? [];
      if (entries.length === 0) continue;
      perFrame.push(entries.map((entry) => (entry.function?.arguments ?? "").length));
      for (const entry of entries) pieces.push(entry.function?.arguments ?? "");
    }
  }
  return { perFrame, joined: pieces.join("") };
}

test("the closing frame carries only the residual window, not the frame it cloned", async () => {
  const { perFrame, joined } = await transformToArguments([
    toolFrame(ARGUMENT_JSON),
    sseFrame({}, "tool_calls"),
    "data: [DONE]\n\n",
  ]);

  assert.equal(perFrame.length, 2, `expected two argument frames, got ${JSON.stringify(perFrame)}`);
  assert.ok(
    perFrame[0][0] > DEFAULT_CREDENTIAL_WINDOW_SIZE,
    `the first frame should carry the bulk of the arguments, got ${perFrame[0][0]}`
  );
  assert.ok(
    perFrame[1][0] <= DEFAULT_CREDENTIAL_WINDOW_SIZE,
    `the closing frame must carry only the withheld residual, got ${perFrame[1][0]}`
  );
  assert.equal(joined, ARGUMENT_JSON, "the client must receive the arguments exactly once");
});

test("arguments split across frames are emitted once each", async () => {
  const half = Math.floor(ARGUMENT_JSON.length / 2);
  const { joined } = await transformToArguments([
    toolFrame(ARGUMENT_JSON.slice(0, half)),
    toolFrame(ARGUMENT_JSON.slice(half)),
    sseFrame({}, "tool_calls"),
    "data: [DONE]\n\n",
  ]);
  assert.equal(joined, ARGUMENT_JSON);
});

test("a provider that repeats the full arguments in its closing frame stays correct", async () => {
  // Responses-style streams send the complete arguments again in output_item.done;
  // whatever the transform does internally, the client must not receive them twice.
  const { joined } = await transformToArguments([
    toolFrame(ARGUMENT_JSON),
    toolFrame(ARGUMENT_JSON),
    sseFrame({}, "tool_calls"),
    "data: [DONE]\n\n",
  ]);
  // The provider sent the arguments twice, so the client must receive exactly two
  // copies: anything longer means the transform added a third of its own.
  assert.equal(joined, ARGUMENT_JSON + ARGUMENT_JSON);
});
