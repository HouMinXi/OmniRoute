# Guardrails (Eesti)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Tõeallikas:** `src/lib/guardrails/`
> **Viimati uuendatud:** 2026-08-29 — v3.8.51 (Video Bridge'i transkriptsiooni päritolu deklareerib kutsuja,
> server ei ole seda veel kontrollinud — täpsustatud vastavalt #11661-le)

Kaitsepiirded rakendavad ohutust, poliitikaid ja sisuteisendusi OmniRoute'i ning
ülesvoolu teenusepakkujate vahelisel piiril. Iga kaitsepiire saab kontrollida (ja
valikuliselt tagasi lükata, teisendada või annoteerida) päringu andmekogumeid (`preCall`) ja
ülesvoolu vastuseid (`postCall`).

Süsteem on **tõrke korral läbilaskev**: kui kaitsepiire tekitab käitamisel erindi, salvestab register
vea ja jätkab järgmise kaitsepiirdega, selle asemel et päring nurjata.
Blokeerimine on teadlik otsus (`block: true`), mitte kunagi juhus.

## Sisseehitatud kaitsepiirded

Register laadib importimisel automaatselt kuus kaitsepiiret prioriteetsuse järjekorras
(vt `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteet | Nimi                | Etapp/etapid   | Fail                  |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Väiksema prioriteedinumbriga kaitsepiirded käivitatakse **esimesena**.

### Nägemissild (`visionBridge.ts`) — modaalsussild PR-1

Püüab kinni **nägemisvõimeta mudelitele** suunatud pilte sisaldavad päringud ja
suunab kogu päringu ümber nägemisvõimelisele mudelile või asendab pildiosad
enne ülesvoolukutset tekstikirjeldustega, mille loob seadistatav nägemismudel.
See võimaldab ainult teksti toetavatel teenusepakkujatel multimodaalseid
andmekoormusi läbipaistvalt töödelda.

Töövoog:

1. Jäta vahele, kui sihtmudel juba toetab nägemist (välja arvatud juhul, kui see
   esineb sundsildamise loendis `isVisionBridgeForcedModel`).
2. Ekstrakti pildiosad funktsiooniga `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), mis delegeerib töö **ühtsele meediatuvastile**
   `detectMediaParts()` failis `open-sse/utils/mediaParts.ts` — see on
   tõe ainus allikas, mida jagatakse kombineeritud ühilduvusfiltriga.
   Ekstraktimine on lubatud ainult selliste ülataseme osade kujudele, mida
   `replaceImageParts` saab tagasi põimida (ekstraktimise↔asendamise leping):
   OpenAI `image_url`, Anthropic base64 `source.type:"base64"`, Anthropicu URL
   `source.type:"url"` ja Responses API `input_image`. Pesastatud tabamused ja
   ainult indikaatorit sisaldavad kujud kuuluvad kombineeritud filtri
   töödeldava materjali hulka ning neid ei ekstraktita kunagi.
   Jäta vahele, kui midagi ei leitud.
3. Lahenda käitusaegne konfiguratsioon funktsiooniga
   `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): uued `modalityBridge*`
   seadistusvõtmed on ülimuslikud; pärandvõtmed `visionBridge*` jäävad
   **ühe tsükli varuvariandiks** (tagasipööramisaken). Kui sild on keelatud,
   jäta toiming vahele enne meedia läbimist.
4. Režiimivalija (`modalityBridgeVisionMode`, vt allolevat tabelit) otsustab
   ümbersuunamise ja kirjeldamise vahel. Ümbersuunamine tagastab
   `modifiedPayload`, milles on asendatud ainult `model`, ning metaandmed
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kirjeldamistee: piira piltide arv väärtusega `maxImages`, koosta ülesannet
   arvestav viip, kontrolli kirjelduste vahemälu, kutsu nägemismudelit
   **paralleelselt** (`Promise.allSettled`) ning lisa piltide asemele tekstiosad
   `[Image N]: <description>`. Nurjunud kirjeldamine annab tulemuseks `null` ja
   algne pildiosa **säilitatakse** (#4012) — välja arvatud kombineeritud
   kirjeldamisteel, kui kõik kirjeldamised nurjusid; sel juhul saab kinnitatud
   nägemisvõimeta ülesvooluteenus selle asemel kohatäite
   `(pole saadaval — ühendatud pole ühtegi nägemisvõimelist teenusepakkujat)`
   (#8430).
6. Tagasta `modifiedPayload` koos metaandmetega (`imagesProcessed`,
   `descriptions`, `processingTimeMs`, `visionModel`).

#### Režiimivalija (`modalityBridgeVisionMode`)

| Režiim     | Vaikimisi | Käitumine                                                                                                                                                                                                                                                                                                      |
| ---------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔         | Pärandheuristika, muutmata (#6640/#7204): mittekombineeritud/`auto/` mudelid suunatakse ümber parimale nägemismudelile, välja arvatud juhul, kui algsel mudelil on juba kasutatavad pääsutunnused (siis kirjeldatakse); kombineeritud sihtmärke kirjeldatakse alati.                                           |
| `describe` |           | Kirjelda alati — ümbersuunamisplokk jäetakse täielikult vahele; vastab alati kasutaja valitud mudel.                                                                                                                                                                                                           |
| `reroute`  |           | Sunni ümbersuunamine: pääsutunnustega mudeli säilitamise kontrollist minnakse mööda. Ümbersuunamise **sihtmärgi** pääsutunnuste kontroll kehtib endiselt — kui kasutatavat nägemissihtmärki pole, jätkub päring kirjeldamisega, et toorpildid ei jõuaks kunagi ainult teksti toetavasse taustsüsteemi (#8430). |

Sunnitud režiimid lõpetavad töö **enne** automaatse heuristika käivitamist;
režiimi `auto` käitumine on PR-1-eelse kaitsepiirdega baidihaaval identne.

#### API-võtme ulatus (`visionBridgeKeyScope.ts`)

Kui kutsuja API-võti piirab väärtust `allowedConnections`, kvoodipakette
(`allowedQuotas`) või mudeleid (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), valib sild
ümbersuunamiseks ja kirjeldamiseks ainult mudelid, mida võti võib kasutada,
ühendustes, mida võti võib kasutada. Seejärel läbib kirjeldamiskutse alati
OmniRoute'i iseringi päisega `x-omniroute-self-loop-key-id`, et vastuvõttev
vestluspäring jõustaks uuesti selle võtme ühenduse- ja mudelipoliitika.
`enforceApiKeyPolicy()` arvestab seda päist ainult koos iseringi bearer-võtmega,
mistõttu saab see üksnes juurdepääsu kitsendada, ning id, mida ei õnnestu
lahendada, lükatakse tagasi.

Kui võtme jaoks pole lubatud ühtegi nägemismudelit, astub kirjeldamistee kõrvale
ja päring edastatakse muutmata kujul; see on sama tõrke korral jätkamise
käitumine nagu keelatud kaitsepiirde puhul (metaandmed
`{ skipped: true, reason: "no_permitted_vision_model" }`).
Võtmeta päringud ja nende piiranguteta võtmed käituvad täpselt nagu varem.

#### Ülesannet arvestav kirjeldusviip (`modalityBridgeVisionTaskAware`)

Vaikimisi **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) lisab
baaskirjeldusviibale **viimase kasutajasõnumi** teksti (kärbituna 500 märgini),
suunates kirjelduse sellele, mida kasutaja tegelikult küsis
(codex-vision-proxy muster), ning palub nägemismudelil nähtava teksti
transkribeerida. Kui lipp on välja lülitatud või kasutaja tekst puudub,
kasutatakse baasviipa muutmata kujul.

Kirjelduse isetsükli enda OpenAI-ga ühilduv päring (`callVisionModelSingle()`
failis `visionBridgeHelpers.ts`) määrab alati `image_url.detail: "high"` —
tingimusteta iga kutsuja/pakkuja puhul ning sõltumata mis tahes kliendisignaalist.
Madala detailsusega diskreetimine halvendab OCR-i täpsust just selle
tekstitranskriptsiooni ülesande puhul, mida see viip nõuab, seega küsib
kirjelduspäring alati suurt detailsust olenemata sellest, millist detailsustaset
algne sisendpäring kasutas. See mõjutab ainult sisemise kirjelduspäringu keha;
see ei muuda seda, kuidas OmniRoute edastab põhipäringus kutsuja enda
`image_url.detail` väärtuse — see vaikeväärtus rakendatakse eraldi ja ainult
tuvastatud OpenCode'i klientidele funktsioonis `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Kirjelduse isetsükli
Anthropicu juhtmevormingu harul puudub väli `detail` ning kumbki vaikeväärtus
seda ei mõjuta.

#### Kirjelduse väljundi piirang (`modalityBridgeVisionMaxChars`)

| Võti                           | Vaikeväärtus | Vahemik           |
| ------------------------------ | ------------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`          | `0` või 100–50000 |

`0` (vaikeväärtus) tähendab, et **piirang puudub** — funktsiooni
`callVisionModel()` tagastatud kirjeldus edastatakse muutmata kujul, säilitades
senise käitumise. Iga väärtus vahemikus 100–50000 kärbib kirjelduse ning lisab
sellele järelliite `…`, enne kui see lisatakse kujul
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` failis
`src/lib/guardrails/visionBridge.ts`). Suurendage seda väärtust
detailirohkete OCR-i ülesannete jaoks, mille puhul järgnev mudel vajab täielikku
transkriptsiooni; vähendage seda, et piirata jutukate nägemismudelite
sõnemikasutust. Töölaua väli asub vahekaardi Vision paneelil Advanced
(`modality-bridge-max-chars` failis `ModalityBridgeVisionTab.tsx`) ning tõstab
kõik väärtused vahemikus 1 kuni 99 miinimumini 100, jättes samal ajal otseselt
määratud väärtuse `0` puutumata — `0` on omaette kehtiv Zodi väärtus
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), mitte ainult
„määramata“ vaikeväärtus.

