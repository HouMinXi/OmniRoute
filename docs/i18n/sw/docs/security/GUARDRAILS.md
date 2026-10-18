# Guardrails (Kiswahili)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Chanzo rasmi:** `src/lib/guardrails/`
> **Ilisasishwa mwisho:** 2026-08-29 — v3.8.51 (asili ya nakala ya Video Bridge hutangazwa na mpigaji,
> bado haijathibitishwa na seva — imefafanuliwa kulingana na #11661)

Vizuizi vya ulinzi hutekeleza usalama, sera na mageuzi ya maudhui kwenye mpaka
kati ya OmniRoute na watoa huduma wa ngazi ya juu. Kila kizuizi cha ulinzi kinaweza kukagua (na
kwa hiari kukataa, kubadilisha au kuweka ufafanuzi kwenye) data za ombi (`preCall`) na
majibu ya mtoa huduma wa ngazi ya juu (`postCall`).

Mfumo ni wa **fail-open**: ikiwa kizuizi cha ulinzi kitatupa hitilafu kinapotekelezwa, sajili
hurekodi hitilafu hiyo na kuendelea na kizuizi kinachofuata badala ya kusababisha
ombi lishindwe. Kuzuia ni uamuzi wa moja kwa moja (`block: true`), kamwe si ajali.

## Vizuizi Vilivyojengewa Ndani

Rejesta hupakia kiotomatiki vizuizi sita kwa mpangilio wa kipaumbele wakati wa kuingiza
(angalia `registry.ts` → `registerDefaultGuardrails()`):

| Kipaumbele | Jina                | Hatua          | Faili                 |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nambari za chini za kipaumbele hutekelezwa **kwanza**.

### Daraja la Maono (`visionBridge.ts`) — Daraja la Modali PR-1

Huzuia maombi yenye picha yanayolenga **modeli zisizo na uwezo wa maono** na ama
huelekeza upya ombi zima kwa modeli yenye uwezo wa maono au hubadilisha sehemu
za picha na maelezo ya maandishi yanayotolewa na modeli ya maono inayoweza kusanidiwa kabla
ya mwito wa mfumo wa juu. Hii huwaruhusu watoa huduma wa maandishi pekee kushughulikia kwa uwazi
mizigo ya data yenye modali nyingi.

Mtiririko:

1. Ruka ikiwa modeli lengwa tayari inatumia maono (isipokuwa ikiwa ipo katika
   orodha ya daraja la lazima `isVisionBridgeForcedModel`).
2. Toa sehemu za picha kupitia `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ambayo hukabidhi jukumu hilo kwa **kitambuzi unganifu cha midia**
   `detectMediaParts()` katika `open-sse/utils/mediaParts.ts` — chanzo
   kimoja cha ukweli kinachoshirikiwa na kichujio cha uoanifu wa combo.
   Utoaji unaruhusiwa tu kwa sehemu za kiwango cha juu zenye miundo ambayo
   `replaceImageParts` inaweza kuingiza tena (mkataba wa toa↔badilisha): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, na Responses API `input_image`. Vipengele vilivyopachikwa ndani na
   miundo ya viashiria pekee ni nyenzo za kichujio cha combo na havitolewi kamwe.
   Ruka ikiwa hakuna vilivyopatikana.
3. Amua usanidi wa wakati wa utekelezaji kupitia `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): funguo mpya za mipangilio za `modalityBridge*`
   hutangulia; funguo za zamani za `visionBridge*` hubaki kama **mbadala wa mzunguko mmoja**
   (kipindi cha kurejesha nyuma). Ruka kabla ya kupitia midia yoyote wakati
   daraja limezimwa.
4. Kiteuzi cha hali (`modalityBridgeVisionMode`, angalia jedwali lililo hapa chini) huamua
   kuelekeza upya dhidi ya kuelezea. Uelekezaji upya hurejesha `modifiedPayload` huku `model`
   pekee ikibadilishwa, pamoja na meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Njia ya kuelezea: punguza picha hadi `maxImages`, unda kidokezo kinachozingatia kazi,
   kagua kashe ya maelezo, ita modeli ya maono **kwa sambamba**
   (`Promise.allSettled`), na uingize sehemu za maandishi za `[Image N]: <description>`
   mahali pake. Maelezo yaliyoshindikana hutoa `null` na sehemu ya awali ya picha
   **inahifadhiwa** (#4012) — isipokuwa kwenye njia ya maelezo ya combo ambapo kila
   jaribio la kuelezea lilishindikana, ambapo mfumo wa juu uliothibitishwa kutokuwa na uwezo wa maono hupokea kishikilia nafasi cha
   `(hakipatikani — hakuna mtoa huduma mwenye uwezo wa maono aliyeunganishwa)` badala yake (#8430).
6. Rejesha `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Kiteuzi cha hali (`modalityBridgeVisionMode`)

| Hali       | Chaguo-msingi | Tabia                                                                                                                                                                                                                                                                                                                     |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔             | Heuristiki ya zamani, haijabadilishwa (#6640/#7204): modeli zisizo za combo/`auto/` huelekezwa upya kwa modeli bora zaidi ya maono isipokuwa modeli ya awali tayari ina vitambulisho vinavyoweza kutumika (hapo huelezea); malengo ya combo daima huelezea.                                                               |
| `describe` |               | Elezea kila wakati — sehemu ya kuelekeza upya inarukwa kabisa; modeli iliyochaguliwa na mtumiaji ndiyo hujibu kila wakati.                                                                                                                                                                                                |
| `reroute`  |               | Lazimisha uelekezaji upya: ulinzi wa kubakiza modeli yenye vitambulisho hupitwa. Ulinzi wa vitambulisho vya **lengo** la uelekezaji upya bado hutumika — wakati hakuna lengo la maono linaloweza kutumika, ombi huendelea hadi kwenye kuelezea ili picha ghafi zisifikie kamwe mfumo wa nyuma wa maandishi pekee (#8430). |

Hali za kulazimishwa hukatiza mapema **kabla** ya heuristiki ya kiotomatiki kutekelezwa; tabia ya `auto`
inafanana kwa kila baiti na kizuizi cha kabla ya PR-1.

#### Upeo wa ufunguo wa API (`visionBridgeKeyScope.ts`)

Wakati ufunguo wa API wa mwitaji unazuia `allowedConnections`, makundi ya mgao
(`allowedQuotas`) au modeli (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), daraja huchagua tu
modeli za kuelekeza upya na kuelezea ambazo ufunguo unaweza kutumia, kwenye miunganisho ambayo ufunguo unaweza
kutumia. Kisha mwito wa kuelezea daima hupitia kitanzi binafsi cha OmniRoute pamoja na
kichwa cha `x-omniroute-self-loop-key-id`, ili ombi la gumzo linalopokea
litekeleze tena sera ya muunganisho na modeli ya ufunguo huo. `enforceApiKeyPolicy()`
huheshimu kichwa hicho tu pamoja na bearer ya kitanzi binafsi, kwa hivyo kinaweza tu
kupunguza ufikiaji, na id ambayo haitatuliwi hukataliwa.

Ikiwa hakuna modeli ya maono inayoruhusiwa kwa ufunguo, njia ya kuelezea hujiondoa na
ombi hupita bila kubadilishwa, tabia ileile ya kuruhusu endapo kuna hitilafu kama kizuizi kilichozimwa
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Maombi yasiyo na ufunguo, na funguo zisizo na vizuizi hivi, hutenda sawasawa na
hapo awali.

#### Kidokezo cha maelezo kinachozingatia kazi (`modalityBridgeVisionTaskAware`)

Chaguo-msingi ni **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) huambatisha
maandishi ya **ujumbe wa mwisho wa mtumiaji** (yaliyopunguzwa hadi herufi 500) kwenye kidokezo cha msingi
cha maelezo, na kuelekeza maelezo kwenye kile ambacho mtumiaji aliuliza hasa
(muundo wa codex-vision-proxy), huku ikiomba modeli ya kuona inukuu maandishi yanayoonekana.
Bendera ikiwa imezimwa — au ikiwa hakuna maandishi ya mtumiaji — kidokezo cha msingi hutumiwa bila kubadilishwa.

Ombi la describe la mzunguko wake binafsi linalooana na OpenAI (`callVisionModelSingle()`
katika `visionBridgeHelpers.ts`) daima huomba `image_url.detail: "high"` —
bila masharti, kwa kila mwitaji/mtoa huduma, na bila kutegemea ishara yoyote ya mteja.
Usampulishaji wa kiwango cha chini cha maelezo hupunguza usahihi wa OCR kwa kazi hii hasa ya
kunukuu maandishi ambayo kidokezo hiki huiomba, kwa hiyo mwito wenyewe wa describe daima huomba kiwango cha juu
cha maelezo bila kujali kiwango cha maelezo kilichotumiwa na ombi la awali lililoingia. Hili
huathiri tu mwili wa ombi la ndani la describe; halibadilishi jinsi
OmniRoute inavyosambaza `image_url.detail` ya mwitaji mwenyewe kwenye ombi la msingi —
chaguo-msingi hilo hutumika kando, na kwa wateja wa OpenCode waliotambuliwa pekee, katika
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Tawi la
muundo wa waya wa Anthropic la mzunguko binafsi wa describe halina uga wa `detail`
na haliathiriwi na chaguo-msingi lolote kati ya hayo.

#### Kikomo cha matokeo ya describe (`modalityBridgeVisionMaxChars`)

| Ufunguo                        | Chaguo-msingi | Masafa           |
| ------------------------------ | ------------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`           | `0` au 100–50000 |

`0` (chaguo-msingi) humaanisha **hakuna kikomo** — maelezo yanayorejeshwa na
`callVisionModel()` hupitishwa bila kurekebishwa, na hivyo kuhifadhi tabia iliyopo.
Thamani yoyote katika masafa ya 100–50000 hupunguza maelezo na kuongeza kiambishi
`…` kabla hayajaingizwa tena kama `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` katika `src/lib/guardrails/visionBridge.ts`).
Ongeza thamani hii kwa kazi za OCR zenye maelezo mengi ambapo modeli ya chini ya mkondo inahitaji
nukuu kamili; ipunguze ili kuweka kikomo cha matumizi ya tokeni kwenye modeli za kuona zenye maelezo mengi.
Uga wa dashibodi unapatikana kwenye paneli ya Advanced ya kichupo cha Vision
(`modality-bridge-max-chars` katika `ModalityBridgeVisionTab.tsx`) na huongeza thamani yoyote
kati ya 1 na 99 hadi kiwango cha chini cha 100, huku ukiacha `0` iliyowekwa wazi
bila kuguswa — `0` ni thamani halali ya Zod kwa haki yake yenyewe
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), si tu
chaguo-msingi la "haijawekwa".

