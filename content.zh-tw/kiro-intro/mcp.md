---
title: "設定 MCP"
weight: 30
---

# **設定 MCP**

## **MCP 是什麼？為什麼這麼厲害？**

MCP 是給 Kiro 的 AI 加上“特殊技能”的機制。比如：

- 能夠搜尋 AWS 官方文件
- 能夠操作 GitHub 儲存庫
- 能夠進行網頁搜尋
- 能夠連線資料庫
  這些能力就像外掛一樣，可以隨時新增進來，讓 AI 變得更加萬能，幫你搞定各種開發任務！

## **主要 MCP 伺服器的設定與使用方法**

### **1. AWS Documentation Server — 訪問 AWS 官方文件**

```JSON
// 追加到 .kiro/settings/mcp.json

{
  "mcpServers": {
    "aws-docs": {
      "command": "uvx",
      "args": ["awslabs.aws-documentation-mcp-server@latest"],
      "env": {
        "FASTMCP_LOG_LEVEL": "ERROR"  // 日誌級別設為最小，減少輸出
      },
      "disabled": false,
      "autoApprove": [
        "mcp_aws_docs_search_documentation",  // 搜尋請求自動批准
        "mcp_aws_docs_read_documentation"     // 讀取請求自動批准
      ]
    }
  }
}
```

實際使用示例：

```py
# 只需在聊天中提問
"S3 的生命週期策略是什麼？"
"Lambda 函式的冷啟動如何最佳化？"
"DynamoDB partition key 設計的最佳實踐有哪些？"

# Kiro 會自動搜尋 AWS 官方文件並回答
```

必要的準備工作：

```sh
# 安裝 uv（首次使用時執行）
curl -LsSf https://astral.sh/uv/install.sh | sh

# 需要 Python 3.10 及以上版本
uv python install 3.10
```

### 2. **GitHub MCP 伺服器 — 與 GitHub 的聯動**

```JSON
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}"
      }
    }
  }
}

```

實際使用示例：

```py
# 獲取儲存庫資訊
"告訴我 facebook/react 儲存庫的最新發布資訊"

# 程式碼搜尋
"幫我在 tensorflow/tensorflow 儲存庫裡找 conv2d 的實作"

# 建立 Issue
"幫我為這個 bug 建立一個 Issue"

# 建立 PR
"從 feature/login 分支向 main 分支建立一個 PR"

```

GitHub 權杖的建立方法：

1. 進入 GitHub → 設定（Settings）→ 開發者設定（Developer settings）
2. 選擇個人訪問權杖（Personal access tokens）→ 生成新權杖（Generate new token）
3. 需要的許可權：repo，user
4. 設定環境變數：export GITHUB_TOKEN="ghp_xxxx"

### 3. **Web Search 伺服器 — 搜尋最新資訊**

```JSON
{
  "mcpServers": {
    "web-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-bravesearch"],
      "env": {
        "BRAVE_API_KEY": "${BRAVE_API_KEY}"
      },
      "autoApprove": ["brave_search"]  // 搜尋自動執行
    }
  }
}

```

實際使用示例：

```py
# 最新技術資訊
"幫我搜尋一下 React 19 的新功能"

# 故障排查
"調查一下 Next.js 14 出現 hydration error 的原因"

# 新聞動態
"幫我總結一下本週 JavaScript 領域的新聞"

```

Brave Search API 金鑰獲取方法：

1. 訪問 https://brave.com/search/api/
2. 註冊免費套餐（每月免費額度 5000 次查詢）
3. 將 API 金鑰設定到環境變數中：

## **自定義 MCP 伺服器的建立**

你也可以打造專屬於自己的 MCP 伺服器！<br>
比如，連線公司內部 API 的專用伺服器：

```JAVASCRIPT
// my-company-mcp-server.js

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server(
  {
    name: 'my-company-tools',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// 工具定義
server.setRequestHandler('tools/list', async () => ({
  tools: [
    {
      name: 'search_company_docs',
      description: '搜尋公司內部文件',
      inputSchema: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description: '搜尋關鍵詞'
          },
          department: {
            type: 'string',
            enum: ['engineering', 'design', 'marketing'],
            description: '按部門篩選'
          }
        },
        required: ['query']
      }
    },
    {
      name: 'get_employee_info',
      description: '獲取員工資訊',
      inputSchema: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: '員工郵箱地址'
          }
        },
        required: ['email']
      }
    }
  ]
}));

// 工具實作
server.setRequestHandler('tools/call', async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case 'search_company_docs':
      // 實際搜尋處理
      const results = await searchInternalDocs(args.query, args.department);
      return {
        content: [{
          type: 'text',
          text: `搜尋結果:\n${results.map(r => `- ${r.title}: ${r.url}`).join('\n')}`
        }]
      };

    case 'get_employee_info':
      // 獲取員工資訊
      const info = await getEmployeeInfo(args.email);
      return {
        content: [{
          type: 'text',
          text: `員工資訊:\n姓名: ${info.name}\n部門: ${info.department}\n內線: ${info.extension}`
        }]
      };

    default:
      throw new Error(`未知的工具名稱: ${name}`);
  }
});

// 啟動伺服器
const transport = new StdioServerTransport();
await server.connect(transport);

```

新增到配置中：

```json
{
  "mcpServers": {
    "company-tools": {
      "command": "node",
      "args": ["./mcp-servers/my-company-mcp-server.js"],
      "env": {
        "COMPANY_API_KEY": "${COMPANY_API_KEY}"
      }
    }
  }
}
```

## **MCP 伺服器除錯**

當執行不順利時的故障排查方法：

```BASH
# 1. 檢視 MCP 日誌
開啟 Kiro 面板 → 輸出（Output）→ "Kiro - MCP Logs"

# 2. 檢查伺服器狀態
在聊天視窗執行 `/mcp`

# 3. 手動執行伺服器進行測試
node ./mcp-servers/my-server.js

# 4. 檢查環境變數
echo $GITHUB_TOKEN
echo $BRAVE_API_KEY

# 5. 增加超時時間
"timeout": 30000  # 設定為 30 秒

```
