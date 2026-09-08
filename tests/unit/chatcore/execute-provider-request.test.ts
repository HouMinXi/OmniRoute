import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const BARREL = path.join(ROOT, "open-sse/handlers/chatCore.ts");
const LEAF = path.join(ROOT, "open-sse/handlers/chatCore/executeProviderRequest.ts");

test("leaf executeProviderRequest.ts exists", () => {
  assert.equal(fs.existsSync(LEAF), true, "executeProviderRequest.ts must exist");
});

test("barrel no longer defines nested executeProviderRequest", () => {
  const src = fs.readFileSync(BARREL, "utf8");
  assert.equal(
    /const executeProviderRequest = async/.test(src),
    false,
    "nested const must move out of chatCore.ts"
  );
});
