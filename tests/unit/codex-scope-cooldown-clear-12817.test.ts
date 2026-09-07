import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "path";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-codex-clear-12817-"));
process.env.DATA_DIR = TEST_DATA_DIR;
process.env.API_KEY_SECRET = process.env.API_KEY_SECRET || "codex-clear-12817-secret";

const core = await import("../../src/lib/db/core.ts");
const providersDb = await import("../../src/lib/db/providers.ts");
const rateLimit = await import("../../src/lib/db/providers/rateLimit.ts");
const codexAccount = await import("../../open-sse/services/codexAccount/index.ts");

async function resetStorage(): Promise<void> {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
}

interface SeededConnection {
  id: string;
  providerSpecificData: Record<string, unknown>;
}

async function seedCodexConnection(): Promise<SeededConnection> {
  return providersDb.createProviderConnection({
    provider: "codex",
    authType: "oauth",
    name: "codex-clear-12817",
    email: "codex-clear-12817@example.com",
    apiKey: "codex-clear-12817-key",
    accessToken: "codex-clear-12817-access",
    refreshToken: "codex-clear-12817-refresh",
    providerSpecificData: {
      unrelated: { retained: true },
    },
  }) as unknown as Promise<SeededConnection>;
}

async function seedGlmConnection(): Promise<SeededConnection> {
  return providersDb.createProviderConnection({
    provider: "glm",
    authType: "apikey",
    name: "glm-clear-12817",
    apiKey: "glm-clear-12817-key",
    providerSpecificData: {
      leftover: "keep-me",
    },
  }) as unknown as Promise<SeededConnection>;
}

async function readConnection(id: string): Promise<Record<string, unknown>> {
  const connection = await providersDb.getProviderConnectionById(id);
  assert.ok(connection);
  return connection as unknown as Record<string, unknown>;
}

function psd(connection: Record<string, unknown>): Record<string, unknown> {
  return (connection.providerSpecificData ?? {}) as Record<string, unknown>;
}

function futureIso(ms: number): string {
  return new Date(Date.now() + ms).toISOString();
}

function quotaHeaders(resetAt5h: string, resetAt7d: string, usage5h = "10") {
  return {
    "x-codex-5h-usage": usage5h,
    "x-codex-5h-limit": "100",
    "x-codex-5h-reset-at": resetAt5h,
    "x-codex-7d-usage": "10",
    "x-codex-7d-limit": "100",
    "x-codex-7d-reset-at": resetAt7d,
  };
}

async function persistBothChildCooldowns(id: string): Promise<{
  codexUntil: string;
  sparkUntil: string;
}> {
  const codexUntil = futureIso(60_000);
  const sparkUntil = futureIso(120_000);
  await codexAccount.persistCodexChildCooldown({
    connectionId: id,
    model: "gpt-5.5",
    rateLimitedUntil: codexUntil,
  });
  await codexAccount.persistCodexChildCooldown({
    connectionId: id,
    model: "gpt-5.3-codex-spark",
    rateLimitedUntil: sparkUntil,
  });
  return { codexUntil, sparkUntil };
}

test.beforeEach(resetStorage);

test.after(() => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
});

test("#12817 PUT rateLimitedUntil:null also drops nested Codex child cooldowns", async () => {
  const connection = await seedCodexConnection();
  const { sparkUntil } = await persistBothChildCooldowns(connection.id);
  await providersDb.updateProviderConnection(connection.id, {
    rateLimitedUntil: futureIso(90_000),
  });

  const before = await readConnection(connection.id);
  assert.equal(
    codexAccount.getCodexChildCooldown(before as never, "gpt-5.3-codex-spark"),
    sparkUntil
  );

  await providersDb.updateProviderConnection(connection.id, { rateLimitedUntil: null });

  const after = await readConnection(connection.id);
  const data = psd(after);
  assert.equal(after.rateLimitedUntil, undefined);
  assert.equal(data.codexScopeRateLimitedUntil, undefined);
  assert.equal(data.codexScopeRateLimitSource, undefined);
  assert.deepEqual(data.unrelated, { retained: true });
  assert.equal(codexAccount.getCodexChildCooldown(after as never, "gpt-5.5"), null);
  assert.equal(codexAccount.getCodexChildCooldown(after as never, "gpt-5.3-codex-spark"), null);
  assert.equal(codexAccount.isCodexChildUnavailable(after as never, "gpt-5.5"), false);
});

