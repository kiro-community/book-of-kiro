---
title: "社群實踐"
weight: 50
---

# **最佳實踐與社群經驗**

## **實踐使用示例**

### **專案初期設定的完美流程**

```BASH
# 1. 在專案目錄開啟 Kiro
cd my-awesome-project
kiro .

# 2. 自動生成基礎 Steering 檔案
開啟 Kiro 面板 → 選擇 "Generate Steering Docs"
# 會自動生成 product.md、tech.md、structure.md

# 3. 新增專案特有的配置
cat > .kiro/steering/conventions.md << 'EOF'
# 開發規範

## 提交資訊規範
- feat: 新功能
- fix: Bug 修復
- docs: 文件變更
- style: 程式碼格式調整
- refactor: 重構
- test: 測試相關
- chore: 其他雜項

## 分支策略
- main: 生產環境
- develop: 開發環境
- feature/*: 新功能開發
- hotfix/*: 緊急修復

## 程式碼審查標準
- 測試透過
- 覆蓋率 80% 以上
- 無 ESLint 錯誤
- 文件已更新
EOF

# 4. 設定必備 Hooks
# 儲存時自動格式化
Hooks → + → 選擇 "儲存檔案時自動執行 ESLint 和 Prettier"

# 提交前安全掃描
Hooks → + → 選擇 "git commit 前掃描敏感資訊"

# 5. 配置 MCP 伺服器
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

# 6. 設定團隊共享的 .gitignore
cat >> .gitignore << 'EOF'
# Kiro 配置檔案
.kiro/settings.json
.kiro/cache/
.kiro/logs/

# 但以下內容需要共享
!.kiro/steering/
!.kiro/hooks/
!.kiro/specs/
EOF

```

### **🎊 總結 - Kiro 改變開發方式**

#### **用 Kiro 開始後帶來的變化**

1. 編碼速度提升 3 倍

- 透過 Spec 整理需求 → AI 自動實作
- 複雜工作由 Hooks 自動完成
- 利用 MCP 減少查資料時間

2. 質量顯著提升

- 統一編碼風格
- 自動生成測試
- 自動安全檢查

3. 學習曲線更平緩

- AI 支援不熟悉的技術
- 自然掌握最佳實踐
- 現場學習錯誤解決方案

#### **3 個簡單步驟立刻開始體驗**

```BASH
# 第一步：安裝（5分鐘）
從 https://kiro.dev 下載並安裝

# 第二步：開啟第一個專案（10分鐘）
開啟現有專案，生成 Steering 檔案

# 第三步：與 AI 對話（無限可能）
"幫我提出改進這個專案的建議"
```

---

## **社群實踐參考**

本文內容引用自[官方 Discord 社群](https://discord.gg/kirodotdev)中的 [best practice 頻道](https://discord.com/channels/1374034175430230016/1395754118378815558)與[飛書社群](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=813p0c86-3a7d-45b1-82a3-bc02f743369d)中的討論

## **kiro-best-practices 儲存庫**

> https://discord.com/channels/1374034175430230016/1403471693921521704/1403471693921521704

[kiro-best-practices](https://github.com/awsdataarchitect/kiro-best-practices)，包括以下內容：

- 🎯 11 個 Steering 文件 - 用經過驗證的標準指導每次 AI 互動
- 🔄 17 個自動化鉤子 - 在檔案儲存時自動執行的質量檢查
- ⚙️ 零配置 - 對 TypeScript、Python、AWS CDK、Docker 等開箱即用

主要特點：

- 儲存時自動測試，資訊簡明
- 自動程式碼檢查和格式化
- 依賴項的安全掃描
- CDK 基礎設施驗證
- 生成規範的提交資訊
- MCP 伺服器整合和測試

## **Steering Docs**

以下是社群提供的參考 Steering Docs 和技巧

### **中文回覆**

預設情況下 Kiro 的回覆以及生成的各種文件都是英文的。可以透過建立全域性 Steering 文件的方式讓 Kiro 預設使用中文回覆。具體方法：

1. 展開左側 Kiro 面板
2. 點選 Agent Steering 面板的加號
3. 選擇 Global Agent Steering，也就是全域性 Steering 文件
4. 清空預設的檔案內容後，輸入以下內容

```md
使用中文回覆，使用中文編寫程式碼註釋
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

您可以參考下面的命令列表，將其新增到 Kiro 的 `settings.json` 中。

**請先稽核以下列表，並充分了解信任這些命令可能帶來的風險**

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

## **其他資源**

- [Top 8 Tips When Working With Kiro](https://kiro.hashnode.dev/top-8-tips-when-working-with-kiro)
- [code2prompt](https://github.com/mufeedvh/code2prompt)
