import test from "node:test";
import assert from "node:assert/strict";

const { claudeToOpenAIRequest } =
  await import("../../open-sse/translator/request/claude-to-openai.ts");

test("Claude tool_choice null does not throw", () => {
  const result = claudeToOpenAIRequest(
    "grok-bot",
    { model: "grok-bot", max_tokens: 100, messages: [{ role: "user", content: "hi" }], tool_choice: null },
    false
  ) as { tool_choice?: unknown };
  assert.equal(result.tool_choice, undefined);
});

test("Claude disable_parallel_tool_use becomes parallel_tool_calls false", () => {
  const result = claudeToOpenAIRequest(
    "grok-bot",
    {
      model: "grok-bot",
      max_tokens: 100,
      messages: [{ role: "user", content: "hi" }],
      tool_choice: { type: "auto", disable_parallel_tool_use: true },
    },
    false
  ) as { tool_choice?: unknown; parallel_tool_calls?: boolean };

  assert.equal(result.tool_choice, "auto");
  assert.equal(result.parallel_tool_calls, false);
});

test("Claude tool_result is_error prefixes the tool message", () => {
  const result = claudeToOpenAIRequest(
    "grok-bot",
    {
      model: "grok-bot",
      max_tokens: 100,
      messages: [
        {
          role: "assistant",
          content: [{ type: "tool_use", id: "tu_1", name: "canary_echo", input: { text: "ping" } }],
        },
        {
          role: "user",
          content: [{ type: "tool_result", tool_use_id: "tu_1", is_error: true, content: "boom" }],
        },
      ],
    },
    false
  ) as { messages: Array<{ role: string; content?: string }> };

  const tool = result.messages.find((message) => message.role === "tool");
  assert.equal(tool?.content, "Error: boom");
});

test("Claude tool_result without is_error stays plain", () => {
  const result = claudeToOpenAIRequest(
    "grok-bot",
    {
      model: "grok-bot",
      max_tokens: 100,
      messages: [
        {
          role: "assistant",
          content: [{ type: "tool_use", id: "tu_1", name: "canary_echo", input: { text: "ping" } }],
        },
        { role: "user", content: [{ type: "tool_result", tool_use_id: "tu_1", content: "pong" }] },
      ],
    },
    false
  ) as { messages: Array<{ role: string; content?: string }> };

  const tool = result.messages.find((message) => message.role === "tool");
  assert.equal(tool?.content, "pong");
});

test("Claude tool_choice without the parallel flag leaves parallel_tool_calls unset", () => {
  const result = claudeToOpenAIRequest(
    "grok-bot",
    {
      model: "grok-bot",
      max_tokens: 100,
      messages: [{ role: "user", content: "hi" }],
      tool_choice: { type: "auto" },
    },
    false
  ) as { parallel_tool_calls?: boolean };

  assert.equal(result.parallel_tool_calls, undefined);
});
