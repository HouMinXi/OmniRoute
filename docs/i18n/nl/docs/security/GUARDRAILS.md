# Guardrails (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Bron van waarheid:** `src/lib/guardrails/`
> **Laatst bijgewerkt:** 2026-08-29 — v3.8.51 (de herkomst van Video Bridge-transcripties wordt door de aanroeper opgegeven,
> en wordt nog niet door de server geverifieerd — verduidelijkt conform #11661)

Guardrails dwingen veiligheidsregels, beleidsregels en inhoudstransformaties af op de grens
tussen OmniRoute en upstreamproviders. Elke guardrail kan requestpayloads (`preCall`) en
upstreamresponses (`postCall`) inspecteren (en optioneel weigeren, transformeren of annoteren).

Het systeem is **fail-open**: als een guardrail tijdens de uitvoering een fout veroorzaakt,
registreert het register de fout en gaat het verder met de volgende guardrail in plaats van
het request te laten mislukken. Blokkeren is een expliciete beslissing (`block: true`), nooit een ongeluk.

## Ingebouwde beveiligingsmechanismen

Het register laadt bij import automatisch zes beveiligingsmechanismen in volgorde van prioriteit
(zie `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteit | Naam                | Fase(n)        | Bestand               |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lagere prioriteitsnummers worden **eerst** uitgevoerd.

### Vision Bridge (`visionBridge.ts`) — Modaliteitsbridge PR-1

Onderschept aanvragen met afbeeldingen die zijn gericht aan **modellen zonder vision-ondersteuning** en leidt de volledige aanvraag om naar een model met vision-ondersteuning, of vervangt vóór de upstream-aanroep de afbeeldingsonderdelen door tekstuele beschrijvingen die door een configureerbaar vision-model zijn gegenereerd. Hierdoor kunnen providers die uitsluitend tekst ondersteunen op transparante wijze multimodale payloads verwerken.

Verloop:

1. Overslaan als het doelmodel vision al ondersteunt (tenzij het voorkomt in de lijst met modellen waarvoor de bridge wordt afgedwongen, `isVisionBridgeForcedModel`).
2. Afbeeldingsonderdelen extraheren via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), dat de verwerking delegeert aan de **uniforme mediadetector** `detectMediaParts()` in `open-sse/utils/mediaParts.ts` — de
   enige bron van waarheid die wordt gedeeld met het compatibiliteitsfilter voor combo's.
   Extractie is via een allowlist beperkt tot onderdelen op het hoogste niveau met vormen die
   `replaceImageParts` opnieuw kan invoegen (het extractie↔vervangingscontract): OpenAI
   `image_url`, Anthropic-base64 `source.type:"base64"`, Anthropic-URL
   `source.type:"url"` en Responses API `input_image`. Geneste treffers en
   vormen die uitsluitend als indicator dienen, zijn materiaal voor het combo-filter en worden nooit geëxtraheerd.
   Overslaan als er geen worden gevonden.
3. Runtimeconfiguratie oplossen via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nieuwe instellingen met sleutels van `modalityBridge*`
   hebben voorrang; verouderde sleutels van `visionBridge*` blijven als **fallback gedurende één cyclus**
   beschikbaar (rollbackvenster). Overslaan vóór het doorlopen van media als de
   bridge is uitgeschakeld.
4. De moduskiezer (`modalityBridgeVisionMode`, zie onderstaande tabel) bepaalt
   omleiden versus beschrijven. Omleiden retourneert `modifiedPayload` waarbij alleen `model`
   is vervangen, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beschrijvingspad: beperk afbeeldingen tot `maxImages`, stel de taakgerichte prompt samen,
   raadpleeg de beschrijvingscache, roep het vision-model **parallel** aan
   (`Promise.allSettled`) en voeg op hun plaats tekstdelen in met `[Image N]: <description>`.
   Een mislukte beschrijving levert `null` op en het oorspronkelijke afbeeldingsonderdeel
   blijft **behouden** (#4012) — behalve in het combo-beschrijvingspad wanneer elke
   beschrijving is mislukt; in dat geval krijgt een bevestigde upstream zonder vision-ondersteuning in plaats daarvan de
   tijdelijke tekst `(unavailable — no vision-capable provider connected)` (#8430).
6. Retourneer `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Moduskiezer (`modalityBridgeVisionMode`)

| Modus      | Standaard | Gedrag                                                                                                                                                                                                                                                                                                                                                          |
| ---------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔         | Bestaande heuristiek, ongewijzigd (#6640/#7204): niet-combo-/`auto/`-modellen worden omgeleid naar het beste vision-model, tenzij het oorspronkelijke model al bruikbare referenties heeft (dan beschrijven); combo-doelen worden altijd beschreven.                                                                                                            |
| `describe` |           | Altijd beschrijven — het omleidingsblok wordt volledig overgeslagen; het door de gebruiker gekozen model antwoordt altijd.                                                                                                                                                                                                                                      |
| `reroute`  |           | Omleiding afdwingen: de beveiliging die modellen met referenties behoudt, wordt omzeild. De referentiebeveiliging voor het omleidings**doel** blijft van toepassing — wanneer er geen bruikbaar vision-doel bestaat, valt de aanvraag terug op beschrijven, zodat onbewerkte afbeeldingen nooit een backend bereiken die uitsluitend tekst ondersteunt (#8430). |

Afgedwongen modi stoppen de verwerking **voordat** de automatische heuristiek wordt uitgevoerd; het gedrag van `auto`
is byte-identiek aan het beveiligingsmechanisme van vóór PR-1.

#### Bereik van API-sleutels (`visionBridgeKeyScope.ts`)

Wanneer de API-sleutel van de aanroeper `allowedConnections`, quotapools
(`allowedQuotas`) of modellen (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) beperkt, kiest de bridge alleen
omleidings- en beschrijvingsmodellen die de sleutel mag gebruiken, via verbindingen die de sleutel mag
gebruiken. De beschrijvingsaanroep verloopt vervolgens altijd via de OmniRoute-zelflus met
de header `x-omniroute-self-loop-key-id`, zodat de ontvangende chataanvraag
het verbindings- en modelbeleid van die sleutel opnieuw afdwingt. `enforceApiKeyPolicy()`
honoreert die header alleen in combinatie met de bearer van de zelflus, zodat deze alleen
toegang kan beperken; een id dat niet kan worden herleid, wordt geweigerd.

Als er voor de sleutel geen vision-model is toegestaan, treedt het beschrijvingspad terug en
wordt de aanvraag ongewijzigd doorgegeven, hetzelfde fail-open-gedrag als bij een uitgeschakeld
beveiligingsmechanisme (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Aanvragen zonder sleutel en sleutels zonder deze beperkingen gedragen zich precies zoals
voorheen.

#### Taakgerichte beschrijvingsprompt (`modalityBridgeVisionTaskAware`)

Standaard **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) voegt
de tekst van het **laatste gebruikersbericht** (afgekapt tot 500 tekens) toe aan
de basisprompt voor de beschrijving, waardoor de beschrijving wordt gestuurd naar
wat de gebruiker daadwerkelijk heeft gevraagd (codex-vision-proxy-patroon) en het
visiemodel wordt gevraagd zichtbare tekst te transcriberen. Als de vlag is
uitgeschakeld — of er geen gebruikerstekst is — wordt de basisprompt ongewijzigd gebruikt.

Het eigen OpenAI-compatibele verzoek van de zelflus voor beschrijvingen (`callVisionModelSingle()`
in `visionBridgeHelpers.ts`) vraagt altijd om `image_url.detail: "high"` —
onvoorwaardelijk, voor elke aanroeper/provider, en niet afhankelijk van enig clientsignaal.
Sampling met weinig detail verslechtert de OCR-nauwkeurigheid voor precies de
teksttranscriptietaak waar deze prompt om vraagt. Daarom vraagt de beschrijvingsaanroep
zelf altijd om veel detail, ongeacht het detailniveau dat het oorspronkelijke inkomende
verzoek gebruikte. Dit heeft alleen invloed op de interne requestbody voor de beschrijving;
het verandert niet hoe OmniRoute de eigen `image_url.detail` van de aanroeper doorstuurt
in het primaire verzoek — die standaardwaarde wordt afzonderlijk toegepast, en alleen
voor gedetecteerde OpenCode-clients, in `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). De Anthropic-wire-format-tak van de
zelflus voor beschrijvingen heeft geen `detail`-veld en wordt door geen van beide
standaardwaarden beïnvloed.

#### Limiet voor beschrijvingsuitvoer (`modalityBridgeVisionMaxChars`)

| Sleutel                        | Standaard | Bereik           |
| ------------------------------ | --------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`       | `0` of 100–50000 |

`0` (standaard) betekent **geen limiet** — de door `callVisionModel()`
geretourneerde beschrijving wordt ongewijzigd doorgegeven, waardoor het bestaande
gedrag behouden blijft. Elke waarde binnen het bereik 100–50000 kapt de beschrijving
af met een `…`-achtervoegsel voordat deze opnieuw wordt ingevoegd als
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` in
`src/lib/guardrails/visionBridge.ts`). Verhoog dit voor detailrijke OCR-taken waarbij
het downstreammodel de volledige transcriptie nodig heeft; verlaag het om het
tokengebruik van breedsprakige visiemodellen te begrenzen. Het dashboardveld bevindt
zich in het paneel Geavanceerd van het tabblad Vision
(`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) en verhoogt elke
waarde tussen 1 en 99 tot de ondergrens van 100, terwijl een expliciete `0`
ongemoeid blijft — `0` is op zichzelf een geldige Zod-waarde
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), niet slechts
de standaardwaarde voor ‘niet ingesteld’.

#### Beschrijvingscache (`modalityBridge/bridgeCache.ts`)

Procesbreed gedeelde LRU- + TTL-cache in het geheugen voor beschrijvingsuitvoer.
Sleutel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` met
lengteprefixframing (geen botsingen tussen veldgrenzen). De modelcomponent is
het **geconfigureerde** bridge-model, niet het model dat daadwerkelijk antwoordde —
`callVisionModel` kan intern terugvallen op een alternatief, en het gebruik van een
sleutel per poging zou de cache fragmenteren. Mislukte beschrijvingen worden nooit
gecachet. Instellingen:

| Sleutel                         | Standaard | Bereik  |
| ------------------------------- | --------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`    | —       |
| `modalityBridgeCacheTtlMinutes` | `60`      | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`     | 10–5000 |

#### Normalisatie van externe afbeeldingen (zelflusbeschrijving/base64-ophaling)

Wanneer de bridge zelf een **externe** afbeelding ophaalt — voor de Anthropic-zelfaanroep
voor beschrijvingen en de base64-conversie voor het claude-wire-format
(`ensureBase64ImagesForClaudeWire`), beide via `fetchRemoteImageAsDataUri()`
in `visionBridgeHelpers.ts` — wordt de resulterende data-URI door
`normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) verwerkt voordat deze
in het verzoek aan het visiemodel wordt opgenomen. Te grote afbeeldingen worden
verkleind tot een **lange zijde van 2048px** (overeenkomstig de limiet voor
verkleining die OpenAI/Anthropic al server-side toepassen), wat het aantal
uploadbytes en de latentie vermindert zonder te veranderen wat het visiemodel ziet.
Voor het verkleinen wordt `sharp` gebruikt, geladen via dynamische import: op een
platform waar het native binaire bestand niet kan worden geladen, werpt
`normalizeDataUri()` **nooit een fout op** — het valt terug op het ongewijzigd
doorgeven van de oorspronkelijke bytes, zodat het pad voor beschrijving/base64-conversie
altijd blijft werken. Bytes die geen afbeelding vormen (een ophaalactie die geen
decodeerbare afbeelding retourneerde) worden eveneens ongewijzigd doorgegeven.
Deze normalisatie is beperkt tot afbeeldingen die de bridge voor zijn eigen
zelfaanroep ophaalt — ze wordt nooit toegepast op de onbewerkte passthrough-payload
van de aanroeper, in overeenstemming met het principe dat mutaties uitsluitend
opt-in zijn (harde regel #20).

#### Instellingenschema + migratie

De nieuwe `modalityBridge*`-sleutels worden met Zod gevalideerd in
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, het
`modalityBridgeCache*`-trio en de `modalityBridgeAudio*`-groep die door de
Audio Bridge wordt gebruikt. Migratie `141_modality_bridge_settings.sql`
kopieert bestaande verouderde `visionBridge*`-waarden naar de overeenkomende
nieuwe sleutels (idempotent en zonder ooit een door een beheerder ingestelde
`modalityBridge*`-waarde te overschrijven); de verouderde sleutels blijven
gedurende één releasecyclus geaccepteerd als fallback bij het lezen.

#### Transparantieheader + statistieken

Antwoorden die via een beschrijving zijn getransformeerd, bevatten
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(opgebouwd door `buildModalityBridgeHeader()` in `modalityBridge/bridgeStats.ts`,
toegevoegd door `withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`).
Omgeleide verzoeken krijgen **geen** header — de payload bleef ongewijzigd en de
modelwissel is al zichtbaar in het `model`-veld van de responsebody.

`GET /api/modality-bridge/stats` (beheer-authenticatie, hetzelfde niveau als
`GET /api/settings`) retourneert de in-memory tellers per modaliteit
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` voor `vision`, `audio` en
`video`. `averageLatencyMs` gebruikt `latencySamples`, en niet alle pogingen, als
noemer; een bewerking zonder tijdmeting creëert geen fictieve meting van nul
milliseconden. `bridged` blijft de achterwaarts compatibele alias voor geslaagde
conversies; mislukte pogingen verhogen deze teller niet.
De tellers worden door het ontwerp bij een procesherstart gereset
(telemetrie, geen boekhouding).

#### Dashboardconfiguratie

De speciale dashboardpagina is
`/dashboard/settings/modality-bridge`. De via URL adresseerbare tabbladen `Vision`, `Audio`
en `Video` behouden queryparameters terwijl de waarde van `tab` wordt gewijzigd.
Het tabblad Vision biedt inschakeling, modus, modelselectie (inclusief de automatische
standaardwaarde), taakbewuste prompts, geavanceerde limieten voor time-out, afbeelding,
beschrijvingslengte en cache, runtime-
tellers en een beveiligd voorbeeldverzoek. Het tabblad Audio is eveneens actief: het biedt
inschakeling, een uitsluitend voor STT bedoelde modelkiezer met Auto, limieten voor time-out
en maximale cliplengte, audiotellers en een `input_audio`-voorbeeldtest. Het tabblad Video is
functioneel: het rapporteert de runtimestatus van FFmpeg/ffprobe — een van vier expliciete
UI-statussen (`unknown` zolang de controle wordt uitgevoerd of niet kon worden voltooid,
`restricted` op een niet-loopback-dashboardhost waarop de controle client-side wordt
overgeslagen, `unavailable` nadat is gecontroleerd en de afwezigheid is bevestigd, of
`available` met de FFmpeg/ffprobe-versies) — bewaart limieten voor inschakeling, model,
frames, video en time-out, filtert de modelkiezer op modellen die vision ondersteunen,
en toont videotellers.

De voormalige Vision Bridge-kaart onder de AI-instellingen is een compatibiliteitslink naar de
nieuwe pagina; deze beheert niet langer een tweede kopie van het formulier. Media Providers
koppelt ook de workflows Image-to-Text en Speech-to-Text aan de bijbehorende tabbladen van
Modality Bridge, zonder de bestaande Speech-to-Text-playground te verwijderen.

**Omzeiling van toelatingscontrole voor self-loops:** wanneer de describe-aanroep via
OmniRoute's eigen `/v1`-self-loop wordt gerouteerd (niet-standaard providermodel), verzendt
het subverzoek `x-omniroute-admission-bypass: internal` en wordt het geauthenticeerd met de
vastgestelde self-loop-referentie — de lokale `sk_omniroute`-sentinel in lokale modus, of de
door de beheerder geconfigureerde omgevingssleutel `OMNIROUTE_API_KEY` / `ROUTER_API_KEY`
(#1350), zodat implementaties met `REQUIRE_API_KEY=true` de describe-aanroep nog steeds
kunnen uitvoeren. De omzeiling wordt alleen voor exact die referenties geaccepteerd, zodat
externe clients de header niet kunnen gebruiken om de toelatingscontrole over te slaan.

Verouderde standaardwaarden staan in `src/shared/constants/visionBridgeDefaults.ts`; de
nieuwe standaardwaarden voor modus, taakbewust gedrag en cache, evenals de instellingenresolver,
staan in `src/shared/constants/modalityBridgeDefaults.ts`. De guardrail biedt een
`deps`-constructoroptie, zodat tests nepimplementaties van `getSettings` en
`callVisionModel` kunnen injecteren.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Onderschept chatverzoeken met audio voordat ze een doel bereiken waarvan niet bekend is
dat het audio-invoer accepteert. Het chatverzoek wordt nooit omgeleid: audiodelen worden
getranscribeerd via het bestaande OpenAI-compatibele multipart-eindpunt en het gekozen
chatmodel gaat verder met teksttranscripties.

Verloop:

1. Bepaal `supportsAudio` via `getResolvedModelCapabilities()`. Expliciete
   metadata uit het providerregister heeft voorrang, gevolgd door statische modelmetadata
   en vervolgens gesynchroniseerde `modalities_input`. Een opgegeven invoerlijst zonder
   `audio` is `false`; als er geen bewijs over de mogelijkheden is, blijft de waarde `null`.
   Zowel `false` als `null` activeren de conservatieve bridge, terwijl `true` deze omzeilt.
2. Bepaal de `modalityBridgeAudio*`-instellingen en extraheer samenvoegbare audiodelen op het
   hoogste niveau uit elk bericht via de gedeelde detector `detectMediaParts()`.
   Ondersteunde wire-formaten zijn OpenAI `input_audio`, `audio_url` en
   `source.media_type: "audio/*"`. Geneste audio wordt gedetecteerd voor routering, maar
   niet verwijderd via het samenvoegpad. De verwerking wordt begrensd door
   `modalityBridgeAudioMaxClips`; latere delen blijven ongewijzigd.
3. Gebruik een geconfigureerde `provider/model`, of laat `selectAudioBridgeModel()`
   `AUDIO_TRANSCRIPTION_PROVIDERS` in stabiele catalogusvolgorde doorlopen en het eerste
   model selecteren met bruikbare, actieve providerreferenties.
4. `callAudioTranscription()` converteert base64-/data-URI-audio naar een multipart-
   `file`, of downloadt een externe `audio_url` via de uitsluitend openbare uitgaande
   beveiliging met DNS-pinning en een limiet van 25 MB. Vervolgens wordt het bestand en
   geselecteerde model via POST naar de lokale `/v1/audio/transcriptions`-self-loop
   verzonden, geauthenticeerd met `resolveSelfLoopBearer()`. De bestaande transcriptieroute
   voert de normale referentiezoekactie, cooldown-/snelheidslimietafhandeling en
   providerdispatch uit.
5. Geslaagde aanroepen vervangen hun delen door `[Audio N]: <transcript>`. Aanroepen
   worden uitgevoerd met `Promise.allSettled`: bij een afzonderlijke fout blijft het
   oorspronkelijke audiodeel behouden (#4012-contract). Als alle aanroepen mislukken en
   bewezen is dat het doel `supportsAudio === false` heeft, worden de delen
   `[Audio N]: (niet beschikbaar — geen STT-provider verbonden)` (#8430-contract). Voor
   een onbekend doel (`null`) blijft bij een volledig mislukt resultaat alles
   ongewijzigd. Een bewezen doel dat uitsluitend tekst ondersteunt en geen bruikbare
   STT-referenties heeft, ontvangt dezelfde expliciete tijdelijke aanduiding zonder een
   netwerkaanroep uit te voeren.

Geslaagde transcripties gebruiken de procesbrede LRU-/TTL-cache van Modality Bridge. De
sleutel combineert de audioverwijzing, het stabiele bewerkingslabel `audio-transcription`
en het geselecteerde STT-model; fouten worden nooit gecachet. Audiopogingen werken de
gedeelde tellers `bridged`, `cacheHits`, `failures` en `lastUsedAt` bij.
Getransformeerde antwoorden bevatten
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; ongewijzigde
verzoeken krijgen geen Audio Bridge-segment.

Runtime-instellingen worden ondersteund door de database en gevalideerd met Zod:

| Sleutel                       | Standaard | Bereik                |
| ----------------------------- | --------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`    | —                     |
| `modalityBridgeAudioModel`    | `""`      | Automatisch of STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`   | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`       | 1–10                  |

De gedeelde cache blijft worden beheerd door `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` en `modalityBridgeCacheMaxEntries`.

### Videobrug (`videoBridge.ts`, `videoBridgePipeline.ts`)

Onderschept videodelen op het hoogste niveau in Chat Completions-`messages` en
Responses API-`input` voordat een doel zonder bekende ingebouwde video-ondersteuning
wordt aangeroepen. Ondersteunde vormen zijn `input_video`, `video_url`,
`video_source`, HTTPS-URL's en `data:video/*;base64,...`-data-URI's. Gewone
bestandsnamen in tekst worden niet als video behandeld.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) beheert het doorlopen van het
verzoek, de controle van mogelijkheden en beleid, de aggregatie per verzoek en
de antwoordpayload. Werk per video — ophalen, de cache voor het volledige
resultaat, het beschrijven van een framereeks (waarbij een door de aanroeper
opgegeven audiotranscript wordt samengevoegd) en metriek/afbreking/opschoning
per poging — is verborgen achter `processVideoPart` in
`videoBridgePipeline.ts`, dat binnen de lus van `preCall` eenmaal per videodeel
wordt aangeroepen. Die module definieert ook de expliciete poortgrenzen
`VideoMediaBrokerPort` (bytes ophalen en gesamplede frames extraheren),
`VideoAudioTranscriptionPort` (een door de aanroeper opgegeven audiotranscript
samenvoegen met de gesamplede bijschriften) en `VideoDrilldownPort` (de
persistentiegrens voor framedetailanalyse; nog niet aangesloten op
`processVideoPart` — momenteel schrijft alleen de afzonderlijke route
`/api/modality-bridge/video/drilldown` detailanalyse-items).

Het openbare `/v1`-verzoekpad importeert noch start een subproces. Externe
video's worden gedownload met een limiet van 50 MiB; inline base64-video's
hebben een conservatieve limiet van 36 MiB aan gedecodeerde gegevens per video,
zodat de model-/berichten-/framing-envelop binnen de toelatingslimiet van
50 MiB voor openbare JSON-verzoeken kan blijven. De inline lengte en
schattingen van de gedecodeerde grootte worden vóór allocatie gecontroleerd.
HTTPS is vereist voor de initiële externe URL en elke omleiding, waarbij de
bestaande uitgaande beveiliging voor uitsluitend openbare adressen met
DNS-pinning wordt gebruikt. De bytes passeren vervolgens exact de interne
`POST /api/modality-bridge/video/extract`-brokergrens. Die route is zowel
`LOCAL_ONLY` als `SPAWN_CAPABLE`, accepteert alleen een per proces
geauthenticeerd verzoek via een vertrouwde loopback en accepteert nooit een URL,
bestandssysteempad, uitvoerbaar bestand of argumentenlijst. De pijplijn voor de
API-bodygrootte en de incrementele bodylezer van de handler handhaven
onafhankelijk van elkaar een invoerlimiet van 50 MiB voor de broker. De
begrensde wachtrij voert één extractie tegelijk uit, staat vier wachtende taken
toe en beperkt de totale wachtende invoer tot 100 MiB.

Binnen de broker leest `ffprobe` een privé lokaal bestand; de vaste
toegestane-formatenlijst sluit afspeellijst- en manifestindelingen uit. Voor
toegestane containers uit de MOV-familie blijven externe MOV-gegevensreferenties
standaard uitgeschakeld en de vaste opdracht schakelt deze niet in. Zowel
`ffprobe` als `ffmpeg` gebruikt de protocollenlijst met uitsluitend `file`, één
thread, vaste argumentenlijsten, geen shell en uitvoerbare bestanden die via
`PATH` worden gevonden. Ingesloten omslagafbeeldingsstreams zijn geen
afspeelbare kandidaten. Alle afspeelbare streams moeten aan de limieten voldoen
en een expliciete standaardstream krijgt voorrang boven de deterministische
terugval naar de laagste index. Video's zijn beperkt tot 600 seconden, 8.192
pixels per dimensie en 33.554.432 bronpixels. FFmpeg samplet 1–16 JPEG-frames op
de middelpunten, schaalt de lange zijde omlaag naar maximaal 1.024 pixels zonder
kleinere invoer op te schalen en ontvangt nooit een URL. De sampling is
standaard `uniform`. De optionele beleidsvormen `scene_aware` en het
experimentele `segment_aware` voeren één aanvullende vaste FFmpeg-doorgang uit
over de reeds gevalideerde lokale stream, selecteren begrensde
`showinfo`-scènetijdstempels en vallen bij een detectorfout, time-out, ongeldige
uitvoer of een lege kandidatenset deterministisch terug op dezelfde uniforme
middelpunten. De segmentbewuste modus verdeelt middelpuntsamples evenredig over
de gevalideerde scène-intervallen; segmentbewijsmateriaal en terugvalgedrag
worden hieronder nader beschreven. De harde limiet van 16 frames wordt bij elk
beleid na de selectie toegepast. Wanneer een scènebewust verzoek een budget van
slechts één frame heeft, gebruikt het het uniforme middelpunt van het actieve
volledige video- of focusvenster en rapporteert het `policyEffective: uniform`:
één geselecteerd scèneframe kan niet beide temporele uiteinden behouden. Een
aanroeper kan optioneel een eindig focusvenster opgeven (`start`/`end` in
seconden); grenzen worden beperkt tot de mediaduratie, omgekeerde of niet-eindige
vensters worden geweigerd en alle samplingbeleidsvormen worden alleen binnen het
genormaliseerde interval uitgevoerd. Het resulterende venster wordt opgenomen
in de samplingmetadata en in het niet-vertrouwde beschrijvingsvoorvoegsel, zodat
stroomafwaartse modellen een gefocust fragment van de volledige tijdlijn kunnen
onderscheiden.

Semantische bijschriftfocus is een afzonderlijke, expliciete instelling. De
standaardanalysemodus `full` behoudt de bestaande frameprompt en stuurt nooit
verzoektekst door naar het bijschriftmodel. In de modus `focused` leest de brug
alleen de meest recente niet-lege, door de gebruiker geschreven
`text`/`input_text` uit dezelfde Chat- of Responses-container, normaliseert deze
naar NFC, vouwt besturingstekens en witruimte samen en beperkt deze tot 500
Unicode-codepunten. Een leeg resultaat valt terug op exact de prompt van
`full`. Een bruikbare aanwijzing wordt als JSON geserialiseerd in een speciaal
blok voor niet-vertrouwde gebruikerscontext en mag alleen waarneembare details
prioriteren; deze kan de afzonderlijke waarschuwing tegen het volgen van
zichtbare of hoorbare instructies in de media niet negeren. Tekstuele focus
leidt nooit `start`/`end` af en wijzigt de temporele sampler niet.

#### FU-07 structureel segmentbewijsmateriaal

`segment_aware` gebruikt één begrensde voorafgaande analysepassage over de reeds gevalideerde lokale videostream. De vaste filterketen schaalt eerst naar een breedte van maximaal 320 pixels, detecteert scènewisselingen en bevroren intervallen en neemt vervolgens 1 frame per seconde als steekproef voor onscherpte, gemiddelde luminantie en ruimtelijke/temporele informatie. De passage is beperkt tot 600 structurele steekproeven, één FFmpeg-/filterthread, dezelfde allowlists voor uitsluitend het `file`-protocol en containers, een limiet van 1 MiB voor procesuitvoer en maximaal 30 seconden binnen de gedeelde afbrekings-/deadlinelimiet van de broker. Er wordt nooit een opdracht, filter, pad of URL uit het verzoek geaccepteerd.

De structurele waarden zijn deterministisch steekproefbewijs, geen semantisch begrip van de video. Ze leiden geen onderwerpen, handelingen, bijschriften, spraak of gebruikersintentie af. Scène- en bevriezingsgrenzen vormen segmenten; bevriezingsdekking, onscherpte, belichting, ruimtelijk detail en temporele verandering beïnvloeden uitsluitend hoe het bestaande budget van 1–16 frames wordt verdeeld. Een volledig bevroren segment wordt beperkt tot één frame, terwijl niet-bevroren segmenten om het resterende budget concurreren. Wanneer er meer grenzen dan frames zijn, blijft een gelijkmatige dekking van de tijdlijn behouden, zodat snelle cuts aan het begin een lang afsluitend segment niet kunnen verbergen. Scènegrenzen die binnen de analyseresolutie van 1 seconde van een bevriezingsgrens liggen, worden samengevoegd.

Ontbrekende filters, ongeldig/leeg bewijsmateriaal, een detectorfout of een time-out van de begrensde voorafgaande analyse vallen terug op exact het uniforme middelpuntbeleid. Een afbreking door de aanroeper of een brokerdeadline valt niet terug: deze beëindigt het actieve subproces, voorkomt latere frame-extractie en de persoonlijke tijdelijke directorystructuur wordt in `finally` verwijderd.

`scripts/perf/video-bridge-fu07-eval.ts` genereert deterministische, echte FFmpeg-fixtures voor besparingen op bijschriftoproepen na deduplicatie, budgettoewijzing bij veel beweging, bewijs voor onscherpte/belichting/SI-TI, snelle cuts met een lange staart en fout-positieve resultaten bij geleidelijke fades. Het script registreert de wandkloktijd van de voorafgaande analyse en, waar `/usr/bin/time` beschikbaar is, de CPU-tijd en piek-RSS van het onderliggende proces. De kwaliteitscontroles zijn uitsluitend structurele orakels. De kwaliteit van een echt bijschriftmodel blijft `HOLD`, omdat deze testopstelling geen geautoriseerd eindpunt of vastgelegde beoordelaar heeft. Financiële besparingen blijven eveneens `HOLD`, tenzij `--caption-cost-per-call-usd` een expliciete positieve schatting van de kosten per oproep opgeeft; het script verzint geen van beide resultaten.

Elk frame is beperkt tot 4 MiB, alle onbewerkte frames samen tot 23 MiB en het geserialiseerde brokerantwoord tot 32 MiB. Een persoonlijke tijdelijke directory wordt in `finally` verwijderd. OmniRoute bundelt FFmpeg niet en accepteert geen aangepast pad naar een uitvoerbaar bestand. Vóór het genereren van bijschriften past de bridge een conservatieve visuele deduplicatiepassage toe: elke JPEG wordt gereduceerd tot een grijswaardenbuffer van 16×16 en wordt alleen vergeleken met het laatst behouden frame. Voor een aangevraagd bijschriftbudget van meer dan één frame levert de extractie een begrensde kandidatenpool van maximaal tweemaal dat budget en nooit meer dan 16 frames. De aangevraagde limiet wordt pas na deduplicatie toegepast, waarbij de eerste en laatste geselecteerde kandidaten tijdens de laatste uitdunning behouden blijven wanneer het budget ten minste twee bedraagt. Het geversioneerde beleid
`grayscale-16x16-mean-cells-v2` gebruikt de hoogste waarde van het gemiddelde luminantieverschil en de verhouding van thumbnailcellen waarvan het genormaliseerde verschil ten minste 0,05 bedraagt. De drempelwaarde voor duplicaten is de constante 0,04, gekozen vanwege de voorspelbaarheid en niet beschikbaar gesteld als runtime-instelling. Dit secundaire signaal met hoog contrast behoudt kleine bewegingen en wijzigingen in zichtbare tekst die een uitsluitend op gemiddelden gebaseerde vergelijking kan verbergen. Fouten in het vergelijkings- of decoderproces vallen terug en behouden de dekking. Uitvoermetadata maken onderscheid tussen geëxtraheerde kandidaten, succesvol gebruikte frames en verwijderde visuele duplicaten.

Een expliciet gemarkeerd videogedeelte kan om een contactblad met tijdstempels vragen. De bridge bouwt een JPEG-raster met maximaal 4 kolommen en 16 frames. In elke cel van 512 pixels wordt de tijdstempel van de bron in een onderste band met hoog contrast gebrand, terwijl dezelfde tijdstempels in tekstuele metadata beschikbaar blijven voor verdere koppeling en controle. De volledige JPEG blijft beperkt tot 32 MiB. Als `sharp` het raster niet kan decoderen of samenstellen, valt de bridge terug op de afzonderlijke JPEG-frames; een afbreking door de client wordt nog steeds doorgegeven aan de contactbladbewerking.

Bewijs voor promotie staat bewust los van de synthetische compositiemicrobenchmark. `scripts/perf/video-bridge-contact-sheet-eval.ts` definieert een schemageversioneerde A/B-testopstelling voor echte OpenAI-compatibele visiemodellen. Deze meet door de provider gerapporteerde tokens, de wandkloklatentie van begin tot eind (inclusief de samenstelling van het contactblad), het aantal modeloproepen en het behoud van in het manifest gedefinieerde feiten. Onbewerkte modelantwoorden worden niet naar het rapport geschreven; alleen SHA-256-digests en ID's van overeenkomende feiten worden bewaard. De testopstelling voert geen netwerkoproep of oproep naar een betaald model uit, tenzij `--execute-real` wordt doorgegeven en `--model`, `OMNIROUTE_BASE_URL` en `OMNIROUTE_API_KEY` zijn geconfigureerd. Zonder die expliciete echte uitvoering blijft het machineleesbare oordeel `HOLD`; uitsluitend synthetische metingen van payloads en aantallen oproepen vormen geen bewijs voor promotie.

Aanroepers kunnen een optionele `transcript.cues`-array toevoegen aan een ondersteund videogedeelte wanneer ze al over uitgelijnde tekst beschikken. Elke cue moet `text`, een eindig `start`/`end`-interval binnen de gepeilde duur en een op de allowlist geplaatste `source` (`client`, `embedded` of `audio-bridge`) bevatten; `confidence` is standaard `1` en moet tussen `0` en `1` blijven. Exact gelijke cues worden samengevoegd. OmniRoute start nooit transcriptie op basis van deze metadata: gevalideerde cues worden met bron, betrouwbaarheid en interval naar het beschreven resultaat gekopieerd en worden naast de framebijschriften weergegeven als niet-vertrouwde waarnemingen. Ongeldige tekst, tekst buiten het toegestane bereik of tekst zonder herkomst wordt geweigerd in plaats van met de bijschriftstream te worden vermengd. Beide transcriptkanalen in de aanvraagbody normaliseren de opgegeven herkomst naar `client`, inclusief zelfverklaarde labels `embedded` of `audio-bridge`. Alleen een adapter die door de server wordt beheerd, kan deze vertrouwde labels toewijzen via het uitsluitend via code toegankelijke argument `trustedSource`; een JSON-veld in een verzoek kan dat argument niet bereiken. Transcripttekst blijft niet-vertrouwde, van media afgeleide inhoud, ongeacht de herkomst ervan, en mag nooit autorisatie bepalen.

Een geavanceerde aanroeper kan een `audioTranscript`-track voor dezelfde video aanleveren;
deze wordt behandeld als door de client aangeleverde tekst, niet als bewijs van transcriptie door de server.
De fusielaag verwerkt visuele en audio-observaties binnen
één deadline en afbreeksignaal, ordent ze op een gemeenschappelijke tijdlijn, voegt
exacte duplicaten samen en rapporteert een gedeeltelijk resultaat wanneer slechts één kant slaagt.
Een ongeldige `audioTranscript` leidt tot dat gedeeltelijke resultaat — de visuele
beschrijving blijft behouden en de audiotak registreert een opgeschoonde foutcode —
in plaats van de hele video te laten mislukken. De beschikbaarheid per tak, de vlag voor een gedeeltelijk resultaat
en de opgeschoonde foutcodes blijven behouden in het beschreven resultaat, in de
guardrailmetadata (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), in de metadata van de resultaatcache en in de
fusietellers van de bridge. Het standaardpad van Video Bridge roept geen spraak-naar-tekst aan
en downloadt geen tweede kopie van de media; zonder die expliciete track blijft het
uitsluitend video verwerken.

**Bewaring van transcripties (#12150 P1).** Dit is automatisch van toepassing wanneer de
Video Bridge (die zelf opt-in is) een transcriptiecuel weergeeft — er is geen afzonderlijke
bewaringsvlag. Wanneer een aanvraag een transcriptiecuel weergeeft (een door de aanroeper opgegeven
`transcript` of een gefuseerde `audioTranscript`), markeert de guardrail deze als
`videoBridgeObserved` en produceert deze een geredigeerde schaduw van de videobeschrijving —
een identieke weergave waarin de vrije tekst van elke cue wordt vervangen door
`[redacted-video-transcript]`, opgebouwd door het gestructureerde cueveld te vervangen
voordat de tekenreeks wordt samengesteld (nooit door de afgevlakte tekst te parseren, zodat geen
cue-inhoud — kwaadaardig of gewoon, inclusief tekst die `]` bevat, zoals
`[inaudible]`/`[music]` — kan achterblijven). In de opgeslagen aanvraagbody van het aanroeplogboek wordt
elk van video afgeleid tekstonderdeel vervangen door die geredigeerde schaduw, gekoppeld op basis van
gelijkheid van inhoud; het `fullText`-anker wordt opnieuw uitgelezen uit de voltooide guardrailpayload
van vóór de aanroep, zodat de koppeling ook slaagt nadat latere guardrails in de keten (de maskeerders voor PII en
referentiegegevens, met prioriteiten 10/95) de beschrijvingstekst ter plekke hebben herschreven en
nadat injectie van systeemprompts, overdrachten en geheugen de berichtenarray heeft hervormd. De
body die upstream naar het model wordt verzonden, blijft ongewijzigd. Een geobserveerde aanvraag vult ook
geen duurzaam geheugen aan (extractie op basis van zowel de aanvraag als het antwoord wordt overgeslagen),
zodat het eigen antwoord van het model transcriptietekst niet naar het geheugen kan terugschrijven.

**Ruwe videovelden (#12430).** Wanneer de bridge is ingeschakeld en ondersteuning voor native video onbekend of afwezig is, activeren gedefinieerde velden `transcript`/`audioTranscript` ook `videoBridgeObserved`, zelfs na een mislukte beschrijving of een `maxVideos`-limiet. `null` en lege tekenreeksen tellen mee; ontbrekende velden en niet-videometadata niet. In bewaarde kopieën worden deze velden geredigeerd of wordt de aanvraag weggelaten, en caches/geheugen worden omzeild.

Op die fallbackpaden worden geldige, door de aanroeper aangeleverde cues ondersteunde `text`-/`input_text`-
onderdelen in plaats van niet-standaard providervelden. Beide door de aanvraag aangeleverde tracks
blijven niet-vertrouwde `client`-observaties, met een expliciete waarschuwing dat de video
niet is beschreven en dat de tijdstempels niet aan de media zijn geverifieerd. De bestaande
limieten van 256 cues/64 KiB in totaal en per cue gelden voor de twee tracks samen;
tijdstempels moeten binnen de grens van 600 seconden van de broker en elk opgegeven focusvenster
vallen. Ongeldige tracks worden verwijderd en niet als willekeurige tekst doorgestuurd; een geldige
nevengeschikte track mag nog steeds worden gebruikt, tenzij hun gezamenlijke budget wordt overschreden. Null-/lege
velden voegen geen tekst toe. Door deze fallback wordt geen media opgehaald of transcriptie toegevoegd.
Transcriptie-uitbreidingsvelden worden verwijderd uit de fallback-videodrager en de bijbehorende
`video_url`-/`source`-objecten. De OpenAI-allowlist voor het wire-formaat blijft strikt; video-
dragers waarvan de native ondersteuning onbekend is, blijven beschikbaar en bekende uitsluitend-tekstdoelen behouden veilige markeringen.
Gestructureerde redactieschaduwen beschermen de toegevoegde transcriptietekst, terwijl de
oorspronkelijke, aan de aanroeper toebehorende aanvraag ongewijzigd blijft. Doelen met native ondersteuning en
uitgeschakelde bridges behouden hun bestaande omzeilingsgedrag.

Aanvullende bewaarde kopieën gebruiken hetzelfde signaal voor een geobserveerde aanvraag. De ruwe
momentopname van de clientaanvraag van vóór de guardrail, de in het geheugen wachtende aanvraag en het logboek van
vroegtijdig afgewezen aanvragen vervangen transcriptievelden in video-onderdelen structureel;
tekenreeksprompts die door pipelinefasen en contextoverdracht worden gegenereerd, worden geredigeerd
bij de sink voor de opgeslagen aanvraagbody. De opgeslagen markering `video_content_removed`
zorgt ervoor dat voortzetting via `previous_response_id` gesloten faalt in plaats van tekst te reconstrueren
die opzettelijk is verwijderd. Als een geobserveerde aanvraag vóór het loggen de
redactieschaduw per onderdeel kwijtraakt, of als zelfs één van meerdere videoschaduwen
na latere aanvraagmutaties niet meer overeenkomt, wordt de bewaarde aanvraagbody
volledig weggelaten in plaats van een gedeeltelijk geredigeerd transcript te bewaren.

Bij een geobserveerde aanvraag kan een modelantwoord elk deel van het
transcript citeren zonder een gestructureerde cuegrens. Daarom wordt de opgeslagen
`responseBody` van het aanroeplogboek vervangen door een weglaatmarkering; het gedetailleerde
pipelineartefact (dat upstream-/clientbody's en streamchunks kan bevatten)
wordt niet bewaard. Semantische caches, idempotentiecaches en caches voor reasoning-replay omzeilen
lees- en schrijfbewerkingen voor die aanvraag. De provideraanvraag en het voor de client zichtbare
antwoord blijven ongewijzigd. Vroege keepalive-bytes worden uit de tijdelijke
buffer verwijderd wanneer het gedetailleerde artefact wordt weggelaten. Kiro's waarschuwing over een ongeldige EventStream
rapporteert alleen het aantal payloadbytes, nooit de inhoud ervan of de ruwe fout van de JSON-
parser.
Hiermee wordt niet beweerd dat elke niet-gerelateerde provider-/plug-in-diagnose is
geaudit; de bredere inventarisatie van bewaarde sinks wordt bijgehouden in #11658.

De interne levenscyclus van `/api/modality-bridge/video/drilldown` is een afzonderlijk,
via loopback/token geauthenticeerd cachesubstraat. Elke bewerking vereist tevens een
canonieke, ondoorzichtige principal-ID. Voordat een productieclient wordt ingeschakeld, moet
deze die ID afleiden van de geauthenticeerde tenant en mag deze nooit een
door de client geselecteerde waarde doorsturen. Cachesleutels koppelen die principal aan canonieke sessie- en
videoreferentie-ID's, slaan alleen de daarvan met SHA-256 afgeleide sleutels op en beperken zowel leesbewerkingen
als verwijdering tot dezelfde principal. De cache slaat per item maximaal 16 afgeleide JPEG-frames
op, laat deze na tien minuten verlopen en ondersteunt begrensde
`start`/`end`-leesbewerkingen of expliciete verwijdering van sessies.

Elke principal is beperkt tot 16 items en 64 MiB aan canonieke JPEG-gegevens. Deze
limieten staan los van het globale plafond van 64 items/256 MiB: druk op het quotum
van een principal verwijdert eerst uitsluitend de minst recent gebruikte items van die principal voordat globale
LRU-verwijdering wordt overwogen. Verlopen items worden bij cacheactiviteit uit zowel de administratie
per principal als de globale administratie verwijderd, terwijl annulering en validatiefouten
geen gedeeltelijke vervanging vastleggen.

De cache weigert niet-canonieke Base64, overmatige opvulling, niet-JPEG-media, misvormde of
afgekorte JPEG's en JPEG's die een waarschuwing opleveren tijdens een begrensde volledige `sharp`-decodering
van de afbeelding. Elke geaccepteerde afbeelding wordt opnieuw gecodeerd als een canonieke JPEG; breedte en hoogte worden
afgeleid van de gedecodeerde bytes in plaats van te vertrouwen op velden van de aanroeper, en eventuele afsluitende
polyglotbytes worden verwijderd in plaats van bewaard. Alleen de begrensde canonieke gecomprimeerde buffer
wordt ten laste gebracht van beide quota. De JSON-transportlimiet omvat Base64-overhead voor het plafond van 32 MiB
voor gedecodeerde invoer. Elke
opgeslagen afleiding registreert de gevalideerde JPEG-indeling/resolutie, het samplingbeleid,
de afleidingsversie, de aanmaaktijd, de door de server berekende inhoudshash en de gehashte bovenliggende
referentie plus de bovenliggende inhoudshash van de vertrouwde aanroeper. Tussen asynchrone decodeer-/hashfasen
wordt op annulering gecontroleerd voordat de atomaire cachevastlegging plaatsvindt.

Deze tranche verbindt nog geen productieproducer met de route en biedt geen
variantselectie met meerdere resoluties. Het transparante aanvraagpad van Video Bridge
brengt daarom geen extra werk met zich mee, terwijl tenantgebonden afleiding van principals en
de volledige FU-08-levenscyclus met meerdere resoluties expliciet vervolgwerk blijven in plaats van
als voltooid gedrag te worden gedocumenteerd.

Frames worden opeenvolgend van bijschriften voorzien met het geconfigureerde Video-model. Een lege
Video-override neemt de Vision-instelling over; als beide leeg zijn, selecteert de automatische router van Vision
het effectieve model met visuele mogelijkheden. Geslaagde bijschriften
vervangen het oorspronkelijke onderdeel door een stabiel voorvoegsel `[Video description:` dat de tekst tevens
markeert als een niet-vertrouwde, van media afgeleide observatie en downstreammodellen instrueert
om geen instructies uit de media op te volgen. Cachesleutels voor framebijschriften
omvatten de JPEG-bytes, prompt, tijdstempel en het effectieve model; alleen geslaagde
bijschriften worden gecachet. Cache-items bewaren het daadwerkelijk succesvolle producermodel,
inclusief een fallbackmodel; de bridge rapporteert `mixed` wanneer verschillende frames
door verschillende modellen zijn geproduceerd. Een cachetreffer hergebruikt die produceridentiteit
in plaats van deze opnieuw te labelen als het aangevraagde routeringsplan. De resultaatcache
voor de volledige video gebruikt als sleutel elke invoer die de uitvoer wijzigt: prompt, effectief
model, samplingbeleid, aantal frames, semantische analysemodus, de SHA-256-
vingerafdruk van de genormaliseerde focushint, het focusvenster, `transcript`,
`audioTranscript` en de contact-sheet-vlag. Een wijziging in een van deze
dimensies resulteert dus in een cachemisser en nooit in hergebruik van verouderde gegevens. De versie,
drempelwaarde en het begrensde aantal kandidaatframes van het visuele deduplicatiebeleid zijn eveneens expliciet opgenomen in de
sleutel en metadata van de resultaatcache; een beleidswijziging kan daarom geen verouderde
beschrijving van de volledige video hergebruiken. Metadata van resultaatcache v4 bewaart de modus en
vingerafdruk, maar nooit de onbewerkte gebruikerstaak. Guardrail-metadata rapporteert zowel de
aangevraagde als de effectieve analysemodus; een aangevraagde `focused`-modus zonder
bruikbare gebruikerstekst wordt gerapporteerd als effectief `full`.

De guardrail extraheert elk ondersteund video-onderdeel, maar beschrijft niet meer dan
`modalityBridgeVideoMaxVideos`. Voor een doel waarvan bewezen is dat
`supportsVideo === false`, worden mislukte video's en video's boven de limiet expliciete veilige
tekstmarkeringen, zodat er geen onbewerkte video overblijft. Wanneer de mogelijkheid onbekend is, behouden die onderdelen
hun videodrager; elk fallbacktranscript volgt de bovenstaande begrensde
tekstconversie. Doelen met `supportsVideo === true` omzeilen de bridge.
Het afbreeksignaal van het clientverzoek wordt doorgegeven aan de download, brokerwachtrij,
subprocessen en bijschriftoproepen; afbrekingen stoppen tussen video's en vallen nooit open
naar onbewerkte media.

Runtime-instellingen worden door de DB ondersteund en met Zod gevalideerd:

| Sleutel                             | Standaard   | Bereik / gedrag                                                                                                       |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Optionele runtime, waarvoor expliciete activering vereist is                                                          |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` behoudt generieke bijschriften; `focused` gebruikt begrensde, niet-vertrouwde context van de laatste gebruiker |
| `modalityBridgeVideoModel`          | `""`        | Neemt het Vision Bridge-model over                                                                                    |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` of proportioneel `segment_aware`; bij een detectorfout wordt teruggevallen op `uniform`      |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                        |

Oude opgeslagen time-outwaarden voor Video van meer dan 120 seconden worden
begrensd tot de deadline van de broker; nieuwe instellingen boven die limiet
worden geweigerd. `GET /api/modality-bridge/video/runtime` vereist vóór
authenticatie of runtimecontrole een vertrouwde, gestempelde loopbacklocatie en
vereist vervolgens beheerautorisatie. Het retourneert alleen `available`,
opgeschoonde FFmpeg/ffprobe-versies en een vaste reden wanneer de runtime niet
beschikbaar is. Het interne extractie-eindpunt is geen openbare upload-API:
verzadiging van de wachtrij retourneert `503` plus `Retry-After`, het verbreken
van de verbinding door een aanroeper retourneert `499` en de vaste
brokerdeadline retourneert `504`. Geconverteerde antwoorden voegen
`video->text;model=<visionModel>;parts=<videos>` toe aan de centrale
`x-omniroute-modality-bridge`-header zonder Vision- of Audio-segmenten te
verwijderen.

### PII-masker (`piiMasker.ts`)

Wordt in **beide** fasen uitgevoerd.

- **`preCall`** kloont de payload, doorloopt `system`, `messages`, `input` en
  `prompt` (inclusief items die alleen uit tekst bestaan) en past `processPII()`
  (uit `@/shared/utils/inputSanitizer`) toe op de tekenreeksvelden
  `content`/`text`. Wanneer `PII_REDACTION_ENABLED=true`, wordt gedetecteerde
  PII in de uitgaande payload geredigeerd. Dit staat los van
  `INPUT_SANITIZER_MODE` (dat alleen het beleid voor promptinjectie bepaalt).
  Wanneer redactie is uitgeschakeld, registreert de aanroep de aantallen
  detecties zonder de inhoud te herschrijven.
- **`postCall`** maakt een diepe kloon van het antwoord en voert
  `sanitizePIIResponse()` uit, plus het masker voor de vorm van de Responses API
  (`maskResponsesOutput` — dekt `output_text` en
  `output[].content[].text`). Als er enige redactie plaatsvindt, vervangt het
  gewijzigde antwoord het oorspronkelijke antwoord.

De guardrail blokkeert nooit; deze annoteert (`meta.detections`,
`meta.redacted`) of herschrijft alleen.

### Promptinjectie (`promptInjection.ts`)

Detecteert vijandige structuren in door gebruikers aangeleverde inhoud en
dwingt het geconfigureerde beleid af. Het gedrag wordt bepaald door
omgevingsvariabelen en constructoropties:

| Instelling      | Omgevingsvariabele                                                                                   | Standaard | Effect                                                                                                                                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ingeschakeld    | `INPUT_SANITIZER_ENABLED`                                                                            | `true`    | Wanneer ingesteld op `false`, wordt de guardrail direct overgeslagen.                                                                                                                                                                  |
| Modus           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`    | Injectiebeleid: `block`, `warn` of `log`. (`redact` wordt voor achterwaartse compatibiliteit geaccepteerd, maar verwijdert **geen** injectietekst; het herschrijven van PII in verzoeken wordt geregeld door `PII_REDACTION_ENABLED`.) |
| Blokkeerdrempel | Optie `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`    | Minimale ernst die vereist is om te blokkeren. Bij de standaardinstelling wordt `medium` alleen geobserveerd.                                                                                                                          |

**Modusprioriteit** (`getMode`): `options.mode` van de aanroeper →
**DB-overschrijving van de functievlag** `INJECTION_GUARD_MODE` (Dashboard →
Settings → Feature Flags) → omgevingsvariabele `INJECTION_GUARD_MODE` →
omgevingsvariabele `INPUT_SANITIZER_MODE` → `warn`. Een overschrijving via het
dashboard heeft daarom voorrang op de omgevingsvariabelen, zodat de
gebruikersinterface Feature Flags de actieve guard direct aanstuurt (zonder
herstart). Het uitlezen van de database is fail-safe: als dit een fout oplevert,
valt de guard terug op het door de omgevingsvariabelen bepaalde gedrag, en als
er geen overschrijving is ingesteld, is het gedrag identiek aan de afhandeling
op basis van alleen omgevingsvariabelen.

Detectiebronnen:

1. `sanitizeRequest()` uit `@/shared/utils/inputSanitizer` (gedeelde set
   detectoren die elders in de pijplijn wordt gebruikt).
2. Ingebouwde `DEFAULT_GUARD_PATTERNS` (momenteel `system_override_inline` en
   `markdown_system_block`, beide met ernst `high`).
3. Optionele `customPatterns` die via constructoropties worden doorgegeven
   (tekenreeksen, reguliere expressies of records met
   `{ name, pattern, severity }`).

Wanneer `mode === "block"` **en** ten minste één detectie aan de
ernstdrempel voldoet, retourneert `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }`. In de modi `warn`/`log` logt de guardrail dit, maar
staat deze de aanroep toe. De gedeelde helper `evaluatePromptInjection()` wordt ook geëxporteerd
voor aanroepers die prompts moeten evalueren zonder het register te gebruiken.

**Scanlimiet (v3.8.20):** de detector inspecteert alleen de **eerste 16 KB** van
de samengevoegde prompttekst — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) in
`src/shared/utils/inputSanitizer.ts`. Zowel `detectInjection()` als
`evaluatePromptInjection()` past `slice(0, MAX_INJECTION_SCAN_BYTES)` toe voordat
de patroonlus wordt uitgevoerd. Injectierichtlijnen staan doorgaans bovenaan de invoer, waardoor dit
het CPU-/GC-gebruik van reguliere expressies bij payloads van meerdere honderden KB begrenst zonder de detectie te verzwakken (zie
#3932, #4041).

### Maskering van referentiegegevens (`credentialMasker.ts`)

Wordt in **beide** fasen uitgevoerd, als laatste in de standaardketen (prioriteit `95`). Maskeert
bekende patronen voor API-sleutels/geheime tokens in de uitgaande payload (berichtinhoud,
argumenten van toolaanroepen, toolresultaten) **en** het antwoord van de provider, zodat
referentiegegevens die in een prompt zijn geplakt (of door een toolresultaat worden teruggestuurd) niet
naar de upstream-provider of terug naar de client worden gelekt.

- **Alleen na expliciete inschakeling**, volgens dezelfde conventie als PII-maskering (aansluitend op harde regel #20):
  uitgeschakeld tenzij `settings.credentialRedactionEnabled === true` **of**
  `CREDENTIAL_REDACTION_ENABLED=true`. Wanneer dit is uitgeschakeld, doet de guardrail niets —
  deze blokkeert nooit en herschrijft niets.
- `redactCredentials()` doorloopt de volledige payload-/antwoordboom (`walkValue()`,
  beschermd tegen prototypevervuiling, cyclusveilig via `WeakSet`) en vervangt overeenkomsten door
  een tijdelijke aanduiding `[REDACTED:<type>]`, waarbij alleen de daadwerkelijk
  gewijzigde vertakkingen worden gekloond.
- `CREDENTIAL_PATTERNS` omvat sleutels van LLM-providers (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betaalsleutels (Stripe, Square), cloudsleutels
  (AWS-toegangssleutel, Twilio, SendGrid, Mailgun), privésleutels/JWT's,
  verbindingsreeksen met referentiegegevens (`mongodb://user:pass@...`, enzovoort) en
  een generiek patroon voor de headerwaarden `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Headerachtige sleutels (`authorization`, `x-api-key`, `api-key`,
  `apikey`) worden structureel gemaskeerd (alleen de waarde; schemavoorvoegsels zoals
  `Bearer `/`Basic ` blijven behouden) en niet via de generieke tekstregex.
- De guardrail blokkeert nooit; deze herschrijft alleen (`modifiedPayload` /
  `modifiedResponse`) en voegt annotaties toe (`meta.credentialsRedacted`, `meta.count`).

Regressiebeveiliging: `tests/unit/credential-masker-guardrail.test.ts`.

## Basiscontract (`base.ts`)

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
  block?: boolean; // true onderbreekt de keten
  message?: string; // wordt weergegeven bij blokkering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // geretourneerd door preCall om het verzoek te herschrijven
  modifiedResponse?: TValue; // geretourneerd door postCall om het antwoord te herschrijven
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

Een guardrail geeft aan dat er „geen wijziging” is door `void`, `{}` of
`{ block: false }` te retourneren. Het retourneren van een `modifiedPayload`/`modifiedResponse`
vervangt de waarde die door de keten naar volgende guardrails stroomt.
`signal?: AbortSignal` brengt de levenscyclus van de aanroeper over naar guardrails. Het afbreken van een verzoek is de bewuste fail-open-uitzondering: mediabruggen stoppen hun werkzaamheden en ruimen op zonder onbewerkte media terug te zetten voor een doel waarvan bekend is dat het deze niet ondersteunt.

## Register (`registry.ts`)

De singleton `guardrailRegistry` biedt het volgende:

- `register(guardrail)` — voegt een guardrail toe (of vervangt deze op basis van de genormaliseerde naam) en
  sorteert opnieuw op oplopende `priority`.
- `clear()` / `list()` — administratieve hulpfuncties.
- `runPreCallHooks(payload, context)` — doorloopt actieve guardrails, geeft de
  payload via `modifiedPayload` door en stopt bij de eerste `block: true`.
- `runPostCallHooks(response, context)` — dezelfde stroom aan de antwoordzijde.
- `resetGuardrailsForTests({ registerDefaults })` — wist de status en registreert
  optioneel de standaardwaarden opnieuw voor een schone testisolatie.

Beide uitvoerfuncties retourneren `{ blocked, payload|response, results, guardrail?, message? }`,
waarbij `results` een array is van `GuardrailExecutionResult`-records met
de velden `blocked`, `skipped`, `modified`, `error` en `meta` per guardrail,
die nuttig zijn voor tracering.

### Guardrails per verzoek uitschakelen

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` verzamelt een
ontdubbelde lijst met namen van guardrails die voor het huidige verzoek moeten
worden overgeslagen. Bronnen (allemaal optioneel en allemaal samengevoegd):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` in de verzoekbody (op het hoogste niveau)
- `metadata.disabledGuardrails` in de verzoekbody
- Header `x-omniroute-disabled-guardrails` (of verouderde
  `x-disabled-guardrails`)

Waarden kunnen arrays van tekenreeksen of een door komma's gescheiden tekenreeks zijn; namen worden
genormaliseerd naar kebab-case in kleine letters (`pii_masker` → `pii-masker`). Het resultaat
wordt via `context.disabledGuardrails` doorgegeven aan het register, dat
overeenkomende guardrails overslaat (`skipped: true` in `results`).

## Uitvoeringsvolgorde

Voor elk verzoek dat door `src/sse/handlers/chat.ts` en
`open-sse/handlers/chatCore.ts` stroomt:

1. `resolveDisabledGuardrails(...)` stelt de lijst met over te slaan guardrails samen op basis van de API-sleutel, body
   en headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` voert guardrails uit in oplopende
   prioriteitsvolgorde:
   - Uitgeschakelde guardrails worden geregistreerd als `skipped`.
   - De `preCall` van elke guardrail kan de payload herschrijven via `modifiedPayload`.
   - De eerste `block: true` breekt de keten voortijdig af en de handler retourneert
     een afwijzingsrespons van de guardrail.
3. De (mogelijk herschreven) payload wordt doorgegeven aan combinatieroutering en
   upstream-dispatch.
4. Nadat de respons is samengesteld, voert `guardrailRegistry.runPostCallHooks(...)`
   dezelfde keten uit op de respons. `block: true` verwijdert hier de upstream-respons.

Guardrails die een fout veroorzaken, worden geregistreerd met `error: <message>` en gelogd via
`logger.warn`, maar de keten wordt voortgezet — bewust volgens het fail-open-principe.

## Configuratie

Omgevingsvariabelen die door de ingebouwde guardrails worden gelezen:

| Variabele                             | Gebruikt door             | Effect                                                                                                              |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Stel in op `false` om detectie volledig uit te schakelen.                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Injectiebeleid: `warn`, `block` of `log`. De verouderde waarde `redact` herschrijft injectietekst niet.             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modus voor de injectieguardrail; tevens een DB-functievlag die de omgevingsvariabelen **overschrijft** (DB > ENV).  |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimale ernst die door `MODE=block` wordt afgewezen: `high` (standaard), `medium` of `low`.                        |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Verouderde alias voor `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                            |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Wanneer ingesteld op `true`, worden persoonsgegevens in verzoeken geredigeerd (onafhankelijk van de injectiemodus). |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Bepaalt het gedrag van de masker aan de responszijde.                                                               |

De Modality Bridge-guardrails lezen runtimeconfiguratie uit de DB-gebaseerde opslag voor
instellingen (`getSettings()`), niet uit omgevingsvariabelen. De primaire sleutels van Vision zijn
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` en
`modalityBridgeCacheMaxEntries`. De verouderde
`visionBridge*`-sleutels worden alleen geaccepteerd als de gedocumenteerde terugvaloptie voor één cyclus bij het
lezen; schrijfbewerkingen vanuit het dashboard gebruiken de primaire sleutels. Standaardwaarden en de terugvalresolver
staan in `src/shared/constants/modalityBridgeDefaults.ts`, waarbij verouderde
constanten behouden blijven in `src/shared/constants/visionBridgeDefaults.ts`.

Audio gebruikt `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` en `modalityBridgeAudioMaxClips`, plus de gedeelde
`modalityBridgeCache*`-instellingen. Audio heeft geen terugvaloptie voor verouderde sleutels, omdat deze
sleutels zijn geïntroduceerd met het Modality Bridge-schema.

Video gebruikt `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` en
`modalityBridgeVideoTimeout`, plus de gedeelde `modalityBridgeCache*`-instellingen.
Dit is standaard uitgeschakeld omdat FFmpeg/ffprobe optionele operationele
afhankelijkheden zijn en het maken van bijschriften voor frames extra latentie en modelkosten met zich meebrengt.

## Aangepaste guardrails

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Dagbudget overschreden" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Stappen:

1. Maak `src/lib/guardrails/myGuardrail.ts` aan en breid `BaseGuardrail` uit.
2. Implementeer `preCall` en/of `postCall`.
3. Registreer de guardrail tijdens het importeren (door deze vanuit `registerDefaultGuardrails` toe te voegen) of
   roep tijdens runtime `guardrailRegistry.register(...)` aan — het register vervangt
   elke eerdere guardrail met dezelfde genormaliseerde naam.
4. Voeg tests toe onder `tests/unit/` (bestaande voorbeelden:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testen

Gebruik `resetGuardrailsForTests()` tussen tests om vanuit een bekende status te beginnen.
Geef `{ registerDefaults: false }` door om met een leeg register te beginnen en
registreer alleen de guardrails die worden getest. Vision Bridge ondersteunt dependency-
injectie (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge biedt
vergelijkbare injectiepunten voor instellingen, mogelijkheden, selectie van het STT-model,
controle van referenties en transcriptie. Tests kunnen daardoor beide stromen uitvoeren zonder toegang
tot een database of netwerk.

## Zie ook

- `src/lib/guardrails/` — implementatie
- `src/shared/utils/inputSanitizer.ts` — gedeelde detector die
  promptinjectie en maskering van persoonsgegevens mogelijk maakt
- `src/shared/constants/visionBridgeDefaults.ts` — standaardinstellingen voor Vision Bridge en
  lijst met modellen waarvoor de bridge wordt afgedwongen
- `src/shared/constants/modalityBridgeDefaults.ts` — gedeelde standaardinstellingen voor de runtime van Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — orthogonale laag (circuitbreaker, afkoelperiodes)
- `docs/reference/ENVIRONMENT.md` — volledige referentie voor omgevingsvariabelen

## Routedekking en red-teamtests voor de injectieguard (Fase 8 · Blok D)

De injectieguard (`createInjectionGuard` / `withInjectionGuard`) dekt alle routes
die gebruikersprompts accepteren. Deze respecteert `INJECTION_GUARD_MODE` (standaard `warn` = alleen loggen;
`block` = retourneert HTTP 400 `SECURITY_001`).

| Type             | Routes                                                                                                                                               | Standaardmodus |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Tekst (bestaand) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generatief       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Gegevens         | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Tekstextractie (`extractMessageContents`) ondersteunt `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-teamtests (nachtelijks, `nightly-llm-security.yml`):** promptfoo valideert dat elke route
de OWASP-LLM-corpus blokkeert wanneer `INJECTION_GUARD_MODE=block`; garak voert probes uit (wordt zonder geheim overgeslagen).
`moderations` is voor consistentie opgenomen — operators kunnen deze route in blokkeermodus uitzonderen via
`resolveDisabledGuardrails`.

De nachtelijke workflow (`.github/workflows/nightly-llm-security.yml`, cron + handmatige
activering) heeft twee taken:

- **`promptfoo-guard` (blokkerend)** — voert `promptfoo eval -c promptfooconfig.yaml` uit
  met `INJECTION_GUARD_MODE=block`. Elk vijandig testgeval (bijvoorbeeld "negeer alle
  eerdere instructies…", jailbreaks in DAN-stijl) controleert dat het antwoord
  `error.code === "SECURITY_001"` bevat, wat betekent dat de guard het verzoek daadwerkelijk heeft geweigerd.
- **`garak` (adviserend)** — voert garak `--probes promptinject,dan,leakreplay` uit
  tegen een lokale OmniRoute-instantie (`http://localhost:20128/v1`). Dit is afhankelijk van een
  providergeheim (`PROMPTFOO_PROVIDER_KEY`); zonder dit geheim wordt de taak zonder fouten overgeslagen en
  de opdracht heeft het achtervoegsel `|| true`, zodat er wel wordt gerapporteerd zonder dat CI mislukt.

De dekking van de guardhelper (`createInjectionGuard` / `withInjectionGuard`)
omvat elke `/v1`-route die prompts verwerkt; prompttekst wordt opgehaald uit
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` door
`extractMessageContents()` in `src/shared/utils/inputSanitizer.ts`.
