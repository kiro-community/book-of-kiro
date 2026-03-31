---
title: "Kiro × OpenClaw 集成指南"
weight: 27
bookToc: true
---

# Kiro × OpenClaw 集成指南

[OpenClaw](https://github.com/openclaw/openclaw) 是一个开源 AI Agent 运行时，擅长多平台消息处理、定时任务、设备控制和外部系统集成。Kiro 擅长代码生成、架构设计和 AWS 云运维。两者通过 ACP + MCP 双协议实现双向协作，各取所长。

| 方向 | 协议 | 核心价值 |
|------|------|---------|
| **OpenClaw → Kiro** | ACP | OpenClaw 获得"深度思考和编码"的能力 |
| **Kiro → OpenClaw** | MCP | Kiro 获得"触达外部世界"的能力 |

---

## 一、OpenClaw 调用 Kiro

当 OpenClaw 需要完成代码生成、架构分析、AWS CDK 模板等复杂编码任务时，可以将任务委派给 Kiro。

### 1. 通过 acpx 调用（推荐）

OpenClaw 的 [acpx](https://github.com/openclaw/acpx)（ACP 命令行客户端）已内置支持 Kiro CLI 作为 coding agent（adapter: `kiro-cli-chat acp`），与 Codex、Claude Code、Gemini 等并列为 built-in agent。

**安装：**

```bash
npm install -g acpx@latest
# 或无需安装直接用
npx acpx@latest kiro 'fix the failing tests'
```

**常用命令：**

```bash
# 单次执行（one-shot）
acpx kiro exec 'summarize this repo'

# 持久会话（多轮对话）
acpx kiro sessions new
acpx kiro 'refactor the auth module'
acpx kiro 'now add unit tests'

# 命名会话（并行工作流）
acpx kiro -s backend 'implement token pagination'
acpx kiro -s frontend 'add dark mode support'

# 会话管理
acpx kiro status
acpx kiro sessions list
acpx kiro sessions history
```

**acpx 核心特性：**
- **持久会话**：多轮对话跨调用保持，按 repo 隔离
- **命名会话**：同一 repo 下并行多个工作流
- **Prompt 队列**：前一个 prompt 还在跑时，新 prompt 自动排队
- **崩溃恢复**：agent 进程挂掉后自动重连并恢复会话
- **结构化输出**：typed ACP 消息（thinking、tool calls、diffs），告别 ANSI 解析

### 2. 通过 ACP 协议直接调用

不使用 acpx 时，也可以直接启动 `kiro-cli acp` 子进程，通过 stdin/stdout 的 JSON-RPC 2.0 进行通信：

```python
import subprocess, json

proc = subprocess.Popen(
    ["kiro-cli", "acp"],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE
)

# JSON-RPC 握手
request = {
    "jsonrpc": "2.0",
    "id": 0,
    "method": "initialize",
    "params": {
        "protocolVersion": 1,
        "clientCapabilities": {
            "fs": {"readTextFile": True, "writeTextFile": True},
            "terminal": True
        },
        "clientInfo": {"name": "openclaw-bridge", "version": "1.0.0"}
    }
}
```

适合需要自定义控制流的场景。详见 [Kiro ACP 官方文档](https://kiro.dev/docs/cli/acp/)。

### 3. 通过 exec 工具调用（PTY 模式）

OpenClaw 内置的 `exec` 工具可以直接启动 `kiro-cli chat` 作为 coding agent。只需告诉 OpenClaw 使用以下方式：

```bash
# 基本调用
bash pty:true workdir:~/project command:"kiro-cli chat 'Your task'"

# 自动批准工具调用（类似 --yolo）
bash pty:true workdir:~/project command:"kiro-cli chat -a 'Refactor the auth module'"
```

关键点：
- `pty:true` 必须设置，kiro-cli 需要真实 TTY 环境
- `workdir` 指定项目目录，Kiro 会以此为上下文
- `-a` 参数自动批准所有工具调用，适合自动化场景

社区也有封装好的 [openclaw-kirocli-coding-agent](https://github.com/terrificdm/openclaw-kirocli-coding-agent) Skill 可直接使用，OpenClaw 安装该 Skill 后即可自动以正确方式调用 Kiro CLI。

### 4. 通过 acp-link 接入飞书 IM

[acp-link](https://github.com/xufanglin/acp-link) 是一个将飞书与 Kiro CLI 通过 ACP 协议连接的桥接服务，可以让团队在飞书中直接与 Kiro Agent 交互。

**核心能力：**
- 飞书话题（Thread）自动映射到 ACP Session，上下文干净连贯
- 流式响应实时更新为飞书消息卡片
- 工具调用状态同步展示（如"正在搜索文档……"）
- 内嵌 MCP Server，Agent 可反向操作飞书（如发送文件）
- 支持 Custom Agent，可为不同场景定制 Agent 行为

**配置示例（config.toml）：**

```toml
[feishu]
app_id = "cli_xxxxxxx"
app_secret = "xxxxxxxxx"

[kiro]
cmd = "kiro-cli"
args = ["acp", "--agent", "code-review-agent"]

# 进程池大小，默认 4
# pool_size = 4

[mcp]
# HTTP 监听端口，默认 9800
# port = 9800
```

**典型场景：**
- **Code Review Agent**：团队成员在飞书话题中 @机器人，Agent 自动分析项目代码并输出结构化审查报告
- **通用聊天助理**：作为 OpenClaw 的轻量替代，利用 Kiro 内置的 `web_fetch`、`shell` 等工具完成各类任务

详见博客：[使用 Kiro CLI 和 Agent Client Protocol 构建飞书 AI 聊天机器人](https://aws.amazon.com/cn/blogs/china/using-kiro-cli-agent-client-protocol-build-ai-chat/)

---

## 二、Kiro 调用 OpenClaw

当 Kiro 在编码过程中需要发送消息、读取外部数据、触发设备操作等，可以通过 MCP 调用 OpenClaw 暴露的工具。

### MCP 配置

在 `.kiro/settings/mcp.json` 中添加：

```json
{
  "mcpServers": {
    "openclaw": {
      "command": "npx",
      "args": ["-y", "openclaw-mcp@latest"],
      "env": {
        "OPENCLAW_GATEWAY": "https://gw.openclaw.ai",
        "OPENCLAW_TOKEN": "${OPENCLAW_TOKEN}"
      },
      "transportType": "stdio"
    }
  }
}
```

### OpenClaw MCP Server 暴露的工具

| 类型 | 工具 | 说明 |
|------|------|------|
| 同步 | `openclaw_chat` | 发送消息并获取响应（万能入口） |
| 同步 | `openclaw_status` | 获取 Gateway 状态和健康信息 |
| 同步 | `openclaw_instances` | 列出所有配置的 OpenClaw 实例 |
| 异步 | `openclaw_chat_async` | 异步发送消息，立即返回 task_id |
| 异步 | `openclaw_task_status` | 查询异步任务状态 |
| 异步 | `openclaw_task_list` | 列出所有任务，可按状态/session 筛选 |

`openclaw_chat` 是一个"万能入口"——通过自然语言，Kiro 可以让 OpenClaw 执行其内部的所有 40+ 工具能力（发飞书消息、读文档、搜索、操控设备、管理定时任务等）。

---

## 实战场景

### Spec 驱动的异步编码

1. 在 Kiro IDE 中使用 Spec 模式完成需求分析和架构设计（Requirements → Design → Tasks）
2. 通过 MCP 异步接口（`openclaw_chat_async`）将任务交给 OpenClaw 的编码子智能体
3. OpenClaw 基于 Spec 文件自主完成代码实现、单元测试、Git commit
4. Kiro 通过 `openclaw_task_status` 轮询进度，完成后获取仓库地址

**Kiro = 架构师（思考+设计），OpenClaw = 工程师（编码+交付）**

### 架构评审自动化

1. 客户在飞书发送架构迁移需求
2. OpenClaw 提取关键信息（当前架构、目标架构、合规要求、SLA）
3. 通过 ACP 委派 Kiro 生成 Well-Architected 评估 + CDK 模板
4. OpenClaw 将完整报告发回飞书群

### 智能运维响应

1. OpenClaw 检测到 P1 告警，推送飞书运维群
2. 通过 ACP 委派 Kiro 分析 CloudWatch Logs + X-Ray
3. Kiro 定位根因，生成修复 PR 和 EKS 扩容变更集
4. OpenClaw 执行修复并多通道推送事故报告

---

## 参考资料

**官方文档：**
- [Kiro ACP 官方文档](https://kiro.dev/docs/cli/acp/)
- [acpx GitHub（内置 Kiro 支持）](https://github.com/openclaw/acpx)
- [OpenClaw MCP Server](https://github.com/freema/openclaw-mcp)
- [OpenClaw 官方文档](https://docs.openclaw.ai)

**技术博客：**
- [当 Kiro 遇上 OpenClaw：AI Agent 双向协作的实践探索](https://aws.amazon.com/cn/blogs/china/kiro-openclaw-ai-agent-practice-explore/)
- [将 Kiro CLI 封装为 REST API：双通道架构实践](https://aws.amazon.com/cn/blogs/china/kiro-cli-rest-api-architecture-practice/)
- [使用 Kiro CLI 和 ACP 构建飞书 AI 聊天机器人](https://aws.amazon.com/cn/blogs/china/using-kiro-cli-agent-client-protocol-build-ai-chat/)
- [让 Kiro 和 Claude Code 响应 IM 消息：用 ACP Bridge 打造异步 AI 编程工作流](https://aws.amazon.com/cn/blogs/china/enable-kiro-and-claude-code-for-im-with-acp-bridge-async-ai-workflow/)
- [把 Kiro CLI 当作 Agent SDK：一键订阅即可构建你的 Agent 应用](https://aws.amazon.com/cn/blogs/china/use-kiro-cli-as-agent-sdk-build-your-agent-app-with-one-click-subscription/)
- [Integrate Kiro CLI into your AI Agent via ACP](https://dev.to/aws-builders/integrate-kiro-cli-into-your-ai-agent-via-acp-10jn)
