import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

// Regression coverage for the agy→antigravity alias credential fallback:
// when a canonical provider (e.g. "antigravity") has no active connections,
// buildAutoCandidates should fall back to checking aliases that map to it
// (e.g. "agy") and use those connections instead.

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-combo-alias-"));
const ORIGINAL_DATA_DIR = process.env.DATA_DIR;
process.env.DATA_DIR = TEST_DATA_DIR;

const core = await import("../../src/lib/db/core.ts");
const providersDb = await import("../../src/lib/db/providers.ts");
const combo = await import("../../open-sse/services/combo.ts");

function resetStorage() {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true });
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
}

test.beforeEach(() => resetStorage());

test.after(() => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true });
  if (ORIGINAL_DATA_DIR === undefined) delete process.env.DATA_DIR;
  else process.env.DATA_DIR = ORIGINAL_DATA_DIR;
});

test("buildAutoCandidates falls back to alias connections when canonical provider has none", async () => {
  // Register connection under "agy" (the alias), NOT "antigravity" (the canonical ID).
  // This mirrors the real scenario where users register via the agy CLI provider.
  await providersDb.createProviderConnection({
    provider: "agy",
    authType: "oauth",
    name: "test-agy-account",
    accessToken: "test-token",
    defaultModel: "gemini-3.5-flash",
  });

  // Verify the connection was created under "agy"
  const conns = await providersDb.getProviderConnections({ provider: "agy", isActive: true });
  assert.equal(conns.length, 1, "expected 1 agy connection");
  assert.equal(conns[0].provider, "agy");

  // Verify "antigravity" (canonical) has NO connections
  const canonicalConns = await providersDb.getProviderConnections({
    provider: "antigravity",
    isActive: true,
  });
  assert.equal(canonicalConns.length, 0, "expected 0 antigravity connections");

  // Now test that buildAutoCandidates can find the agy connection
  // when resolving a target that uses the canonical provider "antigravity".
  // The combo targets use "agy/gemini-3.5-flash" which resolves to
  // provider="antigravity" via ALIAS_TO_PROVIDER_ID.
  const targets = [
    {
      kind: "model" as const,
      stepId: "agy/gemini-3.5-flash",
      executionKey: "agy/gemini-3.5-flash",
      modelStr: "agy/gemini-3.5-flash",
      provider: "antigravity", // resolved from agy alias
      providerId: "antigravity",
      connectionId: null,
      weight: 1,
      label: null,
    },
  ];

  // buildAutoCandidates should find the agy connection via alias fallback
  const candidates = await combo.buildAutoCandidates(targets, {
    strategy: "priority",
    settings: {},
  });

  // The candidate should have a valid connection from the agy provider
  assert.ok(candidates.length > 0, "expected at least 1 candidate from alias fallback");
  const candidate = candidates[0];
  assert.ok(
    candidate.connectionId,
    "expected candidate to have a connectionId from the agy alias fallback"
  );
});

test("buildAutoCandidates uses canonical connections when available (no fallback needed)", async () => {
  // Register connection under the canonical "antigravity" provider
  await providersDb.createProviderConnection({
    provider: "antigravity",
    authType: "oauth",
    name: "test-antigravity-account",
    accessToken: "test-token",
    defaultModel: "gemini-3.5-flash",
  });

  const targets = [
    {
      kind: "model" as const,
      stepId: "antigravity/gemini-3.5-flash",
      executionKey: "antigravity/gemini-3.5-flash",
      modelStr: "antigravity/gemini-3.5-flash",
      provider: "antigravity",
      providerId: "antigravity",
      connectionId: null,
      weight: 1,
      label: null,
    },
  ];

  const candidates = await combo.buildAutoCandidates(targets, {
    strategy: "priority",
    settings: {},
  });

  assert.ok(candidates.length > 0, "expected candidates from canonical provider");
  assert.ok(
    candidates[0].connectionId,
    "expected candidate to have a connectionId from canonical provider"
  );
});

test("buildAutoCandidates prefers canonical connections over alias fallback", async () => {
  // Register connections under BOTH canonical and alias
  await providersDb.createProviderConnection({
    provider: "antigravity",
    authType: "oauth",
    name: "canonical-account",
    accessToken: "test-token-canonical",
    defaultModel: "gemini-3.5-flash",
  });
  await providersDb.createProviderConnection({
    provider: "agy",
    authType: "oauth",
    name: "alias-account",
    accessToken: "test-token-alias",
    defaultModel: "gemini-3.5-flash",
  });

  const targets = [
    {
      kind: "model" as const,
      stepId: "antigravity/gemini-3.5-flash",
      executionKey: "antigravity/gemini-3.5-flash",
      modelStr: "antigravity/gemini-3.5-flash",
      provider: "antigravity",
      providerId: "antigravity",
      connectionId: null,
      weight: 1,
      label: null,
    },
  ];

  const candidates = await combo.buildAutoCandidates(targets, {
    strategy: "priority",
    settings: {},
  });

  assert.ok(candidates.length > 0, "expected candidates");
  // Should use the canonical connection, not the alias
  const canonicalConns = await providersDb.getProviderConnections({
    provider: "antigravity",
    isActive: true,
  });
  assert.ok(
    candidates.some((c) => c.connectionId === canonicalConns[0].id),
    "expected canonical connection to be preferred over alias"
  );
});
