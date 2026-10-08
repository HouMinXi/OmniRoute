import { describe, it, afterEach } from "node:test";
import assert from "node:assert/strict";

const {
  GrokBotBridgeRegistry,
  bridgeMaxRequestsPerNonce,
} = await import("../../open-sse/services/grokBotBridgeRegistry.ts");

const ORIGINAL = process.env.GROK_BOT_BRIDGE_MAX_REQUESTS;

describe("grok bot bridge request cap override", () => {
  afterEach(() => {
    if (ORIGINAL === undefined) delete process.env.GROK_BOT_BRIDGE_MAX_REQUESTS;
    else process.env.GROK_BOT_BRIDGE_MAX_REQUESTS = ORIGINAL;
  });

  it("keeps the default of 8 when the override is missing or unusable", () => {
    delete process.env.GROK_BOT_BRIDGE_MAX_REQUESTS;
    assert.equal(bridgeMaxRequestsPerNonce(), 8);

    process.env.GROK_BOT_BRIDGE_MAX_REQUESTS = "zero";
    assert.equal(bridgeMaxRequestsPerNonce(), 8);

    process.env.GROK_BOT_BRIDGE_MAX_REQUESTS = "0";
    assert.equal(bridgeMaxRequestsPerNonce(), 8);

    process.env.GROK_BOT_BRIDGE_MAX_REQUESTS = "1.5";
    assert.equal(bridgeMaxRequestsPerNonce(), 8);
  });

  it("accepts a ninth reservation when the override is 16", () => {
    process.env.GROK_BOT_BRIDGE_MAX_REQUESTS = "16";
    assert.equal(bridgeMaxRequestsPerNonce(), 16);

    const registry = new GrokBotBridgeRegistry({
      clock: { now: () => 1_000, setTimeout: () => 0, clearTimeout: () => {} },
    });
    const nonce = "abcdefghijABCDEFGHIJ_-";
    const registered = registry.register({
      nonce,
      port: 4100,
      createdAt: 1_000,
      challenge: "challenge-token",
      hooks: { onDraining() {}, onForcedAbort() {}, onLocallyClosed() {} },
    });
    assert.equal(registered.ok, true);

    const lookup = registry.lookup(nonce);
    assert.equal(lookup.kind, "active");
    if (lookup.kind !== "active") return;

    for (let i = 0; i < 9; i += 1) {
      assert.equal(registry.reserveSlot(lookup.entry), true, `reservation ${i + 1}`);
    }
    assert.equal(lookup.entry.slotsUsed, 9);

    delete process.env.GROK_BOT_BRIDGE_MAX_REQUESTS;
    assert.equal(registry.reserveSlot(lookup.entry), false);
    assert.equal(lookup.entry.slotsUsed, 9);
  });
});
