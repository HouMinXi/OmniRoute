# Guardrails (Lietuvių)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Pirminis tiesos šaltinis:** `src/lib/guardrails/`
> **Paskutinį kartą atnaujinta:** 2026-08-29 — v3.8.51 („Video Bridge“ transkripcijos kilmę deklaruoja iškvietėjas,
> serveris jos dar nepatvirtina — patikslinta pagal #11661)

Apsaugos priemonės užtikrina saugos, politikos ir turinio transformacijas ties
riba tarp „OmniRoute“ ir išorinių teikėjų. Kiekviena apsaugos priemonė gali tikrinti
(ir pasirinktinai atmesti, transformuoti arba anotuoti) užklausų naudingąsias apkrovas (`preCall`) ir
išorinių teikėjų atsakymus (`postCall`).

Sistema yra **fail-open**: jei vykdant apsaugos priemonę įvyksta išimtis, registras
įrašo klaidą ir tęsia darbą su kita apsaugos priemone, užuot atmetęs
užklausą. Blokavimas visada yra sąmoningas sprendimas (`block: true`), o ne atsitiktinumas.

## Integruotos apsaugos priemonės

Importuojant registras automatiškai įkelia šešias apsaugos priemones prioriteto
tvarka (žr. `registry.ts` → `registerDefaultGuardrails()`):

| Prioritetas | Pavadinimas         | Etapas(-ai)    | Failas                |
| ----------- | ------------------- | -------------- | --------------------- |
| `5`         | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`         | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`         | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`        | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`        | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`        | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Mažesni prioriteto numeriai vykdomi **pirmiausia**.

### Vaizdo tiltas (`visionBridge.ts`) — modalumo tiltas PR-1

Perima užklausas su vaizdais, skirtas **vaizdų nepalaikantiems modeliams**, ir
arba nukreipia visą užklausą į vaizdus palaikantį modelį, arba, prieš siunčiant
užklausą aukštesnio lygio paslaugai, pakeičia vaizdų dalis tekstiniais
aprašymais, kuriuos sugeneruoja konfigūruojamas vaizdo modelis. Taip tik tekstą
palaikantys teikėjai gali skaidriai apdoroti daugiarūšius duomenis.

Eiga:

1. Praleisti, jei tikslinis modelis jau palaiko vaizdus (nebent jis įtrauktas į
   priverstinio tilto sąrašą `isVisionBridgeForcedModel`).
2. Išskirti vaizdų dalis naudojant `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), kuri perduoda darbą **vieningajam medijos
   detektoriui** `detectMediaParts()`, esančiam `open-sse/utils/mediaParts.ts` —
   tai vienintelis tiesos šaltinis, bendrai naudojamas su derinių suderinamumo
   filtru. Išskiriamos tik leidžiamų formų aukščiausiojo lygio dalys, kurias
   `replaceImageParts` gali įterpti atgal (išskyrimo↔pakeitimo sutartis): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` ir Responses API `input_image`. Įdėtiniai atitikmenys ir
   tik indikatorių turinčios formos yra derinių filtro medžiaga ir niekada
   neišskiriami. Praleisti, jei nieko nerasta.
3. Nustatyti vykdymo konfigūraciją naudojant
   `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): naujieji
   `modalityBridge*` nustatymų raktai turi pirmenybę; senieji `visionBridge*`
   raktai lieka kaip **vieno ciklo atsarginis variantas** (grąžinimo langas).
   Jei tiltas išjungtas, praleisti prieš atliekant bet kokį medijos perėjimą.
