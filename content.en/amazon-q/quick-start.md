---
title: "5-Minute Quick Start"
weight: 5
bookToc: true
---

# **⚡ 5-Minute Quick Start with Amazon Q Developer**

This guide helps you get started with Amazon Q Developer in 5 minutes and experience AI-driven code development.

**Suitable Scenarios**:

- Daily code development
- Visual operations
- Team collaboration

**Supported IDEs**:

- Visual Studio Code
- JetBrains suite
- Eclipse, Visual Studio

## **Quick Installation**

{{% tabs %}}
{{% tab "VS Code" %}}

1. Open VS Code
2. Search for "Amazon Q" in the Extensions Marketplace
3. Click Install
4. Restart VS Code

![VS Code Installation](/book-of-kiro/images/q_dev/vscode-install.png)

{{% /tab %}}
{{% tab "JetBrains" %}}

1. Open your JetBrains IDE
2. Go to Settings → Plugins
3. Search for "Amazon Q" and install
4. Restart the IDE

![JetBrains Installation](/book-of-kiro/images/q_dev/jetbrains-install.png)

{{% /tab %}}
{{% /tabs %}}

## **Login to Your Account**

{{% hint info %}}
**What You Need**: Get Start URL and Region information from your administrator
{{% /hint %}}

1. Open the Amazon Q chat panel
2. Select "Company Account"
3. Enter Start URL and Region
4. Complete SSO login in the browser

![Login Process](/book-of-kiro/images/q_dev/company_account.png)

## **Start Your First Conversation**

### **🎯 Recommended First Try**

{{% columns %}}

**Code Generation**

```
Help me create a Python function
to calculate the greatest common divisor of two numbers
```

**Code Explanation**

```
Explain what this code does:
[paste your code]
```

<--->

**Code Optimization**

```
Optimize the performance of this function:
[paste your code]
```

**Add Tests**

```
Generate unit tests for this function:
[paste your code]
```

{{% /columns %}}

### **🔥 Agentic Coding**

{{% hint warning %}}
**Important**: Make sure the blue agent switch is turned on so the AI can automatically read and write files.
{{% /hint %}}

Try these more powerful tasks:

```
Analyze the code structure of the current project and generate a README file
```

```
Help me refactor the src/utils.js file to improve code readability
```

```
Add ESLint configuration and Git hooks to the current project
```

## **Step Five: Master Core Techniques**

### **📁 Reference Files and Folders**

Use the `@` symbol to reference specific files:

```
@src/components/Button.js What's wrong with this component?
```

```
@tests/ What is the test coverage in this directory?
```

### **💾 Save Frequently Used Prompts**

1. Use `@` to select "Prompt"
2. Save your frequently used task templates
3. Call them directly next time

### **📋 Set Project Rules**

Create `.amazonq/rules/coding-style.md` in the project root:

```markdown
# Coding Standards

- Use TypeScript instead of JavaScript
- Function names use camelCase
- Add detailed comments
- Prefer async/await over Promise
```

## **🎉 Congratulations! You've Mastered the Basics**

### **What to Explore Next**

- **[Advanced IDE Plugin Techniques](ide-plugin/)** - Deep dive into all features
- **[Troubleshooting](troubleshoot/)** - Solve problems during use

### **Need Help?**

- Check **[General FAQ](general/)** for more information
- Refer to **[Troubleshooting](troubleshoot/)** if you encounter problems
- Contact your administrator for enterprise-level support

{{% hint info %}}
**Tip**: Amazon Q Developer will better understand your coding style and project needs as you use it. Continuous use is recommended for a better experience.
{{% /hint %}}
