// @vitest-environment jsdom
import React, { act } from "react";
import { createRoot } from "react-dom/client";
import { describe, it, expect, afterEach, vi } from "vitest";

vi.mock("next-intl", () => ({
  useTranslations: () => (k: string, v?: Record<string, unknown>) =>
    v ? `${k}:${JSON.stringify(v)}` : k,
}));

const replaceMock = vi.fn();
vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams("tab=overview"),
  useRouter: () => ({ replace: replaceMock }),
  usePathname: () => "/dashboard/orchestration",
}));

const snapshot = {
  nodes: [{ id: "orchestrator", kind: "orchestrator", label: "OmniRoute" }],
  edges: [],
  sources: [],
  generatedAt: "x",
};
const setShowCompletedMock = vi.fn();
const refetchMock = vi.fn();
vi.mock("@/app/(dashboard)/dashboard/orchestration/hooks/useOrchestrationSnapshot", () => ({
  useOrchestrationSnapshot: () => ({
    snapshot,
    isLoading: false,
    showCompleted: false,
    setShowCompleted: setShowCompletedMock,
    refetch: refetchMock,
  }),
}));

vi.mock("@/hooks/useLiveDashboard", () => ({
  useLiveComboStatus: () => ({
    comboEvents: [],
    activeCombos: new Set<string>(),
    isConnected: true,
  }),
}));

vi.mock("@/hooks/useProviderBreakerHealth", () => ({
  useProviderBreakerHealth: () => ({ providerHealth: {}, connectionHealth: {} }),
}));

vi.mock("@/app/(dashboard)/dashboard/orchestration/tabs/AgentsTab", () => ({
  AgentsTab: () => <div data-testid="agents-tab-stub" />,
}));
vi.mock("@/app/(dashboard)/dashboard/orchestration/tabs/RoutingTab", () => ({
  RoutingTab: () => <div data-testid="routing-tab-stub" />,
}));
vi.mock("@/app/(dashboard)/dashboard/orchestration/tabs/OverviewTab", () => ({
  OverviewTab: () => <div data-testid="overview-tab-stub" />,
}));

import OrchestrationPageClient from "@/app/(dashboard)/dashboard/orchestration/OrchestrationPageClient";

function render(el: React.ReactElement) {
  const c = document.createElement("div");
  document.body.appendChild(c);
  const root = createRoot(c);
  act(() => root.render(el));
  return {
    c,
    cleanup: () => {
      act(() => root.unmount());
      c.remove();
    },
  };
}
afterEach(() => {
  document.body.innerHTML = "";
  replaceMock.mockClear();
});

describe("OrchestrationPageClient", () => {
  it("renders the tab selected by the URL (?tab=overview)", () => {
    const { c, cleanup } = render(<OrchestrationPageClient />);
    expect(c.querySelector('[data-testid="overview-tab-stub"]')).toBeTruthy();
    expect(c.querySelector('[data-testid="agents-tab-stub"]')).toBeFalsy();
    expect(c.querySelector('[data-testid="routing-tab-stub"]')).toBeFalsy();
    cleanup();
  });

  it("clicking the Agents tab button pushes ?tab=agents via router.replace", () => {
    const { c, cleanup } = render(<OrchestrationPageClient />);
    const agentsTabButton = Array.from(c.querySelectorAll('[role="tab"]')).find(
      (el) => el.textContent === "tabAgents"
    ) as HTMLButtonElement;
    expect(agentsTabButton).toBeTruthy();
    act(() => {
      agentsTabButton.click();
    });
    expect(replaceMock).toHaveBeenCalledTimes(1);
    const [url, opts] = replaceMock.mock.calls[0];
    expect(url).toContain("tab=agents");
    expect(opts).toEqual({ scroll: false });
    cleanup();
  });
});
