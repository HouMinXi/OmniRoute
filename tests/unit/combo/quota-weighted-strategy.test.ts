/**
 * quota-weighted: skip empty accounts, weighted-draw the rest.
 * Spec: _tasks/superpowers/specs/2026-09-04-quota-weighted-routing-design.md
 */
import test, { after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-quota-weighted-"));
const ORIGINAL_DATA_DIR = process.env.DATA_DIR;
process.env.DATA_DIR = TEST_DATA_DIR;

const dbCore = await import("../../../src/lib/db/core.ts");
const { getResetAwareRemainingPercent } =
  await import("../../../open-sse/services/combo/quotaScoring.ts");

after(() => {
  dbCore.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  if (ORIGINAL_DATA_DIR === undefined) delete process.env.DATA_DIR;
  else process.env.DATA_DIR = ORIGINAL_DATA_DIR;
});

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
