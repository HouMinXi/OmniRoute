/** Warmup scheduler tests. */

import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-warmup-orch-"));
process.env.DATA_DIR = TEST_DATA_DIR;
process.env.DISABLE_SQLITE_AUTO_BACKUP = "true";

const core = await import("../../src/lib/db/core.ts");
const providersDb = await import("../../src/lib/db/providers.ts");

async function resetStorage() {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true });
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
}

interface FetchCall {
  url: string;
  init: RequestInit | undefined;
}

function installMockFetch(
  handler: (call: FetchCall) => { status: number; body?: unknown; headers?: Record<string, string> }
) {
  const calls: FetchCall[] = [];
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url =
      typeof input === "string"
        ? input
        : input instanceof URL
          ? input.href
          : (input as Request).url;
    calls.push({ url, init });
    const { status, body, headers } = handler({ url, init });
    return new Response(body !== undefined ? JSON.stringify(body) : null, {
      status,
      headers: headers ? new Headers(headers) : undefined,
    });
  };
  return {
    calls,
    restore() {
      globalThis.fetch = originalFetch;
    },
  };
}

test.beforeEach(async () => {
  await resetStorage();
  delete process.env.OMNIROUTE_WARMUP_ENABLED;
  delete process.env.OMNIROUTE_WARMUP_CRON;
  delete process.env.OMNIROUTE_WARMUP_CONCURRENCY;
  delete process.env.OMNIROUTE_WARMUP_MODEL;
  delete process.env.REDIS_URL;
});

test.after(() => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true });
});

test("integration: concurrency clamp - OMNIROUTE_WARMUP_CONCURRENCY=99 caps at 10 connections", async () => {
  const { executeWarmup } = await import("../../src/lib/warmupScheduler.ts");
  const settingsDb = await import("../../src/lib/db/settings.ts");

  // Create 12 opted-in claude_pro connections; with concurrency capped at 10 the
  // handler still attempts them all across two chunks (10 + 2). Build the full
  // opt-in map first, then write it once - updateSettings overwrites claudeWarmup.
  process.env.OMNIROUTE_WARMUP_CONCURRENCY = "99";
  const connections: Record<string, boolean> = {};
  for (let i = 0; i < 12; i++) {
    const conn = await providersDb.createProviderConnection({
      provider: "claude",
      authType: "oauth",
      name: `Pro ${i}`,
      email: `pro${i}@example.com`,
      accessToken: `tok-${i}`,
      refreshToken: `rt-${i}`,
      isActive: true,
      providerSpecificData: { organizationType: "claude_pro" },
    });
    connections[conn.id] = true;
  }
  await settingsDb.updateSettings({ claudeWarmup: { connections } });

  const mock = installMockFetch(() => ({
    status: 200,
    body: { usage: { input_tokens: 1, output_tokens: 1 } },
  }));

  const result = await executeWarmup();
  mock.restore();
  delete process.env.OMNIROUTE_WARMUP_CONCURRENCY;

  assert.equal(result.recordsAffected, 12, "all 12 connections attempted");
  assert.equal(mock.calls.length, 12, "one fetch per connection");
});

test("integration: opt-in gating - connection not in claudeWarmup.connections is skipped", async () => {
  const { executeWarmup } = await import("../../src/lib/warmupScheduler.ts");
  const settingsDb = await import("../../src/lib/db/settings.ts");

  await providersDb.createProviderConnection({
    provider: "claude",
    authType: "oauth",
    name: "Pro User",
    email: "pro@example.com",
    accessToken: "tok-123",
    refreshToken: "rt-123",
    isActive: true,
    providerSpecificData: { organizationType: "claude_pro" },
  });

  // Do NOT opt in - leave claudeWarmup.connections empty.
  const mock = installMockFetch(() => ({
    status: 200,
    body: { usage: { input_tokens: 3, output_tokens: 1 } },
  }));

  const result = await executeWarmup();
  mock.restore();

  assert.equal(mock.calls.length, 0, "no fetch should fire when no connection is opted in");
  assert.equal(result.recordsAffected, 0, "no connections attempted");
  assert.equal(result.success, true);
});

