---
title: "Kiro 特色功能"
weight: 20
bookToc: true
---

# **Kiro 特色功能**

Kiro 不僅僅是一個 AI IDE，更是一個完整的智慧開發平臺。以下三大特色功能讓 Kiro 在眾多開發工具中脫穎而出，為開發者提供前所未有的程式設計體驗。

---

## 📋 **Spec 模式 — 結構化開發的革命**

### ❓ **什麼是 Spec？為什麼它這麼重要？**

傳統開發是不是經常是這種節奏：

- "先幫我做個登入功能吧" —— 要求模模糊糊
- 好吧，先寫著再說
- "啊對了，還要加密碼重置"
- "郵件認證也別忘了加一下"
- 最後程式碼一團糟、文件跟不上、需求越改越亂……

😵‍💫 完全失控。
而 **Spec**，就是來解決這個老問題的！<br>
它會讓 AI 幫你**整理模糊需求**，變成一份結構清晰、條理清楚的**規範文件**。<br>
——不再邊寫邊猜、不再回頭大改，你的專案，從一開始就走在正軌上。✅<br>

### **🛠️ Spec 的三大階段（這真的很革命 🔥）**

#### 1️⃣ Requirements（需求）階段 —— 明確"要做什麼"

```yaml
# 實際示例：Kiro 自動生成的需求定義

## 使用者故事
As a: 使用者
I want to: 使用郵箱地址和密碼登入
So that: 能使用服務的個性化功能

## 接受標準（EARS 語法）
When: 使用者訪問登入頁面時
The system shall: 顯示登入表單
With:
  - 郵箱地址輸入框
  - 密碼輸入框（以掩碼形式顯示）
  - "登入"按鈕
  - "忘記密碼"連結

When: 使用者輸入正確的認證資訊並點選登入按鈕時
The system shall: 將使用者重定向到儀表板頁面
And: 生成 JWT 權杖並啟動會話

When: 使用者輸入了錯誤的認證資訊時
The system shall: 顯示錯誤資訊
But: 出於安全考慮，不顯示具體錯誤原因
```

是不是很驚人？僅僅一句"寫個登入功能"，它就能把需求細化到如此詳細的程度，真是超神奇！<br>

#### 2️⃣ **Design（設計）階段** —— 規劃「怎麼實作」

````md
// Kiro 自動生成的技術設計文件示例

## 架構設計

### 前端結構

```ts
interface LoginSystem {
  // UI 元件
  components: {
    LoginForm: {
      path: "components/auth/LoginForm.tsx";
      props: {
        onSubmit: (credentials: LoginCredentials) => Promise<void>;
        onForgotPassword: () => void;
      };
    };

    PasswordResetModal: {
      path: "components/auth/PasswordResetModal.tsx";
      props: {
        isOpen: boolean;
        onClose: () => void;
      };
    };
  };

  // 狀態管理
  stores: {
    AuthStore: {
      state: {
        user: User | null;
        isAuthenticated: boolean;
        isLoading: boolean;
      };
      actions: {
        login: (credentials: LoginCredentials) => Promise<void>;
        logout: () => void;
        resetPassword: (email: string) => Promise<void>;
      };
    };
  };

  // API 通訊
  services: {
    AuthService: {
      endpoints: {
        login: "POST /api/auth/login";
        logout: "POST /api/auth/logout";
        resetPassword: "POST /api/auth/reset-password";
      };
    };
  };
}
```

### 後端結構

- 使用 Node.js + Express
- JWT 認證
- 使用 bcrypt 進行密碼雜湊
- 透過 PostgreSQL 管理使用者資訊
````

它連技術設計都能自動幫你生成，而且還能根據你專案的技術棧量身定製！是不是超貼心？<br>

#### 3️⃣ **Implementation（實作）階段** —— 拆解成具體開發任務

