# Feature Flags (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../reference/FEATURE_FLAGS.md) · 🇸🇦 [ar](../../../ar/docs/reference/FEATURE_FLAGS.md) · 🇦🇿 [az](../../../az/docs/reference/FEATURE_FLAGS.md) · 🇧🇬 [bg](../../../bg/docs/reference/FEATURE_FLAGS.md) · 🇧🇩 [bn](../../../bn/docs/reference/FEATURE_FLAGS.md) · 🇧🇦 [bs](../../../bs/docs/reference/FEATURE_FLAGS.md) · 🇨🇿 [cs](../../../cs/docs/reference/FEATURE_FLAGS.md) · 🇩🇰 [da](../../../da/docs/reference/FEATURE_FLAGS.md) · 🇩🇪 [de](../../../de/docs/reference/FEATURE_FLAGS.md) · 🇬🇷 [el](../../../el/docs/reference/FEATURE_FLAGS.md) · 🇪🇸 [es](../../../es/docs/reference/FEATURE_FLAGS.md) · 🇪🇪 [et](../../../et/docs/reference/FEATURE_FLAGS.md) · 🇮🇷 [fa](../../../fa/docs/reference/FEATURE_FLAGS.md) · 🇫🇮 [fi](../../../fi/docs/reference/FEATURE_FLAGS.md) · 🇫🇷 [fr](../../../fr/docs/reference/FEATURE_FLAGS.md) · 🇮🇪 [ga](../../../ga/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [gu](../../../gu/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [ha](../../../ha/docs/reference/FEATURE_FLAGS.md) · 🇮🇱 [he](../../../he/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [hi](../../../hi/docs/reference/FEATURE_FLAGS.md) · 🇭🇷 [hr](../../../hr/docs/reference/FEATURE_FLAGS.md) · 🇭🇺 [hu](../../../hu/docs/reference/FEATURE_FLAGS.md) · 🇦🇲 [hy](../../../hy/docs/reference/FEATURE_FLAGS.md) · 🇮🇩 [id](../../../id/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [ig](../../../ig/docs/reference/FEATURE_FLAGS.md) · 🇮🇹 [it](../../../it/docs/reference/FEATURE_FLAGS.md) · 🇯🇵 [ja](../../../ja/docs/reference/FEATURE_FLAGS.md) · 🇬🇪 [ka](../../../ka/docs/reference/FEATURE_FLAGS.md) · 🇰🇭 [km](../../../km/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [kn](../../../kn/docs/reference/FEATURE_FLAGS.md) · 🇰🇷 [ko](../../../ko/docs/reference/FEATURE_FLAGS.md) · 🇱🇹 [lt](../../../lt/docs/reference/FEATURE_FLAGS.md) · 🇱🇻 [lv](../../../lv/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [ml](../../../ml/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [mr](../../../mr/docs/reference/FEATURE_FLAGS.md) · 🇲🇾 [ms](../../../ms/docs/reference/FEATURE_FLAGS.md) · 🇲🇹 [mt](../../../mt/docs/reference/FEATURE_FLAGS.md) · 🇲🇲 [my](../../../my/docs/reference/FEATURE_FLAGS.md) · 🇳🇵 [ne](../../../ne/docs/reference/FEATURE_FLAGS.md) · 🇳🇱 [nl](../../../nl/docs/reference/FEATURE_FLAGS.md) · 🇳🇴 [no](../../../no/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [or](../../../or/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [pa](../../../pa/docs/reference/FEATURE_FLAGS.md) · 🇵🇭 [phi](../../../phi/docs/reference/FEATURE_FLAGS.md) · 🇵🇱 [pl](../../../pl/docs/reference/FEATURE_FLAGS.md) · 🇵🇹 [pt](../../../pt/docs/reference/FEATURE_FLAGS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/reference/FEATURE_FLAGS.md) · 🇷🇴 [ro](../../../ro/docs/reference/FEATURE_FLAGS.md) · 🇷🇺 [ru](../../../ru/docs/reference/FEATURE_FLAGS.md) · 🇱🇰 [si](../../../si/docs/reference/FEATURE_FLAGS.md) · 🇸🇰 [sk](../../../sk/docs/reference/FEATURE_FLAGS.md) · 🇸🇮 [sl](../../../sl/docs/reference/FEATURE_FLAGS.md) · 🇷🇸 [sr](../../../sr/docs/reference/FEATURE_FLAGS.md) · 🇸🇪 [sv](../../../sv/docs/reference/FEATURE_FLAGS.md) · 🇰🇪 [sw](../../../sw/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [ta](../../../ta/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [te](../../../te/docs/reference/FEATURE_FLAGS.md) · 🇹🇭 [th](../../../th/docs/reference/FEATURE_FLAGS.md) · 🇹🇷 [tr](../../../tr/docs/reference/FEATURE_FLAGS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/reference/FEATURE_FLAGS.md) · 🇵🇰 [ur](../../../ur/docs/reference/FEATURE_FLAGS.md) · 🇺🇿 [uz](../../../uz/docs/reference/FEATURE_FLAGS.md) · 🇻🇳 [vi](../../../vi/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [yo](../../../yo/docs/reference/FEATURE_FLAGS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/reference/FEATURE_FLAGS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/reference/FEATURE_FLAGS.md)

---

> ያለ **ዳግም ማሰማራት** የOmniRouteን ባህሪ የሚቀይሩ የሩጫ ጊዜ መቀያየሪያዎች።
> እዚህ የተዘረዘረው እያንዳንዱ ጠቋሚ በ
> [`src/shared/constants/featureFlagDefinitions.ts`](../../src/shared/constants/featureFlagDefinitions.ts)
> ውስጥ ተገልጿል — ይህም ብቸኛው የእውነት ምንጭ ነው። ዳሽቦርዱም ሆነ REST API ከዚያ
> ፋይል ስለሚያነቡ፣ ከታች ያለው ሰንጠረዥ ከእሱ ጋር 1:1 እንዲዛመድ ተፈጥሯል።

---

## የባህሪ ጠቋሚዎች ምንድን ናቸው

የባህሪ ጠቋሚ በስም የተሰየመ መቀያየሪያ (boolean ወይም enum) ሲሆን፣ እሴቱ በሩጫ ጊዜ
ሊቀየር እና ዳግም የሂደት ማሰማራት ሳያስፈልግ በውሂብ ጎታው ውስጥ ሊቀመጥ ይችላል። እያንዳንዱ
ጠቋሚ `key`፣ `label`፣ `description`፣ `category`፣ `defaultValue`፣ `type` እና `requiresRestart`
ፍንጭ ባለው `FeatureFlagDefinition` ይገለጻል።

### የመፍትሔ ቅደም ተከተል

የአንድ ጠቋሚ **ተግባራዊ እሴት** በ
[`resolveFeatureFlag()`](../../src/shared/utils/featureFlags.ts) በሚከተለው
ቅድሚያ ይወሰናል (ከፍተኛው ያሸንፋል)፦

1. **የDB ተተኪ እሴት** — በ`feature_flags` የስም ክልል ስር ባለው `key_value`
   ሰንጠረዥ ውስጥ የተከማቸ እሴት (በዳሽቦርዱ ወይም በREST API በኩል የሚዋቀር)።
2. **የአካባቢ ተለዋዋጭ** — ከተዋቀረ እና ባዶ ካልሆነ `process.env[<KEY>]`።
3. **የትርጉም ነባሪ** — ከ`featureFlagDefinitions.ts` የሚገኘው `defaultValue`።

የboolean ጠቋሚ ተግባራዊ እሴቱ `"true"`፣ `"1"` ወይም `"yes"` ሲሆን
**እንደነቃ** ይቆጠራል (`isFeatureFlagEnabled()`ን ይመልከቱ)።

> [!NOTE]
> አብዛኞቹ ጠቋሚዎች በ[`ENVIRONMENT.md`](./ENVIRONMENT.md) ውስጥ የተመዘገበ
> **ተመሳሳይ ስም** ያለው ተዛማጅ የአካባቢ ተለዋዋጭም አላቸው። የጠቋሚው የDB ተተኪ እሴት
> ከዚያ የአካባቢ ተለዋዋጭ ቅድሚያ ይኖረዋል። `requiresRestart: true` ያለው ጠቋሚ
> ወዲያውኑ ይቀመጣል፣ ነገር ግን ዳግም የሚነበበው ሂደቱ ሲጀምር ብቻ ነው — እሱን መቀያየር በዳሽቦርዱ ውስጥ
> **"አገልጋዩን ዳግም ያስጀምሩ"** የሚል ሰንደቅ ያሳያል።

---

## የባንዲራዎች ካታሎግ

