---
title: "批量用户管理"
weight: 54
bookToc: true
---

# 批量用户管理与跨账户迁移

社区工具 [bulk-create-users](https://github.com/kiro-community/bulk-create-users) 提供了批量创建 IAM Identity Center 用户、订阅 Kiro、以及跨账户迁移的能力。

## 前提条件

- Python 3.10+
- AWS CLI 已配置凭证
- IAM 权限：`identitystore:*`、`sso:ListInstances`
- 迁移场景需要源账户和目标账户的 AWS 凭证（使用 `--profile`）

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## 工具一览

| 脚本 | 用途 |
|------|------|
| `idc_manager.py create-users` | 从 CSV 批量创建用户 |
| `idc_manager.py reset-password` | 发送密码重置邮件 |
| `idc_manager.py export-store` | 导出 Identity Store（用户、组、成员关系） |
| `idc_manager.py import-store` | 导入 Identity Store 到另一个账户 |
| `idc_manager.py export-subscriptions` | 导出 Kiro 订阅（含用户详情） |
| `kiro_subscribe.py` | 批量订阅 Kiro（Pro / Pro+ / Power） |
| `kiro_migrate.py` | **一键跨账户迁移** |

## 场景一：批量导入新用户

### 1. 准备 CSV

```csv
UserName,GivenName,FamilyName,DisplayName,Email,Groups,KiroTier
jsmith,John,Smith,John Smith,jsmith@example.com,KiroUsers,Kiro Pro
jdoe,Jane,Doe,Jane Doe,jdoe@example.com,"KiroUsers,KiroAdmins",Kiro Pro+
```

列名大小写不敏感，`Email` 为必填，其余可选。完整列名映射见 [README](https://github.com/kiro-community/bulk-create-users#step-1-prepare-a-csv)。

### 2. 创建用户并发送密码邮件

```bash
# 先 dry-run 预览
python idc_manager.py create-users users.csv --dry-run

# 正式创建 + 发送密码重置邮件
python idc_manager.py create-users users.csv \
  --region us-east-1 \
  --output report.json \
  --reset-password
```

### 3. 批量订阅 Kiro

```bash
# 按 CSV 中 KiroTier 列逐人订阅
python kiro_subscribe.py --csv users.csv --region us-east-1

# 或统一订阅同一层级
python kiro_subscribe.py --csv users.csv --tier "Kiro Pro+" --region us-east-1
```

## 场景二：跨账户迁移

将 Kiro 订阅从 AWS 账户 A 完整迁移到账户 B（包括 Identity Store 用户、组、成员关系和 Kiro 订阅）。

{{% hint warning %}}
**重要**：迁移前请确保目标账户已在 AWS 控制台中启用 Kiro，否则订阅创建会报 `AccessDeniedException`。
{{% /hint %}}

### 一键迁移（推荐）

```bash
# dry-run 预览
python kiro_migrate.py \
  --source-profile source-account \
  --target-profile target-account \
  --region us-east-1 \
  --dry-run

# 正式迁移
python kiro_migrate.py \
  --source-profile source-account \
  --target-profile target-account \
  --region us-east-1
```

自动执行 5 个步骤：

| 步骤 | 账户 | 操作 |
|------|------|------|
| 1a | 源 | 导出 Identity Store |
| 1b | 源 | 导出 Kiro 订阅 |
| 2a | 目标 | 导入 Identity Store |
| 2b | 目标 | 发送密码重置邮件 |
| 3 | 目标 | 重建 Kiro 订阅 |

所有步骤幂等，中断后可安全重跑。

### 手动分步迁移

如需更精细控制，可分步执行：

```bash
# === 源账户 ===
python idc_manager.py export-store --profile source-account --region us-east-1 -o backup.json
python idc_manager.py export-subscriptions --profile source-account --region us-east-1 -o users.csv

# === 目标账户 ===
python idc_manager.py import-store backup.json --profile target-account --region us-east-1
python idc_manager.py reset-password --csv users.csv --profile target-account --region us-east-1
python kiro_subscribe.py --csv users.csv --profile target-account --region us-east-1
```

## Kiro 订阅层级

| 层级 | CLI 值 | 月费 |
|------|--------|------|
| Kiro Pro | `pro` | $20 |
| Kiro Pro+ | `pro+` | $40 |
| Kiro Power | `power` | $200 |

## 常见问题

| 问题 | 解决方案 |
|------|----------|
| `No AWS Identity Center instance found` | 在账户中启用 Identity Center，或指定 `--region` |
| `ConflictException`（创建用户） | 用户已存在，会自动跳过 |
| `AccessDeniedException`（Kiro 订阅） | 目标账户未启用 Kiro，需先在 AWS 控制台完成初始设置 |
| `ConflictException`（Kiro 订阅） | 用户已订阅 |

---

{{% hint info %}}
**页面更新时间**：2026年3月31日
{{% /hint %}}