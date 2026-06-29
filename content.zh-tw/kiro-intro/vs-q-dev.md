---
title: "vs. Amazon Q Developer"
weight: 70
bookToc: false
---

# Kiro vs. Amazon Q Developer IDE 外掛

## 總結

Kiro 和 Amazon Q Developer 都是 AWS 出品的 AI 開發工具。Kiro 是一個完整的 AI 開發平台（包含 IDE、CLI 和 Autonomous Agent），而 Amazon Q Developer 主要以 IDE 外掛形式提供。從整體使用者體驗而言，Kiro 提供更全面的解決方案，Amazon Q Developer 外掛則支援不同的 IDE，使用者無需更換原有 IDE。以下是主要區別：

**Kiro 的獨特優勢：**

- **完整平台方案**：包含 IDE、CLI 和 Autonomous Agent，提供全方位的開發體驗
- **Spec Mode**：結構化處理複雜開發任務的方法，將軟體開發過程正式化 - 這是 Kiro 獨有的功能
- **Agent Hooks**：當 IDE 中發生特定事件時執行預定義代理操作的自動觸發器
- **Autonomous Agent**：前沿的自主智慧體，能夠獨立處理開發任務並跨儲存庫工作
- **靈活的自主性**：既有 Autopilot mode（自主修改）也有 Supervised mode（應用更改前審查）
- **CLI 整合**：強大的命令列工具，支援自定義 Agent 和工作流程自動化
- **豐富的上下文引用**：支援 #Docs、#Git、#Rules、#Terminals、#Web 等多種上下文引用方式

**Amazon Q Developer 的獨特優勢：**

- **GUI 配置**：提供圖形介面配置 MCP 伺服器，相比 Kiro 的 JSON 檔案配置更直觀
- **固定上下文項**：可以指定在聊天會話中新增到所有訊息的上下文項
- **Prompt Library**：內建提示庫功能，可儲存和重用常用提示
- **Named Agent**：提供專門的 Java 升級（/transform）代理

**核心差異：**

- **開發方法**：Kiro 強調結構化的 Spec 驅動開發，而 Q Developer 更注重傳統的 Agent 程式設計方式
- **自主性控制**：Kiro 提供 Supervised 和 Autopilot 兩種模式。
- **上下文管理**：Kiro 的 Steering 系統提供更靈活的包含模式（始終/條件/手動），Q Developer 的 Project Rules 僅支援始終包含

## 功能對比

{{% hint info %}}
**最後對比日期**：2025 年 11 月 25 日
{{% /hint %}}