#### Kirjelduste vahemälu (`modalityBridge/bridgeCache.ts`)

Mälusisene LRU + TTL vahemälu kirjelduste väljunditele, mida jagatakse kogu
protsessi ulatuses. Võti = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
koos pikkusepõhise kadreerimisega (väljade piiridel kokkupõrkeid ei teki).
Mudeliosa on **seadistatud** sillamudel, mitte tegelikult vastanud mudel —
`callVisionModel` võib sisemiselt kasutada varuvarianti ning iga katse eraldi
võtmestamine killustaks vahemälu. Ebaõnnestunud kirjeldusi ei salvestata kunagi
vahemällu. Seaded:

| Võti                            | Vaikeväärtus | Vahemik |
| ------------------------------- | ------------ | ------- |
| `modalityBridgeCacheEnabled`    | `true`       | —       |
| `modalityBridgeCacheTtlMinutes` | `60`         | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`        | 10–5000 |

#### Kaugpiltide normaliseerimine (isetsükli kirjeldus / base64 hankimine)

Kui sild hangib **kaugpildi** ise — Anthropicu kirjelduse iseväljakutse ja
claude-wire-format-vormingu base64-teisendus
(`ensureBase64ImagesForClaudeWire`), mõlemad funktsiooni
`fetchRemoteImageAsDataUri()` kaudu failis `visionBridgeHelpers.ts` — edastatakse
saadud andme-URI enne nägemismudeli päringusse põimimist funktsioonile
`normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`). Liiga suured pildid
vähendatakse **2048px pikema servani** (vastates suurusepiirangule, mida OpenAI
ja Anthropic juba serveri poolel rakendavad), mis vähendab üleslaaditavate
baitide hulka ja latentsust, muutmata seda, mida nägemismudel näeb. Suuruse
muutmiseks kasutatakse paketti `sharp`, mis laaditakse dünaamilise impordi
kaudu: platvormil, kus selle platvormipõhise kahendfaili laadimine ebaõnnestub,
ei tekita `normalizeDataUri()` **kunagi erindit** — see edastab algsed baidid
muutmata kujul, nii et kirjelduse/base64-teisenduse töövoog jätkab alati tööd.
Ka pildiks mitteolevad baidid (hankimine, mis ei tagastanud dekodeeritavat pilti)
edastatakse muutmata kujul. See normaliseerimine piirdub piltidega, mille sild
hangib oma iseväljakutse jaoks — seda ei rakendata kunagi kutsuja toorele
muutmata edastatavale lastile, järgides ainult nõusolekul põhineva muutmise
põhimõtet (range reegel nr 20).

#### Seadete skeem + migratsioon

Uued `modalityBridge*` võtmed valideeritakse Zodiga skeemis
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
kolmik `modalityBridgeCache*` ja Audio Bridge'i kasutatav rühm
`modalityBridgeAudio*`. Migratsioon `141_modality_bridge_settings.sql`
kopeerib olemasolevad pärandvõtmete `visionBridge*` väärtused vastavatesse
uutesse võtmetesse (idempotentselt ega kirjuta kunagi üle operaatori määratud
`modalityBridge*` väärtust); pärandvõtmeid aktsepteeritakse lugemisel
varuvariandina veel ühe väljalasketsükli jooksul.

#### Läbipaistvuspäis + statistika

Kirjelduseks teisendatud vastused sisaldavad päist
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(mille koostab `buildModalityBridgeHeader()` failis
`modalityBridge/bridgeStats.ts` ja lisab `withModalityBridgeHeader()` failis
`src/sse/handlers/chatHelpers.ts`). Ümbermarsruuditud päringutele päist
**ei** lisata — last jäi muutmata ning mudeli vahetus on juba nähtav vastuse
keha väljal `model`.

`GET /api/modality-bridge/stats` (haldusautentimine, sama tase nagu
`GET /api/settings`) tagastab mälus hoitavad modaalsusepõhised loendurid
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` modaalsuste `vision`, `audio` ja
`video` jaoks. `averageLatencyMs` kasutab nimetajana väärtust `latencySamples`,
mitte kõiki katseid; ilma ajamõõtmiseta toiming ei tekita kunstlikult
nullmillisekundilist näidist. `bridged` jääb edukate teisenduste tagasiühilduvaks
aliaseks; nurjunud katsed seda ei suurenda.
Loendurid lähtestatakse protsessi taaskäivitamisel taotluslikult
(tegu on telemeetria, mitte arvestusega).

#### Töölaua konfiguratsioon

Spetsiaalne töölaualeht asub aadressil
`/dashboard/settings/modality-bridge`. Selle URL-i kaudu avatavad vahekaardid `Vision`, `Audio`
ja `Video` säilitavad vahetamisel päringuparameetrid, muutes ainult väärtust `tab`.
Vahekaart Vision võimaldab hallata aktiveerimist, režiimi, mudeli valikut (sealhulgas automaatset
vaikevalikut), ülesandeteadlikke viipasid, täpsemaid ajalõpu-, pildi-, kirjelduse pikkuse ja vahemälu
piiranguid, käitusaja
loendureid ning kaitstud näidispäringut. Ka vahekaart Audio on toimiv: see võimaldab
hallata aktiveerimist, üksnes STT-mudelite valijat koos valikuga Auto, ajalõpu ja klipi maksimaalse
pikkuse piiranguid, heli
loendureid ning `input_audio` näidistesti. Vahekaart Video on funktsionaalne: see kuvab
FFmpegi/ffprobe'i käitusaja oleku — ühe neljast selgest kasutajaliidese olekust (`unknown`, kui
kontroll on pooleli või seda ei saanud lõpetada, `restricted` mitte-loopback
töölauahostis, kus kontroll jäetakse kliendi poolel vahele, `unavailable`, kui kontroll on tehtud
ja puudumine kinnitatud, või `available` koos FFmpegi/ffprobe'i versioonidega) — salvestab
aktiveerimise, mudeli, kaadrite, video ja ajalõpu piirangud, filtreerib mudelivalija nägemisvõimega
mudelitele ning kuvab video loendurid.

Varasem AI seadete all olnud Vision Bridge'i kaart on nüüd ühilduvuslink
uuele lehele; see ei halda enam vormi teist koopiat. Media Providers lisab samuti
Image-to-Texti ja Speech-to-Texti töövoogude lingid vastavatele Modality
Bridge'i vahekaartidele, eemaldamata olemasolevat Speech-to-Texti katsekeskkonda.

