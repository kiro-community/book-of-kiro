---
title: "故障排查"
weight: 35
---

# **CLI 故障排查**

## **CLI 常见错误及解决方案**

### **执行 MCP Tool 时报错**

报错：Improperly formed request 或 An unexpected error occurred

通常是 MCP Tool 的描述格式不规范，特别是 `input_schema` 字段，需要严格保证为合法的 JSON Schema

可以使用 `/tools schema` 子命令查看 MCP Tool 的描述，确认 `input_schema` 字段是否合法

### **使用苹果原生 Terminal 时崩溃**

建议使用 iTerm2 作为 Terminal 来使用 Kiro CLI。

如果需要排查崩溃原因，可以尝试使用[此脚本](https://gist.github.com/DiscreteTom/601bdd428ccb4079eb5e01fb914769fd)收集 Terminal 日志后交给 Kiro CLI 来排查

### **无法自动补全 CLI 命令**

如果您已经在 Kiro-CLI 的设置中启用了 autocomplete，但是自动补全没有生效，可以尝试执行 `kiro-cli doctor` 进行自动修复

### **如何还原默认 Agent**

使用 Kiro CLI 时，如果通过 `/agent set-default --name <NAME>` 设置的默认 Agent 后，希望恢复默认的 Agent，可以使用命令 `kiro-cli settings --delete chat.defaultAgent` 删除设置来还原默认 Agent

### **无法升级**

配置 VPC Endpoint 后，可能无法使用 `kiro-cli update` 进行 CLI 的升级。这是因为升级时需要访问 `desktop-release.q.us-east-1.amazonaws.com` ，它是 Q 的 VPC Endpoint 的子域名。如果您需要升级，可以参考[此文档](https://kiro.dev/docs/cli/installation/#with-a-zip-file)，从公网下载 zip 安装包后手动安装。

### **byte index is not a char boundary**

Kiro CLI 使用 Rust 语言编写，对 UTF-8 字符串的合法性有严格要求。此报错说明 Kiro CLI 处理了非法的 UTF-8 字符串，请检查本地文件是否包含非法 UTF-8 字符

### **Prompt 如何定义和传递参数**

目前只有 MCP Prompt 支持参数。可以使用 [shinkuro](https://github.com/DiscreteTom/shinkuro) 或类似的 MCP 服务器，把文件提示词转为 MCP 提示词，从而支持参数

## **高级调试技巧**

### **如何查看 Kiro CLI 日志**

最新版本 Kiro CLI 可以使用 `/logdump` 命令把日志保存为一个 ZIP 文件。

### **问题上报**

为加速我们排查您遇到的问题，我们建议您复现问题，并提供如下信息给 AWS Support 或者 AWS 解决方案架构师：

**必须项：**

1. 日志信息（建议去除敏感信息）。请参考上文获取 CLI 的日志
2. CLI 的版本信息，使用 `kiro-cli --version` 可以查看当前版本。如果不是最新版，您可以尝试执行 `kiro-cli update` 升级到最新版后，再看下问题是否还存在
3. 操作系统版本信息，如 Windows 11
4. 问题描述，以及已经进行过哪些排查

**可选项：** 问题的视频或者截图（如您能提供问题的视频或者截图将有助于我们排查问题）

## **通用问题**

### **Improperly formed request**

通常是由于 LLM 的幻觉导致，可以告诉 AI "重试" 或者 "继续" 或者 "go on"，如果多次重试仍然失败，可以尝试重新开始会话。

### **An unexpected error occurred**

通常是网络不稳定导致，可以告诉 AI "重试" 或者 "继续" 或者 "go on"，如果多次重试仍然失败，可以尝试重新开始会话，或排查网络连接。

### **Dispatch failure**

通常是网络不稳定导致，可以告诉 AI "重试" 或者 "继续" 或者 "go on"，如果多次重试仍然失败，可以尝试重新开始会话，或排查网络连接。
