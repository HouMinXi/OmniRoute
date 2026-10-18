# Guardrails (中文 (简体))

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **事实来源：** `src/lib/guardrails/`
> **最后更新：** 2026-08-29 — v3.8.51（Video Bridge 的转录来源由调用方声明，
> 尚未经过服务器验证 — 根据 #11661 予以澄清）

Guardrail 在 OmniRoute 与上游提供者之间的边界处实施安全、策略和内容转换。
每个 guardrail 都可以检查（并可选择拒绝、转换或注释）请求负载（`preCall`）和
上游响应（`postCall`）。

系统采用**失败时放行**策略：如果某个 guardrail 在执行时抛出异常，注册表会
记录错误并继续执行下一个 guardrail，而不是使请求失败。阻止请求始终是显式决定
（`block: true`），绝不会因意外而发生。

## 内置防护机制

注册表在导入时按优先级顺序自动加载六项防护机制
（参见 `registry.ts` → `registerDefaultGuardrails()`）：

| 优先级 | 名称                | 阶段           | 文件                  |
| ------ | ------------------- | -------------- | --------------------- |
| `5`    | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`    | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`    | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`   | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`   | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`   | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

优先级数字较小的会**先**运行。

### 视觉桥接器（`visionBridge.ts`）— 模态桥接 PR-1

拦截发往**非视觉模型**且包含图像的请求，并在上游调用之前，将整个请求重新路由到支持视觉的模型，或使用可配置的视觉模型生成文本描述以替换图像部分。这样，纯文本提供者便能透明地处理多模态载荷。

流程：

1. 如果目标模型已支持视觉，则跳过（除非它出现在强制桥接列表 `isVisionBridgeForcedModel` 中）。
2. 通过 `extractImageParts(messages)`
   （`visionBridgeHelpers.ts`）提取图像部分；该函数委托给 `open-sse/utils/mediaParts.ts` 中的**统一媒体检测器**
   `detectMediaParts()`——它是与组合兼容性过滤器共享的唯一事实来源。
   提取仅允许 `replaceImageParts` 可重新拼接的顶层部分形态（即提取↔替换契约）：OpenAI
   `image_url`、Anthropic base64 `source.type:"base64"`、Anthropic URL
   `source.type:"url"`，以及 Responses API `input_image`。嵌套命中和仅指示器形态属于组合过滤器处理的内容，绝不会被提取。
   如果未找到任何图像，则跳过。
3. 通过 `resolveVisionBridgeRuntimeSettings()`
   （`src/shared/constants/modalityBridgeDefaults.ts`）解析运行时配置：新的 `modalityBridge*`
   设置键优先；旧版 `visionBridge*` 键保留为**一个周期的回退选项**（回滚窗口）。桥接器被禁用时，在任何媒体遍历之前跳过。
4. 模式选择器（`modalityBridgeVisionMode`，见下表）决定重新路由还是生成描述。重新路由会返回 `modifiedPayload`，其中仅替换 `model`，并附带元数据 `{ rerouted, fromModel, toModel, imagesKept }`。
5. 描述路径：将图像数量限制为 `maxImages`，构建任务感知提示词，查询描述缓存，**并行**调用视觉模型
   （`Promise.allSettled`），并在原位置注入 `[Image N]: <description>` 文本部分。
   描述失败时返回 `null`，并**保留**原始图像部分（#4012）——但组合描述路径除外：如果所有描述均失败，则经确认不支持视觉的上游会收到
   `(unavailable — no vision-capable provider connected)` 占位文本（#8430）。
6. 返回 `modifiedPayload` 和元数据（`imagesProcessed`、`descriptions`、
   `processingTimeMs`、`visionModel`）。

#### 模式选择器（`modalityBridgeVisionMode`）

| 模式       | 默认值 | 行为                                                                                                                                                                            |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | 原有启发式逻辑保持不变（#6640/#7204）：非组合/`auto/` 模型会重新路由到最佳视觉模型，除非原模型已有可用凭证（此时生成描述）；组合目标始终生成描述。                              |
| `describe` |        | 始终生成描述——完全跳过重新路由逻辑块；始终由用户选择的模型作答。                                                                                                                |
| `reroute`  |        | 强制重新路由：绕过“保留已有凭证模型”保护逻辑。重新路由**目标**的凭证保护仍然适用——当不存在可用的视觉目标时，请求会转入描述路径，从而确保原始图像绝不会到达纯文本后端（#8430）。 |

在自动启发式逻辑运行**之前**，强制模式会短路执行；`auto` 行为与 PR-1 之前的防护机制逐字节一致。

#### API 密钥作用域（`visionBridgeKeyScope.ts`）

当调用方的 API 密钥限制了 `allowedConnections`、配额池
（`allowedQuotas`）或模型（`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`）时，桥接器仅会选择该密钥可使用的连接以及这些连接上该密钥可使用的重新路由模型和描述模型。随后，描述调用始终通过 OmniRoute 自循环进行，并携带 `x-omniroute-self-loop-key-id` 标头，因此接收方聊天请求会再次强制执行该密钥的连接和模型策略。`enforceApiKeyPolicy()`
仅在该标头与自循环 bearer 同时存在时才会接受它，因此它只能收窄访问权限；无法解析的 ID 会被拒绝。

如果该密钥不允许使用任何视觉模型，描述路径会退出，请求将不经修改地继续传递，其故障开放行为与防护机制被禁用时相同（元数据为 `{ skipped: true, reason: "no_permitted_vision_model" }`）。
不带密钥的请求，以及不含这些限制的密钥，其行为与之前完全相同。

#### 任务感知描述提示词（`modalityBridgeVisionTaskAware`）

默认值为 **true**。`composeVisionPrompt()`（`visionBridgeHelpers.ts`）会将**最后一条用户消息**的文本（截断至 500 个字符）附加到基础描述提示词中，使描述聚焦于用户实际提出的问题（codex-vision-proxy 模式），并要求视觉模型转录可见文本。关闭此标志或没有用户文本时，将原样使用基础提示词。

描述自循环自身的 OpenAI 兼容请求（`visionBridgeHelpers.ts` 中的 `callVisionModelSingle()`）始终请求 `image_url.detail: "high"`——无条件适用于所有调用方/提供者，不受任何客户端信号控制。对于此提示词所要求的文本转录任务，低细节采样会降低 OCR 准确率，因此无论原始传入请求使用何种细节级别，描述调用自身都会始终请求高细节。这只会影响内部描述请求体；它不会改变 OmniRoute 在主请求中转发调用方自身 `image_url.detail` 的方式——该默认值单独应用，并且仅适用于检测到的 OpenCode 客户端，具体位于 `defaultImageDetail()`（`open-sse/handlers/chatCore/upstreamBody.ts`）中。描述自循环的 Anthropic 线路格式分支没有 `detail` 字段，因此不受这两个默认值影响。

#### 描述输出上限（`modalityBridgeVisionMaxChars`）

| 键                             | 默认值 | 范围             |
| ------------------------------ | ------ | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` 或 100–50000 |

