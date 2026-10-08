import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  applyEnrichment,
  lookupEnrichment,
  type OmniRouteEnrichmentMap,
} from "../src/shared/enrich.js";
import { mapRawModelToModelV2 } from "../src/shared/models-map.js";

/**
 * A generic openai-compatible adapter publishes models under its own prefix
 * (`ih/`, `si/`). The pricing catalog has no row for that prefix, so the
 * lookup used to fall through to the bare model id and return whichever
 * unrelated provider happened to sell the same name — including that
 * provider's free-tier budget.
 */
const enrichment: OmniRouteEnrichmentMap = new Map([
  [
    "glm-5.3",
    {
      name: "GLM 5.3",
      providerAlias: "glm",
      providerCanonical: "glm",
      providerDisplayName: "Glm",
      freeType: "credit",
      creditTokens: 1_000_000,
      pricing: { input: 0, output: 0 },
    },
  ],
  [
    "deepseek-v4.1-flash",
    {
      name: "deepseek-v4.1-flash",
      providerAlias: "alibaba",
      providerCanonical: "alibaba",
      providerDisplayName: "Alibaba",
      pricing: { input: 0.1, output: 0.4 },
    },
  ],
]);

describe("generic adapter prefixes keep their own attribution", () => {
  it("does not attribute ih/glm-5.3 to the unrelated provider that owns the bare id", () => {
    const hit = lookupEnrichment("ih/glm-5.3", enrichment, new Map());
    const model = mapRawModelToModelV2(
      { id: "ih/glm-5.3" },
      { providerId: "omniroute", baseURL: "https://gw.example.com" }
    );
    applyEnrichment(model, hit);

    assert.equal(hit?.providerAlias, "ih");
    assert.equal(hit?.providerDisplayName, "ih");
    assert.notEqual(hit?.providerAlias, "glm");
    assert.equal(hit?.freeType, undefined);
    assert.equal(hit?.creditTokens, undefined);
    assert.equal(hit?.pricing, undefined);
    assert.equal(hit?.name, "GLM 5.3");
    assert.equal(model.name.startsWith("ih - "), true);
    assert.equal(model.name.includes("Glm"), false);
    assert.equal(model.name.includes("[Free]"), false);
    assert.equal(model.name.includes("1M"), false);
  });

  it("does not attribute si/ models to the unrelated provider that owns the bare id", () => {
    const hit = lookupEnrichment("si/deepseek-v4.1-flash", enrichment, new Map());
    assert.equal(hit?.providerAlias, "si");
    assert.equal(hit?.providerDisplayName, "si");
    assert.notEqual(hit?.providerAlias, "alibaba");
    assert.equal(hit?.pricing, undefined);
    assert.equal(hit?.name, "deepseek-v4.1-flash");
  });

  it("still attributes a non-generic prefix through the bare-id fallback", () => {
    const hit = lookupEnrichment("dg/glm-5.3", enrichment, new Map());
    assert.equal(hit?.providerAlias, "glm");
    assert.equal(hit?.providerDisplayName, "Glm");
  });
});
