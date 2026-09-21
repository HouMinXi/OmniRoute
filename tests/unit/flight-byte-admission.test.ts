import assert from "node:assert/strict";
import test from "node:test";
import {
  computeFlightByteBudget,
  estimateFlightBytes,
  FLIGHT_HEAP_FRACTION,
  MIN_FLIGHT_BUDGET_BYTES,
  MAX_FLIGHT_BUDGET_BYTES,
  DEFAULT_STREAM_HOLD_FACTOR,
  DEFAULT_STREAM_FLOOR_DIVISOR,
} from "../../src/shared/middleware/admissionBudget.ts";

const MiB = 1024 * 1024;

test("computeFlightByteBudget: 3072 MiB heap yields 1536 MiB", () => {
  const b = computeFlightByteBudget({
    heapSizeLimitBytes: 3072 * MiB,
    constrainedMemoryBytes: 5 * 1024 * MiB,
  });
  assert.equal(b.bytes, Math.floor(3072 * MiB * FLIGHT_HEAP_FRACTION));
  assert.equal(b.bytes, 1536 * MiB);
  assert.equal(b.source, "v8_heap");
});

test("computeFlightByteBudget: tiny heap clamps to MIN_FLIGHT_BUDGET_BYTES", () => {
  const b = computeFlightByteBudget({
    heapSizeLimitBytes: 64 * MiB,
    constrainedMemoryBytes: 64 * MiB,
  });
  assert.equal(b.bytes, MIN_FLIGHT_BUDGET_BYTES);
});

test("computeFlightByteBudget: enormous heap clamps to MAX_FLIGHT_BUDGET_BYTES", () => {
  const b = computeFlightByteBudget({
    heapSizeLimitBytes: 1024 * 1024 * MiB,
    constrainedMemoryBytes: null,
  });
  assert.equal(b.bytes, MAX_FLIGHT_BUDGET_BYTES);
});

test("estimateFlightBytes: non-stream is 0", () => {
  const maxFlight = 1536 * MiB;
  assert.equal(estimateFlightBytes(10_000, false, maxFlight), 0);
});

test("estimateFlightBytes: over STREAM_CEILING returns a sentinel the caller treats as 413", () => {
  const maxFlight = 1536 * MiB;
  const ceiling = Math.floor(maxFlight / DEFAULT_STREAM_HOLD_FACTOR);
  const body = Math.floor(ceiling / DEFAULT_STREAM_HOLD_FACTOR) + 1;
  const r = estimateFlightBytes(body, true, maxFlight);
  assert.equal(r, Number.POSITIVE_INFINITY);
});

test("estimateFlightBytes: small stream charges STREAM_FLOOR", () => {
  const maxFlight = 1536 * MiB;
  const floor = Math.floor(maxFlight / DEFAULT_STREAM_FLOOR_DIVISOR);
  assert.equal(estimateFlightBytes(1, true, maxFlight), floor);
});
