# Guardrails (中文 (繁體))

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md)

---

> **事實來源：** `src/lib/guardrails/`
> **上次更新：** 2026-08-29 — v3.8.51（Video Bridge 逐字稿來源由呼叫端宣告，
> 尚未由伺服器驗證 — 已依 #11661 釐清）

護欄會在 OmniRoute 與上游提供者之間的邊界強制執行安全、政策及內容轉換。每個護欄都可以檢查請求承載資料（`preCall`）和上游回應（`postCall`），並可選擇拒絕、轉換或註解這些內容。

系統採用**失敗時開放**機制：如果護欄在執行期間擲出例外，登錄檔會記錄錯誤並繼續執行下一個護欄，而不會讓請求失敗。封鎖一律是明確的決定（`block: true`），絕不會因意外而發生。

## 內建防護機制

登錄檔在匯入時會依優先順序自動載入六個防護機制
（請參閱 `registry.ts` → `registerDefaultGuardrails()`）：

| 優先順序 | 名稱                | 階段           | 檔案                  |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

優先順序數字較小者會**先**執行。

### 視覺橋接器（`visionBridge.ts`）— 模態橋接 PR-1

攔截傳送至**非視覺模型**且包含圖片的請求，並將整個請求重新路由至支援視覺的模型，或是在上游呼叫前，將圖片部分替換為由可設定的視覺模型產生的文字描述。這可讓純文字提供者透明地處理多模態承載資料。

流程：

1. 若目標模型已支援視覺，則略過（除非該模型出現在強制橋接清單 `isVisionBridgeForcedModel` 中）。
2. 透過 `extractImageParts(messages)`
   （`visionBridgeHelpers.ts`）擷取圖片部分；此函式會委派給 `open-sse/utils/mediaParts.ts` 中的**統一媒體偵測器**
   `detectMediaParts()`，它是與組合相容性篩選器共用的單一事實來源。
   擷取僅允許 `replaceImageParts` 可重新拼接的頂層部分形狀（擷取↔替換契約）：OpenAI
   `image_url`、Anthropic base64 `source.type:"base64"`、Anthropic URL
   `source.type:"url"`，以及 Responses API `input_image`。巢狀命中與僅含指示資訊的形狀屬於組合篩選器的處理範圍，永遠不會被擷取。
   若未找到任何圖片，則略過。
3. 透過 `resolveVisionBridgeRuntimeSettings()`
   （`src/shared/constants/modalityBridgeDefaults.ts`）解析執行階段設定：新的 `modalityBridge*`
   設定鍵優先；舊有的 `visionBridge*` 鍵仍保留為**單一週期的備援**
   （回滾窗口）。當橋接器停用時，會在任何媒體遍歷開始前略過。
4. 模式選擇器（`modalityBridgeVisionMode`，請參閱下表）決定要重新路由或描述。重新路由會回傳僅替換 `model`
   的 `modifiedPayload`，以及中繼資料 `{ rerouted, fromModel, toModel, imagesKept }`。
5. 描述路徑：將圖片數量限制為 `maxImages`、組合可感知任務的提示詞、查詢描述快取、**平行**
   呼叫視覺模型（`Promise.allSettled`），並在原位置注入 `[Image N]: <description>` 文字部分。
   描述失敗時會產生 `null`，且原始圖片部分會被**保留**（#4012）——但組合描述路徑例外：若所有描述都失敗，已確認不支援視覺的上游會收到
   `(unavailable — no vision-capable provider connected)` 預留文字（#8430）。
6. 回傳 `modifiedPayload` 與中繼資料（`imagesProcessed`、`descriptions`、
   `processingTimeMs`、`visionModel`）。

#### 模式選擇器（`modalityBridgeVisionMode`）

| 模式       | 預設值 | 行為                                                                                                                                                                    |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | 舊有啟發式邏輯，未經變更（#6640/#7204）：非組合/`auto/` 模型會重新路由至最佳視覺模型，除非原始模型已有可用憑證（此時改為描述）；組合目標一律使用描述。                  |
| `describe` |        | 一律描述——完全略過重新路由區塊；始終由使用者選擇的模型回答。                                                                                                            |
| `reroute`  |        | 強制重新路由：略過保留具憑證模型的防護檢查。重新路由**目標**的憑證防護檢查仍然適用——當不存在可用的視覺目標時，請求會轉而使用描述，避免原始圖片送達純文字後端（#8430）。 |

強制模式會在自動啟發式邏輯執行**之前**短路；`auto` 的行為與 PR-1 之前的防護機制逐位元組相同。

#### API 金鑰範圍（`visionBridgeKeyScope.ts`）

當呼叫者的 API 金鑰限制 `allowedConnections`、配額集區
（`allowedQuotas`）或模型（`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`）時，橋接器只會選擇該金鑰可使用的重新路由與描述模型，並且僅使用該金鑰可存取的連線。接著，描述呼叫一律透過帶有
`x-omniroute-self-loop-key-id` 標頭的 OmniRoute 自迴路進行，因此接收端的聊天請求會再次強制執行該金鑰的連線與模型政策。`enforceApiKeyPolicy()`
只有在該標頭與自迴路 bearer 同時存在時才會接受它，因此它只能縮小存取範圍，而無法解析的 id 會遭到拒絕。

若沒有任何視覺模型允許該金鑰使用，描述路徑會退出，請求則原封不動地通過，其失敗開放行為與停用的防護機制相同（中繼資料為 `{ skipped: true, reason: "no_permitted_vision_model" }`）。
沒有金鑰的請求，以及不具這些限制的金鑰，其行為與之前完全相同。

#### 可感知任務的描述提示詞（`modalityBridgeVisionTaskAware`）

預設為 **true**。`composeVisionPrompt()`（`visionBridgeHelpers.ts`）會將**最後一則使用者訊息**的文字（截斷至 500 個字元）附加至基礎描述提示詞，引導描述聚焦於使用者實際詢問的內容（codex-vision-proxy 模式），並要求視覺模型轉錄可見文字。關閉此旗標時，或沒有使用者文字時，會原封不動地使用基礎提示詞。

描述自迴圈本身的 OpenAI 相容請求（`visionBridgeHelpers.ts` 中的 `callVisionModelSingle()`）一律要求 `image_url.detail: "high"`——無條件套用於每個呼叫端／提供者，不受任何用戶端訊號控制。低細節取樣會降低此提示詞所要求之文字轉錄工作的 OCR 準確度，因此無論原始傳入請求使用何種細節等級，描述呼叫本身一律要求高細節。這只會影響內部描述請求本文；不會改變 OmniRoute 在主要請求中轉送呼叫端自身 `image_url.detail` 的方式——該預設值會另行套用，且僅適用於偵測到的 OpenCode 用戶端，位置在 `defaultImageDetail()`（`open-sse/handlers/chatCore/upstreamBody.ts`）。描述自迴圈的 Anthropic 線路格式分支沒有 `detail` 欄位，因此不受任一預設值影響。

#### 描述輸出上限（`modalityBridgeVisionMaxChars`）

