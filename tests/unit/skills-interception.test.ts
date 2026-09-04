import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TEST_ROOT = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-skills-interception-"));
const TEST_DATA_DIR = path.join(TEST_ROOT, "data");
const TEST_PLUGINS_DIR = path.join(TEST_ROOT, "plugins");
const ORIGINAL_DATA_DIR = process.env.DATA_DIR;
const ORIGINAL_PLUGINS_DIR = process.env.OMNIROUTE_PLUGINS_DIR;
fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
fs.mkdirSync(TEST_PLUGINS_DIR, { recursive: true });
process.env.DATA_DIR = TEST_DATA_DIR;
process.env.OMNIROUTE_PLUGINS_DIR = TEST_PLUGINS_DIR;

const coreDb = await import("../../src/lib/db/core.ts");
const { skillRegistry } = await import("../../src/lib/skills/registry.ts");
const { skillExecutor } = await import("../../src/lib/skills/executor.ts");
const { builtinSkills } = await import("../../src/lib/skills/builtins.ts");
const { interceptToolCalls, extractToolCalls, handleToolCallExecution, buildWebSearchCallItem } =
  await import("../../src/lib/skills/interception.ts");
const { OMNIROUTE_WEB_SEARCH_FALLBACK_TOOL_NAME } =
  await import("../../open-sse/services/webSearchFallback.ts");

function resetRuntime() {
  skillRegistry["registeredSkills"].clear();
  skillRegistry["versionCache"].clear();
  skillExecutor["handlers"].clear();
  skillExecutor.setTimeout(50);
}

async function resetStorage() {
  resetRuntime();
  coreDb.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
}

async function registerRuntimeSkills() {
  await skillRegistry.register({
    name: "lookup",
    version: "1.0.0",
    description: "lookup records",
    schema: { input: { id: "string" }, output: { record: "string" } },
    handler: "lookup-handler",
    enabled: true,
    apiKeyId: "key-a",
  });
  await skillRegistry.register({
    name: "broken",
    version: "1.0.0",
    description: "always fails",
    schema: { input: {}, output: {} },
    handler: "broken-handler",
    enabled: true,
    apiKeyId: "key-a",
  });

  skillExecutor.registerHandler("lookup-handler", async (input) => ({
    record: `resolved:${input.id}`,
  }));
  skillExecutor.registerHandler("broken-handler", async () => {
    throw new Error("skill failure");
  });
}

const executionContext = {
  apiKeyId: "key-a",
  sessionId: "session-1",
  requestId: "request-1",
};

test.beforeEach(async () => {
  await resetStorage();
  await registerRuntimeSkills();
});