```yaml
## 實作任務清單

### 前端
- [ ] 建立 LoginForm 元件
  - [ ] 實作表單校驗
  - [ ] 錯誤處理
  - [ ] 管理載入狀態
- [ ] 實作 AuthStore
  - [ ] 登入操作
  - [ ] 權杖管理
  - [ ] 自動登出功能
- [ ] 實作路由守衛
  - [ ] 未認證使用者的重定向處理
  - [ ] 已認證使用者的訪問控制

### 後端
- [ ] 實作認證介面
  - [ ] /api/auth/login
  - [ ] /api/auth/logout
  - [ ] /api/auth/refresh
- [ ] 編寫中介軟體
  - [ ] JWT 驗證中介軟體
  - [ ] 請求速率限制
- [ ] 資料庫設計
  - [ ] users 表
  - [ ] sessions 表

### 測試
- [ ] 單元測試
- [ ] 整合測試
- [ ] 端對端（E2E）測試
```

只要點一下任務，AI 就會自動開始實作對應功能，就像你在給得力的部下分派工作一樣，輕鬆又高效！<br>

### 📋 **Spec 的實際用法**

```md
# 方法一：從 Kiro 面板操作

1. 點選左側邊欄的 Kiro 圖示
2. 在 Specs 區域點選「+」按鈕
3. 用自然語言輸入你的需求

# 方法二：透過聊天視窗生成

1. 使用 Cmd/Ctrl + L 開啟聊天面板
2. 點選「Spec」按鈕
3. 輸入你的需求內容

# 實際輸入示例

"我想實作一個電商網站的購物車功能，
需要包含以下幾點：

- 新增/刪除商品
- 修改商品數量
- 檢查庫存
- 自動計算總金額
- 支援優惠券
- 運費計算"

# Kiro 自動生成的內容結構如下

.kiro/specs/shopping-cart/
├── requirements.md # 詳細的需求定義
├── design.md # 技術設計文件
└── tasks.md # 實作任務清單
```

---

## 🤖 **Agent Hooks — 自動化工作流程的魔法**

### 🤖 **什麼是 Agent Hooks？什麼時候該用它？**

寫程式碼的時候，你有沒有過這樣的心聲：<br>

- "每次儲存檔案都要手動跑 ESLint，好麻煩……"<br>
- "新建元件還得自己加測試檔案，太懶得動手了……"<br>
- "import 一堆，每次都要手動整理，真心累……"<br>
  沒錯，這些重複又枯燥的操作，**Agent Hooks 全都能幫你自動搞定！**

### 🔧 **實際 Hook 設定示例（可直接複製使用！）**

#### 1️⃣ **保持程式碼整潔的「儲存時自動格式化 Hook」**

每次儲存檔案時，自動幫你格式化程式碼，讓專案一直保持高質量 ✨<br>

```yaml
# 名稱：auto-format-on-save
# 說明：在儲存檔案時自動格式化程式碼並整理 import 語句

Trigger: File Save
Target: "**/*.{js,ts,jsx,tsx}"
Instructions: |
  每當儲存檔案時，依次執行以下操作：

  1. 使用 ESLint 檢查問題  
     - 能自動修復的部分直接修復  
     - 無法自動修復的問題列出清單  

  2. 使用 Prettier 格式化程式碼  
     - 優先使用專案中的 .prettierrc 配置  
     - 如果沒有則使用預設配置  

  3. 整理 import 語句  
     - 刪除未使用的 import  
     - 調整 import 順序（外部 → 內部 → 相對路徑）  
     - 合併重複的 import  

  4. 檢查 console.log  
     - 如果在正式程式碼中檢測到 console.log，發出警告  
     - 如果是除錯用途，建議加上 `/* debug */` 註釋說明
```

只要設好這個 Hook，每次儲存檔案時，程式碼就會自動整潔如新 ✨ <br>
在團隊開發中，它能幫大家統一程式碼風格，簡直不要太好用！💯👨‍💻👩‍💻

#### 2️⃣ **React 開發者的神助手「元件建立時自動 Hook」**

