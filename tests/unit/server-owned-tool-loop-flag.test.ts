import { describe, it, before, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import os from "node:os";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-test-flag-loop-"));
process.env.DATA_DIR = tmpDir;

const core = await import("../../src/lib/db/core.ts");
const { FEATURE_FLAG_DEFINITIONS } = await import(
  "../../src/shared/constants/featureFlagDefinitions.ts"
);
const { setFeatureFlagOverride, clearAllFeatureFlagOverrides } = await import(
  "../../src/lib/db/featureFlags.ts"
);
const { isServerOwnedToolLoopEnabled } = await import(
  "../../src/shared/utils/featureFlags.ts"
);

describe("SERVER_OWNED_TOOL_LOOP_ENABLED flag definition", () => {
  it("exists in FEATURE_FLAG_DEFINITIONS", () => {
    const def = FEATURE_FLAG_DEFINITIONS.find(
      (d) => d.key === "SERVER_OWNED_TOOL_LOOP_ENABLED"
    );
    assert.ok(def, "SERVER_OWNED_TOOL_LOOP_ENABLED should exist");
    assert.equal(def.category, "runtime");
    assert.equal(def.defaultValue, "false");
    assert.equal(def.requiresRestart, false);
    assert.equal(def.descriptionI18nKey, "featureFlagServerOwnedToolLoopDescription");
  });
});

describe("isServerOwnedToolLoopEnabled wrapper", () => {
  beforeEach(() => {
    clearAllFeatureFlagOverrides();
  });

  it("returns false when no override is set (default)", () => {
    assert.equal(isServerOwnedToolLoopEnabled(), false);
  });

  it("returns true when DB override is set to true", () => {
    setFeatureFlagOverride("SERVER_OWNED_TOOL_LOOP_ENABLED", "true");
    assert.equal(isServerOwnedToolLoopEnabled(), true);
  });

  it("returns false when flag reader throws", () => {
    // Corrupt the DB to force an error in flag resolution
    try {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    } catch {
      // ignore
    }
    assert.equal(isServerOwnedToolLoopEnabled(), false);
  });
});

describe("feature-flags-settings count update", () => {
  it("flag count matches updated expected value", () => {
    assert.equal(FEATURE_FLAG_DEFINITIONS.length, 55);
  });
});

describe("i18n key parity for SERVER_OWNED_TOOL_LOOP_ENABLED", () => {
  let enMessages: Record<string, string>;
  let ptBrMessages: Record<string, string>;

  before(async () => {
    const enRaw = fs.readFileSync(
      path.resolve(__dirname, "../../src/i18n/messages/en.json"),
      "utf8"
    );
    enMessages = JSON.parse(enRaw);
    const ptBrRaw = fs.readFileSync(
      path.resolve(__dirname, "../../src/i18n/messages/pt-BR.json"),
      "utf8"
    );
    ptBrMessages = JSON.parse(ptBrRaw);
  });

  it("en.json has the i18n key", () => {
    assert.ok(
      enMessages.featureFlagServerOwnedToolLoopDescription,
      "en.json should contain featureFlagServerOwnedToolLoopDescription"
    );
  });

  it("pt-BR.json has the i18n key", () => {
    assert.ok(
      ptBrMessages.featureFlagServerOwnedToolLoopDescription,
      "pt-BR.json should contain featureFlagServerOwnedToolLoopDescription"
    );
  });
});

after(() => {
  try {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  } catch {
    // ignore
  }
});
