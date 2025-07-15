# Contributing to Kiro Books

Thank you for your interest in contributing to Kiro Books! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites

- Hugo (minimum version 0.128.0)
- Git
- Basic knowledge of Markdown
- Familiarity with Hugo static site generator (helpful but not required)

### Setting Up Your Development Environment

1. Fork the repository on GitLab
2. Clone your fork:
```bash
git clone git@ssh.gitlab.aws.dev:your-username/book-of-kiro.git
cd book-of-kiro
```

3. Initialize the theme submodule:
```bash
git submodule update --init --recursive
```

4. Start the development server:
```bash
hugo server -D
```

## How to Contribute

### Types of Contributions

We welcome several types of contributions:

- **Documentation improvements**: Fix typos, improve clarity, add examples
- **New content**: Add new documentation pages, tutorials, or guides
- **Bug fixes**: Fix broken links, formatting issues, or configuration problems
- **Feature enhancements**: Improve site functionality or user experience

### Content Guidelines

#### Writing Style

- Use clear, concise language
- Write in present tense
- Use active voice when possible
- Include code examples where relevant
- Add screenshots or diagrams for complex concepts

#### Markdown Formatting

- Use proper heading hierarchy (H1 for page titles, H2 for main sections, etc.)
- Include frontmatter for all content files:

```yaml
---
title: "Your Page Title"
weight: 10
description: "Brief description of the page"
---
```

#### File Organization

- Place documentation in `content/docs/`
- Use descriptive file and folder names
- Create `_index.md` files for section landing pages
- Follow the existing directory structure

### Making Changes

1. Create a new branch for your changes:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes following the guidelines above

3. Test your changes locally:
```bash
hugo server -D
```

4. Commit your changes with a descriptive message:
```bash
git add .
git commit -m "Add documentation for new feature"
```

5. Push to your fork:
```bash
git push origin feature/your-feature-name
```

6. Create a merge request on GitLab

### Merge Request Guidelines

- Provide a clear title and description
- Reference any related issues
- Include screenshots for visual changes
- Ensure all links work correctly
- Test that the site builds without errors

## Content Structure

### Documentation Pages

Documentation should be organized logically:

```
content/docs/
├── getting-started/
│   ├── _index.md
│   ├── installation.md
│   └── quick-start.md
├── guides/
│   ├── _index.md
│   └── advanced-usage.md
└── reference/
    ├── _index.md
    └── api-reference.md
```

### Blog Posts

Blog posts go in `content/posts/` and should include:

```yaml
---
title: "Post Title"
date: 2025-01-15
author: "Your Name"
tags: ["tag1", "tag2"]
categories: ["category"]
---
```

## Hugo Book Theme Features

Take advantage of the theme's built-in shortcodes:

### Hints
```markdown
{{< hint info >}}
This is an info hint
{{< /hint >}}
```

### Columns
```markdown
{{< columns >}}
Left column content
<--->
Right column content
{{< /columns >}}
```

### Tabs
```markdown
{{< tabs "unique-id" >}}
{{< tab "Tab 1" >}} Content 1 {{< /tab >}}
{{< tab "Tab 2" >}} Content 2 {{< /tab >}}
{{< /tabs >}}
```

## Testing

Before submitting your contribution:

1. Build the site locally: `hugo`
2. Check for broken links
3. Verify all images load correctly
4. Test on mobile devices if possible
5. Ensure search functionality works

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Focus on what's best for the community

## Questions?

If you have questions about contributing:

1. Check existing issues and merge requests
2. Open a new issue for discussion
3. Reach out to maintainers

Thank you for contributing to Kiro Books!