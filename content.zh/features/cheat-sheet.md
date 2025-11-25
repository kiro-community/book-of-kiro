---
title: "Kiro 完整 Cheat Sheet"
weight: 20
---

# **Kiro 完整 Cheat Sheet**

## ⌨️ **键盘快捷键完全掌握指南**

### 🎯 **必记！超实用的 Kiro 快捷键 TOP10**

只要先记住这几个，基本上你就能用好 Kiro 的 80% 功能了：

| 想做的事                            | Mac 快捷键           | Windows / Linux 快捷键 | 会发生什么？                           |
| ----------------------------------- | -------------------- | ---------------------- | -------------------------------------- |
| 和 AI 对话 / 把选中的代码添加到聊天 | Cmd + L              | Ctrl + L               | 打开聊天面板，开始和 AI 对话           |
| 选中代码精准编辑                    | Cmd + I              | Ctrl + I               | 在光标处启动 AI，可以边写代码边提问    |
| 命令面板                            | Cmd + Shift + P      | Ctrl + Shift + P       | 打开命令面板，访问 Kiro 所有功能       |
| 打开文件                            | Cmd + P              | Ctrl + P               | 输入文件名的一部分就能快速打开         |
| 保存文件                            | Cmd + S              | Ctrl + S               | 老朋友了，必须记                       |
| 项目内搜索                          | Cmd + Shift + F      | Ctrl + Shift + F       | 在整个项目里搜索文本内容               |
| 跳转到定义                          | F12                  | F12                    | 一键跳转到函数或类的定义处             |
| 修复错误                            | 悬停错误 → Quick fix | 相同                   | AI 会自动给出修复建议                  |
| 打开终端                            | Ctrl + （反引号 \`） | Ctrl + （反引号 \`）   | 显示或隐藏集成终端                     |
| 显示/隐藏侧边栏                     | Cmd + B              | Ctrl + B               | 显示或隐藏侧边栏，适合想全屏操作时使用 |

### **💡 实用又方便的小技巧快捷键**

```bash
# 多光标编辑（学会它效率翻 3 倍）
Option + 点击（Mac）/ Alt + 点击（Windows）
→ 可以在多个位置同时出现光标，同时编辑多个地方

# 移动整行代码（超级实用的小技巧）
Option + ↑/↓（Mac）/ Alt + ↑/↓（Windows）
→ 整行代码上下移动，排版修改超方便

# 复制整行（写测试数据时超好用）
Option + Shift + ↑/↓（Mac）/ Alt + Shift + ↑/↓（Windows）
→ 直接复制当前行并插入上下位置

# 快速注释（最常用，没有之一）
Cmd + /（Mac）/ Ctrl + /（Windows）
→ 选中代码一键注释/取消注释，调试神技！ README 写得更完整一些"

```

## 📋 **Specs（规范驱动开发）— 这才是 Kiro 的灵魂功能！**

### ❓ **什么是 Specs？为什么它这么重要？**

传统开发是不是经常是这种节奏：

- “先帮我做个登录功能吧” —— 要求模模糊糊
- 好吧，先写着再说
- “啊对了，还要加密码重置”
- “邮件认证也别忘了加一下”
- 最后代码一团糟、文档跟不上、需求越改越乱……

😵‍💫 完全失控。
而 **Specs**，就是来解决这个老问题的！<br>
它会让 AI 帮你**整理模糊需求**，变成一份结构清晰、条理清楚的**规范文档**。<br>
——不再边写边猜、不再回头大改，你的项目，从一开始就走在正轨上。✅<br>

### **🛠️ Spec 的三大阶段（这真的很革命 🔥）**

1️⃣ Requirements（需求）阶段 —— 明确“要做什么”

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
  - “登录”按钮
  - “忘记密码”链接

When: 用户输入正确的认证信息并点击登录按钮时
The system shall: 将用户重定向到仪表板页面
And: 生成 JWT 令牌并启动会话

When: 用户输入了错误的认证信息时
The system shall: 显示错误信息
But: 出于安全考虑，不显示具体错误原因
```

是不是很惊人？仅仅一句“写个登录功能”，它就能把需求细化到如此详细的程度，真是超神奇！<br>

2️⃣ **Design（设计）阶段** —— 规划「怎么实现」

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

3️⃣ **Implementation（实现）阶段** —— 拆解成具体开发任务

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

### 📋 **Specs 的实际用法是怎样的？**

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

## **Agent Hooks —— 自动化那些繁琐操作的魔法！**

### 🤖 **什么是 Agent Hooks？什么时候该用它？**

写代码的时候，你有没有过这样的心声：<br>

