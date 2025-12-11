---
title: "Kiro 特色功能"
weight: 20
bookToc: true
---

# **Kiro 特色功能**

Kiro 不仅仅是一个 AI IDE，更是一个完整的智能开发平台。以下三大特色功能让 Kiro 在众多开发工具中脱颖而出，为开发者提供前所未有的编程体验。

---

## 📋 **Spec 模式 — 结构化开发的革命**

### ❓ **什么是 Spec？为什么它这么重要？**

传统开发是不是经常是这种节奏：

- "先帮我做个登录功能吧" —— 要求模模糊糊
- 好吧，先写着再说
- "啊对了，还要加密码重置"
- "邮件认证也别忘了加一下"
- 最后代码一团糟、文档跟不上、需求越改越乱……

😵‍💫 完全失控。
而 **Spec**，就是来解决这个老问题的！<br>
它会让 AI 帮你**整理模糊需求**，变成一份结构清晰、条理清楚的**规范文档**。<br>
——不再边写边猜、不再回头大改，你的项目，从一开始就走在正轨上。✅<br>

### **🛠️ Spec 的三大阶段（这真的很革命 🔥）**

#### 1️⃣ Requirements（需求）阶段 —— 明确"要做什么"

```yaml
# 实际示例：Kiro 自动生成的需求定义

## 用户故事
As a: 用户
I want to: 使用邮箱地址和密码登录
So that: 能使用服务的个性化功能

## 接受标准（EARS 语法）
When: 用户访问登录页面时
The system shall: 显示登录表单
With:
  - 邮箱地址输入框
  - 密码输入框（以掩码形式显示）
  - "登录"按钮
  - "忘记密码"链接

When: 用户输入正确的认证信息并点击登录按钮时
The system shall: 将用户重定向到仪表板页面
And: 生成 JWT 令牌并启动会话

When: 用户输入了错误的认证信息时
The system shall: 显示错误信息
But: 出于安全考虑，不显示具体错误原因
```

是不是很惊人？仅仅一句"写个登录功能"，它就能把需求细化到如此详细的程度，真是超神奇！<br>

#### 2️⃣ **Design（设计）阶段** —— 规划「怎么实现」

````md
// Kiro 自动生成的技术设计文档示例

## 架构设计

### 前端结构

```ts
interface LoginSystem {
  // UI 组件
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

  // 状态管理
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

  // API 通信
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

### 后端结构

- 使用 Node.js + Express
- JWT 认证
- 使用 bcrypt 进行密码哈希
- 通过 PostgreSQL 管理用户信息
````

它连技术设计都能自动帮你生成，而且还能根据你项目的技术栈量身定制！是不是超贴心？<br>

#### 3️⃣ **Implementation（实现）阶段** —— 拆解成具体开发任务

```yaml
## 实现任务清单

### 前端
- [ ] 创建 LoginForm 组件
  - [ ] 实现表单校验
  - [ ] 错误处理
  - [ ] 管理加载状态
- [ ] 实现 AuthStore
  - [ ] 登录操作
  - [ ] 令牌管理
  - [ ] 自动登出功能
- [ ] 实现路由守卫
  - [ ] 未认证用户的重定向处理
  - [ ] 已认证用户的访问控制

### 后端
- [ ] 实现认证接口
  - [ ] /api/auth/login
  - [ ] /api/auth/logout
  - [ ] /api/auth/refresh
- [ ] 编写中间件
  - [ ] JWT 验证中间件
  - [ ] 请求速率限制
- [ ] 数据库设计
  - [ ] users 表
  - [ ] sessions 表

### 测试
- [ ] 单元测试
- [ ] 集成测试
- [ ] 端到端（E2E）测试
```

只要点一下任务，AI 就会自动开始实现对应功能，就像你在给得力的部下分派工作一样，轻松又高效！<br>

### 📋 **Spec 的实际用法**

```md
# 方法一：从 Kiro 面板操作

1. 点击左侧边栏的 Kiro 图标
2. 在 Specs 区域点击「+」按钮
3. 用自然语言输入你的需求

# 方法二：通过聊天窗口生成

1. 使用 Cmd/Ctrl + L 打开聊天面板
2. 点击「Spec」按钮
3. 输入你的需求内容