test("#12817 PUT rateLimitedUntil:\"\" also drops nested Codex child cooldowns", async () => {
  const connection = await seedCodexConnection();
  await persistBothChildCooldowns(connection.id);
  await providersDb.updateProviderConnection(connection.id, {
    rateLimitedUntil: futureIso(90_000),
  });

  await providersDb.updateProviderConnection(connection.id, { rateLimitedUntil: "" });

  const after = await readConnection(connection.id);
  const data = psd(after);
  assert.equal(after.rateLimitedUntil, undefined);
  assert.equal(data.codexScopeRateLimitedUntil, undefined);
  assert.equal(codexAccount.isCodexChildUnavailable(after as never, "gpt-5.5"), false);
});

test("#12817 clearConnectionRateLimit strips nested Codex child cooldowns", async () => {
  const connection = await seedCodexConnection();
  await persistBothChildCooldowns(connection.id);
  rateLimit.setConnectionRateLimitUntil(connection.id, Date.now() + 90_000);

  rateLimit.clearConnectionRateLimit(connection.id);

  const after = await readConnection(connection.id);
  const data = psd(after);
  assert.equal(after.rateLimitedUntil, undefined);
  assert.equal(data.codexScopeRateLimitedUntil, undefined);
  assert.equal(data.codexScopeRateLimitSource, undefined);
  assert.deepEqual(data.unrelated, { retained: true });
  assert.equal(codexAccount.isCodexChildUnavailable(after as never, "gpt-5.5"), false);
});

test("#12817 CAS error-clear also strips nested Codex child cooldowns", async () => {
  const connection = await seedCodexConnection();
  await persistBothChildCooldowns(connection.id);
  const until = futureIso(90_000);
  await providersDb.updateProviderConnection(connection.id, {
    testStatus: "unavailable",
    lastError: "429",
    lastErrorAt: new Date().toISOString(),
    lastErrorType: "rate_limit_exceeded",
    rateLimitedUntil: until,
  });
  const before = await readConnection(connection.id);

  const applied = await providersDb.clearConnectionErrorIfUnchanged(connection.id, {
    testStatus: (before.testStatus as string) ?? null,
    lastErrorAt: (before.lastErrorAt as string) ?? null,
    rateLimitedUntil: (before.rateLimitedUntil as string) ?? null,
  });
  assert.equal(applied, true);

  const after = await readConnection(connection.id);
  assert.equal(after.testStatus, "active");
  assert.equal(psd(after).codexScopeRateLimitedUntil, undefined);
  assert.equal(codexAccount.isCodexChildUnavailable(after as never, "gpt-5.5"), false);
});

test("#12817 a successful quota observation clears that child's leftover cooldown", async () => {
  const connection = await seedCodexConnection();
  const reset5h = futureIso(60_000);
  const reset7d = futureIso(600_000);

  await persistBothChildCooldowns(connection.id);
  await codexAccount.persistCodexChildQuotaResponse({
    connectionId: connection.id,
    model: "gpt-5.5",
    headers: quotaHeaders(reset5h, reset7d, "95"),
    status: 429,
  });
  await codexAccount.persistCodexChildQuotaResponse({
    connectionId: connection.id,
    model: "gpt-5.5",
    headers: quotaHeaders(reset5h, reset7d, "10"),
    status: 200,
  });

  const after = await readConnection(connection.id);
  const data = psd(after);
  const until = data.codexScopeRateLimitedUntil as Record<string, unknown> | undefined;
  const exhausted = data.codexExhaustedWindowByScope as Record<string, unknown> | undefined;
  assert.equal(until?.codex, undefined);
  assert.equal(typeof until?.spark, "string");
  assert.equal(exhausted?.codex, undefined);
  assert.deepEqual(data.unrelated, { retained: true });
  assert.equal(codexAccount.isCodexChildUnavailable(after as never, "gpt-5.5"), false);
  assert.equal(codexAccount.isCodexChildUnavailable(after as never, "gpt-5.3-codex-spark"), true);
});

test("#12817 clearing a non-Codex cooldown leaves providerSpecificData alone", async () => {
  const connection = await seedGlmConnection();
  await providersDb.updateProviderConnection(connection.id, {
    rateLimitedUntil: futureIso(90_000),
  });
  await providersDb.updateProviderConnection(connection.id, { rateLimitedUntil: null });
  const after = await readConnection(connection.id);
  assert.equal(after.rateLimitedUntil, undefined);
  assert.equal(psd(after).leftover, "keep-me");
});