<table>
<thead>
<tr>
<th>類別</th>
<th>功能</th>
<th>描述</th>
<th>Kiro</th>
<th>Q Developer VS Code 外掛</th>
<th>備註</th>
</tr>
</thead>
<tbody>
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
<td>✅ 支援額外上下文，多輪對話</td>
<td>✅ 無額外上下文，單輪對話</td>
<td></td>
</tr>
<tr>
<td rowspan="6"><strong>代理</strong></td>
<td>Vibe</td>
<td>自主程式設計任務、終端命令和程式碼編輯</td>
<td>✅</td>
<td>✅ 代理程式設計</td>
<td></td>
</tr>
<tr>
<td>Spec</td>
<td>結構化處理複雜開發任務的方法，將軟體開發過程正式化</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>Supervised mode</td>
<td>Kiro 展示每個建議的操作並等待您的批准後再繼續。您將看到 Kiro 想要進行的確切更改，並可以接受、拒絕或修改它們。</td>
<td>✅</td>
<td>❌</td>
<td>Kiro 會要求您審查和接受程式碼更改。VS Code 外掛直接更改檔案並提供撤銷編輯的方法。</td>
</tr>
<tr>
<td>Autopilot mode</td>
<td>自主完成端對端任務。它可以建立檔案、在多個位置修改程式碼、執行命令，並在每個步驟都不需要批准的情況下做出架構決策。</td>
<td>✅</td>
<td>❌</td>
<td>Kiro 可以讀取終端輸出，並可以配置可信命令。</td>
</tr>
<tr>
<td>差異和審查</td>
<td>審查和管理 AI 代理生成的程式碼更改</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>Hooks</td>
<td>當IDE中發生特定事件時執行預定義代理操作的自動觸發器</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td rowspan="1"><strong>內聯補全</strong></td>
<td>自動補全</td>
<td>在您輸入時提供建議並補全程式碼</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td rowspan="5"><strong>上下文</strong></td>
<td>程式碼庫索引</td>
<td>透過計算每個檔案的嵌入來索引您的程式碼庫。改善AI對您程式碼的回答。</td>
<td>✅ 透過 #codebase</td>
<td>✅ 透過 @workspace</td>
<td></td>
</tr>
<tr>
<td>規則</td>
<td>對模型的系統級指令</td>
<td>✅ Steering</td>
<td>✅ Project Rules</td>
<td>Kiro 的 Steering 提供始終/條件/手動包含模式，而 Q IDE 外掛僅提供始終包含模式。</td>
</tr>
<tr>
<td>新增圖片</td>
<td>將圖片新增到上下文中</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>固定上下文項</td>
<td>上下文固定讓您指定在聊天會話中新增到所有訊息的上下文項。當您固定上下文項時，它會自動包含在當前對話的每條訊息中。</td>
<td>❌</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>Prompt Library</td>
<td>在庫中儲存提示，將它們插入聊天中而無需每次重新輸入提示</td>
<td>❌</td>
<td>✅</td>
<td>在 Kiro 中，您可以將提示放在手動 Steering 中，並使用 #steering 命令包含提示。</td>
</tr>
<tr>
<td rowspan="11"><strong>@ 符號</strong></td>
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
<td>❌</td>
<td></td>
</tr>
<tr>
<td>@Git</td>
<td>引用 git 歷史和更改</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>@Rules</td>
<td>使用規則</td>
<td>✅ 引用 Steering 檔案</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>@Terminals</td>
<td>引用終端內容</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>@Web</td>
<td>引用外部網路資源和文件</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td># Problems</td>
<td>引用當前檔案中的問題</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>@Lint Errors</td>
<td>引用程式碼檢查錯誤（僅聊天）</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>@Prompts</td>
<td>Prompt Library。將儲存的提示新增到上下文中。</td>
<td>❌</td>
<td>✅</td>
<td>在 Kiro 中，您可以將提示放在手動 Steering 中，並使用 #steering 命令包含提示。</td>
</tr>
<tr>
<td rowspan="5"><strong>MCP</strong></td>
<td>配置</td>
<td>如何配置 MCP 伺服器</td>
<td>✅ JSON 檔案</td>
<td>✅ GUI</td>
<td></td>
</tr>
<tr>
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
<td>本地桌面上的 MCP 伺服器</td>
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
<td rowspan="5"><strong>使用者體驗</strong></td>
<td>並行會話</td>
<td>允許開啟多個標籤頁，並行執行代理/聊天</td>
<td>✅</td>
<td>✅</td>
<td></td>
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
<td>❌</td>
<td></td>
</tr>
<tr>
<td>自定義佈局</td>
<td>快速自定義IDE佈局</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td rowspan="2"><strong>Named Agent</strong></td>
<td>安全審查</td>
<td>用於識別安全和程式碼質量問題的專門代理</td>
<td>❌</td>
<td>✅ 內建程式碼審查的 tool</td>
<td></td>
</tr>
<tr>
<td>Java 升級</td>
<td>升級 Java</td>
<td>❌</td>
<td>✅ 使用 <code>/transform</code> 命令</td>
<td>需要額外收費。</td>
</tr>
</tbody>
</table>

## Amazon Q Developer 使用者常見問題

### 🎯 **基本概念**

**問：什麼是 Kiro，Kiro 與 Amazon Q Developer 有什麼區別？**

**Kiro** 是一個完整的 AI 開發平台，包含 IDE、CLI 和 Autonomous Agent 三大元件，專為 AI 輔助開發而從頭構建。**Amazon Q Developer** 主要作為外掛/擴充功能在現有開發環境（如 Visual Studio Code、JetBrains、Eclipse、Visual Studio）中工作。

