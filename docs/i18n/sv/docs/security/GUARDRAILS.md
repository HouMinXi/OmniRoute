# Guardrails (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sanningskälla:** `src/lib/guardrails/`
> **Senast uppdaterad:** 2026-08-29 — v3.8.51 (Video Bridge-transkriptets ursprung deklareras av anroparen,
> ännu inte serververifierat — förtydligat enligt #11661)

Guardrails upprätthåller säkerhet, policy och innehållstransformationer vid gränsen
mellan OmniRoute och uppströmsleverantörer. Varje guardrail kan inspektera (och
valfritt avvisa, transformera eller kommentera) begärans nyttolaster (`preCall`) och
uppströms svar (`postCall`).

Systemet är **fail-open**: om en guardrail kastar ett fel under exekvering,
registrerar registret felet och fortsätter med nästa guardrail istället för att
misslyckas med begäran. Blockering är ett explicit beslut (`block: true`),
aldrig en olycka.

## Inbyggda skyddsräcken

Registret läser automatiskt in sex skyddsräcken i prioritetsordning vid import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Namn                | Steg           | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lägre prioritetsnummer körs **först**.

### Bildbrygga (`visionBridge.ts`) — Modalitetsbrygga PR-1

Fångar upp förfrågningar som innehåller bilder och är riktade till **modeller utan bildstöd** och omdirigerar antingen
hela förfrågan till en modell med bildstöd eller ersätter bilddelarna
med textbeskrivningar som genererats av en konfigurerbar bildmodell före
anropet uppströms. Detta gör att leverantörer med enbart textstöd kan hantera
multimodala nyttolaster transparent.

Flöde:

1. Hoppa över om målmodellen redan stöder bilder (såvida den inte finns i
   listan över modeller som tvingas använda bryggan `isVisionBridgeForcedModel`).
2. Extrahera bilddelar via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerar till den **enhetliga mediedetektorn**
   `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den
   enda sanningskällan som delas med combo-kompatibilitetsfiltret.
   Extraheringen tillåter endast delar på toppnivå med de format
   som `replaceImageParts` kan infoga igen (kontraktet extrahera↔ersätt): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` och Responses API `input_image`. Nästlade träffar och
   format som endast fungerar som indikatorer är material för combo-filtret och extraheras aldrig.
   Hoppa över om inga hittas.
3. Lös körningskonfigurationen via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nya inställningsnycklar med `modalityBridge*`
   har företräde; äldre nycklar med `visionBridge*` finns kvar som en **reservlösning under en cykel**
   (återställningsfönster). Hoppa över före all mediagenomsökning när
   bryggan är inaktiverad.
4. Lägesväljaren (`modalityBridgeVisionMode`, se tabellen nedan) avgör
   om omdirigering eller beskrivning ska användas. Omdirigering returnerar `modifiedPayload` där endast `model`
   har bytts ut, samt metadata `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivningsflödet: begränsa bilder till `maxImages`, skapa den uppgiftsanpassade prompten,
   kontrollera beskrivningscachen, anropa bildmodellen **parallellt**
   (`Promise.allSettled`) och infoga textdelar av typen `[Bild N]: <beskrivning>` på
   deras plats. En misslyckad beskrivning ger `null` och den ursprungliga bilddelen
   **bevaras** (#4012) — förutom i combo-beskrivningsflödet när samtliga
   beskrivningar misslyckades, då en bekräftad uppströmstjänst utan bildstöd i stället får en
   platshållare `(otillgänglig — ingen leverantör med bildstöd är ansluten)` (#8430).
6. Returnera `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Lägesväljare (`modalityBridgeVisionMode`)

| Läge       | Standard | Beteende                                                                                                                                                                                                                                                                                                            |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Äldre heuristik, oförändrad (#6640/#7204): modeller som inte är combo-/`auto/`-modeller omdirigeras till den bästa bildmodellen, såvida inte den ursprungliga modellen redan har användbara autentiseringsuppgifter (då används beskrivning); combo-mål använder alltid beskrivning.                                |
| `describe` |          | Beskriv alltid — omdirigeringsblocket hoppas över helt; användarens valda modell ger alltid svaret.                                                                                                                                                                                                                 |
| `reroute`  |          | Tvinga omdirigering: skyddet för att behålla modellen med autentiseringsuppgifter kringgås. Autentiseringsskyddet för omdirigerings-**målet** gäller fortfarande — när inget användbart bildmål finns går förfrågan vidare till beskrivning, så att råa bilder aldrig når en serverdel med enbart textstöd (#8430). |

Tvingade lägen kortsluter **innan** autoheuristiken körs; beteendet för `auto`
är byte-identiskt med skyddsräcket före PR-1.

#### API-nyckelns omfattning (`visionBridgeKeyScope.ts`)

När anroparens API-nyckel begränsar `allowedConnections`, kvotpooler
(`allowedQuotas`) eller modeller (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) väljer bryggan endast
modeller för omdirigering och beskrivning som nyckeln får använda, på anslutningar som nyckeln får
använda. Beskrivningsanropet går därefter alltid genom OmniRoutes självloop med
rubriken `x-omniroute-self-loop-key-id`, så att den mottagande chattförfrågan
återigen tillämpar nyckelns anslutnings- och modellpolicy. `enforceApiKeyPolicy()`
respekterar endast den rubriken tillsammans med självloopens bearer-token, så den kan endast
begränsa åtkomsten, och ett id som inte kan matchas avvisas.

Om ingen bildmodell är tillåten för nyckeln träder beskrivningsflödet åt sidan och
förfrågan går vidare oförändrad, samma fail-open-beteende som för ett inaktiverat
skyddsräcke (metadata `{ skipped: true, reason: "no_permitted_vision_model" }`).
Förfrågningar utan nyckel, och nycklar utan dessa begränsningar, fungerar exakt som
tidigare.

#### Uppgiftsanpassad beskrivningsprompt (`modalityBridgeVisionTaskAware`)

Standardvärdet är **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) lägger till
texten från det **senaste användarmeddelandet** (avkortad till 500 tecken) i den
grundläggande beskrivningsprompten, vilket styr beskrivningen mot det som användaren
faktiskt frågade efter (codex-vision-proxy-mönstret) och ber visionmodellen att transkribera
synlig text. När flaggan är avstängd — eller när det inte finns någon användartext — används
grundprompten oförändrad.

Describe-självloopens egen OpenAI-kompatibla begäran (`callVisionModelSingle()`
i `visionBridgeHelpers.ts`) begär alltid `image_url.detail: "high"` —
ovillkorligen, för varje anropare/leverantör, utan att styras av någon signal från klienten.
Sampling med låg detaljnivå försämrar OCR-noggrannheten för just den
texttranskriptionsuppgift som denna prompt efterfrågar, så describe-anropet begär alltid hög
detaljnivå oavsett vilken detaljnivå den ursprungliga inkommande begäran använde. Detta
påverkar endast den interna begärandetexten för describe; det ändrar inte hur
OmniRoute vidarebefordrar anroparens egen `image_url.detail` i den primära begäran —
det standardvärdet tillämpas separat, och endast för identifierade OpenCode-klienter, i
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Grenen för
Anthropic-wire-formatet i describe-självloopen har inget `detail`-fält
och påverkas inte av något av standardvärdena.

#### Gräns för describe-utdata (`modalityBridgeVisionMaxChars`)

| Nyckel                         | Standardvärde | Intervall           |
| ------------------------------ | ------------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`           | `0` eller 100–50000 |

`0` (standardvärdet) innebär **ingen gräns** — beskrivningen som returneras av
`callVisionModel()` skickas vidare oförändrad, vilket bevarar det befintliga
beteendet. Alla värden i intervallet 100–50000 avkortar beskrivningen med
suffixet `…` innan den infogas som `[Bild N]: <beskrivning>`
(`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`).
Höj detta för detaljrika OCR-uppgifter där den efterföljande modellen behöver den
fullständiga transkriptionen; sänk det för att begränsa tokenanvändningen hos pratsamma visionmodeller.
Instrumentpanelens fält finns på fliken Visions avancerade panel
(`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) och justerar alla
värden mellan 1 och 99 uppåt till minimivärdet 100, samtidigt som ett uttryckligt `0`
lämnas orört — `0` är ett giltigt Zod-värde i sig
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), inte bara
standardvärdet för ”inte angivet”.

