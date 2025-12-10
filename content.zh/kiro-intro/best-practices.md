---
title: "社区实践"
weight: 50
---

# **最佳实践与社区经验**

## **实践使用示例**

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

### **🎊 总结 - Kiro 改变开发方式**

#### **用 Kiro 开始后带来的变化**

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

#### **3 个简单步骤立刻开始体验**

```BASH
# 第一步：安装（5分钟）
从 https://kiro.dev 下载并安装

# 第二步：打开第一个项目（10分钟）
打开现有项目，生成 Steering 文件

# 第三步：与 AI 对话（无限可能）
"帮我提出改进这个项目的建议"
```

---

## **社区实践参考**

本文内容引用自[官方 Discord 社区](https://discord.gg/kirodotdev)中的 [best practice 频道](https://discord.com/channels/1374034175430230016/1395754118378815558)与[飞书社区](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=813p0c86-3a7d-45b1-82a3-bc02f743369d)中的讨论

## **kiro-best-practices 仓库**

> https://discord.com/channels/1374034175430230016/1403471693921521704/1403471693921521704

[kiro-best-practices](https://github.com/awsdataarchitect/kiro-best-practices)，包括以下内容：

- 🎯 11 个 Steering 文档 - 用经过验证的标准指导每次 AI 交互
- 🔄 17 个自动化钩子 - 在文件保存时自动运行的质量检查
- ⚙️ 零配置 - 对 TypeScript、Python、AWS CDK、Docker 等开箱即用

主要特点：

- 保存时自动测试，信息简明
- 自动代码检查和格式化
- 依赖项的安全扫描
- CDK 基础设施验证
- 生成规范的提交信息
- MCP 服务器集成和测试

## **Steering Docs**

以下是社区提供的参考 Steering Docs 和技巧

### **中文回复**

默认情况下 Kiro 的回复以及生成的各种文档都是英文的。可以通过创建全局 Steering 文档的方式让 Kiro 默认使用中文回复。具体方法：

1. 展开左侧 Kiro 面板
2. 点击 Agent Steering 面板的加号
3. 选择 Global Agent Steering，也就是全局 Steering 文档
4. 清空默认的文件内容后，输入以下内容

```md
使用中文回复，使用中文编写代码注释
```

### **No Assumptions Policy**

> https://discord.com/channels/1374034175430230016/1395755480403673119/1401817464811032677

```md
# No Assumptions Policy - MANDATORY

## NEVER MAKE ASSUMPTIONS - STATE FACTS AND ASK

**This rule enforces the product constraint: "Avoid LLM hallucinations or assumptions"**

### REQUIRED BEHAVIOR:

When encountering missing dependencies, tools, or configuration:

❌ **DON'T DO:**

- Assume user preferences ("you might not want X because...")
- Dismiss issues as "expected"
- Make judgments about what user needs
- Skip mentioning installation options

✅ **DO THIS:**

- State the objective fact: "X is not installed"
- Provide the exact command: "Run: `command here`"
- Ask directly: "Would you like me to install X?"
- Let user decide

### EXAMPLES:

❌ **Bad (assumption):**
"Microsoft Edge isn't installed, but that's expected since it's similar to Chrome"

✅ **Good (facts + ask):**
"Microsoft Edge is not installed. To install it, run: `npx playwright install msedge`. Would you like me to install it?"

### WHY THIS MATTERS:

- Respects user autonomy
- Prevents missed opportunities
- Maintains transparency
- Follows product constraints
- Avoids LLM hallucinations

### CONTEXT FRAMEWORK - ALWAYS APPLY:

Before responding to ANY technical issue, ask yourself:

1. **What are we working on?** (Project/task context)
2. **Why does this issue matter?** (Impact on the goal)
3. **What can't be done without fixing it?** (Consequences)
4. **What's the solution?** (Clear action needed)

### RESPONSE TEMPLATE:

"For [PROJECT/TASK], [ISSUE] is preventing [SPECIFIC IMPACT]. To fix this, run: `command`. Would you like me to [ACTION]?"

## ADDITIONAL SCENARIOS - MANDATORY

### 1. MISSING FILE OR PATH ERRORS:

❌ **Bad (assumption):**
"config.json might not be necessary depending on your setup..."

✅ **Good (facts + ask):**
"config.json was not found in the working directory. To generate it, run: `npx create-config`. Should I create it for you?"

### 2. UNKNOWN USER INTENTS OR TOOLS:

❌ **Bad (assumption):**
"I'll assume you're using React since it's common..."

✅ **Good (clarify first):**
"You mentioned a UI component, but the framework isn't specified. Are you using React, Vue, or something else?"

### 3. AMBIGUITY HANDLING:

**RULE:** If project/task context is ambiguous, always ask for clarification before continuing with code or instructions.

### 4. NO SILENT FALLBACKS:

**RULE:** Never fallback silently. If using a default, state it clearly and ask if acceptable.

✅ **Better approach (ask before acting):**
"No color palette was provided. I can use 'default.dark' or wait for your input. Should I proceed with 'default.dark'?"

## USER AUTONOMY PRINCIPLE

**Core Philosophy:**

- Always ask before taking action on behalf of the user
- Never mask decisions behind automation or assumptions
- Build trust by exposing defaults, limits, and fallback logic
- Give users choice and control at every decision point

**REMEMBER: Always connect technical issues to project context and user goals.**
```

### **Never Start a Dev Server Without Killing Existing Ones First**

> https://discord.com/channels/1374034175430230016/1395755480403673119/1398529034241052815

````md
# CRITICAL DEV SERVER PROTOCOL - MANDATORY

## ABSOLUTE RULE: KILL BEFORE START

**NEVER START A DEV SERVER WITHOUT KILLING EXISTING ONES FIRST**

### Required Steps (NO EXCEPTIONS):

1. **ALWAYS check for existing processes:**

   ```bash
   ps aux | grep vite
   ```

2. **ALWAYS check for background jobs:**

   ```bash
   jobs
   ```

3. **ALWAYS check what's using the port:**

   ```bash
   lsof -i :5173
   ```

4. **KILL ALL processes found:**

   ```bash
   kill -9 [PID1] [PID2] [PID3]
   ```

5. **KILL ALL background jobs:**

   ```bash
   kill %1 %2 %3
   ```

6. **VERIFY port is free:**

   ```bash
   lsof -i :5173
   ```

   (Should return nothing)

7. **ONLY THEN start dev server:**
   ```bash
   npm run dev &
   ```

## WHY THIS MATTERS:

- Prevents port conflicts
- Keeps localhost:5173 consistent
- Prevents hanging processes
- Avoids user frustration
- Essential for development workflow

## FAILURE TO FOLLOW = USER FRUSTRATION

**I MUST NEVER START A DEV SERVER WITHOUT COMPLETING ALL KILL STEPS FIRST**
````

## **配置信任的命令列表**

> https://discord.com/channels/1374034175430230016/1414915797423226910/1414915797423226910

您可以参考下面的命令列表，将其添加到 Kiro 的 `settings.json` 中。

**请先审核以下列表，并充分了解信任这些命令可能带来的风险**

```json
{
  // An extensive list of common CLI tools to pre-authorize.
  "kiroAgent.trustedCommands": [
    // --- General Shell & System ---
    "ls *",
    "dir *",
    "cd *",
    "mkdir *",
    "rm *",
    "rmdir *",
    "cp *",
    "copy *",
    "mv *",
    "move *",
    "echo *",
    "clear",
    "cls",
    "grep *",
    "find *",
    "ssh *",
    "\"C:\\Program *", // Trusts executables in Program Files paths

    // --- Git & Version Control ---
    "git *",

    // --- Package Managers ---
    "choco *",
    "scoop *",
    "winget *",
    "brew *",
    "apt *",
    "yum *",
    "pacman *",

    // --- DevOps, Containers & Cloud ---
    "docker *",
    "docker-compose *",
    "kubectl *",
    "helm *",
    "terraform *",
    "ansible *",
    "vagrant *",
    "aws *",
    "az *",
    "gcloud *",

    // --- Node.js / JavaScript / TypeScript Ecosystem ---
    "node *",
    "npm *",
    "npx *",
    "yarn *",
    "pnpm *",
    "bun *",
    "tsc *",
    "vite *",
    "webpack *",
    "next *",
    "eslint *",
    "prettier *",
    "jest *",
    "ng *",
    "vue *",
    "astro *",
    "svelte-kit *",
    "cypress *",

    // --- Python Ecosystem ---
    "python *",
    "python.exe *",
    "python3 *",
    "py *",
    "pip *",
    "pip3 *",
    "pipenv *",
    "poetry *",
    "uv *",
    "pytest *",
    "black *",
    "ruff *",
    "flask *",
    "django-admin *",
    "alembic *",
    "uvicorn *",

    // --- Database Clients ---
    "psql *",
    "mysql *",
    "sqlite3 *",

    // --- Go (Golang) ---
    "go *",

    // --- Rust ---
    "cargo *",
    "rustc *",

    // --- Java Ecosystem ---
    "java *",
    "javac *",
    "mvn *",
    "gradle *",

    // --- C / C++ / .NET Ecosystem ---
    "cl *",
    "gcc *",
    "g++ *",
    "make *",
    "cmake *",
    "msbuild *",
    "dotnet *",
    "nuget *",

    // --- PHP Ecosystem ---
    "php *",
    "composer *",
    "laravel *",
    "pest *",
    "phpcs *",

    // --- Ruby Ecosystem ---
    "ruby *",
    "bundle *",
    "rake *",
    "rails *"
  ]
}
```

## **其他资源**

- [Top 8 Tips When Working With Kiro](https://kiro.hashnode.dev/top-8-tips-when-working-with-kiro)
- [code2prompt](https://github.com/mufeedvh/code2prompt)