`0`（默认值）表示**不设上限**——`callVisionModel()` 返回的描述会原样传递，从而保留现有行为。100–50000 范围内的任何值都会截断描述并添加 `…` 后缀，然后再将其拼接回 `[Image N]: <description>`（`src/lib/guardrails/visionBridge.ts` 中的 `VisionBridgeGuardrail.preCall()`）。对于细节密集型 OCR 任务，如果下游模型需要完整转录，请调高此值；若要限制冗长视觉模型的令牌用量，请调低此值。控制面板字段位于 Vision 选项卡的 Advanced 面板中（`ModalityBridgeVisionTab.tsx` 中的 `modality-bridge-max-chars`），它会将 1 到 99 之间的任何值提高到最低值 100，同时保持显式设置的 `0` 不变——`0` 本身就是有效的 Zod 值（`z.union([z.literal(0), z.number().int().min(100).max(50000)])`），而不仅仅是“未设置”时的默认值。

#### 描述缓存（`modalityBridge/bridgeCache.ts`）

用于描述输出的内存 LRU + TTL 缓存，在整个进程范围内共享。键 = `sha256(imageRef + composedPrompt + configuredBridgeModel)`，采用长度前缀封装（不会发生字段边界冲突）。模型部分使用的是**已配置的**桥接模型，而不是实际响应的模型——`callVisionModel` 可能在内部执行回退，若按每次尝试生成键，则会导致缓存碎片化。失败的描述绝不会被缓存。设置如下：

| 键                              | 默认值 | 范围    |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### 远程图像规范化（自循环描述/base64 获取）

当桥接器自行获取**远程**图像时——包括 Anthropic 描述自调用以及 claude 线路格式的 base64 转换（`ensureBase64ImagesForClaudeWire`），两者都通过 `visionBridgeHelpers.ts` 中的 `fetchRemoteImageAsDataUri()` 实现——生成的数据 URI 在嵌入视觉模型请求之前，会先通过 `normalizeDataUri()`（`open-sse/utils/imageNormalize.ts`）处理。过大的图像会缩小至**长边 2048px**（与 OpenAI/Anthropic 已在服务端应用的尺寸上限一致），从而减少上传字节数和延迟，同时不改变视觉模型所看到的内容。调整大小使用通过动态导入加载的 `sharp`：在其原生二进制文件加载失败的平台上，`normalizeDataUri()` **绝不会抛出异常**——它会回退为直接传递原始字节，因此描述/base64 转换路径始终能够继续工作。非图像字节（即获取结果无法解码为图像）也会原样传递。此规范化仅限于桥接器为其自身自调用而获取的图像——绝不会应用于调用方的原始直通负载，这与仅在显式启用时才允许修改的原则（硬性规则 #20）一致。

#### 设置架构 + 迁移

新的 `modalityBridge*` 键在 `updateSettingsSchema`（`src/shared/validation/settingsSchemas.ts`）中通过 Zod 进行验证：`modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`、三个 `modalityBridgeCache*` 键，以及 Audio Bridge 使用的 `modalityBridgeAudio*` 组。迁移文件 `141_modality_bridge_settings.sql` 会将现有旧版 `visionBridge*` 值复制到对应的新键（具备幂等性，绝不会覆盖运维人员已设置的 `modalityBridge*` 值）；旧版键将在一个发布周期内继续作为读取回退被接受。

#### 透明度标头 + 统计信息

经过描述转换的响应会携带 `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`（由 `modalityBridge/bridgeStats.ts` 中的 `buildModalityBridgeHeader()` 构建，并由 `src/sse/handlers/chatHelpers.ts` 中的 `withModalityBridgeHeader()` 添加）。重新路由的请求**不会**获得该标头——负载未被修改，而且模型切换已在响应体的 `model` 字段中可见。

`GET /api/modality-bridge/stats`（管理身份验证，与
`GET /api/settings` 相同级别）返回内存中按模态统计的计数器
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }`，分别对应 `vision`、`audio` 和
`video`。`averageLatencyMs` 使用 `latencySamples` 而非所有尝试次数作为
分母；没有计时的操作不会虚构一个零毫秒的样本。`bridged` 仍然是成功
转换的向后兼容别名；失败的尝试不会使其递增。
计数器按设计会在进程重启时重置
（用于遥测，而非计费）。

#### 仪表板配置

专用仪表板页面为
`/dashboard/settings/modality-bridge`。其可通过 URL 访问的 `Vision`、`Audio`
和 `Video` 标签页会在切换 `tab` 值时保留查询参数。
Vision 标签页提供启用设置、模式、模型选择（包括自动
默认值）、任务感知提示、高级超时/图像/描述长度/缓存
限制、运行时
计数器，以及受保护的示例请求。Audio 标签页也已可用：它提供
启用设置、仅限 STT 且带有 Auto 选项的模型选择器、超时/最大音频片段限制、音频
计数器，以及 `input_audio` 示例测试。Video 标签页功能完整：它会报告
FFmpeg/ffprobe 运行时状态——四种明确 UI 状态之一（探测正在
进行或无法完成时为 `unknown`；仪表板主机不是环回地址、因而客户端跳过探测时为
`restricted`；完成探测并确认缺失时为 `unavailable`；可用时为
`available`，并显示 FFmpeg/ffprobe 版本）——持久化保存
启用状态、模型、帧数、视频和超时限制，将模型选择器筛选为支持视觉能力的
模型，并提供视频计数器。

AI 设置下原有的 Vision Bridge 卡片现作为指向
新页面的兼容性链接；它不再持有表单的第二份副本。Media Providers 也会
将 Image-to-Text 和 Speech-to-Text 工作流链接到对应的 Modality
Bridge 标签页，同时保留现有的 Speech-to-Text 试用界面。

**自循环准入绕过：** 当描述调用通过 OmniRoute 自身的
`/v1` 自循环路由时（非标准提供者模型），子请求会发送
`x-omniroute-admission-bypass: internal`，并使用解析出的
自循环凭据进行身份验证——本地模式下使用本地 `sk_omniroute` 哨兵值，或使用
运维人员配置的 `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` 环境变量密钥（#1350），以便
`REQUIRE_API_KEY=true` 部署仍可运行描述调用。只有使用这些确切凭据时
才会接受该绕过，因此外部客户端无法利用该请求头
跳过准入检查。

旧版默认值位于 `src/shared/constants/visionBridgeDefaults.ts`；
新的模式/任务感知/缓存默认值以及设置解析器位于
`src/shared/constants/modalityBridgeDefaults.ts`。防护机制提供
`deps` 构造函数选项，以便测试可以注入伪造的 `getSettings` 和
`callVisionModel` 实现。

### Audio Bridge（`audioBridge.ts`）— Modality Bridge PR-3

在包含音频的聊天请求到达未明确支持音频输入的目标之前对其进行拦截。
它绝不会重新路由聊天请求：音频部分会通过现有的 OpenAI 兼容 multipart
端点进行转录，而所选聊天模型会继续使用文本转录内容。

流程：

1. 通过 `getResolvedModelCapabilities()` 解析 `supportsAudio`。显式的
   提供者注册表元数据优先，其次是静态模型元数据，最后是同步的
   `modalities_input`。已声明但不包含 `audio` 的输入列表结果为 `false`；
   没有任何能力证据时结果仍为 `null`。`false` 和 `null` 都会启用
   保守桥接，而 `true` 会绕过桥接。
2. 解析 `modalityBridgeAudio*` 设置，并通过共享的 `detectMediaParts()`
   检测器从每条消息中提取可拼接的顶层音频部分。
   支持的线上数据格式包括 OpenAI `input_audio`、`audio_url` 和
   `source.media_type: "audio/*"`。嵌套音频会被检测出来用于路由，但不会
   由拼接路径移除。处理量受 `modalityBridgeAudioMaxClips` 限制；
   后续部分保持不变。
3. 使用已配置的 `provider/model`，或者让 `selectAudioBridgeModel()` 按照
   稳定的目录顺序遍历 `AUDIO_TRANSCRIPTION_PROVIDERS`，并选择第一个
   拥有可用且有效的提供者凭据的模型。
4. `callAudioTranscription()` 将 base64/data-URI 音频转换为 multipart
   `file`，或者通过仅允许公共地址的出站防护机制下载远程 `audio_url`，
   同时使用 DNS 固定并施加 25 MB 限制。然后，它将文件和所选
   模型 POST 到本地 `/v1/audio/transcriptions` 自循环，并使用
   `resolveSelfLoopBearer()` 进行身份验证。现有的转录路由会执行正常的
   凭据查找、冷却/速率限制处理和提供者分发。
5. 成功的调用会将相应部分替换为 `[Audio N]: <transcript>`。调用通过
   `Promise.allSettled` 运行：单个调用失败时会保留对应的原始
   音频部分（#4012 契约）。如果所有调用均失败，并且已证实目标
   `supportsAudio === false`，这些部分将变为
   `[Audio N]: (unavailable — no STT provider connected)`（#8430 契约）。
   对于未知目标（`null`），全部失败时仍保持原样。对于已证实仅支持
   文本且没有可用 STT 凭据的目标，则会在不发出网络调用的情况下收到
   相同的显式占位内容。

成功的转录会使用进程范围的 Modality Bridge LRU/TTL 缓存。缓存键由
音频引用、稳定的 `audio-transcription` 操作标签以及所选 STT 模型组合而成；
失败结果永不缓存。音频尝试会更新共享的 `bridged`、`cacheHits`、`failures`
和 `lastUsedAt` 计数器。经过转换的响应会携带
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`；
未修改的请求不会收到 Audio Bridge 段。