#### Describe-cache (`modalityBridge/bridgeCache.ts`)

LRU- och TTL-cache i minnet för describe-utdata, gemensam för hela processen.
Nyckel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` med
längdprefixramning (inga kollisioner vid fältgränser). Modellkomponenten är
den **konfigurerade** bryggmodellen, inte modellen som faktiskt svarade —
`callVisionModel` kan internt falla tillbaka till en annan modell, och nycklar per försök skulle
fragmentera cachen. Misslyckade describe-anrop cachas aldrig. Inställningar:

| Nyckel                          | Standardvärde | Intervall |
| ------------------------------- | ------------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`        | —         |
| `modalityBridgeCacheTtlMinutes` | `60`          | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`         | 10–5000   |

#### Normalisering av fjärrbilder (describe-självloop/base64-hämtning)

När bryggan själv hämtar en **fjärrbild** — Anthropic-describe-självanropet
och base64-konverteringen för claude-wire-formatet
(`ensureBase64ImagesForClaudeWire`), båda via
`fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — skickas den resulterande
data-URI:n genom `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) innan den bäddas in i visionmodellens
begäran. Överdimensionerade bilder skalas ned till en **långsida på 2048 px** (vilket
motsvarar storleksgränsen som OpenAI/Anthropic redan tillämpar på serversidan), vilket minskar
uppladdningsmängden/latensen utan att ändra vad visionmodellen ser. Storleksändringen
använder `sharp`, som läses in via dynamisk import: på en plattform där dess systemspecifika
binärfil inte kan läsas in kastar `normalizeDataUri()` **aldrig ett undantag** — den faller tillbaka
till att skicka vidare de ursprungliga bytevärdena, så sökvägen för describe/base64-konvertering
alltid fortsätter fungera. Bytevärden som inte representerar bilder (en hämtning som inte returnerade en
avkodningsbar bild) skickas också vidare oförändrade. Denna normalisering
är begränsad till bilder som bryggan hämtar för sitt eget självanrop — den tillämpas
aldrig på anroparens råa vidarebefordrade nyttolast, i enlighet med principen om
ändring endast efter aktivt val (hård regel nr 20).

#### Inställningsschema + migrering

De nya `modalityBridge*`-nycklarna Zod-valideras i `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trion `modalityBridgeCache*` och gruppen
`modalityBridgeAudio*` som används av ljudbryggan. Migreringen
`141_modality_bridge_settings.sql` kopierar befintliga äldre
`visionBridge*`-värden till motsvarande nya nycklar (idempotent och skriver aldrig över
ett `modalityBridge*`-värde som angetts av en operatör); de äldre nycklarna fortsätter att
accepteras som reserv vid läsning under en utgivningscykel.

#### Transparensheader + statistik

Describe-transformerade svar innehåller
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(skapad av `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`,
tillagd av `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`).
Omdirigerade begäranden får **ingen** header — nyttolasten lämnades orörd och modellbytet
är redan synligt i svarskroppens `model`-fält.

`GET /api/modality-bridge/stats` (hanteringsautentisering, samma nivå som
`GET /api/settings`) returnerar räknarna per modalitet i minnet
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` för `vision`, `audio` och
`video`. `averageLatencyMs` använder `latencySamples`, inte alla försök, som
nämnare. En åtgärd utan tidsmätning skapar inte ett artificiellt exempel på noll
millisekunder. `bridged` förblir det bakåtkompatibla aliaset för lyckade
konverteringar; misslyckade försök ökar det inte.
Räknarna återställs avsiktligt när processen startas om
(telemetri, inte redovisning).

#### Konfiguration av instrumentpanelen

Den särskilda sidan på instrumentpanelen finns på
`/dashboard/settings/modality-bridge`. Dess URL-adresserbara flikar `Vision`, `Audio`
och `Video` bevarar frågeparametrarna när värdet för `tab` ändras.
Fliken Vision innehåller aktivering, läge, modellval (inklusive det automatiska
standardvalet), uppgiftsmedvetna instruktioner, avancerade gränser för
tidsgräns/bild/beskrivningslängd/cache, körtidsräknare och en skyddad
exempelbegäran. Fliken Audio är också aktiv: den innehåller aktivering, en
modellväljare enbart för STT med Auto, gränser för tidsgräns/maximal klipplängd,
ljudräknare och ett `input_audio`-exempeltest. Fliken Video är funktionell: den
visar körtidstillståndet för FFmpeg/ffprobe — ett av fyra uttryckliga
gränssnittstillstånd (`unknown` medan kontrollen pågår eller inte kunde slutföras,
`restricted` på en instrumentpanelsvärd som inte är loopback, där kontrollen hoppas
över på klientsidan, `unavailable` efter att en kontroll har bekräftat att de
saknas, eller `available` med versionerna av FFmpeg/ffprobe) — sparar gränser för
aktivering/modell/bildrutor/video/tidsgräns, filtrerar modellväljaren till modeller
med stöd för bildbehandling och visar videoräknare.

Det tidigare Vision Bridge-kortet under AI-inställningarna är en
kompatibilitetslänk till den nya sidan; det innehåller inte längre en andra kopia
av formuläret. Media Providers länkar även arbetsflödena Image-to-Text och
Speech-to-Text till motsvarande Modality Bridge-flikar utan att ta bort den
befintliga Speech-to-Text-lekplatsen.

**Förbikoppling av tillträdeskontroll för egen loop:** när describe-anropet dirigeras
genom OmniRoutes egen `/v1`-loop (leverantörsmodell som inte är standard) skickar
underbegäran `x-omniroute-admission-bypass: internal` och autentiseras med den
matchade autentiseringsuppgiften för den egna loopen — den lokala
`sk_omniroute`-sentineln i lokalt läge eller den operatörskonfigurerade miljönyckeln
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), så att installationer med
`REQUIRE_API_KEY=true` fortfarande kan köra describe-anropet. Förbikopplingen
tillåts endast för exakt dessa autentiseringsuppgifter, så externa klienter kan
inte använda headern för att kringgå tillträdeskontrollen.

Äldre standardvärden finns i `src/shared/constants/visionBridgeDefaults.ts`; de
nya standardvärdena för läge/uppgiftsmedvetenhet/cache samt inställningsmatcharen
finns i `src/shared/constants/modalityBridgeDefaults.ts`. Skyddsmekanismen
tillhandahåller konstruktoralternativet `deps`, så att tester kan injicera falska
implementationer av `getSettings` och `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Fångar upp chattbegäranden som innehåller ljud innan de når ett mål som inte
uttryckligen stöder ljudindata. Den dirigerar aldrig om chattbegäran: ljuddelarna
transkriberas genom den befintliga OpenAI-kompatibla multipart-slutpunkten, och den
valda chattmodellen fortsätter med texttranskriptionerna.

Flöde:

1. Matcha `supportsAudio` genom `getResolvedModelCapabilities()`. Uttryckliga
   metadata i leverantörsregistret har företräde, följt av statiska modellmetadata
   och därefter synkroniserade `modalities_input`. En deklarerad indatalista utan
   `audio` ger `false`; om det saknas belägg för kapaciteten blir värdet `null`.
   Både `false` och `null` aktiverar den konservativa bryggan, medan `true`
   kringgår den.
