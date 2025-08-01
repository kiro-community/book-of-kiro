---
title: vs. Cursor
weight: 1
bookToc: false
translationKey: vs-cursor
---

# Kiro vs. Cursor

[Cursor](https://cursor.com) 是由 [Anysphere](https://anysphere.inc/) 开发的AI驱动代码编辑器。[Kiro](https://kiro.dev) 是由 [AWS](https://aws.amazon.com/) 开发的AI IDE。两款工具都旨在提升开发者生产力。两款工具都是 Visual Studio Code 的分支，并直接在 IDE 中集成了先进的 AI 功能。

## 总结

Kiro 和 Cursor 都是AI驱动的IDE，能够提升开发者生产力，但它们在AI辅助编程方面采用了不同的方法。以下是主要区别：

**Kiro 的独特优势：**
- **规格模式（Spec Mode）**：结构化处理复杂开发任务的方法，将软件开发过程正式化 - 这是 Kiro 独有的功能
- **代理钩子（Agent Hooks）**：当IDE中发生特定事件时执行预定义代理操作的自动触发器
- **灵活的自主性**：既有自动驾驶模式（自主修改）也有监督模式（应用更改前审查）
- **更大的上下文窗口**：Sonnet 支持 200K tokens，而 Cursor 的 128K（需要额外付费才能获得 200K）

**Cursor 的独特优势：**
- **更多模型选择**：支持多个提供商（Anthropic、Google、OpenAI、xAI）并具有自动选择功能
- **预测下一次编辑**：Tab-tab 功能，基于最近的更改预测您的下一次编辑
- **记忆功能（Memories）**：基于对话自动生成的规则，在会话间保持上下文
- **检查点（Checkpoints）**：代理更改的自动快照，便于轻松回滚


## 功能对比

{{% hint info %}}
**最后对比日期**：2025年7月14日
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
<td>Anthropic: Sonnet 3.7/4</td>
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
<td rowspan="6"><strong>代理</strong></td>
<td>代理模式</td>
<td>自主编程任务、终端命令和代码编辑</td>
<td>✅</td>
<td>✅</td>
<td>Kiro 的代理支持自动驾驶模式和监督模式。自动驾驶模式允许 Kiro 在打开的工作区内自主修改文件。监督模式允许用户在应用更改前审查和批准更改</td>
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
<td>代理对代码库更改的自动快照。让您可以撤销代理修改。</td>
<td>❌</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>规划</td>
<td>代理通过待办事项和队列规划和管理复杂任务</td>
<td>❌</td>
<td>✅</td>
<td></td>
</tr>

<tr>
<td>差异和审查</td>
<td>审查和管理 AI 代理生成的代码更改</td>
<td>✅</td>
<td>✅</td>
<td></td>
</tr>
<tr>
<td>钩子</td>
<td>当IDE中发生特定事件时执行预定义代理操作的自动触发器</td>
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
<td>❌</td>
<td>✅</td>
<td>不关键。可以使用 `mcp-remote` 替代方案。</td>
</tr>
<tr>
<td><code>Streamable HTTP</code> 传输</td>
<td></td>
<td>❌</td>
<td>✅</td>
<td>不关键。可以使用 `mcp-remote` 替代方案。</td>
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
<td>远程代理</td>
<td>在云端运行的异步远程代理</td>
<td>❌</td>
<td>✅ Cursor 中的后台代理。需要额外收费。</td>
<td>这不关键。</td>
</tr>
<tr>
<td>网页门户</td>
<td>从网页门户运行编程代理</td>
<td>❌</td>
<td>✅ 需要额外收费。</td>
<td>这不关键。</td>
</tr>
<tr>
<td rowspan="5"><strong>用户体验</strong></td>
<td>并行会话</td>
<td>允许打开多个标签页，并行运行代理/聊天</td>
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



