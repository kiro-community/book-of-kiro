---
title: "開始使用"
weight: 21
---

# **開始使用 Kiro IDE**

## 🚀 **快速上手 - 5 分鐘啟動 Kiro IDE！**

### **最速安裝指南（真的只要 5 分鐘）**

首先，我們來安裝 Kiro IDE。不過別緊張，和安裝普通 App 一樣簡單！<br>

{{% hint info %}}

1. 下載 Kiro IDE
   造訪 https://kiro.dev/downloads 下載適合您系統的版本<br>

2. 安裝 IDE
   macOS：將下載的 Kiro.app 拖到 Applications 資料夾<br>
   Windows：雙擊下載的安裝程式執行<br>
   Linux：為 AppImage 新增執行權限後啟動<br>

3. 初次啟動時的設定（這裡超重要！）<br>
   {{% /hint %}}

#### 🔐 **登入方式選擇**

- **GitHub**：如果你是個人開發者，選這個最輕鬆<br>
- **Google**：用 Gmail 帳號一鍵登入<br>
- **AWS Builder ID**：沒有 AWS 帳號？選這個就對了（而且完全免費）
- **AWS IAM Identity Center**：適合在公司或團隊環境中使用<br>

#### **⚙️ 匯入 VS Code 設定**

選擇「**Import VS Code Settings**」可以直接繼承你現在的編輯器設定，
包括擴充外掛、主題樣式都能原樣複用，真的很方便！

#### 💻 **啟用 Shell 整合（必選項！）**

出現提示時，請一定要點擊「**Allow**」！<br>
這一步能讓 AI 直接執行終端機命令，解鎖全自動開發體驗 🚀

### 📂 **來開啟你的第一個專案吧！**

```bash
# 如果你喜歡用終端機開啟專案的話：
cd my-project
kiro .

# 或者也可以從 Kiro 的選單列操作：
File > Open Folder > 選擇你的專案資料夾

```

開啟專案後，點擊左側邊欄那個 **Kiro 的幽靈圖示**。這就是 Kiro 的核心區域，也是你和 AI 開始對話的地方！👻<br>

### 💬 **試著和 AI 聊聊看吧！**

```bash
# 開啟聊天面板
Cmd+L（Mac） / Ctrl+L（Windows/Linux）

# 可以先試著問問這些
"解釋一下這個專案的結構"
"整理一下 package.json 的依賴項"
"幫我把 README 寫得更完整一些"

```

你一定會驚訝，和它對話竟然可以這麼自然順暢！💬✨

## 🔑 **認證方式完全指南 - 應該選哪種？**

### **方式 1：GitHub 登入（推薦給個人開發者，推薦指數：★★★★★）**

{{% hint info %}}

<span style="color:red;">適合誰？</span>

- 平時自己寫程式碼的開發者
- 有在參與開源專案
- 想先簡單體驗一下 Kiro 的人

<span style="color:red;">優點</span>

- 設定流程最簡單
- 只要有 GitHub 帳號就能直接用
- 免費額度也足夠大多數人用了

<span style="color:red;">使用步驟</span>

1. 點擊 "Sign in with GitHub"
2. 瀏覽器會自動跳轉，登入你的 GitHub
3. 點擊 "Authorize kirodotdev" 授權
4. 完成！可以馬上開始用了 ✨
   {{% /hint %}}

### **方式 2：Google 登入（適合輕度使用者，推薦指數：★★★★☆）**

{{% hint info %}}

<span style="color:red;">適合這些人</span>

- 有 Gmail，但沒有 GitHub 帳號
- 想用來做點個人學習
- 只想輕鬆快速地上手體驗

<span style="color:red;">優點</span>

- 用 Google 帳號就能直接登入
- 不需要額外設定
- 很適合個人日常使用

<span style="color:red;">操作步驟</span>

1. 點擊 "Sign in with Google"
2. 選擇你的 Google 帳號
3. 點擊 "Continue" 完成授權
4. 搞定！是不是超輕鬆？✨
   {{% /hint %}}

### **方式 3：AWS Builder ID（適合剛接觸 AWS 的使用者，推薦指數：★★★☆☆）**

{{% hint info %}}

<span style="color:red;"> 適合這些人</span>

- 想試試 AWS，但不太想一開始就註冊正式帳號
- 想免費體驗一些 AWS 服務
- 將來可能會正式使用 AWS 的人

