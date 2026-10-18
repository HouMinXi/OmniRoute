# Guardrails (Latviešu)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Patiesības avots:** `src/lib/guardrails/`
> **Pēdējoreiz atjaunināts:** 2026-08-29 — v3.8.51 (Video Bridge transkripta izcelsmi deklarē izsaucējs,
> serveris to vēl nepārbauda — precizēts saskaņā ar #11661)

Aizsargmehānismi nodrošina drošības, politiku un satura transformāciju ievērošanu uz robežas
starp OmniRoute un augšupējiem pakalpojumu sniedzējiem. Katrs aizsargmehānisms var pārbaudīt (un
pēc izvēles noraidīt, transformēt vai anotēt) pieprasījumu lietderīgo slodzi (`preCall`) un
augšupējās atbildes (`postCall`).

Sistēma ir **kļūmju gadījumā atvērta**: ja aizsargmehānisma izpildes laikā rodas izņēmums, reģistrs
reģistrē kļūdu un turpina ar nākamo aizsargmehānismu, nevis izraisa pieprasījuma
kļūmi. Bloķēšana ir apzināts lēmums (`block: true`), nevis nejaušība.

## Iebūvētie aizsargmehānismi

Importēšanas laikā reģistrs prioritāšu secībā automātiski ielādē sešus aizsargmehānismus
(skatiet `registry.ts` → `registerDefaultGuardrails()`):

| Prioritāte | Nosaukums           | Posms(-i)      | Fails                 |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Zemākas prioritātes skaitļi tiek izpildīti **pirmie**.

### Redzes tilts (`visionBridge.ts`) — modalitāšu tilts PR-1

Pārtver attēlus saturošus pieprasījumus, kas paredzēti **modeļiem bez redzes atbalsta**, un vai nu
novirza visu pieprasījumu uz modeli ar redzes atbalstu, vai pirms
augšupstraumes izsaukuma aizstāj attēlu daļas ar teksta aprakstiem, ko izveido konfigurējams redzes modelis.
Tas ļauj tikai tekstu apstrādājošiem pakalpojumu sniedzējiem pārredzami apstrādāt
multimodālas datu slodzes.

Darbības plūsma:

1. Izlaist, ja mērķa modelis jau atbalsta redzi (ja vien tas nav iekļauts
   piespiedu tilta sarakstā `isVisionBridgeForcedModel`).
2. Izgūt attēlu daļas, izmantojot `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), kas deleģē darbu **vienotajam multivides
   detektoram** `detectMediaParts()` failā `open-sse/utils/mediaParts.ts` — tas ir
   vienotais patiesības avots, kas tiek koplietots ar kombināciju saderības filtru.
   Izguve ar atļauto elementu sarakstu ir ierobežota līdz augstākā līmeņa daļām tādās formās,
   kuras `replaceImageParts` var ievietot atpakaļ (izguves↔aizstāšanas līgums): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` un Responses API `input_image`. Ligzdoti atradumi un
   formas, kas satur tikai indikatorus, ir paredzētas kombināciju filtram un nekad netiek izgūtas.
   Izlaist, ja nekas nav atrasts.
3. Izpildlaika konfigurāciju noteikt, izmantojot `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): jaunajām `modalityBridge*`
   iestatījumu atslēgām ir priekšroka; mantotās `visionBridge*` atslēgas paliek kā
   **viena cikla atkāpšanās iespēja** (atritināšanas logs). Izlaist pirms jebkādas multivides pārmeklēšanas,
   ja tilts ir atspējots.
4. Režīma atlasītājs (`modalityBridgeVisionMode`, skatiet tālāk esošo tabulu) nosaka
   novirzīšanu vai aprakstīšanu. Novirzīšana atgriež `modifiedPayload`, kurā nomainīts tikai `model`,
   kā arī metadatus `{ rerouted, fromModel, toModel, imagesKept }`.
5. Aprakstīšanas ceļš: ierobežot attēlu skaitu līdz `maxImages`, izveidot uzdevumam pielāgotu uzvedni,
   pārbaudīt aprakstu kešatmiņu, izsaukt redzes modeli **paralēli**
   (`Promise.allSettled`) un to vietā ievietot teksta daļas
   `[Attēls N]: <apraksts>`. Neizdevies aprakstīšanas mēģinājums atgriež `null`, un sākotnējā attēla daļa tiek
   **saglabāta** (#4012) — izņemot kombinēto aprakstīšanas ceļu, ja visi
   aprakstīšanas mēģinājumi ir bijuši nesekmīgi; šādā gadījumā apstiprināta augšupstraume bez redzes atbalsta saņem
   aizstājējtekstu `(nav pieejams — nav pievienots neviens pakalpojumu sniedzējs ar redzes atbalstu)` (#8430).
6. Atgriezt `modifiedPayload` un metadatus (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Režīma atlasītājs (`modalityBridgeVisionMode`)

| Režīms     | Noklusējums | Darbība                                                                                                                                                                                                                                                                                                                                                      |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔           | Mantotā heiristika bez izmaiņām (#6640/#7204): modeļi, kas nav kombinēti/`auto/` modeļi, tiek novirzīti uz labāko redzes modeli, ja vien sākotnējam modelim jau nav izmantojamu akreditācijas datu (tad tiek veikta aprakstīšana); kombinētie mērķi vienmēr izmanto aprakstīšanu.                                                                            |
| `describe` |             | Vienmēr aprakstīt — novirzīšanas bloks tiek pilnībā izlaists; vienmēr atbild lietotāja izvēlētais modelis.                                                                                                                                                                                                                                                   |
| `reroute`  |             | Piespiedu novirzīšana: akreditācijas datus saturošā modeļa paturēšanas pārbaude tiek apieta. Novirzīšanas **mērķa** akreditācijas datu pārbaude joprojām tiek piemērota — ja nav pieejams neviens izmantojams redzes mērķis, pieprasījums pāriet uz aprakstīšanu, lai neapstrādāti attēli nekad nenonāktu tikai tekstu apstrādājošā aizmugursistēmā (#8430). |

Piespiedu režīmi veic īsslēgumu **pirms** automātiskās heiristikas izpildes; `auto` darbība
baitu līmenī ir identiska aizsargmehānisma darbībai pirms PR-1.

#### API atslēgas tvērums (`visionBridgeKeyScope.ts`)

Ja izsaucēja API atslēga ierobežo `allowedConnections`, kvotu kopas
(`allowedQuotas`) vai modeļus (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), tilts
novirzīšanai un aprakstīšanai izvēlas tikai tādus modeļus, kurus atslēga drīkst izmantot,
savienojumos, kurus atslēga drīkst izmantot. Pēc tam aprakstīšanas izsaukums vienmēr tiek veikts caur
OmniRoute pašcilpu ar galveni `x-omniroute-self-loop-key-id`, lai saņemošais tērzēšanas pieprasījums
atkārtoti piemērotu šīs atslēgas savienojumu un modeļu politiku. `enforceApiKeyPolicy()`
ņem vērā šo galveni tikai kopā ar pašcilpas nesēja pilnvarojumu, tādēļ tā var tikai
sašaurināt piekļuvi, un identifikators, kuru nevar atrisināt, tiek noraidīts.

Ja atslēgai nav atļauts neviens redzes modelis, aprakstīšanas ceļš atkāpjas un
pieprasījums tiek nodots tālāk bez izmaiņām — tā ir tā pati kļūmes gadījumā atvērtā darbība kā atspējotam
aizsargmehānismam (metadati `{ skipped: true, reason: "no_permitted_vision_model" }`).
Pieprasījumi bez atslēgas un atslēgas bez šiem ierobežojumiem darbojas tieši tāpat
kā iepriekš.

#### Uzdevumam pielāgota aprakstīšanas uzvedne (`modalityBridgeVisionTaskAware`)

Noklusējuma vērtība ir **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) pamata
aprakstīšanas uzvednei pievieno **pēdējā lietotāja ziņojuma** tekstu (saīsinātu līdz
500 rakstzīmēm), ievirzot aprakstu atbilstoši tam, ko lietotājs patiesībā
jautāja (codex-vision-proxy modelis), un lūdzot redzes modelim transkribēt
redzamo tekstu. Ja karodziņš ir izslēgts vai lietotāja teksta nav, pamata
uzvedne tiek izmantota bez izmaiņām.

Aprakstīšanas pašcilpa savā OpenAI saderīgajā pieprasījumā (`callVisionModelSingle()`
failā `visionBridgeHelpers.ts`) vienmēr pieprasa `image_url.detail: "high"` —
bez nosacījumiem, katram izsaucējam/pakalpojuma sniedzējam, neatkarīgi no jebkāda
klienta signāla. Zemas detalizācijas paraugu ņemšana pasliktina OCR precizitāti
tieši tam teksta transkripcijas uzdevumam, kuru pieprasa šī uzvedne, tādēļ pats
aprakstīšanas izsaukums vienmēr pieprasa augstu detalizāciju neatkarīgi no tā,
kādu detalizācijas līmeni izmantoja sākotnējais ienākošais pieprasījums. Tas
ietekmē tikai iekšējā aprakstīšanas pieprasījuma pamattekstu; tas nemaina veidu,
kā OmniRoute primārajā pieprasījumā pārsūta izsaucēja paša `image_url.detail` —
šī noklusējuma vērtība tiek piemērota atsevišķi un tikai noteiktajiem OpenCode
klientiem funkcijā `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Aprakstīšanas pašcilpas Anthropic vadu formāta atzarā nav lauka `detail`, un
neviena no šīm noklusējuma vērtībām to neietekmē.

#### Apraksta izvades ierobežojums (`modalityBridgeVisionMaxChars`)

| Atslēga                        | Noklusējums | Diapazons         |
| ------------------------------ | ----------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` vai 100–50000 |

`0` (noklusējums) nozīmē **bez ierobežojuma** — `callVisionModel()` atgrieztais
apraksts tiek nodots tālāk bez izmaiņām, saglabājot esošo darbību. Jebkura
vērtība diapazonā 100–50000 saīsina aprakstu, pievienojot sufiksu `…`, pirms
tas tiek ievietots atpakaļ kā `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` failā `src/lib/guardrails/visionBridge.ts`).
Palieliniet šo vērtību detalizētiem OCR uzdevumiem, kuros pakārtotajam modelim
nepieciešama pilna transkripcija; samaziniet to, lai ierobežotu tokenu patēriņu
runīgiem redzes modeļiem. Informācijas paneļa lauks atrodas cilnes Vision panelī
Advanced (`modality-bridge-max-chars` failā `ModalityBridgeVisionTab.tsx`) un
jebkuru vērtību no 1 līdz 99 palielina līdz minimālajai vērtībai 100, savukārt
skaidri norādītu `0` atstāj neskartu — `0` pati par sevi ir derīga Zod vērtība
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nevis tikai
noklusējuma vērtība “nav iestatīts”.

#### Aprakstu kešatmiņa (`modalityBridge/bridgeCache.ts`)

Procesa mērogā koplietota atmiņā glabāta LRU + TTL kešatmiņa aprakstu izvadei.
Atslēga = `sha256(imageRef + composedPrompt + configuredBridgeModel)` ar
garuma prefiksa kadrēšanu (bez lauku robežu kolīzijām). Modeļa komponents ir
**konfigurētais** tilta modelis, nevis modelis, kas faktiski atbildēja —
`callVisionModel` var iekšēji izmantot rezerves variantu, un atslēgas veidošana
katram mēģinājumam sadrumstalotu kešatmiņu. Neveiksmīgi aprakstīšanas rezultāti
nekad netiek saglabāti kešatmiņā. Iestatījumi:

| Atslēga                         | Noklusējums | Diapazons |
| ------------------------------- | ----------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`      | —         |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000   |

#### Attālo attēlu normalizēšana (pašcilpas aprakstīšana/base64 ielāde)

Kad tilts pats ielādē **attālu** attēlu — Anthropic aprakstīšanas pašizsaukumam
un claude vadu formāta base64 pārveidošanai (`ensureBase64ImagesForClaudeWire`),
abos gadījumos izmantojot `fetchRemoteImageAsDataUri()` failā
`visionBridgeHelpers.ts` — iegūtais datu URI pirms iegulšanas redzes modeļa
pieprasījumā tiek nodots funkcijai `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`). Pārāk lieli attēli tiek samazināti līdz
**2048px garākajai malai** (atbilstoši izmēra ierobežojumam, ko OpenAI/Anthropic
jau piemēro servera pusē), tādējādi samazinot augšupielādes baitu skaitu/aizkavi,
nemainot to, ko redz redzes modelis. Izmēru maiņai tiek izmantots `sharp`, kas
tiek ielādēts ar dinamisku importēšanu: platformā, kurā tā vietējo bināro failu
neizdodas ielādēt, `normalizeDataUri()` **nekad neizmet izņēmumu** — tā atkāpjas
uz sākotnējo baitu nodošanu bez izmaiņām, tādēļ aprakstīšanas/base64 pārveidošanas
ceļš vienmēr turpina darboties. Arī dati, kas nav attēls (ielāde, kas neatgrieza
dekodējamu attēlu), tiek nodoti tālāk bez izmaiņām. Šī normalizēšana attiecas
tikai uz attēliem, kurus tilts ielādē savam pašizsaukumam — tā nekad netiek
piemērota izsaucēja neapstrādātajai tiešās nodošanas lietderīgajai slodzei,
ievērojot principu, ka izmaiņas veicamas tikai pēc izvēles (Stingrais noteikums
Nr. 20).

