/**
 * Claude OAuth raw passthrough helpers (#13893).
 *
 * `isConnectionRawPassthrough` reads the per-connection opt-in flag from
 * `providerSpecificData`. Precedence: an explicit top-level boolean (including
 * `false`) always wins; the nested legacy aliases `passthrough.raw` /
 * `passthrough.rawPassthrough` are only consulted when no explicit top-level
 * boolean is present. Any malformed input resolves to `false` (feature off).
 */
export function isConnectionRawPassthrough(providerSpecificData: unknown): boolean {
  if (
    !providerSpecificData ||
    typeof providerSpecificData !== "object" ||
    Array.isArray(providerSpecificData)
  ) {
    return false;
  }
  const record = providerSpecificData as Record<string, unknown>;

  // 1. An explicit top-level boolean has the highest priority — an explicit
  //    `false` must override any nested legacy alias left behind by imports.
  //    Object.hasOwn everywhere: prototype-inherited values (e.g.
  //    Object.create({ rawPassthrough: true })) must not arm the escape hatch.
  if (Object.hasOwn(record, "rawPassthrough") && typeof record.rawPassthrough === "boolean") {
    return record.rawPassthrough;
  }

  // 2. Only when no explicit top-level boolean is present, fall back to nested aliases.
  if (
    Object.hasOwn(record, "passthrough") &&
    record.passthrough &&
    typeof record.passthrough === "object" &&
    !Array.isArray(record.passthrough)
  ) {
    const pt = record.passthrough as Record<string, unknown>;
    if (Object.hasOwn(pt, "raw") && typeof pt.raw === "boolean") {
      return pt.raw;
    }
    if (Object.hasOwn(pt, "rawPassthrough") && typeof pt.rawPassthrough === "boolean") {
      return pt.rawPassthrough;
    }
  }

  return false;
}

/**
 * Final outgoing-header sanitization for raw passthrough mode (spec §3.3 rule 1).
 *
 * Strips CLI-emulation leftovers (x-app, anthropic-dangerous-direct-browser-access,
 * x-stainless-*), RFC 9110 hop-by-hop fields (static list + the client's dynamic
 * Connection nominations), then merges client business headers with exclusive
 * case-variant replacement (prevents undici comma-splicing, #1454). The gateway's
 * own credential headers are anchored: a client Connection header can never
 * nominate them for stripping (D-01), and client-supplied auth headers are never
 * forwarded.
 */
export function applyFinalClaudeRawPassthroughHeaders(
  headers: Record<string, string>,
  clientHeaders?: Record<string, string> | null
): void {
  // 0. Gateway-owned credential/sensitive headers: a client Connection
  //    nomination must never strip these (D-01 hardening).
  const gatewayAuthHeaders = new Set([
    "authorization",
    "x-api-key",
    "x-goog-api-key",
    "api-key",
    "cookie",
  ]);

  // 1. Parse the client Connection header for dynamic hop-by-hop fields
  //    (RFC 9110 §7.6.1).
  const dynamicHopTokens = new Set<string>();
  if (clientHeaders && typeof clientHeaders === "object") {
    for (const [k, v] of Object.entries(clientHeaders)) {
      if (k.toLowerCase() === "connection" && typeof v === "string") {
        for (const token of v.split(",")) {
          const trimmed = token.trim().toLowerCase();
          // A malicious or buggy client could nominate the gateway's own
          // OAuth credential header for stripping — exclude those.
          if (trimmed && !gatewayAuthHeaders.has(trimmed)) dynamicHopTokens.add(trimmed);
        }
      }
    }
  }

  // 2. Static hop-by-hop and transport-framing headers (RFC 9110 / RFC 7230).
  const staticHopByHop = new Set([
    "connection",
    "proxy-connection",
    "keep-alive",
    "transfer-encoding",
    "te",
    "trailer",
    "upgrade",
    "proxy-authenticate",
    "proxy-authorization",
    "host",
    "content-length",
    "content-encoding",
  ]);

  // 3. Strip CLI-emulation markers, monitoring markers, and hop-by-hop fields
  //    from the existing header set.
  for (const key of Object.keys(headers)) {
    const lower = key.toLowerCase();
    if (
      lower === "x-app" ||
      lower === "anthropic-dangerous-direct-browser-access" ||
      lower.startsWith("x-stainless-") ||
      dynamicHopTokens.has(lower) ||
      staticHopByHop.has(lower)
    ) {
      delete headers[key];
    }
  }

  // 4. Merge client business headers (exclusive overwrite with case-variant
  //    dedupe).
  const clientForbiddenAuth = gatewayAuthHeaders;

  if (clientHeaders && typeof clientHeaders === "object") {
    for (const [k, v] of Object.entries(clientHeaders)) {
      if (typeof v !== "string") continue;
      const lower = k.toLowerCase();

      // Never forward client local auth, hop-by-hop fields, or gateway-internal
      // prefixes.
      if (
        dynamicHopTokens.has(lower) ||
        staticHopByHop.has(lower) ||
        clientForbiddenAuth.has(lower) ||
        lower.startsWith("x-omniroute-")
      ) {
        continue;
      }

      // Remove existing case-variant keys so the underlying runtime cannot
      // comma-splice duplicates (#1454).
      for (const existingKey of Object.keys(headers)) {
        if (existingKey.toLowerCase() === lower) {
          delete headers[existingKey];
        }
      }

      headers[k] = v;
    }
  }
}

/**
 * Persist the dashboard toggle onto providerSpecificData (spec §3.4 save
 * normalization). Writes the top-level boolean and strips nested legacy
 * aliases `passthrough.raw` / `passthrough.rawPassthrough`. An emptied
 * nested object is deleted wholesale so a later import cannot resurrect it.
 */
export function applyClaudeRawPassthroughSave(
  providerSpecificData: Record<string, unknown>,
  rawPassthrough: boolean
): void {
  providerSpecificData.rawPassthrough = rawPassthrough;
  if (
    providerSpecificData.passthrough &&
    typeof providerSpecificData.passthrough === "object" &&
    !Array.isArray(providerSpecificData.passthrough)
  ) {
    const pt = { ...(providerSpecificData.passthrough as Record<string, unknown>) };
    delete pt.raw;
    delete pt.rawPassthrough;
    if (Object.keys(pt).length === 0) {
      delete providerSpecificData.passthrough;
    } else {
      providerSpecificData.passthrough = pt;
    }
  }
}
