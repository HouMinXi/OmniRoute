# Guardrails (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fonte fidedigna:** `src/lib/guardrails/`
> **Última atualização:** 2026-08-29 — v3.8.51 (a proveniência da transcrição do Video Bridge é declarada pelo chamador,
> ainda não é verificada pelo servidor — clarificado de acordo com #11661)

As guardrails aplicam transformações de segurança, políticas e conteúdo na fronteira
entre o OmniRoute e os fornecedores a montante. Cada guardrail pode inspecionar (e
opcionalmente rejeitar, transformar ou anotar) os payloads dos pedidos (`preCall`) e
as respostas a montante (`postCall`).

O sistema é **fail-open**: se uma guardrail lançar uma exceção durante a execução, o registo
regista o erro e prossegue para a guardrail seguinte, em vez de fazer o pedido
falhar. O bloqueio é uma decisão explícita (`block: true`), nunca um acidente.

## Mecanismos de proteção integrados

O registo carrega automaticamente seis mecanismos de proteção por ordem de prioridade durante a importação
(consulte `registry.ts` → `registerDefaultGuardrails()`):

| Prioridade | Nome                | Fase(s)        | Ficheiro              |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Os números de prioridade mais baixos são executados **primeiro**.

### Ponte de visão (`visionBridge.ts`) — Ponte de modalidade PR-1

Interceta pedidos que contêm imagens e que se destinam a **modelos sem capacidades de visão**, e
reencaminha o pedido completo para um modelo com capacidades de visão ou substitui as partes
de imagem por descrições textuais produzidas por um modelo de visão configurável antes
da chamada a montante. Isto permite que os fornecedores exclusivamente de texto processem
de forma transparente payloads multimodais.

Fluxo:

1. Ignorar se o modelo de destino já suportar visão (a menos que conste na
   lista de ponte forçada `isVisionBridgeForcedModel`).
2. Extrair as partes de imagem através de `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), que delega no **detetor de multimédia
   unificado** `detectMediaParts()` em `open-sse/utils/mediaParts.ts` — a
   única fonte de verdade partilhada com o filtro de compatibilidade de combinações.
   A extração está limitada por uma lista de permissões às partes de nível superior com os formatos
   que `replaceImageParts` consegue voltar a inserir (o contrato de extração↔substituição): OpenAI
   `image_url`, `source.type:"base64"` em base64 da Anthropic, URL da Anthropic
   `source.type:"url"` e `input_image` da Responses API. As correspondências aninhadas e
   os formatos que contêm apenas indicadores são material para o filtro de combinações e nunca são extraídos.
   Ignorar se não forem encontrados.
3. Resolver a configuração de execução através de `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): as novas chaves de definições
   `modalityBridge*` têm precedência; as chaves antigas `visionBridge*` permanecem como
   **fallback durante um ciclo** (janela de reversão). Ignorar antes de qualquer análise
   de multimédia quando a ponte estiver desativada.
4. O seletor de modo (`modalityBridgeVisionMode`, consulte a tabela abaixo) decide entre
   reencaminhar e descrever. O reencaminhamento devolve `modifiedPayload` apenas com o `model`
   trocado, além dos metadados `{ rerouted, fromModel, toModel, imagesKept }`.
5. Caminho de descrição: limitar as imagens a `maxImages`, compor o prompt com conhecimento da tarefa,
   consultar a cache de descrições, chamar o modelo de visão **em paralelo**
   (`Promise.allSettled`) e inserir partes de texto `[Image N]: <description>` nos
   respetivos lugares. Uma descrição falhada produz `null` e a parte de imagem original é
   **preservada** (#4012) — exceto no caminho de descrição de combinações quando todas
   as descrições falham, caso em que um serviço a montante confirmado como não tendo capacidades de visão recebe um
   stub `(unavailable — no vision-capable provider connected)` (#8430).
6. Devolver `modifiedPayload` + metadados (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Seletor de modo (`modalityBridgeVisionMode`)

| Modo       | Predefinição | Comportamento                                                                                                                                                                                                                                                                                                                                               |
| ---------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔            | Heurística antiga, inalterada (#6640/#7204): os modelos que não sejam de combinação/`auto/` são reencaminhados para o melhor modelo de visão, exceto se o modelo original já tiver credenciais utilizáveis (nesse caso, descreve); os destinos de combinação descrevem sempre.                                                                              |
| `describe` |              | Descrever sempre — o bloco de reencaminhamento é completamente ignorado; o modelo escolhido pelo utilizador responde sempre.                                                                                                                                                                                                                                |
| `reroute`  |              | Forçar o reencaminhamento: a proteção para manter o modelo com credenciais é ignorada. A proteção de credenciais do **destino** de reencaminhamento continua a aplicar-se — quando não existe um destino de visão utilizável, o pedido prossegue para a descrição, para que as imagens em bruto nunca cheguem a um backend exclusivamente de texto (#8430). |

Os modos forçados terminam antecipadamente **antes** de a heurística automática ser executada; o comportamento de `auto`
é idêntico, byte por byte, ao mecanismo de proteção anterior ao PR-1.

#### Âmbito da chave de API (`visionBridgeKeyScope.ts`)

Quando a chave de API do chamador restringe `allowedConnections`, pools de quotas
(`allowedQuotas`) ou modelos (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), a ponte apenas
seleciona modelos de reencaminhamento e descrição que a chave possa utilizar, em ligações que a chave possa
utilizar. Em seguida, a chamada de descrição passa sempre pelo ciclo interno da OmniRoute com
o cabeçalho `x-omniroute-self-loop-key-id`, para que o pedido de chat recetor
volte a aplicar a política de ligações e modelos dessa chave. `enforceApiKeyPolicy()`
respeita esse cabeçalho apenas em conjunto com o bearer do ciclo interno, pelo que apenas
pode restringir o acesso, e um id que não seja resolvido é rejeitado.

Se nenhum modelo de visão for permitido para a chave, o caminho de descrição não intervém e
o pedido segue inalterado, com o mesmo comportamento de continuação em caso de falha de um
mecanismo de proteção desativado (metadados `{ skipped: true, reason: "no_permitted_vision_model" }`).
Os pedidos sem chave e as chaves sem estas restrições comportam-se exatamente como
antes.

#### Prompt de descrição com conhecimento da tarefa (`modalityBridgeVisionTaskAware`)

Predefinição: **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) acrescenta
o texto da **última mensagem do utilizador** (truncado para 500 caracteres) ao
prompt base de descrição, orientando a descrição para aquilo que o utilizador
realmente pediu (padrão codex-vision-proxy) e pedindo ao modelo de visão que
transcreva o texto visível. Com a opção desativada — ou sem texto do utilizador
— o prompt base é utilizado sem alterações.

O pedido compatível com OpenAI do ciclo interno de descrição
(`callVisionModelSingle()` em `visionBridgeHelpers.ts`) solicita sempre
`image_url.detail: "high"` — incondicionalmente, para todos os
chamadores/fornecedores, sem depender de qualquer sinal do cliente. A amostragem
de baixo detalhe degrada a precisão do OCR precisamente na tarefa de transcrição
de texto solicitada por este prompt, pelo que a própria chamada de descrição
pede sempre um nível de detalhe elevado, independentemente do nível de detalhe
utilizado pelo pedido original recebido. Isto afeta apenas o corpo do pedido
interno de descrição; não altera a forma como o OmniRoute encaminha o
`image_url.detail` do próprio chamador no pedido principal — essa predefinição é
aplicada separadamente, e apenas para clientes OpenCode detetados, em
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). O ramo do
ciclo interno de descrição no formato de transmissão do Anthropic não tem
qualquer campo `detail` e não é afetado por nenhuma das predefinições.

#### Limite da saída de descrição (`modalityBridgeVisionMaxChars`)

| Chave                          | Predefinição | Intervalo        |
| ------------------------------ | ------------ | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`          | `0` ou 100–50000 |

`0` (predefinição) significa **sem limite** — a descrição devolvida por
`callVisionModel()` é transmitida sem alterações, preservando o comportamento
existente. Qualquer valor no intervalo 100–50000 trunca a descrição com um
sufixo `…` antes de esta ser inserida novamente como
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` em
`src/lib/guardrails/visionBridge.ts`). Aumente este valor para tarefas de OCR
com muitos detalhes, nas quais o modelo a jusante necessita da transcrição
completa; reduza-o para limitar a utilização de tokens em modelos de visão
verbosos. O campo do painel encontra-se no painel Avançado do separador Visão
(`modality-bridge-max-chars` em `ModalityBridgeVisionTab.tsx`) e ajusta qualquer
valor entre 1 e 99 para o mínimo de 100, mantendo intacto um `0` explícito —
`0` é, por direito próprio, um valor Zod válido
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), e não apenas
a predefinição de «não definido».

#### Cache de descrição (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL em memória para resultados de descrição, partilhada por todo o
processo. Chave = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
com enquadramento por prefixo de comprimento (sem colisões entre limites de
campos). O componente do modelo é o modelo de ponte **configurado**, e não o
modelo que efetivamente respondeu — `callVisionModel` pode recorrer internamente
a um modelo alternativo, e criar chaves por tentativa fragmentaria a cache. As
descrições falhadas nunca são armazenadas em cache. Definições:

| Chave                           | Predefinição | Intervalo |
| ------------------------------- | ------------ | --------- |
| `modalityBridgeCacheEnabled`    | `true`       | —         |
| `modalityBridgeCacheTtlMinutes` | `60`         | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`        | 10–5000   |

#### Normalização de imagens remotas (descrição em ciclo interno/obtenção em base64)

Quando a ponte obtém por si própria uma imagem **remota** — a chamada interna de
descrição do Anthropic e a conversão para base64 no formato de transmissão do
Claude (`ensureBase64ImagesForClaudeWire`), ambas através de
`fetchRemoteImageAsDataUri()` em `visionBridgeHelpers.ts` — o URI de dados
resultante é processado por `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) antes de ser incorporado no pedido ao
modelo de visão. As imagens demasiado grandes são reduzidas para uma
**aresta longa de 2048px** (correspondendo ao limite de redimensionamento que a
OpenAI/o Anthropic já aplicam do lado do servidor), o que reduz os bytes de
carregamento/a latência sem alterar aquilo que o modelo de visão vê. O
redimensionamento utiliza `sharp`, carregado através de importação dinâmica:
numa plataforma em que o respetivo binário nativo não consiga ser carregado,
`normalizeDataUri()` **nunca lança uma exceção** — recorre à passagem direta dos
bytes originais, pelo que o caminho de descrição/conversão para base64 continua
sempre a funcionar. Os bytes que não sejam de uma imagem (uma obtenção que não
tenha devolvido uma imagem descodificável) também são transmitidos sem
alterações. Esta normalização limita-se às imagens que a ponte obtém para a sua
própria chamada interna — nunca é aplicada à carga útil bruta do chamador
transmitida diretamente, em conformidade com o princípio de alteração apenas
mediante ativação (Regra Rígida n.º 20).

