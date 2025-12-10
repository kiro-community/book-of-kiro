---
title: "自定义智能体"
weight: 15
bookToc: true
---

# **自定义智能体**

Kiro CLI 支持创建自定义智能体，让您可以根据特定需求配置专门的开发助手。通过 JSON 配置文件，您可以定制 Agent 的行为、权限和默认上下文。

## **配置文件位置**

Kiro CLI 会把智能体的配置文件保存在 `~/.kiro/agents/*.json` 路径中，您可以创建不同的 JSON 配置文件，从而创建自定义的智能体出来。

完整配置可以参考[官方文档](https://kiro.dev/docs/cli/custom-agents/)

## **📚 自动上下文**

在自定义智能体的配置文件中，可以设置 resource 字段，设置一些文件路径，这些路径的文件会被自动包含在聊天中。

### **默认配置**

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

所以每次和 CLI 聊天时，它都会自动包含 README 文件，对已有的项目有所了解。

详见[官方文档](https://kiro.dev/docs/cli/steering/)

## **🔧 工具管理**

### **🚫 禁用不需要的工具**

自定义智能体的配置文件中，可以设置 tools 字段，包含了启用哪些 tools。如果您有不想使用的 tools，可以从列表中删除。

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

比如，如果不希望 AI 修改本地文件，可以禁用 fs_write 工具和 execute_bash 工具。

详见[官方文档](https://kiro.dev/docs/cli/custom-agents/configuration-reference/#tools-field)

### **✅ 信任工具的执行**

自定义智能体的配置文件中，可以设置 allowedTools 字段，包含了信任哪些 tools

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

如果您希望默认信任一些内置工具或 MCP 工具，可以在这里配置。

详见[官方文档](https://kiro.dev/docs/cli/custom-agents/configuration-reference/#allowedtools-field)

## **🔒 安全配置**

### **限制文件路径的访问**

内置的工具可以配置一些功能细节，比如 fs_read/fs_write 可以限制文件路径的访问。

这些可以在自定义智能体的配置文件中设置 ToolsSettings 字段来实现

```json
{
  "toolsSettings": {
    "fs_write": {
      "allowedPaths": ["~/**"]
    }
  }
}
```

详见[官方文档](https://kiro.dev/docs/cli/custom-agents/configuration-reference/#toolssettings-field)

## **使用自定义智能体**

### **创建新的智能体**

1. 在 `~/.kiro/agents/` 目录下创建新的 JSON 文件
2. 配置所需的字段（resources、tools、allowedTools 等）
3. 使用 `/agent set-default --name <NAME>` 设置为默认智能体

### **管理智能体**

- 查看当前智能体：`/agent list`
- 切换智能体：`/agent switch <NAME>`
- 重置为默认智能体：`kiro-cli settings --delete chat.defaultAgent`

## **最佳实践**

### **项目特定的智能体**

为不同类型的项目创建专门的智能体：

- **前端项目**：包含 package.json、tsconfig.json 等前端相关文件
- **后端项目**：包含 API 文档、数据库配置等后端相关文件
- **运维项目**：限制写权限，专注于查询和诊断

### **安全考虑**

- 对于生产环境，建议禁用 `fs_write` 和 `execute_bash` 工具
- 使用 `allowedPaths` 限制文件访问范围
- 定期审查和更新智能体配置