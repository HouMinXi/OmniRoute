# Guardrails (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Źródło prawdy:** `src/lib/guardrails/`
> **Ostatnia aktualizacja:** 2026-08-29 — v3.8.51 (Pochodzenie transkrypcji Video Bridge jest deklarowane przez dzwoniącego,
> jeszcze nie zweryfikowane przez serwer — wyjaśniono zgodnie z #11661)

Guardrails wymuszają bezpieczeństwo, politykę i transformacje treści na granicy
między OmniRoute a dostawcami upstream. Każdy guardrail może kontrolować (i
opcjonalnie odrzucać, przekształcać lub dodawać adnotacje) ładunki żądań (`preCall`)
oraz odpowiedzi upstream (`postCall`).

System działa w trybie **fail-open**: jeśli guardrail zgłosi błąd podczas wykonywania,
rejestr zapisuje błąd i kontynuuje pracę z następnym guardrailem, zamiast przerywać
żądanie. Blokowanie jest jawną decyzją (`block: true`), nigdy przypadkiem.

## Wbudowane mechanizmy ochronne

Rejestr automatycznie ładuje podczas importu sześć mechanizmów ochronnych w kolejności priorytetów
(zobacz `registry.ts` → `registerDefaultGuardrails()`):

| Priorytet | Nazwa               | Etap(y)        | Plik                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niższe numery priorytetów są wykonywane **jako pierwsze**.

### Most wizyjny (`visionBridge.ts`) — most modalności PR-1

Przechwytuje żądania zawierające obrazy, kierowane do **modeli bez obsługi obrazu**, i albo
przekierowuje całe żądanie do modelu obsługującego obraz, albo przed
wywołaniem usługi nadrzędnej zastępuje części obrazowe opisami tekstowymi wygenerowanymi przez
konfigurowalny model wizyjny. Dzięki temu dostawcy obsługujący wyłącznie tekst mogą w sposób przezroczysty przetwarzać
ładunki multimodalne.

Przepływ:

1. Pomiń, jeśli model docelowy już obsługuje obraz (chyba że znajduje się na
   liście modeli wymuszających użycie mostu `isVisionBridgeForcedModel`).
2. Wyodrębnij części obrazowe za pomocą `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), która deleguje działanie do **ujednoliconego
   detektora multimediów** `detectMediaParts()` w `open-sse/utils/mediaParts.ts` — jedynego
   źródła prawdy współdzielonego z filtrem zgodności combo.
   Wyodrębnianie ogranicza się do dozwolonych części najwyższego poziomu o kształtach,
   które `replaceImageParts` może wstawić z powrotem (kontrakt wyodrębniania↔zastępowania): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` oraz Responses API `input_image`. Zagnieżdżone trafienia i
   kształty służące wyłącznie jako wskaźniki są materiałem dla filtra combo i nigdy nie są wyodrębniane.
   Pomiń, jeśli niczego nie znaleziono.
3. Rozwiąż konfigurację środowiska wykonawczego za pomocą `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nowe klucze ustawień `modalityBridge*`
   mają pierwszeństwo; starsze klucze `visionBridge*` pozostają **awaryjnym rozwiązaniem przez jeden cykl**
   (okno wycofania). Jeśli most jest wyłączony, pomiń przed jakimkolwiek
   przeglądaniem multimediów.
4. Selektor trybu (`modalityBridgeVisionMode`, zobacz tabelę poniżej) wybiera
   przekierowanie lub opis. Przekierowanie zwraca `modifiedPayload`, w którym podmieniono wyłącznie `model`,
   oraz metadane `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ścieżka opisu: ogranicz liczbę obrazów do `maxImages`, utwórz prompt uwzględniający zadanie,
   sprawdź pamięć podręczną opisów, wywołaj model wizyjny **równolegle**
   (`Promise.allSettled`) i wstaw w miejsce obrazów części tekstowe
   `[Image N]: <description>`. Nieudane wygenerowanie opisu zwraca `null`, a oryginalna część obrazowa zostaje
   **zachowana** (#4012) — z wyjątkiem ścieżki opisu combo, gdy nie powiodły się
   wszystkie próby opisania; wówczas do potwierdzonej usługi nadrzędnej bez obsługi obrazu trafia tekst zastępczy
   `(unavailable — no vision-capable provider connected)` (#8430).
6. Zwróć `modifiedPayload` wraz z metadanymi (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor trybu (`modalityBridgeVisionMode`)

| Tryb       | Domyślny | Zachowanie                                                                                                                                                                                                                                                                                                                                                        |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Dotychczasowa heurystyka, bez zmian (#6640/#7204): modele inne niż combo/`auto/` są przekierowywane do najlepszego modelu wizyjnego, chyba że oryginalny model ma już użyteczne dane uwierzytelniające (wówczas tworzony jest opis); cele combo zawsze używają opisu.                                                                                             |
| `describe` |          | Zawsze twórz opis — blok przekierowania jest całkowicie pomijany; zawsze odpowiada model wybrany przez użytkownika.                                                                                                                                                                                                                                               |
| `reroute`  |          | Wymuś przekierowanie: zabezpieczenie zachowujące model z danymi uwierzytelniającymi jest pomijane. Zabezpieczenie danych uwierzytelniających **celu** przekierowania nadal obowiązuje — gdy nie istnieje żaden użyteczny cel wizyjny, żądanie przechodzi do ścieżki opisu, aby surowe obrazy nigdy nie trafiły do backendu obsługującego wyłącznie tekst (#8430). |

Wymuszone tryby powodują wcześniejsze zakończenie **przed** uruchomieniem heurystyki trybu automatycznego; zachowanie `auto`
jest identyczne bajt po bajcie z mechanizmem ochronnym sprzed PR-1.

#### Zakres klucza API (`visionBridgeKeyScope.ts`)

Gdy klucz API wywołującego ogranicza `allowedConnections`, pule limitów
(`allowedQuotas`) lub modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most wybiera
wyłącznie modele do przekierowania i opisu, których klucz może używać, na połączeniach, z których klucz może
korzystać. Wywołanie opisu zawsze przechodzi następnie przez pętlę zwrotną OmniRoute z
nagłówkiem `x-omniroute-self-loop-key-id`, dzięki czemu odbierające żądanie czatu
ponownie egzekwuje zasady połączeń i modeli dla tego klucza. `enforceApiKeyPolicy()`
honoruje ten nagłówek wyłącznie w połączeniu z tokenem bearer pętli zwrotnej, więc może on tylko
zawężać dostęp, a identyfikator, którego nie można rozpoznać, jest odrzucany.

Jeśli dla klucza nie jest dozwolony żaden model wizyjny, ścieżka opisu nie podejmuje działania,
a żądanie przechodzi bez zmian — jest to takie samo zachowanie fail-open jak w przypadku wyłączonego
mechanizmu ochronnego (metadane `{ skipped: true, reason: "no_permitted_vision_model" }`).
Żądania bez klucza oraz klucze bez tych ograniczeń zachowują się dokładnie tak jak
wcześniej.

#### Prompt opisu uwzględniający zadanie (`modalityBridgeVisionTaskAware`)

Domyślnie **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dołącza
tekst **ostatniej wiadomości użytkownika** (skrócony do 500 znaków) do bazowego
promptu opisu, ukierunkowując opis na to, o co faktycznie zapytał użytkownik
(wzorzec codex-vision-proxy), i prosząc model wizyjny o transkrypcję widocznego
tekstu. Gdy flaga jest wyłączona — lub brak tekstu użytkownika — bazowy prompt
jest używany bez zmian.

Własne żądanie zgodne z OpenAI pętli zwrotnej opisu (`callVisionModelSingle()`
w `visionBridgeHelpers.ts`) zawsze żąda `image_url.detail: "high"` —
bezwarunkowo, dla każdego wywołującego i dostawcy, niezależnie od jakiegokolwiek
sygnału klienta. Próbkowanie o niskim poziomie szczegółowości pogarsza dokładność
OCR właśnie w zadaniu transkrypcji tekstu, którego wymaga ten prompt, dlatego
samo wywołanie opisu zawsze żąda wysokiego poziomu szczegółowości, niezależnie
od poziomu użytego w pierwotnym żądaniu przychodzącym. Wpływa to wyłącznie na
wewnętrzną treść żądania opisu; nie zmienia sposobu, w jaki OmniRoute przekazuje
własne `image_url.detail` wywołującego w żądaniu głównym — ta wartość domyślna
jest stosowana oddzielnie i tylko dla wykrytych klientów OpenCode, w
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Gałąź
pętli zwrotnej opisu korzystająca z formatu przewodowego Anthropic nie ma pola
`detail` i żadna z tych wartości domyślnych na nią nie wpływa.

#### Limit wyjścia opisu (`modalityBridgeVisionMaxChars`)

| Klucz                          | Wartość domyślna | Zakres            |
| ------------------------------ | ---------------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`              | `0` lub 100–50000 |

`0` (wartość domyślna) oznacza **brak limitu** — opis zwrócony przez
`callVisionModel()` jest przekazywany bez zmian, zachowując dotychczasowe
zachowanie. Każda wartość z zakresu 100–50000 powoduje skrócenie opisu z
przyrostkiem `…`, zanim zostanie on wstawiony z powrotem jako
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` w
`src/lib/guardrails/visionBridge.ts`). Zwiększ tę wartość w zadaniach OCR
wymagających dużej szczegółowości, w których model niższego szczebla potrzebuje
pełnej transkrypcji; zmniejsz ją, aby ograniczyć zużycie tokenów przez
gadatliwe modele wizyjne. Pole w panelu sterowania znajduje się w panelu
Zaawansowane na karcie Vision (`modality-bridge-max-chars` w
`ModalityBridgeVisionTab.tsx`) i podnosi każdą wartość od 1 do 99 do dolnej
granicy 100, pozostawiając jawne `0` bez zmian — `0` jest samodzielnie
prawidłową wartością Zod
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a nie tylko
wartością domyślną oznaczającą „nie ustawiono”.

#### Pamięć podręczna opisów (`modalityBridge/bridgeCache.ts`)

Ogólnoprocesowa pamięć podręczna LRU + TTL przechowywana w pamięci dla wyników
opisu. Klucz = `sha256(imageRef + composedPrompt + configuredBridgeModel)` z
ramkowaniem za pomocą prefiksów długości (bez kolizji granic pól). Składnikiem
klucza dotyczącym modelu jest **skonfigurowany** model pomostowy, a nie model,
który faktycznie odpowiedział — `callVisionModel` może wewnętrznie użyć modelu
zapasowego, a tworzenie klucza dla każdej próby prowadziłoby do fragmentacji
pamięci podręcznej. Nieudane opisy nigdy nie są zapisywane w pamięci podręcznej.
Ustawienia:

| Klucz                           | Wartość domyślna | Zakres  |
| ------------------------------- | ---------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`           | —       |
| `modalityBridgeCacheTtlMinutes` | `60`             | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`            | 10–5000 |

#### Normalizacja obrazów zdalnych (pętla zwrotna opisu/pobieranie base64)

Gdy pomost samodzielnie pobiera **zdalny** obraz — na potrzeby samowywołania
opisu Anthropic oraz konwersji do base64 w formacie przewodowym Claude
(`ensureBase64ImagesForClaudeWire`), w obu przypadkach za pośrednictwem
`fetchRemoteImageAsDataUri()` w `visionBridgeHelpers.ts` — wynikowy identyfikator
URI danych jest przekazywany przez `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) przed osadzeniem go w żądaniu do modelu
wizyjnego. Zbyt duże obrazy są skalowane w dół do **2048px na dłuższej
krawędzi** (zgodnie z limitem zmiany rozmiaru, który OpenAI/Anthropic już
stosują po stronie serwera), co zmniejsza liczbę przesyłanych bajtów i opóźnienie
bez zmiany tego, co widzi model wizyjny. Zmiana rozmiaru korzysta z `sharp`,
ładowanego przez import dynamiczny: na platformie, na której nie uda się
załadować jego natywnego pliku binarnego, `normalizeDataUri()` **nigdy nie
zgłasza wyjątku** — zamiast tego przekazuje oryginalne bajty bez zmian, dzięki
czemu ścieżka opisu/konwersji do base64 zawsze pozostaje działająca. Bajty
niebędące obrazem (pobranie, które nie zwróciło możliwego do zdekodowania
obrazu) również są przekazywane bez zmian. Ta normalizacja jest ograniczona do
obrazów pobieranych przez pomost na potrzeby własnego samowywołania — nigdy nie
jest stosowana do nieprzetworzonego ładunku przekazywanego przez wywołującego,
zgodnie z zasadą modyfikacji wyłącznie po wyrażeniu zgody (Twarda reguła #20).

#### Schemat ustawień + migracja

Nowe klucze `modalityBridge*` są walidowane przez Zod w
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trzy klucze
`modalityBridgeCache*` oraz grupa `modalityBridgeAudio*` używana przez pomost
audio. Migracja `141_modality_bridge_settings.sql` kopiuje istniejące starsze
wartości `visionBridge*` do odpowiadających im nowych kluczy (idempotentnie,
nigdy nie nadpisując wartości `modalityBridge*` ustawionej przez operatora);
starsze klucze pozostają akceptowane jako rozwiązanie rezerwowe podczas odczytu
przez jeden cykl wydawniczy.

#### Nagłówek przejrzystości + statystyki

Odpowiedzi przekształcone za pomocą opisu zawierają
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(tworzony przez `buildModalityBridgeHeader()` w
`modalityBridge/bridgeStats.ts`, dodawany przez
`withModalityBridgeHeader()` w `src/sse/handlers/chatHelpers.ts`).
Przekierowane żądania **nie** otrzymują nagłówka — ładunek pozostał niezmieniony,
a zamiana modelu jest już widoczna w polu `model` treści odpowiedzi.

`GET /api/modality-bridge/stats` (uwierzytelnianie administracyjne, ten sam poziom co
`GET /api/settings`) zwraca przechowywane w pamięci liczniki dla poszczególnych modalności
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` dla `vision`, `audio` i
`video`. `averageLatencyMs` używa `latencySamples`, a nie wszystkich prób, jako
mianownika; operacja bez pomiaru czasu nie tworzy sztucznej próbki o wartości zero
milisekund. `bridged` pozostaje wstecznie zgodnym aliasem udanych
konwersji; nieudane próby nie zwiększają jego wartości.
Liczniki są celowo resetowane po ponownym uruchomieniu procesu
(telemetria, nie rozliczenia).

#### Konfiguracja panelu

Dedykowana strona panelu znajduje się pod adresem
`/dashboard/settings/modality-bridge`. Jej dostępne przez URL karty `Vision`, `Audio`
i `Video` zachowują parametry zapytania podczas przełączania wartości `tab`.
Karta Vision udostępnia włączanie funkcji, tryb, wybór modelu (w tym automatyczny
model domyślny), monity zależne od zadania, zaawansowane limity czasu oczekiwania,
obrazu, długości opisu i pamięci podręcznej, liczniki środowiska uruchomieniowego
oraz zabezpieczone żądanie przykładowe. Karta Audio również działa: udostępnia
włączanie funkcji, selektor modeli wyłącznie STT z opcją Auto, limity czasu
oczekiwania i maksymalnej długości klipu, liczniki audio oraz test przykładowy
`input_audio`. Karta Video jest funkcjonalna: raportuje stan środowiska
uruchomieniowego FFmpeg/ffprobe — jeden z czterech jawnych stanów interfejsu
(`unknown`, gdy sprawdzanie jest w toku lub nie mogło się zakończyć, `restricted`
na hoście panelu niebędącym adresem pętli zwrotnej, gdzie sprawdzanie jest pomijane
po stronie klienta, `unavailable` po sprawdzeniu i potwierdzeniu braku narzędzi albo
`available` wraz z wersjami FFmpeg/ffprobe) — utrwala ustawienia włączenia, modelu,
klatek, wideo i limitów czasu oczekiwania, ogranicza selektor modeli do modeli
obsługujących obraz oraz udostępnia liczniki wideo.

Poprzednia karta Vision Bridge w ustawieniach AI jest odsyłaczem zgodności do
nowej strony; nie zawiera już drugiej kopii formularza. Sekcja Media Providers
zawiera również odsyłacze z przepływów pracy Image-to-Text i Speech-to-Text do
odpowiednich kart Modality Bridge, bez usuwania istniejącego środowiska testowego
Speech-to-Text.

**Ominięcie kontroli dopuszczenia dla pętli zwrotnej:** gdy wywołanie opisu jest
kierowane przez własną pętlę zwrotną `/v1` OmniRoute (niestandardowy model
dostawcy), podżądanie wysyła
`x-omniroute-admission-bypass: internal` i jest uwierzytelniane przy użyciu
ustalonego poświadczenia pętli zwrotnej — lokalnej wartości specjalnej
`sk_omniroute` w trybie lokalnym albo skonfigurowanego przez operatora klucza
środowiskowego `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), dzięki czemu
wdrożenia z `REQUIRE_API_KEY=true` nadal mogą wykonywać wywołanie opisu. Ominięcie
jest honorowane wyłącznie dla tych konkretnych poświadczeń, dlatego klienci
zewnętrzni nie mogą użyć tego nagłówka do pominięcia kontroli dopuszczenia.

Starsze wartości domyślne znajdują się w `src/shared/constants/visionBridgeDefaults.ts`;
nowe wartości domyślne trybu, obsługi zależnej od zadania i pamięci podręcznej oraz
mechanizm rozpoznawania ustawień znajdują się w
`src/shared/constants/modalityBridgeDefaults.ts`. Mechanizm zabezpieczający
udostępnia opcję konstruktora `deps`, dzięki czemu testy mogą wstrzykiwać
fałszywe implementacje `getSettings` i `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Przechwytuje żądania czatu zawierające audio, zanim dotrą one do celu, o którym
nie wiadomo, czy akceptuje dane wejściowe audio. Nigdy nie zmienia trasy żądania
czatu: fragmenty audio są transkrybowane za pośrednictwem istniejącego,
zgodnego z OpenAI punktu końcowego obsługującego dane multipart, a wybrany model
czatu kontynuuje działanie z transkrypcjami tekstowymi.

Przepływ:

1. Ustal `supportsAudio` za pomocą `getResolvedModelCapabilities()`. Jawne
   metadane rejestru dostawców mają pierwszeństwo, następnie statyczne metadane
   modelu, a potem zsynchronizowane `modalities_input`. Zadeklarowana lista
   danych wejściowych bez `audio` daje `false`; brak dowodów dotyczących
   możliwości daje `null`. Zarówno `false`, jak i `null` aktywują
   konserwatywny mechanizm mostkujący, natomiast `true` go pomija.
2. Ustal ustawienia `modalityBridgeAudio*` i wyodrębnij możliwe do zastąpienia
   fragmenty audio najwyższego poziomu ze wszystkich wiadomości za pomocą
   współdzielonego detektora `detectMediaParts()`. Obsługiwane formaty przesyłanych
   danych to `input_audio` i `audio_url` OpenAI oraz
   `source.media_type: "audio/*"`. Zagnieżdżone audio jest wykrywane na potrzeby
   routingu, ale nie jest usuwane przez ścieżkę zastępowania. Zakres pracy jest
   ograniczony przez `modalityBridgeAudioMaxClips`; późniejsze fragmenty
   pozostają niezmienione.
3. Uwzględnij skonfigurowaną wartość `provider/model` albo pozwól, aby
   `selectAudioBridgeModel()` przeszła przez `AUDIO_TRANSCRIPTION_PROVIDERS`
   w stabilnej kolejności katalogowej i wybrała pierwszy model z użytecznym,
   aktywnym poświadczeniem dostawcy.
4. `callAudioTranscription()` konwertuje audio base64/data URI na wieloczęściowy
   `file` albo pobiera zdalny `audio_url` przez zabezpieczenie wychodzących
   połączeń wyłącznie do zasobów publicznych, z przypinaniem DNS i limitem 25 MB.
   Następnie wysyła plik i wybrany model metodą POST do lokalnej pętli zwrotnej
   `/v1/audio/transcriptions`, uwierzytelnionej za pomocą
   `resolveSelfLoopBearer()`. Istniejąca trasa transkrypcji wykonuje standardowe
   wyszukiwanie poświadczeń, obsługę okresów karencji i limitów szybkości oraz
   przekazanie do dostawcy.
5. Udane wywołania zastępują swoje fragmenty tekstem
   `[Audio N]: <transcript>`. Wywołania są uruchamiane za pomocą
   `Promise.allSettled`: pojedyncze niepowodzenie zachowuje oryginalny fragment
   audio (kontrakt #4012). Jeśli wszystkie wywołania zakończą się niepowodzeniem,
   a dla celu potwierdzono `supportsAudio === false`, fragmenty zostają zastąpione
   przez `[Audio N]: (unavailable — no STT provider connected)` (kontrakt #8430).
   W przypadku nieznanego celu (`null`) wynik składający się wyłącznie z
   niepowodzeń pozostaje niezmieniony. Potwierdzony cel obsługujący wyłącznie
   tekst, bez użytecznego poświadczenia STT, otrzymuje ten sam jawny tekst
   zastępczy bez wykonywania wywołania sieciowego.

Udane transkrypcje korzystają z ogólnoprocesowej pamięci podręcznej LRU/TTL
Modality Bridge. Klucz łączy odwołanie do audio, stabilną etykietę operacji
`audio-transcription` oraz wybrany model STT; niepowodzenia nigdy nie są
zapisywane w pamięci podręcznej. Próby audio aktualizują współdzielone liczniki
`bridged`, `cacheHits`, `failures` i `lastUsedAt`.
Przekształcone odpowiedzi zawierają
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
niezmienione żądania nie otrzymują segmentu Audio Bridge.

Ustawienia środowiska uruchomieniowego są przechowywane w bazie danych i
walidowane przez Zod:

| Klucz                         | Domyślnie | Zakres          |
| ----------------------------- | --------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`    | —               |
| `modalityBridgeAudioModel`    | `""`      | Auto lub ID STT |
| `modalityBridgeAudioTimeout`  | `60000`   | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`       | 1–10            |

Współdzielona pamięć podręczna pozostaje kontrolowana przez `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Most wideo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Przechwytuje części wideo najwyższego poziomu w `messages` interfejsu Chat Completions oraz
w `input` interfejsu Responses API przed wywołaniem modelu docelowego, o którym nie wiadomo, czy natywnie obsługuje wideo.
Obsługiwane formaty to `input_video`, `video_url`, `video_source`, adresy URL HTTPS
oraz identyfikatory URI danych `data:video/*;base64,...`. Zwykłe nazwy plików w tekście nie są traktowane
jako wideo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) odpowiada za przechodzenie po żądaniu,
sprawdzanie możliwości i zasad, agregację w obrębie żądania oraz ładunek odpowiedzi.
Przetwarzanie poszczególnych materiałów wideo — pobieranie, pamięć podręczna całego wyniku, opisywanie sekwencji
klatek (obejmujące transkrypcję dźwięku zadeklarowaną przez wywołującego) oraz metryki, przerywanie i czyszczenie
dla każdej próby — jest ukryte za `processVideoPart` w
`videoBridgePipeline.ts`, wywoływanym raz dla każdej części wideo w pętli `preCall`.
Ten moduł definiuje również jawne granice portów `VideoMediaBrokerPort`
(pobieranie bajtów i wyodrębnianie próbkowanych klatek), `VideoAudioTranscriptionPort`
(łączenie transkrypcji dźwięku zadeklarowanej przez wywołującego z podpisami próbkowanych klatek) oraz
`VideoDrilldownPort` (granica utrwalania szczegółowej analizy klatek; nie jest jeszcze podłączona
do `processVideoPart` — obecnie wpisy szczegółowej analizy zapisuje wyłącznie osobna trasa
`/api/modality-bridge/video/drilldown`).

Publiczna ścieżka żądania `/v1` nigdy nie importuje ani nie wywołuje podprocesu. Zdalne
materiały wideo są pobierane z limitem 50 MiB; osadzone materiały wideo w formacie base64 mają
konserwatywny limit 36 MiB zdekodowanych danych na materiał, dzięki czemu otoczka modelu, wiadomości i ramek
może zmieścić się w publicznym limicie przyjmowania żądań JSON wynoszącym 50 MiB. Długość danych osadzonych
i szacowany rozmiar po zdekodowaniu są sprawdzane przed alokacją. Protokół HTTPS jest
wymagany zarówno dla początkowego zdalnego adresu URL, jak i dla każdego przekierowania, z użyciem istniejącego
mechanizmu ochrony publicznego ruchu wychodzącego z przypięciem DNS. Następnie bajty przekraczają dokładną wewnętrzną
granicę brokera `POST /api/modality-bridge/video/extract`. Ta trasa ma jednocześnie oznaczenia
`LOCAL_ONLY` i `SPAWN_CAPABLE`, akceptuje wyłącznie uwierzytelnione na poziomie procesu
żądania z zaufanego interfejsu pętli zwrotnej i nigdy nie przyjmuje adresu URL, ścieżki systemu plików, pliku wykonywalnego
ani listy argumentów. Potok limitowania rozmiaru treści interfejsu API i przyrostowy mechanizm odczytu treści
procedury obsługi niezależnie wymuszają limit wejścia brokera wynoszący 50 MiB. Jego ograniczona kolejka przetwarza
jedno wyodrębnianie naraz, dopuszcza cztery oczekujące zadania i ogranicza oczekujące dane wejściowe do
100 MiB.

Wewnątrz brokera `ffprobe` odczytuje prywatny plik lokalny; stała lista dozwolonych formatów
wyklucza formaty list odtwarzania i manifestów. W przypadku dozwolonych kontenerów z rodziny MOV
zewnętrzne odwołania do danych MOV pozostają domyślnie wyłączone, a stałe polecenie ich nie włącza.
Zarówno `ffprobe`, jak i `ffmpeg` korzystają z listy dozwolonych protokołów ograniczonej wyłącznie do
`file`, jednego wątku, stałych tablic argumentów, bez powłoki
oraz z plików wykonywalnych wyszukiwanych w `PATH`. Strumienie okładek w postaci dołączonych obrazów nie są
uznawane za kandydatów do odtwarzania. Wszystkie odtwarzalne strumienie muszą spełniać limity, a
jawny strumień domyślny jest preferowany przed deterministycznym wyborem strumienia o najniższym indeksie.
Materiały wideo są ograniczone do 600 sekund, 8 192 pikseli na wymiar oraz
33 554 432 pikseli źródłowych. FFmpeg próbkuje od 1 do 16 klatek JPEG ze środkowych punktów, skaluje
dłuższą krawędź w dół do maksymalnie 1 024 pikseli bez powiększania mniejszych danych wejściowych i
nigdy nie otrzymuje adresu URL. Domyślną metodą próbkowania jest `uniform`. Opcjonalne
zasady `scene_aware` i eksperymentalna `segment_aware` wykonują jedno dodatkowe
stałe przejście FFmpeg po uprzednio zweryfikowanym lokalnym strumieniu, wybierają ograniczony zbiór
znaczników czasu scen z `showinfo`, a w przypadku awarii detektora, przekroczenia limitu czasu, nieprawidłowych danych wyjściowych lub pustego
zbioru kandydatów deterministycznie powracają do tych samych równomiernie rozmieszczonych punktów środkowych.
Tryb segmentowy przydziela próbki punktów środkowych proporcjonalnie do
zweryfikowanych interwałów scen; dowody segmentowe i zachowanie mechanizmu rezerwowego
opisano szczegółowo poniżej. Twardy limit 16 klatek jest
stosowany po dokonaniu wyboru w każdej zasadzie. Gdy żądanie uwzględniające sceny ma budżet
tylko jednej klatki, używany jest równomierny punkt środkowy aktywnego okna całego materiału lub okna skupienia,
a raport zawiera `policyEffective: uniform`: pojedyncza wybrana klatka sceny
nie może zachować obu krańców osi czasu. Wywołujący może opcjonalnie podać
skończone okno skupienia (`start`/`end` w sekundach); granice są ograniczane do czasu trwania multimediów,
odwrócone lub nieskończone okna są odrzucane, a wszystkie zasady
próbkowania są stosowane wyłącznie wewnątrz znormalizowanego przedziału. Wynikowe
okno jest uwzględniane w metadanych próbkowania oraz w prefiksie niezaufanego opisu,
aby modele niższego poziomu mogły odróżnić wybrany fragment od pełnej
osi czasu.

Semantyczne ukierunkowanie podpisów jest osobnym, jawnym ustawieniem. Domyślny tryb analizy `full`
zachowuje istniejący monit dotyczący klatek i nigdy nie przekazuje tekstu żądania
do modelu tworzącego podpisy. W trybie `focused` most odczytuje wyłącznie najnowszy
niepusty element `text`/`input_text` utworzony przez użytkownika z tego samego kontenera Chat lub Responses,
normalizuje go do NFC, scala znaki sterujące i białe znaki
oraz ogranicza do 500 punktów kodowych Unicode. Pusty wynik powoduje powrót do
dokładnego monitu `full`. Użyteczna wskazówka jest serializowana jako JSON w dedykowanym
bloku niezaufanego kontekstu użytkownika i może jedynie nadawać priorytet obserwowalnym szczegółom; nie
może zastąpić osobnego ostrzeżenia przed wykonywaniem instrukcji widocznych
lub słyszalnych w multimediach. Skupienie tekstowe nigdy nie wywnioskuje `start`/`end` ani nie zmienia
próbnika czasowego.

#### FU-07 strukturalne dowody segmentowe

`segment_aware` wykorzystuje jeden ograniczony przebieg analizy wstępnej na już zweryfikowanym
lokalnym strumieniu wideo. Stały łańcuch filtrów najpierw skaluje obraz do szerokości
nieprzekraczającej 320 pikseli, wykrywa zmiany scen i okresy zamrożenia, a następnie
próbkuje z częstotliwością 1 klatki na sekundę w celu pomiaru rozmycia, średniej
luminancji oraz informacji przestrzennej/czasowej. Przebieg jest ograniczony do
600 próbek strukturalnych, jednego wątku FFmpeg/filtra, tych samych list dozwolonych
protokołów obejmujących wyłącznie `file` i kontenerów, limitu wyjścia procesu
wynoszącego 1 MiB oraz maksymalnie 30 sekund w ramach współdzielonego mechanizmu
przerwania/terminu brokera. Nigdy nie przyjmuje z żądania polecenia, filtra,
ścieżki ani adresu URL.

Wartości strukturalne stanowią deterministyczne dane z próbkowania, a nie
semantyczne rozumienie wideo. Nie wywnioskowują podmiotów, działań, napisów,
mowy ani zamiarów użytkownika. Granice scen i zamrożeń tworzą segmenty;
pokrycie zamrożeniem, rozmycie, ekspozycja, szczegółowość przestrzenna i zmiana
czasowa wpływają wyłącznie na sposób przydzielania istniejącego budżetu
1–16 klatek. W pełni zamrożony segment jest ograniczony do jednej klatki,
natomiast niezamrożone segmenty konkurują o pozostały budżet. Gdy liczba granic
przekracza liczbę klatek, zachowywane jest równomierne pokrycie osi czasu, aby
szybkie cięcia na początku nie mogły ukryć długiego segmentu końcowego. Granice
scen mieszczące się w 1-sekundowej rozdzielczości analizy względem granicy
zamrożenia są scalane.

Brakujące filtry, nieprawidłowe/puste dane, błąd detektora lub przekroczenie
limitu czasu ograniczonej analizy wstępnej powodują bezpieczne przejście do
dokładnej strategii równomiernych punktów środkowych. Przerwanie przez
wywołującego lub upłynięcie terminu brokera nie powoduje takiego przejścia:
kończy trwający podproces, zapobiega późniejszemu wyodrębnianiu klatek,
a prywatne drzewo tymczasowe jest usuwane w `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministyczne, rzeczywiste
materiały testowe FFmpeg do oceny oszczędności wywołań generowania opisów po
deduplikacji, przydziału budżetu dla intensywnego ruchu, danych dotyczących
rozmycia/ekspozycji/SI-TI, szybkich cięć z długim segmentem końcowym oraz
fałszywych alarmów przy stopniowym przenikaniu. Rejestruje rzeczywisty czas
analizy wstępnej, a tam, gdzie dostępne jest `/usr/bin/time`, także czas CPU
procesu potomnego i szczytowe użycie RSS. Jego kontrole jakości są wyłącznie
wyroczniami strukturalnymi. Jakość rzeczywistego modelu generowania opisów
pozostaje oznaczona jako `HOLD`, ponieważ ten zestaw testowy nie ma
autoryzowanego punktu końcowego ani zamrożonego modelu oceniającego. Oszczędności
finansowe również pozostają oznaczone jako `HOLD`, chyba że
`--caption-cost-per-call-usd` poda jawną dodatnią wartość szacowanego kosztu
pojedynczego wywołania; skrypt nigdy nie fabrykuje żadnego z tych wyników.

Każda klatka jest ograniczona do 4 MiB, wszystkie nieprzetworzone klatki łącznie
do 23 MiB, a zserializowana odpowiedź brokera do 32 MiB. Prywatny katalog
tymczasowy jest usuwany w `finally`. OmniRoute nie zawiera FFmpeg i nie akceptuje
niestandardowej ścieżki do pliku wykonywalnego. Przed generowaniem opisów most
stosuje zachowawczy przebieg deduplikacji wizualnej: każdy obraz JPEG jest
redukowany do bufora 16×16 w skali szarości i porównywany wyłącznie z ostatnią
zachowaną klatką. Gdy żądany budżet opisów przekracza jedną klatkę, wyodrębnianie
dostarcza ograniczoną pulę kandydatów obejmującą najwyżej dwukrotność tego budżetu
i nigdy więcej niż 16 klatek. Żądany limit jest stosowany dopiero po
deduplikacji, przy czym podczas końcowego redukowania zachowywani są pierwszy
i ostatni wybrany kandydat, jeśli budżet wynosi co najmniej dwa. Wersjonowana
strategia
`grayscale-16x16-mean-cells-v2` wykorzystuje większą z dwóch wartości: średnią
deltę luminancji albo stosunek komórek miniatury, których znormalizowana delta
wynosi co najmniej 0.05. Próg duplikatu jest stałą 0.04, wybraną ze względu na
przewidywalność, a nie udostępnioną jako ustawienie czasu wykonywania. Ten
dodatkowy sygnał wysokiego kontrastu zachowuje niewielki ruch i zmiany
widocznego tekstu, które porównanie oparte wyłącznie na średniej może ukryć.
Błędy komparatora lub dekodera powodują bezpieczne zachowanie pokrycia. Metadane
wyjściowe osobno wskazują wyodrębnionych kandydatów, pomyślnie użyte klatki
i odrzucone duplikaty wizualne.

Jawnie oznaczona część wideo może zażądać arkusza stykowego ze znacznikami czasu.
Most tworzy siatkę JPEG obejmującą najwyżej 4 kolumny i 16 klatek. Każda
512-pikselowa komórka umieszcza znacznik czasu źródła na dolnym pasku o wysokim
kontraście, a te same znaczniki czasu pozostają w metadanych tekstowych w celu
późniejszego powiązania i audytu. Kompletny obraz JPEG nadal podlega limitowi
32 MiB. Jeśli `sharp` nie może zdekodować lub złożyć siatki, most przechodzi
awaryjnie do pojedynczych klatek JPEG; przerwanie przez klienta jest nadal
propagowane przez operację tworzenia arkusza.

Dane wymagane do wdrożenia są celowo oddzielone od syntetycznego mikrotestu
wydajności kompozycji. `scripts/perf/video-bridge-contact-sheet-eval.ts`
definiuje wersjonowany według schematu zestaw testów A/B dla rzeczywistych modeli
wizyjnych zgodnych z OpenAI. Mierzy tokeny zgłoszone przez dostawcę, całkowite
opóźnienie mierzone zegarem ściennym (w tym składanie arkusza), liczbę wywołań
modelu oraz zachowanie faktów zdefiniowanych w manifeście. Surowe odpowiedzi
modelu nie są zapisywane w raporcie; zachowywane są wyłącznie skróty SHA-256
i identyfikatory dopasowanych faktów. Zestaw testowy nie wykonuje żadnych
wywołań sieciowych ani płatnych wywołań modelu, chyba że przekazano
`--execute-real` oraz skonfigurowano `--model`, `OMNIROUTE_BASE_URL`
i `OMNIROUTE_API_KEY`. Bez takiego jawnego rzeczywistego uruchomienia jego
werdykt przeznaczony do odczytu maszynowego pozostaje oznaczony jako `HOLD`;
same syntetyczne pomiary rozmiaru danych/liczby wywołań nie stanowią danych
wymaganych do wdrożenia.

Wywołujący mogą dołączyć opcjonalną tablicę `transcript.cues` do obsługiwanej
części wideo, jeśli już posiadają zsynchronizowany tekst. Każda wskazówka musi
zawierać `text`, skończony przedział `start`/`end` mieszczący się w sprawdzonym
czasie trwania oraz znajdujące się na białej liście `source` (`client`,
`embedded` lub `audio-bridge`); `confidence` ma domyślną wartość `1` i musi
pozostawać w zakresie od `0` do `1`. Identyczne wskazówki są scalane.
OmniRoute nigdy nie rozpoczyna transkrypcji na podstawie tych metadanych:
zweryfikowane wskazówki są kopiowane do opisanego wyniku wraz ze źródłem,
pewnością i przedziałem oraz wyświetlane jako niezaufane obserwacje obok opisów
klatek. Nieprawidłowy tekst, tekst spoza zakresu lub tekst pozbawiony informacji
o pochodzeniu jest odrzucany zamiast mieszany ze strumieniem opisów. Oba kanały
transkrypcji w treści żądania normalizują podane pochodzenie do `client`, w tym
samodzielnie zadeklarowane etykiety `embedded` lub `audio-bridge`. Tylko adapter
kontrolowany przez serwer może przypisać te zaufane etykiety za pomocą dostępnego
wyłącznie w kodzie argumentu `trustedSource`; pole JSON żądania nie może dotrzeć
do tego argumentu. Tekst transkrypcji pozostaje niezaufaną treścią pochodzącą
z multimediów niezależnie od swojego pochodzenia i nigdy nie może decydować
o autoryzacji.

Zaawansowany klient wywołujący może dostarczyć ścieżkę `audioTranscript` dla tego samego filmu;
jest ona traktowana jako tekst dostarczony przez klienta, a nie jako dowód transkrypcji wykonanej przez serwer.
Warstwa scalająca przetwarza obserwacje wizualne i dźwiękowe w ramach
jednego limitu czasu i sygnału przerwania, porządkuje je na wspólnej osi czasu, scala
identyczne duplikaty i zwraca częściowy wynik, gdy powiedzie się tylko jedna gałąź.
Nieprawidłowy `audioTranscript` skutkuje takim częściowym wynikiem — opis wizualny
zostaje zachowany, a gałąź audio rejestruje oczyszczony kod błędu —
zamiast powodować niepowodzenie przetwarzania całego filmu. Dostępność poszczególnych gałęzi, flaga wyniku częściowego
oraz oczyszczone kody błędów są zachowywane w opisanym wyniku, w
metadanych mechanizmu zabezpieczającego (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), w metadanych pamięci podręcznej wyników oraz w licznikach
scalania mostu. Domyślna ścieżka Video Bridge nie wywołuje zamiany mowy na tekst
ani nie pobiera drugiej kopii multimediów; bez jawnie przekazanej ścieżki pozostaje
wyłącznie ścieżką wideo.

**Przechowywanie transkrypcji (#12150 P1).** Ma ono zastosowanie automatycznie za każdym razem, gdy
Video Bridge (który sam wymaga jawnego włączenia) renderuje segment transkrypcji — nie istnieje osobna
flaga przechowywania. Gdy żądanie renderuje dowolny segment transkrypcji (zadeklarowany przez klienta
`transcript` lub scalony `audioTranscript`), mechanizm zabezpieczający oznacza je jako
`videoBridgeObserved` i tworzy zredagowaną kopię opisu filmu —
identyczne renderowanie, w którym treść tekstowa każdego segmentu zostaje zastąpiona przez
`[redacted-video-transcript]`; kopia ta powstaje przez zastąpienie pola ustrukturyzowanego segmentu
przed złożeniem ciągu znaków (nigdy przez analizowanie spłaszczonego tekstu, dzięki czemu żadna
treść segmentu — złośliwa ani zwykła, w tym treść zawierająca znak `]`, taka jak
`[inaudible]`/`[music]` — nie może się zachować). Treść żądania w trwałym dzienniku wywołań zastępuje
każdą część tekstową pochodzącą z filmu tą zredagowaną kopią, dopasowaną na podstawie
równości treści; kotwica `fullText` jest ponownie odczytywana z ukończonego ładunku mechanizmu zabezpieczającego
przed wywołaniem, dzięki czemu dopasowanie nadal działa po tym, jak późniejsze mechanizmy zabezpieczające w łańcuchu
(maskujące dane PII i dane uwierzytelniające, o priorytetach 10/95) zmodyfikują tekst opisu w miejscu,
oraz po tym, jak wstrzyknięcie monitu systemowego, przekazania kontekstu lub Memory zmieni strukturę tablicy wiadomości. Treść
wysyłana do modelu pozostaje niezmieniona. Zaobserwowane żądanie nie wypełnia również
trwałej Memory (pomijane jest wyodrębnianie zarówno z żądania, jak i z odpowiedzi),
więc odpowiedź samego modelu nie może skopiować tekstu transkrypcji do Memory.

**Nieprzetworzone pola wideo (#12430).** Gdy most jest włączony, a natywna obsługa wideo jest nieznana lub niedostępna, zdefiniowane pola `transcript`/`audioTranscript` również aktywują `videoBridgeObserved`, nawet po niepowodzeniu generowania opisu lub przekroczeniu limitu `maxVideos`. Wartość `null` i puste ciągi znaków są uwzględniane; brakujące pola oraz metadane niezwiązane z wideo nie są uwzględniane. Przechowywane kopie redagują te pola lub pomijają żądanie, a pamięci podręczne i Memory są omijane.

Na tych ścieżkach rezerwowych prawidłowe segmenty dostarczone przez klienta stają się obsługiwanymi
częściami `text`/`input_text`, a nie niestandardowymi polami dostawcy. Obie ścieżki
dostarczone w żądaniu pozostają niezaufanymi obserwacjami `client`, z wyraźnym ostrzeżeniem, że film
nie został opisany, a znaczniki czasu nie zostały zweryfikowane względem multimediów. Istniejące
limity 256 segmentów/64 KiB łącznie oraz limity na segment mają zastosowanie łącznie do obu ścieżek;
znaczniki czasu muszą mieścić się w 600-sekundowym limicie brokera oraz w każdym podanym oknie
zakresu. Nieprawidłowe ścieżki są odrzucane, a nie przekazywane dalej jako dowolny tekst; prawidłowa
ścieżka równoległa może nadal zostać użyta, chyba że ich łączny limit zostanie przekroczony. Pola o wartości null/puste
nie dodają tekstu. Ta ścieżka rezerwowa nie powoduje pobierania multimediów ani wykonywania transkrypcji.
Pola rozszerzeń transkrypcji są usuwane z rezerwowego nośnika wideo oraz jego
obiektów `video_url`/`source`. Lista dozwolonych elementów protokołu OpenAI pozostaje rygorystyczna; nośniki wideo
o nieznanej obsłudze natywnej pozostają dostępne, a znane cele obsługujące wyłącznie tekst zachowują bezpieczne znaczniki.
Ustrukturyzowane, zredagowane kopie chronią dołączony tekst transkrypcji, podczas gdy
oryginalne żądanie należące do klienta pozostaje niezmienione. Cele z obsługą natywną oraz
wyłączone mosty zachowują dotychczasowe zachowanie polegające na pomijaniu tej ścieżki.

Dodatkowe przechowywane kopie korzystają z tego samego sygnału zaobserwowanego żądania. Nieprzetworzona
migawka żądania klienta sprzed zastosowania mechanizmu zabezpieczającego, oczekujące żądanie w pamięci oraz dziennik
wcześnie odrzuconego żądania strukturalnie zastępują pola transkrypcji w częściach wideo;
monity tekstowe tworzone przez etapy potoku i przekazanie kontekstu są redagowane
w miejscu docelowym trwałego zapisu treści żądania. Trwale zapisany znacznik `video_content_removed`
sprawia, że kontynuacja z użyciem `previous_response_id` zostaje bezpiecznie odrzucona, zamiast odtwarzać
tekst, który został celowo usunięty. Jeśli zaobserwowane żądanie utraci
zredagowaną kopię którejkolwiek części przed zapisaniem w dzienniku albo jeśli choć jedna z kilku kopii wideo
nie zostanie dopasowana po późniejszych modyfikacjach żądania, przechowywana treść żądania jest
całkowicie pomijana zamiast zachowywać częściowo zredagowaną transkrypcję.

W przypadku zaobserwowanego żądania odpowiedź modelu może cytować dowolny fragment
transkrypcji bez ustrukturyzowanej granicy segmentu. Dlatego jej zapisane w trwałym dzienniku wywołań
`responseBody` zostaje zastąpione znacznikiem pominięcia; szczegółowy
artefakt potoku (który może zawierać treści od dostawcy/klienta oraz fragmenty strumienia)
nie jest przechowywany. Pamięci podręczne semantyczne, idempotencji i odtwarzania rozumowania omijają
odczyty i zapisy dla tego żądania. Żądanie dostawcy i odpowiedź widoczna
dla klienta pozostają niezmienione. Wczesne bajty keepalive są usuwane z tymczasowego
bufora, gdy szczegółowy artefakt zostaje pominięty. Ostrzeżenie Kiro dotyczące nieprawidłowego formatu EventStream
podaje wyłącznie liczbę bajtów ładunku, nigdy jego zawartość ani nieprzetworzony błąd parsera JSON.
Nie oznacza to, że każdy niezwiązany z tym mechanizm diagnostyczny dostawcy/wtyczki został
poddany audytowi; szerszy przegląd miejsc trwałego zapisu jest śledzony w #11658.

Wewnętrzny cykl życia `/api/modality-bridge/video/drilldown` stanowi oddzielną,
uwierzytelnianą za pomocą interfejsu loopback/tokenu warstwę pamięci podręcznej. Każda operacja wymaga również
kanonicznego, nieprzezroczystego identyfikatora podmiotu. Zanim produkcyjny wywołujący zostanie włączony, musi
wyprowadzać ten identyfikator z uwierzytelnionego tenant'a i nigdy nie może przekazywać
wartości wybranej przez klienta. Klucze pamięci podręcznej wiążą ten podmiot z kanonicznymi identyfikatorami sesji i
odwołań do wideo, przechowują wyłącznie ich klucze pochodne SHA-256 oraz ograniczają zarówno odczyty,
jak i usuwanie do tego samego podmiotu. Pamięć podręczna przechowuje najwyżej 16 pochodnych klatek JPEG
na wpis, wygasza je po dziesięciu minutach i obsługuje ograniczone odczyty
`start`/`end` lub jawne usunięcie sesji.

Każdy podmiot jest ograniczony do 16 wpisów i 64 MiB kanonicznych danych JPEG. Limity te
są niezależne od globalnego pułapu 64 wpisów/256 MiB: presja limitu podmiotu
usuwa najpierw tylko najdawniej używane wpisy tego podmiotu, zanim zostanie rozważone globalne
usuwanie LRU. Wygasłe wpisy są usuwane zarówno z rozliczenia podmiotu, jak i
rozliczenia globalnego podczas aktywności pamięci podręcznej, natomiast anulowanie i niepowodzenie walidacji
nie zatwierdzają częściowego zastąpienia.

Pamięć podręczna odrzuca niekanoniczny Base64, nadmiarowe dopełnienie, multimedia inne niż JPEG, uszkodzone lub
ucięte pliki JPEG oraz pliki JPEG, które generują ostrzeżenie podczas ograniczonego dekodowania pełnego obrazu przez `sharp`.
Ponownie koduje każdy zaakceptowany obraz jako kanoniczny JPEG, wyprowadza szerokość i wysokość
z dekodowanych bajtów zamiast ufać polom wywołującego oraz odrzuca wszelkie końcowe
bajty poliglotyczne zamiast je zachowywać. Do obu limitów wliczany jest wyłącznie ograniczony kanoniczny
skompresowany bufor. Limit transmisji JSON uwzględnia narzut Base64 dla limitu 32 MiB
zdekodowanych danych wejściowych. Każda
przechowywana derywacja rejestruje zweryfikowany format/rozdzielczość JPEG, zasady próbkowania,
wersję derywacji, czas utworzenia, obliczony przez serwer skrót zawartości oraz skrót
odwołania nadrzędnego wraz ze skrótem zawartości nadrzędnej pochodzącym od zaufanego wywołującego. Anulowanie jest sprawdzane
między asynchronicznymi fazami dekodowania/obliczania skrótu, przed atomowym zatwierdzeniem w pamięci podręcznej.

Ten etap nie łączy jeszcze produkcyjnego producenta z trasą i nie
zapewnia wyboru wariantów o wielu rozdzielczościach. Przezroczysta ścieżka żądania Video Bridge
nie powoduje zatem dodatkowej pracy, natomiast wyprowadzanie podmiotu powiązanego z tenant'em oraz
pełny cykl życia FU-08 obejmujący wiele rozdzielczości pozostają jawnymi zadaniami uzupełniającymi,
a nie zachowaniem udokumentowanym jako ukończone.

Klatki są kolejno opisywane za pomocą skonfigurowanego modelu Video. Puste
nadpisanie Video dziedziczy ustawienie Vision; jeśli oba są puste, automatyczny router Vision
wybiera efektywny model obsługujący analizę obrazu. Pomyślnie utworzone opisy
zastępują pierwotną część stabilnym prefiksem `[Video description:`, który również
oznacza tekst jako niezaufaną obserwację pochodzącą z multimediów i nakazuje modelom
w dalszej części przetwarzania, aby nie wykonywały instrukcji znalezionych w multimediach. Klucze pamięci podręcznej opisów klatek
obejmują bajty JPEG, prompt, znacznik czasu i efektywny model; w pamięci podręcznej
przechowywane są wyłącznie pomyślnie utworzone opisy. Wpisy pamięci podręcznej zachowują rzeczywisty model producenta,
który pomyślnie utworzył opis, w tym model zapasowy; most zgłasza `mixed`, gdy różne klatki
zostały przetworzone przez różne modele. Trafienie w pamięci podręcznej ponownie wykorzystuje tożsamość producenta
zamiast zmieniać jej oznaczenie na żądany plan routingu. Pamięć podręczna wyników dla całego wideo
jest kluczowana na podstawie wszystkich danych wejściowych zmieniających wynik — promptu, efektywnego
modelu, zasad próbkowania, liczby klatek, trybu analizy semantycznej, odcisku SHA-256
znormalizowanej wskazówki skupienia, okna skupienia, `transcript`,
`audioTranscript` oraz flagi arkusza stykowego — dlatego zmiana któregokolwiek z tych
wymiarów powoduje chybienie pamięci podręcznej, a nigdy ponowne użycie nieaktualnych danych. Wersja zasad
deduplikacji wizualnej, próg i ograniczona liczba klatek kandydujących są również jawnie uwzględnione w
kluczu i metadanych pamięci podręcznej wyników; zmiana zasad nie może zatem ponownie wykorzystać nieaktualnego
opisu całego wideo. Metadane v4 pamięci podręcznej wyników zachowują tryb i
odcisk, ale nigdy surowe zadanie użytkownika. Metadane mechanizmu ochronnego raportują zarówno
żądany, jak i efektywny tryb analizy; żądany tryb `focused` bez
użytecznego tekstu użytkownika jest raportowany jako efektywnie `full`.

Mechanizm ochronny wyodrębnia każdą obsługiwaną część wideo, ale opisuje nie więcej niż
`modalityBridgeVideoMaxVideos`. W przypadku celu, dla którego udowodniono
`supportsVideo === false`, wideo zakończone niepowodzeniem i przekraczające limit stają się jawnymi, bezpiecznymi
znacznikami tekstowymi, dzięki czemu nie pozostaje żadne surowe wideo. Gdy możliwości są nieznane, części te
zachowują swój nośnik wideo; każda transkrypcja zapasowa podlega powyższej ograniczonej
konwersji tekstu. Cele z `supportsVideo === true` omijają most.
Sygnał przerwania żądania klienta jest propagowany przez pobieranie, kolejkę brokera,
podprocesy i wywołania tworzenia opisów; przerwania zatrzymują przetwarzanie między wideo i nigdy nie powodują
awaryjnego przepuszczenia surowych multimediów.

Ustawienia środowiska wykonawczego są przechowywane w bazie danych i walidowane przez Zod:

| Klucz                               | Domyślnie   | Zakres / działanie                                                                                            |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Opcjonalne środowisko uruchomieniowe, wymagające jawnego włączenia                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` zachowuje ogólne podpisy; `focused` używa ograniczonego, niezaufanego kontekstu ostatniego użytkownika |
| `modalityBridgeVideoModel`          | `""`        | Dziedziczy model Vision Bridge                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` lub proporcjonalne `segment_aware`; awaria detektora powoduje powrót do `uniform`    |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                |

Starsze utrwalone wartości limitu czasu dla wideo przekraczające 120 sekund są ograniczane do
terminu brokera; nowe próby zapisania ustawień przekraczających ten limit są odrzucane.
`GET /api/modality-bridge/video/runtime` wymaga zaufanej, oznaczonej lokalności pętli zwrotnej
przed uwierzytelnieniem lub sprawdzeniem środowiska uruchomieniowego, a następnie wymaga
uwierzytelnienia administracyjnego. Zwraca wyłącznie `available`, oczyszczone wersje FFmpeg/ffprobe oraz stały
powód, gdy środowisko uruchomieniowe jest niedostępne. Wewnętrzny punkt końcowy wyodrębniania nie jest
publicznym interfejsem API przesyłania: nasycenie kolejki zwraca `503` wraz z `Retry-After`, rozłączenie
wywołującego zwraca `499`, a stały termin brokera zwraca `504`. Przekonwertowane odpowiedzi dodają
`video->text;model=<visionModel>;parts=<videos>` do centralnego nagłówka
`x-omniroute-modality-bridge` bez usuwania segmentów Vision ani Audio.

### Maskowanie danych osobowych (`piiMasker.ts`)

Działa na **obu** etapach.

- **`preCall`** klonuje ładunek, przechodzi przez `system`, `messages`, `input` oraz
  `prompt` (w tym elementy będące zwykłymi ciągami znaków) i stosuje `processPII()` (z
  `@/shared/utils/inputSanitizer`) do pól tekstowych `content`/`text`. Gdy
  `PII_REDACTION_ENABLED=true`, wykryte dane osobowe są redagowane w wychodzącym
  ładunku. Jest to niezależne od `INPUT_SANITIZER_MODE` (który steruje wyłącznie
  zasadami dotyczącymi wstrzykiwania promptów). Gdy redagowanie jest wyłączone, wywołanie rejestruje liczbę
  wykryć bez modyfikowania treści.
- **`postCall`** tworzy głęboką kopię odpowiedzi, uruchamia `sanitizePIIResponse()` oraz
  mechanizm maskowania dla struktury Responses API (`maskResponsesOutput` — obejmuje
  `output_text` i `output[].content[].text`). Jeśli nastąpi jakakolwiek redakcja,
  zmodyfikowana odpowiedź zastępuje oryginalną.

Mechanizm zabezpieczający nigdy nie blokuje; jedynie dodaje adnotacje (`meta.detections`,
`meta.redacted`) lub modyfikuje treść.

### Wstrzykiwanie promptów (`promptInjection.ts`)

Wykrywa w treściach dostarczonych przez użytkownika struktury o charakterze ataku i egzekwuje
skonfigurowane zasady. Działanie jest sterowane przez zmienne środowiskowe i opcje
konstruktora:

| Ustawienie      | Zmienna środowiskowa                                                                                 | Domyślnie | Efekt                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Włączone        | `INPUT_SANITIZER_ENABLED`                                                                            | `true`    | Gdy `false`, mechanizm zabezpieczający natychmiast kończy działanie.                                                                                                                                                                                         |
| Tryb            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`    | Zasady dotyczące wstrzykiwania: `block`, `warn` lub `log`. (`redact` jest akceptowane w celu zachowania zgodności wstecznej, ale **nie** usuwa tekstu wstrzyknięcia; modyfikowanie danych osobowych w żądaniu jest sterowane przez `PII_REDACTION_ENABLED`.) |
| Próg blokowania | opcja `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`    | Minimalny poziom istotności wymagany do zablokowania. Przy ustawieniu domyślnym poziom średni podlega wyłącznie obserwacji.                                                                                                                                  |

**Kolejność pierwszeństwa trybów** (`getMode`): `options.mode` wywołującego →
**nadpisanie flagą funkcji w bazie danych** `INJECTION_GUARD_MODE` (Panel → Ustawienia →
Flagi funkcji) → zmienna środowiskowa `INJECTION_GUARD_MODE` → zmienna środowiskowa `INPUT_SANITIZER_MODE` →
`warn`. Nadpisanie z panelu ma zatem pierwszeństwo przed zmiennymi środowiskowymi, dzięki czemu interfejs
Flag funkcji steruje działającym mechanizmem zabezpieczającym na żywo (bez ponownego uruchamiania). Odczyt z bazy danych jest odporny na błędy:
jeśli wystąpi błąd, mechanizm zabezpieczający powraca do działania opartego na zmiennych środowiskowych, a gdy nie
ustawiono nadpisania, działanie jest identyczne jak przy rozstrzyganiu wyłącznie na podstawie zmiennych środowiskowych.

Źródła wykrywania:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (wspólny zestaw detektorów
   używany w innych miejscach potoku).
2. Wbudowane `DEFAULT_GUARD_PATTERNS` (obecnie `system_override_inline` i
   `markdown_system_block`, oba o poziomie istotności `high`).
3. Opcjonalne `customPatterns` przekazywane przez opcje konstruktora (ciągi znaków, wyrażenia regularne
   lub rekordy `{ name, pattern, severity }`).

Gdy `mode === "block"` **i** co najmniej jedno wykrycie osiąga próg ważności,
`preCall` zwraca `{ block: true, message: "Żądanie odrzucone:
wykryto podejrzaną treść" }`. W trybach `warn`/`log` mechanizm ochronny rejestruje
zdarzenie, ale zezwala na wywołanie. Współdzielona funkcja pomocnicza
`evaluatePromptInjection()` jest również eksportowana dla wywołujących, którzy
muszą oceniać prompty bez korzystania z rejestru.

**Limit skanowania (v3.8.20):** detektor sprawdza tylko **pierwsze 16 KB**
połączonego tekstu promptu — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajty)
w `src/shared/utils/inputSanitizer.ts`. Zarówno `detectInjection()`, jak i
`evaluatePromptInjection()` wykonują `slice(0, MAX_INJECTION_SCAN_BYTES)` przed
uruchomieniem pętli wzorców. Dyrektywy wstrzyknięcia znajdują się zwykle blisko
początku danych wejściowych, dlatego ogranicza to wykorzystanie CPU przez
wyrażenia regularne oraz obciążenie GC w przypadku ładunków o rozmiarze setek KB
bez osłabiania wykrywania (por. #3932, #4041).

### Maskowanie danych uwierzytelniających (`credentialMasker.ts`)

Działa na **obu** etapach i jako ostatni element domyślnego łańcucha (priorytet
`95`). Redaguje dobrze znane wzorce kluczy API / tajnych tokenów z wychodzącego
ładunku (treści wiadomości, argumentów wywołań narzędzi i wyników narzędzi)
**oraz** odpowiedzi dostawcy, dzięki czemu dane uwierzytelniające wklejone do
promptu (lub zwrócone przez narzędzie) nie są ujawniane dostawcy zewnętrznemu ani
przesyłane z powrotem do klienta.

- **Wyłącznie za zgodą**, zgodnie z tą samą konwencją co redagowanie danych
  osobowych (powiązane z twardą regułą nr 20): wyłączone, chyba że
  `settings.credentialRedactionEnabled === true` **lub**
  `CREDENTIAL_REDACTION_ENABLED=true`. Po wyłączeniu mechanizm ochronny nie
  wykonuje żadnych działań — nigdy nie blokuje ani nie modyfikuje danych.
- `redactCredentials()` przechodzi przez całe drzewo ładunku/odpowiedzi
  (`walkValue()`, z zabezpieczeniem przed zanieczyszczeniem prototypu i cyklami
  za pomocą `WeakSet`) oraz zastępuje dopasowania symbolem zastępczym
  `[REDACTED:<type>]`, klonując wyłącznie faktycznie zmienione gałęzie.
- `CREDENTIAL_PATTERNS` obejmuje klucze dostawców LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), klucze płatnicze (Stripe, Square),
  klucze chmurowe (klucz dostępu AWS, Twilio, SendGrid, Mailgun), klucze prywatne
  / tokeny JWT, ciągi połączeń zawierające dane uwierzytelniające
  (`mongodb://user:pass@...` itd.) oraz ogólny wzorzec wartości nagłówków
  `Authorization`/`x-api-key`/`api-key`/`apikey`. Klucze o strukturze nagłówków
  (`authorization`, `x-api-key`, `api-key`, `apikey`) są redagowane
  strukturalnie (tylko wartość, z zachowaniem prefiksu schematu, takiego jak
  `Bearer `/`Basic `), a nie za pomocą ogólnego wyrażenia regularnego dla
  tekstu.
- Mechanizm ochronny nigdy nie blokuje; jedynie modyfikuje
  (`modifiedPayload` / `modifiedResponse`) i dodaje adnotacje
  (`meta.credentialsRedacted`, `meta.count`).

Test regresji: `tests/unit/credential-masker-guardrail.test.ts`.

## Kontrakt bazowy (`base.ts`)

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
  block?: boolean; // wartość true powoduje natychmiastowe przerwanie łańcucha
  message?: string; // udostępniany w przypadku zablokowania
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // zwracany przez preCall w celu zmodyfikowania żądania
  modifiedResponse?: TValue; // zwracany przez postCall w celu zmodyfikowania odpowiedzi
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

Mechanizm zabezpieczający sygnalizuje „brak zmian”, zwracając `void`, `{}` lub
`{ block: false }`. Zwrócenie `modifiedPayload`/`modifiedResponse` zastępuje
wartość przekazywaną dalej w łańcuchu do kolejnych mechanizmów zabezpieczających.
`signal?: AbortSignal` przekazuje cykl życia wywołującego do mechanizmów zabezpieczających. Przerwanie żądania stanowi celowy wyjątek od strategii fail-open: mosty multimedialne przerywają pracę i zwalniają zasoby bez przywracania nieprzetworzonych multimediów dla celu, o którym wiadomo, że ich nie obsługuje.

## Rejestr (`registry.ts`)

Singleton `guardrailRegistry` udostępnia:

- `register(guardrail)` — dodaje (lub zastępuje według znormalizowanej nazwy) zabezpieczenie i
  ponownie sortuje według rosnącego `priority`.
- `clear()` / `list()` — pomocnicze funkcje administracyjne.
- `runPreCallHooks(payload, context)` — iteruje aktywne zabezpieczenia, przekazuje
  `payload` przez `modifiedPayload` i zatrzymuje się przy pierwszym `block: true`.
- `runPostCallHooks(response, context)` — ten sam przepływ po stronie odpowiedzi.
- `resetGuardrailsForTests({ registerDefaults })` — czyści stan i opcjonalnie
  ponownie rejestruje wartości domyślne dla czystej izolacji testów.

Oba uruchamiacze zwracają `{ blocked, payload|response, results, guardrail?, message? }`,
gdzie `results` to tablica rekordów `GuardrailExecutionResult`, które zawierają
pola `blocked`, `skipped`, `modified`, `error` i `meta` dla każdego zabezpieczenia,
przydatne do śledzenia.

### Wyłączanie zabezpieczeń na żądanie

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agreguje
zdeduplikowaną listę nazw zabezpieczeń, które powinny zostać pominięte dla bieżącego
żądania. Źródła (wszystkie opcjonalne, wszystkie połączone):

- `apiKeyInfo.disabledGuardrails`
- Treść żądania `disabledGuardrails` (najwyższy poziom)
- Treść żądania `metadata.disabledGuardrails`
- Nagłówek `x-omniroute-disabled-guardrails` (lub starszy
  `x-disabled-guardrails`)

Wartości mogą być tablicami ciągów znaków lub ciągiem znaków oddzielonych przecinkami; nazwy są
normalizowane do małych liter w formacie kebab-case (`pii_masker` → `pii-masker`). Wynik
jest przekazywany przez `context.disabledGuardrails` do rejestru, który pomija
pasujące zabezpieczenia (`skipped: true` w `results`).

## Kolejność wykonania

Dla każdego żądania przechodzącego przez `src/sse/handlers/chat.ts` oraz
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` buduje listę pomijanych elementów z klucza API, treści (body)
   oraz nagłówków.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` uruchamia mechanizmy zabezpieczające (guardrails) w rosnącym
   porządku priorytetów:
   - Wyłączone zabezpieczenia są rejestrowane jako `skipped`.
   - Metoda `preCall` każdego zabezpieczenia może przepisać ładunek (payload) za pomocą `modifiedPayload`.
   - Pierwsze wystąpienie `block: true` przerywa łańcuch, a obsługa zwraca
     odpowiedź odrzucenia przez mechanizm zabezpieczający.
3. Potencjalnie przepisywany ładunek trafia do routingu hybrydowego (combo routing) oraz
   wysyłki nadrzędnej (upstream dispatch).
4. Po skompletowaniu odpowiedzi, `guardrailRegistry.runPostCallHooks(...)`
   uruchamia ten sam łańcuch dla odpowiedzi. Wystąpienie `block: true` w tym miejscu odrzuca
   odpowiedź nadrzędną.

Zabezpieczenia, które zgłaszają błędy, są rejestrowane z wpisem `error: <message>` i logowane przez
`logger.warn`, ale łańcuch jest kontynuowany — zgodnie z założeniem o otwartości na awarię (fail-open).

## Konfiguracja

Zmienne środowiskowe odczytywane przez wbudowane mechanizmy zabezpieczające:

| Zmienna                               | Używana przez             | Efekt                                                                                                                |
| ------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Ustawienie `false` wyłącza wykrywanie całkowicie.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Polityka wstrzykiwania: `warn`, `block` lub `log`. Starsza wartość `redact` nie modyfikuje tekstu wstrzyknięcia.     |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Tryb dla osłony wstrzyknięć; również flaga funkcji bazy danych, która **nadpisuje** zmienne środowiskowe (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimalny poziom ważności odrzucany przez `MODE=block`: `high` (domyślnie), `medium` lub `low`.                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Starszy alias dla `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                 |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Gdy `true`, dane PII w żądaniu są maskowane (niezależnie od trybu wstrzykiwania).                                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Steruje zachowaniem maskera po stronie odpowiedzi.                                                                   |

Zabezpieczenia Modality Bridge odczytują konfigurację wykonawczą z magazynu ustawień
opartego na bazie danych (`getSettings()`), a nie ze zmiennych środowiskowych. Kluczami głównymi dla wizji są
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` oraz
`modalityBridgeCacheMaxEntries`. Starsze klucze
`visionBridge*` są akceptowane tylko jako udokumentowane rozwiązanie zapasowe (fallback) odczytu na jeden cykl;
zapisy z panelu sterowania (dashboard) używają kluczy głównych. Wartości domyślne oraz moduł rozstrzygający mechanizm zapasowy znajdują się w
`src/shared/constants/modalityBridgeDefaults.ts`, a starsze stałe są zachowane w
`src/shared/constants/visionBridgeDefaults.ts`.

Audio używa ustawień `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` i `modalityBridgeAudioMaxClips`, a także współdzielonych
ustawień `modalityBridgeCache*`. Audio nie posiada mechanizmu zapasowego dla starszych kluczy, ponieważ te
klucze zostały wprowadzone wraz ze schematem Modality Bridge.

Wideo używa ustawień `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` oraz
`modalityBridgeVideoTimeout`, a także współdzielonych ustawień `modalityBridgeCache*`.
Jest domyślnie wyłączone, ponieważ pakiety FFmpeg/ffprobe są opcjonalnymi zależnościami operacyjnymi,
a tworzenie podpisów klatek (frame captioning) zwiększa opóźnienie oraz koszt modelu.

## Niestandardowe Guardraile

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

Kroki:

1.  Utwórz `src/lib/guardrails/myGuardrail.ts` rozszerzający `BaseGuardrail`.
2.  Zaimplementuj `preCall` i/lub `postCall`.
3.  Zarejestruj podczas importu (push z `registerDefaultGuardrails`) lub
    wywołaj `guardrailRegistry.register(...)` w czasie wykonania — rejestr zastępuje
    każdy poprzedni guardrail o tej samej znormalizowanej nazwie.
4.  Dodaj testy w `tests/unit/` (istniejące przykłady:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Testowanie

Użyj `resetGuardrailsForTests()` między testami, aby rozpocząć od znanego stanu.
Przekaż `{ registerDefaults: false }`, aby rozpocząć z pustym rejestrem i
zarejestrować tylko testowane guardraile. Vision Bridge akceptuje wstrzykiwanie zależności
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge udostępnia
równoważne punkty dla ustawień, możliwości, wyboru modelu STT, sprawdzania poświadczeń
i transkrypcji. Testy mogą zatem ćwiczyć oba przepływy bez dostępu do bazy danych
lub sieci.

## Zobacz także

- `src/lib/guardrails/` — implementacja
- `src/shared/utils/inputSanitizer.ts` — współdzielony detektor, który zasila
  ochronę przed wstrzykiwaniem promptów i maskowanie PII
- `src/shared/constants/visionBridgeDefaults.ts` — domyślne ustawienia Vision Bridge i
  lista modeli wymuszonego mostkowania
- `src/shared/constants/modalityBridgeDefaults.ts` — współdzielone domyślne ustawienia środowiska wykonawczego Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — warstwa ortogonalna (wyłącznik obwodu, czasy odnowienia)
- `docs/reference/ENVIRONMENT.md` — pełne odniesienie do zmiennych środowiskowych

## Pokrycie tras przez injection-guard i red-team (Faza 8 · Blok D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) obejmuje wszystkie trasy,
które akceptują prompty użytkownika. Szanuje `INJECTION_GUARD_MODE` (domyślnie `warn` = tylko logowanie;
`block` = zwraca HTTP 400 `SECURITY_001`).

| Typ                | Trasy                                                                                                                                                | Tryb domyślny |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Tekst (istniejący) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generatywny        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Dane               | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Ekstrakcja tekstu (`extractMessageContents`) obejmuje `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nocne, `nightly-llm-security.yml`):** promptfoo waliduje, że każda trasa blokuje
korpus OWASP-LLM w `INJECTION_GUARD_MODE=block`; garak uruchamia sondy (pomija bez sekretu).
`moderations` jest uwzględnione dla spójności — operatorzy w trybie blokowania mogą je wyłączyć za pomocą
`resolveDisabledGuardrails`.

Nocny workflow (`.github/workflows/nightly-llm-security.yml`, cron + ręczne
uruchamianie) ma dwa zadania:

- **`promptfoo-guard` (blokujące)** — uruchamia `promptfoo eval -c promptfooconfig.yaml`
  z `INJECTION_GUARD_MODE=block`. Każdy przypadek adversarialny (np. "ignoruj wszystkie
  poprzednie instrukcje...", jailbreaki w stylu DAN) potwierdza, że odpowiedź zawiera
  `error.code === "SECURITY_001"`, tzn. że guard faktycznie odrzucił żądanie.
- **`garak` (doradcze)** — uruchamia garak `--probes promptinject,dan,leakreplay`
  przeciwko lokalnej instancji OmniRoute (`http://localhost:20128/v1`). Zależne od
  sekretu dostawcy (`PROMPTFOO_PROVIDER_KEY`); pomija się elegancko i jest sufiksowane
  `|| true`, więc raportuje bez powodowania błędu CI.

Pokrycie pomocnika guard (`createInjectionGuard` / `withInjectionGuard`)
obejmuje każdą trasę `/v1` zawierającą prompt; tekst promptu jest pobierany z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` przez
`extractMessageContents()` w `src/shared/utils/inputSanitizer.ts`.