| 鍵                             | 預設值 | 範圍             |
| ------------------------------ | ------ | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` 或 100–50000 |

`0`（預設值）表示**不設上限**——`callVisionModel()` 傳回的描述會原封不動地傳遞，以保留現有行為。100–50000 範圍內的任何值，都會先以 `…` 後綴截斷描述，再將其插回為 `[Image N]: <description>`（`src/lib/guardrails/visionBridge.ts` 中的 `VisionBridgeGuardrail.preCall()`）。對於注重細節、且下游模型需要完整轉錄內容的 OCR 工作，請提高此值；若要限制輸出冗長之視覺模型的權杖用量，則請降低此值。儀表板欄位位於 Vision 分頁的 Advanced 面板（`ModalityBridgeVisionTab.tsx` 中的 `modality-bridge-max-chars`），會將 1 到 99 之間的任何值限制為最低值 100，同時保留明確指定的 `0` 不變——`0` 本身就是有效的 Zod 值（`z.union([z.literal(0), z.number().int().min(100).max(50000)])`），而不只是「未設定」時的預設值。

#### 描述快取（`modalityBridge/bridgeCache.ts`）

用於描述輸出的記憶體內 LRU + TTL 快取，由整個處理程序共用。
鍵 = `sha256(imageRef + composedPrompt + configuredBridgeModel)`，並採用長度前綴框架（不會發生欄位邊界碰撞）。模型元件使用的是**已設定的**橋接模型，而不是實際回應的模型——`callVisionModel` 可能在內部進行後援切換，若按每次嘗試建立鍵值，將使快取碎片化。失敗的描述絕不會被快取。設定如下：

| 鍵                              | 預設值 | 範圍    |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### 遠端影像正規化（自迴圈描述／base64 擷取）

當橋接器自行擷取**遠端**影像時——包括 Anthropic 描述自我呼叫及 claude 線路格式的 base64 轉換（`ensureBase64ImagesForClaudeWire`），兩者皆透過 `visionBridgeHelpers.ts` 中的 `fetchRemoteImageAsDataUri()`——產生的資料 URI 在嵌入視覺模型請求前，會先經過 `normalizeDataUri()`（`open-sse/utils/imageNormalize.ts`）處理。過大的影像會依 **2048px 長邊**縮小（與 OpenAI／Anthropic 已在伺服器端套用的縮放上限一致），可在不改變視覺模型所見內容的情況下降低上傳位元組數與延遲。調整大小使用透過動態匯入載入的 `sharp`：在其原生二進位檔無法載入的平台上，`normalizeDataUri()` **絕不會擲回例外**——它會改為直接傳遞原始位元組，因此描述／base64 轉換路徑始終能繼續運作。非影像位元組（即擷取結果無法解碼為影像）也會原封不動地傳遞。此正規化僅限於橋接器為自身自我呼叫所擷取的影像——絕不會套用於呼叫端未經處理的直通承載資料，符合僅限明確選擇加入的修改原則（強制規則 #20）。

#### 設定結構描述 + 遷移

新的 `modalityBridge*` 鍵會在 `updateSettingsSchema`（`src/shared/validation/settingsSchemas.ts`）中經過 Zod 驗證：`modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`、`modalityBridgeCache*` 三個鍵，以及 Audio Bridge 使用的 `modalityBridgeAudio*` 群組。遷移檔 `141_modality_bridge_settings.sql` 會將現有的舊版 `visionBridge*` 值複製到對應的新鍵（具冪等性，絕不覆寫操作人員設定的 `modalityBridge*` 值）；在一個發行週期內，舊版鍵仍可作為讀取後援而被接受。

#### 透明度標頭 + 統計資料

經描述轉換的回應會帶有
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
（由 `modalityBridge/bridgeStats.ts` 中的 `buildModalityBridgeHeader()` 建立，並由 `src/sse/handlers/chatHelpers.ts` 中的 `withModalityBridgeHeader()` 加入）。重新路由的請求**不會**帶有標頭——其承載資料未經修改，而模型切換情況已可從回應本文的 `model` 欄位中看出。

`GET /api/modality-bridge/stats`（管理驗證，與
`GET /api/settings` 相同層級）會傳回記憶體中各模態的計數器
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }`，涵蓋 `vision`、`audio` 與
`video`。`averageLatencyMs` 使用 `latencySamples` 作為分母，而非所有嘗試次數；
未計時的操作不會虛構一筆零毫秒樣本。`bridged` 仍是成功轉換的向後相容別名；
失敗的嘗試不會增加其數值。
依設計，計數器會在程序重新啟動時重設
（屬於遙測，而非帳務統計）。

#### 儀表板設定

專用的儀表板頁面位於
`/dashboard/settings/modality-bridge`。其可透過 URL 存取的 `Vision`、`Audio`
與 `Video` 分頁會在切換 `tab` 值時保留查詢參數。
Vision 分頁提供啟用設定、模式、模型選擇（包括自動預設值）、
任務感知提示、進階逾時／圖片／描述長度／快取限制、執行階段
計數器，以及受防護的範例請求。Audio 分頁也已可實際使用：它提供
啟用設定、具有 Auto 選項且僅限 STT 的模型選擇器、逾時／最大音訊片段限制、
音訊計數器，以及 `input_audio` 範例測試。Video 分頁具備完整功能：它會回報
FFmpeg/ffprobe 執行階段狀態——四種明確 UI 狀態之一（探測進行中或無法完成時為
`unknown`；儀表板主機不是迴路位址，因而在用戶端略過探測時為 `restricted`；
完成探測並確認缺少時為 `unavailable`；或在可用時顯示
FFmpeg/ffprobe 版本並標示為 `available`）——會持久保存
啟用／模型／影格／影片／逾時限制、將模型選擇器篩選為支援視覺的模型，
並提供影片計數器。

AI 設定下原有的 Vision Bridge 卡片現在是前往新頁面的相容性連結；
它不再持有表單的第二份副本。Media Providers 也會將 Image-to-Text 與
Speech-to-Text 工作流程連結至對應的 Modality Bridge 分頁，同時保留現有的
Speech-to-Text 測試區。

