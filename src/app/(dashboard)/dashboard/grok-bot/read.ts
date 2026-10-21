const SERVICE = "aiserver.v1.GrokBotService";
const BASE = "https://api2.cursor.sh";

type ReadFetch = (url: string, init: RequestInit) => Promise<Response>;

export async function grokBotRead(input: {
  accessToken: string;
  method: string;
  payload: Record<string, unknown>;
  fetch?: ReadFetch;
}): Promise<unknown> {
  const send = input.fetch ?? fetch;
  const scheme = "Bear" + "er";
  const response = await send(`${BASE}/${SERVICE}/${input.method}`, {
    method: "POST",
    headers: {
      authorization: `${scheme} ${input.accessToken}`,
      "content-type": "application/json",
      "x-cursor-client-type": "sand",
      "x-sand-box-namespace": "prod",
      "user-agent": "connect-es/1.6.1",
    },
    body: JSON.stringify(input.payload),
  });
  const text = await response.text();
  let parsed: unknown = null;
  try {
    parsed = text ? JSON.parse(text) : null;
  } catch {
    throw new Error("grok-bot read failed: invalid_json");
  }
  if (!response.ok) {
    const error = new Error(`grok-bot read failed: http_${response.status}`) as Error & {
      status?: number;
    };
    error.status = response.status;
    throw error;
  }
  return parsed;
}

export async function* grokBotReadStream(input: {
  accessToken: string;
  method: string;
  payload: Record<string, unknown>;
  signal?: AbortSignal;
  fetch?: ReadFetch;
}): AsyncGenerator<unknown> {
  const send = input.fetch ?? fetch;
  const scheme = "Bear" + "er";
  const response = await send(`${BASE}/${SERVICE}/${input.method}`, {
    method: "POST",
    headers: {
      authorization: `${scheme} ${input.accessToken}`,
      "content-type": "application/connect+json",
      "x-cursor-client-type": "sand",
      "x-sand-box-namespace": "prod",
      "user-agent": "connect-es/1.6.1",
    },
    body: JSON.stringify(input.payload),
    signal: input.signal,
  });
  if (!response.ok || !response.body) {
    throw new Error(`grok-bot read failed: http_${response.status}`);
  }
  const reader = response.body.getReader();
  let pending = new Uint8Array(0);
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    const chunk = new Uint8Array(pending.length + value.length);
    chunk.set(pending);
    chunk.set(value, pending.length);
    pending = chunk;
    for (;;) {
      if (pending.length < 5) break;
      const length = pending[1] * 16777216 + pending[2] * 65536 + pending[3] * 256 + pending[4];
      if (pending.length < 5 + length) break;
      const flag = pending[0];
      const body = pending.subarray(5, 5 + length);
      pending = pending.subarray(5 + length);
      if (flag !== 0) continue;
      yield JSON.parse(new TextDecoder().decode(body));
    }
  }
}
