import { isModelAllowedForKey } from "@/lib/db/apiKeys";
import { resolveEnforcedPolicyKey } from "./apiKeyPolicy";
import { checkResolvedModelPermission } from "./resolvedModelAccess";

/** Resolve application identity once; the engine only asks about concrete fallback targets. */
export async function resolveModelFallbackAuthorization(
  request: Request,
  hasApiKeyMetadata: boolean
): Promise<(model: string) => Promise<boolean>> {
  let apiKey: string | null;
  try {
    const enforced = await resolveEnforcedPolicyKey(request);
    if (enforced.selfLoopScope.rejection) return async () => false;
    apiKey = enforced.apiKey;
  } catch {
    return async () => false;
  }
  if (!apiKey && !hasApiKeyMetadata) return async () => true;
  return async (model) =>
    (await checkResolvedModelPermission(
      {
        hasApiKeyMetadata: true,
        apiKey,
        // A grant for the original model must not authorize a different fallback.
        requestedModel: model,
        resolvedModel: model,
      },
      isModelAllowedForKey
    )) === "allowed";
}