test("integration: opted-in claude_pro connection -> fetch fires with Bearer token + beta suffix", async () => {
  const { executeWarmup } = await import("../../src/lib/warmupScheduler.ts");
  const settingsDb = await import("../../src/lib/db/settings.ts");

  const conn = await providersDb.createProviderConnection({
    provider: "claude",
    authType: "oauth",
    name: "Pro User",
    email: "pro@example.com",
    accessToken: "tok-abc",
    refreshToken: "rt-abc",
    isActive: true,
    providerSpecificData: { organizationType: "claude_pro" },
  });

  // Opt in via settings.
  await settingsDb.updateSettings({ claudeWarmup: { connections: { [conn.id]: true } } });

  const mock = installMockFetch(() => ({
    status: 200,
    body: { usage: { input_tokens: 3, output_tokens: 1 } },
  }));

  const result = await executeWarmup();
  mock.restore();

  assert.ok(mock.calls.length >= 1, "at least one fetch should fire");
  assert.equal(result.recordsAffected, 1, "one connection attempted");
  assert.equal(result.success, true);
  const call = mock.calls[0];
  assert.ok(call.url.includes("api.anthropic.com/v1/messages"), `url was ${call.url}`);
  assert.ok(call.url.includes("beta=true"), "url should carry ?beta=true");
  assert.equal((call.init?.headers as Record<string, string>)?.Authorization, "Bearer tok-abc");
  assert.equal((call.init?.headers as Record<string, string>)?.model, undefined); // model is in body, not headers

  const body = JSON.parse(call.init?.body as string);
  assert.equal(body.max_tokens, 1, "warmup must use max_tokens=1 to minimize quota burn");
  assert.equal(body.model, "claude-3-5-haiku-20241022");
});

test("integration: 403 -> forbidden persisted, no further fetch for that connection", async () => {
  const { executeWarmup } = await import("../../src/lib/warmupScheduler.ts");
  const settingsDb = await import("../../src/lib/db/settings.ts");
  const crs = await import("../../src/lib/db/connectionRuntimeState.ts");

  const conn = await providersDb.createProviderConnection({
    provider: "claude",
    authType: "oauth",
    name: "Pro User",
    email: "pro@example.com",
    accessToken: "tok-forbidden",
    refreshToken: "rt",
    isActive: true,
    providerSpecificData: { organizationType: "claude_pro" },
  });
  await settingsDb.updateSettings({ claudeWarmup: { connections: { [conn.id]: true } } });

  const mock = installMockFetch(() => ({ status: 403, body: { error: "forbidden" } }));

  const result = await executeWarmup();
  mock.restore();

  assert.equal(mock.calls.length, 1, "exactly one fetch on 403");
  assert.equal(result.recordsAffected, 1);
  // A single forbidden connection is not "all forbidden" -> success stays true
  // (the circuit breaker absorbs it); forbidden is persisted to SQLite.
  const state = crs.getConnectionRuntimeState(conn.id);
  assert.equal(state?.lastWarmupResult, "forbidden", "forbidden must be persisted to SQLite");
});

test("integration: 429 -> rate_limit with Retry-After parsed", async () => {
  const { executeWarmup } = await import("../../src/lib/warmupScheduler.ts");
  const settingsDb = await import("../../src/lib/db/settings.ts");
  const crs = await import("../../src/lib/db/connectionRuntimeState.ts");

  const conn = await providersDb.createProviderConnection({
    provider: "claude",
    authType: "oauth",
    name: "Pro User",
    email: "pro@example.com",
    accessToken: "tok-429",
    refreshToken: "rt",
    isActive: true,
    providerSpecificData: { organizationType: "claude_pro" },
  });
  await settingsDb.updateSettings({ claudeWarmup: { connections: { [conn.id]: true } } });

  const mock = installMockFetch(() => ({
    status: 429,
    body: { error: "rate_limit" },
    headers: { "retry-after": "120" },
  }));

  await executeWarmup();
  mock.restore();

  assert.equal(mock.calls.length, 1, "exactly one fetch on 429");
  const state = crs.getConnectionRuntimeState(conn.id);
  // until should be ~120s out (Retry-After), not the default 5min backoff.
  assert.ok(state?.warmupCircuitUntil, "until should be set");
  const untilMs = new Date(state.warmupCircuitUntil!).getTime() - Date.now();
  assert.ok(
    Math.abs(untilMs - 120_000) < 2000,
    `until should honor Retry-After ~120s, got ${untilMs}ms`
  );
});

