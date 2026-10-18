# Guardrails (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **ዋና የእውነት ምንጭ:** `src/lib/guardrails/`
> **መጨረሻ የተዘመነው:** 2026-08-29 — v3.8.51 (የVideo Bridge ትራንስክሪፕት መነሻ በጠሪው የሚገለጽ ነው፣
> እስካሁን በሰርቨሩ አልተረጋገጠም — በ#11661 መሠረት ግልጽ ተደርጓል)

Guardrails በOmniRoute እና በላይኛ ደረጃ አቅራቢዎች መካከል ባለው ወሰን ላይ
ደኅንነትን፣ ፖሊሲን እና የይዘት ለውጦችን ያስፈጽማሉ። እያንዳንዱ guardrail
የጥያቄ payload-ዎችን (`preCall`) እና የላይኛ ደረጃ ምላሾችን (`postCall`)
መመርመር (እንዲሁም እንደአማራጭ ውድቅ ማድረግ፣ መለወጥ ወይም ማብራሪያ መጨመር) ይችላል።

ስርዓቱ **fail-open** ነው፦ guardrail በሚፈጸምበት ጊዜ exception ካስነሳ፣ registryው
ጥያቄውን ከማሳካት ይልቅ ስህተቱን መዝግቦ ወደሚቀጥለው guardrail
ይቀጥላል። ማገድ ግልጽ ውሳኔ (`block: true`) እንጂ በአጋጣሚ የሚከሰት አይደለም።

## አብሮገነብ የደህንነት ገደቦች

Registryው import ሲደረግ ስድስት የደህንነት ገደቦችን በቅድሚያ ቅደም ተከተል በራስ-ሰር ይጭናል
(`registry.ts` → `registerDefaultGuardrails()`ን ይመልከቱ):

| ቅድሚያ | ስም                  | ደረጃ(ዎች)        | ፋይል                   |
| ---- | ------------------- | -------------- | --------------------- |
| `5`  | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`  | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`  | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10` | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20` | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95` | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

ዝቅተኛ የቅድሚያ ቁጥሮች **መጀመሪያ** ይሰራሉ።

### የምስል ድልድይ (`visionBridge.ts`) — የሞዳሊቲ ድልድይ PR-1

ወደ **ምስልን የማይደግፉ ሞዴሎች** የተላኩ ምስል የያዙ ጥያቄዎችን ጣልቃ በመግባት፣
ጥያቄውን በሙሉ ምስልን ወደሚደግፍ ሞዴል እንደገና ያዛውራል፣ ወይም upstream call ከመደረጉ
በፊት የምስል ክፍሎቹን ሊዋቀር በሚችል የምስል ሞዴል በሚመነጩ የጽሑፍ መግለጫዎች
ይተካል። ይህም ጽሑፍ-ብቻ የሚደግፉ አቅራቢዎች መልቲሞዳል payloadዎችን
ያለምንም ግልጽ ለውጥ እንዲያስተናግዱ ያስችላቸዋል።

ፍሰት:

1. የታለመው ሞዴል አስቀድሞ ምስልን የሚደግፍ ከሆነ ይዝለሉት (በግዳጅ-ድልድይ ዝርዝር
   `isVisionBridgeForcedModel` ውስጥ ካልታየ በስተቀር)።
2. የምስል ክፍሎችን በ`extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) ያውጡ፤ ይህም በ`open-sse/utils/mediaParts.ts` ውስጥ ወዳለው
   **የተዋሃደ የሚዲያ መለያ**
   `detectMediaParts()` ያስተላልፋል — ይህም ከcombo የተኳኋኝነት filter ጋር የሚጋራው
   ብቸኛው የእውነት ምንጭ ነው። Extraction የሚፈቀደው
   `replaceImageParts` ተመልሶ ማስገባት ለሚችላቸው የtop-level ክፍሎች ቅርጾች ብቻ ነው
   (የextract↔replace ውል): OpenAI
   `image_url`፣ Anthropic base64 `source.type:"base64"`፣ Anthropic URL
   `source.type:"url"` እና Responses API `input_image`። Nested ውጤቶች እና
   indicator-only ቅርጾች ለcombo-filter የሚያገለግሉ ሲሆን በፍጹም አይወጡም።
   ምንም ካልተገኘ ይዝለሉ።
3. Runtime configን በ`resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) ይፍቱ፦ አዲሶቹ `modalityBridge*`
   settings keys ቅድሚያ ያገኛሉ፤ የቆዩት `visionBridge*` keys እንደ **የአንድ-ዑደት
   fallback** (rollback window) ይቆያሉ። ድልድዩ ከተሰናከለ፣ ማንኛውም የሚዲያ ዳሰሳ
   ከመደረጉ በፊት ይዝለሉ።
4. Mode selector (`modalityBridgeVisionMode`፣ ከታች ያለውን ሰንጠረዥ ይመልከቱ)
   reroute ወይም describe መደረጉን ይወስናል። Reroute `model` ብቻ የተቀየረበትን
   `modifiedPayload`፣ እንዲሁም meta `{ rerouted, fromModel, toModel, imagesKept }`ን ይመልሳል።
5. Describe path፦ ምስሎችን በ`maxImages` ይገድባል፣ ተግባሩን ያገናዘበ prompt ያቀናብራል፣
   describe cacheን ይመለከታል፣ የምስል ሞዴሉን **በትይዩ**
   (`Promise.allSettled`) ይጠራል፣ እና `[Image N]: <description>` የጽሑፍ ክፍሎችን
   በቦታቸው ያስገባል። ያልተሳካ describe `null` ይመልሳል፣ እና ዋናው የምስል ክፍል
   **ይጠበቃል** (#4012) — ነገር ግን ሁሉም describe በከሸፉበት combo describe path ላይ፣
   ምስልን እንደማይደግፍ የተረጋገጠ upstream በምትኩ
   `(የማይገኝ — ምስልን የሚደግፍ አቅራቢ አልተገናኘም)` stub ያገኛል (#8430)።
6. `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) ይመልሱ።

#### የሁነታ መራጭ (`modalityBridgeVisionMode`)

| ሁነታ        | ነባሪ | ባህሪ                                                                                                                                                                                                                         |
| ---------- | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔   | ያልተቀየረ የቆየ heuristic (#6640/#7204)፦ non-combo/`auto/` ሞዴሎች፣ ዋናው ሞዴል አስቀድሞ ጥቅም ላይ የሚውሉ credentials ከሌሉት በስተቀር፣ ወደ ምርጡ የምስል ሞዴል reroute ይደረጋሉ (ካሉት describe ይደረጋል)፤ combo targets ሁልጊዜ describe ይደረጋሉ።                        |
| `describe` |     | ሁልጊዜ describe ያድርጉ — reroute block ሙሉ በሙሉ ይዘለላል፤ ተጠቃሚው የመረጠው ሞዴል ሁልጊዜ መልስ ይሰጣል።                                                                                                                                             |
| `reroute`  |     | rerouteን ያስገድዱ፦ keep-credentialed-model guard ይታለፋል። የreroute-**target** credential guard ግን አሁንም ተፈጻሚ ነው — ጥቅም ላይ ሊውል የሚችል የምስል target ከሌለ፣ raw ምስሎች ጽሑፍ-ብቻ የሚደግፍ backend ጋር በፍጹም እንዳይደርሱ፣ ጥያቄው ወደ describe ይቀጥላል (#8430)። |

የግዳጅ ሁነታዎች auto heuristic ከመስራቱ **በፊት** short-circuit ያደርጋሉ፤
የ`auto` ባህሪ ከPR-1 በፊት ከነበረው የደህንነት ገደብ ጋር በbyte ደረጃ ተመሳሳይ ነው።

#### የAPI-key ወሰን (`visionBridgeKeyScope.ts`)

የጠሪው API key `allowedConnections`ን፣ የquota pools
(`allowedQuotas`)ን ወይም ሞዴሎችን (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) ሲገድብ፣ ድልድዩ
keyው ሊጠቀምባቸው በሚችላቸው connections ላይ keyው ሊጠቀምባቸው የሚችላቸውን
reroute እና describe ሞዴሎች ብቻ ይመርጣል። ከዚያ describe call ሁልጊዜ
`x-omniroute-self-loop-key-id` headerን በመጠቀም በOmniRoute self-loop በኩል ያልፋል፤
በዚህም የሚቀበለው chat request የዚያን key የconnection እና የmodel policy እንደገና
ያስፈጽማል። `enforceApiKeyPolicy()` ያንን header የሚያከብረው ከself-loop bearer ጋር
አብሮ ሲቀርብ ብቻ ነው፤ ስለዚህ መዳረሻን ማጥበብ ብቻ ይችላል፣ እና resolve
የማይደረግ id ውድቅ ይደረጋል።

ለkeyው የተፈቀደ የምስል ሞዴል ከሌለ፣ describe path ወደ ጎን ይሄዳል እና
ጥያቄው ሳይቀየር ያልፋል፤ ይህም ከተሰናከለ guardrail ጋር ተመሳሳይ የfail-open ባህሪ
ነው (meta `{ skipped: true, reason: "no_permitted_vision_model" }`)።
key የሌላቸው ጥያቄዎች እና እነዚህ ገደቦች የሌሏቸው keys ልክ እንደበፊቱ
ይሰራሉ።

#### ተግባሩን ያገናዘበ describe prompt (`modalityBridgeVisionTaskAware`)

ነባሪው **true** ነው። `composeVisionPrompt()` (`visionBridgeHelpers.ts`) የ**መጨረሻውን የተጠቃሚ መልዕክት** ጽሑፍ (እስከ 500 ቁምፊዎች ተቆርጦ) ወደ መሠረታዊው የመግለጫ ጥያቄ ይጨምራል፤ ይህም መግለጫውን ተጠቃሚው በትክክል ወደጠየቀው ነገር ይመራዋል
(`codex-vision-proxy` ንድፍ)፣ እንዲሁም የራዕይ ሞዴሉ የሚታየውን
ጽሑፍ እንዲገለብጥ ይጠይቃል። ምልክቱ ሲጠፋ — ወይም የተጠቃሚ ጽሑፍ ከሌለ — መሠረታዊው ጥያቄ ሳይለወጥ ጥቅም ላይ ይውላል።

የመግለጫ ራስ-ዙር የራሱ OpenAI-ተኳሃኝ ጥያቄ (`callVisionModelSingle()`
በ`visionBridgeHelpers.ts` ውስጥ) ሁልጊዜ `image_url.detail: "high"` ይጠይቃል —
ያለምንም ቅድመ ሁኔታ፣ ለእያንዳንዱ ጠሪ/አቅራቢ፣ በማንኛውም የደንበኛ ምልክት ያልተገደበ።
ዝቅተኛ-ዝርዝር ናሙና አወሳሰድ ይህ ጥያቄ በትክክል ለሚጠይቀው የጽሑፍ-ግልባጭ
ተግባር የOCR ትክክለኛነትን ያበላሻል፤ ስለዚህ ዋናው ገቢ ጥያቄ የተጠቀመው የዝርዝር
ደረጃ ምንም ይሁን ምን፣ የመግለጫ ጥሪው ራሱ ሁልጊዜ ከፍተኛ ዝርዝር ይጠይቃል። ይህ
የሚነካው የውስጣዊውን የመግለጫ ጥያቄ አካል ብቻ ነው፤ OmniRoute በዋናው ጥያቄ ላይ
የጠሪውን የራሱን `image_url.detail` እንዴት እንደሚያስተላልፍ አይለውጥም —
ያ ነባሪ በተናጠል የሚተገበር ሲሆን፣ በ`defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`) ውስጥ ለተገኙ OpenCode ደንበኞች
ብቻ ነው። የመግለጫ ራስ-ዙሩ የAnthropic ባለገመድ-ቅርጸት ቅርንጫፍ `detail` መስክ
የሌለው ሲሆን፣ በሁለቱም ነባሪዎች አይነካም።

#### የመግለጫ ውጤት ገደብ (`modalityBridgeVisionMaxChars`)

| ቁልፍ                            | ነባሪ | ክልል               |
| ------------------------------ | --- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0` | `0` ወይም 100–50000 |

`0` (ነባሪ) ማለት **ምንም ገደብ የለም** ማለት ነው — በ
`callVisionModel()` የተመለሰው መግለጫ ሳይለወጥ ይተላለፋል፣ ያለውንም
ባህሪ ይጠብቃል። በ100–50000 ክልል ውስጥ ያለ ማንኛውም ዋጋ መግለጫው እንደ
`[Image N]: <description>` ተመልሶ ከመጣመሩ በፊት በ`…` ቅጥያ ይቆርጠዋል
(`VisionBridgeGuardrail.preCall()` በ`src/lib/guardrails/visionBridge.ts` ውስጥ)።
የታችኛው ሞዴል ሙሉውን ግልባጭ ለሚፈልግባቸው ብዙ ዝርዝር ያላቸው የOCR ተግባራት
ይህን ከፍ ያድርጉት፤ ብዙ በሚያወሩ የራዕይ ሞዴሎች ላይ የቶከን አጠቃቀምን
ለመገደብ ዝቅ ያድርጉት። የዳሽቦርዱ መስክ በVision ትሩ Advanced ፓነል ላይ
ይገኛል (`modality-bridge-max-chars` በ`ModalityBridgeVisionTab.tsx` ውስጥ)፣
እና ግልጽ `0`ን ሳይነካ በ1 እና 99 መካከል ያለ ማንኛውንም ዋጋ ወደ 100 ዝቅተኛ
ወሰን ከፍ ያደርጋል — `0` በራሱ ትክክለኛ የZod ዋጋ ነው
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`)፣ የ"unset"
ነባሪ ብቻ አይደለም።

