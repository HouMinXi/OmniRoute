"use client";
import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLiveComboStatus } from "@/hooks/useLiveDashboard";
import { useProviderBreakerHealth } from "@/hooks/useProviderBreakerHealth";
import { useOrchestrationSnapshot } from "./hooks/useOrchestrationSnapshot";
import { AgentsTab } from "./tabs/AgentsTab";
import { RoutingTab } from "./tabs/RoutingTab";
import { OverviewTab } from "./tabs/OverviewTab";
import { OrchestrationDrawer } from "./drawer/OrchestrationDrawer";

const TABS = ["agents", "routing", "overview"] as const;
type Tab = (typeof TABS)[number];

export default function OrchestrationPageClient() {
  const t = useTranslations("orchestration");
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const tab: Tab = (TABS as readonly string[]).includes(params.get("tab") ?? "")
    ? (params.get("tab") as Tab)
    : "agents";
  const nodeId = params.get("node");

  const setParams = useCallback(
    (patch: Record<string, string | null>) => {
      const next = new URLSearchParams(params.toString());
      for (const [k, v] of Object.entries(patch)) v === null ? next.delete(k) : next.set(k, v);
      router.replace(`${pathname}?${next.toString()}`, { scroll: false });
    },
    [params, pathname, router]
  );

  const { snapshot, showCompleted, setShowCompleted, refetch } = useOrchestrationSnapshot();
  const { comboEvents, activeCombos, isConnected } = useLiveComboStatus();
  const { providerHealth, connectionHealth } = useProviderBreakerHealth();

  const selectedNode = nodeId ? (snapshot.nodes.find((n) => n.id === nodeId) ?? null) : null;
  const onNodeClick = (id: string) =>
    id.startsWith("overflow:")
      ? setParams({ tab: "overview", node: null })
      : setParams({ node: id });

  const TAB_KEY: Record<Tab, string> = {
    agents: "tabAgents",
    routing: "tabRouting",
    overview: "tabOverview",
  };

  return (
    <div className="flex flex-col h-[calc(100dvh-6rem)] min-h-[480px] p-4 gap-3">
      <div role="tablist" className="flex gap-1 border-b border-border">
        {TABS.map((tb) => (
          <button
            key={tb}
            role="tab"
            aria-selected={tab === tb}
            className={`px-3 py-1.5 text-sm rounded-t ${tab === tb ? "border border-b-0 border-border bg-surface font-medium" : "text-muted"}`}
            onClick={() => setParams({ tab: tb })}
          >
            {t(TAB_KEY[tb])}
          </button>
        ))}
      </div>
      <div className="flex-1 min-h-0">
        {tab === "agents" && (
          <AgentsTab
            snapshot={snapshot}
            onNodeClick={onNodeClick}
            showCompleted={showCompleted}
            onToggleCompleted={setShowCompleted}
          />
        )}
        {tab === "routing" && (
          <RoutingTab
            comboEvents={comboEvents}
            combos={[...activeCombos]}
            isConnected={isConnected}
            providerHealth={providerHealth}
            connectionHealth={connectionHealth}
          />
        )}
        {tab === "overview" && (
          <OverviewTab
            snapshot={snapshot}
            comboEvents={comboEvents}
            onCardClick={(id) => setParams({ node: id })}
            onSeeInGraph={(id) => setParams({ tab: "agents", node: id })}
          />
        )}
      </div>
      <OrchestrationDrawer
        node={selectedNode}
        onClose={() => setParams({ node: null })}
        onActionDone={refetch}
      />
    </div>
  );
}
