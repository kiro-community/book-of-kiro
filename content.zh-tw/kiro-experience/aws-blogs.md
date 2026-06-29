---
title: "Kiro 技術部落格"
weight: 30
bookToc: true
---

# Kiro 相關技術部落格

以下收錄了 AWS 官方部落格中與 Kiro 相關的技術文章，按發布時間倒序排列。

---

## 基於Amazon Quick與Amazon Bedrock AgentCore打造對話式 FinOps助手

**日期**：2026-05-28 | **分類**：Artificial Intelligence

介紹如何將 AWS 帳單相關 API 透過 MCP 協議封裝為工具，部署到 Amazon Bedrock AgentCore Runtime，並接入 Amazon Quick Chat Agent。文中對 awslabs 的 billing-cost-management-mcp-server 做了改造，所有改造均透過 Kiro 以 Vibe Coding 的方式完成。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/based-on-amazon-quick-amazon-bedrock-agentcore/)

---

## 基於 Amazon ECS Fargate 自建 Keycloak 作為 AWS IAM Identity Center 外部 IdP，為 Kiro 提供企業級 SSO 登入

**日期**：2026-05-22 | **分類**：Security, Identity & Compliance

Kiro 支援 Google、GitHub、AWS Builder ID、AWS IAM Identity Center（IdC）多種登入方式。本文聚焦 IdC 這條路徑，介紹如何基於 Amazon ECS Fargate 自建 Keycloak 作為外部身分提供商，適合需要把 Kiro 納入企業身分治理、按組織統一下發權限的團隊。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/based-on-amazon-ecs-fargate-keycloak-aws-iam-identity-center/)

---

## 使用 Kiro 和 MCP 自動化大規模升級 RDS MySQL 8.0 至 RDS MySQL 8.4

**日期**：2026-05-22 | **分類**：Database

介紹 RDS MySQL Upgrade Assistant 開源工具，可批次執行 Amazon RDS MySQL 8.0 到 8.4 主版本升級。透過 19 項 SQL 預檢查引擎、自動化參數群組遷移、藍綠部署編排，所有作業都可以透過 shell 腳本或 Kiro IDE/CLI 的自然語言進行存取。工具結合了 MCP 伺服器和 Kiro Steering 檔案，實現自然語言驅動的升級編排。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/using-kiro-mcp-automation-rds-mysql-8-0-rds-mysql-8-4/)

---

## 一種基於Web存取的Kiro CLI 共享存取實作

**日期**：2026-05-07 | **分類**：Artificial Intelligence

介紹 Webaccess KiroCLI Platform，一種基於 Web 終端的 TTY 共享存取架構，採用 Gotty+FastAPI+Vue 技術框架，結合 AWS IAM Identity Center 實現 SSO 零憑證分發，讓開發者和維運人員無需本機安裝即可透過瀏覽器使用完整的 Kiro CLI 能力。整個專案從需求分析到程式碼實作，全程使用 Kiro IDE 的 Spec 驅動開發流程完成。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/based-on-web-kiro-cli-share-implement/)

---

## 用 Kiro CLI 自動搭建 FluentBit 日誌採集方案：兩種 EKS 埋點資料落地 S3 Parquet 的實戰對比

**日期**：2026-04-24 | **分類**：Artificial Intelligence

展示如何使用 Kiro CLI（AWS 推出的 AI 驅動命令列助手）配合 Amazon EKS MCP Server，透過自然語言對話，自動完成兩種 FluentBit 日誌採集方案的規劃、搭建和驗證。涵蓋 Kiro CLI 的 Steering、Skills 和 MCP 整合等核心能力。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/kiro-cli-fluentbit-logging-solution-eks-s3-parquet-comparison/)

---

## 用 Kiro Skill 打造你的專屬 AI 工作流程：以會議紀要自動產生為例

**日期**：2026-04-17 | **分類**：How-To

以「會議錄音自動轉會議紀要」為例，手把手帶你建構一個 Kiro Skill，實現一條指令將會議錄音變成結構化的會議紀要和工作日報。同時介紹 Kiro 的四大擴充機制（Steering、Skills、Powers、Hooks）的定位與區別。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/kiro-skill-build-custom-ai-workflow-meeting-minutes-auto-generate/)

---

## 從 SDLC 到 AIDLC：CI&T 對 AI 驅動軟體開發模式的探索及 Kiro 最佳實踐

**日期**：2026-03-30 | **分類**：DevOps

了解 AIDLC 的演進脈絡，以及如何利用前沿的 Agent 框架重塑整個研發流程的實踐和經驗。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/sdlc-aidlc-ci-t-ai-development-explore-kiro-best-practices/)

---

## 將 Kiro CLI 封裝為 REST API：雙通道架構實踐

**日期**：2026-03-26 | **分類**：Artificial Intelligence

介紹將 Kiro CLI 封裝為標準 REST API 的完整實作方案，重點說明雙通道架構的設計決策，以及 ACP 協議通訊中的關鍵技術細節。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/kiro-cli-rest-api-architecture-practice/)

---

