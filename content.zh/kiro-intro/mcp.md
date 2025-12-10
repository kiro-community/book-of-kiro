---
title: "配置 MCP"
weight: 30
---

# **配置 MCP**

## **MCP 是什么？为什么这么厉害？**

MCP 是给 Kiro 的 AI 加上“特殊技能”的机制。比如：

- 能够搜索 AWS 官方文档
- 能够操作 GitHub 仓库
- 能够进行网页搜索
- 能够连接数据库
  这些能力就像插件一样，可以随时添加进来，让 AI 变得更加万能，帮你搞定各种开发任务！

## **主要 MCP 服务器的设置与使用方法**

### **1. AWS Documentation Server — 访问 AWS 官方文档**

```JSON
// 追加到 .kiro/settings/mcp.json

{
  "mcpServers": {
    "aws-docs": {
      "command": "uvx",
      "args": ["awslabs.aws-documentation-mcp-server@latest"],
      "env": {
        "FASTMCP_LOG_LEVEL": "ERROR"  // 日志级别设为最小，减少输出
      },
      "disabled": false,
      "autoApprove": [
        "mcp_aws_docs_search_documentation",  // 搜索请求自动批准
        "mcp_aws_docs_read_documentation"     // 读取请求自动批准
      ]
    }
  }
}
```

实际使用示例：

```py
# 只需在聊天中提问
"S3 的生命周期策略是什么？"
"Lambda 函数的冷启动如何优化？"
"DynamoDB 分区键设计的最佳实践有哪些？"

# Kiro 会自动搜索 AWS 官方文档并回答
```

必要的准备工作：

```sh
# 安装 uv（首次使用时执行）
curl -LsSf https://astral.sh/uv/install.sh | sh

# 需要 Python 3.10 及以上版本
uv python install 3.10
```

### 2. **GitHub MCP 服务器 — 与 GitHub 的联动**

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

实际使用示例：

```py
# 获取仓库信息
"告诉我 facebook/react 仓库的最新发布信息"

# 代码搜索
"帮我在 tensorflow/tensorflow 仓库里找 conv2d 的实现"

# 创建 Issue
"帮我为这个 bug 创建一个 Issue"

# 创建 PR
"从 feature/login 分支向 main 分支创建一个 PR"

```

GitHub 令牌的创建方法：

1. 进入 GitHub → 设置（Settings）→ 开发者设置（Developer settings）
2. 选择个人访问令牌（Personal access tokens）→ 生成新令牌（Generate new token）
3. 需要的权限：repo，user
4. 设置环境变量：export GITHUB_TOKEN="ghp_xxxx"

### 3. **Web Search 服务器 — 搜索最新信息**

```JSON
{
  "mcpServers": {
    "web-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-bravesearch"],
      "env": {
        "BRAVE_API_KEY": "${BRAVE_API_KEY}"
      },
      "autoApprove": ["brave_search"]  // 搜索自动执行
    }
  }
}

```

实际使用示例：

```py
# 最新技术资讯
"帮我搜索一下 React 19 的新功能"

# 故障排查
"调查一下 Next.js 14 出现 hydration error 的原因"

# 新闻动态
"帮我总结一下本周 JavaScript 领域的新闻"

```

Brave Search API 密钥获取方法：

1. 访问 https://brave.com/search/api/
2. 注册免费套餐（每月免费额度 5000 次查询）
3. 将 API 密钥设置到环境变量中：

## **自定义 MCP 服务器的创建**

你也可以打造专属于自己的 MCP 服务器！<br>
比如，连接公司内部 API 的专用服务器：

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

// 工具定义
server.setRequestHandler('tools/list', async () => ({
  tools: [
    {
      name: 'search_company_docs',
      description: '搜索公司内部文档',
      inputSchema: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description: '搜索关键词'
          },
          department: {
            type: 'string',
            enum: ['engineering', 'design', 'marketing'],
            description: '按部门筛选'
          }
        },
        required: ['query']
      }
    },
    {
      name: 'get_employee_info',
      description: '获取员工信息',
      inputSchema: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: '员工邮箱地址'
          }
        },
        required: ['email']
      }
    }
  ]
}));

// 工具实现
server.setRequestHandler('tools/call', async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case 'search_company_docs':
      // 实际搜索处理
      const results = await searchInternalDocs(args.query, args.department);
      return {
        content: [{
          type: 'text',
          text: `搜索结果:\n${results.map(r => `- ${r.title}: ${r.url}`).join('\n')}`
        }]
      };

    case 'get_employee_info':
      // 获取员工信息
      const info = await getEmployeeInfo(args.email);
      return {
        content: [{
          type: 'text',
          text: `员工信息:\n姓名: ${info.name}\n部门: ${info.department}\n内线: ${info.extension}`
        }]
      };

    default:
      throw new Error(`未知的工具名称: ${name}`);
  }
});

// 启动服务器
const transport = new StdioServerTransport();
await server.connect(transport);

```

添加到配置中：

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

## **MCP 服务器调试**

当运行不顺利时的故障排查方法：

```BASH
# 1. 查看 MCP 日志
打开 Kiro 面板 → 输出（Output）→ "Kiro - MCP Logs"

# 2. 检查服务器状态
在聊天窗口执行 `/mcp`

# 3. 手动运行服务器进行测试
node ./mcp-servers/my-server.js

# 4. 检查环境变量
echo $GITHUB_TOKEN
echo $BRAVE_API_KEY

# 5. 增加超时时间
"timeout": 30000  # 设置为 30 秒

```
