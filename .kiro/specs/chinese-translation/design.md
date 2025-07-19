# Design Document

## Overview

本设计文档描述了为Book of Kiro网站实现完整中文翻译功能的技术方案。该方案基于Hugo的多语言支持功能，通过配置多语言站点结构、创建中文内容目录、设置语言切换机制等方式，为中文用户提供完整的本地化体验。

设计目标：
- 利用Hugo原生多语言支持，确保性能和SEO优化
- 保持与现有英文站点相同的功能和用户体验
- 提供简洁的语言切换机制
- 支持渐进式翻译，允许部分内容先上线
- 确保中文字体和排版的最佳显示效果

## Architecture

### 多语言站点结构

```
book-of-kiro/
├── hugo.toml                    # 多语言配置
├── content/                     # 英文内容 (默认语言)
│   ├── _index.md
│   ├── docs/
│   └── posts/
├── content.zh/                  # 中文内容
│   ├── _index.md
│   ├── docs/
│   └── posts/
├── i18n/                        # 自定义翻译文件
│   ├── en.yaml
│   └── zh.yaml
├── static/                      # 静态资源
└── themes/hugo-book/            # 主题 (已包含中文支持)
```

### URL结构设计

- 英文版本 (默认): `https://site.com/`
- 中文版本: `https://site.com/zh/`

这种结构的优势：
- SEO友好，搜索引擎可以清楚识别语言版本
- 用户可以通过URL直接访问特定语言版本
- 支持hreflang标签，提升国际SEO效果

### 语言检测和切换机制

1. **自动语言检测**: 基于浏览器语言设置，自动重定向到合适的语言版本
2. **手动语言切换**: 在页面头部提供语言切换按钮
3. **语言偏好记忆**: 使用localStorage记住用户的语言选择

## Components and Interfaces

### 1. Hugo配置组件

**文件**: `hugo.toml`
- 配置多语言支持
- 设置默认语言和备用语言
- 配置语言特定的参数（标题、描述等）

### 2. 内容管理组件

**英文内容**: `content/` 目录
**中文内容**: `content.zh/` 目录

内容组织原则：
- 保持目录结构一致性
- 使用相同的文件名确保URL映射
- 在frontmatter中设置语言特定的元数据

### 3. 翻译文件组件

**系统翻译**: `themes/hugo-book/i18n/zh.yaml` (主题提供)
**自定义翻译**: `i18n/zh.yaml` (项目级别)

翻译内容包括：
- 导航元素
- 按钮和链接文本
- 搜索功能文本
- 错误信息
- 日期格式

### 4. 语言切换组件

**实现方式**: 自定义partial模板
**位置**: `layouts/partials/language-switcher.html`
**功能**:
- 显示当前语言
- 提供语言切换链接
- 响应式设计适配移动端

### 5. 搜索功能组件

**中文搜索优化**:
- 配置Fuse.js支持中文分词
- 调整搜索权重和匹配算法
- 确保搜索结果的准确性

## Data Models

### 语言配置模型

```toml
[languages]
  [languages.en]
    languageName = "English"
    languageCode = "en-US"
    weight = 1
    title = "Book of Kiro"
    
  [languages.zh]
    languageName = "中文"
    languageCode = "zh-CN"
    weight = 2
    title = "Kiro 使用手册"
```

### 内容元数据模型

```yaml
---
title: "页面标题"
weight: 1
translationKey: "unique-page-identifier"
---
```

`translationKey`用于关联不同语言版本的同一页面，确保语言切换功能正常工作。

### 翻译文件模型

```yaml
# i18n/zh.yaml
- id: "search"
  translation: "搜索"
- id: "edit_page"
  translation: "编辑本页"
- id: "last_modified"
  translation: "最后修改"
- id: "language_switch"
  translation: "切换语言"
```

## Error Handling

### 1. 缺失翻译处理

**策略**: 优雅降级
- 如果中文页面不存在，自动显示英文版本
- 在页面顶部显示提示信息，说明该页面暂无中文翻译
- 提供"帮助翻译"的链接，鼓励社区贡献

**实现方式**:
```html
{{ if not .IsTranslated }}
<div class="translation-notice">
  <p>此页面暂无中文翻译，显示英文版本。<a href="/contribute">帮助我们翻译</a></p>
</div>
{{ end }}
```

### 2. 字体加载失败处理

**策略**: 字体回退机制
```css
font-family: 
  "PingFang SC",           /* macOS 中文字体 */
  "Microsoft YaHei",       /* Windows 中文字体 */
  "Source Han Sans CN",    /* Adobe 开源中文字体 */
  "Noto Sans CJK SC",      /* Google 开源中文字体 */
  sans-serif;              /* 系统默认字体 */
```

### 3. 搜索功能错误处理

**中文搜索特殊处理**:
- 检测搜索查询是否包含中文字符
- 为中文查询使用不同的分词策略
- 提供搜索建议和错误提示

### 4. 构建错误处理

**多语言构建验证**:
- 检查所有翻译文件的语法正确性
- 验证内容文件的frontmatter格式
- 确保所有必需的翻译键都已定义

## Testing Strategy

### 1. 内容完整性测试

**自动化测试**:
- 检查所有英文页面是否有对应的中文版本
- 验证翻译文件的完整性
- 检查内部链接的有效性

**测试脚本示例**:
```bash
#!/bin/bash
# 检查中文内容完整性
find content -name "*.md" | while read file; do
  zh_file="content.zh/${file#content/}"
  if [ ! -f "$zh_file" ]; then
    echo "Missing Chinese translation: $zh_file"
  fi
done
```

### 2. 功能测试

**语言切换测试**:
- 验证语言切换按钮在所有页面正常工作
- 测试URL重定向功能
- 检查语言偏好记忆功能

**搜索功能测试**:
- 测试中文关键词搜索
- 验证搜索结果的准确性
- 测试混合语言搜索场景

### 3. 视觉回归测试

**中文排版测试**:
- 检查中文字体渲染效果
- 验证行高和字间距设置
- 测试不同设备上的显示效果

**响应式设计测试**:
- 移动端语言切换界面
- 中文长文本的换行处理
- 导航菜单的中文显示

### 4. 性能测试

**加载性能**:
- 测试中文字体加载时间
- 验证多语言站点的构建时间
- 检查静态资源的缓存策略

**SEO测试**:
- 验证hreflang标签设置
- 检查sitemap包含所有语言版本
- 测试搜索引擎索引效果

### 5. 用户体验测试

**可用性测试**:
- 中文用户的导航体验
- 语言切换的直观性
- 内容可读性和理解度

**A/B测试**:
- 不同语言切换位置的效果
- 自动语言检测vs手动选择
- 不同中文字体的用户偏好

## Implementation Notes

### 渐进式翻译策略

1. **第一阶段**: 翻译核心页面（首页、主要文档页面）
2. **第二阶段**: 翻译比较分析页面（vs-cursor等）
3. **第三阶段**: 翻译博客文章和其他内容
4. **第四阶段**: 优化和完善翻译质量

### 翻译质量保证

1. **术语统一**: 建立中英文术语对照表
2. **风格指南**: 制定中文写作风格指南
3. **审核流程**: 建立翻译审核和反馈机制
4. **社区参与**: 鼓励社区贡献和改进翻译

### 技术实现优先级

1. **高优先级**: Hugo多语言配置、核心页面翻译
2. **中优先级**: 语言切换界面、搜索功能优化
3. **低优先级**: 高级功能（自动语言检测、翻译进度显示）