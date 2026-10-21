import test from "node:test";
import assert from "node:assert/strict";

const { applyTranscriptFrame } =
  await import("../../../src/app/(dashboard)/dashboard/grok-bot/transcript.ts");

test("replay frames move the cursor and stay hidden until the first heartbeat", () => {
  const start = { cursor: "0", visible: [], sealed: false };
  const replayed = applyTranscriptFrame(start, {
    replay: true,
    rows: { entries: [{ updatedSeq: "10", role: "assistant", text: "old" }] },
  });
  assert.equal(replayed.cursor, "10");
  assert.deepEqual(replayed.visible, []);
  assert.equal(replayed.sealed, false);

  const sealed = applyTranscriptFrame(replayed, { heartbeat: true });
  assert.equal(sealed.sealed, true);
  assert.deepEqual(sealed.visible, []);
});

test("the cursor compares decimal strings past the safe integer limit", () => {
  const state = { cursor: "9007199254740993", visible: [], sealed: true };
  const next = applyTranscriptFrame(state, {
    rows: { entries: [{ updatedSeq: "9007199254740992", role: "assistant", text: "x" }] },
  });
  assert.equal(next.cursor, "9007199254740993");
});

test("rows after the seal are shown", () => {
  const sealed = { cursor: "10", visible: [], sealed: true };
  const next = applyTranscriptFrame(sealed, {
    rows: { entries: [{ updatedSeq: "11", role: "assistant", text: "new" }] },
  });
  assert.equal(next.cursor, "11");
  assert.deepEqual(next.visible, [{ seq: "11", role: "assistant", text: "new" }]);
});