test.after(() => {
  resetRuntime();
  coreDb.resetDbInstance();
  if (ORIGINAL_DATA_DIR === undefined) delete process.env.DATA_DIR;
  else process.env.DATA_DIR = ORIGINAL_DATA_DIR;
  if (ORIGINAL_PLUGINS_DIR === undefined) delete process.env.OMNIROUTE_PLUGINS_DIR;
  else process.env.OMNIROUTE_PLUGINS_DIR = ORIGINAL_PLUGINS_DIR;
  fs.rmSync(TEST_ROOT, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
});

test("buildWebSearchCallItem emits a native web_search_call item only for successful web-search fallback results", () => {
  const call = { id: "call_search", name: OMNIROUTE_WEB_SEARCH_FALLBACK_TOOL_NAME, arguments: {} };
  const item = buildWebSearchCallItem(call, {
    success: true,
    provider: "serper-search",
    query: "latest omniroute release",
    results: [
      {
        title: "OmniRoute Docs",
        url: "https://example.com/omniroute",
        display_url: "example.com/omniroute",
        snippet: "The OmniRoute documentation",
      },
      { url: "https://example.com/no-title" },
      { title: "No URL", url: "" },
    ],
  });

  assert.equal(item?.type, "web_search_call");
  assert.equal(item?.status, "completed");
  assert.equal((item?.action as Record<string, unknown>).type, "web_search");
  assert.equal((item?.action as Record<string, unknown>).query, "latest omniroute release");
  const sources = (item?.action as Record<string, unknown>).sources as Array<
    Record<string, string>
  >;
  assert.deepEqual(sources, [
    {
      title: "OmniRoute Docs",
      url: "https://example.com/omniroute",
      caption: "The OmniRoute documentation",
    },
    { title: "https://example.com/no-title", url: "https://example.com/no-title", caption: "" },
  ]);

  // Non-search fallback calls never produce a web_search_call item.
  assert.equal(
    buildWebSearchCallItem(
      { id: "call-1", name: "lookup@1.0.0", arguments: {} },
      { success: true }
    ),
    null
  );
  // Failed searches keep the existing function_call_output error only.
  assert.equal(buildWebSearchCallItem(call, { success: false, error: "quota" }), null);
  assert.equal(buildWebSearchCallItem(call, null), null);
});

test("extractToolCalls supports OpenAI, Anthropic and Gemini shapes", () => {
  const openaiRoot = extractToolCalls(
    {
      tool_calls: [
        {
          id: "call-root",
          function: { name: "lookup@1.0.0", arguments: '{"id":"123"}' },
        },
      ],
    },
    "gpt-4.1"
  );
  const openaiChoices = extractToolCalls(
    {
      choices: [
        {
          message: {
            tool_calls: [
              {
                id: "call-choice",
                function: { name: "lookup@1.0.0", arguments: "not-json" },
              },
            ],
          },
        },
      ],
    },
    "openai-compatible-model"
  );
  const anthropic = extractToolCalls(
    {
      content: [
        { type: "text", text: "ignored" },
        { type: "tool_use", id: "claude-1", name: "lookup@1.0.0", input: { id: "abc" } },
      ],
    },
    "claude-sonnet"
  );
  const gemini = extractToolCalls(
    {
      functionCalls: [{ name: "lookup@1.0.0", args: { id: "gemini" } }],
    },
    "gemini-2.5-pro"
  );
  const responses = extractToolCalls(
    {
      object: "response",
      output: [
        {
          type: "function_call",
          call_id: "call-response",
          name: OMNIROUTE_WEB_SEARCH_FALLBACK_TOOL_NAME,
          arguments: '{"query":"latest omniroute"}',
        },
      ],
    },
    "openai"
  );

  assert.deepEqual(openaiRoot, [
    {
      id: "call-root",
      name: "lookup@1.0.0",
      arguments: { id: "123" },
    },
  ]);
  assert.deepEqual(openaiChoices, [
    {
      id: "call-choice",
      name: "lookup@1.0.0",
      arguments: {},
    },
  ]);
  assert.deepEqual(anthropic, [
    {
      id: "claude-1",
      name: "lookup@1.0.0",
      arguments: { id: "abc" },
    },
  ]);
  assert.equal(gemini.length, 1);
  assert.equal(gemini[0].name, "lookup@1.0.0");
  assert.deepEqual(gemini[0].arguments, { id: "gemini" });
  assert.deepEqual(responses, [
    {
      id: "call-response",
      name: OMNIROUTE_WEB_SEARCH_FALLBACK_TOOL_NAME,
      arguments: { query: "latest omniroute" },
    },
  ]);
  assert.deepEqual(extractToolCalls({}, "custom-model"), []);
});

test("interceptToolCalls returns outputs, execution errors and missing-skill errors", async () => {
  const results = await interceptToolCalls(
    [
      { id: "ok-call", name: "lookup@1.0.0", arguments: { id: "42" } },
      { id: "error-call", name: "broken@1.0.0", arguments: {} },
      { id: "missing-call", name: "missing", arguments: {} },
    ],
    executionContext
  );

  assert.deepEqual(results, [
    { id: "ok-call", result: { record: "resolved:42" } },
    { id: "error-call", result: { error: "skill failure" } },
    { id: "missing-call", result: { error: "Skill not found: missing" } },
  ]);
});

test("skill errors are sanitized before OpenAI tool-result response shapes", async () => {
  const hostileMessage =
    "skill failure access_token=skill-public-secret at /srv/private/skill-handler.ts\n" +
    "    at execute (/srv/private/skill-handler.ts:17:4)";
  skillExecutor.registerHandler("broken-handler", async () => {
    throw new Error(hostileMessage);
  });

  const chatResult = await handleToolCallExecution(
    {
      choices: [
        {
          message: {
            tool_calls: [{ id: "chat-error", function: { name: "broken@1.0.0", arguments: "{}" } }],
          },
        },
      ],
    },
    "gpt-4o-mini",
    executionContext
  );
  const responsesResult = await handleToolCallExecution(
    {
      object: "response",
      output: [
        {
          type: "function_call",
          call_id: "responses-error",
          name: "broken@1.0.0",
          arguments: "{}",
        },
      ],
    },
    "openai",
    executionContext
  );
  const thrownResult = await interceptToolCalls(
    [{ id: "thrown-error", name: "/srv/private/missing.ts", arguments: {} }],
    executionContext
  );
  const serialized = JSON.stringify({ chatResult, responsesResult, thrownResult });

  assert.match(serialized, /skill failure|Skill not found/i);
  assert.doesNotMatch(
    serialized,
    /skill-public-secret|srv\/private|skill-handler\.ts|\bat execute\b/i
  );
});

test("failed builtin outputs are sanitized before public tool results", async () => {
  const hostile =
    "builtin failed access_token=builtin-output-secret at /srv/private/builtin-output.ts\n" +
    "    at run (/srv/private/builtin-output.ts:9:4)";
  const mutableBuiltins = builtinSkills as unknown as Record<
    string,
    (
      input: Record<string, unknown>,
      context: Record<string, unknown>
    ) => Promise<Record<string, unknown>>
  >;
  const originalHttpRequest = mutableBuiltins.http_request;

  try {
    mutableBuiltins.http_request = async () => ({
      success: false,
      status: 502,
      headers: { authorization: "Bearer builtin-output-secret" },
      body: hostile,
    });
    const results = await interceptToolCalls(
      [{ id: "builtin-failure", name: "http_request", arguments: { url: "https://example.com" } }],
      { ...executionContext, builtinToolNames: ["http_request"] }
    );
    const serialized = JSON.stringify(results);

    assert.equal((results[0]?.result as Record<string, unknown>)?.status, 502);
    assert.doesNotMatch(
      serialized,
      /builtin-output-secret|srv\/private|builtin-output\.ts|\bat run\b/i
    );
  } finally {
    mutableBuiltins.http_request = originalHttpRequest;
  }
});

test("handleToolCallExecution appends OpenAI tool results and leaves empty responses untouched", async () => {
  const openaiResponse = await handleToolCallExecution(
    {
      choices: [
        {
          message: {
            tool_calls: [
              {
                id: "call-1",
                function: { name: "lookup@1.0.0", arguments: '{"id":"99"}' },
              },
            ],
          },
        },
      ],
    },
    "gpt-4o-mini",
    executionContext
  );

  assert.deepEqual(openaiResponse.tool_results, [
    {
      tool_call_id: "call-1",
      output: '{"record":"resolved:99"}',
    },
  ]);

  const untouched = { choices: [{ message: { content: "plain text" } }] };
  assert.equal(await handleToolCallExecution(untouched, "gpt-4.1", executionContext), untouched);
});

test("handleToolCallExecution returns Anthropic skill results as text", async () => {
  const anthropicResponse = await handleToolCallExecution(
    {
      stop_reason: "tool_use",
      content: [{ type: "tool_use", id: "tool-1", name: "lookup@1.0.0", input: { id: "77" } }],
    },
    "claude-3-7-sonnet",
    executionContext
  );

  assert.deepEqual(anthropicResponse.content, [
    {
      type: "text",
      text: '[Skill result: lookup@1.0.0]\n{"record":"resolved:77"}',
    },
  ]);
  assert.equal(
    anthropicResponse.content.some((b: { type: string }) => b.type === "tool_result"),
    false
  );
  assert.equal(anthropicResponse.stop_reason, "end_turn");
  assert.equal(anthropicResponse.stop_sequence, null);
});

test("handleToolCallExecution appends Responses API function_call_output items", async () => {
  const responsesResult = await handleToolCallExecution(
    {
      object: "response",
      output: [
        {
          type: "function_call",
          call_id: "call-response",
          name: "lookup@1.0.0",
          arguments: '{"id":"55"}',
        },
      ],
    },
    "openai",
    executionContext
  );

  assert.deepEqual(responsesResult.output, [
    {
      type: "function_call",
      call_id: "call-response",
      name: "lookup@1.0.0",
      arguments: '{"id":"55"}',
    },
    {
      type: "function_call_output",
      call_id: "call-response",
      output: '{"record":"resolved:55"}',
    },
  ]);
});

test("handleToolCallExecution forwards unregistered client-native tool_use untouched (#2815)", async () => {
  const original = {
    content: [
      { type: "tool_use", id: "tool-native", name: "Bash", input: { command: "ls" } },
      { type: "text", text: "Calling Bash" },
    ],
  };
  const result = await handleToolCallExecution(original, "claude-3-7-sonnet", executionContext);

  assert.equal(result, original);
  assert.equal(
    (result.content as Array<{ type: string }>).some((b) => b.type === "tool_result"),
    false
  );
});

test("handleToolCallExecution intercepts a registered skill alongside an unregistered tool (#2815)", async () => {
  const mixed = await handleToolCallExecution(
    {
      stop_reason: "tool_use",
      content: [
        { type: "tool_use", id: "tool-native", name: "Bash", input: { command: "ls" } },
        { type: "tool_use", id: "tool-skill", name: "lookup@1.0.0", input: { id: "9" } },
      ],
    },
    "claude-3-7-sonnet",
    executionContext
  );

  assert.deepEqual(mixed.content, [
    {
      type: "text",
      text: '[Skill result: lookup@1.0.0]\n{"record":"resolved:9"}',
    },
    { type: "tool_use", id: "tool-native", name: "Bash", input: { command: "ls" } },
  ]);
  assert.equal(
    mixed.content.some((b: { type: string }) => b.type === "tool_result"),
    false
  );
  assert.equal(mixed.stop_reason, "tool_use");
});

test("handleToolCallExecution loads registry from DB on cold cache (covers loadFromDatabase fix)", async () => {
  // Skills are in the DB (registered in beforeEach) but we evict the in-memory
  // cache to simulate a cold/fresh process. Without the loadFromDatabase() call
  // at the top of handleToolCallExecution, isRegisteredCustomSkill() would
  // return false (false negative) and the skill would be silently skipped.
  skillRegistry["registeredSkills"].clear();
  skillRegistry["versionCache"].clear();
  skillRegistry.invalidateCache();

  const result = await handleToolCallExecution(
    {
      stop_reason: "tool_use",
      content: [
        { type: "tool_use", id: "tool-skill", name: "lookup@1.0.0", input: { id: "cold" } },
      ],
    },
    "claude-3-7-sonnet",
    executionContext
  );

  assert.deepEqual(result.content, [
    {
      type: "text",
      text: '[Skill result: lookup@1.0.0]\n{"record":"resolved:cold"}',
    },
  ]);
  assert.equal(
    result.content.some((b: { type: string }) => b.type === "tool_result"),
    false
  );
  assert.equal(result.stop_reason, "end_turn");
  assert.equal(result.stop_sequence, null);
});

// ─── Task 3: classifyServerOwnedCalls + formatEscapeHatchResponse RED tests ──

test("classifyServerOwnedCalls: owner set builtin/custom → serverOwned; registry-registered but not in owner set → clientNative", async () => {
  // These exports do not exist yet — RED.
  const { classifyServerOwnedCalls } = await import("../../src/lib/skills/interception.ts");

  const calls = [
    { id: "c1", name: "http_request", arguments: {} },
    { id: "c2", name: "lookup@1.0.0", arguments: {} },
    { id: "c3", name: "Bash", arguments: {} },
  ];

  const result = await classifyServerOwnedCalls(calls, {
    apiKeyId: "key-a",
    sessionId: "s1",
    requestId: "r1",
    builtinToolNames: ["http_request"],
    injectedCustomSkillNames: ["lookup@1.0.0"],
    customSkillExecutionEnabled: true,
  });

  assert.equal(result.serverOwned.length, 2);
  assert.equal(result.serverOwned[0].id, "c1");
  assert.equal(result.serverOwned[1].id, "c2");
  assert.equal(result.clientNative.length, 1);
  assert.equal(result.clientNative[0].id, "c3");
});

test("classifyServerOwnedCalls: client same-name memory_search → not server-owned", async () => {
  const { classifyServerOwnedCalls } = await import("../../src/lib/skills/interception.ts");

  const calls = [
    { id: "c1", name: "memory_search", arguments: {} },
    { id: "c2", name: "http_request", arguments: {} },
  ];

  const result = await classifyServerOwnedCalls(calls, {
    apiKeyId: "key-a",
    sessionId: "s1",
    requestId: "r1",
    builtinToolNames: ["http_request"],
    // memory_search NOT in builtinToolNames (client owns it)
    injectedCustomSkillNames: [],
    customSkillExecutionEnabled: true,
  });

  // memory_search is client-native because it's not in any owner set.
  assert.equal(result.clientNative.length, 1);
  assert.equal(result.clientNative[0].id, "c1");
  assert.equal(result.serverOwned.length, 1);
  assert.equal(result.serverOwned[0].id, "c2");
});

test("classifyServerOwnedCalls: registered skill with client same-name → client-native (not server-owned)", async () => {
  const { classifyServerOwnedCalls } = await import("../../src/lib/skills/interception.ts");

  // Register a skill that the client also declares with the same encoded name.
  await skillRegistry.register({
    name: "collision-check",
    version: "1.0.0",
    description: "collision test",
    schema: { input: {}, output: {} },
    handler: "collision-handler",
    enabled: true,
    apiKeyId: "key-a",
    mode: "on",
  });

  const encodedName = (await import("../../src/lib/skills/injection.ts")).encodeSkillToolName(
    "collision-check",
    "1.0.0"
  );

  // Client declares a tool with the same encoded name.
  const calls = [
    { id: "c1", name: encodedName, arguments: {} },
    { id: "c2", name: "http_request", arguments: {} },
  ];

  const result = await classifyServerOwnedCalls(calls, {
    apiKeyId: "key-a",
    sessionId: "s1",
    requestId: "r1",
    builtinToolNames: ["http_request"],
    injectedCustomSkillNames: [], // empty: client collision prevented injection
    customSkillExecutionEnabled: true,
  });

  // The registered skill with client same-name must be client-native.
  assert.equal(result.clientNative.length, 1);
  assert.equal(result.clientNative[0].id, "c1");
  assert.equal(result.serverOwned.length, 1);
  assert.equal(result.serverOwned[0].id, "c2");

  skillRegistry["registeredSkills"].clear();
  skillRegistry["versionCache"].clear();
});

test("formatEscapeHatchResponse: mixed OpenAI — strip server calls, append results to content, keep client calls, finish_reason:tool_calls", async () => {
  const { formatEscapeHatchResponse } = await import("../../src/lib/skills/interception.ts");

  const response = {
    choices: [
      {
        message: {
          content: null,
          tool_calls: [
            { id: "srv1", function: { name: "http_request", arguments: "{}" } },
            { id: "cli1", function: { name: "Bash", arguments: '{"cmd":"ls"}' } },
          ],
        },
        finish_reason: "tool_calls",
      },
    ],
  };

  const serverCalls = [{ id: "srv1", name: "http_request", arguments: {} }];
  const clientCalls = [{ id: "cli1", name: "Bash", arguments: { cmd: "ls" } }];
  const results = [{ id: "srv1", name: "http_request", result: { status: 200 }, replayed: false }];

  const formatted = formatEscapeHatchResponse(
    response,
    serverCalls,
    results,
    clientCalls,
    "openai"
  );

  const choice = (formatted as any).choices[0];
  // Server call stripped from tool_calls, client call kept.
  assert.equal(choice.message.tool_calls.length, 1);
  assert.equal(choice.message.tool_calls[0].id, "cli1");
  // Server result appended to content.
  assert.ok(typeof choice.message.content === "string");
  assert.ok(choice.message.content.includes("200"));
  // finish_reason stays tool_calls (mixed).
  assert.equal(choice.finish_reason, "tool_calls");
});

test("formatEscapeHatchResponse: all-server OpenAI — strip tool calls, append results, finish_reason:stop", async () => {
  const { formatEscapeHatchResponse } = await import("../../src/lib/skills/interception.ts");

  const response = {
    choices: [
      {
        message: {
          content: null,
          tool_calls: [{ id: "srv1", function: { name: "http_request", arguments: "{}" } }],
        },
        finish_reason: "tool_calls",
      },
    ],
  };

  const serverCalls = [{ id: "srv1", name: "http_request", arguments: {} }];
  const results = [{ id: "srv1", name: "http_request", result: { ok: true }, replayed: false }];

  const formatted = formatEscapeHatchResponse(response, serverCalls, results, [], "openai");

  const choice = (formatted as any).choices[0];
  assert.ok(
    !choice.message.tool_calls || choice.message.tool_calls.length === 0,
    "all-server must have no remaining tool_calls"
  );
  assert.ok(typeof choice.message.content === "string");
  assert.ok(choice.message.content.includes("ok"));
  assert.equal(choice.finish_reason, "stop");
});

test("formatEscapeHatchResponse: Claude mixed — strip server tool_use, keep client tool_use, end_turn stays", async () => {
  const { formatEscapeHatchResponse } = await import("../../src/lib/skills/interception.ts");

  const response = {
    content: [
      { type: "tool_use", id: "srv1", name: "http_request", input: {} },
      { type: "tool_use", id: "cli1", name: "Bash", input: { cmd: "ls" } },
    ],
    stop_reason: "tool_use",
  };

  const serverCalls = [{ id: "srv1", name: "http_request", arguments: {} }];
  const clientCalls = [{ id: "cli1", name: "Bash", arguments: { cmd: "ls" } }];
  const results = [{ id: "srv1", name: "http_request", result: { ok: true }, replayed: false }];

  const formatted = formatEscapeHatchResponse(
    response,
    serverCalls,
    results,
    clientCalls,
    "claude"
  );

  const content = (formatted as any).content as Array<{ type: string; id?: string }>;
  // Server tool_use removed, client tool_use kept.
  const toolUses = content.filter((b) => b.type === "tool_use");
  assert.equal(toolUses.length, 1);
  assert.equal(toolUses[0].id, "cli1");
  // stop_reason stays tool_use (mixed).
  assert.equal((formatted as any).stop_reason, "tool_use");
});

test("formatEscapeHatchResponse: Claude all-server — strip tool_use, append text, end_turn", async () => {
  const { formatEscapeHatchResponse } = await import("../../src/lib/skills/interception.ts");

  const response = {
    content: [{ type: "tool_use", id: "srv1", name: "http_request", input: {} }],
    stop_reason: "tool_use",
  };

  const serverCalls = [{ id: "srv1", name: "http_request", arguments: {} }];
  const results = [{ id: "srv1", name: "http_request", result: { ok: true }, replayed: false }];

  const formatted = formatEscapeHatchResponse(response, serverCalls, results, [], "claude");

  const content = (formatted as any).content as Array<{ type: string }>;
  const toolUses = content.filter((b) => b.type === "tool_use");
  assert.equal(toolUses.length, 0);
  const textBlocks = content.filter((b) => b.type === "text");
  assert.ok(textBlocks.length > 0);
  assert.equal((formatted as any).stop_reason, "end_turn");
});

test("formatEscapeHatchResponse: formatter does not call interceptToolCalls or any handler (purity)", async () => {
  const { formatEscapeHatchResponse } = await import("../../src/lib/skills/interception.ts");

  // Purity proof: the formatter is synchronous and its source must not contain
  // calls to interceptToolCalls, skillExecutor, or handler invocations.
  const fnSource = formatEscapeHatchResponse.toString();
  assert.ok(
    !fnSource.includes("interceptToolCalls"),
    "formatter source must not reference interceptToolCalls"
  );
  assert.ok(
    !fnSource.includes("skillExecutor"),
    "formatter source must not reference skillExecutor"
  );
  assert.ok(!fnSource.includes("await"), "formatter must be synchronous (no await)");

  // Also verify it returns immediately without side effects.
  const response = {
    choices: [
      {
        message: {
          content: null,
          tool_calls: [{ id: "srv1", function: { name: "http_request", arguments: "{}" } }],
        },
        finish_reason: "tool_calls",
      },
    ],
  };

  const result = formatEscapeHatchResponse(
    response,
    [{ id: "srv1", name: "http_request", arguments: {} }],
    [{ id: "srv1", name: "http_request", result: { ok: true }, replayed: false }],
    [],
    "openai"
  );

  assert.ok(result, "formatter returns a result");
  assert.ok(result.choices[0].message.content, "formatter populates content");
});

test("formatEscapeHatchResponse: Responses wrapper is byte-identical for function_call_output", async () => {
  const { formatEscapeHatchResponse } = await import("../../src/lib/skills/interception.ts");

  const response = {
    object: "response",
    output: [{ type: "function_call", call_id: "call1", name: "lookup@1.0.0", arguments: "{}" }],
  };

  const serverCalls = [{ id: "call1", name: "lookup@1.0.0", arguments: {} }];
  const results = [
    { id: "call1", name: "lookup@1.0.0", result: { record: "42" }, replayed: false },
  ];

  const formatted = formatEscapeHatchResponse(response, serverCalls, results, [], "openai");

  // Responses format: original output + function_call_output appended.
  const output = (formatted as any).output;
  assert.equal(output.length, 2);
  assert.equal(output[0].type, "function_call");
  assert.equal(output[1].type, "function_call_output");
  assert.equal(output[1].call_id, "call1");
});
