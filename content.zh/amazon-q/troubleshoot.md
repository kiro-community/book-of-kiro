---
title: "故障排查"
weight: 99
bookToc: true
---

## **🔐 常见登录问题**

### **E. 登录报错：您没有问题，而是我们遇到了问题**

请先检查您是否在登陆界面选择了企业版（Pro tier），并且提供了正确的 StartURL 和 Region（区域选择与 AWS Identity Center 所在的区域保持一致）。请注意区分登陆界面的企业版和个人版（AWS Builder ID）。

### **E. 登录报错：Invalid Callback URL**

请首先确认登录时 StartURL 和 Region 是否选择正确。如有需要，请联系您的管理员获取正确的 StartURL 和 Region。

### **E. 登录报错：有些内容无法计算**

请首先确认登录时 StartURL 和 Region 是否选择正确。如有需要，请联系您的管理员获取正确的 StartURL 和 Region。

### **E. 错误：not authorized to make this call**

登录成功后在 IDE 聊天面板中报错没有权限。

通常是由于用户是通过 AWS Identity Center Group 的方式添加的，这种情况下需要等待一段时间用户才能生效，不超过 24 小时。详情请查看文档。

{{% hint info %}}
如果您着急使用，请通过 User 的方式添加用户！
{{% /hint %}}

## **💻 IDE 常见错误**

### **E. 错误：unable to get local issuer certificate**

通常是系统证书存在问题。您可以尝试在系统 shell 中（比如 Windows 的 cmd）执行 `curl https://baidu.com` 看看会不会有类似的证书问题。您需要联系您企业的 IT 服务来修复您本机的证书问题。

### **E. 错误：编辑文件失败**

在 Agentic Coding 模式下自动编辑文件可能会失败，您可以将鼠标悬浮在红色错误图标上查看具体的错误信息。

**原理**: Agent 在编辑文件时会先搜索一个 pattern，然后替换它为新的代码块。如果这个 pattern 在文件中有多个匹配或者没有匹配，agent 就会无法替换代码块从而报错。

**通常导致这些问题的原因包括：**

1. 文件被人类或其他工具修改后没有被 AI 重新读取
2. 文件太长，导致简单的 pattern 在同一个文件中出现多次
3. 需要搜索的 pattern 过于复杂或存在特殊字符，导致 LLM 生成的 search pattern 不合法或不存在
4. LLM 自身的幻觉导致 search pattern 不存在或格式错误

**缓解方式：**

1. 告诉 AI 使用 shell 命令或脚本进行文件编辑
2. 让 AI 生成正确的或更加准确的搜索 Pattern 后重试
3. 让 AI 说出它的思路，人工编辑文件

### **E. Improperly formed request**

通常是由于 LLM 的幻觉导致，可以告诉 AI “重试” 或者 “继续” 或者 “go on”，如果多次重试仍然失败，可以尝试重新开始会话。

### **E. An unexpected error occurred**

通常是网络不稳定导致，可以告诉 AI “重试” 或者 “继续” 或者 “go on”，如果多次重试仍然失败，可以尝试重新开始会话，或排查网络连接。

### **E. Dispatch failure**

通常是网络不稳定导致，可以告诉 AI “重试” 或者 “继续” 或者 “go on”，如果多次重试仍然失败，可以尝试重新开始会话，或排查网络连接。

## **📋 问题上报**

### **Q. 如何在 Visual Studio Code 查看插件的日志？**

如果是偶发性的问题（例如，AI 幻觉、命令参数不正确）是正常现象。如果 Amazon Q Developer 在某个问题上能稳定复现，建议获取 Amazon Q Logs 提供给 AWS Support 或者 AWS 解决方案架构师。

**日志获取方式 1：**

登录后，聊天窗口右上角有导出日志的按钮。

**日志获取方式 2（适用于无法登陆的场景）：**

1. 打开 Visual Studio Code 的 OUTPUT。通过点击菜单栏的 View，再点击 Output 打开面板
2. 下拉选择 Amazon Q Logs
3. 点击齿轮按钮，选择 Trace 类型的日志

{{% hint info %}}
**注意**: 您只有打开 Trace 日志后，再操作 Amazon Q Developer 才会记录 Trace 级别的日志。
{{% /hint %}}

![](/book-of-kiro/images/q_dev/vscode_log.png)

### **Q. 如何在 JetBrains IDE 中查看插件日志？**

如果是偶发性的问题（例如，AI 幻觉、命令参数不正确）是正常现象。如果 Amazon Q Developer 在某个问题上能稳定复现，建议获取 Amazon Q Logs 提供给 AWS Support 或者 AWS 解决方案架构师。

**日志获取方式 1：**

登录后，聊天窗口右上角有导出日志的按钮。

**日志获取方式 2（适用于无法登陆的场景）：**

顶部菜单 → Help → Show Log in Explorer/Finder → idea.log
![](/book-of-kiro/images/q_dev/jetbrains_log.png)

除此之外，也可以使用 "Collect Logs and Diagnostic Data" 收集更详细的信息。
![](/book-of-kiro/images/q_dev/jetbrains_log_2.png)

### **Q. 我有 IDE Plugin 问题希望上报给产品团队，请问需要提供哪些信息？**

为加速我们排查您遇到的问题，我们建议您复现问题，并提供如下信息给 AWS Support 或者 AWS 解决方案架构师：

**必须项：**

1. 日志信息（建议去除敏感信息）
2. 插件的版本信息
3. IDE 的版本信息
4. 操作系统版本信息

**可选项：** 问题的视频或者截图（如您能提供问题的视频或者截图将有助于我们排查问题）

### **Q. 我有 Q CLI 问题希望上报给产品团队，请问需要提供哪些信息？**

为加速我们排查您遇到的问题，我们建议您复现问题，并提供如下信息给 AWS Support 或者 AWS 解决方案架构师：

**必须项：**

1. 日志信息（建议去除敏感信息）
2. CLI 的版本信息
3. 操作系统版本信息

**可选项：** 问题的视频或者截图（如您能提供问题的视频或者截图将有助于我们排查问题）
