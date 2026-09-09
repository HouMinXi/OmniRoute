import {
  extractRequestToolIdentityMap,
  resolveResponseToolNameMap,
} from "./chatCore/requestToolIdentity.ts";
import { runRequestPrelude } from "./chatCore/requestPrelude.ts";
import { runCacheAndCompress } from "./chatCore/cacheAndCompress.ts";
import { normalizeOpenAICompatibleTools } from "./chatCore/openAICompatibleTools.ts";
import {
  projectFailureUsageErrorCode,
  buildFailureUsageRecord,
  type FailureUsageAggregate,
} from "./chatCore/failureUsage.ts";
import { createTranslationFailureResult } from "./chatCore/translationFailure.ts";
import {
  extractSystemRoleMessages,
  relocateDirectiveOnlyMessages,
} from "./chatCore/claudeSystemRole.ts";
export {
  extractSystemRoleMessages,
  relocateDirectiveOnlyMessages,
} from "./chatCore/claudeSystemRole.ts";

import { buildPostCallGuardrailContext } from "./chatCore/postCallGuardrailContext.ts";
import { storeSemanticCacheResponse } from "./chatCore/semanticCacheStore.ts";
import { buildNonStreamingResponseHeaders } from "./chatCore/nonStreamingResponseHeaders.ts";
import { buildNonStreamingJsonResponse } from "./chatCore/nonStreamingJsonResponse.ts";
import { maybeConvertJsonBodyToSse } from "./chatCore/jsonBodyToSse.ts";
import { assembleStreamingResponseHeaders } from "./chatCore/streamingResponseHeaders.ts";
import { makeOnStreamComplete } from "./chatCore/streamMaterialize.ts";
import { assembleStreamingPipeline } from "./chatCore/streamingPipeline.ts";
import { createRoutingEvent, emitRoutingEvent } from "../services/routing/index.ts";

import { routingFinishReason } from "./chatCore/routingFinishReason.ts";
import {
  getHeaderValueCaseInsensitive,
  isNoMemoryRequested,
  resolveCompressionHeader,
} from "./chatCore/headers.ts";

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
import { runProviderExecutionPipeline } from "./chatCore/providerExecutionPipeline.ts";
import { onStreamThrow } from "./chatCore/recoveryPolicy.ts";
import { runNonStreamingProviderLeg } from "./chatCore/nonStreamingProviderLeg.ts";
import type { NonStreamingProviderLegResult } from "@/lib/skills/toolLoopTypes.ts";
import {
  applyServerOwnedToolLoopIfNeeded,
  derivePostInjectionRequestIdentity,
  followUpLegInput,
} from "./chatCore/serverOwnedToolLoopWire.ts";
import { finalizeToolLoopError } from "./chatCore/nonStreamingFinalization.ts";
import { markCodexScopeRateLimited } from "./chatCore/codexFailover.ts";
import { deleteSessionAccountAffinity } from "@/lib/db/sessionAccountAffinity";
import {
  buildStreamingResponseHeaders,
  stripStaleForwardingHeaders,
} from "./chatCore/responseHeaders.ts";
import { maybeSyncClaudeExtraUsageState } from "./chatCore/telemetryHelpers.ts";
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
import { runMemoryExtractionGate } from "./chatCore/memoryExtraction.ts";
import { normalizeHeaders } from "../utils/headers.ts";
import { stripStore, usesClaudeBridge } from "./chatCore/agentRouterProtocol.ts";
import { normalizeClaudeToolsForDispatch } from "./chatCore/claudeToolDefaults.ts";
import { translateRequest, needsTranslation } from "../translator/index.ts";
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
import { createStreamController } from "../utils/streamHandler.ts";
import * as streamFailure from "../utils/streamFailureFinalization.ts";
import { normalizeUsage } from "../utils/usageTracking.ts";
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
import { normalizeMimoThinking } from "../services/mimoThinking.ts";
import {
  isOpencodeGoProvider,
  stripBooleanReasoning,
} from "../services/opencodeReasoningSanitizer.ts";
import {
  normalizeClaudeAdaptiveThinking,
  normalizeClaudeDisabledThinkingEffort,
} from "../services/claudeAdaptiveThinking.ts";
import { shouldUseMidConversationSystem } from "../executors/claudeIdentity.ts";
import { normalizeClaudeHaikuConstraints } from "../services/claudeHaikuConstraints.ts";
import { applyDefaultReasoningEffort } from "../services/defaultReasoningEffort.ts";
import { echoModelInObject } from "../services/responseModelEcho.ts";
import {
  stripGpt5SamplingWhenReasoning,
  stripGpt5ReasoningWhenTools,
} from "../services/gpt5SamplingGuard.ts";
import { getUnsupportedParams } from "../config/providerRegistry.ts";
import { stripUnsupportedParams } from "./chatCore/unsupportedParamsStrip.ts";
import { checkToolCallingRequiredButUnsupported } from "./chatCore/toolCallingRequiredCheck.ts";
import { supportsMaxTokens, getResolvedModelCapabilities } from "@/lib/modelCapabilities.ts";
import {
  checkRequestCapabilityFit,
  deriveRequestCapabilityRequirements,
  buildCapabilityMismatchMessage,
} from "@/shared/constants/capabilities/capabilityFilter.ts";
import { isFeatureFlagEnabled, isServerOwnedToolLoopEnabled } from "@/shared/utils/featureFlags.ts";
import {
  REASONING_BUFFER_MIN_TRIGGER,
  buildReasoningProbeTruncatedResponse,
  isEmptyContentUpstreamFailure,
  isTinyBudgetReasoningProbe,
  toPositiveInteger,
} from "../services/reasoningTokenBuffer.ts";
import { normalizeThinkingForModel } from "@/shared/constants/modelSpecs.ts";
import {
  buildErrorBody,
  createErrorResult,
  parseUpstreamError,
  formatProviderError,
  sanitizeErrorMessage,
} from "../utils/error.ts";
import {
  reportMalformed200,
  detectMalformedNonStream,
  describeMalformedNonStream,
} from "../utils/diagnostics.ts";
import { checkTokenLimits } from "@omniroute/open-sse/services/tokenLimitCounter.ts";
import {
  COOLDOWN_MS,
  HTTP_STATUS,
  PROVIDER_MAX_TOKENS,
  STREAM_READINESS_MAX_TIMEOUT_MS,
  STREAM_READINESS_TIMEOUT_MS,
  ANTIGRAVITY_PRE_RESPONSE_TIMEOUT_CODE,
  STREAM_DISCONNECT_GRACE_PERIOD_MS,
} from "../config/constants.ts";
import { applyStatusRestatement } from "../config/upstreamStatusRestatement.ts";
import { classifyProviderError, PROVIDER_ERROR_TYPES } from "../services/errorClassifier.ts";
import { updateProviderConnection, getProviderConnectionById } from "@/lib/db/providers";
import { wasRefreshTokenRotated } from "@omniroute/open-sse/services/refreshSerializer.ts";
import { connectionHasExtraKeys } from "../services/apiKeyRotator.ts";
import { getSkillsModelIdForFormat } from "./chatCore/skillsFormat.ts";
import {
  isSemaphoreCapacityError,
  createStreamingErrorResult,
  getUpstreamErrorIdentifier,
} from "./chatCore/streamErrorResult.ts";
import { buildCacheUsageLogMeta } from "./chatCore/cacheUsageMeta.ts";
import { buildExecutorClientHeaders } from "./chatCore/executorClientHeaders.ts";
import { getExecutionConnectionId } from "./chatCore/executionCredentials.ts";
import { resolveExecutionCredentials as resolveExecutionCredentialsFor } from "./chatCore/executionCredentials.ts";
import { resolveExecutorWithProxy as resolveExecutorWithProxyFor } from "./chatCore/executorProxy.ts";
import type { ClaudeMessage } from "./chatCore/claudeMessageTypes.ts";
import { normalizeClaudeUpstreamMessages as normalizeClaudeUpstreamMessagesFor } from "./chatCore/claudeUpstreamMessages.ts";
import { executeProviderRequest as executeProviderRequestFromLeaf } from "./chatCore/executeProviderRequest.ts";
import { getQuotaScopeLabelForProvider } from "../services/antigravityQuotaFamily.ts";
import { getKimiTemporaryRateLimitResetAt } from "./chatCore/kimiQuotaRecovery.ts";
import { logAuditEvent } from "@/lib/compliance";
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
import { recordContextEditingTelemetryHook } from "./chatCore/contextEditingTelemetry.ts";
import { attachCompressionUsageReceiptAfterAnalytics as attachCompressionUsageReceiptAfterAnalyticsFor } from "./chatCore/compressionUsageReceipt.ts";
import { scheduleQuotaShareConsumption } from "./chatCore/quotaShareConsumption.ts";
import { emitRequestGamificationEvent } from "./chatCore/gamificationEvent.ts";
import { runPluginOnResponseHook } from "./chatCore/pluginOnResponse.ts";
import { isJsonRecord } from "./chatCore/nonStreamingResponseParse.ts";
import { recordNonStreamingUsageStats } from "./chatCore/nonStreamingUsageStats.ts";
import { normalizeExecutorResult } from "./chatCore/upstreamTimeouts.ts";
import { getModelNormalizeToolCallId, getModelPreserveOpenAIDeveloperRole } from "@/lib/db/models";
import { getProviderCredentials, extractSessionAffinityKey } from "@/sse/services/auth";

