# Guardrails (Malti)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sors awtorevoli:** `src/lib/guardrails/`
> **Aġġornat l-aħħar:** 2026-08-29 — v3.8.51 (il-provenjenza tat-traskrizzjoni ta’ Video Bridge tiġi ddikjarata minn min isejjaħ,
> u għadha mhix ivverifikata mis-server — iċċarat skont #11661)

Il-guardrails jinfurzaw is-sikurezza, il-politiki u t-trasformazzjonijiet tal-kontenut fil-konfini
bejn OmniRoute u l-fornituri upstream. Kull guardrail jista’ jispezzjona (u,
b’mod fakultattiv, jirrifjuta, jittrasforma jew jannota) il-payloads tat-talbiet (`preCall`) u
r-risposti upstream (`postCall`).

Is-sistema hija **fail-open**: jekk guardrail jitfa’ eċċezzjoni waqt l-eżekuzzjoni, ir-reġistru
jirreġistra l-iżball u jkompli bil-guardrail li jmiss minflok ifalli
t-talba. L-imblukkar huwa deċiżjoni espliċita (`block: true`), qatt aċċident.

## Salvagwardji Integrati

Ir-reġistru jgħabbi awtomatikament sitt salvagwardji f’ordni ta’ prijorità waqt l-importazzjoni
(ara `registry.ts` → `registerDefaultGuardrails()`):

| Prijorità | Isem                | Stadju/i       | Fajl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Numri ta’ prijorità aktar baxxi jitħaddmu **l-ewwel**.

### Pont tal-Viżjoni (`visionBridge.ts`) — Pont tal-Modalità PR-1

Jinterċetta talbiet li jinkludu immaġnijiet u li jkunu mmirati lejn **mudelli mingħajr viżjoni**, u jew
jidderieġi mill-ġdid it-talba kollha lejn mudell li jappoġġja l-viżjoni, jew jissostitwixxi l-partijiet
tal-immaġni b’deskrizzjonijiet testwali prodotti minn mudell tal-viżjoni konfigurabbli qabel
is-sejħa upstream. Dan jippermetti lill-fornituri li jaħdmu bit-test biss jimmaniġġjaw
payloads multimodali b’mod trasparenti.

Fluss:

1. Aqbeż jekk il-mudell fil-mira diġà jappoġġja l-viżjoni (sakemm ma jidhirx fil-
   lista ta’ pontijiet sfurzati `isVisionBridgeForcedModel`).
2. Oħroġ il-partijiet tal-immaġni permezz ta’ `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), li tiddelega lid-**ditekter unifikat tal-midja**
   `detectMediaParts()` f’`open-sse/utils/mediaParts.ts` — is-sors uniku
   tal-verità kondiviż mal-filtru tal-kompatibbiltà combo.
   L-estrazzjoni hija limitata permezz ta’ lista ta’ permessi għall-partijiet tal-ogħla livell bil-forom
   li `replaceImageParts` tista’ ddaħħal lura (il-kuntratt estrazzjoni↔sostituzzjoni): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, u Responses API `input_image`. Riżultati annidati u
   forom b’indikaturi biss huma materjal għall-filtru combo u qatt ma jiġu estratti.
   Aqbeż jekk ma jinstab xejn.
3. Irrisolvi l-konfigurazzjoni waqt it-tħaddim permezz ta’ `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): iċ-ċwievet il-ġodda tas-settings `modalityBridge*`
   jieħdu preċedenza; iċ-ċwievet legacy `visionBridge*` jibqgħu bħala **alternattiva għal ċiklu
   wieħed** (tieqa ta’ rollback). Aqbeż qabel kwalunkwe traversar tal-midja meta
   l-pont ikun diżattivat.
