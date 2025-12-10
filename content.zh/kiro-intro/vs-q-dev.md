---
title: "vs. Amazon Q Developer"
weight: 70
bookToc: false
---

# Kiro vs. Amazon Q Developer IDE 插件

## 总结

Kiro 和 Amazon Q Developer 都是 AWS 出品的 AI 开发工具。Kiro 是一个完整的 AI 开发平台（包含 IDE、CLI 和 Autonomous Agent），而 Amazon Q Developer 主要以 IDE 插件形式提供。从整体用户体验而言，Kiro 提供更全面的解决方案，Amazon Q Developer 插件则支持不同的 IDE，用户无需更换原有 IDE。以下是主要区别：

**Kiro 的独特优势：**

- **完整平台方案**：包含 IDE、CLI 和 Autonomous Agent，提供全方位的开发体验
- **Spec Mode**：结构化处理复杂开发任务的方法，将软件开发过程正式化 - 这是 Kiro 独有的功能
- **Agent Hooks**：当 IDE 中发生特定事件时执行预定义代理操作的自动触发器
- **Autonomous Agent**：前沿的自主智能体，能够独立处理开发任务并跨仓库工作
- **灵活的自主性**：既有 Autopilot mode（自主修改）也有 Supervised mode（应用更改前审查）
- **CLI 集成**：强大的命令行工具，支持自定义 Agent 和工作流程自动化
- **丰富的上下文引用**：支持 #Docs、#Git、#Rules、#Terminals、#Web 等多种上下文引用方式

**Amazon Q Developer 的独特优势：**

- **GUI 配置**：提供图形界面配置 MCP 服务器，相比 Kiro 的 JSON 文件配置更直观
- **固定上下文项**：可以指定在聊天会话中添加到所有消息的上下文项
- **Prompt Library**：内置提示库功能，可存储和重用常用提示
- **Named Agent**：提供专门的 Java 升级（/transform）代理

**核心差异：**

- **开发方法**：Kiro 强调结构化的 Spec 驱动开发，而 Q Developer 更注重传统的 Agent 编程方式
- **自主性控制**：Kiro 提供 Supervised 和 Autopilot 两种模式。
- **上下文管理**：Kiro 的 Steering 系统提供更灵活的包含模式（始终/条件/手动），Q Developer 的 Project Rules 仅支持始终包含

## 功能对比

{{% hint info %}}
**最后对比日期**：2025 年 11 月 25 日
{{% /hint %}}

