import { backupDbFile } from "../backup";
import { getDbInstance, rowToCamel } from "../core";
import { invalidateDbCache } from "../readCache";
import { toRecord } from "./columns";

type JsonRecord = Record<string, unknown>;

interface StatementLike<TRow = unknown> {
  get: (...params: unknown[]) => TRow | undefined;
  run: (...params: unknown[]) => { changes?: number };
}

interface DbLike {
  prepare: <TRow = unknown>(sql: string) => StatementLike<TRow>;
  transaction: <T>(fn: () => T) => () => T;
}

type CodexScopedQuotaPatch = {
  quotaState?: JsonRecord;
  exhaustedWindow?: "5h" | "7d" | null;
  rateLimitedUntil?: string | null;
  rateLimitSource?: "fallback" | "quota_reset";
};

const CODEX_CHILD_COOLDOWN_KEYS = [
  "codexScopeRateLimitedUntil",
  "codexScopeRateLimitSource",
] as const;

function omitEmptyRecord(record: JsonRecord): JsonRecord | undefined {
  return Object.keys(record).length > 0 ? record : undefined;
}

/** Drop nested Codex child cooldowns; keep quota snapshots and unrelated keys. */
export function stripCodexChildCooldownFields(psd: JsonRecord): JsonRecord {
  if (!connectionHasCodexChildCooldown(psd)) return psd;
  const next = { ...psd };
  for (const key of CODEX_CHILD_COOLDOWN_KEYS) delete next[key];
  return next;
}

/** PUT/CAS payload that clears the parent column must also drop nested maps. */
export function applyCodexChildCooldownClearOnUpdate(
  data: JsonRecord,
  psd: JsonRecord
): JsonRecord {
  if (!Object.hasOwn(data, "rateLimitedUntil")) return psd;
  if (data.rateLimitedUntil != null && data.rateLimitedUntil !== "") return psd;
  return stripCodexChildCooldownFields(psd);
}

function connectionHasCodexChildCooldown(psd: JsonRecord): boolean {
  return "codexScopeRateLimitedUntil" in psd || "codexScopeRateLimitSource" in psd;
}

/**
 * Persist a full-parent cooldown lift into the nested Codex child maps.
 * When `alsoClearTopLevel` is set, the parent `rate_limited_until` column is
 * nulled in the same transaction so a crash between the two writes cannot
 * leave a nested child map behind a cleared parent column.
 */
export function stripCodexChildCooldownsFromConnection(
  id: string,
  options?: { alsoClearTopLevel?: boolean }
): void {
  if (typeof id !== "string" || id.length === 0) return;
  const db = getDbInstance() as unknown as DbLike;
  const alsoClearTopLevel = options?.alsoClearTopLevel === true;
  const candidate = db
    .prepare("SELECT provider FROM provider_connections WHERE id = ?")
    .get(id);
  const isCodex = toRecord(candidate).provider === "codex";
  if (!alsoClearTopLevel && !isCodex) return;

  backupDbFile("pre-write");
  const wrote = db.transaction(() => {
    const existing = db
      .prepare(
        "SELECT provider, provider_specific_data FROM provider_connections WHERE id = ?"
      )
      .get(id);
    if (!existing) return false;
    const existingRecord = toRecord(rowToCamel(existing));
    const providerSpecificData = toRecord(existingRecord.providerSpecificData);
    const stripNested =
      existingRecord.provider === "codex" &&
      connectionHasCodexChildCooldown(providerSpecificData);
    if (!alsoClearTopLevel && !stripNested) return false;

    const now = new Date().toISOString();
    if (alsoClearTopLevel && stripNested) {
      db.prepare(
        `UPDATE provider_connections
         SET rate_limited_until = NULL,
             provider_specific_data = ?,
             updated_at = ?
         WHERE id = ?`
      ).run(JSON.stringify(stripCodexChildCooldownFields(providerSpecificData)), now, id);
      return true;
    }
    if (alsoClearTopLevel) {
      db.prepare(
        `UPDATE provider_connections
         SET rate_limited_until = NULL, updated_at = ?
         WHERE id = ?`
      ).run(now, id);
      return true;
    }
    db.prepare(
      `UPDATE provider_connections
       SET provider_specific_data = ?, updated_at = ?
       WHERE id = ?`
    ).run(JSON.stringify(stripCodexChildCooldownFields(providerSpecificData)), now, id);
    return true;
  })();
  if (wrote) invalidateDbCache("connections");
}

