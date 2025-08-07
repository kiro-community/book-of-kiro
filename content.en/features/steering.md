---
title: "Steering"
weight: 1
---

{{% hint info %}}
This section is an English translation of the [official Kiro Steering documentation](https://kiro.dev/docs/steering/). Information may be outdated.
{{% /hint %}}

# What is Steering?

Steering provides persistent project knowledge to Kiro through markdown files in the `.kiro/steering/` directory. Instead of explaining your conventions in every chat, Steering files ensure Kiro consistently follows the patterns, libraries, and standards you've established.

## Key Benefits

**Consistent Code Generation** - Every component, API endpoint, or test follows the patterns and conventions your team has established.

**Reduced Repetition** - No need to explain project standards in every conversation. Kiro remembers your preferences.

**Team Alignment** - All developers use the same standards, whether they're new to the project or seasoned contributors.

**Scalable Project Knowledge** - Documentation that grows with your codebase, recording decisions and patterns that evolve with your project.

## Default Steering Files

Kiro automatically creates three foundational files that establish core project context:

**Product Overview** (`product.md`) - Defines your product's purpose, target users, key features, and business goals. This helps Kiro understand the "why" behind technical decisions and suggest solutions aligned with your product objectives.

**Tech Stack** (`tech.md`) - Documents your chosen frameworks, libraries, development tools, and technical constraints. When Kiro suggests implementations, it prioritizes your established tech stack over alternatives.

**Project Structure** (`structure.md`) - Outlines file organization, naming conventions, import patterns, and architectural decisions. This ensures generated code fits seamlessly into your existing codebase.

These foundational files are included in every interaction by default, forming the baseline of Kiro's project understanding.

## Creating Custom Steering Files

Extend Kiro's understanding with specialized Steering that meets your project's unique needs:

1. Navigate to the **Steering** section in the Kiro panel
2. Click the **+** button to create a new `.md` file
3. Choose a descriptive filename (e.g., `api-standards.md`)
4. Write your guidance using standard markdown syntax
5. Describe your requirements in natural language, then select the **Refine** button and Kiro will format it for you

## Inclusion Modes

Steering files can be configured to load at different times based on your needs. This flexibility helps optimize performance and ensures relevant context is provided when needed.

Configure inclusion modes by adding frontmatter to the top of your Steering file. Frontmatter uses YAML syntax and must be placed at the very beginning of the file, surrounded by three dashes (`---`).

### Always Include (Default)

```yaml
---
inclusion: always
---
```

These files are automatically loaded into every Kiro interaction. Use this mode for core standards that should influence all code generation and suggestions. Examples include your tech stack, coding conventions, and fundamental architectural principles.

**Use Cases**: Project-wide standards, technical preferences, security policies, and universally applicable coding conventions.

### Conditional Include

```yaml
---
inclusion: fileMatch
fileMatchPattern: 'components/**/*.tsx'
---
```

Files are automatically included only when working with files that match the specified pattern. This keeps context relevant and reduces noise by loading specialized guidance only when needed.

Common patterns:
* "*.tsx" - React components and JSX files
* "app/api/**/*" - API routes and backend logic
* "**/*.test.*" - Test files and testing utilities
* "src/components/**/*" - Component-specific guidelines
* "*.md" - Documentation files

**Use Cases**: Domain-specific standards like component patterns, API design rules, testing methodologies, or deployment procedures that only apply to specific file types.

### Manual Include

```yaml
---
inclusion: manual
---
```

Files are provided on-demand by referencing them with `#steering-file-name` in chat messages. This gives you precise control over when specialized context is needed without cluttering every interaction.

**Usage**: Type `#troubleshooting-guide` or `#performance-optimization` in chat to include that Steering file for the current conversation.

**Use Cases**: Specialized workflows, troubleshooting guides, migration procedures, or context-rich documentation that's only occasionally needed.

## File References

Link to live project files to keep your Steering current:

```markdown
#[[file:<relative_file_name>]]
```

Examples:
- API specs: #[[file:api/openapi.yaml]]
- Component patterns: #[[file:components/ui/button.tsx]]
- Config templates: #[[file:.env.example]]

## Best Practices

**Keep Files Focused**
One domain per file - API design, testing, or deployment procedures.

**Use Clear Names**
- `api-standards.md` - REST API standards
- `testing-unit-patterns.md` - Unit testing methodologies
- `components-form-validation.md` - Form component standards

**Include Context**
Explain why decisions were made, not just what the standards are.

**Provide Examples**
Use code snippets and before/after comparisons to demonstrate standards.

**Security First**
Never include API keys, passwords, or sensitive data. Steering files are part of your codebase.

**Regular Maintenance**
- Update Steering files as your project evolves
- Remove outdated conventions
- Add new patterns and decisions

## Common Steering File Strategies

**API Standards** (`api-standards.md`) - Define REST conventions, error response formats, authentication flows, and versioning strategies. Include endpoint naming patterns, HTTP status code usage, and request/response examples.

**Testing Methodologies** (`testing-standards.md`) - Establish unit testing patterns, integration testing strategies, mocking approaches, and coverage expectations. Document preferred testing libraries, assertion styles, and test file organization.

**Code Style** (`code-conventions.md`) - Specify naming patterns, file organization, import ordering, and architectural decisions. Include examples of preferred code structure, component patterns, and anti-patterns to avoid.

**Security Guidelines** (`security-policies.md`) - Document authentication requirements, data validation rules, input sanitization standards, and vulnerability prevention measures. Include security coding practices specific to your application.

**Deployment Workflow** (`deployment-workflow.md`) - Outline build procedures, environment configuration, deployment steps, and rollback strategies. Include CI/CD pipeline details and environment-specific requirements.

Custom Steering files are stored in `.kiro/steering/` and are immediately available in all Kiro interactions.