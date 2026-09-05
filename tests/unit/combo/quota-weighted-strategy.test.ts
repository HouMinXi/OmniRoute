/**
 * quota-weighted: skip empty accounts, weighted-draw the rest.
 * Spec: _tasks/superpowers/specs/2026-09-04-quota-weighted-routing-design.md
 */
import test, { after, afterEach } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { randomUUID } from "node:crypto";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-quota-weighted-"));
const ORIGINAL_DATA_DIR = process.env.DATA_DIR;
process.env.DATA_DIR = TEST_DATA_DIR;

const dbCore = await import("../../../src/lib/db/core.ts");
const quotaCache = await import("../../../src/domain/quotaCache.ts");
const { getResetAwareRemainingPercent } =
  await import("../../../open-sse/services/combo/quotaScoring.ts");
const { registerQuotaFetcher } = await import("../../../open-sse/services/quotaPreflight.ts");
const { expandTargetsByQuotaAwareConnections, orderTargetsByQuotaWeighted } =
  await import("../../../open-sse/services/combo/quotaStrategies.ts");
const { resetAllCircuitBreakers } = await import("../../../src/shared/utils/circuitBreaker.ts");
const { _setSecureRandomFloatSource } = await import("../../../src/shared/utils/secureRandom.ts");

after(() => {
  dbCore.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  if (ORIGINAL_DATA_DIR === undefined) delete process.env.DATA_DIR;
  else process.env.DATA_DIR = ORIGINAL_DATA_DIR;
});

afterEach(() => {
  _setSecureRandomFloatSource(null);
  quotaCache.__clearForTests();
  resetAllCircuitBreakers();
});

const iso = (ms = 86_400_000) => new Date(Date.now() + ms).toISOString();

function quotaAt(percentUsed: number, extra: Record<string, unknown> = {}) {
  return {
    used: percentUsed * 100,
    total: 100,
    percentUsed,
    resetAt: iso(),
    window5h: { percentUsed, resetAt: iso(3 * 3600_000) },
    window7d: { percentUsed, resetAt: iso() },
    limitReached: false,
    ...extra,
  };
}

function makeTarget(provider: string, connectionId: string, model = "gemini-3.8-flash-high") {
  return {
    kind: "model" as const,
    stepId: `step-${connectionId}`,
    executionKey: `${provider}/${model}@${connectionId}`,
    modelStr: `${provider}/${model}`,
    provider,
    providerId: provider,
    connectionId,
    weight: 1,
    label: null,
  };
}

function seedAgyCache(connectionId: string, remainingPercentage: number) {
  quotaCache.setQuotaCache(connectionId, "agy", {
    "gemini-3.8-flash-high": { remainingPercentage, resetAt: iso() },
    gemini_weekly: { remainingPercentage, resetAt: iso() },
  });
}

test("getResetAwareRemainingPercent: null / non-object → 100", () => {
  assert.equal(getResetAwareRemainingPercent(null), 100);
  assert.equal(getResetAwareRemainingPercent(undefined), 100);
  assert.equal(getResetAwareRemainingPercent("nope"), 100);
  assert.equal(getResetAwareRemainingPercent(12), 100);
});

test("getResetAwareRemainingPercent: limitReached → 0", () => {
  assert.equal(getResetAwareRemainingPercent({ limitReached: true, percentUsed: 0.1 }), 0);
});

test("getResetAwareRemainingPercent: min(session, weekly) * 100", () => {
  const quota = {
    percentUsed: 0.5,
    window5h: { percentUsed: 0.6, resetAt: new Date(Date.now() + 3600_000).toISOString() },
    window7d: { percentUsed: 0.2, resetAt: new Date(Date.now() + 86400_000).toISOString() },
  };
  assert.equal(getResetAwareRemainingPercent(quota), 40);
});

