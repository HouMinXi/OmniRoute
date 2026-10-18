# Guardrails (Oʻzbekcha)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Haqiqatning asosiy manbasi:** `src/lib/guardrails/`
> **Soʻnggi yangilanish:** 2026-08-29 — v3.8.51 (Video Bridge transkriptining kelib chiqishi chaqiruvchi tomonidan eʼlon qilinadi,
> server tomonidan hali tasdiqlanmaydi — #11661 ga muvofiq aniqlashtirildi)

Guardrail’lar OmniRoute va yuqori oqim provayderlari oʻrtasidagi chegarada xavfsizlik, siyosat va kontent oʻzgartirishlarini taʼminlaydi. Har bir guardrail soʻrov yuklamalarini (`preCall`) va yuqori oqim javoblarini (`postCall`) tekshirishi (hamda ixtiyoriy ravishda rad etishi, oʻzgartirishi yoki izoh bilan belgilashi) mumkin.

Tizim **xatoda ochiq qoladi**: agar guardrail bajarilish vaqtida istisno chiqarsa, registr xatoni qayd etadi va soʻrovni muvaffaqiyatsiz yakunlash oʻrniga keyingi guardrail bilan davom etadi. Bloklash tasodif emas, balki aniq qarordir (`block: true`).

## Ichki himoya mexanizmlari

Reyestr import paytida ustuvorlik tartibida oltita himoya mexanizmini avtomatik yuklaydi
(`registry.ts` → `registerDefaultGuardrails()` ga qarang):

| Ustuvorlik | Nomi                | Bosqich(lar)   | Fayl                  |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ustuvorlik raqami kichikroq bo‘lganlari **birinchi** bajariladi.

### Vision Bridge (`visionBridge.ts`) — Modallik ko‘prigi PR-1

**Tasvirni qo‘llab-quvvatlamaydigan modellarga** yo‘naltirilgan, tasvirlarni o‘z ichiga oluvchi so‘rovlarni ushlab qoladi va butun so‘rovni tasvirni qo‘llab-quvvatlaydigan modelga qayta yo‘naltiradi yoki yuqori oqimdagi chaqiruvdan oldin tasvir qismlarini sozlanadigan tasvir modeli yaratgan matnli tavsiflar bilan almashtiradi. Bu faqat matn bilan ishlaydigan provayderlarga multimodal foydali yuklamalarni shaffof tarzda qayta ishlash imkonini beradi.

Jarayon:

1. Agar maqsadli model tasvirni allaqachon qo‘llab-quvvatlasa, o‘tkazib yuboring (u majburiy ko‘prik ro‘yxati `isVisionBridgeForcedModel` ichida bo‘lmasa).
2. Tasvir qismlarini `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) orqali ajratib oling; u `open-sse/utils/mediaParts.ts` ichidagi **yagona media detektori** `detectMediaParts()` ga vakolat beradi — bu combo moslik filtri bilan birgalikda ishlatiladigan yagona ishonchli manbadir.
   Ajratib olish faqat `replaceImageParts` qayta joylashtira oladigan shakllarning yuqori darajadagi qismlariga ruxsat beradi (ajratish↔almashtirish shartnomasi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` va Responses API `input_image`. Ichki joylashtirilgan mosliklar va faqat indikatorli shakllar combo filtri uchun mo‘ljallangan material bo‘lib, hech qachon ajratib olinmaydi.
   Hech narsa topilmasa, o‘tkazib yuboring.
3. Ishlash vaqti konfiguratsiyasini `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) orqali aniqlang: yangi `modalityBridge*`
   sozlama kalitlari ustunlik qiladi; eski `visionBridge*` kalitlari **bir sikllik zaxira variant** (orqaga qaytarish oynasi) sifatida saqlanadi. Ko‘prik o‘chirilgan bo‘lsa, media bo‘ylab har qanday o‘tishdan oldin o‘tkazib yuboring.
4. Rejim selektori (`modalityBridgeVisionMode`, quyidagi jadvalga qarang) qayta yo‘naltirish yoki tavsiflashni tanlaydi. Qayta yo‘naltirish faqat `model` almashtirilgan `modifiedPayload` hamda `{ rerouted, fromModel, toModel, imagesKept }` metama’lumotlarini qaytaradi.
5. Tavsiflash yo‘li: tasvirlar sonini `maxImages` bilan cheklaydi, vazifani hisobga oluvchi ko‘rsatmani tuzadi, tavsif keshini tekshiradi, tasvir modelini **parallel ravishda**
   (`Promise.allSettled`) chaqiradi va ularning o‘rniga `[Image N]: <description>` matn qismlarini joylashtiradi. Muvaffaqiyatsiz tavsiflash `null` qaytaradi va asl tasvir qismi
   **saqlab qolinadi** (#4012) — bundan combo tavsiflash yo‘lida barcha tavsiflashlar muvaffaqiyatsiz bo‘lgan holat mustasno; bunda tasvirni qo‘llab-quvvatlamasligi tasdiqlangan yuqori oqimga
   `(mavjud emas — tasvirni qo‘llab-quvvatlaydigan provayder ulanmagan)` o‘rinbosari yuboriladi (#8430).
6. `modifiedPayload` va metama’lumotlarni (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) qaytaring.

#### Rejim selektori (`modalityBridgeVisionMode`)

| Rejim      | Standart | Xatti-harakat                                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔        | Eski evristika, o‘zgartirilmagan (#6640/#7204): combo bo‘lmagan/`auto/` modellar eng yaxshi tasvir modeliga qayta yo‘naltiriladi, bundan asl modelda ishlatish mumkin bo‘lgan hisob ma’lumotlari mavjud holat mustasno (unda tavsiflanadi); combo maqsadlari doimo tavsiflanadi.                                                                                               |
| `describe` |          | Har doim tavsiflaydi — qayta yo‘naltirish bloki butunlay o‘tkazib yuboriladi; foydalanuvchi tanlagan model doimo javob beradi.                                                                                                                                                                                                                                                 |
| `reroute`  |          | Majburiy qayta yo‘naltirish: hisob ma’lumotlariga ega modelni saqlash himoyasi chetlab o‘tiladi. Qayta yo‘naltirish **maqsadi** uchun hisob ma’lumotlari himoyasi hali ham amal qiladi — ishlatish mumkin bo‘lgan tasvir maqsadi mavjud bo‘lmasa, so‘rov tavsiflashga o‘tadi, shunda xom tasvirlar hech qachon faqat matn bilan ishlaydigan backend’ga yetib bormaydi (#8430). |

Majburiy rejimlar avtomatik evristika ishga tushishidan **oldin** jarayonni qisqa tutashtiradi; `auto` xatti-harakati PR-1 dan oldingi himoya mexanizmi bilan baytma-bayt bir xil.

#### API kaliti ko‘lami (`visionBridgeKeyScope.ts`)

Chaqiruvchining API kaliti `allowedConnections`, kvota havzalari
(`allowedQuotas`) yoki modellarni (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) cheklasa, ko‘prik faqat kalit foydalanishi mumkin bo‘lgan ulanishlardagi va kalitga ruxsat etilgan qayta yo‘naltirish hamda tavsiflash modellarini tanlaydi. Keyin tavsiflash chaqiruvi har doim `x-omniroute-self-loop-key-id` sarlavhasi bilan OmniRoute o‘z-o‘ziga qaytish sikli orqali o‘tadi, shunda qabul qiluvchi chat so‘rovi ushbu kalitning ulanish va model siyosatini yana bir bor qo‘llaydi. `enforceApiKeyPolicy()` ushbu sarlavhani faqat o‘z-o‘ziga qaytish bearer’i bilan birga hisobga oladi, shu sababli u faqat kirish huquqini toraytirishi mumkin; aniqlanmaydigan id esa rad etiladi.

Kalit uchun hech qanday tasvir modeliga ruxsat berilmagan bo‘lsa, tavsiflash yo‘li chetga chiqadi va so‘rov o‘zgartirilmasdan uzatiladi; bu o‘chirilgan himoya mexanizmidagi kabi xatoda ochiq qolish xatti-harakatidir (metama’lumotlar: `{ skipped: true, reason: "no_permitted_vision_model" }`).
Kalitsiz so‘rovlar va bunday cheklovlarga ega bo‘lmagan kalitlar avvalgidek ishlaydi.

#### Vazifani hisobga oluvchi tavsiflash ko‘rsatmasi (`modalityBridgeVisionTaskAware`)

Standart qiymat — **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) asosiy
tavsiflash promptiga **foydalanuvchining oxirgi xabari** matnini (500 ta belgigacha
qisqartirilgan holda) qoʻshadi, bu tavsifni foydalanuvchi aslida soʻragan narsaga
yoʻnaltiradi (codex-vision-proxy namunasi) va vision modelidan koʻrinadigan matnni
transkripsiya qilishni soʻraydi. Bayroq oʻchirilgan boʻlsa yoki foydalanuvchi matni
boʻlmasa, asosiy prompt oʻzgartirilmasdan ishlatiladi.

Tavsiflash self-loop jarayonining OpenAI bilan mos keluvchi oʻz soʻrovi
(`visionBridgeHelpers.ts` ichidagi `callVisionModelSingle()`) har doim
`image_url.detail: "high"` qiymatini soʻraydi — bu barcha chaqiruvchilar/provayderlar
uchun hech qanday mijoz signaliga bogʻlanmagan holda qoʻllanadi. Past darajadagi
tafsilot namunasi aynan ushbu prompt soʻraydigan matn transkripsiyasi vazifasi uchun
OCR aniqligini yomonlashtiradi, shuning uchun asl kiruvchi soʻrov qaysi tafsilot
darajasidan foydalanganidan qatʼi nazar, tavsiflash chaqiruvi doimo yuqori tafsilotni
soʻraydi. Bu faqat ichki tavsiflash soʻrovi tanasiga taʼsir qiladi; OmniRoute asosiy
soʻrovda chaqiruvchining oʻz `image_url.detail` qiymatini qanday uzatishini
oʻzgartirmaydi — bu standart qiymat alohida va faqat aniqlangan OpenCode mijozlari
uchun `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) ichida
qoʻllanadi. Tavsiflash self-loop jarayonining Anthropic wire-format tarmogʻida
`detail` maydoni yoʻq va unga bu standart qiymatlarning hech biri taʼsir qilmaydi.

#### Tavsiflash chiqishi cheklovi (`modalityBridgeVisionMaxChars`)