#### የመግለጫ መሸጎጫ (`modalityBridge/bridgeCache.ts`)

በሂደቱ ውስጥ በሙሉ የሚጋራ፣ ለመግለጫ ውጤቶች የሚያገለግል በማህደረ ትውስታ ውስጥ ያለ LRU + TTL መሸጎጫ።
ቁልፍ = `sha256(imageRef + composedPrompt + configuredBridgeModel)`፣
ርዝመት-ቅድመ ቅጥያ ፍሬሚንግ ያለው (የመስክ-ወሰን ግጭቶች የሉም)። የሞዴሉ አካል
**የተዋቀረው** የድልድይ ሞዴል እንጂ በትክክል የመለሰው ሞዴል አይደለም —
`callVisionModel` በውስጥ ወደ አማራጭ ሊመለስ ይችላል፣ እና በእያንዳንዱ ሙከራ መሠረት
ቁልፍ መፍጠር መሸጎጫውን ይበታትነዋል። ያልተሳኩ መግለጫዎች ፈጽሞ አይሸጎጡም። ቅንብሮች፦

| ቁልፍ                             | ነባሪ    | ክልል     |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### የርቀት ምስል መደበኛ ማድረግ (የራስ-ዙር መግለጫ/base64 ማምጣት)

ድልድዩ የ**ርቀት** ምስልን ራሱ ሲያመጣ — የAnthropic መግለጫ
ራስ-ጥሪ እና የclaude-wire-format base64 ልወጣ
(`ensureBase64ImagesForClaudeWire`)፣ ሁለቱም በ
`visionBridgeHelpers.ts` ውስጥ ባለው `fetchRemoteImageAsDataUri()` በኩል — የተገኘው ውሂብ
URI በራዕይ-ሞዴሉ ጥያቄ ውስጥ ከመካተቱ በፊት በ`normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) ውስጥ ያልፋል። መጠናቸው የበዛ ምስሎች ወደ
**2048px ረጅም ጠርዝ** ይቀነሳሉ (OpenAI/Anthropic ቀድሞውኑ በአገልጋይ-ወገን
ከሚተገብሩት የመጠን ለውጥ ገደብ ጋር ተመሳሳይ)፤ ይህም የራዕይ ሞዴሉ የሚያየውን
ሳይለውጥ የሰቀላ ባይቶችን/መዘግየትን ይቀንሳል። የመጠን ለውጡ `sharp`ን ይጠቀማል፣
እሱም በተለዋዋጭ ማስመጣት ይጫናል፦ የአንድ መድረክ አገርኛ binary መጫን ባይችል፣
`normalizeDataUri()` **ፈጽሞ ስህተት አይወረውርም** — ወደ ዋናዎቹ ባይቶች
ቀጥታ ማሳለፍ ይመለሳል፤ ስለዚህ የመግለጫ/base64-ልወጣ
መንገድ ሁልጊዜ መስራቱን ይቀጥላል። ምስል ያልሆኑ ባይቶች (ወደሚፈታ ምስል ያልተመለሰ
ማምጣት) እንዲሁ ሳይነኩ ይተላለፋሉ። ይህ መደበኛ ማድረግ ድልድዩ ለራሱ ራስ-ጥሪ
በሚያመጣቸው ምስሎች ብቻ የተገደበ ነው — በጠሪው ጥሬ ቀጥታ-ማሳለፊያ ጭነት ላይ
ፈጽሞ አይተገበርም፤ ይህም በመርጦ-መግባት-ብቻ የማሻሻያ መርህ (ጥብቅ ደንብ #20) ጋር ይጣጣማል።

#### የቅንብሮች መርሃግብር + ፍልሰት

አዲሶቹ `modalityBridge*` ቁልፎች በ`updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`) ውስጥ በZod ይረጋገጣሉ፦ `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`፣ የ`modalityBridgeCache*` ሦስትዮሽ፣ እና በAudio Bridge
የሚጠቀመው የ`modalityBridgeAudio*` ቡድን። ፍልሰት
`141_modality_bridge_settings.sql` ያሉትን የቀድሞ
`visionBridge*` ዋጋዎች ወደ ተዛማጅ አዲስ ቁልፎች ይገለብጣል (idempotent ነው፣
ኦፕሬተሩ ያዘጋጀውን `modalityBridge*` ዋጋ ፈጽሞ አይተካም)፤ የቀድሞ ቁልፎቹ ለአንድ
የልቀት ዑደት እንደ የንባብ አማራጭ ሆነው ተቀባይነታቸውን ይቀጥላሉ።

#### የግልጽነት ራስጌ + ስታቲስቲክስ

በመግለጫ የተለወጡ ምላሾች
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
ይይዛሉ (በ`modalityBridge/bridgeStats.ts` ውስጥ ባለው `buildModalityBridgeHeader()`
የተገነባ፣ በ`src/sse/handlers/chatHelpers.ts` ውስጥ ባለው `withModalityBridgeHeader()`
የታተመ)። እንደገና ወደ ሌላ መንገድ የተላኩ ጥያቄዎች **ምንም** ራስጌ አያገኙም — ጭነቱ
አልተነካም፣ እና የሞዴሉ መቀየር በምላሹ አካል `model` መስክ ውስጥ ቀድሞውኑ ይታያል።

`GET /api/modality-bridge/stats` (`GET /api/settings` ካለው ጋር ተመሳሳይ ደረጃ ያለው
የአስተዳደር ማረጋገጫ) በማህደረ ትውስታ ውስጥ ያሉትን ለእያንዳንዱ ሞዳሊቲ ቆጣሪዎች
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` ለ`vision`፣ `audio` እና
`video` ይመልሳል። `averageLatencyMs` እንደ መከፋፈያው ሁሉንም ሙከራዎች ሳይሆን
`latencySamples`ን ይጠቀማል፤ የጊዜ መለኪያ የሌለው ክዋኔ የዜሮ ሚሊሰከንድ
ናሙና በሐሰት አይፈጥርም። `bridged` ለተሳኩ ልወጣዎች ወደኋላ ተኳሃኝ
ተለዋጭ ስም ሆኖ ይቆያል፤ ያልተሳኩ ሙከራዎች አይጨምሩትም።
በዲዛይን መሠረት ሂደቱ እንደገና ሲጀምር ቆጣሪዎቹ ዳግም ይጀመራሉ
(ቴሌሜትሪ እንጂ የሂሳብ መዝገብ አይደለም)።

#### የዳሽቦርድ ውቅር

ለዚህ የተወሰነው የዳሽቦርድ ገጽ
`/dashboard/settings/modality-bridge` ነው። በURL ሊደረስባቸው የሚችሉት `Vision`፣ `Audio`
እና `Video` ትሮች የ`tab` እሴቱን ሲቀይሩ የጥያቄ መለኪያዎችን ያቆያሉ።
የVision ትሩ ማንቃትን፣ ሁነታን፣ የሞዴል ምርጫን (ራስ-ሰር ነባሪውን ጨምሮ)፣
ተግባርን የሚያገናዝብ መጠየቂያን፣ የላቁ የጊዜ ገደብ/ምስል/የመግለጫ-ርዝመት/መሸጎጫ
ገደቦችን፣ የአሂድ ጊዜ
ቆጣሪዎችን እና ጥበቃ ያለው የናሙና ጥያቄን ያቀርባል። የAudio ትሩም በቀጥታ ይሠራል፤
ማንቃትን፣ Auto ያለው የSTT-ብቻ ሞዴል መራጭን፣ የጊዜ ገደብ/ከፍተኛ-የቅንጥብ ገደቦችን፣
የድምፅ ቆጣሪዎችን እና የ`input_audio` ናሙና ሙከራን ያቀርባል። የVideo ትሩ ተግባራዊ ነው፤
የFFmpeg/ffprobe የአሂድ ጊዜ ሁኔታን — ከአራት ግልጽ የUI ሁኔታዎች አንዱን
(ፍተሻው በሂደት ላይ ሳለ ወይም ሊጠናቀቅ ካልቻለ `unknown`፣
በloopback ያልሆነ የዳሽቦርድ አስተናጋጅ ላይ ፍተሻው በደንበኛ በኩል ሲዘለል `restricted`፣
ከተፈተሸ በኋላ አለመኖሩ ሲረጋገጥ `unavailable`፣ ወይም ከFFmpeg/ffprobe ስሪቶች ጋር
`available`) — ሪፖርት ያደርጋል፤ የማንቃት/ሞዴል/ፍሬም/ቪዲዮ/የጊዜ ገደብ ቅንብሮችን
በቋሚነት ያስቀምጣል፣ የሞዴል መራጩን የእይታ ችሎታ ላላቸው
ሞዴሎች ያጣራል፣ እና የቪዲዮ ቆጣሪዎችን ያቀርባል።

በAI ቅንብሮች ስር የነበረው የVision Bridge ካርድ አሁን ወደ አዲሱ
ገጽ የሚወስድ የተኳሃኝነት አገናኝ ነው፤ ከእንግዲህ ሁለተኛ የቅጹን ቅጂ አይዝም።
Media Providersም ነባሩን የSpeech-to-Text መለማመጃ ሳያስወግድ፣
የImage-to-Text እና Speech-to-Text የሥራ ፍሰቶችን ከሚዛመዱት የModality
Bridge ትሮች ጋር ያገናኛል።

