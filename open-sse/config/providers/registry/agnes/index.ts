import type { RegistryEntry } from "../../shared.ts";

export const agnesProvider: RegistryEntry = {
  id: "agnes",
  format: "openai",
  executor: "default",
  baseUrl: "https://apihub.agnes-ai.com/v1/chat/completions",
  authType: "apikey",
  authHeader: "bearer",
  models: [
    {
      id: "agnes-2.0-flash",
      name: "Agnes 2.0 Flash",
      contextLength: 262144,
      maxOutputTokens: 65536,
      supportsReasoning: true,
      supportsVision: true,
      toolCalling: true,
    },
    {
      id: "agnes-2.5-flash",
      name: "Agnes 2.5 Flash",
      contextLength: 524288,
      maxOutputTokens: 65536,
      supportsReasoning: true,
      supportsVision: true,
      toolCalling: true,
      interleavedField: "reasoning_content",
    },
    {
      // Wiki (2026-09-09) lists agnes-3.0-flash as current flash; live
      // GET /v1/models on apihub.agnes-ai.com includes it. Context window
      // is unpublished — do not invent one.
      id: "agnes-3.0-flash",
      name: "Agnes 3.0 Flash",
      maxOutputTokens: 65536,
      supportsReasoning: true,
      supportsVision: true,
      toolCalling: true,
      interleavedField: "reasoning_content",
    },
  ],
};