| Kalit                          | Standart qiymat | Oraliq             |
| ------------------------------ | --------------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`             | `0` yoki 100–50000 |

`0` (standart qiymat) **cheklov yoʻqligini** anglatadi — `callVisionModel()`
qaytargan tavsif oʻzgartirilmasdan uzatiladi va mavjud xatti-harakat saqlanadi.
100–50000 oraligʻidagi har qanday qiymat tavsif
`[Image N]: <description>` sifatida qayta qoʻshilishidan oldin uni `…` suffiksi
bilan qisqartiradi (`src/lib/guardrails/visionBridge.ts` ichidagi
`VisionBridgeGuardrail.preCall()`). Quyi oqimdagi model toʻliq transkripsiyaga
muhtoj boʻlgan tafsilotlarga boy OCR vazifalari uchun bu qiymatni oshiring;
sergap vision modellarida token sarfini cheklash uchun uni kamaytiring.
Boshqaruv panelidagi maydon Vision yorligʻining Advanced panelida joylashgan
(`ModalityBridgeVisionTab.tsx` ichidagi `modality-bridge-max-chars`) va aniq
koʻrsatilgan `0` qiymatini oʻzgartirmasdan, 1 dan 99 gacha boʻlgan har qanday
qiymatni minimal 100 qiymatigacha oshiradi — `0` shunchaki «oʻrnatilmagan»
standart qiymat emas, balki mustaqil ravishda yaroqli Zod qiymatidir
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`).

#### Tavsiflash keshi (`modalityBridge/bridgeCache.ts`)

Tavsiflash chiqishlari uchun jarayon miqyosida umumiy boʻlgan xotiradagi LRU + TTL
keshi. Kalit = `sha256(imageRef + composedPrompt + configuredBridgeModel)`, uzunlik
prefiksli ramkalash bilan (maydon chegaralari toʻqnashuvi yoʻq). Model komponenti
amalda javob bergan model emas, balki **sozlangan** bridge modelidir —
`callVisionModel` ichki ravishda zaxira variantiga oʻtishi mumkin va har bir urinish
boʻyicha kalitlash keshni parchalab yuboradi. Muvaffaqiyatsiz tavsiflashlar hech
qachon keshlanmaydi. Sozlamalar:

| Kalit                           | Standart qiymat | Oraliq  |
| ------------------------------- | --------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`          | —       |
| `modalityBridgeCacheTtlMinutes` | `60`            | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`           | 10–5000 |

#### Masofaviy tasvirni normallashtirish (self-loop tavsiflash/base64 olish)

Bridge **masofaviy** tasvirni oʻzi olganda — Anthropic tavsiflash self-call jarayoni
va claude-wire-format uchun base64 konvertatsiyasi
(`ensureBase64ImagesForClaudeWire`), ikkalasi ham `visionBridgeHelpers.ts` ichidagi
`fetchRemoteImageAsDataUri()` orqali — hosil boʻlgan maʼlumotlar URI manzili vision
modeli soʻroviga joylashtirilishidan oldin `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) orqali oʻtkaziladi. Haddan tashqari katta
tasvirlarning **uzun tomoni 2048px** gacha kichraytiriladi (OpenAI/Anthropic
server tomonida allaqachon qoʻllaydigan oʻlcham chekloviga mos), bu vision modeli
koʻradigan narsani oʻzgartirmasdan yuklash baytlari/kechikishini kamaytiradi.
Oʻlchamni oʻzgartirish dinamik import orqali yuklanadigan `sharp` yordamida amalga
oshiriladi: uning native binary fayli yuklanmaydigan platformada
`normalizeDataUri()` **hech qachon istisno tashlamaydi** — u asl baytlarni
oʻzgartirmasdan uzatishga qaytadi, shuning uchun tavsiflash/base64-konvertatsiya
yoʻli doimo ishlashda davom etadi. Tasvir boʻlmagan baytlar (dekodlanadigan tasvir
qaytarmagan olish amali) ham oʻzgartirilmasdan uzatiladi. Bu normallashtirish bridge
oʻz self-call jarayoni uchun oladigan tasvirlar bilan cheklangan — u hech qachon
chaqiruvchining oʻzgartirilmasdan uzatiladigan xom yuklamasiga qoʻllanmaydi, bu
faqat ixtiyoriy rozilik bilan oʻzgartirish tamoyiliga mos keladi (Hard Rule #20).

#### Sozlamalar sxemasi + migratsiya

Yangi `modalityBridge*` kalitlari `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`) ichida Zod yordamida tekshiriladi:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCache*` uchligi va Audio Bridge ishlatadigan
`modalityBridgeAudio*` guruhi. `141_modality_bridge_settings.sql` migratsiyasi
mavjud eski `visionBridge*` qiymatlarini mos yangi kalitlarga koʻchiradi
(idempotent, operator oʻrnatgan `modalityBridge*` qiymatini hech qachon qayta
yozmaydi); eski kalitlar bir reliz sikli davomida oʻqish uchun zaxira variant
sifatida qabul qilinishda davom etadi.

#### Shaffoflik sarlavhasi + statistika

Tavsiflash orqali oʻzgartirilgan javoblar
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
sarlavhasini oʻz ichiga oladi (`modalityBridge/bridgeStats.ts` ichidagi
`buildModalityBridgeHeader()` tomonidan yaratiladi,
`src/sse/handlers/chatHelpers.ts` ichidagi `withModalityBridgeHeader()` tomonidan
qoʻshiladi). Qayta yoʻnaltirilgan soʻrovlarda **hech qanday** sarlavha boʻlmaydi —
yuklama oʻzgartirilmagan va model almashtirilgani javob tanasidagi `model`
maydonida allaqachon koʻrinadi.

`GET /api/modality-bridge/stats` (boshqaruv autentifikatsiyasi, `GET /api/settings`
bilan bir xil daraja) `vision`, `audio` va `video` uchun xotirada saqlanadigan
har bir modallikka oid hisoblagichlarni
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` qaytaradi. `averageLatencyMs`
maxraj sifatida barcha urinishlardan emas, `latencySamples`dan foydalanadi;
vaqti o‘lchanmagan operatsiya soxta nol millisekundlik namuna yaratmaydi.
`bridged` muvaffaqiyatli konvertatsiyalar uchun orqaga mos taxallus bo‘lib
qoladi; muvaffaqiyatsiz urinishlar uni oshirmaydi.
Hisoblagichlar ataylab jarayon qayta ishga tushirilganda nollanadi
(bu telemetriya, hisob-kitob emas).

#### Boshqaruv paneli konfiguratsiyasi

Maxsus boshqaruv paneli sahifasi:
`/dashboard/settings/modality-bridge`. Uning URL orqali boshqariladigan `Vision`,
`Audio` va `Video` varaqlari `tab` qiymatini almashtirish paytida so‘rov
parametrlarini saqlab qoladi. Vision varag‘i yoqish/o‘chirish, rejim, model
tanlash (shu jumladan avtomatik standart), vazifani hisobga oluvchi ko‘rsatmalar,
kengaytirilgan taym-aut/rasm/tavsif uzunligi/kesh cheklovlari, ish vaqti
hisoblagichlari va himoyalangan namunaviy so‘rovni taqdim etadi. Audio varag‘i
ham faol: u yoqish/o‘chirish, Auto opsiyasiga ega faqat STT uchun model
tanlagichi, taym-aut/klipning maksimal uzunligi cheklovlari, audio
hisoblagichlari va `input_audio` namunaviy sinovini taqdim etadi. Video varag‘i
to‘liq ishlaydi: u FFmpeg/ffprobe ish vaqti holatini — to‘rtta aniq UI holatidan
birini (`unknown`, tekshiruv bajarilayotgan yoki yakunlanmagan paytda;
`restricted`, loopback bo‘lmagan boshqaruv paneli xostida tekshiruv mijoz
tomonida o‘tkazib yuborilganda; `unavailable`, tekshiruvdan keyin yo‘qligi
tasdiqlanganda; yoki `available`, FFmpeg/ffprobe versiyalari bilan) — ko‘rsatadi,
yoqish/model/kadr/video/taym-aut cheklovlarini saqlaydi, model tanlagichini
tasvirni qo‘llab-quvvatlaydigan modellar bilan cheklaydi va video
hisoblagichlarini taqdim etadi.

AI sozlamalari ostidagi avvalgi Vision Bridge kartasi yangi sahifaga moslik
havolasi hisoblanadi; u endi shaklning ikkinchi nusxasiga egalik qilmaydi.
Media Providers ham mavjud Speech-to-Text sinov maydonchasini olib tashlamasdan,
Image-to-Text va Speech-to-Text ish jarayonlarini tegishli Modality Bridge
varaqlariga bog‘laydi.

**O‘z-o‘ziga yo‘naltirilgan so‘rov uchun admission chetlab o‘tishi:** describe
chaqiruvi OmniRoute’ning o‘z `/v1` self-loop’i (nostandart provayder modeli)
orqali yo‘naltirilganda, quyi so‘rov `x-omniroute-admission-bypass: internal`
yuboradi va aniqlangan self-loop hisob ma’lumoti bilan autentifikatsiya qilinadi
— lokal rejimdagi mahalliy `sk_omniroute` sentinel qiymati yoki operator
sozlagan `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` muhit kaliti (#1350), shunda
`REQUIRE_API_KEY=true` o‘rnatmalari ham describe chaqiruvini bajara oladi.
Chetlab o‘tishga faqat aynan shu hisob ma’lumotlari uchun ruxsat beriladi,
shuning uchun tashqi mijozlar admission tekshiruvini o‘tkazib yuborish uchun
sarlavhadan foydalana olmaydi.

Eski standart qiymatlar `src/shared/constants/visionBridgeDefaults.ts` ichida;
yangi rejim/vazifani hisobga olish/kesh standartlari va sozlamalar rezolveri
`src/shared/constants/modalityBridgeDefaults.ts` ichida joylashgan. Himoya
mexanizmi `deps` konstruktor opsiyasini taqdim etadi, shunda testlar soxta
`getSettings` va `callVisionModel` implementatsiyalarini kiritishi mumkin.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Audio kirishini qabul qilishi ma’lum bo‘lmagan maqsadga yetib borishidan oldin,
audio mavjud chat so‘rovlarini ushlab qoladi. U chat so‘rovini hech qachon
boshqa yo‘nalishga yubormaydi: audio qismlar mavjud OpenAI bilan mos multipart
endpoint orqali transkripsiya qilinadi va tanlangan chat modeli matnli
transkriptlar bilan ishlashda davom etadi.

Jarayon:

1. `supportsAudio` qiymatini `getResolvedModelCapabilities()` orqali aniqlang.
   Aniq provider-registry metama’lumotlari ustunlikka ega, undan keyin statik
   model metama’lumotlari, so‘ng sinxronlangan `modalities_input` keladi.
   `audio` bo‘lmagan e’lon qilingan kirish ro‘yxati `false` hisoblanadi;
   imkoniyat haqida dalil bo‘lmasa, qiymat `null` bo‘lib qoladi. `false` ham,
   `null` ham konservativ ko‘prikni faollashtiradi, `true` esa uni chetlab
   o‘tadi.
2. `modalityBridgeAudio*` sozlamalarini aniqlang va umumiy
   `detectMediaParts()` detektori orqali har bir xabardan biriktirish mumkin
   bo‘lgan yuqori darajadagi audio qismlarni ajratib oling. Qo‘llab-quvvatlanadigan
   uzatish shakllari: OpenAI `input_audio`, `audio_url` va
   `source.media_type: "audio/*"`. Ichma-ich joylashgan audio yo‘naltirish uchun
   aniqlanadi, lekin biriktirish yo‘li tomonidan olib tashlanmaydi. Ish hajmi
   `modalityBridgeAudioMaxClips` bilan cheklanadi; keyingi qismlar o‘zgarishsiz
   qoladi.
3. Sozlangan `provider/model`dan foydalaning yoki `selectAudioBridgeModel()`ga
   `AUDIO_TRANSCRIPTION_PROVIDERS` bo‘ylab barqaror katalog tartibida yurib,
   foydalanish mumkin bo‘lgan faol provayder hisob ma’lumotiga ega birinchi
   modelni tanlashga ruxsat bering.
4. `callAudioTranscription()` base64/data-URI audioni multipart `file`ga
   aylantiradi yoki masofaviy `audio_url`ni DNS pinning va 25 MB chekloviga ega
   faqat ommaviy tashqi ulanish himoyasi orqali yuklab oladi. So‘ng fayl va
   tanlangan modelni `resolveSelfLoopBearer()` bilan autentifikatsiya qilingan
   mahalliy `/v1/audio/transcriptions` self-loop’iga POST qiladi. Mavjud
   transkripsiya marshruti odatdagi hisob ma’lumotlarini qidirish,
   cooldown/tezlik cheklovini boshqarish va provayderga uzatishni bajaradi.
5. Muvaffaqiyatli chaqiruvlar o‘z qismlarini `[Audio N]: <transcript>` bilan
   almashtiradi. Chaqiruvlar `Promise.allSettled` bilan bajariladi: alohida
   muvaffaqiyatsizlik o‘sha asl audio qismini saqlab qoladi (#4012 shartnomasi).
   Agar barcha chaqiruvlar muvaffaqiyatsiz bo‘lsa va maqsad uchun
   `supportsAudio === false` ekanligi isbotlangan bo‘lsa, qismlar
   `[Audio N]: (mavjud emas — hech qanday STT provayderi ulanmagan)`ga aylanadi
   (#8430 shartnomasi). Noma’lum maqsad (`null`) uchun barcha chaqiruvlar
   muvaffaqiyatsiz bo‘lsa, so‘rov o‘zgarishsiz qoladi. Faqat matnli ekanligi
   isbotlangan va foydalanish mumkin bo‘lgan STT hisob ma’lumotiga ega bo‘lmagan
   maqsad tarmoq chaqiruvini bajarmasdan xuddi shu aniq to‘ldiruvchi matnni
   oladi.

Muvaffaqiyatli transkriptlar butun jarayon uchun umumiy Modality Bridge LRU/TTL
keshidan foydalanadi. Kalit audio havolasi, barqaror `audio-transcription`
operatsiya yorlig‘i va tanlangan STT modelini birlashtiradi; muvaffaqiyatsizliklar
hech qachon keshga olinmaydi. Audio urinishlari umumiy `bridged`, `cacheHits`,
`failures` va `lastUsedAt` hisoblagichlarini yangilaydi. O‘zgartirilgan javoblar
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`ni o‘z ichiga
oladi; o‘zgartirilmagan so‘rovlar Audio Bridge segmentini olmaydi.

