---
title: "社区实践参考"
weight: 80
---

# **社区实践参考**

本文内容引用自[官方 Discord 社区](https://discord.gg/kirodotdev)中的 [best practice 频道](https://discord.com/channels/1374034175430230016/1395754118378815558)

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

### **AGENTS.md**

可以使用文件引用语法，把 [AGENTS.md](https://agents.md) 纳入 steering docs:

```md
#[[file:AGENTS.md]]
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