test("getResetAwareRemainingPercent: missing windows fall back to overall percentUsed", () => {
  assert.equal(getResetAwareRemainingPercent({ percentUsed: 0.7 }), 30);
});

test("dual: default expand drops 0.5% agy via 99% kick; skipExhaustionFilter keeps it", async () => {
  const provider = "agy";
  const low = `low-${randomUUID()}`;
  const healthy = `ok-${randomUUID()}`;
  registerQuotaFetcher(provider, async (connectionId) =>
    connectionId === low ? quotaAt(0.995) : quotaAt(0.6)
  );
  seedAgyCache(low, 0.5);
  seedAgyCache(healthy, 40);

  const targets = [makeTarget(provider, low), makeTarget(provider, healthy)];
  const dropped = await expandTargetsByQuotaAwareConnections(
    targets,
    "dual-default",
    { warn() {} },
    null
  );
  assert.equal(
    dropped.expandedTargets.some((t) => t.connectionId === low),
    false,
    "0.5% remaining must be treated as exhausted by the 99% dashboard kick"
  );
  assert.equal(
    dropped.expandedTargets.some((t) => t.connectionId === healthy),
    true
  );

  const kept = await expandTargetsByQuotaAwareConnections(
    targets,
    "dual-skip",
    { warn() {} },
    null,
    { skipExhaustionFilter: true }
  );
  assert.equal(
    kept.expandedTargets.some((t) => t.connectionId === low),
    true
  );
  assert.equal(
    kept.expandedTargets.some((t) => t.connectionId === healthy),
    true
  );
});

test("empty targets → []", async () => {
  const out = await orderTargetsByQuotaWeighted([], "empty", {}, { warn() {} }, null);
  assert.deepEqual(out, []);
});

test("A/B isolation: 7 hard-empty + 2 at 0.5% + 1 at 40%, floor=1", async () => {
  const provider = "agy";
  registerQuotaFetcher(provider, async (connectionId) => {
    if (connectionId.startsWith("dead-")) return quotaAt(1, { limitReached: true });
    if (connectionId.startsWith("low-")) return quotaAt(0.995);
    return quotaAt(0.6);
  });
  const dead = Array.from({ length: 7 }, () => `dead-${randomUUID()}`);
  const low = [`low-${randomUUID()}`, `low-${randomUUID()}`];
  const healthy = `ok-${randomUUID()}`;
  const ids = [...dead, ...low, healthy];
  const targets = ids.map((id) => makeTarget(provider, id));

  _setSecureRandomFloatSource(() => 0);
  const ordered = await orderTargetsByQuotaWeighted(
    targets,
    "ab-iso",
    { quotaWeightedFloorPercent: 1 },
    { warn() {} },
    null
  );

  assert.equal(ordered[0]?.connectionId, healthy);
  assert.equal(ordered.length, 3);
  assert.deepEqual(
    ordered.slice(1).map((t) => t.connectionId),
    low
  );
  for (const id of dead) {
    assert.equal(ordered.some((t) => t.connectionId === id), false);
  }
});

test("7 empty + 3 healthy → length 3, no hard-empty", async () => {
  const provider = "agy";
  registerQuotaFetcher(provider, async (connectionId) =>
    connectionId.startsWith("dead-") ? quotaAt(1, { limitReached: true }) : quotaAt(0.2)
  );
  const dead = Array.from({ length: 7 }, () => `dead-${randomUUID()}`);
  const ok = Array.from({ length: 3 }, () => `ok-${randomUUID()}`);
  _setSecureRandomFloatSource(() => 0);
  const ordered = await orderTargetsByQuotaWeighted(
    [...dead, ...ok].map((id) => makeTarget(provider, id)),
    "seven-three",
    {},
    { warn() {} },
    null
  );
  assert.equal(ordered.length, 3);
  for (const id of dead) assert.equal(ordered.some((t) => t.connectionId === id), false);
  for (const id of ok) assert.equal(ordered.some((t) => t.connectionId === id), true);
});
