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

### **Spec 模式下的"可测试属性"是什么**
"可测试属性"即 Property-Based Testing，是 Kiro Spec 系统的核心概念。
核心解释（来自官方文档）：
- Property（属性）：关于系统行为的普遍声明（universal statement），描述系统中应该始终为真的不变量和契约
- 与传统测试的区别：传统测试检查个别示例（example-based），Property-Based Testing 验证整个输入空间上的普遍属性
- 与 EARS 需求的关系：Kiro 从 EARS 格式的需求中提取属性，并自动生成测试用例
工作流程：
1. 用 EARS 格式编写需求规格
2. Kiro 自动从需求中提取可测试属性
3. 基于属性自动生成测试用例
4. 执行测试验证代码正确性

### **增删改查/网络访问是否需要 Skills 配置**
不需要。文件增删改查和网络访问是 Kiro 的内置能力，不需要配置 Skills。
内置能力（无需 Skills）：
- 文件创建、读取、修改、删除
- 目录浏览和管理
- 终端命令执行
- 网络请求（HTTP/HTTPS）
- Git 操作
Skills 的用途：
- 封装可复用的高层工作流和指令集
- 例如：代码审查流程、部署流程、特定框架的开发模式
- Skills 是"指令包"，不是基础工具

### **如何批量导入**
目前 Kiro 官方不支持"批量导入" Skills。只支持逐个导入。
单个导入方式：
```
1. 点击 Import 按钮
2. 选择来源：GitHub 仓库、SKILL.md 文件、或本地文件夹
3. 导入后存储在 .kiro/skills/（工作区）或 ~/.kiro/skills/（全局）
```
变通方案（手动批量）：
```
1. 将多个 Skill 目录批量复制到 ~/.kiro/skills/ 全局目录
2. 或写一个脚本批量 git clone 多个 Skill 仓库到 skills 目录
3. Kiro 会自动发现目录下的 SKILL.md 文件
```

### **出现 There was an error processing your request 报错**
这是一个通用错误提示，可能由多种原因触发：
1. 网络/连接问题：VPN 不稳定、网络中断、代理配置错误
2. MCP 工具问题：MCP 工具的 input_schema 超过 10240 字符会触发此错误
3. 图片处理问题：在对话中发送某些格式图片可能导致后端处理失败
4. 服务端临时故障：AWS 后端服务暂时不可用

排查步骤：
1. 检查网络连接和 VPN 状态
2. 重启 Kiro 客户端
3. 查看 Developer Tools Console（Help → Toggle Developer Tools）中的具体错误
4. 如果使用了 MCP 工具，检查工具的 input_schema 是否过大
5. 尝试创建新会话

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