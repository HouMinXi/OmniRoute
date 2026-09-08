/**
 * #13033 -- Convert a complete OpenAI Responses API JSON body into an equivalent
 * Responses SSE event stream.
 *
 * When an OpenAI Responses client (such as Codex CLI or Cursor) requests `stream: true`
 * and declares tools (like `web_search`), OmniRoute may execute the upstream request
 * non-streaming to perform server-side tool loops (web search fallback). Upstream
 * returns a complete Responses JSON object (`status: "completed"`).
 *
 * Returning `Content-Type: application/json` directly to a streaming Responses client
 * causes Codex to close early and crash with "stream closed before response.completed".
 * This helper synthesizes the spec-compliant Responses SSE event sequence from the
 * assembled JSON object so streaming clients receive a valid SSE stream ending with
 * `response.completed` and `data: [DONE]`.
 */

import { randomUUID } from "node:crypto";

type JsonRecord = Record<string, unknown>;

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function resolveResponsesRoot(value: unknown): JsonRecord | null {
  if (!isRecord(value)) return null;
  if (
    isRecord(value.response) &&
    (value.response.object === "response" || Array.isArray(value.response.output))
  ) {
    return value.response;
  }
  if (value.object === "response" || Array.isArray(value.output)) {
    return value;
  }
  return null;
}

function sseEvent(eventType: string, data: unknown): string {
  return `event: ${eventType}\ndata: ${JSON.stringify(data)}\n\n`;
}

/**
 * Synthesizes OpenAI Responses API SSE events from a complete Responses JSON object.
 * Returns an empty string if the input is not a valid Responses object.
 */
export function synthesizeResponsesSseFromResponse(responseInput: unknown): string {
  let record: JsonRecord | null = null;
  if (typeof responseInput === "string") {
    try {
      record = resolveResponsesRoot(JSON.parse(responseInput));
    } catch {
      return "";
    }
  } else {
    record = resolveResponsesRoot(responseInput);
  }

  if (!record) return "";

  const responseId =
    typeof record.id === "string" && record.id
      ? record.id
      : `resp_${randomUUID().replace(/-/g, "")}`;
  const createdAt =
    typeof record.created_at === "number" ? record.created_at : Math.floor(Date.now() / 1000);
  const model = typeof record.model === "string" && record.model ? record.model : undefined;
  const output = Array.isArray(record.output) ? (record.output as unknown[]) : [];

  let stream = "";

  // 1. response.created
  const createdResponse: JsonRecord = {
    id: responseId,
    object: "response",
    created_at: createdAt,
    status: "in_progress",
    background: false,
    error: null,
    output: [],
  };
  if (model) createdResponse.model = model;

  stream += sseEvent("response.created", {
    type: "response.created",
    response: createdResponse,
  });

  // 2. response.in_progress
  const inProgressResponse: JsonRecord = {
    id: responseId,
    object: "response",
    created_at: createdAt,
    status: "in_progress",
    background: false,
    error: null,
    output: [],
  };
  if (model) inProgressResponse.model = model;

  stream += sseEvent("response.in_progress", {
    type: "response.in_progress",
    response: inProgressResponse,
  });

  // 3. Emit output items
  output.forEach((item, outputIndex) => {
    if (!isRecord(item)) return;

    const itemType = typeof item.type === "string" ? item.type : "";

    if (itemType === "message") {
      const itemId = typeof item.id === "string" ? item.id : `msg_${outputIndex}`;
      const role = typeof item.role === "string" ? item.role : "assistant";
      const content = Array.isArray(item.content) ? (item.content as unknown[]) : [];

      stream += sseEvent("response.output_item.added", {
        type: "response.output_item.added",
        output_index: outputIndex,
        item: {
          id: itemId,
          object: "realtime.item",
          type: "message",
          status: "in_progress",
          role,
          content: [],
        },
      });

      content.forEach((part, contentIndex) => {
        if (!isRecord(part)) return;
        const partType = typeof part.type === "string" ? part.type : "output_text";

        if (partType === "output_text" || partType === "text") {
          stream += sseEvent("response.content_part.added", {
            type: "response.content_part.added",
            item_id: itemId,
            output_index: outputIndex,
            content_index: contentIndex,
            part: { type: partType, text: "" },
          });

          const text = typeof part.text === "string" ? part.text : "";
          if (text) {
            stream += sseEvent("response.output_text.delta", {
              type: "response.output_text.delta",
              item_id: itemId,
              output_index: outputIndex,
              content_index: contentIndex,
              delta: text,
            });
            stream += sseEvent("response.output_text.done", {
              type: "response.output_text.done",
              item_id: itemId,
              output_index: outputIndex,
              content_index: contentIndex,
              text,
            });
          }

          stream += sseEvent("response.content_part.done", {
            type: "response.content_part.done",
            item_id: itemId,
            output_index: outputIndex,
            content_index: contentIndex,
            part,
          });
        } else {
          stream += sseEvent("response.content_part.added", {
            type: "response.content_part.added",
            item_id: itemId,
            output_index: outputIndex,
            content_index: contentIndex,
            part,
          });
          stream += sseEvent("response.content_part.done", {
            type: "response.content_part.done",
            item_id: itemId,
            output_index: outputIndex,
            content_index: contentIndex,
            part,
          });
        }
      });

      stream += sseEvent("response.output_item.done", {
        type: "response.output_item.done",
        output_index: outputIndex,
        item,
      });
    } else if (itemType === "function_call") {
      const itemId = typeof item.id === "string" ? item.id : `call_${outputIndex}`;
      const callId = typeof item.call_id === "string" ? item.call_id : itemId;
      const args = typeof item.arguments === "string" ? item.arguments : "";

      stream += sseEvent("response.output_item.added", {
        type: "response.output_item.added",
        output_index: outputIndex,
        item: {
          ...item,
          arguments: "",
          status: "in_progress",
        },
      });

      if (args) {
        stream += sseEvent("response.function_call_arguments.delta", {
          type: "response.function_call_arguments.delta",
          item_id: itemId,
          call_id: callId,
          output_index: outputIndex,
          delta: args,
        });
        stream += sseEvent("response.function_call_arguments.done", {
          type: "response.function_call_arguments.done",
          item_id: itemId,
          call_id: callId,
          output_index: outputIndex,
          arguments: args,
        });
      }

      stream += sseEvent("response.output_item.done", {
        type: "response.output_item.done",
        output_index: outputIndex,
        item,
      });
    } else {
      // Other output items (web_search_call, function_call_output, reasoning, etc.)
      const addedItem = typeof item.status === "string" ? { ...item, status: "in_progress" } : item;
      stream += sseEvent("response.output_item.added", {
        type: "response.output_item.added",
        output_index: outputIndex,
        item: addedItem,
      });
      stream += sseEvent("response.output_item.done", {
        type: "response.output_item.done",
        output_index: outputIndex,
        item,
      });
    }
  });

  // 4. response.completed
  // Forward upstream record while omitting any internal properties prefixed with '_'
  const sanitizedRecord: JsonRecord = {};
  for (const [k, v] of Object.entries(record)) {
    if (!k.startsWith("_")) {
      sanitizedRecord[k] = v;
    }
  }

  const completedResponse: JsonRecord = {
    ...sanitizedRecord,
    id: responseId,
    created_at: createdAt,
  };
  if (model) completedResponse.model = model;

  stream += sseEvent("response.completed", {
    type: "response.completed",
    response: completedResponse,
  });

  // 5. Terminal [DONE] marker
  stream += "data: [DONE]\n\n";

  return stream;
}

