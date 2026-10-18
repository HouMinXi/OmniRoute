# Guardrails (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Zdroj pravdy:** `src/lib/guardrails/`
> **Naposledy aktualizováno:** 2026-08-29 — v3.8.51 (původ přepisu Video Bridge deklaruje volající,
> server jej zatím neověřuje — upřesněno dle #11661)

Guardraily prosazují bezpečnost, zásady a transformace obsahu na rozhraní
mezi OmniRoute a upstream poskytovateli. Každý guardrail může kontrolovat (a
volitelně odmítnout, transformovat nebo anotovat) datové části požadavků (`preCall`) a
upstream odpovědi (`postCall`).

Systém je **fail-open**: pokud guardrail během provádění vyvolá výjimku, registr
chybu zaznamená a pokračuje dalším guardrailem, místo aby požadavek
selhal. Blokování je výslovné rozhodnutí (`block: true`), nikdy ne nehoda.

## Vestavěné ochranné mechanismy

Registr při importu automaticky načítá šest ochranných mechanismů v pořadí podle priority
(viz `registry.ts` → `registerDefaultGuardrails()`):

| Priorita | Název               | Fáze           | Soubor                |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižší čísla priority se spouštějí **jako první**.

### Obrazový most (`visionBridge.ts`) — Most modalit PR-1

Zachytává požadavky obsahující obrázky, které jsou směrovány na **modely bez podpory obrazu**, a buď
přesměruje celý požadavek na model podporující obraz, nebo před
voláním nadřazené služby nahradí části s obrázky textovými popisy vytvořenými
konfigurovatelným obrazovým modelem. Díky tomu mohou poskytovatelé podporující pouze text
transparentně zpracovávat multimodální datové části.

Průběh:

1. Přeskočit, pokud cílový model již podporuje obraz (pokud není uveden
   v seznamu vynuceného použití mostu `isVisionBridgeForcedModel`).
2. Extrahovat části s obrázky pomocí `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), která deleguje na **sjednocený detektor
   médií** `detectMediaParts()` v `open-sse/utils/mediaParts.ts` — jediný
   zdroj pravdy sdílený s filtrem kompatibility kombinací.
   Extrakce je omezena seznamem povolených položek na části nejvyšší úrovně ve tvarech,
   které může `replaceImageParts` vložit zpět (smlouva extrakce↔nahrazení): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` a Responses API `input_image`. Vnořené shody a
   tvary sloužící pouze jako indikátory jsou určeny pro filtr kombinací a nikdy se neextrahují.
   Pokud nebyly nalezeny žádné, krok se přeskočí.
3. Vyhodnotit konfiguraci za běhu pomocí `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nové konfigurační klíče `modalityBridge*`
   mají přednost; starší klíče `visionBridge*` zůstávají jako **záložní možnost na jeden
   cyklus** (okno pro návrat zpět). Pokud je most zakázán, krok se přeskočí ještě před jakýmkoli průchodem médii.
4. Volič režimu (`modalityBridgeVisionMode`, viz tabulka níže) rozhoduje
   mezi přesměrováním a popisem. Přesměrování vrátí `modifiedPayload`, ve kterém je změněn pouze
   `model`, a metadata `{ rerouted, fromModel, toModel, imagesKept }`.
5. Cesta popisu: omezit počet obrázků na `maxImages`, sestavit výzvu zohledňující úlohu,
   zkontrolovat mezipaměť popisů, zavolat obrazový model **paralelně**
   (`Promise.allSettled`) a na místo obrázků vložit textové části
   `[Obrázek N]: <popis>`. Neúspěšný popis vrátí `null` a původní část s obrázkem
   je **zachována** (#4012) — s výjimkou cesty popisu kombinace, pokud selžou
   všechny popisy; v takovém případě potvrzená nadřazená služba bez podpory obrazu obdrží zástupný text
   `(nedostupné — není připojen žádný poskytovatel s podporou obrazu)` (#8430).
6. Vrátit `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Volič režimu (`modalityBridgeVisionMode`)

| Režim      | Výchozí | Chování                                                                                                                                                                                                                                                                                                                              |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔       | Původní heuristika beze změn (#6640/#7204): modely, které nejsou kombinované, a modely `auto/` se přesměrují na nejlepší obrazový model, pokud původní model již nemá použitelné přihlašovací údaje (pak se použije popis); kombinované cíle vždy používají popis.                                                                   |
| `describe` |         | Vždy použít popis — blok přesměrování je zcela přeskočen; vždy odpovídá model zvolený uživatelem.                                                                                                                                                                                                                                    |
| `reroute`  |         | Vynutit přesměrování: kontrola zachování modelu s přihlašovacími údaji je obejita. Kontrola přihlašovacích údajů **cíle** přesměrování se však stále uplatňuje — pokud neexistuje žádný použitelný obrazový cíl, požadavek přejde na popis, aby se nezpracované obrázky nikdy nedostaly k backendu podporujícímu pouze text (#8430). |

Vynucené režimy ukončí rozhodování **předtím**, než se spustí automatická heuristika; chování režimu `auto`
je bajtově totožné s ochranným mechanismem před PR-1.

#### Rozsah klíče API (`visionBridgeKeyScope.ts`)

Když klíč API volajícího omezuje `allowedConnections`, fondy kvót
(`allowedQuotas`) nebo modely (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most vybírá pouze
modely pro přesměrování a popis, které daný klíč smí používat, a to na připojeních, která daný klíč smí
používat. Volání popisu pak vždy prochází interní smyčkou OmniRoute s
hlavičkou `x-omniroute-self-loop-key-id`, takže přijímající požadavek chatu
znovu vynutí zásady připojení a modelů daného klíče. `enforceApiKeyPolicy()`
respektuje tuto hlavičku pouze společně s nosným tokenem interní smyčky, takže může přístup pouze
omezit, a identifikátor, který nelze vyhodnotit, je odmítnut.

Pokud pro daný klíč není povolen žádný obrazový model, cesta popisu ustoupí stranou a
požadavek projde beze změny, tedy se stejným chováním typu fail-open jako u zakázaného
ochranného mechanismu (metadata `{ skipped: true, reason: "no_permitted_vision_model" }`).
Požadavky bez klíče a klíče bez těchto omezení se chovají přesně stejně jako
dříve.

#### Výzva popisu zohledňující úlohu (`modalityBridgeVisionTaskAware`)

Výchozí hodnota je **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) připojí
text **poslední zprávy uživatele** (zkrácený na 500 znaků) k základnímu
promptu pro popis, čímž zaměří popis na to, na co se uživatel skutečně ptal
(vzor codex-vision-proxy), a požádá model pro zpracování obrazu o přepis
viditelného textu. Pokud je příznak vypnutý — nebo není k dispozici žádný text
uživatele — použije se základní prompt beze změny.

Vlastní požadavek self-loopu pro popis kompatibilní s OpenAI (`callVisionModelSingle()`
v `visionBridgeHelpers.ts`) vždy požaduje `image_url.detail: "high"` —
bezpodmínečně, pro každého volajícího/poskytovatele, bez závislosti na jakémkoli
signálu klienta. Vzorkování s nízkou úrovní detailu zhoršuje přesnost OCR právě
pro úlohu přepisu textu, kterou tento prompt požaduje, takže samotné volání pro
popis vždy požaduje vysokou úroveň detailu bez ohledu na to, jakou úroveň
detailu používal původní příchozí požadavek. Ovlivňuje to pouze tělo interního
požadavku pro popis; nemění to způsob, jakým OmniRoute předává vlastní
`image_url.detail` volajícího v primárním požadavku — tato výchozí hodnota se
aplikuje samostatně a pouze pro detekované klienty OpenCode ve
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Větev
self-loopu pro popis používající wire formát Anthropic nemá pole `detail`
a žádná z těchto výchozích hodnot ji neovlivňuje.

#### Limit výstupu popisu (`modalityBridgeVisionMaxChars`)

| Klíč                           | Výchozí hodnota | Rozsah             |
| ------------------------------ | --------------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`             | `0` nebo 100–50000 |

`0` (výchozí hodnota) znamená **bez limitu** — popis vrácený funkcí
`callVisionModel()` se předá beze změny, čímž se zachová stávající
chování. Jakákoli hodnota v rozsahu 100–50000 zkrátí popis a přidá
příponu `…` před jeho vložením zpět ve tvaru `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
U úloh OCR náročných na detaily tuto hodnotu zvyšte, pokud následný model
potřebuje celý přepis; snižte ji, chcete-li omezit spotřebu tokenů u
upovídaných modelů pro zpracování obrazu. Pole v ovládacím panelu se nachází
v panelu Pokročilé na kartě Vision (`modality-bridge-max-chars` v
`ModalityBridgeVisionTab.tsx`) a jakoukoli hodnotu mezi 1 a 99 omezí směrem
nahoru na minimální hodnotu 100, zatímco explicitní `0` ponechá beze změny —
`0` je sama o sobě platná hodnota Zod
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nikoli pouze
výchozí hodnota označující „nenastaveno“.

#### Mezipaměť popisů (`modalityBridge/bridgeCache.ts`)

Procesově sdílená mezipaměť LRU + TTL v paměti pro výstupy popisu.
Klíč = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
rámcováním pomocí prefixu délky (bez kolizí na hranicích polí). Komponentou
modelu je **nakonfigurovaný** model bridge, nikoli model, který skutečně
odpověděl — `callVisionModel` může interně použít záložní model a vytváření
klíče pro každý pokus by mezipaměť fragmentovalo. Neúspěšné popisy se nikdy
neukládají do mezipaměti. Nastavení:

| Klíč                            | Výchozí hodnota | Rozsah  |
| ------------------------------- | --------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`          | —       |
| `modalityBridgeCacheTtlMinutes` | `60`            | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`           | 10–5000 |

#### Normalizace vzdálených obrázků (self-loop popisu/načtení base64)

Když bridge sám načítá **vzdálený** obrázek — při vlastním volání popisu
Anthropic a při převodu na base64 pro claude-wire-format
(`ensureBase64ImagesForClaudeWire`), v obou případech prostřednictvím
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — výsledný datový
identifikátor URI se před vložením do požadavku modelu pro zpracování obrazu
zpracuje funkcí `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`). Obrázky s nadměrnou velikostí se zmenší
na **2048 px na delší straně** (což odpovídá limitu změny velikosti, který již
OpenAI/Anthropic používají na straně serveru), čímž se sníží objem nahrávaných
dat a latence, aniž by se změnilo to, co model pro zpracování obrazu vidí.
Pro změnu velikosti se používá `sharp`, načtený dynamickým importem: na
platformě, kde se jeho nativní binární soubor nepodaří načíst,
`normalizeDataUri()` **nikdy nevyvolá výjimku** — použije původní bajty beze
změny, takže cesta popisu/převodu na base64 zůstane vždy funkční. Bajty, které
nepředstavují obrázek (načtení nevrátilo dekódovatelný obrázek), se také
předají beze změny. Tato normalizace je omezena na obrázky, které bridge načítá
pro své vlastní volání — nikdy se neaplikuje na nezpracovaný průchozí payload
volajícího, což odpovídá principu úprav pouze na základě výslovného souhlasu
(Pevné pravidlo č. 20).

#### Schéma nastavení + migrace

Nové klíče `modalityBridge*` jsou validovány pomocí Zod v
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trojice
`modalityBridgeCache*` a skupina `modalityBridgeAudio*` používaná komponentou
Audio Bridge. Migrace `141_modality_bridge_settings.sql` zkopíruje stávající
hodnoty původních klíčů `visionBridge*` do odpovídajících nových klíčů
(idempotentně, bez přepsání hodnoty `modalityBridge*` nastavené operátorem);
původní klíče zůstanou po dobu jednoho cyklu vydání podporovány jako záložní
zdroj pro čtení.

#### Hlavička transparentnosti + statistiky

Odpovědi transformované popisem obsahují
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(vytvořenou funkcí `buildModalityBridgeHeader()` v
`modalityBridge/bridgeStats.ts` a přidanou funkcí
`withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Přesměrované požadavky nedostanou **žádnou** hlavičku — payload zůstal
nedotčený a změna modelu je již viditelná v poli `model` těla odpovědi.

`GET /api/modality-bridge/stats` (ověřování pro správu, stejná úroveň jako
`GET /api/settings`) vrací čítače jednotlivých modalit uložené v paměti
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` pro `vision`, `audio` a
`video`. `averageLatencyMs` používá jako jmenovatel `latencySamples`, nikoli
všechny pokusy; operace bez měření času nevytváří umělý vzorek s nulovou
latencí. `bridged` zůstává zpětně kompatibilním aliasem pro úspěšné
konverze; neúspěšné pokusy jej nezvyšují.
Čítače se záměrně vynulují při restartu procesu
(jde o telemetrii, nikoli účetnictví).

#### Konfigurace řídicího panelu

Vyhrazená stránka řídicího panelu je
`/dashboard/settings/modality-bridge`. Její záložky `Vision`, `Audio`
a `Video`, na které lze odkazovat pomocí URL, při přepínání hodnoty `tab`
zachovávají parametry dotazu.
Záložka Vision zpřístupňuje aktivaci, režim, výběr modelu (včetně automatické
výchozí volby), zadávání pokynů s ohledem na úlohu, pokročilé limity časového
limitu, obrázku, délky popisu a mezipaměti, běhové
čítače a chráněný ukázkový požadavek. Aktivní je také záložka Audio: zpřístupňuje
aktivaci, výběr modelu pouze pro STT s možností Auto, limity časového limitu
a maximální délky klipu, čítače zvuku a ukázkový test `input_audio`. Záložka
Video je funkční: hlásí běhový stav FFmpeg/ffprobe — jeden ze čtyř explicitních
stavů uživatelského rozhraní (`unknown`, zatímco kontrola probíhá nebo ji nebylo
možné dokončit, `restricted` na hostiteli řídicího panelu mimo loopback, kde je
kontrola přeskočena na straně klienta, `unavailable` po provedení kontroly
a potvrzení, že nástroje chybějí, nebo `available` s verzemi FFmpeg/ffprobe) —
uchovává nastavení aktivace, modelu a limitů snímků, videa a časového limitu,
filtruje výběr modelu pouze na modely podporující obrazové vstupy a zpřístupňuje
čítače videa.

Původní karta Vision Bridge v nastavení AI nyní slouží jako kompatibilní odkaz
na novou stránku; druhou kopii formuláře již nevlastní. Media Providers také
odkazuje pracovní postupy Image-to-Text a Speech-to-Text na odpovídající záložky
Modality Bridge, aniž by odstraňoval stávající testovací prostředí
Speech-to-Text.

**Obejití kontroly přijetí pro vlastní smyčku:** když je volání pro vytvoření
popisu směrováno přes vlastní smyčku `/v1` služby OmniRoute (nestandardní model
poskytovatele), dílčí požadavek odesílá
`x-omniroute-admission-bypass: internal` a je ověřen pomocí překladu přihlašovacího
údaje vlastní smyčky — lokální zástupné hodnoty `sk_omniroute` v lokálním režimu
nebo operátorem nakonfigurovaného klíče prostředí `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` (#1350), aby nasazení s `REQUIRE_API_KEY=true` mohla nadále
spouštět volání pro vytvoření popisu. Obejití je povoleno pouze pro přesně tyto
přihlašovací údaje, takže externí klienti nemohou pomocí této hlavičky přeskočit
kontrolu přijetí.

Starší výchozí hodnoty se nacházejí v `src/shared/constants/visionBridgeDefaults.ts`;
nové výchozí hodnoty režimu, zohlednění úlohy a mezipaměti spolu s překladačem
nastavení se nacházejí v `src/shared/constants/modalityBridgeDefaults.ts`.
Ochranný mechanismus zpřístupňuje možnost konstruktoru `deps`, aby testy mohly
vložit falešné implementace `getSettings` a `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Zachytává chatové požadavky obsahující zvuk předtím, než dorazí k cíli, o kterém
není známo, že přijímá zvukový vstup. Chatový požadavek nikdy nepřesměrovává:
zvukové části jsou přepsány prostřednictvím stávajícího multipart endpointu
kompatibilního s OpenAI a vybraný chatovací model pokračuje s textovými přepisy.

Průběh:

1. Určete `supportsAudio` pomocí `getResolvedModelCapabilities()`. Explicitní
   metadata registru poskytovatelů mají přednost, následovaná statickými metadaty
   modelu a poté synchronizovanou hodnotou `modalities_input`. Deklarovaný seznam
   vstupů bez `audio` má hodnotu `false`; pokud nejsou k dispozici žádné informace
   o schopnostech, zůstává hodnota `null`. Hodnoty `false` i `null` aktivují
   konzervativní přemostění, zatímco `true` jej obchází.
2. Přeložte nastavení `modalityBridgeAudio*` a pomocí sdíleného detektoru
   `detectMediaParts()` extrahujte ze všech zpráv zvukové části nejvyšší úrovně,
   které lze vyjmout a nahradit. Podporované formáty přenosu jsou OpenAI
   `input_audio`, `audio_url` a `source.media_type: "audio/*"`. Vnořený zvuk je
   rozpoznán pro směrování, ale cesta pro vyjmutí jej neodstraňuje. Množství práce
   je omezeno hodnotou `modalityBridgeAudioMaxClips`; pozdější části zůstanou
   nedotčené.
3. Respektujte nakonfigurovanou hodnotu `provider/model`, nebo nechte
   `selectAudioBridgeModel()` projít `AUDIO_TRANSCRIPTION_PROVIDERS` ve stabilním
   pořadí katalogu a vybrat první model s použitelným přihlašovacím údajem
   aktivního poskytovatele.
4. `callAudioTranscription()` převede zvuk ve formátu base64 nebo data URI na
   multipart `file`, případně stáhne vzdálenou adresu `audio_url` prostřednictvím
   odchozí ochrany povolující pouze veřejné adresy, s připnutím DNS a limitem
   25 MB. Poté pomocí POST odešle soubor a vybraný model do místní vlastní smyčky
   `/v1/audio/transcriptions`, ověřené pomocí `resolveSelfLoopBearer()`. Stávající
   trasa přepisu provádí běžné vyhledání přihlašovacích údajů, zpracování období
   omezení a limitů rychlosti a předání poskytovateli.
5. Úspěšná volání nahradí příslušné části hodnotou
   `[Audio N]: <transcript>`. Volání se spouštějí pomocí `Promise.allSettled`:
   individuální selhání zachová původní zvukovou část (smlouva #4012). Pokud
   všechna volání selžou a je prokázáno, že cíl má `supportsAudio === false`,
   části se změní na
   `[Audio N]: (unavailable — no STT provider connected)` (smlouva #8430).
   U neznámého cíle (`null`) zůstane při selhání všech volání obsah nedotčen.
   Cíl, u kterého je prokázáno, že podporuje pouze text, a který nemá žádný
   použitelný přihlašovací údaj STT, obdrží stejnou explicitní zástupnou hodnotu,
   aniž by byl odeslán síťový požadavek.

Úspěšné přepisy používají mezipaměť Modality Bridge typu LRU/TTL sdílenou v rámci
celého procesu. Klíč kombinuje odkaz na zvuk, stabilní označení operace
`audio-transcription` a vybraný model STT; selhání se nikdy neukládají do
mezipaměti. Pokusy o zpracování zvuku aktualizují sdílené čítače `bridged`,
`cacheHits`, `failures` a `lastUsedAt`.
Transformované odpovědi obsahují
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
nedotčené požadavky segment Audio Bridge neobdrží.

Běhová nastavení jsou uložena v databázi a validována pomocí Zod:

| Klíč                          | Výchozí hodnota | Rozsah                  |
| ----------------------------- | --------------- | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`          | —                       |
| `modalityBridgeAudioModel`    | `""`            | Automaticky nebo STT ID |
| `modalityBridgeAudioTimeout`  | `60000`         | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`             | 1–10                    |

Sdílená mezipaměť zůstává řízena pomocí `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` a `modalityBridgeCacheMaxEntries`.

### Přemostění videa (`videoBridge.ts`, `videoBridgePipeline.ts`)

Zachycuje části videa na nejvyšší úrovni v `messages` rozhraní Chat Completions a
v `input` rozhraní Responses API před voláním cíle bez známé nativní podpory
videa. Podporované formáty jsou `input_video`, `video_url`, `video_source`, adresy
URL používající HTTPS a datové identifikátory URI ve formátu
`data:video/*;base64,...`. Samotné názvy souborů v textu nejsou považovány za
video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) zajišťuje průchod požadavkem,
kontrolu schopností a zásad, agregaci pro jednotlivé požadavky a datovou část
odpovědi. Zpracování jednotlivých videí — získání dat, mezipaměť celého výsledku,
popis sekvence snímků (který slučuje případný volajícím deklarovaný přepis zvuku)
a metriky, přerušení a úklid pro jednotlivé pokusy — je skryto za
`processVideoPart` v `videoBridgePipeline.ts`, které je voláno jednou pro každou
část videa uvnitř smyčky `preCall`. Tento modul také definuje explicitní hranice
portů `VideoMediaBrokerPort` (získávání bajtů a extrakce vzorkovaných snímků),
`VideoAudioTranscriptionPort` (sloučení volajícím deklarovaného přepisu zvuku
s popisky vzorkovaných snímků) a `VideoDrilldownPort` (hranice perzistence pro
detailní analýzu snímků; dosud není zapojena do `processVideoPart` — záznamy
detailní analýzy dnes zapisuje pouze samostatná trasa
`/api/modality-bridge/video/drilldown`).

Veřejná cesta požadavku `/v1` nikdy neimportuje ani nespouští podproces. Vzdálená
videa se stahují s limitem 50 MiB; vložená videa v kódování base64 mají
konzervativní limit 36 MiB dekódovaných dat na jedno video, aby se obálka
modelu, zpráv a rámců vešla do veřejného limitu 50 MiB pro přijetí požadavku
JSON. Délka vložených dat a odhady dekódované velikosti se kontrolují před
alokací. Pro počáteční vzdálenou adresu URL i každé přesměrování je vyžadováno
HTTPS a používá se stávající ochrana odchozích spojení pouze na veřejné adresy
s připnutím DNS. Bajty poté překročí přesnou interní hranici zprostředkovatele
`POST /api/modality-bridge/video/extract`. Tato trasa je současně `LOCAL_ONLY`
a `SPAWN_CAPABLE`, přijímá pouze autentizovaný požadavek v rámci procesu
z důvěryhodného loopback rozhraní a nikdy nepřijímá adresu URL, cestu
k souborovému systému, spustitelný soubor ani seznam argumentů. Řetězec
zpracování velikosti těla API a inkrementální čtečka těla obslužné rutiny
nezávisle vynucují limit vstupu zprostředkovatele 50 MiB. Jeho omezená fronta
spouští vždy jednu extrakci, umožňuje čtyři čekající úlohy a omezuje čekající
vstup na 100 MiB.

Uvnitř zprostředkovatele čte `ffprobe` soukromý místní soubor; pevný seznam
povolených formátů vylučuje formáty playlistů a manifestů. U povolených
kontejnerů rodiny MOV zůstávají externí datové reference MOV ve výchozím
nastavení zakázány a pevně stanovený příkaz jejich použití nepovoluje. `ffprobe`
i `ffmpeg` používají seznam povolených protokolů omezený pouze na `file`, jedno
vlákno, pevná pole argumentů, žádný shell a spustitelné soubory vyhledávané
pomocí `PATH`. Proudy s připojenými obrázky obalů nejsou kandidáty pro
přehrávání. Všechny přehrávatelné proudy musí splňovat limity a před
deterministickou záložní volbou proudu s nejnižším indexem se upřednostňuje
explicitní výchozí proud. Videa jsou omezena na 600 sekund, 8 192 pixelů
v každém rozměru a 33 554 432 zdrojových pixelů. FFmpeg vzorkuje 1–16
prostředních snímků ve formátu JPEG, zmenšuje delší hranu nejvýše na 1 024
pixelů bez zvětšování menších vstupů a nikdy nepřijímá adresu URL. Ve výchozím
nastavení se používá vzorkování `uniform`. Volitelné zásady `scene_aware`
a experimentální `segment_aware` provedou nad již ověřeným místním proudem jeden
další pevně stanovený průchod FFmpeg, vyberou omezené časové značky scén
`showinfo` a při selhání detektoru, překročení časového limitu, chybném výstupu
nebo prázdné množině kandidátů se deterministicky vrátí ke stejným rovnoměrně
rozloženým středovým bodům. Režim s ohledem na segmenty přiděluje vzorky
středových bodů poměrně podle ověřených intervalů scén; důkazy pro režim
s ohledem na segmenty a záložní chování jsou podrobně popsány níže. Pevný limit
16 snímků se u každé zásady uplatňuje po výběru. Pokud má požadavek zohledňující
scény rozpočet pouze na jeden snímek, použije rovnoměrný středový bod aktivního
okna celého videa nebo okna zaměření a uvede `policyEffective: uniform`: jediný
vybraný snímek scény nemůže zachovat oba časové konce. Volající může volitelně
zadat konečné okno zaměření (`start`/`end` v sekundách); meze jsou omezeny na
délku média, obrácená nebo nekonečná okna jsou odmítnuta a všechny zásady
vzorkování se provádějí pouze uvnitř normalizovaného intervalu. Výsledné okno je
zahrnuto v metadatech vzorkování a v nedůvěryhodném prefixu popisu, aby navazující
modely dokázaly rozlišit zaměřený úryvek od celé časové osy.

Sémantické zaměření popisků je samostatné explicitní nastavení. Výchozí režim
analýzy `full` zachovává stávající výzvu pro snímky a nikdy nepředává text
požadavku modelu pro tvorbu popisků. V režimu `focused` přemostění čte pouze
nejnovější neprázdný uživatelem vytvořený obsah `text`/`input_text` ze stejného
kontejneru Chat nebo Responses, normalizuje jej do NFC, slučuje řídicí znaky
a bílé znaky a omezuje jej na 500 kódových bodů Unicode. Prázdný výsledek vede
k použití přesné výzvy režimu `full`. Použitelná nápověda je serializována jako
JSON ve vyhrazeném bloku nedůvěryhodného uživatelského kontextu a smí pouze
upřednostnit pozorovatelné podrobnosti; nemůže přepsat samostatné varování před
následováním pokynů viditelných nebo slyšitelných v médiu. Textové zaměření nikdy
neodvozuje `start`/`end` ani nemění časový vzorkovač.

#### FU-07 strukturální důkazy segmentů

`segment_aware` používá jeden omezený průchod předběžné analýzy nad již ověřeným
lokálním video streamem. Pevně daný řetězec filtrů nejprve změní měřítko na šířku
nejvýše 320 pixelů, detekuje změny scén a zmrazené intervaly a poté vzorkuje
rychlostí 1 snímek za sekundu za účelem zjištění rozmazání, průměrné lumy
a prostorových/časových informací. Průchod je omezen na 600 strukturálních
vzorků, jedno vlákno FFmpeg/filtru, stejné seznamy povolených protokolů pouze
pro `file` a kontejnerů, limit výstupu procesu 1 MiB a nejvýše 30 sekund v rámci
sdíleného přerušení/termínu brokera. Nikdy nepřijímá z požadavku příkaz, filtr,
cestu ani URL.

Strukturální hodnoty představují deterministické vzorkovací důkazy, nikoli
sémantické porozumění videu. Neodvozují subjekty, akce, titulky, řeč ani záměr
uživatele. Hranice scén a zmrazení tvoří segmenty; pokrytí zmrazení, rozmazání,
expozice, prostorové detaily a časové změny ovlivňují pouze způsob přidělení
stávajícího rozpočtu 1–16 snímků. Plně zmrazený segment je omezen na jeden
snímek, zatímco nezmrazené segmenty soutěží o zbývající rozpočet. Když je hranic
více než snímků, zachová se rovnoměrné pokrytí časové osy, aby rychlé střihy na
začátku nemohly skrýt dlouhý koncový segment. Hranice scén v rámci
1sekundového rozlišení analýzy od hranice zmrazení se sloučí.

Chybějící filtry, poškozené/prázdné důkazy, chyba detektoru nebo vypršení časového
limitu omezené předběžné analýzy vedou k bezpečnému přechodu na přesnou zásadu
rovnoměrných středových bodů. Přerušení volajícím nebo termín brokera k takovému
přechodu nevede: ukončí probíhající podproces, zabrání pozdější extrakci snímků
a soukromý dočasný strom je odstraněn v bloku `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministické skutečné
testovací vstupy FFmpeg pro úsporu volání titulků po deduplikaci, přidělování
rozpočtu při hustém pohybu, důkazy rozmazání/expozice/SI-TI, rychlé střihy
s dlouhým koncem a falešně pozitivní výsledky při postupném prolínání.
Zaznamenává reálný čas předběžné analýzy a tam, kde je k dispozici
`/usr/bin/time`, také čas CPU podřízeného procesu a špičkovou hodnotu RSS.
Jeho kontroly kvality jsou pouze strukturálními orákuly. Kvalita skutečného
modelu pro titulky zůstává `HOLD`, protože tato testovací sada nemá autorizovaný
koncový bod ani zmrazeného hodnotitele. Peněžní úspory rovněž zůstávají `HOLD`,
pokud `--caption-cost-per-call-usd` neposkytne explicitní kladný odhad nákladů
na jedno volání; skript nikdy žádný z těchto výsledků nevymýšlí.

Každý snímek je omezen na 4 MiB, všechny nezpracované snímky dohromady na
23 MiB a serializovaná odpověď brokera na 32 MiB. Soukromý dočasný adresář je
odstraněn v bloku `finally`. OmniRoute nepřibaluje FFmpeg a nepřijímá vlastní
cestu ke spustitelnému souboru. Před vytvářením titulků bridge provádí
konzervativní průchod vizuální deduplikace: každý JPEG je zmenšen na šedotónovou
vyrovnávací paměť 16×16 a porovnán pouze s posledním zachovaným snímkem.
Při požadovaném rozpočtu titulků vyšším než jeden snímek poskytuje extrakce
omezený fond kandidátů o velikosti nejvýše dvojnásobku tohoto rozpočtu a nikdy
více než 16 snímků. Požadovaný limit se použije až po deduplikaci, přičemž při
konečném ztenčení jsou zachováni první a poslední vybraní kandidáti, pokud je
rozpočet alespoň dva. Verzovaná zásada
`grayscale-16x16-mean-cells-v2` používá vyšší hodnotu z průměrného rozdílu lumy
a podílu buněk miniatury, jejichž normalizovaný rozdíl je alespoň 0.05.
Prahová hodnota duplicity je konstanta 0.04, zvolená kvůli předvídatelnosti,
nikoli zpřístupněná jako nastavení za běhu. Tento sekundární
vysokokontrastní signál zachovává malé pohyby a změny viditelného textu, které
může porovnání založené pouze na průměru skrýt. Chyby porovnávače nebo dekodéru
vedou k zachování pokrytí. Výstupní metadata rozlišují extrahované kandidáty,
úspěšně použité snímky a odstraněné vizuální duplicity.

Explicitně označená část videa může požadovat kontaktní list s časovými
razítky. Bridge vytvoří JPEG mřížku s nejvýše 4 sloupci a 16 snímky. Každá
512pixelová buňka vypálí časové razítko svého zdroje do vysoce kontrastního
spodního pruhu, přičemž stejná časová razítka zůstanou v textových metadatech
pro následné přiřazení a audit. Úplný JPEG zůstává omezen na 32 MiB. Pokud
`sharp` nedokáže mřížku dekódovat nebo sestavit, bridge přejde na jednotlivé
snímky JPEG; přerušení klientem se i nadále přenáší operací s kontaktním listem.

Důkazy pro nasazení jsou záměrně odděleny od syntetického mikrobenchmarku
kompozice. `scripts/perf/video-bridge-contact-sheet-eval.ts` definuje
A/B testovací sadu s verzovaným schématem pro skutečné modely počítačového
vidění kompatibilní s OpenAI. Měří počet tokenů hlášený poskytovatelem,
celkovou reálnou latenci (včetně sestavení kontaktního listu), počet volání
modelu a zachování faktů definovaných manifestem. Nezpracované odpovědi modelu
se do sestavy nezapisují; uchovávají se pouze otisky SHA-256 a ID odpovídajících
faktů. Testovací sada neprovádí žádné síťové ani placené volání modelu, pokud
není předán parametr `--execute-real` a nejsou nakonfigurovány `--model`,
`OMNIROUTE_BASE_URL` a `OMNIROUTE_API_KEY`. Bez tohoto explicitního skutečného
spuštění zůstává její strojově čitelný verdikt `HOLD`; samotná syntetická měření
objemu dat/počtu volání nejsou důkazem pro nasazení.

Volající mohou k podporované části videa připojit volitelné pole
`transcript.cues`, pokud již mají časově zarovnaný text. Každá položka musí
obsahovat `text`, konečný interval `start`/`end` uvnitř zjištěné délky a hodnotu
`source` ze seznamu povolených hodnot (`client`, `embedded` nebo
`audio-bridge`); `confidence` má výchozí hodnotu `1` a musí zůstat mezi `0`
a `1`. Přesně duplicitní položky se sloučí. OmniRoute z těchto metadat nikdy
nespouští přepis: ověřené položky jsou zkopírovány do popsaného výsledku spolu
se zdrojem, spolehlivostí a intervalem a vykresleny jako nedůvěryhodná
pozorování vedle titulků snímků. Neplatný text, text mimo rozsah nebo text bez
provenience je odmítnut, místo aby byl smíchán s proudem titulků. Oba kanály
přepisu v těle požadavku normalizují dodanou provenienci na `client`, včetně
samostatně deklarovaných označení `embedded` nebo `audio-bridge`. Tato
důvěryhodná označení může prostřednictvím argumentu `trustedSource` dostupného
pouze v kódu přiřadit jen adaptér spravovaný serverem; pole JSON požadavku se
k tomuto argumentu nemůže dostat. Text přepisu zůstává nedůvěryhodným obsahem
odvozeným z médií bez ohledu na svou provenienci a nikdy nesmí určovat
autorizaci.

Pokročilý volající může pro stejné video poskytnout stopu `audioTranscript`;
považuje se za text poskytnutý klientem, nikoli za důkaz přepisu na serveru.
Spojovací vrstva spouští vizuální a zvuková pozorování se společným
termínem a signálem přerušení, řadí je na společnou časovou osu, slučuje
naprosto shodné položky a hlásí částečný výsledek, pokud uspěje pouze jedna větev.
Neplatný `audioTranscript` vede k tomuto částečnému výsledku — vizuální
popis se zachová a zvuková větev zaznamená sanitizovaný kód selhání —
namísto selhání celého videa. Dostupnost jednotlivých větví, příznak částečného
výsledku a sanitizované kódy selhání se zachovávají v popsaném výsledku, v
metadatech ochranných pravidel (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), v metadatech mezipaměti výsledků a v čítačích
slučování vrstvy bridge. Výchozí cesta Video Bridge nevyvolává převod řeči na text
ani nestahuje druhou kopii média; bez této explicitní stopy zpracovává
nadále pouze video.

**Uchovávání přepisu (#12150 P1).** Toto se použije automaticky vždy, když
Video Bridge (který je sám volitelný) vykreslí položku přepisu — neexistuje žádný
samostatný příznak uchovávání. Když požadavek vykreslí jakoukoli položku přepisu
(volajícím deklarovaný `transcript` nebo sloučený `audioTranscript`), ochranné
pravidlo ji označí jako `videoBridgeObserved` a vytvoří redigovanou stínovou kopii
popisu videa — identické vykreslení, ve kterém je volný text těla každé položky
nahrazen řetězcem `[redacted-video-transcript]`. Kopie vzniká nahrazením
strukturovaného pole položky před sestavením řetězce (nikdy analýzou sloučeného
textu, takže nemůže přežít žádný obsah položky — škodlivý ani běžný, včetně těl
obsahujících `]`, jako jsou `[inaudible]`/`[music]`). Tělo požadavku v trvale
uloženém protokolu volání zamění každou textovou část odvozenou z videa za tuto
redigovanou stínovou kopii, přičemž shodu určuje podle rovnosti obsahu; kotva
`fullText` se znovu načte z dokončeného datového obsahu ochranného pravidla před
voláním, takže nalezení shody uspěje i poté, co pozdější řetězená ochranná pravidla
(maskování osobních údajů a přihlašovacích údajů s prioritami 10/95) přepíší text
popisu na místě, a poté, co vložení systémové výzvy, předání a Memory změní
strukturu pole zpráv. Tělo odeslané modelu se nemění. Pozorovaný požadavek rovněž
nevytváří žádnou trvalou Memory (přeskočí se extrakce odvozená jak z požadavku,
tak z odpovědi), takže vlastní odpověď modelu nemůže zopakovat text přepisu do
Memory.

**Nezpracovaná pole videa (#12430).** Když je bridge povolen a nativní podpora videa je neznámá nebo chybí, definovaná pole `transcript`/`audioTranscript` rovněž aktivují `videoBridgeObserved`, a to i po selhání popisu nebo dosažení limitu `maxVideos`. Hodnoty `null` a prázdné řetězce se započítávají; chybějící pole a metadata nesouvisející s videem nikoli. Uchovávané kopie tato pole redigují nebo požadavek vynechají a mezipaměti/Memory se obcházejí.

Na těchto záložních cestách se platné položky od volajícího mění na podporované
části `text`/`input_text`, nikoli na nestandardní pole poskytovatele. Obě stopy
dodané v požadavku zůstávají nedůvěryhodnými pozorováními typu `client` s výslovným
upozorněním, že video nebylo popsáno a časové značky nebyly ověřeny vůči médiu.
Stávající limity 256 položek/64 KiB celkem a limity na jednotlivé položky se
uplatňují na obě stopy dohromady; časové značky se musí vejít do limitu brokeru
600 sekund a do případného zadaného časového okna. Neplatné stopy se zahodí,
nepředávají se jako libovolný text; platnou souběžnou stopu lze nadále použít,
pokud není překročen jejich společný limit. Pole s hodnotou null nebo prázdná
pole nepřidávají žádný text. Tento záložní mechanismus nepřidává žádné načítání
médií ani přepis. Rozšiřující pole přepisu se odstraní ze záložního nosiče videa
a jeho objektů `video_url`/`source`. Seznam povolených položek na rozhraní OpenAI
zůstává striktní; nosiče videa s neznámou nativní podporou zůstávají dostupné a
známé cíle pouze pro text si zachovávají bezpečné značky. Strukturované redigované
stínové kopie chrání připojený text přepisu, zatímco původní požadavek vlastněný
volajícím zůstává nezměněn. Cíle s nativní podporou a zakázané bridge si
zachovávají stávající chování s obejitím.

Další uchovávané kopie používají stejný signál pozorovaného požadavku. Nezpracovaný
snímek klientského požadavku před ochrannými pravidly, čekající požadavek v paměti
a protokol časně odmítnutého požadavku strukturálně nahrazují pole přepisu v částech
videa; řetězcové výzvy syntetizované fázemi pipeline a předáním kontextu se
redigují v cíli ukládání těla požadavku. Uložená značka `video_content_removed`
způsobí, že pokračování pomocí `previous_response_id` bezpečně selže namísto
rekonstrukce textu, který byl záměrně odstraněn. Pokud pozorovaný požadavek před
protokolováním ztratí svou redigovanou stínovou kopii pro jednotlivou část nebo
pokud se po pozdějších změnách požadavku nepodaří najít shodu byť jen pro jednu
z několika stínových kopií videa, uchovávané tělo požadavku se zcela vynechá,
namísto aby se uchoval pouze částečně redigovaný přepis.

U pozorovaného požadavku může odpověď modelu citovat libovolnou část
přepisu bez strukturované hranice položky. Její `responseBody` v trvale uloženém
protokolu volání se proto nahradí značkou vynechání; podrobný artefakt pipeline
(který může obsahovat těla od poskytovatele/klienta a bloky streamu) se neuchovává.
Sémantické mezipaměti, mezipaměti idempotence a mezipaměti přehrávání uvažování
u tohoto požadavku obcházejí čtení i zápis. Požadavek poskytovateli a odpověď
viditelná klientovi zůstávají beze změny. Počáteční bajty keepalive se při vynechání
podrobného artefaktu vyprázdní z dočasného bufferu. Upozornění Kiro na poškozený
EventStream hlásí pouze počet bajtů datového obsahu, nikdy jeho obsah ani
nezpracovanou chybu parseru JSON.
Netvrdí se tím, že byl prověřen každý nesouvisející diagnostický výstup
poskytovatele/pluginu; širší revize míst trvalého ukládání je sledována v #11658.

Interní životní cyklus `/api/modality-bridge/video/drilldown` je samostatná,
smyčkově/tokenově autentizovaná mezipaměťová infrastruktura. Každá operace také vyžaduje
kanonický neprůhledný identifikátor principalu. Než je produkční volající povolen, musí
tento identifikátor odvodit z autentizovaného tenanta a nikdy nesmí předat hodnotu
zvolenou klientem. Klíče mezipaměti vážou tento principal ke kanonickým identifikátorům relace a
reference videa, ukládají pouze jejich klíče odvozené pomocí SHA-256 a omezují čtení
i odstranění na tentýž principal. Mezipaměť ukládá nejvýše 16 odvozených snímků JPEG
na položku, po deseti minutách je nechá vypršet a podporuje omezená čtení
`start`/`end` nebo explicitní odstranění relace.

Každý principal je omezen na 16 položek a 64 MiB kanonických dat JPEG. Tyto
limity jsou nezávislé na globálním stropu 64 položek/256 MiB: tlak na kvótu
principalu vyřadí pouze nejméně nedávno používané položky daného principalu, než
se začne zvažovat globální vyřazování LRU. Platnost vypršených položek je při aktivitě
mezipaměti odstraněna z účtování pro principal i z globálního účtování, zatímco zrušení
a selhání validace nepotvrdí částečnou náhradu.

Mezipaměť odmítá nekanonický Base64, nadbytečné doplnění, média jiná než JPEG, poškozené či
zkrácené soubory JPEG a soubory JPEG, které během omezeného dekódování celého obrázku pomocí `sharp`
vyvolají varování. Každý přijatý obrázek znovu zakóduje jako kanonický JPEG, odvodí šířku a výšku
z dekódovaných bajtů namísto důvěřování polím volajícího a zahodí veškeré koncové
polyglotní bajty, místo aby je uchovala. Do obou kvót se započítává pouze omezený kanonický komprimovaný buffer.
Limit přenosu JSON zahrnuje režii Base64 pro limit 32 MiB
dekódovaného vstupu. Každé
uložené odvození zaznamenává svůj validovaný formát JPEG a rozlišení, zásady vzorkování,
verzi odvození, čas vytvoření, serverem vypočítaný hash obsahu a hashovanou nadřazenou
referenci společně s hashem nadřazeného obsahu od důvěryhodného volajícího. Zrušení se kontroluje
mezi asynchronními fázemi dekódování a hashování před atomickým potvrzením do mezipaměti.

Tato část zatím k trase nepřipojuje produkčního producenta a neposkytuje
výběr variant s více rozlišeními. Transparentní cesta požadavku Video Bridge
proto nepřináší žádnou dodatečnou práci, zatímco odvození principalu vázané na tenanta a
úplný životní cyklus FU-08 s více rozlišeními zůstávají explicitně navazující prací,
nikoli zdokumentovaným dokončeným chováním.

Snímky jsou opatřovány titulky postupně pomocí nakonfigurovaného modelu Video. Prázdné
nastavení Video zdědí nastavení Vision; pokud jsou obě prázdná, automatický směrovač Vision
vybere efektivní model podporující zpracování obrazu. Úspěšné titulky
nahradí původní část stabilním prefixem `[Video description:`, který zároveň
označuje text jako nedůvěryhodné pozorování odvozené z média a instruuje navazující
modely, aby neplnily pokyny nalezené v médiu. Klíče mezipaměti titulků snímků
zahrnují bajty JPEG, prompt, časové razítko a efektivní model; do mezipaměti se ukládají pouze úspěšné
titulky. Položky mezipaměti uchovávají skutečný úspěšný producentský model,
včetně záložního modelu; pokud byly různé snímky vytvořeny různými modely,
bridge hlásí `mixed`. Zásah mezipaměti znovu použije identitu tohoto producenta,
místo aby ji přeznačil jako požadovaný plán směrování. Mezipaměť výsledku celého videa
je klíčována podle každého vstupu, který mění výstup — promptu, efektivního
modelu, zásad vzorkování, počtu snímků, režimu sémantické analýzy, otisku SHA-256
normalizované nápovědy zaměření, okna zaměření, `transcript`,
`audioTranscript` a příznaku kontaktního listu — takže změna kteréhokoli z těchto
rozměrů znamená nezasažení mezipaměti, nikdy opětovné použití zastaralých dat. Verze zásad
vizuální deduplikace, prahová hodnota a omezený počet kandidátních snímků jsou také explicitně uvedeny v
klíči a metadatech mezipaměti výsledků; změna zásad proto nemůže znovu použít zastaralý
popis celého videa. Metadata mezipaměti výsledků v4 uchovávají režim a
otisk, nikdy ne nezpracovaný uživatelský úkol. Metadata guardrailu uvádějí požadovaný
i efektivní režim analýzy; požadovaný režim `focused` bez
použitelného uživatelského textu je vykázán jako efektivně `full`.

Guardrail extrahuje každou podporovanou část videa, ale popíše jich nejvýše
`modalityBridgeVideoMaxVideos`. U cíle, u něhož je prokázáno
`supportsVideo === false`, se neúspěšná a nadlimitní videa převedou na explicitní bezpečné
textové značky, takže nezůstane žádné nezpracované video. Pokud schopnost není známa, tyto části
si zachovají svůj nosič videa; případný záložní přepis se řídí výše uvedeným omezeným
převodem textu. Cíle s `supportsVideo === true` bridge obcházejí.
Signál zrušení klientského požadavku se šíří přes stahování, frontu brokeru,
podprocesy a volání titulků; zrušení zastaví zpracování mezi videi a nikdy při selhání
nepovolí průchod nezpracovaného média.

Běhová nastavení jsou uložena v databázi a validována pomocí Zod:

| Klíč                                | Výchozí hodnota | Rozsah / chování                                                                                         |
| ----------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`         | Volitelné běhové prostředí, nutné explicitně povolit                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`        | `full` zachovává obecné popisky; `focused` používá omezený, nedůvěryhodný kontext posledního uživatele   |
| `modalityBridgeVideoModel`          | `""`            | Převezme model Vision Bridge                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`             | 1–16                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`     | `uniform`, `scene_aware` nebo proporcionální `segment_aware`; při selhání detektoru se použije `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`             | 1–4                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`        | 1000–120000 ms                                                                                           |

Starší uložené hodnoty časového limitu videa přesahující 120 sekund jsou omezeny na
lhůtu brokeru; zápisy nových nastavení nad tento limit jsou odmítnuty.
`GET /api/modality-bridge/video/runtime` před ověřením nebo kontrolou běhového
prostředí vyžaduje důvěryhodnou, označenou lokální adresu zpětné smyčky a následně
vyžaduje autentizaci pro správu. Vrací pouze `available`, sanitizované verze
FFmpeg/ffprobe a pevně stanovený důvod, pokud běhové prostředí není k dispozici.
Interní koncový bod pro extrakci není veřejným API pro nahrávání: při zaplnění
fronty vrací `503` společně s `Retry-After`, při odpojení volajícího vrací `499`
a při uplynutí pevně stanovené lhůty brokeru vrací `504`. Převedené odpovědi přidávají
`video->text;model=<visionModel>;parts=<videos>` do centrální hlavičky
`x-omniroute-modality-bridge`, aniž by odstraňovaly segmenty Vision nebo Audio.

### Maskování PII (`piiMasker.ts`)

Spouští se v **obou** fázích.

- **`preCall`** naklonuje datovou část, projde `system`, `messages`, `input` a
  `prompt` (včetně položek tvořených prostým řetězcem) a použije `processPII()` (z
  `@/shared/utils/inputSanitizer`) na řetězcová pole `content`/`text`. Když je
  `PII_REDACTION_ENABLED=true`, zjištěné PII jsou v odchozí datové části
  redigovány. Toto chování je nezávislé na `INPUT_SANITIZER_MODE` (které řídí
  pouze zásady pro prompt injection). Když je redigování vypnuto, volání zaznamená
  počty detekcí, aniž by přepisovalo obsah.
- **`postCall`** vytvoří hloubkovou kopii odpovědi, spustí `sanitizePIIResponse()` a
  maskování struktury Responses API (`maskResponsesOutput` — pokrývá
  `output_text` a `output[].content[].text`). Pokud dojde k jakékoli redakci,
  upravená odpověď nahradí původní.

Ochranné pravidlo nikdy neblokuje; pouze přidává anotace (`meta.detections`,
`meta.redacted`) nebo obsah přepisuje.

### Prompt Injection (`promptInjection.ts`)

Detekuje nepřátelské struktury v obsahu zadaném uživatelem a vynucuje
nakonfigurované zásady. Chování je řízeno proměnnými prostředí a možnostmi
konstruktoru:

| Nastavení      | Proměnná prostředí                                                                                     | Výchozí hodnota | Účinek                                                                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Povoleno       | `INPUT_SANITIZER_ENABLED`                                                                              | `true`          | Při hodnotě `false` se ochranné pravidlo okamžitě ukončí.                                                                                                                                         |
| Režim          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`          | Zásady pro injection: `block`, `warn` nebo `log`. (`redact` je podporováno kvůli zpětné kompatibilitě, ale **neodstraňuje** text injection; přepis PII v požadavku řídí `PII_REDACTION_ENABLED`.) |
| Práh blokování | možnost `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`          | Minimální závažnost potřebná k blokování. Při výchozím nastavení je střední závažnost pouze sledována.                                                                                            |

**Priorita režimů** (`getMode`): `options.mode` volajícího →
**přepsání příznakem funkce v DB** pro `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → proměnná prostředí `INJECTION_GUARD_MODE` → proměnná prostředí
`INPUT_SANITIZER_MODE` → `warn`. Přepsání z řídicího panelu má proto přednost
před proměnnými prostředí, takže uživatelské rozhraní Feature Flags řídí běžící
ochranu živě (bez restartu). Čtení z DB je zabezpečeno proti selhání:
pokud dojde k chybě, ochrana se vrátí k chování založenému na proměnných
prostředí, a pokud není nastaveno žádné přepsání, je chování shodné s vyhodnocením
založeným pouze na proměnných prostředí.

Zdroje detekce:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (sdílená sada detektorů
   používaná i na jiných místech pipeline).
2. Vestavěné `DEFAULT_GUARD_PATTERNS` (aktuálně `system_override_inline` a
   `markdown_system_block`, oba se závažností `high`).
3. Volitelné `customPatterns` předané prostřednictvím možností konstruktoru
   (řetězce, regulární výrazy nebo záznamy `{ name, pattern, severity }`).

Když `mode === "block"` **a zároveň** alespoň jedna detekce dosáhne prahové
hodnoty závažnosti, `preCall` vrátí `{ block: true, message: "Request rejected:
suspicious content detected" }`. V režimech `warn`/`log` guardrail událost
zaznamená, ale volání povolí. Sdílená pomocná funkce
`evaluatePromptInjection()` je také exportována pro volající, kteří potřebují
vyhodnocovat prompty bez použití registru.

**Limit skenování (v3.8.20):** detektor kontroluje pouze **prvních 16 KB**
spojeného textu promptu — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtů)
v `src/shared/utils/inputSanitizer.ts`. Funkce `detectInjection()` i
`evaluatePromptInjection()` před spuštěním smyčky vzorů používají
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Direktivy pro injekci se nacházejí poblíž
začátku vstupu, takže toto omezení snižuje zatížení CPU/GC regulárními výrazy
u payloadů o velikosti stovek KB, aniž by oslabovalo detekci (viz #3932, #4041).

### Maskování přihlašovacích údajů (`credentialMasker.ts`)

Spouští se v **obou** fázích, jako poslední ve výchozím řetězci (priorita `95`).
Rediguje známé vzory API klíčů / tajných tokenů z odchozího payloadu (obsah
zpráv, argumenty volání nástrojů, výsledky nástrojů) **i** z odpovědi
poskytovatele, aby přihlašovací údaj vložený do promptu (nebo zopakovaný ve
výsledku nástroje) neunikl upstream poskytovateli ani zpět klientovi.

- **Pouze po výslovném zapnutí**, podle stejné konvence jako redigování PII
  (související s Tvrdým pravidlem č. 20): ve výchozím nastavení je vypnuto,
  pokud `settings.credentialRedactionEnabled === true` **nebo**
  `CREDENTIAL_REDACTION_ENABLED=true`. Je-li vypnuto, guardrail neprovádí
  žádnou operaci — nikdy neblokuje ani nepřepisuje.
- `redactCredentials()` prochází celý strom payloadu/odpovědi (`walkValue()`,
  zabezpečeno proti znečištění prototypu, bezpečné vůči cyklům díky `WeakSet`)
  a nahrazuje shody zástupným symbolem `[REDACTED:<type>]`, přičemž klonuje
  pouze větve, které se skutečně změnily.
- `CREDENTIAL_PATTERNS` pokrývá klíče poskytovatelů LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), platební klíče (Stripe, Square),
  cloudové klíče (přístupový klíč AWS, Twilio, SendGrid, Mailgun), soukromé
  klíče / JWT, připojovací řetězce obsahující přihlašovací údaje
  (`mongodb://user:pass@...` atd.) a obecný vzor pro hodnoty hlaviček
  `Authorization`/`x-api-key`/`api-key`/`apikey`. Klíče ve tvaru hlaviček
  (`authorization`, `x-api-key`, `api-key`, `apikey`) jsou redigovány
  strukturálně (pouze hodnota, prefix schématu, například `Bearer `/`Basic `,
  zůstává zachován), nikoli pomocí obecného textového regulárního výrazu.
- Guardrail nikdy neblokuje; pouze přepisuje (`modifiedPayload` /
  `modifiedResponse`) a přidává anotace (`meta.credentialsRedacted`,
  `meta.count`).

Ochrana proti regresím: `tests/unit/credential-masker-guardrail.test.ts`.

## Základní kontrakt (`base.ts`)

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
  block?: boolean; // true zkrátí vyhodnocování řetězce
  message?: string; // zobrazí se při zablokování
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vráceno metodou preCall pro přepsání požadavku
  modifiedResponse?: TValue; // vráceno metodou postCall pro přepsání odpovědi
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

Ochranné pravidlo signalizuje „žádnou změnu“ vrácením hodnoty `void`, `{}` nebo
`{ block: false }`. Vrácení `modifiedPayload`/`modifiedResponse` nahradí
hodnotu procházející řetězcem pro následná ochranná pravidla.
`signal?: AbortSignal` přenáší životní cyklus volajícího do ochranných pravidel. Přerušení požadavku je záměrnou výjimkou z režimu fail-open: mediální převodníky ukončí práci a provedou úklid, aniž by obnovily nezpracovaná média pro cíl, o kterém je známo, že je nepodporuje.

## Registr (`registry.ts`)

Singleton `guardrailRegistry` poskytuje:

- `register(guardrail)` — přidá ochranné pravidlo (nebo je nahradí podle normalizovaného názvu) a
  znovu seřadí pravidla vzestupně podle `priority`.
- `clear()` / `list()` — pomocné administrativní funkce.
- `runPreCallHooks(payload, context)` — prochází aktivní ochranná pravidla, předává
  payload prostřednictvím `modifiedPayload` a zastaví se při prvním `block: true`.
- `runPostCallHooks(response, context)` — stejný postup na straně odpovědi.
- `resetGuardrailsForTests({ registerDefaults })` — vymaže stav a volitelně
  znovu zaregistruje výchozí pravidla pro čistou izolaci testů.

Oba spouštěče vracejí `{ blocked, payload|response, results, guardrail?, message? }`,
kde `results` je pole záznamů `GuardrailExecutionResult`, které obsahují
pro jednotlivá ochranná pravidla pole `blocked`, `skipped`, `modified`, `error` a `meta`,
užitečná pro trasování.

### Zakázání ochranných pravidel pro jednotlivé požadavky

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` shromažďuje
deduplikovaný seznam názvů ochranných pravidel, která mají být pro aktuální
požadavek přeskočena. Zdroje (všechny jsou volitelné a všechny se slučují):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` v těle požadavku (na nejvyšší úrovni)
- `metadata.disabledGuardrails` v těle požadavku
- Hlavička `x-omniroute-disabled-guardrails` (nebo starší
  `x-disabled-guardrails`)

Hodnoty mohou být pole řetězců nebo řetězec oddělený čárkami; názvy jsou
normalizovány na malá písmena ve formátu kebab-case (`pii_masker` → `pii-masker`). Výsledek
je předán registru prostřednictvím `context.disabledGuardrails`, který přeskočí
odpovídající ochranná pravidla (`skipped: true` v `results`).

## Pořadí zpracování

Pro každý požadavek procházející přes `src/sse/handlers/chat.ts` a
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` sestaví seznam vynechaných ochranných mechanismů z klíče API, těla požadavku
   a hlaviček.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` spustí ochranné mechanismy ve vzestupném
   pořadí priorit:
   - Zakázané ochranné mechanismy se zaznamenají jako `skipped`.
   - Metoda `preCall` každého ochranného mechanismu může přepsat datovou část pomocí `modifiedPayload`.
   - První výskyt `block: true` okamžitě ukončí řetězec a obslužná rutina vrátí
     odpověď o zamítnutí ochranným mechanismem.
3. (Případně přepsaná) datová část pokračuje do kombinovaného směrování a odeslání
   nadřazené službě.
4. Po sestavení odpovědi spustí `guardrailRegistry.runPostCallHooks(...)`
   stejný řetězec nad odpovědí. Hodnota `block: true` v této fázi zahodí odpověď
   nadřazené služby.

Ochranné mechanismy, které vyvolají výjimku, se zaznamenají s `error: <message>` a zaprotokolují prostřednictvím
`logger.warn`, ale řetězec pokračuje — záměrně tedy funguje v režimu fail-open.

## Konfigurace

Proměnné prostředí načítané vestavěnými ochrannými mechanismy:

| Proměnná                              | Používá ji                | Účinek                                                                                                        |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Nastavením na `false` se detekce zcela zakáže.                                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Zásady pro injekce: `warn`, `block` nebo `log`. Zastaralá hodnota `redact` text injekce nepřepisuje.          |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Režim ochrany proti injekcím; zároveň příznak funkce v DB, který **přepisuje** proměnné prostředí (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimální závažnost, kterou `MODE=block` odmítne: `high` (výchozí), `medium` nebo `low`.                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Zastaralý alias pro `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                        |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Je-li nastaveno na `true`, údaje PII v požadavku se začerní (nezávisle na režimu injekcí).                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (na výstupu) | Řídí chování maskování na straně odpovědi.                                                                    |

Ochranné mechanismy Modality Bridge načítají běhovou konfiguraci z úložiště nastavení
založeného na DB (`getSettings()`), nikoli z proměnných prostředí. Primární klíče pro obraz jsou
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` a
`modalityBridgeCacheMaxEntries`. Zastaralé klíče
`visionBridge*` jsou přijímány pouze jako zdokumentovaný záložní zdroj pro čtení během jednoho cyklu;
zápisy z řídicího panelu používají primární klíče. Výchozí hodnoty a záložní
resolver se nacházejí v `src/shared/constants/modalityBridgeDefaults.ts`, přičemž zastaralé
konstanty zůstávají zachovány v `src/shared/constants/visionBridgeDefaults.ts`.

Zvuk používá `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` a `modalityBridgeAudioMaxClips` společně se sdílenými
nastaveními `modalityBridgeCache*`. Zvuk nemá záložní podporu zastaralých klíčů, protože tyto
klíče byly zavedeny se schématem Modality Bridge.

Video používá `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` a
`modalityBridgeVideoTimeout` společně se sdílenými nastaveními `modalityBridgeCache*`.
Ve výchozím nastavení je zakázáno, protože FFmpeg/ffprobe jsou volitelné provozní
závislosti a popisování snímků zvyšuje latenci a náklady na model.

## Vlastní guardraily

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

Postup:

1. Vytvořte `src/lib/guardrails/myGuardrail.ts`, který rozšiřuje `BaseGuardrail`.
2. Implementujte `preCall` a/nebo `postCall`.
3. Buď jej zaregistrujte při importu (přidáním z `registerDefaultGuardrails`), nebo
   za běhu zavolejte `guardrailRegistry.register(...)` — registr nahradí
   jakýkoli dřívější guardrail se stejným normalizovaným názvem.
4. Přidejte testy do `tests/unit/` (existující příklady:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testování

Mezi testy použijte `resetGuardrailsForTests()`, abyste vždy začínali ze známého stavu.
Předejte `{ registerDefaults: false }`, chcete-li začít s prázdným registrem a
zaregistrovat pouze testované guardraily. Vision Bridge podporuje vkládání závislostí
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge zpřístupňuje ekvivalentní
rozhraní pro nastavení, schopnosti, výběr modelu STT, kontrolu přihlašovacích údajů
a přepis. Testy tak mohou ověřovat oba toky bez přístupu k databázi nebo síti.

## Viz také

- `src/lib/guardrails/` — implementace
- `src/shared/utils/inputSanitizer.ts` — sdílený detektor zajišťující
  detekci prompt injection a maskování PII
- `src/shared/constants/visionBridgeDefaults.ts` — výchozí hodnoty Vision Bridge a
  seznam modelů s vynuceným přemostěním
- `src/shared/constants/modalityBridgeDefaults.ts` — sdílené výchozí hodnoty běhového prostředí Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonální vrstva (circuit breaker, intervaly zklidnění)
- `docs/reference/ENVIRONMENT.md` — úplný přehled proměnných prostředí

## Pokrytí tras ochranou proti injection a red-team testování (Fáze 8 · Blok D)

Ochrana proti injection (`createInjectionGuard` / `withInjectionGuard`) pokrývá všechny trasy,
které přijímají uživatelské prompty. Respektuje `INJECTION_GUARD_MODE` (výchozí `warn` = pouze protokolování;
`block` = vrátí HTTP 400 `SECURITY_001`).

| Typ              | Trasy                                                                                                                                                | Výchozí režim |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Text (stávající) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativní      | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Extrakce textu (`extractMessageContents`) pokrývá `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testování (každou noc, `nightly-llm-security.yml`):** promptfoo ověřuje, že každá trasa blokuje
korpus OWASP-LLM v režimu `INJECTION_GUARD_MODE=block`; garak spouští sondy (bez tajného klíče se přeskočí).
`moderations` je zahrnuto kvůli konzistenci — provozovatelé jej mohou v režimu blokování vyjmout pomocí
`resolveDisabledGuardrails`.

Noční pracovní postup (`.github/workflows/nightly-llm-security.yml`, cron + ruční
spuštění) obsahuje dvě úlohy:

- **`promptfoo-guard` (blokující)** — spouští `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Každý nepřátelský případ (např. „ignoruj všechny
  předchozí instrukce…“, jailbreaky ve stylu DAN) ověřuje, že odpověď obsahuje
  `error.code === "SECURITY_001"`, tj. že ochrana požadavek skutečně odmítla.
- **`garak` (informativní)** — spouští garak `--probes promptinject,dan,leakreplay`
  proti lokální instanci OmniRoute (`http://localhost:20128/v1`). Je podmíněna
  tajným klíčem poskytovatele (`PROMPTFOO_PROVIDER_KEY`); pokud není k dispozici, korektně se přeskočí a je doplněna
  o `|| true`, takže podá hlášení, aniž by způsobila selhání CI.

Pokrytí pomocné funkce ochrany (`createInjectionGuard` / `withInjectionGuard`)
zahrnuje každou trasu `/v1` přijímající prompt; text promptu se získává z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomocí
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
