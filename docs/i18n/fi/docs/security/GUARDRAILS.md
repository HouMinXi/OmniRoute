# Guardrails (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Totuuden lähde:** `src/lib/guardrails/`
> **Päivitetty viimeksi:** 2026-08-29 — v3.8.51 (Video Bridgen transkription alkuperän ilmoittaa kutsuja,
> eikä palvelin vielä varmista sitä — selvennetty kohdan #11661 mukaisesti)

Suojaukset toteuttavat turvallisuus-, käytäntö- ja sisältömuunnokset OmniRouten
ja ylävirran palveluntarjoajien välisellä rajalla. Kukin suojaus voi tarkastaa
(ja valinnaisesti hylätä, muuntaa tai annotoida) pyyntöjen hyötykuormia
(`preCall`) ja ylävirran vastauksia (`postCall`).

Järjestelmä on **häiriötilanteessa salliva**: jos suojaus aiheuttaa poikkeuksen
suorituksen aikana, rekisteri kirjaa virheen ja jatkaa seuraavaan suojaukseen
sen sijaan, että pyyntö epäonnistuisi. Estäminen on aina nimenomainen päätös
(`block: true`), ei koskaan vahinko.

## Sisäänrakennetut suojaukset

Rekisteri lataa tuonnin yhteydessä automaattisesti kuusi suojausta prioriteettijärjestyksessä
(katso `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteetti | Nimi                | Vaihe(et)      | Tiedosto              |
| ------------ | ------------------- | -------------- | --------------------- |
| `5`          | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`          | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`          | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`         | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`         | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`         | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Pienemmät prioriteettiluvut suoritetaan **ensin**.

### Näkösilta (`visionBridge.ts`) — Modaliteettisilta PR-1

Sieppaa kuvia sisältävät pyynnöt, jotka on osoitettu **malleille, joissa ei ole näköominaisuutta**, ja joko
uudelleenreitittää koko pyynnön näköominaisuutta tukevalle mallille tai korvaa kuvaosat
määritettävän näkömallin tuottamilla tekstikuvauksilla ennen
ylävirran kutsua. Näin pelkkää tekstiä tukevat palveluntarjoajat voivat käsitellä
multimodaalisia hyötykuormia läpinäkyvästi.

Kulku:

1. Ohita, jos kohdemalli tukee jo näköominaisuutta (paitsi jos se esiintyy
   pakotetun sillan luettelossa `isVisionBridgeForcedModel`).
2. Poimi kuvaosat funktiolla `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), joka delegoi **yhtenäiselle median
   tunnistimelle** `detectMediaParts()` tiedostossa `open-sse/utils/mediaParts.ts` — tämä on
   yhdistelmäyhteensopivuussuodattimen kanssa jaettu ainoa totuuden lähde.
   Poiminta on sallittujen luettelolla rajattu ylätason osiin, joiden muodot
   `replaceImageParts` voi liittää takaisin (poiminta↔korvaus-sopimus): OpenAI
   `image_url`, Anthropicin base64-muotoinen `source.type:"base64"`, Anthropicin URL-muotoinen
   `source.type:"url"` ja Responses API:n `input_image`. Sisäkkäiset osumat ja
   vain ilmaisimen sisältävät muodot kuuluvat yhdistelmäsuodattimelle, eikä niitä koskaan poimita.
   Ohita, jos mitään ei löydy.
3. Selvitä ajonaikainen määritys funktiolla `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): uudet `modalityBridge*`-
   asetusten avaimet ovat ensisijaisia; vanhat `visionBridge*`-avaimet säilyvät **yhden jakson
   varavaihtoehtona** (palautusikkuna). Ohita ennen median läpikäyntiä, kun
   silta on poistettu käytöstä.
4. Tilan valitsin (`modalityBridgeVisionMode`, katso alla oleva taulukko) päättää
   uudelleenreitityksen ja kuvailun välillä. Uudelleenreititys palauttaa `modifiedPayload`-arvon, jossa vain `model`
   on vaihdettu, sekä metatiedot `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kuvailupolku: rajoita kuvien määrä arvoon `maxImages`, muodosta tehtävän huomioiva kehote,
   tarkista kuvailuvälimuisti, kutsu näkömallia **rinnakkain**
   (`Promise.allSettled`) ja lisää kuvien tilalle tekstiosat
   `[Image N]: <description>`. Epäonnistunut kuvailu tuottaa arvon `null`, ja alkuperäinen kuvaosa
   **säilytetään** (#4012) — paitsi yhdistelmän kuvailupolulla, kun kaikki
   kuvailut epäonnistuivat; tällöin vahvistetusti ilman näköominaisuutta oleva ylävirta saa sen sijaan
   paikkamerkin `(unavailable — no vision-capable provider connected)` (#8430).
6. Palauta `modifiedPayload` ja metatiedot (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Tilan valitsin (`modalityBridgeVisionMode`)

| Tila       | Oletus | Toiminta                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔      | Vanha heuristiikka muuttamattomana (#6640/#7204): muut kuin yhdistelmä- tai `auto/`-mallit uudelleenreititetään parhaalle näkömallille, ellei alkuperäisellä mallilla jo ole käyttökelpoisia tunnistetietoja (jolloin kuvaillaan); yhdistelmäkohteet kuvaillaan aina.                                                                      |
| `describe` |        | Kuvaile aina — uudelleenreitityslohko ohitetaan kokonaan; käyttäjän valitsema malli vastaa aina.                                                                                                                                                                                                                                           |
| `reroute`  |        | Pakota uudelleenreititys: tunnistetiedoilla varustetun mallin säilyttävä suojaus ohitetaan. Uudelleenreitityksen **kohteen** tunnistetietosuojausta sovelletaan silti — kun käyttökelpoista näkökohdetta ei ole, pyyntö siirtyy kuvailuun, jotta raakakuvat eivät koskaan päädy pelkkää tekstiä käsittelevään taustajärjestelmään (#8430). |

Pakotetut tilat oikosulkevat **ennen** automaattisen heuristiikan suorittamista; `auto`-toiminta
on tavutasolla identtinen PR-1:tä edeltävän suojauksen kanssa.

#### API-avaimen soveltamisala (`visionBridgeKeyScope.ts`)

Kun kutsujan API-avain rajoittaa yhteyksiä `allowedConnections`, kiintiöryhmiä
(`allowedQuotas`) tai malleja (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), silta valitsee
uudelleenreititys- ja kuvailumalleiksi vain malleja, joita avain saa käyttää, sellaisissa yhteyksissä, joita avain saa
käyttää. Kuvailukutsu kulkee tämän jälkeen aina OmniRoute-itsekytkennän kautta
`x-omniroute-self-loop-key-id`-otsakkeen kanssa, jotta vastaanottava keskustelupyyntö
valvoo kyseisen avaimen yhteys- ja mallikäytäntöä uudelleen. `enforceApiKeyPolicy()`
hyväksyy tämän otsakkeen vain yhdessä itsekytkennän bearer-tunnisteen kanssa, joten se voi ainoastaan
kaventaa käyttöoikeuksia, ja tunniste, jota ei voida ratkaista, hylätään.

Jos avaimelle ei ole sallittu mitään näkömallia, kuvailupolku väistyy ja
pyyntö välitetään muuttamattomana, mikä vastaa käytöstä poistetun
suojauksen fail-open-toimintaa (metatiedot `{ skipped: true, reason: "no_permitted_vision_model" }`).
Pyynnöt ilman avainta ja avaimet ilman näitä rajoituksia toimivat täsmälleen kuten
aiemmin.

#### Tehtävän huomioiva kuvailukehote (`modalityBridgeVisionTaskAware`)

Oletus on **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) liittää
**viimeisimmän käyttäjäviestin** tekstin (katkaistuna 500 merkkiin)
kuvailun peruskehotteeseen, mikä ohjaa kuvausta kohti sitä, mitä käyttäjä
todella pyysi (codex-vision-proxy-malli), ja pyytää näkömallia litteroimaan
näkyvän tekstin. Kun asetus on pois käytöstä — tai käyttäjän tekstiä ei ole —
peruskehotetta käytetään muuttamattomana.

Kuvailun itseensä palaavan silmukan oma OpenAI-yhteensopiva pyyntö (`callVisionModelSingle()`
tiedostossa `visionBridgeHelpers.ts`) pyytää aina asetusta
`image_url.detail: "high"` — ehdoitta kaikille kutsujille ja palveluntarjoajille
riippumatta mistään asiakkaan signaalista. Vähäisten yksityiskohtien näytteistys
heikentää OCR-tarkkuutta juuri siinä tekstin litterointitehtävässä, jota tämä
kehote pyytää, joten itse kuvailukutsu pyytää aina suurta yksityiskohtaisuutta
riippumatta alkuperäisessä saapuvassa pyynnössä käytetystä yksityiskohtaisuuden
tasosta. Tämä vaikuttaa vain sisäisen kuvailupyynnön runkoon; se ei muuta sitä,
miten OmniRoute välittää kutsujan oman `image_url.detail`-arvon ensisijaisessa
pyynnössä — kyseinen oletus asetetaan erikseen ja vain tunnistetuille OpenCode-asiakkaille
funktiossa `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Kuvailun itseensä palaavan silmukan Anthropic-siirtomuotohaara ei sisällä
`detail`-kenttää, eikä kumpikaan oletus vaikuta siihen.

#### Kuvailutuloksen enimmäispituus (`modalityBridgeVisionMaxChars`)

| Avain                          | Oletus | Alue              |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` tai 100–50000 |

`0` (oletus) tarkoittaa, ettei **rajoitusta ole** — funktion
`callVisionModel()` palauttama kuvaus välitetään muuttamattomana, mikä säilyttää
nykyisen toiminnan. Mikä tahansa arvo välillä 100–50000 katkaisee kuvauksen ja
lisää loppuun `…`-merkin ennen kuin se liitetään takaisin muodossa
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` tiedostossa
`src/lib/guardrails/visionBridge.ts`). Suurenna arvoa runsaasti yksityiskohtia
sisältäville OCR-tehtäville, joissa myöhempi malli tarvitsee koko litteroinnin;
pienennä sitä rajoittaaksesi tunnisteiden käyttöä monisanaisten näkömallien
yhteydessä. Hallintapaneelin kenttä sijaitsee Vision-välilehden Advanced-paneelissa
(`modality-bridge-max-chars` tiedostossa `ModalityBridgeVisionTab.tsx`) ja
nostaa kaikki arvot väliltä 1–99 vähimmäisarvoon 100 mutta jättää erikseen
määritetyn arvon `0` koskemattomaksi — `0` on itsessään kelvollinen Zod-arvo
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ei pelkästään
oletusarvo, joka tarkoittaa, ettei asetusta ole määritetty.