<span style="color:red;"> 優點</span>

- 不用註冊完整的 AWS 帳號也能用，完全免費
- 跟 AWS 的各種服務聯動起來很方便
- 以後想轉為企業帳號，也能順利過渡

<span style="color:red;"> 操作步驟</span>

1. 點擊 "Login with AWS Builder ID"
2. 輸入你的電子郵件地址
3. 設定登入密碼
4. 完成信箱驗證，就可以開始用了 ✅
   {{% /hint %}}

### **方式 4：AWS IAM Identity Center（適合企業使用者，推薦指數：★★★★★）**

{{% hint info %}}

<span style="color:red;"> 適合這些人</span>

- 想在公司內部正式部署 Kiro
- 對安全性有嚴格要求的企業環境

<span style="color:red;"> 注意事項</span>

- 需要有 [Kiro 企業級訂閱](https://kiro.dev/enterprise/) 或 Amazon Q Developer Pro 的付費訂閱
- 需要公司 IT 部門協助進行設定
- 不適合個人使用者使用

<span style="color:red;"> 使用步驟</span>

1. 選擇 "Sign in with AWS IAM Identity Center"
2. 輸入 Start URL，例如：https://your-company.awsapps.com/start，請聯繫您的管理員取得
3. 選擇 Region（區域）：請聯繫您的管理員取得
4. 聯繫公司 IT 部門完成相關設定
   {{% /hint %}}

## 🤖 **Agent 自主性設定 - Autopilot vs Supervised 模式**

在開始使用 Kiro 之前，了解並選擇合適的 Agent 模式非常重要。這決定了 AI 在您的專案中的工作方式。

### **Autopilot 模式（預設推薦）**

{{% hint info %}}
**適合人群：**
- 重視開發速度的開發者
- 信任 AI 判斷能力
- 在本地開發環境工作
- 想要高效自動化體驗

**工作機制：**
- 自動執行檔案的建立、編輯和刪除
- 自動執行命令（僅限受信任清單內）
- 隨時可以透過 "Stop" 命令中斷操作

**使用範例：**
```
"幫我實現使用者認證功能"
→ AI 自動建立所有必要檔案並完成實現
```
{{% /hint %}}

### **Supervised 模式（謹慎控制）**

{{% hint warning %}}
**適合人群：**
- 在正式環境中工作
- 處理重要專案
- 希望仔細確認 AI 的每個操作

**工作機制：**
- 每個操作前都會彈出確認對話框
- "確定要建立這個檔案嗎？"
- "確定要執行這個命令嗎？"

**切換方法：**
在聊天介面找到 "Autopilot" 開關，切換為關閉（OFF）狀態
{{% /hint %}}

## 🔒 **受信任命令管理**

為了安全起見，Kiro 只會自動執行預先定義的安全命令。您可以根據需要自訂這個清單。

### **預設安全命令**

以下唯讀命令會被自動執行：

```bash
ls      # 列出目錄內容
cat     # 顯示檔案內容
echo    # 輸出字串
pwd     # 顯示目前目錄
which   # 尋找命令路徑
head    # 檢視檔案開頭部分
tail    # 檢視檔案結尾部分
find    # 檔案搜尋
grep    # 字串搜尋
```

### **自訂受信任命令**

您可以在設定中新增專案常用的安全命令：

```json
// Settings → Kiro Agent: Trusted Commands
[
  "npm test",
  "npm run build", 
  "git status",
  "git diff",
  "docker ps",
  "docker-compose up",
  "jest",
  "prettier --write"
]
```

### **⚠️ 安全警告**

{{% hint warning %}}
**絕對不要新增這些危險命令：**

```bash
rm -rf      # 刪除檔案/目錄
sudo        # 超級使用者權限
chmod 777   # 修改檔案權限
curl | sh   # 下載並執行腳本
eval        # 執行動態程式碼
```

如果您真的需要允許所有命令執行，可以新增 `*` 來信任所有命令。**請充分了解這可能帶來的安全風險！**
{{% /hint %}}

## **下一步**

現在您已經成功安裝並設定了 Kiro IDE，可以繼續探索：

- **[外掛管理](extensions.md)** - 擴展 IDE 功能
- **[安全設定](security.md)** - 資料隱私和遙測設定
- **[疑難排解](troubleshooting.md)** - 解決常見問題
