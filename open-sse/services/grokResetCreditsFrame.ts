/**
 * grokResetCreditsFrame.ts — gRPC-web decoder for
 * `prod_mc_billing.ConsumerUiSvc/GetRemainingResets`.
 *
 * Live shape (X500, 2026-09-05): empty DATA + grpc-status 0 = inventory 0;
 * otherwise repeated top-level field 10, each a ConsumerResetToken:
 *   field 1 (bytes) token id — never exported
 *   field 2 (varint) granted unix seconds
 *   field 3 (varint) expires unix seconds
 *
 * Do not reuse grokCliQuotaFrame.decodeFields: that Map last-wins and
 * would collapse repeated field 10 to a single token.
 */
import { probeFrameHeader } from "./grokCliQuotaFrame.ts";

const WIRE_TYPE_VARINT = 0;
const WIRE_TYPE_FIXED64 = 1;
const WIRE_TYPE_LENGTH_DELIMITED = 2;
const WIRE_TYPE_FIXED32 = 5;
const GRPC_WEB_TRAILER_FLAG_BIT = 0x80;
const MAX_VARINT_SHIFT_BITS = 70n;

const FIELD_RESET_TOKEN = 10;
const TOKEN_FIELD_EXPIRES = 3;

type ProtoField =
  | { wireType: typeof WIRE_TYPE_VARINT; value: number }
  | {
      wireType: typeof WIRE_TYPE_FIXED64 | typeof WIRE_TYPE_FIXED32 | typeof WIRE_TYPE_LENGTH_DELIMITED;
      bytes: Buffer;
    };

type TaggedField = { fieldNumber: number; field: ProtoField };

export type GrokResetCreditsSnapshot = {
  count: number;
  nextExpiresAt: string | null;
};

export type GrokResetCreditsDecode =
  | { ok: true; snapshot: GrokResetCreditsSnapshot }
  | { ok: false; reason: "empty-buffer" | "no-data-frame" | "malformed" | "trailer-nonzero" };

function readVarint(buffer: Buffer, offset: number): { value: number; next: number } | null {
  let result = 0n;
  let shift = 0n;
  let pos = offset;
  for (;;) {
    if (pos >= buffer.length) return null;
    const byte = buffer[pos];
    result |= BigInt(byte & 0x7f) << shift;
    pos += 1;
    if ((byte & 0x80) === 0) break;
    shift += 7n;
    if (shift > MAX_VARINT_SHIFT_BITS) return null;
  }
  return { value: Number(result), next: pos };
}

function readField(buffer: Buffer, offset: number): { tagged: TaggedField; next: number } | null {
  const tagResult = readVarint(buffer, offset);
  if (!tagResult) return null;
  const fieldNumber = tagResult.value >>> 3;
  const wireType = tagResult.value & 0x7;
  if (fieldNumber === 0) return null;

  if (wireType === WIRE_TYPE_VARINT) {
    const valueResult = readVarint(buffer, tagResult.next);
    if (!valueResult) return null;
    return {
      tagged: { fieldNumber, field: { wireType: WIRE_TYPE_VARINT, value: valueResult.value } },
      next: valueResult.next,
    };
  }
  if (wireType === WIRE_TYPE_LENGTH_DELIMITED) {
    const lengthResult = readVarint(buffer, tagResult.next);
    if (!lengthResult) return null;
    const { value: length, next: bodyStart } = lengthResult;
    if (length < 0 || bodyStart + length > buffer.length) return null;
    return {
      tagged: {
        fieldNumber,
        field: { wireType: WIRE_TYPE_LENGTH_DELIMITED, bytes: buffer.subarray(bodyStart, bodyStart + length) },
      },
      next: bodyStart + length,
    };
  }
  if (wireType === WIRE_TYPE_FIXED64) {
    if (tagResult.next + 8 > buffer.length) return null;
    return {
      tagged: {
        fieldNumber,
        field: { wireType: WIRE_TYPE_FIXED64, bytes: buffer.subarray(tagResult.next, tagResult.next + 8) },
      },
      next: tagResult.next + 8,
    };
  }
  if (wireType === WIRE_TYPE_FIXED32) {
    if (tagResult.next + 4 > buffer.length) return null;
    return {
      tagged: {
        fieldNumber,
        field: { wireType: WIRE_TYPE_FIXED32, bytes: buffer.subarray(tagResult.next, tagResult.next + 4) },
      },
      next: tagResult.next + 4,
    };
  }
  return null;
}

