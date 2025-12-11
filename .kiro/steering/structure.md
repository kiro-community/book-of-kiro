# Project Structure

## Root Level
- `hugo.toml` - Main Hugo configuration file
- `.gitmodules` - Git submodule configuration for theme
- `public/` - Generated static site output (ignored in git)
- `resources/` - Hugo's resource cache
- `.github/workflows/` - GitHub Actions CI/CD workflows
- `scripts/` - Build and deployment scripts
- `.kiro/` - Kiro IDE configuration and steering files

## Content Organization

### English Content (`content.en/`)
```
content.en/
├── _index.md                    # English homepage content
├── main/                        # Core documentation
│   └── _index.md               # Main docs index
├── features/                    # Kiro features documentation
│   ├── _index.md               # Features section index
│   ├── cheat-sheet.md          # Quick reference guide
│   └── steering.md             # Steering system documentation
├── other-tools/                 # Competitor analysis
│   ├── _index.md               # Section index
│   ├── vs-cursor.md            # Cursor comparison
│   └── vs-q-dev.md             # Amazon Q Developer comparison
├── amazon-q/                    # Amazon Q Developer migration guide
│   ├── _index.md               # Section index
│   ├── general.md              # General information
│   ├── ide-plugin.md           # IDE plugin comparison
│   ├── cli.md                  # CLI comparison
│   ├── java-upgrade.md         # Java upgrade guide
│   ├── metrics.md              # Metrics and analytics
│   ├── subscription.md         # Subscription information
│   └── troubleshoot.md         # Troubleshooting guide
├── faq/                         # Frequently asked questions
│   ├── _index.md               # FAQ section index
│   ├── to-cursor-users.md      # FAQ for Cursor users
│   └── to-q-dev-users.md       # FAQ for Q Developer users
└── posts/                      # Blog posts/articles
    └── _index.md               # Blog section index
```

### Chinese Content (`content.zh/`)
```
content.zh/
├── _index.md                    # Chinese homepage content
├── kiro-intro/                  # Kiro 介绍和对比
│   ├── _index.md               # 介绍章节索引
│   ├── core-features.md        # 核心功能
│   ├── best-practices.md       # 最佳实践
│   ├── mcp.md                  # MCP 协议支持
│   ├── vs-cursor.md            # 与 Cursor 对比
│   └── vs-q-dev.md             # 与 Amazon Q Developer 对比
├── kiro-ide/                    # Kiro IDE 文档
│   ├── _index.md               # IDE 章节索引
│   ├── getting-started.md      # 快速开始
│   ├── extensions.md           # 扩展功能
│   ├── shortcuts.md            # 快捷键
│   ├── security.md             # 安全性
│   └── troubleshooting.md      # 故障排除
├── kiro-cli/                    # Kiro CLI 文档
│   ├── _index.md               # CLI 章节索引
│   ├── getting-started.md      # 快速开始
│   ├── custom-agents.md        # 自定义 Agent
│   ├── faq.md                  # 常见问题
│   └── troubleshooting.md      # 故障排除
├── kiro-autonomous-agent/       # Kiro 自主 Agent 文档
│   ├── _index.md               # Agent 章节索引
│   └── autonomous-agent.md     # 自主 Agent 功能
├── kiro-enterprise/             # Kiro 企业版文档
│   ├── _index.md               # 企业版章节索引
│   └── getting-started.md      # 企业版快速开始
├── amazon-q/                    # Amazon Q Developer 迁移指南
│   ├── _index.md               # 章节索引
│   ├── general.md              # 一般信息
│   ├── ide-plugin.md           # IDE 插件对比
│   ├── installation.md         # 安装指南
│   ├── quick-start.md          # 快速开始
│   ├── java-upgrade.md         # Java 升级指南
│   ├── metrics.md              # 指标和分析
│   ├── migrate.md              # 迁移指南
│   ├── security.md             # 安全性
│   ├── subscription.md         # 订阅信息
│   ├── troubleshoot.md         # 故障排除
│   └── use-cases.md            # 使用案例
├── faq/                         # 常见问题 (空目录)
│   └── _index.md               # FAQ 章节索引
└── posts/                      # 博客文章
    └── _index.md               # 博客章节索引
```

## Theme Structure
```
themes/hugo-book/       # Git submodule
├── layouts/            # Template files
├── static/             # Static assets (fonts, js, css)
├── assets/             # Source assets for processing
└── i18n/               # Translation files
```

## Asset Directories
- `static/` - Static files copied directly to output
- `assets/` - Source files for Hugo processing
- `data/` - Data files for site generation
- `i18n/` - Internationalization files

## Content Conventions

### Section Files
- `_index.md` - Section landing pages and list pages
- Regular `.md` files - Individual content pages

