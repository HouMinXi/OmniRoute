"use client";
import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { useTranslations } from "next-intl";
import { ORCH_STATES, orchStateColor, type OrchNode } from "../model/orchestrationTypes";
const HANDLE = "!bg-transparent !border-0 !w-0 !h-0";
const LABEL_KEY: Record<string, string> = {
  "cloud-agent": "sourceCloudAgent",
  a2a: "sourceA2A",
  conductor: "sourceConductor",
};

function SourceNodeImpl({ data }: { data: OrchNode }) {
  const t = useTranslations("orchestration");
  const stale = data.sublabel === "error"; // set by mergeSnapshot for failed sources
  const label = data.source && LABEL_KEY[data.source] ? t(LABEL_KEY[data.source]) : data.label;
  return (
    <div
      className={`rounded-lg border bg-surface px-3 py-2 min-w-[150px] ${stale ? "opacity-70 border-warning" : "border-border"}`}
      aria-label={label}
    >
      <div className="text-xs font-semibold flex items-center gap-1.5">
        {stale && <span aria-hidden>⚠</span>}
        {label}
      </div>
      {data.sublabel === "offline" && (
        <div className="text-[10px] text-muted">{t("sourceOffline")}</div>
      )}
      <div className="flex flex-wrap gap-1 mt-1">
        {ORCH_STATES.filter((s) => (data.counts?.[s] ?? 0) > 0).map((s) => (
          <span
            key={s}
            className="text-[9px] px-1.5 py-0.5 rounded-full"
            style={{ backgroundColor: `${orchStateColor(s)}20`, color: orchStateColor(s) }}
          >
            {data.counts?.[s]}
          </span>
        ))}
      </div>
      <Handle type="target" position={Position.Top} className={HANDLE} />
      <Handle type="source" position={Position.Bottom} className={HANDLE} />
    </div>
  );
}

export const SourceNode = memo(SourceNodeImpl);
