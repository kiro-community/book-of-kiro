---
title: "数据统计与指标"
weight: 6
bookToc: true
---

{{% hint info %}}
本文档涵盖 Amazon Q Developer 的数据统计、指标监控和审计功能。
{{% /hint %}}

## 数据统计与指标

### Q. Amazon Q Developer 提供用户级别的指标吗？

提供。Amazon Q Developer 提供 [user activity report](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/user-activity-metrics.html)，可以提供用户级别的指标。在 Amazon Q Developer 设置页面启用，并填写一个您可以管理的 S3 地址。用户级指标会被写入到对应的 S3 地址中。

![](/book-of-kiro/images/q_dev/user_activity_report.png)

### Q. 如何可视化用户级指标？

1. **使用 [Apache DevLake](https://devlake.apache.org/) 进行可视化** - 其官方提供了 Amazon Q Developer 插件。请参考[部署文档](https://amzn-chn.feishu.cn/docx/VkD7dXLq2oXEM5xz48qcUBmPnlh)
2. **通过其它 BI 工具** - 解析 Amazon Q Developer [User Activity Log](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/q-admin-user-telemetry.html) 来可视化用户级别指标

### Q. 有审计功能吗？

您可以在 Amazon Q Developer 设置页面启用 [prompt logging](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/q-admin-prompt-logging.html) 并选择一个您可以管理的 S3 地址。

## 配置指南

### 启用用户活动报告

1. 登录 Amazon Q Developer 控制台
2. 进入设置页面
3. 找到 "User Activity Report" 选项
4. 启用该功能
5. 配置 S3 存储桶地址用于存储报告数据

### 启用审计日志

1. 在 Amazon Q Developer 设置页面中找到 "Prompt Logging" 选项
2. 启用 prompt logging 功能
3. 选择一个您可以管理的 S3 地址用于存储审计日志
4. 配置适当的访问权限

{{% hint info %}}
**提示**: 确保您有足够的 S3 存储权限来管理这些日志和报告数据。
{{% /hint %}}

## 数据分析最佳实践

### 用户活动分析

- 定期检查用户活动报告，了解团队使用情况
- 分析功能使用频率，优化团队工作流程
- 监控异常使用模式，确保合规性

### 审计日志管理

- 建立日志保留策略，符合企业合规要求
- 定期备份重要的审计数据
- 设置适当的访问控制，保护敏感信息

{{% hint warning %}}
**注意**: 审计日志可能包含敏感信息，请确保适当的数据保护措施。
{{% /hint %}}