**自我迴路准入略過：** 當描述呼叫透過 OmniRoute 自身的
`/v1` 自我迴路（非標準提供者模型）路由時，子請求會傳送
`x-omniroute-admission-bypass: internal`，並使用解析後的自我迴路憑證進行驗證——
本機模式下使用本機 `sk_omniroute` 哨兵值，或使用操作人員設定的
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` 環境變數金鑰（#1350），讓
`REQUIRE_API_KEY=true` 的部署仍可執行描述呼叫。只有使用這些完全相符的憑證時，
才會允許略過准入，因此外部用戶端無法使用該標頭略過准入檢查。

舊版預設值位於 `src/shared/constants/visionBridgeDefaults.ts`；
新的模式／任務感知／快取預設值與設定解析器位於
`src/shared/constants/modalityBridgeDefaults.ts`。防護機制公開了
`deps` 建構函式選項，讓測試可以注入假的 `getSettings` 與
`callVisionModel` 實作。

### Audio Bridge（`audioBridge.ts`）— Modality Bridge PR-3

在包含音訊的聊天請求抵達已知不接受音訊輸入的目標前攔截它。它絕不會重新路由
聊天請求：音訊部分會透過現有的 OpenAI 相容 multipart 端點轉錄，而所選的
聊天模型則繼續使用文字逐字稿。

流程：

1. 透過 `getResolvedModelCapabilities()` 解析 `supportsAudio`。明確的
   提供者登錄中繼資料具有最高優先權，其次是靜態模型中繼資料，再其次是同步的
   `modalities_input`。已宣告但不含 `audio` 的輸入清單為 `false`；
   沒有任何能力證據時則維持 `null`。`false` 與 `null` 都會啟用保守橋接，
   而 `true` 則會略過橋接。
2. 解析 `modalityBridgeAudio*` 設定，並透過共用的 `detectMediaParts()`
   偵測器，從每則訊息中擷取可接合的頂層音訊部分。支援的線上格式包括 OpenAI
   `input_audio`、`audio_url`，以及 `source.media_type: "audio/*"`。
   巢狀音訊會被偵測以供路由使用，但不會由接合路徑移除。處理工作受
   `modalityBridgeAudioMaxClips` 限制；之後的部分會保持不變。
3. 採用已設定的 `provider/model`，或讓 `selectAudioBridgeModel()` 依穩定的
   目錄順序遍歷 `AUDIO_TRANSCRIPTION_PROVIDERS`，並選取第一個具有可用且有效
   提供者憑證的模型。
4. `callAudioTranscription()` 會將 base64/data-URI 音訊轉換為 multipart
   `file`，或透過僅限公開位址的輸出防護機制下載遠端 `audio_url`，並使用
   DNS 釘選及 25 MB 上限。接著，它會將檔案與所選模型 POST 至本機
   `/v1/audio/transcriptions` 自我迴路，並使用 `resolveSelfLoopBearer()`
   進行驗證。現有的轉錄路由會執行一般的憑證查找、冷卻／速率限制處理，
   以及提供者分派。
5. 成功的呼叫會將其部分替換為 `[Audio N]: <transcript>`。呼叫使用
   `Promise.allSettled` 執行：個別失敗會保留原始音訊部分（#4012 約定）。
   如果所有呼叫都失敗，且已證實目標的 `supportsAudio === false`，這些部分會變為
   `[Audio N]: (unavailable — no STT provider connected)`（#8430 約定）。
   對於未知目標（`null`），全部失敗的結果會保持不變。已證實僅支援文字的目標若
   沒有可用的 STT 憑證，則會收到相同的明確替代文字，而不會發出網路呼叫。

成功的逐字稿會使用程序範圍的 Modality Bridge LRU/TTL 快取。
索引鍵由音訊參照、固定的 `audio-transcription` 操作標籤，以及所選的 STT 模型組成；
失敗結果永不快取。音訊嘗試會更新共用的 `bridged`、`cacheHits`、`failures` 與
`lastUsedAt` 計數器。經轉換的回應會帶有
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`；
未變更的請求不會收到 Audio Bridge 區段。

執行階段設定由資料庫支援，並經過 Zod 驗證：

| 鍵                            | 預設值  | 範圍          |
| ----------------------------- | ------- | ------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —             |
| `modalityBridgeAudioModel`    | `""`    | 自動或 STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000   |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10          |

共用快取仍由 `modalityBridgeCacheEnabled`、
`modalityBridgeCacheTtlMinutes` 和 `modalityBridgeCacheMaxEntries` 控制。

### 視訊橋接器（`videoBridge.ts`、`videoBridgePipeline.ts`）

在呼叫已知不具原生視訊支援能力的目標之前，攔截 Chat Completions `messages` 和 Responses
API `input` 中的頂層視訊部分。支援的格式包括 `input_video`、`video_url`、`video_source`、HTTPS URL，
以及 `data:video/*;base64,...` 資料 URI。文字中的純檔名不會被視為視訊。

`VideoBridgeGuardrail.preCall`（`videoBridge.ts`）負責請求走訪、
能力／政策檢查、各請求的彙總，以及回應酬載。
每個視訊的處理工作——取得視訊、完整結果快取、描述影格序列
（其中會融合呼叫端宣告的任何音訊逐字稿），以及各次嘗試的
指標／中止／清理——都隱藏在 `videoBridgePipeline.ts` 的
`processVideoPart` 後方，並於 `preCall` 的迴圈內針對每個視訊部分呼叫一次。
該模組也定義了明確的連接埠邊界 `VideoMediaBrokerPort`
（取得位元組並擷取取樣影格）、`VideoAudioTranscriptionPort`
（將呼叫端宣告的音訊逐字稿與取樣影格的字幕融合），以及
`VideoDrilldownPort`（影格深入檢視的持久化邊界；尚未接入
`processVideoPart`——目前只有獨立的 `/api/modality-bridge/video/drilldown`
路由會寫入深入檢視項目）。

公開的 `/v1` 請求路徑永遠不會匯入或叫用子程序。遠端視訊的下載上限為 50 MiB；
內嵌 base64 視訊採用保守的每段視訊 36 MiB 解碼後上限，使模型／訊息／框架封套
得以維持在公開 JSON 請求的 50 MiB 接納限制內。配置記憶體前，
會先檢查內嵌長度與解碼後大小的估算值。初始遠端 URL 及每次重新導向均須使用 HTTPS，
並採用既有、具 DNS 釘選功能且僅允許公開位址的輸出防護機制。接著，這些位元組會跨越精確的內部
`POST /api/modality-bridge/video/extract` 代理邊界。該路由同時標記為
`LOCAL_ONLY` 和 `SPAWN_CAPABLE`，僅接受經每個處理程序驗證的受信任回送請求，
且永遠不接受 URL、檔案系統路徑、可執行檔或引數清單。API 主體大小處理管線及處理常式的增量式主體
讀取器，會各自獨立強制執行 50 MiB 的代理輸入上限。其有界佇列一次只執行一項擷取工作，
允許四項待處理工作，並將待處理輸入總量限制為 100 MiB。

在代理內部，`ffprobe` 會讀取私有本機檔案；固定的格式
允許清單會排除播放清單和資訊清單格式。對於允許的 MOV 系列
容器，外部 MOV 資料參照預設維持停用，且固定命令不會選擇啟用這些參照。
`ffprobe` 和 `ffmpeg` 均使用僅限 `file` 的通訊協定允許清單、單一執行緒、
固定引數陣列、不使用 shell，且可執行檔從 `PATH` 解析。附加圖片的封面串流不會
被視為可播放候選項目。所有可播放串流都必須符合限制，並會先採用明確的預設串流，
再使用具決定性的最低索引後備方案。視訊限制為 600 秒、每個維度 8,192 像素，
以及 33,554,432 個來源像素。FFmpeg 會取樣 1–16 個中點 JPEG 影格，
將長邊縮小至最多 1,024 像素，且不會放大較小的輸入，也永遠不會收到 URL。
預設取樣政策為 `uniform`。選用的 `scene_aware` 與實驗性
`segment_aware` 政策，會對已驗證的本機串流額外執行一次固定的 FFmpeg 處理流程，
選取有界的 `showinfo` 場景時間戳記，並在偵測器失敗、逾時、輸出格式錯誤或候選集合為空時，
以具決定性的方式回退至相同的均勻中點。區段感知模式會依已驗證場景區間的比例分配中點樣本；
區段感知證據和回退行為詳述如下。所有政策都會在選取後套用
16 個影格的硬性上限。當場景感知請求只有一個影格的額度時，
它會使用目前完整視訊或焦點視窗的均勻中點，並回報 `policyEffective: uniform`：
選取單一場景影格無法同時保留時間軸的兩端。呼叫端可選擇提供有限的
焦點視窗（`start`／`end` 秒）；邊界會限制在媒體持續時間內，
反向或非有限的視窗將被拒絕，而所有取樣政策都只會在正規化後的區間內執行。
產生的視窗會包含於取樣中繼資料及不受信任的描述前綴中，
使下游模型能區分聚焦的片段與完整時間軸。

