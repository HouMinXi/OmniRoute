import test, { describe, it, beforeEach } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { cleanupTempDataDir } from "../_setup/tempDataDir.ts";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-grok-bot-exec-"));
process.env.DATA_DIR = TEST_DATA_DIR;

const { GrokBotExecutor, setGrokBotTransportForTests, _grokBotInternals } = await import(
  "../../open-sse/executors/grok-bot.ts"
);

type WatchEvent = Record<string, unknown>;

type FakeTransport = {
  calls: { method: string; payload: Record<string, unknown> }[];
  rosterRows: Record<string, unknown>[];
  rosterEcho: boolean;
  discoveredTools: string[];
  lastAgentId: string;
  lastMessageId: string;
  failDelete: boolean;
  createBehavior: "ok" | "missing-agent" | "id-mismatch" | "wrong-harness" | "timeout";
  watchEvents: WatchEvent[];
};

function makeTransport(): FakeTransport {
  return {
    calls: [],
    rosterRows: [],
    rosterEcho: false,
    discoveredTools: ["bridge_value"],
    lastAgentId: "",
    lastMessageId: "",
    failDelete: false,
    createBehavior: "ok",
    watchEvents: [],
  };
}

function b64Row(clientNonce: string, answer: string) {
  return {
    rows: {
      entries: [
        {
          entryId: `entry-echo-${Math.random().toString(36).slice(2)}`,
          body: Buffer.from(
            JSON.stringify({
              requestId: "req-1",
              clientNonce,
              kind: "send-message",
              message: { type: "text", content: "user prompt echo" },
            })
          ).toString("base64"),
        },
        {
          entryId: `entry-${Math.random().toString(36).slice(2)}`,
          body: Buffer.from(
            JSON.stringify({
              requestId: "req-1",
              clientNonce: null,
              kind: "send-message",
              message: { type: "text", content: answer },
            })
          ).toString("base64"),
        },
      ],
    },
  };
}

function installTransport(t: FakeTransport) {
  setGrokBotTransportForTests({
    async rpc(method: string, payload: Record<string, unknown>) {
      t.calls.push({ method, payload });
      if (method === "CreateGrokBotTemporalAgent") {
        t.lastAgentId = String(payload.agentId);
        if (t.createBehavior === "timeout") {
          const e = new Error("The operation timed out.");
          e.name = "TimeoutError";
          throw e;
        }
        // Stub-side shape guards mirroring the live server contract (measured
        // 2026-09-23): harness must be the proto3 enum numeric form, and the
        // roster-display fields are required. Injecting the old shapes back
        // into the product code must turn these tests red.
        if (
          payload.harness !== 2 ||
          typeof payload.name !== "string" ||
          typeof payload.description !== "string" ||
          typeof payload.title !== "string" ||
          typeof payload.avatarShape !== "string" ||
          typeof payload.avatarColor !== "string" ||
          typeof payload.kickstartRequested !== "boolean" ||
          typeof payload.introductionSuppressed !== "boolean"
        ) {
          return {};
        }
        const agentId = payload.agentId;
        if (t.createBehavior === "missing-agent") return {};
        if (t.createBehavior === "id-mismatch")
          return { agent: { id: "row-x", legacyAgentId: "other", harness: "temporal" } };
        if (t.createBehavior === "wrong-harness")
          return { agent: { id: "row-x", legacyAgentId: agentId, harness: "persistent" } };
        // Live shape (measured 2026-09-23): client nonce echoes as legacyAgentId,
        // roster primary key lives in agent.id, harness echoes lowercase.
        return { agent: { id: "row-1", legacyAgentId: agentId, harness: "temporal" } };
      }
      if (method === "SendGrokBotUserMessage") {
        // Live contract: flat text + machineId + messageId + sentAtMs; the
        // nested message{} shape is rejected upstream.
        if (
          typeof payload.text !== "string" ||
          typeof payload.machineId !== "string" ||
          typeof payload.messageId !== "string" ||
          typeof payload.sentAtMs !== "string" ||
          payload.sessionId !== ""
        ) {
          throw new Error("SendGrokBotUserMessage invalid payload");
        }
        t.lastMessageId = String(payload.messageId);
        return { dispatched: true };
      }
      if (method === "DeleteGrokBotAgent") {
        if (t.failDelete) {
          return Promise.reject(new Error("upstream 500"));
        }
        return {};
      }
      if (method === "ListGrokBotAgents") {
        if (t.rosterEcho) {
          return { agents: [{ id: "row-9", agentId: t.lastAgentId }] };
        }
        return { agents: t.rosterRows };
      }
      if (method === "ListSandMcpTools") {
        return { tools: t.discoveredTools.map((name) => ({ name })) };
      }
      return {};
    },
    async *watch(method: string, payload: Record<string, unknown>) {
      t.calls.push({ method, payload });
      // Default: live-shaped frames (measured 2026-09-23). Overrides come from
      // t.watchEvents (compatibility paths) — a single `false` sentinel yields
      // nothing extra so tests can inject raw sequences.
      const cursor = (payload.cursors as Array<Record<string, unknown>> | undefined)?.[0];
      const agentId = cursor?.agentId;
      // Stub-side guard mirroring the live watch contract: cursors carry
      // generation + afterUpdatedSeq, and the two top-level fields exist.
      if (
        cursor?.generation !== 0 ||
        cursor?.afterUpdatedSeq !== "0" ||
        payload.includeUnlistedAgents !== false ||
        payload.inlineBodyMaxBytes !== 65536
      ) {
        throw new Error("WatchGrokBotTranscripts invalid payload");
      }
      if (t.watchEvents.length > 0) {
        for (const ev of t.watchEvents) yield ev;
        return;
      }
      if (typeof agentId !== "string") return;
      yield { agentState: { live: [{ agentId, isRunningTurn: true }] } };
      if (t.lastMessageId) {
        yield b64Row(t.lastMessageId, "answer");
        yield terminal("submit_answer", "answer");
      }
      yield { agentState: { live: [{ agentId, isRunningTurn: false }] } };
    },
  });
}