运行时设置由数据库支持，并通过 Zod 验证：

| 键                            | 默认值  | 范围          |
| ----------------------------- | ------- | ------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —             |
| `modalityBridgeAudioModel`    | `""`    | 自动或 STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000   |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10          |

共享缓存仍由 `modalityBridgeCacheEnabled`、
`modalityBridgeCacheTtlMinutes` 和 `modalityBridgeCacheMaxEntries` 控制。

### 视频桥接器（`videoBridge.ts`、`videoBridgePipeline.ts`）

在调用已知不原生支持视频的目标之前，拦截 Chat Completions `messages` 和 Responses API `input` 中的顶层视频部分。支持的形式包括 `input_video`、`video_url`、`video_source`、HTTPS URL 以及 `data:video/*;base64,...` 数据 URI。文本中的纯文件名不会被视为视频。

`VideoBridgeGuardrail.preCall`（`videoBridge.ts`）负责请求遍历、能力/策略检查、按请求聚合以及响应载荷。每个视频的处理工作——获取视频、完整结果缓存、描述帧序列（其中会融合调用方声明的任何音频转录文本），以及每次尝试的指标记录/中止/清理——都隐藏在 `videoBridgePipeline.ts` 的 `processVideoPart` 后面，该函数在 `preCall` 的循环中针对每个视频部分调用一次。该模块还定义了明确的端口边界：`VideoMediaBrokerPort`（获取字节并提取采样帧）、`VideoAudioTranscriptionPort`（将调用方声明的音频转录文本与采样帧说明融合），以及 `VideoDrilldownPort`（帧下钻持久化边界；尚未接入 `processVideoPart`——目前只有单独的 `/api/modality-bridge/video/drilldown` 路由会写入下钻条目）。

公共 `/v1` 请求路径从不导入或调用子进程。远程视频的下载上限为 50 MiB；内联 base64 视频采用保守的每视频 36 MiB 解码后上限，以便模型/消息/成帧封装仍能保持在 50 MiB 的公共 JSON 请求准入限制内。在分配内存之前会检查内联长度和解码后大小的估算值。初始远程 URL 和每次重定向都必须使用 HTTPS，并采用现有的仅限公共地址的出站防护和 DNS 固定机制。随后，这些字节会跨越精确的内部 `POST /api/modality-bridge/video/extract` 代理边界。该路由同时属于 `LOCAL_ONLY` 和 `SPAWN_CAPABLE`，仅接受经过每进程身份验证的受信任环回请求，且绝不接受 URL、文件系统路径、可执行文件或参数列表。API 正文大小管道和处理程序的增量正文读取器会各自独立执行 50 MiB 的代理输入上限。其有界队列每次仅运行一个提取任务，允许四个待处理任务，并将待处理输入总量限制为 100 MiB。

在代理内部，`ffprobe` 读取私有本地文件；固定的格式允许列表排除了播放列表和清单格式。对于允许的 MOV 系列容器，外部 MOV 数据引用默认保持禁用状态，并且固定命令不会选择启用这些引用。`ffprobe` 和 `ffmpeg` 均使用仅允许 `file` 的协议白名单、单线程、固定参数数组且不使用 shell，可执行文件从 `PATH` 中解析。附加图片封面流不会被视为可播放候选流。所有可播放流都必须满足限制，并且会优先选择显式的默认流，然后才使用确定性的最低索引回退方案。视频限制为 600 秒、每个维度 8,192 像素，以及 33,554,432 个源像素。FFmpeg 会在中点位置采样 1–16 个 JPEG 帧，将长边缩小到最多 1,024 像素，同时不会放大较小的输入，并且永远不会接收 URL。默认采样策略为 `uniform`。可选的 `scene_aware` 和实验性的 `segment_aware` 策略会对已经验证的本地流额外执行一次固定的 FFmpeg 处理，选择数量受限的 `showinfo` 场景时间戳；当检测器失败、超时、输出格式错误或候选集为空时，则以确定性方式回退到相同的均匀中点。分段感知模式会根据经过验证的场景区间按比例分配中点样本；下文详述了分段感知证据和回退行为。每种策略都会在选择完成后应用 16 帧的硬性上限。当场景感知请求的预算只有一帧时，它会使用当前完整视频或聚焦窗口的均匀中点，并报告 `policyEffective: uniform`：单个选定的场景帧无法同时保留时间范围的两端。调用方可以选择提供有限的聚焦窗口（`start`/`end` 秒）；边界会被限制在媒体时长范围内，反向或非有限窗口会被拒绝，并且所有采样策略都仅在规范化后的区间内执行。生成的窗口会包含在采样元数据和不受信任的描述前缀中，以便下游模型区分聚焦片段与完整时间线。

