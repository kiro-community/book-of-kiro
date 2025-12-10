---
title: "安全与隐私设置"
weight: 23
---

# **安全与隐私设置**

本页面介绍 Kiro IDE 的数据隐私、遥测设置和安全最佳实践。

{{% hint info %}}
**Agent 自主性设置**（Autopilot vs Supervised 模式）和**受信任命令管理**已移至 [开始使用](getting-started.md) 页面，建议先阅读该部分内容。
{{% /hint %}}

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

```bash
# 全局设置（适用于所有项目）
~/.kiro/settings.json

# 项目专属设置（优先级更高）
.kiro/settings.json

# 推荐加入 .gitignore
.kiro/settings.json  # 如果包含 API 密钥等敏感信息
```

## **聊天历史记录位置**

目前 Kiro 还没有聊天会话导出的能力，原始 JSON 格式的聊天信息保存在：

- **Windows**: `~\AppData\Roaming\Kiro\User\globalStorage\kiro.kiroagent\<userid>\*.chat`
- **macOS**: `~/Library/Application Support/Kiro/User/globalStorage/kiro.kiroagent/<userid>/*.chat`
- **Linux**: `~/.config/Kiro/User/globalStorage/kiro.kiroagent/<userid>/*.chat`

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
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"  # 从环境变量读取
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

```bash
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

### **4. 定期安全检查**

```bash
# 检查敏感信息泄露
git log --all --full-history -- .kiro/settings.json

# 审查受信任命令列表
# 定期清理不需要的 API 密钥
# 监控异常的网络活动
```

## **企业级安全功能**

如果您需要更高级的安全功能，如防火墙白名单配置、VPC Endpoint 内网访问、聊天审计等，请查看 [Kiro 企业版](../kiro-enterprise/) 相关文档。

企业版提供：
- **防火墙白名单配置** - 为企业网络环境配置访问控制
- **VPC Endpoint 支持** - 数据流量不出公网的内网访问  
- **聊天审计功能** - 完整的对话记录和审计追踪
- **SSO 集成** - 与企业身份管理系统无缝集成

## **安全问题报告**

如果您发现 Kiro 的安全问题，请通过以下方式报告：

- **安全邮箱**: security@kiro.dev
- **负责任披露**: 请先私下报告，给我们时间修复
- **漏洞奖励**: 符合条件的安全问题可能获得奖励

---

保护您的代码和数据安全是我们的首要任务！