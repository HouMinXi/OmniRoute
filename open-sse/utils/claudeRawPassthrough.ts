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
