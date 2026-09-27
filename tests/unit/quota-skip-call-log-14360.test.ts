// #14360: a request refused by the quota-parking path returns a synthesized 429
// but writes nothing to call_logs. Upstream 429s are logged; this router-side
// skip is not, so the refusal only exists in the client's terminal.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-quota-skip-log-"));
process.env.DATA_DIR = TEST_DATA_DIR;

const core = await import("../../src/lib/db/core.ts");
const callLogs = await import("../../src/lib/usage/callLogs.ts");
const { handleNoCredentials } = await import("../../src/sse/handlers/chatHelpers.ts");

test.beforeEach(() => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
});

test.after(() => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
});

test("#14360 a quota-parked provider skip writes a call_logs row", async () => {
  const response = handleNoCredentials(
    {
      allRateLimited: true,
      lastError: "All qwen-cloud-token-plan accounts have exhausted their quota",
      lastErrorCode: 429,
      retryAfterHuman: "4d",
    },
    null,
    "qwen-cloud-token-plan",
    "deepseek-v4-flash",
    null,
    null
  );

  assert.equal(response.status, 429);

  let rows: Array<{ provider?: string; status?: number; error?: string | null }> = [];
  for (let i = 0; i < 50 && rows.length === 0; i++) {
    const logs = await callLogs.getCallLogs({});
    const list = (logs.logs ?? logs) as Array<{
      provider?: string;
      status?: number;
      error?: string | null;
    }>;
    rows = (list ?? []).filter((l) => l.provider === "qwen-cloud-token-plan");
    if (rows.length === 0) await new Promise((r) => setTimeout(r, 10));
  }

  assert.equal(rows.length, 1, "the synthesized 429 must reach call_logs");
  assert.equal(rows[0].status, 429);
  assert.match(String(rows[0].error ?? ""), /exhausted their quota/);
});
