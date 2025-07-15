# Book of Kiro

![Kiro Logo](./kiro_text.svg)

A comprehensive documentation website built with Hugo using the Hugo Book theme. This project serves as a clean, book-like documentation platform for the Kiro AI IDE ecosystem, featuring competitive analysis, technical documentation, and community resources.

## Features

- 📚 Structured documentation with nested sections
- 📝 Blog posts and articles
- 🎨 Interactive shortcodes (columns, buttons, hints, tabs, etc.)
- 🧮 Mathematical expressions with KaTeX
- 📊 Diagrams with Mermaid
- 🌍 Multi-language support
- 🔍 Client-side search functionality
- 📱 Responsive, mobile-friendly design

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
# Start development server
hugo server

# Start with drafts
hugo server -D

# Build for production
hugo

# Update theme
git submodule update --remote themes/hugo-book
```

### Project Structure

```
book-of-kiro/
├── .github/workflows/          # GitHub Actions CI/CD
├── .kiro/                      # Kiro IDE configuration
│   └── steering/               # AI assistant guidance files
├── content/                    # Site content
│   ├── _index.md              # Homepage
│   ├── docs/                  # Documentation sections
│   └── posts/                 # Blog posts
├── themes/hugo-book/          # Hugo Book theme (submodule)
├── static/                    # Static assets (copied as-is)
├── assets/                    # Source assets (processed)
├── layouts/                   # Custom Hugo templates
├── public/                    # Generated static site
├── hugo.toml                  # Hugo configuration
└── README.md                  # This file
```

## Project Structure Mapping

### Content Organization
- **content/docs/**: Technical documentation with nested hierarchy
- **content/posts/**: Blog-style articles and announcements
- **content/_index.md**: Homepage content and site introduction

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
- **hugo.toml**: Main Hugo site configuration
- **.kiro/steering/**: AI assistant guidance files
  - **tech.md**: Technology stack and commands
  - **structure.md**: Project structure documentation
  - **product.md**: Product overview and strategy
  - **content-guidelines.md**: Writing and content standards

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For questions or support, please open an issue in this repository.