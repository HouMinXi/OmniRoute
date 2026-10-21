"use client";

import { Card } from "@/shared/components";
import { useTranslations } from "next-intl";
import { rosterEntries, type GrokBotRosterEntry } from "./roster";
import { namedItems, type GrokBotRoutine, type GrokBotSkill } from "./details";
import { nextTranscriptRequest, resumeTranscript, snapshotAttempt, type TranscriptItem } from "./transcript";
import { useEffect, useRef, useState } from "react";

const REGION_IDS = ["accounts", "roster", "conversation", "skills", "computers"] as const;

const REGION_ICONS: Record<(typeof REGION_IDS)[number], string> = {
  accounts: "badge",
  roster: "group",
  conversation: "chat",
  skills: "extension",
  computers: "computer",
};

export function grokBotAccounts(
  connections: Array<Record<string, unknown>>
): Array<{ id: string; name: string }> {
  return connections.flatMap((connection) => {
    if (connection.provider !== "grok-bot") return [];
    if (typeof connection.id !== "string" || typeof connection.name !== "string") return [];
    return [{ id: connection.id, name: connection.name }];
  });
}

export function grokBotRegions(text: (key: string) => string = (key) => key) {
  return REGION_IDS.map((id) => ({
    id,
    title: text(`${id}Title`),
    empty: text(`${id}Empty`),
    icon: REGION_ICONS[id],
  }));
}

