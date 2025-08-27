---
title: "5分钟快速入门"
weight: 5
bookToc: true
---

# **⚡ 5分钟快速入门 Amazon Q Developer**

本指南帮助你在 5 分钟内开始使用 Amazon Q Developer，体验 AI 驱动的代码开发。

## **第一步：选择你的使用方式**

{{% columns %}}

### **🖥️ IDE 插件（推荐新手）**

**适合场景**：
- 日常代码开发
- 可视化操作
- 团队协作

**支持的 IDE**：
- Visual Studio Code
- JetBrains 全家桶
- Eclipse、Visual Studio

<--->

### **⌨️ 命令行 CLI**

**适合场景**：
- 自动化脚本
- 服务器环境
- 高级定制

**支持系统**：
- macOS、Linux、Windows
- 容器和虚拟机环境

{{% /columns %}}

## **第二步：快速安装**

{{% tabs %}}
{{% tab "VS Code" %}}

1. 打开 VS Code
2. 在扩展市场搜索 "Amazon Q"
3. 点击安装
4. 重启 VS Code

![VS Code 安装](/book-of-kiro/images/q_dev/vscode-install.png)

{{% /tab %}}
{{% tab "JetBrains" %}}

1. 打开你的 JetBrains IDE
2. 进入 Settings → Plugins
3. 搜索 "Amazon Q" 并安装
4. 重启 IDE

![JetBrains 安装](/book-of-kiro/images/q_dev/jetbrains-install.png)

{{% /tab %}}
{{% tab "CLI" %}}

**macOS/Linux**：
```bash
# 使用官方安装脚本
curl -sSL https://install.q.aws.dev | bash
```

**Windows**：
参考[详细教程](https://amzn-chn.feishu.cn/docx/YI5xdNBtRozbjkx5H3McqRm5nNg)

{{% /tab %}}
{{% /tabs %}}

## **第三步：登录账号**

{{% hint info %}}
**需要准备**：从管理员获取 Start URL 和 Region 信息
{{% /hint %}}

1. 打开 Amazon Q 聊天面板
2. 选择 "Company Account"
3. 输入 Start URL 和 Region
4. 在浏览器中完成 SSO 登录

![登录流程](/book-of-kiro/images/q_dev/company_account.png)

## **第四步：开始你的第一次对话**

### **🎯 推荐的第一次尝试**

{{% columns %}}

**代码生成**
```
帮我创建一个 Python 函数，
计算两个数字的最大公约数
```

**代码解释**
```
解释一下这段代码的作用：
[粘贴你的代码]
```

<--->

**代码优化**
```
优化这个函数的性能：
[粘贴你的代码]
```

**添加测试**
```
为这个函数生成单元测试：
[粘贴你的代码]
```

{{% /columns %}}

### **🔥 智能体编程（Agentic Coding）**

{{% hint warning %}}
**重要**：确保蓝色的智能体开关是开启状态，这样 AI 可以自动读写文件。
{{% /hint %}}

尝试这些更强大的任务：

```
分析当前项目的代码结构，并生成一个 README 文件
```

```
帮我重构 src/utils.js 文件，提高代码可读性
```

```
为当前项目添加 ESLint 配置和 Git hooks
```

## **第五步：掌握核心技巧**

### **📁 引用文件和文件夹**

使用 `@` 符号引用特定文件：

```
@src/components/Button.js 这个组件有什么问题？
```

```
@tests/ 目录下的测试覆盖率如何？
```

### **💾 保存常用提示词**

1. 使用 `@` 选择 "Prompt"
2. 保存你的常用任务模板
3. 下次直接调用

### **📋 设置项目规则**

在项目根目录创建 `.amazonq/rules/coding-style.md`：

```markdown
# 编码规范

- 使用 TypeScript 而非 JavaScript
- 函数名使用驼峰命名
- 添加详细的注释
- 优先使用 async/await 而非 Promise
```

## **🎉 恭喜！你已经掌握了基础用法**

### **接下来可以探索**

- **[IDE 插件高级技巧](ide-plugin/)** - 深入了解所有功能
- **[CLI 自定义智能体](cli/)** - 创建专属的 AI 助手
- **[故障排查](troubleshoot/)** - 解决使用中的问题

### **需要帮助？**

- 查看 **[常见问题](general/)** 了解更多
- 遇到问题请参考 **[故障排查](troubleshoot/)**
- 联系你的管理员获取企业级支持

{{% hint info %}}
**小贴士**：Amazon Q Developer 会随着你的使用越来越了解你的编码风格和项目需求，建议持续使用以获得更好的体验。
{{% /hint %}}