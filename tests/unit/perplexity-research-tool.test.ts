// @ts-nocheck
import test from "node:test";
import assert from "node:assert/strict";

process.env.DATA_DIR = (await import("node:fs")).mkdtempSync(
  (await import("node:path")).join((await import("node:os")).tmpdir(), "omr-pplx-research-")
);
delete process.env.OMNIROUTE_MCP_ENFORCE_SCOPES;
delete process.env.OMNIROUTE_MCP_SCOPES;

const { __setTlsFetchOverrideForTesting } =
  await import("../../open-sse/services/perplexityTlsClient.ts");

let fetches = 0;
let lastTimeoutMs = null;
function stubSuccess() {
  __setTlsFetchOverrideForTesting(async (url, opts) => {
    fetches += 1;
    lastTimeoutMs = opts?.timeoutMs ?? null;
    if (String(url).includes("rate-limit")) {
      return { status: 200, headers: new Headers(), text: '{"remaining_research":5}', body: null };
    }
    const body =
      'data: {"status":"COMPLETED","final_sse_message":true,"artifact_entries":[{"assets":[{"asset_type":"RESEARCH_REPORT","research_report":{"final":true,"source_content":"done"}}]}]}\n\n';
    return { status: 200, headers: new Headers(), text: body, body: null };
  });
}

stubSuccess();

const { createMcpServer } = await import("../../open-sse/mcp-server/server.ts");

function handlerOf(server, name) {
  const registry = server._registeredTools;
  const tool = registry?.[name];
  assert.ok(tool, `${name} must be registered`);
  return tool.handler;
}

const successFrame = { authInfo: { clientId: "owner", scopes: ["manage"] } };

test("the tool is absent unless the switch is on at startup", () => {
  delete process.env.OMNIROUTE_PPLX_RESEARCH_ENABLED;
  const server = createMcpServer();
  assert.equal(server._registeredTools?.omniroute_perplexity_research, undefined);
});

test("flipping the switch off after startup rejects the call before any fetch", async () => {
  process.env.OMNIROUTE_PPLX_RESEARCH_ENABLED = "1";
  const server = createMcpServer();
  delete process.env.OMNIROUTE_PPLX_RESEARCH_ENABLED;
  fetches = 0;
  const result = await handlerOf(server, "omniroute_perplexity_research")(
    { query: "q", connectionId: "c1" },
    successFrame
  );
  const body = JSON.parse(result.content[0].text);
  assert.equal(body.error.code, "research_disabled");
  assert.equal(fetches, 0);
});

test("a finished report returns ok and the timeout budget reaches the fetch", async () => {
  process.env.OMNIROUTE_PPLX_RESEARCH_ENABLED = "1";
  const server = createMcpServer();
  fetches = 0;
  const result = await handlerOf(server, "omniroute_perplexity_research")(
    { query: "q", connectionId: "c-ok", maxTotalMinutes: 6 },
    successFrame
  );
  const body = JSON.parse(
    result.structuredContent ? JSON.stringify(result.structuredContent) : result.content[0].text
  );
  assert.equal(body.ok, true);
  assert.equal(fetches, 2);
  assert.equal(lastTimeoutMs, 6 * 60_000);
});

test("a second call on the same connection is busy", async () => {
  process.env.OMNIROUTE_PPLX_RESEARCH_ENABLED = "1";
  const server = createMcpServer();
  const handler = handlerOf(server, "omniroute_perplexity_research");
  let release;
  const gate = new Promise((resolve) => {
    release = resolve;
  });
  __setTlsFetchOverrideForTesting(async () => {
    await gate;
    return { status: 200, headers: new Headers(), text: "", body: null };
  });
  const first = handler({ query: "q", connectionId: "c-busy" }, successFrame);
  const second = await handler({ query: "q", connectionId: "c-busy" }, successFrame);
  release();
  await first;
  const body = JSON.parse(second.content[0].text);
  assert.equal(body.error.code, "research_busy");
});

test("mcp:connect alone cannot run it, admin can", async () => {
  stubSuccess();
  process.env.OMNIROUTE_PPLX_RESEARCH_ENABLED = "1";
  const server = createMcpServer();
  const handler = handlerOf(server, "omniroute_perplexity_research");
  fetches = 0;
  const narrow = await handler(
    { query: "q", connectionId: "c-scope" },
    { authInfo: { clientId: "n", scopes: ["mcp:connect"] } }
  );
  assert.equal(narrow.isError, true);
  assert.match(narrow.content[0].text, /Insufficient MCP scopes/);
  assert.equal(fetches, 0);
  const admin = await handler(
    { query: "q", connectionId: "c-scope" },
    { authInfo: { clientId: "a", scopes: ["admin"] } }
  );
  const body = JSON.parse(
    admin.structuredContent ? JSON.stringify(admin.structuredContent) : admin.content[0].text
  );
  assert.equal(body.ok, true);
});

test("an http call with no caller identity is refused, a stdio call is not", async () => {
  stubSuccess();
  process.env.OMNIROUTE_PPLX_RESEARCH_ENABLED = "1";
  const server = createMcpServer();
  const handler = handlerOf(server, "omniroute_perplexity_research");
  const { withMcpHttpAuthContext } = await import("../../open-sse/mcp-server/httpAuthContext.ts");
  fetches = 0;
  const http = await withMcpHttpAuthContext(new Request("http://127.0.0.1/mcp"), () =>
    handler({ query: "q", connectionId: "c-anon" }, { sessionId: "sess-1" })
  );
  const httpBody = JSON.parse(http.content[0].text);
  assert.equal(httpBody.error.code, "auth_required");
  assert.equal(fetches, 0);
  const stdio = await handler({ query: "q", connectionId: "c-stdio" }, {});
  const stdioBody = JSON.parse(
    stdio.structuredContent ? JSON.stringify(stdio.structuredContent) : stdio.content[0].text
  );
  assert.equal(stdioBody.ok, true);
});

test("an upstream error does not start the cooldown", async () => {
  __setTlsFetchOverrideForTesting(async () => ({
    status: 500,
    headers: new Headers(),
    text: "",
    body: null,
  }));
  process.env.OMNIROUTE_PPLX_RESEARCH_ENABLED = "1";
  const server = createMcpServer();
  const handler = handlerOf(server, "omniroute_perplexity_research");
  const first = await handler({ query: "q", connectionId: "c-err" }, successFrame);
  assert.equal(JSON.parse(first.content[0].text).error.code, "incomplete_result");
  stubSuccess();
  const second = await handler({ query: "q", connectionId: "c-err" }, successFrame);
  assert.equal(JSON.parse(second.content[0].text).error.code, "research_busy");
  const other = await handler({ query: "q", connectionId: "c-err-other" }, successFrame);
  const body = JSON.parse(
    other.structuredContent ? JSON.stringify(other.structuredContent) : other.content[0].text
  );
  assert.equal(body.ok, true);
});

test("no research run starts when the account has no research runs left", async () => {
  __setTlsFetchOverrideForTesting(async (url) => {
    fetches += 1;
    const text = String(url).includes("rate-limit") ? '{"remaining_research":0}' : "sent";
    return { status: 200, headers: new Headers(), text, body: null };
  });
  process.env.OMNIROUTE_PPLX_RESEARCH_ENABLED = "1";
  const server = createMcpServer();
  fetches = 0;
  const result = await handlerOf(server, "omniroute_perplexity_research")(
    { query: "q", connectionId: "c-empty" },
    successFrame
  );
  const body = JSON.parse(result.content[0].text);
  assert.equal(body.error.code, "research_quota_exhausted");
  assert.equal(fetches, 1);
});