## 當 Kiro 遇上 OpenClaw：AI Agent 雙向協作的實踐探索

**日期**：2026-03-26 | **分類**：Artificial Intelligence

探索 Kiro 與 OpenClaw 基於 MCP + ACP 雙協議的雙向協作架構。四個實戰案例驗證了該模式在架構評審、智慧維運、資料日報、非同步編碼場景下的顯著效率提升。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/kiro-openclaw-ai-agent-practice-explore/)

---

## AI 驅動的 Graviton 遷移評估：Kiro Power 實戰指南

**日期**：2026-03-25 | **分類**：Business Productivity

深入探討如何利用 Kiro Power 加速 Graviton 遷移，涵蓋程式碼分析、相依性檢查、容器適配的完整流程。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/ai-graviton-migration-kiro-power-guide/)

---

## 使用 Kiro CLI 和 Agent Client Protocol 建構飛書 AI 聊天機器人

**日期**：2026-03-24 | **分類**：Artificial Intelligence

如何將 Kiro CLI 變成通用 Agent 後端，並用不到 1000 行 Rust 程式碼建構一個飛書聊天機器人。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/using-kiro-cli-agent-client-protocol-build-ai-chat/)

---

## 讓 Kiro 和 Claude Code 回應 IM 訊息：用 ACP Bridge 打造非同步 AI 程式設計工作流程

**日期**：2026-03-17 | **分類**：How-To

介紹 ACP Bridge——一個將本機 CLI 程式設計助手透過 ACP 協議暴露為 HTTP 服務的橋接工具，結合 OpenClaw Gateway 和 AWS 基礎設施，實現從 Discord 訊息觸發非同步 AI 程式設計任務的完整閉環。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/enable-kiro-and-claude-code-for-im-with-acp-bridge-async-ai-workflow/)

---

## 用 Kiro 建構 AI：基於 AWS 基礎設施快速建構企業級 Agentic AI 平台

**日期**：2026-03-04 | **分類**：Artificial Intelligence

如何用 Kiro（AI IDE）完成全流程開發，基於 Strands Agents 框架、Amazon Bedrock AgentCore 和 AWS 基礎設施，在一週內建構了一個能交付實際產出的 AI Agent 平台——全程零人工編碼。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/building-enterprise-agentic-ai-with-kiro-on-aws/)

---

## 把 Kiro CLI 當作 Agent SDK：一鍵訂閱即可建構你的 Agent 應用

**日期**：2026-03-03 | **分類**：Artificial Intelligence

Kiro CLI 的 ACP 支援為 Agent 應用開發提供了一條新路徑：將命令列工具轉變為可程式化的 Agent 後端，透過標準化協議暴露完整能力。開發者可以跳過 AI 基礎設施的前期投入，專注於應用本身的業務邏輯和使用者體驗。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/use-kiro-cli-as-agent-sdk-build-your-agent-app-with-one-click-subscription/)

---

## 三劍合璧Quick Suite + Agent Core + Kiro聯動實踐：海外物流報價助手實戰

**日期**：2026-01-12 | **分類**：Serverless

使用 Amazon Kiro + Amazon Bedrock AgentCore + Amazon Quick Suite 的 Serverless 架構方案，透過 Kiro 的 Spec-Driven Development 模式完成 MCP 工具程式碼的開發和 AgentCore 託管部署，為跨境物流業務建構智慧報價助手。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/quick-suite-agent-core-kiro-logistics-quote-assistant/)

---

## 從手動到智慧：用 Kiro CLI + OpenSearch MCP 讓每個人都成為 OpenSearch 專家

**日期**：2026-01-12 | **分類**：Artificial Intelligence

介紹如何利用 Kiro CLI 和 OpenSearch MCP Server 的組合，降低 OpenSearch 維運和應用開發的門檻。透過自然語言驅動叢集設定、索引管理、效能調校和故障排查，讓普通維運人員和開發者都能像專家一樣高效工作。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/from-manual-to-smart-use-kiro-cli-opensearch-mcp-to-make-everyone-an-opensearch-expert/)

---

## 讓 AI 理解你的元件庫：新一代智慧 D2C 架構 — 基於 AWS Kiro MCP Skills 的智慧轉換實踐

**日期**：2025-12-08 | **分類**：Case Study

探討如何利用 AWS Kiro IDE、MCP 和 Skills 建構新一代智慧 Design-to-Code（D2C）平台。透過 Skills 將元件知識封裝為可呼叫工具，結合 Steering 策略引導，使 AI 能夠自動發現、理解並正確使用企業元件庫，將元件庫利用率從接近 0% 提升到 80% 以上。

🔗 [閱讀全文](https://aws.amazon.com/cn/blogs/china/ai-understanding-component-library-intelligent-d2c-architecture-aws-kiro-mcp-skills/)

---

{{% hint info %}}
**持續更新**：本頁面會定期收錄新發布的 Kiro 相關部落格。更多 AWS 官方部落格請造訪 [aws.amazon.com/cn/blogs/china](https://aws.amazon.com/cn/blogs/china/)。
{{% /hint %}}
