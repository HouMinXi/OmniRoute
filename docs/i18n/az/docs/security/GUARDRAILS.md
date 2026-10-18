# Guardrails (Azərbaycan dili)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Həqiqət mənbəyi:** `src/lib/guardrails/`
> **Son yenilənmə:** 2026-08-29 — v3.8.51 (Video Bridge transkriptinin mənşəyi çağıran tərəf tərəfindən bəyan edilir,
> hələ server tərəfindən təsdiqlənmir — #11661 əsasında dəqiqləşdirilib)

Qoruyucu mexanizmlər OmniRoute ilə yuxarı axın provayderləri arasındakı sərhəddə
təhlükəsizlik, siyasət və məzmun transformasiyalarını təmin edir. Hər bir qoruyucu mexanizm
sorğu faydalı yüklərini (`preCall`) və yuxarı axın cavablarını (`postCall`) yoxlaya
(və istəyə görə rədd edə, transformasiya edə və ya annotasiya edə) bilər.

Sistem **xəta zamanı açıqdır**: qoruyucu mexanizm icra zamanı xəta atarsa, reyestr
xətanı qeydə alır və sorğunu uğursuz etmək əvəzinə növbəti qoruyucu mexanizmlə
davam edir. Bloklama heç vaxt təsadüf deyil, açıq şəkildə verilən qərardır (`block: true`).

## Daxili qoruyucu mexanizmlər

Reyestr import zamanı altı qoruyucu mexanizmi prioritet sırasına uyğun olaraq avtomatik yükləyir
(`registry.ts` → `registerDefaultGuardrails()` bölməsinə baxın):

| Prioritet | Ad                  | Mərhələ(lər)   | Fayl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Daha aşağı prioritet nömrələri **ilk** icra olunur.

### Görüntü körpüsü (`visionBridge.ts`) — Modallıq körpüsü PR-1

**Görüntünü dəstəkləməyən modellərə** yönəldilmiş, şəkil ehtiva edən sorğuları ələ keçirir və ya bütün sorğunu görüntünü dəstəkləyən modelə yenidən yönləndirir, ya da yuxarı axın çağırışından əvvəl şəkil hissələrini konfiqurasiya edilə bilən görüntü modeli tərəfindən yaradılmış mətn təsvirləri ilə əvəz edir. Bu, yalnız mətnlə işləyən provayderlərə multimodal faydalı yükləri şəffaf şəkildə emal etməyə imkan verir.

Axın:

1. Hədəf model artıq görüntünü dəstəkləyirsə, bu model məcburi körpü siyahısında `isVisionBridgeForcedModel` yer almadığı halda addımı keçin.
2. Şəkil hissələrini `extractImageParts(messages)` vasitəsilə çıxarın
   (`visionBridgeHelpers.ts`); bu funksiya `open-sse/utils/mediaParts.ts` daxilindəki **vahid media detektoruna** — `detectMediaParts()` funksiyasına — ötürür; bu, kombinasiya uyğunluğu filtri ilə paylaşılan yeganə həqiqət mənbəyidir.
   Çıxarış `replaceImageParts` funksiyasının geri yerləşdirə bildiyi formalardakı üst səviyyəli hissələrin icazə siyahısı ilə məhdudlaşır (çıxarış↔əvəzləmə müqaviləsi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` və Responses API `input_image`. İç-içə uyğunluqlar və
   yalnız indikator ehtiva edən formalar kombinasiya filtrinin materialıdır və heç vaxt çıxarılmır.
   Heç nə tapılmadıqda addımı keçin.
3. İcra vaxtı konfiqurasiyasını `resolveVisionBridgeRuntimeSettings()` vasitəsilə həll edin
   (`src/shared/constants/modalityBridgeDefaults.ts`): yeni `modalityBridge*`
   parametr açarları üstünlük təşkil edir; köhnə `visionBridge*` açarları isə **bir dövrlük ehtiyat variantı**
   (geri qaytarma pəncərəsi) olaraq qalır. Körpü deaktivdirsə, hər hansı media keçidindən əvvəl addımı keçin.
4. Rejim seçicisi (`modalityBridgeVisionMode`, aşağıdakı cədvələ baxın)
   yenidən yönləndirmə və ya təsvir etmə arasında seçim edir. Yenidən yönləndirmə yalnız `model`
   dəyişdirilmiş `modifiedPayload`, həmçinin `{ rerouted, fromModel, toModel, imagesKept }` metadatasını qaytarır.
5. Təsvir yolu: şəkillərin sayını `maxImages` ilə məhdudlaşdırır, tapşırığa uyğun əmri tərtib edir,
   təsvir keşini yoxlayır, görüntü modelini **paralel olaraq**
   (`Promise.allSettled`) çağırır və onların yerinə `[Image N]: <description>` mətn hissələrini
   əlavə edir. Uğursuz təsvir `null` qaytarır və orijinal şəkil hissəsi
   **qorunur** (#4012) — bütün təsvirlərin uğursuz olduğu kombinasiya təsvir yolu istisna olmaqla;
   bu halda görüntünü dəstəkləmədiyi təsdiqlənmiş yuxarı axına əvəzinə
   `(əlçatan deyil — görüntünü dəstəkləyən provayder qoşulmayıb)` doldurucusu verilir (#8430).
6. `modifiedPayload` və metadatanı (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) qaytarın.

#### Rejim seçicisi (`modalityBridgeVisionMode`)

| Rejim      | İlkin dəyər | Davranış                                                                                                                                                                                                                                                                                                                                      |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Köhnə evristika dəyişdirilməyib (#6640/#7204): kombinasiya olmayan/`auto/` modellər, orijinal modelin artıq istifadə edilə bilən giriş məlumatları olmadığı halda, ən yaxşı görüntü modelinə yenidən yönləndirilir (əks halda təsvir edilir); kombinasiya hədəfləri həmişə təsvir edilir.                                                     |
| `describe` |             | Həmişə təsvir edin — yenidən yönləndirmə bloku tamamilə keçilir; həmişə istifadəçinin seçdiyi model cavab verir.                                                                                                                                                                                                                              |
| `reroute`  |             | Məcburi yenidən yönləndirmə: giriş məlumatları olan modeli saxlama qoruyucusu nəzərə alınmır. Yenidən yönləndirmə **hədəfi** üçün giriş məlumatları qoruyucusu yenə də tətbiq olunur — istifadə edilə bilən görüntü hədəfi olmadıqda sorğu təsvir etməyə keçir ki, xam şəkillər yalnız mətnlə işləyən arxa sistemə heç vaxt çatmasın (#8430). |

Məcburi rejimlər avtomatik evristika işə düşməzdən **əvvəl** qısa qapanma yaradır; `auto` davranışı
PR-1-dən əvvəlki qoruyucu mexanizmlə bayt səviyyəsində eynidir.

#### API açarı əhatə dairəsi (`visionBridgeKeyScope.ts`)

Çağıranın API açarı `allowedConnections`, kvota hovuzları
(`allowedQuotas`) və ya modellər (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) üçün məhdudiyyət qoyduqda, körpü yalnız açarın istifadə edə biləcəyi bağlantılarda olan və açarın istifadə edə biləcəyi yenidən yönləndirmə və təsvir modellərini seçir. Bundan sonra təsvir çağırışı həmişə
`x-omniroute-self-loop-key-id` başlığı ilə OmniRoute özünə-döngəsi vasitəsilə həyata keçirilir ki, qəbul edən söhbət sorğusu həmin açarın bağlantı və model siyasətini yenidən tətbiq etsin. `enforceApiKeyPolicy()`
həmin başlığı yalnız özünə-döngə daşıyıcısı ilə birlikdə nəzərə alır; buna görə də o, girişi yalnız daralda bilər və həll olunmayan identifikator rədd edilir.

Açar üçün heç bir görüntü modelinə icazə verilmirsə, təsvir yolu kənara çəkilir və
sorğu dəyişdirilmədən ötürülür; bu, deaktiv edilmiş qoruyucu mexanizmin uğursuzluq zamanı açıq qalma davranışı ilə eynidir
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Açarsız sorğular və bu məhdudiyyətləri olmayan açarlar əvvəlki kimi davranır.

#### Tapşırığa uyğun təsvir əmri (`modalityBridgeVisionTaskAware`)

Standart olaraq **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) əsas təsvir sorğusuna **son istifadəçi mesajının** mətnini (500 simvoladək qısaldılmış formada) əlavə edir, bununla təsviri istifadəçinin əslində soruşduğu istiqamətə yönəldir (codex-vision-proxy nümunəsi) və görüntü modelindən görünən mətni transkripsiya etməsini istəyir. Bayraq söndürülübsə — yaxud istifadəçi mətni yoxdursa — əsas sorğu dəyişdirilmədən istifadə olunur.

Təsvir üzrə özünə dövrənin OpenAI ilə uyğun olan öz sorğusu (`visionBridgeHelpers.ts` daxilindəki `callVisionModelSingle()`) həmişə `image_url.detail: "high"` tələb edir — şərtsiz olaraq, hər bir çağıran/provayder üçün və heç bir müştəri siqnalından asılı olmadan. Aşağı detallı nümunələmə məhz bu sorğunun tələb etdiyi mətn transkripsiyası tapşırığı üçün OCR dəqiqliyini pisləşdirir; buna görə də ilkin daxil olan sorğunun hansı detal səviyyəsindən istifadə etməsindən asılı olmayaraq, təsvir çağırışının özü həmişə yüksək detal tələb edir. Bu, yalnız daxili təsvir sorğusunun gövdəsinə təsir edir; OmniRoute-un əsas sorğuda çağıranın öz `image_url.detail` parametrini necə ötürməsini dəyişmir — həmin standart ayrıca və yalnız aşkarlanmış OpenCode müştəriləri üçün `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) daxilində tətbiq olunur. Təsvir üzrə özünə dövrənin Anthropic kabel formatı qolu `detail` sahəsinə malik deyil və bu standartların heç birindən təsirlənmir.

#### Təsvir çıxışının həddi (`modalityBridgeVisionMaxChars`)

| Açar                           | Standart | Diapazon            |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` və ya 100–50000 |

`0` (standart) **heç bir həddin olmadığını** bildirir — `callVisionModel()` tərəfindən qaytarılan təsvir dəyişdirilmədən ötürülür və mövcud davranış qorunur. 100–50000 diapazonundakı istənilən dəyər təsviri `[Image N]: <description>` kimi yenidən yerləşdirilməzdən əvvəl `…` suffiksi ilə qısaldır (`src/lib/guardrails/visionBridge.ts` daxilindəki `VisionBridgeGuardrail.preCall()`). Aşağı axındakı modelin tam transkripsiyaya ehtiyac duyduğu çoxdetallı OCR tapşırıqları üçün bu dəyəri artırın; çox mətn yaradan görüntü modellərində token istifadəsini məhdudlaşdırmaq üçün isə azaldın. İdarəetmə panelindəki sahə Vision vərəqəsinin Advanced panelində yerləşir (`ModalityBridgeVisionTab.tsx` daxilindəki `modality-bridge-max-chars`) və açıq şəkildə göstərilmiş `0` dəyərinə toxunmadan 1 ilə 99 arasındakı istənilən dəyəri minimum 100 həddinə yüksəldir — `0` sadəcə “təyin edilməyib” standartı deyil, özlüyündə etibarlı Zod dəyəridir (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`).

