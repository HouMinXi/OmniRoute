import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const barrelPath = path.resolve(here, "../../../open-sse/handlers/chatCore.ts");
const leafPath = path.resolve(here, "../../../open-sse/handlers/chatCore/translateAndDedup.ts");

test("translateAndDedup leaf exists", () => {
  assert.equal(fs.existsSync(leafPath), true);
});

test("barrel no longer inlines translatedBody assignment", () => {
  const src = fs.readFileSync(barrelPath, "utf8");
  assert.equal(
    src.includes("let translatedBody = body;"),
    false,
    "request translation must leave barrel"
  );
});

test("barrel rebinds persistAttemptLogs with compressed tokens before send", () => {
  const src = fs.readFileSync(barrelPath, "utf8");
  const sliceCall = src.indexOf("runTranslateAndDedup(");
  const sendIdx = src.indexOf("const executeProviderRequest = (");
  assert.notEqual(sliceCall, -1, "barrel must call runTranslateAndDedup");
  assert.notEqual(sendIdx, -1, "executeProviderRequest wrapper must remain");
  assert.ok(sliceCall < sendIdx, "translation must run before send");
  const between = src.slice(sliceCall, sendIdx);
  assert.equal(
    between.includes("persistAttemptLogsFor"),
    true,
    "rebind must call persistAttemptLogsFor after translation"
  );
  assert.equal(
    between.includes("tokensCompressed"),
    true,
    "rebind must capture live tokensCompressed"
  );
});
