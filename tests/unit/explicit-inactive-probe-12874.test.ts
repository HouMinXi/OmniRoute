import test from "node:test";
import assert from "node:assert/strict";
import { EXPIRED_REPROBE_BLOCKLIST } from "../../src/lib/quota/connectionRecovery.ts";
import {
  EXPLICIT_PROBE_BLOCKLIST,
  selectExplicitInactiveProbe,
} from "../../src/sse/services/explicitInactiveProbe.ts";

const pin = {
  id: "c1",
  provider: "siliconflow",
  isActive: false,
  testStatus: "active",
  lastErrorType: null,
  rateLimitedUntil: null,
};

function select(overrides: Partial<Parameters<typeof selectExplicitInactiveProbe>[0]> = {}) {
  return selectExplicitInactiveProbe({
    forcedConnectionId: "c1",
    activeConnections: [],
    pinnedRow: pin,
    providersToSearch: ["siliconflow"],
    allowedConnectionIds: null,
    nowMs: 1_000_000,
    lastProbeAtMs: null,
    intervalMs: 60_000,
    ...overrides,
  });
}

test("P-14 EXPLICIT_PROBE_BLOCKLIST is the same object as EXPIRED_REPROBE_BLOCKLIST", () => {
  assert.equal(EXPLICIT_PROBE_BLOCKLIST, EXPIRED_REPROBE_BLOCKLIST);
});

test("P-1 pin + inactive active -> probe", () => {
  assert.equal(select().kind, "probe");
});
test("P-2 credits_exhausted -> probe", () => {
  assert.equal(select({ pinnedRow: { ...pin, testStatus: "credits_exhausted" } }).kind, "probe");
});
test("P-3 no pin -> skip", () => {
  assert.equal(select({ forcedConnectionId: null }).kind, "skip");
});
test("P-4 live pool already has id -> skip", () => {
  assert.equal(select({ activeConnections: [{ id: "c1" }] }).kind, "skip");
});
test("P-5 banned -> skip", () => {
  assert.equal(select({ pinnedRow: { ...pin, testStatus: "banned" } }).kind, "skip");
});
test("P-6 expired + no_refresh_token -> skip", () => {
  assert.equal(
    select({ pinnedRow: { ...pin, testStatus: "expired", lastErrorType: "no_refresh_token" } }).kind,
    "skip"
  );
});
test("P-7 expired + empty lastErrorType -> probe", () => {
  assert.equal(select({ pinnedRow: { ...pin, testStatus: "expired", lastErrorType: "" } }).kind, "probe");
});
test("P-8 error + unrecoverable_refresh_error -> skip", () => {
  assert.equal(
    select({ pinnedRow: { ...pin, testStatus: "error", lastErrorType: "unrecoverable_refresh_error" } }).kind,
    "skip"
  );
});
test("P-9 last probe within 60s -> suppressed", () => {
  assert.equal(select({ lastProbeAtMs: 1_000_000 - 10_000 }).kind, "suppressed");
});
test("P-10 pin not in allowedConnectionIds -> skip", () => {
  assert.equal(select({ allowedConnectionIds: ["other"] }).kind, "skip");
});
test("P-11 provider not in providersToSearch -> skip", () => {
  assert.equal(select({ providersToSearch: ["openai"] }).kind, "skip");
});
test("P-12 unavailable + future cooldown -> skip", () => {
  assert.equal(
    select({
      pinnedRow: { ...pin, testStatus: "unavailable", rateLimitedUntil: new Date(2_000_000_000).toISOString() },
      nowMs: 1_000_000,
    }).kind,
    "skip"
  );
});
test("P-13 unavailable + elapsed cooldown -> probe", () => {
  assert.equal(
    select({
      pinnedRow: { ...pin, testStatus: "unavailable", rateLimitedUntil: new Date(500_000).toISOString() },
      nowMs: 1_000_000,
    }).kind,
    "probe"
  );
});