语义说明聚焦是一个独立且显式的设置。默认的 `full` 分析模式会保留现有的帧提示词，并且绝不会将请求文本转发给说明模型。在 `focused` 模式下，桥接器仅从同一 Chat 或 Responses 容器中读取最新的、非空且由用户撰写的 `text`/`input_text`，将其规范化为 NFC，折叠控制字符和空白字符，并将其限制为 500 个 Unicode 码点。空结果会回退到与原内容完全一致的 `full` 提示词。可用的提示会以 JSON 形式序列化到专用的不受信任用户上下文块中，并且只能用于优先关注可观察到的细节；它不能覆盖另一项独立警告，即不得遵循媒体中可见或可听到的指令。文本聚焦绝不会推断 `start`/`end`，也不会更改时间采样器。

#### FU-07 结构化分段证据

`segment_aware` 会对已验证的本地视频流执行一次有界预分析。固定的过滤器链首先将视频缩放至最多 320 像素宽，检测场景变化和冻结区间，然后以每秒 1 帧的频率采样，以分析模糊度、平均亮度以及空间/时间信息。该过程限制为 600 个结构样本、一个 FFmpeg/过滤器线程、相同的仅限 `file` 协议和容器允许列表、1 MiB 的进程输出上限，并且在 broker 共享的中止/截止时间内最多运行 30 秒。它绝不会接受请求中的命令、过滤器、路径或 URL。

这些结构值是确定性的采样证据，而不是对视频语义的理解。它们不会推断主体、动作、字幕、语音或用户意图。场景边界和冻结边界构成片段；冻结覆盖率、模糊度、曝光度、空间细节和时间变化仅影响现有 1–16 帧预算的分配方式。完全冻结的片段最多分配一帧，而非冻结片段会竞争剩余预算。当边界数量多于帧数时，会保留时间轴上的均匀覆盖，因此早期快速切换无法掩盖较长的尾部片段。处于冻结边界 1 秒分析分辨率范围内的场景边界会被合并。

过滤器缺失、证据格式错误或为空、检测器出错，或有界预分析超时，都会以失败开放方式回退到完全一致的均匀中点策略。调用方中止或 broker 截止时间不会失败开放：它会终止正在运行的子进程，阻止后续帧提取，并在 `finally` 中移除私有临时目录树。

`scripts/perf/video-bridge-fu07-eval.ts` 会生成确定性的真实 FFmpeg 固定测试数据，用于评估去重后的字幕调用节省量、密集运动预算分配、模糊度/曝光度/SI-TI 证据、带长尾的快速切换，以及渐变淡入淡出导致的误报。它会记录预分析的墙钟时间，并在 `/usr/bin/time` 可用时记录子进程 CPU 使用情况和峰值 RSS。其质量检查仅为结构预言机。真实字幕模型质量仍为 `HOLD`，因为此测试工具没有经过授权的端点或冻结的评判器。除非通过 `--caption-cost-per-call-usd` 提供明确的正数单次调用成本估算，否则成本节省也仍为 `HOLD`；该脚本绝不会捏造任一结果。

每帧限制为 4 MiB，所有原始帧合计限制为 23 MiB，序列化后的 broker 响应限制为 32 MiB。私有临时目录会在 `finally` 中移除。OmniRoute 不捆绑 FFmpeg，也不接受自定义可执行文件路径。在生成字幕之前，bridge 会执行保守的视觉去重：将每个 JPEG 缩减为 16×16 灰度缓冲区，并且仅与上一个保留帧进行比较。对于超过一帧的请求字幕预算，提取过程会提供一个有界候选池，其大小最多为该预算的两倍，并且绝不超过 16 帧。仅在去重后才应用请求的上限；当预算至少为两帧时，最终精简过程中会保留第一个和最后一个选定候选帧。版本化的
`grayscale-16x16-mean-cells-v2` 策略取平均亮度差异与缩略图单元格比率中的较大值，其中后者统计归一化差异至少为 0.05 的单元格比例。重复项阈值为常量 0.04；选择固定值是为了保证可预测性，而不是将其公开为运行时设置。这种辅助的高对比度信号能够保留仅使用均值比较时可能被掩盖的细微运动和可见文本变化。比较器或解码器错误会失败开放并保留覆盖范围。输出元数据会区分已提取候选帧、成功使用的帧，以及被丢弃的视觉重复帧。

明确标记的视频部分可以请求带时间戳的联系表。bridge 最多构建一个 4 列、16 帧的 JPEG 网格。每个 512 像素单元格都会将源时间戳烧录到高对比度的底部条带中，同时相同的时间戳也会保留在文本元数据中，以便下游关联和审计。完整 JPEG 仍限制为 32 MiB。如果 `sharp` 无法解码或合成网格，bridge 会回退到各个独立的 JPEG 帧；客户端中止仍会传播至联系表操作。

晋级证据有意与合成微基准中的图像合成部分保持分离。`scripts/perf/video-bridge-contact-sheet-eval.ts` 为真实的 OpenAI 兼容视觉模型定义了一个带模式版本的 A/B 测试工具。它会测量提供者报告的 token 数、端到端墙钟延迟（包括联系表合成）、模型调用次数，以及清单定义的事实保留情况。原始模型响应不会写入报告；仅保留 SHA-256 摘要和匹配的事实 ID。除非传入 `--execute-real`，并且已配置 `--model`、`OMNIROUTE_BASE_URL` 和 `OMNIROUTE_API_KEY`，否则该测试工具不会发起任何网络调用或付费模型调用。如果没有这种明确的真实运行，其机器可读的判定结果仍为 `HOLD`；仅凭合成负载或调用次数测量不能作为晋级证据。

当调用方已经拥有对齐文本时，可以向受支持的视频部分附加可选的 `transcript.cues` 数组。每个 cue 都必须包含 `text`、位于探测所得时长范围内的有限 `start`/`end` 区间，以及允许列表中的 `source`（`client`、`embedded` 或 `audio-bridge`）；`confidence` 默认为 `1`，且必须保持在 `0` 到 `1` 之间。完全重复的 cue 会被合并。OmniRoute 绝不会根据这些元数据启动转录：经过验证的 cue 会连同来源、置信度和区间复制到描述结果中，并与帧字幕一起作为不可信观察结果呈现。无效、超出范围或缺少来源信息的文本会被拒绝，而不会混入字幕流。两个请求体转录通道都会将提供的来源规范化为 `client`，包括自行声明的 `embedded` 或 `audio-bridge` 标签。只有服务器拥有的适配器才能通过仅限代码使用的 `trustedSource` 参数分配这些受信任标签；请求 JSON 字段无法触达该参数。无论来源如何，转录文本仍是不可信的、源自媒体的内容，并且绝不能用于决定授权。

