# Guardrails (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sumber kebenaran:** `src/lib/guardrails/`
> **Terakhir dikemas kini:** 2026-08-29 — v3.8.51 (Asal transkrip Video Bridge diisytiharkan oleh pemanggil,
> belum disahkan oleh pelayan — dijelaskan mengikut #11661)

Guardrail menguatkuasakan keselamatan, dasar, dan transformasi kandungan pada sempadan
antara OmniRoute dan penyedia hulu. Setiap guardrail boleh memeriksa (dan
secara pilihan menolak, mengubah, atau menganotasi) muatan permintaan (`preCall`) dan
respons hulu (`postCall`).

Sistem ini adalah **fail-open**: jika guardrail membuang ralat semasa pelaksanaan, pendaftar
merekodkan ralat tersebut dan meneruskan dengan guardrail seterusnya daripada menggagalkan
permintaan. Penyekatan adalah keputusan yang jelas (`block: true`), bukan kemalangan.

## Batasan Terbina Dalam

Daftar secara automatik memuatkan enam batasan mengikut urutan keutamaan semasa import
(lihat `registry.ts` → `registerDefaultGuardrails()`):

| Keutamaan | Nama                | Peringkat      | Fail                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nombor keutamaan yang lebih rendah dijalankan **terlebih dahulu**.

### Jambatan Penglihatan (`visionBridge.ts`) — Jambatan Modaliti PR-1

Memintas permintaan yang mengandungi imej dan ditujukan kepada **model tanpa keupayaan penglihatan**, kemudian sama ada menghalakan semula keseluruhan permintaan kepada model berkeupayaan penglihatan atau menggantikan bahagian imej dengan perihalan teks yang dihasilkan oleh model penglihatan yang boleh dikonfigurasikan sebelum panggilan huluan. Ini membolehkan penyedia teks sahaja mengendalikan muatan berbilang modaliti secara telus.

Aliran:

1. Langkau jika model sasaran sudah menyokong penglihatan (melainkan model tersebut tersenarai dalam senarai jambatan paksa `isVisionBridgeForcedModel`).
2. Ekstrak bahagian imej melalui `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), yang menyerahkan tugas kepada **pengesan media
   bersepadu** `detectMediaParts()` dalam `open-sse/utils/mediaParts.ts` —
   sumber kebenaran tunggal yang dikongsi dengan penapis keserasian kombo.
   Pengekstrakan dihadkan melalui senarai dibenarkan kepada bahagian peringkat teratas dengan bentuk yang
   boleh disisipkan semula oleh `replaceImageParts` (kontrak ekstrak↔ganti): OpenAI
   `image_url`, `source.type:"base64"` base64 Anthropic, URL Anthropic
   `source.type:"url"`, dan `input_image` API Responses. Padanan tersarang dan
   bentuk penunjuk sahaja merupakan bahan untuk penapis kombo dan tidak akan diekstrak.
   Langkau jika tiada yang ditemui.
3. Tentukan konfigurasi masa jalan melalui `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): kunci tetapan `modalityBridge*`
   baharu diutamakan; kunci `visionBridge*` legasi kekal sebagai **sandaran satu
   kitaran** (tetingkap pengembalian). Langkau sebelum sebarang penelusuran media apabila
   jambatan dinyahdayakan.
