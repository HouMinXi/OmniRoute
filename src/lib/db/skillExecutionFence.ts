import { randomUUID } from "node:crypto";
import type { SqliteAdapter } from "./adapters/types";
import { getDbInstance } from "./core";

const MAX_PERSISTED_OUTPUT_CHARS = 32_768;
const MAX_PERSISTED_ERROR_CHARS = 4_096;

export type ServerToolClaim =
  | { kind: "claimed"; executionId: string }
  | {
      kind: "replay";
      executionId: string;
      status: "success" | "error" | "timeout";
      output: unknown;
      errorMessage: string | null;
    }
  | { kind: "in_progress"; executionId: string }
  | { kind: "unknown"; executionId: string }
  | { kind: "identity_conflict"; executionId: string };

function isUniqueConstraintError(err: unknown): boolean {
  if (!err || typeof err !== "object") return false;
  const msg = String((err as { message?: unknown }).message ?? "");
  const code = String((err as { code?: unknown }).code ?? "");
  return (
    code.includes("SQLITE_CONSTRAINT") ||
    msg.includes("UNIQUE constraint failed") ||
    msg.includes("UNIQUE constraint violation")
  );
}

function sanitizeAndBounded(value: unknown, maxChars: number): string | null {
  if (value === null || value === undefined) return null;
  let text: string;
  try {
    text = JSON.stringify(value);
  } catch {
    text = JSON.stringify({ error: "Value is not JSON-serializable" });
  }
  // Strip raw stack traces and credential-like patterns
  const sanitized = text
    .replace(/\bat\s+\/[^\s"']+/g, "[stack-redacted]")
    .replace(/sk-[a-zA-Z0-9_-]{8,}/g, "[credential-redacted]")
    .replace(/Bearer\s+[a-zA-Z0-9._-]{8,}/g, "[bearer-redacted]");
  return sanitized.length > maxChars ? sanitized.slice(0, maxChars) : sanitized;
}

function readRow(
  db: SqliteAdapter,
  executionId: string
): {
  id: string;
  tool_name: string;
  input_digest: string;
  status: string;
  output: string | null;
  error_message: string | null;
} | null {
  const row = db
    .prepare(
      "SELECT id, tool_name, input_digest, status, output, error_message FROM server_tool_executions WHERE id = ?"
    )
    .get(executionId) as
    | {
        id: string;
        tool_name: string;
        input_digest: string;
        status: string;
        output: string | null;
        error_message: string | null;
      }
    | undefined;
  return row ?? null;
}

function readExistingByIdentity(
  db: SqliteAdapter,
  apiKeyId: string,
  requestIdentity: string,
  toolCallId: string
): ReturnType<typeof readRow> {
  const row = db
    .prepare(
      `SELECT id, tool_name, input_digest, status, output, error_message
       FROM server_tool_executions
       WHERE api_key_id = ? AND request_identity = ? AND tool_call_id = ?`
    )
    .get(apiKeyId, requestIdentity, toolCallId) as
    | {
        id: string;
        tool_name: string;
        input_digest: string;
        status: string;
        output: string | null;
        error_message: string | null;
      }
    | undefined;
  return row ?? null;
}

function buildReplayClaim(row: {
  id: string;
  status: string;
  output: string | null;
  error_message: string | null;
}): ServerToolClaim {
  let parsedOutput: unknown = null;
  if (row.output !== null) {
    try {
      parsedOutput = JSON.parse(row.output);
    } catch {
      parsedOutput = row.output;
    }
  }
  return {
    kind: "replay",
    executionId: row.id,
    status: row.status as "success" | "error" | "timeout",
    output: parsedOutput,
    errorMessage: row.error_message,
  };
}

export function claimServerToolExecution(
  input: {
    apiKeyId: string;
    requestIdentity: string;
    toolCallId: string;
    toolName: string;
    inputDigest: string;
    leaseExpiresAt: string;
  },
  db: SqliteAdapter = getDbInstance()
): ServerToolClaim {
  const executionId = randomUUID();

  // Try INSERT inside an IMMEDIATE transaction
  const tryInsert = db.transaction(() => {
    db.prepare(
      `INSERT INTO server_tool_executions
        (id, api_key_id, request_identity, tool_call_id, tool_name, input_digest, status, claim_expires_at)
       VALUES (?, ?, ?, ?, ?, ?, 'running', ?)`
    ).run(
      executionId,
      input.apiKeyId,
      input.requestIdentity,
      input.toolCallId,
      input.toolName,
      input.inputDigest,
      input.leaseExpiresAt
    );
  });

  try {
    tryInsert();
    return { kind: "claimed", executionId };
  } catch (err: unknown) {
    if (!isUniqueConstraintError(err)) {
      throw err;
    }
  }

  // UNIQUE conflict — re-read in a fresh transaction
  const existing = db.transaction(() => {
    return readExistingByIdentity(db, input.apiKeyId, input.requestIdentity, input.toolCallId);
  })();

  if (!existing) {
    return { kind: "unknown", executionId };
  }

  // Identity conflict: different name or digest
  if (existing.tool_name !== input.toolName || existing.input_digest !== input.inputDigest) {
    return { kind: "identity_conflict", executionId: existing.id };
  }

  // Terminal status → replay
  if (
    existing.status === "success" ||
    existing.status === "error" ||
    existing.status === "timeout"
  ) {
    return buildReplayClaim(existing);
  }

  // Running status — check lease expiry
  const now = Date.now();
  const expiresAt = new Date(input.leaseExpiresAt).getTime();
  if (expiresAt <= now) {
    return { kind: "unknown", executionId: existing.id };
  }

  // Running + unexpired → in_progress
  return { kind: "in_progress", executionId: existing.id };
}

export function finalizeServerToolExecution(
  input: {
    executionId: string;
    status: "success" | "error" | "timeout";
    output: unknown | null;
    errorMessage: string | null;
    durationMs: number;
  },
  db: SqliteAdapter = getDbInstance()
): boolean {
  const safeOutput = sanitizeAndBounded(input.output, MAX_PERSISTED_OUTPUT_CHARS);
  const safeError = sanitizeAndBounded(input.errorMessage, MAX_PERSISTED_ERROR_CHARS);

  const result = db.transaction(() => {
    return db
      .prepare(
        `UPDATE server_tool_executions
         SET status = ?, output = ?, error_message = ?, duration_ms = ?, completed_at = datetime('now')
         WHERE id = ? AND status = 'running'`
      )
      .run(input.status, safeOutput, safeError, input.durationMs, input.executionId);
  })();

  return result.changes > 0;
}
