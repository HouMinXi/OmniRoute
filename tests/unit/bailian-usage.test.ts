import test from "node:test";
import assert from "node:assert/strict";
import { getUsageForProvider } from "../../open-sse/services/usage.ts";

// Save original fetch
const originalFetch = globalThis.fetch;

test.afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("getUsageForProvider with bailian-coding-plan and consoleApiKey returns quota data", async () => {
  // Mock Bailian API response
  const mockBailianResponse = {
    code: "Success",
    data: {
      codingPlanInstanceInfos: [
        {
          planName: "Qwen3 Coder Next",
          codingPlanQuotaInfo: {
            per5HourUsedQuota: 60,
            per5HourTotalQuota: 100,
            per5HourQuotaNextRefreshTime: 1718304000,
            perWeekUsedQuota: 80,
            perWeekTotalQuota: 100,
            perWeekQuotaNextRefreshTime: 1718563200,
            perBillMonthUsedQuota: 40,
            perBillMonthTotalQuota: 100,
            perBillMonthQuotaNextRefreshTime: 1719772800,
          },
        },
      ],
    },
  };

  globalThis.fetch = async (url, options) => {
    return new Response(JSON.stringify(mockBailianResponse), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  };

  const result = await getUsageForProvider({
    provider: "bailian-coding-plan",
    apiKey: "sk-test",
    providerSpecificData: { consoleApiKey: "ck-test" },
  });

  assert.ok(result && !("message" in result));
  if (
    !result ||
    !("used" in result) ||
    !("total" in result) ||
    !("remainingPercentage" in result)
  ) {
    assert.fail("expected quota usage");
  }
  assert.ok(result.used !== undefined, "Should have used property");
  assert.ok(result.total !== undefined, "Should have total property");
  assert.ok(result.remainingPercentage !== undefined, "Should have remainingPercentage");
});

test("getUsageForProvider with bailian-coding-plan and only apiKey falls back to apiKey", async () => {
  // Mock Bailian API response
  const mockBailianResponse = {
    code: "Success",
    data: {
      codingPlanInstanceInfos: [
        {
          planName: "Qwen3 Coder Next",
          codingPlanQuotaInfo: {
            per5HourUsedQuota: 30,
            per5HourTotalQuota: 100,
            per5HourQuotaNextRefreshTime: 1718304000,
            perWeekUsedQuota: 50,
            perWeekTotalQuota: 100,
            perWeekQuotaNextRefreshTime: 1718563200,
            perBillMonthUsedQuota: 20,
            perBillMonthTotalQuota: 100,
            perBillMonthQuotaNextRefreshTime: 1719772800,
          },
        },
      ],
    },
  };

  let authHeader = "";
  globalThis.fetch = async (url: unknown, options?: RequestInit) => {
    const headers = options?.headers;
    authHeader =
      headers instanceof Headers
        ? (headers.get("Authorization") ?? "")
        : Array.isArray(headers)
          ? (headers.find(([key]) => key.toLowerCase() === "authorization")?.[1] ?? "")
          : ((headers as Record<string, string> | undefined)?.Authorization ?? "");
    return new Response(JSON.stringify(mockBailianResponse), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  };

  const result = await getUsageForProvider({
    provider: "bailian-coding-plan",
    apiKey: "sk-test-fallback",
    providerSpecificData: {},
  });

  assert.ok(
    result && !("message" in result),
    "Should have implemented bailian-coding-plan usage with apiKey fallback"
  );

  assert.ok(result, "Should return quota data via apiKey fallback");

  assert.ok(
    authHeader.includes("sk-test-fallback"),
    "Should use apiKey when consoleApiKey is not provided"
  );
});

test("getUsageForProvider with bailian-coding-plan returns quota with percentUsed from most restrictive window", async () => {
  // Mock: 5h=60%, weekly=80%, monthly=40% → percentUsed should be 0.8 (80% = most restrictive)
  const mockBailianResponse = {
    code: "Success",
    data: {
      codingPlanInstanceInfos: [
        {
          planName: "Qwen3 Coder Next",
          codingPlanQuotaInfo: {
            per5HourUsedQuota: 60,
            per5HourTotalQuota: 100,
            per5HourQuotaNextRefreshTime: 1718304000,
            perWeekUsedQuota: 80,
            perWeekTotalQuota: 100,
            perWeekQuotaNextRefreshTime: 1718563200,
            perBillMonthUsedQuota: 40,
            perBillMonthTotalQuota: 100,
            perBillMonthQuotaNextRefreshTime: 1719772800,
          },
        },
      ],
    },
  };

  globalThis.fetch = async (url, options) => {
    return new Response(JSON.stringify(mockBailianResponse), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  };

  const result = await getUsageForProvider({
    provider: "bailian-coding-plan",
    apiKey: "sk-test",
    providerSpecificData: { consoleApiKey: "ck-test" },
  });

  assert.ok(result && !("message" in result), "Should have implemented bailian-coding-plan usage");
  if (!result || !("used" in result) || !("total" in result)) {
    assert.fail("expected quota usage");
  }

  // Should return percentUsed = 0.8 (80% from weekly, the most restrictive)
  assert.ok(result, "Should return quota data");
  const percentUsed = result.used / result.total;
  assert.strictEqual(
    percentUsed,
    0.8,
    "percentUsed should be 0.8 from most restrictive window (weekly 80%)"
  );
});
