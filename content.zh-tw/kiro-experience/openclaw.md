---
title: "Kiro × OpenClaw 整合指南"
weight: 27
bookToc: true
---

# Kiro × OpenClaw 整合指南

[OpenClaw](https://github.com/openclaw/openclaw) 是一個開源 AI Agent 執行環境，擅長多平台訊息處理、定時任務、裝置控制和外部系統整合。Kiro 擅長程式碼產生、架構設計和 AWS 雲維運。兩者透過 ACP + MCP 雙協議實現雙向協作，各取所長。

| 方向 | 協議 | 核心價值 |
|------|------|---------|
| **OpenClaw → Kiro** | ACP | OpenClaw 獲得「深度思考和編碼」的能力 |
| **Kiro → OpenClaw** | MCP | Kiro 獲得「觸達外部世界」的能力 |

---

## 一、OpenClaw 呼叫 Kiro

當 OpenClaw 需要完成程式碼產生、架構分析、AWS CDK 範本等複雜編碼任務時，可以將任務委派給 Kiro。

### 1. 透過 acpx 呼叫（建議）

OpenClaw 的 [acpx](https://github.com/openclaw/acpx)（ACP 命令列用戶端）已內建支援 Kiro CLI 作為 coding agent（adapter: `kiro-cli-chat acp`），與 Codex、Claude Code、Gemini 等並列為 built-in agent。

**安裝：**

```bash
npm install -g acpx@latest
# 或無需安裝直接用
npx acpx@latest kiro 'fix the failing tests'
```

**常用命令：**

```bash
# 單次執行（one-shot）
acpx kiro exec 'summarize this repo'

# 持久工作階段（多輪對話）
acpx kiro sessions new
acpx kiro 'refactor the auth module'
acpx kiro 'now add unit tests'

# 命名工作階段（並行工作流程）
acpx kiro -s backend 'implement token pagination'
acpx kiro -s frontend 'add dark mode support'

# 工作階段管理
acpx kiro status
acpx kiro sessions list
acpx kiro sessions history
```

**acpx 核心特性：**
- **持久工作階段**：多輪對話跨呼叫保持，按 repo 隔離
- **命名工作階段**：同一 repo 下並行多個工作流程
- **Prompt 佇列**：前一個 prompt 還在跑時，新 prompt 自動排隊
- **當機恢復**：agent 程序掛掉後自動重連並恢復工作階段
- **結構化輸出**：typed ACP 訊息（thinking、tool calls、diffs），告別 ANSI 解析

### 2. 透過 ACP 協議直接呼叫

不使用 acpx 時，也可以直接啟動 `kiro-cli acp` 子程序，透過 stdin/stdout 的 JSON-RPC 2.0 進行通訊：

```python
import subprocess, json

proc = subprocess.Popen(
    ["kiro-cli", "acp"],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE
)

# JSON-RPC 握手
request = {
    "jsonrpc": "2.0",
    "id": 0,
    "method": "initialize",
    "params": {
        "protocolVersion": 1,
        "clientCapabilities": {
            "fs": {"readTextFile": True, "writeTextFile": True},
            "terminal": True
        },
        "clientInfo": {"name": "openclaw-bridge", "version": "1.0.0"}
    }
}
```

適合需要自訂控制流程的場景。詳見 [Kiro ACP 官方文件](https://kiro.dev/docs/cli/acp/)。

### 3. 透過 exec 工具呼叫（PTY 模式）

OpenClaw 內建的 `exec` 工具可以直接啟動 `kiro-cli chat` 作為 coding agent。只需告訴 OpenClaw 使用以下方式：

```bash
# 基本呼叫
bash pty:true workdir:~/project command:"kiro-cli chat 'Your task'"

# 自動批准工具呼叫（類似 --yolo）
bash pty:true workdir:~/project command:"kiro-cli chat -a 'Refactor the auth module'"
```

關鍵點：
- `pty:true` 必須設定，kiro-cli 需要真實 TTY 環境
- `workdir` 指定專案目錄，Kiro 會以此為上下文
- `-a` 參數自動批准所有工具呼叫，適合自動化場景

社群也有封裝好的 [openclaw-kirocli-coding-agent](https://github.com/terrificdm/openclaw-kirocli-coding-agent) Skill 可直接使用，OpenClaw 安裝該 Skill 後即可自動以正確方式呼叫 Kiro CLI。

### 4. 透過 acp-link 接入飛書 IM

[acp-link](https://github.com/xufanglin/acp-link) 是一個將飛書與 Kiro CLI 透過 ACP 協議連接的橋接服務，可以讓團隊在飛書中直接與 Kiro Agent 互動。

**核心能力：**
- 飛書話題（Thread）自動映射到 ACP Session，上下文乾淨連貫
- 串流回應即時更新為飛書訊息卡片
- 工具呼叫狀態同步展示（如「正在搜尋文件……」）
- 內嵌 MCP Server，Agent 可反向操作飛書（如傳送檔案）
- 支援 Custom Agent，可為不同場景客製 Agent 行為

**設定範例（config.toml）：**

```toml
[feishu]
app_id = "cli_xxxxxxx"
app_secret = "xxxxxxxxx"

[kiro]
cmd = "kiro-cli"
args = ["acp", "--agent", "code-review-agent"]

# 程序池大小，預設 4
# pool_size = 4

[mcp]
# HTTP 監聽連接埠，預設 9800
# port = 9800
```

**典型場景：**
- **Code Review Agent**：團隊成員在飛書話題中 @機器人，Agent 自動分析專案程式碼並輸出結構化審查報告
- **通用聊天助理**：作為 OpenClaw 的輕量替代，利用 Kiro 內建的 `web_fetch`、`shell` 等工具完成各類任務

詳見部落格：[使用 Kiro CLI 和 Agent Client Protocol 建構飛書 AI 聊天機器人](https://aws.amazon.com/cn/blogs/china/using-kiro-cli-agent-client-protocol-build-ai-chat/)

---

## 二、Kiro 呼叫 OpenClaw

當 Kiro 在編碼過程中需要傳送訊息、讀取外部資料、觸發裝置操作等，可以透過 MCP 呼叫 OpenClaw 暴露的工具。

### MCP 設定

在 `.kiro/settings/mcp.json` 中新增：

```json
{
  "mcpServers": {
    "openclaw": {
      "command": "npx",
      "args": ["-y", "openclaw-mcp@latest"],
      "env": {
        "OPENCLAW_GATEWAY": "https://gw.openclaw.ai",
        "OPENCLAW_TOKEN": "${OPENCLAW_TOKEN}"
      },
      "transportType": "stdio"
    }
  }
}
```

### OpenClaw MCP Server 暴露的工具

| 類型 | 工具 | 說明 |
|------|------|------|
| 同步 | `openclaw_chat` | 傳送訊息並取得回應（萬能入口） |
| 同步 | `openclaw_status` | 取得 Gateway 狀態和健康資訊 |
| 同步 | `openclaw_instances` | 列出所有設定的 OpenClaw 實例 |
| 非同步 | `openclaw_chat_async` | 非同步傳送訊息，立即回傳 task_id |
| 非同步 | `openclaw_task_status` | 查詢非同步任務狀態 |
| 非同步 | `openclaw_task_list` | 列出所有任務，可按狀態/session 篩選 |

`openclaw_chat` 是一個「萬能入口」——透過自然語言，Kiro 可以讓 OpenClaw 執行其內部的所有 40+ 工具能力（發飛書訊息、讀文件、搜尋、操控裝置、管理定時任務等）。

---

## 實戰場景

### Spec 驅動的非同步編碼

1. 在 Kiro IDE 中使用 Spec 模式完成需求分析和架構設計（Requirements → Design → Tasks）
2. 透過 MCP 非同步介面（`openclaw_chat_async`）將任務交給 OpenClaw 的編碼子智慧代理
3. OpenClaw 基於 Spec 檔案自主完成程式碼實作、單元測試、Git commit
4. Kiro 透過 `openclaw_task_status` 輪詢進度，完成後取得儲存庫位址

**Kiro = 架構師（思考+設計），OpenClaw = 工程師（編碼+交付）**

### 架構評審自動化

1. 客戶在飛書傳送架構遷移需求
2. OpenClaw 提取關鍵資訊（當前架構、目標架構、合規要求、SLA）
3. 透過 ACP 委派 Kiro 產生 Well-Architected 評估 + CDK 範本
4. OpenClaw 將完整報告發回飛書群

### 智慧維運回應

1. OpenClaw 偵測到 P1 告警，推送飛書維運群
2. 透過 ACP 委派 Kiro 分析 CloudWatch Logs + X-Ray
3. Kiro 定位根因，產生修復 PR 和 EKS 擴容變更集
4. OpenClaw 執行修復並多通道推送事故報告

---

## 參考資料

**官方文件：**
- [Kiro ACP 官方文件](https://kiro.dev/docs/cli/acp/)
- [acpx GitHub（內建 Kiro 支援）](https://github.com/openclaw/acpx)
- [OpenClaw MCP Server](https://github.com/freema/openclaw-mcp)
- [OpenClaw 官方文件](https://docs.openclaw.ai)

**技術部落格：**
- [當 Kiro 遇上 OpenClaw：AI Agent 雙向協作的實踐探索](https://aws.amazon.com/cn/blogs/china/kiro-openclaw-ai-agent-practice-explore/)
- [將 Kiro CLI 封裝為 REST API：雙通道架構實踐](https://aws.amazon.com/cn/blogs/china/kiro-cli-rest-api-architecture-practice/)
- [使用 Kiro CLI 和 ACP 建構飛書 AI 聊天機器人](https://aws.amazon.com/cn/blogs/china/using-kiro-cli-agent-client-protocol-build-ai-chat/)
- [讓 Kiro 和 Claude Code 回應 IM 訊息：用 ACP Bridge 打造非同步 AI 程式設計工作流程](https://aws.amazon.com/cn/blogs/china/enable-kiro-and-claude-code-for-im-with-acp-bridge-async-ai-workflow/)
- [把 Kiro CLI 當作 Agent SDK：一鍵訂閱即可建構你的 Agent 應用](https://aws.amazon.com/cn/blogs/china/use-kiro-cli-as-agent-sdk-build-your-agent-app-with-one-click-subscription/)
- [Integrate Kiro CLI into your AI Agent via ACP](https://dev.to/aws-builders/integrate-kiro-cli-into-your-ai-agent-via-acp-10jn)
