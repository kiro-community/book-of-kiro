---
title: 安装与登录
weight: 10
bookToc: true
---

## IDE 插件的安装与登陆

### 安装

支持以下主流 IDE：

- Visual Studio Code
- JetBrains 全家桶（包括 Android Studio）
- Eclipse
- Visual Studio

在对应 IDE 插件市场搜索 "Amazon Q" 并安装即可。

**请确保您使用的 IDE 版本较新，因为老版本的 IDE 只能使用老版本插件，功能严重缺失**

![](/book-of-kiro/images/q_dev/vscode-install.png)

![](/book-of-kiro/images/q_dev/jetbrains-install.png)

### 登录

1. 展开 Amazon Q 聊天面板
2. 对于付费用户，选择 "Company Account"，点击 Continue
   ![](/book-of-kiro/images/q_dev/company_account.png)
3. Start URL 和 Region 会由您的管理员提供，务必确保它们填写正确，然后点击 Continue
   ![](/book-of-kiro/images/q_dev/start_url.png)
4. 点击之后会打开一个浏览器页面，在浏览器中完成登录过程
5. 如果您对接了您企业的 SSO，则会跳转到您企业的 SSO 进行登录
6. 根据提示进行下一步，直到看到登陆成功的提示

## Q CLI 的安装与登陆

### 安装

- Mac/Linux 用户：参考[官方文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-installing.html)。
- Windows 用户：请[查看教程](https://amzn-chn.feishu.cn/docx/YI5xdNBtRozbjkx5H3McqRm5nNg)。

### 登录

- **macOS**: 您可以通过 GUI 直接登陆
- **Linux**: 在终端中执行命令 `q login` 指令进行登陆

登陆地址（Start URL）从您的管理员处获取，可以在 AWS Identity Center 中修改默认登陆地址。
区域（Region）从您的管理员处获取，选择 **AWS Identity Center 所在区域**（不是 Amazon Q Developer 所在区域）。

![](/book-of-kiro/images/q_dev/cli-login.png)