Ish vaqti sozlamalari DB’da saqlanadi va Zod orqali tekshiriladi:

| Kalit                         | Standart qiymat | Oraliq                |
| ----------------------------- | --------------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`          | —                     |
| `modalityBridgeAudioModel`    | `""`            | Avtomatik yoki STT ID |
| `modalityBridgeAudioTimeout`  | `60000`         | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`             | 1–10                  |

Umumiy keshni boshqarish `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` va `modalityBridgeCacheMaxEntries` orqali amalga oshiriladi.

### Video ko‘prigi (`videoBridge.ts`, `videoBridgePipeline.ts`)

Ma’lum mahalliy video qo‘llab-quvvatlash imkoniyatiga ega bo‘lmagan nishon chaqirilishidan oldin Chat Completions `messages` va Responses API `input` tarkibidagi yuqori darajali video qismlarini tutib qoladi. Qo‘llab-quvvatlanadigan shakllar: `input_video`, `video_url`, `video_source`, HTTPS URL manzillari va `data:video/*;base64,...` ma’lumot URI manzillari. Matndagi oddiy fayl nomlari video sifatida qabul qilinmaydi.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) so‘rovni ko‘rib chiqish, imkoniyat/siyosat tekshiruvi, har bir so‘rov bo‘yicha jamlash va javob yuklamasini boshqaradi. Har bir video uchun bajariladigan ishlar — olish, butun natija keshi, kadrlar ketma-ketligini tavsiflash (bunda chaqiruvchi e’lon qilgan har qanday audio transkript birlashtiriladi), shuningdek har bir urinish bo‘yicha metrikalar/bekor qilish/tozalash — `videoBridgePipeline.ts` faylidagi `processVideoPart` ortida yashirilgan bo‘lib, u `preCall` sikli ichida har bir video qismi uchun bir marta chaqiriladi. Ushbu modul, shuningdek, aniq port chegaralarini belgilaydi: `VideoMediaBrokerPort` (baytlarni olish va namuna sifatida tanlangan kadrlarni ajratib olish), `VideoAudioTranscriptionPort` (chaqiruvchi e’lon qilgan audio transkriptni namuna sifatida tanlangan kadr izohlari bilan birlashtirish) va `VideoDrilldownPort` (kadr tafsilotlarini saqlash chegarasi; hali `processVideoPart` bilan bog‘lanmagan — hozircha tafsilot yozuvlarini faqat alohida `/api/modality-bridge/video/drilldown` marshruti yozadi).

Ommaviy `/v1` so‘rov yo‘li hech qachon quyi jarayonni import qilmaydi yoki chaqirmaydi. Masofaviy videolar 50 MiB cheklov ostida yuklab olinadi; ichki base64 videolar uchun esa har bir video bo‘yicha dekodlangan hajmning ehtiyotkorona 36 MiB chegarasi qo‘llanadi, shunda model/xabarlar/freymlash qobig‘i ommaviy JSON so‘rovlarini qabul qilishning 50 MiB chegarasi ichida qolishi mumkin. Ichki ma’lumot uzunligi va dekodlangan hajm taxminlari xotira ajratilishidan oldin tekshiriladi. Boshlang‘ich masofaviy URL va har bir qayta yo‘naltirish uchun HTTPS talab qilinadi; bunda DNS biriktirishga ega, faqat ommaviy manzillarga ruxsat beruvchi mavjud tashqi ulanish himoyasi ishlatiladi. Keyin baytlar aynan ichki `POST /api/modality-bridge/video/extract` broker chegarasidan o‘tadi. Bu marshrut bir vaqtning o‘zida `LOCAL_ONLY` va `SPAWN_CAPABLE` bo‘lib, faqat har bir jarayon uchun autentifikatsiya qilingan, ishonchli loopback so‘rovini qabul qiladi hamda hech qachon URL, fayl tizimi yo‘li, bajariladigan fayl yoki argumentlar ro‘yxatini qabul qilmaydi. API tanasi hajmini qayta ishlash konveyeri va ishlov beruvchining tanani bosqichma-bosqich o‘quvchisi mustaqil ravishda broker kirishi uchun 50 MiB chegarani ta’minlaydi. Uning cheklangan navbati bir vaqtning o‘zida bitta ajratib olish amalini bajaradi, kutilayotgan to‘rtta vazifaga ruxsat beradi va kutilayotgan kirish hajmini 100 MiB bilan cheklaydi.

Broker ichida `ffprobe` yopiq mahalliy faylni o‘qiydi; qat’iy formatlar ruxsat ro‘yxati pleylist va manifest formatlarini istisno qiladi. Ruxsat etilgan MOV oilasidagi konteynerlar uchun tashqi MOV ma’lumot havolalari sukut bo‘yicha o‘chirilgan holda qoladi va qat’iy buyruq ularni yoqmaydi. `ffprobe` ham, `ffmpeg` ham faqat `file` protokoli ruxsat ro‘yxatidan, bitta oqimdan, qat’iy argumentlar massivlaridan, shell ishlatmasdan va `PATH` orqali aniqlangan bajariladigan fayllardan foydalanadi. Biriktirilgan muqova rasmi oqimlari ijro etiladigan nomzodlar hisoblanmaydi. Barcha ijro etiladigan oqimlar cheklovlarga mos kelishi kerak va deterministik eng past indeksli zaxira variantidan oldin aniq standart oqim afzal ko‘riladi. Videolar 600 soniya, har bir o‘lcham bo‘yicha 8,192 piksel va manba bo‘yicha 33,554,432 piksel bilan cheklanadi. FFmpeg o‘rta nuqtalardan 1–16 ta JPEG kadrini namuna sifatida oladi, kichikroq kirishlarni kattalashtirmasdan uzun qirrani ko‘pi bilan 1,024 pikselgacha kichraytiradi va hech qachon URL olmaydi. Namuna olish sukut bo‘yicha `uniform` hisoblanadi. Ixtiyoriy `scene_aware` va tajribaviy `segment_aware` siyosatlari allaqachon tekshirilgan mahalliy oqim ustida bitta qo‘shimcha qat’iy FFmpeg o‘tishini bajaradi, cheklangan `showinfo` sahna vaqt belgilarini tanlaydi va detektor xatosi, vaqt tugashi, noto‘g‘ri shakllangan chiqish yoki bo‘sh nomzodlar to‘plami yuz berganda deterministik tarzda ayni bir xil tekis taqsimlangan o‘rta nuqtalarga qaytadi. Segmentlardan xabardor rejim o‘rta nuqta namunalarini tekshirilgan sahna oraliqlariga mutanosib ravishda taqsimlaydi; segmentlardan xabardor dalillar va zaxira variantiga qaytish xatti-harakati quyida batafsil bayon qilingan. Har bir siyosatda qat’iy 16 kadrli chegara tanlashdan keyin qo‘llanadi. Sahnalardan xabardor so‘rovda faqat bitta kadr budjeti mavjud bo‘lsa, u faol to‘liq video yoki fokus oynasining tekis taqsimlangan o‘rta nuqtasidan foydalanadi va `policyEffective: uniform` deb xabar beradi: tanlangan yagona sahna kadri vaqt oralig‘ining ikkala uchini ham saqlab qola olmaydi. Chaqiruvchi ixtiyoriy ravishda chekli fokus oynasini (`start`/`end` soniyalari) taqdim etishi mumkin; chegaralar media davomiyligiga moslab cheklanadi, teskari yoki chekli bo‘lmagan oynalar rad etiladi va barcha namuna olish siyosatlari faqat normallashtirilgan oraliq ichida bajariladi. Hosil bo‘lgan oyna namuna olish metama’lumotlariga va ishonchsiz tavsif prefiksiga kiritiladi, shunda quyi oqimdagi modellar fokuslangan parchani to‘liq vaqt chizig‘idan ajrata oladi.

