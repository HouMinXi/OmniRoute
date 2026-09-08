import { EXPIRED_REPROBE_BLOCKLIST } from "@/lib/quota/connectionRecovery";

export const EXPLICIT_PROBE_BLOCKLIST = EXPIRED_REPROBE_BLOCKLIST;

export const RECOVERABLE_INACTIVE_TEST_STATUSES = new Set([
  "active",
  "success",
  "credits_exhausted",
  "unavailable",
  "error",
  "",
]);

export function isRecoverableInactiveConnection(
  conn: {
    isActive?: boolean;
    testStatus?: string | null;
    lastErrorType?: string | null;
    rateLimitedUntil?: string | null;
  },
  nowMs: number = Date.now()
): boolean {
  if (conn.isActive !== false) return false;
  const status = (conn.testStatus || "").trim().toLowerCase();
  if (status === "banned") return false;
  const err = (conn.lastErrorType || "").trim().toLowerCase();
  if (EXPLICIT_PROBE_BLOCKLIST.has(err)) return false;
  if (status === "expired") return true;
  if (status === "unavailable") {
    const until = conn.rateLimitedUntil;
    if (until) {
      const ms = Date.parse(until);
      if (Number.isFinite(ms) && ms > nowMs) return false;
    }
  }
  return RECOVERABLE_INACTIVE_TEST_STATUSES.has(status);
}

export function selectExplicitInactiveProbe(params: {
  forcedConnectionId: string | null;
  activeConnections: { id: string }[];
  pinnedRow: {
    id: string;
    provider?: string | null;
    isActive?: boolean;
    testStatus?: string | null;
    lastErrorType?: string | null;
    rateLimitedUntil?: string | null;
  } | null;
  providersToSearch: string[];
  allowedConnectionIds: string[] | null;
  nowMs: number;
  lastProbeAtMs: number | null;
  intervalMs: number;
}): { kind: "probe" } | { kind: "suppressed" } | { kind: "skip" } {
  const id = params.forcedConnectionId;
  if (!id) return { kind: "skip" };
  if (params.activeConnections.some((c) => c.id === id)) return { kind: "skip" };
  const row = params.pinnedRow;
  if (!row || row.id !== id) return { kind: "skip" };
  if (
    params.allowedConnectionIds &&
    params.allowedConnectionIds.length > 0 &&
    !params.allowedConnectionIds.includes(id)
  ) {
    return { kind: "skip" };
  }
  const prov = (row.provider || "").trim();
  if (prov && !params.providersToSearch.includes(prov)) return { kind: "skip" };
  if (!isRecoverableInactiveConnection(row, params.nowMs)) return { kind: "skip" };
  if (params.lastProbeAtMs != null && params.nowMs - params.lastProbeAtMs < params.intervalMs) {
    return { kind: "suppressed" };
  }
  return { kind: "probe" };
}
