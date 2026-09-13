import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { PROVIDER_MODELS_CONFIG } from "../../src/app/api/providers/[id]/models/discovery/providerModelsConfig.ts";
import { HARDCODED_MODELS_CONFIG_IDS } from "../../src/lib/providerModels/hardcodedModelsConfigIds.ts";
import { getDiscoveryClass } from "../../src/lib/providerModels/discoveryClass.ts";
import { deriveConfigFromRegistryModelsUrl } from "../../src/app/api/providers/[id]/models/discoveryConfig.ts";
import { getRegistryEntry } from "../../open-sse/config/providerRegistry.ts";

const XAI_MODELS_URL = "https://api.x.ai/v1/models";

const XAI_SEED_IDS = [
  "grok-4.6",
  "grok-4.3",
  "grok-build-0.1",
  "grok-4.20-multi-agent-0309",
  "grok-4.20-0309-reasoning",
  "grok-4.20-0309-non-reasoning",
].slice().sort();

const XAI_OAUTH_SEED_IDS = [...XAI_SEED_IDS, "grok-4.5"].sort();

function readRepo(rel: string): string {
  return fs.readFileSync(new URL("../../" + rel, import.meta.url), "utf8");
}

function modelIds(provider: string): string[] {
  const entry = getRegistryEntry(provider);
  assert.ok(entry, `${provider} registry entry missing`);
  return (entry.models ?? []).map((model) => model.id).slice().sort();
}

function extractNamedBlock(src: string, name: string): string {
  const match = src.match(
    new RegExp(
      "(?:const|export const)\\s+" + name + "[\\s\\S]*?=\\s*([\\[{][\\s\\S]*?^[\\]}];)",
      "m"
    )
  );
  assert.ok(match, `${name} block not found`);
  return match[1];
}

function assertNoXaiFamily(block: string, label: string): void {
  assert.doesNotMatch(block, /["']xai["']/, `${label} must not mention xai`);
  assert.doesNotMatch(
    block,
    /["']xai-oauth["']/,
    `${label} must not mention xai-oauth`
  );
  assert.doesNotMatch(block, /["']xao["']/, `${label} must not mention xao`);
}

test("test 1: xai-oauth discovery URL method auth exact match", () => {
  const oauth = PROVIDER_MODELS_CONFIG["xai-oauth"];
  const apikey = PROVIDER_MODELS_CONFIG["xai"];
  assert.ok(oauth, "xai-oauth must exist in PROVIDER_MODELS_CONFIG");
  assert.ok(apikey, "xai must exist in PROVIDER_MODELS_CONFIG");
  assert.equal(oauth.url, XAI_MODELS_URL);
  assert.equal(apikey.url, XAI_MODELS_URL);
  assert.equal(oauth.method, "GET");
  assert.equal(oauth.authHeader, "Authorization");
  assert.equal(oauth.authPrefix, "Bearer ");
});

test("test 2: xai and xai-oauth share one config object", () => {
  assert.equal(
    PROVIDER_MODELS_CONFIG["xai"],
    PROVIDER_MODELS_CONFIG["xai-oauth"]
  );
});

test("test 3: HARDCODED lockstep includes xai-oauth", () => {
  assert.ok(HARDCODED_MODELS_CONFIG_IDS.has("xai-oauth"));
  const fromModule = [...HARDCODED_MODELS_CONFIG_IDS].sort();
  const fromConfig = Object.keys(PROVIDER_MODELS_CONFIG).sort();
  assert.deepEqual(fromModule, fromConfig);
});

test("test 4: getDiscoveryClass xai-oauth is openai-compat", () => {
  assert.equal(getDiscoveryClass("xai-oauth"), "openai-compat");
  assert.equal(getDiscoveryClass("xai"), "openai-compat");
});

test("test 5: catalog siblings and search pairs stay unmerged", () => {
  const siblingSrc = readRepo("src/lib/db/models/activeSyncedCatalog.ts");
  const siblingBlock = extractNamedBlock(siblingSrc, "CATALOG_SIBLING_IDS");
  assertNoXaiFamily(siblingBlock, "CATALOG_SIBLING_IDS");

  const poisonedSiblings = siblingBlock.replace(
    /antigravity:\s*\["agy"\]/,
    'xai: ["xai-oauth"], antigravity: ["agy"]'
  );
  assert.throws(() => assertNoXaiFamily(poisonedSiblings, "poisoned siblings"));

  const pairsSrc = readRepo("src/sse/services/auth.ts");
  const pairsBlock = extractNamedBlock(pairsSrc, "PROVIDER_SEARCH_PAIRS");
  assertNoXaiFamily(pairsBlock, "PROVIDER_SEARCH_PAIRS");

  const poisonedPairs = pairsBlock.replace(
    /\["nvidia",\s*"nvidia_nim"\]/,
    '["xai", "xai-oauth"], ["nvidia", "nvidia_nim"]'
  );
  assert.throws(() => assertNoXaiFamily(poisonedPairs, "poisoned pairs"));
});

test("test 6: gate 4 deriveConfig does not mutate registry", () => {
  const minimax = getRegistryEntry("minimax");
  assert.ok(minimax?.modelsUrl);
  assert.equal(
    deriveConfigFromRegistryModelsUrl("minimax")?.url,
    minimax.modelsUrl
  );
  assert.equal(deriveConfigFromRegistryModelsUrl("xai-oauth"), undefined);
  assert.equal(
    deriveConfigFromRegistryModelsUrl("no-such-provider-xyz"),
    undefined
  );
});

test("test 7: xai and xai-oauth seeds stay frozen", () => {
  assert.deepEqual(modelIds("xai"), XAI_SEED_IDS);
  assert.deepEqual(modelIds("xai-oauth"), XAI_OAUTH_SEED_IDS);
  assert.equal(modelIds("xai").includes("grok-4.7"), false);
  assert.equal(modelIds("xai-oauth").includes("grok-4.7"), false);
});

test("test 8: alias xao is not a discovery key", () => {
  assert.equal(PROVIDER_MODELS_CONFIG["xao"], undefined);
  assert.equal(getDiscoveryClass("xao"), "static-only");
});