**Isetsükli vastuvõtukontrollist möödumine:** kui kirjeldamiskutse suunatakse OmniRoute'i
enda `/v1` isetsükli kaudu (mittestandardse teenusepakkuja mudel), saadab alampäring
`x-omniroute-admission-bypass: internal` ja autenditakse lahendatud
isetsükli mandaadiga — kohalikus režiimis lokaalse `sk_omniroute` sentinelväärtusega või
operaatori seadistatud keskkonnavõtmega `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), et
juurutused väärtusega `REQUIRE_API_KEY=true` saaksid kirjeldamiskutset endiselt käitada. Möödumine
on lubatud ainult nende täpsete mandaatide puhul, mistõttu välised kliendid ei saa seda
päist vastuvõtukontrolli vahelejätmiseks kasutada.

Pärandvaikeväärtused asuvad failis `src/shared/constants/visionBridgeDefaults.ts`;
uue režiimi, ülesandeteadlikkuse ja vahemälu vaikeväärtused ning seadete lahendaja asuvad failis
`src/shared/constants/modalityBridgeDefaults.ts`. Kaitsemehhanism pakub
konstruktori suvandit `deps`, et testid saaksid sisestada võltsitud `getSettings`-i ja
`callVisionModel`-i teostused.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Püüab heli sisaldavad vestluspäringud kinni enne, kui need jõuavad sihtmärgini, mille kohta
pole teada, et see aktsepteeriks helisisendit. See ei suuna vestluspäringut kunagi ümber:
heliosad transkribeeritakse olemasoleva OpenAI-ga ühilduva mitmeosalise lõpp-punkti kaudu ning
valitud vestlusmudel jätkab tekstitranskriptsioonidega.

Voog:

1. Lahenda `supportsAudio` funktsiooni `getResolvedModelCapabilities()` kaudu. Selgesõnalised
   teenusepakkujate registri metaandmed on esmased, seejärel staatilised mudeli metaandmed ning siis sünkroonitud
   `modalities_input`. Deklareeritud sisendiloend ilma väärtuseta `audio` annab tulemuseks `false`;
   kui võimekuse kohta tõendid puuduvad, jääb väärtuseks `null`. Nii `false` kui ka `null` aktiveerivad
   konservatiivse silla, samas kui `true` möödub sellest.
2. Lahenda seaded `modalityBridgeAudio*` ja eralda ühise `detectMediaParts()`-i
   tuvastaja abil iga sõnumi tipptasemelt väljalõigatavad heliosad.
   Toetatud edastusvormingud on OpenAI `input_audio`, `audio_url` ja
   `source.media_type: "audio/*"`. Pesastatud heli tuvastatakse marsruutimiseks, kuid seda
   ei eemaldata väljalõikamise käigus. Tööd piirab `modalityBridgeAudioMaxClips`;
   hilisemad osad jäävad puutumata.
3. Kasuta seadistatud väärtust `provider/model` või lase funktsioonil `selectAudioBridgeModel()`
   läbida `AUDIO_TRANSCRIPTION_PROVIDERS` stabiilses kataloogijärjekorras ning valida esimene
   mudel, millel on kasutatav aktiivne teenusepakkuja mandaat.
4. `callAudioTranscription()` teisendab base64-/andme-URI-heli mitmeosaliseks
   `file`-iks või laadib kaugasuvast `audio_url`-ist faili alla ainult avalikke sihtkohti lubava väljuvate
   ühenduste kaitse kaudu, kasutades DNS-i kinnistamist ja 25 MB piirangut. Seejärel saadab see faili ja valitud
   mudeli POST-päringuga kohalikku `/v1/audio/transcriptions` isetsüklisse, autentides päringu funktsiooniga
   `resolveSelfLoopBearer()`. Olemasolev transkriptsioonimarsruut teeb tavapärase
   mandaadiotsingu, käsitleb jahtumis- ja kiiruspiiranguid ning suunab päringu teenusepakkujale.
5. Edukad kutsed asendavad oma osad tekstiga `[Audio N]: <transcript>`. Kutsed
   käivitatakse funktsiooniga `Promise.allSettled`: üksiku kutse nurjumisel säilitatakse vastav algne
   heliosa (#4012 leping). Kui kõik kutsed nurjuvad ja on tõestatud, et sihtmärgi
   `supportsAudio === false`, asendatakse osad tekstiga
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 leping). Tundmatu
   sihtmärgi (`null`) puhul jääb kõigi kutsete nurjumisel päring puutumata. Tõestatult
   ainult teksti toetav sihtmärk, millel puudub kasutatav STT-mandaat, saab sama selgesõnalise
   asendusteksti ilma võrgukutset tegemata.

Edukad transkriptsioonid kasutavad protsessiülest Modality Bridge'i LRU/TTL-vahemälu.
Võti ühendab heliviite, stabiilse toimingusildi `audio-transcription`
ja valitud STT-mudeli; nurjumisi ei salvestata kunagi vahemällu. Helikatsed uuendavad
jagatud `bridged`, `cacheHits`, `failures` ja `lastUsedAt` loendureid.
Teisendatud vastused sisaldavad päist
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; puutumata
päringutele Audio Bridge'i segmenti ei lisata.

Käitusaja seaded on andmebaasipõhised ja Zodiga valideeritud:

| Võti                          | Vaikeväärtus | Vahemik               |
| ----------------------------- | ------------ | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`       | —                     |
| `modalityBridgeAudioModel`    | `""`         | Automaatne või STT ID |
| `modalityBridgeAudioTimeout`  | `60000`      | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`          | 1–10                  |

Jagatud vahemälu juhitakse jätkuvalt sätetega `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ja `modalityBridgeCacheMaxEntries`.

### Videosild (`videoBridge.ts`, `videoBridgePipeline.ts`)

Püüab kinni ülataseme videoosad Chat Completionsi `messages`-väljal ja Responses
API `input`-väljal enne sellise sihtmudeli väljakutsumist, millel teadaolevalt puudub video loomulik tugi.
Toetatud kujud on `input_video`, `video_url`, `video_source`, HTTPS-i URL-id
ja `data:video/*;base64,...` andme-URI-d. Tekstis olevaid lihtsaid failinimesid
ei käsitleta videona.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) vastutab päringu läbimise,
võimekuse/poliitika kontrolli, päringupõhise agregeerimise ja vastuse kasuliku koormuse eest.
Videopõhine töö — hankimine, terviktulemuse vahemällu salvestamine, kaadrijada
kirjeldamine (mis ühendab kõik kutsuja deklareeritud heli transkriptsioonid) ning katsepõhised
mõõdikud/katkestamine/puhastamine — on peidetud funktsiooni `processVideoPart` taha failis
`videoBridgePipeline.ts`, mida kutsutakse `preCall`-i tsüklis iga videoosa kohta üks kord.
See moodul määratleb ka selgesõnalised pordipiirid `VideoMediaBrokerPort`
(baitide hankimine ja valimkaadrite eraldamine), `VideoAudioTranscriptionPort`
(kutsuja deklareeritud heli transkriptsiooni ühendamine valimkaadrite pealdistega) ja
`VideoDrilldownPort` (kaadrite süvaanalüüsi püsivuspiir; pole veel funktsiooniga
`processVideoPart` ühendatud — praegu kirjutab süvaanalüüsi kirjeid ainult eraldi
marsruut `/api/modality-bridge/video/drilldown`).

Avalik `/v1` päringutee ei impordi ega käivita kunagi alamprotsessi. Kaugvideod
laaditakse alla 50 MiB piiranguga; tekstisisesel base64-videol on konservatiivne
36 MiB dekodeeritud mahu piirang video kohta, et mudeli, sõnumite ja raamimise ümbris
jääks avaliku JSON-päringu 50 MiB vastuvõtupiirangu sisse. Tekstisisest pikkust ja
dekodeeritud mahu hinnanguid kontrollitakse enne mälu eraldamist. Esialgse kaug-URL-i
ja iga ümbersuunamise puhul on nõutav HTTPS, kasutades olemasolevat ainult avalikele
sihtkohtadele suunatud väljaminevate ühenduste kaitset koos DNS-i sidumisega. Seejärel ületavad
baidid täpselt sisemise vahendaja piiri `POST /api/modality-bridge/video/extract`.
See marsruut on korraga nii `LOCAL_ONLY` kui ka `SPAWN_CAPABLE`, võtab vastu ainult
protsessipõhise autentimisega usaldusväärse tagasisideahela päringu ega võta kunagi
vastu URL-i, failisüsteemi teed, täitmisfaili ega argumentide loendit. API päringukeha
mahupiirangu konveier ja töötleja järkjärguline päringukeha lugeja jõustavad teineteisest
sõltumatult vahendaja sisendi 50 MiB piirangu. Selle piiratud järjekord töötleb korraga
ühte eraldamist, lubab nelja ootel tööd ja piirab ootel sisendi mahu 100 MiB-ni.

Vahendaja sees loeb `ffprobe` privaatset kohalikku faili; fikseeritud vormingute
lubatud loend välistab esitusloendite ja manifestide vormingud. Lubatud MOV-perekonna
konteinerite puhul jäävad välised MOV-andmeviited vaikimisi keelatuks ning
fikseeritud käsk ei lülita neid sisse. Nii `ffprobe` kui ka `ffmpeg` kasutavad
ainult protokolli `file` lubatud loendit, üht lõime, fikseeritud argumendimassiive,
ilma kestata, ning täitmisfailid leitakse muutujast `PATH`. Manustatud pildiga
kaanepildi vood ei ole esitatavad kandidaadid. Kõik esitatavad vood peavad
piirangutele vastama ning enne deterministlikku väikseima indeksiga varuvalikut
eelistatakse selgesõnaliselt määratud vaikevoogu. Videote kestus on piiratud 600
sekundiga, mõõtmed 8 192 piksliga kummaski suunas ja lähtekaadri suurus 33 554 432
piksliga. FFmpeg võtab keskpunktidest 1–16 JPEG-valimkaadrit, vähendab pikema külje
maksimaalselt 1 024 pikslini ilma väiksemaid sisendeid suurendamata ega saa kunagi
URL-i. Vaikimisi on valimimeetod `uniform`. Valikulised poliitikad
`scene_aware` ja eksperimentaalne `segment_aware` teevad juba valideeritud
kohalikule voole ühe täiendava fikseeritud FFmpegi läbimise, valivad piiratud arvu
`showinfo` stseeniajatemplid ning detektori tõrke, ajalõpu, vigase väljundi või tühja
kandidaadikomplekti korral kasutavad deterministlikult samu ühtlaselt jaotatud
keskpunkte. Segmenditeadlik režiim jaotab keskpunktivalimid proportsionaalselt
valideeritud stseeniintervallide vahel; segmenditeadlikke tõendeid ja varukäitumist
kirjeldatakse üksikasjalikult allpool. Ranget 16 kaadri piirangut
rakendatakse kõigi poliitikate puhul pärast valimist. Kui stseeniteadliku päringu
kaadrieelarve on ainult üks kaader, kasutab see aktiivse täisvideo või fookusakna
ühtlast keskpunkti ja teatab `policyEffective: uniform`: üks valitud stseenikaader
ei saa säilitada mõlemat ajalist otsa. Kutsuja võib soovi korral esitada
lõpliku fookusakna (`start`/`end` sekundites); piirid kohandatakse meedia kestusega,
ümberpööratud või mittelõplikud aknad lükatakse tagasi ning kõiki valimipoliitikaid
rakendatakse ainult normaliseeritud intervalli sees. Saadud
aken lisatakse valimite metaandmetesse ja ebausaldusväärse kirjelduse prefiksisse,
et järgnevad mudelid saaksid eristada fokuseeritud väljavõtet tervest ajajoonest.