Semantik izoh fokusi alohida, aniq sozlamadir. Standart `full` tahlil rejimi mavjud kadr ko‘rsatmasini saqlaydi va so‘rov matnini izoh modeliga hech qachon uzatmaydi. `focused` rejimida ko‘prik ayni Chat yoki Responses konteyneridan faqat foydalanuvchi yaratgan eng so‘nggi bo‘sh bo‘lmagan `text`/`input_text` qiymatini o‘qiydi, uni NFC shakliga normallashtiradi, boshqaruv belgilarini va bo‘sh joylarni birlashtiradi hamda 500 ta Unicode kod nuqtasi bilan cheklaydi. Bo‘sh natija aynan `full` ko‘rsatmasiga qaytadi. Foydalanish mumkin bo‘lgan ishora maxsus ishonchsiz foydalanuvchi konteksti blokida JSON sifatida serializatsiya qilinadi va faqat kuzatiladigan tafsilotlarni ustuvorlashtirishi mumkin; u mediada ko‘rinadigan yoki eshitiladigan ko‘rsatmalarga rioya qilmaslik haqidagi alohida ogohlantirishni bekor qila olmaydi. Matnli fokus hech qachon `start`/`end` qiymatlarini taxmin qilmaydi yoki vaqt bo‘yicha namuna oluvchini o‘zgartirmaydi.

#### FU-07 tuzilmaviy segment dalillari

`segment_aware` allaqachon tekshirilgan mahalliy video oqimi ustida chegaralangan bitta dastlabki tahlil bosqichidan foydalanadi. Belgilangan filtrlar zanjiri avval videoni eni ko‘pi bilan 320 pikselgacha masshtablaydi, sahna almashishlari va qotib qolgan intervallarni aniqlaydi, so‘ngra xiralik, o‘rtacha yorqinlik hamda fazoviy/vaqtga oid ma’lumot uchun soniyasiga 1 ta kadr oladi. Bu bosqich 600 ta tuzilmaviy namuna, bitta FFmpeg/filtr oqimi, faqat `file` protokoli va bir xil konteyner ruxsat ro‘yxatlari, jarayon chiqishi uchun 1 MiB chegara hamda brokerning umumiy bekor qilish/muddat chegarasi ichida ko‘pi bilan 30 soniya bilan cheklangan. U so‘rovdan hech qachon buyruq, filtr, yo‘l yoki URL qabul qilmaydi.

Tuzilmaviy qiymatlar videoni semantik tushunish emas, balki deterministik namunalash dalillaridir. Ular subyektlar, harakatlar, subtitrlar, nutq yoki foydalanuvchi niyatini aniqlamaydi. Sahna va qotib qolish chegaralari segmentlarni shakllantiradi; qotib qolish qamrovi, xiralik, ekspozitsiya, fazoviy tafsilotlar va vaqt bo‘yicha o‘zgarish faqat mavjud 1–16 kadrli byudjet qanday taqsimlanishiga ta’sir qiladi. To‘liq qotib qolgan segment ko‘pi bilan bitta kadr bilan cheklanadi, qotib qolmagan segmentlar esa qolgan byudjet uchun raqobatlashadi. Chegaralar soni kadrlar sonidan oshsa, vaqt shkalasi bo‘ylab bir tekis qamrov saqlanadi, shuning uchun boshidagi tezkor almashishlar uzoq davom etuvchi yakuniy segmentni yashira olmaydi. Qotib qolish chegarasidan 1 soniyalik tahlil aniqligi doirasida joylashgan sahna chegaralari birlashtiriladi.

Filtrlarning mavjud emasligi, noto‘g‘ri shakllangan yoki bo‘sh dalillar, detektor xatosi yoxud chegaralangan dastlabki tahlil vaqti tugashi aynan bir tekis o‘rta nuqta siyosatiga ochiq tarzda qaytadi. Chaqiruvchining bekor qilishi yoki broker muddati tugashi bunday qaytishni amalga oshirmaydi: u bajarilayotgan quyi jarayonni tugatadi, keyingi kadrlarni ajratib olishga yo‘l qo‘ymaydi va maxfiy vaqtinchalik daraxt `finally` ichida o‘chiriladi.

`scripts/perf/video-bridge-fu07-eval.ts` deduplikatsiyadan keyingi subtitr chaqiruvlari tejalishi, zich harakat uchun byudjet taqsimoti, xiralik/ekspozitsiya/SI-TI dalillari, uzun yakuniy qismli tezkor almashishlar va bosqichma-bosqich xiralashishdagi yolg‘on musbat natijalar uchun deterministik haqiqiy FFmpeg sinov ma’lumotlarini yaratadi. U dastlabki tahlilning real vaqtini va `/usr/bin/time` mavjud bo‘lganda quyi jarayon CPU va eng yuqori RSS ko‘rsatkichlarini qayd etadi. Uning sifat tekshiruvlari faqat tuzilmaviy etalonlardir. Haqiqiy subtitr modelining sifati `HOLD` holatida qoladi, chunki bu sinov tizimida vakolatli endpoint yoki o‘zgarmas baholovchi mavjud emas. Pul tejalishi ham `--caption-cost-per-call-usd` orqali har bir chaqiruv uchun aniq musbat xarajat bahosi berilmaguncha `HOLD` holatida qoladi; skript bu natijalarning hech birini soxtalashtirmaydi.

Har bir kadr 4 MiB, barcha xom kadrlar jami 23 MiB va serializatsiya qilingan broker javobi 32 MiB bilan cheklangan. Maxfiy vaqtinchalik katalog `finally` ichida o‘chiriladi. OmniRoute FFmpeg’ni o‘z ichiga olmaydi va maxsus bajariladigan fayl yo‘lini qabul qilmaydi. Subtitr yaratishdan oldin ko‘prik ehtiyotkor vizual deduplikatsiya bosqichini qo‘llaydi: har bir JPEG 16×16 o‘lchamli kulrang tusli buferga kichraytiriladi va faqat oxirgi saqlab qolingan kadr bilan taqqoslanadi. Bir kadrdan katta subtitr byudjeti so‘ralganda, ajratib olish jarayoni shu byudjetdan ko‘pi bilan ikki baravar katta va hech qachon 16 kadrdan oshmaydigan chegaralangan nomzodlar to‘plamini taqdim etadi. So‘ralgan chegara faqat deduplikatsiyadan keyin qo‘llanadi; byudjet kamida ikkita bo‘lsa, yakuniy siyraklashtirish davomida birinchi va oxirgi tanlangan nomzodlar saqlanadi. Versiyalangan `grayscale-16x16-mean-cells-v2` siyosati o‘rtacha yorqinlik farqi va normallashtirilgan farqi kamida 0.05 bo‘lgan kichik tasvir kataklari nisbatidan kattasini ishlatadi. Dublikat chegarasi 0.04 doimiy qiymat bo‘lib, ish vaqti sozlamasi sifatida taqdim etish o‘rniga oldindan bashorat qilinuvchanlik uchun tanlangan. Bu ikkilamchi yuqori kontrastli signal faqat o‘rtacha qiymatga asoslangan taqqoslash yashirishi mumkin bo‘lgan kichik harakatlar va ko‘rinadigan matn o‘zgarishlarini saqlab qoladi. Taqqoslagich yoki dekoder xatolari ochiq tarzda davom etib, qamrovni saqlaydi. Chiqish metama’lumotlari ajratib olingan nomzodlar, muvaffaqiyatli ishlatilgan kadrlar va olib tashlangan vizual dublikatlarni alohida ko‘rsatadi.

Aniq belgilangan video qismi vaqt tamg‘alari tushirilgan kontakt varag‘ini so‘rashi mumkin. Ko‘prik ko‘pi bilan 4 ustunli, 16 kadrli JPEG to‘rini yaratadi. Har bir 512 pikselli katak o‘z manbasining vaqt tamg‘asini yuqori kontrastli pastki tasmaga joylaydi, ayni vaqt tamg‘alari esa keyingi bog‘lash va audit uchun matnli metama’lumotlarda ham saqlanadi. To‘liq JPEG hajmi 32 MiB bilan cheklanadi. Agar `sharp` to‘rni dekodlay yoki tuza olmasa, ko‘prik alohida JPEG kadrlarga qaytadi; mijoz tomonidan bekor qilish esa varaq bilan ishlash amaliyoti orqali ham tarqaladi.

Ishga joriy etish dalillari sintetik kompozitsiya mikrobenchmarkidan ataylab ajratilgan. `scripts/perf/video-bridge-contact-sheet-eval.ts` haqiqiy OpenAI-mos ko‘rish modellari uchun sxema versiyasiga ega A/B sinov tizimini belgilaydi. U provayder xabar qilgan tokenlar, boshidan oxirigacha real kechikish vaqtini (varaqni tuzish bilan birga), model chaqiruvlari sonini va manifestda belgilangan faktlarning saqlanishini o‘lchaydi. Modelning xom javoblari hisobotga yozilmaydi; faqat SHA-256 dayjestlari va mos kelgan fakt ID’lari saqlanadi. `--execute-real` uzatilmasa hamda `--model`, `OMNIROUTE_BASE_URL` va `OMNIROUTE_API_KEY` sozlanmasa, sinov tizimi hech qanday tarmoq yoki pullik model chaqiruvini amalga oshirmaydi. Bunday aniq haqiqiy ishga tushirishsiz uning mashina o‘qiy oladigan hukmi `HOLD` holatida qoladi; faqat sintetik foydali yuk/chaqiruvlar soni o‘lchovlari ishga joriy etish dalili hisoblanmaydi.

