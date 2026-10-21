type LockState = "held" | "upstream_unconfirmed";

type LockRecord = {
  invocationId: string;
  acquiredAtMs: number;
  deadlineMs: number;
  state: LockState;
};

const KEY = Symbol.for("omniroute.pplxResearchLocks");

function locks(): Map<string, LockRecord> {
  const g = globalThis as unknown as Record<symbol, Map<string, LockRecord>>;
  return (g[KEY] ??= new Map());
}

export function acquireResearchLock(input: {
  connectionId: string;
  invocationId: string;
  nowMs: number;
  maxTotalMinutes: number;
}): "acquired" | "research_busy" {
  const existing = locks().get(input.connectionId);
  if (existing && input.nowMs < existing.deadlineMs) return "research_busy";
  if (existing && existing.state === "upstream_unconfirmed") return "research_busy";
  locks().set(input.connectionId, {
    invocationId: input.invocationId,
    acquiredAtMs: input.nowMs,
    deadlineMs: input.nowMs + input.maxTotalMinutes * 60_000 + 60_000,
    state: "held",
  });
  return "acquired";
}

export function releaseResearchLock(connectionId: string, invocationId: string): void {
  const existing = locks().get(connectionId);
  if (existing && existing.invocationId === invocationId) locks().delete(connectionId);
}

export function markUpstreamUnconfirmed(connectionId: string, invocationId: string): void {
  const existing = locks().get(connectionId);
  if (existing && existing.invocationId === invocationId) existing.state = "upstream_unconfirmed";
}

export function sweepResearchLock(
  connectionId: string,
  nowMs: number
): LockState | "expired" | "absent" {
  const existing = locks().get(connectionId);
  if (!existing) return "absent";
  if (nowMs < existing.deadlineMs) return existing.state;
  if (existing.state === "upstream_unconfirmed") return "upstream_unconfirmed";
  return "expired";
}
