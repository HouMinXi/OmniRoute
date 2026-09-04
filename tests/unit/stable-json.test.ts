import test from "node:test";
import assert from "node:assert/strict";
import { canonicalJson, canonicalJsonSha256 } from "../../src/lib/skills/stableJson.ts";

test("canonicalJson sorts nested object keys and preserves array order", () => {
  const a = { z: [{ b: 2, a: 1 }], a: true };
  const b = { a: true, z: [{ a: 1, b: 2 }] };
  assert.equal(canonicalJson(a), canonicalJson(b));
  assert.equal(canonicalJsonSha256(a), canonicalJsonSha256(b));
  assert.notEqual(canonicalJsonSha256({ a: [1, 2] }), canonicalJsonSha256({ a: [2, 1] }));
});

test("canonicalJson rejects values that cannot form an execution identity", () => {
  const cyclic: Record<string, unknown> = {};
  cyclic.self = cyclic;
  for (const value of [undefined, 1n, Number.NaN, Number.POSITIVE_INFINITY, cyclic]) {
    assert.throws(() => canonicalJson(value), /canonical JSON/i);
  }
  assert.throws(() => canonicalJson({ bad: () => 1 }), /canonical JSON/i);
  assert.throws(() => canonicalJson({ bad: Symbol("x") }), /canonical JSON/i);
});
