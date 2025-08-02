# Content Guidelines

## Writing Style & Voice
- **Technical but Accessible**: Write for developers who are evaluating AI IDEs
- **Fact-based**: Use specific examples, metrics, and concrete comparisons
- **Balanced**: Present fair comparisons while highlighting Kiro's strengths
- **Actionable**: Provide clear insights that help decision-making
- **Culturally Appropriate**: Adapt content tone and examples for target language audience
- **Consistent Across Languages**: Maintain core messaging while allowing for cultural adaptation

## Competitive Analysis Standards

### Feature Comparison Tables
- Always include a "Comments" column for context and strategic insights
- Use consistent formatting: ✅ for supported, ❌ for not supported
- Provide specific details in feature descriptions (e.g., "✅ Kiro refers to current git diff")
- Include comparison dates in hint boxes: `{{% hint info %}}**Last comparison date**: [DATE]{{% /hint %}}`

### Content Structure for Competitor Pages
1. **Introduction**: Brief overview of the competitor
2. **Feature Comparison**: Detailed table with categories
3. **Price Comparison**: Clear pricing breakdown
4. **Strategic Insights**: Key takeaways and positioning

### Table Categories (Standard Order)
1. **Model**: LLM providers, API access, auto-selection
2. **Chat**: Conversational interfaces and modes
3. **Agent**: Autonomous coding capabilities
4. **Inline Completion**: Code suggestions and predictions
5. **Context**: Codebase understanding and rules
6. **@ Symbol**: Context referencing capabilities
7. **MCP**: Model Context Protocol support
8. **Others**: Additional features
9. **User Experience**: Interface and workflow features

## Hugo-Specific Guidelines

### Frontmatter Standards
```yaml
---
title: "Page Title"
weight: 1                # Order in navigation
bookToc: false          # Disable TOC for comparison pages
---
```

### Shortcode Usage
- Use `{{% hint info %}}` for important notes and dates
- Use `{{% hint warning %}}` for caveats or limitations
- Use `{{% columns %}}` for side-by-side content
- Use `{{% tabs %}}` for alternative views

### Content Organization
- Use `_index.md` files for section landing pages in both languages
- Set `bookFlatSection: true` for flat navigation in sections
- Use descriptive filenames (e.g., `vs-cursor.md`, `vs-copilot.md`)
- Maintain parallel structure between `content/` and `content.zh/` directories
- Ensure consistent navigation weights across languages

## Maintenance Guidelines

### Regular Updates
- Review competitor comparisons monthly
- Update pricing information quarterly
- Verify feature accuracy with each major release
- Maintain comparison date stamps

### Quality Checks
- Ensure all tables have consistent formatting across languages
- Verify all links are functional in both English and Chinese content
- Check that comments provide strategic value and cultural relevance
- Validate technical accuracy of feature descriptions
- Maintain content parity between language versions
- Verify proper encoding and display of Chinese characters

## Bilingual Content Guidelines

### Translation Standards
- Maintain technical accuracy while adapting for cultural context
- Use consistent terminology across all Chinese content
- Preserve Hugo shortcode syntax and formatting
- Keep frontmatter structure identical between languages
- Translate feature names appropriately while maintaining clarity

### Content Synchronization
- Update both language versions when making structural changes
- Maintain parallel navigation weights and organization
- Ensure feature comparison tables reflect same information
- Keep comparison dates synchronized across languages

### Chinese-Specific Considerations
- Use appropriate technical terminology for Chinese developer audience
- Consider cultural context in examples and use cases
- Maintain readability with proper spacing and formatting
- Use simplified Chinese characters consistently

### Terms That Should NOT Be Translated
The following technical terms should remain in English in Chinese content:
- **Steering** - Kiro's guidance system (不要翻译为"指导"或"引导")
- **Agent** - AI assistant/autonomous coding system (不要翻译为"代理")
- **Project Rules** - Amazon Q Developer's rule system (不要翻译为"项目规则")
- **Prompt Library** - Amazon Q Developer's prompt storage system (不要翻译为"提示库")
- **Spec Mode** / **Spec** - Kiro's structured development approach (不要翻译为"规格模式")
- **Agent Hooks** / **Hooks** - Kiro's automated triggers (不要翻译为"代理钩子"或"钩子")
- **Vibe** - Kiro's agent mode (不要翻译为"代理模式")
- **Supervised mode** - Kiro's supervised agent mode (不要翻译为"监督模式")
- **Autopilot mode** - Kiro's autonomous agent mode (不要翻译为"自动驾驶模式")
- **Named Agent** - Specialized agents with specific functions (不要翻译为"命名代理")
- **MCP** - Model Context Protocol (保持英文缩写)
- **API** - Application Programming Interface (保持英文缩写)
- **IDE** - Integrated Development Environment (保持英文缩写)
- **VS Code** - Visual Studio Code (保持英文)
- **GitHub** - 保持英文
- **Git** - 版本控制系统名称，保持英文

## Strategic Messaging

### Kiro Differentiators to Emphasize
- **Spec Mode**: Unique structured development approach
- **Agent Hooks**: Automated workflow triggers
- **Parallel Sessions**: Multi-task capability
- **Supervised vs Autopilot**: Flexible autonomy control

### Positioning Guidelines
- Position Kiro as the structured, workflow-focused AI IDE
- Emphasize developer control and customization
- Highlight unique features that competitors lack
- Focus on productivity and workflow optimization
- Adapt messaging for regional market preferences and development practices