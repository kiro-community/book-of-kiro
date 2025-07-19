---
weight: 2
bookFlatSection: true
title: "Amazon Q Developer 用户常见问题"
translationKey: "q-dev-faq"
---

# Amazon Q Developer 用户常见问题

本常见问题作为官方 [Kiro FAQ](https://kiro.dev/faq/) 的补充指南，专门针对 Amazon Q Developer 用户。

{{% hint info %}}
**注意**：此信息截至 Kiro 预览期为准。随着产品的发展，详细信息可能会发生变化。
{{% /hint %}}

## 一般问题

**问：什么是 Kiro，Kiro 与 Amazon Q Developer 有什么区别？**

**Kiro** 是一个具有高级 AI 功能和增强用户体验的代理式 IDE（集成开发环境）。**Amazon Q Developer** 与您现有的 IDE（如 Visual Studio Code、JetBrains、Eclipse、Visual Studio）和终端集成。

主要区别：
- Kiro 是一个专为 AI 辅助开发而从头构建的独立 IDE
- Amazon Q Developer 作为插件/扩展在现有开发环境中工作

**问：如果我想使用 Kiro，是否需要额外付费？**

**不需要。** Kiro 在预览期间免费。您可以将 Kiro 与 Amazon Q Developer Pro 套餐一起使用。Amazon Q Developer Pro 订阅者将能够通过现有的 $19/月订阅访问 Kiro 和 Q Developer（包括 CLI 和 VS Code、Eclipse 等的 IDE 插件）。

{{% hint info %}}
**预览期结束后访问这些工具无需额外费用**。
{{% /hint %}}

**问：我是 Amazon Q Developer Pro 用户。免费期结束后我还能使用 Kiro 吗？**

**可以**，所有 Amazon Q Developer 客户都可以在预览期间免费使用 Kiro。这适用于：

- Q Developer Pro 订阅者（$19/月）
- Q Developer 免费用户

如果您是在预览期间使用 Kiro 的 Q Developer Pro 订阅者，您将继续享受 Q Developer Pro 的权益。

**问：Kiro 会使用我的内容来改进服务吗？**

**不会。** 在预览期间使用 Kiro 的 Amazon Q Developer Pro 客户将保留其 Q Developer Pro 权益。**Kiro 不会收集他们的内容用于服务改进。**

## 将 Kiro 与 Amazon Q Developer Pro 一起使用

**问：如何使用我的 Amazon Q Developer Pro 账户登录 Kiro？**

按照以下步骤使用您的 Amazon Q Developer Pro 账户登录：

1. 在登录页面上，选择**使用您的组织身份登录**。

   ![登录选项](/book-of-kiro/images/sign-in-options.png)

2. 在使用 AWS Identity Center 登录页面上：
   - 输入起始 URL（例如，`xxxx.awsapps.com/start`）
   - 选择配置您的 AWS Identity Center 的 AWS 区域（例如，`us-east-1`）

   ![IAM Identity Center](/book-of-kiro/images/iam-identity-center.png)

3. 选择**继续**并按照屏幕上的说明完成身份验证过程。