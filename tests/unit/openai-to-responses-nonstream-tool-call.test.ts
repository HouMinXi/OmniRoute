import test from "node:test";
import assert from "node:assert/strict";

const { translateNonStreamingResponse } =
  await import("../../open-sse/handlers/responseTranslator.ts");
const { FORMATS } = await import("../../open-sse/translator/formats.ts");

test("Claude non-stream keeps the tool call when its arguments are not valid JSON", () => {
  const result = translateNonStreamingResponse(
    {
      id: "x",
      object: "chat.completion",
      created: 1,
      model: "grok-bot",
      choices: [
        {
          index: 0,
          message: {
            role: "assistant",
            content: null,
            tool_calls: [
              { id: "call_1", type: "function", function: { name: "canary_echo", arguments: "{not json" } },
            ],
          },
          finish_reason: "tool_calls",
        },
      ],
      usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 },
    },
    FORMATS.OPENAI,
    FORMATS.CLAUDE
  ) as { content: Array<Record<string, unknown>> };

  const call = result.content.find((part) => part.type === "tool_use");
  assert.equal(call?.name, "canary_echo");
  assert.deepEqual(call?.input, {});
});

test("OpenAI non-stream with text and a tool call becomes a Responses output", () => {
  const result = translateNonStreamingResponse(
    {
      id: "x",
      object: "chat.completion",
      created: 1,
      model: "grok-bot",
      choices: [
        {
          index: 0,
          message: {
            role: "assistant",
            content: "calling now",
            tool_calls: [
              {
                id: "call_1",
                type: "function",
                function: { name: "canary_echo", arguments: "{\"text\":\"ping\"}" },
              },
            ],
          },
          finish_reason: "tool_calls",
        },
      ],
      usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 },
    },
    FORMATS.OPENAI,
    FORMATS.OPENAI_RESPONSES
  ) as { output: Array<Record<string, unknown>> };

  const message = result.output.find((item) => item.type === "message");
  const call = result.output.find((item) => item.type === "function_call");
  assert.equal((message?.content as Array<{ text: string }>)[0]?.text, "calling now");
  assert.equal(call?.name, "canary_echo");
  assert.equal(call?.call_id, "call_1");
  assert.equal(call?.arguments, "{\"text\":\"ping\"}");
});
