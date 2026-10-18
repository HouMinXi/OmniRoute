# Guardrails (Gaeilge)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Foinse na fírinne:** `src/lib/guardrails/`
> **Nuashonraithe is déanaí:** 2026-08-29 — v3.8.51 (Is é an glaoiteoir a dhearbhaíonn bunús thras-scríbhinn Video Bridge,
> níl sé fíoraithe ag an bhfreastalaí fós — soiléirithe de réir #11661)

Forfheidhmíonn ráillí cosanta sábháilteacht, polasaí, agus claochluithe ábhair ag an teorainn idir OmniRoute agus soláthraithe in aghaidh an tsrutha. Is féidir le gach ráille cosanta pálastaí iarratais (`preCall`) agus freagraí in aghaidh an tsrutha (`postCall`) a iniúchadh (agus, de rogha air sin, diúltú dóibh, iad a chlaochlú, nó nótaí a chur leo).

Is córas **teip-oscailte** é: má chaitheann ráille cosanta earráid le linn forghníomhaithe, déanann an chlárlann an earráid a thaifeadadh agus leanann sí ar aghaidh leis an gcéad ráille cosanta eile in ionad teip a chur ar an iarratas. Is cinneadh sainráite é blocáil (`block: true`), ní tharlaíonn sé de thaisme riamh.

## Ráillí Cosanta Insuite

Lódálann an chlárlann sé ráille cosanta go huathoibríoch in ord tosaíochta tráth iompórtála
(féach `registry.ts` → `registerDefaultGuardrails()`):

| Tosaíocht | Ainm                | Céim(eanna)    | Comhad                |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ritheann uimhreacha tosaíochta níos ísle **ar dtús**.

### Droichead Amhairc (`visionBridge.ts`) — Droichead Módúlachta PR-1

Idircheapann sé iarratais ina bhfuil íomhánna agus atá dírithe ar **mhúnlaí nach dtacaíonn le fís**, agus déanann sé ceann amháin den dá rud: atreoraíonn sé an t-iarratas iomlán chuig múnla atá in ann fís a phróiseáil, nó cuireann sé tuairiscí téacs arna dtáirgeadh ag múnla amhairc inchumraithe in ionad na gcodanna íomhá roimh an nglao réamhtheachtach. Ligeann sé seo do sholáthraithe téacs amháin pálastaí ilmhódacha a láimhseáil go trédhearcach.

Sreabhadh:

1. Scipeáil má thacaíonn an spriocmhúnla le fís cheana féin (mura bhfuil sé ar an
   liosta droichid éigeantaigh `isVisionBridgeForcedModel`).
2. Bain na codanna íomhá amach trí `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), a tharmligeann chuig an **mbrathadóir meán
   aontaithe** `detectMediaParts()` in `open-sse/utils/mediaParts.ts` — an
   t-aon fhoinse fhírinne atá comhroinnte leis an scagaire comhoiriúnachta
   teaglama. Tá an bhaint teoranta, trí liosta ceadaithe, do chodanna
   barrleibhéil de na cruthanna is féidir le `replaceImageParts` a chur ar ais
   (an conradh bainte↔athsholáthair): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"`, agus Responses API
   `input_image`. Is ábhar don scagaire teaglama iad amas neadaithe agus
   cruthanna táscaire amháin, agus ní bhaintear amach riamh iad.
   Scipeáil mura bhfaightear aon cheann.
3. Réitigh cumraíocht ama rite trí `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): bíonn forlámhas ag na
   heochracha socruithe nua `modalityBridge*`; fanann na heochracha oidhreachta
   `visionBridge*` mar **chúltaca aon timthrialla** (fuinneog aischéimnithe).
   Scipeáil roimh aon trasnú meán nuair atá an droichead díchumasaithe.
4. Cinneann an roghnóir móid (`modalityBridgeVisionMode`, féach an tábla thíos)
   idir atreorú agus cur síos. Filleann atreorú `modifiedPayload` gan ach `model`
   malartaithe, mar aon le meiteashonraí `{ rerouted, fromModel, toModel, imagesKept }`.
5. Conair an chur síos: teorannaigh na híomhánna ag `maxImages`, cum an leid atá
   feasach ar an tasc, téigh i gcomhairle le taisce na dtuairiscí, glaoigh ar an
   múnla amhairc **go comhthreomhar** (`Promise.allSettled`), agus insteall
   codanna téacs `[Image N]: <description>` ina n-áit. Tugann cur síos teipthe
   `null` agus **caomhnaítear** an bhunchuid íomhá (#4012) — ach amháin ar
   chonair tuairisce an teaglama nuair a theip ar gach cur síos; sa chás sin,
   faigheann córas réamhtheachtach deimhnithe nach dtacaíonn le fís stub
   `(unavailable — no vision-capable provider connected)` ina ionad (#8430).
6. Fill `modifiedPayload` + meiteashonraí (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Roghnóir móid (`modalityBridgeVisionMode`)

| Mód        | Réamhshocrú | Iompar                                                                                                                                                                                                                                                                                                                                          |
| ---------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Heorastúil oidhreachta, gan athrú (#6640/#7204): atreoraítear múnlaí nach teaglama iad/múnlaí `auto/` chuig an múnla amhairc is fearr mura bhfuil dintiúir inúsáidte ag an mbunmhúnla cheana féin (ansin déantar cur síos); déantar cur síos i gcónaí do spriocanna teaglama.                                                                   |
| `describe` |             | Déan cur síos i gcónaí — scipeáiltear an bloc atreoraithe go hiomlán; is é an múnla a roghnaigh an t-úsáideoir a fhreagraíonn i gcónaí.                                                                                                                                                                                                         |
| `reroute`  |             | Cuir atreorú i bhfeidhm: seachnaítear an ráille chun an múnla a bhfuil dintiúir aige a choinneáil. Tá feidhm fós ag ráille dhintiúir **sprioc** an atreoraithe — nuair nach bhfuil aon sprioc amhairc inúsáidte ann, téann an t-iarratas ar aghaidh chuig cur síos ionas nach sroichfidh íomhánna amh inneall droma téacs amháin riamh (#8430). |

Déanann móid éigeantacha gearrchiorcadú **sula** ritear an heorastúil uathoibríoch; tá iompar `auto`
comhionann beart ar bheart le hiompar an ráille chosanta roimh PR-1.

#### Scóip eochrach API (`visionBridgeKeyScope.ts`)

Nuair a chuireann eochair API an ghlaoiteora srianta ar `allowedConnections`, ar chomhthiomsuithe cuóta
(`allowedQuotas`) nó ar mhúnlaí (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), ní roghnaíonn an droichead
ach múnlaí atreoraithe agus tuairisce ar féidir leis an eochair iad a úsáid, ar naisc ar féidir leis an eochair
iad a úsáid. Ansin téann an glao tuairisce i gcónaí tríd an bhféinlúb OmniRoute leis
an gceanntásc `x-omniroute-self-loop-key-id`, ionas go bhforfheidhmeoidh an t-iarratas comhrá glactha
polasaí na heochrach sin maidir le naisc agus múnlaí arís. Ní thugann `enforceApiKeyPolicy()`
aitheantas don cheanntásc sin ach amháin in éineacht leis an dearbhán féinlúibe, mar sin ní féidir leis
ach rochtain a chúngú, agus diúltaítear d'aitheantas nach féidir a réiteach.

Mura gceadaítear aon mhúnla amhairc don eochair, seasann conair an chur síos i leataobh agus
téann an t-iarratas tríd gan athrú, an t-iompar teip-oscailte céanna agus a bhíonn ag ráille cosanta díchumasaithe
(meiteashonraí `{ skipped: true, reason: "no_permitted_vision_model" }`).
Iompraíonn iarratais gan eochair, agus eochracha gan na srianta seo, díreach mar
a rinne siad roimhe seo.

#### Leid tuairisce atá feasach ar an tasc (`modalityBridgeVisionTaskAware`)

Réamhshocrú **true**. Cuireann `composeVisionPrompt()` (`visionBridgeHelpers.ts`) téacs na **teachtaireachta úsáideora deireanaí** (giorraithe go 500 carachtar) leis an leid bhunúsach tuairiscithe, rud a threoraíonn an tuairisc i dtreo an mhéid a d'iarr an t-úsáideoir i ndáiríre (patrún codex-vision-proxy) agus a iarrann ar an tsamhail fís téacs infheicthe a thras-scríobh. Agus an bhratach múchta — nó mura bhfuil téacs úsáideora ann — úsáidtear an leid bhunúsach gan athrú.

Iarrann iarratas OpenAI-chomhoiriúnach lúb fhéin an tuairiscithe féin (`callVisionModelSingle()`
in `visionBridgeHelpers.ts`) `image_url.detail: "high"` i gcónaí —
gan choinníoll, do gach glaoiteoir/soláthraí, agus gan é a bheith faoi réir aon chomhartha cliaint.
Díghrádaíonn sampláil mhionsonraí ísle cruinneas OCR don tasc tras-scríofa téacs go díreach
a iarrann an leid seo, mar sin iarrann an glao tuairiscithe féin ardleibhéal
mionsonraí i gcónaí, beag beann ar an leibhéal mionsonraí a d'úsáid an t-iarratas isteach bunaidh. Ní
théann sé seo i bhfeidhm ach ar chorp inmheánach an iarratais tuairiscithe; ní athraíonn sé an chaoi a
gcuireann OmniRoute `image_url.detail` an ghlaoiteora féin ar aghaidh ar an bpríomhiarratas —
cuirtear an réamhshocrú sin i bhfeidhm ar leithligh, agus do chliaint OpenCode braite amháin, in
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Níl réimse `detail`
ag brainse sreangfhormáid Anthropic de lúb fhéin an tuairiscithe agus níl tionchar ag ceachtar
réamhshocrú air.

#### Uasteorainn aschuir an tuairiscithe (`modalityBridgeVisionMaxChars`)

| Eochair                        | Réamhshocrú | Raon             |
| ------------------------------ | ----------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` nó 100–50000 |

Ciallaíonn `0` (réamhshocrú) **gan uasteorainn** — cuirtear an tuairisc a thugann
`callVisionModel()` ar aghaidh gan mhodhnú, ag caomhnú an iompair reatha.
Giorraíonn aon luach sa raon 100–50000 an tuairisc le hiarmhír
`…` sula splicítear ar ais í mar `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`).
Ardaigh é seo do thascanna OCR ardtsonraí ina dteastaíonn ón tsamhail iartheachtach an
tras-scríobh iomlán; ísligh é chun teorainn a chur le húsáid comharthaí ar shamhlacha fís foclacha.
Tá réimse an deais ar phainéal Advanced den chluaisín Vision
(`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) agus cuireann sé aon
luach idir 1 agus 99 suas go dtí an t-íosluach 100, agus fágtar `0`
sainráite gan teagmháil — is luach bailí Zod ann féin é `0`
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ní hé amháin
an réamhshocrú "gan socrú".

#### Taisce tuairiscithe (`modalityBridge/bridgeCache.ts`)

Taisce LRU + TTL sa chuimhne le haghaidh aschuir tuairiscithe, comhroinnte ar fud an phróisis.
Eochair = `sha256(imageRef + composedPrompt + configuredBridgeModel)` le
frámú réimír faid (gan imbhuailtí teorainneacha réimse). Is í an chomhpháirt samhla an tsamhail droichid
**chumraithe**, ní an tsamhail a d'fhreagair i ndáiríre —
d'fhéadfadh `callVisionModel` titim siar go hinmheánach, agus dhéanfadh eochrú in aghaidh na hiarrata
an taisce a dheighilt. Ní chuirtear tuairiscithe ar theip orthu i dtaisce riamh. Socruithe:

| Eochair                         | Réamhshocrú | Raon    |
| ------------------------------- | ----------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`      | —       |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000 |

#### Normalú cianíomhánna (tuairisciú lúb fhéin/aisghabháil base64)

Nuair a fhaigheann an droichead íomhá **chianda** é féin — féinghlao tuairiscithe
Anthropic agus tiontú base64 sreangfhormáid claude
(`ensureBase64ImagesForClaudeWire`), araon trí
`fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — seoltar URI na sonraí a bhíonn mar
thoradh air trí `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) sula leabaítear é san iarratas ar an tsamhail fís.
Laghdaítear íomhánna rómhóra go dtí **ciumhais fhada 2048px** (ag teacht leis
an uasteorainn athmhéadaithe a chuireann OpenAI/Anthropic i bhfeidhm ar thaobh an fhreastalaí cheana féin), rud a laghdaíonn
bearta/folaigh uaslódála gan an méid a fheiceann an tsamhail fís a athrú. Úsáideann an t-athrú méide
`sharp`, arna lódáil trí iompórtáil dhinimiciúil: ar ardán nach féidir a dhénártha dúchais
a lódáil, **ní chaitheann** `normalizeDataUri()` earráid choíche — titeann sé siar
go dtí na bearta bunaidh a chur ar aghaidh gan athrú, ionas go leanann an chonair
tuairiscithe/tiontaithe base64 ag obair i gcónaí. Cuirtear bearta nach íomhánna iad (aisghabháil nár thug
íomhá indíchódaithe ar ais) ar aghaidh gan teagmháil freisin. Tá an normalú seo
teoranta d'íomhánna a fhaigheann an droichead dá fhéinghlao féin — ní chuirtear i bhfeidhm riamh é
ar phálasta amh an ghlaoiteora a chuirtear ar aghaidh, i gcomhréir leis an bprionsabal sócháin
rogha isteach amháin (Riail Dhocht #20).

#### Scéimre socruithe + imirce

Déantar na heochracha nua `modalityBridge*` a bhailíochtú le Zod in `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, an tríréad `modalityBridgeCache*`, agus an
grúpa `modalityBridgeAudio*` a úsáideann an Audio Bridge. Cóipeálann imirce
`141_modality_bridge_settings.sql` luachanna oidhreachta `visionBridge*`
atá ann cheana chuig na heochracha nua comhfhreagracha (idéimpitéinseach, ní fhorscríobhann sí riamh
luach `modalityBridge*` atá socraithe ag oibreoir); glactar leis na heochracha oidhreachta fós mar
chúltaca léite ar feadh timthriall eisiúna amháin.

#### Ceanntásc trédhearcachta + staitisticí

Bíonn an méid seo a leanas ar fhreagraí arna gclaochlú trí thuairisciú:
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(tógtha ag `buildModalityBridgeHeader()` in `modalityBridge/bridgeStats.ts`,
stampáilte ag `withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`).
Ní fhaigheann iarratais a atreoraíodh **aon** cheanntásc — níor athraíodh an pálasta agus
tá babhtáil na samhla le feiceáil cheana féin i réimse `model` chorp an fhreagra.

Tugann `GET /api/modality-bridge/stats` (fíordheimhniú bainistíochta, an tsraith chéanna le
`GET /api/settings`) na cuntair in-chuimhne de réir módúlachta
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` ar ais do `vision`, `audio`, agus
`video`. Úsáideann `averageLatencyMs` `latencySamples`, seachas gach iarracht, mar
ainmneoir; ní chruthaíonn oibríocht gan tomhas ama sampla bréige de náid milleasoicind.
Fanann `bridged` mar an ailias atá comhoiriúnach siar le haghaidh tiontuithe
rathúla; ní mhéadaíonn iarrachtaí teipthe é.
Athshocraítear na cuntair ar atosú an phróisis de réir dearaidh
(teiliméadracht, ní cuntasaíocht).

#### Cumraíocht an deais

Is é
`/dashboard/settings/modality-bridge` an leathanach tiomnaithe deais. Caomhnaíonn a chluaisíní
`Vision`, `Audio`, agus `Video`, ar féidir seoladh URL a dhéanamh orthu, paraiméadair iarratais
agus iad ag athrú luach `tab`.
Nochtann an cluaisín Vision cumasú, mód, roghnú samhla (lena n-áirítear an réamhshocrú
uathoibríoch), leid atá feasach ar thascanna, ardteorainneacha ama/íomhá/fad tuairisce/taisce,
cuntair ama rite, agus iarratas samplach cosanta. Tá an cluaisín Audio beo freisin: nochtann sé
cumasú, roghnóir samhla STT amháin le Auto, teorainneacha ama/fad uasta gearrthóige, cuntair
fuaime, agus tástáil shamplach `input_audio`. Tá an cluaisín Video feidhmiúil: tuairiscíonn sé
staid ama rite FFmpeg/ffprobe — ceann de cheithre staid shoiléire UI (`unknown` fad atá
an taiscéalaí ar bun nó murarbh fhéidir é a chríochnú, `restricted` ar óstach deais nach
óstach lúb-ais é, áit a scipeáiltear an taiscéalaí ar thaobh an chliaint, `unavailable` tar éis
taiscthe agus deimhniú go bhfuil sé ar iarraidh, nó `available` le leaganacha FFmpeg/ffprobe) —
buanaíonn sé teorainneacha cumasaithe/samhla/fráma/físe/ama, scagann sé an roghnóir samhla chuig
samhlacha atá ábalta ar fhís, agus nochtann sé cuntair físe.

Is nasc comhoiriúnachta chuig an leathanach nua é an seanchárta Vision Bridge faoi shocruithe AI;
níl an dara cóip den fhoirm faoina chúram a thuilleadh. Nascann Media Providers sreafaí oibre
Image-to-Text agus Speech-to-Text leis na cluaisíní comhfhreagracha Modality Bridge freisin gan
an clós súgartha Speech-to-Text atá ann cheana a bhaint.

**Seachbhóthar iontrála féin-lúibe:** nuair a théann an glao tuairisce trí
fhéin-lúb `/v1` OmniRoute féin (samhail soláthraí neamhchaighdeánach), seolann an fo-iarratas
`x-omniroute-admission-bypass: internal` agus déantar é a fhíordheimhniú leis an dintiúr
féin-lúibe réitithe — an comhartha áitiúil `sk_omniroute` sa mhód áitiúil, nó eochair timpeallachta
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` arna cumrú ag an oibreoir (#1350), ionas gur féidir le
húsáidí `REQUIRE_API_KEY=true` an glao tuairisce a rith fós. Ní thugtar aitheantas don
seachbhóthar ach amháin i gcás na ndintiúr cruinn sin, mar sin ní féidir le cliaint sheachtracha
an ceanntásc a úsáid chun iontráil a scipeáil.

Tá na réamhshocruithe oidhreachta in `src/shared/constants/visionBridgeDefaults.ts`; tá na
réamhshocruithe nua móid/feasachta ar thascanna/taisce agus an réiteoir socruithe in
`src/shared/constants/modalityBridgeDefaults.ts`. Nochtann an ráille cosanta rogha cruthaitheora
`deps` ionas gur féidir le tástálacha cur chun feidhme bréige de `getSettings` agus
`callVisionModel` a instealladh.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Idircheapann sé iarratais chomhrá ina bhfuil fuaim sula sroicheann siad sprioc nach eol go
nglacann sí le hionchur fuaime. Ní athródálann sé an t-iarratas comhrá riamh: déantar
tras-scríobh ar chodanna fuaime tríd an gcríochphointe ilpháirteach atá ann cheana agus atá
comhoiriúnach le OpenAI, agus leanann an tsamhail chomhrá roghnaithe ar aghaidh le tras-scríbhinní
téacs.

Sreabhadh:

1. Réitigh `supportsAudio` trí `getResolvedModelCapabilities()`. Tá tosaíocht ag meiteashonraí
   follasacha ó chlárlann an tsoláthraí, ansin meiteashonraí statacha na samhla, agus ansin
   `modalities_input` sioncronaithe. Is é `false` liosta ionchuir fógartha gan `audio`; mura
   mbíonn aon fhianaise chumais ann, fanann sé mar `null`. Gníomhachtaíonn `false` agus `null`
   araon an droichead coimeádach, agus seachnaíonn `true` é.
2. Réitigh socruithe `modalityBridgeAudio*` agus bain codanna fuaime barrleibhéil inspléise
   as gach teachtaireacht tríd an mbrathadóir comhroinnte `detectMediaParts()`.
   Is iad OpenAI `input_audio`, `audio_url`, agus `source.media_type: "audio/*"` na cruthanna
   sreinge a dtacaítear leo. Braitear fuaim neadaithe le haghaidh ródaithe ach ní bhaineann
   an chonair spléise amach í. Cuirtear teorainn leis an obair trí
   `modalityBridgeAudioMaxClips`; fágtar codanna níos déanaí gan athrú.
3. Urramaigh `provider/model` cumraithe, nó lig do `selectAudioBridgeModel()` siúl trí
   `AUDIO_TRANSCRIPTION_PROVIDERS` in ord catalóige cobhsaí agus an chéad samhail a bhfuil
   dintiúr soláthraí gníomhach inúsáidte aici a roghnú.
4. Tiontaíonn `callAudioTranscription()` fuaim base64/data-URI ina `file` ilpháirteach, nó
   íoslódálann sé `audio_url` cianda tríd an gcosaint amach poiblí amháin le feannadh DNS agus
   teorainn 25 MB. Ansin déanann sé POST den chomhad agus den tsamhail roghnaithe chuig an
   bhféin-lúb áitiúil `/v1/audio/transcriptions`, arna fhíordheimhniú le
   `resolveSelfLoopBearer()`. Déanann an bealach tras-scríofa atá ann cheana gnáthchuardach
   dintiúr, láimhseáil fuaraithe/teorannaithe ráta, agus seoladh chuig an soláthraí.
5. Cuirtear `[Audio N]: <transcript>` in ionad a gcodanna i gcás glaonna rathúla. Ritheann
   glaonna le `Promise.allSettled`: caomhnaíonn teip aonair an bhunchuid fuaime sin (conradh
   #4012). Má theipeann ar gach glao agus má tá sé cruthaithe gur
   `supportsAudio === false` don sprioc, déantar
   `[Audio N]: (unavailable — no STT provider connected)` de na codanna (conradh #8430).
   I gcás sprioc anaithnid (`null`), fágtar an toradh gan athrú má theipeann ar gach glao.
   Faigheann sprioc atá cruthaithe mar sprioc téacs amháin agus nach bhfuil aon dintiúr STT
   inúsáidte aici an bonnán follasach céanna gan glao líonra a eisiúint.

Úsáideann tras-scríbhinní rathúla taisce LRU/TTL Modality Bridge ar fud an phróisis.
Comhcheanglaíonn an eochair an tagairt fuaime, an lipéad cobhsaí oibríochta
`audio-transcription`, agus an tsamhail STT roghnaithe; ní chuirtear teipeanna i dtaisce riamh.
Nuashonraíonn iarrachtaí fuaime na cuntair chomhroinnte `bridged`, `cacheHits`, `failures`, agus
`lastUsedAt`. Iompraíonn freagraí claochlaithe
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; ní fhaigheann iarratais
gan athrú mír Audio Bridge.

Tá socruithe ama rite tacaithe ag an DB agus bailíochtaithe ag Zod:

| Eochair                       | Réamhshocrú | Raon                   |
| ----------------------------- | ----------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —                      |
| `modalityBridgeAudioModel`    | `""`        | Uathoibríoch nó ID STT |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10                   |

Tá an taisce chomhroinnte fós á rialú ag `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, agus `modalityBridgeCacheMaxEntries`.

### Droichead Físe (`videoBridge.ts`, `videoBridgePipeline.ts`)

Idircheapann sé codanna físe barrleibhéil i `messages` de chuid Chat Completions agus in
`input` de chuid Responses API sula nglaoitear ar sprioc nach eol go bhfuil tacaíocht
dhúchasach físe aici. Is iad na cruthanna a dtacaítear leo ná `input_video`,
`video_url`, `video_source`, URLanna HTTPS, agus URIanna sonraí
`data:video/*;base64,...`. Ní láimhseáiltear gnáthainmneacha comhaid i dtéacs
mar fhíseáin.

Is le `VideoBridgeGuardrail.preCall` (`videoBridge.ts`) trasnú na hiarrata,
an tseiceáil cumais/beartais, comhiomlánú de réir iarrata, agus pálasta an
fhreagra. Tá obair de réir físe — fáil, taisce an toraidh iomláin, cur síos ar
sheicheamh frámaí (a chomhcheanglaíonn aon tras-scríbhinn fuaime atá dearbhaithe
ag an nglaoiteoir), agus méadracht/tobscoradh/glanadh de réir iarrachta — folaithe
taobh thiar de `processVideoPart` in `videoBridgePipeline.ts`, a ghlaoitear uair
amháin do gach cuid físe laistigh de lúb `preCall`. Sainíonn an modúl sin freisin
na teorainneacha poirt sainráite `VideoMediaBrokerPort` (bearta a fháil agus
frámaí sampláilte a bhaint), `VideoAudioTranscriptionPort` (tras-scríbhinn fuaime
atá dearbhaithe ag an nglaoiteoir a chomhcheangal leis na fotheidil shampláilte),
agus `VideoDrilldownPort` (teorainn bhuanseasmhachta an mhiondealaithe frámaí;
níl sí nasctha le `processVideoPart` fós — ní scríobhann ach an bealach ar leith
`/api/modality-bridge/video/drilldown` iontrálacha miondealaithe faoi láthair).

Ní iompórtálann ná ní agraíonn conair phoiblí na hiarrata `/v1` fophróiseas riamh.
Íoslódáiltear físeáin chianda faoi theorainn 50 MiB; tá uasteorainn choimeádach
36 MiB díchódaithe in aghaidh an fhíseáin ar fhíseáin base64 inlíne ionas gur
féidir leis an gclúdach samhla/teachtaireachtaí/frámála fanacht laistigh den
teorainn ghlactha 50 MiB d’iarrataí poiblí JSON. Seiceáiltear meastacháin ar
fhad inlíne agus ar mhéid díchódaithe roimh leithdháileadh. Tá HTTPS riachtanach
ar an URL cianda tosaigh agus ar gach atreorú, ag úsáid an gharda amach atá
poiblí amháin agus atá ann cheana, le pionnáil DNS. Ansin trasnaíonn na bearta
teorainn bheacht inmheánach an bhróicéara
`POST /api/modality-bridge/video/extract`. Tá an bealach sin `LOCAL_ONLY` agus
`SPAWN_CAPABLE` araon, ní ghlacann sé ach le hiarraidh iontaofa lúb-ais atá
fíordheimhnithe de réir próisis, agus ní ghlacann sé riamh le URL, conair
chóras comhad, comhad inrite, ná liosta argóintí. Forfheidhmíonn píblíne mhéid
choirp an API agus léitheoir incriminteach coirp an láimhseálaí, go neamhspleách
ar a chéile, uasteorainn 50 MiB ar ionchur an bhróicéara. Ritheann a scuaine
theoranta eastóscadh amháin ag an am, ceadaíonn sí ceithre jab ar feitheamh,
agus cuireann sí uasteorainn 100 MiB ar ionchur ar feitheamh.

Laistigh den bhróicéir, léann `ffprobe` comhad áitiúil príobháideach; fágann an
liosta seasta formáidí ceadaithe formáidí seinnliosta agus léiriúcháin as an
áireamh. I gcás coimeádáin cheadaithe de theaghlach MOV, fanann tagairtí seachtracha
sonraí MOV díchumasaithe de réir réamhshocraithe, agus ní dhéanann an t-ordú seasta
iad a chumasú. Úsáideann `ffprobe` agus `ffmpeg` araon an liosta bán prótacal
`file` amháin, snáithe amháin, eagair sheasta argóintí, gan aon bhlaosc, agus
comhaid inrite a réitítear ó `PATH`. Ní iarrthóirí inseinnte iad sruthanna clúdaigh
de chineál pictiúir cheangailte. Ní mór do gach sruth inseinnte na teorainneacha
a chomhlíonadh, agus tugtar tús áite do shruth réamhshocraithe sainráite roimh an
gcúltaca cinntitheach leis an innéacs is ísle. Tá físeáin teoranta do 600 soicind,
8,192 picteilín in aghaidh na toise, agus 33,554,432 picteilín foinse. Samplálann
FFmpeg 1–16 fhráma JPEG ag lárphointí, laghdaíonn sé an chiumhais fhada go 1,024
picteilín ar a mhéad gan ionchuir níos lú a mhéadú, agus ní fhaigheann sé URL
riamh. Is é `uniform` an sampláil de réir réamhshocraithe. Déanann na beartais
roghnacha `scene_aware` agus turgnamhacha `segment_aware` pas seasta breise amháin
de chuid FFmpeg thar an sruth áitiúil atá bailíochtaithe cheana, roghnaíonn siad
stampaí ama radhairc teoranta `showinfo`, agus filleann siad go cinntitheach ar na
lárphointí aonfhoirmeacha céanna má theipeann ar an mbrathadóir, má théann sé thar
am, má bhíonn an t-aschur míchumtha, nó má bhíonn tacar na n-iarrthóirí folamh.
Leithdháileann mód atá feasach ar mhíreanna samplaí lárphointe i gcomhréir leis na
heatraimh radhairc bhailíochtaithe; sonraítear thíos fianaise agus iompraíocht
chúltaca an mhóid atá feasach ar mhíreanna. Cuirtear an uasteorainn chrua 16
fhráma i bhfeidhm tar éis roghnúcháin i ngach beartas. Nuair nach mbíonn ach
buiséad fráma amháin ag iarraidh atá feasach ar radhairc, úsáideann sé lárphointe
aonfhoirmeach na fuinneoige gníomhaí lánfhíse nó fócais agus tuairiscíonn sé
`policyEffective: uniform`: ní féidir le fráma radhairc roghnaithe amháin an dá
cheann ama a chaomhnú. Féadfaidh glaoiteoir fuinneog fhócais chríochta (`start`/`end`
soicind) a sholáthar go roghnach; teanntar na teorainneacha de réir fhad an mheáin,
diúltaítear d’fhuinneoga droim ar ais nó neamhchríochnaithe, agus ní dhéantar gach
beartas samplála ach laistigh den eatramh normalaithe. Cuirtear an fhuinneog a
eascraíonn as sin san áireamh i meiteashonraí samplála agus sa réimír tuairisce
neamhiontaofa ionas gur féidir le samhlacha iartheachtacha sliocht fócasaithe a
idirdhealú ón amlíne iomlán.

Is socrú sainráite ar leith é fócas séimeantach na bhfotheideal. Caomhnaíonn an
mód anailíse réamhshocraithe `full` an leid fráma atá ann cheana agus ní chuireann
sé téacs na hiarrata ar aghaidh chuig samhail na bhfotheideal riamh. Sa mhód
`focused`, ní léann an droichead ach an `text`/`input_text` neamhfholamh is déanaí
a scríobh úsáideoir ón gcoimeádán Chat nó Responses céanna, normalaíonn sé go NFC
é, comhdhlúthaíonn sé carachtair rialaithe agus spás bán, agus cuireann sé teorainn
500 códphointe Unicode air. Má bhíonn an toradh folamh, filleann sé ar an leid
bheacht `full`. Déantar leid inúsáidte a shrathú mar JSON i mbloc tiomnaithe
comhthéacs úsáideora neamhiontaofa agus ní fhéadfaidh sí ach tús áite a thabhairt
do mhionsonraí inbhraite; ní féidir léi an rabhadh ar leith i gcoinne treoracha
atá infheicthe nó inchloiste sna meáin a leanúint a shárú. Ní dhéanann fócas
téacsúil `start`/`end` a thuiscint ó chomhthéacs riamh ná ní athraíonn sé an
samplóir ama.

#### Fianaise struchtúrach mhíre FU-07

Úsáideann `segment_aware` pas réamhanailíse teoranta amháin ar an sruth físeáin áitiúil atá bailíochtaithe cheana féin. Déanann an slabhra seasta scagairí scálú go leithead nach mó ná 320 picteilín ar dtús, braitheann sé athruithe radhairc agus eatraimh reoite, agus ansin tógann sé sampla amháin in aghaidh an tsoicind chun doiléireacht, meánlúma, agus faisnéis spásúil/ama a mheas. Tá an pas teoranta do 600 sampla struchtúracha, snáithe FFmpeg/scagaire amháin, na liostaí ceada céanna don phrótacal `file` amháin agus do choimeádáin, teorainn 1 MiB ar aschur próisis, agus 30 soicind ar a mhéad laistigh de sprioc-am/scoir comhroinnte an bhróicéara. Ní ghlacann sé riamh le hordú, scagaire, conair ná URL ón iarratas.

Is fianaise samplála chinntitheach iad na luachanna struchtúracha, seachas tuiscint shéimeantach ar fhíseán. Ní dhéanann siad tátal faoi ábhair, gníomhartha, fotheidil, caint ná rún an úsáideora. Cruthaíonn teorainneacha radhairc agus reoite míreanna; ní bhíonn tionchar ag cumhdach reoite, doiléireacht, nochtadh, mionsonraí spásúla ná athrú ama ach ar an gcaoi a leithdháiltear an buiséad reatha 1–16 fráma. Cuirtear uasteorainn fráma amháin ar mhír atá reoite go hiomlán, agus téann míreanna neamhreoite in iomaíocht don chuid eile den bhuiséad. Nuair is mó líon na dteorainneacha ná líon na bhfrámaí, coinnítear cumhdach aonfhoirmeach na líne ama ionas nach féidir le gearrthacha tapa ag an tús mír fhada ag an deireadh a cheilt. Déantar teorainneacha radhairc atá laistigh de thaifeach anailíse 1 soicind ó theorainn reoite a chomhthiomsú.

Má bhíonn scagairí ar iarraidh, fianaise mhíchumtha/fholamh, earráid bhrathadóireachta, nó teorainn ama na réamhanailíse teoranta ann, teipeann an córas ar bhealach oscailte chuig an mbeartas cruinn aonfhoirmeach lárphointe. Ní theipeann scor ón nglaoiteoir ná sprioc-am an bhróicéara ar bhealach oscailte: foirceannann sé an fophróiseas atá ar bun, cuireann sé cosc ar eastóscadh frámaí ina dhiaidh sin, agus baintear an crann sealadach príobháideach in `finally`.

Gineann `scripts/perf/video-bridge-fu07-eval.ts` daingneáin chinntitheacha fhíora FFmpeg le haghaidh coigilteas ar ghlaonna fotheidealaithe tar éis dí-dhúblála, leithdháileadh buiséid do dhlúthghluaiseacht, fianaise doiléireachta/nochta/SI-TI, gearrthacha tapa le heireaball fada, agus torthaí deimhneacha bréagacha ó chéimniú de réir a chéile. Taifeadann sé am ballachloig na réamhanailíse agus, nuair atá `/usr/bin/time` ar fáil, LAP an phróisis íochtaraigh agus buaic-RSS. Is oracail struchtúracha amháin iad a sheiceálacha cáilíochta. Fanann cáilíocht fhíor na samhla fotheidealaithe ag `HOLD` toisc nach bhfuil críochphointe údaraithe ná breitheamh reoite ag an úim seo. Fanann coigilteas airgeadaíochta ag `HOLD` freisin mura soláthraíonn `--caption-cost-per-call-usd` meastachán follasach deimhneach ar an gcostas in aghaidh an ghlao; ní chumann an script ceachtar toradh riamh.

Tá gach fráma teoranta do 4 MiB, na frámaí amha uile le chéile do 23 MiB, agus freagra srathaithe an bhróicéara do 32 MiB. Baintear eolaire sealadach príobháideach in `finally`. Ní chuireann OmniRoute FFmpeg san áireamh agus ní ghlacann sé le conair shaincheaptha inrite. Sula ndéantar fotheidealú, cuireann an droichead pas coimeádach dí-dhúblála amhairc i bhfeidhm: laghdaítear gach JPEG go maolán liathscála 16×16 agus ní chuirtear é i gcomparáid ach leis an bhfráma deireanach a coinníodh. I gcás buiséad fotheidealaithe iarrtha os cionn fráma amháin, soláthraíonn an t-eastóscadh comhthiomsú teoranta iarrthóirí suas le dhá oiread an bhuiséid sin agus ní sháraíonn sé 16 fráma riamh. Ní chuirtear an uasteorainn iarrtha i bhfeidhm go dtí tar éis na dí-dhúblála, agus caomhnaítear an chéad iarrthóir agus an t-iarrthóir deiridh a roghnaíodh le linn an tanaithe dheiridh nuair atá an buiséad cothrom le dhá cheann ar a laghad. Úsáideann an beartas le leagan
`grayscale-16x16-mean-cells-v2` an ceann is mó den mheándeilt lúma agus den chóimheas de chealla mionsamhla a bhfuil a ndeilt normalaithe cothrom le 0.05 ar a laghad. Is é 0.04 an tairseach dhúblach, tairiseach a roghnaíodh ar mhaithe le hintuarthacht seachas é a nochtadh mar shocrú am rite. Caomhnaíonn an comhartha tánaisteach ardchodarsnachta seo gluaiseacht bheag agus athruithe ar théacs infheicthe a d'fhéadfadh comparáid mheánamháin a cheilt. Má tharlaíonn earráidí sa chomparadóir nó sa díchódóir, teipeann siad ar bhealach oscailte agus coinníonn siad an cumhdach. Scarann meiteashonraí an aschuir iarrthóirí eastósctha, frámaí a úsáideadh go rathúil, agus dúblaigh amhairc a fágadh ar lár.

Féadfaidh cuid físeáin atá marcáilte go follasach bileog theagmhála le stampaí ama a iarraidh. Tógann an droichead greille JPEG ina bhfuil 4 cholún agus 16 fráma ar a mhéad. Dóitear stampa ama na foinse isteach i mbanda íochtair ardchodarsnachta i ngach cill 512 phicteilín, agus fanann na stampaí ama céanna sna meiteashonraí téacsúla le haghaidh comhcheangal agus iniúchadh iartheachtach. Fanann an JPEG iomlán teoranta do 32 MiB. Murar féidir le `sharp` an ghreille a dhíchódú nó a chomhdhéanamh, filleann an droichead ar na frámaí JPEG aonair; iomadaítear scor ón gcliant tríd an oibríocht bileoige fós.

Coinnítear fianaise ardaithe céime scartha d'aon ghnó ón micreathagarmharc sintéiseach comhdhéanaimh. Sainmhíníonn `scripts/perf/video-bridge-contact-sheet-eval.ts` úim A/B le leagan scéime do shamhlacha físe fíora atá comhoiriúnach le OpenAI. Tomhaiseann sé comharthaí a thuairiscíonn an soláthraí, aga folaigh ballachloig ó cheann ceann (comhdhéanamh na bileoige san áireamh), líon na nglaonna ar an tsamhail, agus coinneáil fíricí arna sainmhíniú sa léiriúchán. Ní scríobhtar freagraí amha na samhla sa tuairisc; ní choinnítear ach achoimrí SHA-256 agus aitheantais fíricí meaitseáilte. Ní dhéanann an úim aon ghlao líonra ná aon ghlao íoctha ar shamhail mura gcuirtear `--execute-real` ar aghaidh agus mura bhfuil `--model`, `OMNIROUTE_BASE_URL`, agus `OMNIROUTE_API_KEY` cumraithe. Gan an rith fíor follasach sin, fanann a breithiúnas meaisín-inléite ag `HOLD`; ní fianaise ardaithe céime iad tomhais shintéiseacha ar phálasta/líon glaonna astu féin.

Féadfaidh glaoiteoirí eagar roghnach `transcript.cues` a cheangal le cuid físeáin tacaithe nuair atá téacs ailínithe acu cheana féin. Ní mór do gach leid `text`, eatramh críochta `start`/`end` laistigh den fhad a tóraítear, agus `source` atá ar an liosta ceada (`client`, `embedded`, nó `audio-bridge`) a bheith inti; is é `1` luach réamhshocraithe `confidence` agus ní mór dó fanacht idir `0` agus `1`. Déantar leideanna atá díreach mar an gcéanna a chomhthiomsú. Ní chuireann OmniRoute tús riamh le tras-scríobh ó na meiteashonraí seo: cóipeáiltear leideanna bailíochtaithe isteach sa toradh a thuairiscítear, mar aon lena bhfoinse, a muinín, agus a n-eatramh, agus déantar iad a rindreáil mar bhreathnuithe neamhiontaofa taobh le fotheidil na bhfrámaí. Diúltaítear do théacs neamhbhailí, as raon, nó gan bhunáitíocht seachas é a mheascadh isteach sa sruth fotheidealaithe. Normalaíonn an dá chainéal tras-scríbhinne i gcorp an iarratais an bhunáitíocht a sholáthraítear go `client`, lena n-áirítear lipéid fhéindearbhaithe `embedded` nó `audio-bridge`. Ní féidir ach le cuibheoir atá faoi úinéireacht an fhreastalaí na lipéid iontaofa sin a shannadh tríd an argóint cód-amháin `trustedSource`; ní féidir le réimse JSON in iarratas an argóint sin a bhaint amach. Fanann téacs tras-scríbhinne ina ábhar neamhiontaofa a díorthaíodh ó mheáin, beag beann ar a bhunáitíocht, agus ní ceadmhach dó údarú a chinneadh riamh.

Féadfaidh glaoiteoir ardleibhéil rian `audioTranscript` a sholáthar don fhíseán céanna;
caitear leis mar théacs arna sholáthar ag an gcliant, ní mar chruthúnas ar thras-scríobh ón bhfreastalaí.
Ritheann an seam comhleáite breathnuithe amhairc agus fuaime faoi
sprioc-am amháin agus comhartha tobscortha amháin, cuireann sé in ord iad ar amlíne choiteann, comhdhlúthaíonn sé
dúblaigh chruinne, agus tuairiscíonn sé toradh páirteach nuair nach n-éiríonn ach le taobh amháin.
Má tá `audioTranscript` neamhbhailí, díghrádaíonn sé go dtí an toradh páirteach sin — coinnítear an tuairisc
amhairc agus taifeadann an brainse fuaime cód teipe slánaithe —
seachas an físeán iomlán a chur ó mhaith. Caomhnaítear infhaighteacht gach brainse, an bhratach pháirteach,
agus na cóid teipe slánaithe sa toradh tuairiscithe, i meiteashonraí na
srianta cosanta (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i meiteashonraí taisce an toraidh, agus i gcuntair
chomhleá an droichid. Ní ghlaonn cosán réamhshocraithe Video Bridge ar thiontú cainte go téacs
ná ní íoslódálann sé an dara cóip meán; gan an rian sainráite sin, fanann sé
ina fhíseán amháin.

**Coinneáil tras-scríbhinne (#12150 P1).** Tá feidhm leis seo go huathoibríoch aon uair a
rindreálann Video Bridge (atá roghnach ann féin) leid tras-scríbhinne — níl aon bhratach
choinneála ar leith ann. Nuair a rindreálann iarratas aon leid tras-scríbhinne (ceachtar acu
`transcript` dearbhaithe ag an nglaoiteoir nó `audioTranscript` comhleáite), marcálann an srian cosanta é mar
`videoBridgeObserved` agus táirgeann sé scáth folaithe de thuairisc an fhíseáin —
rindreáil chomhionann ina gcuirtear
`[redacted-video-transcript]` in ionad chorp saorthéacs gach leide,
arna tógáil tríd an réimse struchtúrtha leide a ionadú
sula gcóimeáiltear an teaghrán (agus ní riamh tríd an téacs leacaithe a pharsáil, ionas nach féidir le haon ábhar
leide — bíodh sé naimhdeach nó coitianta, lena n-áirítear coirp ina bhfuil `]`, amhail
`[inaudible]`/`[music]` — teacht slán). Malartaíonn corp iarratais loga glao marthanach
gach cuid téacs a díorthaíodh ó fhíseán leis an scáth folaithe sin, arna mheaitseáil de réir comhionannas
inneachair; athléitear ancaire `fullText` ó phálasta críochnaithe an tsriain chosanta
réamhghlao, ionas go n-éiríonn leis an meaitseáil fós tar éis do shrianta cosanta slabhra níos déanaí (na folaitheoirí PII agus
dintiúr, tosaíochtaí 10/95) téacs na tuairisce a athscríobh ina áit agus
tar éis d'instealladh leide córais/aistrithe cuibhre/memóra an t-eagar teachtaireachtaí a athmhúnlú. Ní athraítear
an corp a sheoltar réamhtheachtach chuig an tsamhail. Ní chuireann iarratas breathnaithe aon rud isteach i
Memory marthanach ach oiread (scipeáiltear eastóscadh bunaithe ar an iarratas agus ar an bhfreagra araon),
ionas nach féidir le freagra na samhla féin téacs tras-scríbhinne a athrá isteach i Memory.

**Amhréimsí físe (#12430).** Nuair atá an droichead cumasaithe agus nuair atá tacaíocht dhúchasach físe anaithnid nó in easnamh, gníomhachtaíonn réimsí sainithe `transcript`/`audioTranscript` `videoBridgeObserved` freisin, fiú tar éis teipe tuairiscithe nó teorainn `maxVideos`. Áirítear `null` agus teaghráin fholmha; ní áirítear réimsí atá in easnamh ná meiteashonraí nach mbaineann le físeán. Déantar na réimsí seo a fholú i gcóipeanna coinnithe nó fágtar an t-iarratas ar lár, agus seachnaítear taiscí/Memory.

Ar na cosáin chúltaca sin, déantar páirteanna tacaithe `text`/`input_text`
de leideanna bailí ón nglaoiteoir seachas réimsí neamhchaighdeánacha soláthraí. Fanann an dá rian
arna soláthar leis an iarratas ina mbreathnuithe neamhiontaofa `client`, le rabhadh sainráite nár
tuairiscíodh an físeán agus nár fíoraíodh na stampaí ama in aghaidh na meán. Tá feidhm ag na
buiséid 256 leid/64-KiB san iomlán agus in aghaidh na leide atá ann cheana ar an dá rian le chéile;
ní mór do stampaí ama luí laistigh d'uasteorainn 600 soicind an bhróicéara agus d'aon fhuinneog fócais
a sholáthraítear. Caitear rianta neamhbhailí i leataobh, ní chuirtear ar aghaidh iad mar théacs treallach; féadfar
siblín bailí a úsáid fós mura sáraítear a mbuiséad comhcheangailte. Ní chuireann réimsí `null`/folmha
aon téacs leis. Ní chuirtear aon aisghabháil meán ná tras-scríobh leis an gcúltaca seo.
Baintear réimsí síntí tras-scríbhinne den iompróir físe cúltaca agus dá oibiachtaí
`video_url`/`source`. Fanann liosta ceada sreinge OpenAI docht; fanann iompróirí físe
nach eol a stádas dúchasach ar fáil agus coinníonn spriocanna ar eol gur téacs amháin iad marcóirí sábháilte.
Cosnaíonn scáthanna folaithe struchtúrtha an téacs tras-scríbhinne i gceangal, agus fanann
an t-iarratas bunaidh atá faoi úinéireacht an ghlaoiteora gan athrú. Coinníonn spriocanna a bhfuil tacaíocht
dhúchasach acu agus droichid dhíchumasaithe a n-iompar seachanta reatha.

Úsáideann cóipeanna coinnithe breise an comhartha iarratais bhreathnaithe céanna. Déanann an seat amh
den iarratas cliaint roimh an srian cosanta, an t-iarratas ar feitheamh sa chuimhne, agus loga luath an iarratais
dhiúltaithe réimsí tras-scríbhinne i bpáirteanna físe a ionadú go struchtúrtha;
déantar leideanna teaghráin arna sintéisiú ag céimeanna píblíne agus ag aistriú comhthéacs a fholú
ag slogaide corp an iarratais mharthanaigh. Fágann an marcóir marthanach `video_content_removed`
go dteipeann ar leanúint `previous_response_id` ar bhealach dúnta seachas téacs a athchruthú
a caitheadh i leataobh d'aon ghnó. Má chailleann iarratas breathnaithe a
scáth folaithe in aghaidh na coda sula ndéantar logáil, nó mura n-éiríonn le fiú ceann amháin de roinnt scáthanna físe
meaitseáil tar éis sócháin níos déanaí ar an iarratas, fágtar corp coinnithe an iarratais
ar lár go hiomlán seachas tras-scríbhinn nach bhfuil ach folaithe go páirteach a choinneáil.

I gcás iarratais bhreathnaithe, d'fhéadfadh freagra samhla aon chuid den
tras-scríbhinn a lua gan teorainn struchtúrtha leide. Dá bhrí sin, cuirtear marcóir fágaint-ar-lár in ionad
`responseBody` marthanach loga an ghlao; ní choinnítear an déantán mionsonraithe
píblíne (a bhféadfadh coirp réamhtheachtacha/cliaint agus smutáin srutha a bheith san áireamh ann).
Seachnaíonn taiscí séimeantacha, taiscí idémpótachta, agus taiscí athsheinm réasúnaíochta
léamha agus scríbhinní don iarratas sin. Fanann iarratas an tsoláthraí agus an
freagra atá infheicthe ag an gcliant gan athrú. Draenáiltear bearta luatha coinneála beo ón maolán sealadach
nuair a fhágtar an déantán mionsonraithe ar lár. Ní thuairiscíonn rabhadh Kiro faoi EventStream
míchumtha ach líon beart an phálasta, agus ní thuairiscíonn sé riamh a inneachar ná amh-earráid pharsálaí JSON.
Ní mhaíonn sé seo go ndearnadh iniúchadh ar gach diagnóis neamhghaolmhar soláthraí/breiseáin;
déantar an scuabadh níos leithne ar shlogaide coinnithe a rianú in #11658.

Is fostráit taisce ar leith í saolré inmheánach
`/api/modality-bridge/video/drilldown`, atá fíordheimhnithe le haisfhillteán/comhartha. Éilíonn gach oibríocht
aitheantas canónach teimhneach príomhaí freisin. Sula gcumasaítear glaoiteoir táirgeachta, ní mór dó
an t-aitheantas sin a dhíorthú ón tionónta fíordheimhnithe agus ní ceadmhach dó choíche luach
arna roghnú ag an gcliant a chur ar aghaidh. Ceanglaíonn eochracha taisce an príomhaí sin le haitheantais
seisiúin agus tagartha físe canónacha, ní stórálann siad ach a n-eochracha díorthaithe ó SHA-256, agus
cuireann siad léamha agus scriosadh araon faoi raon feidhme an phríomhaí chéanna. Stórálann an taisce 16
fhráma JPEG díorthaithe ar a mhéad in aghaidh na hiontrála, téann siad in éag tar éis deich nóiméad, agus
tacaíonn sí le léamha teorannaithe `start`/`end` nó le scriosadh sainráite seisiúin.

Tá gach príomhaí teoranta do 16 iontráil agus 64 MiB de shonraí canónacha JPEG. Tá na
teorainneacha sin neamhspleách ar an uasteorainn dhomhanda de 64 iontráil/256 MiB: faoi bhrú chuóta
príomhaí, díshealbhaítear iontrálacha an phríomhaí sin amháin de réir na cinn is lú úsáide le déanaí sula
mbreathnaítear ar dhíshealbhú domhanda LRU. Glantar iontrálacha atá imithe in éag ó chuntasaíocht an
phríomhaí agus ón gcuntasaíocht dhomhanda araon le linn gníomhaíochta taisce, agus ní dhéanann cealú ná
teip bailíochtaithe athsholáthar páirteach a thaifeadadh.

Diúltaíonn an taisce do Base64 neamhchanónach, stuáil iomarcach, meáin nach JPEG iad, JPEGanna
míchumtha nó teasctha, agus JPEGanna a chruthaíonn rabhadh le linn díchódú teorannaithe láníomhá `sharp`.
Ath-ionchódaíonn sí gach íomhá a nglactar léi mar JPEG canónach, díorthaíonn sí leithead agus airde
ó na bearta díchódaithe seachas muinín a chur i réimsí an ghlaoiteora, agus caitheann sí amach aon
bhearta ilfhormáideacha iarmharacha seachas iad a choinneáil. Ní ghearrtar ach an maolán comhbhrúite
canónach teorannaithe ar an dá chuóta. Áirítear leis an teorainn sreinge JSON forchostas Base64 don
uasteorainn ionchuir dhíchódaithe 32 MiB. Taifeadann gach
díorthú stóráilte a fhormáid/taifeach JPEG bailíochtaithe, beartas samplála,
leagan díorthaithe, am cruthaithe, hais inneachair arna ríomh ag an bhfreastalaí, agus tagairt
tuismitheora haisithe mar aon le hais inneachair an tuismitheora ón nglaoiteoir iontaofa. Seiceáiltear
cealú idir céimeanna díchódaithe/haiseála asincrónacha roimh an taifeadadh adamhach sa taisce.

Ní nascann an tráinse seo táirgeoir táirgeachta leis an mbealach go fóill agus ní
sholáthraíonn sé roghnú leagain iltaifigh. Dá bhrí sin, ní chuireann cosán iarratais trédhearcach
an Video Bridge aon obair bhreise i gceist, agus fanann díorthú príomhaí atá ceangailte leis an tionónta
agus saolré iomlán iltaifigh FU-08 mar obair leantach shainráite seachas iad a bheith
doiciméadaithe mar iompar iomlán.

Cuirtear fotheidil leis na frámaí in ord leis an tsamhail Video chumraithe. Faigheann sárú folamh
Video socrú Vision le hoidhreacht; má tá an dá cheann folamh, roghnaíonn uath-ródaire Vision
an tsamhail éifeachtach atá ábalta fís a láimhseáil. Cuirtear fotheidil rathúla in ionad na bunpháirte
le réimír chobhsaí `[Video description:` a mharcálann an téacs freisin mar bhreathnóireacht neamhiontaofa
a díorthaíodh ó mheáin agus a insíonn do shamhlacha iartheachtacha gan treoracha a fhaightear sna meáin
a leanúint. Áirítear in eochracha taisce fotheideal fráma na bearta JPEG, an leid, an stampa ama, agus
an tsamhail éifeachtach; ní chuirtear sa taisce ach fotheidil rathúla. Coinníonn iontrálacha taisce an
tsamhail táirgeora iarbhír ar éirigh léi, samhail chúltaca san áireamh; tuairiscíonn an droichead `mixed`
nuair a tháirg samhlacha éagsúla frámaí éagsúla. Athúsáideann amas taisce aitheantas an táirgeora sin
seachas é a athlipéadú mar an bplean ródaithe iarrtha. Tá eochair thaisce thoradh na físe iomláine
bunaithe ar gach ionchur a athraíonn an t-aschur — leid, samhail éifeachtach,
beartas samplála, líon frámaí, mód anailíse séimantach, méarlorg SHA-256
na leid fócais normalaithe, fuinneog fócais, `transcript`,
`audioTranscript`, agus bratach na bileoige teagmhála — mar sin, má athraítear aon cheann de na
toisí sin, is teip taisce í, agus ní athúsáid sheanchaite riamh. Tá leagan an bheartais
dí-dhúblála amhairc, an tairseach, agus líon teorannaithe na bhfrámaí iarrthacha sainráite freisin in
eochair agus meiteashonraí thaisce an toraidh; dá bhrí sin, ní féidir le hathrú beartais cur síos
seanchaite ar an bhfíseán iomlán a athúsáid. Coinníonn meiteashonraí v4 thaisce an toraidh an mód agus
an méarlorg, ach ní choinníonn siad tasc amh an úsáideora riamh. Tuairiscíonn meiteashonraí na ráillí
cosanta na móid anailíse iarrtha agus éifeachtacha araon; tuairiscítear mód `focused` iarrtha gan
téacs inúsáidte ón úsáideoir mar `full` go héifeachtach.

Baineann an ráille cosanta gach páirt físe a dtacaítear léi amach ach ní dhéanann sé cur síos ar
níos mó ná `modalityBridgeVideoMaxVideos`. I gcás sprice a bhfuil sé cruthaithe ina leith go bhfuil
`supportsVideo === false`, déantar marcóirí téacs sábháilte sainráite d'fhíseáin ar theip orthu agus
d'fhíseáin os cionn na teorann ionas nach mairfidh aon fhíseán amh. Nuair nach eol an acmhainn,
coinníonn na páirteanna sin a n-iompróir físe; leanann aon tras-scríbhinn chúltaca an tiontú teorannaithe
téacs thuas. Seachnaíonn spriocanna a bhfuil `supportsVideo === true` acu an droichead.
Iomadaítear comhartha tobscortha iarratas an chliaint tríd an íoslódáil, scuaine an bhróicéara,
fo-phróisis, agus glaonna fotheidil; stopann tobscortha idir físeáin agus ní osclaíonn siad an córas
do mheáin amh i gcás teipe riamh.

Tá socruithe ama rite tacaithe ag an DB agus bailíochtaithe ag Zod:

| Eochair                             | Réamhshocrú | Raon / iompar                                                                                                               |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Am rite roghnach, le rogha a bheith páirteach                                                                               |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | Caomhnaíonn `full` fotheidil ghinearálta; úsáideann `focused` comhthéacs teoranta, neamhiontaofa ón úsáideoir is déanaí     |
| `modalityBridgeVideoModel`          | `""`        | Faigh samhail an Droichid Físe le hoidhreacht                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                        |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, nó `segment_aware` comhréireach; má theipeann ar an mbrathadóir, úsáidtear `uniform` mar chúltaca |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                         |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                              |

Déantar luachanna teorann ama Físe oidhreachta atá stóráilte agus atá os cionn 120 soicind a theorannú do
sprioc-am an bhróicéara; diúltaítear do scríobh socruithe nua os cionn na teorann sin.
Éilíonn `GET /api/modality-bridge/video/runtime` logántacht loopback stampáilte iontaofa
roimh fhíordheimhniú nó iniúchadh am rite, agus ansin éilíonn sé fíordheimhniú
bainistíochta. Ní thugann sé ar ais ach `available`, leaganacha slánaithe de FFmpeg/ffprobe, agus cúis sheasta
nuair nach bhfuil an t-am rite ar fáil. Ní API poiblí uaslódála é an críochphointe inmheánach asbhainte:
tugtar `503` móide `Retry-After` ar ais nuair atá an scuaine lán, tugtar `499` ar ais
nuair a dhícheanglaíonn glaoiteoir, agus tugtar `504` ar ais ag sprioc-am seasta an bhróicéara. Cuireann freagraí tiontaithe
`video->text;model=<visionModel>;parts=<videos>` leis an gceanntásc lárnach
`x-omniroute-modality-bridge` gan míreanna Físe ná Fuaime a bhaint.

### Folaitheoir PII (`piiMasker.ts`)

Ritheann sé ar an **dá** chéim.

- Déanann **`preCall`** clónáil ar an bpálasta, téann sé trí `system`, `messages`, `input`, agus
  `prompt` (lena n-áirítear míreanna gnáth-theaghráin), agus cuireann sé `processPII()` (ó
  `@/shared/utils/inputSanitizer`) i bhfeidhm ar réimsí teaghráin `content`/`text`. Nuair atá
  `PII_REDACTION_ENABLED=true`, déantar PII braite a cheilt sa phálasta
  amach. Tá sé seo neamhspleách ar `INPUT_SANITIZER_MODE` (nach rialaíonn ach
  an beartas um instealladh leide). Nuair atá an cheilt múchta, taifeadann an glao comhairimh
  braite gan an t-ábhar a athscríobh.
- Déanann **`postCall`** domhainchlónáil ar an bhfreagra, agus ritheann sé `sanitizePIIResponse()` mar aon
  le folaitheoir chruth Responses API (`maskResponsesOutput` — clúdaíonn sé
  `output_text` agus `output[].content[].text`). Má tharlaíonn aon cheilt, cuirtear an
  freagra modhnaithe in ionad an bhunfhreagra.

Ní chuireann an ráille cosanta bac riamh; ní dhéanann sé ach anótáil (`meta.detections`,
`meta.redacted`) nó athscríobh.

### Instealladh Leide (`promptInjection.ts`)

Braitear struchtúir naimhdeacha in ábhar arna sholáthar ag an úsáideoir agus cuirtear an
beartas cumraithe i bhfeidhm. Tá an t-iompar á rialú ag athróga timpeallachta agus roghanna
an chruthaitheora:

| Socrú             | Athróg timpeallachta                                                                                  | Réamhshocrú | Éifeacht                                                                                                                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cumasaithe        | `INPUT_SANITIZER_ENABLED`                                                                             | `true`      | Nuair atá sé `false`, déanann an ráille cosanta gearrchiorcadú.                                                                                                                                                            |
| Mód               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`      | Beartas insteallta: `block`, `warn`, nó `log`. (Glactar le `redact` ar mhaithe le comhoiriúnacht siarghabhálach ach **ní** bhaineann sé téacs insteallta; tá athscríobh PII iarratais á rialú ag `PII_REDACTION_ENABLED`.) |
| Tairseach blocála | Rogha `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (ailias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`      | An déine íosta is gá chun blocáil. Is le haghaidh breathnóireachta amháin atá déine mheánach de réir réamhshocraithe.                                                                                                      |

**Tosaíocht mód** (`getMode`): `options.mode` an ghlaoiteora →
sárú brataí gné DB `INJECTION_GUARD_MODE` (Deais → Socruithe →
Bratacha Gné) → athróg timpeallachta `INJECTION_GUARD_MODE` → athróg timpeallachta `INPUT_SANITIZER_MODE` →
`warn`. Dá bhrí sin, bíonn tosaíocht ag sárú ón deais ar na hathróga timpeallachta, agus mar sin rialaíonn
comhéadan úsáideora na mBratach Gné an ráille atá ag rith go beo (gan atosú). Tá léamh an DB slán i gcás teipe:
má tharlaíonn earráid, filleann an ráille ar an iompar bunaithe ar an timpeallacht, agus nuair nach bhfuil
aon sárú socraithe, bíonn an t-iompar comhionann le réiteach bunaithe ar an timpeallacht amháin.

Foinsí braite:

1. `sanitizeRequest()` ó `@/shared/utils/inputSanitizer` (tacar comhroinnte brathadóirí
   a úsáidtear in áiteanna eile sa phíblíne).
2. `DEFAULT_GUARD_PATTERNS` ionsuite (`system_override_inline` agus
   `markdown_system_block` faoi láthair, an dá cheann acu ar dhéine `high`).
3. `customPatterns` roghnacha arna gcur ar aghaidh trí roghanna an chruthaitheora (teaghráin, sloinn rialta,
   nó taifid `{ name, pattern, severity }`).

Nuair atá `mode === "block"` **agus** nuair a chomhlíonann brath amháin ar a laghad an tairseach déine, tugann `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }` ar ais. Sna móid `warn`/`log`, logálann an ráille cosanta ach
ceadaíonn sé an glao. Easpórtáiltear an cúntóir comhroinnte `evaluatePromptInjection()` freisin
do ghlaoiteoirí ar gá dóibh leideanna a mheas gan dul tríd an gclárlann.

**Teorainn scanadh (v3.8.20):** ní scrúdaíonn an brathadóir ach an **chéad 16 KB** de
théacs comhcheangailte na leide — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 beart) in
`src/shared/utils/inputSanitizer.ts`. Déanann `detectInjection()` agus
`evaluatePromptInjection()` araon `slice(0, MAX_INJECTION_SCAN_BYTES)` sula ritheann siad
lúb na bpatrún. Bíonn treoracha ionsáite gar do bharr ionchuir, mar sin
cuireann sé seo teorainn le húsáid LAP/GC ag sloinn ionadaíochta ar phálastaí a bhfuil na céadta KB iontu gan an brath a lagú (féach
#3932, #4041).

### Mascóir Dintiúr (`credentialMasker.ts`)

Ritheann sé ar an **dá** chéim, agus é deireanach sa slabhra réamhshocraithe (tosaíocht `95`). Ceileann sé
patrúin aitheanta d’eochracha API / comharthaí rúnda ón bpálasta amach (inneachar
teachtaireachta, argóintí glaonna uirlise, torthaí uirlise) **agus** ó fhreagra an tsoláthraí, ionas nach ligtear
dintiúr a greamaíodh i leid (nó a athdhéanann toradh uirlise) chuig
an soláthraí réamhtheachtach ná ar ais chuig an gcliant.

- **Roghnach amháin**, an coinbhinsiún céanna le ceilt PII (gar do Riail Dhocht #20):
  díchumasaithe mura bhfuil `settings.credentialRedactionEnabled === true` **nó**
  `CREDENTIAL_REDACTION_ENABLED=true`. Nuair atá sé múchta, ní dhéanann an ráille cosanta aon ní —
  ní bhlocálann sé ná ní athscríobhann sé riamh.
- Siúlann `redactCredentials()` crann iomlán an phálasta/fhreagra (`walkValue()`,
  sábháilte ar thruailliú fréamhshamhla, sábháilte ar thimthriallta trí `WeakSet`) agus cuireann sé
  ionadchoinneálaí `[REDACTED:<type>]` in ionad meaitseálacha, gan ach na brainsí a d’athraigh
  i ndáiríre a chlónáil.
- Clúdaíonn `CREDENTIAL_PATTERNS` eochracha soláthraithe LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), comharthaí VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), eochracha íocaíochta (Stripe, Square), eochracha
  néil (eochair rochtana AWS, Twilio, SendGrid, Mailgun), eochracha príobháideacha / JWTanna,
  teaghráin cheangail ina bhfuil dintiúir (`mongodb://user:pass@...`, etc.), agus
  patrún cineálach do luach ceanntáisc `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ceileann sé eochracha i gcruth ceanntáisc (`authorization`, `x-api-key`, `api-key`,
  `apikey`) go struchtúrach (an luach amháin, agus réimír scéime amhail
  `Bearer `/`Basic ` á caomhnú) seachas tríd an slonn ionadaíochta cineálach téacs.
- Ní bhlocálann an ráille cosanta riamh; ní dhéanann sé ach athscríobh (`modifiedPayload` /
  `modifiedResponse`) agus anótáil (`meta.credentialsRedacted`, `meta.count`).

Cosaint aischéimnithe: `tests/unit/credential-masker-guardrail.test.ts`.

## Bunchonradh (`base.ts`)

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
  block?: boolean; // giorraíonn true an slabhra
  message?: string; // nochtar é nuair a chuirtear bac
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // tugtar ar ais é ag preCall chun an t-iarratas a athscríobh
  modifiedResponse?: TValue; // tugtar ar ais é ag postCall chun an freagra a athscríobh
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

Cuireann ráille cosanta in iúl “gan athrú” trí `void`, `{}`, nó
`{ block: false }` a thabhairt ar ais. Má thugtar `modifiedPayload`/`modifiedResponse` ar ais, cuirtear é
in ionad an luacha a shreabhann tríd an slabhra chuig ráillí cosanta iartheachtacha.
Iompraíonn `signal?: AbortSignal` saolré an ghlaoiteora isteach sna ráillí cosanta. Is í cealú iarratais an eisceacht oscailte d’aon ghnó i gcás teipe: stopann droichid meán an obair agus déanann siad glantachán gan na meáin amh a chur ar ais chuig sprioc arb eol nach dtacaíonn sí leo.

## Clárlann (`registry.ts`)

Nochtann an t-aonán `guardrailRegistry`:

- `register(guardrail)` — cuireann sé garda-ráille leis (nó cuireann sé ceann eile ina áit de réir ainm normalaithe) agus ath-shórtálann sé de réir `priority` ardaitheach.
- `clear()` / `list()` — cúntóirí riaracháin.
- `runPreCallHooks(payload, context)` — déanann sé athrá ar gharda-ráillí gníomhacha, snáitheann sé an t-ualach tríd an `modifiedPayload`, agus stopann sé ar an gcéad `block: true`.
- `runPostCallHooks(response, context)` — an sreabhadh céanna ar thaobh an fhreagra.
- `resetGuardrailsForTests({ registerDefaults })` — glanann sé an staid agus, go roghnach, athchláraíonn sé na réamhshocruithe le haghaidh aonrú tástála glan.

Tugann an dá reathaí `{ blocked, payload|response, results, guardrail?, message? }` ar ais, áit a bhfuil `results` ina eagar de thaifid `GuardrailExecutionResult` a chuimsíonn réimsí `blocked`, `skipped`, `modified`, `error`, agus `meta` in aghaidh an gharda-ráille, atá úsáideach le haghaidh rianú.

### Garda-ráillí a Dhíchumasú in aghaidh an Iarratais

Déanann `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` liosta dí-dhúbailte d'ainmneacha garda-ráillí a bhailiú ar cheart iad a scipeáil don iarratas reatha. Foinsí (gach ceann roghnach, gach ceann cumaiscthe):

- `apiKeyInfo.disabledGuardrails`
- Comhlacht iarratais `disabledGuardrails` (barrleibhéal)
- Comhlacht iarratais `metadata.disabledGuardrails`
- Ceanntásc `x-omniroute-disabled-guardrails` (nó an ceann oidhreachta `x-disabled-guardrails`)

Féadfaidh na luachanna a bheith ina n-eagar teaghrán nó ina dteaghrán scartha le camóg; déantar ainmneacha a normalú go cás íochtair kebab-case (`pii_masker` → `pii-masker`). Cuirtear an toradh tríd an `context.disabledGuardrails` chuig an gclárlann, a scipeálann garda-ráillí meaitseála (`skipped: true` i `results`).

## Ord Feidhmithe

Maidir le gach iarratas a théann trí `src/sse/handlers/chat.ts` agus
`open-sse/handlers/chatCore.ts`:

1.  Tógann `resolveDisabledGuardrails(...)` an liosta scipeála ón eochair API, ón gcorp,
    agus ó na ceanntásca.
2.  Ritheann `guardrailRegistry.runPreCallHooks(body, ctx)` na ráillí cosanta in ord tosaíochta ardaitheach:
    - Déantar ráillí cosanta díchumasaithe a thaifeadadh mar `skipped`.
    - Féadfaidh `preCall` gach ráille cosanta an t-ualach pá a athscríobh trí `modifiedPayload`.
    - Gearrann an chéad `block: true` an slabhra agus cuireann an láimhseálaí freagra diúltaithe ráille cosanta ar ais.
3.  Sreabhann an t-ualach pá (a d'fhéadfadh a bheith athscríofa) isteach i ródú teaglama agus i seoladh in aghaidh an tsrutha.
4.  Tar éis an freagra a chur le chéile, ritheann `guardrailRegistry.runPostCallHooks(...)`
    an slabhra céanna ar an bhfreagra. Scaoileann `block: true` an freagra in aghaidh an tsrutha anseo.

Déantar ráillí cosanta a chaitheann earráid a thaifeadadh le `error: <message>` agus a logáil trí
`logger.warn`, ach leanann an slabhra ar aghaidh — teip-oscailte de réir dearaidh.

## Cumraíocht

Athróga comhshaoil a léann na ráillí cosanta ionsuite:

| Variable                              | Used by                   | Effect                                                                                                          |
| :------------------------------------ | :------------------------ | :-------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Socraigh `false` chun braite a dhíchumasú go hiomlán.                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Beartas insteallta: `warn`, `block`, nó `log`. Ní athscríobhann an luach oidhreachta `redact` téacs insteallta. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mód don gharda insteallta; bratach gné DB freisin a **sháraíonn** na hathróga comhshaoil (DB > ENV).            |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Íos-déine a dhiúltaíonn `MODE=block`: `high` (réamhshocrú), `medium`, nó `low`.                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Ailias oidhreachta do `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                        |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Nuair atá `true`, déantar PII an iarratais a eagrú (neamhspleách ar mhodh insteallta).                          |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Rialaíonn sé iompar an mhascóra ar thaobh an fhreagra.                                                          |

Léann ráillí cosanta an Modality Bridge cumraíocht reatha ón stór socruithe atá bunaithe ar DB
(`getSettings()`), ní ó athróga comhshaoil. Is iad príomheochracha Vision ná
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, agus
`modalityBridgeCacheMaxEntries`. Ní ghlactar leis na heochracha oidhreachta
`visionBridge*` ach amháin mar an t-aischur léitheoireachta aon-timthriallta
doiciméadaithe; úsáideann scríbhinní painéil na príomheochracha. Tá na réamhshocruithe agus an
réiteoir aischuir lonnaithe i `src/shared/constants/modalityBridgeDefaults.ts`, le
tairisigh oidhreachta coinnithe i `src/shared/constants/visionBridgeDefaults.ts`.

Úsáideann Fuaime `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, agus `modalityBridgeAudioMaxClips`, chomh maith leis na socruithe
comhroinnte `modalityBridgeCache*`. Níl aon aischur eochrach oidhreachta ag Fuaime toisc gur
tugadh na heochracha seo isteach le scéimre an Modality Bridge.

Úsáideann Físeán `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, agus
`modalityBridgeVideoTimeout`, chomh maith leis na socruithe comhroinnte `modalityBridgeCache*`.
Tá sé díchumasaithe de réir réamhshocraithe toisc gur spleáchais oibríochtúla roghnacha iad
FFmpeg/ffprobe agus go gcuireann fotheidealú fráma moill agus costas samhail leis.

## Cosaintí Saincheaptha

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

Céimeanna:

1.  Cruthaigh `src/lib/guardrails/myGuardrail.ts` ag leathnú `BaseGuardrail`.
2.  Cuir `preCall` agus/nó `postCall` i bhfeidhm.
3.  Cláraigh ag am iompórtála (brúigh ó `registerDefaultGuardrails`) nó glaoigh ar `guardrailRegistry.register(...)` ag am rite — cuirfidh an clárlann aon chosaint roimhe seo leis an ainm normalaithe céanna in ionad.
4.  Cuir tástálacha leis faoi `tests/unit/` (samplaí atá ann cheana:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Tástáil

Úsáid `resetGuardrailsForTests()` idir tástálacha chun tús a chur le staid aitheanta. Cuir `{ registerDefaults: false }` ar aghaidh chun tús a chur le clárlann fholamh agus chun na cosaintí atá á dtástáil amháin a chlárú. Glacann Vision Bridge le hinstealladh spleáchais (`deps.getSettings`, `deps.callVisionModel`); nochtann Audio Bridge na hailt chomhionanna le haghaidh socruithe, cumais, roghnú samhail STT, seiceálacha dintiúir, agus trascríobh. Is féidir le tástálacha an dá shreabhadh a fheidhmiú dá bhrí sin gan rochtain ar DB nó ar líonra.

## Féach Freisin

- `src/lib/guardrails/` — cur i bhfeidhm
- `src/shared/utils/inputSanitizer.ts` — brathadóir comhroinnte a chumhachtaíonn instealladh pras agus mascáil PII
- `src/shared/constants/visionBridgeDefaults.ts` — réamhshocruithe Vision Bridge agus liosta samhlacha droichid éigeantacha
- `src/shared/constants/modalityBridgeDefaults.ts` — réamhshocruithe comhroinnte ama rite Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ciseal ortagánach (scoradán ciorcaid, fuarú)
- `docs/reference/ENVIRONMENT.md` — tagairt iomlán do athróga comhshaoil

## Clúdach bealaigh cosanta insteallta & foireann dhearg (Céim 8 · Bloc D)

Clúdaíonn an cosantóir insteallta (`createInjectionGuard` / `withInjectionGuard`) gach bealach a ghlacann le prasanna úsáideora. Tugann sé ómós do `INJECTION_GUARD_MODE` (réamhshocrú `warn` = logáil amháin; `block` = seolann sé ar ais HTTP 400 `SECURITY_001`).

| Cineál                 | Bealaí                                                                                                                                               | Mód réamhshocraithe |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Téacs (atá ann cheana) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Giniúnach              | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Sonraí                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Clúdaíonn eastóscadh téacs (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Foireann dhearg (oíche, `nightly-llm-security.yml`):** fíoraíonn promptfoo go gcuireann gach bealach bac ar an gcorp OWASP-LLM i `INJECTION_GUARD_MODE=block`; ritheann garak taiscéalaithe (scipeann sé gan rún). Cuirtear `moderations` san áireamh ar mhaithe le comhsheasmhacht — is féidir le hoibreoirí i mód bloc é a dhíolmhú trí `resolveDisabledGuardrails`.

Tá dhá phost ag an sreabhadh oibre oíche (`.github/workflows/nightly-llm-security.yml`, cron + seoladh láimhe):

- **`promptfoo-guard` (blocáil)** — ritheann sé `promptfoo eval -c promptfooconfig.yaml` le `INJECTION_GUARD_MODE=block`. Dearbhaíonn gach cás frithsheasmhach (m.sh. "déan neamhaird de gach treoir roimhe seo…", jailbreaks stíl DAN) go bhfuil `error.code === "SECURITY_001"` sa fhreagra, i.e. gur dhiúltaigh an cosantóir an t-iarratas i ndáiríre.
- **`garak` (comhairleach)** — ritheann sé garak `--probes promptinject,dan,leakreplay` i gcoinne cás áitiúil OmniRoute (`http://localhost:20128/v1`). Geataithe ar rún soláthraí (`PROMPTFOO_PROVIDER_KEY`); scipeann sé go galánta agus tá an iarmhír `|| true` leis, ionas go dtuairiscíonn sé gan teip CI.

Clúdaíonn clúdach an chúntóra cosanta (`createInjectionGuard` / `withInjectionGuard`) gach bealach `/v1` a iompraíonn prasanna; tarraingítear téacs an phrais ó `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ag `extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
