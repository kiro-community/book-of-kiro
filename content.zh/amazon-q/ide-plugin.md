---
title: "Q Developer IDE 插件"
weight: 3
bookToc: true
---

{{% hint info %}}
本文档涵盖 Amazon Q Developer IDE 插件的安装、登录、使用和常见问题。
{{% /hint %}}

## IDE 插件的安装与登陆

### Q. 支持哪些主流的 IDE？

支持以下主流 IDE：

- Visual Studio Code
- JetBrains 全家桶（包括 Android Studio）
- Eclipse
- Visual Studio

### Q. 如何安装 IDE 插件？

在对应 IDE 插件市场搜索 "Amazon Q" 并安装即可。

**请确保您使用的 IDE 版本较新，因为老版本的 IDE 只能使用老版本插件，功能严重缺失**

![](/book-of-kiro/images/q_dev/vscode-install.png)

![](/book-of-kiro/images/q_dev/jetbrains-install.png)

### Q. 如何在 Android Studio 中安装插件？

直接安装 Amazon Q 插件后，在 Android Studio 中无法正常使用聊天面板。可以参考 [GitHub Issue](https://github.com/aws/aws-toolkit-jetbrains/issues/5048) 来修复，选一个带 JCEF 的 boot runtime。

![](/book-of-kiro/images/q_dev/android_studio.png)

### Q. Pro tier 用户如何登录 Q Developer IDE 插件？

1. 展开 Amazon Q 聊天面板
2. 对于付费用户，选择 "Company Account"，点击 Continue
   ![](/book-of-kiro/images/q_dev/company_account.png)
3. Start URL 和 Region 会由您的管理员提供，务必确保它们填写正确，然后点击 Continue
   ![](/book-of-kiro/images/q_dev/start_url.png)
4. 点击之后会打开一个浏览器页面，在浏览器中完成登录过程
5. 如果您对接了您企业的 SSO，则会跳转到您企业的 SSO 进行登录
6. 根据提示进行下一步，直到看到登陆成功的提示

## IDE 插件的使用

### Q. 有没有推荐的窗口布局？

通常建议的布局为：左侧为管理区（如文件树），中间为代码编辑器，右侧为 AI 助手。

![](/book-of-kiro/images/q_dev/vscode-recommended-layout.png)

在 JetBrains IDE 中，Amazon Q 的聊天窗口默认在右侧。在 VSCode 中，默认的聊天窗口可能在左侧管理区中，您可以把它拖到右侧抽屉中。

### Q. 如何使用智能体编程(Agentic Coding)？

智能体编程是 Amazon Q 推荐的代码编辑方式，它能够通过自然语言下发任务，并自动进行文件读写，也可以在允许的情况下执行 shell 命令。

IDE 插件中，聊天窗口左下角的蓝色开关是智能体编程的开关，默认为开启状态。

![](/book-of-kiro/images/q_dev/vscode-agentic-coding.gif)

示例提示词：

- 帮我调研一下当前项目的后端鉴权是如何实现的
- 参考已有的单元测试，帮 XX 文件编写单元测试
- 给 XX 模块添加 XX 功能

如果您不希望 AI 自动修改文件或执行命令，可以关闭此开关，关闭后 AI 只会在聊天中回答文本和代码，不会直接对文件进行膝修改。

### Q. 如何使用右键菜单快捷操作？

**先选中一段代码**，然后可以使用右键菜单把代码发送到聊天窗口执行一些快捷操作，如 解释、优化、重构、修复 等

![](/book-of-kiro/images/q_dev/right-click-menu.gif)

需要注意：这里的快捷操作是针对一小段代码的修改，而非对整个项目的修改

### Q. 如何让 AI 对整个代码库有所感知？

由于上下文窗口的限制，目前的编程助手无法把整个代码库放入上下文窗口（也不建议，会有注意力丢失）。但是可以使用 Local RAG 的方式来尝试索引本地代码库，AI 能够在本地对代码进行切片和向量化，以便根据用户的输入来使用语义检索相关的内容，不过会有额外的 CPU 和内存占用。

在 Amazon Q 插件中，您可以使用 @workspace 来引用整个代码库，AI 会根据输入的信息来检索相关的代码片段来回答问题。

![](/book-of-kiro/images/q_dev/at-workspace.gif)

需要注意：此功能第一次使用时需要花较长时间进行切片和建立索引，并会占用 CPU 和内存。

除此之外，因为智能体也能够根据语义来主动查询相关代码文件（查看文件树、基于文件名来查找相关文件、使用 shell 搜索关键字来查找相关文件），所以绝大多数场景下不使用 @workspace 也可以满足要求。

详见[官方文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/workspace-context.html)。

### Q. @workspace 可以修改代码库索引的大小吗？

可以。默认情况下 Index 代码库的大小为 250 MB，用户可以在 IDE 设置中手动修改大小。调整完之后，不会造成 CPU 的压力，但是会使用更多的内存。

### Q. 如何引用文件、文件夹等信息？

方法 1：在聊天窗口中使用 @ 来引用额外的文件、文件夹等内容。您可以在输入 @ 之后继续输入文件名来进行文件过滤。

![](/book-of-kiro/images/q_dev/at-file-folder.gif)

方法 2：直接告诉 AI 文件名或路径，智能体能够主动读取文件来引用额外内容。

适用场景：

- 明确告知 AI 需要修改的文件
- 明确告知 AI 需要读取、参考的文件

详见[官方文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/ide-chat-context.html)。

### Q. 能否保存常用提示词？

可以，在 @ 上下文中可以选择 Prompt 来保存或引用提示词。提示词会保存在 `~/.amazon/prompts/` 目录中。

![](/book-of-kiro/images/q_dev/saved-prompts.gif)

使用场景：将常用任务的提示词保存起来以便复用，例如：

- 检查代码风格
- 添加函数描述
- 生成 Git 提交信息
- 扫描安全问题

将你的“最佳实践”提示词也存储下来，方便随时调用。

### Q. 能否指定代码规范？

可以在当前目录的 `.amazonq/rules/` 目录下创建 markdown 文件，设置规则。这些文件会被自动包含在每次聊天中。详见[文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/context-project-rules.html)。

**示例：typescript.md**

```markdown
总是使用 TypeScript 而非 JavaScript。优先使用普通函数而非箭头函数。
```

{{% hint warning %}}
**注意**: 由于 LLM 可能丢失注意力，代码规范可能无法 100% 遵循，建议在代码审核阶段引入额外的检查。
{{% /hint %}}

<!-- ## Customization

### Q. Customization 能否学习代码规范？

Customization 功能是基于 RAG（检索增强生成）的。它能检索相关代码片段，但是无法学习代码规范。

### Q. 能否使用纯 markdown 文件的代码仓库来实现知识库的效果？

不能。根据 Q 的控制台的描述：

> Amazon Q Developer will consider markup files (.md, .mdx, .rst, .txt, .html, .htm, .xml) when creating the customization, but their sizes don't count toward the 2 MB requirement.

所以 markdown 会被做向量索引，但是不算代码，所以不能基于纯 markdown repo 构建知识库。markdown 只能作为代码库的补充，代码需要至少 2MB。

如需构建知识库，可使用 Amazon Bedrock Knowledge Base 配合 MCP 来实现。 -->

<!-- ### Q. 什么时候用 Inline Chat，什么时候用 Chat Panel？

- **Chat Panel**: 和 Q Developer 讨论问题，不希望直接修改文件时使用
- **Inline Chat**: 希望 Q Developer 直接基于 prompt 修改文件时使用 -->

### Q. 如何触发自动补全？

默认情况下自动补全是启用的状态，您在书写代码时会自动触发。您也可以使用快捷键 Alt+C (Windows) / Option+C (Mac)来手动触发。

### Q. Inline suggestion 功能，为什么使用方向键没有出现多个推理选项？

通常是由于 Q Developer 只生成了一个 suggestion。

<!-- ### Q. 使用 Inline Chat 时，上下文会自动包含 AmazonQ.md 和 .amazonq/rules/**/*.md 下的内容吗？

不会。 -->

### Q. 安装 Amazon Q 插件，启动只能提示后，方向键左右失灵？

因为 Amazon Q 插件的 Inline Suggestion 使用方向键左右来切换推理选项。您可以在 IDE 的快捷键绑定中修改此快捷键。