import { getCacheControlSettings } from "@/lib/cacheControlSettings";
import { guardrailRegistry } from "@/lib/guardrails";

import {
  shouldPreserveCacheControl,
  resolveConnectionCacheOverride,
} from "../utils/cacheControlPolicy.ts";
import { extractUsageFromResponse } from "./usageExtractor.ts";
import { updateFromHeaders, updateFromResponseBody } from "../services/rateLimitManager.ts";
import * as localLimiterErrors from "../services/rateLimitManager/errors.ts";
import { markBlocked as markAccountSemaphoreBlocked } from "../services/accountSemaphore.ts";
import {
  lockModel,
  lockModelIfPerModelQuota,
  hasPerModelQuota,
  recordCoreOwnedAntigravityQuotaState,
  shouldDeferAntigravityQuotaStateToCaller,
} from "../services/accountFallback.ts";
import { saveIdempotency } from "@/lib/idempotencyLayer";
import {
  getNextFamilyFallback,
  isContextOverflowError,
  findLargerContextModel,
  getModelFamily,
} from "../services/modelFamilyFallback.ts";
import { computeRequestHash, shouldDeduplicate } from "../services/requestDedup.ts";
import { isLocalStreamLifecycleError } from "@/shared/utils/circuitBreaker";
import { shouldIsolateProbeFailures } from "@/shared/utils/probeOrigin";
import { writeTerminalStatus } from "@/shared/utils/terminalStatus";
import { extractFacts } from "@/lib/memory/extraction";
import { handleToolCallExecution } from "@/lib/skills/interception";
import { MEMORY_BUILTIN_TOOL_NAMES } from "@/lib/skills/memoryBuiltins";
import { getClaudeCodeCompatibleRequestDefaults } from "@/lib/providers/requestDefaults";
import {
  buildClaudeCodeCompatibleRequest,
  resolveClaudeCodeCompatibleSessionId,
} from "../services/claudeCodeCompatible.ts";
import { classifyModelScope429 } from "../services/modelscopePolicy.ts";
import { incrementTokenUsage, isTpmExhausted } from "../services/geminiRateLimitTracker.ts";

/**
 * #12150 P1b: shape of handleChatCore's optional `videoBridgeLog` param — see
 * its destructure default below. `handleChatCore`'s own params object has no
 * type annotation (pre-existing convention for this god-function), so this
 * alias is applied via a local cast at each read site instead of widening
 * the whole destructure to a typed object.
 */
