import { runRequestPrelude } from "./chatCore/requestPrelude.ts";
import { executeProviderRequest as executeProviderRequestFromLeaf } from "./chatCore/executeProviderRequest.ts";
import {
  extractRequestToolIdentityMap,
  resolveResponseToolNameMap,
} from "./chatCore/requestToolIdentity.ts";
import {
  injectMemoryAndSkills,
  mergeInjectedFallbackOwnerNames,
} from "./chatCore/memorySkillsInjection.ts";
import {
  normalizeOpenAICompatibleTools,
  shouldNormalizeFunctionToolsOnly,
} from "./chatCore/openAICompatibleTools.ts";
import {
  projectFailureUsageErrorCode,
  buildFailureUsageRecord,
  type FailureUsageAggregate,
} from "./chatCore/failureUsage.ts";
import { createTranslationFailureResult } from "./chatCore/translationFailure.ts";
import { estimateFinalInputTokens } from "./chatCore/contextEstimation.ts";
import {
  extractSystemRoleMessages,
  relocateDirectiveOnlyMessages,
} from "./chatCore/claudeSystemRole.ts";
export {
  extractSystemRoleMessages,
  relocateDirectiveOnlyMessages,
} from "./chatCore/claudeSystemRole.ts";
import { acquireTurnExecution, createTurnInProgressResult } from "./chatCore/turnExecutionGuard.ts";
import { applyContextCompression } from "./chatCore/contextCompression.ts";
import { checkSemanticCache } from "./chatCore/semanticCache.ts";
import { enforceOutputTokenBudget } from "./chatCore/outputTokenBudget.ts";
import { maybeConvertJsonBodyToSse } from "./chatCore/jsonBodyToSse.ts";
import { assembleStreamingResponseHeaders } from "./chatCore/streamingResponseHeaders.ts";
import { assembleStreamingPipeline } from "./chatCore/streamingPipeline.ts";
import { makeOnStreamComplete } from "./chatCore/streamMaterialize.ts";
import { acquireTurnExecution, createTurnInProgressResult } from "./chatCore/turnExecutionGuard.ts";
import { wrapReadableStreamWithFinalize } from "./chatCore/streamFinalize.ts";
import { sanitizeChatRequestBody } from "./chatCore/sanitization.ts";
import {
  applyReasoningInputPolicy,
  resolveIncompatibleReasoningAction,
} from "../services/reasoningInputPolicy.ts";

import { routingFinishReason } from "./chatCore/routingFinishReason.ts";
import { isNoMemoryRequested } from "./chatCore/headers.ts";

import { getCodexClientSessionId } from "../config/codexIdentity.ts";
import {
  noteCodexTurnStateProvenance,
  readCodexTurnStateHeader,
} from "../config/codexTurnState.ts";
export { clearCombosCache, clearUpstreamProxyConfigCache } from "./chatCore/comboContextCache.ts";
import {
  resolveAccountSemaphoreKey,
  buildClaudePromptCacheLogMeta,
} from "./chatCore/executorHelpers.ts";
import {
  shouldUseNativeCodexPassthrough,
  shouldUseNativeXaiResponsesPassthrough,
  stampNativeResponsesPassthroughBody,
  redactPassthroughThinkingSignatures,
  isClaudeCodeSemanticPassthroughRequest,
} from "./chatCore/passthroughHelpers.ts";
import { recoverAnthropicThinkingSignature } from "./chatCore/thinkingSignatureRecovery.ts";
import { runProviderExecutionPipeline } from "./chatCore/providerExecutionPipeline.ts";
import { onFailure, onStreamThrow } from "./chatCore/recoveryPolicy.ts";
import { runNonStreamingLeg } from "./chatCore/nonStreamingLeg.ts";
import { markCodexScopeRateLimited } from "./chatCore/codexFailover.ts";
import { deleteSessionAccountAffinity } from "@/lib/db/sessionAccountAffinity";
import {
  buildStreamingResponseHeaders,
  stripStaleForwardingHeaders,
} from "./chatCore/responseHeaders.ts";
// Re-export the previously inline-defined helpers so existing importers of these
// symbols from chatCore.ts (tests, sibling modules) keep resolving after the split.
export {
  shouldUseNativeCodexPassthrough,
  shouldUseNativeXaiResponsesPassthrough,
  redactPassthroughThinkingSignatures,
  isClaudeCodeSemanticPassthroughRequest,
  buildStreamingResponseHeaders,
  stripStaleForwardingHeaders,
};
import { resolveMemoryOwnerId } from "./chatCore/memoryExtraction.ts";
import { normalizeHeaders } from "../utils/headers.ts";
import { stripStore, usesClaudeBridge } from "./chatCore/agentRouterProtocol.ts";
import { normalizeClaudeToolsForDispatch } from "./chatCore/claudeToolDefaults.ts";
import { injectSystemPromptPreTranslation } from "../services/systemPrompt.ts";
import { translateRequest, needsTranslation } from "../translator/index.ts";
import { applyReasoningRuleDirective } from "@/lib/reasoningRouting/policy";
import { withReasoningRuleContext } from "../utils/reasoningRuleContext.ts";
import { FORMATS } from "../translator/formats.ts";
import { sanitizeKiroTools } from "../utils/kiroSanitizer.ts";
import { splitMisplacedToolResults } from "../translator/helpers/claudeHelper.ts";
import { ensureCacheControlOnLastUserMessage } from "../services/claudeCodeConstraints.ts";
import {
  createSSETransformStreamWithLogger,
  createPassthroughStreamWithLogger,
  COLORS,
} from "../utils/stream.ts";
import { ensureStreamReadiness } from "../utils/streamReadiness.ts";
import { resolveSuppressThinkClose } from "../utils/thinkCloseMarker.ts";
import { resolveStreamReadinessTimeout } from "../utils/streamReadinessPolicy.ts";
import { hasActiveClaudeThinking } from "../utils/thinkingBudget.ts";
import { createStreamController } from "../utils/streamHandler.ts";
import * as streamFailure from "../utils/streamFailureFinalization.ts";
import {
  refreshWithRetry,
  isUnrecoverableRefreshError,
  runWithOnPersist,
  runWithCasGuard,
} from "../services/tokenRefresh.ts";
import { runWithCapture } from "../utils/providerRequestLogging.ts";
import { applyResponsesPreviousResponseIdPolicy } from "../utils/responsesStatePolicy.ts";
import { DEFAULT_THINKING_CLAUDE_SIGNATURE } from "../config/defaultThinkingSignature.ts";
import {
  getStripTypesForProviderModel,
  stripIncompatibleMessageContent,
} from "../services/modelStrip.ts";
import { shouldUseMidConversationSystem } from "../executors/claudeIdentity.ts";
import { getUnsupportedParams } from "../config/providerRegistry.ts";
import { checkToolCallingRequiredButUnsupported } from "./chatCore/toolCallingRequiredCheck.ts";
import {
  supportsMaxTokens,
  getResolvedModelCapabilities,
  getExplicitModelOutputCap,
  resolveInputTokenCapForGate,
} from "@/lib/modelCapabilities.ts";
import {
  checkRequestCapabilityFit,
  deriveRequestCapabilityRequirements,
  buildCapabilityMismatchMessage,
} from "@/shared/constants/capabilities/capabilityFilter.ts";
import {
  areContextWindowChecksDisabled,
  isFeatureFlagEnabled,
} from "@/shared/utils/featureFlags.ts";
import {
  REASONING_BUFFER_MIN_TRIGGER,
  buildReasoningProbeTruncatedResponse,
  isEmptyContentUpstreamFailure,
  isTinyBudgetReasoningProbe,
  toPositiveInteger,
} from "../services/reasoningTokenBuffer.ts";
import {
  buildErrorBody,
  createErrorResult,
  parseUpstreamError,
  formatProviderError,
  projectPublicErrorIdentifier,
  sanitizeErrorMessage,
  sanitizeUpstreamDetails,
} from "../utils/error.ts";
import { checkTokenLimits } from "@omniroute/open-sse/services/tokenLimitCounter.ts";
import {
  COOLDOWN_MS,
  HTTP_STATUS,
  PROVIDER_MAX_TOKENS,
  STREAM_READINESS_MAX_TIMEOUT_MS,
  STREAM_READINESS_TIMEOUT_MS,
  ANTIGRAVITY_PRE_RESPONSE_TIMEOUT_CODE,
  DEFAULT_MAX_TOKENS,
  STREAM_DISCONNECT_GRACE_PERIOD_MS,
} from "../config/constants.ts";
import { applyStatusRestatement } from "../config/upstreamStatusRestatement.ts";
import { classifyProviderError, PROVIDER_ERROR_TYPES } from "../services/errorClassifier.ts";
import { updateProviderConnection, getProviderConnectionById } from "@/lib/db/providers";
import { wasRefreshTokenRotated } from "@omniroute/open-sse/services/refreshSerializer.ts";
import { connectionHasExtraKeys } from "../services/apiKeyRotator.ts";
import {
  createSafeAbortError,
  createStreamingErrorResult,
  isSemaphoreCapacityError,
  getSafeErrorMetadata,
  getUpstreamErrorIdentifier,
} from "./chatCore/streamErrorResult.ts";
import { buildExecutorClientHeaders } from "./chatCore/executorClientHeaders.ts";
import { getExecutionConnectionId } from "./chatCore/executionCredentials.ts";
import { resolveExecutionCredentials as resolveExecutionCredentialsFor } from "./chatCore/executionCredentials.ts";
import { resolveExecutorWithProxy as resolveExecutorWithProxyFor } from "./chatCore/executorProxy.ts";
import type { ClaudeMessage } from "./chatCore/claudeMessageTypes.ts";
import { normalizeClaudeUpstreamMessages as normalizeClaudeUpstreamMessagesFor } from "./chatCore/claudeUpstreamMessages.ts";
import {
  persistAttemptLogs as persistAttemptLogsFor,
  type PersistAttemptLogsArgs,
} from "./chatCore/attemptLogging.ts";
import { attachCompressionUsageReceiptAfterAnalytics as attachCompressionUsageReceiptAfterAnalyticsFor } from "./chatCore/compressionUsageReceipt.ts";
import { prepareUpstreamBody } from "./chatCore/upstreamBody.ts";
import { getQuotaScopeLabelForProvider } from "../services/antigravityQuotaFamily.ts";
import { excludeConnectionForCooldown } from "./chatCore/connectionCooldown.ts";
import { handleRequestRejectedFailure } from "./chatCore/requestRejectedFailure.ts";
import { getKimiTemporaryRateLimitResetAt } from "./chatCore/kimiQuotaRecovery.ts";
import { logAuditEvent } from "@/lib/compliance";
import { adaptBodyForCompression } from "../services/compression/bodyAdapter.ts";
import { trackPendingRequest, appendRequestLog, saveRequestUsage } from "@/lib/usageDb";
import { finalizePendingScope, updatePendingScope } from "@/lib/usage/pendingRequestScope";
import { recordCost } from "@/domain/costRules";
import { calculateCost } from "@/lib/usage/costCalculator";
import {
  buildClaudePassthroughToolNameMap,
  mergeResponseToolNameMap,
} from "./chatCore/passthroughToolNames.ts";
import type { EnforceDecision } from "@/lib/quota/types";
import { writeCompressionAnalytics } from "./chatCore/compressionAnalyticsWrite.ts";
import { emitRequestGamificationEvent } from "./chatCore/gamificationEvent.ts";
import { runPluginOnResponseHook } from "./chatCore/pluginOnResponse.ts";
import { normalizeExecutorResult } from "./chatCore/upstreamTimeouts.ts";
import { getModelNormalizeToolCallId, getModelPreserveOpenAIDeveloperRole } from "@/lib/db/models";
import { getProviderCredentials, extractSessionAffinityKey } from "@/sse/services/auth";

import { getCacheControlSettings } from "@/lib/cacheControlSettings";
import type { VideoBridgeLogRedactionEntry } from "@/lib/guardrails/videoBridge";
import {
  shouldPreserveCacheControl,
  resolveConnectionCacheOverride,
} from "../utils/cacheControlPolicy.ts";
import { updateFromHeaders, updateFromResponseBody } from "../services/rateLimitManager.ts";
import * as localLimiterErrors from "../services/rateLimitManager/errors.ts";
import { markBlocked as markAccountSemaphoreBlocked } from "../services/accountSemaphore.ts";
import {
  lockModel,
  lockModelIfPerModelQuota,
  recordCoreOwnedAntigravityQuotaState,
  shouldDeferAntigravityQuotaStateToCaller,
} from "../services/accountFallback.ts";
import {
  getNextFamilyFallback,
  isContextOverflowError,
  findLargerContextModel,
  getModelFamily,
} from "../services/modelFamilyFallback.ts";
import { compressContext, estimateTokens, getTokenLimit } from "../services/contextManager.ts";
import type { CompressionResult } from "../services/compression/types.ts";
import { isLocalStreamLifecycleError } from "@/shared/utils/circuitBreaker";
import { shouldIsolateProbeFailures } from "@/shared/utils/probeOrigin";
import { writeTerminalStatus } from "@/shared/utils/terminalStatus";
import { extractFacts } from "@/lib/memory/extraction";
import { getClaudeCodeCompatibleRequestDefaults } from "@/lib/providers/requestDefaults";
import {
  buildClaudeCodeCompatibleRequest,
  resolveClaudeCodeCompatibleSessionId,
} from "../services/claudeCodeCompatible.ts";
import { classifyModelScope429 } from "../services/modelscopePolicy.ts";
import { isTpmExhausted } from "../services/geminiRateLimitTracker.ts";
import { computeRequestHash, shouldDeduplicate } from "../services/requestDedup.ts";

/**
 * #12150 P1b: shape of handleChatCore's optional `videoBridgeLog` param — see
 * its destructure default below. `handleChatCore`'s own params object has no
 * type annotation (pre-existing convention for this god-function), so this
 * alias is applied via a local cast at each read site instead of widening
 * the whole destructure to a typed object.
 */
/**
 * Core chat handler - shared between SSE and Worker
 * Returns { success, response, status, error } for caller to handle fallback
 * @param {object} options
 * @param {object} options.body - Request body
 * @param {object} options.modelInfo - { provider, model }
 * @param {object} options.credentials - Provider credentials
 * @param {object} options.log - Logger instance (optional)
 * @param {function} options.onCredentialsRefreshed - Callback when credentials are refreshed
 * @param {function} options.onRequestSuccess - Callback when request succeeds (to clear error status)
 * @param {function} options.onDisconnect - Callback when client disconnects
 * @param {string} options.connectionId - Connection ID for usage tracking
 * @param {object} options.apiKeyInfo - API key metadata for usage attribution
 * @param {string} options.userAgent - Client user agent for caching decisions
 * @param {string} options.comboName - Combo name if this is a combo request
 * @param {string} options.comboStrategy - Combo routing strategy (e.g., 'priority', 'cost-optimized')
 * @param {boolean} options.isCombo - Whether this request is from a combo
 * @param {string} options.connectionId - Connection ID for settings lookup
 */
