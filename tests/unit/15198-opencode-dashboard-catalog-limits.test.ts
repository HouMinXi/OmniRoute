import test from "node:test";
import assert from "node:assert/strict";

const { buildOpenCodeProviderConfig } = await import("../../src/shared/services/opencodeConfig.ts");

const KNOWN = {
  id: "cx/known-model",
  context_length: 200_000,
  max_output_tokens: 32_000,
  capabilities: { reasoning: true },
};

test("dashboard writer copies a known catalog limit and capability (#15198)", () => {
  const config = buildOpenCodeProviderConfig({
    baseUrl: "http://localhost:20128/v1",
    apiKey: "sk_test",
    models: [KNOWN.id, "unknown/model"],
    catalog: [KNOWN],
  });

  const known = config.models[KNOWN.id];
  assert.equal(known.limit.context, 200_000);
  assert.equal(known.limit.output, 32_000);
  assert.equal(known.reasoning, true);
  assert.notEqual(known.limit.context, 128_000);
  assert.notEqual(known.limit.output, 8_192);

  const unknown = config.models["unknown/model"];
  assert.equal(unknown.limit.context, 128_000);
  assert.equal(unknown.limit.output, 8_192);
  assert.equal(unknown.reasoning, undefined);
});
