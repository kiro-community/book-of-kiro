---
title: Installation and Login
weight: 10
bookToc: true
---

# **Installation and Login**

## **💻 IDE Plugin Installation and Login**

### **📦 Installation**

Amazon Q Developer supports the following mainstream IDEs. Choose the IDE you use to view specific installation steps:

{{% tabs %}}
{{% tab "VS Code" %}}

**Features**: Most complete functionality, most timely updates

**Installation Steps**:

1. Open Visual Studio Code
2. Click the Extensions icon in the left activity bar (or press `Ctrl+Shift+X`)
3. Type "Amazon Q" in the search box
4. Find the "Amazon Q" extension and click "Install"
5. Restart VS Code after installation

![VS Code Installation](/book-of-kiro/images/q_dev/vscode-install.png)

{{% /tab %}}
{{% tab "JetBrains" %}}

**Supported IDEs**: IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, etc.

**Installation Steps**:

1. Open your JetBrains IDE
2. Go to `File` → `Settings` (Windows/Linux) or `Preferences` (macOS)
3. Select `Plugins`
4. Click the `Marketplace` tab
5. Search for "AWS Core" and click `Install`
6. Restart the IDE
7. Search for "Amazon Q" and click `Install`
8. Restart the IDE

![JetBrains Installation](/book-of-kiro/images/q_dev/jetbrains-install.png)

{{% /tab %}}
{{% tab "Android Studio" %}}

**Special Note**: Requires additional configuration to work properly

**Installation Steps**:

1. Open Android Studio
2. Go to `File` → `Settings` → `Plugins`
3. Search for "AWS Core" and install
4. Restart Android Studio
5. Search for "Amazon Q" and install
6. Restart Android Studio

**Important Configuration**:
Direct installation may prevent the chat panel from working properly. The following configuration is required:

1. Go to `Help` → `Find Action`
2. Search for "Choose Boot Java Runtime for the IDE"
3. Select a boot runtime with JCEF

Refer to this [GitHub Issue](https://github.com/aws/aws-toolkit-jetbrains/issues/5048) for detailed solutions.

![Android Studio Configuration](/book-of-kiro/images/q_dev/android_studio.png)

{{% /tab %}}
{{% tab "Other IDEs" %}}

**Eclipse**

- Features: Basic functionality support
- Installation: Search for "Amazon Q" in Eclipse Marketplace

**Visual Studio**

- Platform: Windows platform
- Installation: Search for "Amazon Q" in Visual Studio Marketplace

{{% hint info %}}
**Note**: Eclipse and Visual Studio have relatively limited functionality. VS Code or JetBrains IDEs are recommended.
{{% /hint %}}

{{% /tab %}}
{{% /tabs %}}

{{% hint warning %}}
**Version Requirements**: Please ensure you use a recent version of the IDE. Older versions may have limited functionality or may not work properly.
{{% /hint %}}

### **🔐 Login**

1. Expand the Amazon Q chat panel
2. For paid users, select "Company Account" and click Continue
   ![](/book-of-kiro/images/q_dev/company_account.png)
3. The Start URL and Region will be provided by your administrator. Make sure they are filled in correctly, then click Continue
   ![](/book-of-kiro/images/q_dev/start_url.png)
4. After clicking, a browser page will open to complete the login process
5. If you have integrated your company's SSO, you will be redirected to your company's SSO for login
6. Follow the prompts to proceed until you see a successful login message
