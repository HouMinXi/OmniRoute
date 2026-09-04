process.env.DISABLE_SQLITE_AUTO_BACKUP = "true";

import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { createRequire } from "node:module";

const require_ = createRequire(import.meta.url);
const BetterSqlite3 = require_("better-sqlite3") as typeof import("better-sqlite3");

import { createBetterSqliteAdapter } from "../../src/lib/db/adapters/betterSqliteAdapter";
import { runMigrations } from "../../src/lib/db/migrationRunner";
import { SCHEMA_SQL } from "../../src/lib/db/core";
import type { SqliteAdapter } from "../../src/lib/db/adapters/types";

// ── imports under test (DO NOT EXIST YET → RED) ──
import {
  claimServerToolExecution,
  finalizeServerToolExecution,
} from "../../src/lib/db/skillExecutionFence";
import { runWithServerToolFence } from "../../src/lib/skills/toolExecutionFence";

function makeTempDb(): {
  adapter: SqliteAdapter;
  dir: string;
  raw: import("better-sqlite3").Database;
} {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "fence-test-"));
  const dbPath = path.join(dir, "test.db");
  const raw = new BetterSqlite3(dbPath);
  raw.pragma("journal_mode = WAL");
  raw.pragma("busy_timeout = 2000");
  raw.exec(SCHEMA_SQL);
  raw.exec(`
    CREATE TABLE IF NOT EXISTS _omniroute_migrations (
      version TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      applied_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    INSERT OR IGNORE INTO _omniroute_migrations (version, name)
    VALUES ('001', 'initial_schema');
  `);
  const adapter = createBetterSqliteAdapter(raw);
  runMigrations(adapter, { isNewDb: true });
  return { adapter, dir, raw };
}

function makeSecondAdapter(dir: string): {
  adapter: SqliteAdapter;
  raw: import("better-sqlite3").Database;
} {
  const dbPath = path.join(dir, "test.db");
  const raw = new BetterSqlite3(dbPath);
  raw.pragma("journal_mode = WAL");
  raw.pragma("busy_timeout = 2000");
  const adapter = createBetterSqliteAdapter(raw);
  return { adapter, raw };
}

const BASE_INPUT = {
  apiKeyId: "key-1",
  requestIdentity: "key-1:req-id:body-hash",
  toolCallId: "call-1",
  toolName: "memory_search",
  inputDigest: "abc123",
  leaseExpiresAt: new Date(Date.now() + 60_000).toISOString(),
};

const BASE_FINALIZE = {
  executionId: "", // filled per test
  status: "success" as const,
  output: { result: "ok" },
  errorMessage: null,
  durationMs: 100,
};

// ── RED tests ──

