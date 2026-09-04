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

/**
 * Create a temp DB with the full base schema + all migrations applied.
 * This mirrors the real initialization in core.ts (SCHEMA_SQL + seed 001 + runMigrations).
 */
function makeTempDb(): { adapter: SqliteAdapter; dir: string; raw: import("better-sqlite3").Database } {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "migration-173-test-"));
  const dbPath = path.join(dir, "test.db");
  const raw = new BetterSqlite3(dbPath);
  raw.pragma("journal_mode = WAL");
  raw.pragma("busy_timeout = 2000");
  // Apply base schema (mirrors core.ts initialization)
  raw.exec(SCHEMA_SQL);
  // Seed migration 001 as applied (base schema already created its tables)
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

function getColumnInfo(raw: import("better-sqlite3").Database, table: string) {
  return raw.pragma(`table_info(${table})`) as Array<{
    name: string;
    type: string;
    notnull: number;
    pk: number;
  }>;
}

function getIndexInfo(raw: import("better-sqlite3").Database, table: string) {
  return raw.pragma(`index_list(${table})`) as Array<{
    name: string;
    unique: number;
  }>;
}

// ── RED tests: these MUST fail before migration 173 exists ──

test("migration 173: server_tool_executions table exists with correct columns", (_, done) => {
  const { raw, dir } = makeTempDb();
  try {
    const tables = raw.pragma("table_list") as Array<{ name: string }>;
    const names = tables.map((t) => t.name);
    assert.ok(
      names.includes("server_tool_executions"),
      `Expected server_tool_executions in: ${names.join(", ")}`,
    );
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});

test("migration 173: UNIQUE constraint on (api_key_id, request_identity, tool_call_id)", (_, done) => {
  const { raw, dir } = makeTempDb();
  try {
    raw.exec(`
      INSERT INTO server_tool_executions
        (id, api_key_id, request_identity, tool_call_id, tool_name, input_digest, status, claim_expires_at)
      VALUES ('e1','k1','r1','c1','tool_a','d1','running',datetime('now'))
    `);
    assert.throws(
      () => {
        raw.exec(`
          INSERT INTO server_tool_executions
            (id, api_key_id, request_identity, tool_call_id, tool_name, input_digest, status, claim_expires_at)
          VALUES ('e2','k1','r1','c1','tool_a','d1','running',datetime('now'))
        `);
      },
      /UNIQUE/i,
    );
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});

test("migration 173: two indexes exist on server_tool_executions", (_, done) => {
  const { raw, dir } = makeTempDb();
  try {
    const indexes = getIndexInfo(raw, "server_tool_executions");
    const names = indexes.map((i) => i.name);
    assert.ok(
      names.some((n) => n.includes("status_expiry")),
      `Expected status_expiry index, got: ${names.join(", ")}`,
    );
    assert.ok(
      names.some((n) => n.includes("created")),
      `Expected created index, got: ${names.join(", ")}`,
    );
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});

test("migration 173: existing skill_executions data preserved after migration", (_, done) => {
  const { raw, dir } = makeTempDb();
  try {
    // Insert a skill to satisfy FK
    raw.exec(`
      INSERT INTO skills (id, api_key_id, name, version, schema, handler)
      VALUES ('s1','k1','test','1.0.0','{}','h.js')
    `);
    raw.exec(`
      INSERT INTO skill_executions (id, skill_id, api_key_id, input, status)
      VALUES ('old_exec','s1','k1','{"q":"test"}','success')
    `);
    const rows = raw.prepare("SELECT * FROM skill_executions WHERE id = 'old_exec'").all();
    assert.equal(rows.length, 1, "old row should exist after migration 173");
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});

test("migration 173: skill_executions still enforces skill_id NOT NULL", (_, done) => {
  const { raw, dir } = makeTempDb();
  try {
    assert.throws(
      () => {
        raw.exec(
          `INSERT INTO skill_executions (id, api_key_id, input, status)
           VALUES ('bad','k1','{}','running')`,
        );
      },
      /NOT NULL/i,
    );
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});

test("migration 173: custom skill execution write still works after migration", (_, done) => {
  const { raw, dir } = makeTempDb();
  try {
    raw.exec(`
      INSERT INTO skills (id, api_key_id, name, version, schema, handler)
      VALUES ('s2','k1','test2','1.0.0','{}','h.js')
    `);
    raw.exec(`
      INSERT INTO skill_executions (id, skill_id, api_key_id, input, status)
      VALUES ('new_exec','s2','k1','{"q":"test2"}','success')
    `);
    const allRows = raw.prepare("SELECT * FROM skill_executions").all();
    assert.ok(allRows.length >= 1, "should read skill_executions after migration 173");
  } finally {
    raw.close();
    fs.rmSync(dir, { recursive: true, force: true });
    done();
  }
});
