import { readFileSync } from "node:fs";
import { apiFetch, isServerUp } from "../api.mjs";
import { mcpCallTool } from "../mcpClient.mjs";
import { emit } from "../output.mjs";
import { t } from "../i18n.mjs";

function truncate(v, len = 60) {
  if (v == null) return "-";
  const s = String(v);
  return s.length > len ? s.slice(0, len - 1) + "…" : s;
}

const VALID_MCP_TRANSPORTS = ["stdio", "sse", "streamable-http"];

const mcpToolSchema = [
  { key: "name", header: "Tool", width: 36 },
  {
    key: "scopes",
    header: "Scopes",
    formatter: (v) => (Array.isArray(v) ? v.join(",") : (v ?? "-")),
  },
  { key: "auditLevel", header: "Audit", width: 10 },
  { key: "phase", header: "Phase", width: 6 },
  { key: "description", header: "Description", formatter: truncate },
];

export function registerMcp(program) {
  const mcp = program.command("mcp").description(t("mcp.title"));

  mcp
    .command("status")
    .description("Show MCP server status")
    .option("--json", "Output as JSON")
    .action(async (opts, cmd) => {
      const globalOpts = cmd.parent.optsWithGlobals();
      const exitCode = await runMcpStatusCommand({ ...opts, output: globalOpts.output });
      if (exitCode !== 0) process.exit(exitCode);
    });

  mcp
    .command("restart")
    .description("Restart the MCP server")
    .action(async (opts, cmd) => {
      const globalOpts = cmd.parent.optsWithGlobals();
      const exitCode = await runMcpRestartCommand({ ...opts, output: globalOpts.output });
      if (exitCode !== 0) process.exit(exitCode);
    });

  mcp
    .command("enable")
    .description(t("mcp.enable.description"))
    .option("--transport <transport>", t("mcp.enable.transport"))
    .action(async (opts, cmd) => {
      const globalOpts = cmd.parent.optsWithGlobals();
      const exitCode = await runMcpEnableCommand({ ...opts, output: globalOpts.output });
      if (exitCode !== 0) process.exit(exitCode);
    });

  mcp
    .command("disable")
    .description(t("mcp.disable.description"))
    .action(async (opts, cmd) => {
      const globalOpts = cmd.parent.optsWithGlobals();
      const exitCode = await runMcpDisableCommand({ ...opts, output: globalOpts.output });
      if (exitCode !== 0) process.exit(exitCode);
    });

  // 5.1 — mcp call + mcp scopes
  mcp
    .command("call <tool> [argsJson]")
    .description(t("mcp.call.description"))
    .option("--args <json>", t("mcp.call.args"))
    .option("--args-file <path>", t("mcp.call.args_file"))
    .option("--stream", t("mcp.call.stream"))
    .option("--scope <s>", t("mcp.call.scope"), (v, prev = []) => [...prev, v], [])
    .action(async (tool, argsPositional, opts, cmd) => {
      const globalOpts = cmd.optsWithGlobals();
      // Commander always fills the global --timeout with its default ("30000").
      // Drop that so apiFetch can still honour OMNIROUTE_HTTP_TIMEOUT_MS when
      // the flag was not passed; an explicit --timeout (source "cli") wins.
      const callGlobals =
        cmd.getOptionValueSourceWithGlobals("timeout") === "default"
          ? { ...globalOpts, timeout: undefined }
          : globalOpts;
      const args = opts.args
        ? JSON.parse(opts.args)
        : opts.argsFile
          ? JSON.parse(readFileSync(opts.argsFile, "utf8"))
          : argsPositional
            ? JSON.parse(argsPositional)
            : {};

      const exitCode = await runMcpCallCommand(
        tool,
        args,
        {
          ...opts,
          stream: opts.stream,
        },
        callGlobals
      );

      if (exitCode !== 0) process.exit(exitCode);
    });

  mcp
    .command("scopes")
    .description(t("mcp.scopes.description"))
    .option("--tool <name>", t("mcp.scopes.tool"))
    .action(async (opts, cmd) => {
      const params = new URLSearchParams({ meta: "scopes" });
      if (opts.tool) params.set("tool", opts.tool);
      const res = await apiFetch(`/api/mcp/tools?${params}`);
      if (!res.ok) {
        process.stderr.write(`Error: ${res.status}\n`);
        process.exit(1);
      }
      const data = await res.json();
      emit(data.scopes ?? data, cmd.optsWithGlobals());
    });
}

