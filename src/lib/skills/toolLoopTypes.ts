/**
 * Shared types for the server-owned tool loop.
 * All consumers use `import type` — no runtime imports.
 */

// ─── §5.4 Provider Leg ─────────────────────────────────────────────────────

export interface ProviderLegUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  cached_tokens?: number;
  cache_read_input_tokens?: number;
  cache_creation_input_tokens?: number;
  reasoning_tokens?: number;
  cost_in_usd_ticks?: number;
}

export interface ProviderLegReceipt {
  index: number;
  connectionId: string;
  provider: string;
  model: string;
  startedAt: string;
  endedAt: string;
  latencyMs: number;
  httpStatus: number;
  errorType: string | null;
  usage: ProviderLegUsage | null;
  serviceTier: string | null;
  computedCostUsd: number | null;
  toolCalls: Array<{ id: string; name: string }>;
  termination: string;
  clientVisible: boolean;
}

export interface ChatCoreErrorResult {
  success: false;
  status: number;
  response: Response;
  error?: string;
  errorCode?: string;
  errorType?: string;
}

export type NonStreamingProviderLegResult =
  | {
      kind: "ok";
      response: Record<string, unknown>;
      responseForMemoryExtraction: Record<string, unknown>;
      providerBody: Record<string, unknown>;
      providerRequest: Record<string, unknown>;
      usage: ProviderLegUsage | null;
      responsePayloadFormat: string;
      looksLikeSSE: boolean;
      connectionId: string;
      headers: Headers;
      receipt: ProviderLegReceipt;
    }
  | {
      kind: "error";
      result: ChatCoreErrorResult;
      receipt: ProviderLegReceipt;
    };

// ─── §5.5 Tool Loop ────────────────────────────────────────────────────────

export interface ServerOwnedToolLoopOptions {
  initialLeg: NonStreamingProviderLegResult & { kind: "ok" };
  sourceBody: Record<string, unknown>;
  sourceFormat: "openai" | "claude";
  skillsModelId: string;
  executionContext: ExecutionContext;
  executeServerOwned: (
    calls: ToolCall[],
    context: ExecutionContext
  ) => Promise<ExecutedToolResult[]>;
  resumeUpstream: (
    nextSourceBody: Record<string, unknown>,
    expectedConnectionId: string,
    deadlineAtMs: number
  ) => Promise<NonStreamingProviderLegResult>;
  maxFollowUps?: number;
  maxResultChars?: number;
  deadlineAtMs: number;
}

export interface ServerOwnedToolLoopResult {
  kind: "ok" | "error";
  response?: Record<string, unknown>;
  responseForMemoryExtraction?: Record<string, unknown>;
  finalProviderBody?: Record<string, unknown>;
  finalProviderRequest?: Record<string, unknown>;
  errorResult?: ChatCoreErrorResult;
  cumulativeUsage: ProviderLegUsage | null;
  totalCostUsd: number;
  receipts: ProviderLegReceipt[];
  followUps: number;
  termination:
    | "completed"
    | "client_tools"
    | "mixed_tools"
    | "max_followups"
    | "tool_output_budget"
    | "deadline"
    | "provider_error"
    | "execution_unknown";
}

// ─── §5.1 Shared Context ───────────────────────────────────────────────────

export interface ToolCall {
  id: string;
  name: string;
  arguments: Record<string, unknown>;
}

export interface ExecutionContext {
  apiKeyId: string;
  sessionId: string;
  requestId: string;
  requestIdentity?: string;
  builtinToolNames?: string[];
  injectedCustomSkillNames?: string[];
  customSkillExecutionEnabled?: boolean;
  executionFenceEnabled?: boolean;
  provider?: string;
  model?: string;
}

export interface ExecutedToolResult {
  id: string;
  name: string;
  result: unknown;
  replayed: boolean;
}

// ─── §5.2 Transcript Builder ───────────────────────────────────────────────

export interface BuildFollowUpTranscriptInput {
  sourceBody: Record<string, unknown>;
  previousResponse: Record<string, unknown>;
  toolCalls: ToolCall[];
  results: ExecutedToolResult[];
  sourceFormat: "openai" | "claude";
  maxResultChars: number;
}

export interface BoundedToolResult {
  text: string;
  truncated: boolean;
  originalChars: number;
}

// ─── §5.3 Client Translate ─────────────────────────────────────────────────

export interface NonStreamingClientTranslateInput {
  responseBody: Record<string, unknown>;
  responsePayloadFormat: string;
  clientResponseFormat: string;
  sourceFormat: string;
  provider: string;
  model: string;
  requestBody: Record<string, unknown>;
  responseToolNameMap: Map<string, string> | null;
  requestToolIdentityMap: Map<string, { namespace?: string; name: string }> | null;
  reasoningCacheScope: string | null;
  clientHeaders: Headers | Record<string, unknown> | null;
  isClaudeCodeCompatible: boolean;
  phase: "intermediate" | "final";
}

export interface NonStreamingClientTranslateResult {
  response: Record<string, unknown>;
  responseForMemoryExtraction: Record<string, unknown>;
}
