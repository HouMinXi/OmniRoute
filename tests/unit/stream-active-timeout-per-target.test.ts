/**
 * #12913: the active-stream watchdog never resets on upstream bytes. Its global
 * cap (STREAM_ACTIVE_TIMEOUT_MS, 21 min by default) stays for every stream; a
 * target that declares a longer budget may only raise its own cap above it, and
 * an explicit 0 still turns the watchdog off. These tests pin the resolver, the
 * declared-budget lookup that feeds it, and the hand-off to the stream.
 */
import { test } from "node:test";
import assert from "node:assert/strict";

import {
  DEFAULT_STREAM_ACTIVE_TIMEOUT_MS,
  MAX_REGISTERED_MODEL_TIMEOUT_MARGIN_MS,
  MAX_TIMER_TIMEOUT_MS,
  getUpstreamTimeoutConfig,
} from "../../src/shared/utils/runtimeTimeouts.ts";
import { GLM_TIMEOUT_MS } from "../../open-sse/config/glmProvider.ts";
import { codexProvider } from "../../open-sse/config/providers/registry/codex/index.ts";
import {
  resolveConnectionTimeoutMs,
  resolveDeclaredTargetTimeoutMs,
  resolveStreamActiveTimeoutMs,
} from "../../open-sse/handlers/chatCore/upstreamTimeouts.ts";

const { assembleStreamingPipeline } =
  await import("../../open-sse/handlers/chatCore/streamingPipeline.ts");

const codexLongModel = codexProvider.models.find(
  (model) => typeof model.timeoutMs === "number" && model.timeoutMs >= 1_200_000
);

// ── 1. resolver semantics ────────────────────────────────────────────────────

test("a target that declares no budget keeps the global cap", () => {
  for (const declared of [undefined, 0, -1, Number.NaN]) {
    assert.equal(
      resolveStreamActiveTimeoutMs(DEFAULT_STREAM_ACTIVE_TIMEOUT_MS, declared),
      DEFAULT_STREAM_ACTIVE_TIMEOUT_MS
    );
  }
});

test("a declared budget above the cap raises it to the budget plus the margin", () => {
  assert.equal(
    resolveStreamActiveTimeoutMs(DEFAULT_STREAM_ACTIVE_TIMEOUT_MS, GLM_TIMEOUT_MS),
    GLM_TIMEOUT_MS + MAX_REGISTERED_MODEL_TIMEOUT_MARGIN_MS
  );
  assert.equal(
    resolveStreamActiveTimeoutMs(600_000, 1_200_000),
    1_200_000 + MAX_REGISTERED_MODEL_TIMEOUT_MARGIN_MS
  );
});

test("a declared budget below the cap never lowers it", () => {
  assert.equal(
    resolveStreamActiveTimeoutMs(DEFAULT_STREAM_ACTIVE_TIMEOUT_MS, 120_000),
    DEFAULT_STREAM_ACTIVE_TIMEOUT_MS
  );
  assert.equal(resolveStreamActiveTimeoutMs(900_000, 600_000), 900_000);
});

test("an explicit STREAM_ACTIVE_TIMEOUT_MS=0 disables the watchdog even for long budgets", () => {
  const disabled = getUpstreamTimeoutConfig({
    STREAM_ACTIVE_TIMEOUT_MS: "0",
  }).streamActiveTimeoutMs;
  assert.equal(disabled, 0);
  assert.ok(codexLongModel, "precondition: a Codex model declares a 20-minute budget");
  assert.equal(
    resolveStreamActiveTimeoutMs(
      disabled,
      resolveDeclaredTargetTimeoutMs("codex", codexLongModel.id)
    ),
    0
  );
  assert.equal(resolveStreamActiveTimeoutMs(disabled, GLM_TIMEOUT_MS), 0);
  assert.equal(
    getUpstreamTimeoutConfig({}).streamActiveTimeoutMs,
    DEFAULT_STREAM_ACTIVE_TIMEOUT_MS,
    "unset is not the same as 0"
  );
});

test("a value beyond the timer range is clamped, not wrapped to fire instantly", () => {
  assert.equal(
    resolveStreamActiveTimeoutMs(DEFAULT_STREAM_ACTIVE_TIMEOUT_MS, Number.MAX_SAFE_INTEGER),
    MAX_TIMER_TIMEOUT_MS
  );
  assert.equal(resolveStreamActiveTimeoutMs(3_000_000_000, undefined), MAX_TIMER_TIMEOUT_MS);
});

// ── 2. declared budget lookup: connection → model → provider ────────────────

test("the declared budget comes from the connection, then the model, then the provider", () => {
  assert.ok(codexLongModel);
  const connectionTimeoutMs = resolveConnectionTimeoutMs({ timeoutMs: 1_800_000 });
  assert.equal(connectionTimeoutMs, 1_800_000);
  assert.equal(
    resolveDeclaredTargetTimeoutMs("codex", codexLongModel.id, connectionTimeoutMs),
    1_800_000,
    "a connection override outranks the registry"
  );
  assert.equal(
    resolveDeclaredTargetTimeoutMs("codex", codexLongModel.id),
    codexLongModel.timeoutMs,
    "a per-model budget comes next"
  );
  assert.equal(
    resolveDeclaredTargetTimeoutMs("glm", "glm-4.6"),
    GLM_TIMEOUT_MS,
    "a provider-level budget applies when the model declares none"
  );
  assert.equal(resolveDeclaredTargetTimeoutMs("openai", "gpt-4o"), undefined);
  assert.equal(resolveDeclaredTargetTimeoutMs(undefined, undefined), undefined);
});

test("a target with no declaration keeps the 21-minute wall that bounds endless streams", () => {
  for (const [provider, model] of [
    ["openai", "gpt-4o"],
    ["claude", "claude-sonnet-4-5-20250929"],
    ["gemini", "gemini-2.5-pro"],
  ]) {
    assert.equal(
      resolveStreamActiveTimeoutMs(
        DEFAULT_STREAM_ACTIVE_TIMEOUT_MS,
        resolveDeclaredTargetTimeoutMs(provider, model)
      ),
      1_260_000,
      `${provider}/${model} must not lose its active wall`
    );
  }
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
      activeTimeoutMs: 3_060_000,
    } as Parameters<typeof assembleStreamingPipeline>[0],
    deps
  );

  assert.equal(seen?.activeTimeoutMs, 3_060_000, "activeTimeoutMs must be forwarded, not dropped");
  assert.equal(seen?.contentStallTimeoutMs, 80_000, "the existing stall budget must keep flowing");
});
