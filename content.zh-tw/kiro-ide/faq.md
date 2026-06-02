---
title: "常見問題"
weight: 23
bookToc: true
---

# **Kiro IDE 常見問題**

{{% hint info %}}
**重要提示**：Agent 自主性設定（Autopilot vs Supervised 模式）和受信任命令管理已移至 [開始使用](getting-started.md) 頁面，建議先閱讀該部分內容。
{{% /hint %}}

## **資料隱私與遙測**

### **如何關閉 Kiro IDE 的遙測功能？**

有兩種方法可以關閉遙測：

**方法 1：透過設定介面**
```
Settings → Application → Telemetry and Content → 關閉（Disabled）
```

**方法 2：透過 settings.json 設定**
```json
{
  "telemetry": {
    "enabled": false
  },
  "usageStatisticsEnabled": false
}
```

### **如何為不同專案設定不同的隱私設定？**

Kiro 支援全域和專案級別的設定：

```bash
# 全域設定（適用於所有專案）
~/.kiro/settings.json

# 專案專屬設定（優先級更高）
.kiro/settings.json
```

{{% hint warning %}}
**注意**：如果專案設定包含 API 金鑰等敏感資訊，建議將 `.kiro/settings.json` 新增到 `.gitignore` 檔案中。
{{% /hint %}}

## **聊天歷史記錄位置**

### **Kiro IDE 的聊天記錄儲存在哪裡？**

聊天記錄以 JSON 格式儲存在以下位置：

- **Windows**: `~\AppData\Roaming\Kiro\User\globalStorage\kiro.kiroagent\<userid>\*.chat`
- **macOS**: `~/Library/Application Support/Kiro/User/globalStorage/kiro.kiroagent/<userid>/*.chat`
- **Linux**: `~/.config/Kiro/User/globalStorage/kiro.kiroagent/<userid>/*.chat`

### **可以匯出聊天歷史記錄嗎？**

目前 Kiro 還沒有聊天會話匯出功能，但您可以直接存取上述路徑中的 JSON 檔案來取得原始聊天資料。

### **Spec 模式下的「可測試屬性」是什麼**
「可測試屬性」即 Property-Based Testing，是 Kiro Spec 系統的核心概念。
核心解釋（來自官方文件）：
- Property（屬性）：關於系統行為的普遍聲明（universal statement），描述系統中應該始終為真的不變量和契約
- 與傳統測試的區別：傳統測試檢查個別範例（example-based），Property-Based Testing 驗證整個輸入空間上的普遍屬性
- 與 EARS 需求的關係：Kiro 從 EARS 格式的需求中提取屬性，並自動產生測試案例
工作流程：
1. 用 EARS 格式撰寫需求規格
2. Kiro 自動從需求中提取可測試屬性
3. 基於屬性自動產生測試案例
4. 執行測試驗證程式碼正確性

### **增刪改查/網路存取是否需要 Skills 設定**
不需要。檔案增刪改查和網路存取是 Kiro 的內建能力，不需要設定 Skills。
內建能力（無需 Skills）：
- 檔案建立、讀取、修改、刪除
- 目錄瀏覽和管理
- 終端機命令執行
- 網路請求（HTTP/HTTPS）
- Git 操作
Skills 的用途：
- 封裝可重複使用的高層工作流和指令集
- 例如：程式碼審查流程、部署流程、特定框架的開發模式
- Skills 是「指令包」，不是基礎工具

### **如何批次匯入**
目前 Kiro 官方不支援「批次匯入」Skills。只支援逐個匯入。
單個匯入方式：
```
1. 點擊 Import 按鈕
2. 選擇來源：GitHub 儲存庫、SKILL.md 檔案、或本機資料夾
3. 匯入後儲存在 .kiro/skills/（工作區）或 ~/.kiro/skills/（全域）
```
變通方案（手動批次）：
```
1. 將多個 Skill 目錄批次複製到 ~/.kiro/skills/ 全域目錄
2. 或寫一個腳本批次 git clone 多個 Skill 儲存庫到 skills 目錄
3. Kiro 會自動發現目錄下的 SKILL.md 檔案
```

### **出現 There was an error processing your request 報錯**
這是一個通用錯誤提示，可能由多種原因觸發：
1. 網路/連線問題：VPN 不穩定、網路中斷、代理設定錯誤
2. MCP 工具問題：MCP 工具的 input_schema 超過 10240 字元會觸發此錯誤
3. 圖片處理問題：在對話中傳送某些格式圖片可能導致後端處理失敗
4. 服務端暫時故障：AWS 後端服務暫時不可用

排查步驟：
1. 檢查網路連線和 VPN 狀態
2. 重新啟動 Kiro 客戶端
3. 查看 Developer Tools Console（Help → Toggle Developer Tools）中的具體錯誤
4. 如果使用了 MCP 工具，檢查工具的 input_schema 是否過大
5. 嘗試建立新會話

## **計費與用量**

### **如何查看發票？**

在 Kiro 中點擊頭像 → **Manage Plan**，跳轉到計費面板後可在 **Invoice History** 部分查看所有歷史發票、下載 PDF 格式發票副本、查看付款日期和金額。

