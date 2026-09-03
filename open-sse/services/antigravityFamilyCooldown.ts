/**
 * Persist Antigravity/agy quota cooldowns per model family (gemini vs claude)
 * on the connection row, without cooling the whole account.
 */
import { lockModel, isModelLocked } from "./accountFallback.ts";
import { getAntigravityQuotaFamily } from "./antigravityQuotaFamily.ts";

type JsonRecord = Record<string, unknown>;

const FAMILY_PSD_KEY = "antigravityFamilyRateLimitedUntil";

function asRecord(value: unknown): JsonRecord {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as JsonRecord)
    : {};
}

function isAntigravityProvider(provider: string | null | undefined): boolean {
  return provider === "antigravity" || provider === "agy";
}

function parseUntilMs(value: unknown): number {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const ms = /^\d+(\.\d+)?$/.test(value.trim()) ? Number(value) : Date.parse(value);
    return Number.isFinite(ms) ? ms : NaN;
  }
  return NaN;
}

function dummyModelForFamily(family: "gemini" | "claude"): string {
  return family === "gemini" ? "gemini-family-lock" : "claude-family-lock";
}

export async function persistAntigravityFamilyCooldown(params: {
  connectionId: string;
  model: string;
  rateLimitedUntil: string;
}): Promise<JsonRecord | null> {
  if (!params.model.trim()) return null;
  const family = getAntigravityQuotaFamily(params.model);
  if (family === "other") return null;

  const { getProviderConnectionById, updateProviderConnection } = await import(
    "@/lib/db/providers"
  );
  const conn = (await getProviderConnectionById(params.connectionId)) as
    | { provider?: string; providerSpecificData?: JsonRecord | null }
    | null;
  if (!conn || !isAntigravityProvider(conn.provider ?? null)) return null;

  const psd = asRecord(conn.providerSpecificData);
  const untils = asRecord(psd[FAMILY_PSD_KEY]);
  const existingMs = parseUntilMs(untils[family]);
  const nextMs = parseUntilMs(params.rateLimitedUntil);
  if (!Number.isFinite(nextMs)) return psd;
  if (Number.isFinite(existingMs) && existingMs > Date.now() && existingMs >= nextMs) {
    return psd;
  }

  const nextPsd: JsonRecord = {
    ...psd,
    [FAMILY_PSD_KEY]: { ...untils, [family]: params.rateLimitedUntil },
  };
  await updateProviderConnection(params.connectionId, { providerSpecificData: nextPsd });
  return nextPsd;
}

export function rehydrateAntigravityFamilyLocks(
  provider: string,
  connectionId: string,
  providerSpecificData: JsonRecord | null | undefined
): void {
  if (!isAntigravityProvider(provider)) return;
  const untils = asRecord(asRecord(providerSpecificData)[FAMILY_PSD_KEY]);
  const now = Date.now();
  for (const family of ["gemini", "claude"] as const) {
    const untilMs = parseUntilMs(untils[family]);
    if (!Number.isFinite(untilMs) || untilMs <= now) continue;
    const model = dummyModelForFamily(family);
    const remainingMs = untilMs - now;
    for (const lockProvider of [provider, provider === "agy" ? "antigravity" : "agy"]) {
      if (isModelLocked(lockProvider, connectionId, model)) continue;
      lockModel(lockProvider, connectionId, model, "quota_exhausted", remainingMs);
    }
  }
}
