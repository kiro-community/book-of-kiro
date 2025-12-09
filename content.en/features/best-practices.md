---
title: "Community Best Practices"
weight: 80
---

# **Community Best Practices**

This content is referenced from discussions in the [official Discord community](https://discord.gg/kirodotdev)'s [best practice channel](https://discord.com/channels/1374034175430230016/1395754118378815558) and the [Feishu community](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=813p0c86-3a7d-45b1-82a3-bc02f743369d)

## **kiro-best-practices Repository**

> https://discord.com/channels/1374034175430230016/1403471693921521704/1403471693921521704

[kiro-best-practices](https://github.com/awsdataarchitect/kiro-best-practices), includes the following:

- 🎯 11 Steering documents - Guide every AI interaction with proven standards
- 🔄 17 automated hooks - Quality checks that run automatically on file save
- ⚙️ Zero configuration - Works out of the box for TypeScript, Python, AWS CDK, Docker, etc.

Main features:

- Automatic testing on save with concise information
- Automatic code checking and formatting
- Security scanning for dependencies
- CDK infrastructure validation
- Generate standardized commit messages
- MCP server integration and testing

## **Steering Docs**

Here are reference Steering Docs and tips provided by the community

### **Chinese Responses**

By default, Kiro's responses and generated documents are in English. You can make Kiro respond in Chinese by default by creating a global Steering document. Steps:

1. Expand the Kiro panel on the left
2. Click the plus sign in the Agent Steering panel
3. Select Global Agent Steering
4. Clear the default file content and enter the following:

```md
使用中文回复,使用中文编写代码注释
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

## **Configure Trusted Commands List**

> https://discord.com/channels/1374034175430230016/1414915797423226910/1414915797423226910

You can refer to the command list below and add it to Kiro's `settings.json`.

**Please review the following list first and fully understand the risks of trusting these commands**

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

## **Other Resources**

- [Top 8 Tips When Working With Kiro](https://kiro.hashnode.dev/top-8-tips-when-working-with-kiro)
- [code2prompt](https://github.com/mufeedvh/code2prompt)