- “每次保存文件都要手动跑 ESLint，好麻烦……”<br>
- “新建组件还得自己加测试文件，太懒得动手了……”<br>
- “import 一堆，每次都要手动整理，真心累……”<br>
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

#### 4️⃣ **面向全球的项目福音：「多语言翻译同步 Hook」**

```yaml
# 名称：i18n-sync
# 说明：保持各语言翻译文件的内容同步

Trigger: File Save
Target: "src/locales/ja/*.json"
Instructions: |
  当日语语言文件被更新时，执行以下操作：

  1. 检测变更内容  
     - 新增的 key  
     - 被修改的 key  
     - 被删除的 key  

  2. 检查其他语言文件  
     - src/locales/en/*.json（英文）  
     - src/locales/zh/*.json（中文）  
     - 其他支持语言  

  3. 执行同步操作  
     - 对新增的 key，添加内容为 "TODO: 需要翻译"  
     - 对修改的 key，添加前缀 "REVIEW: 需要全文翻译内容"  
     - 被删除的 key，从其他语言文件中一并删除  

  4. 生成翻译状态报告  
     - 列出所有待翻译项  
     - 显示各语言的翻译完成度  
     - 输出到 translation-status.md 文件中
```

在做多语言项目时，语言文件的同步是不是总是让人头大？  
这些琐碎的小事，现在通通交给 Hook 自动化搞定！再也不用手动对照、一个个更新了～ 🌍⚙️🎉

#### 5️⃣ **测试驱动开发者的福音：「自动生成测试的 Hook」**

```yaml
# 名称：test-generator
# 说明：在实现文件修改时自动更新或生成对应的测试文件

Trigger: File Save
Target: "src/**/*.{ts,tsx}"
Exclude: "**/*.test.*"
Instructions: |
  当保存实现文件时，自动执行以下操作：

  1. 分析变更内容  
     - 新增的函数  
     - 修改后的函数签名  
     - 新增的类  

  2. 检查对应的测试文件  
     - 如果不存在，则自动创建  
     - 命名格式为：文件名.test.ts(x)  

  3. 生成或更新测试用例  
     - 正常流程（happy path）测试  
     - 异常处理测试  
     - 边界条件（edge case）测试  
     - 如需 mock，会自动合理配置  

  4. 检查测试覆盖率  
     - 确保新代码已被测试覆盖  
     - 避免整体覆盖率下降  
     - 目标保持在 80% 以上  

  5. 执行测试  
     - 验证自动生成的测试是否通过  
     - 如有失败，提供修复建议
```

想实践 TDD（测试驱动开发），却总觉得写测试太麻烦？  
这个 Hook 简直就是为你量身打造的！💡  
自动补上测试，让你专注写逻辑，测试覆盖率稳稳在线 🧪✅

### 🛠️ **Hook 设置的实用技巧**

```md
# 如何创建 Hook

1. 打开 Kiro 面板 → Agent Hooks → 点击「+」按钮
2. 用自然语言输入你想要实现的功能描述
3. Kiro 会自动生成配置 → 你确认后保存即可 🎉

# 设计高效 Hook 的小技巧

- 一个 Hook 只做一件事（遵循单一职责原则）
- 文件匹配规则要尽量具体（避免使用 "\*_/_" 这种全局匹配）
- 注意执行频率（每次保存触发可能会带来性能压力）
- 在指令中加入错误处理逻辑，增强稳定性

# 启用 / 禁用 Hook 的方法

- 点击 👁️ 图标即可切换 ON / OFF 状态
- 想临时停用某个 Hook 的时候非常方便
```

## 🎯 **Steering —— 把项目知识“教”给 AI 的秘密武器！**

### 🎯 **什么是 Steering？为什么它这么重要？**

你有没有在加入新项目时遇到过这些状况：

- “这个项目的代码规范是怎样的？”
- “用的库都是什么版本？”
- “目录结构有什么约定？”
- “命名规则用 camelCase 还是 snake_case？”<br>

通常这些信息都需要每次亲自讲解、手动说明……<br>
但只要用了 **Steering**，AI 就能一开始就**了解整个项目的背景和规则！**

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

有了这个文件，AI 就能真正理解“这个项目的目标是什么”，从而做出更加贴合实际、符合方向的智能建议。🎯🤖

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
不再问你“用的是什么框架”，建议也会更贴合实际，直接对上点子上！

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
fileMatchPattern: "app/api/\*_/_"

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

### **错误代码体系（Error Code System）**

| 错误代码         | HTTP 状态码 | 说明           |
| ---------------- | ----------- | -------------- |
| VALIDATION_ERROR | 400         | 输入值验证错误 |
| UNAUTHORIZED     | 401         | 认证错误       |
| FORBIDDEN        | 403         | 权限错误       |
| NOT_FOUND        | 404         | 找不到资源     |
| CONFLICT         | 409         | 资源冲突       |
| RATE_LIMIT       | 429         | 速率限制       |
| INTERNAL_ERROR   | 500         | 服务器内部错误 |