#### Təsvir keşi (`modalityBridge/bridgeCache.ts`)

Təsvir çıxışları üçün proses miqyasında ortaq istifadə edilən yaddaşdaxili LRU + TTL keşi. Açar = uzunluq prefiksli çərçivələmə ilə `sha256(imageRef + composedPrompt + configuredBridgeModel)` (sahə sərhədlərinin toqquşması yoxdur). Model komponenti faktiki cavab verən model deyil, **konfiqurasiya edilmiş** körpü modelidir — `callVisionModel` daxilən ehtiyat modelə keçə bilər və hər cəhd üzrə açarlama keşi parçalayardı. Uğursuz təsvirlər heç vaxt keşlənmir. Parametrlər:

| Açar                            | Standart | Diapazon |
| ------------------------------- | -------- | -------- |
| `modalityBridgeCacheEnabled`    | `true`   | —        |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440   |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000  |

#### Uzaq görüntülərin normallaşdırılması (özünə dövrə təsviri/base64 əldə edilməsi)

Körpü **uzaq** görüntünü özü əldə etdikdə — həm Anthropic təsvir öz-çağırışı, həm də claude kabel formatının base64 çevirməsi (`ensureBase64ImagesForClaudeWire`) zamanı, hər ikisi `visionBridgeHelpers.ts` daxilindəki `fetchRemoteImageAsDataUri()` vasitəsilə — nəticədə alınan data URI görüntü modelinin sorğusuna yerləşdirilməzdən əvvəl `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) vasitəsilə emal olunur. Həddən böyük görüntülərin ölçüsü **uzun tərəf üzrə 2048px** ölçüsünədək kiçildilir (OpenAI/Anthropic-in artıq server tərəfində tətbiq etdiyi ölçü həddinə uyğun olaraq); bu, görüntü modelinin gördüyünü dəyişmədən yükləmə baytlarını/gecikməni azaldır. Ölçünün dəyişdirilməsi dinamik import vasitəsilə yüklənən `sharp` istifadə edir: onun yerli binar faylının yüklənə bilmədiyi platformada `normalizeDataUri()` **heç vaxt xəta atmır** — ilkin baytları dəyişmədən ötürməyə geri qayıdır və beləliklə təsvir/base64 çevirmə yolu həmişə işləməyə davam edir. Görüntü olmayan baytlar (deşifrə edilə bilən görüntü qaytarmayan əldəetmə nəticəsi) da dəyişdirilmədən ötürülür. Bu normallaşdırma körpünün öz çağırışı üçün özü əldə etdiyi görüntülərlə məhdudlaşır — yalnız seçimlə aktivləşdirilən dəyişdirmə prinsipinə (Sərt Qayda #20) uyğun olaraq, çağıranın dəyişdirilmədən ötürülən ilkin faydalı yükünə heç vaxt tətbiq edilmir.

#### Parametrlər sxemi + miqrasiya

Yeni `modalityBridge*` açarları `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`) daxilində Zod ilə doğrulanır: `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*` üçlüyü və Audio Bridge tərəfindən istifadə edilən `modalityBridgeAudio*` qrupu. `141_modality_bridge_settings.sql` miqrasiyası mövcud köhnə `visionBridge*` dəyərlərini uyğun yeni açarlara köçürür (idempotentdir, operator tərəfindən təyin edilmiş `modalityBridge*` dəyərinin üzərinə heç vaxt yazmır); köhnə açarlar bir buraxılış dövrü ərzində oxuma üzrə ehtiyat variant kimi qəbul edilməyə davam edir.

#### Şəffaflıq başlığı + statistika

Təsvir vasitəsilə çevrilmiş cavablar
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
başlığını daşıyır (`modalityBridge/bridgeStats.ts` daxilindəki `buildModalityBridgeHeader()` tərəfindən qurulur, `src/sse/handlers/chatHelpers.ts` daxilindəki `withModalityBridgeHeader()` tərəfindən əlavə edilir). Yenidən marşrutlaşdırılmış sorğular **heç bir** başlıq almır — faydalı yükə toxunulmayıb və modelin dəyişdirilməsi artıq cavab gövdəsinin `model` sahəsində görünür.

`GET /api/modality-bridge/stats` (idarəetmə autentifikasiyası, `GET /api/settings` ilə
eyni səviyyə) `vision`, `audio` və `video` üçün yaddaşda saxlanılan, hər modallığa
aid `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` sayğaclarını qaytarır.
`averageLatencyMs` məxrəc kimi bütün cəhdlərdən deyil, `latencySamples` dəyərindən
istifadə edir; vaxt ölçümü olmayan əməliyyat saxta sıfır millisaniyəlik nümunə
yaratmır. `bridged` uğurlu çevirmələr üçün geriyə uyğun təxəllüs olaraq qalır;
uğursuz cəhdlər onu artırmır.
Sayğaclar dizayna uyğun olaraq proses yenidən başladıqda sıfırlanır
(uçot deyil, telemetriya).

#### İdarəetmə panelinin konfiqurasiyası

Xüsusi idarəetmə paneli səhifəsi
`/dashboard/settings/modality-bridge` ünvanındadır. Onun URL vasitəsilə ünvanlana
bilən `Vision`, `Audio` və `Video` tabları `tab` dəyərini dəyişərkən sorğu
parametrlərini qoruyur. Vision tabı aktivləşdirmə, rejim, model seçimi (avtomatik
standart seçim daxil olmaqla), tapşırıqdan asılı prompt yaratma, təkmil
taymaut/şəkil/təsvir uzunluğu/keş limitləri, icra vaxtı sayğacları və qorunan
nümunə sorğusunu təqdim edir. Audio tabı da aktivdir: o, aktivləşdirmə, Auto
seçimli yalnız STT model seçicisi, taymaut/maksimum klip limitləri, audio
sayğacları və `input_audio` nümunə testini təqdim edir. Video tabı funksionaldır:
o, FFmpeg/ffprobe icra mühitinin vəziyyətini — dörd açıq UI vəziyyətindən birini
(zondlama davam edərkən və ya tamamlana bilmədikdə `unknown`, zondlamanın müştəri
tərəfində ötürüldüyü qeyri-loopback idarəetmə paneli hostunda `restricted`,
zondlama aparıldıqdan və çatışmazlıq təsdiqləndikdən sonra `unavailable`, yaxud
FFmpeg/ffprobe versiyaları ilə birlikdə `available`) — bildirir,
aktivləşdirmə/model/kadr/video/taymaut limitlərini yadda saxlayır, model seçicisini
görüntü imkanlı modellərlə məhdudlaşdırır və video sayğaclarını təqdim edir.

AI parametrləri altındakı əvvəlki Vision Bridge kartı yeni səhifəyə uyğunluq
keçididir; o, artıq formanın ikinci nüsxəsini özündə saxlamır. Media Providers
bölməsi də mövcud Speech-to-Text sınaq mühitini silmədən Image-to-Text və
Speech-to-Text iş axınlarını müvafiq Modality Bridge tablarına bağlayır.

**Özünə dövr qəbulunun yan keçidi:** təsvir çağırışı OmniRoute-un öz `/v1`
özünə dövrü (qeyri-standart provayder modeli) üzərindən yönləndirildikdə alt sorğu
`x-omniroute-admission-bypass: internal` göndərir və müəyyən edilmiş özünə dövr
etimadnaməsi ilə autentifikasiya olunur — lokal rejimdə lokal `sk_omniroute`
sentineli və ya operator tərəfindən konfiqurasiya edilmiş `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` mühit açarı (#1350); beləliklə, `REQUIRE_API_KEY=true`
yerləşdirmələri yenə də təsvir çağırışını icra edə bilir. Yan keçid yalnız həmin
dəqiq etimadnamələr üçün qəbul edilir, buna görə xarici müştərilər qəbul
mərhələsini keçmək üçün başlıqdan istifadə edə bilməzlər.

Köhnə standart dəyərlər `src/shared/constants/visionBridgeDefaults.ts` faylında;
yeni rejim/tapşırıqdan asılı/keş standartları və parametr həlledicisi isə
`src/shared/constants/modalityBridgeDefaults.ts` faylındadır. Qoruyucu mexanizm
testlərin saxta `getSettings` və `callVisionModel` implementasiyalarını yeritməsi
üçün `deps` konstruktor seçimini təqdim edir.

### Audio Körpüsü (`audioBridge.ts`) — Modallıq Körpüsü PR-3

Audio girişini qəbul etdiyi məlum olmayan hədəfə çatmazdan əvvəl audio ehtiva edən
çat sorğularını tutur. O, çat sorğusunu heç vaxt başqa marşruta yönləndirmir:
audio hissələri mövcud OpenAI-uyğun multipart son nöqtəsi vasitəsilə transkripsiya
edilir və seçilmiş çat modeli mətn transkriptləri ilə davam edir.

Axın:

1. `supportsAudio` dəyərini `getResolvedModelCapabilities()` vasitəsilə müəyyən
   edin. Açıq provayder reyestri metadatası üstünlük təşkil edir, ardınca statik
   model metadatası, sonra isə sinxronlaşdırılmış `modalities_input` gəlir.
   `audio` olmayan elan edilmiş giriş siyahısı `false` sayılır; imkan barədə heç
   bir dəlil olmadıqda dəyər `null` olaraq qalır. Həm `false`, həm də `null`
   konservativ körpünü aktivləşdirir, `true` isə ondan yan keçir.
2. `modalityBridgeAudio*` parametrlərini müəyyən edin və paylaşılan
   `detectMediaParts()` detektoru vasitəsilə hər mesajdan birləşdirilə bilən üst
   səviyyəli audio hissələrini çıxarın. Dəstəklənən ötürmə formatları OpenAI
   `input_audio`, `audio_url` və `source.media_type: "audio/*"` formatlarıdır.
   İç-içə audio marşrutlaşdırma üçün aşkarlanır, lakin birləşdirmə yolu tərəfindən
   silinmir. İş həcmi `modalityBridgeAudioMaxClips` ilə məhdudlaşdırılır; sonrakı
   hissələr toxunulmadan qalır.
3. Konfiqurasiya edilmiş `provider/model` dəyərindən istifadə edin və ya
   `selectAudioBridgeModel()` funksiyasına `AUDIO_TRANSCRIPTION_PROVIDERS`
   siyahısını sabit kataloq ardıcıllığı ilə nəzərdən keçirərək istifadəyə yararlı
   aktiv provayder etimadnaməsinə malik ilk modeli seçməyə icazə verin.
4. `callAudioTranscription()` base64/data-URI audiosunu multipart `file` faylına
   çevirir və ya uzaq `audio_url` resursunu DNS sabitləməsi və 25 MB limiti olan,
   yalnız ictimai ünvanlara icazə verən çıxış qoruyucusu vasitəsilə endirir. Daha
   sonra faylı və seçilmiş modeli `resolveSelfLoopBearer()` ilə autentifikasiya
   olunan lokal `/v1/audio/transcriptions` özünə dövrünə POST edir. Mövcud
   transkripsiya marşrutu normal etimadnamə axtarışını, gözləmə müddəti/sürət
   limiti idarəetməsini və provayderə göndərişi həyata keçirir.
5. Uğurlu çağırışlar öz hissələrini `[Audio N]: <transcript>` ilə əvəz edir.
   Çağırışlar `Promise.allSettled` ilə icra olunur: fərdi uğursuzluq həmin
   orijinal audio hissəsini qoruyur (#4012 müqaviləsi). Bütün çağırışlar uğursuz
   olarsa və hədəfin `supportsAudio === false` olduğu sübuta yetirilərsə, hissələr
   `[Audio N]: (unavailable — no STT provider connected)` formasını alır (#8430
   müqaviləsi). Naməlum hədəf (`null`) üçün tam uğursuzluq nəticəsi toxunulmadan
   qalır. İstifadəyə yararlı STT etimadnaməsi olmayan, yalnız mətni dəstəklədiyi
   sübuta yetirilmiş hədəf şəbəkə çağırışı etmədən eyni açıq doldurucu mətni
   alır.

Uğurlu transkriptlər proses miqyaslı Modality Bridge LRU/TTL keşindən istifadə
edir. Açar audio istinadını, sabit `audio-transcription` əməliyyat etiketini və
seçilmiş STT modelini birləşdirir; uğursuzluqlar heç vaxt keşlənmir. Audio cəhdləri
paylaşılan `bridged`, `cacheHits`, `failures` və `lastUsedAt` sayğaclarını
yeniləyir. Çevrilmiş cavablar
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` daşıyır;
toxunulmamış sorğular Audio Bridge seqmenti almır.

