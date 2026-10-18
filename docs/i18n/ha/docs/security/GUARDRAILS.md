# Guardrails (Hausa)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Madogaran gaskiya:** `src/lib/guardrails/`
> **An sabunta ta karshe:** 2026-08-29 — v3.8.51 (Asalin fassarar Video Bridge an bayyana shi ne ta hanyar mai kiran,
> ba a tabbatar da shi ta server ba tukuna — an yi bayani gwargwadon #11661)

Guardrails suna aiwatar da tsaro, dokoki, da sauye-sauyen abun ciki a iyakar
tsakanin OmniRoute da masu ba da sabis na sama (upstream providers). Kowace guardrail na iya bincika (kuma
da zabi ta ki, ta sauya, ko ta sanya bayani a kan) buƙatun kaya (`preCall`) da
martanin sama (`postCall`).

Tsarin **fail-open** ne: idan wani guardrail ya fadi yayin aiwatarwa, tsarin
rajista (registry) yana rubuta kuskuren kuma ya ci gaba da sauran guardrail maimakon ya sa buƙatar ta fadi.
Tabbatar da block yanke shawara ce ta zahiri (`block: true`), ba ta faru ta kuskure ba.

## Ginannun Matakan Kariya

Rijistar tana loda matakan kariya guda shida ta atomatik bisa tsarin fifiko yayin import
(duba `registry.ts` → `registerDefaultGuardrails()`):

| Fifiko | Suna                | Mataki/Matakai | Fayil                 |
| ------ | ------------------- | -------------- | --------------------- |
| `5`    | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`    | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`    | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`   | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`   | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`   | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ƙananan lambobin fifiko ne ke aiki **da farko**.

### Gadar Hangen Nesa (`visionBridge.ts`) — Gadar Nau'in Bayanai PR-1

Tana katse buƙatun da ke ɗauke da hotuna waɗanda aka nufa ga **samfuran da ba sa tallafa wa hangen nesa**, sannan ko dai ta sake tura dukkan buƙatar zuwa samfurin da ke tallafa wa hangen nesa, ko kuma ta maye gurbin sassan hotunan da bayanan rubutu da wani samfurin hangen nesa mai daidaitawa ya samar kafin kiran sabis na sama. Wannan yana ba masu samar da sabis na rubutu kaɗai damar sarrafa bayanai masu nau'o'i da yawa ba tare da mai amfani ya lura ba.

Tsarin aiki:

1. Tsallake idan samfurin da aka nufa ya riga ya tallafa wa hangen nesa (sai dai idan yana cikin jerin tilasta amfani da gada `isVisionBridgeForcedModel`).
2. Ciro sassan hotuna ta hanyar `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), wanda ke miƙa aikin ga **haɗaɗɗen mai gano kafofin watsa labarai**
   `detectMediaParts()` a cikin `open-sse/utils/mediaParts.ts` — tushe guda ɗaya na gaskiya da ake amfani da shi tare da matatar dacewar combo.
   An takaita cirewar ga sassan matakin sama masu siffofin da
   `replaceImageParts` zai iya sake mayarwa (yarjejeniyar ciro↔maye gurbi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, da Responses API `input_image`. Abubuwan da aka gano a cikin wasu sassa da siffofin da ke nuna alama kawai kayan matatar combo ne, kuma ba a taɓa cire su.
   Tsallake idan ba a sami ko ɗaya ba.
3. Tantance saitunan lokacin aiki ta hanyar `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): sabbin maɓallan saituna na `modalityBridge*`
   suna da fifiko; tsoffin maɓallan `visionBridge*` suna ci gaba da kasancewa **madadin zagaye guda**
   (lokacin komawa baya). Tsallake kafin duk wani binciken kafofin watsa labarai idan an kashe gadar.
4. Mai zaɓin yanayi (`modalityBridgeVisionMode`, duba jadawalin da ke ƙasa) yana yanke shawarar
   ko za a sake tura buƙata ko a bayyana ta. Sake turawa yana mayar da `modifiedPayload` inda `model`
   kawai aka sauya, tare da meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Hanyar bayani: takaita hotuna zuwa `maxImages`, haɗa umarnin da ya dace da aikin,
   bincika ma'ajiyar bayanan bayani, kira samfurin hangen nesa **a layi ɗaya**
   (`Promise.allSettled`), sannan saka sassan rubutu na `[Image N]: <description>` a
   wurarensu. Bayanin da ya gaza yana samar da `null`, kuma ana
   **adana** asalin ɓangaren hoton (#4012) — sai dai a hanyar bayanin combo idan duk
   bayanan sun gaza, inda tabbataccen sabis na sama marar tallafin hangen nesa zai sami
   madaɗin `(unavailable — no vision-capable provider connected)` a maimakonsa (#8430).
6. Mayar da `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Mai zaɓin yanayi (`modalityBridgeVisionMode`)

| Yanayi     | Tsoho | Halayya                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔     | Tsohuwar dabarar tantancewa, ba a taɓa ta ba (#6640/#7204): samfuran da ba na combo ba/`auto/` suna sake tura buƙata zuwa mafi kyawun samfurin hangen nesa, sai dai idan asalin samfurin yana da ingantattun bayanan shiga (a nan sai a bayyana); wuraren combo koyaushe suna amfani da bayani.                                          |
| `describe` |       | Koyaushe bayyana — ana tsallake gaba ɗaya ɓangaren sake turawa; samfurin da mai amfani ya zaɓa ne koyaushe ke ba da amsa.                                                                                                                                                                                                                |
| `reroute`  |       | Tilasta sake turawa: ana ƙetare kariyar riƙe samfurin da ke da bayanan shiga. Kariyar bayanan shiga ta **makasudin** sake turawa har yanzu tana aiki — idan babu ingantaccen samfurin hangen nesa da za a yi amfani da shi, buƙatar tana komawa hanyar bayani don kada ɗanyen hotuna su taɓa isa ga tsarin baya na rubutu kaɗai (#8430). |

Yanayin da aka tilasta suna dakatar da aiki **kafin** tsohuwar dabarar `auto` ta gudana; halayyar `auto`
daidai take bait-da-bait da matakin kariya na kafin PR-1.

#### Iyakokin maɓallin API (`visionBridgeKeyScope.ts`)

Lokacin da maɓallin API na mai kira ya ƙuntata `allowedConnections`, tarin ƙa'idojin amfani
(`allowedQuotas`) ko samfura (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), gadar tana zaɓar samfuran sake turawa da bayani waɗanda maɓallin zai iya amfani da su kawai, a kan haɗin da maɓallin zai iya amfani da shi. Daga nan kiran bayani koyaushe yana bi ta hanyar madauwariyar kai ta OmniRoute tare da taken
`x-omniroute-self-loop-key-id`, domin buƙatar tattaunawar da ke karɓa ta sake aiwatar da manufofin haɗi da samfur na wannan maɓallin. `enforceApiKeyPolicy()`
yana amincewa da wannan taken ne kawai tare da self-loop bearer, saboda haka zai iya
ƙara taƙaita damar shiga kawai, kuma ana ƙin id da ba a iya gano shi ba.

Idan babu samfurin hangen nesa da aka ba wa maɓallin izinin amfani da shi, hanyar bayani tana janyewa, kuma buƙatar tana wucewa ba tare da canji ba, daidai da halayyar ci gaba da aiki idan an kashe matakin kariya (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Buƙatun da ba su da maɓalli, da maɓallan da ba su da waɗannan ƙuntatawa, suna aiki daidai kamar
yadda suke a baya.

#### Umarnin bayani mai dacewa da aiki (`modalityBridgeVisionTaskAware`)

Tsoho shi ne **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) yana haɗa
rubutun **saƙon mai amfani na ƙarshe** (an taƙaita shi zuwa haruffa 500) da tushen
umarnin bayyana hoto, yana karkatar da bayanin zuwa ga ainihin abin da mai amfani ya tambaya
(tsarin codex-vision-proxy), sannan yana umartar samfurin hangen nesa ya rubuta
rubutun da ake iya gani. Idan an kashe alamar — ko kuma babu rubutun mai amfani — ana amfani
da tushen umarnin ba tare da wani sauyi ba.

Buƙatar OpenAI-compatible ta cikin describe self-loop (`callVisionModelSingle()`
a cikin `visionBridgeHelpers.ts`) koyaushe tana buƙatar `image_url.detail: "high"` —
ba tare da wani sharadi ba, ga kowane mai kira/mai bayarwa, kuma ba a ɗaure ta da wata sigina daga abokin hulɗa ba.
Samfurin ƙaramin daki-daki yana rage daidaiton OCR musamman ga aikin
kwafe rubutu da wannan umarni ke buƙata, saboda haka kiran describe da kansa koyaushe yana buƙatar
babban daki-daki ba tare da la’akari da matakin daki-dakin da ainihin buƙatar shigowa ta yi amfani da shi ba. Wannan
yana shafar jikin buƙatar describe na ciki ne kawai; ba ya canza yadda
OmniRoute ke tura `image_url.detail` na mai kira a kan babbar buƙatar —
ana amfani da wannan tsoho daban, kuma ga abokan hulɗar OpenCode da aka gano kawai, a cikin
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Reshen
Anthropic wire-format na describe self-loop ba shi da filin `detail`
kuma babu ɗaya daga cikin waɗannan tsoffin ƙimomin da ke shafarsa.

#### Iyakar fitowar describe (`modalityBridgeVisionMaxChars`)

| Maɓalli                        | Tsoho | Iyaka            |
| ------------------------------ | ----- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`   | `0` ko 100–50000 |

`0` (tsoho) yana nufin **babu iyaka** — bayanin da
`callVisionModel()` ya dawo da shi ana wuce shi ba tare da gyara ba, don kiyaye
halin da ake da shi. Duk wata ƙima a tsakanin 100–50000 tana taƙaita bayanin tare da
ƙarin `…` a ƙarshensa kafin a saka shi a matsayin `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` a cikin `src/lib/guardrails/visionBridge.ts`).
Ƙara wannan ga ayyukan OCR masu yawan daki-daki inda samfurin da ke gaba yake buƙatar
cikakken rubutun da aka kwafe; rage shi don iyakance amfani da token daga samfuran hangen nesa
masu yawan bayani. Filin dashboard yana cikin sashen Advanced na shafin Vision
(`modality-bridge-max-chars` a cikin `ModalityBridgeVisionTab.tsx`) kuma yana ɗaga duk wata
ƙima tsakanin 1 da 99 zuwa mafi ƙarancin 100, yayin da yake barin `0` da aka sa kai tsaye
ba tare da taɓawa ba — `0` ingantacciyar ƙimar Zod ce da kanta
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ba kawai
tsohuwar ƙimar “ba a saita ba” ba.

#### Ma’ajiyar describe (`modalityBridge/bridgeCache.ts`)

Ma’ajiyar LRU + TTL ta cikin ƙwaƙwalwa don fitowar describe, wadda duk tsarin aiki ke rabawa.
Maɓalli = `sha256(imageRef + composedPrompt + configuredBridgeModel)` tare da
tsarin tsawon-fili a farkonsa (babu karo a iyakokin filaye). Bangaren samfurin shi ne
samfurin bridge da **aka saita**, ba samfurin da ya bayar da amsa a zahiri ba —
`callVisionModel` na iya komawa ga wani samfurin a ciki, kuma yin maɓalli bisa kowace gwaji zai
rarraba ma’ajiyar. Ba a taɓa adana describe da ya gaza ba. Saituna:

| Maɓalli                         | Tsoho  | Iyaka   |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Daidaita hoton nesa (describe self-loop/ɗauko base64)

Lokacin da bridge ya ɗauko hoton **nesa** da kansa — self-call na describe na Anthropic
da sauya base64 na claude-wire-format
(`ensureBase64ImagesForClaudeWire`), dukkansu ta hanyar
`fetchRemoteImageAsDataUri()` a cikin `visionBridgeHelpers.ts` — ana tura URI ɗin data
da aka samu ta cikin `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) kafin a saka shi cikin buƙatar samfurin hangen nesa.
Ana rage girman hotuna masu wuce kima zuwa **gefe mafi tsawo na 2048px** (daidai da
iyakar rage girman da OpenAI/Anthropic suka riga suka aiwatar a gefen uwar garke), wanda ke rage
bytes/latency na lodawa ba tare da canza abin da samfurin hangen nesa ke gani ba. Rage girman
yana amfani da `sharp`, wanda ake lodawa ta dynamic import: a kan dandali inda native
binary ɗinsa ya kasa loduwa, `normalizeDataUri()` **ba ya taɓa jefa kuskure** — yana komawa
ga wucewar bytes na asali ba tare da gyara ba, don haka hanyar describe/sauya-base64
koyaushe tana ci gaba da aiki. Bytes da ba na hoto ba (ɗaukowa da bai dawo da
hoton da za a iya warwarewa ba) su ma ana wuce su ba tare da taɓawa ba. Wannan daidaitawa
ya taƙaita ne ga hotunan da bridge ya ɗauko don self-call ɗinsa — ba a taɓa
aiwatar da shi ga raw passthrough payload na mai kira ba, daidai da
ƙa’idar sauyi sai da amincewa kawai (Ƙa’ida Mai Tsauri #20).

#### Tsarin saituna + ƙaura

Sabbin maɓallan `modalityBridge*` suna samun tantancewar Zod a cikin `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, rukuni uku na `modalityBridgeCache*`, da kuma
rukunin `modalityBridgeAudio*` da Audio Bridge ke amfani da shi. Ƙaurawar
`141_modality_bridge_settings.sql` tana kwafe ƙimomin legacy
`visionBridge*` da ke akwai zuwa sabbin maɓallan da suka dace (idempotent ce, kuma ba ta taɓa maye gurbin
ƙimar `modalityBridge*` da mai gudanarwa ya sa ba); ana ci gaba da karɓar maɓallan legacy
a matsayin madadin karantawa na tsawon zagayen fitarwa guda ɗaya.

#### Kanun nuna gaskiya + ƙididdiga

Amsoshin da describe ya sauya suna ɗauke da
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(wanda `buildModalityBridgeHeader()` ke ginawa a cikin `modalityBridge/bridgeStats.ts`,
kuma `withModalityBridgeHeader()` ke sanya shi a cikin `src/sse/handlers/chatHelpers.ts`).
Buƙatun da aka sake tura wa wata hanya ba sa samun **wani** kanun — ba a taɓa payload ɗin ba, kuma
sauyin samfurin ya riga ya bayyana a filin `model` na jikin amsar.

`GET /api/modality-bridge/stats` (tabbatarwar gudanarwa, mataki ɗaya da
`GET /api/settings`) yana dawo da ƙididdigun kowace modality da ke cikin ƙwaƙwalwar ajiya
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` don `vision`, `audio`, da
`video`. `averageLatencyMs` yana amfani da `latencySamples`, ba duk attempts ba, a matsayin
maƙalarsa; aiki marar auna lokaci ba ya ƙirƙirar samfurin mili-sekan sifili na
ƙarya. `bridged` yana ci gaba da kasancewa madadin sunan da ya dace da sigogin baya don nasarar
juyawa; attempts da suka gaza ba sa ƙara shi.
An tsara ƙididdigun su sake farawa idan an sake kunna tsarin
(telemetry ne, ba lissafin kuɗi ba).

#### Tsarin dashboard

Shafin dashboard na musamman shi ne
`/dashboard/settings/modality-bridge`. Shafukansa na `Vision`, `Audio`,
da `Video`, waɗanda za a iya isa gare su ta URL, suna adana query parameters yayin sauya ƙimar `tab`.
Shafin Vision yana nuna kunnawa, mode, zaɓin model (ciki har da tsohon zaɓi na
atomatik), prompting mai la'akari da task, iyakokin timeout/image/description-length/cache
na ci-gaba, ƙididdigun lokacin aiki,
da samfurin request mai kariya. Shafin Audio ma yana aiki kai tsaye: yana nuna
kunnawa, mai zaɓar model na STT kaɗai tare da Auto, iyakokin timeout/max-clip, ƙididdigun
audio, da gwajin samfurin `input_audio`. Shafin Video yana aiki: yana bayar da rahoton
yanayin lokacin aiki na FFmpeg/ffprobe — ɗaya daga cikin bayyanannun yanayi huɗu na UI (`unknown` yayin
da probe ke gudana ko bai iya kammalawa ba, `restricted` a kan host na dashboard wanda ba
loopback ba inda ake tsallake probe a ɓangaren client, `unavailable` bayan an yi probe
kuma an tabbatar babu shi, ko `available` tare da sigogin FFmpeg/ffprobe) — yana adana
iyakokin enable/model/frame/video/timeout, yana tace mai zaɓar model zuwa models masu iya
vision, kuma yana nuna ƙididdigun video.

Tsohon katin Vision Bridge da ke ƙarƙashin saitunan AI yanzu hanyar haɗin dacewa ce zuwa
sabon shafin; ba ya ƙara mallakar kwafi na biyu na form ɗin. Media Providers kuma
yana haɗa ayyukan Image-to-Text da Speech-to-Text zuwa shafukan Modality
Bridge masu dacewa ba tare da cire filin gwajin Speech-to-Text da ake da shi ba.

**Tsallake shigarwa don self-loop:** lokacin da kiran describe ya bi ta self-loop na
OmniRoute na `/v1` (model na provider wanda ba daidaitacce ba), ƙaramin request ɗin yana aika
`x-omniroute-admission-bypass: internal` kuma ana tabbatar da shi da credential na self-loop
da aka warware — sentinel na cikin gida `sk_omniroute` a local mode, ko
env key ɗin `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` da operator ya saita (#1350), domin
deployments masu `REQUIRE_API_KEY=true` su ci gaba da gudanar da kiran describe. Ana
amincewa da bypass ɗin ne kawai ga waɗannan takamaiman credentials, don haka clients na waje ba za su iya
amfani da header ɗin don tsallake admission ba.

Tsoffin defaults suna cikin `src/shared/constants/visionBridgeDefaults.ts`;
sababbin defaults na mode/task-aware/cache da settings resolver suna cikin
`src/shared/constants/modalityBridgeDefaults.ts`. Guardrail ɗin yana samar da zaɓin constructor
na `deps` domin tests su iya shigar da kwaikwayon implementations na `getSettings` da
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Yana katse chat requests masu ɗauke da audio kafin su isa target wanda ba a san
yana karɓar audio input ba. Ba ya taɓa sake karkatar da chat request ɗin: ana
juya sassan audio zuwa rubutu ta hanyar endpoint na multipart mai dacewa da OpenAI da ake da shi, sannan
chat model da aka zaɓa ya ci gaba da transcripts na rubutu.

Tsari:

1. Warware `supportsAudio` ta hanyar `getResolvedModelCapabilities()`. Bayanan metadata na
   provider-registry da aka bayyana a sarari suna da fifiko, sai static model metadata, sannan
   `modalities_input` da aka daidaita. Jerin input da aka bayyana wanda ba ya ƙunshe da `audio`
   shi ne `false`; idan babu wata shaidar capability, ƙimar tana kasancewa `null`. Duka `false` da `null`
   suna kunna bridge na taka-tsantsan, yayin da `true` yake tsallake shi.
2. Warware saitunan `modalityBridgeAudio*` sannan a ciro sassan audio na matakin-sama
   waɗanda za a iya haɗawa daga kowane message ta hanyar detector na bai ɗaya `detectMediaParts()`.
   Siffofin wire da ake tallafawa su ne OpenAI `input_audio`, `audio_url`, da
   `source.media_type: "audio/*"`. Ana gano audio da ke cikin nested structure don routing amma ba a
   cire shi ta hanyar splice ba. Ana iyakance aikin da `modalityBridgeAudioMaxClips`;
   sassan da ke baya suna kasancewa ba a taɓa su ba.
3. Bi `provider/model` da aka saita, ko bari `selectAudioBridgeModel()` ya bi
   `AUDIO_TRANSCRIPTION_PROVIDERS` bisa tsayayyen jerin catalog sannan ya zaɓi model na farko
   mai credential na provider mai aiki wanda za a iya amfani da shi.
4. `callAudioTranscription()` yana juya audio na base64/data-URI zuwa multipart
   `file`, ko yana sauke `audio_url` na nesa ta hanyar public-only outbound
   guard tare da DNS pinning da iyakar 25 MB. Daga nan yana yin POST na file ɗin da model
   da aka zaɓa zuwa self-loop na cikin gida `/v1/audio/transcriptions`, tare da tabbatarwa ta
   `resolveSelfLoopBearer()`. Route na transcription da ake da shi yana aiwatar da binciken
   credential na yau da kullum, sarrafa cooldown/rate-limit, da aika aikin zuwa provider.
5. Kiran da ya yi nasara yana maye gurbin sassansa da `[Audio N]: <transcript>`. Ana gudanar da
   calls ta `Promise.allSettled`: gazawar guda ɗaya tana barin ainihin
   ɓangaren audio ɗin nan yadda yake (#4012 contract). Idan duk calls suka gaza kuma an tabbatar
   target ɗin yana da `supportsAudio === false`, sassan suna zama
   `[Audio N]: (babu shi — babu STT provider da aka haɗa)` (#8430 contract). Ga
   target da ba a san matsayinsa ba (`null`), sakamakon gazawar gaba ɗaya yana kasancewa ba a taɓa shi ba. Target
   da aka tabbatar text-only ne kuma ba shi da STT credential mai amfani yana karɓar wannan bayyanannen
   stub ba tare da yin network call ba.

Transcripts da suka yi nasara suna amfani da cache na LRU/TTL na Modality Bridge na dukkan process.
Key ɗin yana haɗa audio reference, tsayayyen label na operation `audio-transcription`,
da STT model da aka zaɓa; ba a taɓa adana failures a cache. Audio attempts suna sabunta
ƙididdigun `bridged`, `cacheHits`, `failures`, da `lastUsedAt` na bai ɗaya.
Responses da aka sauya suna ɗauke da
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; requests
da ba a taɓa su ba ba sa karɓar segment na Audio Bridge.

Ana adana saitunan lokacin aiki a DB kuma Zod yana tabbatar da ingancinsu:

| Maɓalli                       | Tsoho   | Iyaka          |
| ----------------------------- | ------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —              |
| `modalityBridgeAudioModel`    | `""`    | Auto ko STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10           |

Har yanzu ana sarrafa ma'ajiyar bayanai ta bai-ɗaya ta hanyar `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, da `modalityBridgeCacheMaxEntries`.

### Gadar Bidiyo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Tana tare sassan bidiyo na matakin sama a cikin `messages` na Chat Completions da
`input` na Responses API kafin a kira wata manufa da ba a san tana da tallafin bidiyo na asali ba.
Tsarukan da ake tallafawa su ne `input_video`, `video_url`, `video_source`, URLs na HTTPS,
da URIs na bayanai na `data:video/*;base64,...`. Ba a ɗaukar sunayen fayil kaɗai da ke cikin
rubutu a matsayin bidiyo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ne ke kula da bi-ta-cikin buƙata,
binciken iyawa/manufa, tattarawa na kowace buƙata, da nauyin bayanan amsa.
Aikin kowane bidiyo — samowa, ma'ajiyar cikakken sakamako, bayyana jerin firam
(wanda ke haɗa duk wani rubutaccen bayanin sauti da mai kira ya ayyana), da ma'aunai/
dakatarwa/tsaftacewa na kowane yunƙuri — an ɓoye shi a bayan `processVideoPart` a cikin
`videoBridgePipeline.ts`, wanda ake kira sau ɗaya ga kowane ɓangaren bidiyo a cikin madaukin `preCall`.
Wannan modulin kuma yana ayyana bayyanannun iyakokin tashoshi `VideoMediaBrokerPort`
(samun bytes da fitar da firam ɗin da aka ɗauki samfurinsu), `VideoAudioTranscriptionPort`
(haɗa rubutaccen bayanin sauti da mai kira ya ayyana da taken bayanin samfurin firam), da
`VideoDrilldownPort` (iyakar adana bayanan zurfafa binciken firam; har yanzu ba a haɗa ta
da `processVideoPart` ba — hanya ta daban ta `/api/modality-bridge/video/drilldown`
ce kaɗai ke rubuta shigarwar zurfafa bincike a yau).

Hanyar buƙata ta jama'a ta `/v1` ba ta taɓa shigo da ko kiran wani ƙaramin tsari.
Ana sauke bidiyoyin nesa ƙarƙashin iyakar 50 MiB; bidiyoyin base64 na cikin layi suna da
iyakancewar 36 MiB da aka ƙiyasta cikin taka-tsantsan bayan sauya lamba ga kowane bidiyo,
domin a iya kiyaye abin rufe samfurin/saƙonni/tsarawa a cikin iyakar karɓar buƙatar JSON
ta jama'a mai girman 50 MiB. Ana duba tsawon bayanan cikin layi da ƙiyasin girman bayan
sauya lamba kafin ware ƙwaƙwalwa. Ana buƙatar HTTPS a URL na farko na nesa da kowane
juyawa, ta amfani da kariyar fitarwa ta jama'a-kawai da ake da ita tare da ɗaure DNS.
Daga nan bytes ɗin sukan ketare ainihin iyakar dillalin cikin gida ta
`POST /api/modality-bridge/video/extract`. Wannan hanyar duka `LOCAL_ONLY` ce da
`SPAWN_CAPABLE`, tana karɓar buƙata mai tantancewar kowane tsari, daga amintaccen
loopback kawai, kuma ba ta taɓa karɓar URL, hanyar tsarin fayil, fayil mai aiwatarwa,
ko jerin gardama. Tsarin iyakar girman jikin API da mai karanta jiki a hankali na mai
sarrafawa kowannensu yana tilasta iyakar shigarwar dillali ta 50 MiB. Jerin jiran aikinsa
mai iyaka yana gudanar da fitarwa guda ɗaya a lokaci, yana ba da damar ayyuka huɗu masu
jira, kuma yana iyakance shigarwar da ke jira zuwa 100 MiB.

A cikin dillalin, `ffprobe` yana karanta fayil na gida mai zaman kansa; ƙayyadadden
jerin tsare-tsaren da aka yarda da su bai haɗa da tsare-tsaren jerin kunnawa da manifest ba.
Ga kwantena na dangin MOV da aka yarda da su, nassoshin bayanan MOV na waje suna ci gaba
da kasancewa a kashe ta tsohuwa, kuma ƙayyadadden umarnin ba ya ba su izini. Duka
`ffprobe` da `ffmpeg` suna amfani da jerin izinin ƙa'idar `file`-kawai, zare guda,
ƙayyadaddun jerin gardama, babu shell, kuma ana warware wuraren fayilolin aiwatarwa daga
`PATH`. Rafukan hotunan murfi da aka haɗe ba su cikin zaɓuɓɓukan da za a iya kunnawa.
Dole ne duk rafukan da za a iya kunnawa su cika iyakokin, kuma ana fifita rafi na tsoho
da aka ayyana kafin komawa ga mafi ƙarancin fihirisa bisa ƙayyadadden tsari. An iyakance
bidiyoyi zuwa daƙiƙa 600, pixels 8,192 a kowace girma, da pixels na tushe 33,554,432.
FFmpeg yana ɗaukar samfurin firam JPEG na tsakiya 1–16, yana rage tsawon gefen mafi
tsawo zuwa pixels 1,024 aƙalla ba tare da faɗaɗa ƙananan bayanai ba, kuma ba a taɓa ba
shi URL. Samfurin yana amfani da `uniform` ta tsohuwa. Manufofin `scene_aware` na zaɓi
da `segment_aware` na gwaji suna yin ƙarin zagaye guda na FFmpeg da aka ƙayyade a kan
rafin gida da aka riga aka inganta, suna zaɓar ƙayyadaddun alamomin lokacin fage na
`showinfo`, sannan su koma bisa ƙayyadadden tsari zuwa maki na tsakiya iri ɗaya na
uniform idan mai ganowa ya gaza, lokaci ya ƙare, fitarwa ta lalace, ko babu 'yan takara.
Yanayin da ya san sashe yana ware samfuran maki na tsakiya gwargwadon tazarorin fage da
aka inganta; an bayyana shaidar sanin sashe da halin komawa dalla-dalla a ƙasa.
Ana amfani da tsayayyar iyakar firam 16 bayan zaɓe a kowace manufa. Idan buƙatar da ta
san fage tana da kasafin firam guda ɗaya kawai, tana amfani da tsakiyar uniform na cikakken
bidiyo mai aiki ko taga mai da hankali kuma tana bayar da rahoton `policyEffective: uniform`:
firam ɗin fage guda ɗaya da aka zaɓa ba zai iya kiyaye duka ƙarshen lokaci biyu ba.
Mai kira zai iya bayar da taga mai da hankali mai iyaka (`start`/`end` a daƙiƙu);
ana daidaita iyakokin zuwa tsawon kafar watsa labarai, ana ƙin tagogin da aka juya ko
marasa iyaka, kuma ana aiwatar da duk manufofin ɗaukar samfurori ne kawai a cikin
tazarar da aka daidaita. Ana haɗa tagar da ta samu a cikin metadata na samfurin da kuma
a cikin prefix na bayanin da ba a amince da shi ba, domin samfurori na gaba su iya bambance
wani yanki da aka mai da hankali da cikakken jerin lokaci.

Mayar da hankali na ma'ana ga taken bayanin saitin daban ne kuma bayyananne. Yanayin
bincike na tsoho `full` yana kiyaye umarnin firam da ake da shi kuma ba ya taɓa tura
rubutun buƙata zuwa samfurin taken bayanin. A yanayin `focused`, gadar tana karanta
kawai sabon `text`/`input_text` marar fanko wanda mai amfani ya rubuta daga kwantenan
Chat ko Responses ɗin nan ɗaya, tana daidaita shi zuwa NFC, tana dunƙule haruffan sarrafawa
da fararen sarari, sannan tana iyakance shi zuwa maki na lambar Unicode 500. Sakamako
marar komai yana komawa ga ainihin umarnin `full`. Ana tsara wata alamar da za a iya
amfani da ita a matsayin JSON a cikin keɓantaccen tubalin mahallin mai amfani da ba a
amince da shi ba, kuma tana iya fifita bayanan da za a iya gani kawai; ba za ta iya
soke gargaɗi na daban game da bin umarnin da ake gani ko ji a cikin kafar watsa labarai ba.
Mayar da hankali ta rubutu ba ta taɓa ƙiyasta `start`/`end` ko sauya mai ɗaukar samfurin lokaci.

#### Shaidar sashe ta tsari ta FU-07

`segment_aware` yana amfani da zagaye guda na share-fage mai iyaka a kan rafin bidiyo na gida da aka riga aka tabbatar. Tsayayyen jerin matatun yana fara rage girma zuwa faɗin da bai wuce pixels 320 ba, yana gano sauye-sauyen fage da lokutan daskarewa, sannan yana ɗaukar samfurin frame 1 a kowace daƙiƙa domin auna dusashewa, matsakaicin luma, da bayanan sarari/lokaci. An iyakance zagayen zuwa samfuran tsari 600, thread guda na FFmpeg/filter, jerin izinin protocol na `file` kaɗai da na container iri ɗaya, iyakar fitowar process ta 1 MiB, da aƙalla daƙiƙa 30 a cikin tsarin katsewa/wa'adin gama aiki da broker ke rabawa. Ba ya taɓa karɓar umarni, mataci, path, ko URL daga request.

Ƙimomin tsarin hujjojin samfurin da za a iya maimaitawa ne, ba fahimtar ma'anar bidiyo ba. Ba sa hasashen batutuwa, ayyuka, captions, magana, ko manufar mai amfani. Iyakokin fage da daskarewa suna samar da segments; yawan daskarewa, dusashewa, exposure, cikakken bayanin sarari, da sauyin lokaci kawai suke tasiri kan yadda ake rarraba adadin frames 1–16 da ake da shi. Segment da ya daskare gaba ɗaya ana iyakance shi zuwa frame guda, yayin da segments da ba su daskare ba suke gasa don sauran adadin. Idan iyakoki sun fi frames yawa, ana riƙe da rarrabawa iri ɗaya a kan timeline domin saurin sauye-sauyen farko kada su ɓoye dogon segment na ƙarshe. Ana haɗa iyakokin fage da suke cikin ƙudurin bincike na daƙiƙa 1 daga iyakar daskarewa.

Rashin filters, hujja mai gurɓataccen tsari/mara komai, kuskuren detector, ko ƙarewar lokacin share-fage mai iyaka suna komawa kai tsaye ga ainihin tsarin tsakiyar tazara mai daidaito. Katsewar mai kira ko wa'adin broker ba ya komawa ga wannan tsarin: yana dakatar da subprocess da ke gudana, yana hana cire frames daga baya, kuma ana cire bishiyar wucin gadi mai zaman kanta a cikin `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` yana samar da fixtures na ainihin FFmpeg masu sakamako tabbatacce domin auna raguwar kiran caption bayan dedup, rarraba kasafin dense-motion, hujjojin blur/exposure/SI-TI, saurin sauye-sauye tare da dogon ƙarshen bidiyo, da sakamakon ƙarya na gradual-fade. Yana rubuta lokacin wall-clock na share-fage kuma, inda `/usr/bin/time` yake samuwa, yana rubuta CPU na child da mafi girman RSS. Gwaje-gwajen ingancinsa structural oracles ne kawai. Ingancin ainihin caption-model yana ci gaba da kasancewa `HOLD` saboda wannan harness ba shi da endpoint mai izini ko frozen judge. Tanadin kuɗi ma yana ci gaba da kasancewa `HOLD` sai idan `--caption-cost-per-call-usd` ya bayar da bayyanannen kimanta kuɗin kowane kira mai kyau; script ɗin ba ya ƙirƙirar ko ɗaya daga cikin sakamakon biyu na bogi.

An iyakance kowane frame zuwa 4 MiB, dukkan raw frames tare zuwa 23 MiB, kuma serialized response na broker zuwa 32 MiB. Ana cire directory na wucin gadi mai zaman kansa a cikin `finally`. OmniRoute ba ya haɗa FFmpeg a ciki kuma ba ya karɓar keɓaɓɓen executable path. Kafin yin captioning, bridge yana aiwatar da matakin cire kwafin gani cikin taka-tsantsan: ana rage kowane JPEG zuwa buffer na grayscale mai 16×16 sannan a kwatanta shi kawai da frame na ƙarshe da aka riƙe. Idan adadin caption da aka nema ya wuce frame guda, extraction yana samar da candidate pool mai iyaka wanda bai wuce ninki biyu na wannan adadin ba, kuma ba zai taɓa wuce frames 16 ba. Ana amfani da iyakar da aka nema ne kawai bayan deduplication, tare da kiyaye candidates na farko da na ƙarshe da aka zaɓa yayin thinning na ƙarshe idan adadin ya kai aƙalla biyu. Tsarin mai version
`grayscale-16x16-mean-cells-v2` yana amfani da mafi girma tsakanin matsakaicin bambancin luma da rabon thumbnail cells waɗanda normalized delta ɗinsu ya kai aƙalla 0.05. Duplicate threshold shi ne constant 0.04, wanda aka zaɓa saboda sauƙin hasashen sakamako maimakon a fallasa shi a matsayin runtime setting. Wannan siginar ƙarin
high-contrast tana kiyaye ƙananan motsi da sauye-sauyen rubutun da ake iya gani waɗanda kwatancen mean-only zai iya ɓoyewa. Kurakuran comparator ko decoder suna barin tsarin ya ci gaba tare da kiyaye coverage. Metadata na output yana ware candidates da aka cire, frames da aka yi nasarar amfani da su, da kwafin gani da aka watsar.

Wani ɓangaren bidiyo da aka yi wa alama a fili na iya neman contact sheet mai timestamps. Bridge yana gina grid na JPEG mai columns 4 da frames 16 aƙalla. Kowace cell mai pixels 512 tana ƙona timestamp na tushenta cikin bottom band mai high-contrast, yayin da timestamps iri ɗaya suke ci gaba da kasancewa a textual metadata domin haɗawa da dubawa daga baya. Cikakken JPEG yana ci gaba da kasancewa ƙarƙashin iyakar 32 MiB. Idan `sharp` bai iya decode ko compose grid ɗin ba, bridge yana komawa ga frames na JPEG ɗaiɗaiku; katsewar client kuwa har yanzu tana yaɗuwa ta cikin aikin sheet ɗin.

An ware hujjar promotion da gangan daga synthetic composition microbenchmark. `scripts/perf/video-bridge-contact-sheet-eval.ts` yana bayyana A/B harness mai schema-version domin ainihin vision models masu dacewa da OpenAI. Yana auna tokens da provider ya bayar da rahotonsu, end-to-end wall latency (ciki har da sheet composition), adadin model-call, da riƙe facts da manifest ya ayyana. Ba a rubuta raw responses na model cikin rahoton; SHA-256 digests da matched fact IDs kaɗai ake riƙewa. Harness ɗin ba ya yin network ko paid model call sai an tura `--execute-real` kuma an saita `--model`, `OMNIROUTE_BASE_URL`, da `OMNIROUTE_API_KEY`. Ba tare da wannan bayyanannen real run ba, verdict ɗinsa da na'ura za ta iya karantawa yana ci gaba da kasancewa `HOLD`; ma'aunin synthetic payload/call-count kaɗai ba hujjar promotion ba ce.

Masu kira za su iya haɗa optional `transcript.cues` array zuwa ɓangaren bidiyo mai goyon baya idan sun riga sun mallaki aligned text. Dole ne kowace cue ta ƙunshi `text`, finite `start`/`end` interval a cikin duration da aka probe, da `source` da aka amince da shi (`client`, `embedded`, ko `audio-bridge`); `confidence` yana komawa `1` ta tsohuwa kuma dole ne ya kasance tsakanin `0` da `1`. Ana haɗe exact duplicate cues su zama guda. OmniRoute ba ya taɓa fara transcription daga wannan metadata: ana kwafe cues da aka tabbatar zuwa sakamakon da aka bayyana tare da source, confidence, da interval, sannan a nuna su a matsayin observations marasa amana tare da frame captions. Ana ƙin text mara inganci, wanda ya fita daga range, ko wanda ba shi da provenance maimakon a gauraya shi cikin caption stream. Duk request-body transcript channels biyun suna normalize provenance da aka bayar zuwa `client`, ciki har da labels na `embedded` ko `audio-bridge` da aka jingina da kai. Server-owned adapter kaɗai zai iya sanya waɗannan trusted labels ta code-only `trustedSource` argument; request JSON field ba zai iya isa ga wannan argument ba. Transcript text yana ci gaba da kasancewa content marar amana da aka samo daga media, ba tare da la'akari da provenance ɗinsa ba, kuma bai kamata ya taɓa ƙayyade authorization ba.

Mai kira na ci gaba zai iya samar da waƙar `audioTranscript` don bidiyon guda;
ana ɗaukarta a matsayin rubutu da abokin ciniki ya bayar, ba hujjar kwafin magana daga uwar garke ba.
Haɗin yana gudanar da abubuwan lura na gani da na sauti ƙarƙashin
wa'adin ƙarshe da siginar katsewa guda ɗaya, yana jera su a kan jadawalin lokaci ɗaya, yana haɗe
kwafi masu daidaito gaba ɗaya, sannan yana bayar da rahoton sakamako na ɓangare idan ɓangare ɗaya kawai ya yi nasara.
`audioTranscript` marar inganci yana koma wa wannan sakamakon na ɓangare — ana riƙe
bayanin gani, yayin da reshen sauti yake adana tsaftataccen lambar gazawa —
maimakon a gaza da bidiyon gaba ɗaya. Samuwar kowane reshe, tutar ɓangare,
da tsaftatattun lambobin gazawa ana kiyaye su a cikin sakamakon da aka bayyana, a cikin
metadata na matakan kariya (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), a cikin metadata na ma'ajiyar sakamako, da kuma a cikin ƙididdigun
haɗin Bridge. Tsohuwar hanyar Video Bridge ba ta kiran sauya magana zuwa rubutu
ko zazzage kwafin kafofin watsa labarai na biyu; idan babu wannan waƙar da aka fayyace, tana ci gaba da zama
ta bidiyo kawai.

**Riƙe transcript (#12150 P1).** Wannan yana aiki kai tsaye duk lokacin da
Video Bridge (wanda shi kansa sai an zaɓi amfani da shi) ya nuna alamar transcript — babu wata
tutar riƙewa ta daban. Idan wata buƙata ta nuna kowace alamar transcript (wani `transcript`
da mai kira ya ayyana ko `audioTranscript` da aka haɗa), matakin kariya yana yi mata alamar
`videoBridgeObserved` kuma yana samar da kwafin inuwa da aka ɓoye na bayanin bidiyon —
nuni iri ɗaya wanda a cikinsa aka maye gurbin jikin rubutun 'yanci na kowace alama da
`[redacted-video-transcript]`, ta hanyar maye gurbin filin alama mai tsari
kafin a haɗa zaren (ba ta hanyar tantance rubutun da aka shimfiɗa ba, don haka babu wani abun cikin alama —
na cutarwa ko na yau da kullum, ciki har da jikin da ke ɗauke da `]` kamar
`[inaudible]`/`[music]` — da zai iya tsira). Jikin buƙatar rajistan kira da aka adana yana musanya
kowane ɓangaren rubutu da aka samo daga bidiyo da wannan inuwar da aka ɓoye, ta hanyar daidaiton
abun ciki; ana sake karanta matattakar `fullText` daga bayanan matakin kariya na kafin kira
da aka gama, don haka daidaitawar har yanzu tana yin nasara bayan matakan kariya na sarkar da suka biyo baya (masu ɓoye PII da
bayanan shaidar shiga, fifiko 10/95) sun sake rubuta bayanin a wurinsa, da kuma
bayan shigar da umarnin tsarin/miƙa aiki/Memory ya sake fasalta jerin saƙonni. Jikin
da aka aika zuwa samfurin bai canza ba. Buƙatar da aka lura da ita kuma ba ta cika
Memory mai ɗorewa ba (ana tsallake cire bayanai da aka samo daga buƙata da amsa),
don haka amsar samfurin kanta ba za ta iya maimaita rubutun transcript cikin Memory ba.

**Filayen bidiyo marasa sarrafawa (#12430).** Idan an kunna Bridge kuma ba a san goyon bayan bidiyo na asali ba ko babu shi, filayen `transcript`/`audioTranscript` da aka ayyana su ma suna kunna `videoBridgeObserved`, ko da bayan gazawar bayani ko iyakar `maxVideos`. `null` da zaruruwa marasa komai suna ƙidayuwa; filayen da babu su da metadata da ba na bidiyo ba ba sa ƙidayuwa. Kwafe da aka riƙe suna ɓoye waɗannan filayen ko su bar buƙatar gaba ɗaya, kuma ana ƙetare ma'ajiyoyi/Memory.

A waɗannan hanyoyin koma-baya, ingantattun alamomin mai kira suna zama ɓangarorin `text`/`input_text`
masu goyon baya maimakon filayen mai bayarwa marasa ma'auni. Waƙoƙin biyu da aka bayar tare da buƙata
suna ci gaba da kasancewa abubuwan lura na `client` marasa amana, tare da gargaɗi bayyananne cewa ba a
bayyana bidiyon ba kuma ba a tabbatar da tambarin lokaci da kafofin watsa labaran ba. Kasafin alamomi 256/KiB 64
gaba ɗaya da na kowace alama da ake da su suna aiki a kan waƙoƙin biyu tare;
dole ne tambarin lokaci su dace da iyakar daƙiƙa 600 ta dillalin da kuma duk wani taga mayar da hankali
da aka bayar. Ana watsar da waƙoƙin marasa inganci, ba a tura su a matsayin rubutu na son rai ba; har yanzu ana iya amfani da
ɗan'uwansu mai inganci sai dai idan sun wuce kasafinsu na haɗe. Filayen null/marasa komai
ba sa ƙara wani rubutu. Wannan koma-baya ba ya ƙara ɗauko kafofin watsa labarai ko yin transcript.
Ana cire filayen faɗaɗa transcript daga maɗaukin bidiyo na koma-baya da kuma abubuwan
`video_url`/`source` nasa. Jerin izinin OpenAI na kan waya yana ci gaba da tsauri; maɗaukan bidiyo
waɗanda ba a san goyon bayan asalinsu ba suna ci gaba da kasancewa samammu, kuma wuraren da aka san na rubutu kawai ne suna riƙe alamomin aminci.
Inuwar ɓoyewa mai tsari tana kare rubutun transcript da aka liƙa, yayin da
asalin buƙatar mallakar mai kira ba ta canza ba. Wuraren da ke da goyon bayan asali da
Bridge da aka kashe suna riƙe halin ƙetarewa da suke da shi.

Ƙarin kwafe da aka riƙe suna amfani da siginar buƙatar da aka lura da ita iri ɗaya. Hoton buƙatar abokin ciniki
marar sarrafawa na kafin matakin kariya, buƙatar da ke jiran aiki a cikin ƙwaƙwalwa, da rajistan
buƙatar da aka ƙi da wuri suna maye gurbin filayen transcript a ɓangarorin bidiyo bisa tsari;
ana ɓoye tsokaci na zare da matakan pipeline da miƙa mahalli suka samar
a wurin karɓar jikin buƙatar da aka adana. Alamar `video_content_removed` da aka adana
tana sa ci gaban `previous_response_id` ya kasa a rufe maimakon sake gina
rubutun da aka yar da gangan. Idan buƙatar da aka lura da ita ta rasa
inuwa ta ɓoyewa ta kowane ɓangare kafin yin rajista, ko ma ɗaya daga cikin inuwa da dama na bidiyo
ya kasa daidaituwa bayan sauye-sauyen buƙata na gaba, ana barin jikin buƙatar da aka riƙe
gaba ɗaya maimakon riƙe transcript da aka ɓoye wani ɓangare kawai.

Ga buƙatar da aka lura da ita, amsar samfurin na iya ambaton kowane ɓangare na
transcript ba tare da iyakar alama mai tsari ba. Saboda haka ana maye gurbin `responseBody`
na rajistan kira da aka adana da alamar tsallakewa; ba a riƙe cikakken kayan aikin
pipeline (wanda zai iya ƙunsar jikin upstream/abokin ciniki da guntayen stream) ba.
Ma'ajiyoyin ma'ana, idempotency, da sake kunnawa na reasoning suna ƙetare
karatu da rubutu don wannan buƙatar. Buƙatar mai bayarwa da amsar da abokin ciniki ke gani
ba su canza ba. Ana zubar da bytes na keepalive na farko daga ma'ajiyar wucin gadi
idan an tsallake cikakken kayan aikin. Gargadin EventStream mara tsari na Kiro
yana bayar da rahoton adadin bytes na payload kawai, ba abun cikinsa ko kuskuren ɗanyen
JSON parser ba.
Wannan ba ya da'awar cewa an duba kowace matsalar bincike ta wani mai bayarwa/plugin
da ba ta da alaƙa ba; ana bibiyar faɗaɗa binciken wuraren adanawa a #11658.

Tsarin rayuwar ciki na `/api/modality-bridge/video/drilldown` wani keɓantaccen matattarar cache ne da ake samun damar sa ta loopback/tantancewar token. Kowace aiki kuma tana buƙatar canonical opaque principal ID. Kafin a ba mai kira na production damar amfani da shi, dole ne ya samo wannan ID ɗin daga tenant da aka tantance, kuma kada ya taɓa tura ƙimar da abokin ciniki ya zaɓa. Maɓallan cache suna ɗaure wannan principal ɗin da canonical session da video-reference IDs, suna adana maɓallan da aka samo daga SHA-256 kawai, sannan suna keɓance karatu da gogewa ga principal ɗaya. Cache ɗin yana adana frame JPEG da aka samo guda 16 aƙalla ga kowace entry, yana sa su ƙare bayan minti goma, kuma yana tallafa wa karatun `start`/`end` mai iyaka ko gogewar session kai tsaye.

Kowane principal yana da iyakar entries 16 da MiB 64 na canonical JPEG data. Waɗannan iyakokin sun bambanta da iyakar duniya ta entries 64/MiB 256: matsin quota na principal yana fitar da entries na principal ɗin nan kaɗai waɗanda aka fi daɗewa ba a yi amfani da su ba kafin a yi la’akari da fitarwar global LRU. Ana share entries da suka ƙare daga lissafin principal da na duniya yayin ayyukan cache, yayin da sokewa da gazawar validation ba sa commit ɗin wani partial replacement.

Cache ɗin yana ƙin Base64 da ba canonical ba, padding da ya wuce kima, media da ba JPEG ba, JPEG marar inganci ko wanda aka yanke, da kuma JPEG da ke haifar da warning yayin bounded full-image `sharp` decode. Yana sake encode kowane image da aka karɓa a matsayin canonical JPEG, yana samo width da height daga decoded bytes maimakon amincewa da fields na mai kira, sannan yana watsar da duk trailing polyglot bytes maimakon riƙe su. Bounded canonical compressed buffer kaɗai ake lissafawa a kan quotas biyu. Iyakar JSON wire ta haɗa da ƙarin nauyin Base64 don iyakar decoded-input ta MiB 32. Kowace stored derivation tana yin rikodin validated JPEG format/resolution ɗinta, sampling policy, derivation version, creation time, server-computed content hash, da hashed parent reference tare da parent-content hash na amintaccen mai kira. Ana duba sokewa tsakanin asynchronous decode/hash phases kafin atomic cache commit.

Wannan tranche ɗin bai haɗa production producer da route ba tukuna, kuma bai samar da multi-resolution variant selection ba. Saboda haka, transparent Video Bridge request path ba ya jawo wani ƙarin aiki, yayin da tenant-bound principal derivation da cikakken FU-08 multi-resolution lifecycle suke ci gaba da kasancewa bayyanannen aikin da za a yi daga baya maimakon a rubuta su a matsayin halayen da aka kammala.

Ana yi wa frames caption ɗaya bayan ɗaya ta amfani da configured Video model. Video override mara komai yana gaji Vision setting; idan dukansu babu komai, Vision auto-router yana zaɓar effective vision-capable model. Captions da suka yi nasara suna maye gurbin original part da tsayayyen prefix na `[Video description:` wanda kuma yake nuna text ɗin a matsayin untrusted media-derived observation, sannan ya gaya wa downstream models kada su bi umarnin da aka samu a cikin media. Frame-caption cache keys suna haɗa JPEG bytes, prompt, timestamp, da effective model; captions da suka yi nasara kawai ake cache. Cache entries suna riƙe actual successful producer model, har da fallback model; bridge ɗin yana bayar da rahoton `mixed` idan models daban-daban ne suka samar da frames daban-daban. Cache hit yana sake amfani da producer identity ɗin maimakon sake masa lakabi a matsayin requested routing plan. Ana keying whole-video result cache bisa ga kowane input da ke canza output — prompt, effective model, sampling policy, frame count, semantic analysis mode, SHA-256 fingerprint na normalized focus hint, focus window, `transcript`, `audioTranscript`, da contact-sheet flag — don haka canza kowace daga cikin waɗannan dimensions yana haifar da cache miss, ba stale reuse ba. Visual dedup policy version, threshold, da bounded candidate-frame count ma suna bayyane a cikin result-cache key da metadata; saboda haka, canjin policy ba zai iya sake amfani da stale whole-video description ba. Result-cache v4 metadata yana riƙe mode da fingerprint, amma ba raw user task ba. Guardrail metadata yana bayar da rahoton requested analysis mode da effective analysis mode duka; requested `focused` mode wanda ba shi da usable user text ana bayar da rahotonsa a matsayin `full` a aikace.

Guardrail ɗin yana ciro kowane supported video part amma ba ya bayyana fiye da `modalityBridgeVideoMaxVideos`. Ga target da aka tabbatar yana da `supportsVideo === false`, videos da suka gaza da waɗanda suka wuce iyaka suna zama explicit safe text markers domin kada wani raw video ya tsira. Idan ba a san capability ba, waɗannan parts suna riƙe video carrier ɗinsu; duk wani fallback transcript yana bin bounded text conversion da ke sama. Targets masu `supportsVideo === true` suna kewaye bridge ɗin. Client request abort signal yana yaɗuwa ta download, broker queue, subprocesses, da caption calls; aborts suna tsayawa tsakanin videos kuma ba sa taɓa fail open zuwa raw media.

Runtime settings suna samun goyon bayan DB kuma ana validate ɗinsu da Zod:

| Maɓalli                             | Na asali    | Iyaka / ɗabi'a                                                                                                                   |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Lokacin aiki na zaɓi, sai an amince da amfani da shi                                                                             |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` yana kiyaye rubutun bayanin gabaɗaya; `focused` yana amfani da mahallin sabon saƙon mai amfani mai iyaka kuma marar amana |
| `modalityBridgeVideoModel`          | `""`        | Ya gaji samfurin Vision Bridge                                                                                                   |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                             |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ko `segment_aware` mai daidaituwa da tsawo; gazawar mai ganowa tana komawa zuwa `uniform`              |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                              |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                                   |

Ana taƙaita tsoffin ƙimomin lokacin jira na Bidiyo da aka adana waɗanda suka wuce daƙiƙa 120 zuwa
wa'adin dillali; ana ƙin sabbin rubutun saituna da suka wuce wannan iyaka.
`GET /api/modality-bridge/video/runtime` yana buƙatar amintaccen wurin loopback
na gida mai hatimi kafin tantancewa ko binciken lokacin aiki, sannan yana buƙatar
izinin gudanarwa. Yana dawo da `available` kawai, tsabtattun sigogin FFmpeg/ffprobe, da tsayayyen
dalili lokacin da lokacin aikin ba ya samuwa. Wurin ƙarshen fitarwa na ciki ba
API ne na loda fayil na jama'a ba: cikewar layin jira yana dawo da `503` tare da `Retry-After`, katsewar
mai kira tana dawo da `499`, kuma tsayayyen wa'adin dillali yana dawo da `504`. Amsoshin da aka sauya suna ƙara
`video->text;model=<visionModel>;parts=<videos>` zuwa tsakiyar
taken `x-omniroute-modality-bridge` ba tare da cire sassan Vision ko Audio ba.

### Mai Rufe PII (`piiMasker.ts`)

Yana aiki a matakai **biyu**.

- **`preCall`** yana kwafin payload, yana bi ta `system`, `messages`, `input`, da
  `prompt` (har da abubuwan da suke zaren rubutu kai tsaye), sannan yana amfani da `processPII()` (daga
  `@/shared/utils/inputSanitizer`) a kan filayen zaren rubutu na `content`/`text`. Lokacin da
  `PII_REDACTION_ENABLED=true`, ana ɓoye PII da aka gano a cikin
  payload mai fita. Wannan ba ya dogara da `INPUT_SANITIZER_MODE` (wanda kawai yake sarrafa
  manufar kutsen umarni). Lokacin da aka kashe ɓoyewa, kiran yana adana
  ƙididdigar abubuwan da aka gano ba tare da sake rubuta abun ciki ba.
- **`postCall`** yana yin kwafi mai zurfi na amsar, yana gudanar da `sanitizePIIResponse()` tare da
  mai rufe tsarin Responses-API (`maskResponsesOutput` — yana rufe
  `output_text` da `output[].content[].text`). Idan an yi wani ɓoyewa,
  amsar da aka gyara tana maye gurbin ta asali.

Kariyar ba ta taɓa toshewa; tana yin ƙarin bayani ne kawai (`meta.detections`,
`meta.redacted`) ko sake rubutawa.

### Kutsen Umarni (`promptInjection.ts`)

Yana gano tsare-tsaren cutarwa a cikin abun ciki da mai amfani ya bayar kuma yana tilasta
manufar da aka saita. Ɗabi'ar tana ƙarƙashin sauye-sauyen muhalli da zaɓuɓɓukan
constructor:

| Saiti          | Sauyin muhalli                                                                                        | Na asali | Tasiri                                                                                                                                                                                                            |
| -------------- | ----------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| An kunna       | `INPUT_SANITIZER_ENABLED`                                                                             | `true`   | Lokacin da yake `false`, kariyar tana tsallake aiki kai tsaye.                                                                                                                                                    |
| Yanayi         | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`   | Manufar kutsen umarni: `block`, `warn`, ko `log`. (Ana karɓar `redact` don dacewa da tsoffin nau'uka amma **ba ya** cire rubutun kutsen umarni; `PII_REDACTION_ENABLED` ne ke sarrafa sake rubuta PII na buƙata.) |
| Iyakar toshewa | zaɓin `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (laƙabi `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Mafi ƙarancin tsananin da ake buƙata don toshewa. A saitin asali, matsakaicin tsanani na lura kawai ne.                                                                                                           |

**Fifikon yanayi** (`getMode`): `options.mode` na mai kira →
mayewar alamar fasalin DB ta `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → muhallin `INJECTION_GUARD_MODE` → muhallin `INPUT_SANITIZER_MODE` →
`warn`. Saboda haka, mayewa daga dashboard yana rinjayar sauye-sauyen muhalli, don haka mahaɗin
Feature Flags yana sarrafa kariyar da ke gudana kai tsaye (ba sai an sake farawa ba). Karatun DB yana da kariyar gazawa:
idan ya sami kuskure, kariyar tana komawa ga ɗabi'ar da ta dogara da muhalli, kuma idan ba a saita
mayewa ba, ɗabi'ar tana daidai da warwarewa ta muhalli kawai.

Tushen ganowa:

1. `sanitizeRequest()` daga `@/shared/utils/inputSanitizer` (tarin masu ganowa na bai ɗaya
   da ake amfani da shi a wasu wurare cikin bututun sarrafawa).
2. Ginannen `DEFAULT_GUARD_PATTERNS` (a halin yanzu `system_override_inline` da
   `markdown_system_block`, dukansu suna da tsananin `high`).
3. `customPatterns` na zaɓi da ake miƙawa ta zaɓuɓɓukan constructor (zarurrukan rubutu, regex,
   ko bayanan `{ name, pattern, severity }`).

Lokacin da `mode === "block"` **kuma** aƙalla ganowa ɗaya ya kai matakin
tsanani da aka ƙayyade, `preCall` yana mayar da `{ block: true, message: "Request rejected:
suspicious content detected" }`. A halayen `warn`/`log`, guardrail ɗin yana yin log amma
yana ba da izinin kiran. Haka kuma ana fitar da shared helper `evaluatePromptInjection()`
ga masu kira da ke buƙatar tantance prompts ba tare da bi ta registry ba.

**Iyakar dubawa (v3.8.20):** detector ɗin yana bincika **16 KB na farko** kawai na
rubutun prompt da aka haɗa — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) a cikin
`src/shared/utils/inputSanitizer.ts`. Duka `detectInjection()` da
`evaluatePromptInjection()` suna yin `slice(0, MAX_INJECTION_SCAN_BYTES)` kafin gudanar da
pattern loop. Umarnin injection suna kasancewa kusa da saman input, don haka wannan
yana iyakance CPU/GC na regex a kan payloads masu girman ɗaruruwan KB ba tare da raunana ganowa ba (duba
#3932, #4041).

### Mai Rufe Bayanai na Sirri (`credentialMasker.ts`)

Yana aiki a matakai **biyu**, kuma shi ne na ƙarshe a default chain (priority `95`). Yana ɓoye
sanannun patterns na API-key / secret-token daga outbound payload (message
content, tool-call arguments, tool results) **da kuma** martanin provider, ta yadda
credential da aka manna cikin prompt (ko wanda tool result ya maimaita) ba zai zube
zuwa upstream provider ko komawa ga client ba.

- **Sai an kunna da gangan kawai**, bisa ƙa'ida iri ɗaya da PII redaction (kusa da Hard Rule #20):
  yana kashe sai dai idan `settings.credentialRedactionEnabled === true` **ko**
  `CREDENTIAL_REDACTION_ENABLED=true`. Idan a kashe yake, guardrail ɗin ba ya yin komai —
  ba ya taɓa toshewa kuma ba ya taɓa sake rubutawa.
- `redactCredentials()` yana bi ta cikakken payload/response tree (`walkValue()`,
  mai kariya daga prototype-pollution, mai kariya daga cycle ta hanyar `WeakSet`) kuma yana maye gurbin
  matches da placeholder na `[REDACTED:<type>]`, yana cloning kawai branches da suka
  canza a zahiri.
- `CREDENTIAL_PATTERNS` yana rufe keys na LLM providers (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens na VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), payment keys (Stripe, Square), cloud
  keys (AWS access key, Twilio, SendGrid, Mailgun), private keys / JWTs,
  connection strings masu ɗauke da credentials (`mongodb://user:pass@...`, da sauransu), da
  generic pattern na header-value na `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Keys masu tsarin header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) ana ɓoye su bisa tsari (value kawai, ana kiyaye scheme prefix kamar
  `Bearer `/`Basic `) maimakon ta generic text regex.
- Guardrail ɗin ba ya taɓa toshewa; yana sake rubutawa ne kawai (`modifiedPayload` /
  `modifiedResponse`) tare da yin annotation (`meta.credentialsRedacted`, `meta.count`).

Mai gadin regression: `tests/unit/credential-masker-guardrail.test.ts`.

## Kwangilar Tushe (`base.ts`)

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
  block?: boolean; // true yana dakatar da sarkar nan take
  message?: string; // ana nuna shi lokacin da aka toshe
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall ne ke mayar da shi don sake fasalin buƙatar
  modifiedResponse?: TValue; // postCall ne ke mayar da shi don sake fasalin amsar
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

Guardrail yana nuna cewa “babu canji” ta hanyar mayar da ko dai `void`, `{}`, ko
`{ block: false }`. Mayar da `modifiedPayload`/`modifiedResponse` yana maye gurbin
ƙimar da ke gudana cikin sarkar zuwa guardrails na gaba.
`signal?: AbortSignal` yana isar da zagayowar rayuwar mai kira zuwa guardrails. Soke buƙata shi ne keɓantaccen yanayin fail-open da aka yi da gangan: gadajen kafofin watsa bayanai suna dakatar da aiki kuma su share abubuwan wucin gadi ba tare da dawo da ɗanyen kafofin watsa bayanai zuwa manufa da aka san ba ta goyon bayansu ba.

## Rajista (`registry.ts`)

Singleton `guardrailRegistry` yana bayyana:

- `register(guardrail)` — yana ƙara (ko maye gurbin ta sunan da aka daidaita) guardrail kuma
  yana sake tsarawa ta hanyar hawan `priority`.
- `clear()` / `list()` — masu taimakawa gudanarwa.
- `runPreCallHooks(payload, context)` — yana maimaita guardrails masu aiki, yana wuce da
  payload ta hanyar `modifiedPayload`, kuma yana tsayawa a farkon `block: true`.
- `runPostCallHooks(response, context)` — tsarin guda ɗaya a gefen amsa.
- `resetGuardrailsForTests({ registerDefaults })` — yana share yanayi kuma a zaɓi
  yana sake yin rajistar tsoffin abubuwan don tsabtataccen keɓewar gwaji.

Duk masu gudu suna dawo da `{ blocked, payload|response, results, guardrail?, message? }`
inda `results` shine jerin bayanan `GuardrailExecutionResult` waɗanda suka haɗa da
filayen `blocked`, `skipped`, `modified`, `error`, da `meta` na kowane guardrail,
masu amfani don bin diddigi.

### Kashe Guardrails Ga Kowane Buƙata

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` yana tattara
jerin sunayen guardrail da aka cire kwafi waɗanda ya kamata a tsallake su don
buƙatar yanzu. Tushen (duk na zaɓi, duk an haɗa su):

- `apiKeyInfo.disabledGuardrails`
- Jikin buƙata `disabledGuardrails` (matakin sama)
- Jikin buƙata `metadata.disabledGuardrails`
- Header `x-omniroute-disabled-guardrails` (ko tsohon
  `x-disabled-guardrails`)

Ƙimar na iya zama jerin igiyoyi ko igiya mai raba-koma; ana daidaita sunaye
zuwa ƙananan haruffa kebab-case (`pii_masker` → `pii-masker`). Ana wuce da
sakamakon ta hanyar `context.disabledGuardrails` zuwa rajista, wanda ke
tsallake guardrails masu dacewa (`skipped: true` a cikin `results`).

## Tsarin Aiki

Ga kowane buƙata da ke gudana ta `src/sse/handlers/chat.ts` da
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` yana gina jerin abubuwan da za a tsallake daga maɓallin API, jiki,
    da kuma kanun labarai.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` yana gudanar da guardrails a cikin tsarin fifiko mai hawa:
    - Guardrails da aka kashe ana rubuta su a matsayin `skipped`.
    - Kowane `preCall` na guardrail na iya sake rubuta bayanan da aka ɗora ta hanyar `modifiedPayload`.
    - `block: true` na farko yana dakatar da sarkar kuma mai sarrafawa yana mayar da
      martanin kin amincewa da guardrail.
3.  Bayanan da aka ɗora (watakila an sake rubuta su) suna shiga cikin hanyar haɗin gwiwa da kuma
    aikin aika zuwa sama.
4.  Bayan an haɗa martanin, `guardrailRegistry.runPostCallHooks(...)`
    yana gudanar da sarkar iri ɗaya akan martanin. `block: true` anan yana jefar da martanin daga sama.

Guardrails da suka jefa kuskure ana rubuta su da `error: <message>` kuma ana shigar da su ta hanyar
`logger.warn`, amma sarkar tana ci gaba – an tsara ta don ta ci gaba duk da kuskure.

## Saita

Ma'aunin muhalli da guardrails na ciki ke karantawa:

| Variable                              | Wanda ke amfani da shi      | Tasiri                                                                                              |
| :------------------------------------ | :-------------------------- | :-------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | Saita `false` don kashe gano gaba ɗaya.                                                             |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | Manufar allura: `warn`, `block`, ko `log`. Tsohon darajar `redact` baya sake rubuta rubutun allura. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | Yanayin don kariyar allura; kuma alamar fasalin DB da **ke mamaye** ma'aunin muhalli (DB > ENV).    |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | Mafi ƙarancin tsanani da `MODE=block` ke ƙi: `high` (tsoho), `medium`, ko `low`.                    |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | Tsohon suna ga `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | Lokacin da `true`, PII na buƙata ana gyara shi (mai zaman kansa daga yanayin allura).               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (ƙasa da ruwa) | Yana sarrafa halayen masker na gefen martani.                                                       |

Guardrails na Modality Bridge suna karanta saitin lokacin aiki daga ma'ajiyar saitunan da DB ke tallafawa
(`getSettings()`), ba ma'aunin muhalli ba. Maɓallan farko na Vision sune
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, da
`modalityBridgeCacheMaxEntries`. Tsoffin maɓallan
`visionBridge*` ana karɓar su ne kawai a matsayin abin da aka rubuta na sake karantawa na zagaye ɗaya;
rubuce-rubucen dashboard suna amfani da maɓallan farko. Abubuwan tsoho da mai warwarewa na sake karantawa suna zaune a
`src/shared/constants/modalityBridgeDefaults.ts`, tare da tsoffin ma'auni da aka riƙe a
`src/shared/constants/visionBridgeDefaults.ts`.

Audio yana amfani da `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, da `modalityBridgeAudioMaxClips`, tare da saitunan
`modalityBridgeCache*` da aka raba. Audio bashi da tsohon maɓallin sake karantawa saboda an gabatar da waɗannan maɓallan tare da tsarin Modality Bridge.

Video yana amfani da `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, da
`modalityBridgeVideoTimeout`, tare da saitunan `modalityBridgeCache*` da aka raba.
An kashe shi ta tsohuwa saboda FFmpeg/ffprobe sune zaɓin dogaro na aiki kuma
ƙara rubutun firam yana ƙara jinkiri da farashin samfuri.

## Tsare-tsare na Musamman

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "An wuce kasafin kuɗi na yau da kullun" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Matakai:

1. Ƙirƙiri `src/lib/guardrails/myGuardrail.ts` yana faɗaɗa `BaseGuardrail`.
2. Aiwatar da `preCall` da/ko `postCall`.
3. Ko dai a yi rajista a lokacin shigo da kaya (tura daga `registerDefaultGuardrails`) ko
   kiran `guardrailRegistry.register(...)` a lokacin gudu — rajistar tana maye gurbin
   kowane tsarin tsaro na baya da suna ɗaya.
4. Ƙara gwaje-gwaje a ƙarƙashin `tests/unit/` (misalai masu akwai:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Gwaji

Yi amfani da `resetGuardrailsForTests()` tsakanin gwaje-gwaje don farawa daga sanannen yanayi.
Wuce `{ registerDefaults: false }` don farawa da rajista mara komai kuma
yi rajistar tsare-tsaren tsaro kawai da ake gwadawa. Vision Bridge yana karɓar allurar dogaro (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge yana bayyana
daidaitattun abubuwan da suka dace don saituna, iyawa, zaɓin samfurin STT, binciken takardun shaida,
da rubutawa. Don haka gwaje-gwaje na iya yin amfani da duka hanyoyin ba tare da DB
ko samun damar hanyar sadarwa ba.

## Duba Kuma

- `src/lib/guardrails/` — aiwatarwa
- `src/shared/utils/inputSanitizer.ts` — mai gano abubuwan da aka raba wanda ke ba da ƙarfi
  allurar saƙo da rufe PII
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge tsoffin saituna da
  jerin samfuran da aka tilasta-gada
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio tsoffin saitunan lokacin gudu
- `docs/architecture/RESILIENCE_GUIDE.md` — Layer na orthogonal (mai karya kewaye, sanyaya)
- `docs/reference/ENVIRONMENT.md` — cikakken bayanin env var

## Rufin hanyar kariya daga allura & ƙungiyar ja (Mataki na 8 · Block D)

Kariyar allura (`createInjectionGuard` / `withInjectionGuard`) tana rufe duk hanyoyin
da ke karɓar saƙonnin mai amfani. Tana mutunta `INJECTION_GUARD_MODE` (tsoho `warn` = log kawai;
`block` = yana dawo da HTTP 400 `SECURITY_001`).

| Nau'i | Hanyoyi | Yanayin tsoho |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | warn |
| Rubutu (mai akwai) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions` | warn |
| Generative | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn |
| Data | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations` | warn |

Cire rubutu (`extractMessageContents`) yana rufe `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Ƙungiyar ja (dare, `nightly-llm-security.yml`):** promptfoo yana tabbatar da cewa kowace hanya tana toshe
corpus na OWASP-LLM a cikin `INJECTION_GUARD_MODE=block`; garak yana gudanar da bincike (yana tsallake ba tare da sirri ba).
An haɗa `moderations` don daidaito — masu aiki a yanayin toshewa na iya keɓe shi ta hanyar
`resolveDisabledGuardrails`.

Aikin dare (`.github/workflows/nightly-llm-security.yml`, cron + manual
dispatch) yana da ayyuka biyu:

- **`promptfoo-guard` (toshewa)** — yana gudanar da `promptfoo eval -c promptfooconfig.yaml`
  tare da `INJECTION_GUARD_MODE=block`. Kowace shari'ar adawa (misali "yi watsi da duk
  umarnin da suka gabata…", DAN-style jailbreaks) yana tabbatar da cewa amsar tana ɗauke da
  `error.code === "SECURITY_001"`, wato, mai gadi ya ƙi buƙatar.
- **`garak` (shawara)** — yana gudanar da garak `--probes promptinject,dan,leakreplay`
  akan wani misali na OmniRoute na gida (`http://localhost:20128/v1`). An rufe shi da
  sirrin mai bayarwa (`PROMPTFOO_PROVIDER_KEY`); yana tsallake da kyau kuma an haɗa shi da
  `|| true`, don haka yana bayar da rahoto ba tare da gazawar CI ba.

Rufin mai taimakon gadi (`createInjectionGuard` / `withInjectionGuard`)
yana rufe kowace hanyar `/v1` mai ɗauke da saƙo; ana cire rubutun saƙo daga
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ta hanyar
`extractMessageContents()` a cikin `src/shared/utils/inputSanitizer.ts`.
