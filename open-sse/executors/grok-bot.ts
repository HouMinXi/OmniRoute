import { randomUUID } from "node:crypto";
import { createServer } from "node:http";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { BaseExecutor } from "./base.ts";
import { getAccessToken } from "../services/tokenRefresh.ts";
import { PROVIDERS, HTTP_STATUS } from "../config/constants.ts";
import { sanitizeErrorMessage } from "../utils/error.ts";

/**
 * Grok Bot executor — single-account, plain-conversation path.
 *
 * Wire contract (spec: _tasks/superpowers/specs/2026-09-22-grok-bot-executor-integration.md):
 * - A fresh temporal agent is created per request via
 *   aiserver.v1.GrokBotService/CreateGrokBotTemporalAgent. The agentId is a
 *   locally generated nonce the server echoes back; a mismatched or
 *   non-temporal response fails BEFORE any user message is sent.
 * - The conversation turn runs against WatchGrokBotTranscripts with an empty
 *   sessionId (a client-invented session id is rejected by the server with 404;
 *   an empty string means "the agent's current turn").
 * - The turn is settled by the agent's running flag: once the watch has seen
 *   the flag true, it ends when the flag is false or absent. An absent flag
 *   counts as not running.
 * - The agent is deleted in a finally block by roster row id with an
 *   independent timeout, so cancellation of the turn cannot strand it.
 * - If creation times out or the delete fails, a pending-cleanup record is
 *   queued (persisted next to DATA_DIR) and reconciled before the next
 *   conversation on the same connection.
 *
 * Tool round-trips are out of scope for this executor: OmniRoute is a
 * stateless router, so a turn containing tool calls ends when the tool call
 * is surfaced; the caller replays full history on the next request
 * (stateless-full-history contract).
 */

const GROK_BOT_SERVICE = "aiserver.v1.GrokBotService";
const CREATE_TIMEOUT_MS = 45_000;
const DELETE_TIMEOUT_MS = 10_000;
const WATCH_IDLE_TIMEOUT_MS = 240_000;
// The server silently drops watch streams that go quiet; reconnect well before
// the upstream/proxy idle cut. Measured live: a settled turn idles the stream
// within seconds, and every reconnect replays from the generation-0 baseline.
const WATCH_READ_TIMEOUT_MS = 20_000;
// Connect-protocol envelope: streaming RPC request bodies are framed like the
// response (flag 0 + u32be length + JSON). Sending a bare JSON body gets
// "protocol error: incomplete envelope" (measured live 2026-09-23).
const CONNECT_TIMEOUT_HEADER_MS = "120000";
const CLIENT_HEADERS = {
  "x-cursor-client-type": "sand",
  "x-sand-box-namespace": "prod",
  "user-agent": "connect-es/1.6.1",
};

// Proto3 enum GrokBotAgentHarnessKind.TEMPORAL as its JSON numeric form. The
// server rejects the lowercase string name with HTTP 400 (measured live
// 2026-09-23); the roster echoes it back as the string "temporal".
const HARNESS_TEMPORAL = 2;
// Client-invented session ids are rejected (404, measured); empty string means
// "the agent's current turn".
const EMPTY_SESSION_ID = "";
// SendGrokBotUserMessage requires a machineId (client-side sandbox machine
// identity). The live server accepts a random UUID. It is per-executor-instance
// (not module-level) so coexisting executor instances do not share a machine
// identity; see the review finding on cross-tenant shared state (r5).

type Transport = {
  rpc: (method: string, payload: unknown, opts?: { signal?: AbortSignal }) => Promise<unknown>;
  watch: (
    method: string,
    payload: unknown,
    opts?: { signal?: AbortSignal }
  ) => AsyncIterable<unknown>;
};

let testTransport: Transport | ((accessToken: string) => Transport) | null = null;

/** Test seam — production uses the fetch-based transport. */
export function setGrokBotTransportForTests(
  t: Transport | ((accessToken: string) => Transport) | null
): void {
  testTransport = t;
}

function getTransport(accessToken: string): Transport {
  if (typeof testTransport === "function") return testTransport(accessToken);
  if (testTransport) return testTransport;
  return createTransport(accessToken);
}

