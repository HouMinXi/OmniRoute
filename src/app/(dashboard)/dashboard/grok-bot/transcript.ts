export type TranscriptItem = { seq: string; role: string; text: string };

export type TranscriptState = {
  cursor: string;
  visible: TranscriptItem[];
  sealed: boolean;
};

type Entry = { updatedSeq?: unknown; role?: unknown; text?: unknown };

function bigger(left: string, right: string): string {
  const a = left.replace(/^0+(?=\d)/, "");
  const b = right.replace(/^0+(?=\d)/, "");
  if (a.length !== b.length) return a.length > b.length ? left : right;
  return (a >= b ? left : right);
}

export function transcriptLines(frames: unknown[]): string[] {
  return frames.map((frame) => JSON.stringify(frame));
}

export type TranscriptRequest = {
  phase: "snapshot" | "live";
  after: string;
  stop?: boolean;
  visible?: TranscriptItem[];
};

export function resumeTranscript(
  saved: Record<string, { after: string; messages: TranscriptItem[] }>,
  account: string,
  bot: string
): { phase: "snapshot" | "live"; after: string; messages: TranscriptItem[] } {
  const found = saved[`${account}:${bot}`];
  if (!found) return { phase: "snapshot", after: "0", messages: [] };
  return { phase: "live", after: found.after, messages: found.messages };
}

export function nextTranscriptRequest(
  request: { phase: "snapshot" | "live"; after: string },
  frame: unknown
): TranscriptRequest {
  const state = applyTranscriptFrame(
    { cursor: request.after, visible: [], sealed: request.phase === "live" },
    frame
  );
  if (request.phase === "snapshot" && state.sealed) {
    return { phase: "live", after: state.cursor, stop: true };
  }
  return {
    phase: request.phase,
    after: state.cursor,
    stop: false,
    visible: state.visible,
  };
}

export function applyTranscriptFrame(state: TranscriptState, frame: unknown): TranscriptState {
  if (!frame || typeof frame !== "object") return state;
  const record = frame as { replay?: unknown; heartbeat?: unknown; rows?: { entries?: unknown } };
  const entries = Array.isArray(record.rows?.entries) ? record.rows.entries : [];
  let cursor = state.cursor;
  const visible = [...state.visible];
  for (const entry of entries) {
    if (!entry || typeof entry !== "object") continue;
    const item = entry as Entry;
    if (typeof item.updatedSeq !== "string") continue;
    cursor = bigger(cursor, item.updatedSeq);
    if (state.sealed && typeof item.role === "string" && typeof item.text === "string") {
      visible.push({ seq: item.updatedSeq, role: item.role, text: item.text });
    }
  }
  return {
    cursor,
    visible,
    sealed: state.sealed || record.heartbeat === true,
  };
}
