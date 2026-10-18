# Guardrails (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Doğruluk kaynağı:** `src/lib/guardrails/`
> **Son güncelleme:** 2026-08-29 — v3.8.51 (Video Köprüsü transkript kaynağı arayan tarafından beyan edilir,
> henüz sunucu tarafından doğrulanmadı — #11661 uyarınca açıklığa kavuşturuldu)

Guardrail'ler, OmniRoute ile yukarı akış sağlayıcıları arasındaki sınırda güvenliği, politikayı ve içerik dönüşümlerini zorunlu kılar. Her guardrail, istek yüklerini (`preCall`) ve yukarı akış yanıtlarını (`postCall`) inceleyebilir (ve isteğe bağlı olarak reddedebilir, dönüştürebilir veya açıklama ekleyebilir).

Sistem **açıkta başarısız olur**: bir guardrail yürütülürken bir hata fırlatırsa, kayıt defteri hatayı kaydeder ve isteği başarısız kılmak yerine bir sonraki guardrail ile devam eder. Engelleme açık bir karardır (`block: true`), asla bir kaza değildir.

## Yerleşik Koruma Mekanizmaları

Kayıt defteri, içe aktarma sırasında altı koruma mekanizmasını öncelik sırasına göre otomatik olarak yükler
(bkz. `registry.ts` → `registerDefaultGuardrails()`):

| Öncelik | Ad                  | Aşama(lar)     | Dosya                 |
| ------- | ------------------- | -------------- | --------------------- |
| `5`     | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`     | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`     | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`    | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`    | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`    | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Daha düşük öncelik numaraları **önce** çalışır.

### Görüntü Köprüsü (`visionBridge.ts`) — Modalite Köprüsü PR-1

**Görüntü desteklemeyen modellere** yönelik, görüntü içeren istekleri yakalar ve
ya isteğin tamamını görüntü özellikli bir modele yeniden yönlendirir ya da
yukarı akış çağrısından önce görüntü bölümlerini, yapılandırılabilir bir görüntü
modeli tarafından üretilen metin açıklamalarıyla değiştirir. Bu, yalnızca metin
destekleyen sağlayıcıların çok modlu yükleri şeffaf biçimde işlemesini sağlar.

Akış:

1. Hedef model zaten görüntüyü destekliyorsa atla (`isVisionBridgeForcedModel`
   zorunlu köprü listesindeyse atlanmaz).
2. Görüntü bölümlerini `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) aracılığıyla ayıkla; bu işlev, combo uyumluluk
   filtresiyle paylaşılan tek doğruluk kaynağı olan
   `open-sse/utils/mediaParts.ts` içindeki **birleşik medya algılayıcısı**
   `detectMediaParts()` işlevine devreder. Ayıklama, `replaceImageParts`
   işlevinin yeniden yerine ekleyebileceği biçimlerin üst düzey bölümleriyle
   sınırlandırılmıştır (ayıklama↔değiştirme sözleşmesi): OpenAI `image_url`,
   Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` ve Responses API `input_image`. İç içe geçmiş eşleşmeler
   ve yalnızca gösterge niteliğindeki biçimler combo filtresinin kapsamındadır
   ve hiçbir zaman ayıklanmaz. Hiçbiri bulunamazsa atla.
3. Çalışma zamanı yapılandırmasını `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) aracılığıyla çözümle:
   yeni `modalityBridge*` ayar anahtarları önceliklidir; eski `visionBridge*`
   anahtarları **bir döngülük geri dönüş seçeneği** (geri alma penceresi)
   olarak kalır. Köprü devre dışıysa herhangi bir medya taraması yapmadan önce
   atla.
4. Mod seçici (`modalityBridgeVisionMode`, aşağıdaki tabloya bakın), yeniden
   yönlendirme ile açıklama arasında seçim yapar. Yeniden yönlendirme, yalnızca
   `model` değiştirilmiş şekilde `modifiedPayload` ve ayrıca
   `{ rerouted, fromModel, toModel, imagesKept }` meta verisini döndürür.
