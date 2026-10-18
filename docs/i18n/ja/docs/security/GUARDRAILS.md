# Guardrails (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **信頼できる唯一の情報源:** `src/lib/guardrails/`
> **最終更新:** 2026-08-29 — v3.8.51（Video Bridge の文字起こしの来歴は呼び出し元による宣言であり、
> まだサーバー側では検証されていないことを #11661 に基づき明確化）

ガードレールは、OmniRoute とアップストリームプロバイダーの境界で、安全性、ポリシー、およびコンテンツ変換を適用します。各ガードレールは、リクエストペイロード（`preCall`）とアップストリームレスポンス（`postCall`）を検査し、必要に応じて拒否、変換、または注釈付けできます。

システムは **フェイルオープン** です。ガードレールの実行中に例外が発生した場合、レジストリはエラーを記録し、リクエストを失敗させるのではなく、次のガードレールの処理を続行します。ブロックは常に明示的な判断（`block: true`）であり、偶発的に発生することはありません。

## 組み込みガードレール

レジストリはインポート時に、優先順位に従って6つのガードレールを自動的に読み込みます
（`registry.ts` → `registerDefaultGuardrails()` を参照）。

| 優先順位 | 名前                | ステージ       | ファイル              |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

優先順位の数値が小さいものほど**先に**実行されます。

### Vision Bridge（`visionBridge.ts`）— Modality Bridge PR-1

**非ビジョンモデル**を対象とする画像を含むリクエストをインターセプトし、リクエスト全体をビジョン対応モデルへ再ルーティングするか、アップストリーム呼び出しの前に、画像部分を設定可能なビジョンモデルが生成したテキスト説明へ置き換えます。これにより、テキスト専用プロバイダーでもマルチモーダルペイロードを透過的に処理できます。

フロー：

1. 対象モデルがすでにビジョンをサポートしている場合はスキップします（ただし、強制ブリッジリスト `isVisionBridgeForcedModel` に含まれている場合を除きます）。
2. `extractImageParts(messages)`（`visionBridgeHelpers.ts`）を介して画像部分を抽出します。この関数は、`open-sse/utils/mediaParts.ts` の**統合メディア検出機能** `detectMediaParts()` に処理を委譲します。これは、コンボ互換性フィルターと共有される唯一の信頼できる情報源です。抽出対象は、`replaceImageParts` が元の位置へ差し戻せる形式のトップレベル部分（extract↔replace 契約）に限定されます。対象となるのは、OpenAI の `image_url`、Anthropic の base64 `source.type:"base64"`、Anthropic の URL `source.type:"url"`、および Responses API の `input_image` です。ネストされた一致項目やインジケーターのみの形式はコンボフィルター用であり、抽出されることはありません。何も見つからなければスキップします。
3. `resolveVisionBridgeRuntimeSettings()`（`src/shared/constants/modalityBridgeDefaults.ts`）を介してランタイム設定を解決します。新しい `modalityBridge*` 設定キーが優先され、従来の `visionBridge*` キーは**1サイクル限りのフォールバック**（ロールバック期間）として残ります。ブリッジが無効な場合は、メディアを探索する前にスキップします。
4. モードセレクター（`modalityBridgeVisionMode`、下表を参照）が、再ルーティングするか説明を生成するかを決定します。再ルーティングでは、`model` のみを差し替えた `modifiedPayload` と、メタ `{ rerouted, fromModel, toModel, imagesKept }` を返します。
5. 説明生成パスでは、画像数を `maxImages` に制限し、タスクを考慮したプロンプトを構成して説明キャッシュを確認し、ビジョンモデルを**並列に**呼び出します（`Promise.allSettled`）。その後、元の画像部分の位置に `[Image N]: <description>` というテキスト部分を挿入します。説明生成に失敗した場合は `null` となり、元の画像部分が**保持**されます（#4012）。ただし、コンボの説明生成パスですべての説明生成に失敗した場合は例外であり、非ビジョンモデルであることが確認されたアップストリームには、代わりに `(unavailable — no vision-capable provider connected)` スタブが渡されます（#8430）。
6. `modifiedPayload` とメタ（`imagesProcessed`、`descriptions`、`processingTimeMs`、`visionModel`）を返します。

#### モードセレクター（`modalityBridgeVisionMode`）

| モード     | デフォルト | 動作                                                                                                                                                                                                                                                                                                                    |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔          | 変更されていない従来のヒューリスティック（#6640/#7204）：非コンボ/`auto/` モデルは、元のモデルに使用可能な認証情報がすでにある場合を除き、最適なビジョンモデルへ再ルーティングされます（認証情報がある場合は説明を生成）。コンボ対象では常に説明を生成します。                                                          |
| `describe` |            | 常に説明を生成します。再ルーティングブロックは完全にスキップされ、常にユーザーが選択したモデルが回答します。                                                                                                                                                                                                            |
| `reroute`  |            | 再ルーティングを強制します。認証情報を持つモデルを維持するためのガードはバイパスされます。再ルーティング**先**の認証情報ガードは引き続き適用されます。使用可能なビジョン対象が存在しない場合、リクエストは説明生成へフォールスルーするため、未加工の画像がテキスト専用バックエンドへ到達することはありません（#8430）。 |

強制モードは、auto ヒューリスティックが実行される**前に**ショートサーキットします。`auto` の動作は、PR-1 より前のガードレールとバイト単位で同一です。

#### APIキーのスコープ（`visionBridgeKeyScope.ts`）

呼び出し元のAPIキーによって、`allowedConnections`、クォータプール（`allowedQuotas`）、またはモデル（`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`）が制限されている場合、ブリッジが再ルーティング先および説明生成用として選択するのは、そのキーで使用可能な接続上にある、そのキーで使用可能なモデルだけです。その後、説明生成の呼び出しは常に、`x-omniroute-self-loop-key-id` ヘッダーを使用して OmniRoute のセルフループを経由するため、受信側のチャットリクエストで、そのキーの接続およびモデルポリシーが再度適用されます。`enforceApiKeyPolicy()` は、そのヘッダーをセルフループの bearer と併用した場合にのみ考慮するため、アクセス範囲を狭めることしかできません。また、解決できない id は拒否されます。

そのキーで許可されているビジョンモデルがない場合、説明生成パスは処理を行わず、リクエストは変更されずにそのまま通過します。これは、ガードレールが無効な場合と同じフェイルオープン動作です（メタ `{ skipped: true, reason: "no_permitted_vision_model" }`）。キーのないリクエスト、およびこれらの制限がないキーは、以前とまったく同じように動作します。

#### タスクを考慮した説明生成プロンプト（`modalityBridgeVisionTaskAware`）

デフォルトは **true** です。`composeVisionPrompt()`（`visionBridgeHelpers.ts`）は、
**最後のユーザーメッセージ**のテキスト（500文字で切り詰め）を基本の
説明プロンプトに追加し、ユーザーが実際に求めた内容に沿うよう説明を誘導
（codex-vision-proxy パターン）するとともに、表示されているテキストを文字起こしするよう
ビジョンモデルに指示します。このフラグがオフの場合、またはユーザーテキストがない場合は、
基本プロンプトが変更されずに使用されます。

説明セルフループ独自の OpenAI 互換リクエスト（`visionBridgeHelpers.ts` の
`callVisionModelSingle()`）では、常に `image_url.detail: "high"` を要求します。
これは無条件で、すべての呼び出し元およびプロバイダーに適用され、クライアントからのシグナルには
左右されません。低詳細度のサンプリングは、このプロンプトが要求するテキスト文字起こしタスクそのものの
OCR 精度を低下させるため、元の受信リクエストで使用された詳細度にかかわらず、
説明呼び出し自体は常に高詳細度を要求します。これは内部の説明リクエストボディにのみ影響し、
プライマリリクエストで OmniRoute が呼び出し元独自の `image_url.detail` を転送する方法は
変更しません。そのデフォルトは別途適用され、検出された OpenCode クライアントに対してのみ、
`defaultImageDetail()`（`open-sse/handlers/chatCore/upstreamBody.ts`）で適用されます。
説明セルフループの Anthropic ワイヤーフォーマット分岐には `detail` フィールドがないため、
どちらのデフォルトの影響も受けません。

