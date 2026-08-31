/**
 * #11284 follow-up: empty Cloud Code projectId must mark the connection
 * degraded even when projectDiscoveryOutcome is missing.
 *
 * Production evidence (X500, 2026-08-31): an agy OAuth connect for a working
 * Google One account persisted testStatus="active" with projectId="" and
 * tier="legacy-tier". Dashboard usage then showed "Antigravity access
 * forbidden. Check subscription." because fetchAvailableModels returned 403.
 * The official Windows `agy` CLI could still serve Gemini on the same
 * account -- Omni never stored the CLI's Cloud Code project.
 *
 * The original #11284 gate only fired when tokenData.projectDiscoveryOutcome
 * was set. Paste-credentials / persistOAuthConnection / agy CLI import all
 * persist empty projectId without that flag, so the dashboard showed Connected.
 *
 * Run: node --import tsx/esm --test tests/unit/antigravity-empty-project-degrade-11284.test.ts
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { antigravityDegradedProjectState } from "../../src/lib/oauth/antigravityProjectGate.ts";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-11284-empty-project-"));
process.env.DATA_DIR = TEST_DATA_DIR;

const core = await import("../../src/lib/db/core.ts");
const providersDb = await import("../../src/lib/db/providers.ts");
const { persistOAuthConnection } = await import("../../src/lib/oauth/connectionPersistence.ts");
const { createConnectionFromAgyToken } = await import("../../src/lib/oauth/utils/agyAuthImport.ts");

test.after(() => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
});

test("gate degrades agy/antigravity when projectId is empty even without outcome flag", () => {
  for (const provider of ["agy", "antigravity"]) {
    const degraded = antigravityDegradedProjectState(provider, {
      projectId: "",
      providerSpecificData: { projectId: "", tier: "legacy-tier" },
    });
    assert.ok(degraded, `${provider}: empty projectId must degrade`);
    assert.equal(degraded.testStatus, "degraded");
    assert.equal(degraded.errorCode, "missing_project_id");
    assert.equal(degraded.lastErrorType, "oauth_missing_project_id");
  }
});

test("gate degrades when only providerSpecificData.projectId is empty", () => {
  const degraded = antigravityDegradedProjectState("agy", {
    providerSpecificData: { projectId: "   ", clientProfile: "cli" },
  });
  assert.ok(degraded, "whitespace projectId is empty");
  assert.equal(degraded.testStatus, "degraded");
});

test("gate stays null for a real Cloud Code projectId", () => {
  assert.equal(
    antigravityDegradedProjectState("agy", {
      projectId: "dotted-relic-q6pck",
      providerSpecificData: { projectId: "dotted-relic-q6pck", tier: "g1-pro-tier" },
    }),
    null
  );
});

test("gate ignores non-antigravity providers even with empty projectId", () => {
  assert.equal(antigravityDegradedProjectState("codex", { projectId: "" }), null);
});

test("persistOAuthConnection does not save agy with empty projectId as active", async () => {
  const connection = await persistOAuthConnection("agy", {
    email: "empty-project@example.test",
    accessToken: "agy-access-token-fixture",
    refreshToken: "agy-refresh-token-fixture",
    expiresIn: 3600,
    projectId: "",
    providerSpecificData: { clientProfile: "cli", projectId: "", tier: "legacy-tier" },
  });
  const stored = await providersDb.getProviderConnectionById(connection.id);
  assert.equal(stored?.testStatus, "degraded");
  assert.equal(stored?.errorCode, "missing_project_id");
  assert.equal(stored?.lastErrorType, "oauth_missing_project_id");
  assert.equal(stored?.isActive, true, "refresh token stays stored; request-time bootstrap can heal");
});

test("persistOAuthConnection keeps a discovered projectId active", async () => {
  const connection = await persistOAuthConnection("agy", {
    email: "has-project@example.test",
    accessToken: "agy-access-token-fixture",
    refreshToken: "agy-refresh-token-fixture",
    expiresIn: 3600,
    projectId: "generated-strength-t6b5h",
    providerSpecificData: {
      clientProfile: "cli",
      projectId: "generated-strength-t6b5h",
      tier: "g1-pro-tier",
    },
  });
  const stored = await providersDb.getProviderConnectionById(connection.id);
  assert.equal(stored?.testStatus, "active");
  assert.ok(!stored?.errorCode);
});

test("agy CLI import with empty projectId is degraded, not Connected", async () => {
  const { connection, created } = await createConnectionFromAgyToken(
    {
      accessToken: "agy-access-token-fixture",
      refreshToken: "agy-refresh-token-fixture",
      expiresAt: new Date(Date.now() + 3_600_000).toISOString(),
      tokenType: "Bearer",
      authMethod: "oauth",
      email: "cli-empty@example.test",
      projectId: "",
      tier: "legacy-tier",
    },
    {}
  );
  assert.equal(created, true);
  const stored = await providersDb.getProviderConnectionById(connection.id as string);
  assert.equal(stored?.testStatus, "degraded");
  assert.equal(stored?.errorCode, "missing_project_id");
});

test("agy CLI import with a projectId stays active (#9204 reactivation still works)", async () => {
  const { connection } = await createConnectionFromAgyToken(
    {
      accessToken: "agy-access-token-fixture",
      refreshToken: "agy-refresh-token-fixture",
      expiresAt: new Date(Date.now() + 3_600_000).toISOString(),
      tokenType: "Bearer",
      authMethod: "oauth",
      email: "cli-ok@example.test",
      projectId: "project-9204",
      tier: "free-tier",
    },
    {}
  );
  const stored = await providersDb.getProviderConnectionById(connection.id as string);
  assert.equal(stored?.testStatus, "active");
});
