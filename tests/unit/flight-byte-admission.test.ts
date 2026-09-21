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
import { IngestByteAdmissionController } from "../../src/shared/middleware/ingestByteAdmission.ts";
import { ChatAdmissionController } from "../../src/shared/middleware/chatBodyAdmission.ts";

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

test("ingest timeout uses configured flight_bytes_budget and never parks at 0ms", async () => {
  const shed: string[] = [];
  const c = new IngestByteAdmissionController({
    maxInflightBytes: 10,
    timeoutShedReason: "flight_bytes_budget",
    onShed: (reason) => {
      shed.push(reason);
    },
  });
  const lease = c.tryAcquire(10);
  assert.ok(lease);
  const r = await c.acquireWithin(10, 0, undefined, "lane-a");
  assert.equal(r.status, "unavailable");
  assert.deepEqual(shed, ["flight_bytes_budget"]);
  assert.equal(c.waitingCount, 0);
  lease.release();
});

test("maxWaiters sheds the extra waiter immediately", async () => {
  const shed: string[] = [];
  const c = new IngestByteAdmissionController({
    maxInflightBytes: 1,
    timeoutShedReason: "flight_bytes_budget",
    maxWaiters: 2,
    onShed: (reason) => {
      shed.push(reason);
    },
  });
  const lease = c.tryAcquire(1);
  assert.ok(lease);
  const p1 = c.acquireWithin(1, 30_000, undefined, "lane-1");
  const p2 = c.acquireWithin(1, 30_000, undefined, "lane-2");
  await Promise.resolve();
  assert.equal(c.waitingCount, 2);
  const p3 = c.acquireWithin(1, 30_000, undefined, "lane-3");
  const r3 = await p3;
  assert.equal(r3.status, "unavailable");
  assert.deepEqual(shed, ["flight_bytes_budget"]);
  assert.equal(c.waitingCount, 2);
  lease.release();
  const r1 = await p1;
  assert.equal(r1.status, "acquired");
  if (r1.status === "acquired") r1.lease.release();
  const r2 = await p2;
  assert.equal(r2.status, "acquired");
  if (r2.status === "acquired") r2.lease.release();
});

test("ChatAdmissionController hang a second ingest ledger as flight budget", () => {
  const c = new ChatAdmissionController(20, undefined, undefined, undefined, undefined, {
    maxFlightBytes: 1000,
  });
  assert.equal(c.maxFlightBytes, 1000);
  assert.equal(c.flightBytes, 0);
  assert.equal(c.canFitFlight(1001), false);
  const lease = c.tryAcquireFlight(100);
  assert.ok(lease);
  assert.equal(c.flightBytes, 100);
  lease.release();
  assert.equal(c.flightBytes, 0);
});
