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

### **如何批量创建用户并订阅 Kiro？**

如果您需要一次性导入大量用户（例如团队名单），可以使用社区工具 [bulk-create-users](https://github.com/kiro-community/bulk-create-users) 实现：

1. 准备一个 CSV 文件，包含用户信息（邮箱、姓名、组、订阅层级等）
2. 使用 `idc_manager.py create-users` 批量创建 IAM Identity Center 用户并发送密码重置邮件
3. 使用 `kiro_subscribe.py` 根据 CSV 中的层级信息批量订阅 Kiro

整个流程支持 dry-run 预览、幂等操作（已存在的用户会自动跳过），详见[批量用户管理指南](bulk-user-management.md)。

### **如何将 Kiro 订阅从一个 AWS 账户迁移到另一个账户？**

使用 [bulk-create-users](https://github.com/kiro-community/bulk-create-users) 提供的一键迁移命令：

```bash
python kiro_migrate.py \
  --source-profile source-account \
  --target-profile target-account \
  --region us-east-1
```

该命令会自动完成 5 个步骤：导出源账户的 Identity Store 和 Kiro 订阅 → 导入到目标账户 → 发送密码重置邮件 → 重建 Kiro 订阅。所有步骤幂等，中断后可安全重跑。

{{% hint warning %}}
**前提条件**：迁移前请确保目标账户已在 AWS 控制台中启用 Kiro，否则订阅创建会报 `AccessDeniedException`。
{{% /hint %}}

详见[批量用户管理指南](bulk-user-management.md)。

### **在 IAM Identity Center 中删除用户后，Kiro 控制台中该用户显示为一长串字符怎么办？**

这是预期行为（by design）。当用户在 IAM Identity Center 中被删除后，Kiro 控制台无法再获取该用户的显示名称，因此会显示为一串 ID 字符。该用户记录会在下一个计费周期（下个月）自动消失。保留该记录是为了让管理员能够查看当前计费周期内已付费的订阅用户数量。

## 订阅与计费

### **企业版有哪些订阅层级？**

Kiro 企业版提供三个订阅层级：**Pro**、**Pro+** 和 **Power**；和个人版定价一致。

### **从 Amazon Q Developer Pro 迁移到 Kiro 后，原订阅还能用吗？**

可以。升级到 Kiro 订阅后，IDE 插件和老版本的 Q CLI 都可以继续使用。但建议升级到 Kiro 订阅以获得完整功能（如查看 credit 使用情况）。详见[迁移指南](migrate-from-q-dev.md)。