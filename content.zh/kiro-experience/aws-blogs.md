---
title: "Kiro 技术博客"
weight: 30
bookToc: true
---

# Kiro 相关技术博客

以下收录了 AWS 官方博客中与 Kiro 相关的技术文章，按发布时间倒序排列。

---

## AI 时代的 EKS 升级范式：用 Kiro-cli 让 Agent 接管识别、升级与排障

**日期**：2026-07-03 | **分类**：Containers

本文以真实集群从 EKS 1.32 升级到 1.35 为例，展示如何将风险识别、路径规划、升级执行和故障定位交给 Kiro agent。在同一集群做对照实验——唯一变量是否加载 Skill 知识库：无 Skill 时工程师需全程介入，耗时约 6 小时；加载 Skill 后 agent 自主执行，耗时约 2.5 小时，节省 60%。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/ai-eks-kiro-cli-agent-recognition/)

---

## 基于 Serverless 构建 Kiro 企业用量费用分摊与自动化报告方案

**日期**：2026-06-17 | **分类**：Artificial Intelligence

利用 AWS Serverless 架构实现 Kiro 费用的自动化采集、用户级分摊、CSV 报告生成，并通过飞书 Webhook 推送可视化摘要卡片。方案基于 CUR 2.0、Amazon Athena、AWS Lambda 和 Amazon EventBridge，无需管理服务器，按需付费。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/based-on-serverless-build-kiro-enterprise/)

---

## 构建无服务器Kiro调度平台：用Kiro CLI + EventBridge + ECS Fargate实现定时AI任务

**日期**：2026-06-04 | **分类**：Artificial Intelligence

介绍 Kiro Job Scheduler——一个完全基于 AWS 无服务器架构的 AI 任务调度平台。让团队中的任何人通过 Web 界面配置定时 AI 任务：自定义 Agent 角色、挂载 MCP 工具服务器、编排 Skills 技能包，实现从「每日新闻摘要」到「定期代码审计」的各类自动化场景，支持 7×24 小时无人值守运行。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/platform-kiro-cli-eventbridge-ecs-fargate-implement-ai-task/)

---

## 基于Amazon Quick与Amazon Bedrock AgentCore打造对话式 FinOps助手

**日期**：2026-05-28 | **分类**：Artificial Intelligence

介绍如何将 AWS 账单相关 API 通过 MCP 协议封装为工具，部署到 Amazon Bedrock AgentCore Runtime，并接入 Amazon Quick Chat Agent。文中对 awslabs 的 billing-cost-management-mcp-server 做了改造，所有改造均通过 Kiro 以 Vibe Coding 的方式完成。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/based-on-amazon-quick-amazon-bedrock-agentcore/)

---

## 基于 Amazon IoT Core 与 Kiro 构建可迁移的工业 IoT 数据管道

**日期**：2026-05-26 | **分类**：Internet of Things

介绍如何平滑地进行智慧工厂项目 IoT 系统的迁移，记录了如何把"手动步骤指南"演化成幂等的 boto3 编排脚本，再进一步用 Kiro 把它包装成一个 AI Agent 能直接调用的工作流。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/based-on-amazon-iot-core-kiro-build-migration-iot/)

---

## 基于 Amazon ECS Fargate 自建 Keycloak 作为 AWS IAM Identity Center 外部 IdP，为 Kiro 提供企业级 SSO 登录

**日期**：2026-05-22 | **分类**：Security, Identity & Compliance

Kiro 支持 Google、GitHub、AWS Builder ID、AWS IAM Identity Center（IdC）多种登录方式。本文聚焦 IdC 这条路径，介绍如何基于 Amazon ECS Fargate 自建 Keycloak 作为外部身份提供商，适合需要把 Kiro 纳入企业身份治理、按组织统一下发权限的团队。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/based-on-amazon-ecs-fargate-keycloak-aws-iam-identity-center/)

---

## 使用 Kiro 和 MCP 自动化大规模升级 RDS MySQL 8.0 至 RDS MySQL 8.4

**日期**：2026-05-22 | **分类**：Database

介绍 RDS MySQL Upgrade Assistant 开源工具，可批量执行 Amazon RDS MySQL 8.0 到 8.4 主版本升级。通过 19 项 SQL 预检查引擎、自动化参数组迁移、蓝绿部署编排，所有作业都可以通过 shell 脚本或 Kiro IDE/CLI 的自然语言进行访问。工具结合了 MCP 服务器和 Kiro Steering 文件，实现自然语言驱动的升级编排。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/using-kiro-mcp-automation-rds-mysql-8-0-rds-mysql-8-4/)

---

## 一种基于Web访问的Kiro CLI 共享访问实现

**日期**：2026-05-07 | **分类**：Artificial Intelligence