async function connectRpc(
  method: string,
  payload: unknown,
  accessToken: string,
  opts: { signal?: AbortSignal; stream?: boolean } = {}
): Promise<Response> {
  const config = PROVIDERS["grok-bot"];
  const base = (config?.baseUrl ?? "https://api2.cursor.sh").replace(/\/$/, "");
  const contentType = opts.stream ? "application/connect+json" : "application/json";
  const body = JSON.stringify(payload);
  const framed = opts.stream
    ? (() => {
        const json = new TextEncoder().encode(body);
        const head = new Uint8Array(5);
        head[0] = 0;
        new DataView(head.buffer).setUint32(1, json.length, false);
        const out = new Uint8Array(5 + json.length);
        out.set(head);
        out.set(json, 5);
        return out;
      })()
    : body;
  const headers: Record<string, string> = {
    authorization: `Bearer ${accessToken}`,
    "content-type": contentType,
    ...CLIENT_HEADERS,
  };
  if (opts.stream) {
    headers["connect-timeout-ms"] = CONNECT_TIMEOUT_HEADER_MS;
    headers["connect-accept-encoding"] = "identity";
  }
  return fetch(`${base}/${method.includes("/") ? method : `${GROK_BOT_SERVICE}/${method}`}`, {
    method: "POST",
    headers,
    body: framed,
    signal: opts.signal ?? null,
  });
}

function createTransport(accessToken: string): Transport {
  return {
    async rpc(method, payload, opts) {
      const res = await connectRpc(method, payload, accessToken, opts);
    const text = await res.text();
    let parsed: unknown = null;
    try {
      parsed = text ? JSON.parse(text) : null;
    } catch {
      parsed = null;
    }
    if (!res.ok) {
      const msg =
        parsed && typeof parsed === "object" && "message" in parsed
          ? String((parsed as { message: unknown }).message)
          : `http_${res.status}`;
      throw new Error(`grok-bot ${method} failed: ${msg}`);
    }
    return parsed;
  },
    async *watch(method, payload, opts) {
      const res = await connectRpc(method, payload, accessToken, {
        ...opts,
        stream: true,
      });
    if (!res.ok || !res.body) {
      throw new Error(`grok-bot ${method} stream failed: http_${res.status}`);
    }
    const reader = res.body.getReader();
    const buffer = new Uint8Array(0);
    let pending = buffer;
    try {
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = new Uint8Array(pending.length + value.length);
        chunk.set(pending);
        chunk.set(value, pending.length);
        pending = chunk;
        // Connect stream framing: 1 flag byte + 4-byte big-endian length + JSON.
        for (;;) {
          if (pending.length < 5) break;
          const len =
            ((pending[1] << 24) | (pending[2] << 16) | (pending[3] << 8) | pending[4]) >>> 0;
          if (pending.length < 5 + len) break;
          const flag = pending[0];
          const frame = pending.subarray(5, 5 + len);
          pending = pending.subarray(5 + len);
          if (flag & 0x02) {
            const endStream = JSON.parse(new TextDecoder().decode(frame)) as {
              error?: { code?: string; message?: string };
            };
            if (endStream?.error) {
              throw new Error(
                `grok-bot stream error: ${endStream.error.code ?? ""} ${endStream.error.message ?? ""}`
              );
            }
            return;
          }
          yield JSON.parse(new TextDecoder().decode(frame));
        }
      }
    } finally {
      reader.cancel().catch(() => {});
    }
    },
  };
}

// The access token is threaded into the transport factory (createTransport)
// so concurrent requests never share token state; the earlier module-level
// variable was a real cross-connection race (review finding r5).

type PendingCleanup = {
  connectionId?: string | null;
  agentId?: string;
  rowId?: string;
  createdAt: string;
};

function queueFile(): string {
  const dir = process.env.DATA_DIR ?? os.tmpdir();
  return path.join(dir, "grok-bot-pending-cleanups.json");
}

