---
title: "订阅与用户管理"
weight: 60
bookToc: true
---

{{% hint info %}}
本文档涵盖 Amazon Q Developer 的订阅管理、用户管理和身份认证相关问题。
{{% /hint %}}

## **👥 订阅与用户管理**

### **Q. 为什么我在 Identity Center 里面创建了用户，不能在订阅界面搜索到？**

不要使用 username 或者邮箱搜索，请使用 Display Name 搜索。

如果还是搜不到，请在 Amazon Q Developer 控制台的设置页面，确认 Amazon Q Developer 关联的 IAM Identity Center 是正确的。

### **Q. 必须开启 MFA（Multi Factor Authentication）吗？**

不是必须的。Q Developer 使用 AWS Identity Center 认证，默认开启 MFA。管理员可以根据[文档](https://docs.aws.amazon.com/singlesignon/latest/userguide/mfa-getting-started.html)，前往 AWS Identity Center 关闭 MFA 功能：

1. 进入 AWS Identity Center
2. 选择 Settings
3. 选择 Authentication Tab
4. 在 Multi-factor authentication 下点击 Configure
5. 把 Prompt users for MFA 改成 Never

![](/book-of-kiro/images/q_dev/disable_mfa.png)

### **Q. 如何开通 Pro 版本？**

请参考[官方文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/deployment-options.html)，官方文档包含三种情况：

1. 在一个独立账号中开通
2. 在一个 organization management 账号中开通
3. 在一个 organization member 账号中开通

**视频教程：**

1. [在独立账号中开通 Q Developer Pro](https://www.bilibili.com/video/BV1ohghzZEqJ/?share_source=copy_web&vd_source=90c9e03ce2e772d5bae43b0d9e504a7e)
2. [在 member 账号中开通 Q Developer Pro](https://www.bilibili.com/video/BV1HsXeYuE3U/?share_source=copy_web&vd_source=90c9e03ce2e772d5bae43b0d9e504a7e)
3. [添加更多 Amazon Q Developer Pro 用户](https://www.bilibili.com/video/BV1BaXeYeEe9/?vd_source=80c2d161264f9f6c3c6a4d42afc43ab2)

### **Q. 获取登陆时需要的 StartURL 和 Region？**

您可以在网页控制台的 Amazon Q Developer 设置页面查看 StartURL 和 Region。

![](/book-of-kiro/images/q_dev/find_url.png)

### **Q. 可以将 IAM Identity Center 连接到自己的 IDP/SSO 吗？**

可以，在 IAM Identity Center 中修改 IDP 即可。

![](/book-of-kiro/images/q_dev/connect_idp.png)

{{% hint warning %}}
**需要注意**: 已有的用户会被清空。Amazon Q Developer 中订阅的用户也需要清空并重新订阅。
{{% /hint %}}

### **Q. 如何使用 API 实现订阅或批量订阅？**

目前 Amazon Q Developer 并没有公开 API/SDK ，但是有社区方案通过手动构造 SigV4 签名的方式实现了批量订阅（或基于 API 自动订阅），详见此 [GitHub Repo](https://github.com/DiscreteTom/kiro-batch-register/).

### **Q. 如何延长会话时间？**

默认情况下 Amazon Q Developer 每天都需要登录一次。您可以在 IAM Identity Center 中设置会话有效时间为 90 天，来避免频繁登录。
