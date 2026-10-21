import { randomUUID } from "node:crypto";
import { z } from "zod";
import { buildPplxRequestBody, buildPplxHeaders } from "../../executors/perplexity-web/protocol.ts";
import { tlsFetchPerplexity } from "../../services/perplexityTlsClient.ts";
import { hasMcpHttpAuthContext } from "../httpAuthContext.ts";
import {
  acquireResearchLock,
  releaseResearchLock,
  markUpstreamUnconfirmed,
} from "./perplexityResearchLock.ts";
import { parseResearchFrames } from "./perplexityResearchParse.ts";
import { clampResearchResult } from "./perplexityResearchLimits.ts";
import { markStreamableSessionBusy } from "../httpTransport.ts";
import { mergeConnectionProviderSpecificData } from "../../../src/lib/db/providers/providerSpecificDataMerge.ts";
import { getProviderConnectionById } from "../../../src/lib/db/providers.ts";
import { recordResearchCooldown, cooldownRemainingMs } from "./perplexityResearchCooldown.ts";
import { remainingResearch } from "./perplexityResearchQuota.ts";

const inputSchema = z.object({
  query: z.string().min(1),
  connectionId: z.string().min(1).optional(),
  maxTotalMinutes: z.number().int().min(5).max(120).optional(),
});

const ASK_URL = "https://www.perplexity.ai/rest/sse/perplexity_ask";

function envelope(payload: Record<string, unknown>, isError: boolean) {
  return {
    content: [{ type: "text" as const, text: JSON.stringify(payload) }],
    structuredContent: payload,
    isError,
  };
}

function failure(code: string) {
  return envelope(
    {
      ok: false,
      error: { code, message: code, correlationId: randomUUID(), autoRetryAllowed: false },
    },
    true
  );
}

export function registerPerplexityResearchTool(
  server: { registerTool: (...args: unknown[]) => unknown },
  withScopeEnforcement: (name: string, handler: unknown, scopes: string[]) => unknown
) {
  if (process.env.OMNIROUTE_PPLX_RESEARCH_ENABLED !== "1") return;

  server.registerTool(
    "omniroute_perplexity_research",
    {
      description:
        "Runs one Perplexity Deep Research and returns the report. Off unless OMNIROUTE_PPLX_RESEARCH_ENABLED=1. A client that does not pass its own timeout will be cut off at 60 seconds while this call keeps running, so set timeout 120000, maxTotalTimeout 2760000 and resetTimeoutOnProgress with an onprogress handler.",
      inputSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    withScopeEnforcement(
      "omniroute_perplexity_research",
      async (
        args: unknown,
        extra: { authInfo?: unknown; signal?: AbortSignal; sessionId?: string }
      ) => {
        if (process.env.OMNIROUTE_PPLX_RESEARCH_ENABLED !== "1")
          return failure("research_disabled");
        if (hasMcpHttpAuthContext() && !extra?.authInfo) return failure("auth_required");

        const parsed = inputSchema.parse(args ?? {});
        const minutes = parsed.maxTotalMinutes ?? 45;
        const connectionId = parsed.connectionId ?? "default";
        const connection = parsed.connectionId
          ? await getProviderConnectionById(parsed.connectionId)
          : null;
        const data = (connection?.providerSpecificData ?? {}) as Record<string, unknown>;
        if (cooldownRemainingMs(data, Date.now(), connectionId) > 0)
          return failure("research_cooldown");
        const invocationId = randomUUID();
        const lock = acquireResearchLock({
          connectionId,
          invocationId,
          nowMs: Date.now(),
          maxTotalMinutes: minutes,
        });
        if (lock === "research_busy") return failure("research_busy");
        markStreamableSessionBusy(extra?.sessionId, true);

        const controller = new AbortController();
        let finished = false;
        const budgetMs = minutes * 60_000;
        const timer = setTimeout(() => controller.abort(), budgetMs);
        extra?.signal?.addEventListener("abort", () => controller.abort(), { once: true });
        try {
          if (extra?.signal?.aborted) return;
          const body = buildPplxRequestBody(
            parsed.query,
            parsed.query,
            "copilot",
            "pplx_alpha",
            null,
            invocationId
          );
          const headers = buildPplxHeaders(invocationId, {
            accessToken:
              typeof connection?.accessToken === "string" ? connection.accessToken : undefined,
            apiKey: typeof connection?.apiKey === "string" ? connection.apiKey : undefined,
          });
          const remaining = await remainingResearch(headers);
          if (remaining === 0) return failure("research_quota_exhausted");
          const res = await tlsFetchPerplexity(ASK_URL, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
            signal: controller.signal,
            timeoutMs: budgetMs,
            stream: true,
          });
          const text = res.text ?? "";
          const parsedFrames = clampResearchResult(parseResearchFrames(text));
          if (res.status === 200 && parsedFrames.outcome === "success") {
            finished = true;
            await recordResearchCooldown({
              connectionId,
              nowMs: Date.now(),
              upstreamEnded: true,
              confirmed: true,
              merge: mergeConnectionProviderSpecificData,
            });
            return envelope(
              {
                ok: true,
                data: {
                  report: parsedFrames.report,
                  citations: parsedFrames.citations,
                  truncated: parsedFrames.truncated,
                  warnings: parsedFrames.warnings,
                },
              },
              false
            );
          }
          return failure(parsedFrames.outcome);
        } finally {
          clearTimeout(timer);
          markStreamableSessionBusy(extra?.sessionId, false);
          if (finished) releaseResearchLock(connectionId, invocationId);
          else markUpstreamUnconfirmed(connectionId, invocationId);
        }
      },
      ["manage"]
    )
  );
}