語意字幕焦點是一項獨立且明確的設定。預設的 `full`
分析模式會保留既有的影格提示，且絕不會將請求文字轉送給字幕模型。
在 `focused` 模式中，橋接器只會從相同的 Chat 或 Responses
容器讀取最新一筆由使用者撰寫且非空白的 `text`／`input_text`，將其正規化為 NFC，
合併控制字元和空白字元，並限制為 500 個 Unicode 碼位。空白結果會回退至完全相同的
`full` 提示。可用的提示會在專用的不受信任使用者內容區塊中序列化為 JSON，
且只能用來優先處理可觀察到的細節；它無法覆寫另一項警告，亦即不得遵循媒體中可見或可聽見的指示。
文字焦點絕不會推斷 `start`／`end`，也不會變更時間取樣器。

#### FU-07 結構化區段證據

`segment_aware` 會對已驗證的本機視訊串流執行一次有界的預分析。固定的篩選器鏈會先將寬度縮放至最多 320 像素、偵測場景變更與畫面凍結區間，接著以每秒 1 幀取樣，以分析模糊程度、平均亮度，以及空間／時間資訊。此分析限制為 600 個結構取樣、單一 FFmpeg／篩選器執行緒、相同的僅限 `file` 通訊協定與容器允許清單、1 MiB 的程序輸出上限，且在代理程式的共用中止／期限內最多執行 30 秒。它絕不接受來自請求的命令、篩選器、路徑或 URL。

結構值是確定性的取樣證據，並非對視訊語意的理解。它們不會推斷主體、動作、字幕、語音或使用者意圖。場景與凍結邊界會形成片段；凍結涵蓋率、模糊程度、曝光、空間細節及時間變化只會影響現有 1–16 幀預算的配置方式。完全凍結的片段最多配置一幀，而非凍結片段則競逐剩餘預算。當邊界數量多於幀數時，仍會保留均勻的時間軸涵蓋範圍，因此前段快速剪接不會遮蔽較長的尾端片段。落在凍結邊界 1 秒分析解析度內的場景邊界會被合併。

若篩選器缺失、證據格式錯誤／為空、偵測器發生錯誤，或有界預分析逾時，系統會採取開放式失敗處理，精確回退至均勻中點策略。呼叫端中止或代理程式期限到期不會採取開放式失敗處理：它會終止執行中的子程序、阻止後續的影格擷取，並在 `finally` 中移除私有暫存目錄樹。

`scripts/perf/video-bridge-fu07-eval.ts` 會產生確定性的真實 FFmpeg 固定測試資料，用於評估去除重複項目後的字幕呼叫節省量、密集動態預算配置、模糊／曝光／SI-TI 證據、帶有長尾的快速剪接，以及漸變淡出造成的誤判。它會記錄預分析的實際經過時間，且在 `/usr/bin/time` 可用時記錄子程序 CPU 使用量與 RSS 峰值。其品質檢查僅使用結構性判定基準。真實字幕模型品質仍維持 `HOLD`，因為此測試工具沒有經授權的端點或凍結的評審器。除非 `--caption-cost-per-call-usd` 提供明確且為正值的每次呼叫成本估算，否則節省的金額也仍維持 `HOLD`；此指令碼絕不會捏造任一結果。

每個影格上限為 4 MiB，所有原始影格合計上限為 23 MiB，而序列化代理程式回應的上限為 32 MiB。私有暫存目錄會在 `finally` 中移除。OmniRoute 不隨附 FFmpeg，也不接受自訂可執行檔路徑。在產生字幕之前，橋接器會執行保守的視覺去重處理：每張 JPEG 都會縮減為 16×16 灰階緩衝區，且僅與上一個保留的影格進行比較。當請求的字幕預算超過一幀時，擷取程序會提供最多為該預算兩倍、且絕不超過 16 幀的有界候選集。只有在去重之後才會套用請求的上限；當預算至少為兩幀時，最終精簡程序會保留第一個與最後一個選定的候選影格。版本化的 `grayscale-16x16-mean-cells-v2` 策略會採用平均亮度差，以及正規化差值至少為 0.05 的縮圖儲存格比例，取兩者中的較大值。重複項目閾值為常數 0.04；此值是基於可預測性而選定，而非公開為執行階段設定。此輔助的高對比訊號可保留僅使用平均值進行比較時可能被掩蓋的細微動態與可見文字變化。比較器或解碼器錯誤會採取開放式失敗處理並保留涵蓋範圍。輸出中繼資料會分別標示已擷取的候選影格、成功使用的影格，以及已捨棄的視覺重複項目。

明確標記的視訊部分可以請求帶有時間戳記的縮圖索引表。橋接器最多會建立一個 4 欄、16 幀的 JPEG 網格。每個 512 像素的儲存格都會將來源時間戳記燒錄至底部的高對比色帶中，而相同的時間戳記也會保留在文字中繼資料內，以供下游建立關聯及稽核。完整 JPEG 的大小上限仍為 32 MiB。若 `sharp` 無法解碼或合成網格，橋接器會回退至個別 JPEG 影格；用戶端中止仍會傳遞至縮圖表操作。

升級證據刻意與合成作業的微型基準測試分開。`scripts/perf/video-bridge-contact-sheet-eval.ts` 定義了一套具結構描述版本的 A/B 測試工具，適用於真實且與 OpenAI 相容的視覺模型。它會測量提供者回報的權杖數、端對端實際延遲時間（包括縮圖表合成）、模型呼叫次數，以及資訊清單定義的事實保留率。原始模型回應不會寫入報告；只會保留 SHA-256 摘要與相符的事實 ID。除非傳入 `--execute-real`，且已設定 `--model`、`OMNIROUTE_BASE_URL` 與 `OMNIROUTE_API_KEY`，否則此測試工具不會發出任何網路或付費模型呼叫。如果未明確執行該真實測試，其機器可讀取的判定結果仍會維持 `HOLD`；僅有合成承載資料／呼叫次數測量並不足以作為升級證據。