// Node's setTimeout cannot represent longer delays: it truncates them to 1ms.
export const MAX_TIMEOUT_MS = 2_147_483_647;

/**
 * Parse an explicit --timeout value for mcp call.
 *
 * - missing → undefined (apiFetch then uses OMNIROUTE_HTTP_TIMEOUT_MS, else 30s)
 * - exactly "0" → 0: no client-side deadline (intentional; unlike
 *   OMNIROUTE_HTTP_TIMEOUT_MS=0, which apiFetch treats as unset → 30s)
 * - a canonical positive integer (no sign, no leading zeros, no surrounding
 *   whitespace) → milliseconds, clamped to MAX_TIMEOUT_MS so a "very long"
 *   timeout never turns into an immediate 1ms abort
 * - anything else (blank, " 50 ", "00", "007", "abc", "-1", "300ms", "1e3", "0.5")
 *   → { invalid: true }: the caller warns and falls back like a missing value;
 *   it never disables the timeout
 */
const CANONICAL_TIMEOUT_MS = /^(0|[1-9]\d*)$/;

export function resolveMcpCallTimeoutMs(raw) {
  if (raw == null) return { timeout: undefined, invalid: false };
  const s = String(raw);
  if (!CANONICAL_TIMEOUT_MS.test(s)) return { timeout: undefined, invalid: true };
  return { timeout: Math.min(Number(s), MAX_TIMEOUT_MS), invalid: false };
}

/**
 * `mcp call` entry point. Protocol + transport live in mcpClient.mjs
 * (`mcpCallTool`); this wrapper only formats the result for the terminal
 * and maps failures to exit codes.
 */
export async function runMcpCallCommand(tool, args, opts = {}, globalOpts = {}) {
  if (opts.scope?.length) {
    // Scopes come from the server-side credential, never from the client.
    process.stderr.write("Warning: --scope is ignored by mcp call and will be removed.\n");
  }
  // --timeout is a global option (string from commander). Precedence when it
  // is unset or invalid: OMNIROUTE_HTTP_TIMEOUT_MS, then apiFetch's 30s default.
  // The deadline covers each request until its response starts; a --stream
  // body is not cut off by it.
  const rawTimeout = globalOpts.timeout;
  const { timeout, invalid } = resolveMcpCallTimeoutMs(rawTimeout);
  if (invalid) {
    process.stderr.write(
      `Warning: invalid --timeout ${JSON.stringify(String(rawTimeout))}; ` +
        "using OMNIROUTE_HTTP_TIMEOUT_MS or the 30000ms default.\n"
    );
  }
  try {
    const result = await mcpCallTool(tool, args, {
      stream: Boolean(opts.stream),
      timeout,
      baseUrl: globalOpts.baseUrl,
      apiKey: globalOpts.apiKey,
      context: globalOpts.context,
    });

    if (opts.stream) {
      // mcpCallTool already wrote SSE chunks to stdout.
      return 0;
    }

    const content = result?.content;
    if (content) {
      for (const item of content) {
        if (item.type === "text") {
          process.stdout.write(item.text + "\n");
        } else if (item.type === "resource") {
          process.stdout.write(JSON.stringify(item.resource) + "\n");
        } else {
          process.stdout.write(JSON.stringify(item) + "\n");
        }
      }
    } else if (result != null) {
      process.stdout.write(JSON.stringify(result, null, 2) + "\n");
    }
    return 0;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    process.stderr.write(`${message}\n`);
    return 1;
  }
}