#### Iestatījumu shēma + migrācija

Jaunās `modalityBridge*` atslēgas tiek validētas ar Zod shēmā
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCache*` trijotne un Audio Bridge izmantotā
`modalityBridgeAudio*` grupa. Migrācija `141_modality_bridge_settings.sql`
kopē esošās mantotās `visionBridge*` vērtības uz atbilstošajām jaunajām
atslēgām (idempotenti, nekad nepārrakstot operatora iestatītu
`modalityBridge*` vērtību); mantotās atslēgas vienu laidiena ciklu joprojām
tiek pieņemtas kā lasīšanas rezerves variants.

#### Caurspīdīguma galvene + statistika

Ar aprakstu pārveidotajām atbildēm tiek pievienota
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(to izveido `buildModalityBridgeHeader()` failā `modalityBridge/bridgeStats.ts`,
bet pievieno `withModalityBridgeHeader()` failā `src/sse/handlers/chatHelpers.ts`).
Pārmaršrutētie pieprasījumi galveni **nesaņem** — lietderīgā slodze netika
mainīta, un modeļa nomaiņa jau ir redzama atbildes pamatteksta laukā `model`.

`GET /api/modality-bridge/stats` (pārvaldības autentifikācija, tas pats līmenis kā
`GET /api/settings`) atgriež atmiņā glabātos katras modalitātes skaitītājus
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` modalitātēm `vision`, `audio` un
`video`. `averageLatencyMs` kā dalītāju izmanto `latencySamples`, nevis visus
mēģinājumus; darbība bez laika mērījuma nerada mākslīgu nulles milisekunžu
paraugu. `bridged` joprojām ir atpakaļsaderīgs sekmīgo
pārveidojumu aizstājvārds; neveiksmīgi mēģinājumi to nepalielina.
Skaitītāji pēc procesa restartēšanas pēc noklusējuma tiek atiestatīti
(telemetrija, nevis uzskaite).

#### Informācijas paneļa konfigurācija

Atsevišķā informācijas paneļa lapa ir
`/dashboard/settings/modality-bridge`. Tās ar URL adresējamās cilnes `Vision`, `Audio`
un `Video`, pārslēdzot `tab` vērtību, saglabā vaicājuma parametrus.
Cilnē Vision ir pieejama iespējošana, režīms, modeļa atlase (tostarp automātiskā
noklusējuma izvēle), uzdevumam pielāgota uzvedņu veidošana, papildu noildzes/attēla/apraksta garuma/kešatmiņas
ierobežojumi, izpildlaika
skaitītāji un aizsargāts parauga pieprasījums. Arī cilne Audio darbojas: tajā ir pieejama
iespējošana, tikai STT paredzēts modeļa atlasītājs ar Auto, noildzes/maksimālā klipa ierobežojumi, audio
skaitītāji un `input_audio` parauga tests. Cilne Video ir funkcionāla: tā ziņo
par FFmpeg/ffprobe izpildlaika stāvokli — vienu no četriem skaidri definētiem lietotāja saskarnes stāvokļiem (`unknown`, kamēr
pārbaude notiek vai to neizdevās pabeigt, `restricted`, ja informācijas paneļa resursdators nav atgriezeniskās cilpas
resursdators un pārbaude tiek izlaista klienta pusē, `unavailable`, kad pārbaudē
ir apstiprināts, ka rīki nav pieejami, vai `available` kopā ar FFmpeg/ffprobe versijām), — saglabā
iespējošanas/modeļa/kadru/video/noildzes ierobežojumus, filtrē modeļu atlasītāju, atstājot modeļus ar
redzes apstrādes iespējām, un parāda video skaitītājus.

Iepriekšējā Vision Bridge kartīte AI iestatījumos ir saderības saite uz
jauno lapu; tajā vairs neatrodas otra veidlapas kopija. Media Providers arī
saista Image-to-Text un Speech-to-Text darbplūsmas ar attiecīgajām Modality
Bridge cilnēm, nenoņemot esošo Speech-to-Text izmēģinājumu vidi.

