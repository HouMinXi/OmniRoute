/**
 * Request timeline MCP audit rows (#13898): map, merge, API-key filter URLs,
 * and a failed MCP fetch must not drop LLM bars.
 */
import test from "node:test";
import assert from "node:assert/strict";

import {
  loadTimelineLogs,
  mapMcpAuditEntry,
  mergeTimelineLogs,
  mcpAuditId,
  timelineFetchUrls,
  uniqueApiKeyOptions,
  type TimelineLog,
} from "../../src/shared/components/RequestTimeline.utils.ts";

function llmLog(id: string, apiKeyId: string | null = "key-llm"): TimelineLog {
  return {
    id,
    timestamp: "2026-09-17T04:00:00.000Z",
    status: 200,
    model: "agnes-3.0-flash",
    provider: "agnes",
    account: null,
    duration: 1200,
    tokens: { in: 10, out: 20 },
    completed: true,
    apiKeyId,
  };
}

const SAMPLE_ENTRY = {
  id: 42,
  toolName: "omniroute_get_health",
  durationMs: 37,
  apiKeyId: "key-mcp",
  success: true,
  errorCode: null,
  createdAt: "2026-09-17 04:05:50",
};

test("mapMcpAuditEntry prefixes the id and marks the row as mcp", () => {
  const row = mapMcpAuditEntry(SAMPLE_ENTRY, (tool) =>
    tool === "omniroute_get_health" ? (["read:health"] as const) : undefined
  );
  assert.equal(row.id, mcpAuditId(42));
  assert.equal(row.kind, "mcp");
  assert.equal(row.toolName, "omniroute_get_health");
  assert.equal(row.model, "omniroute_get_health");
  assert.equal(row.duration, 37);
  assert.equal(row.status, 200);
  assert.equal(row.apiKeyId, "key-mcp");
  assert.deepEqual(row.scopes, ["read:health"]);
  assert.equal(row.completed, true);
  assert.match(row.timestamp, /T/);
});

test("mapMcpAuditEntry uses a failure status when success is false", () => {
  const row = mapMcpAuditEntry({ ...SAMPLE_ENTRY, success: false, errorCode: "TIMEOUT" });
  assert.equal(row.status, 500);
  assert.equal(row.error, "TIMEOUT");
  assert.equal(row.errorCode, "TIMEOUT");
});

test("mergeTimelineLogs keeps LLM rows when the MCP list is empty", () => {
  const llm = [llmLog("c1")];
  const merged = mergeTimelineLogs(llm, []);
  assert.equal(merged.length, 1);
  assert.equal(merged[0].id, "c1");
  assert.equal(merged[0].kind ?? "llm", "llm");
});

test("mergeTimelineLogs concatenates MCP rows without colliding ids", () => {
  const merged = mergeTimelineLogs([llmLog("42")], [mapMcpAuditEntry(SAMPLE_ENTRY)]);
  assert.equal(merged.length, 2);
  assert.deepEqual(
    merged.map((row) => row.id).sort(),
    ["42", "mcp:42"]
  );
});

test("timelineFetchUrls omits key params when the dropdown is All", () => {
  const urls = timelineFetchUrls("");
  assert.equal(urls.llm, "/api/usage/call-logs?limit=200");
  assert.equal(urls.mcp, "/api/mcp/audit?limit=200");
});

test("timelineFetchUrls sends apiKey for LLM rows and apiKeyId for MCP rows", () => {
  const urls = timelineFetchUrls("key-mcp");
  assert.equal(urls.llm, "/api/usage/call-logs?limit=200&apiKey=key-mcp");
  assert.equal(urls.mcp, "/api/mcp/audit?limit=200&apiKeyId=key-mcp");
});

test("uniqueApiKeyOptions skips empty keys (same as the logs grid)", () => {
  const keys = uniqueApiKeyOptions([
    llmLog("a", "key-llm"),
    mapMcpAuditEntry({ ...SAMPLE_ENTRY, apiKeyId: null }),
    mapMcpAuditEntry(SAMPLE_ENTRY),
  ]);
  assert.deepEqual(keys, ["key-llm", "key-mcp"]);
});

test("loadTimelineLogs still returns LLM bars when the MCP fetch fails", async () => {
  const llm = [llmLog("c1")];
  const rows = await loadTimelineLogs(async (url) => {
    if (url.includes("/api/mcp/audit")) {
      throw new Error("MCP audit down");
    }
    return { ok: true, json: async () => llm };
  });
  assert.equal(rows.length, 1);
  assert.equal(rows[0].id, "c1");
});

test("loadTimelineLogs maps MCP entries from { entries }", async () => {
  const llm = [llmLog("c1")];
  const rows = await loadTimelineLogs(async (url) => {
    if (url.includes("/api/mcp/audit")) {
      return { ok: true, json: async () => ({ entries: [SAMPLE_ENTRY], total: 1 }) };
    }
    return { ok: true, json: async () => llm };
  });
  assert.equal(rows.length, 2);
  assert.ok(rows.some((row) => row.id === "c1"));
  assert.ok(rows.some((row) => row.id === "mcp:42" && row.kind === "mcp"));
});

test("loadTimelineLogs keeps LLM bars when MCP returns a non-ok status", async () => {
  const llm = [llmLog("c1")];
  const rows = await loadTimelineLogs(async (url) => {
    if (url.includes("/api/mcp/audit")) {
      return { ok: false, json: async () => ({ error: "nope" }) };
    }
    return { ok: true, json: async () => llm };
  });
  assert.equal(rows.length, 1);
  assert.equal(rows[0].id, "c1");
});