#### Esquema de definições + migração

As novas chaves `modalityBridge*` são validadas pelo Zod em
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, o trio
`modalityBridgeCache*` e o grupo `modalityBridgeAudio*` utilizado pela Ponte de
Áudio. A migração `141_modality_bridge_settings.sql` copia os valores
`visionBridge*` legados existentes para as novas chaves correspondentes
(idempotente, nunca substitui um valor `modalityBridge*` definido pelo
operador); as chaves legadas continuam a ser aceites como alternativa de
leitura durante um ciclo de lançamento.

#### Cabeçalho de transparência + estatísticas

As respostas transformadas pela descrição incluem
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(construído por `buildModalityBridgeHeader()` em
`modalityBridge/bridgeStats.ts`, aplicado por
`withModalityBridgeHeader()` em `src/sse/handlers/chatHelpers.ts`). Os pedidos
reencaminhados **não** recebem qualquer cabeçalho — a carga útil não foi
alterada e a troca de modelo já é visível no campo `model` do corpo da resposta.

`GET /api/modality-bridge/stats` (autenticação de gestão, o mesmo nível que
`GET /api/settings`) devolve os contadores em memória por modalidade
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` para `vision`, `audio` e
`video`. `averageLatencyMs` utiliza `latencySamples`, e não todas as tentativas,
como denominador; uma operação sem medição de tempo não cria artificialmente uma
amostra de zero milissegundos. `bridged` mantém-se como o alias retrocompatível
para conversões bem-sucedidas; as tentativas falhadas não o incrementam.
Por conceção, os contadores são repostos quando o processo é reiniciado
(telemetria, não contabilização).

#### Configuração do painel

A página dedicada do painel é
`/dashboard/settings/modality-bridge`. Os respetivos separadores `Vision`, `Audio`
e `Video`, acessíveis por URL, preservam os parâmetros de consulta ao alterar o
valor de `tab`.
O separador Vision disponibiliza ativação, modo, seleção de modelo (incluindo a
predefinição automática), instruções sensíveis à tarefa, limites avançados de
tempo limite/imagem/comprimento da descrição/cache, contadores de execução e um
pedido de exemplo protegido. O separador Audio também está funcional:
disponibiliza ativação, um seletor de modelos apenas de STT com Auto, limites de
tempo e duração máxima dos clipes, contadores de áudio e um teste de exemplo
`input_audio`. O separador Video está funcional: comunica o estado de execução
do FFmpeg/ffprobe — um de quatro estados explícitos da IU (`unknown` enquanto a
sondagem está em curso ou não pôde ser concluída, `restricted` num anfitrião do
painel que não seja de loopback, caso em que a sondagem é ignorada no lado do
cliente, `unavailable` depois de a sondagem confirmar a ausência, ou `available`
com as versões do FFmpeg/ffprobe) —, persiste os limites de ativação/modelo/fotogramas/vídeo/tempo
limite, filtra o seletor de modelos para apresentar modelos com capacidade de
visão e disponibiliza contadores de vídeo.

O antigo cartão Vision Bridge nas definições de IA é uma ligação de
compatibilidade para a nova página; já não mantém uma segunda cópia do
formulário. Media Providers também liga os fluxos de trabalho Image-to-Text e
Speech-to-Text aos separadores correspondentes do Modality Bridge, sem remover
o playground Speech-to-Text existente.

**Desvio da admissão para ciclos internos:** quando a chamada de descrição é
encaminhada através do ciclo interno `/v1` do próprio OmniRoute (modelo de
fornecedor não padrão), o subpedido envia
`x-omniroute-admission-bypass: internal` e é autenticado com a credencial
resolvida do ciclo interno — o sentinela local `sk_omniroute` no modo local, ou a
chave de ambiente `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` configurada pelo
operador (#1350), para que as implementações com `REQUIRE_API_KEY=true` ainda
possam executar a chamada de descrição. O desvio só é aceite para essas
credenciais exatas, pelo que os clientes externos não podem utilizar o
cabeçalho para ignorar a admissão.

As predefinições legadas encontram-se em
`src/shared/constants/visionBridgeDefaults.ts`; as novas predefinições de
modo/sensibilidade à tarefa/cache e o resolvedor de definições encontram-se em
`src/shared/constants/modalityBridgeDefaults.ts`. O mecanismo de proteção
disponibiliza uma opção de construtor `deps`, para que os testes possam injetar
implementações falsas de `getSettings` e `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Interceta pedidos de chat que contenham áudio antes de estes chegarem a um
destino que não seja reconhecido como capaz de aceitar entrada de áudio. Nunca
reencaminha o pedido de chat: as partes de áudio são transcritas através do
endpoint multipart compatível com OpenAI existente, e o modelo de chat
escolhido continua a processar transcrições de texto.

Fluxo:

1. Resolve `supportsAudio` através de `getResolvedModelCapabilities()`. Os
   metadados explícitos do registo de fornecedores têm precedência, seguidos
   dos metadados estáticos do modelo e, depois, de `modalities_input`
   sincronizado. Uma lista de entradas declarada sem `audio` resulta em
   `false`; a ausência de indícios sobre a capacidade mantém o valor `null`.
   Tanto `false` como `null` ativam a ponte conservadora, enquanto `true` a
   ignora.
2. Resolve as definições `modalityBridgeAudio*` e extrai partes de áudio de nível
   superior que podem ser substituídas em todas as mensagens, através do
   detetor partilhado `detectMediaParts()`. Os formatos de transmissão
   suportados são `input_audio` e `audio_url` da OpenAI, bem como
   `source.media_type: "audio/*"`. O áudio aninhado é detetado para efeitos de
   encaminhamento, mas não é removido pelo processo de substituição. O trabalho
   é limitado por `modalityBridgeAudioMaxClips`; as partes posteriores
   permanecem inalteradas.
3. Respeita um `provider/model` configurado ou permite que
   `selectAudioBridgeModel()` percorra `AUDIO_TRANSCRIPTION_PROVIDERS` pela ordem
   estável do catálogo e selecione o primeiro modelo com uma credencial ativa e
   utilizável do fornecedor.
4. `callAudioTranscription()` converte áudio base64/URI de dados num `file`
   multipart ou transfere um `audio_url` remoto através do mecanismo de proteção
   de saída apenas para destinos públicos, com fixação de DNS e um limite de
   25 MB. Em seguida, envia por POST o ficheiro e o modelo selecionado para o
   ciclo interno local `/v1/audio/transcriptions`, autenticado com
   `resolveSelfLoopBearer()`. A rota de transcrição existente efetua a pesquisa
   normal de credenciais, a gestão de períodos de espera/limites de taxa e o
   envio para o fornecedor.
