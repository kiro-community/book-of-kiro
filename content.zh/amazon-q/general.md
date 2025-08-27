---
title: "一般性问题"
weight: 50
bookToc: true
---

{{% hint info %}}
本文档涵盖 Amazon Q Developer 的一般性问题、功能性问题和价格相关问题。
{{% /hint %}}

## **❓ 一般性问题**

### **❓ Q. 使用什么模型？**

不同的功能会使用不同的模型：

- **CLI**: 目前支持 Claude Sonnet 3.5、3.7、4
- **IDE 插件 中的 Agentic Coding**: 目前支持 Claude Sonnet 3.7 和 4
- **IDE 插件 中的 inline suggestion**: 使用 AWS 自己训练的私有模型

### **❓ Q. 是否支持模型选择？**

支持。用户可以在 IDE Plugin 或者 CLI 中选择使用不同的模型，目前支持 Anthropic Claude 系列的模型。

### **❓ Q. 有没有 API 的调用方式？**

暂时没有。有两种功能方式：

1. **使用 [Strands SDK](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjE7-SopZuPAxXExDgGHfN9GgoQFnoECAkQAQ&url=https%3A%2F%2Fstrandsagents.com%2Flatest%2F&usg=AOvVaw2mh9JxMjfarfKN-OGfvxn2&opi=89978449) 来构建类似的 Agent** - 按 token 收取费用。
2. **将 Q Developer CLI 运行于虚拟机或者容器中** - 触发运行，请参考[相关博客](https://aws.amazon.com/cn/blogs/china/using-amazon-q-developer-to-build-an-enterprise-automated-code-review-process/)

### **❓ Q. 是否支持中文？**

支持中文交互，包括使用中文回复、生成中文代码和注释等。目前界面上的元素不支持中文。如果偶尔使用了英文回复，可以通过提示词告诉 AI 使用中文回复。此外，建议通过在当前目录的 `.amazonq/rules/` 目录下创建项目规则文件的方式，引导 Q Developer 输出中文。

**示例 rule 文件：Instruction.md**

```markdown
# Instruction

- 永远使用中文回复
- 代码注释使用中文
```

### **❓ Q. 一个 Pro tier 账号可以登陆多个设备吗？**

可以。暂时没有限制设备数量。

### **❓ Q. 如何确认当前使用的是 Pro Tier 还是 Free Tier？**

- **Q Developer IDE Plugin 中**: 您可以在登出按钮处查看登录状态
- **Terminal 中**: 可以使用 `q whoami` 来确认登录状态

## **⚙️ 功能性问题**

### **❓ Q. 是否支持 MCP？**

IDE 插件和 Q CLI 都支持。IDE 插件可以在聊天面板右上角配置 MCP Server，目前没有 MCP marketplace。两者的具体配置手册请[查看文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/qdev-mcp.html)。

### **❓ Q. 支持哪些 MCP Transport？**

CLI 目前仅支持 stdio transport。IDE 插件支持 stdio 和 streamable HTTP，不支持 SSE。

### **❓ Q. 是否支持知识库？**

建议使用 Amazon Bedrock Knowledge Base 搭建知识库或自建知识库。Amazon Q Developer 可以通过 [Bedrock Knowledge Base Retrieval MCP](https://github.com/awslabs/mcp/blob/main/src/bedrock-kb-retrieval-mcp-server) 接入 Amazon Bedrock Knowledge Base。如果您有自己的知识库，也可以通过 MCP 进行访问和集成。

### **❓ Q. 是否支持图片？**

CLI 和 IDE 插件都支持将图片加入上下文。

### **❓ Q. 是否支持 Rules？**

IDE 插件和 Q CLI 都支持。目录为 `.amazonq/rules/**/*.md`。任何放置在 `.amazonq/rules` 下的 Markdown 文件都会自动作为上下文加载到对话中。请[参考文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/context-project-rules.html)。

### **❓ Q. Agentic Coding 上下文大小是多少？**

上下文大小取决于模型的上下文大小，Claude 系列模型为 200K。

## **💰 价格问题**

### **❓ Q. $19/月/人的订阅费用之外还有哪些费用？**

Amazon Q Developer 采用 $19/月/人的固定订阅模式，包含所有核心功能。

{{% hint info %}}
Java 代码升级可能会产生额外费用，关于 Java 代码升级的费用详情，请参考 [Java 升级](../java-upgrade/) 章节。
{{% /hint %}}

### **❓ Q. 如果在月中开始订阅 Pro tier，会收取整月的费用吗？**

不会，会根据当月剩余天数收取费用。详情请看定价文档。

### **❓ Q. 如果在月中取消 Pro tier，到月底前还能使用吗？会收取整月的费用吗？**

可以继续使用到月底。费用计算：

- **月初订阅**: 收取整月费用
- **月中订阅**: 收取订阅开始到月底的费用

详情请看定价文档。