#### 説明出力の上限（`modalityBridgeVisionMaxChars`）

| キー                           | デフォルト | 範囲                 |
| ------------------------------ | ---------- | -------------------- |
| `modalityBridgeVisionMaxChars` | `0`        | `0` または 100–50000 |

`0`（デフォルト）は **上限なし** を意味します。`callVisionModel()` が返す説明は
変更されずにそのまま渡され、既存の動作が維持されます。100–50000 の範囲の値を指定すると、
説明が `[Image N]: <description>` として再挿入される前に
`…` サフィックス付きで切り詰められます
（`src/lib/guardrails/visionBridge.ts` の `VisionBridgeGuardrail.preCall()`）。
後段のモデルが完全な文字起こしを必要とする、詳細度の高い OCR タスクではこの値を大きくし、
冗長なビジョンモデルによるトークン使用量を制限するには小さくしてください。
ダッシュボードのフィールドは、Vision タブの Advanced パネル
（`ModalityBridgeVisionTab.tsx` の `modality-bridge-max-chars`）にあり、
明示的な `0` はそのまま維持しつつ、1～99 の値を最小値の 100 に切り上げます。
`0` は単なる「未設定」のデフォルトではなく、それ自体が有効な Zod 値です
（`z.union([z.literal(0), z.number().int().min(100).max(50000)])`）。

#### 説明キャッシュ（`modalityBridge/bridgeCache.ts`）

説明出力用のインメモリ LRU + TTL キャッシュで、プロセス全体で共有されます。
キー = `sha256(imageRef + composedPrompt + configuredBridgeModel)` で、
長さプレフィックスによるフレーミングを使用します（フィールド境界の衝突はありません）。
モデル部分には、実際に応答したモデルではなく、**設定された**ブリッジモデルが使用されます。
`callVisionModel` は内部でフォールバックする場合があり、試行ごとにキーを設定すると
キャッシュが断片化するためです。失敗した説明はキャッシュされません。設定：

| キー                            | デフォルト | 範囲    |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### リモート画像の正規化（セルフループの説明/base64 フェッチ）

ブリッジが **リモート**画像を自身でフェッチする場合、つまり Anthropic の説明セルフ呼び出しと
claude ワイヤーフォーマット向けの base64 変換
（`ensureBase64ImagesForClaudeWire`）の両方で、
`visionBridgeHelpers.ts` の `fetchRemoteImageAsDataUri()` を介して取得した結果の
データ URI は、ビジョンモデルリクエストに埋め込まれる前に
`normalizeDataUri()`（`open-sse/utils/imageNormalize.ts`）へ渡されます。
サイズが大きすぎる画像は、**長辺 2048px** に縮小されます
（OpenAI/Anthropic がすでにサーバー側で適用しているリサイズ上限と一致）。
これにより、ビジョンモデルから見える内容を変えることなく、
アップロードのバイト数とレイテンシーを削減できます。リサイズには、動的インポートで読み込まれる
`sharp` を使用します。ネイティブバイナリの読み込みに失敗するプラットフォームでも、
`normalizeDataUri()` は **決して例外をスローしません**。元のバイトをそのまま通す動作に
フォールバックするため、説明/base64 変換パスは常に動作し続けます。
画像ではないバイト（デコード可能な画像を返さなかったフェッチ）も、変更されずにそのまま渡されます。
この正規化の対象は、ブリッジが独自のセルフ呼び出し用にフェッチする画像に限定されます。
呼び出し元の生のパススルーペイロードには決して適用されず、
明示的なオプトインがある場合にのみ変更するという原則（Hard Rule #20）に従います。

#### 設定スキーマ + マイグレーション

新しい `modalityBridge*` キーは、`updateSettingsSchema`
（`src/shared/validation/settingsSchemas.ts`）で Zod により検証されます：
`modalityBridgeVisionEnabled`、
`modalityBridgeVisionMode`、`modalityBridgeVisionModel`、
`modalityBridgeVisionTaskAware`、`modalityBridgeVisionPrompt`、
`modalityBridgeVisionTimeout`、`modalityBridgeVisionMaxImages`、
`modalityBridgeVisionMaxChars`、`modalityBridgeCache*` の3項目、および
Audio Bridge が使用する `modalityBridgeAudio*` グループです。
マイグレーション `141_modality_bridge_settings.sql` は、既存のレガシーな
`visionBridge*` 値を対応する新しいキーへコピーします
（冪等であり、オペレーターが設定した `modalityBridge*` 値を上書きすることはありません）。
レガシーキーは、1リリースサイクルの間、読み取りフォールバックとして引き続き受け入れられます。

#### 透明性ヘッダー + 統計

説明によって変換されたレスポンスには、
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
が含まれます
（`modalityBridge/bridgeStats.ts` の `buildModalityBridgeHeader()` で構築され、
`src/sse/handlers/chatHelpers.ts` の `withModalityBridgeHeader()` で付与されます）。
再ルーティングされたリクエストにはヘッダーは **付与されません**。ペイロードは変更されておらず、
モデルの切り替えはレスポンスボディの `model` フィールドですでに確認できるためです。

