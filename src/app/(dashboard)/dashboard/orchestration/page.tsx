import type { Metadata } from "next";
import OrchestrationPageClient from "./OrchestrationPageClient";

export const metadata: Metadata = { title: "Orchestration — OmniRoute" };
export default function OrchestrationPage() {
  return <OrchestrationPageClient />;
}
