# Quality Gates Reference (नेपाली)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

यो दस्तावेज OmniRoute का सबै CI गुणस्तर गेटहरूको आधिकारिक सन्दर्भ हो।
यसले प्रत्येक गेट, त्यसले के प्रमाणीकरण गर्छ, त्यो कुन CI job मा चल्छ, त्यसले
ratchet baseline वा pass/fail नीति प्रयोग गर्छ कि गर्दैन, र त्यसले build रोक्छ वा केवल सल्लाहकारी हो भन्ने वर्णन गर्छ।

छोटो सारांश र allowlist नीतिका लागि `AGENTS.md` को "Quality Gates & Ratchets" खण्ड
हेर्नुहोस्। यही प्रणालीको महत्त्वपूर्ण मूल्याङ्कन, परिपक्वता वर्गीकरण, र उपकरण-निरपेक्ष
पुनरावृत्ति योजनाका लागि
[गुणस्तर गेट प्लेबुक](../ops/QUALITY_GATE_PLAYBOOK.md) हेर्नुहोस्।

---

## गेट सूची र कार्यान्वयन प्रोफाइलहरू

### उम्मेदवार स्वीकृति

CI र Quality Gates कार्यप्रवाहहरूले प्रत्येकले एउटा स्थिर निर्णय उत्सर्जन गर्छन्: `Gate / CI` र
`Gate / Quality`। तिनको संस्करणीकृत स्वीकृति नीतिले प्रत्येक अपस्ट्रिम जबलाई
आवश्यक वा परामर्शात्मकका रूपमा सूचीकृत गर्छ। लागू हुने आवश्यक जब सफल हुनैपर्छ: अनुपस्थित,
रद्द गरिएको, छोडिएको, विचाराधीन र अज्ञात परिणामहरूले PASS स्थापित गर्न सक्दैनन्। मान्य
docs-only वा catalog-only वर्गीकरणले कुनै कोड लेनलाई लागू नहुने बनाउन सक्छ;
मस्यौदा PR स्वीकृत उम्मेदवार होइन। `hotfix` लेबलले प्रमाणको आवश्यकता हटाउँदैन।

दुवै कार्यप्रवाहले PR हरू र main/release शाखाहरूमा हुने पुश, म्यानुअल डिस्प्याच तथा
मर्ज-समूह इभेन्टहरू समेट्छन्। पुश, डिस्प्याच र मर्ज-समूहले पूर्ण चयन चलाउँछन्। फोर्कहरू
र मर्ज समूहहरूले अन्यथा self-hosted रनरहरू चयन गर्ने जबहरूका लागि hosted रनरहरू प्रयोग गर्छन्;
रोलआउटअघि पर्याप्त hosted क्षमता प्रमाणीकरण गरिनुपर्छ।

प्रत्येक JSON रसिदले चेकआउट गरिएको SHA, कार्यप्रवाह रन र प्रयास पहिचान गर्छ।
CLI ले चेकआउट/इभेन्ट SHA बेमेललाई अस्वीकार गर्छ। कार्यप्रवाह परीक्षणहरूले नीति सदस्यतालाई
निर्णय जबको `needs` सूचीसँग बाँध्छन्, जसले गर्दा नयाँ वा हटाइएको लेन चुपचाप हराउन सक्दैन।
रसिदहरूले आफ्नै कार्यप्रवाह समेट्छन्, प्रकाशन, डिप्लोयमेन्ट वा विद्यमान
परामर्शात्मक स्क्यानरका आन्तरिक पक्षहरू होइन। शाखा नियमहरूमा दुवै जाँच नाम सक्रिय गर्नु
छुट्टै प्रशासनिक परिवर्तन हो; यी जबहरू थप्दैमा शाखा आफैं सुरक्षित हुँदैन।

### स्थिर स्क्यान सूची

संस्करणीकृत npm-alias सूची र स्थिर-स्क्यान सदस्यता
`config/quality/gate-manifest.json` मा हुन्छन्। स्क्रिप्ट नामहरू र ठ्याक्कै मिल्ने कमान्डहरूलाई
`package.json` विरुद्ध प्रमाणीकरण गर्न `npm run check:gate-manifest` चलाउनुहोस्; थपिएका,
हटाइएका र परिवर्तन भएका कमान्डहरूले स्थानीय हुक र CI का परिवर्तन-वर्गीकरण जबहरू दुवैलाई
असफल बनाउँछन्। एउटा alias कार्यप्रवाह जब, म्याट्रिक्स इन्स्ट्यान्स वा परीक्षण केस होइन: यी गणनाहरूलाई
परस्पर विनिमेयका रूपमा प्रस्तुत गर्नु हुँदैन।

चयन गरिएका alias हरू कार्यान्वयन नगरी निरीक्षण गर्न `npm run quality:scan -- --list` वा
`npm run quality:scan:fast -- --list` प्रयोग गर्नुहोस्।
रनरले npm इन्ट्रीपोइन्ट आह्वान गर्छ, त्यसैले यसको रनटाइम (कन्फिगर गरिएको ठाउँमा Bun समेत) सुरक्षित रहन्छ।
म्यानिफेस्टले ती प्रोफाइलहरू बाहिरका alias हरूलाई छुट्टै आह्वान गरिने रूपमा अभिलेख गर्छ, र
read-only स्क्यान प्रोफाइलहरूमा मर्मतसम्भार कमान्डहरू निषेधित छन्।

यी प्रोफाइलहरूले स्थिर स्क्यान मात्र समेट्छन्। तिनले उत्पादन परीक्षण,
कभरेज, प्याकेजिङ, बाह्य जाँच वा उम्मेदवारको पूर्ण रिलिज स्वीकृति प्रमाणीकरण गर्दैनन्।
कार्यप्रवाह स्वीकृतिले लिङ्क गरिएका `config/quality/admission-policy.json` र
`scripts/quality/admission-verdict.mjs` प्रयोग गर्छ। Release-observer प्रोफाइलहरू अलग रहन्छन्;
तिनका लागू हुने जाँच र रसिदहरू स्वतन्त्र रूपमा निरीक्षण गर्नुहोस्। तलको गद्यात्मक
सूची सन्दर्भ हो, कुनै गेट वास्तवमै चलेको प्रमाण होइन।

स्क्रिप्टहरू `scripts/check/` (नीति गेटहरू) र `scripts/quality/` (ratchet इन्जिन) अन्तर्गत हुन्छन्।
CI को आधिकारिक स्रोत `.github/workflows/ci.yml` हो।

### रिलिज PR द्रुत-पथ (`quality.yml`)

`.github/workflows/quality.yml` ले main/release PR हरू, सुरक्षित-शाखा
पुशहरू, डिस्प्याच र मर्ज समूहहरूमा CI लाई पूरक बनाउँछ। PR हरूले पथद्वारा फिल्टर गरिएका द्रुत जाँचहरू प्रयोग गर्छन्। स्थायी रूपमा
असक्षम गरिएको नक्कली बिल्ड हटाइएको छ; वास्तविक बिल्ड/प्याकेज/बुट जाँचहरू CI मै रहन्छन्।

| जब                                               | दायरा                                                                                                                                                                                                               | अवरोधकारी        |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `Docs Gates (fast-path)`                         | Docs/code PR हरू; API docs सन्दर्भहरू र docs-all                                                                                                                                                                    | हो               |
| `Fast Quality Gates`                             | Code PR हरू; स्थिर जाँचहरू, typecheck, dashboard typecheck, प्रभावित एकाइ परीक्षणहरू                                                                                                                                | हो               |
| `Forgotten sibling tests`                        | Code PR हरू; परिवर्तन गरिएका मोड्युलहरूबाट स्थिर उपभोक्ताहरू र सम्भावित sibling परीक्षणहरूसम्म ट्रेसिङ; barrel र dynamic-import पथहरूलाई सन्दर्भित allowlist अपवादहरूसहित परामर्शात्मक निदानका रूपमा रिपोर्ट गरिन्छ | **परामर्शात्मक** |
| `Vitest (fast-path)`                             | Code PR हरू; द्रुत vitest सुइट                                                                                                                                                                                      | हो               |
| `Unit Tests fast-path`                           | Code PR हरू; 4-shard एकाइ सुइट                                                                                                                                                                                      | हो               |
| `No new ESLint warnings`                         | Code PR हरू; suppression-aware lint सुरक्षा                                                                                                                                                                         | हो, फोर्कहरूसहित |
| `Merge integrity (changelog + generated skills)` | गैर-मस्यौदा PR हरू; changelog र उत्पन्न गरिएको skill समक्रमण                                                                                                                                                        | हो, फोर्कहरूसहित |

#### बिर्सिएका sibling परीक्षणहरूको रिपोर्ट

`npm run check:forgotten-sibling-tests` ले परीक्षण-प्रभाव नक्साको पछाडि रहेको import resolver पुनः प्रयोग गर्छ।
प्रत्येक परिवर्तन गरिएको उत्पादन मोड्युलका लागि, सम्भावित
परीक्षण pull-request diff मा अनुपस्थित हुँदा यसले निर्धारणात्मक
`changed module/symbol -> static consumer -> candidate sibling test` शृङ्खलाहरू रिपोर्ट गर्छ।
Markdown सारांश र JSON परिणामलाई कुनै पनि अवरोधकारी रोलआउटअघि क्यालिब्रेसनका लागि
`forgotten-sibling-tests` कार्यप्रवाह artifact का रूपमा सुरक्षित राखिन्छ।

Barrel पुनः-निर्यातहरू र dynamic imports रिजोल्युसन निदानका लागि मात्र हुन्; तिनले कहिल्यै
अवरोधक निष्कर्ष सिर्जना गर्दैनन्। समीक्षा गरिएका अपवादहरू
`config/quality/forgotten-sibling-allowlist.json` मा रहन्छन्। प्रत्येक प्रविष्टिले consumer र candidate
test को नाम उल्लेख गर्नुपर्छ, विशिष्ट औचित्य दिनुपर्छ, र GitHub issue वा pull request को लिङ्क दिनुपर्छ। विकृत प्रविष्टिहरू
पूर्वनिर्धारित रूपमा असफल हुन्छन्। अपवादहरूले मेटाइएको candidate test वा `.skip`/`.todo` थप्ने diff लाई दबाउन सक्दैनन्;
assertion कमजोर पार्ने र अन्य masking को जिम्मेवारी स्वतन्त्र रूपमा अवरोध गर्ने
`check:test-masking` gate मै रहन्छ।

