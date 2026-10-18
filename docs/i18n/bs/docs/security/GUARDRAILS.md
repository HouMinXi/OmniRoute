# Guardrails (Bosanski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Izvor istine:** `src/lib/guardrails/`
> **Posljednje ažuriranje:** 2026-08-29 — v3.8.51 (Porijeklo transkripta Video Bridge-a je deklarisano od strane pozivaoca,
> još nije verifikovano od strane servera — pojašnjeno po #11661)

Zaštitne ograde (Guardrails) nameću sigurnost, politiku i transformacije sadržaja na granici
između OmniRoute-a i uzvodnih provajdera. Svaka zaštitna ograda može pregledati (i
opcionalno odbiti, transformisati ili anotirati) zahtjeve (`preCall`) i
uzvodne odgovore (`postCall`).

Sistem je **fail-open**: ako zaštitna ograda baci grešku tokom izvršavanja, registar
bilježi grešku i nastavlja sa sljedećom zaštitnom ogradom umjesto da odbije
zahtjev. Blokiranje je eksplicitna odluka (`block: true`), nikada slučajnost.

## Ugrađene zaštitne mjere

Registar pri uvozu automatski učitava šest zaštitnih mjera prema redoslijedu prioriteta
(pogledajte `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Naziv               | Faza(e)        | Datoteka              |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niži brojevi prioriteta izvršavaju se **prvi**.

### Vision Bridge (`visionBridge.ts`) — Most modaliteta PR-1

Presreće zahtjeve koji sadrže slike i usmjereni su na **modele bez podrške za vid** te
ili preusmjerava cijeli zahtjev na model koji podržava vid ili zamjenjuje dijelove
sa slikama tekstualnim opisima koje generira podesivi model za vid prije
poziva prema nadređenom sistemu. Ovo omogućava pružateljima koji podržavaju samo tekst da transparentno obrađuju
multimodalne sadržaje.

Tok:

1. Preskočite ako ciljni model već podržava vid (osim ako se nalazi na
   listi modela za prisilno premošćivanje `isVisionBridgeForcedModel`).
2. Izdvojite dijelove sa slikama pomoću `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), koji delegira **objedinjenom detektoru
   medija** `detectMediaParts()` u `open-sse/utils/mediaParts.ts` — jedinstvenom
   izvoru istine koji se dijeli s kombinovanim filterom kompatibilnosti.
   Izdvajanje je ograničeno listom dopuštenih dijelova najvišeg nivoa čije oblike
   `replaceImageParts` može ponovo umetnuti (ugovor izdvajanje↔zamjena): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` i Responses API `input_image`. Ugniježđena podudaranja i
   oblici koji služe samo kao indikatori materijal su za kombinovani filter i nikada se ne izdvajaju.
   Preskočite ako ništa nije pronađeno.
3. Razriješite konfiguraciju za vrijeme izvršavanja pomoću `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi ključevi postavki `modalityBridge*`
   imaju prednost; zastarjeli ključevi `visionBridge*` ostaju kao **rezervna opcija tokom jednog
   ciklusa** (period za vraćanje). Preskočite prije bilo kakvog prolaska kroz medije kada je
   most onemogućen.
4. Selektor načina rada (`modalityBridgeVisionMode`, pogledajte tabelu ispod) odlučuje
   između preusmjeravanja i opisivanja. Preusmjeravanje vraća `modifiedPayload` samo sa
   zamijenjenim `model`, uz meta-podatke `{ rerouted, fromModel, toModel, imagesKept }`.
5. Putanja opisivanja: ograničava broj slika na `maxImages`, sastavlja upit prilagođen zadatku,
   provjerava keš opisa, poziva model za vid **paralelno**
   (`Promise.allSettled`) i umjesto njih umeće tekstualne dijelove
   `[Image N]: <description>`. Neuspjelo opisivanje daje `null`, a izvorni dio sa slikom se
   **zadržava** (#4012) — osim na kombinovanoj putanji opisivanja kada sva
   opisivanja ne uspiju, pri čemu potvrđeni nadređeni sistem bez podrške za vid dobija
   zamjenski tekst `(unavailable — no vision-capable provider connected)` (#8430).
6. Vratite `modifiedPayload` + meta-podatke (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor načina rada (`modalityBridgeVisionMode`)

| Način rada | Zadano | Ponašanje                                                                                                                                                                                                                                                                                                                                          |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Zastarjela heuristika, neizmijenjena (#6640/#7204): modeli koji nisu kombinovani, odnosno modeli `auto/`, preusmjeravaju se na najbolji model za vid osim ako izvorni model već ima upotrebljive vjerodajnice (tada se opisuje); kombinovani ciljevi uvijek koriste opisivanje.                                                                    |
| `describe` |        | Uvijek opisuje — blok za preusmjeravanje se u potpunosti preskače; model koji je korisnik odabrao uvijek daje odgovor.                                                                                                                                                                                                                             |
| `reroute`  |        | Prisilno preusmjeravanje: zaobilazi se zaštita koja zadržava model s vjerodajnicama. Zaštita vjerodajnica za **cilj** preusmjeravanja i dalje se primjenjuje — kada ne postoji upotrebljiv ciljni model za vid, zahtjev prelazi na opisivanje kako neobrađene slike nikada ne bi dospjele do pozadinskog sistema koji podržava samo tekst (#8430). |

Prisilni načini rada završavaju obradu **prije** pokretanja automatske heuristike; ponašanje načina
`auto` identično je, na nivou bajtova, zaštitnoj mjeri prije PR-1.

#### Opseg API ključa (`visionBridgeKeyScope.ts`)

Kada API ključ pozivaoca ograničava `allowedConnections`, skupove kvota
(`allowedQuotas`) ili modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most bira samo
modele za preusmjeravanje i opisivanje koje taj ključ smije koristiti, na vezama koje taj ključ smije
koristiti. Poziv za opisivanje zatim uvijek prolazi kroz OmniRoute povratnu petlju sa
zaglavljem `x-omniroute-self-loop-key-id`, tako da prijemni zahtjev za razgovor
ponovo provodi pravila tog ključa za veze i modele. `enforceApiKeyPolicy()`
uvažava to zaglavlje samo zajedno s bearer tokenom povratne petlje, tako da ono može samo
sužavati pristup, a id koji nije moguće razriješiti biva odbijen.

Ako za ključ nije dopušten nijedan model za vid, putanja opisivanja se povlači i
zahtjev prolazi neizmijenjen, uz isto ponašanje otvorenog prolaza kao kod onemogućene
zaštitne mjere (meta-podaci `{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahtjevi bez ključa i ključevi bez ovih ograničenja ponašaju se potpuno jednako kao
i ranije.

#### Upit za opisivanje prilagođen zadatku (`modalityBridgeVisionTaskAware`)

Zadano je **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dodaje
tekst **posljednje korisničke poruke** (skraćen na 500 znakova) osnovnom
upitu za opisivanje, usmjeravajući opis prema onome što je korisnik zaista tražio
(obrazac codex-vision-proxy) i tražeći od vision modela da transkribuje vidljivi
tekst. Kada je zastavica isključena — ili nema korisničkog teksta — osnovni upit
koristi se neizmijenjen.

OpenAI-kompatibilni zahtjev vlastite povratne petlje za opisivanje (`callVisionModelSingle()`
u `visionBridgeHelpers.ts`) uvijek zahtijeva `image_url.detail: "high"` —
bezuslovno, za svakog pozivaoca/provajdera, bez zavisnosti od bilo kakvog signala klijenta.
Uzorkovanje s niskim nivoom detalja umanjuje tačnost OCR-a upravo za zadatak
transkripcije teksta koji ovaj upit zahtijeva, pa sam poziv za opisivanje uvijek
zahtijeva visok nivo detalja, bez obzira na nivo detalja korišten u izvornom dolaznom
zahtjevu. Ovo utiče samo na tijelo internog zahtjeva za opisivanje; ne mijenja način
na koji OmniRoute prosljeđuje pozivaočev vlastiti `image_url.detail` u primarnom zahtjevu —
ta zadana vrijednost primjenjuje se zasebno, i to samo za prepoznate OpenCode klijente, u
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Grana
vlastite povratne petlje za opisivanje u Anthropic žičanom formatu nema polje `detail`
i nijedna zadana vrijednost ne utiče na nju.

#### Ograničenje izlaza opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Zadano | Raspon            |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ili 100–50000 |

`0` (zadano) znači **bez ograničenja** — opis koji vrati
`callVisionModel()` prosljeđuje se neizmijenjen, čime se zadržava postojeće
ponašanje. Svaka vrijednost u rasponu 100–50000 skraćuje opis uz
sufiks `…` prije nego što se umetne nazad kao `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` u `src/lib/guardrails/visionBridge.ts`).
Povećajte ovu vrijednost za OCR zadatke s mnogo detalja, gdje je modelu koji slijedi
potrebna potpuna transkripcija; smanjite je kako biste ograničili potrošnju tokena
kod opširnih vision modela. Polje na kontrolnoj ploči nalazi se u panelu Napredno
na kartici Vision (`modality-bridge-max-chars` u `ModalityBridgeVisionTab.tsx`) i
podiže svaku vrijednost između 1 i 99 na minimalnih 100, dok eksplicitnu vrijednost
`0` ostavlja neizmijenjenom — `0` je sama po sebi važeća Zod vrijednost
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a ne samo
zadana vrijednost za „nije postavljeno“.

#### Keš opisa (`modalityBridge/bridgeCache.ts`)

LRU + TTL keš u memoriji za izlaze opisivanja, zajednički za cijeli proces.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
uokvirivanjem prefiksom dužine (bez kolizija na granicama polja). Komponenta modela
je **konfigurisani** bridge model, a ne model koji je stvarno odgovorio —
`callVisionModel` može interno koristiti rezervni model, a određivanje ključa po
pokušaju fragmentiralo bi keš. Neuspješni opisi nikada se ne keširaju. Postavke:

| Ključ                           | Zadano | Raspon  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Normalizacija udaljene slike (opisivanje u vlastitoj petlji/base64 dohvaćanje)

Kada bridge sam dohvata **udaljenu** sliku — za Anthropic vlastiti poziv za
opisivanje i base64 konverziju za claude-wire-format
(`ensureBase64ImagesForClaudeWire`), oba putem
`fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — rezultirajući podatkovni
URI prosljeđuje se kroz `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prije ugrađivanja u zahtjev prema vision modelu.
Prevelike slike smanjuju se na **2048px duž duže ivice** (što odgovara
ograničenju promjene veličine koje OpenAI/Anthropic već primjenjuju na serverskoj strani),
čime se smanjuju količina podataka za otpremanje i latencija bez promjene onoga što
vision model vidi. Za promjenu veličine koristi se `sharp`, učitan dinamičkim uvozom:
na platformi na kojoj se njegova nativna binarna datoteka ne uspije učitati,
`normalizeDataUri()` **nikada ne baca izuzetak** — umjesto toga prosljeđuje
izvorne bajtove bez izmjena, tako da putanja opisivanja/base64 konverzije uvijek
nastavlja raditi. Bajtovi koji ne predstavljaju sliku (dohvaćanje koje nije vratilo
sliku koju je moguće dekodirati) također se prosljeđuju bez izmjena. Ova normalizacija
ograničena je na slike koje bridge dohvata za vlastiti poziv — nikada se ne
primjenjuje na pozivaočev neobrađeni payload koji se direktno prosljeđuje, u skladu
s principom izmjene samo uz izričit pristanak (strogo pravilo #20).

#### Shema postavki + migracija

Novi ključevi `modalityBridge*` validiraju se Zod-om u `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*` i grupa
`modalityBridgeAudio*` koju koristi Audio Bridge. Migracija
`141_modality_bridge_settings.sql` kopira postojeće naslijeđene vrijednosti
`visionBridge*` u odgovarajuće nove ključeve (idempotentno, nikada ne prepisuje
vrijednost `modalityBridge*` koju je postavio operater); naslijeđeni ključevi
ostaju prihvaćeni kao rezervni izvor za čitanje tokom jednog ciklusa izdanja.

#### Zaglavlje transparentnosti + statistika

Odgovori transformisani opisivanjem sadrže
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(izrađuje ga `buildModalityBridgeHeader()` u `modalityBridge/bridgeStats.ts`,
a postavlja `withModalityBridgeHeader()` u `src/sse/handlers/chatHelpers.ts`).
Preusmjereni zahtjevi **nemaju** zaglavlje — payload nije izmijenjen, a zamjena
modela već je vidljiva u polju `model` tijela odgovora.

`GET /api/modality-bridge/stats` (autentifikacija za upravljanje, isti nivo kao
`GET /api/settings`) vraća brojače po modalitetu iz memorije
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` i
`video`. `averageLatencyMs` koristi `latencySamples`, a ne sve pokušaje, kao
nazivnik; operacija bez mjerenja vremena ne stvara lažni uzorak od nula
milisekundi. `bridged` ostaje unazad kompatibilan alias za uspješne
konverzije; neuspješni pokušaji ga ne povećavaju.
Brojači se namjerno resetuju pri ponovnom pokretanju procesa
(telemetrija, ne računovodstvo).

#### Konfiguracija kontrolne ploče

Namjenska stranica kontrolne ploče nalazi se na
`/dashboard/settings/modality-bridge`. Njene kartice `Vision`, `Audio` i
`Video`, kojima se može pristupiti putem URL-a, zadržavaju parametre upita pri
promjeni vrijednosti `tab`.
Kartica Vision nudi omogućavanje, način rada, odabir modela (uključujući automatski
zadani model), upite prilagođene zadatku, napredna ograničenja za istek vremena,
slike, dužinu opisa i keš, brojače vremena izvođenja te zaštićeni primjer zahtjeva.
Kartica Audio je također aktivna: nudi omogućavanje, alat za odabir isključivo STT
modela s opcijom Auto, ograničenja isteka vremena i maksimalnog trajanja isječka,
audio brojače i probni `input_audio` zahtjev. Kartica Video je funkcionalna:
prikazuje stanje FFmpeg/ffprobe okruženja za vrijeme izvođenja — jedno od četiri
eksplicitna stanja korisničkog interfejsa (`unknown` dok je provjera u toku ili
se nije mogla dovršiti, `restricted` na hostu kontrolne ploče koji nije loopback
i na kojem se provjera preskače na strani klijenta, `unavailable` nakon provedene
provjere i potvrde da alati nedostaju ili `available` s verzijama FFmpeg/ffprobe)
— trajno čuva ograničenja omogućavanja, modela, kadrova, videa i isteka vremena,
filtrira alat za odabir modela tako da prikazuje modele koji podržavaju vizuelni
ulaz i nudi video brojače.

Prethodna kartica Vision Bridge u AI postavkama sada je kompatibilnosni link prema
novoj stranici; više ne sadrži drugu kopiju obrasca. Media Providers također
povezuje tokove rada Image-to-Text i Speech-to-Text s odgovarajućim karticama
Modality Bridgea bez uklanjanja postojećeg Speech-to-Text probnog okruženja.

**Zaobilaženje kontrole pristupa za vlastitu petlju:** kada se poziv za opisivanje
usmjerava kroz vlastitu `/v1` petlju OmniRoutea (nestandardni model pružaoca),
podzahtjev šalje `x-omniroute-admission-bypass: internal` i autentificira se
razriješenim pristupnim podatkom vlastite petlje — lokalnim `sk_omniroute`
sentinelom u lokalnom načinu rada ili ključem iz okruženja
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` koji je konfigurirao operater (#1350),
tako da implementacije s `REQUIRE_API_KEY=true` i dalje mogu izvršiti poziv za
opisivanje. Zaobilaženje se prihvata samo za te tačne pristupne podatke, tako da
vanjski klijenti ne mogu koristiti zaglavlje za preskakanje kontrole pristupa.

Naslijeđene zadane vrijednosti nalaze se u
`src/shared/constants/visionBridgeDefaults.ts`; nove zadane vrijednosti za
način rada, prilagođavanje zadatku i keš, kao i razrješivač postavki, nalaze se u
`src/shared/constants/modalityBridgeDefaults.ts`. Zaštitni mehanizam izlaže
opciju konstruktora `deps` kako bi testovi mogli ubaciti lažne implementacije
`getSettings` i `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreće zahtjeve za razgovor koji sadrže audio prije nego što stignu do cilja
za koji nije poznato da prihvata audio ulaz. Nikada ne preusmjerava zahtjev za
razgovor: audio dijelovi se transkribiraju putem postojećeg multipart endpointa
kompatibilnog s OpenAI-jem, a odabrani model za razgovor nastavlja rad s
tekstualnim transkriptima.

Tok:

1. Razriješite `supportsAudio` putem `getResolvedModelCapabilities()`.
   Eksplicitni metapodaci registra pružalaca imaju prednost, zatim statički
   metapodaci modela, a potom sinhronizirani `modalities_input`. Deklarirana
   lista ulaza bez `audio` daje `false`; ako nema dokaza o mogućnostima, vrijednost
   ostaje `null`. I `false` i `null` aktiviraju konzervativni most, dok ga `true`
   zaobilazi.
2. Razriješite postavke `modalityBridgeAudio*` i izdvojite audio dijelove najvišeg
   nivoa koji se mogu izrezati iz svake poruke pomoću zajedničkog detektora
   `detectMediaParts()`. Podržani oblici prijenosa su OpenAI `input_audio`,
   `audio_url` i `source.media_type: "audio/*"`. Ugniježđeni audio otkriva se
   radi usmjeravanja, ali se ne uklanja putem putanje za izrezivanje. Obrada je
   ograničena vrijednošću `modalityBridgeAudioMaxClips`; kasniji dijelovi ostaju
   neizmijenjeni.
3. Poštujte konfigurirani `provider/model` ili dozvolite funkciji
   `selectAudioBridgeModel()` da prođe kroz `AUDIO_TRANSCRIPTION_PROVIDERS`
   stabilnim redoslijedom kataloga i odabere prvi model s upotrebljivim aktivnim
   pristupnim podatkom pružaoca.
4. `callAudioTranscription()` pretvara base64/data-URI audio u multipart
   `file` ili preuzima udaljeni `audio_url` putem izlazne zaštite ograničene na
   javne adrese, uz DNS pinning i ograničenje od 25 MB. Zatim POST metodom šalje
   datoteku i odabrani model lokalnoj vlastitoj petlji
   `/v1/audio/transcriptions`, autentificiranoj pomoću
   `resolveSelfLoopBearer()`. Postojeća ruta za transkripciju obavlja uobičajeno
   pronalaženje pristupnih podataka, obradu perioda hlađenja/ograničenja brzine i
   prosljeđivanje pružaocu.
5. Uspješni pozivi zamjenjuju svoje dijelove tekstom
   `[Audio N]: <transcript>`. Pozivi se izvršavaju pomoću
   `Promise.allSettled`: pojedinačni neuspjeh zadržava izvorni audio dio
   (#4012 ugovor). Ako svi pozivi ne uspiju, a za cilj je dokazano
   `supportsAudio === false`, dijelovi postaju
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 ugovor). Za
   nepoznat cilj (`null`), rezultat u kojem su svi pozivi neuspješni ostaje
   neizmijenjen. Cilj za koji je dokazano da podržava samo tekst i koji nema
   upotrebljive STT pristupne podatke dobija isti eksplicitni zamjenski tekst bez
   slanja mrežnog poziva.

Uspješni transkripti koriste LRU/TTL keš Modality Bridgea zajednički za cijeli
proces. Ključ kombinira referencu na audio, stabilnu oznaku operacije
`audio-transcription` i odabrani STT model; neuspjesi se nikada ne keširaju.
Pokušaji obrade audia ažuriraju zajedničke brojače `bridged`, `cacheHits`,
`failures` i `lastUsedAt`. Transformirani odgovori sadrže
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
neizmijenjeni zahtjevi ne dobijaju segment Audio Bridgea.

Postavke vremena izvođenja pohranjene su u bazi podataka i validirane pomoću Zoda:

| Ključ                         | Zadano  | Raspon                |
| ----------------------------- | ------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                     |
| `modalityBridgeAudioModel`    | `""`    | Automatski ili STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                  |

Zajednička predmemorija i dalje se kontroliše putem `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Video most (`videoBridge.ts`, `videoBridgePipeline.ts`)

Presreće video dijelove najvišeg nivoa u `messages` za Chat Completions i
`input` za Responses API prije pozivanja cilja bez poznate izvorne podrške za
video. Podržani oblici su `input_video`, `video_url`, `video_source`, HTTPS
URL-ovi i `data:video/*;base64,...` URI-ji podataka. Obični nazivi datoteka u
tekstu ne tretiraju se kao video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prolaskom kroz zahtjev,
provjerom mogućnosti/politike, agregacijom po zahtjevu i korisnim sadržajem
odgovora. Obrada pojedinačnog videa — pribavljanje, predmemorija cjelokupnog
rezultata, opisivanje niza kadrova (koje objedinjuje sve audioske transkripte
koje je pozivatelj deklarisao) te metrike/prekid/čišćenje za svaki pokušaj —
skrivena je iza `processVideoPart` u `videoBridgePipeline.ts`, koji se poziva
jednom za svaki video dio unutar petlje funkcije `preCall`. Taj modul također
definiše eksplicitne granice portova `VideoMediaBrokerPort` (pribavljanje bajtova
i izdvajanje uzorkovanih kadrova), `VideoAudioTranscriptionPort` (objedinjavanje
audioskog transkripta koji je deklarisao pozivatelj s opisima uzorkovanih
kadrova) i `VideoDrilldownPort` (granica trajnog pohranjivanja detaljne analize
kadrova; još nije povezana s `processVideoPart` — danas samo zasebna ruta
`/api/modality-bridge/video/drilldown` zapisuje unose detaljne analize).

Javna putanja zahtjeva `/v1` nikada ne uvozi niti poziva podproces. Udaljeni
videozapisi preuzimaju se uz ograničenje od 50 MiB; ugrađeni base64 videozapisi
imaju konzervativno ograničenje od 36 MiB dekodiranih podataka po videu kako bi
omotač modela/poruka/uokviravanja mogao ostati unutar javnog ograničenja od
50 MiB za prihvatanje JSON zahtjeva. Dužina ugrađenih podataka i procjene
dekodirane veličine provjeravaju se prije alokacije. HTTPS je obavezan na
početnom udaljenom URL-u i pri svakom preusmjeravanju, uz korištenje postojeće
zaštite za isključivo javne odlazne veze s DNS vezivanjem. Bajtovi zatim prelaze
tačno definisanu internu posredničku granicu
`POST /api/modality-bridge/video/extract`. Ta ruta je istovremeno `LOCAL_ONLY` i
`SPAWN_CAPABLE`, prihvata samo autentificirani zahtjev pouzdane povratne veze
specifičan za proces i nikada ne prihvata URL, putanju datotečnog sistema,
izvršnu datoteku ili listu argumenata. Cjevovod API-ja za veličinu tijela i
inkrementalni čitač tijela obrađivača nezavisno nameću ograničenje od 50 MiB za
ulaz posrednika. Njegov ograničeni red čekanja izvršava jedno izdvajanje
odjednom, dopušta četiri posla na čekanju i ograničava ulazne podatke na čekanju
na 100 MiB.

Unutar posrednika `ffprobe` čita privatnu lokalnu datoteku; fiksna lista
dozvoljenih formata isključuje formate liste za reprodukciju i manifesta. Za
dozvoljene kontejnere iz porodice MOV, vanjske reference na MOV podatke ostaju
zadano onemogućene, a fiksna naredba ih ne uključuje. I `ffprobe` i `ffmpeg`
koriste listu dozvoljenih protokola koja sadrži samo `file`, jednu nit, fiksne
nizove argumenata, bez ljuske, te izvršne datoteke razriješene iz `PATH`.
Tokovi naslovnih slika priloženih videu nisu kandidati za reprodukciju. Svi
tokovi koji se mogu reproducirati moraju zadovoljiti ograničenja, a eksplicitni
zadani tok ima prednost prije determinističke alternative s najnižim indeksom.
Videozapisi su ograničeni na 600 sekundi, 8.192 piksela po dimenziji i
33.554.432 izvorna piksela. FFmpeg uzorkuje 1–16 središnjih JPEG kadrova,
smanjuje dužu ivicu na najviše 1.024 piksela bez povećavanja manjih ulaznih
sadržaja i nikada ne prima URL. Uzorkovanje je zadano `uniform`. Opcionalne
politike `scene_aware` i eksperimentalna `segment_aware` izvršavaju jedan dodatni
fiksni FFmpeg prolaz preko već validiranog lokalnog toka, odabiru ograničene
vremenske oznake scena iz `showinfo` i deterministički se vraćaju na iste
ravnomjerno raspoređene središnje tačke u slučaju neuspjeha detektora, isteka
vremena, neispravnog izlaza ili praznog skupa kandidata. Način rada koji
uvažava segmente proporcionalno dodjeljuje uzorke središnjih tačaka validiranim
intervalima scena; dokazi za segmentno uvažavanje i ponašanje pri povratku
detaljno su opisani u nastavku. Čvrsto ograničenje od 16 kadrova primjenjuje se
nakon odabira u svakoj politici. Kada zahtjev koji uvažava scene ima budžet od
samo jednog kadra, koristi ravnomjernu središnju tačku aktivnog prozora cijelog
videa ili fokusnog prozora i prijavljuje `policyEffective: uniform`: jedan
odabrani kadar scene ne može sačuvati oba vremenska kraja. Pozivatelj opcionalno
može navesti konačan fokusni prozor (`start`/`end` u sekundama); granice se
ograničavaju na trajanje medija, obrnuti ili nekonačni prozori se odbijaju, a
sve politike uzorkovanja provode se samo unutar normaliziranog intervala.
Rezultirajući prozor uključuje se u metapodatke uzorkovanja i u nepouzdani
prefiks opisa kako bi modeli u nastavku obrade mogli razlikovati fokusirani
isječak od cjelokupne vremenske linije.

Semantički fokus opisa zasebna je, eksplicitna postavka. Zadani način analize
`full` zadržava postojeći upit za kadrove i nikada ne prosljeđuje tekst zahtjeva
modelu za opisivanje. U načinu `focused`, most čita samo najnoviji neprazni
`text`/`input_text` koji je napisao korisnik iz istog Chat ili Responses
kontejnera, normalizira ga u NFC, sažima kontrolne znakove i razmake te ga
ograničava na 500 Unicode kodnih tačaka. Prazan rezultat vraća se na potpuno
isti `full` upit. Upotrebljiva smjernica serijalizira se kao JSON u namjenskom
bloku nepouzdanog korisničkog konteksta i smije samo dati prioritet uočljivim
detaljima; ne može poništiti zasebno upozorenje protiv slijeđenja uputa koje su
vidljive ili čujne u mediju. Tekstualni fokus nikada ne izvodi `start`/`end`
niti mijenja vremenski uzorkivač.

#### FU-07 strukturni dokazi o segmentima

`segment_aware` koristi jedan ograničeni prolaz predanalize nad već validiranim
lokalnim videotokom. Fiksni lanac filtera prvo skalira video na širinu od najviše
320 piksela, otkriva promjene scena i zamrznute intervale, a zatim uzorkuje
1 kadar u sekundi radi utvrđivanja zamućenja, prosječne luminanse te
prostornih/vremenskih informacija. Prolaz je ograničen na 600 strukturnih
uzoraka, jednu FFmpeg/filter nit, iste liste dozvoljenih protokola samo za
`file` i kontejnera, ograničenje izlaza procesa od 1 MiB te najviše 30 sekundi
unutar zajedničkog prekida/roka brokera. Nikada ne prihvata naredbu, filter,
putanju niti URL iz zahtjeva.

Strukturne vrijednosti predstavljaju determinističke dokaze uzorkovanja, a ne
semantičko razumijevanje videa. One ne zaključuju o subjektima, radnjama,
natpisima, govoru niti namjeri korisnika. Granice scena i zamrzavanja formiraju
segmente; pokrivenost zamrzavanjem, zamućenje, ekspozicija, prostorni detalji i
vremenske promjene utiču samo na način dodjele postojećeg budžeta od 1–16
kadrova. Potpuno zamrznuti segment ograničen je na jedan kadar, dok se
nezamrznuti segmenti nadmeću za preostali budžet. Kada ima više granica nego
kadrova, zadržava se ravnomjerna pokrivenost vremenske linije kako brzi rani
rezovi ne bi mogli sakriti dugi završni segment. Granice scena unutar
1-sekundne rezolucije analize granice zamrzavanja objedinjuju se.

Nedostajući filteri, neispravni/prazni dokazi, greška detektora ili istek
vremena ograničene predanalize rezultiraju sigurnim prelaskom na potpuno istu
politiku ravnomjernih središnjih tačaka. Prekid pozivaoca ili rok brokera ne
rezultira takvim prelaskom: on prekida podproces koji je u toku, sprečava
naknadno izdvajanje kadrova, a privatno privremeno stablo uklanja se u
`finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generiše determinističke stvarne FFmpeg
testne podatke za uštede u pozivima za generisanje opisa nakon deduplikacije,
dodjelu budžeta pri gustom kretanju, dokaze o zamućenju/ekspoziciji/SI-TI,
brze rezove s dugim završnim dijelom i lažno pozitivne rezultate pri postepenom
pretapanju. Bilježi vrijeme predanalize prema zidnom satu i, gdje je dostupan
`/usr/bin/time`, procesorsko vrijeme podređenog procesa i vršnu RSS vrijednost.
Njegove provjere kvaliteta predstavljaju samo strukturne orakule. Kvalitet
stvarnog modela za generisanje opisa ostaje `HOLD` jer ovaj testni okvir nema
ovlaštenu krajnju tačku niti zamrznutog ocjenjivača. Novčane uštede također
ostaju `HOLD` osim ako `--caption-cost-per-call-usd` ne navede eksplicitnu
pozitivnu procjenu troška po pozivu; skripta nikada ne izmišlja nijedan od tih
rezultata.

Svaki kadar ograničen je na 4 MiB, svi sirovi kadrovi zajedno na 23 MiB, a
serijalizirani odgovor brokera na 32 MiB. Privatni privremeni direktorij uklanja
se u `finally`. OmniRoute ne isporučuje FFmpeg u paketu i ne prihvata prilagođenu
putanju do izvršne datoteke. Prije generisanja opisa, most primjenjuje
konzervativni prolaz vizuelne deduplikacije: svaki JPEG svodi se na
16×16 međuspremnik u sivim tonovima i poredi samo s posljednjim zadržanim
kadrom. Za traženi budžet opisa veći od jednog kadra, izdvajanje osigurava
ograničeni skup kandidata do dvostruke veličine tog budžeta, ali nikada više od
16 kadrova. Traženo ograničenje primjenjuje se tek nakon deduplikacije, uz
očuvanje prvog i posljednjeg odabranog kandidata tokom završnog prorjeđivanja
kada budžet iznosi najmanje dva. Verzijska politika
`grayscale-16x16-mean-cells-v2` koristi veću vrijednost između srednje promjene
luminanse i omjera ćelija sličice čija je normalizirana razlika najmanje 0.05.
Prag duplikata je konstanta 0.04, odabrana radi predvidljivosti umjesto da bude
izložena kao postavka za vrijeme izvršavanja. Ovaj sekundarni signal visokog
kontrasta zadržava male pokrete i promjene vidljivog teksta koje poređenje
zasnovano samo na srednjoj vrijednosti može sakriti. Greške komparatora ili
dekodera rezultiraju sigurnim zadržavanjem pokrivenosti. Izlazni metapodaci
odvojeno prikazuju izdvojene kandidate, uspješno korištene kadrove i odbačene
vizuelne duplikate.

Eksplicitno označen videodio može zatražiti kontaktnu tablu s vremenskim
oznakama. Most izrađuje JPEG mrežu s najviše 4 kolone i 16 kadrova. Svaka
ćelija od 512 piksela utiskuje vremensku oznaku svog izvora u donju traku
visokog kontrasta, dok iste vremenske oznake ostaju u tekstualnim metapodacima
radi daljnjeg povezivanja i revizije. Cijeli JPEG ostaje ograničen na 32 MiB.
Ako `sharp` ne može dekodirati ili sastaviti mrežu, most se vraća na pojedinačne
JPEG kadrove; prekid klijenta i dalje se prenosi kroz operaciju kontaktne table.

Dokazi za promociju namjerno su odvojeni od sintetičkog mikromjerenja
performansi sastavljanja. `scripts/perf/video-bridge-contact-sheet-eval.ts`
definira A/B testni okvir s verzioniranom shemom za stvarne modele vida
kompatibilne s OpenAI-jem. Mjeri broj tokena koji prijavljuje pružalac usluge,
ukupno vrijeme odziva prema zidnom satu (uključujući sastavljanje kontaktne
table), broj poziva modela i zadržavanje činjenica definiranih manifestom.
Neobrađeni odgovori modela ne zapisuju se u izvještaj; zadržavaju se samo
SHA-256 sažeci i ID-ovi podudarnih činjenica. Testni okvir ne uspostavlja mrežne
niti plaćene pozive modela osim ako je proslijeđen `--execute-real` i
konfigurirani su `--model`, `OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez
takvog eksplicitnog stvarnog pokretanja, njegov mašinski čitljiv zaključak
ostaje `HOLD`; sama sintetička mjerenja korisnog tereta/broja poziva nisu dokaz
za promociju.

Pozivaoci mogu priložiti opcionalni niz `transcript.cues` podržanom videodijelu
kada već posjeduju poravnati tekst. Svaki vremenski isječak mora sadržavati
`text`, konačan interval `start`/`end` unutar ispitane dužine trajanja i
dozvoljeni `source` (`client`, `embedded` ili `audio-bridge`); zadana vrijednost
za `confidence` je `1` i mora ostati između `0` i `1`. Potpuno identični
vremenski isječci objedinjuju se. OmniRoute nikada ne pokreće transkripciju iz
ovih metapodataka: validirani isječci kopiraju se u opisani rezultat zajedno s
izvorom, pouzdanošću i intervalom te se prikazuju kao nepouzdana zapažanja uz
opise kadrova. Neispravan tekst, tekst izvan raspona ili tekst bez porijekla
odbacuje se umjesto da se miješa u tok opisa. Oba kanala transkripta u tijelu
zahtjeva normaliziraju navedeno porijeklo na `client`, uključujući samostalno
navedene oznake `embedded` ili `audio-bridge`. Samo adapter pod kontrolom
servera može dodijeliti te pouzdane oznake putem argumenta `trustedSource`
dostupnog isključivo iz koda; JSON polje zahtjeva ne može dosegnuti taj
argument. Tekst transkripta ostaje nepouzdan sadržaj izveden iz medija, bez
obzira na njegovo porijeklo, i nikada ne smije određivati autorizaciju.

Napredni pozivalac može dostaviti zapis `audioTranscript` za isti video;
on se tretira kao tekst koji je dostavio klijent, a ne kao dokaz serverske transkripcije.
Spoj za objedinjavanje pokreće vizuelna i zvučna zapažanja unutar
jednog roka i signala za prekid, raspoređuje ih na zajedničkoj vremenskoj liniji, sažima
potpuno jednake duplikate i prijavljuje djelimičan rezultat kada uspije samo jedna strana.
Nevažeći `audioTranscript` degradira se na taj djelimičan rezultat — vizuelni
opis se zadržava, a zvučna grana bilježi sanitizirani kôd greške —
umjesto da uzrokuje neuspjeh cijelog videa. Dostupnost po grani, oznaka djelimičnog
rezultata i sanitizirani kodovi grešaka čuvaju se u opisanom rezultatu, u
metapodacima zaštitnih ograda (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), u metapodacima keša rezultata i u brojačima
objedinjavanja mosta. Zadana putanja Video Bridge ne poziva pretvaranje govora u tekst
niti preuzima drugu kopiju medija; bez tog izričitog zapisa ostaje
ograničena samo na video.

**Zadržavanje transkripta (#12150 P1).** Ovo se automatski primjenjuje kad god
Video Bridge (koji je i sam opcionalan) prikaže stavku transkripta — ne postoji zasebna
oznaka za zadržavanje. Kada zahtjev prikaže bilo koju stavku transkripta (pozivaočev
deklarirani `transcript` ili objedinjeni `audioTranscript`), zaštitna ograda ga označava kao
`videoBridgeObserved` i proizvodi redigiranu kopiju opisa videa —
identičan prikaz u kojem je tijelo slobodnog teksta svake stavke zamijenjeno sa
`[redacted-video-transcript]`, napravljen zamjenom strukturiranog polja stavke
prije sastavljanja niza znakova (nikada parsiranjem poravnatog teksta, tako da nikakav sadržaj
stavke — zlonamjeran ili uobičajen, uključujući tijela koja sadrže `]`, kao što su
`[inaudible]`/`[music]` — ne može opstati). Tijelo zahtjeva u trajno pohranjenom dnevniku poziva zamjenjuje
svaki tekstualni dio izveden iz videa tom redigiranom kopijom, uparenom prema jednakosti
sadržaja; sidro `fullText` ponovo se čita iz dovršenog sadržaja zaštitne ograde prije poziva,
tako da uparivanje i dalje uspijeva nakon što naknadne lančane zaštitne ograde (maskeri PII podataka i
vjerodajnica, prioriteti 10/95) prepišu tekst opisa na licu mjesta i
nakon što umetanje sistemskog upita, primopredaje i Memorije preoblikuje niz poruka. Tijelo
poslano uzvodno modelu ostaje nepromijenjeno. Zabilježeni zahtjev također ne popunjava
trajnu Memoriju (preskače se izdvajanje izvedeno i iz zahtjeva i iz odgovora),
tako da vlastiti odgovor modela ne može ponoviti tekst transkripta u Memoriju.

**Neobrađena polja videa (#12430).** Kada je most omogućen, a izvorna podrška za video nepoznata ili ne postoji, definirana polja `transcript`/`audioTranscript` također aktiviraju `videoBridgeObserved`, čak i nakon neuspjeha opisa ili ograničenja `maxVideos`. `null` i prazni nizovi znakova se računaju; odsutna polja i metapodaci koji nisu video ne računaju se. Zadržane kopije redigiraju ta polja ili izostavljaju zahtjev, a keševi/Memory se zaobilaze.

Na tim rezervnim putanjama važeće stavke pozivaoca postaju podržani dijelovi `text`/`input_text`
umjesto nestandardnih polja pružaoca usluge. Oba zapisa dostavljena u zahtjevu
ostaju nepouzdana `client` zapažanja, uz izričito upozorenje da video
nije opisan i da vremenske oznake nisu provjerene u odnosu na medij. Postojeća
ograničenja od 256 stavki/ukupno 64 KiB i ograničenja po stavci primjenjuju se zajedno na oba zapisa;
vremenske oznake moraju stati unutar ograničenja posrednika od 600 sekundi i svakog dostavljenog fokusnog
prozora. Nevažeći zapisi se odbacuju, a ne prosljeđuju kao proizvoljan tekst; važeći
parnjak i dalje se može koristiti osim ako se premaši njihov zajednički budžet. Null/prazna
polja ne dodaju tekst. Ova rezervna putanja ne dodaje dohvaćanje medija ni transkripciju.
Proširena polja transkripta uklanjaju se iz rezervnog nosača videa i njegovih
objekata `video_url`/`source`. OpenAI lista dozvoljenih vrijednosti na prijenosnom nivou ostaje stroga; nosači videa
s nepoznatom izvornom podrškom ostaju dostupni, a poznata odredišta samo za tekst zadržavaju sigurne oznake.
Strukturirane redigirane kopije štite dodani tekst transkripta, dok
izvorni zahtjev u vlasništvu pozivaoca ostaje nepromijenjen. Odredišta s izvornom podrškom i
onemogućeni mostovi zadržavaju postojeće ponašanje zaobilaženja.

Dodatne zadržane kopije koriste isti signal zabilježenog zahtjeva. Neobrađeni
snimak klijentskog zahtjeva prije zaštitne ograde, zahtjev na čekanju u memoriji i dnevnik
rano odbijenog zahtjeva strukturno zamjenjuju polja transkripta u dijelovima videa;
tekstualni upiti koje sintetiziraju faze cjevovoda i primopredaja konteksta redigiraju se
na odredištu tijela trajno pohranjenog zahtjeva. Trajno pohranjena oznaka `video_content_removed`
uzrokuje da nastavak pomoću `previous_response_id` bude sigurno odbijen umjesto da rekonstruira
tekst koji je namjerno odbačen. Ako zabilježeni zahtjev izgubi svoju
redigiranu kopiju po dijelu prije bilježenja ili ako makar jedna od više kopija videa
ne uspije pronaći podudaranje nakon naknadnih izmjena zahtjeva, zadržano tijelo zahtjeva
u potpunosti se izostavlja umjesto zadržavanja djelimično redigiranog transkripta.

Za zabilježeni zahtjev odgovor modela može citirati bilo koji dio
transkripta bez strukturirane granice stavke. Njegov trajno pohranjeni `responseBody` dnevnika poziva
stoga se zamjenjuje oznakom izostavljanja; detaljni
artefakt cjevovoda (koji može sadržavati uzvodna/klijentska tijela i dijelove toka)
ne zadržava se. Semantički keš, keš idempotentnosti i keš ponovnog izvođenja zaključivanja zaobilaze
čitanja i pisanja za taj zahtjev. Zahtjev pružaocu usluge i odgovor
vidljiv klijentu ostaju nepromijenjeni. Rani keepalive bajtovi prazne se iz privremenog
međuspremnika kada se detaljni artefakt izostavi. Kirovo upozorenje o neispravnom EventStreamu
prijavljuje samo broj bajtova sadržaja, nikada njegov sadržaj niti neobrađenu grešku JSON
parsera.
Ovim se ne tvrdi da je provjerena svaka nepovezana dijagnostika pružaoca usluge/dodatka;
šira provjera odredišta za zadržavanje prati se u #11658.

Interni životni ciklus `/api/modality-bridge/video/drilldown` predstavlja zasebnu,
loopback/token-autentificiranu podlogu keša. Svaka operacija također zahtijeva
kanonski neprozirni ID principala. Prije nego što se omogući produkcijski pozivalac,
on mora izvesti taj ID iz autentificiranog zakupca i nikada ne smije proslijediti
vrijednost koju je odabrao klijent. Ključevi keša vežu tog principala za kanonske
ID-ove sesije i videoreference, pohranjuju samo njihove ključeve izvedene pomoću
SHA-256 te ograničavaju i čitanja i brisanje na istog principala. Keš pohranjuje
najviše 16 izvedenih JPEG kadrova po unosu, uklanja ih nakon deset minuta i podržava
ograničena `start`/`end` čitanja ili eksplicitno brisanje sesije.

Svaki principal ograničen je na 16 unosa i 64 MiB kanonskih JPEG podataka. Ta
ograničenja nezavisna su od globalnog maksimuma od 64 unosa/256 MiB: pritisak kvote
principala izbacuje samo njegove najmanje nedavno korištene unose prije nego što se
razmotri globalno LRU izbacivanje. Istekli unosi uklanjaju se i iz obračuna principala
i iz globalnog obračuna tokom aktivnosti keša, dok otkazivanje i neuspjeh validacije
ne potvrđuju djelimičnu zamjenu.

Keš odbacuje nekanonski Base64, suvišno popunjavanje, sadržaj koji nije JPEG,
neispravne ili skraćene JPEG-ove i JPEG-ove koji izazovu upozorenje tokom ograničenog
`sharp` dekodiranja cijele slike. Svaku prihvaćenu sliku ponovo kodira kao kanonski
JPEG, izvodi širinu i visinu iz dekodiranih bajtova umjesto da vjeruje poljima
pozivaoca te odbacuje sve završne poliglotske bajtove umjesto da ih zadrži. Samo se
ograničeni kanonski komprimirani bafer uračunava u obje kvote. Ograničenje JSON
prijenosa uključuje Base64 dodatak za maksimum dekodiranog ulaza od 32 MiB. Svako
pohranjeno izvođenje bilježi svoj validirani JPEG format/rezoluciju, politiku
uzorkovanja, verziju izvođenja, vrijeme kreiranja, heš sadržaja koji je izračunao
server te heširanu nadređenu referencu zajedno s hešom nadređenog sadržaja pouzdanog
pozivaoca. Otkazivanje se provjerava između asinhronih faza dekodiranja/heširanja
prije atomske potvrde u keš.

Ova etapa još ne povezuje produkcijskog proizvođača s rutom i ne pruža odabir
varijante u više rezolucija. Transparentna putanja zahtjeva Video Bridgea stoga ne
uvodi dodatni rad, dok izvođenje principala vezanog za zakupca i puni FU-08 životni
ciklus za više rezolucija ostaju eksplicitni naknadni zadaci umjesto da budu
dokumentirani kao dovršeno ponašanje.

Kadrovi se redom opisuju pomoću konfiguriranog Video modela. Prazna Video zamjena
nasljeđuje postavku Vision; ako su obje prazne, Vision automatski usmjerivač odabire
efektivni model koji podržava vid. Uspješni opisi zamjenjuju izvorni dio stabilnim
prefiksom `[Video description:` koji također označava tekst kao nepouzdano
opažanje izvedeno iz medija i govori nizvodnim modelima da ne slijede upute pronađene
u mediju. Ključevi keša opisa kadrova uključuju JPEG bajtove, prompt, vremensku oznaku
i efektivni model; keširaju se samo uspješni opisi. Unosi keša zadržavaju stvarni
uspješni model proizvođača, uključujući rezervni model; bridge prijavljuje `mixed`
kada su različite kadrove proizveli različiti modeli. Pogodak u kešu ponovo koristi
taj identitet proizvođača umjesto da ga preimenuje prema traženom planu usmjeravanja.
Keš rezultata cijelog videa koristi ključ zasnovan na svakom ulazu koji mijenja
izlaz — promptu, efektivnom modelu, politici uzorkovanja, broju kadrova, režimu
semantičke analize, SHA-256 otisku normaliziranog nagovještaja fokusa, prozoru
fokusa, `transcript`, `audioTranscript` i zastavici lista kontakata — pa je promjena
bilo koje od tih dimenzija promašaj keša, a nikada ponovna upotreba zastarjelog
rezultata. Verzija politike vizuelne deduplikacije, prag i ograničeni broj kadrova
kandidata također su eksplicitni u ključu i metapodacima keša rezultata; promjena
politike stoga ne može ponovo upotrijebiti zastarjeli opis cijelog videa. Metapodaci
keša rezultata v4 zadržavaju režim i otisak, ali nikada sirovi korisnički zadatak.
Metapodaci zaštitnih mehanizama prijavljuju i traženi i efektivni režim analize;
traženi režim `focused` bez upotrebljivog korisničkog teksta prijavljuje se kao
efektivno `full`.

Zaštitni mehanizam izdvaja svaki podržani videodio, ali opisuje najviše
`modalityBridgeVideoMaxVideos`. Za cilj za koji je dokazano da ima
`supportsVideo === false`, neuspjeli videozapisi i videozapisi iznad ograničenja
postaju eksplicitni sigurni tekstualni markeri tako da nijedan sirovi video ne
preživi. Kada je sposobnost nepoznata, ti dijelovi zadržavaju svoj videonosač; svaki
rezervni transkript slijedi prethodno opisanu ograničenu pretvorbu teksta. Ciljevi s
`supportsVideo === true` zaobilaze bridge. Signal prekida klijentskog zahtjeva
propagira se kroz preuzimanje, red brokera, podprocese i pozive za opisivanje;
prekidi zaustavljaju obradu između videozapisa i nikada ne prelaze u otvoreni režim
sa sirovim medijem.

Postavke vremena izvođenja pohranjene su u bazi podataka i validirane pomoću Zod-a:

| Ključ                               | Zadana vrijednost | Raspon / ponašanje                                                                                       |
| ----------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`           | Opcionalno vrijeme izvođenja, uz izričito uključivanje                                                   |
| `modalityBridgeVideoAnalysisMode`   | `"full"`          | `full` zadržava generičke opise; `focused` koristi ograničeni, nepouzdani kontekst posljednjeg korisnika |
| `modalityBridgeVideoModel`          | `""`              | Nasljeđuje model Vision Bridgea                                                                          |
| `modalityBridgeVideoFrameCount`     | `8`               | 1–16                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`       | `uniform`, `scene_aware` ili proporcionalni `segment_aware`; kvar detektora vraća se na `uniform`        |
| `modalityBridgeVideoMaxVideos`      | `1`               | 1–4                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`          | 1000–120000 ms                                                                                           |

Ranije sačuvane vrijednosti isteka vremena za Video iznad 120 sekundi ograničavaju se na
rok brokera; nova zapisivanja postavki iznad tog ograničenja se odbijaju.
`GET /api/modality-bridge/video/runtime` zahtijeva pouzdanu, označenu loopback
lokalnost prije autentifikacije ili provjere vremena izvođenja, a zatim zahtijeva
upravljačku autentifikaciju. Vraća samo `available`, sanitizirane verzije FFmpeg/ffprobea i fiksni
razlog kada vrijeme izvođenja nije dostupno. Interna krajnja tačka za izdvajanje nije
javni API za otpremanje: zasićenje reda vraća `503` uz `Retry-After`, prekid veze
pozivaoca vraća `499`, a fiksni rok brokera vraća `504`. Konvertovani odgovori dodaju
`video->text;model=<visionModel>;parts=<videos>` u centralno
`x-omniroute-modality-bridge` zaglavlje bez uklanjanja Vision ili Audio segmenata.

### Masker ličnih podataka (`piiMasker.ts`)

Izvršava se u **obje** faze.

- **`preCall`** klonira korisni sadržaj, prolazi kroz `system`, `messages`, `input` i
  `prompt` (uključujući obične tekstualne stavke) te primjenjuje `processPII()` (iz
  `@/shared/utils/inputSanitizer`) na tekstualna polja `content`/`text`. Kada je
  `PII_REDACTION_ENABLED=true`, otkriveni lični podaci se rediguju u odlaznom
  korisnom sadržaju. Ovo je nezavisno od `INPUT_SANITIZER_MODE` (koji kontroliše samo
  politiku prompt injectiona). Kada je redigovanje isključeno, poziv bilježi broj
  detekcija bez izmjene sadržaja.
- **`postCall`** dubinski klonira odgovor, pokreće `sanitizePIIResponse()` zajedno s
  maskerom za oblik Responses API-ja (`maskResponsesOutput` — obuhvata
  `output_text` i `output[].content[].text`). Ako dođe do bilo kakvog redigovanja,
  izmijenjeni odgovor zamjenjuje originalni.

Zaštitna mjera nikada ne blokira; ona samo dodaje napomene (`meta.detections`,
`meta.redacted`) ili prepisuje sadržaj.

### Prompt injection (`promptInjection.ts`)

Otkriva napadačke strukture u sadržaju koji dostavlja korisnik i primjenjuje
konfigurisanu politiku. Ponašanje određuju varijable okruženja i opcije
konstruktora:

| Postavka        | Varijabla okruženja                                                                                   | Zadana vrijednost | Efekat                                                                                                                                                                                                                |
| --------------- | ----------------------------------------------------------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogućeno       | `INPUT_SANITIZER_ENABLED`                                                                             | `true`            | Kada je `false`, zaštitna mjera odmah prekida obradu.                                                                                                                                                                 |
| Način rada      | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`            | Politika injectiona: `block`, `warn` ili `log`. (`redact` je prihvaćen radi kompatibilnosti unazad, ali **ne** uklanja tekst injectiona; prepisivanje ličnih podataka u zahtjevu kontroliše `PII_REDACTION_ENABLED`.) |
| Prag blokiranja | opcija `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`            | Minimalna ozbiljnost potrebna za blokiranje. Uz zadanu vrijednost, srednja ozbiljnost služi samo za posmatranje.                                                                                                      |

**Redoslijed prioriteta načina rada** (`getMode`): `options.mode` pozivaoca →
**DB premošćavanje zastavice funkcionalnosti** `INJECTION_GUARD_MODE` (Kontrolna ploča → Postavke →
Zastavice funkcionalnosti) → varijabla okruženja `INJECTION_GUARD_MODE` → varijabla okruženja `INPUT_SANITIZER_MODE` →
`warn`. Premošćavanje putem kontrolne ploče stoga ima prednost nad varijablama okruženja, tako da korisnički
interfejs Zastavice funkcionalnosti upravlja aktivnom zaštitom uživo (bez ponovnog pokretanja). Čitanje iz baze podataka je otporno na greške:
ako dođe do greške, zaštita se vraća na ponašanje zasnovano na varijablama okruženja, a kada
premošćavanje nije postavljeno, ponašanje je identično razrješavanju samo putem varijabli okruženja.

Izvori detekcije:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (zajednički skup detektora
   koji se koristi i na drugim mjestima u procesnom toku).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` i
   `markdown_system_block`, oba ozbiljnosti `high`).
3. Opcionalni `customPatterns` proslijeđeni putem opcija konstruktora (tekstualni nizovi, regularni izrazi
   ili zapisi `{ name, pattern, severity }`).

Kada je `mode === "block"` **i** najmanje jedna detekcija zadovoljava prag ozbiljnosti, `preCall` vraća `{ block: true, message: "Request rejected:
suspicious content detected" }`. U režimima `warn`/`log` zaštitna kontrola bilježi događaj, ali
dozvoljava poziv. Dijeljena pomoćna funkcija `evaluatePromptInjection()` također se izvozi
za pozivaoce koji trebaju procijeniti upite bez korištenja registra.

**Ograničenje skeniranja (v3.8.20):** detektor pregledava samo **prvih 16 KB**
spojenog teksta upita — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajta) u
`src/shared/utils/inputSanitizer.ts`. I `detectInjection()` i
`evaluatePromptInjection()` primjenjuju `slice(0, MAX_INJECTION_SCAN_BYTES)` prije pokretanja
petlje obrazaca. Direktive za ubacivanje obično se nalaze blizu početka ulaza, pa se time
ograničava potrošnja CPU-a/GC-a za regularne izraze na sadržajima veličine više stotina KB bez slabljenja detekcije (usp.
#3932, #4041).

### Maskiranje vjerodajnica (`credentialMasker.ts`)

Pokreće se u **obje** faze, kao posljednje u zadanom lancu (prioritet `95`). Redigira
dobro poznate obrasce API ključeva / tajnih tokena iz odlaznog sadržaja (sadržaj
poruke, argumenti poziva alata, rezultati alata) **i** odgovora pružaoca usluge, tako da
vjerodajnica zalijepljena u upit (ili vraćena u rezultatu alata) ne bude otkrivena
uzvodnom pružaocu usluge niti nazad klijentu.

- **Samo uz izričito uključivanje**, prema istoj konvenciji kao redigiranje ličnih podataka (susjedno Strogom pravilu #20):
  onemogućeno je osim ako je `settings.credentialRedactionEnabled === true` **ili**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kada je isključeno, zaštitna kontrola ne radi ništa —
  nikada ne blokira niti prepisuje.
- `redactCredentials()` prolazi kroz cijelo stablo sadržaja/odgovora (`walkValue()`,
  sigurno od zagađenja prototipa, sigurno od ciklusa putem `WeakSet`) i zamjenjuje podudaranja
  rezerviranim mjestom `[REDACTED:<type>]`, klonirajući samo grane koje su se zaista
  promijenile.
- `CREDENTIAL_PATTERNS` obuhvata ključeve pružalaca LLM usluga (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokene (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ključeve za plaćanje (Stripe, Square), ključeve
  usluga u oblaku (AWS pristupni ključ, Twilio, SendGrid, Mailgun), privatne ključeve / JWT-ove,
  nizove za povezivanje koji sadrže vjerodajnice (`mongodb://user:pass@...`, itd.) i
  generički obrazac vrijednosti zaglavlja `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ključevi u obliku zaglavlja (`authorization`, `x-api-key`, `api-key`,
  `apikey`) redigiraju se strukturno (samo vrijednost, dok se prefiks sheme poput
  `Bearer `/`Basic ` zadržava), a ne putem generičkog tekstualnog regularnog izraza.
- Zaštitna kontrola nikada ne blokira; samo prepisuje (`modifiedPayload` /
  `modifiedResponse`) i dodaje napomene (`meta.credentialsRedacted`, `meta.count`).

Regresijska zaštita: `tests/unit/credential-masker-guardrail.test.ts`.

## Osnovni ugovor (`base.ts`)

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
  block?: boolean; // true prekida lanac
  message?: string; // prikazuje se prilikom blokiranja
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vraća ga preCall radi izmjene zahtjeva
  modifiedResponse?: TValue; // vraća ga postCall radi izmjene odgovora
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

Zaštitna ograda signalizira „bez promjene“ vraćanjem vrijednosti `void`, `{}` ili
`{ block: false }`. Vraćanje vrijednosti `modifiedPayload`/`modifiedResponse` zamjenjuje
vrijednost koja prolazi kroz lanac za naredne zaštitne ograde.
`signal?: AbortSignal` prenosi životni ciklus pozivaoca u zaštitne ograde. Prekid zahtjeva predstavlja namjerni izuzetak otvorenog propuštanja: medijski mostovi zaustavljaju obradu i obavljaju čišćenje bez vraćanja neobrađenog medijskog sadržaja cilju za koji je poznato da ga ne podržava.

## Registar (`registry.ts`)

Singleton `guardrailRegistry` izlaže:

- `register(guardrail)` — dodaje (ili zamjenjuje normaliziranim imenom) zaštitnu ogradu i
  ponovno sortira po rastućem `priority`.
- `clear()` / `list()` — administrativni pomoćnici.
- `runPreCallHooks(payload, context)` — iterira kroz aktivne zaštitne ograde, provlači
  `payload` kroz `modifiedPayload` i zaustavlja se na prvom `block: true`.
- `runPostCallHooks(response, context)` — isti tok na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — briše stanje i opcionalno
  ponovno registrira zadane vrijednosti za čistu izolaciju testova.

Oba pokretača vraćaju `{ blocked, payload|response, results, guardrail?, message? }`
gdje je `results` niz zapisa `GuardrailExecutionResult` koji uključuju
polja `blocked`, `skipped`, `modified`, `error` i `meta` po zaštitnoj ogradi,
korisna za praćenje.

### Onemogućavanje zaštitnih ograda po zahtjevu

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agregira
dedupliciranu listu imena zaštitnih ograda koje treba preskočiti za trenutni
zahtjev. Izvori (svi opcionalni, svi spojeni):

- `apiKeyInfo.disabledGuardrails`
- Tijelo zahtjeva `disabledGuardrails` (na najvišem nivou)
- Tijelo zahtjeva `metadata.disabledGuardrails`
- Zaglavlje `x-omniroute-disabled-guardrails` (ili zastarjelo
  `x-disabled-guardrails`)

Vrijednosti mogu biti nizovi stringova ili string odvojen zarezima; imena su
normalizirana u mala slova kebab-case (`pii_masker` → `pii-masker`). Rezultat
se prosljeđuje kroz `context.disabledGuardrails` registru, koji preskače
odgovarajuće zaštitne ograde (`skipped: true` u `results`).

## Redoslijed izvršavanja

Za svaki zahtjev koji prolazi kroz `src/sse/handlers/chat.ts` i
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` gradi listu za preskakanje iz API ključa, tijela i zaglavlja.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` pokreće zaštitne ograde (guardrails) u rastućem redoslijedu prioriteta:
    - Onemogućene zaštitne ograde se bilježe kao `skipped`.
    - `preCall` svake zaštitne ograde može prepisati payload putem `modifiedPayload`.
    - Prvi `block: true` prekida lanac i rukovatelj vraća odgovor o odbijanju zaštitne ograde.
3.  (Potencijalno prepisan) payload ulazi u kombinovano rutiranje i uzvodno slanje.
4.  Nakon što je odgovor sastavljen, `guardrailRegistry.runPostCallHooks(...)` pokreće isti lanac na odgovoru. `block: true` ovdje odbacuje uzvodni odgovor.

Zaštitne ograde koje izbace grešku bilježe se sa `error: <message>` i loguju putem
`logger.warn`, ali lanac se nastavlja — dizajnirano da bude "fail-open".

## Konfiguracija

Varijable okruženja koje čitaju ugrađene zaštitne ograde:

| Varijabla                             | Koristi                 | Efekat                                                                                                                          |
| :------------------------------------ | :---------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Postavite `false` da potpuno onemogućite detekciju.                                                                             |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Politika injekcije: `warn`, `block`, ili `log`. Stara vrijednost `redact` ne prepisuje tekst injekcije.                         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Način rada za zaštitu od injekcije; također zastavica funkcije baze podataka koja **nadjačava** varijable okruženja (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Minimalna ozbiljnost koju `MODE=block` odbija: `high` (podrazumijevano), `medium`, ili `low`.                                   |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Stari alias za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Kada je `true`, PII zahtjeva se rediguje (nezavisno od načina injekcije).                                                       |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nizvodno) | Kontroliše ponašanje maskera na strani odgovora.                                                                                |

Zaštitne ograde Modality Bridge čitaju konfiguraciju vremena izvođenja iz skladišta postavki podržanog bazom podataka (`getSettings()`), a ne iz varijabli okruženja. Primarni ključevi za Vision su
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, i
`modalityBridgeCacheMaxEntries`. Stari
`visionBridge*` ključevi su prihvaćeni samo kao dokumentovani jednociklični rezervni mehanizam za čitanje; upisi na kontrolnoj tabli koriste primarne ključeve. Podrazumijevane vrijednosti i rezervni rješavač nalaze se u `src/shared/constants/modalityBridgeDefaults.ts`, sa starim konstantama zadržanim u `src/shared/constants/visionBridgeDefaults.ts`.

Audio koristi `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, i `modalityBridgeAudioMaxClips`, plus zajedničke
`modalityBridgeCache*` postavke. Audio nema rezervni mehanizam za stare ključeve jer su ovi ključevi uvedeni sa Modality Bridge shemom.

Video koristi `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, i
`modalityBridgeVideoTimeout`, plus zajedničke `modalityBridgeCache*` postavke.
Podrazumijevano je onemogućeno jer su FFmpeg/ffprobe opcionalne operativne zavisnosti, a titlovanje okvira dodaje kašnjenje i troškove modela.

## Prilagođeni Guardrails

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

Koraci:

1.  Kreirajte `src/lib/guardrails/myGuardrail.ts` koji proširuje `BaseGuardrail`.
2.  Implementirajte `preCall` i/ili `postCall`.
3.  Registrujte prilikom uvoza (push iz `registerDefaultGuardrails`) ili
    pozovite `guardrailRegistry.register(...)` tokom izvršavanja — registar zamjenjuje
    bilo koji prethodni guardrail sa istim normalizovanim imenom.
4.  Dodajte testove pod `tests/unit/` (postojeći primjeri:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Koristite `resetGuardrailsForTests()` između testova da biste počeli iz poznatog stanja.
Proslijedite `{ registerDefaults: false }` da biste počeli sa praznim registrom i
registrovali samo guardraile koji se testiraju. Vision Bridge prihvata ubrizgavanje zavisnosti
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge izlaže ekvivalentne šavove za postavke,
mogućnosti, odabir STT modela, provjere akreditiva i transkripciju. Testovi stoga mogu
izvršavati oba toka bez pristupa bazi podataka ili mreži.

## Pogledajte takođe

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — dijeljeni detektor koji pokreće
  prompt-injection i PII maskiranje
- `src/shared/constants/visionBridgeDefaults.ts` — podrazumijevane postavke Vision Bridge-a i
  lista modela sa prisilnim premošćavanjem
- `src/shared/constants/modalityBridgeDefaults.ts` — dijeljene podrazumijevane postavke Vision/Audio runtime-a
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalni sloj (prekidač strujnog kruga, hlađenja)
- `docs/reference/ENVIRONMENT.md` — potpuna referenca varijabli okruženja

## Pokrivenost rute za zaštitu od ubrizgavanja i crveni tim (Faza 8 · Blok D)

Zaštita od ubrizgavanja (`createInjectionGuard` / `withInjectionGuard`) pokriva sve rute
koje prihvataju korisničke upite. Poštuje `INJECTION_GUARD_MODE` (podrazumijevano `warn` = samo bilježenje;
`block` = vraća HTTP 400 `SECURITY_001`).

| Tip               | Rute                                                                                                                                                 | Podrazumijevani način rada |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| Tekst (postojeći) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                       |
| Generativni       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                       |
| Podaci            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                       |

Ekstrakcija teksta (`extractMessageContents`) pokriva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Crveni tim (noćno, `nightly-llm-security.yml`):** promptfoo provjerava da svaka ruta blokira
OWASP-LLM korpus u `INJECTION_GUARD_MODE=block`; garak pokreće sonde (preskače bez tajne).
`moderations` je uključen radi dosljednosti — operatori u blok-modu ga mogu izuzeti putem
`resolveDisabledGuardrails`.

Noćni radni tok (`.github/workflows/nightly-llm-security.yml`, cron + ručno
pokretanje) ima dva posla:

- **`promptfoo-guard` (blokiranje)** — pokreće `promptfoo eval -c promptfooconfig.yaml`
  sa `INJECTION_GUARD_MODE=block`. Svaki adversarijalni slučaj (npr. "zanemari sve
  prethodne instrukcije...", DAN-stil jailbreakovi) potvrđuje da odgovor nosi
  `error.code === "SECURITY_001"`, tj. da je zaštita zaista odbila zahtjev.
- **`garak` (savjetodavno)** — pokreće garak `--probes promptinject,dan,leakreplay`
  protiv lokalne OmniRoute instance (`http://localhost:20128/v1`). Ograničeno tajnom
  dobavljača (`PROMPTFOO_PROVIDER_KEY`); graciozno preskače i ima sufiks
  `|| true`, tako da izvještava bez pada CI-ja.

Pokrivenost pomoćnika za zaštitu (`createInjectionGuard` / `withInjectionGuard`)
obuhvata svaku `/v1` rutu koja nosi upit; tekst upita se izvlači iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomoću
`extractMessageContents()` u `src/shared/utils/inputSanitizer.ts`.