**የራስ-ዙር የመግቢያ ማለፊያ፦** የመግለጫ ጥሪው በOmniRoute የራሱ
`/v1` ራስ-ዙር (መደበኛ ያልሆነ የአቅራቢ ሞዴል) በኩል ሲላክ፣ ንዑስ ጥያቄው
`x-omniroute-admission-bypass: internal`ን ይልካል እና በተፈታው
የራስ-ዙር ማረጋገጫ መረጃ — በአካባቢያዊ ሁነታ የአካባቢው `sk_omniroute` ጠቋሚ፣
ወይም በኦፕሬተሩ የተዋቀረው `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` የenv ቁልፍ
(#1350) — ይረጋገጣል፣ በዚህም `REQUIRE_API_KEY=true` የሆኑ ስርጭቶች
አሁንም የመግለጫ ጥሪውን ማስኬድ ይችላሉ። ማለፊያው የሚከበረው ለእነዚያ
ትክክለኛ የማረጋገጫ መረጃዎች ብቻ ነው፣ ስለዚህ ውጫዊ ደንበኞች መግቢያን
ለመዝለል ራስጌውን መጠቀም አይችሉም።

የቆዩ ነባሪዎች በ`src/shared/constants/visionBridgeDefaults.ts` ውስጥ ይገኛሉ፤
አዲሶቹ የሁነታ/ተግባርን-የሚያገናዝብ/መሸጎጫ ነባሪዎች እና የቅንብሮች ፈቺው
በ`src/shared/constants/modalityBridgeDefaults.ts` ውስጥ ይገኛሉ። የጥበቃ ገደቡ
ሙከራዎች ሐሰተኛ የ`getSettings` እና `callVisionModel` አተገባበሮችን ማስገባት
እንዲችሉ የ`deps` ገንቢ አማራጭን ያቀርባል።

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

ድምፅ የያዙ የውይይት ጥያቄዎች የድምፅ ግብዓትን እንደሚቀበል ወደማይታወቅ
ዒላማ ከመድረሳቸው በፊት ያቋርጣቸዋል። የውይይት ጥያቄውን በፍጹም ወደ ሌላ
መስመር አያዞርም፤ የድምፅ ክፍሎች አሁን ባለው ከOpenAI ጋር ተኳሃኝ ባለብዙ-ክፍል
የመጨረሻ ነጥብ በኩል ወደ ጽሑፍ ይገለበጣሉ፣ እና የተመረጠው የውይይት ሞዴል
በጽሑፍ ቅጂዎቹ ይቀጥላል።

ፍሰት፦

1. `supportsAudio`ን በ`getResolvedModelCapabilities()` በኩል ይፍቱ። ግልጽ
   የአቅራቢ-መዝገብ ሜታዳታ ቅድሚያ ይኖረዋል፣ ቀጥሎ የማይለወጥ የሞዴል ሜታዳታ፣
   ከዚያም የተመሳሰለው `modalities_input` ይከተላል። `audio`ን ያላካተተ የታወጀ
   የግብዓት ዝርዝር `false` ነው፤ ምንም የችሎታ ማስረጃ ከሌለ `null` ይሆናል።
   `false` እና `null` ሁለቱም ጥንቃቄ የተሞላበትን ድልድይ ያነቃሉ፣ `true` ግን
   ያልፈዋል።
2. የ`modalityBridgeAudio*` ቅንብሮችን ይፍቱ እና በጋራ `detectMediaParts()`
   ፈላጊ አማካኝነት ከእያንዳንዱ መልዕክት ሊቆራረጡ የሚችሉ ከፍተኛ-ደረጃ
   የድምፅ ክፍሎችን ያውጡ። የሚደገፉ የሽቦ ቅርጾች OpenAI `input_audio`፣
   `audio_url` እና `source.media_type: "audio/*"` ናቸው። የተሸጎጠ ድምፅ
   ለመስመር ማስያዝ ይገኛል፣ ነገር ግን በመቆራረጫ ዱካው አይወገድም። ሥራው
   በ`modalityBridgeAudioMaxClips` ይገደባል፤ በኋላ ያሉ ክፍሎች ሳይነኩ ይቀራሉ።
3. የተዋቀረውን `provider/model` ያክብሩ፣ ወይም `selectAudioBridgeModel()`
   በ`AUDIO_TRANSCRIPTION_PROVIDERS` ውስጥ በቋሚ የካታሎግ ቅደም ተከተል
   እንዲያልፍ እና ጥቅም ላይ ሊውል የሚችል ንቁ የአቅራቢ ማረጋገጫ መረጃ ያለውን
   የመጀመሪያውን ሞዴል እንዲመርጥ ይፍቀዱ።
4. `callAudioTranscription()` base64/data-URI ድምፅን ወደ ባለብዙ-ክፍል
   `file` ይለውጣል፣ ወይም የርቀት `audio_url`ን ይፋዊ-ብቻ በሆነው የወጪ ጥያቄ
   ጥበቃ በኩል ከDNS ማሰሪያ እና የ25 MB ገደብ ጋር ያወርዳል። ከዚያም ፋይሉን
   እና የተመረጠውን ሞዴል በ`resolveSelfLoopBearer()` በተረጋገጠው የአካባቢ
   `/v1/audio/transcriptions` ራስ-ዙር ላይ POST ያደርጋል። ነባሩ የጽሑፍ ግልባጭ
   መስመር መደበኛ የማረጋገጫ መረጃ ፍለጋን፣ የማቀዝቀዣ/የፍጥነት-ገደብ አያያዝን
   እና ወደ አቅራቢ መላክን ያከናውናል።
5. የተሳኩ ጥሪዎች ክፍሎቻቸውን በ`[Audio N]: <transcript>` ይተካሉ። ጥሪዎቹ
   በ`Promise.allSettled` ይሠራሉ፤ የአንድ ጥሪ አለመሳካት የመጀመሪያውን የድምፅ
   ክፍል ይጠብቃል (#4012 ውል)። ሁሉም ጥሪዎች ካልተሳኩ እና ዒላማው
   `supportsAudio === false` መሆኑ ከተረጋገጠ፣ ክፍሎቹ
   `[Audio N]: (unavailable — no STT provider connected)` ይሆናሉ (#8430 ውል)።
   ለማይታወቅ ዒላማ (`null`)፣ ሁሉም ያልተሳኩበት ውጤት ሳይነካ ይቀራል።
   ጥቅም ላይ ሊውል የሚችል የSTT ማረጋገጫ መረጃ የሌለው በጽሑፍ-ብቻ የሚሠራ
   መሆኑ የተረጋገጠ ዒላማ የአውታረ መረብ ጥሪ ሳያደርግ ያንኑ ግልጽ ምትክ ይቀበላል።

የተሳኩ የጽሑፍ ግልባጮች በሂደቱ አቀፍ የModality Bridge LRU/TTL መሸጎጫ
ይጠቀማሉ። ቁልፉ የድምፅ ማጣቀሻውን፣ ቋሚውን `audio-transcription` የክዋኔ
መለያ እና የተመረጠውን የSTT ሞዴል ያጣምራል፤ ያልተሳኩ ውጤቶች በፍጹም
አይሸጎጡም። የድምፅ ሙከራዎች የጋራ `bridged`፣ `cacheHits`፣ `failures` እና
`lastUsedAt` ቆጣሪዎችን ያዘምናሉ። የተለወጡ ምላሾች
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`ን ይይዛሉ፤
ያልተነኩ ጥያቄዎች የAudio Bridge ክፍል አይቀበሉም።

የአሂድ ጊዜ ቅንብሮች በDB የተደገፉ እና በZod የተረጋገጡ ናቸው፦

| ቁልፍ                           | ነባሪ     | ክልል              |
| ----------------------------- | ------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                |
| `modalityBridgeAudioModel`    | `""`    | ራስ-ሰር ወይም STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10             |

የጋራ መሸጎጫው በ`modalityBridgeCacheEnabled`፣
`modalityBridgeCacheTtlMinutes` እና `modalityBridgeCacheMaxEntries` መቆጣጠሩን ይቀጥላል።

### የቪዲዮ ድልድይ (`videoBridge.ts`, `videoBridgePipeline.ts`)

ቤተኛ የቪዲዮ ድጋፍ እንዳለው ያልታወቀ ዒላማ ከመጠራቱ በፊት፣ በChat Completions
`messages` እና በResponses API `input` ውስጥ ያሉ ከፍተኛ-ደረጃ የቪዲዮ ክፍሎችን ይጠልፋል።
የሚደገፉት ቅርጾች `input_video`፣ `video_url`፣ `video_source`፣ HTTPS URLs
እና `data:video/*;base64,...` data URIs ናቸው። በጽሑፍ ውስጥ ያሉ ተራ የፋይል ስሞች
እንደ ቪዲዮ አይቆጠሩም።

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) የጥያቄውን ሙሉ ዳሰሳ፣
የችሎታ/ፖሊሲ ምርመራውን፣ የእያንዳንዱን ጥያቄ ድምር እና የምላሽ ውሂብ ይዞታውን
ይቆጣጠራል። በእያንዳንዱ ቪዲዮ ላይ የሚከናወነው ሥራ — ማግኘት፣ የሙሉ ውጤት
መሸጎጫ፣ የፍሬም ቅደም ተከተልን መግለጽ (ይህም በጠሪው የተገለጸ የድምፅ
ግልባጭ ካለ ያዋህዳል)፣ እና የእያንዳንዱ ሙከራ መለኪያዎች/ማቋረጥ/ማጽዳት —
በ`videoBridgePipeline.ts` ውስጥ ካለው `processVideoPart` በስተጀርባ ተደብቋል፤
ይህም በ`preCall` ዙር ውስጥ ለእያንዳንዱ የቪዲዮ ክፍል አንድ ጊዜ ይጠራል።
ይህ ሞጁል ግልጽ የወደብ ወሰኖቹንም ይገልጻል፦ `VideoMediaBrokerPort`
(ባይቶችን ማግኘት እና ናሙና የተወሰዱ ፍሬሞችን ማውጣት)፣ `VideoAudioTranscriptionPort`
(በጠሪው የተገለጸ የድምፅ ግልባጭን ከናሙና መግለጫዎቹ ጋር ማዋሃድ)፣ እና
`VideoDrilldownPort` (የፍሬም ዝርዝር የማቆየት ወሰን፤ እስካሁን ከ`processVideoPart`
ጋር አልተገናኘም — በአሁኑ ጊዜ የዝርዝር ግቤቶችን የሚጽፈው የተለየው
`/api/modality-bridge/video/drilldown` መስመር ብቻ ነው)።

ይፋዊው `/v1` የጥያቄ መንገድ subprocess ፈጽሞ አያስመጣም ወይም አይጠራም።
የርቀት ቪዲዮዎች በ50 MiB ገደብ ሥር ይወርዳሉ፤ ውስጠ-መስመር base64 ቪዲዮዎች
የሞዴል/መልዕክቶች/ፍሬሚንግ ማሸጊያው በ50 MiB ይፋዊ የJSON ጥያቄ መቀበያ
ገደብ ውስጥ እንዲቆይ፣ ለእያንዳንዱ ቪዲዮ ጥንቃቄ የተደረገበት 36 MiB
ዲኮድ የተደረገ ገደብ አላቸው። ውስጠ-መስመር ርዝመት እና የዲኮድ መጠን
ግምቶች ማህደረ ትውስታ ከመመደቡ በፊት ይመረመራሉ። በመነሻው የርቀት URL
እና በእያንዳንዱ ማዘዋወሪያ ላይ HTTPS ያስፈልጋል፤ ይህም DNS ማስማሪያ
ያለውን ነባሩን ይፋዊ-ብቻ የወጪ ጥበቃ ይጠቀማል። ከዚያ ባይቶቹ ትክክለኛውን
ውስጣዊ `POST /api/modality-bridge/video/extract` የደላላ ወሰን ያቋርጣሉ።
ይህ መስመር `LOCAL_ONLY` እና `SPAWN_CAPABLE` ሁለቱም ሲሆን፣ የሚቀበለው
በእያንዳንዱ ሂደት የተረጋገጠ እና የታመነ-loopback ጥያቄን ብቻ ነው፤ URL፣
የፋይል ስርዓት ዱካ፣ ሊፈጸም የሚችል ፋይል ወይም የነጋሪ እሴቶች ዝርዝር
ፈጽሞ አይቀበልም። የAPI የአካል-መጠን ቧንቧ መስመር እና የአስተናጋጁ
ተራማጅ የአካል አንባቢ በተናጠል 50 MiB የደላላ ግቤት ገደብን ያስገድዳሉ።
ገደብ ያለው ወረፋው በአንድ ጊዜ አንድ ማውጣትን ያስኬዳል፣ አራት በመጠባበቅ
ላይ ያሉ ሥራዎችን ይፈቅዳል፣ እና በመጠባበቅ ላይ ያለውን ግቤት በ100 MiB
ይገድባል።

በደላላው ውስጥ `ffprobe` የግል አካባቢያዊ ፋይልን ያነባል፤ ቋሚው የቅርጸት
ፍቃድ ዝርዝር የአጫዋች ዝርዝር እና የማኒፌስት ቅርጸቶችን አያካትትም።
ለተፈቀዱ የMOV ቤተሰብ ኮንቴይነሮች፣ ውጫዊ የMOV ውሂብ ማጣቀሻዎች
በነባሪነት እንደተሰናከሉ ይቆያሉ፣ እና ቋሚው ትዕዛዝ እነሱን ለማንቃት
አይመርጥም። `ffprobe` እና `ffmpeg` ሁለቱም የ`file`-ብቻ ፕሮቶኮል ፍቃድ
ዝርዝርን፣ አንድ ክርን፣ ቋሚ የነጋሪ እሴት ድርድሮችን፣ shell አለመጠቀምን፣
እና ከ`PATH` የተፈቱ ሊፈጸሙ የሚችሉ ፋይሎችን ይጠቀማሉ። የተያያዙ
የሽፋን ምስል ዥረቶች ሊጫወቱ የሚችሉ እጩዎች አይደሉም። ሁሉም ሊጫወቱ
የሚችሉ ዥረቶች ገደቦቹን ማሟላት አለባቸው፣ እና ከወሳኙ ዝቅተኛ-ኢንዴክስ
መጠባበቂያ በፊት ግልጽ የሆነ ነባሪ ዥረት ቅድሚያ ይሰጠዋል። ቪዲዮዎች
በ600 ሰከንዶች፣ በእያንዳንዱ ልኬት 8,192 ፒክሰሎች እና በ33,554,432
የምንጭ ፒክሰሎች የተገደቡ ናቸው። FFmpeg 1–16 የመካከለኛ ነጥብ JPEG
ፍሬሞችን ናሙና ይወስዳል፣ አነስተኛ ግቤቶችን ሳያሳድግ ረጅሙን ጠርዝ
ከ1,024 ፒክሰሎች ያልበለጠ እንዲሆን ያሳንሳል፣ እና URL ፈጽሞ አይቀበልም።
ናሙና መውሰድ በነባሪ `uniform` ነው። አማራጭ `scene_aware` እና የሙከራ
`segment_aware` ፖሊሲዎች ቀድሞ በተረጋገጠው አካባቢያዊ ዥረት ላይ አንድ
ተጨማሪ ቋሚ የFFmpeg ዙር ያከናውናሉ፣ ገደብ ያላቸውን `showinfo` የትዕይንት
የጊዜ ማህተሞች ይመርጣሉ፣ እና አመልካቹ ሲወድቅ፣ ጊዜው ሲያልፍ፣ ውጤቱ
የተበላሸ ሲሆን ወይም የእጩዎች ስብስብ ባዶ ሲሆን በወሳኝነት ወደ ተመሳሳዩ
ወጥ መካከለኛ ነጥቦች ይመለሳሉ። ክፍል-አስተዋይ ሁነታ የመካከለኛ ነጥብ
ናሙናዎችን ከተረጋገጡት የትዕይንት ክፍተቶች ጋር ተመጣጣኝ በሆነ መንገድ
ይመድባል፤ የክፍል-አስተዋይ ማስረጃ እና የመጠባበቂያ ባህሪ ከዚህ በታች
በዝርዝር ተገልጿል። ጠንካራው የ16-ፍሬም ገደብ
በእያንዳንዱ ፖሊሲ ውስጥ ከምርጫው በኋላ ይተገበራል። የትዕይንት-አስተዋይ
ጥያቄ የአንድ-ፍሬም በጀት ብቻ ሲኖረው፣ የንቁውን ሙሉ-ቪዲዮ ወይም የትኩረት
መስኮት ወጥ መካከለኛ ነጥብ ይጠቀማል እና `policyEffective: uniform` ብሎ
ሪፖርት ያደርጋል፤ አንድ የተመረጠ የትዕይንት ፍሬም ሁለቱንም የጊዜ ጫፎች
ማስጠበቅ አይችልም። ጠሪው ከፈለገ ውሱን የትኩረት መስኮት
(`start`/`end` ሰከንዶች) ሊያቀርብ ይችላል፤ ወሰኖች ከሚዲያው ቆይታ ጋር
እንዲጣጣሙ ይገደባሉ፣ የተገለበጡ ወይም ውሱን ያልሆኑ መስኮቶች ውድቅ
ይደረጋሉ፣ እና ሁሉም የናሙና መውሰጃ ፖሊሲዎች የሚከናወኑት በተለመደው
ክፍተት ውስጥ ብቻ ነው። የተገኘው መስኮት በናሙና መውሰጃ ዲበ ውሂብ
እና ባልታመነው የመግለጫ ቅድመ ቅጥያ ውስጥ ይካተታል፣ በዚህም የታችኛው
ደረጃ ሞዴሎች ያተኮረ ቅንጭብን ከሙሉ የጊዜ መስመሩ መለየት ይችላሉ።

የትርጉም መግለጫ ትኩረት የተለየና ግልጽ ቅንብር ነው። ነባሪው `full`
የትንተና ሁነታ ነባሩን የፍሬም መጠየቂያ ያስጠብቃል እና የጥያቄ ጽሑፍን
ወደ መግለጫ ሞዴሉ ፈጽሞ አያስተላልፍም። በ`focused` ሁነታ፣ ድልድዩ
ከተመሳሳዩ Chat ወይም Responses ኮንቴይነር የቅርብ ጊዜውን ባዶ ያልሆነ
በተጠቃሚ የተጻፈ `text`/`input_text` ብቻ ያነባል፣ ወደ NFC ያስተካክለዋል፣
የመቆጣጠሪያ ቁምፊዎችን እና ነጭ ክፍተቶችን ያጠቃልላል፣ እና በ500 Unicode
ኮድ ነጥቦች ይገድበዋል። ባዶ ውጤት በትክክል ወደ `full` መጠየቂያ
ይመለሳል። ጥቅም ላይ ሊውል የሚችል ፍንጭ በተወሰነ ያልታመነ-የተጠቃሚ-አውድ
ብሎክ ውስጥ እንደ JSON ይከታተላል፣ እና ቅድሚያ ሊሰጥ የሚችለው ለሚታዩ
ዝርዝሮች ብቻ ነው፤ በሚዲያው ውስጥ የሚታዩ ወይም የሚሰሙ መመሪያዎችን
እንዳይከተል የሚከለክለውን የተለየ ማስጠንቀቂያ መሻር አይችልም። ጽሑፋዊ
ትኩረት `start`/`end`ን ፈጽሞ አይገምትም ወይም ጊዜያዊ ናሙና ወሳጁን
አይለውጥም።

#### FU-07 መዋቅራዊ የክፍል ማስረጃ

`segment_aware` አስቀድሞ በተረጋገጠው የአካባቢ ቪዲዮ ዥረት ላይ ገደብ ያለውን አንድ የቅድመ-ትንተና ዙር ይጠቀማል። ቋሚው የማጣሪያ ሰንሰለት መጀመሪያ ስፋቱን ከ320 ፒክስሎች እንዳይበልጥ ይመጥናል፣ የትዕይንት ለውጦችንና የቀዘቀዙ ክፍተቶችን ይለያል፣ ከዚያም ለድብዘዛ፣ ለአማካይ ብርሃንነት እና ለቦታዊ/ጊዜያዊ መረጃ በሰከንድ 1 ፍሬም ናሙና ይወስዳል። ዙሩ በ600 መዋቅራዊ ናሙናዎች፣ በአንድ FFmpeg/ማጣሪያ የማስፈጸሚያ ክር፣ በተመሳሳዩ `file`-ብቻ ፕሮቶኮልና የመያዣ የተፈቀዱ ዝርዝሮች፣ በ1 MiB የሂደት ውጤት ገደብ፣ እና በደላላው የጋራ ማቋረጫ/የመጨረሻ ጊዜ ውስጥ ቢበዛ በ30 ሰከንዶች የተገደበ ነው። ከጥያቄው ምንም ትዕዛዝ፣ ማጣሪያ፣ ዱካ ወይም URL ፈጽሞ አይቀበልም።

መዋቅራዊ እሴቶቹ ቆራጥ የናሙና ማስረጃ ናቸው እንጂ ትርጉማዊ የቪዲዮ ግንዛቤ አይደሉም። ርዕሰ ጉዳዮችን፣ ድርጊቶችን፣ መግለጫ ጽሑፎችን፣ ንግግርን ወይም የተጠቃሚ ዓላማን አይገምቱም። የትዕይንትና የመቀዝቀዝ ድንበሮች ክፍሎችን ይፈጥራሉ፤ የመቀዝቀዝ ሽፋን፣ ድብዘዛ፣ ተጋላጭነት፣ ቦታዊ ዝርዝር እና ጊዜያዊ ለውጥ ነባሩ የ1–16 ፍሬም በጀት እንዴት እንደሚመደብ ላይ ብቻ ተጽዕኖ ያሳድራሉ። ሙሉ በሙሉ የቀዘቀዘ ክፍል በአንድ ፍሬም ይገደባል፣ ያልቀዘቀዙ ክፍሎች ግን ለቀረው በጀት ይወዳደራሉ። የድንበሮች ብዛት ከፍሬሞች ብዛት ሲበልጥ፣ ፈጣን የመጀመሪያ ቅንጥቦች ረጅም የመጨረሻ ክፍልን እንዳይደብቁ ወጥ የጊዜ መስመር ሽፋን ይጠበቃል። ከመቀዝቀዝ ድንበር በ1-ሰከንድ የትንተና ጥራት ውስጥ ያሉ የትዕይንት ድንበሮች አንድ ላይ ይዋሃዳሉ።

የጎደሉ ማጣሪያዎች፣ የተበላሸ/ባዶ ማስረጃ፣ የመለያ ስህተት ወይም የተገደበው የቅድመ-ትንተና ጊዜ ማብቃት ወደ ትክክለኛው ወጥ የመካከለኛ ነጥብ ፖሊሲ በክፍት ሁኔታ እንዲመለስ ያደርጋሉ። የጠሪ ማቋረጥ ወይም የደላላ የመጨረሻ ጊዜ ግን በክፍት ሁኔታ አይመለስም፤ በሂደት ላይ ያለውን ንዑስ ሂደት ያቋርጣል፣ ቀጣይ ፍሬም ማውጣትን ይከለክላል፣ እና የግል ጊዜያዊው የዛፍ መዋቅር በ`finally` ውስጥ ይወገዳል።

`scripts/perf/video-bridge-fu07-eval.ts` ከድግግሞሽ ማስወገድ በኋላ ለሚገኙ የመግለጫ ጽሑፍ ጥሪ ቁጠባዎች፣ ለጥቅጥቅ እንቅስቃሴ በጀት ምደባ፣ ለድብዘዛ/ተጋላጭነት/SI-TI ማስረጃ፣ ረጅም የመጨረሻ ክፍል ላላቸው ፈጣን ቅንጥቦች እና ቀስ በቀስ መደብዘዝ ለሚያስከትላቸው የተሳሳቱ አዎንታዊ ውጤቶች ቆራጥ የሆኑ እውነተኛ FFmpeg የሙከራ ናሙናዎችን ያመነጫል። የቅድመ-ትንተና የግድግዳ ሰዓት ቆይታን እና `/usr/bin/time` በሚገኝበት ጊዜ የልጅ ሂደት CPU እና ከፍተኛውን RSS ይመዘግባል። የጥራት ማረጋገጫዎቹ መዋቅራዊ መመዘኛዎች ብቻ ናቸው። ይህ የሙከራ ማዕቀፍ የተፈቀደ የመዳረሻ ነጥብ ወይም የተወሰነ ዳኛ ስለሌለው፣ የእውነተኛ መግለጫ ጽሑፍ ሞዴል ጥራት `HOLD` ሆኖ ይቀጥላል። `--caption-cost-per-call-usd` ግልጽ አዎንታዊ የአንድ ጥሪ ወጪ ግምት ካላቀረበ፣ የገንዘብ ቁጠባዎችም `HOLD` ሆነው ይቀጥላሉ፤ ስክሪፕቱ ሁለቱንም ውጤቶች በፍጹም አይፈብርክም።

እያንዳንዱ ፍሬም በ4 MiB፣ ሁሉም ጥሬ ፍሬሞች በአጠቃላይ በ23 MiB፣ እና ወደ ተከታታይ ቅርጽ የተለወጠው የደላላ ምላሽ በ32 MiB የተገደቡ ናቸው። የግል ጊዜያዊ ማውጫ በ`finally` ውስጥ ይወገዳል። OmniRoute FFmpegን አብሮ አያቀርብም፣ ብጁ የሚፈጸም ፋይል ዱካንም አይቀበልም። መግለጫ ጽሑፍ ከመፍጠሩ በፊት፣ ድልድዩ ጥንቃቄ የተሞላበት የምስላዊ ድግግሞሽ ማስወገጃ ዙር ይተገብራል፤ እያንዳንዱ JPEG ወደ 16×16 ግራጫ-መጠን ቋት ይቀነሳል እና በመጨረሻ ከተቀመጠው ፍሬም ጋር ብቻ ይነጻጸራል። ከአንድ ፍሬም በላይ ለሆነ የተጠየቀ የመግለጫ ጽሑፍ በጀት፣ የማውጣት ሂደቱ ከበጀቱ ቢበዛ ሁለት እጥፍ እና ፈጽሞ ከ16 ፍሬሞች የማይበልጥ የተገደበ የእጩዎች ስብስብ ያቀርባል። የተጠየቀው ገደብ የሚተገበረው ድግግሞሽ ከተወገደ በኋላ ብቻ ሲሆን፣ በጀቱ ቢያንስ ሁለት ሲሆን በመጨረሻው ማቅጠኛ ወቅት የመጀመሪያውና የመጨረሻው የተመረጡ እጩዎች ይጠበቃሉ። ስሪት ያለው `grayscale-16x16-mean-cells-v2` ፖሊሲ ከአማካይ የብርሃንነት ልዩነት እና መደበኛ የተደረገው ልዩነታቸው ቢያንስ 0.05 የሆነ የአነስተኛ ምስል ሕዋሳት ጥምርታ መካከል ትልቁን ይጠቀማል። የድግግሞሽ መወሰኛ ገደቡ ቋሚው 0.04 ሲሆን፣ እንደ የአሂድ ጊዜ ቅንብር ከመጋለጥ ይልቅ ሊገመት ስለሚችል ተመርጧል። ይህ ሁለተኛ ከፍተኛ-ንፅፅር ምልክት በአማካይ ብቻ የሚደረግ ንጽጽር ሊደብቃቸው የሚችላቸውን አነስተኛ እንቅስቃሴዎችና የሚታይ ጽሑፍ ለውጦች ይጠብቃል። የአነጻጻሪ ወይም የዲኮደር ስህተቶች በክፍት ሁኔታ እንዲያልፉ በማድረግ ሽፋኑን ይጠብቃሉ። የውጤት ሜታዳታ የወጡ እጩዎችን፣ በተሳካ ሁኔታ ጥቅም ላይ የዋሉ ፍሬሞችን እና የተወገዱ ምስላዊ ድግግሞሾችን ለይቶ ያሳያል።

በግልጽ ምልክት የተደረገበት የቪዲዮ ክፍል የጊዜ ማህተም ያለው የእውቂያ ሉህ ሊጠይቅ ይችላል። ድልድዩ ቢበዛ 4-ዓምድ፣ 16-ፍሬም ያለው JPEG ፍርግርግ ይገነባል። እያንዳንዱ 512-ፒክስል ሕዋስ የምንጩን የጊዜ ማህተም ከፍተኛ-ንፅፅር ባለው የታችኛው ክልል ውስጥ ይቀርጻል፣ ተመሳሳይ የጊዜ ማህተሞች ደግሞ ለቀጣይ ማዛመድና ኦዲት በጽሑፋዊ ሜታዳታ ውስጥ ይቆያሉ። ሙሉው JPEG በ32 MiB የተገደበ ሆኖ ይቆያል። `sharp` ፍርግርጉን ዲኮድ ማድረግ ወይም ማቀናበር ካልቻለ፣ ድልድዩ ወደ ነጠላ JPEG ፍሬሞች ይመለሳል፤ የደንበኛ ማቋረጥ ግን አሁንም በሉህ ክወናው በኩል ይተላለፋል።

የማሳደጊያ ማስረጃ ሆን ተብሎ ከሰው ሠራሽ የማቀናበር ጥቃቅን መለኪያ ተለይቷል። `scripts/perf/video-bridge-contact-sheet-eval.ts` ለእውነተኛ OpenAI-ተኳሃኝ የምስል ሞዴሎች በስኪማ ስሪት የተደረገ A/B የሙከራ ማዕቀፍ ይገልጻል። በአቅራቢው የተዘገቡ ቶከኖችን፣ ከጫፍ እስከ ጫፍ ያለውን የግድግዳ ሰዓት መዘግየትን (የሉህ ማቀናበርን ጨምሮ)፣ የሞዴል ጥሪ ብዛትን እና በማኒፌስት የተገለጸ የእውነታ ማቆየትን ይለካል። ጥሬ የሞዴል ምላሾች በሪፖርቱ ላይ አይጻፉም፤ የሚቀመጡት SHA-256 ዲጄስቶችና የተዛመዱ የእውነታ መታወቂያዎች ብቻ ናቸው። `--execute-real` ካልተላለፈ እና `--model`፣ `OMNIROUTE_BASE_URL` እና `OMNIROUTE_API_KEY` ካልተዋቀሩ፣ የሙከራ ማዕቀፉ ምንም የአውታረ መረብ ወይም የሚከፈልበት የሞዴል ጥሪ አያደርግም። ያለዚያ ግልጽ እውነተኛ አሂድ፣ በማሽን የሚነበበው ውሳኔው `HOLD` ሆኖ ይቆያል፤ ሰው ሠራሽ የውሂብ ጭነት/የጥሪ ብዛት መለኪያዎች ብቻቸውን የማሳደጊያ ማስረጃ አይደሉም።

ጠሪዎች አስቀድመው የተሰለፈ ጽሑፍ ካላቸው፣ የአማራጭ `transcript.cues` ድርድርን ወደሚደገፍ የቪዲዮ ክፍል ማያያዝ ይችላሉ። እያንዳንዱ ምልክት `text`፣ በተመረመረው ቆይታ ውስጥ ያለ ውሱን `start`/`end` ክፍተት፣ እና በተፈቀደ ዝርዝር ውስጥ ያለ `source` (`client`፣ `embedded` ወይም `audio-bridge`) መያዝ አለበት፤ `confidence` በነባሪ `1` ሲሆን በ`0` እና `1` መካከል መቆየት አለበት። በትክክል ተመሳሳይ የሆኑ ምልክቶች ይዋሃዳሉ። OmniRoute ከዚህ ሜታዳታ ፈጽሞ የንግግር-ወደ-ጽሑፍ ሂደት አይጀምርም፤ የተረጋገጡ ምልክቶች ከምንጫቸው፣ ከእርግጠኝነታቸው እና ከክፍተታቸው ጋር ወደተገለጸው ውጤት ይቀዳሉ፣ እንዲሁም ከፍሬም መግለጫ ጽሑፎች ጎን የማይታመኑ ምልከታዎች ሆነው ይቀርባሉ። ልክ ያልሆነ፣ ከክልል ውጭ የሆነ ወይም መነሻ የሌለው ጽሑፍ ከመግለጫ ጽሑፍ ዥረቱ ጋር ከመቀላቀል ይልቅ ውድቅ ይደረጋል። ሁለቱም የጥያቄ-አካል የጽሑፍ ቅጂ ሰርጦች በራስ የተገለጹ `embedded` ወይም `audio-bridge` መለያዎችን ጨምሮ፣ የቀረበውን መነሻ ወደ `client` ያስተካክላሉ። እነዚያን የታመኑ መለያዎች በኮድ-ብቻ በሆነው `trustedSource` ነጋሪ እሴት በኩል መመደብ የሚችለው በአገልጋዩ የሚተዳደር አስማሚ ብቻ ነው፤ የጥያቄ JSON መስክ ወደዚያ ነጋሪ እሴት ሊደርስ አይችልም። የጽሑፍ ቅጂ ጽሑፍ፣ መነሻው ምንም ይሁን ምን፣ የማይታመን ከሚዲያ የተገኘ ይዘት ሆኖ ይቆያል፣ እና ፈጽሞ ፈቃድ መስጠትን መወሰን የለበትም።

የላቀ ጥሪ አድራጊ ለተመሳሳዩ ቪዲዮ የ`audioTranscript` ትራክ ሊያቀርብ ይችላል፤
ይህም ከደንበኛው የቀረበ ጽሑፍ እንጂ በአገልጋዩ የተከናወነ የድምፅ ወደ ጽሑፍ ቅጂ ማረጋገጫ ተደርጎ አይወሰድም።
የውህደት መገናኛው ምስላዊ እና የድምፅ ምልከታዎችን በአንድ
የጊዜ ገደብ እና የማቋረጫ ምልክት ስር ያስኬዳል፣ በጋራ የጊዜ መስመር ላይ ያደራጃቸዋል፣
ሙሉ በሙሉ ተመሳሳይ የሆኑትን ያዋህዳል፣ እና ከሁለቱ ወገኖች አንዱ ብቻ ሲሳካ
ከፊል ውጤትን ሪፖርት ያደርጋል።
ልክ ያልሆነ `audioTranscript` ወደዚያ ከፊል ውጤት ዝቅ ይላል — ምስላዊው
መግለጫ እንዳለ ይቆያል፣ የድምፅ ቅርንጫፉም የተጣራ የውድቀት ኮድ ይመዘግባል —
ሙሉው ቪዲዮ እንዲወድቅ ከማድረግ ይልቅ። የእያንዳንዱ ቅርንጫፍ ተገኝነት፣ የከፊል ውጤት ምልክት፣
እና የተጣሩ የውድቀት ኮዶች በተገለጸው ውጤት፣ በጥበቃ-ገደቡ ሜታዳታ
(`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`)፣ በውጤት-መሸጎጫ ሜታዳታ፣ እና በድልድዩ
የውህደት ቆጣሪዎች ውስጥ እንዳሉ ይጠበቃሉ። ነባሪው የVideo Bridge መንገድ ድምፅ-ወደ-ጽሑፍን
አይጠራም ወይም ሁለተኛ የሚዲያ ቅጂ አያወርድም፤ ያ ግልጽ ትራክ ከሌለ
ቪዲዮ-ብቻ ሆኖ ይቆያል።

**የትራንስክሪፕት ማቆየት (#12150 P1)።** Video Bridge (ራሱ በምርጫ የሚነቃ) የትራንስክሪፕት ፍንጭ ባቀረበ ቁጥር ይህ በራስ-ሰር ተግባራዊ ይሆናል — የተለየ
የማቆያ ምልክት የለም። አንድ ጥያቄ ማንኛውንም የትራንስክሪፕት ፍንጭ (በጥሪ አድራጊው የታወጀ
`transcript` ወይም የተዋሃደ `audioTranscript`) ሲያቀርብ፣ የጥበቃ-ገደቡ `videoBridgeObserved` ብሎ ምልክት ያደርግበታል እና የቪዲዮ መግለጫውን የተሰወረ ጥላ ያመነጫል —
የእያንዳንዱ ፍንጭ ነጻ-ጽሑፍ ይዘት በ
`[redacted-video-transcript]` የተተካበት ተመሳሳይ አቀራረብ፤ ይህም ሕብረቁምፊው ከመገጣጠሙ በፊት የተዋቀረውን የፍንጭ መስክ
በመተካት የሚገነባ ነው (የተዘረጋውን ጽሑፍ በመተንተን በፍጹም አይደለም፤ ስለዚህ
እንደ `[inaudible]`/`[music]` ያሉ `]` የያዙ ይዘቶችን ጨምሮ፣ ጥቃታዊም ሆነ
መደበኛ የፍንጭ ይዘት ሊተርፍ አይችልም)። በቋሚነት የሚቀመጠው የጥሪ-ምዝግብ ጥያቄ አካል
እያንዳንዱን ከቪዲዮ የተገኘ የጽሑፍ ክፍል ከዚያ የተሰወረ ጥላ ጋር በይዘት
እኩልነት አዛምዶ ይለውጣል፤ የ`fullText` መልህቅ ከተጠናቀቀው የቅድመ-ጥሪ ጥበቃ-ገደብ
ውሂብ እንደገና ይነበባል፣ ስለዚህ በኋላ ያሉ የሰንሰለት ጥበቃ-ገደቦች (የPII እና
የማረጋገጫ መረጃ ሸፋኞች፣ ቅድሚያዎች 10/95) የመግለጫውን ጽሑፍ በቦታው ላይ ከጻፉት በኋላ እና
የስርዓት-መመሪያ/ርክክብ/Memory ማስገባት የመልዕክት ድርድሩን እንደገና ከቀረጸ በኋላም ማዛመዱ ይሳካል።
ወደ ሞዴሉ ወደላይ የሚላከው አካል አይቀየርም። የታየ ጥያቄ እንዲሁም
ምንም ቋሚ Memory አይሞላም (ከጥያቄ እና ከምላሽ የሚገኙ ማውጣቶች ሁለቱም ይዘለላሉ)፣
ስለዚህ የሞዴሉ ራሱ ምላሽ የትራንስክሪፕት ጽሑፍን ወደ Memory ሊያስተጋባ አይችልም።

**ጥሬ የቪዲዮ መስኮች (#12430)።** ድልድዩ በነቃበት እና ቤተኛ የቪዲዮ ድጋፍ ያልታወቀ ወይም የሌለ ሲሆን፣ የተገለጹ `transcript`/`audioTranscript` መስኮችም ከመግለጫ ውድቀት ወይም ከ`maxVideos` ገደብ በኋላም እንኳ `videoBridgeObserved`ን ያነቃሉ። `null` እና ባዶ ሕብረቁምፊዎች ይቆጠራሉ፤ የሌሉ መስኮች እና ቪዲዮ-ያልሆነ ሜታዳታ አይቆጠሩም። የተያዙ ቅጂዎች እነዚህን መስኮች ይሰውራሉ ወይም ጥያቄውን ይተዋሉ፣ እና መሸጎጫዎች/Memory ይታለፋሉ።

በእነዚያ የመጠባበቂያ መንገዶች ላይ፣ ልክ የሆኑ የጥሪ አድራጊ ፍንጮች መደበኛ ያልሆኑ የአቅራቢ መስኮች ከመሆን ይልቅ የሚደገፉ `text`/`input_text`
ክፍሎች ይሆናሉ። ከጥያቄው ጋር የቀረቡት ሁለቱም ትራኮች
ያልታመኑ `client` ምልከታዎች ሆነው ይቆያሉ፣ ቪዲዮው እንዳልተገለጸ እና የጊዜ ማህተሞች
ከሚዲያው ጋር እንዳልተረጋገጡ ግልጽ ማስጠንቀቂያ ይኖራቸዋል። ነባሮቹ
የ256-ፍንጭ/64-KiB አጠቃላይ እና የእያንዳንዱ-ፍንጭ በጀቶች በሁለቱ ትራኮች ላይ በጋራ ይተገበራሉ፤
የጊዜ ማህተሞች በደላላው የ600-ሰከንድ ጣሪያ እና በቀረበ ማንኛውም የትኩረት
መስኮት ውስጥ መግባት አለባቸው። ልክ ያልሆኑ ትራኮች ይጣላሉ፣ እንደ የዘፈቀደ ጽሑፍ ወደ ፊት አይላኩም፤ የተዋሃደ በጀታቸው ካልታለፈ ትክክለኛ ወንድም ትራክ አሁንም ሊያገለግል ይችላል። Null/ባዶ
መስኮች ምንም ጽሑፍ አይጨምሩም። በዚህ መጠባበቂያ ምክንያት ምንም የሚዲያ ማምጣት ወይም ትራንስክሪፕሽን አይጨመርም።
የትራንስክሪፕት ማራዘሚያ መስኮች ከመጠባበቂያው የቪዲዮ ተሸካሚ እና ከ
`video_url`/`source` ኦብጀክቶቹ ይወገዳሉ። የOpenAI ሽቦ ፍቀድ-ዝርዝር ጥብቅ ሆኖ ይቆያል፤ ቤተኛ ድጋፋቸው ያልታወቀ
የቪዲዮ ተሸካሚዎች እንደተገኙ ይቆያሉ፣ እና የታወቁ ጽሑፍ-ብቻ መዳረሻዎች ደህንነቱ የተጠበቀ ምልክቶችን ይይዛሉ።
የተዋቀሩ የስወራ ጥላዎች የተጨመረውን የትራንስክሪፕት ጽሑፍ ይጠብቃሉ፣ የጥሪ አድራጊው ባለቤትነት ያለው
የመጀመሪያ ጥያቄ ግን አይቀየርም። ቤተኛ ድጋፍ ያላቸው መዳረሻዎች እና
የተሰናከሉ ድልድዮች ያላቸውን ነባር የማለፊያ ባህሪ ይዘው ይቆያሉ።

ተጨማሪ የተያዙ ቅጂዎች ተመሳሳዩን የታየ-ጥያቄ ምልክት ይጠቀማሉ። ጥሬው
የቅድመ-ጥበቃ-ገደብ የደንበኛ-ጥያቄ ቅጽበታዊ ቅጂ፣ በማህደረ ትውስታ ያለው በመጠባበቅ ላይ ያለ ጥያቄ፣ እና ቀደምት
ውድቅ-የተደረገ-ጥያቄ ምዝግብ በቪዲዮ ክፍሎች ውስጥ ያሉ የትራንስክሪፕት መስኮችን በመዋቅራዊ መንገድ ይተካሉ፤
በፓይፕላይን ደረጃዎች እና በአውድ ርክክብ የተፈጠሩ የሕብረቁምፊ መመሪያዎች በቋሚ-ጥያቄ-አካል መድረሻ ላይ ይሰወራሉ። በቋሚነት የተቀመጠው `video_content_removed` ምልክት
የ`previous_response_id` ቀጣይነት ሆን ተብሎ የተጣለውን ጽሑፍ እንደገና ከመገንባት ይልቅ ደህንነቱን በመጠበቅ እንዲወድቅ ያደርገዋል። የታየ ጥያቄ
ከመመዝገቡ በፊት የእያንዳንዱን-ክፍል የስወራ ጥላ ካጣ፣ ወይም ከበኋላ የጥያቄ ለውጦች በኋላ
ከበርካታ የቪዲዮ ጥላዎች አንዱ እንኳ መዛመድ ካልቻለ፣ በከፊል የተሰወረ
ትራንስክሪፕት ከመቆየት ይልቅ የተያዘው የጥያቄ አካል ሙሉ በሙሉ ይተዋል።

ለታየ ጥያቄ፣ የሞዴል ምላሽ ያለ የተዋቀረ የፍንጭ ወሰን
የትራንስክሪፕቱን ማንኛውንም ክፍል ሊጠቅስ ይችላል። ስለዚህ በቋሚነት የሚቀመጠው የጥሪ-ምዝግብ
`responseBody` በመተው ምልክት ይተካል፤ ዝርዝር
የፓይፕላይን ቅርስ (ወደላይ የተላኩ/የደንበኛ አካላትን እና የዥረት ቁርጥራጮችን ሊያካትት የሚችል)
አይቀመጥም። የትርጉም፣ idempotency፣ እና reasoning-replay መሸጎጫዎች
ለዚያ ጥያቄ ንባቦችን እና ጽሑፎችን ይተዋሉ። የአቅራቢው ጥያቄ እና ለደንበኛው የሚታየው
ምላሽ አይቀየሩም። ዝርዝር ቅርሱ ሲተው፣ ቀደምት የkeepalive ባይቶች ከጊዜያዊው
ቋት ይፈስሳሉ። የKiro የተበላሸ EventStream
ማስጠንቀቂያ የpayload ባይት ብዛትን ብቻ ይገልጻል፣ ይዘቱን ወይም የJSON
ተንታኙን ጥሬ ስህተት በፍጹም አይገልጽም።
ይህ እያንዳንዱ ያልተዛመደ የአቅራቢ/ተሰኪ ምርመራ ኦዲት ተደርጓል ብሎ
አይገልጽም፤ ሰፊው የተያዙ-መድረሻዎች ፍተሻ በ#11658 ውስጥ ክትትል ይደረግበታል።

የውስጣዊው `/api/modality-bridge/video/drilldown` የሕይወት ዑደት የተለየ፣
በloopback/token የተረጋገጠ የcache መሠረተ ስርዓት ነው። እያንዳንዱ ክወና ቀኖናዊ
opaque principal IDንም ይፈልጋል። የምርት ጥሪ አድራጊ ከመንቃቱ በፊት፣ ያንን ID
ከተረጋገጠው tenant ማመንጨት አለበት፣ እና ደንበኛው የመረጠውን እሴት ፈጽሞ
ማስተላለፍ የለበትም። የcache ቁልፎች ያንን principal ከቀኖናዊ session እና
video-reference IDዎች ጋር ያስተሳስራሉ፣ በSHA-256 የተመነጩ ቁልፎቻቸውን ብቻ
ያከማቻሉ፣ እና ማንበብንም ሆነ መሰረዝን በተመሳሳይ principal ይገድባሉ።
cacheው በእያንዳንዱ ግቤት ከ16 የማይበልጡ የተመነጩ JPEG frameዎችን ያከማቻል፣
ከአሥር ደቂቃዎች በኋላ ጊዜያቸውን ያሳልፋል፣ እና የተገደቡ
`start`/`end` ንባቦችን ወይም ግልጽ የsession ስረዛን ይደግፋል።

እያንዳንዱ principal በ16 ግቤቶች እና በ64 MiB ቀኖናዊ JPEG ውሂብ የተገደበ ነው።
እነዚያ ገደቦች ከዓለም አቀፉ የ64 ግቤቶች/256 MiB ከፍተኛ ገደብ ነጻ ናቸው፦
የprincipal quota ጫና፣ ዓለም አቀፍ LRU ማስወገድ ከመታሰቡ በፊት፣ የዚያን
principal በቅርብ ጊዜ በትንሹ ጥቅም ላይ የዋሉ ግቤቶችን ብቻ ያስወግዳል።
ጊዜያቸው ያለፈባቸው ግቤቶች በcache እንቅስቃሴ ወቅት ከprincipal እና
ከዓለም አቀፍ ሒሳብ አያያዝ ይጸዳሉ፣ ስረዛ እና የማረጋገጫ ውድቀት ግን
ከፊል ምትክን commit አያደርጉም።

cacheው ቀኖናዊ ያልሆነ Base64ን፣ ከመጠን በላይ paddingን፣ JPEG ያልሆነ mediaን፣
የተበላሹ ወይም የተቆረጡ JPEGዎችን፣ እና በተገደበ የሙሉ ምስል `sharp`
decode ወቅት ማስጠንቀቂያ የሚያስከትሉ JPEGዎችን ውድቅ ያደርጋል።
እያንዳንዱን ተቀባይነት ያገኘ ምስል እንደ ቀኖናዊ JPEG እንደገና ይቀይራል፣
የጥሪ አድራጊውን fields ከማመን ይልቅ ስፋቱንና ቁመቱን ከdecode ከተደረጉት
bytes ያመነጫል፣ እና ማንኛውንም ተከታይ polyglot bytes ከማቆየት ይልቅ
ይጥላቸዋል። በሁለቱም quotaዎች ላይ የሚቆጠረው የተገደበው ቀኖናዊ
compressed buffer ብቻ ነው። የJSON wire ገደቡ ለ32 MiB decoded-input ከፍተኛ
ገደብ የBase64 ትርፍ መጠንን ያካትታል። እያንዳንዱ
የተከማቸ derivation የተረጋገጠውን የJPEG format/resolution፣ sampling policy፣
derivation version፣ የተፈጠረበትን ጊዜ፣ በserver የተሰላውን content hash፣ እና
hash የተደረገበትን parent reference ከታመነው ጥሪ አድራጊ parent-content hash ጋር
ይመዘግባል። ከatomic cache commit በፊት በasynchronous decode/hash ደረጃዎች
መካከል ስረዛ ይፈተሻል።

ይህ tranche እስካሁን የምርት producerን ከrouteው ጋር አያገናኝም፣ እና
multi-resolution variant selectionን አያቀርብም። ስለዚህ ግልጽ የሆነው
የVideo Bridge request path ምንም ተጨማሪ ሥራ አያስከትልም፣ tenant-bound
principal derivation እና ሙሉው FU-08 multi-resolution lifecycle ደግሞ እንደ
ተጠናቀቀ ባህሪ ከመመዝገብ ይልቅ ግልጽ የክትትል ሥራዎች ሆነው ይቆያሉ።

Frameዎች በተዋቀረው Video model በቅደም ተከተል caption ይደረግላቸዋል።
ባዶ Video override የVision ቅንብሩን ይወርሳል፤ ሁለቱም ባዶ ከሆኑ፣ የVision
auto-router ውጤታማውን vision-capable model ይመርጣል። የተሳኩ captions
ዋናውን part በቋሚ `[Video description:` prefix ይተካሉ፤ ይህም ጽሑፉን
እንደማይታመን ከmedia የተገኘ ምልከታ ይለየዋል፣ እና ተከታይ models
በmediaው ውስጥ የተገኙ መመሪያዎችን እንዳይከተሉ ይነግራቸዋል።
የFrame-caption cache ቁልፎች JPEG bytesን፣ promptን፣ timestampን፣ እና
ውጤታማውን model ያካትታሉ፤ cache የሚደረጉት የተሳኩ captions ብቻ ናቸው።
የCache ግቤቶች fallback modelን ጨምሮ በእውነት የተሳካውን producer model
ይይዛሉ፤ የተለያዩ frameዎች በተለያዩ models ሲመረቱ bridgeው `mixed`
ብሎ ሪፖርት ያደርጋል። cache hit ያንን producer identity እንደ ተጠየቀው
routing plan እንደገና ከመሰየም ይልቅ እንደገና ይጠቀምበታል። የሙሉ-video
result cache ውጤቱን በሚቀይሩ ሁሉም inputs ላይ ቁልፍ ይደረግበታል — prompt፣
effective model፣ sampling policy፣ frame count፣ semantic analysis mode፣
የnormalized focus hint SHA-256 fingerprint፣ focus window፣ `transcript`፣
`audioTranscript`፣ እና contact-sheet flag — ስለዚህ ከእነዚህ dimensions
ማንኛውንም መቀየር cache miss ያስከትላል፣ ያረጀ ውጤትን እንደገና መጠቀም
ፈጽሞ አይሆንም። የvisual dedup policy version፣ threshold፣ እና የተገደበ
candidate-frame count በresult-cache key እና metadata ውስጥም በግልጽ
ተካትተዋል፤ ስለዚህ የpolicy ለውጥ ያረጀ የሙሉ-video descriptionን እንደገና
መጠቀም አይችልም። Result-cache v4 metadata modeን እና fingerprintን ይይዛል፣
ጥሬውን የuser task ፈጽሞ አይዝም። Guardrail metadata የተጠየቁትንም ሆነ
ውጤታማዎቹን analysis modes ሪፖርት ያደርጋል፤ ጥቅም ላይ የሚውል user text
ሳይኖር የተጠየቀ `focused` mode በተግባር `full` እንደሆነ ሪፖርት ይደረጋል።

guardrailው እያንዳንዱን የሚደገፍ video part ያወጣል፣ ነገር ግን ከ
`modalityBridgeVideoMaxVideos` በላይ አይገልጽም።
`supportsVideo === false` እንዳለው ለተረጋገጠ target፣ ያልተሳኩ እና ከገደቡ
በላይ የሆኑ videos ግልጽ ደህንነታቸው የተጠበቀ text markers ይሆናሉ፣ ስለዚህ
ምንም raw video አይተርፍም። capabilityው በማይታወቅበት ጊዜ፣ እነዚያ parts
የvideo carrierቸውን ይዘው ይቆያሉ፤ ማንኛውም fallback transcript ከላይ
የተገለጸውን የተገደበ text conversion ይከተላል። `supportsVideo === true`
ያላቸው targets bridgeውን bypass ያደርጋሉ። የclient request abort signal
በdownload፣ broker queue፣ subprocesses፣ እና caption calls በኩል ይተላለፋል፤
aborts በvideos መካከል ያቆማሉ፣ እና ወደ raw media fail open ፈጽሞ አያደርጉም።

የRuntime settings በDB የተደገፉ እና በZod የተረጋገጡ ናቸው፦

| ቁልፍ                                 | ነባሪ         | ክልል / ባህሪ                                                                                     |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | አማራጭ runtime፣ በፍላጎት የሚነቃ                                                                      |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` አጠቃላይ መግለጫ ጽሑፎችን ይጠብቃል፤ `focused` የተገደበ፣ ያልታመነ የቅርብ ጊዜ የተጠቃሚ ዐውድን ይጠቀማል                |
| `modalityBridgeVideoModel`          | `""`        | የVision Bridge ሞዴልን ይወርሳል                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`፣ `scene_aware`፣ ወይም ተመጣጣኝ `segment_aware`፤ የመፈለጊያው አለመሳካት ወደ `uniform` እንዲመለስ ያደርጋል |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                |

ከ120 ሰከንድ በላይ የሆኑ የቆዩ እና በቋሚነት የተቀመጡ የቪዲዮ ጊዜ ማብቂያ እሴቶች በ
broker የጊዜ ገደብ ላይ ይገደባሉ፤ ከዚህ ገደብ በላይ የሆኑ አዳዲስ የቅንብር ጽሑፎች ውድቅ ይደረጋሉ።
`GET /api/modality-bridge/video/runtime` ከማረጋገጫ ወይም runtime ምርመራ በፊት የታመነና ማህተም ያለበት የloopback
አካባቢያዊነትን ይጠይቃል፣ ከዚያም የአስተዳደር
ማረጋገጫን ይጠይቃል። የሚመልሰው `available`ን፣ የተጣሩ የFFmpeg/ffprobe ስሪቶችን፣ እና runtime በማይገኝበት ጊዜ ቋሚ
ምክንያትን ብቻ ነው። የውስጥ ማውጫ endpoint ይፋዊ የሰቀላ API አይደለም፦ የqueue መሙላት `503`ን ከ`Retry-After` ጋር ይመልሳል፣ የጠሪ
ግንኙነት መቋረጥ `499`ን ይመልሳል፣ እና ቋሚው የbroker ጊዜ ገደብ `504`ን ይመልሳል። የተቀየሩ ምላሾች
`video->text;model=<visionModel>;parts=<videos>`ን ወደ ማዕከላዊው
`x-omniroute-modality-bridge` header ያክላሉ፤ የVision ወይም Audio ክፍሎችን ግን አያስወግዱም።

### PII መሸፈኛ (`piiMasker.ts`)

በ**ሁለቱም** ደረጃዎች ላይ ይሰራል።

- **`preCall`** payloadን ይቀዳል፣ `system`፣ `messages`፣ `input`፣ እና
  `prompt`ን (ተራ የሕብረቁምፊ ንጥሎችን ጨምሮ) ይዳስሳል፣ እና `processPII()`ን (ከ
  `@/shared/utils/inputSanitizer`) በሕብረቁምፊ `content`/`text` መስኮች ላይ ይተገብራል።
  `PII_REDACTION_ENABLED=true` ሲሆን፣ የተገኘ PII በወጪው
  payload ውስጥ ይደበቃል። ይህ ከ`INPUT_SANITIZER_MODE` ነጻ ነው (ይህም
  የprompt-injection ፖሊሲን ብቻ ይቆጣጠራል)። መደበቅ ሲጠፋ፣ ጥሪው ይዘትን
  ሳይቀይር የመገኘት ብዛቶችን ይመዘግባል።
- **`postCall`** ምላሹን በጥልቅ ይቀዳል፣ `sanitizePIIResponse()`ን ከ
  Responses-API-shape መሸፈኛው (`maskResponsesOutput` — `output_text`ን እና
  `output[].content[].text`ን ይሸፍናል) ጋር ያስኬዳል። ማንኛውም መደበቅ ከተከሰተ፣
  የተሻሻለው ምላሽ ዋናውን ይተካል።

guardrail ፈጽሞ አያግድም፤ ማብራሪያ ብቻ ያክላል (`meta.detections`፣
`meta.redacted`) ወይም እንደገና ይጽፋል።

### Prompt Injection (`promptInjection.ts`)

በተጠቃሚው በቀረበ ይዘት ውስጥ ያሉ ጎጂ መዋቅሮችን ፈልጎ ያገኛል እና የተዋቀረውን
ፖሊሲ ያስፈጽማል። ባህሪው በአካባቢ ተለዋዋጮች እና በconstructor
አማራጮች ይመራል፦

| ቅንብር     | የአካባቢ ተለዋዋጭ                                                                                           | ነባሪ    | ውጤት                                                                                                                                                                   |
| -------- | ----------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| የነቃ      | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | `false` ሲሆን፣ guardrail ሂደቱን በአጭር ያቋርጣል።                                                                                                                               |
| ሁነታ      | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | የinjection ፖሊሲ፦ `block`፣ `warn`፣ ወይም `log`። (`redact` ለኋላቀር ተኳኋኝነት ተቀባይነት አለው፣ ነገር ግን የinjection ጽሑፍን **አያስወግድም**፤ የጥያቄ PII ዳግም ጽሑፍ በ`PII_REDACTION_ENABLED` ይቆጣጠራል።) |
| የማገድ ገደብ | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | ለማገድ የሚያስፈልገው ዝቅተኛው የከባድነት ደረጃ። Medium በነባሪ ለክትትል ብቻ ነው።                                                                                                              |

**የሁነታ ቅድሚያ** (`getMode`)፦ የጠሪ `options.mode` →
`INJECTION_GUARD_MODE` **የDB feature-flag override** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`። ስለዚህ የdashboard override ከenv vars ይቀድማል፣ በዚህም የFeature
Flags UI እየሰራ ያለውን guard በቀጥታ ይቆጣጠራል (ዳግም ማስጀመር አያስፈልግም)። የDB ንባቡ fail-safe ነው፦
ስህተት ካጋጠመው፣ guard ወደ env-ተኮር ባህሪ ይመለሳል፣ እና
override በማይዋቀርበት ጊዜ ባህሪው ከenv-ብቻ መፍትሔ ጋር ተመሳሳይ ነው።

የመለየት ምንጮች፦

1. `sanitizeRequest()` ከ`@/shared/utils/inputSanitizer` (በpipeline ውስጥ በሌሎች ቦታዎች
   የሚጠቀሙበት የጋራ detector ስብስብ)።
2. አብሮ የተሰራ `DEFAULT_GUARD_PATTERNS` (በአሁኑ ጊዜ `system_override_inline` እና
   `markdown_system_block`፣ ሁለቱም `high` ከባድነት ያላቸው)።
3. በconstructor አማራጮች በኩል የሚተላለፉ አማራጭ `customPatterns` (ሕብረቁምፊዎች፣ regex፣
   ወይም `{ name, pattern, severity }` መዝገቦች)።

`mode === "block"` **እና** ቢያንስ አንድ ማወቂያ የክብደት ገደቡን
ሲያሟላ፣ `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }`ን ይመልሳል። በ`warn`/`log` ሁነታዎች guardrail ምዝግብ ያስቀምጣል፣ ነገር ግን
ጥሪውን ይፈቅዳል። በregistry በኩል ሳያልፉ prompt-ዎችን መገምገም
ለሚፈልጉ ጠሪዎች፣ የጋራ helper የሆነው `evaluatePromptInjection()`ም ወደ ውጭ ይላካል።

**የቅኝት ገደብ (v3.8.20):** detector-ው ከተጣመረው prompt ጽሑፍ
**የመጀመሪያውን 16 KB** ብቻ ይመረምራል — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) በ
`src/shared/utils/inputSanitizer.ts` ውስጥ። `detectInjection()` እና
`evaluatePromptInjection()` ሁለቱም የpattern loop-ውን ከማስኬዳቸው በፊት
`slice(0, MAX_INJECTION_SCAN_BYTES)`ን ይጠቀማሉ። የInjection መመሪያዎች ከግቤቱ የላይኛው ክፍል አቅራቢያ ስለሚገኙ፣
ይህ ማወቂያውን ሳያዳክም ባለብዙ-መቶ-KB payload-ዎች ላይ የregex CPU/GC አጠቃቀምን ይገድባል (cf.
#3932, #4041)።

### የማረጋገጫ መረጃ መሸፈኛ (`credentialMasker.ts`)

በ**ሁለቱም** ደረጃዎች ላይ፣ በነባሪው ሰንሰለት መጨረሻ (ቅድሚያ `95`) ይሰራል። ታዋቂ የAPI-key / secret-token ቅጦችን ከወጪ payload (የመልዕክት
ይዘት፣ የtool-call ነጋሪ እሴቶች፣ የtool ውጤቶች) **እና** ከprovider ምላሽ ውስጥ ይደብቃል፤ ስለዚህ
ወደ prompt የተለጠፈ (ወይም በtool ውጤት ተመልሶ የተላከ) የማረጋገጫ መረጃ
ወደ upstream provider ወይም ተመልሶ ወደ client እንዳይጋለጥ ያደርጋል።

- **በግልጽ ማንቃት ብቻ**፣ ከPII ድብቀት ጋር ተመሳሳይ ልማድ (ከHard Rule #20 ጋር ተያያዥ)፦
  `settings.credentialRedactionEnabled === true` **ወይም**
  `CREDENTIAL_REDACTION_ENABLED=true` ካልሆነ በስተቀር የተሰናከለ ነው። ሲጠፋ guardrail-ው ምንም አያደርግም —
  ፈጽሞ አያግድም እና ፈጽሞ እንደገና አይጽፍም።
- `redactCredentials()` ሙሉውን የpayload/response ዛፍ (`walkValue()`፣
  ከprototype-pollution የተጠበቀ፣ በ`WeakSet` አማካኝነት ከcycle የተጠበቀ) ይዳስሳል፣ እና ተዛማጅ ክፍሎችን
  በ`[REDACTED:<type>]` placeholder ይተካል፤ በእርግጥ የተቀየሩትን
  ቅርንጫፎች ብቻ ይቀዳል።
- `CREDENTIAL_PATTERNS` የLLM provider ቁልፎችን (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate)፣ የVCS/SaaS token-ዎችን (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord)፣ የክፍያ ቁልፎችን (Stripe, Square)፣ የcloud
  ቁልፎችን (AWS access key, Twilio, SendGrid, Mailgun)፣ private key-ዎችን / JWT-ዎችን፣
  የማረጋገጫ መረጃ የያዙ connection string-ዎችን (`mongodb://user:pass@...`, ወዘተ.)፣ እና
  አጠቃላይ የ`Authorization`/`x-api-key`/`api-key`/`apikey` header-value
  ቅጥን ይሸፍናል። Header ቅርጽ ያላቸው ቁልፎች (`authorization`, `x-api-key`, `api-key`,
  `apikey`) በአጠቃላይ የጽሑፍ regex ሳይሆን በመዋቅራዊ መንገድ ይደበቃሉ (እሴቱ ብቻ፤ እንደ
  `Bearer `/`Basic ` ያለው የscheme ቅድመ ቅጥያ ይጠበቃል)።
- guardrail-ው ፈጽሞ አያግድም፤ እንደገና ይጽፋል (`modifiedPayload` /
  `modifiedResponse`) እና ማብራሪያ ያክላል (`meta.credentialsRedacted`, `meta.count`) ብቻ።

የRegression መከላከያ፦ `tests/unit/credential-masker-guardrail.test.ts`።

## መሠረታዊ ውል (`base.ts`)

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
  block?: boolean; // true ሰንሰለቱን ወዲያውኑ ያቋርጣል
  message?: string; // ሲታገድ ይታያል
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // ጥያቄውን እንደገና ለመጻፍ በ-preCall ይመለሳል
  modifiedResponse?: TValue; // ምላሹን እንደገና ለመጻፍ በ-postCall ይመለሳል
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

አንድ guardrail `void`፣ `{}` ወይም `{ block: false }` በመመለስ "ለውጥ የለም" የሚል ምልክት ይሰጣል። `modifiedPayload`/`modifiedResponse` መመለስ በሰንሰለቱ ውስጥ ወደ ታችኛዎቹ guardrails የሚተላለፈውን እሴት ይተካል።
`signal?: AbortSignal` የጠሪውን የሕይወት ዑደት ወደ guardrails ያስተላልፋል። የጥያቄ ማቋረጥ ሆን ተብሎ የተደረገው ክፍት-በመተው የሚሳካ ልዩ ሁኔታ ነው፦ የሚዲያ ማገናኛዎች ሥራቸውን ያቆማሉ እና ያጸዳሉ፤ ጥሬ ሚዲያን እንደማይደግፈው ወደሚታወቅ ዒላማ ግን አይመልሱም።

## መዝገብ (`registry.ts`)

ብቸኛው `guardrailRegistry` የሚከተሉትን ያቀርባል፦

- `register(guardrail)` — guardrail ያክላል (ወይም በመደበኛ የስም ቅርጹ መሠረት ይተካል)፣ ከዚያም በ`priority` ከዝቅተኛ ወደ ከፍተኛ እንደገና ይደረድራል።
- `clear()` / `list()` — የአስተዳደር ረዳት መሣሪያዎች።
- `runPreCallHooks(payload, context)` — ንቁ guardrailsን በየተራ ያካሂዳል፣ payloadን በ`modifiedPayload` በኩል ያስተላልፋል፣ እና በመጀመሪያው `block: true` ላይ ያቆማል።
- `runPostCallHooks(response, context)` — በምላሹ በኩል ተመሳሳይ ፍሰትን ይከተላል።
- `resetGuardrailsForTests({ registerDefaults })` — ለንጹሕ የሙከራ ማግለል ሁኔታውን ያጸዳል፣ እና እንደ አማራጭ ነባሪዎቹን እንደገና ይመዘግባል።

ሁለቱም አስኪያጆች `{ blocked, payload|response, results, guardrail?, message? }` ይመልሳሉ፤ በዚህ ውስጥ `results` ለእያንዳንዱ guardrail `blocked`፣ `skipped`፣ `modified`፣ `error` እና `meta` መስኮችን የሚያካትቱ የ`GuardrailExecutionResult` መዝገቦች ድርድር ሲሆን፣ ለክትትል ጠቃሚ ነው።

### Guardrailsን በእያንዳንዱ ጥያቄ ማሰናከል

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` ለአሁኑ ጥያቄ መዝለል ያለባቸውን የguardrail ስሞች ድግግሞሽ የተወገደለት ዝርዝር ያሰባስባል። ምንጮቹ (ሁሉም አማራጭ፣ ሁሉም የሚዋሃዱ)፦

- `apiKeyInfo.disabledGuardrails`
- የጥያቄ አካል `disabledGuardrails` (ከፍተኛ ደረጃ)
- የጥያቄ አካል `metadata.disabledGuardrails`
- ራስጌ `x-omniroute-disabled-guardrails` (ወይም የቀድሞው
  `x-disabled-guardrails`)

እሴቶቹ የሕብረቁምፊዎች ድርድር ወይም በኮማ የተለየ ሕብረቁምፊ ሊሆኑ ይችላሉ፤ ስሞች ወደ ትንሽ ፊደል kebab-case (`pii_masker` → `pii-masker`) ይደበኛሉ። ውጤቱ በ`context.disabledGuardrails` በኩል ወደ መዝገቡ ይተላለፋል፤ መዝገቡም ተዛማጅ guardrailsን ይዘላል (`skipped: true` በ`results` ውስጥ)።

## የአፈጻጸም ቅደም ተከተል

በ`src/sse/handlers/chat.ts` እና
`open-sse/handlers/chatCore.ts` በኩል ለሚያልፍ ለእያንዳንዱ ጥያቄ፦

1. `resolveDisabledGuardrails(...)` ከAPI ቁልፍ፣ ከbody እና
   ከheaders የመዝለያ ዝርዝሩን ይገነባል።
2. `guardrailRegistry.runPreCallHooks(body, ctx)` guardrailsን በቅድሚያ
   ደረጃቸው ከዝቅተኛ ወደ ከፍተኛ ቅደም ተከተል ያስኬዳል፦
   - የተሰናከሉ guardrails እንደ `skipped` ይመዘገባሉ።
   - የእያንዳንዱ guardrail `preCall` በ`modifiedPayload` አማካኝነት payloadን እንደገና ሊጽፍ ይችላል።
   - የመጀመሪያው `block: true` ሰንሰለቱን ወዲያውኑ ያቋርጣል፣ እና handlerው
     የguardrail ውድቅ ማድረጊያ ምላሽ ይመልሳል።
3. (ሊሻሻል የሚችለው) payload ወደ combo routing እና upstream
   dispatch ይገባል።
4. ምላሹ ከተዋቀረ በኋላ፣ `guardrailRegistry.runPostCallHooks(...)`
   በምላሹ ላይ ያንኑ ሰንሰለት ያስኬዳል። እዚህ ያለ `block: true` የupstream
   ምላሹን ይጥላል።

ስህተት የሚያስነሱ guardrails በ`error: <message>` ይመዘገባሉ፣ እንዲሁም በ
`logger.warn` በኩል log ይደረጋሉ፤ ነገር ግን ሰንሰለቱ ይቀጥላል — ይህ በንድፍ fail-open ነው።

## ውቅር

አብሮ በተሰሩት guardrails የሚነበቡ የአካባቢ ተለዋዋጮች፦

| ተለዋዋጭ                                 | የሚጠቀምበት                   | ውጤት                                                                                        |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | ማወቂያውን ሙሉ በሙሉ ለማሰናከል `false` ያድርጉ።                                                         |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | የinjection ፖሊሲ፦ `warn`፣ `block` ወይም `log`። የቀድሞው `redact` እሴት የinjection ጽሑፍን እንደገና አይጽፍም። |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | የinjection guard ሁነታ፤ እንዲሁም የenv varsን **የሚሽር** የDB feature flag ነው (DB > ENV)።            |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block` ውድቅ የሚያደርገው ዝቅተኛው የከባድነት ደረጃ፦ `high` (ነባሪ)፣ `medium` ወይም `low`።               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | የ`INPUT_SANITIZER_BLOCK_THRESHOLD` የቀድሞ alias።                                             |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` ሲሆን፣ በጥያቄው ውስጥ ያለ PII ይሰወራል (ከinjection ሁነታ ነጻ ነው)።                                 |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | በምላሽ በኩል ያለውን masker ባህሪ ይቆጣጠራል።                                                           |

የModality Bridge guardrails የruntime ውቅርን ከDB-backed settings
store (`getSettings()`) ያነባሉ፣ ከenv vars አይደለም። የVision ዋና ቁልፎች
`modalityBridgeVisionEnabled`፣ `modalityBridgeVisionMode`፣
`modalityBridgeVisionModel`፣ `modalityBridgeVisionTaskAware`፣
`modalityBridgeVisionPrompt`፣ `modalityBridgeVisionTimeout`፣
`modalityBridgeVisionMaxImages`፣ `modalityBridgeVisionMaxChars`፣
`modalityBridgeCacheEnabled`፣ `modalityBridgeCacheTtlMinutes` እና
`modalityBridgeCacheMaxEntries` ናቸው። የቀድሞዎቹ
`visionBridge*` ቁልፎች በሰነድ እንደተገለጸው ለአንድ ዑደት የንባብ
fallback ብቻ ተቀባይነት አላቸው፤ dashboard ጽሁፎች ዋና ቁልፎቹን ይጠቀማሉ። ነባሪዎቹ እና fallback
resolverው በ`src/shared/constants/modalityBridgeDefaults.ts` ውስጥ ይገኛሉ፣ የቀድሞ
constants ደግሞ በ`src/shared/constants/visionBridgeDefaults.ts` ውስጥ ተይዘዋል።

Audio `modalityBridgeAudioEnabled`፣ `modalityBridgeAudioModel`፣
`modalityBridgeAudioTimeout` እና `modalityBridgeAudioMaxClips`ን፣ እንዲሁም የጋራ
`modalityBridgeCache*` settingsን ይጠቀማል። እነዚህ
ቁልፎች ከModality Bridge schema ጋር ስለተዋወቁ፣ Audio የቀድሞ ቁልፍ fallback የለውም።

Video `modalityBridgeVideoEnabled`፣ `modalityBridgeVideoAnalysisMode`፣
`modalityBridgeVideoModel`፣
`modalityBridgeVideoFrameCount`፣ `modalityBridgeVideoSamplingPolicy`፣
`modalityBridgeVideoMaxVideos` እና
`modalityBridgeVideoTimeout`ን፣ እንዲሁም የጋራ `modalityBridgeCache*` settingsን ይጠቀማል።
FFmpeg/ffprobe አማራጭ የክወና
ጥገኞች በመሆናቸው፣ እንዲሁም የframe captioning መዘግየትን እና የmodel ወጪን ስለሚጨምር፣ በነባሪ ተሰናክሏል።

## ብጁ መከላከያዎች

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

ደረጃዎች፦

1. `BaseGuardrail`ን የሚወርስ `src/lib/guardrails/myGuardrail.ts` ይፍጠሩ።
2. `preCall` እና/ወይም `postCall`ን ይተግብሩ።
3. በመጫን ጊዜ ይመዝግቡ (`registerDefaultGuardrails` ውስጥ ያክሉ) ወይም
   በአሂድ ጊዜ `guardrailRegistry.register(...)`ን ይጥሩ — መዝገቡ ተመሳሳይ መደበኛ የተደረገ ስም ያለውን
   ቀደምት መከላከያ ይተካል።
4. ሙከራዎችን በ`tests/unit/` ስር ያክሉ (ያሉ ምሳሌዎች፦
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`)።

## ሙከራ

ከታወቀ ሁኔታ ለመጀመር በሙከራዎች መካከል `resetGuardrailsForTests()`ን ይጠቀሙ።
ባዶ መዝገብ ለመጀመር `{ registerDefaults: false }`ን ያስተላልፉ እና
በሙከራ ላይ ያሉትን መከላከያዎች ብቻ ይመዝግቡ። Vision Bridge የጥገኝነት
ማስገባትን (`deps.getSettings`, `deps.callVisionModel`) ይቀበላል፤ Audio Bridge ደግሞ
ለቅንብሮች፣ ችሎታዎች፣ የSTT ሞዴል ምርጫ፣ የማረጋገጫ መረጃ
ፍተሻዎች እና ወደ ጽሑፍ መቀየር ተመጣጣኝ የማስገቢያ ነጥቦችን ያቀርባል። ስለዚህ ሙከራዎች ያለ DB
ወይም የአውታረ መረብ መዳረሻ ሁለቱንም ፍሰቶች ሊፈትኑ ይችላሉ።

## በተጨማሪ ይመልከቱ

- `src/lib/guardrails/` — ትግበራ
- `src/shared/utils/inputSanitizer.ts` — የprompt-injection እና PII መሸፈኛን የሚያንቀሳቅስ
  የጋራ ማወቂያ
- `src/shared/constants/visionBridgeDefaults.ts` — የVision Bridge ነባሪዎች እና
  የግዳጅ-ድልድይ ሞዴል ዝርዝር
- `src/shared/constants/modalityBridgeDefaults.ts` — የጋራ Vision/Audio የአሂድ ጊዜ ነባሪዎች
- `docs/architecture/RESILIENCE_GUIDE.md` — ራሱን የቻለ ንብርብር (የወረዳ መቋረጫ፣ የማቀዝቀዣ ጊዜያት)
- `docs/reference/ENVIRONMENT.md` — ሙሉ የenv var ማጣቀሻ

## የInjection-guard መስመር ሽፋን እና red-team (Phase 8 · Block D)

injection-guard (`createInjectionGuard` / `withInjectionGuard`) የተጠቃሚ መጠየቂያዎችን የሚቀበሉ ሁሉንም መስመሮች
ይሸፍናል። `INJECTION_GUARD_MODE`ን ያከብራል (ነባሪ `warn` = መዝገብ ላይ ማስፈር ብቻ፤
`block` = HTTP 400 `SECURITY_001`ን ይመልሳል)።

| ዓይነት     | መስመሮች                                                                                                                                                | ነባሪ ሁነታ |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| ጽሑፍ (ያለ) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn    |
| አመንጪ     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn    |
| ውሂብ      | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn    |

የጽሑፍ ማውጣት (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`ን ይሸፍናል።

**Red-team (በየሌሊቱ፣ `nightly-llm-security.yml`)፦** promptfoo እያንዳንዱ መስመር
በ`INJECTION_GUARD_MODE=block` ውስጥ የOWASP-LLM ኮርፐስን እንደሚከለክል ያረጋግጣል፤ garak ምርመራዎችን ያካሂዳል (ሚስጥር ከሌለ ይዘላል)።
`moderations` ለወጥነት ተካትቷል — በblock-mode ያሉ ኦፕሬተሮች
በ`resolveDisabledGuardrails` በኩል ነፃ ሊያደርጉት ይችላሉ።

የሌሊቱ የስራ ፍሰት (`.github/workflows/nightly-llm-security.yml`፣ cron + በእጅ
ማስጀመሪያ) ሁለት ስራዎች አሉት፦

- **`promptfoo-guard` (ከልካይ)** — `promptfoo eval -c promptfooconfig.yaml`ን
  በ`INJECTION_GUARD_MODE=block` ያሂዳል። እያንዳንዱ ተቃዋሚ የሙከራ ሁኔታ (ለምሳሌ፣ "ignore all
  previous instructions…", የDAN ቅጥ ያላቸው jailbreaks) ምላሹ
  `error.code === "SECURITY_001"`ን እንደያዘ ያረጋግጣል፣ ማለትም መከላከያው ጥያቄውን በትክክል ውድቅ አድርጓል።
- **`garak` (አማካሪ)** — garakን ከአካባቢያዊ OmniRoute አጋጣሚ (`http://localhost:20128/v1`) ጋር
  `--probes promptinject,dan,leakreplay` በመጠቀም ያሂዳል። በአቅራቢ ሚስጥር
  (`PROMPTFOO_PROVIDER_KEY`) ላይ የተመሠረተ ነው፤ ሚስጥሩ ከሌለ ያለችግር ይዘላል እና
  `|| true` ይታከልበታል፣ ስለዚህ CIን ሳያሳክት ሪፖርት ያደርጋል።

የመከላከያ ረዳቱ (`createInjectionGuard` / `withInjectionGuard`) ሽፋን
መጠየቂያ የያዙ ሁሉንም `/v1` መስመሮች ያካትታል፤ የመጠየቂያ ጽሑፍ በ
`src/shared/utils/inputSanitizer.ts` ውስጥ ባለው `extractMessageContents()` አማካኝነት ከ
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ይወጣል።