<table>
<thead>
<tr>
<th>类别</th>
<th>功能</th>
<th>描述</th>
<th>Kiro</th>
<th>Q Developer VS Code 插件</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2"><strong>聊天</strong></td>
<td>问答聊天</td>
<td>来回对话</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>内联编辑</td>
<td>直接在编辑器中编辑代码或提问</td>
<td>✅ 支持额外上下文，多轮对话</td>
<td>✅ 无额外上下文，单轮对话</td>
<td></td>
</tr>
<tr>
<td rowspan="6"><strong>代理</strong></td>
<td>Vibe</td>
<td>自主编程任务、终端命令和代码编辑</td>
<td>✅</td>
<td>✅ 代理编程</td>
<td></td>
</tr>
<tr>
<td>Spec</td>
<td>结构化处理复杂开发任务的方法，将软件开发过程正式化</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>Supervised mode</td>
<td>Kiro 展示每个建议的操作并等待您的批准后再继续。您将看到 Kiro 想要进行的确切更改，并可以接受、拒绝或修改它们。</td>
<td>✅</td>
<td>❌</td>
<td>Kiro 会要求您审查和接受代码更改。VS Code 插件直接更改文件并提供撤销编辑的方法。</td>
</tr>
<tr>
<td>Autopilot mode</td>
<td>自主完成端到端任务。它可以创建文件、在多个位置修改代码、运行命令，并在每个步骤都不需要批准的情况下做出架构决策。</td>
<td>✅</td>
<td>❌</td>
<td>Kiro 可以读取终端输出，并可以配置可信命令。</td>
</tr>
<tr>
<td>差异和审查</td>
<td>审查和管理 AI 代理生成的代码更改</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>Hooks</td>
<td>当IDE中发生特定事件时执行预定义代理操作的自动触发器</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td rowspan="1"><strong>内联补全</strong></td>
<td>自动补全</td>
<td>在您输入时提供建议并补全代码</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td rowspan="5"><strong>上下文</strong></td>
<td>代码库索引</td>
<td>通过计算每个文件的嵌入来索引您的代码库。改善AI对您代码的回答。</td>
<td>✅ 通过 #codebase</td>
<td>✅ 通过 @workspace</td>
<td></td>
</tr>
<tr>
<td>规则</td>
<td>对模型的系统级指令</td>
<td>✅ Steering</td>
<td>✅ Project Rules</td>
<td>Kiro 的 Steering 提供始终/条件/手动包含模式，而 Q IDE 插件仅提供始终包含模式。</td>
</tr>
<tr>
<td>添加图片</td>
<td>将图片添加到上下文中</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>固定上下文项</td>
<td>上下文固定让您指定在聊天会话中添加到所有消息的上下文项。当您固定上下文项时，它会自动包含在当前对话的每条消息中。</td>
<td>❌</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>Prompt Library</td>
<td>在库中存储提示，将它们插入聊天中而无需每次重新输入提示</td>
<td>❌</td>
<td>✅</td>
<td>在 Kiro 中，您可以将提示放在手动 Steering 中，并使用 #steering 命令包含提示。</td>
</tr>
<tr>
<td rowspan="11"><strong>@ 符号</strong></td>
<td>@Files</td>
<td>引用项目中的特定文件</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>@Folders</td>
<td>引用整个文件夹以获得更广泛的上下文</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>@Code</td>
<td>引用代码库中的特定代码片段或符号</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>@Docs</td>
<td>访问文档和指南</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>@Git</td>
<td>引用 git 历史和更改</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>@Rules</td>
<td>使用规则</td>
<td>✅ 引用 Steering 文件</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>@Terminals</td>
<td>引用终端内容</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>@Web</td>
<td>引用外部网络资源和文档</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td># Problems</td>
<td>引用当前文件中的问题</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>@Lint Errors</td>
<td>引用代码检查错误（仅聊天）</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>@Prompts</td>
<td>Prompt Library。将保存的提示添加到上下文中。</td>
<td>❌</td>
<td>✅</td>
<td>在 Kiro 中，您可以将提示放在手动 Steering 中，并使用 #steering 命令包含提示。</td>
</tr>
<tr>
<td rowspan="5"><strong>MCP</strong></td>
<td>配置</td>
<td>如何配置 MCP 服务器</td>
<td>✅ JSON 文件</td>
<td>✅ GUI</td>
<td></td>
</tr>
<tr>
<td>工作区级别 MCP</td>
<td>适用于当前工作区</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>用户级别 MCP</td>
<td>适用于所有项目</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td><code>stdio</code> 传输</td>
<td>本地桌面上的 MCP 服务器</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>自动批准可信工具</td>
<td>避免对可信工具重复批准提示</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td rowspan="5"><strong>用户体验</strong></td>
<td>并行会话</td>
<td>允许打开多个标签页，并行运行代理/聊天</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>任务列表</td>
<td>显示当前任务和队列中的任务</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>历史记录</td>
<td>查看和管理聊天对话</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>上下文摘要</td>
<td>自动摘要和管理上下文以保持聊天高效</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>自定义布局</td>
<td>快速自定义IDE布局</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td rowspan="2"><strong>Named Agent</strong></td>
<td>安全审查</td>
<td>用于识别安全和代码质量问题的专门代理</td>
<td>❌</td>
<td>✅ 内置代码审查的 tool</td>
<td></td>
</tr>
<tr>
<td>Java 升级</td>
<td>升级 Java</td>
<td>❌</td>
<td>✅ 使用 <code>/transform</code> 命令</td>
<td>需要额外收费。</td>
</tr>
</tbody>
</table>

## Amazon Q Developer 用户常见问题

### 🎯 **基本概念**

**问：什么是 Kiro，Kiro 与 Amazon Q Developer 有什么区别？**