#### Kuvailuvälimuisti (`modalityBridge/bridgeCache.ts`)

Muistissa oleva prosessinlaajuisesti jaettu LRU- ja TTL-välimuisti
kuvailutuloksille. Avain = `sha256(imageRef + composedPrompt + configuredBridgeModel)`,
jossa käytetään pituusetuliitteistä kehystystä (ei kenttien rajojen törmäyksiä).
Mallikomponentti on **määritetty** siltamalli, ei tosiasiassa vastannut malli —
`callVisionModel` voi käyttää sisäisesti varamallia, ja avainten muodostaminen
yrityskohtaisesti pirstaloisi välimuistin. Epäonnistuneita kuvailuja ei koskaan
tallenneta välimuistiin. Asetukset:

| Avain                           | Oletus | Alue    |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Etäkuvien normalisointi (itseensä palaava kuvailu/base64-nouto)

Kun silta noutaa **etäkuvan** itse — Anthropicin kuvailun itsekutsu ja
claude-siirtomuodon base64-muunnos (`ensureBase64ImagesForClaudeWire`), jotka
molemmat käyttävät tiedoston `visionBridgeHelpers.ts` funktiota
`fetchRemoteImageAsDataUri()` — tuloksena saatu data-URI välitetään funktion
`normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) kautta ennen sen
upottamista näkömallipyyntöön. Ylisuuret kuvat pienennetään niin, että
**pitkä sivu on 2048px** (vastaten koonmuutosrajaa, jota OpenAI/Anthropic jo
käyttävät palvelinpuolella), mikä vähentää lähetettävien tavujen määrää ja
viivettä muuttamatta sitä, mitä näkömalli näkee. Koon muuttamiseen käytetään
`sharp`-pakettia, joka ladataan dynaamisella tuonnilla: alustalla, jolla sen
natiivibinaarin lataaminen epäonnistuu, `normalizeDataUri()` **ei koskaan
aiheuta poikkeusta** — se välittää alkuperäiset tavut sellaisinaan, joten
kuvailu/base64-muunnospolku toimii aina. Myös muut kuin kuvatavut (nouto, joka
ei palauttanut purettavissa olevaa kuvaa) välitetään muuttamattomina. Tämä
normalisointi rajataan kuviin, jotka silta noutaa omaa itsekutsuaan varten —
sitä ei koskaan sovelleta kutsujan sellaisenaan välitettävään raakakuormaan,
mikä noudattaa vain erillisellä suostumuksella tehtävien muutosten periaatetta
(kova sääntö nro 20).

#### Asetusten skeema + migraatio

Uudet `modalityBridge*`-avaimet Zod-validoidaan skeemassa
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCache*`-kolmikko sekä Audio Bridgen käyttämä
`modalityBridgeAudio*`-ryhmä. Migraatio `141_modality_bridge_settings.sql`
kopioi nykyiset vanhat `visionBridge*`-arvot vastaaviin uusiin avaimiin
(idempotentisti eikä koskaan korvaa operaattorin asettamaa `modalityBridge*`-arvoa);
vanhat avaimet hyväksytään lukemisen varavaihtoehtona vielä yhden
julkaisusyklin ajan.

#### Läpinäkyvyysotsake + tilastot

Kuvailulla muunnetut vastaukset sisältävät otsakkeen
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(jonka muodostaa `buildModalityBridgeHeader()` tiedostossa
`modalityBridge/bridgeStats.ts` ja lisää `withModalityBridgeHeader()` tiedostossa
`src/sse/handlers/chatHelpers.ts`). Uudelleenreititetyt pyynnöt **eivät saa**
otsaketta — hyötykuormaa ei muutettu, ja mallin vaihto näkyy jo vastauksen
rungon `model`-kentässä.