**Pašcilpas pielaides apiešana:** ja aprakstīšanas izsaukums tiek maršrutēts caur OmniRoute
paša `/v1` pašcilpu (nestandarta nodrošinātāja modeli), apakšpieprasījums nosūta
`x-omniroute-admission-bypass: internal` un tiek autentificēts ar atrisināto
pašcilpas akreditācijas informāciju — lokālo `sk_omniroute` vietturi lokālajā režīmā vai
operatora konfigurēto `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` vides atslēgu (#1350), lai
izvietojumi ar `REQUIRE_API_KEY=true` joprojām varētu izpildīt aprakstīšanas izsaukumu. Apiešana
tiek atļauta tikai ar tieši šiem akreditācijas datiem, tāpēc ārējie klienti nevar izmantot šo
galveni, lai izlaistu pielaides pārbaudi.

Mantotās noklusējuma vērtības atrodas `src/shared/constants/visionBridgeDefaults.ts`;
jaunā režīma/uzdevumam pielāgotās darbības/kešatmiņas noklusējuma vērtības un iestatījumu atrisinātājs atrodas
`src/shared/constants/modalityBridgeDefaults.ts`. Aizsargmehānisms piedāvā
`deps` konstruktora opciju, lai testos varētu ievadīt neīstas `getSettings` un
`callVisionModel` implementācijas.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Pārtver tērzēšanas pieprasījumus ar audio, pirms tie sasniedz mērķi, par kuru nav
zināms, ka tas pieņem audio ievadi. Tas nekad nemaina tērzēšanas pieprasījuma maršrutu: audio daļas tiek
transkribētas, izmantojot esošo ar OpenAI saderīgo vairākdaļu galapunktu, un
izvēlētais tērzēšanas modelis turpina darbu ar teksta transkriptiem.

Darbības plūsma:

1. Atrisina `supportsAudio`, izmantojot `getResolvedModelCapabilities()`. Priekšroka ir skaidri norādītiem
   nodrošinātāju reģistra metadatiem, pēc tam statiskajiem modeļa metadatiem un tad sinhronizētajam
   `modalities_input`. Deklarēts ievades saraksts bez `audio` nozīmē `false`; ja nav
   nekādu iespējas apliecinājumu, vērtība paliek `null`. Gan `false`, gan `null` aktivizē
   konservatīvo tiltu, savukārt `true` to apiet.
2. Atrisina `modalityBridgeAudio*` iestatījumus un no katra ziņojuma izgūst augstākā līmeņa
   audio daļas, kuras var aizstāt, izmantojot kopīgo `detectMediaParts()`
   detektoru. Atbalstītie datu formāti ir OpenAI `input_audio`, `audio_url` un
   `source.media_type: "audio/*"`. Ligzdots audio tiek noteikts maršrutēšanas vajadzībām, bet
   aizstāšanas ceļš to nenoņem. Apstrādes apjomu ierobežo `modalityBridgeAudioMaxClips`;
   vēlākās daļas paliek neskartas.
3. Izmanto konfigurēto `provider/model` vai ļauj `selectAudioBridgeModel()` secīgi pārskatīt
   `AUDIO_TRANSCRIPTION_PROVIDERS` stabilā kataloga secībā un atlasīt pirmo
   modeli ar izmantojamiem aktīva nodrošinātāja akreditācijas datiem.
4. `callAudioTranscription()` pārveido base64/datu URI audio par vairākdaļu
   `file` vai lejupielādē attālu `audio_url`, izmantojot tikai publiskiem resursiem paredzētu izejošo savienojumu
   aizsargmehānismu ar DNS piesaisti un 25 MB ierobežojumu. Pēc tam tas ar POST nosūta failu un atlasīto
   modeli uz lokālo `/v1/audio/transcriptions` pašcilpu, autentificējoties ar
   `resolveSelfLoopBearer()`. Esošais transkripcijas maršruts veic parasto
   akreditācijas datu meklēšanu, atdzišanas perioda/ātruma ierobežojumu apstrādi un nosūtīšanu nodrošinātājam.
5. Veiksmīgi izsaukumi aizstāj attiecīgās daļas ar `[Audio N]: <transcript>`. Izsaukumi
   tiek izpildīti ar `Promise.allSettled`: atsevišķa kļūme saglabā sākotnējo
   audio daļu (#4012 līgums). Ja visi izsaukumi neizdodas un ir pierādīts, ka mērķim
   `supportsAudio === false`, daļas kļūst par
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 līgums). Nezināmam
   mērķim (`null`) rezultāts, kurā visi izsaukumi ir neveiksmīgi, paliek neskarts. Pierādīti
   tikai tekstu atbalstošs mērķis bez izmantojamiem STT akreditācijas datiem saņem to pašu skaidro
   vietturi, neveicot tīkla izsaukumu.

Veiksmīgie transkripti izmanto visa procesa Modality Bridge LRU/TTL kešatmiņu.
Atslēga apvieno audio atsauci, stabilo `audio-transcription` darbības
etiķeti un atlasīto STT modeli; kļūmes nekad netiek saglabātas kešatmiņā. Audio mēģinājumi atjaunina
kopīgos `bridged`, `cacheHits`, `failures` un `lastUsedAt` skaitītājus.
Pārveidotajās atbildēs ir
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; neskarti
pieprasījumi nesaņem Audio Bridge segmentu.

Izpildlaika iestatījumi tiek glabāti datubāzē un validēti ar Zod:

| Atslēga                       | Noklusējums | Diapazons              |
| ----------------------------- | ----------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —                      |
| `modalityBridgeAudioModel`    | `""`        | Automātiski vai STT ID |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10                   |

Koplietojamo kešatmiņu joprojām kontrolē `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` un `modalityBridgeCacheMaxEntries`.

### Video tilts (`videoBridge.ts`, `videoBridgePipeline.ts`)

Pārtver augstākā līmeņa video daļas Chat Completions `messages` un Responses
API `input`, pirms tiek izsaukts mērķis bez zināma vietējā video atbalsta.
Atbalstītie formāti ir `input_video`, `video_url`, `video_source`, HTTPS URL
un `data:video/*;base64,...` datu URI. Vienkārši failu nosaukumi tekstā netiek
uzskatīti par video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) pārvalda pieprasījuma pārskatīšanu,
iespēju/politikas pārbaudi, katra pieprasījuma agregāciju un atbildes lietderīgo slodzi.
Katra video apstrāde — iegūšana, visa rezultāta kešatmiņa, kadru secības aprakstīšana
(kurā tiek apvienots jebkurš izsaucēja deklarētais audio transkripts), kā arī katra
mēģinājuma metrika/pārtraukšana/tīrīšana — ir paslēpta aiz `processVideoPart`
modulī `videoBridgePipeline.ts`, un tā tiek izsaukta vienreiz katrai video daļai
`preCall` ciklā. Šis modulis definē arī skaidras portu robežas:
`VideoMediaBrokerPort` (baitu iegūšana un atlasīto kadru izvilkšana),
`VideoAudioTranscriptionPort` (izsaucēja deklarēta audio transkripta apvienošana
ar atlasīto kadru parakstiem) un `VideoDrilldownPort` (kadru detalizētās izpētes
pastāvīgās glabāšanas robeža; vēl nav pieslēgta `processVideoPart` — pašlaik
detalizētās izpētes ierakstus raksta tikai atsevišķais
`/api/modality-bridge/video/drilldown` maršruts).

Publiskais `/v1` pieprasījuma ceļš nekad neimportē un neizsauc apakšprocesu.
Attālie video tiek lejupielādēti ar 50 MiB ierobežojumu; iekļautajiem base64 video
ir konservatīvs 36 MiB atkodētā izmēra ierobežojums katram video, lai
modeļa/ziņojumu/ierāmēšanas aploksne varētu palikt publiskā JSON pieprasījuma
pieņemšanas 50 MiB ierobežojumā. Iekļautā satura garums un atkodētā izmēra aplēses
tiek pārbaudītas pirms atmiņas piešķiršanas. Sākotnējam attālajam URL un katrai
pāradresācijai ir obligāts HTTPS, izmantojot esošo tikai publiskai piekļuvei
paredzēto izejošo savienojumu aizsardzību ar DNS piesaisti. Pēc tam baiti šķērso
precīzi noteikto iekšējo `POST /api/modality-bridge/video/extract` brokera robežu.
Šis maršruts ir gan `LOCAL_ONLY`, gan `SPAWN_CAPABLE`, pieņem tikai konkrētajam
procesam autentificētu, uzticamu lokālās atgriezeniskās cilpas pieprasījumu un
nekad nepieņem URL, failu sistēmas ceļu, izpildāmo failu vai argumentu sarakstu.
API ķermeņa izmēra apstrādes konveijers un apstrādātāja inkrementālais ķermeņa
lasītājs neatkarīgi viens no otra piemēro brokera ievades 50 MiB ierobežojumu.
Tā ierobežotā rinda vienlaikus veic vienu izvilkšanu, pieļauj četrus gaidošus
uzdevumus un ierobežo gaidošās ievades apjomu līdz 100 MiB.

Brokerī `ffprobe` nolasa privātu lokālo failu; fiksētais formātu atļauto vienumu
saraksts neietver atskaņošanas sarakstu un manifestu formātus. Atļautajiem MOV
saimes konteineriem ārējās MOV datu atsauces pēc noklusējuma paliek atspējotas,
un fiksētā komanda tās neiespējo. Gan `ffprobe`, gan `ffmpeg` izmanto tikai
`file` protokola atļauto vienumu sarakstu, vienu pavedienu, fiksētus argumentu
masīvus, bez čaulas, un izpildāmie faili tiek atrasti, izmantojot `PATH`.
Pievienoto attēlu vāku straumes nav atskaņojami kandidāti. Visām atskaņojamajām
straumēm jāatbilst ierobežojumiem, un pirms deterministiskās straumes ar zemāko
indeksu izvēles priekšroka tiek dota skaidri norādītai noklusējuma straumei.
Video ilgums ir ierobežots līdz 600 sekundēm, katra dimensija — līdz 8,192
pikseļiem, bet avota pikseļu skaits — līdz 33,554,432. FFmpeg atlasa 1–16 JPEG
kadrus intervālu viduspunktos, samazina garāko malu līdz ne vairāk kā 1,024
pikseļiem, nepalielinot mazākas ievades, un nekad nesaņem URL. Pēc noklusējuma
atlase ir `uniform`. Neobligātās `scene_aware` un eksperimentālās `segment_aware`
politikas veic vienu papildu fiksētu FFmpeg gājienu pār jau validēto lokālo
straumi, atlasa ierobežotas `showinfo` ainu laika atzīmes un detektora kļūmes,
taimauta, nepareizi veidotas izvades vai tukšas kandidātu kopas gadījumā
deterministiski atkāpjas uz tiem pašiem vienmērīgi izvietotajiem viduspunktiem.
Segmentus ņemošais režīms piešķir viduspunktu paraugus proporcionāli validētajiem
ainu intervāliem; segmentus ņemošā režīma pierādījumi un atkāpšanās darbība ir
detalizēti aprakstīti tālāk. Stingrais 16 kadru ierobežojums katrā politikā tiek
piemērots pēc atlases. Ja ainu ņemošam pieprasījumam ir tikai viena kadra
budžets, tas izmanto aktīvā pilnā video vai fokusa loga vienmērīgo viduspunktu
un ziņo `policyEffective: uniform`: viens atlasīts ainas kadrs nevar saglabāt
abus laika diapazona galus. Izsaucējs pēc izvēles var norādīt galīgu fokusa logu
(`start`/`end` sekundēs); robežas tiek pielāgotas multivides ilgumam, apvērsti
vai negalīgi logi tiek noraidīti, un visas atlases politikas tiek izpildītas
tikai normalizētajā intervālā. Iegūtais logs tiek iekļauts atlases metadatos un
neuzticamajā apraksta prefiksā, lai pakārtotie modeļi varētu atšķirt fokusētu
fragmentu no pilnās laika skalas.

