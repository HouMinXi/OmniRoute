import { tlsFetchPerplexity } from "../../services/perplexityTlsClient.ts";

const RATE_LIMIT_URL = "https://www.perplexity.ai/rest/rate-limit/all";

// Reads the account's remaining Deep Research runs. Returns null when the
// endpoint does not answer with a number, so a failed lookup never blocks a run.
export async function remainingResearch(
  headers: Record<string, string>
): Promise<number | null> {
  const res = await tlsFetchPerplexity(RATE_LIMIT_URL, { method: "GET", headers });
  if (res.status !== 200) return null;
  let parsed: unknown;
  try {
    parsed = JSON.parse(res.text ?? "");
  } catch {
    return null;
  }
  const value = (parsed as { remaining_research?: unknown }).remaining_research;
  return typeof value === "number" ? value : null;
}
