"use client";
/** Fetches per-source task detail on drawer open + approve/cancel actions. */
import { useEffect, useState } from "react";
import type { OrchNode } from "../model/orchestrationTypes";

// Client-safe stand-in for sanitizeErrorMessage (server-only, breaks the client bundle — #10692): only our own `HTTP <status>` errors and AbortError pass through verbatim, everything else collapses to a generic string.
function toSafeErrorText(err: unknown): string {
  if (err instanceof Error) {
    if (/^HTTP \d{3}$/.test(err.message)) return err.message;
    if (err.name === "AbortError") return "Request cancelled";
  }
  return "Request failed";
}

interface SourceRoute {
  detailUrl: string | null;
  cancelReq: { url: string; init: RequestInit } | null;
  approveReq: { url: string; init: RequestInit } | null;
}

const TERMINAL_STATES = new Set(["succeeded", "failed", "cancelled"]);

function routeFor(node: OrchNode): SourceRoute {
  const post = (body?: unknown): RequestInit => ({
    method: "POST",
    ...(body
      ? { headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }
      : {}),
  });
  if (node.id.startsWith("cloud-agent:")) {
    const id = node.id.slice("cloud-agent:".length).replace(/:activity$/, "");
    const url = `/api/v1/agents/tasks/${encodeURIComponent(id)}`;
    return {
      detailUrl: url,
      cancelReq: { url, init: post({ action: "cancel" }) },
      approveReq: { url, init: post({ action: "approve" }) },
    };
  }
  if (node.id.startsWith("a2a:")) {
    const id = node.id.slice("a2a:".length);
    return {
      detailUrl: `/api/a2a/tasks/${encodeURIComponent(id)}`,
      cancelReq: { url: `/api/a2a/tasks/${encodeURIComponent(id)}/cancel`, init: post() },
      approveReq: null,
    };
  }
  if (node.id.startsWith("conductor:task:")) {
    const id = node.id.slice("conductor:task:".length);
    return {
      detailUrl: `/api/conductor/tasks/${encodeURIComponent(id)}`,
      cancelReq: { url: `/api/conductor/tasks/${encodeURIComponent(id)}/cancel`, init: post() },
      approveReq: null,
    };
  }
  return { detailUrl: null, cancelReq: null, approveReq: null }; // runners/overflow: raw only
}

/**
 * Unwraps a task-detail GET response to the actual task payload. Each source's
 * route has its own envelope — verified against the live handlers, not assumed:
 *   - cloud-agent (`GET /api/v1/agents/tasks/[id]`): `{ data: CloudAgentTask }`.
 *   - a2a (`GET /api/a2a/tasks/[id]`): `{ task: A2ATask }` — NOT `{ data }`. A
 *     generic `.data` fallback silently keeps the whole `{ task }` wrapper as
 *     `detail`, which every downstream `detail as A2ATask` read then crashes on
 *     (review r1 finding — `input`/`events`/`artifacts` all end up `undefined`).
 *   - conductor (`GET /api/conductor/tasks/[id]`): the task object itself, no
 *     envelope — `body.data` is `undefined` there so the generic fallback to
 *     `body` was already correct.
 */
function unwrapDetailBody(nodeId: string, body: unknown): unknown {
  const b = body as { data?: unknown; task?: unknown };
  if (nodeId.startsWith("a2a:")) return b.task ?? body;
  return b.data ?? body;
}

/** Derives approve/cancel availability from the route + node state. */
function deriveActionAvailability(route: SourceRoute | null, node: OrchNode | null) {
  const canApprove = !!route?.approveReq && node?.state === "waiting_approval";
  const isTerminal = !!node?.state && TERMINAL_STATES.has(node.state);
  const canCancel = !!route?.cancelReq && !!node?.state && !isTerminal;
  return { canApprove, canCancel };
}

/**
 * Resets `detail`/`error`/`isLoading` during render when the selected node
 * identity changes — React's documented "adjust state when a prop changes"
 * idiom, kept out of the fetch effect below (see `useFetchDetail`).
 */
function useSyncedNodeIdentity(
  node: OrchNode | null,
  route: SourceRoute | null,
  setDetail: (d: unknown | null) => void,
  setError: (e: string | null) => void,
  setIsLoading: (b: boolean) => void
) {
  const [syncedId, setSyncedId] = useState<string | undefined>(undefined);
  if (node?.id !== syncedId) {
    setSyncedId(node?.id);
    setDetail(node?.raw ?? null);
    setError(null);
    setIsLoading(!!(node && route?.detailUrl));
  }
}

/**
 * Fetches the detail payload for `node` whenever its id changes; aborts on
 * unmount/change. Kept as a pure "subscribe to node.id, fetch, setState from
 * the async .then/.catch callbacks" shape with no synchronous setState call
 * in its body, so it lints clean under `react-hooks/set-state-in-effect` with
 * zero suppressions (same technique as the dashboard/cli-code and
 * dashboard/settings react-hooks compiler-rule batches on this release, #12146).
 */
function useFetchDetail(
  node: OrchNode | null,
  route: SourceRoute | null,
  setDetail: (d: unknown | null) => void,
  setError: (e: string | null) => void,
  setIsLoading: (b: boolean) => void
) {
  useEffect(() => {
    if (!node || !route?.detailUrl) return;
    const controller = new AbortController();
    fetch(route.detailUrl, { signal: controller.signal, cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((body) => setDetail(unwrapDetailBody(node.id, body)))
      .catch((err) => {
        if (!controller.signal.aborted) setError(toSafeErrorText(err));
      })
      .finally(() => setIsLoading(false));
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- keyed by node identity
  }, [node?.id]);
}

async function performAction(
  req: { url: string; init: RequestInit } | null,
  setError: (e: string | null) => void
): Promise<boolean> {
  if (!req) return false;
  try {
    const res = await fetch(req.url, req.init);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return true;
  } catch (err) {
    setError(toSafeErrorText(err));
    return false;
  }
}

export function useDrawerDetail(node: OrchNode | null) {
  const [detail, setDetail] = useState<unknown | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const route = node ? routeFor(node) : null;

  useSyncedNodeIdentity(node, route, setDetail, setError, setIsLoading);
  useFetchDetail(node, route, setDetail, setError, setIsLoading);

  const { canApprove, canCancel } = deriveActionAvailability(route, node);

  return {
    detail,
    isLoading,
    error,
    canApprove,
    canCancel,
    approve: () => performAction(route?.approveReq ?? null, setError),
    cancel: () => performAction(route?.cancelReq ?? null, setError),
  };
}