Semantiskais fokuss kadru parakstiem ir atsevišķs, skaidri norādāms iestatījums.
Noklusējuma `full` analīzes režīms saglabā esošo kadra uzvedni un nekad nepārsūta
pieprasījuma tekstu parakstu modelim. Režīmā `focused` tilts nolasa tikai jaunāko
netukšo lietotāja izveidoto `text`/`input_text` no tā paša Chat vai Responses
konteinera, normalizē to uz NFC, apvieno vadības rakstzīmes un atstarpes un
ierobežo līdz 500 Unicode koda punktiem. Tukša rezultāta gadījumā tiek izmantota
precīza `full` uzvedne. Izmantojams mājiens tiek serializēts kā JSON īpašā
neuzticama lietotāja konteksta blokā un drīkst tikai noteikt prioritāti
novērojamām detaļām; tas nevar ignorēt atsevišķo brīdinājumu nesekot
instrukcijām, kas ir redzamas vai dzirdamas multividē. Tekstuālais fokuss nekad
neizsecina `start`/`end` un nemaina laika atlases mehānismu.

#### FU-07 strukturālie segmentu pierādījumi

`segment_aware` izmanto vienu ierobežotu sākotnējās analīzes gājienu pār jau validēto
lokālo video straumi. Fiksētā filtru ķēde vispirms mērogo video līdz ne vairāk kā
320 pikseļu platumam, nosaka ainu maiņas un sastingušos intervālus un pēc tam
ņem 1 kadra sekundē paraugus, lai noteiktu izplūdumu, vidējo spilgtumu un
telpisko/laika informāciju. Gājiens ir ierobežots līdz 600 strukturālajiem
paraugiem, vienam FFmpeg/filtra pavedienam, tiem pašiem tikai `file` protokola un
konteineru atļauto vērtību sarakstiem, 1 MiB procesa izvades ierobežojumam un ne
vairāk kā 30 sekundēm brokera kopīgā pārtraukšanas/termiņa ietvaros. Tas nekad
nepieņem komandu, filtru, ceļu vai URL no pieprasījuma.

Strukturālās vērtības ir deterministiski paraugu atlases pierādījumi, nevis
video semantiska izpratne. Tās neizsecina objektus, darbības, parakstus, runu vai
lietotāja nolūku. Ainu un sastingumu robežas veido segmentus; sastinguma
pārklājums, izplūdums, ekspozīcija, telpiskā detalizācija un izmaiņas laikā
ietekmē tikai to, kā tiek sadalīts esošais 1–16 kadru budžets. Pilnībā sastingušam
segmentam tiek piešķirts ne vairāk kā viens kadrs, savukārt segmenti bez
sastinguma sacenšas par atlikušo budžetu. Ja robežu ir vairāk nekā kadru, tiek
saglabāts vienmērīgs laika skalas pārklājums, lai straujas sākuma montāžas
maiņas nevarētu paslēpt garu beigu segmentu. Ainu robežas, kas atrodas
1 sekundes analīzes izšķirtspējas robežās no sastinguma robežas, tiek apvienotas.

Trūkstoši filtri, nepareizi veidoti/tukši pierādījumi, detektora kļūda vai
ierobežotās sākotnējās analīzes taimauts aktivizē precīzu atkāpšanos uz vienmērīgu
viduspunktu politiku. Izsaucēja pārtraukums vai brokera termiņš šādu atkāpšanos
neaktivizē: tas pārtrauc izpildē esošo apakšprocesu, nepieļauj turpmāku kadru
izguvi, un privātais pagaidu koks tiek noņemts blokā `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` ģenerē deterministiskas, reālas FFmpeg
testa datnes, lai novērtētu parakstu izsaukumu ietaupījumu pēc dublikātu
likvidēšanas, blīvas kustības budžeta sadalījumu, izplūduma/ekspozīcijas/SI-TI
pierādījumus, straujas montāžas maiņas ar garu beigu daļu un pakāpeniskas
izdzišanas kļūdaini pozitīvus rezultātus. Tas reģistrē sākotnējās analīzes
faktisko pagājušo laiku un, ja ir pieejams `/usr/bin/time`, arī bērnprocesa CPU
patēriņu un maksimālo RSS. Tā kvalitātes pārbaudes ir tikai strukturāli orākuli.
Reāla parakstu modeļa kvalitātes statuss joprojām ir `HOLD`, jo šim testēšanas
rīkam nav autorizēta galapunkta vai fiksēta vērtētāja. Arī finansiālā ietaupījuma
statuss paliek `HOLD`, ja vien `--caption-cost-per-call-usd` nenodrošina skaidri
norādītu pozitīvu vienas izsaukuma reizes izmaksu novērtējumu; skripts nekad
neizdomā nevienu no šiem rezultātiem.

Katrs kadrs ir ierobežots līdz 4 MiB, visi neapstrādātie kadri kopā — līdz
23 MiB, bet serializētā brokera atbilde — līdz 32 MiB. Privāts pagaidu direktorijs
tiek noņemts blokā `finally`. OmniRoute neiekļauj FFmpeg komplektācijā un
nepieņem pielāgotu izpildāmā faila ceļu. Pirms parakstu izveides tilts veic
konservatīvu vizuālo dublikātu likvidēšanas gājienu: katrs JPEG tiek samazināts
līdz 16×16 pelēktoņu buferim un salīdzināts tikai ar pēdējo saglabāto kadru. Ja
pieprasītais parakstu budžets pārsniedz vienu kadru, izguve nodrošina ierobežotu
kandidātu kopu, kuras lielums nepārsniedz divkāršu budžetu un nekad nav lielāks
par 16 kadriem. Pieprasītais ierobežojums tiek piemērots tikai pēc dublikātu
likvidēšanas; ja budžets ir vismaz divi kadri, galīgajā retināšanā tiek saglabāts
pirmais un pēdējais atlasītais kandidāts. Versijotā
`grayscale-16x16-mean-cells-v2` politika izmanto lielāko no vidējās spilgtuma
starpības un to sīktēla šūnu īpatsvara, kuru normalizētā starpība ir vismaz 0.05.
Dublikātu slieksnis ir konstante 0.04, kas izvēlēta paredzamības dēļ, nevis
padarīta pieejama kā izpildlaika iestatījums. Šis sekundārais augsta kontrasta
signāls saglabā nelielu kustību un redzamā teksta izmaiņas, ko salīdzinājums,
kurā izmanto tikai vidējo vērtību, var nepamanīt. Salīdzinātāja vai dekodētāja
kļūdu gadījumā tiek saglabāts pārklājums. Izvades metadatos atsevišķi norādīti
izgūtie kandidāti, sekmīgi izmantotie kadri un atmestie vizuālie dublikāti.

Video daļa, kas skaidri atzīmēta kā tāda, var pieprasīt kontaktlapu ar
laikspiedoliem. Tilts izveido JPEG režģi ar ne vairāk kā 4 kolonnām un 16 kadriem.
Katrā 512 pikseļu šūnā avota laikspiedols tiek neatgriezeniski iestrādāts augsta
kontrasta joslā apakšdaļā, bet tie paši laikspiedoli paliek arī teksta metadatos,
lai turpmākajos posmos nodrošinātu sasaisti un auditu. Pilna JPEG izmērs joprojām
ir ierobežots līdz 32 MiB. Ja `sharp` nevar dekodēt vai izveidot režģi, tilts
atkāpjas uz atsevišķajiem JPEG kadriem; klienta pārtraukums joprojām tiek
pārsūtīts kontaktlapas operācijai.

Pierādījumi virzīšanai uz produkciju ir apzināti nodalīti no sintētiskā
kompozīcijas mikroetalonmērījuma. `scripts/perf/video-bridge-contact-sheet-eval.ts`
definē pēc shēmas versijotu A/B testēšanas rīku reāliem, ar OpenAI saderīgiem
redzes modeļiem. Tas mēra pakalpojuma sniedzēja ziņotos marķierus, pilno faktisko
latentumu (ieskaitot kontaktlapas izveidi), modeļa izsaukumu skaitu un manifestā
definēto faktu saglabāšanu. Neapstrādātas modeļa atbildes netiek ierakstītas
pārskatā; tiek saglabāti tikai SHA-256 jaucējkodi un atbilstošo faktu ID.
Testēšanas rīks neveic tīkla vai maksas modeļa izsaukumus, ja vien nav nodots
`--execute-real` un konfigurēti `--model`, `OMNIROUTE_BASE_URL` un
`OMNIROUTE_API_KEY`. Bez šādas skaidri pieprasītas reālas izpildes tā
mašīnlasāmā sprieduma statuss paliek `HOLD`; sintētiski lietderīgās slodzes vai
izsaukumu skaita mērījumi vien nav pierādījums virzīšanai uz produkciju.

