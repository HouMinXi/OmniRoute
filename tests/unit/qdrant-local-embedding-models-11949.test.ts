/**
 * Regression test for #11949:
 * GET /api/settings/qdrant/embedding-models must list embedding models from active
 * local/no-auth providers (e.g. ollama-local, lmstudio, vllm) even when apiKey is empty.
 */
import test, { after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { NextRequest } from "next/server";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-qdrant-models-11949-"));
process.env.DATA_DIR = TEST_DATA_DIR;

const { GET } = await import("../../src/app/api/settings/qdrant/embedding-models/route.ts");
const { createProviderConnection, deleteProviderConnection, getProviderConnections } =
  await import("../../src/lib/db/providers.ts");
const settingsDb = await import("../../src/lib/db/settings.ts");
const core = await import("../../src/lib/db/core.ts");

after(() => {
  core.resetDbInstance();
  try {
    fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true });
  } catch {}
});

beforeEach(async () => {
  await settingsDb.updateSettings({ requireLogin: false });
  const all = (await getProviderConnections()) as Array<{ id: string }>;
  for (const c of all) {
    if (c?.id) await deleteProviderConnection(c.id);
  }
});

function createMockRequest() {
  return new NextRequest("http://localhost:20128/api/settings/qdrant/embedding-models");
}

test("#11949: lists embedding models for active local providers with no API key (ollama-local, lm-studio)", async () => {
  // Add an active ollama-local connection with empty apiKey and authType="none"
  await createProviderConnection({
    provider: "ollama-local",
    name: "My Local Ollama",
    authType: "none",
    apiKey: "",
    isActive: true,
    status: "active",
  });

  const res = await GET(createMockRequest());
  assert.equal(res.status, 200);

  const body = await res.json();
  assert.ok(Array.isArray(body.models), "response should contain models array");

  const modelValues = body.models.map((m: { value: string }) => m.value);
  assert.ok(
    modelValues.includes("ollama-local/bge-m3") || modelValues.includes("ollama-local/nomic-embed-text"),
    `expected ollama-local embedding models in list, got: ${JSON.stringify(modelValues)}`
  );
});

test("#11949: lists embedding models for active OpenAI-compatible local providers (lm-studio alias)", async () => {
  await createProviderConnection({
    provider: "lm-studio",
    name: "Local LM Studio",
    authType: "none",
    apiKey: "",
    isActive: true,
    status: "active",
  });

  const res = await GET(createMockRequest());
  assert.equal(res.status, 200);

  const body = await res.json();
  assert.ok(Array.isArray(body.models), "response should contain models array");
});