5. Açıklama yolu: görüntü sayısını `maxImages` ile sınırlandırır, göreve duyarlı
   istemi oluşturur, açıklama önbelleğine başvurur, görüntü modelini **paralel
   olarak** (`Promise.allSettled`) çağırır ve görüntülerin yerine
   `[Image N]: <description>` metin bölümlerini ekler. Başarısız bir açıklama
   `null` döndürür ve özgün görüntü bölümü **korunur** (#4012) — ancak tüm
   açıklamaların başarısız olduğu combo açıklama yolunda, görüntü desteği
   olmadığı doğrulanmış bir yukarı akışa bunun yerine
   `(unavailable — no vision-capable provider connected)` yer tutucusu
   gönderilir (#8430).
6. `modifiedPayload` ve meta veriyi (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) döndürür.

#### Mod seçici (`modalityBridgeVisionMode`)

| Mod        | Varsayılan | Davranış                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔          | Eski sezgisel yöntem değişmeden kalır (#6640/#7204): combo olmayan/`auto/` modeller, özgün modelin kullanılabilir kimlik bilgileri yoksa en iyi görüntü modeline yeniden yönlendirilir (varsa açıklama yapılır); combo hedefleri her zaman açıklama yapar.                                                                                 |
| `describe` |            | Her zaman açıklar — yeniden yönlendirme bloğu tamamen atlanır; her zaman kullanıcının seçtiği model yanıt verir.                                                                                                                                                                                                                           |
| `reroute`  |            | Yeniden yönlendirmeyi zorunlu kılar: kimlik bilgilerine sahip modeli koruma denetimi atlanır. Yeniden yönlendirme **hedefinin** kimlik bilgisi denetimi yine uygulanır — kullanılabilir bir görüntü hedefi yoksa istek açıklama yoluna geçer; böylece ham görüntüler hiçbir zaman yalnızca metin destekleyen bir arka uca ulaşmaz (#8430). |

Zorunlu modlar, otomatik sezgisel yöntem çalışmadan **önce** kısa devre yapar;
`auto` davranışı, PR-1 öncesi koruma mekanizmasıyla bayt düzeyinde aynıdır.

#### API anahtarı kapsamı (`visionBridgeKeyScope.ts`)

Çağıranın API anahtarı `allowedConnections`, kota havuzları
(`allowedQuotas`) veya modeller (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) üzerinde
kısıtlama uyguladığında köprü, yeniden yönlendirme ve açıklama modelleri için
yalnızca anahtarın kullanabileceği modelleri ve bağlantıları seçer. Ardından
açıklama çağrısı her zaman `x-omniroute-self-loop-key-id` başlığıyla OmniRoute
öz döngüsünden geçer; böylece çağrıyı alan sohbet isteği, söz konusu anahtarın
bağlantı ve model politikasını yeniden uygular. `enforceApiKeyPolicy()`, bu
başlığı yalnızca öz döngü bearer değeriyle birlikte dikkate alır; dolayısıyla
başlık yalnızca erişimi daraltabilir ve çözümlenemeyen bir kimlik reddedilir.

Anahtar için hiçbir görüntü modeline izin verilmiyorsa açıklama yolu devre dışı
kalır ve istek değiştirilmeden geçirilir; bu, devre dışı bırakılmış bir koruma
mekanizmasıyla aynı hata durumunda açık davranışıdır (meta
`{ skipped: true, reason: "no_permitted_vision_model" }`). Anahtarsız istekler
ve bu kısıtlamalara sahip olmayan anahtarlar tam olarak önceki gibi davranır.

#### Göreve duyarlı açıklama istemi (`modalityBridgeVisionTaskAware`)

Varsayılan **true** değeridir. `composeVisionPrompt()` (`visionBridgeHelpers.ts`), temel
açıklama istemine **son kullanıcı mesajının** metnini (500 karakterle sınırlandırılmış
olarak) ekleyerek açıklamayı kullanıcının gerçekten sorduğu şeye yönlendirir
(codex-vision-proxy kalıbı) ve görsel modelden görünür metni yazıya dökmesini ister.
Bayrak kapalıysa veya kullanıcı metni yoksa temel istem değiştirilmeden kullanılır.

Açıklama öz döngüsünün kendi OpenAI uyumlu isteği (`visionBridgeHelpers.ts`
içindeki `callVisionModelSingle()`), her zaman `image_url.detail: "high"` talep
eder — bu, her çağıran/sağlayıcı için koşulsuzdur ve herhangi bir istemci
sinyaline bağlı değildir. Düşük ayrıntılı örnekleme, tam olarak bu istemin talep
ettiği metin transkripsiyonu görevi için OCR doğruluğunu düşürdüğünden, açıklama
çağrısının kendisi, özgün gelen isteğin kullandığı ayrıntı düzeyinden bağımsız
olarak her zaman yüksek ayrıntı ister. Bu yalnızca dahili açıklama isteğinin
gövdesini etkiler; OmniRoute'un birincil istekte çağıranın kendi
`image_url.detail` değerini nasıl ilettiğini değiştirmez — bu varsayılan değer
ayrı olarak ve yalnızca algılanan OpenCode istemcileri için
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) içinde
uygulanır. Açıklama öz döngüsünün Anthropic kablo biçimi dalında `detail` alanı
yoktur ve iki varsayılan değerden de etkilenmez.

#### Açıklama çıktısı sınırı (`modalityBridgeVisionMaxChars`)

| Anahtar                        | Varsayılan | Aralık             |
| ------------------------------ | ---------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`        | `0` veya 100–50000 |

`0` (varsayılan), **sınır yok** anlamına gelir — `callVisionModel()` tarafından
döndürülen açıklama değiştirilmeden aktarılır ve mevcut davranış korunur.
100–50000 aralığındaki herhangi bir değer, açıklama
`[Image N]: <description>` olarak geri eklenmeden önce onu `…` son ekiyle
kısaltır (`src/lib/guardrails/visionBridge.ts` içindeki
`VisionBridgeGuardrail.preCall()`). Alt modelin tam transkripsiyona ihtiyaç
duyduğu, ayrıntı yoğun OCR görevleri için bu değeri yükseltin; fazla ayrıntılı
yanıt veren görsel modellerde token kullanımını sınırlamak için düşürün.
Kontrol paneli alanı, Vision sekmesinin Advanced panelinde yer alır
(`ModalityBridgeVisionTab.tsx` içindeki `modality-bridge-max-chars`) ve açıkça
belirtilen `0` değerine dokunmadan 1 ile 99 arasındaki herhangi bir değeri en
düşük sınır olan 100'e yükseltir — `0`, yalnızca "ayarlanmamış" varsayılanı
değil, kendi başına geçerli bir Zod değeridir
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`).

#### Açıklama önbelleği (`modalityBridge/bridgeCache.ts`)

Açıklama çıktıları için süreç genelinde paylaşılan bellek içi LRU + TTL
önbelleği. Anahtar = uzunluk önekli çerçevelemeyle
`sha256(imageRef + composedPrompt + configuredBridgeModel)` (alan sınırı
çakışması yoktur). Model bileşeni, gerçekten yanıt veren model değil,
**yapılandırılmış** köprü modelidir — `callVisionModel` dahili olarak yedek
modele geçebilir ve anahtarı her denemeye göre oluşturmak önbelleği parçalara
ayırır. Başarısız açıklamalar hiçbir zaman önbelleğe alınmaz. Ayarlar:

| Anahtar                         | Varsayılan | Aralık  |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### Uzak görsel normalleştirmesi (öz döngü açıklaması/base64 getirme)

Köprü bir **uzak** görseli kendisi getirdiğinde — hem Anthropic açıklama öz
çağrısı hem de claude kablo biçimi base64 dönüştürmesi
(`ensureBase64ImagesForClaudeWire`), ikisi de `visionBridgeHelpers.ts` içindeki
`fetchRemoteImageAsDataUri()` aracılığıyla — ortaya çıkan veri URI'si, görsel
model isteğine yerleştirilmeden önce `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) üzerinden geçirilir. Aşırı büyük görseller,
**2048px uzun kenara** küçültülür (OpenAI/Anthropic'in hâlihazırda sunucu
tarafında uyguladığı yeniden boyutlandırma sınırıyla eşleşir); bu, görsel
modelin gördüklerini değiştirmeden yükleme baytlarını/gecikmesini azaltır.
Yeniden boyutlandırma, dinamik içe aktarmayla yüklenen `sharp` kullanır: yerel
ikili dosyasının yüklenemediği bir platformda `normalizeDataUri()` **hiçbir
zaman hata fırlatmaz** — özgün baytları değiştirmeden aktarmaya geri döner;
böylece açıklama/base64 dönüştürme yolu her zaman çalışmayı sürdürür. Görsel
olmayan baytlar (kodu çözülebilir bir görsel döndürmeyen bir getirme işlemi) da
değiştirilmeden aktarılır. Bu normalleştirme, köprünün kendi öz çağrısı için
getirdiği görsellerle sınırlıdır — yalnızca açıkça etkinleştirildiğinde
değişiklik yapma ilkesiyle (Kesin Kural #20) tutarlı olarak çağıranın ham ve
doğrudan aktarılan yüküne hiçbir zaman uygulanmaz.

#### Ayar şeması + geçiş

Yeni `modalityBridge*` anahtarları, `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`) içinde Zod ile doğrulanır:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCache*` üçlüsü ve Audio Bridge tarafından kullanılan
`modalityBridgeAudio*` grubu. `141_modality_bridge_settings.sql` geçişi,
mevcut eski `visionBridge*` değerlerini eşleşen yeni anahtarlara kopyalar
(idempotenttir ve operatör tarafından ayarlanmış bir `modalityBridge*` değerinin
üzerine hiçbir zaman yazmaz); eski anahtarlar bir sürüm döngüsü boyunca okuma
için yedek olarak kabul edilmeye devam eder.

#### Şeffaflık üstbilgisi + istatistikler

Açıklamayla dönüştürülen yanıtlar
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
üstbilgisini taşır (`modalityBridge/bridgeStats.ts` içindeki
`buildModalityBridgeHeader()` tarafından oluşturulur ve
`src/sse/handlers/chatHelpers.ts` içindeki `withModalityBridgeHeader()`
tarafından eklenir). Yeniden yönlendirilen istekler **hiçbir** üstbilgi almaz —
yük değiştirilmemiştir ve model değişimi yanıt gövdesindeki `model` alanında
zaten görünürdür.

`GET /api/modality-bridge/stats` (`GET /api/settings` ile aynı seviyede yönetim
kimlik doğrulaması), `vision`, `audio` ve `video` için bellek içi modalite bazlı
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` sayaçlarını döndürür.
`averageLatencyMs`, payda olarak tüm denemeleri değil `latencySamples` değerini
kullanır; zamanlama bilgisi olmayan bir işlem, sıfır milisaniyelik sahte bir örnek
oluşturmaz. `bridged`, başarılı dönüşümler için geriye dönük uyumlu takma ad olarak
kalır; başarısız denemeler bu sayacı artırmaz.
Sayaçlar, tasarım gereği süreç yeniden başlatıldığında sıfırlanır
(muhasebe değil telemetri).

#### Pano yapılandırması

Özel pano sayfası
`/dashboard/settings/modality-bridge` adresindedir. URL üzerinden erişilebilen
`Vision`, `Audio` ve `Video` sekmeleri, `tab` değerini değiştirirken sorgu
parametrelerini korur. Vision sekmesi; etkinleştirme, mod, model seçimi (otomatik
varsayılan dâhil), göreve duyarlı istem oluşturma, gelişmiş zaman aşımı/görüntü/açıklama
uzunluğu/önbellek sınırları, çalışma zamanı
sayaçları ve korumalı bir örnek istek sunar. Audio sekmesi de aktiftir: etkinleştirme,
Auto seçeneğine sahip yalnızca STT modellerini içeren bir model seçici, zaman
aşımı/maksimum klip sınırları, ses sayaçları ve bir `input_audio` örnek testi
sunar. Video sekmesi işlevseldir: FFmpeg/ffprobe çalışma zamanı durumunu dört açık
UI durumundan biriyle bildirir (yoklama sürerken veya tamamlanamadığında `unknown`,
istemci tarafında yoklamanın atlandığı geri döngü olmayan bir pano ana makinesinde
`restricted`, yoklanıp eksik olduğu doğrulandığında `unavailable` ya da
FFmpeg/ffprobe sürümleriyle birlikte `available`); etkinleştirme/model/kare/video/zaman
aşımı sınırlarını kalıcı olarak saklar, model seçiciyi görüntü işleme yeteneğine
sahip modellerle sınırlar ve video sayaçlarını sunar.

AI ayarları altındaki eski Vision Bridge kartı artık yeni sayfaya yönlendiren bir
uyumluluk bağlantısıdır; formun ikinci bir kopyasını artık barındırmaz. Media
Providers da mevcut Speech-to-Text deneme alanını kaldırmadan Image-to-Text ve
Speech-to-Text iş akışlarını ilgili Modality Bridge sekmelerine bağlar.

**Kendi döngüsü için kabul atlaması:** Açıklama çağrısı OmniRoute'un kendi `/v1`
döngüsü üzerinden yönlendirildiğinde (standart olmayan sağlayıcı modeli), alt istek
`x-omniroute-admission-bypass: internal` gönderir ve çözümlenen kendi döngü kimlik
bilgisiyle doğrulanır — yerel modda yerel `sk_omniroute` işaretçisi ya da operatör
tarafından yapılandırılan `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` ortam anahtarı
(#1350); böylece `REQUIRE_API_KEY=true` dağıtımları da açıklama çağrısını
çalıştırabilir. Atlama yalnızca tam olarak bu kimlik bilgileri için kabul edilir;
dolayısıyla harici istemciler kabul işlemini atlamak için bu üstbilgiyi kullanamaz.

Eski varsayılanlar `src/shared/constants/visionBridgeDefaults.ts` dosyasında; yeni
mod/göreve duyarlı/önbellek varsayılanları ve ayar çözümleyicisi ise
`src/shared/constants/modalityBridgeDefaults.ts` dosyasında bulunur. Koruma
mekanizması, testlerin sahte `getSettings` ve `callVisionModel` uygulamalarını
enjekte edebilmesi için bir `deps` kurucu seçeneği sunar.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Ses girdisini kabul ettiği bilinmeyen bir hedefe ulaşmadan önce ses içeren sohbet
isteklerini yakalar. Sohbet isteğini hiçbir zaman yeniden yönlendirmez: ses
parçaları, mevcut OpenAI uyumlu çok parçalı uç nokta üzerinden metne dönüştürülür
ve seçilen sohbet modeli metin dökümleriyle devam eder.

Akış:

1. `supportsAudio` değerini `getResolvedModelCapabilities()` üzerinden çözümleyin.
   Açık sağlayıcı kayıt defteri meta verileri önceliklidir; ardından statik model
   meta verileri ve son olarak eşitlenmiş `modalities_input` gelir. `audio`
   içermeyen, bildirilmiş bir girdi listesi `false` değerindedir; hiçbir yetenek
   kanıtı yoksa değer `null` olarak kalır. Hem `false` hem de `null`, ihtiyatlı
   köprüyü etkinleştirirken `true` bunu atlar.
2. `modalityBridgeAudio*` ayarlarını çözümleyin ve paylaşılan `detectMediaParts()`
   algılayıcısı aracılığıyla her mesajdan eklenip çıkarılabilir üst düzey ses
   parçalarını ayıklayın. Desteklenen aktarım biçimleri OpenAI `input_audio`,
   `audio_url` ve `source.media_type: "audio/*"` biçimleridir. İç içe geçmiş ses,
   yönlendirme için algılanır ancak ekleme-çıkarma yolu tarafından kaldırılmaz.
   İş miktarı `modalityBridgeAudioMaxClips` ile sınırlandırılır; sonraki parçalar
   değiştirilmeden kalır.
3. Yapılandırılmış bir `provider/model` değerini kullanın veya
   `selectAudioBridgeModel()` işlevinin `AUDIO_TRANSCRIPTION_PROVIDERS` içinde
   kararlı katalog sırasına göre ilerleyerek kullanılabilir etkin sağlayıcı kimlik
   bilgisine sahip ilk modeli seçmesine izin verin.
4. `callAudioTranscription()`, base64/data-URI sesini çok parçalı bir `file`
   biçimine dönüştürür veya uzak bir `audio_url` kaynağını DNS sabitlemeli ve
   25 MB sınırına sahip, yalnızca genel erişime açık giden trafik koruması
   üzerinden indirir. Ardından dosyayı ve seçilen modeli, `resolveSelfLoopBearer()`
   ile kimliği doğrulanan yerel `/v1/audio/transcriptions` kendi döngüsüne POST
   eder. Mevcut transkripsiyon rotası normal kimlik bilgisi aramasını, bekleme
   süresi/hız sınırı işlemlerini ve sağlayıcıya gönderimi gerçekleştirir.
5. Başarılı çağrılar kendi parçalarını `[Audio N]: <transcript>` ile değiştirir.
   Çağrılar `Promise.allSettled` ile çalışır: tek bir çağrının başarısız olması,
   özgün ses parçasını korur (#4012 sözleşmesi). Tüm çağrılar başarısız olur ve
   hedefin `supportsAudio === false` olduğu kanıtlanırsa parçalar
   `[Audio N]: (unavailable — no STT provider connected)` olur (#8430 sözleşmesi).
   Bilinmeyen bir hedef (`null`) için tüm çağrıların başarısız olduğu sonuç
   değiştirilmeden kalır. Kullanılabilir STT kimlik bilgisi bulunmayan ve yalnızca
   metin desteklediği kanıtlanmış bir hedef, ağ çağrısı yapılmadan aynı açık yer
   tutucuyu alır.

Başarılı transkripsiyonlar, süreç genelindeki Modality Bridge LRU/TTL önbelleğini
kullanır. Anahtar; ses referansını, kararlı `audio-transcription` işlem etiketini
ve seçilen STT modelini birleştirir; başarısızlıklar hiçbir zaman önbelleğe alınmaz.
Ses denemeleri paylaşılan `bridged`, `cacheHits`, `failures` ve `lastUsedAt`
sayaçlarını günceller. Dönüştürülmüş yanıtlar
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` üstbilgisini
taşır; değiştirilmemiş istekler bir Audio Bridge segmenti almaz.

Çalışma zamanı ayarları veritabanı desteklidir ve Zod ile doğrulanır:

| Anahtar                       | Varsayılan | Aralık                    |
| ----------------------------- | ---------- | ------------------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —                         |
| `modalityBridgeAudioModel`    | `""`       | Otomatik veya STT kimliği |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000               |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10                      |

Paylaşılan önbellek; `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ve `modalityBridgeCacheMaxEntries` tarafından
denetlenmeye devam eder.

### Video Köprüsü (`videoBridge.ts`, `videoBridgePipeline.ts`)

Yerel video desteğine sahip olduğu bilinmeyen bir hedef çağrılmadan önce Chat
Completions `messages` ve Responses API `input` içindeki üst düzey video
bölümlerini yakalar. Desteklenen biçimler `input_video`, `video_url`,
`video_source`, HTTPS URL'leri ve `data:video/*;base64,...` veri URI'leridir.
Metin içindeki düz dosya adları video olarak değerlendirilmez.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`); istek üzerinde gezinme,
yetenek/politika denetimi, istek başına toplama ve yanıt yükünü yönetir. Video
başına yapılan işler — edinme, tam sonuç önbelleği, kare dizisini açıklama
(çağıranın bildirdiği herhangi bir ses transkriptini buna dahil eder) ve deneme
başına metrikler/iptal/temizleme — `videoBridgePipeline.ts` içindeki
`processVideoPart` arkasında gizlenmiştir ve `preCall` döngüsü içinde her video
bölümü için bir kez çağrılır. Bu modül ayrıca açık port sınırları olan
`VideoMediaBrokerPort` (baytları edinme ve örneklenmiş kareleri çıkarma),
`VideoAudioTranscriptionPort` (çağıranın bildirdiği ses transkriptini örneklenmiş
altyazılarla birleştirme) ve `VideoDrilldownPort`'u (kare ayrıntılandırma
kalıcılık sınırı; henüz `processVideoPart` içine bağlanmamıştır — günümüzde
ayrıntılandırma girdilerini yalnızca ayrı
`/api/modality-bridge/video/drilldown` rotası yazar) tanımlar.

Herkese açık `/v1` istek yolu hiçbir zaman bir alt süreci içe aktarmaz veya
çağırmaz. Uzak videolar 50 MiB sınırı altında indirilir; satır içi base64
videolar için, model/mesajlar/çerçeveleme zarfının 50 MiB olan herkese açık JSON
isteği kabul sınırı içinde kalabilmesi amacıyla video başına muhafazakâr bir
36 MiB kodu çözülmüş boyut sınırı uygulanır. Satır içi uzunluk ve kodu çözülmüş
boyut tahminleri bellek ayırmadan önce denetlenir. İlk uzak URL'de ve her
yönlendirmede HTTPS zorunludur ve DNS sabitlemeli mevcut yalnızca herkese açık
adreslere izin veren giden bağlantı koruması kullanılır. Ardından baytlar, tam
olarak dahili `POST /api/modality-bridge/video/extract` aracı sınırından geçer.
Bu rota hem `LOCAL_ONLY` hem de `SPAWN_CAPABLE` özelliğindedir; yalnızca süreç
başına kimliği doğrulanmış, güvenilir bir geri döngü isteğini kabul eder ve
hiçbir zaman URL, dosya sistemi yolu, çalıştırılabilir dosya veya bağımsız
değişken listesi kabul etmez. API gövde boyutu işlem hattı ve işleyicinin artımlı
gövde okuyucusu, aracı girdisi için 50 MiB sınırını birbirinden bağımsız olarak
uygular. Sınırlı kuyruğu aynı anda bir çıkarma işlemi çalıştırır, bekleyen dört
işe izin verir ve bekleyen girdiyi 100 MiB ile sınırlar.

Aracı içinde `ffprobe`, özel bir yerel dosyayı okur; sabit biçim izin listesi,
oynatma listesi ve bildirim biçimlerini hariç tutar. İzin verilen MOV ailesi
kapsayıcılarında harici MOV veri başvuruları varsayılan olarak devre dışı kalır
ve sabit komut bunları etkinleştirmez. Hem `ffprobe` hem de `ffmpeg`; yalnızca
`file` protokolü izin listesini, tek iş parçacığını ve sabit bağımsız değişken
dizilerini kullanır; kabuk kullanmaz ve çalıştırılabilir dosyaları `PATH`
üzerinden çözümler. Ekli resim niteliğindeki kapak akışları oynatılabilir adaylar
değildir. Tüm oynatılabilir akışlar sınırlara uymalıdır ve deterministik en düşük
indeksli geri dönüşten önce açıkça belirtilmiş varsayılan akış tercih edilir.
Videolar 600 saniye, boyut başına 8.192 piksel ve 33.554.432 kaynak piksel ile
sınırlandırılmıştır. FFmpeg, orta noktalardan 1–16 JPEG karesi örnekler, küçük
girdileri büyütmeden uzun kenarı en fazla 1.024 piksele küçültür ve hiçbir zaman
URL almaz. Örnekleme varsayılan olarak `uniform` şeklindedir. İsteğe bağlı
`scene_aware` ve deneysel `segment_aware` politikaları, önceden doğrulanmış yerel
akış üzerinde ek bir sabit FFmpeg geçişi gerçekleştirir, sınırlı `showinfo`
sahne zaman damgalarını seçer ve algılayıcı hatası, zaman aşımı, hatalı biçimli
çıktı veya boş aday kümesi durumunda deterministik olarak aynı tekdüzen orta
noktalara geri döner. Segment duyarlı mod, orta nokta örneklerini doğrulanmış
sahne aralıklarına orantılı olarak dağıtır; segment duyarlı kanıtlar ve geri
dönüş davranışı aşağıda ayrıntılı olarak açıklanmıştır. Kesin 16 kare sınırı,
her politikada seçimden sonra uygulanır. Sahne duyarlı bir isteğin yalnızca tek
karelik bütçesi olduğunda, etkin tam video veya odak penceresinin tekdüzen orta
noktasını kullanır ve `policyEffective: uniform` bildirir: seçilen tek bir sahne
karesi, zamansal aralığın her iki ucunu da koruyamaz. Çağıran isteğe bağlı olarak
sonlu bir odak penceresi (`start`/`end` saniye) sağlayabilir; sınırlar medya
süresine göre kısıtlanır, ters çevrilmiş veya sonlu olmayan pencereler reddedilir
ve tüm örnekleme politikaları yalnızca normalleştirilmiş aralık içinde
gerçekleştirilir. Ortaya çıkan pencere, örnekleme meta verilerine ve güvenilmeyen
açıklama önekine dahil edilir; böylece sonraki modeller odaklanmış bir kesiti tam
zaman çizelgesinden ayırt edebilir.

Anlamsal altyazı odağı ayrı ve açık bir ayardır. Varsayılan `full` analiz modu,
mevcut kare istemini korur ve istek metnini hiçbir zaman altyazı modeline
iletmez. `focused` modunda köprü, yalnızca aynı Chat veya Responses kapsayıcısı
içindeki kullanıcı tarafından yazılmış en son boş olmayan `text`/`input_text`
değerini okur, bunu NFC biçimine normalleştirir, kontrol karakterlerini ve beyaz
boşlukları daraltır ve 500 Unicode kod noktasıyla sınırlar. Boş bir sonuç, tam
olarak `full` istemine geri döner. Kullanılabilir bir ipucu, özel bir güvenilmeyen
kullanıcı bağlamı bloğunda JSON olarak serileştirilir ve yalnızca gözlemlenebilir
ayrıntılara öncelik verebilir; medyada görülen veya duyulan talimatları izlememe
yönündeki ayrı uyarıyı geçersiz kılamaz. Metinsel odak hiçbir zaman `start`/`end`
çıkarımı yapmaz veya zamansal örnekleyiciyi değiştirmez.

#### FU-07 yapısal segment kanıtı

`segment_aware`, önceden doğrulanmış yerel video akışı üzerinde sınırlandırılmış tek bir ön analiz geçişi kullanır. Sabit filtre zinciri önce genişliği en fazla 320 piksel olacak şekilde ölçekleme yapar, sahne değişikliklerini ve donmuş aralıkları algılar; ardından bulanıklık, ortalama luma ve uzamsal/zamansal bilgi için saniyede 1 kare örnekler. Geçiş; 600 yapısal örnekle, tek bir FFmpeg/filtre iş parçacığıyla, aynı yalnızca `file` protokolü ve kapsayıcı izin listeleriyle, 1 MiB işlem çıktısı sınırıyla ve aracının paylaşılan iptal/son tarih süresi içinde en fazla 30 saniyeyle sınırlandırılmıştır. İstekten hiçbir zaman komut, filtre, yol veya URL kabul etmez.

Yapısal değerler, semantik video anlayışı değil, deterministik örnekleme kanıtlarıdır. Özneler, eylemler, altyazılar, konuşma veya kullanıcı niyeti hakkında çıkarım yapmazlar. Sahne ve donma sınırları segmentleri oluşturur; donma kapsamı, bulanıklık, pozlama, uzamsal ayrıntı ve zamansal değişim yalnızca mevcut 1–16 karelik bütçenin nasıl tahsis edileceğini etkiler. Tamamen donmuş bir segment en fazla bir kareyle sınırlandırılırken donmamış segmentler kalan bütçe için yarışır. Sınırların sayısı karelerin sayısını aştığında, hızlı erken kesmelerin uzun bir son segmenti gizleyememesi için zaman çizelgesinin tekdüze kapsamı korunur. Bir donma sınırının 1 saniyelik analiz çözünürlüğü içinde kalan sahne sınırları birleştirilir.

Eksik filtreler, hatalı biçimlendirilmiş/boş kanıtlar, bir algılayıcı hatası veya sınırlandırılmış ön analiz zaman aşımı, tam tekdüze orta nokta politikasına açık şekilde geri döner. Arayan tarafın iptali veya aracı son tarihi açık şekilde geri dönmez: devam eden alt işlemi sonlandırır, sonraki kare çıkarma işlemlerini engeller ve özel geçici ağaç `finally` içinde kaldırılır.

`scripts/perf/video-bridge-fu07-eval.ts`; tekilleştirme sonrası altyazı çağrısı tasarrufları, yoğun hareket bütçesi tahsisi, bulanıklık/pozlama/SI-TI kanıtları, uzun kuyruklu hızlı kesmeler ve kademeli kararma kaynaklı yanlış pozitifler için deterministik, gerçek FFmpeg fikstürleri üretir. Ön analiz duvar saati süresini ve `/usr/bin/time` kullanılabildiğinde alt işlemin CPU kullanımını ve en yüksek RSS değerini kaydeder. Kalite kontrolleri yalnızca yapısal doğrulama ölçütleridir. Bu test düzeneğinin yetkili bir uç noktası veya dondurulmuş bir değerlendiricisi olmadığından, gerçek altyazı modeli kalitesi `HOLD` olarak kalır. `--caption-cost-per-call-usd` açıkça pozitif bir çağrı başı maliyet tahmini sağlamadığı sürece parasal tasarruflar da `HOLD` olarak kalır; betik iki sonucu da hiçbir zaman uydurmaz.

Her kare 4 MiB ile, tüm ham kareler birlikte 23 MiB ile ve serileştirilmiş aracı yanıtı 32 MiB ile sınırlandırılmıştır. Özel bir geçici dizin `finally` içinde kaldırılır. OmniRoute, FFmpeg'i paketlemez ve özel bir yürütülebilir dosya yolu kabul etmez. Köprü, altyazı oluşturmadan önce ölçülü bir görsel tekilleştirme geçişi uygular: her JPEG, 16×16 gri tonlamalı bir arabelleğe indirgenir ve yalnızca tutulan son kareyle karşılaştırılır. Bir kareden daha yüksek, istenen bir altyazı bütçesi için çıkarma işlemi, bu bütçenin en fazla iki katı olan ve hiçbir zaman 16 kareyi aşmayan sınırlandırılmış bir aday havuzu sağlar. İstenen üst sınır yalnızca tekilleştirmeden sonra uygulanır; bütçe en az iki olduğunda son inceltme sırasında seçilen ilk ve son adaylar korunur. Sürümlendirilmiş
`grayscale-16x16-mean-cells-v2` politikası, ortalama luma farkı ile normalleştirilmiş farkı en az 0.05 olan küçük resim hücrelerinin oranından büyük olanını kullanır. Yinelenen öğe eşiği, çalışma zamanı ayarı olarak sunulmak yerine öngörülebilirlik amacıyla seçilmiş 0.04 sabitidir. Bu ikincil yüksek kontrastlı sinyal, yalnızca ortalamaya dayalı bir karşılaştırmanın gizleyebileceği küçük hareketleri ve görünür metin değişikliklerini korur. Karşılaştırıcı veya kod çözücü hataları açık şekilde geri döner ve kapsamı korur. Çıktı meta verileri, çıkarılan adayları, başarıyla kullanılan kareleri ve elenen görsel yinelenen öğeleri birbirinden ayırır.

Açıkça işaretlenmiş bir video bölümü, zaman damgalı bir kontak sayfası isteyebilir. Köprü, en fazla 4 sütunlu ve 16 karelik bir JPEG ızgarası oluşturur. 512 piksellik her hücre, kaynak zaman damgasını yüksek kontrastlı bir alt banda işlerken aynı zaman damgaları, aşağı akış ilişkilendirmesi ve denetim için metinsel meta verilerde kalır. Tam JPEG, 32 MiB ile sınırlandırılmaya devam eder. `sharp` ızgaranın kodunu çözemez veya ızgarayı oluşturamazsa köprü ayrı JPEG karelerine geri döner; istemci iptali yine de sayfa işlemi boyunca yayılır.

Terfi kanıtı, sentetik birleştirme mikro karşılaştırmalı değerlendirmesinden bilinçli olarak ayrı tutulur. `scripts/perf/video-bridge-contact-sheet-eval.ts`, gerçek OpenAI uyumlu görsel modeller için şema sürümlü bir A/B test düzeneği tanımlar. Sağlayıcı tarafından bildirilen token'ları, uçtan uca duvar saati gecikmesini (sayfa oluşturma dahil), model çağrısı sayısını ve manifestoda tanımlanmış olgu korunumunu ölçer. Ham model yanıtları rapora yazılmaz; yalnızca SHA-256 özetleri ve eşleşen olgu kimlikleri saklanır. Test düzeneği, `--execute-real` iletilmediği ve `--model`, `OMNIROUTE_BASE_URL` ve `OMNIROUTE_API_KEY` yapılandırılmadığı sürece hiçbir ağ veya ücretli model çağrısı yapmaz. Bu açık gerçek çalıştırma olmadan, makine tarafından okunabilir kararı `HOLD` olarak kalır; yalnızca sentetik veri yükü/çağrı sayısı ölçümleri terfi kanıtı değildir.

Arayanlar, zaten hizalanmış metne sahip olduklarında desteklenen bir video bölümüne isteğe bağlı bir `transcript.cues` dizisi ekleyebilir. Her ipucu `text`, incelenen süre içinde sonlu bir `start`/`end` aralığı ve izin listesindeki bir `source` (`client`, `embedded` veya `audio-bridge`) içermelidir; `confidence` varsayılan olarak `1` değerini alır ve `0` ile `1` arasında kalmalıdır. Tam olarak yinelenen ipuçları birleştirilir. OmniRoute bu meta verilerden hiçbir zaman transkripsiyon başlatmaz: doğrulanmış ipuçları kaynak, güven düzeyi ve aralık bilgileriyle birlikte açıklanan sonuca kopyalanır ve kare altyazılarının yanında güvenilmeyen gözlemler olarak işlenir. Geçersiz, aralık dışı veya kaynağı belirtilmemiş metin, altyazı akışına karıştırılmak yerine reddedilir. Her iki istek gövdesi transkript kanalı da, kendiliğinden beyan edilen `embedded` veya `audio-bridge` etiketleri dahil olmak üzere sağlanan kaynak bilgisini `client` olarak normalleştirir. Bu güvenilir etiketleri, yalnızca sunucunun sahip olduğu bir bağdaştırıcı, yalnızca koddan erişilebilen `trustedSource` bağımsız değişkeni üzerinden atayabilir; bir istek JSON alanı bu bağımsız değişkene ulaşamaz. Transkript metni, kaynağından bağımsız olarak güvenilmeyen, medyadan türetilmiş içerik olmaya devam eder ve hiçbir zaman yetkilendirmeyi belirlememelidir.

İleri düzey bir çağıran, aynı video için bir `audioTranscript` izi sağlayabilir;
bu, sunucu transkripsiyonunun kanıtı olarak değil, istemci tarafından sağlanan metin olarak değerlendirilir.
Birleştirme katmanı, görsel ve sesli gözlemleri tek bir son tarih ve iptal sinyali
altında çalıştırır, bunları ortak bir zaman çizelgesinde sıralar, birebir aynı
kopyaları birleştirir ve yalnızca bir taraf başarılı olduğunda kısmi bir sonuç
bildirir. Geçersiz bir `audioTranscript`, videonun tamamının başarısız olmasına
neden olmak yerine bu kısmi sonuca indirgenir — görsel açıklama korunur ve ses
dalı temizlenmiş bir hata kodu kaydeder. Dal bazında kullanılabilirlik, kısmi
bayrağı ve temizlenmiş hata kodları; açıklanan sonuçta, koruma bariyeri meta
verilerinde (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), sonuç önbelleği meta verilerinde ve köprü
birleştirme sayaçlarında korunur. Varsayılan Video Bridge yolu, konuşmayı metne
dönüştürmeyi çağırmaz veya ikinci bir medya kopyası indirmez; bu açık iz
olmadan yalnızca video olarak kalır.

**Transkript saklama (#12150 P1).** Bu, Video Bridge (kendisi isteğe bağlıdır)
bir transkript ipucu oluşturduğunda otomatik olarak uygulanır — ayrı bir saklama
bayrağı yoktur. Bir istek herhangi bir transkript ipucu (çağıran tarafından
bildirilen bir `transcript` veya birleştirilmiş bir `audioTranscript`)
oluşturduğunda, koruma bariyeri bunu `videoBridgeObserved` olarak işaretler ve
video açıklamasının karartılmış bir gölge kopyasını üretir — her ipucunun serbest
metin gövdesinin `[redacted-video-transcript]` ile değiştirildiği birebir aynı
bir gösterimdir; bu gösterim, dize birleştirilmeden önce yapılandırılmış ipucu
alanı değiştirilerek oluşturulur (düzleştirilmiş metin hiçbir zaman ayrıştırılmaz;
dolayısıyla `]` içeren `[inaudible]`/`[music]` gibi gövdeler de dahil olmak üzere
kötü niyetli veya olağan hiçbir ipucu içeriği korunamaz). Kalıcı çağrı günlüğü
istek gövdesi, içerik eşitliğiyle eşleştirerek videodan türetilen her metin
parçasını bu karartılmış gölge kopyayla değiştirir; `fullText` bağlantı noktası,
tamamlanmış çağrı öncesi koruma bariyeri yükünden yeniden okunur, böylece sonraki
zincir koruma bariyerleri (10/95 önceliklerine sahip PII ve kimlik bilgisi
maskeleyicileri) açıklama metnini yerinde yeniden yazdıktan ve sistem
istemi/devir/bellek ekleme işlemleri ileti dizisini yeniden şekillendirdikten
sonra da eşleşme başarılı olur. Modele yukarı akışta gönderilen gövde değişmez.
Gözlemlenen bir istek ayrıca hiçbir kalıcı Memory doldurmaz (hem istekten hem de
yanıttan türetilen çıkarım atlanır); böylece modelin kendi yanıtı transkript
metnini Memory içine geri yansıtamaz.

**Ham video alanları (#12430).** Köprü etkinleştirildiğinde ve yerel video desteği bilinmediğinde veya bulunmadığında, tanımlı `transcript`/`audioTranscript` alanları, açıklama hatasından veya bir `maxVideos` sınırından sonra bile `videoBridgeObserved` durumunu etkinleştirir. `null` ve boş dizeler hesaba katılır; bulunmayan alanlar ve video dışı meta veriler hesaba katılmaz. Saklanan kopyalarda bu alanlar karartılır veya istek atlanır; önbellekler/Memory devre dışı bırakılır.

Bu geri dönüş yollarında geçerli çağıran ipuçları, standart dışı sağlayıcı
alanları yerine desteklenen `text`/`input_text` parçalarına dönüşür. İstekle
sağlanan her iki iz de, videonun açıklanmadığını ve zaman damgalarının medyaya
göre doğrulanmadığını açıkça belirten bir uyarıyla birlikte güvenilmeyen `client`
gözlemleri olarak kalır. Mevcut 256 ipucu/64 KiB toplam bütçesi ve ipucu başına
bütçeler, iki iz genelinde birlikte uygulanır; zaman damgaları aracının 600
saniyelik tavanına ve sağlanan herhangi bir odak penceresine uymalıdır. Geçersiz
izler atılır ve rastgele metin olarak iletilmez; birleşik bütçeleri aşılmadığı
sürece geçerli bir kardeş iz kullanılmaya devam edebilir. Null/boş alanlar metin
eklemez. Bu geri dönüş tarafından hiçbir medya getirme veya transkripsiyon işlemi
eklenmez. Transkript uzantısı alanları, geri dönüş video taşıyıcısından ve onun
`video_url`/`source` nesnelerinden kaldırılır. OpenAI kablo biçimi izin listesi
katı kalır; yerel desteği bilinmeyen video taşıyıcıları kullanılabilir durumda
kalır ve yalnızca metin desteklediği bilinen hedefler güvenli işaretçileri korur.
Yapılandırılmış karartma gölge kopyaları, eklenen transkript metnini korurken
çağırana ait özgün istek değişmeden kalır. Yerel desteğe sahip hedefler ve devre
dışı bırakılmış köprüler mevcut baypas davranışlarını korur.

Saklanan ek kopyalar aynı gözlemlenen istek sinyalini kullanır. Koruma bariyeri
öncesindeki ham istemci isteği anlık görüntüsü, bellekte bekleyen istek ve erken
reddedilen istek günlüğü, video parçalarındaki transkript alanlarını yapısal
olarak değiştirir; işlem hattı aşamaları ve bağlam devri tarafından sentezlenen
dize istemleri, kalıcı istek gövdesi hedefinde karartılır. Kalıcı
`video_content_removed` işaretçisi, `previous_response_id` devamının kasıtlı
olarak atılmış metni yeniden oluşturması yerine kapalı biçimde başarısız olmasını
sağlar. Gözlemlenen bir istek, günlüğe kaydedilmeden önce parça bazındaki
karartma gölge kopyasını kaybederse veya birkaç video gölge kopyasından yalnızca
biri bile sonraki istek değişikliklerinden sonra eşleşmezse, kısmen karartılmış
bir transkripti saklamak yerine saklanan istek gövdesinin tamamı atlanır.

Gözlemlenen bir istek için model yanıtı, yapılandırılmış bir ipucu sınırı olmadan
transkriptin herhangi bir bölümünü alıntılayabilir. Bu nedenle kalıcı çağrı
günlüğü `responseBody`, bir atlama işaretçisiyle değiştirilir; ayrıntılı işlem
hattı yapıtı (yukarı akış/istemci gövdelerini ve akış parçalarını içerebilir)
saklanmaz. Anlamsal, idempotency ve reasoning-replay önbellekleri, bu istek için
okuma ve yazma işlemlerini baypas eder. Sağlayıcı isteği ve istemci tarafından
görülebilen yanıt değişmeden kalır. Ayrıntılı yapıt atlandığında erken keepalive
baytları geçici arabellekten boşaltılır. Kiro'nun hatalı biçimlendirilmiş
EventStream uyarısı, hiçbir zaman içeriği veya JSON ayrıştırıcısının ham hatasını
değil, yalnızca yükün bayt sayısını bildirir.
Bu, ilgisiz her sağlayıcı/eklenti tanılamasının denetlendiği iddiasında değildir;
saklanan hedeflere yönelik daha kapsamlı tarama #11658 kapsamında izlenmektedir.

Dahili `/api/modality-bridge/video/drilldown` yaşam döngüsü, ayrı bir
geri döngü/token kimlik doğrulamalı önbellek altyapısıdır. Her işlem ayrıca
kanonik, opak bir asıl kimliği gerektirir. Bir üretim çağırıcısı etkinleştirilmeden önce,
bu kimliği kimliği doğrulanmış kiracıdan türetmeli ve istemci tarafından seçilen bir
değeri asla iletmemelidir. Önbellek anahtarları bu aslı kanonik oturum ve
video referansı kimliklerine bağlar, yalnızca bunların SHA-256 ile türetilmiş anahtarlarını
depolar ve hem okumaları hem de silme işlemlerini aynı asıl ile sınırlar. Önbellek, giriş
başına en fazla 16 türetilmiş JPEG karesi depolar, bunların süresini on dakika sonra
doldurur ve sınırlandırılmış `start`/`end` okumalarını veya açık oturum silme işlemini
destekler.

Her asıl, 16 giriş ve 64 MiB kanonik JPEG verisiyle sınırlıdır. Bu
sınırlar, 64 girişlik/256 MiB'lık genel üst sınırdan bağımsızdır: asıl kota
baskısı, genel LRU tahliyesi değerlendirilmeden önce yalnızca o asla ait en uzun
süredir kullanılmayan girişleri tahliye eder. Süresi dolmuş girişler, önbellek etkinliği
sırasında hem asıl hem de genel hesaplamadan temizlenirken iptal ve doğrulama hataları
kısmi bir değişikliği kaydetmez.

Önbellek; kanonik olmayan Base64'ü, aşırı dolguyu, JPEG olmayan medyayı, hatalı veya
kesilmiş JPEG'leri ve sınırlandırılmış tam görüntü `sharp` kod çözümü sırasında uyarı
üreten JPEG'leri reddeder. Kabul edilen her görüntüyü kanonik JPEG olarak yeniden kodlar,
genişlik ve yüksekliği çağıranın alanlarına güvenmek yerine kodu çözülmüş baytlardan
türetir ve sondaki çok biçimli baytları saklamak yerine atar. Her iki kotaya da yalnızca
sınırlandırılmış kanonik sıkıştırılmış arabellek yansıtılır. JSON aktarım sınırı,
32 MiB kodu çözülmüş girdi üst sınırı için Base64 ek yükünü içerir. Depolanan her
türetme; doğrulanmış JPEG biçimini/çözünürlüğünü, örnekleme politikasını,
türetme sürümünü, oluşturulma zamanını, sunucu tarafından hesaplanan içerik karmasını
ve karmalanmış üst referansın yanı sıra güvenilir çağıranın üst içerik karmasını
kaydeder. İptal, atomik önbellek kaydından önce eşzamansız kod çözme/karma
aşamaları arasında denetlenir.

Bu dilim, henüz üretimdeki bir üreticiyi rotaya bağlamaz ve
çok çözünürlüklü varyant seçimi sağlamaz. Bu nedenle şeffaf Video Bridge istek
yolu ek iş yüküne neden olmaz; kiracıya bağlı asıl türetme ve
tam FU-08 çok çözünürlüklü yaşam döngüsü, tamamlanmış davranış olarak
belgelenmek yerine açık takip çalışmaları olarak kalır.

Karelere, yapılandırılmış Video modeliyle sırayla açıklama yazılır. Boş bir
Video geçersiz kılma ayarı, Vision ayarını devralır; ikisi de boşsa Vision
otomatik yönlendiricisi, kullanılacak görsel yetenekli modeli seçer. Başarılı açıklamalar,
orijinal bölümü kararlı bir `[Video description:` önekiyle değiştirir; bu önek ayrıca
metni güvenilmeyen, medyadan türetilmiş bir gözlem olarak işaretler ve sonraki
modellere medyada bulunan talimatları izlememelerini söyler. Kare açıklaması önbellek
anahtarları JPEG baytlarını, istemi, zaman damgasını ve kullanılan modeli içerir;
yalnızca başarılı açıklamalar önbelleğe alınır. Önbellek girişleri, yedek model
dâhil olmak üzere gerçek başarılı üretici modeli saklar; köprü, farklı kareler
farklı modeller tarafından üretildiğinde `mixed` bildirir. Önbellek isabeti, üretici
kimliğini istenen yönlendirme planı olarak yeniden etiketlemek yerine yeniden kullanır.
Videonun tamamına ait sonuç önbelleği, çıktıyı değiştiren her girdiye göre anahtarlanır:
istem, kullanılan model, örnekleme politikası, kare sayısı, anlamsal analiz modu,
normalleştirilmiş odak ipucunun SHA-256 parmak izi, odak penceresi, `transcript`,
`audioTranscript` ve kontak sayfası bayrağı. Dolayısıyla bu boyutlardan herhangi
birinin değiştirilmesi önbellek isabetsizliğine yol açar; eski bir sonuç asla yeniden
kullanılmaz. Görsel tekilleştirme politikası sürümü, eşiği ve sınırlandırılmış aday kare
sayısı da sonuç önbelleği anahtarında ve meta verilerinde açıkça yer alır; bu nedenle
bir politika değişikliği, videonun tamamına ait eski bir açıklamayı yeniden kullanamaz.
Sonuç önbelleği v4 meta verileri modu ve parmak izini saklar, ham kullanıcı görevini
asla saklamaz. Koruma meta verileri hem istenen hem de kullanılan analiz modlarını
bildirir; kullanılabilir kullanıcı metni olmadan istenen bir `focused` modu, etkin
olarak `full` şeklinde bildirilir.

Koruma mekanizması, desteklenen her video bölümünü ayıklar ancak en fazla
`modalityBridgeVideoMaxVideos` kadarını açıklar. `supportsVideo === false`
olduğu kanıtlanmış bir hedef için başarısız ve sınır üstü videolar, ham videonun
kalmaması amacıyla açık güvenli metin işaretlerine dönüştürülür. Yetenek bilinmiyorsa
bu bölümler video taşıyıcılarını korur; varsa yedek transkript yukarıdaki
sınırlandırılmış metin dönüşümünü izler. `supportsVideo === true` olan hedefler
köprüyü atlar. İstemci isteğinin iptal sinyali; indirme, aracı kuyruğu,
alt süreçler ve açıklama çağrıları boyunca yayılır; iptaller videolar arasında
işlemeyi durdurur ve hiçbir zaman ham medyaya izin vererek başarısız olmaz.

Çalışma zamanı ayarları DB desteklidir ve Zod ile doğrulanır:

| Anahtar                             | Varsayılan  | Aralık / davranış                                                                                              |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | İsteğe bağlı çalışma zamanı, kullanmak için etkinleştirilmelidir                                               |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` genel altyazıları korur; `focused`, sınırlandırılmış ve güvenilmeyen son kullanıcı bağlamını kullanır   |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge modelini devralır                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                           |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` veya orantılı `segment_aware`; algılayıcı hatasında `uniform` seçeneğine geri dönülür |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                            |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                 |

120 saniyenin üzerindeki eski kalıcı Video zaman aşımı değerleri aracı son
tarihine göre sınırlandırılır; bu sınırın üzerindeki yeni ayar yazma işlemleri
reddedilir. `GET /api/modality-bridge/video/runtime`, kimlik doğrulaması veya
çalışma zamanı yoklamasından önce güvenilir biçimde damgalanmış geri döngü
yerelliği, ardından yönetim kimlik doğrulaması gerektirir. Yalnızca `available`,
temizlenmiş FFmpeg/ffprobe sürümleri ve çalışma zamanı kullanılamadığında sabit
bir neden döndürür. Dahili ayıklama uç noktası herkese açık bir yükleme API'si
değildir: kuyruk doygunluğu `503` ile birlikte `Retry-After`, arayan tarafın
bağlantıyı kesmesi `499`, sabit aracı son tarihi ise `504` döndürür. Dönüştürülen
yanıtlar, Vision veya Audio segmentlerini kaldırmadan merkezi
`x-omniroute-modality-bridge` başlığına
`video->text;model=<visionModel>;parts=<videos>` ekler.

### PII Maskeleyici (`piiMasker.ts`)

**Her iki** aşamada da çalışır.

- **`preCall`**, yükü klonlar; `system`, `messages`, `input` ve `prompt`
  alanlarını (düz dize öğeleri dâhil) dolaşır ve dize türündeki `content`/`text`
  alanlarına (`@/shared/utils/inputSanitizer` kaynağından) `processPII()`
  uygular. `PII_REDACTION_ENABLED=true` olduğunda algılanan PII, giden yükte
  sansürlenir. Bu, yalnızca istem enjeksiyonu politikasını denetleyen
  `INPUT_SANITIZER_MODE` ayarından bağımsızdır. Sansürleme kapalı olduğunda
  çağrı, içeriği yeniden yazmadan algılama sayılarını kaydeder.
- **`postCall`**, yanıtı derinlemesine klonlar; `sanitizePIIResponse()` ile
  Responses API biçimi maskeleyicisini (`maskResponsesOutput` —
  `output_text` ve `output[].content[].text` alanlarını kapsar) çalıştırır.
  Herhangi bir sansürleme gerçekleşirse değiştirilmiş yanıt özgün yanıtın
  yerini alır.

Koruma mekanizması hiçbir zaman engelleme yapmaz; yalnızca açıklama ekler
(`meta.detections`, `meta.redacted`) veya yeniden yazar.

### İstem Enjeksiyonu (`promptInjection.ts`)

Kullanıcı tarafından sağlanan içerikteki saldırgan yapıları algılar ve
yapılandırılmış politikayı uygular. Davranış, ortam değişkenleri ve oluşturucu
seçenekleri tarafından belirlenir:

| Ayar            | Ortam değişkeni                                                                                             | Varsayılan | Etki                                                                                                                                                                                                                    |
| --------------- | ----------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Etkin           | `INPUT_SANITIZER_ENABLED`                                                                                   | `true`     | `false` olduğunda koruma mekanizması kısa devre yapar.                                                                                                                                                                  |
| Mod             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                             | `warn`     | Enjeksiyon politikası: `block`, `warn` veya `log`. (`redact`, geriye dönük uyumluluk için kabul edilir ancak enjeksiyon metnini **kaldırmaz**; istek PII yeniden yazımı `PII_REDACTION_ENABLED` tarafından denetlenir.) |
| Engelleme eşiği | `blockThreshold` seçeneği / `INPUT_SANITIZER_BLOCK_THRESHOLD` (`INJECTION_GUARD_BLOCK_THRESHOLD` diğer adı) | `high`     | Engelleme için gereken asgari önem derecesi. Varsayılan ayarda orta derece yalnızca gözlemlenir.                                                                                                                        |

**Mod önceliği** (`getMode`): çağıranın `options.mode` değeri →
`INJECTION_GUARD_MODE` **DB özellik bayrağı geçersiz kılması** (Dashboard →
Settings → Feature Flags) → `INJECTION_GUARD_MODE` ortam değişkeni →
`INPUT_SANITIZER_MODE` ortam değişkeni → `warn`. Bu nedenle Dashboard'daki bir
geçersiz kılma, ortam değişkenlerine göre önceliklidir; dolayısıyla Feature Flags
kullanıcı arayüzü çalışan korumayı canlı olarak denetler (yeniden başlatma
gerekmez). DB okuması hata güvenlidir: hata oluşursa koruma, ortam değişkenlerine
dayalı davranışa geri döner ve herhangi bir geçersiz kılma ayarlanmadığında
davranış yalnızca ortam değişkenlerine dayalı çözümlemeyle aynıdır.

Algılama kaynakları:

1. `@/shared/utils/inputSanitizer` içindeki `sanitizeRequest()` (işlem hattının
   başka yerlerinde kullanılan ortak algılayıcı kümesi).
2. Yerleşik `DEFAULT_GUARD_PATTERNS` (şu anda `system_override_inline` ve
   `markdown_system_block`; her ikisi de `high` önem derecesine sahiptir).
3. Oluşturucu seçenekleri aracılığıyla geçirilen isteğe bağlı `customPatterns`
   (dizeler, düzenli ifadeler veya `{ name, pattern, severity }` kayıtları).

`mode === "block"` **olduğunda** ve en az bir tespit önem derecesi
eşiğini karşıladığında, `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }` döndürür. `warn`/`log` modlarında koruma katmanı
günlük kaydı oluşturur ancak çağrıya izin verir. Paylaşılan yardımcı
`evaluatePromptInjection()`, istemleri kayıt defteri üzerinden geçmeden
değerlendirmesi gereken çağıranlar için de dışa aktarılır.

**Tarama sınırı (v3.8.20):** algılayıcı, birleştirilmiş istem metninin yalnızca
**ilk 16 KB** bölümünü inceler — `src/shared/utils/inputSanitizer.ts` içinde
`MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt). Hem `detectInjection()`
hem de `evaluatePromptInjection()`, desen döngüsünü çalıştırmadan önce
`slice(0, MAX_INJECTION_SCAN_BYTES)` uygular. Enjeksiyon yönergeleri girdinin
başına yakın konumlandığından, bu işlem algılamayı zayıflatmadan yüzlerce KB
boyutundaki yüklerde regex CPU/GC kullanımını sınırlar (bkz. #3932, #4041).

### Kimlik Bilgisi Maskeleyici (`credentialMasker.ts`)

**Her iki** aşamada da varsayılan zincirin sonunda (öncelik `95`) çalışır. İyi
bilinen API anahtarı / gizli belirteç desenlerini hem giden yükten (mesaj
içeriği, araç çağrısı argümanları, araç sonuçları) **hem de** sağlayıcı
yanıtından çıkarır; böylece bir isteme yapıştırılan (veya bir araç sonucu
tarafından geri döndürülen) kimlik bilgileri üst sağlayıcıya ya da istemciye
sızdırılmaz.

- PII çıkarma ile aynı kural doğrultusunda **yalnızca açıkça etkinleştirilir**
  (Kesin Kural #20 ile ilişkili): `settings.credentialRedactionEnabled === true`
  **veya** `CREDENTIAL_REDACTION_ENABLED=true` olmadığı sürece devre dışıdır.
  Devre dışıyken koruma katmanı hiçbir işlem yapmaz — hiçbir zaman engellemez
  veya yeniden yazmaz.
- `redactCredentials()`, yük/yanıt ağacının tamamını dolaşır (`walkValue()`;
  prototip kirliliğine karşı güvenli, `WeakSet` aracılığıyla döngülere karşı
  güvenli) ve eşleşmeleri bir `[REDACTED:<type>]` yer tutucusuyla değiştirerek
  yalnızca gerçekten değişen dalları klonlar.
- `CREDENTIAL_PATTERNS`; LLM sağlayıcı anahtarlarını (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS belirteçlerini (GitHub,
  Slack, Linear, Notion, npm, Postman, Discord), ödeme anahtarlarını (Stripe,
  Square), bulut anahtarlarını (AWS erişim anahtarı, Twilio, SendGrid, Mailgun),
  özel anahtarları / JWT'leri, kimlik bilgisi içeren bağlantı dizelerini
  (`mongodb://user:pass@...` vb.) ve genel bir
  `Authorization`/`x-api-key`/`api-key`/`apikey` üst bilgi değeri desenini
  kapsar. Üst bilgi biçimindeki anahtarlar (`authorization`, `x-api-key`,
  `api-key`, `apikey`), genel metin regex'i yerine yapısal olarak çıkarılır
  (yalnızca değer; `Bearer `/`Basic ` gibi şema öneki korunur).
- Koruma katmanı hiçbir zaman engellemez; yalnızca yeniden yazar
  (`modifiedPayload` / `modifiedResponse`) ve açıklama bilgisi ekler
  (`meta.credentialsRedacted`, `meta.count`).

Regresyon koruması: `tests/unit/credential-masker-guardrail.test.ts`.

## Temel Sözleşme (`base.ts`)

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
  block?: boolean; // true, zinciri kısa devre yapar (short-circuit)
  message?: string; // engelleme durumunda gösterilir
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // isteği yeniden yazmak için preCall tarafından döndürülür
  modifiedResponse?: TValue; // yanıtı yeniden yazmak için postCall tarafından döndürülür
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

Bir güvenlik koruması (guardrail), `void`, `{}` veya `{ block: false }` döndürerek "değişiklik yok" sinyali verir. Bir `modifiedPayload`/`modifiedResponse` döndürmek, sonraki güvenlik korumaları için zincir boyunca akan değerin yerini alır. `signal?: AbortSignal`, çağrıcı yaşam döngüsünü güvenlik korumalarına taşır. İstek iptali, kasıtlı bir hataya açık (fail-open) istisnadır: medya köprüleri, ham medyayı desteklemediği bilinen bir hedefe geri yüklemeden çalışmaları durdurur ve temizlik yapar.

## Kayıt Defteri (`registry.ts`)

Singleton `guardrailRegistry` şunları sunar:

- `register(guardrail)` — bir güvenlik koruması ekler (veya normalleştirilmiş ada göre değiştirir) ve artan `priority` değerine göre yeniden sıralar.
- `clear()` / `list()` — yönetimsel yardımcılar.
- `runPreCallHooks(payload, context)` — etkin güvenlik korumaları üzerinden yinelenir, yükü (`payload`) `modifiedPayload` aracılığıyla aktarır ve ilk `block: true` değerinde durur.
- `runPostCallHooks(response, context)` — yanıt tarafında aynı akış.
- `resetGuardrailsForTests({ registerDefaults })` — temiz test izolasyonu için durumu temizler ve isteğe bağlı olarak varsayılanları yeniden kaydeder.

Her iki çalıştırıcı da `results` alanının izleme için yararlı olan her güvenlik korumasına ait `blocked`, `skipped`, `modified`, `error` ve `meta` alanlarını içeren `GuardrailExecutionResult` kayıtlarından oluşan bir dizi olduğu `{ blocked, payload|response, results, guardrail?, message? }` nesnesini döndürür.

### İstek Başına Güvenlik Korumalarını Devre Dışı Bırakma

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })`, mevcut istek için atlanması gereken güvenlik koruması adlarının tekilleştirilmiş (de-duplicated) bir listesini toplar. Kaynaklar (tümü isteğe bağlı, tümü birleştirilir):

- `apiKeyInfo.disabledGuardrails`
- İstek gövdesi `disabledGuardrails` (en üst düzey)
- İstek gövdesi `metadata.disabledGuardrails`
- Header `x-omniroute-disabled-guardrails` (veya eski adıyla `x-disabled-guardrails`)

Değerler dizi veya virgülle ayrılmış bir dize olabilir; adlar küçük harfli kebab-case formatına normalleştirilir (`pii_masker` → `pii-masker`). Sonuç, `context.disabledGuardrails` aracılığıyla, eşleşen güvenlik korumalarını (`results` içinde `skipped: true`) atlayan kayıt defterine iletilir.

## Yürütme Sırası

`src/sse/handlers/chat.ts` ve `open-sse/handlers/chatCore.ts` üzerinden geçen her istek için:

1.  `resolveDisabledGuardrails(...)` API anahtarı, gövde ve başlıklardan atlama listesini oluşturur.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` koruyucuları artan öncelik sırasına göre çalıştırır:
    - Devre dışı bırakılan koruyucular `skipped` olarak kaydedilir.
    - Her koruyucunun `preCall`'u, `modifiedPayload` aracılığıyla yükü yeniden yazabilir.
    - İlk `block: true` zinciri kısa devre yapar ve işleyici bir koruyucu reddetme yanıtı döndürür.
3.  (Potansiyel olarak yeniden yazılmış) yük, birleşik yönlendirme ve yukarı akış dağıtımına akar.
4.  Yanıt birleştirildikten sonra, `guardrailRegistry.runPostCallHooks(...)` aynı zinciri yanıt üzerinde çalıştırır. Buradaki `block: true` yukarı akış yanıtını düşürür.

Hata fırlatan koruyucular `error: <message>` ile kaydedilir ve `logger.warn` aracılığıyla günlüğe yazılır, ancak zincir devam eder — tasarım gereği açık kalır.

## Yapılandırma

Yerleşik koruyucular tarafından okunan ortam değişkenleri:

| Değişken                              | Kullanan                  | Etki                                                                                                                 |
| :------------------------------------ | :------------------------ | :------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Algılamayı tamamen devre dışı bırakmak için `false` olarak ayarlayın.                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Enjeksiyon politikası: `warn`, `block` veya `log`. Eski `redact` değeri enjeksiyon metnini yeniden yazmaz.           |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Enjeksiyon koruyucusu için mod; ayrıca ortam değişkenlerini **geçersiz kılan** bir DB özellik bayrağıdır (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block`'un reddettiği minimum ciddiyet: `high` (varsayılan), `medium` veya `low`.                               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | `INPUT_SANITIZER_BLOCK_THRESHOLD` için eski takma ad.                                                                |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` olduğunda, istek PII'si redakte edilir (enjeksiyon modundan bağımsız olarak).                                 |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Yanıt tarafı maskeleyici davranışını kontrol eder.                                                                   |

Modality Bridge koruyucuları, çalışma zamanı yapılandırmasını ortam değişkenlerinden değil, DB destekli ayarlar deposundan (`getSettings()`) okur. Vision'ın birincil anahtarları `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ve `modalityBridgeCacheMaxEntries` şeklindedir. Eski `visionBridge*` anahtarları yalnızca belgelenmiş tek döngülü okuma geri dönüşü olarak kabul edilir; kontrol paneli yazımları birincil anahtarları kullanır. Varsayılanlar ve geri dönüş çözümleyici `src/shared/constants/modalityBridgeDefaults.ts` içinde bulunur, eski sabitler ise `src/shared/constants/visionBridgeDefaults.ts` içinde korunur.

Ses, `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` ve `modalityBridgeAudioMaxClips` ile paylaşılan `modalityBridgeCache*` ayarlarını kullanır. Sesin eski anahtar geri dönüşü yoktur çünkü bu anahtarlar Modality Bridge şemasıyla birlikte tanıtılmıştır.

Video, `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` ve `modalityBridgeVideoTimeout` ile paylaşılan `modalityBridgeCache*` ayarlarını kullanır. Varsayılan olarak devre dışıdır çünkü FFmpeg/ffprobe isteğe bağlı operasyonel bağımlılıklardır ve kare altyazılandırma gecikme ve model maliyeti ekler.

## Özel Güvenlik Kalkanları (Custom Guardrails)

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

Adımlar:

1. `BaseGuardrail` sınıfından türeyen `src/lib/guardrails/myGuardrail.ts` dosyasını oluşturun.
2. `preCall` ve/or `postCall` metodlarını implement edin.
3. Ya içe aktarma (import) zamanında kaydedin (`registerDefaultGuardrails` içinden çağırarak) ya da
   çalışma zamanında (runtime) `guardrailRegistry.register(...)` metodunu çağırın — kayıt defteri (registry), aynı normalize edilmiş isme sahip
   önceki tüm güvenlik kalkanlarının yerini alır.
4. `tests/unit/` altında testler ekleyin (mevcut örnekler:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Test Etme

Bilinen bir durumdan başlamak için testler arasında `resetGuardrailsForTests()` kullanın.
Boş bir kayıt defteriyle başlamak ve yalnızca test edilen güvenlik kalkanlarını kaydetmek için
`{ registerDefaults: false }` parametresini geçirin. Vision Bridge bağımlılık enjeksiyonunu
(`deps.getSettings`, `deps.callVisionModel`) kabul eder; Audio Bridge ise ayarlar, yetenekler, STT model seçimi, kimlik bilgisi kontrolleri ve transkripsiyon için
eşdeğer dikişleri (seam) sunar. Bu sayede testler, veritabanı veya ağ erişimine gerek kalmadan her iki akışı da çalıştırabilir.

## Ayrıca Bakınız

- `src/lib/guardrails/` — implementasyon
- `src/shared/utils/inputSanitizer.ts` — prompt-injection ve PII maskeleme özelliklerini sağlayan
  ortak detektör
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge varsayılanları ve
  zorunlu köprü (forced-bridge) model listesi
- `src/shared/constants/modalityBridgeDefaults.ts` — ortak Vision/Audio çalışma zamanı (runtime) varsayılanları
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonal katman (circuit breaker, cooldowns)
- `docs/reference/ENVIRONMENT.md` — tam çevre değişkeni (env var) referansı

## Enjeksiyon Kalkanı Rota Kapsamı ve Kırmızı Takım (Red-Team) Testleri (Faz 8 · Blok D)

Enjeksiyon kalkanı (`createInjectionGuard` / `withInjectionGuard`), kullanıcı istemlerini (prompt) kabul eden tüm rotaları
kapsar. `INJECTION_GUARD_MODE` ayarına uyar (varsayılan `warn` = yalnızca loglar;
`block` = HTTP 400 `SECURITY_001` döndürür).

| Tür            | Rotalar                                                                                                                                              | Varsayılan mod |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Metin (mevcut) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Üretken        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Veri           | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Metin çıkarma (`extractMessageContents`), `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` alanlarını kapsar.

**Kırmızı takım (gece çalışması, `nightly-llm-security.yml`):** promptfoo, her rotanın `INJECTION_GUARD_MODE=block` altında OWASP-LLM derlemini (corpus) engellediğini doğrular; garak taramalar çalıştırır (gizli anahtar yoksa atlanır).
`moderations` tutarlılık için dahil edilmiştir — blok modundaki operatörler `resolveDisabledGuardrails`
aracılığıyla bunu muaf tutabilir.

Gece iş akışı (`.github/workflows/nightly-llm-security.yml`, cron + manuel
tetikleme) iki işe sahiptir:

- **`promptfoo-guard` (engelleme)** — `INJECTION_GUARD_MODE=block` ile
  `promptfoo eval -c promptfooconfig.yaml` komutunu çalıştırır. Her düşmanca senaryo (ör. "önceki tüm
  talimatları yoksay…", DAN tarzı jailbreak'ler), yanıtın `error.code === "SECURITY_001"` taşıdığını, yani kalkanın isteği gerçekten reddettiğini iddia eder.
- **`garak` (tavsiye niteliğinde)** — yerel bir OmniRoute örneğine (`http://localhost:20128/v1`) karşı
  garak `--probes promptinject,dan,leakreplay` komutunu çalıştırır. Sağlayıcı gizli anahtarına (`PROMPTFOO_PROVIDER_KEY`) bağlıdır; sorunsuz bir şekilde atlanır ve sonuna `|| true` eklenmiştir, böylece CI'ı (sürekli entegrasyon) başarısız kılmadan raporlama yapar.

Kalkan yardımcısının (`createInjectionGuard` / `withInjectionGuard`) kapsamı,
istem içeren her `/v1` rotasını kapsar; istem metni, `src/shared/utils/inputSanitizer.ts` içindeki
`extractMessageContents()` tarafından `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` alanlarından çekilir.