當呼叫端已持有對齊文字時，可以將選用的 `transcript.cues` 陣列附加至受支援的視訊部分。每個提示都必須包含 `text`、位於探測所得持續時間內的有限 `start`／`end` 區間，以及允許清單中的 `source`（`client`、`embedded` 或 `audio-bridge`）；`confidence` 預設為 `1`，且必須維持在 `0` 與 `1` 之間。完全相同的提示會被合併。OmniRoute 絕不會根據此中繼資料啟動轉錄：通過驗證的提示會連同來源、信賴度與區間複製至描述結果，並與影格字幕一同呈現為不受信任的觀察結果。無效、超出範圍或沒有來源依據的文字會遭到拒絕，而非混入字幕串流。兩個請求本文的文字記錄通道都會將所提供的來源正規化為 `client`，包括自行宣稱的 `embedded` 或 `audio-bridge` 標籤。只有伺服器擁有的配接器，才能透過僅限程式碼使用的 `trustedSource` 引數指派這些受信任的標籤；請求 JSON 欄位無法觸及該引數。無論來源為何，文字記錄內容仍是不受信任、衍生自媒體的內容，且絕不可用於決定授權。

進階呼叫端可以為同一部影片提供 `audioTranscript` 軌道；
它會被視為用戶端提供的文字，而不是伺服器轉錄的證明。
融合接合層會在同一個截止期限與中止訊號下執行視覺和音訊觀察，
將它們依共同時間軸排序、合併完全相同的重複項目，並在只有一側成功時
回報部分結果。無效的 `audioTranscript` 會降級為該部分結果——保留視覺
描述，並由音訊分支記錄經清理的失敗代碼——而不是使整部影片處理失敗。
各分支的可用性、部分結果旗標，以及經清理的失敗代碼，都會保留在描述結果、
護欄中繼資料（`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`）、結果快取中繼資料，以及橋接器的融合計數器中。
預設的 Video Bridge 路徑不會叫用語音轉文字，也不會下載第二份媒體副本；
若沒有該明確提供的軌道，則仍然只處理影片。

**逐字稿保留（#12150 P1）。** 每當 Video Bridge（其本身為選擇啟用）
呈現逐字稿提示時，便會自動套用此機制——沒有獨立的保留旗標。當請求呈現
任何逐字稿提示（由呼叫端宣告的 `transcript` 或融合後的
`audioTranscript`）時，護欄會將其標記為 `videoBridgeObserved`，並產生
影片描述的遮蔽副本——該副本的呈現形式完全相同，但每個提示的自由文字內文
都會替換為 `[redacted-video-transcript]`；這是透過在組合字串前替換結構化
提示欄位來建立的（絕不解析攤平後的文字，因此任何提示內容——無論是惡意或
一般內容，包括內文中含有 `]` 的內容，例如 `[inaudible]`/`[music]`——
都無法殘留）。持久化的呼叫記錄請求本文會根據內容相等性進行比對，將每個
衍生自影片的文字部分替換為該遮蔽副本；`fullText` 錨點會從完成的呼叫前
護欄承載資料中重新讀取，因此，即使後續鏈式護欄（PII 與憑證遮罩器，
優先順序為 10/95）就地改寫描述文字，以及系統提示／移交／記憶體注入重塑
訊息陣列之後，比對仍會成功。傳送給上游模型的本文不會變更。觀察到的請求
也不會填入任何持久性 Memory（會略過衍生自請求與回應的擷取），因此模型
本身的回覆無法將逐字稿文字回顯至 Memory。

**原始影片欄位（#12430）。** 當橋接器已啟用，且原生影片支援未知或不存在時，
已定義的 `transcript`/`audioTranscript` 欄位也會啟用
`videoBridgeObserved`，即使描述失敗或受到 `maxVideos` 限制亦然。`null`
和空字串都算在內；缺少的欄位與非影片中繼資料則不算。保留的副本會遮蔽這些
欄位或省略該請求，並略過快取／Memory。

在這些後援路徑上，有效的呼叫端提示會成為受支援的 `text`/`input_text`
部分，而不是非標準的提供者欄位。請求提供的兩個軌道仍是不受信任的 `client`
觀察資料，並附有明確警告，指出影片尚未經過描述，且時間戳記未與媒體進行
驗證。現有的 256 個提示／總計 64 KiB 與每個提示的預算，會合併套用至兩個
軌道；時間戳記必須符合代理程式的 600 秒上限以及任何已提供的焦點時間範圍。
無效軌道會被捨棄，不會當作任意文字轉送；除非合併後超出預算，否則有效的
同層軌道仍可使用。Null／空白欄位不會新增任何文字。此後援機制不會增加任何
媒體擷取或轉錄。逐字稿擴充欄位會從後援影片載體及其 `video_url`/`source`
物件中移除。OpenAI 線路允許清單會維持嚴格；原生支援狀態未知的影片載體仍
可使用，而已知僅支援文字的目標則會保留安全標記。結構化遮蔽副本會保護附加
的逐字稿文字，而呼叫端原始擁有的請求則保持不變。具備原生支援的目標和停用
的橋接器會維持其現有的略過行為。

其他保留副本會使用相同的已觀察請求訊號。原始的護欄前用戶端請求快照、
記憶體內待處理請求，以及提早遭拒的請求記錄，都會以結構化方式替換影片部分
中的逐字稿欄位；由管線階段與內容移交合成的字串提示，則會在持久化請求本文
接收端進行遮蔽。持久化的 `video_content_removed` 標記會使
`previous_response_id` 延續操作以封閉方式失敗，而不是重建刻意捨棄的文字。
如果觀察到的請求在記錄前遺失其逐部分遮蔽副本，或數個影片遮蔽副本中即使
只有一個在後續請求變更後無法比對，則會完全省略保留的請求本文，而不是保留
僅經部分遮蔽的逐字稿。

對於觀察到的請求，模型回應可能會引用逐字稿的任何部分，而沒有結構化提示
邊界。因此，其持久化呼叫記錄中的 `responseBody` 會替換為省略標記；詳細的
管線成品（可能包含上游／用戶端本文和串流區塊）不會保留。該請求會略過語意、
等冪性及推理重播快取的讀取與寫入。提供者請求與用戶端可見的回應則保持不變。
省略詳細成品時，會從暫存緩衝區排出早期的 keepalive 位元組。Kiro 的格式錯誤
EventStream 警告只會回報承載資料的位元組數，絕不回報其內容或 JSON 剖析器的
原始錯誤。
這不表示已稽核每個不相關的提供者／外掛程式診斷；更廣泛的保留接收端清查工作
會在 #11658 中追蹤。

內部 `/api/modality-bridge/video/drilldown` 生命週期是一個獨立且透過迴路回送／權杖驗證的快取基底。每項操作也都需要一個標準不透明主體 ID。啟用正式環境呼叫端之前，它必須從已驗證的租戶衍生該 ID，且絕不可轉送由用戶端選定的值。快取鍵會將該主體繫結至標準工作階段與視訊參照 ID，僅儲存其經 SHA-256 衍生的鍵，並將讀取與刪除的範圍限定於同一主體。每個項目的快取最多儲存 16 個衍生的 JPEG 畫格，於十分鐘後使其到期，並支援有界的 `start`/`end` 讀取或明確刪除工作階段。

每個主體最多可有 16 個項目及 64 MiB 的標準 JPEG 資料。這些限制獨立於全域的 64 個項目／256 MiB 上限：主體配額壓力只會先驅逐該主體最久未使用的項目，之後才會考慮全域 LRU 驅逐。在快取活動期間，已到期項目會從主體與全域計量中清除，而取消與驗證失敗不會提交部分替換結果。

