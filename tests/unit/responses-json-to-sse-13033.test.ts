import test from "node:test";
import assert from "node:assert/strict";
import {
  synthesizeResponsesSseFromResponse,
  buildNonStreamingResponsesSseResponse,
} from "../../open-sse/utils/responsesJsonToSse.ts";
import { parseSSEToResponsesOutput } from "../../open-sse/handlers/sseParser.ts";

test("synthesizeResponsesSseFromResponse produces spec-compliant SSE stream for text messages", () => {
  const sampleResponse = {
    id: "resp_test_123",
    object: "response",
    created_at: 1725000000,
    status: "completed",
    model: "gpt-4o-mini",
    output: [
      {
        type: "message",
        id: "msg_abc",
        role: "assistant",
        content: [
          {
            type: "output_text",
            text: "Hello, world!",
          },
        ],
      },
    ],
    usage: {
      input_tokens: 15,
      output_tokens: 25,
      total_tokens: 40,
    },
  };

  const sse = synthesizeResponsesSseFromResponse(sampleResponse);
  assert.ok(sse.length > 0);
  assert.match(sse, /event: response\.created/);
  assert.match(sse, /event: response\.in_progress/);
  assert.match(sse, /event: response\.output_item\.added/);
  assert.match(sse, /event: response\.content_part\.added/);
  assert.match(sse, /event: response\.output_text\.delta/);
  assert.match(sse, /event: response\.output_text\.done/);
  assert.match(sse, /event: response\.output_item\.done/);
  assert.match(sse, /event: response\.completed/);
  assert.ok(sse.endsWith("data: [DONE]\n\n"));

  // Verify round-trip parsing via parseSSEToResponsesOutput
  const reconstructed = parseSSEToResponsesOutput(sse, "gpt-4o-mini");
  assert.ok(reconstructed);
  assert.equal(reconstructed.id, "resp_test_123");
  assert.equal(reconstructed.model, "gpt-4o-mini");
  assert.equal(reconstructed.status, "completed");
  assert.deepEqual(reconstructed.usage, sampleResponse.usage);
  assert.equal(reconstructed.output.length, 1);
  assert.equal(reconstructed.output[0].type, "message");
  assert.equal(reconstructed.output[0].content[0].text, "Hello, world!");
});

test("synthesizeResponsesSseFromResponse produces spec-compliant SSE for web_search_call and function_call", () => {
  const sampleResponse = {
    id: "resp_search_456",
    object: "response",
    created_at: 1725000100,
    status: "completed",
    model: "gpt-5-codex",
    output: [
      {
        type: "function_call",
        id: "call_1",
        call_id: "call_1",
        name: "omniroute_web_search",
        arguments: '{"query":"latest release"}',
        status: "completed",
      },
      {
        type: "function_call_output",
        call_id: "call_1",
        output: '{"results":[{"title":"Doc","url":"https://example.com"}]}',
      },
      {
        type: "web_search_call",
        id: "call_search_1",
        status: "completed",
        action: {
          type: "web_search",
          query: "latest release",
          sources: [
            {
              title: "Doc",
              url: "https://example.com",
              caption: "Release notes",
            },
          ],
        },
      },
      {
        type: "message",
        id: "msg_final",
        role: "assistant",
        content: [
          {
            type: "output_text",
            text: "Based on the search, here is the latest release.",
          },
        ],
      },
    ],
    usage: {
      input_tokens: 50,
      output_tokens: 80,
      total_tokens: 130,
    },
  };

  const sse = synthesizeResponsesSseFromResponse(sampleResponse);
  assert.ok(sse.length > 0);
  assert.match(sse, /event: response\.function_call_arguments\.delta/);
  assert.match(sse, /event: response\.function_call_arguments\.done/);

  const reconstructed = parseSSEToResponsesOutput(sse, "gpt-5-codex");
  assert.ok(reconstructed);
  assert.equal(reconstructed.id, "resp_search_456");
  assert.equal(reconstructed.output.length, 4);

  const webSearchCall = reconstructed.output.find(
    (item: Record<string, unknown>) => item.type === "web_search_call"
  );
  assert.ok(webSearchCall);
  const action = (webSearchCall as Record<string, unknown>).action as Record<string, unknown>;
  assert.equal(action.query, "latest release");

  const funcOutput = reconstructed.output.find(
    (item: Record<string, unknown>) => item.type === "function_call_output"
  );
  assert.ok(funcOutput);

  const msg = reconstructed.output.find((item: Record<string, unknown>) => item.type === "message");
  assert.ok(msg);
});

test("synthesizeResponsesSseFromResponse handles wrapped responses and JSON string inputs", () => {
  const wrapped = {
    response: {
      id: "resp_wrapped",
      object: "response",
      created_at: 1725000200,
      status: "completed",
      output: [],
    },
  };

  const sseFromObj = synthesizeResponsesSseFromResponse(wrapped);
  assert.match(sseFromObj, /"id":"resp_wrapped"/);
  assert.match(sseFromObj, /event: response\.completed/);

  const sseFromString = synthesizeResponsesSseFromResponse(JSON.stringify(wrapped));
  assert.equal(sseFromString, sseFromObj);

  // Invalid inputs return empty string
  assert.equal(synthesizeResponsesSseFromResponse(null), "");
  assert.equal(synthesizeResponsesSseFromResponse(undefined), "");
  assert.equal(synthesizeResponsesSseFromResponse("not valid json"), "");
  assert.equal(synthesizeResponsesSseFromResponse({ other: "data" }), "");
});