İcra vaxtı parametrləri DB-də saxlanılır və Zod ilə doğrulanır:

| Açar                          | Defolt  | Aralıq                    |
| ----------------------------- | ------- | ------------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                         |
| `modalityBridgeAudioModel`    | `""`    | Avtomatik və ya STT ID-si |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000               |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                      |

Ortaq keş hələ də `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` və `modalityBridgeCacheMaxEntries` tərəfindən idarə olunur.

### Video körpüsü (`videoBridge.ts`, `videoBridgePipeline.ts`)

Məlum yerli video dəstəyi olmayan hədəf çağırılmazdan əvvəl Chat Completions
`messages` və Responses API `input` daxilindəki yuxarı səviyyəli video hissələrini
ələ keçirir. Dəstəklənən formatlar `input_video`, `video_url`, `video_source`, HTTPS URL-ləri
və `data:video/*;base64,...` data URI-ləridir. Mətndəki adi fayl adları video
kimi qəbul edilmir.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) sorğunun nəzərdən keçirilməsini,
imkan/siyasət yoxlamasını, hər sorğu üzrə aqreqasiyanı və cavab yükünü idarə edir.
Hər video üzrə iş — əldə etmə, tam nəticə keşi, kadr
ardıcıllığının təsvir edilməsi (çağıran tərəfin bəyan etdiyi istənilən audio transkripti ilə birləşdirilir)
və hər cəhd üzrə metriklər/dayandırma/təmizləmə — `videoBridgePipeline.ts` daxilindəki
`processVideoPart` arxasında gizlədilib və `preCall` dövründə hər video hissəsi üçün bir dəfə çağırılır.
Həmin modul həmçinin açıq port sərhədlərini müəyyən edir: `VideoMediaBrokerPort`
(baytların əldə edilməsi və seçilmiş kadrların çıxarılması), `VideoAudioTranscriptionPort`
(çağıran tərəfin bəyan etdiyi audio transkriptinin seçilmiş kadr başlıqları ilə birləşdirilməsi) və
`VideoDrilldownPort` (kadr üzrə detallı təhlilin saxlanma sərhədi; hələ
`processVideoPart` ilə əlaqələndirilməyib — hazırda detallı təhlil qeydlərini yalnız ayrıca
`/api/modality-bridge/video/drilldown` marşrutu yazır).

İctimai `/v1` sorğu yolu heç vaxt alt prosesi import etmir və ya çağırmır. Uzaq
videolar 50 MiB limiti daxilində endirilir; daxili base64 videolar üçün isə model/mesajlar/çərçivələmə zərfinin
ictimai JSON sorğusunun 50 MiB-lıq qəbul limiti daxilində qala bilməsi məqsədilə
hər video üzrə dekodlanmış ölçü üçün konservativ 36 MiB limiti tətbiq olunur. Daxili
uzunluq və dekodlanmış ölçü təxminləri yaddaş ayrılmadan əvvəl yoxlanılır. İlkin uzaq URL-də
və hər yönləndirmədə HTTPS tələb olunur; bunun üçün DNS sabitləməsi ilə mövcud
yalnız-ictimai çıxış qoruyucusundan istifadə edilir. Daha sonra baytlar dəqiq daxili
`POST /api/modality-bridge/video/extract` broker sərhədindən keçir. Bu marşrut həm
`LOCAL_ONLY`, həm də `SPAWN_CAPABLE`-dır, yalnız hər proses üçün autentifikasiya edilmiş,
etibarlı loopback sorğusunu qəbul edir və heç vaxt URL, fayl sistemi yolu, icra olunan fayl
və ya arqument siyahısı qəbul etmir. API gövdə ölçüsü konveyeri və işləyicinin inkremental gövdə
oxuyucusu broker girişi üçün 50 MiB limitini bir-birindən asılı olmayaraq tətbiq edir. Onun məhdudlaşdırılmış növbəsi
eyni anda bir çıxarma əməliyyatı icra edir, gözləyən dörd işə icazə verir və gözləyən girişlərin
ümumi ölçüsünü 100 MiB ilə məhdudlaşdırır.

Broker daxilində `ffprobe` məxfi lokal faylı oxuyur; sabit format
icazə siyahısı pleylist və manifest formatlarını istisna edir. İcazə verilən MOV ailəsinə aid
konteynerlər üçün xarici MOV məlumat istinadları defolt olaraq deaktiv qalır və
sabit komanda onları aktivləşdirmir. Həm `ffprobe`, həm də `ffmpeg`
yalnız `file` protokoluna icazə siyahısından, bir axından, sabit arqument massivlərindən istifadə edir,
shell istifadə etmir və icra olunan faylları `PATH` daxilindən tapır. Əlavə edilmiş şəkil tipli üz qabığı axınları
oynadıla bilən namizədlər deyil. Bütün oynadıla bilən axınlar limitlərə uyğun olmalıdır və
deterministik ən aşağı indeksli ehtiyat variantdan əvvəl açıq şəkildə göstərilmiş defolt axına üstünlük verilir.
Videolar 600 saniyə, hər ölçü üzrə 8,192 piksel və
33,554,432 mənbə pikseli ilə məhdudlaşdırılır. FFmpeg 1–16 orta nöqtəli JPEG kadrı seçir, kiçik girişləri
böyütmədən uzun tərəfi ən çox 1,024 pikselə qədər kiçildir və
heç vaxt URL qəbul etmir. Defolt olaraq seçmə `uniform`-dur. İxtiyari
`scene_aware` və eksperimental `segment_aware` siyasətləri artıq təsdiqlənmiş lokal axın üzərində
bir əlavə sabit FFmpeg keçidi həyata keçirir, məhdud sayda
`showinfo` səhnə zaman nişanlarını seçir və detektor nasazlığı, vaxt aşımı, xətalı çıxış və ya boş
namizəd dəsti halında deterministik şəkildə eyni vahid orta nöqtələrə qayıdır. Seqmentdən xəbərdar rejim
orta nöqtə nümunələrini təsdiqlənmiş səhnə intervallarına mütənasib şəkildə bölüşdürür; seqmentdən xəbərdar
sübutlar və ehtiyat davranışı aşağıda ətraflı təsvir edilmişdir. Sərt 16 kadr limiti
hər siyasətdə seçimdən sonra tətbiq olunur. Səhnədən xəbərdar sorğunun yalnız
bir kadr büdcəsi olduqda, aktiv tam video və ya fokus
pəncərəsinin vahid orta nöqtəsindən istifadə edilir və `policyEffective: uniform` bildirilir: seçilmiş tək səhnə kadrı
hər iki zaman ucunu qoruya bilməz. Çağıran tərəf istəyə görə sonlu
fokus pəncərəsi (`start`/`end` saniyə) təqdim edə bilər; sərhədlər media
müddətinə uyğun məhdudlaşdırılır, tərsinə çevrilmiş və ya sonlu olmayan pəncərələr rədd edilir və bütün seçmə
siyasətləri yalnız normallaşdırılmış interval daxilində yerinə yetirilir. Nəticədə alınan
pəncərə seçmə metadatasına və etibarsız təsvir
prefiksinə daxil edilir ki, sonrakı modellər fokuslanmış fraqmenti tam
zaman xəttindən fərqləndirə bilsin.