介绍 Webaccess KiroCLI Platform，一种基于 Web 终端的 TTY 共享访问架构，采用 Gotty+FastAPI+Vue 技术框架，结合 AWS IAM Identity Center 实现 SSO 零凭证分发，让开发者和运维人员无需本地安装即可通过浏览器使用完整的 Kiro CLI 能力。整个项目从需求分析到代码实现，全程使用 Kiro IDE 的 Spec 驱动开发流程完成。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/based-on-web-kiro-cli-share-implement/)

---

## 用 Kiro CLI 自动搭建 FluentBit 日志采集方案：两种 EKS 埋点数据落地 S3 Parquet 的实战对比

**日期**：2026-04-24 | **分类**：Artificial Intelligence

展示如何使用 Kiro CLI（AWS 推出的 AI 驱动命令行助手）配合 Amazon EKS MCP Server，通过自然语言对话，自动完成两种 FluentBit 日志采集方案的规划、搭建和验证。涵盖 Kiro CLI 的 Steering、Skills 和 MCP 集成等核心能力。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/kiro-cli-fluentbit-logging-solution-eks-s3-parquet-comparison/)

---

## AI 驱动的跨云网络搭建：用 Claude Code 和 Kiro CLI 实现 AWS-腾讯云 IPSec VPN 双隧道互联

**日期**：2026-04-24 | **分类**：Artificial Intelligence

介绍如何利用 Claude Code（负责腾讯云侧）和 Kiro CLI（负责 AWS 侧）两个 AI 工具协作，在几小时内完成 AWS 与腾讯云之间 IPsec VPN 双隧道互联的搭建，并迭代了三种架构方案，展示了 AI 工具在跨云网络配置中的实际价值。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/ai-network-claude-code-kiro-cli-implement-aws-ipsec-vpn/)

---

## 用 Kiro Skill 打造你的专属 AI 工作流：以会议纪要自动生成为例

**日期**：2026-04-17 | **分类**：How-To

以"会议录音自动转会议纪要"为例，手把手带你构建一个 Kiro Skill，实现一条指令将会议录音变成结构化的会议纪要和工作日报。同时介绍 Kiro 的四大扩展机制（Steering、Skills、Powers、Hooks）的定位与区别。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/kiro-skill-build-custom-ai-workflow-meeting-minutes-auto-generate/)

---

## 以Kiro快速部署云上Agent：只需几个小时，从业务需求到部署于Amazon Bedrock Agentcore落地

**日期**：2026-04-02 | **分类**：Artificial Intelligence

使用 Kiro AI IDE 开发工具，快速实现各种业务 Agent。从业务需求到开发测试到云上部署，整个过程缩短到几个小时。结合 Amazon Bedrock AgentCore 的免运维、安全隔离和扩展性，适合生产级别 Agent 大规模部署。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/kiro-quick-deploy-agent-deploy-amazon-bedrock-agentcore/)

---

## 从 SDLC 到 AIDLC：CI&T 对 AI 驱动软件开发模式的探索及 Kiro 最佳实践

**日期**：2026-03-30 | **分类**：DevOps

了解 AIDLC 的演进脉络，以及如何利用前沿的 Agent 框架重塑整个研发流程的实践和经验。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/sdlc-aidlc-ci-t-ai-development-explore-kiro-best-practices/)

---

## 将 Kiro CLI 封装为 REST API：双通道架构实践

**日期**：2026-03-26 | **分类**：Artificial Intelligence

介绍将 Kiro CLI 封装为标准 REST API 的完整实现方案，重点说明双通道架构的设计决策，以及 ACP 协议通信中的关键技术细节。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/kiro-cli-rest-api-architecture-practice/)

---

## 当 Kiro 遇上 OpenClaw：AI Agent 双向协作的实践探索

**日期**：2026-03-26 | **分类**：Artificial Intelligence

探索 Kiro 与 OpenClaw 基于 MCP + ACP 双协议的双向协作架构。四个实战案例验证了该模式在架构评审、智能运维、数据日报、异步编码场景下的显著效率提升。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/kiro-openclaw-ai-agent-practice-explore/)

---

## AI 驱动的 Graviton 迁移评估：Kiro Power 实战指南

**日期**：2026-03-25 | **分类**：Business Productivity

深入探讨如何利用 Kiro Power 加速 Graviton 迁移，涵盖代码分析、依赖检查、容器适配的完整流程。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/ai-graviton-migration-kiro-power-guide/)

---

## 使用 Kiro CLI 和 Agent Client Protocol 构建飞书 AI 聊天机器人

**日期**：2026-03-24 | **分类**：Artificial Intelligence

如何将 Kiro CLI 变成通用 Agent 后端，并用不到 1000 行 Rust 代码构建一个飞书聊天机器人。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/using-kiro-cli-agent-client-protocol-build-ai-chat/)

---

## 让 Kiro 和 Claude Code 响应 IM 消息：用 ACP Bridge 打造异步 AI 编程工作流

**日期**：2026-03-17 | **分类**：How-To

