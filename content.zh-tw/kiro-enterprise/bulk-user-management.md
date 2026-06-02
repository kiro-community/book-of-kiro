---
title: "批次使用者管理"
weight: 54
bookToc: true
---

# 批次使用者管理與跨帳戶遷移

社群工具 [bulk-create-users](https://github.com/kiro-community/bulk-create-users) 提供了批次建立 IAM Identity Center 使用者、訂閱 Kiro、以及跨帳戶遷移的能力。

## 前提條件

- Python 3.10+
- AWS CLI 已設定憑證
- IAM 權限：`identitystore:*`、`sso:ListInstances`
- 遷移場景需要來源帳戶和目標帳戶的 AWS 憑證（使用 `--profile`）

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## 工具一覽

| 腳本 | 用途 |
|------|------|
| `idc_manager.py create-users` | 從 CSV 批次建立使用者 |
| `idc_manager.py reset-password` | 傳送密碼重設郵件 |
| `idc_manager.py export-store` | 匯出 Identity Store（使用者、群組、成員關係） |
| `idc_manager.py import-store` | 匯入 Identity Store 到另一個帳戶 |
| `idc_manager.py export-subscriptions` | 匯出 Kiro 訂閱（含使用者詳情） |
| `kiro_subscribe.py` | 批次訂閱 Kiro（Pro / Pro+ / Power） |
| `kiro_migrate.py` | **一鍵跨帳戶遷移** |

## 場景一：批次匯入新使用者

### 1. 準備 CSV

```csv
UserName,GivenName,FamilyName,DisplayName,Email,Groups,KiroTier
jsmith,John,Smith,John Smith,jsmith@example.com,KiroUsers,Kiro Pro
jdoe,Jane,Doe,Jane Doe,jdoe@example.com,"KiroUsers,KiroAdmins",Kiro Pro+
```

列名大小寫不敏感，`Email` 為必填，其餘可選。完整列名映射見 [README](https://github.com/kiro-community/bulk-create-users#step-1-prepare-a-csv)。

### 2. 建立使用者並傳送密碼郵件

```bash
# 先 dry-run 預覽
python idc_manager.py create-users users.csv --dry-run

# 正式建立 + 傳送密碼重設郵件
python idc_manager.py create-users users.csv \
  --region us-east-1 \
  --output report.json \
  --reset-password
```

### 3. 批次訂閱 Kiro

```bash
# 按 CSV 中 KiroTier 列逐人訂閱
python kiro_subscribe.py --csv users.csv --region us-east-1

# 或統一訂閱同一層級
python kiro_subscribe.py --csv users.csv --tier "Kiro Pro+" --region us-east-1
```

## 場景二：跨帳戶遷移

將 Kiro 訂閱從 AWS 帳戶 A 完整遷移到帳戶 B（包括 Identity Store 使用者、群組、成員關係和 Kiro 訂閱）。

{{% hint warning %}}
**重要**：遷移前請確保目標帳戶已在 AWS 主控台中啟用 Kiro，否則訂閱建立會報 `AccessDeniedException`。
{{% /hint %}}

### 一鍵遷移（建議）

```bash
# dry-run 預覽
python kiro_migrate.py \
  --source-profile source-account \
  --target-profile target-account \
  --region us-east-1 \
  --dry-run

# 正式遷移
python kiro_migrate.py \
  --source-profile source-account \
  --target-profile target-account \
  --region us-east-1
```

自動執行 5 個步驟：

| 步驟 | 帳戶 | 操作 |
|------|------|------|
| 1a | 來源 | 匯出 Identity Store |
| 1b | 來源 | 匯出 Kiro 訂閱 |
| 2a | 目標 | 匯入 Identity Store |
| 2b | 目標 | 傳送密碼重設郵件 |
| 3 | 目標 | 重建 Kiro 訂閱 |

所有步驟冪等，中斷後可安全重跑。

### 手動分步遷移

如需更精細控制，可分步執行：

```bash
# === 來源帳戶 ===
python idc_manager.py export-store --profile source-account --region us-east-1 -o backup.json
python idc_manager.py export-subscriptions --profile source-account --region us-east-1 -o users.csv

# === 目標帳戶 ===
python idc_manager.py import-store backup.json --profile target-account --region us-east-1
python idc_manager.py reset-password --csv users.csv --profile target-account --region us-east-1
python kiro_subscribe.py --csv users.csv --profile target-account --region us-east-1
```

## Kiro 訂閱層級

| 層級 | CLI 值 | 月費 |
|------|--------|------|
| Kiro Pro | `pro` | $20 |
| Kiro Pro+ | `pro+` | $40 |
| Kiro Power | `power` | $200 |

## 常見問題

| 問題 | 解決方案 |
|------|----------|
| `No AWS Identity Center instance found` | 在帳戶中啟用 Identity Center，或指定 `--region` |
| `ConflictException`（建立使用者） | 使用者已存在，會自動跳過 |
| `AccessDeniedException`（Kiro 訂閱） | 目標帳戶未啟用 Kiro，需先在 AWS 主控台完成初始設定 |
| `ConflictException`（Kiro 訂閱） | 使用者已訂閱 |

---

{{% hint info %}}
**頁面更新時間**：2026年3月31日
{{% /hint %}}