**Kiro** 是一个完整的 AI 开发平台，包含 IDE、CLI 和 Autonomous Agent 三大组件，专为 AI 辅助开发而从头构建。**Amazon Q Developer** 主要作为插件/扩展在现有开发环境（如 Visual Studio Code、JetBrains、Eclipse、Visual Studio）中工作。

主要区别：

- **Kiro**：完整的独立 AI 开发平台，提供全方位的开发体验
- **Amazon Q Developer**：IDE 插件形式，与现有开发环境集成

### 🔐 **账户和登录**

**问：如何使用我的 Amazon Q Developer Pro 账户登录 Kiro？**

现阶段我们建议使用 [Kiro 企业级订阅](https://kiro.dev/enterprise/) 来使用 Kiro。如果您已有 Amazon Q Developer Pro 订阅，可以考虑[将订阅升级到 Kiro](../amazon-q/migrate/)。

使用 Amazon Q Developer Pro 账户登录 Kiro 的步骤：

1. 在登录页面上，选择 **Sign in with your organization identity**

2. 在使用 AWS Identity Center 登录页面上：
   - 输入起始 URL（例如：`https://your-company.awsapps.com/start`）
   - 选择配置您的 AWS Identity Center 的 AWS 区域
   - 请联系您的管理员获取这些信息

3. 选择 **Continue** 并按照屏幕上的说明完成身份验证过程

### 🚀 **功能对比**

**问：Kiro 相比 Amazon Q Developer 有什么独特优势？**

Kiro 作为完整平台提供了 Amazon Q Developer 插件无法匹敌的功能：

- **Spec Mode**：结构化处理复杂开发任务的方法，将软件开发过程正式化
- **Agent Hooks**：当 IDE 中发生特定事件时执行预定义操作的自动触发器
- **Autonomous Agent**：前沿的自主智能体，能够跨仓库工作并独立处理开发任务
- **灵活的自主性控制**：Autopilot 模式（自主修改）和 Supervised 模式（应用前审查）
- **完整的 CLI 集成**：强大的命令行工具，支持自定义 Agent 和工作流程自动化
- **丰富的上下文引用**：支持 #Docs、#Git、#Rules、#Terminals、#Web 等多种上下文方式

**问：Amazon Q Developer 有哪些 Kiro 暂时不支持的功能？**

Amazon Q Developer 在某些方面仍有优势：

- **GUI 配置**：图形界面配置 MCP 服务器，比 Kiro 的 JSON 文件配置更直观
- **固定上下文项**：可以指定在聊天会话中自动添加到所有消息的上下文项
- **Prompt Library**：内置提示库功能，可存储和重用常用提示
- **Named Agent**：提供专门的 Java 升级（/transform）代理

### 🔧 **技术细节**

**问：Kiro 的 Steering 系统与 Amazon Q Developer 的 Project Rules 有什么区别？**

- **Kiro Steering**：提供更灵活的包含模式
  - 始终包含：类似 Project Rules 的默认行为
  - 条件包含：基于文件匹配模式自动包含
  - 手动包含：通过 #steering 命令按需包含

- **Amazon Q Developer Project Rules**：仅支持始终包含模式，所有规则都会自动添加到每次对话中

**问：如何在 Kiro 中实现类似 Prompt Library 的功能？**

虽然 Kiro 没有内置的 Prompt Library，但您可以：

1. 将常用提示保存在手动 Steering 文件中
2. 使用 `#steering` 命令按需包含这些提示
3. 这种方式提供了更灵活的提示管理和组织方式

### 📈 **迁移和升级**

**问：我应该从 Amazon Q Developer 迁移到 Kiro 吗？**

这取决于您的需求：

**选择 Kiro 如果您需要：**
- 完整的 AI 开发平台体验
- 结构化的 Spec 驱动开发方法
- 跨仓库的自主 Agent 功能
- 强大的 CLI 和自动化工具
- 更灵活的上下文和规则管理

**继续使用 Amazon Q Developer 如果您：**
- 更喜欢在现有 IDE 中工作
- 需要 GUI 配置 MCP 服务器
- 依赖固定上下文项和 Prompt Library 功能
- 主要进行 Java 开发并需要升级工具

两个工具都是 AWS 出品，您可以根据项目需求和个人偏好选择最适合的工具。