介绍 ACP Bridge——一个将本地 CLI 编程助手通过 ACP 协议暴露为 HTTP 服务的桥接工具，结合 OpenClaw Gateway 和 AWS 基础设施，实现从 Discord 消息触发异步 AI 编程任务的完整闭环。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/enable-kiro-and-claude-code-for-im-with-acp-bridge-async-ai-workflow/)

---

## 用 Kiro 构建 AI：基于 AWS 基础设施快速构建企业级 Agentic AI 平台

**日期**：2026-03-04 | **分类**：Artificial Intelligence

如何用 Kiro（AI IDE）完成全流程开发，基于 Strands Agents 框架、Amazon Bedrock AgentCore 和 AWS 基础设施，在一周内构建了一个能交付实际产出的 AI Agent 平台——全程零人工编码。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/building-enterprise-agentic-ai-with-kiro-on-aws/)

---

## 把 Kiro CLI 当作 Agent SDK：一键订阅即可构建你的 Agent 应用

**日期**：2026-03-03 | **分类**：Artificial Intelligence

Kiro CLI 的 ACP 支持为 Agent 应用开发提供了一条新路径：将命令行工具转变为可编程的 Agent 后端，通过标准化协议暴露完整能力。开发者可以跳过 AI 基础设施的前期投入，专注于应用本身的业务逻辑和用户体验。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/use-kiro-cli-as-agent-sdk-build-your-agent-app-with-one-click-subscription/)

---

## 三剑合璧Quick Suite + Agent Core + Kiro联动实践：海外物流报价助手实战

**日期**：2026-01-12 | **分类**：Serverless

使用 Amazon Kiro + Amazon Bedrock AgentCore + Amazon Quick Suite 的 Serverless 架构方案，通过 Kiro 的 Spec-Driven Development 模式完成 MCP 工具代码的开发和 AgentCore 托管部署，为跨境物流业务构建智能报价助手。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/quick-suite-agent-core-kiro-logistics-quote-assistant/)

---

## 从手动到智能：用 Kiro CLI + OpenSearch MCP 让每个人都成为 OpenSearch 专家

**日期**：2026-01-12 | **分类**：Artificial Intelligence

介绍如何利用 Kiro CLI 和 OpenSearch MCP Server 的组合，降低 OpenSearch 运维和应用开发的门槛。通过自然语言驱动集群配置、索引管理、性能调优和故障排查，让普通运维人员和开发者都能像专家一样高效工作。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/from-manual-to-smart-use-kiro-cli-opensearch-mcp-to-make-everyone-an-opensearch-expert/)

---

## 使用 Kiro AI IDE 开发 AWS CDK 部署架构：从模糊需求到三层堆栈的协作实战

**日期**：2025-12-17 | **分类**：Big Data

记录了一次真实的 AI 辅助开发过程：如何使用 Kiro AI IDE 从一个模糊的部署需求开始，通过人机协作，逐步设计出三层堆栈架构，并完成基于 Amazon EMR Flink 智能监控系统的 AWS CDK 部署代码。开发时间从 10 小时缩短到 1.5 小时。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/blog-03-kiro-ai-cdk-development/)

---

## 使用 Kiro AI IDE 开发基于Amazon EMR 的Flink 智能监控系统实践

**日期**：2025-12-17 | **分类**：Big Data

介绍如何使用 Kiro AI IDE 开发 Amazon EMR Flink 智能监控系统，重点分享基于 Strands Agents MCP 和 AWS Data Processing MCP 的开发实践，以及 Spec 驱动开发的完整流程。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/developing-flink-monitoring-system-on-amazon-emr-with-kiro-ai-ide/)

---

## 使用 Kiro 规范驱动开发加速数据质量建设

**日期**：2025-12-09 | **分类**：AWS re:Invent

围绕规范驱动开发理念，在典型数仓场景下，利用 Kiro AI IDE 使用 Redshift MCP 进行数据采样及血缘探索，自动生成 Amazon Glue Data Quality 规则及脚本，并通过 Glue MCP 部署质量任务，帮助数据工程团队快速落地质量管理。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/use-kiro-specification-driven-development-to-accelerate-data-quality-construction/)

---

## 让 AI 理解你的组件库：新一代智能 D2C 架构 — 基于 AWS Kiro MCP Skills 的智能转换实践

**日期**：2025-12-08 | **分类**：Case Study

探讨如何利用 AWS Kiro IDE、MCP 和 Skills 构建新一代智能 Design-to-Code（D2C）平台。通过 Skills 将组件知识封装为可调用工具，结合 Steering 策略引导，使 AI 能够自动发现、理解并正确使用企业组件库，将组件库利用率从接近 0% 提升到 80% 以上。

🔗 [阅读全文](https://aws.amazon.com/cn/blogs/china/ai-understanding-component-library-intelligent-d2c-architecture-aws-kiro-mcp-skills/)

---

{{% hint info %}}
**持续更新**：本页面会定期收录新发布的 Kiro 相关博客。更多 AWS 官方博客请访问 [aws.amazon.com/cn/blogs/china](https://aws.amazon.com/cn/blogs/china/)。
{{% /hint %}}
