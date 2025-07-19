# Contributing to Book of Kiro

Thank you for your interest in contributing to Book of Kiro! This bilingual documentation site serves the global Kiro community. This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites

- Hugo (minimum version 0.128.0)
- Git
- Basic knowledge of Markdown
- Familiarity with Hugo static site generator (helpful but not required)
- For Chinese content: Understanding of Chinese technical terminology

### Setting Up Your Development Environment

1. Fork the repository on GitHub
2. Clone your fork:
```bash
git clone https://github.com/your-username/book-of-kiro.git
cd book-of-kiro
```

3. Initialize the theme submodule:
```bash
git submodule update --init --recursive
```

4. Start the development server:
```bash
hugo server
```

5. Access the site at `http://localhost:1313`

## How to Contribute

### Types of Contributions

We welcome several types of contributions:

- **Documentation improvements**: Fix typos, improve clarity, add examples
- **New content**: Add new documentation pages, tutorials, or guides
- **Translations**: Help maintain content parity between English and Chinese versions
- **Competitor analysis**: Update tool comparisons and feature matrices
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

**English Content** (`content/` directory):
- Main documentation: `content/main/`
- Tool comparisons: `content/other-tools/`
- Blog posts: `content/posts/`

**Chinese Content** (`content.zh/` directory):
- 主要文档: `content.zh/main/`
- 工具对比: `content.zh/other-tools/`
- 博客文章: `content.zh/posts/`

**General Guidelines**:
- Use descriptive file and folder names
- Create `_index.md` files for section landing pages
- Maintain parallel structure between English and Chinese content
- Use consistent `translationKey` in frontmatter for linked pages

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

6. Create a pull request on GitHub

### Pull Request Guidelines

- Provide a clear title and description
- Reference any related issues
- Include screenshots for visual changes
- Ensure all links work correctly
- Test that the site builds without errors
- For bilingual changes, update both language versions
- Include translation keys for new content

## Content Structure

### Bilingual Documentation Structure

The site maintains parallel content in English and Chinese:

**English Content Structure**:
```
content/
├── _index.md                    # Homepage
├── main/                        # Core documentation
│   ├── _index.md
│   ├── to-cursor-users.md
│   └── to-q-dev-users.md
├── other-tools/                 # Tool comparisons
│   ├── _index.md
│   └── vs-cursor.md
└── posts/                       # Blog posts
    ├── _index.md
    └── *.md
```

**Chinese Content Structure**:
```
content.zh/
├── _index.md                    # 首页
├── main/                        # 核心文档
│   ├── _index.md
│   ├── to-cursor-users.md
│   └── to-q-dev-users.md
├── other-tools/                 # 工具对比
│   ├── _index.md
│   └── vs-cursor.md
└── posts/                       # 博客文章
    ├── _index.md
    └── *.md
```

### Blog Posts

**English blog posts** go in `content/posts/`:
```yaml
---
title: "Post Title"
date: 2025-01-15
author: "Your Name"
tags: ["tag1", "tag2"]
categories: ["category"]
translationKey: "unique-post-key"
---
```

**Chinese blog posts** go in `content.zh/posts/`:
```yaml
---
title: "文章标题"
date: 2025-01-15
author: "作者姓名"
tags: ["标签1", "标签2"]
categories: ["分类"]
translationKey: "unique-post-key"
---
```

## Bilingual Content Guidelines

### Contributing to Both Languages

When contributing content, consider:

- **New English content**: Should ideally have a Chinese translation
- **New Chinese content**: Should ideally have an English translation
- **Updates to existing content**: Update both language versions when possible
- **Tool comparisons**: Keep feature matrices synchronized across languages

### Translation Guidelines

**For English to Chinese translations**:
- Maintain technical accuracy while adapting for cultural context
- Use consistent Chinese technical terminology
- Preserve Hugo shortcode syntax and formatting
- Keep frontmatter structure identical between languages

**For Chinese to English translations**:
- Ensure clarity for international audience
- Use standard technical terminology
- Maintain the same information structure

### Language-Specific Considerations

**Chinese Content**:
- Use simplified Chinese characters
- Consider cultural context in examples
- Maintain proper spacing and formatting
- Use appropriate technical terms for Chinese developers

**English Content**:
- Use clear, accessible language for global audience
- Include examples relevant to international users
- Follow standard technical writing conventions

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

1. **Build the site locally**: `hugo`
2. **Test both languages**: 
   - English: `http://localhost:1313/en/`
   - Chinese: `http://localhost:1313/zh/` (or root if Chinese is default)
3. **Check for broken links** in both language versions
4. **Verify all images load correctly**
5. **Test language switching** between corresponding pages
6. **Ensure search functionality works** for both languages
7. **Test on mobile devices** if possible
8. **Validate frontmatter** includes proper `translationKey` for linked content

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Focus on what's best for the community

## Community and Support

### Getting Help

If you have questions about contributing:

1. Check existing issues and pull requests on GitHub
2. Open a new issue for discussion
3. Join the community:
   - [Kiro Discord](https://discord.gg/kirodotdev) – English Community
   - [飞书群组](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=f9bq2a34-0cbe-4ba6-9866-16bb685b2dc1) - 中文社区

### Repository Information

- **Repository**: https://github.com/kiro-community/book-of-kiro
- **Live Site**: https://kiro-community.github.io/book-of-kiro/
- **Default Language**: Chinese (中文)
- **Supported Languages**: English, Chinese (Simplified)

## Deployment

The site is automatically deployed to GitHub Pages when changes are merged to the main branch. The deployment process:

1. GitHub Actions builds the Hugo site
2. Generated files are deployed to GitHub Pages
3. Both language versions are available at the live URL

Thank you for contributing to Book of Kiro! 🚀