Chaqiruvchilar allaqachon moslashtirilgan matnga ega bo‘lsa, qo‘llab-quvvatlanadigan video qismiga ixtiyoriy `transcript.cues` massivini biriktirishi mumkin. Har bir replika `text`, tekshirilgan davomiylik ichidagi chekli `start`/`end` oralig‘i va ruxsat ro‘yxatidagi `source` (`client`, `embedded` yoki `audio-bridge`) qiymatini o‘z ichiga olishi kerak; `confidence` standart holatda `1` bo‘ladi va `0` bilan `1` oralig‘ida qolishi shart. Aynan bir xil replikalar birlashtiriladi. OmniRoute bu metama’lumotlardan hech qachon transkripsiyani boshlamaydi: tekshirilgan replikalar manbasi, ishonchlilik darajasi va oralig‘i bilan birga tavsiflangan natijaga ko‘chiriladi hamda kadr subtitrlari yonida ishonchsiz kuzatuvlar sifatida ko‘rsatiladi. Noto‘g‘ri, diapazondan tashqaridagi yoki kelib chiqishi ko‘rsatilmagan matn subtitr oqimiga aralashtirilish o‘rniga rad etiladi. So‘rov tanasidagi transkript kanallarining har ikkisi ham taqdim etilgan kelib chiqish ma’lumotlarini, jumladan, o‘zi bildirgan `embedded` yoki `audio-bridge` yorliqlarini `client` qiymatiga normallashtiradi. Faqat serverga tegishli adapter kod orqali uzatiladigan `trustedSource` argumenti yordamida bu ishonchli yorliqlarni tayinlay oladi; so‘rovdagi JSON maydoni bu argumentga yeta olmaydi. Transkript matni kelib chiqishidan qat’i nazar, media asosida olingan ishonchsiz kontent bo‘lib qoladi va hech qachon avtorizatsiyani belgilamasligi kerak.

