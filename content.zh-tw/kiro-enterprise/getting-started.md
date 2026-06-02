---
title: "為團隊訂閱 Kiro"
weight: 51
bookToc: true
---

# 為團隊訂閱 Kiro

本指南將逐步介紹如何建立 Kiro 設定檔並透過 AWS IAM Identity Center 為使用者訂閱 Kiro 企業版。

## 前提條件

在開始之前，請確保您具備以下條件：

**AWS 帳戶**
- 您需要一個 AWS 帳戶。如果您還沒有帳戶，可以[建立 AWS 帳戶](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html)。

**AWS 權限**
- 作為 Kiro 管理員，您必須具有存取 AWS 中 Kiro 主控台的權限，以便訂閱和管理 Kiro 使用者。您需要的最低權限在[策略：允許管理員設定 Kiro 並訂閱使用者](https://kiro.dev/docs/enterprise/iam/#policy-allow-administrators-to-configure-kiro-and-subscribe-users)中有詳細說明。

**AWS IAM Identity Center**
- 您必須在 AWS 帳戶中設定 IAM Identity Center 實例，並包含要訂閱 Kiro 的使用者身分。您的 IAM Identity Center 實例必須位於[支援的 AWS 區域](https://kiro.dev/docs/enterprise/supported-regions)中。

**使用者和群組**
- 您可以將使用者和群組新增到 IAM Identity Center 的內建目錄，或新增到連接到 IAM Identity Center 的外部身分提供商 (IdP)。有關更多資訊，請參閱 [IAM Identity Center 入門指南](https://docs.aws.amazon.com/singlesignon/latest/userguide/getting-started.html)。

## 建立 Kiro 設定檔

1. 登入 AWS 管理主控台

2. 切換到 Kiro 主控台

3. 確保您位於首選的[支援的 AWS 區域](https://kiro.dev/docs/enterprise/supported-regions)中，以建立 [Kiro 設定檔](https://kiro.dev/docs/enterprise/concepts/#kiro-profile)並儲存使用者資料

4. 選擇 **"Sign up for Kiro"** 按鈕

5. 查看 **"Create Kiro profile"** 對話框的內容，然後選擇 **"Enable"**。Kiro 設定檔即被建立

6. （選擇性）如需要，可在 **"Settings"** 頁面中使用不同的名稱或描述編輯設定檔

## 為團隊訂閱 Kiro

1. 如果您還沒有在 Kiro 主控台中，請切換到 Kiro 主控台

2. 確保您位於建立 [Kiro 設定檔](https://kiro.dev/docs/enterprise/concepts/#kiro-profile)的 AWS 區域中

3. 在 **"Users & Groups"** 頁面中，選擇 **"Users"** 或 **"Groups"** 索引標籤

4. 選擇 **"Add user"** 或 **"Add group"** 按鈕。將出現一個對話框，您可以在其中選擇 [Kiro 訂閱層級](https://kiro.dev/docs/enterprise/concepts/#kiro-subscription-tier)（Pro、Pro+、Power），並查看每個層級的詳細資訊

5. 選擇所需的訂閱層級，然後選擇 **"Continue"**

6. 在搜尋列中，搜尋要訂閱到所選層級的群組或使用者，或從下拉選單中選擇一個。群組或使用者將自動填入 IAM Identity Center 中可用的內容

7. 選擇使用者或群組，然後選擇 **"Assign"**。使用者或群組現在已訂閱

## 讓使用者檢查郵件

**新使用者邀請**

如果使用者尚未在 AWS IAM Identity Center 實例中註冊，他們將收到邀請郵件，需要選擇使用者名稱和密碼並提供多因素身分驗證 (MFA) 方法。

**已註冊使用者啟用**

如果使用者已經註冊，他們將收到啟用郵件，其中包含您的 IAM Identity Center 實例的 **"Start URL"** 和 **"Region"**。他們需要使用郵件中提供的 **"Start URL"** 和 **"Region"** 登入到 Kiro IDE 或 Kiro CLI。

**身分驗證流程**

使用者可能需要提供密碼和 MFA 進行身分驗證，如果身分驗證成功，他們將登入並被指示返回到 Kiro IDE 或 CLI。

---

{{% hint info %}}
**頁面更新時間**：2025年11月16日
{{% /hint %}}

## 相關文件

- [企業版快速入門](https://kiro.dev/docs/enterprise/getting-started/)
- [管理訂閱](https://kiro.dev/docs/enterprise/subscription-management/)
- [支援的區域](https://kiro.dev/docs/enterprise/supported-regions/)
- [IAM 權限設定](https://kiro.dev/docs/enterprise/iam/)