高级调用方可以为同一视频提供 `audioTranscript` 轨道；
它会被视为客户端提供的文本，而不是服务器转录的证明。
融合接缝会在同一个截止时间和中止信号下运行视觉与音频观察，
将它们按统一时间线排序，合并完全相同的重复项，并在只有一侧成功时
报告部分结果。无效的 `audioTranscript` 会降级为该部分结果——保留视觉
描述，同时音频分支记录经过净化的失败代码——而不是导致整个视频失败。
各分支的可用性、部分结果标志以及经过净化的失败代码会保留在描述结果中、
护栏元数据（`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`）、结果缓存元数据以及桥接器
融合计数器中。默认的 Video Bridge 路径不会调用语音转文本，
也不会下载第二份媒体副本；如果没有该显式轨道，它仍然
仅处理视频。

**转录内容保留（#12150 P1）。** 只要 Video Bridge（其本身需要选择启用）
渲染转录提示，此规则就会自动应用——没有单独的
保留标志。当请求渲染任何转录提示（调用方声明的
`transcript` 或融合后的 `audioTranscript`）时，护栏会将其标记为
`videoBridgeObserved`，并生成视频描述的脱敏影子版本——
渲染方式与原内容完全相同，但每条提示的自由文本正文都会替换为
`[redacted-video-transcript]`；该版本通过在组装字符串之前替换结构化提示字段
来构建（绝不通过解析扁平化文本来构建，因此任何提示内容——无论是对抗性还是普通内容，
包括正文中含有 `]` 的内容，例如 `[inaudible]`/`[music]`——都无法残留）。
持久化调用日志的请求正文会将每个视频衍生文本部分替换为该脱敏影子版本，
并通过内容相等性进行匹配；`fullText` 锚点会从已完成的调用前护栏载荷中
重新读取，因此，即使后续链式护栏（PII 和凭据掩码器，优先级为 10/95）
就地重写了描述文本，并且系统提示词/移交/记忆注入重塑了消息数组，
匹配仍能成功。发送给上游模型的正文保持不变。被观察的请求也不会填充
任何持久化 Memory（基于请求和基于响应的提取都会被跳过），
因此模型自身的回复无法将转录文本回显到 Memory 中。

**原始视频字段（#12430）。** 当桥接器已启用且原生视频支持未知或不存在时，已定义的 `transcript`/`audioTranscript` 字段也会激活 `videoBridgeObserved`，即使描述失败或达到 `maxVideos` 限制也是如此。`null` 和空字符串均计入；缺失字段和非视频元数据不计入。保留的副本会对这些字段进行脱敏或省略请求，并绕过缓存/Memory。

在这些回退路径中，有效的调用方提示会变为受支持的 `text`/`input_text`
部分，而不是非标准提供者字段。请求提供的两个轨道仍然是不受信任的 `client`
观察，并带有明确警告，说明视频未被描述，且时间戳未根据媒体进行验证。现有的
256 条提示/总计 64 KiB 限额以及每条提示限额会统一应用于两个轨道；
时间戳必须处于代理的 600 秒上限以及任何已提供的焦点
窗口范围内。无效轨道会被丢弃，而不会作为任意文本转发；除非两个轨道的合计
超出限额，否则有效的同级轨道仍可使用。null/空字段不会添加文本。
此回退不会增加任何媒体获取或转录操作。
转录扩展字段会从回退视频载体及其
`video_url`/`source` 对象中移除。OpenAI 传输层允许列表仍保持严格；
原生支持状态未知的视频载体仍然可用，已知的纯文本目标则保留安全标记。
结构化脱敏影子会保护附加的转录文本，而调用方拥有的原始请求保持不变。
原生支持的目标和已禁用的桥接器继续保留其现有的绕过行为。

其他保留副本使用相同的已观察请求信号。原始的
护栏前客户端请求快照、内存中的待处理请求以及早期被拒请求日志，会以结构化方式
替换视频部分中的转录字段；由流水线阶段和上下文移交合成的字符串提示，
会在持久化请求正文接收端进行脱敏。持久化的 `video_content_removed` 标记
会让 `previous_response_id` 延续操作以闭合方式失败，而不是重建
被有意丢弃的文本。如果被观察的请求在记录日志之前丢失了
按部分生成的脱敏影子，或者在后续请求变更后，多个视频影子中哪怕只有一个
匹配失败，则会完全省略保留的请求正文，而不是保留仅部分脱敏的转录内容。

对于被观察的请求，模型响应可能会引用转录内容的任意部分，
且不带结构化提示边界。因此，其持久化调用日志中的
`responseBody` 会替换为省略标记；详细的
流水线产物（其中可能包含上游/客户端正文和流式数据块）
不会被保留。对于该请求，语义缓存、幂等性缓存和推理重放缓存均会绕过
读取与写入。提供者请求和客户端可见响应保持不变。
省略详细产物时，会从临时缓冲区中排空早期保活字节。
Kiro 的畸形 EventStream 警告仅报告载荷字节数，绝不会报告其内容
或 JSON 解析器的原始错误。
这并不表示每个无关的提供者/插件诊断都已经过审计；
范围更广的保留接收端排查工作在 #11658 中跟踪。

内部 `/api/modality-bridge/video/drilldown` 生命周期是一个独立的、通过环回地址/令牌进行身份验证的缓存底层。每项操作还需要一个规范的不透明主体 ID。在启用生产调用方之前，它必须从已经过身份验证的租户派生该 ID，并且绝不能转发由客户端选择的值。缓存键将该主体与规范的会话 ID 和视频引用 ID 绑定，仅存储它们经 SHA-256 派生的键，并将读取和删除操作都限定于同一主体。缓存中每个条目最多存储 16 个派生的 JPEG 帧，这些帧在十分钟后过期；缓存支持有界的 `start`/`end` 读取或显式删除会话。

每个主体最多可拥有 16 个条目和 64 MiB 的规范 JPEG 数据。这些限制独立于全局 64 个条目/256 MiB 的上限：主体配额压力只会先逐出该主体最近最少使用的条目，然后才会考虑全局 LRU 逐出。发生缓存活动时，会从主体和全局统计中清除已过期条目；取消和验证失败则不会提交不完整的替换内容。

缓存会拒绝非规范 Base64、过多填充、非 JPEG 媒体、格式错误或被截断的 JPEG，以及在有界的全图 `sharp` 解码期间产生警告的 JPEG。它会将每个接受的图像重新编码为规范 JPEG，根据解码后的字节派生宽度和高度，而不是信任调用方提供的字段，并丢弃任何尾随的多格式混杂字节，而不是保留它们。两个配额都只计算有界的规范压缩缓冲区。JSON 传输限制包含 32 MiB 解码输入上限所对应的 Base64 开销。每项存储的派生结果都会记录其经过验证的 JPEG 格式/分辨率、采样策略、派生版本、创建时间、服务器计算的内容哈希，以及经过哈希处理的父引用和受信任调用方提供的父内容哈希。在原子缓存提交之前，会在异步解码/哈希阶段之间检查取消状态。

