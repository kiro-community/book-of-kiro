---
title: "General Questions"
weight: 1
bookToc: true
---

{{% hint info %}}
This document covers general questions, functional questions, and pricing-related questions about Amazon Q Developer.
{{% /hint %}}

## General Questions

### Q. What models are used?

Different features use different models:
- **Q Developer CLI**: Currently supports Claude Sonnet 3.5, 3.7, 4
- **Agentic Coding in IDE**: Currently supports Claude Sonnet 3.7 and 4
- **Inline suggestion in IDE Plugin**: Uses self-trained models

### Q. Does it support model selection?

Yes. Users can choose to use different models in the IDE Plugin or CLI, currently supporting Anthropic Claude series models.

### Q. Is there an API calling method?

Not currently. There are two functional approaches:
1. **Build using Strands SDK** - Charged per token.
2. **Run Q Developer CLI in a virtual machine or container** - Trigger execution, please refer to the [related blog](https://aws.amazon.com/cn/blogs/china/using-amazon-q-developer-to-build-an-enterprise-automated-code-review-process/)

### Q. Does it support Chinese?

It supports Chinese interaction, including using Chinese replies, generating Chinese code and comments, etc. Currently, interface elements do not support Chinese. If English replies are occasionally used, you can tell the AI to use Chinese replies through prompts. Additionally, it's recommended to guide Q Developer to output Chinese by creating project rule files in the `.amazonq/rules/` directory in the current directory.

**Example rule file: Instruction.md**
```markdown
# Instruction

- Always reply in Chinese
- Use Chinese for code comments
```

### Q. Can one Pro tier account log in to multiple devices?

Yes. There is currently no limit on the number of devices.

### Q. How to confirm whether you're currently using Pro Tier or Free Tier?

- **In Q Developer IDE Plugin**: You can log out and check the login link
- **In Terminal**: You can use `q whoami` to confirm the login link

## Functional Questions

### Q. Does it support MCP?

Both IDE plugins and Q CLI support it. The IDE plugin can configure MCP Server in the upper right corner of the chat panel, and there is currently no MCP marketplace. For specific configuration manuals for both, please [check the documentation](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/qdev-mcp.html).

### Q. Which MCP protocols are supported?

Currently only stdio transport is supported.

### Q. Does it support knowledge bases?

It's recommended to use Amazon Bedrock Knowledge Base to build knowledge bases or build your own. Amazon Q Developer can access Amazon Bedrock Knowledge Base through MCP. If you have your own knowledge base, you can also access and integrate it through MCP.

### Q. Does it support images?

Yes.

### Q. Does it support Rules?

Both IDE plugins and Q CLI support it. The directory is `.amazonq/rules/**/*.md`. Any Markdown files placed under `.amazonq/rules` will automatically be loaded as context into the conversation. Please [refer to the documentation](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/context-project-rules.html).

### Q. What is the context size for Agentic Coding?
The context size depends on the model's context size, which is 200K for Claude series models.

## Pricing Questions

### Q. What are the costs beyond the $19/month/person subscription fee?

Amazon Q Developer uses a fixed subscription model of $19/month/person, which includes all core features.

{{% hint info %}}
For details about Java code upgrade costs, please refer to the [Java Upgrade](../java-upgrade/) section.
{{% /hint %}}

### Q. If you start subscribing to Pro tier mid-month, will you be charged for the entire month?

No, you will be charged based on the remaining days in the month. Please see the pricing documentation for details.

### Q. If you cancel Pro tier mid-month, can you continue using it until the end of the month? Will you be charged for the entire month?

You can continue using it until the end of the month. Fee calculation:
- **Subscribe at the beginning of the month**: Charged for the entire month
- **Subscribe mid-month**: Charged from the start of subscription to the end of the month

Please see the pricing documentation for details.