function makeInput(
  messages: unknown[],
  stream = false,
  signal?: AbortSignal,
  bridge?: { url: string; challenge: string }
) {
  return {
    model: "grok-bot",
    stream,
    body: {
      model: "grok-bot",
      messages,
      stream,
      grokBotBridge: bridge,
    },
    credentials: {
      accessToken: "at",
      refreshToken: "rt",
      connectionId: "conn-1",
    },
    signal: signal ?? null,
    log: null,
  };
}

function terminal(name: "submit_answer", content: string): WatchEvent {
  return { entry: { kind: "tool-call", tool: { name, callId: "submit-1", content } } };
}

function settledWatchEvents(answer: string): WatchEvent[] {
  // `agent` frames without agentId exercise the compatibility parsing path;
  // live-shaped agentState.live frames are covered by the default watch
  // generator in installTransport.
  return [
    { agent: { isRunningTurn: true } },
    { entry: { kind: "send-message", message: { type: "text", content: answer } } },
    terminal("submit_answer", answer),
    { agent: { isRunningTurn: false } },
  ];
}

describe("GrokBotExecutor", () => {
  let t: FakeTransport;
  let executor: InstanceType<typeof GrokBotExecutor>;

  beforeEach(() => {
    t = makeTransport();
    installTransport(t);
    _grokBotInternals.resetPendingCleanupsForTests();
    executor = new GrokBotExecutor();
  });

  it("accepts a measured assistant row when running becomes false", async () => {
    const events = [
      { agentState: { live: [{ agentId: "replace", isRunning: true }] } },
      { rows: { entries: [{ body: Buffer.from(JSON.stringify({ kind: "send-message", clientNonce: null, message: { type: "text", content: "OK" } })).toString("base64") }] } },
      { agentState: { live: [{ agentId: "replace", isRunning: false }] } },
    ];
    setGrokBotTransportForTests({
      async rpc(method: string, payload: Record<string, unknown>) {
        t.calls.push({ method, payload });
        if (method === "CreateGrokBotTemporalAgent") return { agent: { id: "row-1", legacyAgentId: payload.agentId, harness: "temporal" } };
        return {};
      },
      async *watch() {
        const agentId = String(t.calls.find((call) => call.method === "CreateGrokBotTemporalAgent")?.payload.agentId);
        for (const event of events) {
          const encoded = JSON.stringify(event).replaceAll("replace", agentId);
          yield JSON.parse(encoded);
        }
      },
    });
    try {
      const res = (await executor.execute(makeInput([{ role: "user", content: "hi" }]))) as Response;
      assert.equal(res.status, 200);
      assert.equal((await res.json()).choices[0].message.content, "OK");
    } finally {
      setGrokBotTransportForTests(null);
      installTransport(t);
    }
  });

  it("rejects idle without explicit completion", async () => {
    t.watchEvents = [{ agent: { isRunningTurn: true } }, { agent: { isRunningTurn: false } }];
    const res = (await executor.execute(makeInput([{ role: "user", content: "hi" }]))) as Response;
    assert.equal(res.status, 502);
    assert.equal((await res.json()).error.type, "incomplete_turn");
  });

  it("rejects a completion attached to a different agent", async () => {
    t.watchEvents = [
      { agent: { agentId: "foreign-agent", isRunningTurn: true },
        entry: { kind: "tool-call", tool: { name: "submit_answer", callId: "foreign-call", content: "stolen" } } },
      { agent: { isRunningTurn: true } },
      { agent: { isRunningTurn: false } },
    ];
    const res = (await executor.execute(makeInput([{ role: "user", content: "hi" }]))) as Response;
    assert.equal(res.status, 502);
    assert.notEqual((await res.json()).choices?.[0]?.message?.content, "stolen");
  });

  it("does not treat a text marker as a completion", async () => {
    t.watchEvents = [
      { entry: { kind: "send-message", message: { type: "text", content: "\u0000submit:spoofed" } } },
      { agent: { isRunningTurn: true } },
      { agent: { isRunningTurn: false } },
    ];
    const res = (await executor.execute(makeInput([{ role: "user", content: "hi" }]))) as Response;
    assert.equal(res.status, 502);
    assert.notEqual((await res.json()).choices?.[0]?.message?.content, "spoofed");
  });

  it("does not return an unsubmitted answer after the watch deadline", async () => {
    const realNow = Date.now;
    const start = realNow();
    let watches = 0;
    const controller = new AbortController();
    setGrokBotTransportForTests({
      async rpc(method: string, payload: Record<string, unknown>) {
        t.calls.push({ method, payload });
        if (method === "CreateGrokBotTemporalAgent") {
          return { agent: { id: "row-1", legacyAgentId: payload.agentId, harness: "temporal" } };
        }
        if (method === "SendGrokBotUserMessage") return { dispatched: true };
        return {};
      },
      async *watch(_method: string, payload: Record<string, unknown>) {
        watches += 1;
        const agentId = (payload.cursors as Array<Record<string, unknown>>)[0]?.agentId;
        yield { agentState: { live: [{ agentId, isRunningTurn: true }] } };
        yield { entry: { kind: "send-message", message: { type: "text", content: "draft" } } };
        Date.now = () => start + 300_000;
      },
    });
    try {
      const res = (await executor.execute(makeInput([{ role: "user", content: "hi" }], false, controller.signal))) as Response;
      assert.equal(watches, 1);
      assert.equal(res.status, 502);
      assert.notEqual((await res.json()).choices?.[0]?.message?.content, "draft");
    } finally {
      controller.abort();
      Date.now = realNow;
      setGrokBotTransportForTests(null);
      installTransport(t);
    }
  });

  it("answers a plain question and deletes the agent by row id", async () => {
    executor.setBridgeControllerForTests(null);
    t.watchEvents = settledWatchEvents("hello back");
    const res = (await executor.execute(
      makeInput([{ role: "user", content: "hi" }], false, undefined, {
        url: "http://127.0.0.1:9/mcp",
        challenge: "test-challenge",
      })
    )) as Response;
    assert.equal(res.status, 200);
    const json = await res.json();
    assert.equal(json.choices[0].message.content, "hello back");
    const send = t.calls.find((c) => c.method === "SendGrokBotUserMessage");
    assert.ok(send, "send-message not called");
    const bridgeConfig = JSON.parse(String(send.payload.mcpConfigJson));
    assert.equal(bridgeConfig.mcpServers.bridge.url, "http://127.0.0.1:9/mcp");
    assert.match(String(send.payload.text), /challenge test-challenge/);
    assert.match(String(send.payload.text), /returned value verbatim/);
    assert.match(String(send.payload.text), /TOOL_UNAVAILABLE/);
    assert.equal(
      t.calls.some((c) => c.method === "ListSandMcpTools"),
      true,
      "bridge request must discover tools before sending"
    );
    const discoveryIndex = t.calls.findIndex((c) => c.method === "ListSandMcpTools");
    const sendIndex = t.calls.findIndex((c) => c.method === "SendGrokBotUserMessage");
    assert.ok(discoveryIndex >= 0 && discoveryIndex < sendIndex);
    assert.equal(
      t.calls[discoveryIndex]?.payload.url,
      "http://127.0.0.1:9/mcp"
    );
  });

  it("returns the bridge tool result instead of the model text", async () => {
    executor.setBridgeControllerForTests({
      async start() {
        return {
          url: "https://bridge.example.test/mcp?nonce=result",
          call: () => "bridge-ok",
        };
      },
      async stop() {},
    });
    t.watchEvents = settledWatchEvents("model said something else");
    const res = (await executor.execute(
      makeInput([{ role: "user", content: "hi" }], false, undefined, {
        url: "http://127.0.0.1:9/mcp",
        challenge: "test-challenge",
      })
    )) as Response;
    assert.equal(res.status, 200);
    assert.equal((await res.json()).choices[0].message.content, "bridge-ok");
  });

  it("rejects a bridge call instead of returning the model text", async () => {
    executor.setBridgeControllerForTests({
      async start() {
        return {
          url: "https://bridge.example.test/mcp?nonce=reject",
          call() {
            throw new Error("Rejected challenge");
          },
        };
      },
      async stop() {},
    });
    t.watchEvents = settledWatchEvents("model said something else");
    const res = (await executor.execute(
      makeInput([{ role: "user", content: "hi" }], false, undefined, {
        url: "http://127.0.0.1:9/mcp",
        challenge: "wrong",
      })
    )) as Response;
    assert.equal(res.status, 502);
    assert.match(await res.text(), /bridge_rejected/);
  });

  it("reports a bridge tool that was not called", async () => {
    executor.setBridgeControllerForTests({
      async start() {
        return {
          url: "https://bridge.example.test/mcp?nonce=unused",
          call: () => "bridge-ok",
        };
      },
      async stop() {},
    });
    t.watchEvents = settledWatchEvents("TOOL_UNAVAILABLE");
    const res = (await executor.execute(
      makeInput([{ role: "user", content: "hi" }], false, undefined, {
        url: "http://127.0.0.1:9/mcp",
        challenge: "test-challenge",
      })
    )) as Response;
    assert.equal(res.status, 502);
    assert.match(await res.text(), /bridge_not_called/);
  });

  it("retries one new tunnel after the first tunnel fails", async () => {
    let starts = 0;
    executor.setBridgeControllerForTests({
      async start() {
        starts += 1;
        if (starts === 1) throw new Error("Tunnel unavailable");
        return {
          url: "https://bridge.example.test/mcp?nonce=retry",
          call: () => "bridge-ok",
        };
      },
      async stop() {},
    });
    t.watchEvents = settledWatchEvents("model text");
    const res = (await executor.execute(
      makeInput([{ role: "user", content: "hi" }], false, undefined, {
        url: "http://127.0.0.1:9/mcp",
        challenge: "test-challenge",
      })
    )) as Response;
    assert.equal(res.status, 200);
    assert.equal(starts, 2);
    assert.equal((await res.json()).choices[0].message.content, "bridge-ok");
  });

  it("does not start a third tunnel after two failures", async () => {
    let starts = 0;
    executor.setBridgeControllerForTests({
      async start() {
        starts += 1;
        throw new Error("Tunnel unavailable");
      },
      async stop() {},
    });
    const res = (await executor.execute(
      makeInput([{ role: "user", content: "hi" }], false, undefined, {
        url: "http://127.0.0.1:9/mcp",
        challenge: "test-challenge",
      })
    )) as Response;
    assert.equal(res.status, 502);
    assert.equal(starts, 2);
  });

  it("streams SSE chunks and terminates with [DONE]", async () => {
    t.watchEvents = settledWatchEvents("streamed answer");
    const res = (await executor.execute(makeInput([{ role: "user", content: "hi" }], true))) as Response;
    const text = await res.text();
    assert.match(text, /data: \{/);
    assert.match(text, /chat\.completion\.chunk/);
    assert.match(text, /data: \[DONE\]/);
  });

  it("stops the request bridge after the turn and does not send when start fails", async () => {
    const events: string[] = [];
    executor.setBridgeControllerForTests({
      async start() {
        events.push("start");
        return { url: "https://bridge.example.test/mcp?nonce=one" };
      },
      async stop() {
        events.push("stop");
      },
    });
    t.watchEvents = settledWatchEvents("hello back");
    try {
      const res = (await executor.execute(
        makeInput([{ role: "user", content: "hi" }], false, undefined, {
          url: "http://127.0.0.1:9/mcp",
          challenge: "test-challenge",
        })
      )) as Response;
      assert.equal(res.status, 200);
      assert.deepEqual(events, ["start", "stop"]);
      const started = t.calls.find((c) => c.method === "ListSandMcpTools");
      assert.equal(started?.payload.url, "https://bridge.example.test/mcp?nonce=one");
      const sent = t.calls.find((c) => c.method === "SendGrokBotUserMessage");
      const sentConfig = JSON.parse(String(sent?.payload.mcpConfigJson));
      assert.equal(sentConfig.mcpServers.bridge.url, "https://bridge.example.test/mcp?nonce=one");
      executor.setBridgeControllerForTests({
        async start() {
          return { url: "https://bridge.example.test/mcp" };
        },
        async stop() {},
      });
      const reused = (await executor.execute(
        makeInput([{ role: "user", content: "hi" }], false, undefined, {
          url: "http://127.0.0.1:9/mcp",
          challenge: "test-challenge",
        })
      )) as Response;
      assert.ok(reused.status >= 400);
      executor.setBridgeControllerForTests({
        async start() {
          return { url: "https://bridge.example.test/mcp?nonce=one" };
        },
        async stop() {},
      });
      const repeated = (await executor.execute(
        makeInput([{ role: "user", content: "hi" }], false, undefined, {
          url: "http://127.0.0.1:9/mcp",
          challenge: "test-challenge",
        })
      )) as Response;
      assert.ok(repeated.status >= 400);
      executor.setBridgeControllerForTests({
        async start() {
          return { url: "http://127.0.0.1:9/mcp" };
        },
        async stop() {
          events.push("stop-after-local");
        },
      });
      const local = (await executor.execute(
        makeInput([{ role: "user", content: "hi" }], false, undefined, {
          url: "http://127.0.0.1:9/mcp",
          challenge: "test-challenge",
        })
      )) as Response;
      assert.ok(local.status >= 400);
      assert.equal(events.includes("stop-after-local"), true);
      executor.setBridgeControllerForTests({
        async start() {
          throw new Error("bridge start failed");
        },
        async stop() {
          events.push("stop-after-failure");
        },
      });
      const failed = (await executor.execute(
        makeInput([{ role: "user", content: "hi" }], false, undefined, {
          url: "http://127.0.0.1:9/mcp",
          challenge: "test-challenge",
        })
      )) as Response;
      assert.ok(failed.status >= 400);
      assert.equal(
        t.calls.filter((c) => c.method === "SendGrokBotUserMessage").length,
        1
      );
      assert.equal(events.includes("stop-after-failure"), true);
      executor.setBridgeControllerForTests({
        async start() {
          return { url: "https://bridge.example.test/mcp?nonce=stop" };
        },
        async stop() {
          throw new Error("bridge stop failed");
        },
      });
      const stopFailed = (await executor.execute(
        makeInput([{ role: "user", content: "hi" }], false, undefined, {
          url: "http://127.0.0.1:9/mcp",
          challenge: "test-challenge",
        })
      )) as Response;
      assert.equal(stopFailed.status, 200);
      assert.equal(executor.bridgeLifecycleForTests().includes("stop-failed"), true);
    } finally {
      executor.setBridgeControllerForTests(null);
    }
  });

  it("uses the request bridge URL when no controller is injected", async () => {
    executor.setBridgeControllerForTests(null);
    t.watchEvents = settledWatchEvents("hello back");
    const res = (await executor.execute(
      makeInput([{ role: "user", content: "hi" }], false, undefined, {
        url: "http://127.0.0.1:9/mcp",
        challenge: "test-challenge",
      })
    )) as Response;
    assert.equal(res.status, 200);
    const started = t.calls.find((c) => c.method === "ListSandMcpTools");
    assert.equal(started?.payload.url, "http://127.0.0.1:9/mcp");
  });

  it("does not use another executor instance bridge controller", async () => {
    executor.setBridgeControllerForTests(null);
    let started = false;
    const other = new GrokBotExecutor();
    other.setBridgeControllerForTests({
      async start() {
        started = true;
        return { url: "http://127.0.0.1:9/mcp" };
      },
      async stop() {},
    });
    t.watchEvents = settledWatchEvents("hello back");
    const res = (await executor.execute(
      makeInput([{ role: "user", content: "hi" }], false, undefined, {
        url: "http://127.0.0.1:9/mcp",
        challenge: "test-challenge",
      })
    )) as Response;
    assert.equal(res.status, 200);
    assert.equal(started, false);
  });

  it("does not start a bridge controller for a plain request", async () => {
    let started = false;
    executor.setBridgeControllerForTests({
      async start() {
        started = true;
        return { url: "http://127.0.0.1:9/mcp" };
      },
      async stop() {},
    });
    t.watchEvents = settledWatchEvents("plain answer");
    try {
      const res = (await executor.execute(makeInput([{ role: "user", content: "hi" }]))) as Response;
      assert.equal(res.status, 200);
      assert.equal(started, false);
      assert.deepEqual(executor.bridgeLifecycleForTests(), []);
    } finally {
      executor.setBridgeControllerForTests(null);
    }
  });

  it("does not attach a bridge config unless the request bridge is required", async () => {
    t.watchEvents = settledWatchEvents("plain answer");
    const res = (await executor.execute(makeInput([{ role: "user", content: "hi" }]))) as Response;
    assert.equal(res.status, 200);
    const send = t.calls.find((c) => c.method === "SendGrokBotUserMessage");
    assert.ok(send, "send-message not called");
    assert.equal(send.payload.mcpConfigJson, undefined);
  });

  it("does not send when the request bridge URL is missing", async () => {
    const res = (await executor.execute(
      makeInput([{ role: "user", content: "hi" }], false, undefined, {
        url: "",
        challenge: "test-challenge",
      })
    )) as Response;
    assert.ok(res.status >= 400, `expected error status, got ${res.status}`);
    assert.equal(
      t.calls.some((c) => c.method === "SendGrokBotUserMessage"),
      false,
      "message must not be sent without a bridge URL"
    );
  });

  it("does not block a plain request when bridge discovery is marked missed", async () => {
    t.discoveredTools = [];
    t.watchEvents = settledWatchEvents("plain answer");
    const res = (await executor.execute(makeInput([{ role: "user", content: "hi" }]))) as Response;
    assert.equal(res.status, 200);
    assert.equal(
      t.calls.some((c) => c.method === "SendGrokBotUserMessage"),
      true,
      "plain request must still be sent"
    );
  });

  it("does not send a bridge config with a non-loopback URL", async () => {
    const res = (await executor.execute(
      makeInput([{ role: "user", content: "hi" }], false, undefined, {
        url: "https://example.invalid/mcp",
        challenge: "test-challenge",
      })
    )) as Response;
    assert.ok(res.status >= 400, `expected error status, got ${res.status}`);
    assert.equal(
      t.calls.some((c) => c.method === "SendGrokBotUserMessage"),
      false,
      "non-loopback bridge URL must not be sent"
    );
  });

  it("does not send a bridge request without a one-time challenge", async () => {
    const res = (await executor.execute(
      makeInput([{ role: "user", content: "hi" }], false, undefined, {
        url: "http://127.0.0.1:9/mcp",
        challenge: "",
      })
    )) as Response;
    assert.ok(res.status >= 400, `expected error status, got ${res.status}`);
    assert.equal(
      t.calls.some((c) => c.method === "SendGrokBotUserMessage"),
      false,
      "bridge request must not be sent without a challenge"
    );
  });

  it("does not send when the request bridge tool is not discovered", async () => {
    t.discoveredTools = [];
    const res = (await executor.execute(
      makeInput([{ role: "user", content: "hi" }], false, undefined, {
        url: "http://127.0.0.1:9/mcp",
        challenge: "test-challenge",
      })
    )) as Response;
    assert.ok(res.status >= 400, `expected error status, got ${res.status}`);
    assert.equal(
      t.calls.some((c) => c.method === "SendGrokBotUserMessage"),
      false,
      "message must not be sent when bridge discovery fails"
    );
  });

  for (const behavior of ["missing-agent", "id-mismatch", "wrong-harness"] as const) {
    it(`fails without sending a message when create returns ${behavior}`, async () => {
      t.createBehavior = behavior;
      const res = (await executor.execute(makeInput([{ role: "user", content: "hi" }]))) as Response;
      assert.ok(res.status >= 400, `expected error status, got ${res.status}`);
      assert.equal(
        t.calls.some((c) => c.method === "SendGrokBotUserMessage"),
        false,
        "message must not be sent on create failure"
      );
    });
  }

  it("queues a cleanup when create times out, then reconciles via roster on next call", async () => {
    t.createBehavior = "timeout";
    const res = (await executor.execute(makeInput([{ role: "user", content: "hi" }]))) as Response;
    assert.ok(res.status >= 400);
    assert.equal(_grokBotInternals.pendingCleanupCount(), 1);

    t.createBehavior = "ok";
    t.rosterEcho = true;
    t.watchEvents = settledWatchEvents("second try");
    const res2 = (await executor.execute(makeInput([{ role: "user", content: "again" }]))) as Response;
    assert.equal(res2.status, 200);
    const deletes = t.calls.filter((c) => c.method === "DeleteGrokBotAgent");
    assert.deepEqual(deletes[0].payload, { id: "row-9" });
    assert.equal(_grokBotInternals.pendingCleanupCount(), 0);
  });

  it("keeps the queue item when the roster call itself fails", async () => {
    t.createBehavior = "timeout";
    await executor.execute(makeInput([{ role: "user", content: "hi" }]));
    assert.equal(_grokBotInternals.pendingCleanupCount(), 1);
    t.createBehavior = "ok";
    setGrokBotTransportForTests({
      async rpc(method: string, payload: Record<string, unknown>) {
        t.calls.push({ method, payload });
        if (method === "CreateGrokBotTemporalAgent") {
          t.lastAgentId = String(payload.agentId);
          return {
            agent: { id: "row-1", legacyAgentId: payload.agentId, harness: "temporal" },
          };
        }
        if (method === "ListGrokBotAgents") throw new Error("network down");
        if (method === "DeleteGrokBotAgent") return {};
        return {};
      },
      async *watch() {
        for (const ev of settledWatchEvents("x")) yield ev;
      },
    });
    const res2 = (await executor.execute(makeInput([{ role: "user", content: "again" }]))) as Response;
    assert.equal(res2.status, 200);
    assert.equal(_grokBotInternals.pendingCleanupCount(), 1, "queue item must survive roster failure");
  });

  it("queues with row id when delete fails, and deletes directly next time", async () => {
    t.failDelete = true;
    t.watchEvents = settledWatchEvents("answer");
    const res = (await executor.execute(makeInput([{ role: "user", content: "hi" }]))) as Response;
    assert.equal(res.status, 200);
    assert.equal(_grokBotInternals.pendingCleanupCount(), 1);

    t.failDelete = false;
    t.watchEvents = settledWatchEvents("again");
    const before = t.calls.length;
    const res2 = (await executor.execute(makeInput([{ role: "user", content: "again" }]))) as Response;
    assert.equal(res2.status, 200);
    const rosterLookups = t.calls.slice(before).filter((c) => c.method === "ListGrokBotAgents");
    assert.equal(rosterLookups.length, 0, "row-id item must not need a roster lookup");
    const deletes = t.calls.slice(before).filter((c) => c.method === "DeleteGrokBotAgent");
    assert.deepEqual(deletes[0].payload, { id: "row-1" });
    assert.equal(_grokBotInternals.pendingCleanupCount(), 0);
  });

  it("replays full history into the outgoing prompt", async () => {
    t.watchEvents = settledWatchEvents("second answer");
    await executor.execute(makeInput([{ role: "user", content: "MARKER_abc" }]));
    t.watchEvents = settledWatchEvents("ok");
    await executor.execute(
      makeInput([
        { role: "user", content: "MARKER_abc" },
        { role: "assistant", content: "first answer" },
        { role: "user", content: "again" },
      ])
    );
    const sends = t.calls.filter((c) => c.method === "SendGrokBotUserMessage");
    const text = sends[1].payload.text;
    assert.ok(
      typeof text === "string" && text.includes("MARKER_abc"),
      "second prompt must contain first-turn content"
    );
  });

  it("treats an absent running flag as finished after seeing the agent run", async () => {
    t.watchEvents = [
      { agent: { isRunningTurn: true } },
      { entry: { kind: "send-message", message: { type: "text", content: "done" } } },
      terminal("submit_answer", "done"),
      { agent: {} },
    ];
    const res = (await executor.execute(makeInput([{ role: "user", content: "hi" }]))) as Response;
    assert.equal(res.status, 200);
  });

  it("threads the connection token into its own transport (no cross-request sharing)", async () => {
    // Regression test for review finding r5: the access token must reach the
    // transport via the factory parameter, never via shared module state, so
    // two concurrent requests with different tokens cannot clobber each other.
    const seenByToken: Record<string, string[]> = {};
    setGrokBotTransportForTests((accessToken: string) => {
      seenByToken[accessToken] = seenByToken[accessToken] ?? [];
      return {
        async rpc(method: string, payload: Record<string, unknown>) {
          seenByToken[accessToken].push(method);
          if (method === "CreateGrokBotTemporalAgent") {
            return {
              agent: { id: "row-1", legacyAgentId: String(payload.agentId), harness: "temporal" },
            };
          }
          if (method === "DeleteGrokBotAgent") return {};
          return {};
        },
        async *watch(_method: string, payload: Record<string, unknown>) {
          // Minimal live-shaped settlement so the turn ends promptly.
          const agentId = (payload.cursors as Array<Record<string, unknown>>)?.[0]?.agentId;
          yield { agentState: { live: [{ agentId, isRunningTurn: true }] } };
          yield { agentState: { live: [{ agentId, isRunningTurn: false }] } };
        },
      } as never;
    });
    const execA = new GrokBotExecutor();
    const execB = new GrokBotExecutor();
    const inputA = { ...makeInput([{ role: "user", content: "a" }]), credentials: { accessToken: "token-A", refreshToken: "r", connectionId: "cA" } };
    const inputB = { ...makeInput([{ role: "user", content: "b" }]), credentials: { accessToken: "token-B", refreshToken: "r", connectionId: "cB" } };
    await Promise.allSettled([execA.execute(inputA), execB.execute(inputB)]);
    assert.deepEqual(seenByToken["token-A"], [
      "CreateGrokBotTemporalAgent",
      "SendGrokBotUserMessage",
      "DeleteGrokBotAgent",
    ]);
    assert.deepEqual(seenByToken["token-B"], [
      "CreateGrokBotTemporalAgent",
      "SendGrokBotUserMessage",
      "DeleteGrokBotAgent",
    ]);
    setGrokBotTransportForTests(null);
    installTransport(t);
  });

  it("gives each executor instance its own machineId", async () => {
    const machines = new Set<string>();
    setGrokBotTransportForTests((_accessToken: string) => {
      return {
        async rpc(method: string, payload: Record<string, unknown>) {
          if (method === "CreateGrokBotTemporalAgent") {
            return { agent: { id: "row-1", legacyAgentId: payload.agentId, harness: "temporal" } };
          }
          if (method === "SendGrokBotUserMessage") {
            machines.add(String(payload.machineId));
            return { dispatched: true };
          }
          if (method === "DeleteGrokBotAgent") return {};
          return {};
        },
        async *watch(_method: string, payload: Record<string, unknown>) {
          const agentId = (payload.cursors as Array<Record<string, unknown>>)[0]?.agentId;
          yield { agentState: { live: [{ agentId, isRunningTurn: true }] } };
          yield { agentState: { live: [{ agentId, isRunningTurn: false }] } };
        },
      } as never;
    });
    const execA = new GrokBotExecutor();
    const execB = new GrokBotExecutor();
    await execA.execute(makeInput([{ role: "user", content: "a" }]));
    await execB.execute(makeInput([{ role: "user", content: "b" }]));
    assert.equal(machines.size, 2, "each executor instance must have a distinct machineId");
    setGrokBotTransportForTests(null);
    installTransport(t);
  });

  it("stream mode deletes the agent only after the SSE body finishes", async () => {
    // Regression test for review finding r7: the non-stream path deletes after
    // await collect, but the stream path used to delete in execute's finally
    // while the watch stream was still live.
    const events: string[] = [];
    let releaseTurn!: () => void;
    const gate = new Promise<void>((r) => {
      releaseTurn = r;
    });
    // Release the turn shortly after the watch starts; the assertion then
    // checks the delete landed after settlement regardless of chunk timing.
    const releaseTimer = setTimeout(() => releaseTurn(), 50);
    setGrokBotTransportForTests(() => ({
      async rpc(method: string, payload: Record<string, unknown>) {
        events.push(`rpc:${method}`);
        if (method === "CreateGrokBotTemporalAgent") {
          return { agent: { id: "row-1", legacyAgentId: String(payload.agentId), harness: "temporal" } };
        }
        if (method === "SendGrokBotUserMessage") return { dispatched: true };
        if (method === "DeleteGrokBotAgent") return {};
        return {};
      },
      async *watch(_method: string, payload: Record<string, unknown>) {
        const agentId = (payload.cursors as Array<Record<string, unknown>>)[0]?.agentId;
        events.push("watch:start");
        yield { agentState: { live: [{ agentId, isRunningTurn: true }] } };
        await gate;
        events.push("watch:settled");
        yield terminal("submit_answer", "streamed");
        yield { agentState: { live: [{ agentId, isRunningTurn: false }] } };
      },
    }) as never);
    const res = (await new GrokBotExecutor().execute(
      makeInput([{ role: "user", content: "hi" }], true)
    )) as Response;
    if (!res.body) {
      throw new Error("expected a readable SSE body");
    }
    const reader = res.body.getReader();
    const dec = new TextDecoder();
    let text = "";
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      text += dec.decode(value, { stream: true });
    }
    clearTimeout(releaseTimer);
    assert.match(text, /chat\.completion\.chunk/);
    assert.match(text, /data: \[DONE\]/);
    const delIdx = events.indexOf("rpc:DeleteGrokBotAgent");
    const settledIdx = events.indexOf("watch:settled");
    assert.ok(delIdx >= 0, "agent must be deleted");
    assert.ok(settledIdx >= 0, "watch must settle");
    assert.ok(
      delIdx > settledIdx,
      `delete (${delIdx}) must come after watch settled (${settledIdx}): ${JSON.stringify(events)}`
    );
    setGrokBotTransportForTests(null);
    installTransport(t);
  });

  it("drain keeps items enqueued mid-drain instead of overwriting them", async () => {
    // Regression test for review finding r8: the old writeQueue(remaining)
    // snapshot written after the delete loop silently dropped cleanup items
    // enqueued by a concurrent path while the drain was awaiting deletes.
    const queuePath = path.join(TEST_DATA_DIR, "grok-bot-pending-cleanups.json");
    const item1 = { connectionId: "conn-1", agentId: "agent-old", createdAt: "2026-09-23T00:00:00.000Z" };
    const item2 = { connectionId: "conn-1", agentId: "agent-mid", createdAt: "2026-09-23T00:00:01.000Z" };
    fs.writeFileSync(queuePath, JSON.stringify([item1]));
    let wrote = false;
    setGrokBotTransportForTests(() => ({
      async rpc(method: string, payload: Record<string, unknown>) {
        if (method === "ListGrokBotAgents") {
          if (!wrote) {
            wrote = true;
            // Simulate a concurrent enqueue landing mid-drain.
            fs.writeFileSync(queuePath, JSON.stringify([item1, item2]));
          }
          return { agents: [{ id: "row-9", agentId: item1.agentId }] };
        }
        if (method === "CreateGrokBotTemporalAgent") {
          return { agent: { id: "row-1", legacyAgentId: String(payload.agentId), harness: "temporal" } };
        }
        if (method === "SendGrokBotUserMessage") return { dispatched: true };
        if (method === "DeleteGrokBotAgent") return {};
        return {};
      },
      async *watch(_method: string, payload: Record<string, unknown>) {
        const agentId = (payload.cursors as Array<Record<string, unknown>>)[0]?.agentId;
        yield { agentState: { live: [{ agentId, isRunningTurn: true }] } };
        yield { entry: { kind: "send-message", message: { type: "text", content: "ok" } } };
        yield terminal("submit_answer", "ok");
        yield { agentState: { live: [{ agentId, isRunningTurn: false }] } };
      },
    }) as never);
    const res = (await executor.execute(makeInput([{ role: "user", content: "hi" }]))) as Response;
    assert.equal(res.status, 200);
    const remainingOnDisk = JSON.parse(fs.readFileSync(queuePath, "utf-8")) as Array<{ agentId?: string }>;
    assert.deepEqual(
      remainingOnDisk.map((i) => i.agentId),
      ["agent-mid"],
      "mid-drain enqueue must survive the drain"
    );
    setGrokBotTransportForTests(null);
    installTransport(t);
  });

  it("collects the assistant answer from live-shaped rows frames", async () => {
    // No watchEvents override: the default generator replays the measured
    // live shape (agentState.live running flags + base64 rows entries whose
    // clientNonce matches the send messageId).
    const res = (await executor.execute(makeInput([{ role: "user", content: "hi" }]))) as Response;
    assert.equal(res.status, 200);
    const json = await res.json();
    assert.equal(json.choices[0].message.content, "answer");
    const watchCall = t.calls.find((c) => c.method === "WatchGrokBotTranscripts");
    assert.ok(watchCall, "watch not called");
  });

  it("aborts the watch on cancel but still deletes the agent", async () => {
    const ac = new AbortController();
    t.watchEvents = [
      { agent: { agentId: "nonce-1", isRunningTurn: true } },
      { __abort: true },
    ];
    setGrokBotTransportForTests({
      async rpc(method: string, payload: Record<string, unknown>) {
        t.calls.push({ method, payload });
        if (method === "CreateGrokBotTemporalAgent") {
          t.lastAgentId = String(payload.agentId);
          queueMicrotask(() => ac.abort());
          return {
            agent: { id: "row-1", legacyAgentId: payload.agentId, harness: "temporal" },
          };
        }
        if (method === "DeleteGrokBotAgent") return {};
        if (method === "ListGrokBotAgents") return { agents: t.rosterRows };
        return {};
      },
      async *watch() {
        yield t.watchEvents[0];
        while (!ac.signal.aborted) {
          await new Promise((r) => setTimeout(r, 5));
        }
        throw new Error("aborted");
      },
    });
    const res = (await executor.execute(makeInput([{ role: "user", content: "hi" }], false, ac.signal))) as Response;
    assert.ok(res.status >= 400);
    assert.ok(
      t.calls.some((c) => c.method === "DeleteGrokBotAgent"),
      "agent must be deleted even when the turn is cancelled"
    );
  });

  it("stops a real request bridge controller after success and failure", async () => {
    const events: string[] = [];
    const { createRequestBridgeController } = await import("../../open-sse/executors/grok-bot.ts");
    let toolStopped = false;
    const controller = createRequestBridgeController(
      (command) => {
      events.push(command[0] ?? "");
      let ready = false;
      setTimeout(() => {
        ready = true;
      }, 20);
      return {
        command,
        output: () => (ready ? "ready https://safe-bridge.trycloudflare.com" : ""),
        async stop() {
          events.push("stop");
        },
      };
    }, async () => ({
      url: "http://127.0.0.1:9",
      call(challenge: string) {
        if (challenge !== "test-challenge") throw new Error("Rejected challenge");
        return "ok";
      },
      async stop() {
        toolStopped = true;
      },
    }));
    let seenChallenge = "";
    const challengeEvents: string[] = [];
    const challengeController = createRequestBridgeController(
      (command) => {
        challengeEvents.push(command[0] ?? "");
        return {
          command,
          output: () => "ready https://safe-bridge.trycloudflare.com",
          async stop() {},
        };
      },
      async (value) => {
        seenChallenge = value;
        let used = false;
        return {
          url: "http://127.0.0.1:9",
          call() {
            if (used) throw new Error("Repeat call rejected");
            used = true;
            return "ok";
          },
          async stop() {},
        };
      },
      "request-challenge"
    );
    const startedTool = await challengeController.start();
    assert.equal(seenChallenge, "request-challenge");
    assert.equal(startedTool.call?.("request-challenge"), "ok");
    assert.throws(() => startedTool.call?.("request-challenge"), /Repeat call rejected/);
    assert.deepEqual(challengeEvents, ["cloudflared"]);
    await challengeController.stop();
    executor.setBridgeControllerForTests(controller);
    t.watchEvents = settledWatchEvents("hello back");
    const ok = (await executor.execute(
      makeInput([{ role: "user", content: "hi" }], false, undefined, {
        url: "http://127.0.0.1:9/mcp",
        challenge: "test-challenge",
      })
    )) as Response;
    assert.equal(ok.status, 200);
    const started = t.calls.find((c) => c.method === "ListSandMcpTools");
    assert.match(String(started?.payload.url), /^https:\/\/safe-bridge\.trycloudflare\.com\/mcp\?nonce=/);
    assert.deepEqual(events, ["cloudflared", "stop"]);
    assert.equal(toolStopped, true);
    executor.setBridgeControllerForTests(
      createRequestBridgeController(() => ({
        command: [],
        output: () => "",
        async stop() {
          events.push("stop-invalid");
        },
      }), async () => ({
        url: "http://127.0.0.1:9",
        call: () => "ok",
        async stop() {},
      }))
    );
    const invalid = (await executor.execute(
      makeInput([{ role: "user", content: "hi" }], false, undefined, {
        url: "http://127.0.0.1:9/mcp",
        challenge: "test-challenge",
      })
    )) as Response;
    assert.ok(invalid.status >= 400);
    assert.equal(events.includes("stop-invalid"), true);
    const { requestBridgeTunnelCommand, publicBridgeUrlFromTunnelLog } = await import(
      "../../open-sse/executors/grok-bot.ts"
    );
    assert.deepEqual(requestBridgeTunnelCommand("http://127.0.0.1:9"), [
      "cloudflared",
      "tunnel",
      "--no-autoupdate",
      "--protocol",
      "http2",
      "--url",
      "http://127.0.0.1:9",
      "--http-host-header",
      "127.0.0.1:9",
    ]);
    assert.equal(
      publicBridgeUrlFromTunnelLog("ready https://safe-bridge.trycloudflare.com now"),
      "https://safe-bridge.trycloudflare.com"
    );
    const { startRequestBridgeProcess } = await import("../../open-sse/executors/grok-bot.ts");
    let killed = false;
    const process = await startRequestBridgeProcess(["cloudflared", "tunnel"], ((command, args) => ({
      command,
      args,
      stdout: { on(_event: string, listener: (chunk: string) => void) { listener("https://safe-bridge.trycloudflare.com"); } },
      stderr: { on() {} },
      kill() {
        killed = true;
      },
    })) as never);
    assert.equal(process.output(), "https://safe-bridge.trycloudflare.com");
    await process.stop();
    assert.equal(killed, true);
    const { startLocalBridgeToolServer } = await import("../../open-sse/executors/grok-bot.ts");
    const localTool = await startLocalBridgeToolServer("request-challenge");
    assert.equal(localTool.call("request-challenge"), "ok");
    assert.throws(() => localTool.call("request-challenge"), /Repeat call rejected/);
    await localTool.stop();
    const httpTool = await startLocalBridgeToolServer("request-challenge");
    const response = await fetch(httpTool.url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ challenge: "request-challenge" }),
    });
    assert.equal(response.status, 200);
    await httpTool.stop();
    let spawned = "";
    const defaultController = createRequestBridgeController((command) => {
      spawned = command[0] ?? "";
      return {
        command,
        output: () => "ready https://safe-bridge.trycloudflare.com",
        async stop() {},
      };
    });
    const startedDefault = await defaultController.start();
    assert.equal(spawned, "cloudflared");
    assert.match(startedDefault.url, /^https:\/\/safe-bridge\.trycloudflare\.com\/mcp\?nonce=/);
    await defaultController.stop();
    if (globalThis.process.env.GROK_BOT_REAL_TUNNEL === "1") {
      const real = createRequestBridgeController(async (command) => await startRequestBridgeProcess(command));
      const startedReal = await real.start();
      assert.match(startedReal.url, /^https:\/\/.+\.trycloudflare\.com\/mcp\?nonce=/);
      await real.stop();
    }
  });
});

test.after(async () => {
  await cleanupTempDataDir(TEST_DATA_DIR);
});