4. Režimo parinkiklis (`modalityBridgeVisionMode`, žr. toliau pateiktą lentelę)
   nustato, ar nukreipti užklausą, ar aprašyti vaizdus. Nukreipimo atveju
   grąžinamas `modifiedPayload`, kuriame pakeistas tik `model`, ir metaduomenys
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Aprašymo eiga: apriboti vaizdų skaičių iki `maxImages`, sudaryti užduotį
   atitinkančią užklausą, patikrinti aprašymų podėlį, **lygiagrečiai**
   (`Promise.allSettled`) iškviesti vaizdo modelį ir vietoje vaizdų įterpti
   tekstines dalis `[Image N]: <description>`. Jei aprašyti nepavyksta,
   grąžinamas `null`, o pradinė vaizdo dalis **išsaugoma** (#4012), išskyrus
   derinio aprašymo eigą, kai nepavyko nė vienas aprašymas: tokiu atveju
   patvirtintai vaizdų nepalaikančiai aukštesnio lygio paslaugai vietoje vaizdo
   pateikiamas tekstas `(unavailable — no vision-capable provider connected)`
   (#8430).
6. Grąžinti `modifiedPayload` ir metaduomenis (`imagesProcessed`,
   `descriptions`, `processingTimeMs`, `visionModel`).

#### Režimo parinkiklis (`modalityBridgeVisionMode`)

| Režimas    | Numatytasis | Veikimas                                                                                                                                                                                                                                                                                                          |
| ---------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Ankstesnė euristika, nepakeista (#6640/#7204): ne derinių / `auto/` modeliai nukreipiami į geriausią vaizdo modelį, nebent pradinis modelis jau turi tinkamus kredencialus (tuomet vaizdai aprašomi); derinių tikslai visada aprašomi.                                                                            |
| `describe` |             | Visada aprašyti — nukreipimo blokas visiškai praleidžiamas; visada atsako naudotojo pasirinktas modelis.                                                                                                                                                                                                          |
| `reroute`  |             | Priverstinai nukreipti: kredencialus turinčio modelio išsaugojimo patikra apeinama. Nukreipimo **tikslo** kredencialų patikra vis tiek taikoma — kai nėra tinkamo vaizdo modelio, užklausa perduodama aprašymo eigai, kad neapdoroti vaizdai niekada nepasiektų tik tekstą palaikančios galinės sistemos (#8430). |

Priverstiniai režimai užbaigia parinkimą **prieš** paleidžiant automatinę
euristiką; `auto` veikimas baitų lygmeniu sutampa su iki PR-1 naudota apsaugos
priemone.

#### API rakto aprėptis (`visionBridgeKeyScope.ts`)

Kai iškvietėjo API raktas riboja `allowedConnections`, kvotų telkinius
(`allowedQuotas`) arba modelius (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), tiltas nukreipimui
ir aprašymui parenka tik tuos modelius, kuriuos leidžiama naudoti su tuo raktu,
ir tik tuose ryšiuose, kuriuos leidžiama naudoti su tuo raktu. Tada aprašymo
iškvieta visada vykdoma per OmniRoute vidinę kilpą su
`x-omniroute-self-loop-key-id` antrašte, todėl gaunanti pokalbio užklausa dar
kartą pritaiko to rakto ryšių ir modelių politiką. `enforceApiKeyPolicy()`
atsižvelgia į šią antraštę tik kartu su vidinės kilpos prieigos raktu, todėl ji
gali tik susiaurinti prieigą, o nerastas identifikatorius atmetamas.

Jei raktui neleidžiamas joks vaizdo modelis, aprašymo eiga nesikiša ir užklausa
perduodama nepakeista — tai toks pats nesėkmės atveju praleidžiantis veikimas
kaip ir išjungtos apsaugos priemonės atveju (metaduomenys
`{ skipped: true, reason: "no_permitted_vision_model" }`). Užklausos be rakto ir
raktai be šių apribojimų veikia lygiai taip pat kaip anksčiau.

#### Užduotį atitinkanti aprašymo užklausa (`modalityBridgeVisionTaskAware`)

Numatytoji reikšmė yra **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) prie bazinės
aprašymo užklausos prideda **paskutinio naudotojo pranešimo** tekstą (sutrumpintą iki 500 simbolių),
nukreipdamas aprašymą į tai, ko naudotojas iš tikrųjų prašė
(`codex-vision-proxy` šablonas), ir paprašydamas vaizdo modelio transkribuoti matomą
tekstą. Kai ši parinktis išjungta arba nėra naudotojo teksto, bazinė užklausa naudojama nepakeista.

Aprašymo saviciklio OpenAI suderinama užklausa (`callVisionModelSingle()`
faile `visionBridgeHelpers.ts`) visada nustato `image_url.detail: "high"` —
besąlygiškai, kiekvienam iškvietėjui / teikėjui, neatsižvelgiant į jokį kliento signalą.
Mažo detalumo atranka blogina OCR tikslumą būtent tai teksto transkribavimo
užduočiai, kurios prašo ši užklausa, todėl pats aprašymo iškvietimas visada prašo didelio
detalumo, nepaisant to, koks detalumo lygis buvo naudojamas pradinėje gaunamoje užklausoje. Tai
veikia tik vidinės aprašymo užklausos turinį; tai nekeičia, kaip
OmniRoute persiunčia paties iškvietėjo `image_url.detail` pirminėje užklausoje —
ši numatytoji reikšmė taikoma atskirai ir tik aptiktiems OpenCode klientams,
naudojant `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Aprašymo
saviciklio Anthropic perdavimo formato šaka neturi `detail` lauko,
todėl nė viena numatytoji reikšmė jos neveikia.

#### Aprašymo išvesties riba (`modalityBridgeVisionMaxChars`)

| Raktas                         | Numatytoji reikšmė | Diapazonas         |
| ------------------------------ | ------------------ | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`                | `0` arba 100–50000 |

`0` (numatytoji reikšmė) reiškia **be ribos** — aprašymas, kurį grąžina
`callVisionModel()`, perduodamas nepakeistas, išlaikant esamą
elgseną. Bet kuri reikšmė nuo 100 iki 50000 sutrumpina aprašymą ir prideda
`…` galūnę prieš įterpiant jį kaip `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` faile `src/lib/guardrails/visionBridge.ts`).
Padidinkite šią reikšmę daug detalių turinčioms OCR užduotims, kai tolesniam modeliui reikia
visos transkripcijos; sumažinkite ją, kad apribotumėte prie žodingų vaizdo modelių naudojamų žetonų kiekį.
Prietaisų skydelio laukas yra skirtuko „Vision“ skydelyje „Advanced“
(`modality-bridge-max-chars` faile `ModalityBridgeVisionTab.tsx`) ir bet kurią
reikšmę nuo 1 iki 99 padidina iki minimalios 100 ribos, o aiškiai nurodytą `0`
palieka nepakeistą — `0` savaime yra tinkama Zod reikšmė
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), o ne vien
numatytoji reikšmė, reiškianti „nenustatyta“.

#### Aprašymų podėlis (`modalityBridge/bridgeCache.ts`)

Atmintyje laikomas LRU + TTL aprašymų išvesčių podėlis, bendrai naudojamas visame procese.
Raktas = `sha256(imageRef + composedPrompt + configuredBridgeModel)` su
ilgio prefiksais pagrįstu kadravimu (be laukų ribų kolizijų). Modelio komponentas yra
**sukonfigūruotas** tilto modelis, o ne modelis, kuris iš tikrųjų atsakė —
`callVisionModel` gali viduje naudoti atsarginį modelį, o rakto sudarymas kiekvienam bandymui
suskaidytų podėlį. Nesėkmingi aprašymai niekada nekaupiami. Nustatymai:

| Raktas                          | Numatytoji reikšmė | Diapazonas |
| ------------------------------- | ------------------ | ---------- |
| `modalityBridgeCacheEnabled`    | `true`             | —          |
| `modalityBridgeCacheTtlMinutes` | `60`               | 1–1440     |
| `modalityBridgeCacheMaxEntries` | `200`              | 10–5000    |

#### Nuotolinių vaizdų normalizavimas (saviciklio aprašymas / base64 gavimas)

Kai tiltas pats gauna **nuotolinį** vaizdą — Anthropic aprašymo
saviužklausoje ir konvertuojant į claude perdavimo formato base64
(`ensureBase64ImagesForClaudeWire`), abiem atvejais per
`fetchRemoteImageAsDataUri()` faile `visionBridgeHelpers.ts` — gautas duomenų
URI perduodamas per `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prieš įterpiant jį į vaizdo modelio
užklausą. Per dideli vaizdai sumažinami taip, kad jų **ilgoji kraštinė būtų 2048px** (tai atitinka
dydžio ribą, kurią OpenAI / Anthropic jau taiko serverio pusėje), todėl sumažėja
įkeliamų duomenų kiekis ir delsa, nekeičiant to, ką mato vaizdo modelis. Dydžiui keisti
naudojamas `sharp`, įkeliamas dinaminiu importu: platformoje, kurioje nepavyksta įkelti jo savosios
dvejetainės bibliotekos, `normalizeDataUri()` **niekada neišmeta išimties** — vietoj to
jis praleidžia originalius baitus nepakeistus, todėl aprašymo / base64 konvertavimo
kelias visada veikia. Ne vaizdo baitai (kai gautų duomenų nepavyko
dekoduoti kaip vaizdo) taip pat perduodami nepakeisti. Šis normalizavimas
taikomas tik vaizdams, kuriuos tiltas gauna savo savi-iškvietimui — jis niekada
netaikomas neapdorotam iškvietėjo tiesiogiai perduodamam naudingajam turiniui, laikantis
tik aiškiai pasirinkto keitimo principo (griežtoji taisyklė Nr. 20).

#### Nustatymų schema + migracija

Naujus `modalityBridge*` raktus Zod patikrina `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` trejetas ir
`modalityBridgeAudio*` grupė, naudojama garso tilto. Migracija
`141_modality_bridge_settings.sql` nukopijuoja esamas senąsias
`visionBridge*` reikšmes į atitinkamus naujus raktus (idempotentiškai ir niekada neperrašo
operatoriaus nustatytos `modalityBridge*` reikšmės); vieną leidimo ciklą senieji raktai
ir toliau priimami kaip atsarginis skaitymo variantas.

#### Skaidrumo antraštė + statistika

Aprašymu transformuoti atsakymai turi
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(sukuriama naudojant `buildModalityBridgeHeader()` faile `modalityBridge/bridgeStats.ts`,
pridedama naudojant `withModalityBridgeHeader()` faile `src/sse/handlers/chatHelpers.ts`).
Peradresuotos užklausos **negauna** jokios antraštės — naudingasis turinys nebuvo pakeistas, o modelio
pakeitimas jau matomas atsakymo turinio `model` lauke.

`GET /api/modality-bridge/stats` (su valdymo autentifikavimu, tokio paties lygio kaip
`GET /api/settings`) grąžina atmintyje laikomus kiekvienos modalumo rūšies skaitiklius
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }`, skirtus `vision`, `audio` ir
`video`. `averageLatencyMs` vardikliu naudoja `latencySamples`, o ne visus bandymus;
operacija be trukmės matavimo nesukuria fiktyvaus nulio milisekundžių
ėminio. `bridged` išlieka su ankstesnėmis versijomis suderinamas sėkmingų
konvertavimų pseudonimas; nesėkmingi bandymai jo nepadidina.
Pagal numatytą veikimą skaitikliai nustatomi iš naujo paleidus procesą
(tai telemetrija, o ne apskaita).

#### Ataskaitų srities konfigūracija

Specialus ataskaitų srities puslapis yra
`/dashboard/settings/modality-bridge`. Jo per URL pasiekiami skirtukai `Vision`, `Audio`
ir `Video`, perjungiant `tab` reikšmę, išsaugo užklausos parametrus.
Skirtuke „Vision“ galima valdyti įjungimą, režimą, modelio pasirinkimą (įskaitant
automatinę numatytąją parinktį), nuo užduoties priklausantį raginimą, išplėstinius
skirtojo laiko, vaizdo, aprašo ilgio ir podėlio apribojimus, vykdymo
skaitiklius bei apsaugotą pavyzdinę užklausą. Skirtukas „Audio“ taip pat veikia:
jame galima valdyti įjungimą, tik STT skirtą modelio parinkiklį su automatine
parinktimi, skirtojo laiko ir didžiausios įrašo trukmės apribojimus, garso
skaitiklius bei `input_audio` pavyzdinį testą. Skirtukas „Video“ veikia: jame rodoma
FFmpeg/ffprobe vykdymo aplinkos būsena — viena iš keturių aiškiai apibrėžtų
naudotojo sąsajos būsenų (`unknown`, kol tikrinimas vykdomas arba jo nepavyko
užbaigti, `restricted`, kai ataskaitų srities prieglobos serveris nėra grįžtamojo
ryšio adreso ir tikrinimas praleidžiamas kliento pusėje, `unavailable`, kai
patikrinus patvirtinama, kad priemonių nėra, arba `available`, kartu pateikiant
FFmpeg/ffprobe versijas), — išsaugomi įjungimo, modelio, kadrų, vaizdo įrašo ir
skirtojo laiko apribojimai, modelio parinkiklis filtruojamas paliekant vaizdus
palaikančius modelius ir pateikiami vaizdo įrašų skaitikliai.

Ankstesnė „Vision Bridge“ kortelė DI nustatymuose dabar yra suderinamumo nuoroda
į naująjį puslapį; joje nebelaikoma antra formos kopija. Skiltyje „Media Providers“
darbo eigos „Image-to-Text“ ir „Speech-to-Text“ taip pat susiejamos su atitinkamais
„Modality Bridge“ skirtukais, nepašalinant esamos „Speech-to-Text“ bandymų aplinkos.

**Savikilpos priėmimo tikrinimo apėjimas:** kai aprašymo iškvieta nukreipiama per
paties OmniRoute `/v1` savikilpą (nestandartinis teikėjo modelis), papildomoji
užklausa siunčia `x-omniroute-admission-bypass: internal` ir autentifikuojama
naudojant nustatytus savikilpos prisijungimo duomenis — vietinį `sk_omniroute`
žymeklį vietiniu režimu arba operatoriaus sukonfigūruotą
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` aplinkos raktą (#1350), kad
diegimai su `REQUIRE_API_KEY=true` vis tiek galėtų vykdyti aprašymo iškvietą.
Apėjimas leidžiamas tik su tais tiksliais prisijungimo duomenimis, todėl išoriniai
klientai negali naudoti šios antraštės priėmimo tikrinimui praleisti.

Senosios numatytosios reikšmės yra faile `src/shared/constants/visionBridgeDefaults.ts`;
naujosios režimo, nuo užduoties priklausymo ir podėlio numatytosios reikšmės bei
nustatymų sprendiklis yra faile
`src/shared/constants/modalityBridgeDefaults.ts`. Apsaugos mechanizmas pateikia
`deps` konstruktoriaus parinktį, kad testai galėtų įterpti netikras `getSettings`
ir `callVisionModel` realizacijas.

### Garso tiltas (`audioBridge.ts`) — „Modality Bridge“ PR-3

Perima pokalbių užklausas su garsu prieš joms pasiekiant paskirties vietą, apie
kurią nežinoma, kad ji priima garso įvestį. Pokalbio užklausa niekada
neperadresuojama: garso dalys transkribuojamos per esamą su OpenAI suderinamą
kelių dalių galinį tašką, o pasirinktas pokalbio modelis toliau dirba su
tekstinėmis transkripcijomis.

Eiga:

1. Nustatyti `supportsAudio` naudojant `getResolvedModelCapabilities()`. Pirmenybė
   teikiama aiškiai apibrėžtiems teikėjų registro metaduomenims, tada statiniams
   modelio metaduomenims, o galiausiai sinchronizuotam `modalities_input`.
   Deklaruotas įvesties sąrašas be `audio` reiškia `false`; jei nėra jokių
   galimybes patvirtinančių duomenų, reikšmė lieka `null`. Tiek `false`, tiek
   `null` suaktyvina konservatyvų tiltą, o `true` leidžia jį apeiti.
2. Nustatyti `modalityBridgeAudio*` nuostatas ir iš kiekvieno pranešimo išskirti
   pakeičiamas aukščiausio lygio garso dalis naudojant bendrą `detectMediaParts()`
   detektorių. Palaikomi perdavimo formatai yra OpenAI `input_audio`, `audio_url`
   ir `source.media_type: "audio/*"`. Įdėtinis garsas aptinkamas maršrutizavimui,
   tačiau nepašalinamas pakeitimo keliu. Apdorojamų elementų kiekį riboja
   `modalityBridgeAudioMaxClips`; vėlesnės dalys lieka nepakeistos.
3. Naudoti sukonfigūruotą `provider/model` arba leisti `selectAudioBridgeModel()`
   pereiti per `AUDIO_TRANSCRIPTION_PROVIDERS` stabilia katalogo tvarka ir
   pasirinkti pirmą modelį, turintį tinkamus aktyvaus teikėjo prisijungimo
   duomenis.
4. `callAudioTranscription()` konvertuoja base64/data-URI garsą į kelių dalių
   `file` arba atsisiunčia nuotolinį `audio_url` per tik viešiesiems adresams
   skirtą išeinančių užklausų apsaugą, naudodamas DNS susiejimą ir 25 MB ribą.
   Tada failas ir pasirinktas modelis POST metodu siunčiami į vietinę
   `/v1/audio/transcriptions` savikilpą, autentifikuojant per
   `resolveSelfLoopBearer()`. Esamas transkripcijos maršrutas atlieka įprastą
   prisijungimo duomenų paiešką, laikinojo pristabdymo ir spartos ribojimo
   tvarkymą bei persiunčia užklausą teikėjui.
5. Sėkmingos iškvietos pakeičia atitinkamas dalis į
   `[Audio N]: <transcript>`. Iškvietos vykdomos naudojant `Promise.allSettled`:
   pavienė klaida išsaugo pradinę garso dalį (#4012 sutartis). Jei visos iškvietos
   nepavyksta ir įrodyta, kad paskirties vietoje `supportsAudio === false`, dalys
   pakeičiamos į `[Audio N]: (unavailable — no STT provider connected)`
   (#8430 sutartis). Jei paskirties vieta nežinoma (`null`), po visų iškvietų
   nesėkmės turinys lieka nepakeistas. Įrodytai tik tekstą palaikanti paskirties
   vieta, kuriai nėra tinkamų STT prisijungimo duomenų, gauna tą patį aiškų
   pakaitinį tekstą neatliekant tinklo iškvietos.

Sėkmingos transkripcijos naudoja visame procese bendrą „Modality Bridge“ LRU/TTL
podėlį. Raktas sudaromas iš garso nuorodos, stabilios `audio-transcription`
operacijos žymos ir pasirinkto STT modelio; nesėkmės niekada neįrašomos į podėlį.
Garso apdorojimo bandymai atnaujina bendrus `bridged`, `cacheHits`, `failures` ir
`lastUsedAt` skaitiklius. Transformuoti atsakymai turi antraštę
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nepakeistos
užklausos negauna „Audio Bridge“ segmento.

Vykdymo nuostatos saugomos DB ir tikrinamos naudojant Zod:

| Raktas                        | Numatytoji reikšmė | Diapazonas              |
| ----------------------------- | ------------------ | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`             | —                       |
| `modalityBridgeAudioModel`    | `""`               | Automatinis arba STT ID |
| `modalityBridgeAudioTimeout`  | `60000`            | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`                | 1–10                    |

Bendroji podėlio atmintinė ir toliau valdoma naudojant `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ir `modalityBridgeCacheMaxEntries`.

### Vaizdo tiltas (`videoBridge.ts`, `videoBridgePipeline.ts`)

Perima aukščiausiojo lygmens vaizdo dalis iš Chat Completions `messages` ir Responses
API `input` prieš iškviečiant tikslą, kuris neturi žinomo savarankiško vaizdo palaikymo.
Palaikomi formatai: `input_video`, `video_url`, `video_source`, HTTPS URL
ir `data:video/*;base64,...` duomenų URI. Paprasti failų pavadinimai tekste nelaikomi
vaizdo įrašais.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) valdo užklausos perėjimą,
galimybių / politikos patikrą, agregavimą kiekvienai užklausai ir atsakymo naudingąją apkrovą.
Kiekvieno vaizdo įrašo apdorojimas — gavimas, viso rezultato podėlis, kadrų
sekos aprašymas (į kurį įtraukiama bet kokia iškvietėjo pateikta garso transkripcija)
ir kiekvieno bandymo metrika / nutraukimas / išvalymas — yra paslėptas už
`processVideoPart`, esančio `videoBridgePipeline.ts`, ir iškviečiamas po vieną kartą
kiekvienai vaizdo daliai `preCall` cikle. Šis modulis taip pat apibrėžia aiškias
prievadų ribas: `VideoMediaBrokerPort` (baitų gavimas ir atrinktų kadrų išgavimas),
`VideoAudioTranscriptionPort` (iškvietėjo pateiktos garso transkripcijos sujungimas
su atrinktų kadrų antraštėmis) ir `VideoDrilldownPort` (išsamaus kadrų nagrinėjimo
išsaugojimo riba; ji dar neprijungta prie `processVideoPart` — šiuo metu išsamaus
nagrinėjimo įrašus rašo tik atskiras `/api/modality-bridge/video/drilldown`
maršrutas).