export async function runMcpStatusCommand(opts = {}) {
  const serverUp = await isServerUp();
  if (!serverUp) {
    console.error(t("common.serverOffline"));
    return 1;
  }

  try {
    const res = await apiFetch("/api/mcp/status", {
      retry: false,
      timeout: 5000,
      acceptNotOk: true,
    });
    if (!res.ok) {
      console.log(t("mcp.stopped"));
      console.log(t("mcp.stoppedHint"));
      return 0;
    }

    const status = await res.json();

    if (opts.json || opts.output === "json") {
      console.log(JSON.stringify(status, null, 2));
      return 0;
    }

    const transport = status.transport || "stdio";
    const online = status.online ?? status.running;
    console.log(online ? t("mcp.running", { transport }) : t("mcp.stopped"));
    if (!online && status.enabled === false) {
      console.log(t("mcp.stoppedHint"));
    }
    if (status.toolsCount !== undefined) console.log(`  Tools: ${status.toolsCount}`);
    if (status.scopes?.length) {
      console.log("  Scopes:");
      for (const scope of status.scopes) console.log(`    - ${scope}`);
    }
    return 0;
  } catch (err) {
    console.error(t("common.error", { message: err instanceof Error ? err.message : String(err) }));
    return 1;
  }
}

export async function runMcpRestartCommand(opts = {}) {
  const serverUp = await isServerUp();
  if (!serverUp) {
    console.error(t("common.serverOffline"));
    return 1;
  }

  try {
    const res = await apiFetch("/api/mcp/restart", {
      method: "POST",
      retry: false,
      timeout: 10000,
      acceptNotOk: true,
    });
    if (res.ok) {
      console.log(t("mcp.restarted"));
      return 0;
    }
    const body = await res.json().catch(() => null);
    const message = body?.error || `HTTP ${res.status}`;
    console.error(t("common.error", { message }));
    return 1;
  } catch (err) {
    console.error(t("common.error", { message: err instanceof Error ? err.message : String(err) }));
    return 1;
  }
}

export async function runMcpEnableCommand(opts = {}) {
  const serverUp = await isServerUp();
  if (!serverUp) {
    console.error(t("common.serverOffline"));
    return 1;
  }

  if (opts.transport && !VALID_MCP_TRANSPORTS.includes(opts.transport)) {
    console.error(
      t("common.error", {
        message: `Invalid transport '${opts.transport}'. Valid: ${VALID_MCP_TRANSPORTS.join(", ")}`,
      })
    );
    return 1;
  }

  try {
    const body = { mcpEnabled: true };
    if (opts.transport) body.mcpTransport = opts.transport;

    const res = await apiFetch("/api/settings", {
      method: "PATCH",
      body,
      retry: false,
      acceptNotOk: true,
    });
    if (!res.ok) {
      console.error(t("common.error", { message: `HTTP ${res.status}` }));
      return 1;
    }
    console.log(t("mcp.enabled"));
    return 0;
  } catch (err) {
    console.error(t("common.error", { message: err instanceof Error ? err.message : String(err) }));
    return 1;
  }
}

export async function runMcpDisableCommand(opts = {}) {
  const serverUp = await isServerUp();
  if (!serverUp) {
    console.error(t("common.serverOffline"));
    return 1;
  }

  try {
    const res = await apiFetch("/api/settings", {
      method: "PATCH",
      body: { mcpEnabled: false },
      retry: false,
      acceptNotOk: true,
    });
    if (!res.ok) {
      console.error(t("common.error", { message: `HTTP ${res.status}` }));
      return 1;
    }
    console.log(t("mcp.disabled"));
    return 0;
  } catch (err) {
    console.error(t("common.error", { message: err instanceof Error ? err.message : String(err) }));
    return 1;
  }
}
