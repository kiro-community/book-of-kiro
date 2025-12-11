---
inclusion: manual
---

# FAQ Content Generation Guidelines

## Overview

This steering guide provides standards for creating and maintaining FAQ (Frequently Asked Questions) content across all Kiro documentation. FAQs serve as quick-reference resources for common user questions and should be structured consistently across all product components.

## Standard FAQ Structure

### Frontmatter Template
```yaml
---
title: "常见问题"
weight: [appropriate_weight]
bookToc: true
---
```

### Page Structure
1. **Page Title**: Use H1 with product component name
2. **Category Sections**: Group related questions using H2 headers
3. **Individual Questions**: Use H3 headers for each question
4. **Answers**: Provide clear, actionable responses

### Example Structure
```markdown
# **[Product Component] 常见问题**

## **[Category Name]**

### **[Specific Question]?**

[Clear, actionable answer with examples if needed]

### **[Another Question]?**

[Answer with code examples, commands, or step-by-step instructions]
```

## Content Categories

### Standard FAQ Categories
Based on existing patterns, organize content into these categories:

#### For Kiro CLI
- **基本使用问题** (Basic Usage)
- **权限与安全** (Permissions & Security)  
- **升级与维护** (Updates & Maintenance)
- **兼容性问题** (Compatibility Issues)

#### For Kiro IDE
- **安全与隐私设置** (Security & Privacy Settings)
- **数据隐私与遥测** (Data Privacy & Telemetry)
- **聊天历史记录位置** (Chat History Location)
- **安全最佳实践** (Security Best Practices)
- **企业级安全功能** (Enterprise Security Features)

#### For Kiro Enterprise
- **用户管理** (User Management)
- **订阅与计费** (Subscription & Billing)
- **集成配置** (Integration Configuration)
- **安全与合规** (Security & Compliance)

## Writing Guidelines

### Question Format
- Use clear, specific questions that users actually ask
- Start with question words: "如何", "什么", "是否", "可以"
- Include context when necessary: "在 Windows 上通过 WSL 的方式来使用 Kiro CLI..."

### Answer Format
- Provide direct, actionable answers
- Include specific commands, file paths, or configuration examples
- Use code blocks for technical instructions
- Add visual aids (screenshots) when helpful
- Reference official documentation with links

### Code Examples
Always format code properly:

```bash
# Command examples
kiro-cli whoami
kiro-cli logout
```

```json
// Configuration examples
{
  "telemetry": {
    "enabled": false
  }
}
```

### Visual Elements
- Use screenshots for UI-related questions
- Include file path examples: `~/.kiro/settings.json`
- Use hint boxes for important information:

```markdown
{{% hint info %}}
**重要提示**：相关设置已移至其他页面，建议先阅读该部分内容。
{{% /hint %}}
```

## Content Standards

### Technical Accuracy
- Verify all commands and file paths
- Test configuration examples
- Include version-specific information when relevant
- Update content regularly as features change

### User-Focused Language
- Use clear, non-technical language when possible
- Explain technical terms when first introduced
- Provide context for why something matters
- Include troubleshooting steps for common issues

### Cross-References
- Link to relevant documentation sections
- Reference related FAQ entries
- Point to official documentation: `详见 [官方文档](https://kiro.dev/docs/...)`
- Include community resources when appropriate

## Security and Privacy Guidelines

### Sensitive Information
- Never include actual API keys or tokens in examples
- Use placeholder values: `"GITHUB_TOKEN": "ghp_xxxx"`
- Recommend environment variables for secrets
- Provide .gitignore examples for sensitive files

### Best Practices Sections
Include security recommendations:
- Environment variable usage
- Permission isolation strategies
- Regular security audits
- Responsible disclosure information

## Maintenance Guidelines

### Regular Updates
- Review FAQ content monthly
- Update version-specific information
- Add new questions based on user feedback
- Remove outdated information

### Quality Assurance
- Verify all links are functional
- Test all code examples
- Ensure consistent formatting
- Check for grammatical accuracy

### User Feedback Integration
- Monitor support channels for common questions
- Add frequently asked questions to appropriate sections
- Update answers based on user confusion points
- Remove questions that are no longer relevant

## Cross-Component Consistency

### Shared Topics
Maintain consistency across components for shared topics:
- Security and privacy settings
- API key management
- File locations and paths
- Update procedures

### Component-Specific Focus
Tailor content to each component's unique features:
- **CLI**: Command-line operations, automation, CI/CD
- **IDE**: Interface settings, extensions, workspace configuration
- **Enterprise**: User management, compliance, enterprise features

## Example FAQ Entry

```markdown
### **如何查看 Kiro CLI 的版本信息？**

使用以下命令查看版本信息：

```bash
kiro-cli --version
```

您也可以使用 `kiro-cli whoami` 查看详细的用户和版本信息，包括：
- 当前登录用户
- 订阅类型（免费版或付费版）
- CLI 版本号

{{% hint info %}}
**提示**：如果需要升级到最新版本，请参考 [升级指南](../installation/#升级方法)。
{{% /hint %}}
```

This structure ensures FAQs are helpful, accurate, and consistent across all Kiro documentation while maintaining the technical depth users need for effective problem-solving.