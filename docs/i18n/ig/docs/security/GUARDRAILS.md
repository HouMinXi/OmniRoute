# Guardrails (Igbo)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Isi mmalite nke eziokwu:** `src/lib/guardrails/`
> **Emelitere ikpeazụ:** 2026-08-29 — v3.8.51 (Video Bridge transcript provenance bụ nke onye kpọrọ ọrụ kwupụtara,
> sava enyochabeghị ya — akọwapụtara nke ọma dịka #11661)

Guardrails na-amanye nchekwa, amụma, na mgbanwe ọdịnaya n'ókè dị
n'etiti OmniRoute na ndị na-eweta ọrụ upstream. Guardrail ọ bụla nwere ike inyocha (ma
ọ bụrụ na achọrọ, jụ, gbanwee, ma ọ bụ tinye nkọwa na) payload arịrịọ (`preCall`) na
nzaghachi upstream (`postCall`).

Sistemụ ahụ bụ **fail-open**: ọ bụrụ na guardrail atụpụta njehie mgbe ọ na-arụ ọrụ, registry
na-edekọ njehie ahụ ma gaa n'ihu na guardrail na-esote kama ime ka
arịrịọ ahụ daa. Igbochi bụ mkpebi doro anya (`block: true`), ọ bụghị ihe mberede.

## Nchedo Ndị E Wụnyere N'ime Sistemụ

Ndebanye aha ahụ na-ebunye nchedo isii na-akpaghị aka dịka usoro mkpa ha si dị mgbe a na-eme mbubata
(lee `registry.ts` → `registerDefaultGuardrails()`):