በ6 ምድቦች የተከፋፈሉ 86 ባንዲራዎች። **ነባሪ** ማለት በትርጉሙ የተወሰነው ነባሪ ነው — የውሂብ ጎታ መተኪያም ሆነ የአካባቢ ተለዋዋጭ በማይኖርበት ጊዜ
ጥቅም ላይ የሚውለው እሴት ነው።

### ደህንነት (10)

| ቁልፍ                                     | ዓይነት    | ነባሪ      | መግለጫ                                                                                                                                                                                                       |
| --------------------------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `REQUIRE_API_KEY`                       | boolean | `false`  | ለሁሉም ገቢ ጥያቄዎች API ቁልፍ እንዲኖር ያስገድዱ።                                                                                                                                                                         |
| `INPUT_SANITIZER_ENABLED`               | boolean | `true`   | ለሁሉም ጥያቄዎች የግቤት ማጽዳትን ያንቁ።                                                                                                                                                                                 |
| `INJECTION_GUARD_MODE`                  | enum    | `off`    | የፕሮምፕት ማስገባት መከላከያ ሁነታ። እሴቶች፦ `off`፣ `warn`፣ `block`፣ `redact`።                                                                                                                                            |
| `PII_REDACTION_ENABLED`                 | boolean | `false`  | PIIን ከጥያቄዎች ውስጥ ይደብቁ (`INPUT_SANITIZER_MODE` ላይ የማይመረኮዝ)።                                                                                                                                                  |
| `PII_RESPONSE_SANITIZATION`             | boolean | `false`  | PIIን ከአቅራቢ ምላሾች ውስጥ ያጽዱ።                                                                                                                                                                                   |
| `PII_RESPONSE_SANITIZATION_MODE`        | enum    | `redact` | ለPII ምላሽ ማጽዳት የሚያገለግል ሁነታ። እሴቶች፦ `redact`፣ `warn`፣ `block`፣ `off`።                                                                                                                                         |
| `OUTBOUND_SSRF_GUARD_ENABLED`           | boolean | `true`   | የቀድሞ ተለዋጭ ስም፦ በዚህ ባንዲራ ዳሽቦርድ መቀያየሪያ ላይ የተቀመጠ እሴት ከአካባቢው በፊት ይነበባል፤ በሁለቱም ውስጥ `false`፣ `0`፣ `no` ወይም `off` እንደ `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS` ሁሉ የወጪ URL መከላከያውን የአስተናጋጅ ማረጋገጫዎች ያጠፋል።             |
| `ALLOW_API_KEY_REVEAL`                  | boolean | `false`  | ማንነታቸው የተረጋገጠ የዳሽቦርድ ተጠቃሚዎች የተሸፈኑ እሴቶችን ብቻ ከማየት ይልቅ የተከማቹ API ቁልፎችን እንዲያሳዩ ይፍቀዱ።                                                                                                                           |
| `AUTH_LOG_INCLUDE_ACCOUNT_ID`           | boolean | `false`  | በAUTH ምዝግብ መስመሮች ውስጥ የመለያ ቅድመ ቅጥያውን ያካትቱ (ለምሳሌ፦ "<provider> account: abc12345... ጥቅም ላይ እየዋለ ነው")። የመለያ መለያዎች ከተጋሩ/ብዙ ተከራይ ካላቸው የሂደት ምዝግቦች እንዲደበቁ በነባሪ ተሰናክሏል። ከማረሚያ ሁነታ ነጻ ነው፤ የማረሚያ ሁነታን መቀየር ይህን አያሳይም። |
| `OMNIROUTE_OIDC_DISABLE_PASSWORD_LOGIN` | boolean | `false`  | OIDC ሲነቃ ተጠቃሚዎች በOIDC ነጠላ መግቢያ ብቻ ማንነታቸውን ማረጋገጥ እንዲችሉ የይለፍ ቃል መግቢያን ያሰናክሉ። ሲሰናከል (ነባሪው)፣ የይለፍ ቃል መግቢያም ሆነ OIDC ይገኛሉ።                                                                                       |

### አውታረ መረብ (23)