Semantiline pealdiste fookus on eraldi selgesõnaline säte. Vaikimisi kasutatav
analüüsirežiim `full` säilitab olemasoleva kaadriviiba ega edasta päringu teksti
kunagi pealdisemudelile. Režiimis `focused` loeb sild ainult uusimat mittetühja
kasutaja loodud `text`/`input_text`-i samast Chati või Responsesi konteinerist,
normaliseerib selle NFC-kujule, koondab juhtmärgid ja tühimärgid ning piirab
selle 500 Unicode'i koodipunktiga. Tühi tulemus kasutab varuvariandina täpset
`full`-viipa. Kasutatav vihje serialiseeritakse JSON-ina spetsiaalsesse
ebausaldusväärse kasutajakonteksti plokki ning see võib ainult vaadeldavaid üksikasju
prioriseerida; see ei saa tühistada eraldi hoiatust meedias nähtavate või kuuldavate
juhiste mittejärgimise kohta. Tekstiline fookus ei tuleta kunagi väärtusi
`start`/`end` ega muuda ajalist valimit.

#### FU-07 struktuursed segmenditõendid

`segment_aware` kasutab juba valideeritud kohaliku videovoo ühte piiratud eelanalüüsikäiku. Fikseeritud filtriahel skaleerib video esmalt kuni 320 piksli laiuseks, tuvastab stseenivahetused ja tardunud intervallid ning võtab seejärel hägususe, keskmise heleduse ja ruumilise/ajalise teabe analüüsimiseks ühe kaadri sekundis. Käik on piiratud 600 struktuurse valimiga, ühe FFmpeg-i/filtri lõimega, samade ainult `file`-protokolli ja konteinerite lubatud loenditega, 1 MiB protsessiväljundi piiranguga ning kuni 30 sekundiga vahendaja jagatud katkestamis-/tähtajaaknas. See ei võta päringust kunagi vastu käsku, filtrit, teed ega URL-i.

Struktuursed väärtused on deterministlikud valimiandmed, mitte video semantiline mõistmine. Nende põhjal ei tuletata subjekte, tegevusi, subtiitreid, kõnet ega kasutaja kavatsust. Stseeni- ja tardumispiirid moodustavad segmendid; tardumise ulatus, hägusus, säritus, ruumiline detailsus ja ajaline muutus mõjutavad ainult seda, kuidas olemasolev 1–16 kaadri eelarve jaotatakse. Täielikult tardunud segment on piiratud ühe kaadriga, samal ajal kui tardumata segmendid konkureerivad ülejäänud eelarve pärast. Kui piire on kaadritest rohkem, säilitatakse ajajoonel ühtlane katvus, et kiired varajased lõiked ei saaks pikka lõpus olevat segmenti varjata. Stseenipiirid, mis jäävad tardumispiirist eelanalüüsi 1-sekundilise eraldusvõime piiresse, liidetakse.

Puuduvate filtrite, vigaste/tühjade analüüsiandmete, detektori vea või piiratud eelanalüüsi ajalõpu korral kasutatakse täpselt ühtlast keskpunktipoliitikat. Helistaja katkestuse või vahendaja tähtaja korral seda varuvarianti ei kasutata: pooleliolev alamprotsess lõpetatakse, hilisem kaadrite eraldamine takistatakse ja privaatne ajutine kataloogipuu eemaldatakse plokis `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genereerib deterministlikud tegelikud FFmpeg-i testandmed dubleerimise eemaldamise järgse subtiitripäringute säästu, tiheda liikumise eelarvejaotuse, hägususe/särituse/SI-TI analüüsiandmete, pika lõpuosaga kiirete lõigete ning järkjärguliste hajumiste valepositiivsete tulemuste jaoks. See salvestab eelanalüüsi tegeliku kestuse ning seal, kus `/usr/bin/time` on saadaval, alamprotsessi CPU-kasutuse ja RSS-i tippväärtuse. Selle kvaliteedikontrollid on ainult struktuursed etalonid. Tegeliku subtiitrimudeli kvaliteedi olekuks jääb `HOLD`, sest sellel testiraamistikul pole volitatud otspunkti ega fikseeritud hindajat. Ka rahalise säästu olekuks jääb `HOLD`, välja arvatud juhul, kui `--caption-cost-per-call-usd` annab selgesõnalise positiivse päringupõhise kuluhinnangu; skript ei fabritseeri kumbagi tulemust.

Iga kaader on piiratud 4 MiB-ga, kõik toorkaadrid kokku 23 MiB-ga ja vahendaja serialiseeritud vastus 32 MiB-ga. Privaatne ajutine kataloog eemaldatakse plokis `finally`. OmniRoute ei sisalda FFmpeg-i ega aktsepteeri kohandatud täitmisfaili teed. Enne subtiitrite loomist rakendab sild konservatiivset visuaalse dubleerimise eemaldamist: iga JPEG vähendatakse 16×16 halltoonide puhvriks ja seda võrreldakse ainult viimase säilitatud kaadriga. Kui taotletud subtiitrieelarve on suurem kui üks kaader, annab eraldamine piiratud kandidaatide kogumi, mille suurus on kuni kahekordne eelarve, kuid mitte kunagi üle 16 kaadri. Taotletud ülempiiri rakendatakse alles pärast dubleerimise eemaldamist ning kui eelarve on vähemalt kaks, säilitatakse lõpliku harvendamise käigus esimene ja viimane valitud kandidaat. Versioonitud
`grayscale-16x16-mean-cells-v2` poliitika kasutab suuremat väärtust keskmise heleduse erinevusest ja nende pisipildi lahtrite osakaalust, mille normaliseeritud erinevus on vähemalt 0,05. Duplikaadilävi on konstant 0,04, mis valiti prognoositavuse huvides, mitte käitusaegse sättena avaldamiseks. See teisene suure kontrastsusega signaal säilitab väikesed liikumised ja nähtava teksti muudatused, mida ainult keskmisel põhinev võrdlus võib varjata. Võrdleja või dekoodri vigade korral jäetakse kaadrid alles ja säilitatakse katvus. Väljundi metaandmed eristavad eraldatud kandidaate, edukalt kasutatud kaadreid ja eemaldatud visuaalseid duplikaate.

Selgesõnaliselt videoks märgitud osa võib taotleda ajatemplitega kontaktlehte. Sild koostab kuni 4 veeru ja 16 kaadriga JPEG-ruudustiku. Iga 512-piksline lahter põletab oma lähteajatempli suure kontrastsusega alumisele ribale, samad ajatemplid jäävad aga tekstilistesse metaandmetesse edasise seostamise ja auditeerimise jaoks. Terviklik JPEG on endiselt piiratud 32 MiB-ga. Kui `sharp` ei suuda ruudustikku dekodeerida või koostada, kasutab sild varuvariandina üksikuid JPEG-kaadreid; kliendi katkestus levib siiski kontaktlehe toimingule.

Kasutuselevõttu toetavad tõendid on sünteetilisest koostamise mikrojõudlustestist teadlikult eraldatud. `scripts/perf/video-bridge-contact-sheet-eval.ts` määratleb skeemiversiooniga A/B-testiraamistiku tegelikele OpenAI-ga ühilduvatele nägemismudelitele. See mõõdab teenusepakkuja esitatud tokenite arvu, täielikku tegelikku latentsust (sealhulgas kontaktlehe koostamist), mudelipäringute arvu ja manifestis määratletud faktide säilimist. Mudeli toorvastuseid aruandesse ei kirjutata; säilitatakse ainult SHA-256 räsi ja kattuvate faktide ID-d. Testiraamistik ei tee võrgu- ega tasulist mudelipäringut, kui pole antud `--execute-real` ning konfigureeritud `--model`, `OMNIROUTE_BASE_URL` ja `OMNIROUTE_API_KEY`. Ilma sellise selgesõnalise tegeliku käituseta jääb selle masinloetavaks otsuseks `HOLD`; ainult sünteetilised kasuliku lasti/päringute arvu mõõtmised ei ole kasutuselevõtu tõendid.

Helistajad võivad toetatud videoosale lisada valikulise massiivi `transcript.cues`, kui neil on juba olemas ajaliselt joondatud tekst. Iga vihje peab sisaldama väärtust `text`, sondeeritud kestuse piires olevat lõplikku intervalli `start`/`end` ja lubatud loendisse kuuluvat väärtust `source` (`client`, `embedded` või `audio-bridge`); `confidence` vaikeväärtus on `1` ja see peab jääma vahemikku `0` kuni `1`. Täpsed duplikaatvihjed koondatakse. OmniRoute ei alusta nende metaandmete põhjal kunagi transkribeerimist: valideeritud vihjed kopeeritakse kirjeldatud tulemusse koos allika, usaldusväärsuse ja intervalliga ning renderdatakse kaadrite subtiitrite kõrval ebausaldusväärsete vaatlustena. Vigane, vahemikust väljas või päritoluta tekst lükatakse tagasi, mitte ei segata subtiitrivoogu. Mõlemad päringukeha transkriptsioonikanalid normaliseerivad esitatud päritolu väärtuseks `client`, sealhulgas iseseisvalt väidetud sildid `embedded` või `audio-bridge`. Ainult serveri hallatav adapter saab määrata need usaldatud sildid ainult koodis kasutatava argumendi `trustedSource` kaudu; päringu JSON-i väli ei pääse selle argumendini. Transkriptsiooni tekst jääb olenemata päritolust ebausaldusväärseks meediast tuletatud sisuks ega tohi kunagi määrata autoriseerimist.

Kogenud väljakutsuja võib sama video jaoks esitada `audioTranscript`-raja;
seda käsitletakse kliendi esitatud tekstina, mitte serveripoolse transkriptsiooni
tõendina. Ühenduskiht käitab visuaalseid ja helivaatlusi ühe tähtaja ning
katkestussignaali all, järjestab need ühisel ajajoonel, ühendab täpsed duplikaadid
ja tagastab osalise tulemuse, kui õnnestub ainult üks pool. Sobimatu
`audioTranscript` viib samuti osalise tulemuseni — visuaalne kirjeldus
säilitatakse ja heliharu talletab puhastatud tõrkekoodi — selle asemel et kogu
video töötlemine nurjuks. Harupõhine saadavus, osalisuse lipp ja puhastatud
tõrkekoodid säilitatakse kirjeldatud tulemuses, kaitsepiirete metaandmetes
(`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), tulemuse vahemälu metaandmetes ja silla
ühendamiste loendurites. Video Bridge'i vaikimisi tee ei käivita kõne tekstiks
teisendamist ega laadi alla teist meediakoopiat; ilma selle sõnaselgelt lisatud
rajata jääb töötlus ainult videopõhiseks.