本批次尚未将生产环境的生产者连接到该路由，也不提供多分辨率变体选择。因此，透明的 Video Bridge 请求路径不会产生额外工作，而租户绑定的主体派生和完整的 FU-08 多分辨率生命周期仍明确属于后续工作，不会被描述为已完成的行为。

帧会使用配置的 Video 模型按顺序生成字幕。空的 Video 覆盖配置会继承 Vision 设置；如果两者均为空，则由 Vision 自动路由器选择实际使用的、具备视觉能力的模型。成功生成的字幕会使用带有稳定 `[Video description:` 前缀的文本替换原始部分；该前缀还会将文本标记为源自不受信任媒体的观察结果，并指示下游模型不要遵循媒体中出现的指令。帧字幕缓存键包含 JPEG 字节、提示词、时间戳和实际使用的模型；仅缓存成功生成的字幕。缓存条目会保留实际成功处理该内容的生产者模型，包括回退模型；当不同帧由不同模型生成时，桥接器会报告 `mixed`。缓存命中时会复用该生产者身份，而不会将其重新标记为请求的路由方案。整段视频的结果缓存会基于所有能够改变输出的输入生成键——提示词、实际使用的模型、采样策略、帧数、语义分析模式、规范化焦点提示的 SHA-256 指纹、焦点窗口、`transcript`、`audioTranscript` 和联系表标志——因此，更改其中任何一个维度都会导致缓存未命中，绝不会复用过时结果。视觉去重策略的版本、阈值和有界候选帧数量也会显式包含在结果缓存键和元数据中；因此，策略变更无法复用过时的整段视频描述。结果缓存 v4 元数据会保留模式和指纹，但绝不保留原始用户任务。护栏元数据会同时报告请求的分析模式和实际使用的分析模式；如果请求了 `focused` 模式但没有可用的用户文本，则实际模式会报告为 `full`。

护栏会提取所有受支持的视频部分，但描述的视频数量不会超过 `modalityBridgeVideoMaxVideos`。对于已证实 `supportsVideo === false` 的目标，处理失败和超出限制的视频会被转换为明确的安全文本标记，从而确保不会残留原始视频。当能力未知时，这些部分会保留其视频载体；任何回退转写文本都会遵循上述有界文本转换。`supportsVideo === true` 的目标会绕过桥接器。客户端请求的中止信号会传播到下载、代理队列、子进程和字幕生成调用；中止操作会在视频之间停止处理，并且绝不会以开放失败方式放行原始媒体。

运行时设置由数据库支持并经过 Zod 验证：

