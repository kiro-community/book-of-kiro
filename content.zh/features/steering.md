---
title: "Steering"
weight: 1
---

{{% hint info %}}
本章节是 [Kiro 官方 Steering 文档](https://kiro.dev/docs/steering/) 的中文翻译。信息可能存在滞后。
{{% /hint %}}

# 什么是 Steering？

Steering 通过 `.kiro/steering/` 目录中的 markdown 文件为 Kiro 提供持久的项目知识。无需在每次聊天中解释您的约定，Steering 文件确保 Kiro 始终遵循您建立的模式、库和标准。

## 主要优势

**一致的代码生成** - 每个组件、API 端点或测试都遵循您团队建立的模式和约定。

**减少重复** - 无需在每次对话中解释项目标准。Kiro 会记住您的偏好。

**团队协调** - 所有开发者都使用相同的标准，无论他们是项目新手还是资深贡献者。

**可扩展的项目知识** - 随着代码库增长的文档，记录决策和模式，与项目一起演进。

## 默认 Steering 文件

Kiro 自动创建三个基础文件，建立核心项目上下文：

**产品概述** (`product.md`) - 定义您产品的目的、目标用户、关键功能和业务目标。这帮助 Kiro 理解技术决策背后的"为什么"，并建议与您产品目标一致的解决方案。

**技术栈** (`tech.md`) - 记录您选择的框架、库、开发工具和技术约束。当 Kiro 建议实现方案时，它会优先选择您已建立的技术栈而非替代方案。

**项目结构** (`structure.md`) - 概述文件组织、命名约定、导入模式和架构决策。这确保生成的代码无缝融入您现有的代码库。

这些基础文件默认包含在每次交互中，形成 Kiro 项目理解的基线。

## 创建自定义 Steering 文件

通过专门的 Steering 扩展 Kiro 的理解，满足您项目的独特需求：

1. 导航到 Kiro 面板中的 **Steering** 部分
2. 点击 **+** 按钮创建新的 `.md` 文件
3. 选择描述性的文件名（例如 `api-standards.md`）
4. 使用标准 markdown 语法编写您的指导
5. 使用自然语言描述您的要求，然后选择**Refine**按钮，Kiro 会为您格式化

## 包含模式

Steering 文件可以配置为根据您的需求在不同时间加载。这种灵活性有助于优化性能，并确保在需要时提供相关上下文。

通过在 Steering 文件顶部添加前置元数据来配置包含模式。前置元数据使用 YAML 语法，必须放在文件的最开始，用三个破折号（`---`）包围。

### 始终包含（默认）

```yaml
---
inclusion: always
---
```

这些文件会自动加载到每次 Kiro 交互中。将此模式用于应该影响所有代码生成和建议的核心标准。示例包括您的技术栈、编码约定和基本架构原则。

**使用场景**：项目范围的标准、技术偏好、安全策略和普遍适用的编码约定。

### 条件包含

```yaml
---
inclusion: fileMatch
fileMatchPattern: 'components/**/*.tsx'
---
```

文件仅在处理匹配指定模式的文件时自动包含。这通过仅在需要时加载专门指导来保持上下文相关性并减少噪音。

常见模式：
* "*.tsx" - React components and JSX files
* "app/api/**/*" - API routes and backend logic
* "**/*.test.*" - Test files and testing utilities
* "src/components/**/*" - Component-specific guidelines
* "*.md" - Documentation files

**适用场景**：特定领域的标准，如组件模式、API 设计规则、测试方法或仅适用于特定文件类型的部署程序。

### 手动包含

```yaml
---
inclusion: manual
---
```

通过在聊天消息中使用 `#steering-file-name` 引用文件，按需提供文件。这让您精确控制何时需要专门上下文，而不会使每次交互变得混乱。

**使用方法**：在聊天中输入 `#troubleshooting-guide` 或 `#performance-optimization` 来为当前对话包含该 Steering 文件。

**适用场景**：专门的工作流程、故障排除指南、迁移程序或仅偶尔需要的上下文丰富文档。

## 文件引用

链接到实时项目文件以保持 Steering 的时效性：

```markdown
#[[file:<relative_file_name>]]
```

示例：
- API specs: #[[file:api/openapi.yaml]]
- Component patterns: #[[file:components/ui/button.tsx]]
- Config templates: #[[file:.env.example]]

## 最佳实践

**保持文件专注**
每个文件一个领域 - API 设计、测试或部署程序。

**使用清晰的名称**
- `api-standards.md` -  REST API 标准
- `testing-unit-patterns.md` - 单元测试的方法
- `components-form-validation.md` - 表单组件标准

**包含上下文**
解释为什么做出决策，而不仅仅是标准是什么。

**提供示例**
使用代码片段和前后对比来演示标准。

**安全第一**
永远不要包含 API 密钥、密码或敏感数据。Steering 文件是代码库的一部分。

**定期维护**
- 随着项目发展更新 Steering 文件
- 删除过时的约定
- 添加新的模式和决策

## 常见 Steering 文件策略

**API 标准** (`api-standards.md`) - 定义 REST 约定、错误响应格式、认证流程和版本控制策略。包括端点命名模式、HTTP 状态码使用和请求/响应示例。

**测试方法** (`testing-standards.md`) - 建立单元测试模式、集成测试策略、模拟方法和覆盖率期望。记录首选测试库、断言样式和测试文件组织。

**代码风格** (`code-conventions.md`) - 指定命名模式、文件组织、导入排序和架构决策。包括首选代码结构、组件模式和要避免的反模式示例。

**安全指南** (`security-policies.md`) - 记录认证要求、数据验证规则、输入清理标准和漏洞预防措施。包括特定于您应用程序的安全编码实践。

**部署流程** (`deployment-workflow.md`) - 概述构建程序、环境配置、部署步骤和回滚策略。包括 CI/CD 管道详细信息和环境特定要求。

自定义 Steering 文件存储在 `.kiro/steering/` 中，并立即在所有 Kiro 交互中可用。