#### Akiba ya describe (`modalityBridge/bridgeCache.ts`)

Akiba ya kumbukumbu ya LRU + TTL kwa matokeo ya describe, inayoshirikiwa katika mchakato mzima.
Ufunguo = `sha256(imageRef + composedPrompt + configuredBridgeModel)` ikiwa na
uwekaji fremu wenye kiambishi cha urefu (hakuna migongano ya mipaka ya uga). Kipengele cha modeli ni
modeli ya daraja **iliyosanidiwa**, si modeli iliyojibu kwa kweli —
`callVisionModel` inaweza kutumia mbadala ndani yake, na kuweka ufunguo kwa kila jaribio
kungegawanya akiba. Maelezo ya describe yaliyoshindwa hayahifadhiwi kamwe. Mipangilio:

| Ufunguo                         | Chaguo-msingi | Masafa  |
| ------------------------------- | ------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`        | —       |
| `modalityBridgeCacheTtlMinutes` | `60`          | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`         | 10–5000 |

#### Urekebishaji wa picha za mbali (mwito binafsi wa describe/uchotaji wa base64)

Daraja linapochota picha ya **mbali** lenyewe — mwito binafsi wa describe wa Anthropic
na ubadilishaji wa base64 wa muundo wa waya wa claude
(`ensureBase64ImagesForClaudeWire`), vyote kupitia
`fetchRemoteImageAsDataUri()` katika `visionBridgeHelpers.ts` — URI ya data inayopatikana
hupitishwa kupitia `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) kabla ya kupachikwa katika ombi la modeli ya kuona.
Picha kubwa kupita kiasi hupunguzwa hadi **px 2048 kwenye ukingo mrefu** (sawa na
kikomo cha kubadilisha ukubwa ambacho OpenAI/Anthropic tayari hutumia upande wa seva), jambo linalopunguza
baiti/muda wa kusubiri wa upakiaji bila kubadilisha kile ambacho modeli ya kuona huona. Ubadilishaji wa ukubwa
hutumia `sharp`, inayopakiwa kupitia uingizaji unaobadilika: kwenye jukwaa ambalo faili yake asilia
ya jozi inashindwa kupakiwa, `normalizeDataUri()` **haitupi hitilafu kamwe** — hurudi
kwenye upitishaji wa baiti asili bila kuzibadilisha, hivyo njia ya describe/ubadilishaji wa base64
huendelea kufanya kazi daima. Baiti ambazo si za picha (uchotaji ambao haukurejesha picha
inayoweza kusimbuliwa) pia hupitishwa bila kuguswa. Urekebishaji huu unahusu tu
picha ambazo daraja huchota kwa ajili ya mwito wake binafsi — hautumiki kamwe
kwenye mzigo ghafi wa mwitaji unaopitishwa moja kwa moja, kulingana na kanuni ya
kubadilisha kwa hiari pekee (Kanuni Kali #20).

#### Muundo wa mipangilio + uhamishaji

Funguo mpya za `modalityBridge*` huhakikiwa na Zod katika `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, utatu wa `modalityBridgeCache*`, na kundi la
`modalityBridgeAudio*` linalotumiwa na Audio Bridge. Uhamishaji
`141_modality_bridge_settings.sql` hunakili thamani zilizopo za zamani za
`visionBridge*` kwenda kwenye funguo mpya zinazolingana (unaweza kuendeshwa mara nyingi bila athari,
na hauandiki kamwe juu ya thamani ya `modalityBridge*` iliyowekwa na mwendeshaji); funguo za zamani
zinaendelea kukubaliwa kama mbadala wa usomaji kwa mzunguko mmoja wa toleo.

#### Kijajuu cha uwazi + takwimu

Majibu yaliyobadilishwa na describe hubeba
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(kinachoundwa na `buildModalityBridgeHeader()` katika `modalityBridge/bridgeStats.ts`,
na kuwekwa na `withModalityBridgeHeader()` katika `src/sse/handlers/chatHelpers.ts`).
Maombi yaliyoelekezwa upya hayapati kijajuu **chochote** — mzigo haukuguswa na ubadilishaji wa modeli
tayari unaonekana katika uga wa `model` wa mwili wa jibu.

`GET /api/modality-bridge/stats` (uthibitishaji wa usimamizi, kiwango sawa na
`GET /api/settings`) hurejesha vihesabu vya kila aina ya maudhui vilivyo kwenye kumbukumbu
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` kwa `vision`, `audio`, na
`video`. `averageLatencyMs` hutumia `latencySamples`, si majaribio yote, kama
kigawanyio chake; operesheni isiyo na kipimo cha muda haitengenezi sampuli bandia
ya milisekunde sifuri. `bridged` hubaki kuwa jina mbadala linalooana na matoleo
ya awali kwa ubadilishaji uliofanikiwa; majaribio yaliyoshindwa hayakiongezi.
Vihesabu huwekwa upya mchakato unapoanzishwa upya kwa makusudi
(telemetria, si uhasibu).

#### Usanidi wa dashibodi

Ukurasa maalumu wa dashibodi ni
`/dashboard/settings/modality-bridge`. Vichupo vyake vya `Vision`, `Audio`,
na `Video` vinavyoweza kufikiwa kwa URL huhifadhi vigezo vya hoja wakati wa
kubadilisha thamani ya `tab`.
Kichupo cha Vision kinaonyesha uwezeshaji, modi, uteuzi wa modeli (ikiwemo chaguo-msingi
la kiotomatiki), uundaji wa maelekezo unaozingatia kazi, vikomo vya kina vya muda wa kusubiri/picha/urefu wa maelezo/akiba,
vihesabu vya wakati wa utekelezaji, na ombi la sampuli lenye ulinzi. Kichupo cha Audio pia
kinafanya kazi: kinaonyesha uwezeshaji, kiteua modeli za STT pekee chenye Auto, vikomo vya
muda wa kusubiri/urefu wa juu wa klipu, vihesabu vya sauti, na jaribio la sampuli la
`input_audio`. Kichupo cha Video kinafanya kazi: huripoti hali ya wakati wa utekelezaji ya
FFmpeg/ffprobe — mojawapo ya hali nne dhahiri za UI (`unknown` wakati
uchunguzi unaendelea au haukuweza kukamilika, `restricted` kwenye seva pangishi ya
dashibodi isiyo ya loopback ambapo uchunguzi unarukwa upande wa kiteja, `unavailable`
baada ya kuchunguzwa na kuthibitishwa kuwa haipo, au `available` pamoja na matoleo ya
FFmpeg/ffprobe) — huhifadhi vikomo vya uwezeshaji/modeli/fremu/video/muda wa kusubiri,
huchuja kiteua modeli ili kubaki na modeli zenye uwezo wa kuona,
na huonyesha vihesabu vya video.

Kadi ya zamani ya Vision Bridge chini ya mipangilio ya AI ni kiungo cha uoanifu kinachoelekea
kwenye ukurasa mpya; haimiliki tena nakala ya pili ya fomu. Media Providers pia
huunganisha mitiririko ya kazi ya Image-to-Text na Speech-to-Text na vichupo husika vya
Modality Bridge bila kuondoa eneo lililopo la majaribio la Speech-to-Text.

**Upitaji wa udhibiti wa uidhinishaji kwa kitanzi binafsi:** wakati mwito wa kuelezea unapitia
kwenye `/v1` self-loop ya OmniRoute yenyewe (modeli isiyo ya kawaida ya mtoa huduma),
ombi dogo hutuma `x-omniroute-admission-bypass: internal` na kuthibitishwa kwa kitambulisho
kilichotatuliwa cha self-loop — alama ya ndani ya `sk_omniroute` katika modi ya ndani, au
ufunguo wa mazingira wa `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` uliosanidiwa na mwendeshaji
(#1350), ili usambazaji wenye `REQUIRE_API_KEY=true` bado uweze kutekeleza mwito wa
kuelezea. Upitaji huo unakubaliwa tu kwa vitambulisho hivyo halisi, kwa hivyo viteja vya nje
haviwezi kutumia kichwa hicho kuruka udhibiti wa uidhinishaji.

Chaguo-msingi za zamani zipo katika `src/shared/constants/visionBridgeDefaults.ts`;
chaguo-msingi mpya za modi/uzingatiaji wa kazi/akiba na kitatuzi cha mipangilio zipo katika
`src/shared/constants/modalityBridgeDefaults.ts`. Kinga hutoa chaguo la kijenzi la
`deps` ili majaribio yaweze kuingiza utekelezaji bandia wa `getSettings` na
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Hunasa maombi ya gumzo yenye sauti kabla hayajafikia lengwa ambalo halijulikani
kama linakubali ingizo la sauti. Haibadilishi kamwe njia ya ombi la gumzo: sehemu za sauti
hunakiliwa kupitia kituo kilichopo cha multipart kinachooana na OpenAI, na modeli
iliyochaguliwa ya gumzo huendelea na nakala za maandishi.

Mtiririko:

1. Tatua `supportsAudio` kupitia `getResolvedModelCapabilities()`. Metadata dhahiri ya
   sajili ya mtoa huduma hupewa kipaumbele, ikifuatiwa na metadata tuli ya modeli, kisha
   `modalities_input` iliyosawazishwa. Orodha ya maingizo iliyotangazwa bila `audio` ni
   `false`; kutokuwepo kwa ushahidi wa uwezo hubaki `null`. `false` na `null` zote
   huwasha daraja la tahadhari, huku `true` ikilipita.
2. Tatua mipangilio ya `modalityBridgeAudio*` na utoe sehemu za sauti za kiwango cha juu
   zinazoweza kuunganishwa kutoka kila ujumbe kupitia kigunduzi cha pamoja cha
   `detectMediaParts()`. Miundo ya waya inayotumika ni `input_audio` ya OpenAI,
   `audio_url`, na `source.media_type: "audio/*"`. Sauti iliyopachikwa hugunduliwa kwa
   ajili ya upangaji wa njia lakini haiondolewi na njia ya kuunganisha. Kazi huwekewa
   kikomo na `modalityBridgeAudioMaxClips`; sehemu zinazofuata huachwa bila kubadilishwa.
3. Heshimu `provider/model` iliyosanidiwa, au ruhusu `selectAudioBridgeModel()` ipitie
   `AUDIO_TRANSCRIPTION_PROVIDERS` kwa mpangilio thabiti wa katalogi na kuchagua modeli
   ya kwanza yenye kitambulisho kinachoweza kutumika cha mtoa huduma anayetumika.
4. `callAudioTranscription()` hubadilisha sauti ya base64/data-URI kuwa `file` ya multipart,
   au hupakua `audio_url` ya mbali kupitia kinga ya utokaji ya umma pekee yenye ubandikaji
   wa DNS na kikomo cha 25 MB. Kisha hutuma faili na modeli iliyochaguliwa kwa POST
   kwenda kwenye self-loop ya ndani ya `/v1/audio/transcriptions`, ikithibitishwa kwa
   `resolveSelfLoopBearer()`. Njia iliyopo ya unakili hutekeleza utafutaji wa kawaida wa
   vitambulisho, ushughulikiaji wa muda wa kusubiri/kikomo cha kasi, na upelekaji kwa
   mtoa huduma.
5. Miito iliyofanikiwa hubadilisha sehemu zake kuwa `[Audio N]: <transcript>`. Miito
   hutekelezwa kwa `Promise.allSettled`: hitilafu ya mwito mmoja huhifadhi sehemu hiyo
   ya sauti ya awali (mkataba wa #4012). Ikiwa kila mwito utashindwa na lengwa limethibitishwa
   kuwa `supportsAudio === false`, sehemu hubadilika kuwa
   `[Audio N]: (unavailable — no STT provider connected)` (mkataba wa #8430). Kwa
   lengwa lisilojulikana (`null`), matokeo ambayo yote yameshindwa huachwa bila kubadilishwa.
   Lengwa lililothibitishwa kuwa la maandishi pekee bila kitambulisho cha STT kinachoweza
   kutumika hupokea kibadala hicho hicho dhahiri bila kutoa mwito wa mtandao.

Nakala zilizofanikiwa hutumia akiba ya LRU/TTL ya Modality Bridge inayotumika katika
mchakato mzima. Ufunguo huunganisha rejeleo la sauti, lebo thabiti ya operesheni ya
`audio-transcription`, na modeli iliyochaguliwa ya STT; hitilafu hazihifadhiwi kamwe
kwenye akiba. Majaribio ya sauti husasisha vihesabu vya pamoja vya `bridged`, `cacheHits`,
`failures`, na `lastUsedAt`.
Majibu yaliyobadilishwa huwa na
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; maombi ambayo
hayajaguswa hayapokei sehemu ya Audio Bridge.

Mipangilio ya wakati wa utekelezaji huhifadhiwa kwenye DB na kuthibitishwa kwa Zod:

| Ufunguo                       | Chaguo-msingi | Masafa                            |
| ----------------------------- | ------------- | --------------------------------- |
| `modalityBridgeAudioEnabled`  | `true`        | —                                 |
| `modalityBridgeAudioModel`    | `""`          | Otomatiki au kitambulisho cha STT |
| `modalityBridgeAudioTimeout`  | `60000`       | 1000–300000                       |
| `modalityBridgeAudioMaxClips` | `3`           | 1–10                              |

Akiba ya pamoja inaendelea kudhibitiwa na `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, na `modalityBridgeCacheMaxEntries`.

