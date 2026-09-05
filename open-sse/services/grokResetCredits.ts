/**
 * grokResetCredits.ts — live read of remaining Grok reset cards.
 *
 * POST grok.com/prod_mc_billing.ConsumerUiSvc/GetRemainingResets with the
 * grok-cli OAuth bearer. Decode failure / HTTP miss returns null so callers
 * omit bankedResetCredits rather than faking a zero. A decoded empty DATA
 * frame with grpc-status 0 is a real zero and must be returned as count 0.
 */
import {
  decodeGrokResetCreditsFrame,
  type GrokResetCreditsSnapshot,
} from "./grokResetCreditsFrame.ts";

const GROK_RESET_CREDITS_URL =
  "https://grok.com/prod_mc_billing.ConsumerUiSvc/GetRemainingResets";
const GRPC_WEB_EMPTY_REQUEST_FRAME = Buffer.from([0, 0, 0, 0, 0]);
const FETCH_TIMEOUT_MS = 8_000;

export async function fetchGrokResetCredits(
  accessToken: string,
  fetchImpl: typeof fetch = fetch
): Promise<GrokResetCreditsSnapshot | null> {
  if (!accessToken) return null;
  try {
    const response = await fetchImpl(GROK_RESET_CREDITS_URL, {
      method: "POST",
      headers: {
        Authorization: ["Bearer", accessToken].join(" "),
        "Content-Type": "application/grpc-web+proto",
        "X-Grpc-Web": "1",
      },
      body: GRPC_WEB_EMPTY_REQUEST_FRAME,
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!response.ok) return null;
    const decoded = decodeGrokResetCreditsFrame(Buffer.from(await response.arrayBuffer()));
    return decoded.ok ? decoded.snapshot : null;
  } catch {
    return null;
  }
}