Izsaucēji atbalstītai video daļai var pievienot neobligātu `transcript.cues`
masīvu, ja tiem jau ir sinhronizēts teksts. Katrā norādē jābūt laukam `text`,
galīgai `start`/`end` intervāla vērtībai pārbaudītā ilguma ietvaros un atļauto
vērtību sarakstā iekļautam laukam `source` (`client`, `embedded` vai
`audio-bridge`); `confidence` noklusējuma vērtība ir `1`, un tai jāpaliek
diapazonā no `0` līdz `1`. Pilnīgi identiskas norādes tiek apvienotas.
OmniRoute nekad nesāk transkribēšanu no šiem metadatiem: validētās norādes ar
avotu, ticamību un intervālu tiek kopētas aprakstītajā rezultātā un attēlotas kā
neuzticami novērojumi kopā ar kadru parakstiem. Nederīgs teksts, teksts ārpus
diapazona vai bez izcelsmes informācijas tiek noraidīts, nevis iejaukts parakstu
straumē. Abi pieprasījuma pamatteksta transkripcijas kanāli normalizē norādīto
izcelsmi uz `client`, tostarp pašdeklarētās `embedded` vai `audio-bridge`
etiķetes. Tikai serverim piederošs adapteris var piešķirt šīs uzticamās etiķetes,
izmantojot tikai kodā pieejamo argumentu `trustedSource`; pieprasījuma JSON lauks
nevar sasniegt šo argumentu. Transkripcijas teksts neatkarīgi no tā izcelsmes
joprojām ir neuzticams no multivides atvasināts saturs un nekad nedrīkst noteikt
autorizāciju.

Pieredzējis izsaucējs tam pašam video var nodrošināt `audioTranscript` celiņu;
tas tiek uzskatīts par klienta nodrošinātu tekstu, nevis servera veiktas transkripcijas apliecinājumu.
Apvienošanas robežslānis apstrādā vizuālos un audio novērojumus ar
vienu termiņu un pārtraukšanas signālu, sakārto tos kopējā laika skalā, apvieno
pilnīgi vienādus dublikātus un ziņo daļēju rezultātu, ja sekmīga ir tikai viena puse.
Nederīgs `audioTranscript` noved pie šāda daļēja rezultāta — vizuālais
apraksts tiek saglabāts, bet audio zars reģistrē sanitizētu kļūmes kodu —,
nevis izraisa visa video apstrādes kļūmi. Katra zara pieejamība, daļēja rezultāta karodziņš
un sanitizētie kļūmju kodi tiek saglabāti aprakstītajā rezultātā,
aizsargmehānisma metadatos (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), rezultātu kešatmiņas metadatos un tilta
apvienošanas skaitītājos. Noklusējuma Video Bridge ceļš neizsauc runas pārvēršanu tekstā
un nelejupielādē otru multivides kopiju; bez šī nepārprotami norādītā celiņa tas joprojām
apstrādā tikai video.

