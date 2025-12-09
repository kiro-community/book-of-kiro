---
title: "Getting Started with Kiro"
weight: 10
---

# **Getting Started with Kiro**

## 📌 **Introduction: What is Kiro? Why is it so popular recently?**

Kiro is a revolutionary AI-integrated development environment (IDE) released by AWS in July 2025.<br>
"Huh? Another editor? Aren't VSCode and Cursor enough?"—If you think so too, don't close this page just yet. Because **Kiro is truly not an ordinary editor.**

## 🤔 **Critical Difference from Traditional IDEs**

With traditional IDEs, you're 100% on your own when writing code.<br>
But Kiro is different—it's your **AI development partner** that can think with you, make suggestions, and even write code.<br>
It's like having an incredibly experienced senior engineer always by your side doing pair programming with you!<br>

## ✨ **What Kiro Can Do (Here's the Important Part)**

🤖 **Write code by talking to AI**: Just say "help me create a login feature," and it actually does it<br>
📋 **Auto-generate specifications**: Transforms vague requirements into clear, detailed specs<br>
🔧 **Agent Hooks for automation**: For example, when you save a file, it can automatically run tests and format code<br>
🎯 **Steering remembers project knowledge**: Background info like "our project uses TypeScript" only needs to be mentioned once<br>
🔌 **MCP for external tool integration**: Can integrate with GitHub, AWS Docs, and even web search<br>
🛡️ **Safe execution environment**: Prevents the tragedy of "oh no, I accidentally deleted everything"<br>

## 🚀 **Quick Start - Launch Kiro in 5 Minutes!**

### **Fastest Installation Guide (Really Only Takes 5 Minutes)**

First, let's install Kiro. Don't worry though, it's as simple as installing any regular app!<br>

{{% hint info %}}

1. Download
   Visit https://kiro.dev/downloads #Supports macOS, Windows, and Linux<br>

2. Install
   macOS: Drag the downloaded Kiro.app to the Applications folder<br>
   Windows: Double-click the downloaded installer to run<br>
   Linux: Add execute permissions to the AppImage and launch<br>

3. Initial Setup (This is super important!)<br>
   {{% /hint %}}

#### 🔐 **Login Method Selection**

- **GitHub**: If you're an individual developer, this is the easiest choice<br>
- **Google**: One-click login with your Gmail account<br>
- **AWS Builder ID**: Don't have an AWS account? Choose this (and it's completely free)
- **AWS IAM Identity Center**: Suitable for use in company or team environments<br>

#### **⚙️ Import VS Code Settings**

Selecting "**Import VS Code Settings**" allows you to directly inherit your current editor configuration,
including extension plugins and theme styles—really convenient!

#### 💻 **Enable Shell Integration (Must Select!)**

When prompted, be sure to click "**Allow**"!<br>
This step allows AI to directly run terminal commands, unlocking the fully automated development experience 🚀

### 📂 **Let's Open Your First Project!**

```bash
# If you prefer to open projects via terminal:
cd my-project
kiro .

# Or you can use Kiro's menu bar:
File > Open Folder > Select your project folder

```

After opening the project, click the **Kiro ghost icon** on the left sidebar. This is Kiro's core area and where you start conversations with AI!👻<br>

### 💬 **Try Talking to the AI!**

```bash
# Open the chat panel
Cmd+L (Mac) / Ctrl+L (Windows/Linux)

# Try asking these first
"Explain the structure of this project"
"Organize the dependencies in package.json"
"Help me make the README more complete"

```

You'll be amazed at how natural and smooth the conversation can be!💬✨

## 🔑 **Complete Authentication Guide - Which Should You Choose?**

### **Method 1: GitHub Login (Recommended for Individual Developers, Rating: ★★★★★)**

{{% hint info %}}

<span style="color:red;">Who is it for?</span>

- Developers who usually write code on their own
- Those participating in open source projects
- People who want to simply try Kiro first

<span style="color:red;">Advantages</span>

- Simplest setup process
- Can use directly with just a GitHub account
- Free tier is enough for most people

<span style="color:red;">Steps</span>

1. Click "Sign in with GitHub"
2. Browser will automatically redirect, log in to your GitHub
3. Click "Authorize kirodotdev" to authorize
4. Done! You can start using it right away ✨
   {{% /hint %}}

### **Method 2: Google Login (Suitable for Light Users, Rating: ★★★★☆)**

{{% hint info %}}

<span style="color:red;">Suitable for</span>

- Have Gmail but no GitHub account
- Want to use for personal learning
- Just want to quickly and easily try it out

<span style="color:red;">Advantages</span>

- Can log in directly with Google account
- No additional setup required
- Great for personal daily use

<span style="color:red;">Steps</span>

1. Click "Sign in with Google"
2. Select your Google account
3. Click "Continue" to complete authorization
4. Done! Wasn't that super easy?✨
   {{% /hint %}}

### **Method 3: AWS Builder ID (Suitable for AWS Newcomers, Rating: ★★★☆☆)**

{{% hint info %}}

<span style="color:red;"> Suitable for</span>

- Want to try AWS but don't want to register a formal account right away
- Want to try some AWS services for free
- May use AWS formally in the future

<span style="color:red;"> Advantages</span>

- Can use without registering a full AWS account, completely free
- Very convenient integration with various AWS services
- If you want to transition to an enterprise account later, it's smooth

<span style="color:red;"> Steps</span>

1. Click "Login with AWS Builder ID"
2. Enter your email address
3. Set a login password
4. Complete email verification, and you can start using it ✅
   {{% /hint %}}

### **Method 4: AWS IAM Identity Center (Suitable for Enterprise Users, Rating: ★★★★★)**

{{% hint info %}}

<span style="color:red;"> Suitable for</span>

- Want to formally deploy Kiro within the company
- Enterprise environments with strict security requirements

<span style="color:red;"> Considerations</span>

- Requires [Kiro enterprise subscription](https://kiro.dev/enterprise/) or Amazon Q Developer Pro paid subscription
- Requires assistance from company IT department for configuration
- Not suitable for individual users

<span style="color:red;"> Steps</span>

1. Select "Sign in with AWS IAM Identity Center"
2. Enter Start URL, for example: https://your-company.awsapps.com/start, contact your administrator to obtain
3. Select Region: Contact your administrator to obtain
4. Contact company IT department to complete related settings
   {{% /hint %}}

## **Community and Resources**

📖 [Official Documentation](https://kiro.dev/docs) <br>
💬 [Chinese Community](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=6c4ic8c6-450f-4d54-8783-dadc42d0591d) <br>
🐙 [GitHub](https://github.com/kirodotdev)<br>

**Welcome to the future of coding with Kiro! 🚀✨** <br>
Be sure to experience firsthand this new experience that changes the common sense of development~ ☺️
