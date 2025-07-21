---
title: "订阅与用户管理"
weight: 2
bookToc: true
---

{{% hint info %}}
本文档涵盖 Amazon Q Developer 的订阅管理、用户管理和身份认证相关问题。
{{% /hint %}}

## 订阅与用户管理

### Q. 为什么我在 Identity Center 里面创建了用户，不能在订阅界面搜索到？

不要使用 username 或者邮箱搜索，请使用 Display name 搜索。

### Q. 从哪里可以看到所有用户的订阅状态？

目前在 Amazon Q Developer 控制台中的 Users Tab 只能看到通过单个用户方式订阅的状态，通过 Group 方式订阅的用户无法显示。如果想看到所有用户的订阅状态，可以通过 Amazon Q 的控制台查看。

![](/book-of-kiro/images/q_dev/check-subscription.png)

### Q. 必须开启 MFA（Multi Factor Authentication）吗？

不是必须的。Q Developer 使用 AWS Identity Center 认证，默认开启 MFA。管理员可以根据[文档](https://docs.aws.amazon.com/singlesignon/latest/userguide/mfa-getting-started.html)，前往 AWS Identity Center 关闭 MFA 功能：

1. 进入 AWS Identity Center
2. 选择 Settings
3. 选择 Authentication Tab
4. 在 Multi-factor authentication 下点击 Configure
5. 把 Prompt users for MFA 改成 Never

![](/book-of-kiro/images/q_dev/disable_mfa.png)


### Q. 如何开通 Pro 版本？

请参考[官方文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/deployment-options.html)，官方文档包含三种情况：
1. 在一个独立账号中开通
2. 在一个 organization management 账号中开通
3. 在一个 organization member 账号中开通

**视频教程：**
1. [在独立账号中开通 Q Developer Pro](https://www.bilibili.com/video/BV1ohghzZEqJ/?share_source=copy_web&vd_source=90c9e03ce2e772d5bae43b0d9e504a7e)
2. [在 member 账号中开通 Q Developer Pro](https://www.bilibili.com/video/BV1HsXeYuE3U/?share_source=copy_web&vd_source=90c9e03ce2e772d5bae43b0d9e504a7e)
3. [添加更多 Amazon Q Developer Pro 用户](https://www.bilibili.com/video/BV1BaXeYeEe9/?vd_source=80c2d161264f9f6c3c6a4d42afc43ab2)


### Q. 获取登陆时需要的 StartURL 和 Region？

您可以在网页控制台的 Amazon Q Developer 设置页面查看 StartURL 和 Region。

![](/book-of-kiro/images/q_dev/find_url.png)

### Q. 可以将 IAM Identity Center 连接到自己的 IDP 吗？

可以，在 IAM Identity Center 中修改 IDP 即可。

![](/book-of-kiro/images/q_dev/connect_idp.png)

{{% hint warning %}}
**需要注意**: 已有的用户会被清空。Amazon Q Developer 中订阅的用户也需要清空并重新订阅。
{{% /hint %}}