| ቁልፍ                                             | ዓይነት    | ነባሪ     | ዳግም ማስጀመር | መግለጫ                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------- | ------- | ------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ENABLE_TLS_FINGERPRINT`                        | boolean | `false` | ✓         | የTLS አሻራ ስውር ሁነታን አንቃ።                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `AUDIO_REMOTE_PROVIDER_NODES`                   | boolean | `false` |           | የ/v1/audio/* መስመሮች localhost ውጭ በሚስተናገዱ OpenAI-ተኳኋኝ የአቅራቢ ኖዶች እንዲጠቀሙ ፍቀድ። በነባሪ ጠፍቷል — ኦዲዮን ወደ ሩቅ አስተናጋጅ ማስተላለፍ የወጪ ትራፊክ ማንነትን ይቀይራል፣ እናም ይህ ግልጽ የኦፕሬተር ውሳኔ መሆን አለበት። የloopback ኖዶች ሁልጊዜ የተፈቀዱ ሲሆን በዚህ ቅንብር አይነኩም።                                                                                                                                                                                                                              |
| `RERANK_REMOTE_PROVIDER_NODES`                  | boolean | `false` |           | POST /v1/rerank (እና የማህደረ ትውስታ ሞተሩ የloopback ዳግም-ደረጃ አሰጣጥ ደረጃ) localhost ውጭ በሚስተናገዱ OpenAI-ተኳኋኝ የአቅራቢ ኖዶች እንዲጠቀሙ ፍቀድ። በነባሪ ጠፍቷል — ወደ ሩቅ አስተናጋጅ ማስተላለፍ የወጪ ትራፊክ ማንነትን ይቀይራል፣ እናም ይህ ግልጽ የኦፕሬተር ውሳኔ መሆን አለበት። የloopback ኖዶች ሁልጊዜ የተፈቀዱ ናቸው፤ የሩቅ ኖዶችም የአቅራቢውን የወጪ URL ፖሊሲ ማለፍ አለባቸው።                                                                                                                                                              |
| `PROXY_AUTO_SELECT_ENABLED`                     | boolean | `false` |           | ለግንኙነት ምንም proxy ካልተመደበ፣ ከመዝገቡ ውስጥ የመጀመሪያውን የሚሰራ proxy በራስ-ሰር ምረጥ። በነባሪ ጠፍቷል (አለበለዚያ በመዝገቡ ውስጥ ያለ ማንኛውም proxy ዓለም አቀፍ የመጠባበቂያ አማራጭ ይሆናል — #3332)።                                                                                                                                                                                                                                                                                              |
| `OMNIROUTE_CONTROL_PLANE_PROXY_DIRECT_FALLBACK` | boolean | `false` |           | የproxy ተደራሽነት ቅድመ-ምርመራዎች ሲወድቁ፣ OAuth እና የአቅራቢ ማረጋገጫ ፍሰቶች የተወሰነላቸውን proxy አልፈው በቀጥታ እንዲገናኙ ፍቀድ። ይህ የወጪ ትራፊክ IPን ሊቀይር ስለሚችል በነባሪ ጠፍቷል።                                                                                                                                                                                                                                                                                                           |
| `NETWORK_ROTATION_SHARED_EGRESS_GUARD`          | boolean | `true`  |           | ባለብዙ-መለያ የማዞሪያ አስፈጻሚ ላይ የአውታረ መረብ ልዩ ሁኔታ (ጊዜው ማለፍ፣ ግንኙነት ውድቅ መደረግ/ዳግም መጀመር) ሲከሰት፣ ያልተሳካው መለያ የተለየ proxy ከሌለው፣ እያንዳንዱን እንደገና ከመሞከር ይልቅ አጭር የማቀዝቀዣ ጊዜ ተግብር እና ለቀሪው ጥያቄ proxy የሌላቸውን ሌሎች መለያዎች ዝለል። በነባሪ በርቷል (ደህንነቱ የተጠበቀ፦ የወጪ ትራፊክ IP አይቀየርም፣ በጋራ የወጪ ትራፊክ በሚጠቀሙ መለያዎች ላይ የመዘግየት/የማቀዝቀዣ ጊዜ አደጋን ብቻ ይቀንሳል)። የመጀመሪያው proxy የሌለው ስህተት ሲወረወር ፈጣን ማስተላለፍን ለመመለስ አሰናክለው።                                                                              |
| `ROTATION_ATTRIBUTION`                          | boolean | `false` |           | የOpencode ማዞሪያ የትኛው መለያ ጥያቄውን እንዳገለገለ ወይም እንደተዘለለ ይመዘግባል (የተሸፈኑ ids ብቻ፣ ሙሉ የመለያ ids በፍጹም አይመዘገቡም)፣ እንዲሁም የproxy ምዝግብ ማስታወሻ ግቤቶችን ከጥያቄያቸው ጋር ያገናኛል፤ በዚህም ኦፕሬተሩ የተዘለሉ መለያዎችን ጥቅም ላይ ካልዋሉት መለየት ይችላል። በነባሪ ጠፍቷል።                                                                                                                                                                                                                                  |
| `PROXY_SKIP_RECENTLY_FAILED`                    | boolean | `true`  |           | የproxy ስብስቦች እና የopencode በየመለያው ማዞሪያ፣ አሁን የወደቀ proxyን (ውድቅ የተደረገ TCP probe ወይም በእሱ በኩል የደረሰ 429) በየሂደቱ ለተወሰነ ጊዜ እንደገና መጠቀም ያቆማሉ፤ ይህ ጊዜ በእያንዳንዱ ድግግሞሽ እጥፍ እየሆነ እስከተወሰነ ከፍተኛ ገደብ ይደርሳል። ምንም የproxy ሁኔታ አይጻፍም፤ ሁሉም እጩዎች ወደ ጎን ከተቀመጡ ምርጫው አይቀየርም። በነባሪ በርቷል፤ `false` መደበኛ ምርጫን ይመልሳል።                                                                                                                                                             |
| `PROXY_POOL_SHARED_EGRESS_ORDER`                | boolean | `false` |           | ኮታቸው በመውጫ አድራሻ ለሚመደብ አቅራቢዎች፣ በቅርቡ ውድቅ ከተደረገ አባል የታየ መውጫ አድራሻ ጋር የሚጋራ የፑል አባልን ከጤናማ አባላት በታች ደረጃ ይስጡት። ለቅደም ተከተል ብቻ ነው፤ ፈጽሞ አይገለልም። የሚያነበውን የውድቅ ምልክት የሚፈጥረው `PROXY_SKIP_RECENTLY_FAILED` ያስፈልገዋል። በነባሪነት ጠፍቷል።                                                                                                                                                                                                                                 |
| `PROXY_POOL_EGRESS_OBSERVATION`                 | boolean | `false` |           | በዳሽቦርዱ ውስጥ በፕሮክሲ ፑል ስር፣ ባለፉት 24 h ውስጥ ምን ያህል የታዩ የመውጫ IPዎች አባላቱን እንዳገለገሉ እና ምን ያህል ግንኙነቶች እንደተጠቀሙባቸው አሳይ። ለንባብ ብቻ ነው፣ ከፕሮክሲ ሎግ የሚሰላ ሲሆን ለማዘዋወር ፈጽሞ አይጠቀምም። በነባሪነት ጠፍቷል።                                                                                                                                                                                                                                                                        |
| `PROXY_OPERATOR_EGRESS_ENABLED`                 | boolean | `false` |           | ኦፕሬተር የላካቸውን፣ ቀን የተመዘገበባቸውን የታዩ አድራሻዎች ለእያንዳንዱ የፑል አባል ተቀበል እና ለማሳያና ለፑል ቅደም ተከተል ከጆርናሉ ንባብ ጋር አዋህዳቸው። በነባሪነት ጠፍቷል፦ የመላኪያ መስመሩ 404 ይመልሳል እና የፑል ንባቦች ልክ እንደበፊቱ ይሠራሉ።                                                                                                                                                                                                                                                                           |
| `OPENCODE_RESPONSES_STALL_ROTATION`             | boolean | `false` |           | ለOpenCode አስፈጻሚ፣ የበዥ የResponses ምላሽን የመጀመሪያ የይዘት ባይት ይከታተሉ (መስኮት፦ `RESPONSES_FIRST_BYTE_TIMEOUT_MS`፣ ነባሪ `15000`)። ከመስኮቱ በላይ ዝም ብሎ የሚቆይ 2xx Responses ዥረት እንደተቋረጠ ይቆጠራል፦ መለያው የማቀዝቀዣ ጊዜ ውስጥ ይገባል እና ጥያቄው አንድ ጊዜ ወደሚቀጥለው መለያ ይዞራል፤ ሁለተኛ መቋረጥ ወዲያውኑ እንዲከሽፍ ያደርጋል። በነባሪነት ጠፍቷል፦ የተቋረጡ ዥረቶች እስከ ዥረት ዝግጁነት ጊዜ ማብቂያ ድረስ ያለውን የአሁኑን መጠበቅ ይቀጥላሉ።                                                                                                       |
| `OPENCODE_USER_BLOCKED_ROTATION`                | boolean | `false` |           | OpenCode አስፈጻሚ፦ የ`user_blocked` ውድቅ ምላሽ የያዘ 403/451 ሲመጣ (የአካባቢ ገደብ ያልሆነ፣ የCloudflare አሻራ ውድቅ ምላሽም ያልሆነ)፣ ውድቅ የተደረገውን መለያ የማቀዝቀዣ ጊዜ ውስጥ አስገብተው በአንድ ጥያቄ ውስጥ ቢበዛ አንድ ጊዜ ወደሚቀጥለው መለያ ያዙሩ፤ ሁለተኛ ውድቅ ምላሽ የስኬት ምልክት ሳይሰጠው እንዳለ ይመለሳል። በነባሪነት ጠፍቷል፦ የላይኛውን የተጠቃሚ እገዳ በማለፍ ማዘዋወር ማምለጥ ሊመስል እና ምልክቱን በመላው ፍሊት ሊያሰራጭ ይችላል።                                                                                                                               |
| `OPENCODE_TRANSIENT_FAILOVER_BACKOFF`           | boolean | `false` |           | OpenCode ማዞር፦ ሁለት ተከታታይ ጊዜያዊ የላይኛው አገልግሎት ውድቀቶች (5xx ወይም ባዶ 400) ከተከሰቱ በኋላ፣ ወደሚቀጥለው መለያ ከመሄድ በፊት ለአፍታ ያቁሙ — ከ1.5s ጀምሮ በእያንዳንዱ ተጨማሪ ውድቀት እጥፍ የሚሆን፣ ለእያንዳንዱ ማቆሚያ እስከ 6s እና ለእያንዳንዱ ጥያቄ እስከ 10s የተገደበ፣ ደንበኛው ግንኙነቱን ከቆረጠ የሚዘለል፤ ያልተሳካው የምላሽ ይዘት ከመጠበቅ በፊት ይለቀቃል። በነባሪነት ጠፍቷል፦ የመጠባበቂያ ሽግግሩ ወዲያውኑ ይቀጥላል።                                                                                                                                           |
| `OPENCODE_PARK_AND_RESUME`                      | boolean | `false` |           | OpenCode ማዞር፦ ተደጋጋሚ ጊዜያዊ 429ዎች (ወይም አዲስ የፑል ጫና ምልክት) ከተከሰቱ በኋላ ጥያቄውን ከheartbeat ጋር ያቆዩት፤ ከዚያም መላውን ፍሊት በአንድ ጊዜ ከማሰማራት ይልቅ እስከ 3 ተከታታይ መለያዎች ያለውን አንድ የተገደበ ዙር እንደገና ያስኪዱ። በነባሪነት ጠፍቷል፦ እያንዳንዱ 429 ልክ እንደበፊቱ ወደሚቀጥለው መለያ ያዞራል።                                                                                                                                                                                                                  |
| `STREAM_READINESS_STALL_RETRY`                  | boolean | `false` |           | የዥረት ውይይት፦ የመጀመሪያው የላይኛው ምላሽ ይዘት ጥቅም ላይ የሚውል ክስተት ከማምጣቱ በፊት ሲቋረጥ፣ በተመሳሳይ የማዘዋወር መንገድ፣ በተመሳሳይ የዝግጁነት በጀት እና በመለያው ላይ ምንም ቅጣት ሳይኖር አንድ የተገደበ ሁለተኛ ሙከራ ያድርጉ። በነባሪነት ጠፍቷል፦ የተቋረጠ የመጀመሪያ ምላሽ ይዘት ያለዳግም ሙከራ ጥያቄውን ያሳካዋል።                                                                                                                                                                                                                             |
| `FLUSH_EMPTY_RETRY_ENABLED`                     | boolean | `false` |           | በተተረጎሙ የዥረት ዙሮች ላይ፣ የላይኛው ዙር ጥቅም ላይ የሚውል ይዘት ከሌለው (የማመዛዘን-ብቻ ማጠናቀቂያ ወይም ዜሮ ጠቃሚ ቁርጥራጮች)፣ ለደንበኛው ምንም ነገር ከመጋለጡ በፊት በመደበኛው የማረጋገጫ መንገድ የተገደቡ ዳግም ሙከራዎችን (እስከ `STREAM_RECOVERY.EMPTY_TURN_RETRY_MAX`) ያድርጉ። በነባሪነት ጠፍቷል፦ ባዶ ዙሮች የአሁኑን ባህሪ (ባዶ 200 ወይም ባዶ-ይዘት 502) ይይዛሉ።                                                                                                                                                                            |
| `OPENCODE_POOL_RESELECT`                        | boolean | `false` |           | OpenCode ማዞር፦ በአካባቢያዊ የፑል አውድ ውስጥ ፕሮክሲ በሌለው መለያ ላይ፣ ኮታው በመውጫ አድራሻ ከሚመደብ አቅራቢ 429 ከመጣ በኋላ፣ በተመሳሳይ መውጫ አድራሻ እንደገና ከመሞከር ይልቅ ለሚቀጥለው ሙከራ ሌላ አባል እንዲመርጥ የግንኙነት ፑሉን ይጠይቁ። ቅደም ተከተል ያስቀምጣል እንጂ ፈጽሞ አያገልም፦ የተሟጠጠ ፑል የአሁኑን ባህሪ ይቀጥላል። በነባሪነት ጠፍቷል፦ እያንዳንዱ 429 ልክ እንደበፊቱ ወደሚቀጥለው መለያ ያዞራል።                                                                                                                                                               |
| `OPENCODE_RATE_LIMITED_429_EARLY_STOP`          | boolean | `false` |           | OpenCode ማዞሪያ፦ እንደ እውነተኛ የፍጥነት ገደብ የተመደበው የመጀመሪያው 429 ሲከሰት (ሊተነተን የሚችል `Retry-After`፣ ወይም የፍጥነት/አጠቃቀም ገደብን የሚጠቅስ body) የመለያዎችን ማዕበል ያቁሙ እና ያንኑ የupstream 429 ሳይቀየር ይመልሱ። ያልተመደቡ 429ዎች ማዞራቸውን ይቀጥላሉ። በነባሪ ጠፍቷል፦ ነፃው ደረጃ በእያንዳንዱ የመውጫ IP የተገደበ ነው (#9611)፣ ስለዚህ እያንዳንዱ 429 ማዞርን ያስከትላል እና የተሟጠጠ ማዕበል የመጨረሻውን የupstream 429 ይመልሳል።                                                                                                                |
| `MITM_DISABLE_TLS_VERIFY`                       | boolean | `false` | ✓         | ለMITM proxy የTLS ሰርቲፊኬት ማረጋገጫን ያሰናክሉ። **አደገኛ ነው።**                                                                                                                                                                                                                                                                                                                                                                                             |
| `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS`         | boolean | `false` |           | በprovider URL ማረጋገጫ፣ model discovery፣ provider-node base URLዎች እና የproxy-fallback ሙከራ ላይ ያሉትን የወጪ URL guard host ማረጋገጫዎች—የcloud-metadata እገዳን ጨምሮ—ያጠፋል፣ እንዲሁም የግል webhook መዳረሻዎችን ይፈቅዳል። በማረጋገጫ፣ discovery እና provider-node መንገዶች ላይ የlocal እና LAN URLዎች በነባሪ ያልፋሉ (`OMNIROUTE_ALLOW_LOCAL_PROVIDER_URLS`)፤ የproxy-fallback ሙከራው እና የግል webhook መዳረሻዎች `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS`ን ብቻ ያማክራሉ እና እሱ ጠፍቶ ሳለ የlocal/LAN hostዎችን ያግዳሉ። |
| `OMNIROUTE_ALLOW_LOCAL_PROVIDER_URLS`           | boolean | `true`  |           | በlocal/private አድራሻዎች (127.0.0.1, localhost, LAN) ላይ ያሉ provider URLዎችን ፍቀድ። በነባሪ በርቷል (local-first)፦ ከዚያ guardው የcloud-metadata endpointዎችን (ሁሉንም 169.254.0.0/16 እና የታወቁትን metadata hostnameዎች ጨምሮ) ያግዳል። ለጥብቅ public-only እገዳ ያሰናክሉት፦ private እና loopback hostዎችም ይታገዳሉ።                                                                                                                                                                     |
| `ENABLE_CC_COMPATIBLE_PROVIDER`                 | boolean | `false` | ✓         | ከClaude Code ጋር ተኳሃኝ የሆነ provider modeን ያንቁ።                                                                                                                                                                                                                                                                                                                                                                                                   |

### ፖሊሲዎች (6)

| ቁልፍ                             | ዓይነት    | ነባሪ        | መግለጫ                                                                                                                                                                                       |
| ------------------------------- | ------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `TOOL_POLICY_MODE`              | enum    | `disabled` | የtool-use ፖሊሲ ማስፈጸሚያ mode። እሴቶች፦ `disabled`፣ `warn`፣ `block`።                                                                                                                              |
| `RATE_LIMIT_AUTO_ENABLE`        | boolean | `false`    | በenv var በኩል የራስ-ሰር ማንቃት የrate-limit ደህንነት መረብን እንዲበራ/እንዲጠፋ ያስገድዱ። runtimeው env varን ብቻ ያነባል፦ ካልተዘጋጀ የdashboard ቅንብሩን (በነባሪ በርቷል) ይከተላል፣ ይህን የcatalog ነባሪ አይከተልም።                          |
| `DISABLE_CONTEXT_WINDOW_CHECKS` | boolean | `false`    | ለቀጥታ የsingle-model ጥያቄዎች የOmniRouteን local context-window / max-input-token ማረጋገጫ ዝለል። የupstream ገደቦች አሁንም ተፈጻሚ ናቸው።                                                                       |
| `CAPABILITY_FILTER_ENABLED`     | boolean | `false`    | ዒላማው model የሚያስፈልጉ ችሎታዎች (vision፣ tools፣ structured output፣ context window) ከሌሉት ጥያቄዎችን ከመላካቸው በፊት ውድቅ አድርግ። የcombo-layer compatibility filterን የሚያልፉ ቀጥተኛ የsingle-provider ጥያቄዎችን ይከላከላል። |
| `USAGE_LIMIT_IGNORE_UNPRICED`   | boolean | `false`    | የዋጋ መረጃ የሌላቸውን modelዎች አጠቃቀም፣ ኮታው እንደታለፈ ከመቁጠር ይልቅ፣ በper-key USD የአጠቃቀም ኮታዎች ውስጥ እንደ $0 ቁጠር። በነባሪ ጠፍቷል፦ ዋጋ ያልተወሰነለት model ወይም routing alias እውነተኛ ወጪን ሊደብቅ ስለሚችል ኮታው fail-closed ያደርጋል።    |
| `RADAR_ENABLED`                 | boolean | `false`    | የOmniRoute Radar moduleን (የcatalog feed ማያ ገጾችን እና syncን) ያንቁ። በነባሪ ጠፍቷል፤ ማንቃት UIውን ብቻ ይከፍታል—የውሂብ sync የተለየ opt-in ሆኖ ይቆያል።                                                                |

### Runtime (37)

| ቁልፍ                                         | ዓይነት    | ነባሪ     | ዳግም ማስጀመር | መግለጫ                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------- | ------- | ------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `UNIVERSAL_CONTEXT_HANDOFF_ENABLED`         | boolean | `true`  |           | የጥምር ማዘዋወር ሞዴሎችን ሲቀይር የውይይት ማጠቃለያዎችን ያመነጫል እና ያስገባል። የሞዴል ቅያሪዎችን እንደ የተለያዩ ሂደቶች ለመቁጠር እና ለሁሉም ነባር እና ወደፊት ለሚፈጠሩ ጥምሮች የጀርባ ሂደት ርክክብ ጥያቄዎችን ለመከላከል ያሰናክሉት።                                                                                                                                                                                                                                                                                                              |
| `REASONING_REPLAY_ENABLED`                  | boolean | `true`  |           | ባለብዙ-ዙር ውይይቶች ውስጥ የሞዴል አመክንዮን መሸጎጫ ውስጥ ያስቀምጣል እና እንደገና ያጫውታል። አመክንዮን ማከማቸት እና እንደገና ማስገባትን ለማቆም ያሰናክሉት።                                                                                                                                                                                                                                                                                                                                                               |
| `RESPONSES_PASSTHROUGH_DROP_COMMENTARY`     | boolean | `true`  |           | ወደ ደንበኞች ከመላካቸው በፊት ከResponses API ቀጥታ-ማሳለፊያ ዥረቶች ውስጣዊ የአስተያየት-ደረጃ የውጤት ንጥሎችን ያስወግዳል። ያልተለወጠ የላይኛው ምንጭ አስተያየትን ለመቀበል ያሰናክሉት።                                                                                                                                                                                                                                                                                                                                          |
| `OMNIROUTE_MCP_ENFORCE_SCOPES`              | boolean | `false` |           | በMCP መሣሪያ መዳረሻ ላይ የወሰን ገደቦችን ያስፈጽማል።                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `OMNIROUTE_MCP_COMPRESS_DESCRIPTIONS`       | boolean | `false` |           | የቶከን አጠቃቀምን ለመቀነስ የMCP መሣሪያ መግለጫዎችን ይጨምቃል።                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `OMNIROUTE_ENABLE_RUNTIME_BACKGROUND_TASKS` | boolean | `false` |           | በአሂድ ጊዜ የጀርባ ተግባር ሂደትን ያነቃል።                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `OMNIROUTE_DISABLE_BACKGROUND_SERVICES`     | boolean | `false` | ✓         | ሁሉንም የጀርባ አገልግሎቶች (የኮታ ማደስ፣ ማመሳሰል፣ ወዘተ) ያሰናክሉ።                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `OMNIROUTE_RTK_TRUST_PROJECT_FILTERS`       | boolean | `false` |           | የፕሮጀክት ደረጃ RTK ማጣሪያዎችን ያለማረጋገጥ ይመኑ።                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `OMNIROUTE_ENABLE_LIVE_WS`                  | boolean | `true`  | ✓         | በማስመጣት ጊዜ የቅጽበታዊ ዳሽቦርድ WebSocket አገልጋይን ያስጀምሩ (በነባሪ ወደብ 20132)።                                                                                                                                                                                                                                                                                                                                                                                                       |
| `OMNIROUTE_CODEX_WS_ENABLED`                | boolean | `true`  |           | Codex Responses-over-WebSocket ማጓጓዣን እንዲጠቀም ይፍቀዱ። ሲጠፋ፣ Codex ወደ HTTP Responses ይመለሳል።                                                                                                                                                                                                                                                                                                                                                                                 |
| `OMNIROUTE_CODEX_APP_SERVER_ENABLED`        | boolean | `true`  |           | Codex የአካባቢ app-server WebSocket JSON-RPC ማጓጓዣን (codexTransport=app-server) እንዲጠቀም ይፍቀዱ። ሲጠፋ፣ app-server ለመጠቀም የተመረጡ ግንኙነቶች ወደ ሌሎች የCodex ማጓጓዣዎች ይመለሳሉ።                                                                                                                                                                                                                                                                                                               |
| `OMNIROUTE_EMERGENCY_FALLBACK`              | boolean | `true`  |           | በጀታቸው ያለቀ ጥያቄዎችን ወደ አስቸኳይ ነፃ አማራጭ አቅራቢ/ሞዴል ይምሩ። (ከታች [የአስቸኳይ ጊዜ የበጀት አማራጭ](#emergency-budget-fallback)ን ይመልከቱ።)                                                                                                                                                                                                                                                                                                                                                       |
| `STREAM_RECOVERY_ENABLED`                   | boolean | `false` |           | ማንኛውም የምላሽ ባይቶች ደንበኛው ጋር ከመድረሳቸው በፊት ለተቋረጡ የላይኛው ምንጭ SSE ዥረቶች ግልጽ የቅድመ ድጋሚ ሙከራን ያንቁ።                                                                                                                                                                                                                                                                                                                                                                                  |
| `STREAM_RECOVERY_MIDSTREAM_ENABLED`         | boolean | `false` |           | ባይቶች ደንበኛው ጋር ከደረሱ በኋላ የዥረት መልሶ ማግኘት ምላሹን እንደገና እንዲጠይቅና እንዲያገናኝ ይፍቀዱ።                                                                                                                                                                                                                                                                                                                                                                                                 |
| `STREAM_RECOVERY_TOOLCALL_ORDER_FIX`        | boolean | `false` |           | በዥረት መካከል የሚደረገውን ቀጣይነት ለመሣሪያ ጥሪ ደህንነቱ የተጠበቀ ያደርጋል፦ የመሣሪያ ጥሪ ከተላከ በኋላ (በሂደት ላይ ያለ ወይም አስቀድሞ በ finish_reason tool_calls የተጠናቀቀ) የተቋረጠ ዥረትን በፍጹም አይቀጥልም፤ እንዲሁም ሙሉ በጀቱን ከማሟጠጥ ይልቅ ከአንድ ባዶ ቀጣይነት በኋላ ይዘጋል። ሲጠፋ፦ የልቀት ባህሪ።                                                                                                                                                                                                                                                 |
| `STREAM_EARLY_EOF_SIBLING_FAILOVER_ENABLED` | boolean | `false` |           | የSSE ዥረት ምንም ጠቃሚ ፍሬም ሳያወጣ ሲዘጋ እና በተመሳሳይ ግንኙነት ላይ ያለው የተገደበ ዳግም ሙከራ ሲያልቅ፣ አንድ ጊዜ ወደ ተጓዳኝ ግንኙነት ይሸጋገራል፤ ጥቅም ላይ የሚውል ተጓዳኝ ከሌለ የመጀመሪያው `STREAM_EARLY_EOF` 502 ይመለሳል። በነባሪ ጠፍቷል፦ በተመሳሳይ ግንኙነት ላይ ከሚደረገው ዳግም ሙከራ በኋላ ቀደምት-EOF የመጨረሻ ሆኖ ይቆያል።                                                                                                                                                                                                                                |
| `MODEL_CATALOG_INCLUDE_NAMES`               | boolean | `true`  |           | ለእይታ ምቹ የሆኑ የስም መስኮችን በ`/v1/models` ምላሾች ውስጥ ያካትታል። የሞዴል IDዎችን ብቻ ለሚጠብቁ ደንበኞች ያሰናክሉት።                                                                                                                                                                                                                                                                                                                                                                                 |
| `MODELS_CATALOG_PREFIX_MODE`                | enum    | `dual`  |           | የሞዴል IDዎች በ/v1/models ውስጥ ቅድመ ቅጥያ የሚያገኙበትን መንገድ ይቆጣጠራል። 'dual' (ነባሪ) ለኋላቀር ተኳኋኝነት የቅጽል ስም እና መደበኛ provider-id ቅድመ ቅጥያዎችን ሁለቱንም ያወጣል። 'alias' አጭሩን የቅጽል ስም ቅድመ ቅጥያ ብቻ ያወጣል (ለምሳሌ ds-web/model፣ deepseek-web/model አይደለም)። 'canonical' ሙሉውን provider-id ቅድመ ቅጥያ ብቻ ያወጣል። እሴቶች፦ `dual`፣ `alias`፣ `canonical`።                                                                                                                                                            |
| `ARENA_ELO_SYNC_ENABLED`                    | boolean | `true`  |           | ለሞዴል የብልህነት ደረጃዎች ወቅታዊ የArena AI የመሪዎች ሰሌዳ ELO ማመሳሰልን ያነቃል።                                                                                                                                                                                                                                                                                                                                                                                                           |
| `EXPOSE_CC_DISCOVERY_ALIASES`               | boolean | `false` |           | የClaude Code መግቢያ መንገድ የሞዴል ፍለጋ Claude ያልሆኑ ሞዴሎችን እንዲዘረዝር፣ የ`claude/<provider>/<model>` አንጸባራቂ IDዎችን በ`/v1/models` ላይ ያስተዋውቃል። የሶስት-ደረጃ መግቢያው ዓለም አቀፍ ደረጃ (env ከዳሽቦርድ መሻር ይቀድማል)። [የClaude Code ውቅር](../guides/CLAUDE-CODE-CONFIGURATION.md#discovery-aliases--surface-non-claude-models-in-the-model-picker)ን ይመልከቱ።                                                                                                                                                 |
| `NO_THINKING_ALIAS_ENABLED`                 | boolean | `true`  |           | ለ no-think/<provider>/<model> የመግቢያ መንገድ ቅጽል ስሞች ዋና ማብሪያ/ማጥፊያ። ሲበራ (ነባሪ)፦ /v1/models ለእያንዳንዱ ብቁ እና የማሰብ ችሎታ ላለው የClaude ሞዴል ያለማሰብ ልዩነትን ያስተዋውቃል፤ እንዲሁም በጥያቄ ላይ የተላከ no-think/ id ማመዛዘን ታፍኖ ወደ እውነተኛው ሞዴል ተመልሶ ይፈታል። ሲጠፋ፦ ምንም ልዩነቶች አይተዋወቁም፣ እና no-think/ id እንደማንኛውም ሌላ ያልታወቀ የሞዴል id ይቆጠራል። ይህ በርቶ ሳለ የእያንዳንዱ ሞዴል ModelSpec.noThinkingAlias የመርጦ መግባት/የመርጦ መውጣት አሁንም ተፈጻሚ ነው።                                                                                        |
| `OMNIROUTE_DISABLE_THINKING_LEVEL_VARIANTS` | boolean | `false` |           | በ/v1/models ካታሎግ ውስጥ የማሰብ ደረጃ ልዩነቶችን (ለምሳሌ -low፣ -medium፣ -high) ማመንጨትን ያሰናክላል።                                                                                                                                                                                                                                                                                                                                                                                       |
| `OMNIROUTE_CHAT_VIRTUAL_LANES`              | boolean | `false` | ✓         | ለአቅራቢ ማሰራጨት በተከራይ የሚለያዩ ተለዋዋጭ ምናባዊ የመግቢያ መስመሮችን ያንቁ (#9654)፦ የአንድ ተከራይ ድንገተኛ ጭማሪ ከእንግዲህ በሌላው ላይ 503 አያስከትልም። የ `OMNIROUTE_CHAT_VIRTUAL_LANES` አካባቢ ተለዋዋጭ ከዚህ የዳሽቦርድ መሻሪያ ቅንብር ይቀድማል፤ ለውጦች አገልጋዩ ዳግም ሲጀመር ተግባራዊ ይሆናሉ።                                                                                                                                                                                                                                                  |
| `EXPOSE_FUNCTIONAL_GATEWAY_MIRRORS`         | boolean | `false` |           | መደበኛው ባለቤታቸው ንቁ ማረጋገጫ የሌለው፣ ነገር ግን ንቁ ማረጋገጫ ያለው የማሳለፊያ ጌትዌይ የሚያስተላልፋቸውን ሞዴሎች <gateway-alias>/<model> የማንጸባረቂያ መለያዎች በ /v1/models ላይ ያስተዋውቁ። ማስጠንቀቂያ፦ በዓለም አቀፍ ደረጃ ሲነቃ ለሁሉም ደንበኞች የካታሎግ ግቤቶችን ይጨምራል።                                                                                                                                                                                                                                                                   |
| `NEWAPI_AGGREGATOR_BALANCE`                 | boolean | `false` |           | ከNew-API / One-API / Sub2API ማሰባሰቢያ ጋር ተኳሃኝ ለሆኑ ኖዶች የሒሳብ ቀሪ ማወቂያን ያንቁ። ሲነቃ፣ የማሰባሰቢያ ምልክት የተዋቀረባቸው ተኳሃኝ ኖዶች የሒሳብ ቀሪያቸውን በዳሽቦርዱ እና በኮታ-ቅድመ-ማጣሪያ ማስተላለፊያ ውስጥ ሪፖርት ያደርጋሉ።                                                                                                                                                                                                                                                                                                 |
| `SERVER_OWNED_TOOL_LOOP_ENABLED`            | boolean | `false` |           | ሞዴሉ ደንበኛው ሊጠቀምበት የሚችል ምላሽ እስኪመልስ ድረስ በአገልጋዩ የሚተዳደሩ ዥረት-አልባ የመሣሪያ ጥሪዎችን ይቀጥሉ።                                                                                                                                                                                                                                                                                                                                                                                          |
| `SEARCH_STATS_HIDE_DELETED_CONNECTIONS`     | boolean | `false` |           | የፍለጋ ስታቲስቲክስ እና የቅርብ ጊዜ ፍለጋዎች አሁንም ንቁ ግንኙነት ያላቸውን አቅራቢዎች ብቻ ይቆጥራሉ (እንደ duckduckgo-free ያሉ ቁልፍ የማይፈልጉ አቅራቢዎች ሁልጊዜ ይቆጠራሉ)። ማጥፋት ከአቅራቢ መለያ ጋር የተያዘ እያንዳንዱን የፍለጋ ረድፍ ያቆያል።                                                                                                                                                                                                                                                                                                |
| `FREE_BADGE_REQUIRES_PROVIDER_FREE_TIER`    | boolean | `false` |           | የዳሽቦርድ የአቅራቢ ገጾች፦ የነፃ ባጁን አቅራቢው በሚያከብራቸው ምልክቶች ላይ ብቻ ያሳዩ — የማሳያ-ስም ግምታዊ ዘዴን፣ boolean ያልሆኑ የነፃ መስኮችን እና በሰነድ የተረጋገጠ የነፃ ደረጃ በሌላቸው የተመዘገቡ አቅራቢዎች ላይ ያሉ :free ቅጥያዎችን ያስወግዳል። ማጥፋት ታሪካዊውን የባጅ ደንብ ያቆያል።                                                                                                                                                                                                                                                                   |
| `RETRY_AFTER_PROVENANCE_ENABLED`            | boolean | `false` |           | በተዋሃዱ የ429/503 አይገኝም ምላሾች ላይ፣ የተወሰነ የወደፊት ዳግም ሙከራ ጊዜ ካልታወቀ `Retry-After`ን አያካትቱ (ሰው ሠራሽ 1s ከማካተት ይልቅ)፣ `error.retry_after_provenance` (`signal` \| `none`)ን ይጨምሩ፣ እንዲሁም የኮምቦ ማሟጠጫ መንገዶች በJSON እና በቀላል-ጽሑፍ የላይኛው ምንጭ አካላት ውስጥ ያሉ ገላጭ የዳግም ሙከራ ፍንጮችን እንዲያነቡ ይፍቀዱ። መስኩ በ `unavailableResponse()` በተገነቡ ምላሾች ላይ ብቻ ይታያል፤ ሌሎች የ429/503 አካላት ሳይቀየሩ ይቆያሉ።                                                                                                                    |
| `PROTECTED_PRIORITY_INFRA_502_ENABLED`      | boolean | `false` |           | በኮታ መሟጠጥ ጊዜ ብቻ ወደ አማራጭ እንዲዞር ምልክት የተደረገበት የ`priority` ኮምቦ ዒላማ፣ ኮታ አለመሆኑ በማስረጃ ሊረጋገጥ በሚችል ምክንያት (የአቅራቢ የወረዳ መቋረጫ ክፍት መሆን፣ ትንበያዊ የመዘግየት ጊዜ መዝለል) ኮምቦውን ሲያቆም፣ ኮታ የሚመስለውን 503 ከመመለስ ይልቅ 502 ይመልሱ። መቆለፍ፣ የማቀዝቀዣ ጊዜ፣ አለመገኘት፣ መሟጠጥ እና የተመሳሳይ-ጊዜ ገደብ ማቆሚያዎች 503ን ያቆያሉ።                                                                                                                                                                                                        |
| `MISTRAL_AMBIGUOUS_401_SOFT_LOCKOUT`        | boolean | `false` |           | ግልጽ የማረጋገጫ ምልክት የሌለው ቀላል Mistral 401 (`{"detail":"Unauthorized"}`) ለተሻረ ቁልፍ እና ለተሟጠጠ ኮታ ተመሳሳይ ነው። ሲበራ፣ ግንኙነቱን `expired` ብሎ ከማቆም ይልቅ ያቀዘቅዘዋል፤ ይህም በአንድ ግንኙነት በሰዓት ከ3 ጊዜ ያልበለጠ ነው። ቀጣዩ ጊዜ ግን ያቆመዋል፣ ስለዚህ የተሻረ ቁልፍ በመጨረሻ ወደዚህ ሁኔታ ይደርሳል። በነባሪነት ጠፍቷል፦ እያንዳንዱ ቀላል Mistral 401 እንደቀድሞው ግንኙነቱን ያቆማል።                                                                                                                                                                        |
| `GROK_SUBSCRIPTION_IMAGES_ENABLED`          | boolean | `false` |           | የxai-oauth (xao) እና grok-cli የምስል መስመሮችን ይመዝግቡ እና የOpenAI ጥራት high/hdን ወደ xAI medium ያዛምዱ። በነባሪነት ጠፍቷል፦ በAPI ቁልፍ ላይ የተመሠረተው የxAI ምስል ዱካ አሁን ባለው OpenAI-ተኳሃኝ ጥያቄ ላይ ይቆያል፣ እና የደንበኝነት ምዝገባ መስመሮቹ አይመዘገቡም።                                                                                                                                                                                                                                                               |
| `XAI_OAUTH_LIVE_MODEL_DISCOVERY`            | boolean | `true`  |           | የቀዘቀዘውን ቋሚ መነሻ ከመጠቀም ይልቅ፣ OAuth bearer tokenን በመጠቀም ለxai-oauth ግንኙነቶች የቀጥታውን የxAI ሞዴል ካታሎግ ከhttps://api.x.ai/v1/models ያምጡ። በነባሪነት በርቷል። ቋሚውን መነሻ ማቅረብዎን ለመቀጠል ጠቋሚውን ወደ false ያዘጋጁ። የHTTP ውድቀቶች በፍለጋ መስመሩ ውስጥ ወደ መነሻው ይመለሳሉ፤ የጠቋሚው getter ራሱ HTTP ጥያቄ አያደርግም።                                                                                                                                                                                                         |
| `BATCH_AND_FILE_AUTO_CLEANUP_ENABLED`       | boolean | `false` |           | ራስ-ሰር የማጽዳት ዙሩ `OMNIROUTE_BATCH_RETENTION_DAYS` ከሚወስነው በላይ ያረጁ ተርሚናል (completed/failed/cancelled/expired) Batch API ሥራዎችን ከየመስመራቸው checkpoints ጋር እንዲሰርዝ፣ እንዲሁም የየራሳቸውን `expires_at` ያለፉ የተሰቀሉ ፋይሎችን BLOB ይዘት እንዲያጸዳ ይፍቀዱ። በነባሪነት ጠፍቷል፦ ኦፕሬተሩ እስኪመርጥ ድረስ እያንዳንዱ ነባር ጭነት ይህን ውሂብ ልክ እንደቀድሞው ያቆየዋል። በኦፕሬተር የሚጀመረው `DELETE /api/v1/batches/delete-completed` መስመር በሁለቱም ሁኔታ አይጎዳም — ይህ የተለየ፣ ቅድመ ሁኔታ የሌለው የሕዝብ API ውል ነው።                                                |
| `ANTIGRAVITY_ACCOUNT_LEASE_ENABLED`         | boolean | `false` |           | የመረጠውን የAntigravity መለያ ለመረጠው ጥያቄ የዥረት የሕይወት ዑደት ያስይዙ፤ በዚህም በተመሳሳይ ጊዜ የሚካሄድ ዳግም ሙከራ ወይም የማረጋገጫ መረጃ ርክክብ አስቀድሞ በሂደት ላይ ላለ ዥረት የተመደበን መለያ ዳግም እንዳይመርጥ ያደርጋል። ማስያዣው በ(ግንኙነት፣ ሊጠራ የሚችል upstream ሞዴል) የተገደበ ነው፤ ስለዚህ አንድ መለያ አሁንም ሁለት የተለያዩ ሞዴሎችን በአንድ ጊዜ ማገልገል ይችላል። ለዚያ ሞዴል ብቁ የሆኑ ሁሉም መለያዎች አስቀድመው በኪራይ ሲያዙ፣ ጥያቄው በተጨናነቀ መለያ ላይ ከመደራረብ ይልቅ የተዋቀረ 503 `antigravity_pool_busy`ን ከተገደበ `Retry-After` ጋር ይመልሳል። በነባሪነት ጠፍቷል፦ የመለያ ምርጫው ልክ እንደቀድሞው ይቆያል፣ እና ምንም ማስያዣ አይደረግም። |
| `COMBO_AUTO_PRUNE_STALE_STEPS`              | boolean | `false` |           | ከባለሥልጣን የቀጥታ ካታሎግ ጋር የተደረገ የተሳካ የሞዴል ማመሳሰልን ተከትሎ፣ ካታሎጉ ከእንግዲህ የማይዘረዝራቸው ሞዴሎች ላይ የተቆለፉ combo ደረጃዎችን ያስወግዱ፤ ለእያንዳንዱ የተወገደ ደረጃ አንድ የኦዲት ግቤት ይኖራል። በከሸፈ፣ በተዳከመ ወይም free-only ማመሳሰል ላይ ፈጽሞ አይከረክም፣ እና comboን ፈጽሞ ባዶ አያደርግም። በነባሪነት ጠፍቷል፦ የጊዜ ያለፈባቸው ደረጃዎች ምልክት ብቻ ይደረግባቸዋል።                                                                                                                                                                                                |
| `KIRO_TOOL_CALL_REPAIR_ENABLED`             | boolean | `true`  |           | የዥረት Kiro ምላሽ ምንም የሚታይ ውጤት ከመውጣቱ በፊት የተበላሸ `tool_call` wrapper (`input.name` ወይም `input.arguments` የጎደለው) ሲያወጣ፣ ተራውን በ`invalid_kiro_tool_call` ከማብቃት ይልቅ ይግቱት እና ጥያቄውን ከማስተካከያ መመሪያ ጋር አንድ ጊዜ እንደገና ይላኩ። ዳግም ሙከራው አንድ ተጨማሪ Kiro ጥያቄ ያስከፍላል፤ ሁለተኛ ውድቀት ተራውን በ`kiro_tool_call_repair_retry_failed` ያበቃል። በነባሪነት በርቷል። በመጀመሪያው የተበላሸ wrapper ላይ ተራውን ለማሳካት `false` ያድርጉት።                                                                                                |

### CLI (5)

| ቁልፍ                                   | ዓይነት    | ነባሪ     | ዳግም ማስጀመር | መግለጫ                                                                                                                                                                   |
| ------------------------------------- | ------- | ------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLI_COMPAT_ALL`                      | boolean | `false` | ✓         | ለሁሉም CLI ደንበኞች የተኳኋኝነት ሁነታን ያንቁ።                                                                                                                                       |
| `MODEL_ALIAS_COMPAT_ENABLED`          | boolean | `false` |           | የሞዴል ቅጽል ስም ተኳኋኝነት ንብርብርን ያንቁ።                                                                                                                                         |
| `PRICING_SYNC_ENABLED`                | boolean | `false` |           | ራስ-ሰር የዋጋ መረጃ ማመሳሰልን ያንቁ (`PRICING_SYNC_ENABLED` የአካባቢ ተለዋዋጭም ያስፈልጋል)።                                                                                                 |
| `OMNIROUTE_AUTO_SYNC_CODEX_PROFILES`  | boolean | `false` |           | የአቅራቢ ሞዴል ከተመሳሰለ በኋላ ከቀጥታ ካታሎጉ በመነሳት የ~/.codex/*.config.toml መገለጫ ፋይሎችን በራስ-ሰር (እንደገና) ይጽፋል። ንቁውን/ነባሪውን የCodex ውቅር ፈጽሞ አይቀይርም። በነባሪነት ጠፍቷል።                            |
| `OMNIROUTE_AUTO_SYNC_CLAUDE_PROFILES` | boolean | `false` |           | የአቅራቢ ሞዴል ከተመሳሰለ በኋላ ከቀጥታ ካታሎጉ በመነሳት የ~/.claude/profiles/<name>/settings.json Claude Code መገለጫዎችን በራስ-ሰር (እንደገና) ይጽፋል። ንቁውን/ነባሪውን የClaude ውቅር ፈጽሞ አይቀይርም። በነባሪነት ጠፍቷል። |

### ጤና (5)

| ቁልፍ                                       | ዓይነት    | ነባሪ     | መግለጫ                                                                                                                                                                                                           |
| ----------------------------------------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OMNIROUTE_DISABLE_LOCAL_HEALTHCHECK`     | boolean | `false` | የአካባቢያዊ ኢንስታንስ የጤና ማረጋገጫ መጨረሻ ነጥብን ያሰናክሉ።                                                                                                                                                                      |
| `OMNIROUTE_DISABLE_TOKEN_HEALTHCHECK`     | boolean | `false` | የቶከን ማረጋገጫ የጤና ፍተሻን ያሰናክሉ።                                                                                                                                                                                     |
| `SKILLS_SANDBOX_NETWORK_ENABLED`          | boolean | `false` | በክህሎቶች sandbox አካባቢ ውስጥ የአውታረ መረብ መዳረሻን ያንቁ።                                                                                                                                                                   |
| `PROXY_HEALTH_BLOCKED_RESETS_STREAK`      | boolean | `false` | በፕሮክሲ የጤና ቅኝት ውስጥ ዒላማው ያልተቀበለው ምርመራ (401/403/429) የፕሮክሲውን ተከታታይ ውድቀቶች ወደ ዜሮ ይመልሳል። በነባሪነት ጠፍቷል፦ ያለመቀበል ገለልተኛ ሆኖ ይቆያል (#10654)። 5xx በሁለቱም ሁኔታ የማያረጋግጥ ሆኖ ይቆያል፤ ያለመቀበል ፕሮክሲን ፈጽሞ አያስወግድም፣ አያሰናክልም ወይም ዳግም አያነቃም። |
| `DB_HEALTHCHECK_STARTUP_DEFERRED_ENABLED` | boolean | `false` | የአገልጋይ መጀመርን እስኪጠናቀቅ ድረስ ከማገድ ይልቅ፣ አገልጋዩ ጥያቄዎችን መቀበል ከጀመረ በኋላ (በ`setImmediate` በኩል) የመነሻ DB ታማኝነት/ጤና ፍተሻን ያሂዱ (#13717)። በነባሪነት ጠፍቷል፦ መጀመር ከዚህ PR በፊት እንደነበረው በትክክል ይታገዳል።                                      |

> [!NOTE]
> `INPUT_SANITIZER_BLOCK_THRESHOLD` እና የቆየው ቅጽል ስሙ
> `INJECTION_GUARD_BLOCK_THRESHOLD` የ`INJECTION_GUARD_MODE`ን `block` ሁነታ
> ያስተካክላሉ፣ ነገር ግን እነሱ በ
> [`src/shared/utils/injectionSeverity.ts`](../../src/shared/utils/injectionSeverity.ts)
> የሚነበቡ ተራ የአካባቢ ተለዋዋጮች እንጂ የባህሪ ጠቋሚዎች አይደሉም፦ የDB መሻርም ሆነ የዳሽቦርድ መቀያየሪያ የላቸውም።
> [`ENVIRONMENT.md`](./ENVIRONMENT.md#4-security--authentication)ን ይመልከቱ።

> [!NOTE]
> የ`ዳግም ማስጀመር` ዓምድ `requiresRestart: true` ያላቸውን ጠቋሚዎች ያመለክታል፤ እሴቱ
> ወዲያውኑ ይቀመጣል፣ ነገር ግን ሂደቱ እንደገና ከተጫነ በኋላ ብቻ ተግባራዊ ይሆናል። Enum
> ጠቋሚዎች ከተፈቀደው ስብስብ ውጭ ያለ ማንኛውንም እሴት አይቀበሉም (በአገልጋይ በኩል በ
> `setFeatureFlagOverride()` እና በREST `PUT` ተቆጣጣሪው ሁለቱም ውስጥ ይረጋገጣል)።

---

## ጠቋሚዎችን ማብራትና ማጥፋት

### ዳሽቦርድ

ወደ **ዳሽቦርድ → ቅንብሮች → የባህሪ ጠቋሚዎች**
(`/dashboard/settings/feature-flags`) ይሂዱ። ሰንጠረዡ
(`src/app/(dashboard)/dashboard/settings/components/FeatureFlagsGrid.tsx`)
የሚከተሉትን ይደግፋል፦

- በቁልፍ ወይም በመግለጫ **መፈለግ**፣ እና በምድብ **ማጣራት** (በተጨማሪም የተፈጠረ
  **ዳግም ማስጀመር ያስፈልገዋል** እይታ)።
- ለቡሊያን ጠቋሚዎች **ማብሪያ/ማጥፊያ** እና ለenum ጠቋሚዎች **ተቆልቋይ ምናሌ**
  (`src/app/(dashboard)/dashboard/settings/components/FeatureFlagCard.tsx`)።
- በእያንዳንዱ ጠቋሚ ላይ ውጤታማው እሴት ከየት እንደመጣ የሚያሳይ **የምንጭ ባጅ** — `DB`፣ `ENV`፣ ወይም `DEF`።
- ልዩ ቅንብሩን ለማስወገድ **ዳግም አስጀምር** አዝራር (`DB` ምንጭ ላላቸው ጠቋሚዎች ብቻ የሚታይ)፣
  እና ከታች **ሁሉንም ልዩ ቅንብሮች ዳግም አስጀምር** አዝራር።
- `requiresRestart` ያለው ጠቋሚ ሲቀየር **ሰርቨሩን ዳግም አስጀምር** ባነር።

### REST API

ሁሉም ክወናዎች በአንድ መስመር ብቻ ያልፋሉ፦
[`src/app/api/settings/feature-flags/route.ts`](../../src/app/api/settings/feature-flags/route.ts)።
እያንዳንዱ ዘዴ የተረጋገጠ የዳሽቦርድ ክፍለ ጊዜ ይፈልጋል (ካልሆነ `401`)።

#### `GET /api/settings/feature-flags`

እያንዳንዱን ጠቋሚ ከውጤታማ እሴቱ፣ ምንጩ እና ማጠቃለያው ጋር ይመልሳል።

```jsonc
{
  "flags": [
    {
      "key": "REQUIRE_API_KEY",
      "label": "Require API Key",
      "description": "Require an API key for all incoming requests",
      "category": "security",
      "type": "boolean",
      "enumValues": null,
      "defaultValue": "false",
      "effectiveValue": "false",
      "source": "default", // "db" | "env" | "default"
      "requiresRestart": false,
      "warningLevel": "caution",
    },
    // ... ሁሉም 77 ጠቋሚዎች
  ],
  "summary": {
    "total": 56,
    "active": 0,
    "inactive": 0,
    "overriddenByDb": 0,
    "overriddenByEnv": 0,
  },
}
```

#### `PUT /api/settings/feature-flags`

አንድ ልዩ ቅንብር ያዘጋጁ ወይም ያስወግዱ። የጥያቄ አካል፦ `{ key: string; value?: string }`።
`value`ን አለማካተት ልዩ ቅንብሩን ያስወግዳል (የenv / default እሴቱን ይመልሳል)።

```bash
# የDB ልዩ ቅንብር አዘጋጅ
curl -X PUT http://localhost:20128/api/settings/feature-flags \
  -H "Content-Type: application/json" \
  -d '{"key":"REQUIRE_API_KEY","value":"true"}'

# ልዩ ቅንብሩን አስወግድ ("value" የለም)
curl -X PUT http://localhost:20128/api/settings/feature-flags \
  -H "Content-Type: application/json" \
  -d '{"key":"REQUIRE_API_KEY"}'
```

ምላሹ አዲሱን `effectiveValue`/`source`፣ `previousValue`/
`previousSource` እና `requiresRestart` መልሶ ያሳያል። ያልታወቁ ቁልፎች እና ከተፈቀደው ክልል ውጭ ያሉ የenum
እሴቶች በ`400` ውድቅ ይደረጋሉ።

#### `DELETE /api/settings/feature-flags`

**ሁሉንም** የDB ልዩ ቅንብሮች በአንድ ጊዜ ያጸዳል፣ እያንዳንዱን ጠቋሚ ወደ env / default
እሴቱ ይመልሳል። `{ cleared: <count>, message: "..." }`ን ይመልሳል።

> [!NOTE]
> `requiresRestart: true` ያላቸው ጠቋሚዎች ሥራ ላይ የሚውሉት ፕሮሰሱ ዳግም ከተጫነ በኋላ ብቻ ነው።
> የዳሽቦርዱ ዳግም ማስጀመሪያ ፍሰት `POST /api/restart`ን ይጠራል፣ ከዚያም ሰርቨሩ ዳግም እስኪነሳ ድረስ
> `GET /api/health/ping`ን በተደጋጋሚ ይፈትሻል።

---

## የአደጋ ጊዜ በጀት አማራጭ

`OMNIROUTE_EMERGENCY_FALLBACK` (ምድብ `runtime`፣ ነባሪ `true`) በ
[`open-sse/services/emergencyFallback.ts`](../../open-sse/services/emergencyFallback.ts)
ውስጥ ያለውን የአደጋ ጊዜ ነፃ አማራጭ መንገድ ይቆጣጠራል።
ሲነቃ፣ በጀታቸውን የጨረሱ ጥያቄዎች ሙሉ በሙሉ ከመክሸፍ ይልቅ ወደ ነፃ አማራጭ
አቅራቢ/ሞዴል ይመራሉ። ይህን ባህሪ ለማሰናከል እና በጀታቸውን የጨረሱ ጥያቄዎች
እንዲከሽፉ ለማድረግ፣ በዳሽቦርድ ማብሪያ/ማጥፊያ፣ በDB መሻር፣ ወይም በ
`OMNIROUTE_EMERGENCY_FALLBACK` የአካባቢ ተለዋዋጭ በኩል — ወደ `false` (ወይም `0`)
ያቀናብሩት። (በPRs #3741 / #3752 ውስጥ እንደ የዳሽቦርድ ማብሪያ/ማጥፊያ ቀርቧል።)

በዚህ አማራጭ የቀረበ ምላሽ
`X-OmniRoute-Emergency-Fallback: from=<provider/model>; to=<provider/model>` ይይዛል፤ በዚህም
ደንበኛው `X-OmniRoute-Provider`ን ከጥያቄው ጋር ሳያነጻጽር ጥያቄው እንደገና መመራቱን
ማወቅ ይችላል። ይህ ራስጌ በሌሎች ምላሾች ሁሉ ላይ አይኖርም።

---

## በተጨማሪ ይመልከቱ

- [የአካባቢ ተለዋዋጮች ማጣቀሻ](./ENVIRONMENT.md) — አብዛኛዎቹ ጠቋሚዎች እዚያ የተመዘገበ ተመሳሳይ ስም ያለው የአካባቢ ተለዋዋጭ አላቸው (የDB መሻር ከእሱ ይቀድማል)።
- [`src/shared/constants/featureFlagDefinitions.ts`](../../src/shared/constants/featureFlagDefinitions.ts)
  — ለእያንዳንዱ ጠቋሚ ትክክለኛው የመረጃ ምንጭ።
- [`src/shared/utils/featureFlags.ts`](../../src/shared/utils/featureFlags.ts)
  — የመፍታት አመክንዮ (`resolveFeatureFlag`፣ `isFeatureFlagEnabled`፣
  `resolveAllFeatureFlags`)።
- [`src/lib/db/featureFlags.ts`](../../src/lib/db/featureFlags.ts) — በ`key_value` ሰንጠረዥ
  `feature_flags` namespace ውስጥ የDB መሻርን በቋሚነት ማከማቸት።
