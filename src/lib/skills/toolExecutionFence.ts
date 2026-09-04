import { canonicalJsonSha256 } from "./stableJson";
import { claimServerToolExecution, finalizeServerToolExecution } from "../db/skillExecutionFence";
import type { SqliteAdapter } from "../db/adapters/types";
import { getDbInstance } from "../db/core";

export type RunWithServerToolFenceResult<T> =
  | { kind: "executed"; value: T }
  | { kind: "replayed"; value: T }
  | { kind: "in_progress" }
  | { kind: "unknown" }
  | { kind: "identity_conflict" };

type ExecutionKey = string;

const activePromises = new Map<
  ExecutionKey,
  { promise: Promise<unknown>; status: "pending" | "resolved" | "rejected" }
>();

const POLL_INTERVAL_MS = 50;
const MAX_POLL_MS = 2_000;

function buildExecutionKey(
  apiKeyId: string,
  requestIdentity: string,
  toolCallId: string
): ExecutionKey {
  return `${apiKeyId}:${requestIdentity}:${toolCallId}`;
}

export interface RunWithServerToolFenceOptions<T> {
  apiKeyId: string;
  requestIdentity: string;
  toolCallId: string;
  toolName: string;
  arguments: Record<string, unknown>;
  leaseDurationMs: number;
  execute: (executionId: string) => Promise<T>;
  now?: () => number;
  sleep?: (ms: number) => Promise<void>;
  db?: SqliteAdapter;
}

export async function runWithServerToolFence<T>(
  input: RunWithServerToolFenceOptions<T>
): Promise<RunWithServerToolFenceResult<T>> {
  const db = input.db ?? getDbInstance();
  const now = input.now ?? (() => Date.now());
  const sleep = input.sleep ?? ((ms: number) => new Promise((resolve) => setTimeout(resolve, ms)));
  const inputDigest = canonicalJsonSha256(input.arguments);
  const leaseExpiresAt = new Date(now() + input.leaseDurationMs).toISOString();

  const claim = claimServerToolExecution(
    {
      apiKeyId: input.apiKeyId,
      requestIdentity: input.requestIdentity,
      toolCallId: input.toolCallId,
      toolName: input.toolName,
      inputDigest,
      leaseExpiresAt,
    },
    db
  );

  switch (claim.kind) {
    case "claimed": {
      const key = buildExecutionKey(input.apiKeyId, input.requestIdentity, input.toolCallId);
      const wrapperPromise = (async () => {
        try {
          const value = await input.execute(claim.executionId);
          finalizeServerToolExecution(
            {
              executionId: claim.executionId,
              status: "success",
              output: value,
              errorMessage: null,
              durationMs: 0,
            },
            db
          );
          return value;
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : String(err);
          // Sanitize error message before persisting
          const safeMessage = message.replace(/\bat\s+\/[^\s"']+/g, "[stack-redacted]");
          finalizeServerToolExecution(
            {
              executionId: claim.executionId,
              status: "error",
              output: null,
              errorMessage: safeMessage,
              durationMs: 0,
            },
            db
          );
          throw err;
        }
      })();

      const entry = { promise: wrapperPromise as Promise<unknown>, status: "pending" as const };
      activePromises.set(key, entry);
      wrapperPromise.then(
        () => {
          entry.status = "resolved";
        },
        () => {
          entry.status = "rejected";
        }
      );

      try {
        const value = await wrapperPromise;
        return { kind: "executed", value };
      } finally {
        activePromises.delete(key);
      }
    }

    case "replay": {
      return { kind: "replayed", value: claim.output as T };
    }

    case "in_progress": {
      // Poll: check if the running process completes within MAX_POLL_MS
      const key = buildExecutionKey(input.apiKeyId, input.requestIdentity, input.toolCallId);
      const deadline = now() + MAX_POLL_MS;
      while (now() < deadline) {
        // Check process-internal promise
        const active = activePromises.get(key);
        if (active && active.status === "resolved") {
          // Wait for the promise to settle and get the value
          try {
            const value = await active.promise;
            return { kind: "replayed", value };
          } catch {
            return { kind: "unknown" };
          }
        }
        await sleep(POLL_INTERVAL_MS);
      }
      return { kind: "in_progress" };
    }

    case "unknown":
      return { kind: "unknown" };

    case "identity_conflict":
      return { kind: "identity_conflict" };

    default:
      return { kind: "unknown" };
  }
}