# 实际输入示例

"我想实现一个电商网站的购物车功能，
需要包含以下几点：

- 添加/删除商品
- 修改商品数量
- 检查库存
- 自动计算总金额
- 支持优惠券
- 运费计算"

# Kiro 自动生成的内容结构如下

.kiro/specs/shopping-cart/
├── requirements.md # 详细的需求定义
├── design.md # 技术设计文档
└── tasks.md # 实现任务清单
```

---

## 🤖 **Agent Hooks — 自动化工作流程的魔法**

### 🤖 **什么是 Agent Hooks？什么时候该用它？**

写代码的时候，你有没有过这样的心声：<br>

- "每次保存文件都要手动跑 ESLint，好麻烦……"<br>
- "新建组件还得自己加测试文件，太懒得动手了……"<br>
- "import 一堆，每次都要手动整理，真心累……"<br>
  没错，这些重复又枯燥的操作，**Agent Hooks 全都能帮你自动搞定！**

### 🔧 **实际 Hook 设置示例（可直接复制使用！）**

#### 1️⃣ **保持代码整洁的「保存时自动格式化 Hook」**

每次保存文件时，自动帮你格式化代码，让项目一直保持高质量 ✨<br>

```yaml
# 名称：auto-format-on-save
# 说明：在保存文件时自动格式化代码并整理 import 语句

Trigger: File Save
Target: "**/*.{js,ts,jsx,tsx}"
Instructions: |
  每当保存文件时，依次执行以下操作：

  1. 使用 ESLint 检查问题  
     - 能自动修复的部分直接修复  
     - 无法自动修复的问题列出清单  

  2. 使用 Prettier 格式化代码  
     - 优先使用项目中的 .prettierrc 配置  
     - 如果没有则使用默认配置  

  3. 整理 import 语句  
     - 删除未使用的 import  
     - 调整 import 顺序（外部 → 内部 → 相对路径）  
     - 合并重复的 import  

  4. 检查 console.log  
     - 如果在正式代码中检测到 console.log，发出警告  
     - 如果是调试用途，建议加上 `/* debug */` 注释说明
```

只要设好这个 Hook，每次保存文件时，代码就会自动整洁如新 ✨ <br>
在团队开发中，它能帮大家统一代码风格，简直不要太好用！💯👨‍💻👩‍💻

#### 2️⃣ **React 开发者的神助手「组件创建时自动 Hook」**

````yaml
# 名称：react-component-scaffold
# 说明：在创建新的 React 组件时，自动生成所需的相关文件

Trigger: File Create
Target: "src/components/**/*.tsx"
Instructions: |
  当你新建一个 React 组件时，将自动执行以下操作：

  1. 生成组件的基础结构代码
     ```typescript
     import React from 'react'
     import styles from './ComponentName.module.css'
     
     interface ComponentNameProps {
       // TODO: 定义组件的 props
     }
     
     export const ComponentName: React.FC<ComponentNameProps> = (props) => {
       return (
         <div className={styles.container}>
           {/* TODO: 组件实现 */}
         </div>
       )
     }
     ```

  2. 创建对应的测试文件  
     - 在同一目录下生成 ComponentName.test.tsx  
     - 包含基础的渲染测试用例

  3. 创建 Storybook 的 story 文件  
     - 生成 ComponentName.stories.tsx  
     - 包含基础的组件展示 story

  4. 创建 CSS 模块样式文件  
     - 生成 ComponentName.module.css  
     - 包含基础样式定义

  5. 自动向 index.ts 添加导出语句
````

每次新建组件，是不是都在手动一个个建这些文件？ <br>
现在完全不用了！Kiro 自动一次帮你搞定，真正实现**开箱即用的开发体验**⚡🧩

#### 3️⃣ **守护项目安全的「敏感信息检测 Hook」**

```yaml
# 名称：security-scanner
# 说明：检查代码中是否包含 API 密钥或其他敏感信息