test("integration: api_key connection is skipped even when opted in", async () => {
  const { executeWarmup } = await import("../../src/lib/warmupScheduler.ts");
  const settingsDb = await import("../../src/lib/db/settings.ts");

  const conn = await providersDb.createProviderConnection({
    provider: "claude",
    authType: "apikey",
    name: "API Key User",
    email: "apikey@example.com",
    apiKey: "sk-123",
    isActive: true,
  });
  await settingsDb.updateSettings({ claudeWarmup: { connections: { [conn.id]: true } } });

  const mock = installMockFetch(() => ({
    status: 200,
    body: { usage: { input_tokens: 1, output_tokens: 1 } },
  }));

  const result = await executeWarmup();
  mock.restore();

  assert.equal(mock.calls.length, 0, "api_key connections must be skipped");
  assert.equal(result.recordsAffected, 0);
});

test("message rotation: getWarmupMessage cycles through WARMUP_MESSAGES", async () => {
  const { executeWarmup } = await import("../../src/lib/warmupScheduler.ts");
  const settingsDb = await import("../../src/lib/db/settings.ts");

  const connections: Record<string, boolean> = {};
  const conn = await providersDb.createProviderConnection({
    provider: "claude",
    authType: "oauth",
    name: "Pro Rotation",
    email: "rotation@example.com",
    accessToken: "tok-rotate",
    refreshToken: "rt-rotate",
    isActive: true,
    providerSpecificData: { organizationType: "claude_pro" },
  });
  connections[conn.id] = true;
  await settingsDb.updateSettings({ claudeWarmup: { connections } });

  const messages: string[] = [];
  const mock = installMockFetch(({ init }) => {
    const body = JSON.parse(init?.body as string);
    messages.push(body.messages?.[0]?.content);
    return { status: 200, body: { usage: { input_tokens: 1, output_tokens: 1 } } };
  });

  for (let i = 0; i < 4; i++) {
    await executeWarmup();
  }
  mock.restore();

  const uniqueMessages = new Set(messages);
  assert.ok(
    uniqueMessages.size >= 3,
    `messages should rotate, got ${uniqueMessages.size} unique: ${messages.join(", ")}`
  );
  const mock2 = installMockFetch(({ init }) => {
    const body = JSON.parse(init?.body as string);
    messages.push(body.messages?.[0]?.content);
    return { status: 200, body: { usage: { input_tokens: 1, output_tokens: 1 } } };
  });
  await executeWarmup();
  mock2.restore();
  assert.equal(messages[0], messages[4], "message rotation should cycle back");
});

test("registerWarmupScheduler: registers a cron job behind the env gate", async () => {
  const { registerWarmupScheduler } = await import("../../src/lib/warmupScheduler.ts");
  const { getJobRegistry, __resetJobRegistry } = await import("../../src/lib/jobRegistry/index.ts");
  const jobsDb = await import("../../src/lib/db/jobRegistryDb.ts");

  __resetJobRegistry();
  registerWarmupScheduler(getJobRegistry());

  const row = jobsDb.getJob("warmup");
  assert.ok(row, "warmup job should be persisted by register()");
  assert.equal(row.type, "cron");
  assert.equal(row.envFlag, "OMNIROUTE_WARMUP_ENABLED");
  assert.equal(row.config?.timezone, "America/Los_Angeles");
  assert.equal(
    row.config?.envDefault,
    false,
    "warmup must stay off when the env var is unset, unlike a generic job"
  );
});

test("registerWarmupScheduler: cron comes from the env, defaulting to 07:00 Pacific", async () => {
  const { registerWarmupScheduler } = await import("../../src/lib/warmupScheduler.ts");
  const { getJobRegistry, __resetJobRegistry } = await import("../../src/lib/jobRegistry/index.ts");
  const jobsDb = await import("../../src/lib/db/jobRegistryDb.ts");

  // The registry reads the schedule through cronGetter at start() time rather
  // than off the stored row, so an operator changing the env var does not need
  // the row rewritten. Assert the resolved value, not the column.
  __resetJobRegistry();
  const registry = getJobRegistry();
  registerWarmupScheduler(registry);
  const cronGetters = (registry as unknown as { cronGetters: Map<string, () => string> })
    .cronGetters;
  assert.equal(cronGetters.get("warmup")?.(), "0 7 * * *");

  process.env.OMNIROUTE_WARMUP_CRON = "30 5 * * 1";
  assert.equal(cronGetters.get("warmup")?.(), "30 5 * * 1");
  delete process.env.OMNIROUTE_WARMUP_CRON;

  assert.ok(jobsDb.getJob("warmup"), "row still present after re-reading the getter");
});