快取會拒絕非標準 Base64、過多填補字元、非 JPEG 媒體、格式錯誤或遭截斷的 JPEG，以及在有界完整影像 `sharp` 解碼期間產生警告的 JPEG。它會將每個接受的影像重新編碼為標準 JPEG，從解碼後的位元組衍生寬度與高度，而不信任呼叫端提供的欄位，並捨棄任何尾隨的多格式混合位元組，而非加以保留。只有有界的標準壓縮緩衝區會計入兩項配額。JSON 傳輸限制包含 32 MiB 解碼輸入上限所需的 Base64 額外負擔。每個儲存的衍生結果都會記錄其經驗證的 JPEG 格式／解析度、取樣原則、衍生版本、建立時間、伺服器計算的內容雜湊，以及雜湊後的父參照與受信任呼叫端提供的父內容雜湊。在原子式快取提交之前，會於非同步解碼／雜湊階段之間檢查取消狀態。

此批次尚未將正式環境產生端連接至該路由，也不提供多解析度變體選擇。因此，透明的 Video Bridge 請求路徑不會增加任何工作，而租戶繫結的主體衍生與完整的 FU-08 多解析度生命週期仍明確列為後續工作，而非記載為已完成的行為。

畫格會使用已設定的 Video 模型依序產生字幕。空白的 Video 覆寫值會繼承 Vision 設定；如果兩者皆為空白，Vision 自動路由器會選取實際使用且支援視覺能力的模型。成功產生的字幕會以穩定的 `[Video description:` 前綴取代原始部分；該前綴也會將文字標示為源自不受信任媒體的觀察結果，並指示下游模型不要遵循媒體中發現的指令。畫格字幕快取鍵包含 JPEG 位元組、提示、時間戳記及實際使用的模型；只有成功產生的字幕才會被快取。快取項目會保留實際成功的產生端模型，包括後援模型；當不同畫格由不同模型產生時，橋接器會回報 `mixed`。快取命中時會重用該產生端身分，而不會將其重新標示為所要求的路由計畫。整段視訊結果快取會以所有會改變輸出的輸入作為鍵值依據，包括提示、實際使用的模型、取樣原則、畫格數、語意分析模式、正規化焦點提示的 SHA-256 指紋、焦點視窗、`transcript`、`audioTranscript` 及聯絡表旗標；因此，變更其中任何一個維度都會造成快取未命中，絕不會重用過時結果。視覺去重原則的版本、閾值及有界候選畫格數也會明確納入結果快取鍵與中繼資料；因此，原則變更無法重用過時的整段視訊描述。結果快取 v4 中繼資料會保留模式與指紋，但絕不保留原始使用者工作。防護欄中繼資料會同時回報所要求及實際使用的分析模式；若要求 `focused` 模式但沒有可用的使用者文字，則會回報實際使用的模式為 `full`。

防護欄會擷取每個受支援的視訊部分，但描述的數量不會超過 `modalityBridgeVideoMaxVideos`。對於已確認 `supportsVideo === false` 的目標，處理失敗及超出限制的視訊會轉為明確且安全的文字標記，因此不會留下任何原始視訊。當能力未知時，這些部分會保留其視訊載體；任何後援轉錄稿都會遵循上述有界文字轉換。`supportsVideo === true` 的目標會略過橋接器。用戶端請求的中止訊號會傳播至下載、代理程式佇列、子處理程序及字幕呼叫；中止會在視訊之間停止處理，且絕不會失效開放而放行原始媒體。

執行階段設定由資料庫支援，並透過 Zod 驗證：