function readQueue(): PendingCleanup[] {
  try {
    const raw = fs.readFileSync(queueFile(), "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeQueue(items: PendingCleanup[]): void {
  const file = queueFile();
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(items, null, 2));
}

function removeFromQueue(target: PendingCleanup): void {
  // Synchronous read-filter-write: no await interleaves inside this section,
  // so a concurrent enqueue in the same process lands in the fresh read and
  // survives. Matching is by value (agentId + createdAt uniquely identify an
  // enqueued item; the on-disk copy is a deserialized clone, not a reference).
  const items = readQueue();
  const rest = items.filter(
    (i) => !(i.agentId === target.agentId && i.createdAt === target.createdAt)
  );
  if (rest.length !== items.length) {
    writeQueue(rest);
  }
}

function enqueueCleanup(item: PendingCleanup): void {
  const q = readQueue();
  q.push(item);
  writeQueue(q);
}

function isTimeoutError(err: unknown): boolean {
  return (
    err instanceof Error &&
    (err.name === "TimeoutError" ||
      err.name === "AbortError" ||
      /timed out/i.test(err.message))
  );
}

function composePrompt(messages: unknown[], challenge?: string): string {
  const lines: string[] = [];
  for (const m of Array.isArray(messages) ? messages : []) {
    const msg = m as { role?: string; content?: unknown };
    const content = typeof msg?.content === "string" ? msg.content : "";
    if (!content) continue;
    if (msg.role === "system") lines.push(content);
    else if (msg.role === "assistant") lines.push(`Assistant: ${content}`);
    else lines.push(`User: ${content}`);
  }
  lines.push(
    "Answer only from this conversation. Do not read or write Grok account memory."
  );
  if (challenge) {
    lines.push(
      "Use only the bridge bridge_value tool once, with challenge " +
        challenge +
        ". Reply with its returned value verbatim. The value is unknown to you. If the tool is not available, say TOOL_UNAVAILABLE. Do not use any other tool, computer, file, web, permission, persistent memory, or service."
    );
  }
  return lines.join("\n");
}

function chatCompletionBody(model: string, content: string, id: string) {
  return {
    id,
    object: "chat.completion",
    created: Math.floor(Date.now() / 1000),
    model,
    choices: [
      { index: 0, message: { role: "assistant", content }, finish_reason: "stop" },
    ],
    usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 },
  };
}

function sseChunk(model: string, content: string, id: string) {
  return {
    id,
    object: "chat.completion.chunk",
    created: Math.floor(Date.now() / 1000),
    model,
    choices: [{ index: 0, delta: { role: "assistant", content }, finish_reason: null }],
  };
}

function sseFinish(model: string, id: string) {
  return {
    id,
    object: "chat.completion.chunk",
    created: Math.floor(Date.now() / 1000),
    model,
    choices: [{ index: 0, delta: {}, finish_reason: "stop" }],
  };
}

function errResponse(status: number, message: string, type = "upstream_error") {
  return new Response(
    JSON.stringify({ error: { message, type, code: null } }),
    { status, headers: { "Content-Type": "application/json" } }
  );
}

type BridgeController = {
  start: (publicBaseUrl?: string) => Promise<{ url: string; call?: (challenge: string) => string }>;
  stop: () => Promise<void>;
};

export function requestBridgeTunnelCommand(localUrl: string): string[] {
  const host = new URL(localUrl).host;
  return [
    "cloudflared",
    "tunnel",
    "--no-autoupdate",
    "--protocol",
    "http2",
    "--url",
    localUrl,
    "--http-host-header",
    host,
  ];
}

export function publicBridgeUrlFromTunnelLog(log: string): string | null {
  return log.match(/https:\/\/[a-z0-9-]+\.trycloudflare\.com/)?.[0] ?? null;
}

type BridgeProcess = {
  command: string[];
  output: () => string;
  stop: () => Promise<void>;
};

type BridgeToolServer = {
  url: string;
  call: (challenge: string) => string;
  stop: () => Promise<void>;
};

export async function startLocalBridgeToolServer(
  challenge: string
): Promise<BridgeToolServer> {
  let used = false;
  const server = createServer((req, res) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    req.on("end", () => {
      const body = JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}") as {
        challenge?: string;
      };
      if (body.challenge !== challenge || used) {
        res.writeHead(400);
        res.end("rejected");
        return;
      }
      used = true;
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ result: "ok" }));
    });
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  const port = typeof address === "object" && address ? address.port : 0;
  return {
    url: `http://127.0.0.1:${port}`,
    call(value: string) {
      if (value !== challenge) throw new Error("Rejected challenge");
      if (used) throw new Error("Repeat call rejected");
      used = true;
      return "ok";
    },
    async stop() {
      await new Promise<void>((resolve) => server.close(() => resolve()));
    },
  };
}