Trigger: File Save
Target: "**/*"
Instructions: |
  扫描文件内容，检测以下类型的敏感信息：

  1. 硬编码的认证信息  
     - API 密钥（如 AWS、Google、OpenAI 等）  
     - 密码  
     - 私钥  
     - 数据库连接字符串  

  2. 如果发现敏感信息，执行以下处理：  
     - 高亮显示包含问题的代码行  
     - 建议将敏感信息移至环境变量  
     - 给出添加到 .env 文件的示例  
     - 检查 .gitignore 中是否已包含 .env 文件  

  3. 私有 URL 检查  
     - 内部 API 端点  
     - 开发环境用的 URL  
     - 同样建议将其环境变量化  

  4. 提交前最终检查  
     - 通过 git diff 检查是否有敏感信息将被提交  
     - 如有问题，发出警告并建议中止提交操作
```

这个真的超级重要！🙌 <br>
有没有人不小心把敏感信息推到 GitHub 上过？举个手吧～（别害羞，大家都干过...😅） <br>
有了这个 Hook，帮你**提前踩刹车、保住安全底线**，不再心跳加速地强制删 commit！🔥🛡️

### 🛠️ **Hook 设置的实用技巧**

```md
# 如何创建 Hook

1. 打开 Kiro 面板 → Agent Hooks → 点击「+」按钮
2. 用自然语言输入你想要实现的功能描述
3. Kiro 会自动生成配置 → 你确认后保存即可 🎉

# 设计高效 Hook 的小技巧

- 一个 Hook 只做一件事（遵循单一职责原则）
- 文件匹配规则要尽量具体（避免使用 "*/*" 这种全局匹配）
- 注意执行频率（每次保存触发可能会带来性能压力）
- 在指令中加入错误处理逻辑，增强稳定性

# 启用 / 禁用 Hook 的方法

- 点击 👁️ 图标即可切换 ON / OFF 状态
- 想临时停用某个 Hook 的时候非常方便
```

---

## 🎯 **Steering — 项目知识管理系统**

### 🎯 **什么是 Steering？为什么它这么重要？**

你有没有在加入新项目时遇到过这些状况：

- "这个项目的代码规范是怎样的？"
- "用的库都是什么版本？"
- "目录结构有什么约定？"
- "命名规则用 camelCase 还是 snake_case？"<br>

通常这些信息都需要每次亲自讲解、手动说明……<br>
但只要用了 **Steering**，AI 就能一开始就**了解整个项目的背景和规则！**

{{% hint info %}}
本章节基于 [Kiro 官方 Steering 文档](https://kiro.dev/docs/steering/) 编写。
{{% /hint %}}

### **什么是 Steering？**

Steering 通过 `.kiro/steering/` 目录中的 markdown 文件为 Kiro 提供持久的项目知识。无需在每次聊天中解释您的约定，Steering 文件确保 Kiro 始终遵循您建立的模式、库和标准。

### 🧠 **Kiro 会自动生成的 3 个 Steering 文件**

Kiro 非常聪明，它会自动分析你的项目，帮你生成最基本的 Steering 文件，让 AI 从一开始就理解项目的全貌：

#### **1️⃣ product.md — 项目/产品的概览说明**

```md
# 此文件会生成在 .kiro/steering/product.md

# 产品概览

## 产品名称

MyAwesomeEC 购物平台

## 使命

为中小型在线商家提供一个简单易用、功能强大的电商建站平台

## 目标用户

- 个体经营者
- 中小企业的电商负责人
- 有意通过副业经营网店的个人用户

## 核心功能

1. 商品管理

   - 库存管理
   - 商品分类
   - 支持上传多张商品图片

2. 订单管理

   - 订单状态跟踪
   - 配送进度查询
   - 退换货流程支持

3. 客户管理

   - 用户注册与登录
   - 购买历史记录查看
   - 商品收藏与愿望清单功能

4. 支付功能
   - 支持信用卡支付（集成 Stripe）
   - 便利店付款
   - 货到付款

## 业务目标

- 月交易额突破 1 亿元
- 实现 1,000 家以上活跃商户上线运营
- 将平均订单金额稳定在 5,000 元左右
```

有了这个文件，AI 就能真正理解"这个项目的目标是什么"，从而做出更加贴合实际、符合方向的智能建议。🎯🤖

#### 2️⃣ **tech.md —— 项目的技术栈说明文件**

```md
# 此文件将生成在 .kiro/steering/tech.md

