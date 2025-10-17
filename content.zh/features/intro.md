---
title: "开始使用 Kiro"
weight: 10
---

# **开始使用 Kiro**

## 📌 **前言：Kiro 是什么？为啥最近这么火？**

Kiro 是 AWS 于 2025 年 7 月发布的划时代 AI 集成开发环境（IDE）。<br>
“哈？又一个编辑器？VSCode、Cursor 不就够用了？”——如果你也这么想，那请先别急着关掉页面。因为**Kiro 真的不是普通的编辑器。**

## 🤔 **和传统 IDE 的决定性差别**

传统 IDE 写代码这件事，100% 都是你一个人在扛。<br>
但 Kiro 不一样，它是你的 **AI 开发搭档**，能和你一起思考、提出建议、甚至动手写代码。<br>
就像有个经验超强的前辈工程师，随时在旁边和你一起 pair programming 的感觉！<br>

## ✨ **Kiro 能做什么（重点来了）**

🤖 **和 AI 对话就能写代码**：只要说一句“帮我做个登录功能”，它真的就能搞出来<br>
📋 **自动生成规格说明书**：从模糊的需求中，变出一份清清楚楚的 specs<br>
🔧 **Agent Hooks 自动化操作**：比如你一保存文件，它就能自动跑测试、格式化代码<br>
🎯 **Steering 记住项目知识点**：像“我们项目用 TypeScript 啦”这种背景，它记一次就好<br>
🔌 **MCP 支持外部工具联动**：可以和 GitHub、AWS Docs、甚至 Web 搜索整合使用<br>
🛡️ **安全的运行环境**：防止你一不小心“啊啊啊我把东西全删了”的悲剧发生<br>

## 🚀 **快速上手 - 5 分钟启动 Kiro！**

### **最速安装指南（真的只要 5 分钟）**

首先，我们来安装 Kiro。不过别紧张，和安装普通 App 一样简单！<br>

{{% hint info %}}

1. 下载
   访问 https://kiro.dev/downloads #支持 macOS、Windows 和 Linux<br>

2. 安装
   macOS：将下载的 Kiro.app 拖到 Applications 文件夹<br>
   Windows：双击下载的安装程序运行<br>
   Linux：为 AppImage 添加执行权限后启动<br>

3. 初次启动时的设置（这里超重要！）<br>
   {{% /hint %}}

#### 🔐 **登录方式选择**

- **GitHub**：如果你是个人开发者，选这个最轻松<br>
- **Google**：用 Gmail 账号一键登录<br>
- **AWS Builder ID**：没有 AWS 账号？选这个就对了（而且完全免费）
- **AWS IAM Identity Center**：适合在公司或团队环境中使用<br>

#### **⚙️ 导入 VS Code 设置**

选择「**Import VS Code Settings**」可以直接继承你现在的编辑器配置，
包括扩展插件、主题样式都能原样复用，真的很方便！

#### 💻 **启用 Shell 集成（必选项！）**

出现提示时，请一定要点击「**Allow**」！<br>
这一步能让 AI 直接运行终端命令，解锁全自动开发体验 🚀

### 📂 **来打开你的第一个项目吧！**

```bash
# 如果你喜欢用终端打开项目的话：
cd my-project
kiro .

# 或者也可以从 Kiro 的菜单栏操作：
File > Open Folder > 选择你的项目文件夹

```

打开项目后，点击左侧边栏那个 **Kiro 的幽灵图标**。这就是 Kiro 的核心区域，也是你和 AI 开始对话的地方！👻<br>

### 💬 **试着和 AI 聊聊看吧！**

```bash
# 打开聊天面板
Cmd+L（Mac） / Ctrl+L（Windows/Linux）

# 可以先试着问问这些
"解释一下这个项目的结构"
"整理一下 package.json 的依赖项"
"帮我把 README 写得更完整一些"

```

你一定会惊讶，和它对话竟然可以这么自然顺畅！💬✨

## 🔑 **认证方式完全指南 - 应该选哪种？**

### **方式 1：GitHub 登录（推荐给个人开发者，推荐指数：★★★★★）**

{{% hint info %}}

<span style="color:red;">适合谁？</span>

- 平时自己写代码的开发者
- 有在参与开源项目
- 想先简单体验一下 Kiro 的人

<span style="color:red;">优点</span>

- 设置流程最简单
- 只要有 GitHub 账号就能直接用
- 免费额度也足够大多数人用了

<span style="color:red;">使用步骤</span>

1. 点击 “Sign in with GitHub”
2. 浏览器会自动跳转，登录你的 GitHub
3. 点击 “Authorize kirodotdev” 授权
4. 完成！可以马上开始用了 ✨
   {{% /hint %}}

### **方式 2：Google 登录（适合轻度使用者，推荐指数：★★★★☆）**

{{% hint info %}}

<span style="color:red;">适合这些人</span>

- 有 Gmail，但没有 GitHub 账号
- 想用来做点个人学习
- 只想轻松快速地上手体验

<span style="color:red;">优点</span>

- 用 Google 账号就能直接登录
- 不需要额外设置
- 很适合个人日常使用

<span style="color:red;">操作步骤</span>

1. 点击 “Sign in with Google”
2. 选择你的 Google 账号
3. 点击 “Continue” 完成授权
4. 搞定！是不是超轻松？✨
   {{% /hint %}}

### **方式 3：AWS Builder ID（适合刚接触 AWS 的用户，推荐指数：★★★☆☆）**

{{% hint info %}}

<span style="color:red;"> 适合这些人</span>

- 想试试 AWS，但不太想一开始就注册正式账号
- 想免费体验一些 AWS 服务
- 将来可能会正式使用 AWS 的人

<span style="color:red;"> 优点</span>

- 不用注册完整的 AWS 账号也能用，完全免费
- 跟 AWS 的各种服务联动起来很方便
- 以后想转为企业账号，也能顺利过渡

<span style="color:red;"> 操作步骤</span>

1. 点击 “Login with AWS Builder ID”
2. 输入你的邮箱地址
3. 设置登录密码
4. 完成邮箱验证，就可以开始用了 ✅
   {{% /hint %}}

### **方式 4：AWS IAM Identity Center（适合企业用户，推荐指数：★★★★★）**

{{% hint info %}}

<span style="color:red;"> 适合这些人</span>

- 想在公司内部正式部署 Kiro
- 对安全性有严格要求的企业环境
- 已经购买了 Amazon Q Developer Pro 的团队

<span style="color:red;"> 注意事项</span>

- 需要有 Amazon Q Developer Pro 的付费订阅
- 需要公司 IT 部门协助进行配置
- 不适合个人用户使用
- 在 Kiro 企业付费推出之前，使用 Amazon Q Developer Pro 的付费订阅来使用 Kiro，只能享受 Kiro 的免费额度，无法充值提升额度

<span style="color:red;"> 使用步骤</span>

1. 选择 “Sign in with AWS IAM Identity Center”
2. 输入 Start URL，例如：https://your-company.awsapps.com/start，请联系您的管理员获取
3. 选择 Region（区域）：请联系您的管理员获取
4. 联系公司 IT 部门完成相关设置
   {{% /hint %}}

## **社区与资源**

📖 [官方文档](https://kiro.dev/docs) <br>
💬 [中文社区](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=6c4ic8c6-450f-4d54-8783-dadc42d0591d) <br>
🐙 [GitHub](https://github.com/kirodotdev)<br>

**Welcome to the future of coding with Kiro! 🚀✨** <br>
请一定要亲身体验这场改变开发常识的全新体验～ ☺️
