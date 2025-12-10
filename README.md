# Book of Kiro

![Kiro Logo](./kiro_text.svg)

A comprehensive bilingual documentation website built with Hugo using the Hugo Book theme. This project serves as the central knowledge hub for Kiro, a complete AI development platform that includes IDE, CLI, and Autonomous Agent components, featuring competitive analysis, technical documentation, and migration guides in both English and Chinese.

## Quick Start

### Prerequisites

- Hugo (minimum version 0.128.0)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kiro-community/book-of-kiro.git
cd book-of-kiro
```

2. Initialize and update the theme submodule:
```bash
git submodule update --init --recursive
```

3. Start the development server:
```bash
hugo server
```

4. Open your browser to `http://localhost:1313`

## Bilingual Content Strategy

This documentation site serves both English and Chinese-speaking developers with tailored content:

### English Content Focus
- Competitive analysis and market positioning
- Migration guides from other AI development platforms
- Feature comparisons with detailed technical insights
- FAQ sections for users transitioning from other tools

### Chinese Content Focus
- Product-specific documentation organized by component
- Comprehensive guides for IDE, CLI, and Autonomous Agent
- Enterprise edition documentation
- Localized best practices and use cases

### Content Synchronization
- Core messaging maintained across both languages
- Cultural adaptation for regional developer preferences
- Language-specific technical terminology and examples
- Separate search indexes optimized for each language

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

- **Triggers**: Automatically on push to `main` branch, or manually via GitHub Actions tab
- **Build**: Uses Hugo 0.128.0 extended with Dart Sass support
- **Deploy**: Publishes to GitHub Pages with proper artifact handling
- **URL**: Available at your GitHub Pages URL once deployed

### Setting up GitHub Pages

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to main branch to trigger first deployment

## Development

### Common Commands

```bash
# Start development server (all languages)
hugo server

# Start with drafts
hugo server -D

# Start with specific port
hugo server -p 1314

# Preview specific language
hugo server --config hugo.toml --contentDir content.en   # English only
hugo server --config hugo.toml --contentDir content.zh   # Chinese only

# Build for production
hugo

# Build with drafts
hugo -D

# Clean build cache
hugo --gc

# Update theme submodule
git submodule update --remote themes/hugo-book
```

### Project Structure

```
book-of-kiro/
├── .github/workflows/          # GitHub Actions CI/CD
├── .kiro/                      # Kiro IDE configuration
│   └── steering/               # AI assistant guidance files
├── content.en/                 # English site content
│   ├── main/                  # Core documentation
│   ├── features/              # Kiro features documentation
│   ├── other-tools/           # Competitor analysis
│   ├── amazon-q/              # Amazon Q Developer migration
│   ├── faq/                   # Frequently asked questions
│   └── posts/                 # Blog posts
├── content.zh/                 # Chinese site content
│   ├── kiro-intro/            # Kiro 介绍和对比
│   ├── kiro-ide/              # Kiro IDE 文档
│   ├── kiro-cli/              # Kiro CLI 文档
│   ├── kiro-autonomous-agent/ # Kiro 自主 Agent 文档
│   ├── kiro-enterprise/       # Kiro 企业版文档
│   ├── amazon-q/              # Amazon Q Developer 迁移指南
│   └── posts/                 # 博客文章
├── themes/hugo-book/          # Hugo Book theme (submodule)
├── static/                    # Static assets (copied as-is)
├── assets/                    # Source assets (processed)
├── layouts/                   # Custom Hugo templates
├── public/                    # Generated static site
├── hugo.toml                  # Hugo configuration
└── README.md                  # This file
```

## Content Organization

### English Content (`content.en/`)
- **main/**: Core technical documentation
- **features/**: Kiro-specific feature documentation and guides
- **other-tools/**: Competitive analysis and tool comparisons
- **amazon-q/**: Dedicated migration guide from Amazon Q Developer
- **faq/**: Frequently asked questions for different user groups
- **posts/**: Blog-style articles and announcements

### Chinese Content (`content.zh/`)
- **kiro-intro/**: Introduction and competitive comparisons
- **kiro-ide/**: IDE-specific documentation and guides
- **kiro-cli/**: CLI-specific documentation and tutorials
- **kiro-autonomous-agent/**: Autonomous agent features and usage
- **kiro-enterprise/**: Enterprise edition documentation
- **amazon-q/**: Amazon Q Developer migration guide (Chinese)
- **posts/**: Blog articles in Chinese

### Development & Build
- **themes/hugo-book/**: Git submodule containing the Hugo Book theme
- **layouts/**: Custom template overrides for the theme
- **static/**: Static files copied directly to the output (images, fonts, etc.)
- **assets/**: Source assets processed by Hugo (SCSS, JS, etc.)
- **public/**: Generated static site ready for deployment

### Infrastructure & Deployment
- **.github/workflows/**: GitHub Actions CI/CD workflows
- **scripts/**: Build automation and deployment scripts

### Configuration & Guidance
- **hugo.toml**: Main Hugo site configuration with bilingual support
- **i18n/**: Internationalization files (en.yaml, zh.yaml)
- **.kiro/steering/**: AI assistant guidance files
  - **tech.md**: Technology stack and commands
  - **structure.md**: Project structure documentation
  - **product.md**: Product overview and strategy
  - **content-guidelines.md**: Writing and content standards
  - **competitive-analysis.md**: Standards for competitor comparisons

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For questions or support, please open an issue in this repository.