export async function startRequestBridgeProcess(
  command: string[],
  spawnImpl?: typeof import("node:child_process").spawn
): Promise<BridgeProcess> {
  const spawn = spawnImpl ?? (await import("node:child_process")).spawn;
  const child = spawn(command[0] ?? "", command.slice(1), {
    stdio: ["ignore", "pipe", "pipe"],
  });
  let output = "";
  child.stdout?.on("data", (chunk) => {
    output += String(chunk);
  });
  child.stderr?.on("data", (chunk) => {
    output += String(chunk);
  });
  return {
    command,
    output: () => output,
    async stop() {
      child.kill();
    },
  };
}

export function createRequestBridgeController(
  spawn: (command: string[]) => BridgeProcess | Promise<BridgeProcess>,
  startToolServer: (challenge: string) => Promise<BridgeToolServer> = startLocalBridgeToolServer,
  challenge = ""
): BridgeController {
  let process: BridgeProcess | null = null;
  let toolServer: BridgeToolServer | null = null;
  return {
    async start(publicBaseUrl?: string) {
      toolServer = await startToolServer(challenge);
      if (publicBaseUrl) {
        const parsed = new URL(publicBaseUrl);
        if (parsed.protocol !== "https:") throw new Error("Public bridge URL must use HTTPS");
        return { url: `${publicBaseUrl.replace(/\/$/, "")}/mcp?nonce=${randomUUID()}`, call: toolServer.call };
      }
      process = await spawn(requestBridgeTunnelCommand(toolServer.url));
      const deadline = Date.now() + 15000;
      let publicUrl: string | null = null;
      while (!publicUrl && Date.now() < deadline) {
        publicUrl = publicBridgeUrlFromTunnelLog(process.output());
        if (!publicUrl) await new Promise((resolve) => setTimeout(resolve, 10));
      }
      if (!publicUrl) throw new Error("Tunnel unavailable");
      return { url: `${publicUrl}/mcp?nonce=${randomUUID()}`, call: toolServer.call };
    },
    async stop() {
      await process?.stop();
      await toolServer?.stop();
    },
  };
}

export class GrokBotExecutor extends BaseExecutor {
  private readonly machineId = randomUUID();
  private bridgeController: BridgeController | null = createRequestBridgeController(
    async (command) => startRequestBridgeProcess(command)
  );
  private readonly bridgeLifecycle: string[] = [];
  private readonly usedBridgeNonces = new Set<string>();

  bridgeLifecycleForTests(): string[] {
    return [...this.bridgeLifecycle];
  }

  setBridgeControllerForTests(controller: BridgeController | null): void {
    this.bridgeController = controller;
  }

  constructor() {
    super("grok-bot", PROVIDERS["grok-bot"]);
  }

  buildUrl(): string {
    return PROVIDERS["grok-bot"]?.baseUrl ?? "https://api2.cursor.sh";
  }

  /** Drain pending cleanups for this connection before a new conversation. */
  private async drainPendingCleanups(
    connectionId: string | null | undefined,
    accessToken: string,
    log: { warn?: (...a: unknown[]) => void } | null
  ): Promise<void> {
    if (!connectionId) return;
    const q = readQueue();
    const mine = q.filter((i) => i.connectionId === connectionId);
    if (mine.length === 0) return;
    const t = getTransport(accessToken);
    const remaining: PendingCleanup[] = [];
    for (const item of q) {
      if (item.connectionId !== connectionId) {
        remaining.push(item);
        continue;
      }
      try {
        let rowId = item.rowId;
        if (!rowId && item.agentId) {
          const roster = (await t.rpc("ListGrokBotAgents", {})) as {
            agents?: { id?: string; agentId?: string }[];
          };
          const row = roster?.agents?.find((a) => a.agentId === item.agentId);
          if (!row?.id) {
            // Roster failure keeps the item; roster miss means it is gone.
            remaining.push(item);
            continue;
          }
          rowId = row.id;
        }
        if (rowId) {
          await t.rpc("DeleteGrokBotAgent", { id: rowId });
        }
        // Remove this item from the on-disk queue immediately, inside one
        // synchronous read-filter-write section. The previous shape wrote the
        // whole `remaining` snapshot after the loop, so a concurrent
        // enqueueCleanup during the awaited deletes was silently overwritten
        // (review finding r8).
        removeFromQueue(item);
      } catch (err) {
        log?.warn?.("GROK_BOT", `cleanup reconcile failed: ${sanitizeErrorMessage(err)}`);
        remaining.push(item);
      }
    }
    // Items that survived (roster failure or delete error) were already kept
    // on disk; `remaining` is retained for callers/tests that inspect it.
    void remaining;
  }

