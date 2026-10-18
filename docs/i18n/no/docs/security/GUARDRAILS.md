# Guardrails (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sannhetskilde:** `src/lib/guardrails/`
> **Sist oppdatert:** 2026-08-29 — v3.8.51 (opprinnelsen til Video Bridge-transkripsjoner oppgis av kalleren,
> og er ennå ikke verifisert av serveren — presisert i henhold til #11661)

Sikkerhetsmekanismer håndhever sikkerhet, retningslinjer og innholdstransformasjoner i grensesnittet
mellom OmniRoute og oppstrømsleverandører. Hver sikkerhetsmekanisme kan inspisere (og
eventuelt avvise, transformere eller annotere) forespørselsnyttelaster (`preCall`) og
oppstrømssvar (`postCall`).

Systemet er **fail-open**: Hvis en sikkerhetsmekanisme utløser et unntak under kjøring, registrerer
registeret feilen og fortsetter med neste sikkerhetsmekanisme i stedet for å la
forespørselen mislykkes. Blokkering er en eksplisitt beslutning (`block: true`), aldri et uhell.

## Innebygde sikkerhetsmekanismer

Registeret laster automatisk inn seks sikkerhetsmekanismer i prioritert rekkefølge ved import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Navn                | Trinn          | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lavere prioritetstall kjøres **først**.

### Bildebro (`visionBridge.ts`) — Modalitetsbro PR-1

Fanger opp forespørsler med bilder som er rettet mot **modeller uten bildestøtte**, og enten
omdirigerer hele forespørselen til en modell med bildestøtte eller erstatter
bildedelene med tekstbeskrivelser produsert av en konfigurerbar bildemodell før
det oppstrøms kallet. Dette gjør at leverandører som bare støtter tekst, kan håndtere
multimodale nyttelaster transparent.

Flyt:

1. Hopp over hvis målmodellen allerede støtter bilder (med mindre den finnes i
   listen over modeller som tvinges gjennom broen, `isVisionBridgeForcedModel`).
2. Trekk ut bildedeler via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerer til den **felles mediedetektoren**
   `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den eneste
   sannhetskilden som deles med kompatibilitetsfilteret for kombinasjonsmodeller.
   Uttrekket er begrenset til toppnivådeler med formene som
   `replaceImageParts` kan sette inn igjen (kontrakten for uttrekk↔erstatning): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` og Responses API `input_image`. Nestede treff og
   former som bare fungerer som indikatorer, er materiale for kombinasjonsfilteret og trekkes aldri ut.
   Hopp over hvis ingen finnes.
3. Fastsett kjøretidskonfigurasjonen via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nye innstillingsnøkler av typen `modalityBridge*`
   har forrang; eldre nøkler av typen `visionBridge*` beholdes som en **reserve i én syklus**
   (tilbakerullingsvindu). Hopp over før eventuell mediegjennomgang når
   broen er deaktivert.
4. Modusvelgeren (`modalityBridgeVisionMode`, se tabellen nedenfor) avgjør
   om forespørselen skal omdirigeres eller beskrives. Omdirigering returnerer `modifiedPayload`, der bare `model`
   er byttet ut, sammen med metadata `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivelsesflyt: Begrens antall bilder til `maxImages`, sett sammen den oppgavebevisste ledeteksten,
   sjekk beskrivelsesbufferen, kall bildemodellen **parallelt**
   (`Promise.allSettled`), og sett inn tekstdeler av typen `[Bilde N]: <beskrivelse>`
   i stedet. En mislykket beskrivelse gir `null`, og den opprinnelige bildedelen
   **bevares** (#4012) — unntatt i beskrivelsesflyten for kombinasjonsmodeller når alle
   beskrivelser mislyktes. Da får en bekreftet oppstrømsmodell uten bildestøtte en
   plassholder av typen `(utilgjengelig — ingen leverandør med bildestøtte er tilkoblet)` i stedet (#8430).
6. Returner `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Modusvelger (`modalityBridgeVisionMode`)

| Modus      | Standard | Atferd                                                                                                                                                                                                                                                                                                                 |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Eldre heuristikk, uendret (#6640/#7204): modeller som ikke er kombinasjonsmodeller, samt `auto/`-modeller, omdirigeres til den beste bildemodellen med mindre den opprinnelige modellen allerede har brukbar legitimasjon (da beskrives bildene); kombinasjonsmål beskrives alltid.                                    |
| `describe` |          | Beskriv alltid — omdirigeringsblokken hoppes helt over; brukerens valgte modell svarer alltid.                                                                                                                                                                                                                         |
| `reroute`  |          | Tving omdirigering: beskyttelsen som beholder en modell med legitimasjon, omgås. Legitimasjonskontrollen for omdirigerings-**målet** gjelder fortsatt — når det ikke finnes et brukbart bildemål, går forespørselen videre til beskrivelse, slik at råbilder aldri når en bakkomponent som bare støtter tekst (#8430). |

Tvungne moduser kortslutter **før** den automatiske heuristikken kjøres. Atferden for `auto`
er byteidentisk med sikkerhetsmekanismen fra før PR-1.

#### API-nøkkelomfang (`visionBridgeKeyScope.ts`)

Når innringerens API-nøkkel begrenser `allowedConnections`, kvotepuljer
(`allowedQuotas`) eller modeller (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), velger broen bare
omdirigerings- og beskrivelsesmodeller som nøkkelen kan bruke, på tilkoblinger som nøkkelen kan
bruke. Beskrivelseskallet går deretter alltid gjennom OmniRoute-selvsløyfen med
`x-omniroute-self-loop-key-id`-headeren, slik at den mottakende chatteforespørselen
håndhever nøkkelens tilkoblings- og modellpolicy på nytt. `enforceApiKeyPolicy()`
respekterer denne headeren bare sammen med selvsløyfens bearer-token, slik at den bare kan
begrense tilgangen, og en ID som ikke kan slås opp, blir avvist.

Hvis ingen bildemodell er tillatt for nøkkelen, trer beskrivelsesflyten til side, og
forespørselen sendes videre uendret, med samme åpne feilhåndtering som for en deaktivert
sikkerhetsmekanisme (metadata `{ skipped: true, reason: "no_permitted_vision_model" }`).
Forespørsler uten nøkkel, og nøkler uten disse begrensningene, oppfører seg nøyaktig som
før.

#### Oppgavebevisst beskrivelsesledetekst (`modalityBridgeVisionTaskAware`)

Standardverdi **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) legger til
teksten fra den **siste brukermeldingen** (avkortet til 500 tegn) i den
grunnleggende beskrivelsesinstruksen, slik at beskrivelsen styres mot det brukeren
faktisk spurte om (codex-vision-proxy-mønsteret), og ber synsmodellen transkribere
synlig tekst. Når flagget er slått av — eller det ikke finnes noen brukertekst —
brukes grunninstruksen uendret.

Beskrivelsesselvløkkens egen OpenAI-kompatible forespørsel (`callVisionModelSingle()`
i `visionBridgeHelpers.ts`) ber alltid om `image_url.detail: "high"` —
ubetinget, for alle kallere/leverandører, og ikke styrt av noe klientsignal.
Sampling med lav detaljgrad svekker OCR-nøyaktigheten nettopp for
teksttranskriberingsoppgaven denne instruksen ber om, så selve beskrivelseskallet
ber alltid om høy detaljgrad, uavhengig av hvilket detaljnivå den opprinnelige
innkommende forespørselen brukte. Dette påvirker bare den interne
forespørselsstrukturen for beskrivelsen; det endrer ikke hvordan OmniRoute
videresender kallerens egen `image_url.detail` i den primære forespørselen —
den standardverdien brukes separat, og bare for registrerte OpenCode-klienter, i
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic-grenen med wire-format i beskrivelsesselvløkken har ikke noe
`detail`-felt og påvirkes ikke av noen av standardverdiene.

#### Grense for beskrivelsesutdata (`modalityBridgeVisionMaxChars`)

| Nøkkel                         | Standardverdi | Område              |
| ------------------------------ | ------------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`           | `0` eller 100–50000 |

`0` (standardverdi) betyr **ingen grense** — beskrivelsen som returneres av
`callVisionModel()`, sendes videre uendret, slik at den eksisterende
virkemåten bevares. Enhver verdi i området 100–50000 avkorter beskrivelsen med
suffikset `…` før den settes inn igjen som `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`).
Øk denne for detaljtunge OCR-oppgaver der nedstrømsmodellen trenger hele
transkripsjonen; senk den for å begrense tokenbruken fra ordrike synsmodeller.
Feltet i kontrollpanelet finnes i Avansert-panelet på Syn-fanen
(`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) og justerer alle
verdier mellom 1 og 99 opp til minimumsverdien 100, samtidig som en eksplisitt
`0` beholdes uendret — `0` er en gyldig Zod-verdi i seg selv
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ikke bare
standardverdien for «ikke angitt».

#### Beskrivelsesbuffer (`modalityBridge/bridgeCache.ts`)

Prosessdelt LRU- og TTL-buffer i minnet for beskrivelsesutdata.
Nøkkel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` med
lengdeprefiksramming (ingen kollisjoner mellom feltgrenser). Modellkomponenten
er den **konfigurerte** bromodellen, ikke modellen som faktisk svarte —
`callVisionModel` kan bruke en reservemodell internt, og nøkkelbruk per forsøk
ville fragmentert bufferen. Mislykkede beskrivelser bufres aldri. Innstillinger:

| Nøkkel                          | Standardverdi | Område  |
| ------------------------------- | ------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`        | —       |
| `modalityBridgeCacheTtlMinutes` | `60`          | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`         | 10–5000 |

#### Normalisering av eksterne bilder (selvløkkebeskrivelse/base64-henting)

Når broen selv henter et **eksternt** bilde — både for Anthropic-selvkallet
for beskrivelse og base64-konverteringen for claude-wire-format
(`ensureBase64ImagesForClaudeWire`), begge via
`fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — sendes den resulterende
data-URI-en gjennom `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) før den bygges inn i forespørselen til
synsmodellen. For store bilder skaleres ned til en **langside på 2048 px**
(i samsvar med grensen for størrelsesendring som OpenAI/Anthropic allerede
bruker på serversiden), noe som reduserer opplastingsmengde og ventetid uten å
endre det synsmodellen ser. Størrelsesendringen bruker `sharp`, som lastes via
dynamisk import: På en plattform der den plattformspesifikke binærfilen ikke
kan lastes, **kaster `normalizeDataUri()` aldri et unntak** — den faller tilbake
til å sende de opprinnelige bytene uendret videre, slik at banen for
beskrivelse/base64-konvertering alltid fortsetter å fungere. Byte som ikke
representerer bilder (en henting som ikke returnerte et dekodbart bilde),
sendes også uendret videre. Denne normaliseringen er begrenset til bilder broen
henter for sitt eget selvkall — den brukes aldri på kallerens rå
videresendingsnyttelast, i samsvar med prinsippet om at endringer bare skal
gjøres ved eksplisitt samtykke (Ufravikelig regel #20).

#### Innstillingsskjema + migrering

De nye `modalityBridge*`-nøklene Zod-valideres i `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*`-trioen og
`modalityBridgeAudio*`-gruppen som brukes av lydbroen. Migreringen
`141_modality_bridge_settings.sql` kopierer eksisterende eldre
`visionBridge*`-verdier til de tilsvarende nye nøklene (idempotent og overskriver
aldri en `modalityBridge*`-verdi angitt av en operatør); de eldre nøklene
forblir godtatt som reservemekanisme ved lesing i én utgivelsessyklus.

#### Transparenshode + statistikk

Svar som er transformert via beskrivelse, inneholder
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(bygget av `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`,
påført av `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`).
Omdirigerte forespørsler får **ikke** noe hode — nyttelasten ble ikke endret,
og modellbyttet er allerede synlig i `model`-feltet i svarstrukturen.

`GET /api/modality-bridge/stats` (administrasjonsautentisering, samme nivå som
`GET /api/settings`) returnerer minnebaserte tellere per modalitet
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` for `vision`, `audio` og
`video`. `averageLatencyMs` bruker `latencySamples`, ikke alle forsøk, som
nevner. En operasjon uten tidsmåling oppretter ikke en kunstig måling på null
millisekunder. `bridged` forblir det bakoverkompatible aliaset for vellykkede
konverteringer. Mislykkede forsøk øker ikke denne telleren.
Tellerne nullstilles som tilsiktet ved omstart av prosessen
(telemetri, ikke regnskapsføring).

#### Konfigurasjon av kontrollpanelet

Den dedikerte siden i kontrollpanelet er
`/dashboard/settings/modality-bridge`. De URL-adresserbare fanene `Vision`, `Audio`
og `Video` bevarer spørringsparametrene når `tab`-verdien endres.
Vision-fanen viser aktivering, modus, modellvalg (inkludert den automatiske
standarden), oppgavebevisst prompting, avanserte grenser for tidsavbrudd, bilde,
beskrivelseslengde og hurtigbuffer, kjøretidstellere og en beskyttet
eksempelforespørsel. Audio-fanen er også aktiv: Den viser aktivering, en
modellvelger kun for STT med Auto, grenser for tidsavbrudd og maksimal klipplengde,
lydtellere og en eksempeltest med `input_audio`. Video-fanen fungerer: Den viser
kjøretidsstatusen for FFmpeg/ffprobe – én av fire eksplisitte UI-tilstander (`unknown`
mens sonderingen pågår eller ikke kunne fullføres, `restricted` på en kontrollpanelvert
som ikke bruker loopback, der sonderingen hoppes over på klientsiden, `unavailable`
når sonderingen er fullført og det er bekreftet at verktøyene mangler, eller
`available` med versjonene av FFmpeg/ffprobe) – lagrer grenser for aktivering,
modell, bilderammer, video og tidsavbrudd, filtrerer modellvelgeren til modeller
med støtte for syn, og viser videotellere.

Det tidligere Vision Bridge-kortet under AI-innstillinger er en kompatibilitetslenke
til den nye siden. Det inneholder ikke lenger en separat kopi av skjemaet. Media
Providers lenker også arbeidsflytene Image-to-Text og Speech-to-Text til de
tilsvarende Modality Bridge-fanene uten å fjerne den eksisterende
Speech-to-Text-lekeplassen.

**Forbigåelse av adgangskontroll ved selvløkke:** Når describe-kallet rutes gjennom
OmniRoutes egen `/v1`-selvløkke (modell fra en ikke-standard leverandør), sender
underforespørselen `x-omniroute-admission-bypass: internal` og autentiseres med den
avklarte legitimasjonen for selvløkken – den lokale `sk_omniroute`-sentinelen i
lokal modus eller den operatørkonfigurerte miljønøkkelen `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` (#1350), slik at distribusjoner med `REQUIRE_API_KEY=true`
fortsatt kan kjøre describe-kallet. Forbigåelsen godtas bare for nøyaktig disse
legitimasjonene, slik at eksterne klienter ikke kan bruke headeren til å hoppe
over adgangskontrollen.

Eldre standardverdier finnes i `src/shared/constants/visionBridgeDefaults.ts`.
De nye standardverdiene for modus, oppgavebevissthet og hurtigbuffer, samt
innstillingsoppløseren, finnes i
`src/shared/constants/modalityBridgeDefaults.ts`. Sikringsmekanismen tilbyr et
`deps`-alternativ i konstruktøren, slik at tester kan injisere falske
implementasjoner av `getSettings` og `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) – Modality Bridge PR-3

Avskjærer chatteforespørsler som inneholder lyd, før de når et mål som ikke er
kjent for å godta lydinndata. Den omdirigerer aldri chatteforespørselen:
Lyddelene transkriberes gjennom det eksisterende OpenAI-kompatible
multipart-endepunktet, og den valgte chattemodellen fortsetter med
teksttranskripsjoner.

Flyt:

1. Avklar `supportsAudio` gjennom `getResolvedModelCapabilities()`. Eksplisitte
   metadata i leverandørregisteret har forrang, deretter statiske modellmetadata
   og så synkroniserte `modalities_input`. En deklarert liste over inndata uten
   `audio` gir `false`; når det ikke finnes noen informasjon om egenskapen, forblir
   verdien `null`. Både `false` og `null` aktiverer den konservative broen, mens
   `true` omgår den.
2. Avklar `modalityBridgeAudio*`-innstillingene, og trekk ut skjøtbare lyddeler på
   toppnivå fra hver melding via den delte detektoren `detectMediaParts()`.
   Trådformatene OpenAI `input_audio`, `audio_url` og
   `source.media_type: "audio/*"` støttes. Nøstet lyd oppdages for ruting, men
   fjernes ikke av skjøtebanen. Arbeidsmengden begrenses av
   `modalityBridgeAudioMaxClips`; senere deler forblir urørt.
3. Bruk en konfigurert `provider/model`, eller la `selectAudioBridgeModel()` gå
   gjennom `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil katalogrekkefølge og velge den
   første modellen med brukbar legitimasjon for en aktiv leverandør.
4. `callAudioTranscription()` konverterer base64-/data-URI-lyd til en multipart-
   `file`, eller laster ned en ekstern `audio_url` gjennom den utgående sperren
   som kun tillater offentlige adresser, med DNS-festing og en grense på 25 MB.
   Deretter POST-er den filen og den valgte modellen til den lokale
   `/v1/audio/transcriptions`-selvløkken, autentisert med
   `resolveSelfLoopBearer()`. Den eksisterende transkripsjonsruten utfører vanlig
   legitimasjonsoppslag, håndtering av nedkjøling og hastighetsbegrensning samt
   videresending til leverandøren.
5. Vellykkede kall erstatter de aktuelle delene med
   `[Audio N]: <transcript>`. Kallene kjøres med `Promise.allSettled`: En enkelt
   feil bevarer den opprinnelige lyddelen (#4012-kontrakten). Hvis alle kall
   mislykkes og målet beviselig har `supportsAudio === false`, blir delene
   `[Audio N]: (unavailable — no STT provider connected)` (#8430-kontrakten). For
   et ukjent mål (`null`) forblir forespørselen urørt hvis alle kall mislykkes.
   Et dokumentert tekstbasert mål uten brukbar STT-legitimasjon mottar den samme
   eksplisitte plassholderen uten at det utføres et nettverkskall.

Vellykkede transkripsjoner bruker den prosessomfattende LRU-/TTL-hurtigbufferen
for Modality Bridge. Nøkkelen kombinerer lydreferansen, den stabile
operasjonsetiketten `audio-transcription` og den valgte STT-modellen. Feil
hurtigbufres aldri. Lydforsøk oppdaterer de delte tellerne `bridged`, `cacheHits`,
`failures` og `lastUsedAt`. Transformerte svar inneholder
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`. Urørte
forespørsler mottar ikke noe Audio Bridge-segment.

Kjøretidsinnstillingene lagres i databasen og valideres med Zod:

| Nøkkel                        | Standardverdi | Område                  |
| ----------------------------- | ------------- | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`        | —                       |
| `modalityBridgeAudioModel`    | `""`          | Automatisk eller STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`       | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`           | 1–10                    |

Den delte hurtigbufferen styres fortsatt av `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` og `modalityBridgeCacheMaxEntries`.

### Videobro (`videoBridge.ts`, `videoBridgePipeline.ts`)

Fanger opp videodeler på toppnivå i `messages` for Chat Completions og `input`
for Responses API før et mål uten kjent innebygd videostøtte kalles.
Støttede formater er `input_video`, `video_url`, `video_source`, HTTPS-URL-er
og `data:video/*;base64,...`-data-URI-er. Vanlige filnavn i tekst behandles ikke
som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) håndterer gjennomgang av forespørselen,
kontroll av funksjonalitet/retningslinjer, aggregering per forespørsel og responsnyttelasten.
Arbeid per video – innhenting, hurtigbufring av hele resultatet, beskrivelse av en
bildesekvens (som kombinerer eventuell lyden transkripsjon angitt av kalleren) samt
målinger/avbrudd/opprydding per forsøk – er skjult bak `processVideoPart` i
`videoBridgePipeline.ts`, som kalles én gang per videodel i løkken til `preCall`.
Denne modulen definerer også de eksplisitte portgrensene `VideoMediaBrokerPort`
(innhenting av byte og uttrekking av samplede bilder), `VideoAudioTranscriptionPort`
(kombinering av en lydtranskripsjon angitt av kalleren med de samplede bildetekstene) og
`VideoDrilldownPort` (persistensgrensen for detaljvisning av bilder; ennå ikke koblet
til `processVideoPart` – i dag er det bare den separate ruten
`/api/modality-bridge/video/drilldown` som skriver detaljvisningsoppføringer).

Den offentlige `/v1`-forespørselsbanen importerer eller starter aldri en underprosess.
Eksterne videoer lastes ned med en grense på 50 MiB. Innebygde base64-videoer har en
konservativ grense på 36 MiB dekodet per video, slik at konvolutten for
modell/meldinger/innramming kan holde seg innenfor opptaksgrensen på 50 MiB for
offentlige JSON-forespørsler. Innebygd lengde og estimert dekodet størrelse kontrolleres
før allokering. HTTPS kreves for den opprinnelige eksterne URL-en og hver
viderekobling, ved bruk av det eksisterende vernet for kun offentlige utgående
tilkoblinger med DNS-binding. Bytene krysser deretter nøyaktig den interne
meglergrensen `POST /api/modality-bridge/video/extract`. Denne ruten er både
`LOCAL_ONLY` og `SPAWN_CAPABLE`, godtar bare en autentisert forespørsel per prosess
fra en klarert loopback-adresse og godtar aldri en URL, filsystembane, kjørbar fil
eller argumentliste. API-ets pipeline for brødtekststørrelse og behandlerens
inkrementelle brødtekstleser håndhever uavhengig en grense på 50 MiB for inndata
til megleren. Den begrensede køen kjører én uttrekking om gangen, tillater fire
ventende jobber og begrenser ventende inndata til 100 MiB.

I megleren leser `ffprobe` en privat lokal fil. Den faste tillatelseslisten for
formater utelukker spilleliste- og manifestformater. For tillatte beholdere i
MOV-familien forblir eksterne MOV-datareferanser deaktivert som standard, og den
faste kommandoen aktiverer dem ikke. Både `ffprobe` og `ffmpeg` bruker
protokolltillatelseslisten som bare tillater `file`, én tråd, faste argumenttabeller,
ingen shell og kjørbare filer funnet via `PATH`. Omslagsstrømmer med vedlagte bilder
er ikke avspillbare kandidater. Alle avspillbare strømmer må oppfylle grensene, og
en eksplisitt standardstrøm foretrekkes før det deterministiske reservemønsteret med
lavest indeks. Videoer er begrenset til 600 sekunder, 8 192 piksler per dimensjon og
33 554 432 kildepiksler. FFmpeg sampler 1–16 JPEG-bilder fra midtpunkter, skalerer
ned den lange kanten til maksimalt 1 024 piksler uten å oppskalere mindre inndata og
mottar aldri en URL. Sampling er som standard `uniform`. De valgfrie retningslinjene
`scene_aware` og eksperimentelle `segment_aware` utfører én ekstra fast FFmpeg-passering
over den allerede validerte lokale strømmen, velger begrensede
`showinfo`-scenetidsstempler og faller deterministisk tilbake til de samme jevnt
fordelte midtpunktene ved detektorfeil, tidsavbrudd, feilformatert utdata eller et
tomt kandidatsett. Segmentbevisst modus fordeler midtpunktssamplinger proporsjonalt
mellom de validerte sceneintervallene. Dokumentasjon for segmentbevis og
reservemønsteret i segmentbevisst modus finnes nedenfor. Den absolutte grensen på
16 bilder brukes etter utvelgelsen i alle retningslinjer. Når en scenebevisst
forespørsel bare har et budsjett på ett bilde, bruker den det jevnt fordelte
midtpunktet i det aktive fullvideo- eller fokusvinduet og rapporterer
`policyEffective: uniform`: Ett enkelt valgt scenebilde kan ikke bevare begge
tidsmessige endepunkter. En kaller kan valgfritt angi et endelig fokusvindu
(`start`/`end` i sekunder). Grensene begrenses til mediets varighet, reverserte
eller ikke-endelige vinduer avvises, og alle samplingsretningslinjer utføres bare
innenfor det normaliserte intervallet. Det resulterende vinduet inkluderes i
samplingsmetadataene og i det uklarerte beskrivelsesprefikset, slik at
nedstrømsmodeller kan skille et fokusert utdrag fra hele tidslinjen.

Semantisk fokus for bildetekster er en separat, eksplisitt innstilling. Standardmodusen
`full` for analyse beholder den eksisterende bildeprompten og videresender aldri
forespørselstekst til bildetekstmodellen. I `focused`-modus leser broen bare den
nyeste ikke-tomme brukerforfattede `text`/`input_text` fra den samme Chat- eller
Responses-beholderen, normaliserer den til NFC, slår sammen kontrolltegn og mellomrom
og begrenser den til 500 Unicode-kodepunkter. Et tomt resultat faller tilbake til
den nøyaktige `full`-prompten. Et brukbart hint serialiseres som JSON i en egen blokk
for uklarert brukerkontekst og kan bare prioritere observerbare detaljer. Det kan
ikke overstyre den separate advarselen mot å følge instruksjoner som er synlige eller
hørbare i mediet. Tekstlig fokus utleder aldri `start`/`end` eller endrer den
tidsmessige sampleren.

#### FU-07 strukturelt segmentbevis

`segment_aware` bruker én avgrenset forhåndsanalysepassering over den allerede validerte
lokale videostrømmen. Den faste filterkjeden skalerer først til maksimalt 320 piksler
i bredden, oppdager sceneendringer og frosne intervaller, og utfører deretter sampling med 1 bilde per
sekund for uskarphet, gjennomsnittlig luminans og romlig/temporal informasjon. Passeringen er
begrenset til 600 strukturelle samplinger, én FFmpeg-/filtertråd, de samme
tillatelseslistene for protokollen `file` og containere, en grense på 1 MiB for prosessutdata
og maksimalt 30 sekunder innenfor meglerens delte avbrudds-/tidsfrist. Den
godtar aldri en kommando, et filter, en bane eller en URL fra forespørselen.

De strukturelle verdiene er deterministisk samplingsbevis, ikke semantisk
videoforståelse. De utleder ikke motiver, handlinger, bildetekster, tale eller
brukerintensjon. Scene- og frysegrenser danner segmenter; frysedekning, uskarphet,
eksponering, romlig detaljnivå og temporal endring påvirker bare hvordan det eksisterende
budsjettet på 1–16 bilder fordeles. Et fullstendig frosset segment begrenses til ett bilde,
mens ikke-frosne segmenter konkurrerer om det gjenværende budsjettet. Når antallet grenser
overstiger antallet bilder, beholdes jevn dekning av tidslinjen, slik at raske, tidlige klipp
ikke kan skjule et langt avsluttende segment. Scenegrenser innenfor analysens
oppløsning på 1 sekund fra en frysegrense slås sammen.

Manglende filtre, ugyldige/tomme bevis, en detektorfeil eller tidsavbrudd i den
avgrensede forhåndsanalysen går tilbake til den nøyaktige policyen med jevnt fordelte midtpunkter.
Et avbrudd fra anroperen eller meglerens tidsfrist går ikke tilbake til standardpolicyen: det avslutter
den pågående underprosessen, forhindrer senere bildeekstraksjon, og det private
midlertidige treet fjernes i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererer deterministiske, reelle FFmpeg-
testressurser for innsparing i bildetekstanrop etter deduplisering, budsjettfordeling for
tett bevegelse, bevis for uskarphet/eksponering/SI-TI, raske klipp med en lang avslutning
og falske positiver ved gradvis toning. Det registrerer medgått veggklokketid for forhåndsanalysen
og, der `/usr/bin/time` er tilgjengelig, underprosessens CPU-bruk og høyeste RSS. Kvalitetskontrollene
er bare strukturelle orakler. Kvaliteten til den reelle bildetekstmodellen forblir `HOLD`
fordi denne testriggen ikke har noe autorisert endepunkt eller noen fastlåst dommer.
Økonomiske besparelser forblir også `HOLD` med mindre
`--caption-cost-per-call-usd` angir et eksplisitt positivt kostnadsestimat per anrop;
skriptet fabrikerer aldri noen av resultatene.

Hvert bilde er begrenset til 4 MiB, alle råbilder samlet til 23 MiB og det
serialiserte meglersvaret til 32 MiB. En privat midlertidig katalog fjernes
i `finally`. OmniRoute inkluderer ikke FFmpeg og godtar ikke en egendefinert
bane til den kjørbare filen. Før bildetekst genereres, bruker broen en konservativ visuell
dedupliseringspassering: Hver JPEG reduseres til en gråtonebuffer på 16×16 og
sammenlignes bare med det siste bildet som ble beholdt. For et forespurt bildetekstbudsjett
på mer enn ett bilde leverer ekstraksjonen en
avgrenset kandidatgruppe på opptil det dobbelte av budsjettet og aldri mer enn 16 bilder.
Den forespurte grensen brukes først etter deduplisering, og den første og siste
valgte kandidaten beholdes under den endelige uttynningen når budsjettet er minst
to. Den versjonerte policyen
`grayscale-16x16-mean-cells-v2` bruker den største verdien av gjennomsnittlig luminansdelta og
andelen miniatyrbildeceller med en normalisert delta på minst 0.05.
Terskelen for duplikater er konstanten 0.04, valgt for forutsigbarhet fremfor
å eksponeres som en kjøretidsinnstilling. Dette sekundære
høykontrastsignalet bevarer små bevegelser og endringer i synlig tekst som en
sammenligning basert kun på gjennomsnitt kan skjule. Feil i komparatoren eller dekoderen
fører til at dekningen beholdes. Utdatametadata skiller mellom ekstraherte kandidater,
bilder som ble brukt, og visuelle duplikater som ble fjernet.

En eksplisitt merket videodel kan be om et tidsstemplet kontaktark. Broen
bygger et JPEG-rutenett med maksimalt 4 kolonner og 16 bilder. Hver celle på 512 piksler
brenner kildens tidsstempel inn i et bunnfelt med høy kontrast, mens de samme tidsstemplene
beholdes i tekstmetadata for videre tilknytning og revisjon. Hele
JPEG-bildet er fortsatt begrenset til 32 MiB. Hvis `sharp` ikke kan dekode eller sette sammen rutenettet,
går broen tilbake til de individuelle JPEG-bildene; et avbrudd fra klienten forplanter seg fortsatt
gjennom kontaktarkoperasjonen.

Dokumentasjon for produksjonssetting er bevisst atskilt fra den syntetiske
mikroytelsestesten for komposisjon. `scripts/perf/video-bridge-contact-sheet-eval.ts` definerer en
skjemaversjonert A/B-testrigg for reelle OpenAI-kompatible synsmodeller. Den måler
leverandørrapporterte tokener, ende-til-ende-veggklokkelatens (inkludert sammensetting av kontaktark),
antall modellanrop og manifestdefinert bevaring av fakta. Rå modelsvar skrives ikke
til rapporten; bare SHA-256-digester og samsvarende fakta-ID-er beholdes. Testriggen
utfører ingen nettverksanrop eller betalte modellanrop med mindre `--execute-real` sendes og
`--model`, `OMNIROUTE_BASE_URL` og `OMNIROUTE_API_KEY` er konfigurert. Uten
en slik eksplisitt reell kjøring forblir den maskinlesbare konklusjonen `HOLD`; syntetiske
målinger av nyttelast/antall anrop alene er ikke dokumentasjon for produksjonssetting.

Anropere kan knytte en valgfri `transcript.cues`-matrise til en støttet videodel
når de allerede har tidsjustert tekst. Hver markør må inneholde `text`, et
endelig `start`/`end`-intervall innenfor den undersøkte varigheten og en tillatt
`source` (`client`, `embedded` eller `audio-bridge`); `confidence` er som standard
`1` og må være mellom `0` og `1`. Helt identiske markører slås sammen.
OmniRoute starter aldri transkripsjon fra disse metadataene: Validerte markører
kopieres inn i det beskrevne resultatet med kilde, konfidens og intervall, og
gjengis som ikke-klarerte observasjoner sammen med bildetekstene. Ugyldig tekst,
tekst utenfor gyldig område eller tekst uten proveniens avvises i stedet for å blandes inn i
bildetekststrømmen. Begge transkripsjonskanalene i forespørselskroppen normaliserer angitt
proveniens til `client`, inkludert egenerklærte etiketter som `embedded` eller `audio-bridge`.
Bare en servereid adapter kan tilordne disse klarerte etikettene gjennom
det kodeeksklusive argumentet `trustedSource`; et JSON-felt i forespørselen kan ikke nå
dette argumentet. Transkripsjonstekst forblir ikke-klarert innhold avledet fra medier,
uavhengig av proveniens, og må aldri bestemme autorisasjon.

En avansert klient kan angi et `audioTranscript`-spor for den samme videoen;
det behandles som tekst levert av klienten, ikke som bevis på transkripsjon på serveren.
Fusjonspunktet kjører visuelle observasjoner og lydobservasjoner med
én felles tidsfrist og ett avbruddssignal, ordner dem på en felles tidslinje, slår sammen
helt identiske duplikater og rapporterer et delvis resultat når bare én side lykkes.
Et ugyldig `audioTranscript` nedgraderes til dette delvise resultatet — den visuelle
beskrivelsen beholdes, og lydgrenen registrerer en renset feilkode —
i stedet for at hele videoen mislykkes. Tilgjengelighet per gren, delvis-flagget
og de rensede feilkodene bevares i det beskrevne resultatet, i
metadataene for sikkerhetsreglene (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i metadataene for resultatbufferen og i broens
fusjonstellere. Standardbanen for Video Bridge starter ikke tale-til-tekst
eller laster ned en ekstra kopi av mediet; uten dette eksplisitte sporet forblir den
begrenset til video.

**Oppbevaring av transkripsjoner (#12150 P1).** Dette gjelder automatisk hver gang
Video Bridge (som i seg selv er valgfri) gjengir en transkripsjonsmarkør — det finnes ikke noe
eget oppbevaringsflagg. Når en forespørsel gjengir en hvilken som helst transkripsjonsmarkør (en `transcript`
angitt av klienten eller et sammenslått `audioTranscript`), merker sikkerhetsregelen den som
`videoBridgeObserved` og produserer en sladdet skygge av videobeskrivelsen —
en identisk gjengivelse der fritekstinnholdet i hver markør erstattes med
`[redacted-video-transcript]`, bygget ved å erstatte det strukturerte markørfeltet
før strengen settes sammen (aldri ved å tolke den utflatede teksten, slik at ikke noe
markørinnhold — verken ondsinnet eller ordinært, inkludert innhold som inneholder `]`, som
`[inaudible]`/`[music]` — kan bli med videre). Forespørselsinnholdet i den lagrede anropsloggen bytter ut
hver videoavledede tekstdel med denne sladdede skyggen, sammenlignet etter
innholdslikhet; `fullText`-ankeret leses på nytt fra den ferdige sikkerhetsnyttelasten
før anropet, slik at samsvaret fortsatt lykkes etter at senere sikkerhetsregler i kjeden (maskeringene for
personopplysninger og legitimasjon, med prioritet 10/95) omskriver beskrivelsesteksten på stedet, og
etter at injisering av systeminstruks, overlevering og minne omformer meldingsmatrisen. Innholdet
som sendes oppstrøms til modellen, er uendret. En observert forespørsel fyller heller ikke ut
noe varig Memory (uttrekk avledet både fra forespørselen og svaret hoppes over),
slik at modellens eget svar ikke kan gjengi transkripsjonstekst i Memory.

**Rå videofelt (#12430).** Når broen er aktivert og innebygd videostøtte er ukjent eller mangler, aktiverer også definerte `transcript`-/`audioTranscript`-felt `videoBridgeObserved`, selv etter feil i beskrivelsen eller en `maxVideos`-grense. `null` og tomme strenger teller; manglende felt og metadata som ikke gjelder video, gjør det ikke. Oppbevarte kopier sladder disse feltene eller utelater forespørselen, og buffere/Memory omgås.

På disse reservebanene blir gyldige markører fra klienten til støttede `text`-/`input_text`-
deler i stedet for ikke-standardiserte leverandørfelt. Begge sporene som følger med forespørselen,
forblir uklarerte `client`-observasjoner, med en eksplisitt advarsel om at videoen
ikke ble beskrevet, og at tidsstemplene ikke ble kontrollert mot mediet. De eksisterende
grensene på 256 markører/64 KiB totalt og per markør gjelder for de to sporene samlet;
tidsstemplene må være innenfor meglerens grense på 600 sekunder og et eventuelt angitt fokusvindu.
Ugyldige spor forkastes og videresendes ikke som vilkårlig tekst; et gyldig
søsken kan fortsatt brukes med mindre det samlede budsjettet deres overskrides. Nullverdier/tomme
felt legger ikke til tekst. Denne reservebanen legger ikke til mediehenting eller transkripsjon.
Utvidelsesfelt for transkripsjon fjernes fra reservebanens videobeholder og dens
`video_url`-/`source`-objekter. Tillatelseslisten på OpenAI-grensesnittet forblir streng; ukjente innebygde
videobeholdere forblir tilgjengelige, og kjente mål som bare støtter tekst, beholder sikre markører.
Strukturerte sladdingsskygger beskytter den tilføyde transkripsjonsteksten, mens den
opprinnelige forespørselen som eies av klienten, forblir uendret. Mål med innebygd støtte og
deaktiverte broer beholder sin eksisterende omgåelsesatferd.

Ytterligere oppbevarte kopier bruker det samme signalet for observerte forespørsler. Det rå
øyeblikksbildet av klientforespørselen før sikkerhetsreglene, den ventende forespørselen i minnet og den tidlige
loggen over avviste forespørsler erst

Den interne livssyklusen for `/api/modality-bridge/video/drilldown` er et separat, loopback-/tokenautentisert hurtigbuffergrunnlag. Hver operasjon krever også en kanonisk, ugjennomsiktig principal-ID. Før en produksjonsklient aktiveres, må den utlede denne ID-en fra den autentiserte tenant-en og aldri videresende en verdi valgt av klienten. Hurtigbuffernøkler binder denne principal-en til kanoniske økt- og videoreferanse-ID-er, lagrer bare de SHA-256-utledede nøklene deres og avgrenser både lesing og sletting til samme principal. Hurtigbufferen lagrer maksimalt 16 utledede JPEG-bilder per oppføring, lar dem utløpe etter ti minutter og støtter avgrensede `start`/`end`-lesinger eller eksplisitt sletting av økter.

Hver principal er begrenset til 16 oppføringer og 64 MiB med kanoniske JPEG-data. Disse grensene er uavhengige av den globale grensen på 64 oppføringer/256 MiB: Belastning på en principal-kvote fører bare til utkastelse av de minst nylig brukte oppføringene for den aktuelle principal-en før global LRU-utkastelse vurderes. Utløpte oppføringer fjernes fra både principal- og global regnskapsføring ved hurtigbufferaktivitet, mens kansellering og valideringsfeil ikke lagrer en delvis erstatning.

Hurtigbufferen avviser ikke-kanonisk Base64, overflødig utfylling, medier som ikke er JPEG, ugyldige eller avkortede JPEG-filer og JPEG-filer som utløser en advarsel under en avgrenset fullbildedekoding med `sharp`. Hvert godkjente bilde kodes på nytt som en kanonisk JPEG, bredde og høyde utledes fra de dekodede byteverdiene i stedet for å stole på felter fra klienten, og eventuelle etterfølgende polyglott-byte forkastes i stedet for å beholdes. Bare den avgrensede, kanoniske, komprimerte bufferen belastes begge kvotene. JSON-grensen på overføringsnivå inkluderer Base64-overhead for grensen på 32 MiB for dekodede inndata. Hver lagrede utledning registrerer det validerte JPEG-formatet og -oppløsningen, samplingspolicyen, utledningsversjonen, opprettelsestidspunktet, en innholdshash beregnet av serveren samt en hashet overordnet referanse og innholdshashen til den overordnede ressursen fra den betrodde klienten. Det kontrolleres for kansellering mellom asynkrone dekodings-/hashfaser før den atomiske lagringen i hurtigbufferen.

Denne leveransen kobler ennå ikke en produksjonsprodusent til ruten og tilbyr ikke valg mellom varianter med flere oppløsninger. Den transparente forespørselsbanen for Video Bridge medfører derfor ikke ekstra arbeid, mens tenant-bundet utledning av principal-er og hele livssyklusen for FU-08 med flere oppløsninger fortsatt er eksplisitt oppfølgingsarbeid og ikke dokumenteres som fullført funksjonalitet.

Bilder tekstes sekvensielt med den konfigurerte Video-modellen. En tom Video-overstyring arver Vision-innstillingen. Hvis begge er tomme, velger Vision-autoruteren den effektive modellen med støtte for visuell behandling. Vellykkede bildetekster erstatter den opprinnelige delen med et stabilt `[Video description:`-prefiks som også markerer teksten som en ikke-klarert observasjon utledet fra medier, og instruerer nedstrømsmodeller om ikke å følge instruksjoner som finnes i mediet. Hurtigbuffernøkler for bildetekster inkluderer JPEG-byteverdiene, ledeteksten, tidsstempelet og den effektive modellen. Bare vellykkede bildetekster hurtigbufres. Hurtigbufferoppføringer beholder modellen som faktisk produserte et vellykket resultat, inkludert en reservemodell. Broen rapporterer `mixed` når ulike bilder ble produsert av ulike modeller. Et hurtigbuffertreff gjenbruker denne produsentidentiteten i stedet for å merke den på nytt som den forespurte rutingsplanen. Resultathurtigbufferen for hele videoen bruker alle inndata som endrer utdataene, som nøkkel — ledetekst, effektiv modell, samplingspolicy, antall bilder, semantisk analysemodus, SHA-256-fingeravtrykket til det normaliserte fokushintet, fokusvinduet, `transcript`, `audioTranscript` og kontaktarkflagget — slik at en endring i en hvilken som helst av disse dimensjonene gir en hurtigbuffermiss, aldri gjenbruk av et foreldet resultat. Versjonen og terskelen for policyen for visuell deduplisering samt det avgrensede antallet kandidatbilder er også eksplisitt angitt i nøkkelen og metadataene for resultathurtigbufferen. En policyendring kan derfor ikke gjenbruke en foreldet beskrivelse av hele videoen. Metadataene for resultathurtigbuffer v4 beholder modusen og fingeravtrykket, aldri den rå brukeroppgaven. Metadata for sikkerhetsmekanismer rapporterer både forespurt og effektiv analysemodus. En forespurt `focused`-modus uten brukbar brukertekst rapporteres med `full` som effektiv modus.

Sikkerhetsmekanismen trekker ut alle støttede videodeler, men beskriver ikke flere enn `modalityBridgeVideoMaxVideos`. For et mål som beviselig har `supportsVideo === false`, blir mislykkede videoer og videoer over grensen erstattet med eksplisitte, sikre tekstmarkører, slik at ingen rå video blir værende. Når kapasiteten er ukjent, beholder disse delene videobeholderen sin. Eventuelle reservetranskripsjoner følger den avgrensede tekstkonverteringen ovenfor. Mål med `supportsVideo === true` omgår broen. Avbruddssignalet fra klientforespørselen forplanter seg gjennom nedlasting, meglerkø, delprosesser og kall for generering av bildetekster. Avbrudd stopper mellom videoer og faller aldri tilbake til å tillate råmedier.

Kjøretidsinnstillingene er DB-støttede og validert med Zod:

| Nøkkel                              | Standard    | Område / virkemåte                                                                                               |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valgfri kjøretid, må aktiveres eksplisitt                                                                        |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` bevarer generiske bildetekster; `focused` bruker avgrenset, ikke-klarert kontekst fra den nyeste brukeren |
| `modalityBridgeVideoModel`          | `""`        | Arver Vision Bridge-modellen                                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                             |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` eller proporsjonal `segment_aware`; detektorfeil faller tilbake til `uniform`           |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                              |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                   |

Eldre lagrede tidsavbruddsverdier for Video på over 120 sekunder begrenses til
meglers tidsfrist; nye innstillingsverdier over denne grensen avvises.
`GET /api/modality-bridge/video/runtime` krever klarert, stemplet lokal
loopback-opprinnelse før autentisering eller sondering av kjøretidsmiljøet, og krever deretter
administrasjonsautentisering. Det returnerer bare `available`, rensede FFmpeg/ffprobe-versjoner og en fast
begrunnelse når kjøretidsmiljøet ikke er tilgjengelig. Det interne endepunktet for uttrekking er ikke
et offentlig opplastings-API: kømetning returnerer `503` pluss `Retry-After`, en
frakobling fra innringeren returnerer `499`, og meglerens faste tidsfrist returnerer `504`. Konverterte svar legger til
`video->text;model=<visionModel>;parts=<videos>` i den sentrale
`x-omniroute-modality-bridge`-headeren uten å fjerne Vision- eller Audio-segmenter.

### PII-maskering (`piiMasker.ts`)

Kjøres i **begge** stadier.

- **`preCall`** kloner nyttelasten, går gjennom `system`, `messages`, `input` og
  `prompt` (inkludert elementer som er rene strenger), og anvender `processPII()` (fra
  `@/shared/utils/inputSanitizer`) på `content`-/`text`-felt med strenger. Når
  `PII_REDACTION_ENABLED=true`, blir oppdagede personopplysninger sladdet i den utgående
  nyttelasten. Dette er uavhengig av `INPUT_SANITIZER_MODE` (som bare styrer
  policyen for promptinjeksjon). Når sladding er deaktivert, registrerer kallet antall
  oppdagelser uten å skrive om innholdet.
- **`postCall`** dypkloner svaret, kjører `sanitizePIIResponse()` samt
  maskeringen for Responses-API-formatet (`maskResponsesOutput` — dekker
  `output_text` og `output[].content[].text`). Hvis sladding forekommer, erstatter det
  endrede svaret originalen.

Sikkerhetsregelen blokkerer aldri; den annoterer bare (`meta.detections`,
`meta.redacted`) eller skriver om.

### Promptinjeksjon (`promptInjection.ts`)

Oppdager fiendtlige strukturer i brukerlevert innhold og håndhever den
konfigurerte policyen. Virkemåten styres av miljøvariabler og
konstruktøralternativer:

| Innstilling        | Miljøvariabel                                                                                               | Standard | Effekt                                                                                                                                                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktivert           | `INPUT_SANITIZER_ENABLED`                                                                                   | `true`   | Når den er `false`, avsluttes sikkerhetsregelen umiddelbart.                                                                                                                                                         |
| Modus              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                             | `warn`   | Injeksjonspolicy: `block`, `warn` eller `log`. (`redact` godtas for bakoverkompatibilitet, men fjerner **ikke** injeksjonstekst; omskriving av personopplysninger i forespørsler styres av `PII_REDACTION_ENABLED`.) |
| Blokkeringsterskel | alternativet `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Minste alvorlighetsgrad som kreves for blokkering. Medium overvåkes bare med standardinnstillingen.                                                                                                                  |

**Modusprioritet** (`getMode`): innringerens `options.mode` →
**overstyring via DB-funksjonsflagg for** `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → miljøvariabelen `INJECTION_GUARD_MODE` → miljøvariabelen `INPUT_SANITIZER_MODE` →
`warn`. En overstyring fra kontrollpanelet har derfor prioritet over miljøvariablene, slik at
grensesnittet for Feature Flags styrer den kjørende sikkerhetsregelen direkte (uten omstart). DB-avlesningen er feilsikker:
Hvis det oppstår en feil, faller sikkerhetsregelen tilbake til den miljøbaserte virkemåten, og når ingen
overstyring er angitt, er virkemåten identisk med en løsning som bare bruker miljøvariabler.

Deteksjonskilder:

1. `sanitizeRequest()` fra `@/shared/utils/inputSanitizer` (det delte detektor-
   settet som brukes andre steder i behandlingskjeden).
2. Innebygde `DEFAULT_GUARD_PATTERNS` (for øyeblikket `system_override_inline` og
   `markdown_system_block`, begge med alvorlighetsgraden `high`).
3. Valgfrie `customPatterns` sendt via konstruktøralternativer (strenger, regulære uttrykk
   eller `{ name, pattern, severity }`-oppføringer).

Når `mode === "block"` **og** minst én deteksjon oppfyller terskelen for
alvorlighetsgrad, returnerer `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }`. I modusene `warn`/`log` logger sikkerhetsmekanismen,
men tillater kallet. Den delte hjelpefunksjonen `evaluatePromptInjection()` eksporteres
også for kallere som må evaluere prompter uten å gå gjennom registeret.

**Skannegrense (v3.8.20):** Detektoren undersøker bare de **første 16 KB** av
den sammenføyde promptteksten — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) i
`src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` og
`evaluatePromptInjection()` bruker `slice(0, MAX_INJECTION_SCAN_BYTES)` før
mønsterløkken kjøres. Injeksjonsdirektiver befinner seg nær begynnelsen av inndataene,
så dette begrenser CPU-/GC-bruken fra regulære uttrykk for nyttelaster på flere hundre
KB uten å svekke deteksjonen (jf. #3932, #4041).

### Maskering av tilgangsinformasjon (`credentialMasker.ts`)

Kjøres i **begge** faser, sist i standardkjeden (prioritet `95`). Sensurerer
velkjente mønstre for API-nøkler / hemmelige tokener fra den utgående nyttelasten
(meldingsinnhold, argumenter for verktøykall, verktøyresultater) **og** leverandørens
respons, slik at tilgangsinformasjon som limes inn i en prompt (eller gjentas av et
verktøyresultat), ikke lekker til den eksterne leverandøren eller tilbake til klienten.

- **Kun aktivert eksplisitt**, etter samme konvensjon som sensurering av
  personopplysninger (i tilknytning til ufravikelig regel nr. 20):
  deaktivert med mindre `settings.credentialRedactionEnabled === true` **eller**
  `CREDENTIAL_REDACTION_ENABLED=true`. Når funksjonen er slått av, gjør
  sikkerhetsmekanismen ingenting — den blokkerer aldri og omskriver aldri.
- `redactCredentials()` går gjennom hele nyttelast-/responstreet (`walkValue()`,
  beskyttet mot prototypeforurensning og syklussikkert via `WeakSet`) og erstatter
  treff med en `[REDACTED:<type>]`-plassholder, samtidig som bare grenene som
  faktisk er endret, klones.
- `CREDENTIAL_PATTERNS` dekker nøkler for LLM-leverandører (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-tokener (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betalingsnøkler (Stripe, Square),
  skynøkler (AWS-tilgangsnøkkel, Twilio, SendGrid, Mailgun), private nøkler /
  JWT-er, tilkoblingsstrenger som inneholder tilgangsinformasjon
  (`mongodb://user:pass@...` osv.), samt et generisk mønster for headerverdier
  av typen `Authorization`/`x-api-key`/`api-key`/`apikey`. Headerformede nøkler
  (`authorization`, `x-api-key`, `api-key`, `apikey`) sensureres strukturelt
  (bare verdien, mens skjemaprefikser som `Bearer `/`Basic ` beholdes), i stedet
  for via det generiske regulære tekstuttrykket.
- Sikkerhetsmekanismen blokkerer aldri; den omskriver (`modifiedPayload` /
  `modifiedResponse`) og annoterer (`meta.credentialsRedacted`, `meta.count`) bare.

Regresjonsvern: `tests/unit/credential-masker-guardrail.test.ts`.

## Basiskontrakt (`base.ts`)

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
  block?: boolean; // true kortslutter kjeden
  message?: string; // vises ved blokkering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneres av preCall for å omskrive forespørselen
  modifiedResponse?: TValue; // returneres av postCall for å omskrive svaret
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

En sikkerhetsmekanisme signaliserer «ingen endring» ved å returnere enten `void`, `{}` eller
`{ block: false }`. Hvis en `modifiedPayload`/`modifiedResponse` returneres, erstattes
verdien som flyter gjennom kjeden for etterfølgende sikkerhetsmekanismer.
`signal?: AbortSignal` viderefører livssyklusen til den som kaller, inn i sikkerhetsmekanismene. Avbrudd av en forespørsel er det tilsiktede fail-open-unntaket: mediebroer stopper arbeidet og rydder opp uten å gjenopprette råmedier til et mål som man vet ikke støtter dem.

## Register (`registry.ts`)

Singleton-objektet `guardrailRegistry` eksponerer:

- `register(guardrail)` — legger til en sikkerhetsmekanisme (eller erstatter etter normalisert navn) og
  sorterer på nytt etter stigende `priority`.
- `clear()` / `list()` — administrative hjelpefunksjoner.
- `runPreCallHooks(payload, context)` — itererer gjennom aktive sikkerhetsmekanismer, fører
  nyttelasten videre gjennom `modifiedPayload` og stopper ved den første `block: true`.
- `runPostCallHooks(response, context)` — samme flyt på svarsiden.
- `resetGuardrailsForTests({ registerDefaults })` — tømmer tilstanden og registrerer eventuelt
  standardinnstillingene på nytt for ren testisolasjon.

Begge kjørerne returnerer `{ blocked, payload|response, results, guardrail?, message? }`,
der `results` er en matrise med `GuardrailExecutionResult`-oppføringer som inneholder
feltene `blocked`, `skipped`, `modified`, `error` og `meta` per sikkerhetsmekanisme,
noe som er nyttig for sporing.

### Deaktivere sikkerhetsmekanismer per forespørsel

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` samler en
duplikatfri liste over navn på sikkerhetsmekanismer som skal hoppes over for den gjeldende
forespørselen. Kilder (alle valgfrie, alle slås sammen):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` i forespørselskroppen (på toppnivå)
- `metadata.disabledGuardrails` i forespørselskroppen
- Headeren `x-omniroute-disabled-guardrails` (eller den eldre
  `x-disabled-guardrails`)

Verdier kan være matriser med strenger eller en kommaseparert streng. Navn
normaliseres til kebab-case med små bokstaver (`pii_masker` → `pii-masker`). Resultatet
sendes via `context.disabledGuardrails` til registeret, som hopper over
samsvarende sikkerhetsmekanismer (`skipped: true` i `results`).

## Utførelsesrekkefølge

For hver forespørsel som går gjennom `src/sse/handlers/chat.ts` og
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` bygger listen over elementer som skal hoppes over, basert på API-nøkkel, body
   og headere.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` kjører sikkerhetsmekanismene i stigende
   prioritetsrekkefølge:
   - Deaktiverte sikkerhetsmekanismer registreres som `skipped`.
   - Hver sikkerhetsmekanismes `preCall` kan skrive om payloaden via `modifiedPayload`.
   - Den første `block: true` avbryter kjeden, og handleren returnerer
     et avvisningssvar fra sikkerhetsmekanismen.
3. Den (potensielt omskrevne) payloaden går videre til kombinasjonsruting og oppstrøms
   videresending.
4. Etter at svaret er satt sammen, kjører `guardrailRegistry.runPostCallHooks(...)`
   den samme kjeden på svaret. `block: true` her forkaster det oppstrøms
   svaret.

Sikkerhetsmekanismer som utløser unntak, registreres med `error: <message>` og logges via
`logger.warn`, men kjeden fortsetter — fail-open med hensikt.

## Konfigurasjon

Miljøvariabler som leses av de innebygde sikkerhetsmekanismene:

| Variabel                              | Brukes av                | Effekt                                                                                                                |
| ------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Sett til `false` for å deaktivere deteksjon fullstendig.                                                              |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Retningslinje for injeksjon: `warn`, `block` eller `log`. Den eldre verdien `redact` skriver ikke om injeksjonstekst. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Modus for injeksjonsbeskyttelsen; også et funksjonsflagg i databasen som **overstyrer** miljøvariablene (DB > ENV).   |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Laveste alvorlighetsgrad som `MODE=block` avviser: `high` (standard), `medium` eller `low`.                           |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Eldre alias for `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | Når satt til `true`, blir PII i forespørselen sladdet (uavhengig av injeksjonsmodus).                                 |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nedstrøms) | Styrer maskeringsatferd på svarsiden.                                                                                 |

Sikkerhetsmekanismene i Modality Bridge leser kjøretidskonfigurasjon fra det databasebaserte innstillingslageret
(`getSettings()`), ikke fra miljøvariabler. De primære nøklene for Vision er
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` og
`modalityBridgeCacheMaxEntries`. De eldre
`visionBridge*`-nøklene godtas bare som den dokumenterte reservemekanismen for lesing i én syklus;
skriving fra kontrollpanelet bruker de primære nøklene. Standardverdier og fallback-resolveren
finnes i `src/shared/constants/modalityBridgeDefaults.ts`, mens eldre
konstanter beholdes i `src/shared/constants/visionBridgeDefaults.ts`.

Audio bruker `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` og `modalityBridgeAudioMaxClips`, i tillegg til de delte
`modalityBridgeCache*`-innstillingene. Audio har ingen fallback til eldre nøkler fordi disse
nøklene ble introdusert med Modality Bridge-skjemaet.

Video bruker `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` og
`modalityBridgeVideoTimeout`, i tillegg til de delte `modalityBridgeCache*`-innstillingene.
Den er deaktivert som standard fordi FFmpeg/ffprobe er valgfrie driftsavhengigheter,
og teksting av bilderammer øker latensen og modellkostnaden.

## Egendefinerte sikkerhetsmekanismer

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

Trinn:

1. Opprett `src/lib/guardrails/myGuardrail.ts` som utvider `BaseGuardrail`.
2. Implementer `preCall` og/eller `postCall`.
3. Registrer enten ved importtidspunktet (legg til fra `registerDefaultGuardrails`), eller
   kall `guardrailRegistry.register(...)` under kjøring — registeret erstatter
   eventuelle tidligere sikkerhetsmekanismer med samme normaliserte navn.
4. Legg til tester under `tests/unit/` (eksisterende eksempler:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testing

Bruk `resetGuardrailsForTests()` mellom testene for å starte fra en kjent tilstand.
Send `{ registerDefaults: false }` for å starte med et tomt register og
registrere bare sikkerhetsmekanismene som testes. Vision Bridge støtter avhengighets-
injeksjon (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge tilbyr
tilsvarende koblingspunkter for innstillinger, funksjonalitet, valg av STT-modell, kontroll
av legitimasjon og transkribering. Testene kan derfor kjøre begge flytene uten tilgang
til database eller nettverk.

## Se også

- `src/lib/guardrails/` — implementasjon
- `src/shared/utils/inputSanitizer.ts` — delt detektor som driver
  beskyttelse mot promptinjeksjon og maskering av personopplysninger
- `src/shared/constants/visionBridgeDefaults.ts` — standardinnstillinger for Vision Bridge og
  modelliste for tvungen brokobling
- `src/shared/constants/modalityBridgeDefaults.ts` — delte standardinnstillinger for kjøring av Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalt lag (automatsikring, nedkjølingsperioder)
- `docs/reference/ENVIRONMENT.md` — fullstendig referanse for miljøvariabler

## Rutedekning og red-team-testing for injeksjonsbeskyttelse (fase 8 · blokk D)

Injeksjonsbeskyttelsen (`createInjectionGuard` / `withInjectionGuard`) dekker alle ruter
som godtar brukerprompter. Den tar hensyn til `INJECTION_GUARD_MODE` (standardverdien `warn` = bare logging;
`block` = returnerer HTTP 400 `SECURITY_001`).

| Type                 | Ruter                                                                                                                                                | Standardmodus |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Tekst (eksisterende) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativ            | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Tekstuttrekk (`extractMessageContents`) dekker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (hver natt, `nightly-llm-security.yml`):** promptfoo validerer at hver rute blokkerer
OWASP-LLM-korpuset i `INJECTION_GUARD_MODE=block`; garak kjører sonder (hoppes over uten hemmelighet).
`moderations` er inkludert for konsistens — operatører i blokkeringsmodus kan unnta den via
`resolveDisabledGuardrails`.

Den nattlige arbeidsflyten (`.github/workflows/nightly-llm-security.yml`, cron + manuell
utløsning) har to jobber:

- **`promptfoo-guard` (blokkerende)** — kjører `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Hvert angrepstilfelle (f.eks. «ignorer alle
  tidligere instruksjoner …», jailbreaks i DAN-stil) kontrollerer at svaret inneholder
  `error.code === "SECURITY_001"`, dvs. at sikkerhetsmekanismen faktisk avviste forespørselen.
- **`garak` (rådgivende)** — kjører garak `--probes promptinject,dan,leakreplay`
  mot en lokal OmniRoute-instans (`http://localhost:20128/v1`). Avhenger av en
  leverandørhemmelighet (`PROMPTFOO_PROVIDER_KEY`); hoppes kontrollert over og har suffikset
  `|| true`, slik at den rapporterer uten at CI feiler.

Dekningen av hjelpefunksjonen for beskyttelse (`createInjectionGuard` / `withInjectionGuard`)
omfatter alle `/v1`-ruter som inneholder prompter; prompttekst hentes fra
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` av
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