2. Matcha inställningarna `modalityBridgeAudio*` och extrahera skarvbara
   ljuddelar på toppnivå från varje meddelande genom den delade detektorn
   `detectMediaParts()`. Trådformat som stöds är OpenAI `input_audio`,
   `audio_url` och `source.media_type: "audio/*"`. Kapslat ljud identifieras för
   dirigering men tas inte bort av skarvningssökvägen. Arbetsmängden begränsas
   av `modalityBridgeAudioMaxClips`; efterföljande delar lämnas orörda.
3. Respektera en konfigurerad `provider/model`, eller låt
   `selectAudioBridgeModel()` gå igenom `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil
   katalogordning och välja den första modellen med användbara, aktiva
   autentiseringsuppgifter för leverantören.
4. `callAudioTranscription()` konverterar base64-/data-URI-ljud till en
   multipart-`file`, eller hämtar en fjärrresurs via `audio_url` genom det
   offentliga utgående skyddet med DNS-fästning och en gräns på 25 MB. Därefter
   skickar den filen och den valda modellen med POST till den lokala
   `/v1/audio/transcriptions`-loopen, autentiserad med
   `resolveSelfLoopBearer()`. Den befintliga transkriptionsrutten utför normal
   uppslagning av autentiseringsuppgifter, hantering av nedkylning/hastighetsgränser
   och leverantörsdistribution.
5. Lyckade anrop ersätter sina delar med `[Audio N]: <transcript>`. Anropen körs
   med `Promise.allSettled`: ett enskilt fel bevarar den ursprungliga ljuddelen
   (#4012-kontraktet). Om alla anrop misslyckas och det har bevisats att målet har
   `supportsAudio === false`, blir delarna
   `[Audio N]: (unavailable — no STT provider connected)` (#8430-kontraktet). För
   ett okänt mål (`null`) lämnas innehållet orört om alla anrop misslyckas. Ett
   bevisat mål med enbart text och utan användbara STT-autentiseringsuppgifter får
   samma uttryckliga platshållare utan att något nätverksanrop görs.

Lyckade transkriptioner använder den processomfattande LRU-/TTL-cachen för
Modality Bridge. Nyckeln kombinerar ljudreferensen, den stabila åtgärdsetiketten
`audio-transcription` och den valda STT-modellen; fel cachelagras aldrig.
Ljudförsök uppdaterar de delade räknarna `bridged`, `cacheHits`, `failures` och
`lastUsedAt`. Transformerade svar innehåller
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; orörda
begäranden får inget Audio Bridge-segment.

Körtidsinställningarna är databasstödda och valideras med Zod:

| Nyckel                        | Standardvärde | Intervall         |
| ----------------------------- | ------------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`        | —                 |
| `modalityBridgeAudioModel`    | `""`          | Auto eller STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`       | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`           | 1–10              |

Den delade cachen styrs fortfarande av `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` och `modalityBridgeCacheMaxEntries`.

### Videobrygga (`videoBridge.ts`, `videoBridgePipeline.ts`)

Fångar upp videodelar på toppnivå i `messages` för Chat Completions och i
Responses-API:ets `input` innan ett mål utan känt inbyggt videostöd anropas.
Format som stöds är `input_video`, `video_url`, `video_source`, HTTPS-URL:er
och data-URI:er av typen `data:video/*;base64,...`. Vanliga filnamn i text
behandlas inte som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ansvarar för genomgång av
begäran, kontroll av funktionalitet/policy, aggregering per begäran och
svarsnyttolasten. Arbetet per video — hämtning, cachelagring av hela resultatet,
beskrivning av en bildsekvens (som sammanfogar eventuell ljudtranskription som
anroparen har deklarerat) samt mätvärden/avbrott/resursrensning per försök —
döljs bakom `processVideoPart` i `videoBridgePipeline.ts`, som anropas en gång
per videodel i `preCall`:s loop. Modulen definierar också de uttryckliga
portgränserna `VideoMediaBrokerPort` (hämtning av byte och extrahering av
samplade bildrutor), `VideoAudioTranscriptionPort` (sammanfogning av en
ljudtranskription som anroparen har deklarerat med de samplade bildtexterna) och
`VideoDrilldownPort` (persistensgränsen för detaljgranskning av bildrutor; ännu
inte ansluten till `processVideoPart` — i nuläget är det endast den separata
rutten `/api/modality-bridge/video/drilldown` som skriver
detaljgranskningsposter).

Den publika sökvägen för `/v1`-begäranden importerar eller anropar aldrig en
underprocess. Fjärrvideor hämtas med en gräns på 50 MiB. Infogade
base64-videor har ett konservativt tak på 36 MiB avkodad data per video, så att
modell-/meddelande-/inramningshöljet kan hållas inom den publika
JSON-begäransgränsen på 50 MiB. Infogad längd och uppskattad avkodad storlek
kontrolleras före allokering. HTTPS krävs för den ursprungliga fjärr-URL:en och
varje omdirigering, med det befintliga skyddet för enbart offentliga utgående
anslutningar och DNS-fästning. Därefter passerar byten den exakta interna
brokergränsen `POST /api/modality-bridge/video/extract`. Den rutten är både
`LOCAL_ONLY` och `SPAWN_CAPABLE`, accepterar endast en autentiserad betrodd
loopback-begäran per process och accepterar aldrig en URL, sökväg i filsystemet,
körbar fil eller argumentlista. API-pipelinens gräns för brödtextstorlek och
hanterarens inkrementella brödtextläsare tillämpar oberoende av varandra ett
tak på 50 MiB för brokerindata. Dess begränsade kö kör en extrahering åt gången,
tillåter fyra väntande jobb och begränsar väntande indata till 100 MiB.

Inuti brokern läser `ffprobe` en privat lokal fil. Den fasta tillåtelselistan
för format utesluter spelliste- och manifestformat. För tillåtna behållare i
MOV-familjen förblir externa MOV-datareferenser inaktiverade som standard, och
det fasta kommandot aktiverar dem inte. Både `ffprobe` och `ffmpeg` använder
protokolltillåtelselistan med endast `file`, en tråd, fasta argumentmatriser,
inget skal och körbara filer som matchas via `PATH`. Omslagsströmmar med
bifogade bilder är inte spelbara kandidater. Alla spelbara strömmar måste
uppfylla gränserna, och en uttryckligen angiven standardström föredras före den
deterministiska reservlösningen med lägst index. Videor begränsas till 600
sekunder, 8 192 pixlar per dimension och 33 554 432 källpixlar. FFmpeg samplar
1–16 JPEG-bildrutor vid mittpunkter, skalar ned den långa kanten till högst
1 024 pixlar utan att skala upp mindre indata och tar aldrig emot en URL.
Samplingen är `uniform` som standard. De valfria policyerna `scene_aware` och
experimentella `segment_aware` utför ytterligare en fast FFmpeg-passering över
den redan validerade lokala strömmen, väljer ett begränsat antal
`showinfo`-scenstämplar och faller deterministiskt tillbaka till samma jämnt
fördelade mittpunkter om detektorn misslyckas, en tidsgräns överskrids,
utdata är felaktiga eller kandidatuppsättningen är tom. Segmentmedvetet läge
fördelar mittpunktssamplingar proportionellt över de validerade
scenintervallen. Underlag och reservbeteende för segmentmedvetet läge beskrivs
närmare nedan. Det hårda taket på 16 bildrutor tillämpas efter urvalet i varje
policy. När en scenmedveten begäran endast har en budget på en bildruta används
den jämnt fördelade mittpunkten i det aktiva helvideo- eller fokusfönstret, och
`policyEffective: uniform` rapporteras: en enda vald scenbildruta kan inte
bevara båda tidsmässiga ändpunkterna. En anropare kan valfritt ange ett ändligt
fokusfönster (`start`/`end` i sekunder). Gränserna begränsas till mediets
varaktighet, omvända eller icke-ändliga fönster avvisas och alla
samplingspolicyer utförs endast inom det normaliserade intervallet. Det
resulterande fönstret inkluderas i samplingsmetadata och i det obetrodda
beskrivningsprefixet, så att efterföljande modeller kan skilja ett fokuserat
utdrag från hela tidslinjen.

