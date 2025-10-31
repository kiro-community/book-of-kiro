---
title: vs. Cursor
weight: 1
bookToc: false
translationKey: vs-cursor
---

# Kiro vs. Cursor

[Cursor](https://cursor.com) 是由 [Anysphere](https://anysphere.inc/) 开发的 AI 驱动代码编辑器。[Kiro](https://kiro.dev) 是由 [AWS](https://aws.amazon.com/) 开发的 AI IDE。两款工具都旨在提升开发者生产力。两款工具都是 Visual Studio Code 的分支，并直接在 IDE 中集成了先进的 AI 功能。

## 总结

Kiro 和 Cursor 都是 AI 驱动的 IDE，能够提升开发者生产力，但它们在 AI 辅助编程方面采用了不同的方法。以下是主要区别：

**Kiro 的独特优势：**

- **Spec-driven development**：结构化处理复杂开发任务的方法，将软件开发过程正式化 - 这是 Kiro 独有的功能
- **Agent Hooks**：当 IDE 中发生特定事件时执行预定义 Agent 操作的自动触发器
- **灵活的自主性**：既有 Autopilot 模式（自主完成端到端任务）也有 Supervised 模式（应用更改前人工审查）

**Cursor 的独特优势：**

- **更多模型选择**：支持多个提供商（Anthropic、Google、OpenAI、xAI）并具有自动选择功能
- **预测下一次编辑**：Tab-tab 功能，基于最近的更改预测您的下一次编辑
- **记忆功能（Memories）& 检查点（Checkpoints）**：基于对话自动生成的规则，在会话间保持上下文；Agent 更改的自动快照，便于轻松回滚

## 功能对比

{{% hint info %}}
**最后对比日期**：2025 年 8 月 2 日
{{% /hint %}}

<table>
<thead>
<tr>
<th>类别</th>
<th>功能</th>
<th>描述</th>
<th>Kiro</th>
<th>Cursor</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="4"><strong>模型</strong></td>
<td>模型提供商</td>
<td>LLM 模型提供商</td>
<td>Anthropic: Claude Sonnet 3.7/4</td>
<td>Anthropic: Claude Sonnet 3.5/3.7/4<br>Google: Gemini 2.5<br>OpenAI: GPT 4.1; GPT-4o; o3<br>xAI: Grok 3 Beta; Grok 3 Min</td>
<td>Claude 4 是最佳编程模型</td>
</tr>
<tr>
<td>自动模式</td>
<td>基于容量和性能自动选择模型</td>
<td>❌</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>API 密钥</td>
<td>使用 API 密钥直接调用模型提供商。通常比订阅费用更高。功能通常受限。</td>
<td>❌</td>
<td>✅</td>
<td>这通常比订阅费用更高。如果使用 API 密钥，Cursor 中的代理等核心功能会被禁用。</td>
</tr>
<tr>
<td>上下文窗口</td>
<td>聊天的上下文窗口</td>
<td>Sonnet 支持 200K</td>
<td>大多数模型支持 128K</td>
<td>如果需要 200K 上下文窗口，Cursor 需要额外付费。</td>
</tr>
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
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td rowspan="6"><strong>Agent</strong></td>
<td>Agent 模式</td>
<td>自主编程任务、终端命令和代码编辑</td>
<td>✅</td>
<td>✅</td>
<td>Kiro 的 Agent 支持 Autopilot 模式和 Supervised 模式。Autopilot 模式允许 Kiro 在打开的工作区内自主修改文件。Supervised 模式允许用户在应用更改前审查和批准更改</td>
</tr>
<tr>
<td>规格模式</td>
<td>结构化处理复杂开发任务的方法，将软件开发过程正式化</td>
<td>✅</td>
<td>❌</td>
<td>这是 Kiro 的独有功能。</td>
</tr>
<tr>
<td>检查点</td>
<td>Agent 对代码库更改的自动快照。让您可以撤销 Agent 修改。</td>
<td>❌</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>规划</td>
<td>Agent 通过待办事项和队列规划和管理复杂任务</td>
<td>❌</td>
<td>✅</td>
<td></td>
</tr>

<tr>
<td>差异和审查</td>
<td>审查和管理 AI Agent 生成的代码更改</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>Hooks</td>
<td>当IDE中发生特定事件时执行预定义 Agent 操作的自动触发器</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td rowspan="3"><strong>内联补全</strong></td>
<td>内联聊天</td>
<td>直接在编辑器中提问并获得建议</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>自动补全</td>
<td>在您输入时提供建议并补全代码</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>预测下一次编辑（Tab-tab）</td>
<td>使用最近的编辑来预测您可能想要进行的下一次编辑及其位置</td>
<td>❌</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td rowspan="5"><strong>上下文</strong></td>
<td>代码库索引</td>
<td>通过计算每个文件的嵌入来索引您的代码库。改善AI对您代码的回答。</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>规则</td>
<td>对模型的系统级指令</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>记忆</td>
<td>基于聊天对话自动生成的规则。限定在您的项目范围内，在会话间保持上下文。</td>
<td>❌</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>忽略文件</td>
<td>使用忽略文件控制文件访问</td>
<td>❌</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>添加图片</td>
<td>将图片添加到上下文中</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td rowspan="14"><strong>@ 符号</strong></td>
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
<td>✅</td>
<td></td>
</tr>
<tr>
<td>@Git</td>
<td>引用 git 历史和更改</td>
<td>✅ Kiro 引用当前 git 差异。</td>
<td>✅ Cursor 可以引用当前 git 差异或特定提交。</td>
<td></td>
</tr>
<tr>
<td>@Past Chats</td>
<td>使用汇总的编辑器会话</td>
<td>❌</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>@Rules</td>
<td>使用规则</td>
<td>✅ 引用指导规则。</td>
<td>✅ 引用 Cursor 规则。</td>
<td></td>
</tr>
<tr>
<td>@Terminals</td>
<td>引用终端内容</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>@Web</td>
<td>引用外部网络资源和文档</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>@Recent Changes</td>
<td>最近的代码修改作为AI对话的上下文</td>
<td>❌</td>
<td>✅ Cursor 优先考虑最近的10次更改。</td>
<td></td>
</tr>
<tr>
<td># Problems</td>
<td>引用当前文件中的问题</td>
<td>✅ Kiro 引用IDE中的问题。</td>
<td>❌</td>
<td></td>
</tr>
<tr>
<td>@Lint Errors</td>
<td>引用代码检查错误（仅聊天）</td>
<td>✅ 代码检查错误包含在 #Problems 中。</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td># Files</td>
<td>将文件添加到上下文中而不引用</td>
<td>❌</td>
<td>✅</td>
<td>不重要。Cursor 甚至没有在其UI上明确说明如何使用此功能。</td>
</tr>
<tr>
<td>/ Commands</td>
<td>将打开和活动的文件添加到上下文中</td>
<td>❌</td>
<td>✅</td>
<td>不重要。Cursor 甚至没有在其UI上明确说明如何使用此功能。</td>
</tr>
<tr>
<td rowspan="7"><strong>MCP</strong></td>
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
<td></td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td><code>SSE</code> 传输</td>
<td></td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td><code>Streamable HTTP</code> 传输</td>
<td></td>
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
<td>MCP 市场</td>
<td>一键安装 MCP 服务器</td>
<td>❌</td>
<td>✅</td>
<td>这不关键。客户可以从第三方市场安装 MCP 服务器。</td>
</tr>
<tr>
<td rowspan="2"><strong>其他</strong></td>
<td>远程 Agent</td>
<td>在云端运行的异步远程 Agent</td>
<td>❌</td>
<td>✅ Cursor 中的后台 Agent。需要额外收费。</td>
<td>这不关键。</td>
</tr>
<tr>
<td>网页门户</td>
<td>从网页门户运行编程 Agent</td>
<td>❌</td>
<td>✅ 需要额外收费。</td>
<td>这不关键。</td>
</tr>
<tr>
<td rowspan="5"><strong>用户体验</strong></td>
<td>并行会话</td>
<td>允许打开多个标签页，并行运行 Agent/聊天</td>
<td>✅</td>
<td>✅</td>
<td>两款工具都可以并行运行多个会话。</td>
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
<td>✅</td>
<td></td>
</tr>
<tr>
<td>自定义布局</td>
<td>快速自定义IDE布局</td>
<td>✅</td>
<td>❌</td>
<td></td>
</tr>
</tbody>
</table>

## 价格对比

{{% hint info %}}
**最后更新日期**：2025 年 9 月 24 日。如需最新定价信息，请查询 Kiro 和 Cursor 官网。
{{% /hint %}}

### 个人版

- Kiro 价格套餐包含**固定积分**。
- Cursor 价格套餐包含**按模型 API 价格**计算的每月 Agent 使用预算。

{{% hint warning %}}
**Pro 版本试用**</br>
Kiro 和 Cursor 都提供 2 周免费的 Pro 版本试用。试用期内，Kiro 提供额外 500 积分。Cursor 未明确给出 Agent 调用次数或模型 API 使用额度。
{{% /hint %}}

<table>
<thead>
<tr>
<th>Kiro 套餐</th>
<th>Cursor 套餐</th>
<th>费用（每月/每用户）</th>
<th>Kiro</th>
<th>Cursor</th>
</tr>
</thead>
<tbody>
<tr>
<td>Free</td>
<td>Hobby</td>
<td>$0</td>
<td>• 50积分</td>
<td>Limited (官方无明确说明)</td>
</tr>
<tr>
<td>Pro</td>
<td>Pro</td>
<td>$20</td>
<td>• 1000积分</td>
<td>• ~225 Sonnet 4 请求，或<br>• ~550 Gemini 请求，或<br>• ~500 GPT 5 请求</td>
</tr>
<tr>
<td>Pro+</td>
<td>-</td>
<td>$40</td>
<td>• 2000积分</td>
<td>-</td>
</tr>
<tr>
<td>-</td>
<td>Pro+</td>
<td>$60</td>
<td>-</td>
<td>• ~675 Sonnet 4 请求，或<br>• ~1,650 Gemini 请求，或<br>• ~1,500 GPT 5 请求</td>
</tr>
<tr>
<td>Power</td>
<td>Ultra</td>
<td>$200</td>
<td>• 10000积分</td>
<td>• ~4,500 Sonnet 4 请求，或<br>• ~11,000 Gemini 请求，或<br>• ~10,000 GPT 5 请求</td>
</tr>
</tbody>
</table>

{{% hint info %}}
Kiro 超过套餐后，费用为 $0.04/积分。</br>Cursor 超出套餐后，AUTO 模式下 Input: $1.25 per 1M tokens，Output: $6.00 per 1M tokens; Cached Input: $0.25 per 1M tokens。或按模型 API 费用计费，Sonnet 4 约为 $0.09/次。
{{% /hint %}}

**Kiro 的优势**:

- 定价透明、计算简单：固定的费用和调用次数。
- 超额费用便宜：超出额度后 $0.04/积分，低于 Cursor ~$0.09/次 （按 Sonnet 4 计价）。

**Cursor 价格优势**：

- 使用非 Claude 模型会更便宜

### 企业版

{{% hint warning %}}
企业版通常支持 SSO (单点登陆)、用户管理、用量统计和统一账单等功能。Kiro 暂未公布其三档付费套餐是否都适用于企业，以下内容仅为参考。
{{% /hint %}}

- Kiro 价格套餐包含**固定积分**。
- Cursor 价格套餐包含**固定次数**请求 (Sonnet 3.7 和 Sonnet 4 Thinking 模式请求记 2 次)。

<table>
<thead>
<tr>
<th>Kiro 套餐</th>
<th>Cursor 套餐</th>
<th>费用（每月/每用户）</th>
<th>Kiro</th>
<th>Cursor</th>
</tr>
</thead>
<tbody>
<tr>
<td>Pro</td>
<td>-</td>
<td>$20</td>
<td>• 1000积分</td>
<td>-</td>
</tr>
<tr>
<td>Pro+</td>
<td>Teams</td>
<td>$40</td>
<td>• 2000积分</td>
<td> 按 API token计价，且只包含 $20美金的 agent API token usage（ ~225 Sonnet 4 请求）。Cursor API 计价为 模型API 计价 +$0.25 per 1M tokens。</td>
</tr>
<tr>
<td>Power</td>
<td>-</td>
<td>$200</td>
<td>• 10000积分</td>
<td>-</td>
</tr>
</tbody>
</table>

{{% hint info %}}
Kiro 超过套餐后，费用为 $0.04/积分。</br>Cursor 超出套餐后，AUTO 模式下 Input: $1.25 per 1M tokens，Output: $6.00 per 1M tokens; Cached Input: $0.25 per 1M tokens。或按模型 API 费用计费，Sonnet 4 约为 $0.09/次。Cursor API 计价为 模型 API 计价 +$0.25 per 1M tokens。
{{% /hint %}}

**Kiro 优势**:

- 定价透明、计算简单：固定的费用和调用次数。
- 更多调用次数：$40 套餐，Kiro 包含更多调用次数，高于 Cursor。
- 超额费用便宜：超出额度后 $0.04/积分，低于 Cursor ~$0.11/次 （按 Sonnet 4 计价）。

**Cursor 优势**：

- 使用非 Claude 模型会更便宜
