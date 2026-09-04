/**
 * Characterization for comboAttemptLoop.ts (#11804 finally + gates/attempt wiring).
 * Plan Task 4. RED until that module exists.
 */
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));

test("dispatchWithCooldownRetry clears activeLoopSafetyTimer in finally", async () => {
  const src = readFileSync(
    resolve(here, "../../../open-sse/services/combo/comboAttemptLoop.ts"),
    "utf8"
  );
  assert.match(src, /finally\s*\{[^}]*clearTimeout\(activeLoopSafetyTimer\)/s);
  assert.match(src, /activeLoopSafetyTimer = loopSafetyTimer/);
});

test("dispatchWithCooldownRetry calls evaluateGates then executeAttempt, not inline executeTarget", async () => {
  const src = readFileSync(
    resolve(here, "../../../open-sse/services/combo/comboAttemptLoop.ts"),
    "utf8"
  );
  assert.match(src, /extra\.evaluateGates/);
  assert.match(src, /extra\.executeAttempt/);
  // Thin wrapper may keep the local name; the old inline retry/gate body must not.
  assert.doesNotMatch(src, /getCircuitBreaker\(provider\)/);
  assert.doesNotMatch(src, /for \(let retry = 0; retry <= deps\.maxRetries/);
});
