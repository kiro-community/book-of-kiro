---
title: "CLI 使用技巧"
weight: 30
bookToc: true
---

## **⌨️ Q Developer CLI 的使用**

### **💬 开始聊天**

登录后，直接使用 `q` 命令即可开始聊天（`q` 是 `q chat` 命令的缩写）。

您可以使用 `q chat --help` 来查看额外的参数。

进入聊天后，您可以使用 `/help` 查看会话中的命令。下文中所有以 `/` 开头的指令都是在会话中执行的。

### **📁 引用文件或文件夹**

在聊天窗口中，文件名会有自动补全的效果，您可以按下 Tab 来进行路径自动补全。

只要告诉 Agent 需要读取的文件路径，Agent 就会自动读取文件或文件夹中的信息。

除了手动引用，您还可以使用 [自定义智能体](#自定义智能体) 来设置 Agent 默认读取的文件。

### **⏹️ 打断 Agent**

在 Agent 工作的过程中可以随时使用 Ctrl+C 或者 Ctrl+D 来打断 Agent 的工作。

### **💾 保存会话和加载会话**

使用 `/save xxx` 来保存会话，使用 `/load xxx.json` 来加载会话。

### **🔄 恢复会话**

如果您忘记保存会话，希望能够恢复会话，可以使用 `q chat --resume` 来恢复在**当前文件夹**的上一次会话。

### **📝 上下文管理**

您可以使用 `/usage` 查看当前上下文使用情况，使用 `/compact` 来压缩上下文（如果会话超出上下文，Q CLI 也会自动压缩），使用 `/clear` 清空上下文。

### **🔧 MCP 与工具**

可以使用 `/mcp` 查看当前启用的 MCP 服务器，使用 `/tools` 查看目前加载了哪些工具，使用 `/prompts` 查看加载了哪些提示词。

### **🚪 退出聊天**

以下任意方式都可以退出聊天：

- 连续按下两次 Ctrl+C
- 连续按下两次 Ctrl+D
- 输入 `/quit`
- 输入 `/exit`

## **🤖 自定义智能体**

Q CLI 会把智能体的配置文件保存在 `~/.aws/amazonq/cli-agents/*.json` 路径中，您可以创建不同的 JSON 配置文件，从而创建自定义的智能体出来。

完整配置可以参考[官方文档](https://github.com/aws/amazon-q-developer-cli/blob/5bf5afa782bad244245e0f4a29da84e3e85063d0/docs/agent-file-locations.md)

### **📚 自动上下文**

在自定义智能体的配置文件中，可以设置 resource 字段，设置一些文件路径，这些路径的文件会被自动包含在聊天中。

默认值：

```json
{
  "resources": [
    "file://AmazonQ.md",
    "file://README.md",
    "file://.amazonq/rules/**/*.md"
  ]
}
```

所以每次和 CLI 聊天时，它都会自动包含 README 文件，对已有的项目有所了解。

详见[官方文档](https://github.com/aws/amazon-q-developer-cli/blob/5bf5afa782bad244245e0f4a29da84e3e85063d0/docs/agent-format.md#resources-field)

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

详见[官方文档](https://github.com/aws/amazon-q-developer-cli/blob/5bf5afa782bad244245e0f4a29da84e3e85063d0/docs/agent-format.md#tools-field)

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

详见[官方文档](https://github.com/aws/amazon-q-developer-cli/blob/5bf5afa782bad244245e0f4a29da84e3e85063d0/docs/agent-format.md#allowedtools-field)

### **🔒 限制文件路径的访问**

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

详见[官方文档](https://github.com/aws/amazon-q-developer-cli/blob/5bf5afa782bad244245e0f4a29da84e3e85063d0/docs/agent-format.md#toolssettings-field)
