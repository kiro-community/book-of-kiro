---
title: "Q Developer CLI"
weight: 40
bookToc: true
---

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

## Q Developer CLI 的使用

### 开始聊天

登录后，直接使用 `q` 命令即可开始聊天（`q` 是 `q chat` 命令的缩写）。

您可以使用 `q chat --help` 来查看额外的参数。
