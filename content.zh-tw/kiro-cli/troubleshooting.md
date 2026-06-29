---
title: "疑難排解"
weight: 35
---

# **CLI 疑難排解**

## **CLI 常見錯誤及解決方案**

### **如何使用 GitHub/Google 登入**

執行 `kiro-cli login` 後即可選擇是否透過 GitHub 或 Google 登入，並彈出系統瀏覽器完成登入過程。

如果您使用沒有圖形介面的系統環境，執行 `kiro-cli login` 則只會顯示 Builder ID 登入方式或企業登入方式，您可以選擇 Builder ID 使用電子郵件註冊登入

### **執行 MCP Tool 時報錯**

報錯：Improperly formed request 或 An unexpected error occurred

通常是 MCP Tool 的描述格式不規範，特別是 `input_schema` 欄位，需要嚴格保證為合法的 JSON Schema

可以使用 `/tools schema` 子指令查看 MCP Tool 的描述，確認 `input_schema` 欄位是否合法

### **使用蘋果原生 Terminal 時當機**

建議使用 iTerm2 作為 Terminal 來使用 Kiro CLI。

如果需要排查當機原因，可以嘗試使用[此腳本](https://gist.github.com/DiscreteTom/601bdd428ccb4079eb5e01fb914769fd)收集 Terminal 日誌後交給 Kiro CLI 來排查

### **無法自動補全 CLI 指令**

如果您已經在 Kiro-CLI 的設定中啟用了 autocomplete，但是自動補全沒有生效，可以嘗試執行 `kiro-cli doctor` 進行自動修復

### **如何還原預設 Agent**

使用 Kiro CLI 時，如果透過 `/agent set-default --name <NAME>` 設定的預設 Agent 後，希望恢復預設的 Agent，可以使用指令 `kiro-cli settings --delete chat.defaultAgent` 刪除設定來還原預設 Agent

### **無法升級**

設定 VPC Endpoint 後，可能無法使用 `kiro-cli update` 進行 CLI 的升級。這是因為升級時需要存取 `desktop-release.q.us-east-1.amazonaws.com` ，它是 Q 的 VPC Endpoint 的子網域名稱。如果您需要升級，可以參考[此文件](https://kiro.dev/docs/cli/installation/#with-a-zip-file)，從公網下載 zip 安裝套件後手動安裝。

### **byte index is not a char boundary**

Kiro CLI 使用 Rust 語言編寫，對 UTF-8 字串的合法性有嚴格要求。此報錯說明 Kiro CLI 處理了非法的 UTF-8 字串，請檢查本地檔案是否包含非法 UTF-8 字元

### **Prompt 如何定義和傳遞參數**

目前只有 MCP Prompt 支援參數。可以使用 [shinkuro](https://github.com/DiscreteTom/shinkuro) 或類似的 MCP 伺服器，把檔案提示詞轉為 MCP 提示詞，從而支援參數

## **進階除錯技巧**

### **如何查看 Kiro CLI 日誌**

最新版本 Kiro CLI 可以使用 `/logdump` 指令把日誌儲存為一個 ZIP 檔案。

### **問題回報**

為加速我們排查您遇到的問題，我們建議您重現問題，並提供如下資訊給 AWS Support 或者 AWS 解決方案架構師：

**必須項：**

1. 日誌資訊（建議去除敏感資訊）。請參考上文取得 CLI 的日誌
2. CLI 的版本資訊，使用 `kiro-cli --version` 可以查看目前版本。如果不是最新版，您可以嘗試執行 `kiro-cli update` 升級到最新版後，再看下問題是否還存在
3. 作業系統版本資訊，如 Windows 11
4. 問題描述，以及已經進行過哪些排查

**可選項：** 問題的影片或者截圖（如您能提供問題的影片或者截圖將有助於我們排查問題）

## **通用問題**

### **Improperly formed request**

通常是由於 LLM 的幻覺導致，可以告訴 AI「重試」或者「繼續」或者「go on」，如果多次重試仍然失敗，可以嘗試重新開始工作階段。

### **An unexpected error occurred**

通常是網路不穩定導致，可以告訴 AI「重試」或者「繼續」或者「go on」，如果多次重試仍然失敗，可以嘗試重新開始工作階段，或排查網路連線。

### **Dispatch failure**

通常是網路不穩定導致，可以告訴 AI「重試」或者「繼續」或者「go on」，如果多次重試仍然失敗，可以嘗試重新開始工作階段，或排查網路連線。