### Daraja la Video (`videoBridge.ts`, `videoBridgePipeline.ts`)

Hunasa sehemu za video za kiwango cha juu katika `messages` za Chat Completions na
`input` ya Responses API kabla lengo lisilo na usaidizi unaojulikana wa asili wa video
halijaitwa. Miundo inayotumika ni `input_video`, `video_url`, `video_source`, URL za HTTPS,
na URI za data za `data:video/*;base64,...`. Majina ya faili ya kawaida katika maandishi
hayachukuliwi kuwa video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) inasimamia upitishaji wa ombi, ukaguzi
wa uwezo/sera, ujumlishaji wa kila ombi, na mzigo wa data wa jibu.
Kazi ya kila video — upataji, akiba ya matokeo kamili, ufafanuzi wa mfuatano wa fremu
(ambao huunganisha nakala yoyote ya sauti iliyotangazwa na mwitaji), pamoja na
vipimo/ukatishaji/usafishaji wa kila jaribio — imefichwa nyuma ya `processVideoPart` katika
`videoBridgePipeline.ts`, ambayo huitwa mara moja kwa kila sehemu ya video ndani ya kitanzi
cha `preCall`. Moduli hiyo pia hufafanua mipaka bayana ya port, `VideoMediaBrokerPort`
(upataji wa baiti na uchimbaji wa fremu zilizochukuliwa sampuli), `VideoAudioTranscriptionPort`
(uunganishaji wa nakala ya sauti iliyotangazwa na mwitaji na maelezo ya fremu zilizochukuliwa
sampuli), na `VideoDrilldownPort` (mpaka wa uhifadhi wa uchunguzi wa kina wa fremu; bado
haujaunganishwa katika `processVideoPart` — ni njia tofauti ya
`/api/modality-bridge/video/drilldown` pekee inayoandika maingizo ya uchunguzi wa kina kwa sasa).

Njia ya ombi ya umma ya `/v1` haiingizi wala kuendesha mchakato mdogo kamwe. Video za mbali
hupakuliwa chini ya kikomo cha MiB 50; video za base64 zilizopachikwa zina kikomo cha
kihafidhina cha MiB 36 kilichosimbuliwa kwa kila video ili bahasha ya modeli/ujumbe/uundaji
wa fremu ibaki ndani ya kikomo cha umma cha MiB 50 cha kukubali ombi la JSON. Urefu wa
maudhui yaliyopachikwa na makadirio ya ukubwa uliosimbuliwa hukaguliwa kabla ya kutenga
kumbukumbu. HTTPS inahitajika kwenye URL ya awali ya mbali na kila uelekezaji upya, kwa
kutumia kinga iliyopo ya miunganisho ya nje ya umma pekee yenye ufungaji wa DNS. Kisha baiti
huvuka mpaka mahususi wa ndani wa dalali wa `POST /api/modality-bridge/video/extract`. Njia
hiyo ni `LOCAL_ONLY` na `SPAWN_CAPABLE`, hukubali tu ombi lililothibitishwa kwa kila mchakato
kutoka loopback inayoaminika, na haikubali kamwe URL, njia ya mfumo wa faili, faili tekelezi,
au orodha ya hoja. Msururu wa kikomo cha ukubwa wa mwili wa API na kisomaji cha mwili cha
hatua kwa hatua cha kishughulikiaji hutekeleza kila kimoja kikomo cha ingizo la dalali cha
MiB 50. Foleni yake yenye kikomo huendesha uchimbaji mmoja kwa wakati mmoja, huruhusu kazi
nne zinazosubiri, na kuweka kikomo cha MiB 100 kwa ingizo linalosubiri.

Ndani ya dalali, `ffprobe` husoma faili binafsi ya ndani; orodha isiyobadilika ya miundo
inayoruhusiwa huondoa miundo ya orodha za kucheza na manifesti. Kwa kontena zinazoruhusiwa
za familia ya MOV, marejeleo ya nje ya data ya MOV hubaki yamezimwa kwa chaguo-msingi, na
amri isiyobadilika haiyawezeshi. `ffprobe` na `ffmpeg` zote hutumia orodha ya itifaki
zinazoruhusiwa ya `file` pekee, thread moja, safu zisizobadilika za hoja, bila shell, na
faili tekelezi zinazotafutwa kutoka `PATH`. Mitiririko ya picha za jalada zilizoambatishwa
si wagombea wanaoweza kuchezwa. Mitiririko yote inayoweza kuchezwa lazima itimize vikomo,
na mtiririko chaguo-msingi uliobainishwa hupendelewa kabla ya chaguo la akiba linaloweza
kutabirika lenye faharasa ya chini zaidi. Video zina kikomo cha sekunde 600, pikseli 8,192
kwa kila kipimo, na pikseli chanzo 33,554,432. FFmpeg huchukua sampuli za fremu 1–16 za JPEG
za sehemu ya kati, hupunguza ukingo mrefu hadi usiozidi pikseli 1,024 bila kuongeza ukubwa
wa maingizo madogo, na haipokei URL kamwe. Uchukuaji sampuli ni `uniform` kwa chaguo-msingi.
Sera ya hiari ya `scene_aware` na sera ya majaribio ya `segment_aware` hufanya pitio moja
la ziada lisilobadilika la FFmpeg juu ya mtiririko wa ndani ambao tayari umethibitishwa,
huchagua mihuri ya muda ya mandhari ya `showinfo` iliyo na kikomo, na hurudi kwa namna
inayoweza kutabirika kwenye sehemu zilezile za kati zinazofanana endapo kigunduzi kitashindwa,
muda utaisha, towe litakuwa na hitilafu, au seti ya wagombea itakuwa tupu. Hali inayozingatia
vipande hugawa sampuli za sehemu ya kati kwa uwiano kulingana na vipindi vya mandhari
vilivyothibitishwa; ushahidi wa hali inayozingatia vipande na tabia ya kurudi kwenye chaguo
la akiba zimeelezwa kwa kina hapa chini. Kikomo thabiti cha fremu 16 hutumika baada ya
uteuzi katika kila sera. Ombi linalozingatia mandhari likiwa na bajeti ya fremu moja pekee,
hutumia sehemu ya kati ya `uniform` ya dirisha amilifu la video nzima au eneo la kuzingatia
na huripoti `policyEffective: uniform`: fremu moja iliyochaguliwa ya mandhari haiwezi
kuhifadhi ncha zote mbili za muda. Mwitiaji anaweza kutoa kwa hiari dirisha lenye kikomo
la kuzingatia (`start`/`end` kwa sekunde); mipaka hubanwa kulingana na muda wa maudhui,
madirisha yaliyogeuzwa au yasiyo na thamani yenye ukomo hukataliwa, na sera zote za
uchukuaji sampuli hutekelezwa ndani ya kipindi kilichorekebishwa pekee. Dirisha linalotokana
hujumuishwa katika metadata ya uchukuaji sampuli na katika kiambishi awali kisichoaminika
cha maelezo ili modeli za hatua zinazofuata ziweze kutofautisha dondoo inayolengwa na
ratiba kamili ya matukio.

