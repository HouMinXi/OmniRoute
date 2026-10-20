"use client";

// Groups the provider detail page's "extra" sections — playground + param
// filters — behind a single import/render call from ProviderDetailPageClient.tsx.
// Extracted so the frozen host file stays within the file-size ratchet
// (#6649 review follow-up: keeps ProviderDetailPageClient.tsx at its ≤784 cap).

import ProviderPlaygroundPanel from "./ProviderPlaygroundPanel";
import ProviderParamFilterSection from "./ProviderParamFilterSection";
import ProviderInterceptionSection from "./ProviderInterceptionSection";
import ProviderCcAliasSection from "./ProviderCcAliasSection";
import { hidesProviderModelSurfaces } from "../providerSurfaceVisibility";

export default function ProviderExtraPanels({ providerId }: { providerId: string }) {
  const hideModelSurfaces = hidesProviderModelSurfaces(providerId);
  return (
    <>
      {hideModelSurfaces ? null : <ProviderPlaygroundPanel providerId={providerId} />}
      {hideModelSurfaces ? null : <ProviderParamFilterSection providerId={providerId} />}
      <ProviderInterceptionSection providerId={providerId} />
      <ProviderCcAliasSection providerId={providerId} />
    </>
  );
}