| Mkpa | Aha                 | Oge            | Faịlụ                 |
| ---- | ------------------- | -------------- | --------------------- |
| `5`  | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`  | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`  | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10` | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20` | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95` | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nọmba mkpa ndị dị ala na-arụ ọrụ **mbụ**.

### Njikọ Ọhụụ (`visionBridge.ts`) — Njikọ Modality PR-1

Ọ na-ejide arịrịọ nwere onyonyo ndị ezubere maka **ụdịdị na-enweghị ikike ọhụụ** ma
bugharịa arịrịọ ahụ dum gaa n'ụdịdị nwere ikike ọhụụ, ma ọ bụ dochie akụkụ
onyonyo ndị ahụ na nkọwa ederede nke ụdịdị ọhụụ a pụrụ ịhazi mepụtara tupu
oku upstream ahụ. Nke a na-eme ka ndị na-enye ọrụ ederede naanị nwee ike ijikwa
payload multimodal n'ụzọ doro anya.

Usoro:

1. Mafere ma ọ bụrụ na ụdịdị e lekwasịrị anya akwadoworị ọhụụ (belụsọ ma ọ dị na
   ndepụta njikọ a manyere `isVisionBridgeForcedModel`).
2. Wepụ akụkụ onyonyo site na `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), nke na-enyefe ọrụ ahụ n'aka **ngwa nchọpụta mgbasa ozi
   jikọtara ọnụ** `detectMediaParts()` dị na `open-sse/utils/mediaParts.ts` — ya bụ
   naanị isi iyi eziokwu a na-ekekọrịta ya na nzacha ndakọrịta combo.
   A na-amachi mwepụta ahụ naanị n'akụkụ ndị dị n'elu nwere ọdịdị ndị
   `replaceImageParts` nwere ike itinyeghachi (nkwekọrịta extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, na Responses API `input_image`. Ihe achọtara n'ime akụkụ
   ndị ọzọ na ọdịdị ndị bụ naanị ihe ngosi bụ ihe nzacha combo, a naghị ewepụkwa ha.
   Mafere ma ọ bụrụ na ahụghị nke ọ bụla.
3. Kpebie nhazi runtime site na `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): igodo ntọala `modalityBridge*`
   ọhụrụ na-ebute ụzọ; igodo `visionBridge*` ochie ka na-arụ ọrụ dịka **fallback nke
   otu okirikiri** (oghere rollback). Mafere tupu ịgafe mgbasa ozi ọ bụla mgbe
   agbanyụrụ njikọ ahụ.
4. Onye nhọpụta mode (`modalityBridgeVisionMode`, lee tebụl dị n'okpuru) na-ekpebi
   ma a ga-eme reroute ka ọ bụ describe. Reroute na-eweghachi `modifiedPayload` ebe
   ọ bụ naanị `model` ka agbanwere, tinyere meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ụzọ describe: kpaara onyonyo na `maxImages`, hazie prompt nke maara ọrụ a na-arụ,
   lelee cache describe, kpọọ ụdịdị ọhụụ ahụ **n'otu oge**
   (`Promise.allSettled`), ma tinye akụkụ ederede `[Image N]: <description>` n'ọnọdụ
   ha. Describe dara ada na-ewepụta `null`, a na-**echekwakwa** akụkụ onyonyo mbụ ahụ
   (#4012) — belụsọ n'ụzọ combo describe mgbe describe niile dara, ebe upstream
   ekwenyesiri ike na ọ nweghị ikike ọhụụ na-enweta stub
   `(adịghị — ọ nweghị onye na-enye ọrụ nwere ikike ọhụụ ejikọrọ)` kama (#8430).
6. Weghachi `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Onye nhọpụta mode (`modalityBridgeVisionMode`)

| Mode       | Ndabara | Omume                                                                                                                                                                                                                                                  |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔       | Heuristic ochie, agbanweghị ya (#6640/#7204): ụdịdị na-abụghị combo/`auto/` na-eme reroute gaa n'ụdịdị ọhụụ kacha mma belụsọ ma ụdịdị mbụ ahụ enwelarị nzere a pụrụ iji (mgbe ahụ, mee describe); ebe combo lekwasịrị anya na-eme describe mgbe niile. |
| `describe` |         | Na-eme describe mgbe niile — a na-amafere ngọngọ reroute kpamkpam; ụdịdị onye ọrụ họọrọ na-aza mgbe niile.                                                                                                                                             |
| `reroute`  |         | Manye reroute: a na-agafe nchedo keep-credentialed-model. Nchedo nzere nke **ebe** reroute ka na-emetụta — mgbe enweghị ebe ọhụụ a pụrụ iji, arịrịọ ahụ na-adaba na describe ka onyonyo raw ghara iru backend ederede naanị (#8430).                   |

Mode ndị a manyere na-eme short-circuit **tupu** heuristic auto amalite; omume `auto`
bụ otu ihe n'ogo byte dịka nchedo dị tupu PR-1.

#### Oke API-key (`visionBridgeKeyScope.ts`)

Mgbe API key nke onye na-akpọ oku machibidoro `allowedConnections`, ọdọ quota
(`allowedQuotas`) ma ọ bụ ụdịdị (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), njikọ ahụ na-ahọrọ
naanị ụdịdị reroute na describe igodo ahụ nwere ike iji, n'elu njikọ ndị igodo ahụ
nwere ike iji. Oku describe ahụ na-agafe mgbe niile n'ime self-loop OmniRoute site
na header `x-omniroute-self-loop-key-id`, ka arịrịọ chat nke na-anata ya wee tinye
amụma njikọ na ụdịdị nke igodo ahụ n'ọrụ ọzọ. `enforceApiKeyPolicy()` na-asọpụrụ
header ahụ naanị mgbe self-loop bearer sokwa ya, ya mere ọ nwere ike naanị ibelata
ohere nnweta, a na-ajụkwa id nke a na-apụghị ịchọpụta.

Ọ bụrụ na enweghị ụdịdị ọhụụ e kwere maka igodo ahụ, ụzọ describe na-apụ n'akụkụ,
arịrịọ ahụ agafekwa n'agbanweghị, otu omume fail-open ahụ dịka nchedo agbanyụrụ
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Arịrịọ ndị na-enweghị igodo, na igodo ndị na-enweghị mmachi ndị a, na-akpa otu
omume ahụ kpọmkwem dịka ha si eme na mbụ.

#### Prompt describe maara ọrụ (`modalityBridgeVisionTaskAware`)

Ndabara bụ **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) na-agbakwunye
ederede nke **ozi ikpeazụ onye ọrụ zitere** (e belatara ya ruo mkpụrụedemede 500) na
prompt describe bụ isi, na-eduzi nkọwa ahụ ka ọ lekwasị anya n'ihe onye ọrụ jụrụ
n'ezie (usoro codex-vision-proxy), ma na-arịọ vision model ka o depụta ederede a
na-ahụ anya. Mgbe flag ahụ gbanyụrụ — ma ọ bụ na enweghị ederede onye ọrụ — a
na-eji prompt bụ isi ahụ n'enweghị mgbanwe.

Arịrịọ OpenAI-compatible nke describe self-loop n'onwe ya (`callVisionModelSingle()`
n'ime `visionBridgeHelpers.ts`) na-arịọ `image_url.detail: "high"` mgbe niile —
n'enweghị ọnọdụ ọ bụla, maka caller/provider ọ bụla, na-adabereghị na mgbaàmà
ọ bụla sitere n'aka client. Low-detail sampling na-ebelata izi ezi OCR kpọmkwem
maka ọrụ transcription ederede nke prompt a na-arịọ, ya mere describe call
n'onwe ya na-arịọ high detail mgbe niile n'agbanyeghị detail level nke arịrịọ
mbata mbụ jiri. Nke a na-emetụta naanị body nke arịrịọ describe dị n'ime; ọ
naghị agbanwe etu OmniRoute si eziga `image_url.detail` nke caller n'arịrịọ bụ
isi — a na-etinye ndabara ahụ iche, naanị maka OpenCode clients achọpụtara,
n'ime `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Alaka Anthropic wire-format nke describe self-loop enweghị field `detail`,
ya mere ndabara abụọ ahụ anaghị emetụta ya.

#### Oke mmepụta describe (`modalityBridgeVisionMaxChars`)

| Key                            | Ndabara | Oke                   |
| ------------------------------ | ------- | --------------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` ma ọ bụ 100–50000 |

`0` (ndabara) pụtara **enweghị oke** — a na-ebufe nkọwa `callVisionModel()`
weghachiri n'enweghị mgbanwe, nke na-echekwa omume dị ugbu a. Uru ọ bụla
n'ime oke 100–50000 na-ebipụ nkọwa ahụ ma tinye suffix `…` tupu etinyeghachi
ya dị ka `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` n'ime
`src/lib/guardrails/visionBridge.ts`). Bulie nke a maka ọrụ OCR nwere ọtụtụ
nkọwa ebe downstream model chọrọ transcription zuru ezu; wedata ya iji gbochie
ojiji token nke vision models na-emepụta ọtụtụ okwu. Field dashboard ahụ dị na
panel Advanced nke taabụ Vision (`modality-bridge-max-chars` n'ime
`ModalityBridgeVisionTab.tsx`) ma na-ebuli uru ọ bụla dị n'etiti 1 na 99 ruo
na opekempe 100, ebe ọ na-ahapụ `0` e nyere kpọmkwem ka ọ dị — `0` bụ uru Zod
ziri ezi n'onwe ya
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ọ bụghị naanị
ndabara "edoghị".

#### Cache describe (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL dị na ebe nchekwa, nke process niile na-ekekọrịta.
Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)` nwere
length-prefix framing (enweghị nkukota n'ókè field). Akụkụ model bụ bridge
model **ahaziri**, ọ bụghị model zara n'ezie — `callVisionModel` nwere ike iji
fallback n'ime ya, ma iji attempt ọ bụla mee key ga-ekewasị cache. A naghị
echekwa describe dara ada na cache. Ntọala:

| Key                             | Ndabara | Oke     |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Ịhazigharị image dị anya (self-loop describe/base64 fetch)

Mgbe bridge n'onwe ya wetara image **dị anya** — ma Anthropic describe
self-call ma claude-wire-format base64 conversion
(`ensureBase64ImagesForClaudeWire`), ha abụọ site na
`fetchRemoteImageAsDataUri()` n'ime `visionBridgeHelpers.ts` — a na-ebufe data
URI e mepụtara n'ime `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) tupu etinye ya n'arịrịọ vision-model.
A na-ewedata nha images buru oke ibu ruo **2048px n'akụkụ kachasị ogologo**
(nke kwekọrọ na resize cap OpenAI/Anthropic tinyewororị n'akụkụ server), nke
na-ebelata bytes/latency nke upload n'agbanweghị ihe vision model na-ahụ.
Resize na-eji `sharp`, nke a na-ebunye site na dynamic import: n'elu platform
ebe native binary ya anaghị ebunye, `normalizeDataUri()` **anaghị atụba
njehie ma ọlị** — ọ na-alaghachi n'ịbufe bytes mbụ dịka ha dị, ka ụzọ
describe/base64-conversion wee nọgide na-arụ ọrụ mgbe niile. A na-ebufekwa
bytes na-abụghị image (fetch nke na-eweghachighị image a pụrụ ịdecode) dịka ha
dị n'enweghị mgbanwe. Normalization a metụtara naanị images bridge wetara maka
self-call nke ya — anaghị etinye ya ma ọlị na raw passthrough payload nke
caller, n'ikwekọ na ụkpụrụ mgbanwe opt-in-only (Iwu Siri Ike #20).

#### Schema ntọala + migration

A na-eji Zod akwado key ọhụrụ `modalityBridge*` n'ime `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, na otu
`modalityBridgeAudio*` nke Audio Bridge na-eji. Migration
`141_modality_bridge_settings.sql` na-edetuo uru legacy `visionBridge*` dị ugbu
a na key ọhụrụ kwekọrọ na ha (idempotent, ọ naghị edochi uru
`modalityBridge*` operator setịpụla); a ka na-anabata legacy keys dịka read
fallback ruo otu release cycle.

#### Header nghọta doro anya + stats

Nzaghachi describe gbanwere na-ebu
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(nke `buildModalityBridgeHeader()` wuru n'ime `modalityBridge/bridgeStats.ts`,
nke `withModalityBridgeHeader()` tinyere n'ime
`src/sse/handlers/chatHelpers.ts`). Arịrịọ e reroute-enweta **enweghị** header —
emetụghị payload ahụ aka, ma model swap apụtalarị ìhè na field `model` dị na
response body.

`GET /api/modality-bridge/stats` (nkwenye njikwa, otu ọkwa dị ka
`GET /api/settings`) na-eweghachi ọnụọgụ ndị a na-echekwa na ebe nchekwa maka modality ọ bụla
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` maka `vision`, `audio`, na
`video`. `averageLatencyMs` na-eji `latencySamples`, ọ bụghị mbọ niile, dịka
ọnụọgụ nkewa ya; ọrụ na-enweghị nha oge anaghị emepụta ihe nlele efu-millisecond
n'ụzọ aghụghọ. `bridged` ka bụ aha ọzọ dakọtara na nsụgharị ndị gara aga maka
ntụgharị ndị gara nke ọma; mbọ dara ada anaghị abawanye ya.
Dịka e mere ya, ọnụọgụ ndị a na-amalitegharị mgbe usoro ahụ malitegharịrị
(telemetry, ọ bụghị ndekọ ego).

#### Nhazi dashboard

Ibe dashboard pụrụ iche bụ
`/dashboard/settings/modality-bridge`. Taabụ `Vision`, `Audio`,
na `Video` ya ndị URL nwere ike ịkpọ ozugbo na-echekwa query parameters mgbe ha
na-agbanwe uru `tab`.
Taabụ Vision na-enye njikwa mgbanye, mode, nhọrọ model (gụnyere ndabara
akpaka), prompting dabere na task, oke timeout/image/description-length/cache
dị elu, ọnụọgụ runtime, na sample request e chebere nke ọma. Taabụ Audio
na-arụkwa ọrụ: ọ na-enye njikwa mgbanye, ihe nhọpụta model naanị maka STT nke
nwere Auto, oke timeout/max-clip, ọnụọgụ audio, na nnwale sample `input_audio`.
Taabụ Video na-arụ ọrụ: ọ na-akọ ọnọdụ runtime FFmpeg/ffprobe — otu n'ime ọnọdụ
UI anọ akọwapụtara (`unknown` mgbe probe ka na-aga n'ihu ma ọ bụ na ọ nweghị ike
ịrụcha, `restricted` na dashboard host na-abụghị loopback ebe a na-awụfe probe
n'akụkụ client, `unavailable` mgbe e nyochachara ma kwenye na ọ dịghị, ma ọ bụ
`available` tinyere ụdị FFmpeg/ffprobe) — na-echekwa oke enable/model/frame/video/timeout,
na-enyocha ihe nhọpụta model ka ọ bụrụ naanị model ndị nwere ike ịhụ ihe, ma
na-egosi ọnụọgụ video.

Kaadị Vision Bridge ochie dị n'okpuru ntọala AI bụ njikọ ndakọrịta gaa na ibe
ọhụrụ ahụ; ọ naghịzi ejide oyiri nke abụọ nke fọm ahụ. Media Providers na-ejikọkwa
usoro ọrụ Image-to-Text na Speech-to-Text na taabụ Modality Bridge kwekọrọ na ha
n'ewepụghị ebe nnwale Speech-to-Text dị ugbu a.

**Mwụfe nnabata self-loop:** mgbe oku describe gafere site na `/v1` self-loop nke
OmniRoute n'onwe ya (model provider na-abụghị ọkọlọtọ), sub-request ahụ na-eziga
`x-omniroute-admission-bypass: internal` ma jiri credential self-loop a chọpụtara
mee nkwenye — sentinel `sk_omniroute` mpaghara na local mode, ma ọ bụ env key
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` onye ọrụ nhazi setịpụrụ (#1350), ka deployment
ndị nwere `REQUIRE_API_KEY=true` ka nwee ike ịkpọ oku describe. A na-anabata
mwụfe ahụ naanị maka credential ndị ahụ kpọmkwem, ya mere client mpụga enweghị
ike iji header ahụ gafere nnabata.

Ndabara legacy dị na `src/shared/constants/visionBridgeDefaults.ts`; ndabara
mode/task-aware/cache ọhụrụ na settings resolver dị na
`src/shared/constants/modalityBridgeDefaults.ts`. Guardrail ahụ na-enye nhọrọ
constructor `deps` ka nnwale nwee ike itinye mmejuputa `getSettings` na
`callVisionModel` adịgboroja.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Ọ na-egbochi arịrịọ chat nwere audio tupu ha erute target a na-amaghị na ọ
na-anabata ntinye audio. Ọ dịghị mgbe ọ na-atụgharị ụzọ arịrịọ chat ahụ: a na-ede
akụkụ audio ka ha bụrụ ederede site na endpoint multipart dị ugbu a nke dakọtara
na OpenAI, model chat ahọrọ wee jiri transcript ederede gaa n'ihu.

Usoro:

1. Chọpụta `supportsAudio` site na `getResolvedModelCapabilities()`. Metadata
   provider-registry akọwapụtara nwere ihe mbụ, metadata model static esochie,
   wee bụrụ `modalities_input` emekọrịtara. Ndepụta ntinye ekwuputara nke na-enweghị
   `audio` bụ `false`; enweghị ihe akaebe capability ọ bụla na-anọgide `null`.
   Ma `false` ma `null` na-eme ka bridge nchekwa ahụ rụọ ọrụ, ebe `true`
   na-awụfe ya.
2. Chọpụta ntọala `modalityBridgeAudio*` ma wepụta akụkụ audio top-level ndị a
   pụrụ ịtinye n'ebe ọzọ site na message ọ bụla site na detector
   `detectMediaParts()` nke a na-ekekọrịta. Ụdị wire a na-akwado bụ OpenAI
   `input_audio`, `audio_url`, na `source.media_type: "audio/*"`. A na-achọpụta
   audio nested maka routing mana splice path anaghị ewepụ ya. A na-amachi ọrụ
   site na `modalityBridgeAudioMaxClips`; akụkụ ndị na-esote anaghị agbanwe.
3. Soro `provider/model` ahaziri, ma ọ bụ kwe ka `selectAudioBridgeModel()` gafee
   `AUDIO_TRANSCRIPTION_PROVIDERS` n'usoro catalog kwụsiri ike wee họrọ model mbụ
   nwere credential provider na-arụ ọrụ ma nwee ike iji ya.
4. `callAudioTranscription()` na-atụgharị audio base64/data-URI ka ọ bụrụ `file`
   multipart, ma ọ bụ budata `audio_url` dị anya site na guard outbound naanị
   maka ọha nwere DNS pinning na oke 25 MB. Mgbe ahụ, ọ na-eji POST eziga faịlụ
   ahụ na model ahọrọ gaa na self-loop `/v1/audio/transcriptions` mpaghara, site
   na nkwenye `resolveSelfLoopBearer()`. Route transcription dị ugbu a na-arụ
   nyocha credential nkịtị, njikwa cooldown/rate-limit, na dispatch provider.
5. Oku gara nke ọma na-eji `[Audio N]: <transcript>` dochie akụkụ ha. Oku ndị ahụ
   na-eji `Promise.allSettled` arụ ọrụ: ọdịda nke otu oku na-echekwa akụkụ audio
   mbụ ahụ (#4012 contract). Ọ bụrụ na oku niile ada ma egosipụta na target ahụ
   bụ `supportsAudio === false`, akụkụ ndị ahụ ga-abụ
   `[Audio N]: (adịghị — enweghị STT provider ejikọrọ)` (#8430 contract). Maka
   target amaghị (`null`), nsonaazụ nke ọdịda niile anaghị agbanwe ihe ọ bụla.
   Target egosipụtara na ọ bụ naanị ederede nke na-enweghị credential STT a pụrụ
   iji na-enweta otu stub doro anya ahụ n'emeghị oku netwọkụ.

Transcript ndị gara nke ọma na-eji cache LRU/TTL Modality Bridge nke usoro ahụ
dum. Key ahụ na-ejikọta ntụaka audio, label ọrụ `audio-transcription` kwụsiri
ike, na model STT ahọrọ; anaghị echekwa ọdịda na cache. Mgbalị audio na-emelite
ọnụọgụ `bridged`, `cacheHits`, `failures`, na `lastUsedAt` ndị a na-ekekọrịta.
Nzaghachi a gbanwere na-ebu
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; arịrịọ ndị
a na-agbanwebeghị anaghị enweta segment Audio Bridge.

Ntọala runtime dabere na DB ma Zod na-enyocha ha:

| Igodo                         | Ndabara | Oke                    |
| ----------------------------- | ------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                      |
| `modalityBridgeAudioModel`    | `""`    | Akpaaka ma ọ bụ ID STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                   |

A ka na-ejikwa keeshị nkekọrịta site na `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, na `modalityBridgeCacheMaxEntries`.

### Njikọ Vidiyo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Ọ na-ejide akụkụ vidiyo ndị dị n'ọkwa kachasị elu n'ime `messages` nke Chat Completions na
`input` nke Responses API tupu akpọọ ebe ebumnuche na-enweghị nkwado vidiyo ebumpụta ụwa
a maara. Ụdị ndị akwadoro bụ `input_video`, `video_url`, `video_source`, URL HTTPS,
na URI data `data:video/*;base64,...`. A naghị ele aha faịlụ nkịtị dị n'edemede
anya dị ka vidiyo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) na-ahụ maka ịgagharị arịrịọ, nyocha
ikike/iwu, nchịkọta nke arịrịọ ọ bụla, na payload nzaghachi.
Ọrụ maka vidiyo ọ bụla — inweta ya, keeshị nsonaazụ zuru ezu, ịkọwa usoro frem
(nke na-agwakọta transcript ọdịyo onye na-akpọ ọrụ kwupụtara), yana
metrik/nkwụsị/nchịcha maka mbọ ọ bụla — zoro n'azụ `processVideoPart` dị na
`videoBridgePipeline.ts`, nke a na-akpọ otu ugboro maka akụkụ vidiyo ọ bụla n'ime loop
nke `preCall`. Modul ahụ na-akọwakwa ókè port doro anya `VideoMediaBrokerPort`
(inweta byte na iwepụta frem ndị e mere sample), `VideoAudioTranscriptionPort`
(ịgwakọta transcript ọdịyo onye na-akpọ ọrụ kwupụtara na caption ndị e mere sample), na
`VideoDrilldownPort` (ókè nchekwa-adịgide nke nyocha frem miri emi; ejikọbeghị ya
na `processVideoPart` — ọ bụ naanị route `/api/modality-bridge/video/drilldown`
dị iche na-ede ndenye nyocha miri emi ugbu a).

Ụzọ arịrịọ `/v1` ọha anaghị ebubata ma ọ bụ kpọọ subprocess. A na-ebudata
vidiyo ndị dị anya n'okpuru oke 50 MiB; vidiyo base64 inline nwere oke
36 MiB e decoded maka vidiyo ọ bụla nke edobere nke ọma ka envelopu
model/ozi/framing nwee ike ịnọ n'ime oke nnabata arịrịọ JSON ọha nke 50 MiB.
A na-enyocha ogologo inline na atụmatụ nha decoded tupu ekenye ebe nchekwa. A chọrọ
HTTPS na URL dị anya mbụ nakwa na redirect ọ bụla, site n'iji nche outbound
maka naanị ọha dịbu adị nke nwere DNS pinning. Byte ndị ahụ gafere kpọmkwem ókè broker ime
`POST /api/modality-bridge/video/extract`. Route ahụ bụ ma
`LOCAL_ONLY` ma `SPAWN_CAPABLE`, ọ na-anabata naanị arịrịọ
trusted-loopback nwere nkwenye njirimara pụrụ iche maka process ahụ,
ọ dịghịkwa mgbe ọ na-anabata URL, ụzọ sistemụ faịlụ, executable,
ma ọ bụ ndepụta argument. Usoro oke-nha-body nke API na onye na-agụ body
nke handler n'usoro nta nta na-amanye oke ntinye broker 50 MiB n'adabereghị onwe ha.
Kwú ya nwere oke na-eme otu extraction n'otu oge, na-enye ohere ọrụ anọ na-echere,
ma na-amachi ntinye na-echere na 100 MiB.

N'ime broker ahụ, `ffprobe` na-agụ faịlụ mpaghara nzuzo; ndepụta format
ndị akwadoro nke edobere anaghị etinye format playlist na manifest. Maka container ezinụlọ MOV
ndị akwadoro, a ka na-agbanyụghị ntụaka data MOV mpụga na ndabara, command
edobere anaghịkwa eme ka ha rụọ ọrụ. Ma `ffprobe` ma `ffmpeg` na-eji whitelist protocol
nke bụ naanị `file`, otu thread, array argument edobere, enweghị shell,
na executable ndị e si na `PATH` chọta. Stream cover nke attached-picture abụghị
ndị e nwere ike ịkpọ. Stream niile e nwere ike ịkpọ ga-emezu oke ndị ahụ, a na-ahọrọkwa
stream ndabara e kwuru hoo haa tupu fallback deterministic nke index kacha nta.
A machibidoro vidiyo na sekọnd 600, pikselụ 8,192 n'akụkụ ọ bụla, na
pikselụ isi mmalite 33,554,432. FFmpeg na-eme sample frem JPEG midpoint 1–16,
na-ebelata long edge ruo pikselụ 1,024 kachasị elu n'emeghị ka ntinye pere mpe bawanye,
ọ dịghịkwa mgbe ọ na-enweta URL. Sampling bụ `uniform` na ndabara. Iwu nhọrọ
`scene_aware` na nke nnwale `segment_aware` na-eme otu pass FFmpeg
edobere ọzọ n'elu stream mpaghara a kwadoro, họrọ timestamp scene `showinfo`
nwere oke, wee laghachi n'ụzọ deterministic na midpoint uniform ndị ahụ ma ọ bụrụ na
detector dara, oge agwụ, output adịghị n'ụdị ziri ezi, ma ọ bụ set candidate tọgbọ chakoo.
Ụdị segment-aware na-ekenye sample midpoint n'ogo kwekọrọ na interval scene
ndị a kwadoro; a kọwara ihe akaebe segment-aware na omume fallback n'okpuru.
A na-etinye oke siri ike nke frem 16
mgbe emechara nhọrọ n'iwu ọ bụla. Mgbe arịrịọ scene-aware nwere naanị
mmefu otu frem, ọ na-eji midpoint uniform nke vidiyo zuru ezu nọ n'ọrụ ma ọ bụ windo focus
ma na-akọ `policyEffective: uniform`: otu frem scene ahọpụtara
enweghị ike ichekwa nsọtụ oge abụọ ahụ. Onye na-akpọ ọrụ nwere ike inye
windo focus nwere njedebe (`start`/`end` na sekọnd) dịka nhọrọ; a na-amachi ókè ya
na ogologo oge media, a na-ajụ windo ndị a tụgharịrị ma ọ bụ ndị na-abụghị finite,
a na-emekwa iwu sampling niile naanị n'ime interval a haziri ahazi. A na-etinye
windo si na ya pụta na metadata sampling nakwa na prefix nkọwa a na-atụkwasịghị obi
ka model ndị na-esote nwee ike ịmata ọdịiche dị n'etiti akụkụ e lekwasịrị anya na timeline
zuru ezu.

Focus caption semantic bụ ntọala doro anya dị iche. Ụdị nyocha ndabara `full`
na-echekwa prompt frem dịbu adị, ọ dịghịkwa mgbe ọ na-eziga ederede arịrịọ
na model caption. Na ụdị `focused`, bridge ahụ na-agụ naanị
`text`/`input_text` onye ọrụ dere kachasị ọhụrụ nke na-adịghị efu site n'otu container
Chat ma ọ bụ Responses ahụ, na-ahazi ya ka ọ bụrụ NFC, na-ejikọta mkpụrụedemede njikwa
na whitespace, ma na-amachi ya na code point Unicode 500. Nsonaazụ tọgbọ chakoo
na-alaghachi na prompt `full` ahụ kpọmkwem. A na-ede hint bara uru dị ka JSON n'ime
block untrusted-user-context pụrụ iche, ọ nwekwara ike naanị ibute nkọwa a pụrụ ịhụ ụzọ;
ọ nweghị ike ịkagbu ịdọ aka ná ntị dị iche megide ịgbaso ntụziaka a pụrụ ịhụ
ma ọ bụ ịnụ n'ime media ahụ. Focus ederede anaghị atụpụta `start`/`end` ma ọ bụ gbanwee
sampler oge.

#### Ihe akaebe segment nhazi FU-07

`segment_aware` na-eji otu ngafe nyocha-mbụ nwere oke n’elu iyi vidiyo mpaghara a kwadorola. Usoro nzacha edoziri na-ebu ụzọ wedata nha ruo obosara pikselụ 320 kachasị, chọpụta mgbanwe ọnọdụ na oge vidiyo jụrụ oyi, wee were nlele n’ogo freemu 1 kwa sekọnd maka nhịahụ, nkezi luma, na ozi gbasara oghere/oge. Ngafe ahụ nwere oke nlele nhazi 600, otu thread FFmpeg/filter, otu ndepụta ikike protokol `file`-naanị na akpa faịlụ, oke mmepụta usoro nke 1 MiB, nakwa sekọnd 30 kachasị n’ime nkwụsị/oge-ngwụcha broker nke a na-ekekọrịta. Ọ dịghị mgbe ọ na-anabata iwu, nzacha, ụzọ faịlụ, ma ọ bụ URL sitere na arịrịọ ahụ.

Ụkpụrụ nhazi ndị ahụ bụ ihe akaebe nlele a pụrụ imepụtaghachi otu ụdị, ọ bụghị nghọta ihe vidiyo pụtara. Ha anaghị achọpụta isiokwu, omume, nkọwa ederede, okwu ọnụ, ma ọ bụ ebumnuche onye ọrụ. Ókè mgbanwe ọnọdụ na ókè oge jụrụ oyi na-emepụta ngalaba; mkpuchi oge jụrụ oyi, nhịahụ, mkpughe ọkụ, nkọwa oghere, na mgbanwe oge na-emetụta naanị otu esi ekenye oke freemu 1–16 dị ugbu a. A na-amachi ngalaba jụrụ oyi kpamkpam na otu freemu, ebe ngalaba ndị na-ajụghị oyi na-asọrịta mpi maka oke fọdụrụ. Mgbe ókè ngalaba karịrị ọnụ ọgụgụ freemu, a na-edobe mkpuchi ahịrị oge n’otu n’otu ka mgbanwe ngwa ngwa n’oge mmalite ghara izochi ngalaba ogologo dị n’ikpeazụ. A na-ejikọta ókè ọnọdụ ndị dị n’ime mkpebi nyocha nke sekọnd 1 site n’ókè oge jụrụ oyi.

Nzacha na-efu, ihe akaebe mebiri emebi/efu, njehie ihe nchọpụta, ma ọ bụ ngafe oge nke nyocha-mbụ nwere oke ga-eme ka usoro ahụ laghachi n’atụmatụ kpọmkwem nke etiti oge e kesara n’otu n’otu. Nkwụsị sitere n’aka onye kpọrọ usoro ahụ ma ọ bụ oge-ngwụcha broker anaghị eme ka ọ laghachi n’atụmatụ ahụ: ọ na-akwụsị subprocess na-arụ ọrụ, gbochie iwepụta freemu ọzọ, a na-ewepụkwa osisi faịlụ nwa oge nzuzo n’ime `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` na-emepụta ihe nnwale FFmpeg n’ezie a pụrụ imepụtaghachi otu ụdị maka mbelata oku nkọwa mgbe iwepụtachara oyiri, nkesa oke maka mmegharị juru ebe niile, ihe akaebe nhịahụ/mkpughe ọkụ/SI-TI, mgbanwe ngwa ngwa nwere ọdụ ogologo, na nchọpụta ụgha sitere n’ịjụ nwayọọ nwayọọ. Ọ na-edekọ oge mgbidi nke nyocha-mbụ, ma mgbe `/usr/bin/time` dị, CPU nke child na RSS kachasị elu. Nlele ogo ya bụ naanị ihe nlele ntụaka nhazi. Ogo ezigbo ụdị nkọwa ka bụ `HOLD` n’ihi na harness a enweghị endpoint enyere ikike ma ọ bụ onye ikpe akpọchiri. Nchekwa ego ka bụkwa `HOLD` belụsọ ma `--caption-cost-per-call-usd` nyere atụmatụ doro anya dị mma nke ọnụ ahịa kwa oku; script ahụ anaghị emepụta nsonaazụ ọ bụla n’ime ha n’ụzọ ụgha.

A na-amachi freemu ọ bụla na 4 MiB, freemu raw niile ọnụ na 23 MiB, na nzaghachi broker e serialized na 32 MiB. A na-ewepụ ndekọ nwa oge nzuzo n’ime `finally`. OmniRoute anaghị ebukọ FFmpeg ma ọ naghị anabata ụzọ executable ahaziri iche. Tupu ime nkọwa, bridge ahụ na-etinye usoro iwepụ oyiri anya nke na-akpachapụ anya: a na-ebelata JPEG ọ bụla ka ọ bụrụ buffer grayscale 16×16 ma jiri naanị freemu ikpeazụ e debere tụnyere ya. Maka oke nkọwa a rịọrọ nke karịrị otu freemu, iwepụta na-enye ọdọ ndị ga-ekwe omume nwere oke ruo okpukpu abụọ nke oke ahụ, ọ naghịkwa agafe freemu 16. A na-etinye oke a rịọrọ naanị mgbe ewepụtachara oyiri, ebe a na-echekwa ndị mbụ na ndị ikpeazụ ahọpụtara n’oge mbelata ikpeazụ mgbe oke ahụ dịkarịa ala abụọ. Atụmatụ nwere ụdị mbipute
`grayscale-16x16-mean-cells-v2` na-eji nke ka ukwuu n’etiti mgbanwe nkezi luma na oke mkpụrụ ndụ thumbnail ndị mgbanwe normalized ha dịkarịa ala 0.05. Ọnụ ụzọ oyiri bụ constant 0.04, nke a họọrọ maka ịdị mfe ibu amụma kama ikpughe ya dịka ntọala runtime. Ihe mgbaàmà nke abụọ a nwere nnukwu ọdịiche ọkụ na-echekwa obere mmegharị na mgbanwe ederede a na-ahụ anya nke ntụnyere dabere naanị na nkezi nwere ike izochi. Njehie comparator ma ọ bụ decoder na-eme ka usoro ahụ gaa n’ihu ma debe mkpuchi. Metadata mmepụta na-ekewa ndị a họpụtara ma wepụta, freemu ejiri nke ọma, na oyiri anya ndị ewepụrụ.

Akụkụ vidiyo e kara akara n’ụzọ doro anya nwere ike ịrịọ mpempe kọntaktị nwere timestamp. Bridge ahụ na-ewu grid JPEG nwere kọlụm 4 na freemu 16 kachasị. Mkpụrụ ndụ pikselụ 512 ọ bụla na-etinye timestamp nke isi mmalite ya n’ime band ala nwere nnukwu ọdịiche ọkụ, ebe otu timestamp ndị ahụ ka dị na metadata ederede maka njikọ na nyocha n’usoro ndị na-esote. JPEG zuru ezu ka nwere oke 32 MiB. Ọ bụrụ na `sharp` enweghị ike decode ma ọ bụ hazie grid ahụ, bridge ahụ na-alaghachi n’iji freemu JPEG nke ọ bụla; nkwụsị sitere n’aka client ka na-agafe n’ọrụ mpempe ahụ.

A na-ekewa ihe akaebe maka ịkwalite usoro ahụ n’ụzọ kpachara anya site na microbenchmark nhazi synthetic. `scripts/perf/video-bridge-contact-sheet-eval.ts` na-akọwa harness A/B nwere ụdị schema maka ezigbo ụdị ọhụụ dakọtara na OpenAI. Ọ na-atụ token ndị provider kọrọ, latency mgbidi site na mmalite ruo na njedebe (gụnyere nhazi mpempe), ọnụ ọgụgụ oku model, na njigide eziokwu akọwara na manifest. Anaghị ede nzaghachi raw nke model na akụkọ ahụ; naanị digest SHA-256 na ID eziokwu dakọtara ka a na-edebe. Harness ahụ anaghị eme oku netwọkụ ma ọ bụ oku model akwụ ụgwọ ọ bụla belụsọ ma e nyefere `--execute-real` ma hazie `--model`, `OMNIROUTE_BASE_URL`, na `OMNIROUTE_API_KEY`. Na-enweghị ọsọ ezigbo ahụ e nyere iwu n’ụzọ doro anya, mkpebi ya igwe nwere ike ịgụ ka bụ `HOLD`; nha payload/ọnụ ọgụgụ oku synthetic naanị abụghị ihe akaebe maka ịkwalite usoro ahụ.

Ndị na-akpọ usoro ahụ nwere ike itinye array `transcript.cues` nhọrọ na akụkụ vidiyo akwadoro mgbe ha nwere ederede edozila n’ahịrị oge. Cue ọ bụla ga-ebu `text`, interval `start`/`end` nwere oke n’ime ogologo oge a nyochara, na `source` dị na whitelist (`client`, `embedded`, ma ọ bụ `audio-bridge`); `confidence` na-eji `1` dịka ndabara ma ga-anọ n’etiti `0` na `1`. A na-ejikọta cue ndị bụ oyiri kpọmkwem. OmniRoute anaghị ebido transcription site na metadata a: a na-edetuo cue ndị a kwadoro n’ime nsonaazụ akọwara tinyere source, confidence, na interval, ma gosipụta ha dịka nlebara anya a na-atụkwasịghị obi n’akụkụ nkọwa freemu. A na-ajụ ederede na-adịghị irè, nke gafere oke, ma ọ bụ nke na-enweghị ebe o si pụta kama ịgwakọta ya n’iyi nkọwa. Channel transcript abụọ nke request-body na-eme ka provenance enyere bụrụ `client`, gụnyere label `embedded` ma ọ bụ `audio-bridge` onye zitere ya kwupụtara n’onwe ya. Naanị adapter nke server nwe nwere ike ikenye label ndị ahụ a tụkwasịrị obi site na argument `trustedSource` nke code-naanị; field JSON nke arịrịọ enweghị ike iru argument ahụ. Ederede transcript ka bụ ọdịnaya sitere na media a na-atụkwasịghị obi, n’agbanyeghị provenance ya, ọ gaghịkwa ekpebi ikike ma ọlị.

Onye na-akpọ nwere ahụmịhe nwere ike ịnye track `audioTranscript` maka otu vidiyo ahụ;
a na-ewere ya dị ka ederede onye ahịa nyere, ọ bụghị ihe akaebe na sava mere ntụgharị okwu.
Ebe njikọ ngwakọta ahụ na-eme nyocha anya na nke ọdịyo n'okpuru
otu oge ngwụcha na akara ịkwụsị, na-ahazi ha n'otu usoro oge, na-ejikọta
ihe ndị bụ otu kpọmkwem, ma na-akọ nsonaazụ ezughị ezu mgbe naanị otu akụkụ gara nke ọma.
`audioTranscript` na-adịghị irè na-agbada gaa na nsonaazụ ahụ ezughị ezu — a na-edobe
nkọwa anya ahụ, ebe alaka ọdịyo na-edekọ koodu ọdịda e sachara —
kama ime ka vidiyo ahụ dum daa. A na-echekwa nnweta nke alaka ọ bụla, akara ezughị ezu,
na koodu ọdịda e sachara n'ime nsonaazụ a kọwara, n'ime
metadata usoro nchedo (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), n'ime metadata cache-nsonaazụ, nakwa n'ime counter ngwakọta
bridge. Ụzọ ndabara Video Bridge anaghị akpọ ọrụ ntụgharị okwu-ka-ọ-bụrụ-ederede
ma ọ bụ budata otu mbipụta mgbasa ozi ọzọ; ma e nyeghị track ahụ kpọmkwem, ọ na-anọgide
naanị-vidiyo.

**Nchekwa transcript (#12150 P1).** Nke a na-emetụta onwe ya mgbe ọ bụla
Video Bridge (nke a ga-ahọrọ iji n'onwe ya) gosipụtara cue transcript — enweghị
akara nchekwa ọzọ. Mgbe arịrịọ gosipụtara cue transcript ọ bụla (ma ọ bụ `transcript`
nke onye na-akpọ kwupụtara ma ọ bụ `audioTranscript` agwakọtara), usoro nchedo na-akara ya
`videoBridgeObserved` ma mepụta onyinyo e kpuchiri nke nkọwa vidiyo ahụ —
ngosipụta yiri ya kpọmkwem ebe a na-eji
`[redacted-video-transcript]` dochie ahụ ederede-nwere-onwe nke cue ọ bụla, nke e wuru site n'ịgbanwe mpaghara cue ahaziri
tupu e jikọta eriri ahụ (ọ bụghị site n'ịtụgharị ederede e mere larịị, ya mere ọdịnaya cue ọ bụla —
ma nke mmegide ma nke nkịtị, gụnyere ahụ nwere `]` dịka
`[inaudible]`/`[music]` — enweghị ike ịlanarị). Ahụ arịrịọ call-log echekwara na-eji
onyinyo ahụ e kpuchiri dochie akụkụ ederede ọ bụla sitere na vidiyo, site n'ịtụnyere
ịha nhata nke ọdịnaya; a na-agụgharị anchor `fullText` site na payload usoro nchedo tupu-akpọ
emechara, ya mere ntụnyere ahụ ka na-aga nke ọma mgbe usoro nchedo ndị ọzọ sochirinụ
(ndị na-ekpuchi PII na nzere, nwere priorities 10/95) degharịrị ederede nkọwa ahụ ozugbo,
nakwa mgbe ntinye system-prompt/handoff/memory gbanwere nhazi array ozi ahụ. Ahụ e zigara
elu gaa na model anaghị agbanwe. Arịrịọ a hụrụ anaghịkwa etinye Memory na-adịgide adịgide
(a na-awụpụ mmepụta sitere ma na arịrịọ ma na nzaghachi),
ya mere nzaghachi nke model n'onwe ya enweghị ike ikwughachi ederede transcript n'ime Memory.

**Mpaghara vidiyo raw (#12430).** Mgbe enyere bridge ahụ ohere ma nkwado vidiyo native amaghị ama ma ọ bụ adịghị, mpaghara `transcript`/`audioTranscript` akọwapụtara na-emekwa ka `videoBridgeObserved` rụọ ọrụ, ọbụna mgbe nkọwa dara ma ọ bụ mgbe e ruru oke `maxVideos`. `null` na eriri efu gụnyere; mpaghara na-adịghị na metadata na-abụghị vidiyo anaghị agụnye. Mbipụta echekwara na-ekpuchi mpaghara ndị a ma ọ bụ hapụ arịrịọ ahụ, a na-agafekwa caches/Memory.

N'ụzọ fallback ndị ahụ, cue onye na-akpọ nyere nke ziri ezi na-aghọ akụkụ `text`/`input_text`
a na-akwado kama ịbụ mpaghara provider na-abụghị ọkọlọtọ. Track abụọ onye arịrịọ nyere
na-anọgide dị ka nchọpụta `client` a na-apụghị ịtụkwasị obi, yana ịdọ aka ná ntị doro anya na akọwaghị vidiyo ahụ
nakwa na enyochaghị timestamps ya megide mgbasa ozi ahụ. Oke dị ugbu a nke
cue 256/64-KiB n'ozuzu na nke cue ọ bụla na-emetụta track abụọ ahụ ọnụ;
timestamps ga-adaba n'okpuru oke sekọnd 600 nke broker yana windo focus ọ bụla
e nyere. A na-atụfu track na-adịghị irè, a naghị ebuga ha dịka ederede aka ike; a ka nwere ike iji
sibling ziri ezi ma ọ bụrụ na ngụkọta budget ha agafeghị oke. Mpaghara null/efu
anaghị atụkwasị ederede ọ bụla. Fallback a anaghị agbakwunye iweta mgbasa ozi ma ọ bụ transcription.
A na-ewepụ mpaghara mgbakwunye transcript n'ime carrier vidiyo fallback yana n'ime
object `video_url`/`source` ya. Allowlist wire OpenAI na-anọgide sie ike; carrier vidiyo
unknown-native ka dị, ebe target ama ama nke bụ naanị ederede na-edobe marker nchekwa.
Onyinyo mkpuchi ahaziri na-echebe ederede transcript agbakwunyere, ebe
arịrịọ mbụ onye na-akpọ nwere na-anọgide agbanwebeghị. Target nwere nkwado native na
bridge agbanyụrụ na-edobe omume bypass ha dị ugbu a.

Mbipụta ndị ọzọ echekwara na-eji otu akara arịrịọ-a-hụrụ ahụ. Snapshot raw
nke arịrịọ onye ahịa tupu usoro nchedo, arịrịọ pending dị n'ime ebe nchekwa, na log
arịrịọ-ajụrụ-n'oge na-eji nhazi dochie mpaghara transcript dị n'akụkụ vidiyo;
a na-ekpuchi prompt eriri nke ọkwa pipeline na context handoff mepụtara
n'ebe sink ahụ-arịrịọ-echekwara. Marker `video_content_removed` echekwara
na-eme ka continuation `previous_response_id` mechie na nchekwa kama iwughachi
ederede e kpachaara anya tụfuo. Ọ bụrụ na arịrịọ a hụrụ efunahụ onyinyo mkpuchi nke akụkụ ya
tupu logging, ma ọ bụ ọbụna otu n'ime ọtụtụ onyinyo vidiyo enweghị ike ikwekọ
mgbe mgbanwe arịrịọ ndị mechara, a na-ahapụ ahụ arịrịọ echekwara kpamkpam
kama idobe transcript e kpuchiri naanị n'akụkụ ụfọdụ.

Maka arịrịọ a hụrụ, nzaghachi model nwere ike ikwupụta akụkụ ọ bụla nke
transcript ahụ na-enweghị oke cue ahaziri. N'ihi ya, a na-eji marker nhapụ dochie
`responseBody` call-log echekwara ya; anaghị echekwa artifact pipeline zuru ezu
(nke nwere ike ịgụnye ahụ upstream/client na chunk stream).
Cache semantic, idempotency, na reasoning-replay na-agafe ma ịgụ ma ide
maka arịrịọ ahụ. Arịrịọ provider na nzaghachi onye ahịa na-ahụ na-anọgide
agbanwebeghị. A na-ewepụ byte keepalive mbụ site na buffer nwa oge
mgbe a hapụrụ artifact zuru ezu ahụ. Ịdọ aka ná ntị EventStream na-adịghị mma nke Kiro
na-akọ naanị ọnụọgụ byte nke payload, ọ naghị ekpughe ọdịnaya ya ma ọ bụ raw error
nke JSON parser.
Nke a anaghị ekwu na enyochala diagnostic provider/plugin ọ bụla na-enweghị njikọ;
a na-esochi nyocha sara mbara nke retained-sink na #11658.

Usoro ndụ ime `/api/modality-bridge/video/drilldown` bụ mkpụrụ nchekwa cache dị iche,
nke loopback/token na-eme nkwenye njirimara. Ọrụ ọ bụla chọkwara ID principal opaque
ọkọlọtọ. Tupu e mee ka onye na-akpọ ọrụ mmepụta nwee ike iji ya, ọ ga-ewepụta ID ahụ
site na tenant e nyochara njirimara ya, ọ gaghịkwa eziga uru onye ahịa họọrọ.
Igodo cache na-ejikọta principal ahụ na ID nnọkọ na video-reference ọkọlọtọ,
na-echekwa naanị igodo ndị e si na SHA-256 nweta, ma na-amachi ma ọgụgụ ma nhichapụ
n’otu principal ahụ. Cache ahụ na-echekwa karịa frem JPEG 16 e wepụtara n’otu ndenye,
na-eme ka ha kubie ume mgbe nkeji iri gachara, ma na-akwado ọgụgụ `start`/`end`
a kpara ókè ma ọ bụ nhichapụ nnọkọ doro anya.

A machibidoro principal ọ bụla n’ndenye 16 na data JPEG ọkọlọtọ ruru 64 MiB. Oke ndị ahụ
dị iche na oke zuru ụwa ọnụ nke ndenye 64/256 MiB: nrụgide oke principal na-achụpụ
naanị ndenye principal ahụ ndị a na-ejibeghị ogologo oge tupu a tụlee nchụpụ LRU
zuru ụwa ọnụ. A na-ekpochapụ ndenye kubiela ume na ndekọ principal na nke zuru ụwa ọnụ
mgbe cache na-arụ ọrụ, ebe nkagbu na ọdịda nkwado anaghị etinye nnọchi ezughị ezu.

Cache ahụ na-ajụ Base64 na-abụghị ọkọlọtọ, padding karịrị akarị, mgbasa ozi na-abụghị JPEG,
JPEG ndị ezughị oke ma ọ bụ ndị e bepụrụ, nakwa JPEG ndị na-ebute ịdọ aka ná ntị
mgbe `sharp` na-eme decode onyonyo zuru ezu a kpara ókè. Ọ na-emegharị onyonyo ọ bụla
a nabatara ka ọ bụrụ JPEG ọkọlọtọ, na-enweta obosara na ịdị elu site na bytes e mere decode
kama ịtụkwasị mpaghara onye na-akpọ ya obi, ma na-atụfu bytes polyglot ọ bụla dị n’azụ
kama idobe ha. Ọ bụ naanị buffer mkpakọ ọkọlọtọ a kpara ókè ka a na-agụnye n’oke abụọ ahụ.
Oke JSON wire gụnyere overhead Base64 maka oke decoded-input nke 32 MiB. Nwepụta ọ bụla
e chekwara na-edekọ usoro/nhazi JPEG ya a kwadoro, amụma sampling, ụdị nwepụta,
oge e kere ya, hash ọdịnaya sava gbakọrọ, na ntụaka parent e mere hash tinyere
hash parent-content nke onye na-akpọ a tụkwasịrị obi. A na-enyocha nkagbu n’etiti
usoro decode/hash asynchronous tupu commit cache atomic ahụ.

Akụkụ ọrụ a ejikọbeghị onye nrụpụta mmepụta na route ahụ, ọ naghịkwa enye
nhọrọ variant nwere ọtụtụ resolution. Ya mere, ụzọ arịrịọ Video Bridge doro anya
anaghị ebute ọrụ agbakwunyere, ebe nwepụta principal e jikọtara na tenant na
usoro ndụ FU-08 zuru ezu nke ọtụtụ resolution ka bụ ọrụ nsonye doro anya
kama ịkọwa ha dịka omume arụchaala.

A na-enye frem caption n’usoro site na model Video ahaziri. Override Video efu
na-eketa ntọala Vision; ọ bụrụ na ha abụọ efu, auto-router Vision na-ahọrọ model
nwere ikike vision nke ga-arụ ọrụ. Caption ndị gara nke ọma na-eji prefix
`[Video description:` kwụsiri ike dochie akụkụ mbụ, nke na-egosikwa ederede ahụ
dịka nchọpụta sitere na mgbasa ozi a na-apụghị ịtụkwasị obi ma na-agwa model ndị
na-esote ka ha ghara iso ntuziaka dị na mgbasa ozi ahụ. Igodo cache frame-caption
gụnyere bytes JPEG, prompt, timestamp, na model na-arụ ọrụ; ọ bụ naanị caption
ndị gara nke ọma ka a na-echekwa na cache. Ndenye cache na-ejide model producer
nke gara nke ọma n’ezie, gụnyere model fallback; bridge ahụ na-akọ `mixed` mgbe
model dị iche iche mepụtara frem dị iche iche. Cache hit na-eji njirimara producer
ahụ ọzọ kama ịkpọgharị ya dịka atụmatụ routing a rịọrọ. Igodo cache nsonaazụ
vidiyo dum dabere na input ọ bụla na-agbanwe output — prompt, model na-arụ ọrụ,
amụma sampling, ọnụọgụ frem, mode semantic analysis, fingerprint SHA-256 nke
focus hint e mere normalize, focus window, `transcript`, `audioTranscript`,
na flag contact-sheet — ya mere ịgbanwe akụkụ ọ bụla n’ime ha bụ cache miss,
ọ bụghị iji data ochie ọzọ. Ụdị amụma visual dedup, threshold, na ọnụọgụ candidate-frame
a kpara ókè dịkwa n’igodo na metadata result-cache n’ụzọ doro anya; ya mere,
mgbanwe amụma agaghị eji nkọwa vidiyo dum ochie ọzọ. Metadata result-cache v4
na-edobe mode na fingerprint, ọ naghị edobe raw user task. Metadata guardrail
na-akọ ma mode analysis a rịọrọ ma nke na-arụ ọrụ; a na-akọ mode `focused`
a rịọrọ na-enweghị ederede onye ọrụ bara uru dịka `full` na-arụ ọrụ.

Guardrail ahụ na-ewepụta akụkụ vidiyo niile a na-akwado mana ọ naghị akọwa karịa
`modalityBridgeVideoMaxVideos`. Maka target e gosipụtara na o nwere
`supportsVideo === false`, vidiyo dara ada na ndị gafere oke na-aghọ akara ederede
nchekwa doro anya ka raw video ọ bụla ghara ịlanarị. Mgbe amaghị capability,
akụkụ ndị ahụ na-edobe video carrier ha; transcript fallback ọ bụla na-agbaso
ntụgharị ederede a kpara ókè dị n’elu. Target nwere `supportsVideo === true`
na-agafe bridge ahụ. Abort signal arịrịọ client na-agafe na download, broker queue,
subprocesses, na oku caption; abort na-akwụsị n’etiti vidiyo ma ọ dịghị mgbe ọ
na-ahapụ raw media ka ọ gafee mgbe ọdịda mere.

A na-akwado ntọala runtime site na DB ma jiri Zod kwado ha:

| Igodo                               | Ndabara     | Oke / omume                                                                                                        |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | Oge-ngagharị nhọrọ, a na-ahọrọ iji ya                                                                              |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` na-echekwa nkọwa izugbe; `focused` na-eji ọnọdụ onye ọrụ kacha ọhụrụ, nke nwere oke ma a na-atụkwasịghị obi |
| `modalityBridgeVideoModel`          | `""`        | Keta model Vision Bridge                                                                                           |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                               |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ma ọ bụ `segment_aware` nke dabara n’ogo; ọdịda detector na-alaghachi na `uniform`       |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                     |

A na-amachibido ụkpụrụ timeout Video ochie echekwara nke karịrị sekọnd 120 ka ọ
dabara na deadline broker; a na-ajụ ide ntọala ọhụrụ karịrị oke ahụ.
`GET /api/modality-bridge/video/runtime` chọrọ locality loopback a tụkwasịrị obi
nke e tinyere stamp tupu authentication ma ọ bụ nyocha runtime, emesịa ọ chọrọ
auth njikwa. Ọ na-eweghachi naanị `available`, ụdị FFmpeg/ffprobe e sachara, na
otu ihe kpatara edobere mgbe runtime adịghị. Endpoint extraction dị n’ime abụghị
API upload ọha: njupụta queue na-eweghachi `503` tinyere `Retry-After`, nkwụsị
njikọ onye kpọrọ ya na-eweghachi `499`, deadline broker edobere na-eweghachikwa
`504`. Nzaghachi a tụgharịrị na-agbakwunye
`video->text;model=<visionModel>;parts=<videos>` na header etiti
`x-omniroute-modality-bridge` n’ewepụghị ngalaba Vision ma ọ bụ Audio.

### Ihe Mkpuchi PII (`piiMasker.ts`)

Ọ na-arụ ọrụ na usoro **abụọ ahụ**.

- **`preCall`** na-eme clone payload, na-agafe `system`, `messages`, `input`, na
  `prompt` (gụnyere ihe ndị bụ string nkịtị), ma na-etinye `processPII()` (site na
  `@/shared/utils/inputSanitizer`) n’ubi string `content`/`text`. Mgbe
  `PII_REDACTION_ENABLED=true`, a na-ezochi PII achọpụtara n’ime payload
  a na-ezipụ. Nke a anaghị adabere na `INPUT_SANITIZER_MODE` (nke na-achịkwa
  naanị iwu prompt-injection). Mgbe agbanyụrụ redaction, oku ahụ na-edekọ ọnụ ọgụgụ
  nchọpụta n’agbanweghị ọdịnaya.
- **`postCall`** na-eme deep-clone nzaghachi, na-agba `sanitizePIIResponse()` tinyere
  ihe mkpuchi nke ọdịdị Responses-API (`maskResponsesOutput` — na-ekpuchi
  `output_text` na `output[].content[].text`). Ọ bụrụ na redaction ọ bụla emee,
  nzaghachi a gbanwere na-anọchi nke mbụ.

Guardrail anaghị egbochi ihe ọ bụla; ọ na-etinye naanị nkọwa (`meta.detections`,
`meta.redacted`) ma ọ bụ na-edegharị ya.

### Ntinye Prompt (`promptInjection.ts`)

Ọ na-achọpụta nhazi mmegide n’ime ọdịnaya onye ọrụ nyere ma na-amanye iwu
ahaziri. Omume ya na-adabere na environment variables na constructor
options:

| Ntọala      | Env var                                                                                                | Ndabara | Mmetụta                                                                                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agbanyere   | `INPUT_SANITIZER_ENABLED`                                                                              | `true`  | Mgbe ọ bụ `false`, guardrail na-akwụsị ozugbo.                                                                                                                                                      |
| Mode        | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`  | Iwu injection: `block`, `warn`, ma ọ bụ `log`. (A na-anabata `redact` maka ndakọrịta ochie, mana ọ **naghị** ewepụ ederede injection; `PII_REDACTION_ENABLED` na-achịkwa idegharị PII nke request.) |
| Oke mgbochi | Nhọrọ `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (aha ọzọ `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Severity kacha nta achọrọ iji gbochie. `Medium` bụ naanị maka nlele na ndabara.                                                                                                                     |

**Usoro mkpa mode** (`getMode`): `options.mode` nke onye kpọrọ nyere →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashboard → Settings →
Feature Flags) → env `INJECTION_GUARD_MODE` → env `INPUT_SANITIZER_MODE` →
`warn`. Ya mere, override dashboard na-emeri env vars, nke mere na UI Feature
Flags na-achịkwa guard na-agba ọsọ ozugbo (enweghị restart). Ọgụgụ DB na-arụ ọrụ
n’ụzọ fail-safe: ọ bụrụ na error emee, guard na-alaghachi n’omume dabere na env,
ma mgbe edoghị override, omume ya na mkpebi env-only bụ otu.

Ebe nchọpụta si abịa:

1. `sanitizeRequest()` site na `@/shared/utils/inputSanitizer` (otu detector
   ndị a na-ejikwa n’ebe ọzọ n’ime pipeline).
2. `DEFAULT_GUARD_PATTERNS` arụnyere n’ime ya (ugbu a `system_override_inline` na
   `markdown_system_block`, ha abụọ nwere severity `high`).
3. `customPatterns` nhọrọ a na-ebufe site na constructor options (strings, regex,
   ma ọ bụ ndekọ `{ name, pattern, severity }`).

Mgbe `mode === "block"` **ma** opekata mpe otu nchọpụta ruru ogo
oke, `preCall` na-eweghachi `{ block: true, message: "Request rejected:
suspicious content detected" }`. Na ọnọdụ `warn`/`log`, guardrail ahụ na-edekọ ihe mana
ọ na-ekwe ka oku ahụ gaa n’ihu. A na-ebupụkwa ihe enyemaka nkekọrịta `evaluatePromptInjection()`
maka ndị na-akpọ ya chọrọ inyocha prompts na-agaghị site na registry.

**Oke nyocha (v3.8.20):** detector ahụ na-enyocha naanị **16 KB mbụ** nke
ederede prompt ejikọtara ọnụ — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) n’ime
`src/shared/utils/inputSanitizer.ts`. Ma `detectInjection()` ma
`evaluatePromptInjection()` na-eme `slice(0, MAX_INJECTION_SCAN_BYTES)` tupu ha agba
pattern loop ahụ. Ntuziaka injection na-anọkarị nso n’elu input, ya mere nke a
na-amachi regex CPU/GC na payload ndị ruru ọtụtụ narị KB na-emeghị ka nchọpụta daa mbà (lee
#3932, #4041).

### Ihe Nkpuchi Nzere (`credentialMasker.ts`)

Ọ na-arụ ọrụ na **stages abụọ ahụ**, bụrụkwa nke ikpeazụ na default chain (priority `95`). Ọ na-ezochi
ụdị API-key / secret-token ndị a maara nke ọma n’ime payload a na-eziga (ọdịnaya ozi,
arụmụka tool-call, nsonaazụ tool) **nakwa** nzaghachi provider, ka
credential e tinyere n’ime prompt (ma ọ bụ nke nsonaazụ tool weghachiri) ghara ịpụ
gakwuru upstream provider ma ọ bụ laghachikwuru client.

- **A ga-ahọrọ ya tupu ọ rụọ ọrụ**, otu usoro ahụ dịka PII redaction (nke dị nso na Hard Rule #20):
  ọ naghị arụ ọrụ belụsọ ma `settings.credentialRedactionEnabled === true` **ma ọ bụ**
  `CREDENTIAL_REDACTION_ENABLED=true`. Mgbe agbanyụghị ya, guardrail ahụ anaghị eme ihe ọ bụla —
  ọ dịghị mgbe ọ na-egbochi ma ọ bụ degharịa ihe.
- `redactCredentials()` na-agagharị n’osisi payload/response niile (`walkValue()`,
  nke echekwara pụọ na prototype pollution, ma chekwaa megide cycle site na `WeakSet`) ma jiri
  placeholder `[REDACTED:<type>]` dochie ihe ndị dabara, na-eme clone naanị branches ndị
  gbanwere n’ezie.
- `CREDENTIAL_PATTERNS` na-ekpuchi keys nke LLM provider (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), keys ịkwụ ụgwọ (Stripe, Square), cloud
  keys (AWS access key, Twilio, SendGrid, Mailgun), private keys / JWTs,
  connection strings nwere credentials (`mongodb://user:pass@...`, wdg.), yana
  pattern nkịtị maka uru header `Authorization`/`x-api-key`/`api-key`/`apikey`.
  A na-ezochi keys ndị yiri header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) n’usoro nhazi (naanị value, ebe a na-edobe scheme prefix dịka
  `Bearer `/`Basic `) kama iji generic text regex.
- Guardrail ahụ anaghị egbochi mgbe ọ bụla; naanị ihe ọ na-eme bụ idegharị (`modifiedPayload` /
  `modifiedResponse`) na itinye nkọwa (`meta.credentialsRedacted`, `meta.count`).

Nchedo regression: `tests/unit/credential-masker-guardrail.test.ts`.

## Nkwekọrịta Ntọala (`base.ts`)

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
  block?: boolean; // true na-akwụsị usoro ahụ ozugbo
  message?: string; // a na-egosi ya mgbe a na-egbochi
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall na-eweghachi ya iji degharịa arịrịọ ahụ
  modifiedResponse?: TValue; // postCall na-eweghachi ya iji degharịa nzaghachi ahụ
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

Guardrail na-egosi “enweghị mgbanwe” site n'ịweghachi `void`, `{}`, ma ọ bụ
`{ block: false }`. Iweghachi `modifiedPayload`/`modifiedResponse` na-eji uru ahụ
dochie uru na-agafe n'usoro ahụ maka guardrail ndị na-esote.
`signal?: AbortSignal` na-ebunye usoro ndụ onye kpọrọ ọrụ ahụ n'ime guardrail. Ịkwụsị arịrịọ bụ ọnọdụ pụrụ iche fail-open e kpachapụrụ anya: àkwà mmiri mgbasa ozi na-akwụsị ọrụ ma na-ehichapụ ihe ndị fọdụrụ n'enweghị iweghachi mgbasa ozi raw n'ebe a maara na ọ naghị akwado ya.

## Ndebanye (`registry.ts`)

Singleton `guardrailRegistry` na-enye:

- `register(guardrail)` — na-agbakwụnye guardrail (ma ọ bụ jiri aha ahaziri dochie nke dị adị) ma
  hazie ha ọzọ dịka `priority` na-arịgo.
- `clear()` / `list()` — ngwa enyemaka nchịkwa.
- `runPreCallHooks(payload, context)` — na-agafe guardrail ndị na-arụ ọrụ, na-ebufe
  payload ahụ site na `modifiedPayload`, ma kwụsị na `block: true` mbụ.
- `runPostCallHooks(response, context)` — otu usoro ahụ n'akụkụ nzaghachi.
- `resetGuardrailsForTests({ registerDefaults })` — na-ehichapụ ọnọdụ ma, ma ọ bụrụ na ahọrọ ya,
  debanyeghachi ntọala ndabara iji kewapụ ule nke ọma.

Ndị na-agba ọsọ abụọ ahụ na-eweghachi `{ blocked, payload|response, results, guardrail?, message? }`
ebe `results` bụ n'usoro ndekọ `GuardrailExecutionResult` nke gụnyere mpaghara
`blocked`, `skipped`, `modified`, `error`, na `meta` maka guardrail ọ bụla,
nke bara uru maka nsuso.

### Ịgbanyụ Guardrail Maka Arịrịọ Ọ Bụla

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` na-achịkọta ndepụta
aha guardrail na-enweghị oyiri nke a ga-awụli maka arịrịọ dị ugbu a. Isi mmalite
(ha niile bụ nhọrọ, a na-ejikọta ha niile):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` dị n'ahụ arịrịọ (n'ọkwa kachasị elu)
- `metadata.disabledGuardrails` dị n'ahụ arịrịọ
- Header `x-omniroute-disabled-guardrails` (ma ọ bụ nke ochie
  `x-disabled-guardrails`)

Uru nwere ike ịbụ n'usoro string ma ọ bụ string nke rikoma kewara; a na-ahazi
aha ka ha bụrụ lowercase kebab-case (`pii_masker` → `pii-masker`). A na-ebufe
nsonaazụ ahụ site na `context.disabledGuardrails` gaa na ndebanye ahụ, nke na-awụli
guardrail ndị dabara (`skipped: true` n'ime `results`).

## Usoro Mmezu

Maka arịrịọ ọ bụla na-agafe na `src/sse/handlers/chat.ts` na
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` na-emepụta ndepụta ihe a ga-amafe site na API key, body,
   na headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` na-eme guardrails n'usoro priority
   na-arị elu:
   - A na-edekọ guardrails ndị agbanyụrụ dịka `skipped`.
   - `preCall` nke guardrail ọ bụla nwere ike idegharị payload site na `modifiedPayload`.
   - `block: true` mbụ na-akwụsị usoro ahụ ozugbo, handler ahụ wee weghachite
     nzaghachi ọjụjụ guardrail.
3. Payload ahụ (nke enwere ike idegharị) na-abanye na combo routing na upstream
   dispatch.
4. Mgbe ahaziri nzaghachi ahụ, `guardrailRegistry.runPostCallHooks(...)`
   na-eme otu usoro ahụ na nzaghachi ahụ. `block: true` n'ebe a na-ewepụ nzaghachi
   upstream ahụ.

A na-edekọ guardrails ndị tụbara mperi na `error: <message>`, a na-edekwa ha na log site na
`logger.warn`, mana usoro ahụ na-aga n'ihu — nke a bụ nhazi fail-open e mere ụma.

## Nhazi

Environment variables ndị guardrails arụnyere n'ime sistemụ na-agụ:

| Variable                              | Ihe na-eji ya             | Mmetụta                                                                                                 |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Tọọ ya ka ọ bụrụ `false` iji gbanyụọ nchọpụta kpamkpam.                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Iwu injection: `warn`, `block`, ma ọ bụ `log`. Legacy value `redact` anaghị edegharị ederede injection. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mode maka injection guard; ọ bụkwa DB feature flag nke **na-akagbu** env vars (DB > ENV).               |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Severity kacha nta nke `MODE=block` na-ajụ: `high` (ndabara), `medium`, ma ọ bụ `low`.                  |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Legacy alias maka `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Mgbe ọ bụ `true`, a na-ekpuchi PII dị na request (n'adabereghị na injection mode).                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Na-achịkwa omume masker n'akụkụ response.                                                               |

Guardrails nke Modality Bridge na-agụ runtime config site na settings store
nke DB na-akwado (`getSettings()`), ọ bụghị env vars. Primary keys nke Vision bụ
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na
`modalityBridgeCacheMaxEntries`. A na-anabata legacy
`visionBridge*` keys naanị dịka documented one-cycle read
fallback; ihe dashboard na-ede na-eji primary keys. Defaults na fallback
resolver dị na `src/shared/constants/modalityBridgeDefaults.ts`, ebe a ka na-edobe legacy
constants na `src/shared/constants/visionBridgeDefaults.ts`.

Audio na-eji `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, na `modalityBridgeAudioMaxClips`, tinyere settings
`modalityBridgeCache*` ndị a na-ekekọrịta. Audio enweghị legacy-key fallback n'ihi na e
webatara keys ndị a na schema nke Modality Bridge.

Video na-eji `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, na
`modalityBridgeVideoTimeout`, tinyere settings `modalityBridgeCache*` ndị a na-ekekọrịta.
A na-agbanyụ ya na ndabara n'ihi na FFmpeg/ffprobe bụ operational
dependencies ndị nhọrọ, na frame captioning na-agbakwunye latency na model cost.

## Guardrail Ahaziri

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

Nzọụkwụ:

1. Mepụta `src/lib/guardrails/myGuardrail.ts` nke na-agbatị `BaseGuardrail`.
2. Mejuputa `preCall` na/ma ọ bụ `postCall`.
3. Debanye ya n'oge mbubata (tinye site na `registerDefaultGuardrails`) ma ọ bụ
   kpọọ `guardrailRegistry.register(...)` n'oge sistemụ na-arụ ọrụ — ndekọ ahụ na-eji
   guardrail ọhụrụ dochie nke ọ bụla dịbu nke nwere otu aha ahaziri ahazi.
4. Tinye ule n'okpuru `tests/unit/` (ihe atụ ndị dị ugbu a:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Nnwale

Jiri `resetGuardrailsForTests()` n'etiti ule iji malite site n'ọnọdụ a maara.
Nyefee `{ registerDefaults: false }` iji malite na ndekọ efu ma
debanye naanị guardrail ndị a na-anwale. Vision Bridge na-anabata ntinye
ndabere (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge na-ekpughe
ebe ntinye yiri ya maka ntọala, ike, nhọrọ ụdị STT, nyocha
nzere, na ntụgharị okwu ọdịyo gaa na ederede. Ya mere, ule nwere ike ịnwale usoro abụọ ahụ na-enweghị ohere
ịnweta DB ma ọ bụ netwọkụ.

## Hụkwa

- `src/lib/guardrails/` — mmejuputa
- `src/shared/utils/inputSanitizer.ts` — ihe nchọpụta a na-ekekọrịta nke na-akwado
  igbochi ntinye prompt na ikpuchi PII
- `src/shared/constants/visionBridgeDefaults.ts` — ndabara Vision Bridge na
  ndepụta ụdị nke a na-amanye iji bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — ndabara runtime Vision/Audio a na-ekekọrịta
- `docs/architecture/RESILIENCE_GUIDE.md` — oyi akwa kwụụrụ onwe ya (circuit breaker, oge nchere)
- `docs/reference/ENVIRONMENT.md` — ntụaka zuru ezu nke env var

## Mkpuchi route nke injection-guard & red-team (Oge 8 · Blọk D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) na-ekpuchi route niile
na-anabata prompt ndị ọrụ. Ọ na-asọpụrụ `INJECTION_GUARD_MODE` (ndabara `warn` = naanị dekọọ;
`block` = weghachite HTTP 400 `SECURITY_001`).

| Ụdị                 | Route                                                                                                                                                | Ọnọdụ ndabara |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Ederede (dị ugbu a) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Mmepụta             | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data                | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Mwepụta ederede (`extractMessageContents`) na-ekpuchi `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kwa abalị, `nightly-llm-security.yml`):** promptfoo na-akwado na route ọ bụla na-egbochi
corpus OWASP-LLM mgbe `INJECTION_GUARD_MODE=block`; garak na-agba probes (ọ na-awụfe ma ọ bụrụ na secret adịghị).
Agụnyere `moderations` maka ịdị n'otu — ndị na-ahụ maka sistemụ nọ na block-mode nwere ike iwepụ ya site na
`resolveDisabledGuardrails`.

Workflow nke abalị (`.github/workflows/nightly-llm-security.yml`, cron + iji aka
malite) nwere ọrụ abụọ:

- **`promptfoo-guard` (na-egbochi)** — na-agba `promptfoo eval -c promptfooconfig.yaml`
  na `INJECTION_GUARD_MODE=block`. Ọnọdụ mmegide ọ bụla (dịka "leghara
  ntuziaka niile gara aga anya…", jailbreak ụdị DAN) na-akwado na nzaghachi ahụ nwere
  `error.code === "SECURITY_001"`, ya bụ, na guard ahụ jụrụ arịrịọ ahụ n'ezie.
- **`garak` (ndụmọdụ)** — na-agba garak `--probes promptinject,dan,leakreplay`
  megide instance OmniRoute mpaghara (`http://localhost:20128/v1`). A na-achịkwa ya site na
  secret onye na-eweta (`PROMPTFOO_PROVIDER_KEY`); ọ na-awụfe n'enweghị nsogbu ma tinye
  `|| true` na njedebe, ya mere ọ na-enye akụkọ na-emeghị ka CI daa.

Mkpuchi nke ihe enyemaka guard (`createInjectionGuard` / `withInjectionGuard`)
na-erute route `/v1` ọ bụla nwere prompt; a na-ewepụta ederede prompt site na
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` site na
`extractMessageContents()` dị na `src/shared/utils/inputSanitizer.ts`.