主要區別：

- **Kiro**：完整的獨立 AI 開發平台，提供全方位的開發體驗
- **Amazon Q Developer**：IDE 外掛形式，與現有開發環境整合

### 🔐 **賬戶和登入**

**問：如何使用我的 Amazon Q Developer Pro 賬戶登入 Kiro？**

現階段我們建議使用 [Kiro 企業級訂閱](https://kiro.dev/enterprise/) 來使用 Kiro。如果您已有 Amazon Q Developer Pro 訂閱，可以考慮[將訂閱升級到 Kiro](../amazon-q/migrate/)。

使用 Amazon Q Developer Pro 賬戶登入 Kiro 的步驟：

1. 在登入頁面上，選擇 **Sign in with your organization identity**

2. 在使用 AWS Identity Center 登入頁面上：
   - 輸入起始 URL（例如：`https://your-company.awsapps.com/start`）
   - 選擇配置您的 AWS Identity Center 的 AWS 區域
   - 請聯絡您的管理員獲取這些資訊

3. 選擇 **Continue** 並按照螢幕上的說明完成身份驗證過程

### 🚀 **功能對比**

**問：Kiro 相比 Amazon Q Developer 有什麼獨特優勢？**

Kiro 作為完整平台提供了 Amazon Q Developer 外掛無法匹敵的功能：

- **Spec Mode**：結構化處理複雜開發任務的方法，將軟體開發過程正式化
- **Agent Hooks**：當 IDE 中發生特定事件時執行預定義操作的自動觸發器
- **Autonomous Agent**：前沿的自主智慧體，能夠跨儲存庫工作並獨立處理開發任務
- **靈活的自主性控制**：Autopilot 模式（自主修改）和 Supervised 模式（應用前審查）
- **完整的 CLI 整合**：強大的命令列工具，支援自定義 Agent 和工作流程自動化
- **豐富的上下文引用**：支援 #Docs、#Git、#Rules、#Terminals、#Web 等多種上下文方式

**問：Amazon Q Developer 有哪些 Kiro 暫時不支援的功能？**

Amazon Q Developer 在某些方面仍有優勢：

- **GUI 配置**：圖形介面配置 MCP 伺服器，比 Kiro 的 JSON 檔案配置更直觀
- **固定上下文項**：可以指定在聊天會話中自動新增到所有訊息的上下文項
- **Prompt Library**：內建提示庫功能，可儲存和重用常用提示
- **Named Agent**：提供專門的 Java 升級（/transform）代理

### 🔧 **技術細節**

**問：Kiro 的 Steering 系統與 Amazon Q Developer 的 Project Rules 有什麼區別？**

- **Kiro Steering**：提供更靈活的包含模式
  - 始終包含：類似 Project Rules 的預設行為
  - 條件包含：基於檔案匹配模式自動包含
  - 手動包含：透過 #steering 命令按需包含

- **Amazon Q Developer Project Rules**：僅支援始終包含模式，所有規則都會自動新增到每次對話中

**問：如何在 Kiro 中實作類似 Prompt Library 的功能？**

雖然 Kiro 沒有內建的 Prompt Library，但您可以：

1. 將常用提示儲存在手動 Steering 檔案中
2. 使用 `#steering` 命令按需包含這些提示
3. 這種方式提供了更靈活的提示管理和組織方式

### 📈 **遷移和升級**

**問：我應該從 Amazon Q Developer 遷移到 Kiro 嗎？**

這取決於您的需求：

**選擇 Kiro 如果您需要：**
- 完整的 AI 開發平台體驗
- 結構化的 Spec 驅動開發方法
- 跨儲存庫的自主 Agent 功能
- 強大的 CLI 和自動化工具
- 更靈活的上下文和規則管理

**繼續使用 Amazon Q Developer 如果您：**
- 更喜歡在現有 IDE 中工作
- 需要 GUI 配置 MCP 伺服器
- 依賴固定上下文項和 Prompt Library 功能
- 主要進行 Java 開發並需要升級工具

兩個工具都是 AWS 出品，您可以根據專案需求和個人偏好選擇最適合的工具。
