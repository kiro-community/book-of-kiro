---
title: "Q Developer IDE Plugin"
weight: 3
bookToc: true
---

{{% hint info %}}
This document covers installation, login, usage, and common questions for Amazon Q Developer IDE plugin.
{{% /hint %}}

## IDE Plugin Installation and Login

### Q. Which mainstream IDEs are supported?

The following mainstream IDEs are supported:
- Visual Studio Code
- JetBrains suite
- Eclipse
- Visual Studio
- Android Studio

### Q. How to install the IDE plugin?

Search for "Amazon Q" in the corresponding IDE plugin marketplace and install it.

### Q. How to install the plugin in Android Studio?

After directly installing the Amazon Q plugin, the chat panel cannot be used normally in Android Studio. You can refer to [GitHub Issue](https://github.com/aws/aws-toolkit-jetbrains/issues/5048) to fix it by selecting a boot runtime with JCEF.

![](/book-of-kiro/images/q_dev/android_studio.png)

### Q. How do Pro tier users log in to Q Developer IDE plugin?

1. Expand the Amazon Q chat panel
2. For paid users, select "Company Account" and click Continue
![](/book-of-kiro/images/q_dev/company_account.png)
3. Start URL and Region will be provided by your administrator. Make sure they are filled in correctly, then click Continue
![](/book-of-kiro/images/q_dev/start_url.png)
4. After clicking, a browser page will open to complete the login process in the browser
5. If you have integrated your enterprise SSO, it will redirect to your enterprise SSO for login
6. Follow the prompts for the next steps until you see the successful login prompt

## Using the IDE Plugin

### Q. When to use Inline Chat vs Chat Panel?

- **Chat Panel**: Use when discussing issues with Q Developer without wanting to directly modify files
- **Inline Chat**: Use when you want Q Developer to directly modify files based on prompts

### Q. For the Inline suggestion feature, why don't multiple inference options appear when using arrow keys?

This is usually because Q Developer only generated one suggestion.

### Q. When using Inline Chat, will the context automatically include content from AmazonQ.md and .amazonq/rules/**/*.md?

No.

### Q. Can @workspace modify the codebase index size?

Yes. By default, the Index codebase size is 250 MB, and users can manually modify the size. After adjustment, it won't cause CPU pressure but will use more memory. This can be configured in the plugin Settings.

{{% hint info %}}
For detailed information about Java upgrade and /transform functionality, please refer to the [Java Upgrade](../java-upgrade/) section.
{{% /hint %}}

### Q. Can code standards be specified?

You can create markdown files in the `.amazonq/rules/` directory of the current directory to set rules. See [documentation](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/context-project-rules.html) for details.

**Example: typescript.md**
```markdown
Always use TypeScript instead of JavaScript. Prefer regular functions over arrow functions.
```

{{% hint warning %}}
**Note**: Due to potential LLM attention loss, code standards may not be followed 100%. It's recommended to introduce additional checks during code review.
{{% /hint %}}

## Customization

### Q. Can Customization learn code standards?

The Customization feature is based on RAG (Retrieval Augmented Generation). It works based on keyword search - this approach can find function methods by name, but cannot learn specific coding behavior standards.

### Q. Can a pure markdown file code repository be used to achieve knowledge base effects?

No. According to the Q console description:

> Amazon Q Developer will consider markup files (.md, .mdx, .rst, .txt, .html, .htm, .xml) when creating the customization, but their sizes don't count toward the 2 MB requirement.

So markdown will be vector indexed, but doesn't count as code, so you can't build a knowledge base based on a pure md repo. Markdown can only supplement the codebase, and code needs to be at least 2MB.

To build a knowledge base, you can use Amazon Bedrock Knowledge Base with MCP.