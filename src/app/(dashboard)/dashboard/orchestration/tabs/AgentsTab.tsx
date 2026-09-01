"use client";
import { useMemo } from "react";
import type { NodeTypes, NodeMouseHandler } from "@xyflow/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FlowCanvas } from "@/shared/components/flow/FlowCanvas";
import { orchestrationToFlow } from "../model/orchestrationToFlow";
import type { OrchSnapshot } from "../model/orchestrationTypes";
import { OrchestratorNode } from "../nodes/OrchestratorNode";
import { SourceNode } from "../nodes/SourceNode";
import { WorkNode } from "../nodes/WorkNode";
import { ActivityNode } from "../nodes/ActivityNode";
import { OverflowNode } from "../nodes/OverflowNode";

const NODE_TYPES: NodeTypes = {
  orchestrator: OrchestratorNode as never,
  source: SourceNode as never,
  work: WorkNode as never,
  activity: ActivityNode as never,
  overflow: OverflowNode as never,
};

export function AgentsTab({
  snapshot,
  onNodeClick,
  showCompleted,
  onToggleCompleted,
}: {
  snapshot: OrchSnapshot;
  onNodeClick: (orchNodeId: string) => void;
  showCompleted: boolean;
  onToggleCompleted: (v: boolean) => void;
}) {
  const t = useTranslations("orchestration");
  const { nodes, edges, fitKey } = useMemo(() => orchestrationToFlow(snapshot), [snapshot]);
  const hasWork = snapshot.nodes.some((n) => n.kind === "work");
  const handleClick: NodeMouseHandler = (_e, node) => {
    if (node.type === "work" || node.type === "activity" || node.type === "overflow")
      onNodeClick(node.id);
  };

  if (!hasWork) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-3 text-muted">
        <p className="text-sm">{t("emptyTitle")}</p>
        <div className="flex gap-2 text-xs">
          <Link className="underline" href="/dashboard/cloud-agents">
            {t("emptyCloudAgentCta")}
          </Link>
          <Link className="underline" href="/dashboard/endpoint">
            {t("emptyA2ACta")}
          </Link>
          <Link className="underline" href="/dashboard/conductor">
            {t("emptyConductorCta")}
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-full orchestration-canvas">
      <label className="absolute top-2 right-2 z-10 flex items-center gap-1.5 text-xs text-muted">
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={(e) => onToggleCompleted(e.target.checked)}
        />
        {t("showCompleted")}
      </label>
      <FlowCanvas
        nodes={nodes}
        edges={edges}
        nodeTypes={NODE_TYPES}
        fitKey={fitKey}
        onNodeClick={handleClick}
        className="h-full"
      />
    </div>
  );
}
