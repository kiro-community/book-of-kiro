---
title: "安装与介绍"
weight: 10
bookToc: true
---

# **Kiro CLI 安装与介绍**

Kiro CLI 是 Kiro 平台的命令行组件，提供高度交互式的终端编程体验。它支持自定义 Agent、复杂代码库功能构建、工作流程自动化和精确的错误分析。

## **安装 Kiro CLI**

在 macOS 和 Linux 系统上安装：

```bash
curl -fsSL https://cli.kiro.dev/install | bash
```

## **Kiro CLI 的功能介绍**

### **💬 开始聊天**

登录后，直接使用 `kiro-cli` 命令即可开始聊天（`kiro-cli` 是 `kiro-cli chat` 命令的缩写）。

您可以使用 `kiro-cli chat --help` 来查看额外的参数。

进入聊天后，您可以使用 `/help` 查看会话中的命令。下文中所有以 `/` 开头的指令都是在会话中执行的。

### **📁 引用文件或文件夹**

在聊天窗口中，文件名会有自动补全的效果，您可以按下 Tab 来进行路径自动补全。

只要告诉 Agent 需要读取的文件路径，Agent 就会自动读取文件或文件夹中的信息。

除了手动引用，您还可以使用自定义智能体来设置 Agent 默认读取的文件。

### **⏹️ 打断 Agent**

在 Agent 工作的过程中可以随时使用 Ctrl+C 或者 Ctrl+D 来打断 Agent 的工作。

### **💾 保存会话和加载会话**

使用 `/save xxx` 来保存会话，使用 `/load xxx.json` 来加载会话。

### **🔄 恢复会话**

如果您忘记保存会话，希望能够恢复会话，可以使用 `kiro-cli chat --resume` 来恢复在**当前文件夹**的上一次会话。

### **📝 上下文管理**

您可以使用 `/usage` 查看当前上下文使用情况，使用 `/compact` 来压缩上下文（如果会话超出上下文，Kiro CLI 也会自动压缩），使用 `/clear` 清空上下文。

### **🔧 MCP 与工具**

可以使用 `/mcp` 查看当前启用的 MCP 服务器，使用 `/tools` 查看目前加载了哪些工具，使用 `/prompts` 查看加载了哪些提示词。

### **🚪 退出聊天**

以下任意方式都可以退出聊天：

- 连续按下两次 Ctrl+C
- 连续按下两次 Ctrl+D
- 输入 `/quit`
- 输入 `/exit`

