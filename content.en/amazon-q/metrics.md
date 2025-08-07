---
title: "Data Statistics & Metrics"
weight: 6
bookToc: true
---

{{% hint info %}}
This document covers data statistics, metrics monitoring, and audit features of Amazon Q Developer.
{{% /hint %}}

## Data Statistics & Metrics

### Q. Does Amazon Q Developer provide user-level metrics?

Yes. Amazon Q Developer provides user activity reports that can provide user-level metrics. Enable it on the Amazon Q Developer settings page and fill in an S3 address that you can manage. User-level metrics will be written to the corresponding S3 address.

![](/book-of-kiro/images/q_dev/user_activity_report.png)

### Q. How to visualize user-level metrics?

1. **Use [Apache DevLake](https://devlake.apache.org/) for visualization** - It officially provides an Amazon Q Developer plugin. Please refer to the [deployment documentation](https://amzn-chn.feishu.cn/docx/VkD7dXLq2oXEM5xz48qcUBmPnlh)
2. **Through other BI tools** - Parse Amazon Q Developer [User Activity Log](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/q-admin-user-telemetry.html) to visualize user-level metrics

### Q. Is there an audit function?

You can enable [prompt logging](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/q-admin-prompt-logging.html) on the Amazon Q Developer settings page and select an S3 address that you can manage.

## Configuration Guide

### Enable User Activity Reports

1. Log in to the Amazon Q Developer console
2. Go to the settings page
3. Find the "User Activity Report" option
4. Enable this feature
5. Configure an S3 bucket address for storing report data

### Enable Audit Logs

1. Find the "Prompt Logging" option on the Amazon Q Developer settings page
2. Enable the prompt logging feature
3. Select an S3 address that you can manage for storing audit logs
4. Configure appropriate access permissions

{{% hint info %}}
**Tip**: Make sure you have sufficient S3 storage permissions to manage these logs and report data.
{{% /hint %}}

## Data Analysis Best Practices

### User Activity Analysis

- Regularly check user activity reports to understand team usage
- Analyze feature usage frequency to optimize team workflows
- Monitor abnormal usage patterns to ensure compliance

### Audit Log Management

- Establish log retention policies that comply with enterprise compliance requirements
- Regularly backup important audit data
- Set appropriate access controls to protect sensitive information

{{% hint warning %}}
**Note**: Audit logs may contain sensitive information, please ensure appropriate data protection measures.
{{% /hint %}}