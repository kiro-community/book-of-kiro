---
title: "开始使用"
weight: 21
---

# **开始使用 Kiro IDE**

## 🚀 **快速上手 - 5 分钟启动 Kiro IDE！**

### **最速安装指南（真的只要 5 分钟）**

首先，我们来安装 Kiro IDE。不过别紧张，和安装普通 App 一样简单！<br>

{{% hint info %}}

1. 下载 Kiro IDE
   访问 https://kiro.dev/downloads 下载适合您系统的版本<br>

2. 安装 IDE
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

1. 点击 "Sign in with GitHub"
2. 浏览器会自动跳转，登录你的 GitHub
3. 点击 "Authorize kirodotdev" 授权
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

1. 点击 "Sign in with Google"
2. 选择你的 Google 账号
3. 点击 "Continue" 完成授权
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

1. 点击 "Login with AWS Builder ID"
2. 输入你的邮箱地址
3. 设置登录密码
4. 完成邮箱验证，就可以开始用了 ✅
   {{% /hint %}}

### **方式 4：AWS IAM Identity Center（适合企业用户，推荐指数：★★★★★）**

{{% hint info %}}

<span style="color:red;"> 适合这些人</span>

- 想在公司内部正式部署 Kiro
- 对安全性有严格要求的企业环境

<span style="color:red;"> 注意事项</span>

- 需要有 [Kiro 企业级订阅](https://kiro.dev/enterprise/) 或 Amazon Q Developer Pro 的付费订阅
- 需要公司 IT 部门协助进行配置
- 不适合个人用户使用

<span style="color:red;"> 使用步骤</span>

1. 选择 "Sign in with AWS IAM Identity Center"
2. 输入 Start URL，例如：https://your-company.awsapps.com/start，请联系您的管理员获取
3. 选择 Region（区域）：请联系您的管理员获取
4. 联系公司 IT 部门完成相关设置
   {{% /hint %}}

## 🤖 **Agent 自主性设置 - Autopilot vs Supervised 模式**

在开始使用 Kiro 之前，了解并选择合适的 Agent 模式非常重要。这决定了 AI 在您的项目中的工作方式。

### **Autopilot 模式（默认推荐）**

{{% hint info %}}
**适合人群：**
- 重视开发速度的开发者
- 信任 AI 判断能力
- 在本地开发环境工作
- 想要高效自动化体验

**工作机制：**
- 自动执行文件的创建、编辑和删除
- 自动执行命令（仅限受信任列表内）
- 随时可以通过 "Stop" 命令中断操作

**使用示例：**
```
"帮我实现用户认证功能"
→ AI 自动创建所有必要文件并完成实现
```
{{% /hint %}}

### **Supervised 模式（谨慎控制）**

{{% hint warning %}}
**适合人群：**
- 在生产环境中工作
- 处理重要项目
- 希望仔细确认 AI 的每个操作

**工作机制：**
- 每个操作前都会弹出确认对话框
- "确定要创建这个文件吗？"
- "确定要执行这个命令吗？"

**切换方法：**
在聊天界面找到 "Autopilot" 开关，切换为关闭（OFF）状态
{{% /hint %}}

## 🔒 **受信任命令管理**

为了安全起见，Kiro 只会自动执行预先定义的安全命令。您可以根据需要自定义这个列表。

### **默认安全命令**

以下只读命令会被自动执行：

```bash
ls      # 列出目录内容
cat     # 显示文件内容
echo    # 输出字符串
pwd     # 显示当前目录
which   # 查找命令路径
head    # 查看文件开头部分
tail    # 查看文件结尾部分
find    # 文件搜索
grep    # 字符串搜索
```

### **自定义受信任命令**

您可以在设置中添加项目常用的安全命令：

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
**绝对不要添加这些危险命令：**

```bash
rm -rf      # 删除文件/目录
sudo        # 超级用户权限
chmod 777   # 修改文件权限
curl | sh   # 下载并执行脚本
eval        # 执行动态代码
```

如果您真的需要允许所有命令执行，可以添加 `*` 来信任所有命令。**请充分了解这可能带来的安全风险！**
{{% /hint %}}

## **下一步**

现在您已经成功安装并配置了 Kiro IDE，可以继续探索：

- **[插件管理](extensions.md)** - 扩展 IDE 功能
- **[安全设置](security.md)** - 数据隐私和遥测设置
- **[故障排查](troubleshooting.md)** - 解决常见问题