`GET /api/modality-bridge/stats` (hallinnan todennus, sama taso kuin
`GET /api/settings`) palauttaa muistissa olevat modaliteettikohtaiset laskurit
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` modaliteeteille `vision`, `audio` ja
`video`. `averageLatencyMs` käyttää nimittäjänään arvoa `latencySamples`, ei kaikkia
yrityksiä; operaatio, jolle ei ole ajoitusta, ei luo keinotekoista nollan
millisekunnin näytettä. `bridged` säilyy taaksepäin yhteensopivana aliaksena
onnistuneille muunnoksille; epäonnistuneet yritykset eivät kasvata sitä.
Laskurit nollautuvat tarkoituksellisesti prosessin käynnistyessä uudelleen
(telemetriaa, ei kirjanpitoa).

#### Hallintapaneelin määritys

Erillinen hallintapaneelisivu on
`/dashboard/settings/modality-bridge`. Sen URL-osoitteella käytettävät `Vision`-,
`Audio`- ja `Video`-välilehdet säilyttävät kyselyparametrit vaihtaessaan `tab`-arvoa.
Vision-välilehti sisältää käyttöönoton, tilan, mallin valinnan (mukaan lukien
automaattinen oletus), tehtävät huomioivan kehotuksen, aikakatkaisun, kuvan,
kuvauksen pituuden ja välimuistin lisärajat, ajonaikaiset
laskurit sekä suojatun esimerkkipyynnön. Myös Audio-välilehti on toiminnassa: se
sisältää käyttöönoton, vain STT-mallit sisältävän mallivalitsimen Auto-vaihtoehdolla,
aikakatkaisun ja leikkeen enimmäispituuden rajat, äänen laskurit sekä `input_audio`-esimerkkitestin.
Video-välilehti on toiminnallinen: se ilmoittaa FFmpeg/ffprobe-ajonaikaisen tilan —
yhden neljästä nimenomaisesta käyttöliittymätilasta (`unknown`, kun tarkistus on
käynnissä tai sitä ei voitu suorittaa loppuun, `restricted`, kun hallintapaneelin
isäntä ei ole loopback-osoite ja tarkistus ohitetaan asiakaspuolella, `unavailable`,
kun tarkistus on tehty ja puuttuminen vahvistettu, tai `available`, jolloin näytetään
FFmpeg/ffprobe-versiot) — tallentaa käyttöönoton sekä mallin, ruutujen, videon ja
aikakatkaisun rajat, suodattaa mallivalitsimeen konenäköä tukevat mallit ja näyttää
videon laskurit.

AI-asetusten entinen Vision Bridge -kortti on yhteensopivuuslinkki uudelle
sivulle; se ei enää ylläpidä lomakkeesta toista kopiota. Media Providers linkittää
myös Image-to-Text- ja Speech-to-Text-työnkulut vastaaviin Modality Bridge
-välilehtiin poistamatta nykyistä Speech-to-Text-kokeiluympäristöä.

**Itseensä kiertävän silmukan pääsynvalvonnan ohitus:** kun kuvauskutsu reititetään
OmniRouten oman `/v1`-silmukan kautta (epästandardi palveluntarjoajan malli),
alipyyntö lähettää otsakkeen `x-omniroute-admission-bypass: internal`, ja se
todennetaan ratkaistulla itseensä kiertävän silmukan tunnistetiedolla — paikallisen
tilan paikallisella `sk_omniroute`-vartioarvolla tai operaattorin määrittämällä
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` -ympäristöavaimella (#1350), jotta
`REQUIRE_API_KEY=true`-käyttöönotot voivat silti suorittaa kuvauskutsun. Ohitus
hyväksytään vain näillä täsmällisillä tunnistetiedoilla, joten ulkoiset asiakkaat
eivät voi käyttää otsaketta pääsynvalvonnan ohittamiseen.

Vanhojen toimintojen oletusarvot sijaitsevat tiedostossa
`src/shared/constants/visionBridgeDefaults.ts`; uuden tilan, tehtävät huomioivan
toiminnan ja välimuistin oletusarvot sekä asetusten ratkaisija sijaitsevat
tiedostossa `src/shared/constants/modalityBridgeDefaults.ts`. Suojamekanismi tarjoaa
`deps`-konstruktorivalinnan, jotta testit voivat injektoida väärennetyt
`getSettings`- ja `callVisionModel`-toteutukset.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Sieppaa ääntä sisältävät keskustelupyynnöt ennen kuin ne saavuttavat kohteen,
jonka ei tiedetä hyväksyvän äänisyötettä. Se ei koskaan reititä keskustelupyyntöä
uudelleen: ääniosat litteroidaan olemassa olevan OpenAI-yhteensopivan
multipart-päätepisteen kautta, ja valittu keskustelumalli jatkaa tekstilitteraatioilla.

Kulku:

1. Ratkaise `supportsAudio` funktion `getResolvedModelCapabilities()` avulla.
   Palveluntarjoajarekisterin eksplisiittiset metatiedot ovat ensisijaisia,
   sitten staattiset mallin metatiedot ja lopuksi synkronoitu
   `modalities_input`. Määritetty syöteluettelo ilman `audio`-arvoa tuottaa
   arvon `false`; jos kyvykkyydestä ei ole näyttöä, arvoksi jää `null`. Sekä
   `false` että `null` aktivoivat konservatiivisen sillan, kun taas `true`
   ohittaa sen.
2. Ratkaise `modalityBridgeAudio*`-asetukset ja poimi jokaisesta viestistä
   yhdistettävissä olevat ylätason ääniosat jaetun `detectMediaParts()`-tunnistimen
   avulla. Tuetut siirtomuodot ovat OpenAI:n `input_audio`, `audio_url` ja
   `source.media_type: "audio/*"`. Sisäkkäinen ääni tunnistetaan reititystä varten,
   mutta liitospolku ei poista sitä. Työmäärää rajoittaa
   `modalityBridgeAudioMaxClips`; myöhemmät osat jätetään ennalleen.
3. Käytä määritettyä `provider/model`-arvoa tai anna funktion
   `selectAudioBridgeModel()` käydä `AUDIO_TRANSCRIPTION_PROVIDERS` läpi vakaassa
   luettelojärjestyksessä ja valita ensimmäinen malli, jolla on käyttökelpoinen
   aktiivisen palveluntarjoajan tunnistetieto.
4. `callAudioTranscription()` muuntaa base64-/data-URI-äänen multipart-`file`-osaksi
   tai lataa etäosoitteen `audio_url` julkisiin kohteisiin rajoitetun lähtevän
   liikenteen suojauksen kautta käyttäen DNS-kiinnitystä ja 25 MB:n rajaa. Sen
   jälkeen se lähettää tiedoston ja valitun mallin POST-pyynnöllä paikalliseen
   `/v1/audio/transcriptions`-silmukkaan, joka todennetaan funktiolla
   `resolveSelfLoopBearer()`. Nykyinen litterointireitti suorittaa normaalin
   tunnistetietojen haun, jäähdytys- ja nopeusrajoitusten käsittelyn sekä
   palveluntarjoajalle välityksen.
5. Onnistuneet kutsut korvaavat osansa muodolla `[Audio N]: <transcript>`. Kutsut
   suoritetaan funktiolla `Promise.allSettled`: yksittäinen epäonnistuminen
   säilyttää kyseisen alkuperäisen ääniosan (#4012-sopimus). Jos kaikki kutsut
   epäonnistuvat ja kohteen on todistettu olevan `supportsAudio === false`, osien
   sisällöksi tulee `[Audio N]: (ei käytettävissä — STT-palveluntarjoajaa ei ole yhdistetty)`
   (#8430-sopimus). Tuntemattoman kohteen (`null`) tapauksessa kaikki epäonnistunut
   tulos jää ennalleen. Todistetusti vain tekstiä tukeva kohde, jolle ei ole
   käyttökelpoista STT-tunnistetietoa, saa saman nimenomaisen korvikkeen ilman
   verkkokutsua.

Onnistuneet litteraatiot käyttävät prosessinlaajuista Modality Bridgen
LRU/TTL-välimuistia. Avain yhdistää ääniviitteen, vakaan `audio-transcription`-operaatiotunnisteen
ja valitun STT-mallin; epäonnistumisia ei koskaan tallenneta välimuistiin. Äänen
yritykset päivittävät jaetut `bridged`-, `cacheHits`-, `failures`- ja
`lastUsedAt`-laskurit. Muunnetut vastaukset sisältävät otsakkeen
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; ennalleen
jäävät pyynnöt eivät saa Audio Bridge -segmenttiä.

Ajonaikaiset asetukset tallennetaan tietokantaan ja validoidaan Zodilla:

| Avain                         | Oletus  | Vaihteluväli                 |
| ----------------------------- | ------- | ---------------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                            |
| `modalityBridgeAudioModel`    | `""`    | Automaattinen tai STT-tunnus |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000                  |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                         |

Jaettua välimuistia hallitaan edelleen asetuksilla `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ja `modalityBridgeCacheMaxEntries`.

### Videosilta (`videoBridge.ts`, `videoBridgePipeline.ts`)

Sieppaa Chat Completions -rajapinnan `messages`-kentän ja Responses
API -rajapinnan `input`-kentän ylimmän tason video-osat ennen kuin kutsutaan
kohdetta, jolla ei tiettävästi ole natiivia videotukea.
Tuettuja muotoja ovat `input_video`, `video_url`, `video_source`, HTTPS-URL-osoitteet
ja `data:video/*;base64,...`-data-URI:t. Tekstissä olevia tavallisia tiedostonimiä
ei käsitellä videoina.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) vastaa pyynnön läpikäynnistä,
ominaisuus- ja käytäntötarkistuksesta, pyyntökohtaisesta koostamisesta ja
vastaushyötykuormasta. Videokohtainen työ — hankinta, koko tuloksen välimuisti,
kuvasarjan kuvailu (johon yhdistetään kutsujan ilmoittama äänilitterointi) sekä
yrityskohtaiset mittarit, keskeytys ja siivous — on piilotettu
`videoBridgePipeline.ts`-tiedoston `processVideoPart`-toiminnon taakse. Sitä
kutsutaan kerran kutakin video-osaa kohden `preCall`-silmukan sisällä.
Kyseinen moduuli määrittelee myös eksplisiittiset porttirajapinnat
`VideoMediaBrokerPort` (tavujen hankinta ja näytteistettyjen kuvien poiminta),
`VideoAudioTranscriptionPort` (kutsujan ilmoittaman äänilitteroinnin yhdistäminen
näytteistettyjen kuvien kuvateksteihin) ja `VideoDrilldownPort` (kuvien
tarkemman analyysin pysyvyysraja; sitä ei ole vielä kytketty
`processVideoPart`-toimintoon — tällä hetkellä vain erillinen
`/api/modality-bridge/video/drilldown`-reitti kirjoittaa tarkemman analyysin
merkintöjä).

Julkinen `/v1`-pyyntöpolku ei koskaan tuo tai käynnistä aliprosessia.
Etävideot ladataan 50 MiB:n rajoissa. Sisäisille base64-videoille on asetettu
varovainen 36 MiB:n videokohtainen raja puretulle koolle, jotta
mallin, viestien ja kehystyksen muodostama kokonaisuus voi pysyä julkisten
JSON-pyyntöjen 50 MiB:n hyväksymisrajan sisällä. Sisäisen sisällön pituus ja
arvioitu purettu koko tarkistetaan ennen muistin varaamista. Alkuperäisen
etä-URL-osoitteen ja jokaisen uudelleenohjauksen on käytettävä HTTPS:ää, ja
tarkistuksessa hyödynnetään nykyistä vain julkiset osoitteet sallivaa lähtevän
liikenteen suojausta DNS-kiinnityksellä. Tämän jälkeen tavut ylittävät täsmällisen
sisäisen `POST /api/modality-bridge/video/extract`-välittäjärajan. Kyseinen reitti
on sekä `LOCAL_ONLY` että `SPAWN_CAPABLE`, hyväksyy vain prosessikohtaisesti
todennetun ja luotetusta loopback-osoitteesta tulevan pyynnön eikä koskaan
hyväksy URL-osoitetta, tiedostojärjestelmäpolkua, suoritettavaa tiedostoa tai
argumenttiluetteloa. API:n rungon kokoputki ja käsittelijän inkrementaalinen
rungonlukija pakottavat toisistaan riippumatta välittäjän syötteelle 50 MiB:n
enimmäisrajan. Sen rajattu jono suorittaa yhden poiminnan kerrallaan, sallii
neljä odottavaa työtä ja rajoittaa odottavan syötteen 100 MiB:uun.

Välittäjän sisällä `ffprobe` lukee yksityistä paikallista tiedostoa. Kiinteä
muotojen sallittujen luettelo sulkee pois soittolista- ja manifestimuodot.
Sallituissa MOV-tuoteperheen säilöissä ulkoiset MOV-dataviittaukset pysyvät
oletusarvoisesti poissa käytöstä, eikä kiinteä komento ota niitä käyttöön.
Sekä `ffprobe` että `ffmpeg` käyttävät vain `file`-protokollan sallivaa
protokollaluetteloa, yhtä säiettä ja kiinteitä argumenttitaulukoita ilman
komentotulkkia, ja suoritettavat tiedostot ratkaistaan `PATH`-muuttujasta.
Liitettyjä kansikuvavirtoja ei pidetä toistokelpoisina ehdokkaina. Kaikkien
toistokelpoisten virtojen on täytettävä rajat, ja eksplisiittistä oletusvirtaa
suositaan ennen determinististä pienimmän indeksin varavaihtoehtoa. Videot on
rajattu 600 sekuntiin, 8 192 pikseliin ulottuvuutta kohden ja 33 554 432
lähdepikseliin. FFmpeg näytteistää 1–16 aikavälin keskikohdasta otettua
JPEG-kuvaa ja pienentää pitkän sivun enintään 1 024 pikseliin skaalaamatta
pienempiä syötteitä suuremmiksi. Se ei koskaan vastaanota URL-osoitetta.
Näytteistyskäytäntö on oletusarvoisesti `uniform`. Valinnaiset `scene_aware`-
ja kokeelliset `segment_aware`-käytännöt suorittavat yhden ylimääräisen kiinteän
FFmpeg-ajon jo validoidulle paikalliselle virralle, valitsevat rajatut
`showinfo`-kohtausaikaleimat ja palaavat deterministisesti samoihin tasaisesti
jakautuneisiin keskikohtiin, jos tunnistus epäonnistuu, aikakatkaisu täyttyy,
tuloste on virheellinen tai ehdokasjoukko on tyhjä. Segmenttitietoinen tila
jakaa keskikohtanäytteet suhteellisesti validoiduille kohtausväleille.
Segmenttitietoista evidenssiä ja varatoimintaa käsitellään tarkemmin jäljempänä.
Tiukka 16 kuvan raja otetaan käyttöön valinnan jälkeen kaikissa käytännöissä.
Kun kohtaustietoisen pyynnön kuvabudjetti on vain yksi kuva, se käyttää aktiivisen
koko videon tai kohdistusikkunan tasaisesti jakautunutta keskikohtaa ja ilmoittaa
`policyEffective: uniform`: yksi valittu kohtauskuva ei voi säilyttää aikajanan
molempia päitä. Kutsuja voi valinnaisesti antaa äärellisen kohdistusikkunan
(`start`/`end` sekunteina). Rajat sovitetaan median kestoon, käänteiset tai
ei-äärelliset ikkunat hylätään ja kaikki näytteistyskäytännöt suoritetaan vain
normalisoidun aikavälin sisällä. Tuloksena saatava ikkuna sisällytetään
näytteistyksen metatietoihin ja epäluotettuun kuvauksen etuliitteeseen, jotta
jatkokäsittelevät mallit voivat erottaa kohdistetun otteen koko aikajanasta.

Kuvatekstien semanttinen kohdistus on erillinen, eksplisiittinen asetus.
Oletusarvoinen `full`-analyysitila säilyttää nykyisen kuvakehotteen eikä koskaan
välitä pyynnön tekstiä kuvatekstimallille. `focused`-tilassa silta lukee vain
uusimman ei-tyhjän käyttäjän kirjoittaman `text`- tai `input_text`-sisällön
samasta Chat- tai Responses-säilöstä, normalisoi sen NFC-muotoon, tiivistää
ohjausmerkit ja tyhjemerkit sekä rajoittaa sen 500 Unicode-koodipisteeseen.
Tyhjä tulos palautuu täsmälleen `full`-kehotteeseen. Käyttökelpoinen vihje
sarjallistetaan JSON-muodossa erilliseen epäluotetun käyttäjäkontekstin lohkoon,
ja se saa ainoastaan priorisoida havaittavia yksityiskohtia. Se ei voi ohittaa
erillistä varoitusta, jonka mukaan mediassa näkyviä tai kuuluvia ohjeita ei saa
noudattaa. Tekstimuotoinen kohdistus ei koskaan päättele `start`- tai
`end`-arvoja eikä muuta ajallista näytteistintä.

#### FU-07:n rakenteellinen segmenttievidenssi

`segment_aware` käyttää yhtä rajattua esianalyysikierrosta jo validoidulle
paikalliselle videovirralle. Kiinteä suodatinketju skaalaa leveyden ensin
enintään 320 pikseliin, tunnistaa kohtausvaihdokset ja pysähtyneet jaksot ja
ottaa sitten yhden näytteen sekunnissa epäterävyyden, keskimääräisen luminanssin
sekä spatiaalisen ja temporaalisen informaation mittaamista varten. Kierros on
rajattu 600 rakenteelliseen näytteeseen, yhteen FFmpeg-/suodatinsäikeeseen,
samoihin vain `file`-protokollan ja säilömuotojen sallittujen luetteloihin,
1 MiB:n prosessitulosterajaan sekä enintään 30 sekuntiin välittäjän yhteisen
keskeytys-/määräajan puitteissa. Se ei koskaan hyväksy pyynnöstä komentoa,
suodatinta, polkua tai URL-osoitetta.

Rakenteelliset arvot ovat determinististä näytteenottoaineistoa, eivät videon
semanttista ymmärtämistä. Niistä ei päätellä kohteita, toimintoja, kuvatekstejä,
puhetta tai käyttäjän tarkoitusta. Kohtausten ja pysähtyneiden jaksojen rajat
muodostavat segmenttejä; pysähtyneen kuvan kattavuus, epäterävyys, valotus,
spatiaalinen yksityiskohtaisuus ja temporaalinen muutos vaikuttavat ainoastaan
siihen, miten olemassa oleva 1–16 kuvan kiintiö jaetaan. Täysin pysähtynyt
segmentti rajataan yhteen kuvaan, kun taas muut kuin pysähtyneet segmentit
kilpailevat jäljellä olevasta kiintiöstä. Kun rajoja on enemmän kuin kuvia,
aikajanan tasainen kattavuus säilytetään, jotta nopeat leikkaukset videon
alkupuolella eivät voi peittää pitkää loppusegmenttiä. Kohtausrajat, jotka ovat
1 sekunnin analyysitarkkuuden sisällä pysähtyneen jakson rajasta, yhdistetään.

Puuttuvat suodattimet, virheellinen tai tyhjä aineisto, tunnistimen virhe tai
rajatun esianalyysin aikakatkaisu siirtävät käsittelyn avoimesti täsmälleen
yhdenmukaiseen keskipistekäytäntöön. Kutsujan tekemä keskeytys tai välittäjän
määräaika ei siirrä käsittelyä avoimeen varatoteutukseen: se lopettaa käynnissä
olevan aliprosessin, estää myöhemmän kuvien poiminnan, ja yksityinen väliaikainen
hakemistopuu poistetaan `finally`-lohkossa.

`scripts/perf/video-bridge-fu07-eval.ts` luo deterministisiä, todellisia
FFmpeg-testiaineistoja duplikaattien poiston jälkeisten kuvatekstikutsujen
säästöjen, tiheän liikkeen kiintiön jaon, epäterävyys-/valotus-/SI-TI-aineiston,
pitkähäntäisten nopeiden leikkausten sekä asteittaisten häivytysten aiheuttamien
väärien positiivisten tulosten testaamiseen. Se tallentaa esianalyysin
seinäaika-ajan sekä, jos `/usr/bin/time` on käytettävissä, aliprosessin
suoritinajan ja RSS-muistin huippuarvon. Sen laatutarkistukset ovat ainoastaan
rakenteellisia oraakkeleita. Todellisen kuvatekstimallin laatu pysyy tilassa
`HOLD`, koska tällä testausympäristöllä ei ole valtuutettua päätepistettä tai
jäädytettyä arvioijaa. Myös rahalliset säästöt pysyvät tilassa `HOLD`, ellei
`--caption-cost-per-call-usd` anna eksplisiittistä positiivista arviota kutsun
hinnasta; komentosarja ei koskaan keksi kumpaakaan tulosta.

Kunkin kuvan koko on rajattu 4 MiB:uun, kaikkien raakakuvien yhteiskoko
23 MiB:uun ja sarjallistettu välittäjän vastaus 32 MiB:uun. Yksityinen
väliaikainen hakemisto poistetaan `finally`-lohkossa. OmniRoute ei sisällytä
FFmpeg:iä eikä hyväksy mukautettua suoritettavan tiedoston polkua. Ennen
kuvatekstien tuottamista silta tekee konservatiivisen visuaalisen duplikaattien
poiston: kukin JPEG pienennetään 16×16-kokoiseksi harmaasävypuskuriksi, ja sitä
verrataan vain viimeksi säilytettyyn kuvaan. Kun pyydetty kuvatekstikiintiö on
suurempi kuin yksi kuva, poiminta tuottaa rajatun ehdokasjoukon, jonka koko on
enintään kaksinkertainen kiintiöön nähden eikä koskaan yli 16 kuvaa. Pyydettyä
ylärajaa sovelletaan vasta duplikaattien poiston jälkeen, ja ensimmäinen sekä
viimeinen valittu ehdokas säilytetään lopullisessa harvennuksessa, kun kiintiö
on vähintään kaksi. Versioitu
`grayscale-16x16-mean-cells-v2`-käytäntö käyttää suurempaa arvoa keskimääräisen
luminanssin muutoksesta ja niiden pienoiskuvan solujen osuudesta, joiden
normalisoitu muutos on vähintään 0.05. Duplikaattikynnys on vakio 0.04, joka
on valittu ennustettavuuden vuoksi eikä altistettu suorituksenaikaiseksi
asetukseksi. Tämä toissijainen suuren kontrastin signaali säilyttää pienet
liikkeet ja näkyvän tekstin muutokset, jotka pelkkään keskiarvoon perustuva
vertailu voi piilottaa. Vertailijan tai dekooderin virheet siirtävät käsittelyn
avoimesti varatoteutukseen ja säilyttävät kattavuuden. Tulosteen metadata
erottelee poimitut ehdokkaat, onnistuneesti käytetyt kuvat ja poistetut
visuaaliset duplikaatit.

Eksplisiittisesti videoksi merkitty osa voi pyytää aikaleimoilla varustettua
kontaktivedosta. Silta muodostaa enintään 4-sarakkeisen ja 16 kuvan JPEG-ruudukon.
Jokainen 512 pikselin solu polttaa lähteen aikaleiman suuren kontrastin
alapalkkiin, ja samat aikaleimat säilyvät tekstimuotoisessa metadatassa
myöhempää yhdistämistä ja auditointia varten. Koko JPEG on edelleen rajattu
32 MiB:uun. Jos `sharp` ei pysty dekoodaamaan tai koostamaan ruudukkoa, silta
palaa käyttämään yksittäisiä JPEG-kuvia; asiakkaan keskeytys välittyy silti
kontaktivedostoiminnon läpi.

Käyttöönottoa puoltava aineisto pidetään tarkoituksellisesti erillään
synteettisestä koostamisen mikrosuorituskykytestistä.
`scripts/perf/video-bridge-contact-sheet-eval.ts` määrittää skeemaversioidun
A/B-testausympäristön todellisille OpenAI-yhteensopiville konenäkömalleille.
Se mittaa palveluntarjoajan ilmoittamat tokenit, päästä päähän -seinäajan
(vedoksen koostaminen mukaan lukien), mallikutsujen määrän ja manifestissa
määritettyjen tosiasioiden säilymisen. Mallien raakavastauksia ei kirjoiteta
raporttiin; vain SHA-256-tiivisteet ja täsmänneiden tosiasioiden tunnukset
säilytetään. Testausympäristö ei tee verkko- tai maksullista mallikutsua, ellei
`--execute-real`-valitsinta anneta ja arvoja `--model`, `OMNIROUTE_BASE_URL`
ja `OMNIROUTE_API_KEY` ole määritetty. Ilman tällaista eksplisiittistä todellista
ajoa sen koneellisesti luettava päätelmä pysyy tilassa `HOLD`; synteettiset
hyötykuorman tai kutsumäärän mittaukset eivät yksinään ole käyttöönottoa
puoltavaa aineistoa.

Kutsujat voivat liittää valinnaisen `transcript.cues`-taulukon tuettuun
video-osaan, jos heillä on jo kohdistettua tekstiä. Jokaisessa vihjeessä on
oltava `text`, äärellinen `start`/`end`-väli mitatun keston sisällä ja
sallittujen luetteloon kuuluva `source` (`client`, `embedded` tai
`audio-bridge`); `confidence`-arvon oletus on `1`, ja sen on pysyttävä välillä
`0`–`1`. Täsmälleen samat vihjeet yhdistetään. OmniRoute ei koskaan käynnistä
transkriptiota tämän metadatan perusteella: validoidut vihjeet kopioidaan
kuvattuun tulokseen lähteen, luottamusarvon ja aikavälin kanssa, ja ne
esitetään epäluotettuina havaintoina kuvatekstien rinnalla. Virheellinen,
sallitun aikavälin ulkopuolinen tai alkuperätiedoton teksti hylätään sen sijaan,
että se sekoitettaisiin kuvatekstivirtaan. Molemmat pyyntörungon
transkriptiokanavat normalisoivat annetun alkuperän arvoksi `client`, mukaan
lukien itse ilmoitetut `embedded`- tai `audio-bridge`-tunnisteet. Vain palvelimen
omistama sovitin voi määrittää nämä luotetut tunnisteet vain koodista
käytettävän `trustedSource`-argumentin kautta; pyynnön JSON-kenttä ei voi
välittyä tähän argumenttiin. Transkriptioteksti pysyy epäluotettuna mediasta
johdettuna sisältönä alkuperästään riippumatta, eikä se saa koskaan määrätä
valtuutusta.

Edistynyt kutsuja voi toimittaa samalle videolle `audioTranscript`-raidan;
sitä käsitellään asiakkaan toimittamana tekstinä, ei todisteena palvelimen tekemästä litteroinnista.
Yhdistämiskohta suorittaa visuaaliset ja äänihavainnot samalla
määräajalla ja keskeytyssignaalilla, järjestää ne yhteiselle aikajanalle, yhdistää
täsmälleen samanlaiset kaksoiskappaleet ja raportoi osittaisen tuloksen, kun vain toinen haara onnistuu.
Virheellinen `audioTranscript` johtaa tällaiseen osittaiseen tulokseen — visuaalinen
kuvaus säilytetään ja äänihaara tallentaa puhdistetun virhekoodin —
sen sijaan, että koko video epäonnistuisi. Haarakohtainen saatavuus, osittaisuuden ilmaisin
ja puhdistetut virhekoodit säilytetään kuvatussa tuloksessa,
suojakaiteen metatiedoissa (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), tulosvälimuistin metatiedoissa ja sillan
yhdistämislaskureissa. Video Bridgen oletuspolku ei käynnistä puheentunnistusta
eikä lataa mediasta toista kopiota; ilman kyseistä nimenomaisesti annettua raitaa se pysyy
vain videota käsittelevänä.

**Litteroinnin säilytys (#12150 P1).** Tätä sovelletaan automaattisesti aina, kun
Video Bridge (joka itsessään on valinnainen) renderöi litterointivihjeen — erillistä
säilytysvalitsinta ei ole. Kun pyyntö renderöi minkä tahansa litterointivihjeen (kutsujan ilmoittaman
`transcript`-raidan tai yhdistetyn `audioTranscript`-raidan), suojakaide merkitsee sen
`videoBridgeObserved`-arvolla ja tuottaa videokuvauksesta peitetyn varjokopion —
identtisen renderöinnin, jossa jokaisen vihjeen vapaamuotoinen tekstirunko korvataan
tekstillä `[redacted-video-transcript]`. Tämä tehdään korvaamalla rakenteinen vihjekenttä
ennen merkkijonon koostamista (ei koskaan jäsentämällä litistettyä tekstiä, joten mikään vihjeen
sisältö — vihamielinen tai tavallinen, mukaan lukien `]`-merkin sisältävät rungot, kuten
`[inaudible]`/`[music]` — ei voi säilyä). Pysyvästi tallennetun kutsulokin pyynnön runko vaihtaa
jokaisen videosta johdetun tekstiosan kyseiseen peitettyyn varjokopioon vertaamalla sisältöjen
yhtäläisyyttä; `fullText`-ankkuri luetaan uudelleen valmiista kutsua edeltävästä suojakaiteen
hyötykuormasta, joten täsmäys onnistuu yhä sen jälkeen, kun ketjun myöhemmät suojakaiteet (henkilötietojen ja
tunnistetietojen peittäjät, prioriteetit 10/95) ovat kirjoittaneet kuvaustekstin uudelleen paikallaan ja
järjestelmäkehotteen, siirron tai muistin injektointi on muovannut viestitaulukon uudelleen. Mallille
lähetettävä runko ei muutu. Havaittu pyyntö ei myöskään täytä pysyvää Memory-muistia
(sekä pyynnöstä että vastauksesta johdettu poiminta ohitetaan),
joten mallin oma vastaus ei voi kaiuttaa litterointitekstiä Memory-muistiin.

**Videon raakakentät (#12430).** Kun silta on käytössä ja natiivi videotuki on tuntematon tai puuttuu, määritetyt `transcript`-/`audioTranscript`-kentät aktivoivat myös `videoBridgeObserved`-merkinnän, myös kuvauksen epäonnistumisen tai `maxVideos`-rajan jälkeen. `null` ja tyhjät merkkijonot lasketaan mukaan; puuttuvia kenttiä ja muita kuin videon metatietoja ei lasketa. Säilytetyistä kopioista nämä kentät peitetään tai pyyntö jätetään pois, ja välimuistit/Memory ohitetaan.

Näillä varapoluilla kelvollisista kutsujan vihjeistä tulee tuettuja `text`-/`input_text`-
osia epästandardien palveluntarjoajakenttien sijaan. Molemmat pyynnön mukana toimitetut raidat
pysyvät epäluotettuina `client`-havaintoina, ja mukana on nimenomainen varoitus siitä, ettei videota
kuvattu eikä aikaleimoja tarkistettu mediaa vasten. Nykyisiä
256 vihjeen / 64 KiB:n kokonais- ja vihjekohtaisia rajoja sovelletaan kahteen raitaan yhteisesti;
aikaleimojen on mahduttava välittäjän 600 sekunnin enimmäisrajaan ja mahdolliseen annettuun
kohdistusikkunaan. Virheelliset raidat hylätään, eikä niitä välitetä mielivaltaisena tekstinä; kelvollista
sisarrataa voidaan silti käyttää, ellei niiden yhteinen raja ylity. Null-arvot tai tyhjät
kentät eivät lisää tekstiä. Tämä varamenettely ei lisää median noutoa tai litterointia.
Litteroinnin laajennuskentät poistetaan varamenettelyn videokantajasta ja sen
`video_url`-/`source`-objekteista. OpenAI-siirtomuodon sallittujen arvojen luettelo pysyy tiukkana; tuntemattoman natiivituen
videokantajat pysyvät käytettävissä ja tunnetut vain tekstiä tukevat kohteet säilyttävät turvalliset merkinnät.
Rakenteiset peitetyt varjokopiot suojaavat lisättyä litterointitekstiä, kun taas
kutsujan omistama alkuperäinen pyyntö pysyy muuttumattomana. Natiivisti tuetut kohteet ja
käytöstä poistetut sillat säilyttävät nykyisen ohituskäyttäytymisensä.

Muut säilytetyt kopiot käyttävät samaa havaitun pyynnön signaalia. Raaka
suojakaidetta edeltävä asiakaspyynnön tilannevedos, muistissa oleva odottava pyyntö ja varhaisen
hylätyn pyynnön loki korvaavat rakenteisesti video-osien litterointikentät;
putkiston vaiheiden ja kontekstin siirron muodostamat merkkijonokehotteet peitetään
pysyvästi tallennettavan pyynnön rungon vastaanottopisteessä. Pysyvästi tallennettu `video_content_removed`-merkintä
saa `previous_response_id`-jatkamisen epäonnistumaan turvallisesti sen sijaan, että se muodostaisi uudelleen
tahallisesti hylättyä tekstiä. Jos havaittu pyyntö menettää
osakohtaisen peitetyn varjokopionsa ennen lokitusta tai jos yksikin useista videon varjokopioista
ei enää täsmää pyynnön myöhempien muutosten jälkeen, säilytettävä pyynnön runko
jätetään kokonaan pois osittain peitetyn litteroinnin säilyttämisen sijaan.

Havaitun pyynnön kohdalla mallin vastaus saattaa lainata mitä tahansa litteroinnin osaa
ilman rakenteista vihjerajaa. Sen pysyvästi tallennetun kutsulokin
`responseBody` korvataan siksi poisjättömerkinnällä; yksityiskohtaista
putkistoartefaktia (joka voi sisältää palveluntarjoajan/asiakkaan runkoja ja suoratoiston osia)
ei säilytetä. Semanttiset, idempotenssi- ja päättelyn toistovälimuistit
ohittavat kyseisen pyynnön luku- ja kirjoitustoiminnot. Palveluntarjoajalle lähetettävä pyyntö ja asiakkaalle näkyvä
vastaus pysyvät muuttumattomina. Varhaiset yhteyden ylläpitotavut tyhjennetään tilapäisestä
puskurista, kun yksityiskohtainen artefakti jätetään pois. Kiron virheellisesti muotoiltua EventStreamia koskeva
varoitus raportoi vain hyötykuorman tavumäärän, ei koskaan sen sisältöä tai JSON-
jäsentimen raakaa virhettä.
Tässä ei väitetä, että kaikki asiaan liittymättömät palveluntarjoajan tai liitännäisen diagnostiikat olisi
tarkastettu; laajemman säilytyskohteiden läpikäynnin seuranta tapahtuu kohdassa #11658.

Sisäinen `/api/modality-bridge/video/drilldown`-elinkaari on erillinen,
loopback-/token-todennettu välimuistialusta. Jokainen toiminto vaatii myös
kanonisen läpinäkymättömän pääkäyttäjätunnisteen. Ennen tuotantokutsujan käyttöönottoa
sen on johdettava kyseinen tunniste todennetusta vuokraajasta eikä se saa koskaan välittää
asiakkaan valitsemaa arvoa. Välimuistiavaimet sitovat kyseisen pääkäyttäjän kanonisiin istunto- ja
videoviittaustunnisteisiin, tallentavat vain niiden SHA-256-johdetut avaimet ja rajaavat sekä luvut
että poistot samaan pääkäyttäjään. Välimuisti tallentaa kuhunkin merkintään enintään 16 johdettua JPEG-
kehystä, vanhentaa ne kymmenen minuutin kuluttua ja tukee rajattuja
`start`-/`end`-lukuja tai istunnon nimenomaista poistamista.

Kukin pääkäyttäjä on rajattu 16 merkintään ja 64 MiB:uun kanonista JPEG-dataa. Nämä
rajat ovat riippumattomia globaalista 64 merkinnän / 256 MiB:n enimmäismäärästä: pääkäyttäjän kiintiön
ylittymispaine poistaa ensin vain kyseisen pääkäyttäjän pisimpään käyttämättä olleita merkintöjä ennen kuin globaalia
LRU-poistoa harkitaan. Vanhentuneet merkinnät poistetaan sekä pääkäyttäjäkohtaisesta että
globaalista kirjanpidosta välimuistitoiminnan yhteydessä, kun taas peruutus ja validoinnin epäonnistuminen eivät
tallenna osittaista korvausta.

Välimuisti hylkää ei-kanonisen Base64:n, ylimääräisen täytteen, muun kuin JPEG-median, virheelliset tai
katkenneet JPEG-kuvat sekä JPEG-kuvat, jotka tuottavat varoituksen rajatun koko kuvan `sharp`-
dekoodauksen aikana. Se koodaa jokaisen hyväksytyn kuvan uudelleen kanoniseksi JPEG-kuvaksi, johtaa leveyden ja korkeuden
dekoodatuista tavuista sen sijaan, että luottaisi kutsujan kenttiin, ja hylkää kaikki lopussa olevat
polyglottitavut niiden säilyttämisen sijaan. Vain rajattu kanoninen pakattu puskuri
lasketaan kumpaankin kiintiöön. JSON-siirtoraja sisältää Base64:n lisäkuorman 32 MiB:n
dekoodatun syötteen enimmäismäärälle. Jokainen
tallennettu johdos kirjaa validoidun JPEG-muotonsa/-resoluutionsa, näytteenottokäytännön,
johdosversion, luontiajan, palvelimen laskeman sisältötiivisteen sekä hajautetun ylätason
viittauksen ja luotetun kutsujan ylätason sisältötiivisteen. Peruutus tarkistetaan
asynkronisten dekoodaus-/tiivistevaiheiden välillä ennen atomista välimuistiin tallennusta.

Tämä kokonaisuus ei vielä yhdistä tuotantotuottajaa reittiin eikä
tarjoa moniresoluutioista varianttien valintaa. Läpinäkyvä Video Bridge -pyyntöpolku
ei siksi aiheuta lisätyötä, kun taas vuokraajaan sidottu pääkäyttäjän johtaminen ja
koko FU-08-moniresoluutioelinkaari ovat edelleen nimenomaisia jatkotöitä
eivätkä dokumentoitua valmista toimintaa.

Kehyksille luodaan kuvatekstit peräkkäin määritetyllä Video-mallilla. Tyhjä
Video-ohitus perii Vision-asetuksen; jos molemmat ovat tyhjiä, Vision-
automaattireititin valitsee käytettävän näkökykyisen mallin. Onnistuneet kuvatekstit
korvaavat alkuperäisen osan vakaalla `[Video description:`-etuliitteellä, joka myös
merkitsee tekstin epäluotetuksi mediasta johdetuksi havainnoksi ja ohjeistaa jatkokäsittelyn
malleja olemaan noudattamatta mediasta löytyviä ohjeita. Kehysten kuvatekstien välimuistiavaimet
sisältävät JPEG-tavut, kehotteen, aikaleiman ja käytettävän mallin; vain onnistuneet
kuvatekstit tallennetaan välimuistiin. Välimuistimerkinnät säilyttävät tosiasiallisen onnistuneen tuottajamallin,
mukaan lukien varamallin; silta ilmoittaa arvon `mixed`, kun eri kehykset
on tuotettu eri malleilla. Välimuistiosuma käyttää uudelleen kyseistä tuottajaidentiteettiä
sen sijaan, että se nimettäisiin uudelleen pyydetyn reitityssuunnitelman mukaiseksi. Koko videon tuloksen
välimuisti avainnetaan kaikilla tulosta muuttavilla syötteillä — kehote, käytettävä
malli, näytteenottokäytäntö, kehysten määrä, semanttinen analyysitila, normalisoidun
kohdistusvihjeen SHA-256-sormenjälki, kohdistusikkuna, `transcript`,
`audioTranscript` ja kontaktikuvakoosteasetus — joten minkä tahansa näistä
ulottuvuuksista muuttaminen aiheuttaa välimuistihudin eikä koskaan vanhentuneen tuloksen uudelleenkäyttöä. Visuaalisen deduplikointikäytännön
versio, kynnysarvo ja rajattu ehdokaskehysten määrä ovat myös nimenomaisesti mukana
tulosvälimuistin avaimessa ja metatiedoissa; käytännön muutos ei siten voi käyttää uudelleen vanhentunutta
koko videon kuvausta. Tulosvälimuistin v4-metatiedot säilyttävät tilan ja
sormenjäljen, eivät koskaan käyttäjän raakatehtävää. Suojakaiteiden metatiedot ilmoittavat sekä
pyydetyn että käytettävän analyysitilan; pyydetty `focused`-tila ilman
käyttökelpoista käyttäjätekstiä ilmoitetaan tosiasiallisesti `full`-tilana.

Suojakaide poimii kaikki tuetut video-osat mutta kuvailee enintään
`modalityBridgeVideoMaxVideos` videota. Kun kohteen on osoitettu täyttävän ehdon
`supportsVideo === false`, epäonnistuneet ja rajan ylittävät videot muuttuvat nimenomaisiksi turvallisiksi
tekstimerkinnöiksi, jotta raakavideota ei jää jäljelle. Kun kyvykkyys ei ole tiedossa, kyseiset osat
säilyttävät videosäiliönsä; mahdollinen varatranskriptio noudattaa edellä kuvattua rajattua tekstiksi
muuntamista. Kohteet, joilla `supportsVideo === true`, ohittavat sillan.
Asiakaspyynnön keskeytyssignaali välittyy latauksen, välittäjäjonon,
aliprosessien ja kuvatekstikutsujen läpi; keskeytykset pysäyttävät käsittelyn videoiden välillä eivätkä koskaan salli raakamedian
läpimenoa virhetilanteessa.

Suorituksenaikaiset asetukset tallennetaan tietokantaan ja validoidaan Zodilla:

| Avain                               | Oletus      | Alue / toiminta                                                                                                       |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valinnainen suoritusympäristö, erikseen käyttöön otettava                                                             |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` säilyttää yleiset kuvatekstit; `focused` käyttää rajattua, epäluotettavaa viimeisimmän käyttäjän kontekstia    |
| `modalityBridgeVideoModel`          | `""`        | Perii Vision Bridgen mallin                                                                                           |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` tai suhteellinen `segment_aware`; tunnistimen virhetilanteessa käytetään `uniform`-käytäntöä |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                        |

Aiemmin tallennetut, yli 120 sekunnin Video-aikakatkaisuarvot rajataan
välittäjän määräaikaan; uudet asetuskirjoitukset, jotka ylittävät tämän rajan,
hylätään. `GET /api/modality-bridge/video/runtime` edellyttää luotettua,
leimattua paikallista loopback-yhteyttä ennen todentamista tai
suoritusympäristön tarkistamista, minkä jälkeen se edellyttää hallinnan
todennusta. Se palauttaa vain `available`-arvon, puhdistetut FFmpeg/ffprobe-versiot
ja kiinteän syyn, kun suoritusympäristö ei ole käytettävissä. Sisäinen
poimintapäätepiste ei ole julkinen lataus-API: jonon täyttyminen palauttaa
`503`-vastauksen sekä `Retry-After`-otsakkeen, kutsujan yhteyden katkeaminen
palauttaa `499`-vastauksen ja välittäjän kiinteän määräajan ylittyminen palauttaa
`504`-vastauksen. Muunnetut vastaukset lisäävät
`video->text;model=<visionModel>;parts=<videos>`-segmentin keskitettyyn
`x-omniroute-modality-bridge`-otsakkeeseen poistamatta Vision- tai Audio-segmenttejä.

### Henkilötietojen peittäjä (`piiMasker.ts`)

Suoritetaan **molemmissa** vaiheissa.

- **`preCall`** kloonaa hyötykuorman, käy läpi kentät `system`, `messages`,
  `input` ja `prompt` (mukaan lukien pelkät merkkijonoalkiot) sekä soveltaa
  `processPII()`-funktiota (moduulista `@/shared/utils/inputSanitizer`)
  merkkijonomuotoisiin `content`-/`text`-kenttiin. Kun
  `PII_REDACTION_ENABLED=true`, havaitut henkilötiedot peitetään lähtevästä
  hyötykuormasta. Tämä ei riipu `INPUT_SANITIZER_MODE`-asetuksesta (joka
  hallitsee vain kehotesyötteiden manipuloinnin käytäntöä). Kun peittäminen on
  pois käytöstä, kutsu tallentaa havaintojen määrät kirjoittamatta sisältöä
  uudelleen.
- **`postCall`** syväkloonaa vastauksen ja suorittaa `sanitizePIIResponse()`-funktion
  sekä Responses-API-muodon peittäjän (`maskResponsesOutput` — kattaa kentät
  `output_text` ja `output[].content[].text`). Jos peittämistä tapahtuu,
  muokattu vastaus korvaa alkuperäisen.

Suojakaide ei koskaan estä kutsua, vaan ainoastaan lisää huomautuksia
(`meta.detections`, `meta.redacted`) tai kirjoittaa sisällön uudelleen.

### Kehotesyötteiden manipulointi (`promptInjection.ts`)

Tunnistaa vihamieliset rakenteet käyttäjän toimittamasta sisällöstä ja panee
määritetyn käytännön täytäntöön. Toimintaa ohjaavat ympäristömuuttujat ja
konstruktorin asetukset:

| Asetus     | Ympäristömuuttuja                                                                                     | Oletus | Vaikutus                                                                                                                                                                                                                                |
| ---------- | ----------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Käytössä   | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | Kun arvona on `false`, suojakaiteen suoritus keskeytetään välittömästi.                                                                                                                                                                 |
| Tila       | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | Manipulointikäytäntö: `block`, `warn` tai `log`. (`redact` hyväksytään taaksepäin yhteensopivuuden vuoksi, mutta se **ei** poista manipulointitekstiä; pyynnön henkilötietojen uudelleenkirjoitusta hallitsee `PII_REDACTION_ENABLED`.) |
| Estokynnys | `blockThreshold`-asetus / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Estämiseen vaadittava vähimmäisvakavuus. Oletusarvoisesti keskitasoa vain tarkkaillaan.                                                                                                                                                 |

**Tilojen ensisijaisuusjärjestys** (`getMode`): kutsujan `options.mode` →
`INJECTION_GUARD_MODE`-asetuksen **tietokannassa oleva ominaisuuslipun
ohitus** (Dashboard → Settings → Feature Flags) → ympäristön
`INJECTION_GUARD_MODE` → ympäristön `INPUT_SANITIZER_MODE` → `warn`.
Dashboard-ohitus on siten ympäristömuuttujia ensisijaisempi, joten Feature Flags
-käyttöliittymä hallitsee käynnissä olevaa suojausta reaaliaikaisesti (ilman
uudelleenkäynnistystä). Tietokannan luku on vikasietoinen: jos siinä tapahtuu
virhe, suojaus palaa ympäristöön perustuvaan toimintaan, ja jos ohitusta ei ole
asetettu, toiminta vastaa täysin pelkästään ympäristöön perustuvaa määritystä.

Tunnistuslähteet:

1. `sanitizeRequest()` moduulista `@/shared/utils/inputSanitizer` (muuallakin
   käsittelyputkessa käytetty yhteinen tunnistinjoukko).
2. Sisäänrakennetut `DEFAULT_GUARD_PATTERNS`-mallit (tällä hetkellä
   `system_override_inline` ja `markdown_system_block`, molempien vakavuus on
   `high`).
3. Valinnaiset konstruktorin asetusten kautta välitetyt `customPatterns`-mallit
   (merkkijonoja, säännöllisiä lausekkeita tai
   `{ name, pattern, severity }`-tietueita).

Kun `mode === "block"` **ja** vähintään yksi havainto saavuttaa vakavuuden
raja-arvon, `preCall` palauttaa arvon `{ block: true, message: "Request rejected:
suspicious content detected" }`. Tiloissa `warn`/`log` suojakaide kirjaa havainnon mutta
sallii kutsun. Jaettu apufunktio `evaluatePromptInjection()` viedään myös
kutsujille, joiden on arvioitava kehotteita käyttämättä rekisteriä.

**Tarkistuksen raja (v3.8.20):** tunnistin tarkastaa vain yhdistetyn kehotetekstin
**ensimmäiset 16 KB** — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 tavua)
tiedostossa `src/shared/utils/inputSanitizer.ts`. Sekä `detectInjection()` että
`evaluatePromptInjection()` kutsuvat `slice(0, MAX_INJECTION_SCAN_BYTES)` ennen
kuviosilmukan suorittamista. Injektio-ohjeet sijaitsevat syötteen alkupuolella,
joten tämä rajoittaa säännöllisten lausekkeiden CPU-/GC-kuormitusta useiden satojen
kilotavujen hyötykuormissa heikentämättä tunnistusta (vrt. #3932, #4041).

### Tunnistetietojen peittäjä (`credentialMasker.ts`)

Suoritetaan **molemmissa** vaiheissa oletusketjun viimeisenä (prioriteetti `95`).
Se peittää lähtevästä hyötykuormasta (viestin sisällöstä, työkalukutsujen
argumenteista ja työkalujen tuloksista) **sekä** palveluntarjoajan vastauksesta
tunnettujen API-avainten ja salaisten tunnisteiden mallit, jotta kehotteeseen
liitetty tunnistetieto (tai työkalun tuloksessa takaisin kaiutettu tunnistetieto)
ei vuoda palveluntarjoajalle tai takaisin asiakkaalle.

- **Vain erikseen käyttöönotettuna**, sama käytäntö kuin henkilötietojen
  peittämisessä (lähellä kovaa sääntöä #20): poissa käytöstä, ellei
  `settings.credentialRedactionEnabled === true` **tai**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kun se on poissa käytöstä, suojakaide ei
  tee mitään — se ei koskaan estä eikä muokkaa.
- `redactCredentials()` käy läpi koko hyötykuorma-/vastauspuun (`walkValue()`,
  suojattu prototyyppisaastumiselta ja sykleiltä `WeakSet`-joukon avulla) ja
  korvaa osumat `[REDACTED:<type>]`-paikkamerkillä kloonaten vain ne haarat,
  jotka todella muuttuivat.
- `CREDENTIAL_PATTERNS` kattaa LLM-palveluntarjoajien avaimet (OpenAI,
  OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-tunnisteet
  (GitHub, Slack, Linear, Notion, npm, Postman, Discord), maksuavaimet (Stripe,
  Square), pilvipalveluavaimet (AWS access key, Twilio, SendGrid, Mailgun),
  yksityiset avaimet / JWT:t, tunnistetietoja sisältävät yhteysmerkkijonot
  (`mongodb://user:pass@...` jne.) sekä yleisen
  `Authorization`/`x-api-key`/`api-key`/`apikey`-otsakearvon mallin.
  Otsakkeen muotoiset avaimet (`authorization`, `x-api-key`, `api-key`,
  `apikey`) peitetään rakenteellisesti (vain arvo; järjestelmän etuliite, kuten
  `Bearer `/`Basic `, säilytetään) yleisen tekstin säännöllisen lausekkeen
  käyttämisen sijaan.
- Suojakaide ei koskaan estä, vaan ainoastaan muokkaa (`modifiedPayload` /
  `modifiedResponse`) ja lisää metatietoja (`meta.credentialsRedacted`,
  `meta.count`).

Regressiosuojaus: `tests/unit/credential-masker-guardrail.test.ts`.

## Perussopimus (`base.ts`)

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
  block?: boolean; // true katkaisee ketjun välittömästi
  message?: string; // näytetään eston yhteydessä
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall palauttaa tämän pyynnön uudelleenkirjoittamiseksi
  modifiedResponse?: TValue; // postCall palauttaa tämän vastauksen uudelleenkirjoittamiseksi
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

Suojakaide ilmaisee, ettei muutoksia ole, palauttamalla joko arvon `void`, `{}` tai
`{ block: false }`. Arvon `modifiedPayload`/`modifiedResponse` palauttaminen korvaa
ketjussa eteenpäin myöhemmille suojakaiteille välitettävän arvon.
`signal?: AbortSignal` välittää kutsujan elinkaaren suojakaiteille. Pyynnön keskeytys on tarkoituksellinen avoimeksi jättävä poikkeus: mediasillat lopettavat työn ja siivoavat palauttamatta käsittelemätöntä mediaa kohteelle, jonka tiedetään, ettei se tue sitä.

## Rekisteri (`registry.ts`)

Singleton-olio `guardrailRegistry` tarjoaa seuraavat toiminnot:

- `register(guardrail)` — lisää suojakaiteen (tai korvaa sen normalisoidun nimen perusteella) ja
  järjestää suojakaiteet uudelleen `priority`-arvon mukaiseen nousevaan järjestykseen.
- `clear()` / `list()` — hallinnollisia aputoimintoja.
- `runPreCallHooks(payload, context)` — käy aktiiviset suojakaiteet läpi, välittää
  hyötykuorman `modifiedPayload`-arvojen kautta ja pysähtyy ensimmäiseen `block: true` -tulokseen.
- `runPostCallHooks(response, context)` — sama käsittely vastauksen puolella.
- `resetGuardrailsForTests({ registerDefaults })` — tyhjentää tilan ja valinnaisesti
  rekisteröi oletukset uudelleen testien puhdasta eristämistä varten.

Molemmat suorittimet palauttavat arvon `{ blocked, payload|response, results, guardrail?, message? }`,
jossa `results` on `GuardrailExecutionResult`-tietueiden taulukko. Tietueet sisältävät
kunkin suojakaiteen `blocked`-, `skipped`-, `modified`-, `error`- ja `meta`-kentät,
joista on hyötyä jäljityksessä.

### Suojakaiteiden poistaminen käytöstä pyyntökohtaisesti

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` kokoaa
duplikaateista puhdistetun luettelon suojakaiteiden nimistä, jotka tulee ohittaa nykyisessä
pyynnössä. Lähteet (kaikki valinnaisia ja yhdistetään):

- `apiKeyInfo.disabledGuardrails`
- Pyynnön rungon `disabledGuardrails` (ylimmällä tasolla)
- Pyynnön rungon `metadata.disabledGuardrails`
- Otsake `x-omniroute-disabled-guardrails` (tai vanha
  `x-disabled-guardrails`)

Arvot voivat olla merkkijonotaulukoita tai pilkuilla eroteltu merkkijono; nimet
normalisoidaan pienikirjaimisiksi kebab-case-muotoon (`pii_masker` → `pii-masker`). Tulos
välitetään rekisterille `context.disabledGuardrails`-arvon kautta, jolloin rekisteri ohittaa
vastaavat suojakaiteet (`skipped: true` kohteessa `results`).

## Suoritusjärjestys

Jokaiselle pyynnölle, joka kulkee tiedostojen `src/sse/handlers/chat.ts` ja
`open-sse/handlers/chatCore.ts` kautta:

1. `resolveDisabledGuardrails(...)` muodostaa ohitusluettelon API-avaimen, pyynnön rungon
   ja otsakkeiden perusteella.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` suorittaa suojamekanismit nousevassa
   prioriteettijärjestyksessä:
   - Käytöstä poistetut suojamekanismit kirjataan tilaan `skipped`.
   - Kunkin suojamekanismin `preCall` voi kirjoittaa hyötykuorman uudelleen `modifiedPayload`-arvon avulla.
   - Ensimmäinen `block: true` keskeyttää ketjun, ja käsittelijä palauttaa
     suojamekanismin hylkäysvastauksen.
3. Mahdollisesti uudelleenkirjoitettu hyötykuorma siirtyy yhdistelmäreititykseen ja edelleen
   ylävirran käsittelyyn.
4. Kun vastaus on koottu, `guardrailRegistry.runPostCallHooks(...)`
   suorittaa saman ketjun vastaukselle. Tässä vaiheessa `block: true` hylkää ylävirran
   vastauksen.

Poikkeuksen aiheuttaneet suojamekanismit kirjataan muodossa `error: <message>` ja lokitetaan
`logger.warn`-kutsulla, mutta ketjun suoritus jatkuu — suunnitellusti salliva virhetilanteissa.

## Määritykset

Sisäänrakennettujen suojamekanismien lukemat ympäristömuuttujat:

| Muuttuja                              | Käyttäjä                | Vaikutus                                                                                                |
| ------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Aseta arvoksi `false`, jos haluat poistaa tunnistuksen kokonaan käytöstä.                               |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Injektiokäytäntö: `warn`, `block` tai `log`. Vanha arvo `redact` ei kirjoita injektiotekstiä uudelleen. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Injektiosuojan tila; myös tietokannan ominaisuuslippu, joka **ohittaa** ympäristömuuttujat (DB > ENV).  |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Vähimmäisvakavuus, jonka `MODE=block` hylkää: `high` (oletus), `medium` tai `low`.                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Vanha alias muuttujalle `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                              |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Kun arvo on `true`, pyynnön henkilötiedot peitetään (injektiotilasta riippumatta).                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (alavirta) | Hallitsee vastauksen peittimen toimintaa.                                                               |

Modality Bridge -suojamekanismit lukevat ajonaikaiset määritykset tietokantapohjaisesta asetussäilöstä
(`getSettings()`), eivät ympäristömuuttujista. Kuvankäsittelyn ensisijaiset avaimet ovat
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ja
`modalityBridgeCacheMaxEntries`. Vanhoja
`visionBridge*`-avaimia tuetaan vain dokumentoituna yhden julkaisusyklin lukemisen
vararatkaisuna; hallintapaneelin kirjoitukset käyttävät ensisijaisia avaimia. Oletusarvot ja vararatkaisun
selvitystoiminto sijaitsevat tiedostossa `src/shared/constants/modalityBridgeDefaults.ts`, ja vanhat
vakiot säilytetään tiedostossa `src/shared/constants/visionBridgeDefaults.ts`.

Ääni käyttää asetuksia `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ja `modalityBridgeAudioMaxClips` sekä jaettuja
`modalityBridgeCache*`-asetuksia. Äänelle ei ole vanhojen avainten vararatkaisua, koska nämä
avaimet otettiin käyttöön Modality Bridge -skeeman yhteydessä.

Video käyttää asetuksia `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ja
`modalityBridgeVideoTimeout` sekä jaettuja `modalityBridgeCache*`-asetuksia.
Se on oletusarvoisesti poissa käytöstä, koska FFmpeg/ffprobe ovat valinnaisia operatiivisia
riippuvuuksia ja kuvatekstien tuottaminen videoruuduille lisää viivettä ja mallin käyttökustannuksia.

## Mukautetut suojaukset

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

Vaiheet:

1. Luo `src/lib/guardrails/myGuardrail.ts`, joka laajentaa `BaseGuardrail`-luokkaa.
2. Toteuta `preCall` ja/tai `postCall`.
3. Rekisteröi joko tuonnin yhteydessä (lisää `registerDefaultGuardrails`-funktiosta) tai
   kutsu `guardrailRegistry.register(...)` suorituksen aikana — rekisteri korvaa
   kaikki aiemmat suojaukset, joilla on sama normalisoitu nimi.
4. Lisää testit hakemistoon `tests/unit/` (olemassa olevia esimerkkejä:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testaus

Käytä `resetGuardrailsForTests()`-funktiota testien välissä, jotta jokainen testi alkaa tunnetusta tilasta.
Anna `{ registerDefaults: false }`, jos haluat aloittaa tyhjällä rekisterillä ja
rekisteröidä vain testattavat suojaukset. Vision Bridge hyväksyy riippuvuuksien
injektoinnin (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge tarjoaa
vastaavat liityntäkohdat asetuksille, ominaisuuksille, STT-mallin valinnalle, tunnistetietojen
tarkistuksille ja litteroinnille. Testeillä voidaan siten testata kumpaakin työnkulkua ilman
tietokanta- tai verkkoyhteyttä.

## Katso myös

- `src/lib/guardrails/` — toteutus
- `src/shared/utils/inputSanitizer.ts` — jaettu tunnistin, jota käytetään
  kehoteinjektioiden havaitsemiseen ja henkilökohtaisten tunnistetietojen peittämiseen
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridgen oletusarvot ja
  pakotetun siltauksen malliluettelo
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio-ajonaikaiset jaetut oletusarvot
- `docs/architecture/RESILIENCE_GUIDE.md` — erillinen kerros (piirikatkaisin, jäähdytysajat)
- `docs/reference/ENVIRONMENT.md` — täydellinen ympäristömuuttujien viite

## Injektiosuojauksen reittikattavuus ja red-team-testaus (vaihe 8 · lohko D)

Injektiosuojaus (`createInjectionGuard` / `withInjectionGuard`) kattaa kaikki reitit,
jotka hyväksyvät käyttäjän kehotteita. Se noudattaa `INJECTION_GUARD_MODE`-asetusta (oletus `warn` = vain kirjaus;
`block` = palauttaa HTTP 400 `SECURITY_001`).

| Tyyppi            | Reitit                                                                                                                                               | Oletustila |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Teksti (nykyinen) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn       |
| Generatiivinen    | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn       |
| Data              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn       |

Tekstin poiminta (`extractMessageContents`) kattaa kentät `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team-testaus (öisin, `nightly-llm-security.yml`):** promptfoo varmistaa, että kukin reitti estää
OWASP-LLM-aineiston tilassa `INJECTION_GUARD_MODE=block`; garak suorittaa testit (ohitetaan ilman salaisuutta).
`moderations` sisältyy yhdenmukaisuuden vuoksi — estotilaa käyttävät ylläpitäjät voivat vapauttaa sen
`resolveDisabledGuardrails`-toiminnolla.

Öisin suoritettavassa työnkulussa (`.github/workflows/nightly-llm-security.yml`, cron + manuaalinen
käynnistys) on kaksi työtä:

- **`promptfoo-guard` (estävä)** — suorittaa komennon `promptfoo eval -c promptfooconfig.yaml`
  asetuksella `INJECTION_GUARD_MODE=block`. Kukin vihamielinen tapaus (esim. "ohita kaikki
  aiemmat ohjeet…", DAN-tyyliset suojauksen ohitukset) varmistaa, että vastaus sisältää
  arvon `error.code === "SECURITY_001"` eli että suojaus todella hylkäsi pyynnön.
- **`garak` (neuvoa-antava)** — suorittaa garakin asetuksella `--probes promptinject,dan,leakreplay`
  paikallista OmniRoute-instanssia (`http://localhost:20128/v1`) vasten. Suoritus riippuu
  palveluntarjoajan salaisuudesta (`PROMPTFOO_PROVIDER_KEY`); ilman sitä testi ohitetaan hallitusti, ja
  komentoon on lisätty loppuliite `|| true`, joten se raportoi tulokset aiheuttamatta CI-ajon epäonnistumista.

Suojausaputoiminnon (`createInjectionGuard` / `withInjectionGuard`)
kattavuus ulottuu kaikkiin kehotteita vastaanottaviin `/v1`-reitteihin; kehoteteksti poimitaan
kentistä `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`
`src/shared/utils/inputSanitizer.ts`-tiedoston `extractMessageContents()`-funktiolla.
