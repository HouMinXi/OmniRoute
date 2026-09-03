/**
 * Shared types for the handleComboChat attempt-loop split (ROADMAP 3.8.52).
 *
 * Mutable loop state lives on AttemptLoopState. Read-only dependencies live on
 * AttemptLoopDeps. Do not merge the two into ComboContext.
 *
 * @internal — not part of the public combo.ts barrel.
 */
import type { ResilienceSettings } from "../../../src/lib/resilience/settings";
import type { ComboErrorEntry } from "./comboErrorAggregation.ts";
import type { ResetWindowConfig } from "./quotaScoring.ts";
import type { ApplyStickinessResult } from "./sessionStickiness.ts";
import type {
  ComboLike,
  ComboLogger,
  ComboRetryAfter,
  HandleSingleModel,
  IsModelAvailable,
  ResolvedComboTarget,
} from "./types.ts";

export type ExecuteTargetResult = { ok: boolean; response?: Response } | null;

export type AttemptLoopState = {
  orderedTargets: ResolvedComboTarget[];
  fallbackCount: number;
  recordedAttempts: number;
  comboErrors: ComboErrorEntry[];
  lastError: string | null;
  lastStatus: number | null;
  earliestRetryAfter: ComboRetryAfter | null;
  comboExpired: boolean;
  exhaustedProviders: Set<string>;
  exhaustedConnections: Set<string>;
  transientRateLimitedProviders: Set<string>;
  abortControllers: Map<number, AbortController>;
  dispatchedTargets: Set<string>;
  targetFailureTrust: Map<string, { allObservedFailuresQuota: boolean }>;
  comboAttemptOrder: Array<{ provider: string; model: string }>;
  observeFailure(quotaExhausted: boolean, targetExecutionKey?: string): void;
};

export type AttemptLoopDeps = {
  strategy: string;
  combo: ComboLike;
  config: Record<string, unknown> & {
    zeroLatencyOptimizationsEnabled?: boolean;
    responseValidation?: unknown;
    failoverBeforeRetryExplicit?: boolean;
  };
  log: ComboLogger;
  settings: Record<string, unknown> | null;
  resilienceSettings: ResilienceSettings;
  sticky: ApplyStickinessResult;
  effectiveSessionId: string | null;
  preScreenMap: Map<string, { profile?: unknown }>;
  quotaCutoffResetWindowConfig: ResetWindowConfig;
  maxRetries: number;
  traceInvocationId: string;
  clientRequestedStream: boolean;
  handleSingleModelWithTimeout: HandleSingleModel;
  isModelAvailable?: IsModelAvailable;
  signal?: AbortSignal | null;
  body: Record<string, unknown>;
  startTime: number;
  releaseStickyPinOnFailure: (
    messageHash: string | null | undefined,
    failedConnectionId: string | null | undefined
  ) => void;
  clearStaleLKGP: (
    comboName: string,
    executionKey: string | undefined,
    comboId: string | undefined,
    log: ComboLogger,
    tag: string
  ) => void;
};

export type GateDecision =
  | { kind: "skip"; result: ExecuteTargetResult }
  | {
      kind: "proceed";
      targetForAttempt: ResolvedComboTarget;
      profile: unknown;
      protectedPriorityTarget: boolean;
    };
