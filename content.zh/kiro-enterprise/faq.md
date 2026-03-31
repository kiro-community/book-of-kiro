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

### **添加企业用户失败怎么办？**

如果在 Kiro 控制台添加用户时失败，请检查：
1. **IAM 权限是否完整**：管理员需要 `user-subscriptions:CreateClaim` 等权限，完整策略见 [IAM 权限文档](https://kiro.dev/docs/enterprise/iam/)
2. **Identity Provider 连接是否正常**：确认 IAM Identity Center 实例状态正常
3. **Kiro Profile 配置是否正确**：确认 Profile 所在区域与 Identity Center 实例区域一致

添加用户的完整流程详见 [为团队订阅 Kiro](getting-started.md)。

## 订阅与计费

### **企业版有哪些订阅层级？**

Kiro 企业版提供三个订阅层级：**Pro**、**Pro+** 和 **Power**；和个人版定价一致。

### **同一用户被订阅了两次，会双重收费吗？**

不会。如果同一用户在同一 Kiro Profile 下被订阅了两次（例如在两个不同的 Group 中），只按该用户被分配的**最高层级**的订阅价格收取。

示例：如果 Alice 在 Group A 是 Pro，在 Group B 是 Pro+，则只收 Pro+ 的费用。

详见 [企业版计费文档](https://kiro.dev/docs/enterprise/billing)。

### **月中订阅/取消如何计费（按比例计费规则）？**

Kiro 企业版的按比例计费规则（Proration）：

| 场景 | 计费规则 |
|------|---------|
| 月中取消订阅 | 当月全额收费，取消在下月初生效 |
| 月中升级（如 Pro → Power） | 退还低级订阅费用，全额收取高级订阅费用 |
| 月中降级 | 当月全额收取高级订阅费用，下月开始收取低级订阅费用 |

例如：8号订阅、20号取消 → 当月仍全额计费。

详见 [企业版计费文档 - Proration considerations](https://kiro.dev/docs/enterprise/billing/)。

### **从 Amazon Q Developer Pro 迁移到 Kiro 后，原订阅还能用吗？**

可以。升级到 Kiro 订阅后，IDE 插件和老版本的 Q CLI 都可以继续使用。但建议升级到 Kiro 订阅以获得完整功能（如查看 credit 使用情况）。详见[迁移指南](migrate-from-q-dev.md)。