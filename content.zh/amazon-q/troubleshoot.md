---
title: "故障排查"
weight: 99
bookToc: true
---

## **🔐 常见登录问题**

### **We couldn't load your Q Developer profiles**

请首先确认登录时 StartURL 和 Region 是否选择正确。如有需要，请联系您的管理员获取正确的 StartURL 和 Region。

如果确认 StartURL 和 Region 无误，可以参考下文，查看 Q 的日志来排查问题。

以下是日志中的报错示例

```log
WARN - software.aws.toolkits.jetbrains.services.amazonq.profile.QProfileResources - Failed to list Q profiles for region us-east-1
software.amazon.awssdk.services.codewhispererruntime.model.AccessDeniedException: The bearer token included in the request is invalid. (Service: CodeWhispererRuntime, Status Code: 403, Request ID: xxx)
```

如果报错中的 region 和您填写的 region 不同，您可以尝试清除用户目录下的 `.aws` 文件夹的全部文件后，重新登录。

除此之外，在 JetBrains IDE 中，您可以使用 JetBrains IDE 的 Invalidate Caches 清除一下缓存再重试。参考 [JetBrains 官方文档](https://www.jetbrains.com/help/idea/invalidate-caches.html)。

### **登录报错：您没有问题，而是我们遇到了问题**

请先检查您是否在登陆界面选择了企业版（Pro tier），并且提供了正确的 StartURL 和 Region（区域选择与 AWS Identity Center 所在的区域保持一致）。请注意区分登陆界面的企业版和个人版（AWS Builder ID）。

如果上述信息无误，请检查您的系统时间是否正确。

### **登录报错：Invalid Callback URL**

请首先确认登录时 StartURL 和 Region 是否选择正确。如有需要，请联系您的管理员获取正确的 StartURL 和 Region。

### **登录报错：有些内容无法计算**

请首先确认登录时 StartURL 和 Region 是否选择正确。如有需要，请联系您的管理员获取正确的 StartURL 和 Region。

如果报错信息是：“有些内容无法计算：我们无法验证您的登录凭证，请重试”，说明您的用户名或密码填写有误。

### **错误：not authorized to make this call**

登录成功后在 IDE 聊天面板中报错没有权限。

通常是由于用户是通过 AWS Identity Center Group 的方式添加的，这种情况下需要等待一段时间用户才能生效，不超过 24 小时。详情请查看文档。

{{% hint info %}}
如果您着急使用，请通过 User 的方式添加用户！
{{% /hint %}}

## **💻 IDE 常见错误**

### **错误：unable to get local issuer certificate**

通常是系统证书存在问题。您可以尝试在系统 shell 中（比如 Windows 的 cmd）执行 `curl https://baidu.com` 看看会不会有类似的证书问题。您需要联系您企业的 IT 服务来修复您本机的证书问题。

### **错误：编辑文件失败**

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

### **Improperly formed request**

通常是由于 LLM 的幻觉导致，可以告诉 AI “重试” 或者 “继续” 或者 “go on”，如果多次重试仍然失败，可以尝试开启一个新会话。

### **An unexpected error occurred**

通常是网络不稳定导致，也可能是登录过期。可以告诉 AI “重试” 或者 “继续” 或者 “go on”，如果多次重试仍然失败，可以尝试重新开始会话，重新登录，或排查网络连接。

可以参考下文查看日志来进一步确定问题原因。

### **Dispatch failure**

通常是网络不稳定导致，可以告诉 AI “重试” 或者 “继续” 或者 “go on”，如果多次重试仍然失败，可以尝试重新开始会话，或排查网络连接。

### **无法自动补全**

首先，确认自动补全是否开启。确认的方法为：在 VSCode 或 JetBrains IDE 的底部栏会有 Amazon Q 的按钮，点击后可以确认 Auto Suggestion 是否为启用的状态。

如果确认自动补全已经开启，仍然无法使用，请查看日志，在日志中搜索 `GenerateCompletion`，查看相关报错。以下是 JetBrains 中的报错示例：

```log
2025-09-25 11:02:10,730 [1391649]   INFO - software.aws.toolkits.jetbrains.services.amazonq.lsp.AmazonQLanguageClientImpl - [2025-09-25T03:02:10.727Z] lserver: GenerateCompletion activity:
@@request metadata@@
    "endpoint": https://codewhisperer.us-east-1.amazonaws.com/,
    "predictionType": Not specified (COMPLETIONS),
    "filename": xxx.java,
    "leftContextLength": 412,
    rightContextLength: 34,
    "language": java,
    "supplementalContextCount": 3,
    "request.nextToken": xxx,
    "recentEdits": No recent edits
error: read ECONNRESET
2025-09-25 11:02:10,730 [1391649]   INFO - software.aws.toolkits.jetbrains.services.amazonq.lsp.AmazonQLanguageClientImpl - [2025-09-25T03:02:10.727Z] lserver: Recommendation failure: TimeoutError: read ECONNRESET
```

如果是上述网络相关报错，请确保您本地可以正常访问 `https://codewhisperer.us-east-1.amazonaws.com/`

### **Inline Chat 生成代码异常**

Inline Chat 功能 （快捷键：Cmd+I 或 Ctrl+I）需要选中代码后使用，AI 生成的代码会覆盖选中的代码。所以此功能主要用来定点编辑选中的代码，除此之外的场景建议使用聊天面板来进行交互。

如果不选中代码，直接使用快捷键触发 Inline Chat，那么 AI 很可能在光标处插入一个全新的文件。仅适合在创建新文件的时候使用。

除此之外，Inline Chat 默认情况下包含的上下文远少于普通聊天面板，所以仅建议进行上下文不太相关的编辑。

Inline Chat 在编辑完毕后，需要点击 Accept / Reject （或使用快捷键）进行接受/拒绝，否则无法进行下一次的 Inline Chat 交互。

### **无法启动 Language Server**

IDE 插件会启动一个 Language Server 进程来解析工作目录下的源代码。Language Server 会被下载并保存在用户目录的 `AppData\Local\aws\toolkits\language-servers` 目录下。

如果无法启动 Language Server，可尝试清空如上目录以便重新下载 Language Server。

另外，由于 Language Server 是一个 NodeJS 进程，请确保上述目录的父级目录中不存在 `package.json` 文件。特别是要检查一下用户目录下是否存在 `package.json` 文件，如果有，请删除后再尝试重启 IDE 插件。

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