### **认证与授权（Authentication & Authorization）**

#### **认证请求头（Authentication Headers）**

```
Authorization: Bearer <jwt-token>
```

#### **JWT 载荷（Payload）**

```JSON
{
  "sub": "user-id",
  "email": "user@example.com",
  "roles": ["user", "admin"],
  "iat": 1234567890,
  "exp": 1234567890
}

```

### **分页（Pagination）**

#### **请求（Request）**

```
GET /api/products?page=1&limit=20&sort=createdAt:desc
```

#### **响应（Response）**

```JSON
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5,
    "hasNext": true,
    "hasPrev": false
  }
}
```

#### **校验（Validation）**

必须使用 Zod 对请求体进行校验：

```js
const createProductSchema = z.object({
  name: z.string().min(1).max(100),
  price: z.number().positive(),
  description: z.string().optional(),
  categoryId: z.string().uuid(),
});
```
````

有了这份 Steering 文件，AI 在生成 API 端点时会自动遵循这些规则，帮你写出合规的代码。

#### **定义测试策略示例**

````md
# .kiro/steering/testing-strategy.md

---

inclusion: fileMatch
fileMatchPattern: "\*_/_.test.{ts,tsx}"

---

# 测试策略

## 测试类型与目标

### 单元测试

- 覆盖率目标：80%以上
- 对象：纯函数、自定义 Hook、工具函数
- 工具：Jest

### 集成测试

- 对象：API 端点、数据库操作
- 工具：Jest + Supertest
- 数据库：测试用 Docker 容器

### 端到端测试

- 对象：主要用户流程
- 工具：Playwright
- 执行环境：CI/CD 流水线

## 测试写法

### 测试文件放置

src/
├── components/
│ ├── Button.tsx
│ └── Button.test.tsx # 与组件放在同目录

### 测试结构（AAA 原则）

```typescript
describe("功能名", () => {
  it("期望行为", () => {
    // Arrange（准备）
    const input = "test";

    // Act（执行）
    const result = functionToTest(input);

    // Assert（断言）
    expect(result).toBe("expected");
  });
});
```
````

### **Steering 文件的高效使用方法**

```md
# 包含模式的使用区分

# 1. always（始终包含）

# 影响整个项目的配置

- 编码规范
- 安全策略
- 基本设计原则

# 2. fileMatch（条件匹配）

# 仅对特定文件类型生效

- API 端点规则 → "app/api/\*_/_"
- React 组件规范 → "\*_/_.tsx"
- 测试写法 → "\*_/_.test.\*"

# 3. manual（手动模式）

# 偶尔才用的信息

- 故障排查指南
- 性能优化方法
- 复杂部署流程
```

### **如何设置全局 Steering 文档**

Kiro v0.5.0 支持了全局 Steering 文档，只需要在 Steering 面板中点击加号，创建全局 Steering 文档即可。

全局 Steering 文档会被保存在 `~/.kiro/steering/` 目录下

### **AGENTS.md**

