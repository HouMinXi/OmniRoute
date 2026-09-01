// @vitest-environment jsdom
import React, { act } from "react";
import { createRoot } from "react-dom/client";
import { describe, it, expect, beforeAll, afterEach, vi } from "vitest";

beforeAll(() => {
  globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof ResizeObserver;
});
vi.mock("@xyflow/react", async () => {
  const actual = (await vi.importActual("@xyflow/react")) as Record<string, unknown>;
  return { ...actual, Handle: () => null, Position: { Top: "top", Bottom: "bottom" } };
});
vi.mock("next-intl", () => ({
  useTranslations: () => (k: string, v?: Record<string, unknown>) =>
    v ? `${k}:${JSON.stringify(v)}` : k,
}));

import { WorkNode } from "@/app/(dashboard)/dashboard/orchestration/nodes/WorkNode";
import { SourceNode } from "@/app/(dashboard)/dashboard/orchestration/nodes/SourceNode";

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
});

describe("orchestration nodes", () => {
  it("WorkNode shows label, state text and an aria-label", () => {
    const data = {
      id: "cloud-agent:t1",
      kind: "work",
      source: "cloud-agent",
      state: "waiting_approval",
      label: "Fix CI",
      sublabel: "devin",
    };
    const { c, cleanup } = render(<WorkNode data={data as never} />);
    expect(c.textContent).toContain("Fix CI");
    expect(c.textContent).toContain("stateWaitingApproval");
    expect(c.querySelector("[aria-label]")).toBeTruthy();
    cleanup();
  });
  it("SourceNode with sublabel=error shows the warning marker", () => {
    const data = {
      id: "source:a2a",
      kind: "source",
      source: "a2a",
      label: "A2A",
      sublabel: "error",
    };
    const { c, cleanup } = render(<SourceNode data={data as never} />);
    expect(c.textContent).toContain("⚠");
    cleanup();
  });
});