# 技术栈说明

## 前端

- **框架**：Next.js 14.2.5（使用 App Router）
- **语言**：TypeScript 5.5.4
- **样式处理**：
  - Tailwind CSS 3.4.1
  - CSS Modules（组件级样式）
- **状态管理**：Zustand 4.5.4
- **表单处理**：React Hook Form 7.52.1
- **数据验证**：Zod 3.23.8

## 后端

- **运行时环境**：Node.js 20.x
- **框架**：Express 4.19.2
- **ORM 工具**：Prisma 5.17.0
- **认证机制**：NextAuth.js 4.24.7

## 数据库

- **生产环境**：PostgreSQL 15（托管于 AWS RDS）
- **开发环境**：PostgreSQL 15（通过 Docker 本地运行）
- **缓存服务**：Redis 7.2

## 基础设施 & 部署

- **前端托管**：Vercel
- **API 部署**：AWS Lambda + API Gateway
- **图片分发**：Cloudinary
- **监控系统**：Datadog

## 开发工具

- **包管理器**：pnpm 8.15.6
- **代码规范检查**：ESLint 8.57.0
- **代码格式化工具**：Prettier 3.3.3
- **测试框架**：
  - Jest 29.7.0
  - React Testing Library
  - Playwright（端到端测试）

## 注意事项

- Node.js 版本通过 `.nvmrc` 进行管理
- 必须使用 pnpm（禁止使用 npm 或 yarn）
- 已通过 Husky 设置 pre-commit 钩子
```

有了这份文件，AI 就能**完全掌握你项目的技术细节**，
不再问你"用的是什么框架"，建议也会更贴合实际，直接对上点子上！

#### 3️⃣ **structure.md —— 项目结构说明文件**

````md
# 此文件将生成在 .kiro/steering/structure.md

# 项目结构说明

## 目录结构

project-root/
├── .kiro/ # Kiro 配置目录
│ ├── steering/ # 项目信息（AI 使用的上下文）
│ └── settings/ # Kiro 的运行设置
├── src/
│ ├── app/ # Next.js 的 App Router 页面目录
│ │ ├── (auth)/ # 需要身份验证的页面
│ │ ├── (public)/ # 公共访问页面
│ │ ├── api/ # API 路由
│ │ └── layout.tsx # 根级布局组件
│ ├── components/ # UI 组件目录
│ │ ├── common/ # 通用组件（例如按钮、卡片等）
│ │ ├── features/ # 按功能模块分类的组件
│ │ └── ui/ # 基础 UI 元件（输入框、标签等）
│ ├── hooks/ # 自定义 React Hooks
│ ├── lib/ # 工具方法与模块集合
│ │ ├── api/ # 封装的 API 客户端
│ │ ├── utils/ # 通用工具函数
│ │ └── constants/ # 常量定义
│ ├── stores/ # Zustand 状态管理逻辑
│ └── types/ # TypeScript 类型定义

├── prisma/
│ ├── schema.prisma # 数据库结构定义（Prisma Schema）
│ └── migrations/ # 数据库迁移记录

├── public/ # 静态资源文件（图片、图标等）
├── tests/ # 测试文件目录（单元测试、集成测试）
└── docs/ # 项目文档与说明文件

### **命名规范**

#### **文件命名：**

- **组件（Component）**：使用 PascalCase 命名，文件扩展名为 .tsx
  示例：ProductCard.tsx
- **自定义 Hook**：使用 camelCase 命名，扩展名为 .ts
  示例：useAuth.ts
- **工具函数（Utility）**：使用 camelCase 命名，扩展名为 .ts
  示例：formatPrice.ts
- **类型定义**：统一命名为 types.ts 或 models.ts
- **常量定义**：文件命名为 constants.ts，文件内常量使用全大写 SNAKE_CASE 命名
  示例：MAX_ITEM_COUNT, DEFAULT_CURRENCY

#### **代码中的命名规则：**

- **变量 / 函数**：使用 camelCase 命名
  示例：userName, getProductList
- **常量**：使用全大写 SNAKE_CASE 命名（UPPER_SNAKE_CASE）
  示例：DEFAULT_TIMEOUT, MAX_RETRY_COUNT
- **类型 / 接口（Type & Interface）**：使用 PascalCase 命名
  示例：UserProfile, OrderItem
- **枚举（Enum）**：枚举名使用 PascalCase，枚举值使用全大写 SNAKE_CASE

### 导入顺序（Import 顺序）建议如下：

1. React 相关模块（例如 react, react-dom, next 等）
2. 外部库（如 lodash, axios, zustand 等）
3. 内部路径别名（如 @/components, @/lib 等）
4. 相对路径（例如 ../utils, ./Button）
5. 样式文件（如 .css, .scss, .module.css）
   例：

```JavaScript
// 1. React 相关
import React, { useState } from 'react'