function walkFields(buffer: Buffer): TaggedField[] | null {
  const fields: TaggedField[] = [];
  let offset = 0;
  while (offset < buffer.length) {
    const result = readField(buffer, offset);
    if (!result) return null;
    fields.push(result.tagged);
    offset = result.next;
  }
  return fields;
}

function parseGrpcStatus(trailerBody: Buffer): number | null {
  const text = trailerBody.toString("utf8");
  const match = text.match(/grpc-status:\s*(\d+)/);
  if (!match) return null;
  return Number(match[1]);
}

function splitFrames(buffer: Buffer): {
  dataPayload: Buffer | null;
  sawData: boolean;
  trailerStatus: number | null;
} {
  let offset = 0;
  let dataPayload: Buffer | null = null;
  let sawData = false;
  let trailerStatus: number | null = null;

  while (offset < buffer.length) {
    const frame = probeFrameHeader(buffer, offset);
    if (!frame) break;
    const frameEnd = frame.payloadStart + frame.payloadLength;
    const body = buffer.subarray(frame.payloadStart, frameEnd);
    if ((frame.flag & GRPC_WEB_TRAILER_FLAG_BIT) !== 0) {
      const status = parseGrpcStatus(body);
      if (status !== null) trailerStatus = status;
    } else if (!sawData) {
      sawData = true;
      dataPayload = body;
    }
    offset = frameEnd;
  }

  return { dataPayload, sawData, trailerStatus };
}

function tokenExpiresAtMs(tokenFields: TaggedField[]): number | null {
  const expires = tokenFields.find(
    (field) => field.fieldNumber === TOKEN_FIELD_EXPIRES && field.field.wireType === WIRE_TYPE_VARINT
  );
  if (!expires || expires.field.wireType !== WIRE_TYPE_VARINT) return null;
  if (!Number.isFinite(expires.field.value)) return null;
  return expires.field.value * 1000;
}

function snapshotFromPayload(payload: Buffer, nowMs: number): GrokResetCreditsSnapshot | null {
  if (payload.length === 0) {
    return { count: 0, nextExpiresAt: null };
  }

  const top = walkFields(payload);
  if (!top) return null;

  const expiresMs: number[] = [];
  let count = 0;

  for (const tagged of top) {
    if (tagged.fieldNumber !== FIELD_RESET_TOKEN) continue;
    if (tagged.field.wireType !== WIRE_TYPE_LENGTH_DELIMITED) return null;
    const tokenFields = walkFields(tagged.field.bytes);
    if (!tokenFields) return null;
    const expires = tokenExpiresAtMs(tokenFields);
    if (expires !== null && expires < nowMs) continue;
    count += 1;
    if (expires !== null) expiresMs.push(expires);
  }

  const next = expiresMs.length > 0 ? Math.min(...expiresMs) : null;
  return {
    count,
    nextExpiresAt: next === null ? null : new Date(next).toISOString(),
  };
}

export function decodeGrokResetCreditsFrame(
  buffer: Buffer,
  nowMs = Date.now()
): GrokResetCreditsDecode {
  if (!buffer || buffer.length === 0) {
    return { ok: false, reason: "empty-buffer" };
  }

  try {
    const framed = probeFrameHeader(buffer, 0) !== null;
    if (!framed) {
      const snapshot = snapshotFromPayload(buffer, nowMs);
      if (!snapshot) return { ok: false, reason: "malformed" };
      return { ok: true, snapshot };
    }

    const { dataPayload, sawData, trailerStatus } = splitFrames(buffer);
    if (trailerStatus !== null && trailerStatus !== 0) {
      return { ok: false, reason: "trailer-nonzero" };
    }
    if (!sawData || dataPayload === null) {
      return { ok: false, reason: "no-data-frame" };
    }

    const snapshot = snapshotFromPayload(dataPayload, nowMs);
    if (!snapshot) return { ok: false, reason: "malformed" };
    return { ok: true, snapshot };
  } catch {
    return { ok: false, reason: "malformed" };
  }
}
