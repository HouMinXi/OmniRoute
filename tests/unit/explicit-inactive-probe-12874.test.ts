import test from "node:test";
import assert from "node:assert/strict";
import { EXPIRED_REPROBE_BLOCKLIST } from "../../src/lib/quota/connectionRecovery.ts";
import { EXPLICIT_PROBE_BLOCKLIST } from "../../src/sse/services/explicitInactiveProbe.ts";

test("P-14 EXPLICIT_PROBE_BLOCKLIST is the same object as EXPIRED_REPROBE_BLOCKLIST", () => {
  assert.equal(EXPLICIT_PROBE_BLOCKLIST, EXPIRED_REPROBE_BLOCKLIST);
});
