---
title: "vs. Cursor"
weight: 60
bookToc: false
---

# Kiro vs. Cursor

[Cursor](https://cursor.com) 是由 [Anysphere](https://anysphere.inc/) 開發的 AI 驅動程式碼編輯器。[Kiro](https://kiro.dev) 是由 [AWS](https://aws.amazon.com/) 開發的完整 AI 開發平台，包含 IDE、CLI 和 Autonomous Agent 三大元件。兩款工具都旨在提升開發者生產力。Cursor 是 Visual Studio Code 的分支，而 Kiro IDE 也基於 VS Code 構建，並提供了更廣泛的開發工具生態系統。

## 總結

Kiro 是一個完整的 AI 開發平台，而 Cursor 是一個 AI 驅動的 IDE。兩者都能提升開發者生產力，但採用了不同的方法。以下是主要區別：

**Kiro 的獨特優勢：**

- **完整平台方案**：包含 IDE、CLI 和 Autonomous Agent，提供全方位的開發體驗
- **Spec-driven development**：結構化處理複雜開發任務的方法，將軟體開發過程正式化 - 這是 Kiro 獨有的功能
- **Agent Hooks**：當 IDE 中發生特定事件時執行預定義 Agent 操作的自動觸發器
- **Autonomous Agent**：前沿的自主智慧體，能夠獨立處理開發任務並跨儲存庫工作
- **靈活的自主性**：既有 Autopilot 模式（自主完成端對端任務）也有 Supervised 模式（應用更改前人工審查）
- **CLI 整合**：強大的命令列工具，支援自定義 Agent 和工作流程自動化

**Cursor 的獨特優勢：**

- **更多模型選擇**：支援多個提供商（Anthropic、Google、OpenAI、xAI）並具有自動選擇功能
- **預測下一次編輯**：Tab-tab 功能，基於最近的更改預測您的下一次編輯
- **記憶功能（Memories**：基於對話自動生成的規則，在會話間保持上下文

## 功能對比

{{% hint info %}}
**最後對比日期**：2025 年 12 月 10 日
{{% /hint %}}

<table>
<thead>
<tr>
<th>類別</th>
<th>功能</th>
<th>描述</th>
<th>Kiro</th>
<th>Cursor</th>
<th>備註</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="4"><strong>模型</strong></td>
<td>模型提供商</td>
<td>LLM 模型提供商</td>
<td>Anthropic: Claude Sonnet</td>
<td>Anthropic: Claude Sonnet<br>Google: Gemini<br>OpenAI: GPT<br>xAI: Grok</td>
<td>Claude 是最佳程式設計模型</td>
</tr>
<tr>
<td>自動模式</td>
<td>基於容量和效能自動選擇模型</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>API 金鑰</td>
<td>使用 API 金鑰直接呼叫模型提供商。通常比訂閱費用更高。功能通常受限。</td>
<td>❌</td>
<td>✅</td>
<td>這通常比訂閱費用更高。如果使用 API 金鑰，Cursor 中的代理等核心功能會被禁用。</td>
</tr>
<tr>
<td>上下文視窗</td>
<td>聊天的上下文視窗</td>
<td>Sonnet 支援 200K</td>
<td>大多數模型支援 128K</td>
<td>如果需要 200K 上下文視窗，Cursor 需要額外付費。</td>
</tr>
<tr>
<td rowspan="2"><strong>聊天</strong></td>
<td>問答聊天</td>
<td>來回對話</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>內聯編輯</td>
<td>直接在編輯器中編輯程式碼或提問</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td rowspan="6"><strong>Agent</strong></td>
<td>Agent 模式</td>
<td>自主程式設計任務、終端命令和程式碼編輯</td>
<td>✅</td>
<td>✅</td>
<td>Kiro 的 Agent 支援 Autopilot 模式和 Supervised 模式。Autopilot 模式允許 Kiro 在開啟的工作區內自主修改檔案。Supervised 模式允許使用者在應用更改前審查和批准更改</td>
</tr>
<tr>
<td>規格模式</td>
<td>結構化處理複雜開發任務的方法，將軟體開發過程正式化</td>
<td>✅</td>
<td>❌</td>
<td>這是 Kiro 的獨有功能。</td>
</tr>
<tr>
<td>檢查點</td>
<td>Agent 對程式碼庫更改的自動快照。讓您可以撤銷 Agent 修改。</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>規劃</td>
<td>Agent 透過待辦事項和佇列規劃和管理複雜任務</td>
<td>❌</td>
<td>✅</td>
<td></td>
</tr>

<tr>
<td>差異和審查</td>
<td>審查和管理 AI Agent 生成的程式碼更改</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>Hooks</td>
<td>當IDE中發生特定事件時執行預定義 Agent 操作的自動觸發器</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td rowspan="3"><strong>內聯補全</strong></td>
<td>內聯聊天</td>
<td>直接在編輯器中提問並獲得建議</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>自動補全</td>
<td>在您輸入時提供建議並補全程式碼</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>預測下一次編輯（Tab-tab）</td>
<td>使用最近的編輯來預測您可能想要進行的下一次編輯及其位置</td>
<td>❌</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td rowspan="5"><strong>上下文</strong></td>
<td>程式碼庫索引</td>
<td>透過計算每個檔案的嵌入來索引您的程式碼庫。改善AI對您程式碼的回答。</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>規則</td>
<td>對模型的系統級指令</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>記憶</td>
<td>基於聊天對話自動生成的規則。限定在您的專案範圍內，在會話間保持上下文。</td>
<td>❌</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>忽略檔案</td>
<td>使用忽略檔案控制檔案訪問</td>
<td>❌</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>新增圖片</td>
<td>將圖片新增到上下文中</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td rowspan="14"><strong>@ 符號</strong></td>
<td>@Files</td>
<td>引用專案中的特定檔案</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>@Folders</td>
<td>引用整個資料夾以獲得更廣泛的上下文</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>@Code</td>
<td>引用程式碼庫中的特定程式碼片段或符號</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>@Docs</td>
<td>訪問文件和指南</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>@Git</td>
<td>引用 git 歷史和更改</td>
<td>✅ Kiro 引用當前 git 差異。</td>
<td>✅ Cursor 可以引用當前 git 差異或特定提交。</td>
<td></td>
</tr>
<tr>
<td>@Past Chats</td>
<td>使用匯總的編輯器會話</td>
<td>❌</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>@Rules</td>
<td>使用規則</td>
<td>✅ 引用指導規則。</td>
<td>✅ 引用 Cursor 規則。</td>
<td></td>
</tr>
<tr>
<td>@Terminals</td>
<td>引用終端內容</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>@Web</td>
<td>引用外部網路資源和文件</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>@Recent Changes</td>
<td>最近的程式碼修改作為AI對話的上下文</td>
<td>❌</td>
<td>✅ Cursor 優先考慮最近的10次更改。</td>
<td></td>
</tr>
<tr>
<td># Problems</td>
<td>引用當前檔案中的問題</td>
<td>✅ Kiro 引用IDE中的問題。</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>@Lint Errors</td>
<td>引用程式碼檢查錯誤（僅聊天）</td>
<td>✅ 程式碼檢查錯誤包含在 #Problems 中。</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td># Files</td>
<td>將檔案新增到上下文中而不引用</td>
<td>❌</td>
<td>✅</td>
<td>不重要。Cursor 甚至沒有在其UI上明確說明如何使用此功能。</td>
</tr>
<tr>
<td>/ Commands</td>
<td>將開啟和活動的檔案新增到上下文中</td>
<td>❌</td>
<td>✅</td>
<td>不重要。Cursor 甚至沒有在其UI上明確說明如何使用此功能。</td>
</tr>
<tr>
<td rowspan="7"><strong>MCP</strong></td>
<td>工作區級別 MCP</td>
<td>適用於當前工作區</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>使用者級別 MCP</td>
<td>適用於所有專案</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td><code>stdio</code> 傳輸</td>
<td></td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td><code>SSE</code> 傳輸</td>
<td></td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td><code>Streamable HTTP</code> 傳輸</td>
<td></td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>自動批准可信工具</td>
<td>避免對可信工具重複批准提示</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>MCP 市場</td>
<td>一鍵安裝 MCP 伺服器</td>
<td>✅</td>
<td>✅</td>
<td>Kiro 提供了和 Cursor 類似的 Add to Kiro 按鈕來實作一鍵安安裝/td>
</tr>
<tr>
<td rowspan="5"><strong>平台元件</strong></td>
<td>CLI 工具</td>
<td>獨立的命令列 AI 開發工具</td>
<td>✅ 完整的 CLI 平台，支援自定義 Agent 和工作流程自動化</td>
<td>❌</td>
<td>Kiro CLI 提供高度互動式的終端程式設計體驗</td>
</tr>
<tr>
<td>Autonomous Agent</td>
<td>獨立處理開發任務的自主智慧體</td>
<td>✅ 前沿的自主智慧體，跨儲存庫工作，保持上下文</td>
<td>❌</td>
<td>Kiro Autonomous Agent 目前在預覽階段，為 Pro+ 使用者提供</td>
</tr>
<tr>
<td>跨儲存庫協作</td>
<td>在多個程式碼儲存庫間協調工作</td>
<td>✅ Autonomous Agent 支援跨儲存庫規劃和實施</td>
<td>❌</td>
<td>Kiro 平台級別的獨特能力</td>
</tr>
<tr>
<td>沙盒執行</td>
<td>在隔離環境中安全執行任務</td>
<td>✅ Autonomous Agent 在沙盒環境中執行</td>
<td>❌</td>
<td>確保安全性和程式碼審查流程</td>
</tr>
<tr>
<td>平台整合</td>
<td>IDE、CLI 和 Agent 之間的無縫整合</td>
<td>✅ 完整平台方案，元件間無縫協作</td>
<td>❌ 僅提供 IDE</td>
<td>Kiro 提供完整的開發生態系統</td>
</tr>
<tr>
<td rowspan="2"><strong>其他</strong></td>
<td>遠端 Agent</td>
<td>在雲端執行的非同步遠端 Agent</td>
<td>❌</td>
<td>✅ Cursor 中的後臺 Agent。需要額外收費。</td>
<td>這不關鍵。</td>
</tr>
<tr>
<td>網頁門戶</td>
<td>從網頁門戶執行程式設計 Agent</td>
<td>❌</td>
<td>✅ 需要額外收費。</td>
<td>這不關鍵。</td>
</tr>
<tr>
<td rowspan="5"><strong>使用者體驗</strong></td>
<td>並行會話</td>
<td>允許開啟多個標籤頁，並行執行 Agent/聊天</td>
<td>✅</td>
<td>✅</td>
<td>兩款工具都可以並行執行多個會話。</td>
</tr>
<tr>
<td>任務列表</td>
<td>顯示當前任務和佇列中的任務</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>歷史記錄</td>
<td>檢視和管理聊天對話</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>上下文摘要</td>
<td>自動摘要和管理上下文以保持聊天高效</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>自定義佈局</td>
<td>快速自定義IDE佈局</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
</tbody>
</table>

## 價格對比

{{% hint info %}}
**最後更新日期**：2025 年 11 月 25 日。如需最新定價資訊，請查詢 Kiro 和 Cursor 官網。
{{% /hint %}}

### 個人版

- Kiro 價格套餐包含**固定積分**。
- Cursor 價格套餐包含**按模型 API 價格**計算的每月 Agent 使用預算。

{{% hint warning %}}
**Pro 版本試用**</br>
Kiro 和 Cursor 都提供 2 周免費的 Pro 版本試用。試用期內，Kiro 提供額外 500 積分。Cursor 未明確給出 Agent 呼叫次數或模型 API 使用額度。
{{% /hint %}}

<table>
<thead>
<tr>
<th>Kiro 套餐</th>
<th>Cursor 套餐</th>
<th>費用（每月/每使用者）</th>
<th>Kiro</th>
<th>Cursor</th>
</tr>
</thead>
<tbody>
<tr>
<td>Free</td>
<td>Hobby</td>
<td>$0</td>
<td>• 50積分</td>
<td>Limited (官方無明確說明)</td>
</tr>
<tr>
<td>Pro</td>
<td>Pro</td>
<td>$20</td>
<td>• 1000積分</td>
<td>• ~225 Sonnet 4 請求，或<br>• ~550 Gemini 請求，或<br>• ~500 GPT 5 請求</td>
</tr>
<tr>
<td>Pro+</td>
<td>-</td>
<td>$40</td>
<td>• 2000積分</td>
<td>-</td>
</tr>
<tr>
<td>-</td>
<td>Pro+</td>
<td>$60</td>
<td>-</td>
<td>• ~675 Sonnet 4 請求，或<br>• ~1,650 Gemini 請求，或<br>• ~1,500 GPT 5 請求</td>
</tr>
<tr>
<td>Power</td>
<td>Ultra</td>
<td>$200</td>
<td>• 10000積分</td>
<td>• ~4,500 Sonnet 4 請求，或<br>• ~11,000 Gemini 請求，或<br>• ~10,000 GPT 5 請求</td>
</tr>
</tbody>
</table>

{{% hint info %}}
Kiro 超過套餐後，費用為 $0.04/積分。</br>Cursor 超出套餐後，AUTO 模式下 Input: $1.25 per 1M tokens，Output: $6.00 per 1M tokens; Cached Input: $0.25 per 1M tokens。或按模型 API 費用計費，Sonnet 4 約為 $0.09/次。
{{% /hint %}}

**Kiro 的優勢**:

- 定價透明、計算簡單：固定的費用和呼叫次數。
- 超額費用便宜：超出額度後 $0.04/積分，低於 Cursor ~$0.09/次 （按 Sonnet 4 計價）。

**Cursor 價格優勢**：

- 使用非 Claude 模型會更便宜

### 企業版

{{% hint warning %}}
企業版通常支援 SSO (單點登陸)、使用者管理、用量統計和統一賬單等功能
{{% /hint %}}

- Kiro 價格套餐包含**固定積分**。
- Cursor 價格套餐包含**固定次數**請求 (Sonnet 3.7 和 Sonnet 4 Thinking 模式請求記 2 次)。

<table>
<thead>
<tr>
<th>Kiro 套餐</th>
<th>Cursor 套餐</th>
<th>費用（每月/每使用者）</th>
<th>Kiro</th>
<th>Cursor</th>
</tr>
</thead>
<tbody>
<tr>
<td>Pro</td>
<td>-</td>
<td>$20</td>
<td>• 1000積分</td>
<td>-</td>
</tr>
<tr>
<td>Pro+</td>
<td>Teams</td>
<td>$40</td>
<td>• 2000積分</td>
<td> 按 API token計價，且只包含 $20美金的 agent API token usage（ ~225 Sonnet 4 請求）。Cursor API 計價為 模型API 計價 +$0.25 per 1M tokens。</td>
</tr>
<tr>
<td>Power</td>
<td>-</td>
<td>$200</td>
<td>• 10000積分</td>
<td>-</td>
</tr>
</tbody>
</table>

{{% hint info %}}
Kiro 超過套餐後，費用為 $0.04/積分。</br>Cursor 超出套餐後，AUTO 模式下 Input: $1.25 per 1M tokens，Output: $6.00 per 1M tokens; Cached Input: $0.25 per 1M tokens。或按模型 API 費用計費，Sonnet 4 約為 $0.09/次。Cursor API 計價為 模型 API 計價 +$0.25 per 1M tokens。
{{% /hint %}}

**Kiro 優勢**:

- 定價透明、計算簡單：固定的費用和呼叫次數。
- 更多呼叫次數：$40 套餐，Kiro 包含更多呼叫次數，高於 Cursor。
- 超額費用便宜：超出額度後 $0.04/積分，低於 Cursor ~$0.11/次 （按 Sonnet 4 計價）。

**Cursor 優勢**：

- 使用非 Claude 模型會更便宜

## Cursor 使用者常見問題

### 🎯 **Kiro 的獨特優勢**

**問：Kiro 相比 Cursor 有什麼獨特功能？**

Kiro 提供了 Cursor 所缺乏的幾個獨特功能：

- **Spec Mode**：結構化處理複雜開發任務的方法，將軟體開發過程正式化
- **Agent Hooks**：針對特定 IDE 事件的自動化觸發器，當 IDE 中發生特定事件時執行預定義 Agent 操作
- **完整平台方案**：IDE + CLI + Autonomous Agent 三位一體，提供全方位的開發體驗
- **靈活的 Agent 控制**：可在 Autopilot 模式和 Supervised 模式之間選擇

### 🤖 **Agent 功能**

**問：什麼是 Autopilot 模式？**

Kiro 的 Agent 支援 Autopilot 模式和 Supervised 模式。Autopilot 模式允許 Kiro 在開啟的工作區內自主修改檔案。Supervised 模式允許使用者在應用更改之前審查和批准更改。

**問：Kiro 是否像 Cursor 一樣有檢查點功能？**

是的，Kiro 支援檢查點功能，可以自動建立程式碼庫更改的快照，讓您可以撤銷 Agent 修改。

**問：Kiro 是否支援帶有待辦事項和佇列的 Agent 規劃？**

Kiro 沒有像 Cursor 那樣內建的帶有待辦事項和佇列的 Agent 規劃功能。但是，Kiro 提供了 **Spec Mode** - 一種獨特的結構化方法來處理複雜的開發任務，將軟體開發過程正式化。這為複雜專案提供了比簡單待辦事項列表更好的組織方式。

Spec Mode 執行的任務，以及 Agent Hooks 執行的任務，會被放置在任務佇列中。

### 🧠 **模型和 API**

**問：我可以在 Kiro 中使用自己的 API 金鑰嗎？**

目前，Kiro 不支援直接使用 API 金鑰。API 金鑰通常比訂閱費用更高。在 Cursor 中，如果使用 API 金鑰，Agent 等核心功能會被禁用。

**問：Kiro 是否有自動選擇模型的模式？**

是的，Kiro 預設使用 Auto 模型，會基於容量和效能自動選擇最適合的模型。

### 📚 **上下文和記憶**

**問：Kiro 是否像 Cursor 一樣有記憶功能？**

Kiro 沒有自動記憶生成功能。相反，Kiro 使用 **Steering** - 一種更結構化的專案規則方法，您可以明確定義和管理。這讓您更好地控制如何在會話之間維護上下文。

**問：我可以使用 ignore 檔案來控制 Kiro 看到的內容嗎？**

Kiro 目前不支援使用忽略檔案來控制檔案訪問。但是，您可以使用 Kiro 的上下文控制，如 #File 和 #Folder 來明確指定要在對話中包含的內容。

### 🔌 **MCP（模型上下文協議）**

**問：Kiro 是否支援 SSE 和可流式 HTTP 傳輸？**

是的，Kiro 支援 SSE 和 Streamable HTTP 傳輸，與 Cursor 的 MCP 支援相當。

**問：Kiro 中是否有 MCP 市場？**

Kiro 提供了類似 Cursor 的 MCP 整合體驗，包括 "Add to Kiro" 按鈕來實作一鍵安裝。MCP 生態系統正在快速增長，有許多社群貢獻的伺服器可用。

### 🚀 **高階功能**

**問：Kiro 是否有後臺/遠端 Agent？**

Kiro 目前不支援後臺或遠端 Agent。但是，這些功能在 Cursor 中需要額外收費，對大多數開發工作流程來說並不重要。Kiro 的本地 Agent 功能全面且高效。

**問：Kiro 的完整平台方案有什麼優勢？**

Kiro 不僅僅是一個 IDE，而是包含三大元件的完整 AI 開發平台：

- **Kiro IDE**：基於 VS Code 的智慧開發環境
- **Kiro CLI**：強大的命令列工具，支援自定義 Agent 和工作流程自動化
- **Kiro Autonomous Agent**：前沿的自主智慧體，能夠跨儲存庫工作並獨立處理開發任務

這種完整平台方案提供了 Cursor 無法匹敵的全方位
