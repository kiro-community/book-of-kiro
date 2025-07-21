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
- JetBrains 全家桶
- Eclipse
- Visual Studio
- Android Studio

### Q. 如何安装 IDE 插件？

在对应 IDE 插件市场搜索 "Amazon Q" 并安装即可。

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

### Q. 什么时候用 Inline Chat，什么时候用 Chat Panel？

- **Chat Panel**: 和 Q Developer 讨论问题，不希望直接修改文件时使用
- **Inline Chat**: 希望 Q Developer 直接基于 prompt 修改文件时使用

### Q. Inline suggestion 功能，为什么使用方向键没有出现多个推理选项？

通常是由于 Q Developer 只生成了一个 suggestion。

### Q. 使用 Inline Chat 时，上下文会自动包含 AmazonQ.md 和 .amazonq/rules/**/*.md 下的内容吗？

不会。

### Q. @workspace 可以修改代码库索引的大小吗？

可以。默认情况下 Index 代码库的大小为 250 MB，用户可以手动修改大小。调整完之后，不会造成 CPU 的压力，但是会使用更多的内存。可以在插件的 Settings 中进行配置。

{{% hint info %}}
关于 Java 升级和 /transform 功能的详细信息，请参考 [Java 升级](../java-upgrade/) 章节。
{{% /hint %}}

### Q. 能否指定代码规范？

可以在当前目录的 `.amazonq/rules/` 目录下创建 markdown 文件，设置规则。详见[文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/context-project-rules.html)。

**示例：typescript.md**
```markdown
总是使用TypeScript而非JavaScript。优先使用普通函数而非箭头函数。
```

{{% hint warning %}}
**注意**: 由于 LLM 可能丢失注意力，代码规范可能无法 100% 遵循，建议在代码审核阶段引入额外的检查。
{{% /hint %}}


## Customization

### Q. Customization 能否学习代码规范？

Customization 功能是基于 RAG（检索增强生成）的。它是基于关键词查找来工作的 - 这种方式虽然可以通过名称查找函数方法，但无法学习具体的编码行为规范。

### Q. 能否使用纯 markdown 文件的代码仓库来实现知识库的效果？

不能。根据 Q 的控制台的描述：

> Amazon Q Developer will consider markup files (.md, .mdx, .rst, .txt, .html, .htm, .xml) when creating the customization, but their sizes don't count toward the 2 MB requirement.

所以 markdown 会被做向量索引，但是不算代码，所以不能基于纯 md repo 构建知识库。md 只能作为代码库的补充，代码需要至少 2MB。

如需构建知识库，可使用 Amazon Bedrock Knowledge Base 配合 MCP 来实现。
