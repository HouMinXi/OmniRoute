/**
 * tests/unit/stream-timing.test.ts
 *
 * Canonical stream instrumentation (open-sse/utils/streamTiming.ts):
 *  - TTFT = first-forwarded-SSE-chunk latency (NOT token-level) — documented
 *  - ITL = mean inter-chunk gap (chunk-latency proxy)
 *  - first-byte vs first-forward distinction
 *  - interruption marking
 *  - malformed/empty chunks do not corrupt timing
 *
 * Clock is injected so CI cannot fail because a 15ms timer fired before
 * Date.now() advanced 15ms.
 */
import test from "node:test";
import assert from "node:assert/strict";
import { createStreamTiming, type StreamTiming } from "../../open-sse/utils/streamTiming.ts";

function fakeClock(start = 1_000): { now: () => number; advance: (ms: number) => void } {
  let t = start;
  return {
    now: () => t,
    advance: (ms: number) => {
      t += ms;
    },
  };
}

test("ttft() is null when nothing was forwarded", () => {
  const t = createStreamTiming(fakeClock().now);
  t.markByte();
  assert.equal(t.ttftMs(), null);
  assert.equal(t.avgItlMs(), null);
});

test("ttft() measures first-forwarded-chunk latency (byte vs forward distinguished)", () => {
  const clock = fakeClock();
  const t = createStreamTiming(clock.now);
  t.markByte();
  clock.advance(20);
  t.markForward();
  const ttft = t.ttftMs();
  assert.equal(ttft, 20);
  assert.ok(t.firstByteAt !== null);
  assert.ok(t.firstByteAt! < t.firstForwardAt!, "first byte precedes first forward");
});

test("avgItlMs() measures mean inter-chunk gap across multiple chunks", () => {
  const clock = fakeClock();
  const t = createStreamTiming(clock.now);
  for (let i = 0; i < 4; i++) {
    t.markForward();
    clock.advance(10);
  }
  const itl = t.avgItlMs();
  assert.equal(itl, 10);
  assert.equal(t.forwardedChunks, 4);
});

test("empty chunks do not corrupt timing (markByte without forward)", () => {
  const t = createStreamTiming(fakeClock().now);
  t.markByte();
  t.markByte(); // duplicate bytes are idempotent for first-byte
  t.markByte();
  assert.equal(t.ttftMs(), null, "no forward → no ttft");
  t.markForward();
  assert.ok(t.ttftMs() !== null);
});

test("malformed/keepalive-only traffic (no forward) yields no ttft", () => {
  const t = createStreamTiming(fakeClock().now);
  for (let i = 0; i < 5; i++) t.markByte();
  assert.equal(t.ttftMs(), null);
  assert.equal(t.forwardedChunks, 0);
});

test("interruption is recorded and does not reset other timing", () => {
  const clock = fakeClock();
  const t = createStreamTiming(clock.now);
  t.markForward();
  clock.advance(5);
  t.markForward();
  t.markInterrupted();
  assert.equal(t.interrupted, true);
  assert.ok(t.ttftMs() !== null);
  assert.ok(t.avgItlMs() !== null);
});

test("normal completion: totalMs() is monotonic and >= first-forward latency", () => {
  const clock = fakeClock();
  const t = createStreamTiming(clock.now);
  clock.advance(15);
  t.markForward();
  const total = t.totalMs();
  const ttft = t.ttftMs();
  assert.equal(total, 15);
  assert.ok(ttft !== null && ttft <= total, "ttft must be <= total duration");
});

test("max inter-chunk samples are bounded (memory bound)", () => {
  const t = createStreamTiming(fakeClock().now);
  for (let i = 0; i < 200; i++) t.markForward();
  assert.ok(t.interChunkGaps.length <= 32, `bounded to 32 samples, got ${t.interChunkGaps.length}`);
});

test("default clock is Date.now when no clock is passed", () => {
  const realNow = Date.now;
  let t0 = 5_000;
  Date.now = () => t0;
  try {
    const t: StreamTiming = createStreamTiming();
    t0 += 7;
    t.markForward();
    assert.equal(t.ttftMs(), 7);
  } finally {
    Date.now = realNow;
  }
});
