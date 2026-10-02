/**
 * #15251 — a combo payload that disables universal handoff must survive the
 * combo API schemas. createComboSchema / updateComboSchema omitted the field,
 * and Zod's default strip policy dropped it before the route wrote the combo,
 * so an operator could not persist enabled: false.
 *
 * Does not touch DEFAULT_UNIVERSAL_HANDOFF_CONFIG.enabled (still true).
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-combo-handoff-15251-"));
process.env.DATA_DIR = TEST_DATA_DIR;

const { createComboSchema, updateComboSchema } =
  await import("../../src/shared/validation/schemas.ts");
const core = await import("../../src/lib/db/core.ts");
const combosDb = await import("../../src/lib/db/combos.ts");

const disabledHandoff = {
  enabled: false,
  trigger: "on-switch" as const,
  providerAllowlist: [],
  maxMessagesForSummary: 30,
  handoffModel: "",
  ttlMinutes: 300,
  preserveSystemPrompt: true,
};

async function resetStorage() {
  core.resetDbInstance();
  if (fs.existsSync(TEST_DATA_DIR)) {
    fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  }
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
}

test.beforeEach(async () => {
  await resetStorage();
});

test.after(async () => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
});

test("createComboSchema keeps a disabled universal_handoff", () => {
  const parsed = createComboSchema.parse({
    name: "Handoff Off",
    models: [{ provider: "openai", model: "gpt-4.1" }],
    universal_handoff: disabledHandoff,
  });
  assert.deepEqual(parsed.universal_handoff, disabledHandoff);
});

test("updateComboSchema keeps a disabled universal_handoff and counts it as an update", () => {
  const parsed = updateComboSchema.parse({
    universal_handoff: disabledHandoff,
  });
  assert.deepEqual(parsed.universal_handoff, disabledHandoff);
  assert.doesNotThrow(() => updateComboSchema.parse({ universal_handoff: disabledHandoff }));
});

test("updateComboSchema accepts camelCase universalHandoff and null to clear", () => {
  const parsed = updateComboSchema.parse({ universalHandoff: disabledHandoff });
  assert.deepEqual(parsed.universalHandoff, disabledHandoff);
  const cleared = updateComboSchema.parse({ universal_handoff: null });
  assert.equal(cleared.universal_handoff, null);
});

test("a disabled universal_handoff round-trips through createCombo and updateCombo", async () => {
  const created = await combosDb.createCombo(
    createComboSchema.parse({
      name: "Persist Handoff Off",
      models: [{ provider: "openai", model: "gpt-4.1" }],
      universal_handoff: disabledHandoff,
    })
  );
  assert.deepEqual(created.universal_handoff, disabledHandoff);

  const reread = await combosDb.getComboById(created.id as string);
  assert.ok(reread);
  assert.deepEqual(reread!.universal_handoff, disabledHandoff);

  const updated = await combosDb.updateCombo(
    created.id as string,
    updateComboSchema.parse({ universal_handoff: { enabled: false } })
  );
  assert.ok(updated);
  assert.deepEqual(updated!.universal_handoff, { enabled: false });
});
