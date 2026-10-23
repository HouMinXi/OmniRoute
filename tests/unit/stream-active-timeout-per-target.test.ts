/**
 * #12913: the active-stream watchdog never resets on upstream bytes, so the cap it
 * enforces has to come from the budget the target itself declared. These tests pin
 * the resolver, the registry lookup that feeds it, and the hand-off to the stream.
 */
import { test } from "node:test";
import assert from "node:assert/strict";

import {
  MAX_REGISTERED_MODEL_TIMEOUT_MARGIN_MS,
  MAX_TIMER_TIMEOUT_MS,
  resolveStreamActiveTimeoutMsForModel,
} from "../../src/shared/utils/runtimeTimeouts.ts";
import { PROVIDER_MODELS, getModelTimeoutMs } from "../../open-sse/config/providerModels.ts";
import { resolveConnectionTimeoutMs } from "../../open-sse/handlers/chatCore/upstreamTimeouts.ts";

const { assembleStreamingPipeline } = await import(
  "../../open-sse/handlers/chatCore/streamingPipeline.ts"
);

// ── 1. resolver semantics ────────────────────────────────────────────────────

test("a target that declares no budget gets no wall", () => {
  assert.equal(resolveStreamActiveTimeoutMsForModel(undefined, 0), 0);
  assert.equal(resolveStreamActiveTimeoutMsForModel(0, 0), 0);
  assert.equal(resolveStreamActiveTimeoutMsForModel(-1, 0), 0);
  assert.equal(resolveStreamActiveTimeoutMsForModel(Number.NaN, 0), 0);
});

test("a declared budget resolves to itself plus the margin", () => {
  assert.equal(
    resolveStreamActiveTimeoutMsForModel(1_200_000, 0),
    1_200_000 + MAX_REGISTERED_MODEL_TIMEOUT_MARGIN_MS
  );
  assert.equal(
    resolveStreamActiveTimeoutMsForModel(600_000, 0),
    600_000 + MAX_REGISTERED_MODEL_TIMEOUT_MARGIN_MS
  );
});

test("an operator-configured global cap wins over the per-target budget", () => {
  assert.equal(resolveStreamActiveTimeoutMsForModel(1_200_000, 900_000), 900_000);
  assert.equal(resolveStreamActiveTimeoutMsForModel(undefined, 900_000), 900_000);
});

test("a value beyond the timer range is clamped on either branch, not wrapped to fire instantly", () => {
  // setTimeout stores its delay in 32 bits; an unclamped value fires immediately.
  assert.equal(resolveStreamActiveTimeoutMsForModel(Number.MAX_SAFE_INTEGER, 0), MAX_TIMER_TIMEOUT_MS);
  assert.equal(resolveStreamActiveTimeoutMsForModel(0, 3_000_000_000), MAX_TIMER_TIMEOUT_MS);
});

// ── 2. the same properties through the real registry lookup ─────────────────

test("every model that declares a budget is looked up and capped above it", () => {
  let declaring = 0;
  for (const [alias, models] of Object.entries(PROVIDER_MODELS)) {
    for (const model of models ?? []) {
      if (typeof model?.timeoutMs !== "number" || model.timeoutMs <= 0) continue;
      declaring += 1;
      // Read the budget back through the lookup production uses, so a broken
      // alias/id mapping fails here instead of silently resolving to "no wall".
      const lookedUp = getModelTimeoutMs(alias, model.id);
      assert.equal(lookedUp, model.timeoutMs, `${alias}/${model.id} did not round-trip through the lookup`);
      const cap = resolveStreamActiveTimeoutMsForModel(lookedUp, 0);
      assert.ok(
        cap > model.timeoutMs,
        `${alias}/${model.id} declares ${model.timeoutMs} but resolves to a cap of ${cap}`
      );
    }
  }
  assert.ok(declaring > 0, "expected at least one registry model to declare timeoutMs");
});

test("a model with no declared budget resolves to no wall", () => {
  const declared = getModelTimeoutMs("grok-cli", "grok-4.7");
  assert.equal(declared, undefined);
  assert.equal(resolveStreamActiveTimeoutMsForModel(declared, 0), 0);
});

test("a connection override outranks the registry budget", () => {
  const override = resolveConnectionTimeoutMs({ timeoutMs: 1_800_000 });
  assert.equal(override, 1_800_000);
  assert.equal(
    resolveStreamActiveTimeoutMsForModel(override ?? getModelTimeoutMs("grok-cli", "grok-4.7"), 0),
    1_800_000 + MAX_REGISTERED_MODEL_TIMEOUT_MARGIN_MS
  );
});

// ── 3. wiring ───────────────────────────────────────────────────────────────

test("the resolved active budget reaches pipeWithDisconnect", () => {
  let seen: Record<string, unknown> | undefined;
  const stream = { pipeThrough: () => stream };
  const deps = {
    wantsProgress: () => false,
    pipeWithDisconnect: (...args: unknown[]) => {
      seen = args[3] as Record<string, unknown>;
      return stream;
    },
    isFeatureFlagEnabled: () => false,
    createPiiSseTransform: () => ({ pipeThrough: () => stream }),
    createCredentialSseTransform: () => ({ pipeThrough: () => stream }),
    createProgressTransform: () => ({ pipeThrough: () => stream }),
    createSseHeartbeatTransform: () => ({ pipeThrough: () => stream }),
    shapeForClientFormat: (format: unknown) => format,
    createModelEchoTransform: () => ({ pipeThrough: () => stream }),
  } as Parameters<typeof assembleStreamingPipeline>[1];

  assembleStreamingPipeline(
    {
      providerResponse: {},
      transformStream: {},
      streamController: { signal: {} as AbortSignal },
      createPiiTransform: undefined,
      clientRawRequestHeaders: {},
      clientResponseFormat: "openai",
      echoModel: null,
      responseHeaders: {},
      contentStallTimeoutMs: 80_000,
      activeTimeoutMs: 1_260_000,
    } as Parameters<typeof assembleStreamingPipeline>[0],
    deps
  );

  assert.equal(seen?.activeTimeoutMs, 1_260_000, "activeTimeoutMs must be forwarded, not dropped");
  assert.equal(seen?.contentStallTimeoutMs, 80_000, "the existing stall budget must keep flowing");
});
