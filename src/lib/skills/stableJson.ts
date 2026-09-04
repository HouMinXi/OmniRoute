import { createHash } from "node:crypto";

const REJECT_MSG = "Value cannot be represented as canonical JSON";

function canonicalStringify(value: unknown, seen: Set<unknown>): string {
  if (value === undefined) throw new TypeError(REJECT_MSG);
  if (typeof value === "bigint") throw new TypeError(REJECT_MSG);
  if (typeof value === "number") {
    if (!Number.isFinite(value)) throw new TypeError(REJECT_MSG);
    return String(value);
  }
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "boolean") return String(value);
  if (value === null) return "null";
  if (typeof value === "symbol") throw new TypeError(REJECT_MSG);
  if (typeof value === "function") throw new TypeError(REJECT_MSG);

  if (typeof value === "object") {
    if (seen.has(value)) throw new TypeError(REJECT_MSG);
    seen.add(value);

    if (Array.isArray(value)) {
      const items = value.map((v) => canonicalStringify(v, seen));
      seen.delete(value);
      return `[${items.join(",")}]`;
    }

    const keys = Object.keys(value).sort();
    const pairs = keys.map(
      (k) => `${JSON.stringify(k)}:${canonicalStringify((value as Record<string, unknown>)[k], seen)}`
    );
    seen.delete(value);
    return `{${pairs.join(",")}}`;
  }

  throw new TypeError(REJECT_MSG);
}

export function canonicalJson(value: unknown): string {
  return canonicalStringify(value, new Set());
}

export function canonicalJsonSha256(value: unknown): string {
  const json = canonicalJson(value);
  return createHash("sha256").update(json, "utf8").digest("hex");
}