// extractSystemRoleMessages extracted to chatCore/claudeSystemRole.ts (#3501); re-exported above so
// existing importers (e.g. tests/unit/system-role-extraction.test.ts) keep resolving it from here.
export async function handleChatCore({
  body,
  modelInfo,
  credentials,
  log,
  onCredentialsRefreshed,
  onRequestSuccess,
  onStreamFailure,
  onDisconnect,
  clientRawRequest,
  connectionId,
  apiKeyInfo = null,
  userAgent,
  comboName,
  comboStrategy = null,
  isCombo = false,
  routingComboId = null,
  sessionAffinityKey = null,
  comboStepId = null,
  comboExecutionKey = null,
  cachedSettings = null,
  skipUpstreamRetry = false,
  createPiiTransform = null,
  correlationId = null,
  conversationId = null,
  modelPinned = false,
  skipResourcePressureGuard = false,
  reasoningTransportFallback = "drop",
  managedLease = null,
  // #12150 P1b: additive, optional video-bridge log/Memory shadow — shape is
  // VideoBridgeLogParam (defined near the top of this file). Built once in chat.ts from
  // preCallGuardrails.results (video-bridge guardrail meta) and threaded here
  // through executeChatWithBreaker. `undefined` for every non-video request,
  // so this parameter changes nothing on the byte-identical default path.
  // `observed` gates durable Memory extraction (surface 3); `redaction` is
  // applied to a CLONE of `body` at the persistAttemptLogs sink (surface 1) —
  // the model-bound `body` itself is never touched.
  videoBridgeLog = undefined,
  fallbackAttempts = undefined,
}) {
  const prelude = await runRequestPrelude({
    body,
    modelInfo,
    credentials,
    log,
    clientRawRequest,
    connectionId,
    apiKeyInfo,
    userAgent,
    comboName,
    comboStrategy,
    isCombo,
    sessionAffinityKey,
    comboStepId,
    comboExecutionKey,
    cachedSettings,
    correlationId,
    conversationId,
    modelPinned,
    skipResourcePressureGuard,
    managedLease,
    videoBridgeLog,
  });
  if (prelude.kind === "return") return prelude.value;
  const c1 = prelude.continue;
  body = c1.body;
  credentials = c1.credentials;
  let { tokensCompressed, effectiveServiceTier, compressionAnalyticsWritePromise } = c1;
  const {
    provider,
    model,
    extendedContext,
    videoBridgeObserved,
    resilienceSettings,
    requestedModel,
    isModelScope,
    startTime,
    traceId,
    traceEnabled,
    trace,
    getCurrentConnectionId,
    assertManagedLeaseFence,
    getManagedLeaseFenceErrorCode,
    managedLeaseFenceErrorResult,
    agentGoalPolicy,
    resolveEffectiveServiceTier,
    resolveReportedServiceTier,
    recordKeyHealthStatus,
    idempotencyKey,
    endpointPath,
    sourceFormat,
    isResponsesEndpoint,
    nativeCodexPassthrough,
    nativeXaiResponsesPassthrough,
    isDroidCLI,
    isOpencodeClient,
    copilotCompatibleReasoning,
    clientResponseFormat,
    nativeOpenAICompatibleResponsesPassthrough,
    customToolNames,
    backgroundReason,
    effectiveModel,
    alias,
    targetFormat,
    nativeResponsesPassthrough,
    pendingConnId,
    pendingRequestId,
    preConversionClientToolNames,
    webSearchFallbackPlan,
    clientRequestedResponsesStream,
    webFetchFallbackPlan,
    settings,
    isCodexResponsesEcho,
    echoModel,
    skillRequestId,
    pipelineSessionId,
    reasoningCacheScope,
    persistAttemptLogs: persistAttemptLogsPrelude,
    detailedLoggingEnabled,
    noLogEnabled,
    explicitSessionIdHeader,
    buildUpstreamHeadersForExecute,
    streamUserAgent,
    thinkingMarkerHeader,
    providerRequiresStreaming,
    stream,
    semanticCacheEnabled,
    reqLogger,
    pendingScope,
    providerRequestCapture,
    bodyForCacheWrite,
    trustedEffortContext,
    reasoningRuleDirective,
  } = c1;
  // Normalized OpenAI transcript the reasoning replay pass digested for a
  // Responses-API target (reported by translateRequest). A Responses body has
  // `input`, not `messages`, so the replay-cache write side would otherwise digest
  // an empty history and never match the read side for plain assistant turns.
  let reasoningReplayHistory: unknown[] | null = null;
  const persistFailureUsage = (
    statusCode: number,
    errorCode?: string | null,
    aggregate?: FailureUsageAggregate | null
  ) => {
    saveRequestUsage(
      buildFailureUsageRecord({
        provider,
        model,
        connectionId: getCurrentConnectionId(),
        apiKeyInfo,
        effectiveServiceTier,
        isCombo,
        comboStrategy,
        statusCode,
        errorCode,
        latencyMs: Date.now() - startTime,
        endpoint: endpointPath,
        aggregate: aggregate ?? undefined,
      })
    ).catch(() => {});
  };
  const attachCompressionUsageReceiptAfterAnalytics = (
    usage: Record<string, unknown>,
    source: "provider" | "estimated" | "stream"
  ) =>
    attachCompressionUsageReceiptAfterAnalyticsFor(usage, source, {
      pendingWrite: compressionAnalyticsWritePromise,
      skillRequestId,
    });

  const turnExecution = acquireTurnExecution(idempotencyKey);
  if (turnExecution.acquired === false) {
    const duplicate = createTurnInProgressResult(turnExecution.retryCount);
    log?.warn?.(
      "TURN_GUARD",
      `duplicate blocked cid=${traceId} retry=${turnExecution.retryCount} ageMs=${turnExecution.ageMs}`
    );
    return duplicate.result;
  }
  const releaseTurnExecution = turnExecution.release;
  let turnExecutionHandedOffToStream = false;

  // Preserve chatCore's canonical formatting while the guarded body remains byte-stable.
  // prettier-ignore
  try {
  // ── Phase 9.1: Semantic cache check (temp=0, any streaming mode) ──
  const cacheHit = await checkSemanticCache({
    semanticCacheEnabled,
    body,
    clientRawRequest,
    model,
    provider,
    stream: !!stream,
    reqLogger,
    effectiveServiceTier,
    pendingScope,
    startTime,
    log,
    persistAttemptLogs: persistAttemptLogsPrelude,
    apiKeyId: apiKeyInfo?.id ?? undefined,
    cacheDefaultMode: (apiKeyInfo as { cacheDefaultMode?: "legacy" | "bypass" } | null)
      ?.cacheDefaultMode,
  });
  if (cacheHit) {
    return cacheHit;
  }

  const reasoningInputFormat =
    sourceFormat === FORMATS.OPENAI_RESPONSES
      ? "responses"
      : sourceFormat === FORMATS.OPENAI
        ? "chat"
        : null;
  if (reasoningInputFormat && body && typeof body === "object") {
    const policy = applyReasoningInputPolicy(
      body as Record<string, unknown>,
      reasoningInputFormat,
      {
        provider,
        preserveEncryptedReasoning:
          credentials?.providerSpecificData?.preserveEncryptedReasoning === true,
        onIncompatibleReasoning: resolveIncompatibleReasoningAction({
          reasoningTransportFallback,
          // #11178 regressed combo steps whose combo record carries no explicit
          // stepId/executionKey (plain model-list combos): their explicit
          // `reasoningTransportFallback: "skip"` config was silently degraded to
          // "drop". `isCombo` is the combo marker; step ids are optional
          // finer-grained metadata that plain combos never set.
          isComboStep: Boolean(isCombo) || Boolean(comboStepId || comboExecutionKey),
          headers: clientRawRequest?.headers ?? null,
        }),
      }
    );
    if (policy.incompatibleReasoning) {
      trackPendingRequest(model, provider, connectionId, false);
      return createErrorResult(
        HTTP_STATUS.BAD_REQUEST,
        "Reasoning continuation is not compatible with the selected target"
      );
    }
  }

  body = sanitizeChatRequestBody(body, sourceFormat, targetFormat);
  // Per-request opt-out: clients that manage their own context send
  // `x-omniroute-no-memory: true` to skip memory+skills injection (a null owner
  // disables both branches in injectMemoryAndSkills). See PRD-2026-06-19-no-memory-header.
  const memoryOwnerId = isNoMemoryRequested(clientRawRequest?.headers ?? null)
    ? null
    : resolveMemoryOwnerId(apiKeyInfo as Record<string, unknown> | null);
  const injectionResult = await injectMemoryAndSkills({
    body,
    memoryOwnerId,
    provider,
    effectiveModel,
    sourceFormat,
    targetFormat,
    backgroundReason,
    log,
  });
  body = injectionResult.body;
  const memorySettings = injectionResult.memorySettings;

  // Merge web-search/web-fetch fallback tool names into the builtin owner set.
  // injectMemoryAndSkills only tracks memory tools; the fallback names were
  // injected into body.tools by prepareWebSearchFallbackBody/prepareWebFetchFallbackBody
  // above, so they must be carried into the owner provenance chain here.
  const mergedOwnerNames = mergeInjectedFallbackOwnerNames(
    injectionResult,
    [webSearchFallbackPlan, webFetchFallbackPlan],
    preConversionClientToolNames
  );
  injectionResult.builtinToolNames = mergedOwnerNames.builtinToolNames;

  // Translate request (pass reqLogger for intermediate logging)
  // ── Proactive Context Compression (Phase 4) ──
  // Check if context exceeds 70% of limit and compress proactively before sending to provider.
  // This prevents "prompt too long" errors for large-but-not-full contexts.
  const compressionBody = body
    ? adaptBodyForCompression(body as Record<string, unknown>).body
    : null;
  const allMessages = compressionBody?.messages || body?.contents || body?.request?.contents || [];
  let cavemanOutputModeApplied = false;
  let cavemanOutputModeIntensity: string | null = null;
  let preCompressionBody: typeof body | null = null;
  let compressionResponseMeta: string | null = null;
  // OmniGlyph 1.3.x has native OpenAI Chat/Responses transformers. When the
  // inbound protocol differs from the provider wire, defer only that engine to
  // the post-translation body; the text engines still run in their legacy lane.
  let runPostTranslationCompression:
    ((input: Record<string, unknown>) => Promise<CompressionResult>) | null = null;
  // Delegated Context Editing (Claude only): captured at the canonical compression
  // settings read below, then threaded to executor.execute() further down. Lives at
  // function scope because the read happens inside the per-message compression block.
  let contextEditingEnabled = false;
  // The dashboard's global compression switch must also control the built-in
  // reactive and last-resort compaction passes. Otherwise an operator selecting
  // "off" still has large histories rewritten by trim_tools/purify_history.
  let reactiveContextCompactionEnabled = false;
  // Hoisted to function scope (not just the compression-block scope below) so the
  // combo-resolved override survives to the final enforceOutputTokenBudget() call
  // further down — see #8378 (context limit resolved by the combo was silently
  // discarded because it only existed inside this `if` block).
  let contextLimit = getTokenLimit(provider, effectiveModel);
  const compressionOutcome = await applyContextCompression({
    body,
    allMessages,
    apiKeyInfo,
    clientRawRequest,
    comboName,
    connectionId,
    credentials,
    effectiveModel,
    effectiveServiceTier,
    getCurrentConnectionId,
    isCombo,
    log,
    provider,
    routingComboId,
    skillRequestId,
    sourceFormat,
    targetFormat,
    traceId,
    cavemanOutputModeApplied,
    cavemanOutputModeIntensity,
    compressionAnalyticsWritePromise,
    compressionResponseMeta,
    contextEditingEnabled,
    contextLimit,
    nativeCodexPassthrough,
    preCompressionBody,
    reactiveContextCompactionEnabled,
    runPostTranslationCompression,
    tokensCompressed,
  });
  body = compressionOutcome.body;
  cavemanOutputModeApplied = compressionOutcome.cavemanOutputModeApplied;
  cavemanOutputModeIntensity = compressionOutcome.cavemanOutputModeIntensity;
  compressionAnalyticsWritePromise = compressionOutcome.compressionAnalyticsWritePromise;
  compressionResponseMeta = compressionOutcome.compressionResponseMeta;
  contextEditingEnabled = compressionOutcome.contextEditingEnabled;
  contextLimit = compressionOutcome.contextLimit;
  preCompressionBody = compressionOutcome.preCompressionBody;
  reactiveContextCompactionEnabled = compressionOutcome.reactiveContextCompactionEnabled;
  runPostTranslationCompression = compressionOutcome.runPostTranslationCompression;
  tokensCompressed = compressionOutcome.tokensCompressed;

  // Re-check the concrete target after all compression passes. Combo compatibility
  // filtering is advisory and may preserve an all-incompatible pool; this is the
  // hard boundary that prevents a too-large prompt (or a negative token budget)
  // from reaching an OpenAI-compatible upstream such as NVIDIA NIM.
  let finalEstimatedInputTokens = estimateFinalInputTokens(body as Record<string, unknown>);
  // Reuse the already-resolved `contextLimit` (may have been narrowed to the
  // per-target combo window above, resolveComboContextLimit) instead of a bare
  // getTokenLimit(provider, effectiveModel) re-fetch, which would silently
  // discard that combo-aware override and re-widen the last-resort budget.
  const finalContextLimit = contextLimit;
  const toolsReserve = Array.isArray(body?.tools) ? estimateTokens(body.tools) : 0;

  // Last-resort compaction against the concrete input budget (not the 70% threshold).
  // Covers cases where the proactive pass was skipped or still left the request oversized (#8560).
  if (
    reactiveContextCompactionEnabled &&
    !nativeCodexPassthrough &&
    finalEstimatedInputTokens >= finalContextLimit &&
    body
  ) {
    const lastResortTarget = Math.max(1, finalContextLimit - toolsReserve - 1);
    const lastResortAdapter = adaptBodyForCompression(body as Record<string, unknown>);
    const lastResortResult = compressContext(lastResortAdapter.body, {
      provider,
      model: effectiveModel,
      maxTokens: lastResortTarget,
      reserveTokens: 0,
    });
    if (lastResortResult.compressed && lastResortResult.body) {
      body = lastResortAdapter.adapted
        ? lastResortAdapter.restore(lastResortResult.body as Record<string, unknown>, {
            dropMissingMappedItems: true,
          })
        : lastResortResult.body;
      finalEstimatedInputTokens = estimateFinalInputTokens(body as Record<string, unknown>);
      log?.info?.(
        "CONTEXT",
        `Last-resort context compaction: ${lastResortResult.stats?.original} → ${lastResortResult.stats?.final} tokens ` +
          `(re-estimated input ${finalEstimatedInputTokens}, limit ${finalContextLimit})`
      );
    }
  }

  const modelOutputCap = toPositiveInteger(
    getExplicitModelOutputCap({ provider, model: effectiveModel })
  );
  const contextWindowChecksDisabled = areContextWindowChecksDisabled();
  const outputBudget = enforceOutputTokenBudget(
    body as Record<string, unknown>,
    finalEstimatedInputTokens,
    contextWindowChecksDisabled ? Number.MAX_SAFE_INTEGER : finalContextLimit,
    targetFormat === FORMATS.CLAUDE && sourceFormat !== FORMATS.CLAUDE ? DEFAULT_MAX_TOKENS : 0,
    modelOutputCap,
    contextWindowChecksDisabled
      ? null
      : toPositiveInteger(
          resolveInputTokenCapForGate({ provider, model: effectiveModel }, { isCombo })
        )
  );
  if (outputBudget.ok === false) {
    const exceededInputCap = outputBudget.maxInputTokens !== undefined;
    const message =
      `Input exceeds ${exceededInputCap ? "maximum input tokens" : "context window"} for ${provider}/${effectiveModel}: ` +
      `estimated ${outputBudget.estimatedInputTokens} input tokens, ${exceededInputCap ? `max input ${outputBudget.maxInputTokens}` : `limit ${outputBudget.contextLimit}`}. ` +
      `Reduce the prompt or route to a model with a larger ${exceededInputCap ? "input limit" : "context window"}.`;
    log?.warn?.("CONTEXT", message);
    trackPendingRequest(model, provider, connectionId, false);
    return createErrorResult(
      HTTP_STATUS.BAD_REQUEST,
      message,
      null,
      "context_length_exceeded",
      "invalid_request_error"
    );
  }
  if (outputBudget.adjustedFields.length > 0) {
    // A field can also be adjusted by *removal* (invalid/non-positive value), which
    // the cap did not cause — so state the ceiling in effect rather than claiming
    // the cap drove this particular adjustment.
    const modelCapIsBinding =
      modelOutputCap != null && modelOutputCap < outputBudget.availableOutputTokens;
    log?.info?.(
      "CONTEXT",
      `Adjusted invalid or oversized output token fields (${outputBudget.adjustedFields.join(", ")}); ` +
        `${outputBudget.availableOutputTokens} tokens remain for output` +
        (modelCapIsBinding
          ? ` (output ceiling in effect: ${modelOutputCap}, ${provider}/${effectiveModel}'s own cap)`
          : "")
    );
  }
  body = outputBudget.body;

  let translatedBody = body;
  const isClaudePassthrough = sourceFormat === FORMATS.CLAUDE && targetFormat === FORMATS.CLAUDE;
  const isClaudeCodeCompatible = usesClaudeBridge(provider, targetFormat, credentials);
  const isClaudeCodeSemanticPassthrough = isClaudeCodeSemanticPassthroughRequest({
    provider,
    sourceFormat,
    targetFormat,
    headers: clientRawRequest?.headers,
    userAgent,
  });
  // `forceStream` providers (e.g. Cline / ClinePass) only implement upstream
  // streaming — a non-streaming request returns "generateText is not implemented"
  // / an empty body. Force the upstream request to stream even when the client
  // wants JSON; the non-streaming branch below accumulates the SSE and converts
  // it back to JSON (same mechanism already used for Claude-Code-compatible
  // providers via isClaudeCodeCompatible).
  const upstreamStream = stream || isClaudeCodeCompatible || providerRequiresStreaming;
  let ccSessionId: string | null = null;
  const stripTypes = getStripTypesForProviderModel(provider || "", model || "");

  if (Array.isArray(translatedBody?.messages) && stripTypes.length > 0) {
    const stripResult = stripIncompatibleMessageContent(translatedBody.messages, stripTypes);
    if (stripResult.removedParts > 0) {
      translatedBody = {
        ...translatedBody,
        messages: stripResult.messages,
      };
      log?.warn?.(
        "CONTENT",
        `Stripped ${stripResult.removedParts} incompatible content part(s) for ${provider}/${model}`
      );
    }
  }

  // Determine if we should preserve client-side cache_control headers
  // Fetch settings from DB to get user preference
  const cacheControlMode = await getCacheControlSettings().catch(() => "auto" as const);
  const connectionCacheOverride = resolveConnectionCacheOverride(credentials?.providerSpecificData);
  const preserveCacheControl = shouldPreserveCacheControl({
    userAgent,
    isCombo,
    comboStrategy,
    targetProvider: provider,
    targetFormat,
    settings: { alwaysPreserveClientCache: cacheControlMode },
    connectionCacheOverride,
  });

  if (preserveCacheControl) {
    log?.debug?.(
      "CACHE",
      `Preserving client cache_control (client=${userAgent?.substring(0, 20)}, combo=${isCombo}, strategy=${comboStrategy}, provider=${provider})`
    );
  }

  // extractSystemMessagesToBody + normalizeClaudeUpstreamMessages extracted to
  // chatCore/claudeUpstreamMessages.ts (#3501); bind `log` once so the call sites stay byte-identical.
  const normalizeClaudeUpstreamMessages = (
    payload: Record<string, unknown>,
    options?: { preserveToolResultBlocks?: boolean }
  ) => normalizeClaudeUpstreamMessagesFor(payload, options, log);

  try {
    if (nativeResponsesPassthrough) {
      translatedBody = stampNativeResponsesPassthroughBody(
        applyReasoningRuleDirective(body, "openai-responses") as Record<string, unknown>,
        nativeCodexPassthrough
          ? "codex"
          : nativeXaiResponsesPassthrough
            ? "xai"
            : "openai-compatible"
      );
      log?.debug?.(
        "FORMAT",
        nativeCodexPassthrough
          ? "native codex passthrough enabled"
          : nativeXaiResponsesPassthrough
            ? "native xAI Responses Agent Tools passthrough enabled"
            : "native openai-compatible Responses passthrough enabled"
      );
    } else if (isClaudeCodeCompatible) {
      let normalizedForCc = { ...body };

      // Claude Code-compatible providers expect Anthropic Messages-shaped payloads,
      // but we extract only role/text/max_tokens/effort from an OpenAI-like view first.
      if (sourceFormat === FORMATS.CLAUDE && isClaudeCodeSemanticPassthrough) {
        normalizedForCc = applyReasoningRuleDirective(
          normalizedForCc,
          "claude"
        ) as typeof normalizedForCc;
        log?.debug?.("FORMAT", "claude-code semantic passthrough enabled for compatible bridge");
      } else if (sourceFormat !== FORMATS.OPENAI) {
        const normalizeToolCallId = getModelNormalizeToolCallId(
          provider || "",
          model || "",
          sourceFormat
        );
        const preserveDeveloperRole = getModelPreserveOpenAIDeveloperRole(
          provider || "",
          model || "",
          sourceFormat
        );
        normalizedForCc = translateRequest(
          sourceFormat,
          FORMATS.OPENAI,
          model,
          { ...body },
          stream,
          credentials,
          provider,
          reqLogger,
          {
            normalizeToolCallId,
            preserveDeveloperRole,
            preserveCacheControl,
            copilotClient: copilotCompatibleReasoning,
            reasoningCacheScope,
          }
        );
      }

      ccSessionId = resolveClaudeCodeCompatibleSessionId(clientRawRequest?.headers);
      const ccRequestDefaults = getClaudeCodeCompatibleRequestDefaults(
        credentials?.providerSpecificData
      );
      // OpenAI-shaped bridge requests skip translateRequest too.
      if (sourceFormat === FORMATS.OPENAI) {
        normalizedForCc = applyReasoningRuleDirective(normalizedForCc) as typeof normalizedForCc;
      }
      translatedBody = buildClaudeCodeCompatibleRequest({
        sourceBody: body,
        normalizedBody: normalizedForCc,
        claudeBody: sourceFormat === FORMATS.CLAUDE ? body : null,
        model,
        stream: upstreamStream,
        sessionId: ccSessionId,
        cwd: process.cwd(),
        now: new Date(),
        preserveCacheControl,
        preserveClaudeMessages: sourceFormat === FORMATS.CLAUDE && isClaudeCodeSemanticPassthrough,
        summarizeThinking: ccRequestDefaults.summarizeThinking === true,
      });
      log?.debug?.("FORMAT", "claude-code-compatible bridge enabled");

      if (isClaudeCodeSemanticPassthrough) {
        // Semantic passthrough: only lift system/developer role messages
        // without converting file/document blocks, tool history, etc.
        extractSystemRoleMessages(translatedBody);
      } else {
        // Non-CC path: full normalization including content type conversion.
        // Preserve tool_result blocks only when the upstream target speaks the
        // Anthropic Messages format — OpenAI-compatible gateways reject them
        // and return 503. See issue #13971.
        normalizeClaudeUpstreamMessages(translatedBody, {
          preserveToolResultBlocks: targetFormat === FORMATS.CLAUDE,
        });
      }
    } else if (isClaudePassthrough) {
      // Pure passthrough: forward the body as-is without OpenAI round-trip.
      // The Claude→OpenAI→Claude double translation was lossy and corrupted
      // payloads at high context (150+ msgs, 100+ tools). Fix: #1359.
      // Claude Code sends well-formed Messages API payloads — trust them
      // regardless of combo strategy or cache_control settings.
      translatedBody = applyReasoningRuleDirective({ ...body }, "claude");
      translatedBody._disableToolPrefix = true;

      // Sanitize historical thinking-block signatures for Anthropic-native Claude OAuth.
      // Only Anthropic's first-party API validates these signatures (token-bound); third-party
      // Claude-shape providers do not. See redactPassthroughThinkingSignatures + issue #2454.
      if (provider === "claude") {
        translatedBody.messages = redactPassthroughThinkingSignatures(
          translatedBody.messages,
          DEFAULT_THINKING_CLAUDE_SIGNATURE
        ) as typeof translatedBody.messages;

        // Anthropic API rejects requests with both temperature and top_p.
        // VS Code Claude extension and similar clients send both; strip top_p.
        if (translatedBody.temperature !== undefined && translatedBody.top_p !== undefined) {
          delete translatedBody.top_p;
        }
      }

      // Legacy models reject role:"system" messages. Supported models accept
      // them behind a beta, and hoisting them breaks the prompt cache prefix.
      if (isClaudeCodeSemanticPassthrough) {
        if (
          provider !== "claude" ||
          !shouldUseMidConversationSystem(translatedBody, effectiveModel)
        ) {
          extractSystemRoleMessages(translatedBody);
        } else {
          // The mid-conversation-system path keeps system-role messages inside
          // messages[], but a directive-only message (content: [] +
          // output_config) at messages[0] is rejected by Anthropic. Move it past
          // the first real turn; Anthropic accepts the form at any other position.
          relocateDirectiveOnlyMessages(translatedBody);
        }
        if (Array.isArray(translatedBody.messages)) {
          translatedBody.messages = splitMisplacedToolResults(
            translatedBody.messages as ClaudeMessage[]
          ) as typeof translatedBody.messages;
        }
        if (provider === "claude") {
          ensureCacheControlOnLastUserMessage(translatedBody);
        }
      } else {
        // Same guard as the CC-bridge path: only preserve tool_result blocks
        // for Anthropic-native targets. See issue #13971. This branch only runs
        // under isClaudePassthrough (sourceFormat === targetFormat === CLAUDE,
        // defined above), so targetFormat === FORMATS.CLAUDE always holds here —
        // the guard is a no-op on this call site, kept for symmetry with the
        // CC-bridge one above rather than a change to code the issue said not
        // to touch.
        normalizeClaudeUpstreamMessages(translatedBody, {
          preserveToolResultBlocks: targetFormat === FORMATS.CLAUDE,
        });
      }

      log?.debug?.("FORMAT", `claude passthrough (preserveCache=${preserveCacheControl})`);

      // Migrate deprecated top-level `output_format` → `output_config.format`.
      // Anthropic returns a 400 on the legacy field; some clients (e.g. ForgeCode)
      // still emit it. Preserves an existing output_config.format if present.
      if (translatedBody.output_format !== undefined) {
        const oc =
          translatedBody.output_config && typeof translatedBody.output_config === "object"
            ? (translatedBody.output_config as Record<string, unknown>)
            : {};
        if (oc.format === undefined) oc.format = translatedBody.output_format;
        translatedBody.output_config = oc;
        delete translatedBody.output_format;
      }

      // Fix #1719: Strip output_config.format for non-Anthropic Claude-compatible providers.
      // Third-party Claude endpoints (MiniMax, DeepSeek via aggregators) reject this field
      // with 400 errors since they don't support Anthropic's structured output / json_schema.
      if (
        provider !== "claude" &&
        translatedBody.output_config &&
        typeof translatedBody.output_config === "object"
      ) {
        const oc = translatedBody.output_config as Record<string, unknown>;
        delete oc.format;
        if (Object.keys(oc).length === 0) {
          delete translatedBody.output_config;
        }
      }
    } else {
      translatedBody = { ...body };

      // Issue #199 + #618: Always disable tool name prefix in Claude passthrough.
      // The proxy_ prefix was designed for OpenAI→Claude translation to avoid
      // conflicts with Claude OAuth tools, but in the passthrough path the tools
      // are already in Claude format. Applying the prefix turns "Bash" into
      // "proxy_Bash", which Claude rejects ("No such tool available: proxy_Bash").
      //
      // #618's actual traffic was real Claude Code talking to first-party Anthropic
      // (provider "claude") reaching this fallback branch instead of the dedicated
      // Claude Code bridge/passthrough branches above. Scoping the disable to
      // `provider === "claude"` keeps that fix intact while no longer blanket-applying
      // it to every other provider that merely targets Claude's wire format — a
      // third-party provider's own ordinary (non-Claude-native) tool names, e.g.
      // GitHub Copilot's own client-executed "web_fetch" tool, were passing through
      // unprefixed here and colliding with Claude's reserved tool namespace, since
      // they were never "already in Claude format" the way this comment assumes.
      // See #13835.
      if (targetFormat === FORMATS.CLAUDE) {
        if (provider === "claude") {
          translatedBody._disableToolPrefix = true;
        }
        normalizeClaudeUpstreamMessages(translatedBody);
      }

      // OpenAI-compatible providers only support function tools.
      // Non-function tool types (computer, mcp, web_search, custom, etc.) are handled:
      //   - tools with a name → converted to function format in-place before translation
      //   - tools without a name AND without .function → dropped (unconvertible)
      // This must happen before translateRequest, which validates and throws on unknown types.
      // Skip normalization when we are in native openai-compatible Responses passthrough mode
      // to preserve native tool definitions (exec with lark grammar, collaboration namespace, etc.).
      // #13789: built-in providers observed to reject non-function tool types (agentrouter GLM:
      // `400 tools[0].type:type is illegal`) are normalized too, via a conservative allowlist
      // in shouldNormalizeFunctionToolsOnly that keeps openai's own `custom` tools untouched.
      if (
        !nativeOpenAICompatibleResponsesPassthrough &&
        shouldNormalizeFunctionToolsOnly(provider, targetFormat) &&
        Array.isArray(translatedBody.tools)
      ) {
        const normalized = normalizeOpenAICompatibleTools(
          translatedBody.tools as Record<string, unknown>[],
          sourceFormat
        );
        translatedBody.tools = normalized.tools;
        const { dropped } = normalized;
        if (dropped > 0) {
          log?.debug?.(
            "TOOLS",
            `Dropped ${dropped} unconvertible tool(s) for ${provider} (function-tools-only)`
          );
        }
      }

      const normalizeToolCallId = getModelNormalizeToolCallId(
        provider || "",
        model || "",
        sourceFormat
      );
      const preserveDeveloperRole = getModelPreserveOpenAIDeveloperRole(
        provider || "",
        model || "",
        sourceFormat
      );
      // Carrier-less targets (kiro / antigravity) have no post-translation
      // system carrier for the single pass at ~3068 to write into — inject
      // into the client body BEFORE translation so their user-merge /
      // relocation paths carry the global prompt (baseline coverage of the
      // removed pre-translation pass). The gate writes ONE carrier only.
      translatedBody = injectSystemPromptPreTranslation(translatedBody, { targetFormat });
      translatedBody = translateRequest(
        sourceFormat,
        targetFormat,
        model,
        translatedBody,
        stream,
        credentials,
        provider,
        reqLogger,
        {
          normalizeToolCallId,
          preserveDeveloperRole,
          preserveCacheControl,
          signatureNamespace: connectionId,
          copilotClient: copilotCompatibleReasoning,
          reasoningCacheScope,
          onReasoningReplayHistory: (messages) => {
            reasoningReplayHistory = messages;
          },
          ...(preCompressionBody ? { preCompressionBody } : {}),
        }
      );
    }
  } catch (error) {
    // ── Plugin onError hook ──
    try {
      const { runOnError } = await import("@/lib/plugins/hooks");
      await runOnError(
        { requestId: traceId, body, model, provider, apiKeyInfo, metadata: {} },
        error instanceof Error ? error : new Error(String(error))
      );
    } catch (pluginErr) {
      const pluginErrorMessage = sanitizeErrorMessage(pluginErr) || "Plugin onError hook failed";
      log?.debug?.("PLUGIN", `onError hook error (non-fatal): ${pluginErrorMessage}`);
    }

    let parsedStatus = Number.NaN;
    try {
      parsedStatus = Number(error?.statusCode);
    } catch {
      // Hostile thrown values may expose Symbols or throwing status accessors.
    }
    const statusCode =
      Number.isInteger(parsedStatus) && parsedStatus >= 400 && parsedStatus <= 599
        ? parsedStatus
        : HTTP_STATUS.SERVER_ERROR;
    let message = "Invalid request";
    try {
      const candidate = error?.message;
      message =
        (typeof candidate === "string" ? candidate : sanitizeErrorMessage(candidate)) || message;
    } catch {
      // Hostile thrown values may expose throwing property accessors.
    }
    let errorType: string | null = null;
    try {
      const candidate = error?.errorType;
      errorType = typeof candidate === "string" ? candidate : null;
    } catch {
      // Hostile thrown values may expose throwing classification accessors.
    }
    const result = createTranslationFailureResult(statusCode, message, errorType);
    log?.warn?.("TRANSLATE", `Request translation failed: ${result.error}`);

    trackPendingRequest(model, provider, connectionId, false);
    return result;
  }

  // The latest OmniGlyph release has protocol-native OpenAI transforms. Run
  // the deferred stage only after translation so Chat/Responses receives the
  // exact provider wire shape (and so a source→target conversion never embeds
  // Anthropic image blocks into an OpenAI request, or vice versa).
  if (runPostTranslationCompression && translatedBody && typeof translatedBody === "object") {
    const transientFields = new Map<string, unknown>();
    const postInput = { ...(translatedBody as Record<string, unknown>) };
    for (const [key, value] of Object.entries(postInput)) {
      // Translators keep response-side aliases in Maps under private keys. They
      // are not JSON request fields and would otherwise be stringified to `{}`
      // by the OmniGlyph library wrapper; restore them after the wire transform.
      if (key.startsWith("_") && value instanceof Map) {
        transientFields.set(key, value);
        delete postInput[key];
      }
    }
    try {
      const [{ formatCompressionAnnotation }, { trackCompressionStats }] = await Promise.all([
        import("../services/compression/strategySelector.ts"),
        import("../services/compression/stats.ts"),
      ]);
      const postResult = await runPostTranslationCompression(postInput);
      if (postResult.compressed) {
        translatedBody = {
          ...(postResult.body as typeof translatedBody),
          ...Object.fromEntries(transientFields),
        };
        tokensCompressed += Math.max(
          0,
          (postResult.stats?.originalTokens ?? 0) - (postResult.stats?.compressedTokens ?? 0)
        );
        if (postResult.stats) {
          const annotation = formatCompressionAnnotation(postResult.stats);
          if (annotation) {
            compressionResponseMeta = compressionResponseMeta
              ? `${compressionResponseMeta}; ${annotation}`
              : annotation;
          }
          trackCompressionStats(postResult.stats);
          compressionAnalyticsWritePromise = writeCompressionAnalytics({
            stats: postResult.stats,
            provider,
            effectiveModel,
            effectiveServiceTier,
            comboName,
            mode: postResult.stats.mode,
            compressionComboId: postResult.stats.compressionComboId ?? null,
            skillRequestId,
            cavemanOutputModeApplied: false,
            cavemanOutputModeIntensity: null,
            log,
          });
          await compressionAnalyticsWritePromise;
        }
        log?.info?.(
          "COMPRESSION",
          `Post-translation OmniGlyph applied (${sourceFormat} → ${targetFormat})`
        );
      }
    } catch (error) {
      // Compression is deliberately fail-open. A provider-shaped transform
      // must never turn an otherwise valid translated request into a 500.
      log?.warn?.(
        "COMPRESSION",
        "Post-translation OmniGlyph skipped: " +
          (error instanceof Error ? error.message : String(error))
      );
    }
  }

  trace("post_translation");

  // Keep the request translator's namespace identities separate from toolNameMap:
  // the latter is a Kiro/Claude passthrough alias channel with string values,
  // while namespace identities carry `{namespace, name}` for the #7936 response
  // seam. Extract first because Kiro merge may reuse `_toolNameMap` below.
  const requestToolIdentityMap = extractRequestToolIdentityMap(translatedBody);

  // Kiro: sanitize tool schemas before dispatch. Kiro returns 400 "Improperly
  // formed request" for unsupported JSON-Schema keywords (anyOf/$ref/if-then,
  // etc.) and tool names >64 chars. Strip those keys and hash-truncate long
  // names; merge the truncated→original nameMap into the existing
  // `_toolNameMap` so kiro-to-openai maps streamed tool-call names back (#1375).
  if (targetFormat === FORMATS.KIRO) {
    const kiroTools =
      translatedBody?.conversationState?.currentMessage?.userInputMessage?.userInputMessageContext
        ?.tools;
    if (kiroTools) {
      const { tools: sanitizedKiroTools, nameMap: kiroNameMap } = sanitizeKiroTools(kiroTools);
      translatedBody.conversationState.currentMessage.userInputMessage.userInputMessageContext.tools =
        sanitizedKiroTools;
      if (kiroNameMap.size > 0) {
        const existing =
          translatedBody._toolNameMap instanceof Map
            ? translatedBody._toolNameMap
            : new Map<string, string>();
        kiroNameMap.forEach((original, truncated) => existing.set(truncated, original));
        translatedBody._toolNameMap = existing;
      }
    }
  }

  // Claude: strict Anthropic-compatible gateways (e.g. MiniMax) reject tool
  // definitions that omit the required `type` discriminator with HTTP 400. Default
  // a missing `type` to "custom" before dispatch, mirroring Anthropic's own
  // inference, so legacy Claude-format tool payloads survive strict gateways (#2195).
  // AgentRouter is the opposite quirk: its Rust deserializer only accepts versioned
  // tool types and 400s on `type: "custom"` — there the discriminator is stripped
  // instead (see claudeToolDefaults.ts).
  if (targetFormat === FORMATS.CLAUDE && Array.isArray(translatedBody.tools)) {
    translatedBody.tools = normalizeClaudeToolsForDispatch(
      translatedBody.tools,
      provider
    ) as typeof translatedBody.tools;
  }

  // Extract toolNameMap for response translation (Claude OAuth)
  const translatedToolNameMap = translatedBody._toolNameMap;
  const nativeClaudeToolNameMap = isClaudePassthrough
    ? buildClaudePassthroughToolNameMap(body)
    : null;
  // Resolution order matters: `_toolNameMap` was already deleted by
  // `extractRequestToolIdentityMap`, so Gemini/Antigravity depend on the
  // `requestToolIdentityMap` fallback inside this helper (#9568 / #7936).
  const toolNameMap = resolveResponseToolNameMap(
    translatedToolNameMap,
    nativeClaudeToolNameMap,
    requestToolIdentityMap
  );
  delete translatedBody._toolNameMap;
  delete translatedBody._disableToolPrefix;

  // Update model in body — use resolved alias so the provider gets the correct model ID (#472)
  // Strip provider/alias prefix if it exactly matches the routing prefix so upstream receives the raw model name (#1261)
  let finalModelToUpstream = effectiveModel;
  // Defense-in-depth: only string-strip when effectiveModel is actually a string.
  // The API guards `model` via Zod (z.string()), but internal callers could pass a
  // non-string and a bare `.startsWith` would crash with `startsWith is not a
  // function` (same class as #2359 / #2463). Mirrors 9router's `?.startsWith?.()`.
  if (typeof finalModelToUpstream === "string") {
    if (finalModelToUpstream.startsWith(`${provider}/`)) {
      finalModelToUpstream = finalModelToUpstream.slice(provider.length + 1);
    } else if (alias && finalModelToUpstream.startsWith(`${alias}/`)) {
      finalModelToUpstream = finalModelToUpstream.slice(alias.length + 1);
    }
  }
  translatedBody.model = finalModelToUpstream;

  const previousResponseIdPolicy = applyResponsesPreviousResponseIdPolicy(translatedBody, {
    mode: settings.responsesPreviousResponseIdMode,
    provider,
    sourceFormat,
    targetFormat,
    credentials,
  });
  translatedBody = previousResponseIdPolicy.body as typeof translatedBody;

  // #1789: Prevent output_config.effort from overriding effort encoded in model name (Codex)
  if (provider === "codex" || provider?.startsWith("codex")) {
    const hasEffortSuffix = finalModelToUpstream.match(/-(low|medium|high|xhigh)$/i);
    if (
      hasEffortSuffix &&
      translatedBody.output_config &&
      typeof translatedBody.output_config === "object"
    ) {
      const oc = translatedBody.output_config as Record<string, unknown>;
      if (oc.effort) {
        log?.warn?.(
          "PARAMS",
          `Stripped output_config.effort="${oc.effort}" because model "${finalModelToUpstream}" already encodes effort`
        );
        delete oc.effort;
        if (Object.keys(oc).length === 0) {
          delete translatedBody.output_config;
        }
      }
    }
  }

  // Strip unsupported parameters for reasoning models (o1, o3, etc.) and any
  // provider that can't accept them at all (e.g. AI Horde's raw completion
  // backends). When "tools" is among them, also flattens leftover
  // tool_calls/tool-result messages in history (from a combo failover away
  // from a tool-capable model) — those message shapes break non-tool-calling
  // backends just as much as a live `tools` param does.
  const unsupported = getUnsupportedParams(provider, model);

  // Direct/pinned requests (isCombo: false) have no other target to fail
  // over to. Combo requests are already kept off a tool-incapable target by
  // filterTargetsByRequestCompatibility before ever reaching this point, so
  // this only fires for the case that filter can't protect: a client
  // explicitly asking for this exact model. A clear error beats a 200 that
  // silently can't do what was asked (the model narrates a fake tool call
  // instead — live incident: AI Horde/Behemoth-X-123B).
  const toolCallingCheck = checkToolCallingRequiredButUnsupported(
    translatedBody,
    unsupported,
    isCombo,
    model
  );
  if (toolCallingCheck.blocked) {
    trackPendingRequest(model, provider, connectionId, false);
    return createErrorResult(400, toolCallingCheck.message!, null, "tool_calling_not_supported");
  }

  // Rename max_tokens to max_completion_tokens if not supported (#1961)
  if (!supportsMaxTokens({ provider, model })) {
    if (translatedBody.max_tokens !== undefined) {
      if (translatedBody.max_completion_tokens === undefined) {
        translatedBody.max_completion_tokens = translatedBody.max_tokens;
      }
      delete translatedBody.max_tokens;
      log?.debug?.("PARAMS", `Renamed max_tokens to max_completion_tokens for ${model}`);
    }
  } else if (translatedBody.max_completion_tokens !== undefined) {
    // Symmetric case (#6912): some providers/models (e.g. Volcengine Ark /
    // DeepSeek) only document the legacy `max_tokens` field and silently
    // ignore an unrecognized `max_completion_tokens`, so a client sending the
    // newer field alone would have it dropped upstream with no cap applied.
    if (translatedBody.max_tokens === undefined) {
      translatedBody.max_tokens = translatedBody.max_completion_tokens;
    }
    delete translatedBody.max_completion_tokens;
    log?.debug?.("PARAMS", `Renamed max_completion_tokens to max_tokens for ${model}`);
  }

  stripStore(
    translatedBody,
    provider,
    targetFormat,
    credentials?.providerSpecificData as Record<string, unknown> | null | undefined
  );

  // Chat clients may send stream_options.include_usage, but OpenAI Responses
  // upstreams (including Azure AI Foundry /responses) reject stream_options.
  if (targetFormat === FORMATS.OPENAI_RESPONSES && "stream_options" in translatedBody) {
    delete translatedBody.stream_options;
  }

  // Provider-specific max_tokens caps (#711)
  // Some providers reject requests when max_tokens exceeds their API limit.
  // Cap before sending to avoid upstream HTTP 400 errors.
  const providerCap = PROVIDER_MAX_TOKENS[provider];
  if (providerCap) {
    for (const field of ["max_tokens", "max_completion_tokens"] as const) {
      if (typeof translatedBody[field] === "number" && translatedBody[field] > providerCap) {
        log?.debug?.(
          "PARAMS",
          `Capping ${field} from ${translatedBody[field]} to ${providerCap} for ${provider}`
        );
        translatedBody[field] = providerCap;
      }
    }
  }

  // Resolve executor with optional upstream proxy (CLIProxyAPI) routing.
  // mode="native" (default): returns the native executor unchanged.
  // mode="cliproxyapi": returns the CLIProxyAPI executor instead.
  // mode="fallback": returns a wrapper that tries native first, falls back to CLIProxyAPI on 5xx/network errors.

  // #6339: pass the resolved connection's providerSpecificData so a per-connection
  // cliproxyapiMode="claude-native" override can deep-route this single connection
  // through CLIProxyAPI regardless of the provider-level upstream_proxy_config mode.
  const resolveExecutorWithProxy = (prov: string) =>
    resolveExecutorWithProxyFor(
      prov,
      log,
      (credentials?.providerSpecificData as Record<string, unknown> | null | undefined) ?? null
    );

  // === Quota Share enforcement PRE-hook (B/F7) ===
  // Runs after provider/model/credentials/apiKeyInfo are fully resolved,
  // before dispatcher. Fail-open per B16: errors → allow.
  let quotaSoftDeprioritize = false;
  if (apiKeyInfo?.id && credentials?.connectionId) {
    try {
      const { enforceQuotaShare } = await import("@/lib/quota/enforce");
      const decision = await enforceQuotaShare({
        apiKeyId: apiKeyInfo.id,
        connectionId: credentials.connectionId,
        provider: provider ?? "unknown",
        // Resolved model id (post background-redirect / alias) — the same scope the
        // router/log use. Operators configure per-(key,model) caps against THIS id.
        model: model || undefined,
        estimatedCost: {},
      }).catch((err: unknown): EnforceDecision => {
        log?.warn?.(
          "QUOTA_SHARE",
          `enforceQuotaShare failed; fail-open: ${err instanceof Error ? err.message : String(err)}`
        );
        return { kind: "allow" as const };
      });

      if (decision.kind === "block") {
        const { buildErrorBody } = await import("../utils/error.ts");
        log?.warn?.(
          "QUOTA_SHARE",
          `[quotaShare] blocked apiKeyId=${apiKeyInfo.id} provider=${provider ?? "unknown"}: ${decision.reason}`
        );
        // Finalize the pending-request slot registered at handler entry — this
        // return path never reaches the upstream, and without the decrement the
        // pending detail lingers as an orphaned status-0 call-log row until the
        // reaper sweeps it (mirrors the other pre-upstream error returns).
        trackPendingRequest(
          model,
          provider,
          connectionId || credentials?.connectionId || null,
          false
        );
        const headers: Record<string, string> = { "Content-Type": "application/json" };
        if (decision.retryAfterSeconds) {
          headers["Retry-After"] = String(decision.retryAfterSeconds);
        }
        return new Response(JSON.stringify(buildErrorBody(429, decision.reason)), {
          status: 429,
          headers,
        });
      }

      if (decision.kind === "allow" && decision.deprioritize) {
        quotaSoftDeprioritize = true;
        log?.info?.(
          "QUOTA_SHARE",
          `[quotaShare] soft deprioritize active for apiKeyId=${apiKeyInfo.id} provider=${provider ?? "unknown"}`
        );
      }
    } catch (err) {
      // Outer fail-open guard — should not be reached (inner .catch covers it)
      log?.warn?.(
        "QUOTA_SHARE",
        `[quotaShare] enforceQuotaShare unexpected error; fail-open: ${err instanceof Error ? err.message : String(err)}`
      );
    }
  }
  // G2: Propagate soft penalty to the current candidate so combo scoring can deprioritize.
  if (quotaSoftDeprioritize && isCombo && comboStepId) {
    try {
      const { setCandidateQuotaSoftPenalty } = await import("../services/combo");
      setCandidateQuotaSoftPenalty(comboExecutionKey, comboStepId, true);
    } catch (err) {
      log?.warn?.(
        "QUOTA_SHARE",
        `[quotaShare] could not set soft penalty on candidate: ${err instanceof Error ? err.message : String(err)}`
      );
    }
  }
  // === /Quota Share enforcement PRE-hook ===
  if (isFeatureFlagEnabled("CAPABILITY_FILTER_ENABLED")) {
    const fit = checkRequestCapabilityFit(
      getResolvedModelCapabilities({ provider, model: effectiveModel }),
      deriveRequestCapabilityRequirements(body as Record<string, unknown>),
      provider
    );
    if (!fit.compatible) {
      const msg = buildCapabilityMismatchMessage(fit.terminalReason!, provider, effectiveModel);
      log?.warn?.("CAPABILITY", msg);
      trackPendingRequest(model, provider, connectionId, false);
      return createErrorResult(400, msg, null, fit.terminalReason, "invalid_request_error");
    }
  }
  // Get executor for this provider (with optional upstream proxy routing)
  const executor = await resolveExecutorWithProxy(provider);
  const getExecutionCredentials = () =>
    withReasoningRuleContext(
      resolveExecutionCredentialsFor({
        credentials,
        nativeCodexPassthrough: nativeResponsesPassthrough,
        endpointPath,
        targetFormat,
        provider,
        ccSessionId,
        modelInfo,
      }),
      reasoningRuleDirective
    );

  let onPipelineStreamError: streamFailure.PipelineStreamErrorHandler | null = null;
  let onClientDisconnectFinalize:
    ((event: { reason: string; duration: number }) => boolean) | null = null;

  // Create stream controller for disconnect detection
  const streamController = createStreamController({
    onDisconnect: (event) => {
      let finalized = false;
      try {
        finalized = onClientDisconnectFinalize?.(event) === true;
      } catch {}
      if (!finalized) {
        try {
          finalizePendingScope(pendingScope, {
            status: 499,
            error: `Client disconnected: ${event.reason}`,
            errorCode: "client_disconnected",
          });
          finalized = true;
        } catch {}
      }
      try {
        onDisconnect?.(event);
      } catch {}
      return finalized;
    },
    onError: (event) => onPipelineStreamError?.(event),
    provider,
    model,
    connectionId,
    clientResponseFormat,
    clientAbortSignal: clientRawRequest?.signal,
    allowCompletedToolHandoffGrace: isCodexResponsesEcho,
    clientDisconnectGracePeriodMs: STREAM_DISCONNECT_GRACE_PERIOD_MS,
  });

  const dedupRequestBody = { ...translatedBody, model: `${provider}/${model}`, stream };
  const dedupEnabled = shouldDeduplicate(dedupRequestBody);
  // Namespaced by the calling API key: dedup hands the SAME response object to
  // every joiner, so a shared hash across keys is a cross-principal response
  // leak (GHSA-6c7w-56xp-wpc6).
  const dedupHash = dedupEnabled
    ? computeRequestHash(dedupRequestBody, apiKeyInfo?.id, trustedEffortContext)
    : null;

  const persistAttemptLogs = (args: PersistAttemptLogsArgs) =>
    persistAttemptLogsFor(args, {
      traceId,
      provider,
      connectionId,
      model,
      skillRequestId,
      detailedLoggingEnabled,
      reqLogger,
      pendingRequestId,
      clientRawRequest,
      requestedModel,
      credentials,
      startTime,
      body: translatedBody,
      sourceFormat,
      targetFormat,
      comboName,
      comboStepId,
      comboExecutionKey,
      tokensCompressed,
      apiKeyInfo,
      noLogEnabled,
      correlationId,
      modelPinned,
      sessionTag: conversationId || explicitSessionIdHeader,
      videoBridgeLogRedaction: (
        videoBridgeLog as { redaction?: VideoBridgeLogRedactionEntry[] } | undefined
      )?.redaction,
      videoContentRemoved: videoBridgeObserved,
    });

  const executeProviderRequest = (modelToCall = effectiveModel, allowDedup = false) => {
    const sendDeps = {
      agentGoalPolicy,
      assertManagedLeaseFence,
      buildUpstreamHeadersForExecute,
      clientRawRequest,
      clientResponseFormat,
      connectionId,
      correlationId,
      contextEditingEnabled,
      credentials,
      dedupEnabled,
      dedupHash,
      effectiveModel,
      executor,
      extendedContext,
      getExecutionCredentials,
      isClaudePassthrough,
      isModelScope,
      isOpencodeClient,
      log,
      model,
      onCredentialsRefreshed,
      pendingScope,
      provider,
      providerRequestCapture,
      rawBody: body,
      recordKeyHealthStatus,
      requestedModel,
      resilienceSettings,
      settings,
      skipUpstreamRetry,
      stream,
      streamController,
      targetFormat,
      trace,
      traceId,
      translatedBody,
      trustedEffortContext,
      upstreamStream,
      userAgent,
    };
    return executeProviderRequestFromLeaf(
      sendDeps as unknown as import("./chatCore/executeProviderRequest.ts").ExecuteProviderRequestDeps,
      modelToCall,
      allowDedup
    );
  };

  const registeredProviderRequest =
    translatedBody && typeof translatedBody === "object" && !Array.isArray(translatedBody)
      ? {
          ...(translatedBody as Record<string, unknown>),
          model:
            typeof (translatedBody as Record<string, unknown>).model === "string"
              ? (translatedBody as Record<string, unknown>).model
              : effectiveModel,
          ...(!Array.isArray((translatedBody as Record<string, unknown>).messages) &&
          Array.isArray((body as Record<string, unknown>).messages)
            ? { messages: (body as Record<string, unknown>).messages }
            : {}),
        }
      : translatedBody;

  updatePendingScope(pendingScope, {
    providerRequest: registeredProviderRequest,
  });
  // T5: track which models we've tried for intra-family fallback
  const triedModels = new Set<string>([effectiveModel]);
  let currentModel = effectiveModel;

  // Log start
  appendRequestLog({ model, provider, connectionId, status: "PENDING" }).catch(() => {});

  const msgCount =
    translatedBody.messages?.length ||
    translatedBody.contents?.length ||
    translatedBody.request?.contents?.length ||
    (translatedBody.conversationState?.history?.length ?? 0) +
      (translatedBody.conversationState?.currentMessage ? 1 : 0) ||
    0;
  log?.debug?.("REQUEST", `${provider?.toUpperCase()} | ${model} | ${msgCount} msgs`);

  // ── Tier 2: Authoritative per-model/provider token-limit check (provider now resolved) ──
  if (apiKeyInfo?.id) {
    try {
      const tokenBreach = checkTokenLimits(
        apiKeyInfo.id,
        provider || undefined,
        model || undefined
      );
      if (tokenBreach) {
        const scopeLabel =
          tokenBreach.scopeType === "global"
            ? "account"
            : `${tokenBreach.scopeType} "${tokenBreach.scopeValue}"`;
        // FIX 6: clear the pending request marker before the early return so we do
        // not leak a phantom pending request (start was tracked at line ~1847).
        trackPendingRequest(model, provider, connectionId, false);
        // FIX 5: tag this as a per-API-key token-limit breach (errorCode
        // TOKEN_LIMIT_EXCEEDED) so the combo loop can distinguish it from an
        // upstream 429 and NOT cool shared accounts / retry it transiently.
        return createErrorResult(
          HTTP_STATUS.RATE_LIMITED,
          `Token limit exceeded for ${scopeLabel}: ${tokenBreach.tokensUsed}/${tokenBreach.limitValue} tokens used in the current window. Please try again later.`,
          null,
          "TOKEN_LIMIT_EXCEEDED"
        );
      }
    } catch (err) {
      // Fail-open at Tier 2: Tier 1 already enforced the model/global limit pre-dispatch.
      // A transient counter read error here must not break an otherwise-valid request.
      log?.warn?.("TOKEN_LIMIT", "Tier 2 token-limit check failed; allowing request", { err });
    }
  }

  // ── Gemini pre-dispatch TPM / RPM guard ──────────────────────────────────
  // Avoids guaranteed upstream 429 by checking local sliding-window counters
  // before dispatch. Fail-open: counter errors → allow through.
  if (provider === "gemini") {
    try {
      if (isTpmExhausted(effectiveModel)) {
        trackPendingRequest(model, provider, connectionId, false);
        return createErrorResult(
          HTTP_STATUS.RATE_LIMITED,
          `Gemini TPM rate limit reached for ${effectiveModel}. Please try again later.`,
          null,
          "GEMINI_TPM_EXHAUSTED"
        );
      }
    } catch (err) {
      log?.warn?.("GEMINI_RATE_LIMIT", "Pre-dispatch TPM check failed; allowing request", { err });
    }
  }

  // Execute request using executor (handles URL building, headers, fallback, transform)
  let providerResponse;
  let providerUrl;
  let providerHeaders;
  let finalBody;
  let claudePromptCacheLogMeta = null;

  let credentialRefreshPersistRan = false;
  const hadStreamOptions =
    targetFormat === FORMATS.OPENAI_RESPONSES &&
    translatedBody &&
    typeof translatedBody === "object" &&
    "stream_options" in translatedBody;
  if (hadStreamOptions) {
    delete (translatedBody as Record<string, unknown>).stream_options;
  }

  const executeRefreshCredentials = async (
    currentCreds: Record<string, unknown>
  ): Promise<Record<string, unknown> | null> => {
    if (typeof executor.refreshCredentials !== "function") {
      return null;
    }
    if (hadStreamOptions) {
      return null;
    }
    if (await shouldIsolateProbeFailures()) {
      return null;
    }

    const targetCredentials = (currentCreds || credentials || {}) as Record<string, unknown>;
    const attemptedRefreshToken =
      typeof targetCredentials?.refreshToken === "string" ? targetCredentials.refreshToken : null;
    credentialRefreshPersistRan = false;
    const persistFn = onCredentialsRefreshed
      ? async (refreshResult: Record<string, unknown>) => {
          credentialRefreshPersistRan = true;
          Object.assign(targetCredentials, refreshResult);
          Object.assign(credentials, refreshResult);
          await onCredentialsRefreshed(refreshResult);
        }
      : undefined;

    const casConnectionId =
      typeof targetCredentials?.connectionId === "string"
        ? targetCredentials.connectionId.trim()
        : "";
    const casReread = casConnectionId
      ? async () => {
          const latest = await getProviderConnectionById(casConnectionId);
          return typeof latest?.refreshToken === "string" ? latest.refreshToken : null;
        }
      : null;

    const newCredentials = (await refreshWithRetry(
      () =>
        runWithCasGuard(
          casReread ? { expectedRefreshToken: attemptedRefreshToken, reread: casReread } : null,
          () =>
            runWithOnPersist(persistFn, () => executor.refreshCredentials(targetCredentials, log))
        ),
      3,
      log,
      provider
    )) as null | Record<string, unknown>;

    if (newCredentials?.accessToken || newCredentials?.copilotToken) {
      log?.info?.("TOKEN", `${provider?.toUpperCase()} | refreshed`);
      if (!credentialRefreshPersistRan) {
        Object.assign(targetCredentials, newCredentials);
        Object.assign(credentials, newCredentials);
      }
      const errorConnectionId = String(getCurrentConnectionId() || connectionId || "");
      if (errorConnectionId) {
        updateProviderConnection(errorConnectionId, newCredentials).catch(() => {});
      }
      return newCredentials;
    }
    return null;
  };

  const handleCredentialsRefreshed = async (refreshed: Record<string, unknown>) => {
    Object.assign(credentials, refreshed);
    if (!credentialRefreshPersistRan && onCredentialsRefreshed) {
      credentialRefreshPersistRan = true;
      const targetConnectionId =
        (credentials as { connectionId?: string })?.connectionId ||
        (credentials as { id?: string })?.id ||
        getCurrentConnectionId() ||
        connectionId;
      try {
        await onCredentialsRefreshed({
          ...refreshed,
          provider,
          connectionId: targetConnectionId,
        });
      } catch (refreshErr) {
        log?.warn?.(
          "REFRESH",
          `onCredentialsRefreshed persistence callback failed for connection ${targetConnectionId}: ${refreshErr}`
        );
      }
    }
  };

  const applyProviderFailureClassification = async ({
    statusCode,
    message,
    headers,
    upstreamErrorBody,
    retryAfterMs,
    targetModel,
  }: {
    statusCode: number;
    message: string;
    headers?: Headers | null;
    upstreamErrorBody?: unknown;
    retryAfterMs?: number | null;
    targetModel: string;
  }) => {
    let errorType = classifyProviderError(statusCode, message, provider);
    if (statusCode === 429 && isModelScope()) {
      const decision = classifyModelScope429(message, normalizeHeaders(headers));
      errorType =
        decision.kind === "quota_exhausted"
          ? PROVIDER_ERROR_TYPES.QUOTA_EXHAUSTED
          : PROVIDER_ERROR_TYPES.RATE_LIMITED;
      log?.warn?.(
        "MODELSCOPE_429",
        `${decision.kind} (model remaining: ${decision.snapshot.modelRemaining ?? "unknown"}, total remaining: ${decision.snapshot.totalRemaining ?? "unknown"})`
      );
    }
    const persistentMessage = sanitizeErrorMessage(message) || "Provider request failed";
    const errorConnectionId = getCurrentConnectionId() || connectionId;
    if (errorConnectionId && errorType) {
      try {
        if (errorType === PROVIDER_ERROR_TYPES.FORBIDDEN) {
          const probeIsolated = await shouldIsolateProbeFailures();
          await writeTerminalStatus(
            errorConnectionId,
            {
              testStatus: "banned",
              isActive: false,
              lastError: persistentMessage,
              lastErrorType: errorType,
              errorCode: String(statusCode),
            },
            probeIsolated ? "probe" : "production"
          );
          if (probeIsolated) {
            console.warn(
              `[provider] Node ${errorConnectionId} probe ${errorType} (${statusCode}) -- connection stays active`
            );
          } else {
            console.warn(
              `[provider] Node ${errorConnectionId} banned (${statusCode}) -- disabling permanently`
            );
          }
        } else if (errorType === PROVIDER_ERROR_TYPES.ACCOUNT_DEACTIVATED) {
          if (
            connectionHasExtraKeys(
              errorConnectionId,
              (credentials?.providerSpecificData as Record<string, unknown> | undefined)
                ?.extraApiKeys as string[] | undefined
            )
          ) {
            await updateProviderConnection(errorConnectionId, {
              lastErrorType: errorType,
              lastError: persistentMessage,
              errorCode: statusCode,
            });
            console.warn(
              `[provider] Node ${errorConnectionId} account deactivated (${statusCode}) -- has extra keys, keeping connection active`
            );
          } else {
            const probeIsolated2 = await shouldIsolateProbeFailures();
            await writeTerminalStatus(
              errorConnectionId,
              {
                testStatus: "deactivated",
                isActive: false,
                lastError: persistentMessage,
                lastErrorType: errorType,
                errorCode: String(statusCode),
              },
              probeIsolated2 ? "probe" : "production"
            );
            if (probeIsolated2) {
              console.warn(
                `[provider] Node ${errorConnectionId} probe ${errorType} (${statusCode}) -- connection stays active`
              );
            } else {
              console.warn(
                `[provider] Node ${errorConnectionId} account deactivated (${statusCode}) -- disabling permanently`
              );
            }
          }
        } else if (errorType === PROVIDER_ERROR_TYPES.QUOTA_EXHAUSTED) {
          const probeIsolated3 = await shouldIsolateProbeFailures();
          if (probeIsolated3) {
            await writeTerminalStatus(
              errorConnectionId,
              {
                testStatus: "credits_exhausted",
                lastError: persistentMessage,
                lastErrorType: errorType,
                errorCode: String(statusCode),
              },
              "probe"
            );
            console.warn(
              `[provider] Node ${errorConnectionId} probe ${errorType} (${statusCode}) -- connection stays active`
            );
          } else {
            let kimiRateLimitResetAt: string | null = null;
            if (provider === "kimi-coding") {
              try {
                const { fetchAndPersistProviderLimits } =
                  await import("@/lib/usage/providerLimits");
                const { usage } = await fetchAndPersistProviderLimits(errorConnectionId, "manual");
                kimiRateLimitResetAt = getKimiTemporaryRateLimitResetAt(usage);
              } catch {}
            }

            let quotaCooldownMs = kimiRateLimitResetAt
              ? Math.max(new Date(kimiRateLimitResetAt).getTime() - Date.now(), 0)
              : retryAfterMs || COOLDOWN_MS.rateLimit;
            const deferAntigravityQuotaStateToCaller = shouldDeferAntigravityQuotaStateToCaller(
              provider,
              typeof onStreamFailure === "function"
            );
            const isAntigravityQuotaFamily = shouldDeferAntigravityQuotaStateToCaller(
              provider,
              true
            );
            let coreOwnedAntigravityLockout: {
              cooldownMs: number;
              failureCount: number;
            } | null = null;
            if (isAntigravityQuotaFamily && !deferAntigravityQuotaStateToCaller) {
              const quotaErrorText =
                typeof upstreamErrorBody === "string"
                  ? upstreamErrorBody
                  : upstreamErrorBody == null
                    ? message
                    : JSON.stringify(upstreamErrorBody);
              coreOwnedAntigravityLockout = await recordCoreOwnedAntigravityQuotaState({
                provider,
                connectionId: errorConnectionId,
                model,
                status: statusCode,
                errorText: quotaErrorText,
                headers: headers ?? undefined,
              });
              quotaCooldownMs = coreOwnedAntigravityLockout.cooldownMs;
            }
            const accountSemaphoreKey = resolveAccountSemaphoreKey({
              provider,
              model: targetModel,
              connectionId: errorConnectionId,
              credentials,
            });
            if (accountSemaphoreKey && !deferAntigravityQuotaStateToCaller) {
              markAccountSemaphoreBlocked(accountSemaphoreKey, quotaCooldownMs);
            }
            if (deferAntigravityQuotaStateToCaller) {
            } else if (coreOwnedAntigravityLockout) {
              console.warn(
                `[provider] Node ${errorConnectionId} Antigravity model quota exhausted (${statusCode}) for ${model} - ${Math.ceil(coreOwnedAntigravityLockout.cooldownMs / 1000)}s (failureCount=${coreOwnedAntigravityLockout.failureCount}, owner=core)`
              );
            } else if (kimiRateLimitResetAt) {
              await updateProviderConnection(errorConnectionId, {
                testStatus: "unavailable",
                rateLimitedUntil: kimiRateLimitResetAt,
                backoffLevel: 0,
                lastErrorType: PROVIDER_ERROR_TYPES.RATE_LIMITED,
                lastError: persistentMessage,
                errorCode: statusCode,
              });
              console.warn(
                `[provider] Node ${errorConnectionId} Kimi request window exhausted (${statusCode}) -- retrying after ${kimiRateLimitResetAt}`
              );
            } else if (isModelScope() && errorConnectionId) {
              lockModel(provider, errorConnectionId, model, "quota_exhausted", quotaCooldownMs);
              if (targetModel && targetModel !== model) {
                lockModel(
                  provider,
                  errorConnectionId,
                  targetModel,
                  "quota_exhausted",
                  quotaCooldownMs
                );
              }
              console.warn(
                `[provider] Node ${errorConnectionId} ModelScope model quota exhausted (${statusCode}) for ${targetModel} - ${Math.ceil(quotaCooldownMs / 1000)}s (connection stays active)`
              );
            } else if (
              lockModelIfPerModelQuota(
                provider,
                errorConnectionId,
                model,
                "quota_exhausted",
                quotaCooldownMs
              ) ||
              (targetModel &&
                targetModel !== model &&
                lockModelIfPerModelQuota(
                  provider,
                  errorConnectionId,
                  targetModel,
                  "quota_exhausted",
                  quotaCooldownMs
                ))
            ) {
              const quotaScope = getQuotaScopeLabelForProvider(provider, targetModel);
              console.warn(
                `[provider] Node ${errorConnectionId} ${quotaScope}-only quota exhausted (${statusCode}) for ${targetModel} - ${Math.ceil(quotaCooldownMs / 1000)}s (cooldown_scope=${quotaScope}, ttl_source=${retryAfterMs ? "upstream" : "inferred"}, connection stays active)`
              );
            } else {
              await writeTerminalStatus(
                errorConnectionId,
                {
                  testStatus: "credits_exhausted",
                  lastError: persistentMessage,
                  lastErrorType: errorType,
                  errorCode: String(statusCode),
                },
                "production"
              );
              console.warn(`[provider] Node ${errorConnectionId} exhausted quota (${statusCode})`);
            }
          }
        } else if (errorType === PROVIDER_ERROR_TYPES.UNAUTHORIZED) {
          await updateProviderConnection(errorConnectionId, {
            lastErrorType: errorType,
            lastError: persistentMessage,
            errorCode: statusCode,
          });
        } else if (errorType === PROVIDER_ERROR_TYPES.OAUTH_INVALID_TOKEN) {
          await updateProviderConnection(errorConnectionId, {
            lastErrorType: errorType,
            lastError: persistentMessage,
            errorCode: statusCode,
          });
          console.warn(
            `[provider] Node ${errorConnectionId} OAuth token invalid (${statusCode}) -- token refresh available`
          );
        } else if (errorType === PROVIDER_ERROR_TYPES.PROJECT_ROUTE_ERROR) {
          await updateProviderConnection(errorConnectionId, {
            lastErrorType: errorType,
            lastError: persistentMessage,
            errorCode: statusCode,
          });
          console.warn(
            `[provider] Node ${errorConnectionId} project routing error (${statusCode}) -- not banning`
          );
        } else if (errorType === PROVIDER_ERROR_TYPES.GEO_BLOCKED) {
          // Google regional refusal: account-independent, non-terminal; park the connection
          // until egress uses a supported region; probes skip the day-long cooldown (#9817).
          await excludeConnectionForCooldown({
            connectionId: errorConnectionId,
            errorType,
            message: persistentMessage,
            statusCode,
            cooldownMs: COOLDOWN_MS.geoBlocked ?? 24 * 60 * 60 * 1000,
            skipCooldownForProbe: true,
            label: "geo-blocked",
            suffix: "trying other accounts",
          });
        } else if (errorType === PROVIDER_ERROR_TYPES.REQUEST_REJECTED) {
          // Per-request refusal (#12859): growing cooldown, streak → banned.
          await handleRequestRejectedFailure({
            connectionId: errorConnectionId,
            statusCode,
            message: persistentMessage,
          });
        } else if (errorType === PROVIDER_ERROR_TYPES.GCP_PROJECT_REQUIRED) {
          // Antigravity BYOP: fixable via a Project ID; never a lockout/ban. Park the connection.
          await excludeConnectionForCooldown({
            connectionId: errorConnectionId,
            errorType,
            message: persistentMessage,
            statusCode,
            cooldownMs: COOLDOWN_MS.gcpProjectRequired ?? 24 * 60 * 60 * 1000,
            skipCooldownForProbe: false,
            label: "GCP project required",
            suffix: "routing to other accounts (enter a Project ID to restore)",
          });
        } else if (errorType === PROVIDER_ERROR_TYPES.MODEL_NOT_FOUND) {
          const notFoundCooldownMs = COOLDOWN_MS.notFound;
          if (!(await shouldIsolateProbeFailures())) {
            const modelToLock = targetModel || model;
            lockModel(
              provider,
              errorConnectionId,
              modelToLock,
              "model_not_found",
              notFoundCooldownMs
            );
            console.warn(
              `[provider] Node ${errorConnectionId} model not found (${statusCode}) for ${modelToLock} - locking model for ${Math.ceil(notFoundCooldownMs / 1000)}s (connection stays active)`
            );
          }
        }
      } catch {}
    }

    if (headers) {
      updateFromHeaders(provider, errorConnectionId, headers, statusCode, targetModel);
    }
    if (errorConnectionId && upstreamErrorBody !== null && upstreamErrorBody !== undefined) {
      updateFromResponseBody(
        provider,
        errorConnectionId,
        upstreamErrorBody,
        statusCode,
        targetModel
      );
    }
  };

  let pipelineRecovered = false;
  if (stream) {
    try {
      const pipelineOutcome = await runProviderExecutionPipeline({
        policy: {
          allowAccountRotation: !managedLease && comboStrategy !== "context-relay",
          allowModelFallback: true,
          expectedConnectionId: managedLease
            ? String(getCurrentConnectionId() || connectionId || "") || undefined
            : undefined,
        },
        target: {
          provider,
          requestedModel: effectiveModel,
          sourceFormat,
          targetFormat,
          stream,
        },
        connection: {
          initialConnectionId: String(getCurrentConnectionId() || connectionId || ""),
          getCurrentConnectionId: () => getCurrentConnectionId() || undefined,
          getCredentials: () => (credentials || {}) as Record<string, unknown>,
          replaceCredentials: (next) => {
            Object.assign(credentials, next);
          },
          onCredentialsRefreshed: handleCredentialsRefreshed,
          refreshCredentials: executeRefreshCredentials,
          assertManagedLeaseFence: (id) => {
            assertManagedLeaseFence(id);
          },
          getProviderCredentials,
        },
        wire: {
          body: translatedBody as Record<string, unknown>,
          currentModel,
          triedModels,
          setBodyAndModel: (body, model) => {
            translatedBody = body as typeof translatedBody;
            currentModel = model;
            triedModels.add(model);
          },
        },
        state: {
          updatePendingStage: (stage, data) => {
            updatePendingScope(pendingScope, { stage, ...(data || {}) });
          },
          recordRateLimitHeaders: updateFromHeaders,
          recordRateLimitBody: updateFromResponseBody,
          writeTerminalStatus,
          persistConnectionPatch: updateProviderConnection,
          setConnectionRateLimitedUntil: async (id, untilMs) => {
            const { setConnectionRateLimitUntil } = await import("@/lib/db/providers");
            setConnectionRateLimitUntil(id, untilMs);
          },
          lockModel,
          recordAntigravityQuotaState: recordCoreOwnedAntigravityQuotaState,
          markAccountSemaphoreBlocked: (key) => {
            markAccountSemaphoreBlocked(key, Date.now() + 60_000);
          },
          isolateProbeFailures: () => shouldIsolateProbeFailures(),
          onCodexScopeRateLimited: async (params) => {
            await markCodexScopeRateLimited({
              failedConnectionId: params.failedConnectionId,
              model: params.model,
              rateLimitedUntil: params.rateLimitedUntil,
              credentials: (params.credentials || credentials) as {
                connectionId?: string | null;
                providerSpecificData?: unknown;
              },
            });
          },
          onClearSessionAffinity: () => {
            const key =
              sessionAffinityKey ||
              extractSessionAffinityKey(body, clientRawRequest?.headers) ||
              null;
            if (!key) return;
            try {
              deleteSessionAccountAffinity(key, "codex");
            } catch {
              // best-effort
            }
          },
          onAuditAccountRotation: (params) => {
            logAuditEvent({
              action: params.action,
              actor: apiKeyInfo?.name || "system",
              target: params.newConnectionId,
              details: {
                failed_connection_id: params.failedConnectionId,
                new_connection_id: params.newConnectionId,
                attempt: params.attempt,
                retry_after_ms: params.retryAfterMs,
              },
            });
          },
        },
        sendProviderAttempt: (modelToCall, allowDedup) =>
          executeProviderRequest(modelToCall, allowDedup),
      });

      pipelineRecovered = true;
      currentModel = pipelineOutcome.model;
      if (pipelineOutcome.kind === "error") {
        providerResponse = pipelineOutcome.result.response;
        providerUrl = "";
        providerHeaders = normalizeHeaders(pipelineOutcome.result.response.headers);
        finalBody = translatedBody;
      } else {
        const result = {
          response: pipelineOutcome.response,
          url: pipelineOutcome.url,
          headers: pipelineOutcome.headers,
          transformedBody: pipelineOutcome.transformedBody,
        };
        providerResponse = result.response;
        providerUrl = result.url;
        providerHeaders = result.headers;
        finalBody = providerRequestCapture.body(result.transformedBody);
      }
      const responseConnectionId = getCurrentConnectionId();
      effectiveServiceTier = resolveEffectiveServiceTier(finalBody);
      claudePromptCacheLogMeta = buildClaudePromptCacheLogMeta(
        targetFormat,
        finalBody,
        providerHeaders,
        clientRawRequest?.headers
      );

      // Log target request (final request to provider)
      reqLogger.logTargetRequest(providerUrl, providerHeaders, finalBody);
      updatePendingScope(pendingScope, {
        providerRequest: finalBody,
        providerUrl,
        stage: "provider_response_started",
      });
      // Update rate limiter from response headers (learn limits dynamically)
      updateFromHeaders(
        provider,
        responseConnectionId,
        providerResponse.headers,
        providerResponse.status,
        model
      );

      // Store rate-limit headers for quota saturation signals
      try {
        const { storeRateLimitHeaders } = await import("@/lib/quota/saturationSignals");
        storeRateLimitHeaders(
          responseConnectionId,
          provider,
          providerResponse.headers as Record<string, string>
        );
      } catch {
        // fail-open: saturation signal is best-effort
      }
    } catch (error) {
      onStreamThrow();
      trackPendingRequest(model, provider, connectionId, false);
      const errorMetadata = getSafeErrorMetadata(error);
      const managedLeaseFenceCode = getManagedLeaseFenceErrorCode(errorMetadata.code);
      if (managedLeaseFenceCode) return managedLeaseFenceErrorResult(managedLeaseFenceCode);
      // isSemaphoreCapacityError already reads the code through getSafeErrorMetadata,
      // so a hostile rejection cannot escape this classification.
      if (isSemaphoreCapacityError(error)) {
        const semaphoreCode = errorMetadata.code as string;
        appendRequestLog({
          model,
          provider,
          connectionId,
          status: `FAILED ${semaphoreCode}`,
        }).catch(() => {});
        const failureMessage = sanitizeErrorMessage(errorMetadata.message) || "Semaphore timeout";
        persistAttemptLogs({
          status: HTTP_STATUS.RATE_LIMITED,
          error: failureMessage,
          providerRequest: finalBody || translatedBody,
          clientResponse: buildErrorBody(HTTP_STATUS.RATE_LIMITED, failureMessage),
          claudeCacheMeta: claudePromptCacheLogMeta,
          cacheSource: "upstream",
        });
        persistFailureUsage(HTTP_STATUS.RATE_LIMITED, semaphoreCode);
        const result = stream
          ? createStreamingErrorResult(HTTP_STATUS.RATE_LIMITED, failureMessage, semaphoreCode)
          : createErrorResult(HTTP_STATUS.RATE_LIMITED, failureMessage);
        return {
          ...result,
          errorType: "account_semaphore_capacity",
          errorCode: semaphoreCode,
        };
      }
      // abort(reason) can reject with a raw string lacking `name`/`status`; classify
      // it through isLocalStreamLifecycleError so it maps to 499 rather than the
      // 502 provider-failure default.
      let isRequestAborted = errorMetadata.name === "AbortError";
      if (!isRequestAborted) {
        try {
          isRequestAborted = isLocalStreamLifecycleError(error);
        } catch {
          // A hostile Proxy must not escape the provider-error boundary during classification.
        }
      }
      // #8376: proxyFetch tags unreachable transport failures so they remain
      // distinguishable from ordinary provider 5xx responses.
      const isProxyUnreachableFailure =
        !isRequestAborted && errorMetadata.errorCode === "proxy_unreachable";
      const errorCode = errorMetadata.code;
      const localRateLimitFailure = localLimiterErrors.getClientSafeLocalRateLimitError(error);
      const failureStatus = isRequestAborted
        ? 499
        : isProxyUnreachableFailure
          ? HTTP_STATUS.BAD_GATEWAY
          : localRateLimitFailure
            ? localRateLimitFailure.status
            : errorMetadata.name === "TimeoutError" || errorMetadata.name === "BodyTimeoutError"
              ? HTTP_STATUS.GATEWAY_TIMEOUT
              : errorMetadata.status
                ? errorMetadata.status
                : HTTP_STATUS.BAD_GATEWAY;
      const failureMessage = isRequestAborted
        ? "Request aborted"
        : (() => {
            try {
              return formatProviderError(
                localRateLimitFailure ?? error,
                provider,
                model,
                failureStatus
              );
            } catch {
              // Formatting is diagnostic only; hostile rejection metadata falls back safely.
              return errorMetadata.message || "Upstream provider error";
            }
          })();
      const safeFailureMessage = sanitizeErrorMessage(failureMessage) || "Upstream provider error";
      const upstreamErrorCode =
        localRateLimitFailure?.code ??
        (isProxyUnreachableFailure ? "proxy_unreachable" : errorCode);
      // Tag our own deadline timeouts (fetch-start TimeoutError / body BodyTimeoutError,
      // both surfaced as a 504) as "upstream_timeout" so the cooldown layer can tell a
      // slow-but-not-failed request apart from a real provider 5xx. (Antigravity already
      // tags its pre-response timeout via the code below.)
      const isOwnDeadlineTimeout =
        failureStatus === HTTP_STATUS.GATEWAY_TIMEOUT &&
        (errorMetadata.name === "TimeoutError" || errorMetadata.name === "BodyTimeoutError");
      const upstreamErrorType =
        upstreamErrorCode === ANTIGRAVITY_PRE_RESPONSE_TIMEOUT_CODE || isOwnDeadlineTimeout
          ? "upstream_timeout"
          : failureStatus === 401
            ? "authentication_error"
            : undefined;
      appendRequestLog({
        model,
        provider,
        connectionId,
        status: `FAILED ${failureStatus}`,
      }).catch(() => {});
      persistAttemptLogs({
        status: failureStatus,
        error: safeFailureMessage,
        providerRequest: finalBody || translatedBody,
        // On a client-abort (AbortError), the client already disconnected before
        // we ever got here — this body is what we WOULD have sent, not what was
        // actually delivered. Logging it as `clientResponse` is misleading (the
        // dashboard reads that field as "what the client received"), so omit it
        // for this case; `error` above already records the failure reason.
        clientResponse:
          errorMetadata.name === "AbortError"
            ? undefined
            : buildErrorBody(failureStatus, failureMessage),
        claudeCacheMeta: claudePromptCacheLogMeta,
        cacheSource: "upstream",
      });
      if (isRequestAborted) {
        streamController.handleError(createSafeAbortError());
        return createErrorResult(499, "Request aborted");
      }
      const persistentErrorCode = projectFailureUsageErrorCode({
        statusCode: failureStatus,
        message: failureMessage,
        errorCode: projectPublicErrorIdentifier(
          upstreamErrorCode || errorMetadata.name,
          "upstream_error"
        ),
        errorType: upstreamErrorType,
      });
      persistFailureUsage(failureStatus, persistentErrorCode);
      console.log(`${COLORS.red}[ERROR] ${safeFailureMessage}${COLORS.reset}`);
      if (stream && upstreamErrorCode) {
        const result = createStreamingErrorResult(
          failureStatus,
          failureMessage,
          upstreamErrorCode,
          upstreamErrorType
        );
        localLimiterErrors.markTrustedLocalRateLimitResponse(result.response, error);
        return {
          ...result,
          errorType: upstreamErrorType,
          errorCode: upstreamErrorCode,
        };
      }
      const result = createErrorResult(
        failureStatus,
        failureMessage,
        null,
        upstreamErrorCode,
        upstreamErrorType
      );
      localLimiterErrors.markTrustedLocalRateLimitResponse(result.response, error);
      return result;
    }
    let upstreamErrorParsed = false;
    let parsedStatusCode = providerResponse.status;
    let parsedMessage = "";
    let parsedRetryAfterMs: number | null = null;
    let upstreamErrorBody: unknown = null;

    // Track whether stream_options was present and stripped — if so, 401/403 after
    // that may be from the modification rather than a genuine auth failure, so we
    // skip the credential refresh attempt in that case.
    const hadStreamOptions =
      targetFormat === FORMATS.OPENAI_RESPONSES && "stream_options" in translatedBody;
    if (hadStreamOptions) {
      delete translatedBody.stream_options;
    }

    // Handle 401/403 - try token refresh using executor
    // T-PROBE: probe-origin failures never attempt the refresh — a probe must
    // not consume a rotating refresh token nor persist an "expired"
    // deactivation on refresh failure (#9817). The 401/403 then flows into
    // the normal providerFailure classification (record-only in probe mode).
    if (
      (providerResponse.status === HTTP_STATUS.UNAUTHORIZED ||
        providerResponse.status === HTTP_STATUS.FORBIDDEN) &&
      !hadStreamOptions && // Skip refresh if failure may be from stream_options removal, not auth
      !(await shouldIsolateProbeFailures())
    ) {
      // Fix A: wrap refreshCredentials in runWithOnPersist so the persist callback
      // executes INSIDE the per-connection mutex held by getAccessToken. This makes
      // [network refresh + DB write + outer-state mutation] one atomic step and
      // prevents concurrent requests from reading a stale refreshToken before the
      // DB has been updated (refresh_token_reused on Codex/OpenAI).
      //
      // Not every executor routes refresh through getAccessToken (e.g. github.ts
      // calls refreshCopilotToken directly). When the persistFn doesn't fire from
      // inside getAccessToken, we still need to do the credentials mutation + user
      // callback after refreshCredentials returns. The `persistFnRan` flag tracks
      // which path executed so we don't double-fire (race-prone) or skip (regression).
      // Front 3: remember the refresh_token we are about to present so that, if the
      // refresh fails as unrecoverable, we can tell a genuine death apart from a
      // stale-token reuse that a concurrent/sibling refresh already rotated past.
      const attemptedRefreshToken =
        typeof credentials?.refreshToken === "string" ? credentials.refreshToken : null;
      let persistFnRan = false;
      const persistFn = onCredentialsRefreshed
        ? async (refreshResult: Record<string, unknown>) => {
            persistFnRan = true;
            // Mutate the shared credentials object so subsequent executor calls
            // in this request see the new tokens. Runs INSIDE the mutex.
            Object.assign(credentials, refreshResult);
            await onCredentialsRefreshed(refreshResult);
          }
        : undefined;

      // #4038: build a compare-and-swap reread so getAccessToken can skip the persist if a
      // concurrent writer (sibling request / HealthCheck / replica) already rotated this
      // connection's refresh_token past the one we presented — overwriting would revert it
      // and revoke the token family. No connectionId ⇒ no guard (behavior unchanged).
      const casConnectionId =
        typeof credentials?.connectionId === "string" ? credentials.connectionId.trim() : "";
      const casReread = casConnectionId
        ? async () => {
            const latest = await getProviderConnectionById(casConnectionId);
            return typeof latest?.refreshToken === "string" ? latest.refreshToken : null;
          }
        : null;

      const newCredentials = (await refreshWithRetry(
        () =>
          runWithCasGuard(
            casReread ? { expectedRefreshToken: attemptedRefreshToken, reread: casReread } : null,
            () => runWithOnPersist(persistFn, () => executor.refreshCredentials(credentials, log))
          ),
        3,
        log,
        provider // Explicitly pass the provider to avoid universally tripping the "unknown" circuit breaker
      )) as null | {
        accessToken?: string;
        copilotToken?: string;
      };

      if (newCredentials?.accessToken || newCredentials?.copilotToken) {
        log?.info?.("TOKEN", `${provider?.toUpperCase()} | refreshed`);

        // Fall back to post-mutex mutation only for executors that don't route
        // through getAccessToken (and therefore never fire onPersist). For
        // executors that DO route through it (Codex, Claude, Gemini, etc.) the
        // mutation already happened atomically inside the mutex.
        if (!persistFnRan) {
          Object.assign(credentials, newCredentials);
          if (onCredentialsRefreshed) {
            await onCredentialsRefreshed(newCredentials);
          }
        }

        // Retry with new credentials — model + extra headers follow translatedBody.model so they
        // stay aligned if this block ever runs after a path that mutates body.model (e.g. fallback).
        try {
          const retryModelId = String(translatedBody.model || effectiveModel);
          const retryBody = await prepareUpstreamBody({
            translatedBody,
            modelToCall: retryModelId,
            ...trustedEffortContext,
            provider,
            targetFormat,
            credentials: getExecutionCredentials(),
            log,
            bypassDefaultToolLimit: isOpencodeClient,
            isOpencodeClient,
            rawBody: body,
            clientRawRequest,
          });
          assertManagedLeaseFence(getExecutionConnectionId(getExecutionCredentials()));
          const retryResult = normalizeExecutorResult(
            await runWithCapture(providerRequestCapture, () =>
              executor.execute({
                model: retryModelId,
                body: retryBody,
                stream: upstreamStream,
                credentials: getExecutionCredentials(),
                signal: streamController.signal,
                log,
                extendedContext,
                upstreamExtraHeaders: buildUpstreamHeadersForExecute(retryModelId),
                clientHeaders: buildExecutorClientHeaders(clientRawRequest?.headers, userAgent),
                clientResponseFormat,
                onCredentialsRefreshed,
                skipUpstreamRetry: isCombo,
                contextEditing: { enabled: contextEditingEnabled },
                correlationId,
              })
            )
          );

          if (retryResult.response.ok) {
            providerResponse = retryResult.response;
            providerUrl = retryResult.url;
            providerHeaders = new Headers(retryResult.headers || {});
            finalBody = providerRequestCapture.body(retryResult.transformedBody);
            reqLogger.logTargetRequest(providerUrl, providerHeaders, finalBody);
            updatePendingScope(pendingScope, {
              providerRequest: finalBody,
              providerUrl,
              stage: "provider_response_started",
            });
            upstreamErrorParsed = false; // Reset since new response is OK
          } else {
            providerResponse = retryResult.response;
            upstreamErrorParsed = false; // Let it be parsed downstream
          }
        } catch (retryErr) {
          const retryLeaseFenceCode = getManagedLeaseFenceErrorCode(
            getUpstreamErrorIdentifier(retryErr)
          );
          if (retryLeaseFenceCode) return managedLeaseFenceErrorResult(retryLeaseFenceCode);
          // Refresh succeeded but the retry leg failed (network blip, AbortError,
          // executor throw). Don't swallow — the operator-visible signal "the user
          // saw 401 even though auth was actually fixed" is much more confusing
          // than the original 401 alone. Surface at error level with sanitization.
          log?.error?.(
            "TOKEN",
            `${provider?.toUpperCase()} | retry after refresh failed: ${sanitizeErrorMessage(retryErr)}`
          );
        }
      } else {
        log?.warn?.("TOKEN", `${provider?.toUpperCase()} | refresh failed`);
        if (isUnrecoverableRefreshError(newCredentials) && onCredentialsRefreshed) {
          // Front 3 (reuse-race tolerance): before deactivating, re-read the DB.
          // If a sibling/concurrent refresh already rotated this connection's
          // refresh_token (common for Codex/OpenAI under one shared Auth0 client),
          // the failure we saw was a stale-token reuse — the account is healthy
          // with the newer token, so keep it active instead of killing it.
          let alreadyRotated = false;
          if (typeof connectionId === "string" && connectionId && attemptedRefreshToken) {
            try {
              const latest = await getProviderConnectionById(connectionId);
              if (wasRefreshTokenRotated(attemptedRefreshToken, latest?.refreshToken)) {
                alreadyRotated = true;
                log?.warn?.(
                  "TOKEN",
                  `${provider.toUpperCase()} | refresh_token already rotated by a concurrent refresh — keeping connection active`
                );
              }
            } catch {
              // DB read failed — fall through to the safe default (deactivate).
            }
          }
          if (!alreadyRotated) {
            await onCredentialsRefreshed({ testStatus: "expired", isActive: false });
          }
        }
      }
    }

    // Check provider response - return error info for fallback handling
    providerFailure: if (!providerResponse.ok) {
      trackPendingRequest(model, provider, connectionId, false);

      let statusCode = providerResponse.status;
      let message = "";
      let retryAfterMs: number | null = null;
      let upstreamErrorCode: string | undefined;
      let upstreamErrorType: string | undefined;

      if (upstreamErrorParsed) {
        statusCode = parsedStatusCode;
        message = parsedMessage;
        retryAfterMs = parsedRetryAfterMs;
      } else {
        const details = await parseUpstreamError(providerResponse, provider);
        statusCode = details.statusCode;
        message = details.message;
        retryAfterMs = details.retryAfterMs;
        upstreamErrorBody = details.responseBody;
        upstreamErrorCode = typeof details.errorCode === "string" ? details.errorCode : undefined;
        upstreamErrorType = typeof details.errorType === "string" ? details.errorType : undefined;
      }

      // Gateways like agentrouter misstate temporary quota exhaustion as 403/400,
      // which downstream classification treats as AUTH_ERROR and clients like
      // Claude Code treat as permanent. Restate to 429 (+ synthetic Retry-After)
      // BEFORE any classification so both the fallback engine and the surfaced
      // client status see a retryable error. Registry-scoped per provider.
      const restatement = applyStatusRestatement({
        provider,
        status: statusCode,
        message,
        body: upstreamErrorBody,
        retryAfterMs,
      });
      if (restatement.ruleId) {
        statusCode = restatement.status;
        retryAfterMs = restatement.retryAfterMs;
        log?.info?.(
          "STATUS_RESTATE",
          `${provider} ${restatement.fromStatus}→${statusCode} (${restatement.ruleId})`
        );
      }

      const signatureRecovery = pipelineRecovered
        ? { attempted: false, succeeded: false, execution: null, error: null, recoveryBody: null }
        : await recoverAnthropicThinkingSignature({
            provider,
            statusCode,
            message,
            body: translatedBody,
            execute: async (recoveryBody) => {
              translatedBody = recoveryBody as typeof translatedBody;
              return executeProviderRequest(currentModel, false);
            },
            parseError: (response) => parseUpstreamError(response, provider),
          });
      if (!pipelineRecovered && signatureRecovery.attempted && signatureRecovery.execution) {
        providerResponse = signatureRecovery.execution.response;
        if (signatureRecovery.succeeded) {
          providerUrl = signatureRecovery.execution.url;
          providerHeaders = signatureRecovery.execution.headers;
          finalBody = providerRequestCapture.body(signatureRecovery.execution.transformedBody);
          reqLogger.logTargetRequest(providerUrl, providerHeaders, finalBody);
          updatePendingScope(pendingScope, {
            providerRequest: finalBody,
            providerUrl,
            stage: "provider_response_started",
          });
          log?.info?.(
            "THINKING_SIGNATURE",
            `Recovered ${provider}/${currentModel} after one historical-thinking retry`
          );
        } else if (signatureRecovery.error) {
          statusCode = signatureRecovery.error.statusCode;
          message = signatureRecovery.error.message;
          retryAfterMs = signatureRecovery.error.retryAfterMs;
          upstreamErrorBody = signatureRecovery.error.responseBody;
          upstreamErrorCode =
            typeof signatureRecovery.error.errorCode === "string"
              ? signatureRecovery.error.errorCode
              : undefined;
          upstreamErrorType =
            typeof signatureRecovery.error.errorType === "string"
              ? signatureRecovery.error.errorType
              : undefined;
        }
      }

      if (signatureRecovery.succeeded) break providerFailure;

      // #10281 — tiny-budget reasoning probes (e.g. Claude Code's `/model` check
      // sends `max_tokens: 1`): the model burns the whole budget on thinking, and
      // some upstreams (e.g. api.cline.bot for deepseek-v4-flash) answer the empty
      // outcome with a 5xx ("empty response content") instead of a truncated 200.
      // Answer such probes with a valid truncated response rather than relaying the
      // upstream failure — which would also mark the connection unavailable and
      // poison fallback/cooldown bookkeeping for a request that is only a probe.
      if (
        !stream &&
        isTinyBudgetReasoningProbe({ model: currentModel, body: finalBody || translatedBody }) &&
        isEmptyContentUpstreamFailure(statusCode, message)
      ) {
        providerResponse = buildReasoningProbeTruncatedResponse({
          model: currentModel,
          maxTokens: toPositiveInteger(
            (finalBody || translatedBody)?.max_tokens ??
              (finalBody || translatedBody)?.max_completion_tokens
          ),
          requestId: skillRequestId,
        });
        log?.warn?.(
          "PROBE",
          `Reasoning probe (max_tokens < ${REASONING_BUFFER_MIN_TRIGGER}) answered with truncated 200 — upstream reported "${message}"`
        );
        break providerFailure;
      }

      const errorConnectionId = getCurrentConnectionId() || connectionId;
      await applyProviderFailureClassification({
        statusCode,
        message,
        headers: providerResponse.headers,
        upstreamErrorBody,
        retryAfterMs,
        targetModel: currentModel,
      });

      appendRequestLog({
        model,
        provider,
        connectionId: errorConnectionId,
        status: `FAILED ${statusCode}`,
      }).catch(() => {});

      const errMsg = formatProviderError(new Error(message), provider, model, statusCode);
      const safeErrMsg = sanitizeErrorMessage(errMsg) || "Upstream provider error";
      const safeUpstreamErrorBody = sanitizeUpstreamDetails(upstreamErrorBody);
      console.log(`${COLORS.red}[ERROR] ${safeErrMsg}${COLORS.reset}`);

      // Log Antigravity retry time if available
      if (retryAfterMs && provider === "antigravity") {
        const retrySeconds = Math.ceil(retryAfterMs / 1000);
        log?.debug?.("RETRY", `Antigravity quota reset in ${retrySeconds}s (${retryAfterMs}ms)`);
      }

      // Log error with full request body for debugging
      reqLogger.logError(new Error(message), finalBody || translatedBody);
      reqLogger.logProviderResponse(
        providerResponse.status,
        providerResponse.statusText,
        providerResponse.headers,
        safeUpstreamErrorBody
      );

      // Rate limiter updated in applyProviderFailureClassification

      // ── T5: Intra-family model fallback ──────────────────────────────────────
      // Before returning a model-unavailable error upstream, try sibling models
      // from the same family. This keeps the request alive on the same account
      // instead of failing the entire combo.
      const familyRecovery = onFailure({
        view: { kind: "pipeline" },
        status: statusCode,
        message,
        provider,
        model: currentModel,
        connectionId: String(getCurrentConnectionId() || connectionId || ""),
        allowAccountRotation: !managedLease && comboStrategy !== "context-relay",
        allowModelFallback: !pipelineRecovered,
        isolateProbe: await shouldIsolateProbeFailures(),
        nextModel: getNextFamilyFallback(currentModel, triedModels, provider),
        canRefresh: false,
      });
      if (!pipelineRecovered && familyRecovery.dispatch.action === "fallback-model") {
        const nextModel = familyRecovery.dispatch.nextModel;
        if (nextModel) {
          triedModels.add(nextModel);
          currentModel = nextModel;
          translatedBody.model = nextModel;
          log?.info?.(
            "MODEL_FALLBACK",
            `${model} unavailable (${statusCode}) → trying ${nextModel}`
          );
          // Re-execute with the fallback model
          try {
            const fallbackResult = await executeProviderRequest(nextModel, false);
            if (fallbackResult.response.ok) {
              providerResponse = fallbackResult.response;
              providerUrl = fallbackResult.url;
              providerHeaders = fallbackResult.headers;
              finalBody = providerRequestCapture.body(fallbackResult.transformedBody);
              reqLogger.logTargetRequest(providerUrl, providerHeaders, finalBody);
              updatePendingScope(pendingScope, {
                providerRequest: finalBody,
                providerUrl,
                stage: "provider_response_started",
              });
              // Continue processing with the fallback response — skip error return
              log?.info?.("MODEL_FALLBACK", `Serving ${nextModel} as fallback for ${model}`);
              // Jump to streaming/non-streaming handling below
              // We fall through by NOT returning here
            } else {
              // Fallback also failed — return original error
              persistAttemptLogs({
                status: statusCode,
                error: safeErrMsg,
                providerRequest: finalBody || translatedBody,
                providerResponse: safeUpstreamErrorBody,
                clientResponse: buildErrorBody(statusCode, errMsg),
                cacheSource: "upstream",
              });
              persistFailureUsage(statusCode, "model_unavailable");
              return createErrorResult(
                statusCode,
                errMsg,
                retryAfterMs,
                upstreamErrorCode,
                upstreamErrorType,
                upstreamErrorBody,
                { passthrough: sourceFormat === FORMATS.CLAUDE }
              );
            }
          } catch {
            persistAttemptLogs({
              status: statusCode,
              error: safeErrMsg,
              providerRequest: finalBody || translatedBody,
              providerResponse: safeUpstreamErrorBody,
              clientResponse: buildErrorBody(statusCode, errMsg),
              cacheSource: "upstream",
            });
            persistFailureUsage(statusCode, "model_unavailable");
            return createErrorResult(
              statusCode,
              errMsg,
              retryAfterMs,
              upstreamErrorCode,
              upstreamErrorType,
              upstreamErrorBody,
              { passthrough: sourceFormat === FORMATS.CLAUDE }
            );
          }
        } else {
          persistAttemptLogs({
            status: statusCode,
            error: safeErrMsg,
            providerRequest: finalBody || translatedBody,
            providerResponse: safeUpstreamErrorBody,
            clientResponse: buildErrorBody(statusCode, errMsg),
            cacheSource: "upstream",
          });
          persistFailureUsage(statusCode, "model_unavailable");
          return createErrorResult(
            statusCode,
            errMsg,
            retryAfterMs,
            upstreamErrorCode,
            upstreamErrorType,
            upstreamErrorBody,
            { passthrough: sourceFormat === FORMATS.CLAUDE }
          );
        }
      } else if (isContextOverflowError(statusCode, message)) {
        const familyCandidates = getModelFamily(currentModel, provider).filter(
          (m) => m !== currentModel && !triedModels.has(m)
        );
        const nextModel =
          findLargerContextModel(currentModel, familyCandidates, provider) ??
          getNextFamilyFallback(currentModel, triedModels, provider);
        if (nextModel) {
          triedModels.add(nextModel);
          currentModel = nextModel;
          translatedBody.model = nextModel;
          log?.info?.(
            "CONTEXT_OVERFLOW_FALLBACK",
            `${model} context overflow → trying ${nextModel}`
          );
          try {
            const fallbackResult = await executeProviderRequest(nextModel, false);
            if (fallbackResult.response.ok) {
              providerResponse = fallbackResult.response;
              providerUrl = fallbackResult.url;
              providerHeaders = fallbackResult.headers;
              finalBody = providerRequestCapture.body(fallbackResult.transformedBody);
              reqLogger.logTargetRequest(providerUrl, providerHeaders, finalBody);
              updatePendingScope(pendingScope, {
                providerRequest: finalBody,
                providerUrl,
                stage: "provider_response_started",
              });
              log?.info?.(
                "CONTEXT_OVERFLOW_FALLBACK",
                `Serving ${nextModel} as fallback for ${model}`
              );
            } else {
              persistAttemptLogs({
                status: statusCode,
                error: safeErrMsg,
                providerRequest: finalBody || translatedBody,
                providerResponse: safeUpstreamErrorBody,
                clientResponse: buildErrorBody(statusCode, errMsg),
                cacheSource: "upstream",
              });
              persistFailureUsage(statusCode, "context_overflow");
              return createErrorResult(
                statusCode,
                errMsg,
                retryAfterMs,
                upstreamErrorCode,
                upstreamErrorType,
                upstreamErrorBody,
                { passthrough: sourceFormat === FORMATS.CLAUDE }
              );
            }
          } catch {
            persistAttemptLogs({
              status: statusCode,
              error: safeErrMsg,
              providerRequest: finalBody || translatedBody,
              providerResponse: safeUpstreamErrorBody,
              clientResponse: buildErrorBody(statusCode, errMsg),
              cacheSource: "upstream",
            });
            persistFailureUsage(statusCode, "context_overflow");
            return createErrorResult(
              statusCode,
              errMsg,
              retryAfterMs,
              upstreamErrorCode,
              upstreamErrorType,
              upstreamErrorBody,
              { passthrough: sourceFormat === FORMATS.CLAUDE }
            );
          }
        } else {
          persistAttemptLogs({
            status: statusCode,
            error: safeErrMsg,
            providerRequest: finalBody || translatedBody,
            providerResponse: safeUpstreamErrorBody,
            clientResponse: buildErrorBody(statusCode, errMsg),
            cacheSource: "upstream",
          });
          persistFailureUsage(statusCode, "context_overflow");
          return createErrorResult(
            statusCode,
            errMsg,
            retryAfterMs,
            upstreamErrorCode,
            upstreamErrorType,
            upstreamErrorBody,
            { passthrough: sourceFormat === FORMATS.CLAUDE }
          );
        }
      } else {
        persistAttemptLogs({
          status: statusCode,
          error: safeErrMsg,
          providerRequest: finalBody || translatedBody,
          providerResponse: safeUpstreamErrorBody,
          clientResponse: buildErrorBody(statusCode, errMsg),
          cacheSource: "upstream",
        });
        persistFailureUsage(statusCode, `upstream_${statusCode}`);

        // Emergency budget fallback is orchestrated exclusively by the routing layer
        // (src/sse/handlers/chat.ts), which resolves credentials FOR the emergency
        // provider through account selection. The executor-level hop that used to
        // live here re-sent the FAILING provider's credentials to the emergency
        // provider's endpoint (e.g. the OpenAI API key to integrate.api.nvidia.com)
        // — a cross-provider credential leak that also never succeeded upstream.
        return createErrorResult(
          statusCode,
          errMsg,
          retryAfterMs,
          upstreamErrorCode,
          upstreamErrorType,
          upstreamErrorBody,
          { passthrough: sourceFormat === FORMATS.CLAUDE }
        );
      }
      // ── End T5 ───────────────────────────────────────────────────────────────
    }
  }

  // Non-streaming response
  if (!stream) {
    return await runNonStreamingLeg({
      apiKeyInfo,
      applyProviderFailureClassification,
      assertManagedLeaseFence,
      attachCompressionUsageReceiptAfterAnalytics,
      body,
      bodyForCacheWrite,
      claudePromptCacheLogMeta,
      clientRawRequest,
      clientRequestedResponsesStream,
      clientResponseFormat,
      comboStrategy,
      compressionResponseMeta,
      connectionId,
      contextEditingEnabled,
      copilotCompatibleReasoning,
      credentials,
      currentModel,
      customToolNames,
      echoModel,
      effectiveModel,
      effectiveServiceTier,
      endpointPath,
      executeProviderRequest,
      executeRefreshCredentials,
      fallbackAttempts,
      finalBody,
      getCurrentConnectionId,
      getManagedLeaseFenceErrorCode,
      handleCredentialsRefreshed,
      idempotencyKey,
      injectionResult,
      isClaudeCodeCompatible,
      isCombo,
      isResponsesEndpoint,
      log,
      managedLease,
      managedLeaseFenceErrorResult,
      memoryOwnerId,
      memorySettings,
      model,
      onRequestSuccess,
      pendingConnId,
      pendingRequestId,
      pendingScope,
      persistAttemptLogs,
      persistFailureUsage,
      pipelineRecovered,
      pipelineSessionId,
      preserveCacheControl,
      provider,
      providerHeaders,
      providerRequestCapture,
      providerResponse,
      reasoningCacheScope,
      reasoningReplayHistory,
      reqLogger,
      requestToolIdentityMap,
      resolveReportedServiceTier,
      semanticCacheEnabled,
      sessionAffinityKey,
      skillRequestId,
      sourceFormat,
      startTime,
      stream,
      targetFormat,
      toolNameMap,
      traceEnabled,
      traceId,
      translatedBody,
      triedModels,
      videoBridgeObserved,
      webFetchFallbackPlan,
      webSearchFallbackPlan,
    });

  }

  // Streaming response
  // #3089 — some "reasoning" openai-compatible upstreams ignore a stream:true
  // request and return a complete application/json chat-completion body instead
  // of an SSE stream. The readiness check below only recognizes SSE `data:`
  // frames, so that body produced a spurious STREAM_EARLY_EOF / HTTP 502 even
  // though it carried valid content/reasoning_content. Detect a JSON (non-SSE)
  // upstream body and synthesize an equivalent OpenAI SSE stream so the
  // streaming pipeline (and the client) get a valid stream.
  providerResponse = await maybeConvertJsonBodyToSse(providerResponse, { log, provider, model });
  const streamReadinessPolicy = resolveStreamReadinessTimeout({
    baseTimeoutMs: STREAM_READINESS_TIMEOUT_MS,
    provider,
    model,
    body: (finalBody || translatedBody) as Record<string, unknown> | null | undefined,
    maxTimeoutMs: agentGoalPolicy.detected
      ? Math.max(STREAM_READINESS_MAX_TIMEOUT_MS, agentGoalPolicy.readinessMaxTimeoutMs)
      : STREAM_READINESS_MAX_TIMEOUT_MS,
  });
  if (streamReadinessPolicy.timeoutMs !== streamReadinessPolicy.baseTimeoutMs) {
    log?.debug?.(
      "STREAM",
      `adaptive readiness timeout=${streamReadinessPolicy.timeoutMs}ms base=${streamReadinessPolicy.baseTimeoutMs}ms reason=${streamReadinessPolicy.reasons.join(",")}`
    );
  }

  const streamReadiness = await ensureStreamReadiness(providerResponse, {
    timeoutMs: streamReadinessPolicy.timeoutMs,
    maxTimeoutMs: streamReadinessPolicy.maxTimeoutMs,
    provider,
    model,
    log,
  });
  if (streamReadiness.ok === false) {
    const { response: failureResponse, reason } = streamReadiness;
    const { classificationReason, upstreamDiagnostic } = streamReadiness;
    trackPendingRequest(model, provider, connectionId, false);
    appendRequestLog({
      model,
      provider,
      connectionId,
      status: `FAILED ${failureResponse.status}`,
    }).catch(() => {});
    persistAttemptLogs({
      status: failureResponse.status,
      error: reason,
      providerRequest: finalBody || translatedBody,
      clientResponse: buildErrorBody(
        failureResponse.status,
        classificationReason,
        upstreamDiagnostic ? { error: { message: upstreamDiagnostic } } : undefined
      ),
      claudeCacheMeta: claudePromptCacheLogMeta,
      cacheSource: "upstream",
    });
    persistFailureUsage(failureResponse.status, streamReadiness.code);
    // Do NOT call onStreamFailure — a stream stall is an upstream issue,
    // not an account/quota failure. Marking the account unavailable here
    // would lock out legitimate accounts when the upstream hangs.
    return {
      success: false,
      status: failureResponse.status,
      error: reason,
      classificationError: classificationReason,
      errorType: streamReadiness.type,
      errorCode: streamReadiness.code,
      response: failureResponse,
    };
  }
  providerResponse = streamReadiness.response;

  // Notify success - caller can clear error status if needed
  if (onRequestSuccess) {
    await onRequestSuccess();
  }

  const responseHeaders = assembleStreamingResponseHeaders({
    providerHeaders: providerResponse.headers,
    provider,
    model,
    pendingRequestId,
    compressionResponseMeta,
    comboStrategy,
    fallbackAttempts,
  });

  // The streaming headers (turn-state included, when present) are committed to
  // the client from here on — record which connection minted the blob so a
  // later cross-account echo can be stripped (Codex failover guard). The
  // in-place failover update means `credentials` is the winning account.
  if (provider === "codex" && readCodexTurnStateHeader(providerResponse.headers)) {
    noteCodexTurnStateProvenance(
      getCodexClientSessionId(clientRawRequest?.headers),
      credentials?.connectionId
    );
  }

  // Create transform stream with logger for streaming response
  let transformStream;
  const responseToolNameMap = mergeResponseToolNameMap(
    toolNameMap,
    (finalBody as Record<string, unknown> | null | undefined) ?? null
  );

  let streamCompletionRecorded = false;
  let streamFailureCompletionRecorded = false;

  // Callback to save call log when stream completes (include responseBody when provided by stream)
  const onStreamComplete = makeOnStreamComplete({
    persistAttemptLogs,
    getCurrentConnectionId,
    provider,
    model,
    credentials,
    log,
    clientResponseFormat,
    responseToolNameMap,
    finalBody,
    translatedBody,
    body,
    reasoningCacheScope,
    reasoningReplayHistory,
    contextEditingEnabled,
    skillRequestId,
    streamFailure,
    pendingRequestId,
    startTime,
    apiKeyInfo,
    isCombo,
    comboStrategy,
    endpointPath,
    traceId,
    calculateCost,
    recordCost,
    memoryOwnerId,
    memorySettings,
    videoBridgeObserved,
    pipelineSessionId,
    extractFacts,
    semanticCacheEnabled,
    bodyForCacheWrite,
    clientRawRequest,
    claudePromptCacheLogMeta,
    resolveReportedServiceTier,
    attachCompressionUsageReceiptAfterAnalytics,
    routingFinishReason,
    getStreamCompletionRecorded: () => streamCompletionRecorded,
    setStreamCompletionRecorded: (v) => {
      streamCompletionRecorded = v;
    },
    getStreamFailureCompletionRecorded: () => streamFailureCompletionRecorded,
    setStreamFailureCompletionRecorded: (v) => {
      streamFailureCompletionRecorded = v;
    },
    getEffectiveServiceTier: () => effectiveServiceTier,
    setEffectiveServiceTier: (t) => {
      effectiveServiceTier = t;
    },
  });


  const streamFailureFinalizers = streamFailure.createStreamFailureFinalizers({
    isFailureCompletionRecorded: () => streamFailureCompletionRecorded,
    isStreamCompletionRecorded: () => streamCompletionRecorded,
    onStreamComplete,
    persistFailureUsage,
    onStreamFailure,
  });
  const handleStreamFailure = streamFailureFinalizers.handleStreamFailure;
  onPipelineStreamError = streamFailureFinalizers.onPipelineStreamError;
  // #9653: gives a genuine, race-delayed completion a chance to land (see
  // createClientDisconnectGraceHandler's doc comment) before persisting a false
  // 499/0-tokens for a request that actually delivered its full response.
  onClientDisconnectFinalize = streamFailure.createClientDisconnectGraceHandler({
    isStreamCompletionRecorded: () => streamCompletionRecorded,
    gracePeriodMs: STREAM_DISCONNECT_GRACE_PERIOD_MS,
    finalize: (event) =>
      handleStreamFailure({
        status: 499,
        message: `Client disconnected: ${event.reason}`,
        code: "client_disconnected",
        type: "client_disconnected",
      }),
  });

  // For providers using Responses API format, translate stream back to openai (Chat Completions) format
  // UNLESS client is Droid CLI which expects openai-responses format back
  const needsResponsesTranslation =
    targetFormat === FORMATS.OPENAI_RESPONSES &&
    clientResponseFormat === FORMATS.OPENAI &&
    !isResponsesEndpoint &&
    !isDroidCLI;
  const streamStateBody = finalBody || body;

  // Client's explicit thinking intent (Anthropic Messages shape). Claude Code
  // sends `{type:"enabled"}` or `{type:"adaptive"}` to opt into relaying
  // upstream reasoning_content as Claude thinking blocks; `{type:"disabled"}`
  // or an omitted `thinking` field opts out. Kept false for every other
  // client schema (OpenAI / Responses), which never express intent through
  // `body.thinking`. Mirrors hasActiveClaudeThinking() so the request and
  // response sides agree on what counts as "thinking requested" — a prior
  // inline `=== "enabled"` check silently suppressed `adaptive` (the intent
  // Claude Code actually sends), leaking the mismatch as a broken tool-call
  // turn (call log 1787566395384-bab9ab: reasoning dropped → model emitted
  // DSML tool-call markers as plain text → incomplete `stop` finish).
  const requestedThinking = hasActiveClaudeThinking((body ?? {}) as Record<string, unknown>);

  if (needsResponsesTranslation) {
    // Provider returns openai-responses, translate to openai (Chat Completions) that clients expect
    log?.debug?.("STREAM", `Responses translation mode: openai-responses → openai`);
    transformStream = createSSETransformStreamWithLogger(
      "openai-responses",
      "openai",
      provider,
      reqLogger,
      responseToolNameMap,
      model,
      connectionId,
      streamStateBody,
      onStreamComplete,
      apiKeyInfo,
      handleStreamFailure,
      copilotCompatibleReasoning,
      false,
      requestedThinking,
      customToolNames,
      // openai-responses → openai translation still wants the namespace identity
      // map for #7936-style round-trip closure when the client also speaks
      // Responses (Codex CLI).
      requestToolIdentityMap
    );
  } else if (needsTranslation(targetFormat, clientResponseFormat)) {
    // Standard translation for other providers
    log?.debug?.("STREAM", `Translation mode: ${targetFormat} → ${clientResponseFormat}`);
    transformStream = createSSETransformStreamWithLogger(
      targetFormat,
      clientResponseFormat,
      provider,
      reqLogger,
      responseToolNameMap,
      model,
      connectionId,
      streamStateBody,
      onStreamComplete,
      apiKeyInfo,
      handleStreamFailure,
      copilotCompatibleReasoning,
      // Suppress the `</think>` close marker for clients that render it verbatim
      // (e.g. OpenCode by UA; any client via `x-omniroute-thinking-marker: off`);
      // preserved for Claude Code / Cursor and unknown clients by default (#5245 /
      // #5312). Responses API clients always suppress it (structured reasoning
      // items make the marker meaningless); otherwise the header wins over the
      // UA allowlist.
      resolveSuppressThinkClose({
        userAgent: streamUserAgent,
        thinkingMarkerHeader,
        clientResponseFormat,
      }),
      requestedThinking,
      customToolNames,
      requestToolIdentityMap
    );
  } else {
    log?.debug?.("STREAM", `Standard passthrough mode`);
    transformStream = createPassthroughStreamWithLogger(
      provider,
      reqLogger,
      responseToolNameMap,
      model,
      connectionId,
      streamStateBody,
      onStreamComplete,
      apiKeyInfo,
      handleStreamFailure,
      clientResponseFormat,
      requestToolIdentityMap
    );
  }

    const finalStream = assembleStreamingPipeline({
      providerResponse,
      transformStream,
      streamController,
      createPiiTransform,
      clientRawRequestHeaders: clientRawRequest?.headers,
      clientResponseFormat,
      echoModel,
      responseHeaders,
      // Same adaptive budget the pre-handoff readiness gate above just used —
      // reasoning models that legitimately take a while to say anything keep
      // that same patience for their first REAL content, not just their first
      // lifecycle frame. See pipeWithDisconnect's own doc comment.
      contentStallTimeoutMs: streamReadinessPolicy.timeoutMs,
    });
    const clientFacingStream = wrapReadableStreamWithFinalize(
      finalStream,
      releaseTurnExecution
    );

    // ── Gamification event (fire-and-forget) ──
  await emitRequestGamificationEvent({ apiKeyId: apiKeyInfo?.id, model, provider });

    // ── Plugin onResponse hook (fire-and-forget) ──
    await runPluginOnResponseHook({
      requestId: traceId,
      body,
      model,
      provider,
      apiKeyInfo,
      headers: clientRawRequest?.headers,
      response: { status: 200, streamed: true },
    });

    const response = new Response(clientFacingStream, {
      headers: responseHeaders,
    });
    turnExecutionHandedOffToStream = true;
    return {
      success: true,
      response,
    };
  } finally {
    if (!turnExecutionHandedOffToStream) {
      releaseTurnExecution();
    }
  }
}
export function isTokenExpiringSoon(expiresAt, bufferMs = 5 * 60 * 1000) {
  if (!expiresAt) return false;
  const expiresAtMs = new Date(expiresAt).getTime();
  return expiresAtMs - Date.now() < bufferMs;
}
