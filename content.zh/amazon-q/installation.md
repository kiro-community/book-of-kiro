---
title: 安装与登录
weight: 10
bookToc: true
---

# **安装与登陆**

## **💻 IDE 插件的安装与登陆**

### **📦 安装**

Amazon Q Developer 支持以下主流 IDE，选择你使用的 IDE 查看具体安装步骤：

{{% tabs %}}
{{% tab "VS Code" %}}

**功能特点**：功能最完整，更新最及时

**安装步骤**：

1. 打开 Visual Studio Code
2. 点击左侧活动栏的扩展图标（或按 `Ctrl+Shift+X`）
3. 在搜索框中输入 "Amazon Q"
4. 找到 "Amazon Q" 扩展并点击 "Install"
5. 安装完成后重启 VS Code

![VS Code 安装](/book-of-kiro/images/q_dev/vscode-install.png)

{{% /tab %}}
{{% tab "JetBrains" %}}

**支持的 IDE**：IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand 等

**安装步骤**：

1. 打开你的 JetBrains IDE
2. 进入 `File` → `Settings`（Windows/Linux）或 `Preferences`（macOS）
3. 选择 `Plugins`
4. 点击 `Marketplace` 标签
5. 搜索 "AWS Core" 并点击 `Install`
6. 重启 IDE
7. 搜索 "Amazon Q" 并点击 `Install`
8. 重启 IDE

![JetBrains 安装](/book-of-kiro/images/q_dev/jetbrains-install.png)

{{% /tab %}}
{{% tab "Android Studio" %}}

**特别说明**：需要额外配置才能正常使用

**安装步骤**：

1. 打开 Android Studio
2. 进入 `File` → `Settings` → `Plugins`
3. 搜索 "AWS Core" 并安装
4. 重启 Android Studio
5. 搜索 "Amazon Q" 并安装
6. 重启 Android Studio

**重要配置**：
直接安装后可能无法正常使用聊天面板，需要进行以下配置：

1. 进入 `Help` → `Find Action`
2. 搜索 "Choose Boot Java Runtime for the IDE"
3. 选择一个带 JCEF 的 boot runtime

参考 [GitHub Issue](https://github.com/aws/aws-toolkit-jetbrains/issues/5048) 了解详细解决方案。

![Android Studio 配置](/book-of-kiro/images/q_dev/android_studio.png)

{{% /tab %}}
{{% tab "其他 IDE" %}}

**Eclipse**

- 功能：基础功能支持
- 安装：通过 Eclipse Marketplace 搜索 "Amazon Q"

**Visual Studio**

- 平台：Windows 平台
- 安装：通过 Visual Studio Marketplace 搜索 "Amazon Q"

{{% hint info %}}
**注意**：Eclipse 和 Visual Studio 的功能相对有限，建议优先使用 VS Code 或 JetBrains IDE。
{{% /hint %}}

{{% /tab %}}
{{% /tabs %}}

{{% hint warning %}}
**版本要求**：请确保使用较新版本的 IDE，老版本可能功能受限或无法正常工作。
{{% /hint %}}

### **🔐 登录**

1. 展开 Amazon Q 聊天面板
2. 对于付费用户，选择 "Company Account"，点击 Continue
   ![](/book-of-kiro/images/q_dev/company_account.png)
3. Start URL 和 Region 会由您的管理员提供，务必确保它们填写正确，然后点击 Continue
   ![](/book-of-kiro/images/q_dev/start_url.png)
4. 点击之后会打开一个浏览器页面，在浏览器中完成登录过程
5. 如果您对接了您企业的 SSO，则会跳转到您企业的 SSO 进行登录
6. 根据提示进行下一步，直到看到登陆成功的提示

## **⌨️ Q CLI 的安装与登陆**

### **📦 安装**

选择你的操作系统查看安装步骤：

{{% tabs %}}
{{% tab "macOS" %}}

**下载安装包安装（推荐）**：

1. 访问 [官方文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-installing.html)
2. 下载适合 macOS 的安装包
3. 按照说明完成安装

**通过 Homebrew 安装**:

```
brew install --cask amazon-q
```

**验证安装**：

```bash
q --version
```

{{% /tab %}}
{{% tab "Linux" %}}

**Ubuntu**：

```bash
# 下载并安装 deb 包
wget https://desktop-release.q.us-east-1.amazonaws.com/latest/amazon-q.deb
sudo dpkg -i amazon-q.deb
sudo apt-get install -f
```

**其他发行版**：
参考 [官方文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-installing.html) 获取详细步骤

**验证安装**：

```bash
q --version
```

{{% /tab %}}
{{% tab "Windows" %}}

**WSL 方式**（推荐）：

1. 安装 WSL2 和 Ubuntu
2. 在 WSL 中按照 Linux 安装步骤进行

**原生 Windows**：

1. 访问 [详细教程](https://amzn-chn.feishu.cn/docx/YI5xdNBtRozbjkx5H3McqRm5nNg)
2. 下载 Windows 安装包
3. 按照教程完成安装和配置

**验证安装**：

```cmd
q --version
```

{{% hint info %}}
**推荐使用 WSL**：在 Windows 上推荐使用 WSL 方式，资源消耗小且兼容性更好。
{{% /hint %}}

{{% /tab %}}
{{% /tabs %}}

### **🔐 登录**

安装完成后，根据你的系统选择登录方式：

{{% tabs %}}
{{% tab "macOS" %}}

**（选项 1）GUI 登录**（推荐）：
会打开图形界面进行登录配置

**（选项 2）命令行登录**：

```bash
q login
```

然后按提示输入：

Start URL：从管理员获取
Region：AWS Identity Center 所在区域

{{% /tab %}}
{{% tab "Linux" %}}

**命令行登录**：

```bash
q login
```

然后按提示输入：

- **Start URL**：从管理员获取
- **Region**：AWS Identity Center 所在区域

{{% /tab %}}
{{% tab "Windows" %}}

**WSL 环境**：

```bash
q login
```

**原生 Windows**：

```cmd
q login
```

按提示输入登录信息

{{% /tab %}}
{{% /tabs %}}

**登录信息说明**：

- **Start URL**：从您的管理员处获取，可以在 AWS Identity Center 中修改默认登录地址
- **Region**：从您的管理员处获取，选择 **AWS Identity Center 所在区域**（不是 Amazon Q Developer 所在区域）

![CLI 登录界面](/book-of-kiro/images/q_dev/cli-login.png)

**验证登录**：

```bash
q whoami
```
