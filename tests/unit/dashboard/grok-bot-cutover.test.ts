import test from "node:test";
import assert from "node:assert/strict";

const { nextTranscriptRequest } =
  await import("../../../src/app/(dashboard)/dashboard/grok-bot/transcript.ts");

test("the first heartbeat ends the snapshot and the next request uses its cursor", () => {
  const snapshot = { phase: "snapshot", after: "0" };
  const replay = nextTranscriptRequest(snapshot, {
    replay: true,
    rows: { entries: [{ updatedSeq: "10" }] },
  });
  assert.deepEqual(replay, { phase: "snapshot", after: "10", stop: false, visible: [] });

  const cutover = nextTranscriptRequest(replay, { heartbeat: true });
  assert.deepEqual(cutover, { phase: "live", after: "10", stop: true });
});

test("replay on the live stream is shown", () => {
  const live = { phase: "live", after: "10" };
  const next = nextTranscriptRequest(live, {
    replay: true,
    rows: { entries: [{ updatedSeq: "11", role: "assistant", text: "missed" }] },
  });
  assert.equal(next.stop, false);
  assert.deepEqual(next.visible, [{ seq: "11", role: "assistant", text: "missed" }]);
});
