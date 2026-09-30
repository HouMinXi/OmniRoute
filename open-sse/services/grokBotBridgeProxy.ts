import {
  BRIDGE_NONCE_PATTERN,
  BRIDGE_PROXY_TIMEOUT_MS,
  challengeMatches,
  type BridgeTurnEntry,
  type GrokBotBridgeRegistry,
} from "./grokBotBridgeRegistry";

/**
 * Public bridge proxy pipeline (frozen spec 2026-09-28, fable r20 PASS,
 * "Public Route" section). One MCP request per call; the route handler in
 * src/app/grok-bridge/[nonce]/mcp/route.ts is a thin wrapper around this.
 *
 * Pipeline order (earlier steps short-circuit later ones; the registry is
 * never touched before step 2 and no slot is consumed before step 5):
 *   1. nonce shape re-check (the route segment matcher already enforces it)
 *   2. registry lookup in active -> active-close -> tombstone order
 *   3. state check: over cap -> 404; closed or expired -> 410
 *   4. constant-time challenge check -> 404 (indistinguishable from unknown)
 *   5. atomic slot reservation (one of 8); exhausted -> 410/404 by cap
 *   6. single monotonic deadline from reservation; body read capped at
 *      1 MiB + 1 byte -> 413, deadline -> 504, whichever fires first
 *   7. proxy to the registered loopback port under the remaining budget;
 *      deadline -> 504
 *   8. upstream unreachable or response over 1 MiB -> 502
 * Reserved slots are consumed exactly once and never refunded, whatever
 * the outcome. Errors are sanitized JSON with no stack traces.
 */

export const BRIDGE_BODY_LIMIT_BYTES = 1024 * 1024;

export class BridgeBodyTooLargeError extends Error {}
export class BridgeDeadlineError extends Error {}

/**
 * Monotonic clock for deadline math. Wall-clock (Date.now) is vulnerable to
 * NTP step adjustments: a backward jump would extend the proxy deadline past
 * the registered budget, a forward jump would 504 healthy requests. The
 * performance clock is monotone and free of both failure modes.
 */
function nowMs(): number {
  return performance.now();
}

function jsonError(status: number, code: string): Response {
  return Response.json({ error: code }, { status });
}

function bearerToken(headers: Headers): string | null {
  const value = headers.get("authorization");
  if (!value || !value.startsWith("Bearer ")) return null;
  return value.slice("Bearer ".length);
}

function corsHeaders(): Headers {
  const headers = new Headers();
  headers.set("access-control-allow-methods", "POST, OPTIONS");
  headers.set("access-control-allow-headers", "authorization, content-type");
  return headers;
}

export function handleGrokBridgeOptions(): Response {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

export function handleGrokBridgeMethodNotAllowed(): Response {
  return new Response(null, { status: 405, headers: { allow: "POST, OPTIONS" } });
}

/**
 * Race one promise against a deadline timer. The timer is always cleared,
 * and whichever rejects first wins: a body-limit throw beats a not-yet-fired
 * timer, a fired timer beats a still-pending read.
 */
function withDeadline<T>(promise: Promise<T>, remainingMs: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    if (remainingMs <= 0) {
      reject(new BridgeDeadlineError());
      return;
    }
    const timer = setTimeout(() => reject(new BridgeDeadlineError()), remainingMs);
    // A never-settling race must not hold the event loop for the whole
    // remaining deadline during teardown.
    timer.unref?.();
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      }
    );
  });
}

async function readBodyCapped(request: Request, deadline: number): Promise<Buffer> {
  if (!request.body) return Buffer.alloc(0);
  const reader = request.body.getReader();
  const chunks: Buffer[] = [];
  let total = 0;
  try {
    for (;;) {
      const { done, value } = await withDeadline(reader.read(), deadline - nowMs());
      if (done) break;
      total += value.byteLength;
      if (total > BRIDGE_BODY_LIMIT_BYTES) {
        // Stop at 1 MiB plus one byte: the upload is aborted and never
        // proxied, and the slot stays consumed.
        throw new BridgeBodyTooLargeError();
      }
      chunks.push(Buffer.from(value));
    }
  } finally {
    reader.releaseLock();
  }
  return Buffer.concat(chunks);
}