Semantik başlıq fokusu ayrıca, açıq parametrdir. Defolt `full`
təhlil rejimi mövcud kadr promptunu qoruyur və sorğu mətnini heç vaxt başlıq modelinə
ötürmür. `focused` rejimində körpü yalnız eyni Chat və ya Responses
konteynerindəki ən son boş olmayan istifadəçi tərəfindən yazılmış `text`/`input_text` mətnini oxuyur,
onu NFC-yə normallaşdırır, idarəetmə simvollarını və boşluqları yığcamlaşdırır
və 500 Unicode kod nöqtəsi ilə məhdudlaşdırır. Boş nəticə tam olaraq
`full` promptuna qayıdır. İstifadə oluna bilən ipucu ayrıca
etibarsız istifadəçi konteksti blokunda JSON kimi seriyalaşdırılır və yalnız müşahidə edilə bilən detalları
prioritetləşdirə bilər; o, mediada görünən və ya eşidilən təlimatlara əməl edilməməsi barədə ayrıca xəbərdarlığı
qüvvədən sala bilməz. Mətn fokusu heç vaxt `start`/`end` dəyərlərini çıxarmır və
zaman seçicisini dəyişmir.

#### FU-07 struktur seqment sübutları

`segment_aware` artıq doğrulanmış lokal video axını üzərində bir dəfəlik, məhdudlaşdırılmış ilkin analiz keçidindən istifadə edir. Sabit filtr zənciri əvvəlcə eni maksimum 320 pikselə qədər miqyaslandırır, səhnə dəyişikliklərini və donmuş intervalları aşkarlayır, sonra bulanıqlıq, orta parlaqlıq və məkan/zaman məlumatı üçün saniyədə 1 kadr nümunəsi götürür. Keçid 600 struktur nümunəsi, bir FFmpeg/filtr axını, eyni yalnız-`file` protokolu və konteyner icazə siyahıları, 1 MiB proses çıxışı həddi və brokerin ortaq ləğv/son müddəti daxilində maksimum 30 saniyə ilə məhdudlaşdırılır. O, sorğudan heç vaxt əmr, filtr, yol və ya URL qəbul etmir.

Struktur dəyərlər semantik video anlayışı deyil, deterministik nümunə götürmə sübutlarıdır. Onlar subyektlər, hərəkətlər, altyazılar, nitq və ya istifadəçi niyyəti barədə nəticə çıxarmır. Səhnə və donma sərhədləri seqmentlər yaradır; donma əhatəsi, bulanıqlıq, ekspozisiya, məkan detalları və zamana görə dəyişiklik yalnız mövcud 1–16 kadrlıq büdcənin necə bölüşdürüldüyünə təsir edir. Tamamilə donmuş seqment maksimum bir kadrla məhdudlaşdırılır, donmamış seqmentlər isə qalan büdcə uğrunda rəqabət aparır. Sərhədlərin sayı kadrların sayını keçdikdə, zaman xətti üzrə bərabər əhatə qorunur ki, başlanğıcdakı sürətli keçidlər uzun son seqmenti gizlədə bilməsin. Donma sərhədinin 1 saniyəlik analiz ayırdetmə qabiliyyəti daxilində yerləşən səhnə sərhədləri birləşdirilir.

Çatışmayan filtrlər, səhv formatlı/boş sübutlar, detektor xətası və ya məhdudlaşdırılmış ilkin analizin vaxt aşımı halında sistem tam olaraq bərabər orta nöqtə siyasətinə açıq şəkildə geri qayıdır. Çağıranın ləğvi və ya brokerin son müddətinin çatması halında isə belə geri dönüş baş vermir: icra olunan alt proses dayandırılır, sonrakı kadr çıxarılmasının qarşısı alınır və məxfi müvəqqəti ağac `finally` daxilində silinir.

`scripts/perf/video-bridge-fu07-eval.ts` dublikatların silinməsindən sonrakı təsvir çağırışı qənaəti, intensiv hərəkət büdcəsinin bölüşdürülməsi, bulanıqlıq/ekspozisiya/SI-TI sübutları, uzun sonluqlu sürətli keçidlər və tədricən solma üzrə yanlış müsbət nəticələr üçün deterministik real FFmpeg sınaq materialları yaradır. O, ilkin analizin divar saatı vaxtını və `/usr/bin/time` mövcud olduqda alt prosesin CPU istifadəsini və pik RSS göstəricisini qeydə alır. Onun keyfiyyət yoxlamaları yalnız struktur orakullarıdır. Bu sınaq sistemində səlahiyyətli son nöqtə və ya sabitlənmiş qiymətləndirici olmadığı üçün real təsvir modelinin keyfiyyəti `HOLD` olaraq qalır. `--caption-cost-per-call-usd` hər çağırış üçün açıq müsbət xərc təxmini təqdim etmədikcə, maliyyə qənaəti də `HOLD` olaraq qalır; skript bu nəticələrin heç birini uydurmur.

Hər kadr 4 MiB, bütün xam kadrlar birlikdə 23 MiB, seriyalaşdırılmış broker cavabı isə 32 MiB ilə məhdudlaşdırılır. Məxfi müvəqqəti kataloq `finally` daxilində silinir. OmniRoute FFmpeg-i paketə daxil etmir və fərdi icra faylı yolunu qəbul etmir. Təsvir yaratmazdan əvvəl körpü konservativ vizual dublikat aradan qaldırma keçidi tətbiq edir: hər JPEG 16×16 boz tonlu buferə kiçildilir və yalnız saxlanılmış son kadrla müqayisə edilir. Birdən çox kadrlıq təsvir büdcəsi tələb edildikdə, çıxarma prosesi həmin büdcənin maksimum iki mislinədək və heç vaxt 16 kadrdan çox olmayan məhdud namizəd hovuzu təqdim edir. Tələb edilən hədd yalnız dublikatlar aradan qaldırıldıqdan sonra tətbiq edilir; büdcə ən azı iki olduqda yekun seyrəltmə zamanı ilk və son seçilmiş namizədlər qorunur. Versiyalaşdırılmış `grayscale-16x16-mean-cells-v2` siyasəti orta parlaqlıq fərqi ilə normallaşdırılmış fərqi ən azı 0.05 olan miniatür xana nisbətindən daha böyük olanını istifadə edir. Dublikat həddi sabit 0.04-dür və icra vaxtı parametri kimi təqdim edilmək əvəzinə proqnozlaşdırıla bilməsi üçün seçilib. Bu ikinci yüksək kontrastlı siqnal yalnız orta göstəriciyə əsaslanan müqayisənin gizlədə biləcəyi kiçik hərəkətləri və görünən mətn dəyişikliklərini qoruyur. Müqayisəedici və ya dekoder xətaları halında sistem açıq şəkildə davam edir və əhatəni saxlayır. Çıxış metadatası çıxarılmış namizədləri, uğurla istifadə edilmiş kadrları və atılmış vizual dublikatları ayrı-ayrılıqda göstərir.

Açıq şəkildə video kimi işarələnmiş hissə zaman nişanlı əlaqə vərəqi tələb edə bilər. Körpü maksimum 4 sütunlu, 16 kadrlıq JPEG toru yaradır. Hər 512 piksellik xana mənbə zaman nişanını yüksək kontrastlı alt zolağa həkk edir, eyni zaman nişanları isə sonrakı əlaqələndirmə və audit üçün mətn metadatasında saxlanılır. Tam JPEG 32 MiB həddini aşmır. `sharp` toru dekodlaya və ya tərtib edə bilməzsə, körpü ayrıca JPEG kadrlara geri qayıdır; müştəri ləğvi yenə də vərəq əməliyyatına ötürülür.

İstifadəyə buraxılma sübutları sintetik kompozisiya mikrobencmarkından qəsdən ayrılıb. `scripts/perf/video-bridge-contact-sheet-eval.ts` real OpenAI-uyğun görüntü modelləri üçün sxem versiyalı A/B sınaq sistemi müəyyən edir. O, provayder tərəfindən bildirilən tokenləri, başdan sona divar saatı gecikməsini (vərəqin tərtibi daxil olmaqla), model çağırışlarının sayını və manifestlə müəyyən edilmiş faktların saxlanmasını ölçür. Xam model cavabları hesabata yazılmır; yalnız SHA-256 xülasələri və uyğun gələn fakt ID-ləri saxlanılır. `--execute-real` ötürülmədikcə və `--model`, `OMNIROUTE_BASE_URL` və `OMNIROUTE_API_KEY` konfiqurasiya edilmədikcə, sınaq sistemi heç bir şəbəkə və ya ödənişli model çağırışı etmir. Belə açıq real icra olmadan onun maşınla oxuna bilən hökmü `HOLD` olaraq qalır; yalnız sintetik faydalı yük/çağırış sayı ölçmələri istifadəyə buraxılma sübutu sayılmır.

