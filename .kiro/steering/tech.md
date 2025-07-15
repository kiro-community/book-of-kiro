# Technology Stack

## Framework & Theme
- **Hugo**: Static site generator (requires min version 0.128.0)
- **Hugo Book Theme**: Clean documentation theme via git submodule
- **Theme Repository**: https://github.com/alex-shpak/hugo-book

## Configuration
- **Main Config**: `hugo.toml` (TOML format)
- **Title**: Book of Kiro
- **Language**: English (en-us)
- **Theme**: hugo-book (via git submodule)
- **Markup**: Goldmark with unsafe HTML enabled for rich content
- **Deployment**: GitHub Pages via GitHub Actions

## Features & Libraries
- **KaTeX**: Mathematical expression rendering
- **Mermaid**: Diagram and flowchart support
- **Fuse.js**: Client-side search functionality
- **Responsive Design**: Mobile-friendly layouts
- **Multi-language Support**: i18n ready

## Common Commands

### Development
```bash
# Start development server
hugo server

# Start with drafts
hugo server -D

# Start with specific port
hugo server -p 1314
```

### Building
```bash
# Build for production
hugo

# Build with drafts
hugo -D

# Clean build cache
hugo --gc
```

### Theme Management
```bash
# Update theme submodule
git submodule update --remote themes/hugo-book

# Initialize submodules (first time)
git submodule update --init --recursive
```

### Deployment
```bash
# Automatic deployment via GitHub Actions
# Triggers on push to main branch
# Manual trigger available in GitHub Actions tab

# Local preview of production build
hugo --gc --minify
```

## GitHub Actions Workflow
- **File**: `.github/workflows/hugo.yml`
- **Trigger**: Push to main branch or manual dispatch
- **Hugo Version**: 0.128.0 (extended version)
- **Target**: GitHub Pages
- **Features**: Automatic submodule checkout, Dart Sass support, artifact upload

## Content Guidelines
- Use frontmatter for page configuration
- Leverage Hugo shortcodes for enhanced content
- Follow hierarchical content organization (_index.md for sections)