# Guardrails (Hrvatski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Izvor istine:** `src/lib/guardrails/`
> **Zadnje ažurirano:** 2026-08-29 — v3.8.51 (Podrijetlo transkripta Video Bridgea deklarira pozivatelj,
> još nije potvrđeno od strane poslužitelja — pojašnjeno prema #11661)

Guardrails (zaštitne ograde) provode sigurnost, pravila i transformacije sadržaja na granici
između OmniRoute-a i uzvodnih (upstream) pružatelja usluga. Svaki guardrail može pregledati (i
opcionalno odbiti, transformirati ili anotirati) terete zahtjeva (`preCall`) i
uzvodne odgovore (`postCall`).

Sustav je **fail-open**: ako guardrail izbaci pogrešku tijekom izvršavanja, registar
bilježi pogrešku i nastavlja sa sljedećim guardrailom umjesto prekidanja
zahtjeva. Blokiranje je eksplicitna odluka (`block: true`), nikada slučajnost.

## Ugrađeni zaštitni mehanizmi

Registar pri uvozu automatski učitava šest zaštitnih mehanizama prema redoslijedu prioriteta
(pogledajte `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Naziv               | Faza/e         | Datoteka              |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niži brojevi prioriteta izvršavaju se **prvi**.

### Most za slike (`visionBridge.ts`) — Most modaliteta PR-1

Presreće zahtjeve koji sadrže slike i usmjereni su prema **modelima bez podrške za slike** te
preusmjerava cijeli zahtjev na model koji podržava slike ili zamjenjuje slikovne
dijelove tekstnim opisima koje prije poziva nadređenog sustava generira podesivi
model za slike. Time pružatelji koji podržavaju samo tekst mogu transparentno obrađivati
multimodalne sadržaje.

Tijek:

1. Preskoči ako ciljni model već podržava slike (osim ako se nalazi na
   popisu modela za prisilnu upotrebu mosta `isVisionBridgeForcedModel`).
2. Izdvoji slikovne dijelove putem `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), koji delegira **objedinjenom detektoru
   medija** `detectMediaParts()` u `open-sse/utils/mediaParts.ts` — jedinstvenom
   izvoru istine koji se dijeli s filtrom kompatibilnosti kombinacija.
   Izdvajanje je ograničeno popisom dopuštenih dijelova najviše razine u oblicima
   koje `replaceImageParts` može umetnuti natrag (ugovor izdvajanje↔zamjena): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` i Responses API `input_image`. Ugniježđena podudaranja i
   oblici koji služe samo kao indikatori namijenjeni su filtru kombinacija i nikada se ne izdvajaju.
   Preskoči ako ništa nije pronađeno.
3. Odredi konfiguraciju tijekom izvođenja putem `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi ključevi postavki `modalityBridge*`
   imaju prednost; zastarjeli ključevi `visionBridge*` ostaju kao **rezervna opcija tijekom
   jednog ciklusa** (razdoblje za povratak na prethodnu verziju). Preskoči prije bilo kakvog obilaska medija kada je
   most onemogućen.
4. Odabir načina rada (`modalityBridgeVisionMode`, pogledajte tablicu u nastavku) određuje
   preusmjeravanje ili opisivanje. Preusmjeravanje vraća `modifiedPayload` u kojem je zamijenjen
   samo `model`, uz metapodatke `{ rerouted, fromModel, toModel, imagesKept }`.
5. Putanja opisivanja: ograničava broj slika na `maxImages`, sastavlja upit prilagođen zadatku,
   provjerava predmemoriju opisa, poziva model za slike **paralelno**
   (`Promise.allSettled`) i na njihovo mjesto umeće tekstne dijelove
   `[Slika N]: <opis>`. Neuspjelo opisivanje daje `null`, a izvorni slikovni dio ostaje
   **sačuvan** (#4012) — osim na putanji opisivanja kombinacije kada nijedno
   opisivanje nije uspjelo, gdje potvrđeni nadređeni sustav bez podrške za slike dobiva zamjenski tekst
   `(nedostupno — nije povezan nijedan pružatelj s podrškom za slike)` (#8430).
6. Vrati `modifiedPayload` + metapodatke (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Odabir načina rada (`modalityBridgeVisionMode`)

| Način rada | Zadano | Ponašanje                                                                                                                                                                                                                                                                                                                                            |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Zastarjela heuristika, neizmijenjena (#6640/#7204): modeli koji nisu kombinirani/`auto/` preusmjeravaju se na najbolji model za slike, osim ako izvorni model već ima upotrebljive vjerodajnice (tada se slika opisuje); kombinirani ciljevi uvijek se opisuju.                                                                                      |
| `describe` |        | Uvijek opisuj — blok za preusmjeravanje u potpunosti se preskače; model koji je korisnik odabrao uvijek daje odgovor.                                                                                                                                                                                                                                |
| `reroute`  |        | Prisilno preusmjeravanje: zaobilazi se zaštita koja zadržava model s vjerodajnicama. Zaštita vjerodajnica za **cilj** preusmjeravanja i dalje se primjenjuje — kada ne postoji upotrebljiv ciljni model za slike, zahtjev prelazi na opisivanje kako neobrađene slike nikada ne bi dospjele do pozadinskog sustava koji podržava samo tekst (#8430). |

Prisilni načini rada prekidaju obradu **prije** pokretanja automatske heuristike; ponašanje načina `auto`
identično je, na razini bajtova, zaštitnom mehanizmu prije PR-1.

#### Opseg API ključa (`visionBridgeKeyScope.ts`)

Kada API ključ pozivatelja ograničava `allowedConnections`, skupove kvota
(`allowedQuotas`) ili modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most odabire samo
modele za preusmjeravanje i opisivanje koje ključ smije upotrebljavati, na vezama koje ključ smije
upotrebljavati. Poziv za opisivanje zatim uvijek prolazi kroz OmniRoute samopetlju sa
zaglavljem `x-omniroute-self-loop-key-id`, tako da primajući zahtjev za razgovor
ponovno provodi pravila tog ključa za veze i modele. `enforceApiKeyPolicy()`
uvažava to zaglavlje samo zajedno sa samopetljom nositelja, stoga ono može samo
suziti pristup, a identifikator koji se ne može razriješiti biva odbijen.

Ako ključu nije dopušten nijedan model za slike, putanja opisivanja povlači se i
zahtjev prolazi neizmijenjen, što je jednako ponašanju nastavka rada u slučaju pogreške kao kod onemogućenog
zaštitnog mehanizma (metapodaci `{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahtjevi bez ključa i ključevi bez tih ograničenja ponašaju se potpuno jednako kao
prije.

#### Upit za opisivanje prilagođen zadatku (`modalityBridgeVisionTaskAware`)

Zadano **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) osnovnom upitu
za opis dodaje tekst **posljednje korisničke poruke** (skraćen na 500 znakova),
usmjeravajući opis prema onome što je korisnik doista zatražio
(obrazac codex-vision-proxy) i tražeći od modela za vid da prepiše vidljivi
tekst. Kada je zastavica isključena — ili nema korisničkog teksta — osnovni se
upit upotrebljava nepromijenjen.

Vlastiti OpenAI-kompatibilni zahtjev samopetlje za opis (`callVisionModelSingle()`
u `visionBridgeHelpers.ts`) uvijek zahtijeva `image_url.detail: "high"` —
bezuvjetno, za svakog pozivatelja/pružatelja, neovisno o bilo kakvom signalu
klijenta. Uzorkovanje s niskom razinom detalja smanjuje točnost OCR-a upravo za
zadatak prijepisa teksta koji ovaj upit zahtijeva, pa sam poziv za opis uvijek
traži visoku razinu detalja bez obzira na razinu detalja koju je koristio
izvorni dolazni zahtjev. To utječe samo na tijelo internog zahtjeva za opis; ne
mijenja način na koji OmniRoute prosljeđuje pozivateljev vlastiti
`image_url.detail` u primarnom zahtjevu — ta se zadana vrijednost primjenjuje
zasebno i samo za otkrivene OpenCode klijente, u `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Grana samopetlje za opis s
Anthropicovim žičanim formatom nema polje `detail` i na nju ne utječe nijedna
od tih zadanih vrijednosti.

#### Ograničenje izlaza opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Zadano | Raspon            |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ili 100–50000 |

`0` (zadano) znači **bez ograničenja** — opis koji vrati
`callVisionModel()` prosljeđuje se bez izmjena, čime se zadržava postojeće
ponašanje. Svaka vrijednost u rasponu 100–50000 skraćuje opis i dodaje mu
sufiks `…` prije nego što se umetne natrag kao `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` u `src/lib/guardrails/visionBridge.ts`).
Povećajte tu vrijednost za OCR zadatke s mnogo detalja, kod kojih modelu u
nastavku obrade treba potpuni prijepis; smanjite je kako biste ograničili
potrošnju tokena kod opširnih modela za vid. Polje na nadzornoj ploči nalazi se
u ploči Advanced na kartici Vision (`modality-bridge-max-chars` u
`ModalityBridgeVisionTab.tsx`) i svaku vrijednost između 1 i 99 podiže na
donju granicu od 100, dok izričitu vrijednost `0` ostavlja nepromijenjenom —
`0` je sama po sebi valjana Zod vrijednost
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a ne samo
zadana vrijednost za „nije postavljeno”.

#### Predmemorija opisa (`modalityBridge/bridgeCache.ts`)

Procesno dijeljena memorijska predmemorija LRU + TTL za izlaze opisa.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
uokvirivanjem prefiksom duljine (bez kolizija na granicama polja). Komponenta
modela jest **konfigurirani** model mosta, a ne model koji je stvarno odgovorio —
`callVisionModel` može interno prijeći na rezervni model, a određivanje ključa
za svaki pokušaj zasebno fragmentiralo bi predmemoriju. Neuspjeli opisi nikada
se ne spremaju u predmemoriju. Postavke:

| Ključ                           | Zadano | Raspon  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Normalizacija udaljenih slika (samopetlja za opis/dohvaćanje base64)

Kada most sam dohvaća **udaljenu** sliku — za Anthropicov samopoziv za opis i
pretvorbu u base64 za claude-wire-format (`ensureBase64ImagesForClaudeWire`),
oboje putem `fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — dobiveni
podatkovni URI prosljeđuje se kroz `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prije ugrađivanja u zahtjev modelu za vid.
Prevelike slike smanjuju se tako da **dulja stranica iznosi 2048 px** (što
odgovara ograničenju promjene veličine koje OpenAI/Anthropic već primjenjuju na
strani poslužitelja), čime se smanjuju broj bajtova za prijenos i latencija bez
promjene onoga što model za vid vidi. Za promjenu veličine koristi se `sharp`,
učitan dinamičkim uvozom: na platformi na kojoj se njegova nativna binarna
datoteka ne uspije učitati, `normalizeDataUri()` **nikada ne izbacuje iznimku** —
umjesto toga prosljeđuje izvorne bajtove bez izmjena, pa put opisa/pretvorbe u
base64 uvijek nastavlja raditi. Bajtovi koji nisu slika (dohvaćanje koje nije
vratilo sliku koju je moguće dekodirati) također se prosljeđuju bez izmjena.
Ta je normalizacija ograničena na slike koje most dohvaća za vlastiti samopoziv
— nikada se ne primjenjuje na pozivateljev neobrađeni sadržaj koji se izravno
prosljeđuje, u skladu s načelom izmjene samo uz izričit pristanak (Strogo
pravilo #20).

#### Shema postavki + migracija

Novi ključevi `modalityBridge*` provjeravaju se Zodom u
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trojka
`modalityBridgeCache*` i grupa `modalityBridgeAudio*` koju koristi Audio Bridge.
Migracija `141_modality_bridge_settings.sql` kopira postojeće naslijeđene
vrijednosti `visionBridge*` u odgovarajuće nove ključeve (idempotentno i nikada
ne prepisuje vrijednost `modalityBridge*` koju je postavio operator); naslijeđeni
ključevi ostaju prihvaćeni kao pričuvni izvor pri čitanju tijekom jednog ciklusa
izdanja.

#### Zaglavlje transparentnosti + statistika

Odgovori transformirani opisom sadrže
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(izrađuje ga `buildModalityBridgeHeader()` u `modalityBridge/bridgeStats.ts`, a
postavlja `withModalityBridgeHeader()` u `src/sse/handlers/chatHelpers.ts`).
Preusmjereni zahtjevi **ne dobivaju** zaglavlje — sadržaj nije izmijenjen, a
zamjena modela već je vidljiva u polju `model` tijela odgovora.

`GET /api/modality-bridge/stats` (autentikacija za upravljanje, ista razina kao
`GET /api/settings`) vraća brojače po modalitetu u memoriji
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` i
`video`. `averageLatencyMs` koristi `latencySamples`, a ne sve pokušaje, kao
nazivnik; operacija bez mjerenja vremena ne stvara lažni uzorak od nula milisekundi.
`bridged` ostaje unatrag kompatibilan alias za uspješne
pretvorbe; neuspješni pokušaji ne povećavaju njegovu vrijednost.
Brojači se namjerno poništavaju pri ponovnom pokretanju procesa
(telemetrija, a ne računovodstvo).

#### Konfiguracija nadzorne ploče

Namjenska stranica nadzorne ploče nalazi se na
`/dashboard/settings/modality-bridge`. Njezine kartice `Vision`, `Audio`
i `Video`, kojima se može pristupiti putem URL-a, zadržavaju parametre upita pri promjeni vrijednosti `tab`.
Kartica Vision omogućuje uključivanje, odabir načina rada i modela (uključujući automatski
odabir zadanog modela), upite prilagođene zadatku, napredna ograničenja isteka vremena/slike/duljine
opisa/predmemorije, brojače tijekom izvođenja i zaštićeni ogledni zahtjev. Kartica Audio također je aktivna: omogućuje
uključivanje, odabir isključivo STT modela uz opciju Auto, ograničenja isteka vremena/maksimalnog trajanja isječka, brojače
zvuka i ogledni test `input_audio`. Kartica Video funkcionalna je: prikazuje
stanje izvođenja FFmpeg/ffprobe — jedno od četiri izričita stanja korisničkog sučelja (`unknown` dok
je provjera u tijeku ili se nije mogla dovršiti, `restricted` na hostu nadzorne ploče koji nije povratna petlja,
gdje se provjera preskače na strani klijenta, `unavailable` nakon provedene provjere
i potvrde da nedostaje ili `available` s verzijama FFmpeg/ffprobe) — trajno sprema
ograničenja uključivanja/modela/kadrova/videozapisa/isteka vremena, filtrira alat za odabir modela samo na modele
koji podržavaju vizualni sadržaj i prikazuje brojače videozapisa.

Prijašnja kartica Vision Bridge u postavkama umjetne inteligencije sada je poveznica za kompatibilnost prema
novoj stranici; više ne sadrži drugu kopiju obrasca. Media Providers također
povezuje tijekove rada Image-to-Text i Speech-to-Text s odgovarajućim karticama Modality
Bridge bez uklanjanja postojećeg okruženja za isprobavanje značajke Speech-to-Text.

**Zaobilaženje provjere prihvata za samopetlju:** kada se poziv za opisivanje usmjerava kroz
vlastitu `/v1` samopetlju sustava OmniRoute (nestandardni model pružatelja), podzahtjev šalje
`x-omniroute-admission-bypass: internal` i autentificira se razrijeđenom
vjerodajnicom samopetlje — lokalnom kontrolnom vrijednošću `sk_omniroute` u lokalnom načinu rada ili
ključem iz varijable okruženja `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` koji je konfigurirao operator (#1350), kako bi
implementacije s `REQUIRE_API_KEY=true` i dalje mogle izvršiti poziv za opisivanje. Zaobilaženje
se uvažava samo za te točno određene vjerodajnice, pa vanjski klijenti ne mogu upotrijebiti
zaglavlje za preskakanje provjere prihvata.

Naslijeđene zadane vrijednosti nalaze se u `src/shared/constants/visionBridgeDefaults.ts`;
nove zadane vrijednosti za način rada/funkcionalnost prilagođenu zadatku/predmemoriju i razrješivač postavki nalaze se u
`src/shared/constants/modalityBridgeDefaults.ts`. Zaštitni mehanizam nudi
opciju konstruktora `deps` kako bi testovi mogli umetnuti lažne implementacije funkcija `getSettings` i
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreće zahtjeve za razgovor koji sadrže zvuk prije nego što dosegnu cilj za koji nije
poznato da prihvaća zvučni ulaz. Nikada ne preusmjerava zahtjev za razgovor: zvučni dijelovi
transkribiraju se putem postojećeg višedijelnog krajnjeg čvora kompatibilnog s OpenAI-jem, a
odabrani model za razgovor nastavlja s tekstualnim transkriptima.

Tijek:

1. Razriješite `supportsAudio` putem `getResolvedModelCapabilities()`. Izričiti
   metapodaci registra pružatelja imaju prednost, zatim slijede statički metapodaci modela, a potom sinkronizirani
   `modalities_input`. Deklarirani popis ulaza bez vrijednosti `audio` daje `false`; ako nema
   dokaza o mogućnostima, vrijednost ostaje `null`. I `false` i `null` aktiviraju
   konzervativni most, dok ga `true` zaobilazi.
2. Razriješite postavke `modalityBridgeAudio*` i izdvojite zamjenjive zvučne
   dijelove najviše razine iz svake poruke putem zajedničkog detektora `detectMediaParts()`.
   Podržani formati prijenosa jesu OpenAI `input_audio`, `audio_url` i
   `source.media_type: "audio/*"`. Ugniježđeni zvuk otkriva se radi usmjeravanja, ali se
   ne uklanja putem postupka zamjene. Količina obrade ograničena je postavkom `modalityBridgeAudioMaxClips`;
   kasniji dijelovi ostaju nepromijenjeni.
3. Poštujte konfigurirani `provider/model` ili dopustite funkciji `selectAudioBridgeModel()` da redom prođe kroz
   `AUDIO_TRANSCRIPTION_PROVIDERS` prema stabilnom redoslijedu kataloga i odabere prvi
   model s upotrebljivom vjerodajnicom aktivnog pružatelja.
4. `callAudioTranscription()` pretvara zvuk u formatu base64/data-URI u višedijelni
   `file` ili preuzima udaljeni `audio_url` putem izlaznog zaštitnog mehanizma koji dopušta samo javne adrese,
   uz DNS pričvršćivanje i ograničenje od 25 MB. Zatim POST-om šalje datoteku i odabrani
   model lokalnoj samopetlji `/v1/audio/transcriptions`, autentificiranoj funkcijom
   `resolveSelfLoopBearer()`. Postojeća ruta za transkripciju obavlja uobičajeno
   traženje vjerodajnica, obradu razdoblja čekanja/ograničenja brzine i prosljeđivanje pružatelju.
5. Uspješni pozivi zamjenjuju svoje dijelove s `[Audio N]: <transcript>`. Pozivi
   se izvode pomoću `Promise.allSettled`: pojedinačni neuspjeh zadržava izvorni
   zvučni dio (ugovor #4012). Ako svi pozivi ne uspiju, a za cilj je dokazano
   `supportsAudio === false`, dijelovi postaju
   `[Audio N]: (unavailable — no STT provider connected)` (ugovor #8430). Za
   nepoznati cilj (`null`) rezultat u kojem svi pozivi ne uspiju ostaje nepromijenjen. Cilj za koji je dokazano
   da podržava samo tekst, a nema upotrebljivu STT vjerodajnicu, prima istu izričitu
   zamjensku poruku bez upućivanja mrežnog poziva.

Uspješni transkripti koriste LRU/TTL predmemoriju Modality Bridge zajedničku cijelom procesu.
Ključ kombinira referencu zvuka, stabilnu oznaku operacije `audio-transcription`
i odabrani STT model; neuspjesi se nikada ne spremaju u predmemoriju. Pokušaji obrade zvuka ažuriraju
zajedničke brojače `bridged`, `cacheHits`, `failures` i `lastUsedAt`.
Transformirani odgovori sadrže
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nepromijenjeni
zahtjevi ne dobivaju segment Audio Bridge.

Postavke tijekom izvođenja pohranjuju se u bazi podataka i provjeravaju pomoću Zoda:

| Ključ                         | Zadano  | Raspon                |
| ----------------------------- | ------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                     |
| `modalityBridgeAudioModel`    | `""`    | Automatski ili STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                  |

Zajedničkom predmemorijom i dalje upravljaju `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Videomost (`videoBridge.ts`, `videoBridgePipeline.ts`)

Presreće videodijelove najviše razine u `messages` sučelja Chat Completions i
`input` sučelja Responses API prije pozivanja cilja za koji nije poznato da
izvorno podržava video. Podržani su oblici `input_video`, `video_url`,
`video_source`, HTTPS URL-ovi i podatkovni URI-ji `data:video/*;base64,...`.
Obični nazivi datoteka u tekstu ne smatraju se videozapisima.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prolaskom kroz zahtjev,
provjerom mogućnosti/pravilnika, agregiranjem po zahtjevu i sadržajem odgovora.
Obrada pojedinačnog videozapisa — dohvaćanje, predmemorija cijelog rezultata,
opisivanje slijeda kadrova (koje spaja svaki zvučni prijepis koji je naveo
pozivatelj) te metrike/prekid/čišćenje po pokušaju — skrivena je iza
`processVideoPart` u `videoBridgePipeline.ts`, koji se poziva jednom za svaki
videodio unutar petlje metode `preCall`. Taj modul također definira eksplicitne
granice priključaka `VideoMediaBrokerPort` (dohvaćanje bajtova i izdvajanje
uzorkovanih kadrova), `VideoAudioTranscriptionPort` (spajanje zvučnog prijepisa
koji je naveo pozivatelj s opisima uzorkovanih kadrova) i
`VideoDrilldownPort` (granica pohrane detaljne analize kadrova; još nije
povezana s `processVideoPart` — danas samo zasebna ruta
`/api/modality-bridge/video/drilldown` zapisuje unose detaljne analize).

Javna putanja zahtjeva `/v1` nikada ne uvozi niti poziva podproces. Udaljeni
videozapisi preuzimaju se uz ograničenje od 50 MiB; umetnuti videozapisi kodirani
u base64 imaju konzervativno ograničenje dekodirane veličine od 36 MiB po
videozapisu kako bi omotnica modela/poruka/uokvirivanja mogla ostati unutar
javnog ograničenja prihvata JSON zahtjeva od 50 MiB. Duljina umetnutog sadržaja
i procjene dekodirane veličine provjeravaju se prije dodjele memorije. HTTPS je
obvezan na početnom udaljenom URL-u i pri svakom preusmjeravanju, uz postojeću
zaštitu za javni izlazni promet s DNS prikvačivanjem. Bajtovi zatim prelaze
točno definiranu internu brokersku granicu
`POST /api/modality-bridge/video/extract`. Ta je ruta istodobno `LOCAL_ONLY` i
`SPAWN_CAPABLE`, prihvaća samo autentificirani zahtjev po procesu s pouzdane
lokalne povratne adrese i nikada ne prihvaća URL, putanju datotečnog sustava,
izvršnu datoteku ni popis argumenata. Cjevovod ograničenja veličine tijela
API-ja i inkrementalni čitač tijela u rukovatelju neovisno provode ograničenje
brokerskog ulaza od 50 MiB. Njegov ograničeni red obrađuje jedno izdvajanje
odjednom, dopušta četiri posla na čekanju i ograničava ulazne podatke na čekanju
na 100 MiB.

Unutar brokera `ffprobe` čita privatnu lokalnu datoteku; fiksni popis dopuštenih
formata isključuje formate popisa za reprodukciju i manifesta. Za dopuštene
spremnike iz obitelji MOV vanjske MOV reference na podatke prema zadanim
postavkama ostaju onemogućene, a fiksna naredba ih ne uključuje. I `ffprobe` i
`ffmpeg` upotrebljavaju popis dopuštenih protokola koji sadrži samo `file`,
jednu dretvu, fiksne nizove argumenata, bez ljuske, uz izvršne datoteke
razriješene iz `PATH`. Tokovi naslovnih slika priloženih videozapisu nisu
kandidati za reprodukciju. Svi tokovi koji se mogu reproducirati moraju
zadovoljavati ograničenja, a eksplicitni zadani tok ima prednost pred
determinističkim rezervnim odabirom toka s najnižim indeksom. Videozapisi su
ograničeni na 600 sekundi, 8.192 piksela po dimenziji i 33.554.432 izvorna
piksela. FFmpeg uzorkuje 1–16 JPEG kadrova na srednjim točkama, smanjuje duži
rub na najviše 1.024 piksela bez povećavanja manjih ulaznih sadržaja i nikada ne
prima URL. Uzorkovanje je prema zadanim postavkama `uniform`. Neobavezna pravila
`scene_aware` i eksperimentalna pravila `segment_aware` izvode jedan dodatni
fiksni prolaz FFmpeg-a preko već potvrđenog lokalnog toka, odabiru ograničene
vremenske oznake scena iz `showinfo` i deterministički se vraćaju na iste
ujednačene srednje točke u slučaju pogreške detektora, isteka vremena,
neispravnog izlaza ili praznog skupa kandidata. Način rada koji uzima u obzir
segmente proporcionalno dodjeljuje uzorke srednjih točaka potvrđenim intervalima
scena; dokazi povezani sa segmentima i rezervno ponašanje detaljno su opisani u
nastavku. Strogo ograničenje od 16 kadrova primjenjuje se nakon odabira u svakom
pravilu. Kada zahtjev koji uzima u obzir scene ima proračun od samo jednog kadra,
upotrebljava ujednačenu srednju točku aktivnog prozora cijelog videozapisa ili
fokusnog prozora i prijavljuje `policyEffective: uniform`: jedan odabrani kadar
scene ne može očuvati oba vremenska kraja. Pozivatelj neobavezno može navesti
konačni fokusni prozor (`start`/`end` u sekundama); granice se ograničavaju na
trajanje medija, obrnuti ili nekonačni prozori odbijaju se, a sva pravila
uzorkovanja primjenjuju se samo unutar normaliziranog intervala. Dobiveni prozor
uključuje se u metapodatke uzorkovanja i u prefiks nepouzdanog opisa kako bi
nizvodni modeli mogli razlikovati fokusirani isječak od cijele vremenske crte.

Semantički fokus opisa zasebna je, eksplicitna postavka. Zadani način analize
`full` zadržava postojeći upit za kadrove i nikada ne prosljeđuje tekst zahtjeva
modelu za opisivanje. U načinu `focused` most čita samo najnoviji neprazni
`text`/`input_text` koji je stvorio korisnik iz istog spremnika Chata ili
Responsesa, normalizira ga u NFC, sažima kontrolne znakove i razmake te ga
ograničava na 500 Unicode kodnih točaka. Prazan rezultat vraća se na potpuno
isti upit načina `full`. Upotrebljiv naputak serijalizira se kao JSON u
namjenskom bloku nepouzdanog korisničkog konteksta i smije samo dati prednost
uočljivim pojedinostima; ne može nadjačati zasebno upozorenje da se ne slijede
upute koje su vidljive ili čujne u mediju. Tekstualni fokus nikada ne izvodi
`start`/`end` niti mijenja vremenski uzorkivač.

#### FU-07 strukturni dokazi o segmentima

`segment_aware` koristi jedan ograničeni prolaz prethodne analize nad već provjerenim
lokalnim videostrujanjem. Fiksni lanac filtara najprije skalira sliku na širinu
od najviše 320 piksela, otkriva promjene scena i zamrznute intervale, a zatim
uzima uzorke brzinom od 1 kadra u sekundi radi procjene zamućenja, prosječne
luminancije te prostornih/vremenskih informacija. Prolaz je ograničen na 600
strukturnih uzoraka, jednu FFmpeg/filtarsku dretvu, iste popise dopuštenih
protokola isključivo za `file` i spremnika, ograničenje izlaza procesa od 1 MiB
te najviše 30 sekundi unutar zajedničkog prekida/roka brokera. Nikada ne
prihvaća naredbu, filtar, putanju ni URL iz zahtjeva.

Strukturne vrijednosti deterministički su dokazi uzorkovanja, a ne semantičko
razumijevanje videozapisa. Ne zaključuju o subjektima, radnjama, opisima, govoru
ni namjeri korisnika. Granice scena i zamrzavanja tvore segmente; pokrivenost
zamrzavanjem, zamućenje, ekspozicija, prostorni detalji i vremenske promjene
utječu samo na raspodjelu postojećeg budžeta od 1 do 16 kadrova. Potpuno
zamrznuti segment ograničen je na jedan kadar, dok se nezamrznuti segmenti
natječu za preostali budžet. Kada ima više granica nego kadrova, zadržava se
ujednačena pokrivenost vremenske crte kako brzi rani rezovi ne bi mogli prikriti
dugačak završni segment. Granice scena unutar razlučivosti analize od 1 sekunde
od granice zamrzavanja spajaju se.

Nedostajući filtri, neispravni/prazni dokazi, pogreška detektora ili istek
vremena ograničene prethodne analize prelaze na točno zadana pravila ujednačenih
središnjih točaka. Prekid pozivatelja ili rok brokera ne prelaze na zadana
pravila: prekidaju podproces u tijeku, sprječavaju naknadno izdvajanje kadrova,
a privatno privremeno stablo uklanja se u bloku `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generira determinističke stvarne FFmpeg
probne podatke za uštedu poziva za opise nakon uklanjanja duplikata, raspodjelu
budžeta pri gustom kretanju, dokaze zamućenja/ekspozicije/SI-TI, brze rezove s
dugim završnim dijelom i lažno pozitivne rezultate kod postupnog pretapanja.
Bilježi proteklo vrijeme prethodne analize te, gdje je `/usr/bin/time` dostupan,
CPU vrijeme podređenog procesa i vršnu rezidentnu memoriju. Njegove provjere
kvalitete samo su strukturna mjerila. Kvaliteta stvarnog modela za opise ostaje
`HOLD` jer ovaj ispitni okvir nema ovlaštenu krajnju točku ni zamrznuti
ocjenjivač. Novčane uštede također ostaju `HOLD` osim ako
`--caption-cost-per-call-usd` ne navede izričitu pozitivnu procjenu troška po
pozivu; skripta nikada ne izmišlja nijedan od tih rezultata.

Svaki je kadar ograničen na 4 MiB, svi neobrađeni kadrovi zajedno na 23 MiB, a
serijalizirani odgovor brokera na 32 MiB. Privatni privremeni direktorij uklanja
se u bloku `finally`. OmniRoute ne uključuje FFmpeg i ne prihvaća prilagođenu
putanju izvršne datoteke. Prije izrade opisa most primjenjuje konzervativni
prolaz vizualnog uklanjanja duplikata: svaki JPEG smanjuje se na međuspremnik
sivih tonova veličine 16×16 i uspoređuje samo s posljednjim zadržanim kadrom.
Za zatraženi budžet opisa veći od jednog kadra izdvajanje daje ograničen skup
kandidata do dvostruke veličine tog budžeta, ali nikada više od 16 kadrova.
Zatraženo ograničenje primjenjuje se tek nakon uklanjanja duplikata, pri čemu
se prvi i posljednji odabrani kandidat čuvaju tijekom završnog prorjeđivanja
kada je budžet najmanje dva. Verzijski definirano pravilo
`grayscale-16x16-mean-cells-v2` koristi veću vrijednost između srednje promjene
luminancije i omjera ćelija minijature čija je normalizirana razlika najmanje
0.05. Prag duplikata konstanta je 0.04, odabrana radi predvidljivosti umjesto
izlaganja kao postavke tijekom izvođenja. Ovaj sekundarni signal visokog
kontrasta čuva male pomake i promjene vidljivog teksta koje usporedba samo
srednjih vrijednosti može sakriti. Pogreške uspoređivača ili dekodera prelaze na
sigurni način rada i zadržavaju pokrivenost. Izlazni metapodaci odvojeno navode
izdvojene kandidate, uspješno upotrijebljene kadrove i odbačene vizualne
duplikate.

Izričito označeni videodio može zatražiti kontaktnu tablu s vremenskim oznakama.
Most izrađuje JPEG mrežu s najviše 4 stupca i 16 kadrova. Svaka ćelija veličine
512 piksela utiskuje vremensku oznaku izvora u donju traku visokog kontrasta,
dok iste vremenske oznake ostaju u tekstualnim metapodacima radi naknadnog
povezivanja i revizije. Cjeloviti JPEG ostaje ograničen na 32 MiB. Ako `sharp`
ne može dekodirati ili sastaviti mrežu, most prelazi na pojedinačne JPEG
kadrove; prekid klijenta i dalje se prenosi kroz operaciju izrade table.

Dokazi za promicanje namjerno su odvojeni od sintetičkog mikromjerila
sastavljanja. `scripts/perf/video-bridge-contact-sheet-eval.ts` definira A/B
ispitni okvir s verzioniranom shemom za stvarne modele računalnog vida
kompatibilne s OpenAI-jem. Mjeri broj tokena koji prijavljuje pružatelj usluge,
ukupno proteklo vrijeme od početka do kraja, uključujući sastavljanje table,
broj poziva modela i očuvanje činjenica definiranih manifestom. Neobrađeni
odgovori modela ne zapisuju se u izvješće; zadržavaju se samo SHA-256 sažeci i
ID-ovi podudarnih činjenica. Ispitni okvir ne izvršava mrežni ni naplativi poziv
modela osim ako se proslijedi `--execute-real` te konfiguriraju `--model`,
`OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez takvog izričitog stvarnog
pokretanja njegov strojno čitljiv zaključak ostaje `HOLD`; sama sintetička
mjerenja korisnog sadržaja i broja poziva nisu dokaz za promicanje.

Pozivatelji mogu podržanom videodijelu priložiti neobavezno polje
`transcript.cues` kada već posjeduju vremenski usklađen tekst. Svaka stavka mora
sadržavati `text`, konačan interval `start`/`end` unutar ispitivanog trajanja i
vrijednost `source` s popisa dopuštenih vrijednosti (`client`, `embedded` ili
`audio-bridge`); zadana vrijednost za `confidence` jest `1` i mora ostati između
`0` i `1`. Potpuno jednake stavke spajaju se. OmniRoute nikada ne pokreće
transkripciju na temelju tih metapodataka: provjerene stavke kopiraju se u
opisani rezultat zajedno s izvorom, pouzdanošću i intervalom te se prikazuju kao
nepouzdana opažanja uz opise kadrova. Neispravan tekst, tekst izvan raspona ili
tekst bez podrijetla odbacuje se umjesto da se miješa u tok opisa. Oba kanala
transkripta u tijelu zahtjeva normaliziraju dostavljeno podrijetlo na `client`,
uključujući samostalno navedene oznake `embedded` ili `audio-bridge`. Samo
adapter u vlasništvu poslužitelja može dodijeliti te pouzdane oznake putem
argumenta `trustedSource`, dostupnog isključivo iz koda; JSON polje zahtjeva ne
može dosegnuti taj argument. Tekst transkripta ostaje nepouzdan sadržaj izveden
iz medija, neovisno o svojem podrijetlu, i nikada ne smije određivati
autorizaciju.

Napredni pozivatelj može navesti zapis `audioTranscript` za isti videozapis;
on se tretira kao tekst koji je dostavio klijent, a ne kao dokaz poslužiteljske transkripcije.
Spojna točka izvodi vizualna i zvučna opažanja unutar
jednog roka i signala za prekid, raspoređuje ih na zajedničkoj vremenskoj crti, sažima
potpuno jednake duplikate i prijavljuje djelomičan rezultat kada uspije samo jedna grana.
Neispravan `audioTranscript` degradira se na taj djelomični rezultat — vizualni
se opis zadržava, a zvučna grana bilježi sanitizirani kôd pogreške —
umjesto da obrada cijelog videozapisa ne uspije. Dostupnost po granama, oznaka djelomičnog
rezultata i sanitizirani kodovi pogrešaka čuvaju se u opisanom rezultatu, u
metapodacima zaštitnog mehanizma (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), u metapodacima predmemorije rezultata i u brojačima
spajanja mosta. Zadani put Video Bridgea ne poziva pretvaranje govora u tekst
niti preuzima drugu kopiju medijskog sadržaja; bez tog izričitog zapisa ostaje
ograničen samo na videozapis.

**Zadržavanje transkripta (#12150 P1).** Ovo se automatski primjenjuje kad god
Video Bridge (koji je i sam opcionalan) prikaže stavku transkripta — ne postoji zasebna
oznaka zadržavanja. Kada zahtjev prikaže bilo koju stavku transkripta (pozivateljev deklarirani
`transcript` ili spojeni `audioTranscript`), zaštitni ga mehanizam označava kao
`videoBridgeObserved` i stvara redigiranu presliku opisa videozapisa —
identičan prikaz u kojem je tijelo slobodnog teksta svake stavke zamijenjeno s
`[redacted-video-transcript]`, izrađen zamjenom strukturiranog polja stavke
prije sastavljanja niza (nikada raščlanjivanjem spljoštenog teksta, tako da nijedan sadržaj
stavke — zlonamjeran ili običan, uključujući tijela koja sadrže `]`, kao što su
`[inaudible]`/`[music]` — ne može preživjeti). Tijelo zahtjeva u trajno pohranjenom zapisniku poziva zamjenjuje
svaki tekstualni dio izveden iz videozapisa tom redigiranom preslikom, podudarenom prema jednakosti
sadržaja; sidro `fullText` ponovno se čita iz dovršenog sadržaja zaštitnog mehanizma
prije poziva, tako da podudaranje i dalje uspijeva nakon što naknadni ulančani zaštitni mehanizmi (maskeri
osobnih podataka i vjerodajnica, prioriteti 10/95) prepišu tekst opisa na mjestu i
nakon što umetanje sistemskog upita, primopredaje ili memorije preoblikuje polje poruka.
Tijelo poslano modelu ostaje nepromijenjeno. Opaženi zahtjev također ne popunjava
trajnu Memoriju (preskače se izdvajanje izvedeno i iz zahtjeva i iz odgovora),
tako da odgovor samog modela ne može prenijeti tekst transkripta u Memoriju.

**Neobrađena videopolja (#12430).** Kada je most omogućen, a izvorna podrška za videozapis nepoznata ili nedostupna, definirana polja `transcript`/`audioTranscript` također aktiviraju `videoBridgeObserved`, čak i nakon neuspjelog opisivanja ili ograničenja `maxVideos`. `null` i prazni nizovi računaju se; odsutna polja i metapodaci koji nisu povezani s videozapisom ne računaju se. Zadržane kopije redigiraju ta polja ili izostavljaju zahtjev, a predmemorije i Memorija se zaobilaze.

Na tim zamjenskim putovima valjane stavke pozivatelja postaju podržani dijelovi `text`/`input_text`
umjesto nestandardnih polja pružatelja usluge. Oba zapisa dostavljena u zahtjevu
ostaju nepouzdana `client` opažanja, uz izričito upozorenje da videozapis
nije opisan i da vremenske oznake nisu provjerene u odnosu na medijski sadržaj. Postojeća
ograničenja od 256 stavki/ukupno 64 KiB i ograničenja po stavci primjenjuju se na oba zapisa zajedno;
vremenske oznake moraju stati unutar gornje granice posrednika od 600 sekundi i svakog navedenog
vremenskog prozora fokusa. Neispravni se zapisi odbacuju, a ne prosljeđuju kao proizvoljan tekst; valjani
srodni zapis i dalje se može upotrijebiti, osim ako je prekoračeno njihovo zajedničko ograničenje. Nulta/prazna
polja ne dodaju tekst. Ovaj zamjenski način ne dodaje dohvaćanje medijskog sadržaja ni transkripciju.
Proširena polja transkripta uklanjaju se iz zamjenskog nosača videozapisa i njegovih
objekata `video_url`/`source`. Popis dopuštenih vrijednosti u OpenAI žičanom protokolu ostaje strog; nosači
videozapisa s nepoznatom izvornom podrškom ostaju dostupni, a poznata odredišta samo za tekst zadržavaju sigurne oznake.
Strukturirane redigirane preslike štite dodani tekst transkripta, dok izvorni
zahtjev u vlasništvu pozivatelja ostaje nepromijenjen. Odredišta s izvornom podrškom i
onemogućeni mostovi zadržavaju svoje postojeće ponašanje zaobilaženja.

Dodatne zadržane kopije koriste isti signal opaženog zahtjeva. Neobrađena
snimka klijentskog zahtjeva prije zaštitnog mehanizma, zahtjev na čekanju u memoriji i zapisnik rano
odbijenog zahtjeva strukturno zamjenjuju polja transkripta u dijelovima videozapisa;
tekstualni upiti koje sintetiziraju faze cjevovoda i primopredaja konteksta redigiraju se
na odredištu trajno pohranjenog tijela zahtjeva. Trajno pohranjena oznaka `video_content_removed`
uzrokuje da nastavak putem `previous_response_id` bude sigurno odbijen umjesto da rekonstruira
tekst koji je namjerno odbačen. Ako opaženi zahtjev prije zapisivanja izgubi svoju
redigiranu presliku za pojedini dio ili ako se čak jedna od nekoliko preslika videozapisa
ne podudara nakon naknadnih izmjena zahtjeva, zadržano tijelo zahtjeva u potpunosti se
izostavlja umjesto da se zadrži djelomično redigirani transkript.

Za opaženi zahtjev odgovor modela može citirati bilo koji dio
transkripta bez strukturirane granice stavke. Njegov `responseBody` u trajno pohranjenom zapisniku
poziva stoga se zamjenjuje oznakom izostavljanja; detaljni
artefakt cjevovoda (koji može uključivati tijela pružatelja usluge/klijenta i dijelove toka)
ne zadržava se. Semantičke predmemorije, predmemorije idempotentnosti i predmemorije ponovne reprodukcije zaključivanja zaobilaze
čitanja i zapisivanja za taj zahtjev. Zahtjev pružatelju usluge i odgovor
vidljiv klijentu ostaju nepromijenjeni. Rani bajtovi za održavanje veze uklanjaju se iz privremenog
međuspremnika kada se detaljni artefakt izostavi. Kirovo upozorenje o neispravnom EventStreamu
prijavljuje samo broj bajtova sadržaja, nikada njegov sadržaj ni neobrađenu pogrešku
JSON parsera.
Time se ne tvrdi da je svaka nepovezana dijagnostika pružatelja usluge/dodatka
provjerena; šira provjera odredišta sa zadržanim podacima prati se u #11658.

Interni životni ciklus `/api/modality-bridge/video/drilldown` zasebna je,
loopback/token-autentificirana podloga predmemorije. Svaka operacija također zahtijeva
kanonski neprozirni ID principala. Prije omogućavanja produkcijskog pozivatelja, on mora
izvesti taj ID iz autentificiranog tenanta i nikada ne smije prosljeđivati vrijednost
koju je odabrao klijent. Ključevi predmemorije vežu taj principal uz kanonske ID-ove sesije i
videoreference, pohranjuju samo njihove ključeve izvedene pomoću SHA-256 te ograničavaju i čitanja
i brisanje na isti principal. Predmemorija pohranjuje najviše 16 izvedenih JPEG
kadrova po unosu, uklanja ih nakon deset minuta i podržava ograničena
`start`/`end` čitanja ili izričito brisanje sesije.

Svaki principal ograničen je na 16 unosa i 64 MiB kanonskih JPEG podataka. Ta su
ograničenja neovisna o globalnoj granici od 64 unosa/256 MiB: pritisak na kvotu
principala izbacuje samo najdulje nekorištene unose tog principala prije nego što se
razmotri globalno LRU izbacivanje. Istekli unosi uklanjaju se iz obračuna principala i
globalnog obračuna pri aktivnosti predmemorije, dok otkazivanje i neuspjela validacija
ne spremaju djelomičnu zamjenu.

Predmemorija odbija nekanonski Base64, prekomjerno dopunjavanje, medije koji nisu JPEG,
neispravne ili skraćene JPEG-ove te JPEG-ove koji tijekom ograničenog dekodiranja cijele slike
pomoću `sharp` proizvedu upozorenje. Svaku prihvaćenu sliku ponovno kodira kao kanonski JPEG,
izvodi širinu i visinu iz dekodiranih bajtova umjesto da vjeruje poljima pozivatelja te odbacuje
sve završne poliglotske bajtove umjesto da ih zadržava. Obje kvote terete se samo za ograničeni
kanonski komprimirani međuspremnik. Ograničenje JSON prijenosa uključuje Base64 dodatak za granicu
dekodiranog ulaza od 32 MiB. Svaka
pohranjena izvedenica bilježi svoj validirani JPEG format/razlučivost, pravila uzorkovanja,
verziju izvedbe, vrijeme stvaranja, sažetak sadržaja koji je izračunao poslužitelj te sažetu
nadređenu referencu zajedno sa sažetkom nadređenog sadržaja pouzdanog pozivatelja. Otkazivanje se
provjerava između asinkronih faza dekodiranja/izračuna sažetka prije atomarnog spremanja u predmemoriju.

Ova etapa još ne povezuje produkcijskog proizvođača s rutom i ne
pruža odabir varijante s više razlučivosti. Transparentni put zahtjeva Video Bridge stoga
ne uzrokuje dodatan rad, dok izvođenje principala vezano uz tenanta i
cjelokupni FU-08 životni ciklus s više razlučivosti ostaju izričiti naknadni zadaci,
a ne ponašanje dokumentirano kao dovršeno.

Kadrovi se opisuju redom konfiguriranim Video modelom. Prazno
Video nadjačavanje nasljeđuje postavku Vision; ako su obje vrijednosti prazne, Vision
automatski usmjerivač odabire efektivni model koji podržava vid. Uspješni opisi
zamjenjuju izvorni dio stabilnim prefiksom `[Video description:` koji također
označava tekst kao nepouzdano opažanje izvedeno iz medija i upućuje nizvodne
modele da ne slijede upute pronađene u mediju. Ključevi predmemorije opisa kadrova
uključuju JPEG bajtove, upit, vremensku oznaku i efektivni model; predmemoriraju se samo
uspješni opisi. Unosi predmemorije zadržavaju stvarni uspješni model proizvođača,
uključujući pričuvni model; most prijavljuje `mixed` kada su različite kadrove
proizveli različiti modeli. Pogodak u predmemoriji ponovno koristi taj identitet proizvođača
umjesto da ga ponovno označi kao zatraženi plan usmjeravanja. Predmemorija rezultata
cijelog videozapisa indeksira se prema svakom ulazu koji mijenja izlaz — upitu, efektivnom
modelu, pravilima uzorkovanja, broju kadrova, načinu semantičke analize, SHA-256
otisku normaliziranog fokusa, prozoru fokusa, `transcript`,
`audioTranscript` i zastavici kontaktne stranice — pa promjena bilo koje od tih
dimenzija uzrokuje promašaj predmemorije, a nikada ponovnu uporabu zastarjelog rezultata. Verzija
pravila vizualne deduplikacije, prag i ograničeni broj kandidata za kadrove također su izričito
navedeni u ključu i metapodacima predmemorije rezultata; promjena pravila stoga ne može ponovno
upotrijebiti zastarjeli opis cijelog videozapisa. Metapodaci predmemorije rezultata v4 zadržavaju
način rada i otisak, ali nikada neobrađeni korisnički zadatak. Metapodaci zaštitnog mehanizma
navode i zatraženi i efektivni način analize; zatraženi način `focused` bez
upotrebljivog korisničkog teksta prijavljuje se kao efektivno `full`.

Zaštitni mehanizam izdvaja svaki podržani dio videozapisa, ali ne opisuje više od
`modalityBridgeVideoMaxVideos`. Za cilj za koji je dokazano da ima
`supportsVideo === false`, neuspjeli videozapisi i oni iznad ograničenja postaju izričite sigurne
tekstualne oznake kako nijedan neobrađeni videozapis ne bi ostao. Kada je sposobnost nepoznata,
ti dijelovi zadržavaju svoj videonositelj; svaki pričuvni transkript slijedi prethodno opisanu
ograničenu pretvorbu teksta. Ciljevi sa `supportsVideo === true` zaobilaze most.
Signal za prekid klijentskog zahtjeva prenosi se kroz preuzimanje, red posrednika,
podprocese i pozive za opisivanje; prekidi zaustavljaju obradu između videozapisa i nikada
ne propuštaju neobrađeni medij u slučaju pogreške.

Postavke izvođenja pohranjene su u bazi podataka i validirane pomoću Zoda:

| Ključ                               | Zadano      | Raspon / ponašanje                                                                                              |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Neobavezno tijekom izvođenja, uz izričito uključivanje                                                          |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` zadržava generičke opise; `focused` koristi ograničeni, nepouzdani kontekst najnovijeg korisnika         |
| `modalityBridgeVideoModel`          | `""`        | Nasljeđuje model Vision Bridgea                                                                                 |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ili proporcionalni `segment_aware`; u slučaju pogreške detektora vraća se na `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                  |

Naslijeđene trajno pohranjene vrijednosti vremenskog ograničenja za Video veće od 120 sekundi ograničavaju se na
rok posrednika; novi pokušaji zapisivanja postavki iznad tog ograničenja odbijaju se.
`GET /api/modality-bridge/video/runtime` prije autentikacije ili ispitivanja okruženja izvođenja zahtijeva
pouzdanu, označenu lokalnost povratne petlje, a zatim zahtijeva upravljačku
autentikaciju. Vraća samo `available`, pročišćene verzije FFmpeg/ffprobe i fiksni
razlog kada okruženje izvođenja nije dostupno. Interna krajnja točka za izdvajanje nije
javni API za prijenos: zasićenje reda vraća `503` uz `Retry-After`, prekid veze
pozivatelja vraća `499`, a fiksni rok posrednika vraća `504`. Pretvoreni odgovori dodaju
`video->text;model=<visionModel>;parts=<videos>` u središnje
zaglavlje `x-omniroute-modality-bridge` bez uklanjanja segmenata Vision ili Audio.

### Masker osobnih podataka (`piiMasker.ts`)

Izvodi se u **obje** faze.

- **`preCall`** klonira korisni sadržaj, prolazi kroz `system`, `messages`, `input` i
  `prompt` (uključujući stavke koje su obični nizovi znakova) te primjenjuje `processPII()` (iz
  `@/shared/utils/inputSanitizer`) na polja `content`/`text` tipa niza znakova. Kada je
  `PII_REDACTION_ENABLED=true`, otkriveni osobni podaci redigiraju se u odlaznom
  korisnom sadržaju. To je neovisno o `INPUT_SANITIZER_MODE` (koji kontrolira samo
  pravila za ubacivanje upita). Kada je redigiranje isključeno, poziv bilježi broj
  otkrivanja bez prepisivanja sadržaja.
- **`postCall`** dubinski klonira odgovor, pokreće `sanitizePIIResponse()` i
  masker za oblik Responses API-ja (`maskResponsesOutput` — obuhvaća
  `output_text` i `output[].content[].text`). Ako dođe do bilo kakvog redigiranja,
  izmijenjeni odgovor zamjenjuje izvorni.

Zaštitna mjera nikada ne blokira; samo dodaje napomene (`meta.detections`,
`meta.redacted`) ili prepisuje.

### Ubacivanje upita (`promptInjection.ts`)

Otkriva zlonamjerne strukture u sadržaju koji je dostavio korisnik i provodi
konfigurirana pravila. Ponašanje određuju varijable okruženja i opcije
konstruktora:

| Postavka        | Varijabla okruženja                                                                                   | Zadano | Učinak                                                                                                                                                                                                                  |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogućeno       | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | Kada je `false`, zaštitna mjera odmah prekida obradu.                                                                                                                                                                   |
| Način rada      | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | Pravilo za ubacivanje: `block`, `warn` ili `log`. (`redact` se prihvaća radi kompatibilnosti unatrag, ali **ne** uklanja tekst ubacivanja; prepisivanjem osobnih podataka u zahtjevu upravlja `PII_REDACTION_ENABLED`.) |
| Prag blokiranja | opcija `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Najniža razina ozbiljnosti potrebna za blokiranje. Srednja razina prema zadanim se postavkama samo promatra.                                                                                                            |

**Prioritet načina rada** (`getMode`): `options.mode` pozivatelja →
nadjačavanje `INJECTION_GUARD_MODE` putem **zastavice značajke u bazi podataka** (Nadzorna ploča → Postavke →
Zastavice značajki) → varijabla okruženja `INJECTION_GUARD_MODE` → varijabla okruženja `INPUT_SANITIZER_MODE` →
`warn`. Nadjačavanje putem nadzorne ploče stoga ima prednost nad varijablama okruženja, pa korisničko sučelje Zastavice
značajki upravlja aktivnom zaštitom uživo (bez ponovnog pokretanja). Čitanje iz baze podataka sigurno je u slučaju pogreške:
ako dođe do pogreške, zaštita se vraća na ponašanje temeljeno na varijablama okruženja, a kada
nadjačavanje nije postavljeno, ponašanje je jednako razrješavanju isključivo putem varijabli okruženja.

Izvori otkrivanja:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (zajednički skup detektora
   koji se koristi drugdje u procesnom lancu).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutačno `system_override_inline` i
   `markdown_system_block`, oba s razinom ozbiljnosti `high`).
3. Neobavezni `customPatterns` proslijeđeni putem opcija konstruktora (nizovi znakova, regularni izrazi
   ili zapisi `{ name, pattern, severity }`).

Kada je `mode === "block"` **i** barem jedna detekcija zadovoljava prag
ozbiljnosti, `preCall` vraća `{ block: true, message: "Request rejected:
suspicious content detected" }`. U načinima rada `warn`/`log` zaštitni mehanizam
bilježi događaj, ali dopušta poziv. Zajednički pomoćni program
`evaluatePromptInjection()` također se izvozi za pozivatelje koji trebaju
procijeniti upite bez prolaska kroz registar.

**Ograničenje skeniranja (v3.8.20):** detektor pregledava samo **prvih 16 KB**
spojenog teksta upita — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajta) u
`src/shared/utils/inputSanitizer.ts`. I `detectInjection()` i
`evaluatePromptInjection()` pozivaju `slice(0, MAX_INJECTION_SCAN_BYTES)` prije
pokretanja petlje uzoraka. Direktive za ubacivanje obično se nalaze pri vrhu
unosa, pa se time ograničava upotreba CPU-a/GC-a za regularne izraze na
višestokilobajtnim korisnim sadržajima bez slabljenja detekcije (usp. #3932,
#4041).

### Maskiranje vjerodajnica (`credentialMasker.ts`)

Izvodi se u **obje** faze, posljednje u zadanom lancu (prioritet `95`). Redigira
poznate uzorke API ključeva / tajnih tokena iz odlaznog korisnog sadržaja
(sadržaja poruke, argumenata poziva alata, rezultata alata) **i** odgovora
pružatelja, kako vjerodajnica zalijepljena u upit (ili vraćena kao rezultat
alata) ne bi procurila prema pružatelju usluge ili natrag klijentu.

- **Samo uz izričito uključivanje**, prema istoj konvenciji kao i redigiranje
  osobnih podataka (uz Tvrdo pravilo #20): onemogućeno je osim ako je
  `settings.credentialRedactionEnabled === true` **ili**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kada je isključeno, zaštitni mehanizam ne
  poduzima ništa — nikada ne blokira niti mijenja sadržaj.
- `redactCredentials()` prolazi kroz cijelo stablo korisnog sadržaja/odgovora
  (`walkValue()`, zaštićeno od zagađenja prototipa, otporno na cikluse putem
  `WeakSet`) i zamjenjuje podudaranja rezerviranim mjestom
  `[REDACTED:<type>]`, klonirajući samo grane koje su se doista promijenile.
- `CREDENTIAL_PATTERNS` obuhvaća ključeve pružatelja LLM usluga (OpenAI,
  OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokene
  (GitHub, Slack, Linear, Notion, npm, Postman, Discord), ključeve za plaćanje
  (Stripe, Square), ključeve usluga u oblaku (AWS pristupni ključ, Twilio,
  SendGrid, Mailgun), privatne ključeve / JWT-ove, povezne nizove koji sadrže
  vjerodajnice (`mongodb://user:pass@...` itd.) te generički uzorak vrijednosti
  zaglavlja `Authorization`/`x-api-key`/`api-key`/`apikey`. Ključevi u obliku
  zaglavlja (`authorization`, `x-api-key`, `api-key`, `apikey`) redigiraju se
  strukturno (samo vrijednost, dok se prefiks sheme poput `Bearer `/`Basic `
  zadržava), a ne putem generičkog tekstualnog regularnog izraza.
- Zaštitni mehanizam nikada ne blokira; samo mijenja
  (`modifiedPayload` / `modifiedResponse`) i dodaje napomene
  (`meta.credentialsRedacted`, `meta.count`).

Zaštita od regresije: `tests/unit/credential-masker-guardrail.test.ts`.

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
  modifiedPayload?: TValue; // vraća preCall za prepisivanje zahtjeva
  modifiedResponse?: TValue; // vraća postCall za prepisivanje odgovora
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

Zaštitna ograda signalizira "bez promjene" vraćanjem `void`, `{}`, ili
`{ block: false }`. Vraćanje `modifiedPayload`/`modifiedResponse` zamjenjuje
vrijednost koja prolazi kroz lanac za nizvodne zaštitne ograde.
`signal?: AbortSignal` prenosi životni ciklus pozivatelja u zaštitne ograde. Prekid zahtjeva je namjerna iznimka otvorenog kvara: medijski mostovi zaustavljaju rad i čišćenje bez vraćanja sirovih medija na cilj za koji se zna da ih ne podržava.

## Registar (`registry.ts`)

Singleton `guardrailRegistry` izlaže:

- `register(guardrail)` — dodaje (ili zamjenjuje normaliziranim imenom) zaštitnu ogradu i
  ponovno sortira po uzlaznom `priority`.
- `clear()` / `list()` — administrativni pomoćnici.
- `runPreCallHooks(payload, context)` — iterira aktivne zaštitne ograde, provlači
  payload kroz `modifiedPayload` i zaustavlja se na prvom `block: true`.
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
- Tijelo zahtjeva `disabledGuardrails` (najviša razina)
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

1. `resolveDisabledGuardrails(...)` gradi popis za preskakanje iz API ključa, tijela
   i zaglavlja.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` pokreće zaštitne ograde uzlaznim
   redoslijedom prioriteta:
   - Onemogućene zaštitne ograde bilježe se kao `skipped`.
   - `preCall` svake zaštitne ograde može prepisati teret putem `modifiedPayload`.
   - Prvi `block: true` kratko spaja lanac i rukovatelj vraća
     odgovor o odbijanju zaštitne ograde.
3. (Potencijalno prepisan) teret teče u kombinirano usmjeravanje i uzvodnu
   dispečersku službu.
4. Nakon što je odgovor sastavljen, `guardrailRegistry.runPostCallHooks(...)`
   pokreće isti lanac na odgovoru. `block: true` ovdje odbacuje uzvodni
   odgovor.

Zaštitne ograde koje bacaju iznimku bilježe se s `error: <message>` i bilježe putem
`logger.warn`, ali lanac se nastavlja — dizajnirano je da se otvara u slučaju kvara.

## Konfiguracija

Varijable okoline koje čitaju ugrađene zaštitne ograde:

| Varijabla                             | Koristi se od strane    | Učinak                                                                                                                           |
| :------------------------------------ | :---------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Postavite `false` da biste u potpunosti onemogućili detekciju.                                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Politika ubrizgavanja: `warn`, `block` ili `log`. Zastarjela vrijednost `redact` ne prepisuje tekst ubrizgavanja.                |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Način rada za zaštitu od ubrizgavanja; također zastavica značajke baze podataka koja **nadjačava** varijable okoline (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Minimalna ozbiljnost koju `MODE=block` odbija: `high` (zadano), `medium` ili `low`.                                              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Zastarjeli alias za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                           |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Kada je `true`, PII zahtjeva se redigira (neovisno o načinu ubrizgavanja).                                                       |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nizvodno) | Kontrolira ponašanje maskera na strani odgovora.                                                                                 |

Zaštitne ograde Modality Bridgea čitaju konfiguraciju vremena izvođenja iz pohrane postavki podržane bazom podataka
(`getSettings()`), a ne iz varijabli okoline. Primarni ključevi za Vision su
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` i
`modalityBridgeCacheMaxEntries`. Zastarjeli
`visionBridge*` ključevi prihvaćaju se samo kao dokumentirani jednociklični
povratni mehanizam čitanja; pisanja na nadzornoj ploči koriste primarne ključeve. Zadane vrijednosti i povratni
mehanizam rješavanja nalaze se u `src/shared/constants/modalityBridgeDefaults.ts`, s
zastarjelim konstantama zadržanim u `src/shared/constants/visionBridgeDefaults.ts`.

Audio koristi `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` i `modalityBridgeAudioMaxClips`, plus zajedničke
`modalityBridgeCache*` postavke. Audio nema povratni mehanizam za zastarjele ključeve jer su ti
ključevi uvedeni sa shemom Modality Bridgea.

Video koristi `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` i
`modalityBridgeVideoTimeout`, plus zajedničke `modalityBridgeCache*` postavke.
Onemogućen je prema zadanim postavkama jer su FFmpeg/ffprobe opcionalne operativne
ovisnosti, a titlovanje okvira dodaje kašnjenje i troškove modela.

## Prilagođene zaštitne ograde

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Dnevni budžet prekoračen" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Koraci:

1. Stvorite `src/lib/guardrails/myGuardrail.ts` proširujući `BaseGuardrail`.
2. Implementirajte `preCall` i/ili `postCall`.
3. Registrirajte se prilikom uvoza (push iz `registerDefaultGuardrails`) ili
   pozovite `guardrailRegistry.register(...)` tijekom izvođenja — registar zamjenjuje
   bilo koju prethodnu zaštitnu ogradu s istim normaliziranim imenom.
4. Dodajte testove pod `tests/unit/` (postojeći primjeri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Koristite `resetGuardrailsForTests()` između testova za početak iz poznatog stanja.
Proslijedite `{ registerDefaults: false }` za početak s praznim registrom i
registrirajte samo zaštitne ograde koje se testiraju. Vision Bridge prihvaća ubrizgavanje ovisnosti
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge izlaže ekvivalentne šavove za postavke, mogućnosti, odabir STT modela, provjere vjerodajnica i transkripciju. Testovi stoga mogu vježbati oba toka bez pristupa bazi podataka ili mreži.

## Vidi također

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — zajednički detektor koji pokreće
  ubrizgavanje upita i maskiranje PII
- `src/shared/constants/visionBridgeDefaults.ts` — zadane postavke Vision Bridgea i
  popis modela prisilnog premošćivanja
- `src/shared/constants/modalityBridgeDefaults.ts` — zajedničke zadane postavke Vision/Audio runtimea
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalni sloj (prekidač, hlađenja)
- `docs/reference/ENVIRONMENT.md` — potpuna referenca varijabli okoline

## Pokrivenost rute zaštite od ubrizgavanja i crveni tim (Faza 8 · Blok D)

Zaštita od ubrizgavanja (`createInjectionGuard` / `withInjectionGuard`) pokriva sve rute
koje prihvaćaju korisničke upite. Poštuje `INJECTION_GUARD_MODE` (zadano `warn` = samo zapisivanje;
`block` = vraća HTTP 400 `SECURITY_001`).

| Vrsta             | Rute                                                                                                                                                 | Zadani način rada |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Tekst (postojeći) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn              |
| Generativni       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn              |
| Podaci            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn              |

Ekstrakcija teksta (`extractMessageContents`) pokriva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Crveni tim (noćni, `nightly-llm-security.yml`):** promptfoo provjerava da svaka ruta blokira
OWASP-LLM korpus u `INJECTION_GUARD_MODE=block`; garak pokreće sonde (preskače bez tajne).
`moderations` je uključen radi dosljednosti — operatori u blok-načinu mogu ga izuzeti putem
`resolveDisabledGuardrails`.

Noćni tijek rada (`.github/workflows/nightly-llm-security.yml`, cron + ručno
pokretanje) ima dva posla:

- **`promptfoo-guard` (blokiranje)** — pokreće `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Svaki adversarijalni slučaj (npr. "zanemari sve
  prethodne upute…", jailbreakovi u DAN stilu) potvrđuje da odgovor nosi
  `error.code === "SECURITY_001"`, tj. da je zaštita stvarno odbila zahtjev.
- **`garak` (savjetodavno)** — pokreće garak `--probes promptinject,dan,leakreplay`
  protiv lokalne OmniRoute instance (`http://localhost:20128/v1`). Ograničeno tajnom
  davatelja (`PROMPTFOO_PROVIDER_KEY`); graciozno preskače i ima sufiks
  `|| true`, tako da izvještava bez neuspjeha CI-ja.

Pokrivenost pomoćne funkcije zaštite (`createInjectionGuard` / `withInjectionGuard`)
obuhvaća svaku `/v1` rutu koja nosi upit; tekst upita se izvlači iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomoću
`extractMessageContents()` u `src/shared/utils/inputSanitizer.ts`.