````yaml
# 名稱：react-component-scaffold
# 說明：在建立新的 React 元件時，自動生成所需的相關檔案

Trigger: File Create
Target: "src/components/**/*.tsx"
Instructions: |
  當你新建一個 React 元件時，將自動執行以下操作：

  1. 生成元件的基礎結構程式碼
     ```typescript
     import React from 'react'
     import styles from './ComponentName.module.css'
     
     interface ComponentNameProps {
       // TODO: 定義元件的 props
     }
     
     export const ComponentName: React.FC<ComponentNameProps> = (props) => {
       return (
         <div className={styles.container}>
           {/* TODO: 元件實作 */}
         </div>
       )
     }
     ```

  2. 建立對應的測試檔案  
     - 在同一目錄下生成 ComponentName.test.tsx  
     - 包含基礎的渲染測試用例

  3. 建立 Storybook 的 story 檔案  
     - 生成 ComponentName.stories.tsx  
     - 包含基礎的元件展示 story

  4. 建立 CSS 模組樣式檔案  
     - 生成 ComponentName.module.css  
     - 包含基礎樣式定義

  5. 自動向 index.ts 新增匯出語句
````

每次新建元件，是不是都在手動一個個建這些檔案？ <br>
現在完全不用了！Kiro 自動一次幫你搞定，真正實作**開箱即用的開發體驗**⚡🧩

#### 3️⃣ **守護專案安全的「敏感資訊檢測 Hook」**

```yaml
# 名稱：security-scanner
# 說明：檢查程式碼中是否包含 API 金鑰或其他敏感資訊

Trigger: File Save
Target: "**/*"
Instructions: |
  掃描檔案內容，檢測以下型別的敏感資訊：

  1. 硬編碼的認證資訊  
     - API 金鑰（如 AWS、Google、OpenAI 等）  
     - 密碼  
     - 私鑰  
     - 資料庫連線字串  

  2. 如果發現敏感資訊，執行以下處理：  
     - 高亮顯示包含問題的程式碼行  
     - 建議將敏感資訊移至環境變數  
     - 給出新增到 .env 檔案的示例  
     - 檢查 .gitignore 中是否已包含 .env 檔案  

  3. 私有 URL 檢查  
     - 內部 API 端點  
     - 開發環境用的 URL  
     - 同樣建議將其環境變數化  

  4. 提交前最終檢查  
     - 透過 git diff 檢查是否有敏感資訊將被提交  
     - 如有問題，發出警告並建議中止提交操作
```

這個真的超級重要！🙌 <br>
有沒有人不小心把敏感資訊推到 GitHub 上過？舉個手吧～（別害羞，大家都幹過...😅） <br>
有了這個 Hook，幫你**提前踩剎車、保住安全底線**，不再心跳加速地強制刪 commit！🔥🛡️

### 🛠️ **Hook 設定的實用技巧**

```md
# 如何建立 Hook

1. 開啟 Kiro 面板 → Agent Hooks → 點選「+」按鈕
2. 用自然語言輸入你想要實作的功能描述
3. Kiro 會自動生成配置 → 你確認後儲存即可 🎉

# 設計高效 Hook 的小技巧

- 一個 Hook 只做一件事（遵循單一職責原則）
- 檔案匹配規則要儘量具體（避免使用 "*/*" 這種全域性匹配）
- 注意執行頻率（每次儲存觸發可能會帶來效能壓力）
- 在指令中加入錯誤處理邏輯，增強穩定性

# 啟用 / 禁用 Hook 的方法

- 點選 👁️ 圖示即可切換 ON / OFF 狀態
- 想臨時停用某個 Hook 的時候非常方便
```

---

## 🎯 **Steering — 專案知識管理系統**

### 🎯 **什麼是 Steering？為什麼它這麼重要？**

你有沒有在加入新專案時遇到過這些狀況：

- "這個專案的程式碼規範是怎樣的？"
- "用的庫都是什麼版本？"
- "目錄結構有什麼約定？"
- "命名規則用 camelCase 還是 snake_case？"<br>