| 鍵                                  | 預設值      | 範圍 / 行為                                                                          |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | 選用的執行階段，須明確啟用                                                           |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` 保留通用字幕；`focused` 使用有界、不受信任的最新使用者內容                    |
| `modalityBridgeVideoModel`          | `""`        | 繼承 Vision Bridge 模型                                                              |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                 |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`、`scene_aware`，或按比例的 `segment_aware`；偵測器失敗時會回退至 `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                  |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                       |

舊版持久儲存且超過 120 秒的 Video 逾時值會被限制在
代理程式的截止期限內；新設定若寫入超過此限制的值，將遭到拒絕。
`GET /api/modality-bridge/video/runtime` 在進行驗證或執行階段探測之前，
要求具備受信任且加蓋標記的本機回送位置，之後還需要管理權限驗證。
它僅會傳回 `available`、經過清理的 FFmpeg/ffprobe 版本，以及執行階段
無法使用時的固定原因。內部擷取端點並非公開上傳 API：佇列飽和時會傳回
`503` 及 `Retry-After`，呼叫端中斷連線時會傳回 `499`，達到固定的代理程式
截止期限時則傳回 `504`。轉換後的回應會將
`video->text;model=<visionModel>;parts=<videos>` 新增至中央
`x-omniroute-modality-bridge` 標頭，而不會移除 Vision 或 Audio 區段。

### PII 遮罩器（`piiMasker.ts`）

在**兩個**階段皆會執行。

- **`preCall`** 會複製承載資料，遍歷 `system`、`messages`、`input` 和
  `prompt`（包括純字串項目），並對字串 `content`/`text` 欄位套用
  `processPII()`（來自 `@/shared/utils/inputSanitizer`）。當
  `PII_REDACTION_ENABLED=true` 時，偵測到的 PII 會在傳出承載資料中被遮蔽。
  此行為與 `INPUT_SANITIZER_MODE` 無關（後者僅控制提示注入政策）。
  關閉遮蔽時，呼叫只會記錄偵測次數，不會重寫內容。
- **`postCall`** 會深層複製回應，執行 `sanitizePIIResponse()` 及
  Responses API 格式遮罩器（`maskResponsesOutput` — 涵蓋
  `output_text` 和 `output[].content[].text`）。如果發生任何遮蔽，
  修改後的回應將取代原始回應。

此防護欄絕不會封鎖；它只會加上註記（`meta.detections`、
`meta.redacted`）或進行重寫。

### 提示注入（`promptInjection.ts`）

偵測使用者所提供內容中的對抗性結構，並強制執行已設定的政策。
其行為由環境變數和建構函式選項驅動：

| 設定     | 環境變數                                                                                            | 預設值 | 效果                                                                                                                                          |
| -------- | --------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 啟用     | `INPUT_SANITIZER_ENABLED`                                                                           | `true` | 當設為 `false` 時，防護欄會直接略過。                                                                                                         |
| 模式     | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                     | `warn` | 注入政策：`block`、`warn` 或 `log`。（為了向後相容也接受 `redact`，但它**不會**移除注入文字；請求 PII 重寫由 `PII_REDACTION_ENABLED` 控制。） |
| 封鎖閾值 | `blockThreshold` 選項 / `INPUT_SANITIZER_BLOCK_THRESHOLD`（別名 `INJECTION_GUARD_BLOCK_THRESHOLD`） | `high` | 觸發封鎖所需的最低嚴重性。預設情況下，Medium 僅供觀察。                                                                                       |

**模式優先順序**（`getMode`）：呼叫端 `options.mode` →
`INJECTION_GUARD_MODE` **資料庫功能旗標覆寫**（Dashboard → Settings →
Feature Flags）→ `INJECTION_GUARD_MODE` 環境變數 → `INPUT_SANITIZER_MODE`
環境變數 → `warn`。因此，Dashboard 覆寫的優先順序高於環境變數，
使 Feature Flags UI 能即時控制執行中的防護機制（無須重新啟動）。
資料庫讀取採用故障安全機制：若發生錯誤，防護機制會回退至以環境變數為基礎的行為；
若未設定覆寫，則其行為與僅使用環境變數進行解析完全相同。

偵測來源：

1. 來自 `@/shared/utils/inputSanitizer` 的 `sanitizeRequest()`（管線其他位置
   也會使用的共用偵測器集合）。
2. 內建的 `DEFAULT_GUARD_PATTERNS`（目前為 `system_override_inline` 和
   `markdown_system_block`，兩者的嚴重性皆為 `high`）。
3. 透過建構函式選項傳入的可選 `customPatterns`（字串、規則運算式，
   或 `{ name, pattern, severity }` 記錄）。

當 `mode === "block"` **且**至少有一項偵測結果達到嚴重性
閾值時，`preCall` 會回傳 `{ block: true, message: "Request rejected:
suspicious content detected" }`。在 `warn`/`log` 模式下，防護機制會記錄日誌，但
允許呼叫繼續執行。共用輔助函式 `evaluatePromptInjection()` 也會匯出，
供需要在不經過登錄檔的情況下評估提示詞的呼叫端使用。

**掃描上限（v3.8.20）：**偵測器只會檢查合併後提示詞文字的**前 16 KB** —
`MAX_INJECTION_SCAN_BYTES = 16 * 1024`（16 384 位元組），定義於
`src/shared/utils/inputSanitizer.ts`。`detectInjection()` 與
`evaluatePromptInjection()` 都會在執行模式迴圈前呼叫
`slice(0, MAX_INJECTION_SCAN_BYTES)`。注入指令通常位於輸入內容的前段，因此這項
限制可控制數百 KB 酬載上的正規表示式 CPU/GC 用量，而不會削弱偵測能力（參見
#3932、#4041）。

### 憑證遮罩器（`credentialMasker.ts`）

會在**兩個**階段執行，並位於預設鏈的最後（優先順序 `95`）。它會從傳出酬載
（訊息內容、工具呼叫引數、工具結果）**以及**提供者回應中遮蔽已知的 API 金鑰 /
秘密權杖模式，因此貼入提示詞的憑證（或由工具結果回傳的憑證）不會洩漏給上游
提供者或傳回用戶端。

- **僅限明確啟用**，採用與 PII 遮蔽相同的慣例（鄰近硬性規則 #20）：
  除非 `settings.credentialRedactionEnabled === true` **或**
  `CREDENTIAL_REDACTION_ENABLED=true`，否則停用。關閉時，此防護機制不執行任何操作 —
  它絕不會封鎖，也絕不會改寫。
- `redactCredentials()` 會遍歷完整的酬載/回應樹狀結構（`walkValue()`，
  可防範原型污染，並透過 `WeakSet` 安全處理循環參照），將相符內容替換為
  `[REDACTED:<type>]` 預留位置，且只複製實際發生變更的分支。
- `CREDENTIAL_PATTERNS` 涵蓋 LLM 提供者金鑰（OpenAI、OpenAI-proj、
  Anthropic、Google、Hugging Face、Replicate）、VCS/SaaS 權杖（GitHub、Slack、
  Linear、Notion、npm、Postman、Discord）、付款金鑰（Stripe、Square）、雲端
  金鑰（AWS 存取金鑰、Twilio、SendGrid、Mailgun）、私密金鑰 / JWT、
  含憑證的連線字串（`mongodb://user:pass@...` 等），以及通用的
  `Authorization`/`x-api-key`/`api-key`/`apikey` 標頭值
  模式。標頭形式的鍵（`authorization`、`x-api-key`、`api-key`、
  `apikey`）會以結構化方式進行遮蔽（僅遮蔽值，並保留如
  `Bearer `/`Basic ` 的配置前綴），而不是透過通用文字正規表示式處理。
- 此防護機制絕不會封鎖；它只會改寫（`modifiedPayload` /
  `modifiedResponse`）並加上註解資訊（`meta.credentialsRedacted`、`meta.count`）。

迴歸防護：`tests/unit/credential-masker-guardrail.test.ts`。

## 基礎契約（`base.ts`）

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
  block?: boolean; // true 會使鏈結短路
  message?: string; // 阻擋時顯示
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // 由 preCall 傳回以重寫請求
  modifiedResponse?: TValue; // 由 postCall 傳回以重寫回應
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

防護欄可透過傳回 `void`、`{}` 或 `{ block: false }` 來表示「無變更」。傳回 `modifiedPayload`/`modifiedResponse` 會取代沿著鏈結傳遞給下游防護欄的值。
`signal?: AbortSignal` 會將呼叫端的生命週期帶入防護欄。請求中止是刻意設計的開放式失敗例外：媒體橋接器會停止工作並執行清理，而不會將原始媒體還原至已知不支援該媒體的目標。

## 登錄檔（`registry.ts`）

單例 `guardrailRegistry` 提供：

- `register(guardrail)` — 新增防護欄（或依正規化名稱取代現有防護欄），並依 `priority` 升冪重新排序。
- `clear()` / `list()` — 管理輔助方法。
- `runPreCallHooks(payload, context)` — 逐一執行啟用中的防護欄，透過 `modifiedPayload` 傳遞酬載，並在第一個 `block: true` 時停止。
- `runPostCallHooks(response, context)` — 在回應端執行相同流程。
- `resetGuardrailsForTests({ registerDefaults })` — 清除狀態，並可選擇重新註冊預設防護欄，以確保測試彼此完全隔離。

兩個執行器都會傳回 `{ blocked, payload|response, results, guardrail?, message? }`，其中 `results` 是 `GuardrailExecutionResult` 記錄陣列，包含每個防護欄的 `blocked`、`skipped`、`modified`、`error` 與 `meta` 欄位，便於追蹤。

### 針對個別請求停用防護欄

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` 會彙整目前請求中應略過的防護欄名稱，並移除重複項目。來源如下（全部皆為選用，且會全部合併）：

- `apiKeyInfo.disabledGuardrails`
- 請求主體的 `disabledGuardrails`（頂層）
- 請求主體的 `metadata.disabledGuardrails`
- 標頭 `x-omniroute-disabled-guardrails`（或舊版
  `x-disabled-guardrails`）

值可以是字串陣列或以逗號分隔的字串；名稱會正規化為小寫 kebab-case（`pii_masker` → `pii-masker`）。結果會透過 `context.disabledGuardrails` 傳遞至登錄檔，登錄檔會略過相符的防護欄（在 `results` 中標記為 `skipped: true`）。

## 執行順序

對於每個流經 `src/sse/handlers/chat.ts` 和
`open-sse/handlers/chatCore.ts` 的請求：

1. `resolveDisabledGuardrails(...)` 根據 API 金鑰、請求本文和標頭建立略過清單。
2. `guardrailRegistry.runPreCallHooks(body, ctx)` 依優先順序由低至高執行護欄：
   - 停用的護欄會被記錄為 `skipped`。
   - 每個護欄的 `preCall` 都可以透過 `modifiedPayload` 改寫承載資料。
   - 第一個 `block: true` 會使鏈結短路，處理常式會傳回護欄拒絕回應。
3. （可能已改寫的）承載資料會進入組合路由及上游分派。
4. 組合回應後，`guardrailRegistry.runPostCallHooks(...)`
   會對回應執行相同的鏈結。此處的 `block: true` 會捨棄上游回應。

擲回例外的護欄會以 `error: <message>` 記錄，並透過
`logger.warn` 寫入日誌，但鏈結仍會繼續執行——此設計採用失敗開放原則。

## 組態

內建護欄所讀取的環境變數：

| 變數                                  | 使用者               | 效果                                                                   |
| ------------------------------------- | -------------------- | ---------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`   | 設為 `false` 可完全停用偵測。                                          |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`   | 注入政策：`warn`、`block` 或 `log`。舊版值 `redact` 不會改寫注入文字。 |
| `INJECTION_GUARD_MODE`                | `prompt-injection`   | 注入護欄的模式；同時也是會**覆寫**環境變數的 DB 功能旗標（DB > ENV）。 |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`   | `MODE=block` 拒絕請求的最低嚴重性：`high`（預設）、`medium` 或 `low`。 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`   | `INPUT_SANITIZER_BLOCK_THRESHOLD` 的舊版別名。                         |
| `PII_REDACTION_ENABLED`               | `pii-masker`         | 設為 `true` 時，將遮蔽請求中的 PII（與注入模式無關）。                 |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker`（下游） | 控制回應端遮蔽器的行為。                                               |

Modality Bridge 護欄會從由 DB 支援的設定儲存區（`getSettings()`）讀取執行階段組態，而非環境變數。Vision 的主要鍵為
`modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、
`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、
`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、
`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`、
`modalityBridgeCacheEnabled`、`modalityBridgeCacheTtlMinutes` 和
`modalityBridgeCacheMaxEntries`。舊版
`visionBridge*` 鍵僅作為文件所述、為期一個週期的讀取後備方案；儀表板寫入時會使用主要鍵。預設值和後備解析器位於 `src/shared/constants/modalityBridgeDefaults.ts`，舊版常數則保留於 `src/shared/constants/visionBridgeDefaults.ts`。

Audio 使用 `modalityBridgeAudioEnabled`、`modalityBridgeAudioModel`、
`modalityBridgeAudioTimeout` 和 `modalityBridgeAudioMaxClips`，並搭配共用的
`modalityBridgeCache*` 設定。Audio 沒有舊版鍵後備方案，因為這些鍵是隨 Modality Bridge 結構描述一同引入的。

Video 使用 `modalityBridgeVideoEnabled`、`modalityBridgeVideoAnalysisMode`、
`modalityBridgeVideoModel`、
`modalityBridgeVideoFrameCount`、`modalityBridgeVideoSamplingPolicy`、
`modalityBridgeVideoMaxVideos` 和
`modalityBridgeVideoTimeout`，並搭配共用的 `modalityBridgeCache*` 設定。
其預設為停用，因為 FFmpeg/ffprobe 是選用的作業相依項目，而且畫面字幕生成會增加延遲和模型成本。

## 自訂護欄

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

步驟：

1. 建立繼承 `BaseGuardrail` 的 `src/lib/guardrails/myGuardrail.ts`。
2. 實作 `preCall` 和／或 `postCall`。
3. 可在匯入時註冊（從 `registerDefaultGuardrails` 推送），或在執行階段
   呼叫 `guardrailRegistry.register(...)`——登錄檔會取代任何具有相同正規化名稱的
   既有護欄。
4. 在 `tests/unit/` 下新增測試（現有範例：
   `tests/unit/guardrails-registry.test.ts`、
   `tests/unit/prompt-injection-guard.test.ts`、
   `tests/unit/guardrails/visionBridge.test.ts`）。

## 測試

在各測試之間使用 `resetGuardrailsForTests()`，以從已知狀態開始。
傳入 `{ registerDefaults: false }` 可從空白登錄檔開始，並僅註冊受測護欄。
Vision Bridge 支援相依性注入（`deps.getSettings`、`deps.callVisionModel`）；
Audio Bridge 則公開用於設定、功能、STT 模型選擇、憑證檢查及轉錄的
對等介面。因此，測試可在不存取資料庫或網路的情況下執行這兩種流程。

## 另請參閱

- `src/lib/guardrails/` — 實作
- `src/shared/utils/inputSanitizer.ts` — 支援提示注入偵測與 PII 遮蔽的共用偵測器
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge 預設值及
  強制橋接模型清單
- `src/shared/constants/modalityBridgeDefaults.ts` — 共用的 Vision/Audio 執行階段預設值
- `docs/architecture/RESILIENCE_GUIDE.md` — 正交層（斷路器、冷卻時間）
- `docs/reference/ENVIRONMENT.md` — 完整環境變數參考

## 注入護欄的路由涵蓋範圍與紅隊測試（第 8 階段 · 區塊 D）

注入護欄（`createInjectionGuard` / `withInjectionGuard`）涵蓋所有
接受使用者提示的路由。它遵循 `INJECTION_GUARD_MODE`（預設為 `warn` = 僅記錄；
`block` = 傳回 HTTP 400 `SECURITY_001`）。

| 類型         | 路由                                                                                                                                                 | 預設模式 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| 文字（既有） | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn     |
| 生成式       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn     |
| 資料         | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn     |

文字擷取（`extractMessageContents`）涵蓋 `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`。

**紅隊測試（每晚執行，`nightly-llm-security.yml`）：** promptfoo 會驗證每個路由在
`INJECTION_GUARD_MODE=block` 下皆會封鎖 OWASP-LLM 語料庫；garak 則執行探測
（沒有密鑰時跳過）。為維持一致性，`moderations` 也包含在內——使用封鎖模式的
運維人員可透過 `resolveDisabledGuardrails` 將其豁免。

每晚執行的工作流程（`.github/workflows/nightly-llm-security.yml`，cron + 手動
觸發）包含兩個作業：

- **`promptfoo-guard`（阻斷性）**——使用 `INJECTION_GUARD_MODE=block`
  執行 `promptfoo eval -c promptfooconfig.yaml`。每個對抗性案例（例如「忽略所有
  先前指示……」、DAN 風格越獄）都會斷言回應包含
  `error.code === "SECURITY_001"`，也就是護欄確實拒絕了該請求。
- **`garak`（建議性）**——針對本機 OmniRoute 執行個體
  （`http://localhost:20128/v1`）執行 garak `--probes promptinject,dan,leakreplay`。
  此作業以提供者密鑰（`PROMPTFOO_PROVIDER_KEY`）作為執行條件；若無密鑰則妥善跳過，
  並加上 `|| true` 後綴，因此它只會回報結果，而不會導致 CI 失敗。

護欄輔助函式（`createInjectionGuard` / `withInjectionGuard`）的涵蓋範圍
包括每個含提示內容的 `/v1` 路由；提示文字由
`src/shared/utils/inputSanitizer.ts` 中的 `extractMessageContents()` 從
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`
擷取。
