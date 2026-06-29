---
title: "自訂智慧代理"
weight: 15
bookToc: true
---

# **自訂智慧代理**

Kiro CLI 支援建立自訂智慧代理，讓您可以根據特定需求設定專門的開發助手。透過 JSON 設定檔，您可以定制 Agent 的行為、權限和預設上下文。

## **設定檔位置**

Kiro CLI 會把智慧代理的設定檔儲存在 `~/.kiro/agents/*.json` 路徑中，您可以建立不同的 JSON 設定檔，從而建立自訂的智慧代理出來。

完整設定可以參考[官方文件](https://kiro.dev/docs/cli/custom-agents/)

## **📚 自動上下文**

在自訂智慧代理的設定檔中，可以設定 resource 欄位，設定一些檔案路徑，這些路徑的檔案會被自動包含在聊天中。

### **預設設定**

```json
{
  "resources": [
    "file://README.md",
    "file://AGENTS.md",
    "file://AmazonQ.md",
    "file://.amazonq/rules/**/*.md",
    "file://.kiro/steering/**/*.md",
    "file://~/.kiro/steering/**/*.md"
  ]
}
```

所以每次和 CLI 聊天時，它都會自動包含 README 檔案，對已有的專案有所了解。

詳見[官方文件](https://kiro.dev/docs/cli/steering/)

## **🔧 工具管理**

### **🚫 停用不需要的工具**

自訂智慧代理的設定檔中，可以設定 tools 欄位，包含了啟用哪些 tools。如果您有不想使用的 tools，可以從列表中刪除。

```json
{
  "tools": [
    "fs_read",
    "fs_write",
    "execute_bash",
    "@git",
    "@rust-analyzer/check_code"
  ]
}
```

比如，如果不希望 AI 修改本地檔案，可以停用 fs_write 工具和 execute_bash 工具。

詳見[官方文件](https://kiro.dev/docs/cli/custom-agents/configuration-reference/#tools-field)

### **✅ 信任工具的執行**

自訂智慧代理的設定檔中，可以設定 allowedTools 欄位，包含了信任哪些 tools

```json
{
  "allowedTools": [
    "fs_read",
    "fs_*",
    "@git/git_status",
    "@server/read_*",
    "@fetch"
  ]
}
```

如果您希望預設信任一些內建工具或 MCP 工具，可以在這裡設定。

詳見[官方文件](https://kiro.dev/docs/cli/custom-agents/configuration-reference/#allowedtools-field)

## **🔒 安全設定**

### **限制檔案路徑的存取**

內建的工具可以設定一些功能細節，比如 fs_read/fs_write 可以限制檔案路徑的存取。

這些可以在自訂智慧代理的設定檔中設定 ToolsSettings 欄位來實現

```json
{
  "toolsSettings": {
    "fs_write": {
      "allowedPaths": ["~/**"]
    }
  }
}
```

詳見[官方文件](https://kiro.dev/docs/cli/custom-agents/configuration-reference/#toolssettings-field)

## **使用自訂智慧代理**

### **建立新的智慧代理**

1. 在 `~/.kiro/agents/` 目錄下建立新的 JSON 檔案
2. 設定所需的欄位（resources、tools、allowedTools 等）
3. 使用 `/agent set-default --name <NAME>` 設定為預設智慧代理

### **管理智慧代理**

- 查看目前智慧代理：`/agent list`
- 切換智慧代理：`/agent switch <NAME>`
- 重設為預設智慧代理：`kiro-cli settings --delete chat.defaultAgent`

## **最佳實踐**

### **專案特定的智慧代理**

為不同類型的專案建立專門的智慧代理：

- **前端專案**：包含 package.json、tsconfig.json 等前端相關檔案
- **後端專案**：包含 API 文件、資料庫設定等後端相關檔案
- **維運專案**：限制寫入權限，專注於查詢和診斷

### **安全考量**

- 對於生產環境，建議停用 `fs_write` 和 `execute_bash` 工具
- 使用 `allowedPaths` 限制檔案存取範圍
- 定期審查和更新智慧代理設定