**Transkriptsiooni säilitamine (#12150 P1).** See rakendub automaatselt iga kord,
kui Video Bridge (mis ise on valikuline) renderdab transkriptsioonivihje —
eraldi säilitamislippu pole. Kui taotlus renderdab mis tahes
transkriptsioonivihje (väljakutsuja deklareeritud `transcript` või ühendatud
`audioTranscript`), märgistab kaitsepiire selle kui `videoBridgeObserved` ja
loob videokirjelduse redigeeritud varikoopia — identse renderduse, milles iga
vihje vabatekstiline sisu asendatakse väärtusega
`[redacted-video-transcript]`; see luuakse struktureeritud vihjevälja
asendamisega enne stringi koostamist (mitte kunagi lamendatud teksti parsimisega,
mistõttu ei saa säilida ükski vihje sisu — ei vaenulik ega tavapärane, sealhulgas
märki `]` sisaldav sisu, nagu `[inaudible]`/`[music]`). Püsivasse kõnelogi
salvestatud taotluse keha vahetab iga videost tuletatud tekstiosa selle
redigeeritud varikoopia vastu, sobitades sisu võrdsuse alusel; `fullText`-ankur
loetakse valmis kõne-eelse kaitsepiirde kasulikust koormusest uuesti, nii et
sobitamine õnnestub endiselt pärast seda, kui hilisemad ahela kaitsepiirded
(PII- ja identimisteabe maskijad prioriteetidega 10/95) on kirjelduse teksti
kohapeal ümber kirjutanud, ning pärast seda, kui süsteemiviiba, üleandmise või
mälu lisamine on sõnumimassiivi ümber kujundanud. Mudelile ülesvoolu saadetav
keha ei muutu. Vaadeldud taotlus ei lisa ka püsivasse Memorysse midagi
(nii taotlusest kui ka vastusest tuletatud ekstraktimine jäetakse vahele),
mistõttu ei saa mudeli enda vastus transkriptsiooni teksti Memorysse kajastada.

**Video toorväljad (#12430).** Kui sild on lubatud ning video omatugi on teadmata või puudub, aktiveerivad määratletud `transcript`/`audioTranscript`-väljad samuti `videoBridgeObserved`, isegi pärast kirjelduse nurjumist või `maxVideos`-piirangu rakendumist. `null` ja tühjad stringid lähevad arvesse; puuduvad väljad ja videoga mitteseotud metaandmed mitte. Säilitatavates koopiates need väljad redigeeritakse või taotlus jäetakse välja ning vahemäludest/Memorysest minnakse mööda.

Neil varuteedel teisendatakse kehtivad väljakutsuja vihjed toetatud `text`-/
`input_text`-osadeks, mitte ebastandardseteks teenusepakkuja väljadeks. Mõlemad
taotlusega esitatud rajad jäävad ebausaldusväärseteks `client`-vaatlusteks koos
selgesõnalise hoiatusega, et videot ei kirjeldatud ja ajatempleid ei kontrollitud
meedia suhtes. Olemasolevad 256 vihje / 64 KiB kogumahu ja vihjepõhised
piirangud rakenduvad kahele rajale ühiselt; ajatemplid peavad mahtuma vahendaja
600-sekundilise ülempiiri ja mis tahes esitatud fookusakna sisse. Sobimatud rajad
hüljatakse, mitte ei edastata suvalise tekstina; kehtivat sõsarrada võib siiski
kasutada, kui nende ühine mahu-eelarve pole ületatud. Null- ja tühjad väljad ei
lisa teksti. See varutee ei lisa meedia hankimist ega transkriptsiooni.
Transkriptsiooni laiendusväljad eemaldatakse varutee videokandjast ja selle
`video_url`-/`source`-objektidest. OpenAI edastusvormingu lubatute loend jääb
rangeks; teadmata omatoega videokandjad jäävad saadavaks ja teadaolevad ainult
teksti toetavad sihtmärgid säilitavad ohutud markerid. Struktureeritud
redigeerimisvarjud kaitsevad lisatud transkriptsiooniteksti, samal ajal kui
väljakutsujale kuuluv algne taotlus jääb muutmata. Omatoega sihtmärgid ja
keelatud sillad säilitavad oma olemasoleva möödumiskäitumise.

Täiendavad säilitatavad koopiad kasutavad sama vaadeldud taotluse signaali.
Kaitsepiirde-eelne klienditaotluse töötlemata hetktõmmis, mälus olev ootel
taotlus ja varakult tagasilükatud taotluse logi asendavad videoosades
transkriptsiooniväljad struktuurselt; konveieri etappide ja konteksti üleandmise
poolt sünteesitud stringiviibad redigeeritakse püsivasse taotluse kehasse
salvestamise sihtkohas. Püsiv `video_content_removed`-marker põhjustab
`previous_response_id`-ga jätkamise turvalise nurjumise, selle asemel et
taastada tahtlikult kõrvaldatud tekst. Kui vaadeldud taotlus kaotab enne logimist
oma osapõhise redigeerimisvarju või kui hilisemate taotlusemuudatuste järel ei
õnnestu sobitada kas või üht mitmest videovarjust, jäetakse säilitatav taotluse
keha täielikult välja, selle asemel et säilitada osaliselt redigeeritud
transkriptsioon.

Vaadeldud taotluse puhul võib mudeli vastus tsiteerida transkriptsiooni mis tahes
osa ilma struktureeritud vihjepiirita. Seetõttu asendatakse selle püsiva kõnelogi
`responseBody` väljajätmismarkeriga; üksikasjalikku konveieriartefakti (mis võib
sisaldada ülesvoolu-/kliendikehi ja voo fragmente) ei säilitata. Semantilised,
idempotentsus- ja põhjenduste taasesituse vahemälud jätavad selle taotluse puhul
lugemised ning kirjutamised vahele. Teenusepakkuja taotlus ja kliendile nähtav
vastus jäävad muutmata. Varajased ühenduse elushoidmise baidid eemaldatakse
ajutisest puhvrist, kui üksikasjalik artefakt välja jäetakse. Kiro vigase
EventStreami hoiatus esitab ainult kasuliku koormuse baitide arvu, mitte kunagi
selle sisu ega JSON-i parseri töötlemata veateadet.
See ei väida, et kõiki muid teenusepakkuja või pistikprogrammi diagnostikasõnumeid
oleks auditeeritud; säilitatavate andmesihtkohtade laiem ülevaatus on jälgitav
teemas #11658.

Sisemine `/api/modality-bridge/video/drilldown` elutsükkel on eraldiseisev
tagasisideahela/tokeniga autenditud vahemälu alamsüsteem. Iga toiming nõuab ka
kanoonilist läbipaistmatut subjekti ID-d. Enne tootmiskeskkonna kutsuja lubamist
peab see tuletama ID autenditud rentnikust ega tohi kunagi edastada kliendi
valitud väärtust. Vahemälu võtmed seovad selle subjekti kanooniliste seansi- ja
videoviite ID-dega, talletavad ainult nende SHA-256 põhjal tuletatud võtmed ning
piiravad nii lugemised kui ka kustutamise sama subjektiga. Vahemälu talletab ühe
kirje kohta kuni 16 tuletatud JPEG-kaadrit, aegub need kümne minuti pärast ning
toetab piiratud `start`/`end` lugemisi või seansi eksplitsiitset kustutamist.

Iga subjekt on piiratud 16 kirje ja 64 MiB kanooniliste JPEG-andmetega. Need
piirangud on sõltumatud globaalsest 64 kirje / 256 MiB ülempiirist: subjekti
kvoodisurve korral eemaldatakse enne globaalse LRU-põhise eemaldamise kaalumist
ainult selle subjekti kõige kauem kasutamata kirjed. Aegunud kirjed eemaldatakse
vahemälu kasutamisel nii subjekti kui ka globaalsest arvestusest, samas kui
tühistamise või valideerimise nurjumise korral osalist asendust ei kinnitata.

Vahemälu lükkab tagasi mittekanoonilise Base64, liigse täidise, muu kui JPEG-meedia,
vigased või kärbitud JPEG-failid ning JPEG-failid, mille piiratud täispildi `sharp`
dekodeerimine annab hoiatuse. Iga aktsepteeritud pilt kodeeritakse uuesti kanooniliseks
JPEG-iks, laius ja kõrgus tuletatakse dekodeeritud baitidest, selle asemel et usaldada
kutsuja välju, ning kõik lõppu lisatud polüglottbaidid kõrvaldatakse, mitte ei säilitata.
Mõlema kvoodi arvestusse läheb ainult piiratud kanooniline tihendatud puhver. JSON-i
edastusmahu piirang hõlmab Base64 lisamahtu 32 MiB dekodeeritud sisendi ülempiiri puhul.
Iga talletatud tuletis salvestab valideeritud JPEG-vormingu/eraldusvõime,
diskreetimispoliitika, tuletusversiooni, loomise aja, serveri arvutatud sisuräsi ning
räsitud lähteviite koos usaldatud kutsuja antud lähtesisu räsiga. Tühistamist
kontrollitakse asünkroonsete dekodeerimis- ja räsifaaside vahel enne atomaarset
vahemällu kinnitamist.

See etapp ei ühenda veel tootmiskeskkonna andmetootjat marsruudiga ega paku
mitme eraldusvõimega variantide valimist. Läbipaistev Video Bridge'i päringutee
ei põhjusta seetõttu lisatööd, samas kui rentnikuga seotud subjekti tuletamine ja
täielik FU-08 mitme eraldusvõimega elutsükkel jäävad selgesõnaliselt järeltööks,
mitte ei ole dokumenteeritud lõpetatud käitumisena.

Kaadritele luuakse järjestikku kirjeldused konfigureeritud Video mudeliga. Tühi
Video alistus pärib Visioni seadistuse; kui mõlemad on tühjad, valib Visioni
automaatne marsruuter tegeliku nägemisvõimega mudeli. Edukad kirjeldused
asendavad algse osa stabiilse `[Video description:` prefiksiga, mis märgistab
teksti ka ebausaldusväärse, meediast tuletatud vaatlusena ja käsib järgmistel
mudelitel meediast leitud juhiseid mitte järgida. Kaadrikirjelduste vahemälu
võtmed hõlmavad JPEG-baite, viipa, ajatemplit ja tegelikku mudelit; vahemällu
salvestatakse ainult edukad kirjeldused. Vahemälukirjed säilitavad tegeliku
eduka tootjamudeli, sealhulgas varumudeli; sild teatab `mixed`, kui eri kaadrid
on loonud eri mudelid. Vahemälutabamus kasutab seda tootja identiteeti uuesti,
selle asemel et see soovitud marsruutimisplaaniks ümber sildistada. Kogu video
tulemuse vahemälu võti põhineb igal väljundit muutval sisendil — viip, tegelik
mudel, diskreetimispoliitika, kaadrite arv, semantilise analüüsi režiim,
normaliseeritud fookusvihje SHA-256 sõrmejälg, fookusaken, `transcript`,
`audioTranscript` ja kontaktlehe lipp —, seega põhjustab ükskõik millise neist
mõõtmetest muutmine vahemälu möödalasu, mitte aegunud tulemuse taaskasutamise.
Visuaalse duplikaadieemalduse poliitika versioon, lävend ja piiratud
kandidaatkaadrite arv on samuti tulemuse vahemälu võtmes ja metaandmetes
eksplitsiitsed; poliitika muudatus ei saa seetõttu aegunud kogu video kirjeldust
uuesti kasutada. Tulemuse vahemälu v4 metaandmed säilitavad režiimi ja
sõrmejälje, kuid mitte kunagi kasutaja töötlemata ülesannet. Kaitsepiirangute
metaandmed teatavad nii soovitud kui ka tegeliku analüüsirežiimi; soovitud
`focused` režiim ilma kasutatava kasutajatekstita esitatakse tegelikult `full`
režiimina.

Kaitsepiirang eraldab kõik toetatud videoosad, kuid kirjeldab neist kõige rohkem
`modalityBridgeVideoMaxVideos` jagu. Sihtmärgi puhul, mille kohta on tõestatud,
et `supportsVideo === false`, muudetakse nurjunud ja limiiti ületavad videod
eksplitsiitseteks ohututeks tekstimarkeriteks, et töötlemata videot ei säiliks.
Kui võimekus pole teada, säilitavad need osad oma videokandja; mis tahes
varutranskriptsioon läbib eespool kirjeldatud piiratud tekstiteisenduse.
Sihtmärgid, mille puhul `supportsVideo === true`, mööduvad sillast.
Kliendipäringu katkestussignaal levib allalaadimise, vahendaja järjekorra,
alamprotsesside ja kirjelduste loomise kutsete kaudu; katkestused peatavad
töötluse videote vahel ega luba kunagi tõrke korral töötlemata meediat läbi.

Käitusaegsed seadistused on andmebaasipõhised ja Zod-valideeritud:

| Võti                                | Vaikeväärtus | Vahemik / käitumine                                                                                           |
| ----------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`      | Valikuline käituskeskkond, tuleb eraldi lubada                                                                |
| `modalityBridgeVideoAnalysisMode`   | `"full"`     | `full` säilitab üldised subtiitrid; `focused` kasutab piiratud ja ebausaldusväärset uusimat kasutajakonteksti |
| `modalityBridgeVideoModel`          | `""`         | Pärib Vision Bridge'i mudeli                                                                                  |
| `modalityBridgeVideoFrameCount`     | `8`          | 1–16                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`  | `uniform`, `scene_aware` või proportsionaalne `segment_aware`; detektori tõrke korral kasutatakse `uniform`   |
| `modalityBridgeVideoMaxVideos`      | `1`          | 1–4                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`     | 1000–120000 ms                                                                                                |

Püsivalt salvestatud pärandväärtused, mille puhul Video ajalõpp ületab 120 sekundit, piiratakse
vahendaja tähtajaga; uute seadistuste salvestamine üle selle piiri lükatakse tagasi.
`GET /api/modality-bridge/video/runtime` nõuab enne autentimist või käituskeskkonna kontrollimist usaldusväärset, templiga kinnitatud loopback-
lokaalsust ning seejärel haldusautentimist. See tagastab ainult välja `available`,
puhastatud FFmpeg-i/ffprobe'i versioonid ja fikseeritud põhjuse, kui käituskeskkond
pole saadaval. Sisemine ekstraheerimise lõpp-punkt ei ole avalik üleslaadimise API:
järjekorra täitumisel tagastatakse `503` koos päisega `Retry-After`, helistaja
ühenduse katkemisel tagastatakse `499` ja vahendaja fikseeritud tähtaja saabumisel `504`. Teisendatud vastused lisavad
kesksele `x-omniroute-modality-bridge` päisele
`video->text;model=<visionModel>;parts=<videos>`, eemaldamata Visioni või Audio segmente.

### Isikuandmete maskeerija (`piiMasker.ts`)

Töötab **mõlemas** etapis.

- **`preCall`** kloonib andmekoormuse, läbib väljad `system`, `messages`, `input` ja
  `prompt` (sealhulgas lihtteksti kujul elemendid) ning rakendab string-tüüpi
  `content`/`text` väljadele funktsiooni `processPII()` (asukohast
  `@/shared/utils/inputSanitizer`). Kui `PII_REDACTION_ENABLED=true`, redigeeritakse
  tuvastatud isikuandmed väljaminevas andmekoormuses. See ei sõltu muutujast
  `INPUT_SANITIZER_MODE` (mis juhib ainult viipasisestuse poliitikat). Kui
  redigeerimine on välja lülitatud, salvestab väljakutse tuvastamiste arvu
  sisu ümber kirjutamata.
- **`postCall`** süvakloonib vastuse, käivitab funktsiooni `sanitizePIIResponse()` ja
  Responses API kujuga andmete maskeerija (`maskResponsesOutput` — hõlmab välju
  `output_text` ja `output[].content[].text`). Kui toimub redigeerimine,
  asendab muudetud vastus algse vastuse.

Kaitsemehhanism ei blokeeri kunagi; see ainult lisab annotatsioone (`meta.detections`,
`meta.redacted`) või kirjutab sisu ümber.

### Viipasisestus (`promptInjection.ts`)

Tuvastab kasutaja esitatud sisus vaenulikud struktuurid ja jõustab
konfigureeritud poliitika. Käitumist juhivad keskkonnamuutujad ja konstruktori
suvandid:

| Seadistus         | Keskkonnamuutuja                                                                                      | Vaikeväärtus | Mõju                                                                                                                                                                                                          |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lubatud           | `INPUT_SANITIZER_ENABLED`                                                                             | `true`       | Kui väärtus on `false`, lõpetab kaitsemehhanism töö kohe.                                                                                                                                                     |
| Režiim            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`       | Sisestuspoliitika: `block`, `warn` või `log`. (`redact` on tagasiühilduvuse tagamiseks lubatud, kuid see **ei** eemalda sisestusteksti; päringu isikuandmete ümberkirjutamist juhib `PII_REDACTION_ENABLED`.) |
| Blokeerimislävend | Suvand `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`       | Blokeerimiseks nõutav minimaalne raskusaste. Vaikeväärtuse korral on keskmise raskusastmega juhtumid ainult vaatluseks.                                                                                       |

**Režiimi prioriteedijärjestus** (`getMode`): helistaja `options.mode` →
`INJECTION_GUARD_MODE` **andmebaasi funktsioonilipu alistus** (Dashboard → Settings →
Feature Flags) → keskkonnamuutuja `INJECTION_GUARD_MODE` → keskkonnamuutuja `INPUT_SANITIZER_MODE` →
`warn`. Juhtpaneeli alistus on seega keskkonnamuutujatest prioriteetsem, mistõttu
Feature Flagsi kasutajaliides juhib töötavat kaitsemehhanismi reaalajas (taaskäivitamiseta).
Andmebaasist lugemine on tõrkekindel: tõrke korral kasutab kaitsemehhanism
keskkonnamuutujatel põhinevat käitumist ning kui alistust pole määratud, on
käitumine identne ainult keskkonnamuutujatel põhineva väärtuse määramisega.

Tuvastusallikad:

1. Funktsioon `sanitizeRequest()` asukohast `@/shared/utils/inputSanitizer` (mujal
   konveieris kasutatav ühine detektorite kogum).
2. Sisseehitatud `DEFAULT_GUARD_PATTERNS` (praegu `system_override_inline` ja
   `markdown_system_block`, mõlemad raskusastmega `high`).
3. Valikulised `customPatterns`, mis edastatakse konstruktori suvandite kaudu (stringid,
   regulaaravaldised või kirjed kujul `{ name, pattern, severity }`).

Kui `mode === "block"` **ja** vähemalt üks tuvastus vastab raskusastme
lävendile, tagastab `preCall` väärtuse `{ block: true, message: "Request rejected:
suspicious content detected" }`. Režiimides `warn`/`log` kirjutab kaitsepiire
logisse, kuid lubab väljakutse. Jagatud abifunktsioon `evaluatePromptInjection()` on samuti
eksporditud nende väljakutsujate jaoks, kes peavad viipasid hindama registrit läbimata.

**Skannimispiirang (v3.8.20):** tuvastaja kontrollib ühendatud viibatekstist ainult
**esimest 16 KB** — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baiti) failis
`src/shared/utils/inputSanitizer.ts`. Nii `detectInjection()` kui ka
`evaluatePromptInjection()` kasutavad enne mustritsükli käivitamist
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Süstimisjuhised asuvad sisendi alguse lähedal,
seega piirab see regulaaravaldiste CPU-/GC-kasutust mitmesaja KB suuruste
andmemahtude puhul, vähendamata tuvastuse tõhusust (vrd #3932, #4041).

### Mandaatide maskeerija (`credentialMasker.ts`)

Käitatakse **mõlemas** etapis ja vaikimisi ahelas viimasena (prioriteet `95`).
See peidab väljaminevast andmemahust (sõnumi sisu, tööriistaväljakutsete argumendid,
tööriistade tulemused) **ja** teenusepakkuja vastusest tuntud API-võtmete /
salajaste tõendite mustrid, et viipa kleebitud mandaadid (või tööriista tulemuses
tagastatud mandaadid) ei lekiks ülesvoolu teenusepakkujale ega tagasi kliendile.

- **Ainult lubamisel**, sama põhimõte nagu isikuandmete peitmisel (range reegli
  #20 lähedane): keelatud, välja arvatud juhul, kui
  `settings.credentialRedactionEnabled === true` **või**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kui see on välja lülitatud, ei tee kaitsepiire
  midagi — see ei blokeeri ega kirjuta kunagi andmeid ümber.
- `redactCredentials()` läbib kogu andmemahu/vastuse puu (`walkValue()`,
  prototüübireostuse eest kaitstud, tsükliohutu tänu `WeakSet`-ile) ning asendab
  vasted kohatäitjaga `[REDACTED:<type>]`, kloonides ainult tegelikult muutunud
  harud.
- `CREDENTIAL_PATTERNS` hõlmab LLM-teenusepakkujate võtmeid (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-tõendeid (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksevõtmeid (Stripe, Square), pilveteenuste
  võtmeid (AWS-i juurdepääsuvõti, Twilio, SendGrid, Mailgun), privaatvõtmeid /
  JWT-sid, mandaate sisaldavaid ühendusstringe (`mongodb://user:pass@...` jne) ja
  üldist `Authorization`/`x-api-key`/`api-key`/`apikey` päiseväärtuse
  mustrit. Päisekujuliste võtmete (`authorization`, `x-api-key`, `api-key`,
  `apikey`) puhul peidetakse väärtus struktuurselt (ainult väärtus, skeemi prefiks,
  nagu `Bearer `/`Basic `, säilitatakse), mitte üldise tekstilise regulaaravaldise
  kaudu.
- Kaitsepiire ei blokeeri kunagi; see ainult kirjutab ümber (`modifiedPayload` /
  `modifiedResponse`) ja lisab metaandmed (`meta.credentialsRedacted`, `meta.count`).

Regressioonikaitse: `tests/unit/credential-masker-guardrail.test.ts`.

## Baasleping (`base.ts`)

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
  block?: boolean; // true katkestab ahela kohe
  message?: string; // kuvatakse blokeerimisel
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // tagastatakse preCall poolt päringu ümberkirjutamiseks
  modifiedResponse?: TValue; // tagastatakse postCall poolt vastuse ümberkirjutamiseks
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

Kaitsepiire annab „muudatus puudub” märku, tagastades kas `void`, `{}` või
`{ block: false }`. Väärtuse `modifiedPayload`/`modifiedResponse` tagastamine asendab
ahelas allavoolu kaitsepiiretele edastatava väärtuse.
`signal?: AbortSignal` edastab kutsuja elutsükli kaitsepiiretesse. Päringu katkestamine on tahtlik tõrke korral jätkamise erand: meediasillad peatavad töö ja puhastavad ressursid, taastamata töötlemata meediat sihtkohale, mis teadaolevalt seda ei toeta.

## Register (`registry.ts`)

Üksikeksemplar `guardrailRegistry` võimaldab järgmist:

- `register(guardrail)` — lisab kaitsepiirde (või asendab selle normaliseeritud nime alusel) ja
  sordib uuesti kasvava `priority` järgi.
- `clear()` / `list()` — haldusabimeetodid.
- `runPreCallHooks(payload, context)` — läbib aktiivsed kaitsepiirded, edastab
  lasti läbi `modifiedPayload` ja peatub esimese `block: true` korral.
- `runPostCallHooks(response, context)` — sama voog vastuse poolel.
- `resetGuardrailsForTests({ registerDefaults })` — tühjendab oleku ja soovi korral
  registreerib vaikeseaded uuesti, et tagada testide puhas isoleeritus.

Mõlemad käitajad tagastavad `{ blocked, payload|response, results, guardrail?, message? }`,
kus `results` on kirjete `GuardrailExecutionResult` massiiv, mis sisaldab
iga kaitsepiirde välju `blocked`, `skipped`, `modified`, `error` ja `meta`,
mis on kasulikud jälitamiseks.

### Kaitsepiirete keelamine päringupõhiselt

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` koondab
duplikaatideta loendi kaitsepiirete nimedest, mis tuleb praeguse
päringu puhul vahele jätta. Allikad (kõik valikulised, kõik ühendatakse):

- `apiKeyInfo.disabledGuardrails`
- Päringu keha `disabledGuardrails` (tipptasemel)
- Päringu keha `metadata.disabledGuardrails`
- Päis `x-omniroute-disabled-guardrails` (või pärandvormingus
  `x-disabled-guardrails`)

Väärtused võivad olla stringide massiivid või komadega eraldatud string; nimed
normaliseeritakse väiketähtedega kebab-kirjapilti (`pii_masker` → `pii-masker`). Tulemus
edastatakse registrile `context.disabledGuardrails` kaudu, mis jätab
sobivad kaitsepiirded vahele (`skipped: true` väljal `results`).

## Käivitusjärjekord

Iga päringu puhul, mis liigub läbi `src/sse/handlers/chat.ts` ja
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` koostab API võtme, päringu keha ja päiste
   põhjal vahelejäetavate kaitsepiirete loendi.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` käivitab kaitsepiirded prioriteedi
   kasvavas järjekorras:
   - Keelatud kaitsepiirded märgitakse olekuga `skipped`.
   - Iga kaitsepiirde `preCall` võib `modifiedPayload` kaudu andmekoormuse ümber kirjutada.
   - Esimene `block: true` katkestab ahela ja töötleja tagastab
     kaitsepiirde tagasilükkamisvastuse.
3. (Võimalikult ümber kirjutatud) andmekoormus liigub kombineeritud marsruutimise ja
   ülesvoolu saatmise etappi.
4. Pärast vastuse koostamist käivitab `guardrailRegistry.runPostCallHooks(...)`
   vastuse jaoks sama ahela. Siinne `block: true` kõrvaldab ülesvoolu
   vastuse.

Erindi visanud kaitsepiirded registreeritakse kujul `error: <message>` ja logitakse
`logger.warn` kaudu, kuid ahela täitmine jätkub — see on kavandatud tõrke korral lubama.

## Konfiguratsioon

Sisseehitatud kaitsepiirete loetavad keskkonnamuutujad:

| Muutuja                               | Kasutaja                 | Mõju                                                                                                    |
| ------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Tuvastamise täielikuks keelamiseks määrake väärtuseks `false`.                                          |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Süstimise poliitika: `warn`, `block` või `log`. Pärandväärtus `redact` ei kirjuta süstimisteksti ümber. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Süstimiskaitse režiim; ühtlasi DB funktsioonilipp, mis **alistab** keskkonnamuutujad (DB > ENV).        |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Minimaalne raskusaste, mille `MODE=block` tagasi lükkab: `high` (vaikimisi), `medium` või `low`.        |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Muutuja `INPUT_SANITIZER_BLOCK_THRESHOLD` pärandalias.                                                  |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | Kui väärtus on `true`, redigeeritakse päringu isikuandmed (süstimisrežiimist sõltumatult).              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (allavoolu) | Juhib vastusepoolse maskeri käitumist.                                                                  |

Modality Bridge'i kaitsepiirded loevad käitusaegset konfiguratsiooni DB-põhisest
sätete hoidlast (`getSettings()`), mitte keskkonnamuutujatest. Visioni peamised võtmed on
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ja
`modalityBridgeCacheMaxEntries`. Pärandvõtmeid
`visionBridge*` aktsepteeritakse ainult dokumenteeritud ühe tsükli pikkuse lugemise
varuvariandina; juhtpaneel kirjutab peamistesse võtmetesse. Vaikeväärtused ja varuvariandi
lahendaja asuvad failis `src/shared/constants/modalityBridgeDefaults.ts`, pärand-
konstandid on säilitatud failis `src/shared/constants/visionBridgeDefaults.ts`.

Audio kasutab võtmeid `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ja `modalityBridgeAudioMaxClips` ning lisaks jagatud
`modalityBridgeCache*` sätteid. Audiol puudub pärandvõtmete varuvariant, sest need
võtmed võeti kasutusele koos Modality Bridge'i skeemiga.

Video kasutab võtmeid `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ja
`modalityBridgeVideoTimeout` ning lisaks jagatud `modalityBridgeCache*` sätteid.
See on vaikimisi keelatud, sest FFmpeg/ffprobe on valikulised käituskeskkonna
sõltuvused ning kaadrite kirjeldamine lisab viivitust ja mudeli kasutamise kulu.

## Kohandatud kaitsepiirded

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

Sammud:

1. Looge `src/lib/guardrails/myGuardrail.ts`, mis laiendab klassi `BaseGuardrail`.
2. Rakendage `preCall` ja/või `postCall`.
3. Registreerige kas importimise ajal (lisage funktsioonist `registerDefaultGuardrails`) või
   kutsuge käitusajal välja `guardrailRegistry.register(...)` — register asendab
   kõik varasemad sama normaliseeritud nimega kaitsepiirded.
4. Lisage testid kataloogi `tests/unit/` (olemasolevad näited:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testimine

Kasutage testide vahel funktsiooni `resetGuardrailsForTests()`, et alustada teadaolevast olekust.
Tühja registriga alustamiseks edastage `{ registerDefaults: false }` ja
registreerige ainult testitavad kaitsepiirded. Vision Bridge toetab sõltuvuste
sisestamist (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge pakub
samaväärseid liideseid seadete, võimekuste, STT-mudeli valimise, mandaatide
kontrollimise ja transkribeerimise jaoks. Seega saavad testid kontrollida mõlemat
voogu ilma andmebaasi- või võrgujuurdepääsuta.

## Vaadake ka

- `src/lib/guardrails/` — teostus
- `src/shared/utils/inputSanitizer.ts` — ühine tuvastaja, millel põhinevad
  promptisüsti tuvastamine ja isikuandmete maskeerimine
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge'i vaikeväärtused ja
  sunnitud sillaga mudelite loend
- `src/shared/constants/modalityBridgeDefaults.ts` — Visioni/Audio ühised käitusaja vaikeväärtused
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonaalne kiht (kaitselüliti, ooteajad)
- `docs/reference/ENVIRONMENT.md` — keskkonnamuutujate täielik teatmik

## Süstikaitse marsruutide katvus ja red-team-testimine (8. etapp · plokk D)

Süstikaitse (`createInjectionGuard` / `withInjectionGuard`) hõlmab kõiki marsruute,
mis võtavad vastu kasutaja prompte. See järgib muutujat `INJECTION_GUARD_MODE` (vaikimisi `warn` = ainult logimine;
`block` = tagastab HTTP 400 `SECURITY_001`).

| Tüüp               | Marsruudid                                                                                                                                           | Vaikerežiim |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Tekst (olemasolev) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn        |
| Genereeriv         | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn        |
| Andmed             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn        |

Teksti eraldamine (`extractMessageContents`) hõlmab välju `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team-testimine (igal ööl, `nightly-llm-security.yml`):** promptfoo kontrollib, et iga marsruut blokeeriks
OWASP-LLM-i korpuse režiimis `INJECTION_GUARD_MODE=block`; garak käitab sonde (jäetakse saladuse puudumisel vahele).
`moderations` on järjepidevuse huvides kaasatud — plokirežiimi operaatorid saavad selle funktsiooni
`resolveDisabledGuardrails` kaudu erandiks määrata.

Igaöisel töövoolel (`.github/workflows/nightly-llm-security.yml`, cron + käsitsi
käivitamine) on kaks tööd:

- **`promptfoo-guard` (blokeeriv)** — käitab käsku `promptfoo eval -c promptfooconfig.yaml`
  režiimiga `INJECTION_GUARD_MODE=block`. Iga ründejuhtum (nt „ignoreeri kõiki
  varasemaid juhiseid…“, DAN-stiilis turvapiirangutest möödahiilimised) kontrollib, et vastus sisaldaks
  `error.code === "SECURITY_001"`, st et kaitse lükkas päringu tegelikult tagasi.
- **`garak` (nõuandev)** — käitab garakit võtmega `--probes promptinject,dan,leakreplay`
  kohaliku OmniRoute'i eksemplari (`http://localhost:20128/v1`) suhtes. Käivitamine sõltub
  teenusepakkuja saladusest (`PROMPTFOO_PROVIDER_KEY`); selle puudumisel jäetakse töö korrektselt vahele ja sellele on lisatud
  `|| true`, mistõttu esitatakse aruanne ilma CI-d nurjamata.

Kaitse abifunktsiooni (`createInjectionGuard` / `withInjectionGuard`)
katvus hõlmab kõiki prompte kandvaid `/v1` marsruute; prompti tekst võetakse väljadest
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` funktsiooniga
`extractMessageContents()` failis `src/shared/utils/inputSanitizer.ts`.
