---
title: "常见问题"
weight: 52
bookToc: true
---

# Kiro 企业版常见问题

## 用户管理

### **企业用户如何查询员工使用情况？**

Kiro 提供以下方式查看使用情况：

- Kiro usage dashboard。在 Kiro 企业管理控制台中，在设置界面启用 Kiro usage dashboard，然后在企业管理控制台的 Dashboard 界面可以查看，只能看到整体情况。
- Kiro user activity report。在 Kiro 企业管理控制台中，在设置界面启用 Kiro user activity report，数据会以 CSV 格式保存到 Amazon S3 上，可以看到每个人每一天的使用情况。如果您在配置过程中遇到了问题，通常是需要设置 Amazon S3 的权限，请参考[此文档](https://kiro.dev/docs/enterprise/monitor-and-track/user-activity/#prerequisite)。

### **如何使用 API 实现订阅或批量订阅？**

目前 Kiro 并没有公开 API/SDK ，但是有社区方案通过手动构造 SigV4 签名的方式实现了批量订阅（或基于 API 自动订阅），详见此 [GitHub Repo](https://github.com/DiscreteTom/kiro-management-api).

### **在 IAM Identity Center 中删除用户后，Kiro 控制台中该用户显示为一长串字符怎么办？**

这是预期行为（by design）。当用户在 IAM Identity Center 中被删除后，Kiro 控制台无法再获取该用户的显示名称，因此会显示为一串 ID 字符。该用户记录会在下一个计费周期（下个月）自动消失。保留该记录是为了让管理员能够查看当前计费周期内已付费的订阅用户数量。

## 订阅与计费

### **企业版有哪些订阅层级？**

Kiro 企业版提供三个订阅层级：**Pro**、**Pro+** 和 **Power**；和个人版定价一致。

### **从 Amazon Q Developer Pro 迁移到 Kiro 后，原订阅还能用吗？**

可以。升级到 Kiro 订阅后，IDE 插件和老版本的 Q CLI 都可以继续使用。但建议升级到 Kiro 订阅以获得完整功能（如查看 credit 使用情况）。详见[迁移指南](migrate-from-q-dev.md)。