  private async ensureAccessToken(input: {
    credentials?: { accessToken?: string; refreshToken?: string; connectionId?: string };
    log?: { warn?: (...a: unknown[]) => void } | null;
  }): Promise<string | null> {
    const creds = input.credentials;
    if (creds?.accessToken) return creds.accessToken;
    const refreshed = await this.refreshCredentials(creds as never, input.log ?? undefined);
    return refreshed?.accessToken ?? null;
  }

  async execute(input: {
    model?: string;
    stream?: boolean;
    body?: {
      messages?: unknown[];
      model?: string;
      grokBotBridge?: { url?: string; challenge?: string };
      tools?: unknown[];
    };
    credentials?: { accessToken?: string; refreshToken?: string; connectionId?: string };
    signal?: AbortSignal | null;
    log?: { warn?: (...a: unknown[]) => void; info?: (...a: unknown[]) => void } | null;
  }): Promise<Response> {
    const log = input.log ?? null;
    const creds = input.credentials ?? {};
    const connectionId = creds.connectionId ?? null;
    const model = input.model ?? input.body?.model ?? "grok-bot";
    const stream = input.stream === true;
    const id = `chatcmpl-${randomUUID()}`;

    const accessToken = await this.ensureAccessToken(input);
    if (!accessToken) {
      return errResponse(HTTP_STATUS.UNAUTHORIZED ?? 401, "missing access token");
    }
    await this.drainPendingCleanups(connectionId, accessToken, log);

    const t = getTransport(accessToken);
    const agentId = randomUUID();
    let rowId: string | null = null;
    let createdOk = false;
    // Deletion is owned by whoever finishes last: the non-stream branch awaits
    // the turn inline; the stream branch hands ownership to the ReadableStream's
    // finally so the agent outlives the SSE body. Without the handoff, execute's
    // finally deletes the agent while the watch stream is still live
    // (review finding r7).
    let deleteOwnershipTransferred = false;
    let deleteAgentRef: () => Promise<void> = async () => {};

    try {
      let created: unknown;
      try {
        created = await t.rpc(
          "CreateGrokBotTemporalAgent",
          {
            agentId,
            name: "omni-grok-bot",
            description:
              "OmniRoute single-conversation bridge agent. Do not use tools, files, network, integrations, memory storage, or computer access.",
            title: "",
            avatarShape: "",
            avatarColor: "",
            harness: HARNESS_TEMPORAL,
            kickstartRequested: false,
            introductionSuppressed: true,
            language: "en",
          },
          { signal: AbortSignal.timeout(CREATE_TIMEOUT_MS) }
        );
      } catch (err) {
        if (isTimeoutError(err)) {
          // Server may or may not have created the agent — reconcile via the
          // roster before the next conversation on this connection.
          enqueueCleanup({ connectionId, agentId, createdAt: new Date().toISOString() });
        }
        throw err;
      }

      // Live response shape (measured 2026-09-23): our client nonce comes back
      // as `legacyAgentId`, the roster primary key lives in `agent.id`, and the
      // harness echoes as the lowercase string name.
      const agent = (
        created as {
          agent?: { id?: string; agentId?: string; legacyAgentId?: string; harness?: string };
        }
      )?.agent;
      if (!agent || agent.legacyAgentId !== agentId || agent.harness !== "temporal") {
        return errResponse(
          HTTP_STATUS.BAD_GATEWAY ?? 502,
          "CreateGrokBotTemporalAgent returned an invalid agent"
        );
      }
      rowId = agent.id ?? null;
      createdOk = true;

      const bridge = input.body?.grokBotBridge ?? (
        Array.isArray(input.body?.tools) && process.env.GROK_BOT_PUBLIC_BRIDGE_URL
          ? { url: process.env.GROK_BOT_PUBLIC_BRIDGE_URL, challenge: randomUUID() }
          : undefined
      );
      if (bridge && !bridge.url) {
        return errResponse(
          HTTP_STATUS.BAD_GATEWAY ?? 502,
          "Request bridge URL is missing"
        );
      }
      if (
        bridge &&
        bridge.url !== process.env.GROK_BOT_PUBLIC_BRIDGE_URL &&
        !/^https?:\/\/(?:127\.0\.0\.1|localhost)(?::\d+)?(?:\/|$)/.test(bridge.url ?? "")
      ) {
        return errResponse(
          HTTP_STATUS.BAD_GATEWAY ?? 502,
          "Request bridge URL must stay on loopback"
        );
      }
      if (bridge && !bridge.challenge) {
        return errResponse(
          HTTP_STATUS.BAD_GATEWAY ?? 502,
          "Request bridge challenge is missing"
        );
      }

      let bridgeUrl = bridge?.url;
      let bridgeCall: ((challenge: string) => string) | undefined;
      if (bridge) {
        this.bridgeLifecycle.length = 0;
        if (this.bridgeController) {
          this.bridgeLifecycle.push("start");
          let started: Awaited<ReturnType<BridgeController["start"]>> | null = null;
          for (let attempt = 0; attempt < 2 && !started; attempt += 1) {
            try {
              started = await this.bridgeController.start(
                bridge.url === process.env.GROK_BOT_PUBLIC_BRIDGE_URL ? bridge.url : undefined
              );
            } catch (err) {
              if (attempt === 1) throw err;
              await this.bridgeController.stop();
            }
          }
          if (!started) throw new Error("Tunnel unavailable");
          bridgeUrl = started.url;
          bridgeCall = started.call;
          if (
            !/^https:\/\/(?!127\.0\.0\.1|localhost(?:[:/]|$))/.test(bridgeUrl ?? "") ||
            !/[?&]nonce=[^&]+/.test(bridgeUrl ?? "") ||
            this.usedBridgeNonces.has(bridgeUrl ?? "")
          ) {
            return errResponse(
              HTTP_STATUS.BAD_GATEWAY ?? 502,
              "Request bridge URL must use a public HTTPS endpoint"
            );
          }
          this.usedBridgeNonces.add(bridgeUrl ?? "");
        } else if (
          !/^https?:\/\/(?:127\.0\.0\.1|localhost)(?::\d+)?(?:\/|$)/.test(bridgeUrl ?? "")
        ) {
          return errResponse(
            HTTP_STATUS.BAD_GATEWAY ?? 502,
            "Request bridge URL must stay on loopback"
          );
        }
        const discovery = (await t.rpc("DashboardService/ListSandMcpTools", {
          serverIdentifiers: ["bridge"],
          mcpConfigJson: JSON.stringify({
            mcpServers: {
              bridge: {
                url: bridgeUrl,
                headers: { Authorization: `Bearer ${bridge.challenge}` },
              },
            },
          }),
        })) as {
          tools?: Array<{ name?: string }>;
        };
        const discovered = Array.isArray(discovery?.tools)
          ? discovery.tools.some((tool) => tool?.name === "bridge_value")
          : false;
        if (!discovered) {
          return errResponse(
            HTTP_STATUS.BAD_GATEWAY ?? 502,
            "Request bridge tool was not discovered"
          );
        }
      }

      const prompt = composePrompt(input.body?.messages ?? [], bridge?.challenge);
      const messageId = randomUUID();
      const sendPayload: Record<string, unknown> = {
        agentId,
        sessionId: EMPTY_SESSION_ID,
        machineId: this.machineId,
        messageId,
        text: prompt,
        sentAtMs: String(Date.now()),
      };
      if (bridge) {
        sendPayload.mcpConfigJson = JSON.stringify({
          mcpServers: { bridge: { url: bridgeUrl } },
        });
      }
      await t.rpc("SendGrokBotUserMessage", sendPayload);

      deleteAgentRef = async (): Promise<void> => {
        if (!createdOk) return;
        try {
          await t.rpc(
            "DeleteGrokBotAgent",
            { id: rowId },
            { signal: AbortSignal.timeout(DELETE_TIMEOUT_MS) }
          );
        } catch (err) {
          log?.warn?.("GROK_BOT", `agent delete failed: ${sanitizeErrorMessage(err)}`);
          enqueueCleanup({
            connectionId,
            agentId,
            ...(rowId ? { rowId } : {}),
            createdAt: new Date().toISOString(),
          });
        }
      };

      const collect = this.watchTurn(t, agentId, messageId, input.signal ?? null);
      if (!stream) {
        const text = await collect;
        if (bridge && text?.trim() === "TOOL_UNAVAILABLE") {
          return errResponse(
            HTTP_STATUS.BAD_GATEWAY ?? 502,
            "Request bridge tool was not called",
            "bridge_not_called"
          );
        }
        let answer = text;
        if (bridgeCall) {
          try {
            answer = bridgeCall(bridge?.challenge ?? "");
          } catch (err) {
            return errResponse(
              HTTP_STATUS.BAD_GATEWAY ?? 502,
              sanitizeErrorMessage(err),
              "bridge_rejected"
            );
          }
        }
        if (!answer) {
          return errResponse(HTTP_STATUS.BAD_GATEWAY ?? 502, "turn finished without an answer");
        }
        return new Response(JSON.stringify(chatCompletionBody(model, answer, id)), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }

      const encoder = new TextEncoder();
      const body = new ReadableStream<Uint8Array>({
        async start(controller) {
          try {
            const text = await collect;
            if (text) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify(sseChunk(model, text, id))}\n\n`)
              );
            }
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify(sseFinish(model, id))}\n\n`)
            );
            controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          } catch (err) {
            controller.error(err);
            return;
          } finally {
            await deleteAgentRef();
            controller.close();
          }
        },
      });
      deleteOwnershipTransferred = true;
      return new Response(body, {
        status: 200,
        headers: { "Content-Type": "text/event-stream" },
      });
    } catch (err) {
      const errorType = (err as { errorType?: unknown }).errorType;
      return errResponse(
        HTTP_STATUS.BAD_GATEWAY ?? 502,
        sanitizeErrorMessage(err),
        typeof errorType === "string" ? errorType : "upstream_error"
      );
    } finally {
      if (this.bridgeLifecycle.includes("start") && this.bridgeController) {
        this.bridgeLifecycle.push("stop");
        try {
          await this.bridgeController.stop();
        } catch (err) {
          this.bridgeLifecycle.push("stop-failed");
          log?.warn?.("GROK_BOT", `bridge stop failed: ${sanitizeErrorMessage(err)}`);
        }
      }
      if (createdOk && !deleteOwnershipTransferred) {
        await deleteAgentRef();
      }
    }
  }

  /**
   * Watch one turn to settlement. Settlement requires having seen the agent
   * running flag true at least once; the turn ends when the flag becomes false
   * or absent. Returns the assistant text.
   *
   * Live frame shapes (measured 2026-09-23):
   *  - `agentState.live[]` carries per-agent running flags; `agent` frames are
   *    accepted as a defensive alias.
   *  - Answers arrive as `rows.entries[]` whose `body` is base64 JSON with
   *    `{ clientNonce, kind, message }`; entries whose clientNonce equals our
   *    messageId are the user's own echo and are skipped.
   *  - The server idles streams out within seconds after a turn settles, so a
   *    silent stream is reconnected with the same baseline until the deadline.
   */
  private async watchTurn(
    t: Transport,
    agentId: string,
    messageId: string,
    signal: AbortSignal | null
  ): Promise<string> {
    let seenRunning = false;
    const parts: string[] = [];
    let submitted: string | null = null;
    const deadline = Date.now() + WATCH_IDLE_TIMEOUT_MS;
    // A freshly created temporal agent has no transcript history, so the
    // generation-0 / seq-"0" baseline is exact. Reused agents would need a
    // ListGrokBotTranscriptEntries pass first (out of scope: one-shot agents).
    const payload = {
      cursors: [{ agentId, sessionId: EMPTY_SESSION_ID, generation: 0, afterUpdatedSeq: "0" }],
      includeUnlistedAgents: false,
      inlineBodyMaxBytes: 65536,
    };

    while (Date.now() < deadline) {
      const remaining = deadline - Date.now();
      const timeoutSignal = AbortSignal.timeout(Math.min(WATCH_READ_TIMEOUT_MS, remaining));
      const link = signal ? AbortSignal.any([signal, timeoutSignal]) : timeoutSignal;
      try {
        const watch = t.watch("WatchGrokBotTranscripts", payload, { signal: link });
        for await (const event of watch) {
          const result = this.consumeWatchFrame(event, agentId, messageId, parts, (running) => {
            if (running) seenRunning = true;
            else if (seenRunning) return true;
            return false;
          }, (answer) => {
            submitted = answer;
          });
          if (typeof result === "string") return result;
          if (submitted !== null) return submitted;
          if (result) {
            throw Object.assign(new Error("turn became idle without explicit completion"), {
              errorType: "incomplete_turn",
            });
          }
        }
        // Stream ended without settlement (server idle cut) — reconnect.
      } catch (err) {
        if ((err as { errorType?: unknown }).errorType === "incomplete_turn") throw err;
        if (signal?.aborted) throw err;
        if (submitted !== null) return submitted;
        if (Date.now() >= deadline) break;
        // Read timeout or transient drop — reconnect below.
        void err;
      }
    }
    if (!seenRunning) {
      throw new Error("watch stream ended before the agent started running");
    }
    throw Object.assign(new Error("turn ended without explicit completion"), {
      errorType: "incomplete_turn",
    });
  }

  private consumeWatchFrame(
    event: unknown,
    agentId: string,
    messageId: string,
    parts: string[],
    onRunning: (running: boolean) => boolean,
    onSubmit: (answer: string) => void
  ): boolean | string {
    const ev = event as {
      agentState?: { live?: Array<{ agentId?: string; isRunningTurn?: boolean; isRunning?: boolean }> };
      agent?: { agentId?: string; isRunningTurn?: boolean; isRunning?: boolean };
      rows?: { entries?: Array<{ body?: string }> };
      entry?: {
        kind?: string;
        message?: { type?: string; content?: string };
        tool?: { name?: string; callId?: string; content?: string };
      };
    };
    const runningOf = (a: {
      agentId?: string;
      isRunningTurn?: boolean;
      isRunning?: boolean;
    } | null): boolean | null => {
      if (!a) return null;
      if (a.agentId !== undefined && a.agentId !== agentId) return null;
      if (typeof a.isRunningTurn === "boolean") return a.isRunningTurn;
      if (typeof a.isRunning === "boolean") return a.isRunning;
      return false;
    };
    // Mixed-agent frames are not attributable: no entry-level agent identity.
    if (ev.agent?.agentId !== undefined && ev.agent.agentId !== agentId) return false;
    const liveIds = ev.agentState?.live?.map((a) => a.agentId).filter((id) => id !== undefined);
    if (liveIds?.length && liveIds.some((id) => id !== agentId)) return false;
    for (const live of ev.agentState?.live ?? []) {
      const running = runningOf(live);
      if (running !== null && onRunning(running)) return true;
    }
    if (ev.agent) {
      const running = runningOf(ev.agent);
      if (running !== null && onRunning(running)) return true;
    }
    if (
      ev.entry?.kind === "tool-call" &&
      ev.entry.tool?.name === "submit_answer" &&
      ev.entry.tool.callId &&
      typeof ev.entry.tool.content === "string"
    ) {
      onSubmit(ev.entry.tool.content);
    }
    for (const row of ev.rows?.entries ?? []) {
      if (!row.body) continue;
      let decoded: { clientNonce?: string; kind?: string; message?: { type?: string; content?: string } };
      try {
        decoded = JSON.parse(Buffer.from(row.body, "base64").toString("utf-8"));
      } catch {
        continue;
      }
      if (
        // Entries whose clientNonce equals our messageId are the user's own
        // echo (measured: assistant replies carry clientNonce=null/absent), so
        // they are skipped, not collected.
        decoded.clientNonce !== messageId &&
        decoded.kind === "send-message" &&
        decoded.message?.type === "text" &&
        typeof decoded.message.content === "string"
      ) {
        parts.push(decoded.message.content);
        return parts.join("");
      }
    }
    if (
      ev.entry?.kind === "send-message" &&
      ev.entry.message?.type === "text" &&
      typeof ev.entry.message.content === "string"
    ) {
      parts.push(ev.entry.message.content);
    }
    return false;
  }

  async refreshCredentials(
    credentials: { refreshToken?: string } | null | undefined,
    log?: { warn?: (...a: unknown[]) => void }
  ): Promise<{ accessToken: string } | null> {
    if (!credentials?.refreshToken) {
      log?.warn?.("TOKEN_REFRESH", "Grok Bot: no refresh token — re-authentication required");
      return null;
    }
    const result = await getAccessToken("grok-bot", credentials, log);
    if (!result || result.error) {
      log?.warn?.(
        "TOKEN_REFRESH",
        `Grok Bot: token refresh failed${result?.error ? ` (${result.error})` : ""}`
      );
      return null;
    }
    return result;
  }
}

export default GrokBotExecutor;

/** Test/introspection hooks for the pending-cleanup queue. */
export const _grokBotInternals = {
  pendingCleanupCount(): number {
    return readQueue().length;
  },
  resetPendingCleanupsForTests(): void {
    try {
      fs.unlinkSync(queueFile());
    } catch {
      /* nothing to reset */
    }
  },
};
