# Guardrails (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Nguồn chuẩn:** `src/lib/guardrails/`
> **Cập nhật lần cuối:** 2026-08-29 — v3.8.51 (nguồn gốc bản chép lời Video Bridge do bên gọi khai báo,
> chưa được máy chủ xác minh — đã làm rõ theo #11661)

Các guardrail thực thi những phép biến đổi về an toàn, chính sách và nội dung tại ranh giới
giữa OmniRoute và các nhà cung cấp thượng nguồn. Mỗi guardrail có thể kiểm tra (và
tùy chọn từ chối, biến đổi hoặc chú thích) payload yêu cầu (`preCall`) và
phản hồi thượng nguồn (`postCall`).

Hệ thống hoạt động theo cơ chế **fail-open**: nếu một guardrail phát sinh lỗi trong khi thực thi, registry
sẽ ghi lại lỗi và tiếp tục với guardrail tiếp theo thay vì làm yêu cầu
thất bại. Việc chặn là một quyết định rõ ràng (`block: true`), không bao giờ là sự cố ngoài ý muốn.

## Các cơ chế bảo vệ tích hợp sẵn

Registry tự động tải sáu cơ chế bảo vệ theo thứ tự ưu tiên khi import
(xem `registry.ts` → `registerDefaultGuardrails()`):

| Độ ưu tiên | Tên                 | Giai đoạn      | Tệp                   |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Các số ưu tiên thấp hơn được chạy **trước**.

### Cầu nối hình ảnh (`visionBridge.ts`) — Cầu nối phương thức PR-1

Chặn các yêu cầu chứa hình ảnh được gửi đến **các mô hình không hỗ trợ hình ảnh** và
chuyển hướng toàn bộ yêu cầu đến một mô hình có khả năng xử lý hình ảnh hoặc thay thế các
phần hình ảnh bằng mô tả văn bản do một mô hình hình ảnh có thể cấu hình tạo ra trước
lệnh gọi thượng nguồn. Điều này cho phép các nhà cung cấp chỉ hỗ trợ văn bản xử lý
các payload đa phương thức một cách minh bạch.

Luồng:

1. Bỏ qua nếu mô hình đích đã hỗ trợ hình ảnh (trừ khi mô hình đó xuất hiện trong
   danh sách bắt buộc dùng cầu nối `isVisionBridgeForcedModel`).
2. Trích xuất các phần hình ảnh thông qua `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), hàm này ủy quyền cho **bộ phát hiện phương tiện hợp nhất**
   `detectMediaParts()` trong `open-sse/utils/mediaParts.ts` — nguồn thông tin chuẩn duy
   nhất được dùng chung với bộ lọc tương thích combo.
   Việc trích xuất chỉ cho phép các phần cấp cao nhất có hình dạng mà
   `replaceImageParts` có thể chèn trở lại (hợp đồng extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` và Responses API `input_image`. Các kết quả lồng nhau và
   hình dạng chỉ mang tính chỉ báo thuộc phạm vi xử lý của bộ lọc combo và không bao giờ
   được trích xuất. Bỏ qua nếu không tìm thấy phần nào.
3. Phân giải cấu hình thời gian chạy thông qua `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): các khóa cài đặt
   `modalityBridge*` mới được ưu tiên; các khóa `visionBridge*` cũ vẫn là **phương án
   dự phòng trong một chu kỳ** (cửa sổ rollback). Bỏ qua trước khi duyệt bất kỳ phương
   tiện nào nếu cầu nối bị vô hiệu hóa.
4. Bộ chọn chế độ (`modalityBridgeVisionMode`, xem bảng bên dưới) quyết định
   chuyển hướng hay mô tả. Chuyển hướng trả về `modifiedPayload` chỉ với `model`
   được hoán đổi, cùng meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Nhánh mô tả: giới hạn số hình ảnh ở `maxImages`, tạo prompt có nhận biết tác vụ,
   kiểm tra bộ nhớ đệm mô tả, gọi mô hình hình ảnh **song song**
   (`Promise.allSettled`) và chèn các phần văn bản `[Image N]: <description>` vào
   vị trí tương ứng. Một lần mô tả thất bại sẽ trả về `null` và phần hình ảnh gốc
   được **giữ nguyên** (#4012) — ngoại trừ nhánh mô tả combo khi mọi lần
   mô tả đều thất bại, trong trường hợp đó một thượng nguồn đã được xác nhận là không
   hỗ trợ hình ảnh sẽ nhận phần giữ chỗ
   `(unavailable — no vision-capable provider connected)` thay thế (#8430).
6. Trả về `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Bộ chọn chế độ (`modalityBridgeVisionMode`)

| Chế độ     | Mặc định | Hành vi                                                                                                                                                                                                                                                                                                 |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Heuristic cũ, không thay đổi (#6640/#7204): các mô hình không phải combo/`auto/` được chuyển hướng đến mô hình hình ảnh tốt nhất, trừ khi mô hình ban đầu đã có thông tin xác thực khả dụng (khi đó sẽ mô tả); các đích combo luôn dùng mô tả.                                                          |
| `describe` |          | Luôn mô tả — khối chuyển hướng bị bỏ qua hoàn toàn; mô hình do người dùng chọn luôn trả lời.                                                                                                                                                                                                            |
| `reroute`  |          | Buộc chuyển hướng: cơ chế bảo vệ giữ lại mô hình có thông tin xác thực bị bỏ qua. Cơ chế bảo vệ thông tin xác thực của **đích** chuyển hướng vẫn được áp dụng — khi không có đích hình ảnh khả dụng, yêu cầu sẽ chuyển sang mô tả để hình ảnh thô không bao giờ đến backend chỉ hỗ trợ văn bản (#8430). |

Các chế độ bắt buộc thực hiện đoản mạch **trước khi** heuristic tự động chạy; hành vi
`auto` giống từng byte với cơ chế bảo vệ trước PR-1.

#### Phạm vi khóa API (`visionBridgeKeyScope.ts`)

Khi khóa API của bên gọi hạn chế `allowedConnections`, các nhóm hạn ngạch
(`allowedQuotas`) hoặc các mô hình (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), cầu nối chỉ
chọn các mô hình chuyển hướng và mô tả mà khóa được phép sử dụng, trên các kết nối
mà khóa được phép sử dụng. Sau đó, lệnh gọi mô tả luôn đi qua vòng lặp tự thân
OmniRoute với header `x-omniroute-self-loop-key-id`, để yêu cầu chat tiếp nhận
thực thi lại chính sách kết nối và mô hình của khóa đó. `enforceApiKeyPolicy()`
chỉ chấp nhận header đó khi đi cùng bearer tự lặp, vì vậy nó chỉ có thể
thu hẹp quyền truy cập, và một id không thể phân giải sẽ bị từ chối.

Nếu không có mô hình hình ảnh nào được phép đối với khóa, nhánh mô tả sẽ không can thiệp
và yêu cầu được truyền qua mà không thay đổi, có cùng hành vi mở khi lỗi như một
cơ chế bảo vệ bị vô hiệu hóa (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Các yêu cầu không có khóa và các khóa không có những hạn chế này hoạt động hoàn toàn
giống như trước đây.

#### Prompt mô tả có nhận biết tác vụ (`modalityBridgeVisionTaskAware`)

Mặc định là **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) nối thêm
nội dung của **tin nhắn cuối cùng của người dùng** (được cắt ngắn còn 500 ký tự) vào
prompt mô tả cơ sở, định hướng phần mô tả theo nội dung người dùng thực sự yêu cầu
(mẫu codex-vision-proxy) và yêu cầu mô hình thị giác chép lại văn bản nhìn thấy được.
Khi cờ bị tắt — hoặc không có văn bản người dùng — prompt cơ sở được sử dụng nguyên
trạng.

Yêu cầu tương thích OpenAI riêng của vòng lặp tự gọi describe (`callVisionModelSingle()`
trong `visionBridgeHelpers.ts`) luôn yêu cầu `image_url.detail: "high"` —
vô điều kiện, cho mọi bên gọi/nhà cung cấp, không phụ thuộc vào bất kỳ tín hiệu nào
từ máy khách. Việc lấy mẫu ở mức chi tiết thấp làm giảm độ chính xác OCR đối với
chính tác vụ chép lại văn bản mà prompt này yêu cầu, vì vậy bản thân lệnh gọi describe
luôn yêu cầu mức chi tiết cao bất kể yêu cầu đầu vào ban đầu sử dụng mức chi tiết nào.
Điều này chỉ ảnh hưởng đến phần thân yêu cầu describe nội bộ; nó không thay đổi cách
OmniRoute chuyển tiếp `image_url.detail` của bên gọi trong yêu cầu chính —
giá trị mặc định đó được áp dụng riêng và chỉ dành cho các máy khách OpenCode đã
được phát hiện, trong `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Nhánh định dạng truyền dẫn Anthropic của vòng lặp tự gọi describe không có trường
`detail` và không bị ảnh hưởng bởi cả hai giá trị mặc định.

#### Giới hạn đầu ra describe (`modalityBridgeVisionMaxChars`)

| Khóa                           | Mặc định | Phạm vi            |
| ------------------------------ | -------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`      | `0` hoặc 100–50000 |

`0` (mặc định) có nghĩa là **không giới hạn** — phần mô tả do
`callVisionModel()` trả về được chuyển tiếp mà không sửa đổi, duy trì hành vi
hiện có. Bất kỳ giá trị nào trong phạm vi 100–50000 đều cắt ngắn phần mô tả và
thêm hậu tố `…` trước khi phần này được chèn trở lại dưới dạng
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` trong
`src/lib/guardrails/visionBridge.ts`). Hãy tăng giá trị này cho các tác vụ OCR
có nhiều chi tiết, khi mô hình hạ nguồn cần toàn bộ nội dung chép lại; hãy giảm
giá trị để giới hạn mức sử dụng token của các mô hình thị giác có đầu ra dài.
Trường trên bảng điều khiển nằm trong bảng Advanced của thẻ Vision
(`modality-bridge-max-chars` trong `ModalityBridgeVisionTab.tsx`) và nâng mọi
giá trị từ 1 đến 99 lên mức sàn 100, trong khi vẫn giữ nguyên giá trị `0` được
chỉ định rõ ràng — `0` tự thân là một giá trị Zod hợp lệ
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), chứ không
chỉ đơn thuần là giá trị mặc định "chưa đặt".

#### Bộ nhớ đệm describe (`modalityBridge/bridgeCache.ts`)

Bộ nhớ đệm LRU + TTL trong bộ nhớ, được dùng chung trên toàn tiến trình.
Khóa = `sha256(imageRef + composedPrompt + configuredBridgeModel)` với cách
đóng khung bằng tiền tố độ dài (không xảy ra xung đột ranh giới trường). Thành
phần mô hình là mô hình bridge **đã cấu hình**, không phải mô hình thực sự trả
lời — `callVisionModel` có thể dùng phương án dự phòng nội bộ, và việc tạo khóa
theo từng lần thử sẽ làm phân mảnh bộ nhớ đệm. Các lần describe thất bại không
bao giờ được lưu vào bộ nhớ đệm. Các cài đặt:

| Khóa                            | Mặc định | Phạm vi |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Chuẩn hóa hình ảnh từ xa (tự gọi describe/tải base64)

Khi bridge tự tải một hình ảnh **từ xa** — lệnh tự gọi describe của Anthropic
và quá trình chuyển đổi sang base64 theo định dạng truyền dẫn claude
(`ensureBase64ImagesForClaudeWire`), cả hai đều thông qua
`fetchRemoteImageAsDataUri()` trong `visionBridgeHelpers.ts` — URI dữ liệu thu
được sẽ được chuyển qua `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) trước khi được nhúng vào yêu cầu gửi tới
mô hình thị giác. Các hình ảnh quá lớn được thu nhỏ để **cạnh dài còn 2048px**
(tương ứng với giới hạn thay đổi kích thước mà OpenAI/Anthropic đã áp dụng ở
phía máy chủ), giúp giảm số byte tải lên/độ trễ mà không làm thay đổi nội dung
mô hình thị giác nhìn thấy. Quá trình thay đổi kích thước sử dụng `sharp`, được
tải thông qua import động: trên nền tảng mà tệp nhị phân gốc của nó không tải
được, `normalizeDataUri()` **không bao giờ ném lỗi** — hàm này chuyển sang
phương án chuyển tiếp nguyên trạng các byte ban đầu, nhờ đó đường dẫn
describe/chuyển đổi base64 luôn tiếp tục hoạt động. Các byte không phải hình
ảnh (một lần tải không trả về hình ảnh có thể giải mã) cũng được chuyển tiếp
nguyên trạng. Việc chuẩn hóa này chỉ áp dụng cho các hình ảnh mà bridge tải để
phục vụ lệnh tự gọi của chính nó — nó không bao giờ được áp dụng cho payload
chuyển tiếp thô của bên gọi, nhất quán với nguyên tắc chỉ sửa đổi khi được chọn
tham gia (Quy tắc cứng #20).

#### Lược đồ cài đặt + di chuyển dữ liệu

Các khóa `modalityBridge*` mới được Zod xác thực trong `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, bộ ba `modalityBridgeCache*` và nhóm
`modalityBridgeAudio*` được Audio Bridge sử dụng. Bản di chuyển
`141_modality_bridge_settings.sql` sao chép các giá trị `visionBridge*` cũ hiện
có sang các khóa mới tương ứng (có tính lũy đẳng, không bao giờ ghi đè giá trị
`modalityBridge*` do người vận hành đặt); các khóa cũ vẫn được chấp nhận làm
phương án đọc dự phòng trong một chu kỳ phát hành.

#### Header minh bạch + số liệu thống kê

Các phản hồi đã được chuyển đổi bằng describe mang header
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(được tạo bởi `buildModalityBridgeHeader()` trong `modalityBridge/bridgeStats.ts`,
được gắn bởi `withModalityBridgeHeader()` trong `src/sse/handlers/chatHelpers.ts`).
Các yêu cầu được định tuyến lại **không có** header — payload không bị thay đổi
và việc hoán đổi mô hình đã hiển thị trong trường `model` của phần thân phản hồi.

`GET /api/modality-bridge/stats` (xác thực quản trị, cùng cấp với
`GET /api/settings`) trả về các bộ đếm trong bộ nhớ theo từng phương thức
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` cho `vision`, `audio` và
`video`. `averageLatencyMs` sử dụng `latencySamples` làm mẫu số, không phải tất
cả các lần thử; một thao tác không có dữ liệu thời gian sẽ không tạo ra một mẫu
giả có giá trị 0 mili giây. `bridged` vẫn là bí danh tương thích ngược cho các
lần chuyển đổi thành công; các lần thử thất bại không làm tăng giá trị này.
Theo thiết kế, các bộ đếm được đặt lại khi tiến trình khởi động lại
(dữ liệu đo từ xa, không phải dữ liệu kế toán).

#### Cấu hình bảng điều khiển

Trang bảng điều khiển chuyên dụng là
`/dashboard/settings/modality-bridge`. Các tab `Vision`, `Audio` và `Video` có
thể được truy cập bằng URL, đồng thời giữ nguyên các tham số truy vấn khi chuyển
đổi giá trị `tab`. Tab Vision cung cấp các tùy chọn bật/tắt, chế độ, lựa chọn mô
hình (bao gồm mặc định tự động), lời nhắc có nhận biết tác vụ, các giới hạn nâng
cao về thời gian chờ/hình ảnh/độ dài mô tả/bộ nhớ đệm, các bộ đếm thời gian chạy
và một yêu cầu mẫu được bảo vệ. Tab Audio cũng đang hoạt động: tab này cung cấp
các tùy chọn bật/tắt, bộ chọn mô hình chỉ dành cho STT với Auto, các giới hạn về
thời gian chờ/độ dài clip tối đa, các bộ đếm âm thanh và một phép thử mẫu
`input_audio`. Tab Video đã có đầy đủ chức năng: tab này báo cáo trạng thái thời
gian chạy của FFmpeg/ffprobe — một trong bốn trạng thái giao diện rõ ràng
(`unknown` khi quá trình thăm dò đang diễn ra hoặc không thể hoàn tất,
`restricted` trên máy chủ bảng điều khiển không phải loopback, nơi quá trình thăm
dò bị bỏ qua ở phía máy khách, `unavailable` sau khi đã thăm dò và xác nhận là
không có, hoặc `available` cùng với các phiên bản FFmpeg/ffprobe) — duy trì các
giới hạn về bật/tắt, mô hình, khung hình, video và thời gian chờ, lọc bộ chọn mô
hình để chỉ hiển thị các mô hình hỗ trợ thị giác, đồng thời cung cấp các bộ đếm
video.

Thẻ Vision Bridge trước đây trong phần cài đặt AI giờ là một liên kết tương thích
đến trang mới; thẻ này không còn sở hữu một bản sao thứ hai của biểu mẫu. Media
Providers cũng liên kết các quy trình Image-to-Text và Speech-to-Text đến các tab
Modality Bridge tương ứng mà không loại bỏ sân chơi Speech-to-Text hiện có.

**Bỏ qua kiểm tra tiếp nhận cho self-loop:** khi lệnh gọi mô tả được định tuyến
qua self-loop `/v1` của chính OmniRoute (mô hình nhà cung cấp không tiêu chuẩn),
yêu cầu con sẽ gửi `x-omniroute-admission-bypass: internal` và được xác thực bằng
thông tin xác thực self-loop đã phân giải — sentinel `sk_omniroute` cục bộ trong
chế độ cục bộ, hoặc khóa môi trường `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` do
người vận hành cấu hình (#1350), để các bản triển khai `REQUIRE_API_KEY=true` vẫn
có thể thực hiện lệnh gọi mô tả. Việc bỏ qua chỉ được chấp nhận đối với chính xác
các thông tin xác thực đó, vì vậy máy khách bên ngoài không thể sử dụng header
này để bỏ qua bước tiếp nhận.

Các giá trị mặc định cũ nằm trong `src/shared/constants/visionBridgeDefaults.ts`;
các giá trị mặc định mới cho chế độ/nhận biết tác vụ/bộ nhớ đệm và trình phân giải
cài đặt nằm trong `src/shared/constants/modalityBridgeDefaults.ts`. Cơ chế bảo vệ
cung cấp tùy chọn hàm khởi tạo `deps` để các kiểm thử có thể tiêm các phần triển
khai giả của `getSettings` và `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Chặn các yêu cầu trò chuyện chứa âm thanh trước khi chúng đến một đích chưa được
biết là có chấp nhận đầu vào âm thanh hay không. Cơ chế này không bao giờ định
tuyến lại yêu cầu trò chuyện: các phần âm thanh được phiên âm thông qua endpoint
multipart tương thích với OpenAI hiện có và mô hình trò chuyện đã chọn tiếp tục
xử lý bằng bản phiên âm văn bản.

Luồng xử lý:

1. Phân giải `supportsAudio` thông qua `getResolvedModelCapabilities()`. Siêu dữ
   liệu rõ ràng từ sổ đăng ký nhà cung cấp được ưu tiên, tiếp theo là siêu dữ liệu
   mô hình tĩnh, rồi đến `modalities_input` đã đồng bộ. Một danh sách đầu vào đã
   khai báo nhưng không có `audio` sẽ cho kết quả `false`; khi không có bằng chứng
   nào về khả năng hỗ trợ, kết quả vẫn là `null`. Cả `false` và `null` đều kích
   hoạt bridge thận trọng, trong khi `true` bỏ qua bridge.
2. Phân giải các cài đặt `modalityBridgeAudio*` và trích xuất các phần âm thanh
   cấp cao nhất có thể nối ghép từ mọi thông điệp thông qua bộ phát hiện dùng
   chung `detectMediaParts()`. Các dạng dữ liệu truyền được hỗ trợ là
   `input_audio`, `audio_url` của OpenAI và `source.media_type: "audio/*"`. Âm
   thanh lồng nhau được phát hiện để định tuyến nhưng không bị loại bỏ bởi đường
   dẫn nối ghép. Khối lượng công việc bị giới hạn bởi
   `modalityBridgeAudioMaxClips`; các phần phía sau vẫn được giữ nguyên.
3. Tuân theo `provider/model` đã cấu hình hoặc để `selectAudioBridgeModel()` duyệt
   qua `AUDIO_TRANSCRIPTION_PROVIDERS` theo thứ tự danh mục ổn định và chọn mô
   hình đầu tiên có thông tin xác thực nhà cung cấp đang hoạt động và có thể sử
   dụng.
4. `callAudioTranscription()` chuyển đổi âm thanh base64/data-URI thành một
   `file` multipart, hoặc tải xuống một `audio_url` từ xa thông qua cơ chế bảo vệ
   đầu ra chỉ dành cho tài nguyên công khai, với ghim DNS và giới hạn 25 MB. Sau
   đó, hàm POST tệp và mô hình đã chọn đến self-loop
   `/v1/audio/transcriptions` cục bộ, được xác thực bằng
   `resolveSelfLoopBearer()`. Tuyến phiên âm hiện có thực hiện quy trình tra cứu
   thông tin xác thực, xử lý thời gian hồi, giới hạn tốc độ và điều phối đến nhà
   cung cấp như bình thường.
5. Các lệnh gọi thành công thay thế phần tương ứng bằng
   `[Audio N]: <transcript>`. Các lệnh gọi chạy với `Promise.allSettled`: một lần
   thất bại riêng lẻ sẽ giữ nguyên phần âm thanh ban đầu đó (hợp đồng #4012). Nếu
   mọi lệnh gọi đều thất bại và đích đã được chứng minh là
   `supportsAudio === false`, các phần sẽ trở thành
   `[Audio N]: (unavailable — no STT provider connected)` (hợp đồng #8430). Đối
   với một đích không xác định (`null`), kết quả thất bại toàn bộ vẫn được giữ
   nguyên. Một đích đã được chứng minh là chỉ hỗ trợ văn bản nhưng không có thông
   tin xác thực STT khả dụng sẽ nhận cùng phần giữ chỗ rõ ràng đó mà không phát
   sinh lệnh gọi mạng.

Các bản phiên âm thành công sử dụng bộ nhớ đệm LRU/TTL Modality Bridge dùng chung
cho toàn bộ tiến trình. Khóa kết hợp tham chiếu âm thanh, nhãn thao tác ổn định
`audio-transcription` và mô hình STT đã chọn; các lần thất bại không bao giờ được
lưu vào bộ nhớ đệm. Các lần thử âm thanh cập nhật các bộ đếm dùng chung
`bridged`, `cacheHits`, `failures` và `lastUsedAt`. Các phản hồi đã được chuyển
đổi mang
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; các yêu cầu
không bị thay đổi sẽ không nhận được phân đoạn Audio Bridge.

Các cài đặt thời gian chạy được lưu trong DB và xác thực bằng Zod:

| Khóa                          | Mặc định | Phạm vi             |
| ----------------------------- | -------- | ------------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                   |
| `modalityBridgeAudioModel`    | `""`     | Tự động hoặc ID STT |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000         |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10                |

Bộ nhớ đệm dùng chung vẫn được kiểm soát bởi `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` và `modalityBridgeCacheMaxEntries`.

### Cầu nối video (`videoBridge.ts`, `videoBridgePipeline.ts`)

Chặn các phần video cấp cao nhất trong `messages` của Chat Completions và `input`
của Responses API trước khi gọi một đích không được biết là có hỗ trợ video gốc.
Các dạng được hỗ trợ là `input_video`, `video_url`, `video_source`, URL HTTPS
và URI dữ liệu `data:video/*;base64,...`. Tên tệp thuần túy trong văn bản không
được xem là video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) đảm nhiệm việc duyệt yêu cầu,
kiểm tra khả năng/chính sách, tổng hợp theo từng yêu cầu và tải trọng phản hồi.
Công việc cho từng video — thu nhận, bộ nhớ đệm toàn bộ kết quả, mô tả chuỗi
khung hình (kết hợp mọi bản chép lời âm thanh do bên gọi khai báo), cùng các
chỉ số/hủy bỏ/dọn dẹp cho từng lần thử — được ẩn sau `processVideoPart` trong
`videoBridgePipeline.ts`, được gọi một lần cho mỗi phần video bên trong vòng lặp
của `preCall`. Mô-đun đó cũng định nghĩa các ranh giới cổng rõ ràng
`VideoMediaBrokerPort` (thu nhận byte và trích xuất các khung hình được lấy mẫu),
`VideoAudioTranscriptionPort` (kết hợp bản chép lời âm thanh do bên gọi khai báo
với chú thích của các khung hình được lấy mẫu) và `VideoDrilldownPort` (ranh giới
lưu trữ truy sâu khung hình; chưa được kết nối vào `processVideoPart` — hiện nay
chỉ tuyến `/api/modality-bridge/video/drilldown` riêng biệt ghi các mục truy sâu).

Đường dẫn yêu cầu `/v1` công khai không bao giờ nhập hoặc gọi một tiến trình con.
Video từ xa được tải xuống với giới hạn 50 MiB; video base64 nội tuyến có giới
hạn giải mã thận trọng là 36 MiB cho mỗi video để phần bao mô hình/thông điệp/
đóng khung có thể duy trì trong giới hạn tiếp nhận yêu cầu JSON công khai là
50 MiB. Độ dài nội tuyến và kích thước ước tính sau giải mã được kiểm tra trước
khi cấp phát. HTTPS là bắt buộc đối với URL từ xa ban đầu và mọi chuyển hướng,
sử dụng cơ chế bảo vệ đầu ra chỉ-công-khai hiện có với ghim DNS. Sau đó, các byte
đi qua chính xác ranh giới broker nội bộ
`POST /api/modality-bridge/video/extract`. Tuyến đó vừa là `LOCAL_ONLY` vừa là
`SPAWN_CAPABLE`, chỉ chấp nhận yêu cầu loopback đáng tin cậy, được xác thực theo
từng tiến trình và không bao giờ chấp nhận URL, đường dẫn hệ thống tệp, tệp thực
thi hoặc danh sách đối số. Quy trình kích thước nội dung API và trình đọc nội
dung tăng dần của trình xử lý thực thi độc lập giới hạn đầu vào broker ở 50 MiB.
Hàng đợi có giới hạn của nó chạy từng lượt trích xuất một, cho phép bốn tác vụ
đang chờ và giới hạn đầu vào đang chờ ở 100 MiB.

Bên trong broker, `ffprobe` đọc một tệp cục bộ riêng tư; danh sách định dạng cho
phép cố định loại trừ các định dạng danh sách phát và tệp kê khai. Đối với các
vùng chứa thuộc họ MOV được cho phép, tham chiếu dữ liệu MOV bên ngoài vẫn bị
tắt theo mặc định và lệnh cố định không bật chúng. Cả `ffprobe` và `ffmpeg` đều
sử dụng danh sách giao thức chỉ cho phép `file`, một luồng, các mảng đối số cố
định, không có shell và các tệp thực thi được phân giải từ `PATH`. Các luồng ảnh
bìa đính kèm không phải là ứng viên có thể phát. Mọi luồng có thể phát phải đáp
ứng các giới hạn và luồng mặc định rõ ràng được ưu tiên trước phương án dự phòng
xác định có chỉ mục thấp nhất. Video bị giới hạn ở 600 giây, 8.192 pixel mỗi
chiều và 33.554.432 pixel nguồn. FFmpeg lấy mẫu 1–16 khung hình JPEG tại điểm
giữa, thu nhỏ cạnh dài xuống tối đa 1.024 pixel mà không phóng to đầu vào nhỏ
hơn và không bao giờ nhận URL. Chính sách lấy mẫu mặc định là `uniform`. Các
chính sách `scene_aware` tùy chọn và `segment_aware` thử nghiệm thực hiện thêm
một lượt FFmpeg cố định trên luồng cục bộ đã được xác thực, chọn các dấu thời
gian cảnh `showinfo` có giới hạn và chuyển dự phòng theo cách xác định sang cùng
các điểm giữa đồng đều khi bộ dò gặp lỗi, hết thời gian chờ, đầu ra không hợp lệ
hoặc tập ứng viên rỗng. Chế độ nhận biết phân đoạn phân bổ các mẫu điểm giữa
theo tỷ lệ với các khoảng cảnh đã được xác thực; bằng chứng nhận biết phân đoạn
và hành vi dự phòng được trình bày chi tiết bên dưới. Giới hạn cứng 16 khung hình
được áp dụng sau khi lựa chọn trong mọi chính sách. Khi một yêu cầu nhận biết
cảnh chỉ có ngân sách một khung hình, yêu cầu đó sử dụng điểm giữa đồng đều của
toàn bộ video đang hoạt động hoặc cửa sổ tiêu điểm và báo cáo
`policyEffective: uniform`: một khung hình cảnh duy nhất được chọn không thể giữ
lại cả hai đầu thời gian. Bên gọi có thể tùy chọn cung cấp một cửa sổ tiêu điểm
hữu hạn (`start`/`end` tính bằng giây); các giới hạn được kẹp theo thời lượng
phương tiện, cửa sổ đảo ngược hoặc không hữu hạn bị từ chối và mọi chính sách
lấy mẫu chỉ được thực hiện bên trong khoảng đã chuẩn hóa. Cửa sổ kết quả được
đưa vào siêu dữ liệu lấy mẫu và tiền tố mô tả không đáng tin cậy để các mô hình
hạ nguồn có thể phân biệt một đoạn trích tập trung với toàn bộ dòng thời gian.

Tiêu điểm chú thích ngữ nghĩa là một thiết lập riêng biệt, rõ ràng. Chế độ phân
tích `full` mặc định giữ nguyên lời nhắc khung hình hiện có và không bao giờ
chuyển tiếp văn bản yêu cầu đến mô hình chú thích. Trong chế độ `focused`, cầu
nối chỉ đọc `text`/`input_text` không rỗng mới nhất do người dùng tạo từ cùng một
vùng chứa Chat hoặc Responses, chuẩn hóa thành NFC, thu gọn các ký tự điều khiển
và khoảng trắng, đồng thời giới hạn ở 500 điểm mã Unicode. Kết quả rỗng sẽ
chuyển về lời nhắc `full` chính xác. Gợi ý có thể sử dụng được tuần tự hóa dưới
dạng JSON trong một khối ngữ cảnh người dùng không đáng tin cậy chuyên biệt và
chỉ có thể ưu tiên các chi tiết có thể quan sát; gợi ý này không thể ghi đè cảnh
báo riêng biệt về việc không làm theo các hướng dẫn nhìn thấy hoặc nghe thấy
trong phương tiện. Tiêu điểm văn bản không bao giờ suy luận `start`/`end` hoặc
thay đổi bộ lấy mẫu thời gian.

#### Bằng chứng phân đoạn cấu trúc FU-07

`segment_aware` sử dụng một lượt tiền phân tích có giới hạn trên luồng video cục bộ đã được xác thực. Chuỗi bộ lọc cố định trước tiên thu phóng xuống chiều rộng tối đa 320 pixel, phát hiện các thay đổi cảnh và khoảng thời gian đóng băng, sau đó lấy mẫu ở tốc độ 1 khung hình mỗi giây để đánh giá độ mờ, độ chói trung bình và thông tin không gian/thời gian. Lượt này được giới hạn ở 600 mẫu cấu trúc, một luồng FFmpeg/bộ lọc, cùng danh sách cho phép về giao thức chỉ `file` và định dạng vùng chứa, giới hạn đầu ra tiến trình là 1 MiB và tối đa 30 giây trong cơ chế hủy/thời hạn dùng chung của broker. Nó không bao giờ chấp nhận lệnh, bộ lọc, đường dẫn hoặc URL từ yêu cầu.

Các giá trị cấu trúc là bằng chứng lấy mẫu có tính xác định, không phải sự thấu hiểu ngữ nghĩa video. Chúng không suy luận chủ thể, hành động, phụ đề, lời nói hoặc ý định của người dùng. Các ranh giới cảnh và đóng băng tạo thành những phân đoạn; độ bao phủ đóng băng, độ mờ, mức phơi sáng, chi tiết không gian và thay đổi theo thời gian chỉ ảnh hưởng đến cách phân bổ ngân sách hiện có từ 1–16 khung hình. Một phân đoạn bị đóng băng hoàn toàn được giới hạn ở một khung hình, trong khi các phân đoạn không đóng băng cạnh tranh phần ngân sách còn lại. Khi số lượng ranh giới nhiều hơn số khung hình, độ bao phủ đồng đều trên dòng thời gian vẫn được duy trì để các lần cắt cảnh nhanh ở đầu không thể che khuất một phân đoạn dài ở cuối. Các ranh giới cảnh nằm trong độ phân giải phân tích 1 giây của một ranh giới đóng băng sẽ được hợp nhất.

Bộ lọc bị thiếu, bằng chứng sai định dạng/trống, lỗi bộ dò hoặc hết thời gian tiền phân tích có giới hạn đều chuyển sang chính xác chính sách trung điểm đồng đều. Việc hủy từ bên gọi hoặc hết thời hạn của broker không chuyển sang chính sách dự phòng: nó chấm dứt tiến trình con đang chạy, ngăn việc trích xuất khung hình sau đó và cây thư mục tạm riêng tư được xóa trong `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` tạo các fixture FFmpeg thực có tính xác định để đánh giá mức tiết kiệm số lần gọi tạo chú thích sau khử trùng lặp, phân bổ ngân sách cho chuyển động dày đặc, bằng chứng về độ mờ/phơi sáng/SI-TI, các lần cắt cảnh nhanh có phần đuôi dài và dương tính giả do chuyển cảnh mờ dần. Script ghi lại thời gian thực tế của quá trình tiền phân tích và, khi `/usr/bin/time` khả dụng, CPU của tiến trình con cùng RSS cực đại. Các phép kiểm tra chất lượng của nó chỉ là oracle cấu trúc. Chất lượng thực tế của mô hình tạo chú thích vẫn là `HOLD` vì harness này không có endpoint được ủy quyền hoặc bộ đánh giá được cố định. Mức tiết kiệm chi phí cũng vẫn là `HOLD`, trừ khi `--caption-cost-per-call-usd` cung cấp một ước tính chi phí dương rõ ràng cho mỗi lần gọi; script không bao giờ bịa đặt bất kỳ kết quả nào trong hai loại này.

Mỗi khung hình bị giới hạn ở 4 MiB, tổng cộng tất cả khung hình thô bị giới hạn ở 23 MiB và phản hồi broker đã tuần tự hóa bị giới hạn ở 32 MiB. Một thư mục tạm riêng tư được xóa trong `finally`. OmniRoute không đóng gói kèm FFmpeg và không chấp nhận đường dẫn tùy chỉnh đến tệp thực thi. Trước khi tạo chú thích, bridge áp dụng một lượt khử trùng lặp hình ảnh thận trọng: mỗi JPEG được thu nhỏ thành bộ đệm thang xám 16×16 và chỉ được so sánh với khung hình được giữ lại gần nhất. Với ngân sách chú thích được yêu cầu lớn hơn một khung hình, quá trình trích xuất cung cấp một nhóm ứng viên có giới hạn, tối đa gấp đôi ngân sách đó và không bao giờ vượt quá 16 khung hình. Giới hạn được yêu cầu chỉ được áp dụng sau khi khử trùng lặp; ứng viên đầu tiên và cuối cùng được chọn sẽ được giữ lại trong quá trình tinh giản cuối cùng khi ngân sách ít nhất là hai. Chính sách có phiên bản `grayscale-16x16-mean-cells-v2` sử dụng giá trị lớn hơn giữa mức chênh lệch độ chói trung bình và tỷ lệ các ô hình thu nhỏ có mức chênh lệch chuẩn hóa ít nhất là 0.05. Ngưỡng trùng lặp là hằng số 0.04, được chọn vì tính dự đoán được thay vì được cung cấp dưới dạng cài đặt lúc chạy. Tín hiệu tương phản cao thứ cấp này bảo toàn các chuyển động nhỏ và thay đổi văn bản hiển thị mà phép so sánh chỉ dựa trên giá trị trung bình có thể bỏ sót. Lỗi bộ so sánh hoặc bộ giải mã sẽ chuyển sang giữ lại độ bao phủ. Siêu dữ liệu đầu ra phân biệt các ứng viên đã trích xuất, các khung hình được sử dụng thành công và các bản trùng lặp hình ảnh đã bị loại bỏ.

Một phần video được đánh dấu rõ ràng có thể yêu cầu một bảng liên ảnh kèm dấu thời gian. Bridge tạo một lưới JPEG tối đa 4 cột và 16 khung hình. Mỗi ô 512 pixel khắc dấu thời gian nguồn của nó vào một dải có độ tương phản cao ở phía dưới, trong khi chính các dấu thời gian đó vẫn được giữ trong siêu dữ liệu văn bản để phục vụ việc liên kết và kiểm tra ở hạ nguồn. Toàn bộ JPEG vẫn bị giới hạn ở 32 MiB. Nếu `sharp` không thể giải mã hoặc ghép lưới, bridge sẽ quay về sử dụng các khung hình JPEG riêng lẻ; thao tác hủy từ client vẫn được truyền qua hoạt động tạo bảng liên ảnh.

Bằng chứng thăng cấp được chủ ý tách biệt khỏi phép đo hiệu năng vi mô về tổng hợp nhân tạo. `scripts/perf/video-bridge-contact-sheet-eval.ts` định nghĩa một harness A/B có phiên bản schema dành cho các mô hình thị giác thực tương thích với OpenAI. Nó đo số token do nhà cung cấp báo cáo, độ trễ thực tế đầu cuối (bao gồm cả việc tổng hợp bảng liên ảnh), số lần gọi mô hình và mức độ lưu giữ dữ kiện được định nghĩa trong manifest. Phản hồi thô của mô hình không được ghi vào báo cáo; chỉ các digest SHA-256 và ID dữ kiện khớp mới được giữ lại. Harness không thực hiện bất kỳ lệnh gọi mạng hoặc mô hình trả phí nào trừ khi `--execute-real` được truyền vào và `--model`, `OMNIROUTE_BASE_URL` cùng `OMNIROUTE_API_KEY` đã được cấu hình. Nếu không có lần chạy thực được chỉ định rõ ràng đó, phán quyết có thể đọc bằng máy của nó vẫn là `HOLD`; chỉ riêng các phép đo tải trọng nhân tạo/số lần gọi không phải là bằng chứng thăng cấp.

Bên gọi có thể đính kèm một mảng `transcript.cues` tùy chọn vào phần video được hỗ trợ khi họ đã có văn bản được căn chỉnh. Mỗi cue phải chứa `text`, một khoảng `start`/`end` hữu hạn nằm trong thời lượng đã được thăm dò và một `source` thuộc danh sách cho phép (`client`, `embedded` hoặc `audio-bridge`); `confidence` mặc định là `1` và phải nằm trong khoảng từ `0` đến `1`. Các cue trùng lặp hoàn toàn được hợp nhất. OmniRoute không bao giờ bắt đầu phiên âm từ siêu dữ liệu này: các cue đã xác thực được sao chép vào kết quả được mô tả cùng với nguồn, độ tin cậy và khoảng thời gian, đồng thời được hiển thị dưới dạng các quan sát không đáng tin cậy bên cạnh chú thích khung hình. Văn bản không hợp lệ, nằm ngoài phạm vi hoặc không có nguồn gốc xuất xứ sẽ bị từ chối thay vì được trộn vào luồng chú thích. Cả hai kênh bản ghi lời nói trong nội dung yêu cầu đều chuẩn hóa nguồn gốc xuất xứ được cung cấp thành `client`, bao gồm cả các nhãn `embedded` hoặc `audio-bridge` do chính bên gửi tự xác nhận. Chỉ adapter do máy chủ sở hữu mới có thể gán các nhãn đáng tin cậy đó thông qua đối số chỉ dành cho mã `trustedSource`; trường JSON trong yêu cầu không thể truy cập đối số đó. Văn bản bản ghi lời nói vẫn là nội dung không đáng tin cậy được trích xuất từ phương tiện, bất kể nguồn gốc xuất xứ của nó, và tuyệt đối không được quyết định việc ủy quyền.

Một bên gọi nâng cao có thể cung cấp một track `audioTranscript` cho cùng video;
track này được xem là văn bản do client cung cấp, không phải bằng chứng về việc phiên âm từ server.
Điểm nối hợp nhất chạy các quan sát hình ảnh và âm thanh trong
cùng một thời hạn và tín hiệu hủy, sắp xếp chúng trên một dòng thời gian chung, thu gọn
các bản trùng lặp hoàn toàn và báo cáo kết quả một phần khi chỉ một bên thành công.
Một `audioTranscript` không hợp lệ sẽ hạ cấp thành kết quả một phần đó — phần mô tả
hình ảnh được giữ lại và nhánh âm thanh ghi nhận một mã lỗi đã được làm sạch —
thay vì làm toàn bộ video thất bại. Tính khả dụng của từng nhánh, cờ một phần
và các mã lỗi đã được làm sạch được bảo toàn trong kết quả mô tả, trong
metadata của guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), trong metadata của cache kết quả và trong các bộ đếm
hợp nhất của bridge. Đường dẫn Video Bridge mặc định không gọi chuyển giọng nói thành văn bản
hoặc tải xuống bản sao media thứ hai; khi không có track tường minh đó, đường dẫn này vẫn
chỉ xử lý video.

**Lưu giữ bản chép lời (#12150 P1).** Điều này tự động áp dụng bất cứ khi nào
Video Bridge (bản thân là tính năng tùy chọn bật) hiển thị một cue bản chép lời — không có
cờ lưu giữ riêng. Khi một yêu cầu hiển thị bất kỳ cue bản chép lời nào (một
`transcript` do bên gọi khai báo hoặc một `audioTranscript` đã hợp nhất), guardrail đánh dấu yêu cầu đó là
`videoBridgeObserved` và tạo ra một bản bóng đã biên tập của phần mô tả video —
một bản hiển thị giống hệt, trong đó phần nội dung văn bản tự do của mỗi cue được thay bằng
`[redacted-video-transcript]`, được dựng bằng cách thay thế trường cue có cấu trúc
trước khi chuỗi được ghép lại (không bao giờ bằng cách phân tích văn bản đã được làm phẳng, vì vậy không có nội dung
cue nào — dù đối nghịch hay thông thường, kể cả các phần nội dung chứa `]` như
`[inaudible]`/`[music]` — có thể còn sót lại). Phần thân yêu cầu trong nhật ký lời gọi được lưu bền vững sẽ hoán đổi
mỗi phần văn bản bắt nguồn từ video bằng bản bóng đã biên tập đó, được đối sánh theo tính
bằng nhau của nội dung; neo `fullText` được đọc lại từ payload guardrail trước lời gọi đã hoàn tất,
vì vậy phép đối sánh vẫn thành công sau khi các guardrail chuỗi chạy sau đó (các bộ che PII và
thông tin xác thực, với độ ưu tiên 10/95) viết lại tại chỗ văn bản mô tả và
sau khi việc chèn system-prompt/handoff/memory định hình lại mảng thông điệp. Phần
thân được gửi lên model không thay đổi. Một yêu cầu đã được quan sát cũng không điền
bất kỳ Memory bền vững nào (việc trích xuất bắt nguồn từ cả yêu cầu lẫn phản hồi đều bị bỏ qua),
do đó phản hồi của chính model không thể lặp lại văn bản bản chép lời vào Memory.

**Các trường video thô (#12430).** Khi bridge được bật và khả năng hỗ trợ video gốc chưa xác định hoặc không có, các trường `transcript`/`audioTranscript` đã được định nghĩa cũng kích hoạt `videoBridgeObserved`, ngay cả sau khi mô tả thất bại hoặc đạt giới hạn `maxVideos`. `null` và chuỗi rỗng được tính; các trường không tồn tại và metadata không phải video thì không. Các bản sao được lưu giữ sẽ biên tập các trường này hoặc bỏ qua yêu cầu, còn cache/Memory sẽ bị bỏ qua.

Trên các đường dẫn dự phòng đó, các cue hợp lệ từ bên gọi trở thành các phần `text`/`input_text`
được hỗ trợ thay vì các trường provider không chuẩn. Cả hai track do yêu cầu cung cấp
vẫn là các quan sát `client` không đáng tin cậy, kèm theo cảnh báo rõ ràng rằng video
chưa được mô tả và timestamp chưa được xác minh đối chiếu với media. Các giới hạn hiện có là
256 cue/tổng cộng 64 KiB và giới hạn cho từng cue được áp dụng chung cho cả hai track;
timestamp phải nằm trong mức trần 600 giây của broker và bất kỳ cửa sổ trọng tâm nào
được cung cấp. Các track không hợp lệ bị loại bỏ, không được chuyển tiếp dưới dạng văn bản tùy ý; một
track cùng cấp hợp lệ vẫn có thể được sử dụng trừ khi ngân sách kết hợp của chúng bị vượt quá. Các trường null/rỗng
không thêm văn bản. Cơ chế dự phòng này không thêm thao tác tìm nạp media hay phiên âm.
Các trường mở rộng của bản chép lời bị xóa khỏi phần mang video dự phòng và các đối tượng
`video_url`/`source` của phần đó. Danh sách cho phép trên wire của OpenAI vẫn nghiêm ngặt; các phần mang video
có khả năng hỗ trợ gốc chưa xác định vẫn khả dụng và các đích đã biết là chỉ hỗ trợ văn bản vẫn giữ các marker an toàn.
Các bản bóng biên tập có cấu trúc bảo vệ văn bản bản chép lời được nối thêm, trong khi
yêu cầu gốc thuộc sở hữu của bên gọi vẫn không thay đổi. Các đích hỗ trợ gốc và
các bridge bị tắt vẫn giữ hành vi bỏ qua hiện có của chúng.

Các bản sao được lưu giữ bổ sung sử dụng cùng tín hiệu yêu cầu đã quan sát. Ảnh chụp nhanh
yêu cầu client thô trước guardrail, yêu cầu đang chờ trong bộ nhớ và nhật ký
yêu cầu bị từ chối sớm sẽ thay thế có cấu trúc các trường bản chép lời trong các phần video;
các prompt dạng chuỗi được tổng hợp bởi các giai đoạn pipeline và context handoff được biên tập
tại sink của phần thân yêu cầu được lưu bền vững. Marker `video_content_removed` được lưu bền vững
khiến việc tiếp tục bằng `previous_response_id` đóng an toàn khi lỗi thay vì tái dựng
văn bản đã bị chủ ý loại bỏ. Nếu một yêu cầu đã quan sát làm mất
bản bóng biên tập theo từng phần trước khi ghi nhật ký, hoặc chỉ một trong số nhiều bản bóng video
không đối sánh được sau các thay đổi yêu cầu về sau, phần thân yêu cầu được lưu giữ sẽ
bị bỏ qua hoàn toàn thay vì lưu giữ một bản chép lời chỉ được biên tập một phần.

Đối với một yêu cầu đã quan sát, phản hồi của model có thể trích dẫn bất kỳ phần nào của
bản chép lời mà không có ranh giới cue có cấu trúc. Vì vậy, `responseBody` trong nhật ký lời gọi
được lưu bền vững của phản hồi đó được thay bằng một marker bỏ qua; artifact pipeline chi tiết
(có thể bao gồm phần thân upstream/client và các chunk luồng) không được lưu giữ. Các cache
ngữ nghĩa, idempotency và phát lại suy luận bỏ qua cả thao tác đọc lẫn ghi cho yêu cầu đó.
Yêu cầu provider và phản hồi hiển thị cho client vẫn không thay đổi. Các byte keepalive ban đầu
được rút khỏi bộ đệm tạm thời khi artifact chi tiết bị bỏ qua. Cảnh báo EventStream
không đúng định dạng của Kiro chỉ báo cáo số byte của payload, không bao giờ báo cáo nội dung của payload hoặc lỗi thô
của trình phân tích JSON.
Điều này không khẳng định rằng mọi chẩn đoán provider/plugin không liên quan đều đã được
kiểm tra; đợt rà soát rộng hơn đối với các sink được lưu giữ được theo dõi trong #11658.

Vòng đời nội bộ `/api/modality-bridge/video/drilldown` là một tầng lưu trữ đệm riêng biệt,
được xác thực bằng loopback/token. Mọi thao tác cũng yêu cầu một ID principal opaque
chuẩn tắc. Trước khi một thành phần gọi trong môi trường production được kích hoạt, nó phải
suy ra ID đó từ tenant đã xác thực và tuyệt đối không được chuyển tiếp một giá trị
do client chọn. Các khóa bộ nhớ đệm liên kết principal đó với các ID phiên và
tham chiếu video chuẩn tắc, chỉ lưu trữ các khóa được suy ra bằng SHA-256, đồng thời giới hạn cả thao tác đọc
lẫn xóa trong cùng principal. Bộ nhớ đệm lưu trữ tối đa 16 khung hình JPEG đã suy ra
cho mỗi mục, cho chúng hết hạn sau mười phút và hỗ trợ thao tác đọc có giới hạn
`start`/`end` hoặc xóa phiên một cách tường minh.

Mỗi principal bị giới hạn ở 16 mục và 64 MiB dữ liệu JPEG chuẩn tắc. Các
giới hạn đó độc lập với mức trần toàn cục là 64 mục/256 MiB: áp lực hạn ngạch
của principal chỉ loại bỏ các mục ít được sử dụng gần đây nhất của chính principal đó trước khi
việc loại bỏ theo LRU toàn cục được xem xét. Các mục hết hạn được loại khỏi cả phần hạch toán
theo principal lẫn toàn cục khi có hoạt động trên bộ nhớ đệm, trong khi việc hủy và lỗi xác thực
không ghi nhận một bản thay thế chưa hoàn chỉnh.

Bộ nhớ đệm từ chối Base64 không chuẩn tắc, phần đệm dư thừa, nội dung không phải JPEG, JPEG
không đúng định dạng hoặc bị cắt cụt, cũng như JPEG tạo ra cảnh báo trong quá trình giải mã
toàn bộ hình ảnh có giới hạn bằng `sharp`. Mỗi hình ảnh được chấp nhận sẽ được mã hóa lại thành JPEG
chuẩn tắc, chiều rộng và chiều cao được suy ra từ các byte đã giải mã thay vì tin tưởng các trường
do bên gọi cung cấp, đồng thời mọi byte polyglot ở cuối đều bị loại bỏ thay vì được giữ lại. Chỉ bộ đệm
nén chuẩn tắc có giới hạn mới được tính vào cả hai hạn ngạch. Giới hạn truyền tải JSON bao gồm phần
dung lượng tăng thêm do Base64 đối với mức trần đầu vào đã giải mã là 32 MiB. Mỗi
kết quả suy dẫn được lưu trữ đều ghi lại định dạng/độ phân giải JPEG đã xác thực, chính sách lấy mẫu,
phiên bản suy dẫn, thời điểm tạo, hàm băm nội dung do máy chủ tính toán và tham chiếu cha
đã băm cùng với hàm băm nội dung cha của bên gọi đáng tin cậy. Việc hủy được kiểm tra
giữa các giai đoạn giải mã/băm bất đồng bộ trước khi ghi nguyên tử vào bộ nhớ đệm.

Phần triển khai này chưa kết nối một producer production với route và không
cung cấp cơ chế lựa chọn biến thể đa độ phân giải. Do đó, đường dẫn yêu cầu Video Bridge
trong suốt không phát sinh thêm công việc, còn việc suy ra principal gắn với tenant và
toàn bộ vòng đời đa độ phân giải FU-08 vẫn là công việc tiếp theo được nêu rõ,
thay vì được mô tả như hành vi đã hoàn tất.

Các khung hình được tạo chú thích tuần tự bằng mô hình Video đã cấu hình. Một giá trị
ghi đè Video rỗng sẽ kế thừa thiết lập Vision; nếu cả hai đều rỗng, bộ định tuyến tự động
của Vision sẽ chọn mô hình có khả năng xử lý hình ảnh phù hợp. Các chú thích thành công
thay thế phần ban đầu bằng tiền tố ổn định `[Video description:`, đồng thời
đánh dấu văn bản là một quan sát không đáng tin cậy được suy ra từ nội dung đa phương tiện và yêu cầu các mô hình
ở hạ nguồn không làm theo những chỉ dẫn tìm thấy trong nội dung đó. Khóa bộ nhớ đệm chú thích khung hình
bao gồm các byte JPEG, prompt, dấu thời gian và mô hình hiệu lực; chỉ các
chú thích thành công mới được lưu vào bộ nhớ đệm. Các mục trong bộ nhớ đệm giữ lại mô hình producer thực tế
đã thành công, bao gồm cả mô hình dự phòng; bridge báo cáo `mixed` khi các khung hình khác nhau
được tạo bởi các mô hình khác nhau. Một lần trúng bộ nhớ đệm sẽ tái sử dụng danh tính producer đó
thay vì gắn nhãn lại theo kế hoạch định tuyến được yêu cầu. Bộ nhớ đệm kết quả cho toàn bộ video
được tạo khóa dựa trên mọi đầu vào làm thay đổi đầu ra — prompt, mô hình hiệu lực,
chính sách lấy mẫu, số lượng khung hình, chế độ phân tích ngữ nghĩa, fingerprint SHA-256
của gợi ý trọng tâm đã chuẩn hóa, cửa sổ trọng tâm, `transcript`,
`audioTranscript` và cờ contact-sheet — vì vậy, việc thay đổi bất kỳ
chiều nào trong số đó đều dẫn đến trượt bộ nhớ đệm, tuyệt đối không tái sử dụng dữ liệu cũ. Phiên bản,
ngưỡng và số lượng khung hình ứng viên có giới hạn của chính sách khử trùng lặp hình ảnh cũng được ghi rõ
trong khóa và metadata của bộ nhớ đệm kết quả; do đó, một thay đổi chính sách không thể tái sử dụng
mô tả toàn bộ video đã cũ. Metadata v4 của bộ nhớ đệm kết quả giữ lại chế độ và
fingerprint, tuyệt đối không giữ tác vụ thô của người dùng. Metadata guardrail báo cáo cả chế độ
phân tích được yêu cầu lẫn chế độ hiệu lực; chế độ `focused` được yêu cầu nhưng không có
văn bản người dùng khả dụng sẽ được báo cáo là có hiệu lực `full`.

Guardrail trích xuất mọi phần video được hỗ trợ nhưng không mô tả nhiều hơn
`modalityBridgeVideoMaxVideos`. Đối với một target đã được chứng minh là có
`supportsVideo === false`, các video bị lỗi và vượt giới hạn trở thành những dấu mốc văn bản an toàn
tường minh để không còn video thô nào tồn tại. Khi chưa xác định được khả năng hỗ trợ, những phần đó
vẫn giữ phần chứa video của chúng; mọi transcript dự phòng đều tuân theo quy trình chuyển đổi
văn bản có giới hạn ở trên. Các target có `supportsVideo === true` sẽ bỏ qua bridge.
Tín hiệu hủy yêu cầu của client được truyền qua quá trình tải xuống, hàng đợi broker,
các subprocess và các lệnh gọi tạo chú thích; thao tác hủy dừng giữa các video và tuyệt đối không
chuyển sang trạng thái cho phép media thô đi qua khi gặp lỗi.

Các thiết lập runtime được lưu trong DB và được xác thực bằng Zod:

| Khóa                                | Mặc định    | Phạm vi / hành vi                                                                                                    |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime tùy chọn, cần chủ động bật                                                                                   |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` giữ nguyên chú thích chung; `focused` sử dụng ngữ cảnh mới nhất từ người dùng có giới hạn, không đáng tin cậy |
| `modalityBridgeVideoModel`          | `""`        | Kế thừa mô hình Vision Bridge                                                                                        |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                 |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, hoặc `segment_aware` theo tỷ lệ; nếu trình phát hiện gặp lỗi thì quay về `uniform`         |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                  |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                       |

Các giá trị thời gian chờ Video cũ đã được lưu trữ vượt quá 120 giây sẽ bị giới hạn theo
thời hạn của broker; các lần ghi cài đặt mới vượt quá giới hạn đó sẽ bị từ chối.
`GET /api/modality-bridge/video/runtime` yêu cầu vị trí loopback đáng tin cậy đã được đóng dấu
trước khi xác thực hoặc thăm dò runtime, sau đó yêu cầu quyền xác thực quản lý.
Nó chỉ trả về `available`, các phiên bản FFmpeg/ffprobe đã được làm sạch và một lý do cố định
khi runtime không khả dụng. Endpoint trích xuất nội bộ không phải là
API tải lên công khai: khi hàng đợi bão hòa, nó trả về `503` kèm `Retry-After`; khi bên gọi
ngắt kết nối, nó trả về `499`; và khi hết thời hạn cố định của broker, nó trả về `504`. Các phản hồi đã chuyển đổi sẽ thêm
`video->text;model=<visionModel>;parts=<videos>` vào header trung tâm
`x-omniroute-modality-bridge` mà không xóa các phân đoạn Vision hoặc Audio.

### Bộ che PII (`piiMasker.ts`)

Chạy ở **cả hai** giai đoạn.

- **`preCall`** sao chép payload, duyệt qua `system`, `messages`, `input` và
  `prompt` (bao gồm các mục chuỗi thuần túy), đồng thời áp dụng `processPII()` (từ
  `@/shared/utils/inputSanitizer`) cho các trường chuỗi `content`/`text`. Khi
  `PII_REDACTION_ENABLED=true`, PII được phát hiện sẽ bị che trong payload gửi đi.
  Điều này độc lập với `INPUT_SANITIZER_MODE` (biến này chỉ kiểm soát
  chính sách chèn prompt). Khi tính năng che bị tắt, lệnh gọi sẽ ghi lại số lượng
  phát hiện mà không ghi lại nội dung.
- **`postCall`** sao chép sâu phản hồi, chạy `sanitizePIIResponse()` cùng với
  bộ che theo cấu trúc Responses API (`maskResponsesOutput` — bao phủ
  `output_text` và `output[].content[].text`). Nếu có bất kỳ nội dung nào bị che,
  phản hồi đã sửa đổi sẽ thay thế phản hồi ban đầu.

Guardrail không bao giờ chặn; nó chỉ chú thích (`meta.detections`,
`meta.redacted`) hoặc ghi lại nội dung.

### Chèn prompt (`promptInjection.ts`)

Phát hiện các cấu trúc đối kháng trong nội dung do người dùng cung cấp và thực thi
chính sách đã cấu hình. Hành vi được điều khiển bởi các biến môi trường và tùy chọn
hàm khởi tạo:

| Cài đặt     | Biến môi trường                                                                                           | Mặc định | Tác dụng                                                                                                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Đã bật      | `INPUT_SANITIZER_ENABLED`                                                                                 | `true`   | Khi là `false`, guardrail sẽ kết thúc sớm.                                                                                                                                                             |
| Chế độ      | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn`   | Chính sách chèn: `block`, `warn` hoặc `log`. (`redact` được chấp nhận để tương thích ngược nhưng **không** loại bỏ văn bản chèn; việc ghi lại PII trong yêu cầu do `PII_REDACTION_ENABLED` kiểm soát.) |
| Ngưỡng chặn | Tùy chọn `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (bí danh `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Mức độ nghiêm trọng tối thiểu cần thiết để chặn. Theo mặc định, mức Medium chỉ được theo dõi.                                                                                                          |

**Thứ tự ưu tiên chế độ** (`getMode`): `options.mode` của bên gọi →
ghi đè cờ tính năng trong **DB** của `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → biến môi trường `INJECTION_GUARD_MODE` → biến môi trường `INPUT_SANITIZER_MODE` →
`warn`. Do đó, tùy chọn ghi đè trên dashboard được ưu tiên hơn các biến môi trường, vì vậy giao diện người dùng Feature
Flags kiểm soát trực tiếp guard đang chạy (không cần khởi động lại). Việc đọc DB có cơ chế an toàn khi lỗi:
nếu xảy ra lỗi, guard sẽ quay về hành vi dựa trên biến môi trường; và khi không
đặt giá trị ghi đè, hành vi sẽ giống hệt cách phân giải chỉ dựa trên biến môi trường.

Nguồn phát hiện:

1. `sanitizeRequest()` từ `@/shared/utils/inputSanitizer` (tập hợp trình phát hiện dùng chung
   được sử dụng ở những nơi khác trong pipeline).
2. `DEFAULT_GUARD_PATTERNS` tích hợp sẵn (hiện gồm `system_override_inline` và
   `markdown_system_block`, cả hai đều có mức độ nghiêm trọng `high`).
3. `customPatterns` tùy chọn được truyền qua các tùy chọn hàm khởi tạo (chuỗi, biểu thức chính quy
   hoặc bản ghi `{ name, pattern, severity }`).

Khi `mode === "block"` **và** có ít nhất một phát hiện đạt ngưỡng mức độ
nghiêm trọng, `preCall` trả về `{ block: true, message: "Request rejected:
suspicious content detected" }`. Trong các chế độ `warn`/`log`, guardrail ghi log
nhưng vẫn cho phép lệnh gọi. Hàm trợ giúp dùng chung `evaluatePromptInjection()` cũng được xuất
cho các bên gọi cần đánh giá prompt mà không thông qua registry.

**Giới hạn quét (v3.8.20):** bộ phát hiện chỉ kiểm tra **16 KB đầu tiên** của
văn bản prompt đã nối — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) trong
`src/shared/utils/inputSanitizer.ts`. Cả `detectInjection()` và
`evaluatePromptInjection()` đều gọi `slice(0, MAX_INJECTION_SCAN_BYTES)` trước khi chạy
vòng lặp mẫu. Các chỉ thị injection thường nằm gần đầu dữ liệu đầu vào, vì vậy điều này
giới hạn mức sử dụng CPU/GC của regex đối với các payload có kích thước hàng trăm KB mà không làm suy yếu khả năng phát hiện (xem
#3932, #4041).

### Trình che thông tin xác thực (`credentialMasker.ts`)

Chạy ở **cả hai** giai đoạn, cuối cùng trong chuỗi mặc định (độ ưu tiên `95`). Biên tập ẩn
các mẫu API key / secret token phổ biến khỏi payload gửi đi (nội dung thông điệp,
đối số của lệnh gọi công cụ, kết quả công cụ) **và** phản hồi của nhà cung cấp, để thông tin
xác thực được dán vào prompt (hoặc được kết quả công cụ trả lại) không bị rò rỉ
đến nhà cung cấp thượng nguồn hoặc ngược lại về phía máy khách.

- **Chỉ bật khi được yêu cầu**, theo cùng quy ước với việc biên tập ẩn PII (liên quan đến Quy tắc Cứng #20):
  bị tắt trừ khi `settings.credentialRedactionEnabled === true` **hoặc**
  `CREDENTIAL_REDACTION_ENABLED=true`. Khi bị tắt, guardrail không thực hiện thao tác nào —
  không bao giờ chặn và không bao giờ ghi lại nội dung.
- `redactCredentials()` duyệt toàn bộ cây payload/phản hồi (`walkValue()`,
  an toàn trước prototype pollution, an toàn với chu trình nhờ `WeakSet`) và thay thế các kết quả khớp bằng
  placeholder `[REDACTED:<type>]`, chỉ sao chép các nhánh thực sự
  thay đổi.
- `CREDENTIAL_PATTERNS` bao phủ các key của nhà cung cấp LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), key thanh toán (Stripe, Square), key đám mây
  (AWS access key, Twilio, SendGrid, Mailgun), private key / JWT,
  chuỗi kết nối chứa thông tin xác thực (`mongodb://user:pass@...`, v.v.) và
  một mẫu chung cho giá trị header `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Các key có dạng header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) được biên tập ẩn theo cấu trúc (chỉ phần giá trị, vẫn giữ tiền tố scheme như
  `Bearer `/`Basic `) thay vì thông qua regex văn bản chung.
- Guardrail không bao giờ chặn; nó chỉ ghi lại nội dung (`modifiedPayload` /
  `modifiedResponse`) và thêm chú thích (`meta.credentialsRedacted`, `meta.count`).

Bộ kiểm soát hồi quy: `tests/unit/credential-masker-guardrail.test.ts`.

## Hợp đồng cơ sở (`base.ts`)

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
  block?: boolean; // true sẽ dừng chuỗi ngay lập tức
  message?: string; // được hiển thị khi chặn
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // được preCall trả về để ghi lại yêu cầu
  modifiedResponse?: TValue; // được postCall trả về để ghi lại phản hồi
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

Một guardrail biểu thị "không thay đổi" bằng cách trả về `void`, `{}`, hoặc
`{ block: false }`. Việc trả về `modifiedPayload`/`modifiedResponse` sẽ thay thế
giá trị đang truyền qua chuỗi cho các guardrail phía sau.
`signal?: AbortSignal` truyền vòng đời của bên gọi vào các guardrail. Việc hủy yêu cầu là ngoại lệ fail-open có chủ đích: các cầu nối phương tiện sẽ dừng công việc và dọn dẹp mà không khôi phục dữ liệu phương tiện thô cho một đích được biết là không hỗ trợ dữ liệu đó.

## Registry (`registry.ts`)

Singleton `guardrailRegistry` cung cấp:

- `register(guardrail)` — thêm một guardrail (hoặc thay thế theo tên đã chuẩn hóa) và
  sắp xếp lại theo `priority` tăng dần.
- `clear()` / `list()` — các tiện ích quản trị.
- `runPreCallHooks(payload, context)` — lặp qua các guardrail đang hoạt động, truyền
  payload qua `modifiedPayload`, và dừng tại `block: true` đầu tiên.
- `runPostCallHooks(response, context)` — luồng tương tự ở phía phản hồi.
- `resetGuardrailsForTests({ registerDefaults })` — xóa trạng thái và tùy chọn
  đăng ký lại các giá trị mặc định để cô lập kiểm thử một cách sạch sẽ.

Cả hai trình chạy đều trả về `{ blocked, payload|response, results, guardrail?, message? }`,
trong đó `results` là một mảng các bản ghi `GuardrailExecutionResult` bao gồm
các trường `blocked`, `skipped`, `modified`, `error`, và `meta` cho từng guardrail,
hữu ích cho việc truy vết.

### Vô hiệu hóa guardrail theo từng yêu cầu

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` tổng hợp một
danh sách tên guardrail đã loại bỏ trùng lặp cần được bỏ qua đối với yêu cầu
hiện tại. Các nguồn (tất cả đều không bắt buộc và đều được hợp nhất):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` trong phần thân yêu cầu (cấp cao nhất)
- `metadata.disabledGuardrails` trong phần thân yêu cầu
- Header `x-omniroute-disabled-guardrails` (hoặc dạng cũ
  `x-disabled-guardrails`)

Giá trị có thể là mảng chuỗi hoặc chuỗi phân tách bằng dấu phẩy; tên được
chuẩn hóa thành kebab-case viết thường (`pii_masker` → `pii-masker`). Kết quả
được truyền qua `context.disabledGuardrails` tới registry, nơi sẽ bỏ qua
các guardrail khớp tên (`skipped: true` trong `results`).

## Thứ tự thực thi

Đối với mỗi yêu cầu đi qua `src/sse/handlers/chat.ts` và
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` tạo danh sách bỏ qua từ khóa API, phần thân
   và các header.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` chạy các guardrail theo thứ tự
   ưu tiên tăng dần:
   - Các guardrail bị vô hiệu hóa được ghi nhận là `skipped`.
   - `preCall` của mỗi guardrail có thể ghi lại payload thông qua `modifiedPayload`.
   - Guardrail đầu tiên có `block: true` sẽ dừng ngay chuỗi xử lý và handler trả về
     phản hồi từ chối của guardrail.
3. Payload (có thể đã được ghi lại) được chuyển vào quá trình định tuyến kết hợp
   và gửi đến upstream.
4. Sau khi phản hồi được tập hợp, `guardrailRegistry.runPostCallHooks(...)`
   chạy cùng chuỗi đó trên phản hồi. `block: true` tại đây sẽ loại bỏ phản hồi
   từ upstream.

Các guardrail phát sinh ngoại lệ được ghi nhận với `error: <message>` và được ghi log qua
`logger.warn`, nhưng chuỗi vẫn tiếp tục — theo thiết kế fail-open.

## Cấu hình

Các biến môi trường được những guardrail tích hợp sẵn đọc:

| Biến                                  | Được dùng bởi             | Tác dụng                                                                                                        |
| ------------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Đặt thành `false` để vô hiệu hóa hoàn toàn việc phát hiện.                                                      |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Chính sách đối với injection: `warn`, `block` hoặc `log`. Giá trị cũ `redact` không ghi lại văn bản injection.  |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Chế độ cho guard chống injection; đồng thời là cờ tính năng trong DB **ghi đè** các biến môi trường (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Mức độ nghiêm trọng tối thiểu mà `MODE=block` sẽ từ chối: `high` (mặc định), `medium` hoặc `low`.               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Bí danh cũ của `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Khi là `true`, PII trong yêu cầu được che đi (độc lập với chế độ injection).                                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Kiểm soát hành vi che dữ liệu ở phía phản hồi.                                                                  |

Các guardrail Modality Bridge đọc cấu hình thời gian chạy từ kho cài đặt được
DB hỗ trợ (`getSettings()`), không phải từ các biến môi trường. Các khóa chính
của Vision là `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` và
`modalityBridgeCacheMaxEntries`. Các khóa cũ
`visionBridge*` chỉ được chấp nhận làm phương án đọc dự phòng trong một chu kỳ
như đã ghi trong tài liệu; các thao tác ghi từ dashboard sử dụng những khóa
chính. Các giá trị mặc định và trình phân giải dự phòng nằm trong
`src/shared/constants/modalityBridgeDefaults.ts`, còn các hằng số cũ được giữ
lại trong `src/shared/constants/visionBridgeDefaults.ts`.

Audio sử dụng `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` và `modalityBridgeAudioMaxClips`, cùng với các cài
đặt `modalityBridgeCache*` dùng chung. Audio không có cơ chế dự phòng bằng khóa
cũ vì các khóa này được giới thiệu cùng với schema Modality Bridge.

Video sử dụng `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` và
`modalityBridgeVideoTimeout`, cùng với các cài đặt `modalityBridgeCache*` dùng
chung. Tính năng này mặc định bị vô hiệu hóa vì FFmpeg/ffprobe là các dependency
vận hành không bắt buộc, đồng thời việc tạo chú thích cho khung hình làm tăng độ
trễ và chi phí mô hình.

## Guardrail tùy chỉnh

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

Các bước:

1. Tạo `src/lib/guardrails/myGuardrail.ts` mở rộng `BaseGuardrail`.
2. Triển khai `preCall` và/hoặc `postCall`.
3. Đăng ký ngay khi import (thêm từ `registerDefaultGuardrails`) hoặc
   gọi `guardrailRegistry.register(...)` trong thời gian chạy — registry sẽ thay thế
   mọi guardrail trước đó có cùng tên đã chuẩn hóa.
4. Thêm các bài kiểm thử trong `tests/unit/` (các ví dụ hiện có:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Kiểm thử

Sử dụng `resetGuardrailsForTests()` giữa các bài kiểm thử để bắt đầu từ một trạng thái đã biết.
Truyền `{ registerDefaults: false }` để bắt đầu với một registry trống và
chỉ đăng ký các guardrail đang được kiểm thử. Vision Bridge hỗ trợ chèn phần phụ thuộc
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge cung cấp các điểm nối
tương đương cho phần cài đặt, khả năng, lựa chọn mô hình STT, kiểm tra thông tin xác thực
và phiên âm. Do đó, các bài kiểm thử có thể thực thi cả hai luồng mà không cần truy cập
cơ sở dữ liệu hoặc mạng.

## Xem thêm

- `src/lib/guardrails/` — phần triển khai
- `src/shared/utils/inputSanitizer.ts` — bộ phát hiện dùng chung hỗ trợ
  chống chèn prompt và che thông tin nhận dạng cá nhân (PII)
- `src/shared/constants/visionBridgeDefaults.ts` — các giá trị mặc định của Vision Bridge và
  danh sách mô hình bắt buộc sử dụng bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — các giá trị mặc định khi chạy dùng chung cho Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — lớp độc lập (circuit breaker, thời gian chờ)
- `docs/reference/ENVIRONMENT.md` — tài liệu tham khảo đầy đủ về biến môi trường

## Phạm vi route và red-team của guard chống chèn (Giai đoạn 8 · Khối D)

Guard chống chèn (`createInjectionGuard` / `withInjectionGuard`) bao phủ tất cả các route
chấp nhận prompt của người dùng. Guard tuân theo `INJECTION_GUARD_MODE` (mặc định `warn` = chỉ ghi log;
`block` = trả về HTTP 400 `SECURITY_001`).

| Loại              | Route                                                                                                                                                | Chế độ mặc định |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Văn bản (hiện có) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn            |
| Sinh nội dung     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn            |
| Dữ liệu           | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn            |

Quá trình trích xuất văn bản (`extractMessageContents`) bao phủ `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (hằng đêm, `nightly-llm-security.yml`):** promptfoo xác thực rằng mỗi route đều chặn
tập dữ liệu OWASP-LLM khi `INJECTION_GUARD_MODE=block`; garak chạy các phép thăm dò (bỏ qua khi không có secret).
`moderations` được đưa vào để đảm bảo tính nhất quán — các đơn vị vận hành ở chế độ chặn có thể miễn trừ route này thông qua
`resolveDisabledGuardrails`.

Quy trình hằng đêm (`.github/workflows/nightly-llm-security.yml`, cron + kích hoạt thủ công)
có hai job:

- **`promptfoo-guard` (bắt buộc)** — chạy `promptfoo eval -c promptfooconfig.yaml`
  với `INJECTION_GUARD_MODE=block`. Mỗi trường hợp đối kháng (ví dụ: "bỏ qua tất cả
  chỉ dẫn trước đó…", các kiểu jailbreak dạng DAN) xác nhận rằng phản hồi chứa
  `error.code === "SECURITY_001"`, tức là guard thực sự đã từ chối yêu cầu.
- **`garak` (tham khảo)** — chạy garak `--probes promptinject,dan,leakreplay`
  với một phiên bản OmniRoute cục bộ (`http://localhost:20128/v1`). Job này phụ thuộc vào
  secret của nhà cung cấp (`PROMPTFOO_PROVIDER_KEY`); sẽ bỏ qua một cách an toàn khi không có và được thêm hậu tố
  `|| true`, vì vậy job chỉ báo cáo mà không làm CI thất bại.

Phạm vi bao phủ của helper guard (`createInjectionGuard` / `withInjectionGuard`)
trải rộng trên mọi route `/v1` có chứa prompt; văn bản prompt được lấy từ
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` bởi
`extractMessageContents()` trong `src/shared/utils/inputSanitizer.ts`.