Ulengaji wa kisemantiki wa maelezo mafupi ni mpangilio tofauti na bayana. Hali chaguo-msingi
ya uchanganuzi ya `full` huhifadhi kidokezo kilichopo cha fremu na haitumi kamwe maandishi ya
ombi kwa modeli ya maelezo mafupi. Katika hali ya `focused`, daraja husoma tu `text`/`input_text`
ya hivi karibuni isiyo tupu iliyoandikwa na mtumiaji kutoka kwenye kontena lilelile la Chat
au Responses, huiweka katika umbo la NFC, hukusanya herufi dhibiti na nafasi nyeupe, na
huiwekea kikomo cha nukta 500 za msimbo wa Unicode. Tokeo tupu hurudi kwenye kidokezo
halisi cha `full`. Dokezo linaloweza kutumika husawazishwa kama JSON katika sehemu maalum
ya muktadha wa mtumiaji usioaminika na linaweza tu kutanguliza maelezo yanayoweza
kuonekana; haliwezi kubatilisha onyo tofauti dhidi ya kufuata maagizo yanayoonekana au
kusikika katika maudhui. Ulengaji wa maandishi haukadirii kamwe `start`/`end` wala kubadilisha
kichukua sampuli cha muda.

#### Ushahidi wa kimuundo wa vipande wa FU-07

`segment_aware` hutumia mzunguko mmoja wenye mipaka wa uchanganuzi wa awali kwenye
mtiririko wa video wa ndani ambao tayari umethibitishwa. Msururu maalum wa vichujio kwanza
hupunguza ukubwa hadi upana usiozidi pikseli 320, hutambua mabadiliko ya matukio na vipindi
vilivyoganda, kisha huchukua sampuli kwa kasi ya fremu 1 kwa sekunde ili kupima ukungu, wastani
wa luma, na taarifa za anga/muda. Mzunguko huu unawekewa kikomo cha sampuli 600 za kimuundo,
uzi mmoja wa FFmpeg/kichujio, orodha zilezile za ruhusa za itifaki ya `file` pekee na kontena,
kikomo cha MiB 1 cha matokeo ya mchakato, na upeo wa sekunde 30 ndani ya ukatishaji/muda wa
mwisho unaoshirikiwa na broker. Haukubali kamwe amri, kichujio, njia, au URL kutoka kwenye ombi.

Thamani za kimuundo ni ushahidi wa uchukuaji sampuli unaoweza kurudiwa kwa uthabiti, si uelewa
wa kisemantiki wa video. Hazibashiri mada, vitendo, manukuu, mazungumzo, au nia ya mtumiaji.
Mipaka ya matukio na hali ya kuganda huunda sehemu; kiwango cha kuganda, ukungu,
mwangaza, undani wa anga, na mabadiliko ya muda huathiri tu jinsi bajeti iliyopo ya
fremu 1–16 inavyogawiwa. Sehemu iliyoganda kikamilifu huwekewa kikomo cha fremu moja,
huku sehemu ambazo hazijaganda zikishindania bajeti iliyobaki. Mipaka inapozidi idadi ya
fremu, usambazaji sawia katika mstari wa muda hudumishwa ili mikato ya haraka ya mwanzo
isiweze kuficha sehemu ndefu ya mwisho. Mipaka ya matukio iliyo ndani ya azimio la uchanganuzi
la sekunde 1 kutoka kwenye mpaka wa kuganda huunganishwa.

Vichujio vinavyokosekana, ushahidi wenye hitilafu/usio na data, hitilafu ya kigunduzi, au
kuisha kwa muda wa uchanganuzi wa awali wenye mipaka husababisha kurudi kwenye sera ileile
ya nukta za kati zilizosambazwa sawia. Ukatishaji wa mpigaji au muda wa mwisho wa broker
hausababishi hali hiyo: husitisha mchakato mdogo unaoendelea, huzuia uchimbaji wa fremu
unaofuata, na mti wa muda wa faragha huondolewa katika `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` hutengeneza sampuli za majaribio halisi za FFmpeg
zinazoweza kurudiwa kwa uthabiti kwa ajili ya akiba ya miito ya manukuu baada ya kuondoa
nakala rudufu, ugawaji wa bajeti kwa mwendo msongamano, ushahidi wa ukungu/mwangaza/SI-TI,
mikato ya haraka yenye sehemu ndefu ya mwisho, na matokeo chanya ya uongo kutokana na
ufifishaji wa taratibu. Hurekodi muda halisi uliopita wa uchanganuzi wa awali na, pale ambapo
`/usr/bin/time` inapatikana, CPU ya mchakato mtoto na kilele cha RSS. Ukaguzi wake wa ubora
ni vipimo vya marejeleo vya kimuundo pekee. Ubora wa modeli halisi ya manukuu unabaki
`HOLD` kwa sababu zana hii ya majaribio haina endpoint iliyoidhinishwa wala tathmini
iliyofungwa. Akiba ya kifedha pia hubaki `HOLD` isipokuwa
`--caption-cost-per-call-usd` itoe makadirio bayana na chanya ya gharama kwa kila mwito;
skripti haitungi kamwe mojawapo ya matokeo hayo.

Kila fremu inawekewa kikomo cha MiB 4, fremu zote ghafi kwa pamoja MiB 23, na jibu la broker
lililofululizwa MiB 32. Saraka ya muda ya faragha huondolewa katika `finally`. OmniRoute
haijumuishi FFmpeg na haikubali njia maalum ya faili tekelezi. Kabla ya kuweka manukuu,
bridge hutekeleza mzunguko wa tahadhari wa kuondoa nakala rudufu zinazoonekana: kila JPEG
hupunguzwa kuwa bafa ya kijivu ya 16×16 na hulinganishwa tu na fremu ya mwisho iliyohifadhiwa.
Kwa bajeti ya manukuu iliyoombwa inayozidi fremu moja, uchimbaji hutoa
mkusanyiko wenye mipaka wa wagombea usiozidi mara mbili ya bajeti hiyo na usiozidi kamwe fremu 16.
Kikomo kilichoombwa hutumika tu baada ya kuondoa nakala rudufu, huku wagombea wa kwanza na wa
mwisho waliochaguliwa wakihifadhiwa wakati wa upunguzaji wa mwisho ikiwa bajeti ni angalau
mbili. Sera yenye toleo
`grayscale-16x16-mean-cells-v2` hutumia thamani kubwa zaidi kati ya tofauti ya wastani wa luma na
uwiano wa seli za kijipicha ambazo tofauti yake iliyosawazishwa ni angalau 0.05. Kizingiti
cha nakala rudufu ni thamani thabiti 0.04, iliyochaguliwa kwa ajili ya kutabirika badala ya
kuwekwa wazi kama mpangilio wa wakati wa utekelezaji. Ishara hii ya pili yenye
utofautishaji mkubwa huhifadhi mwendo mdogo na mabadiliko ya maandishi yanayoonekana ambayo
ulinganisho wa wastani pekee unaweza kuficha. Hitilafu za kilinganishi au kisimbuzi-fumbuzi
huruhusu kuendelea na hudumisha ufikiaji. Metadata ya matokeo hutenganisha wagombea
waliochimbwa, fremu zilizotumika kwa mafanikio, na nakala rudufu zinazoonekana zilizoondolewa.

Sehemu ya video iliyowekwa alama wazi inaweza kuomba karatasi ya mawasiliano yenye mihuri ya muda.
Bridge huunda gridi ya JPEG yenye hadi safu wima 4 na fremu 16. Kila seli ya pikseli 512
huchomeka muhuri wa muda wa chanzo chake kwenye ukanda wa chini wenye utofautishaji mkubwa,
huku mihuri hiyo hiyo ya muda ikibaki katika metadata ya maandishi kwa ajili ya uhusishaji na
ukaguzi wa baadaye. JPEG kamili hubaki na kikomo cha MiB 32. Ikiwa `sharp` haiwezi kusimbua
au kuunda gridi, bridge hurudi kwenye fremu binafsi za JPEG; ukatishaji wa mteja bado
huenezwa kupitia operesheni ya karatasi.