| 键                                  | 默认值      | 范围 / 行为                                                                       |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | 可选运行时，需主动启用                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` 保留通用描述；`focused` 使用有界且不受信任的最新用户上下文                 |
| `modalityBridgeVideoModel`          | `""`        | 继承 Vision Bridge 模型                                                           |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                              |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`、`scene_aware` 或按比例的 `segment_aware`；检测器失败时回退到 `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                               |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                    |

旧版持久化的视频超时值若超过 120 秒，会被限制为代理截止时间；
新设置写入若超过该限制，则会被拒绝。
`GET /api/modality-bridge/video/runtime` 在身份验证或运行时探测之前，
要求可信且带标记的环回本地性，随后还要求管理身份验证。
它仅返回 `available`、经过净化的 FFmpeg/ffprobe 版本，以及运行时不可用时的固定原因。
内部提取端点不是公共上传 API：队列饱和时返回 `503` 并附带 `Retry-After`，
调用方断开连接时返回 `499`，达到固定的代理截止时间时返回 `504`。转换后的响应会将
`video->text;model=<visionModel>;parts=<videos>` 添加到中央
`x-omniroute-modality-bridge` 标头中，且不会移除 Vision 或 Audio 段。

### PII 掩码器（`piiMasker.ts`）

在**两个**阶段运行。

- **`preCall`** 会克隆有效负载，遍历 `system`、`messages`、`input` 和
  `prompt`（包括纯字符串项），并对字符串 `content`/`text` 字段应用
  `processPII()`（来自 `@/shared/utils/inputSanitizer`）。当
  `PII_REDACTION_ENABLED=true` 时，检测到的 PII 会在出站有效负载中被隐去。
  此行为独立于 `INPUT_SANITIZER_MODE`（后者仅控制提示词注入策略）。
  关闭隐去功能后，调用会记录检测计数，但不会重写内容。
- **`postCall`** 会深度克隆响应，运行 `sanitizePIIResponse()` 以及
  Responses API 结构掩码器（`maskResponsesOutput`——覆盖
  `output_text` 和 `output[].content[].text`）。如果发生任何隐去，
  修改后的响应将替换原始响应。

该护栏从不阻止请求；它只会添加注解（`meta.detections`、
`meta.redacted`）或重写内容。

### 提示词注入（`promptInjection.ts`）

检测用户提供内容中的对抗性结构，并执行已配置的策略。
其行为由环境变量和构造函数选项驱动：

| 设置     | 环境变量                                                                                            | 默认值 | 效果                                                                                                                                        |
| -------- | --------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 启用     | `INPUT_SANITIZER_ENABLED`                                                                           | `true` | 为 `false` 时，护栏会短路。                                                                                                                 |
| 模式     | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                     | `warn` | 注入策略：`block`、`warn` 或 `log`。（为向后兼容也接受 `redact`，但它**不会**移除注入文本；请求 PII 重写由 `PII_REDACTION_ENABLED` 控制。） |
| 阻止阈值 | `blockThreshold` 选项 / `INPUT_SANITIZER_BLOCK_THRESHOLD`（别名 `INJECTION_GUARD_BLOCK_THRESHOLD`） | `high` | 触发阻止所需的最低严重级别。默认情况下，`medium` 仅进行观察。                                                                               |

**模式优先级**（`getMode`）：调用方 `options.mode` →
`INJECTION_GUARD_MODE` **数据库功能标志覆盖值**（Dashboard → Settings →
Feature Flags）→ `INJECTION_GUARD_MODE` 环境变量 → `INPUT_SANITIZER_MODE` 环境变量 →
`warn`。因此，仪表板覆盖值优先于环境变量，使 Feature Flags UI 能够实时控制正在运行的护栏
（无需重启）。数据库读取采用故障安全机制：如果读取出错，护栏会回退到基于环境变量的行为；
未设置覆盖值时，其行为与仅通过环境变量解析完全相同。

检测来源：

1. 来自 `@/shared/utils/inputSanitizer` 的 `sanitizeRequest()`（管道其他位置也使用的共享检测器集）。
2. 内置的 `DEFAULT_GUARD_PATTERNS`（目前为 `system_override_inline` 和
   `markdown_system_block`，两者的严重级别均为 `high`）。
3. 通过构造函数选项传入的可选 `customPatterns`（字符串、正则表达式，
   或 `{ name, pattern, severity }` 记录）。

当 `mode === "block"` **且**至少有一次检测达到严重性阈值时，`preCall` 返回 `{ block: true, message: "Request rejected:
suspicious content detected" }`。在 `warn`/`log` 模式下，护栏会记录日志，但
允许调用继续执行。共享辅助函数 `evaluatePromptInjection()` 也会被导出，
供需要在不经过注册表的情况下评估提示词的调用方使用。

**扫描上限（v3.8.20）：**检测器仅检查拼接后的提示词文本的**前 16 KB** —
`src/shared/utils/inputSanitizer.ts` 中的
`MAX_INJECTION_SCAN_BYTES = 16 * 1024`（16 384 字节）。`detectInjection()` 和
`evaluatePromptInjection()` 都会在运行模式匹配循环之前执行
`slice(0, MAX_INJECTION_SCAN_BYTES)`。注入指令通常位于输入内容的开头附近，因此
这可以限制数百 KB 负载上的正则表达式 CPU/GC 开销，同时不会削弱检测能力（参见
#3932、#4041）。

### 凭据遮蔽器（`credentialMasker.ts`）

在**两个**阶段都会运行，并且在默认链中最后执行（优先级 `95`）。它会从出站负载（消息
内容、工具调用参数、工具结果）**以及**提供者响应中遮蔽常见的 API 密钥/秘密令牌模式，因此
粘贴到提示词中的凭据（或由工具结果回显的凭据）不会泄露给上游提供者或返回给客户端。

- **仅限选择启用**，与 PII 遮蔽采用相同约定（接近硬性规则 #20）：
  除非 `settings.credentialRedactionEnabled === true` **或**
  `CREDENTIAL_REDACTION_ENABLED=true`，否则处于禁用状态。关闭时，该护栏不会执行任何操作 —
  它不会阻止调用，也不会重写内容。
- `redactCredentials()` 会遍历完整的负载/响应树（`walkValue()`，
  可防止原型污染，并通过 `WeakSet` 安全处理循环引用），将匹配项替换为
  `[REDACTED:<type>]` 占位符，并且仅克隆实际发生更改的分支。
- `CREDENTIAL_PATTERNS` 涵盖 LLM 提供者密钥（OpenAI、OpenAI-proj、
  Anthropic、Google、Hugging Face、Replicate）、VCS/SaaS 令牌（GitHub、Slack、
  Linear、Notion、npm、Postman、Discord）、支付密钥（Stripe、Square）、云服务
  密钥（AWS 访问密钥、Twilio、SendGrid、Mailgun）、私钥/JWT、
  包含凭据的连接字符串（`mongodb://user:pass@...` 等），以及通用的
  `Authorization`/`x-api-key`/`api-key`/`apikey` 请求头值
  模式。具有请求头形式的键（`authorization`、`x-api-key`、`api-key`、
  `apikey`）会以结构化方式进行遮蔽（仅遮蔽值，并保留类似
  `Bearer `/`Basic ` 的方案前缀），而不是通过通用文本正则表达式处理。
- 该护栏永远不会阻止调用；它只会重写（`modifiedPayload` /
  `modifiedResponse`）并添加注解（`meta.credentialsRedacted`、`meta.count`）。

回归保护：`tests/unit/credential-masker-guardrail.test.ts`。

## 基础契约 (`base.ts`)

```typescript
class BaseGuardrail {
  enabled: boolean;
  name: string;
  priority: number;

  constructor(name: string, options?: { enabled?: boolean; priority?: number });

  async preCall(payload: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;

  async postCall(response: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;
}

interface GuardrailResult<TValue = unknown> {
  block?: boolean; // true 会使链路短路
  message?: string; // 阻止时对外显示
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // 由 preCall 返回，用于重写请求
  modifiedResponse?: TValue; // 由 postCall 返回，用于重写响应
}

interface GuardrailContext {
  apiKeyInfo?: Record<string, unknown> | null;
  disabledGuardrails?: string[] | null;
  endpoint?: string | null;
  headers?: Headers | Record<string, unknown> | null;
  log?: GuardrailLog | Console | null;
  method?: string | null;
  model?: string | null;
  provider?: string | null;
  signal?: AbortSignal;
  sourceFormat?: string | null;
  stream?: boolean;
  targetFormat?: string | null;
}
```

护栏通过返回 `void`、`{}` 或
`{ block: false }` 来表示“不做更改”。返回 `modifiedPayload`/`modifiedResponse` 会替换
链路中流向后续护栏的值。
`signal?: AbortSignal` 将调用方的生命周期传递到护栏中。请求中止是有意设计的故障开放例外：媒体桥会停止工作并进行清理，而不会将原始媒体恢复到一个已知不支持该媒体的目标中。

## 注册表 (`registry.ts`)

单例 `guardrailRegistry` 提供：

- `register(guardrail)` — 添加护栏（或按规范化名称替换已有护栏），并
  按 `priority` 升序重新排序。
- `clear()` / `list()` — 管理辅助方法。
- `runPreCallHooks(payload, context)` — 遍历处于活动状态的护栏，通过
  `modifiedPayload` 逐步传递负载，并在遇到第一个 `block: true` 时停止。
- `runPostCallHooks(response, context)` — 在响应侧执行相同流程。
- `resetGuardrailsForTests({ registerDefaults })` — 清除状态，并可选择
  重新注册默认护栏，以实现干净的测试隔离。

两个运行器都返回 `{ blocked, payload|response, results, guardrail?, message? }`，
其中 `results` 是一个 `GuardrailExecutionResult` 记录数组，包含
每个护栏的 `blocked`、`skipped`、`modified`、`error` 和 `meta` 字段，
可用于追踪。

### 按请求禁用护栏

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` 会汇总当前
请求中应跳过的护栏名称，并生成一个去重后的列表。来源如下（均为可选，且会全部合并）：

- `apiKeyInfo.disabledGuardrails`
- 请求体中的 `disabledGuardrails`（顶层）
- 请求体中的 `metadata.disabledGuardrails`
- 请求头 `x-omniroute-disabled-guardrails`（或旧版
  `x-disabled-guardrails`）

值可以是字符串数组，也可以是逗号分隔的字符串；名称会被
规范化为小写 kebab-case（`pii_masker` → `pii-masker`）。结果会通过
`context.disabledGuardrails` 传递给注册表，注册表会跳过
匹配的护栏（在 `results` 中标记为 `skipped: true`）。

## 执行顺序

对于流经 `src/sse/handlers/chat.ts` 和
`open-sse/handlers/chatCore.ts` 的每个请求：

1. `resolveDisabledGuardrails(...)` 根据 API 密钥、请求体和请求头构建跳过列表。
2. `guardrailRegistry.runPreCallHooks(body, ctx)` 按优先级升序运行护栏：
   - 已禁用的护栏会被记录为 `skipped`。
   - 每个护栏的 `preCall` 都可以通过 `modifiedPayload` 重写有效负载。
   - 首个 `block: true` 会使链短路，处理程序将返回护栏拒绝响应。
3. （可能已被重写的）有效负载进入组合路由和上游分发流程。
4. 响应组装完成后，`guardrailRegistry.runPostCallHooks(...)`
   会对响应运行相同的护栏链。此处的 `block: true` 会丢弃上游响应。

抛出异常的护栏会以 `error: <message>` 的形式记录，并通过
`logger.warn` 写入日志，但护栏链会继续运行——这是有意采用的故障开放设计。

## 配置

内置护栏读取的环境变量：

| 变量                                  | 使用方               | 效果                                                                         |
| ------------------------------------- | -------------------- | ---------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`   | 设置为 `false` 可完全禁用检测。                                              |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`   | 注入策略：`warn`、`block` 或 `log`。旧值 `redact` 不会重写注入文本。         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`   | 注入护栏的模式；同时也是一个会**覆盖**环境变量的数据库功能标志（DB > ENV）。 |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`   | `MODE=block` 拒绝请求的最低严重程度：`high`（默认）、`medium` 或 `low`。     |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`   | `INPUT_SANITIZER_BLOCK_THRESHOLD` 的旧版别名。                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`         | 为 `true` 时，请求中的 PII 会被脱敏（与注入模式无关）。                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker`（下游） | 控制响应侧脱敏器的行为。                                                     |

Modality Bridge 护栏从数据库支持的设置存储
（`getSettings()`）中读取运行时配置，而不是环境变量。Vision 的主键为
`modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、
`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、
`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、
`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`、
`modalityBridgeCacheEnabled`、`modalityBridgeCacheTtlMinutes` 和
`modalityBridgeCacheMaxEntries`。旧版
`visionBridge*` 键仅作为文档所述的单周期读取回退方案被接受；仪表板写入时使用主键。默认值和回退解析器位于
`src/shared/constants/modalityBridgeDefaults.ts`，旧版常量则保留在
`src/shared/constants/visionBridgeDefaults.ts` 中。

Audio 使用 `modalityBridgeAudioEnabled`、`modalityBridgeAudioModel`、
`modalityBridgeAudioTimeout` 和 `modalityBridgeAudioMaxClips`，以及共享的
`modalityBridgeCache*` 设置。Audio 没有旧版键回退机制，因为这些键是随 Modality Bridge 架构一起引入的。

Video 使用 `modalityBridgeVideoEnabled`、`modalityBridgeVideoAnalysisMode`、
`modalityBridgeVideoModel`、
`modalityBridgeVideoFrameCount`、`modalityBridgeVideoSamplingPolicy`、
`modalityBridgeVideoMaxVideos` 和
`modalityBridgeVideoTimeout`，以及共享的 `modalityBridgeCache*` 设置。
它默认处于禁用状态，因为 FFmpeg/ffprobe 是可选的运行依赖项，而帧描述还会增加延迟和模型成本。

## 自定义防护栏

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Daily budget exceeded" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

步骤：

1. 创建 `src/lib/guardrails/myGuardrail.ts`，并扩展 `BaseGuardrail`。
2. 实现 `preCall` 和/或 `postCall`。
3. 可以在导入时注册（从 `registerDefaultGuardrails` 推送），也可以在运行时
   调用 `guardrailRegistry.register(...)`——注册表会替换规范化名称相同的
   任何已有防护栏。
4. 在 `tests/unit/` 下添加测试（现有示例：
   `tests/unit/guardrails-registry.test.ts`、
   `tests/unit/prompt-injection-guard.test.ts`、
   `tests/unit/guardrails/visionBridge.test.ts`）。

## 测试

在各测试之间使用 `resetGuardrailsForTests()`，以便从已知状态开始。
传入 `{ registerDefaults: false }` 可从空注册表开始，并且只注册待测试的
防护栏。Vision Bridge 支持依赖注入（`deps.getSettings`、`deps.callVisionModel`）；
Audio Bridge 为设置、能力、STT 模型选择、凭据检查和转录提供了
对应的注入点。因此，测试无需访问数据库或网络即可覆盖这两种流程。

## 另请参阅

- `src/lib/guardrails/` — 实现
- `src/shared/utils/inputSanitizer.ts` — 为提示词注入检测和 PII 脱敏提供支持的共享检测器
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge 默认值和强制桥接模型列表
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio 共享运行时默认值
- `docs/architecture/RESILIENCE_GUIDE.md` — 正交层（熔断器、冷却机制）
- `docs/reference/ENVIRONMENT.md` — 完整的环境变量参考

## 注入防护路由覆盖与红队测试（阶段 8 · 模块 D）

注入防护（`createInjectionGuard` / `withInjectionGuard`）覆盖所有
接受用户提示词的路由。它遵循 `INJECTION_GUARD_MODE`（默认值 `warn` = 仅记录日志；
`block` = 返回 HTTP 400 `SECURITY_001`）。

| 类型         | 路由                                                                                                                                                 | 默认模式 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| 文本（现有） | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn     |
| 生成式       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn     |
| 数据         | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn     |

文本提取（`extractMessageContents`）覆盖 `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`。

**红队测试（每晚运行，`nightly-llm-security.yml`）：** promptfoo 验证每条路由在
`INJECTION_GUARD_MODE=block` 模式下都会阻止 OWASP-LLM 语料库中的内容；garak
运行探测（无密钥时跳过）。为保持一致性，`moderations` 也包含在内——使用阻止模式的
运维人员可通过 `resolveDisabledGuardrails` 将其豁免。

每晚运行的工作流（`.github/workflows/nightly-llm-security.yml`，定时任务 + 手动
触发）包含两个作业：

- **`promptfoo-guard`（阻断性）** — 使用 `INJECTION_GUARD_MODE=block` 运行
  `promptfoo eval -c promptfooconfig.yaml`。每个对抗性测试用例（例如“忽略之前的
  所有指令……”、DAN 风格的越狱）都会断言响应包含
  `error.code === "SECURITY_001"`，即防护确实拒绝了该请求。
- **`garak`（建议性）** — 针对本地 OmniRoute 实例
  （`http://localhost:20128/v1`）运行 garak
  `--probes promptinject,dan,leakreplay`。该作业以提供者密钥
  （`PROMPTFOO_PROVIDER_KEY`）作为执行条件；缺少密钥时会正常跳过，并以
  `|| true` 结尾，因此它只报告结果，不会导致 CI 失败。

防护辅助函数（`createInjectionGuard` / `withInjectionGuard`）覆盖每个包含提示词的
`/v1` 路由；提示词文本由 `src/shared/utils/inputSanitizer.ts` 中的
`extractMessageContents()` 从 `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`
中提取。
