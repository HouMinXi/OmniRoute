// #13601.3: a failed memory vector embedding write must be retried once
// before it is logged and queued for reindex — a single transient failure
// (slow potion load, brief remote 5xx) should not silently skip vectorization.
import { test } from "node:test";
import assert from "node:assert/strict";

const { embedWithRetry } = await import("../../src/lib/memory/embedding/index.ts");

type EmbedFn = NonNullable<Parameters<typeof embedWithRetry>[2]>;
type EmbedResult = Awaited<ReturnType<EmbedFn>>;

const settings = {} as Parameters<typeof embedWithRetry>[1];

function vectorResult(values: number[]): Extract<EmbedResult, { vector: Float32Array }> {
  return {
    vector: Float32Array.from(values),
    source: "static",
    model: "potion-base-8M",
    dimensions: values.length,
    latencyMs: 1,
    cached: false,
  };
}

function failedResult(message: string): Extract<EmbedResult, { reason: string }> {
  return {
    source: "static",
    model: null,
    reason: "request_failed",
    message,
  };
}

test("#13601.3: success on the first attempt performs exactly one embed", async () => {
  let calls = 0;
  const result = await embedWithRetry("hello", settings, async () => {
    calls += 1;
    return vectorResult([1, 2, 3]);
  });
  assert.equal(calls, 1);
  assert.ok("vector" in result);
});

test("#13601.3: a transient first failure is retried and can still succeed", async () => {
  let calls = 0;
  const result = await embedWithRetry("hello", settings, async () => {
    calls += 1;
    if (calls === 1) return failedResult("boom");
    return vectorResult([1, 2, 3]);
  });
  assert.equal(calls, 2);
  assert.ok("vector" in result);
});

test("#13601.3: a persistent failure surfaces the last error after one retry", async () => {
  let calls = 0;
  const result = await embedWithRetry("hello", settings, async () => {
    calls += 1;
    return failedResult(`boom-${calls}`);
  });
  assert.equal(calls, 2);
  assert.ok(!("vector" in result));
  if (!("vector" in result)) assert.equal(result.message, "boom-2");
});