Ushahidi wa kuidhinisha uendelezaji umetenganishwa kimakusudi na jaribio dogo la utendaji
la uundaji sintetiki. `scripts/perf/video-bridge-contact-sheet-eval.ts` hufafanua zana ya
majaribio ya A/B yenye toleo la schema kwa ajili ya modeli halisi za kuona zinazooana na OpenAI.
Hupima tokeni zilizoripotiwa na mtoa huduma, ucheleweshaji wa mwanzo hadi mwisho (pamoja na
uundaji wa karatasi), idadi ya miito ya modeli, na uhifadhi wa ukweli uliofafanuliwa katika
manifest. Majibu ghafi ya modeli hayaandikwi kwenye ripoti; ni digest za SHA-256 na vitambulisho
vya ukweli vilivyolingana pekee vinavyohifadhiwa. Zana hii ya majaribio haipigi mwito wowote wa
mtandao au modeli ya kulipia isipokuwa `--execute-real` imepitishwa na
`--model`, `OMNIROUTE_BASE_URL`, na `OMNIROUTE_API_KEY` zimesanidiwa. Bila
utekelezaji huo halisi ulioidhinishwa wazi, uamuzi wake unaosomeka na mashine hubaki `HOLD`;
vipimo vya sintetiki vya payload/idadi ya miito pekee si ushahidi wa kuidhinisha uendelezaji.

Wapigaji wanaweza kuambatisha mkusanyiko wa hiari wa `transcript.cues` kwenye sehemu ya video
inayotumika ikiwa tayari wana maandishi yaliyopangiliwa na muda. Kila kidokezo lazima kiwe na
`text`, kipindi halali cha `start`/`end` kilicho ndani ya muda uliopimwa, na `source`
iliyo kwenye orodha ya ruhusa (`client`, `embedded`, au `audio-bridge`); `confidence` huwa
`1` kwa chaguo-msingi na lazima ibaki kati ya `0` na `1`. Vidokezo vinavyofanana kabisa
huunganishwa. OmniRoute haianzishi kamwe unukuzi kutoka kwenye metadata hii: vidokezo
vilivyothibitishwa hunakiliwa kwenye matokeo yaliyoelezewa pamoja na chanzo, kiwango cha
uhakika, na kipindi, na huwasilishwa kama uchunguzi usioaminika sambamba na manukuu ya fremu.
Maandishi batili, yaliyo nje ya masafa, au yasiyo na chanzo cha asili hukataliwa badala ya
kuchanganywa kwenye mtiririko wa manukuu. Njia zote mbili za unukuzi katika mwili wa ombi
husawazisha chanzo kilichotolewa kuwa `client`, ikiwemo lebo za `embedded` au `audio-bridge`
zilizodaiwa na mtumaji mwenyewe. Ni adapta inayomilikiwa na seva pekee inayoweza kuweka lebo
hizo zinazoaminika kupitia hoja ya msimbo pekee ya `trustedSource`; uga wa JSON wa ombi hauwezi
kufikia hoja hiyo. Maandishi ya unukuzi hubaki kuwa maudhui yasiyoaminika yaliyotokana na
midia, bila kujali chanzo chake, na hayapaswi kamwe kuamua uidhinishaji.

Mpigaji wa hali ya juu anaweza kutoa mkondo wa `audioTranscript` kwa video hiyo hiyo;
unachukuliwa kuwa maandishi yaliyotolewa na mteja, si uthibitisho wa unukuzi wa seva.
Kiunganishi cha ujumuishaji huendesha uchunguzi wa kuona na wa sauti chini ya
kikomo kimoja cha muda na ishara moja ya kusitisha, huupanga kwenye ratiba ya pamoja, huunganisha
nakala zinazofanana kabisa, na huripoti matokeo ya sehemu wakati upande mmoja tu unapofaulu.
`audioTranscript` batili hushushwa hadhi hadi matokeo hayo ya sehemu — maelezo ya
kuona huhifadhiwa na tawi la sauti hurekodi msimbo wa hitilafu uliosafishwa —
badala ya kufanya video nzima ishindwe. Upatikanaji wa kila tawi, alama ya matokeo ya sehemu,
na misimbo ya hitilafu iliyosafishwa huhifadhiwa katika matokeo yaliyoelezwa, katika
metadata ya vizuizi vya usalama (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), katika metadata ya akiba ya matokeo, na katika vihesabio vya
ujumuishaji vya daraja. Njia chaguomsingi ya Video Bridge haiombi ubadilishaji wa matamshi kuwa maandishi
wala kupakua nakala ya pili ya media; bila mkondo huo uliobainishwa wazi, inabaki
kuwa ya video pekee.

