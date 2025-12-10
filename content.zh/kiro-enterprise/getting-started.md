---
title: "为团队订阅 Kiro"
weight: 51
bookToc: true
---

# 为团队订阅 Kiro

本指南将逐步介绍如何创建 Kiro 配置文件并通过 AWS IAM Identity Center 为用户订阅 Kiro 企业版。

## 前提条件

在开始之前，请确保您具备以下条件：

**AWS 账户**
- 您需要一个 AWS 账户。如果您还没有账户，可以[创建 AWS 账户](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html)。

**AWS 权限**
- 作为 Kiro 管理员，您必须具有访问 AWS 中 Kiro 控制台的权限，以便订阅和管理 Kiro 用户。您需要的最低权限在[策略：允许管理员配置 Kiro 并订阅用户](https://kiro.dev/docs/enterprise/iam/#policy-allow-administrators-to-configure-kiro-and-subscribe-users)中有详细说明。

**AWS IAM Identity Center**
- 您必须在 AWS 账户中设置 IAM Identity Center 实例，并包含要订阅 Kiro 的用户身份。您的 IAM Identity Center 实例必须位于[支持的 AWS 区域](https://kiro.dev/docs/enterprise/supported-regions)中。

**用户和组**
- 您可以将用户和组添加到 IAM Identity Center 的内置目录，或添加到连接到 IAM Identity Center 的外部身份提供商 (IdP)。有关更多信息，请参阅 [IAM Identity Center 入门指南](https://docs.aws.amazon.com/singlesignon/latest/userguide/getting-started.html)。

## 创建 Kiro 配置文件

1. 登录 AWS 管理控制台

2. 切换到 Kiro 控制台

3. 确保您位于首选的[支持的 AWS 区域](https://kiro.dev/docs/enterprise/supported-regions)中，以创建 [Kiro 配置文件](https://kiro.dev/docs/enterprise/concepts/#kiro-profile)并存储用户数据

4. 选择 **"Sign up for Kiro"** 按钮

5. 查看 **"Create Kiro profile"** 对话框的内容，然后选择 **"Enable"**。Kiro 配置文件即被创建

6. （可选）如需要，可在 **"Settings"** 页面中使用不同的名称或描述编辑配置文件

## 为团队订阅 Kiro

1. 如果您还没有在 Kiro 控制台中，请切换到 Kiro 控制台

2. 确保您位于创建 [Kiro 配置文件](https://kiro.dev/docs/enterprise/concepts/#kiro-profile)的 AWS 区域中

3. 在 **"Users & Groups"** 页面中，选择 **"Users"** 或 **"Groups"** 选项卡

4. 选择 **"Add user"** 或 **"Add group"** 按钮。将出现一个对话框，您可以在其中选择 [Kiro 订阅层级](https://kiro.dev/docs/enterprise/concepts/#kiro-subscription-tier)（Pro、Pro+、Power），并查看每个层级的详细信息

5. 选择所需的订阅层级，然后选择 **"Continue"**

6. 在搜索栏中，搜索要订阅到所选层级的组或用户，或从下拉菜单中选择一个。组或用户将自动填充 IAM Identity Center 中可用的内容

7. 选择用户或组，然后选择 **"Assign"**。用户或组现在已订阅

## 让用户检查邮件

**新用户邀请**

如果用户尚未在 AWS IAM Identity Center 实例中注册，他们将收到邀请邮件，需要选择用户名和密码并提供多因素身份验证 (MFA) 方法。

**已注册用户激活**

如果用户已经注册，他们将收到激活邮件，其中包含您的 IAM Identity Center 实例的 **"Start URL"** 和 **"Region"**。他们需要使用邮件中提供的 **"Start URL"** 和 **"Region"** 登录到 Kiro IDE 或 Kiro CLI。

**身份验证流程**

用户可能需要提供密码和 MFA 进行身份验证，如果身份验证成功，他们将登录并被指示返回到 Kiro IDE 或 CLI。

---

{{% hint info %}}
**页面更新时间**：2025年11月16日
{{% /hint %}}

## 相关文档

- [企业版快速入门](https://kiro.dev/docs/enterprise/getting-started/)
- [管理订阅](https://kiro.dev/docs/enterprise/subscription-management/)
- [支持的区域](https://kiro.dev/docs/enterprise/supported-regions/)
- [IAM 权限配置](https://kiro.dev/docs/enterprise/iam/)