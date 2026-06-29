---
title: "常見問題"
weight: 52
bookToc: true
---

# Kiro 企業版常見問題

## 使用者管理

### **企業使用者如何查詢員工使用情況？**

Kiro 提供以下方式查看使用情況：

- Kiro usage dashboard。在 Kiro 企業管理主控台中，在設定介面啟用 Kiro usage dashboard，然後在企業管理主控台的 Dashboard 介面可以查看，只能看到整體情況。
- Kiro user activity report。在 Kiro 企業管理主控台中，在設定介面啟用 Kiro user activity report，資料會以 CSV 格式儲存到 Amazon S3 上，可以看到每個人每一天的使用情況。如果您在設定過程中遇到了問題，通常是需要設定 Amazon S3 的權限，請參考[此文件](https://kiro.dev/docs/enterprise/monitor-and-track/user-activity/#prerequisite)。

### **如何批次建立使用者並訂閱 Kiro？**

如果您需要一次性匯入大量使用者（例如團隊名單），可以使用社群工具 [bulk-create-users](https://github.com/kiro-community/bulk-create-users) 實作：

1. 準備一個 CSV 檔案，包含使用者資訊（郵箱、姓名、群組、訂閱層級等）
2. 使用 `idc_manager.py create-users` 批次建立 IAM Identity Center 使用者並傳送密碼重設郵件
3. 使用 `kiro_subscribe.py` 根據 CSV 中的層級資訊批次訂閱 Kiro

整個流程支援 dry-run 預覽、冪等操作（已存在的使用者會自動跳過），詳見[批次使用者管理指南](bulk-user-management.md)。

### **如何將 Kiro 訂閱從一個 AWS 帳戶遷移到另一個帳戶？**

使用 [bulk-create-users](https://github.com/kiro-community/bulk-create-users) 提供的一鍵遷移命令：

```bash
python kiro_migrate.py \
  --source-profile source-account \
  --target-profile target-account \
  --region us-east-1
```

該命令會自動完成 5 個步驟：匯出來源帳戶的 Identity Store 和 Kiro 訂閱 → 匯入到目標帳戶 → 傳送密碼重設郵件 → 重建 Kiro 訂閱。所有步驟冪等，中斷後可安全重跑。

{{% hint warning %}}
**前提條件**：遷移前請確保目標帳戶已在 AWS 主控台中啟用 Kiro，否則訂閱建立會報 `AccessDeniedException`。
{{% /hint %}}

詳見[批次使用者管理指南](bulk-user-management.md)。

### **在 IAM Identity Center 中刪除使用者後，Kiro 主控台中該使用者顯示為一長串字元怎麼辦？**

這是預期行為（by design）。當使用者在 IAM Identity Center 中被刪除後，Kiro 主控台無法再取得該使用者的顯示名稱，因此會顯示為一串 ID 字元。該使用者記錄會在下一個計費週期（下個月）自動消失。保留該記錄是為了讓管理員能夠查看當前計費週期內已付費的訂閱使用者數量。

### **新增企業使用者失敗怎麼辦？**

如果在 Kiro 主控台新增使用者時失敗，請檢查：
1. **IAM 權限是否完整**：管理員需要 `user-subscriptions:CreateClaim` 等權限，完整策略見 [IAM 權限文件](https://kiro.dev/docs/enterprise/iam/)
2. **Identity Provider 連線是否正常**：確認 IAM Identity Center 實例狀態正常
3. **Kiro Profile 設定是否正確**：確認 Profile 所在區域與 Identity Center 實例區域一致

新增使用者的完整流程詳見 [為團隊訂閱 Kiro](getting-started.md)。

## 訂閱與計費

### **企業版有哪些訂閱層級？**

Kiro 企業版提供三個訂閱層級：**Pro**、**Pro+** 和 **Power**；和個人版定價一致。

### **同一使用者被訂閱了兩次，會雙重收費嗎？**

不會。如果同一使用者在同一 Kiro Profile 下被訂閱了兩次（例如在兩個不同的 Group 中），只按該使用者被分配的**最高層級**的訂閱價格收取。

示例：如果 Alice 在 Group A 是 Pro，在 Group B 是 Pro+，則只收 Pro+ 的費用。

詳見 [企業版計費文件](https://kiro.dev/docs/enterprise/billing)。

### **月中訂閱/取消如何計費（按比例計費規則）？**

Kiro 企業版的按比例計費規則（Proration）：

| 場景 | 計費規則 |
|------|---------|
| 月中取消訂閱 | 當月全額收費，取消在下月初生效 |
| 月中升級（如 Pro → Power） | 退還低級訂閱費用，全額收取高級訂閱費用 |
| 月中降級 | 當月全額收取高級訂閱費用，下月開始收取低級訂閱費用 |

例如：8號訂閱、20號取消 → 當月仍全額計費。

詳見 [企業版計費文件 - Proration considerations](https://kiro.dev/docs/enterprise/billing/)。

### **從 Amazon Q Developer Pro 遷移到 Kiro 後，原訂閱還能用嗎？**

可以。升級到 Kiro 訂閱後，IDE 外掛和舊版本的 Q CLI 都可以繼續使用。但建議升級到 Kiro 訂閱以取得完整功能（如查看 credit 使用情況）。詳見[遷移指南](migrate-from-q-dev.md)。
