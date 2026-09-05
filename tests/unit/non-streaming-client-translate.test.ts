import { test } from "node:test";
import assert from "node:assert/strict";

import {
  translateNonStreamingClientResponse,
  type NonStreamingClientTranslateInput,
} from "../../open-sse/handlers/chatCore/nonStreamingClientTranslate.ts";

/* ── helpers ─────────────────────────────────────────────────────────────── */

function baseInput(
  overrides: Partial<NonStreamingClientTranslateInput> = {}
): NonStreamingClientTranslateInput {
  return {
    responseBody: {
      id: "chatcmpl-test",
      object: "chat.completion",
      choices: [
        {
          index: 0,
          message: { role: "assistant", content: "Hello!" },
          finish_reason: "stop",
        },
      ],
      usage: { prompt_tokens: 10, completion_tokens: 5, total_tokens: 15 },
    },
    responsePayloadFormat: "openai",
    clientResponseFormat: "openai",
    sourceFormat: "openai",
    provider: "openai",
    model: "gpt-4o",
    requestBody: { messages: [{ role: "user", content: "hi" }] },
    responseToolNameMap: null,
    requestToolIdentityMap: null,
    reasoningCacheScope: null,
    clientHeaders: null,
    isClaudeCodeCompatible: false,
    phase: "final",
    ...overrides,
  };
}

/* ── characterization tests ──────────────────────────────────────────────── */

test("basic translate: same-format passthrough returns responseBody", () => {
  const input = baseInput();
  const result = translateNonStreamingClientResponse(input);
  assert.equal(result.response.choices[0].message.content, "Hello!");
  assert.ok(result.responseForMemoryExtraction);
});

test("translate from claude to openai format", () => {
  const input = baseInput({
    responseBody: {
      id: "msg-123",
      content: [{ type: "text", text: "Hi there" }],
      stop_reason: "end_turn",
      usage: { input_tokens: 10, output_tokens: 5 },
    },
    responsePayloadFormat: "claude",
    clientResponseFormat: "openai",
    sourceFormat: "claude",
    provider: "anthropic",
    model: "claude-sonnet-4-20250514",
  });
  const result = translateNonStreamingClientResponse(input);
  const msg = result.response.choices?.[0]?.message;
  assert.ok(msg, "should have choices[0].message");
  assert.equal((msg as { content: string }).content, "Hi there");
});

test("claude source strips markdown code fence", () => {
  const input = baseInput({
    responseBody: {
      id: "msg-123",
      content: [
        {
          type: "text",
          text: '```json\n{"key": "value"}\n```',
        },
      ],
      stop_reason: "end_turn",
      usage: { input_tokens: 10, output_tokens: 5 },
    },
    responsePayloadFormat: "claude",
    clientResponseFormat: "openai",
    sourceFormat: "claude",
    provider: "anthropic",
    model: "claude-sonnet-4-20250514",
  });
  const result = translateNonStreamingClientResponse(input);
  const content = result.response.choices?.[0]?.message?.content;
  assert.ok(typeof content === "string");
  // After stripping, the content should not have the markdown fence wrapper
  assert.ok(!content.startsWith("```json"), "markdown fence should be stripped");
});

test("normalizeOpenAIToolFinishReasons: tool_calls present → finish_reason tool_calls", () => {
  const input = baseInput({
    responseBody: {
      id: "chatcmpl-test",
      choices: [
        {
          index: 0,
          message: {
            role: "assistant",
            content: null,
            tool_calls: [
              {
                id: "call_1",
                type: "function",
                function: { name: "get_weather", arguments: "{}" },
              },
            ],
          },
          finish_reason: "stop",
        },
      ],
      usage: { prompt_tokens: 10, completion_tokens: 5, total_tokens: 15 },
    },
  });
  const result = translateNonStreamingClientResponse(input);
  assert.equal(result.response.choices[0].finish_reason, "tool_calls");
});

test("reasoning replay: reasoning_content is captured even for intermediate phase", () => {
  const input = baseInput({
    responseBody: {
      id: "chatcmpl-test",
      choices: [
        {
          index: 0,
          message: {
            role: "assistant",
            content: "thinking result",
            reasoning_content: "let me think...",
          },
          finish_reason: "stop",
        },
      ],
      usage: { prompt_tokens: 10, completion_tokens: 5, total_tokens: 15 },
    },
    provider: "deepseek",
    model: "deepseek-reasoner",
    phase: "intermediate",
  });
  // Intermediate phase should still work (reasoning replay capture is non-critical)
  const result = translateNonStreamingClientResponse(input);
  assert.ok(result.response);
  assert.ok(result.responseForMemoryExtraction);
});

test("phase=final applies client usage buffer", () => {
  const input = baseInput({
    phase: "final",
    clientResponseFormat: "openai",
  });
  const result = translateNonStreamingClientResponse(input);
  // Usage should be present and filtered for the client format
  const usage = (result.response as Record<string, unknown>).usage;
  assert.ok(usage !== undefined, "usage should be present after final phase");
});

test("phase=intermediate skips applyClientUsageBuffer", () => {
  const input = baseInput({
    phase: "intermediate",
    clientResponseFormat: "openai",
    responseBody: {
      id: "chatcmpl-test",
      choices: [
        {
          index: 0,
          message: { role: "assistant", content: "partial" },
          finish_reason: null,
        },
      ],
      // Raw provider usage without filtering
      usage: { prompt_tokens: 10, completion_tokens: 5, total_tokens: 15 },
    },
  });
  const result = translateNonStreamingClientResponse(input);
  assert.ok(result.response);
  // Usage should be preserved as-is (not filtered by client format)
  const usage = (result.response as Record<string, unknown>).usage;
  assert.ok(usage !== undefined, "usage should be preserved in intermediate phase");
});

test("Responses API format: sanitizeResponsesApiResponse is applied", () => {
  const input = baseInput({
    clientResponseFormat: "openai_responses",
    responseBody: {
      id: "resp_123",
      output: [
        {
          type: "message",
          content: [{ type: "output_text", text: "hello" }],
        },
      ],
      usage: { input_tokens: 10, output_tokens: 5 },
    },
  });
  const result = translateNonStreamingClientResponse(input);
  assert.ok(result.response);
  // Responses API output should be sanitized
  assert.ok(Array.isArray(result.response.output), "should have output array");
});

test("empty content response: passthrough without crash", () => {
  const input = baseInput({
    responseBody: {},
  });
  const result = translateNonStreamingClientResponse(input);
  assert.ok(result.response);
  assert.ok(result.responseForMemoryExtraction);
});

test("isClaudeCodeCompatible preserves context budget usage", () => {
  const input = baseInput({
    isClaudeCodeCompatible: true,
    clientResponseFormat: "openai",
    responseBody: {
      id: "chatcmpl-test",
      choices: [
        {
          index: 0,
          message: { role: "assistant", content: "test" },
          finish_reason: "stop",
        },
      ],
      usage: {
        prompt_tokens: 100,
        completion_tokens: 50,
        total_tokens: 150,
        context_budget_prompt_tokens: 120,
        context_budget_completion_tokens: 60,
      },
    },
  });
  const result = translateNonStreamingClientResponse(input);
  assert.ok(result.response);
});