Semantiskt bildtextfokus är en separat, uttrycklig inställning. Standardläget
`full` för analys bevarar den befintliga bildruteprompten och vidarebefordrar
aldrig text från begäran till bildtextmodellen. I läget `focused` läser bryggan
endast den senaste icke-tomma användarskapade `text`/`input_text` från samma
Chat- eller Responses-behållare, normaliserar den till NFC, slår samman
kontrolltecken och blanksteg samt begränsar den till 500 Unicode-kodpunkter. Ett
tomt resultat faller tillbaka till den exakta `full`-prompten. En användbar
ledtråd serialiseras som JSON i ett särskilt block för obetrodd
användarkontext och får endast prioritera observerbara detaljer. Den kan inte
åsidosätta den separata varningen mot att följa instruktioner som är synliga
eller hörbara i mediet. Textbaserat fokus härleder aldrig `start`/`end` och
ändrar inte den tidsmässiga samplaren.

#### FU-07 strukturellt segmentunderlag

`segment_aware` använder en enda avgränsad föranalyspassering över den redan validerade
lokala videoströmmen. Den fasta filterkedjan skalar först till högst 320 pixlars
bredd, identifierar scenbyten och frusna intervall och samplar därefter 1 bildruta per
sekund för oskärpa, genomsnittlig luminans samt spatial och temporal information. Passeringen
är begränsad till 600 strukturella samplingar, en FFmpeg-/filtertråd, samma
protokolltillåtelselista med endast `file` och tillåtelselistor för containrar, en gräns på 1 MiB
för processutdata och högst 30 sekunder inom brokerns delade avbrotts-/tidsfrist. Den
tar aldrig emot ett kommando, filter, en sökväg eller URL från begäran.

De strukturella värdena är deterministiska samplingsbelägg, inte semantisk förståelse
av videon. De härleder inte motiv, handlingar, bildtexter, tal eller användarens
avsikt. Scen- och frysgränser bildar segment. Frystäckning, oskärpa,
exponering, spatial detaljrikedom och temporal förändring påverkar endast hur den befintliga
budgeten på 1–16 bildrutor fördelas. Ett helt fruset segment begränsas till en bildruta,
medan icke-frusna segment konkurrerar om den återstående budgeten. När antalet gränser
överstiger antalet bildrutor bibehålls en jämn täckning av tidslinjen, så att snabba tidiga klipp
inte kan dölja ett långt avslutande segment. Scengränser inom analysupplösningen
på 1 sekund från en frysgräns slås samman.

Saknade filter, felaktiga eller tomma belägg, ett detektorfel eller tidsgränsen för den
avgränsade föranalysen leder till en öppen reservlösning med exakt samma enhetliga
mittpunktspolicy. Ett anroparavbrott eller en brokertidsfrist leder inte till en öppen
reservlösning: det avslutar den pågående underprocessen, förhindrar efterföljande
extrahering av bildrutor och det privata temporära trädet tas bort i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererar deterministiska verkliga FFmpeg-fixturer
för besparingar i bildtextanrop efter deduplicering, budgetfördelning vid tät rörelse,
belägg för oskärpa/exponering/SI-TI, snabba klipp med ett långt slutparti och falska
positiva resultat vid gradvisa toningar. Det registrerar föranalysens väggklockstid och,
där `/usr/bin/time` är tillgängligt, den underordnade processens CPU-användning och maximala
RSS. Dess kvalitetskontroller är endast strukturella orakel. Kvaliteten hos verkliga
bildtextmodeller förblir `HOLD` eftersom denna testhärva saknar en auktoriserad
slutpunkt eller fixerad bedömare. Monetära besparingar förblir också `HOLD`
om inte `--caption-cost-per-call-usd` anger en uttrycklig positiv uppskattning av kostnaden
per anrop. Skriptet fabricerar aldrig något av resultaten.

Varje bildruta är begränsad till 4 MiB, alla råa bildrutor tillsammans till 23 MiB och det
serialiserade brokersvaret till 32 MiB. En privat temporär katalog tas bort
i `finally`. OmniRoute inkluderar inte FFmpeg och accepterar inte en anpassad
sökväg till den körbara filen. Före bildtextgenereringen tillämpar bryggan en konservativ visuell
dedupliceringspassering: varje JPEG reduceras till en 16×16-gråskalebuffert och
jämförs endast med den senast behållna bildrutan. För en begärd bildtextbudget
på mer än en bildruta tillhandahåller extraheringen en
avgränsad kandidatpool på upp till dubbla budgeten och aldrig fler än 16 bildrutor.
Det begärda taket tillämpas först efter dedupliceringen, och den första och sista
valda kandidaten bevaras under den slutliga gallringen när budgeten är minst
två. Den versionshanterade policyn
`grayscale-16x16-mean-cells-v2` använder det större värdet av genomsnittlig luminansskillnad och
andelen miniatyrceller vars normaliserade skillnad är minst 0.05.
Dubblettgränsen är konstanten 0.04, vald för förutsägbarhet snarare än
exponerad som en körningsinställning. Denna sekundära
signal med hög kontrast bevarar små rörelser och ändringar i synlig text som en
jämförelse baserad enbart på medelvärdet kan dölja. Fel i jämförare eller avkodare leder till en öppen
reservlösning som bibehåller täckningen. Utdatametadata skiljer mellan extraherade kandidater,
bildrutor som använts och borttagna visuella dubbletter.

En uttryckligen markerad videodel kan begära ett tidsstämplat kontaktark. Bryggan
skapar ett JPEG-rutnät med högst 4 kolumner och 16 bildrutor. Varje cell på 512 pixlar bränner
in källans tidsstämpel i ett bottenfält med hög kontrast, medan samma tidsstämplar
finns kvar i textmetadata för efterföljande koppling och granskning. Den fullständiga
JPEG-bilden är fortfarande begränsad till 32 MiB. Om `sharp` inte kan avkoda eller sätta samman rutnätet
faller bryggan tillbaka på de enskilda JPEG-bildrutorna. Ett klientavbrott sprids fortfarande
genom kontaktarksåtgärden.

Beläggen för produktionssättning hålls avsiktligt åtskilda från det syntetiska
mikrobenchmarktestet för sammansättning. `scripts/perf/video-bridge-contact-sheet-eval.ts` definierar en
schemaversionshanterad A/B-testhärva för verkliga OpenAI-kompatibla visionsmodeller. Den mäter
leverantörsrapporterade tokens, väggklockslatens från början till slut (inklusive sammansättning av kontaktarket),
antal modellanrop och faktabevarande enligt manifestet. Råa modellsvar
skrivs inte till rapporten. Endast SHA-256-kondensat och matchade fakta-ID:n sparas. Testhärvan
gör inga nätverksanrop eller anrop till betalda modeller om inte `--execute-real` anges och
`--model`, `OMNIROUTE_BASE_URL` och `OMNIROUTE_API_KEY` är konfigurerade. Utan
den uttryckliga verkliga körningen förblir dess maskinläsbara utslag `HOLD`. Enbart syntetiska
mätningar av nyttolast och antal anrop utgör inte belägg för produktionssättning.