async function readResponseCapped(response: Response, deadline: number): Promise<Buffer> {
  if (!response.body) return Buffer.alloc(0);
  const reader = response.body.getReader();
  const chunks: Buffer[] = [];
  let total = 0;
  try {
    for (;;) {
      const { done, value } = await withDeadline(reader.read(), deadline - nowMs());
      if (done) break;
      total += value.byteLength;
      if (total > BRIDGE_BODY_LIMIT_BYTES) {
        // An upstream response body over 1 MiB is answered as sanitized 502.
        throw new BridgeBodyTooLargeError();
      }
      chunks.push(Buffer.from(value));
    }
  } finally {
    reader.releaseLock();
  }
  return Buffer.concat(chunks);
}

export interface GrokBridgePostInput {
  request: Request;
  /** Path and query to forward to the local server (from the public URL). */
  upstreamPath: string;
  nonce: string;
  registry: GrokBotBridgeRegistry;
  /** Test seam for the 30-second proxy deadline. */
  timeoutMs?: number;
}

export async function handleGrokBridgePost(input: GrokBridgePostInput): Promise<Response> {
  const { request, upstreamPath, nonce, registry } = input;
  const timeoutMs = input.timeoutMs ?? BRIDGE_PROXY_TIMEOUT_MS;

  // Step 1: the handler re-checks the same 22-character pattern the route
  // segment matcher compiles, before the registry is ever touched.
  if (!BRIDGE_NONCE_PATTERN.test(nonce)) {
    return jsonError(404, "not_found");
  }

  // Step 2: registry lookup order active -> active-close -> tombstones.
  const found = registry.lookup(nonce);
  if (found.kind === "unknown") {
    return jsonError(404, "not_found");
  }
  const entry: BridgeTurnEntry = found.entry;

  // Step 3: state check. At or after the absolute cap a closed nonce
  // replays as 404, matching spec tests 27/37/38; closed or expired is 410.
  if (registry.isOverCap(entry)) {
    return jsonError(404, "not_found");
  }
  if (found.kind === "closed-replay" || registry.isExpired(entry)) {
    return jsonError(410, "gone");
  }

  // Step 4: constant-time challenge check. Missing or wrong returns 404,
  // indistinguishable from an unknown nonce, and consumes no slot.
  if (!challengeMatches(entry, bearerToken(request.headers))) {
    return jsonError(404, "not_found");
  }

  // Step 5: atomic slot reservation, before any body byte is read. An
  // exhausted count is 410 before the cap and 404 at or after it.
  if (!registry.reserveSlot(entry)) {
    return jsonError(registry.isOverCap(entry) ? 404 : 410, registry.isOverCap(entry) ? "not_found" : "gone");
  }

  // Step 6: one monotonic deadline from reservation to the complete upstream
  // response. The byte limit and the deadline race: 413 for the limit, 504
  // for the deadline, whichever is reached first. The slot stays consumed.
  const deadline = nowMs() + timeoutMs;
  let body: Buffer;
  try {
    body = await readBodyCapped(request, deadline);
  } catch (error) {
    if (error instanceof BridgeBodyTooLargeError) {
      return jsonError(413, "payload_too_large");
    }
    return jsonError(504, "gateway_timeout");
  }

  // Step 7: proxy under the remaining budget. Only the authorization and
  // content-type headers are forwarded; every hop-by-hop header is dropped
  // by construction.
  const remaining = deadline - nowMs();
  if (remaining <= 0) {
    return jsonError(504, "gateway_timeout");
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), remaining);
  // Register so a forced close (cancel, cap, escalation) aborts both phases
  // of this in-flight request, not just new admissions (spec step 10).
  entry.inflight.add(controller);
  let upstream: Response;
  try {
    upstream = await fetch(`http://127.0.0.1:${entry.port}${upstreamPath}`, {
      method: "POST",
      headers: {
        authorization: request.headers.get("authorization") ?? "",
        "content-type": request.headers.get("content-type") ?? "application/json",
      },
      body,
      signal: controller.signal,
    });
  } catch {
    if (controller.signal.aborted) {
      return jsonError(504, "gateway_timeout");
    }
    // Step 8: upstream unreachable (connection refused, DNS, reset, ...).
    return jsonError(502, "bad_gateway");
  } finally {
    clearTimeout(timer);
    entry.inflight.delete(controller);
  }

  try {
    const buffered = await readResponseCapped(upstream, deadline);
    const headers = new Headers();
    const contentType = upstream.headers.get("content-type");
    if (contentType) headers.set("content-type", contentType);
    return new Response(buffered, { status: upstream.status, headers });
  } catch (error) {
    if (error instanceof BridgeBodyTooLargeError) {
      // Step 8: an upstream response body over 1 MiB is a sanitized 502.
      return jsonError(502, "bad_gateway");
    }
    return jsonError(504, "gateway_timeout");
  }
}
