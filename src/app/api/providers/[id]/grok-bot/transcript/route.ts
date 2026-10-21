import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
import { getProviderConnectionById } from "@/lib/db/providers";
import { grokBotReadStream } from "../../../../../(dashboard)/dashboard/grok-bot/read";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

  const { id } = await params;
  const connection = await getProviderConnectionById(id);
  if (!connection || connection.provider !== "grok-bot") {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }
  const accessToken = typeof connection.accessToken === "string" ? connection.accessToken : "";
  if (!accessToken) {
    return NextResponse.json({ error: "reauth_required" }, { status: 409 });
  }

  const url = new URL(request.url);
  const agentId = url.searchParams.get("agentId") ?? "";
  const after = url.searchParams.get("after") ?? "0";
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const frame of grokBotReadStream({
          accessToken,
          method: "WatchGrokBotTranscripts",
          payload: {
            cursors: [{ agentId, sessionId: "", generation: 0, afterUpdatedSeq: after }],
          },
          signal: request.signal,
        })) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(frame)}\n\n`));
        }
      } catch {
        controller.enqueue(encoder.encode(`event: error\ndata: {}\n\n`));
      } finally {
        controller.close();
      }
    },
  });
  return new Response(stream, {
    headers: { "content-type": "text/event-stream", "cache-control": "no-cache" },
  });
}