Anropare kan bifoga en valfri `transcript.cues`-matris till en videodel som stöds
när de redan har justerad text. Varje textindikering måste innehålla `text`, ett
ändligt `start`-/`end`-intervall inom den sonderade varaktigheten och en
tillåten `source` (`client`, `embedded` eller `audio-bridge`). `confidence` har
standardvärdet `1` och måste ligga mellan `0` och `1`. Exakta dubbletter av textindikeringar slås samman.
OmniRoute startar aldrig transkribering utifrån dessa metadata: validerade textindikeringar
kopieras till det beskrivna resultatet med källa, konfidens och intervall och
återges som ej betrodda observationer tillsammans med bildrutornas bildtexter. Ogiltig text,
text utanför intervallet eller text utan proveniens avvisas i stället för att blandas in i
bildtextströmmen. Båda transkriptkanalerna i begärandekroppen normaliserar angiven
proveniens till `client`, inklusive självuppgivna etiketter som `embedded` eller `audio-bridge`.
Endast en serverägd adapter kan tilldela dessa betrodda etiketter via
det kodexklusiva argumentet `trustedSource`. Ett JSON-fält i en begäran kan inte nå
det argumentet. Transkripttext förblir ej betrott innehåll härlett från media,
oavsett proveniens, och får aldrig avgöra auktorisering.