**Transkripta saglabāšana (#12150 P1).** Tas tiek piemērots automātiski ikreiz, kad
Video Bridge (kas pats ir pēc izvēles iespējojams) atveido transkripta norādi — atsevišķa
saglabāšanas karodziņa nav. Kad pieprasījums atveido jebkādu transkripta norādi (izsaucēja deklarētu
`transcript` vai apvienotu `audioTranscript`), aizsargmehānisms to atzīmē kā
`videoBridgeObserved` un izveido rediģētu video apraksta ēnkopiju —
identisku atveidojumu, kurā katras norādes brīvā teksta pamatdaļa ir aizstāta ar
`[redacted-video-transcript]`; tā tiek izveidota, aizstājot strukturēto norādes lauku
pirms virknes salikšanas (nekad neparsējot saplacināto tekstu, tādēļ nekāds norādes
saturs — nedz ļaunprātīgs, nedz parasts, tostarp pamatdaļas, kurās ir `]`, piemēram,
`[inaudible]`/`[music]` — nevar saglabāties). Saglabātā izsaukumu žurnāla pieprasījuma pamatdaļā
katra no video atvasinātā teksta daļa tiek aizstāta ar šo rediģēto ēnkopiju, salīdzinot
satura vienādību; `fullText` enkurs tiek vēlreiz nolasīts no pabeigtās pirmsizsaukuma aizsargmehānisma
lietderīgās slodzes, tāpēc atbilstības pārbaude joprojām izdodas pēc tam, kad ķēdes vēlākie aizsargmehānismi
(PII un akreditācijas datu maskētāji ar prioritātēm 10/95) pārraksta apraksta tekstu uz vietas, kā arī
pēc tam, kad sistēmas uzvednes/nodošanas/atmiņas ievietošana pārveido ziņojumu masīvu. Modelim
nosūtītā pamatdaļa paliek nemainīta. Novērots pieprasījums arī neaizpilda
pastāvīgo Memory (tiek izlaista gan no pieprasījuma, gan no atbildes atvasināta izvilkšana),
tāpēc paša modeļa atbilde nevar atkārtoti ierakstīt transkripta tekstu Memory.

**Neapstrādāti video lauki (#12430).** Kad tilts ir iespējots un vietējais video atbalsts nav zināms vai nepastāv, definēti `transcript`/`audioTranscript` lauki arī aktivizē `videoBridgeObserved`, pat pēc aprakstīšanas kļūmes vai `maxVideos` ierobežojuma sasniegšanas. `null` un tukšas virknes tiek ieskaitītas; neesoši lauki un metadati, kas nav saistīti ar video, netiek ieskaitīti. Saglabātajās kopijās šie lauki tiek rediģēti vai pieprasījums tiek izlaists, un kešatmiņas/Memory tiek apietas.

Šajos atkāpšanās ceļos derīgas izsaucēja norādes kļūst par atbalstītām `text`/`input_text`
daļām, nevis nestandarta nodrošinātāja laukiem. Abi pieprasījumā norādītie celiņi
joprojām ir neuzticami `client` novērojumi ar skaidru brīdinājumu, ka video
netika aprakstīts un laikspiedoli netika pārbaudīti pret multividi. Esošie
256 norāžu/64 KiB kopējie un katras norādes budžeti tiek piemēroti abiem celiņiem kopā;
laikspiedoliem jāiekļaujas brokera 600 sekunžu ierobežojumā un jebkurā norādītajā fokusa
logā. Nederīgi celiņi tiek atmesti, nevis pārsūtīti kā patvaļīgs teksts; derīgu
blakusceliņu joprojām var izmantot, ja vien netiek pārsniegts to kopējais budžets. Nulles/tukši
lauki tekstu nepievieno. Šis atkāpšanās mehānisms nepievieno multivides ielādi vai transkripciju.
Transkripta paplašinājuma lauki tiek noņemti no atkāpšanās video nesēja un tā
`video_url`/`source` objektiem. OpenAI vadu protokola atļauto lauku saraksts paliek stingrs; nezināma vietējā
atbalsta video nesēji joprojām ir pieejami, un zināmiem tikai teksta mērķiem tiek saglabāti drošie marķieri.
Strukturētas rediģēšanas ēnkopijas aizsargā pievienoto transkripta tekstu, savukārt
sākotnējais izsaucējam piederošais pieprasījums paliek nemainīts. Mērķi ar vietējo atbalstu un
atspējoti tilti saglabā esošo apiešanas darbību.

Papildu saglabātās kopijas izmanto to pašu novērotā pieprasījuma signālu. Neapstrādātais
pirms-aizsargmehānisma klienta pieprasījuma momentuzņēmums, atmiņā esošais gaidošais pieprasījums un agrīnais
noraidītā pieprasījuma žurnāls strukturāli aizstāj transkripta laukus video daļās;
konveijera posmu un konteksta nodošanas sintezētās virkņu uzvednes tiek rediģētas
saglabātās pieprasījuma pamatdaļas saņēmējā. Saglabātais `video_content_removed` marķieris
liek `previous_response_id` turpinājumam droši atteikties, nevis rekonstruēt
tekstu, kas tika apzināti atmests. Ja novērots pieprasījums pirms reģistrēšanas zaudē savu
katras daļas rediģēšanas ēnkopiju vai ja kaut viena no vairākām video ēnkopijām
vairs neatbilst pēc vēlākām pieprasījuma izmaiņām, saglabātā pieprasījuma pamatdaļa tiek
pilnībā izlaista, nevis tiek saglabāts daļēji rediģēts transkripts.

Novērotam pieprasījumam modeļa atbilde var citēt jebkuru
transkripta daļu bez strukturētas norādes robežas. Tādēļ tās saglabātā izsaukumu žurnāla
`responseBody` tiek aizstāta ar izlaiduma marķieri; detalizētais
konveijera artefakts (kas var ietvert augšupstraumes/klienta pamatdaļas un straumes fragmentus)
netiek saglabāts. Semantiskās, idempotences un spriešanas atkārtotas atskaņošanas kešatmiņas šim pieprasījumam
apiet gan lasīšanu, gan rakstīšanu. Nodrošinātāja pieprasījums un klientam redzamā
atbilde paliek nemainīta. Agrīnie savienojuma uzturēšanas baiti tiek iztukšoti no pagaidu
bufera, kad detalizētais artefakts tiek izlaists. Kiro kļūdaini veidotās EventStream
brīdinājums ziņo tikai lietderīgās slodzes baitu skaitu, nekad tās saturu vai JSON
parsētāja neapstrādāto kļūdu.
Tas neapgalvo, ka būtu auditēta ikviena nesaistīta nodrošinātāja/spraudņa diagnostika;
plašāka saglabāto saņēmēju pārbaude tiek izsekota #11658.

Iekšējais `/api/modality-bridge/video/drilldown` dzīves cikls ir atsevišķs,
ar atgriezenisko cilpu/token autentificēts kešatmiņas substrāts. Katrai operācijai ir nepieciešams arī
kanonisks, necaurspīdīgs principāla ID. Pirms tiek iespējots ražošanas izsaucējs, tam šis
ID ir jāatvasina no autentificētā nomnieka, un tas nekad nedrīkst pārsūtīt
klienta izvēlētu vērtību. Kešatmiņas atslēgas sasaista šo principālu ar kanoniskiem sesijas un
video atsauces ID, glabā tikai to ar SHA-256 atvasinātās atslēgas un ierobežo gan lasīšanu,
gan dzēšanu ar to pašu principālu. Kešatmiņa katrā ierakstā glabā ne vairāk kā 16 atvasinātus JPEG
kadrus, pēc desmit minūtēm tiem beidzas derīguma termiņš, un tā atbalsta ierobežotu
`start`/`end` lasīšanu vai skaidri norādītu sesijas dzēšanu.

Katram principālam ir noteikts 16 ierakstu un 64 MiB kanonisko JPEG datu ierobežojums. Šie
ierobežojumi nav atkarīgi no globālajiem 64 ierakstu/256 MiB griestiem: principāla kvotas
spiediens izstumj tikai šī principāla visilgāk neizmantotos ierakstus, pirms tiek apsvērta globālā
LRU izstumšana. Kešatmiņas darbības laikā ieraksti ar beigušos derīguma termiņu tiek izņemti gan no principāla,
gan globālās uzskaites, savukārt atcelšana un validācijas kļūme nesaglabā
daļēju aizvietojumu.

Kešatmiņa noraida nekanonisku Base64, pārmērīgu papildinājumu, saturu, kas nav JPEG, bojātus vai
saīsinātus JPEG, kā arī JPEG, kuri ierobežotas pilna attēla `sharp`
dekodēšanas laikā izraisa brīdinājumu. Katrs pieņemtais attēls tiek atkārtoti kodēts kā kanonisks JPEG, platums un augstums
tiek atvasināti no dekodētajiem baitiem, nevis uzticoties izsaucēja laukiem, un visi beigās pievienotie
poliglota baiti tiek atmesti, nevis saglabāti. Abās kvotās tiek ieskaitīts tikai ierobežotais kanoniskais saspiestais buferis.
JSON pārsūtīšanas ierobežojums ietver Base64 papildizmaksas 32 MiB
dekodētās ievades griestiem. Katram
saglabātajam atvasinājumam tiek reģistrēts tā validētais JPEG formāts/izšķirtspēja, paraugošanas politika,
atvasināšanas versija, izveides laiks, servera aprēķinātā satura kontrolsumma un jauktā vecāka
atsauce kopā ar uzticamā izsaucēja vecāka satura kontrolsummu. Atcelšana tiek pārbaudīta
starp asinhronajām dekodēšanas/kontrolsummas aprēķināšanas fāzēm pirms atomārās saglabāšanas kešatmiņā.

Šī darba daļa vēl nesavieno ražošanas producentu ar maršrutu un
nenodrošina vairāku izšķirtspēju variantu atlasi. Tādēļ caurspīdīgais Video Bridge pieprasījumu
ceļš nerada papildu darbu, savukārt ar nomnieku saistīta principāla atvasināšana un
pilns FU-08 vairāku izšķirtspēju dzīves cikls joprojām ir skaidri noteikti turpmākie darbi,
nevis kā pabeigta darbība dokumentēta funkcionalitāte.

Kadriem secīgi tiek izveidoti paraksti, izmantojot konfigurēto Video modeli. Tukšs
Video pārrakstījums manto Vision iestatījumu; ja abi ir tukši, Vision
automātiskais maršrutētājs atlasa faktiski izmantojamo modeli ar attēlu apstrādes iespējām. Veiksmīgi izveidoti paraksti
aizstāj sākotnējo daļu ar stabilu `[Video description:` prefiksu, kas arī
atzīmē tekstu kā neuzticamu, no multivides atvasinātu novērojumu un norāda pakārtotajiem
modeļiem neizpildīt multividē atrastās instrukcijas. Kadru parakstu kešatmiņas atslēgas
ietver JPEG baitus, uzvedni, laikspiedolu un faktiski izmantoto modeli; kešatmiņā tiek saglabāti tikai veiksmīgi
paraksti. Kešatmiņas ieraksti saglabā faktisko veiksmīgo producenta modeli,
tostarp rezerves modeli; tilts ziņo `mixed`, ja dažādus kadrus
ir apstrādājuši dažādi modeļi. Kešatmiņas trāpījums atkārtoti izmanto šī producenta identitāti,
nevis pārdēvē to atbilstoši pieprasītajam maršrutēšanas plānam. Visa video rezultāta
kešatmiņas atslēga tiek veidota no katras ievades, kas maina izvadi — uzvednes, faktiskā
modeļa, paraugošanas politikas, kadru skaita, semantiskās analīzes režīma, normalizētā fokusa mājiena SHA-256
nospieduma, fokusa loga, `transcript`,
`audioTranscript` un kontaktlapas karoga —, tādēļ jebkuras šīs
dimensijas maiņa rada kešatmiņas netrāpījumu, nevis novecojuša rezultāta atkārtotu izmantošanu. Vizuālās deduplikācijas politikas
versija, slieksnis un ierobežotais kandidātkadru skaits arī ir skaidri norādīti
rezultātu kešatmiņas atslēgā un metadatos; tādēļ politikas maiņa nevar atkārtoti izmantot novecojušu
visa video aprakstu. Rezultātu kešatmiņas v4 metadatos tiek saglabāts režīms un
nospiedums, bet nekad ne neapstrādāts lietotāja uzdevums. Aizsargmehānisma metadati norāda gan
pieprasīto, gan faktisko analīzes režīmu; pieprasīts `focused` režīms bez
izmantojama lietotāja teksta tiek norādīts kā faktiski `full`.

Aizsargmehānisms izgūst katru atbalstīto video daļu, taču apraksta ne vairāk kā
`modalityBridgeVideoMaxVideos`. Mērķim, par kuru pierādīts, ka tam ir
`supportsVideo === false`, neveiksmīgi un ierobežojumu pārsniedzoši video tiek pārvērsti par skaidriem droša
teksta marķieriem, lai neviens neapstrādāts video netiktu saglabāts. Ja spēja nav zināma, šīs daļas
saglabā savu video nesēju; jebkurš rezerves transkripts izmanto iepriekš aprakstīto ierobežoto teksta
pārveidošanu. Mērķi ar `supportsVideo === true` apiet tiltu.
Klienta pieprasījuma pārtraukšanas signāls tiek nodots lejupielādei, starpnieka rindai,
apakšprocesiem un parakstu izveides izsaukumiem; pārtraukšana aptur apstrādi starp video un nekad kļūmes gadījumā
nepieļauj neapstrādātas multivides nodošanu.

Izpildlaika iestatījumi tiek glabāti DB un validēti ar Zod:

| Atslēga                             | Noklusējums | Diapazons / darbība                                                                                       |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Izvēles izpildlaiks, kam nepieciešama apzināta iespējošana                                                |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` saglabā vispārīgus parakstus; `focused` izmanto ierobežotu, neuzticamu jaunāko lietotāja kontekstu |
| `modalityBridgeVideoModel`          | `""`        | Manto Vision Bridge modeli                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                      |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` vai proporcionāls `segment_aware`; detektora kļūmes gadījumā izmanto `uniform`   |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                       |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                            |

Iepriekš saglabātās Video taimauta vērtības virs 120 sekundēm tiek ierobežotas līdz
brokera termiņam; jaunu iestatījumu ierakstīšana virs šī ierobežojuma tiek noraidīta.
`GET /api/modality-bridge/video/runtime` pirms autentifikācijas vai izpildlaika
pārbaudes pieprasa uzticamu, marķētu lokālo atgriezeniskās cilpas izcelsmi un pēc tam
pieprasa pārvaldības autentifikāciju. Tas atgriež tikai `available`, attīrītas
FFmpeg/ffprobe versijas un fiksētu iemeslu, ja izpildlaiks nav pieejams. Iekšējais
izvilkšanas galapunkts nav publiska augšupielādes API: rindas pārslodzes gadījumā
tiek atgriezts `503` kopā ar `Retry-After`, zvanītāja atvienošanās gadījumā tiek
atgriezts `499`, bet, sasniedzot fiksēto brokera termiņu, tiek atgriezts `504`.
Konvertētās atbildes centrālajai `x-omniroute-modality-bridge` galvenei pievieno
`video->text;model=<visionModel>;parts=<videos>`, nenoņemot Vision vai Audio segmentus.

### PII maskētājs (`piiMasker.ts`)

Darbojas **abos** posmos.

- **`preCall`** klonē derīgo slodzi, apstaigā `system`, `messages`, `input` un
  `prompt` (tostarp vienkāršas virkņu vērtības) un virknes tipa `content`/`text`
  laukiem piemēro `processPII()` (no `@/shared/utils/inputSanitizer`). Ja
  `PII_REDACTION_ENABLED=true`, konstatētie PII tiek aizklāti izejošajā derīgajā
  slodzē. Tas nav atkarīgs no `INPUT_SANITIZER_MODE` (kas kontrolē tikai
  uzvednes injekcijas politiku). Ja aizklāšana ir izslēgta, izsaukums reģistrē
  konstatēto gadījumu skaitu, nepārrakstot saturu.
- **`postCall`** izveido atbildes dziļo kopiju, izpilda `sanitizePIIResponse()`,
  kā arī Responses API formas maskētāju (`maskResponsesOutput` — aptver
  `output_text` un `output[].content[].text`). Ja notiek jebkāda aizklāšana,
  modificētā atbilde aizstāj sākotnējo.

Aizsargmehānisms nekad nebloķē; tas tikai pievieno anotācijas (`meta.detections`,
`meta.redacted`) vai pārraksta.

### Uzvednes injekcija (`promptInjection.ts`)

Konstatē ļaunprātīgas struktūras lietotāja iesniegtajā saturā un piemēro
konfigurēto politiku. Darbību nosaka vides mainīgie un konstruktora opcijas:

| Iestatījums          | Vides mainīgais                                                                                              | Noklusējums | Ietekme                                                                                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Iespējots            | `INPUT_SANITIZER_ENABLED`                                                                                    | `true`      | Ja `false`, aizsargmehānisms nekavējoties pārtrauc izpildi.                                                                                                                                            |
| Režīms               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                              | `warn`      | Injekcijas politika: `block`, `warn` vai `log`. (`redact` tiek pieņemts atpakaļsaderības nolūkā, taču **neizņem** injekcijas tekstu; pieprasījuma PII pārrakstīšanu kontrolē `PII_REDACTION_ENABLED`.) |
| Bloķēšanas slieksnis | `blockThreshold` opcija / `INPUT_SANITIZER_BLOCK_THRESHOLD` (aizstājvārds `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`      | Minimālā nopietnības pakāpe, kas nepieciešama bloķēšanai. Ar noklusējuma iestatījumiem vidēja pakāpe tiek tikai novērota.                                                                              |

**Režīma prioritāte** (`getMode`): izsaucēja `options.mode` →
`INJECTION_GUARD_MODE` **DB funkcijas karodziņa pārrakstīšana** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` vides mainīgais →
`INPUT_SANITIZER_MODE` vides mainīgais → `warn`. Tādējādi informācijas paneļa
pārrakstīšanai ir prioritāte pār vides mainīgajiem, tāpēc Feature Flags lietotāja
saskarne kontrolē aktīvo aizsargmehānismu reāllaikā (bez restartēšanas). DB
nolasīšana ir kļūmdroša: ja rodas kļūda, aizsargmehānisms atgriežas pie uz vidi
balstītas darbības, un, ja pārrakstīšana nav iestatīta, darbība ir identiska
izšķiršanai, kas balstīta tikai uz vidi.

Noteikšanas avoti:

1. `sanitizeRequest()` no `@/shared/utils/inputSanitizer` (kopīga detektoru
   kopa, ko izmanto arī citviet konveijerā).
2. Iebūvētie `DEFAULT_GUARD_PATTERNS` (pašlaik `system_override_inline` un
   `markdown_system_block`, abiem nopietnības pakāpe ir `high`).
3. Izvēles `customPatterns`, kas nodoti, izmantojot konstruktora opcijas (virknes,
   regulārās izteiksmes vai `{ name, pattern, severity }` ieraksti).

Ja `mode === "block"` **un** vismaz viens noteikšanas rezultāts sasniedz nopietnības
slieksni, `preCall` atgriež `{ block: true, message: "Request rejected:
suspicious content detected" }`. Režīmos `warn`/`log` aizsargmehānisms veic žurnālierakstu, bet
atļauj izsaukumu. Koplietojamā palīgfunkcija `evaluatePromptInjection()` arī tiek eksportēta
izsaucējiem, kuriem jānovērtē uzvednes, neizmantojot reģistru.

**Skenēšanas ierobežojums (v3.8.20):** detektors pārbauda tikai apvienotā
uzvednes teksta **pirmos 16 KB** — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baiti) failā
`src/shared/utils/inputSanitizer.ts`. Gan `detectInjection()`, gan
`evaluatePromptInjection()` pirms šablonu cikla izpildes izmanto
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Injekcijas direktīvas atrodas tuvu ievades sākumam, tāpēc tas
ierobežo regulāro izteiksmju CPU/GC patēriņu vairāku simtu KB lietderīgajām slodzēm, nevājinot noteikšanu (sk.
#3932, #4041).

### Akreditācijas datu maskētājs (`credentialMasker.ts`)

Darbojas **abos** posmos un noklusējuma ķēdē ir pēdējais (prioritāte `95`). Rediģē,
aizstājot ar maskējumu, labi zināmus API atslēgu / slepeno marķieru šablonus izejošajā lietderīgajā slodzē (ziņojumu
saturā, rīku izsaukumu argumentos, rīku rezultātos) **un** pakalpojumu sniedzēja atbildē, lai
uzvednē ielīmēti akreditācijas dati (vai rīka rezultātā atbalsoti dati) netiktu nopludināti
augšupējam pakalpojumu sniedzējam vai atpakaļ klientam.

- **Tikai pēc izvēles**, tāpat kā PII rediģēšana (saistīts ar Stingro noteikumu #20):
  atspējots, ja vien `settings.credentialRedactionEnabled === true` **vai**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kad tas ir izslēgts, aizsargmehānisms neveic nekādas darbības —
  tas nekad nebloķē un nekad nepārraksta.
- `redactCredentials()` pārstaigā visu lietderīgās slodzes/atbildes koku (`walkValue()`,
  droši pret prototipa piesārņošanu, droši pret cikliem, izmantojot `WeakSet`) un aizstāj atbilstības ar
  vietturi `[REDACTED:<type>]`, klonējot tikai tos zarus, kas faktiski
  mainījās.
- `CREDENTIAL_PATTERNS` aptver LLM pakalpojumu sniedzēju atslēgas (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS marķierus (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksājumu atslēgas (Stripe, Square), mākoņpakalpojumu
  atslēgas (AWS piekļuves atslēga, Twilio, SendGrid, Mailgun), privātās atslēgas / JWT,
  savienojuma virknes, kas satur akreditācijas datus (`mongodb://user:pass@...` utt.), un
  vispārīgu `Authorization`/`x-api-key`/`api-key`/`apikey` galvenes vērtības
  šablonu. Galvenēm līdzīgas atslēgas (`authorization`, `x-api-key`, `api-key`,
  `apikey`) tiek rediģētas strukturāli (tikai vērtība, saglabājot shēmas prefiksu, piemēram,
  `Bearer `/`Basic `), nevis izmantojot vispārīgo teksta regulāro izteiksmi.
- Aizsargmehānisms nekad nebloķē; tas tikai pārraksta (`modifiedPayload` /
  `modifiedResponse`) un pievieno anotācijas (`meta.credentialsRedacted`, `meta.count`).

Regresijas aizsargs: `tests/unit/credential-masker-guardrail.test.ts`.

## Pamatkontrakts (`base.ts`)

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
  block?: boolean; // true pārtrauc ķēdes izpildi
  message?: string; // tiek parādīts bloķēšanas gadījumā
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall atgriež šo vērtību, lai pārrakstītu pieprasījumu
  modifiedResponse?: TValue; // postCall atgriež šo vērtību, lai pārrakstītu atbildi
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

Drošības mehānisms norāda, ka „nav izmaiņu”, atgriežot `void`, `{}` vai
`{ block: false }`. Atgriežot `modifiedPayload`/`modifiedResponse`, tiek aizstāta
vērtība, kas ķēdē tiek nodota tālāk nākamajiem drošības mehānismiem.
`signal?: AbortSignal` nodod izsaucēja dzīves ciklu drošības mehānismiem. Pieprasījuma pārtraukšana ir apzināts atvērtas kļūmes izņēmums: multivides tilti pārtrauc darbu un veic tīrīšanu, neatjaunojot sākotnējo multividi mērķim, par kuru ir zināms, ka tas to neatbalsta.

## Reģistrs (`registry.ts`)

Vienīgā `guardrailRegistry` instance nodrošina:

- `register(guardrail)` — pievieno drošības mehānismu (vai aizstāj to pēc normalizētā nosaukuma) un
  atkārtoti sakārto pēc `priority` augošā secībā.
- `clear()` / `list()` — administratīvas palīgfunkcijas.
- `runPreCallHooks(payload, context)` — secīgi izpilda aktīvos drošības mehānismus, nododot
  lietderīgo slodzi caur `modifiedPayload`, un apstājas pie pirmā `block: true`.
- `runPostCallHooks(response, context)` — tāda pati plūsma atbildes pusē.
- `resetGuardrailsForTests({ registerDefaults })` — notīra stāvokli un pēc izvēles
  atkārtoti reģistrē noklusējuma mehānismus tīrai testu izolācijai.

Abas izpildfunkcijas atgriež `{ blocked, payload|response, results, guardrail?, message? }`,
kur `results` ir `GuardrailExecutionResult` ierakstu masīvs, kas ietver katra
drošības mehānisma laukus `blocked`, `skipped`, `modified`, `error` un `meta`,
kas ir noderīgi trasēšanai.

### Drošības mehānismu atspējošana katram pieprasījumam

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` apkopo
drošības mehānismu nosaukumu sarakstu bez dublikātiem, kuri pašreizējam
pieprasījumam ir jāizlaiž. Avoti (visi neobligāti, visi tiek apvienoti):

- `apiKeyInfo.disabledGuardrails`
- Pieprasījuma ķermeņa `disabledGuardrails` (augšējā līmenī)
- Pieprasījuma ķermeņa `metadata.disabledGuardrails`
- Galvene `x-omniroute-disabled-guardrails` (vai mantotā
  `x-disabled-guardrails`)

Vērtības var būt virkņu masīvi vai ar komatiem atdalīta virkne; nosaukumi tiek
normalizēti uz mazo burtu kebab-case formātu (`pii_masker` → `pii-masker`). Rezultāts
caur `context.disabledGuardrails` tiek nodots reģistram, kas izlaiž
atbilstošos drošības mehānismus (`skipped: true` laukā `results`).

## Izpildes secība

Katram pieprasījumam, kas tiek apstrādāts caur `src/sse/handlers/chat.ts` un
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` izveido izlaižamo aizsargmehānismu sarakstu no API atslēgas, pieprasījuma pamatteksta
   un galvenēm.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` izpilda aizsargmehānismus augošā
   prioritātes secībā:
   - Atspējotie aizsargmehānismi tiek reģistrēti kā `skipped`.
   - Katra aizsargmehānisma `preCall` var pārrakstīt lietderīgo slodzi, izmantojot `modifiedPayload`.
   - Pirmais `block: true` priekšlaicīgi pārtrauc ķēdi, un apstrādātājs atgriež
     aizsargmehānisma noraidījuma atbildi.
3. (Iespējams, pārrakstītā) lietderīgā slodze tiek nodota kombinētajai maršrutēšanai un augšupstraumes
   nosūtīšanai.
4. Pēc atbildes izveides `guardrailRegistry.runPostCallHooks(...)`
   izpilda to pašu ķēdi atbildei. `block: true` šajā posmā atmet augšupstraumes
   atbildi.

Aizsargmehānismi, kas izmet kļūdu, tiek reģistrēti ar `error: <message>` un ierakstīti žurnālā, izmantojot
`logger.warn`, taču ķēdes izpilde turpinās — pēc konstrukcijas kļūmes gadījumā pieprasījums tiek atļauts.

## Konfigurācija

Iebūvēto aizsargmehānismu nolasītie vides mainīgie:

| Mainīgais                             | Izmanto                     | Ietekme                                                                                                                    |
| ------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | Iestatiet uz `false`, lai pilnībā atspējotu noteikšanu.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | Injekciju politika: `warn`, `block` vai `log`. Mantotā vērtība `redact` nepārraksta injekcijas tekstu.                     |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | Injekciju aizsargmehānisma režīms; arī DB funkcionalitātes karodziņš, kas **ignorē un aizstāj** vides mainīgos (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | Minimālais nopietnības līmenis, kuru `MODE=block` noraida: `high` (noklusējums), `medium` vai `low`.                       |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | Mantots `INPUT_SANITIZER_BLOCK_THRESHOLD` aizstājvārds.                                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | Ja vērtība ir `true`, pieprasījumā esošā PII tiek aizklāta (neatkarīgi no injekciju režīma).                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (lejupstraume) | Kontrolē maskētāja darbību atbildes pusē.                                                                                  |

Modalitātes tilta aizsargmehānismi izpildlaika konfigurāciju nolasa no DB nodrošinātās iestatījumu
krātuves (`getSettings()`), nevis no vides mainīgajiem. Attēlu apstrādes primārās atslēgas ir
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` un
`modalityBridgeCacheMaxEntries`. Mantotās
`visionBridge*` atslēgas tiek pieņemtas tikai kā dokumentētā viena cikla lasīšanas
atkāpšanās iespēja; informācijas paneļa veiktajai rakstīšanai tiek izmantotas primārās atslēgas. Noklusējuma vērtības un atkāpšanās
risinātājs atrodas `src/shared/constants/modalityBridgeDefaults.ts`, bet mantotās
konstantes ir saglabātas failā `src/shared/constants/visionBridgeDefaults.ts`.

Audio apstrāde izmanto `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` un `modalityBridgeAudioMaxClips`, kā arī koplietotos
`modalityBridgeCache*` iestatījumus. Audio apstrādei nav mantoto atslēgu atkāpšanās iespējas, jo šīs
atslēgas tika ieviestas kopā ar Modalitātes tilta shēmu.

Video apstrāde izmanto `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` un
`modalityBridgeVideoTimeout`, kā arī koplietotos `modalityBridgeCache*` iestatījumus.
Tā pēc noklusējuma ir atspējota, jo FFmpeg/ffprobe ir neobligātas darbības
atkarības, bet kadru aprakstu ģenerēšana palielina latentumu un modeļa izmaksas.

## Pielāgotas aizsargbarjeras

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

Darbības:

1. Izveidojiet `src/lib/guardrails/myGuardrail.ts`, paplašinot `BaseGuardrail`.
2. Implementējiet `preCall` un/vai `postCall`.
3. Vai nu reģistrējiet importēšanas laikā (pievienojiet no `registerDefaultGuardrails`), vai
   izsauciet `guardrailRegistry.register(...)` izpildlaikā — reģistrs aizstāj
   jebkuru iepriekšējo aizsargbarjeru ar tādu pašu normalizēto nosaukumu.
4. Pievienojiet testus direktorijā `tests/unit/` (esošie piemēri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testēšana

Starp testiem izmantojiet `resetGuardrailsForTests()`, lai sāktu no zināma stāvokļa.
Nododiet `{ registerDefaults: false }`, lai sāktu ar tukšu reģistru un
reģistrētu tikai testējamās aizsargbarjeras. Vision Bridge atbalsta atkarību
ievadīšanu (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge nodrošina
līdzvērtīgus paplašinājuma punktus iestatījumiem, iespējām, STT modeļa atlasei, akreditācijas datu
pārbaudēm un transkripcijai. Tādēļ testos var pārbaudīt abas plūsmas bez piekļuves
DB vai tīklam.

## Skatiet arī

- `src/lib/guardrails/` — implementācija
- `src/shared/utils/inputSanitizer.ts` — koplietots detektors, kas nodrošina
  uzvedņu injekciju noteikšanu un PII maskēšanu
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge noklusējuma vērtības un
  piespiedu tilta modeļu saraksts
- `src/shared/constants/modalityBridgeDefaults.ts` — koplietoti Vision/Audio izpildlaika noklusējumi
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonāls slānis (ķēdes pārtraucējs, nogaidīšanas periodi)
- `docs/reference/ENVIRONMENT.md` — pilna vides mainīgo atsauce

## Injekciju aizsarga maršrutu pārklājums un red-team testēšana (8. posms · D bloks)

Injekciju aizsargs (`createInjectionGuard` / `withInjectionGuard`) aptver visus maršrutus,
kas pieņem lietotāju uzvednes. Tas ievēro `INJECTION_GUARD_MODE` (noklusējuma vērtība `warn` = tikai reģistrē žurnālā;
`block` = atgriež HTTP 400 `SECURITY_001`).

| Tips            | Maršruti                                                                                                                                             | Noklusējuma režīms |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Teksts (esošie) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn               |
| Ģeneratīvie     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn               |
| Dati            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn               |

Teksta izgūšana (`extractMessageContents`) aptver `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testēšana (katru nakti, `nightly-llm-security.yml`):** promptfoo pārbauda, vai katrs maršruts bloķē
OWASP-LLM korpusu režīmā `INJECTION_GUARD_MODE=block`; garak izpilda pārbaudes (izlaiž, ja nav noslēpuma).
`moderations` ir iekļauts konsekvences labad — operatori bloķēšanas režīmā to var izslēgt, izmantojot
`resolveDisabledGuardrails`.

Nakts darbplūsmai (`.github/workflows/nightly-llm-security.yml`, cron + manuāla
palaišana) ir divi darbi:

- **`promptfoo-guard` (bloķējošs)** — izpilda `promptfoo eval -c promptfooconfig.yaml`
  ar `INJECTION_GUARD_MODE=block`. Katrs pretiniecisks gadījums (piemēram, "ignorē visus
  iepriekšējos norādījumus…", DAN stila ierobežojumu apiešanas mēģinājumi) pārbauda, vai atbilde satur
  `error.code === "SECURITY_001"`, proti, vai aizsargs patiešām noraidīja pieprasījumu.
- **`garak` (konsultatīvs)** — izpilda garak `--probes promptinject,dan,leakreplay`
  pret lokālu OmniRoute instanci (`http://localhost:20128/v1`). Tā izpilde ir atkarīga no
  pakalpojumu sniedzēja noslēpuma (`PROMPTFOO_PROVIDER_KEY`); ja tā nav, darbs tiek korekti izlaists, un tam ir pievienots
  `|| true`, tādēļ tas sniedz pārskatu, neizraisot CI kļūmi.

Aizsarga palīgfunkcijas (`createInjectionGuard` / `withInjectionGuard`) pārklājums
aptver katru `/v1` maršrutu, kas pieņem uzvednes; uzvednes teksts tiek iegūts no
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`, izmantojot
`extractMessageContents()` failā `src/shared/utils/inputSanitizer.ts`.
