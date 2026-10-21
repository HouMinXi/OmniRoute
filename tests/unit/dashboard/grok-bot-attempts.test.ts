import assert from "node:assert/strict";
import { test } from "node:test";
import { snapshotAttempt } from "../../../src/app/(dashboard)/dashboard/grok-bot/transcript";

test("three drops before the heartbeat block the snapshot", () => {
  assert.equal(snapshotAttempt(2, "dropped"), "blocked");
});

test("a drop before the third keeps retrying", () => {
  assert.equal(snapshotAttempt(1, "dropped"), "retry");
});

test("leaving on purpose does not count", () => {
  assert.equal(snapshotAttempt(2, "left"), "left");
});