从 v0.5.0 开始，Kiro 默认会把 [AGENTS.md](https://agents.md/) 加入到 Steering 中

## **实践使用示例与最佳实践**

### **项目初期设置的完美流程**

```BASH
# 1. 在项目目录打开 Kiro
cd my-awesome-project
kiro .

# 2. 自动生成基础 Steering 文件
打开 Kiro 面板 → 选择 "Generate Steering Docs"
# 会自动生成 product.md、tech.md、structure.md

# 3. 添加项目特有的配置
cat > .kiro/steering/conventions.md << 'EOF'
# 开发规范

## 提交信息规范
- feat: 新功能
- fix: Bug 修复
- docs: 文档变更
- style: 代码格式调整
- refactor: 重构
- test: 测试相关
- chore: 其他杂项

## 分支策略
- main: 生产环境
- develop: 开发环境
- feature/*: 新功能开发
- hotfix/*: 紧急修复

## 代码审查标准
- 测试通过
- 覆盖率 80% 以上
- 无 ESLint 错误
- 文档已更新
EOF

# 4. 设置必备 Hooks
# 保存时自动格式化
Hooks → + → 选择 "保存文件时自动执行 ESLint 和 Prettier"

# 提交前安全扫描
Hooks → + → 选择 "git commit 前扫描敏感信息"

# 5. 配置 MCP 服务器
cat > .kiro/settings/mcp.json << 'EOF'
{
  "mcpServers": {
    "web-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-bravesearch"],
      "env": {
        "BRAVE_API_KEY": "${BRAVE_API_KEY}"
      }
    }
  }
}
EOF

# 6. 设置团队共享的 .gitignore
cat >> .gitignore << 'EOF'
# Kiro 配置文件
.kiro/settings.json
.kiro/cache/
.kiro/logs/

# 但以下内容需要共享
!.kiro/steering/
!.kiro/hooks/
!.kiro/specs/
EOF

```

### **从零开始构建全栈应用**

````md
# 1. 从创建项目开始

```sh
mkdir my-saas-app && cd my-saas-app
kiro .
```

# 2. 将需求转化为 Spec

按 Cmd/Ctrl+L 打开聊天，输入：

```md
"SaaS 应用开发需求。

功能：

- 用户认证（邮箱/密码、Google OAuth）
- 订阅管理（Stripe）
- 仪表盘
- API（REST + GraphQL）

技术栈：

- Next.js 14（App Router）
- TypeScript
- Prisma + PostgreSQL
- TailwindCSS"
```

# 3. 执行 Spec

从上到下执行生成的任务
点击每个任务，AI 会帮你实现

# 4. 启动开发服务器

```bash
npm install
npm run dev
```

# 5. 通过 Spec 添加新功能

"我要添加邮件通知功能。

- 用户注册时发送欢迎邮件
- 密码重置邮件
- 账单发送
  使用 SendGrid 服务"
````

### **传统代码现代化**

````md
# 将 jQuery 时代的代码迁移到 React 的示例

# 1. 现状分析

"请分析 @src/legacy/ 目录下的代码，
制定迁移到 React 的计划"

# 2. 制定分阶段迁移的 Spec

"传统代码分阶段迁移计划：
Phase 1: 迁移共通组件
Phase 2: 按页面单元迁移
Phase 3: 状态管理整合
Phase 4: 路由迁移"

# 3. 自动转换 Hook 设置

```yml
Trigger: Manual
Name: "jQuery to React Converter"
Instructions: |
  分析选中的 jQuery 代码：
  1. 生成等效的 React 组件
  2. 将事件处理器转换为 React 事件
  3. 将 DOM 操作转换为 state/props
  4. 将动画转换为 CSS 或 Framer Motion
```

# 4. 添加测试

"@src/components/
为所有组件添加测试。
使用 React Testing Library，
测试用户交互"
````

### **构建 CI/CD 流水线**

````md
# 与 AI 一起创建 GitHub Actions 配置

# 1. 创建基础工作流

创建 `.github/workflows/ci.yml`，在推送时执行：

- 代码检查（ESLint、TypeScript）
- 运行测试
- 验证构建
- 生成覆盖率报告

# 2. 部署工作流

创建 `.github/workflows/deploy.yml`，在合并到 main 分支时执行：

- 构建项目
- 部署到 Vercel
- 发送 Slack 通知

# 3. 监控工作流的 Hook

```yml
Trigger: File Save
Target: ".github/workflows/*.yml"
Instructions: |
  审查 GitHub Actions 配置：
  1. 语法错误检查
  2. 检查 Secret 的正确使用
  3. 优化并行执行建议
  4. 提议缓存使用
```
````

### **性能优化**

````md
# 1. 现状分析

"请分析 @src/ 目录下项目的性能瓶颈"

# 2. 优化 Spec 制定

"性能优化任务：

- 使用 React.memo 防止重复渲染
- 图片优化与懒加载
- 减少打包体积
- 优化数据库查询"

# 3. 自动优化 Hook

```yml
Trigger: File Save
Target: "src/components/**/*.tsx"
Instructions: |
  进行性能分析：
  1. 检测不必要的重复渲染
  2. 提议使用 useCallback 和 useMemo
  3. 检测高开销计算并提出优化方案
  4. 建议使用动态 import
```

# 4. 监控设置

"在 Datadog 中配置性能监控，
追踪 Core Web Vitals 指标"
````

## 🎊 **总结 - Kiro 改变开发方式**

### **用 Kiro 开始后带来的变化**

1. 编码速度提升 3 倍

- 通过 Spec 整理需求 → AI 自动实现
- 复杂工作由 Hooks 自动完成
- 利用 MCP 减少查资料时间

2. 质量显著提升

- 统一编码风格
- 自动生成测试
- 自动安全检查

3. 学习曲线更平缓

- AI 支持不熟悉的技术
- 自然掌握最佳实践
- 现场学习错误解决方案

### **3 个简单步骤立刻开始体验**

```BASH
# 第一步：安装（5分钟）
从 https://kiro.dev 下载并安装

# 第二步：打开第一个项目（10分钟）
打开现有项目，生成 Steering 文件

# 第三步：与 AI 对话（无限可能）
“帮我提出改进这个项目的建议”
```
