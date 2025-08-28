---
title: "Java 升级功能介绍与FAQ"
weight: 40
bookToc: true
---

# **Java 升级功能介绍与FAQ**

## **☕ Java 升级功能介绍**

Amazon Q Developer 提供强大的 Java 代码升级功能，帮助开发者自动将 Java 项目升级到更新的版本，减少手动迁移的工作量。

{{% hint info %}}
**重要变更**：原 Amazon Q Developer 中的 .NET、Mainframe、VMWare 三大功能已经分离成为新的服务 AWS Transform。Amazon Q Developer 目前专注于 Java Transform 功能。
{{% /hint %}}

### **🚀 /transform 命令使用**

在 IDE 插件的聊天窗口中，使用 `/transform` 命令启动 Java 代码升级：

```
/transform
```

**支持的升级路径**：
- Java 8 → Java 17
- Java 8 → Java 21
- Java 11 → Java 17
- Java 11  → Java 21
- Java 17 → Java 21

### **⚙️ 升级流程**

{{% columns %}}

**1. 项目分析**
- 扫描项目结构
- 分析依赖关系
- 识别需要升级的代码

**2. 代码转换**
- 自动修改语法
- 更新 API 调用
- 处理废弃功能

<--->

**3. 生成差异**
- 显示所有变更
- 提供详细说明
- 支持逐项审查

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

### **Q. IDE 插件的 /transform 功能升级 Java 时，如果不在 List 中的 dependency 会升级吗？**

不会。特别是如果一些依赖本身就不支持新版本 Java，那么这个升级可能会失败。

{{% hint warning %}}
**注意**: 在使用 /transform 功能前，请确保您的项目依赖都支持目标 Java 版本，否则升级可能会失败。
{{% /hint %}}

### **Q. $19/月/人的订阅费用之外，Java 升级还有哪些费用？**

Amazon Q Developer 采用 $19/月/人的固定订阅模式，包含所有核心功能和每月 4,000 行 Java 代码升级额度（账号共享）。

**唯一的额外费用**: 当 Java 代码升级超出月度 4,000 行额度时，按 $0.003/行收取超额费用。

### **Q. Java 升级功能的每月 4000 行代码额度是否支持账号级别共享？**

支持。详情请看[定价文档](https://aws.amazon.com/q/developer/pricing/)。

### **Q. Java 升级功能运行失败或者中途取消会产生费用吗？**

不会。只有当升级完毕，看到 DIFF 后才会产生费用，无论是否接受更改。
