# Guardrails (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Hiteles forrás:** `src/lib/guardrails/`
> **Legutóbb frissítve:** 2026-08-29 — v3.8.51 (a Video Bridge átiratának eredetét a hívó deklarálja,
> a szerver még nem ellenőrzi — pontosítva a #11661 alapján)

A guardrailek biztonsági, szabályzati és tartalomátalakítási előírásokat érvényesítenek az OmniRoute és a külső szolgáltatók közötti határon. Minden guardrail megvizsgálhatja (és opcionálisan elutasíthatja, átalakíthatja vagy annotálhatja) a kérés hasznos adatait (`preCall`) és a külső szolgáltatók válaszait (`postCall`).

A rendszer **hiba esetén nyitott**: ha egy guardrail végrehajtás közben kivételt dob, a regisztrációs adatbázis rögzíti a hibát, és a kérés meghiúsítása helyett a következő guardraillel folytatja. A blokkolás mindig explicit döntés (`block: true`), soha nem véletlen.

## Beépített védőkorlátok

A registry importáláskor prioritási sorrendben automatikusan betölt hat védőkorlátot
(lásd: `registry.ts` → `registerDefaultGuardrails()`):

| Prioritás | Név                 | Fázis(ok)      | Fájl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Az alacsonyabb prioritási számok futnak le **először**.

### Képfeldolgozási híd (`visionBridge.ts`) — Modalitáshíd PR-1

Elfogja a **képfeldolgozást nem támogató modelleknek** szánt, képeket tartalmazó kéréseket, és vagy
átirányítja a teljes kérést egy képfeldolgozásra képes modellhez, vagy a képkomponenseket
egy konfigurálható képfeldolgozási modell által létrehozott szöveges leírásokra cseréli
a külső szolgáltatás meghívása előtt. Ez lehetővé teszi, hogy a csak szöveget támogató szolgáltatók transzparens módon kezeljék
a multimodális hasznos adatokat.

Folyamat:

1. Kihagyás, ha a célmodell már támogatja a képfeldolgozást (kivéve, ha szerepel az
   `isVisionBridgeForcedModel` kényszerített hídlási listában).
2. A képkomponensek kinyerése az `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) segítségével, amely az **egységes médiaészlelőnek**,
   vagyis az `open-sse/utils/mediaParts.ts` fájlban található `detectMediaParts()` függvénynek delegálja a feladatot — ez a
   kombinált kompatibilitási szűrővel megosztott egyetlen hiteles forrás.
   A kinyerés engedélyezési listája azokra a legfelső szintű komponensformákra korlátozódik,
   amelyeket a `replaceImageParts` vissza tud illeszteni (a kinyerés↔csere szerződés): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, valamint Responses API `input_image`. A beágyazott találatok és
   a csak jelzőként szolgáló formák a kombinált szűrőhöz tartoznak, és soha nem kerülnek kinyerésre.
   Kihagyás, ha egy sem található.
3. A futásidejű konfiguráció feloldása a `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) segítségével: az új `modalityBridge*`
   beállításkulcsok élveznek elsőbbséget; a korábbi `visionBridge*` kulcsok **egy cikluson át
   tartalékmegoldásként** megmaradnak (visszaállítási időablak). Ha a híd le van tiltva, a rendszer minden
   médiabejárás előtt kihagyja a feldolgozást.
4. A módválasztó (`modalityBridgeVisionMode`, lásd az alábbi táblázatot) dönti el,
   hogy átirányítás vagy leírás történjen. Az átirányítás olyan `modifiedPayload` értéket ad vissza, amelyben csak a `model`
   van kicserélve, valamint a következő metaadatokat: `{ rerouted, fromModel, toModel, imagesKept }`.