4. Pemilih mod (`modalityBridgeVisionMode`, lihat jadual di bawah) menentukan
   sama ada hendak menghala semula atau menghuraikan. Penghalaan semula mengembalikan `modifiedPayload` dengan hanya `model`
   ditukar, berserta meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Laluan huraian: hadkan imej kepada `maxImages`, karang gesaan berasaskan tugasan,
   rujuk cache huraian, panggil model penglihatan **secara selari**
   (`Promise.allSettled`), dan sisipkan bahagian teks `[Image N]: <description>` sebagai
   ganti. Huraian yang gagal menghasilkan `null` dan bahagian imej asal akan
   **dikekalkan** (#4012) — kecuali pada laluan huraian kombo apabila semua
   huraian gagal, iaitu huluan yang disahkan tidak berkeupayaan penglihatan akan menerima stub
   `(unavailable — no vision-capable provider connected)` sebagai ganti (#8430).
6. Kembalikan `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Pemilih mod (`modalityBridgeVisionMode`)

| Mod        | Lalai | Tingkah laku                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔     | Heuristik legasi, tidak diubah (#6640/#7204): model bukan kombo/`auto/` dihala semula kepada model penglihatan terbaik melainkan model asal sudah mempunyai kelayakan yang boleh digunakan (kemudian dihuraikan); sasaran kombo sentiasa dihuraikan.                                                                                           |
| `describe` |       | Sentiasa huraikan — blok penghalaan semula dilangkau sepenuhnya; model pilihan pengguna sentiasa memberikan jawapan.                                                                                                                                                                                                                           |
| `reroute`  |       | Paksa penghalaan semula: perlindungan untuk mengekalkan model yang mempunyai kelayakan dipintas. Perlindungan kelayakan **sasaran** penghalaan semula masih terpakai — apabila tiada sasaran penglihatan yang boleh digunakan, permintaan beralih kepada huraian supaya imej mentah tidak sampai kepada bahagian belakang teks sahaja (#8430). |

Mod paksa menghentikan proses lebih awal **sebelum** heuristik auto dijalankan; tingkah laku `auto`
adalah serupa bait demi bait dengan batasan sebelum PR-1.

#### Skop kunci API (`visionBridgeKeyScope.ts`)

Apabila kunci API pemanggil mengehadkan `allowedConnections`, kumpulan kuota
(`allowedQuotas`) atau model (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), jambatan hanya
memilih model penghalaan semula dan huraian yang boleh digunakan oleh kunci tersebut, melalui sambungan yang boleh
digunakan oleh kunci tersebut. Panggilan huraian kemudiannya sentiasa melalui gelung kendiri OmniRoute dengan
pengepala `x-omniroute-self-loop-key-id`, supaya permintaan sembang yang menerima
menguatkuasakan semula dasar sambungan dan model bagi kunci tersebut. `enforceApiKeyPolicy()`
hanya mematuhi pengepala itu apabila disertakan dengan pembawa gelung kendiri, maka ia hanya boleh
mengehadkan akses, dan id yang tidak dapat diselesaikan akan ditolak.

Jika tiada model penglihatan dibenarkan untuk kunci tersebut, laluan huraian tidak mengambil tindakan dan
permintaan diteruskan tanpa perubahan, iaitu tingkah laku gagal-terbuka yang sama seperti batasan yang
dinyahdayakan (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Permintaan tanpa kunci dan kunci tanpa sekatan ini berfungsi sama seperti
sebelumnya.

#### Gesaan huraian berasaskan tugasan (`modalityBridgeVisionTaskAware`)

Nilai lalai ialah **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) menambahkan
teks daripada **mesej pengguna terakhir** (dipenggal kepada 500 aksara) pada
prom penerangan asas, menghalakan penerangan kepada perkara yang sebenarnya diminta
oleh pengguna (corak codex-vision-proxy) dan meminta model penglihatan mentranskripsikan
teks yang kelihatan. Apabila bendera dimatikan — atau tiada teks pengguna — prom asas
digunakan tanpa perubahan.

Permintaan serasi OpenAI milik gelung kendiri penerangan (`callVisionModelSingle()`
dalam `visionBridgeHelpers.ts`) sentiasa meminta `image_url.detail: "high"` —
tanpa syarat, untuk setiap pemanggil/penyedia, dan tidak bergantung pada sebarang isyarat klien.
Pensampelan perincian rendah menjejaskan ketepatan OCR khususnya untuk tugas
transkripsi teks yang diminta oleh prom ini, maka panggilan penerangan itu sendiri
sentiasa meminta perincian tinggi tanpa mengira tahap perincian yang digunakan oleh
permintaan masuk asal. Ini hanya mempengaruhi isi permintaan penerangan dalaman;
ia tidak mengubah cara OmniRoute memajukan `image_url.detail` milik pemanggil dalam
permintaan utama — nilai lalai itu digunakan secara berasingan dan hanya untuk klien
OpenCode yang dikesan, dalam `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Cabang format wayar Anthropic bagi
gelung kendiri penerangan tidak mempunyai medan `detail` dan tidak dipengaruhi oleh
mana-mana nilai lalai tersebut.

#### Had output penerangan (`modalityBridgeVisionMaxChars`)

| Kunci                          | Nilai lalai | Julat              |
| ------------------------------ | ----------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`         | `0` atau 100–50000 |

`0` (nilai lalai) bermaksud **tiada had** — penerangan yang dikembalikan oleh
`callVisionModel()` diteruskan tanpa pengubahsuaian, sekali gus mengekalkan
tingkah laku sedia ada. Sebarang nilai dalam julat 100–50000 akan memenggal
penerangan dengan akhiran `…` sebelum ia disisipkan semula sebagai
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` dalam
`src/lib/guardrails/visionBridge.ts`). Naikkan nilai ini untuk tugas OCR yang
sarat perincian apabila model hiliran memerlukan transkripsi penuh; turunkannya
untuk mengehadkan penggunaan token pada model penglihatan yang banyak menghasilkan
teks. Medan papan pemuka terletak dalam panel Advanced pada tab Vision
(`modality-bridge-max-chars` dalam `ModalityBridgeVisionTab.tsx`) dan mengepit
sebarang nilai antara 1 dengan 99 kepada had bawah 100 sambil membiarkan nilai
`0` yang dinyatakan secara jelas tanpa perubahan — `0` ialah nilai Zod yang sah
dengan sendirinya (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`),
bukan sekadar nilai lalai "tidak ditetapkan".

#### Cache penerangan (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL dalam memori untuk output penerangan, dikongsi pada seluruh proses.
Kunci = `sha256(imageRef + composedPrompt + configuredBridgeModel)` dengan
pembingkaian awalan panjang (tiada perlanggaran sempadan medan). Komponen model ialah
model jambatan yang **dikonfigurasikan**, bukan model yang benar-benar memberikan
jawapan — `callVisionModel` mungkin menggunakan sandaran secara dalaman, dan
penguncian bagi setiap percubaan akan memecah-belahkan cache. Penerangan yang gagal
tidak pernah dicache. Tetapan:

| Kunci                           | Nilai lalai | Julat   |
| ------------------------------- | ----------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`      | —       |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000 |

#### Penormalan imej jauh (penerangan gelung kendiri/pengambilan base64)

Apabila jambatan mengambil sendiri imej **jauh** — panggilan kendiri penerangan
Anthropic dan penukaran base64 format wayar claude
(`ensureBase64ImagesForClaudeWire`), kedua-duanya melalui
`fetchRemoteImageAsDataUri()` dalam `visionBridgeHelpers.ts` — URI data yang terhasil
dilalukan melalui `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) sebelum dibenamkan dalam permintaan model
penglihatan. Imej yang terlalu besar dikecilkan kepada **sisi panjang 2048px**
(sepadan dengan had pengubahan saiz yang telah digunakan oleh OpenAI/Anthropic
pada sisi pelayan), yang mengurangkan bait/masa kependaman muat naik tanpa mengubah
perkara yang dilihat oleh model penglihatan. Pengubahan saiz menggunakan `sharp`,
yang dimuatkan melalui import dinamik: pada platform yang binari natifnya gagal
dimuatkan, `normalizeDataUri()` **tidak pernah melontarkan ralat** — ia kembali
kepada penerusan bait asal tanpa perubahan, supaya laluan penerangan/penukaran
base64 sentiasa terus berfungsi. Bait bukan imej (pengambilan yang tidak
mengembalikan imej yang boleh dinyahkod) juga diteruskan tanpa perubahan.
Penormalan ini dihadkan kepada imej yang diambil oleh jambatan untuk panggilan
kendirinya sendiri — ia tidak pernah digunakan pada muatan terus mentah pemanggil,
selaras dengan prinsip mutasi ikut serta sahaja (Peraturan Tegas #20).

#### Skema tetapan + migrasi

Kunci `modalityBridge*` baharu disahkan oleh Zod dalam `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, dan kumpulan
`modalityBridgeAudio*` yang digunakan oleh Audio Bridge. Migrasi
`141_modality_bridge_settings.sql` menyalin nilai legasi `visionBridge*` sedia ada
kepada kunci baharu yang sepadan (idempoten, tidak pernah menulis ganti nilai
`modalityBridge*` yang ditetapkan oleh pengendali); kunci legasi kekal diterima
sebagai sandaran bacaan untuk satu kitaran keluaran.

#### Pengepala ketelusan + statistik

Respons yang diubah melalui penerangan membawa
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(dibina oleh `buildModalityBridgeHeader()` dalam `modalityBridge/bridgeStats.ts`,
diterapkan oleh `withModalityBridgeHeader()` dalam `src/sse/handlers/chatHelpers.ts`).
Permintaan yang dihalakan semula **tidak** menerima pengepala — muatan tidak diubah
dan pertukaran model sudah pun kelihatan dalam medan `model` pada isi respons.

`GET /api/modality-bridge/stats` (pengesahan pengurusan, aras yang sama seperti
`GET /api/settings`) mengembalikan pembilang dalam memori bagi setiap modaliti
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` untuk `vision`, `audio`, dan
`video`. `averageLatencyMs` menggunakan `latencySamples`, bukannya semua percubaan,
sebagai penyebutnya; operasi tanpa pemasaan tidak mereka sampel sifar milisaat.
`bridged` kekal sebagai alias serasi ke belakang untuk penukaran yang berjaya;
percubaan yang gagal tidak menambah nilainya.
Pembilang ditetapkan semula apabila proses dimulakan semula mengikut reka bentuk
(telemetri, bukan perakaunan).

#### Konfigurasi papan pemuka

Halaman papan pemuka khusus ialah
`/dashboard/settings/modality-bridge`. Tab `Vision`, `Audio`,
dan `Video` yang boleh dialamatkan melalui URL mengekalkan parameter pertanyaan semasa menukar nilai `tab`.
Tab Vision menyediakan pengaktifan, mod, pemilihan model (termasuk lalai
automatik), penggesaan peka tugas, had lanjutan bagi tamat masa/imej/panjang
penerangan/cache, pembilang
masa jalan, dan permintaan sampel yang dilindungi. Tab Audio juga aktif: ia menyediakan
pengaktifan, pemilih model STT sahaja dengan Auto, had tamat masa/klip maksimum, pembilang
audio, dan ujian sampel `input_audio`. Tab Video berfungsi: ia melaporkan
keadaan masa jalan FFmpeg/ffprobe — satu daripada empat keadaan UI yang jelas (`unknown` semasa
siasatan sedang berjalan atau tidak dapat diselesaikan, `restricted` pada hos papan pemuka
bukan gelung balik yang menyebabkan siasatan dilangkau pada sisi klien, `unavailable` selepas disiasat
dan disahkan tiada, atau `available` bersama versi FFmpeg/ffprobe) — menyimpan
had pengaktifan/model/bingkai/video/tamat masa, menapis pemilih model kepada model
berkeupayaan penglihatan, dan menyediakan pembilang video.

Kad Vision Bridge terdahulu di bawah tetapan AI ialah pautan keserasian ke
halaman baharu; ia tidak lagi memiliki salinan kedua borang tersebut. Media Providers juga
memautkan aliran kerja Image-to-Text dan Speech-to-Text kepada tab Modality
Bridge yang sepadan tanpa mengalih keluar ruang uji Speech-to-Text sedia ada.

**Pintasan kemasukan gelung kendiri:** apabila panggilan penerangan dihalakan melalui
gelung kendiri `/v1` milik OmniRoute (model penyedia bukan standard), subpermintaan menghantar
`x-omniroute-admission-bypass: internal` dan disahkan dengan kelayakan
gelung kendiri yang telah ditentukan — penanda `sk_omniroute` setempat dalam mod setempat, atau
kunci persekitaran `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` yang dikonfigurasi oleh pengendali (#1350) supaya
penggunaan `REQUIRE_API_KEY=true` masih boleh menjalankan panggilan penerangan. Pintasan
hanya diterima untuk kelayakan tepat tersebut, maka klien luaran tidak boleh menggunakan
pengepala itu untuk melangkau kemasukan.

Lalai legasi berada dalam `src/shared/constants/visionBridgeDefaults.ts`;
lalai mod/peka tugas/cache baharu dan penyelesai tetapan berada dalam
`src/shared/constants/modalityBridgeDefaults.ts`. Mekanisme kawalan menyediakan pilihan pembina
`deps` supaya ujian boleh menyuntik pelaksanaan `getSettings` dan
`callVisionModel` palsu.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Memintas permintaan sembang yang mengandungi audio sebelum permintaan itu sampai kepada sasaran yang tidak
diketahui menerima input audio. Ia tidak pernah menghala semula permintaan sembang: bahagian audio
ditranskripsikan melalui titik akhir berbilang bahagian serasi OpenAI yang sedia ada dan
model sembang yang dipilih meneruskan pemprosesan dengan transkrip teks.

Aliran:

1. Tentukan `supportsAudio` melalui `getResolvedModelCapabilities()`. Metadata
   pendaftaran penyedia yang jelas diberi keutamaan, diikuti metadata model statik, kemudian
   `modalities_input` yang disegerakkan. Senarai input yang diisytiharkan tanpa `audio` ialah `false`;
   ketiadaan bukti keupayaan kekal sebagai `null`. Kedua-dua `false` dan `null` mengaktifkan
   jambatan konservatif, manakala `true` memintasnya.
2. Tentukan tetapan `modalityBridgeAudio*` dan ekstrak bahagian audio aras atas
   yang boleh dicantum daripada setiap mesej melalui pengesan `detectMediaParts()`
   dikongsi. Bentuk penghantaran yang disokong ialah `input_audio`, `audio_url` OpenAI, dan
   `source.media_type: "audio/*"`. Audio bersarang dikesan untuk penghalaan tetapi tidak
   dialih keluar oleh laluan cantuman. Kerja dihadkan oleh `modalityBridgeAudioMaxClips`;
   bahagian seterusnya dibiarkan tanpa perubahan.
3. Gunakan `provider/model` yang dikonfigurasi, atau benarkan `selectAudioBridgeModel()` menelusuri
   `AUDIO_TRANSCRIPTION_PROVIDERS` mengikut turutan katalog yang stabil dan memilih model pertama
   dengan kelayakan penyedia aktif yang boleh digunakan.
4. `callAudioTranscription()` menukar audio base64/data-URI kepada `file`
   berbilang bahagian, atau memuat turun `audio_url` jauh melalui kawalan keluar khusus awam
   dengan penyematan DNS dan had 25 MB. Ia kemudian menghantar fail dan model yang dipilih
   melalui POST ke gelung kendiri `/v1/audio/transcriptions` setempat, yang disahkan dengan
   `resolveSelfLoopBearer()`. Laluan transkripsi sedia ada menjalankan pencarian
   kelayakan, pengendalian tempoh bertenang/had kadar, dan penghantaran penyedia seperti biasa.
5. Panggilan yang berjaya menggantikan bahagiannya dengan `[Audio N]: <transcript>`. Panggilan
   dijalankan dengan `Promise.allSettled`: kegagalan individu mengekalkan bahagian audio
   asal tersebut (kontrak #4012). Jika setiap panggilan gagal dan sasaran telah dibuktikan
   `supportsAudio === false`, bahagian tersebut menjadi
   `[Audio N]: (unavailable — no STT provider connected)` (kontrak #8430). Bagi
   sasaran yang tidak diketahui (`null`), hasil yang semuanya gagal dibiarkan tanpa perubahan. Sasaran
   teks sahaja yang telah dibuktikan dan tidak mempunyai kelayakan STT yang boleh digunakan menerima stub jelas
   yang sama tanpa membuat panggilan rangkaian.

Transkrip yang berjaya menggunakan cache LRU/TTL Modality Bridge seluruh proses. Kunci
menggabungkan rujukan audio, label operasi `audio-transcription` yang stabil,
dan model STT yang dipilih; kegagalan tidak pernah dicache. Percubaan audio mengemas kini
pembilang dikongsi `bridged`, `cacheHits`, `failures`, dan `lastUsedAt`.
Respons yang diubah membawa
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; permintaan
yang tidak disentuh tidak menerima segmen Audio Bridge.

Tetapan masa jalan disokong pangkalan data dan disahkan oleh Zod:

| Kunci                         | Lalai   | Julat                 |
| ----------------------------- | ------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                     |
| `modalityBridgeAudioModel`    | `""`    | Automatik atau ID STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                  |

Cache dikongsi kekal dikawal oleh `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, dan `modalityBridgeCacheMaxEntries`.

### Jambatan Video (`videoBridge.ts`, `videoBridgePipeline.ts`)

Memintas bahagian video peringkat atas dalam `messages` Chat Completions dan
`input` API Responses sebelum sasaran tanpa sokongan video natif yang diketahui
dipanggil. Bentuk yang disokong ialah `input_video`, `video_url`, `video_source`,
URL HTTPS dan URI data `data:video/*;base64,...`. Nama fail biasa dalam teks tidak
dianggap sebagai video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) mengendalikan perentasan permintaan,
semakan keupayaan/dasar, pengagregatan setiap permintaan dan muatan respons.
Kerja bagi setiap video — pemerolehan, cache hasil penuh, penghuraian jujukan
bingkai (yang menggabungkan sebarang transkrip audio yang diisytiharkan oleh
pemanggil), serta metrik/pembatalan/pembersihan bagi setiap percubaan — disembunyikan
di sebalik `processVideoPart` dalam `videoBridgePipeline.ts`, yang dipanggil sekali
bagi setiap bahagian video dalam gelung `preCall`. Modul itu turut mentakrifkan
sempadan port yang jelas, iaitu `VideoMediaBrokerPort` (memperoleh bait dan mengekstrak
bingkai yang disampel), `VideoAudioTranscriptionPort` (menggabungkan transkrip audio
yang diisytiharkan oleh pemanggil dengan kapsyen yang disampel), dan
`VideoDrilldownPort` (sempadan pengekalan telusur terperinci bingkai; belum
disambungkan kepada `processVideoPart` — hanya laluan berasingan
`/api/modality-bridge/video/drilldown` yang menulis entri telusur terperinci pada
masa ini).

Laluan permintaan awam `/v1` tidak pernah mengimport atau memanggil subproses.
Video jauh dimuat turun dengan had 50 MiB; video base64 sebaris mempunyai had
dinyahkod konservatif sebanyak 36 MiB bagi setiap video supaya sampul
model/mesej/pembingkaian boleh kekal dalam had penerimaan permintaan JSON awam
sebanyak 50 MiB. Anggaran panjang sebaris dan saiz ternyahkod diperiksa sebelum
penguntukan. HTTPS diperlukan pada URL jauh awal dan setiap ubah hala, menggunakan
pengawal keluar awam sahaja yang sedia ada dengan penyematan DNS. Bait tersebut
kemudiannya merentasi sempadan broker dalaman tepat
`POST /api/modality-bridge/video/extract`. Laluan itu ialah `LOCAL_ONLY` dan
`SPAWN_CAPABLE`, hanya menerima permintaan gelung balik dipercayai yang disahkan
bagi setiap proses, dan tidak pernah menerima URL, laluan sistem fail, fail boleh
laku atau senarai argumen. Saluran pemprosesan saiz kandungan API dan pembaca
kandungan berperingkat pengendali masing-masing menguatkuasakan had input broker
50 MiB secara berasingan. Baris giliran terhadnya menjalankan satu pengekstrakan
pada satu-satu masa, membenarkan empat kerja menunggu dan mengehadkan input
menunggu kepada 100 MiB.

Di dalam broker, `ffprobe` membaca fail setempat persendirian; senarai format
dibenarkan yang tetap mengecualikan format senarai main dan manifes. Bagi bekas
keluarga MOV yang dibenarkan, rujukan data MOV luaran kekal dinyahdayakan secara
lalai dan perintah tetap tidak memilih untuk mendayakannya. Kedua-dua `ffprobe`
dan `ffmpeg` menggunakan senarai protokol dibenarkan `file` sahaja, satu bebenang,
tatasusunan argumen tetap, tanpa shell dan fail boleh laku yang diselesaikan
daripada `PATH`. Strim kulit muka bergambar terlampir bukan calon yang boleh
dimainkan. Semua strim yang boleh dimainkan mesti memenuhi had dan strim lalai
yang dinyatakan secara jelas diutamakan sebelum sandaran indeks terendah yang
deterministik. Video dihadkan kepada 600 saat, 8,192 piksel bagi setiap dimensi
dan 33,554,432 piksel sumber. FFmpeg mensampel 1–16 bingkai JPEG pada titik tengah,
mengecilkan tepi panjang kepada maksimum 1,024 piksel tanpa membesarkan input yang
lebih kecil dan tidak pernah menerima URL. Pensampelan ialah `uniform` secara
lalai. Dasar pilihan `scene_aware` dan `segment_aware` percubaan melakukan satu
laluan FFmpeg tetap tambahan terhadap strim setempat yang telah disahkan, memilih
cap masa adegan `showinfo` yang terhad dan beralih secara deterministik kepada
titik tengah seragam yang sama sekiranya pengesan gagal, tamat masa, menghasilkan
output cacat atau set calon kosong. Mod peka segmen memperuntukkan sampel titik
tengah secara berkadar dengan selang adegan yang disahkan; bukti peka segmen dan
tingkah laku sandaran diperincikan di bawah. Had keras 16 bingkai digunakan
selepas pemilihan dalam setiap dasar. Apabila permintaan peka adegan hanya mempunyai
bajet satu bingkai, ia menggunakan titik tengah seragam bagi keseluruhan video aktif
atau tetingkap fokus dan melaporkan `policyEffective: uniform`: satu bingkai adegan
yang dipilih tidak dapat mengekalkan kedua-dua hujung masa. Pemanggil boleh memberikan
tetingkap fokus terhingga (`start`/`end` dalam saat) secara pilihan; sempadan diapit
kepada tempoh media, tetingkap terbalik atau tidak terhingga ditolak dan semua dasar
pensampelan dilaksanakan hanya dalam selang yang dinormalkan. Tetingkap yang terhasil
disertakan dalam metadata pensampelan dan awalan huraian tidak dipercayai supaya
model hiliran dapat membezakan petikan berfokus daripada garis masa penuh.

Fokus kapsyen semantik ialah tetapan berasingan dan eksplisit. Mod analisis lalai
`full` mengekalkan gesaan bingkai sedia ada dan tidak pernah memajukan teks
permintaan kepada model kapsyen. Dalam mod `focused`, jambatan hanya membaca
`text`/`input_text` terkini yang tidak kosong dan dikarang oleh pengguna daripada
bekas Chat atau Responses yang sama, menormalkannya kepada NFC, merapatkan aksara
kawalan dan ruang kosong, serta mengehadkannya kepada 500 titik kod Unicode. Hasil
kosong kembali kepada gesaan `full` yang tepat. Petunjuk yang boleh digunakan
disirikan sebagai JSON dalam blok konteks pengguna tidak dipercayai yang khusus
dan hanya boleh mengutamakan butiran yang dapat diperhatikan; petunjuk itu tidak
boleh mengatasi amaran berasingan supaya tidak mengikuti arahan yang dapat dilihat
atau didengar dalam media. Fokus tekstual tidak pernah menyimpulkan `start`/`end`
atau mengubah pensampel masa.

#### Bukti segmen struktur FU-07

`segment_aware` menggunakan satu laluan praanalisis berbatas ke atas strim video setempat yang telah disahkan. Rantaian penapis tetap mula-mula menskalakan kepada lebar maksimum 320 piksel, mengesan perubahan adegan dan selang beku, kemudian membuat pensampelan pada kadar 1 bingkai sesaat untuk kekaburan, purata luma serta maklumat ruang/masa. Laluan ini dihadkan kepada 600 sampel struktur, satu bebenang FFmpeg/penapis, senarai dibenarkan protokol khusus `file` dan bekas yang sama, had output proses 1 MiB, serta maksimum 30 saat dalam pembatalan/tarikh akhir dikongsi broker. Ia tidak pernah menerima perintah, penapis, laluan atau URL daripada permintaan.

Nilai struktur ialah bukti pensampelan deterministik, bukannya pemahaman semantik video. Nilai tersebut tidak membuat inferens tentang subjek, tindakan, kapsyen, pertuturan atau niat pengguna. Sempadan adegan dan beku membentuk segmen; liputan beku, kekaburan, dedahan, perincian ruang dan perubahan masa hanya mempengaruhi cara belanjawan 1–16 bingkai sedia ada diperuntukkan. Segmen yang beku sepenuhnya dihadkan kepada satu bingkai, manakala segmen tidak beku bersaing untuk baki belanjawan. Apabila bilangan sempadan melebihi bilangan bingkai, liputan garis masa yang seragam dikekalkan supaya potongan pantas pada bahagian awal tidak dapat menyembunyikan segmen panjang di penghujung. Sempadan adegan dalam resolusi analisis 1 saat daripada sempadan beku digabungkan.

Penapis yang tiada, bukti yang rosak/kosong, ralat pengesan atau tamat masa praanalisis berbatas akan gagal secara terbuka kepada dasar titik tengah seragam yang tepat. Pembatalan oleh pemanggil atau tarikh akhir broker tidak gagal secara terbuka: ia menamatkan subproses yang sedang berjalan, menghalang pengekstrakan bingkai seterusnya, dan pepohon sementara peribadi dibuang dalam `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` menjana lekapan FFmpeg sebenar yang deterministik untuk penjimatan panggilan kapsyen selepas penyahduplikasian, peruntukan belanjawan gerakan padat, bukti kekaburan/dedahan/SI-TI, potongan pantas dengan penghujung panjang, dan positif palsu pudar beransur-ansur. Ia merekodkan masa nyata praanalisis dan, jika `/usr/bin/time` tersedia, CPU proses anak serta RSS puncak. Semakan kualitinya hanyalah peramal struktur. Kualiti model kapsyen sebenar kekal `HOLD` kerana abah-abah ini tidak mempunyai titik akhir yang dibenarkan atau penilai beku. Penjimatan kewangan juga kekal `HOLD` melainkan `--caption-cost-per-call-usd` membekalkan anggaran positif per panggilan yang jelas; skrip ini tidak pernah mereka-reka mana-mana hasil tersebut.

Setiap bingkai dihadkan kepada 4 MiB, semua bingkai mentah secara keseluruhan kepada 23 MiB, dan respons broker tersiri kepada 32 MiB. Direktori sementara peribadi dibuang dalam `finally`. OmniRoute tidak menyertakan FFmpeg dan tidak menerima laluan boleh laku tersuai. Sebelum pengapsyenan, jambatan menerapkan laluan penyahduplikasian visual yang konservatif: setiap JPEG dikecilkan kepada penimbal skala kelabu 16×16 dan dibandingkan hanya dengan bingkai terakhir yang dikekalkan. Untuk belanjawan kapsyen diminta yang melebihi satu bingkai, pengekstrakan menyediakan kumpulan calon berbatas sehingga dua kali ganda belanjawan tersebut dan tidak pernah melebihi 16 bingkai. Had yang diminta hanya diterapkan selepas penyahduplikasian, dengan calon pertama dan terakhir yang dipilih dikekalkan semasa penjarangan akhir apabila belanjawan sekurang-kurangnya dua. Dasar berversi `grayscale-16x16-mean-cells-v2` menggunakan nilai yang lebih besar antara delta luma min dengan nisbah sel imej kecil yang delta ternormalnya sekurang-kurangnya 0.05. Ambang pendua ialah pemalar 0.04, dipilih demi kebolehramalan dan bukannya didedahkan sebagai tetapan masa jalan. Isyarat sekunder berkontras tinggi ini mengekalkan gerakan kecil dan perubahan teks yang kelihatan yang mungkin disembunyikan oleh perbandingan berasaskan min sahaja. Ralat pembanding atau penyahkod gagal secara terbuka dan mengekalkan liputan. Metadata output memisahkan calon yang diekstrak, bingkai yang berjaya digunakan dan pendua visual yang digugurkan.

Bahagian video yang ditandakan secara jelas boleh meminta helaian kenalan bercap masa. Jambatan membina grid JPEG dengan maksimum 4 lajur dan 16 bingkai. Setiap sel 512 piksel menerapkan cap masa sumbernya pada jalur bawah berkontras tinggi, manakala cap masa yang sama kekal dalam metadata tekstual untuk perkaitan dan audit hiliran. JPEG lengkap kekal dihadkan kepada 32 MiB. Jika `sharp` tidak dapat menyahkod atau menggubah grid, jambatan kembali menggunakan bingkai JPEG individu; pembatalan klien masih disebarkan melalui operasi helaian tersebut.

Bukti promosi sengaja diasingkan daripada penanda aras mikro penggubahan sintetik. `scripts/perf/video-bridge-contact-sheet-eval.ts` mentakrifkan abah-abah A/B berversi skema untuk model penglihatan sebenar yang serasi dengan OpenAI. Ia mengukur token yang dilaporkan penyedia, kependaman masa nyata hujung ke hujung (termasuk penggubahan helaian), bilangan panggilan model dan pengekalan fakta yang ditakrifkan oleh manifes. Respons mentah model tidak ditulis ke dalam laporan; hanya cernaan SHA-256 dan ID fakta yang sepadan dikekalkan. Abah-abah tidak membuat sebarang panggilan rangkaian atau model berbayar melainkan `--execute-real` diberikan dan `--model`, `OMNIROUTE_BASE_URL`, serta `OMNIROUTE_API_KEY` dikonfigurasikan. Tanpa pelaksanaan sebenar yang jelas itu, keputusan boleh dibaca mesinnya kekal `HOLD`; ukuran muatan/bilangan panggilan sintetik sahaja bukan bukti promosi.

Pemanggil boleh melampirkan tatasusunan pilihan `transcript.cues` pada bahagian video yang disokong apabila mereka sudah memiliki teks yang diselaraskan. Setiap petunjuk mesti mengandungi `text`, selang `start`/`end` terhingga dalam tempoh yang diselidik, dan `source` yang disenaraikan dalam senarai dibenarkan (`client`, `embedded` atau `audio-bridge`); `confidence` secara lalai ialah `1` dan mesti kekal antara `0` dengan `1`. Petunjuk pendua tepat dirangkumkan. OmniRoute tidak pernah memulakan transkripsi daripada metadata ini: petunjuk yang disahkan disalin ke dalam hasil yang dihuraikan bersama sumber, keyakinan dan selang, serta dipaparkan sebagai pemerhatian tidak dipercayai di samping kapsyen bingkai. Teks yang tidak sah, di luar julat atau tanpa asal usul ditolak dan bukannya dicampurkan ke dalam strim kapsyen. Kedua-dua saluran transkrip badan permintaan menormalkan asal usul yang dibekalkan kepada `client`, termasuk label `embedded` atau `audio-bridge` yang didakwa sendiri. Hanya penyesuai milik pelayan boleh menetapkan label dipercayai tersebut melalui argumen khusus kod `trustedSource`; medan JSON permintaan tidak boleh mencapai argumen tersebut. Teks transkrip kekal sebagai kandungan tidak dipercayai yang berasal daripada media, tanpa mengira asal usulnya, dan tidak boleh sekali-kali menentukan kebenaran.

Pemanggil lanjutan boleh menyediakan trek `audioTranscript` untuk video yang sama;
ia dianggap sebagai teks yang disediakan oleh klien, bukan bukti transkripsi pelayan.
Titik gabungan menjalankan pemerhatian visual dan audio di bawah
satu tarikh akhir dan isyarat batal, menyusunnya pada garis masa yang sama, menggabungkan
pendua tepat, dan melaporkan hasil separa apabila hanya satu pihak berjaya.
`audioTranscript` yang tidak sah merosot kepada hasil separa tersebut — perihalan
visual dikekalkan dan cabang audio merekodkan kod kegagalan yang disanitasi —
dan bukannya menggagalkan keseluruhan video. Ketersediaan setiap cabang, bendera separa,
dan kod kegagalan yang disanitasi dikekalkan dalam hasil yang diperihalkan, dalam
metadata pagar keselamatan (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), dalam metadata cache hasil, dan dalam pembilang
gabungan jambatan. Laluan Video Bridge lalai tidak menggunakan pertuturan-ke-teks
atau memuat turun salinan media kedua; tanpa trek eksplisit tersebut, ia kekal
sebagai video sahaja.

**Pengekalan transkrip (#12150 P1).** Ini digunakan secara automatik apabila
Video Bridge (yang juga memerlukan pengaktifan) memaparkan petunjuk transkrip — tiada
bendera pengekalan berasingan. Apabila permintaan memaparkan sebarang petunjuk transkrip (`transcript`
yang diisytiharkan pemanggil atau `audioTranscript` yang digabungkan), pagar keselamatan menandakannya sebagai
`videoBridgeObserved` dan menghasilkan salinan bayangan perihalan video yang telah disunting —
paparan seiras yang menggantikan isi teks bebas setiap petunjuk dengan
`[redacted-video-transcript]`, dibina dengan menggantikan medan petunjuk berstruktur
sebelum rentetan dipasang (tidak sekali-kali dengan menghuraikan teks yang telah diratakan, supaya tiada kandungan
petunjuk — sama ada bersifat adversarial atau biasa, termasuk isi yang mengandungi `]` seperti
`[inaudible]`/`[music]` — boleh kekal). Isi permintaan log panggilan yang disimpan menukar
setiap bahagian teks yang diterbitkan daripada video dengan salinan bayangan yang telah disunting itu, dipadankan
berdasarkan kesamaan kandungan; penambat `fullText` dibaca semula daripada muatan pagar keselamatan
pra-panggilan yang telah selesai, supaya padanan masih berjaya selepas pagar keselamatan rantaian berikutnya
(penyamar PII dan kelayakan, keutamaan 10/95) menulis semula teks perihalan di tempatnya dan
selepas penyuntikan gesaan sistem/serahan/memori membentuk semula tatasusunan mesej. Isi
yang dihantar ke hulu kepada model tidak berubah. Permintaan yang diperhatikan juga tidak mengisi
sebarang Memory kekal (pengekstrakan yang diterbitkan daripada permintaan dan respons kedua-duanya dilangkau),
supaya balasan model sendiri tidak boleh menggemakan teks transkrip ke dalam Memory.

**Medan video mentah (#12430).** Apabila jambatan didayakan dan sokongan video natif tidak diketahui atau tiada, medan `transcript`/`audioTranscript` yang ditakrifkan turut mengaktifkan `videoBridgeObserved`, walaupun selepas kegagalan perihalan atau had `maxVideos`. `null` dan rentetan kosong dikira; medan yang tiada dan metadata bukan video tidak dikira. Salinan yang dikekalkan menyunting medan ini atau menggugurkan permintaan, dan cache/Memory dipintas.

Pada laluan sandaran tersebut, petunjuk pemanggil yang sah menjadi bahagian `text`/`input_text`
yang disokong dan bukannya medan penyedia bukan standard. Kedua-dua trek yang dibekalkan oleh permintaan
kekal sebagai pemerhatian `client` yang tidak dipercayai, dengan amaran eksplisit bahawa video
tidak diperihalkan dan cap masa tidak disahkan terhadap media. Had sedia ada
256 petunjuk/64-KiB secara keseluruhan dan bagi setiap petunjuk digunakan merentasi kedua-dua trek secara bersama;
cap masa mesti mematuhi had maksimum 600 saat broker dan sebarang tetingkap fokus
yang dibekalkan. Trek yang tidak sah dibuang, bukan dimajukan sebagai teks sewenang-wenangnya; trek pasangan
yang sah masih boleh digunakan melainkan belanjawan gabungannya dilebihi. Medan null/kosong
tidak menambah teks. Tiada pengambilan media atau transkripsi ditambahkan oleh sandaran ini.
Medan sambungan transkrip dialih keluar daripada pembawa video sandaran dan objek
`video_url`/`source` miliknya. Senarai izin wayar OpenAI kekal ketat; pembawa video
natif tidak diketahui kekal tersedia dan sasaran teks sahaja yang diketahui mengekalkan penanda selamat.
Salinan bayangan penyuntingan berstruktur melindungi teks transkrip yang dilampirkan, manakala
permintaan asal milik pemanggil kekal tidak berubah. Sasaran yang menyokong ciri natif dan
jambatan yang dilumpuhkan mengekalkan tingkah laku pintasan sedia ada.

Salinan tambahan yang dikekalkan menggunakan isyarat permintaan diperhatikan yang sama. Petikan
permintaan klien mentah sebelum pagar keselamatan, permintaan belum selesai dalam memori, dan log
permintaan ditolak awal menggantikan medan transkrip secara berstruktur dalam bahagian video;
gesaan rentetan yang disintesis oleh peringkat saluran paip dan serahan konteks disunting
pada destinasi isi permintaan tersimpan. Penanda `video_content_removed` yang disimpan
menyebabkan kesinambungan `previous_response_id` gagal secara tertutup dan bukannya membina semula
teks yang sengaja dibuang. Jika permintaan yang diperhatikan kehilangan
salinan bayangan penyuntingan bagi setiap bahagian sebelum pengelogan, atau walaupun hanya satu daripada beberapa salinan bayangan video
gagal dipadankan selepas mutasi permintaan berikutnya, isi permintaan yang dikekalkan
digugurkan sepenuhnya dan bukannya mengekalkan transkrip yang hanya disunting sebahagian.

Bagi permintaan yang diperhatikan, respons model mungkin memetik mana-mana bahagian
transkrip tanpa sempadan petunjuk berstruktur. Oleh itu, `responseBody` log panggilan
yang disimpan digantikan dengan penanda pengguguran; artifak saluran paip terperinci
(yang boleh merangkumi isi huluan/klien dan cebisan strim) tidak dikekalkan.
Cache semantik, idempotensi, dan main semula penaakulan memintas bacaan dan penulisan
bagi permintaan tersebut. Permintaan penyedia dan respons yang dapat dilihat klien
kekal tidak berubah. Bait keepalive awal disalirkan daripada penimbal sementara
apabila artifak terperinci digugurkan. Amaran EventStream Kiro yang cacat
hanya melaporkan kiraan bait muatan, tidak sekali-kali kandungannya atau ralat mentah
penghurai JSON.
Ini tidak mendakwa bahawa setiap diagnostik penyedia/pemalam yang tidak berkaitan telah
diaudit; semakan menyeluruh destinasi tersimpan yang lebih luas dijejak dalam #11658.

Kitaran hayat dalaman `/api/modality-bridge/video/drilldown` ialah substrat cache berasingan yang diautentikasi melalui gelung balik/token. Setiap operasi juga memerlukan ID prinsipal legap berkanun. Sebelum pemanggil produksi didayakan, ia mesti memperoleh ID tersebut daripada penyewa yang diautentikasi dan tidak boleh sesekali memajukan nilai yang dipilih oleh klien. Kunci cache mengikat prinsipal tersebut kepada ID sesi dan rujukan video berkanun, hanya menyimpan kunci terbitan SHA-256 bagi ID tersebut, serta mengehadkan skop bacaan dan pemadaman kepada prinsipal yang sama. Cache menyimpan paling banyak 16 bingkai JPEG terbitan bagi setiap entri, meluputkannya selepas sepuluh minit, dan menyokong bacaan `start`/`end` yang dibataskan atau pemadaman sesi secara eksplisit.

Setiap prinsipal dihadkan kepada 16 entri dan 64 MiB data JPEG berkanun. Had tersebut adalah bebas daripada had keseluruhan global sebanyak 64 entri/256 MiB: tekanan kuota prinsipal hanya menyingkirkan entri yang paling lama tidak digunakan bagi prinsipal tersebut sebelum penyingkiran LRU global dipertimbangkan. Entri yang telah luput disingkirkan daripada perakaunan prinsipal dan global semasa aktiviti cache, manakala pembatalan dan kegagalan pengesahan tidak melakukan komit penggantian separa.

Cache menolak Base64 yang tidak berkanun, pelapik berlebihan, media bukan JPEG, JPEG yang rosak atau terpotong, dan JPEG yang menghasilkan amaran semasa penyahkodan imej penuh `sharp` yang dibataskan. Ia mengekod semula setiap imej yang diterima sebagai JPEG berkanun, memperoleh lebar dan tinggi daripada bait yang dinyahkod dan bukannya mempercayai medan pemanggil, serta membuang sebarang bait poliglot di hujung dan bukannya mengekalkannya. Hanya penimbal termampat berkanun yang dibataskan dicaj kepada kedua-dua kuota. Had penghantaran JSON merangkumi overhed Base64 bagi had input ternyahkod 32 MiB. Setiap terbitan yang disimpan merekodkan format/resolusi JPEG yang disahkan, dasar pensampelan, versi terbitan, masa penciptaan, cincangan kandungan yang dikira oleh pelayan, serta rujukan induk yang dicincang berserta cincangan kandungan induk daripada pemanggil yang dipercayai. Pembatalan diperiksa antara fasa penyahkodan/cincangan tak segerak sebelum komit cache atomik.

Tranche ini belum menghubungkan pengeluar produksi kepada laluan tersebut dan tidak menyediakan pemilihan varian berbilang resolusi. Oleh itu, laluan permintaan Video Bridge yang telus tidak menanggung kerja tambahan, manakala penerbitan prinsipal terikat penyewa dan keseluruhan kitaran hayat berbilang resolusi FU-08 kekal sebagai kerja susulan yang nyata dan bukannya didokumentasikan sebagai tingkah laku yang telah lengkap.

Bingkai diberikan kapsyen secara berurutan menggunakan model Video yang dikonfigurasikan. Penggantian Video yang kosong mewarisi tetapan Vision; jika kedua-duanya kosong, penghala automatik Vision memilih model berkeupayaan penglihatan yang berkesan. Kapsyen yang berjaya menggantikan bahagian asal dengan awalan `[Video description:` yang stabil, yang turut menandakan teks tersebut sebagai pemerhatian tidak dipercayai yang diterbitkan daripada media dan mengarahkan model hiliran agar tidak mengikut arahan yang ditemui dalam media. Kunci cache kapsyen bingkai merangkumi bait JPEG, gesaan, cap masa dan model berkesan; hanya kapsyen yang berjaya dicache. Entri cache mengekalkan model pengeluar sebenar yang berjaya, termasuk model sandaran; jambatan melaporkan `mixed` apabila bingkai yang berbeza dihasilkan oleh model yang berbeza. Padanan cache menggunakan semula identiti pengeluar tersebut dan bukannya melabelkannya semula sebagai pelan penghalaan yang diminta. Cache hasil keseluruhan video dikuncikan berdasarkan setiap input yang mengubah output — gesaan, model berkesan, dasar pensampelan, bilangan bingkai, mod analisis semantik, cap jari SHA-256 bagi petunjuk fokus ternormal, tetingkap fokus, `transcript`, `audioTranscript`, dan bendera helaian kenalan — maka perubahan pada mana-mana dimensi tersebut menghasilkan kegagalan padanan cache, bukannya penggunaan semula data lapuk. Versi dasar penyahduplikasian visual, ambang dan bilangan bingkai calon yang dibataskan juga dinyatakan secara eksplisit dalam kunci dan metadata cache hasil; oleh itu, perubahan dasar tidak boleh menggunakan semula perihalan keseluruhan video yang lapuk. Metadata v4 cache hasil mengekalkan mod dan cap jari, tetapi tidak pernah menyimpan tugas mentah pengguna. Metadata pagar keselamatan melaporkan kedua-dua mod analisis yang diminta dan yang berkesan; mod `focused` yang diminta tanpa teks pengguna yang boleh digunakan dilaporkan sebagai `full` secara berkesan.

Pagar keselamatan mengekstrak setiap bahagian video yang disokong tetapi tidak menghuraikan lebih daripada `modalityBridgeVideoMaxVideos`. Bagi sasaran yang terbukti mempunyai `supportsVideo === false`, video yang gagal dan melebihi had menjadi penanda teks selamat yang eksplisit supaya tiada video mentah kekal. Apabila keupayaan tidak diketahui, bahagian tersebut mengekalkan pembawa videonya; sebarang transkrip sandaran mengikut penukaran teks berbatas di atas. Sasaran dengan `supportsVideo === true` memintas jambatan. Isyarat henti permintaan klien dirambatkan melalui muat turun, baris gilir broker, subproses dan panggilan kapsyen; penghentian menghentikan proses antara video dan tidak sekali-kali gagal secara terbuka kepada media mentah.

Tetapan masa jalan disokong DB dan disahkan oleh Zod:

| Kunci                               | Lalai       | Julat / tingkah laku                                                                                                |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Masa jalan pilihan, ikut serta                                                                                      |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` mengekalkan kapsyen generik; `focused` menggunakan konteks pengguna terkini yang terhad dan tidak dipercayai |
| `modalityBridgeVideoModel`          | `""`        | Mewarisi model Vision Bridge                                                                                        |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, atau `segment_aware` berkadar; kegagalan pengesan kembali kepada `uniform`                |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                 |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                      |

Nilai tamat masa Video legasi yang tersimpan dan melebihi 120 saat dihadkan kepada
tarikh akhir broker; penulisan tetapan baharu yang melebihi had tersebut ditolak.
`GET /api/modality-bridge/video/runtime` memerlukan lokaliti gelung balik bercap
yang dipercayai sebelum pengesahan atau pemeriksaan masa jalan, kemudian memerlukan
pengesahan pengurusan. Ia hanya mengembalikan `available`, versi FFmpeg/ffprobe
yang telah disanitasi dan sebab tetap apabila masa jalan tidak tersedia. Titik akhir
pengekstrakan dalaman bukan API muat naik awam: ketepuan baris gilir mengembalikan
`503` bersama `Retry-After`, pemutusan sambungan oleh pemanggil mengembalikan `499`,
dan tarikh akhir broker yang tetap mengembalikan `504`. Respons yang ditukar menambahkan
`video->text;model=<visionModel>;parts=<videos>` pada pengepala pusat
`x-omniroute-modality-bridge` tanpa mengalih keluar segmen Vision atau Audio.

### Penyamaran PII (`piiMasker.ts`)

Berjalan pada **kedua-dua** peringkat.

- **`preCall`** mengklon muatan, menelusuri `system`, `messages`, `input` dan
  `prompt` (termasuk item rentetan biasa), serta menggunakan `processPII()` (daripada
  `@/shared/utils/inputSanitizer`) pada medan `content`/`text` jenis rentetan. Apabila
  `PII_REDACTION_ENABLED=true`, PII yang dikesan disunting dalam muatan keluar.
  Ini tidak bergantung pada `INPUT_SANITIZER_MODE` (yang hanya mengawal dasar
  suntikan prom). Apabila penyuntingan dimatikan, panggilan merekodkan bilangan
  pengesanan tanpa menulis semula kandungan.
- **`postCall`** mengklon respons secara mendalam, menjalankan `sanitizePIIResponse()`
  bersama penyamar bentuk Responses API (`maskResponsesOutput` — merangkumi
  `output_text` dan `output[].content[].text`). Jika sebarang penyuntingan berlaku,
  respons yang diubah suai menggantikan respons asal.

Kawalan keselamatan ini tidak pernah menyekat; ia hanya menganotasi (`meta.detections`,
`meta.redacted`) atau menulis semula.

### Suntikan Prom (`promptInjection.ts`)

Mengesan struktur berbahaya dalam kandungan yang diberikan pengguna dan menguatkuasakan
dasar yang dikonfigurasikan. Tingkah laku ditentukan oleh pemboleh ubah persekitaran dan
pilihan pembina:

| Tetapan        | Pemboleh ubah persekitaran                                                                             | Lalai  | Kesan                                                                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Didayakan      | `INPUT_SANITIZER_ENABLED`                                                                              | `true` | Apabila `false`, kawalan keselamatan memintas pemprosesan.                                                                                                                                                   |
| Mod            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn` | Dasar suntikan: `block`, `warn`, atau `log`. (`redact` diterima untuk keserasian ke belakang tetapi **tidak** membuang teks suntikan; penulisan semula PII permintaan dikawal oleh `PII_REDACTION_ENABLED`.) |
| Ambang sekatan | pilihan `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Tahap keterukan minimum yang diperlukan untuk menyekat. Tahap sederhana hanya diperhatikan secara lalai.                                                                                                     |

**Keutamaan mod** (`getMode`): `options.mode` pemanggil →
penggantian **bendera ciri DB** `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → persekitaran `INJECTION_GUARD_MODE` → persekitaran
`INPUT_SANITIZER_MODE` → `warn`. Oleh itu, penggantian papan pemuka mengatasi
pemboleh ubah persekitaran, maka UI Feature Flags mengawal kawalan keselamatan
yang sedang berjalan secara langsung (tanpa mulakan semula). Pembacaan DB adalah
selamat daripada kegagalan: jika ralat berlaku, kawalan keselamatan kembali kepada
tingkah laku berasaskan persekitaran, dan apabila tiada penggantian ditetapkan,
tingkah lakunya sama dengan penyelesaian berasaskan persekitaran sahaja.

Sumber pengesanan:

1. `sanitizeRequest()` daripada `@/shared/utils/inputSanitizer` (set pengesan
   dikongsi yang digunakan di bahagian lain dalam perancangan).
2. `DEFAULT_GUARD_PATTERNS` terbina dalam (kini `system_override_inline` dan
   `markdown_system_block`, kedua-duanya berketerukan `high`).
3. `customPatterns` pilihan yang dihantar melalui pilihan pembina (rentetan, regex,
   atau rekod `{ name, pattern, severity }`).

Apabila `mode === "block"` **dan** sekurang-kurangnya satu pengesanan memenuhi ambang
keterukan, `preCall` mengembalikan `{ block: true, message: "Permintaan ditolak:
kandungan mencurigakan dikesan" }`. Dalam mod `warn`/`log`, pagar keselamatan merekodkan log tetapi
membenarkan panggilan tersebut. Pembantu dikongsi `evaluatePromptInjection()` turut dieksport
untuk pemanggil yang perlu menilai gesaan tanpa melalui registri.

**Had imbasan (v3.8.20):** pengesan hanya memeriksa **16 KB pertama** daripada
teks gesaan yang digabungkan — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bait) dalam
`src/shared/utils/inputSanitizer.ts`. Kedua-dua `detectInjection()` dan
`evaluatePromptInjection()` menjalankan `slice(0, MAX_INJECTION_SCAN_BYTES)` sebelum melaksanakan
gelung corak. Arahan suntikan terletak berhampiran bahagian atas input, maka ini
mengehadkan penggunaan CPU/GC regex untuk muatan bersaiz ratusan KB tanpa melemahkan pengesanan (rujuk
#3932, #4041).

### Penyamar Kelayakan (`credentialMasker.ts`)

Dijalankan pada **kedua-dua** peringkat, terakhir dalam rantaian lalai (keutamaan `95`). Menyunting
corak kunci API / token rahsia yang terkenal daripada muatan keluar (kandungan
mesej, argumen panggilan alat, hasil alat) **dan** respons penyedia, supaya
kelayakan yang ditampal ke dalam gesaan (atau digemakan semula oleh hasil alat) tidak terbocor
kepada penyedia huluan atau kembali kepada klien.

- **Ikut serta sahaja**, konvensyen yang sama seperti penyuntingan PII (bersebelahan Peraturan Tegas #20):
  dilumpuhkan melainkan `settings.credentialRedactionEnabled === true` **atau**
  `CREDENTIAL_REDACTION_ENABLED=true`. Apabila dimatikan, pagar keselamatan tidak melakukan apa-apa —
  ia tidak pernah menyekat dan tidak pernah menulis semula.
- `redactCredentials()` merentasi keseluruhan pepohon muatan/respons (`walkValue()`,
  selamat daripada pencemaran prototaip, selamat daripada kitaran melalui `WeakSet`) dan menggantikan padanan dengan
  ruang letak `[REDACTED:<type>]`, dengan hanya mengklon cabang yang benar-benar
  berubah.
- `CREDENTIAL_PATTERNS` merangkumi kunci penyedia LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), kunci pembayaran (Stripe, Square), kunci
  awan (kunci akses AWS, Twilio, SendGrid, Mailgun), kunci peribadi / JWT,
  rentetan sambungan yang mengandungi kelayakan (`mongodb://user:pass@...`, dan sebagainya), serta
  corak nilai pengepala generik `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Kunci berbentuk pengepala (`authorization`, `x-api-key`, `api-key`,
  `apikey`) disunting secara berstruktur (nilai sahaja, awalan skema seperti
  `Bearer `/`Basic ` dikekalkan), bukannya melalui regex teks generik.
- Pagar keselamatan tidak pernah menyekat; ia hanya menulis semula (`modifiedPayload` /
  `modifiedResponse`) dan menambahkan anotasi (`meta.credentialsRedacted`, `meta.count`).

Pengawal regresi: `tests/unit/credential-masker-guardrail.test.ts`.

## Kontrak Asas (`base.ts`)

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
  block?: boolean; // true memintas terus rantaian
  message?: string; // dipaparkan apabila disekat
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // dikembalikan oleh preCall untuk menulis semula permintaan
  modifiedResponse?: TValue; // dikembalikan oleh postCall untuk menulis semula respons
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

Sesuatu guardrail menandakan "tiada perubahan" dengan mengembalikan sama ada `void`, `{}`, atau
`{ block: false }`. Pengembalian `modifiedPayload`/`modifiedResponse` menggantikan
nilai yang mengalir melalui rantaian untuk guardrail hiliran.
`signal?: AbortSignal` membawa kitaran hayat pemanggil ke dalam guardrail. Pembatalan permintaan ialah pengecualian fail-terbuka yang disengajakan: jambatan media menghentikan kerja dan melakukan pembersihan tanpa memulihkan media mentah kepada sasaran yang diketahui tidak menyokongnya.

## Pendaftar (`registry.ts`)

`guardrailRegistry` singleton mendedahkan:

- `register(guardrail)` — menambah (atau menggantikan mengikut nama yang dinormalisasi) guardrail dan
  menyusun semula mengikut `priority` menaik.
- `clear()` / `list()` — pembantu pentadbiran.
- `runPreCallHooks(payload, context)` — mengulangi guardrail aktif, mengalirkan
  payload melalui `modifiedPayload`, dan berhenti pada `block: true` yang pertama.
- `runPostCallHooks(response, context)` — aliran yang sama di bahagian respons.
- `resetGuardrailsForTests({ registerDefaults })` — mengosongkan keadaan dan secara pilihan
  mendaftar semula lalai untuk pengasingan ujian yang bersih.

Kedua-dua pelari mengembalikan `{ blocked, payload|response, results, guardrail?, message? }`
di mana `results` adalah tatasusunan rekod `GuardrailExecutionResult` yang merangkumi
medan `blocked`, `skipped`, `modified`, `error`, dan `meta` bagi setiap guardrail,
berguna untuk pengesanan.

### Melumpuhkan Guardrail Setiap Permintaan

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` mengagregatkan
senarai nama guardrail yang tidak diduplikasi yang harus dilangkau untuk permintaan semasa. Sumber (semua pilihan, semua digabungkan):

- `apiKeyInfo.disabledGuardrails`
- Badan permintaan `disabledGuardrails` (peringkat atas)
- Badan permintaan `metadata.disabledGuardrails`
- Header `x-omniroute-disabled-guardrails` (atau warisan
  `x-disabled-guardrails`)

Nilai boleh berupa tatasusunan rentetan atau rentetan yang dipisahkan koma; nama
dinormalisasi kepada kebab-case huruf kecil (`pii_masker` → `pii-masker`). Hasilnya
dihantar melalui `context.disabledGuardrails` ke pendaftar, yang melangkau
guardrail yang sepadan (`skipped: true` dalam `results`).

## Urutan Pelaksanaan

Untuk setiap permintaan yang mengalir melalui `src/sse/handlers/chat.ts` dan
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` membina senarai langkau daripada kunci API, badan,
    dan pengepala.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` menjalankan guardrail mengikut
    susunan keutamaan menaik:
    - Guardrail yang dilumpuhkan direkodkan sebagai `skipped`.
    - `preCall` setiap guardrail mungkin menulis semula muatan melalui `modifiedPayload`.
    - `block: true` yang pertama akan memendekkan rantaian dan pengendali mengembalikan
      respons penolakan guardrail.
3.  Muatan (yang berpotensi ditulis semula) mengalir ke dalam penghalaan kombo dan
    penghantaran huluan.
4.  Selepas respons dipasang, `guardrailRegistry.runPostCallHooks(...)`
    menjalankan rantaian yang sama pada respons. `block: true` di sini menggugurkan
    respons huluan.

Guardrail yang membuang ralat direkodkan dengan `error: <message>` dan dicatat melalui
`logger.warn`, tetapi rantaian berterusan — reka bentuk fail-open.

## Konfigurasi

Pembolehubah persekitaran yang dibaca oleh guardrail terbina dalam:

| Pembolehubah                          | Digunakan oleh        | Kesan                                                                                                      |
| :------------------------------------ | :-------------------- | :--------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`    | Tetapkan `false` untuk melumpuhkan pengesanan sepenuhnya.                                                  |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`    | Polisi suntikan: `warn`, `block`, atau `log`. Nilai warisan `redact` tidak menulis semula teks suntikan.   |
| `INJECTION_GUARD_MODE`                | `prompt-injection`    | Mod untuk pengawal suntikan; juga bendera ciri DB yang **mengatasi** pembolehubah persekitaran (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`    | Keterukan minimum yang `MODE=block` tolak: `high` (lalai), `medium`, atau `low`.                           |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`    | Alias warisan untuk `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                     |
| `PII_REDACTION_ENABLED`               | `pii-masker`          | Apabila `true`, PII permintaan disunting (tidak bergantung pada mod suntikan).                             |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (huluan) | Mengawal tingkah laku masker di sisi respons.                                                              |

Guardrail Modality Bridge membaca konfigurasi masa jalan daripada stor tetapan yang disokong DB
(`getSettings()`), bukan pembolehubah persekitaran. Kunci utama Vision ialah
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, dan
`modalityBridgeCacheMaxEntries`. Kunci `visionBridge*` warisan diterima hanya sebagai
penyelesaian sandaran bacaan satu kitaran yang didokumenkan; penulisan papan pemuka menggunakan
kunci utama. Nilai lalai dan penyelesaian sandaran terdapat dalam
`src/shared/constants/modalityBridgeDefaults.ts`, dengan pemalar warisan dikekalkan dalam
`src/shared/constants/visionBridgeDefaults.ts`.

Audio menggunakan `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, dan `modalityBridgeAudioMaxClips`, serta tetapan
`modalityBridgeCache*` yang dikongsi. Audio tidak mempunyai sandaran kunci warisan kerana
kunci-kunci ini diperkenalkan dengan skema Modality Bridge.

Video menggunakan `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, dan
`modalityBridgeVideoTimeout`, serta tetapan `modalityBridgeCache*` yang dikongsi.
Ia dilumpuhkan secara lalai kerana FFmpeg/ffprobe adalah kebergantungan operasi pilihan
dan kapsyen bingkai menambah kependaman serta kos model.

## Pengawal Tersuai

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

Langkah-langkah:

1.  Cipta `src/lib/guardrails/myGuardrail.ts` yang melanjutkan `BaseGuardrail`.
2.  Laksanakan `preCall` dan/atau `postCall`.
3.  Sama ada daftar pada masa import (tolak dari `registerDefaultGuardrails`) atau
    panggil `guardrailRegistry.register(...)` pada masa jalan — pendaftar menggantikan
    mana-mana pengawal terdahulu dengan nama yang dinormalisasi yang sama.
4.  Tambah ujian di bawah `tests/unit/` (contoh sedia ada:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Pengujian

Gunakan `resetGuardrailsForTests()` antara ujian untuk bermula dari keadaan yang diketahui.
Luluskan `{ registerDefaults: false }` untuk bermula dengan pendaftar kosong dan
daftar hanya pengawal yang sedang diuji. Vision Bridge menerima suntikan kebergantungan
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge mendedahkan sambungan yang setara untuk tetapan, keupayaan, pemilihan model STT, semakan kelayakan, dan transkripsi. Ujian oleh itu boleh melaksanakan kedua-dua aliran tanpa akses DB atau rangkaian.

## Lihat Juga

- `src/lib/guardrails/` — pelaksanaan
- `src/shared/utils/inputSanitizer.ts` — pengesan kongsi yang menggerakkan
  suntikan prompt dan penyamaran PII
- `src/shared/constants/visionBridgeDefaults.ts` — lalai Vision Bridge dan
  senarai model jambatan paksa
- `src/shared/constants/modalityBridgeDefaults.ts` — lalai masa jalan Vision/Audio kongsi
- `docs/architecture/RESILIENCE_GUIDE.md` — lapisan ortogonal (pemutus litar, penyejukan)
- `docs/reference/ENVIRONMENT.md` — rujukan pemboleh ubah persekitaran penuh

## Liputan laluan pengawal suntikan & pasukan merah (Fasa 8 · Blok D)

Pengawal suntikan (`createInjectionGuard` / `withInjectionGuard`) meliputi semua laluan
yang menerima prompt pengguna. Ia menghormati `INJECTION_GUARD_MODE` (lalai `warn` = log sahaja;
`block` = mengembalikan HTTP 400 `SECURITY_001`).

| Jenis            | Laluan                                                                                                                                               | Mod lalai |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| Teks (sedia ada) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn      |
| Generatif        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn      |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn      |

Pengekstrakan teks (`extractMessageContents`) meliputi `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Pasukan merah (malam, `nightly-llm-security.yml`):** promptfoo mengesahkan bahawa setiap laluan menyekat
korpus OWASP-LLM dalam `INJECTION_GUARD_MODE=block`; garak menjalankan probe (melangkau tanpa rahsia).
`moderations` disertakan untuk konsistensi — pengendali dalam mod sekat boleh mengecualikannya melalui
`resolveDisabledGuardrails`.

Aliran kerja malam (`.github/workflows/nightly-llm-security.yml`, cron + penghantaran manual) mempunyai dua tugas:

- **`promptfoo-guard` (menyekat)** — menjalankan `promptfoo eval -c promptfooconfig.yaml`
  dengan `INJECTION_GUARD_MODE=block`. Setiap kes adversari (cth. "abaikan semua
  arahan sebelumnya...", jailbreak gaya DAN) menegaskan bahawa respons membawa
  `error.code === "SECURITY_001"`, iaitu pengawal sebenarnya menolak permintaan tersebut.
- **`garak` (nasihat)** — menjalankan garak `--probes promptinject,dan,leakreplay`
  terhadap instans OmniRoute tempatan (`http://localhost:20128/v1`). Terkawal oleh
  rahsia pembekal (`PROMPTFOO_PROVIDER_KEY`); melangkau dengan lancar dan diakhiri
  `|| true`, jadi ia melaporkan tanpa menyebabkan CI gagal.

Liputan pembantu pengawal (`createInjectionGuard` / `withInjectionGuard`)
merangkumi setiap laluan `/v1` yang membawa prompt; teks prompt ditarik dari
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` oleh
`extractMessageContents()` dalam `src/shared/utils/inputSanitizer.ts`.