Ilgʻor chaqiruvchi ayni video uchun `audioTranscript` trekini taqdim etishi mumkin;
u server transkripsiyasining isboti sifatida emas, mijoz taqdim etgan matn sifatida koʻriladi.
Birlashtirish chegarasi vizual va audio kuzatuvlarni bitta muddat va bekor qilish
signali ostida ishga tushiradi, ularni umumiy vaqt chizigʻida tartiblaydi, aynan bir xil
nusxalarni birlashtiradi va faqat bir tomon muvaffaqiyatli boʻlganda qisman natija
haqida xabar beradi. Yaroqsiz `audioTranscript` butun videoni xatoga olib kelish
oʻrniga shu qisman natijaga pasayadi — vizual tavsif saqlanadi, audio tarmoq esa
tozalangan xato kodini qayd etadi. Har bir tarmoqning mavjudligi, qismanlik bayrogʻi
va tozalangan xato kodlari tavsiflangan natijada, himoya mexanizmi metamaʼlumotlarida
(`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), natijalar keshi metamaʼlumotlarida va koʻprikning
birlashtirish hisoblagichlarida saqlanadi. Standart Video Bridge yoʻli nutqni matnga
aylantirishni ishga tushirmaydi yoki medianing ikkinchi nusxasini yuklab olmaydi;
bunday aniq trek boʻlmasa, u faqat video rejimida qoladi.

**Transkriptni saqlash (#12150 P1).** Bu Video Bridge (uning oʻzi ixtiyoriy) transkript
belgisini render qilgan har safar avtomatik ravishda qoʻllanadi — alohida saqlash
bayrogʻi mavjud emas. Soʻrov istalgan transkript belgisini (chaqiruvchi eʼlon qilgan
`transcript` yoki birlashtirilgan `audioTranscript`) render qilganda, himoya mexanizmi uni
`videoBridgeObserved` deb belgilaydi va video tavsifining tahrirlangan soyasini yaratadi —
bu aynan bir xil rendering boʻlib, unda har bir belgining erkin matnli tanasi
`[redacted-video-transcript]` bilan almashtiriladi; bu satr yigʻilishidan oldin
tuzilmali belgi maydonini almashtirish orqali yaratiladi (hech qachon tekislangan
matnni tahlil qilish orqali emas, shuning uchun hech qanday belgi mazmuni — zararli
yoki oddiy, jumladan `[inaudible]`/`[music]` kabi `]` belgisi mavjud tanalar —
saqlanib qola olmaydi). Saqlanadigan chaqiruv jurnali soʻrovi tanasi videodan
olingan har bir matn qismini mazmun tengligi boʻyicha moslangan shu tahrirlangan
soya bilan almashtiradi; `fullText` tayanchi chaqiruvdan oldingi yakunlangan himoya
mexanizmi foydali yukidan qayta oʻqiladi, shu sababli keyingi zanjir himoya
mexanizmlari (PII va hisob maʼlumotlari maskalovchilari, ustuvorliklari 10/95)
tavsif matnini joyida qayta yozganidan hamda tizim prompti/topshirish/xotira
kiritilishi xabarlar massivining shaklini oʻzgartirganidan keyin ham moslik
muvaffaqiyatli boʻladi. Modelga yuqori oqim boʻylab yuboriladigan tana
oʻzgarmaydi. Kuzatilgan soʻrov, shuningdek, hech qanday doimiy Memory maʼlumotini
toʻldirmaydi (soʻrovdan ham, javobdan ham maʼlumot ajratib olish oʻtkazib yuboriladi),
shuning uchun modelning oʻz javobi transkript matnini Memory ichiga takroran
kiritolmaydi.

**Videoning xom maydonlari (#12430).** Koʻprik yoqilgan va mahalliy video qoʻllab-quvvatlashi nomaʼlum yoki mavjud boʻlmaganda, aniqlangan `transcript`/`audioTranscript` maydonlari tavsiflash xatosidan yoki `maxVideos` cheklovidan keyin ham `videoBridgeObserved` holatini faollashtiradi. `null` va boʻsh satrlar hisobga olinadi; mavjud boʻlmagan maydonlar va videoga aloqador boʻlmagan metamaʼlumotlar hisobga olinmaydi. Saqlangan nusxalarda bu maydonlar tahrirlanadi yoki soʻrov tashlab ketiladi, keshlar/Memory esa chetlab oʻtiladi.

Ushbu zaxira yoʻllarida chaqiruvchi taqdim etgan yaroqli belgilar nostandart
provayder maydonlari oʻrniga qoʻllab-quvvatlanadigan `text`/`input_text`
qismlariga aylanadi. Soʻrovda berilgan ikkala trek ham ishonchsiz `client`
kuzatuvlari boʻlib qoladi va video tavsiflanmagani hamda vaqt belgilari mediaga
nisbatan tekshirilmagani haqida aniq ogohlantirish bilan beriladi. Mavjud
256 ta belgi/64 KiB umumiy va har bir belgi uchun budjetlar ikkala trekka
birgalikda qoʻllanadi; vaqt belgilari brokerning 600 soniyalik yuqori chegarasiga
va taqdim etilgan har qanday fokus oynasiga mos kelishi kerak. Yaroqsiz treklar
ixtiyoriy matn sifatida uzatilmaydi, balki tashlab yuboriladi; agar ularning
umumiy budjeti oshib ketmagan boʻlsa, yaroqli qardosh trekdan foydalanish
mumkin. Null/boʻsh maydonlar hech qanday matn qoʻshmaydi. Ushbu zaxira mexanizmi
hech qanday media olish yoki transkripsiya qilishni qoʻshmaydi.
Transkript kengaytma maydonlari zaxira video tashuvchisidan hamda uning
`video_url`/`source` obyektlaridan olib tashlanadi. OpenAI uzatishdagi ruxsat etilganlar
roʻyxati qatʼiyligicha qoladi; mahalliy qoʻllab-quvvatlashi nomaʼlum video
tashuvchilar mavjudligicha qoladi va faqat matnni qoʻllab-quvvatlashi maʼlum
nishonlar xavfsiz markerlarni saqlab qoladi. Tuzilmali tahrirlash soyalari
qoʻshilgan transkript matnini himoya qiladi, chaqiruvchiga tegishli asl soʻrov
esa oʻzgarmaydi. Mahalliy qoʻllab-quvvatlanuvchi nishonlar va oʻchirilgan
koʻpriklar oʻzlarining mavjud chetlab oʻtish xatti-harakatini saqlab qoladi.

Qoʻshimcha saqlangan nusxalar ayni kuzatilgan soʻrov signalidan foydalanadi.
Himoya mexanizmidan oldingi xom mijoz soʻrovi oniy tasviri, xotiradagi kutilayotgan
soʻrov va erta rad etilgan soʻrov jurnali video qismlaridagi transkript maydonlarini
tuzilmali tarzda almashtiradi; konveyer bosqichlari va kontekstni topshirish
tomonidan sintezlangan satrli promptlar saqlanadigan soʻrov tanasi qabul qiluvchisida
tahrirlanadi. Saqlangan `video_content_removed` markeri ataylab tashlab yuborilgan
matnni qayta tiklash oʻrniga `previous_response_id` orqali davom ettirishni yopiq
tarzda xatoga olib keladi. Agar kuzatilgan soʻrov jurnalga yozishdan oldin har bir
qismga tegishli tahrirlash soyasini yoʻqotsa yoki bir nechta video soyasidan
hatto bittasi keyingi soʻrov oʻzgarishlaridan soʻng mos kelmasa, qisman
tahrirlangan transkriptni saqlab qolish oʻrniga saqlanadigan soʻrov tanasi
butunlay tashlab ketiladi.

Kuzatilgan soʻrov uchun model javobi tuzilmali belgi chegarasisiz transkriptning
istalgan qismini iqtibos qilishi mumkin. Shu sababli uning saqlanadigan chaqiruv
jurnalidagi `responseBody` maydoni tashlab ketish markeri bilan almashtiriladi;
batafsil konveyer artefakti (u yuqori oqim/mijoz tanalari va oqim boʻlaklarini
oʻz ichiga olishi mumkin) saqlanmaydi. Semantik, idempotentlik va mulohazani
qayta ijro etish keshlari ushbu soʻrov uchun oʻqish va yozishlarni chetlab oʻtadi.
Provayder soʻrovi va mijozga koʻrinadigan javob oʻzgarmaydi. Batafsil artefakt
tashlab ketilganda, dastlabki keepalive baytlari vaqtinchalik buferdan chiqarib
yuboriladi. Kiroʼning notoʻgʻri shakllangan EventStream ogohlantirishi hech qachon
uning mazmuni yoki JSON tahlilchisining xom xatosini emas, faqat foydali yuk
baytlari sonini xabar qiladi.
Bu har bir aloqasiz provayder/plagin diagnostikasi audit qilinganini daʼvo
qilmaydi; saqlanadigan qabul qiluvchilarni kengroq koʻlamda tekshirish #11658
da kuzatiladi.

Ichki `/api/modality-bridge/video/drilldown` hayotiy sikli alohida, loopback/token orqali autentifikatsiya qilinadigan kesh substratidir. Har bir operatsiya, shuningdek, kanonik shaffof bo‘lmagan prinsipial identifikatorni talab qiladi. Ishlab chiqarishdagi chaqiruvchi yoqilishidan oldin bu identifikatorni autentifikatsiya qilingan tenantdan hosil qilishi va hech qachon mijoz tanlagan qiymatni uzatmasligi kerak. Kesh kalitlari ushbu prinsipialni kanonik seans va video-havola identifikatorlariga bog‘laydi, faqat ularning SHA-256 asosida hosil qilingan kalitlarini saqlaydi hamda o‘qish va o‘chirish amallarini bir xil prinsipial doirasida cheklaydi. Kesh har bir yozuv uchun ko‘pi bilan 16 ta hosil qilingan JPEG kadrni saqlaydi, ularning amal qilish muddati o‘n daqiqadan so‘ng tugaydi va cheklangan `start`/`end` o‘qishlarini yoki seansni aniq ko‘rsatib o‘chirishni qo‘llab-quvvatlaydi.

Har bir prinsipial 16 ta yozuv va 64 MiB kanonik JPEG ma’lumoti bilan cheklangan. Bu limitlar global 64 ta yozuv/256 MiB chegarasidan mustaqil: prinsipial kvotasi bosimi global LRU bo‘yicha chiqarib yuborish ko‘rib chiqilishidan oldin faqat shu prinsipialning eng uzoq vaqt ishlatilmagan yozuvlarini chiqarib yuboradi. Muddati tugagan yozuvlar kesh faolligi vaqtida prinsipial va global hisobdan tozalanadi, bekor qilish va validatsiya xatosi esa qisman almashtirishni saqlab qo‘ymaydi.

Kesh kanonik bo‘lmagan Base64’ni, ortiqcha to‘ldirishni, JPEG bo‘lmagan mediani, noto‘g‘ri tuzilgan yoki kesilgan JPEG’larni hamda cheklangan to‘liq tasvirli `sharp` dekodlash vaqtida ogohlantirish hosil qiladigan JPEG’larni rad etadi. U har bir qabul qilingan tasvirni kanonik JPEG sifatida qayta kodlaydi, chaqiruvchi maydonlariga ishonish o‘rniga kenglik va balandlikni dekodlangan baytlardan aniqlaydi hamda oxiridagi har qanday poliglot baytlarni saqlab qolmay, tashlab yuboradi. Faqat cheklangan kanonik siqilgan bufer ikkala kvotada ham hisobga olinadi. JSON uzatish limiti 32 MiB dekodlangan kirish chegarasi uchun Base64 qo‘shimcha hajmini o‘z ichiga oladi. Har bir saqlangan hosila validatsiyadan o‘tgan JPEG formati/ruxsatini, namuna olish siyosatini, hosila versiyasini, yaratilish vaqtini, server hisoblagan kontent xeshini, xeshlangan ota havolasini va ishonchli chaqiruvchining ota kontent xeshini qayd etadi. Atomar keshga saqlashdan oldin asinxron dekodlash/xeshlash bosqichlari orasida bekor qilish holati tekshiriladi.

Bu transh hali ishlab chiqarishdagi manbani marshrutga ulamaydi va ko‘p ruxsatli variant tanlashni ta’minlamaydi. Shu sababli shaffof Video Bridge so‘rov yo‘li hech qanday qo‘shimcha ish bajarmaydi, tenantga bog‘langan prinsipialni hosil qilish va to‘liq FU-08 ko‘p ruxsatli hayotiy sikli esa yakunlangan xatti-harakat sifatida hujjatlashtirilmay, aniq keyingi ish bo‘lib qoladi.

Kadrlarga sozlangan Video modeli yordamida ketma-ket tavsif beriladi. Bo‘sh Video bekor qilishi Vision sozlamasini meros qilib oladi; agar ikkalasi ham bo‘sh bo‘lsa, Vision avtomatik marshrutizatori samarali, ko‘rish imkoniyatiga ega modelni tanlaydi. Muvaffaqiyatli tavsiflar asl qismni barqaror `[Video description:` prefiksi bilan almashtiradi; bu prefiks matnni media asosida hosil qilingan ishonchsiz kuzatuv sifatida ham belgilaydi va keyingi modellarga mediada topilgan ko‘rsatmalarga amal qilmaslikni aytadi. Kadr tavsifi kesh kalitlari JPEG baytlari, prompt, vaqt tamg‘asi va samarali modelni o‘z ichiga oladi; faqat muvaffaqiyatli tavsiflar keshlanadi. Kesh yozuvlari haqiqiy muvaffaqiyatli ishlab chiqaruvchi modelni, jumladan zaxira modelni ham saqlab qoladi; turli kadrlar turli modellar tomonidan ishlab chiqarilganda bridge `mixed` haqida xabar beradi. Kesh topilmasi ushbu ishlab chiqaruvchi identifikatoridan uni so‘ralgan marshrutlash rejasi sifatida qayta belgilamasdan foydalanadi. Butun video natijasi keshi natijani o‘zgartiradigan har bir kirish bo‘yicha kalitlanadi — prompt, samarali model, namuna olish siyosati, kadrlar soni, semantik tahlil rejimi, normallashtirilgan fokus ko‘rsatmasining SHA-256 barmoq izi, fokus oynasi, `transcript`, `audioTranscript` va kontakt varag‘i bayrog‘i — shu sababli ushbu o‘lchamlardan birortasini o‘zgartirish keshdan eski natijani qayta ishlatish emas, balki kesh topilmasligiga olib keladi. Vizual deduplikatsiya siyosatining versiyasi, chegarasi va cheklangan nomzod kadrlar soni ham natija keshi kaliti va metama’lumotlarida aniq ko‘rsatiladi; shu sababli siyosat o‘zgarishi butun videoning eski tavsifidan qayta foydalana olmaydi. Natijalar keshining v4 metama’lumotlari rejim va barmoq izini saqlaydi, foydalanuvchining xom vazifasini esa hech qachon saqlamaydi. Himoya cheklovlari metama’lumotlari so‘ralgan va samarali tahlil rejimlarini ham ko‘rsatadi; foydalanishga yaroqli foydalanuvchi matnisiz so‘ralgan `focused` rejimi amalda `full` sifatida qayd etiladi.

Himoya cheklovi barcha qo‘llab-quvvatlanadigan video qismlarini ajratib oladi, ammo `modalityBridgeVideoMaxVideos` miqdoridan ortig‘iga tavsif bermaydi. `supportsVideo === false` ekani isbotlangan nishon uchun muvaffaqiyatsiz va limitdan oshgan videolar aniq xavfsiz matn markerlariga aylantiriladi, shunda hech qanday xom video saqlanib qolmaydi. Imkoniyat noma’lum bo‘lsa, ushbu qismlar o‘z video tashuvchisini saqlab qoladi; har qanday zaxira transkript yuqoridagi cheklangan matnga aylantirishga amal qiladi. `supportsVideo === true` bo‘lgan nishonlar bridge’ni chetlab o‘tadi. Mijoz so‘rovining bekor qilish signali yuklab olish, broker navbati, quyi jarayonlar va tavsif chaqiruvlari bo‘ylab uzatiladi; bekor qilishlar videolar orasida jarayonni to‘xtatadi va hech qachon xom mediaga ochiq holda davom etmaydi.

Ishlash muhiti sozlamalari DB’da saqlanadi va Zod orqali validatsiya qilinadi:

| Kalit                               | Standart qiymat | Oraliq / xatti-harakat                                                                                                   |
| ----------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`         | Ixtiyoriy ish vaqti, alohida yoqiladi                                                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`        | `full` umumiy taglavhalarni saqlaydi; `focused` chegaralangan, ishonchsiz soʻnggi foydalanuvchi kontekstidan foydalanadi |
| `modalityBridgeVideoModel`          | `""`            | Vision Bridge modelini meros qilib oladi                                                                                 |
| `modalityBridgeVideoFrameCount`     | `8`             | 1–16                                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`     | `uniform`, `scene_aware` yoki proporsional `segment_aware`; detektor xatosida `uniform`ga qaytiladi                      |
| `modalityBridgeVideoMaxVideos`      | `1`             | 1–4                                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`        | 1000–120000 ms                                                                                                           |

120 soniyadan yuqori boʻlgan avvaldan saqlangan Video kutish vaqti qiymatlari
brokerning oxirgi muddatigacha cheklanadi; ushbu chegaradan yuqori yangi
sozlama yozuvlari rad etiladi.
`GET /api/modality-bridge/video/runtime` autentifikatsiya yoki ish vaqtini
tekshirishdan oldin ishonchli tarzda belgilangan loopback mahalliyligini, soʻngra
boshqaruv autentifikatsiyasini talab qiladi. U faqat `available`,
zararsizlantirilgan FFmpeg/ffprobe versiyalari va ish vaqti mavjud boʻlmaganda
oʻzgarmas sababni qaytaradi. Ichki ajratib olish endpointi ommaviy yuklash APIʼsi
emas: navbat toʻyinganda `503` hamda `Retry-After` qaytariladi, chaqiruvchi
uzilganda `499`, brokerning belgilangan oxirgi muddati tugaganda esa `504`
qaytariladi. Konvertatsiya qilingan javoblar Vision yoki Audio segmentlarini olib
tashlamasdan markaziy `x-omniroute-modality-bridge` sarlavhasiga
`video->text;model=<visionModel>;parts=<videos>`ni qoʻshadi.

### PII niqoblagichi (`piiMasker.ts`)

**Har ikkala** bosqichda ishlaydi.

- **`preCall`** foydali yuklamani klonlaydi, `system`, `messages`, `input` va
  `prompt` boʻylab (jumladan, oddiy satr elementlari boʻylab) oʻtadi hamda
  `content`/`text` satr maydonlariga `processPII()`ni
  (`@/shared/utils/inputSanitizer`dan) qoʻllaydi.
  `PII_REDACTION_ENABLED=true` boʻlganda aniqlangan PII chiquvchi foydali
  yuklamada tahrirlanadi. Bu `INPUT_SANITIZER_MODE`dan mustaqil (u faqat
  prompt-inʼeksiya siyosatini boshqaradi). Tahrirlash oʻchiq boʻlganda chaqiruv
  kontentni qayta yozmasdan aniqlashlar sonini qayd etadi.
- **`postCall`** javobni chuqur klonlaydi, `sanitizePIIResponse()` hamda
  Responses-API shaklidagi niqoblagichni (`maskResponsesOutput` —
  `output_text` va `output[].content[].text`ni qamrab oladi) ishga tushiradi.
  Agar biror tahrirlash sodir boʻlsa, oʻzgartirilgan javob asl javobning oʻrnini
  egallaydi.

Himoya mexanizmi hech qachon bloklamaydi; u faqat annotatsiya qoʻshadi
(`meta.detections`, `meta.redacted`) yoki qayta yozadi.

### Prompt inʼeksiyasi (`promptInjection.ts`)

Foydalanuvchi taqdim etgan kontentdagi hujumkor tuzilmalarni aniqlaydi va
sozlangan siyosatni qoʻllaydi. Xatti-harakat muhit oʻzgaruvchilari va konstruktor
parametrlari orqali boshqariladi:

| Sozlama            | Muhit oʻzgaruvchisi                                                                                          | Standart qiymat | Taʼsiri                                                                                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------ | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Yoqilgan           | `INPUT_SANITIZER_ENABLED`                                                                                    | `true`          | `false` boʻlganda himoya mexanizmi qisqa tutashib, ishlashni toʻxtatadi.                                                                                                                                                |
| Rejim              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                              | `warn`          | Inʼeksiya siyosati: `block`, `warn` yoki `log`. (`redact` orqaga moslik uchun qabul qilinadi, ammo inʼeksiya matnini **olib tashlamaydi**; soʻrovdagi PIIʼni qayta yozish `PII_REDACTION_ENABLED` orqali boshqariladi.) |
| Bloklash chegarasi | `blockThreshold` parametri / `INPUT_SANITIZER_BLOCK_THRESHOLD` (`INJECTION_GUARD_BLOCK_THRESHOLD` taxallusi) | `high`          | Bloklash uchun talab qilinadigan minimal jiddiylik darajasi. Standart holatda oʻrtacha daraja faqat kuzatiladi.                                                                                                         |

**Rejim ustuvorligi** (`getMode`): chaqiruvchining `options.mode` parametri →
`INJECTION_GUARD_MODE` uchun **DB xususiyat bayrogʻi ustuvor sozlamasi**
(Dashboard → Settings → Feature Flags) → `INJECTION_GUARD_MODE` muhiti →
`INPUT_SANITIZER_MODE` muhiti → `warn`. Shu sababli boshqaruv panelidagi
ustuvor sozlama muhit oʻzgaruvchilaridan ustun keladi va Feature Flags
interfeysi ishlayotgan himoya mexanizmini jonli tarzda boshqaradi (qayta ishga
tushirish talab qilinmaydi). DBʼdan oʻqish xatoga chidamli: agar xato yuz bersa,
himoya mexanizmi muhitga asoslangan xatti-harakatga qaytadi; ustuvor sozlama
belgilanmagan boʻlsa, xatti-harakat faqat muhit orqali aniqlash bilan bir xil
boʻladi.

Aniqlash manbalari:

1. `@/shared/utils/inputSanitizer`dagi `sanitizeRequest()` (pipelineʼning boshqa
   joylarida ham ishlatiladigan umumiy detektorlar toʻplami).
2. Ichki `DEFAULT_GUARD_PATTERNS` (hozirda `system_override_inline` va
   `markdown_system_block`, ikkalasi ham `high` jiddiylik darajasida).
3. Konstruktor parametrlari orqali uzatiladigan ixtiyoriy `customPatterns`
   (satrlar, muntazam ifodalar yoki `{ name, pattern, severity }` yozuvlari).

`mode === "block"` bo‘lganda **va** kamida bitta aniqlangan holat jiddiylik
chegarasiga yetsa, `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }` qiymatini qaytaradi. `warn`/`log` rejimlarida himoya
mexanizmi jurnalga yozadi, ammo chaqiruvga ruxsat beradi. Umumiy yordamchi
`evaluatePromptInjection()` registr orqali o‘tmasdan promptlarni baholashi kerak
bo‘lgan chaqiruvchilar uchun ham eksport qilinadi.

**Skanerlash chegarasi (v3.8.20):** detektor birlashtirilgan prompt matnining
faqat **dastlabki 16 KB** qismini tekshiradi — `src/shared/utils/inputSanitizer.ts`
faylida `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt). `detectInjection()`
ham, `evaluatePromptInjection()` ham andozalar siklini ishga tushirishdan oldin
`slice(0, MAX_INJECTION_SCAN_BYTES)` ni qo‘llaydi. Inʼeksiya direktivalari
kiritmaning yuqori qismiga yaqin joylashadi, shuning uchun bu ko‘p yuzlab KB
hajmdagi foydali yuklamalarda regex CPU/GC sarfini aniqlash imkoniyatini
susaytirmasdan cheklaydi (qarang: #3932, #4041).

### Hisob maʼlumotlarini niqoblash vositasi (`credentialMasker.ts`)

**Har ikkala** bosqichda, standart zanjirning oxirida (ustuvorlik `95`) ishlaydi.
Chiquvchi foydali yuklamadagi (xabar mazmuni, vosita chaqiruvi argumentlari,
vosita natijalari) **va** provayder javobidagi taniqli API kaliti / maxfiy token
andozalarini tahrirlab yashiradi, shunda promptga joylangan (yoki vosita natijasi
tomonidan qaytarilgan) hisob maʼlumotlari yuqori oqimdagi provayderga yoki
mijozga sizib chiqmaydi.

- **Faqat ixtiyoriy yoqiladi**, PII maʼlumotlarini tahrirlab yashirish bilan bir
  xil qoida (20-qattiq qoidaga aloqador): `settings.credentialRedactionEnabled
=== true` **yoki** `CREDENTIAL_REDACTION_ENABLED=true` bo‘lmasa, o‘chirilgan
  bo‘ladi. U o‘chiq bo‘lsa, himoya mexanizmi hech qanday amal bajarmaydi — u
  hech qachon bloklamaydi va qayta yozmaydi.
- `redactCredentials()` butun foydali yuklama/javob daraxtini kezib chiqadi
  (`walkValue()`, prototip ifloslanishidan himoyalangan, `WeakSet` orqali
  sikllardan himoyalangan) va mos kelgan qismlarni `[REDACTED:<type>]`
  o‘rinbosari bilan almashtiradi, faqat amalda o‘zgargan shoxlarni klonlaydi.
- `CREDENTIAL_PATTERNS` LLM provayderlari kalitlarini (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenlarini (GitHub,
  Slack, Linear, Notion, npm, Postman, Discord), to‘lov kalitlarini (Stripe,
  Square), bulut kalitlarini (AWS kirish kaliti, Twilio, SendGrid, Mailgun),
  yopiq kalitlar / JWTlarni, hisob maʼlumotlarini o‘z ichiga olgan ulanish
  satrlarini (`mongodb://user:pass@...` va boshqalar) hamda umumiy
  `Authorization`/`x-api-key`/`api-key`/`apikey` sarlavha-qiymat andozasini
  qamrab oladi. Sarlavha ko‘rinishidagi kalitlar (`authorization`, `x-api-key`,
  `api-key`, `apikey`) umumiy matn regexi orqali emas, balki tuzilmaviy tarzda
  tahrirlab yashiriladi (faqat qiymat, `Bearer `/`Basic ` kabi sxema prefiksi
  saqlanadi).
- Himoya mexanizmi hech qachon bloklamaydi; u faqat qayta yozadi
  (`modifiedPayload` / `modifiedResponse`) va annotatsiya qo‘shadi
  (`meta.credentialsRedacted`, `meta.count`).

Regressiyadan himoya: `tests/unit/credential-masker-guardrail.test.ts`.

## Asosiy kontrakt (`base.ts`)

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
  block?: boolean; // true zanjir bajarilishini darhol toʻxtatadi
  message?: string; // bloklanganda koʻrsatiladi
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // soʻrovni qayta yozish uchun preCall tomonidan qaytariladi
  modifiedResponse?: TValue; // javobni qayta yozish uchun postCall tomonidan qaytariladi
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

Himoya cheklovi `void`, `{}` yoki `{ block: false }` qiymatlaridan birini
qaytarish orqali «oʻzgarish yoʻq» holatini bildiradi. `modifiedPayload`/`modifiedResponse`
qaytarilishi zanjir boʻylab keyingi himoya cheklovlariga uzatilayotgan qiymatni
almashtiradi. `signal?: AbortSignal` chaqiruvchining hayot siklini himoya
cheklovlariga uzatadi. Soʻrovning bekor qilinishi ataylab qoʻllanadigan ochiq
oʻtkazish istisnosidir: media koʻpriklari ishni toʻxtatadi va tozalashni amalga
oshiradi, bunda xom media uni qoʻllab-quvvatlamasligi maʼlum boʻlgan maqsadga
qayta tiklanmaydi.

## Reestr (`registry.ts`)

Yagona `guardrailRegistry` nusxasi quyidagilarni taqdim etadi:

- `register(guardrail)` — himoya cheklovini qoʻshadi (yoki normallashtirilgan
  nom boʻyicha almashtiradi) va roʻyxatni `priority` qiymatining oʻsish tartibida
  qayta saralaydi.
- `clear()` / `list()` — maʼmuriy yordamchi funksiyalar.
- `runPreCallHooks(payload, context)` — faol himoya cheklovlarini ketma-ket
  bajaradi, foydali yuklamani `modifiedPayload` orqali uzatadi va birinchi
  `block: true` holatida toʻxtaydi.
- `runPostCallHooks(response, context)` — javob tomonida xuddi shu oqimni
  bajaradi.
- `resetGuardrailsForTests({ registerDefaults })` — holatni tozalaydi va
  testlarni izolyatsiya qilish uchun ixtiyoriy ravishda standart himoya
  cheklovlarini qayta roʻyxatdan oʻtkazadi.

Har ikkala bajaruvchi ham `{ blocked, payload|response, results, guardrail?, message? }`
qiymatini qaytaradi, bunda `results` har bir himoya cheklovi uchun `blocked`,
`skipped`, `modified`, `error` va `meta` maydonlarini oʻz ichiga olgan
`GuardrailExecutionResult` yozuvlari massivi boʻlib, kuzatuv uchun foydalidir.

### Har bir soʻrov uchun himoya cheklovlarini oʻchirish

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` joriy soʻrov uchun
oʻtkazib yuborilishi kerak boʻlgan himoya cheklovlari nomlarining takrorlanmaydigan
roʻyxatini jamlaydi. Manbalar (barchasi ixtiyoriy, barchasi birlashtiriladi):

- `apiKeyInfo.disabledGuardrails`
- Soʻrov tanasidagi `disabledGuardrails` (yuqori darajada)
- Soʻrov tanasidagi `metadata.disabledGuardrails`
- `x-omniroute-disabled-guardrails` sarlavhasi (yoki eski
  `x-disabled-guardrails`)

Qiymatlar satrlar massivi yoki vergul bilan ajratilgan satr boʻlishi mumkin;
nomlar kichik harflardagi kebab-case formatiga normallashtiriladi
(`pii_masker` → `pii-masker`). Natija `context.disabledGuardrails` orqali
reestrga uzatiladi va reestr mos keluvchi himoya cheklovlarini oʻtkazib yuboradi
(`results` ichida `skipped: true`).

## Bajarilish tartibi

`src/sse/handlers/chat.ts` va `open-sse/handlers/chatCore.ts` orqali oʻtadigan har bir soʻrov uchun:

1. `resolveDisabledGuardrails(...)` API kaliti, soʻrov tanasi va sarlavhalar asosida oʻtkazib yuboriladigan himoya mexanizmlari roʻyxatini tuzadi.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` himoya mexanizmlarini ustuvorlikning oʻsish tartibida ishga tushiradi:
   - Oʻchirilgan himoya mexanizmlari `skipped` sifatida qayd etiladi.
   - Har bir himoya mexanizmining `preCall` funksiyasi `modifiedPayload` orqali foydali yuklamani qayta yozishi mumkin.
   - Birinchi `block: true` zanjirni muddatidan oldin toʻxtatadi va ishlov beruvchi himoya mexanizmi tomonidan rad etilganlik javobini qaytaradi.
3. (Qayta yozilgan boʻlishi mumkin boʻlgan) foydali yuklama kombinatsiyalangan marshrutlash va yuqori oqimga joʻnatish jarayoniga oʻtadi.
4. Javob shakllantirilgach, `guardrailRegistry.runPostCallHooks(...)` javob ustida ayni zanjirni ishga tushiradi. Bu yerda `block: true` yuqori oqim javobini bekor qiladi.

Istisno chiqaradigan himoya mexanizmlari `error: <message>` bilan qayd etiladi va `logger.warn` orqali jurnalga yoziladi, ammo zanjir davom etadi — bu ataylab ochiq xato siyosati asosida ishlaydi.

## Konfiguratsiya

Ichki himoya mexanizmlari oʻqiydigan muhit oʻzgaruvchilari:

| Oʻzgaruvchi                           | Foydalanadigan mexanizm  | Taʼsiri                                                                                                                             |
| ------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Aniqlashni butunlay oʻchirish uchun `false` qiymatini belgilang.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Inʼeksiya siyosati: `warn`, `block` yoki `log`. Eski `redact` qiymati inʼeksiya matnini qayta yozmaydi.                             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Inʼeksiya himoyasi rejimi; shuningdek, muhit oʻzgaruvchilarini **ustunlik bilan almashtiradigan** MB xususiyat bayrogʻi (MB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | `MODE=block` rad etadigan minimal jiddiylik darajasi: `high` (standart), `medium` yoki `low`.                                       |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | `INPUT_SANITIZER_BLOCK_THRESHOLD` uchun eski muqobil nom.                                                                           |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | `true` boʻlganda, soʻrovdagi PII tahrirlanadi (inʼeksiya rejimidan mustaqil ravishda).                                              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (quyi oqim) | Javob tomonidagi niqoblash mexanizmi xatti-harakatini boshqaradi.                                                                   |

Modality Bridge himoya mexanizmlari ish vaqti konfiguratsiyasini muhit oʻzgaruvchilaridan emas, MB tomonidan qoʻllab-quvvatlanadigan sozlamalar omboridan (`getSettings()`) oʻqiydi. Vision uchun asosiy kalitlar:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` va
`modalityBridgeCacheMaxEntries`. Eski
`visionBridge*` kalitlari faqat hujjatlashtirilgan bir siklli oʻqish
zaxira varianti sifatida qabul qilinadi; boshqaruv panelidagi yozuvlar asosiy kalitlardan foydalanadi. Standart qiymatlar va zaxira variantni aniqlovchi
`src/shared/constants/modalityBridgeDefaults.ts` faylida joylashgan, eski
konstantalar esa `src/shared/constants/visionBridgeDefaults.ts` faylida saqlab qolingan.

Audio `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` va `modalityBridgeAudioMaxClips`, shuningdek, umumiy
`modalityBridgeCache*` sozlamalaridan foydalanadi. Audio uchun eski kalitlarga qaytish imkoniyati yoʻq, chunki bu
kalitlar Modality Bridge sxemasi bilan birga joriy etilgan.

Video `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` va
`modalityBridgeVideoTimeout`, shuningdek, umumiy `modalityBridgeCache*` sozlamalaridan foydalanadi.
U standart holatda oʻchirilgan, chunki FFmpeg/ffprobe ixtiyoriy operatsion
bogʻliqliklar hisoblanadi va kadrlarga tavsif yaratish kechikish hamda model xarajatini oshiradi.

## Maxsus Guardrail’lar

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

Qadamlar:

1. `BaseGuardrail`ni kengaytiruvchi `src/lib/guardrails/myGuardrail.ts` faylini yarating.
2. `preCall` va/yoki `postCall`ni amalga oshiring.
3. Import vaqtida roʻyxatdan oʻtkazing (`registerDefaultGuardrails`dan qoʻshing) yoki
   bajarilish vaqtida `guardrailRegistry.register(...)`ni chaqiring — registr
   bir xil normallashtirilgan nomga ega oldingi guardrail’ni almashtiradi.
4. Testlarni `tests/unit/` ichiga qoʻshing (mavjud misollar:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testlash

Maʼlum holatdan boshlash uchun testlar orasida `resetGuardrailsForTests()`dan foydalaning.
Boʻsh registr bilan boshlash va faqat test qilinayotgan guardrail’larni roʻyxatdan
oʻtkazish uchun `{ registerDefaults: false }`ni uzating. Vision Bridge bogʻliqliklarni
kiritishni (`deps.getSettings`, `deps.callVisionModel`) qabul qiladi; Audio Bridge esa
sozlamalar, imkoniyatlar, STT modelini tanlash, hisob maʼlumotlarini tekshirish va
transkripsiya uchun mos ekvivalent ulanish nuqtalarini taqdim etadi. Shu sababli testlar
har ikkala oqimni ham maʼlumotlar bazasi yoki tarmoqqa ulanmasdan sinashi mumkin.

## Shuningdek qarang

- `src/lib/guardrails/` — amalga oshirish
- `src/shared/utils/inputSanitizer.ts` — prompt-injection va PII niqoblashni
  taʼminlovchi umumiy detektor
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge standartlari va
  majburiy bridge modellari roʻyxati
- `src/shared/constants/modalityBridgeDefaults.ts` — umumiy Vision/Audio bajarilish muhiti standartlari
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonal qatlam (circuit breaker, kutish davrlari)
- `docs/reference/ENVIRONMENT.md` — muhit oʻzgaruvchilarining toʻliq maʼlumotnomasi

## Injection-guard marshrut qamrovi va red-team (8-bosqich · D blok)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) foydalanuvchi promptlarini
qabul qiladigan barcha marshrutlarni qamrab oladi. U `INJECTION_GUARD_MODE`ga amal qiladi
(standart `warn` = faqat jurnalga yozish; `block` = HTTP 400 `SECURITY_001`ni qaytaradi).

| Tur           | Marshrutlar                                                                                                                                          | Standart rejim |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Matn (mavjud) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativ     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Maʼlumotlar   | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Matnni ajratib olish (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`ni qamrab oladi.

**Red-team (har kecha, `nightly-llm-security.yml`):** promptfoo har bir marshrut
`INJECTION_GUARD_MODE=block` holatida OWASP-LLM korpusini bloklashini tekshiradi; garak
probelarni ishga tushiradi (maxfiy kalit boʻlmasa, oʻtkazib yuboradi).
Izchillik uchun `moderations` ham kiritilgan — `block` rejimidagi operatorlar uni
`resolveDisabledGuardrails` orqali istisno qilishi mumkin.

Har kechalik ish jarayoni (`.github/workflows/nightly-llm-security.yml`, cron + qoʻlda
ishga tushirish) ikkita vazifaga ega:

- **`promptfoo-guard` (bloklovchi)** — `INJECTION_GUARD_MODE=block` bilan
  `promptfoo eval -c promptfooconfig.yaml`ni ishga tushiradi. Har bir zararli holat
  (masalan, "barcha oldingi koʻrsatmalarni eʼtiborsiz qoldir…", DAN uslubidagi
  jailbreak’lar) javobda `error.code === "SECURITY_001"` mavjudligini, yaʼni guard
  soʻrovni amalda rad etganini tekshiradi.
- **`garak` (tavsiyaviy)** — lokal OmniRoute nusxasiga
  (`http://localhost:20128/v1`) qarshi garak’ni `--probes promptinject,dan,leakreplay`
  bilan ishga tushiradi. U provayder maxfiy kalitiga (`PROMPTFOO_PROVIDER_KEY`)
  bogʻlangan; kalit boʻlmasa muammosiz oʻtkazib yuboradi va `|| true` bilan
  yakunlanadi, shu sababli CI’ni muvaffaqiyatsiz qilmasdan hisobot beradi.

Guard yordamchisining (`createInjectionGuard` / `withInjectionGuard`) qamrovi
prompt qabul qiluvchi har bir `/v1` marshrutini oʻz ichiga oladi; prompt matni
`src/shared/utils/inputSanitizer.ts` ichidagi `extractMessageContents()` tomonidan
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`dan olinadi.
