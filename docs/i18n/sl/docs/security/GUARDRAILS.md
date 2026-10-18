# Guardrails (Slovenščina)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Vir resnice:** `src/lib/guardrails/`
> **Nazadnje posodobljeno:** 2026-08-29 — v3.8.51 (izvor prepisa Video Bridge določi klicatelj,
> strežnik pa ga še ne preverja — pojasnjeno skladno z #11661)

Varovala uveljavljajo varnost, pravilnike in preoblikovanje vsebine na meji
med OmniRoute in ponudniki v zaledju. Vsako varovalo lahko pregleda (in
po želji zavrne, preoblikuje ali opremi z opombami) koristne vsebine zahtev (`preCall`) ter
odzive iz zaledja (`postCall`).

Sistem je zasnovan tako, da ob napaki **dovoli nadaljevanje**: če varovalo med izvajanjem sproži izjemo, register
zabeleži napako in nadaljuje z naslednjim varovalom, namesto da bi
zahteva spodletela. Blokiranje je izrecna odločitev (`block: true`), nikoli naključje.

## Vgrajene varovalke

Register ob uvozu samodejno naloži šest varovalk po prednostnem vrstnem redu
(glejte `registry.ts` → `registerDefaultGuardrails()`):

| Prednost | Ime                 | Faza(-e)       | Datoteka              |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižje številke prednosti se izvedejo **prej**.

### Most za vid (`visionBridge.ts`) — most modalnosti PR-1

Prestrezá zahteve s slikami, namenjene **modelom brez podpore za vid**, in bodisi
preusmeri celotno zahtevo v model s podporo za vid bodisi pred klicem
nadrejene storitve zamenja slikovne dele z besedilnimi opisi, ki jih ustvari
nastavljiv model za vid. Tako lahko ponudniki, ki podpirajo samo besedilo,
pregledno obdelujejo večmodalne koristne vsebine.

Potek:

1. Preskoči, če ciljni model že podpira vid (razen če je naveden na seznamu
   modelov s prisilnim mostom `isVisionBridgeForcedModel`).
2. Izlušči slikovne dele prek `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ki obdelavo preda **enotnemu zaznavalniku
   predstavnosti** `detectMediaParts()` v `open-sse/utils/mediaParts.ts` —
   edinemu viru resnice, ki je v skupni rabi s kombiniranim filtrom
   združljivosti. Izluščanje je omejeno na dovoljene dele na vrhnji ravni v
   oblikah, ki jih lahko `replaceImageParts` vstavi nazaj (pogodba
   izlušči↔zamenjaj): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` in Responses API
   `input_image`. Ugnezdeni zadetki in oblike, ki vsebujejo samo indikatorje,
   so gradivo za kombinirani filter in se nikoli ne izluščijo. Če ni najden
   noben del, korak preskoči.
3. Razreši konfiguracijo izvajalnega okolja prek
   `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi nastavitveni ključi
   `modalityBridge*` imajo prednost; starejši ključi `visionBridge*` ostajajo
   **nadomestna možnost za en cikel** (obdobje za povrnitev). Če je most
   onemogočen, preskoči pred kakršnim koli pregledovanjem predstavnosti.
4. Izbirnik načina (`modalityBridgeVisionMode`, glejte spodnjo tabelo) odloči
   med preusmeritvijo in opisom. Preusmeritev vrne `modifiedPayload`, v katerem
   je zamenjan samo `model`, skupaj z metapodatki
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Pot opisa: omeji število slik na `maxImages`, sestavi poziv, prilagojen
   opravilu, preveri predpomnilnik opisov, pokliče model za vid **vzporedno**
   (`Promise.allSettled`) in namesto slik vstavi besedilne dele
   `[Slika N]: <opis>`. Neuspešen opis vrne `null`, izvirni slikovni del pa se
   **ohrani** (#4012) — razen na kombinirani poti opisa, kadar so vsi poskusi
   opisa neuspešni; v tem primeru potrjena nadrejena storitev brez podpore za
   vid namesto tega prejme nadomestno besedilo
   `(ni na voljo — povezan ni noben ponudnik s podporo za vid)` (#8430).
6. Vrne `modifiedPayload` in metapodatke (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Izbirnik načina (`modalityBridgeVisionMode`)

| Način      | Privzeto | Vedenje                                                                                                                                                                                                                                                                                         |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Starejša hevristika, nespremenjena (#6640/#7204): nekombinirani modeli oziroma modeli `auto/` se preusmerijo v najboljši model za vid, razen če ima izvirni model že uporabne poverilnice (takrat se uporabi opis); kombinirani cilji vedno uporabijo opis.                                     |
| `describe` |          | Vedno uporabi opis — blok za preusmerjanje se v celoti preskoči; vedno odgovori model, ki ga je izbral uporabnik.                                                                                                                                                                               |
| `reroute`  |          | Vsili preusmeritev: preverjanje, ki ohrani model s poverilnicami, se zaobide. Preverjanje poverilnic **cilja** preusmeritve še vedno velja — če ni uporabnega cilja s podporo za vid, zahteva nadaljuje po poti opisa, da neobdelane slike nikoli ne dosežejo zaledja samo za besedilo (#8430). |

Vsiljeni načini prekinejo izvajanje **pred** zagonom samodejne hevristike;
vedenje načina `auto` je bajtno enako varovalki pred PR-1.

#### Obseg ključa API (`visionBridgeKeyScope.ts`)

Kadar ključ API klicatelja omejuje `allowedConnections`, kvotne sklade
(`allowedQuotas`) ali modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most za
preusmeritev in opis izbere samo modele, ki jih ključ sme uporabljati, na
povezavah, ki jih ključ sme uporabljati. Klic za opis nato vedno poteka skozi
samozanko OmniRoute z glavo `x-omniroute-self-loop-key-id`, tako da prejemna
zahteva za klepet znova uveljavi pravilnik tega ključa za povezave in modele.
`enforceApiKeyPolicy()` to glavo upošteva samo skupaj z žetonom bearer
samozanke, zato lahko zgolj zoži dostop; identifikator, ki ga ni mogoče
razrešiti, pa je zavrnjen.

Če ključu ni dovoljen noben model za vid, se pot opisa umakne in zahteva se
nespremenjena posreduje naprej, kar je enako vedenje z dopuščanjem ob napaki
kot pri onemogočeni varovalki (metapodatki
`{ skipped: true, reason: "no_permitted_vision_model" }`). Zahteve brez ključa
in ključi brez teh omejitev se vedejo popolnoma enako kot prej.

#### Poziv za opis, prilagojen opravilu (`modalityBridgeVisionTaskAware`)

Privzeto **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) osnovnemu
pozivu za opis doda besedilo **zadnjega uporabniškega sporočila** (skrajšano na
500 znakov), s čimer opis usmeri k temu, kar je uporabnik dejansko vprašal
(vzorec codex-vision-proxy), in model vida pozove k prepisu vidnega besedila.
Če je zastavica izklopljena — ali uporabniškega besedila ni — se osnovni poziv
uporabi nespremenjen.

OpenAI-združljiva zahteva lastne zanke za opis (`callVisionModelSingle()` v
`visionBridgeHelpers.ts`) vedno zahteva `image_url.detail: "high"` — brezpogojno,
za vsakega klicatelja/ponudnika in ne glede na kakršen koli signal odjemalca.
Vzorčenje z nizko ravnjo podrobnosti poslabša natančnost OCR prav pri nalogi
prepisa besedila, ki jo zahteva ta poziv, zato sam klic za opis vedno zahteva
visoko raven podrobnosti ne glede na to, katero raven podrobnosti je uporabljala
izvirna dohodna zahteva. To vpliva samo na telo notranje zahteve za opis; ne
spreminja načina, kako OmniRoute posreduje klicateljev lastni
`image_url.detail` v primarni zahtevi — ta privzeta vrednost se uporabi ločeno
in samo za zaznane odjemalce OpenCode v `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Veja lastne zanke za opis v
žičnem formatu Anthropic nima polja `detail` in nanjo ne vpliva nobena od teh
privzetih nastavitev.

#### Omejitev izhoda opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Privzeto | Razpon            |
| ------------------------------ | -------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` ali 100–50000 |

`0` (privzeto) pomeni **brez omejitve** — opis, ki ga vrne
`callVisionModel()`, se posreduje nespremenjen, s čimer se ohrani obstoječe
vedenje. Vsaka vrednost v razponu 100–50000 skrajša opis in mu doda pripono
`…`, preden se vstavi nazaj kot `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
To vrednost zvišajte za naloge OCR z veliko podrobnostmi, pri katerih nadaljnji
model potrebuje celoten prepis; znižajte jo, da omejite porabo žetonov pri
zgovornih modelih vida. Polje na nadzorni plošči je na plošči Advanced zavihka
Vision (`modality-bridge-max-chars` v `ModalityBridgeVisionTab.tsx`) in vsako
vrednost med 1 in 99 omeji navzgor na spodnjo mejo 100, medtem ko izrecno
vrednost `0` pusti nedotaknjeno — `0` je samostojna veljavna vrednost Zod
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ne zgolj
privzeta vrednost »ni nastavljeno«.

#### Predpomnilnik opisov (`modalityBridge/bridgeCache.ts`)

Procesno deljen predpomnilnik LRU + TTL v pomnilniku za izhode opisov.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` z
okvirjanjem s predpono dolžine (brez kolizij na mejah polj). Komponenta modela
je **konfigurirani** premostitveni model, ne model, ki je dejansko odgovoril —
`callVisionModel` lahko interno uporabi nadomestni model, določanje ključa za
vsak poskus posebej pa bi razdrobilo predpomnilnik. Neuspešni opisi se nikoli ne
predpomnijo. Nastavitve:

| Ključ                           | Privzeto | Razpon  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Normalizacija oddaljenih slik (lastna zanka za opis/pridobivanje base64)

Ko most sam pridobi **oddaljeno** sliko — pri lastnem klicu za opis Anthropic
in pretvorbi v base64 za žični format Claude
(`ensureBase64ImagesForClaudeWire`), oboje prek
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — se nastali podatkovni
URI pred vdelavo v zahtevo modelu vida posreduje skozi `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`). Prevelike slike se zmanjšajo na
**2048px po daljši stranici** (kar ustreza omejitvi spreminjanja velikosti, ki
jo OpenAI/Anthropic že uporabljata na strežniški strani), kar zmanjša količino
podatkov pri nalaganju in zakasnitev, ne da bi spremenilo, kaj vidi model vida.
Spreminjanje velikosti uporablja `sharp`, naložen prek dinamičnega uvoza: na
platformi, kjer se njegove izvorne binarne datoteke ne naložijo,
`normalizeDataUri()` **nikoli ne sproži izjeme** — namesto tega nespremenjene
izvirne bajte posreduje naprej, zato pot za opis/pretvorbo v base64 vedno
deluje. Tudi bajti, ki niso slika (pridobitev, ki ni vrnila slike, primerne za
dekodiranje), se posredujejo naprej nedotaknjeni. Ta normalizacija je omejena na
slike, ki jih most pridobi za svoj lastni klic — nikoli se ne uporabi za
klicateljevo neobdelano vsebino, posredovano brez sprememb, kar je skladno z
načelom spreminjanja samo ob izrecni privolitvi (trdo pravilo št. 20).

#### Shema nastavitev + selitev

Novi ključi `modalityBridge*` se preverjajo z Zod v
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trojica
`modalityBridgeCache*` in skupina `modalityBridgeAudio*`, ki jo uporablja
Audio Bridge. Selitev `141_modality_bridge_settings.sql` kopira obstoječe
podedovane vrednosti `visionBridge*` v ustrezne nove ključe (idempotentno in
brez prepisovanja vrednosti `modalityBridge*`, ki jo je nastavil upravljavec);
podedovani ključi ostanejo eno izdajo sprejeti kot nadomestna možnost pri
branju.

#### Glava za preglednost + statistika

Odgovori, preoblikovani z opisom, vsebujejo
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(sestavi jo `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`,
doda pa jo `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Preusmerjene zahteve **nimajo** glave — vsebina je ostala nedotaknjena,
zamenjava modela pa je že vidna v polju `model` telesa odgovora.

`GET /api/modality-bridge/stats` (avtentikacija za upravljanje, ista raven kot
`GET /api/settings`) vrne števce v pomnilniku za posamezno modalnost
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` in
`video`. `averageLatencyMs` kot imenovalec uporablja `latencySamples`, ne vseh
poskusov; operacija brez merjenja časa ne ustvari navideznega
vzorca z nič milisekundami. `bridged` ostaja vzvratno združljiv vzdevek za uspešne
pretvorbe; neuspešni poskusi ga ne povečajo.
Števci se namensko ponastavijo ob ponovnem zagonu procesa
(telemetrija, ne računovodstvo).

#### Konfiguracija nadzorne plošče

Namenska stran nadzorne plošče je
`/dashboard/settings/modality-bridge`. Njeni zavihki `Vision`, `Audio`
in `Video`, do katerih je mogoče dostopati prek URL-ja, med preklapljanjem vrednosti `tab`
ohranijo parametre poizvedbe. Zavihek Vision omogoča vklop, izbiro načina in modela
(vključno s samodejno privzeto izbiro), pozive glede na opravilo, napredne omejitve
časovne omejitve/slike/dolžine opisa/predpomnilnika, izvajalne
števce in zaščiten vzorčni zahtevek. Tudi zavihek Audio je dejaven: omogoča
vklop, izbirnik modela samo za STT z možnostjo Auto, omejitve časovne omejitve/največje dolžine posnetka, zvočne
števce in vzorčni preizkus `input_audio`. Zavihek Video je funkcionalen: prikazuje
izvajalno stanje FFmpeg/ffprobe — eno od štirih izrecnih stanj uporabniškega vmesnika (`unknown`, medtem ko
preverjanje poteka ali ga ni bilo mogoče dokončati, `restricted` na gostitelju
nadzorne plošče, ki ni povratna zanka, kjer se preverjanje preskoči na strani odjemalca, `unavailable`, ko je preverjanje
končano in je odsotnost potrjena, ali `available` z različicama FFmpeg/ffprobe) — trajno shrani
omejitve vklopa/modela/sličic/videa/časovne omejitve, omeji izbirnik modelov na modele,
ki podpirajo vid, in prikaže video števce.

Nekdanja kartica Vision Bridge v nastavitvah umetne inteligence je združljivostna povezava do
nove strani; ne vsebuje več druge kopije obrazca. Media Providers prav tako
povezuje poteka dela Image-to-Text in Speech-to-Text z ustreznima zavihkoma Modality
Bridge, ne da bi odstranil obstoječe preskusno okolje Speech-to-Text.

**Obhod preverjanja sprejema za lastno zanko:** ko je klic za opis usmerjen skozi
OmniRouteovo lastno zanko `/v1` (nestandardni model ponudnika), podzahteva pošlje
`x-omniroute-admission-bypass: internal` in je avtenticirana z razrešenim
poverilom lastne zanke — lokalnim označevalcem `sk_omniroute` v lokalnem načinu ali
ključem okolja `OMNIROUTE_API_KEY` / `ROUTER_API_KEY`, ki ga konfigurira upravljavec (#1350), tako da
lahko uvedbe z `REQUIRE_API_KEY=true` še vedno izvedejo klic za opis. Obhod
je upoštevan samo za ta natančna poverila, zato zunanji odjemalci ne morejo uporabiti
glave za preskok preverjanja sprejema.

Podedovane privzete vrednosti so v `src/shared/constants/visionBridgeDefaults.ts`;
nove privzete vrednosti za način/opravila/predpomnilnik in razreševalnik nastavitev so v
`src/shared/constants/modalityBridgeDefaults.ts`. Varovalo ponuja možnost konstruktorja
`deps`, da lahko preizkusi vstavijo lažne implementacije `getSettings` in
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Prestrezanje zahtevkov za klepet, ki vsebujejo zvok, preden dosežejo cilj, za katerega ni
znano, da sprejema zvočni vhod. Zahtevka za klepet nikoli ne preusmeri: zvočni deli se
prepišejo prek obstoječe večdelne končne točke, združljive z OpenAI, izbrani
model za klepet pa nadaljuje z besedilnimi prepisi.

Potek:

1. Razreši `supportsAudio` prek `getResolvedModelCapabilities()`. Izrecni
   metapodatki registra ponudnikov imajo prednost, nato statični metapodatki modela in nato sinhronizirani
   `modalities_input`. Deklarirani seznam vhodov brez `audio` pomeni `false`; če ni
   nobenega dokaza o zmogljivosti, ostane vrednost `null`. Tako `false` kot `null` aktivirata
   konservativni most, medtem ko ga `true` obide.
2. Razreši nastavitve `modalityBridgeAudio*` in iz vseh sporočil izvleče zamenljive
   zvočne dele najvišje ravni prek skupnega detektorja `detectMediaParts()`.
   Podprte žične oblike so OpenAI `input_audio`, `audio_url` in
   `source.media_type: "audio/*"`. Ugnezdeni zvok je zaznan za usmerjanje, vendar ga
   pot zamenjave ne odstrani. Delo je omejeno z `modalityBridgeAudioMaxClips`;
   poznejši deli ostanejo nedotaknjeni.
3. Upošteva konfigurirani `provider/model` ali pa prepusti funkciji `selectAudioBridgeModel()`, da pregleda
   `AUDIO_TRANSCRIPTION_PROVIDERS` v stabilnem vrstnem redu kataloga in izbere prvi
   model z uporabnim aktivnim poverilom ponudnika.
4. `callAudioTranscription()` pretvori zvok base64/data-URI v večdelno
   datoteko `file` ali prenese oddaljeni `audio_url` prek izhodnega varovala samo za javne naslove
   s pripenjanjem DNS in omejitvijo 25 MB. Nato pošlje datoteko in izbrani
   model z metodo POST v lokalno lastno zanko `/v1/audio/transcriptions`, avtenticirano z
   `resolveSelfLoopBearer()`. Obstoječa pot za prepis izvede običajno
   iskanje poveril, obravnavo obdobja mirovanja/omejevanja hitrosti in posredovanje ponudniku.
5. Uspešni klici zamenjajo svoje dele z `[Audio N]: <transcript>`. Klici
   se izvajajo s `Promise.allSettled`: posamezna napaka ohrani izvirni
   zvočni del (pogodba #4012). Če vsi klici ne uspejo in je dokazano, da ima cilj
   `supportsAudio === false`, deli postanejo
   `[Audio N]: (unavailable — no STT provider connected)` (pogodba #8430). Pri
   neznanem cilju (`null`) ostane rezultat, pri katerem so spodleteli vsi klici, nedotaknjen. Dokazano
   besedilni cilj brez uporabnega poverila STT prejme enak izrecni
   nadomestni zapis brez izvedbe omrežnega klica.

Uspešni prepisi uporabljajo procesno skupni predpomnilnik LRU/TTL za Modality Bridge. Ključ
združuje sklic na zvok, stabilno oznako operacije `audio-transcription`
in izbrani model STT; napake se nikoli ne predpomnijo. Poskusi z zvokom posodobijo
skupne števce `bridged`, `cacheHits`, `failures` in `lastUsedAt`.
Preoblikovani odgovori vsebujejo
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nedotaknjeni
zahtevki ne prejmejo segmenta Audio Bridge.

Izvajalne nastavitve so shranjene v zbirki podatkov in preverjene z Zod:

| Ključ                         | Privzeto | Razpon               |
| ----------------------------- | -------- | -------------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                    |
| `modalityBridgeAudioModel`    | `""`     | Samodejno ali ID STT |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000          |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10                 |

Skupni predpomnilnik še naprej nadzorujejo `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` in `modalityBridgeCacheMaxEntries`.

### Videomost (`videoBridge.ts`, `videoBridgePipeline.ts`)

Prestrezajo videodele na najvišji ravni v `messages` API-ja Chat Completions in
`input` API-ja Responses, preden je poklican ciljni sistem brez znane izvorne
podpore za video. Podprte oblike so `input_video`, `video_url`, `video_source`,
URL-ji HTTPS in podatkovni URI-ji `data:video/*;base64,...`. Navadna imena datotek
v besedilu se ne obravnavajo kot video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) skrbi za prečkanje zahteve,
preverjanje zmogljivosti/pravilnika, združevanje za posamezno zahtevo in koristno
vsebino odgovora. Delo za posamezen video — pridobivanje, predpomnilnik celotnih
rezultatov, opisovanje zaporedja sličic (ki združi morebitni prepis zvoka, ki ga
je navedel klicatelj) ter metrike/prekinitev/čiščenje za posamezen poskus — je
skrito za `processVideoPart` v `videoBridgePipeline.ts`, ki se pokliče enkrat za
vsak videodel znotraj zanke funkcije `preCall`. Ta modul določa tudi izrecne meje
vrat `VideoMediaBrokerPort` (pridobivanje bajtov in izločanje vzorčenih sličic),
`VideoAudioTranscriptionPort` (združevanje prepisa zvoka, ki ga je navedel
klicatelj, z vzorčenimi opisi) in `VideoDrilldownPort` (meja trajne hrambe za
podrobni pregled sličic; še ni povezana s `processVideoPart` — trenutno vnose
podrobnega pregleda zapisuje samo ločena pot
`/api/modality-bridge/video/drilldown`).

Javna pot zahtev `/v1` nikoli ne uvozi ali prikliče podprocesa. Oddaljeni
videoposnetki se prenesejo z omejitvijo 50 MiB; vdelani videoposnetki base64
imajo konservativno omejitev 36 MiB dekodiranih podatkov na video, tako da lahko
ovojnica modela/sporočil/uokvirjanja ostane znotraj javne omejitve 50 MiB za
sprejem zahtev JSON. Dolžina vdelanih podatkov in ocene dekodirane velikosti se
preverijo pred dodelitvijo pomnilnika. HTTPS je zahtevan za začetni oddaljeni
URL in vsako preusmeritev, pri čemer se uporablja obstoječa zaščita za izhodne
povezave samo do javnih naslovov s pripenjanjem DNS. Bajti nato prečkajo točno
določeno notranjo posredniško mejo `POST /api/modality-bridge/video/extract`.
Ta pot je hkrati `LOCAL_ONLY` in `SPAWN_CAPABLE`, sprejema samo overjeno zahtevo
zaupanja vredne povratne zanke za posamezni proces ter nikoli ne sprejme URL-ja,
poti datotečnega sistema, izvršljive datoteke ali seznama argumentov. Cevovod
API-ja za velikost telesa in postopni bralnik telesa v obdelovalniku neodvisno
uveljavljata omejitev 50 MiB za posredniški vhod. Njegova omejena čakalna vrsta
izvaja eno izločanje naenkrat, dovoljuje štiri čakajoča opravila in omejuje
čakajoči vhod na 100 MiB.

Znotraj posrednika `ffprobe` bere zasebno lokalno datoteko; nespremenljiv seznam
dovoljenih formatov izključuje formate seznamov predvajanja in manifestov. Pri
dovoljenih vsebnikih družine MOV so zunanji sklici na podatke MOV privzeto še
naprej onemogočeni, nespremenljivi ukaz pa jih ne omogoča. Tako `ffprobe` kot
`ffmpeg` uporabljata seznam dovoljenih protokolov, omejen samo na `file`, eno
nit, nespremenljiva polja argumentov, brez lupine in izvršljive datoteke,
razrešene iz `PATH`. Tokovi priloženih naslovnih slik niso kandidati za
predvajanje. Vsi tokovi, ki jih je mogoče predvajati, morajo izpolnjevati
omejitve, izrecni privzeti tok pa ima prednost pred deterministično nadomestno
izbiro toka z najnižjim indeksom. Videoposnetki so omejeni na 600 sekund, 8.192
slikovnih pik na dimenzijo in 33.554.432 izvornih slikovnih pik. FFmpeg vzorči
1–16 središčnih sličic JPEG, zmanjša daljši rob na največ 1.024 slikovnih pik,
ne da bi povečal manjše vhode, in nikoli ne prejme URL-ja. Vzorčenje je privzeto
`uniform`. Izbirna pravilnika `scene_aware` in poskusni `segment_aware` izvedeta
en dodaten nespremenljiv prehod FFmpeg čez že preverjeni lokalni tok, izbereta
omejene časovne žige prizorov `showinfo` in se ob napaki detektorja, časovni
prekoračitvi, nepravilno oblikovanem izhodu ali praznem naboru kandidatov
deterministično vrneta na ista enakomerna središča. Način, ki upošteva segmente,
dodeli središčne vzorce sorazmerno s preverjenimi intervali prizorov; dokazi za
upoštevanje segmentov in nadomestno vedenje so podrobno opisani spodaj. Stroga
omejitev 16 sličic se pri vsakem pravilniku uporabi po izboru. Ko ima zahteva, ki
upošteva prizore, proračun le ene sličice, uporabi enakomerno središče aktivnega
okna celotnega videoposnetka ali okna fokusa in sporoči `policyEffective:
uniform`: ena sama izbrana sličica prizora ne more ohraniti obeh časovnih
koncev. Klicatelj lahko po želji navede končno okno fokusa (`start`/`end` v
sekundah); meje se omejijo na trajanje medija, obrnjena ali nekončna okna se
zavrnejo, vsi pravilniki vzorčenja pa se izvedejo samo znotraj normaliziranega
intervala. Nastalo okno je vključeno v metapodatke vzorčenja in v predpono
nezaupanja vrednega opisa, da lahko nadaljnji modeli razlikujejo osredotočeni
izsek od celotne časovnice.

Semantični fokus opisov je ločena, izrecna nastavitev. Privzeti način analize
`full` ohrani obstoječi poziv za sličice in nikoli ne posreduje besedila zahteve
modelu za opise. V načinu `focused` most prebere samo najnovejši neprazni
`text`/`input_text`, ki ga je napisal uporabnik, iz istega vsebnika Chat ali
Responses, ga normalizira v NFC, strne krmilne znake in presledke ter omeji na
500 kodnih točk Unicode. Prazen rezultat povzroči vrnitev na natančno isti
poziv `full`. Uporaben namig se serializira kot JSON v namenskem bloku
nezaupanja vrednega uporabniškega konteksta in lahko samo prednostno razvrsti
opazne podrobnosti; ne more preglasiti ločenega opozorila, naj se ne sledi
navodilom, ki so vidna ali slišna v mediju. Besedilni fokus nikoli ne sklepa
`start`/`end` in ne spreminja časovnega vzorčevalnika.

#### FU-07 strukturni dokazi segmentov

`segment_aware` uporablja en omejen prehod predhodne analize nad že preverjenim
lokalnim videotokom. Fiksna veriga filtrov najprej zmanjša širino na največ 320
slikovnih pik, zazna spremembe prizorov in zamrznjene intervale, nato pa vzorči
s hitrostjo 1 sličice na sekundo za ugotavljanje zamegljenosti, povprečne
svetilnosti ter prostorskih/časovnih informacij. Prehod je omejen na 600
strukturnih vzorcev, eno nit FFmpeg/filtrov, isti protokol, omejen izključno na
`file`, in sezname dovoljenih vsebnikov, 1 MiB izhoda procesa ter največ 30
sekund znotraj skupne prekinitve/roka posrednika. Nikoli ne sprejme ukaza,
filtra, poti ali URL-ja iz zahteve.

Strukturne vrednosti so deterministični vzorčni dokazi, ne semantično
razumevanje videoposnetka. Ne sklepajo o subjektih, dejanjih, podnapisih,
govoru ali nameri uporabnika. Meje prizorov in zamrznitev tvorijo segmente;
pokritost z zamrznitvijo, zamegljenost, osvetlitev, prostorske podrobnosti in
časovne spremembe vplivajo samo na način razporeditve obstoječega proračuna
1–16 sličic. Popolnoma zamrznjen segment je omejen na eno sličico, nezamrznjeni
segmenti pa tekmujejo za preostali proračun. Kadar je mej več kot sličic, se
ohrani enakomerna pokritost časovnice, tako da hitri zgodnji rezi ne morejo
skriti dolgega končnega segmenta. Meje prizorov, ki so znotraj 1-sekundne
ločljivosti analize glede na mejo zamrznitve, se združijo.

Manjkajoči filtri, nepravilno oblikovani/prazni dokazi, napaka detektorja ali
časovna omejitev omejene predhodne analize se obravnavajo odprto z uporabo
natančno enakega pravilnika enakomernih srednjih točk. Prekinitev klicatelja
ali rok posrednika se ne obravnavata odprto: zaključita podproces, ki se izvaja,
preprečita poznejše pridobivanje sličic, zasebno začasno drevo pa se odstrani
v `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` ustvari deterministične dejanske
preskusne primere FFmpeg za prihranke klicev za opise po odstranjevanju
dvojnikov, razporejanje proračuna pri gostem gibanju, dokaze o
zamegljenosti/osvetlitvi/SI-TI, hitre reze z dolgim končnim delom in lažno
pozitivne rezultate pri postopnih prehodih. Beleži stenski čas predhodne analize
ter, kjer je na voljo `/usr/bin/time`, procesorski čas podrejenega procesa in
največjo vrednost RSS. Njegova preverjanja kakovosti so samo strukturni oraklji.
Kakovost dejanskega modela za opise ostaja `HOLD`, ker ta preizkusni okvir nima
pooblaščene končne točke ali zamrznjenega ocenjevalnika. Tudi denarni prihranki
ostajajo `HOLD`, razen če `--caption-cost-per-call-usd` poda izrecno pozitivno
oceno stroška na klic; skript nikoli ne ponaredi nobenega od teh rezultatov.

Vsaka sličica je omejena na 4 MiB, vse neobdelane sličice skupaj na 23 MiB,
serializiran odgovor posrednika pa na 32 MiB. Zasebni začasni imenik se odstrani
v `finally`. OmniRoute ne vključuje FFmpeg in ne sprejema poti do izvedljive
datoteke po meri. Pred ustvarjanjem opisov most izvede konservativen prehod
vizualnega odstranjevanja dvojnikov: vsaka slika JPEG se zmanjša na sivinski
medpomnilnik velikosti 16×16 in primerja samo z zadnjo ohranjeno sličico. Pri
zahtevanem proračunu opisov nad eno sličico pridobivanje zagotovi omejeno
množico kandidatov, ki obsega največ dvakratnik tega proračuna in nikoli več kot
16 sličic. Zahtevana zgornja meja se uporabi šele po odstranjevanju dvojnikov,
pri čemer se med končnim redčenjem ohranita prvi in zadnji izbrani kandidat, če
proračun znaša vsaj dve sličici. Različicami opredeljeni pravilnik
`grayscale-16x16-mean-cells-v2` uporabi večjo vrednost med povprečno spremembo
svetilnosti in deležem celic sličice, katerih normalizirana sprememba znaša vsaj
0,05. Prag za dvojnike je konstanta 0,04, izbrana zaradi predvidljivosti in ne
izpostavljena kot nastavitev med izvajanjem. Ta sekundarni signal visokega
kontrasta ohrani majhne premike in spremembe vidnega besedila, ki jih lahko
primerjava samo na podlagi povprečja skrije. Napake primerjalnika ali
dekodirnika se obravnavajo odprto in ohranijo pokritost. Izhodni metapodatki
ločujejo pridobljene kandidate, uspešno uporabljene sličice in odstranjene
vizualne dvojnike.

Izrecno označen del videoposnetka lahko zahteva kontaktni list s časovnimi
oznakami. Most sestavi mrežo JPEG z največ 4 stolpci in 16 sličicami. Vsaka
celica velikosti 512 slikovnih pik v spodnji pas z visokim kontrastom vriše
časovno oznako svojega vira, iste časovne oznake pa ostanejo v besedilnih
metapodatkih za nadaljnje povezovanje in revizijo. Celotna slika JPEG ostane
omejena na 32 MiB. Če `sharp` ne more dekodirati ali sestaviti mreže, most
preklopi nazaj na posamezne sličice JPEG; prekinitev odjemalca se še vedno
razširi skozi operacijo nad kontaktnim listom.

Dokazi za uvedbo so namerno ločeni od sintetičnega mikromerila sestavljanja.
`scripts/perf/video-bridge-contact-sheet-eval.ts` opredeljuje preizkusni okvir
A/B z različicami sheme za dejanske modele vida, združljive z OpenAI. Meri
žetone, ki jih sporoči ponudnik, stensko zakasnitev od začetka do konca
(vključno s sestavljanjem kontaktnega lista), število klicev modela in ohranitev
dejstev, opredeljeno v manifestu. Neobdelani odgovori modela se ne zapišejo v
poročilo; ohranijo se samo izvlečki SHA-256 in ID-ji ujemajočih se dejstev.
Preizkusni okvir ne izvede nobenega omrežnega ali plačljivega klica modela,
razen če je podan `--execute-real` in so konfigurirani `--model`,
`OMNIROUTE_BASE_URL` ter `OMNIROUTE_API_KEY`. Brez takega izrecnega dejanskega
izvajanja njegov strojno berljiv rezultat ostane `HOLD`; sintetične meritve
koristnega tovora/števila klicev same po sebi niso dokaz za uvedbo.

Klicatelji lahko podprtemu delu videoposnetka priložijo izbirno polje
`transcript.cues`, kadar že imajo časovno poravnano besedilo. Vsak znak mora
vsebovati `text`, končen interval `start`/`end` znotraj preverjenega trajanja in
`source` z dovoljenega seznama (`client`, `embedded` ali `audio-bridge`);
privzeta vrednost `confidence` je `1` in mora ostati med `0` in `1`. Popolnoma
enaki znaki se združijo. OmniRoute iz teh metapodatkov nikoli ne zažene
prepisovanja: preverjeni znaki se kopirajo v opisani rezultat skupaj z virom,
zaupanjem in intervalom ter upodobijo kot nezaupanja vredna opažanja poleg
opisov sličic. Neveljavno besedilo, besedilo zunaj razpona ali brez podatkov o
izvoru se zavrne, namesto da bi bilo vključeno v tok opisov. Oba kanala prepisa
v telesu zahteve normalizirata podani izvor na `client`, vključno s samodejno
navedenimi oznakami `embedded` ali `audio-bridge`. Samo prilagojevalnik pod
nadzorom strežnika lahko te zaupanja vredne oznake dodeli prek argumenta
`trustedSource`, dostopnega samo iz kode; polje JSON v zahtevi ne more doseči
tega argumenta. Besedilo prepisa ostane nezaupanja vredna vsebina, izpeljana iz
predstavnosti, ne glede na njegov izvor, in nikoli ne sme določati pooblastil.

Napredni klicatelj lahko za isti videoposnetek zagotovi sled `audioTranscript`;
obravnava se kot besedilo, ki ga zagotovi odjemalec, in ne kot dokaz strežniškega prepisovanja.
Spojitveni sloj izvaja vizualna in zvočna opažanja znotraj
enega roka in prekinitvenega signala, jih razvrsti na skupni časovnici, združi
povsem enake dvojnike ter sporoči delni rezultat, kadar uspe le ena stran.
Neveljaven `audioTranscript` se pretvori v tak delni rezultat — vizualni
opis se ohrani, zvočna veja pa zabeleži sanitizirano kodo napake —
namesto da bi spodletela obdelava celotnega videoposnetka. Razpoložljivost posameznih vej, oznaka delnega rezultata
in sanitizirane kode napak se ohranijo v opisanem rezultatu, v
metapodatkih varovalnega mehanizma (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), v metapodatkih predpomnilnika rezultatov in v števcih
spajanja mostu. Privzeta pot Video Bridge ne uporablja pretvorbe govora v besedilo
in ne prenese druge kopije predstavnosti; brez te izrecno podane sledi ostane
omejena samo na videoposnetek.

**Hramba prepisa (#12150 P1).** To se samodejno uporabi vedno, ko
Video Bridge (ki je sam po sebi izbiren) upodobi oznako prepisa — ločena
zastavica za hrambo ne obstaja. Ko zahteva upodobi katero koli oznako prepisa (klicateljev
`transcript` ali spojeni `audioTranscript`), jo varovalni mehanizem označi kot
`videoBridgeObserved` in ustvari redigirano senčno kopijo opisa videoposnetka —
enako upodobitev, v kateri je telo prostega besedila vsake oznake zamenjano z
`[redacted-video-transcript]`, ustvarjeno z zamenjavo strukturiranega polja oznake,
preden se sestavi niz (nikoli z razčlenjevanjem sploščenega besedila, zato nobena vsebina
oznake — zlonamerna ali običajna, vključno s telesi, ki vsebujejo `]`, kot sta
`[inaudible]`/`[music]` — ne more ostati). Telo zahteve v trajno shranjenem dnevniku klicev
zamenja vsak besedilni del, izpeljan iz videoposnetka, s to redigirano senčno kopijo, pri čemer
se ujemanje izvede po enakosti vsebine; sidro `fullText` se znova prebere iz dokončane vsebine
varovalnega mehanizma pred klicem, zato ujemanje uspe tudi po tem, ko poznejši varovalni mehanizmi
v verigi (maskirniki osebno določljivih podatkov in poverilnic s prioritetama 10/95) sproti prepišejo
besedilo opisa, ter po tem, ko vbrizgavanje sistemskega poziva/predaje/pomnilnika preoblikuje
polje sporočil. Telo, poslano navzgor do modela, ostane nespremenjeno. Opažena zahteva prav tako
ne napolni trajnega pomnilnika Memory (preskoči se pridobivanje tako iz zahteve kot iz odgovora),
zato modelov lastni odgovor ne more ponoviti besedila prepisa v Memory.

**Neobdelana polja videoposnetka (#12430).** Ko je most omogočen in je izvorna podpora za videoposnetke neznana ali je ni, definirani polji `transcript`/`audioTranscript` prav tako aktivirata `videoBridgeObserved`, tudi po neuspelem opisu ali omejitvi `maxVideos`. `null` in prazni nizi štejejo; odsotna polja in metapodatki, ki niso povezani z videoposnetkom, ne. Shranjene kopije ta polja redigirajo ali zahtevo izpustijo, predpomnilniki/Memory pa se obidejo.

Na teh nadomestnih poteh veljavne oznake, ki jih zagotovi klicatelj, postanejo podprti deli `text`/`input_text`
namesto nestandardnih polj ponudnika. Obe sledi, podani v zahtevi,
ostaneta nezaupanja vredni opažanji `client` z izrecnim opozorilom, da videoposnetek
ni bil opisan in da časovni žigi niso bili preverjeni glede na predstavnost. Obstoječe
omejitve 256 oznak/64 KiB skupno in omejitve na oznako veljajo za obe sledi skupaj;
časovni žigi morajo ustrezati 600-sekundni zgornji meji posrednika in morebitnemu podanemu
oknu fokusa. Neveljavne sledi se zavržejo in se ne posredujejo kot poljubno besedilo; veljaven
sorodni element je še vedno mogoče uporabiti, razen če je njun skupni proračun presežen. Ničelna/prazna
polja ne dodajo besedila. Ta nadomestna pot ne doda pridobivanja predstavnosti ali prepisovanja.
Razširitvena polja prepisa se odstranijo iz nadomestnega nosilca videoposnetka in njegovih
objektov `video_url`/`source`. Seznam dovoljenih elementov za prenosni format OpenAI ostane strog; nosilci
videoposnetkov z neznano izvorno podporo ostanejo na voljo, znani cilji, ki podpirajo samo besedilo, pa ohranijo varne oznake.
Strukturirane redigirane senčne kopije ščitijo dodano besedilo prepisa, medtem ko
izvorna zahteva v lasti klicatelja ostane nespremenjena. Cilji z izvorno podporo in
onemogočeni mostovi ohranijo obstoječe obnašanje obhoda.

Dodatne shranjene kopije uporabljajo isti signal opažene zahteve. Neobdelani
posnetek odjemalčeve zahteve pred varovalnim mehanizmom, čakajoča zahteva v pomnilniku in dnevnik
zgodaj zavrnjene zahteve strukturno zamenjajo polja prepisa v delih videoposnetka;
besedilni pozivi, ki jih ustvarijo stopnje cevovoda in predaja konteksta, se redigirajo
na ponoru trajno shranjenega telesa zahteve. Trajno shranjena oznaka `video_content_removed`
povzroči, da se nadaljevanje `previous_response_id` varno zavrne, namesto da bi rekonstruiralo
besedilo, ki je bilo namenoma zavrženo. Če opažena zahteva pred beleženjem izgubi svojo
redigirano senčno kopijo za posamezni del ali če se po poznejših spremembah zahteve ne ujema
niti ena od več senčnih kopij videoposnetka, se shranjeno telo zahteve
v celoti izpusti, namesto da bi se ohranil le delno redigiran prepis.

Pri opaženi zahtevi lahko odgovor modela citira kateri koli del
prepisa brez strukturirane meje oznake. Njegovo trajno shranjeno polje dnevnika klicev
`responseBody` se zato zamenja z oznako izpustitve; podroben
artefakt cevovoda (ki lahko vključuje telesa nadrejenega sistema/odjemalca in pretočne dele)
se ne shrani. Semantični predpomnilniki, predpomnilniki idempotentnosti in predpomnilniki ponovnega predvajanja sklepanja
za to zahtevo obidejo branja in pisanja. Zahteva ponudniku in
odgovor, viden odjemalcu, ostaneta nespremenjena. Zgodnji bajti za ohranjanje povezave se izpraznijo iz začasnega
medpomnilnika, ko je podrobni artefakt izpuščen. Kirovo opozorilo o nepravilno oblikovanem EventStream
sporoči samo število bajtov koristne vsebine, nikoli njene vsebine ali neobdelane napake
razčlenjevalnika JSON.
To ne pomeni, da so bile pregledane vse nepovezane diagnostike ponudnikov/vtičnikov;
širši pregled ponorov za hrambo se spremlja v #11658.

Notranji življenjski cikel `/api/modality-bridge/video/drilldown` je ločena predpomnilniška podlaga, overjena prek povratne zanke/žetona. Vsaka operacija zahteva tudi kanonični neprosojni ID principala. Preden je produkcijski klicatelj omogočen, mora ta ID izpeljati iz overjenega najemnika in nikoli ne sme posredovati vrednosti, ki jo je izbral odjemalec. Ključi predpomnilnika povežejo tega principala s kanoničnimi ID-ji sej in sklicev na videoposnetke, shranjujejo samo njihove ključe, izpeljane s SHA-256, ter omejujejo tako branje kot brisanje na istega principala. Predpomnilnik shrani največ 16 izpeljanih sličic JPEG na vnos, jih po desetih minutah odstrani in podpira omejena branja `start`/`end` ali izrecno brisanje seje.

Vsak principal je omejen na 16 vnosov in 64 MiB kanoničnih podatkov JPEG. Te omejitve so neodvisne od globalne zgornje meje 64 vnosov/256 MiB: pritisk kvote principala odstrani samo najmanj nedavno uporabljene vnose tega principala, preden se upošteva globalno odstranjevanje LRU. Potekli vnosi se ob dejavnosti predpomnilnika odstranijo tako iz obračuna principala kot iz globalnega obračuna, medtem ko preklic in neuspešno preverjanje veljavnosti ne potrdita delne zamenjave.

Predpomnilnik zavrne nekanonični Base64, odvečno dopolnjevanje, vsebino, ki ni JPEG, nepravilno oblikovane ali okrnjene datoteke JPEG ter datoteke JPEG, ki med omejenim dekodiranjem celotne slike z `sharp` povzročijo opozorilo. Vsako sprejeto sliko ponovno kodira kot kanonični JPEG, širino in višino izpelje iz dekodiranih bajtov, namesto da bi zaupal poljem klicatelja, ter zavrže vse končne poliglotske bajte, namesto da bi jih obdržal. Obe kvoti se bremenita samo za omejeni kanonični stisnjeni medpomnilnik. Omejitev prenosa JSON vključuje režijske stroške Base64 za zgornjo mejo dekodiranega vhoda 32 MiB. Vsaka shranjena izpeljava beleži svoj preverjeni format/ločljivost JPEG, pravilnik vzorčenja, različico izpeljave, čas ustvarjanja, zgoščeno vrednost vsebine, ki jo izračuna strežnik, in zgoščeni nadrejeni sklic skupaj z zgoščeno vrednostjo nadrejene vsebine zaupanja vrednega klicatelja. Preklic se preveri med asinhronimi fazami dekodiranja/izračuna zgoščene vrednosti pred atomsko potrditvijo v predpomnilnik.

Ta sklop še ne povezuje produkcijskega proizvajalca s potjo in ne zagotavlja izbire različic z več ločljivostmi. Pregledna pot zahteve Video Bridge zato ne povzroča dodatnega dela, medtem ko izpeljava principala, vezanega na najemnika, in celoten življenjski cikel FU-08 z več ločljivostmi ostajata izrecno nadaljnje delo, namesto da bi bila dokumentirana kot dokončano vedenje.

Sličice so zaporedno opremljene z opisi z uporabo konfiguriranega modela Video. Prazna preglasitev Video podeduje nastavitev Vision; če sta obe prazni, samodejni usmerjevalnik Vision izbere dejanski model, ki podpira vid. Uspešni opisi nadomestijo izvirni del s stabilno predpono `[Video description:`, ki besedilo označi tudi kot nezaupanja vredno opažanje, izpeljano iz predstavnosti, in nadaljnjim modelom naroči, naj ne sledijo navodilom, najdenim v predstavnosti. Ključi predpomnilnika opisov sličic vključujejo bajte JPEG, poziv, časovni žig in dejanski model; v predpomnilnik se shranijo samo uspešni opisi. Vnosi predpomnilnika ohranijo dejanski uspešni model proizvajalca, vključno z nadomestnim modelom; most sporoči `mixed`, kadar so različne sličice ustvarili različni modeli. Zadetek v predpomnilniku znova uporabi to identiteto proizvajalca, namesto da bi jo preimenoval v zahtevani načrt usmerjanja. Predpomnilnik rezultatov za celoten videoposnetek uporablja ključ, ki temelji na vsakem vhodu, ki spremeni izhod — pozivu, dejanskem modelu, pravilniku vzorčenja, številu sličic, načinu semantične analize, prstnem odtisu SHA-256 normaliziranega namiga za osredotočenje, oknu osredotočenja, `transcript`, `audioTranscript` in zastavici kontaktnega lista — zato sprememba katere koli od teh razsežnosti povzroči zgrešitev predpomnilnika, nikoli ponovne uporabe zastarelega rezultata. Različica pravilnika za vizualno odstranjevanje dvojnikov, prag in omejeno število kandidatnih sličic so prav tako izrecno vključeni v ključ in metapodatke predpomnilnika rezultatov; sprememba pravilnika zato ne more ponovno uporabiti zastarelega opisa celotnega videoposnetka. Metapodatki predpomnilnika rezultatov v4 ohranijo način in prstni odtis, nikoli pa neobdelanega uporabnikovega opravila. Metapodatki varovalnega mehanizma poročajo tako o zahtevanem kot o dejanskem načinu analize; zahtevani način `focused` brez uporabnega uporabniškega besedila je sporočen kot dejansko `full`.

Varovalni mehanizem izvleče vsak podprti video del, vendar jih opiše največ `modalityBridgeVideoMaxVideos`. Za cilj, za katerega je dokazano, da ima `supportsVideo === false`, neuspešni videoposnetki in videoposnetki nad omejitvijo postanejo izrecne varne besedilne oznake, tako da ne ostane noben neobdelan videoposnetek. Kadar zmožnost ni znana, ti deli ohranijo svoj video nosilec; vsak nadomestni prepis sledi zgornji omejeni pretvorbi besedila. Cilji z `supportsVideo === true` obidejo most. Signal za prekinitev odjemalčeve zahteve se razširi skozi prenos, čakalno vrsto posrednika, podprocese in klice za opisovanje; prekinitve ustavijo obdelavo med videoposnetki in nikoli ne povzročijo odprtega nadaljevanja z neobdelano predstavnostjo.

Nastavitve izvajalnega okolja so shranjene v podatkovni zbirki in preverjene z Zod:

| Ključ                               | Privzeto    | Razpon / vedenje                                                                                            |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Izbirno izvajalno okolje, omogočeno na zahtevo                                                              |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ohrani splošne podnapise; `focused` uporablja omejen, nezaupanja vreden kontekst zadnjega uporabnika |
| `modalityBridgeVideoModel`          | `""`        | Podeduje model Vision Bridge                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                        |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ali sorazmerni `segment_aware`; ob napaki detektorja se uporabi `uniform`          |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                         |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                              |

Starejše trajno shranjene vrednosti časovne omejitve za Video, daljše od 120 sekund, so omejene na
rok posrednika; novi zapisi nastavitev nad to omejitvijo so zavrnjeni.
`GET /api/modality-bridge/video/runtime` pred preverjanjem pristnosti ali preverjanjem izvajalnega okolja
zahteva zaupanja vredno, označeno lokalnost povratne zanke, nato pa zahteva skrbniško
preverjanje pristnosti. Vrne samo `available`, prečiščene različice FFmpeg/ffprobe in nespremenljiv
razlog, kadar izvajalno okolje ni na voljo. Notranja končna točka za ekstrakcijo ni
javni API za nalaganje: zasičenost čakalne vrste vrne `503` skupaj z `Retry-After`, prekinitev povezave
klicatelja vrne `499`, nespremenljiv rok posrednika pa vrne `504`. Pretvorjeni odgovori dodajo
`video->text;model=<visionModel>;parts=<videos>` v osrednjo glavo
`x-omniroute-modality-bridge`, ne da bi odstranili segmente Vision ali Audio.

### Maskirnik PII (`piiMasker.ts`)

Izvaja se v **obeh** fazah.

- **`preCall`** klonira koristno vsebino, prehodi `system`, `messages`, `input` in
  `prompt` (vključno z elementi, ki so navadni nizi) ter uporabi `processPII()` (iz
  `@/shared/utils/inputSanitizer`) za polja `content`/`text` z vrednostmi nizov. Ko je
  `PII_REDACTION_ENABLED=true`, so zaznani osebno določljivi podatki v odhodni
  koristni vsebini redigirani. To je neodvisno od `INPUT_SANITIZER_MODE` (ki nadzoruje samo
  pravilnik vbrizgavanja pozivov). Ko je redigiranje izklopljeno, klic zabeleži število
  zaznav brez spreminjanja vsebine.
- **`postCall`** globoko klonira odgovor ter zažene `sanitizePIIResponse()` in
  maskirnik oblike Responses API (`maskResponsesOutput` — zajema
  `output_text` in `output[].content[].text`). Če pride do redigiranja,
  spremenjeni odgovor nadomesti izvirnega.

Varovalni mehanizem nikoli ne blokira; samo doda opombe (`meta.detections`,
`meta.redacted`) ali prepiše vsebino.

### Vbrizgavanje pozivov (`promptInjection.ts`)

Zazna nasprotniške strukture v vsebini, ki jo posreduje uporabnik, in uveljavi
nastavljeni pravilnik. Vedenje določajo spremenljivke okolja in možnosti
konstruktorja:

| Nastavitev      | Spremenljivka okolja                                                                                     | Privzeto | Učinek                                                                                                                                                                                                 |
| --------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Omogočeno       | `INPUT_SANITIZER_ENABLED`                                                                                | `true`   | Ko je `false`, se varovalni mehanizem takoj zaključi.                                                                                                                                                  |
| Način           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                          | `warn`   | Pravilnik vbrizgavanja: `block`, `warn` ali `log`. (`redact` je sprejet zaradi združljivosti za nazaj, vendar **ne** odstrani besedila vbrizga; prepis PII zahteve nadzoruje `PII_REDACTION_ENABLED`.) |
| Prag blokiranja | Možnost `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (vzdevek `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Najmanjša resnost, potrebna za blokiranje. Pri privzeti nastavitvi je srednja resnost namenjena samo opazovanju.                                                                                       |

**Prednostna razvrstitev načinov** (`getMode`): klicateljev `options.mode` →
**preglasitev z zastavico funkcije v zbirki podatkov** za `INJECTION_GUARD_MODE` (Nadzorna plošča → Nastavitve →
Zastavice funkcij) → spremenljivka okolja `INJECTION_GUARD_MODE` → spremenljivka okolja `INPUT_SANITIZER_MODE` →
`warn`. Preglasitev na nadzorni plošči ima zato prednost pred spremenljivkami okolja, tako da uporabniški vmesnik
Zastavice funkcij sproti nadzoruje delujoči varovalni mehanizem (brez ponovnega zagona). Branje iz zbirke podatkov je varno ob napaki:
če pride do napake, varovalni mehanizem uporabi vedenje na podlagi spremenljivk okolja, kadar pa
preglasitev ni nastavljena, je vedenje enako razreševanju samo na podlagi spremenljivk okolja.

Viri zaznavanja:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (skupen nabor detektorjev,
   uporabljen tudi drugod v cevovodu).
2. Vgrajeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` in
   `markdown_system_block`, oba z resnostjo `high`).
3. Izbirni `customPatterns`, posredovani prek možnosti konstruktorja (nizi, regularni izrazi
   ali zapisi `{ name, pattern, severity }`).

Ko je `mode === "block"` **in** vsaj ena zaznava doseže prag resnosti,
`preCall` vrne `{ block: true, message: "Request rejected:
suspicious content detected" }`. V načinih `warn`/`log` varovalo dogodek zabeleži, vendar
dovoli klic. Skupna pomožna funkcija `evaluatePromptInjection()` je prav tako izvožena
za klicatelje, ki morajo ovrednotiti pozive, ne da bi uporabili register.

**Omejitev pregledovanja (v3.8.20):** detektor pregleda samo **prvih 16 KB**
združenega besedila poziva — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtov) v
`src/shared/utils/inputSanitizer.ts`. Tako `detectInjection()` kot
`evaluatePromptInjection()` pred izvajanjem zanke vzorcev uporabita
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Direktive za vrivanje so blizu vrha vnosa, zato to
omeji porabo CPU-ja/GC-ja zaradi regularnih izrazov pri več sto KB velikih koristnih vsebinah, ne da bi oslabilo zaznavanje (prim.
#3932, #4041).

### Maskirnik poverilnic (`credentialMasker.ts`)

Izvaja se v **obeh** fazah, kot zadnji v privzeti verigi (prioriteta `95`). Iz odhodne
koristne vsebine (vsebine sporočil, argumentov klicev orodij, rezultatov orodij) **in**
odgovora ponudnika odstrani dobro znane vzorce ključev API / skrivnih žetonov, tako da
poverilnica, prilepljena v poziv (ali vrnjena v rezultatu orodja), ne uide
zunanjemu ponudniku ali nazaj odjemalcu.

- **Samo z izrecnim vklopom**, po istem dogovoru kot pri odstranjevanju PII (sorodno
  strogemu pravilu št. 20): onemogočeno je, razen če velja
  `settings.credentialRedactionEnabled === true` **ali**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ko je izklopljeno, varovalo ne naredi ničesar —
  nikoli ne blokira in nikoli ne prepisuje.
- `redactCredentials()` prehodi celotno drevo koristne vsebine/odgovora (`walkValue()`,
  varno pred onesnaženjem prototipa, varno pri ciklih z uporabo `WeakSet`) in zadetke
  nadomesti z označbo mesta `[REDACTED:<type>]`, pri čemer klonira samo veje, ki so se
  dejansko spremenile.
- `CREDENTIAL_PATTERNS` zajema ključe ponudnikov LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), žetone VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), plačilne ključe (Stripe, Square), ključe
  za oblak (dostopni ključ AWS, Twilio, SendGrid, Mailgun), zasebne ključe / JWT-je,
  povezovalne nize, ki vsebujejo poverilnice (`mongodb://user:pass@...` itd.), in
  splošen vzorec vrednosti glave `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ključi v obliki glav (`authorization`, `x-api-key`, `api-key`,
  `apikey`) se odstranijo strukturno (samo vrednost, predpona sheme, kot je
  `Bearer `/`Basic `, se ohrani), namesto prek splošnega besedilnega regularnega izraza.
- Varovalo nikoli ne blokira; samo prepisuje (`modifiedPayload` /
  `modifiedResponse`) in dodaja opombe (`meta.credentialsRedacted`, `meta.count`).

Zaščita pred regresijami: `tests/unit/credential-masker-guardrail.test.ts`.

## Osnovna pogodba (`base.ts`)

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
  block?: boolean; // vrednost true prekine verigo
  message?: string; // prikazano ob blokiranju
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vrne preCall za preoblikovanje zahteve
  modifiedResponse?: TValue; // vrne postCall za preoblikovanje odgovora
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

Varovalo sporoči »brez spremembe« tako, da vrne `void`, `{}` ali
`{ block: false }`. Vrnitev `modifiedPayload`/`modifiedResponse` zamenja
vrednost, ki teče skozi verigo do naslednjih varoval.
`signal?: AbortSignal` posreduje življenjski cikel klicatelja varovalom. Prekinitev zahteve je namerna izjema s pristopom »fail-open«: predstavnostni mostovi ustavijo delo in počistijo vire, ne da bi obnovili neobdelano predstavnost za cilj, za katerega je znano, da je ne podpira.

## Register (`registry.ts`)

Edinec `guardrailRegistry` izpostavlja:

- `register(guardrail)` — doda varovalo (ali ga zamenja glede na normalizirano ime) in
  znova razvrsti varovala po naraščajoči vrednosti `priority`.
- `clear()` / `list()` — skrbniški pomožni funkciji.
- `runPreCallHooks(payload, context)` — gre skozi aktivna varovala, posreduje
  koristno vsebino prek `modifiedPayload` in se ustavi pri prvem `block: true`.
- `runPostCallHooks(response, context)` — enak potek na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — počisti stanje in po želji
  znova registrira privzete nastavitve za čisto izolacijo preizkusov.

Oba izvajalnika vrneta `{ blocked, payload|response, results, guardrail?, message? }`,
pri čemer je `results` polje zapisov `GuardrailExecutionResult`, ki vključujejo
polja `blocked`, `skipped`, `modified`, `error` in `meta` za vsako varovalo,
kar je uporabno za sledenje.

### Onemogočanje varoval za posamezno zahtevo

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` zbere
podvojenih vrednosti očiščen seznam imen varoval, ki jih je treba preskočiti za trenutno
zahtevo. Viri (vsi izbirni, vsi združeni):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` v telesu zahteve (na najvišji ravni)
- `metadata.disabledGuardrails` v telesu zahteve
- Glava `x-omniroute-disabled-guardrails` (ali starejša
  `x-disabled-guardrails`)

Vrednosti so lahko polja nizov ali niz, ločen z vejicami; imena so
normalizirana v male črke in zapis kebab-case (`pii_masker` → `pii-masker`). Rezultat
se prek `context.disabledGuardrails` posreduje registru, ki preskoči
ujemajoča se varovala (`skipped: true` v `results`).

## Vrstni red izvajanja

Za vsako zahtevo, ki teče skozi `src/sse/handlers/chat.ts` in
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` sestavi seznam za preskok na podlagi ključa API, telesa
   in glav.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` izvede varovalne mehanizme po naraščajočem
   vrstnem redu prioritete:
   - Onemogočeni varovalni mehanizmi so zabeleženi kot `skipped`.
   - `preCall` vsakega varovalnega mehanizma lahko prepiše koristno vsebino prek `modifiedPayload`.
   - Prvi `block: true` prekine verigo, obravnavalnik pa vrne
     odgovor o zavrnitvi s strani varovalnega mehanizma.
3. (Morebiti prepisana) koristna vsebina se posreduje kombiniranemu usmerjanju in
   pošiljanju nadrejenemu ponudniku.
4. Ko je odgovor sestavljen, `guardrailRegistry.runPostCallHooks(...)`
   izvede isto verigo nad odgovorom. `block: true` na tej točki zavrže odgovor
   nadrejenega ponudnika.

Varovalni mehanizmi, ki sprožijo izjemo, so zabeleženi z `error: <message>` in zapisani v dnevnik prek
`logger.warn`, vendar se veriga nadaljuje — zasnovano po načelu odprtega odpovedovanja.

## Konfiguracija

Spremenljivke okolja, ki jih berejo vgrajeni varovalni mehanizmi:

| Spremenljivka                         | Uporablja jo                 | Učinek                                                                                                                       |
| ------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`           | Nastavite na `false`, da zaznavanje v celoti onemogočite.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`           | Pravilnik za vrivanje: `warn`, `block` ali `log`. Podedovana vrednost `redact` ne prepisuje vrinjenega besedila.             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`           | Način za zaščito pred vrivanjem; tudi zastavica funkcije v zbirki podatkov, ki **preglasi** spremenljivke okolja (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`           | Najnižja stopnja resnosti, ki jo `MODE=block` zavrne: `high` (privzeto), `medium` ali `low`.                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`           | Podedovan vzdevek za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                      |
| `PII_REDACTION_ENABLED`               | `pii-masker`                 | Ko je nastavljeno na `true`, se podatki PII v zahtevi zakrijejo (neodvisno od načina vrivanja).                              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nadaljnji tok) | Nadzira vedenje prikrivanja na strani odgovora.                                                                              |

Varovalni mehanizmi Modality Bridge berejo izvajalno konfiguracijo iz shrambe
nastavitev, podprte z zbirko podatkov (`getSettings()`), in ne iz spremenljivk okolja. Primarni ključi za slikovni način so
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` in
`modalityBridgeCacheMaxEntries`. Podedovani ključi
`visionBridge*` so sprejeti samo kot dokumentiran nadomestni način branja za en cikel;
zapisi nadzorne plošče uporabljajo primarne ključe. Privzete vrednosti in razreševalnik nadomestnih vrednosti
so v `src/shared/constants/modalityBridgeDefaults.ts`, podedovane
konstante pa so ohranjene v `src/shared/constants/visionBridgeDefaults.ts`.

Zvok uporablja `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` in `modalityBridgeAudioMaxClips` ter skupne
nastavitve `modalityBridgeCache*`. Zvok nima nadomestnega branja podedovanih ključev, ker so bili ti
ključi uvedeni s shemo Modality Bridge.

Video uporablja `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` in
`modalityBridgeVideoTimeout` ter skupne nastavitve `modalityBridgeCache*`.
Privzeto je onemogočen, ker sta FFmpeg/ffprobe izbirni operativni
odvisnosti, opisovanje sličic pa poveča zakasnitev in stroške modela.

## Zaščitni mehanizmi po meri

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

Koraki:

1. Ustvarite `src/lib/guardrails/myGuardrail.ts`, ki razširja `BaseGuardrail`.
2. Implementirajte `preCall` in/ali `postCall`.
3. Registrirajte ga bodisi ob uvozu (dodajte ga iz `registerDefaultGuardrails`) bodisi
   med izvajanjem pokličite `guardrailRegistry.register(...)` — register zamenja
   vsak predhodni zaščitni mehanizem z enakim normaliziranim imenom.
4. Dodajte teste v `tests/unit/` (obstoječi primeri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Med testi uporabite `resetGuardrailsForTests()`, da začnete iz znanega stanja.
Posredujte `{ registerDefaults: false }`, da začnete s praznim registrom in
registrirate samo zaščitne mehanizme, ki jih testirate. Vision Bridge podpira vstavljanje
odvisnosti (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge ponuja
enakovredne priključne točke za nastavitve, zmogljivosti, izbiro modela STT, preverjanje
poverilnic in prepisovanje. Testi lahko zato preverjajo oba poteka brez dostopa do
podatkovne zbirke ali omrežja.

## Glejte tudi

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — skupni detektor, ki omogoča
  zaznavanje vbrizgavanja pozivov in maskiranje osebno določljivih podatkov
- `src/shared/constants/visionBridgeDefaults.ts` — privzete nastavitve Vision Bridge in
  seznam modelov s prisilno uporabo mostu
- `src/shared/constants/modalityBridgeDefaults.ts` — skupne privzete nastavitve izvajalnega okolja Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — neodvisna plast (varovalka, obdobja mirovanja)
- `docs/reference/ENVIRONMENT.md` — celoten pregled spremenljivk okolja

## Pokritost poti z zaščito pred vbrizgavanjem in red-team testiranje (8. faza · sklop D)

Zaščita pred vbrizgavanjem (`createInjectionGuard` / `withInjectionGuard`) pokriva vse poti,
ki sprejemajo uporabniške pozive. Upošteva `INJECTION_GUARD_MODE` (privzeto `warn` = samo beleženje;
`block` = vrne HTTP 400 `SECURITY_001`).

| Vrsta                | Poti                                                                                                                                                 | Privzeti način |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Besedilo (obstoječe) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativno          | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Podatki              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Izločanje besedila (`extractMessageContents`) pokriva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testiranje (vsako noč, `nightly-llm-security.yml`):** promptfoo preverja, ali vsaka pot blokira
korpus OWASP-LLM v načinu `INJECTION_GUARD_MODE=block`; garak izvaja sonde (brez skrivnosti se preskoči).
Pot `moderations` je vključena zaradi doslednosti — upravljavci jo lahko v načinu blokiranja izvzamejo prek
`resolveDisabledGuardrails`.

Nočni delovni tok (`.github/workflows/nightly-llm-security.yml`, cron + ročni
zagon) ima dve opravili:

- **`promptfoo-guard` (blokirajoče)** — izvede `promptfoo eval -c promptfooconfig.yaml`
  z `INJECTION_GUARD_MODE=block`. Vsak nasprotniški primer (npr. »prezri vsa
  prejšnja navodila …«, poskusi pobega iz omejitev v slogu DAN) preveri, ali odgovor vsebuje
  `error.code === "SECURITY_001"`, tj. ali je zaščita dejansko zavrnila zahtevo.
- **`garak` (svetovalno)** — izvede garak `--probes promptinject,dan,leakreplay`
  proti lokalnemu primerku OmniRoute (`http://localhost:20128/v1`). Pogojeno je s
  skrivnostjo ponudnika (`PROMPTFOO_PROVIDER_KEY`); brez nje se elegantno preskoči, ukaz pa ima pripono
  `|| true`, zato poroča, ne da bi povzročil neuspeh CI.

Pokritost pomožne funkcije zaščite (`createInjectionGuard` / `withInjectionGuard`)
obsega vse poti `/v1`, ki sprejemajo pozive; besedilo poziva se pridobi iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` s funkcijo
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