// 2. 外部库
import { useRouter } from 'next/navigation'
import axios from 'axios'

// 3. 内部路径别名
import { Button } from '@/components/ui'
import { formatPrice } from '@/lib/utils'

// 4. 相对路径
import { ProductType } from './types'

// 5. 样式文件
import styles from './Product.module.css'

```
````

这些文件会在你打开项目时被 AI 自动读取，
AI 会始终基于项目上下文理解并给出回答，超靠谱！

### **自定义 Steering 文件的创建**

默认的三个 Steering 文件不够用？<br>
想更详细地告诉 AI 你的项目规则？<br>
那就来创建自定义的 Steering 文件吧！<br>

#### **定义 API 设计规范的示例**

````markdown
# .kiro/steering/api-standards.md

---

inclusion: fileMatch
fileMatchPattern: "app/api/*"

---

# API 设计标准

## 接口设计

### URL 设计原则

- 采用 RESTful 设计
- 资源名称使用复数形式（例如 /users, /products）
- 路径层级最多为三层
- 使用 kebab-case（例如 /user-profiles）

### HTTP 方法使用规范

- GET：获取资源（幂等）
- POST：创建资源
- PUT：整体更新资源
- PATCH：部分更新资源
- DELETE：删除资源

## 响应格式

### 成功响应示例

```json
{
  "success": true,
  "data": {
    // 实际数据内容
  },
  "meta": {
    "timestamp": "2025-01-20T10:00:00Z",
    "version": "1.0",
    "requestId": "uuid-here"
  }
}
```

### **错误响应（Error Responses）**

```JSON
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "输入值不合法",
    "details": [
      {
        "field": "email",
        "message": "请输入有效的邮箱地址"
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

有了这份 Steering 文件，AI 在生成 API 端点时会自动遵循这些规则，帮你写出合规的代码。

### **包含模式**

Steering 文件可以配置为根据您的需求在不同时间加载：

#### **始终包含（默认）**
```yaml
---
inclusion: always
---
```
这些文件会自动加载到每次 Kiro 交互中。

#### **条件包含**
```yaml
---
inclusion: fileMatch
fileMatchPattern: 'components/**/*.tsx'
---
```
文件仅在处理匹配指定模式的文件时自动包含。

#### **手动包含**
```yaml
---
inclusion: manual
---
```
通过在聊天消息中使用 `#steering-file-name` 引用文件，按需提供文件。

---

## ⚡ **Kiro Powers — 扩展生态系统的无限可能**

### ⚡ **什么是 Kiro Powers？**

Kiro Powers 将 MCP（Model Context Protocol）、Steering 和 Hooks 打包成可重用的能力包，让你能够轻松扩展 Kiro 的功能。Powers 封装了来自开发工具提供商和领域专家的最佳实践，为设计、开发、部署和可观测性等各种用例提供智能指导。

{{% hint info %}}
Kiro Powers 功能在 Kiro IDE 0.7+ 版本中可用。
{{% /hint %}}

### 🚀 **Powers 的工作原理**

#### **1️⃣ 发现或创建 Power**
浏览来自合作伙伴或社区的精选 Powers，或者构建你自己的 Power。Powers 将 MCP、Steering 和 Hooks 打包成可重用的能力。

#### **2️⃣ 一键安装**
从网站或 IDE 中即时添加 Powers。Kiro 自动处理配置和设置，让专业能力在几秒钟内就能使用。

#### **3️⃣ 按需激活**
Powers 根据你的对话上下文动态加载。Kiro 评估已安装的 Powers 并仅激活相关的那些，保持你的 Agent 专注。

### 🛠️ **官方 Powers 生态系统**

基于 [kiro.dev/powers](https://kiro.dev/powers/) 的真实信息，当前可用的 Powers 包括：

#### **🎨 设计与前端开发**
- **Design to Code with Figma** (by Figma)：连接 Figma 设计到代码组件，自动生成设计系统规则，映射 UI 组件到 Figma 设计，保持设计与代码的一致性
- **Deploy web apps with Netlify** (by Netlify)：部署 React、Next.js、Vue 和其他现代 Web 应用到 Netlify 的全球 CDN，支持自动构建

#### **🗄️ 数据库与后端服务**
- **Build a backend with Supabase** (by Supabase)：使用 Supabase 的 Postgres 数据库、身份验证、存储和实时订阅功能构建应用
- **Build a backend (local) with Supabase** (by Supabase)：本地 Supabase 开发，让你在本地机器上的自包含环境中工作项目
- **Build a database with Neon** (by Neon)：无服务器 Postgres，支持数据库分支、自动扩缩容和零扩展，完美适配现代开发工作流程

#### **🏗️ 基础设施与部署**
- **Deploy infrastructure with Terraform** (by HashiCorp)：使用 Terraform 构建和管理基础设施即代码，访问 Registry 提供商、模块、策略和 HCP Terraform 工作流管理
- **Build infrastructure on AWS** (by Christian Bonzelet)：使用 Python 的 CDK 构建 AWS 基础设施，遵循 AWS Well-Architected 框架最佳实践
- **Deploy a distributed SQL database on AWS** (by Rolf Koski)：针对 PostgreSQL 兼容的无服务器分布式 SQL 数据库 Aurora DSQL，管理模式、执行查询并处理具有 DSQL 特定约束的迁移

#### **🔍 监控与可观测性**
- **Datadog Observability** (by Datadog)：查询 Datadog 的日志、指标、链路追踪、RUM 事件、事故和监控器，用于生产环境调试和性能分析
- **Dynatrace Observability** (by Dynatrace)：使用 DQL 查询 Dynatrace 的日志、指标、链路追踪、问题和 Kubernetes 事件，用于生产环境调试和性能分析

#### **💳 支付与商务**
- **Stripe Payments** (by Stripe)：构建 Stripe 支付集成，接受付款、管理订阅、处理账单和退款

#### **🧪 测试与 API 管理**
- **API Testing with Postman** (by Postman)：使用 Postman 自动化 API 测试和集合管理，创建工作空间、集合、环境并程序化运行测试

#### **🤖 AI 与智能体开发**
- **Build an agent with Strands** (by AWS)：使用 Strands Agent SDK 和 Bedrock、Anthropic、OpenAI、Gemini 或 Llama 模型构建 AI 智能体
- **Build an agent with Amazon Bedrock AgentCore** (by AWS)：Amazon Bedrock AgentCore 是一个用于构建、部署和操作有效智能体的代理平台

#### **🏢 企业级解决方案**
- **SaaS Builder** (by Allen Helton)：构建生产就绪的多租户 SaaS 应用，集成无服务器架构、计费系统和企业级安全

#### **🛠️ 开发者工具**
- **Build a Power** (by Kiro Team)：构建和测试新 Kiro Powers 的完整指南，包含模板、最佳实践和验证

### 🚀 **Powers 的实际使用场景**

#### **场景一：全栈开发流程**
```md
# 一个完整的项目开发流程

1. 📋 使用 Spec 模式定义需求
   "创建一个用户管理系统"

2. 🎨 连接 Figma Power 获取设计
   "从 Figma 中获取用户列表页面的设计规范"

3. 🗄️ 使用 Supabase Power 设置数据库
   "在 Supabase 中创建 users 表，包含邮箱、姓名和创建时间字段"

4. 💻 开发功能（Kiro IDE + Agent）
   "基于设计稿和数据库结构实现用户管理界面"

5. 🧪 使用 Postman Power 测试 API
   "创建用户管理 API 的测试集合"

6. 🚀 使用 Netlify Power 部署
   "将应用部署到 Netlify 生产环境"

7. 🔍 使用 Datadog Power 监控
   "查看应用的性能指标和错误日志"
```

#### **场景二：问题排查与优化**
```md
# 生产环境问题快速定位

1. 🚨 发现问题
   "用户反馈登录功能异常"

2. 🔍 Datadog Power 查询日志
   "查询过去1小时内登录相关的错误日志"

3. 📊 分析性能数据
   "获取登录 API 的响应时间和错误率趋势"

4. 🗄️ Supabase Power 检查数据
   "检查用户表中的数据完整性"

5. 🔧 修复并测试
   "修复问题后使用 Postman Power 验证功能"

6. 🚀 重新部署
   "通过 Netlify Power 部署修复版本"
```

### 🔧 **如何使用 Kiro Powers**

#### **安装和配置**
```md
# 方法一：通过 Kiro Powers 市场（推荐）
1. 访问 https://kiro.dev/powers/
2. 浏览可用的 Powers
3. 点击 "Add to Kiro" 按钮一键安装

# 方法二：通过 Kiro IDE
1. 打开 Kiro IDE
2. 在 Powers 面板中浏览和安装
3. Kiro 自动处理配置和设置

# 方法三：手动配置（高级用户）
1. 编辑 .kiro/settings/mcp.json 文件
2. 添加 Power 的配置信息
3. 重启 Kiro 或重新连接 MCP 服务器
```

#### **在对话中使用 Powers**
```md
# Powers 会根据对话上下文自动激活

"帮我设计一个登录页面" → 自动激活 Figma Power

"创建一个新的数据表" → 自动激活 Supabase Power

"查询生产环境的错误日志" → 自动激活 Datadog Power

"部署当前项目" → 自动激活 Netlify Power
```

### 🌟 **Powers 的独特优势**

#### **🎯 智能激活**
- Powers 根据对话上下文动态加载
- 只激活相关的 Powers，保持 Agent 专注
- 无需手动选择或切换工具

#### **📦 封装最佳实践**
- 来自工具提供商和领域专家的最佳实践
- 标准化的工作流程和配置
- 减少学习成本和配置复杂度

#### **🔌 无缝集成**
- 基于 MCP 协议的标准化集成
- 一键安装，自动配置
- 与 Kiro 的 Steering 和 Hooks 系统深度集成

#### **🌍 开放生态**
- 支持社区贡献的 Powers
- 企业可以创建内部专用 Powers
- 持续增长的 Powers 生态系统

### 🎯 **开发者生态**

#### **创建自定义 Power**
如果现有的 Powers 不满足需求，你可以：

1. **使用 "Build a Power" Power**：Kiro 团队提供的完整指南，包含模板、最佳实践和验证工具

2. **基于 MCP 协议开发**：
   - 遵循 Model Context Protocol 标准
   - 使用 TypeScript、Python、Go 等语言
   - 将 MCP、Steering 和 Hooks 打包成可重用的能力

3. **贡献到社区**：
   - 提交到 [Kiro Powers 提交页面](https://kiro.dev/powers/submit/)
   - 与全球开发者分享你的创新
   - 帮助扩展 Kiro 生态系统

#### **企业级定制**
企业可以创建内部专用的 Powers：
- 连接内部 API 和服务
- 集成企业级安全和合规要求
- 定制化的工作流程和审批机制
- 与现有 DevOps 工具链无缝对接

{{% hint info %}}
想要了解更多 Powers 或提交你自己的 Power？访问 [kiro.dev/powers](https://kiro.dev/powers/) 或查看 [Powers 提交页面](https://kiro.dev/powers/submit/)。
{{% /hint %}}

---

## 🎊 **总结**

这四大特色功能让 Kiro 成为真正的智能开发平台：

- **Spec 模式**：从模糊需求到清晰实现的结构化开发
- **Agent Hooks**：自动化重复工作，提升开发效率  
- **Steering**：让 AI 深度理解项目，提供精准建议
- **Kiro Powers**：连接整个开发生态系统，实现无缝的工具集成

掌握了这些功能，你就能充分发挥 Kiro 的强大能力，享受前所未有的开发体验！🚀