function synthesizeMinimalFallbackSse(fallbackPayload: unknown): string {
  const id = `resp_fallback_${randomUUID().replace(/-/g, "")}`;
  const created = Math.floor(Date.now() / 1000);
  const errObj =
    fallbackPayload && typeof fallbackPayload === "object"
      ? (fallbackPayload as Record<string, unknown>)
      : { error: String(fallbackPayload ?? "Unknown error") };
  const status = errObj.error ? "failed" : "completed";
  const completedResponse: JsonRecord = {
    id,
    object: "response",
    created_at: created,
    status,
    output: [],
    error: errObj.error ?? null,
  };
  let sse = "";
  sse += sseEvent("response.created", {
    type: "response.created",
    response: {
      id,
      object: "response",
      created_at: created,
      status: "in_progress",
      output: [],
    },
  });
  sse += sseEvent("response.completed", {
    type: "response.completed",
    response: completedResponse,
  });
  sse += "data: [DONE]\n\n";
  return sse;
}

/**
 * Builds a 200 text/event-stream Response from a completed Responses API JSON object.
 * If synthesis fails (e.g. malformed or empty input), safely falls back to a minimal
 * valid Responses SSE envelope ending with response.completed and [DONE], ensuring
 * streaming clients never crash on unexpected stream closes.
 */
export function buildNonStreamingResponsesSseResponse(
  translatedResponse: unknown,
  responseHeaders?: HeadersInit | Record<string, string>
): Response {
  const sseBody =
    synthesizeResponsesSseFromResponse(translatedResponse) ||
    synthesizeMinimalFallbackSse(translatedResponse);

  const headers = new Headers(responseHeaders as HeadersInit);
  headers.set("content-type", "text/event-stream; charset=utf-8");
  headers.set("cache-control", "no-cache");
  headers.set("connection", "keep-alive");
  headers.delete("content-length");

  return new Response(sseBody, {
    status: 200,
    headers,
  });
}