4. Is-selettur tal-modalità (`modalityBridgeVisionMode`, ara t-tabella hawn taħt) jiddeċiedi
   bejn direzzjoni mill-ġdid u deskrizzjoni. Id-direzzjoni mill-ġdid tirritorna `modifiedPayload` fejn jinbidel
   biss `model`, flimkien mal-meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Mogħdija tad-deskrizzjoni: illimita l-immaġnijiet għal `maxImages`, ikkomponi l-prompt konxju tal-kompitu,
   ikkonsulta l-cache tad-deskrizzjonijiet, sejjaħ il-mudell tal-viżjoni **b’mod parallel**
   (`Promise.allSettled`), u daħħal partijiet testwali `[Image N]: <description>`
   minflokhom. Deskrizzjoni li tfalli tipproduċi `null` u l-parti oriġinali tal-immaġni tiġi
   **ppreservata** (#4012) — ħlief fil-mogħdija tad-deskrizzjoni combo meta kull
   deskrizzjoni tkun falliet, fejn upstream ikkonfermat mingħajr viżjoni jirċievi stub
   `(mhux disponibbli — l-ebda fornitur b’kapaċità ta’ viżjoni mhu konness)` minflok (#8430).
6. Irritorna `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selettur tal-modalità (`modalityBridgeVisionMode`)

| Modalità   | Default | Imġiba                                                                                                                                                                                                                                                                                                                                                                |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Euristika legacy, mhux mibdula (#6640/#7204): mudelli mhux combo/`auto/` jiġu diretti mill-ġdid lejn l-aħjar mudell tal-viżjoni sakemm il-mudell oriġinali ma jkollux diġà kredenzjali li jistgħu jintużaw (f’dak il-każ issir deskrizzjoni); miri combo dejjem jużaw deskrizzjoni.                                                                                   |
| `describe` |         | Dejjem iddeskrivi — il-blokka tad-direzzjoni mill-ġdid tinqabeż kompletament; il-mudell magħżul mill-utent dejjem iwieġeb.                                                                                                                                                                                                                                            |
| `reroute`  |         | Sforza d-direzzjoni mill-ġdid: il-kontroll biex jinżamm mudell bil-kredenzjali jiġi evitat. Il-kontroll tal-kredenzjali tal-**mira** tad-direzzjoni mill-ġdid xorta japplika — meta ma teżisti ebda mira tal-viżjoni li tista’ tintuża, it-talba taqa’ lura għad-deskrizzjoni sabiex immaġnijiet mhux ipproċessati qatt ma jaslu għand backend tat-test biss (#8430). |

Il-modi sfurzati jwaqqfu l-proċess **qabel** ma titħaddem l-euristika awtomatika; l-imġiba `auto`
hija identika byte b’byte għas-salvagwardja ta’ qabel PR-1.

#### Ambitu taċ-ċavetta API (`visionBridgeKeyScope.ts`)

Meta ċ-ċavetta API tas-sejjieħ tirrestrinġi `allowedConnections`, il-pools tal-kwoti
(`allowedQuotas`) jew il-mudelli (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), il-pont jagħżel biss
mudelli għad-direzzjoni mill-ġdid u għad-deskrizzjoni li ċ-ċavetta tista’ tuża, fuq konnessjonijiet li ċ-ċavetta tista’
tuża. Is-sejħa tad-deskrizzjoni mbagħad dejjem tgħaddi mis-self-loop ta’ OmniRoute bl-
header `x-omniroute-self-loop-key-id`, sabiex it-talba taċ-chat li tirċeviha
terġa’ tinforza l-politika tal-konnessjonijiet u tal-mudelli ta’ dik iċ-ċavetta. `enforceApiKeyPolicy()`
jirrispetta dak il-header biss flimkien mal-bearer tas-self-loop, għalhekk jista’ biss
jirrestrinġi l-aċċess, u id li ma tiġix riżolta tiġi rrifjutata.

Jekk ebda mudell tal-viżjoni ma jkun permess għaċ-ċavetta, il-mogħdija tad-deskrizzjoni twarrab u
t-talba tgħaddi mingħajr tibdil, bl-istess imġiba fail-open bħal salvagwardja diżattivata
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Talbiet mingħajr ċavetta, u ċwievet mingħajr dawn ir-restrizzjonijiet, jaġixxu eżattament kif
kienu jaġixxu qabel.

#### Prompt ta’ deskrizzjoni konxju tal-kompitu (`modalityBridgeVisionTaskAware`)

Il-valur predefinit huwa **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) iżid
it-test tal-**aħħar messaġġ tal-utent** (imqassar għal 500 karattru) mal-prompt
bażi tad-deskrizzjoni, biex jorjenta d-deskrizzjoni lejn dak li fil-fatt talab
l-utent (il-mudell codex-vision-proxy) u jitlob lill-mudell tal-viżjoni jittraskrivi
t-test viżibbli. Meta l-flag ikun mitfi — jew ma jkun hemm ebda test tal-utent —
il-prompt bażi jintuża mingħajr tibdil.

It-talba kompatibbli ma’ OpenAI tas-self-loop tad-deskrizzjoni stess (`callVisionModelSingle()`
f’`visionBridgeHelpers.ts`) dejjem titlob `image_url.detail: "high"` —
mingħajr kundizzjonijiet, għal kull min isejjaħha/fornitur, u mhijiex ikkontrollata
minn xi sinjal tal-klijent. Kampjunar b’dettall baxx inaqqas il-preċiżjoni tal-OCR
proprju għall-kompitu tat-traskrizzjoni tat-test li jitlob dan il-prompt, għalhekk
is-sejħa tad-deskrizzjoni stess dejjem titlob dettall għoli irrispettivament mil-livell
ta’ dettall użat mit-talba oriġinali li daħlet. Dan jaffettwa biss il-body tat-talba
interna tad-deskrizzjoni; ma jibdilx il-mod kif OmniRoute jgħaddi `image_url.detail`
ta’ min għamel is-sejħa fit-talba primarja — dak il-valur predefinit jiġi applikat
separatament, u biss għal klijenti OpenCode identifikati, f’`defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Il-fergħa bil-format fuq il-wire ta’
Anthropic tas-self-loop tad-deskrizzjoni ma għandhiex field `detail` u mhijiex
affettwata minn ebda wieħed miż-żewġ valuri predefiniti.

#### Limitu tal-output tad-deskrizzjoni (`modalityBridgeVisionMaxChars`)

| Kjavi                          | Valur predefinit | Firxa             |
| ------------------------------ | ---------------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`              | `0` jew 100–50000 |

`0` (il-valur predefinit) ifisser **ebda limitu** — id-deskrizzjoni rritornata minn
`callVisionModel()` tgħaddi mingħajr modifika, biex jinżamm l-aġir
eżistenti. Kwalunkwe valur fil-firxa 100–50000 iqassar id-deskrizzjoni b’suffiss
`…` qabel ma tiddaħħal lura bħala `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` f’`src/lib/guardrails/visionBridge.ts`).
Għolli dan għal kompiti OCR b’ħafna dettalji fejn il-mudell downstream jeħtieġ
it-traskrizzjoni sħiħa; baxxih biex tillimita l-użu tat-tokens fuq mudelli tal-viżjoni
li jipproduċu ħafna test. Il-field tad-dashboard jinsab fil-pannell Advanced tat-tab
Vision (`modality-bridge-max-chars` f’`ModalityBridgeVisionTab.tsx`) u jgħolli
kwalunkwe valur bejn 1 u 99 sal-limitu minimu ta’ 100 filwaqt li jħalli `0`
espliċitu mhux mibdul — `0` huwa valur Zod validu fih innifsu
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), mhux sempliċement
il-valur predefinit meta l-issettjar “ma jkunx issettjat”.

#### Cache tad-deskrizzjoni (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL fil-memorja għall-outputs tad-deskrizzjoni, kondiviż fil-proċess kollu.
Kjavi = `sha256(imageRef + composedPrompt + configuredBridgeModel)` bi
framing bil-prefiss tat-tul (mingħajr kolliżjonijiet fil-konfini tal-fields). Il-komponent
tal-mudell huwa l-mudell tal-bridge **ikkonfigurat**, mhux il-mudell li fil-fatt wieġeb —
`callVisionModel` jista’ juża fallback internament, u l-użu ta’ kjavi għal kull tentattiv
jifframmenta l-cache. Deskrizzjonijiet li jfallu qatt ma jinħażnu fil-cache. Is-settings:

| Kjavi                           | Valur predefinit | Firxa   |
| ------------------------------- | ---------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`           | —       |
| `modalityBridgeCacheTtlMinutes` | `60`             | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`            | 10–5000 |

#### Normalizzazzjoni ta’ immaġnijiet remoti (self-loop tad-deskrizzjoni/fetch ta’ base64)

Meta l-bridge stess iġib immaġni **remota** — is-self-call tad-deskrizzjoni ta’
Anthropic u l-konverżjoni għal base64 bil-format fuq il-wire ta’ Claude
(`ensureBase64ImagesForClaudeWire`), it-tnejn permezz ta’
`fetchRemoteImageAsDataUri()` f’`visionBridgeHelpers.ts` — id-data
URI li tirriżulta tgħaddi minn `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) qabel ma tiddaħħal fit-talba tal-mudell
tal-viżjoni. Immaġnijiet kbar wisq jitnaqqsu għal **tarf twil ta’ 2048px** (f’konformità
mal-limitu tar-resize li OpenAI/Anthropic diġà japplikaw fuq in-naħa tas-server), u dan
inaqqas il-bytes/latency tal-upload mingħajr ma jibdel dak li jara l-mudell tal-viżjoni.
Ir-resize juża `sharp`, mgħobbi permezz ta’ import dinamiku: fuq pjattaforma fejn
il-binary nattiv tiegħu jonqos milli jitgħabba, `normalizeDataUri()` **qatt ma jitfa’
eċċezzjoni** — minflok jgħaddi l-bytes oriġinali mingħajr tibdil, sabiex il-passaġġ
tad-deskrizzjoni/konverżjoni għal base64 jibqa’ dejjem jaħdem. Bytes li mhumiex ta’
immaġni (fetch li ma rritornax immaġni li tista’ tiġi dekodifikata) ukoll jgħaddu
mingħajr tibdil. Din in-normalizzazzjoni hija limitata għall-immaġnijiet li l-bridge
iġib għas-self-call tiegħu stess — qatt ma tiġi applikata għall-payload mhux mibdul
ta’ min jagħmel is-sejħa, f’konformità mal-prinċipju ta’ mutazzjoni biss b’opt-in
(Regola Stretta #20).

#### Skema tas-settings + migrazzjoni

Il-kjavi l-ġodda `modalityBridge*` jiġu vvalidati minn Zod f’`updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, it-trio `modalityBridgeCache*`, u l-grupp
`modalityBridgeAudio*` użat mill-Audio Bridge. Il-migrazzjoni
`141_modality_bridge_settings.sql` tikkopja l-valuri eżistenti u antiki
`visionBridge*` lejn il-kjavi ġodda korrispondenti (idempotenti, u qatt ma tissostitwixxi
valur `modalityBridge*` issettjat minn operatur); il-kjavi antiki jibqgħu aċċettati
bħala fallback tal-qari għal ċiklu wieħed ta’ rilaxx.

#### Header tat-trasparenza + statistika

Tweġibiet trasformati mid-deskrizzjoni jinkludu
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(maħluq minn `buildModalityBridgeHeader()` f’`modalityBridge/bridgeStats.ts`,
u miżjud minn `withModalityBridgeHeader()` f’`src/sse/handlers/chatHelpers.ts`).
Talbiet ridiretti **ma jirċievu ebda** header — il-payload ma nbidilx u l-bidla
tal-mudell diġà tidher fil-field `model` tal-body tat-tweġiba.

`GET /api/modality-bridge/stats` (awtentikazzjoni tal-ġestjoni, l-istess livell bħal
`GET /api/settings`) jirritorna l-counters fil-memorja għal kull modalità
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` għal `vision`, `audio`, u
`video`. `averageLatencyMs` juża `latencySamples`, mhux it-tentattivi kollha, bħala
d-denominatur tiegħu; operazzjoni mingħajr kejl tal-ħin ma toħloqx kampjun falz
ta' żero millisekondi. `bridged` jibqa' l-alias kompatibbli mal-verżjonijiet
preċedenti għal konverżjonijiet li rnexxew; tentattivi falluti ma jżiduhx.
Il-counters jiġu ssettjati mill-ġdid meta l-proċess jerġa' jinbeda, apposta
(telemetrija, mhux kontabbiltà).

#### Konfigurazzjoni tad-dashboard

Il-paġna ddedikata tad-dashboard hija
`/dashboard/settings/modality-bridge`. It-tabs tagħha `Vision`, `Audio`,
u `Video`, li jistgħu jiġu indirizzati permezz tal-URL, iżommu l-parametri tal-query
meta jinbidel il-valur `tab`.
It-tab Vision joffri l-attivazzjoni, il-modalità, l-għażla tal-mudell (inkluża
l-għażla awtomatika prestabbilita), prompts konxji tal-kompitu, limiti avvanzati
għat-timeout/għall-immaġni/għat-tul tad-deskrizzjoni/għall-cache, counters waqt
l-eżekuzzjoni, u talba kampjun protetta. It-tab Audio hija wkoll attiva: toffri
l-attivazzjoni, selettur ta' mudell għal STT biss b'Auto, limiti għat-timeout/għat-tul
massimu tal-klipp, counters tal-awdjo, u test kampjun `input_audio`. It-tab Video
hija funzjonali: tirrapporta l-istat waqt l-eżekuzzjoni ta' FFmpeg/ffprobe — wieħed
minn erba' stati espliċiti tal-UI (`unknown` waqt li l-probe ikun għaddej jew ma
jkunx seta' jitlesta, `restricted` fuq host tad-dashboard li mhuwiex loopback fejn
il-probe jinqabeż fuq in-naħa tal-klijent, `unavailable` wara li jitwettaq il-probe
u jiġi kkonfermat li huwa nieqes, jew `available` bil-verżjonijiet ta'
FFmpeg/ffprobe) — tippersisti l-limiti tal-attivazzjoni/tal-mudell/tal-frames/tal-vidjo/tat-timeout,
tiffiltra s-selettur tal-mudell għal mudelli li jappoġġaw il-viżjoni, u toffri
counters tal-vidjo.

Il-card preċedenti Vision Bridge taħt is-settings tal-AI issa hija link ta'
kompatibbiltà għall-paġna l-ġdida; m'għadhiex iżżomm kopja oħra tal-formola.
Media Providers jipprovdi wkoll links mill-flussi tax-xogħol Image-to-Text u
Speech-to-Text għat-tabs korrispondenti tal-Modality Bridge mingħajr ma jneħħi
l-playground Speech-to-Text eżistenti.

**Bypass tal-ammissjoni għas-self-loop:** meta s-sejħa describe tgħaddi mis-self-loop
`/v1` ta' OmniRoute stess (mudell mhux standard tal-fornitur), is-sottotalba tibgħat
`x-omniroute-admission-bypass: internal` u tiġi awtentikata bil-kredenzjali
tas-self-loop solvuta — is-sentinel lokali `sk_omniroute` fil-modalità lokali,
jew iċ-ċavetta env `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` ikkonfigurata
mill-operatur (#1350), sabiex deployments b'`REQUIRE_API_KEY=true` xorta jkunu
jistgħu jeżegwixxu s-sejħa describe. Il-bypass jiġi rrispettat biss għal dawk
il-kredenzjali eżatti, għalhekk klijenti esterni ma jistgħux jużaw il-header biex
jaqbżu l-ammissjoni.

Il-valuri prestabbiliti legati jinsabu f'
`src/shared/constants/visionBridgeDefaults.ts`; il-valuri prestabbiliti l-ġodda
għall-modalità/għall-għarfien tal-kompitu/għall-cache u r-resolver tas-settings
jinsabu f'`src/shared/constants/modalityBridgeDefaults.ts`. Il-guardrail joffri
għażla tal-kostruttur `deps` sabiex it-tests ikunu jistgħu jinjettaw
implimentazzjonijiet foloz ta' `getSettings` u `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Jinterċetta talbiet taċ-chat li jinkludu awdjo qabel ma jilħqu target li mhuwiex
magħruf li jaċċetta input tal-awdjo. Qatt ma jibdel ir-rotta tat-talba taċ-chat:
il-partijiet tal-awdjo jiġu traskritti permezz tal-endpoint multipart eżistenti
kompatibbli ma' OpenAI, u l-mudell taċ-chat magħżul ikompli bit-traskrizzjonijiet
tat-test.

Fluss:

1. Isolvi `supportsAudio` permezz ta' `getResolvedModelCapabilities()`. Metadata
   espliċita mir-reġistru tal-fornituri tieħu preċedenza, imbagħad il-metadata
   statika tal-mudell, u mbagħad `modalities_input` sinkronizzat. Lista ddikjarata
   ta' input mingħajr `audio` hija `false`; jekk ma jkun hemm l-ebda evidenza
   tal-kapaċità, il-valur jibqa' `null`. Kemm `false` kif ukoll `null` jattivaw
   il-bridge konservattiv, filwaqt li `true` jaqbżu.
2. Isolvi s-settings `modalityBridgeAudio*` u joħroġ partijiet tal-awdjo tal-ogħla
   livell li jistgħu jiġu sostitwiti minn kull messaġġ permezz tad-detector kondiviż
   `detectMediaParts()`. Il-formati appoġġati fuq il-wire huma `input_audio` ta'
   OpenAI, `audio_url`, u `source.media_type: "audio/*"`. Awdjo annidat jiġi
   identifikat għar-routing iżda ma jitneħħiex mill-mogħdija tas-sostituzzjoni.
   Ix-xogħol huwa limitat minn `modalityBridgeAudioMaxClips`; il-partijiet ta' wara
   jibqgħu mhux mibdula.
3. Jirrispetta `provider/model` ikkonfigurat, jew iħalli
   `selectAudioBridgeModel()` jgħaddi minn `AUDIO_TRANSCRIPTION_PROVIDERS`
   skont l-ordni stabbli tal-katalgu u jagħżel l-ewwel mudell bi kredenzjali
   attiva u li tista' tintuża tal-fornitur.
4. `callAudioTranscription()` jikkonverti awdjo base64/data-URI f'`file` multipart,
   jew iniżżel `audio_url` remot permezz tal-protezzjoni outbound pubblika biss,
   b'DNS pinning u limitu ta' 25 MB. Imbagħad jibgħat POST bil-file u bil-mudell
   magħżul lis-self-loop lokali `/v1/audio/transcriptions`, awtentikat permezz ta'
   `resolveSelfLoopBearer()`. Ir-rotta tat-traskrizzjoni eżistenti twettaq it-tiftix
   normali tal-kredenzjali, l-immaniġġjar tal-cooldown/tar-rate limit, u d-dispaċċ
   lejn il-fornitur.
5. Sejħiet li jirnexxu jissostitwixxu l-partijiet tagħhom b'
   `[Audio N]: <transcript>`. Is-sejħiet jitħaddmu b'`Promise.allSettled`:
   falliment individwali jżomm dik il-parti oriġinali tal-awdjo (kuntratt #4012).
   Jekk is-sejħiet kollha jfallu u jkun ippruvat li t-target għandu
   `supportsAudio === false`, il-partijiet isiru
   `[Audio N]: (unavailable — no STT provider connected)` (kuntratt #8430). Għal
   target mhux magħruf (`null`), riżultat fejn kollox ifalli jibqa' mhux mibdul.
   Target li jkun ġie ppruvat li jaċċetta test biss u li m'għandux kredenzjali
   STT li tista' tintuża jirċievi l-istess stub espliċitu mingħajr ma tinħareġ
   sejħa tan-network.

Traskrizzjonijiet li jirnexxu jużaw il-cache LRU/TTL tal-Modality Bridge mifrux
mal-proċess kollu. Iċ-ċavetta tgħaqqad ir-referenza tal-awdjo, it-tikketta stabbli
tal-operazzjoni `audio-transcription`, u l-mudell STT magħżul; il-fallimenti qatt
ma jinħażnu fil-cache. It-tentattivi tal-awdjo jaġġornaw il-counters kondiviżi
`bridged`, `cacheHits`, `failures`, u `lastUsedAt`.
Risposti trasformati jinkludu
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; talbiet
mhux mibdula ma jirċevux segment Audio Bridge.

Is-settings waqt l-eżekuzzjoni huma sostnuti mid-DB u vvalidati minn Zod:

| Ċavetta                       | Valur predefinit | Firxa                     |
| ----------------------------- | ---------------- | ------------------------- |
| `modalityBridgeAudioEnabled`  | `true`           | —                         |
| `modalityBridgeAudioModel`    | `""`             | Awtomatiku jew ID tal-STT |
| `modalityBridgeAudioTimeout`  | `60000`          | 1000–300000               |
| `modalityBridgeAudioMaxClips` | `3`              | 1–10                      |

Il-cache kondiviż jibqa’ kkontrollat minn `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, u `modalityBridgeCacheMaxEntries`.

### Pont tal-Vidjo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Jinterċetta l-partijiet tal-vidjo tal-ogħla livell f’`messages` ta’ Chat Completions u
f’`input` tal-API Responses qabel ma tissejjaħ mira mingħajr appoġġ nattiv magħruf
għall-vidjo. Il-forom appoġġjati huma `input_video`, `video_url`, `video_source`,
URLs HTTPS, u URIs tad-data `data:video/*;base64,...`. Ismijiet sempliċi ta’
fajls fit-test ma jiġux ittrattati bħala vidjo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) jieħu ħsieb il-perkors tat-talba,
il-verifika tal-kapaċità/politika, l-aggregazzjoni għal kull talba, u l-payload
tar-rispons. Ix-xogħol għal kull vidjo — l-akkwist, il-cache tar-riżultat sħiħ,
id-deskrizzjoni ta’ sekwenza ta’ frames (li tintegra kwalunkwe traskrizzjoni tal-awdjo
ddikjarata minn min jagħmel is-sejħa), u l-metriċi/abort/tindif għal kull tentattiv —
huwa moħbi wara `processVideoPart` f’`videoBridgePipeline.ts`, li tissejjaħ darba
għal kull parti tal-vidjo fiċ-ċiklu ta’ `preCall`. Dak il-modulu jiddefinixxi wkoll
il-konfini espliċiti tal-ports `VideoMediaBrokerPort` (l-akkwist tal-bytes u
l-estrazzjoni ta’ frames kampjunati), `VideoAudioTranscriptionPort` (l-integrazzjoni
ta’ traskrizzjoni tal-awdjo ddikjarata minn min jagħmel is-sejħa mal-captions
kampjunati), u `VideoDrilldownPort` (il-konfini tal-persistenza għad-drill-down
tal-frames; għadu mhux konness ma’ `processVideoPart` — bħalissa hija biss ir-rotta
separata `/api/modality-bridge/video/drilldown` li tikteb entrati tad-drill-down).

Il-perkors pubbliku tat-talba `/v1` qatt ma jimporta jew jinvoka sottoproċess.
Vidjos remoti jitniżżlu taħt limitu ta’ 50 MiB; vidjos base64 inline għandhom
limitu konservattiv dekodifikat għal kull vidjo ta’ 36 MiB sabiex l-envelope
tal-mudell/messages/framing ikun jista’ jibqa’ fil-limitu pubbliku ta’ ammissjoni
ta’ talbiet JSON ta’ 50 MiB. It-tul inline u l-istimi tad-daqs dekodifikat jiġu
vverifikati qabel l-allokazzjoni. HTTPS huwa meħtieġ fil-URL remot inizjali u
f’kull ridirezzjoni, bl-użu tal-gwardja eżistenti għall-ħruġ pubbliku biss
b’DNS pinning. Imbagħad il-bytes jaqsmu l-konfini eżatti tal-broker intern
`POST /api/modality-bridge/video/extract`. Dik ir-rotta hija kemm `LOCAL_ONLY`
kif ukoll `SPAWN_CAPABLE`, taċċetta biss talba awtentikata għal kull proċess minn
loopback fdat, u qatt ma taċċetta URL, perkors tas-sistema tal-fajls,
eżegwibbli, jew lista ta’ argumenti. Il-pipeline tal-limitu tad-daqs tal-body
tal-API u l-qarrej inkrementali tal-body tal-handler jinfurzaw b’mod indipendenti
limitu ta’ input tal-broker ta’ 50 MiB. Il-kju limitat tiegħu jwettaq estrazzjoni
waħda kull darba, jippermetti erba’ xogħlijiet pendenti, u jillimita l-input
pendenti għal 100 MiB.

Ġewwa l-broker, `ffprobe` jaqra fajl lokali privat; il-lista fissa ta’ formati
permessi teskludi formati ta’ playlists u manifests. Għal containers permessi
tal-familja MOV, ir-referenzi esterni għad-data MOV jibqgħu diżattivati b’mod
predefinit, u l-kmand fiss ma jattivahomx. Kemm `ffprobe` kif ukoll `ffmpeg` jużaw
il-lista ta’ protokolli permessi limitata għal `file` biss, thread wieħed,
arrays fissi ta’ argumenti, ebda shell, u eżegwibbli riżolti minn `PATH`.
Streams ta’ stampi tal-qoxra mehmuża mhumiex kandidati li jistgħu jintlagħbu.
L-istreems kollha li jistgħu jintlagħbu jridu jissodisfaw il-limiti, u stream
predefinit espliċitu jingħata preferenza qabel il-fallback deterministiku
għall-indiċi l-aktar baxx. Il-vidjos huma limitati għal 600 sekonda, 8,192 pixel
għal kull dimensjoni, u 33,554,432 pixel tas-sors. FFmpeg jieħu kampjun ta’ 1–16-il
frame JPEG mill-punti tan-nofs, inaqqas ix-xifer it-twil għal mhux aktar minn
1,024 pixel mingħajr ma jkabbar inputs iżgħar, u qatt ma jirċievi URL.
Il-kampjunar huwa `uniform` b’mod predefinit. Il-politiki fakultattivi
`scene_aware` u sperimentali `segment_aware` iwettqu pass fiss addizzjonali wieħed
ta’ FFmpeg fuq l-istess stream lokali diġà vvalidat, jagħżlu timestamps tax-xeni
`showinfo` b’limiti, u jaqgħu lura b’mod deterministiku għall-istess punti tan-nofs
uniformi jekk id-detector ifalli, jiskadi ż-żmien, jipproduċi output malformat,
jew jirriżulta sett vojt ta’ kandidati. Il-modalità segment-aware talloka kampjuni
tal-punti tan-nofs proporzjonalment għall-intervalli vvalidati tax-xeni;
l-evidenza segment-aware u l-imġiba tal-fallback huma
ddettaljati hawn taħt. Il-limitu strett ta’ 16-il frame jiġi
applikat wara l-għażla f’kull politika. Meta talba scene-aware jkollha baġit ta’
frame wieħed biss, tintuża l-punt tan-nofs uniformi tal-vidjo sħiħ attiv jew
tat-tieqa ta’ fokus u jiġi rrappurtat `policyEffective: uniform`: frame wieħed
magħżul minn xena ma jistax jippreserva ż-żewġ truf temporali. Min jagħmel
is-sejħa jista’ b’mod fakultattiv jipprovdi tieqa ta’ fokus finita (`start`/`end`
f’sekondi); il-limiti jiġu ristretti għat-tul tal-media, twieqi maqluba jew mhux
finiti jiġu rrifjutati, u l-politiki kollha tal-kampjunar jitwettqu biss
fl-intervall normalizzat. It-tieqa li tirriżulta tiġi inkluża fil-metadata
tal-kampjunar u fil-prefiss tad-deskrizzjoni mhux fdata sabiex il-mudelli downstream
ikunu jistgħu jiddistingwu silta ffukata mit-timeline sħiħa.

Il-fokus semantiku tal-captions huwa setting separat u espliċitu. Il-modalità
predefinita tal-analiżi `full` tippreserva l-prompt eżistenti tal-frame u qatt ma
tgħaddi t-test tat-talba lill-mudell tal-captions. Fil-modalità `focused`,
il-pont jaqra biss l-aħħar `text`/`input_text` mhux vojt miktub mill-utent
mill-istess container ta’ Chat jew Responses, jinnormalizzah għal NFC, jiġbor
flimkien il-karattri ta’ kontroll u l-ispazji bojod, u jillimitah għal 500 punt
ta’ kodiċi Unicode. Riżultat vojt jaqa’ lura għall-prompt `full` eżatt.
Ħjiel li jista’ jintuża jiġi sserjalizzat bħala JSON fi blokka ddedikata ta’
kuntest tal-utent mhux fdat u jista’ biss jagħti prijorità lil dettalji
osservabbli; ma jistax jegħleb it-twissija separata kontra li jiġu segwiti
struzzjonijiet viżibbli jew li jinstemgħu fil-media. Il-fokus testwali qatt ma
jiddeduċi `start`/`end` u lanqas ma jibdel il-kampjunatur temporali.

#### Evidenza strutturali tas-segment FU-07

`segment_aware` juża pass wieħed limitat ta’ preanaliżi fuq il-fluss tal-vidjo lokali li jkun diġà ġie vvalidat. Il-katina fissa tal-filtri l-ewwel tiskala għal wisa’ massimu ta’ 320 pixel, tiskopri bidliet fix-xena u intervalli ffriżati, imbagħad tieħu kampjun b’rata ta’ frejm wieħed kull sekonda biex tkejjel iċ-ċajpir, il-luma medja, u l-informazzjoni spazjali/temporali. Il-pass huwa limitat għal 600 kampjun strutturali, thread wieħed ta’ FFmpeg/filtru, l-istess listi ta’ protokolli permessi limitati għal `file` biss u ta’ kontenituri permessi, limitu ta’ 1 MiB għall-output tal-proċess, u massimu ta’ 30 sekonda fi ħdan l-abort/skadenza kondiviża tal-broker. Qatt ma jaċċetta kmand, filtru, mogħdija, jew URL mit-talba.

Il-valuri strutturali huma evidenza deterministika tal-kampjunar, mhux fehim semantiku tal-vidjo. Ma jiddeduċux suġġetti, azzjonijiet, sottotitli, diskors, jew l-intenzjoni tal-utent. Il-konfini tax-xeni u tal-iffriżar jiffurmaw segmenti; il-kopertura tal-iffriżar, iċ-ċajpir, l-espożizzjoni, id-dettall spazjali, u l-bidla temporali jinfluwenzaw biss kif jiġi allokat il-baġit eżistenti ta’ 1–16-il frejm. Segment kompletament iffriżat huwa limitat għal frejm wieħed, filwaqt li s-segmenti mhux iffriżati jikkompetu għall-baġit li jifdal. Meta l-għadd tal-konfini jkun akbar mill-għadd tal-frejms, tinżamm kopertura uniformi tal-linja taż-żmien sabiex qtugħ rapidu fil-bidu ma jkunx jista’ jaħbi segment twil fit-tmiem. Il-konfini tax-xeni li jaqgħu fir-riżoluzzjoni ta’ analiżi ta’ sekonda waħda minn konfini ta’ ffriżar jingħaqdu.

Filtri neqsin, evidenza malformata/vojta, żball fid-detettur, jew timeout tal-preanaliżi limitata jirriżultaw f’fail-open għall-politika eżatta tal-punt tan-nofs uniformi. Abort minn min jagħmel is-sejħa jew skadenza tal-broker ma jirriżultawx f’fail-open: itemmu s-sottoproċess li jkun għaddej, jipprevjenu estrazzjoni sussegwenti tal-frejms, u s-siġra temporanja privata titneħħa fi `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` jiġġenera fixtures reali u deterministiċi ta’ FFmpeg għall-iffrankar tas-sejħiet tal-caption wara d-dedupplikazzjoni, għall-allokazzjoni tal-baġit għal moviment dens, għall-evidenza taċ-ċajpir/espożizzjoni/SI-TI, għal qtugħ rapidu b’parti finali twila, u għal pożittivi foloz minn fade gradwali. Jirreġistra l-ħin tal-preanaliżi skont l-arloġġ u, fejn `/usr/bin/time` ikun disponibbli, is-CPU tal-proċess child u l-ogħla RSS. Il-kontrolli tal-kwalità tiegħu huma orakli strutturali biss. Il-kwalità reali tal-mudell tal-caption tibqa’ `HOLD` minħabba li dan il-harness ma għandu l-ebda endpoint awtorizzat jew ġudikatur iffissat. L-iffrankar monetarju jibqa’ wkoll `HOLD` sakemm `--caption-cost-per-call-usd` ma jipprovdix stima pożittiva espliċita tal-ispiża għal kull sejħa; l-iskript qatt ma jiffabrika xi wieħed minn dawn ir-riżultati.

Kull frejm huwa limitat għal 4 MiB, il-frejms mhux ipproċessati kollha flimkien għal 23 MiB, u r-rispons serjalizzat tal-broker għal 32 MiB. Direttorju temporanju privat jitneħħa fi `finally`. OmniRoute ma jinkludix FFmpeg miegħu u ma jaċċettax mogħdija personalizzata għall-eżekutibbli. Qabel il-ħolqien tal-caption, il-bridge japplika pass konservattiv ta’ dedupplikazzjoni viżiva: kull JPEG jitnaqqas għal buffer grayscale ta’ 16×16 u jitqabbel biss mal-aħħar frejm miżmum. Għal baġit mitlub ta’ captions li jaqbeż frejm wieħed, l-estrazzjoni tipprovdi pool limitat ta’ kandidati sa darbtejn dak il-baġit u qatt aktar minn 16-il frejm. Il-limitu mitlub jiġi applikat biss wara d-dedupplikazzjoni, bil-kandidati magħżula tal-bidu u tat-tmiem jinżammu matul it-tnaqqis finali meta l-baġit ikun ta’ mill-inqas tnejn. Il-politika b’verżjoni
`grayscale-16x16-mean-cells-v2` tuża l-akbar valur bejn id-delta tal-luma medja u l-proporzjon taċ-ċelloli tal-minjatura li d-delta normalizzata tagħhom tkun mill-inqas 0.05. Il-livell limitu tad-duplikati huwa l-kostanti 0.04, magħżul għall-prevedibbiltà aktar milli espost bħala konfigurazzjoni waqt l-eżekuzzjoni. Dan is-sinjal sekondarju b’kuntrast għoli jippreserva moviment żgħir u bidliet f’test viżibbli li paragun ibbażat biss fuq il-medja jista’ jaħbi. Żbalji fil-komparatur jew fid-decoder jirriżultaw f’fail-open u jżommu l-kopertura. Il-metadata tal-output tiddistingwi bejn il-kandidati estratti, il-frejms użati b’suċċess, u d-duplikati viżivi eliminati.

Parti tal-vidjo mmarkata espliċitament tista’ titlob folja ta’ kuntatt b’timestamps. Il-bridge jibni grilja JPEG b’massimu ta’ 4 kolonni u 16-il frejm. Kull ċellola ta’ 512-il pixel tinkorpora t-timestamp tas-sors tagħha f’faxxa tal-qiegħ b’kuntrast għoli, filwaqt li l-istess timestamps jibqgħu fil-metadata testwali għall-assoċjazzjoni u l-awditjar fi stadji sussegwenti. Il-JPEG komplut jibqa’ limitat għal 32 MiB. Jekk `sharp` ma jkunx jista’ jiddekodifika jew jikkomponi l-grilja, il-bridge jaqa’ lura għall-frejms JPEG individwali; abort mill-klijent xorta jiġi propagat tul l-operazzjoni tal-folja.

L-evidenza għall-promozzjoni tinżamm intenzjonalment separata mill-mikrobenchmark tal-kompożizzjoni sintetika. `scripts/perf/video-bridge-contact-sheet-eval.ts` jiddefinixxi harness A/B bi schema b’verżjoni għal mudelli tal-viżjoni reali kompatibbli ma’ OpenAI. Dan ikejjel it-tokens irrappurtati mill-fornitur, il-latenza totali skont l-arloġġ (inkluża l-kompożizzjoni tal-folja), l-għadd ta’ sejħiet lill-mudell, u ż-żamma tal-fatti ddefiniti fil-manifest. Ir-risponsi mhux ipproċessati tal-mudell ma jinkitbux fir-rapport; jinżammu biss id-digests SHA-256 u l-IDs tal-fatti li jaqblu. Il-harness ma jagħmel l-ebda sejħa tan-network jew lil mudell bi ħlas sakemm ma jingħaddiex `--execute-real` u ma jkunux ikkonfigurati `--model`, `OMNIROUTE_BASE_URL`, u `OMNIROUTE_API_KEY`. Mingħajr dik l-eżekuzzjoni reali espliċita, il-verdett tiegħu li jista’ jinqara minn magna jibqa’ `HOLD`; il-kejl sintetiku tal-payload/tal-għadd ta’ sejħiet waħdu mhuwiex evidenza għall-promozzjoni.

Dawk li jagħmlu s-sejħa jistgħu jehmżu array fakultattiv `transcript.cues` ma’ parti tal-vidjo appoġġjata meta diġà jkollhom test allinjat. Kull cue għandu jkollu `text`, intervall finit `start`/`end` fi ħdan id-durata eżaminata, u `source` f’lista permessa (`client`, `embedded`, jew `audio-bridge`); `confidence` għandu valur predefinit ta’ `1` u jrid jibqa’ bejn `0` u `1`. Cues eżattament duplikati jingħaqdu. OmniRoute qatt ma jibda traskrizzjoni minn din il-metadata: cues ivvalidati jiġu kkupjati fir-riżultat deskritt flimkien mas-sors, il-kunfidenza, u l-intervall, u jintwerew bħala osservazzjonijiet mhux fdati flimkien mal-captions tal-frejms. Test invalidu, barra mill-medda, jew mingħajr provenjenza jiġi rrifjutat minflok ma jitħallat fil-fluss tal-captions. Iż-żewġ kanali tat-traskrizzjoni fil-body tat-talba jinnormalizzaw il-provenjenza pprovduta għal `client`, inklużi tikketti `embedded` jew `audio-bridge` iddikjarati mill-klijent innifsu. Adapter li jkun proprjetà tas-server biss jista’ jassenja dawk it-tikketti fdati permezz tal-argument `trustedSource` disponibbli biss mill-kodiċi; field JSON tat-talba ma jistax jilħaq dak l-argument. It-test tat-traskrizzjoni jibqa’ kontenut mhux fdat derivat mill-media, tkun xi tkun il-provenjenza tiegħu, u qatt ma għandu jiddetermina l-awtorizzazzjoni.

Utenti avvanzati jistgħu jipprovdu track `audioTranscript` għall-istess video;
dan jiġi ttrattat bħala test ipprovdut mill-klijent, mhux bħala prova ta’ traskrizzjoni mis-server.
Il-punt ta’ fużjoni jmexxi l-osservazzjonijiet viżivi u awdjo taħt
skadenza waħda u sinjal wieħed ta’ interruzzjoni, jordnahom fuq kronoloġija komuni, jgħaqqad
duplikati eżatti, u jirrapporta riżultat parzjali meta tirnexxi naħa waħda biss.
`audioTranscript` invalidu jwassal għal dak ir-riżultat parzjali — id-deskrizzjoni
viżiva tinżamm u l-fergħa tal-awdjo tirreġistra kodiċi ta’ falliment sanitizzat —
minflok ifalli l-video kollu. Id-disponibbiltà għal kull fergħa, il-marka ta’ riżultat parzjali,
u l-kodiċijiet ta’ falliment sanitizzati jinżammu fir-riżultat deskritt, fil-metadata
tal-guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), fil-metadata tal-cache tar-riżultati, u fil-counters
tal-fużjoni tal-bridge. Il-mogħdija predefinita tal-Video Bridge ma tinvokax speech-to-text
u lanqas ma tniżżel kopja oħra tal-media; mingħajr dak it-track espliċitu, tibqa’
video-only.

**Żamma tat-traskrizzjoni (#12150 P1).** Dan japplika awtomatikament kull meta l-
Video Bridge (li huwa nnifsu opt-in) jirrendi cue ta’ traskrizzjoni — ma hemm ebda flag
separata għaż-żamma. Meta request jirrendi kwalunkwe cue ta’ traskrizzjoni (`transcript`
iddikjarat minn min jagħmel is-sejħa jew `audioTranscript` magħqud), il-guardrail jimmarkah bħala
`videoBridgeObserved` u jipproduċi kopja parallela redatta tad-deskrizzjoni tal-video —
rendering identiku li fih il-korp ta’ test liberu ta’ kull cue jiġi sostitwit b’
`[redacted-video-transcript]`, mibni billi jiġi sostitwit il-field strutturat tal-cue
qabel ma tinbena l-string (qatt bl-ipparsing tat-test iċċattjat, sabiex l-ebda kontenut
tal-cue — ostili jew ordinarju, inklużi korpi li fihom `]` bħal
`[inaudible]`/`[music]` — ma jkun jista’ jibqa’). Il-korp persistit tar-request fil-call-log jibdel
kull parti ta’ test derivata mill-video ma’ dik il-kopja parallela redatta, imqabbla skont
l-ugwaljanza tal-kontenut; l-ankra `fullText` terġa’ tinqara mill-payload komplut tal-guardrail
ta’ qabel is-sejħa, sabiex it-tqabbil jibqa’ jirnexxi wara li guardrails sussegwenti fil-chain
(il-maskers tal-PII u tal-kredenzjali, prijoritajiet 10/95) jerġgħu jiktbu t-test tad-deskrizzjoni
fil-post u wara li l-injezzjoni tas-system-prompt/handoff/memory tibdel l-istruttura tal-array
tal-messaġġi. Il-korp mibgħut upstream lill-mudell ma jinbidilx. Request osservat ukoll ma jimla
ebda Memory durabbli (kemm l-estrazzjoni derivata mir-request kif ukoll dik derivata mir-response
jinqabżu), sabiex it-tweġiba tal-mudell stess ma tkunx tista’ tirrepeti t-test tat-traskrizzjoni
fil-Memory.

**Fields mhux ipproċessati tal-video (#12430).** Meta l-bridge jkun attivat u l-appoġġ nattiv għall-video ma jkunx magħruf jew ikun nieqes, fields `transcript`/`audioTranscript` definiti jattivaw ukoll `videoBridgeObserved`, anki wara falliment tad-deskrizzjoni jew limitu `maxVideos`. `null` u strings vojta jgħoddu; fields assenti u metadata mhux tal-video ma jgħoddux. Kopji miżmuma jirredattu dawn il-fields jew iħallu barra r-request, u l-caches/Memory jinqabżu.

F’dawk il-mogħdijiet fallback, cues validi pprovduti minn min jagħmel is-sejħa jsiru partijiet
`text`/`input_text` appoġġjati minflok fields mhux standard tal-provider. Iż-żewġ tracks
ipprovduti mir-request jibqgħu osservazzjonijiet `client` mhux fdati, bi twissija espliċita li l-video
ma ġiex deskritt u li t-timestamps ma ġewx ivverifikati mal-media. Il-limiti eżistenti
ta’ 256 cue/64-KiB b’kollox u għal kull cue japplikaw għaż-żewġ tracks flimkien;
it-timestamps iridu joqogħdu fil-limitu massimu ta’ 600 sekonda tal-broker u fi kwalunkwe
tieqa ta’ focus ipprovduta. Tracks invalidi jintremew, u ma jiġux mgħoddija bħala test arbitrarju;
track sibling validu xorta jista’ jintuża sakemm il-limitu kkombinat tagħhom ma jinqabiżx. Fields
null/vojta ma jżidu ebda test. Dan il-fallback ma jżid ebda fetch tal-media jew traskrizzjoni.
Fields ta’ estensjoni tat-traskrizzjoni jitneħħew mill-carrier tal-video fallback u mill-objects
`video_url`/`source` tiegħu. L-allowlist tal-wire ta’ OpenAI tibqa’ stretta; carriers tal-video
b’appoġġ nattiv mhux magħruf jibqgħu disponibbli u targets magħrufa bħala text-only iżommu
markers sikuri. Kopji paralleli ta’ redazzjoni strutturata jipproteġu t-test tat-traskrizzjoni
mehmuż, filwaqt li r-request oriġinali proprjetà ta’ min jagħmel is-sejħa jibqa’ mhux mibdul.
Targets b’appoġġ nattiv u bridges diżattivati jżommu l-imġiba eżistenti tagħhom ta’ bypass.

Kopji miżmuma addizzjonali jużaw l-istess sinjal ta’ request osservat. Is-snapshot mhux
ipproċessat tar-request tal-klijent ta’ qabel il-guardrail, ir-request pendenti fil-memory, u l-log
bikri tar-request miċħud jissostitwixxu strutturalment il-fields tat-traskrizzjoni fil-partijiet
tal-video; prompts ta’ string iġġenerati mill-istadji tal-pipeline u mill-context handoff jiġu
redatti fis-sink tal-korp persistit tar-request. Il-marker persistit `video_content_removed`
iġiegħel il-kontinwazzjoni b’`previous_response_id` tfalli b’mod magħluq minflok tirrikostruwixxi
test li ntrema intenzjonalment. Jekk request osservat jitlef il-kopja parallela tar-redazzjoni
għal kull parti qabel il-logging, jew jekk saħansitra waħda minn diversi kopji paralleli tal-video
ma taqbilx wara mutazzjonijiet sussegwenti tar-request, il-korp miżmum tar-request jitħalla barra
għalkollox minflok tinżamm traskrizzjoni redatta biss parzjalment.

Għal request osservat, response tal-mudell jista’ jikkwota kwalunkwe porzjon tat-
traskrizzjoni mingħajr konfini strutturati ta’ cue. Għalhekk, il-`responseBody` persistit
tiegħu fil-call-log jiġi sostitwit b’marker ta’ ommissjoni; l-artifact dettaljat
tal-pipeline (li jista’ jinkludi l-korpi upstream/tal-klijent u chunks tal-stream)
ma jinżammx. Il-caches semantiċi, tal-idempotency, u tar-reasoning-replay jaqbżu
l-qari u l-kitba għal dak ir-request. Ir-request tal-provider u r-response viżibbli
għall-klijent jibqgħu mhux mibdula. Bytes bikrija tal-keepalive jitneħħew mill-buffer
temporanju meta l-artifact dettaljat jitħalla barra. It-twissija ta’ Kiro dwar EventStream
iffurmat ħażin tirrapporta biss l-għadd ta’ bytes tal-payload, qatt il-kontenut tiegħu jew
l-iżball mhux ipproċessat tal-parser tal-JSON.
Dan ma jsostnix li kull dijanjostika mhux relatata tal-provider/plugin ġiet
awditjata; l-istħarriġ usa’ tas-sinks taż-żamma huwa segwit f’#11658.

Iċ-ċiklu tal-ħajja intern ta’ `/api/modality-bridge/video/drilldown` huwa substrat separat tal-cache, awtentikat permezz ta’ loopback/token. Kull operazzjoni teħtieġ ukoll ID prinċipali opak u kanoniku. Qabel ma jiġi attivat klijent tal-produzzjoni, dan irid jidderiva dak l-ID mit-tenant awtentikat u qatt ma għandu jgħaddi valur magħżul mill-klijent. Iċ-ċwievet tal-cache jorbtu dak il-prinċipal ma’ IDs kanoniċi tas-sessjoni u tar-referenza tal-vidjo, jaħżnu biss iċ-ċwievet tagħhom derivati b’SHA-256, u jillimitaw kemm il-qari kif ukoll it-tħassir għall-istess prinċipal. Il-cache taħżen mhux aktar minn 16-il frame JPEG derivat għal kull entrata, tiskadihom wara għaxar minuti, u tappoġġja qari limitat b’`start`/`end` jew tħassir espliċitu tas-sessjoni.

Kull prinċipal huwa limitat għal 16-il entrata u 64 MiB ta’ data JPEG kanonika. Dawk il-limiti huma indipendenti mil-limitu globali ta’ 64 entrata/256 MiB: il-pressjoni tal-kwota tal-prinċipal tneħħi biss l-entrati l-inqas użati reċentement ta’ dak il-prinċipal qabel ma tiġi kkunsidrata t-tneħħija LRU globali. L-entrati skaduti jitneħħew kemm mill-kontabbiltà tal-prinċipal kif ukoll minn dik globali waqt attività tal-cache, filwaqt li l-kanċellazzjoni u l-falliment tal-validazzjoni ma jikkommettux sostituzzjoni parzjali.

Il-cache tirrifjuta Base64 mhux kanoniku, padding eċċessiv, midja li mhijiex JPEG, JPEGs ifformattjati ħażin jew maqtugħin, u JPEGs li jipproduċu twissija waqt dekodifikazzjoni limitata tal-immaġni sħiħa b’`sharp`. Hija terġa’ tikkodifika kull immaġni aċċettata bħala JPEG kanoniku, tidderiva l-wisa’ u l-għoli mill-bytes dekodifikati minflok tafda l-fields tal-klijent, u tarmi kwalunkwe bytes polyglot li jkun fadal fl-aħħar minflok iżżommhom. Huwa biss il-buffer kompressat kanoniku u limitat li jingħadd maż-żewġ kwoti. Il-limitu JSON fuq il-wire jinkludi l-overhead tal-Base64 għal-limitu massimu ta’ 32 MiB tal-input dekodifikat. Kull
derivazzjoni maħżuna tirreġistra l-format/riżoluzzjoni JPEG validati tagħha, il-politika tat-teħid tal-kampjuni, il-verżjoni tad-derivazzjoni, il-ħin tal-ħolqien, il-hash tal-kontenut ikkalkulat mis-server, u r-referenza ġenitur hashed flimkien mal-hash tal-kontenut ġenitur tal-klijent fdat. Il-kanċellazzjoni tiġi ċċekkjata bejn il-fażijiet asinkroniċi tad-dekodifikazzjoni/hash qabel il-commit atomiku tal-cache.

Din it-tranche għadha ma tqabbadx produttur tal-produzzjoni mar-route u ma tipprovdix għażla ta’ varjanti b’riżoluzzjonijiet multipli. Għalhekk, il-passaġġ trasparenti tat-talba tal-Video Bridge ma jġarrab ebda xogħol addizzjonali, filwaqt li d-derivazzjoni tal-prinċipal marbuta mat-tenant u ċ-ċiklu tal-ħajja sħiħ b’riżoluzzjonijiet multipli ta’ FU-08 jibqgħu xogħol espliċitu ta’ segwitu minflok ma jiġu ddokumentati bħala mġiba kompluta.

Il-frames jingħataw captions sekwenzjalment bil-mudell Video kkonfigurat. Override Video vojt jiret l-issettjar Vision; jekk it-tnejn ikunu vojta, l-auto-router ta’ Vision jagħżel il-mudell effettiv li jappoġġja l-viżjoni. Captions li jirnexxu jissostitwixxu l-parti oriġinali bi prefiss stabbli `[Video description:` li jimmarka wkoll it-test bħala osservazzjoni mhux fdata derivata mill-midja u jgħid lill-mudelli downstream biex ma jsegwux struzzjonijiet misjuba fil-midja. Iċ-ċwievet tal-cache tal-caption tal-frame jinkludu l-bytes JPEG, il-prompt, it-timestamp, u l-mudell effettiv; jiġu maħżuna fil-cache biss captions li jirnexxu. L-entrati tal-cache jżommu l-mudell produttur li fil-fatt irnexxa, inkluż mudell fallback; il-bridge jirrapporta `mixed` meta frames differenti jkunu ġew prodotti minn mudelli differenti. Cache hit jerġa’ juża dik l-identità tal-produttur minflok jerġa’ jittikkettaha bħala l-pjan ta’ routing mitlub. Il-cache tar-riżultat tal-vidjo kollu għandu ċ-ċavetta tiegħu bbażata fuq kull input li jibdel l-output — il-prompt, il-mudell effettiv, il-politika tat-teħid tal-kampjuni, l-għadd ta’ frames, il-modalità tal-analiżi semantika, il-fingerprint SHA-256 tal-focus hint normalizzat, il-focus window, `transcript`, `audioTranscript`, u l-flag tal-contact sheet — għalhekk, bidla fi kwalunkwe waħda minn dawk id-dimensjonijiet tkun cache miss, u qatt użu mill-ġdid skadut. Il-verżjoni tal-politika tad-dedup viżiv, it-threshold, u l-għadd limitat ta’ candidate frames huma wkoll espliċiti fiċ-ċavetta u l-metadata tal-cache tar-riżultat; għalhekk, bidla fil-politika ma tistax terġa’ tuża deskrizzjoni skaduta tal-vidjo kollu. Il-metadata v4 tal-cache tar-riżultat iżżomm il-modalità u l-fingerprint, u qatt il-kompitu mhux ipproċessat tal-utent. Il-metadata tal-guardrail tirrapporta kemm il-modalità tal-analiżi mitluba kif ukoll dik effettiva; modalità `focused` mitluba mingħajr test tal-utent li jista’ jintuża tiġi rrappurtata bħala effettivament `full`.

Il-guardrail jiġbed kull parti tal-vidjo appoġġjata iżda ma jiddeskrivix aktar minn `modalityBridgeVideoMaxVideos`. Għal target li huwa ppruvat li għandu
`supportsVideo === false`, vidjows li fallew u dawk li jaqbżu l-limitu jsiru markers ta’ test sikuri u espliċiti sabiex ma jibqa’ ebda vidjo mhux ipproċessat. Meta l-kapaċità ma tkunx magħrufa, dawk il-partijiet iżommu l-video carrier tagħhom; kwalunkwe fallback transcript isegwi l-konverżjoni limitata għal test deskritta hawn fuq. Targets b’`supportsVideo === true` jaqbżu l-bridge. Is-sinjal ta’ abort tat-talba tal-klijent jiġi propagat permezz tad-download, il-kju tal-broker, is-subprocesses, u s-sejħiet tal-caption; l-aborts iwaqqfu l-ipproċessar bejn il-vidjows u qatt ma jfallu b’mod miftuħ billi jgħaddu l-midja mhux ipproċessata.

L-issettjar tar-runtime huwa sostnut mid-DB u vvalidat b’Zod:

| Ċavetta                             | Valur predefinit | Firxa / imġiba                                                                                                  |
| ----------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`          | Runtime fakultattiv, attivat b'għażla                                                                           |
| `modalityBridgeVideoAnalysisMode`   | `"full"`         | `full` iżomm sottotitli ġeneriċi; `focused` juża kuntest limitat u mhux fdat tal-aħħar utent                    |
| `modalityBridgeVideoModel`          | `""`             | Jiret il-mudell ta' Vision Bridge                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`              | 1–16                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`      | `uniform`, `scene_aware`, jew `segment_aware` proporzjonali; jekk id-ditekter ifalli, jaqa' lura għal `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`              | 1–4                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`         | 1000–120000 ms                                                                                                  |

Il-valuri persistiti legati għall-timeout tal-Vidjo li jaqbżu l-120 sekonda jiġu limitati sal-iskadenza tal-
broker; kitbiet ġodda tas-settings li jaqbżu dak il-limitu jiġu miċħuda.
`GET /api/modality-bridge/video/runtime` jeħtieġ lokalità loopback
fdata u ttimbrata qabel l-awtentikazzjoni jew l-ittestjar tar-runtime, u mbagħad jeħtieġ awtentikazzjoni
ta' ġestjoni. Jirritorna biss `available`, verżjonijiet sanitizzati ta' FFmpeg/ffprobe, u raġuni fissa
meta r-runtime ma jkunx disponibbli. L-endpoint intern tal-estrazzjoni mhuwiex
API pubblika għat-tlugħ: is-saturazzjoni tal-kju tirritorna `503` flimkien ma' `Retry-After`, skonnessjoni
min-naħa tas-sejjieħ tirritorna `499`, u l-iskadenza fissa tal-broker tirritorna `504`. It-tweġibiet ikkonvertiti jżidu
`video->text;model=<visionModel>;parts=<videos>` mal-header ċentrali
`x-omniroute-modality-bridge` mingħajr ma jneħħu s-segmenti ta' Vision jew Audio.

### Maskatur tal-PII (`piiMasker.ts`)

Jaħdem fiż-**żewġ** stadji.

- **`preCall`** jikklona l-payload, jgħaddi minn `system`, `messages`, `input`, u
  `prompt` (inklużi elementi ta' strings sempliċi), u japplika `processPII()` (minn
  `@/shared/utils/inputSanitizer`) għall-fields ta' `content`/`text` li huma strings. Meta
  `PII_REDACTION_ENABLED=true`, il-PII identifikata tiġi moħbija fil-payload
  li jintbagħat. Dan huwa indipendenti minn `INPUT_SANITIZER_MODE` (li jikkontrolla biss
  il-politika tal-injezzjoni fil-prompt). Meta l-ħabi jkun mitfi, is-sejħa tirreġistra l-għadd
  ta' detezzjonijiet mingħajr ma tikteb mill-ġdid il-kontenut.
- **`postCall`** jagħmel klonu profond tat-tweġiba, iħaddem `sanitizePIIResponse()` flimkien mal-
  maskatur għall-forma tal-Responses API (`maskResponsesOutput` — ikopri
  `output_text` u `output[].content[].text`). Jekk iseħħ xi ħabi, it-
  tweġiba modifikata tissostitwixxi l-oriġinali.

Il-guardrail qatt ma jimblokka; huwa biss jannota (`meta.detections`,
`meta.redacted`) jew jikteb mill-ġdid.

### Injezzjoni fil-Prompt (`promptInjection.ts`)

Jidentifika strutturi avversarji fil-kontenut ipprovdut mill-utent u jinforza l-
politika kkonfigurata. L-imġiba hija mmexxija minn varjabbli tal-ambjent u għażliet tal-
kostruttur:

| Setting              | Varjabbli tal-ambjent                                                                                      | Valur predefinit | Effett                                                                                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Attivat              | `INPUT_SANITIZER_ENABLED`                                                                                  | `true`           | Meta jkun `false`, il-guardrail jieqaf minnufih.                                                                                                                                                                                               |
| Modalità             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                            | `warn`           | Politika tal-injezzjoni: `block`, `warn`, jew `log`. (`redact` huwa aċċettat għall-kompatibbiltà retroattiva iżda **ma** jneħħix it-test tal-injezzjoni; il-kitba mill-ġdid tal-PII fit-talba hija kkontrollata minn `PII_REDACTION_ENABLED`.) |
| Limitu tal-imblukkar | Għażla `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (psewdonimu `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`           | Severità minima meħtieġa għall-imblukkar. B'mod predefinit, il-livell medju huwa biss għall-osservazzjoni.                                                                                                                                     |

**Preċedenza tal-modalità** (`getMode`): `options.mode` tas-sejjieħ →
sovrastruttura tal-feature flag fid-DB għal `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → varjabbli tal-ambjent `INJECTION_GUARD_MODE` → varjabbli tal-ambjent `INPUT_SANITIZER_MODE` →
`warn`. Għalhekk, sovrastruttura mid-dashboard tieħu preċedenza fuq il-varjabbli tal-ambjent, u għalhekk l-UI ta'
Feature Flags tikkontrolla l-guard attiv direttament (mingħajr restart). Il-qari mid-DB huwa fail-safe:
jekk iseħħ żball, il-guard jaqa' lura għall-imġiba bbażata fuq il-varjabbli tal-ambjent, u meta ma jkun stabbilit l-ebda
override, l-imġiba tkun identika għar-riżoluzzjoni bbażata biss fuq il-varjabbli tal-ambjent.

Sorsi ta' detezzjoni:

1. `sanitizeRequest()` minn `@/shared/utils/inputSanitizer` (sett kondiviż ta' ditekters
   użat f'partijiet oħra tal-pipeline).
2. `DEFAULT_GUARD_PATTERNS` integrati (bħalissa `system_override_inline` u
   `markdown_system_block`, it-tnejn b'severità `high`).
3. `customPatterns` fakultattivi mgħoddija permezz tal-għażliet tal-kostruttur (strings, regex,
   jew rekords `{ name, pattern, severity }`).

Meta `mode === "block"` **u** mill-inqas sejbien wieħed jilħaq il-limitu tas-severità,
`preCall` jirritorna `{ block: true, message: "Request rejected:
suspicious content detected" }`. Fil-modi `warn`/`log`, il-guardrail jirreġistra fil-log iżda
jippermetti s-sejħa. Il-helper kondiviż `evaluatePromptInjection()` huwa esportat ukoll
għal min ikollu bżonn jevalwa l-prompts mingħajr ma jgħaddi mir-reġistru.

**Limitu tal-iskannjar (v3.8.20):** id-detector jispezzjona biss l-**ewwel 16 KB** mit-test
magħqud tal-prompt — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) f'
`src/shared/utils/inputSanitizer.ts`. Kemm `detectInjection()` kif ukoll
`evaluatePromptInjection()` jagħmlu `slice(0, MAX_INJECTION_SCAN_BYTES)` qabel ma jħaddmu
l-loop tal-patterns. Id-direttivi tal-injezzjoni jkunu qrib il-bidu tal-input, għalhekk dan
jillimita l-użu tas-CPU/GC mir-regex fuq payloads ta' mijiet ta' KB mingħajr ma jdgħajjef id-detezzjoni (ara
#3932, #4041).

### Maskatur tal-Kredenzjali (`credentialMasker.ts`)

Jaħdem fiż-**żewġ** stadji, l-aħħar fil-katina predefinita (prijorità `95`). Jaħbi
patterns magħrufa sew ta' API keys / tokens sigrieti mill-payload li jintbagħat (il-kontenut
tal-messaġġ, l-argumenti tas-sejħiet tal-għodod, ir-riżultati tal-għodod) **u** mir-rispons tal-fornitur, sabiex
kredenzjali mwaħħla fi prompt (jew ripetuti lura minn riżultat ta' għodda) ma jiġux żvelati
lill-fornitur upstream jew lura lill-klijent.

- **Biss b'attivazzjoni espliċita**, bl-istess konvenzjoni bħaċ-ċensura tal-PII (qrib ir-Regola Stretta #20):
  diżattivat sakemm `settings.credentialRedactionEnabled === true` **jew**
  `CREDENTIAL_REDACTION_ENABLED=true`. Meta jkun mitfi, il-guardrail ma jagħmel xejn —
  qatt ma jimblokka u qatt ma jikteb mill-ġdid.
- `redactCredentials()` jgħaddi mis-siġra kollha tal-payload/rispons (`walkValue()`,
  protett kontra l-prototype pollution, u protett miċ-ċikli permezz ta' `WeakSet`) u jissostitwixxi l-korrispondenzi bi
  placeholder `[REDACTED:<type>]`, filwaqt li jikklona biss il-fergħat li fil-fatt
  nbidlu.
- `CREDENTIAL_PATTERNS` ikopri ċwievet tal-fornituri tal-LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens ta' VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ċwievet tal-pagamenti (Stripe, Square), ċwievet
  tal-cloud (AWS access key, Twilio, SendGrid, Mailgun), ċwievet privati / JWTs,
  connection strings li fihom kredenzjali (`mongodb://user:pass@...`, eċċ.), u
  pattern ġeneriku għall-valur tal-header `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Iċ-ċwievet b'forma ta' header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) jiġu ċċensurati strutturalment (il-valur biss, filwaqt li l-prefiss tal-iskema bħal
  `Bearer `/`Basic ` jinżamm) minflok permezz tar-regex ġeneriku tat-test.
- Il-guardrail qatt ma jimblokka; jikteb mill-ġdid biss (`modifiedPayload` /
  `modifiedResponse`) u jżid annotazzjonijiet (`meta.credentialsRedacted`, `meta.count`).

Protezzjoni kontra r-rigressjoni: `tests/unit/credential-masker-guardrail.test.ts`.

## Kuntratt Bażiku (`base.ts`)

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
  block?: boolean; // true jwaqqaf il-katina immedjatament
  message?: string; // jintwera meta jsir imblukkar
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // jiġi rritornat minn preCall biex jerġa' jikteb it-talba
  modifiedResponse?: TValue; // jiġi rritornat minn postCall biex jerġa' jikteb ir-rispons
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

Guardrail jindika "l-ebda bidla" billi jirritorna jew `void`, `{}`, jew
`{ block: false }`. Ir-ritorn ta' `modifiedPayload`/`modifiedResponse` jissostitwixxi
l-valur li jgħaddi mill-katina għall-guardrails sussegwenti.
`signal?: AbortSignal` jittrasmetti ċ-ċiklu tal-ħajja ta' min jagħmel is-sejħa lill-guardrails. L-abort ta' talba huwa l-eċċezzjoni intenzjonata ta' fail-open: il-pontijiet tal-midja jwaqqfu x-xogħol u jagħmlu t-tindif mingħajr ma jirrestawraw il-midja mhux ipproċessata lejn mira li hu magħruf li ma tappoġġjahiex.

## Reġistru (`registry.ts`)

Is-singleton `guardrailRegistry` jesponi:

- `register(guardrail)` — iżid guardrail (jew jissostitwih skont l-isem normalizzat) u
  jerġa' jordna skont `priority` axxendenti.
- `clear()` / `list()` — għodod ta' għajnuna amministrattivi.
- `runPreCallHooks(payload, context)` — jgħaddi mill-guardrails attivi, jgħaddi l-
  payload minn `modifiedPayload`, u jieqaf mal-ewwel `block: true`.
- `runPostCallHooks(response, context)` — l-istess fluss fuq in-naħa tar-rispons.
- `resetGuardrailsForTests({ registerDefaults })` — ineħħi l-istat u, b'mod fakultattiv,
  jerġa' jirreġistra l-valuri predefiniti għal iżolament nadif tat-testijiet.

Iż-żewġ runners jirritornaw `{ blocked, payload|response, results, guardrail?, message? }`
fejn `results` huwa array ta' rekords `GuardrailExecutionResult` li jinkludu
l-fields `blocked`, `skipped`, `modified`, `error`, u `meta` għal kull guardrail,
utli għat-traċċar.

### Diżattivazzjoni tal-Guardrails Għal Kull Talba

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` jiġbor lista
mingħajr duplikati ta' ismijiet ta' guardrails li għandhom jinqabżu għat-talba
attwali. Is-sorsi (kollha fakultattivi, kollha magħquda) huma:

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` fil-body tat-talba (fl-ogħla livell)
- `metadata.disabledGuardrails` fil-body tat-talba
- Il-header `x-omniroute-disabled-guardrails` (jew dak legat
  `x-disabled-guardrails`)

Il-valuri jistgħu jkunu arrays ta' strings jew string separata b'virgoli; l-ismijiet jiġu
normalizzati għal kebab-case b'ittri żgħar (`pii_masker` → `pii-masker`). Ir-riżultat
jgħaddi permezz ta' `context.disabledGuardrails` lir-reġistru, li jaqbeż
il-guardrails korrispondenti (`skipped: true` f'`results`).

## Ordni tal-Eżekuzzjoni

Għal kull talba li tgħaddi minn `src/sse/handlers/chat.ts` u
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` jibni l-lista ta’ elementi li għandhom jinqabżu mill-API key, mill-body,
   u mill-headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` iħaddem il-guardrails f’ordni axxendenti
   ta’ prijorità:
   - Il-guardrails diżattivati jiġu rreġistrati bħala `skipped`.
   - Il-`preCall` ta’ kull guardrail jista’ jerġa’ jikteb il-payload permezz ta’ `modifiedPayload`.
   - L-ewwel `block: true` iwaqqaf il-katina immedjatament u l-handler jirritorna
     risposta ta’ rifjut mill-guardrail.
3. Il-payload (li potenzjalment ikun inkiteb mill-ġdid) jgħaddi għar-routing ikkombinat u
   għad-dispatch upstream.
4. Wara li tiġi assemblata r-risposta, `guardrailRegistry.runPostCallHooks(...)`
   iħaddem l-istess katina fuq ir-risposta. `block: true` hawnhekk iwarrab ir-risposta
   upstream.

Guardrails li joħolqu eċċezzjoni jiġu rreġistrati b’`error: <message>` u jiddaħħlu fil-log permezz ta’
`logger.warn`, iżda l-katina tkompli — bid-disinn, f’każ ta’ falliment tippermetti li l-proċess ikompli.

## Konfigurazzjoni

Varjabbli tal-ambjent moqrija mill-guardrails integrati:

| Varjabbli                             | Użata minn                | Effett                                                                                                                        |
| ------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Issettja għal `false` biex tiddiżattiva kompletament id-detezzjoni.                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Politika tal-injezzjoni: `warn`, `block`, jew `log`. Il-valur legacy `redact` ma jerġax jikteb it-test tal-injezzjoni.        |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modalità għall-guard tal-injezzjoni; huwa wkoll feature flag fid-DB li **jissostitwixxi** l-varjabbli tal-ambjent (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Is-severità minima li `MODE=block` jirrifjuta: `high` (default), `medium`, jew `low`.                                         |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias legacy għal `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                          |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Meta jkun `true`, il-PII tat-talba jiġi redatt (indipendentement mill-modalità tal-injezzjoni).                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Jikkontrolla l-imġiba tal-masker fuq in-naħa tar-risposta.                                                                    |

Il-guardrails tal-Modality Bridge jaqraw il-konfigurazzjoni waqt l-eżekuzzjoni mill-ħażna tas-settings
ibbażata fuq id-DB (`getSettings()`), mhux mill-varjabbli tal-ambjent. Il-keys primarji ta’ Vision huma
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, u
`modalityBridgeCacheMaxEntries`. Il-keys legacy
`visionBridge*` jiġu aċċettati biss bħala l-fallback dokumentat għall-qari għal ċiklu wieħed;
il-kitbiet mid-dashboard jużaw il-keys primarji. Il-valuri default u r-resolver tal-fallback
jinsabu f’`src/shared/constants/modalityBridgeDefaults.ts`, filwaqt li l-kostanti legacy
jinżammu f’`src/shared/constants/visionBridgeDefaults.ts`.

Audio juża `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, u `modalityBridgeAudioMaxClips`, flimkien mas-settings kondiviżi
`modalityBridgeCache*`. Audio m’għandux fallback għal keys legacy minħabba li dawn
il-keys ġew introdotti mal-iskema tal-Modality Bridge.

Video juża `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, u
`modalityBridgeVideoTimeout`, flimkien mas-settings kondiviżi `modalityBridgeCache*`.
Huwa diżattivat b’mod default minħabba li FFmpeg/ffprobe huma dipendenzi operazzjonali
fakultattivi u l-ħolqien ta’ captions għall-frames iżid il-latenza u l-ispiża tal-mudell.

## Guardrails Personalizzati

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

Passi:

1. Oħloq `src/lib/guardrails/myGuardrail.ts` li jestendi `BaseGuardrail`.
2. Implimenta `preCall` u/jew `postCall`.
3. Jew irreġistrah waqt l-importazzjoni (żidu minn `registerDefaultGuardrails`) jew
   sejjaħ `guardrailRegistry.register(...)` waqt l-eżekuzzjoni — ir-reġistru jissostitwixxi
   kwalunkwe guardrail preċedenti bl-istess isem normalizzat.
4. Żid testijiet taħt `tests/unit/` (eżempji eżistenti:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Ittestjar

Uża `resetGuardrailsForTests()` bejn it-testijiet biex tibda minn stat magħruf.
Għaddi `{ registerDefaults: false }` biex tibda b’reġistru vojt u
rreġistra biss il-guardrails li qed jiġu ttestjati. Vision Bridge jaċċetta l-injezzjoni
tad-dipendenzi (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge jesponi
l-punti ta’ separazzjoni ekwivalenti għas-settings, il-kapaċitajiet, l-għażla tal-mudell STT, il-kontrolli
tal-kredenzjali, u t-traskrizzjoni. Għalhekk, it-testijiet jistgħu jeżerċitaw iż-żewġ flussi mingħajr aċċess
għad-DB jew għan-network.

## Ara Wkoll

- `src/lib/guardrails/` — implimentazzjoni
- `src/shared/utils/inputSanitizer.ts` — detettur kondiviż li jħaddem
  il-protezzjoni kontra l-injezzjoni fil-prompt u l-maskra tal-PII
- `src/shared/constants/visionBridgeDefaults.ts` — valuri predefiniti ta’ Vision Bridge u
  lista ta’ mudelli b’bridge obbligatorju
- `src/shared/constants/modalityBridgeDefaults.ts` — valuri predefiniti kondiviżi waqt l-eżekuzzjoni għal Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — saff ortogonali (circuit breaker, perjodi ta’ stennija)
- `docs/reference/ENVIRONMENT.md` — referenza sħiħa tal-varjabbli tal-ambjent

## Kopertura tar-rotot tal-protezzjoni kontra l-injezzjoni u red-team (Fażi 8 · Blokka D)

Il-protezzjoni kontra l-injezzjoni (`createInjectionGuard` / `withInjectionGuard`) tkopri r-rotot kollha
li jaċċettaw prompts tal-utenti. Tirrispetta `INJECTION_GUARD_MODE` (il-valur predefinit `warn` = tirreġistra biss;
`block` = tirritorna HTTP 400 `SECURITY_001`).

| Tip              | Rotot                                                                                                                                                | Modalità predefinita |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Test (eżistenti) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                 |
| Ġenerattiv       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                 |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                 |

L-estrazzjoni tat-test (`extractMessageContents`) tkopri `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kull lejl, `nightly-llm-security.yml`):** promptfoo jivvalida li kull rotta timblokka
l-korpus OWASP-LLM meta `INJECTION_GUARD_MODE=block`; garak iħaddem probes (jinqabeż mingħajr secret).
`moderations` huwa inkluż għall-konsistenza — l-operaturi fil-modalità ta’ mblukkar jistgħu jeżentawh permezz ta’
`resolveDisabledGuardrails`.

Il-workflow ta’ kull lejl (`.github/workflows/nightly-llm-security.yml`, cron + attivazzjoni
manwali) għandu żewġ jobs:

- **`promptfoo-guard` (blokkanti)** — iħaddem `promptfoo eval -c promptfooconfig.yaml`
  b’`INJECTION_GUARD_MODE=block`. Kull każ avversarju (eż. "ignore all
  previous instructions…", jailbreaks tal-istil DAN) jivverifika li r-risposta ġġorr
  `error.code === "SECURITY_001"`, jiġifieri li l-protezzjoni fil-fatt irrifjutat it-talba.
- **`garak` (konsultattiv)** — iħaddem garak `--probes promptinject,dan,leakreplay`
  kontra istanza lokali ta’ OmniRoute (`http://localhost:20128/v1`). Huwa kkundizzjonat minn
  secret tal-fornitur (`PROMPTFOO_PROVIDER_KEY`); jinqabeż mingħajr problemi u għandu s-suffiss
  `|| true`, għalhekk jirrapporta mingħajr ma jfalli s-CI.

Il-kopertura tal-helper tal-protezzjoni (`createInjectionGuard` / `withInjectionGuard`)
testendi għal kull rotta `/v1` li ġġorr prompt; it-test tal-prompt jittieħed minn
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` minn
`extractMessageContents()` f’`src/shared/utils/inputSanitizer.ts`.