`GET /api/modality-bridge/stats`（管理認証が必要で、
`GET /api/settings` と同じ階層）は、`vision`、`audio`、`video` ごとの
インメモリカウンター
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` を返します。`averageLatencyMs` は
すべての試行回数ではなく、`latencySamples` を分母として使用します。タイミング情報のない
操作に対して、0 ミリ秒のサンプルが捏造されることはありません。
`bridged` は、後方互換性のため、成功した変換を表すエイリアスとして維持されます。
失敗した試行では増加しません。
カウンターは設計上、プロセスの再起動時にリセットされます
（会計ではなくテレメトリです）。

#### ダッシュボード設定

専用のダッシュボードページは
`/dashboard/settings/modality-bridge` です。URL から直接指定可能な `Vision`、`Audio`、
`Video` タブは、`tab` の値を切り替える際にもクエリパラメーターを維持します。
Vision タブでは、有効化、モード、モデル選択（自動デフォルトを含む）、
タスク対応プロンプト、高度なタイムアウト／画像／説明文の長さ／キャッシュ制限、
ランタイム
カウンター、および保護されたサンプルリクエストを利用できます。Audio タブも実際に動作します。
有効化、Auto を含む STT 専用モデルピッカー、タイムアウト／最大クリップ制限、
音声カウンター、および `input_audio` サンプルテストを利用できます。Video タブも機能します。
FFmpeg/ffprobe のランタイム状態を表示します。状態は、明示的な 4 つの UI 状態
（プローブ実行中または完了できなかった場合の `unknown`、ダッシュボードのホストが
非ループバックでありクライアント側でプローブがスキップされた場合の `restricted`、
プローブ後に存在しないことが確認された場合の `unavailable`、または FFmpeg/ffprobe の
バージョンとともに表示される `available`）のいずれかです。また、有効化／モデル／フレーム／
動画／タイムアウトの制限を永続化し、モデルピッカーをビジョン対応モデルに絞り込み、
動画カウンターを表示します。

AI 設定にあった旧 Vision Bridge カードは、新しいページへの互換リンクになりました。
フォームの 2 つ目のコピーを保持することはなくなりました。Media Providers からも、
既存の Speech-to-Text プレイグラウンドを削除することなく、Image-to-Text および
Speech-to-Text ワークフローに対応する Modality Bridge タブへリンクできます。

**自己ループのアドミッションバイパス:** describe 呼び出しが OmniRoute 自身の
`/v1` 自己ループ（非標準プロバイダーモデル）を経由する場合、サブリクエストは
`x-omniroute-admission-bypass: internal` を送信し、解決済みの自己ループ認証情報で
認証されます。ローカルモードではローカルの `sk_omniroute` センチネル、それ以外では
運用者が設定した `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` 環境変数キー（#1350）が
使用されるため、`REQUIRE_API_KEY=true` のデプロイでも describe 呼び出しを実行できます。
このバイパスは、それらの正確な認証情報に対してのみ許可されるため、外部クライアントが
このヘッダーを使用してアドミッションを回避することはできません。

従来のデフォルト値は `src/shared/constants/visionBridgeDefaults.ts` にあります。
新しいモード／タスク対応／キャッシュのデフォルト値と設定リゾルバーは
`src/shared/constants/modalityBridgeDefaults.ts` にあります。ガードレールは
`deps` コンストラクターオプションを公開しているため、テストで偽の `getSettings` および
`callVisionModel` 実装を注入できます。

### Audio Bridge（`audioBridge.ts`）— Modality Bridge PR-3

音声入力を受け付けることが確認されていないターゲットに到達する前に、
音声を含むチャットリクエストをインターセプトします。チャットリクエスト自体を
別経路へルーティングすることはありません。音声部分は、既存の OpenAI 互換
マルチパートエンドポイントを通じて文字起こしされ、選択されたチャットモデルは
テキストの文字起こし結果を使用して処理を続行します。

フロー:

1. `getResolvedModelCapabilities()` を通じて `supportsAudio` を解決します。明示的な
   プロバイダーレジストリのメタデータが最優先され、次に静的なモデルメタデータ、
   その次に同期済みの `modalities_input` が使用されます。宣言された入力リストに
   `audio` が含まれていない場合は `false` となり、機能を示す証拠がない場合は
   `null` のままです。`false` と `null` のどちらでも保守的なブリッジが有効になり、
   `true` の場合はバイパスされます。
2. `modalityBridgeAudio*` 設定を解決し、共有の `detectMediaParts()` 検出器を通じて、
   各メッセージからスプライス可能なトップレベルの音声部分を抽出します。サポートされる
   ワイヤー形式は、OpenAI の `input_audio`、`audio_url`、および
   `source.media_type: "audio/*"` です。ネストされた音声はルーティング用に検出されますが、
   スプライス処理では削除されません。処理量は `modalityBridgeAudioMaxClips` によって
   制限され、それ以降の部分は変更されません。
3. 設定済みの `provider/model` を使用するか、`selectAudioBridgeModel()` に
   `AUDIO_TRANSCRIPTION_PROVIDERS` を安定したカタログ順で走査させ、使用可能な
   アクティブプロバイダー認証情報を持つ最初のモデルを選択します。
4. `callAudioTranscription()` は、base64/data-URI 音声をマルチパートの
   `file` に変換するか、DNS ピンニングと 25 MB の上限を備えた、パブリックアクセスのみを
   許可するアウトバウンドガードを通じてリモートの `audio_url` をダウンロードします。
   その後、`resolveSelfLoopBearer()` で認証されたローカルの
   `/v1/audio/transcriptions` 自己ループへ、ファイルと選択されたモデルを POST します。
   既存の文字起こしルートが、通常の認証情報検索、クールダウン／レート制限処理、
   およびプロバイダーへのディスパッチを実行します。
5. 成功した呼び出しでは、その部分が `[Audio N]: <transcript>` に置き換えられます。
   呼び出しは `Promise.allSettled` で実行されます。個別の呼び出しが失敗した場合、
   元の音声部分が維持されます（#4012 の契約）。すべての呼び出しが失敗し、かつターゲットが
   `supportsAudio === false` であることが証明されている場合、その部分は
   `[Audio N]: (unavailable — no STT provider connected)` になります（#8430 の契約）。
   ターゲットが不明（`null`）の場合、すべて失敗しても変更されません。使用可能な
   STT 認証情報がないことが証明済みのテキスト専用ターゲットには、ネットワーク呼び出しを
   行わずに同じ明示的なスタブが渡されます。

成功した文字起こし結果は、プロセス全体で共有される Modality Bridge の LRU/TTL キャッシュを
使用します。キーは、音声参照、安定した `audio-transcription` 操作ラベル、および選択された
STT モデルを組み合わせたものです。失敗はキャッシュされません。音声処理の試行では、
共有の `bridged`、`cacheHits`、`failures`、`lastUsedAt` カウンターが更新されます。
変換されたレスポンスには
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` が付与されます。
変更されていないリクエストには Audio Bridge セグメントは付与されません。

ランタイム設定は DB に保存され、Zod で検証されます:

| キー                          | デフォルト | 範囲               |
| ----------------------------- | ---------- | ------------------ |
| `modalityBridgeAudioEnabled`  | `true`     | —                  |
| `modalityBridgeAudioModel`    | `""`       | Auto または STT ID |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000        |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10               |

共有キャッシュは引き続き `modalityBridgeCacheEnabled`、
`modalityBridgeCacheTtlMinutes`、および `modalityBridgeCacheMaxEntries` によって制御されます。

### 動画ブリッジ（`videoBridge.ts`、`videoBridgePipeline.ts`）

既知のネイティブ動画サポートがないターゲットを呼び出す前に、Chat Completions の `messages` および Responses
API の `input` に含まれるトップレベルの動画パートをインターセプトします。
サポートされる形式は、`input_video`、`video_url`、`video_source`、HTTPS URL、
および `data:video/*;base64,...` データ URI です。テキスト内の単なるファイル名は動画として扱われません。

`VideoBridgeGuardrail.preCall`（`videoBridge.ts`）は、リクエストの走査、
機能／ポリシーチェック、リクエスト単位の集約、およびレスポンスペイロードを担います。
動画ごとの処理（取得、結果全体のキャッシュ、フレームシーケンスの記述
（呼び出し元が明示した音声トランスクリプトがある場合はそれを統合）、試行ごとの
メトリクス／中止／クリーンアップ）は、`videoBridgePipeline.ts` の
`processVideoPart` の背後に隠蔽されており、`preCall` のループ内で動画パートごとに1回呼び出されます。
このモジュールは、明示的なポート境界である `VideoMediaBrokerPort`
（バイトの取得およびサンプリングされたフレームの抽出）、`VideoAudioTranscriptionPort`
（呼び出し元が明示した音声トランスクリプトとサンプリングされたキャプションの統合）、および
`VideoDrilldownPort`（フレームのドリルダウン永続化境界。まだ
`processVideoPart` には接続されておらず、現時点では別の `/api/modality-bridge/video/drilldown`
ルートのみがドリルダウンエントリを書き込みます）も定義します。

公開 `/v1` リクエストパスがサブプロセスをインポートまたは呼び出すことはありません。リモート
動画は 50 MiB の上限内でダウンロードされます。インライン base64 動画には、モデル／メッセージ／フレーミングのエンベロープを
公開 JSON リクエストの受け入れ上限である 50 MiB 以内に収められるよう、動画ごとにデコード後 36 MiB という
保守的な上限が設定されます。インラインの長さとデコード後サイズの推定値は、割り当て前に検証されます。最初のリモート URL とすべてのリダイレクトで
HTTPS が必須であり、DNS ピンニングを備えた既存の
公開先限定アウトバウンドガードが使用されます。その後、バイト列は厳密な内部
`POST /api/modality-bridge/video/extract` ブローカー境界を通過します。このルートは
`LOCAL_ONLY` かつ `SPAWN_CAPABLE` であり、プロセス単位で認証された
信頼済みループバックリクエストのみを受け入れ、URL、ファイルシステムパス、実行可能ファイル、
または引数リストを受け入れることはありません。API のボディサイズ処理パイプラインとハンドラーの増分ボディ
リーダーは、それぞれ独立して 50 MiB のブローカー入力上限を適用します。境界付きキューは
一度に1件の抽出を実行し、4件の保留中ジョブを許可し、保留中の入力を
100 MiB に制限します。

