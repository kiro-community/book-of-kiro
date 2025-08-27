---
title: IDE 插件使用技巧
weight: 20
bookToc: true
---

## IDE 插件的使用

### 推荐的窗口布局

通常建议的布局为：左侧为管理区（如文件树），中间为代码编辑器，右侧为 AI 助手。

![](/book-of-kiro/images/q_dev/vscode-recommended-layout.png)

在 JetBrains IDE 中，Amazon Q 的聊天窗口默认在右侧。在 VSCode 中，默认的聊天窗口可能在左侧管理区中，您可以把它拖到右侧抽屉中。

### 使用智能体编程(Agentic Coding)

智能体编程是 Amazon Q 推荐的代码编辑方式，它能够通过自然语言下发任务，并自动进行文件读写，也可以在允许的情况下执行 shell 命令。

IDE 插件中，聊天窗口左下角的蓝色开关是智能体编程的开关，默认为开启状态。

![](/book-of-kiro/images/q_dev/vscode-agentic-coding.gif)

示例提示词：

- 帮我调研一下当前项目的后端鉴权是如何实现的
- 参考已有的单元测试，帮 XX 文件编写单元测试
- 给 XX 模块添加 XX 功能

如果您不希望 AI 自动修改文件或执行命令，可以关闭此开关，关闭后 AI 只会在聊天中回答文本和代码，不会直接对文件进行膝修改。

### 使用右键菜单快捷操作

**先选中一段代码**，然后可以使用右键菜单把代码发送到聊天窗口执行一些快捷操作，如 解释、优化、重构、修复 等

![](/book-of-kiro/images/q_dev/right-click-menu.gif)

需要注意：这里的快捷操作是针对一小段代码的修改，而非对整个项目的修改

### 引用文件、文件夹等额外上下文

方法 1：在聊天窗口中使用 @ 来引用额外的文件、文件夹等内容。您可以在输入 @ 之后继续输入文件名来进行文件过滤。

![](/book-of-kiro/images/q_dev/at-file-folder.gif)

方法 2：直接告诉 AI 文件名或路径，智能体能够主动读取文件来引用额外内容。

适用场景：

- 明确告知 AI 需要修改的文件
- 明确告知 AI 需要读取、参考的文件

详见[官方文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/ide-chat-context.html)。

### 保存常用提示词

在 @ 上下文中可以选择 Prompt 来保存或引用提示词。提示词会保存在 `~/.amazon/prompts/` 目录中。

![](/book-of-kiro/images/q_dev/saved-prompts.gif)

使用场景：将常用任务的提示词保存起来以便复用，例如：

- 检查代码风格
- 添加函数描述
- 生成 Git 提交信息
- 扫描安全问题

将你的“最佳实践”提示词也存储下来，方便随时调用。

### 指定代码规范

可以在当前目录的 `.amazonq/rules/` 目录下创建 markdown 文件，设置规则。这些文件会被自动包含在每次聊天中。详见[文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/context-project-rules.html)。

**示例：typescript.md**

```markdown
总是使用 TypeScript 而非 JavaScript。优先使用普通函数而非箭头函数。
```

{{% hint warning %}}
**注意**: 由于 LLM 可能丢失注意力，代码规范可能无法 100% 遵循，建议在代码审核阶段引入额外的检查。
{{% /hint %}}