Viešasis `/v1` užklausos kelias niekada neimportuoja ir nepaleidžia poprocesio.
Nuotoliniai vaizdo įrašai atsisiunčiami taikant 50 MiB ribą; įterptiesiems base64
vaizdo įrašams taikoma konservatyvi 36 MiB dekoduoto turinio riba vienam vaizdo
įrašui, kad modelio / pranešimų / kadravimo apvalkalas neviršytų viešųjų JSON
užklausų priėmimo 50 MiB ribos. Įterptojo turinio ilgis ir įvertintas dekoduotas
dydis patikrinami prieš atminties paskyrimą. HTTPS privalomas pradiniam nuotoliniam
URL ir kiekvienam peradresavimui, naudojant esamą tik viešiesiems adresams skirtą
išeinančio ryšio apsaugą su DNS susiejimu. Tada baitai perduodami per tikslią vidinę
`POST /api/modality-bridge/video/extract` tarpininko ribą. Šis maršrutas yra ir
`LOCAL_ONLY`, ir `SPAWN_CAPABLE`, priima tik kiekvienam procesui autentifikuotą,
patikimą vietinio grįžtamojo ryšio užklausą ir niekada nepriima URL, failų sistemos
kelio, vykdomojo failo ar argumentų sąrašo. API užklausos turinio dydžio apdorojimo
grandinė ir apdorojimo programos laipsniškas turinio skaitytuvas nepriklausomai
užtikrina 50 MiB tarpininko įvesties ribą. Jo apribota eilė vienu metu vykdo vieną
išgavimo operaciją, leidžia keturias laukiančias užduotis ir riboja laukiančią
įvestį iki 100 MiB.

Tarpininko viduje `ffprobe` skaito privatų vietinį failą; fiksuotame formatų
leidžiamajame sąraše nėra grojaraščių ir manifestų formatų. Leidžiamuose MOV šeimos
konteineriuose išorinės MOV duomenų nuorodos pagal numatytąsias nuostatas lieka
išjungtos, o fiksuota komanda jų neįjungia. Ir `ffprobe`, ir `ffmpeg` naudoja tik
`file` protokolą leidžiantį sąrašą, vieną giją, fiksuotus argumentų masyvus, jokio
komandų apvalkalo, o vykdomieji failai nustatomi iš `PATH`. Pridėtų paveikslėlių
viršelių srautai nelaikomi atkūrimo kandidatais. Visi atkuriami srautai turi atitikti
ribas, o prieš deterministinį mažiausio indekso atsarginį variantą pirmenybė teikiama
aiškiai nurodytam numatytajam srautui. Vaizdo įrašų trukmė ribojama iki 600 sekundžių,
kiekvienas matmuo — iki 8 192 pikselių, o šaltinio dydis — iki 33 554 432 pikselių.
FFmpeg atrenka 1–16 vidurio taškuose esančių JPEG kadrų, sumažina ilgesniąją kraštinę
iki ne daugiau kaip 1 024 pikselių, nedidindama mažesnių įvesčių, ir niekada negauna
URL. Pagal numatytąsias nuostatas atrankai naudojama `uniform` politika. Pasirinktinės
`scene_aware` ir eksperimentinė `segment_aware` politikos atlieka vieną papildomą
fiksuotą FFmpeg perėjimą per jau patikrintą vietinį srautą, parenka apribotas
`showinfo` scenų laiko žymas ir, jei aptiktuvas sugenda, baigiasi skirtasis laikas,
gaunama netinkamai suformuota išvestis arba kandidatų rinkinys yra tuščias,
deterministiškai grįžta prie tų pačių tolygiai paskirstytų vidurio taškų. Segmentus
įvertinantis režimas paskirsto vidurio taškų pavyzdžius proporcingai patikrintiems
scenų intervalams; segmentus įvertinantys duomenys ir atsarginio veikimo elgsena
išsamiai aprašyti toliau. Griežta 16 kadrų riba
kiekvienoje politikoje taikoma po atrankos. Kai scenas įvertinančiai užklausai
skiriamas tik vieno kadro limitas, naudojamas aktyvaus viso vaizdo įrašo arba
fokusavimo lango tolygus vidurio taškas ir pateikiama `policyEffective: uniform`:
vienas pasirinktas scenos kadras negali išsaugoti abiejų laiko intervalo galų.
Iškvietėjas gali pasirinktinai pateikti baigtinį fokusavimo langą (`start`/`end`
sekundėmis); ribos apribojamos pagal medijos trukmę, atvirkštiniai arba nebaigtiniai
langai atmetami, o visos atrankos politikos taikomos tik normalizuotame intervale.
Gautas langas įtraukiamas į atrankos metaduomenis ir į nepatikimo aprašo priešdėlį,
kad tolesni modeliai galėtų atskirti fokusuotą ištrauką nuo visos laiko juostos.