### कार्य: `lint`

`main` तर्फका प्रत्येक PR मा चल्छ। असफल भएमा merge रोक्छ।

| Script (`npm run ...`)            | के प्रमाणीकरण गर्छ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | अवरोधक                                      |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `check:node-runtime`              | Node.js को संस्करण समर्थित दायराभित्र छ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | हो                                          |
| `check:cycles`                    | सम्पूर्ण `src/` + `open-sse/` भरिका circular imports (AST-आधारित, tsconfig `paths` रिजोल्भ गरिएको)। Bare = सल्लाहमूलक, cycles सूचीबद्ध गर्छ। `check:cycles:ratchet` (CI ले चलाउने) ले गणना `quality-baseline.json` मा रहेको `metrics.cycles` सीमाभन्दा बढी हुँदा अवरोध गर्छ — हाल 14, `direction: down`, त्यसैले यो घट्न मात्र सक्छ (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | हो (ratchet)                                |
| `check:boundary`                  | `open-sse → src` coupling: engine बाट app तर्फका अद्वितीय file-to-file imports (`scripts/quality/measure-boundary.mjs`; edge सूची v4 core/module-split remediation backlog हो)। Bare = सल्लाहमूलक प्रतिवेदन (`quality:boundary` जस्तै)। `check:boundary:ratchet` (CI ले चलाउने, र `quality.yml` को fast-gates ratchet loop मा पनि रहेको) ले गणना `quality-baseline.json` मा रहेको `metrics.boundaryOpenSseToSrc` सीमाभन्दा बढी हुँदा अवरोध गर्छ — मापन गरिएको 771 मा प्रारम्भ गरिएको, `direction: down`; `--update` ले यसलाई घटाउन मात्र सक्छ                                                                                                                                                                                                                                                                                                                                                                                          | हो (ratchet)                                |
| `check:route-validation:t06`      | सबै routes मा Zod schemas उपस्थित छन् (Tier 6 नीति)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | हो                                          |
| `check:any-budget:t11`            | `@ts-expect-error // any` को सङ्ख्या बजेटभन्दा बढी हुँदैन (Tier 11 catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | हो                                          |
| `check:provider-consistency`      | `providers.ts` मा भएका प्रत्येक provider को `providerRegistry.ts` मा मिल्दो प्रविष्टि हुन्छ (र allowlist भित्र यसको उल्टो पनि लागू हुन्छ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | हो                                          |
| `check:model-lifecycle`           | हातैले मर्मत गरिने तीनवटा routing table जाँच गरी repository मा राखिएको lifecycle snapshot (#11503) सँग सुसङ्गत रहन्छन्: `FITNESS_TABLE` (`taskFitness.ts`) ले `REGISTRY` ले route गर्न सक्ने कुनै पनि retired id लाई score गर्दैन; प्रत्येक `BUILT_IN_ALIASES` target `REGISTRY` मा उपस्थित र retired-id snapshot मा अनुपस्थित हुन्छ; `REGISTRY` मा अझै रहेको प्रत्येक retired id लाई forward गरिएको वा `allowedRetiredInCatalog` मा सूचीबद्ध गरिएको हुन्छ; र कुनै पनि `DEFAULT_DEGRADATION_MAP` source वा target उक्त snapshot मा retired का रूपमा देखिँदैन। यसले कुनै model हाल live upstream बाट उपलब्ध गराइँदै छ भन्ने प्रमाणित गर्दैन। Offline — `config/quality/model-lifecycle.json` सँग तुलना गर्छ, जसलाई `npm run quality:refresh-model-lifecycle` प्रयोग गरेर हातैले refresh गरिन्छ (network; CI मा जोडिएको छैन)। `allowedRetiredInCatalog` एक burn-down ratchet हो: tracking issue भएको अवस्थामा मात्र प्रविष्टि थप्नुहोस्। | हो                                          |
| `check:fetch-targets`             | client-side `src/` मा भएका प्रत्येक `fetch("/api/...")` वास्तविक `route.ts` मा resolve हुन्छन्                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | हो                                          |
| `check:deps`                      | repo का प्रत्येक `package.json` मा रहेका `npm install` गर्न मिल्ने सबै deps `dependency-allowlist.json` मा हुन्छन्; नयाँ unpinned वा slopsquatted package हरूलाई flag गरिन्छ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | हो                                          |
| `audit:deps`                      | `npm audit` (root + electron) — कुनै high/critical advisory छैन (osv `check:vuln-ratchet` सँग overlap हुन्छ; Rationalization Backlog हेर्नुहोस्)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | हो                                          |
| `check:lockfile`                  | `package-lock.json` को अखण्डता — https रजिस्ट्री, अखण्डता ह्यासहरू, कुनै होस्ट ओभरराइड छैन                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | हो                                          |
| `check:licenses`                  | उत्पादन निर्भरताहरूका लागि SPDX इजाजतपत्र अनुमति-सूची                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | हो                                          |
| `check:tracked-artifacts`         | कुनै बिल्ड आर्टिफ्याक्ट / कमिट गरिएका `node_modules` सिमलिङ्कहरू छैनन् (husky pre-commit मा पनि चल्छ; pre-push जानाजानी हल्का राखिएको छ — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | हो                                          |
| `check:ai-attribution`            | PR कमिटहरू, शीर्षक वा मुख्य भागमा कुनै AI/bot `Co-Authored-By` ट्रेलर वा AI-जेनरेसन फुटर छैन — कडा नियम #16 (`quality.yml` को PR→`release/**` का लागि fast-gates लूपमा — इभेन्ट पेलोड पढ्छ, PR बाहिर केही गर्दैन — र `ci.yml` lint मा PR→`main` का लागि PR-मात्र चरण; साथै husky `commit-msg` हुक; मानव सह-लेखकहरूलाई अनुमति छ; #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `check:vitest-exclusions`         | प्रत्येक Vitest बहिष्करणले ट्र्याकिङ इस्यु उल्लेख गर्छ र `config/quality/vitest-exclusions.json` मा देखा पर्छ (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | हो                                          |
| `check:file-size`                 | स्रोत फाइलहरू (`src/`, `open-sse/`, `electron/`, `bin/` भित्रका `.ts`/`.tsx`) `cap` भित्र र परीक्षण फाइलहरू (`*.test.ts(x)`) `testCap` भित्र रहन्छन्; `file-size-baseline.json` मा फ्रिज गरिएका फाइलहरू (`frozen` / `testFrozen`) तिनको अभिलेखित आकारभन्दा बढ्न हुँदैन                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | हो                                          |
| `check:error-helper`              | executors/handlers मा त्रुटि प्रतिक्रियाहरूले `buildErrorBody()` / `sanitizeErrorMessage()` प्रयोग गर्छन् (कडा नियम #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | हो                                          |
| `check:migration-numbering`       | Migration SQL फाइलहरू क्रमिक रूपमा सङ्ख्याङ्कित छन्, कुनै खाली क्रम वा दोहोरो सङ्ख्या छैन                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | हो                                          |
| `check:public-creds`              | `publicCreds.ts` बाहिर कुनै पनि प्रत्यक्ष OAuth `client_id`/`client_secret` वा Firebase Web कुञ्जीहरू छैनन् (कडा नियम #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | हो                                          |
| `check:db-rules`                  | `src/lib/db/` मोड्युलहरू बाहिर कुनै raw SQL छैन; `localDb.ts` बाट कुनै barrel-imports छैनन् (कडा नियमहरू #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | हो                                          |
| `check:known-symbols`             | आफ्ना dispatch tables मा दर्ता भएका provider executors, routing strategies, र translators डिस्कमा भएका फाइलहरूसँग मेल खान्छन् — कुनै छुटेका वा घोषणा नगरिएका symbols छैनन्                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | हो                                          |
| `check:route-guard-membership`    | child process सुरु गर्ने प्रत्येक route लाई `isLocalOnlyPath()` द्वारा वर्गीकृत गरिएको छ (कडा नियमहरू #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | हो                                          |
| `check:test-discovery`            | रिपोमा भएका प्रत्येक `*.test.ts` / `*.spec.ts` फाइललाई कम्तीमा एउटा परीक्षण रनरले सङ्कलन गर्छ (र्याचेट: `test-discovery-baseline.json` मा रहेको अनाथ सूची घट्न मात्र सक्छ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | हो                                          |
| `check:agent-skills-sync`         | उत्पन्न गरिएका एजेन्ट-सीप आर्टिफ्याक्टहरू तिनको स्रोत क्याटलगसँग मेल खान्छन् (कुनै विचलन छैन)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `check:provider-asset-provenance` | प्रदायकका लोगो/एसेटहरूमा अभिलेख गरिएको उत्पत्ति प्रविष्टि हुन्छ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `lint:json`                       | JSON कन्फिगरेसन फाइलहरू पार्स हुन्छन् र रिपोका लिन्ट नियमहरू पूरा गर्छन्                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `typecheck:core`                  | त्रुटिविनाको TypeScript कम्पाइलेसन (सल्लाहात्मक चेतावनीहरू मात्र)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | हो                                          |
| `typecheck:noimplicit:core`       | कडा `noImplicitAny` — भविष्योन्मुख; पहिलेदेखि रहेका धेरै कल साइटहरूलाई अझै एनोटेसन आवश्यक छ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | **सल्लाहात्मक** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `src/app/(dashboard)/**` मा सीमित `tsc` (#7033) — `typecheck:core` को सावधानीपूर्वक छानिएको 27-फाइल अनुमतिसूचीमा कुनै पनि ड्यासबोर्ड TSX समावेश छैन, र `next build` ले पनि यसलाई कहिल्यै प्रकार-जाँच गर्दैन (`next.config.mjs` ले `ignoreBuildErrors: true` सेट गर्छ), त्यसैले त्यहाँका अनाथ-पहिचानकर्ता रिग्रेसनहरू (#6625/#6909) CI लाई देखिँदैनथे। स्थिर गरिएको प्रति-फाइल/प्रति-TS-कोड गणना आधाररेखा (`config/quality/dashboard-typecheck-baseline.json`, `check:known-symbols` कै जस्तो पुरानो-अवस्था कार्यान्वयन ढाँचा) सँग भिन्नता जाँचिन्छ — आधाररेखामा रहेको गणनाभन्दा बाहिरका नयाँ त्रुटिहरूले मात्र गेट असफल गराउँछन्; पहिलेदेखिको त्रुटि सच्याइँदा `--update` प्रयोग गरेर र्याचेट घटाउनुहोस्।                                                                                                                                                                                                                              | हो                                          |

### कार्य: `quality-gate`

`test-coverage` पछि चल्छ। असफल भएमा मर्ज हुन रोक्छ।

| स्क्रिप्ट                    | प्रमाणीकरण                                                                                                                                                                      | अवरोध गर्ने              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `quality:collect`            | `quality-metrics.json` उत्पन्न गर्छ (ESLint चेतावनी सङ्ख्या, मर्ज गरिएको शार्ड रिपोर्टबाट कभरेज)                                                                                | हो (र्याचेटको अपस्ट्रिम) |
| `quality:ratchet`            | `quality-baseline.json` को प्रत्येक मेट्रिक कमजोर भएको छैन (ESLint चेतावनीहरू ≤ आधाररेखा; कभरेज ≥ आधाररेखा)                                                                     | हो                       |
| `check:duplication`          | कोड दोहोरोपन (jscpd@4) ले `quality-baseline.json` को आधाररेखा नाघ्दैन                                                                                                           | हो                       |
| `check:complexity`           | फाइल-स्तरीय साइक्लोम्याटिक जटिलताले सीमा नाघ्दैन (मुख्य ESLint `complexity` + `max-lines-per-function`)                                                                         | हो                       |
| `check:cognitive-complexity` | संज्ञानात्मक जटिलता र्याचेट (`eslint-plugin-sonarjs`) — छुट्टै ESLint पास; CI ले दुवैलाई एउटै `check:complexity-ratchets` चरणका रूपमा मर्ज गरेर चलाउँछ                          | हो                       |
| `check:dead-code`            | प्रयोग नगरिएका एक्सपोर्टहरू / फाइलहरूको र्याचेट (knip) आधाररेखाको तुलनामा कमजोर हुँदैन                                                                                          | हो                       |
| `check:compression-budget`   | कम्प्रेसन बेन्चमार्क बजेट — प्रत्येक इन्जिनका टोकन-बचत न्यूनतम सीमाहरू कमजोर हुनु हुँदैन                                                                                        | हो                       |
| `check:type-coverage`        | टाइप गरिएको प्रतिशतको र्याचेट (`type-coverage`) कमजोर हुँदैन; यसले धेरै हदसम्म `typecheck:noimplicit:core` लाई समेट्छ                                                           | हो                       |
| `check:codeql-ratchet`       | खुला CodeQL अलर्टहरूको सङ्ख्या कमजोर हुँदैन (`gh api` मार्फत पढ्छ; टोकन नभए सहज रूपमा स्किप हुन्छ) — रिफ्रेस आवृत्ति र म्यानुअल ट्रिगरका लागि: तलको "CodeQL र्याचेट" हेर्नुहोस् | हो                       |

### कार्य: `quality-extended`

सम्पूर्ण कार्य सल्लाहात्मक हो (`continue-on-error: true`)। npm-आधारित र्याचेटहरू
वास्तवमै चल्छन्; बाह्य स्क्यानरहरू `gh release download` मार्फत इन्स्टल हुन्छन् र बाइनरी
अझै अनुपस्थित हुँदा आफैँ स्किप हुन्छन् (exit 0)।

| स्क्रिप्ट                | प्रमाणीकरण                                                                                                                                                                                                         | अवरोध गर्ने                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| `check:circular-deps`    | कुनै सर्कुलर डिपेन्डेन्सी छैन (dpdm)                                                                                                                                                                               | **सल्लाहात्मक**                                    |
| `check:bundle-size`      | बन्डलको आकारले सीमा नाघ्दैन                                                                                                                                                                                        | **सल्लाहात्मक**                                    |
| `check:secrets`          | गोप्य जानकारीको स्क्यानिङ (gitleaks) — बाइनरी अनुपस्थित भएमा स्किप हुन्छ                                                                                                                                           | **सल्लाहात्मक**                                    |
| `check:vuln-ratchet`     | डिपेन्डेन्सीका कमजोरीहरू (osv-scanner) बढ्दैनन् — बाइनरी अनुपस्थित भएमा स्किप हुन्छ                                                                                                                                | **सल्लाहात्मक**                                    |
| `check:workflows`        | वर्कफ्लो लिन्ट (actionlint + zizmor); स्क्यानर हराएको/बिग्रिएको, अमान्य रिपोर्ट वा र्याचेट आधाररेखा नभएमा INCOMPLETE का रूपमा असफल हुन्छ। मान्य निष्कर्षहरूले चयन गरिएको कडा/सल्लाहात्मक/र्याचेट नीति पालना गर्छन् | कार्यान्वयन आवश्यक; CI मा zizmor र्याचेट अवरोधकारी |
| `check:openapi-breaking` | आधार शाखाको तुलनामा सार्वजनिक API सम्झौता (`openapi.yaml`) मा भएका ब्रेकिङ परिवर्तनहरू (oasdiff) — `openapiBreaking=N` उत्पन्न गर्छ; oasdiff अनुपस्थित भएमा वा आधार स्पेसिफिकेसन समाधान गर्न नसकिएमा स्किप हुन्छ   | **सल्लाहात्मक**                                    |

### कार्य: `docs-sync-strict`

`main` मा आउने प्रत्येक PR मा चल्छ। असफल भएमा मर्ज हुन रोक्छ।

| स्क्रिप्ट                      | प्रमाणीकरण गर्छ                                                                                                                                           | अवरोधक                       |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `check:docs-all`               | तलका 6 वटा उप-गेट क्रमिक रूपमा चलाउने मेटा-गेट                                                                                                            | हो                           |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt संस्करणको एकरूपता                                                                                                           | हो                           |
| ↳ `check:docs-counts`          | गद्यमा भएका सङ्ख्याहरू (प्रदायक सङ्ख्या, माइग्रेसन सङ्ख्या, आदि) वास्तविक सङ्ख्याहरूको ratchet विन्डोभित्र छन्                                            | हो                           |
| ↳ `check:env-doc-sync`         | `.env.example` मा भएको प्रत्येक env var कागजातको तालिकामा अभिलेखित छ, र उल्टो पनि                                                                         | हो                           |
| ↳ `check:deprecated-versions`  | कागजातमा अप्रचलित संस्करण स्ट्रिङहरू छैनन्                                                                                                                | हो                           |
| ↳ `check:doc-links`            | कागजातका आन्तरिक markdown लिङ्कहरू वास्तविक फाइलहरूमा समाधान हुन्छन् (`[text]`/`(path)` ढाँचा)                                                            | हो                           |
| ↳ `check:fabricated-docs`      | कागजातमा उल्लेख गरिएका routes, env vars, CLI commands, hook नामहरू, र file paths कोडबेसमा अवस्थित छन्। `--strict` मार्फत हार्ड गेट; फ्ल्यागबिना सफ्ट-फेल। | हो (CI मा `--strict` मार्फत) |
| `check:cli-i18n`               | CLI command स्ट्रिङहरू सबै i18n locale फाइलहरूमा उपस्थित छन्                                                                                              | हो                           |
| `check:openapi-coverage`       | OpenAPI spec ले कम्तीमा वास्तविक routes को ratchet गरिएको न्यूनतम सीमा समेट्छ                                                                             | हो                           |
| `check:openapi-security-tiers` | `openapi.yaml` का सुरक्षा तह annotation हरू `routeGuard.ts` का वर्गीकरणसँग एकरूप छन्                                                                      | **सल्लाहात्मक**              |
| `check:openapi-routes`         | `openapi.yaml` को प्रत्येक path वास्तविक `route.ts` मा समाधान हुन्छ (भ्रम-निरोध)                                                                          | हो                           |
| `check:docs-symbols`           | `docs/**/*.md` मा भएको प्रत्येक `/api/...` सन्दर्भ वास्तविक `route.ts` मा समाधान हुन्छ (भ्रम-निरोध)                                                       | हो                           |
| `i18n translation drift`       | i18n locale फाइलहरूमा अनुवाद नगरिएका keys — चेतावनी मात्र                                                                                                 | **सल्लाहात्मक**              |

### कार्य: `i18n-ui-coverage`

| स्क्रिप्ट                         | प्रमाणीकरण गर्छ                                                                                                                                                                       | अवरोधक          |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `check-ui-keys-coverage` (इनलाइन) | UI i18n key coverage ≥ 65% छ                                                                                                                                                          | हो              |
| `check-ui-value-drift` (इनलाइन)   | पुनर्लेखन गरिएको अङ्ग्रेजी **value** ले कुनै पुरानो अनुवाद बाँकी छोड्दैन                                                                                                              | हो              |
| `check-new-key-coverage` (इनलाइन) | एउटा **नयाँ** अङ्ग्रेजी key प्रत्येक locale मा अनुवादित छ — `__MISSING__:` marker अस्वीकार गरिन्छ                                                                                     | हो              |
| `check-translation-ratio`         | प्रति locale वास्तविक-अनुवाद अनुपात (allowlist बाहिरका अङ्ग्रेजीसँग समान / placeholder / छुटेका leaves) `config/quality/i18n-translation-baseline.json` + slack भन्दा बढी हुनु हुँदैन | **सल्लाहात्मक** |

`fetch-depth: 0` आवश्यक पर्छ — value-drift gate ले merge base विरुद्ध `en.json` को diff गर्छ।

#### `check-ui-value-drift` — पुरानो-अनुवाद गेट

अन्य गेटहरूले संरचनात्मक रूपमा देख्न नसक्ने एउटा i18n regression यसले समात्छ: कुनै अङ्ग्रेजी value
पुनर्लेखन गरिन्छ र _अघिल्लो_ अङ्ग्रेजीबाट व्युत्पन्न अनुवादहरू यथावत् रहन्छन्, जसले गर्दा
गैर-अङ्ग्रेजी प्रयोगकर्ताहरूले आत्मविश्वासपूर्ण शैलीमा लेखिएको तर अहिले गलत भइसकेको पाठ पढिरहन्छन्।

यो वास्तविक रूपमा उत्पादनमा पुगेको थियो। Antigravity login helper थपिँदा (#5203)
`oauthModal.googleOAuthWarning` पुनर्लेखन गरिएको थियो; **43 मध्ये 39 locale हरूमा** अपरेटरहरूलाई "पूरै
URL प्रतिलिपि गरेर तल टाँस्नुहोस्" भन्ने पाठ नै रह्यो — उक्त प्रदायकका लागि पूरा हुन नसक्ने प्रक्रिया। यो
#8463 सम्म थाहा भएन, किनभने:

- `sync-ui-keys` ले **अनुपस्थित** keys मात्र backfill गर्छ, **पुराना** भएकालाई कहिल्यै गर्दैन;
- `check-ui-keys-coverage` ले key को _उपस्थिति_ गणना गर्छ, त्यसैले पुरानो अनुवाद पनि समेटिएको मानिन्छ;
- `check-translation-drift` ले `docs/i18n/<locale>/**.md` का documentation mirrors ट्र्याक गर्छ —
  यसले `src/i18n/messages/*.json` कहिल्यै पढ्दैन। 2026-09 को पुनः-sync देखि job `docs-sync-strict` मा अवरोधक: कुनै core doc सम्पादन गर्नुहोस् → `npm run i18n:run -- --files=<doc>` (section-level, कम खर्चिलो)।

**Diff-सचेत, baseline-समर्थित होइन।** यसले merge base मा रहेको `en.json` लाई
working tree सँग तुलना गर्छ; अंग्रेजी मान परिवर्तन भएको प्रत्येक key का लागि, अझै
नछोइएको अनुवाद राख्ने कुनै पनि locale पुरानो मानिन्छ। यसले जानाजानी **पहिलेदेखिको ऋणलाई स्थिर राख्छ** — diff ले
लामो समयदेखि रहेको अनुवाद कुन पुरानो अंग्रेजीबाट आएको हो भन्ने देखाउन सक्दैन, त्यसैले gate ले
हालको परिवर्तनले छोएका कुराहरूलाई मात्र मूल्याङ्कन गर्छ। वैकल्पिक उपाय (प्रति-key hash baseline) का लागि
करिब 600 KB को generated file आवश्यक पर्थ्यो, जुन सबैभन्दा ठूलो विद्यमान baseline भन्दा 3× ठूलो हुन्थ्यो र प्रत्येक i18n PR मा परिवर्तन भइरहन्थ्यो।

यसलाई पूरा गर्ने दुई तरिका छन्:

1. प्रभावित अनुवादहरू अद्यावधिक गर्नुहोस्, वा
2. तिनलाई `__MISSING__:<new english>` मा सेट गर्नुहोस् — त्यसपछि runtime ले सच्याइएको अंग्रेजी उपलब्ध गराउँछ
   (`src/i18n/request.ts::deepMergeFallback`, #7258) र key अनुवादका लागि पङ्क्तिबद्ध हुन्छ।

यदि string को **अर्थ** परिवर्तन भएको छ भने, **key को नाम परिवर्तन गर्नुलाई** प्राथमिकता दिनुहोस्: नयाँ key ले
पुरानो अनुवाद उत्तराधिकारमा पाउन सक्दैन। #8463 मा यही ढाँचा प्रयोग गरिएको थियो।

```bash
npm run i18n:check-value-drift          # कडा (CI ले चलाउने)
npm run i18n:check-value-drift:warn     # रिपोर्ट मात्र
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

base catalog पढ्न नसकिँदा (base ref बिनाको shallow
clone) `SKIP reason=base-unresolved` सहित 0 मा exit हुन्छ, जसले `check-openapi-breaking` को व्यवहार प्रतिबिम्बित गर्छ।

### Job: `i18n`

पूर्ण i18n प्रमाणीकरण matrix (प्रत्येक locale का लागि एउटा job)। सम्पूर्ण job परामर्शात्मक छ।

| Script                          | प्रमाणीकरण गर्ने कुरा             | Blocking                                                     |
| ------------------------------- | --------------------------------- | ------------------------------------------------------------ |
| `validate_translation.py quick` | प्रत्येक locale को अनुवाद पूर्णता | **परामर्शात्मक** (सम्पूर्ण job मा `continue-on-error: true`) |

### Job: `pr-test-policy`

pull request हरूमा मात्र चल्छ।

| Script                 | प्रमाणीकरण गर्ने कुरा                                                                                                                       | Blocking |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `check:pr-test-policy` | `src/`, `open-sse/`, `electron/`, वा `bin/` मा production code परिवर्तन गर्ने PR हरूले test समावेश वा अद्यावधिक गर्नुपर्छ (कडा नियम #8)     | हो       |
| `check:test-masking`   | परिवर्तन गरिएका test file हरूले कुल assert सङ्ख्या घटाउँदैनन् वा `assert.ok(true)` tautology थप्दैनन्                                       | हो       |
| `check:pr-evidence`    | PR body ले परिवर्तनका लागि test/VPS प्रमाण उल्लेख गर्छ (PR prose लाई grep गरेर कडा नियम #18 यान्त्रिकीकरण गर्छ — नाजुक, Backlog हेर्नुहोस्) | हो       |

### Job: `test-vitest`

`build` पछि चल्छ। असफल भएमा merge रोक्छ।

| Suite            | प्रमाणीकरण गर्ने कुरा                                    | Blocking                                                                                                                  |
| ---------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP server (110 tools), autoCombo, cache — vitest runner | हो                                                                                                                        |
| `test:vitest:ui` | UI component test हरू — vitest runner                    | **Blocking** — पहिलेदेखिका failure हरू `vitest.config.ts` मा स्पष्ट रूपमा बहिष्कृत छन्; नयाँ failure ले job असफल बनाउँछन् |

### Nightly workflow हरू (तालिकाबद्ध, परामर्शात्मक)

यी cron तालिका (र `workflow_dispatch`) मा चल्छन्, PR हरूमा कहिल्यै चल्दैनन्। सबै परामर्शात्मक छन्।

| Workflow               | प्रमाणीकरण गर्ने कुरा                                                                                                                                               | Blocking         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `nightly-property`     | random seed + उच्च run count सहितका fast-check property test हरू                                                                                                    | **परामर्शात्मक** |
| `nightly-resilience`   | heap-growth gate, chaos fault-injection, k6 load/soak                                                                                                               | **परामर्शात्मक** |
| `nightly-llm-security` | promptfoo injection guard (block mode) + garak probe हरू (provider secret बिना skip गरिन्छ)                                                                         | **परामर्शात्मक** |
| `nightly-schemathesis` | `docs/openapi.yaml` प्रयोग गरेर live OmniRoute विरुद्ध OpenAPI contract fuzzing (schemathesis) — spec उल्लङ्घनहरू / सम्हाल्न नसकिएका 500 हरू उजागर गर्छ (चरण 8 B.4) | **परामर्शात्मक** |
| `nightly-mutation`     | fast unit lane मा Stryker mutation-testing score — बाँचेका mutant हरूले कमजोर assert उजागर गर्छन्                                                                   | **परामर्शात्मक** |
| `nightly-compat`       | समर्थित `engines.node` range हरूमा Node engine compatibility matrix                                                                                                 | **परामर्शात्मक** |

Performance baseline हरू (heap, TTFB, build time) अभिलेख गरिन्छन्, gate गरिँदैनन्: [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`) हेर्नुहोस्।

---

## गति चरण (2026-08-30 → v4.0 LTS): प्रत्येक आधाररेखा 20% ले खुकुलो पारियो

स्वामित्व निर्णय (2026-08-30): v4.0 मोड्युलराइजेसनसम्म, प्राविधिक ऋणको सीमा कायम राख्नुभन्दा
रिलिजको गति बढी महत्त्वपूर्ण हुन्छ। प्रत्येक **सङ्ख्यात्मक** र्याचेट आधाररेखालाई एउटै
लेखापरीक्षणयोग्य प्रक्रियामा 20% ले खुकुलो पारियो, र चरणलाई `config/quality/quality-baseline.json` मा घोषणा गरिएको छ:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| के परिवर्तन भयो                                                                                                                                                                                    | कहाँ                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `metrics.*.value` — कम हुनु राम्रो हुने गणना ×1.2, बढी हुनु राम्रो हुने प्रतिशत ÷1.2 (कभरेजको न्यूनतम सीमा 60 कायम, `eslintErrors` 0 मै, `eslintWarnings` 0 → स्थिर गरिएको suppression गणनाको 20%) | `quality-baseline.json` (`_relax_velocity_2026_08_30` टिप्पणीले प्रत्येक अघिल्लो → पछिल्लो मान सूचीबद्ध गर्छ) |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                   | `complexity-baseline.json`, `duplication-baseline.json`                                                       |
| `cap`, `testCap`, प्रत्येक `frozen[*]` / `testFrozen[*]` लाइन सीमा ×1.2                                                                                                                            | `file-size-baseline.json`                                                                                     |
| प्रति-फाइल / प्रति-TS-code गणना ×1.2                                                                                                                                                               | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json`        |
| `THRESHOLD` 36 → 30                                                                                                                                                                                | `scripts/check/check-openapi-coverage.mjs`                                                                    |
| `_policy.requireTighten === false` हुँदा `--require-tighten` सल्लाहकारी बन्छ                                                                                                                       | `scripts/quality/check-quality-ratchet.mjs`                                                                   |
| रात्रिकालीन `bank-ratchet-shrinks` रोकिन्छ (यसले मापन गरिएको कमी सञ्चित गरेर अतिरिक्त सीमा हटाउने थियो)                                                                                            | `.github/workflows/nightly-release-green.yml`                                                                 |

अनुमति सूचीहरू (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **बजेट होइनन्** र तिनलाई परिवर्तन गरिएको छैन। पास/फेल नीति गेटहरू (गोप्य जानकारी, SQL नियमहरू,
कागजात/env सम्झौता, i18n समानता, एकाइ परीक्षणहरू) अपरिवर्तित छन् — रातो परीक्षण अझै पनि रातो परीक्षण नै हो।

**उपकरणहरू**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — एकपटक मात्र गरिने
  खुकुलोपना (`scripts/quality/relax-baselines.mjs`); उही टिप्पणीसँग दोस्रोपटक चल्न अस्वीकार गर्छ।
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  प्रत्येक सङ्ख्यात्मक गुणस्तर जाँचलाई CI कै तरिकाले मापन गर्छ र प्रत्येक जाँचका लागि बाँकी गुन्जायस देखाउँछ
  (`scripts/quality/baseline-headroom.mjs`)। हरेक रात चल्ने `baseline-headroom` कार्यले तालिकालाई
  वर्कफ्लो सञ्चालनको सारांशमा प्रकाशित गर्छ र आफ्नो JSON/Markdown प्रतिवेदन
  `baseline-headroom-<run_id>` नाममा अपलोड गर्छ, जुन 90 दिनसम्म राखिन्छ। चेतावनी र गम्भीर अवस्थाका पङ्क्तिहरूले
  सीमासम्म 10% वा कम गुन्जायस बाँकी भएका वा सीमा नाघिसकेका जाँचहरू देखाउँछन्।
  तोकिएको बजेट प्रयोग हुँदै गएको अग्रिम चेतावनीका रूपमा यी प्रतिवेदनहरू समीक्षा गर्नुहोस्; सम्बन्धित जाँचका
  `_rebaseline_*` टिप्पणीहरू हेर्नुहोस्। कार्यले अब स्थायी इश्यू सिर्जना वा अद्यावधिक गर्दैन;
  #12149 ले पहिलेका प्रतिवेदनहरूको इतिहास सुरक्षित राख्छ।

**नयाँ-कोड मोड (कोड लेख्दै सफा राख्ने) — 2026-08-30 देखि, PR द्रुत-मार्गमा मात्र**

`pull_request` घटनाहरूमा `quality.yml` ले `check:file-size`,
`check:complexity-ratchets` र `check:dead-code` लाई `--base-ref <PR base SHA>` पठाउँछ। त्यो मोडमा गेटले HEAD लाई
merge-base सँग **PR ले छोएका फाइलहरूमा मात्र सीमित गरेर** तुलना गर्छ (`scripts/check/newCodeMode.mjs`:
merge-base लाई अस्थायी `git worktree` मा तयार गरिन्छ, ESLint/knip त्यहाँ र HEAD मा चलाइन्छ, अनि
प्रति-फाइल गणनाहरूको भिन्नता निकालिन्छ):

- **अवरोधक** — PR ले परिवर्तन गरेका फाइलहरूमा cyclomatic/cognitive उल्लङ्घन वा dead exports थप्यो
  (लगमा `complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=`);
- **सल्लाहकारी** — स्थिर गरिएको आधाररेखासँग विश्वव्यापी कुलको तुलना। विरासतमा आएको विचलनले निर्दोष
  PR लाई कहिल्यै रातो बनाउँदैन; रिलिज मिलानका क्रममा विचलन पुनः स्थिर गरिन्छ र headroom कार्यले त्यसको निगरानी गर्छ।

`workflow_dispatch` रनहरू, release-green स्वीप र रात्रिकालीन headroom कार्यसँग PR आधार हुँदैन
र तिनले निरपेक्ष (विश्वव्यापी) तुलना कायम राख्छन्। कभरेज, duplication र type-coverage हालका लागि
विश्वव्यापी नै रहन्छन् (तिनका उपकरणहरूले सस्तो रूपमा प्रति-फाइल भिन्नता निकाल्दैनन्) — उही व्यवहारका लागि सम्भावित उम्मेदवारहरू।

**v4.0 मा चरण बन्द गर्ने (LTS = पहिलेभन्दा कडा, "सामान्य अवस्थामा फिर्ता" होइन)**

1. शुद्ध `release/v4.0.0` टिपमा: अभिलेखका लागि `npm run quality:headroom --json`, त्यसपछि
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update`, प्रत्येक typecheck गेटको
   `--update` — हरेक baseline मापन गरिएको मानमा झर्छ।
2. `quality-baseline.json` बाट `_policy` मेटाउनुहोस् (`--require-tighten` र रात्रिकालीन
   banking लाई पुनः सक्रिय गर्छ), `check-openapi-coverage.mjs` मा `THRESHOLD = 36` (वा बढी) पुनर्स्थापना गर्नुहोस्।
3. modularization प्रभावकारी भएका ठाउँमा मापन गरिएको मानभन्दा अझ कडा बनाउनुहोस्: file-size `cap` लाई पुनः 1000
   (वा 800), coverage floors +5, modularized packages का लागि dead exports 0।

## र्याचेट आधाररेखा (`quality-baseline.json`)

र्याचेट इन्जिन (`scripts/quality/check-quality-ratchet.mjs`) ले `quality-baseline.json`
पढ्छ र त्यसलाई भर्खरै सङ्कलन गरिएको `quality-metrics.json` सँग तुलना गर्छ। आफ्नो इप्सिलनभन्दा
बढी पछाडि गएको कुनै पनि मेट्रिकले बिल्ड असफल गराउँछ।

हाल ट्र्याक गरिएका मेट्रिकहरू:

| मेट्रिक               | दिशा   | अर्थ                                  |
| --------------------- | ------ | ------------------------------------- |
| `eslintWarnings`      | `down` | ESLint चेतावनीको सङ्ख्या बढ्नु हुँदैन |
| `coverage.statements` | `up`   | स्टेटमेन्ट कभरेज घट्नु हुँदैन         |
| `coverage.lines`      | `up`   | लाइन कभरेज घट्नु हुँदैन               |
| `coverage.functions`  | `up`   | फङ्सन कभरेज घट्नु हुँदैन              |
| `coverage.branches`   | `up`   | ब्रान्च कभरेज घट्नु हुँदैन            |

वास्तविक सुधारपछि आधाररेखा अद्यावधिक गर्न:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update` फ्ल्यागले हाल मापन गरिएका मानहरू `quality-baseline.json` मा लेख्छ।
मेट्रिक सुधार गर्ने परिवर्तनसँगै यो फाइल कमिट गर्नुहोस्। मेट्रिक सुधार गर्ने तर
आधाररेखा अद्यावधिक नगर्ने PR लाई `--require-tighten` ले समात्नेछ (चरण 6A.5,
कार्यान्वयन हुन बाँकी)।

### CodeQL र्याचेट: रिफ्रेस आवृत्ति र म्यानुअल ट्रिगर

`check:codeql-ratchet` ले **तालिकाअनुसार रिफ्रेस हुने रिपोको अवस्था पढ्छ — प्रत्येक PR मा होइन।**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` ले
`state: configured`, `schedule: weekly` रिपोर्ट गर्छ: यो GitHub को default-setup स्क्यान हो,
प्रत्येक push को विश्लेषण होइन। परिणामस्वरूप: अलर्टहरू समाधान गर्ने PR मर्ज भएपछि, र्याचेटले
अर्को निर्धारित स्क्यान नचल्दासम्म पुरानै, बढी सङ्ख्या पढिरहन्छ — त्यसैले स्क्यान अद्यावधिक
नहुञ्जेल समाधान गर्ने PR कै पछिल्ला PR हरूसहित प्रत्येक खुला PR मा यसले रिग्रेसन रिपोर्ट गर्छ।

**म्यानुअल रिफ्रेस**: `gh workflow run codeql.yml --ref release/vX.Y.Z` ले विश्लेषण पुनः चलाउँछ
र केही मिनेटभित्र अलर्टहरू पुनः प्रकाशित गर्छ। पहिले `.github/workflows/codeql.yml`
पढ्नुहोस् — यसको हेडरले यो `workflow_dispatch`-मात्र हुनुको कारण **GitHub को "default setup"
सँग द्वन्द्व हुनु** हो भनेर व्याख्या गर्छ (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`)। `push`/`pull_request`/
`schedule` ट्रिगरहरू पुनर्स्थापना गर्न पहिले **मालिकको कार्य** आवश्यक हुन्छ: Settings → Code security →
CodeQL: Default → Advanced। त्यो स्विच नगरी `schedule:` ट्रिगर नथप्नुहोस् — त्यसले
असफल रनहरू मात्र उत्पादन गर्नेछ।

**सङ्ख्या घटेपछि आधाररेखा कस्नुहोस्** — `node scripts/check/check-codeql-ratchet.mjs
--update` ले नयाँ मापन गरिएको सङ्ख्या `quality-baseline.json` →
`metrics.codeqlAlerts.value` मा लेख्छ, जसले गर्दा र्याचेटले पुरानो अधिकतम सीमासम्मको रिग्रेसनलाई
चुपचाप अनुमति दिँदैन। कार्य गरिएको उदाहरण (2026-09-02/03): PR #12502 ले 7 वटा वास्तविक अलर्ट
समाधान गर्यो (मापन गरिएका खुला अलर्ट 13 → 6); PR #12530 ले त्यससँग मिलाउन स्थिर आधाररेखा 11 → 6
मा कस्यो; त्यसपछि बाँकी 6 वटालाई प्रत्येक अलर्टको औचित्यसहित खारेज गरेर खुला अलर्टको सङ्ख्या 0
मा झारियो।

**खारेजी अपरेटरको निर्णय हो (कडा नियम #14)** — खारेजी टिप्पणीमा प्राविधिक औचित्य अभिलेख नगरी
CodeQL अलर्ट कहिल्यै खारेज नगर्नुहोस्: upstream-protocol आवश्यकताका लागि `won't fix`,
परीक्षण फिक्स्चरका लागि `used in tests`, र CodeQL ले देख्न नसक्ने sanitizer का लागि
`false positive` (नजिर: `docs/security/ERROR_SANITIZATION.md`)।

---

## परीक्षण पुनःप्रयास नीति (WS5.4, v3.8.49)

पुनःप्रयास प्रत्येक रनरका लागि छुट्टाछुट्टै हुन्छ, कहिल्यै पनि विश्वव्यापी रूपमा लागू हुँदैन — सबैमा लागू हुने पुनःप्रयासले वास्तविक रिग्रेसनहरूलाई
अदृश्य फ्लेकहरूमा बदल्छ:

| रनर              | नीति                                                                                                                                | किन                                                                                                                                  |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Playwright (e2e) | CI मा मात्र `retries: 1`, साथै `trace: on-first-retry`                                                                              | ब्राउजर/नेटवर्कको समय निर्धारण वास्तवमै अनिश्चित हुन्छ; ट्रेससहितको एउटा पुनःप्रयासले फ्लेकलाई निदान गर्न सकिने आर्टिफ्याक्टमा बदल्छ |
| Vitest           | विश्वव्यापी पुनःप्रयास हुँदैन। फ्लेकी प्रमाणित परीक्षणले स्पष्ट प्रतिपरीक्षण पुनःप्रयास पाउँछ (diff मा देखिने, PR मा समीक्षा गरिने) | क्वारेन्टिन सूचीलाई repo मै राख्छ, कहिल्यै अपारदर्शी बनाउँदैन                                                                        |
| node:test (unit) | कहिल्यै पुनःप्रयास हुँदैन                                                                                                           | फ्लेकी युनिट परीक्षण भनेको परीक्षणमै भएको बग हो — त्यसलाई सुधार्नुहोस्, फेरि चलाएर भाग्य नजाँच्नुहोस्                                |

फ्लेक टेलिमेट्री उपलब्ध भएपछि लक्षित SLO हरू (WS5.2/5.3): प्रत्येक परीक्षणमा <1% फ्लेक दर
("अहिले नै सुधार्नुहोस्" सीमा), प्रत्येक पाइपलाइनमा ≥95% उत्तीर्ण दर। उद्योगका सन्दर्भ मानहरू —
हाम्रै मापनहरूअनुसार पुनःक्यालिब्रेट गर्नुहोस्।

## रिलिज-स्तरीय र्याचेट ड्रिफ्ट (WS5.5, v3.8.49)

जब कुनै र्याचेट (फाइल आकार, जटिलता, eslint चेतावनीहरू) शुद्ध रिलिज
टिपमा रिग्रेस हुन्छ — अर्थात्, मर्जहरूको संयोजनले त्यसलाई रिग्रेस गराएको हो र कुनै एकल PR ले आफ्नै
ब्रान्चमा उक्त रिग्रेसन पुनरुत्पादन गर्दैन — तब सुधारको जिम्मेवारी **रिलिज क्याप्टेनको हुन्छ, एकपटक,
रिलिज ब्रान्चमा**: एक्स्ट्र्याक्सन/रिफ्याक्टरलाई प्राथमिकता दिनुहोस्; दस्तावेजीकृत
औचित्य प्रविष्टिसहित मात्र पुनःबेसलाइन गर्नुहोस्। संयोजन ड्रिफ्टलाई योगदानकर्ताको PR माथि कहिल्यै नथोपर्नुहोस्, र प्रत्येक
PR का लागि पुनःबेसलाइन कहिल्यै नगर्नुहोस् (त्यसले वास्तविक रिग्रेसनहरू लुकाउँछ)। पहिले छुट्याएर पहिचान गर्नुहोस्: तपाईंको PR ले यो निम्त्याएको हो भनी मान्नुअघि
प्रोब worktree मा शुद्ध टिपविरुद्ध असफलता पुनरुत्पादन गर्नुहोस्।

## र्याचेटका कमीहरू सञ्चित गर्ने — घट्दो दिशा (#8584)

र्याचेट आधा मात्र स्वचालित छ, र त्यो गलत आधा हो। क्याप **बढाउनु** भनेको
दस सेकेन्ड लाग्ने म्यानुअल JSON सम्पादन हो र असफल PR लाई अवरोधमुक्त गर्ने सबैभन्दा छिटो तरिका हो।
क्याप **घटाउन** कसैले `--update` चलाएर नतिजा commit गर्नुपर्छ — र
`bank-ratchet-shrinks` job उपलब्ध नहुँदासम्म कुनै workflow ले यसलाई चलाउँदैनथ्यो। मापन गरिएको परिणाम
(2026-07-25): 18 वटा frozen फाइलहरू पहिले नै 800-लाइनको नयाँ-फाइल क्यापमा वा त्यसभन्दा तल थिए, सबैभन्दा खराब
132× मा (`src/shared/validation/schemas.ts`, 19 लाइनले 2,523 को क्याप बोकेको); जटिलता
सीमा ~37 वटा पुनःबेसलाइन नोटहरूमा `1794 → 2169` पुग्यो, जसमा ठ्याक्कै एकपटक मात्र
कमी (−1) भयो; र "अर्को चक्रमा `--update` मार्फत कस्नुहोस्" 31 पटक लेखियो तर
एकपटक मात्र पालना गरियो। जुन कोडका कारण क्याप तय भएको थियो, त्यो कोडभन्दा लामो समयसम्म क्याप कायम रहँदा सम्पन्न गरिएको हरेक
विघटन चुपचाप उक्त फाइल अर्को पटक सम्पादन गर्ने व्यक्तिका लागि वृद्धि अनुमतिमा बदलिन्छ।

`nightly-release-green.yml` → job **`bank-ratchet-shrinks`** ले त्यो चक्र पूरा गर्छ:

|               |                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| चल्छ          | `schedule` (दिनमा 3×) + `workflow_dispatch` — जानाजानी `push` मा **होइन**                                  |
| मापन गर्छ     | उच्चतम `release/vX.Y.Z`, `release-green` कै जस्तो रिजोल्युसन + इन्जेक्सन गार्ड                             |
| लेख्छ         | `check:file-size --update` र `check:complexity-ratchets --update` (दुवै संरचनागत रूपमा घटाउन मात्र मिल्ने) |
| प्रमाणित गर्छ | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                   |
| पठाउँछ        | रिलिज ब्रान्चविरुद्ध सधैँ अद्यावधिक रहने एउटा PR — बलपूर्वक अद्यावधिक गरिने, कहिल्यै स्प्याम नगरिने        |

सञ्चय प्रत्येक push मा नगरी ब्याचमा गरिन्छ, किनकि यसमा विलम्बसम्बन्धी कुनै आवश्यकता हुँदैन (8h भित्र
सञ्चित गरिएको कमी पर्याप्त हुन्छ), तर प्रत्येक merge मा चलाउँदा merge अभियानका क्रममा PR ब्रान्च बारम्बार
पुनर्निर्माण हुन्थ्यो र हरेक पटक पूर्ण ESLint वाकको लागत लाग्थ्यो। पहिचान भने
push (`release-green`) मै रहन्छ; सञ्चय मात्र ब्याचमा गरिन्छ।

### सुरक्षा प्रमाणक

job ले मानवीय हस्तक्षेपबिना baselines मा लेख्छ, त्यसैले `verify-ratchet-bank.mjs` ले
त्यसलाई स्वीकार्य बनाउँछ। यसले `--update` पछिको tree लाई `HEAD` सँग diff गर्छ र हरेक परिवर्तन निम्नमध्ये एउटा नभएसम्म
**कुनै commit बन्नुअघि नै job रोक्छ** — र कुनै PR खोल्दैन:

- `frozen` / `testFrozen` को सङ्ख्यात्मक प्रविष्टि **घटाइएको** वा **हटाइएको**
- `complexity-baseline.json` → `count` **घटाइएको**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **घटाइएको**

अरू कुनै पनि परिवर्तन असफल हुन्छ: सङ्ख्या बढाउने, प्रविष्टि थप्ने, `cap`/`testCap` परिवर्तन गर्ने, वा
`_rebaseline_*` नोट मेटाउने/पुनर्लेखन गर्ने (ती नोटहरू प्रत्येक
सीमा किन अस्तित्वमा छ भन्ने अडिट ट्रेल हुन् र फाइल प्रविष्टिहरू रहेकै `frozen` object भित्र भण्डारण गरिएका हुन्छन्)।
क्याप बढाउन सक्ने bot विद्यमान अवस्थाभन्दा निश्चित रूपमा झन् खराब हुन्थ्यो। रिग्रेसन
गार्ड: `tests/unit/verify-ratchet-bank.test.ts`।

job ले `release/*` मा कहिल्यै push गर्दैन — कुनै मानवले PR merge गर्छ, त्यसैले गलत मापन
समीक्षा नभई समावेश हुन सक्दैन।

## अनुमति-सूची नीति

पहिल्यैदेखि रहेका उल्लङ्घनहरूका कारण असफल हुन नसक्ने प्रत्येक गेटले स्थिर अनुमति-सूची प्रयोग गर्छ
(जस्तै, `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`)। नीति यस्तो छ:

**मूल कारण समाधान गर्नुहोस्; उल्लङ्घन पहिल्यैदेखि रहेको र सोही PR मा समाधान गर्न
नसकिने अवस्थामा मात्र अनुमति-सूची प्रयोग गर्नुहोस्।**

अनुमति-सूचीमा प्रविष्टि थप्दा:

1. औचित्यसहितको टिप्पणी समावेश गर्नुहोस्।
2. ट्र्याकिङ इस्यु उल्लेख गर्नुहोस् (जस्तै, `// #3498 — चरण 2 को सुविधा, अझै कार्यान्वयन गरिएको छैन`)।
3. उल्लङ्घन समाधान गर्ने सोही PR मा प्रविष्टि हटाउनुहोस् — अब सक्रिय उल्लङ्घनलाई
   दबाउन नसक्ने पुरानो प्रविष्टि आफैंमा एउटा त्रुटि हो (कार्यान्वयन भएपछि 6A.3 पुरानो-प्रवर्तनले
   अनाथ अनुमति-सूची प्रविष्टिका कारण गेट असफल गराउनेछ)।

परीक्षणहरू छिटो पास गराउन अनुमति-सूचीमा प्रविष्टिहरू **नथप्नुहोस्**। बढ्दो
अनुमति-सूची भएको हरियो गेटले गुणस्तरको झूटो अनुभूति दिन्छ।

### तपाईंको PR मा गेट असफल हुँदा

1. **गेटको आउटपुट ध्यानपूर्वक पढ्नुहोस्** — कुन फाइल वा प्रतीकले नियम उल्लङ्घन गर्यो भन्ने कुरा यसले ठ्याक्कै बताउँछ।
2. **उल्लङ्घन समाधान गर्नुहोस्** — अधिकांश गेटहरू निर्धार्य फाइलसिस्टम जाँच हुन्, जुन कोड सही हुनेबित्तिकै पास हुन्छन्।
3. **उल्लङ्घन पहिल्यैदेखि रहेको भए** (अर्थात्, तपाईंले त्यसलाई ल्याउनुभएको होइन तर अब गेटले
   त्यसलाई समेट्छ): औचित्य टिप्पणी र ट्र्याकिङ इस्युसहित अनुमति-सूचीमा प्रविष्टि थप्नुहोस्।
4. **गेट र्याचेट भए** (कभरेज, ESLint चेतावनीहरू, दोहोरोपन, जटिलता):
   तपाईंको परिवर्तनले मेट्रिक बिगारेको छ। अन्तर्निहित समस्या समाधान गर्नुहोस्, वा (विरलै) परिवर्तन
   जानाजानी गरिएको र मेट्रिकको गिरावट स्वीकार्य भए `npm run quality:ratchet -- --update`
   चलाउनुहोस् — तर PR विवरणमा त्यसको कारण अभिलेख गर्नुहोस्।
5. **परामर्शात्मक गेटहरू** (`continue-on-error: true`) जानकारीमूलक हुन् — तिनले
   मर्ज रोक्दैनन् तर CI सारांशमा देखिन्छन्। तैपनि तिनलाई समाधान गर्नुहोस्।

---

## नयाँ गेट थप्ने

1. `scripts/check/check-<name>.mjs` (वा `.ts`) सिर्जना गर्नुहोस्। नीति गेटहरू 0/1 निकास गर्छन्।
   र्याचेट-शैलीका गेटहरूले `collect-metrics.mjs` मार्फत `quality-metrics.json` मा मेट्रिक उत्सर्जन गर्छन्।
2. `package.json` मा `"check:<name>": "node scripts/check/check-<name>.mjs"` थप्नुहोस्।
3. यसलाई `.github/workflows/ci.yml` मा उपयुक्त जबअन्तर्गत जडान गर्नुहोस्
   (नीति → `lint` वा `docs-sync-strict`; र्याचेट → `quality-gate`)।
4. यसमा अनुमति-सूची छ भने, पुराना प्रविष्टिहरू स्वतः पत्ता लगाउन
   `scripts/check/lib/allowlist.mjs` बाट `reportStaleEntries()` लागू गर्नुहोस्।
5. गेटको पहिचान तर्क समेट्ने परीक्षण `tests/unit/build/` मा लेख्नुहोस्।
6. यो कागजात अद्यावधिक गर्नुहोस् (सान्दर्भिक जब तालिकामा एउटा पङ्क्ति थप्नुहोस्)।

---

## एजेन्ट टुलिङ: LSP-in-the-loop (ऐच्छिक)

CI गेटहरूभन्दा बाहिर, OmniRoute ले **ऐच्छिक** `agent-lsp` स्काफोल्ड
(परियोजना-स्तरीय `.mcp.json`, Fase 7 Task 15) उपलब्ध गराउँछ। कोडिङ एजेन्टहरूलाई TypeScript भाषा सर्भर उपलब्ध गराउन `.mcp.json`
सिर्जना गर्नुहोस्, ताकि तिनले कोड लेख्नुभन्दा **पहिले** प्रतीकहरू /
डायग्नोस्टिक्स समाधान गरून् — यो `typecheck:core` को compile-before-claim सहायक हो,
जसले "आविष्कार गरिएका प्रतीक" त्रुटिहरूलाई स्रोतमै घटाउँछ। यसलाई जानाजानी
स्वतः लोड गरिँदैन (तपाईंले MCP↔LSP ब्रिज छान्नुहुन्छ र प्रमाणीकरण गर्नुहुन्छ); बिग्रिएको प्रविष्टिले
जडान त्रुटि मात्र लग गर्छ र सेसनहरूलाई कहिल्यै बिगार्दैन।

---

## युक्तिसङ्गतीकरण ब्याकलग (ROI समीक्षा — चरण 9 लहर 3)

यो सूचीलाई 2026-06-17 मा `ci.yml` सँग मिलान गरिएको थियो (अघिल्लो संस्करणमा
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence` छुटेका थिए)। मिलान गरिएको सेटको ROI
समीक्षाले निम्न युक्तिसङ्गतीकरणका उम्मेदवारहरू पहिचान गर्यो। **मर्जहरू यान्त्रिक CI
परिवर्तनहरू हुन्; फ्लिप/हटाउने कार्यहरू अपरेटरका लागि आरक्षित नीतिगत निर्णयहरू हुन्।**
तलका कुनै पनि कुरा अहिलेसम्म लागू गरिएको छैन।

**माथि दस्तावेजीकरण नगरिएका थप कुराहरू** (परामर्शात्मक, न्यून सङ्केत): `docs-lint` जब
(markdownlint + Vale, सम्पूर्ण जबमा `continue-on-error`) र छुट्टाछुट्टै स्क्यानर वर्कफ्लोहरू
`semgrep.yml` / `codeql.yml` / `scorecard.yml`। `semgrepFindings: 0`
`quality-baseline.json` मा छ तर `ci.yml` मा कुनै अवरोधक र्याचेटसँग जोडिएको छैन — यो मेट्रिक
हाल अनाथ छ।

### मर्ज / दोहोरोपन हटाउने (यान्त्रिक, कम जोखिम)

प्रत्येक उम्मेदवारलाई 2026-06-17 को प्रत्यक्ष गेट अवस्थासँग प्रमाणीकरण गरिएको थियो
(विश्वास गर, तर पुष्टि पनि गर); धेरै "स्पष्ट" देखिने मर्जहरूले ऋण लुकाएका रहेछन् र ती
**सफा रूपमा सीधै प्रतिस्थापन गर्न मिल्ने** छैनन्।

- **`check:docs-sync` दुई पटक चल्छ** — `lint` जबमा छुट्टै र फेरि `check:docs-all` (`docs-sync-strict`) तथा husky pre-commit हुकभित्र। ✅ **सम्पन्न** — छुट्टै `lint` आह्वान हटाइयो।
- **CVE स्क्यानिङ** — ❌ **सफा मर्ज होइन।** `audit:deps` ले कुनै पनि उच्च/गम्भीर CVE मा कडा रूपमा असफल गराउँछ; `check:vuln-ratchet` (osv) भने आधाररेखाको तुलनामा _पश्चगमन_ भएमा मात्र असफल हुन्छ (हाल 1 MODERATE)। अर्थविज्ञान फरक छन् — `audit:deps` हटाउँदा निरपेक्ष उच्च/गम्भीर गेट हराउनेछ। दुवै राख्नुहोस्।
- **चक्र पत्ता लगाउने** — ✅ **सम्पन्न** (#15159 G-01/G-02)। यहाँको पुरानो पाठले `check:cycles` लाई "हरियो, छनोट गरिएको" गेट भनेको थियो र `check:circular-deps` (dpdm) ले 91 चक्र रिपोर्ट गरेको कारण यसलाई अवरोधक राख्नुपर्ने औचित्य दिएको थियो। त्यो हरियो अवस्था **झूटो हरियो** थियो: `check:cycles` ले 5 उपनिर्देशिका (450 फाइल) स्क्यान गर्थ्यो, स्थिर `import|export … from` सँग मात्र मिलान गर्थ्यो, र प्रत्येक `@/` तथा `@omniroute/open-sse/` स्पेसिफायर हटाउँथ्यो, त्यसैले यसले रिपोजिटरीमा हाबी भएका dynamic-import + alias चक्रहरू देख्न सक्दैनथ्यो। सुधार गरियो: गेटले अब `src` + `open-sse` (5023 फाइल) मा खोज्छ, TypeScript AST बाट स्पेसिफायरहरू सङ्कलन गर्छ (त्यसैले `import("…")` गणना हुन्छ र type-position `typeof import("…")` हुँदैन), र tsconfig `paths` समाधान गर्छ। यसले 0 होइन, **14** चक्र फेला पार्छ। पहिलेदेखि रहेका 14 चक्रलाई गेट PR मा सुधार्न नसकिने भएकाले, `check:cycles` अब **र्याचेट** हो (`--ratchet`, `quality-baseline.json` मा सीमा `metrics.cycles.value = 14`, `direction: down`) — यसले कुनै पनि _पश्चगमन_ रोक्छ र सङ्ख्या घट्न मात्र सक्छ। CI ले `npm run check:cycles:ratchet` चलाउँछ। क्रमिक न्यूनीकरण **A-01** सँगै अघि बढ्छ। `check:circular-deps` (dpdm) व्यापक दोस्रो रायका रूपमा परामर्शात्मक नै रहन्छ।
- **जटिलता** — ✅ **सम्पन्न** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): एउटै ESLint भ्रमण, ruleId अनुसार गणना गरिन्छ ताकि cyclomatic+max-lines र cognitive आधाररेखाहरू स्वतन्त्र रहून्; छुट्टाछुट्टै `check:complexity` / `check:cognitive-complexity` स्थानीय `--update` का लागि कायम छन्।
- **`/api` भ्रम-निरोध** — ✅ **सम्पन्न** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): `src/app/api` को एउटै FS सूचीकरण, openapi-routes + docs-symbols ले अझै पनि स्वतन्त्र रूपमा रिपोर्ट गर्छन्; छुट्टाछुट्टै जाँचहरू स्थानीय रनका लागि कायम छन्।
- **`check:node-runtime` 11 जबमा चल्छ** — ⚠️ **न्यून ROI।** प्रत्येक छुट्टै रनर हो र जाँच <1s को छ; सस्तो प्रति-जब सुरक्षा गुमाउनुको सट्टा कुल बचत ~10s मात्र हुन्छ। यस्तो फेरबदल गर्न लायक छैन।
- **CI lint मा `typecheck:noimplicit:core`** — ✅ **lint जबबाट हटाइयो** (परामर्शात्मक `continue-on-error` थियो); अवरोधक type surface `typecheck:core` + `check:type-coverage` हो। स्थानीय स्क्रिप्ट कायम राखिएको छ।

### फ्लिप / निर्णय (अपरेटर नीति)

- `check:openapi-security-tiers` (परामर्शात्मक) — ❌ **सफा रूपमा फ्लिप गर्न मिल्दैन।** यो 0 सहित बाहिरिन्छ तर `LOCAL_ONLY_API_PREFIXES` अन्तर्गतका धेरै `traffic-inspector` रुटहरूमा `x-loopback-only: true` एनोटेसन नभएको चेतावनी दिन्छ। यसलाई लागू गराउन पहिले `openapi.yaml` मा ती एनोटेसनहरू थप्नुपर्छ।
- `typecheck:noimplicit:core` (परामर्शात्मक) — अवरोधक `check:type-coverage` र्याचेटले यसको अधिकांश भाग समेट्छ। यसलाई र्याचेटमा फ्लिप गर्नुहोस् वा अनावश्यक दोस्रो `tsc` पास हटाउनुहोस्।
- `test:vitest:ui` (अहिले **अवरोधक**) — पहिलेदेखिका असफलताहरूलाई `vitest.config.ts` मा `// #8618` ट्र्याकिङ टिप्पणीहरूसहित स्पष्ट रूपमा बहिष्कार गरिएको छ; नयाँ असफलताले जब असफल गराउँछन्।
- `check:secrets` (gitleaks, दस्तावेजीकृत 3 false-positive मा स्थिर गरिएको अवरोधक र्याचेट) — 0 मा पुग्न ती 3 वटालाई allowlist गर्नुहोस्, वा परामर्शात्मकमा घटुवा गर्नुहोस्। GitHub को नेटिभ secret-scanning + `check:public-creds` सँग दोहोरिन्छ।
- `check:pr-evidence` (अवरोधक, PR-body गद्यमा grep गर्छ) — false-positive को उच्च जोखिम; हटाइएमा Hard Rule #18 को कार्यान्वयन कमजोर हुन्छ, त्यसैले यो वास्तविक नीतिगत निर्णय हो।
- `semgrep` (परामर्शात्मक छुट्टै वर्कफ्लो) — OWASP परिवारहरूका लागि CodeQL सँग दोहोरिन्छ; यसको आधाररेखालाई र्याचेटसँग जोड्नुहोस् वा हटाउनुहोस्।

---

## सम्बन्धित दस्तावेजीकरण

- आपूर्ति शृङ्खला (उत्पत्ति, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — कुञ्जी-सेट समानता गेट

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, कार्य `i18n-ui-coverage`)।
प्रत्येक `src/i18n/messages/<locale>.json` को लीफ कुञ्जी-सेटलाई `en.json` सँग तुलना गर्छ र
कुञ्जी कहिले थपिएको थियो भन्ने कुराको परवाह नगरी कुनै लीफ छुटेमा वा अतिरिक्त भएमा असफल हुन्छ। `__MISSING__:`
प्लेसहोल्डरहरूलाई उपस्थित मानिन्छ (तिनको सामग्री अनुपात गेटको विषय हो)। यो दुईवटा
diff-आधारित/प्रतिशत गेटको पूर्ण पूरक हो: `check-ui-keys-coverage` ले प्रत्येक locale मा 80 % को
न्यूनतम सीमा लागू गर्छ (~13,000 मध्ये 43 कुञ्जी अनुपस्थित हुँदा पनि 99.7 % देखिन्छ) र
`check-new-key-coverage` ले PR ले `en.json` मा थपेका कुञ्जीहरूलाई मात्र मूल्याङ्कन गर्छ। कुनै locale
ब्याचको branch काटिएको दिनको `en.json` बाट त्यो ब्याच सिर्जना गरिन्छ र base मा कुञ्जीहरू थपिँदै गर्दा
अनुवादको काम कैयौँ दिनसम्म चल्छ; ब्याच PR आफैँले कुनै कुञ्जी थप्दैन, त्यसैले ब्याच 1 (#13044)
नौ locale मा 43 कुञ्जी कम र ब्याच 2 (#13660) आठ locale मा 10 कुञ्जी कम भएर समावेश हुँदा पनि
दुवै सहोदर गेट मौन रहे (2026-09-15)। असफलता सच्याउन
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` चलाउनुहोस्; `extra` लीफको
अर्थ स्रोतबाट त्यो हटाइएको हो — locale बाट पनि त्यसलाई मेटाउनुहोस्। `--warn` ले असफल नगराई
रिपोर्ट गर्छ। `--catalog=cli` ले `bin/cli/locales` माथि उही तुलना चलाउँछ
(`npm run i18n:check-keys:cli`); दुवै चरण `i18n-ui-coverage` कार्यमा छन्।

#### `check-new-key-coverage` — नयाँ-कुञ्जी i18n गेट

`check-ui-value-drift` को सहोदर। त्यसले अनुवादहरू अद्यावधिक नगरी छाडिएको अवस्थामा **पुनर्लेखन
गरिएको** अङ्ग्रेजी मान समात्छ; यसले केही locale ले कहिल्यै नपाएको **थपिएको** अङ्ग्रेजी कुञ्जी
समात्छ।

`check-ui-keys-coverage` ले यो वर्ग देख्न सक्दैन: यसले प्रत्येक locale मा प्रतिशतको न्यूनतम सीमा
लागू गर्छ, र ~13,000 मध्ये एघार कुञ्जी अनुपस्थित हुँदा पनि coverage 99.9% नै रहन्छ। प्रत्येक भाषाको
प्रतिशतले "यो सुविधा अनुवाद नभई जारी भयो" भन्ने कुरा व्यक्त गर्न सक्दैन — कुनै पूरै सुविधा नयाँ
locale मा कुनै पाठविनै समावेश हुन सक्छ र सङ्ख्या कहिल्यै परिवर्तन नहुन सक्छ।

यसले अभिलेख गर्ने घटना: Orchestration Canvas को Phase 3 ले त्यस समयमा रहेका 42 locale मा आफ्ना
एघार कुञ्जी अनुवाद गरेको थियो। केही घण्टापछि EU-language ब्याच (#13044) ले repo लाई 51 locale
सम्म पुर्यायो, र नौ नयाँ locale (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) ले ती
कुञ्जीहरू कहिल्यै पाएनन्। `deepMergeFallback` ले अनुपस्थित कुञ्जीको सट्टा अङ्ग्रेजी राख्छ, त्यसैले
असफलताको स्वरूप खाली UI नभई अनुवाद नगरिएको UI थियो — वास्तविक, र बनोटकै कारण मौन।

आफ्नो सहोदरजस्तै यो पनि **diff-aware** छ, जसले merge base मा रहेको अङ्ग्रेजीलाई working tree सँग
तुलना गर्छ, त्यसैले पहिलेदेखिका रिक्तताहरू यथावत् रहन्छन् र गेट सक्रिय गर्न कुनै migration आवश्यक
परेन।

**`__MISSING__:<english>` मार्करले यसलाई सन्तुष्ट गर्दैन (2026-09-17 देखि)।** पहिले यो
दस्तावेजीकृत स्थगन-विधि थियो — runtime सही अङ्ग्रेजीमा फर्कन्छ — तर 2026-09-16 मा आठ feature PR ले
61 कुञ्जी थपे र अनुवाद गर्नुको सट्टा सबै 65 locale मा मार्कर राखे: यो गेटले ती सबैलाई स्वीकार गर्यो,
PR हरूलाई केहीले रोकेन, र त्यसपछि blocking real-translation ratio gate सबैका लागि release tip मा
असफल भयो (pt-BR 3.2 % > 2.5 % + 0.5)। अब मार्करलाई अनुपस्थित अनुवादका रूपमा मूल्याङ्कन गरिन्छ।
असफलता सच्याउन
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40` चलाउनुहोस्,
वा `npm run i18n:translate-new-keys` (`scripts/i18n/translate-new-keys.sh`, detached-safe,
`OMNIROUTE_TRANSLATION_*` env बिना सुरु हुन अस्वीकार गर्छ) मार्फत सबै locale समानान्तर रूपमा
अनुवाद गर्नुहोस्। अङ्ग्रेजीमै रहनुपर्ने कुञ्जी (निश्चित product/engine/flag नाम)
`scripts/i18n/untranslatable-keys.json` मा हुनुपर्छ, मार्कर पछाडि कहिल्यै होइन। `vi` ले मार्करहरू
पूर्ण रूपमा निषेध गर्छ (`tests/unit/i18n-vi-completeness.test.ts`)।

#### `check-vitest-exclusions` — रोकिराखिएका परीक्षणको गेट

`vitest.config.ts` को `exclude` सूचीमा रहेको फाइल नचल्ने परीक्षण हो, र tree पढ्ने व्यक्तिलाई त्यो
coverage जस्तो देखिन्छ। `// #8618 — pre-existing failure; remove this exclusion when fixed`
टिप्पणी पछाडि बयसट्ठी फाइल जम्मा भए। Issue #8618 लाई 2026-08-11 मा बन्द गरिएको थियो, जबकि त्यसले
ट्र्याक गरेको सूची 45 entry बाट 62 सम्म बढ्यो र प्रत्येक नयाँ entry ले निष्क्रिय issue तर्फ
सङ्केत गर्ने टिप्पणी ग्रहण गर्यो। अन्ततः सूचीलाई फाइलअनुसार मापन गर्दा (#13204), **62 मध्ये 51 वटा
हालको tree विरुद्ध कुनै source परिवर्तनविनै सफल भए**।

वास्तविक फाइलमा resolve हुने प्रत्येक exclusion ले (a) tracking issue उल्लेख गर्न र (b) आफ्नो
मापन गरिएको status सहित `config/quality/vitest-exclusions.json` मा देखिन गेटले आवश्यक बनाउँछ,
ताकि एउटा थप्नु भनेको 60-entry array मा अर्को लाइन थप्नुको सट्टा छुट्टै फाइलमा समीक्षा गर्न मिल्ने
diff होस्। यसले जानाजानी excluded परीक्षणहरू पुनः चलाउँदैन — त्यसमा ~10 मिनेट लाग्छ र त्यो आवधिक
कार्यमा पर्छ; प्रत्येकलाई अन्तिम पटक कहिले मापन गरिएको थियो भन्ने inventory ले अभिलेख राख्छ।