Çağıranlar əvvəlcədən sinxronlaşdırılmış mətnə malik olduqda, dəstəklənən video hissəsinə istəyə bağlı `transcript.cues` massivi əlavə edə bilərlər. Hər işarədə `text`, yoxlanılmış müddət daxilində sonlu `start`/`end` intervalı və icazə siyahısına daxil edilmiş `source` (`client`, `embedded` və ya `audio-bridge`) olmalıdır; `confidence` üçün standart dəyər `1`-dir və o, `0` ilə `1` arasında qalmalıdır. Tam eyni işarələr birləşdirilir. OmniRoute bu metadatadan heç vaxt transkripsiya başlatmır: doğrulanmış işarələr mənbə, əminlik və intervalla birlikdə təsvir edilən nəticəyə köçürülür və kadr təsvirləri ilə yanaşı etibarsız müşahidələr kimi göstərilir. Yanlış, diapazondan kənar və ya mənşəyi olmayan mətn təsvir axınına qarışdırılmaq əvəzinə rədd edilir. Hər iki sorğu gövdəsi transkript kanalı təqdim edilən mənşəyi, özünü `embedded` və ya `audio-bridge` kimi təqdim edən etiketlər də daxil olmaqla, `client` dəyərinə normallaşdırır. Yalnız serverə məxsus adapter həmin etibarlı etiketləri yalnız kod üçün nəzərdə tutulmuş `trustedSource` arqumenti vasitəsilə təyin edə bilər; sorğu JSON sahəsi həmin arqumentə çata bilməz. Transkript mətni mənşəyindən asılı olmayaraq etibarsız, mediadan əldə edilmiş məzmun olaraq qalır və heç vaxt avtorizasiyanı müəyyən etməməlidir.

Təkmil çağırıcı eyni video üçün `audioTranscript` treki təqdim edə bilər;
bu, server transkripsiyasının sübutu deyil, müştəri tərəfindən təqdim edilmiş mətn kimi qəbul edilir.
Birləşdirmə qovşağı vizual və audio müşahidələri vahid son müddət və
dayandırma siqnalı altında işlədir, onları ortaq zaman xəttində sıralayır, tam
dublikatları birləşdirir və yalnız bir tərəf uğurlu olduqda qismən nəticə
bildirir. Etibarsız `audioTranscript` bütün videonun uğursuz olmasına səbəb
olmaq əvəzinə həmin qismən nəticəyə çevrilir — vizual təsvir saxlanılır,
audio budaq isə sanitizasiya edilmiş xəta kodunu qeydə alır. Hər budaq üzrə
əlçatanlıq, qismənlik bayrağı və sanitizasiya edilmiş xəta kodları təsvir edilmiş
nəticədə, qoruyucu mexanizm metadatasında (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), nəticə keşinin metadatasında və körpünün
birləşdirmə sayğaclarında qorunur. Defolt Video Bridge yolu nitqdən-mətnə
çevirməni işə salmır və medianın ikinci nüsxəsini endirmir; həmin trek açıq
şəkildə təqdim edilmədikdə, yalnız video rejimində qalır.