Semantinis antraščių fokusavimas yra atskira, aiški nuostata. Numatytasis `full`
analizės režimas išsaugo esamą kadrų raginimą ir niekada neperduoda užklausos teksto
antraščių modeliui. `focused` režimu tiltas iš to paties Chat arba Responses
konteinerio skaito tik naujausią netuščią naudotojo sukurtą `text`/`input_text`,
normalizuoja jį į NFC, sutraukia valdymo simbolius ir tarpus bei apriboja iki
500 Unicode kodo taškų. Jei rezultatas tuščias, tiksliai grįžtama prie `full`
raginimo. Tinkama užuomina serializuojama kaip JSON specialiame nepatikimo naudotojo
konteksto bloke ir gali tik suteikti pirmenybę stebimoms detalėms; ji negali
pakeisti atskiro įspėjimo nevykdyti medijoje matomų ar girdimų instrukcijų. Tekstinis
fokusavimas niekada nenustato `start`/`end` ir nekeičia laikinės atrankos mechanizmo.

#### FU-07 struktūriniai segmentų duomenys

`segment_aware` naudoja vieną apribotą išankstinės analizės etapą jau patikrintam
vietiniam vaizdo įrašo srautui. Fiksuota filtrų grandinė pirmiausia sumažina plotį
iki daugiausia 320 pikselių, aptinka scenų pasikeitimus ir sustingusius intervalus,
tada ima po 1 kadrą per sekundę suliejimui, vidutiniam skaisčiui ir
erdvinei / laiko informacijai įvertinti. Etapas apribotas iki 600 struktūrinių
mėginių, vienos FFmpeg / filtro gijos, tų pačių tik `file` protokolui ir konteineriams
taikomų leidžiamųjų sąrašų, 1 MiB proceso išvesties ribos ir ne daugiau kaip
30 sekundžių tarpininko bendroje nutraukimo / galutinio termino riboje. Jis niekada
nepriima komandos, filtro, kelio ar URL iš užklausos.

Struktūrinės reikšmės yra deterministiniai atrankos įrodymai, o ne semantinis
vaizdo įrašo supratimas. Pagal jas nenustatomi objektai, veiksmai, subtitrai,
kalba ar naudotojo ketinimai. Scenų ir sustingimų ribos sudaro segmentus;
sustingimo aprėptis, suliejimas, ekspozicija, erdvinis detalumas ir pokyčiai laike
tik veikia esamo 1–16 kadrų biudžeto paskirstymą. Visiškai sustingusiam segmentui
skiriamas daugiausia vienas kadras, o nesustingę segmentai varžosi dėl likusio
biudžeto. Kai ribų yra daugiau nei kadrų, išlaikoma tolygi laiko juostos aprėptis,
kad spartūs ankstyvieji perėjimai negalėtų paslėpti ilgo baigiamojo segmento.
Scenų ribos, nuo sustingimo ribos nutolusios ne daugiau nei 1 sekundės analizės
skiriamąja geba, sujungiamos.