ブローカー内部では、`ffprobe` が非公開のローカルファイルを読み取ります。固定の形式
許可リストでは、プレイリスト形式とマニフェスト形式が除外されます。許可された MOV 系
コンテナでは、外部 MOV データ参照はデフォルトで無効のままであり、固定コマンドも
それらを有効化しません。`ffprobe` と `ffmpeg` はいずれも、
`file` のみに限定されたプロトコル許可リスト、1スレッド、固定引数配列、シェルなし、
および `PATH` から解決された実行可能ファイルを使用します。添付画像のカバーストリームは
再生可能な候補ではありません。再生可能なすべてのストリームが制限を満たす必要があり、
決定論的な最小インデックスへのフォールバックより先に、明示的なデフォルトストリームが優先されます。
動画は 600 秒、各次元 8,192 ピクセル、ソース全体で 33,554,432 ピクセルに制限されます。
FFmpeg は中間点から 1～16 枚の JPEG フレームをサンプリングし、
小さい入力をアップスケールすることなく、長辺を最大 1,024 ピクセルに縮小し、
URL を受け取ることはありません。サンプリングはデフォルトで `uniform` です。オプションの
`scene_aware` および実験的な `segment_aware` ポリシーは、検証済みのローカルストリームに対して
追加で1回だけ固定の FFmpeg パスを実行し、境界付きの
`showinfo` シーンタイムスタンプを選択します。また、検出器の失敗、タイムアウト、不正な形式の出力、
または空の候補セットが発生した場合は、同じ一様な中間点へ決定論的にフォールバックします。
セグメント対応モードは、検証済みのシーン区間に比例して中間点サンプルを割り当てます。
セグメント対応の根拠とフォールバック動作については、以下で詳しく説明します。すべてのポリシーで、
選択後に 16 フレームのハード上限が適用されます。シーン対応リクエストの
フレーム予算が1枚のみの場合、アクティブな動画全体またはフォーカスウィンドウの一様な中間点を使用し、
`policyEffective: uniform` を報告します。選択された単一のシーンフレームでは、
時間軸の両端を保持できないためです。呼び出し元は、有限のフォーカスウィンドウ
（秒単位の `start`／`end`）を任意で指定できます。境界はメディアの再生時間内にクランプされ、
逆転したウィンドウまたは非有限のウィンドウは拒否され、すべてのサンプリング
ポリシーは正規化された区間内でのみ実行されます。結果として得られる
ウィンドウは、サンプリングメタデータおよび信頼されていない説明
プレフィックスに含まれるため、後続モデルはフォーカスされた抜粋とタイムライン全体を区別できます。

セマンティックなキャプションフォーカスは、独立した明示的な設定です。デフォルトの `full`
分析モードでは既存のフレームプロンプトが維持され、リクエストテキストがキャプションモデルに転送されることはありません。
`focused` モードでは、ブリッジは同じ Chat または Responses
コンテナから、ユーザーが作成した最新の空でない `text`／`input_text` のみを読み取り、
NFC に正規化し、制御文字と空白をまとめ、
500 Unicode コードポイントに制限します。結果が空の場合は、正確な
`full` プロンプトにフォールバックします。使用可能なヒントは、専用の
信頼されていないユーザーコンテキストブロック内で JSON としてシリアライズされ、観察可能な詳細の優先順位付けにのみ使用できます。
メディア内で視認または聴取できる指示に従わないよう求める別個の警告を上書きすることはできません。
テキストによるフォーカスが `start`／`end` を推論したり、
時間サンプラーを変更したりすることはありません。

#### FU-07 構造的セグメント根拠

`segment_aware` は、すでに検証済みのローカル動画ストリームに対して、制限付きの事前分析パスを1回実行します。固定されたフィルターチェーンは、まず幅が最大320ピクセルになるようにスケーリングし、シーンの変化とフリーズ区間を検出した後、ぼけ、平均輝度、空間的・時間的情報を分析するために毎秒1フレームをサンプリングします。このパスは、構造サンプル数が600、FFmpeg/フィルタースレッド数が1、プロトコルが同じ `file` のみ、コンテナが許可リスト内のもののみ、プロセス出力が1 MiB、ブローカーの共有中止処理/期限内で最大30秒に制限されています。リクエストからコマンド、フィルター、パス、URLを受け入れることはありません。

構造値は決定論的なサンプリング証拠であり、動画の意味的な理解ではありません。被写体、行動、キャプション、音声、ユーザーの意図を推論するものではありません。シーン境界とフリーズ境界からセグメントが形成され、フリーズ率、ぼけ、露出、空間的詳細、時間的変化は、既存の1～16フレームの予算をどのように割り当てるかにのみ影響します。完全にフリーズしたセグメントは最大1フレームに制限され、フリーズしていないセグメントは残りの予算を競います。境界数がフレーム数を上回る場合は、タイムライン全体にわたる均一なカバレッジが維持されるため、冒頭の急速なカットによって長い末尾セグメントが隠れることはありません。フリーズ境界から1秒の分析解像度内にあるシーン境界は統合されます。

フィルターの欠落、不正または空の証拠、検出器エラー、制限付き事前分析のタイムアウトが発生した場合は、厳密な均一中点ポリシーにフェイルオープンします。呼び出し元による中止またはブローカーの期限超過ではフェイルオープンしません。実行中のサブプロセスを終了し、その後のフレーム抽出を防止し、プライベート一時ツリーを `finally` で削除します。

`scripts/perf/video-bridge-fu07-eval.ts` は、重複排除後のキャプション呼び出し削減量、高密度モーションの予算割り当て、ぼけ/露出/SI-TIの証拠、長い末尾を伴う急速なカット、および緩やかなフェードによる偽陽性について、決定論的な実 FFmpeg フィクスチャを生成します。事前分析の実時間を記録し、`/usr/bin/time` が利用可能な場合は、子プロセスのCPU使用量と最大RSSも記録します。その品質チェックは構造的オラクルのみです。このハーネスには承認済みエンドポイントも固定された判定器もないため、実際のキャプションモデルの品質は `HOLD` のままです。`--caption-cost-per-call-usd` で明示的な正の呼び出し単価見積もりが指定されない限り、金銭的な削減効果も `HOLD` のままです。このスクリプトがいずれかの結果を捏造することはありません。

各フレームは4 MiB、すべてのRAWフレームの合計は23 MiB、シリアライズされたブローカー応答は32 MiBに制限されます。プライベート一時ディレクトリは `finally` で削除されます。OmniRoute は FFmpeg を同梱しておらず、カスタム実行ファイルパスも受け入れません。キャプション生成の前に、ブリッジは保守的な視覚的重複排除パスを適用します。各JPEGは16×16のグレースケールバッファーに縮小され、最後に保持されたフレームとのみ比較されます。要求されたキャプション予算が1フレームを超える場合、抽出処理では、その予算の最大2倍かつ16フレーム以下に制限された候補プールを供給します。要求された上限は重複排除後にのみ適用され、予算が2以上の場合、最終的な間引き処理でも選択候補の先頭と末尾が保持されます。バージョン管理された
`grayscale-16x16-mean-cells-v2` ポリシーでは、平均輝度差と、正規化された差が0.05以上であるサムネイルセルの比率のうち、大きい方を使用します。重複判定のしきい値は定数0.04であり、ランタイム設定として公開するのではなく、予測可能性を優先して選定されています。この副次的な高コントラスト信号により、平均値のみの比較では見落とされる可能性がある小さな動きや可視テキストの変化が保持されます。比較処理またはデコーダーのエラーはフェイルオープンし、カバレッジを維持します。出力メタデータでは、抽出された候補、正常に使用されたフレーム、除外された視覚的重複を区別します。

明示的に指定された動画パートでは、タイムスタンプ付きコンタクトシートを要求できます。ブリッジは、最大4列、16フレームのJPEGグリッドを構築します。512ピクセルの各セルでは、ソースのタイムスタンプが高コントラストの下部帯に焼き付けられる一方、同じタイムスタンプが後続処理での関連付けと監査のためにテキストメタデータにも保持されます。完成したJPEGは引き続き32 MiBに制限されます。`sharp` がグリッドをデコードまたは合成できない場合、ブリッジは個別のJPEGフレームにフォールバックします。クライアントによる中止は、引き続きシート処理に伝播します。

昇格用の証拠は、合成によるコンポジションのマイクロベンチマークから意図的に分離されています。`scripts/perf/video-bridge-contact-sheet-eval.ts` は、実際の OpenAI 互換ビジョンモデル用に、スキーマのバージョン管理されたA/Bハーネスを定義します。プロバイダーが報告したトークン数、エンドツーエンドの実時間レイテンシ（シート合成を含む）、モデル呼び出し回数、およびマニフェストで定義された事実の保持率を測定します。モデルの未加工レスポンスはレポートに書き込まれません。SHA-256ダイジェストと一致した事実IDのみが保持されます。`--execute-real` が渡され、かつ `--model`、`OMNIROUTE_BASE_URL`、`OMNIROUTE_API_KEY` が設定されていない限り、ハーネスはネットワーク呼び出しも有料モデル呼び出しも行いません。この明示的な実行がない場合、機械可読な判定は `HOLD` のままです。合成ペイロードや呼び出し回数の測定値だけでは、昇格の証拠にはなりません。