{{% hint warning %}}
**注意**：Kiro 目前暫不支援開具中國大陸發票（增值稅發票等）。發票為國際通用格式的 Invoice/Receipt，以 USD 計費。
{{% /hint %}}

詳見 [計費管理文件](https://kiro.dev/docs/billing/managing/)。

### **支援哪些支付方式？**

Kiro 接受所有主流信用卡和簽帳金融卡（We accept all major credit and debit cards），以 **USD** 計費。這意味著純人民幣單幣卡大概率無法使用，需要支援外幣交易的卡（如 Visa、Mastercard 雙幣卡）。

詳見 [計費管理文件](https://kiro.dev/docs/billing/managing/)。

### **達到用量上限後會怎樣？**

當達到月度用量上限時，請求會暫停直到下月重置。解決方案：
- **Free 使用者**：升級到付費方案取得更多額度
- **付費使用者**：開啟 overage 繼續使用（會產生額外費用）
- 如果希望固定帳單，保持 overage 關閉，用量達到上限後服務會暫停

如果遇到 "too many requests" 錯誤，通常也與用量限制有關。

詳見 [計費相關問題](https://kiro.dev/docs/billing/related-questions)。

### **升級訂閱後何時生效？**

升級立即生效：
- **首次從 Free 升級到付費版**：按剩餘天數按比例收費，立即取得新 plan 的全部 credit 額度
- **首月內再次升級**（如 Pro → Pro+）：退還之前已付費用，按比例收取新 plan 費用
- **首月之後的升級**：全額收取差價，整月用量按新 tier 的 credits 重新計算

詳見 [計費相關問題](https://kiro.dev/docs/billing/related-questions)。

## **版本與更新**

### **如何查看版本更新內容？**

Kiro 官方網站有專門的 Changelog 頁面：
- **IDE 更新記錄**：https://kiro.dev/changelog/ide/
- **CLI 更新記錄**：https://kiro.dev/changelog/cli/

## **上下文管理**

### **對話上下文太長怎麼辦？**

Kiro 提供以下上下文管理機制：
- **自動壓縮**：當 context window 溢出時會自動觸發 Conversation compaction
- **手動壓縮**：使用 `/compact` 命令主動壓縮上下文
- **查看用量**：使用 `/context show` 查看目前 context 使用情況
- **移除檔案**：使用 `/context remove` 移除不需要的 context 檔案
- **Knowledge Base**：使用 Knowledge Base 替代大檔案以減少 context 佔用

詳見 [Context 管理文件](https://kiro.dev/docs/cli/chat/context)。

## **安全最佳實踐**

### **如何安全地管理 API 金鑰？**

**❌ 錯誤做法：直接在設定檔中寫入金鑰**
```json
{
  "mcpServers": {
    "github": {
      "env": {
        "GITHUB_TOKEN": "ghp_actualTokenHere"  // 危險！
      }
    }
  }
}
```

**✅ 正確做法：使用環境變數**
```json
{
  "mcpServers": {
    "github": {
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"  // 從環境變數讀取
      }
    }
  }
}
```

在 `.zshrc` 或 `.bashrc` 中新增：
```bash
export GITHUB_TOKEN="ghp_xxxx"
export BRAVE_API_KEY="BSA_xxxx"
```

### **如何為不同專案設定不同的安全級別？**

**正式專案設定（高安全性）：**
```json
{
  "sandbox": "docker",
  "autoAccept": false,
  "excludeTools": ["run_shell_command"]
}
```

**開發專案設定（便利性優先）：**
```json
{
  "sandbox": false,
  "autoAccept": false,
  "coreTools": ["all"]
}
```

### **應該在 .gitignore 中包含哪些 Kiro 相關檔案？**

```bash
# .gitignore 中應包含：
.env
.env.local
.kiro/settings.json    # 可能包含 API 金鑰
.kiro/cache/           # 快取檔案
*.log                  # 日誌檔案

# 但以下內容應該提交：
.kiro/steering/        # 專案知識共享
.kiro/hooks/           # Hook 設定共享
.kiro/specs/           # 規格說明共享
```

### **如何進行定期安全檢查？**

定期執行以下檢查：

```bash
# 檢查是否有敏感資訊洩漏到 Git 歷史
git log --all --full-history -- .kiro/settings.json

# 其他檢查項目：
# - 審查受信任命令清單
# - 定期清理不需要的 API 金鑰
# - 監控異常的網路活動
```

## **企業級安全功能**

### **Kiro 企業版提供哪些額外的安全功能？**

如果您需要更進階的安全功能，[Kiro 企業版](../kiro-enterprise/) 提供：

- **防火牆白名單設定** - 為企業網路環境設定存取控制
- **VPC Endpoint 支援** - 資料流量不出公網的內網存取
- **聊天稽核功能** - 完整的對話記錄和稽核追蹤
- **SSO 整合** - 與企業身分管理系統無縫整合

詳見 [Kiro 企業版文件](../kiro-enterprise/) 了解更多資訊。
