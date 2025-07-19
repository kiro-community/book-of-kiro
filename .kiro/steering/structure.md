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

### English Content (`content/`)
```
content/
├── _index.md                    # English homepage content
├── main/                        # Core documentation
│   ├── _index.md               # Main docs index
│   └── *.md                    # Documentation pages
├── other-tools/                 # Competitor analysis
│   ├── _index.md               # Section index
│   └── vs-*.md                 # Tool comparisons
└── posts/                      # Blog posts/articles
    ├── _index.md               # Blog section index
    └── *.md                    # Individual blog posts
```

### Chinese Content (`content.zh/`)
```
content.zh/
├── _index.md                    # Chinese homepage content
├── main/                        # 核心文档
│   ├── _index.md               # 主文档索引
│   └── *.md                    # 文档页面
├── other-tools/                 # 竞品分析
│   ├── _index.md               # 章节索引
│   └── vs-*.md                 # 工具对比
└── posts/                      # 博客文章
    ├── _index.md               # 博客章节索引
    └── *.md                    # 个人博客文章
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
- **other-tools/**: Competitor analysis and tool comparisons
- **posts/**: Blog-style content with dates and categories
- **shortcodes/**: Feature demonstrations and examples

### Bilingual Content Management
- English content in `content/` directory (default language)
- Chinese content in `content.zh/` directory
- Parallel structure maintained across both languages
- Language-specific search indexes and navigation

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
├── content/                    # English site content
│   ├── _index.md              # English homepage content
│   ├── main/                  # Core documentation
│   ├── other-tools/           # Competitor analysis
│   └── posts/                 # Blog posts
├── content.zh/                 # Chinese site content
│   ├── _index.md              # Chinese homepage content
│   ├── main/                  # 核心文档
│   ├── other-tools/           # 竞品分析
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