呼び出し元は、すでに位置合わせ済みテキストを保有している場合、サポート対象の動画パートにオプションの `transcript.cues` 配列を付加できます。各キューには、`text`、プローブ済みの動画長の範囲内にある有限の `start`/`end` 区間、および許可リストに含まれる `source`（`client`、`embedded`、`audio-bridge` のいずれか）が必要です。`confidence` のデフォルト値は `1` で、`0` から `1` の範囲内でなければなりません。完全に同一のキューは統合されます。OmniRoute がこのメタデータから文字起こしを開始することはありません。検証済みのキューは、ソース、信頼度、区間とともに記述結果へコピーされ、フレームキャプションと並べて信頼されていない観測結果としてレンダリングされます。無効なテキスト、範囲外のテキスト、または出自情報のないテキストは、キャプションストリームに混在させるのではなく拒否されます。両方のリクエストボディ文字起こしチャネルでは、自己申告された `embedded` または `audio-bridge` ラベルを含め、指定された出自が `client` に正規化されます。信頼済みのラベルをコード専用の `trustedSource` 引数を通じて割り当てられるのは、サーバーが所有するアダプターだけです。リクエストのJSONフィールドからその引数に到達することはできません。文字起こしテキストは、その出自にかかわらず、信頼されていないメディア由来コンテンツであり、認可を決定するために使用してはなりません。

高度な呼び出し元は、同じ動画に対して `audioTranscript` トラックを提供できます。
これは、サーバーによる文字起こしの証拠ではなく、クライアント提供のテキストとして扱われます。
融合境界では、1つのデッドラインと中止シグナルの下で映像と音声の観測を実行し、
共通のタイムライン上に並べ、完全に重複するものを統合し、
片方だけが成功した場合は部分結果を報告します。
無効な `audioTranscript` があっても動画全体は失敗せず、その部分結果にフォールバックします。
つまり、映像の説明は維持され、音声ブランチにはサニタイズ済みの失敗コードが記録されます。
ブランチごとの可用性、部分結果フラグ、サニタイズ済み失敗コードは、説明結果、
ガードレールのメタデータ（`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`）、結果キャッシュのメタデータ、およびブリッジの
融合カウンターに保持されます。デフォルトの Video Bridge パスでは、音声テキスト変換を
呼び出したり、メディアの2つ目のコピーをダウンロードしたりしません。その明示的なトラックが
なければ、動画のみのままです。

**文字起こしの保持（#12150 P1）。** これは、Video Bridge（それ自体がオプトイン）が
文字起こしキューをレンダリングするたびに自動的に適用されます。個別の保持フラグは
ありません。リクエストが何らかの文字起こしキュー（呼び出し元が宣言した
`transcript` または融合された `audioTranscript`）をレンダリングすると、ガードレールは
それを `videoBridgeObserved` としてマークし、動画説明の墨消し済みシャドウを生成します。
これは、各キューの自由記述本文を `[redacted-video-transcript]` に置き換えた同一形式の
レンダリングであり、文字列を組み立てる前に構造化されたキューフィールドを置換して
構築されます（フラット化されたテキストを解析することは決してないため、悪意のある内容か
通常の内容かを問わず、`]` を含む `[inaudible]`/`[music]` などの本文を含め、
キューの内容が残存することはありません）。永続化される呼び出しログのリクエスト本文では、
内容の一致によって各動画由来のテキスト部分をその墨消し済みシャドウに差し替えます。
`fullText` アンカーは、完了済みの呼び出し前ガードレールペイロードから再読み込みされるため、
後続のチェーンガードレール（PII および認証情報マスカー、優先度 10/95）が説明テキストを
インプレースで書き換えた後や、システムプロンプト、ハンドオフ、メモリ注入によって
メッセージ配列が再形成された後でも、一致は成功します。モデルへアップストリーム送信される
本文は変更されません。観測済みリクエストでは永続的な Memory も生成されません
（リクエスト由来とレスポンス由来の両方の抽出がスキップされます）。そのため、モデル自身の
応答によって文字起こしテキストが Memory に反映されることはありません。

**生の動画フィールド（#12430）。** ブリッジが有効で、ネイティブ動画サポートが不明または存在しない場合、定義済みの `transcript`/`audioTranscript` フィールドも、説明の失敗後や `maxVideos` 制限の適用後であっても `videoBridgeObserved` を有効にします。`null` と空文字列も対象です。存在しないフィールドと動画以外のメタデータは対象外です。保持されるコピーではこれらのフィールドを墨消しするか、リクエスト自体を省略し、キャッシュと Memory はバイパスされます。

これらのフォールバックパスでは、呼び出し元による有効なキューは、非標準のプロバイダー
フィールドではなく、サポート対象の `text`/`input_text` 部分になります。
リクエストで提供された両方のトラックは、信頼されない `client` 観測のままであり、
動画が説明されておらず、タイムスタンプがメディアと照合されていないことを示す明示的な警告が
付与されます。既存の256キュー、合計64 KiB、およびキューごとの上限は、2つのトラックを
合算して適用されます。タイムスタンプは、ブローカーの600秒上限と、指定されている場合は
フォーカスウィンドウの範囲内に収まる必要があります。無効なトラックは破棄され、任意の
テキストとして転送されません。合算上限を超えない限り、有効な兄弟トラックは引き続き
使用できます。null/空のフィールドはテキストを追加しません。このフォールバックによって
メディア取得や文字起こしが追加されることはありません。文字起こし拡張フィールドは、
フォールバック動画キャリアと、その `video_url`/`source` オブジェクトから削除されます。
OpenAI のワイヤー許可リストは厳格なままです。不明なネイティブ動画キャリアは引き続き
利用可能であり、既知のテキスト専用ターゲットでは安全なマーカーが維持されます。
構造化された墨消しシャドウによって追加された文字起こしテキストが保護される一方で、
呼び出し元が所有する元のリクエストは変更されません。ネイティブサポート対象のターゲットと
無効化されたブリッジでは、既存のバイパス動作が維持されます。

追加で保持されるコピーでも、同じ観測済みリクエストシグナルが使用されます。ガードレール適用前の
生のクライアントリクエストスナップショット、メモリ内の保留中リクエスト、および早期に
拒否されたリクエストのログでは、動画部分の文字起こしフィールドが構造的に置換されます。
パイプラインステージとコンテキストハンドオフによって合成された文字列プロンプトは、
永続化されるリクエスト本文のシンクで墨消しされます。永続化された
`video_content_removed` マーカーにより、`previous_response_id` を使用した継続では、
意図的に破棄されたテキストを再構築するのではなく、フェイルクローズします。観測済み
リクエストがログ記録前に部分ごとの墨消しシャドウを失った場合、または複数の動画シャドウの
うち1つでも後続のリクエスト変更後に一致しなかった場合、部分的に墨消しされた文字起こしを
保持するのではなく、保持対象のリクエスト本文全体が省略されます。

観測済みリクエストでは、モデルのレスポンスが構造化されたキュー境界なしに文字起こしの
任意の部分を引用する可能性があります。そのため、永続化される呼び出しログの
`responseBody` は省略マーカーに置き換えられます。詳細なパイプライン成果物
（アップストリーム/クライアントの本文やストリームチャンクを含む可能性があるもの）は
保持されません。そのリクエストでは、セマンティックキャッシュ、冪等性キャッシュ、
推論リプレイキャッシュの読み取りと書き込みがバイパスされます。プロバイダーへのリクエストと、
クライアントから見えるレスポンスは変更されません。詳細な成果物が省略される場合、早期の
キープアライブバイトは一時バッファから排出されます。Kiro の不正な EventStream に関する
警告では、ペイロードのバイト数のみが報告され、その内容や JSON パーサーの生のエラーは
決して報告されません。
これは、関連のないすべてのプロバイダー/プラグイン診断が監査済みであることを主張するものでは
ありません。より広範な保持シンクの調査は #11658 で追跡されています。

