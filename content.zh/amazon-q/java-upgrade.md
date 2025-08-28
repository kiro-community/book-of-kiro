---
title: "Java 升级功能介绍与FAQ"
weight: 40
bookToc: true
---

# **Java 升级功能介绍与 FAQ**

## **☕ Java 升级功能介绍**

Amazon Q Developer 提供强大的 Java 代码升级功能，帮助开发者自动将 Java 项目升级到更新的版本，减少手动迁移的工作量。

{{% hint info %}}
**重要变更**：原 Amazon Q Developer 中的 .NET、Mainframe、VMWare 三大功能已经分离成为新的服务 AWS Transform。Amazon Q Developer 目前专注于 Java Transform 功能。
{{% /hint %}}

{{% tabs %}}
{{% tab "使用 qct-cli（推荐）" %}}

Amazon Q Developer 对于 Java 升级的功能，还提供了一个专用的命令行工具 qct-cli （不是 q cli 或 aws cli）。如果您不希望 IDE 中的 Java 升级占用本地过多资源，可以在服务器或一些自动化环境中使用 qct-cli 实现 Java 代码升级。

qct-cli 是一个基于 Python 编写的程序，需要独立安装，安装与登录流程详见[官方文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/run-CLI-transformations.html)。目前 qct-cli 仅支持 macOS/Linux，如果您需要在 Windows 上完成 Java 升级，请继续使用 IDE 插件的方式。

详见完整[官方文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/transform-CLI.html)

{{% /tab %}}
{{% tab "使用 IDE 插件" %}}

Amazon Q Developer 的 IDE 插件内置了 Java 升级的功能，在 IDE 插件的聊天窗口中，使用 `/transform` 命令启动 Java 代码升级：

```
/transform
```

{{% /tab %}}
{{% /tabs %}}

**支持的升级路径**：

- Java 8 → Java 17
- Java 8 → Java 21
- Java 11 → Java 17
- Java 11 → Java 21
- Java 17 → Java 21

### **⚙️ 升级流程**

{{% columns %}}

**1. 项目分析**

- 扫描项目结构
- 分析依赖关系
- 识别需要升级的代码

**3. 生成差异**

- 显示所有变更
- 提供详细说明
- 支持逐项审查

<--->

**2. 代码转换**

- 自动修改语法
- 更新 API 调用
- 处理废弃功能

**4. 应用变更**

- 用户确认后应用
- 保持代码逻辑不变
- 生成升级报告

{{% /columns %}}

### **💰 费用模式**

**包含在订阅中**：

- 每月 4,000 行代码升级额度（账号级别共享）
- 所有核心升级功能

**超额费用**：

- 超出月度额度后：$0.003/行
- 只有成功生成 DIFF 后才计费
- 失败或取消的升级不产生费用

## **❓ Java 升级常见问题**

### **Q. 升级 Java 时，如果不在[官方支持列表](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/how-CT-works.html#transform-code)中的依赖会升级吗？**

不会。特别是如果一些依赖本身就不支持新版本 Java，那么这个升级可能会失败。

{{% hint warning %}}
**注意**: 在使用 Java 升级功能前，请确保您的项目依赖都支持目标 Java 版本，否则升级可能会失败。
{{% /hint %}}

### **Q. 升级 Java 时，[官方支持列表](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/how-CT-works.html#transform-code)中的依赖会如何升级？**

如果您指定了依赖的目标版本（[使用 IDE 插件](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/code-transformation.html#create-dependency-upgrade-file)或[使用 qct-cli](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/run-CLI-transformations.html#step-3-dependency-upgrade-file)）则会升级到您指定的版本。

如果您没有指定目标版本，则升级到兼容的最新版本。

### **Q. $19/月/人的订阅费用之外，Java 升级还有哪些费用？**

Amazon Q Developer 采用 $19/月/人的固定订阅模式，包含所有核心功能和每人每月 4,000 行 Java 代码升级额度（账号共享，比如组织内有 10 个人，那么这 10 个人会共享 40,000 行的额度）。

**唯一的额外费用**: 当 Java 代码升级超出额度时，按 $0.003/行收取超额费用。

### **Q. Java 升级功能的每月 4000 行代码额度是否支持账号级别共享？**

支持。详情请看[定价文档](https://aws.amazon.com/q/developer/pricing/)。

### **Q. Java 升级功能运行失败或者中途取消会产生费用吗？**

不会。只有当升级完毕，看到 DIFF 后才会产生费用，无论是否接受更改。
