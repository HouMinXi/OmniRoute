import test from "node:test";
import assert from "node:assert/strict";

const { hidesProviderModelSurfaces } =
  await import("../../../src/app/(dashboard)/dashboard/providers/[id]/providerSurfaceVisibility.ts");

test("only grok bot hides the model, filter, and playground surfaces", () => {
  assert.equal(hidesProviderModelSurfaces("grok-bot"), true);
  assert.equal(hidesProviderModelSurfaces("grok-cli"), false);
  assert.equal(hidesProviderModelSurfaces("openai"), false);
});