export default function GrokBotPage() {
  const t = useTranslations("grokBotPage");
  const regions = grokBotRegions((key) => t(key));
  const [accounts, setAccounts] = useState<Array<{ id: string; name: string }>>([]);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [roster, setRoster] = useState<GrokBotRosterEntry[]>([]);
  const [selectedBot, setSelectedBot] = useState("");
  const [skills, setSkills] = useState<GrokBotSkill[]>([]);
  const [routines, setRoutines] = useState<GrokBotRoutine[]>([]);
  const [messages, setMessages] = useState<TranscriptItem[]>([]);
  const [blocked, setBlocked] = useState(false);
  const drops = useRef<Record<string, number>>({});
  const seen = useRef<TranscriptItem[]>([]);
  const remembered = useRef<Record<string, { after: string; messages: TranscriptItem[] }>>({});

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/providers", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : { connections: [] }))
      .then((data) => {
        const connections = Array.isArray(data?.connections) ? data.connections : [];
        setAccounts(grokBotAccounts(connections));
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setAccounts([]);
      });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!selectedAccount) return;
    const controller = new AbortController();
    fetch(`/api/providers/${selectedAccount}/grok-bot`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : { roster: [] }))
      .then((data) => setRoster(rosterEntries(data?.roster)))
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setRoster([]);
      });
    return () => controller.abort();
  }, [selectedAccount]);

  useEffect(() => {
    if (!selectedAccount || !selectedBot) return;
    const controller = new AbortController();
    const query = new URLSearchParams({ agentId: selectedBot });
    fetch(`/api/providers/${selectedAccount}/grok-bot?${query}`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : { skills: [], routines: [] }))
      .then((data) => {
        setSkills(namedItems(data?.skills));
        setRoutines(namedItems(data?.routines));
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setSkills([]);
        setRoutines([]);
      });
    return () => controller.abort();
  }, [selectedAccount, selectedBot]);

  useEffect(() => {
    if (!selectedAccount || !selectedBot) return;
    const controller = new AbortController();
    const liveController = new AbortController();
    const resumed = resumeTranscript(remembered.current, selectedAccount, selectedBot);
    let request = { phase: resumed.phase, after: resumed.after };
    const read = async () => {
      const query = new URLSearchParams({
        agentId: selectedBot,
        after: request.after,
        phase: request.phase,
      });
      const response = await fetch(
        `/api/providers/${selectedAccount}/grok-bot/transcript?${query}`,
        { signal: controller.signal }
      );
      if (!response.ok || !response.body) return;
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let pending = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        pending += decoder.decode(value, { stream: true });
        const lines = pending.split("\n");
        pending = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          let frame: unknown;
          try {
            frame = JSON.parse(line.slice(6));
          } catch {
            continue;
          }
          const next = nextTranscriptRequest(request, frame);
          if (next.visible) {
            seen.current = [...seen.current, ...next.visible].slice(-200);
            setMessages(seen.current);
          }
          if (next.stop) {
            request = { phase: next.phase, after: next.after };
            delete drops.current[`${selectedAccount}:${selectedBot}`];
            controller.abort();
            return;
          }
          request = { phase: next.phase, after: next.after };
        }
      }
    };
    read()
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        if (request.phase !== "snapshot") return;
        const key = `${selectedAccount}:${selectedBot}`;
        const verdict = snapshotAttempt(drops.current[key] ?? 0, "dropped");
        drops.current[key] = (drops.current[key] ?? 0) + 1;
        if (verdict === "blocked") setBlocked(true);
      })
      .then(() => {
        if (!controller.signal.aborted || request.phase !== "live") return;
        const query = new URLSearchParams({
          agentId: selectedBot,
          after: request.after,
          phase: "live",
        });
        fetch(`/api/providers/${selectedAccount}/grok-bot/transcript?${query}`, {
          signal: liveController.signal,
        })
          .then(async (response) => {
            if (!response.ok || !response.body) return;
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let pending = "";
            let live = { phase: "live" as const, after: request.after };
            for (;;) {
              const { done, value } = await reader.read();
              if (done) break;
              pending += decoder.decode(value, { stream: true });
              const lines = pending.split("\n");
              pending = lines.pop() ?? "";
              for (const line of lines) {
                if (!line.startsWith("data: ")) continue;
                let frame: unknown;
                try {
                  frame = JSON.parse(line.slice(6));
                } catch {
                  continue;
                }
                const next = nextTranscriptRequest(live, frame);
                if (next.visible) {
                  seen.current = [...seen.current, ...next.visible].slice(-200);
                  setMessages(seen.current);
                }
                live = { phase: "live", after: next.after };
              }
            }
          })
          .catch(() => undefined);
      });
    return () => {
      remembered.current = {
        ...remembered.current,
        [`${selectedAccount}:${selectedBot}`]: { after: request.after, messages: seen.current },
      };
      controller.abort();
      liveController.abort();
    };
  }, [selectedAccount, selectedBot]);

  return (
    <div className="space-y-6">
      <div className="min-w-0">
        <h1 className="break-words text-lg font-semibold">{t("title")}</h1>
        <p className="mt-1 break-words text-sm text-muted-foreground">{t("subtitle")}</p>
      </div>
      {regions.map((region) => (
        <Card icon={region.icon} key={region.id} title={region.title}>
          {region.id === "accounts" && accounts.length > 0 ? (
            <ul className="space-y-1">
              {accounts.map((account) => (
                <li key={account.id}>
                  <button
                    className="break-words text-left text-sm"
                    onClick={() => {
                      setRoster([]);
                      setSelectedBot("");
                      setSkills([]);
                      setRoutines([]);
                      setBlocked(false);
                      drops.current = {};
                      seen.current = [];
                      setMessages([]);
                      setSelectedAccount(account.id);
                    }}
                    type="button"
                  >
                    {account.name}
                  </button>
                </li>
              ))}
            </ul>
          ) : region.id === "roster" && roster.length > 0 ? (
            <ul className="space-y-1">
              {roster.map((bot) => (
                <li key={bot.agentId}>
                  <button
                    className="break-words text-left text-sm"
                    onClick={() => {
                      setSkills([]);
                      setRoutines([]);
                      setBlocked(false);
                      delete drops.current[`${selectedAccount}:${bot.agentId}`];
                      const resumed = resumeTranscript(remembered.current, selectedAccount, bot.agentId);
                      seen.current = resumed.messages;
                      setMessages(resumed.messages);
                      setSelectedBot(bot.agentId);
                    }}
                    type="button"
                  >
                    {bot.chiefOfStaff ? `${bot.name} (${t("chiefOfStaff")})` : bot.name}
                  </button>
                </li>
              ))}
            </ul>
          ) : region.id === "conversation" && blocked ? (
            <p className="text-sm text-muted-foreground">{t("conversationBlocked")}</p>
          ) : region.id === "conversation" && messages.length > 0 ? (
            <ul className="space-y-1">
              {messages.map((message) => (
                <li className="break-words text-sm" key={message.seq}>
                  {message.text}
                </li>
              ))}
            </ul>
          ) : region.id === "skills" && (skills.length > 0 || routines.length > 0) ? (
            <ul className="space-y-1">
              {skills.map((skill) => (
                <li className="break-words text-sm" key={skill.id}>
                  {skill.name}
                </li>
              ))}
              {routines.map((routine) => (
                <li className="break-words text-sm" key={routine.id}>
                  {routine.name || routine.id}
                </li>
              ))}
            </ul>
          ) : (
            <p className="break-words text-sm text-muted-foreground">{region.empty}</p>
          )}
        </Card>
      ))}
    </div>
  );
}