Jei trūksta filtrų, įrodymai yra netinkamo formato ar tušti, įvyksta detektoriaus
klaida arba baigiasi apribotai išankstinei analizei skirtas laikas, pereinama prie
visiškai tokios pačios tolygaus vidurio taško strategijos. Skambinančiosios šalies
nutraukimas arba tarpininko galutinis terminas tokio perėjimo nesukelia: vykdomas
antrinis procesas nutraukiamas, neleidžiama vėliau išgauti kadrų, o privatus
laikinasis medis pašalinamas bloke `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuoja deterministinius tikrus FFmpeg
bandymo duomenis, skirtus įvertinti subtitravimo iškvietimų sumažėjimą pašalinus
dublikatus, tankaus judėjimo biudžeto paskirstymą, suliejimo / ekspozicijos / SI-TI
įrodymus, sparčius perėjimus su ilga pabaiga ir klaidingus teigiamus rezultatus
esant laipsniškam išblukimui. Jis registruoja išankstinės analizės realųjį laiką ir,
kai pasiekiama `/usr/bin/time`, antrinio proceso CPU laiką bei didžiausią RSS.
Jo kokybės patikros yra tik struktūriniai etalonai. Tikro subtitravimo modelio
kokybės būsena lieka `HOLD`, nes ši bandymų sistema neturi įgalioto galinio taško
ar fiksuoto vertintojo. Piniginio sutaupymo būsena taip pat lieka `HOLD`, nebent
`--caption-cost-per-call-usd` nurodo aiškų teigiamą vieno iškvietimo kainos
įvertį; scenarijus niekada neišgalvoja nė vieno iš šių rezultatų.

Kiekvienas kadras apribotas iki 4 MiB, visi neapdoroti kadrai kartu – iki 23 MiB,
o serializuotas tarpininko atsakymas – iki 32 MiB. Privatus laikinasis katalogas
pašalinamas bloke `finally`. OmniRoute nepateikia FFmpeg ir nepriima pasirinktinio
vykdomojo failo kelio. Prieš subtitruodamas tarpinis modulis atlieka konservatyvų
vizualinių dublikatų šalinimo etapą: kiekvienas JPEG sumažinamas iki 16×16 pilkio
atspalvių buferio ir lyginamas tik su paskutiniu paliktu kadru. Kai prašomas
subtitravimo biudžetas yra didesnis nei vienas kadras, išgavimo procesas pateikia
apribotą kandidatų rinkinį, ne daugiau kaip dvigubai didesnį už tą biudžetą ir
niekada neviršijantį 16 kadrų. Prašoma viršutinė riba pritaikoma tik pašalinus
dublikatus, o kai biudžetas yra bent du kadrai, galutinio retinimo metu išsaugomi
pirmasis ir paskutinis atrinkti kandidatai. Versijuota
`grayscale-16x16-mean-cells-v2` strategija naudoja didesnę iš šių reikšmių:
vidutinį skaisčio pokytį arba miniatiūros langelių, kurių normalizuotas pokytis
yra bent 0.05, santykį. Dublikatų slenkstis yra konstanta 0.04, pasirinkta dėl
nuspėjamumo, užuot pateikus ją kaip vykdymo meto nustatymą. Šis papildomas didelio
kontrasto signalas išsaugo nedidelius judesius ir matomo teksto pokyčius, kuriuos
gali paslėpti vien vidurkiu pagrįstas palyginimas. Įvykus lygintuvo ar dekoderio
klaidai, paliekama visa aprėptis. Išvesties metaduomenyse atskiriami išgauti
kandidatai, sėkmingai panaudoti kadrai ir pašalinti vizualiniai dublikatai.

Aiškiai pažymėtoje vaizdo įrašo dalyje galima prašyti kontaktinio lapo su laiko
žymomis. Tarpinis modulis sukuria daugiausia 4 stulpelių ir 16 kadrų JPEG tinklelį.
Kiekviename 512 pikselių langelyje šaltinio laiko žyma įrašoma į didelio kontrasto
apatinę juostą, o tos pačios laiko žymos paliekamos tekstiniuose metaduomenyse,
kad jas būtų galima susieti ir audituoti vėlesniuose etapuose. Visam JPEG toliau
taikoma 32 MiB riba. Jei `sharp` negali dekoduoti arba sudaryti tinklelio,
tarpinis modulis grįžta prie atskirų JPEG kadrų; kliento nutraukimas vis tiek
perduodamas kontaktinio lapo operacijai.

Paaukštinimo įrodymai sąmoningai atskirti nuo sintetinio komponavimo
mikrotesto. `scripts/perf/video-bridge-contact-sheet-eval.ts` apibrėžia pagal
schemos versiją valdomą A/B bandymų sistemą tikriems su OpenAI suderinamiems
regos modeliams. Ji matuoja paslaugos teikėjo nurodytus žetonus, viso proceso
realųjį delsos laiką (įskaitant kontaktinio lapo komponavimą), modelio iškvietimų
skaičių ir manifeste apibrėžtų faktų išlaikymą. Neapdoroti modelio atsakymai į
ataskaitą neįrašomi; išsaugomos tik SHA-256 santraukos ir atitikusių faktų ID.
Bandymų sistema neatlieka jokių tinklo ar mokamų modelio iškvietimų, nebent
perduodamas `--execute-real` ir sukonfigūruoti `--model`, `OMNIROUTE_BASE_URL`
bei `OMNIROUTE_API_KEY`. Be tokio aiškiai nurodyto tikro vykdymo jos mašininio
nuskaitymo verdiktas lieka `HOLD`; vien sintetiniai naudingosios apkrovos /
iškvietimų skaičiaus matavimai nėra paaukštinimo įrodymai.

Skambinančiosios šalys prie palaikomos vaizdo įrašo dalies gali pridėti
pasirinktinį `transcript.cues` masyvą, kai jau turi su laiku suderintą tekstą.
Kiekviename fragmente turi būti `text`, baigtinis `start` / `end` intervalas
patikrintos trukmės ribose ir į leidžiamąjį sąrašą įtrauktas `source` (`client`,
`embedded` arba `audio-bridge`); numatytoji `confidence` reikšmė yra `1`, ir ji
turi likti nuo `0` iki `1`. Visiškai vienodi fragmentai sujungiami. OmniRoute
niekada nepradeda transkribavimo pagal šiuos metaduomenis: patikrinti fragmentai
su šaltiniu, patikimumu ir intervalu nukopijuojami į aprašytą rezultatą ir kartu
su kadrų subtitrais pateikiami kaip nepatikimi stebėjimai. Netinkamas, už
diapazono ribų esantis arba kilmės neturintis tekstas atmetamas, užuot jį
įmaišius į subtitrų srautą. Abu užklausos turinio transkripcijos kanalai
normalizuoja pateiktą kilmę į `client`, įskaitant savarankiškai nurodytas
`embedded` ar `audio-bridge` žymas. Tik serverio valdomas adapteris gali priskirti
šias patikimas žymas per tik kode naudojamą `trustedSource` argumentą; užklausos
JSON laukas negali pasiekti šio argumento. Transkripcijos tekstas, nepaisant jo
kilmės, lieka nepatikimu iš medijos išvestu turiniu ir niekada negali lemti
įgaliojimo.

Patyręs iškvietėjas tam pačiam vaizdo įrašui gali pateikti `audioTranscript`
takelį; jis laikomas kliento pateiktu tekstu, o ne serverio atliktos transkripcijos
įrodymu. Suliejimo sandūra apdoroja vaizdo ir garso stebėjimus taikydama vieną
terminą bei nutraukimo signalą, išrikiuoja juos bendroje laiko juostoje, sutraukia
visiškai vienodus dublikatus ir pateikia dalinį rezultatą, kai pavyksta tik viena
šaka. Netinkamas `audioTranscript` lemia tokį dalinį rezultatą — vaizdo aprašas
išsaugomas, o garso šakoje įrašomas išvalytas klaidos kodas — užuot nutraukus viso
vaizdo įrašo apdorojimą. Kiekvienos šakos pasiekiamumas, dalinio rezultato žyma
ir išvalyti klaidų kodai išsaugomi aprašytame rezultate, apsaugos mechanizmo
metaduomenyse (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), rezultatų podėlio metaduomenyse ir tilto
suliejimo skaitikliuose. Numatytasis Video Bridge kelias nekviečia kalbos vertimo
į tekstą ir neatsisiunčia antros medijos kopijos; be aiškiai pateikto takelio jis
ir toliau apdoroja tik vaizdą.

**Transkripcijos išsaugojimas (#12150 P1).** Tai automatiškai taikoma kiekvieną
kartą, kai Video Bridge (kurį patį reikia aiškiai įjungti) atvaizduoja
transkripcijos įrašą — atskiros išsaugojimo žymos nėra. Kai užklausa atvaizduoja
bet kokį transkripcijos įrašą (iškvietėjo deklaruotą `transcript` arba sulietą
`audioTranscript`), apsaugos mechanizmas pažymi ją kaip
`videoBridgeObserved` ir sukuria užmaskuotą vaizdo aprašo šešėlinę kopiją —
identišką atvaizdavimą, kuriame kiekvieno įrašo laisvos formos teksto turinys
pakeičiamas į `[redacted-video-transcript]`, struktūrinį įrašo lauką pakeičiant
prieš sudarant eilutę (niekada neanalizuojant sujungto teksto, todėl joks įrašo
turinys — nei priešiškas, nei įprastas, įskaitant tekstą su `]`, pvz.,
`[inaudible]`/`[music]` — negali išlikti). Išsaugotame iškvietimo žurnalo
užklausos turinyje kiekviena iš vaizdo išvesta teksto dalis pakeičiama ta
užmaskuota šešėline kopija, ją susiejant pagal turinio lygybę; `fullText`
atskaitos reikšmė iš naujo nuskaitoma iš užbaigtos prieš iškvietimą taikomo
apsaugos mechanizmo naudingosios apkrovos, todėl atitiktis išlieka ir vėlesniems
grandinės apsaugos mechanizmams (asmens duomenų ir prisijungimo duomenų
maskuokliams, kurių prioritetai yra 10/95) vietoje perrašius aprašo tekstą, ir
sistemos raginimo, perdavimo bei atminties įterpimui pakeitus pranešimų masyvo
struktūrą. Modeliui išsiunčiamas turinys nepakeičiamas. Stebima užklausa taip pat
nepapildo ilgalaikės Memory (praleidžiamas išgavimas tiek iš užklausos, tiek iš
atsakymo), todėl paties modelio atsakymas negali atkartoti transkripcijos teksto
į Memory.

**Neapdoroti vaizdo įrašo laukai (#12430).** Kai tiltas įjungtas, o savasis vaizdo įrašų palaikymas nežinomas arba jo nėra, apibrėžti `transcript`/`audioTranscript` laukai taip pat aktyvuoja `videoBridgeObserved`, net ir nepavykus sukurti aprašo arba pasiekus `maxVideos` ribą. `null` ir tuščios eilutės įskaitomos; nesantys laukai ir ne vaizdo įrašo metaduomenys — ne. Išsaugotose kopijose šie laukai užmaskuojami arba užklausa praleidžiama, o podėliai ir Memory apeinami.

Šiuose atsarginiuose keliuose tinkami iškvietėjo įrašai tampa palaikomomis
`text`/`input_text` dalimis, o ne nestandartiniais teikėjo laukais. Abu su
užklausa pateikti takeliai išlieka nepatikimais `client` stebėjimais ir turi
aiškų įspėjimą, kad vaizdo įrašas nebuvo aprašytas, o laiko žymos nebuvo
patikrintos pagal mediją. Esami 256 įrašų / 64 KiB bendrieji ir kiekvienam įrašui
taikomi biudžetai bendrai taikomi abiem takeliams; laiko žymos turi tilpti į
tarpininko 600 sekundžių ribą ir bet kokį pateiktą fokusavimo langą. Netinkami
takeliai atmetami, o ne persiunčiami kaip savavališkas tekstas; tinkamas
lygiagretus takelis vis tiek gali būti naudojamas, nebent viršijamas bendras jų
biudžetas. `null` ir tušti laukai neprideda teksto. Šis atsarginis kelias
neprideda medijos gavimo ar transkripcijos. Transkripcijos plėtinių laukai
pašalinami iš atsarginio vaizdo įrašo konteinerio ir jo `video_url`/`source`
objektų. OpenAI perdavimo leidžiamų laukų sąrašas išlieka griežtas; nežinomą
savąjį palaikymą turintys vaizdo įrašų konteineriai lieka prieinami, o žinomos
tik tekstą palaikančios paskirties sistemos išlaiko saugias žymas.
Struktūrinės užmaskuotos šešėlinės kopijos apsaugo pridėtą transkripcijos tekstą,
o originali iškvietėjui priklausanti užklausa lieka nepakeista. Savąjį palaikymą
turinčios paskirties sistemos ir išjungti tiltai išlaiko esamą apėjimo veikseną.

Papildomoms išsaugotoms kopijoms naudojamas tas pats stebimos užklausos signalas.
Neapdorotas kliento užklausos momentinis atvaizdas prieš apsaugos mechanizmo
taikymą, atmintyje laikoma laukianti užklausa ir anksti atmestos užklausos žurnalas
struktūriškai pakeičia transkripcijos laukus vaizdo įrašo dalyse; konvejerio etapų
ir konteksto perdavimo sugeneruoti eilučių raginimai užmaskuojami išsaugomo
užklausos turinio galiniame taške. Išsaugota `video_content_removed` žyma
užtikrina, kad `previous_response_id` tęsinys būtų saugiai atmestas, užuot
atkūrus tekstą, kuris buvo tyčia pašalintas. Jei prieš registravimą stebima
užklausa praranda konkrečiai daliai skirtą užmaskuotą šešėlinę kopiją arba po
vėlesnių užklausos pakeitimų nepavyksta susieti bent vienos iš kelių vaizdo įrašo
šešėlinių kopijų, išsaugomas užklausos turinys visiškai praleidžiamas, užuot
išsaugojus tik iš dalies užmaskuotą transkripciją.

Stebimos užklausos atveju modelio atsakymas gali pacituoti bet kurią
transkripcijos dalį be struktūrinės įrašo ribos. Todėl jo išsaugoto iškvietimo
žurnalo `responseBody` pakeičiamas praleidimo žyma; išsamus konvejerio artefaktas
(kuriame gali būti tiekėjo ir kliento turiniai bei srauto fragmentai)
neišsaugomas. Semantiniai, idempotentiškumo ir samprotavimo atkūrimo podėliai
apeina tos užklausos skaitymus ir įrašymus. Teikėjui siunčiama užklausa ir klientui
matomas atsakymas lieka nepakeisti. Ankstyvieji ryšio palaikymo baitai pašalinami
iš laikinojo buferio, kai išsamus artefaktas praleidžiamas. Kiro įspėjimas apie
netinkamai suformuotą EventStream nurodo tik naudingosios apkrovos baitų skaičių,
bet niekada ne jos turinį ar neapdorotą JSON analizatoriaus klaidą.
Tai nereiškia, kad buvo patikrinta kiekviena nesusijusi teikėjo ar papildinio
diagnostika; platesnė išsaugomų galinių taškų peržiūra stebima užduotyje #11658.

Vidinis `/api/modality-bridge/video/drilldown` gyvavimo ciklas yra atskiras,
grįžtamojo ryšio / prieigos rakto autentifikavimą naudojantis podėlio pagrindas. Kiekvienai operacijai taip pat būtinas
kanoninis neskaidrus pagrindinio subjekto ID. Prieš įgalinant produkcinį kvietėją, jis turi
išvesti šį ID iš autentifikuoto nuomininko ir niekada nepersiųsti
kliento pasirinktos reikšmės. Podėlio raktai susieja šį pagrindinį subjektą su kanoniniais seanso ir
vaizdo įrašo nuorodos ID, saugo tik jų iš SHA-256 išvestus raktus ir apriboja tiek skaitymą,
tiek šalinimą tuo pačiu pagrindiniu subjektu. Kiekviename podėlio įraše saugoma ne daugiau kaip 16 išvestinių JPEG
kadrų, jie nustoja galioti po dešimties minučių, taip pat palaikomas apribotas
`start`/`end` skaitymas arba aiškus seanso pašalinimas.

Kiekvienam pagrindiniam subjektui leidžiama ne daugiau kaip 16 įrašų ir 64 MiB kanoninių JPEG duomenų. Šie
apribojimai nepriklauso nuo visuotinių 64 įrašų / 256 MiB ribų: pagrindinio subjekto kvotos
spaudimas pirmiausia pašalina tik to pagrindinio subjekto seniausiai naudotus įrašus, o tik tada
svarstomas visuotinis LRU pašalinimas. Pasibaigusio galiojimo įrašai, vykdant podėlio veiksmus, pašalinami tiek iš pagrindinio subjekto,
tiek iš visuotinės apskaitos, o atšaukimo ir patikros nesėkmės atveju
dalinis pakaitalas neįrašomas.

Podėlis atmeta nekanoninį Base64, perteklinį užpildymą, ne JPEG mediją, netinkamai suformuotus arba
trumpintus JPEG failus ir JPEG failus, dėl kurių per apribotą viso vaizdo `sharp`
dekodavimą pateikiamas įspėjimas. Kiekvienas priimtas vaizdas iš naujo užkoduojamas kaip kanoninis JPEG, o plotis ir aukštis
išvedami iš dekoduotų baitų, užuot pasitikėjus kvietėjo laukais; visi pabaigoje pridėti
poligloto baitai atmetami, o ne išsaugomi. Abiem kvotoms priskaičiuojamas tik apribotas kanoninis suglaudintas buferis.
JSON perdavimo riba apima Base64 pridėtines sąnaudas, taikomas 32 MiB
dekoduotos įvesties ribai. Kiekviename
išsaugotame išvedime įrašomas patikrintas JPEG formatas / skiriamoji geba, atrankos politika,
išvedimo versija, sukūrimo laikas, serverio apskaičiuota turinio maiša ir maišos pavidalo pirminė
nuoroda bei patikimo kvietėjo pateikta pirminio turinio maiša. Atšaukimas tikrinamas
tarp asinchroninių dekodavimo / maišos skaičiavimo etapų, prieš atominį įrašymą į podėlį.

Ši dalis dar nesujungia produkcinio šaltinio su maršrutu ir
nesuteikia kelių skiriamųjų gebų variantų pasirinkimo. Todėl skaidrus Video Bridge užklausų
kelias neatlieka jokio papildomo darbo, o su nuomininku susieto pagrindinio subjekto išvedimas ir
visas FU-08 kelių skiriamųjų gebų gyvavimo ciklas lieka aiškiai apibrėžti kaip tolesni darbai,
o ne dokumentuojami kaip užbaigta elgsena.

Kadrai nuosekliai aprašomi naudojant sukonfigūruotą Video modelį. Tuščia
Video perraša paveldi Vision nustatymą; jei abu tušti, Vision
automatinis maršruto parinktuvas pasirenka tinkamą vaizdo apdorojimą palaikantį modelį. Sėkmingi aprašai
pakeičia pradinę dalį stabiliu `[Video description:` prefiksu, kuris taip pat
pažymi tekstą kaip nepatikimą, iš medijos išvestą stebėjimą ir nurodo tolesniems
modeliams nevykdyti medijoje rastų instrukcijų. Kadrų aprašų podėlio raktai
apima JPEG baitus, raginimą, laiko žymą ir faktinį modelį; podėlyje saugomi tik sėkmingi
aprašai. Podėlio įrašuose išlaikomas faktinis sėkmingai rezultatą sukūręs modelis,
įskaitant atsarginį modelį; kai skirtingus kadrus sukūrė skirtingi modeliai,
tiltas pateikia `mixed`. Įvykus podėlio atitikčiai, pakartotinai naudojama to rezultatą sukūrusio modelio tapatybė,
užuot ją pervadinus pagal prašomą maršruto parinkimo planą. Viso vaizdo įrašo rezultatų
podėlio raktas sudaromas iš kiekvienos išvestį keičiančios įvesties — raginimo, faktinio
modelio, atrankos politikos, kadrų skaičiaus, semantinės analizės režimo, normalizuotos dėmesio užuominos SHA-256
piršto atspaudo, dėmesio lango, `transcript`,
`audioTranscript` ir kontaktų lapo žymos — todėl pakeitus bet kurį iš šių
aspektų podėlio atitiktis nerandama ir pasenęs rezultatas niekada pakartotinai nenaudojamas. Vaizdinio dublių šalinimo politikos
versija, slenkstis ir apribotas galimų kadrų skaičius taip pat aiškiai įtraukti į
rezultatų podėlio raktą ir metaduomenis; todėl pakeitus politiką negalima pakartotinai panaudoti pasenusio
viso vaizdo įrašo aprašo. Rezultatų podėlio v4 metaduomenyse išlaikomi režimas ir
piršto atspaudas, bet niekada neapdorota naudotojo užduotis. Apsaugos metaduomenys pateikia tiek
prašomą, tiek faktinį analizės režimą; prašomas `focused` režimas be
tinkamo naudotojo teksto pateikiamas kaip faktiškai `full`.

Apsaugos mechanizmas išskiria kiekvieną palaikomą vaizdo įrašo dalį, bet aprašo ne daugiau kaip
`modalityBridgeVideoMaxVideos`. Kai įrodyta, kad paskirties vietoje
`supportsVideo === false`, nepavykę ir ribą viršijantys vaizdo įrašai paverčiami aiškiais saugiais
teksto žymekliais, kad neišliktų joks neapdorotas vaizdo įrašas. Kai galimybė nežinoma, tos dalys
išlaiko savo vaizdo įrašo nešiklį; bet kokia atsarginė transkripcija apdorojama pagal pirmiau aprašytą apribotą teksto
konvertavimą. Paskirties vietos, kuriose `supportsVideo === true`, apeina tiltą.
Kliento užklausos nutraukimo signalas perduodamas atsisiuntimui, tarpininko eilei,
poprocesiams ir aprašų kūrimo iškvietimams; nutraukus procesas sustoja tarp vaizdo įrašų ir niekada
neleidžia neapdorotai medijai praslysti dėl klaidos.

Vykdymo aplinkos nustatymai saugomi DB ir tikrinami naudojant Zod:

| Raktas                              | Numatytoji reikšmė | Diapazonas / veikimas                                                                                        |
| ----------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`            | Pasirenkama vykdymo aplinka, įjungiama naudotojo pasirinkimu                                                 |
| `modalityBridgeVideoAnalysisMode`   | `"full"`           | `full` išsaugo bendruosius aprašus; `focused` naudoja ribotą, nepatikimą naujausią naudotojo kontekstą       |
| `modalityBridgeVideoModel`          | `""`               | Paveldi „Vision Bridge“ modelį                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`                | 1–16                                                                                                         |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`        | `uniform`, `scene_aware` arba proporcinis `segment_aware`; aptiktuvo trikties atveju grįžtama prie `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`                | 1–4                                                                                                          |
| `modalityBridgeVideoTimeout`        | `120000`           | 1000–120000 ms                                                                                               |

Senosios išsaugotos vaizdo įrašų skirtojo laiko reikšmės, viršijančios 120 sekundžių, apribojamos iki
tarpininko galutinio termino; nauji nustatymų įrašymai, viršijantys šią ribą, atmetami.
`GET /api/modality-bridge/video/runtime` prieš autentifikavimą ar vykdymo aplinkos tikrinimą reikalauja patikimos, pažymėtos grįžtamojo ryšio
vietovės, o tada reikalauja valdymo
autentifikavimo. Jis grąžina tik `available`, išvalytas FFmpeg/ffprobe versijas ir fiksuotą
priežastį, kai vykdymo aplinka nepasiekiama. Vidinis išskleidimo galinis taškas nėra
vieša įkėlimo API: persipildžius eilei grąžinamas `503` kartu su `Retry-After`, skambintojui
atsijungus grąžinamas `499`, o pasiekus fiksuotą tarpininko galutinį terminą grąžinamas `504`. Konvertuoti atsakymai prie centrinės
`x-omniroute-modality-bridge` antraštės prideda
`video->text;model=<visionModel>;parts=<videos>`, nepašalindami „Vision“ ar „Audio“ segmentų.

### AII maskuoklis (`piiMasker.ts`)

Vykdomas **abiejuose** etapuose.

- **`preCall`** klonuoja naudingąją apkrovą, pereina per `system`, `messages`, `input` ir
  `prompt` (įskaitant paprastas eilučių reikšmes) ir eilutės tipo `content` / `text` laukams
  pritaiko `processPII()` (iš
  `@/shared/utils/inputSanitizer`). Kai
  `PII_REDACTION_ENABLED=true`, aptikta AII užmaskuojama siunčiamoje
  naudingojoje apkrovoje. Tai nepriklauso nuo `INPUT_SANITIZER_MODE` (kuris valdo tik
  raginimų įterpimo politiką). Kai maskavimas išjungtas, iškvietimas registruoja aptikimų
  skaičių nekeisdamas turinio.
- **`postCall`** giliai klonuoja atsakymą, paleidžia `sanitizePIIResponse()` ir
  „Responses API“ struktūros maskuoklį (`maskResponsesOutput` — apima
  `output_text` ir `output[].content[].text`). Jei atliekamas bent vienas maskavimas,
  pakeistas atsakymas pakeičia pradinį.

Apsaugos priemonė niekada neblokuoja; ji tik prideda anotacijas (`meta.detections`,
`meta.redacted`) arba perrašo.

### Raginimų įterpimas (`promptInjection.ts`)

Aptinka priešiškas struktūras naudotojo pateiktame turinyje ir taiko
sukonfigūruotą politiką. Veikimą lemia aplinkos kintamieji ir konstruktoriaus
parinktys:

| Nustatymas          | Aplinkos kintamasis                                                                                                         | Numatytoji reikšmė | Poveikis                                                                                                                                                                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Įjungta             | `INPUT_SANITIZER_ENABLED`                                                                                                   | `true`             | Kai `false`, apsaugos priemonė iš karto nutraukia vykdymą.                                                                                                                                    |
| Režimas             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                                             | `warn`             | Įterpimo politika: `block`, `warn` arba `log`. (`redact` priimamas dėl atgalinio suderinamumo, tačiau **nepašalina** įterpimo teksto; užklausos AII perrašymą valdo `PII_REDACTION_ENABLED`.) |
| Blokavimo slenkstis | `blockThreshold` parinktis / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alternatyvus pavadinimas `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`             | Mažiausias blokavimui būtinas griežtumo lygis. Esant numatytiesiems nustatymams, vidutinis lygis tik stebimas.                                                                                |

**Režimo pirmumas** (`getMode`): iškviečiančiojo `options.mode` →
`INJECTION_GUARD_MODE` **DB funkcijos vėliavėlės perrašymas** (Valdymo skydas → Nustatymai →
Funkcijų vėliavėlės) → `INJECTION_GUARD_MODE` aplinkos kintamasis → `INPUT_SANITIZER_MODE` aplinkos kintamasis →
`warn`. Todėl valdymo skydo perrašymas yra viršesnis už aplinkos kintamuosius, tad funkcijų
vėliavėlių naudotojo sąsaja valdo veikiančią apsaugą realiuoju laiku (nereikia paleisti iš naujo). DB nuskaitymas yra atsparus triktims:
jei įvyksta klaida, apsauga grįžta prie aplinkos kintamaisiais pagrįsto veikimo, o kai
perrašymas nenustatytas, veikimas yra toks pats kaip naudojant tik aplinkos kintamuosius.

Aptikimo šaltiniai:

1. `sanitizeRequest()` iš `@/shared/utils/inputSanitizer` (bendras aptiktuvų
   rinkinys, naudojamas kitose apdorojimo grandinės vietose).
2. Integruoti `DEFAULT_GUARD_PATTERNS` (šiuo metu `system_override_inline` ir
   `markdown_system_block`, abiejų griežtumo lygis yra `high`).
3. Pasirinktiniai `customPatterns`, perduoti per konstruktoriaus parinktis (eilutės, reguliarieji reiškiniai
   arba `{ name, pattern, severity }` įrašai).

Kai `mode === "block"` **ir** bent vienas aptikimas pasiekia pavojingumo
slenkstį, `preCall` grąžina `{ block: true, message: "Request rejected:
suspicious content detected" }`. `warn`/`log` režimais apsaugos mechanizmas registruoja įvykį, bet
leidžia vykdyti iškvietimą. Bendrinama pagalbinė funkcija `evaluatePromptInjection()` taip pat eksportuojama
iškvietėjams, kuriems reikia įvertinti užklausas nenaudojant registro.

**Nuskaitymo riba (v3.8.20):** detektorius tikrina tik **pirmuosius 16 KB**
sujungto užklausos teksto — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baitai) faile
`src/shared/utils/inputSanitizer.ts`. Tiek `detectInjection()`, tiek
`evaluatePromptInjection()` prieš vykdydamos šablonų ciklą pritaiko
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Įterpimo direktyvos paprastai yra netoli įvesties pradžios, todėl taip
apribojamas reguliariųjų išraiškų CPU / GC naudojimas kelių šimtų KB duomenų paketuose nesusilpninant aptikimo (žr.
#3932, #4041).

### Kredencialų maskavimo priemonė (`credentialMasker.ts`)

Vykdoma **abiejuose** etapuose, paskutinė numatytojoje grandinėje (prioritetas `95`). Iš siunčiamo duomenų paketo (pranešimo
turinio, įrankių iškvietimų argumentų, įrankių rezultatų) **ir** teikėjo atsakymo pašalina
gerai žinomus API raktų / slaptų prieigos raktų šablonus, kad į užklausą įklijuoti kredencialai (arba įrankio rezultato pakartoti kredencialai) nebūtų nutekinti
išoriniam teikėjui ar atgal klientui.

- **Tik pasirinktinai įjungiama**, laikantis tos pačios tvarkos kaip ir AID redagavimo atveju (greta Griežtos taisyklės #20):
  išjungta, nebent `settings.credentialRedactionEnabled === true` **arba**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kai ji išjungta, apsaugos mechanizmas neatlieka jokių veiksmų —
  jis niekada neblokuoja ir nieko neperrašo.
- `redactCredentials()` pereina visą duomenų paketo / atsakymo medį (`walkValue()`,
  saugiai nuo prototipo užteršimo, saugiai ciklų atžvilgiu naudojant `WeakSet`) ir pakeičia atitikmenis
  vietos žyma `[REDACTED:<type>]`, klonuodama tik tas šakas, kurios iš tikrųjų
  pasikeitė.
- `CREDENTIAL_PATTERNS` apima LLM teikėjų raktus (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS / SaaS prieigos raktus (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), mokėjimų raktus (Stripe, Square), debesijos
  raktus (AWS prieigos raktas, Twilio, SendGrid, Mailgun), privačiuosius raktus / JWT,
  ryšio eilutes su kredencialais (`mongodb://user:pass@...` ir pan.) ir
  bendrinį `Authorization`/`x-api-key`/`api-key`/`apikey` antraštės reikšmės
  šabloną. Į antraštes panašūs raktai (`authorization`, `x-api-key`, `api-key`,
  `apikey`) redaguojami struktūriškai (tik reikšmė, išsaugant schemos prefiksą, pvz.,
  `Bearer `/`Basic `), o ne naudojant bendrinę teksto reguliariąją išraišką.
- Apsaugos mechanizmas niekada neblokuoja; jis tik perrašo (`modifiedPayload` /
  `modifiedResponse`) ir prideda anotacijas (`meta.credentialsRedacted`, `meta.count`).

Regresijos apsauga: `tests/unit/credential-masker-guardrail.test.ts`.

## Bazinė sutartis (`base.ts`)

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
  block?: boolean; // true nutraukia grandinę
  message?: string; // pateikiamas blokuojant
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // grąžinamas iš preCall užklausai perrašyti
  modifiedResponse?: TValue; // grąžinamas iš postCall atsakymui perrašyti
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

Apsaugos priemonė nurodo, kad pakeitimų nėra, grąžindama `void`, `{}` arba
`{ block: false }`. Grąžinus `modifiedPayload` / `modifiedResponse`, grandine
perduodama reikšmė pakeičiama tolesnėms apsaugos priemonėms.
`signal?: AbortSignal` perduoda iškvietėjo gyvavimo ciklą apsaugos priemonėms. Užklausos nutraukimas yra sąmoninga „fail-open“ išimtis: medijos tarpininkai sustabdo darbą ir atlaisvina išteklius, neatkurdami neapdorotos medijos paskirties vietai, kuri, kaip žinoma, jos nepalaiko.

## Registras (`registry.ts`)

Vienintelis egzempliorius `guardrailRegistry` suteikia:

- `register(guardrail)` — prideda apsaugos priemonę (arba pakeičia pagal normalizuotą pavadinimą) ir
  iš naujo surikiuoja didėjančia `priority` tvarka.
- `clear()` / `list()` — administravimo pagalbinės funkcijos.
- `runPreCallHooks(payload, context)` — iteruoja aktyvias apsaugos priemones, perduoda
  naudingąją apkrovą per `modifiedPayload` ir sustoja ties pirmuoju `block: true`.
- `runPostCallHooks(response, context)` — tokia pati eiga atsakymo pusėje.
- `resetGuardrailsForTests({ registerDefaults })` — išvalo būseną ir pasirinktinai
  iš naujo užregistruoja numatytąsias apsaugos priemones, kad testai būtų visiškai izoliuoti.

Abi vykdymo funkcijos grąžina `{ blocked, payload|response, results, guardrail?, message? }`,
kur `results` yra `GuardrailExecutionResult` įrašų masyvas, apimantis kiekvienos
apsaugos priemonės laukus `blocked`, `skipped`, `modified`, `error` ir `meta`,
naudingus sekimui.

### Apsaugos priemonių išjungimas atskiroms užklausoms

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` surenka pasikartojimų
neturintį apsaugos priemonių, kurios turi būti praleistos vykdant dabartinę
užklausą, pavadinimų sąrašą. Šaltiniai (visi neprivalomi, visi sujungiami):

- `apiKeyInfo.disabledGuardrails`
- Užklausos turinio `disabledGuardrails` (aukščiausiu lygiu)
- Užklausos turinio `metadata.disabledGuardrails`
- Antraštė `x-omniroute-disabled-guardrails` (arba senoji
  `x-disabled-guardrails`)

Reikšmės gali būti eilučių masyvai arba kableliais atskirta eilutė; pavadinimai
normalizuojami į mažosiomis raidėmis rašomą kebabo stilių (`pii_masker` → `pii-masker`). Rezultatas
perduodamas registrui per `context.disabledGuardrails`, o registras praleidžia
atitinkančias apsaugos priemones (`skipped: true` lauke `results`).

## Vykdymo tvarka

Kiekvienai užklausai, perduodamai per `src/sse/handlers/chat.ts` ir
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` sudaro praleidžiamų apsaugos priemonių sąrašą pagal API raktą, užklausos turinį
   ir antraštes.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` vykdo apsaugos priemones didėjančia
   prioriteto tvarka:
   - Išjungtos apsaugos priemonės pažymimos kaip `skipped`.
   - Kiekvienos apsaugos priemonės `preCall` gali perrašyti naudingąją apkrovą per `modifiedPayload`.
   - Pirmasis `block: true` nutraukia grandinę, o apdorojimo programa grąžina
     apsaugos priemonės atmetimo atsakymą.
3. Galimai perrašyta naudingoji apkrova perduodama kombinuotajam maršrutizavimui ir išsiunčiama
   aukštesniojo lygio paslaugai.
4. Surinkus atsakymą, `guardrailRegistry.runPostCallHooks(...)`
   paleidžia tą pačią grandinę atsakymui. Šiame etape `block: true` atmeta aukštesniojo lygio paslaugos
   atsakymą.

Klaidą sukeliančios apsaugos priemonės pažymimos įrašu `error: <message>`, o klaida registruojama per
`logger.warn`, tačiau grandinė tęsiama — taip sąmoningai įgyvendinamas veikimo tęstinumas klaidos atveju.

## Konfigūracija

Integruotųjų apsaugos priemonių nuskaitomi aplinkos kintamieji:

| Kintamasis                            | Naudoja               | Poveikis                                                                                                                     |
| ------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`    | Nustačius `false`, aptikimas visiškai išjungiamas.                                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`    | Įterpimo politika: `warn`, `block` arba `log`. Ankstesnė reikšmė `redact` įterpimo teksto neperrašo.                         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`    | Įterpimo apsaugos režimas; taip pat DB funkcijos vėliavėlė, kuri **perrašo** aplinkos kintamuosius (DB > ENV).               |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`    | Mažiausias griežtumo lygis, kurį `MODE=block` atmeta: `high` (numatytasis), `medium` arba `low`.                             |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`    | Ankstesnis `INPUT_SANITIZER_BLOCK_THRESHOLD` alternatyvus pavadinimas.                                                       |
| `PII_REDACTION_ENABLED`               | `pii-masker`          | Kai nustatyta `true`, užklausoje esanti asmens identifikavimo informacija užmaskuojama (nepriklausomai nuo įterpimo režimo). |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (toliau) | Valdo atsakymo pusės maskavimo priemonės veikimą.                                                                            |

„Modality Bridge“ apsaugos priemonės vykdymo konfigūraciją nuskaito iš DB pagrįstos nustatymų
saugyklos (`getSettings()`), o ne iš aplinkos kintamųjų. Pagrindiniai vaizdo apdorojimo raktai yra
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ir
`modalityBridgeCacheMaxEntries`. Ankstesni
`visionBridge*` raktai priimami tik kaip dokumentuotas vieno ciklo nuskaitymo
atsarginis variantas; valdymo skydelio įrašymo operacijos naudoja pagrindinius raktus. Numatytosios reikšmės ir atsarginio varianto
sprendiklis yra faile `src/shared/constants/modalityBridgeDefaults.ts`, o ankstesnės
konstantos paliktos faile `src/shared/constants/visionBridgeDefaults.ts`.

Garso apdorojimas naudoja `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ir `modalityBridgeAudioMaxClips` bei bendrus
`modalityBridgeCache*` nustatymus. Garso apdorojimas neturi atsarginio ankstesnių raktų varianto, nes šie
raktai buvo įtraukti kartu su „Modality Bridge“ schema.

Vaizdo įrašų apdorojimas naudoja `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ir
`modalityBridgeVideoTimeout` bei bendrus `modalityBridgeCache*` nustatymus.
Pagal numatytuosius nustatymus jis išjungtas, nes FFmpeg/ffprobe yra pasirenkamos operacinės
priklausomybės, o kadrų aprašų generavimas padidina delsą ir modelio naudojimo sąnaudas.

## Pasirinktinės apsaugos priemonės

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

Veiksmai:

1. Sukurkite `src/lib/guardrails/myGuardrail.ts`, išplečiantį `BaseGuardrail`.
2. Įgyvendinkite `preCall` ir (arba) `postCall`.
3. Užregistruokite importavimo metu (įtraukite per `registerDefaultGuardrails`) arba
   vykdymo metu iškvieskite `guardrailRegistry.register(...)` — registras pakeičia
   bet kurią ankstesnę apsaugos priemonę tuo pačiu normalizuotu pavadinimu.
4. Pridėkite testus aplanke `tests/unit/` (esami pavyzdžiai:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testavimas

Tarp testų naudokite `resetGuardrailsForTests()`, kad pradėtumėte nuo žinomos būsenos.
Perduokite `{ registerDefaults: false }`, kad pradėtumėte nuo tuščio registro ir
užregistruotumėte tik testuojamas apsaugos priemones. „Vision Bridge“ palaiko priklausomybių
įterpimą (`deps.getSettings`, `deps.callVisionModel`); „Audio Bridge“ suteikia
atitinkamus sąsajos taškus nustatymams, galimybėms, STT modelio pasirinkimui, prisijungimo duomenų
patikroms ir transkripcijai. Todėl testais galima patikrinti abu srautus be prieigos
prie DB ar tinklo.

## Taip pat žr.

- `src/lib/guardrails/` — įgyvendinimas
- `src/shared/utils/inputSanitizer.ts` — bendras aptikimo mechanizmas, kuriuo grindžiami
  raginimų injekcijos aptikimas ir PII maskavimas
- `src/shared/constants/visionBridgeDefaults.ts` — numatytosios „Vision Bridge“ reikšmės ir
  priverstinio tilto modelių sąrašas
- `src/shared/constants/modalityBridgeDefaults.ts` — bendrosios „Vision“ / „Audio“ vykdymo aplinkos numatytosios reikšmės
- `docs/architecture/RESILIENCE_GUIDE.md` — nepriklausomas sluoksnis (grandinės pertraukiklis, atvėsimo laikotarpiai)
- `docs/reference/ENVIRONMENT.md` — išsamus aplinkos kintamųjų žinynas

## Injekcijos apsaugos maršrutų aprėptis ir „red-team“ testavimas (8 etapas · D blokas)

Injekcijos apsauga (`createInjectionGuard` / `withInjectionGuard`) apima visus maršrutus,
kurie priima naudotojų raginimus. Ji atsižvelgia į `INJECTION_GUARD_MODE` (numatytoji reikšmė `warn` = tik registruoti žurnale;
`block` = grąžina HTTP 400 `SECURITY_001`).

| Tipas           | Maršrutai                                                                                                                                            | Numatytasis režimas |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Tekstas (esami) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generatyviniai  | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Duomenys        | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Teksto išskyrimas (`extractMessageContents`) apima `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**„Red-team“ testavimas (kasnakt, `nightly-llm-security.yml`):** promptfoo patikrina, ar kiekvienas maršrutas blokuoja
OWASP-LLM rinkinį, kai `INJECTION_GUARD_MODE=block`; garak vykdo zondus (praleidžiama, jei nėra slaptojo rakto).
`moderations` įtrauktas nuoseklumo sumetimais — operatoriai, naudojantys blokavimo režimą, gali jam taikyti išimtį per
`resolveDisabledGuardrails`.

Kasnakt vykdoma darbo eiga (`.github/workflows/nightly-llm-security.yml`, cron + rankinis
paleidimas) turi dvi užduotis:

- **`promptfoo-guard` (blokuojanti)** — vykdo `promptfoo eval -c promptfooconfig.yaml`
  su `INJECTION_GUARD_MODE=block`. Kiekvienu priešišku atveju (pvz., „nepaisyk visų
  ankstesnių instrukcijų…“, DAN tipo apsaugos apėjimai) patvirtinama, kad atsakyme yra
  `error.code === "SECURITY_001"`, t. y. apsauga iš tikrųjų atmetė užklausą.
- **`garak` (patariamoji)** — vykdo garak `--probes promptinject,dan,leakreplay`
  vietiniame „OmniRoute“ egzemplioriuje (`http://localhost:20128/v1`). Vykdymas priklauso nuo
  teikėjo slaptojo rakto (`PROMPTFOO_PROVIDER_KEY`); jo nesant užduotis korektiškai praleidžiama, o pabaigoje pridėta
  `|| true`, todėl rezultatai pateikiami nesukeliant CI nesėkmės.

Apsaugos pagalbinės priemonės (`createInjectionGuard` / `withInjectionGuard`)
aprėptis apima kiekvieną raginimus priimantį `/v1` maršrutą; raginimo tekstas paimamas iš
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`, naudojant
`extractMessageContents()` faile `src/shared/utils/inputSanitizer.ts`.