内部の `/api/modality-bridge/video/drilldown` ライフサイクルは、独立したループバック／トークン認証済みのキャッシュ基盤です。すべての操作には、正規の不透明なプリンシパル ID も必要です。本番の呼び出し元を有効化する前に、認証済みテナントからその ID を導出しなければならず、クライアントが選択した値を転送してはなりません。キャッシュキーは、そのプリンシパルを正規のセッション ID および動画参照 ID に結び付け、それらの SHA-256 由来のキーのみを保存し、読み取りと削除の両方を同じプリンシパルにスコープします。キャッシュはエントリごとに最大 16 個の派生 JPEG フレームを保存し、10 分後に期限切れにします。また、境界が設定された `start`/`end` 読み取り、または明示的なセッション削除をサポートします。

各プリンシパルは、16 エントリおよび 64 MiB の正規 JPEG データに制限されます。これらの制限は、グローバルな 64 エントリ／256 MiB の上限とは独立しています。プリンシパルのクォータが逼迫した場合、グローバル LRU による削除が検討される前に、そのプリンシパル内で最も長く使用されていないエントリのみが削除されます。期限切れのエントリは、キャッシュ操作時にプリンシパルとグローバルの両方の使用量集計から除去されます。一方、キャンセルや検証失敗の場合、部分的な置換はコミットされません。

キャッシュは、非正規の Base64、過剰なパディング、JPEG 以外のメディア、不正または途中で切れた JPEG、および境界が設定された全画像 `sharp` デコード中に警告が発生する JPEG を拒否します。受け入れた各画像を正規 JPEG として再エンコードし、呼び出し元のフィールドを信頼せず、デコード済みバイト列から幅と高さを導出します。また、末尾に付加されたポリグロットデータは保持せず破棄します。両方のクォータに計上されるのは、境界が設定された正規の圧縮バッファのみです。JSON の転送上限には、32 MiB のデコード済み入力上限に伴う Base64 のオーバーヘッドが含まれます。保存される各派生データには、検証済みの JPEG 形式／解像度、サンプリングポリシー、派生バージョン、作成時刻、サーバーが計算したコンテンツハッシュ、ハッシュ化された親参照、および信頼された呼び出し元の親コンテンツハッシュが記録されます。キャンセルは、アトミックなキャッシュコミットの前に、非同期のデコード／ハッシュ処理フェーズ間で確認されます。

このトランシェでは、まだ本番プロデューサーをルートに接続しておらず、複数解像度のバリアント選択も提供していません。したがって、透過的な Video Bridge リクエストパスに追加処理は発生しません。また、テナントに紐付いたプリンシパルの導出と完全な FU-08 複数解像度ライフサイクルは、完了済みの動作として文書化されるのではなく、明示的な後続作業として残ります。

フレームには、設定された Video モデルを使用して順番にキャプションが付けられます。空の Video オーバーライドは Vision 設定を継承します。両方が空の場合、Vision 自動ルーターが実効的な視覚対応モデルを選択します。キャプションの生成に成功すると、元のパートは安定した `[Video description:` プレフィックスを持つテキストに置き換えられます。このプレフィックスは、そのテキストが信頼されていないメディア由来の観察結果であることも示し、メディア内で見つかった指示に従わないよう後段のモデルに伝えます。フレームキャプションのキャッシュキーには、JPEG バイト列、プロンプト、タイムスタンプ、実効モデルが含まれます。キャッシュされるのは、生成に成功したキャプションのみです。キャッシュエントリには、フォールバックモデルを含め、実際に生成に成功したプロデューサーモデルが保持されます。異なるフレームが異なるモデルによって生成された場合、ブリッジは `mixed` を報告します。キャッシュヒット時には、要求されたルーティングプランとして再ラベル付けするのではなく、そのプロデューサー ID を再利用します。動画全体の結果キャッシュは、出力を変更するすべての入力（プロンプト、実効モデル、サンプリングポリシー、フレーム数、セマンティック分析モード、正規化されたフォーカスヒントの SHA-256 フィンガープリント、フォーカスウィンドウ、`transcript`、`audioTranscript`、コンタクトシートフラグ）をキーとします。そのため、これらの次元のいずれかを変更するとキャッシュミスになり、古い結果が再利用されることはありません。視覚的重複排除ポリシーのバージョン、しきい値、および上限付き候補フレーム数も、結果キャッシュのキーとメタデータに明示的に含まれます。そのため、ポリシーを変更しても、古い動画全体の説明が再利用されることはありません。結果キャッシュ v4 のメタデータにはモードとフィンガープリントが保持されますが、生のユーザータスクは保持されません。ガードレールのメタデータは、要求された分析モードと実効分析モードの両方を報告します。使用可能なユーザーテキストがない状態で `focused` モードが要求された場合、実効モードは `full` として報告されます。

ガードレールは、サポートされるすべての動画パートを抽出しますが、説明する動画数は `modalityBridgeVideoMaxVideos` を超えません。`supportsVideo === false` であることが確認されたターゲットでは、処理に失敗した動画および上限を超えた動画は明示的で安全なテキストマーカーに変換されるため、生の動画は残りません。機能が不明な場合、それらのパートは動画キャリアを保持します。フォールバックの文字起こしは、上記の境界付きテキスト変換に従います。`supportsVideo === true` のターゲットはブリッジをバイパスします。クライアントリクエストの中止シグナルは、ダウンロード、ブローカーキュー、サブプロセス、キャプション呼び出しまで伝播します。中止は動画間で処理を停止し、生のメディアを許可するフェイルオープン動作は決して行いません。

ランタイム設定は DB に保存され、Zod によって検証されます：

| キー                                | デフォルト  | 範囲 / 動作                                                                                                   |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | オプションのランタイム、オプトイン方式                                                                        |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` は汎用キャプションを保持し、`focused` は範囲を制限した信頼されていない最新のユーザーコンテキストを使用 |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge モデルを継承                                                                                    |
| `modalityBridgeVideoFrameCount`     | `8`         | 1～16                                                                                                         |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`、`scene_aware`、または比例配分の `segment_aware`。検出器が失敗した場合は `uniform` にフォールバック |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1～4                                                                                                          |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000～120000 ms                                                                                               |

以前から永続化されている 120 秒を超える動画タイムアウト値は、ブローカーのデッドラインに合わせて制限されます。新しい設定でこの上限を超える値を書き込もうとすると拒否されます。
`GET /api/modality-bridge/video/runtime` は、認証またはランタイムのプローブを行う前に、信頼済みとしてスタンプされたループバックのローカリティを要求し、その後、管理認証を要求します。返されるのは `available`、サニタイズされた FFmpeg/ffprobe のバージョン、およびランタイムが利用できない場合の固定理由のみです。内部抽出エンドポイントは公開アップロード API ではありません。キューが飽和した場合は `503` と `Retry-After`、呼び出し元が切断した場合は `499`、固定されたブローカーのデッドラインに達した場合は `504` を返します。変換されたレスポンスでは、Vision または Audio セグメントを削除することなく、中央の `x-omniroute-modality-bridge` ヘッダーに `video->text;model=<visionModel>;parts=<videos>` が追加されます。

### PII マスカー（`piiMasker.ts`）

**両方**のステージで実行されます。

- **`preCall`** はペイロードを複製し、`system`、`messages`、`input`、`prompt`（プレーン文字列の項目を含む）を走査して、文字列の `content`/`text` フィールドに `processPII()`（`@/shared/utils/inputSanitizer` から）を適用します。`PII_REDACTION_ENABLED=true` の場合、検出された PII は送信ペイロード内で編集されます。これは `INPUT_SANITIZER_MODE`（プロンプトインジェクションポリシーのみを制御）とは独立しています。編集が無効の場合、コンテンツを書き換えずに検出数を記録します。
- **`postCall`** はレスポンスをディープクローンし、`sanitizePIIResponse()` と Responses API 形式のマスカー（`maskResponsesOutput` — `output_text` および `output[].content[].text` を対象）を実行します。編集が行われた場合、変更後のレスポンスが元のレスポンスを置き換えます。

このガードレールはブロックを行わず、注釈（`meta.detections`、`meta.redacted`）の付与または書き換えのみを行います。

### プロンプトインジェクション（`promptInjection.ts`）

ユーザー提供のコンテンツ内にある敵対的な構造を検出し、設定されたポリシーを適用します。動作は環境変数およびコンストラクターオプションによって決まります。

