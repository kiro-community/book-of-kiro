---
title: "安全与隐私设置"
weight: 90
---

# **安全与隐私设置**

## **Autopilot 模式 vs Supervised 模式 — 哪个更适合你？**

### **Autopilot 模式（默认）**

```md
# 适合人群

- 重视开发速度
- 信任 AI 的判断
- 在本地开发环境工作

# 工作机制

- 自动执行文件的创建、编辑和删除
- 自动执行命令（仅限信任列表内）
- 随时可以通过“Stop”命令中断

# 使用示例

"帮我实现用户认证功能"
→ 自动创建所有必要文件并完成实现
```

### **Supervised 模式（适合谨慎派）**

```md
# 适合人群

- 在生产环境中工作
- 重要项目
- 想仔细确认 AI 每个动作

# 工作机制

- 每个操作前都会弹出确认对话框
- “确定要创建这个文件吗？”
- “确定要执行这个命令吗？”

# 切换方法

在聊天界面的 “Autopilot” 开关切换为关闭（OFF）
```

## **受信任命令的管理**

默认自动执行的命令：

```BASH
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

自定义命令的添加：

```JSON
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

绝对不要添加危险命令：

```BASH
# 这些命令绝对不能添加！
rm -rf
sudo
chmod 777
curl | sh
eval

```

## **数据隐私与遥测**

### **退出（Opt-out）方法**

````md
# 方法 1：通过设置界面

Settings → Application → Telemetry and Content → 关闭（Disabled）

# 方法 2：通过 settings.json 配置

```json
{
  "telemetry": {
    "enabled": false
  },
  "usageStatisticsEnabled": false
}
```
````

### **收集的数据**

收集内容包括：

- 使用的功能（Specs、Hooks 等）
- 错误信息
- 性能指标
- 操作系统信息
  不收集内容：
- 代码内容
- 提示词内容（如果在设置中关闭）
- 文件路径
- 个人信息

### **按项目进行设置**

```BASH
# 全局设置（适用于所有项目）
~/.kiro/settings.json

# 项目专属设置（优先级更高）
.kiro/settings.json

# 推荐加入 .gitignore
.kiro/settings.json  # 如果包含 API 密钥等敏感信息

```

## **聊天历史记录位置**

目前 Kiro 还没有聊天会话导出的能力，原始 JSON 格式的聊天信息保存在：

- Windows: `~\AppData\Roaming\Kiro\User\globalStorage\kiro.kiroagent\<userid>\*.chat`

## **安全最佳实践**

### **1. 使用环境变量管理 API 密钥**

```json
# ❌ 不好的例子：在 settings.json 中直接写入
{
  "mcpServers": {
    "github": {
      "env": {
        "GITHUB_TOKEN": "ghp_actualTokenHere"  # 危险！
      }
    }
  }
}

# ✅ 好的例子：引用环境变量
{
  "mcpServers": {
    "github": {
      "env": {
        "GITHUB_TOKEN": "$GITHUB_TOKEN"  # 从环境变量读取
      }
    }
  }
}

# 添加到 .zshrc 或 .bashrc
export GITHUB_TOKEN="ghp_xxxx"
export BRAVE_API_KEY="BSA_xxxx"
```

### **2. 针对每个项目进行权限隔离**

```json
# 生产项目
.kiro/settings.json
{
  "sandbox": "docker",        # 启用沙箱环境
  "autoAccept": false,        # 禁用自动批准
  "excludeTools": ["run_shell_command"]  # 禁止执行 Shell 命令
}

# 开发项目
.kiro/settings.json
{
  "sandbox": false,           # 禁用沙箱环境（提升速度）
  "autoAccept": false,        # 依然禁用自动批准
  "coreTools": ["all"]        # 允许使用所有工具
}

```

### **3. 设置 .gitignore 文件**

```BASH
# .gitignore
.env
.env.local
.kiro/settings.json    # 可能包含 API 密钥
.kiro/cache/           # 缓存文件
*.log                  # 日志文件

# 但是以下内容需要提交
.kiro/steering/        # 项目知识共享
.kiro/hooks/           # Hook 配置共享
.kiro/specs/           # 规格说明共享

```

## **为企业防火墙配置白名单**

可以参考[官方文档](https://kiro.dev/docs/privacy-and-security/firewalls/)为您的企业防火墙配置白名单。

目前官方文档上的白名单地址不全，除了文档中的内容，您还需要将以下域名添加到白名单：

- codewhisperer.us-east-1.amazonaws.com
- prod.us-east-1.telemetry.kiro.aws.dev

## **企业用户如何审计聊天信息**

可以在 Amazon Q Developer 控制台中启用 prompt logging，参考[官方文档](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/q-admin-prompt-logging.html)。