**Uhifadhi wa unukuzi (#12150 P1).** Hili hutumika kiotomatiki wakati wowote ambapo
Video Bridge (ambayo yenyewe ni ya hiari) inawasilisha kidokezo cha unukuzi — hakuna alama tofauti
ya uhifadhi. Ombi linapowasilisha kidokezo chochote cha unukuzi (`transcript` iliyotangazwa na mpigaji
au `audioTranscript` iliyounganishwa), kizuizi cha usalama hukitia alama ya
`videoBridgeObserved` na kuunda nakala kivuli iliyofichwa ya maelezo ya video —
uwasilishaji unaofanana ambapo sehemu ya maandishi huru ya kila kidokezo hubadilishwa na
`[redacted-video-transcript]`, iliyoundwa kwa kubadilisha uga uliopangiliwa wa kidokezo
kabla ya tungo kuundwa (kamwe si kwa kuchanganua maandishi yaliyosawazishwa, hivyo hakuna maudhui ya
kidokezo — ya kihasimu au ya kawaida, ikiwa ni pamoja na sehemu zilizo na `]` kama vile
`[inaudible]`/`[music]` — yanayoweza kusalia). Mwili wa ombi wa kumbukumbu ya miito unaohifadhiwa hubadilisha
kila sehemu ya maandishi inayotokana na video kwa nakala hiyo kivuli iliyofichwa, kwa kulinganisha
usawa wa maudhui; nanga ya `fullText` husomwa tena kutoka kwenye mzigo wa mwisho wa kizuizi cha usalama
cha kabla ya mwito, ili ulinganishaji uendelee kufaulu baada ya vizuizi vya usalama vya baadaye katika mnyororo (vifichaji vya
PII na vitambulisho, vipaumbele 10/95) kuandika upya maandishi ya maelezo papo hapo na
baada ya uingizaji wa kidokezo cha mfumo/handoff/Memory kubadilisha mpangilio wa safu ya ujumbe. Mwili
unaotumwa juu kwa modeli haubadilishwi. Ombi lililochunguzwa pia halijazi
Memory yoyote ya kudumu (uchimbaji unaotokana na ombi na unaotokana na jibu hurukwa),
hivyo jibu la modeli lenyewe haliwezi kunakili maandishi ya unukuzi ndani ya Memory.

**Nyuga ghafi za video (#12430).** Daraja linapowezeshwa na usaidizi asilia wa video haujulikani au haupo, nyuga za `transcript`/`audioTranscript` zilizofafanuliwa pia huwasha `videoBridgeObserved`, hata baada ya kushindwa kwa maelezo au kikomo cha `maxVideos`. `null` na tungo tupu huhesabiwa; nyuga ambazo hazipo na metadata isiyo ya video hazihesabiwi. Nakala zinazohifadhiwa huficha nyuga hizi au huacha ombi, na akiba/Memory hupitwa.

Katika njia hizo mbadala, vidokezo halali vya mpigaji hubadilika kuwa sehemu zinazotumika za `text`/`input_text`
badala ya nyuga zisizo sanifu za mtoa huduma. Mikondo yote miwili iliyotolewa na ombi
hubaki kuwa uchunguzi wa `client` usioaminika, pamoja na onyo dhahiri kwamba video
haikuelezewa na mihuri ya muda haikuthibitishwa dhidi ya media. Bajeti zilizopo za
vidokezo 256/jumla ya KiB 64 na za kila kidokezo hutumika kwa mikondo yote miwili kwa pamoja;
mihuri ya muda lazima itoshee ndani ya kikomo cha sekunde 600 cha dalali na dirisha lolote la kulenga
lililotolewa. Mikondo batili hutupwa, na haisambazwi kama maandishi holela; mkondo mwenza halali
bado unaweza kutumiwa isipokuwa bajeti yao ya pamoja imepitwa. Nyuga za null/tupu
haziongezi maandishi. Hakuna uchotaji wa media au unukuzi unaoongezwa na njia hii mbadala.
Nyuga za upanuzi wa unukuzi huondolewa kwenye kibebaji cha video cha njia mbadala na vipengee vyake vya
`video_url`/`source`. Orodha ya kuruhusu ya waya ya OpenAI hubaki madhubuti; vibebaji vya video
visivyojulikana kama asilia hubaki vinapatikana na malengo yanayojulikana kuwa ya maandishi pekee huhifadhi viashiria salama.
Nakala vivuli zilizofichwa kwa mpangilio hulinda maandishi ya unukuzi yaliyoongezwa, huku
ombi asilia linalomilikiwa na mpigaji likibaki bila kubadilishwa. Malengo yenye usaidizi asilia na
madaraja yaliyolemazwa huhifadhi tabia yao iliyopo ya kupita pembeni.

Nakala za ziada zinazohifadhiwa hutumia ishara hiyo hiyo ya ombi lililochunguzwa. Taswira ghafi
ya ombi la mteja kabla ya kizuizi cha usalama, ombi linalosubiri ndani ya kumbukumbu, na kumbukumbu ya mapema
ya ombi lililokataliwa hubadilisha kwa mpangilio nyuga za unukuzi katika sehemu za video;
vidokezo vya tungo vilivyoundwa na hatua za pipeline na handoff ya muktadha hufichwa
kwenye kipokezi cha mwili wa ombi unaohifadhiwa. Kiashiria cha `video_content_removed` kinachohifadhiwa
hufanya uendelezaji wa `previous_response_id` ushindwe kwa usalama badala ya kuunda upya
maandishi yaliyotupwa kimakusudi. Ikiwa ombi lililochunguzwa linapoteza
nakala yake kivuli ya kuficha ya kila sehemu kabla ya kurekodiwa, au hata moja kati ya nakala vivuli kadhaa za video
ikishindwa kulingana baada ya mabadiliko ya baadaye ya ombi, mwili wa ombi unaohifadhiwa
huachwa kabisa badala ya kuhifadhi unukuzi uliofichwa kwa sehemu tu.

Kwa ombi lililochunguzwa, jibu la modeli linaweza kunukuu sehemu yoyote ya
unukuzi bila mpaka wa kidokezo uliopangiliwa. Kwa hiyo, `responseBody` yake katika kumbukumbu ya miito
inayohifadhiwa hubadilishwa na kiashiria cha kuachwa; artefakti ya kina ya
pipeline (ambayo inaweza kujumuisha miili ya mtoa huduma/mteja wa juu na vipande vya mtiririko)
haihifadhiwi. Akiba za kisemantiki, idempotency, na reasoning-replay hupita
usomaji na uandishi kwa ombi hilo. Ombi la mtoa huduma na jibu linaloonekana kwa mteja
hubaki bila kubadilishwa. Baiti za mapema za keepalive huondolewa kutoka kwenye bafa ya muda
wakati artefakti ya kina inapoachwa. Onyo la EventStream iliyoharibika la Kiro
huripoti tu idadi ya baiti za mzigo, kamwe si maudhui yake au hitilafu ghafi ya kichanganuzi cha JSON.
Hili halidai kwamba kila uchunguzi usiohusiana wa mtoa huduma/plugin umekaguliwa;
ukaguzi mpana zaidi wa vipokezi vinavyohifadhiwa unafuatiliwa katika #11658.

Mzunguko wa ndani wa `/api/modality-bridge/video/drilldown` ni safu tofauti ya akiba inayotumia loopback/uthibitishaji wa tokeni. Kila operesheni pia inahitaji kitambulisho halali kisichofichua maana cha mhusika mkuu. Kabla ya mwitaji wa uzalishaji kuwezeshwa, lazima atoe kitambulisho hicho kutoka kwa tenant aliyethibitishwa na kamwe asisambaze thamani iliyochaguliwa na mteja. Funguo za akiba humfunga mhusika huyo mkuu kwa vitambulisho halali vya kipindi na marejeleo ya video, huhifadhi tu funguo zake zilizotokana na SHA-256, na huweka usomaji na ufutaji katika upeo wa mhusika mkuu huyo huyo. Akiba huhifadhi si zaidi ya fremu 16 za JPEG zilizotolewa kwa kila ingizo, huziondoa baada ya dakika kumi, na inasaidia usomaji wenye mipaka wa `start`/`end` au ufutaji dhahiri wa kipindi.

Kila mhusika mkuu ana kikomo cha maingizo 16 na MiB 64 za data halali ya JPEG. Vikomo hivyo ni huru dhidi ya kikomo cha jumla cha maingizo 64/MiB 256: shinikizo la mgao wa mhusika mkuu huondoa tu maingizo ya mhusika huyo ambayo yametumika muda mrefu zaidi uliopita kabla ya uondoaji wa jumla wa LRU kuzingatiwa. Maingizo yaliyokwisha muda huondolewa katika uhasibu wa mhusika mkuu na wa jumla wakati wa shughuli za akiba, huku kughairi na kushindwa kwa uthibitishaji hakuhifadhi mbadala usiokamilika.

Akiba hukataa Base64 isiyo halali, padding iliyozidi, midia isiyo JPEG, JPEG zenye hitilafu au zilizokatwa, na JPEG zinazotoa onyo wakati wa usimbuaji wa picha nzima wenye mipaka kwa kutumia `sharp`. Husimba upya kila picha iliyokubaliwa kuwa JPEG halali, hupata upana na urefu kutoka kwa baiti zilizosimbuliwa badala ya kuamini sehemu za mwitaji, na hutupilia mbali baiti zozote za polyglot zilizoambatishwa mwishoni badala ya kuzihifadhi. Ni bafa iliyobanwa, halali na yenye mipaka pekee inayohesabiwa katika migawo yote miwili. Kikomo cha waya cha JSON kinajumuisha ziada ya Base64 kwa kikomo cha MiB 32 cha ingizo lililosimbuliwa. Kila
utoaji uliohifadhiwa hurekodi umbizo/azimio lake la JPEG lililothibitishwa, sera ya uchukuaji sampuli, toleo la utoaji, muda wa kuundwa, hash ya maudhui iliyokokotolewa na seva, na rejeleo kuu lililofanyiwa hash pamoja na hash ya maudhui kuu ya mwitaji anayeaminika. Kughairi hukaguliwa kati ya awamu zisawazishaji za usimbuaji/hash kabla ya kuhifadhi atomiki kwenye akiba.

Sehemu hii bado haiunganishi mzalishaji wa uzalishaji kwenye route na haitoi uteuzi wa vibadala vya azimio nyingi. Kwa hivyo, njia wazi ya ombi la Video Bridge haiongezi kazi yoyote, huku utoaji wa mhusika mkuu aliyefungwa kwa tenant na mzunguko kamili wa FU-08 wa azimio nyingi vikiendelea kuwa kazi za ufuatiliaji zilizo wazi badala ya kurekodiwa kama tabia iliyokamilika.

Fremu huwekewa maelezo kwa mfuatano kwa kutumia modeli ya Video iliyosanidiwa. Ubatilishaji tupu wa Video hurithi mpangilio wa Vision; ikiwa zote mbili ni tupu, kipanga-njia kiotomatiki cha Vision huchagua modeli inayofaa yenye uwezo wa kuona. Maelezo yaliyofaulu hubadilisha sehemu ya asili kwa kiambishi awali thabiti cha `[Video description:` ambacho pia huashiria maandishi kuwa uchunguzi usioaminika uliotokana na midia na kuziambia modeli za hatua za baadaye zisifuate maagizo yaliyopatikana kwenye midia. Funguo za akiba za maelezo ya fremu zinajumuisha baiti za JPEG, prompt, muhuri wa muda, na modeli inayotumika; ni maelezo yaliyofaulu pekee yanayohifadhiwa kwenye akiba. Maingizo ya akiba huhifadhi modeli halisi ya mzalishaji iliyofaulu, ikiwemo modeli ya fallback; bridge huripoti `mixed` wakati fremu tofauti zilitolewa na modeli tofauti. Akiba inapopatikana, utambulisho huo wa mzalishaji hutumiwa tena badala ya kuwekewa upya lebo kama mpango wa upangaji njia ulioombwa. Akiba ya matokeo ya video nzima huwekewa ufunguo kulingana na kila ingizo linalobadilisha matokeo — prompt, modeli inayotumika, sera ya uchukuaji sampuli, idadi ya fremu, modi ya uchanganuzi wa kisemantiki, alama ya kipekee ya SHA-256 ya kidokezo cha lengo kilichosanifishwa, dirisha la lengo, `transcript`,
`audioTranscript`, na bendera ya contact-sheet — kwa hiyo kubadilisha mojawapo ya vipimo hivyo hukosa akiba, na kamwe hakutumii tena matokeo yaliyopitwa na wakati. Toleo la sera ya uondoaji wa marudio ya taswira, kizingiti, na idadi yenye kikomo ya fremu zinazoweza kuchaguliwa pia huonyeshwa wazi katika ufunguo na metadata ya akiba ya matokeo; kwa hiyo, mabadiliko ya sera hayawezi kutumia tena maelezo ya video nzima yaliyopitwa na wakati. Metadata ya v4 ya akiba ya matokeo huhifadhi modi na alama ya kipekee, kamwe si kazi ghafi ya mtumiaji. Metadata ya guardrail huripoti modi za uchanganuzi zilizoombwa na zinazotumika; modi ya `focused` iliyoombwa bila maandishi ya mtumiaji yanayoweza kutumika huripotiwa kuwa `full` inayotumika.

Guardrail hutoa kila sehemu ya video inayotumika lakini haielezi zaidi ya `modalityBridgeVideoMaxVideos`. Kwa lengo lililothibitishwa kuwa na
`supportsVideo === false`, video zilizoshindwa na zilizozidi kikomo hubadilishwa kuwa alama dhahiri za maandishi salama ili video ghafi isibaki. Wakati uwezo haujulikani, sehemu hizo huhifadhi kibeba-video chake; nakala yoyote ya fallback hufuata ubadilishaji wa maandishi wenye mipaka ulioelezwa hapo juu. Malengo yenye `supportsVideo === true` hupita bridge bila kuichakata. Ishara ya kughairi ombi la mteja husambazwa kupitia upakuaji, foleni ya broker, subprocesses, na miito ya maelezo; kughairi husimamisha kati ya video na kamwe hakushindwi kwa kuruhusu midia ghafi kupita.

Mipangilio ya wakati wa utekelezaji huhifadhiwa kwenye DB na huthibitishwa kwa Zod:

| Ufunguo                             | Chaguo-msingi | Masafa / tabia                                                                                                         |
| ----------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`       | Muda wa utekelezaji wa hiari, unaowashwa kwa kuchagua                                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`      | `full` huhifadhi maelezo ya jumla; `focused` hutumia muktadha wa hivi karibuni wa mtumiaji usioaminika na wenye mipaka |
| `modalityBridgeVideoModel`          | `""`          | Hurithi modeli ya Vision Bridge                                                                                        |
| `modalityBridgeVideoFrameCount`     | `8`           | 1–16                                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`   | `uniform`, `scene_aware`, au `segment_aware` ya uwiano; hitilafu ya kigunduzi hurudi kwenye `uniform`                  |
| `modalityBridgeVideoMaxVideos`      | `1`           | 1–4                                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`      | 1000–120000 ms                                                                                                         |

Thamani za zamani zilizohifadhiwa za muda wa kusubiri Video zinazozidi sekunde 120 zinapunguzwa hadi
kikomo cha muda cha broker; majaribio mapya ya kuandika mipangilio yanayozidi kikomo hicho yanakataliwa.
`GET /api/modality-bridge/video/runtime` huhitaji eneo la loopback
lililowekewa muhuri na kuaminika kabla ya uthibitishaji au uchunguzi wa muda wa utekelezaji, kisha huhitaji
uthibitishaji wa usimamizi. Hurejesha tu `available`, matoleo yaliyosafishwa ya FFmpeg/ffprobe, na sababu isiyobadilika
wakati muda wa utekelezaji haupatikani. Endpoint ya ndani ya uchomoaji si
API ya umma ya kupakia: kujaa kwa foleni hurejesha `503` pamoja na `Retry-After`, kukatika kwa muunganisho wa mpigaji
hurejesha `499`, na kikomo kisichobadilika cha muda cha broker hurejesha `504`. Majibu yaliyobadilishwa huongeza
`video->text;model=<visionModel>;parts=<videos>` kwenye header kuu ya
`x-omniroute-modality-bridge` bila kuondoa sehemu za Vision au Audio.

### Kificha PII (`piiMasker.ts`)

Hufanya kazi katika hatua **zote mbili**.

- **`preCall`** hunakili payload, hupitia `system`, `messages`, `input`, na
  `prompt` (ikiwemo vipengee vya mifuatano wazi), na hutumia `processPII()` (kutoka
  `@/shared/utils/inputSanitizer`) kwenye sehemu za mifuatano za `content`/`text`. Wakati
  `PII_REDACTION_ENABLED=true`, PII iliyogunduliwa hufichwa kwenye
  payload inayotumwa. Hii haitegemei `INPUT_SANITIZER_MODE` (ambayo hudhibiti tu
  sera ya uingizaji wa prompt). Wakati ufichaji umezimwa, mwito hurekodi idadi ya ugunduzi
  bila kuandika upya maudhui.
- **`postCall`** hunakili jibu kwa kina, huendesha `sanitizePIIResponse()` pamoja na
  kificha cha muundo wa Responses-API (`maskResponsesOutput` — hushughulikia
  `output_text` na `output[].content[].text`). Ikiwa ufichaji wowote hutokea,
  jibu lililorekebishwa huchukua nafasi ya jibu la awali.

Kizuizi kamwe hakizuii; huweka tu maelezo (`meta.detections`,
`meta.redacted`) au huandika upya.

### Uingizaji wa Prompt (`promptInjection.ts`)

Hugundua miundo hasidi katika maudhui yaliyotolewa na mtumiaji na kutekeleza
sera iliyosanidiwa. Tabia huendeshwa na vigezo vya mazingira na chaguo za constructor:

| Mpangilio            | Kigezo cha mazingira                                                                                      | Chaguo-msingi | Athari                                                                                                                                                                                                     |
| -------------------- | --------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Imewezeshwa          | `INPUT_SANITIZER_ENABLED`                                                                                 | `true`        | Wakati ni `false`, kizuizi hukatiza utekelezaji mapema.                                                                                                                                                    |
| Hali                 | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn`        | Sera ya uingizaji: `block`, `warn`, au `log`. (`redact` inakubaliwa kwa uoanifu wa nyuma lakini **haiondoi** maandishi ya uingizaji; uandishi upya wa PII ya ombi hudhibitiwa na `PII_REDACTION_ENABLED`.) |
| Kizingiti cha kuzuia | Chaguo la `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (lakabu `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`        | Kiwango cha chini cha ukali kinachohitajika ili kuzuia. `Medium` ni cha uangalizi tu kwa chaguo-msingi.                                                                                                    |

**Mpangilio wa kipaumbele wa hali** (`getMode`): `options.mode` ya mpigaji →
ubatilishaji wa **alama ya kipengele ya DB** wa `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → env ya `INJECTION_GUARD_MODE` → env ya `INPUT_SANITIZER_MODE` →
`warn`. Kwa hiyo, ubatilishaji wa dashboard hutangulia vigezo vya env, hivyo UI ya Feature
Flags hudhibiti kizuizi kinachoendeshwa moja kwa moja (bila kuwasha upya). Usomaji wa DB ni salama dhidi ya hitilafu:
ukitokea hitilafu, kizuizi hurudi kwenye tabia inayotegemea env, na wakati hakuna
ubatilishaji uliowekwa tabia hufanana na utatuzi unaotumia env pekee.

Vyanzo vya ugunduzi:

1. `sanitizeRequest()` kutoka `@/shared/utils/inputSanitizer` (seti ya pamoja ya vigunduzi
   inayotumiwa sehemu nyingine katika pipeline).
2. `DEFAULT_GUARD_PATTERNS` zilizojengewa ndani (kwa sasa `system_override_inline` na
   `markdown_system_block`, zote zikiwa na ukali wa `high`).
3. `customPatterns` za hiari zinazopitishwa kupitia chaguo za constructor (mifuatano, regex,
   au rekodi za `{ name, pattern, severity }`).

Wakati `mode === "block"` **na** angalau ugunduzi mmoja unafikia kiwango cha
ukali, `preCall` hurejesha `{ block: true, message: "Request rejected:
suspicious content detected" }`. Katika hali za `warn`/`log`, kinga huandika kumbukumbu lakini
huruhusu mwito. Kisaidizi cha pamoja `evaluatePromptInjection()` pia husafirishwa
kwa waitaji wanaohitaji kutathmini vidokezo bila kupitia sajili.

**Kikomo cha uchanganuzi (v3.8.20):** kigunduzi hukagua tu **KB 16 za kwanza** za
maandishi yaliyounganishwa ya kidokezo — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (baiti 16 384) katika
`src/shared/utils/inputSanitizer.ts`. `detectInjection()` na
`evaluatePromptInjection()` zote hutumia `slice(0, MAX_INJECTION_SCAN_BYTES)` kabla ya kuendesha
kitanzi cha ruwaza. Maagizo ya udungaji huwa karibu na sehemu ya juu ya ingizo, kwa hivyo hili
huweka kikomo cha matumizi ya CPU/GC ya regex kwenye data za mamia mengi ya KB bila kudhoofisha ugunduzi (taz.
#3932, #4041).

### Kificha Taarifa za Utambulisho (`credentialMasker.ts`)

Huendeshwa katika hatua **zote mbili**, ikiwa ya mwisho katika mfuatano chaguomsingi (kipaumbele `95`). Huficha
ruwaza zinazojulikana za funguo za API / tokeni za siri kutoka kwenye data inayotumwa (maudhui ya ujumbe,
hoja za miito ya zana, matokeo ya zana) **na** jibu la mtoa huduma, ili
taarifa ya utambulisho iliyobandikwa kwenye kidokezo (au kurudiwa katika matokeo ya zana) isivujishwe
kwa mtoa huduma wa nje au kurudishwa kwa mteja.

- **Huwashwa kwa hiari pekee**, kwa utaratibu sawa na ufichaji wa PII (karibu na Kanuni Ngumu #20):
  imezimwa isipokuwa `settings.credentialRedactionEnabled === true` **au**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ikiwa imezimwa, kinga haifanyi chochote —
  haizuii kamwe wala haibadilishi.
- `redactCredentials()` hupitia mti mzima wa data/jibu (`walkValue()`,
  salama dhidi ya uchafuzi wa prototype, salama dhidi ya mizunguko kupitia `WeakSet`) na hubadilisha matokeo yanayolingana kwa
  kishikilia nafasi cha `[REDACTED:<type>]`, huku ikinakili matawi yaliyobadilika pekee.
- `CREDENTIAL_PATTERNS` hushughulikia funguo za watoa huduma wa LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeni za VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), funguo za malipo (Stripe, Square), funguo za
  huduma za wingu (funguo ya ufikiaji ya AWS, Twilio, SendGrid, Mailgun), funguo binafsi / JWT,
  mifuatano ya muunganisho yenye taarifa za utambulisho (`mongodb://user:pass@...`, n.k.), na
  ruwaza ya jumla ya thamani ya kichwa `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Funguo zenye muundo wa kichwa (`authorization`, `x-api-key`, `api-key`,
  `apikey`) hufichwa kimuundo (thamani pekee, huku kiambishi cha aina kama
  `Bearer `/`Basic ` kikihifadhiwa) badala ya kupitia regex ya jumla ya maandishi.
- Kinga haizuii kamwe; hubadilisha pekee (`modifiedPayload` /
  `modifiedResponse`) na huweka maelezo (`meta.credentialsRedacted`, `meta.count`).

Kinga dhidi ya hitilafu za urejeshi: `tests/unit/credential-masker-guardrail.test.ts`.

## Mkataba wa Msingi (`base.ts`)

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
  block?: boolean; // true husitisha mnyororo mara moja
  message?: string; // huonyeshwa wakati wa kuzuia
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // hurejeshwa na preCall ili kuandika upya ombi
  modifiedResponse?: TValue; // hurejeshwa na postCall ili kuandika upya jibu
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

Kizuizi huashiria "hakuna mabadiliko" kwa kurejesha mojawapo ya `void`, `{}`, au
`{ block: false }`. Kurejesha `modifiedPayload`/`modifiedResponse` hubadilisha
thamani inayopita kwenye mnyororo kwenda kwenye vizuizi vinavyofuata.
`signal?: AbortSignal` hubeba mzunguko wa maisha wa mpigaji hadi kwenye vizuizi. Kughairi ombi ni hali maalumu ya kimakusudi ya kuendelea licha ya hitilafu: madaraja ya midia husimamisha kazi na kufanya usafishaji bila kurejesha midia ghafi kwa lengo linalojulikana kuwa halitumii muundo huo.

## Sajili (`registry.ts`)

`guardrailRegistry` ya singleton hutoa:

- `register(guardrail)` — huongeza kizuizi (au kukibadilisha kulingana na jina lililosawazishwa) na
  kupanga upya kwa `priority` ya kupanda.
- `clear()` / `list()` — zana saidizi za usimamizi.
- `runPreCallHooks(payload, context)` — hupitia vizuizi amilifu, hupitisha
  payload kupitia `modifiedPayload`, na kusimama inapokutana na `block: true` ya kwanza.
- `runPostCallHooks(response, context)` — mtiririko huohuo upande wa jibu.
- `resetGuardrailsForTests({ registerDefaults })` — hufuta hali na kwa hiari
  kusajili upya chaguo-msingi ili kutenga majaribio kwa usafi.

Viendeshaji vyote viwili hurejesha `{ blocked, payload|response, results, guardrail?, message? }`
ambapo `results` ni safu ya rekodi za `GuardrailExecutionResult` zinazojumuisha
sehemu za `blocked`, `skipped`, `modified`, `error`, na `meta` kwa kila kizuizi,
ambazo ni muhimu kwa ufuatiliaji.

### Kuzima Vizuizi kwa Kila Ombi

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` hukusanya orodha
isiyorudiwa ya majina ya vizuizi ambavyo vinapaswa kurukwa kwa ombi la sasa.
Vyanzo (vyote ni vya hiari, vyote vinaunganishwa):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` katika mwili wa ombi (kiwango cha juu)
- `metadata.disabledGuardrails` katika mwili wa ombi
- Kichwa `x-omniroute-disabled-guardrails` (au cha zamani
  `x-disabled-guardrails`)

Thamani zinaweza kuwa safu za mifuatano au mfuatano uliotenganishwa kwa koma; majina
husawazishwa kuwa herufi ndogo za kebab-case (`pii_masker` → `pii-masker`). Tokeo
hupitishwa kupitia `context.disabledGuardrails` hadi kwenye sajili, ambayo huruka
vizuizi vinavyolingana (`skipped: true` katika `results`).

## Mpangilio wa Utekelezaji

Kwa kila ombi linalopitia `src/sse/handlers/chat.ts` na
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` huunda orodha ya kurukwa kutokana na ufunguo wa API, mwili wa ombi,
   na vichwa.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` huendesha vizuizi kwa mpangilio wa kipaumbele
   kuanzia cha chini kwenda juu:
   - Vizuizi vilivyozimwa hurekodiwa kama `skipped`.
   - `preCall` ya kila kizuizi inaweza kuandika upya data ya ombi kupitia `modifiedPayload`.
   - `block: true` ya kwanza husitisha mfuatano mara moja na kishughulikiaji hurejesha
     jibu la kukataliwa na kizuizi.
3. Data ya ombi (ambayo huenda imeandikwa upya) hupelekwa kwenye uelekezaji wa mchanganyiko na
   utumaji kwa huduma ya juu.
4. Baada ya jibu kuundwa, `guardrailRegistry.runPostCallHooks(...)`
   huendesha mfuatano huo huo kwenye jibu. `block: true` hapa huondoa jibu la
   huduma ya juu.

Vizuizi vinavyotupa hitilafu hurekodiwa kwa `error: <message>` na kuandikwa kwenye kumbukumbu kupitia
`logger.warn`, lakini mfuatano huendelea — kwa muundo, mfumo huruhusu ombi kuendelea hitilafu ikitokea.

## Usanidi

Vigeu vya mazingira vinavyosomwa na vizuizi vilivyojengewa ndani:

| Kigeu                                 | Kinachokitumia            | Athari                                                                                                                                     |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Weka `false` ili kuzima utambuzi kabisa.                                                                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Sera ya udungaji: `warn`, `block`, au `log`. Thamani ya zamani `redact` haiandiki upya maandishi ya udungaji.                              |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Hali ya kizuizi cha udungaji; pia ni alama ya kipengele katika DB ambayo **hupuuza na kuchukua nafasi ya** vigeu vya mazingira (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Kiwango cha chini cha ukali kinachokataliwa na `MODE=block`: `high` (chaguo-msingi), `medium`, au `low`.                                   |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Jina mbadala la zamani la `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Ikiwa `true`, PII katika ombi hufichwa (bila kutegemea hali ya udungaji).                                                                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Hudhibiti tabia ya kifichaji kwenye upande wa jibu.                                                                                        |

Vizuizi vya Modality Bridge husoma usanidi wa wakati wa utekelezaji kutoka kwenye hifadhi ya mipangilio
inayotegemea DB (`getSettings()`), si vigeu vya mazingira. Funguo kuu za Vision ni
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na
`modalityBridgeCacheMaxEntries`. Funguo za zamani za
`visionBridge*` zinakubaliwa tu kama mbadala wa usomaji wa mzunguko mmoja ulioandikwa
kwenye nyaraka; uandishi kutoka dashibodi hutumia funguo kuu. Chaguo-msingi na kitatuzi cha mbadala
vinapatikana katika `src/shared/constants/modalityBridgeDefaults.ts`, huku konstanti za zamani
zikihifadhiwa katika `src/shared/constants/visionBridgeDefaults.ts`.

Sauti hutumia `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, na `modalityBridgeAudioMaxClips`, pamoja na mipangilio ya pamoja ya
`modalityBridgeCache*`. Sauti haina mbadala wa funguo za zamani kwa sababu funguo hizi
zilianzishwa pamoja na skima ya Modality Bridge.

Video hutumia `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, na
`modalityBridgeVideoTimeout`, pamoja na mipangilio ya pamoja ya `modalityBridgeCache*`.
Imezimwa kwa chaguo-msingi kwa sababu FFmpeg/ffprobe ni vitegemezi vya hiari vya
uendeshaji, na uundaji wa maelezo ya fremu huongeza muda wa kusubiri na gharama ya modeli.

## Vizuizi Maalum

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

Hatua:

1. Unda `src/lib/guardrails/myGuardrail.ts` inayopanua `BaseGuardrail`.
2. Tekeleza `preCall` na/au `postCall`.
3. Ama isajili wakati wa kuingiza (isukume kutoka `registerDefaultGuardrails`) au
   uite `guardrailRegistry.register(...)` wakati wa utekelezaji — sajili hubadilisha
   kizuizi chochote cha awali chenye jina lilelile lililosawazishwa.
4. Ongeza majaribio chini ya `tests/unit/` (mifano iliyopo:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Majaribio

Tumia `resetGuardrailsForTests()` kati ya majaribio ili kuanza kutoka hali inayojulikana.
Pitisha `{ registerDefaults: false }` ili kuanza na sajili tupu na
kusajili tu vizuizi vinavyojaribiwa. Vision Bridge inakubali uingizaji wa vitegemezi
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge hutoa sehemu
sawa za mipangilio, uwezo, uteuzi wa modeli ya STT, ukaguzi wa vitambulisho,
na unukuzi. Kwa hivyo, majaribio yanaweza kutekeleza mitiririko yote miwili bila ufikiaji wa DB
au mtandao.

## Angalia Pia

- `src/lib/guardrails/` — utekelezaji
- `src/shared/utils/inputSanitizer.ts` — kigunduzi kinachoshirikiwa kinachowezesha
  ugunduzi wa udukuzi wa prompt na ufichaji wa PII
- `src/shared/constants/visionBridgeDefaults.ts` — chaguomsingi za Vision Bridge na
  orodha ya modeli zinazolazimishwa kutumia bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — chaguomsingi za pamoja za wakati wa utekelezaji za Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — safu huru (kivunja mzunguko, vipindi vya kusubiri)
- `docs/reference/ENVIRONMENT.md` — rejeleo kamili la vigeu vya mazingira

## Ufikivu wa njia wa kizuizi cha udukuzi na red-team (Awamu ya 8 · Sehemu D)

Kizuizi cha udukuzi (`createInjectionGuard` / `withInjectionGuard`) kinashughulikia njia zote
zinazokubali prompt za watumiaji. Kinaheshimu `INJECTION_GUARD_MODE` (chaguomsingi `warn` = kumbukumbu pekee;
`block` = hurudisha HTTP 400 `SECURITY_001`).

| Aina                 | Njia                                                                                                                                                 | Hali chaguomsingi |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Maandishi (zilizopo) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn              |
| Uzalishaji           | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn              |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn              |

Uchimbaji wa maandishi (`extractMessageContents`) hushughulikia `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kila usiku, `nightly-llm-security.yml`):** promptfoo huthibitisha kuwa kila njia huzuia
mkusanyiko wa OWASP-LLM katika `INJECTION_GUARD_MODE=block`; garak huendesha uchunguzi (huruka bila siri).
`moderations` imejumuishwa kwa ajili ya uthabiti — waendeshaji katika hali ya kuzuia wanaweza kuiondoa kupitia
`resolveDisabledGuardrails`.

Mtiririko wa kazi wa kila usiku (`.github/workflows/nightly-llm-security.yml`, cron + uanzishaji wa
mkono) una kazi mbili:

- **`promptfoo-guard` (inayozuia)** — huendesha `promptfoo eval -c promptfooconfig.yaml`
  pamoja na `INJECTION_GUARD_MODE=block`. Kila tukio hasidi (k.m. "puuza
  maagizo yote ya awali…", uvunjaji wa vizuizi wa mtindo wa DAN) huhakikisha kuwa jibu lina
  `error.code === "SECURITY_001"`, yaani, kizuizi kilikataa ombi hilo kwa hakika.
- **`garak` (ya ushauri)** — huendesha garak `--probes promptinject,dan,leakreplay`
  dhidi ya instansi ya ndani ya OmniRoute (`http://localhost:20128/v1`). Hudhibitiwa na
  siri ya mtoa huduma (`PROMPTFOO_PROVIDER_KEY`); huruka kwa utaratibu bila hitilafu na huongezewa
  `|| true`, kwa hivyo huripoti bila kusababisha CI ishindwe.

Ufikivu wa kisaidizi cha kizuizi (`createInjectionGuard` / `withInjectionGuard`)
unahusisha kila njia ya `/v1` yenye prompt; maandishi ya prompt huchukuliwa kutoka
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` na
`extractMessageContents()` katika `src/shared/utils/inputSanitizer.ts`.