通常這些資訊都需要每次親自講解、手動說明……<br>
但只要用了 **Steering**，AI 就能一開始就**瞭解整個專案的背景和規則！**

{{% hint info %}}
本章節基於 [Kiro 官方 Steering 文件](https://kiro.dev/docs/steering/) 編寫。
{{% /hint %}}

### **什麼是 Steering？**

Steering 透過 `.kiro/steering/` 目錄中的 markdown 檔案為 Kiro 提供持久的專案知識。無需在每次聊天中解釋您的約定，Steering 檔案確保 Kiro 始終遵循您建立的模式、庫和標準。

### 🧠 **Kiro 會自動生成的 3 個 Steering 檔案**

Kiro 非常聰明，它會自動分析你的專案，幫你生成最基本的 Steering 檔案，讓 AI 從一開始就理解專案的全貌：

#### **1️⃣ product.md — 專案/產品的概覽說明**

```md
# 此檔案會生成在 .kiro/steering/product.md

# 產品概覽

## 產品名稱

MyAwesomeEC 購物平臺

## 使命

為中小型線上商家提供一個簡單易用、功能強大的電商建站平臺

## 目標使用者

- 個體經營者
- 中小企業的電商負責人
- 有意透過副業經營網店的個人使用者

## 核心功能

1. 商品管理

   - 庫存管理
   - 商品分類
   - 支援上傳多張商品圖片

2. 訂單管理

   - 訂單狀態跟蹤
   - 配送進度查詢
   - 退換貨流程支援

3. 客戶管理

   - 使用者註冊與登入
   - 購買歷史記錄檢視
   - 商品收藏與願望清單功能

4. 支付功能
   - 支援信用卡支付（整合 Stripe）
   - 便利店付款
   - 貨到付款

## 業務目標

- 月交易額突破 1 億元
- 實作 1,000 家以上活躍商戶上線運營
- 將平均訂單金額穩定在 5,000 元左右
```

有了這個檔案，AI 就能真正理解"這個專案的目標是什麼"，從而做出更加貼合實際、符合方向的智慧建議。🎯🤖

#### 2️⃣ **tech.md —— 專案的技術棧說明檔案**

```md
# 此檔案將生成在 .kiro/steering/tech.md

# 技術棧說明

## 前端

- **框架**：Next.js 14.2.5（使用 App Router）
- **語言**：TypeScript 5.5.4
- **樣式處理**：
  - Tailwind CSS 3.4.1
  - CSS Modules（元件級樣式）
- **狀態管理**：Zustand 4.5.4
- **表單處理**：React Hook Form 7.52.1
- **資料驗證**：Zod 3.23.8

## 後端

- **執行時環境**：Node.js 20.x
- **框架**：Express 4.19.2
- **ORM 工具**：Prisma 5.17.0
- **認證機制**：NextAuth.js 4.24.7

## 資料庫

- **生產環境**：PostgreSQL 15（託管於 AWS RDS）
- **開發環境**：PostgreSQL 15（透過 Docker 本地執行）
- **快取服務**：Redis 7.2

## 基礎設施 & 部署

- **前端託管**：Vercel
- **API 部署**：AWS Lambda + API Gateway
- **圖片分發**：Cloudinary
- **監控系統**：Datadog

## 開發工具

- **包管理器**：pnpm 8.15.6
- **程式碼規範檢查**：ESLint 8.57.0
- **程式碼格式化工具**：Prettier 3.3.3
- **測試框架**：
  - Jest 29.7.0
  - React Testing Library
  - Playwright（端對端測試）

## 注意事項

- Node.js 版本透過 `.nvmrc` 進行管理
- 必須使用 pnpm（禁止使用 npm 或 yarn）
- 已透過 Husky 設定 pre-commit 鉤子
```

有了這份檔案，AI 就能**完全掌握你專案的技術細節**，
不再問你"用的是什麼框架"，建議也會更貼合實際，直接對上點子上！

#### 3️⃣ **structure.md —— 專案結構說明檔案**

````md
# 此檔案將生成在 .kiro/steering/structure.md

# 專案結構說明

## 目錄結構

project-root/
├── .kiro/ # Kiro 配置目錄
│ ├── steering/ # 專案資訊（AI 使用的上下文）
│ └── settings/ # Kiro 的執行設定
├── src/
│ ├── app/ # Next.js 的 App Router 頁面目錄
│ │ ├── (auth)/ # 需要身份驗證的頁面
│ │ ├── (public)/ # 公共訪問頁面
│ │ ├── api/ # API 路由
│ │ └── layout.tsx # 根級佈局元件
│ ├── components/ # UI 元件目錄
│ │ ├── common/ # 通用元件（例如按鈕、卡片等）
│ │ ├── features/ # 按功能模組分類的元件
│ │ └── ui/ # 基礎 UI 元件（輸入框、標籤等）
│ ├── hooks/ # 自定義 React Hooks
│ ├── lib/ # 工具方法與模組集合
│ │ ├── api/ # 封裝的 API 客戶端
│ │ ├── utils/ # 通用工具函式
│ │ └── constants/ # 常量定義
│ ├── stores/ # Zustand 狀態管理邏輯
│ └── types/ # TypeScript 型別定義

├── prisma/
│ ├── schema.prisma # 資料庫結構定義（Prisma Schema）
│ └── migrations/ # 資料庫遷移記錄

├── public/ # 靜態資原始檔（圖片、圖示等）
├── tests/ # 測試檔案目錄（單元測試、整合測試）
└── docs/ # 專案文件與說明檔案

### **命名規範**

#### **檔案命名：**

- **元件（Component）**：使用 PascalCase 命名，副檔名為 .tsx
  示例：ProductCard.tsx
- **自定義 Hook**：使用 camelCase 命名，副檔名為 .ts
  示例：useAuth.ts
- **工具函式（Utility）**：使用 camelCase 命名，副檔名為 .ts
  示例：formatPrice.ts
- **型別定義**：統一命名為 types.ts 或 models.ts
- **常量定義**：檔案命名為 constants.ts，檔案內常量使用全大寫 SNAKE_CASE 命名
  示例：MAX_ITEM_COUNT, DEFAULT_CURRENCY

#### **程式碼中的命名規則：**

- **變數 / 函式**：使用 camelCase 命名
  示例：userName, getProductList
- **常量**：使用全大寫 SNAKE_CASE 命名（UPPER_SNAKE_CASE）
  示例：DEFAULT_TIMEOUT, MAX_RETRY_COUNT
- **型別 / 介面（Type & Interface）**：使用 PascalCase 命名
  示例：UserProfile, OrderItem
- **列舉（Enum）**：列舉名使用 PascalCase，列舉值使用全大寫 SNAKE_CASE

### 匯入順序（Import 順序）建議如下：

1. React 相關模組（例如 react, react-dom, next 等）
2. 外部庫（如 lodash, axios, zustand 等）
3. 內部路徑別名（如 @/components, @/lib 等）
4. 相對路徑（例如 ../utils, ./Button）
5. 樣式檔案（如 .css, .scss, .module.css）
   例：

```JavaScript
// 1. React 相關
import React, { useState } from 'react'

// 2. 外部庫
import { useRouter } from 'next/navigation'
import axios from 'axios'

// 3. 內部路徑別名
import { Button } from '@/components/ui'
import { formatPrice } from '@/lib/utils'

// 4. 相對路徑
import { ProductType } from './types'

// 5. 樣式檔案
import styles from './Product.module.css'

```
````

這些檔案會在你開啟專案時被 AI 自動讀取，
AI 會始終基於專案上下文理解並給出回答，超靠譜！

### **自定義 Steering 檔案的建立**

預設的三個 Steering 檔案不夠用？<br>
想更詳細地告訴 AI 你的專案規則？<br>
那就來建立自定義的 Steering 檔案吧！<br>

#### **定義 API 設計規範的示例**

````markdown
# .kiro/steering/api-standards.md

---

inclusion: fileMatch
fileMatchPattern: "app/api/*"

---

# API 設計標準

## 介面設計

### URL 設計原則

- 採用 RESTful 設計
- 資源名稱使用複數形式（例如 /users, /products）
- 路徑層級最多為三層
- 使用 kebab-case（例如 /user-profiles）

### HTTP 方法使用規範

- GET：獲取資源（冪等）
- POST：建立資源
- PUT：整體更新資源
- PATCH：部分更新資源
- DELETE：刪除資源

## 響應格式

### 成功響應示例

```json
{
  "success": true,
  "data": {
    // 實際資料內容
  },
  "meta": {
    "timestamp": "2025-01-20T10:00:00Z",
    "version": "1.0",
    "requestId": "uuid-here"
  }
}
```

### **錯誤響應（Error Responses）**

```JSON
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "輸入值不合法",
    "details": [
      {
        "field": "email",
        "message": "請輸入有效的郵箱地址"
      }
    ]
  },
  "meta": {
    "timestamp": "2025-01-20T10:00:00Z",
    "requestId": "uuid-here"
  }
}
```
````

有了這份 Steering 檔案，AI 在生成 API 端點時會自動遵循這些規則，幫你寫出合規的程式碼。

### **包含模式**

Steering 檔案可以配置為根據您的需求在不同時間載入：

#### **始終包含（預設）**
```yaml
---
inclusion: always
---
```
這些檔案會自動載入到每次 Kiro 互動中。

#### **條件包含**
```yaml
---
inclusion: fileMatch
fileMatchPattern: 'components/**/*.tsx'
---
```
檔案僅在處理匹配指定模式的檔案時自動包含。

#### **手動包含**
```yaml
---
inclusion: manual
---
```
透過在聊天訊息中使用 `#steering-file-name` 引用檔案，按需提供檔案。

---

## ⚡ **Kiro Powers — 擴充套件生態系統的無限可能**

### ⚡ **什麼是 Kiro Powers？**

Kiro Powers 將 MCP（Model Context Protocol）、Steering 和 Hooks 打包成可重用的能力包，讓你能夠輕鬆擴充套件 Kiro 的功能。Powers 封裝了來自開發工具提供商和領域專家的最佳實踐，為設計、開發、部署和可觀測性等各種用例提供智慧指導。

{{% hint info %}}
Kiro Powers 功能在 Kiro IDE 0.7+ 版本中可用。
{{% /hint %}}

### 🚀 **Powers 的工作原理**

#### **1️⃣ 發現或建立 Power**
瀏覽來自合作伙伴或社群的精選 Powers，或者構建你自己的 Power。Powers 將 MCP、Steering 和 Hooks 打包成可重用的能力。

#### **2️⃣ 一鍵安裝**
從網站或 IDE 中即時新增 Powers。Kiro 自動處理配置和設定，讓專業能力在幾秒鐘內就能使用。

#### **3️⃣ 按需啟用**
Powers 根據你的對話上下文動態載入。Kiro 評估已安裝的 Powers 並僅啟用相關的那些，保持你的 Agent 專注。

### 🛠️ **官方 Powers 生態系統**

基於 [kiro.dev/powers](https://kiro.dev/powers/) 的真實資訊，當前可用的 Powers 包括：

#### **🎨 設計與前端開發**
- **Design to Code with Figma** (by Figma)：連線 Figma 設計到程式碼元件，自動生成設計系統規則，對映 UI 元件到 Figma 設計，保持設計與程式碼的一致性
- **Deploy web apps with Netlify** (by Netlify)：部署 React、Next.js、Vue 和其他現代 Web 應用到 Netlify 的全球 CDN，支援自動構建

#### **🗄️ 資料庫與後端服務**
- **Build a backend with Supabase** (by Supabase)：使用 Supabase 的 Postgres 資料庫、身份驗證、儲存和實時訂閱功能構建應用
- **Build a backend (local) with Supabase** (by Supabase)：本地 Supabase 開發，讓你在本地機器上的自包含環境中工作專案
- **Build a database with Neon** (by Neon)：無伺服器 Postgres，支援資料庫分支、自動擴縮容和零擴充套件，完美適配現代開發工作流程

#### **🏗️ 基礎設施與部署**
- **Deploy infrastructure with Terraform** (by HashiCorp)：使用 Terraform 構建和管理基礎設施即程式碼，訪問 Registry 提供商、模組、策略和 HCP Terraform 工作流管理
- **Build infrastructure on AWS** (by Christian Bonzelet)：使用 Python 的 CDK 構建 AWS 基礎設施，遵循 AWS Well-Architected 框架最佳實踐
- **Deploy a distributed SQL database on AWS** (by Rolf Koski)：針對 PostgreSQL 相容的無伺服器分散式 SQL 資料庫 Aurora DSQL，管理模式、執行查詢並處理具有 DSQL 特定約束的遷移

#### **🔍 監控與可觀測性**
- **Datadog Observability** (by Datadog)：查詢 Datadog 的日誌、指標、鏈路追蹤、RUM 事件、事故和監控器，用於生產環境除錯和效能分析
- **Dynatrace Observability** (by Dynatrace)：使用 DQL 查詢 Dynatrace 的日誌、指標、鏈路追蹤、問題和 Kubernetes 事件，用於生產環境除錯和效能分析

#### **💳 支付與商務**
- **Stripe Payments** (by Stripe)：構建 Stripe 支付整合，接受付款、管理訂閱、處理賬單和退款

#### **🧪 測試與 API 管理**
- **API Testing with Postman** (by Postman)：使用 Postman 自動化 API 測試和集合管理，建立工作空間、集合、環境並程式化執行測試

#### **🤖 AI 與智慧體開發**
- **Build an agent with Strands** (by AWS)：使用 Strands Agent SDK 和 Bedrock、Anthropic、OpenAI、Gemini 或 Llama 模型構建 AI 智慧體
- **Build an agent with Amazon Bedrock AgentCore** (by AWS)：Amazon Bedrock AgentCore 是一個用於構建、部署和操作有效智慧體的代理平臺

#### **🏢 企業級解決方案**
- **SaaS Builder** (by Allen Helton)：構建生產就緒的多租戶 SaaS 應用，整合無伺服器架構、計費系統和企業級安全

#### **🛠️ 開發者工具**
- **Build a Power** (by Kiro Team)：構建和測試新 Kiro Powers 的完整指南，包含模板、最佳實踐和驗證

### 🚀 **Powers 的實際使用場景**

#### **場景一：全棧開發流程**
```md
# 一個完整的專案開發流程

1. 📋 使用 Spec 模式定義需求
   "建立一個使用者管理系統"

2. 🎨 連線 Figma Power 獲取設計
   "從 Figma 中獲取使用者列表頁面的設計規範"

3. 🗄️ 使用 Supabase Power 設定資料庫
   "在 Supabase 中建立 users 表，包含郵箱、姓名和建立時間欄位"

4. 💻 開發功能（Kiro IDE + Agent）
   "基於設計稿和資料庫結構實作使用者管理介面"

5. 🧪 使用 Postman Power 測試 API
   "建立使用者管理 API 的測試集合"

6. 🚀 使用 Netlify Power 部署
   "將應用部署到 Netlify 生產環境"

7. 🔍 使用 Datadog Power 監控
   "檢視應用的效能指標和錯誤日誌"
```

#### **場景二：問題排查與最佳化**
```md
# 生產環境問題快速定位

1. 🚨 發現問題
   "使用者反饋登入功能異常"

2. 🔍 Datadog Power 查詢日誌
   "查詢過去1小時內登入相關的錯誤日誌"

3. 📊 分析效能資料
   "獲取登入 API 的響應時間和錯誤率趨勢"

4. 🗄️ Supabase Power 檢查資料
   "檢查使用者表中的資料完整性"

5. 🔧 修復並測試
   "修復問題後使用 Postman Power 驗證功能"

6. 🚀 重新部署
   "透過 Netlify Power 部署修復版本"
```

### 🔧 **如何使用 Kiro Powers**

#### **安裝和配置**
```md
# 方法一：透過 Kiro Powers 市場（推薦）
1. 訪問 https://kiro.dev/powers/
2. 瀏覽可用的 Powers
3. 點選 "Add to Kiro" 按鈕一鍵安裝

# 方法二：透過 Kiro IDE
1. 開啟 Kiro IDE
2. 在 Powers 面板中瀏覽和安裝
3. Kiro 自動處理配置和設定

# 方法三：手動配置（高階使用者）
1. 編輯 .kiro/settings/mcp.json 檔案
2. 新增 Power 的配置資訊
3. 重啟 Kiro 或重新連線 MCP 伺服器
```

#### **在對話中使用 Powers**
```md
# Powers 會根據對話上下文自動啟用

"幫我設計一個登入頁面" → 自動啟用 Figma Power

"建立一個新的資料表" → 自動啟用 Supabase Power

"查詢生產環境的錯誤日誌" → 自動啟用 Datadog Power

"部署當前專案" → 自動啟用 Netlify Power
```

### 🌟 **Powers 的獨特優勢**

#### **🎯 智慧啟用**
- Powers 根據對話上下文動態載入
- 只啟用相關的 Powers，保持 Agent 專注
- 無需手動選擇或切換工具

#### **📦 封裝最佳實踐**
- 來自工具提供商和領域專家的最佳實踐
- 標準化的工作流程和配置
- 減少學習成本和配置複雜度

#### **🔌 無縫整合**
- 基於 MCP 協議的標準化整合
- 一鍵安裝，自動配置
- 與 Kiro 的 Steering 和 Hooks 系統深度整合

#### **🌍 開放生態**
- 支援社群貢獻的 Powers
- 企業可以建立內部專用 Powers
- 持續增長的 Powers 生態系統

### 🎯 **開發者生態**

#### **建立自定義 Power**
如果現有的 Powers 不滿足需求，你可以：

1. **使用 "Build a Power" Power**：Kiro 團隊提供的完整指南，包含模板、最佳實踐和驗證工具

2. **基於 MCP 協議開發**：
   - 遵循 Model Context Protocol 標準
   - 使用 TypeScript、Python、Go 等語言
   - 將 MCP、Steering 和 Hooks 打包成可重用的能力

3. **貢獻到社群**：
   - 提交到 [Kiro Powers 提交頁面](https://kiro.dev/powers/submit/)
   - 與全球開發者分享你的創新
   - 幫助擴充套件 Kiro 生態系統

#### **企業級定製**
企業可以建立內部專用的 Powers：
- 連線內部 API 和服務
- 整合企業級安全和合規要求
- 定製化的工作流程和審批機制
- 與現有 DevOps 工具鏈無縫對接

{{% hint info %}}
想要了解更多 Powers 或提交你自己的 Power？訪問 [kiro.dev/powers](https://kiro.dev/powers/) 或檢視 [Powers 提交頁面](https://kiro.dev/powers/submit/)。
{{% /hint %}}

---

## 🎊 **總結**

這四大特色功能讓 Kiro 成為真正的智慧開發平臺：

- **Spec 模式**：從模糊需求到清晰實作的結構化開發
- **Agent Hooks**：自動化重複工作，提升開發效率  
- **Steering**：讓 AI 深度理解專案，提供精準建議
- **Kiro Powers**：連線整個開發生態系統，實作無縫的工具整合

掌握了這些功能，你就能充分發揮 Kiro 的強大能力，享受前所未有的開發體驗！🚀