type VideoBridgeLogParam = { observed: boolean; redaction: VideoBridgeLogRedactionEntry[] } | null;

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
    isManagedLeaseFenceError,
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
    webFetchFallbackPlan,
    settings,
    isCodexResponsesEcho,
    echoModel,
    skillRequestId,
    pipelineSessionId,
    reasoningCacheScope,
    persistAttemptLogs,
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
  } = c1;
  // Closures created in the prelude capture that slice's locals. Rebind the two
  // that later lines assign through (`effectiveServiceTier`, compression
  // analytics write) so call sites after this point still see the live values.
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
  const cacheCompress = await runCacheAndCompress({
    body,
    credentials,
    log,
    clientRawRequest,
    connectionId,
    apiKeyInfo,
    comboName,
    isCombo,
    routingComboId,
    comboStepId,
    comboExecutionKey,
    reasoningTransportFallback,
    provider,
    model,
    startTime,
    traceId,
    getCurrentConnectionId,
    tokensCompressed,
    effectiveServiceTier,
    sourceFormat,
    nativeCodexPassthrough,
    backgroundReason,
    effectiveModel,
    targetFormat,
    preConversionClientToolNames,
    webSearchFallbackPlan,
    webFetchFallbackPlan,
    skillRequestId,
    compressionAnalyticsWritePromise,
    persistAttemptLogs,
    stream,
    semanticCacheEnabled,
    reqLogger,
  });
  if (cacheCompress.kind === "return") return cacheCompress.value;
  const c2 = cacheCompress.continue;
  body = c2.body;
  ({ tokensCompressed, compressionAnalyticsWritePromise } = c2);
  const {
    injectionResult,
    memoryOwnerId,
    memorySettings,
    compressionResponseMeta,
    contextEditingEnabled,
    preCompressionBody,
    runPostTranslationCompression,
  } = c2;

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
        body,
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
        normalizeClaudeUpstreamMessages(translatedBody, { preserveToolResultBlocks: true });
      }
    } else if (isClaudePassthrough) {
      // Pure passthrough: forward the body as-is without OpenAI round-trip.
      // The Claude→OpenAI→Claude double translation was lossy and corrupted
      // payloads at high context (150+ msgs, 100+ tools). Fix: #1359.
      // Claude Code sends well-formed Messages API payloads — trust them
      // regardless of combo strategy or cache_control settings.
      translatedBody = { ...body };
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

      // Legacy models reject role:"system" messages. Opus accepts them behind
      // its beta, and hoisting them breaks the prompt cache prefix.
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
        normalizeClaudeUpstreamMessages(translatedBody, { preserveToolResultBlocks: true });
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
      if (targetFormat === FORMATS.CLAUDE) {
        translatedBody._disableToolPrefix = true;
        normalizeClaudeUpstreamMessages(translatedBody);
      }

      // OpenAI-compatible providers only support function tools.
      // Non-function tool types (computer, mcp, web_search, custom, etc.) are handled:
      //   - tools with a name → converted to function format in-place before translation
      //   - tools without a name AND without .function → dropped (unconvertible)
      // This must happen before translateRequest, which validates and throws on unknown types.
      // Skip normalization when we are in native openai-compatible Responses passthrough mode
      // to preserve native tool definitions (exec with lark grammar, collaboration namespace, etc.).
      if (
        !nativeOpenAICompatibleResponsesPassthrough &&
        provider?.startsWith("openai-compatible-") &&
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
            `Dropped ${dropped} unconvertible tool(s) for openai-compatible provider`
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
      log?.debug?.(
        "PLUGIN",
        `onError hook error (non-fatal): ${pluginErr instanceof Error ? pluginErr.message : String(pluginErr)}`
      );
    }

    const parsedStatus = Number(error?.statusCode);
    const statusCode =
      Number.isInteger(parsedStatus) && parsedStatus >= 400 && parsedStatus <= 599
        ? parsedStatus
        : HTTP_STATUS.SERVER_ERROR;
    const message = error?.message || "Invalid request";
    const errorType = typeof error?.errorType === "string" ? error.errorType : null;
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

  // #3554: a combo/route may substitute the upstream model AFTER the client chose its
  // `thinking` value. Claude Code sends `thinking:{type:"disabled"}` for internal calls,
  // which claude-fable-5 (adaptive-only) rejects with a 400. Drop the now-invalid value
  // when the resolved target model rejects it; models that accept `disabled` are untouched.
  if (typeof finalModelToUpstream === "string") {
    translatedBody = normalizeThinkingForModel(translatedBody, finalModelToUpstream);
    // Claude Opus 4.7+/Fable 5 removed manual extended thinking: `thinking.type:"enabled"`
    // or any `thinking.budget_tokens` is a hard 400. Collapse any manual thinking that
    // reached this point (passthrough legacy shape, reasoning_effort buckets, per-model
    // defaults) to `{type:"adaptive"}` — effort stays on `output_config.effort`. Keyed on
    // the resolved upstream model, so it covers every routing mode. See claudeAdaptiveThinking.ts.
    translatedBody = normalizeClaudeAdaptiveThinking(translatedBody, finalModelToUpstream);
    // Opus 5 allows disabled thinking only through high effort on Anthropic's direct
    // Messages API. The helper scopes this constraint to `anthropic` and `claude`;
    // GitHub Copilot and Claude Web use separate upstream contracts.
    translatedBody = normalizeClaudeDisabledThinkingEffort(
      translatedBody,
      finalModelToUpstream,
      provider
    );
    // Claude Haiku rejects `thinking.type:"adaptive"` and `output_config.effort`
    // (both Sonnet 4.6 / Opus 4.5+ only). Several paths can still emit those
    // shapes on a Haiku target — native passthrough, reasoning_effort buckets,
    // per-model defaults — so collapse them to a Haiku-valid shape here, after
    // model substitution. Mirrors upstream 9router 401d93bd5. See
    // services/claudeHaikuConstraints.ts.
    translatedBody = normalizeClaudeHaikuConstraints(translatedBody, finalModelToUpstream);
    // #6879: per-model default reasoning_effort, injected only when the request
    // carries no reasoning field of any shape — an explicit client/combo-leg value
    // always wins. Scoped to the OpenAI Chat Completions dispatch shape (the shape
    // `reasoning_effort` is native to); unset ModelSpec.defaultReasoningEffort is a
    // no-op. #7694: `modelInfo.resolvedThinkingEffort` — set when the request's model
    // id carried a `<prefix>/<model>-{effort}` synced-model alias suffix
    // (`src/sse/services/model.ts`) — takes priority over the static per-model default.
    // The synced catalog's vendor-declared `defaultThinkingEffort` (OpenRouter
    // `reasoning.default_effort`, captured by `detectDefaultThinkingEffort`) is the
    // lowest-priority default: it only fires when neither the suffix alias nor a
    // static operator default exists. See open-sse/services/defaultReasoningEffort.ts.
    if (targetFormat === FORMATS.OPENAI) {
      translatedBody = applyDefaultReasoningEffort(
        translatedBody,
        finalModelToUpstream,
        (modelInfo as { resolvedThinkingEffort?: string })?.resolvedThinkingEffort,
        (modelInfo as { defaultThinkingEffort?: string })?.defaultThinkingEffort
      );
    }
  }

  // Xiaomi MiMo controls reasoning ONLY via `thinking:{type:"enabled"|"disabled"}` and
  // rejects unknown/extra params with a strict "400 Param Incorrect". Map OmniRoute's
  // OpenAI reasoning signals onto that native shape: reduce any thinking object to
  // `{type}` and drop `reasoning_effort`/`reasoning`. See services/mimoThinking.ts.
  if (provider === "xiaomi-mimo") {
    translatedBody = normalizeMimoThinking(translatedBody);
  }

  // opencode-go backed providers (ollama-cloud, opencode-go, opencode,
  // opencode-zen) use a Go ChatCompletionRequest struct where `reasoning`
  // is typed as openai.Reasoning (a structured type). A boolean
  // `reasoning: true/false` — valid per the OpenAI API — causes a 400
  // "json: cannot unmarshal bool into Go struct field" on the Go side.
  // Strip the boolean before forwarding. See opencodeReasoningSanitizer.ts.
  if (isOpencodeGoProvider(provider)) {
    translatedBody = stripBooleanReasoning(translatedBody);
  }

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

  if (unsupported.length > 0) {
    const { strippedParams } = stripUnsupportedParams(translatedBody, unsupported);
    if (strippedParams.length > 0) {
      log?.warn?.(
        "PARAMS",
        `Stripped unsupported params for ${model}: ${strippedParams.join(", ")}`
      );
    }
  }

  // GPT-5 reasoning models (openai Chat Completions) reject temperature/top_p with a 400
  // whenever a reasoning effort is active, yet accept them under reasoning_effort=none (the
  // GPT-5.1+ default). A static unsupportedParams list can't express that, so strip sampling
  // conditionally here. The codex Responses path is already covered by the executor allowlist.
  translatedBody = stripGpt5SamplingWhenReasoning(
    translatedBody,
    provider,
    finalModelToUpstream,
    log
  );

  // GPT-5.x reasoning models on the raw openai Chat Completions surface reject function
  // `tools` combined with an active `reasoning_effort`: HTTP 400 "Function tools with
  // reasoning_effort are not supported ... Please use /v1/responses instead." This used to
  // be true for every GPT-5.x model on the plain `openai` provider, but #7242 (targetFormat
  // "openai-responses" on GPT_5_6_API_CAPABILITIES) now routes the GPT-5.6 family to
  // /v1/responses instead, which accepts tools + reasoning natively — so the strip must not
  // fire there. Pass the already-resolved `targetFormat` so the guard gates on the actual
  // upstream surface for this request instead of a model-name list. Port of 9router#2540.
  translatedBody = stripGpt5ReasoningWhenTools(
    translatedBody,
    provider,
    finalModelToUpstream,
    targetFormat,
    log
  );

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
    resolveExecutionCredentialsFor({
      credentials,
      nativeCodexPassthrough: nativeResponsesPassthrough,
      endpointPath,
      targetFormat,
      provider,
      ccSessionId,
      modelInfo,
    });

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
  const dedupHash = dedupEnabled ? computeRequestHash(dedupRequestBody, apiKeyInfo?.id) : null;

  // Compression mutates this; persistAttemptLogs is rebound onto the live
  // value before send in a later extract. Keep the binding live until then.
  void tokensCompressed;
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
      isModelScope,
      isOpencodeClient,
      log,
      model,
      onCredentialsRefreshed,
      pendingScope,
      provider,
      providerRequestCapture,
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
      upstreamStream,
      userAgent,
    };
    return executeProviderRequestFromLeaf(sendDeps, modelToCall, allowDedup);
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
          onCredentialsRefreshed: async () => {},
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
      if (isManagedLeaseFenceError(error)) return managedLeaseFenceErrorResult(error);
      if (isSemaphoreCapacityError(error)) {
        appendRequestLog({
          model,
          provider,
          connectionId,
          status: `FAILED ${error.code}`,
        }).catch(() => {});
        const failureMessage = error.message || "Semaphore timeout";
        persistAttemptLogs({
          status: HTTP_STATUS.RATE_LIMITED,
          error: failureMessage,
          providerRequest: finalBody || translatedBody,
          clientResponse: buildErrorBody(HTTP_STATUS.RATE_LIMITED, failureMessage),
          claudeCacheMeta: claudePromptCacheLogMeta,
          cacheSource: "upstream",
        });
        persistFailureUsage(HTTP_STATUS.RATE_LIMITED, error.code);
        const result = stream
          ? createStreamingErrorResult(HTTP_STATUS.RATE_LIMITED, failureMessage, error.code)
          : createErrorResult(HTTP_STATUS.RATE_LIMITED, failureMessage);
        return {
          ...result,
          errorType: "account_semaphore_capacity",
          errorCode: error.code,
        };
      }
      // abort(reason) can reject with a raw string lacking `name`/`status`; classify
      // it through isLocalStreamLifecycleError so it maps to 499 rather than the
      // 502 provider-failure default.
      const isRequestAborted = isLocalStreamLifecycleError(error);
      // #8376: proxyFetch tags unreachable transport failures so they remain
      // distinguishable from ordinary provider 5xx responses.
      const isProxyUnreachableFailure =
        !isRequestAborted && (error as { errorCode?: unknown })?.errorCode === "proxy_unreachable";
      const errorCode = getUpstreamErrorIdentifier(error);
      const localRateLimitFailure = localLimiterErrors.getClientSafeLocalRateLimitError(error);
      const failureStatus = isRequestAborted
        ? 499
        : isProxyUnreachableFailure
          ? HTTP_STATUS.BAD_GATEWAY
          : localRateLimitFailure
            ? localRateLimitFailure.status
            : error.name === "TimeoutError" || error.name === "BodyTimeoutError"
              ? HTTP_STATUS.GATEWAY_TIMEOUT
              : error.status && typeof error.status === "number"
                ? error.status
                : HTTP_STATUS.BAD_GATEWAY;
      const failureMessage = isRequestAborted
        ? "Request aborted"
        : formatProviderError(localRateLimitFailure ?? error, provider, model, failureStatus);
      const upstreamErrorCode =
        localRateLimitFailure?.code ??
        (isProxyUnreachableFailure ? "proxy_unreachable" : errorCode);
      // Tag our own deadline timeouts (fetch-start TimeoutError / body BodyTimeoutError,
      // both surfaced as a 504) as "upstream_timeout" so the cooldown layer can tell a
      // slow-but-not-failed request apart from a real provider 5xx. (Antigravity already
      // tags its pre-response timeout via the code below.)
      const isOwnDeadlineTimeout =
        failureStatus === HTTP_STATUS.GATEWAY_TIMEOUT &&
        (error.name === "TimeoutError" || error.name === "BodyTimeoutError");
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
        error: failureMessage,
        providerRequest: finalBody || translatedBody,
        // On a client-abort (AbortError), the client already disconnected before
        // we ever got here — this body is what we WOULD have sent, not what was
        // actually delivered. Logging it as `clientResponse` is misleading (the
        // dashboard reads that field as "what the client received"), so omit it
        // for this case; `error` above already records the failure reason.
        clientResponse:
          error.name === "AbortError" ? undefined : buildErrorBody(failureStatus, failureMessage),
        claudeCacheMeta: claudePromptCacheLogMeta,
        cacheSource: "upstream",
      });
      if (isRequestAborted) {
        streamController.handleError(error);
        return createErrorResult(499, "Request aborted");
      }
      const persistentErrorCode = projectFailureUsageErrorCode({
        statusCode: failureStatus,
        message: failureMessage,
        errorCode:
          upstreamErrorCode ||
          (error instanceof Error && error.name ? error.name : "upstream_error"),
        errorType: upstreamErrorType,
      });
      persistFailureUsage(failureStatus, persistentErrorCode);
      console.log(`${COLORS.red}[ERROR] ${failureMessage}${COLORS.reset}`);
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
          assertManagedLeaseFence(getExecutionConnectionId(getExecutionCredentials()));
          const retryResult = normalizeExecutorResult(
            await runWithCapture(providerRequestCapture, () =>
              executor.execute({
                model: retryModelId,
                body: translatedBody,
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
          if (isManagedLeaseFenceError(retryErr)) return managedLeaseFenceErrorResult(retryErr);
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
        upstreamErrorCode = details.errorCode as string | undefined;
        upstreamErrorType = details.errorType as string | undefined;
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

      // T06/T10/T36: classify provider errors and persist terminal account states.
      let errorType = classifyProviderError(statusCode, message, provider);
      if (statusCode === 429 && isModelScope()) {
        const decision = classifyModelScope429(message, normalizeHeaders(providerResponse.headers));
        errorType =
          decision.kind === "quota_exhausted"
            ? PROVIDER_ERROR_TYPES.QUOTA_EXHAUSTED
            : PROVIDER_ERROR_TYPES.RATE_LIMITED;
        log?.warn?.(
          "MODELSCOPE_429",
          `${decision.kind} (model remaining: ${decision.snapshot.modelRemaining ?? "unknown"}, total remaining: ${decision.snapshot.totalRemaining ?? "unknown"})`
        );
      }
      // Classifiers and recovery paths above consume the raw provider wording.
      // Project a separate value only at persistent connection-state boundaries.
      const persistentMessage = sanitizeErrorMessage(message) || "Provider request failed";
      const errorConnectionId = getCurrentConnectionId();
      if (errorConnectionId && errorType) {
        try {
          if (errorType === PROVIDER_ERROR_TYPES.FORBIDDEN) {
            {
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
                  `[provider] Node ${errorConnectionId} probe ${errorType} (${statusCode}) — connection stays active`
                );
              } else if (hasPerModelQuota(provider, model)) {
                // Compatible / passthrough gateways: a 402 without a model id
                // still must not terminalize the whole connection. Record the
                // error for operators; sibling models stay selectable.
                await updateProviderConnection(errorConnectionId, {
                  lastErrorType: errorType,
                  lastError: persistentMessage,
                  errorCode: statusCode,
                });
                console.warn(
                  `[provider] Node ${errorConnectionId} per-model quota exhausted (${statusCode}) — connection stays active`
                );
              } else {
                console.warn(
                  `[provider] Node ${errorConnectionId} banned (${statusCode}) — disabling permanently`
                );
              }
            }
          } else if (errorType === PROVIDER_ERROR_TYPES.ACCOUNT_DEACTIVATED) {
            // T-PROBE: probe-origin failures (test-all) never deactivate —
            // record but stay active; Plan A (extra keys) stays first so the
            // real path keeps its existing priority (#9817).
            // Plan A: if connection has extra API keys, don't disable — only the failing key is affected.
            // Single-key connections still get disabled as before.
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
                `[provider] Node ${errorConnectionId} account deactivated (${statusCode}) — has extra keys, keeping connection active`
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
                  `[provider] Node ${errorConnectionId} probe ${errorType} (${statusCode}) — connection stays active`
                );
              } else {
                console.warn(
                  `[provider] Node ${errorConnectionId} account deactivated (${statusCode}) — disabling permanently`
                );
              }
            }
          } else if (errorType === PROVIDER_ERROR_TYPES.QUOTA_EXHAUSTED) {
            {
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
                  `[provider] Node ${errorConnectionId} probe ${errorType} (${statusCode}) — connection stays active`
                );
              } else {
                // Kimi's 403 says "billing cycle" for both an exhausted subscription and a
                // temporary request window. Read its official usage endpoint before making
                // the connection terminal: a non-zero Weekly quota plus an empty Ratelimit
                // window must recover automatically at the reported reset time.
                let kimiRateLimitResetAt: string | null = null;
                if (provider === "kimi-coding") {
                  try {
                    const { fetchAndPersistProviderLimits } =
                      await import("@/lib/usage/providerLimits");
                    const { usage } = await fetchAndPersistProviderLimits(
                      errorConnectionId,
                      "manual"
                    );
                    kimiRateLimitResetAt = getKimiTemporaryRateLimitResetAt(usage);
                  } catch {
                    // Preserve the existing quota handling when Kimi's usage endpoint is unavailable.
                  }
                }

                // Providers with per-model quotas — lock the model only, not the connection
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
                    headers: providerResponse.headers,
                  });
                  quotaCooldownMs = coreOwnedAntigravityLockout.cooldownMs;
                }
                const accountSemaphoreKey = resolveAccountSemaphoreKey({
                  provider,
                  model: currentModel,
                  connectionId: errorConnectionId,
                  credentials,
                });
                if (accountSemaphoreKey && !deferAntigravityQuotaStateToCaller) {
                  markAccountSemaphoreBlocked(accountSemaphoreKey, quotaCooldownMs);
                }
                if (deferAntigravityQuotaStateToCaller) {
                  // Defer both model and account-semaphore cooldowns to
                  // markAccountUnavailable, where header/body provenance and the
                  // configured maxCooldownMs are available. Direct consumers such
                  // as Responses pass no owner callback and retain core ownership.
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
                    `[provider] Node ${errorConnectionId} Kimi request window exhausted (${statusCode}) — retrying after ${kimiRateLimitResetAt}`
                  );
                } else if (isModelScope() && errorConnectionId) {
                  lockModel(provider, errorConnectionId, model, "quota_exhausted", quotaCooldownMs);
                  console.warn(
                    `[provider] Node ${errorConnectionId} ModelScope model quota exhausted (${statusCode}) for ${model} - ${Math.ceil(quotaCooldownMs / 1000)}s (connection stays active)`
                  );
                } else if (
                  lockModelIfPerModelQuota(
                    provider,
                    errorConnectionId,
                    model,
                    "quota_exhausted",
                    quotaCooldownMs
                  )
                ) {
                  const quotaScope = getQuotaScopeLabelForProvider(provider, model);
                  console.warn(
                    `[provider] Node ${errorConnectionId} ${quotaScope}-only quota exhausted (${statusCode}) for ${model} - ${Math.ceil(quotaCooldownMs / 1000)}s (cooldown_scope=${quotaScope}, ttl_source=${retryAfterMs ? "upstream" : "inferred"}, connection stays active)`
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
                  console.warn(
                    `[provider] Node ${errorConnectionId} exhausted quota (${statusCode})`
                  );
                }
              } // close probeIsolated3 else
            }
          } else if (errorType === PROVIDER_ERROR_TYPES.UNAUTHORIZED) {
            // Normal 401 (token/session auth issue): keep account active for refresh/re-auth.
            await updateProviderConnection(errorConnectionId, {
              lastErrorType: errorType,
              lastError: persistentMessage,
              errorCode: statusCode,
            });
          } else if (errorType === PROVIDER_ERROR_TYPES.OAUTH_INVALID_TOKEN) {
            // OAuth 401 with invalid credentials - token refresh can recover
            await updateProviderConnection(errorConnectionId, {
              lastErrorType: errorType,
              lastError: persistentMessage,
              errorCode: statusCode,
            });
            console.warn(
              `[provider] Node ${errorConnectionId} OAuth token invalid (${statusCode}) — token refresh available`
            );
          } else if (errorType === PROVIDER_ERROR_TYPES.PROJECT_ROUTE_ERROR) {
            // Cloud Code 403 with stale project: not a ban, keep account active.
            await updateProviderConnection(errorConnectionId, {
              lastErrorType: errorType,
              lastError: persistentMessage,
              errorCode: statusCode,
            });
            console.warn(
              `[provider] Node ${errorConnectionId} project routing error (${statusCode}) — not banning`
            );
          } else if (errorType === PROVIDER_ERROR_TYPES.GEO_BLOCKED) {
            // Google regional-availability refusal (e.g. "User location is not
            // supported for the API use."). Account-independent and non-terminal:
            // exclude the connection for the cooldown window so routing moves to
            // other accounts instead of re-selecting this one on every request,
            // and never mark it banned/expired. It becomes usable again once
            // egress is routed through a supported-region proxy.
            const geoCooldownMs = COOLDOWN_MS.geoBlocked ?? 24 * 60 * 60 * 1000;
            await updateProviderConnection(errorConnectionId, {
              lastErrorType: errorType,
              lastError: persistentMessage,
              errorCode: statusCode,
            });
            // T-PROBE: the 24h exclusion is a routing mutation — a probe must
            // not push a connection into a day-long cooldown (#9817).
            if (!(await shouldIsolateProbeFailures())) {
              try {
                const { setConnectionRateLimitUntil } = await import("@/lib/db/providers");
                setConnectionRateLimitUntil(errorConnectionId, Date.now() + geoCooldownMs);
              } catch {
                // DB write failure must never break the fallback loop
              }
            }
            console.warn(
              `[provider] Node ${errorConnectionId} geo-blocked (${statusCode}) — excluded for ${Math.ceil(geoCooldownMs / 1000)}s, trying other accounts`
            );
          } else if (errorType === PROVIDER_ERROR_TYPES.GCP_PROJECT_REQUIRED) {
            // Antigravity BYOP: the account must Bring Its Own GCP Project.
            // Account-specific and fixable by entering a Project ID — never a
            // model lockout, never a ban. Exclude the connection for the
            // cooldown window so selection prefers sibling accounts; the 422
            // body carries the actionable message when no sibling is available.
            const byopCooldownMs = COOLDOWN_MS.gcpProjectRequired ?? 24 * 60 * 60 * 1000;
            await updateProviderConnection(errorConnectionId, {
              lastErrorType: errorType,
              lastError: persistentMessage,
              errorCode: statusCode,
            });
            console.warn(
              `[provider] Node ${errorConnectionId} GCP project required (${statusCode}) — excluded for ${Math.ceil(byopCooldownMs / 1000)}s, routing to other accounts (enter a Project ID to restore)`
            );
          } else if (errorType === PROVIDER_ERROR_TYPES.MODEL_NOT_FOUND) {
            // 404 — model/endpoint does not exist upstream. Lock the model so the
            // retry/backoff loop stops hammering the dead endpoint (which would
            // otherwise degenerate into a 429 rate-limit storm). Connection stays
            // active since only the specific model is unavailable. (#6827)
            const notFoundCooldownMs = COOLDOWN_MS.notFound;
            // T-PROBE: the model lockout is a routing mutation — a probe must
            // not lock a model for the cooldown window (#9817).
            if (!(await shouldIsolateProbeFailures())) {
              lockModel(
                provider,
                errorConnectionId,
                currentModel,
                "model_not_found",
                notFoundCooldownMs
              );
              console.warn(
                `[provider] Node ${errorConnectionId} model not found (${statusCode}) for ${currentModel} - locking model for ${Math.ceil(notFoundCooldownMs / 1000)}s (connection stays active)`
              );
            }
          }
        } catch {
          // Best-effort state update; request flow should continue with fallback handling.
        }
      }

      appendRequestLog({
        model,
        provider,
        connectionId: errorConnectionId,
        status: `FAILED ${statusCode}`,
      }).catch(() => {});

      const errMsg = formatProviderError(new Error(message), provider, model, statusCode);
      console.log(`${COLORS.red}[ERROR] ${errMsg}${COLORS.reset}`);

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
        upstreamErrorBody
      );

      // Update rate limiter from error response headers
      updateFromHeaders(provider, errorConnectionId, providerResponse.headers, statusCode, model);
      if (errorConnectionId && upstreamErrorBody !== null && upstreamErrorBody !== undefined) {
        updateFromResponseBody(provider, errorConnectionId, upstreamErrorBody, statusCode, model);
      }

      if (isContextOverflowError(statusCode, message)) {
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
                error: errMsg,
                providerRequest: finalBody || translatedBody,
                providerResponse: upstreamErrorBody,
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
              error: errMsg,
              providerRequest: finalBody || translatedBody,
              providerResponse: upstreamErrorBody,
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
            error: errMsg,
            providerRequest: finalBody || translatedBody,
            providerResponse: upstreamErrorBody,
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
          error: errMsg,
          providerRequest: finalBody || translatedBody,
          providerResponse: upstreamErrorBody,
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
    }
  }

  // Non-streaming response
  if (!stream) {
    try {
      const runNonStreamingPipeline = async ({
        policy,
        model: pipelineModel,
        translatedBody: wireBody,
      }) => {
        translatedBody = wireBody as typeof translatedBody;
        currentModel = pipelineModel;
        triedModels.add(pipelineModel);
        return runProviderExecutionPipeline({
          policy,
          target: {
            provider,
            requestedModel: pipelineModel,
            sourceFormat,
            targetFormat,
            stream: false,
          },
          connection: {
            initialConnectionId: String(getCurrentConnectionId() || connectionId || ""),
            getCurrentConnectionId: () => getCurrentConnectionId() || undefined,
            getCredentials: () => (credentials || {}) as Record<string, unknown>,
            replaceCredentials: (next) => {
              Object.assign(credentials, next);
            },
            onCredentialsRefreshed: async () => {},
            assertManagedLeaseFence: (id) => {
              assertManagedLeaseFence(id);
            },
            getProviderCredentials,
          },
          wire: {
            body: translatedBody as Record<string, unknown>,
            currentModel,
            triedModels,
            setBodyAndModel: (nextBody, nextModel) => {
              translatedBody = nextBody as typeof translatedBody;
              currentModel = nextModel;
              triedModels.add(nextModel);
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
      };

      let toolLoopRan = false;
      let toolLoopUsage = null;
      let legResult = await runNonStreamingProviderLeg({
        phase: "initial",
        sourceBody: (body || {}) as Record<string, unknown>,
        expectedConnectionId: managedLease
          ? String(getCurrentConnectionId() || connectionId || "") || undefined
          : undefined,
        allowAccountRotation: !managedLease && comboStrategy !== "context-relay",
        allowModelFallback: true,
        executeProviderRequest: (modelToCall, allowDedup) =>
          executeProviderRequest(modelToCall, allowDedup),
        runProviderExecution: runNonStreamingPipeline,
        setRequestWireState: ({ translatedBody: nextBody, effectiveModel: nextModel }) => {
          translatedBody = nextBody as typeof translatedBody;
          currentModel = nextModel;
          triedModels.add(nextModel);
        },
        sourceFormat,
        targetFormat,
        clientResponseFormat,
        provider,
        model: effectiveModel,
        connectionId: String(getCurrentConnectionId() || connectionId || ""),
        getCurrentConnectionId: () => getCurrentConnectionId() || undefined,
        effectiveModel: currentModel,
        translatedBody: translatedBody as Record<string, unknown>,
        toolNameMap,
        requestToolIdentityMap,
        reasoningCacheScope,
        clientHeaders: clientRawRequest?.headers ?? null,
        isClaudeCodeCompatible,
        log,
      });

      if (legResult.kind === "error") {
        const err = legResult.result;
        const captured = providerRequestCapture.latest?.() ?? null;
        finalBody = captured?.body ?? finalBody ?? translatedBody;
        if (captured) {
          reqLogger.logTargetRequest(captured.url, captured.headers, captured.body);
        }
        reqLogger.logError(new Error(err.error || "Provider request failed"), finalBody);
        const isNetworkThrow = Boolean(err.originalError);
        if (err.response && !isNetworkThrow) {
          reqLogger.logProviderResponse(
            err.status,
            err.response.statusText || "Error",
            err.response.headers,
            err.response
          );
        }
        appendRequestLog({
          model,
          provider,
          connectionId,
          status: `FAILED ${err.status}`,
        }).catch(() => {});
        persistAttemptLogs({
          status: err.status,
          error: err.error || "Provider request failed",
          providerRequest: finalBody || translatedBody,
          providerResponse: isNetworkThrow ? undefined : err.response,
          // On a client abort the client already disconnected before we got here, so this
          // body is what we WOULD have sent, not what was delivered. The dashboard reads
          // `clientResponse` as "what the client received", so logging it misleads —
          // `error` above already records the reason. The pre-#12867 path omitted it here;
          // the leg-based path must keep doing so.
          clientResponse: isLocalStreamLifecycleError(err.originalError)
            ? undefined
            : buildErrorBody(err.status, err.error || "Provider request failed"),
          cacheSource: "upstream",
        });
        persistFailureUsage(err.status, err.errorCode || `upstream_${err.status}`);
        trackPendingRequest(model, provider, connectionId, false);
        return err;
      }

      const expectedConn = managedLease
        ? String(getCurrentConnectionId() || connectionId || "") || undefined
        : undefined;
      // The identity is the tool loop's execution fence key, and deriveToolRequestIdentity
      // canonicalizes the body — which by design rejects Dates, Maps and class instances.
      // It was computed eagerly, so a body carrying any of those threw on EVERY
      // non-streaming request even with SERVER_OWNED_TOOL_LOOP_ENABLED off (the default).
      // Derive it only when the loop can run, and fail closed rather than crash: no
      // identity means no fence, and without a fence the loop must not run.
      let toolLoopEnabled = isServerOwnedToolLoopEnabled();
      let postInjectionRequestIdentity = "";
      if (toolLoopEnabled) {
        try {
          postInjectionRequestIdentity = derivePostInjectionRequestIdentity({
            apiKeyId: memoryOwnerId || "local",
            headers: clientRawRequest?.headers ?? null,
            skillRequestId,
            postInjectionBody: (body || {}) as Record<string, unknown>,
          });
        } catch (identityError) {
          log?.warn?.(
            "SERVER_OWNED_TOOL_LOOP",
            `request body is not canonicalizable, skipping the loop: ${
              identityError instanceof Error ? identityError.message : "unknown"
            }`
          );
          toolLoopEnabled = false;
        }
      }
      const loopApply = await applyServerOwnedToolLoopIfNeeded({
        enabled: toolLoopEnabled,
        stream,
        isResponsesEndpoint,
        sourceFormat,
        initialLeg: legResult,
        sourceBody: (body || {}) as Record<string, unknown>,
        skillsModelId: getSkillsModelIdForFormat(sourceFormat),
        executionContext: {
          apiKeyId: memoryOwnerId || "local",
          sessionId: pipelineSessionId,
          requestId: skillRequestId,
          requestIdentity: postInjectionRequestIdentity,
          builtinToolNames: injectionResult.builtinToolNames,
          injectedCustomSkillNames: injectionResult.injectedCustomSkillNames,
          customSkillExecutionEnabled:
            Boolean(memoryOwnerId) && memorySettings?.skillsEnabled === true,
          executionFenceEnabled: true,
          provider,
          model: effectiveModel,
        },
        abortSignal: clientRawRequest?.signal,
        expectedConnectionId: expectedConn,
        followUpLeg: async (nextSourceBody) => {
          translatedBody = translateRequest(
            sourceFormat,
            targetFormat,
            model,
            { ...nextSourceBody },
            false,
            credentials,
            provider,
            reqLogger,
            {
              normalizeToolCallId: getModelNormalizeToolCallId(
                provider || "",
                model || "",
                sourceFormat
              ),
              preserveDeveloperRole: getModelPreserveOpenAIDeveloperRole(
                provider || "",
                model || "",
                sourceFormat
              ),
              preserveCacheControl,
              signatureNamespace: connectionId,
              copilotClient: copilotCompatibleReasoning,
              reasoningCacheScope,
            }
          );
          return runNonStreamingProviderLeg(
            followUpLegInput(
              {
                executeProviderRequest: (modelToCall, allowDedup) =>
                  executeProviderRequest(modelToCall, allowDedup),
                runProviderExecution: runNonStreamingPipeline,
                setRequestWireState: ({ translatedBody: nextBody, effectiveModel: nextModel }) => {
                  translatedBody = nextBody as typeof translatedBody;
                  currentModel = nextModel;
                  triedModels.add(nextModel);
                },
                sourceFormat,
                targetFormat,
                clientResponseFormat,
                provider,
                model: effectiveModel,
                connectionId: String(getCurrentConnectionId() || connectionId || ""),
                getCurrentConnectionId: () => getCurrentConnectionId() || undefined,
                effectiveModel: currentModel,
                translatedBody: translatedBody as Record<string, unknown>,
                toolNameMap,
                requestToolIdentityMap,
                reasoningCacheScope,
                clientHeaders: clientRawRequest?.headers ?? null,
                isClaudeCodeCompatible,
                log,
              },
              nextSourceBody,
              expectedConn
            )
          );
        },
        logReceipt: (receipt) => reqLogger.logToolLoopReceipt(receipt),
      });
      if (loopApply.kind === "error") {
        return await finalizeToolLoopError({
          loop: loopApply.loop,
          model,
          provider,
          connectionId,
          providerRequest: loopApply.loop.finalProviderRequest || finalBody || translatedBody,
          persistFailureUsage,
          persistAttemptLogs,
          trackPendingRequest,
        });
      }
      // `legResult` is declared as the full NonStreamingProviderLegResult union. The
      // `kind === "error"` guard above narrows it to the ok variant, but the conditional
      // reassignment below widens it back to the declared type, so every field read past
      // this point lost the narrowing — 13 TS2339 diagnostics under
      // tsconfig.typecheck-api.json, which pulls chatCore.ts in through the route while
      // tsconfig.typecheck-core.json does not. Pin the ok variant in its own binding:
      // `loopApply.leg` is already `NonStreamingProviderLegResult & { kind: "ok" }`,
      // so no cast is involved.
      let okLeg: NonStreamingProviderLegResult & { kind: "ok" } = legResult;
      if (loopApply.kind === "ok") {
        toolLoopRan = true;
        toolLoopUsage = loopApply.usage;
        okLeg = loopApply.leg;
      }

      if (okLeg.upstreamResponse) {
        providerResponse = okLeg.upstreamResponse;
        providerHeaders = normalizeHeaders(okLeg.upstreamResponse.headers);
      } else {
        providerResponse = new Response(null, {
          status: 200,
          headers: okLeg.headers,
        });
        providerHeaders = normalizeHeaders(okLeg.headers);
      }
      finalBody = providerRequestCapture.body(okLeg.providerRequest || translatedBody);
      // Built inside executeProviderRequest on the pre-#12867 path. The leg now owns the
      // first non-streaming send, so that assignment never runs here and the meta stayed
      // null — `_omniroute.claudePromptCache` silently vanished from every call log on
      // this path. Same inputs, same helper, at the point where they are available.
      claudePromptCacheLogMeta = buildClaudePromptCacheLogMeta(
        targetFormat,
        finalBody,
        providerHeaders,
        clientRawRequest?.headers
      );
      const capturedOk = providerRequestCapture.latest?.();
      reqLogger.logTargetRequest(
        okLeg.requestUrl || capturedOk?.url || "",
        okLeg.requestHeaders || capturedOk?.headers || {},
        capturedOk?.body ?? finalBody
      );
      const responseBody = okLeg.providerBody;
      const responsePayloadFormat = okLeg.responsePayloadFormat;
      const looksLikeSSE = okLeg.looksLikeSSE;
      let translatedResponse = okLeg.response;
      const memoryExtractionResponse = okLeg.responseForMemoryExtraction;
      reqLogger.logProviderResponse(
        200,
        "OK",
        providerResponse.headers,
        looksLikeSSE
          ? { _streamed: true, _format: "sse-json", summary: responseBody }
          : responseBody
      );
      effectiveServiceTier = resolveReportedServiceTier(responseBody) ?? effectiveServiceTier;
      if (onRequestSuccess) {
        await onRequestSuccess();
      }
      const successConnectionId = getCurrentConnectionId();
      await maybeSyncClaudeExtraUsageState({
        provider,
        connectionId: successConnectionId,
        providerSpecificData: credentials?.providerSpecificData,
        log,
      });
      const usage = toolLoopUsage ?? extractUsageFromResponse(responseBody, provider);
      const cacheUsageLogMeta = buildCacheUsageLogMeta(usage);
      if (usage && typeof usage === "object") {
        attachCompressionUsageReceiptAfterAnalytics(usage as Record<string, unknown>, "provider");
        if (provider === "gemini") {
          const promptTokens =
            typeof (usage as Record<string, unknown>).prompt_tokens === "number"
              ? ((usage as Record<string, unknown>).prompt_tokens as number)
              : 0;
          if (promptTokens > 0) incrementTokenUsage(model, promptTokens);
        }
      }
      recordContextEditingTelemetryHook({
        contextEditingEnabled,
        provider,
        responseBody,
        skillRequestId,
        log,
      });
      appendRequestLog({
        model,
        provider,
        connectionId: successConnectionId,
        tokens: usage,
        status: "200 OK",
      }).catch(() => {});
      recordNonStreamingUsageStats(usage, {
        traceEnabled,
        provider,
        connectionId: successConnectionId,
        model,
        startTime,
        apiKeyInfo,
        effectiveServiceTier,
        isCombo,
        comboStrategy,
        endpoint: endpointPath,
      });

      // #12150 P1b surface 3 (fix round 1): a video-bridge-observed request's
      // request- AND response-derived text both carry the full transcript (the
      // flattened description on the request side, the model's own reply on
      // the response side) — neither may populate durable Memory. See
      // runMemoryExtractionGate for the shared gate + extraction wiring, unit
      // tested directly in tests/unit/video-bridge-memory-suppression.test.ts.
      runMemoryExtractionGate({
        memoryOwnerId,
        memorySettings,
        videoBridgeObserved,
        pipelineSessionId,
        requestBody: body as Record<string, unknown>,
        responseBody: memoryExtractionResponse as Record<string, unknown> | null,
        extractFacts,
        log,
      });

      const customSkillExecutionEnabled =
        Boolean(memoryOwnerId) && memorySettings?.skillsEnabled === true;
      const builtinToolNames = [
        webSearchFallbackPlan.toolName,
        webFetchFallbackPlan.toolName,
        ...(memoryOwnerId && memorySettings?.enabled ? MEMORY_BUILTIN_TOOL_NAMES : []),
      ].filter((name): name is string => Boolean(name));
      if (!toolLoopRan && (customSkillExecutionEnabled || builtinToolNames.length > 0)) {
        const skillSessionId = pipelineSessionId;

        translatedResponse = await handleToolCallExecution(
          translatedResponse,
          getSkillsModelIdForFormat(sourceFormat),
          {
            apiKeyId: memoryOwnerId || "local",
            sessionId: skillSessionId,
            requestId: skillRequestId,
            builtinToolNames,
            customSkillExecutionEnabled,
            provider,
            model: effectiveModel,
          }
        );
      }

      const guardrailContext = buildPostCallGuardrailContext({
        apiKeyInfo,
        body,
        clientRawRequest,
        log,
        model,
        provider,
        responsePayloadFormat,
        clientResponseFormat,
      });
      const postCallGuardrails = await guardrailRegistry.runPostCallHooks(
        translatedResponse,
        guardrailContext
      );
      translatedResponse = postCallGuardrails.response;

      const responseUsage = isJsonRecord(usage)
        ? usage
        : isJsonRecord(translatedResponse.usage)
          ? translatedResponse.usage
          : null;
      const costUsage = normalizeUsage(responseUsage);
      const estimatedCost = costUsage
        ? await calculateCost(provider, model, costUsage, { serviceTier: effectiveServiceTier })
        : 0;

      if (postCallGuardrails.blocked) {
        const guardrailMessage = postCallGuardrails.message || "Response blocked by guardrail";
        persistAttemptLogs({
          status: HTTP_STATUS.BAD_REQUEST,
          tokens: usage,
          responseBody,
          providerRequest: finalBody || translatedBody,
          providerResponse: looksLikeSSE
            ? {
                _streamed: true,
                _format: "sse-json",
                summary: responseBody,
              }
            : responseBody,
          clientResponse: buildErrorBody(HTTP_STATUS.BAD_REQUEST, guardrailMessage),
          claudeCacheMeta: claudePromptCacheLogMeta,
          claudeCacheUsageMeta: cacheUsageLogMeta,
          cacheSource: "upstream",
        });
        if (apiKeyInfo?.id && estimatedCost > 0) {
          recordCost(apiKeyInfo.id, estimatedCost);
        }
        log?.warn?.(
          "GUARDRAIL",
          `Response blocked by ${postCallGuardrails.guardrail || "guardrail"}: ${guardrailMessage}`
        );
        finalizePendingScope(pendingScope, {
          providerResponse: responseBody,
          clientResponse: translatedResponse,
        });
        return createErrorResult(HTTP_STATUS.BAD_REQUEST, guardrailMessage);
      }

      // Validate the *translated* response actually carries client-usable output.
      // isEmptyContentResponse (above) runs on the raw responseBody before translation;
      // this check runs after translation + sanitization + tool-call execution to catch
      // cases where a provider returns a structurally valid raw body that translates into
      // choices:[] or output:[] with no usable content (Responses API shape included).
      const malformedTranslatedReason = detectMalformedNonStream(translatedResponse);
      if (malformedTranslatedReason) {
        const totalLatency = Date.now() - startTime;
        const rawBytes = (() => {
          try {
            return JSON.stringify(responseBody || {}).length;
          } catch {
            return -1;
          }
        })();
        reportMalformed200({
          mode: "nonstream",
          provider,
          model,
          connectionId,
          reason: malformedTranslatedReason,
          recvBytes: rawBytes,
          recvLines: -1,
          emitted: -1,
          events: {},
          ttftMs: totalLatency,
          elapsedMs: totalLatency,
        });
        appendRequestLog({
          model,
          provider,
          connectionId,
          status: `FAILED ${HTTP_STATUS.BAD_GATEWAY}`,
        }).catch(() => {});
        const malformed = describeMalformedNonStream(translatedResponse, malformedTranslatedReason);
        const malformedMessage = `[${provider}/${model}] ${malformed.message}`;
        const malformedClientBody = buildErrorBody(
          HTTP_STATUS.BAD_GATEWAY,
          malformedMessage,
          undefined,
          { code: malformed.code, type: malformed.type }
        );
        persistAttemptLogs({
          status: HTTP_STATUS.BAD_GATEWAY,
          tokens: usage,
          responseBody,
          providerRequest: finalBody || translatedBody,
          providerResponse: looksLikeSSE
            ? { _streamed: true, _format: "sse-json", summary: responseBody }
            : responseBody,
          clientResponse: malformedClientBody,
          claudeCacheMeta: claudePromptCacheLogMeta,
          claudeCacheUsageMeta: cacheUsageLogMeta,
          cacheSource: "upstream",
        });
        persistFailureUsage(HTTP_STATUS.BAD_GATEWAY, "malformed_translated_response");
        trackPendingRequest(model, provider, pendingConnId, false);
        // Routing event (feedback foundation) — record the malformed outcome so
        // the quality tracker de-prioritizes this model over time.
        void emitRoutingEvent(
          createRoutingEvent({
            requestId: traceId || pendingRequestId || "unknown",
            provider: provider || "unknown",
            model: model || "unknown",
            strategy: isCombo ? (comboStrategy ?? "combo") : "direct",
            latencyMs: Date.now() - startTime,
            ttftMs: null,
            inputTokens: null,
            outputTokens: null,
            cost: null,
            retries: 0,
            fallbackUsed: false, // combo-level fallback tracked by decisionTrace
            outcome: "malformed",
            status: HTTP_STATUS.BAD_GATEWAY,
            finishReason: routingFinishReason(translatedResponse),
            connectionId: credentials?.connectionId ?? null,
          })
        );
        return createErrorResult(
          HTTP_STATUS.BAD_GATEWAY,
          malformedMessage,
          null,
          malformed.code,
          malformed.type
        );
      }

      // ── Phase 9.1: Cache store (non-streaming, temp=0) ──
      storeSemanticCacheResponse({
        enabled: semanticCacheEnabled,
        body: bodyForCacheWrite,
        headers: clientRawRequest?.headers,
        translatedResponse,
        model,
        apiKeyId: apiKeyInfo?.id ?? undefined,
        usage,
        log,
      });

      // ── Phase 9.2: Save for idempotency ──
      // Reuse the key resolved by checkIdempotencyCache() above (single derivation per
      // request). (#3821-review LEDGER-6)
      saveIdempotency(idempotencyKey, translatedResponse, 200);
      reqLogger.logConvertedResponse(translatedResponse);
      persistAttemptLogs({
        status: 200,
        tokens: usage,
        responseBody,
        providerRequest: finalBody || translatedBody,
        providerResponse: looksLikeSSE
          ? {
              _streamed: true,
              _format: "sse-json",
              summary: responseBody,
            }
          : responseBody,
        clientResponse: translatedResponse,
        claudeCacheMeta: claudePromptCacheLogMeta,
        claudeCacheUsageMeta: cacheUsageLogMeta,
        cacheSource: "upstream",
      });
      if (apiKeyInfo?.id && estimatedCost > 0) {
        recordCost(apiKeyInfo.id, estimatedCost);
      }

      // === Quota Share POST-hook (B/F7) — fire-and-forget, fail-open ===
      await scheduleQuotaShareConsumption({
        apiKeyId: apiKeyInfo?.id,
        connectionId: credentials?.connectionId,
        provider,
        model,
        usage,
        estimatedCost,
        log,
      });
      // === /Quota Share POST-hook ===

      // ── Gamification event (fire-and-forget) ──
      await emitRequestGamificationEvent({ apiKeyId: apiKeyInfo?.id, model, provider });

      finalizePendingScope(pendingScope, {
        providerResponse: responseBody,
        clientResponse: translatedResponse,
      });
      const responseHeaders = buildNonStreamingResponseHeaders({
        provider,
        model,
        startTime,
        responseUsage,
        estimatedCost,
        requestId: skillRequestId,
        compressionResponseMeta,
        comboStrategy,
      });
      // #6426: align response body `model` with the `X-OmniRoute-Model` header
      // (both must be the resolved backend model). Some upstreams (notably legacy
      // /v1/completions text-completion path) return a body `model` field that
      // differs from the resolved backend id we advertised in the header, leaving
      // strict clients unable to reconcile the two. Rewrite body.model to `model`
      // FIRST, then let #1311 echo override it when the opt-in setting is on.
      if (typeof model === "string" && model) echoModelInObject(translatedResponse, model);
      // #1311: echo the requested alias/combo name in the non-streaming response model.
      if (echoModel) echoModelInObject(translatedResponse, echoModel);

      // ── Plugin onResponse hook (fire-and-forget) ──
      // #8395: the streaming branch below already calls this; the non-streaming
      // (stream:false) branch returned without it, so onResponse never fired for
      // non-streaming requests at all.
      await runPluginOnResponseHook({
        requestId: traceId,
        body,
        model,
        provider,
        apiKeyInfo,
        headers: clientRawRequest?.headers,
        response: { status: 200, data: translatedResponse },
      });

      // Routing event (feedback foundation) — fire-and-forget, cheap.
      void emitRoutingEvent(
        createRoutingEvent({
          requestId: traceId || pendingRequestId || "unknown",
          provider: provider || "unknown",
          model: model || "unknown",
          strategy: isCombo ? (comboStrategy ?? "combo") : "direct",
          latencyMs: Date.now() - startTime,
          ttftMs: null,
          inputTokens:
            usage && typeof usage === "object"
              ? (() => {
                  const promptTokens = (usage as Record<string, unknown>).prompt_tokens;
                  return typeof promptTokens === "number" && Number.isFinite(promptTokens)
                    ? promptTokens
                    : null;
                })()
              : null,
          outputTokens:
            usage && typeof usage === "object"
              ? (() => {
                  const completionTokens = (usage as Record<string, unknown>).completion_tokens;
                  return typeof completionTokens === "number" && Number.isFinite(completionTokens)
                    ? completionTokens
                    : null;
                })()
              : null,
          cost: Number.isFinite(estimatedCost) ? estimatedCost : null,
          retries: 0,
          fallbackUsed: false, // combo-level fallback tracked by decisionTrace
          outcome: "success",
          status: 200,
          finishReason: routingFinishReason(translatedResponse),
          connectionId: credentials?.connectionId ?? null,
        })
      );

      return {
        success: true,
        response: buildNonStreamingJsonResponse(translatedResponse, responseHeaders),
      };
    } catch (error) {
      trackPendingRequest(model, provider, connectionId, false);
      if (isManagedLeaseFenceError(error)) return managedLeaseFenceErrorResult(error);
      if (isSemaphoreCapacityError(error)) {
        appendRequestLog({
          model,
          provider,
          connectionId,
          status: `FAILED ${error.code}`,
        }).catch(() => {});
        const failureMessage = error.message || "Semaphore timeout";
        persistAttemptLogs({
          status: HTTP_STATUS.RATE_LIMITED,
          error: failureMessage,
          providerRequest: finalBody || translatedBody,
          clientResponse: buildErrorBody(HTTP_STATUS.RATE_LIMITED, failureMessage),
          claudeCacheMeta: claudePromptCacheLogMeta,
          cacheSource: "upstream",
        });
        persistFailureUsage(HTTP_STATUS.RATE_LIMITED, error.code);
        const result = createErrorResult(HTTP_STATUS.RATE_LIMITED, failureMessage);
        return {
          ...result,
          errorType: "account_semaphore_capacity",
          errorCode: error.code,
        };
      }
      throw error;
    }
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

  return {
    success: true,
    response: new Response(finalStream, {
      headers: responseHeaders,
    }),
  };
}
export function isTokenExpiringSoon(expiresAt, bufferMs = 5 * 60 * 1000) {
  if (!expiresAt) return false;
  const expiresAtMs = new Date(expiresAt).getTime();
  return expiresAtMs - Date.now() < bufferMs;
}