### Frontmatter Patterns
```yaml
---
title: "Page Title"
weight: 1                # Order in navigation
bookFlatSection: true    # Flatten section in navigation
menu:                    # Custom menu configuration
  after:
    name: "Menu Name"
    weight: 5
---
```

### Content Types
- **main/**: Core technical documentation with nested hierarchy
- **features/**: Kiro-specific feature documentation and guides
- **other-tools/**: Competitor analysis and tool comparisons
- **amazon-q/**: Dedicated migration guide from Amazon Q Developer
- **kiro-intro/**: Introduction and competitive comparisons (Chinese)
- **kiro-ide/**: IDE-specific documentation (Chinese)
- **kiro-cli/**: CLI-specific documentation (Chinese)
- **kiro-autonomous-agent/**: Autonomous agent documentation (Chinese)
- **kiro-enterprise/**: Enterprise edition documentation (Chinese)
- **faq/**: Frequently asked questions
- **posts/**: Blog-style content with dates and categories

### Bilingual Content Management
- English content in `content.en/` directory (default language)
- Chinese content in `content.zh/` directory
- Different organizational structures optimized for each language audience
- Language-specific search indexes and navigation
- Chinese content focuses more on product-specific documentation
- English content emphasizes competitive analysis and migration guides

## Navigation Structure
- Automatic navigation from content hierarchy
- Weight-based ordering within sections
- Support for collapsed/expanded sections
- Breadcrumb navigation support

## Complete Project Structure Map

```
book-of-kiro/
├── .DS_Store                    # macOS system file
├── .git/                        # Git repository data
├── .github/                     # GitHub configuration
│   └── workflows/              # GitHub Actions workflows
│       └── hugo.yml            # Hugo build and deploy workflow
├── .gitignore                   # Git ignore patterns
├── .gitmodules                 # Git submodule configuration
├── .hugo_build.lock            # Hugo build lock file
├── .kiro/                      # Kiro IDE configuration
│   └── steering/               # Steering files for AI guidance
│       ├── content-guidelines.md
│       ├── product.md
│       ├── structure.md
│       └── tech.md
├── CONTRIBUTING.md             # Contribution guidelines
├── LICENSE                     # Project license
├── README.md                   # Project documentation
├── archetypes/                 # Hugo content templates
│   └── default.md
├── assets/                     # Source assets for processing
├── content.en/                 # English site content
│   ├── _index.md              # English homepage content
│   ├── main/                  # Core documentation
│   ├── features/              # Kiro features documentation
│   ├── other-tools/           # Competitor analysis
│   ├── amazon-q/              # Amazon Q Developer migration
│   ├── faq/                   # Frequently asked questions
│   └── posts/                 # Blog posts
├── content.zh/                 # Chinese site content
│   ├── _index.md              # Chinese homepage content
│   ├── kiro-intro/            # Kiro 介绍和对比
│   ├── kiro-ide/              # Kiro IDE 文档
│   ├── kiro-cli/              # Kiro CLI 文档
│   ├── kiro-autonomous-agent/ # Kiro 自主 Agent 文档
│   ├── kiro-enterprise/       # Kiro 企业版文档
│   ├── amazon-q/              # Amazon Q Developer 迁移指南
│   ├── faq/                   # 常见问题
│   └── posts/                 # 博客文章
├── data/                      # Data files for site generation
├── hugo.toml                  # Hugo configuration
├── i18n/                      # Internationalization files
│   ├── en.yaml               # English translations
│   └── zh.yaml               # Chinese translations
├── kiro_text.svg              # Kiro logo/icon
├── layouts/                   # Custom Hugo templates
├── public/                    # Generated static site
│   ├── 404.html
│   ├── *.css, *.js, *.json   # Compiled assets
│   ├── categories/           # Category pages
│   ├── docs/                 # Generated documentation
│   ├── error/                # Error pages
│   ├── fonts/                # Web fonts
│   ├── js/                   # JavaScript files
│   ├── katex/                # KaTeX math rendering
│   ├── posts/                # Generated blog posts
│   ├── svg/                  # SVG assets
│   └── tags/                 # Tag pages
├── resources/                # Hugo resource cache
├── static/                   # Static assets (copied as-is)
└── themes/                   # Hugo themes
    └── hugo-book/            # Book theme (git submodule)
```

## Key Directory Functions

### Development Directories
- **content/**: All markdown content and documentation
- **layouts/**: Custom Hugo template overrides
- **static/**: Static assets copied directly to output
- **assets/**: Source assets processed by Hugo
- **themes/hugo-book/**: Theme files (git submodule)

### Build & Deploy
- **public/**: Generated static site (deployment target)
- **resources/**: Hugo's internal cache
- **.github/workflows/**: GitHub Actions CI/CD workflows
- **scripts/**: Automation and build scripts

### Configuration
- **hugo.toml**: Main site configuration
- **.kiro/steering/**: AI assistant guidance files