**Transkriptin saxlanması (#12150 P1).** Bu, Video Bridge (özü seçimlə aktivləşdirilir)
transkript işarəsini göstərdiyi zaman avtomatik tətbiq olunur — ayrıca
saxlama bayrağı yoxdur. Sorğu hər hansı transkript işarəsini (çağırıcı tərəfindən
elan edilmiş `transcript` və ya birləşdirilmiş `audioTranscript`) göstərdikdə,
qoruyucu mexanizm onu `videoBridgeObserved` kimi işarələyir və video təsvirinin
redaktə edilmiş kölgəsini yaradır — hər bir işarənin sərbəst mətn gövdəsinin
`[redacted-video-transcript]` ilə əvəz edildiyi eyni render. Bu kölgə sətir
yığılmazdan əvvəl strukturlaşdırılmış işarə sahəsinin əvəzlənməsi ilə qurulur
(yastılanmış mətn heç vaxt təhlil edilmir, buna görə də heç bir işarə məzmunu —
istər zərərli, istərsə də adi, o cümlədən `[inaudible]`/`[music]` kimi `]`
simvolu olan gövdələr — qala bilməz). Saxlanılan çağırış jurnalının sorğu gövdəsi,
məzmun bərabərliyi üzrə uyğunlaşdırılmaqla, videodan əldə edilən hər mətn hissəsini
həmin redaktə edilmiş kölgə ilə əvəz edir; `fullText` lövbəri tamamlanmış
çağırışöncəsi qoruyucu mexanizm yükündən yenidən oxunur, buna görə də sonrakı
zəncir qoruyucu mexanizmləri (PII və giriş məlumatı maskalayıcıları, prioritetlər
10/95) təsvir mətnini yerində yenidən yazdıqdan və sistem sorğusu/təhvil/yaddaş
inyeksiyası mesaj massivinin formasını dəyişdirdikdən sonra belə uyğunlaşdırma
uğurlu olur. Modelə yuxarı axın üzrə göndərilən gövdə dəyişməz qalır. Müşahidə
edilmiş sorğu həmçinin heç bir davamlı Memory yaratmır (həm sorğudan, həm də
cavabdan əldə edilən çıxarış ötürülür), beləliklə modelin öz cavabı transkript
mətnini Memory daxilində təkrarlaya bilməz.

**Xam video sahələri (#12430).** Körpü aktiv olduqda və yerli video dəstəyi naməlum və ya mövcud olmadıqda, müəyyən edilmiş `transcript`/`audioTranscript` sahələri hətta təsvir uğursuzluğundan və ya `maxVideos` limitindən sonra da `videoBridgeObserved` funksiyasını aktivləşdirir. `null` və boş sətirlər nəzərə alınır; mövcud olmayan sahələr və videoya aid olmayan metadata nəzərə alınmır. Saxlanılan nüsxələr bu sahələri redaktə edir və ya sorğunu buraxır, keşlərdən/Memory-dən yan keçilir.

Bu ehtiyat yollarda etibarlı çağırıcı işarələri standart olmayan provayder
sahələri əvəzinə dəstəklənən `text`/`input_text` hissələrinə çevrilir. Sorğu ilə
təqdim edilmiş hər iki trek, videonun təsvir edilmədiyinə və zaman nişanlarının
media ilə müqayisədə yoxlanılmadığına dair açıq xəbərdarlıqla, etibar edilməyən
`client` müşahidələri olaraq qalır. Mövcud 256 işarə/64-KiB ümumi və hər işarə
üzrə büdcələr iki trekə birlikdə tətbiq olunur; zaman nişanları brokerin
600 saniyəlik yuxarı həddinə və təqdim edilmiş hər hansı fokus pəncərəsinə
uyğun olmalıdır. Etibarsız treklər ixtiyari mətn kimi ötürülmür, atılır; onların
birləşdirilmiş büdcəsi aşılmadığı halda etibarlı eyni səviyyəli trek yenə də
istifadə edilə bilər. Null/boş sahələr heç bir mətn əlavə etmir. Bu ehtiyat
mexanizmi heç bir media əldə etmə və ya transkripsiya əməliyyatı əlavə etmir.
Transkript genişləndirmə sahələri ehtiyat video daşıyıcısından və onun
`video_url`/`source` obyektlərindən silinir. OpenAI naqil protokolunun icazə
siyahısı sərt qalır; yerli dəstəyi naməlum olan video daşıyıcıları əlçatan
qalır və yalnız mətn dəstəkləyən məlum hədəflər təhlükəsiz markerləri saxlayır.
Strukturlaşdırılmış redaktə kölgələri əlavə edilmiş transkript mətnini qoruyur,
ilkin çağırıcıya məxsus sorğu isə dəyişməz qalır. Yerli dəstəyi olan hədəflər
və deaktiv edilmiş körpülər mövcud yan keçmə davranışını saxlayır.

Əlavə saxlanılan nüsxələr eyni müşahidə edilmiş sorğu siqnalından istifadə edir.
Qoruyucu mexanizmdən əvvəlki xam müştəri sorğusu anlıq görüntüsü, yaddaşdakı
gözləyən sorğu və erkən rədd edilmiş sorğu jurnalı video hissələrindəki
transkript sahələrini strukturlaşdırılmış şəkildə əvəz edir; konveyer mərhələləri
və kontekst təhvili tərəfindən sintez edilmiş sətir sorğuları saxlanılan sorğu
gövdəsinin qəbul nöqtəsində redaktə edilir. Saxlanılan `video_content_removed`
markeri `previous_response_id` davamının qəsdən atılmış mətni yenidən qurmaq
əvəzinə qapalı şəkildə uğursuz olmasını təmin edir. Müşahidə edilmiş sorğu
jurnallaşdırmadan əvvəl hər hissə üzrə redaktə kölgəsini itirərsə və ya bir neçə
video kölgəsindən hətta biri sonrakı sorğu dəyişikliklərindən sonra uyğun gəlməzsə,
qismən redaktə edilmiş transkripti saxlamaq əvəzinə saxlanılan sorğu gövdəsi
tamamilə buraxılır.

Müşahidə edilmiş sorğu üçün model cavabı strukturlaşdırılmış işarə sərhədi
olmadan transkriptin istənilən hissəsindən sitat gətirə bilər. Buna görə də onun
saxlanılan çağırış jurnalındakı `responseBody` sahəsi buraxılma markeri ilə
əvəz edilir; təfərrüatlı konveyer artefaktı (yuxarı axın/müştəri gövdələrini və
axın fraqmentlərini ehtiva edə bilər) saxlanılmır. Semantik, idempotentlik və
əsaslandırma təkrarı keşləri həmin sorğu üçün oxuma və yazma əməliyyatlarından
yan keçir. Provayder sorğusu və müştərinin gördüyü cavab dəyişməz qalır.
Təfərrüatlı artefakt buraxıldıqda erkən keepalive baytları müvəqqəti buferdən
boşaldılır. Kiro-nun səhv formatlı EventStream xəbərdarlığı heç vaxt məzmunu və
ya JSON təhlilçisinin xam xətasını deyil, yalnız faydalı yükün bayt sayını bildirir.
Bu, əlaqəsiz hər bir provayder/plaqin diaqnostikasının audit edildiyini iddia
etmir; saxlanılan qəbul nöqtələrinin daha geniş yoxlanışı #11658 daxilində izlənilir.

Daxili `/api/modality-bridge/video/drilldown` həyat dövrü ayrıca,
loopback/token autentifikasiyalı keş substratıdır. Hər əməliyyat üçün həmçinin
kanonik qeyri-şəffaf principal ID-si tələb olunur. İstehsal mühitindəki çağırıcı
aktivləşdirilməzdən əvvəl həmin ID-ni autentifikasiya edilmiş tenant əsasında
törətməli və müştəri tərəfindən seçilmiş dəyəri heç vaxt yönləndirməməlidir. Keş
açarları həmin principal-ı kanonik sessiya və video-istinad ID-ləri ilə bağlayır,
yalnız onların SHA-256 əsasında törədilmiş açarlarını saxlayır və həm oxuma, həm
də silmə əməliyyatlarını eyni principal ilə məhdudlaşdırır. Keş hər qeyd üçün ən
çoxu 16 törədilmiş JPEG kadrı saxlayır, onların müddətini on dəqiqədən sonra
bitirir və sərhədlənmiş `start`/`end` oxumalarını və ya sessiyanın açıq şəkildə
silinməsini dəstəkləyir.

Hər principal 16 qeyd və 64 MiB kanonik JPEG məlumatı ilə məhdudlaşdırılır. Bu
limitlər qlobal 64 qeyd/256 MiB həddindən asılı deyil: principal kvotasına təzyiq
olduqda qlobal LRU çıxarılması nəzərdən keçirilməzdən əvvəl yalnız həmin
principal-ın ən uzun müddət əvvəl istifadə edilmiş qeydləri çıxarılır. Keş
fəaliyyəti zamanı müddəti bitmiş qeydlər həm principal, həm də qlobal uçotdan
təmizlənir, ləğv və doğrulama xətası isə qismən əvəzləməni qeydə almır.

Keş qeyri-kanonik Base64-ü, artıq doldurmanı, JPEG olmayan medianı, səhv
formatlaşdırılmış və ya kəsilmiş JPEG-ləri, eləcə də sərhədlənmiş tam təsvirli
`sharp` dekodlaşdırması zamanı xəbərdarlıq yaradan JPEG-ləri rədd edir. O, qəbul
edilmiş hər təsviri kanonik JPEG kimi yenidən kodlaşdırır, çağırıcı sahələrinə
etibar etmək əvəzinə en və hündürlüyü dekodlaşdırılmış baytlardan əldə edir və
sondakı hər hansı poliqlot baytları saxlamaq əvəzinə atır. Hər iki kvotaya yalnız
sərhədlənmiş kanonik sıxılmış bufer aid edilir. JSON ötürmə limiti 32 MiB
dekodlaşdırılmış giriş həddi üçün Base64 əlavə yükünü ehtiva edir. Saxlanılan hər
törəmə özünün doğrulanmış JPEG formatını/rezolyusiyasını, nümunələmə siyasətini,
törəmə versiyasını, yaradılma vaxtını, server tərəfindən hesablanmış məzmun
heşini, həmçinin heşlənmiş ana istinadı və etibarlı çağırıcının ana məzmun heşini
qeydə alır. Atomik keş qeydindən əvvəl asinxron dekodlaşdırma/heşləmə mərhələləri
arasında ləğv vəziyyəti yoxlanılır.

Bu tranş hələ istehsal mühitindəki prodüseri marşruta qoşmur və çoxrezolyusiyalı
variant seçimini təmin etmir. Buna görə də şəffaf Video Bridge sorğu yolu əlavə
iş yükü yaratmır, tenant-a bağlı principal törədilməsi və tam FU-08
çoxrezolyusiyalı həyat dövrü isə tamamlanmış davranış kimi sənədləşdirilmək
əvəzinə açıq sonrakı iş olaraq qalır.

Kadrlar konfiqurasiya edilmiş Video modeli ilə ardıcıl şəkildə təsvir edilir.
Boş Video üstəlik təyini Vision parametrini miras alır; hər ikisi boş olarsa,
Vision avtomatik marşrutlayıcısı effektiv görmə qabiliyyətli modeli seçir.
Uğurlu təsvirlər orijinal hissəni sabit `[Video description:` prefiksli mətnlə
əvəz edir; bu prefiks həmçinin mətni etibar edilməyən, mediadan törədilmiş
müşahidə kimi işarələyir və sonrakı modellərə mediada tapılan təlimatlara əməl
etməməyi bildirir. Kadr təsviri keş açarlarına JPEG baytları, sorğu, zaman
damğası və effektiv model daxildir; yalnız uğurlu təsvirlər keşlənir. Keş
qeydləri, ehtiyat model də daxil olmaqla, faktiki uğurlu prodüser modelini
saxlayır; müxtəlif kadrlar müxtəlif modellər tərəfindən yaradıldıqda bridge
`mixed` bildirir. Keş uyğunluğu həmin prodüser kimliyini tələb olunan
marşrutlaşdırma planı kimi yenidən etiketləmək əvəzinə təkrar istifadə edir.
Bütöv video nəticəsi keşi çıxışı dəyişən hər bir giriş əsasında açarlanır —
sorğu, effektiv model, nümunələmə siyasəti, kadr sayı, semantik analiz rejimi,
normallaşdırılmış fokus ipucunun SHA-256 izi, fokus pəncərəsi, `transcript`,
`audioTranscript` və kontakt vərəqi bayrağı — buna görə də bu ölçülərdən hər
hansı birinin dəyişdirilməsi köhnə nəticənin təkrar istifadəsi deyil, keş
uyğunsuzluğudur. Vizual deduplikasiya siyasətinin versiyası, həddi və
sərhədlənmiş namizəd kadr sayı da nəticə keşi açarında və metadatada açıq şəkildə
göstərilir; buna görə də siyasət dəyişikliyi köhnəlmiş bütöv video təsvirini
təkrar istifadə edə bilməz. Nəticə keşinin v4 metadatası rejimi və izi saxlayır,
istifadəçinin xam tapşırığını isə heç vaxt saxlamır. Qoruyucu mexanizm
metadatası həm tələb olunan, həm də effektiv analiz rejimlərini bildirir;
istifadə edilə bilən istifadəçi mətni olmadan tələb edilən `focused` rejimi
effektiv olaraq `full` kimi bildirilir.

Qoruyucu mexanizm dəstəklənən bütün video hissələrini çıxarır, lakin
`modalityBridgeVideoMaxVideos` sayından çoxunu təsvir etmir.
`supportsVideo === false` olduğu sübut edilmiş hədəf üçün uğursuz və limiti aşan
videolar açıq təhlükəsiz mətn markerlərinə çevrilir ki, heç bir xam video
qalmasın. İmkan məlum olmadıqda, həmin hissələr video daşıyıcısını saxlayır; hər
hansı ehtiyat transkript yuxarıdakı sərhədlənmiş mətn çevrilməsinə uyğun gəlir.
`supportsVideo === true` olan hədəflər bridge-i yan keçir. Müştəri sorğusunun
ləğv siqnalı endirmə, broker növbəsi, alt proseslər və təsvir çağırışları boyunca
ötürülür; ləğvlər videolar arasında emalı dayandırır və heç vaxt xam mediaya
keçməklə açıq rejimdə uğursuz olmur.

İcra mühiti parametrləri verilənlər bazasında saxlanılır və Zod ilə doğrulanır:

| Açar                                | Standart    | Aralıq / davranış                                                                                                     |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | İstəyə bağlı icra mühiti, ayrıca aktivləşdirilir                                                                      |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ümumi təsvirləri qoruyur; `focused` məhdudlaşdırılmış, etibarsız ən son istifadəçi kontekstindən istifadə edir |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge modelini miras alır                                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` və ya proporsional `segment_aware`; detektor xətası zamanı `uniform` istifadə olunur         |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                        |

120 saniyədən yuxarı köhnə saxlanılmış Video vaxt aşımı dəyərləri brokerin son
müddətinə qədər məhdudlaşdırılır; bu həddən yuxarı yeni parametr yazılışları rədd
edilir. `GET /api/modality-bridge/video/runtime` autentifikasiya və ya icra
mühitinin yoxlanılmasından əvvəl etibarlı şəkildə işarələnmiş lokal dövrə
yerləşməsi tələb edir, daha sonra isə idarəetmə autentifikasiyasını tələb edir.
O, yalnız `available`, təmizlənmiş FFmpeg/ffprobe versiyalarını və icra mühiti
əlçatan olmadıqda sabit səbəbi qaytarır. Daxili çıxarış son nöqtəsi açıq yükləmə
API-si deyil: növbənin dolması `503` və `Retry-After` qaytarır, zəng edənin
bağlantını kəsməsi `499`, brokerin sabit son müddəti isə `504` qaytarır.
Çevrilmiş cavablar Vision və ya Audio seqmentlərini silmədən mərkəzi
`x-omniroute-modality-bridge` başlığına
`video->text;model=<visionModel>;parts=<videos>` əlavə edir.

### PII Maskalayıcısı (`piiMasker.ts`)

**Hər iki** mərhələdə işləyir.

- **`preCall`** faydalı yükü klonlayır, `system`, `messages`, `input` və
  `prompt` sahələrini (sadə sətir elementləri daxil olmaqla) gəzir və sətir tipli
  `content`/`text` sahələrinə `processPII()` (`@/shared/utils/inputSanitizer`
  modulundan) tətbiq edir. `PII_REDACTION_ENABLED=true` olduqda aşkarlanan PII
  çıxış faydalı yükündə redaktə edilir. Bu, yalnız prompt inyeksiyası siyasətini
  idarə edən `INPUT_SANITIZER_MODE` parametrindən asılı deyil. Redaktə
  deaktiv olduqda çağırış məzmunu yenidən yazmadan aşkarlama saylarını qeydə alır.
- **`postCall`** cavabın dərin klonunu yaradır, `sanitizePIIResponse()` və
  Responses API formasının maskalayıcısını (`maskResponsesOutput` —
  `output_text` və `output[].content[].text` sahələrini əhatə edir) işə salır.
  Hər hansı redaktə baş verərsə, dəyişdirilmiş cavab orijinalı əvəz edir.

Qoruyucu mexanizm heç vaxt bloklamır; o, yalnız annotasiya edir
(`meta.detections`, `meta.redacted`) və ya yenidən yazır.

### Prompt İnyeksiyası (`promptInjection.ts`)

İstifadəçi tərəfindən təqdim edilən məzmunda rəqib xarakterli strukturları
aşkarlayır və konfiqurasiya edilmiş siyasəti tətbiq edir. Davranış mühit
dəyişənləri və konstruktor seçimləri ilə idarə olunur:

| Parametr       | Mühit dəyişəni                                                                                         | Standart | Təsir                                                                                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktivdir       | `INPUT_SANITIZER_ENABLED`                                                                              | `true`   | `false` olduqda qoruyucu mexanizm əməliyyatı dərhal dayandırır.                                                                                                                                                  |
| Rejim          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`   | İnyeksiya siyasəti: `block`, `warn` və ya `log`. (`redact` geriyə uyğunluq üçün qəbul edilir, lakin inyeksiya mətnini **silməz**; sorğudakı PII-nin yenidən yazılması `PII_REDACTION_ENABLED` ilə idarə olunur.) |
| Bloklama həddi | `blockThreshold` seçimi / `INPUT_SANITIZER_BLOCK_THRESHOLD` (`INJECTION_GUARD_BLOCK_THRESHOLD` aliası) | `high`   | Bloklama üçün tələb olunan minimum ciddilik səviyyəsi. Standart halda orta səviyyə yalnız müşahidə olunur.                                                                                                       |

**Rejim üstünlüyü** (`getMode`): çağıranın `options.mode` seçimi →
`INJECTION_GUARD_MODE` üçün **DB funksiya bayrağı əvəzetməsi** (İdarə paneli →
Parametrlər → Funksiya bayraqları) → `INJECTION_GUARD_MODE` mühit dəyişəni →
`INPUT_SANITIZER_MODE` mühit dəyişəni → `warn`. Beləliklə, idarə panelindəki
əvəzetmə mühit dəyişənlərindən üstün olur və Funksiya bayraqları interfeysi
işləyən qoruyucunu canlı olaraq idarə edir (yenidən başlatma tələb olunmur). DB
oxunuşu nasazlığa davamlıdır: xəta baş verərsə, qoruyucu mühit dəyişənlərinə
əsaslanan davranışa qayıdır; heç bir əvəzetmə təyin edilmədikdə davranış yalnız
mühit dəyişənləri ilə müəyyən edilən həllə tam eynidir.

Aşkarlama mənbələri:

1. `@/shared/utils/inputSanitizer` modulundan `sanitizeRequest()` (konveyerin
   digər hissələrində də istifadə olunan ortaq detektor dəsti).
2. Daxili `DEFAULT_GUARD_PATTERNS` (hazırda `system_override_inline` və
   `markdown_system_block`; hər ikisinin ciddilik səviyyəsi `high`-dır).
3. Konstruktor seçimləri vasitəsilə ötürülən istəyə bağlı `customPatterns`
   (sətirlər, müntəzəm ifadələr və ya `{ name, pattern, severity }` qeydləri).

`mode === "block"` olduqda **və** ən azı bir aşkarlama ciddilik
həddinə çatdıqda, `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }` qaytarır. `warn`/`log` rejimlərində qoruyucu mexanizm hadisəni jurnala yazır, lakin
çağırışa icazə verir. Paylaşılan `evaluatePromptInjection()` köməkçi funksiyası reyestrdən istifadə etmədən sorğuları qiymətləndirməli olan
çağıran tərəflər üçün də ixrac edilir.

**Skan limiti (v3.8.20):** detektor birləşdirilmiş sorğu mətninin yalnız **ilk 16 KB** hissəsini
yoxlayır — `src/shared/utils/inputSanitizer.ts` faylında
`MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt). Həm `detectInjection()`, həm də
`evaluatePromptInjection()` nümunələr üzrə dövrü icra etməzdən əvvəl `slice(0, MAX_INJECTION_SCAN_BYTES)`
tətbiq edir. İnjeksiya direktivləri girişin əvvəlinə yaxın yerləşdiyindən, bu,
aşkarlamanı zəiflətmədən yüzlərlə KB həcmindəki faydalı yüklərdə regex CPU/GC istifadəsini
məhdudlaşdırır (bax: #3932, #4041).

### Etimadnamə Maskalayıcısı (`credentialMasker.ts`)

**Hər iki** mərhələdə, standart zəncirin sonunda (prioritet `95`) işləyir. Geniş tanınan
API açarı / məxfi token nümunələrini gedən faydalı yükdən (mesaj
məzmunu, alət çağırışı arqumentləri, alət nəticələri) **və** provayder cavabından redaktə edir ki,
sorğuya yapışdırılmış (və ya alət nəticəsində geri qaytarılmış) etimadnamə yuxarı axındakı
provayderə və ya geriyə, müştəriyə sızmasın.

- **Yalnız seçimlə aktivləşdirilir**, PII redaktəsi ilə eyni qaydada (Sərt Qayda #20-yə yaxın):
  `settings.credentialRedactionEnabled === true` **və ya**
  `CREDENTIAL_REDACTION_ENABLED=true` olmadıqda deaktivdir. Söndürüldükdə qoruyucu mexanizm heç bir əməliyyat etmir —
  heç vaxt bloklamır və heç nəyi yenidən yazmır.
- `redactCredentials()` bütün faydalı yük/cavab ağacını gəzir (`walkValue()`,
  prototip çirklənməsinə qarşı təhlükəsizdir, `WeakSet` vasitəsilə dövrlərə qarşı təhlükəsizdir) və uyğunluqları
  `[REDACTED:<type>]` yer tutucusu ilə əvəz edir, yalnız faktiki olaraq
  dəyişmiş budaqları klonlayır.
- `CREDENTIAL_PATTERNS` LLM provayder açarlarını (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenlərini (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ödəniş açarlarını (Stripe, Square), bulud
  açarlarını (AWS giriş açarı, Twilio, SendGrid, Mailgun), şəxsi açarları / JWT-ləri,
  etimadnamə daşıyan bağlantı sətirlərini (`mongodb://user:pass@...` və s.) və
  ümumi `Authorization`/`x-api-key`/`api-key`/`apikey` başlıq-dəyər
  nümunəsini əhatə edir. Başlıq formasındakı açarlar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) ümumi mətn regex-i vasitəsilə deyil, struktur olaraq redaktə edilir (yalnız dəyər,
  `Bearer `/`Basic ` kimi sxem prefiksi qorunur).
- Qoruyucu mexanizm heç vaxt bloklamır; o, yalnız yenidən yazır (`modifiedPayload` /
  `modifiedResponse`) və annotasiya əlavə edir (`meta.credentialsRedacted`, `meta.count`).

Reqressiyadan qorunma: `tests/unit/credential-masker-guardrail.test.ts`.

## Əsas müqavilə (`base.ts`)

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
  block?: boolean; // true zənciri dərhal dayandırır
  message?: string; // bloklama zamanı göstərilir
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // sorğunu yenidən yazmaq üçün preCall tərəfindən qaytarılır
  modifiedResponse?: TValue; // cavabı yenidən yazmaq üçün postCall tərəfindən qaytarılır
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

Qoruyucu mexanizm `void`, `{}` və ya `{ block: false }` qaytarmaqla "dəyişiklik yoxdur"
siqnalını verir. `modifiedPayload`/`modifiedResponse` qaytarılması zəncir boyunca
sonrakı qoruyucu mexanizmlərə ötürülən dəyəri əvəz edir.
`signal?: AbortSignal` çağıranın həyat dövrünü qoruyucu mexanizmlərə ötürür. Sorğunun ləğv edilməsi qəsdən tətbiq olunan fail-open istisnasıdır: media körpüləri işi dayandırır və təmizləmə aparır, lakin emal edilməmiş medianı onu dəstəkləmədiyi məlum olan hədəfə bərpa etmir.

## Reyestr (`registry.ts`)

Tək nümunəli `guardrailRegistry` aşağıdakıları təqdim edir:

- `register(guardrail)` — qoruyucu mexanizm əlavə edir (və ya normallaşdırılmış ada görə əvəz edir) və
  artan `priority` sırasına görə yenidən çeşidləyir.
- `clear()` / `list()` — inzibati köməkçi funksiyalar.
- `runPreCallHooks(payload, context)` — aktiv qoruyucu mexanizmlər üzrə iterasiya edir, payload-u
  `modifiedPayload` vasitəsilə zəncir boyunca ötürür və ilk `block: true` halında dayanır.
- `runPostCallHooks(response, context)` — cavab tərəfində eyni axını icra edir.
- `resetGuardrailsForTests({ registerDefaults })` — vəziyyəti təmizləyir və təmiz test izolyasiyası üçün istəyə bağlı olaraq
  standartları yenidən qeydiyyatdan keçirir.

Hər iki icra mexanizmi `{ blocked, payload|response, results, guardrail?, message? }`
qaytarır; burada `results` hər qoruyucu mexanizm üzrə
`blocked`, `skipped`, `modified`, `error` və `meta` sahələrini ehtiva edən
`GuardrailExecutionResult` qeydləri massividir və izləmə üçün faydalıdır.

### Hər sorğu üzrə qoruyucu mexanizmlərin deaktiv edilməsi

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` cari sorğu üçün
ötürülməli olan qoruyucu mexanizm adlarının təkrarlanmayan siyahısını toplayır.
Mənbələr (hamısı istəyə bağlıdır və hamısı birləşdirilir):

- `apiKeyInfo.disabledGuardrails`
- Sorğunun gövdəsində `disabledGuardrails` (yuxarı səviyyə)
- Sorğunun gövdəsində `metadata.disabledGuardrails`
- `x-omniroute-disabled-guardrails` başlığı (və ya köhnə
  `x-disabled-guardrails`)

Dəyərlər sətirlər massivləri və ya vergüllə ayrılmış sətir ola bilər; adlar
kiçik hərflərlə kebab-case formatına normallaşdırılır (`pii_masker` → `pii-masker`). Nəticə
`context.disabledGuardrails` vasitəsilə reyestrə ötürülür və reyestr uyğun gələn
qoruyucu mexanizmləri ötürür (`results` daxilində `skipped: true`).

## İcra ardıcıllığı

`src/sse/handlers/chat.ts` və `open-sse/handlers/chatCore.ts` vasitəsilə keçən hər bir sorğu üçün:

1. `resolveDisabledGuardrails(...)` API açarı, sorğu gövdəsi və başlıqlar əsasında ötürüləcək qoruyucu mexanizmlərin siyahısını yaradır.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` qoruyucu mexanizmləri artan prioritet sırası ilə işə salır:
   - Deaktiv edilmiş qoruyucu mexanizmlər `skipped` kimi qeydə alınır.
   - Hər qoruyucu mexanizmin `preCall` funksiyası `modifiedPayload` vasitəsilə faydalı yükü yenidən yaza bilər.
   - İlk `block: true` zənciri qısa qapayır və emalçı qoruyucu mexanizm tərəfindən rədd cavabı qaytarır.
3. Dəyişdirilmiş ola bilən faydalı yük kombinə edilmiş marşrutlaşdırmaya və yuxarı axına göndərilməyə ötürülür.
4. Cavab formalaşdırıldıqdan sonra `guardrailRegistry.runPostCallHooks(...)` cavab üzərində eyni zənciri işə salır. Buradakı `block: true` yuxarı axın cavabını ləğv edir.

İstisna atan qoruyucu mexanizmlər `error: <message>` ilə qeydə alınır və `logger.warn` vasitəsilə jurnala yazılır, lakin zəncir davam edir — bu, dizayn etibarilə nasazlıq zamanı icazəvermə yanaşmasıdır.

## Konfiqurasiya

Daxili qoruyucu mexanizmlərin oxuduğu mühit dəyişənləri:

| Dəyişən                               | İstifadə edən             | Təsir                                                                                                         |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Aşkarlamanı tamamilə deaktiv etmək üçün `false` təyin edin.                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | İnjeksiya siyasəti: `warn`, `block` və ya `log`. Köhnə `redact` dəyəri injeksiya mətnini yenidən yazmır.      |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | İnjeksiya qoruyucusunun rejimi; həmçinin mühit dəyişənlərini **üstələyən** DB funksiya bayrağıdır (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block` tərəfindən rədd edilən minimum ciddilik səviyyəsi: `high` (standart), `medium` və ya `low`.      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | `INPUT_SANITIZER_BLOCK_THRESHOLD` üçün köhnə alternativ ad.                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` olduqda sorğudakı PII redaktə edilir (injeksiya rejimindən asılı olmayaraq).                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (aşağı axın) | Cavab tərəfindəki maskalayıcının davranışını idarə edir.                                                      |

Modality Bridge qoruyucu mexanizmləri mühit dəyişənlərindən deyil, DB dəstəkli parametrlər anbarındakı icra vaxtı konfiqurasiyasını (`getSettings()`) oxuyur. Vision üçün əsas açarlar bunlardır:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` və
`modalityBridgeCacheMaxEntries`. Köhnə
`visionBridge*` açarları yalnız sənədləşdirilmiş bir dövrlük oxuma ehtiyat variantı kimi qəbul edilir; idarəetmə panelindəki yazma əməliyyatları əsas açarlardan istifadə edir. Standart dəyərlər və ehtiyat həll mexanizmi `src/shared/constants/modalityBridgeDefaults.ts` daxilindədir, köhnə sabitlər isə `src/shared/constants/visionBridgeDefaults.ts` daxilində saxlanılır.

Audio `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` və `modalityBridgeAudioMaxClips`, həmçinin ortaq
`modalityBridgeCache*` parametrlərindən istifadə edir. Bu açarlar Modality Bridge sxemi ilə təqdim edildiyinə görə Audio üçün köhnə açarlara ehtiyat keçid yoxdur.

Video `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` və
`modalityBridgeVideoTimeout`, həmçinin ortaq `modalityBridgeCache*` parametrlərindən istifadə edir.
FFmpeg/ffprobe istəyə bağlı əməliyyat asılılıqları olduğuna, kadrların təsvir edilməsi isə gecikmə və model xərci yaratdığına görə bu funksiya standart olaraq deaktivdir.

## Fərdi qoruyucu mexanizmlər

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

Addımlar:

1. `BaseGuardrail` sinfini genişləndirən `src/lib/guardrails/myGuardrail.ts` faylını yaradın.
2. `preCall` və/və ya `postCall` metodunu reallaşdırın.
3. Ya import zamanı qeydiyyatdan keçirin (`registerDefaultGuardrails` daxilindən əlavə edin), ya da
   icra zamanı `guardrailRegistry.register(...)` çağırın — reyestr eyni normallaşdırılmış ada
   malik əvvəlki qoruyucu mexanizmi əvəz edir.
4. Testləri `tests/unit/` altında əlavə edin (mövcud nümunələr:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testləmə

Məlum vəziyyətdən başlamaq üçün testlər arasında `resetGuardrailsForTests()` istifadə edin.
Boş reyestrlə başlamaq və yalnız test edilən qoruyucu mexanizmləri qeydiyyatdan keçirmək
üçün `{ registerDefaults: false }` ötürün. Vision Bridge asılılıqların yeridilməsini
(`deps.getSettings`, `deps.callVisionModel`) qəbul edir; Audio Bridge isə parametrlər,
imkanlar, STT modelinin seçimi, giriş məlumatlarının yoxlanılması və transkripsiya üçün
ekvivalent müdaxilə nöqtələri təqdim edir. Buna görə də testlər hər iki axını DB və ya
şəbəkə çıxışı olmadan sınaqdan keçirə bilər.

## Həmçinin baxın

- `src/lib/guardrails/` — reallaşdırma
- `src/shared/utils/inputSanitizer.ts` — prompt inyeksiyasını və PII maskalanmasını
  təmin edən ortaq detektor
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge standartları və
  məcburi körpü model siyahısı
- `src/shared/constants/modalityBridgeDefaults.ts` — ortaq Vision/Audio icra mühiti standartları
- `docs/architecture/RESILIENCE_GUIDE.md` — ortoqonal qat (dövrə kəsicisi, gözləmə müddətləri)
- `docs/reference/ENVIRONMENT.md` — mühit dəyişənlərinin tam arayışı

## İnyeksiya qoruyucusunun marşrut əhatəsi və red-team (Mərhələ 8 · Blok D)

İnyeksiya qoruyucusu (`createInjectionGuard` / `withInjectionGuard`) istifadəçi promptlarını
qəbul edən bütün marşrutları əhatə edir. O, `INJECTION_GUARD_MODE` parametrinə riayət edir
(standart `warn` = yalnız jurnala yazır; `block` = HTTP 400 `SECURITY_001` qaytarır).

| Növ           | Marşrutlar                                                                                                                                           | Standart rejim |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Mətn (mövcud) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativ     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Məlumat       | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Mətnin çıxarılması (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` sahələrini əhatə edir.

**Red-team (gecəlik, `nightly-llm-security.yml`):** promptfoo hər bir marşrutun
`INJECTION_GUARD_MODE=block` rejimində OWASP-LLM korpusunu blokladığını yoxlayır; garak
sınaqları işə salır (gizli açar olmadıqda ötürür). `moderations` ardıcıllıq naminə daxil
edilib — `block` rejimindəki operatorlar onu `resolveDisabledGuardrails` vasitəsilə istisna
edə bilərlər.

Gecəlik iş axınının (`.github/workflows/nightly-llm-security.yml`, cron + əl ilə
işə salma) iki tapşırığı var:

- **`promptfoo-guard` (bloklayıcı)** — `INJECTION_GUARD_MODE=block` ilə
  `promptfoo eval -c promptfooconfig.yaml` əmrini işlədir. Hər bir rəqib ssenari
  (məsələn, "əvvəlki bütün təlimatlara məhəl qoyma…", DAN üslublu jailbreak-lər)
  cavabın `error.code === "SECURITY_001"` daşıdığını, yəni qoruyucunun sorğunu
  həqiqətən rədd etdiyini təsdiqləyir.
- **`garak` (məşvərətçi)** — yerli OmniRoute instansiyasına
  (`http://localhost:20128/v1`) qarşı garak-ı `--probes promptinject,dan,leakreplay`
  ilə işə salır. Provayderin gizli açarından (`PROMPTFOO_PROVIDER_KEY`) asılıdır;
  açar olmadıqda problemsiz ötürülür və sonuna `|| true` əlavə edilib, buna görə
  CI prosesini uğursuz etmədən hesabat verir.

Qoruyucu köməkçi funksiyanın (`createInjectionGuard` / `withInjectionGuard`) əhatəsi
prompt daşıyan hər bir `/v1` marşrutunu əhatə edir; prompt mətni
`src/shared/utils/inputSanitizer.ts` daxilindəki `extractMessageContents()` tərəfindən
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` sahələrindən
götürülür.