/**
 * Atomically merge one virtual Codex child's quota evidence into its persisted parent.
 * The transaction reads the latest row so sibling child state cannot be lost.
 */
export async function updateCodexScopedQuotaState(
  id: string,
  scope: "codex" | "spark",
  patch: CodexScopedQuotaPatch
): Promise<JsonRecord | null> {
  const db = getDbInstance() as unknown as DbLike;
  const candidate = db.prepare("SELECT provider FROM provider_connections WHERE id = ?").get(id);
  if (toRecord(candidate).provider !== "codex") return null;

  backupDbFile("pre-write");
  const persisted = db.transaction(() => {
    const existing = db.prepare("SELECT * FROM provider_connections WHERE id = ?").get(id);
    if (!existing) return null;

    const existingRecord = toRecord(rowToCamel(existing));
    if (existingRecord.provider !== "codex") return null;
    const providerSpecificData = toRecord(existingRecord.providerSpecificData);
    const nextProviderSpecificData: JsonRecord = { ...providerSpecificData };

    if (patch.quotaState) {
      const quotaByScope = toRecord(providerSpecificData.codexQuotaStateByScope);
      nextProviderSpecificData.codexQuotaStateByScope = {
        ...quotaByScope,
        [scope]: patch.quotaState,
      };
      nextProviderSpecificData.codexQuotaState = {
        ...patch.quotaState,
        scope,
        updatedAt: patch.quotaState.observedAt,
      };
    }

    if (patch.exhaustedWindow !== undefined) {
      const exhaustedByScope = { ...toRecord(providerSpecificData.codexExhaustedWindowByScope) };
      if (patch.exhaustedWindow) exhaustedByScope[scope] = patch.exhaustedWindow;
      else delete exhaustedByScope[scope];
      nextProviderSpecificData.codexExhaustedWindowByScope = exhaustedByScope;
      if (patch.exhaustedWindow) {
        nextProviderSpecificData.codexExhaustedWindow = patch.exhaustedWindow;
      } else {
        delete nextProviderSpecificData.codexExhaustedWindow;
      }
    }

    if (patch.rateLimitedUntil !== undefined) {
      const scopeCooldowns = { ...toRecord(providerSpecificData.codexScopeRateLimitedUntil) };
      const sourceByScope = { ...toRecord(providerSpecificData.codexScopeRateLimitSource) };
      if (patch.rateLimitedUntil) {
        const existingCooldownMs =
          typeof scopeCooldowns[scope] === "string"
            ? new Date(scopeCooldowns[scope] as string).getTime()
            : NaN;
        const existingIsAuthoritative =
          sourceByScope[scope] === "quota_reset" &&
          patch.rateLimitSource !== "quota_reset" &&
          Number.isFinite(existingCooldownMs) &&
          existingCooldownMs > Date.now();
        scopeCooldowns[scope] = existingIsAuthoritative
          ? scopeCooldowns[scope]
          : patch.rateLimitedUntil;
        sourceByScope[scope] = existingIsAuthoritative
          ? sourceByScope[scope]
          : (patch.rateLimitSource ?? "fallback");
      } else {
        delete scopeCooldowns[scope];
        delete sourceByScope[scope];
      }
      const nextCooldowns = omitEmptyRecord(scopeCooldowns);
      const nextSources = omitEmptyRecord(sourceByScope);
      if (nextCooldowns) nextProviderSpecificData.codexScopeRateLimitedUntil = nextCooldowns;
      else delete nextProviderSpecificData.codexScopeRateLimitedUntil;
      if (nextSources) nextProviderSpecificData.codexScopeRateLimitSource = nextSources;
      else delete nextProviderSpecificData.codexScopeRateLimitSource;
    }

    db.prepare(
      `UPDATE provider_connections
       SET provider_specific_data = ?, updated_at = ?
       WHERE id = ?`
    ).run(JSON.stringify(nextProviderSpecificData), new Date().toISOString(), id);
    return nextProviderSpecificData;
  })();

  if (persisted) invalidateDbCache("connections");
  return persisted;
}

/** Persist one child cooldown through the shared scoped quota-state transaction. */
export async function updateCodexScopeCooldown(
  id: string,
  scope: "codex" | "spark",
  rateLimitedUntil: string
): Promise<JsonRecord | null> {
  return updateCodexScopedQuotaState(id, scope, {
    rateLimitedUntil,
    rateLimitSource: "fallback",
  });
}
