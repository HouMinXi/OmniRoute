import test from "node:test";
import assert from "node:assert/strict";

const genericModule = await import("../../open-sse/services/genericQuotaFetcher.ts");
const scoringModule = await import("../../open-sse/services/combo/quotaScoring.ts");

const { convertUsageToQuotaInfo } = genericModule;
const { scoreResetAwareQuota, resolveResetAwareConfig } = scoringModule;

const resetAt5h = new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString();
const resetAt7d = new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString();

const usage = {
  quotas: {
    "gemini-3.7-flash-high": {
      used: 30,
      total: 1000,
      remainingPercentage: 97,
      resetAt: resetAt5h,
    },
    "claude-opus-4-6-thinking": {
      used: 1000,
      total: 1000,
      remainingPercentage: 0,
      resetAt: resetAt7d,
    },
    "gpt-oss-120b-medium": {
      used: 900,
      total: 1000,
      remainingPercentage: 10,
      resetAt: resetAt5h,
    },
    gemini_weekly: {
      used: 10,
      total: 1000,
      remainingPercentage: 99,
      resetAt: resetAt7d,
    },
    claude_gpt_weekly: {
      used: 1000,
      total: 1000,
      remainingPercentage: 0,
      resetAt: resetAt7d,
    },
    unrelated_weekly: {
      used: 1000,
      total: 1000,
      remainingPercentage: 0,
      resetAt: resetAt7d,
    },
  },
};

test("reset-aware Gemini scoring ignores depleted Claude family quota", () => {
  const quota = convertUsageToQuotaInfo(usage, {
    provider: "agy",
    requestedModel: "agy/gemini-3.7-flash-high",
  });

  assert.ok(quota);
  assert.equal(quota.window5h?.percentUsed, 0.03);
  assert.equal(quota.window7d?.percentUsed, 0.01);
  assert.equal(quota.percentUsed, 0.03);
  assert.equal(quota.limitReached, false);
  assert.equal(quota.windows?.["claude-opus-4-6-thinking"], undefined);
  assert.equal(quota.windows?.["gpt-oss-120b-medium"], undefined);
  assert.equal(quota.windows?.claude_gpt_weekly, undefined);
  assert.equal(quota.windows?.unrelated_weekly, undefined);
  assert.ok(scoreResetAwareQuota(quota, resolveResetAwareConfig({})).score > 0.3);
});

test("opposite-family-only telemetry fails open as unknown", () => {
  const gemini = convertUsageToQuotaInfo(
    { quotas: { claude_gpt_weekly: usage.quotas.claude_gpt_weekly } },
    { provider: "agy", requestedModel: "gemini-3.7-flash-high" }
  );
  const claude = convertUsageToQuotaInfo(
    { quotas: { gemini_weekly: usage.quotas.gemini_weekly } },
    { provider: "antigravity", requestedModel: "claude-opus-4-6-thinking" }
  );

  assert.equal(gemini, null);
  assert.equal(claude, null);
  assert.equal(scoreResetAwareQuota(gemini, resolveResetAwareConfig({})).score, 0.5);
  assert.equal(scoreResetAwareQuota(claude, resolveResetAwareConfig({})).score, 0.5);
});

test("Claude family excludes unknown weekly buckets", () => {
  const quota = convertUsageToQuotaInfo(
    {
      quotas: {
        "claude-opus-4-6-thinking": {
          used: 100,
          total: 1000,
          remainingPercentage: 90,
          resetAt: resetAt5h,
        },
        claude_gpt_weekly: {
          used: 100,
          total: 1000,
          remainingPercentage: 90,
          resetAt: resetAt7d,
        },
        unrelated_weekly: usage.quotas.unrelated_weekly,
      },
    },
    { provider: "agy", requestedModel: "claude-opus-4-6-thinking" }
  );

  assert.ok(quota);
  assert.equal(quota.limitReached, false);
  assert.equal(quota.windows?.unrelated_weekly, undefined);
  assert.equal(quota.window7d?.percentUsed, 0.1);
});

test("unscoped provider-limits conversion retains conservative global windows", () => {
  const quota = convertUsageToQuotaInfo(usage);

  assert.ok(quota);
  assert.equal(quota.window5h?.percentUsed, 1);
  assert.equal(quota.window7d?.percentUsed, 1);
  assert.equal(quota.limitReached, true);
});
