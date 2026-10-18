# Guardrails (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Zdroj pravdy:** `src/lib/guardrails/`
> **Naposledy aktualizované:** 2026-08-29 — v3.8.51 (pôvod prepisu Video Bridge deklaruje volajúci,
> server ho zatiaľ neoveruje — spresnené podľa #11661)

Guardraily vynucujú bezpečnosť, pravidlá a transformácie obsahu na rozhraní
medzi OmniRoute a nadradenými poskytovateľmi. Každý guardrail môže kontrolovať
(a voliteľne odmietnuť, transformovať alebo anotovať) dátové časti požiadaviek
(`preCall`) a odpovede nadradených poskytovateľov (`postCall`).

Systém je navrhnutý ako **fail-open**: ak guardrail počas vykonávania vyhodí
výnimku, register zaznamená chybu a namiesto zlyhania požiadavky pokračuje
ďalším guardrailom. Blokovanie je explicitné rozhodnutie (`block: true`), nikdy
nie náhoda.

## Vstavané ochranné mechanizmy

Register pri importe automaticky načíta šesť ochranných mechanizmov v poradí podľa priority
(pozrite `registry.ts` → `registerDefaultGuardrails()`):

| Priorita | Názov               | Fáza/fázy      | Súbor                 |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižšie čísla priority sa vykonajú **ako prvé**.

### Obrazový most (`visionBridge.ts`) — Most medzi modalitami PR-1

Zachytáva požiadavky obsahujúce obrázky, ktoré smerujú na **modely bez podpory obrazu**, a buď
presmeruje celú požiadavku na model podporujúci obraz, alebo pred
volaním nadradenej služby nahradí obrazové časti textovými opismi vytvorenými
konfigurovateľným obrazovým modelom. Poskytovatelia podporujúci iba text tak môžu
transparentne spracovávať multimodálne dátové obsahy.

Tok:

1. Preskočí spracovanie, ak cieľový model už podporuje obraz (pokiaľ sa nenachádza v
   zozname modelov s vynúteným mostom `isVisionBridgeForcedModel`).
2. Extrahuje obrazové časti prostredníctvom `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ktorá deleguje na **zjednotený detektor médií**
   `detectMediaParts()` v `open-sse/utils/mediaParts.ts` — jediný zdroj
   pravdy zdieľaný s filtrom kompatibility kombinácií.
   Extrakcia je obmedzená zoznamom povolených položiek na časti najvyššej úrovne s tvarmi,
   ktoré dokáže `replaceImageParts` vložiť späť (kontrakt extrakcia↔nahradenie): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` a Responses API `input_image`. Vnorené zhody a
   tvary obsahujúce iba indikátory sú určené pre filter kombinácií a nikdy sa neextrahujú.
   Spracovanie sa preskočí, ak sa žiadne nenájdu.
3. Načíta konfiguráciu počas behu prostredníctvom `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nové kľúče nastavení
   `modalityBridge*` majú prednosť; staršie kľúče `visionBridge*` zostávajú ako
   **záložná možnosť na jeden cyklus** (okno na návrat k predchádzajúcej verzii). Ak je most
   deaktivovaný, spracovanie sa preskočí ešte pred akýmkoľvek prechádzaním médií.
4. Selektor režimu (`modalityBridgeVisionMode`, pozrite tabuľku nižšie) rozhodne
   medzi presmerovaním a opisom. Presmerovanie vráti `modifiedPayload`, v ktorom je
   zmenený iba `model`, spolu s metaúdajmi `{ rerouted, fromModel, toModel, imagesKept }`.
5. Cesta opisu: obmedzí počet obrázkov na `maxImages`, vytvorí prompt zohľadňujúci úlohu,
   skontroluje vyrovnávaciu pamäť opisov, zavolá obrazový model **paralelne**
   (`Promise.allSettled`) a namiesto obrázkov vloží textové časti
   `[Image N]: <description>`. Neúspešný opis vráti `null` a pôvodná obrazová časť sa
   **zachová** (#4012) — s výnimkou kombinovanej cesty opisu, keď zlyhali všetky
   opisy; vtedy potvrdená nadradená služba bez podpory obrazu dostane zástupný text
   `(unavailable — no vision-capable provider connected)` (#8430).
6. Vráti `modifiedPayload` + metaúdaje (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor režimu (`modalityBridgeVisionMode`)

| Režim      | Predvolený | Správanie                                                                                                                                                                                                                                                                                                                               |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔          | Pôvodná heuristika bez zmien (#6640/#7204): modely, ktoré nie sú kombinované/`auto/`, sa presmerujú na najlepší obrazový model, pokiaľ už pôvodný model nemá použiteľné prihlasovacie údaje (vtedy sa vytvorí opis); kombinované ciele vždy používajú opis.                                                                             |
| `describe` |            | Vždy vytvorí opis — blok presmerovania sa úplne preskočí; vždy odpovedá model vybraný používateľom.                                                                                                                                                                                                                                     |
| `reroute`  |            | Vynúti presmerovanie: kontrola zachovania modelu s prihlasovacími údajmi sa obíde. Kontrola prihlasovacích údajov **cieľa** presmerovania sa však naďalej uplatňuje — ak neexistuje žiadny použiteľný obrazový cieľ, požiadavka prejde na opis, aby sa nespracované obrázky nikdy nedostali do backendu podporujúceho iba text (#8430). |

Vynútené režimy ukončia rozhodovanie **predtým**, než sa spustí automatická heuristika;
správanie režimu `auto` je bajtovo identické s ochranným mechanizmom spred PR-1.

#### Rozsah kľúča API (`visionBridgeKeyScope.ts`)

Keď kľúč API volajúceho obmedzuje `allowedConnections`, fondy kvót
(`allowedQuotas`) alebo modely (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most vyberá iba
modely na presmerovanie a opis, ktoré môže daný kľúč používať, a iba v rámci
pripojení, ktoré môže daný kľúč používať. Volanie opisu potom vždy prechádza
cez spätnú slučku OmniRoute s hlavičkou `x-omniroute-self-loop-key-id`, takže
prijímajúca požiadavka na čet opätovne uplatní pravidlá daného kľúča pre
pripojenia a modely. `enforceApiKeyPolicy()` rešpektuje túto hlavičku iba spolu
s bearer tokenom spätnej slučky, takže môže prístup iba zúžiť, a identifikátor,
ktorý sa nepodarí nájsť, sa odmietne.

Ak pre daný kľúč nie je povolený žiadny obrazový model, cesta opisu nezasiahne
a požiadavka prejde bez zmien, čo predstavuje rovnaké správanie typu fail-open
ako pri deaktivovanom ochrannom mechanizme (metaúdaje
`{ skipped: true, reason: "no_permitted_vision_model" }`).
Požiadavky bez kľúča a kľúče bez týchto obmedzení sa správajú presne tak
ako predtým.

#### Prompt opisu zohľadňujúci úlohu (`modalityBridgeVisionTaskAware`)

Predvolená hodnota je **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) pripája
text **poslednej správy používateľa** (skrátený na 500 znakov) k základnej
výzve na opis, čím smeruje opis k tomu, na čo sa používateľ skutočne pýtal
(vzor codex-vision-proxy), a žiada model videnia o prepis viditeľného
textu. Keď je príznak vypnutý — alebo nie je k dispozícii žiadny text používateľa —
základná výzva sa použije bez zmeny.

Vlastná požiadavka spätnej slučky opisu kompatibilná s OpenAI (`callVisionModelSingle()`
v `visionBridgeHelpers.ts`) vždy požaduje `image_url.detail: "high"` —
bezpodmienečne, pre každého volajúceho/poskytovateľa, bez závislosti od akéhokoľvek signálu klienta.
Vzorkovanie s nízkou úrovňou detailov znižuje presnosť OCR práve pri úlohe prepisu
textu, ktorú táto výzva požaduje, takže samotné volanie opisu vždy požaduje vysokú
úroveň detailov bez ohľadu na to, akú úroveň detailov používala pôvodná prichádzajúca požiadavka. Toto
ovplyvňuje iba telo internej požiadavky na opis; nemení to spôsob, akým
OmniRoute preposiela vlastnú hodnotu `image_url.detail` volajúceho v primárnej požiadavke —
táto predvolená hodnota sa uplatňuje samostatne a iba pre rozpoznaných klientov OpenCode,
v `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Vetva
spätnej slučky opisu používajúca prenosový formát Anthropic nemá žiadne pole `detail`
a žiadna z týchto predvolených hodnôt ju neovplyvňuje.

#### Limit výstupu opisu (`modalityBridgeVisionMaxChars`)

| Kľúč                           | Predvolená hodnota | Rozsah              |
| ------------------------------ | ------------------ | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`                | `0` alebo 100–50000 |

`0` (predvolená hodnota) znamená **bez obmedzenia** — opis vrátený funkciou
`callVisionModel()` sa odovzdá bez úprav, čím sa zachová existujúce
správanie. Akákoľvek hodnota v rozsahu 100–50000 skráti opis a pridá
príponu `…` predtým, ako sa vloží späť v tvare `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
Zvýšte túto hodnotu pri úlohách OCR s množstvom detailov, pri ktorých následný model potrebuje
úplný prepis; znížte ju, ak chcete obmedziť spotrebu tokenov pri príliš výrečných modeloch videnia.
Pole ovládacieho panela sa nachádza na karte Vision v paneli Advanced
(`modality-bridge-max-chars` v `ModalityBridgeVisionTab.tsx`) a každú
hodnotu medzi 1 a 99 upraví na minimálnu hodnotu 100, zatiaľ čo explicitnú hodnotu `0`
ponechá nedotknutú — `0` je samostatne platná hodnota Zod
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nielen
predvolená hodnota pre stav „nenastavené“.

#### Vyrovnávacia pamäť opisov (`modalityBridge/bridgeCache.ts`)

Procesná zdieľaná vyrovnávacia pamäť LRU + TTL v pamäti pre výstupy opisov.
Kľúč = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
rámcovaním pomocou dĺžkových prefixov (bez kolízií na hraniciach polí). Komponent modelu predstavuje
**nakonfigurovaný** model mosta, nie model, ktorý skutočne odpovedal —
`callVisionModel` môže interne použiť záložný model a vytváranie kľúčov pre jednotlivé pokusy by
fragmentovalo vyrovnávaciu pamäť. Neúspešné opisy sa nikdy neukladajú do vyrovnávacej pamäte. Nastavenia:

| Kľúč                            | Predvolená hodnota | Rozsah  |
| ------------------------------- | ------------------ | ------- |
| `modalityBridgeCacheEnabled`    | `true`             | —       |
| `modalityBridgeCacheTtlMinutes` | `60`               | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`              | 10–5000 |

#### Normalizácia vzdialených obrázkov (opis v spätnej slučke/načítanie base64)

Keď most sám načíta **vzdialený** obrázok — pri internom volaní opisu Anthropic
a pri konverzii do base64 pre prenosový formát claude
(`ensureBase64ImagesForClaudeWire`), v oboch prípadoch prostredníctvom
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — výsledný dátový
identifikátor URI sa pred vložením do požiadavky pre model videnia spracuje pomocou
`normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`). Nadmerne veľké obrázky sa zmenšia tak, aby mala **dlhšia hrana 2048 px** (čo zodpovedá
limitu zmeny veľkosti, ktorý už OpenAI/Anthropic uplatňujú na strane servera), čím sa zníži
objem nahrávaných dát a latencia bez zmeny toho, čo model videnia vidí. Zmena veľkosti
používa `sharp`, načítaný prostredníctvom dynamického importu: na platforme, kde sa jeho natívny
binárny súbor nepodarí načítať, `normalizeDataUri()` **nikdy nevyvolá výnimku** — namiesto toho
bez úprav odovzdá pôvodné bajty, takže cesta opisu/konverzie do base64
zostane vždy funkčná. Bajty, ktoré nepredstavujú obrázok (načítanie, ktoré nevrátilo
dekódovateľný obrázok), sa takisto odovzdajú bez úprav. Táto normalizácia
sa vzťahuje len na obrázky, ktoré most načíta pre svoje vlastné interné volanie — nikdy
sa neuplatňuje na nespracované priamo preposielané dáta volajúceho, čo je v súlade
s princípom úprav iba po explicitnom povolení (tvrdé pravidlo č. 20).

#### Schéma nastavení + migrácia

Nové kľúče `modalityBridge*` sa validujú pomocou Zod v `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trojica `modalityBridgeCache*` a skupina
`modalityBridgeAudio*`, ktorú používa Audio Bridge. Migrácia
`141_modality_bridge_settings.sql` skopíruje existujúce staršie hodnoty
`visionBridge*` do zodpovedajúcich nových kľúčov (idempotentne, pričom nikdy neprepíše
hodnotu `modalityBridge*` nastavenú prevádzkovateľom); staršie kľúče zostanú počas
jedného cyklu vydania akceptované ako záložná možnosť pri čítaní.

#### Hlavička transparentnosti + štatistiky

Odpovede transformované opisom obsahujú
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(vytvorené funkciou `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`,
pridané funkciou `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Presmerované požiadavky nedostanú **žiadnu** hlavičku — dáta zostali nedotknuté a zmena
modelu je už viditeľná v poli `model` tela odpovede.

`GET /api/modality-bridge/stats` (autentifikácia správy, rovnaká úroveň ako
`GET /api/settings`) vracia počítadlá jednotlivých modalít uložené v pamäti
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` pre `vision`, `audio` a
`video`. `averageLatencyMs` používa ako menovateľa `latencySamples`, nie všetky
pokusy; operácia bez merania času nevytvára umelú vzorku s nulovým počtom
milisekúnd. `bridged` zostáva spätne kompatibilným aliasom pre úspešné
konverzie; neúspešné pokusy ho nezvyšujú.
Počítadlá sa zámerne vynulujú pri reštarte procesu
(telemetria, nie účtovníctvo).

#### Konfigurácia ovládacieho panela

Vyhradená stránka ovládacieho panela je
`/dashboard/settings/modality-bridge`. Jej karty `Vision`, `Audio` a
`Video`, ktoré možno adresovať prostredníctvom URL, pri prepínaní hodnoty `tab`
zachovávajú parametre dopytu. Karta Vision sprístupňuje aktiváciu, režim, výber
modelu (vrátane automatického predvoleného nastavenia), zadávanie pokynov so
zohľadnením úlohy, pokročilé limity časového limitu/obrázka/dĺžky opisu/vyrovnávacej
pamäte, počítadlá za behu a chránenú vzorovú požiadavku. Karta Audio je tiež
funkčná: sprístupňuje aktiváciu, výber modelu iba pre STT s možnosťou Auto,
limity časového limitu/maximálnej dĺžky klipu, počítadlá zvuku a vzorový test
`input_audio`. Karta Video je funkčná: zobrazuje stav prostredia
FFmpeg/ffprobe — jeden zo štyroch explicitných stavov používateľského rozhrania
(`unknown`, kým prebieha kontrola alebo ju nebolo možné dokončiť, `restricted`
na hostiteľovi ovládacieho panela, ktorý nie je loopback, kde sa kontrola
preskočí na strane klienta, `unavailable` po vykonaní kontroly a potvrdení
nedostupnosti alebo `available` s verziami FFmpeg/ffprobe) — ukladá limity
aktivácie/modelu/snímok/videa/časového limitu, filtruje výber modelov iba na
modely podporujúce obraz a sprístupňuje počítadlá videa.

Pôvodná karta Vision Bridge v nastaveniach AI je odkazom kompatibility na novú
stránku; už neobsahuje druhú kópiu formulára. Media Providers tiež prepája
pracovné postupy Image-to-Text a Speech-to-Text s príslušnými kartami Modality
Bridge bez odstránenia existujúceho testovacieho prostredia Speech-to-Text.

**Obídenie kontroly prijatia pri slučke na seba:** keď je volanie opisu smerované
cez vlastnú slučku `/v1` systému OmniRoute (neštandardný model poskytovateľa),
čiastková požiadavka odošle `x-omniroute-admission-bypass: internal` a overí sa
pomocou vyriešeného poverenia slučky na seba — lokálneho zástupného kľúča
`sk_omniroute` v lokálnom režime alebo kľúča prostredia
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` nakonfigurovaného prevádzkovateľom
(#1350), aby nasadenia s `REQUIRE_API_KEY=true` mohli naďalej vykonať volanie
opisu. Obídenie sa akceptuje iba pre tieto presné poverenia, takže externí
klienti nemôžu použiť túto hlavičku na preskočenie kontroly prijatia.

Staršie predvolené hodnoty sa nachádzajú v
`src/shared/constants/visionBridgeDefaults.ts`; nové predvolené hodnoty
režimu/zohľadnenia úlohy/vyrovnávacej pamäte a resolver nastavení sa nachádzajú
v `src/shared/constants/modalityBridgeDefaults.ts`. Ochranný mechanizmus
sprístupňuje možnosť konštruktora `deps`, aby testy mohli vložiť falošné
implementácie `getSettings` a `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Zachytáva chatové požiadavky obsahujúce zvuk skôr, než dorazia k cieľu, o ktorom
nie je známe, že prijíma zvukový vstup. Chatovú požiadavku nikdy nepresmeruje:
zvukové časti sa prepíšu prostredníctvom existujúceho multipart koncového bodu
kompatibilného s OpenAI a zvolený chatový model pokračuje s textovými prepismi.

Tok:

1. Určí `supportsAudio` prostredníctvom `getResolvedModelCapabilities()`.
   Explicitné metadáta registra poskytovateľov majú prednosť, po nich nasledujú
   statické metadáta modelu a potom synchronizované `modalities_input`.
   Deklarovaný zoznam vstupov bez `audio` znamená `false`; ak neexistujú žiadne
   dôkazy o schopnostiach, hodnota zostáva `null`. Hodnoty `false` aj `null`
   aktivujú konzervatívny most, zatiaľ čo `true` ho obíde.
2. Načíta nastavenia `modalityBridgeAudio*` a zo všetkých správ extrahuje
   zlučiteľné zvukové časti najvyššej úrovne prostredníctvom zdieľaného
   detektora `detectMediaParts()`. Podporované prenosové formáty sú OpenAI
   `input_audio`, `audio_url` a `source.media_type: "audio/*"`. Vnorený zvuk sa
   rozpozná na účely smerovania, cesta zlučovania ho však neodstráni. Objem práce
   je obmedzený hodnotou `modalityBridgeAudioMaxClips`; neskoršie časti zostanú
   nezmenené.
3. Rešpektuje nakonfigurovanú hodnotu `provider/model` alebo umožní funkcii
   `selectAudioBridgeModel()` prejsť `AUDIO_TRANSCRIPTION_PROVIDERS` v stabilnom
   poradí katalógu a vybrať prvý model s použiteľným aktívnym poverením
   poskytovateľa.
4. `callAudioTranscription()` skonvertuje zvuk vo formáte base64/data-URI na
   multipart `file` alebo stiahne vzdialené `audio_url` prostredníctvom ochrany
   odchádzajúcich pripojení iba k verejným adresám s pripnutím DNS a limitom
   25 MB. Následne odošle metódou POST súbor a vybraný model do lokálnej slučky
   na seba `/v1/audio/transcriptions`, autentifikovanej pomocou
   `resolveSelfLoopBearer()`. Existujúca trasa prepisu vykoná štandardné
   vyhľadanie poverenia, spracovanie doby čakania/obmedzenia frekvencie a
   odoslanie poskytovateľovi.
5. Úspešné volania nahradia svoje časti hodnotou
   `[Audio N]: <transcript>`. Volania sa vykonávajú pomocou
   `Promise.allSettled`: individuálne zlyhanie zachová pôvodnú zvukovú časť
   (zmluva #4012). Ak zlyhajú všetky volania a je preukázané, že cieľ má
   `supportsAudio === false`, časti sa zmenia na
   `[Audio N]: (unavailable — no STT provider connected)` (zmluva #8430). Pri
   neznámom cieli (`null`) zostane výsledok po zlyhaní všetkých volaní nezmenený.
   Cieľ, o ktorom je preukázané, že podporuje iba text, a ktorý nemá použiteľné
   poverenie STT, dostane rovnakú explicitnú zástupnú hodnotu bez vykonania
   sieťového volania.

Úspešné prepisy používajú vyrovnávaciu pamäť LRU/TTL Modality Bridge spoločnú
pre celý proces. Kľúč kombinuje odkaz na zvuk, stabilné označenie operácie
`audio-transcription` a vybraný model STT; zlyhania sa nikdy neukladajú do
vyrovnávacej pamäte. Zvukové pokusy aktualizujú zdieľané počítadlá `bridged`,
`cacheHits`, `failures` a `lastUsedAt`. Transformované odpovede obsahujú
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
nezmenené požiadavky nedostanú segment Audio Bridge.

Nastavenia za behu sú uložené v databáze a validované pomocou Zod:

| Kľúč                          | Predvolená hodnota | Rozsah                   |
| ----------------------------- | ------------------ | ------------------------ |
| `modalityBridgeAudioEnabled`  | `true`             | —                        |
| `modalityBridgeAudioModel`    | `""`               | Automaticky alebo ID STT |
| `modalityBridgeAudioTimeout`  | `60000`            | 1000–300000              |
| `modalityBridgeAudioMaxClips` | `3`                | 1–10                     |

Zdieľaná vyrovnávacia pamäť zostáva riadená nastaveniami `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` a `modalityBridgeCacheMaxEntries`.

### Premostenie videa (`videoBridge.ts`, `videoBridgePipeline.ts`)

Zachytáva videočasti najvyššej úrovne v `messages` rozhrania Chat Completions a v
`input` rozhrania Responses API pred zavolaním cieľa bez známej natívnej podpory
videa. Podporované formáty sú `input_video`, `video_url`, `video_source`, URL adresy
HTTPS a dátové URI `data:video/*;base64,...`. Samotné názvy súborov v texte sa
nepovažujú za video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) zabezpečuje prechádzanie požiadavky,
kontrolu možností a pravidiel, agregáciu v rámci požiadavky a obsah odpovede.
Spracovanie jednotlivých videí — získanie, vyrovnávacia pamäť celého výsledku,
opis sekvencie snímok (ktorý zahŕňa akýkoľvek volajúcim deklarovaný prepis zvuku)
a metriky, prerušenie a čistenie pre každý pokus — je skryté za `processVideoPart`
v `videoBridgePipeline.ts`, ktoré sa volá raz pre každú videočasť v rámci cyklu
metódy `preCall`. Tento modul tiež definuje explicitné hranice portov
`VideoMediaBrokerPort` (získavanie bajtov a extrakcia vzorkovaných snímok),
`VideoAudioTranscriptionPort` (spojenie volajúcim deklarovaného prepisu zvuku
s titulkami vzorkovaných snímok) a `VideoDrilldownPort` (hranica perzistencie
detailnej analýzy snímok; zatiaľ nie je zapojená do `processVideoPart` — záznamy
detailnej analýzy dnes zapisuje iba samostatná trasa
`/api/modality-bridge/video/drilldown`).

Verejná cesta požiadavky `/v1` nikdy neimportuje ani nespúšťa podproces. Vzdialené
videá sa sťahujú s limitom 50 MiB; vložené videá vo formáte base64 majú
konzervatívny limit 36 MiB dekódovaných dát na jedno video, aby sa obálka
modelu, správ a rámcovania zmestila do verejného limitu 50 MiB na prijatie
požiadavky JSON. Dĺžka vložených dát a odhady dekódovanej veľkosti sa kontrolujú
pred alokáciou. Protokol HTTPS sa vyžaduje pre počiatočnú vzdialenú URL adresu
aj pre každé presmerovanie, pričom sa používa existujúca ochrana verejných
odchádzajúcich spojení s pripnutím DNS. Bajty potom prechádzajú presnou internou
hranicou sprostredkovateľa `POST /api/modality-bridge/video/extract`. Táto trasa
je zároveň `LOCAL_ONLY` aj `SPAWN_CAPABLE`, prijíma iba autentifikovanú
dôveryhodnú požiadavku zo spätnej slučky v rámci procesu a nikdy neprijíma URL
adresu, cestu v súborovom systéme, spustiteľný súbor ani zoznam argumentov.
Kanál limitovania veľkosti tela API a inkrementálny mechanizmus čítania tela
obslužnej rutiny nezávisle vynucujú limit 50 MiB pre vstup sprostredkovateľa.
Jeho obmedzený rad spracúva naraz jednu extrakciu, povoľuje štyri čakajúce úlohy
a obmedzuje čakajúci vstup na 100 MiB.

Vo vnútri sprostredkovateľa nástroj `ffprobe` číta súkromný lokálny súbor; pevný
zoznam povolených formátov vylučuje formáty zoznamov skladieb a manifestov.
Pre povolené kontajnery rodiny MOV zostávajú externé odkazy na dáta MOV predvolene
zakázané a pevne definovaný príkaz ich nepovoľuje. Nástroje `ffprobe` aj `ffmpeg`
používajú zoznam povolených protokolov obmedzený iba na `file`, jedno vlákno,
pevné polia argumentov, žiadny shell a spustiteľné súbory vyhľadané v `PATH`.
Prúdy s priloženým obrázkom obalu nie sú kandidátmi na prehrávanie. Všetky
prehrávateľné prúdy musia spĺňať limity, pričom pred deterministickým náhradným
výberom s najnižším indexom sa uprednostní explicitný predvolený prúd. Videá sú
obmedzené na 600 sekúnd, 8 192 pixelov na rozmer a 33 554 432 zdrojových pixelov.
FFmpeg vzorkuje 1–16 stredových snímok JPEG, zmenšuje dlhšiu hranu najviac na
1 024 pixelov bez zväčšovania menších vstupov a nikdy neprijíma URL adresu.
Vzorkovanie je predvolene `uniform`. Voliteľné pravidlo `scene_aware` a
experimentálne pravidlo `segment_aware` vykonajú jeden dodatočný pevne definovaný
prechod nástroja FFmpeg cez už overený lokálny prúd, vyberú obmedzené časové
pečiatky scén `showinfo` a pri zlyhaní detektora, vypršaní časového limitu,
nesprávne formátovanom výstupe alebo prázdnej množine kandidátov sa
deterministicky vrátia k rovnakým rovnomerným stredovým bodom. Režim zohľadňujúci
segmenty prideľuje stredové vzorky úmerne k overeným intervalom scén; dôkazy
zohľadňujúce segmenty a správanie pri návrate k náhradnému postupu sú podrobne
opísané nižšie. Pevný limit 16 snímok sa pri každom pravidle uplatní po výbere.
Keď má požiadavka zohľadňujúca scény rozpočet iba na jednu snímku, použije
rovnomerný stred aktívneho okna celého videa alebo zaostrenia a uvedie
`policyEffective: uniform`: jedna vybraná snímka scény nedokáže zachovať oba
časové konce. Volajúci môže voliteľne zadať konečné okno zaostrenia (`start`/`end`
v sekundách); hranice sa obmedzia na trvanie média, obrátené alebo nekonečné
okná sa odmietnu a všetky pravidlá vzorkovania sa vykonávajú iba v rámci
normalizovaného intervalu. Výsledné okno je zahrnuté v metadátach vzorkovania
aj v nedôveryhodnej predpone opisu, aby následné modely dokázali rozlíšiť
zameraný úryvok od celej časovej osi.

Sémantické zameranie titulkov je samostatné explicitné nastavenie. Predvolený
režim analýzy `full` zachováva existujúcu výzvu pre snímky a nikdy neposiela
text požiadavky modelu titulkov. V režime `focused` premostenie číta iba najnovší
neprázdny používateľský obsah `text`/`input_text` z rovnakého kontajnera Chat
alebo Responses, normalizuje ho do NFC, zjednotí riadiace znaky a medzery
a obmedzí ho na 500 kódových bodov Unicode. Prázdny výsledok spôsobí návrat
k presnej výzve režimu `full`. Použiteľná pomôcka sa serializuje ako JSON
vo vyhradenom bloku nedôveryhodného používateľského kontextu a môže iba
uprednostniť pozorovateľné podrobnosti; nemôže prepísať samostatné upozornenie,
aby sa nevykonávali pokyny viditeľné alebo počuteľné v médiu. Textové zameranie
nikdy neodvodzuje `start`/`end` ani nemení časový vzorkovač.

#### FU-07 štrukturálne dôkazy segmentov

`segment_aware` používa jeden ohraničený priechod predbežnej analýzy nad už overeným
lokálnym videostreamom. Pevný reťazec filtrov najprv zmenší obraz na šírku najviac
320 pixelov, rozpozná zmeny scén a zamrznuté intervaly a potom vzorkuje rýchlosťou
1 snímka za sekundu na účely analýzy rozmazania, priemerného jasu a
priestorových/časových informácií. Priechod je obmedzený na 600 štrukturálnych
vzoriek, jedno vlákno FFmpeg/filtrov, rovnaký protokol povoľujúci iba `file`
a zoznamy povolených kontajnerov, limit výstupu procesu 1 MiB a najviac
30 sekúnd v rámci zdieľaného prerušenia/termínu brokera. Nikdy neprijíma
z požiadavky príkaz, filter, cestu ani URL.

Štrukturálne hodnoty predstavujú deterministické dôkazy zo vzorkovania, nie
sémantické porozumenie videu. Neodvodzujú subjekty, činnosti, titulky, reč ani
zámer používateľa. Hranice scén a zamrznutí tvoria segmenty; pokrytie zamrznutia,
rozmazanie, expozícia, priestorové detaily a časové zmeny ovplyvňujú iba spôsob,
akým sa prideľuje existujúci rozpočet 1–16 snímok. Úplne zamrznutý segment je
obmedzený na jednu snímku, zatiaľ čo nezamrznuté segmenty súťažia o zostávajúci
rozpočet. Keď je hraníc viac než snímok, zachová sa rovnomerné pokrytie časovej
osi, aby rýchle strihy na začiatku nemohli skryť dlhý koncový segment. Hranice
scén v rámci 1-sekundového rozlíšenia analýzy od hranice zamrznutia sa zlúčia.

Chýbajúce filtre, poškodené alebo prázdne dôkazy, chyba detektora či vypršanie
časového limitu ohraničenej predbežnej analýzy vedú k bezpečnému návratu na
presnú politiku rovnomerných stredových bodov. Prerušenie volajúcim alebo
uplynutie termínu brokera k takémuto návratu nevedie: ukončí prebiehajúci
podproces, zabráni neskoršej extrakcii snímok a súkromný dočasný strom sa
odstráni v bloku `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministické reálne testovacie
dáta FFmpeg na vyhodnotenie úspor volaní titulkovania po deduplikácii, prideľovania
rozpočtu pri hustom pohybe, dôkazov o rozmazaní/expozícii/SI-TI, rýchlych strihov
s dlhým koncom a falošne pozitívnych výsledkov pri postupnom prelínaní.
Zaznamenáva reálny čas predbežnej analýzy a tam, kde je dostupný
`/usr/bin/time`, aj čas CPU podradeného procesu a špičkovú hodnotu RSS. Jeho
kontroly kvality sú iba štrukturálnymi orákulami. Kvalita reálneho modelu
titulkovania zostáva `HOLD`, pretože tento testovací nástroj nemá autorizovaný
koncový bod ani zmrazeného hodnotiteľa. Peňažné úspory takisto zostávajú `HOLD`,
pokiaľ `--caption-cost-per-call-usd` neposkytne explicitný kladný odhad nákladov
na jedno volanie; skript nikdy nevymýšľa žiadny z týchto výsledkov.

Každá snímka je obmedzená na 4 MiB, všetky nespracované snímky spolu na 23 MiB
a serializovaná odpoveď brokera na 32 MiB. Súkromný dočasný adresár sa odstráni
v bloku `finally`. OmniRoute neobsahuje FFmpeg a neakceptuje vlastnú cestu
k spustiteľnému súboru. Pred titulkovaním most vykoná konzervatívny priechod
vizuálnej deduplikácie: každý JPEG sa zredukuje na 16×16 odtieňovo sivý buffer
a porovná sa iba s poslednou zachovanou snímkou. Pri požadovanom rozpočte
titulkovania vyššom než jedna snímka poskytne extrakcia ohraničenú množinu
kandidátov s veľkosťou najviac dvojnásobku daného rozpočtu a nikdy nie viac
než 16 snímok. Požadovaný limit sa uplatní až po deduplikácii, pričom počas
konečného preriedenia sa zachovajú prvý a posledný vybraný kandidát, ak je
rozpočet aspoň dva. Verziovaná politika
`grayscale-16x16-mean-cells-v2` používa väčšiu z hodnôt priemernej zmeny jasu
a pomeru buniek miniatúry, ktorých normalizovaná zmena je aspoň 0,05. Prah
duplicity je konštanta 0,04, zvolená pre predvídateľnosť namiesto toho, aby bola
sprístupnená ako nastavenie za behu. Tento sekundárny signál s vysokým kontrastom
zachováva malé pohyby a zmeny viditeľného textu, ktoré môže porovnanie založené
iba na priemere skryť. Chyby porovnávača alebo dekodéra vedú k bezpečnému
zachovaniu pokrytia. Výstupné metadáta rozlišujú extrahovaných kandidátov,
úspešne použité snímky a vyradené vizuálne duplikáty.

Explicitne označená časť videa môže vyžiadať kontaktný hárok s časovými značkami.
Most vytvorí mriežku JPEG s najviac 4 stĺpcami a 16 snímkami. Každá 512-pixelová
bunka vloží časovú značku svojho zdroja do spodného pásu s vysokým kontrastom,
pričom rovnaké časové značky zostanú aj v textových metadátach na následné
priradenie a audit. Celý JPEG zostáva obmedzený na 32 MiB. Ak `sharp` nedokáže
mriežku dekódovať alebo zostaviť, most sa vráti k jednotlivým snímkam JPEG;
prerušenie klientom sa naďalej prenesie cez operáciu s hárkom.

Dôkazy na povýšenie sú zámerne oddelené od syntetického mikrovýkonnostného testu
zostavovania. `scripts/perf/video-bridge-contact-sheet-eval.ts` definuje
A/B testovací nástroj s verziovanou schémou pre reálne modely videnia kompatibilné
s OpenAI. Meria tokeny hlásené poskytovateľom, celkovú latenciu od začiatku do
konca vrátane zostavenia hárka, počet volaní modelu a zachovanie faktov definované
v manifeste. Nespracované odpovede modelu sa do správy nezapisujú; uchovávajú sa
iba odtlačky SHA-256 a ID zhodných faktov. Testovací nástroj nevykoná žiadne
sieťové ani platené volanie modelu, pokiaľ nie je zadaný parameter
`--execute-real` a nie sú nakonfigurované `--model`, `OMNIROUTE_BASE_URL`
a `OMNIROUTE_API_KEY`. Bez takéhoto explicitného reálneho spustenia zostáva jeho
strojovo čitateľný verdikt `HOLD`; samotné syntetické merania dátovej záťaže
a počtu volaní nie sú dôkazom na povýšenie.

Volajúci môžu k podporovanej časti videa pripojiť voliteľné pole
`transcript.cues`, ak už majú zarovnaný text. Každý časovaný úsek musí obsahovať
`text`, konečný interval `start`/`end` v rámci zistenej dĺžky trvania a povolený
`source` (`client`, `embedded` alebo `audio-bridge`); predvolená hodnota
`confidence` je `1` a musí zostať medzi `0` a `1`. Úplne zhodné časované úseky
sa zlúčia. OmniRoute nikdy nespustí prepis na základe týchto metadát: overené
časované úseky sa skopírujú do opísaného výsledku spolu so zdrojom, mierou
spoľahlivosti a intervalom a vykreslia sa ako nedôveryhodné pozorovania spolu
s titulkami snímok. Neplatný text, text mimo rozsahu alebo text bez informácie
o pôvode sa odmietne namiesto toho, aby sa primiešal do prúdu titulkov.
Oba kanály prepisu v tele požiadavky normalizujú dodaný pôvod na `client`
vrátane používateľom deklarovaných označení `embedded` alebo `audio-bridge`.
Tieto dôveryhodné označenia môže prostredníctvom argumentu `trustedSource`,
dostupného iba z kódu, priradiť len adaptér vlastnený serverom; pole JSON
v požiadavke sa k tomuto argumentu nemôže dostať. Text prepisu zostáva
nedôveryhodným obsahom odvodeným z média bez ohľadu na svoj pôvod a nikdy nesmie
určovať autorizáciu.

Pokročilý volajúci môže pre rovnaké video poskytnúť stopu `audioTranscript`;
považuje sa za text poskytnutý klientom, nie za dôkaz prepisu na serveri.
Vrstva zlúčenia spracúva vizuálne a zvukové pozorovania s použitím
jedného časového limitu a signálu prerušenia, zoradí ich na spoločnej časovej osi, zlúči
presné duplikáty a oznámi čiastočný výsledok, keď uspeje iba jedna strana.
Neplatný `audioTranscript` sa zmení na takýto čiastočný výsledok — vizuálny
opis sa zachová a zvuková vetva zaznamená sanitizovaný kód zlyhania —
namiesto zlyhania celého videa. Dostupnosť jednotlivých vetiev, príznak čiastočného
výsledku a sanitizované kódy zlyhania sa zachovajú v opísanom výsledku, v
metadátach ochranných mechanizmov (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), v metadátach vyrovnávacej pamäte výsledkov a v
počítadlách zlúčenia mosta. Predvolená cesta Video Bridge nevyvoláva prevod reči na text
ani nesťahuje druhú kópiu média; bez tejto explicitnej stopy zostáva
iba pri videu.

**Uchovávanie prepisov (#12150 P1).** Toto sa použije automaticky vždy, keď
Video Bridge (ktorý je sám voliteľný) vykreslí položku prepisu — neexistuje žiadny samostatný
príznak uchovávania. Keď požiadavka vykreslí ľubovoľnú položku prepisu (volajúcim deklarovaný
`transcript` alebo zlúčený `audioTranscript`), ochranný mechanizmus ju označí ako
`videoBridgeObserved` a vytvorí redigovanú tieňovú verziu opisu videa —
identické vykreslenie, v ktorom je voľný text tela každej položky nahradený reťazcom
`[redacted-video-transcript]`, vytvorené nahradením štruktúrovaného poľa položky
pred zostavením reťazca (nikdy nie analýzou zlúčeného textu, takže nemôže
prežiť žiadny obsah položky — útočný ani bežný, vrátane tiel obsahujúcich `]`, ako sú
`[inaudible]`/`[music]`). Telo požiadavky v uloženom protokole volaní nahradí
každú textovú časť odvodenú z videa touto redigovanou tieňovou verziou, priradenou podľa
zhody obsahu; kotva `fullText` sa znova načíta z dokončeného obsahu ochranného mechanizmu
pred volaním, takže priradenie bude úspešné aj po tom, čo neskoršie reťazové ochranné mechanizmy
(maskovače osobných údajov a prihlasovacích údajov s prioritami 10/95) prepíšu text opisu priamo
na mieste, a po tom, čo vloženie systémovej výzvy, odovzdania a pamäte zmení tvar poľa správ.
Telo odosielané nadradenému modelu zostáva nezmenené. Pozorovaná požiadavka tiež nevyplní
žiadnu trvalú Memory (extrakcia odvodená z požiadavky aj z odpovede sa preskočí),
takže vlastná odpoveď modelu nemôže zopakovať text prepisu do Memory.

**Nespracované polia videa (#12430).** Keď je most povolený a natívna podpora videa je neznáma alebo chýba, definované polia `transcript`/`audioTranscript` tiež aktivujú `videoBridgeObserved`, a to aj po zlyhaní opisu alebo prekročení limitu `maxVideos`. Hodnoty `null` a prázdne reťazce sa započítavajú; chýbajúce polia a metadáta, ktoré nesúvisia s videom, nie. Uchovávané kópie tieto polia redigujú alebo požiadavku vynechajú a vyrovnávacie pamäte/Memory sa obídu.

Na týchto záložných cestách sa platné položky od volajúceho zmenia na podporované
časti `text`/`input_text` namiesto neštandardných polí poskytovateľa. Obe stopy
dodané v požiadavke zostávajú nedôveryhodnými pozorovaniami typu `client` s explicitným
upozornením, že video nebolo opísané a časové značky neboli overené voči médiu. Existujúce
limity 256 položiek/64 KiB celkovo aj na jednu položku sa vzťahujú na obe stopy spoločne;
časové značky sa musia zmestiť do 600-sekundového stropu sprostredkovateľa a do prípadného zadaného
okna zamerania. Neplatné stopy sa zahodia a nepreposielajú sa ako ľubovoľný text; platná
súrodenecká stopa sa môže naďalej použiť, pokiaľ sa neprekročí ich spoločný limit. Polia s hodnotou null alebo
prázdne polia nepridávajú žiadny text. Tento záložný postup nepridáva žiadne načítanie média ani prepis.
Rozširujúce polia prepisu sa odstránia zo záložného nosiča videa a jeho
objektov `video_url`/`source`. Zoznam povolených položiek na rozhraní OpenAI zostáva striktný; nosiče videa
s neznámou natívnou podporou zostávajú dostupné a známe ciele podporujúce iba text si zachovajú bezpečné značky.
Štruktúrované redigované tieňové verzie chránia pripojený text prepisu, zatiaľ čo
pôvodná požiadavka vlastnená volajúcim zostáva nezmenená. Ciele s natívnou podporou a
zakázané mosty si zachovajú svoje existujúce správanie obídenia.

Ďalšie uchovávané kópie používajú rovnaký signál pozorovanej požiadavky. Nespracovaná
snímka klientskej požiadavky pred ochranným mechanizmom, čakajúca požiadavka v pamäti a protokol
predčasne odmietnutej požiadavky štrukturálne nahrádzajú polia prepisu v častiach videa;
reťazcové výzvy vytvorené fázami dátovodu a odovzdaním kontextu sa redigujú
vo výstupe uchovávaného tela požiadavky. Uložená značka `video_content_removed`
spôsobí, že pokračovanie cez `previous_response_id` bezpečne zlyhá namiesto rekonštrukcie
textu, ktorý bol zámerne odstránený. Ak pozorovaná požiadavka pred zaznamenaním stratí
svoju redigovanú tieňovú verziu pre konkrétnu časť alebo ak po neskorších úpravách požiadavky zlyhá
priradenie čo i len jednej z viacerých tieňových verzií videa, uchovávané telo požiadavky sa
úplne vynechá namiesto uchovania čiastočne redigovaného prepisu.

Pri pozorovanej požiadavke môže odpoveď modelu citovať ľubovoľnú časť
prepisu bez štruktúrovanej hranice položky. Jej uložené pole `responseBody` v protokole volaní
sa preto nahradí značkou vynechania; podrobný
artefakt dátovodu (ktorý môže obsahovať nadradené/klientske telá a fragmenty streamu)
sa neuchováva. Sémantické vyrovnávacie pamäte, vyrovnávacie pamäte idempotencie a opakovaného prehrávania uvažovania
obchádzajú čítania aj zápisy pre danú požiadavku. Požiadavka poskytovateľovi a odpoveď
viditeľná klientovi zostávajú nezmenené. Počiatočné bajty keepalive sa odstránia z dočasnej
vyrovnávacej pamäte, keď sa podrobný artefakt vynechá. Upozornenie Kiro na poškodený EventStream
uvádza iba počet bajtov obsahu, nikdy nie jeho obsah ani nespracovanú chybu
analyzátora JSON.
Netvrdí sa tým, že bol skontrolovaný každý nesúvisiaci diagnostický výstup poskytovateľa/pluginu;
širšie preverenie uchovávaných výstupov sa sleduje v #11658.

Interný životný cyklus `/api/modality-bridge/video/drilldown` je samostatná,
slučkou/tokenom autentifikovaná vrstva vyrovnávacej pamäte. Každá operácia vyžaduje aj
kanonické nepriehľadné ID principalu. Pred povolením produkčného volajúceho musí
toto ID odvodiť z autentifikovaného tenanta a nikdy nesmie preposlať
hodnotu zvolenú klientom. Kľúče vyrovnávacej pamäte viažu tento principal na kanonické ID relácie a
referencie videa, ukladajú iba ich kľúče odvodené pomocou SHA-256 a obmedzujú čítanie
aj odstraňovanie na ten istý principal. Vyrovnávacia pamäť uchováva najviac 16 odvodených snímok JPEG
na položku, po desiatich minútach ich nechá expirovať a podporuje ohraničené čítania
`start`/`end` alebo explicitné odstránenie relácie.

Každý principal je obmedzený na 16 položiek a 64 MiB kanonických údajov JPEG. Tieto
limity sú nezávislé od globálneho stropu 64 položiek/256 MiB: tlak na kvótu
principalu najprv odstráni iba najmenej nedávno používané položky daného principalu a až potom
sa zvažuje globálne odstraňovanie podľa LRU. Expirované položky sa pri aktivite vyrovnávacej pamäte odstraňujú
z účtovania principalu aj globálneho účtovania, zatiaľ čo zrušenie a zlyhanie validácie
nepotvrdia čiastočnú náhradu.

Vyrovnávacia pamäť odmieta nekanonický Base64, nadbytočné doplnenie, médiá iné ako JPEG, poškodené alebo
skrátené súbory JPEG a súbory JPEG, ktoré počas ohraničeného úplného dekódovania obrazu pomocou `sharp`
vyvolajú varovanie. Každý prijatý obrázok opätovne zakóduje ako kanonický JPEG, odvodí šírku a výšku
z dekódovaných bajtov namiesto dôvery v polia volajúceho a zahodí všetky koncové
polyglotné bajty namiesto ich zachovania. Do oboch kvót sa započítava iba ohraničený kanonický komprimovaný buffer.
Limit prenosu JSON zahŕňa režijné náklady Base64 pre strop dekódovaného vstupu 32 MiB.
Každé uložené odvodenie zaznamenáva svoj validovaný formát/rozlíšenie JPEG, politiku vzorkovania,
verziu odvodenia, čas vytvorenia, hash obsahu vypočítaný serverom a hashovanú nadradenú
referenciu spolu s hashom nadradeného obsahu od dôveryhodného volajúceho. Zrušenie sa kontroluje
medzi asynchrónnymi fázami dekódovania/hashovania pred atomickým potvrdením do vyrovnávacej pamäte.

Táto etapa zatiaľ nepripája k trase produkčného producenta a neposkytuje
výber variantov s viacerými rozlíšeniami. Transparentná cesta požiadavky Video Bridge
preto nespôsobuje žiadnu dodatočnú prácu, zatiaľ čo odvodenie principalu viazané na tenanta a
úplný životný cyklus FU-08 s viacerými rozlíšeniami zostávajú explicitnými následnými úlohami,
a nie správaním zdokumentovaným ako dokončené.

Snímky sa postupne popisujú pomocou nakonfigurovaného modelu Video. Prázdne
nastavenie Video preberá nastavenie Vision; ak sú obe prázdne, automatický smerovač Vision
vyberie efektívny model podporujúci obraz. Úspešné popisy
nahradia pôvodnú časť stabilným prefixom `[Video description:`, ktorý zároveň
označuje text ako nedôveryhodné pozorovanie odvodené z média a prikazuje nadväzujúcim
modelom, aby nenasledovali pokyny nájdené v médiu. Kľúče vyrovnávacej pamäte popisov snímok
zahŕňajú bajty JPEG, prompt, časovú značku a efektívny model; do vyrovnávacej pamäte sa ukladajú iba úspešné
popisy. Položky vyrovnávacej pamäte uchovávajú skutočný úspešný produkčný model
vrátane záložného modelu; bridge hlási `mixed`, keď boli rôzne snímky
vytvorené rôznymi modelmi. Zásah do vyrovnávacej pamäte opätovne použije túto identitu producenta
namiesto jej premenovania podľa požadovaného plánu smerovania. Vyrovnávacia pamäť výsledku celého videa
používa kľúč vytvorený zo všetkých vstupov, ktoré menia výstup — promptu, efektívneho
modelu, politiky vzorkovania, počtu snímok, režimu sémantickej analýzy, odtlačku SHA-256
normalizovanej nápovedy zamerania, okna zamerania, `transcript`,
`audioTranscript` a príznaku kontaktného hárka — takže zmena ktoréhokoľvek z týchto
rozmerov spôsobí minutie vyrovnávacej pamäte, nikdy nie opätovné použitie zastaraného výsledku. Verzia
politiky vizuálnej deduplikácie, prahová hodnota a ohraničený počet kandidátskych snímok sú tiež explicitne uvedené v
kľúči a metadátach vyrovnávacej pamäte výsledkov; zmena politiky preto nemôže opätovne použiť zastaraný
popis celého videa. Metadáta vyrovnávacej pamäte výsledkov v4 uchovávajú režim a
odtlačok, nikdy nie nespracovanú úlohu používateľa. Metadáta ochranných mechanizmov uvádzajú požadovaný
aj efektívny režim analýzy; požadovaný režim `focused` bez použiteľného používateľského textu
sa vykazuje ako efektívne `full`.

Ochranný mechanizmus extrahuje každú podporovanú časť videa, ale opíše najviac
`modalityBridgeVideoMaxVideos`. Pre cieľ, o ktorom je dokázané, že má
`supportsVideo === false`, sa zlyhané videá a videá nad limitom zmenia na explicitné bezpečné
textové značky, takže neprežije žiadne nespracované video. Keď je schopnosť neznáma, tieto časti
si zachovajú svoj nosič videa; akýkoľvek záložný prepis sa riadi vyššie uvedenou ohraničenou konverziou
textu. Ciele s `supportsVideo === true` obchádzajú bridge.
Signál prerušenia požiadavky klienta sa šíri cez sťahovanie, front brokera,
podprocesy a volania na vytváranie popisov; prerušenia zastavia spracovanie medzi videami a nikdy
neumožnia otvorené pokračovanie s nespracovaným médiom.

Nastavenia za behu sú uložené v databáze a validované pomocou Zod:

| Kľúč                                | Predvolená hodnota | Rozsah / správanie                                                                                             |
| ----------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`            | Voliteľné runtime prostredie, vyžaduje explicitné povolenie                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`           | `full` zachováva všeobecné titulky; `focused` používa ohraničený, nedôveryhodný kontext posledného používateľa |
| `modalityBridgeVideoModel`          | `""`               | Zdedí model Vision Bridge                                                                                      |
| `modalityBridgeVideoFrameCount`     | `8`                | 1–16                                                                                                           |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`        | `uniform`, `scene_aware` alebo proporcionálne `segment_aware`; pri zlyhaní detektora sa použije `uniform`      |
| `modalityBridgeVideoMaxVideos`      | `1`                | 1–4                                                                                                            |
| `modalityBridgeVideoTimeout`        | `120000`           | 1000–120000 ms                                                                                                 |

Staršie uložené hodnoty časového limitu pre video nad 120 sekúnd sa obmedzia na
termín sprostredkovateľa; nové zápisy nastavení nad týmto limitom sa odmietnu.
`GET /api/modality-bridge/video/runtime` pred autentifikáciou alebo kontrolou runtime prostredia
vyžaduje dôveryhodnú označenú lokálnosť spätnej slučky a následne vyžaduje
autentifikáciu správy. Vracia iba `available`, sanitizované verzie FFmpeg/ffprobe a pevne stanovený
dôvod, keď runtime prostredie nie je dostupné. Interný koncový bod extrakcie nie je
verejné API na nahrávanie: pri nasýtení frontu vráti `503` spolu s `Retry-After`, pri
odpojení volajúceho vráti `499` a pri dosiahnutí pevného termínu sprostredkovateľa vráti `504`. Konvertované odpovede pridávajú
`video->text;model=<visionModel>;parts=<videos>` do centrálnej hlavičky
`x-omniroute-modality-bridge` bez odstránenia segmentov Vision alebo Audio.

### Maskovanie PII (`piiMasker.ts`)

Spúšťa sa v **oboch** fázach.

- **`preCall`** naklonuje dátové zaťaženie, prejde položky `system`, `messages`, `input` a
  `prompt` (vrátane položiek s obyčajným reťazcom) a na reťazcové polia `content`/`text`
  aplikuje `processPII()` (z `@/shared/utils/inputSanitizer`). Keď je
  `PII_REDACTION_ENABLED=true`, zistené PII sa v odchádzajúcom
  dátovom zaťažení redigujú. Toto je nezávislé od `INPUT_SANITIZER_MODE` (ktorý riadi iba
  politiku proti injektáži promptov). Keď je redigovanie vypnuté, volanie zaznamená počty
  detekcií bez prepisovania obsahu.
- **`postCall`** vytvorí hĺbkovú kópiu odpovede a spustí `sanitizePIIResponse()` spolu
  s maskovaním štruktúry Responses API (`maskResponsesOutput` — pokrýva
  `output_text` a `output[].content[].text`). Ak dôjde k akémukoľvek redigovaniu,
  upravená odpoveď nahradí pôvodnú.

Ochranné pravidlo nikdy neblokuje; iba pridáva anotácie (`meta.detections`,
`meta.redacted`) alebo prepisuje obsah.

### Injektáž promptov (`promptInjection.ts`)

Zisťuje nepriateľské štruktúry v obsahu dodanom používateľom a vynucuje
nakonfigurovanú politiku. Správanie určujú premenné prostredia a možnosti
konštruktora:

| Nastavenie      | Premenná prostredia                                                                                    | Predvolená hodnota | Účinok                                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------ | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Povolené        | `INPUT_SANITIZER_ENABLED`                                                                              | `true`             | Keď je `false`, ochranné pravidlo sa okamžite ukončí.                                                                                                                                           |
| Režim           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`             | Politika injektáže: `block`, `warn` alebo `log`. (`redact` sa prijíma kvôli spätnej kompatibilite, ale **neodstraňuje** text injektáže; prepis PII v požiadavke riadi `PII_REDACTION_ENABLED`.) |
| Prah blokovania | možnosť `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`             | Minimálna závažnosť potrebná na blokovanie. Pri predvolenom nastavení sa stredná závažnosť iba sleduje.                                                                                         |

**Priorita režimov** (`getMode`): `options.mode` volajúceho →
**prepísanie príznakom funkcie v DB** pre `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → premenná prostredia `INJECTION_GUARD_MODE` → premenná prostredia `INPUT_SANITIZER_MODE` →
`warn`. Prepísanie z ovládacieho panela má preto prednosť pred premennými prostredia, takže používateľské rozhranie Feature
Flags riadi aktívnu ochranu za behu (bez reštartu). Čítanie z DB je bezpečné pri zlyhaní:
ak skončí chybou, ochrana sa vráti k správaniu založenému na premenných prostredia, a keď nie je
nastavené žiadne prepísanie, správanie je totožné s vyhodnocovaním založeným iba na premenných prostredia.

Zdroje detekcie:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (zdieľaná súprava detektorov
   používaná aj inde v spracovateľskom reťazci).
2. Vstavané `DEFAULT_GUARD_PATTERNS` (aktuálne `system_override_inline` a
   `markdown_system_block`, obe so závažnosťou `high`).
3. Voliteľné `customPatterns` odovzdané prostredníctvom možností konštruktora (reťazce, regulárne výrazy
   alebo záznamy `{ name, pattern, severity }`).

Keď `mode === "block"` **a** aspoň jedna detekcia dosiahne prahovú hodnotu
závažnosti, `preCall` vráti `{ block: true, message: "Request rejected:
suspicious content detected" }`. V režimoch `warn`/`log` ochranný mechanizmus udalosť zaznamená, ale
volanie povolí. Zdieľaná pomocná funkcia `evaluatePromptInjection()` sa tiež exportuje
pre volajúcich, ktorí potrebujú vyhodnocovať prompty bez použitia registra.

**Limit skenovania (v3.8.20):** detektor kontroluje iba **prvých 16 KB**
spojeného textu promptu — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtov) v
`src/shared/utils/inputSanitizer.ts`. Funkcie `detectInjection()` aj
`evaluatePromptInjection()` pred spustením cyklu vzorov používajú
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Direktívy injekcie sa nachádzajú blízko začiatku vstupu, takže
toto obmedzuje využitie CPU/GC regulárnymi výrazmi pri payloads s veľkosťou niekoľkých stoviek KB bez oslabenia detekcie (pozri
#3932, #4041).

### Maskovanie prihlasovacích údajov (`credentialMasker.ts`)

Spúšťa sa v **oboch** fázach, ako posledné v predvolenom reťazci (priorita `95`). Rediguje
známe vzory API kľúčov / tajných tokenov z odchádzajúceho payloadu (obsah správ,
argumenty volaní nástrojov, výsledky nástrojov) **aj** z odpovede poskytovateľa, aby
prihlasovací údaj vložený do promptu (alebo vrátený vo výsledku nástroja) neunikol
externému poskytovateľovi ani späť klientovi.

- **Iba po explicitnom zapnutí**, podľa rovnakej konvencie ako redigovanie PII (súvisiace s pevným pravidlom č. 20):
  vypnuté, pokiaľ `settings.credentialRedactionEnabled === true` **alebo**
  `CREDENTIAL_REDACTION_ENABLED=true`. Keď je vypnuté, ochranný mechanizmus nevykonáva žiadnu akciu —
  nikdy neblokuje ani neprepisuje.
- `redactCredentials()` prechádza celý strom payloadu/odpovede (`walkValue()`,
  bezpečne voči znečisteniu prototypu, bezpečne voči cyklom prostredníctvom `WeakSet`) a nahrádza
  zhody zástupným symbolom `[REDACTED:<type>]`, pričom klonuje iba vetvy, ktoré sa
  skutočne zmenili.
- `CREDENTIAL_PATTERNS` pokrýva kľúče poskytovateľov LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), platobné kľúče (Stripe, Square), cloudové
  kľúče (prístupový kľúč AWS, Twilio, SendGrid, Mailgun), súkromné kľúče / JWT,
  reťazce pripojenia obsahujúce prihlasovacie údaje (`mongodb://user:pass@...` atď.) a
  všeobecný vzor hodnoty hlavičky `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Kľúče vo formáte hlavičky (`authorization`, `x-api-key`, `api-key`,
  `apikey`) sa redigujú štrukturálne (iba hodnota, prefix schémy ako
  `Bearer `/`Basic ` sa zachová), a nie prostredníctvom všeobecného textového regulárneho výrazu.
- Ochranný mechanizmus nikdy neblokuje; iba prepisuje (`modifiedPayload` /
  `modifiedResponse`) a pridáva anotácie (`meta.credentialsRedacted`, `meta.count`).

Ochrana proti regresii: `tests/unit/credential-masker-guardrail.test.ts`.

## Základný kontrakt (`base.ts`)

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
  block?: boolean; // hodnota true okamžite ukončí reťazec
  message?: string; // zobrazí sa pri blokovaní
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vrátené metódou preCall na úpravu požiadavky
  modifiedResponse?: TValue; // vrátené metódou postCall na úpravu odpovede
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

Ochranný mechanizmus signalizuje „bez zmeny“ vrátením hodnoty `void`, `{}` alebo
`{ block: false }`. Vrátenie hodnoty `modifiedPayload`/`modifiedResponse` nahradí
hodnotu prechádzajúcu reťazcom pre nasledujúce ochranné mechanizmy.
`signal?: AbortSignal` prenáša životný cyklus volajúceho do ochranných mechanizmov. Prerušenie požiadavky je zámernou výnimkou typu fail-open: mediálne mosty zastavia prácu a vykonajú vyčistenie bez obnovenia nespracovaných médií pre cieľ, o ktorom je známe, že ich nepodporuje.

## Register (`registry.ts`)

Jediná inštancia `guardrailRegistry` poskytuje:

- `register(guardrail)` — pridá ochranný mechanizmus (alebo ho nahradí podľa normalizovaného názvu) a
  opätovne zoradí mechanizmy vzostupne podľa `priority`.
- `clear()` / `list()` — administratívne pomocné metódy.
- `runPreCallHooks(payload, context)` — prechádza aktívnymi ochrannými mechanizmami, odovzdáva
  payload prostredníctvom `modifiedPayload` a zastaví sa pri prvom výskyte `block: true`.
- `runPostCallHooks(response, context)` — rovnaký postup na strane odpovede.
- `resetGuardrailsForTests({ registerDefaults })` — vymaže stav a voliteľne
  znova zaregistruje predvolené mechanizmy, aby sa zabezpečila čistá izolácia testov.

Obe spúšťacie metódy vracajú `{ blocked, payload|response, results, guardrail?, message? }`,
kde `results` je pole záznamov `GuardrailExecutionResult`, ktoré obsahujú
polia `blocked`, `skipped`, `modified`, `error` a `meta` pre každý ochranný mechanizmus,
čo je užitočné pri trasovaní.

### Vypnutie ochranných mechanizmov pre jednotlivé požiadavky

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` zhromažďuje
deduplikovaný zoznam názvov ochranných mechanizmov, ktoré sa majú pre aktuálnu
požiadavku preskočiť. Zdroje (všetky sú voliteľné a zlúčia sa):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` v tele požiadavky (na najvyššej úrovni)
- `metadata.disabledGuardrails` v tele požiadavky
- Hlavička `x-omniroute-disabled-guardrails` (alebo staršia
  `x-disabled-guardrails`)

Hodnoty môžu byť polia reťazcov alebo reťazec oddelený čiarkami; názvy sa
normalizujú na malé písmená vo formáte kebab-case (`pii_masker` → `pii-masker`). Výsledok
sa prostredníctvom `context.disabledGuardrails` odovzdá registru, ktorý preskočí
zodpovedajúce ochranné mechanizmy (`skipped: true` v `results`).

## Poradie vykonávania

Pre každú požiadavku prechádzajúcu cez `src/sse/handlers/chat.ts` a
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` zostaví zoznam vynechaných ochranných mechanizmov z kľúča API, tela požiadavky
   a hlavičiek.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` spustí ochranné mechanizmy vo vzostupnom
   poradí priority:
   - Zakázané ochranné mechanizmy sa zaznamenajú ako `skipped`.
   - Metóda `preCall` každého ochranného mechanizmu môže prepísať dátový obsah prostredníctvom `modifiedPayload`.
   - Prvý výskyt `block: true` ukončí reťazec a obslužná rutina vráti
     odpoveď o odmietnutí ochranným mechanizmom.
3. (Potenciálne prepísaný) dátový obsah pokračuje do kombinovaného smerovania a následného
   odoslania nadradenému systému.
4. Po zostavení odpovede spustí `guardrailRegistry.runPostCallHooks(...)`
   rovnaký reťazec nad odpoveďou. Hodnota `block: true` v tomto bode zahodí odpoveď
   nadradeného systému.

Ochranné mechanizmy, ktoré vyvolajú výnimku, sa zaznamenajú s `error: <message>` a zapíšu do protokolu
prostredníctvom `logger.warn`, ale reťazec pokračuje — zámerne využíva princíp fail-open.

## Konfigurácia

Premenné prostredia čítané vstavanými ochrannými mechanizmami:

| Premenná                              | Používa ju                          | Účinok                                                                                                                                |
| ------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`                  | Nastavením na `false` sa detekcia úplne zakáže.                                                                                       |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`                  | Pravidlá pre injektáž: `warn`, `block` alebo `log`. Staršia hodnota `redact` text injektáže neprepisuje.                              |
| `INJECTION_GUARD_MODE`                | `prompt-injection`                  | Režim ochrany proti injektáži; zároveň ide o príznak funkcie v databáze, ktorý **má prednosť** pred premennými prostredia (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`                  | Minimálna závažnosť, ktorú režim `MODE=block` odmietne: `high` (predvolené), `medium` alebo `low`.                                    |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`                  | Starší alias pre `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`                        | Ak je nastavená na `true`, osobné údaje v požiadavke sa redigujú (nezávisle od režimu injektáže).                                     |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (následné spracovanie) | Ovláda správanie maskovania na strane odpovede.                                                                                       |

Ochranné mechanizmy Modality Bridge čítajú konfiguráciu za behu z úložiska nastavení
založeného na databáze (`getSettings()`), nie z premenných prostredia. Primárne kľúče pre Vision sú
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` a
`modalityBridgeCacheMaxEntries`. Staršie kľúče
`visionBridge*` sa akceptujú iba ako zdokumentované záložné hodnoty na čítanie počas jedného cyklu;
zápisy z ovládacieho panela používajú primárne kľúče. Predvolené hodnoty a záložný
resolver sa nachádzajú v `src/shared/constants/modalityBridgeDefaults.ts`, pričom staršie
konštanty zostávajú zachované v `src/shared/constants/visionBridgeDefaults.ts`.

Audio používa `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` a `modalityBridgeAudioMaxClips` spolu so zdieľanými
nastaveniami `modalityBridgeCache*`. Audio nemá záložný mechanizmus pre staršie kľúče, pretože tieto
kľúče boli zavedené spolu so schémou Modality Bridge.

Video používa `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` a
`modalityBridgeVideoTimeout` spolu so zdieľanými nastaveniami `modalityBridgeCache*`.
V predvolenom nastavení je zakázané, pretože FFmpeg/ffprobe sú voliteľné prevádzkové
závislosti a opis snímok zvyšuje latenciu a náklady na model.

## Vlastné ochranné mechanizmy

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Denný rozpočet bol prekročený" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Postup:

1. Vytvorte `src/lib/guardrails/myGuardrail.ts`, ktorý rozširuje `BaseGuardrail`.
2. Implementujte `preCall` a/alebo `postCall`.
3. Buď ho zaregistrujte pri importe (pridaním z `registerDefaultGuardrails`), alebo
   zavolajte `guardrailRegistry.register(...)` za behu — register nahradí
   každý predchádzajúci ochranný mechanizmus s rovnakým normalizovaným názvom.
4. Pridajte testy do `tests/unit/` (existujúce príklady:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testovanie

Medzi testami používajte `resetGuardrailsForTests()`, aby ste začali zo známeho stavu.
Ak chcete začať s prázdnym registrom a zaregistrovať iba testované ochranné mechanizmy,
odovzdajte `{ registerDefaults: false }`. Vision Bridge podporuje vkladanie závislostí
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge poskytuje ekvivalentné
body napojenia pre nastavenia, schopnosti, výber modelu STT, kontroly prihlasovacích
údajov a transkripciu. Testy tak môžu overiť oba toky bez prístupu k databáze
alebo sieti.

## Pozrite tiež

- `src/lib/guardrails/` — implementácia
- `src/shared/utils/inputSanitizer.ts` — zdieľaný detektor, ktorý zabezpečuje
  detekciu injektovania promptov a maskovanie osobných údajov
- `src/shared/constants/visionBridgeDefaults.ts` — predvolené nastavenia Vision Bridge a
  zoznam modelov s vynúteným premostením
- `src/shared/constants/modalityBridgeDefaults.ts` — zdieľané predvolené nastavenia behu pre Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonálna vrstva (istič, doby čakania)
- `docs/reference/ENVIRONMENT.md` — úplný prehľad premenných prostredia

## Pokrytie trás ochranou pred injektovaním a red-team testovanie (Fáza 8 · Blok D)

Ochrana pred injektovaním (`createInjectionGuard` / `withInjectionGuard`) pokrýva všetky trasy,
ktoré prijímajú používateľské prompty. Rešpektuje `INJECTION_GUARD_MODE` (predvolená hodnota `warn` = iba zaznamenať;
`block` = vráti HTTP 400 `SECURITY_001`).

| Typ               | Trasy                                                                                                                                                | Predvolený režim |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Text (existujúce) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| Generatívne       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| Dáta              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

Extrakcia textu (`extractMessageContents`) pokrýva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testovanie (každú noc, `nightly-llm-security.yml`):** promptfoo overuje, že každá trasa blokuje
korpus OWASP-LLM v režime `INJECTION_GUARD_MODE=block`; garak spúšťa sondy (bez tajného kľúča sa preskočí).
Trasa `moderations` je zahrnutá kvôli konzistentnosti — prevádzkovatelia ju môžu v režime blokovania vyňať
prostredníctvom `resolveDisabledGuardrails`.

Nočný pracovný postup (`.github/workflows/nightly-llm-security.yml`, cron + manuálne
spustenie) obsahuje dve úlohy:

- **`promptfoo-guard` (blokujúca)** — spúšťa `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Každý nepriateľský prípad (napr. „ignoruj všetky
  predchádzajúce pokyny…“, prelomenia obmedzení v štýle DAN) overuje, že odpoveď obsahuje
  `error.code === "SECURITY_001"`, t. j. ochrana požiadavku skutočne odmietla.
- **`garak` (poradná)** — spúšťa garak s `--probes promptinject,dan,leakreplay`
  voči lokálnej inštancii OmniRoute (`http://localhost:20128/v1`). Je podmienená dostupnosťou
  tajného kľúča poskytovateľa (`PROMPTFOO_PROVIDER_KEY`); ak nie je dostupný, úloha sa korektne
  preskočí a je zakončená `|| true`, takže iba hlási výsledky bez zlyhania CI.

Pokrytie pomocnej ochrany (`createInjectionGuard` / `withInjectionGuard`)
zahŕňa každú trasu `/v1`, ktorá prijíma prompt; text promptu sa získava z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomocou
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