5. As chamadas bem-sucedidas substituem as respetivas partes por
   `[Audio N]: <transcript>`. As chamadas são executadas com
   `Promise.allSettled`: uma falha individual preserva a parte de áudio original
   correspondente (contrato #4012). Se todas as chamadas falharem e estiver
   comprovado que o destino tem `supportsAudio === false`, as partes passam a
   ser `[Audio N]: (unavailable — no STT provider connected)` (contrato #8430).
   Para um destino desconhecido (`null`), um resultado em que todas as chamadas
   falharam permanece inalterado. Um destino comprovadamente apenas de texto,
   sem uma credencial STT utilizável, recebe o mesmo marcador explícito sem
   efetuar uma chamada de rede.

As transcrições bem-sucedidas utilizam a cache LRU/TTL do Modality Bridge
partilhada por todo o processo. A chave combina a referência de áudio, o rótulo
estável da operação `audio-transcription` e o modelo STT selecionado; as falhas
nunca são armazenadas em cache. As tentativas de áudio atualizam os contadores
partilhados `bridged`, `cacheHits`, `failures` e `lastUsedAt`.
As respostas transformadas incluem
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; os pedidos
inalterados não recebem um segmento do Audio Bridge.

As definições de execução são armazenadas na base de dados e validadas pelo Zod:

| Chave                         | Predefinição | Intervalo      |
| ----------------------------- | ------------ | -------------- |
| `modalityBridgeAudioEnabled`  | `true`       | —              |
| `modalityBridgeAudioModel`    | `""`         | Auto ou ID STT |
| `modalityBridgeAudioTimeout`  | `60000`      | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`          | 1–10           |

A cache partilhada continua a ser controlada por `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` e `modalityBridgeCacheMaxEntries`.

### Ponte de vídeo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Interceta partes de vídeo de nível superior em `messages` das Chat Completions e em
`input` da API Responses antes de ser chamado um destino sem suporte nativo de
vídeo conhecido. Os formatos suportados são `input_video`, `video_url`,
`video_source`, URLs HTTPS e URIs de dados `data:video/*;base64,...`. Nomes de
ficheiros simples em texto não são tratados como vídeo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) é responsável pela travessia
do pedido, pela verificação de capacidades/políticas, pela agregação por pedido
e pela carga útil da resposta. O trabalho por vídeo — aquisição, cache do
resultado completo, descrição de uma sequência de fotogramas (que combina
qualquer transcrição de áudio declarada pelo chamador) e
métricas/cancelamento/limpeza por tentativa — está encapsulado em
`processVideoPart`, em `videoBridgePipeline.ts`, chamado uma vez por cada parte
de vídeo dentro do ciclo de `preCall`. Esse módulo também define os limites
explícitos das portas `VideoMediaBrokerPort` (aquisição de bytes e extração de
fotogramas amostrados), `VideoAudioTranscriptionPort` (combinação de uma
transcrição de áudio declarada pelo chamador com as legendas dos fotogramas
amostrados) e `VideoDrilldownPort` (o limite de persistência da análise
detalhada de fotogramas; ainda não está ligado a `processVideoPart` — atualmente,
apenas a rota separada `/api/modality-bridge/video/drilldown` escreve entradas
de análise detalhada).

O caminho público de pedidos `/v1` nunca importa nem invoca um subprocesso. Os
vídeos remotos são transferidos com um limite de 50 MiB; os vídeos base64
incorporados têm um limite conservador de 36 MiB descodificados por vídeo, para
que o envelope do modelo/mensagens/enquadramento possa permanecer dentro do
limite público de admissão de pedidos JSON de 50 MiB. O comprimento incorporado
e as estimativas do tamanho descodificado são verificados antes da alocação. É
obrigatório utilizar HTTPS no URL remoto inicial e em todos os
redirecionamentos, recorrendo à proteção de saída existente, exclusiva para
destinos públicos, com fixação de DNS. Em seguida, os bytes atravessam o limite
exato do mediador interno `POST /api/modality-bridge/video/extract`. Essa rota é
simultaneamente `LOCAL_ONLY` e `SPAWN_CAPABLE`, aceita apenas um pedido de
loopback fidedigno, autenticado por processo, e nunca aceita um URL, caminho do
sistema de ficheiros, executável ou lista de argumentos. O pipeline de tamanho
do corpo da API e o leitor incremental do corpo do processador aplicam,
independentemente, um limite de entrada de 50 MiB no mediador. A respetiva fila
limitada executa uma extração de cada vez, permite quatro tarefas pendentes e
limita os dados de entrada pendentes a 100 MiB.

No interior do mediador, `ffprobe` lê um ficheiro local privado; a lista fixa de
formatos permitidos exclui formatos de listas de reprodução e manifestos. Para
os contentores permitidos da família MOV, as referências externas a dados MOV
permanecem desativadas por predefinição, e o comando fixo não as ativa. Tanto
`ffprobe` como `ffmpeg` utilizam a lista de protocolos permitidos limitada a
`file`, uma thread, matrizes fixas de argumentos, sem shell e com os executáveis
resolvidos a partir de `PATH`. Os fluxos de imagens de capa anexadas não são
candidatos reproduzíveis. Todos os fluxos reproduzíveis têm de cumprir os
limites, sendo dada preferência a um fluxo predefinido explícito antes da
alternativa determinística com o índice mais baixo. Os vídeos estão limitados a
600 segundos, 8 192 píxeis por dimensão e 33 554 432 píxeis de origem. O FFmpeg
amostra entre 1 e 16 fotogramas JPEG nos pontos médios, reduz a aresta mais longa
para, no máximo, 1 024 píxeis sem ampliar entradas mais pequenas e nunca recebe
um URL. A amostragem é `uniform` por predefinição. As políticas opcionais
`scene_aware` e `segment_aware` experimental efetuam uma passagem fixa adicional
do FFmpeg sobre o fluxo local já validado, selecionam marcas temporais de cenas
`showinfo` limitadas e, de forma determinística, recorrem aos mesmos pontos
médios uniformes em caso de falha do detetor, tempo limite, saída malformada ou
um conjunto de candidatos vazio. O modo com reconhecimento de segmentos atribui
amostras de pontos médios proporcionalmente aos intervalos de cenas validados;
as provas com reconhecimento de segmentos e o comportamento de contingência são
descritos abaixo. O limite rígido de 16 fotogramas é aplicado após a seleção em
todas as políticas. Quando um pedido com reconhecimento de cenas tem um
orçamento de apenas um fotograma, utiliza o ponto médio uniforme do vídeo
completo ativo ou da janela de foco e comunica `policyEffective: uniform`: um
único fotograma de cena selecionado não consegue preservar ambas as
extremidades temporais. Opcionalmente, um chamador pode fornecer uma janela de
foco finita (`start`/`end` em segundos); os limites são restringidos à duração
do conteúdo multimédia, as janelas invertidas ou não finitas são rejeitadas e
todas as políticas de amostragem são executadas apenas dentro do intervalo
normalizado. A janela resultante é incluída nos metadados de amostragem e no
prefixo não fidedigno da descrição, para que os modelos a jusante consigam
distinguir um excerto focado da cronologia completa.

O foco semântico das legendas é uma definição separada e explícita. O modo de
análise `full` predefinido preserva a instrução de fotogramas existente e nunca
encaminha o texto do pedido para o modelo de legendagem. No modo `focused`, a
ponte lê apenas o `text`/`input_text` não vazio mais recente, criado pelo
utilizador, no mesmo contentor de Chat ou Responses, normaliza-o para NFC,
agrega caracteres de controlo e espaços em branco e limita-o a 500 pontos de
código Unicode. Um resultado vazio recorre à instrução `full` exata. Uma
sugestão utilizável é serializada como JSON num bloco dedicado de contexto de
utilizador não fidedigno e só pode dar prioridade a detalhes observáveis; não
pode sobrepor-se ao aviso separado contra o seguimento de instruções visíveis
ou audíveis no conteúdo multimédia. O foco textual nunca infere `start`/`end`
nem altera o amostrador temporal.

#### FU-07 provas estruturais de segmentos

`segment_aware` utiliza uma única passagem limitada de pré-análise sobre o fluxo
de vídeo local já validado. A cadeia fixa de filtros começa por ajustar a escala
para, no máximo, 320 píxeis de largura, deteta mudanças de cena e intervalos
congelados e, em seguida, recolhe amostras a 1 fotograma por segundo para avaliar
a desfocagem, a luminância média e a informação espacial/temporal. A passagem
está limitada a 600 amostras estruturais, uma thread de FFmpeg/filtro, às mesmas
listas de permissões de contentores e do protocolo exclusivo `file`, a um limite
de 1 MiB para a saída do processo e a, no máximo, 30 segundos dentro do
cancelamento/prazo partilhado do broker. Nunca aceita um comando, filtro,
caminho ou URL do pedido.

Os valores estruturais constituem evidência de amostragem determinística, não
uma compreensão semântica do vídeo. Não inferem sujeitos, ações, legendas, fala
ou a intenção do utilizador. Os limites de cenas e de congelamentos formam
segmentos; a cobertura de congelamento, a desfocagem, a exposição, o detalhe
espacial e a alteração temporal apenas influenciam a forma como é distribuído
o orçamento existente de 1–16 fotogramas. Um segmento totalmente congelado é
limitado a um fotograma, enquanto os segmentos não congelados competem pelo
orçamento restante. Quando o número de limites excede o número de fotogramas,
é mantida uma cobertura uniforme da linha temporal, para que cortes rápidos no
início não possam ocultar um segmento final longo. Os limites de cena que se
encontrem dentro da resolução de análise de 1 segundo de um limite de
congelamento são agregados.

Filtros em falta, evidência malformada/vazia, um erro do detetor ou o tempo
limite da pré-análise limitada resultam num modo permissivo que aplica a política
exata de pontos médios uniformes. Um cancelamento pelo chamador ou o prazo do
broker não resultam num modo permissivo: terminam o subprocesso em execução,
impedem a extração posterior de fotogramas e a árvore temporária privada é
removida em `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` gera fixtures determinísticas reais do
FFmpeg para as poupanças de chamadas de legendagem após a desduplicação, a
distribuição do orçamento em situações de movimento intenso, a evidência de
desfocagem/exposição/SI-TI, cortes rápidos com uma secção final longa e falsos
positivos provocados por desvanecimentos graduais. Regista o tempo decorrido da
pré-análise e, quando `/usr/bin/time` está disponível, a CPU do processo filho
e o pico de RSS. As respetivas verificações de qualidade são apenas oráculos
estruturais. A qualidade real do modelo de legendagem permanece em `HOLD`,
porque este mecanismo de testes não dispõe de um endpoint autorizado nem de um
avaliador congelado. As poupanças monetárias também permanecem em `HOLD`, exceto
se `--caption-cost-per-call-usd` fornecer uma estimativa positiva explícita do
custo por chamada; o script nunca inventa nenhum dos resultados.

Cada fotograma está limitado a 4 MiB, o conjunto de todos os fotogramas em bruto
a 23 MiB e a resposta serializada do broker a 32 MiB. Um diretório temporário
privado é removido em `finally`. O OmniRoute não inclui o FFmpeg e não aceita
um caminho de executável personalizado. Antes da legendagem, a ponte aplica uma
passagem conservadora de desduplicação visual: cada JPEG é reduzido a um buffer
de 16×16 em escala de cinzentos e comparado apenas com o último fotograma
mantido. Para um orçamento de legendagem solicitado superior a um fotograma, a
extração fornece um conjunto limitado de candidatos de até duas vezes esse
orçamento e nunca superior a 16 fotogramas. O limite solicitado é aplicado
apenas após a desduplicação, sendo o primeiro e o último candidatos selecionados
preservados durante a redução final quando o orçamento é de, pelo menos, dois.
A política com versão
`grayscale-16x16-mean-cells-v2` utiliza o maior valor entre a diferença média de
luminância e a proporção de células da miniatura cuja diferença normalizada é,
pelo menos, 0,05. O limiar de duplicação é a constante 0,04, escolhida para
garantir previsibilidade em vez de ser disponibilizada como uma definição de
tempo de execução. Este sinal secundário de alto contraste preserva pequenos
movimentos e alterações em texto visível que uma comparação baseada apenas na
média pode ocultar. Os erros do comparador ou do descodificador resultam num
modo permissivo e mantêm a cobertura. Os metadados de saída distinguem os
candidatos extraídos, os fotogramas utilizados com êxito e os duplicados visuais
descartados.

Uma parte de vídeo explicitamente assinalada pode solicitar uma folha de
contactos com marcas temporais. A ponte cria uma grelha JPEG com, no máximo, 4
colunas e 16 fotogramas. Cada célula de 512 píxeis incorpora a marca temporal da
origem numa faixa inferior de alto contraste, enquanto as mesmas marcas
temporais permanecem nos metadados textuais para associação e auditoria a
jusante. O JPEG completo continua limitado a 32 MiB. Se `sharp` não conseguir
descodificar ou compor a grelha, a ponte recorre aos fotogramas JPEG individuais;
um cancelamento pelo cliente continua a ser propagado durante a operação da
folha.

A evidência para promoção é deliberadamente separada do microbenchmark de
composição sintética. `scripts/perf/video-bridge-contact-sheet-eval.ts` define
um mecanismo de testes A/B com esquema versionado para modelos de visão reais
compatíveis com a OpenAI. Mede os tokens comunicados pelo fornecedor, a latência
total de extremo a extremo (incluindo a composição da folha), o número de
chamadas ao modelo e a retenção dos factos definidos pelo manifesto. As respostas
em bruto do modelo não são escritas no relatório; apenas são mantidos os resumos
SHA-256 e os IDs dos factos correspondentes. O mecanismo de testes não efetua
qualquer chamada de rede ou a um modelo pago, exceto se `--execute-real` for
fornecido e `--model`, `OMNIROUTE_BASE_URL` e `OMNIROUTE_API_KEY` estiverem
configurados. Sem essa execução real explícita, o respetivo veredito legível por
máquina permanece em `HOLD`; as medições sintéticas do payload/número de chamadas
não constituem, por si só, evidência para promoção.

Os chamadores podem anexar um array opcional `transcript.cues` a uma parte de
vídeo suportada quando já dispõem de texto alinhado. Cada indicação deve conter
`text`, um intervalo finito `start`/`end` dentro da duração detetada e um `source`
incluído na lista de permissões (`client`, `embedded` ou `audio-bridge`);
`confidence` tem o valor predefinido `1` e deve permanecer entre `0` e `1`. As
indicações exatamente duplicadas são agregadas. O OmniRoute nunca inicia uma
transcrição a partir destes metadados: as indicações validadas são copiadas para
o resultado descrito com a origem, a confiança e o intervalo, e são apresentadas
como observações não fidedignas juntamente com as legendas dos fotogramas. Texto
inválido, fora do intervalo ou sem proveniência é rejeitado, em vez de ser
misturado no fluxo de legendas. Ambos os canais de transcrição do corpo do
pedido normalizam a proveniência fornecida para `client`, incluindo etiquetas
`embedded` ou `audio-bridge` declaradas pelo próprio remetente. Apenas um
adaptador controlado pelo servidor pode atribuir essas etiquetas fidedignas
através do argumento exclusivo de código `trustedSource`; um campo JSON do
pedido não consegue chegar a esse argumento. O texto da transcrição continua
a ser conteúdo não fidedigno derivado dos suportes multimédia,
independentemente da respetiva proveniência, e nunca deve determinar a
autorização.

Um chamador avançado pode fornecer uma faixa `audioTranscript` para o mesmo vídeo;
esta é tratada como texto fornecido pelo cliente, e não como prova de transcrição pelo servidor.
O ponto de fusão executa as observações visuais e de áudio sob
um único prazo e sinal de cancelamento, ordena-as numa linha temporal comum, agrega
duplicados exatos e comunica um resultado parcial quando apenas um dos lados é bem-sucedido.
Um `audioTranscript` inválido é degradado para esse resultado parcial — a descrição
visual é mantida e o ramo de áudio regista um código de falha sanitizado —
em vez de provocar a falha de todo o vídeo. A disponibilidade por ramo, o indicador parcial
e os códigos de falha sanitizados são preservados no resultado descrito, nos
metadados de salvaguarda (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), nos metadados da cache de resultados e nos contadores
de fusão da ponte. O caminho predefinido da Video Bridge não invoca conversão de voz em texto
nem transfere uma segunda cópia dos conteúdos multimédia; sem essa faixa explícita, permanece
apenas de vídeo.

**Retenção de transcrições (#12150 P1).** Isto aplica-se automaticamente sempre que a
Video Bridge (que é, por sua vez, opcional) renderiza uma indicação de transcrição — não existe
um indicador de retenção separado. Quando um pedido renderiza qualquer indicação de transcrição
(um `transcript` declarado pelo chamador ou um `audioTranscript` combinado), a salvaguarda marca-o como
`videoBridgeObserved` e produz uma versão oculta e expurgada da descrição do vídeo —
uma renderização idêntica em que o corpo de texto livre de cada indicação é substituído por
`[redacted-video-transcript]`, criada através da substituição do campo estruturado da indicação
antes de a cadeia ser composta (nunca através da análise do texto convertido numa estrutura plana, para que nenhum
conteúdo da indicação — malicioso ou normal, incluindo corpos que contenham `]`, como
`[inaudible]`/`[music]` — possa sobreviver). O corpo do pedido do registo de chamadas persistido substitui
cada parte de texto derivada do vídeo por essa versão oculta expurgada, através da correspondência pela
igualdade do conteúdo; a âncora `fullText` é relida a partir da carga útil finalizada da salvaguarda
anterior à chamada, para que a correspondência continue a ser bem-sucedida após salvaguardas posteriores
da cadeia (os mascaradores de PII e credenciais, prioridades 10/95) reescreverem o texto da descrição no local
e após a injeção do pedido de sistema, da transferência e da memória reformular a matriz de mensagens. O
corpo enviado a montante para o modelo permanece inalterado. Um pedido observado também não preenche
qualquer Memory duradoura (a extração derivada tanto do pedido como da resposta é ignorada),
pelo que a própria resposta do modelo não pode reproduzir texto da transcrição na Memory.

**Campos de vídeo em bruto (#12430).** Quando a ponte está ativada e o suporte nativo de vídeo é desconhecido ou inexistente, os campos `transcript`/`audioTranscript` definidos também ativam `videoBridgeObserved`, mesmo após uma falha de descrição ou um limite `maxVideos`. Os valores `null` e as cadeias vazias contam; os campos ausentes e os metadados que não sejam de vídeo não contam. As cópias retidas expurgam estes campos ou omitem o pedido, e as caches/Memory são ignoradas.

Nesses caminhos de contingência, as indicações válidas do chamador tornam-se partes
`text`/`input_text` suportadas, em vez de campos não normalizados do fornecedor. Ambas as faixas
fornecidas no pedido permanecem observações `client` não fidedignas, com um aviso explícito de que o vídeo
não foi descrito e de que os carimbos de data/hora não foram verificados em relação aos conteúdos multimédia. Os limites
existentes de 256 indicações/64 KiB no total e por indicação aplicam-se conjuntamente às duas faixas;
os carimbos de data/hora têm de respeitar o limite máximo de 600 segundos do intermediário e qualquer janela de
foco fornecida. As faixas inválidas são descartadas e não são reencaminhadas como texto arbitrário; uma faixa
válida associada ainda pode ser utilizada, salvo se o orçamento combinado for excedido. Os campos nulos/vazios
não adicionam texto. Este mecanismo de contingência não adiciona qualquer obtenção de conteúdos multimédia ou transcrição.
Os campos de extensão da transcrição são removidos do contentor de vídeo de contingência e dos respetivos
objetos `video_url`/`source`. A lista de permissões do protocolo OpenAI permanece restrita; os contentores de vídeo
com suporte nativo desconhecido continuam disponíveis e os destinos conhecidos como sendo apenas de texto mantêm marcadores seguros.
As versões ocultas com expurgo estruturado protegem o texto da transcrição acrescentado, enquanto o
pedido original pertencente ao chamador permanece inalterado. Os destinos com suporte nativo e as
pontes desativadas mantêm o comportamento de omissão existente.

As cópias adicionais retidas utilizam o mesmo sinal de pedido observado. O instantâneo em bruto
do pedido do cliente anterior à salvaguarda, o pedido pendente em memória e o registo antecipado
de pedidos rejeitados substituem estruturalmente os campos de transcrição nas partes de vídeo;
os pedidos em formato de cadeia sintetizados pelas fases do pipeline e pela transferência de contexto são expurgados
no destino do corpo de pedido persistido. O marcador `video_content_removed` persistido
faz com que a continuação de `previous_response_id` falhe de forma fechada, em vez de reconstruir
texto que foi descartado intencionalmente. Se um pedido observado perder a respetiva
versão oculta expurgada por parte antes do registo, ou se até mesmo uma de várias versões ocultas de vídeo
não corresponder após mutações posteriores do pedido, o corpo do pedido retido é
totalmente omitido, em vez de reter uma transcrição apenas parcialmente expurgada.

Num pedido observado, uma resposta do modelo pode citar qualquer parte da
transcrição sem um limite de indicação estruturado. Por isso, o respetivo `responseBody`
do registo de chamadas persistido é substituído por um marcador de omissão; o artefacto detalhado
do pipeline (que pode incluir corpos do fornecedor/cliente a montante e fragmentos da transmissão)
não é retido. As caches semântica, de idempotência e de repetição do raciocínio
ignoram as leituras e escritas desse pedido. O pedido ao fornecedor e a resposta
visível para o cliente permanecem inalterados. Os bytes de manutenção de ligação iniciais são esvaziados
do buffer temporário quando o artefacto detalhado é omitido. O aviso de EventStream
malformado do Kiro comunica apenas a contagem de bytes da carga útil, nunca o respetivo conteúdo nem o erro
em bruto do analisador JSON.
Isto não alega que todos os diagnósticos não relacionados de fornecedores/plugins tenham sido
auditados; a análise mais abrangente dos destinos de retenção é acompanhada em #11658.

O ciclo de vida interno de `/api/modality-bridge/video/drilldown` é um substrato de cache separado,
com autenticação por token e acessível por loopback. Cada operação também requer um
ID principal opaco canónico. Antes de um cliente de produção ser ativado, este tem de
derivar esse ID a partir do inquilino autenticado e nunca pode reencaminhar um valor
selecionado pelo cliente. As chaves de cache associam esse principal aos IDs canónicos
de sessão e de referência de vídeo, armazenam apenas as respetivas chaves derivadas por
SHA-256 e restringem tanto as leituras como a eliminação ao mesmo principal. A cache
armazena, no máximo, 16 fotogramas JPEG derivados por entrada, expira-os após dez minutos
e suporta leituras delimitadas por `start`/`end` ou a eliminação explícita da sessão.

Cada principal está limitado a 16 entradas e 64 MiB de dados JPEG canónicos. Esses
limites são independentes do limite global de 64 entradas/256 MiB: a pressão da quota
do principal remove apenas as entradas menos utilizadas recentemente desse principal
antes de ser considerada a remoção LRU global. As entradas expiradas são removidas
tanto da contabilização do principal como da global durante a atividade da cache,
enquanto o cancelamento e a falha de validação não confirmam uma substituição parcial.

A cache rejeita Base64 não canónico, preenchimento excessivo, conteúdo que não seja JPEG,
JPEGs malformados ou truncados e JPEGs que produzam um aviso durante uma descodificação
`sharp` integral e delimitada da imagem. Cada imagem aceite é recodificada como um JPEG
canónico, sendo a largura e a altura derivadas dos bytes descodificados em vez de se
confiarem nos campos fornecidos pelo cliente, e quaisquer bytes políglotas adicionais são
descartados em vez de serem conservados. Apenas o buffer comprimido canónico delimitado
é contabilizado em ambas as quotas. O limite JSON inclui a sobrecarga de Base64 para o
limite de 32 MiB da entrada descodificada. Cada
derivação armazenada regista o respetivo formato/resolução JPEG validados, a política de
amostragem, a versão da derivação, a hora de criação, o hash do conteúdo calculado pelo
servidor e a referência principal com hash, juntamente com o hash do conteúdo principal
do cliente fidedigno. O cancelamento é verificado entre as fases assíncronas de
descodificação/hash, antes da confirmação atómica na cache.

Esta tranche ainda não liga um produtor de produção à rota nem fornece seleção de
variantes com múltiplas resoluções. Por conseguinte, o caminho transparente de pedidos
do Video Bridge não implica trabalho adicional, enquanto a derivação do principal
associado ao inquilino e o ciclo de vida completo de múltiplas resoluções FU-08 continuam
a ser trabalho de seguimento explícito, em vez de serem documentados como comportamento
concluído.

Os fotogramas recebem legendas sequencialmente através do modelo Video configurado. Uma
substituição Video vazia herda a definição Vision; se ambas estiverem vazias, o
encaminhador automático de Vision seleciona o modelo efetivo com capacidades de visão.
As legendas bem-sucedidas substituem a parte original por um prefixo estável
`[Video description:` que também identifica o texto como uma observação não fidedigna
derivada de multimédia e instrui os modelos a jusante a não seguirem instruções
encontradas no conteúdo multimédia. As chaves da cache de legendas de fotogramas incluem
os bytes JPEG, o pedido, o carimbo de data/hora e o modelo efetivo; apenas as legendas
bem-sucedidas são armazenadas em cache. As entradas da cache conservam o modelo produtor
realmente bem-sucedido, incluindo um modelo alternativo; o bridge comunica `mixed`
quando diferentes fotogramas foram produzidos por modelos diferentes. Um acerto na cache
reutiliza essa identidade do produtor, em vez de a reclassificar como o plano de
encaminhamento solicitado. A cache de resultados do vídeo completo usa como chave todas
as entradas que alteram o resultado — o pedido, o modelo efetivo, a política de
amostragem, o número de fotogramas, o modo de análise semântica, a impressão digital
SHA-256 da sugestão de foco normalizada, a janela de foco, `transcript`,
`audioTranscript` e o sinalizador de folha de contactos — pelo que a alteração de
qualquer uma dessas dimensões resulta numa falha de cache, nunca numa reutilização de
dados obsoletos. A versão da política de desduplicação visual, o limiar e o número
delimitado de fotogramas candidatos também são explícitos na chave e nos metadados da
cache de resultados; por conseguinte, uma alteração de política não pode reutilizar uma
descrição obsoleta do vídeo completo. Os metadados v4 da cache de resultados conservam o
modo e a impressão digital, nunca a tarefa não processada do utilizador. Os metadados das
salvaguardas comunicam tanto os modos de análise solicitado como efetivo; um modo
`focused` solicitado sem texto utilizável do utilizador é comunicado como sendo
efetivamente `full`.

A salvaguarda extrai todas as partes de vídeo suportadas, mas não descreve mais do que
`modalityBridgeVideoMaxVideos`. Para um destino que comprovadamente tenha
`supportsVideo === false`, os vídeos que falhem ou excedam o limite tornam-se marcadores
de texto seguro explícitos, para que não sobreviva nenhum vídeo não processado. Quando a
capacidade é desconhecida, essas partes conservam o respetivo portador de vídeo; qualquer
transcrição alternativa segue a conversão delimitada em texto acima. Os destinos com
`supportsVideo === true` ignoram o bridge. O sinal de cancelamento do pedido do cliente
propaga-se pela transferência, fila do broker, subprocessos e chamadas de legendagem; os
cancelamentos interrompem o processamento entre vídeos e nunca permitem, em caso de
falha, a passagem de conteúdo multimédia não processado.

As definições de tempo de execução são suportadas pela BD e validadas pelo Zod:

| Chave                               | Predefinição | Intervalo / comportamento                                                                                          |
| ----------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`      | Runtime opcional, com ativação explícita                                                                           |
| `modalityBridgeVideoAnalysisMode`   | `"full"`     | `full` preserva legendas genéricas; `focused` utiliza contexto limitado e não fidedigno do utilizador mais recente |
| `modalityBridgeVideoModel`          | `""`         | Herda o modelo da Vision Bridge                                                                                    |
| `modalityBridgeVideoFrameCount`     | `8`          | 1–16                                                                                                               |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`  | `uniform`, `scene_aware` ou `segment_aware` proporcional; uma falha do detetor reverte para `uniform`              |
| `modalityBridgeVideoMaxVideos`      | `1`          | 1–4                                                                                                                |
| `modalityBridgeVideoTimeout`        | `120000`     | 1000–120000 ms                                                                                                     |

Os valores legados persistidos do tempo limite de vídeo superiores a 120 segundos são limitados ao
prazo do broker; novas gravações de definições acima desse limite são rejeitadas.
`GET /api/modality-bridge/video/runtime` exige uma origem local de loopback
fidedigna e carimbada antes da autenticação ou da sondagem do runtime e, depois, exige
autenticação de gestão. Devolve apenas `available`, versões de FFmpeg/ffprobe
sanitizadas e um motivo fixo quando o runtime está indisponível. O endpoint interno
de extração não é uma API pública de carregamento: a saturação da fila devolve `503`
mais `Retry-After`, uma desconexão do chamador devolve `499` e o prazo fixo do broker
devolve `504`. As respostas convertidas adicionam
`video->text;model=<visionModel>;parts=<videos>` ao cabeçalho central
`x-omniroute-modality-bridge` sem remover segmentos de Vision ou Audio.

### Mascarador de PII (`piiMasker.ts`)

É executado em **ambas** as fases.

- **`preCall`** clona o payload, percorre `system`, `messages`, `input` e
  `prompt` (incluindo itens que sejam cadeias de texto simples) e aplica `processPII()` (de
  `@/shared/utils/inputSanitizer`) aos campos de cadeia de texto `content`/`text`. Quando
  `PII_REDACTION_ENABLED=true`, a PII detetada é ocultada no payload
  de saída. Isto é independente de `INPUT_SANITIZER_MODE` (que apenas controla
  a política de injeção de prompts). Quando a ocultação está desativada, a chamada regista
  as contagens de deteções sem reescrever o conteúdo.
- **`postCall`** clona profundamente a resposta, executa `sanitizePIIResponse()` e
  o mascarador para o formato da Responses API (`maskResponsesOutput` — abrange
  `output_text` e `output[].content[].text`). Se ocorrer alguma ocultação, a
  resposta modificada substitui a original.

A proteção nunca bloqueia; apenas adiciona anotações (`meta.detections`,
`meta.redacted`) ou reescreve.

### Injeção de Prompts (`promptInjection.ts`)

Deteta estruturas adversariais em conteúdo fornecido pelo utilizador e aplica a
política configurada. O comportamento é determinado por variáveis de ambiente e opções
do construtor:

| Definição          | Variável de ambiente                                                                                 | Predefinição | Efeito                                                                                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ativada            | `INPUT_SANITIZER_ENABLED`                                                                            | `true`       | Quando é `false`, a proteção termina imediatamente.                                                                                                                                                       |
| Modo               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`       | Política de injeção: `block`, `warn` ou `log`. (`redact` é aceite para retrocompatibilidade, mas **não** remove texto de injeção; a reescrita de PII do pedido é controlada por `PII_REDACTION_ENABLED`.) |
| Limiar de bloqueio | Opção `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`       | Severidade mínima necessária para bloquear. A severidade média é apenas observada por predefinição.                                                                                                       |

**Precedência do modo** (`getMode`): `options.mode` do chamador →
substituição por **feature flag da BD** de `INJECTION_GUARD_MODE` (Painel → Definições →
Feature Flags) → variável de ambiente `INJECTION_GUARD_MODE` → variável de ambiente `INPUT_SANITIZER_MODE` →
`warn`. Assim, uma substituição no painel tem precedência sobre as variáveis de ambiente, pelo que a IU de Feature
Flags controla a proteção em execução em tempo real (sem reinício). A leitura da BD é à prova de falhas:
se ocorrer um erro, a proteção reverte para o comportamento baseado nas variáveis de ambiente e, quando não
está definida qualquer substituição, o comportamento é idêntico à resolução baseada apenas nas variáveis de ambiente.

Fontes de deteção:

1. `sanitizeRequest()` de `@/shared/utils/inputSanitizer` (conjunto partilhado de detetores
   utilizado noutros locais do pipeline).
2. `DEFAULT_GUARD_PATTERNS` incorporados (atualmente `system_override_inline` e
   `markdown_system_block`, ambos com severidade `high`).
3. `customPatterns` opcionais passados através das opções do construtor (cadeias de texto, expressões regulares
   ou registos `{ name, pattern, severity }`).

Quando `mode === "block"` **e** pelo menos uma deteção atinge o limiar de
gravidade, `preCall` devolve `{ block: true, message: "Request rejected:
suspicious content detected" }`. Nos modos `warn`/`log`, o guardrail regista a
ocorrência, mas permite a chamada. O auxiliar partilhado
`evaluatePromptInjection()` também é exportado para os chamadores que necessitem
de avaliar prompts sem passar pelo registo.

**Limite de análise (v3.8.20):** o detetor inspeciona apenas os **primeiros 16 KB**
do texto combinado dos prompts — `MAX_INJECTION_SCAN_BYTES = 16 * 1024`
(16 384 bytes) em `src/shared/utils/inputSanitizer.ts`. Tanto
`detectInjection()` como `evaluatePromptInjection()` executam
`slice(0, MAX_INJECTION_SCAN_BYTES)` antes de percorrerem os padrões. As
diretivas de injeção encontram-se perto do início de uma entrada, pelo que isto
limita a utilização de CPU/GC pelas expressões regulares em payloads com
centenas de KB sem enfraquecer a deteção (cf. #3932, #4041).

### Mascarador de credenciais (`credentialMasker.ts`)

É executado em **ambas** as fases, por último na cadeia predefinida (prioridade
`95`). Oculta padrões conhecidos de chaves de API/tokens secretos no payload de
saída (conteúdo das mensagens, argumentos de chamadas de ferramentas,
resultados de ferramentas) **e** na resposta do fornecedor, para que uma
credencial colada num prompt (ou devolvida por um resultado de ferramenta) não
seja divulgada ao fornecedor a montante nem devolvida ao cliente.

- **Apenas mediante ativação**, seguindo a mesma convenção da ocultação de PII
  (adjacente à Regra Rígida n.º 20): permanece desativado, exceto se
  `settings.credentialRedactionEnabled === true` **ou**
  `CREDENTIAL_REDACTION_ENABLED=true`. Quando está desativado, o guardrail não
  executa qualquer ação — nunca bloqueia nem reescreve.
- `redactCredentials()` percorre toda a árvore do payload/resposta
  (`walkValue()`, protegida contra poluição de protótipos e segura contra ciclos
  através de `WeakSet`) e substitui as correspondências por um marcador de
  posição `[REDACTED:<type>]`, clonando apenas os ramos que foram efetivamente
  alterados.
- `CREDENTIAL_PATTERNS` abrange chaves de fornecedores de LLM (OpenAI,
  OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), tokens de VCS/SaaS
  (GitHub, Slack, Linear, Notion, npm, Postman, Discord), chaves de pagamento
  (Stripe, Square), chaves de serviços cloud (chave de acesso AWS, Twilio,
  SendGrid, Mailgun), chaves privadas/JWTs, strings de ligação que contêm
  credenciais (`mongodb://user:pass@...`, etc.) e um padrão genérico para
  valores dos cabeçalhos `Authorization`/`x-api-key`/`api-key`/`apikey`. As
  chaves com formato de cabeçalho (`authorization`, `x-api-key`, `api-key`,
  `apikey`) são ocultadas estruturalmente (apenas o valor, preservando o prefixo
  do esquema, como `Bearer `/`Basic `), em vez de através da expressão regular
  genérica para texto.
- O guardrail nunca bloqueia; apenas reescreve (`modifiedPayload` /
  `modifiedResponse`) e adiciona anotações (`meta.credentialsRedacted`,
  `meta.count`).

Proteção contra regressões: `tests/unit/credential-masker-guardrail.test.ts`.

## Contrato Base (`base.ts`)

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
  block?: boolean; // true interrompe imediatamente a cadeia
  message?: string; // apresentada em caso de bloqueio
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // devolvido por preCall para reescrever o pedido
  modifiedResponse?: TValue; // devolvido por postCall para reescrever a resposta
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

Uma proteção assinala «sem alterações» devolvendo `void`, `{}` ou
`{ block: false }`. Devolver um `modifiedPayload`/`modifiedResponse` substitui
o valor que percorre a cadeia para as proteções subsequentes.
`signal?: AbortSignal` transmite o ciclo de vida do chamador às proteções. O cancelamento de um pedido é a exceção deliberada de abertura em caso de falha: as pontes multimédia interrompem o trabalho e efetuam a limpeza sem restaurar os dados multimédia em bruto para um destino que se sabe não os suportar.

## Registo (`registry.ts`)

A instância única `guardrailRegistry` expõe:

- `register(guardrail)` — adiciona uma proteção (ou substitui-a pelo nome normalizado) e
  reordena por `priority` ascendente.
- `clear()` / `list()` — auxiliares administrativos.
- `runPreCallHooks(payload, context)` — percorre as proteções ativas, encaminha o
  payload através de `modifiedPayload` e para no primeiro `block: true`.
- `runPostCallHooks(response, context)` — o mesmo fluxo no lado da resposta.
- `resetGuardrailsForTests({ registerDefaults })` — limpa o estado e, opcionalmente,
  regista novamente as predefinições para garantir um isolamento limpo dos testes.

Ambos os executores devolvem `{ blocked, payload|response, results, guardrail?, message? }`,
em que `results` é um array de registos `GuardrailExecutionResult` que incluem
os campos `blocked`, `skipped`, `modified`, `error` e `meta` por proteção,
úteis para rastreio.

### Desativar Proteções por Pedido

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agrega uma
lista sem duplicados dos nomes das proteções que devem ser ignoradas no pedido
atual. Origens (todas opcionais e combinadas):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` no corpo do pedido (nível superior)
- `metadata.disabledGuardrails` no corpo do pedido
- Cabeçalho `x-omniroute-disabled-guardrails` (ou o antigo
  `x-disabled-guardrails`)

Os valores podem ser arrays de strings ou uma string separada por vírgulas; os nomes são
normalizados para minúsculas em kebab-case (`pii_masker` → `pii-masker`). O resultado
é transmitido através de `context.disabledGuardrails` para o registo, que ignora
as proteções correspondentes (`skipped: true` em `results`).

## Ordem de execução

Para cada pedido que passa por `src/sse/handlers/chat.ts` e
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` cria a lista de exclusão a partir da chave de API, do corpo
   e dos cabeçalhos.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` executa os mecanismos de proteção por ordem
   crescente de prioridade:
   - Os mecanismos de proteção desativados são registados como `skipped`.
   - O `preCall` de cada mecanismo de proteção pode reescrever a carga útil através de `modifiedPayload`.
   - O primeiro `block: true` interrompe a cadeia e o processador devolve
     uma resposta de rejeição do mecanismo de proteção.
3. A carga útil (potencialmente reescrita) segue para o encaminhamento combinado e para o envio
   ao serviço a montante.
4. Depois de a resposta ser preparada, `guardrailRegistry.runPostCallHooks(...)`
   executa a mesma cadeia na resposta. Neste caso, `block: true` descarta a resposta
   do serviço a montante.

Os mecanismos de proteção que geram exceções são registados com `error: <message>` e registados no log através de
`logger.warn`, mas a cadeia prossegue — uma conceção de falha permissiva.

## Configuração

Variáveis de ambiente lidas pelos mecanismos de proteção integrados:

| Variável                              | Utilizada por            | Efeito                                                                                                                                               |
| ------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Defina como `false` para desativar completamente a deteção.                                                                                          |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Política de injeção: `warn`, `block` ou `log`. O valor legado `redact` não reescreve o texto da injeção.                                             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Modo do mecanismo de proteção contra injeção; é também um sinalizador de funcionalidade da BD que **substitui** as variáveis de ambiente (BD > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Gravidade mínima que `MODE=block` rejeita: `high` (predefinição), `medium` ou `low`.                                                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Alias legado de `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | Quando definido como `true`, as PII do pedido são ocultadas (independentemente do modo de injeção).                                                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (a jusante) | Controla o comportamento do ocultador no lado da resposta.                                                                                           |

Os mecanismos de proteção do Modality Bridge leem a configuração em tempo de execução a partir do armazenamento
de definições suportado pela BD (`getSettings()`), e não das variáveis de ambiente. As chaves principais da visão são
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` e
`modalityBridgeCacheMaxEntries`. As chaves legadas
`visionBridge*` são aceites apenas como a alternativa de leitura documentada durante um ciclo;
as escritas efetuadas pelo painel utilizam as chaves principais. As predefinições e o resolvedor
alternativo encontram-se em `src/shared/constants/modalityBridgeDefaults.ts`, sendo as constantes
legadas mantidas em `src/shared/constants/visionBridgeDefaults.ts`.

O áudio utiliza `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` e `modalityBridgeAudioMaxClips`, além das definições
`modalityBridgeCache*` partilhadas. O áudio não dispõe de uma alternativa baseada em chaves legadas, uma vez que estas
chaves foram introduzidas com o esquema do Modality Bridge.

O vídeo utiliza `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` e
`modalityBridgeVideoTimeout`, além das definições `modalityBridgeCache*` partilhadas.
Está desativado por predefinição porque o FFmpeg/ffprobe são dependências operacionais
opcionais e a legendagem de fotogramas acrescenta latência e custos de modelo.

## Mecanismos de proteção personalizados

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

Passos:

1. Crie `src/lib/guardrails/myGuardrail.ts` como uma extensão de `BaseGuardrail`.
2. Implemente `preCall` e/ou `postCall`.
3. Registe durante a importação (através de `registerDefaultGuardrails`) ou
   chame `guardrailRegistry.register(...)` em tempo de execução — o registo substitui
   qualquer mecanismo de proteção anterior com o mesmo nome normalizado.
4. Adicione testes em `tests/unit/` (exemplos existentes:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testes

Utilize `resetGuardrailsForTests()` entre testes para começar a partir de um estado conhecido.
Passe `{ registerDefaults: false }` para começar com um registo vazio e
registar apenas os mecanismos de proteção em teste. O Vision Bridge aceita injeção de
dependências (`deps.getSettings`, `deps.callVisionModel`); o Audio Bridge disponibiliza os
pontos de integração equivalentes para definições, capacidades, seleção do modelo STT, verificações
de credenciais e transcrição. Desta forma, os testes podem exercitar ambos os fluxos sem acesso à
base de dados ou à rede.

## Consulte também

- `src/lib/guardrails/` — implementação
- `src/shared/utils/inputSanitizer.ts` — detetor partilhado que suporta a
  deteção de injeção de prompts e a ocultação de PII
- `src/shared/constants/visionBridgeDefaults.ts` — predefinições do Vision Bridge e
  lista de modelos com utilização obrigatória do bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — predefinições partilhadas de execução do Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — camada ortogonal (circuit breaker, períodos de espera)
- `docs/reference/ENVIRONMENT.md` — referência completa das variáveis de ambiente

## Cobertura de rotas e red team do mecanismo contra injeção (Fase 8 · Bloco D)

O mecanismo contra injeção (`createInjectionGuard` / `withInjectionGuard`) abrange todas as rotas
que aceitam prompts do utilizador. Respeita `INJECTION_GUARD_MODE` (predefinição `warn` = apenas registo;
`block` = devolve HTTP 400 `SECURITY_001`).

| Tipo              | Rotas                                                                                                                                                | Modo predefinido |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Texto (existente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| Generativo        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| Dados             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

A extração de texto (`extractMessageContents`) abrange `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red team (todas as noites, `nightly-llm-security.yml`):** o promptfoo valida que cada rota bloqueia
o corpus OWASP-LLM quando `INJECTION_GUARD_MODE=block`; o garak executa sondagens (é ignorado sem o segredo).
`moderations` está incluído por motivos de consistência — os operadores no modo de bloqueio podem isentá-lo através de
`resolveDisabledGuardrails`.

O fluxo de trabalho noturno (`.github/workflows/nightly-llm-security.yml`, cron + execução
manual) tem duas tarefas:

- **`promptfoo-guard` (bloqueante)** — executa `promptfoo eval -c promptfooconfig.yaml`
  com `INJECTION_GUARD_MODE=block`. Cada caso adversarial (por exemplo, "ignore all
  previous instructions…", jailbreaks ao estilo DAN) verifica que a resposta contém
  `error.code === "SECURITY_001"`, ou seja, que o mecanismo rejeitou efetivamente o pedido.
- **`garak` (consultivo)** — executa o garak com `--probes promptinject,dan,leakreplay`
  numa instância local do OmniRoute (`http://localhost:20128/v1`). Está condicionado à existência de um
  segredo do fornecedor (`PROMPTFOO_PROVIDER_KEY`); é ignorado de forma adequada e recebe o sufixo
  `|| true`, pelo que gera um relatório sem causar uma falha na CI.

A cobertura do auxiliar do mecanismo (`createInjectionGuard` / `withInjectionGuard`)
abrange todas as rotas `/v1` que recebem prompts; o texto do prompt é obtido de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` por
`extractMessageContents()` em `src/shared/utils/inputSanitizer.ts`.