| 設定             | 環境変数                                                                                                  | デフォルト | 効果                                                                                                                                                                                                                                |
| ---------------- | --------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 有効化           | `INPUT_SANITIZER_ENABLED`                                                                                 | `true`     | `false` の場合、ガードレールは処理を短絡します。                                                                                                                                                                                    |
| モード           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn`     | インジェクションポリシー：`block`、`warn`、または `log`。（後方互換性のため `redact` も受け入れられますが、インジェクションテキストは削除されません。リクエスト内の PII 書き換えは `PII_REDACTION_ENABLED` によって制御されます。） |
| ブロックしきい値 | `blockThreshold` オプション / `INPUT_SANITIZER_BLOCK_THRESHOLD`（別名 `INJECTION_GUARD_BLOCK_THRESHOLD`） | `high`     | ブロックに必要な最低深刻度。デフォルトでは Medium は監視のみです。                                                                                                                                                                  |

**モードの優先順位**（`getMode`）：呼び出し元の `options.mode` →
`INJECTION_GUARD_MODE` の **DB 機能フラグによるオーバーライド**（Dashboard → Settings →
Feature Flags）→ `INJECTION_GUARD_MODE` 環境変数 → `INPUT_SANITIZER_MODE` 環境変数 →
`warn`。したがって、ダッシュボードのオーバーライドは環境変数より優先されるため、Feature Flags UI から実行中のガードをリアルタイムで制御できます（再起動不要）。DB の読み取りはフェイルセーフです。エラーが発生した場合、ガードは環境変数に基づく動作にフォールバックし、オーバーライドが設定されていない場合の動作は、環境変数のみで解決した場合と同一です。

検出元：

1. `@/shared/utils/inputSanitizer` の `sanitizeRequest()`（パイプライン内の別の箇所でも使用される共有検出器セット）。
2. 組み込みの `DEFAULT_GUARD_PATTERNS`（現在は `system_override_inline` と `markdown_system_block`。どちらも深刻度は `high`）。
3. コンストラクターオプションで渡される任意の `customPatterns`（文字列、正規表現、または `{ name, pattern, severity }` レコード）。

`mode === "block"` **かつ**少なくとも1つの検出結果が重大度の
しきい値を満たす場合、`preCall` は `{ block: true, message: "Request rejected:
suspicious content detected" }` を返します。`warn`/`log` モードでは、ガードレールはログを
記録しますが、呼び出しは許可します。共有ヘルパー `evaluatePromptInjection()` もエクスポート
されており、レジストリを経由せずにプロンプトを評価する必要がある呼び出し元が利用できます。

**スキャン上限（v3.8.20）：** 検出器が検査するのは、結合されたプロンプトテキストの
**先頭16 KB**のみです。`src/shared/utils/inputSanitizer.ts` では
`MAX_INJECTION_SCAN_BYTES = 16 * 1024`（16 384バイト）と定義されています。
`detectInjection()` と `evaluatePromptInjection()` はどちらも、パターンループを
実行する前に `slice(0, MAX_INJECTION_SCAN_BYTES)` を適用します。インジェクション指示は
入力の先頭付近に置かれるため、検出能力を弱めることなく、数百KB規模のペイロードに対する
正規表現のCPU/GC負荷を制限できます（#3932、#4041を参照）。

### 認証情報マスカー（`credentialMasker.ts`）

**両方**のステージで実行され、デフォルトチェーンでは最後（優先度 `95`）に配置されます。
送信ペイロード（メッセージ内容、ツール呼び出し引数、ツール結果）**および**プロバイダーの
レスポンスから、既知のAPIキー／シークレットトークンのパターンを秘匿化します。これにより、
プロンプトに貼り付けられた認証情報（またはツール結果からそのまま返された認証情報）が、
上流プロバイダーやクライアントへ漏洩するのを防ぎます。

- PII秘匿化と同じ規約（ハードルール#20に準拠）で、**明示的な有効化が必要**です：
  `settings.credentialRedactionEnabled === true` **または**
  `CREDENTIAL_REDACTION_ENABLED=true` でない限り無効です。無効時、このガードレールは何も
  行いません。ブロックも書き換えも一切行いません。
- `redactCredentials()` はペイロード／レスポンスのツリー全体を走査し（`walkValue()`、
  プロトタイプ汚染に対して安全、`WeakSet` により循環参照にも対応）、一致箇所を
  `[REDACTED:<type>]` プレースホルダーに置き換えます。実際に変更された分岐のみを
  クローンします。
- `CREDENTIAL_PATTERNS` は、LLMプロバイダーキー（OpenAI、OpenAI-proj、
  Anthropic、Google、Hugging Face、Replicate）、VCS/SaaSトークン（GitHub、Slack、
  Linear、Notion、npm、Postman、Discord）、決済キー（Stripe、Square）、クラウド
  キー（AWSアクセスキー、Twilio、SendGrid、Mailgun）、秘密鍵／JWT、
  認証情報を含む接続文字列（`mongodb://user:pass@...` など）、および汎用的な
  `Authorization`/`x-api-key`/`api-key`/`apikey` ヘッダー値の
  パターンを対象とします。ヘッダー形式のキー（`authorization`、`x-api-key`、`api-key`、
  `apikey`）は、汎用テキスト正規表現ではなく構造的に秘匿化されます（値のみを対象とし、
  `Bearer `/`Basic ` のようなスキーム接頭辞は保持されます）。
- このガードレールは決してブロックせず、書き換え（`modifiedPayload` /
  `modifiedResponse`）と注釈付け（`meta.credentialsRedacted`、`meta.count`）のみを
  行います。

リグレッションガード：`tests/unit/credential-masker-guardrail.test.ts`。

## 基底コントラクト (`base.ts`)

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
  block?: boolean; // true の場合、チェーンを即座に終了する
  message?: string; // ブロック時に通知される
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // リクエストを書き換えるために preCall から返される
  modifiedResponse?: TValue; // レスポンスを書き換えるために postCall から返される
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

ガードレールは、`void`、`{}`、または `{ block: false }` のいずれかを返すことで「変更なし」を示します。`modifiedPayload`/`modifiedResponse` を返すと、チェーンを通って後続のガードレールに渡される値が置き換えられます。
`signal?: AbortSignal` は、呼び出し元のライフサイクルをガードレールに引き継ぎます。リクエストの中断は、意図的なフェイルオープンの例外です。メディアブリッジは処理を停止してクリーンアップを行い、未加工のメディアをサポートしないことが判明しているターゲットに、そのメディアを復元することはありません。

## レジストリ (`registry.ts`)

シングルトンの `guardrailRegistry` は、以下を公開します。

- `register(guardrail)` — ガードレールを追加（または正規化された名前に基づいて置換）し、`priority` の昇順で再ソートします。
- `clear()` / `list()` — 管理用のヘルパーです。
- `runPreCallHooks(payload, context)` — 有効なガードレールを反復処理し、`modifiedPayload` を介してペイロードを順次引き渡し、最初の `block: true` で停止します。
- `runPostCallHooks(response, context)` — レスポンス側で同じ処理を行います。
- `resetGuardrailsForTests({ registerDefaults })` — 状態をクリアし、必要に応じてデフォルトを再登録することで、テストをクリーンに分離します。

どちらのランナーも `{ blocked, payload|response, results, guardrail?, message? }` を返します。ここで `results` は、ガードレールごとの `blocked`、`skipped`、`modified`、`error`、`meta` フィールドを含む `GuardrailExecutionResult` レコードの配列であり、トレースに役立ちます。

### リクエストごとのガードレールの無効化

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` は、現在のリクエストでスキップすべきガードレール名を重複のないリストとして集約します。情報源は以下のとおりです（すべて任意であり、すべてマージされます）。

- `apiKeyInfo.disabledGuardrails`
- リクエスト本文の `disabledGuardrails`（トップレベル）
- リクエスト本文の `metadata.disabledGuardrails`
- ヘッダー `x-omniroute-disabled-guardrails`（またはレガシーの `x-disabled-guardrails`）

値には文字列の配列またはカンマ区切りの文字列を指定できます。名前は小文字のケバブケースに正規化されます（`pii_masker` → `pii-masker`）。結果は `context.disabledGuardrails` を介してレジストリに渡され、レジストリは一致するガードレールをスキップします（`results` 内で `skipped: true`）。

## 実行順序

`src/sse/handlers/chat.ts` および
`open-sse/handlers/chatCore.ts` を通過する各リクエストについて:

1. `resolveDisabledGuardrails(...)` は、API キー、ボディ、
   ヘッダーからスキップリストを構築します。
2. `guardrailRegistry.runPreCallHooks(body, ctx)` は、優先度の昇順で
   ガードレールを実行します:
   - 無効化されたガードレールは `skipped` として記録されます。
   - 各ガードレールの `preCall` は、`modifiedPayload` を介してペイロードを書き換える場合があります。
   - 最初の `block: true` によってチェーンが短絡され、ハンドラーは
     ガードレールによる拒否レスポンスを返します。
3. （書き換えられている可能性のある）ペイロードは、コンボルーティングとアップストリームへの
   ディスパッチに渡されます。
4. レスポンスの構築後、`guardrailRegistry.runPostCallHooks(...)`
   はレスポンスに対して同じチェーンを実行します。ここで `block: true` になると、アップストリームの
   レスポンスは破棄されます。

例外をスローしたガードレールは `error: <message>` として記録され、
`logger.warn` を介してログに記録されますが、チェーンは継続します。これは意図的なフェイルオープン設計です。

## 設定

組み込みガードレールが読み取る環境変数:

| 変数                                  | 使用元                           | 効果                                                                                                                          |
| ------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`               | 検出を完全に無効化するには `false` に設定します。                                                                             |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`               | インジェクションポリシー: `warn`、`block`、または `log`。従来の値 `redact` ではインジェクションテキストは書き換えられません。 |
| `INJECTION_GUARD_MODE`                | `prompt-injection`               | インジェクションガードのモード。環境変数を**上書きする** DB 機能フラグでもあります（DB > ENV）。                              |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`               | `MODE=block` が拒否する最小重大度: `high`（デフォルト）、`medium`、または `low`。                                             |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`               | `INPUT_SANITIZER_BLOCK_THRESHOLD` の従来のエイリアス。                                                                        |
| `PII_REDACTION_ENABLED`               | `pii-masker`                     | `true` の場合、リクエスト内の PII が秘匿化されます（インジェクションモードとは独立）。                                        |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker`（ダウンストリーム） | レスポンス側のマスカーの動作を制御します。                                                                                    |

Modality Bridge ガードレールは、環境変数ではなく、DB を基盤とする設定
ストア（`getSettings()`）からランタイム設定を読み取ります。Vision の主要キーは
`modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、
`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、
`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、
`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`、
`modalityBridgeCacheEnabled`、`modalityBridgeCacheTtlMinutes`、および
`modalityBridgeCacheMaxEntries` です。従来の
`visionBridge*` キーは、文書化されている 1 サイクル限りの読み取り
フォールバックとしてのみ受け入れられます。ダッシュボードからの書き込みには主要キーが使用されます。デフォルト値とフォールバック
リゾルバーは `src/shared/constants/modalityBridgeDefaults.ts` にあり、従来の
定数は `src/shared/constants/visionBridgeDefaults.ts` に保持されています。

Audio は `modalityBridgeAudioEnabled`、`modalityBridgeAudioModel`、
`modalityBridgeAudioTimeout`、`modalityBridgeAudioMaxClips`、および共有の
`modalityBridgeCache*` 設定を使用します。これらのキーは Modality Bridge スキーマとともに
導入されたため、Audio には従来キーへのフォールバックはありません。

Video は `modalityBridgeVideoEnabled`、`modalityBridgeVideoAnalysisMode`、
`modalityBridgeVideoModel`、
`modalityBridgeVideoFrameCount`、`modalityBridgeVideoSamplingPolicy`、
`modalityBridgeVideoMaxVideos`、および
`modalityBridgeVideoTimeout` と、共有の `modalityBridgeCache*` 設定を使用します。
FFmpeg/ffprobe は任意の運用依存関係であり、
フレームのキャプション生成によってレイテンシとモデルコストが増加するため、デフォルトでは無効になっています。

## カスタムガードレール

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

手順:

1. `BaseGuardrail` を継承する `src/lib/guardrails/myGuardrail.ts` を作成します。
2. `preCall` および/または `postCall` を実装します。
3. インポート時に登録する（`registerDefaultGuardrails` から追加する）か、
   実行時に `guardrailRegistry.register(...)` を呼び出します。レジストリは、
   正規化された名前が同じ既存のガードレールを置き換えます。
4. `tests/unit/` 配下にテストを追加します（既存の例:
   `tests/unit/guardrails-registry.test.ts`、
   `tests/unit/prompt-injection-guard.test.ts`、
   `tests/unit/guardrails/visionBridge.test.ts`）。

## テスト

テスト間では `resetGuardrailsForTests()` を使用し、既知の状態から開始します。
空のレジストリから開始し、テスト対象のガードレールのみを登録するには、
`{ registerDefaults: false }` を渡します。Vision Bridge は依存性注入
（`deps.getSettings`、`deps.callVisionModel`）を受け付けます。Audio Bridge も、
設定、ケイパビリティ、STT モデル選択、認証情報チェック、文字起こしについて
同等の差し替えポイントを公開しています。そのため、テストでは DB や
ネットワークにアクセスせずに、両方のフローを実行できます。

## 関連項目

- `src/lib/guardrails/` — 実装
- `src/shared/utils/inputSanitizer.ts` — プロンプトインジェクションと PII マスキングを
  支える共有検出器
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge のデフォルト値と
  強制ブリッジモデルのリスト
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio で共有される実行時のデフォルト値
- `docs/architecture/RESILIENCE_GUIDE.md` — 直交するレイヤー（サーキットブレーカー、クールダウン）
- `docs/reference/ENVIRONMENT.md` — 環境変数の完全なリファレンス

## インジェクションガードのルートカバレッジとレッドチーム（フェーズ 8 · ブロック D）

インジェクションガード（`createInjectionGuard` / `withInjectionGuard`）は、ユーザープロンプトを
受け付けるすべてのルートを対象とします。`INJECTION_GUARD_MODE` に従って動作します（デフォルトの
`warn` = ログのみ、`block` = HTTP 400 `SECURITY_001` を返します）。

| 種類             | ルート                                                                                                                                               | デフォルトモード |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| テキスト（既存） | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| 生成系           | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| データ           | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

テキスト抽出（`extractMessageContents`）は、`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` を対象とします。

**レッドチーム（夜間実行、`nightly-llm-security.yml`）:** promptfoo は、
`INJECTION_GUARD_MODE=block` で各ルートが OWASP-LLM コーパスをブロックすることを検証します。
garak はプローブを実行します（シークレットがない場合はスキップします）。
一貫性を保つため、`moderations` も対象に含まれています。ブロックモードの運用者は、
`resolveDisabledGuardrails` を使用してこれを除外できます。

夜間ワークフロー（`.github/workflows/nightly-llm-security.yml`、cron + 手動
ディスパッチ）には、次の 2 つのジョブがあります:

- **`promptfoo-guard`（ブロッキング）** — `INJECTION_GUARD_MODE=block` を指定して
  `promptfoo eval -c promptfooconfig.yaml` を実行します。各敵対的ケース（例:
  「以前の指示をすべて無視せよ…」、DAN 形式のジェイルブレイク）では、
  レスポンスに `error.code === "SECURITY_001"` が含まれること、つまりガードが
  実際にリクエストを拒否したことを検証します。
- **`garak`（参考情報）** — ローカルの OmniRoute インスタンス
  （`http://localhost:20128/v1`）に対して、garak
  `--probes promptinject,dan,leakreplay` を実行します。プロバイダーシークレット
  （`PROMPTFOO_PROVIDER_KEY`）の存在を条件とし、シークレットがない場合は問題なく
  スキップされます。また、末尾に `|| true` が付いているため、CI を失敗させずに
  結果を報告します。

ガードヘルパー（`createInjectionGuard` / `withInjectionGuard`）のカバレッジは、
プロンプトを受け取るすべての `/v1` ルートに及びます。プロンプトテキストは、
`src/shared/utils/inputSanitizer.ts` 内の `extractMessageContents()` によって、
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` から
抽出されます。
