---
title: "常见问题"
weight: 23
bookToc: true
---

# **Kiro IDE 常见问题**

{{% hint info %}}
**重要提示**：Agent 自主性设置（Autopilot vs Supervised 模式）和受信任命令管理已移至 [开始使用](getting-started.md) 页面，建议先阅读该部分内容。
{{% /hint %}}

## **数据隐私与遥测**

### **如何关闭 Kiro IDE 的遥测功能？**

有两种方法可以关闭遥测：

**方法 1：通过设置界面**
```
Settings → Application → Telemetry and Content → 关闭（Disabled）
```

**方法 2：通过 settings.json 配置**
```json
{
  "telemetry": {
    "enabled": false
  },
  "usageStatisticsEnabled": false
}
```

### **如何为不同项目设置不同的隐私配置？**

Kiro 支持全局和项目级别的配置：

```bash
# 全局设置（适用于所有项目）
~/.kiro/settings.json

# 项目专属设置（优先级更高）
.kiro/settings.json
```

{{% hint warning %}}
**注意**：如果项目配置包含 API 密钥等敏感信息，建议将 `.kiro/settings.json` 添加到 `.gitignore` 文件中。
{{% /hint %}}

## **聊天历史记录位置**

### **Kiro IDE 的聊天记录保存在哪里？**

聊天记录以 JSON 格式保存在以下位置：

- **Windows**: `~\AppData\Roaming\Kiro\User\globalStorage\kiro.kiroagent\<userid>\*.chat`
- **macOS**: `~/Library/Application Support/Kiro/User/globalStorage/kiro.kiroagent/<userid>/*.chat`
- **Linux**: `~/.config/Kiro/User/globalStorage/kiro.kiroagent/<userid>/*.chat`

### **可以导出聊天历史记录吗？**

目前 Kiro 还没有聊天会话导出功能，但您可以直接访问上述路径中的 JSON 文件来获取原始聊天数据。

## **安全最佳实践**

### **如何安全地管理 API 密钥？**

**❌ 错误做法：直接在配置文件中写入密钥**
```json
{
  "mcpServers": {
    "github": {
      "env": {
        "GITHUB_TOKEN": "ghp_actualTokenHere"  // 危险！
      }
    }
  }
}
```

**✅ 正确做法：使用环境变量**
```json
{
  "mcpServers": {
    "github": {
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"  // 从环境变量读取
      }
    }
  }
}
```

在 `.zshrc` 或 `.bashrc` 中添加：
```bash
export GITHUB_TOKEN="ghp_xxxx"
export BRAVE_API_KEY="BSA_xxxx"
```

### **如何为不同项目设置不同的安全级别？**

**生产项目配置（高安全性）：**
```json
{
  "sandbox": "docker",
  "autoAccept": false,
  "excludeTools": ["run_shell_command"]
}
```

**开发项目配置（便利性优先）：**
```json
{
  "sandbox": false,
  "autoAccept": false,
  "coreTools": ["all"]
}
```

### **应该在 .gitignore 中包含哪些 Kiro 相关文件？**

```bash
# .gitignore 中应包含：
.env
.env.local
.kiro/settings.json    # 可能包含 API 密钥
.kiro/cache/           # 缓存文件
*.log                  # 日志文件

# 但以下内容应该提交：
.kiro/steering/        # 项目知识共享
.kiro/hooks/           # Hook 配置共享
.kiro/specs/           # 规格说明共享
```

### **如何进行定期安全检查？**

定期执行以下检查：

```bash
# 检查是否有敏感信息泄露到 Git 历史
git log --all --full-history -- .kiro/settings.json

# 其他检查项目：
# - 审查受信任命令列表
# - 定期清理不需要的 API 密钥
# - 监控异常的网络活动
```

## **企业级安全功能**

### **Kiro 企业版提供哪些额外的安全功能？**

如果您需要更高级的安全功能，[Kiro 企业版](../kiro-enterprise/) 提供：

- **防火墙白名单配置** - 为企业网络环境配置访问控制
- **VPC Endpoint 支持** - 数据流量不出公网的内网访问
- **聊天审计功能** - 完整的对话记录和审计追踪
- **SSO 集成** - 与企业身份管理系统无缝集成

详见 [Kiro 企业版文档](../kiro-enterprise/) 了解更多信息。