En avancerad anropare kan tillhandahålla ett `audioTranscript`-spår för samma video;
det behandlas som text som tillhandahållits av klienten, inte som bevis på servertranskribering.
Fusionsgränssnittet kör visuella observationer och ljudobservationer med
en gemensam tidsgräns och avbrottssignal, ordnar dem på en gemensam tidslinje, slår samman
exakta dubbletter och rapporterar ett partiellt resultat när endast den ena sidan lyckas.
Ett ogiltigt `audioTranscript` degraderas till det partiella resultatet — den visuella
beskrivningen behålls och ljudgrenen registrerar en sanerad felkod —
i stället för att hela videon misslyckas. Tillgänglighet per gren, partiell-statusen
och de sanerade felkoderna bevaras i det beskrivna resultatet, i
skyddsräckets metadata (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i resultatcachemetadata och i bryggans
fusionsräknare. Standardsökvägen för Video Bridge anropar inte tal-till-text
och hämtar inte en andra kopia av mediet; utan det uttryckliga spåret förblir den
begränsad till video.

**Bevarande av transkript (#12150 P1).** Detta tillämpas automatiskt när
Video Bridge (som i sig kräver aktivt val) renderar en transkriptmarkör — det finns ingen separat
bevarandeflagga. När en begäran renderar någon transkriptmarkör (ett av anroparen deklarerat
`transcript` eller ett fusionerat `audioTranscript`) markerar skyddsräcket den som
`videoBridgeObserved` och skapar en maskerad skuggkopia av videobeskrivningen —
en identisk rendering där varje markörs fritextinnehåll ersätts med
`[redacted-video-transcript]`, skapad genom att det strukturerade markörfältet
ersätts innan strängen sätts samman (aldrig genom att tolka den utplattade texten, så inget
markörinnehåll — fientligt eller normalt, inklusive innehåll med `]`, såsom
`[inaudible]`/`[music]` — kan finnas kvar). Den beständigt lagrade begärandetexten i anropsloggen ersätter
varje videohärledd textdel med den maskerade skuggkopian, matchad genom innehållslikhet;
ankaret `fullText` läses på nytt från det färdigställda skyddsräckesinnehållet före anropet,
så matchningen lyckas även efter att senare kedjade skyddsräcken (maskerarna för PII och
autentiseringsuppgifter, prioriteterna 10/95) har skrivit om beskrivningstexten på plats och
efter att injicering av systemprompt, överlämning och minne har omformat meddelandearrayen. Den
text som skickas uppströms till modellen ändras inte. En observerad begäran fyller inte heller
i något beständigt Memory (både extrahering från begäran och från svar hoppas över),
så modellens eget svar kan inte återge transkripttext i Memory.

**Obehandlade videofält (#12430).** När bryggan är aktiverad och det inbyggda videostödet är okänt eller saknas aktiverar även definierade fält för `transcript`/`audioTranscript` `videoBridgeObserved`, även efter att beskrivningen misslyckats eller en `maxVideos`-gräns nåtts. `null` och tomma strängar räknas; frånvarande fält och metadata som inte avser video gör det inte. Bevarade kopior maskerar dessa fält eller utelämnar begäran, och cacheminnen/Memory kringgås.

På dessa reservsökvägar blir giltiga markörer som anroparen tillhandahållit stödda
`text`/`input_text`-delar i stället för icke-standardiserade leverantörsfält. Båda spåren
som medföljer begäran förblir ej betrodda `client`-observationer, med en uttrycklig varning om att videon
inte beskrevs och att tidsstämplarna inte verifierades mot mediet. De befintliga
gränserna på 256 markörer/64 KiB totalt och per markör gäller för de två spåren tillsammans;
tidsstämplar måste rymmas inom mäklarens tak på 600 sekunder och ett eventuellt angivet fokusfönster.
Ogiltiga spår ignoreras och vidarebefordras inte som godtycklig text; ett giltigt
syskonspår kan fortfarande användas om deras sammanlagda budget inte överskrids. Nullvärden/tomma
fält tillför ingen text. Den här reservlösningen medför ingen hämtning eller transkribering av media.
Transkriptets tilläggsfält tas bort från reservlösningens videobehållare och dess
`video_url`/`source`-objekt. OpenAI:s tillåtelselista för överföringsformatet förblir strikt; videobehållare
med okänt inbyggt stöd förblir tillgängliga och mål som är kända för att endast stödja text behåller säkra markörer.
Strukturerade maskeringsskuggor skyddar den tillagda transkripttexten, medan den
ursprungliga begäran som ägs av anroparen förblir oförändrad. Mål med inbyggt stöd och
inaktiverade bryggor behåller sitt befintliga beteende för förbikoppling.

Ytterligare bevarade kopior använder samma signal för observerad begäran. Den obehandlade
ögonblicksbilden av klientbegäran före skyddsräcket, den väntande begäran i minnet och loggen över
tidigt avvisade begäranden ersätter transkriptfält i videodelar strukturellt;
strängprompter som syntetiserats av pipelinesteg och kontextöverlämning maskeras
vid mottagaren för den beständigt lagrade begärandetexten. Den beständigt lagrade markören `video_content_removed`
gör att fortsättning med `previous_response_id` stängs vid fel i stället för att återskapa
text som avsiktligt har tagits bort. Om en observerad begäran förlorar sin
maskeringsskugga per del före loggning, eller om ens en av flera videoskuggor
inte matchar efter senare ändringar av begäran, utelämnas den bevarade begärandetexten
helt i stället för att ett delvis maskerat transkript bevaras.

För en observerad begäran kan ett modellsvar citera vilken del som helst av
transkriptet utan en strukturerad markörgräns. Dess beständigt lagrade `responseBody`
i anropsloggen ersätts därför med en utelämningsmarkör; den detaljerade
pipelineartefakten (som kan innehålla uppströms-/klienttexter och strömningssegment)
bevaras inte. Semantiska cacheminnen, idempotenscacheminnen och cacheminnen för resonemangsåteruppspelning kringgår
läsningar och skrivningar för den begäran. Leverantörsbegäran och det
klientsynliga svaret förblir oförändrade. Tidiga keepalive-byte töms från den tillfälliga
bufferten när den detaljerade artefakten utelämnas. Kiros varning om felaktigt EventStream-format
rapporterar endast nyttolastens byteantal, aldrig dess innehåll eller JSON-tolkarens
obehandlade fel.
Detta innebär inte att alla orelaterade diagnostikmeddelanden från leverantörer/plugins har
granskats; den bredare genomgången av beständigt lagrade mottagare spåras i #11658.

Den interna livscykeln för `/api/modality-bridge/video/drilldown` är ett separat,
loopback-/tokenautentiserat cacheunderlag. Varje åtgärd kräver dessutom ett
kanoniskt ogenomskinligt huvudmanns-ID. Innan en produktionsanropare aktiveras måste
den härleda detta ID från den autentiserade klientorganisationen och får aldrig vidarebefordra
ett värde som valts av klienten. Cachenycklar binder denna huvudman till kanoniska sessions- och
videoreferens-ID:n, lagrar endast deras SHA-256-härledda nycklar och avgränsar både läsningar
och borttagning till samma huvudman. Cachen lagrar högst 16 härledda JPEG-bildrutor
per post, låter dem upphöra efter tio minuter och stöder begränsade
`start`-/`end`-läsningar eller explicit borttagning av sessioner.

Varje huvudman är begränsad till 16 poster och 64 MiB kanoniska JPEG-data. Dessa
gränser är oberoende av det globala taket på 64 poster/256 MiB: kvottryck för en
huvudman avlägsnar endast den huvudmannens minst nyligen använda poster innan global
LRU-avlägsning övervägs. Utgångna poster rensas från både huvudmannens och den
globala redovisningen vid cacheaktivitet, medan avbrytning och valideringsfel inte
verkställer en partiell ersättning.

Cachen avvisar icke-kanonisk Base64, överflödig utfyllnad, media som inte är JPEG,
felaktiga eller trunkerade JPEG-filer samt JPEG-filer som genererar en varning under en
begränsad avkodning av hela bilden med `sharp`. Den kodar om varje godkänd bild till
en kanonisk JPEG, härleder bredd och höjd från de avkodade bytevärdena i stället för
att lita på anroparens fält och kasserar eventuella efterföljande polyglottbytevärden
i stället för att behålla dem. Endast den begränsade kanoniska komprimerade bufferten
belastas mot båda kvoterna. JSON-gränsen över anslutningen inkluderar Base64-overhead
för taket på 32 MiB avkodad indata. Varje
lagrad härledning registrerar dess validerade JPEG-format/-upplösning, samplingspolicy,
härledningsversion, skapandetid, serverberäknade innehållshash och hashade
överordnade referens samt den betrodda anroparens hash för det överordnade innehållet.
Avbrytning kontrolleras mellan asynkrona avkodnings-/hashfaser före den atomära
cacheverkställningen.

Denna delleverans ansluter ännu inte någon produktionsproducent till rutten och
tillhandahåller inte val av varianter med flera upplösningar. Den transparenta
sökvägen för Video Bridge-begäranden medför därför inget extra arbete, medan
klientorganisationsbunden härledning av huvudmän och hela FU-08-livscykeln för flera
upplösningar kvarstår som uttryckligt uppföljningsarbete i stället för att
dokumenteras som fullständigt beteende.

Bildrutor textas sekventiellt med den konfigurerade Video-modellen. En tom
Video-åsidosättning ärver Vision-inställningen. Om båda är tomma väljer Visions
automatiska router den gällande modellen med stöd för bildanalys. Lyckade bildtexter
ersätter den ursprungliga delen med ett stabilt `[Video description:`-prefix som även
markerar texten som en ej betrodd, mediehärledd observation och instruerar
nedströmsmodeller att inte följa instruktioner som hittas i mediet. Cachenycklar för
bildrutetexter inkluderar JPEG-bytevärdena, prompten, tidsstämpeln och den gällande
modellen. Endast lyckade bildtexter cachelagras. Cacheposter behåller den faktiska
producentmodell som lyckades, inklusive en reservmodell. Bryggan rapporterar `mixed`
när olika bildrutor har producerats av olika modeller. En cacheträff återanvänder
denna producentidentitet i stället för att märka om den som den begärda
routningsplanen. Cachen för resultat för hela videon nycklas på varje indata som
ändrar utdata — prompt, gällande modell, samplingspolicy, antal bildrutor, semantiskt
analysläge, SHA-256-fingeravtrycket för den normaliserade fokuseringsledtråden,
fokusfönster, `transcript`, `audioTranscript` och kontaktkartflaggan — så att en
ändring av någon av dessa dimensioner innebär en cachemiss, aldrig återanvändning av
inaktuella data. Policyns version och tröskelvärde för visuell deduplicering samt det
begränsade antalet kandidatbildrutor ingår också uttryckligen i resultatcachens nyckel
och metadata. En policyändring kan därför inte återanvända en inaktuell beskrivning
av hela videon. Resultatcachemetadata för v4 behåller läget och fingeravtrycket,
aldrig den obearbetade användaruppgiften. Skyddsräckesmetadata rapporterar både det
begärda och det gällande analysläget. Ett begärt `focused`-läge utan användbar
användartext rapporteras som i praktiken `full`.

Skyddsräcket extraherar varje videodel som stöds men beskriver inte fler än
`modalityBridgeVideoMaxVideos`. För ett mål som bevisligen har
`supportsVideo === false` omvandlas misslyckade videor och videor över gränsen till
explicita säkra textmarkörer så att ingen obearbetad video finns kvar. När
kapaciteten är okänd behåller dessa delar sin videobärare. Eventuella
reservtranskriptioner följer den begränsade textkonverteringen ovan. Mål med
`supportsVideo === true` kringgår bryggan. Avbrottssignalen för klientbegäran
fortplantas genom hämtning, broker-kö, underprocesser och bildtextanrop. Avbrott
stoppar mellan videor och fallerar aldrig öppet till obearbetade medier.

Körtidsinställningarna lagras i en databas och valideras med Zod:

| Nyckel                              | Standardvärde | Intervall/beteende                                                                                                |
| ----------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`       | Valfri körningsmiljö, aktivt val                                                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`      | `full` bevarar generiska bildtexter; `focused` använder avgränsad, ej betrodd kontext från den senaste användaren |
| `modalityBridgeVideoModel`          | `""`          | Ärv modellen från Vision Bridge                                                                                   |
| `modalityBridgeVideoFrameCount`     | `8`           | 1–16                                                                                                              |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`   | `uniform`, `scene_aware` eller proportionell `segment_aware`; detektorfel leder till återgång till `uniform`      |
| `modalityBridgeVideoMaxVideos`      | `1`           | 1–4                                                                                                               |
| `modalityBridgeVideoTimeout`        | `120000`      | 1000–120000 ms                                                                                                    |

Äldre beständigt lagrade timeoutvärden för Video över 120 sekunder begränsas till
förmedlarens tidsgräns; nya inställningar som skrivs över denna gräns avvisas.
`GET /api/modality-bridge/video/runtime` kräver betrodd, stämplad lokal
loopback-anslutning före autentisering eller kontroll av körningsmiljön, och
därefter krävs administrationsautentisering. Den returnerar endast `available`,
sanerade FFmpeg-/ffprobe-versioner och en fast anledning när körningsmiljön inte
är tillgänglig. Den interna extraheringsslutpunkten är inte ett offentligt
uppladdnings-API: mättnad i kön returnerar `503` plus `Retry-After`, en
frånkoppling från anroparen returnerar `499` och förmedlarens fasta tidsgräns
returnerar `504`. Konverterade svar lägger till
`video->text;model=<visionModel>;parts=<videos>` i det centrala
`x-omniroute-modality-bridge`-huvudet utan att ta bort Vision- eller
Audio-segment.

### PII-maskerare (`piiMasker.ts`)

Körs i **båda** stegen.

- **`preCall`** klonar nyttolasten, går igenom `system`, `messages`, `input` och
  `prompt` (inklusive objekt som består av rena strängar) och tillämpar
  `processPII()` (från `@/shared/utils/inputSanitizer`) på strängfälten
  `content`/`text`. När `PII_REDACTION_ENABLED=true` maskeras identifierade PII
  i den utgående nyttolasten. Detta är oberoende av `INPUT_SANITIZER_MODE` (som
  endast styr principen för promptinjektion). När maskering är inaktiverad
  registrerar anropet antalet identifieringar utan att skriva om innehållet.
- **`postCall`** djupklonar svaret, kör `sanitizePIIResponse()` samt maskeraren
  för Responses API-formatet (`maskResponsesOutput` — omfattar
  `output_text` och `output[].content[].text`). Om någon maskering sker ersätter
  det modifierade svaret originalet.

Skyddsräcket blockerar aldrig; det lägger endast till annoteringar
(`meta.detections`, `meta.redacted`) eller skriver om innehåll.

### Promptinjektion (`promptInjection.ts`)

Identifierar fientliga strukturer i innehåll som tillhandahålls av användaren
och tillämpar den konfigurerade principen. Beteendet styrs av miljövariabler och
konstruktoralternativ:

| Inställning        | Miljövariabel                                                                                               | Standardvärde | Effekt                                                                                                                                                                                         |
| ------------------ | ----------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiverad          | `INPUT_SANITIZER_ENABLED`                                                                                   | `true`        | När värdet är `false` avslutas skyddsräcket omedelbart.                                                                                                                                        |
| Läge               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                             | `warn`        | Injektionsprincip: `block`, `warn` eller `log`. (`redact` godtas för bakåtkompatibilitet men tar **inte** bort injektionstext; omskrivning av PII i begäran styrs av `PII_REDACTION_ENABLED`.) |
| Blockeringströskel | Alternativet `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`        | Lägsta allvarlighetsgrad som krävs för blockering. Medium är endast observerande med standardinställningen.                                                                                    |

**Prioritetsordning för läge** (`getMode`): anroparens `options.mode` →
**åsidosättning via DB-funktionsflaggan** `INJECTION_GUARD_MODE`
(Instrumentpanel → Inställningar → Funktionsflaggor) →
miljövariabeln `INJECTION_GUARD_MODE` → miljövariabeln
`INPUT_SANITIZER_MODE` → `warn`. En åsidosättning via instrumentpanelen har
därför företräde framför miljövariablerna, så användargränssnittet för
funktionsflaggor styr det aktiva skyddet direkt (ingen omstart krävs).
DB-läsningen är felsäker: om den misslyckas återgår skyddet till det
miljövariabelbaserade beteendet, och när ingen åsidosättning har angetts är
beteendet identiskt med en lösning som enbart använder miljövariabler.

Identifieringskällor:

1. `sanitizeRequest()` från `@/shared/utils/inputSanitizer` (gemensam
   uppsättning detektorer som används på andra ställen i pipelinen).
2. Inbyggda `DEFAULT_GUARD_PATTERNS` (för närvarande
   `system_override_inline` och `markdown_system_block`, båda med
   allvarlighetsgraden `high`).
3. Valfria `customPatterns` som skickas via konstruktoralternativ (strängar,
   reguljära uttryck eller poster av typen `{ name, pattern, severity }`).

När `mode === "block"` **och** minst en detektering uppfyller tröskelvärdet för
allvarlighetsgrad returnerar `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }`. I lägena `warn`/`log` loggar skyddsmekanismen men
tillåter anropet. Den delade hjälpfunktionen `evaluatePromptInjection()` exporteras också
för anropare som behöver utvärdera prompter utan att gå via registret.

**Skanningsgräns (v3.8.20):** detektorn granskar endast de **första 16 kB** av
den sammanfogade prompttexten — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) i
`src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` och
`evaluatePromptInjection()` anropar `slice(0, MAX_INJECTION_SCAN_BYTES)` innan
mönsterloopen körs. Injektionsdirektiv finns nära början av indata, så detta
begränsar regexens CPU-/GC-användning för nyttolaster på flera hundra kB utan att försämra detekteringen (jfr
#3932, #4041).

### Maskering av autentiseringsuppgifter (`credentialMasker.ts`)

Körs i **båda** stegen, sist i standardkedjan (prioritet `95`). Maskerar
välkända mönster för API-nycklar/hemliga token i den utgående nyttolasten (meddelandeinnehåll,
verktygsanropsargument, verktygsresultat) **och** leverantörens svar, så att en
autentiseringsuppgift som klistrats in i en prompt (eller ekats tillbaka av ett verktygsresultat) inte läcks
till den externa leverantören eller tillbaka till klienten.

- **Endast efter uttryckligt val**, samma konvention som för bortredigering av personuppgifter (i anslutning till hård regel nr 20):
  inaktiverad om inte `settings.credentialRedactionEnabled === true` **eller**
  `CREDENTIAL_REDACTION_ENABLED=true`. När den är avstängd gör skyddsmekanismen ingenting —
  den blockerar aldrig och skriver aldrig om.
- `redactCredentials()` går igenom hela nyttolast-/svarsträdet (`walkValue()`,
  säkert mot prototypförorening, cykelsäkert via `WeakSet`) och ersätter träffar med
  platshållaren `[REDACTED:<type>]`, samtidigt som endast de grenar som faktiskt
  ändrats klonas.
- `CREDENTIAL_PATTERNS` omfattar nycklar för LLM-leverantörer (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-token (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betalningsnycklar (Stripe, Square), molnnycklar
  (AWS-åtkomstnyckel, Twilio, SendGrid, Mailgun), privata nycklar/JWT:er,
  anslutningssträngar som innehåller autentiseringsuppgifter (`mongodb://user:pass@...` osv.) samt
  ett generiskt mönster för rubrikvärdena `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Rubrikformade nycklar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) redigeras strukturellt (endast värdet; schemaprefix som
  `Bearer `/`Basic ` bevaras) i stället för via det generiska text-reguljära uttrycket.
- Skyddsmekanismen blockerar aldrig; den skriver endast om (`modifiedPayload` /
  `modifiedResponse`) och annoterar (`meta.credentialsRedacted`, `meta.count`).

Regressionsskydd: `tests/unit/credential-masker-guardrail.test.ts`.

## Baskontrakt (`base.ts`)

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
  block?: boolean; // true kortsluter kedjan
  message?: string; // visas vid blockering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneras av preCall för att skriva om begäran
  modifiedResponse?: TValue; // returneras av postCall för att skriva om svaret
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

En "guardrail" signalerar "ingen ändring" genom att returnera antingen `void`, `{}`, eller
`{ block: false }`. Att returnera en `modifiedPayload`/`modifiedResponse` ersätter
värdet som flödar genom kedjan för nedströms "guardrails".
`signal?: AbortSignal` överför anroparens livscykel till "guardrails". En avbruten begäran är det avsiktliga "fail-open"-undantaget: mediabryggor stoppar arbetet och rensar upp utan att återställa råmedia till ett mål som inte förväntas stödja det.

## Register (`registry.ts`)

Singleton-objektet `guardrailRegistry` exponerar:

- `register(guardrail)` — lägger till (eller ersätter med normaliserat namn) en "guardrail" och
  sorterar om efter stigande `priority`.
- `clear()` / `list()` — administrativa hjälpfunktioner.
- `runPreCallHooks(payload, context)` — itererar aktiva "guardrails", skickar
  "payload" genom `modifiedPayload`, och stoppar vid den första `block: true`.
- `runPostCallHooks(response, context)` — samma flöde på svarsidan.
- `resetGuardrailsForTests({ registerDefaults })` — rensar tillstånd och registrerar
  valfritt om standardinställningarna för ren testisolering.

Båda körarna returnerar `{ blocked, payload|response, results, guardrail?, message? }`
där `results` är en array av `GuardrailExecutionResult`-poster som inkluderar
`blocked`, `skipped`, `modified`, `error` och `meta`-fält per "guardrail",
användbara för spårning.

### Inaktivera Guardrails per Begäran

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` aggregerar en
avdubblerad lista över "guardrail"-namn som ska hoppas över för den aktuella
begäran. Källor (alla valfria, alla sammanfogade):

- `apiKeyInfo.disabledGuardrails`
- Begärans kropp `disabledGuardrails` (högsta nivån)
- Begärans kropp `metadata.disabledGuardrails`
- Rubrik `x-omniroute-disabled-guardrails` (eller äldre
  `x-disabled-guardrails`)

Värden kan vara arrayer av strängar eller en kommaavgränsad sträng; namn
normaliseras till gemener kebab-case (`pii_masker` → `pii-masker`). Resultatet
skickas via `context.disabledGuardrails` till registret, som hoppar över
matchande "guardrails" (`skipped: true` i `results`).

## Exekveringsordning

För varje förfrågan som flödar genom `src/sse/handlers/chat.ts` och
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` bygger hopplistan från API-nyckel, brödtext
    och rubriker.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` kör skyddsräcken i stigande
    prioritetsordning:
    - Inaktiverade skyddsräcken registreras som `skipped`.
    - Varje skyddsräckes `preCall` kan skriva om nyttolasten via `modifiedPayload`.
    - Den första `block: true` kortsluter kedjan och hanteraren returnerar
      ett avvisningssvar från skyddsräcket.
3.  Den (potentiellt omskrivna) nyttolasten flödar in i kombinationsdirigering och uppströms
    vidarebefordran.
4.  Efter att svaret har sammanställts kör `guardrailRegistry.runPostCallHooks(...)`
    samma kedja på svaret. `block: true` här släpper det uppströms
    svaret.

Skyddsräcken som kastar ett fel registreras med `error: <message>` och loggas via
`logger.warn`, men kedjan fortsätter – fail-open per design.

## Konfiguration

Miljövariabler som läses av de inbyggda skyddsräckena:

| Variabel                              | Används av               | Effekt                                                                                                   |
| :------------------------------------ | :----------------------- | :------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Sätt `false` för att helt inaktivera detektering.                                                        |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Injektionspolicy: `warn`, `block` eller `log`. Det äldre värdet `redact` skriver inte om injektionstext. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Läge för injektionsskyddet; även en DB-funktionsflagga som **åsidosätter** miljövariablerna (DB > ENV).  |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Minsta allvarlighetsgrad som `MODE=block` avvisar: `high` (standard), `medium` eller `low`.              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Äldre alias för `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                       |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | När `true` redigeras PII i förfrågan (oberoende av injektionsläge).                                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nedströms) | Styr maskeringsbeteendet på svarssidan.                                                                  |

Modality Bridge-skyddsräckena läser körningskonfiguration från den DB-stödda inställningsbutiken
(`getSettings()`), inte miljövariabler. Visions primära nycklar är
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` och
`modalityBridgeCacheMaxEntries`. De äldre
`visionBridge*`-nycklarna accepteras endast som den dokumenterade en-cykels läs-
fallbacken; instrumentpanelsskrivningar använder de primära nycklarna. Standardvärden och fallback-
upplösaren finns i `src/shared/constants/modalityBridgeDefaults.ts`, med äldre
konstanter bevarade i `src/shared/constants/visionBridgeDefaults.ts`.

Ljud använder `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` och `modalityBridgeAudioMaxClips`, plus de delade
`modalityBridgeCache*`-inställningarna. Ljud har ingen fallback för äldre nycklar eftersom dessa
nycklar introducerades med Modality Bridge-schemat.

Video använder `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` och
`modalityBridgeVideoTimeout`, plus de delade `modalityBridgeCache*`-inställningarna.
Det är inaktiverat som standard eftersom FFmpeg/ffprobe är valfria operativa
beroenden och bildtextning av ramar lägger till latens och modellkostnad.

## Anpassade Guardrails

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

Steg:

1.  Skapa `src/lib/guardrails/myGuardrail.ts` som utökar `BaseGuardrail`.
2.  Implementera `preCall` och/eller `postCall`.
3.  Registrera antingen vid importtillfället (push från `registerDefaultGuardrails`) eller
    anropa `guardrailRegistry.register(...)` vid körning – registret ersätter
    alla tidigare guardrails med samma normaliserade namn.
4.  Lägg till tester under `tests/unit/` (befintliga exempel:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Testning

Använd `resetGuardrailsForTests()` mellan tester för att starta från ett känt tillstånd.
Skicka `{ registerDefaults: false }` för att starta med ett tomt register och
registrera endast de guardrails som testas. Vision Bridge accepterar beroendeinjektion
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge exponerar motsvarande
gränssnitt för inställningar, funktioner, STT-modellval, autentiseringskontroller och transkription.
Tester kan därför utföra båda flödena utan DB- eller nätverksåtkomst.

## Se även

- `src/lib/guardrails/` — implementering
- `src/shared/utils/inputSanitizer.ts` — delad detektor som driver
  prompt-injektion och PII-maskering
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge standardinställningar och
  lista över tvingade-bryggmodeller
- `src/shared/constants/modalityBridgeDefaults.ts` — delade Vision/Audio körningsstandardinställningar
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalt lager (strömbrytare, nedkylningstider)
- `docs/reference/ENVIRONMENT.md` — fullständig referens för miljövariabler

## Täckning av injektionsskyddsrutter & red-team (Fas 8 · Block D)

Injektionsskyddet (`createInjectionGuard` / `withInjectionGuard`) täcker alla rutter
som accepterar användarprompter. Det respekterar `INJECTION_GUARD_MODE` (standard `warn` = logga endast;
`block` = returnerar HTTP 400 `SECURITY_001`).

| Typ              | Rutter                                                                                                                                               | Standardläge |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :----------- |
| Text (befintlig) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | varna        |
| Generativ        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | varna        |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | varna        |

Textutvinning (`extractMessageContents`) täcker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nattlig, `nightly-llm-security.yml`):** promptfoo validerar att varje rutt blockerar
OWASP-LLM-korpusen i `INJECTION_GUARD_MODE=block`; garak kör sonder (hoppar över utan hemlighet).
`moderations` inkluderas för konsekvens – operatörer i block-läge kan undanta den via
`resolveDisabledGuardrails`.

Det nattliga arbetsflödet (`.github/workflows/nightly-llm-security.yml`, cron + manuell
dispatch) har två jobb:

- **`promptfoo-guard` (blockerande)** – kör `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Varje fientligt fall (t.ex. "ignorera alla
  tidigare instruktioner...", DAN-liknande jailbreaks) bekräftar att svaret innehåller
  `error.code === "SECURITY_001"`, dvs. att skyddet faktiskt avvisade begäran.
- **`garak` (rådgivande)** – kör garak `--probes promptinject,dan,leakreplay`
  mot en lokal OmniRoute-instans (`http://localhost:20128/v1`). Begränsas av en
  leverantörshemlighet (`PROMPTFOO_PROVIDER_KEY`); hoppar över graciöst och är suffixerat
  `|| true`, så det rapporterar utan att CI misslyckas.

Täckningen av skyddshjälpen (`createInjectionGuard` / `withInjectionGuard`)
spänner över varje promptbärande `/v1`-rutt; prompttext hämtas från
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` av
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
