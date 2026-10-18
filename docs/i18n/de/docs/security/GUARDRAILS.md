# Guardrails (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Verbindliche Quelle:** `src/lib/guardrails/`
> **Zuletzt aktualisiert:** 2026-08-29 — v3.8.51 (Die Herkunft des Video-Bridge-Transkripts wird vom Aufrufer deklariert,
> aber noch nicht serverseitig verifiziert — gemäß #11661 klargestellt)

Guardrails erzwingen Sicherheitsvorgaben, Richtlinien und Inhaltstransformationen an der Grenze
zwischen OmniRoute und vorgelagerten Anbietern. Jede Guardrail kann Anfrage-Payloads (`preCall`) und
Antworten vorgelagerter Anbieter (`postCall`) prüfen (und optional ablehnen, transformieren oder
mit Anmerkungen versehen).

Das System ist **fehlertolerant (Fail-open)**: Löst eine Guardrail während der Ausführung einen Fehler aus,
zeichnet die Registry den Fehler auf und fährt mit der nächsten Guardrail fort, anstatt die
Anfrage fehlschlagen zu lassen. Das Blockieren ist stets eine explizite Entscheidung (`block: true`)
und niemals ein Versehen.

## Integrierte Schutzmechanismen

Die Registry lädt beim Import automatisch sechs Schutzmechanismen in Prioritätsreihenfolge
(siehe `registry.ts` → `registerDefaultGuardrails()`):

| Priorität | Name                | Phase(n)       | Datei                 |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niedrigere Prioritätswerte werden **zuerst** ausgeführt.

### Vision Bridge (`visionBridge.ts`) — Modalitäts-Bridge PR-1

Fängt bildhaltige Anfragen ab, die an **Modelle ohne Bildverarbeitung** gerichtet sind, und leitet entweder
die gesamte Anfrage an ein bildverarbeitungsfähiges Modell um oder ersetzt die Bildbestandteile
vor dem Upstream-Aufruf durch Textbeschreibungen, die von einem konfigurierbaren Bildverarbeitungsmodell erzeugt werden.
Dadurch können reine Textanbieter multimodale Nutzlasten transparent verarbeiten.

Ablauf:

1. Überspringen, wenn das Zielmodell bereits Bildverarbeitung unterstützt (es sei denn, es erscheint in der
   Liste der Modelle mit erzwungener Bridge `isVisionBridgeForcedModel`).
2. Bildbestandteile über `extractImageParts(messages)` extrahieren
   (`visionBridgeHelpers.ts`), das die Erkennung an den **vereinheitlichten Mediendetektor**
   `detectMediaParts()` in `open-sse/utils/mediaParts.ts` delegiert — die
   einzige maßgebliche Quelle, die gemeinsam mit dem Combo-Kompatibilitätsfilter verwendet wird.
   Die Extraktion ist auf Bestandteile der obersten Ebene beschränkt, deren Formen
   `replaceImageParts` wieder einsetzen kann (der Extrahieren↔Ersetzen-Vertrag): OpenAI
   `image_url`, Anthropic-base64 `source.type:"base64"`, Anthropic-URL
   `source.type:"url"` und Responses-API-`input_image`. Verschachtelte Treffer und
   reine Indikatorformen sind Material für den Combo-Filter und werden niemals extrahiert.
   Überspringen, wenn keine gefunden wurden.
3. Laufzeitkonfiguration über `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) auflösen: Neue `modalityBridge*`-
   Einstellungsschlüssel haben Vorrang; ältere `visionBridge*`-Schlüssel bleiben als
   **Fallback für einen Zyklus** erhalten (Rollback-Fenster). Vor jeglichem Durchlaufen
   der Medien überspringen, wenn die Bridge deaktiviert ist.
4. Der Moduswähler (`modalityBridgeVisionMode`, siehe Tabelle unten) entscheidet zwischen
   Umleitung und Beschreibung. Die Umleitung gibt `modifiedPayload` zurück, wobei nur `model`
   ausgetauscht wurde, sowie Metadaten `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beschreibungspfad: Bilder auf `maxImages` begrenzen, den aufgabenbezogenen Prompt zusammenstellen,
   den Beschreibungs-Cache prüfen, das Bildverarbeitungsmodell **parallel**
   (`Promise.allSettled`) aufrufen und anstelle der Bilder Textbestandteile im Format
   `[Image N]: <description>` einfügen. Eine fehlgeschlagene Beschreibung ergibt `null`, und der
   ursprüngliche Bildbestandteil wird **beibehalten** (#4012) — außer im Combo-Beschreibungspfad,
   wenn alle Beschreibungen fehlgeschlagen sind; dort erhält ein bestätigter Upstream ohne
   Bildverarbeitung stattdessen den Platzhalter
   `(unavailable — no vision-capable provider connected)` (#8430).
6. `modifiedPayload` + Metadaten (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) zurückgeben.

#### Moduswähler (`modalityBridgeVisionMode`)

| Modus      | Standard | Verhalten                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Unveränderte bisherige Heuristik (#6640/#7204): Nicht-Combo-/`auto/`-Modelle werden an das beste Bildverarbeitungsmodell umgeleitet, sofern das ursprüngliche Modell nicht bereits über verwendbare Zugangsdaten verfügt (dann wird beschrieben); Combo-Ziele werden immer beschrieben.                                                                   |
| `describe` |          | Immer beschreiben — der Umleitungsblock wird vollständig übersprungen; das vom Benutzer gewählte Modell antwortet immer.                                                                                                                                                                                                                                  |
| `reroute`  |          | Umleitung erzwingen: Die Schutzprüfung zum Beibehalten eines Modells mit Zugangsdaten wird umgangen. Die Prüfung der Zugangsdaten für das Umleitungs-**Ziel** gilt weiterhin — wenn kein verwendbares Bildverarbeitungsziel vorhanden ist, fällt die Anfrage auf „Beschreiben“ zurück, damit Rohbilder niemals ein reines Text-Backend erreichen (#8430). |

Erzwungene Modi führen zu einem Kurzschluss, **bevor** die automatische Heuristik ausgeführt wird; das Verhalten von `auto`
ist byteidentisch mit dem Schutzmechanismus vor PR-1.

#### API-Schlüssel-Geltungsbereich (`visionBridgeKeyScope.ts`)

Wenn der API-Schlüssel des Aufrufers `allowedConnections`, Kontingentpools
(`allowedQuotas`) oder Modelle (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) einschränkt, wählt die Bridge nur
Umleitungs- und Beschreibungsmodelle aus, die der Schlüssel verwenden darf, und zwar auf Verbindungen, die der Schlüssel
verwenden darf. Der Beschreibungsaufruf läuft anschließend immer über die OmniRoute-Selbstschleife mit
dem Header `x-omniroute-self-loop-key-id`, sodass die empfangende Chatanfrage
die Verbindungs- und Modellrichtlinie dieses Schlüssels erneut durchsetzt. `enforceApiKeyPolicy()`
berücksichtigt diesen Header nur zusammen mit dem Selbstschleifen-Bearer, sodass er den Zugriff ausschließlich
einschränken kann; eine ID, die nicht aufgelöst werden kann, wird abgelehnt.

Wenn kein Bildverarbeitungsmodell für den Schlüssel zulässig ist, greift der Beschreibungspfad nicht ein und
die Anfrage wird unverändert weitergeleitet; dies entspricht demselben Fail-open-Verhalten wie bei einem deaktivierten
Schutzmechanismus (Metadaten `{ skipped: true, reason: "no_permitted_vision_model" }`).
Anfragen ohne Schlüssel und Schlüssel ohne diese Einschränkungen verhalten sich exakt wie
zuvor.

#### Aufgabenbezogener Beschreibungs-Prompt (`modalityBridgeVisionTaskAware`)

Standardmäßig **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) hängt
den Text der **letzten Benutzernachricht** (auf 500 Zeichen gekürzt) an den
grundlegenden Describe-Prompt an. Dadurch wird die Beschreibung auf das
ausgerichtet, wonach der Benutzer tatsächlich gefragt hat
(codex-vision-proxy-Muster), und das Vision-Modell wird aufgefordert, sichtbaren
Text zu transkribieren. Bei deaktiviertem Flag — oder wenn kein Benutzertext
vorhanden ist — wird der grundlegende Prompt unverändert verwendet.

Die eigene OpenAI-kompatible Anfrage des Describe-Self-Loops
(`callVisionModelSingle()` in `visionBridgeHelpers.ts`) fordert immer
`image_url.detail: "high"` an — bedingungslos, für jeden Aufrufer/Provider und
nicht abhängig von irgendeinem Clientsignal. Sampling mit niedriger Detailstufe
verschlechtert die OCR-Genauigkeit genau für die Texttranskriptionsaufgabe, die
dieser Prompt anfordert. Daher fordert der Describe-Aufruf selbst immer eine
hohe Detailstufe an, unabhängig davon, welche Detailstufe die ursprüngliche
eingehende Anfrage verwendet hat. Dies betrifft nur den internen
Describe-Anfragebody; es ändert nicht, wie OmniRoute das eigene
`image_url.detail` des Aufrufers in der primären Anfrage weiterleitet — dieser
Standardwert wird separat und nur für erkannte OpenCode-Clients in
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`)
angewendet. Der Anthropic-Wire-Format-Zweig des Describe-Self-Loops besitzt
kein `detail`-Feld und wird von keinem der beiden Standardwerte beeinflusst.

#### Obergrenze für Describe-Ausgaben (`modalityBridgeVisionMaxChars`)

| Schlüssel                      | Standardwert | Bereich            |
| ------------------------------ | ------------ | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`          | `0` oder 100–50000 |

`0` (Standardwert) bedeutet **keine Obergrenze** — die von
`callVisionModel()` zurückgegebene Beschreibung wird unverändert
durchgereicht, wodurch das bestehende Verhalten erhalten bleibt. Jeder Wert
im Bereich von 100–50000 kürzt die Beschreibung mit einem `…`-Suffix, bevor
sie als `[Image N]: <description>` wieder eingefügt wird
(`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`).
Erhöhen Sie diesen Wert für detailreiche OCR-Aufgaben, bei denen das
nachgelagerte Modell die vollständige Transkription benötigt; senken Sie ihn,
um die Token-Nutzung bei gesprächigen Vision-Modellen zu begrenzen.
Das Dashboard-Feld befindet sich im Bereich „Advanced“ des Vision-Tabs
(`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) und hebt jeden
Wert zwischen 1 und 99 auf die Untergrenze von 100 an, während eine explizite
`0` unverändert bleibt — `0` ist selbst ein gültiger Zod-Wert
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`) und nicht
lediglich der Standardwert für „nicht gesetzt“.

#### Describe-Cache (`modalityBridge/bridgeCache.ts`)

Prozessweit gemeinsam genutzter In-Memory-LRU- und TTL-Cache für
Describe-Ausgaben. Schlüssel =
`sha256(imageRef + composedPrompt + configuredBridgeModel)` mit
Längenpräfix-Framing (keine Kollisionen an Feldgrenzen). Die Modellkomponente
ist das **konfigurierte** Bridge-Modell, nicht das Modell, das tatsächlich
geantwortet hat — `callVisionModel` kann intern auf ein anderes Modell
zurückfallen, und eine Schlüsselbildung pro Versuch würde den Cache
fragmentieren. Fehlgeschlagene Describe-Aufrufe werden niemals
zwischengespeichert. Einstellungen:

| Schlüssel                       | Standardwert | Bereich |
| ------------------------------- | ------------ | ------- |
| `modalityBridgeCacheEnabled`    | `true`       | —       |
| `modalityBridgeCacheTtlMinutes` | `60`         | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`        | 10–5000 |

#### Normalisierung entfernter Bilder (Self-Loop-Describe/Base64-Abruf)

Wenn die Bridge selbst ein **entferntes** Bild abruft — beim
Anthropic-Describe-Self-Call und bei der Base64-Konvertierung im
claude-wire-format (`ensureBase64ImagesForClaudeWire`), beide über
`fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — wird die daraus
resultierende Daten-URI durch `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) geleitet, bevor sie in die Anfrage an das
Vision-Modell eingebettet wird. Übergroße Bilder werden auf eine **lange Kante
von 2048px** herunterskaliert (entsprechend der Größenbegrenzung, die
OpenAI/Anthropic bereits serverseitig anwenden). Dies reduziert
Upload-Datenmenge und Latenz, ohne zu verändern, was das Vision-Modell sieht.
Für die Größenänderung wird `sharp` verwendet, das per dynamischem Import
geladen wird: Auf einer Plattform, auf der das native Binary nicht geladen
werden kann, löst `normalizeDataUri()` **niemals eine Ausnahme aus** — die
ursprünglichen Bytes werden unverändert durchgereicht, sodass der
Describe-/Base64-Konvertierungspfad weiterhin funktioniert. Bytes, die kein
Bild darstellen (ein Abruf, der kein dekodierbares Bild zurückgegeben hat),
werden ebenfalls unverändert durchgereicht. Diese Normalisierung ist auf
Bilder beschränkt, die die Bridge für ihren eigenen Self-Call abruft — sie
wird niemals auf die unveränderte Passthrough-Nutzlast des Aufrufers
angewendet, im Einklang mit dem Prinzip, Änderungen ausschließlich nach
expliziter Aktivierung vorzunehmen (Harte Regel #20).

#### Einstellungsschema + Migration

Die neuen `modalityBridge*`-Schlüssel werden in `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`) mit Zod validiert:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, das
`modalityBridgeCache*`-Trio und die vom Audio Bridge verwendete
`modalityBridgeAudio*`-Gruppe. Die Migration
`141_modality_bridge_settings.sql` kopiert vorhandene veraltete
`visionBridge*`-Werte in die entsprechenden neuen Schlüssel (idempotent und
ohne jemals einen vom Betreiber gesetzten `modalityBridge*`-Wert zu
überschreiben); die veralteten Schlüssel bleiben für einen Release-Zyklus als
Lese-Fallback zulässig.

#### Transparenz-Header + Statistiken

Durch Describe transformierte Antworten enthalten
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(erstellt durch `buildModalityBridgeHeader()` in
`modalityBridge/bridgeStats.ts`, gesetzt durch
`withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`).
Umgeleitete Anfragen erhalten **keinen** Header — die Nutzlast wurde nicht
verändert, und der Modellwechsel ist bereits im Feld `model` des
Antwortbodys sichtbar.

`GET /api/modality-bridge/stats` (Management-Authentifizierung, dieselbe Stufe wie
`GET /api/settings`) gibt die speicherinternen, modalitätsspezifischen Zähler
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` für `vision`, `audio` und
`video` zurück. `averageLatencyMs` verwendet `latencySamples` und nicht alle Versuche als
Nenner; ein Vorgang ohne Zeitmessung erzeugt nicht künstlich eine
Null-Millisekunden-Stichprobe. `bridged` bleibt der abwärtskompatible Alias für erfolgreiche
Konvertierungen; fehlgeschlagene Versuche erhöhen diesen Zähler nicht.
Die Zähler werden beim Neustart des Prozesses absichtlich zurückgesetzt
(Telemetrie, keine Abrechnung).

#### Dashboard-Konfiguration

Die dedizierte Dashboard-Seite befindet sich unter
`/dashboard/settings/modality-bridge`. Ihre über die URL adressierbaren Registerkarten `Vision`, `Audio`
und `Video` behalten beim Wechsel des `tab`-Werts die Abfrageparameter bei.
Die Registerkarte „Vision“ bietet Aktivierung, Modus, Modellauswahl (einschließlich der automatischen
Standardeinstellung), aufgabenbezogene Prompt-Erstellung, erweiterte Grenzwerte für Zeitüberschreitung, Bilder, Beschreibungslänge und Cache,
Laufzeitzähler sowie eine abgesicherte Beispielanfrage. Auch die Registerkarte „Audio“ ist vollständig funktionsfähig: Sie bietet
Aktivierung, eine ausschließlich für STT vorgesehene Modellauswahl mit „Auto“, Grenzwerte für Zeitüberschreitung und maximale Cliplänge, Audiozähler
sowie einen Beispieltest für `input_audio`. Die Registerkarte „Video“ ist funktionsfähig: Sie zeigt
den Laufzeitstatus von FFmpeg/ffprobe an — einen von vier expliziten UI-Zuständen (`unknown`, während
die Prüfung läuft oder nicht abgeschlossen werden konnte, `restricted` bei einem Dashboard-Host,
der kein Loopback-Host ist und bei dem die Prüfung clientseitig übersprungen wird, `unavailable`, nachdem die Prüfung
durchgeführt und das Fehlen bestätigt wurde, oder `available` mit den FFmpeg-/ffprobe-Versionen) —, speichert
Aktivierung sowie Grenzwerte für Modell, Frames, Video und Zeitüberschreitung dauerhaft, beschränkt die Modellauswahl auf visionsfähige
Modelle und zeigt Videozähler an.

Die frühere Vision-Bridge-Karte unter den KI-Einstellungen ist ein Kompatibilitätslink zur
neuen Seite; sie verwaltet keine zweite Kopie des Formulars mehr. „Media Providers“ verknüpft außerdem
Image-to-Text- und Speech-to-Text-Workflows mit den entsprechenden Modality-Bridge-Registerkarten,
ohne den vorhandenen Speech-to-Text-Playground zu entfernen.

**Umgehung der Zulassungsprüfung für den Self-Loop:** Wenn der Beschreibungsaufruf über OmniRoutes
eigenen `/v1`-Self-Loop geleitet wird (nicht standardmäßiges Provider-Modell), sendet die Unteranfrage
`x-omniroute-admission-bypass: internal` und wird mit den aufgelösten
Self-Loop-Anmeldedaten authentifiziert — dem lokalen Platzhalter `sk_omniroute` im lokalen Modus oder dem
vom Betreiber konfigurierten Umgebungsschlüssel `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), sodass
Bereitstellungen mit `REQUIRE_API_KEY=true` den Beschreibungsaufruf weiterhin ausführen können. Die Umgehung
wird nur für genau diese Anmeldedaten akzeptiert, sodass externe Clients den
Header nicht verwenden können, um die Zulassungsprüfung zu überspringen.

Alte Standardwerte befinden sich in `src/shared/constants/visionBridgeDefaults.ts`; die
neuen Standardwerte für Modus, Aufgabenbezug und Cache sowie der Einstellungs-Resolver befinden sich in
`src/shared/constants/modalityBridgeDefaults.ts`. Der Guardrail stellt eine
`deps`-Konstruktoroption bereit, damit Tests gefälschte Implementierungen von `getSettings` und
`callVisionModel` einschleusen können.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Fängt Chat-Anfragen mit Audioinhalten ab, bevor sie ein Ziel erreichen, von dem nicht
bekannt ist, dass es Audioeingaben akzeptiert. Die Chat-Anfrage wird niemals umgeleitet: Audioteile werden
über den vorhandenen OpenAI-kompatiblen Multipart-Endpunkt transkribiert, und das
ausgewählte Chatmodell fährt mit Texttranskripten fort.

Ablauf:

1. `supportsAudio` über `getResolvedModelCapabilities()` auflösen. Explizite
   Metadaten der Provider-Registry haben Vorrang, gefolgt von statischen Modellmetadaten und anschließend synchronisiertem
   `modalities_input`. Eine deklarierte Eingabeliste ohne `audio` ergibt `false`; wenn
   keinerlei Hinweise auf die Fähigkeit vorliegen, bleibt der Wert `null`. Sowohl `false` als auch `null` aktivieren die
   konservative Bridge, während sie bei `true` umgangen wird.
2. Die `modalityBridgeAudio*`-Einstellungen auflösen und ersetzbare Audioelemente der obersten Ebene
   aus jeder Nachricht über den gemeinsamen `detectMediaParts()`-Detektor extrahieren.
   Unterstützte Übertragungsformate sind OpenAI-`input_audio`, `audio_url` und
   `source.media_type: "audio/*"`. Verschachteltes Audio wird für das Routing erkannt, aber
   nicht über den Ersetzungspfad entfernt. Die Verarbeitung wird durch `modalityBridgeAudioMaxClips`
   begrenzt; spätere Teile bleiben unverändert.
3. Ein konfiguriertes `provider/model` berücksichtigen oder `selectAudioBridgeModel()` die
   `AUDIO_TRANSCRIPTION_PROVIDERS` in stabiler Katalogreihenfolge durchlaufen und das erste
   Modell mit verwendbaren aktiven Provider-Anmeldedaten auswählen lassen.
4. `callAudioTranscription()` konvertiert Base64-/Daten-URI-Audio in eine Multipart-
   `file` oder lädt eine entfernte `audio_url` über die ausschließlich öffentliche ausgehende
   Schutzvorrichtung mit DNS-Pinning und einer Begrenzung auf 25 MB herunter. Anschließend werden die Datei und das ausgewählte
   Modell per POST an den lokalen `/v1/audio/transcriptions`-Self-Loop gesendet, authentifiziert mit
   `resolveSelfLoopBearer()`. Die bestehende Transkriptionsroute führt die normale
   Suche nach Anmeldedaten, die Handhabung von Abklingzeiten und Ratenbegrenzungen sowie die Provider-Weiterleitung durch.
5. Erfolgreiche Aufrufe ersetzen ihre Teile durch `[Audio N]: <transcript>`. Die Aufrufe
   werden mit `Promise.allSettled` ausgeführt: Ein einzelner Fehler behält den ursprünglichen
   Audioteil bei (#4012-Vertrag). Wenn alle Aufrufe fehlschlagen und für das Ziel
   `supportsAudio === false` nachgewiesen ist, werden die Teile zu
   `[Audio N]: (unavailable — no STT provider connected)` (#8430-Vertrag). Bei
   einem unbekannten Ziel (`null`) bleibt das Ergebnis unverändert, wenn alle Aufrufe fehlschlagen. Ein nachweislich
   reines Textziel ohne verwendbare STT-Anmeldedaten erhält denselben expliziten
   Platzhalter, ohne dass ein Netzwerkaufruf erfolgt.

Erfolgreiche Transkripte verwenden den prozessweiten LRU-/TTL-Cache der Modality Bridge. Der
Schlüssel kombiniert die Audioreferenz, die stabile Vorgangsbezeichnung `audio-transcription`
und das ausgewählte STT-Modell; Fehler werden niemals zwischengespeichert. Audioversuche aktualisieren
die gemeinsamen Zähler `bridged`, `cacheHits`, `failures` und `lastUsedAt`.
Transformierte Antworten enthalten
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; unveränderte
Anfragen erhalten kein Audio-Bridge-Segment.

Laufzeiteinstellungen werden in der Datenbank gespeichert und mit Zod validiert:

| Schlüssel                     | Standardwert | Bereich          |
| ----------------------------- | ------------ | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`       | —                |
| `modalityBridgeAudioModel`    | `""`         | Auto oder STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`      | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`          | 1–10             |

Der gemeinsam genutzte Cache wird weiterhin durch `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` und `modalityBridgeCacheMaxEntries` gesteuert.

### Video-Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Fängt Videoelemente der obersten Ebene in Chat-Completions-`messages` und im
Responses-API-`input` ab, bevor ein Ziel ohne bekannte native Videounterstützung
aufgerufen wird. Unterstützte Formate sind `input_video`, `video_url`,
`video_source`, HTTPS-URLs und `data:video/*;base64,...`-Daten-URIs. Reine
Dateinamen im Text werden nicht als Videos behandelt.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ist für die Traversierung der
Anfrage, die Fähigkeits-/Richtlinienprüfung, die Aggregation pro Anfrage und die
Antwortnutzlast zuständig. Die Verarbeitung jedes einzelnen Videos – Abruf, Cache
für das Gesamtergebnis, Beschreibung einer Frame-Sequenz (in die ein vom Aufrufer
angegebenes Audiotranskript integriert wird) sowie Metriken, Abbruch und
Bereinigung pro Versuch – ist hinter `processVideoPart` in
`videoBridgePipeline.ts` gekapselt, das innerhalb der Schleife von `preCall`
einmal pro Videoelement aufgerufen wird. Dieses Modul definiert außerdem die
expliziten Portgrenzen `VideoMediaBrokerPort` (Abruf von Bytes und Extraktion
abgetasteter Frames), `VideoAudioTranscriptionPort` (Zusammenführung eines vom
Aufrufer angegebenen Audiotranskripts mit den abgetasteten Bildunterschriften)
und `VideoDrilldownPort` (Persistenzgrenze für Frame-Drilldowns; noch nicht mit
`processVideoPart` verbunden – derzeit schreibt nur die separate Route
`/api/modality-bridge/video/drilldown` Drilldown-Einträge).

Der öffentliche `/v1`-Anfragepfad importiert oder startet niemals einen
Unterprozess. Remote-Videos werden mit einer Begrenzung von 50 MiB heruntergeladen;
für inline eingebettete Base64-Videos gilt eine konservative Obergrenze von
36 MiB dekodierter Daten pro Video, damit die Hülle aus Modell, Nachrichten und
Framing innerhalb des öffentlichen Zulassungslimits von 50 MiB für JSON-Anfragen
bleiben kann. Inline-Länge und Schätzwerte der dekodierten Größe werden vor der
Speicherzuweisung geprüft. HTTPS ist für die ursprüngliche Remote-URL und jede
Weiterleitung erforderlich; dabei wird die bestehende Schutzvorrichtung für
ausschließlich öffentliche ausgehende Verbindungen mit DNS-Pinning verwendet.
Die Bytes passieren anschließend exakt die interne Brokergrenze
`POST /api/modality-bridge/video/extract`. Diese Route ist sowohl `LOCAL_ONLY`
als auch `SPAWN_CAPABLE`, akzeptiert ausschließlich eine prozessspezifisch
authentifizierte Anfrage über eine vertrauenswürdige Loopback-Verbindung und
akzeptiert niemals eine URL, einen Dateisystempfad, eine ausführbare Datei oder
eine Argumentliste. Die Pipeline für API-Bodygrößen und der inkrementelle
Body-Reader des Handlers erzwingen unabhängig voneinander eine Obergrenze von
50 MiB für Broker-Eingaben. Die begrenzte Warteschlange führt jeweils eine
Extraktion aus, erlaubt vier ausstehende Aufträge und begrenzt ausstehende
Eingabedaten auf 100 MiB.

Innerhalb des Brokers liest `ffprobe` eine private lokale Datei; die feste
Format-Zulassungsliste schließt Wiedergabelisten- und Manifestformate aus. Bei
zulässigen Containern der MOV-Familie bleiben externe MOV-Datenreferenzen
standardmäßig deaktiviert, und der feste Befehl aktiviert sie nicht. Sowohl
`ffprobe` als auch `ffmpeg` verwenden die ausschließlich auf `file` beschränkte
Protokoll-Zulassungsliste, einen Thread, feste Argument-Arrays, keine Shell und
über `PATH` aufgelöste ausführbare Dateien. Als angehängte Bilder enthaltene
Cover-Streams gelten nicht als abspielbare Kandidaten. Alle abspielbaren Streams
müssen die Grenzwerte erfüllen; ein expliziter Standard-Stream wird vor dem
deterministischen Fallback auf den niedrigsten Index bevorzugt. Videos sind auf
600 Sekunden, 8.192 Pixel pro Dimension und 33.554.432 Quellpixel begrenzt.
FFmpeg tastet 1–16 JPEG-Frames an den Mittelpunkten ab, skaliert die lange Kante
auf höchstens 1.024 Pixel herunter, ohne kleinere Eingaben hochzuskalieren, und
erhält niemals eine URL. Die Abtastung erfolgt standardmäßig mit `uniform`. Die
optionalen Richtlinien `scene_aware` und das experimentelle `segment_aware`
führen einen zusätzlichen festen FFmpeg-Durchlauf über den bereits validierten
lokalen Stream aus, wählen eine begrenzte Anzahl von `showinfo`-Szenenzeitstempeln
aus und greifen bei einem Fehler oder Timeout des Detektors, fehlerhafter Ausgabe
oder einer leeren Kandidatenmenge deterministisch auf dieselben gleichmäßig
verteilten Mittelpunkte zurück. Im segmentorientierten Modus werden
Mittelpunkt-Abtastungen proportional zu den validierten Szenenintervallen
zugewiesen; Nachweise für die Segmentorientierung und das Fallback-Verhalten
werden weiter unten ausführlich beschrieben. Die harte Obergrenze von 16 Frames
wird bei jeder Richtlinie nach der Auswahl angewendet. Wenn eine
szenenorientierte Anfrage nur über ein Budget von einem Frame verfügt, verwendet
sie den gleichmäßig bestimmten Mittelpunkt des aktiven Gesamtvideo- oder
Fokusfensters und meldet `policyEffective: uniform`: Ein einzelner ausgewählter
Szenen-Frame kann nicht beide zeitlichen Enden abbilden. Ein Aufrufer kann
optional ein endliches Fokusfenster (`start`/`end` in Sekunden) angeben; die
Grenzen werden auf die Mediendauer beschränkt, umgekehrte oder nicht endliche
Fenster werden abgelehnt, und alle Abtastrichtlinien werden ausschließlich
innerhalb des normalisierten Intervalls ausgeführt. Das resultierende Fenster
wird in die Abtastmetadaten und in das Präfix der nicht vertrauenswürdigen
Beschreibung aufgenommen, damit nachgelagerte Modelle einen fokussierten
Ausschnitt von der vollständigen Zeitleiste unterscheiden können.

Der semantische Fokus der Bildunterschriften ist eine separate, explizite
Einstellung. Der standardmäßige Analysemodus `full` behält den bestehenden
Frame-Prompt bei und leitet niemals Anfragetext an das Bildunterschriftenmodell
weiter. Im Modus `focused` liest die Bridge nur den neuesten, nicht leeren,
vom Benutzer verfassten `text`/`input_text` aus demselben Chat- oder
Responses-Container, normalisiert ihn auf NFC, fasst Steuerzeichen und
Leerraum zusammen und begrenzt ihn auf 500 Unicode-Codepunkte. Ein leeres
Ergebnis führt zu einem Fallback auf den exakten `full`-Prompt. Ein verwendbarer
Hinweis wird als JSON in einem dedizierten Block für nicht vertrauenswürdigen
Benutzerkontext serialisiert und darf ausschließlich die Priorisierung
beobachtbarer Details beeinflussen; er kann die separate Warnung, sichtbaren
oder hörbaren Anweisungen in den Medien nicht zu folgen, nicht außer Kraft
setzen. Der textuelle Fokus leitet niemals `start`/`end` ab und verändert den
zeitlichen Abtaster nicht.

#### FU-07 Strukturelle Segmentnachweise

`segment_aware` verwendet einen einzigen begrenzten Voranalysedurchlauf über den bereits validierten lokalen Videostream. Die feste Filterkette skaliert das Video zunächst auf eine Breite von höchstens 320 Pixeln, erkennt Szenenwechsel und eingefrorene Intervalle und nimmt anschließend mit 1 Bild pro Sekunde Stichproben für Unschärfe, durchschnittliche Luminanz sowie räumliche und zeitliche Informationen. Der Durchlauf ist auf 600 strukturelle Stichproben, einen FFmpeg-/Filter-Thread, dieselben Positivlisten für das ausschließlich verwendete `file`-Protokoll und die Container, eine Obergrenze von 1 MiB für die Prozessausgabe sowie höchstens 30 Sekunden innerhalb des gemeinsamen Abbruch-/Fristmechanismus des Brokers begrenzt. Er übernimmt niemals einen Befehl, Filter, Pfad oder eine URL aus der Anfrage.

Die strukturellen Werte sind deterministische Stichprobenbelege und kein semantisches Videoverständnis. Aus ihnen werden weder Motive, Handlungen, Untertitel, Sprache noch Benutzerabsichten abgeleitet. Szenen- und Standbildgrenzen bilden Segmente; Standbildabdeckung, Unschärfe, Belichtung, räumliche Detailtiefe und zeitliche Veränderung beeinflussen lediglich, wie das bestehende Budget von 1–16 Bildern zugewiesen wird. Ein vollständig eingefrorenes Segment ist auf ein Bild begrenzt, während nicht eingefrorene Segmente um das verbleibende Budget konkurrieren. Wenn mehr Grenzen als Bilder vorhanden sind, wird eine gleichmäßige Abdeckung der Zeitleiste beibehalten, sodass schnelle frühe Schnitte kein langes abschließendes Segment verbergen können. Szenengrenzen, die innerhalb der 1-sekündigen Analyseauflösung einer Standbildgrenze liegen, werden zusammengeführt.

Fehlende Filter, fehlerhafte oder leere Belege, ein Detektorfehler oder eine Zeitüberschreitung der begrenzten Voranalyse führen als offene Fehlerbehandlung exakt zur einheitlichen Mittelpunktstrategie zurück. Ein Abbruch durch den Aufrufer oder das Erreichen der Broker-Frist führt nicht zu dieser offenen Fehlerbehandlung: Der laufende Unterprozess wird beendet, eine spätere Bildextraktion wird verhindert und die private temporäre Verzeichnisstruktur wird in `finally` entfernt.

`scripts/perf/video-bridge-fu07-eval.ts` erzeugt deterministische reale FFmpeg-Testdaten für Einsparungen bei Untertitelaufrufen nach der Deduplizierung, die Budgetzuweisung bei hoher Bewegungsdichte, Belege für Unschärfe, Belichtung und SI-TI, schnelle Schnitte mit einem langen Schlusssegment sowie Fehlalarme bei allmählichen Überblendungen. Das Skript erfasst die verstrichene Voranalysezeit und, sofern `/usr/bin/time` verfügbar ist, die CPU-Zeit des Kindprozesses und den maximalen RSS-Speicherverbrauch. Seine Qualitätsprüfungen sind ausschließlich strukturelle Orakel. Die Qualität realer Untertitelmodelle bleibt `HOLD`, da dieses Testsystem weder über einen autorisierten Endpunkt noch über einen eingefrorenen Bewerter verfügt. Monetäre Einsparungen bleiben ebenfalls `HOLD`, sofern nicht mit `--caption-cost-per-call-usd` eine explizite positive Kostenschätzung pro Aufruf angegeben wird; das Skript erfindet keines dieser Ergebnisse.

Jedes Bild ist auf 4 MiB, alle Rohbilder zusammen auf 23 MiB und die serialisierte Broker-Antwort auf 32 MiB begrenzt. Ein privates temporäres Verzeichnis wird in `finally` entfernt. OmniRoute enthält kein gebündeltes FFmpeg und akzeptiert keinen benutzerdefinierten Pfad zur ausführbaren Datei. Vor der Untertitelung führt die Bridge eine konservative visuelle Deduplizierung durch: Jedes JPEG wird auf einen 16×16-Graustufenpuffer reduziert und ausschließlich mit dem zuletzt beibehaltenen Bild verglichen. Bei einem angeforderten Untertitelbudget von mehr als einem Bild stellt die Extraktion einen begrenzten Kandidatenpool bereit, der höchstens doppelt so groß wie dieses Budget ist und niemals mehr als 16 Bilder umfasst. Die angeforderte Obergrenze wird erst nach der Deduplizierung angewendet, wobei bei einem Budget von mindestens zwei Bildern der erste und der letzte ausgewählte Kandidat während der abschließenden Ausdünnung erhalten bleiben. Die versionierte Richtlinie `grayscale-16x16-mean-cells-v2` verwendet den größeren Wert aus der mittleren Luminanzdifferenz und dem Anteil der Miniaturbildzellen, deren normalisierte Differenz mindestens 0,05 beträgt. Der Schwellenwert für Duplikate ist die Konstante 0,04, die zugunsten der Vorhersagbarkeit gewählt und nicht als Laufzeiteinstellung bereitgestellt wird. Dieses sekundäre kontrastreiche Signal bewahrt kleine Bewegungen und sichtbare Textänderungen, die ein ausschließlich auf Mittelwerten basierender Vergleich verbergen kann. Fehler des Vergleichsmoduls oder Decoders werden offen behandelt und die Abdeckung bleibt erhalten. Die Ausgabemetadaten unterscheiden zwischen extrahierten Kandidaten, erfolgreich verwendeten Bildern und verworfenen visuellen Duplikaten.

Ein explizit gekennzeichneter Videoteil kann einen mit Zeitstempeln versehenen Kontaktbogen anfordern. Die Bridge erstellt ein JPEG-Raster mit höchstens 4 Spalten und 16 Bildern. In jede 512 Pixel große Zelle wird der Zeitstempel der Quelle in ein kontrastreiches unteres Band eingebrannt, während dieselben Zeitstempel zur nachgelagerten Zuordnung und Prüfung in den Textmetadaten verbleiben. Das vollständige JPEG bleibt auf 32 MiB begrenzt. Wenn `sharp` das Raster nicht decodieren oder zusammensetzen kann, greift die Bridge auf die einzelnen JPEG-Bilder zurück; ein Client-Abbruch wird weiterhin durch den Kontaktbogenvorgang propagiert.

Die Nachweise für eine Hochstufung sind bewusst vom synthetischen Mikrobenchmark für die Zusammensetzung getrennt. `scripts/perf/video-bridge-contact-sheet-eval.ts` definiert ein schemaversioniertes A/B-Testsystem für reale, mit OpenAI kompatible Vision-Modelle. Es misst die vom Anbieter gemeldeten Token, die End-to-End-Latenz der verstrichenen Zeit einschließlich der Kontaktbogenerstellung, die Anzahl der Modellaufrufe und die im Manifest definierte Faktenerhaltung. Unverarbeitete Modellantworten werden nicht in den Bericht geschrieben; gespeichert werden lediglich SHA-256-Digests und die IDs übereinstimmender Fakten. Das Testsystem führt weder einen Netzwerkaufruf noch einen kostenpflichtigen Modellaufruf aus, sofern nicht `--execute-real` übergeben wird und `--model`, `OMNIROUTE_BASE_URL` und `OMNIROUTE_API_KEY` konfiguriert sind. Ohne diesen expliziten realen Durchlauf bleibt sein maschinenlesbares Urteil `HOLD`; synthetische Messungen von Nutzdaten und Aufrufanzahlen allein sind kein Nachweis für eine Hochstufung.

Aufrufer können einem unterstützten Videoteil optional ein `transcript.cues`-Array hinzufügen, wenn sie bereits über zeitlich ausgerichteten Text verfügen. Jeder Eintrag muss `text`, ein endliches `start`-/`end`-Intervall innerhalb der ermittelten Dauer und eine in der Positivliste enthaltene `source` (`client`, `embedded` oder `audio-bridge`) aufweisen; `confidence` hat standardmäßig den Wert `1` und muss zwischen `0` und `1` liegen. Exakt doppelte Einträge werden zusammengeführt. OmniRoute startet aufgrund dieser Metadaten niemals eine Transkription: Validierte Einträge werden mit Quelle, Konfidenz und Intervall in das beschriebene Ergebnis kopiert und neben den Bilduntertiteln als nicht vertrauenswürdige Beobachtungen dargestellt. Ungültiger Text, Text außerhalb des zulässigen Bereichs oder Text ohne Herkunftsangabe wird abgelehnt, statt in den Untertitelstream aufgenommen zu werden. Beide Transkriptkanäle des Anfragekörpers normalisieren die angegebene Herkunft zu `client`, einschließlich selbst deklarierter Kennzeichnungen als `embedded` oder `audio-bridge`. Nur ein servereigener Adapter kann diese vertrauenswürdigen Kennzeichnungen über das ausschließlich im Code verfügbare Argument `trustedSource` zuweisen; ein JSON-Feld der Anfrage kann dieses Argument nicht erreichen. Transkripttext bleibt unabhängig von seiner Herkunft ein nicht vertrauenswürdiger, aus Medien abgeleiteter Inhalt und darf niemals über die Autorisierung entscheiden.

Ein fortgeschrittener Aufrufer kann für dasselbe Video eine `audioTranscript`-Spur bereitstellen;
sie wird als vom Client bereitgestellter Text behandelt, nicht als Nachweis einer serverseitigen Transkription.
Die Fusionsschnittstelle führt visuelle und akustische Beobachtungen unter
einer gemeinsamen Frist und einem gemeinsamen Abbruchsignal aus, ordnet sie auf einer gemeinsamen Zeitleiste an, fasst
exakte Duplikate zusammen und meldet ein Teilergebnis, wenn nur eine Seite erfolgreich ist.
Ein ungültiges `audioTranscript` führt zu diesem Teilergebnis — die visuelle
Beschreibung bleibt erhalten und der Audio-Zweig zeichnet einen bereinigten Fehlercode auf —
anstatt das gesamte Video fehlschlagen zu lassen. Die Verfügbarkeit pro Zweig, das Teilresultat-Flag
und die bereinigten Fehlercodes bleiben im beschriebenen Ergebnis, in den
Guardrail-Metadaten (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), in den Metadaten des Ergebnis-Caches und in den
Fusionszählern der Bridge erhalten. Der standardmäßige Video-Bridge-Pfad ruft keine Spracherkennung auf
und lädt keine zweite Kopie des Mediums herunter; ohne diese explizite Spur bleibt er
auf Video beschränkt.

**Aufbewahrung von Transkripten (#12150 P1).** Dies gilt automatisch, sobald die
Video Bridge (die selbst Opt-in ist) einen Transkripthinweis rendert — es gibt kein separates
Aufbewahrungs-Flag. Wenn eine Anfrage irgendeinen Transkripthinweis rendert (ein vom Aufrufer deklariertes
`transcript` oder ein fusioniertes `audioTranscript`), markiert die Guardrail sie als
`videoBridgeObserved` und erzeugt eine geschwärzte Schattenkopie der Videobeschreibung —
eine identische Darstellung, in der der Freitextkörper jedes Hinweises durch
`[redacted-video-transcript]` ersetzt wird, indem das strukturierte Hinweisfeld ersetzt wird,
bevor die Zeichenfolge zusammengesetzt wird (niemals durch Parsen des abgeflachten Textes, sodass kein
Hinweisinhalt — weder bösartig noch gewöhnlich, einschließlich Textkörpern mit `]` wie
`[inaudible]`/`[music]` — erhalten bleiben kann). Im persistierten Anfragekörper des Aufrufprotokolls wird
jeder vom Video abgeleitete Textteil durch diese geschwärzte Schattenkopie ersetzt, wobei die Zuordnung
über Inhaltsgleichheit erfolgt; der `fullText`-Anker wird erneut aus der fertiggestellten Guardrail-Nutzlast
vor dem Aufruf gelesen, sodass die Zuordnung auch dann erfolgreich bleibt, wenn spätere verkettete Guardrails
(die Maskierer für personenbezogene Daten und Anmeldedaten mit den Prioritäten 10/95) den Beschreibungstext direkt umschreiben
und nachdem System-Prompt-/Handoff-/Memory-Injektion das Nachrichten-Array umgeformt hat. Der
an das Modell weitergeleitete Körper bleibt unverändert. Eine beobachtete Anfrage befüllt außerdem
keine dauerhafte Memory (sowohl die anfrage- als auch die antwortbasierte Extraktion werden übersprungen),
sodass die eigene Antwort des Modells keinen Transkripttext in Memory wiedergeben kann.

**Rohe Videofelder (#12430).** Wenn die Bridge aktiviert ist und die native Videounterstützung unbekannt ist oder fehlt, aktivieren definierte `transcript`-/`audioTranscript`-Felder ebenfalls `videoBridgeObserved`, selbst nach einem Fehler bei der Beschreibung oder bei Erreichen eines `maxVideos`-Limits. `null` und leere Zeichenfolgen zählen; fehlende Felder und Nicht-Video-Metadaten zählen nicht. Aufbewahrte Kopien schwärzen diese Felder oder lassen die Anfrage aus, und Caches/Memory werden umgangen.

Auf diesen Fallback-Pfaden werden gültige, vom Aufrufer bereitgestellte Hinweise zu unterstützten `text`-/`input_text`-
Teilen statt zu nicht standardisierten Anbieterfeldern. Beide von der Anfrage bereitgestellten Spuren
bleiben nicht vertrauenswürdige `client`-Beobachtungen, mit einer ausdrücklichen Warnung, dass das Video
nicht beschrieben wurde und die Zeitstempel nicht anhand des Mediums verifiziert wurden. Die bestehenden
Gesamt- und Pro-Hinweis-Budgets von 256 Hinweisen/64 KiB gelten für beide Spuren zusammen;
Zeitstempel müssen innerhalb der 600-Sekunden-Obergrenze des Brokers und eines gegebenenfalls bereitgestellten Fokusfensters
liegen. Ungültige Spuren werden verworfen und nicht als beliebiger Text weitergeleitet; eine gültige
Geschwisterspur kann weiterhin verwendet werden, sofern das gemeinsame Budget nicht überschritten wird. Null-/leere
Felder fügen keinen Text hinzu. Dieser Fallback fügt weder Medienabruf noch Transkription hinzu.
Transkript-Erweiterungsfelder werden aus dem Fallback-Video-Container und seinen
`video_url`-/`source`-Objekten entfernt. Die OpenAI-Wire-Allowlist bleibt strikt; unbekannte native
Video-Container bleiben verfügbar und bekannte Nur-Text-Ziele behalten sichere Markierungen.
Strukturierte Schwärzungs-Schattenkopien schützen den angehängten Transkripttext, während die
ursprüngliche, dem Aufrufer gehörende Anfrage unverändert bleibt. Ziele mit nativer Unterstützung und
deaktivierte Bridges behalten ihr bestehendes Umgehungsverhalten bei.

Zusätzliche aufbewahrte Kopien verwenden dasselbe Signal für beobachtete Anfragen. Der rohe
Client-Anfrage-Snapshot vor der Guardrail, die im Arbeitsspeicher ausstehende Anfrage und das Protokoll
frühzeitig abgelehnter Anfragen ersetzen Transkriptfelder in Videoteilen strukturell;
durch Pipeline-Stufen und Kontext-Handoff erzeugte Zeichenfolgen-Prompts werden an der Senke des
persistierten Anfragekörpers geschwärzt. Die persistierte Markierung `video_content_removed`
bewirkt, dass eine Fortsetzung mit `previous_response_id` geschlossen fehlschlägt, statt Text zu rekonstruieren,
der absichtlich verworfen wurde. Wenn eine beobachtete Anfrage ihre
teilbezogene Schwärzungs-Schattenkopie vor der Protokollierung verliert oder auch nur eine von mehreren Video-Schattenkopien
nach späteren Anfragemutationen nicht mehr zugeordnet werden kann, wird der aufbewahrte Anfragekörper
vollständig ausgelassen, statt ein nur teilweise geschwärztes Transkript aufzubewahren.

Bei einer beobachteten Anfrage kann eine Modellantwort einen beliebigen Teil des
Transkripts ohne strukturierte Hinweisgrenze zitieren. Ihr persistierter
`responseBody` im Aufrufprotokoll wird daher durch eine Auslassungsmarkierung ersetzt; das detaillierte
Pipeline-Artefakt (das Upstream-/Client-Körper und Stream-Chunks enthalten kann)
wird nicht aufbewahrt. Semantische, Idempotenz- und Reasoning-Replay-Caches umgehen
Lese- und Schreibvorgänge für diese Anfrage. Die Anbieteranfrage und die für den Client sichtbare
Antwort bleiben unverändert. Frühe Keepalive-Bytes werden aus dem temporären
Puffer entfernt, wenn das detaillierte Artefakt ausgelassen wird. Kiros Warnung zu einem fehlerhaften EventStream
meldet ausschließlich die Byteanzahl der Nutzlast, niemals deren Inhalt oder den Rohfehler
des JSON-Parsers.
Dies stellt nicht die Behauptung auf, dass sämtliche Diagnosen unabhängiger Anbieter/Plugins
überprüft wurden; die umfassendere Prüfung aufbewahrter Senken wird in #11658 verfolgt.

Der interne Lebenszyklus von `/api/modality-bridge/video/drilldown` ist ein separates,
über Loopback/Token authentifiziertes Cache-Substrat. Jede Operation erfordert außerdem
eine kanonische, opake Prinzipal-ID. Bevor ein Produktionsaufrufer aktiviert wird, muss
er diese ID aus dem authentifizierten Mandanten ableiten und darf niemals einen vom
Client ausgewählten Wert weiterleiten. Cache-Schlüssel binden dieses Prinzipal an
kanonische Sitzungs- und Videoreferenz-IDs, speichern ausschließlich deren mittels
SHA-256 abgeleitete Schlüssel und beschränken sowohl Lese- als auch Löschvorgänge auf
dasselbe Prinzipal. Der Cache speichert höchstens 16 abgeleitete JPEG-Frames pro Eintrag,
lässt sie nach zehn Minuten ablaufen und unterstützt begrenzte `start`-/`end`-Lesevorgänge
oder das explizite Löschen einer Sitzung.

Jedes Prinzipal ist auf 16 Einträge und 64 MiB kanonischer JPEG-Daten beschränkt. Diese
Grenzen sind unabhängig von der globalen Obergrenze von 64 Einträgen/256 MiB: Bei
Kapazitätsdruck auf das Prinzipalkontingent werden ausschließlich die am längsten nicht
verwendeten Einträge dieses Prinzipals entfernt, bevor eine globale LRU-Verdrängung in
Betracht gezogen wird. Abgelaufene Einträge werden bei Cache-Aktivität sowohl aus der
prinzipalbezogenen als auch aus der globalen Abrechnung entfernt, während ein Abbruch
oder eine fehlgeschlagene Validierung keinen teilweisen Ersatz übernimmt.

Der Cache weist nichtkanonisches Base64, überzählige Auffüllzeichen, Medien, die keine
JPEGs sind, fehlerhafte oder abgeschnittene JPEGs sowie JPEGs zurück, die bei einer
begrenzten vollständigen Bilddekodierung mit `sharp` eine Warnung erzeugen. Jedes
akzeptierte Bild wird als kanonisches JPEG neu kodiert; Breite und Höhe werden aus den
dekodierten Bytes abgeleitet, statt den Feldern des Aufrufers zu vertrauen, und
nachgestellte Polyglot-Bytes werden verworfen, statt sie beizubehalten. Nur der begrenzte
kanonische komprimierte Puffer wird auf beide Kontingente angerechnet. Das
JSON-Übertragungslimit berücksichtigt den Base64-Overhead für die Obergrenze von 32 MiB
für dekodierte Eingabedaten. Jede gespeicherte Ableitung zeichnet ihr validiertes
JPEG-Format und ihre validierte Auflösung, die Sampling-Richtlinie, die Ableitungsversion,
den Erstellungszeitpunkt, den serverseitig berechneten Inhalts-Hash sowie die gehashte
übergeordnete Referenz zusammen mit dem Hash des übergeordneten Inhalts vom
vertrauenswürdigen Aufrufer auf. Zwischen asynchronen Dekodierungs- und Hash-Phasen wird
auf einen Abbruch geprüft, bevor der atomare Cache-Commit erfolgt.

Dieses Arbeitspaket verbindet noch keinen Produktionsproduzenten mit der Route und
stellt keine Auswahl von Varianten mit mehreren Auflösungen bereit. Der transparente
Anforderungspfad der Video Bridge verursacht daher keinen zusätzlichen Aufwand, während
die mandantengebundene Ableitung des Prinzipals und der vollständige
FU-08-Lebenszyklus mit mehreren Auflösungen weiterhin ausdrücklich nachgelagerte
Arbeiten darstellen und nicht als abgeschlossenes Verhalten dokumentiert werden.

Frames werden sequenziell mit dem konfigurierten Video-Modell beschriftet. Eine leere
Video-Überschreibung übernimmt die Vision-Einstellung; wenn beide leer sind, wählt der
Vision-Auto-Router das tatsächlich zu verwendende visionsfähige Modell aus. Erfolgreiche
Beschriftungen ersetzen den ursprünglichen Teil durch ein stabiles Präfix
`[Video description:`, das den Text außerdem als nicht vertrauenswürdige, aus Medien
abgeleitete Beobachtung kennzeichnet und nachgelagerte Modelle anweist, in den Medien
gefundene Anweisungen nicht zu befolgen. Cache-Schlüssel für Frame-Beschriftungen
umfassen die JPEG-Bytes, den Prompt, den Zeitstempel und das tatsächlich verwendete
Modell; nur erfolgreiche Beschriftungen werden im Cache gespeichert. Cache-Einträge
behalten das tatsächlich erfolgreiche Erzeugermodell bei, einschließlich eines
Fallback-Modells; die Bridge meldet `mixed`, wenn verschiedene Frames von verschiedenen
Modellen erzeugt wurden. Ein Cache-Treffer verwendet diese Erzeugeridentität erneut,
statt sie als angeforderten Routingplan neu zu kennzeichnen. Der Ergebnis-Cache für das
gesamte Video wird anhand jeder Eingabe verschlüsselt, die die Ausgabe verändert —
Prompt, tatsächlich verwendetes Modell, Sampling-Richtlinie, Frame-Anzahl, Modus der
semantischen Analyse, SHA-256-Fingerabdruck des normalisierten Fokushinweises,
Fokusfenster, `transcript`, `audioTranscript` und das Kontaktabzug-Flag —, sodass jede
Änderung an einer dieser Dimensionen zu einem Cache-Fehlschlag führt und niemals zu
einer veralteten Wiederverwendung. Auch Version und Schwellenwert der Richtlinie zur
visuellen Deduplizierung sowie die begrenzte Anzahl von Frame-Kandidaten sind im
Ergebnis-Cache-Schlüssel und in den Metadaten explizit enthalten; eine Änderung der
Richtlinie kann daher keine veraltete Beschreibung des gesamten Videos
wiederverwenden. Die Metadaten des Ergebnis-Caches v4 enthalten den Modus und den
Fingerabdruck, niemals die unbearbeitete Benutzeraufgabe. Die Guardrail-Metadaten geben
sowohl den angeforderten als auch den tatsächlich verwendeten Analysemodus an; ein
angeforderter Modus `focused` ohne verwendbaren Benutzertext wird als tatsächlich
`full` gemeldet.

Die Guardrail extrahiert jeden unterstützten Videoteil, beschreibt jedoch höchstens
`modalityBridgeVideoMaxVideos`. Für ein Ziel, für das nachgewiesen wurde, dass
`supportsVideo === false` gilt, werden fehlgeschlagene und das Limit überschreitende
Videos in explizite sichere Textmarkierungen umgewandelt, sodass kein unverarbeitetes
Video erhalten bleibt. Wenn die Fähigkeit unbekannt ist, behalten diese Teile ihren
Videoträger bei; ein etwaiges Fallback-Transkript folgt der oben beschriebenen
begrenzten Textkonvertierung. Ziele mit `supportsVideo === true` umgehen die Bridge.
Das Abbruchsignal der Client-Anforderung wird über Download, Broker-Warteschlange,
Unterprozesse und Beschriftungsaufrufe hinweg weitergegeben; Abbrüche stoppen zwischen
Videos und geben niemals ersatzweise unverarbeitete Medien frei.

Laufzeiteinstellungen sind DB-gestützt und Zod-validiert:

| Schlüssel                           | Standardwert | Bereich / Verhalten                                                                                                                      |
| ----------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`      | Optionale Laufzeitumgebung, Opt-in                                                                                                       |
| `modalityBridgeVideoAnalysisMode`   | `"full"`     | `full` behält generische Bildunterschriften bei; `focused` verwendet begrenzten, nicht vertrauenswürdigen Kontext des neuesten Benutzers |
| `modalityBridgeVideoModel`          | `""`         | Übernimmt das Vision-Bridge-Modell                                                                                                       |
| `modalityBridgeVideoFrameCount`     | `8`          | 1–16                                                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`  | `uniform`, `scene_aware` oder proportional `segment_aware`; bei einem Detektorfehler wird auf `uniform` zurückgegriffen                  |
| `modalityBridgeVideoMaxVideos`      | `1`          | 1–4                                                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`     | 1000–120000 ms                                                                                                                           |

Persistierte ältere Video-Timeout-Werte über 120 Sekunden werden auf die
Broker-Deadline begrenzt; neue Einstellungsänderungen oberhalb dieses Grenzwerts werden abgelehnt.
`GET /api/modality-bridge/video/runtime` erfordert vor der Authentifizierung
oder Laufzeitprüfung eine vertrauenswürdige, bestätigte Loopback-Lokalität und anschließend eine
Management-Authentifizierung. Der Endpunkt gibt nur `available`, bereinigte FFmpeg-/ffprobe-Versionen und einen festen
Grund zurück, wenn die Laufzeitumgebung nicht verfügbar ist. Der interne Extraktionsendpunkt ist keine
öffentliche Upload-API: Bei Warteschlangensättigung werden `503` und `Retry-After` zurückgegeben, bei einer
Verbindungstrennung durch den Aufrufer `499` und bei Erreichen der festen Broker-Deadline `504`. Konvertierte Antworten fügen
`video->text;model=<visionModel>;parts=<videos>` zum zentralen
`x-omniroute-modality-bridge`-Header hinzu, ohne Vision- oder Audiosegmente zu entfernen.

### PII-Maskierer (`piiMasker.ts`)

Wird in **beiden** Phasen ausgeführt.

- **`preCall`** klont die Nutzlast, durchläuft `system`, `messages`, `input` und
  `prompt` (einschließlich einfacher Zeichenfolgenelemente) und wendet `processPII()` (aus
  `@/shared/utils/inputSanitizer`) auf `content`-/`text`-Felder vom Typ Zeichenfolge an. Wenn
  `PII_REDACTION_ENABLED=true` ist, werden erkannte personenbezogene Daten in der ausgehenden
  Nutzlast unkenntlich gemacht. Dies ist unabhängig von `INPUT_SANITIZER_MODE` (das nur die
  Richtlinie für Prompt-Injection steuert). Wenn die Unkenntlichmachung deaktiviert ist, zeichnet der Aufruf die Anzahl der Erkennungen
  auf, ohne Inhalte umzuschreiben.
- **`postCall`** erstellt einen tiefen Klon der Antwort und führt `sanitizePIIResponse()` sowie
  den Maskierer für die Struktur der Responses API (`maskResponsesOutput` — deckt
  `output_text` und `output[].content[].text` ab) aus. Wenn eine Unkenntlichmachung erfolgt, ersetzt die
  geänderte Antwort das Original.

Die Schutzmaßnahme blockiert niemals; sie versieht Inhalte lediglich mit Anmerkungen (`meta.detections`,
`meta.redacted`) oder schreibt sie um.

### Prompt-Injection (`promptInjection.ts`)

Erkennt gegnerische Strukturen in von Benutzern bereitgestellten Inhalten und setzt die
konfigurierte Richtlinie durch. Das Verhalten wird durch Umgebungsvariablen und Konstruktoroptionen
gesteuert:

| Einstellung      | Umgebungsvariable                                                                                     | Standardwert | Auswirkung                                                                                                                                                                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiviert        | `INPUT_SANITIZER_ENABLED`                                                                             | `true`       | Bei `false` wird die Schutzmaßnahme sofort beendet.                                                                                                                                                                                                            |
| Modus            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`       | Injection-Richtlinie: `block`, `warn` oder `log`. (`redact` wird aus Gründen der Abwärtskompatibilität akzeptiert, entfernt aber **keinen** Injection-Text; das Umschreiben personenbezogener Daten in Anfragen wird durch `PII_REDACTION_ENABLED` gesteuert.) |
| Blockierschwelle | Option `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (Alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`       | Mindestschweregrad, der zum Blockieren erforderlich ist. Beim Standardwert dient „Medium“ nur der Beobachtung.                                                                                                                                                 |

**Moduspriorität** (`getMode`): `options.mode` des Aufrufers →
**DB-Feature-Flag-Überschreibung** für `INJECTION_GUARD_MODE` (Dashboard → Einstellungen →
Feature-Flags) → Umgebungsvariable `INJECTION_GUARD_MODE` → Umgebungsvariable `INPUT_SANITIZER_MODE` →
`warn`. Eine Dashboard-Überschreibung hat daher Vorrang vor den Umgebungsvariablen, sodass die
Feature-Flags-Benutzeroberfläche die laufende Schutzmaßnahme unmittelbar steuert (kein Neustart erforderlich). Der Datenbankzugriff ist ausfallsicher:
Wenn ein Fehler auftritt, greift die Schutzmaßnahme auf das umgebungsvariablenbasierte Verhalten zurück, und wenn keine
Überschreibung festgelegt ist, entspricht das Verhalten der rein umgebungsvariablenbasierten Auflösung.

Erkennungsquellen:

1. `sanitizeRequest()` aus `@/shared/utils/inputSanitizer` (gemeinsamer Detektorsatz,
   der an anderer Stelle in der Pipeline verwendet wird).
2. Integrierte `DEFAULT_GUARD_PATTERNS` (derzeit `system_override_inline` und
   `markdown_system_block`, beide mit dem Schweregrad `high`).
3. Optionale `customPatterns`, die über Konstruktoroptionen übergeben werden (Zeichenfolgen, reguläre Ausdrücke
   oder Datensätze vom Typ `{ name, pattern, severity }`).

Wenn `mode === "block"` ist **und** mindestens eine Erkennung den
Schweregrad-Schwellenwert erreicht, gibt `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }` zurück. In den Modi `warn`/`log` protokolliert die
Schutzmaßnahme den Vorfall, lässt den Aufruf jedoch zu. Die gemeinsam genutzte Hilfsfunktion
`evaluatePromptInjection()` wird ebenfalls exportiert, damit Aufrufer Prompts auswerten
können, ohne die Registry zu durchlaufen.

**Scanbegrenzung (v3.8.20):** Der Detektor untersucht nur die **ersten 16 KB** des
zusammengefügten Prompt-Texts — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 Byte) in
`src/shared/utils/inputSanitizer.ts`. Sowohl `detectInjection()` als auch
`evaluatePromptInjection()` führen vor der Musterschleife
`slice(0, MAX_INJECTION_SCAN_BYTES)` aus. Injektionsanweisungen befinden sich nahe
am Anfang einer Eingabe. Dadurch wird die Regex-CPU-/GC-Belastung bei Payloads
von mehreren Hundert KB begrenzt, ohne die Erkennungsleistung zu beeinträchtigen (vgl.
#3932, #4041).

### Maskierung von Zugangsdaten (`credentialMasker.ts`)

Wird in **beiden** Phasen ausgeführt, in der Standardkette zuletzt (Priorität `95`).
Schwärzt bekannte Muster für API-Schlüssel und geheime Token aus dem ausgehenden
Payload (Nachrichteninhalt, Argumente von Tool-Aufrufen, Tool-Ergebnisse) **und**
aus der Provider-Antwort, sodass in einen Prompt eingefügte Zugangsdaten (oder von
einem Tool-Ergebnis zurückgegebene Zugangsdaten) weder an den Upstream-Provider
noch zurück an den Client gelangen.

- **Nur per Opt-in**, entsprechend der Konvention für die Schwärzung
  personenbezogener Daten (angrenzend an Harte Regel #20): standardmäßig
  deaktiviert, sofern nicht `settings.credentialRedactionEnabled === true`
  **oder** `CREDENTIAL_REDACTION_ENABLED=true` gilt. Wenn diese Funktion
  deaktiviert ist, führt die Schutzmaßnahme keine Aktion aus — sie blockiert
  und verändert niemals Daten.
- `redactCredentials()` durchläuft die gesamte Payload-/Antwortstruktur
  (`walkValue()`, sicher gegen Prototype Pollution und mittels `WeakSet`
  zyklussicher) und ersetzt Treffer durch einen `[REDACTED:<type>]`-Platzhalter.
  Dabei werden nur die tatsächlich geänderten Zweige geklont.
- `CREDENTIAL_PATTERNS` deckt Schlüssel von LLM-Providern (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-Token (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), Zahlungsschlüssel (Stripe, Square),
  Cloud-Schlüssel (AWS-Zugriffsschlüssel, Twilio, SendGrid, Mailgun), private
  Schlüssel/JWTs, Verbindungszeichenfolgen mit Zugangsdaten
  (`mongodb://user:pass@...` usw.) sowie ein generisches Muster für die
  Header-Werte `Authorization`/`x-api-key`/`api-key`/`apikey` ab.
  Header-ähnliche Schlüssel (`authorization`, `x-api-key`, `api-key`,
  `apikey`) werden strukturell geschwärzt (nur der Wert, wobei Schema-Präfixe
  wie `Bearer `/`Basic ` erhalten bleiben), statt über den generischen
  Text-Regex.
- Die Schutzmaßnahme blockiert niemals; sie schreibt nur Daten um
  (`modifiedPayload` / `modifiedResponse`) und versieht sie mit Annotationen
  (`meta.credentialsRedacted`, `meta.count`).

Regressionsschutz: `tests/unit/credential-masker-guardrail.test.ts`.

## Basisvertrag (`base.ts`)

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
  block?: boolean; // true bricht die Kette vorzeitig ab
  message?: string; // wird beim Blockieren ausgegeben
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // wird von preCall zurückgegeben, um die Anfrage umzuschreiben
  modifiedResponse?: TValue; // wird von postCall zurückgegeben, um die Antwort umzuschreiben
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

Eine Schutzvorrichtung signalisiert „keine Änderung“, indem sie entweder `void`, `{}` oder
`{ block: false }` zurückgibt. Die Rückgabe eines `modifiedPayload`/`modifiedResponse` ersetzt
den Wert, der für nachgelagerte Schutzvorrichtungen durch die Kette fließt.
`signal?: AbortSignal` überträgt den Lebenszyklus des Aufrufers an die Schutzvorrichtungen. Der Abbruch einer Anfrage ist die bewusste Fail-Open-Ausnahme: Medienbrücken beenden ihre Arbeit und führen Aufräumarbeiten durch, ohne rohe Medien für ein Ziel wiederherzustellen, von dem bekannt ist, dass es diese nicht unterstützt.

## Registrierung (`registry.ts`)

Der Singleton `guardrailRegistry` stellt Folgendes bereit:

- `register(guardrail)` — fügt eine Schutzvorrichtung hinzu (oder ersetzt sie anhand ihres normalisierten Namens) und
  sortiert erneut nach aufsteigender `priority`.
- `clear()` / `list()` — administrative Hilfsfunktionen.
- `runPreCallHooks(payload, context)` — durchläuft aktive Schutzvorrichtungen, reicht die
  Nutzlast über `modifiedPayload` weiter und stoppt beim ersten `block: true`.
- `runPostCallHooks(response, context)` — derselbe Ablauf auf der Antwortseite.
- `resetGuardrailsForTests({ registerDefaults })` — löscht den Zustand und registriert optional
  die Standardwerte erneut, um eine saubere Testisolation zu gewährleisten.

Beide Ausführungsfunktionen geben `{ blocked, payload|response, results, guardrail?, message? }`
zurück, wobei `results` ein Array von `GuardrailExecutionResult`-Datensätzen ist, die
für jede Schutzvorrichtung die Felder `blocked`, `skipped`, `modified`, `error` und `meta`
enthalten, was für die Ablaufverfolgung nützlich ist.

### Schutzvorrichtungen pro Anfrage deaktivieren

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` erstellt eine
deduplizierte Liste der Namen von Schutzvorrichtungen, die für die aktuelle
Anfrage übersprungen werden sollen. Quellen (alle optional, alle zusammengeführt):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` im Anfragekörper (auf oberster Ebene)
- `metadata.disabledGuardrails` im Anfragekörper
- Header `x-omniroute-disabled-guardrails` (oder veraltet
  `x-disabled-guardrails`)

Werte können Zeichenfolgen-Arrays oder eine kommagetrennte Zeichenfolge sein; Namen werden
in kleingeschriebene Kebab-Case-Schreibweise normalisiert (`pii_masker` → `pii-masker`). Das Ergebnis
wird über `context.disabledGuardrails` an die Registrierung übergeben, die
übereinstimmende Schutzvorrichtungen überspringt (`skipped: true` in `results`).

## Ausführungsreihenfolge

Für jede Anfrage, die `src/sse/handlers/chat.ts` und
`open-sse/handlers/chatCore.ts` durchläuft:

1. `resolveDisabledGuardrails(...)` erstellt anhand von API-Schlüssel, Body
   und Headern die Liste der zu überspringenden Guardrails.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` führt Guardrails in
   aufsteigender Prioritätsreihenfolge aus:
   - Deaktivierte Guardrails werden als `skipped` erfasst.
   - `preCall` jedes Guardrails kann die Nutzdaten über `modifiedPayload`
     umschreiben.
   - Das erste `block: true` bricht die Kette vorzeitig ab, und der Handler
     gibt eine Guardrail-Ablehnungsantwort zurück.
3. Die (möglicherweise umgeschriebenen) Nutzdaten werden an das Combo-Routing
   und die Upstream-Weiterleitung übergeben.
4. Nachdem die Antwort zusammengestellt wurde, führt
   `guardrailRegistry.runPostCallHooks(...)` dieselbe Kette für die Antwort
   aus. `block: true` verwirft hier die Upstream-Antwort.

Guardrails, die eine Ausnahme auslösen, werden mit `error: <message>` erfasst
und über `logger.warn` protokolliert, die Kette wird jedoch fortgesetzt —
dies entspricht dem Fail-Open-Prinzip.

## Konfiguration

Von den integrierten Guardrails gelesene Umgebungsvariablen:

| Variable                              | Verwendet von               | Auswirkung                                                                                                            |
| ------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | Auf `false` setzen, um die Erkennung vollständig zu deaktivieren.                                                     |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | Injektionsrichtlinie: `warn`, `block` oder `log`. Der Legacy-Wert `redact` schreibt Injektionstext nicht um.          |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | Modus für den Injektions-Guard; zugleich ein DB-Feature-Flag, das die Umgebungsvariablen **überschreibt** (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | Mindestschweregrad, den `MODE=block` ablehnt: `high` (Standard), `medium` oder `low`.                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | Legacy-Alias für `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | Bei `true` werden personenbezogene Daten in Anfragen redigiert (unabhängig vom Injektionsmodus).                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nachgelagert) | Steuert das Maskierungsverhalten auf der Antwortseite.                                                                |

Die Modality-Bridge-Guardrails lesen die Laufzeitkonfiguration aus dem
DB-gestützten Einstellungsspeicher (`getSettings()`), nicht aus
Umgebungsvariablen. Die primären Schlüssel für Vision sind
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` und
`modalityBridgeCacheMaxEntries`. Die Legacy-Schlüssel
`visionBridge*` werden nur als dokumentierter Lese-Fallback für einen Zyklus
akzeptiert; Schreibvorgänge über das Dashboard verwenden die primären
Schlüssel. Standardwerte und der Fallback-Resolver befinden sich in
`src/shared/constants/modalityBridgeDefaults.ts`, während Legacy-Konstanten in
`src/shared/constants/visionBridgeDefaults.ts` beibehalten werden.

Audio verwendet `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` und `modalityBridgeAudioMaxClips` sowie die
gemeinsam genutzten `modalityBridgeCache*`-Einstellungen. Für Audio gibt es
keinen Legacy-Schlüssel-Fallback, da diese Schlüssel mit dem
Modality-Bridge-Schema eingeführt wurden.

Video verwendet `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` und
`modalityBridgeVideoTimeout` sowie die gemeinsam genutzten
`modalityBridgeCache*`-Einstellungen. Es ist standardmäßig deaktiviert, da
FFmpeg/ffprobe optionale betriebliche Abhängigkeiten sind und die
Frame-Beschriftung zusätzliche Latenz und Modellkosten verursacht.

## Benutzerdefinierte Guardrails

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

Schritte:

1. Erstellen Sie `src/lib/guardrails/myGuardrail.ts` als Erweiterung von `BaseGuardrail`.
2. Implementieren Sie `preCall` und/oder `postCall`.
3. Registrieren Sie die Guardrail entweder beim Import (über `registerDefaultGuardrails`) oder
   rufen Sie zur Laufzeit `guardrailRegistry.register(...)` auf — die Registry ersetzt
   jede vorhandene Guardrail mit demselben normalisierten Namen.
4. Fügen Sie Tests unter `tests/unit/` hinzu (vorhandene Beispiele:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tests

Verwenden Sie zwischen den Tests `resetGuardrailsForTests()`, um mit einem bekannten Zustand zu beginnen.
Übergeben Sie `{ registerDefaults: false }`, um mit einer leeren Registry zu beginnen und
nur die zu testenden Guardrails zu registrieren. Vision Bridge unterstützt Dependency
Injection (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge stellt entsprechende
Schnittstellen für Einstellungen, Fähigkeiten, STT-Modellauswahl, Anmeldedatenprüfungen
und Transkription bereit. Tests können daher beide Abläufe ohne Datenbank- oder
Netzwerkzugriff ausführen.

## Siehe auch

- `src/lib/guardrails/` — Implementierung
- `src/shared/utils/inputSanitizer.ts` — gemeinsamer Detektor, auf dem
  Prompt-Injection-Erkennung und PII-Maskierung basieren
- `src/shared/constants/visionBridgeDefaults.ts` — Standardwerte für Vision Bridge und
  Modellliste für erzwungenes Bridging
- `src/shared/constants/modalityBridgeDefaults.ts` — gemeinsame Laufzeitstandardwerte für Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — orthogonale Schicht (Circuit Breaker, Cooldowns)
- `docs/reference/ENVIRONMENT.md` — vollständige Referenz der Umgebungsvariablen

## Routenabdeckung des Injection-Guards und Red-Teaming (Phase 8 · Block D)

Der Injection-Guard (`createInjectionGuard` / `withInjectionGuard`) deckt alle Routen ab,
die Benutzer-Prompts akzeptieren. Er berücksichtigt `INJECTION_GUARD_MODE` (Standardwert `warn` = nur protokollieren;
`block` = gibt HTTP 400 `SECURITY_001` zurück).

| Typ              | Routen                                                                                                                                               | Standardmodus |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Text (vorhanden) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativ        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Daten            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Die Textextraktion (`extractMessageContents`) deckt `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ab.

**Red-Teaming (nächtlich, `nightly-llm-security.yml`):** promptfoo überprüft, dass jede Route
den OWASP-LLM-Korpus bei `INJECTION_GUARD_MODE=block` blockiert; garak führt Prüfungen aus (wird ohne Secret übersprungen).
`moderations` ist aus Konsistenzgründen enthalten — Betreiber können die Route im Blockierungsmodus über
`resolveDisabledGuardrails` ausnehmen.

Der nächtliche Workflow (`.github/workflows/nightly-llm-security.yml`, Cron + manueller
Start) umfasst zwei Jobs:

- **`promptfoo-guard` (blockierend)** — führt `promptfoo eval -c promptfooconfig.yaml`
  mit `INJECTION_GUARD_MODE=block` aus. Jeder adversariale Fall (z. B. „ignore all
  previous instructions…“, Jailbreaks im DAN-Stil) stellt sicher, dass die Antwort
  `error.code === "SECURITY_001"` enthält, d. h., dass die Guardrail die Anfrage tatsächlich abgelehnt hat.
- **`garak` (informativ)** — führt garak mit `--probes promptinject,dan,leakreplay`
  gegen eine lokale OmniRoute-Instanz (`http://localhost:20128/v1`) aus. Die Ausführung hängt von einem
  Provider-Secret (`PROMPTFOO_PROVIDER_KEY`) ab; ohne dieses wird sie ordnungsgemäß übersprungen und ist mit
  `|| true` versehen, sodass Ergebnisse gemeldet werden, ohne dass CI fehlschlägt.

Die Abdeckung des Guard-Helfers (`createInjectionGuard` / `withInjectionGuard`)
erstreckt sich über jede Prompt-verarbeitende `/v1`-Route; der Prompt-Text wird durch
`extractMessageContents()` in `src/shared/utils/inputSanitizer.ts` aus
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` extrahiert.