test("claim: first claim returns claimed", (_, done) => {
  const { adapter, dir, raw } = makeTempDb();
  try {
    const result = claimServerToolExecution(BASE_INPUT, adapter);
    assert.equal(result.kind, "claimed");
    assert.ok(typeof result.executionId === "string" && result.executionId.length > 0);
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});

test("claim: terminal row (success) with same identity returns replay", (_, done) => {
  const { adapter, dir, raw } = makeTempDb();
  try {
    const claim1 = claimServerToolExecution(BASE_INPUT, adapter);
    assert.equal(claim1.kind, "claimed");
    // Finalize as success
    finalizeServerToolExecution(
      {
        ...BASE_FINALIZE,
        executionId: claim1.executionId,
      },
      adapter
    );
    // Second claim with same identity should replay
    const claim2 = claimServerToolExecution(BASE_INPUT, adapter);
    assert.equal(claim2.kind, "replay");
    assert.equal(claim2.status, "success");
    assert.deepEqual(claim2.output, { result: "ok" });
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});

test("claim: same key but different name returns identity_conflict", (_, done) => {
  const { adapter, dir, raw } = makeTempDb();
  try {
    const claim1 = claimServerToolExecution(BASE_INPUT, adapter);
    assert.equal(claim1.kind, "claimed");
    const claim2 = claimServerToolExecution({ ...BASE_INPUT, toolName: "different_tool" }, adapter);
    assert.equal(claim2.kind, "identity_conflict");
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});

test("claim: same key but different inputDigest returns identity_conflict", (_, done) => {
  const { adapter, dir, raw } = makeTempDb();
  try {
    const claim1 = claimServerToolExecution(BASE_INPUT, adapter);
    assert.equal(claim1.kind, "claimed");
    const claim2 = claimServerToolExecution(
      { ...BASE_INPUT, inputDigest: "different_digest" },
      adapter
    );
    assert.equal(claim2.kind, "identity_conflict");
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});

test("claim: running + unexpired + process-internal Promise → joiner replays", (_, done) => {
  // This test uses runWithServerToolFence which manages the process-internal Promise
  const { adapter, dir, raw } = makeTempDb();
  try {
    let handlerCallCount = 0;
    const handler = async () => {
      handlerCallCount++;
      return "handler-result";
    };
    // Run two concurrent claims — second should join and replay
    const p1 = runWithServerToolFence(
      {
        apiKeyId: "key-1",
        requestIdentity: "key-1:req:body",
        toolCallId: "call-1",
        toolName: "tool_a",
        arguments: { q: "test" },
        leaseDurationMs: 60_000,
        execute: handler,
      },
      adapter
    );
    const p2 = runWithServerToolFence(
      {
        apiKeyId: "key-1",
        requestIdentity: "key-1:req:body",
        toolCallId: "call-1",
        toolName: "tool_a",
        arguments: { q: "test" },
        leaseDurationMs: 60_000,
        execute: handler,
      },
      adapter
    );
    Promise.all([p1, p2]).then(([r1, r2]) => {
      try {
        assert.equal(handlerCallCount, 1, "handler should execute exactly once");
        assert.equal(r1.kind, "executed");
        assert.equal(r2.kind, "replayed");
      } finally {
        raw.close();
        fs.rmSync(dir, { recursive: true, force: true });
        done();
      }
    });
  } catch (err) {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done(err);
  }
});

test("claim: running + unexpired but no process-internal Promise → poll → in_progress", (_, done) => {
  const { adapter, dir, raw } = makeTempDb();
  try {
    // First claim (will be running)
    const claim1 = claimServerToolExecution(BASE_INPUT, adapter);
    assert.equal(claim1.kind, "claimed");
    // Second claim without process-internal Promise — should poll and eventually return in_progress
    const claim2 = claimServerToolExecution(BASE_INPUT, adapter);
    assert.equal(claim2.kind, "in_progress");
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});

test("claim: running + expired lease → unknown", (_, done) => {
  const { adapter, dir, raw } = makeTempDb();
  try {
    // Claim with expired lease
    const expiredInput = {
      ...BASE_INPUT,
      leaseExpiresAt: new Date(Date.now() - 10_000).toISOString(),
    };
    const claim1 = claimServerToolExecution(expiredInput, adapter);
    assert.equal(claim1.kind, "claimed");
    // Second claim with same identity but expired lease → unknown
    const claim2 = claimServerToolExecution(expiredInput, adapter);
    assert.equal(claim2.kind, "unknown");
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});

test("finalize: only updates running rows, second finalize returns false", (_, done) => {
  const { adapter, dir, raw } = makeTempDb();
  try {
    const claim = claimServerToolExecution(BASE_INPUT, adapter);
    assert.equal(claim.kind, "claimed");
    const firstFinalize = finalizeServerToolExecution(
      { ...BASE_FINALIZE, executionId: claim.executionId },
      adapter
    );
    assert.equal(firstFinalize, true);
    // Second finalize should return false (row is no longer 'running')
    const secondFinalize = finalizeServerToolExecution(
      { ...BASE_FINALIZE, executionId: claim.executionId },
      adapter
    );
    assert.equal(secondFinalize, false);
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});

test("finalize: output sanitized — no raw credentials or stack in stored output", (_, done) => {
  const { adapter, dir, raw } = makeTempDb();
  try {
    const claim = claimServerToolExecution(BASE_INPUT, adapter);
    assert.equal(claim.kind, "claimed");
    const sensitiveOutput = {
      token: "sk-live-secret123",
      stack: "Error: something\n  at /home/user/app/index.js:10",
      data: { nested: true },
    };
    finalizeServerToolExecution(
      { ...BASE_FINALIZE, executionId: claim.executionId, output: sensitiveOutput },
      adapter
    );
    // Read back the row and verify output was sanitized
    const row = raw
      .prepare("SELECT output FROM server_tool_executions WHERE id = ?")
      .get(claim.executionId) as { output: string | null };
    assert.ok(row.output, "output should be stored");
    // Must NOT contain raw credentials or stack
    assert.ok(!row.output.includes("sk-live-secret123"), "output must not contain raw credentials");
    assert.ok(!row.output.includes("at /home/"), "output must not contain raw stack trace");
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});

test("finalize: raw tool arguments are never stored in the execution row", (_, done) => {
  const { adapter, dir, raw } = makeTempDb();
  try {
    const claim = claimServerToolExecution(BASE_INPUT, adapter);
    assert.equal(claim.kind, "claimed");
    finalizeServerToolExecution(
      { ...BASE_FINALIZE, executionId: claim.executionId, output: { key: "value" } },
      adapter
    );
    // The row should exist with sanitized output
    const row = raw
      .prepare("SELECT output, input_digest FROM server_tool_executions WHERE id = ?")
      .get(claim.executionId) as { output: string | null; input_digest: string };
    assert.ok(row.output, "output should be stored");
    assert.ok(row.input_digest, "input_digest should be stored (digest only, not raw args)");
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});

test("contention: two independent SQLite handles on same file — loser UNIQUE caught cleanly", (_, done) => {
  const { adapter: adapter1, dir, raw: raw1 } = makeTempDb();
  const { adapter: adapter2, raw: raw2 } = makeSecondAdapter(dir);
  try {
    // Both adapters claim the same execution key
    const claim1 = claimServerToolExecution(BASE_INPUT, adapter1);
    assert.equal(claim1.kind, "claimed");
    // Second adapter tries same key — should get replay/in_progress, NOT throw
    const claim2 = claimServerToolExecution(BASE_INPUT, adapter2);
    assert.ok(
      claim2.kind === "replay" || claim2.kind === "in_progress",
      `Expected replay or in_progress, got ${claim2.kind}`
    );
    // The UNIQUE constraint violation was caught internally, not leaked
  } finally {
    raw1.close();
    raw2.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});

test("finalize: error message sanitized — no raw stack in error_message", (_, done) => {
  const { adapter, dir, raw } = makeTempDb();
  try {
    const claim = claimServerToolExecution(BASE_INPUT, adapter);
    assert.equal(claim.kind, "claimed");
    finalizeServerToolExecution(
      {
        executionId: claim.executionId,
        status: "error",
        output: null,
        errorMessage: "Something failed\n  at /internal/path.js:42\n  at processTicksAndRejections",
        durationMs: 50,
      },
      adapter
    );
    const row = raw
      .prepare("SELECT error_message FROM server_tool_executions WHERE id = ?")
      .get(claim.executionId) as { error_message: string | null };
    assert.ok(row.error_message, "error_message should be stored");
    // Must be sanitized — no raw stack
    assert.ok(
      !row.error_message.includes("at /internal/"),
      "error_message must not contain raw stack"
    );
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});

test("schema: UNIQUE on identity tuple prevents duplicate claims", (_, done) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "fence-unique-test-"));
  const dbPath = path.join(dir, "test.db");
  const raw = new BetterSqlite3(dbPath);
  raw.pragma("journal_mode = WAL");
  raw.pragma("busy_timeout = 2000");
  try {
    // Step 1: create table WITHOUT UNIQUE constraint (simulates injection)
    raw.exec(`
      CREATE TABLE server_tool_executions (
        id TEXT PRIMARY KEY,
        api_key_id TEXT NOT NULL,
        request_identity TEXT NOT NULL,
        tool_call_id TEXT NOT NULL,
        tool_name TEXT NOT NULL,
        input_digest TEXT NOT NULL,
        output TEXT,
        status TEXT NOT NULL CHECK(status IN ('running', 'success', 'error', 'timeout')),
        error_message TEXT,
        duration_ms INTEGER,
        claim_expires_at TEXT NOT NULL,
        completed_at TEXT,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      )
    `);

    // Claim via two independent handles — without UNIQUE, both INSERT succeed
    const adapter1 = createBetterSqliteAdapter(raw);
    const claim1 = claimServerToolExecution(
      { ...BASE_INPUT, leaseExpiresAt: new Date(Date.now() + 300_000).toISOString() },
      adapter1
    );
    assert.equal(claim1.kind, "claimed", "first claim succeeds");

    const raw2 = new BetterSqlite3(dbPath);
    raw2.pragma("journal_mode = WAL");
    raw2.pragma("busy_timeout = 2000");
    const adapter2 = createBetterSqliteAdapter(raw2);
    const claim2 = claimServerToolExecution(
      { ...BASE_INPUT, leaseExpiresAt: new Date(Date.now() + 300_000).toISOString() },
      adapter2
    );
    // Without UNIQUE: both claims succeed → duplicate execution
    assert.equal(
      claim2.kind,
      "claimed",
      "second claim also succeeds without UNIQUE — duplicate execution risk"
    );
    raw2.close();

    // Step 2: recreate table WITH UNIQUE constraint
    raw.exec("DROP TABLE server_tool_executions");
    raw.exec(`
      CREATE TABLE server_tool_executions (
        id TEXT PRIMARY KEY,
        api_key_id TEXT NOT NULL,
        request_identity TEXT NOT NULL,
        tool_call_id TEXT NOT NULL,
        tool_name TEXT NOT NULL,
        input_digest TEXT NOT NULL,
        output TEXT,
        status TEXT NOT NULL CHECK(status IN ('running', 'success', 'error', 'timeout')),
        error_message TEXT,
        duration_ms INTEGER,
        claim_expires_at TEXT NOT NULL,
        completed_at TEXT,
        created_at TEXT NOT NULL DEFAULT (datetime('now')),
        UNIQUE(api_key_id, request_identity, tool_call_id)
      )
    `);

    // Claim via handle A
    const claimA = claimServerToolExecution(
      { ...BASE_INPUT, leaseExpiresAt: new Date(Date.now() + 300_000).toISOString() },
      adapter1
    );
    assert.equal(claimA.kind, "claimed");

    // Claim via handle B — with UNIQUE, the second INSERT fails → replay/in_progress
    const raw3 = new BetterSqlite3(dbPath);
    raw3.pragma("journal_mode = WAL");
    raw3.pragma("busy_timeout = 2000");
    const adapter3 = createBetterSqliteAdapter(raw3);
    const claimB = claimServerToolExecution(
      { ...BASE_INPUT, leaseExpiresAt: new Date(Date.now() + 300_000).toISOString() },
      adapter3
    );
    assert.ok(
      claimB.kind === "replay" || claimB.kind === "in_progress",
      `With UNIQUE: expected replay or in_progress, got ${claimB.kind}`
    );
    raw3.close();
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});