5. Leírási útvonal: a képek számának korlátozása `maxImages` értékre, a feladattudatos prompt összeállítása,
   a leírás-gyorsítótár ellenőrzése, a képfeldolgozási modell **párhuzamos**
   meghívása (`Promise.allSettled`), majd `[Image N]: <description>` szövegkomponensek beillesztése
   a képek helyére. A sikertelen leírás `null` értéket eredményez, és az eredeti képkomponens
   **megmarad** (#4012) — kivéve a kombinált leírási útvonalon, amikor minden
   leírás sikertelen volt; ebben az esetben egy igazoltan képfeldolgozást nem támogató külső szolgáltatás
   `(unavailable — no vision-capable provider connected)` helyőrzőt kap (#8430).
6. A `modifiedPayload` és a metaadatok (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) visszaadása.

#### Módválasztó (`modalityBridgeVisionMode`)

| Mód        | Alapértelmezett | Viselkedés                                                                                                                                                                                                                                                                                                                                                                           |
| ---------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔               | Változatlan korábbi heurisztika (#6640/#7204): a nem kombinált/`auto/` modelleket a legjobb képfeldolgozási modellhez irányítja át, kivéve, ha az eredeti modell már rendelkezik használható hitelesítő adatokkal (ekkor leírást készít); a kombinált célmodellek esetén mindig leírást készít.                                                                                      |
| `describe` |                 | Mindig leírást készít — teljesen kihagyja az átirányítási blokkot; mindig a felhasználó által kiválasztott modell válaszol.                                                                                                                                                                                                                                                          |
| `reroute`  |                 | Kényszerített átirányítás: megkerüli a hitelesítő adatokkal rendelkező modell megtartását biztosító ellenőrzést. Az átirányítási **célra** vonatkozó hitelesítőadat-ellenőrzés továbbra is érvényes — ha nincs használható képfeldolgozási célmodell, a kérés visszatér a leírási útvonalhoz, így nyers képek soha nem jutnak el egy csak szöveget kezelő háttérrendszerhez (#8430). |

A kényszerített módok **azelőtt** rövidre zárják a folyamatot, hogy az automatikus heurisztika lefutna; az `auto` viselkedése
bájtról bájtra megegyezik a PR-1 előtti védőkorlátéval.

#### API-kulcs hatóköre (`visionBridgeKeyScope.ts`)

Ha a hívó API-kulcsa korlátozza az `allowedConnections` kapcsolatokat, a kvótakereteket
(`allowedQuotas`) vagy a modelleket (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), akkor a híd csak olyan
átirányítási és leírási modelleket választ, amelyeket a kulcs használhat, és csak olyan kapcsolatokon,
amelyeket a kulcs használhat. A leírási hívás ezután mindig az OmniRoute önhurokon keresztül történik,
az `x-omniroute-self-loop-key-id` fejléccel, így a fogadó csevegési kérés
ismét érvényesíti az adott kulcs kapcsolat- és modellházirendjét. Az `enforceApiKeyPolicy()`
csak az önhurok bearer tokenjével együtt veszi figyelembe ezt a fejlécet, ezért az kizárólag
szűkítheti a hozzáférést, a fel nem oldható azonosítót pedig elutasítja.

Ha a kulcshoz egyetlen képfeldolgozási modell sem engedélyezett, a leírási útvonal félreáll, és
a kérés változatlanul halad tovább, ugyanazzal a hibára nyitott viselkedéssel, mint egy letiltott
védőkorlát esetén (meta: `{ skipped: true, reason: "no_permitted_vision_model" }`).
A kulcs nélküli kérések, valamint az ilyen korlátozások nélküli kulcsok pontosan ugyanúgy viselkednek,
mint korábban.

#### Feladattudatos leírási prompt (`modalityBridgeVisionTaskAware`)

Alapértelmezés szerint **true**. A `composeVisionPrompt()` (`visionBridgeHelpers.ts`) hozzáfűzi
az **utolsó felhasználói üzenet** szövegét (500 karakterre csonkítva) az alap
leíró prompthoz, így a leírást arra irányítja, amit a felhasználó ténylegesen kért
(codex-vision-proxy minta), és arra kéri a látásmodellt, hogy írja át a látható
szöveget. Ha a jelző ki van kapcsolva — vagy nincs felhasználói szöveg —, az
alapprompt változatlanul lesz használva.

A leíró önhurok saját OpenAI-kompatibilis kérése (`callVisionModelSingle()`
a `visionBridgeHelpers.ts` fájlban) mindig `image_url.detail: "high"` értéket
kér — feltétel nélkül, minden hívóhoz/szolgáltatóhoz, bármilyen kliensjelzéstől
függetlenül. Az alacsony részletességű mintavételezés pontosan annál a
szövegátírási feladatnál rontja az OCR pontosságát, amelyet ez a prompt kér,
ezért maga a leíró hívás mindig nagy részletességet kér, függetlenül attól,
hogy az eredeti bejövő kérés milyen részletességi szintet használt. Ez csak
a belső leíró kérés törzsét érinti; nem változtatja meg azt, ahogyan az
OmniRoute továbbítja a hívó saját `image_url.detail` értékét az elsődleges
kérésben — ez az alapértelmezés külön kerül alkalmazásra, és csak az észlelt
OpenCode-klienseknél, a `defaultImageDetail()` függvényben
(`open-sse/handlers/chatCore/upstreamBody.ts`). A leíró önhurok Anthropic
vezetékformátumú ágában nincs `detail` mező, ezért egyik alapértelmezés sem
érinti.

#### A leírás kimeneti korlátja (`modalityBridgeVisionMaxChars`)

| Kulcs                          | Alapértelmezés | Tartomány          |
| ------------------------------ | -------------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`            | `0` vagy 100–50000 |

A `0` (alapértelmezés) azt jelenti, hogy **nincs korlát** — a
`callVisionModel()` által visszaadott leírás módosítás nélkül kerül
továbbításra, megőrizve a meglévő viselkedést. A 100–50000 tartomány bármely
értéke `…` utótaggal csonkítja a leírást, mielőtt az
`[Image N]: <description>` formában visszaillesztésre kerülne
(`VisionBridgeGuardrail.preCall()` a `src/lib/guardrails/visionBridge.ts`
fájlban). Növelje ezt a részletgazdag OCR-feladatokhoz, ahol a downstream
modellnek a teljes átírásra van szüksége; csökkentse a bőbeszédű látásmodellek
tokenhasználatának korlátozásához. Az irányítópult mezője a Vision lap Advanced
paneljén található (`modality-bridge-max-chars` a
`ModalityBridgeVisionTab.tsx` fájlban), és minden 1 és 99 közötti értéket a
100-as alsó korlátra emel, miközben az explicit `0` értéket érintetlenül
hagyja — a `0` önmagában is érvényes Zod-érték
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nem csupán
a „nincs beállítva” alapértelmezés.

#### Leírás-gyorsítótár (`modalityBridge/bridgeCache.ts`)

Memóriabeli LRU + TTL gyorsítótár a leírások kimeneteihez, amelyet az egész
folyamat megoszt. A kulcs =
`sha256(imageRef + composedPrompt + configuredBridgeModel)`, hosszúságelőtagos
keretezéssel (mezőhatárok közötti ütközések nélkül). A modellkomponens a
**konfigurált** hídmodell, nem pedig az a modell, amely ténylegesen válaszolt —
a `callVisionModel` belsőleg tartalékmodellre válthat, és a próbálkozásonkénti
kulcsképzés széttöredezné a gyorsítótárat. A sikertelen leírások soha nem
kerülnek gyorsítótárba. Beállítások:

| Kulcs                           | Alapértelmezés | Tartomány |
| ------------------------------- | -------------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`         | —         |
| `modalityBridgeCacheTtlMinutes` | `60`           | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`          | 10–5000   |

#### Távoli képek normalizálása (önhurok-leírás/base64-lekérés)

Amikor a híd saját maga kér le egy **távoli** képet — az Anthropic leíró
önhívásához és a claude-vezetékformátum base64-konverziójához
(`ensureBase64ImagesForClaudeWire`), mindkét esetben a
`visionBridgeHelpers.ts` fájlban található `fetchRemoteImageAsDataUri()`
segítségével —, az eredményül kapott adat-URI a `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) függvényen halad át, mielőtt beágyazásra
kerülne a látásmodell kérésébe. A túlméretezett képek **2048px hosszú élre**
lesznek lekicsinyítve (az OpenAI/Anthropic által már kiszolgálóoldalon
alkalmazott átméretezési korláttal összhangban), ami csökkenti a feltöltendő
bájtok számát és a késleltetést anélkül, hogy megváltoztatná, mit lát a
látásmodell. Az átméretezés a dinamikus importtal betöltött `sharp` csomagot
használja: olyan platformon, ahol a natív binárisa nem tölthető be, a
`normalizeDataUri()` **soha nem dob kivételt** — ehelyett változatlanul
továbbítja az eredeti bájtokat, így a leíró/base64-konverziós útvonal mindig
működőképes marad. A nem kép jellegű bájtok (amikor a lekérés nem
dekódolható képet adott vissza) szintén változatlanul haladnak tovább. Ez a
normalizálás azokra a képekre korlátozódik, amelyeket a híd a saját
önhívásához kér le — soha nem alkalmazza a hívó nyers, változtatás nélkül
továbbított hasznos terhére, összhangban a kizárólag explicit engedéllyel
történő módosítás elvével (Hard Rule #20).

#### Beállításséma + migráció

Az új `modalityBridge*` kulcsok Zod-validálása az `updateSettingsSchema`
sémában történik (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, a három
`modalityBridgeCache*` kulcs, valamint az Audio Bridge által használt
`modalityBridgeAudio*` csoport. A `141_modality_bridge_settings.sql` migráció
a meglévő örökölt `visionBridge*` értékeket átmásolja a megfelelő új kulcsokba
(idempotens módon, és soha nem írja felül az üzemeltető által beállított
`modalityBridge*` értékeket); az örökölt kulcsok egy kiadási cikluson át
továbbra is elfogadottak olvasási tartalékként.

#### Átláthatósági fejléc + statisztikák

A leírássá alakított válaszok tartalmazzák az
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
fejlécet (amelyet a `buildModalityBridgeHeader()` épít fel a
`modalityBridge/bridgeStats.ts` fájlban, és a `withModalityBridgeHeader()`
helyez el a `src/sse/handlers/chatHelpers.ts` fájlban). Az átirányított kérések
**nem** kapnak fejlécet — a hasznos teher érintetlen maradt, a modellcsere pedig
már látható a választörzs `model` mezőjében.

A `GET /api/modality-bridge/stats` (kezelői hitelesítéssel, a
`GET /api/settings` végponttal azonos szinten) visszaadja a memóriában tárolt,
modalitásonkénti `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` számlálókat a `vision`, `audio` és
`video` modalitásokhoz. Az `averageLatencyMs` nevezője a `latencySamples`, nem pedig
az összes próbálkozás; az időmérés nélküli műveletekhez nem jön létre mesterséges,
nulla ezredmásodperces minta. A `bridged` továbbra is a sikeres konverziók
visszafelé kompatibilis álneve; a sikertelen próbálkozások nem növelik az értékét.
A számlálók a folyamat újraindításakor szándékosan nullázódnak
(telemetria, nem elszámolás).

#### Irányítópult-konfiguráció

A külön erre szolgáló irányítópult-oldal:
`/dashboard/settings/modality-bridge`. Az URL-ből címezhető `Vision`, `Audio` és
`Video` fülek a `tab` érték módosításakor megőrzik a lekérdezési paramétereket.
A Vision fülön beállítható az engedélyezés, a mód, a modell kiválasztása (beleértve
az automatikus alapértelmezést), a feladatfüggő promptolás, valamint a speciális
időtúllépési, kép-, leíráshossz- és gyorsítótár-korlátok; ezenkívül futásidejű
számlálókat és védett mintakérést is biztosít. Az Audio fül szintén működőképes:
beállítható rajta az engedélyezés, egy kizárólag STT-modelleket tartalmazó,
Auto lehetőséget is kínáló modellválasztó, az időtúllépési és maximális
kliphossz-korlátok, továbbá megjeleníti a hangszámlálókat, és `input_audio`
mintatesztet biztosít. A Video fül működőképes: jelzi az FFmpeg/ffprobe futásidejű
állapotát — a négy explicit felületi állapot egyikével (`unknown`, amíg az
ellenőrzés folyamatban van vagy nem tudott befejeződni; `restricted`, ha az
irányítópult nem loopback gazdagépen fut, ezért az ellenőrzést a kliensoldal
kihagyja; `unavailable`, ha az ellenőrzés megtörtént, és megerősítette a hiányt;
vagy `available`, az FFmpeg/ffprobe verzióival) —, tartósan menti az
engedélyezési, modell-, képkocka-, videó- és időtúllépési korlátokat, a
modellválasztót a képfeldolgozásra képes modellekre szűri, és megjeleníti a
videószámlálókat.

Az AI-beállítások alatt korábban található Vision Bridge kártya immár az új
oldalra mutató kompatibilitási hivatkozás; már nem tart fenn egy második
űrlappéldányt. A Media Providers az Image-to-Text és Speech-to-Text
munkafolyamatokat is a megfelelő Modality Bridge fülekhez kapcsolja, a meglévő
Speech-to-Text tesztfelület eltávolítása nélkül.

**Önhurok beléptetésének megkerülése:** amikor a leíró hívás az OmniRoute saját
`/v1` önhurkán keresztül halad (nem szabványos szolgáltatói modell), az alkérés
elküldi az `x-omniroute-admission-bypass: internal` fejlécet, és a feloldott
önhurok-hitelesítő adattal hitelesít — helyi módban a helyi `sk_omniroute`
jelzőértékkel, egyébként pedig az üzemeltető által konfigurált
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` környezeti kulccsal (#1350), így a
`REQUIRE_API_KEY=true` telepítések is képesek végrehajtani a leíró hívást. A
megkerülés csak pontosan ezekkel a hitelesítő adatokkal fogadható el, így külső
kliensek nem használhatják a fejlécet a beléptetés kihagyására.

A régi alapértelmezések a `src/shared/constants/visionBridgeDefaults.ts`
fájlban találhatók; az új mód-, feladatfüggő és gyorsítótár-alapértelmezések,
valamint a beállításfeloldó a
`src/shared/constants/modalityBridgeDefaults.ts` fájlban találhatók. A védelmi
réteg `deps` konstruktoropciót biztosít, így a tesztek hamis `getSettings` és
`callVisionModel` implementációkat injektálhatnak.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

A hangot tartalmazó csevegési kéréseket még azelőtt elfogja, hogy azok egy olyan
célhoz érnének, amelyről nem ismert, hogy képes hangbemenetet fogadni. Magát a
csevegési kérést soha nem irányítja át: a hangrészeket a meglévő,
OpenAI-kompatibilis multipart végponton keresztül átírja, a kiválasztott
csevegési modell pedig a szöveges átiratokkal folytatja a feldolgozást.

Folyamat:

1. A `supportsAudio` feloldása a `getResolvedModelCapabilities()` segítségével.
   Elsőbbséget élveznek a szolgáltatói nyilvántartás explicit metaadatai, majd a
   statikus modellmetaadatok, végül a szinkronizált `modalities_input`. Az
   `audio` elemet nem tartalmazó deklarált bemeneti lista értéke `false`; ha
   nincs képességre utaló információ, az érték `null` marad. A konzervatív hidat
   a `false` és a `null` egyaránt aktiválja, míg a `true` megkerüli azt.
2. A `modalityBridgeAudio*` beállítások feloldása, majd minden üzenetből a
   kivágható legfelső szintű hangrészek kinyerése a megosztott
   `detectMediaParts()` érzékelővel. A támogatott átviteli formák az OpenAI
   `input_audio`, az `audio_url` és a `source.media_type: "audio/*"`. A
   beágyazott hangot az útválasztás érzékeli, de a kivágási útvonal nem távolítja
   el. A feldolgozható elemek számát a `modalityBridgeAudioMaxClips` korlátozza;
   a későbbi részek változatlanok maradnak.
3. A konfigurált `provider/model` figyelembevétele, vagy a
   `selectAudioBridgeModel()` engedélyezése arra, hogy stabil katalógussorrendben
   végigjárja az `AUDIO_TRANSCRIPTION_PROVIDERS` elemeit, és kiválassza az első
   olyan modellt, amelyhez használható, aktív szolgáltatói hitelesítő adat
   tartozik.
4. A `callAudioTranscription()` a base64/data-URI formátumú hangot multipart
   `file` mezővé alakítja, vagy a távoli `audio_url` erőforrást a kizárólag
   nyilvános címeket engedélyező kimenő védelmen keresztül, DNS-rögzítéssel és
   25 MB-os korláttal tölti le. Ezután POST kéréssel elküldi a fájlt és a
   kiválasztott modellt a helyi `/v1/audio/transcriptions` önhuroknak, a
   `resolveSelfLoopBearer()` segítségével hitelesítve. A meglévő átírási útvonal
   elvégzi a normál hitelesítőadat-keresést, a várakozási idő- és
   sebességkorlát-kezelést, valamint a szolgáltatóhoz történő továbbítást.
5. A sikeres hívások a megfelelő részeket `[Audio N]: <transcript>` szövegre
   cserélik. A hívások a `Promise.allSettled` használatával futnak: egy adott
   hívás sikertelensége megőrzi az eredeti hangrészt (#4012 szerződés). Ha
   minden hívás sikertelen, és bizonyított, hogy a cél
   `supportsAudio === false`, a részekből
   `[Audio N]: (unavailable — no STT provider connected)` lesznek (#8430
   szerződés). Ismeretlen cél (`null`) esetén az összes hívás sikertelensége
   változatlanul hagyja a kérést. Egy bizonyítottan csak szöveget támogató cél,
   amelyhez nincs használható STT-hitelesítő adat, hálózati hívás indítása
   nélkül ugyanezt az explicit helyettesítő szöveget kapja.

A sikeres átiratok a teljes folyamatra kiterjedő Modality Bridge LRU/TTL
gyorsítótárat használják. A kulcs a hanghivatkozást, a stabil
`audio-transcription` műveletcímkét és a kiválasztott STT-modellt kombinálja; a
hibák soha nem kerülnek gyorsítótárba. A hangfeldolgozási próbálkozások frissítik
a megosztott `bridged`, `cacheHits`, `failures` és `lastUsedAt` számlálókat.
Az átalakított válaszok tartalmazzák az
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` fejlécet;
a változatlanul hagyott kérések nem kapnak Audio Bridge szegmenst.

A futásidejű beállításokat adatbázis tárolja, és Zod-validációt használnak:

| Kulcs                         | Alapértelmezett érték | Tartomány                      |
| ----------------------------- | --------------------- | ------------------------------ |
| `modalityBridgeAudioEnabled`  | `true`                | —                              |
| `modalityBridgeAudioModel`    | `""`                  | Automatikus vagy STT-azonosító |
| `modalityBridgeAudioTimeout`  | `60000`               | 1000–300000                    |
| `modalityBridgeAudioMaxClips` | `3`                   | 1–10                           |

A megosztott gyorsítótárat továbbra is a `modalityBridgeCacheEnabled`,
a `modalityBridgeCacheTtlMinutes` és a `modalityBridgeCacheMaxEntries` szabályozza.

### Videóhíd (`videoBridge.ts`, `videoBridgePipeline.ts`)

Elfogja a Chat Completions `messages` és a Responses API `input` legfelső szintű videórészeit,
mielőtt a rendszer meghívna egy olyan célmodellt, amely nem rendelkezik ismert natív videótámogatással.
A támogatott formák az `input_video`, a `video_url`, a `video_source`, a HTTPS URL-ek,
valamint a `data:video/*;base64,...` adat-URI-k. A szövegben szereplő egyszerű fájlneveket
a rendszer nem kezeli videóként.

A `VideoBridgeGuardrail.preCall` (`videoBridge.ts`) felel a kérés bejárásáért,
a képesség- és szabályzat-ellenőrzésért, a kérésenkénti összesítésért, valamint a válasz hasznos adattartalmáért.
Az egyes videók feldolgozása — a beszerzés, a teljes eredmény gyorsítótárazása, egy képkockasorozat
leírása (amely egyesíti a hívó által megadott hangátiratot), továbbá a próbálkozásonkénti
metrikák/megszakítás/takarítás — a `videoBridgePipeline.ts` fájlban található
`processVideoPart` mögött rejtőzik, amelyet a `preCall` ciklusa videórészenként egyszer hív meg.
Ez a modul határozza meg a következő explicit port-határokat is: `VideoMediaBrokerPort`
(bájtok beszerzése és mintavételezett képkockák kinyerése), `VideoAudioTranscriptionPort`
(a hívó által megadott hangátirat egyesítése a mintavételezett képaláírásokkal), valamint
`VideoDrilldownPort` (a képkockák részletes vizsgálatához tartozó perzisztenciahatár; még nincs
bekötve a `processVideoPart` folyamatába — jelenleg csak a különálló
`/api/modality-bridge/video/drilldown` útvonal ír részletes vizsgálati bejegyzéseket).

A nyilvános `/v1` kérési útvonal soha nem importál és nem hív meg alfolyamatot. A távoli
videók letöltése 50 MiB-os korláttal történik; a soron belüli base64-videókra videónként
konzervatív, 36 MiB-os dekódolt méretkorlát vonatkozik, így a modell/üzenetek/keretezés
burkolata a nyilvános JSON-kérések 50 MiB-os befogadási korlátján belül maradhat. A rendszer
a lefoglalás előtt ellenőrzi a soron belüli adatok hosszát és a dekódolt méret becslését.
A kezdeti távoli URL-en és minden átirányításnál HTTPS szükséges, a meglévő, csak nyilvános
célokat engedélyező kimenő forgalmi védelemmel és DNS-rögzítéssel. A bájtok ezután áthaladnak
a pontos belső `POST /api/modality-bridge/video/extract` brókerhatáron. Ez az útvonal
`LOCAL_ONLY` és `SPAWN_CAPABLE` besorolású, csak folyamatonként hitelesített, megbízható
visszacsatolási címről érkező kérést fogad el, és soha nem fogad el URL-t, fájlrendszerbeli
elérési utat, végrehajtható állományt vagy argumentumlistát. Az API törzsméret-feldolgozási
folyamata és a kezelő növekményes törzsolvasója egymástól függetlenül is kikényszeríti
a brókerbemenet 50 MiB-os korlátját. A korlátozott várólista egyszerre egy kinyerést futtat,
négy függőben lévő feladatot engedélyez, a függőben lévő bemenetet pedig 100 MiB-ra korlátozza.

A brókeren belül az `ffprobe` egy privát helyi fájlt olvas; a rögzített formátum-engedélyezési
lista kizárja a lejátszásilista- és jegyzékformátumokat. Az engedélyezett MOV-családba tartozó
konténerek esetében a külső MOV-adathivatkozások alapértelmezés szerint letiltva maradnak,
és a rögzített parancs nem engedélyezi őket. Az `ffprobe` és az `ffmpeg` is kizárólag a
`file` protokollt engedélyező listát, egy szálat és rögzített argumentumtömböket használ,
parancsértelmező nélkül, a végrehajtható állományokat pedig a `PATH` alapján oldja fel.
A csatolt borítóképet tartalmazó adatfolyamok nem minősülnek lejátszható jelöltnek.
Minden lejátszható adatfolyamnak meg kell felelnie a korlátoknak, és a rendszer előnyben
részesíti az explicit alapértelmezett adatfolyamot, mielőtt a determinisztikus, legalacsonyabb
indexű tartalékhoz folyamodna. A videók hossza legfeljebb 600 másodperc, méretük dimenziónként
legfeljebb 8 192 képpont, a forrás összes képpontjának száma pedig legfeljebb 33 554 432 lehet.
Az FFmpeg 1–16, időközépre eső JPEG-képkockából vesz mintát, a hosszú élt legfeljebb
1 024 képpontra kicsinyíti a kisebb bemenetek felnagyítása nélkül, és soha nem kap URL-t.
A mintavételezés alapértelmezés szerint `uniform`. Az opcionális `scene_aware` és a kísérleti
`segment_aware` szabályzat egy további, rögzített FFmpeg-meneten vezeti át a már ellenőrzött
helyi adatfolyamot, korlátozott számú `showinfo`-jelenet-időbélyeget választ ki, és az érzékelő
hibája, időtúllépés, hibás kimenet vagy üres jelölthalmaz esetén determinisztikusan visszatér
ugyanazokhoz az egyenletes időközéppontokhoz. A szegmenstudatos mód a középponti mintákat
az ellenőrzött jelenetintervallumok arányában osztja el; a szegmenstudatos bizonyítékokat
és a tartalék viselkedést az alábbiak részletezik. A rendszer a szigorú, 16 képkockás korlátot
minden szabályzat esetében a kiválasztás után alkalmazza. Ha egy jelenettudatos kéréshez csak
egy képkockányi keret áll rendelkezésre, az aktív teljes videó vagy fókuszablak egyenletes
időközéppontját használja, és `policyEffective: uniform` értéket jelent: egyetlen kiválasztott
jelenetkocka nem képes megőrizni mindkét időbeli végpontot. A hívó opcionálisan megadhat egy
véges fókuszablakot (`start`/`end` másodpercben); a rendszer a határokat a média időtartamához
igazítja, a fordított vagy nem véges ablakokat elutasítja, és minden mintavételi szabályzatot
kizárólag a normalizált intervallumon belül hajt végre. Az eredményül kapott ablak bekerül
a mintavételi metaadatokba és a nem megbízható leírási előtagba, így az alsóbb szintű modellek
megkülönböztethetik a fókuszált részletet a teljes idővonaltól.

A szemantikus képaláírás-fókusz különálló, explicit beállítás. Az alapértelmezett `full`
elemzési mód megőrzi a meglévő képkockapromptot, és soha nem továbbítja a kérés szövegét
a képaláírási modellnek. `focused` módban a híd csak az ugyanabban a Chat- vagy
Responses-tárolóban található legutóbbi, nem üres, felhasználó által létrehozott
`text`/`input_text` értéket olvassa be, NFC-re normalizálja, összevonja a vezérlőkaraktereket
és az üres helyeket, majd 500 Unicode-kódpontra korlátozza. Üres eredmény esetén pontosan
a `full` promptra tér vissza. A használható útmutatás JSON-ként kerül szerializálásra egy
erre kijelölt, nem megbízható felhasználói kontextusblokkban, és csak a megfigyelhető
részleteket rangsorolhatja; nem írhatja felül azt a külön figyelmeztetést, amely tiltja
a médiában látható vagy hallható utasítások követését. A szöveges fókusz soha nem következtet
`start`/`end` értékekre, és nem módosítja az időbeli mintavételezőt.

#### FU-07 strukturális szegmensbizonyítékai

A `segment_aware` egyetlen korlátozott előelemzési menetet hajt végre a már ellenőrzött helyi videófolyamon. A rögzített szűrőlánc először legfeljebb 320 képpont szélességűre méretez, észleli a jelenetváltásokat és a kimerevedett időszakokat, majd másodpercenként 1 képkockából mintát vesz az elmosódottság, az átlagos fénysűrűség, valamint a térbeli/időbeli információ meghatározásához. A menet legfeljebb 600 strukturális mintára, egyetlen FFmpeg-/szűrőszálra, ugyanarra a kizárólag `file` protokollt engedélyező szabályra és konténer-engedélyezési listákra, 1 MiB-os folyamatkimeneti korlátra, valamint a közvetítő megosztott megszakítási/határidőkeretén belül legfeljebb 30 másodpercre korlátozódik. Soha nem fogad el parancsot, szűrőt, elérési utat vagy URL-t a kérésből.

A strukturális értékek determinisztikus mintavételi bizonyítékok, nem pedig a videó szemantikai értelmezései. Nem következtetnek alanyokra, cselekvésekre, feliratokra, beszédre vagy felhasználói szándékra. A jelenet- és kimerevedési határok szegmenseket alkotnak; a kimerevedés lefedettsége, az elmosódottság, az expozíció, a térbeli részletesség és az időbeli változás csak azt befolyásolja, hogyan oszlik el a meglévő, 1–16 képkockás keret. Egy teljesen kimerevedett szegmens legfeljebb egy képkockát kaphat, míg a nem kimerevedett szegmensek a fennmaradó keretért versengenek. Ha több határ van, mint képkocka, az egyenletes idővonallefedettség megmarad, így a gyors korai vágások nem rejthetnek el egy hosszú záró szegmenst. A kimerevedési határ 1 másodperces elemzési felbontásán belüli jelenethatárokat a rendszer összevonja.

Hiányzó szűrők, hibás vagy üres bizonyítékok, érzékelőhiba, illetve a korlátozott előelemzés időtúllépése esetén a rendszer hibatűrően, pontosan az egyenletes középponti szabályzatra tér vissza. A hívó fél megszakítása vagy a közvetítő határidejének lejárta esetén nincs ilyen visszatérés: ez leállítja a folyamatban lévő alfolyamatot, megakadályozza a további képkocka-kinyerést, és a privát ideiglenes könyvtárfát a `finally` blokk eltávolítja.

A `scripts/perf/video-bridge-fu07-eval.ts` determinisztikus, valódi FFmpeg-tesztanyagokat állít elő a deduplikáció utáni képfeliratozási hívások megtakarításának, a sűrű mozgás melletti keretelosztásnak, az elmosódottság-/expozíció-/SI-TI-bizonyítékoknak, a hosszú zárórésszel rendelkező gyors vágásoknak, valamint a fokozatos áttűnésből eredő téves pozitív találatoknak a vizsgálatához. Rögzíti az előelemzés falióra szerinti idejét, és ahol a `/usr/bin/time` elérhető, a gyermekfolyamat CPU-idejét és maximális RSS-értékét is. Minőség-ellenőrzései kizárólag strukturális orákulumok. A valódi képfeliratozó modell minősítése továbbra is `HOLD`, mert ehhez a tesztkörnyezethez nem tartozik engedélyezett végpont vagy rögzített értékelő. A pénzbeli megtakarítás szintén `HOLD` marad, hacsak a `--caption-cost-per-call-usd` nem ad meg explicit, pozitív hívásonkénti költségbecslést; a szkript egyik eredményt sem koholja.

Minden képkocka legfeljebb 4 MiB, az összes nyers képkocka együtt legfeljebb 23 MiB, a közvetítő szerializált válasza pedig legfeljebb 32 MiB lehet. A privát ideiglenes könyvtárat a `finally` blokk eltávolítja. Az OmniRoute nem tartalmazza az FFmpeg-et, és nem fogad el egyéni futtathatófájl-elérési utat. A képfeliratozás előtt a híd konzervatív vizuális deduplikációs menetet alkalmaz: minden JPEG-et 16×16-os szürkeárnyalatos pufferré alakít, és kizárólag a legutóbb megtartott képkockával hasonlítja össze. Egynél több képkockás képfeliratozási keret kérésekor a kinyerés a keret legfeljebb kétszeresét kitevő, de soha nem több mint 16 képkockából álló, korlátozott jelölthalmazt biztosít. A kért felső korlátot a rendszer csak a deduplikáció után alkalmazza, és ha a keret legalább kettő, a végső ritkítás során megőrzi az első és az utolsó kiválasztott jelöltet. A verziózott
`grayscale-16x16-mean-cells-v2` szabályzat az átlagos fénysűrűség-különbség és azon miniatűrcellák aránya közül a nagyobb értéket használja, amelyek normalizált különbsége legalább 0,05. A duplikációs küszöb a 0,04-es konstans, amelyet a kiszámíthatóság érdekében választottak, nem pedig futásidejű beállításként tettek elérhetővé. Ez a másodlagos, nagy kontrasztú jel megőrzi azokat a kis mozgásokat és láthatószöveg-változásokat, amelyeket egy kizárólag átlagon alapuló összehasonlítás elrejthet. Az összehasonlító vagy a dekóder hibái esetén a rendszer hibatűrően jár el, és megtartja a lefedettséget. A kimeneti metaadatok elkülönítik a kinyert jelölteket, a sikeresen felhasznált képkockákat és az elvetett vizuális duplikátumokat.

Egy explicit módon megjelölt videórész időbélyeggel ellátott kontaktlapot kérhet. A híd legfeljebb 4 oszlopból és 16 képkockából álló JPEG-rácsot készít. Minden 512 képpontos cella nagy kontrasztú alsó sávba égeti a forrás időbélyegét, miközben ugyanezek az időbélyegek szöveges metaadatként is megmaradnak a későbbi társításhoz és auditáláshoz. A teljes JPEG mérete továbbra is legfeljebb 32 MiB. Ha a `sharp` nem tudja dekódolni vagy összeállítani a rácsot, a híd visszatér az egyedi JPEG-képkockákhoz; az ügyfél általi megszakítás továbbra is tovaterjed a kontaktlap-műveleten.

Az élesítéshez szükséges bizonyíték szándékosan elkülönül a szintetikus összeállítási mikroteljesítmény-teszttől. A `scripts/perf/video-bridge-contact-sheet-eval.ts` sémaverzióval ellátott A/B tesztkörnyezetet határoz meg valódi, OpenAI-kompatibilis látásmodellekhez. Méri a szolgáltató által jelentett tokenszámot, a végpontok közötti falióra szerinti késleltetést — beleértve a kontaktlap összeállítását —, a modellhívások számát és a jegyzékben meghatározott tények megőrzését. A nyers modellválaszok nem kerülnek a jelentésbe; a rendszer csak az SHA-256 kivonatokat és az egyező tényazonosítókat őrzi meg. A tesztkörnyezet nem indít hálózati vagy fizetős modellhívást, hacsak nincs megadva a `--execute-real`, és nincs konfigurálva a `--model`, az `OMNIROUTE_BASE_URL` és az `OMNIROUTE_API_KEY`. Ilyen explicit valós futtatás nélkül a géppel olvasható ítélet `HOLD` marad; a szintetikus hasznosadat-/hívásszám-mérések önmagukban nem szolgálnak bizonyítékként az élesítéshez.

A hívók opcionális `transcript.cues` tömböt csatolhatnak egy támogatott videórészhez, ha már rendelkeznek időben igazított szöveggel. Minden jelzésnek tartalmaznia kell `text` értéket, a vizsgált időtartamon belüli véges `start`/`end` intervallumot, valamint egy engedélyezési listán szereplő `source` értéket (`client`, `embedded` vagy `audio-bridge`); a `confidence` alapértelmezett értéke `1`, és `0` és `1` között kell maradnia. A teljesen azonos jelzéseket a rendszer összevonja. Az OmniRoute soha nem indít átírást ezekből a metaadatokból: az ellenőrzött jelzéseket forrással, megbízhatósági értékkel és intervallummal együtt átmásolja a leírt eredménybe, és nem megbízható megfigyelésekként jeleníti meg őket a képkockák feliratai mellett. Az érvénytelen, tartományon kívüli vagy eredetmegjelölés nélküli szöveget a rendszer elutasítja, ahelyett hogy belekeverné a feliratfolyamba. A kérés törzsében található mindkét átirati csatorna `client` értékre normalizálja a megadott eredetet, beleértve a saját állítású `embedded` vagy `audio-bridge` címkéket is. Csak egy kiszolgáló által vezérelt adapter rendelheti hozzá ezeket a megbízható címkéket a kizárólag kódból elérhető `trustedSource` argumentumon keresztül; a kérés JSON-mezője nem érheti el ezt az argumentumot. Az átirat szövege eredetétől függetlenül nem megbízható, médiából származó tartalom marad, és soha nem határozhatja meg az engedélyezést.

Egy haladó hívó megadhat egy `audioTranscript` sávot ugyanahhoz a videóhoz;
ezt a rendszer az ügyfél által megadott szövegként kezeli, nem pedig a szerveroldali átírás bizonyítékaként.
Az egyesítési réteg a vizuális és a hangalapú megfigyeléseket egyetlen
határidővel és megszakítási jellel futtatja, közös idővonalon rendezi őket, összevonja
a teljesen azonos példányokat, és részleges eredményt jelent, ha csak az egyik ág jár sikerrel.
Az érvénytelen `audioTranscript` ilyen részleges eredménnyé fokozódik le — a vizuális
leírás megmarad, a hangág pedig egy megtisztított hibakódot rögzít — ahelyett,
hogy a teljes videó feldolgozása meghiúsulna. Az ágankénti rendelkezésre állás, a részlegességi jelző
és a megtisztított hibakódok megmaradnak a leírt eredményben, a
védelmi korlát metaadataiban (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), az eredmény-gyorsítótár metaadataiban és a híd
egyesítési számlálóiban. A Video Bridge alapértelmezett útvonala nem hív meg beszédfelismerést,
és nem tölt le egy második médiapéldányt; e kifejezetten megadott sáv nélkül
továbbra is csak videót dolgoz fel.

**Átiratmegőrzés (#12150 P1).** Ez automatikusan érvénybe lép minden alkalommal, amikor a
Video Bridge (amely maga is külön engedélyezendő) átiratjelzést jelenít meg — nincs külön
megőrzési jelző. Amikor egy kérés bármilyen átiratjelzést jelenít meg (a hívó által megadott
`transcript` vagy egyesített `audioTranscript`), a védelmi korlát
`videoBridgeObserved` jelöléssel látja el, és létrehozza a videóleírás kitakart másolatát —
egy azonos megjelenítést, amelyben minden jelzés szabadszöveges törzsét a
`[redacted-video-transcript]` érték váltja fel; ez a strukturált jelzésmező
helyettesítésével, még a karakterlánc összeállítása előtt készül (soha nem az egybefüggő szöveg
elemzésével, így semmilyen jelzéstartalom — sem rosszindulatú, sem szokványos, beleértve a `]`
karaktert tartalmazó törzseket, például az `[inaudible]`/`[music]` elemeket — nem maradhat meg).
A tartósan tárolt hívásnapló kérési törzse minden videóból származó szövegrészt erre a
kitakart másolatra cserél, tartalmi egyezés alapján; a `fullText` horgonyt a rendszer
újra beolvassa a hívás előtti védelmi korlát végleges hasznos adattartalmából, így az egyezés
akkor is sikeres marad, ha a lánc későbbi védelmi korlátai (a PII- és
hitelesítőadat-maszkolók, 10/95-ös prioritással) helyben átírják a leírás szövegét, valamint
miután a rendszerprompt-/átadás-/memóriabefecskendezés átalakítja az üzenettömböt. A
modellnek továbbított törzs változatlan marad. Egy megfigyelt kérés továbbá nem tölt fel
tartós Memory-t (a kérésből és a válaszból származó kinyerés egyaránt kimarad),
így a modell saját válasza sem másolhatja az átirat szövegét a Memory-ba.

**Nyers videómezők (#12430).** Ha a híd engedélyezve van, és a natív videótámogatás ismeretlen vagy hiányzik, a definiált `transcript`/`audioTranscript` mezők szintén aktiválják a `videoBridgeObserved` jelölést, még leírási hiba vagy `maxVideos` korlát után is. A `null` értékek és az üres karakterláncok is számítanak; a hiányzó mezők és a nem videós metaadatok nem. A megőrzött példányokban ezeket a mezőket kitakarja a rendszer, vagy kihagyja a kérést, a gyorsítótárakat és a Memory-t pedig megkerüli.

Ezeken a tartalék útvonalakon az érvényes, hívótól származó jelzések támogatott `text`/`input_text`
részekké válnak a nem szabványos szolgáltatói mezők helyett. A kérésben megadott mindkét sáv
nem megbízható `client` megfigyelés marad, egyértelmű figyelmeztetéssel arra, hogy a videóról
nem készült leírás, és az időbélyegeket nem ellenőrizték a médiához képest. A meglévő
256 jelzéses/64 KiB-os összesített és jelzésenkénti keretek együttesen vonatkoznak a két sávra;
az időbélyegeknek bele kell férniük a közvetítő 600 másodperces felső korlátjába és bármely
megadott fókuszablakba. Az érvénytelen sávokat a rendszer elveti, nem továbbítja őket tetszőleges
szövegként; egy érvényes társított sáv továbbra is használható, kivéve, ha az együttes keretüket
túllépik. A null/üres mezők nem adnak hozzá szöveget. Ez a tartalék útvonal nem egészül ki
médialekéréssel vagy átírással. Az átirat kiterjesztési mezőit a rendszer eltávolítja a tartalék
videóhordozóból és annak `video_url`/`source` objektumaiból. Az OpenAI átviteli engedélyezési
listája szigorú marad; az ismeretlen natív támogatású videóhordozók továbbra is elérhetők,
az ismerten csak szöveget támogató célok pedig biztonságos jelölőket kapnak.
A strukturált kitakart másolatok védik a hozzáfűzött átiratszöveget, miközben a hívó tulajdonában
lévő eredeti kérés változatlan marad. A natív támogatással rendelkező célok és a letiltott hidak
megtartják meglévő megkerülési viselkedésüket.

A további megőrzött példányok ugyanezt a megfigyeltkérés-jelet használják. A védelmi korlát
előtti nyers ügyfélkérés-pillanatkép, a memóriában lévő függőben levő kérés és a korán elutasított
kérés naplója strukturáltan lecseréli a videórészek átiratmezőit; a folyamat szakaszai és a
kontextusátadás által előállított karakterlánc-promptokat a rendszer a tartósan tárolt kérési törzs
kimeneti pontján takarja ki. A tartósan tárolt `video_content_removed` jelölő zárt hibával
állítja le a `previous_response_id` folytatását, ahelyett, hogy rekonstruálná a szándékosan
eldobott szöveget. Ha egy megfigyelt kérés a naplózás előtt elveszíti a részenkénti kitakart
másolatát, vagy akár csak egyetlen videóhoz tartozó kitakart másolat sem egyezik a kérés későbbi
módosításai után, a rendszer teljes egészében kihagyja a megőrzött kérési törzset, ahelyett,
hogy részlegesen kitakart átiratot őrizne meg.

Megfigyelt kérés esetén a modell válasza strukturált jelzéshatár nélkül idézheti az átirat
bármely részét. A hívásnaplóban tartósan tárolt `responseBody` értékét ezért egy kihagyási
jelölő váltja fel; a részletes folyamatműtermék (amely tartalmazhat upstream-/ügyféltörzseket
és adatfolyamdarabokat) nem marad meg. A szemantikai, idempotencia- és
érvelés-visszajátszási gyorsítótárak megkerülik az adott kérés olvasását és írását. A
szolgáltatói kérés és az ügyfél számára látható válasz változatlan marad. A korai életben
tartási bájtokat a rendszer kiüríti az ideiglenes pufferből, amikor kihagyja a részletes
műterméket. A Kiro hibás EventStream-figyelmeztetése csak a hasznos adat bájtjainak számát
jelenti, soha nem annak tartalmát vagy a JSON-elemző nyers hibáját.
Ez nem állítja, hogy minden, ettől független szolgáltatói/bővítménydiagnosztikát
auditáltak; a megőrzött kimeneti pontok szélesebb körű átvizsgálását a #11658 követi nyomon.

A belső `/api/modality-bridge/video/drilldown` életciklus egy különálló,
loopback-/tokenhitelesítésű gyorsítótár-alapréteg. Minden művelethez szükség van
egy kanonikus, nem átlátszó elsődleges azonosítóra is. Mielőtt egy éles környezetbeli hívó engedélyezve lenne, az
azonosítót a hitelesített bérlőből kell származtatnia, és soha nem továbbíthat
az ügyfél által kiválasztott értéket. A gyorsítótárkulcsok ezt az elsődleges azonosítót kanonikus munkamenet- és
videóreferencia-azonosítókhoz kötik, csak azok SHA-256 alapján származtatott kulcsait tárolják, és az olvasásokat,
valamint a törlést is ugyanarra az elsődleges azonosítóra korlátozzák. A gyorsítótár bejegyzésenként legfeljebb 16 származtatott JPEG-
képkockát tárol, tíz perc után lejárttá teszi őket, továbbá támogatja a korlátozott
`start`/`end` olvasásokat vagy a munkamenet explicit törlését.

Minden elsődleges azonosító legfeljebb 16 bejegyzésre és 64 MiB kanonikus JPEG-adatra van korlátozva. Ezek a
korlátok függetlenek a globális, 64 bejegyzéses/256 MiB-os felső határtól: az elsődlegesazonosító-kvóta
nyomása csak az adott elsődleges azonosító legrégebben használt bejegyzéseit távolítja el, mielőtt a rendszer
figyelembe venné a globális LRU-alapú eltávolítást. A lejárt bejegyzéseket a gyorsítótár-aktivitás során az elsődleges azonosítóhoz tartozó
és a globális elszámolásból is eltávolítja a rendszer, míg a megszakítás és az ellenőrzési hiba nem
véglegesít részleges cserét.

A gyorsítótár elutasítja a nem kanonikus Base64-adatokat, a túlzott kitöltést, a nem JPEG-médiát, a hibás vagy
csonkolt JPEG-eket, valamint azokat a JPEG-eket, amelyek figyelmeztetést váltanak ki egy korlátozott, teljes képes `sharp`
dekódolás során. Minden elfogadott képet újrakódol kanonikus JPEG-ként, a szélességet és a magasságot
a dekódolt bájtokból származtatja ahelyett, hogy megbízna a hívó mezőiben, és a megőrzésük helyett elveti az esetleges záró
polyglot bájtokat. Mindkét kvótába csak a korlátozott méretű, kanonikus tömörített puffer számít bele.
A JSON átviteli korlátja tartalmazza a Base64 többletterhelését a 32 MiB-os
dekódoltbemenet-korláthoz. Minden
tárolt származtatás rögzíti az ellenőrzött JPEG-formátumot/-felbontást, a mintavételi szabályzatot,
a származtatási verziót, a létrehozási időt, a szerver által kiszámított tartalomkivonatot, valamint a kivonatolt szülő-
referenciát a megbízható hívó szülőtartalom-kivonatával együtt. A rendszer az aszinkron dekódolási/kivonatolási
fázisok között, az atomi gyorsítótár-véglegesítés előtt ellenőrzi a megszakítást.

Ez a részlet még nem kapcsol éles producert az útvonalhoz, és nem
biztosít többfelbontású változatkiválasztást. Az átlátszó Video Bridge-kérési
útvonal ezért nem jár többletmunkával, míg a bérlőhöz kötött elsődlegesazonosító-származtatás és
a teljes FU-08 többfelbontású életciklus továbbra is explicit utómunkának számít,
nem pedig dokumentáltan kész működésnek.

A képkockák feliratozása egymás után, a konfigurált Video modellel történik. Az üres
Video-felülbírálás örökli a Vision-beállítást; ha mindkettő üres, a Vision
automatikus útválasztója választja ki a tényleges, látási képességgel rendelkező modellt. A sikeres feliratok
az eredeti részt egy stabil `[Video description:` előtaggal helyettesítik, amely egyben
nem megbízható, médiából származó megfigyelésként jelöli meg a szöveget, és utasítja az alsóbb rétegbeli
modelleket, hogy ne kövessék a médiában található utasításokat. A képkockafeliratok gyorsítótárkulcsai
tartalmazzák a JPEG bájtjait, a promptot, az időbélyeget és a tényleges modellt; csak a sikeres
feliratok kerülnek gyorsítótárba. A gyorsítótár-bejegyzések megőrzik a ténylegesen sikeres producer modellt,
beleértve a tartalék modellt is; a híd `mixed` értéket jelent, ha a különböző képkockákat
különböző modellek állították elő. Gyorsítótár-találat esetén a rendszer ezt a produceridentitást használja újra,
ahelyett, hogy a kért útválasztási tervként címkézné át. A teljes videó eredmény-
gyorsítótárának kulcsa minden olyan bemeneten alapul, amely megváltoztatja a kimenetet — a prompton, a tényleges
modellen, a mintavételi szabályzaton, a képkockaszámon, a szemantikai elemzési módon, a normalizált fókuszjavaslat SHA-256-
ujjlenyomatán, a fókuszablakon, a `transcript`,
az `audioTranscript` és a kontaktlap jelzőjén —, így e
dimenziók bármelyikének módosítása gyorsítótárhibát eredményez, elavult újrafelhasználást soha. A vizuális deduplikációs szabályzat
verziója, küszöbértéke és korlátozott jelöltképkocka-száma szintén explicit módon szerepel az
eredmény-gyorsítótár kulcsában és metaadataiban; ezért a szabályzat módosítása nem használhat fel újra elavult
teljesvideó-leírást. Az eredmény-gyorsítótár v4 metaadatai megőrzik a módot és az
ujjlenyomatot, a nyers felhasználói feladatot azonban soha. A védőkorlát metaadatai a kért
és a tényleges elemzési módot is jelentik; a használható felhasználói szöveg nélküli, kért `focused` mód
ténylegesen `full` módként jelenik meg.

A védőkorlát minden támogatott videórészt kinyer, de legfeljebb
`modalityBridgeVideoMaxVideos` számú videót ír le. Egy bizonyítottan
`supportsVideo === false` cél esetén a sikertelen és a korláton felüli videók explicit, biztonságos
szöveges jelölőkké válnak, így nyers videó nem marad meg. Ha a képesség ismeretlen, ezek a részek
megőrzik a videóhordozójukat; minden tartalék átirat a fenti korlátozott szövegkonverziót követi.
A `supportsVideo === true` értékű célok megkerülik a hidat.
Az ügyfél kérésmegszakítási jele továbbterjed a letöltésen, a közvetítői várólistán,
az alfolyamatokon és a feliratozási hívásokon keresztül; a megszakítások leállítják a feldolgozást a videók között, és soha nem engednek tovább nyers médiát hiba esetén.

A futásidejű beállításokat adatbázis tárolja, és a Zod ellenőrzi:

| Kulcs                               | Alapértelmezett | Tartomány / viselkedés                                                                                                          |
| ----------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`         | Opcionális futtatókörnyezet, külön engedélyezendő                                                                               |
| `modalityBridgeVideoAnalysisMode`   | `"full"`        | A `full` megőrzi az általános képaláírásokat; a `focused` korlátozott, nem megbízható legutóbbi felhasználói kontextust használ |
| `modalityBridgeVideoModel`          | `""`            | A Vision Bridge modelljének öröklése                                                                                            |
| `modalityBridgeVideoFrameCount`     | `8`             | 1–16                                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`     | `uniform`, `scene_aware` vagy arányos `segment_aware`; a detektor hibája esetén visszaáll `uniform` értékre                     |
| `modalityBridgeVideoMaxVideos`      | `1`             | 1–4                                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`        | 1000–120000 ms                                                                                                                  |

A korábban mentett, 120 másodpercnél nagyobb Video-időtúllépési értékeket a
közvetítő határidejére korlátozza a rendszer; az ezt a korlátot meghaladó új
beállítások mentését elutasítja.
A `GET /api/modality-bridge/video/runtime` a hitelesítés vagy a futtatókörnyezet
vizsgálata előtt megbízható, megjelölt visszacsatolási lokalitást igényel, majd
felügyeleti hitelesítést követel meg. Csak az `available` értéket, a megtisztított
FFmpeg/ffprobe-verziókat és a futtatókörnyezet elérhetetlensége esetén egy rögzített
okot ad vissza. A belső kinyerési végpont nem nyilvános feltöltési API: a várólista
telítettsége `503` választ és `Retry-After` értéket ad vissza, a hívó
kapcsolatbontása `499`, a közvetítő rögzített határidejének túllépése pedig `504`
választ eredményez. A konvertált válaszok hozzáadják a
`video->text;model=<visionModel>;parts=<videos>` szegmenst a központi
`x-omniroute-modality-bridge` fejléchez a Vision- vagy Audio-szegmensek eltávolítása nélkül.

### PII-maszkoló (`piiMasker.ts`)

**Mindkét** szakaszban fut.

- A **`preCall`** klónozza az adatcsomagot, bejárja a `system`, `messages`, `input`
  és `prompt` mezőket (beleértve az egyszerű karakterlánc-elemeket), majd alkalmazza
  a `processPII()` függvényt (az `@/shared/utils/inputSanitizer` modulból) a
  karakterlánc típusú `content`/`text` mezőkre. Ha a
  `PII_REDACTION_ENABLED=true`, az észlelt PII-adatokat kitakarja a kimenő
  adatcsomagban. Ez független az `INPUT_SANITIZER_MODE` értékétől (amely csak a
  promptinjektálási szabályzatot vezérli). Ha a kitakarás ki van kapcsolva, a
  hívás az észlelések számát a tartalom átírása nélkül rögzíti.
- A **`postCall`** mélyklónozza a választ, majd futtatja a
  `sanitizePIIResponse()` függvényt és a Responses API alakjához tartozó maszkolót
  (`maskResponsesOutput` — lefedi az `output_text` és
  `output[].content[].text` mezőket). Ha bármilyen kitakarás történik, a
  módosított válasz felváltja az eredetit.

A védelmi mechanizmus soha nem blokkol; csak megjegyzésekkel látja el
(`meta.detections`, `meta.redacted`) vagy átírja a tartalmat.

### Promptinjektálás (`promptInjection.ts`)

Észleli a felhasználó által megadott tartalomban található támadó jellegű
struktúrákat, és kikényszeríti a konfigurált szabályzatot. A viselkedést
környezeti változók és konstruktoropciók vezérlik:

| Beállítás         | Környezeti változó                                                                                   | Alapértelmezett | Hatás                                                                                                                                                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Engedélyezve      | `INPUT_SANITIZER_ENABLED`                                                                            | `true`          | `false` esetén a védelmi mechanizmus rövidre zárja a működést.                                                                                                                                                                 |
| Mód               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`          | Injektálási szabályzat: `block`, `warn` vagy `log`. (A `redact` a visszamenőleges kompatibilitás érdekében elfogadott, de **nem** távolítja el az injektált szöveget; a kérés PII-átírását a `PII_REDACTION_ENABLED` vezérli.) |
| Blokkolási küszöb | `blockThreshold` opció / `INPUT_SANITIZER_BLOCK_THRESHOLD` (`INJECTION_GUARD_BLOCK_THRESHOLD` álnév) | `high`          | A blokkoláshoz szükséges minimális súlyosság. Alapértelmezés szerint a közepes súlyosság csak megfigyelést eredményez.                                                                                                         |

**Módprecedencia** (`getMode`): a hívó `options.mode` értéke →
az `INJECTION_GUARD_MODE` **adatbázisbeli funkciójelző-felülbírálása**
(Irányítópult → Beállítások → Funkciójelzők) → az `INJECTION_GUARD_MODE`
környezeti változó → az `INPUT_SANITIZER_MODE` környezeti változó → `warn`.
Az irányítópult felülbírálása ezért elsőbbséget élvez a környezeti változókkal
szemben, így a Funkciójelzők felhasználói felület újraindítás nélkül, működés
közben vezérli a védelmi mechanizmust. Az adatbázis olvasása hibabiztos: hiba
esetén a védelmi mechanizmus visszaáll a környezeti változókon alapuló
viselkedésre, és ha nincs beállítva felülbírálás, a viselkedés megegyezik a
kizárólag környezeti változókon alapuló feloldással.

Észlelési források:

1. A `sanitizeRequest()` az `@/shared/utils/inputSanitizer` modulból (a folyamat
   más részein is használt közös detektorkészlet).
2. A beépített `DEFAULT_GUARD_PATTERNS` (jelenleg `system_override_inline` és
   `markdown_system_block`, mindkettő `high` súlyosságú).
3. A konstruktoropciókon keresztül átadott opcionális `customPatterns`
   (karakterláncok, reguláris kifejezések vagy `{ name, pattern, severity }`
   rekordok).

Amikor `mode === "block"` **és** legalább egy észlelés eléri a súlyossági
küszöbértéket, a `preCall` visszatérési értéke `{ block: true, message: "Request rejected:
suspicious content detected" }`. `warn`/`log` módban a védelmi mechanizmus naplózza az
eseményt, de engedélyezi a hívást. A megosztott `evaluatePromptInjection()` segédfüggvény
szintén exportálva van azon hívók számára, amelyeknek a registry használata nélkül kell
értékelniük a promptokat.

**Vizsgálati korlát (v3.8.20):** az észlelő csak az összefűzött promptszöveg
**első 16 KB-ját** vizsgálja — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bájt) az
`src/shared/utils/inputSanitizer.ts` fájlban. Mind a `detectInjection()`, mind az
`evaluatePromptInjection()` meghívja a `slice(0, MAX_INJECTION_SCAN_BYTES)` metódust
a mintákon végzett ciklus futtatása előtt. Az injektálási utasítások a bemenet elejéhez
közel találhatók, így ez több száz KB-os hasznos adatok esetén korlátozza a reguláris
kifejezések CPU-/GC-terhelését anélkül, hogy gyengítené az észlelést (vö.
#3932, #4041).

### Hitelesítőadat-maszkoló (`credentialMasker.ts`)

**Mindkét** szakaszban fut, az alapértelmezett lánc végén (`95`-ös prioritással).
Kitakarja a jól ismert API-kulcs- és titkostoken-mintákat a kimenő hasznos adatokból
(üzenettartalom, eszközhívási argumentumok, eszközeredmények) **és** a szolgáltató
válaszából, így a promptba beillesztett (vagy egy eszközeredmény által visszhangzott)
hitelesítő adat nem szivárog ki a felsőbb szintű szolgáltatóhoz vagy vissza az ügyfélhez.

- **Csak kifejezett engedélyezéssel**, a személyazonosításra alkalmas adatok kitakarásával
  azonos konvenció szerint (a 20. szigorú szabályhoz kapcsolódóan): le van tiltva, kivéve,
  ha `settings.credentialRedactionEnabled === true` **vagy**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kikapcsolt állapotban a védelmi mechanizmus nem
  végez műveletet — soha nem blokkol és soha nem ír át semmit.
- A `redactCredentials()` bejárja a hasznos adatok/válasz teljes fáját (`walkValue()`,
  prototípus-szennyezéssel szemben biztonságos, `WeakSet` használatával ciklusbiztos), és
  a találatokat `[REDACTED:<type>]` helyőrzőre cseréli, miközben csak a ténylegesen
  módosult ágakat klónozza.
- A `CREDENTIAL_PATTERNS` lefedi az LLM-szolgáltatók kulcsait (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), a VCS-/SaaS-tokeneket (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), a fizetési kulcsokat (Stripe, Square), a
  felhőszolgáltatási kulcsokat (AWS-hozzáférési kulcs, Twilio, SendGrid, Mailgun), a
  privát kulcsokat/JWT-ket, a hitelesítő adatokat tartalmazó kapcsolati karakterláncokat
  (`mongodb://user:pass@...` stb.), valamint egy általános
  `Authorization`/`x-api-key`/`api-key`/`apikey` fejlécérték-mintát. A fejléc alakú
  kulcsok (`authorization`, `x-api-key`, `api-key`, `apikey`) strukturálisan vannak
  kitakarva (csak az érték; a séma előtagja, például a `Bearer `/`Basic ` megmarad),
  nem pedig az általános szöveges reguláris kifejezéssel.
- A védelmi mechanizmus soha nem blokkol; csak átír (`modifiedPayload` /
  `modifiedResponse`) és metaadatokkal lát el (`meta.credentialsRedacted`, `meta.count`).

Regressziós védelem: `tests/unit/credential-masker-guardrail.test.ts`.

## Alapszerződés (`base.ts`)

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
  block?: boolean; // true esetén megszakítja a láncot
  message?: string; // blokkoláskor jelenik meg
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // a preCall adja vissza a kérés átírásához
  modifiedResponse?: TValue; // a postCall adja vissza a válasz átírásához
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

Egy védőkorlát a „nincs változás” állapotot a `void`, a `{}` vagy a
`{ block: false }` egyikének visszaadásával jelzi. A `modifiedPayload`/`modifiedResponse`
visszaadása lecseréli a láncon továbbhaladó értéket a soron következő védőkorlátok számára.
A `signal?: AbortSignal` továbbítja a hívó életciklusát a védőkorlátoknak. A kérés megszakítása a szándékos, hibát átengedő kivétel: a médiakezelő hidak leállítják a munkát és elvégzik a takarítást anélkül, hogy visszaállítanák a nyers médiát egy olyan cél számára, amelyről ismert, hogy nem támogatja azt.

## Nyilvántartó (`registry.ts`)

A singleton `guardrailRegistry` a következőket teszi elérhetővé:

- `register(guardrail)` — hozzáad egy védőkorlátot (vagy lecseréli a normalizált név alapján), majd
  növekvő `priority` szerint újrarendezi őket.
- `clear()` / `list()` — adminisztratív segédfüggvények.
- `runPreCallHooks(payload, context)` — végiglépked az aktív védőkorlátokon, továbbfűzi a
  hasznos adatot a `modifiedPayload` segítségével, és az első `block: true` értéknél leáll.
- `runPostCallHooks(response, context)` — ugyanez a folyamat a válaszoldalon.
- `resetGuardrailsForTests({ registerDefaults })` — törli az állapotot, és opcionálisan
  újraregisztrálja az alapértelmezéseket a tesztek tiszta elkülönítése érdekében.

Mindkét futtató `{ blocked, payload|response, results, guardrail?, message? }`
értéket ad vissza, ahol a `results` `GuardrailExecutionResult` rekordok tömbje, amelyek
védőkorlátonként tartalmazzák a `blocked`, `skipped`, `modified`, `error` és `meta` mezőket,
ami hasznos a nyomkövetéshez.

### Védőkorlátok letiltása kérésenként

A `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` összegyűjti azon
védőkorlátok neveinek duplikációmentes listáját, amelyeket az aktuális
kérésnél ki kell hagyni. A források (mind opcionális, és mindegyik összevonásra kerül):

- `apiKeyInfo.disabledGuardrails`
- A kérés törzsében lévő legfelső szintű `disabledGuardrails`
- A kérés törzsében lévő `metadata.disabledGuardrails`
- Az `x-omniroute-disabled-guardrails` fejléc (vagy a korábbi
  `x-disabled-guardrails`)

Az értékek lehetnek karakterláncok tömbjei vagy vesszővel elválasztott karakterláncok; a nevek
normalizálása kisbetűs kebab-case formátumra történik (`pii_masker` → `pii-masker`). Az eredmény
a `context.disabledGuardrails` mezőn keresztül kerül a nyilvántartóhoz, amely kihagyja
az egyező védőkorlátokat (`skipped: true` a `results` tömbben).

## Végrehajtási sorrend

Minden, a `src/sse/handlers/chat.ts` és az
`open-sse/handlers/chatCore.ts` fájlon áthaladó kérés esetén:

1. A `resolveDisabledGuardrails(...)` létrehozza a kihagyási listát az API-kulcsból, a törzsből
   és a fejlécekből.
2. A `guardrailRegistry.runPreCallHooks(body, ctx)` növekvő prioritási
   sorrendben futtatja a védelmi korlátokat:
   - A letiltott védelmi korlátokat `skipped` állapottal rögzíti.
   - Az egyes védelmi korlátok `preCall` műveletei a `modifiedPayload` segítségével átírhatják az adatterhet.
   - Az első `block: true` rövidre zárja a láncot, és a kezelő
     egy, a védelmi korlát általi elutasítást jelző választ ad vissza.
3. A (potenciálisan átírt) adatteher továbbhalad a kombinált útválasztáshoz és a felsőbb rétegbe
   történő továbbításhoz.
4. A válasz összeállítása után a `guardrailRegistry.runPostCallHooks(...)`
   ugyanazt a láncot futtatja a válaszon. A `block: true` ebben az esetben elveti a felsőbb réteg
   válaszát.

A kivételt dobó védelmi korlátokat `error: <message>` értékkel rögzíti, és a
`logger.warn` segítségével naplózza a rendszer, de a lánc folytatódik — a tervezés szerint hiba esetén átengedő módon.

## Konfiguráció

A beépített védelmi korlátok által beolvasott környezeti változók:

| Változó                               | Használja                       | Hatás                                                                                                                                    |
| ------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`              | Állítsa `false` értékre az észlelés teljes letiltásához.                                                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`              | Injektálási szabályzat: `warn`, `block` vagy `log`. Az örökölt `redact` érték nem írja át az injektált szöveget.                         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`              | Az injektálás elleni védelem módja; egyben egy adatbázisbeli funkciójelző is, amely **felülbírálja** a környezeti változókat (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`              | A `MODE=block` által elutasított minimális súlyosság: `high` (alapértelmezett), `medium` vagy `low`.                                     |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`              | Az `INPUT_SANITIZER_BLOCK_THRESHOLD` örökölt álneve.                                                                                     |
| `PII_REDACTION_ENABLED`               | `pii-masker`                    | `true` esetén a kérésben szereplő személyazonosításra alkalmas adatokat kitakarja a rendszer (az injektálási módtól függetlenül).        |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (kimeneti oldalon) | A válaszoldali maszkoló viselkedését szabályozza.                                                                                        |

A Modality Bridge védelmi korlátai futásidejű konfigurációjukat az adatbázis-alapú beállítástárból
(`getSettings()`) olvassák, nem környezeti változókból. A Vision elsődleges kulcsai:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` és
`modalityBridgeCacheMaxEntries`. Az örökölt
`visionBridge*` kulcsokat kizárólag a dokumentált, egy cikluson át elérhető olvasási
tartalékmegoldásként fogadja el a rendszer; az irányítópulton végzett írások az elsődleges kulcsokat használják. Az alapértelmezések és a tartalékérték-feloldó
a `src/shared/constants/modalityBridgeDefaults.ts` fájlban találhatók, az örökölt
konstansokat pedig a `src/shared/constants/visionBridgeDefaults.ts` őrzi.

A hangfeldolgozás a `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` és `modalityBridgeAudioMaxClips` beállításokat, valamint a megosztott
`modalityBridgeCache*` beállításokat használja. A hangfeldolgozáshoz nem tartozik örökölt kulcsokra épülő tartalékmegoldás, mert ezek
a kulcsok a Modality Bridge sémával együtt jelentek meg.

A videófeldolgozás a `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` és
`modalityBridgeVideoTimeout` beállításokat, valamint a megosztott `modalityBridgeCache*` beállításokat használja.
Alapértelmezés szerint le van tiltva, mivel az FFmpeg/ffprobe opcionális üzemeltetési
függőségek, a képkockák feliratozása pedig növeli a késleltetést és a modellhasználat költségét.

## Egyéni védőkorlátok

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

Lépések:

1. Hozza létre a `src/lib/guardrails/myGuardrail.ts` fájlt a `BaseGuardrail` kiterjesztésével.
2. Implementálja a `preCall` és/vagy a `postCall` metódust.
3. Regisztrálja importáláskor (a `registerDefaultGuardrails` függvényből hozzáadva), vagy
   futásidőben hívja meg a `guardrailRegistry.register(...)` metódust — a regisztrációs jegyzék
   lecseréli az azonos normalizált nevű korábbi védőkorlátot.
4. Adjon hozzá teszteket a `tests/unit/` könyvtárban (meglévő példák:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tesztelés

A tesztek között használja a `resetGuardrailsForTests()` függvényt, hogy ismert állapotból induljon.
Üres regisztrációs jegyzékkel való indításhoz adja át a `{ registerDefaults: false }` értéket, és
csak a tesztelendő védőkorlátokat regisztrálja. A Vision Bridge támogatja a függőséginjektálást
(`deps.getSettings`, `deps.callVisionModel`); az Audio Bridge ezzel egyenértékű csatlakozási
pontokat biztosít a beállításokhoz, képességekhez, az STT-modell kiválasztásához, a hitelesítő
adatok ellenőrzéséhez és az átíráshoz. A tesztek így adatbázis- vagy hálózati hozzáférés nélkül
is ellenőrizhetik mindkét folyamatot.

## Lásd még

- `src/lib/guardrails/` — implementáció
- `src/shared/utils/inputSanitizer.ts` — a promptinjektálás és a személyazonosításra alkalmas adatok maszkolását
  működtető megosztott detektor
- `src/shared/constants/visionBridgeDefaults.ts` — a Vision Bridge alapértelmezett értékei és
  a kényszerített hídként kezelt modellek listája
- `src/shared/constants/modalityBridgeDefaults.ts` — a Vision/Audio megosztott futásidejű alapértelmezett értékei
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonális réteg (áramkör-megszakító, várakozási idők)
- `docs/reference/ENVIRONMENT.md` — a környezeti változók teljes referenciája

## Az injektálásvédő útvonal-lefedettsége és red-team tesztelése (8. fázis · D blokk)

Az injektálásvédő (`createInjectionGuard` / `withInjectionGuard`) minden olyan útvonalat lefed,
amely felhasználói promptokat fogad. Figyelembe veszi az `INJECTION_GUARD_MODE` beállítást
(alapértelmezés szerint `warn` = csak naplózás; `block` = HTTP 400 `SECURITY_001` választ ad vissza).

| Típus            | Útvonalak                                                                                                                                            | Alapértelmezett mód |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Szöveg (meglévő) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generatív        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Adat             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

A szövegkinyerés (`extractMessageContents`) a `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mezőket kezeli.

**Red-team (éjszakánként, `nightly-llm-security.yml`):** a promptfoo ellenőrzi, hogy minden útvonal
blokkolja-e az OWASP-LLM korpuszt `INJECTION_GUARD_MODE=block` módban; a garak próbákat futtat
(titkos érték hiányában kihagyja őket). A `moderations` a konzisztencia érdekében szerepel — a
blokkoló módot használó üzemeltetők a `resolveDisabledGuardrails` segítségével mentesíthetik.

Az éjszakai munkafolyamat (`.github/workflows/nightly-llm-security.yml`, cron + kézi
indítás) két feladatot tartalmaz:

- **`promptfoo-guard` (blokkoló)** — futtatja a `promptfoo eval -c promptfooconfig.yaml`
  parancsot `INJECTION_GUARD_MODE=block` beállítással. Minden ellenséges teszteset (például „hagyj
  figyelmen kívül minden korábbi utasítást…”, DAN-stílusú jailbreak-kísérletek) ellenőrzi, hogy a válasz
  tartalmazza-e az `error.code === "SECURITY_001"` értéket, vagyis hogy a védő valóban elutasította-e a kérést.
- **`garak` (tájékoztató jellegű)** — a garak `--probes promptinject,dan,leakreplay`
  próbáit futtatja egy helyi OmniRoute-példánnyal (`http://localhost:20128/v1`) szemben. Egy
  szolgáltatói titkos érték (`PROMPTFOO_PROVIDER_KEY`) meglétéhez kötött; annak hiányában szabályosan
  kimarad, és az `|| true` utótagot kapja, így jelentést készít anélkül, hogy meghiúsítaná a CI-folyamatot.

A védő segédfüggvény (`createInjectionGuard` / `withInjectionGuard`) lefedettsége
minden promptot fogadó `/v1` útvonalra kiterjed; a prompt szövegét a
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mezőkből
az `extractMessageContents()` nyeri ki a `src/shared/utils/inputSanitizer.ts` fájlban.
