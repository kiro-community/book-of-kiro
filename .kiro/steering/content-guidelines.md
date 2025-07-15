# Content Guidelines

## Writing Style & Voice
- **Technical but Accessible**: Write for developers who are evaluating AI IDEs
- **Fact-based**: Use specific examples, metrics, and concrete comparisons
- **Balanced**: Present fair comparisons while highlighting Kiro's strengths
- **Actionable**: Provide clear insights that help decision-making

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
- Use `_index.md` files for section landing pages
- Set `bookFlatSection: true` for flat navigation in sections
- Use descriptive filenames (e.g., `vs-cursor.md`, `vs-copilot.md`)

## Maintenance Guidelines

### Regular Updates
- Review competitor comparisons monthly
- Update pricing information quarterly
- Verify feature accuracy with each major release
- Maintain comparison date stamps

### Quality Checks
- Ensure all tables have consistent formatting
- Verify all links are functional
- Check that comments provide strategic value
- Validate technical accuracy of feature descriptions

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