test("buildNonStreamingResponsesSseResponse sets proper SSE headers and status", async () => {
  const sampleResponse = {
    id: "resp_headers_test",
    object: "response",
    status: "completed",
    output: [],
  };

  const res = buildNonStreamingResponsesSseResponse(sampleResponse, {
    "x-custom-header": "omniroute-test",
    "content-length": "1234",
  });

  assert.equal(res.status, 200);
  assert.equal(res.headers.get("content-type"), "text/event-stream; charset=utf-8");
  assert.equal(res.headers.get("cache-control"), "no-cache");
  assert.equal(res.headers.get("connection"), "keep-alive");
  assert.equal(res.headers.get("x-custom-header"), "omniroute-test");
  assert.equal(res.headers.get("content-length"), null);

  const body = await res.text();
  assert.match(body, /event: response\.completed/);
  assert.ok(body.endsWith("data: [DONE]\n\n"));
});

test("buildNonStreamingResponsesSseResponse falls back to minimal valid SSE stream when synthesis fails", async () => {
  const malformedInput = { not_a_response: true };
  const res = buildNonStreamingResponsesSseResponse(malformedInput, {
    "x-test": "fallback",
  });

  assert.equal(res.status, 200);
  assert.match(res.headers.get("content-type") || "", /text\/event-stream/);
  assert.equal(res.headers.get("x-test"), "fallback");
  const sseText = await res.text();
  assert.match(sseText, /event: response\.created/);
  assert.match(sseText, /event: response\.completed/);
  assert.ok(sseText.endsWith("data: [DONE]\n\n"));
});

test("synthesizeResponsesSseFromResponse maintains id and created_at consistency across created and completed events", () => {
  // Input without id and created_at
  const minimalResponse = {
    object: "response",
    status: "completed",
    output: [],
  };

  const sse = synthesizeResponsesSseFromResponse(minimalResponse);
  assert.ok(sse);

  const lines = sse.trim().split("\n\n");
  const createdLine = lines.find((l) => l.includes('"type":"response.created"'));
  const completedLine = lines.find((l) => l.includes('"type":"response.completed"'));

  assert.ok(createdLine && completedLine);
  const createdEvent = JSON.parse(createdLine.slice(createdLine.indexOf("data: ") + 6));
  const completedEvent = JSON.parse(completedLine.slice(completedLine.indexOf("data: ") + 6));

  assert.equal(createdEvent.response.id, completedEvent.response.id);
  assert.equal(createdEvent.response.created_at, completedEvent.response.created_at);
  assert.match(createdEvent.response.id, /^resp_[0-9a-f]{32}$/);
});

test("synthesizeResponsesSseFromResponse strips internal properties prefixed with underscore from completed response", () => {
  const responseWithInternal = {
    id: "resp_123",
    object: "response",
    status: "completed",
    output: [],
    _internal_cache_key: "secret",
    _dedupSnapshot: { foo: "bar" },
    public_metadata: { env: "prod" },
  };

  const sse = synthesizeResponsesSseFromResponse(responseWithInternal);
  assert.ok(sse);

  const lines = sse.trim().split("\n\n");
  const completedLine = lines.find((l) => l.includes('"type":"response.completed"'));
  assert.ok(completedLine);
  const completedEvent = JSON.parse(completedLine.slice(completedLine.indexOf("data: ") + 6));

  assert.equal(completedEvent.response.id, "resp_123");
  assert.deepEqual(completedEvent.response.public_metadata, { env: "prod" });
  assert.equal(completedEvent.response._internal_cache_key, undefined);
  assert.equal(completedEvent.response._dedupSnapshot, undefined);
});

test("synthesizeResponsesSseFromResponse emits complete response.in_progress matching created schema", () => {
  const minimalResponse = {
    id: "resp_in_progress_test",
    object: "response",
    status: "completed",
    output: [],
  };

  const sse = synthesizeResponsesSseFromResponse(minimalResponse);
  assert.ok(sse);

  const lines = sse.trim().split("\n\n");
  const inProgressLine = lines.find((l) => l.includes('"type":"response.in_progress"'));
  assert.ok(inProgressLine);
  const inProgressEvent = JSON.parse(inProgressLine.slice(inProgressLine.indexOf("data: ") + 6));

  assert.equal(inProgressEvent.response.id, "resp_in_progress_test");
  assert.equal(inProgressEvent.response.status, "in_progress");
  assert.equal(inProgressEvent.response.background, false);
  assert.equal(inProgressEvent.response.error, null);
  assert.deepEqual(inProgressEvent.response.output, []);
});

test("buildNonStreamingResponsesSseResponse marks fallback response status as failed when error is present", async () => {
  const errorPayload = { error: { message: "rate limit exceeded", type: "rate_limit" } };
  const res = buildNonStreamingResponsesSseResponse(errorPayload);
  const sseText = await res.text();

  const lines = sseText.trim().split("\n\n");
  const completedLine = lines.find((l) => l.includes('"type":"response.completed"'));
  assert.ok(completedLine);
  const completedEvent = JSON.parse(completedLine.slice(completedLine.indexOf("data: ") + 6));

  assert.equal(completedEvent.response.status, "failed");
  assert.ok(completedEvent.response.error);
});
