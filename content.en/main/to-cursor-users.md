---
weight: 3
bookFlatSection: true
title: "FAQ to Cursor users"
translationKey: "cursor-faq"
---

# FAQ to Cursor users

## Kiro's Unique Advantages

**Q. What does Kiro offer that Cursor doesn't?**

Kiro provides several unique features that Cursor lacks:

- **Spec Mode**: Structured approach to complex development tasks
- **Agent Hooks**: Automated triggers for specific IDE events
- **Flexible Agent Control**: Choose between Autopilot and Supervised modes

## Agent

**Q. What is Autopilot?**

Kiro's Agent supports Autopilot mode and Supervised mode (toggle the Autopilot). Autopilot mode allows Kiro to modify files within the opened workspace autonomously. Supervised mode allows users to review and approve changes before they are applied.

**Q. Does Kiro have Checkpoints like Cursor?**

Currently, Kiro doesn't have automatic checkpoints. However, you can use Git for version control and create manual commits before running agents. Kiro's Supervised mode also allows you to review changes before they're applied, giving you control over what gets modified.

**Q. Does Kiro support Agent Planning with todos and queuing?**

Kiro doesn't have built-in agent planning with todos and queuing like Cursor. However, Kiro offers **Spec Mode** - a unique structured approach to complex development tasks that formalizes the software development process. This provides better organization for complex projects than simple todo lists.

## Models

**Q. Can I use my own API keys with Kiro?**

Currently, Kiro doesn't support direct API key usage. API Keys usally cost more than subscription. Core features like Agent are prohibited in Cursor if using API Keys.

**Q. Does Kiro have Auto mode for model selection?**

Kiro doesn't currently have auto mode for model selection. However, Kiro focuses on providing the best coding model (Claude 4) by default, eliminating the need to choose between different models for optimal performance.


## Context & Memory

**Q. Does Kiro have Memories like Cursor?**

Kiro doesn't have automatic memories generation. Instead, Kiro uses **Steering** - a more structured approach to project rules that you can explicitly define and manage. This gives you better control over how context is maintained across sessions.

**Q. Can I use ignore files to control what Kiro sees?**

Kiro doesn't currently support ignore files for controlling file access. However, you can use Kiro's context controls like #File and #Folder to explicitly specify what content to include in your conversations.

## MCP (Model Context Protocol)

**Q. Does Kiro support SSE and Streamable HTTP transports?**

Kiro currently supports `stdio` transport for MCP servers. While SSE and Streamable HTTP aren't supported yet, you can use `mcp-remote` as an alternative for remote MCP servers. Most MCP use cases work well with stdio transport.

**Q. Is there an MCP marketplace in Kiro?**

Kiro doesn't have a built-in MCP marketplace. However, you can install MCP servers from third-party marketplaces. The MCP ecosystem is growing rapidly with many community-contributed servers available.

## Advanced Features

**Q. Does Kiro have Background/Remote Agents?**

Kiro doesn't currently support background or remote agents. However, these features come with additional charges in Cursor and aren't critical for most development workflows. Kiro's local agent capabilities are comprehensive and efficient.

**Q. Can I use Kiro from a web portal?**

Kiro doesn't have a web portal interface. Kiro is designed as a desktop IDE experience that provides better performance and integration with your local development environment.

## Pricing

**Q. How does Kiro's pricing compare to Cursor?**

Kiro offers competitive pricing with generous limits:

**Kiro Pricing:**
- **Free**: $0/month - Unlimited inline completions, 50 Sonnet interactions
- **Pro**: $19/month - Unlimited inline completions, 1000 Sonnet interactions  
- **Pro+**: $39/month - Unlimited inline completions, 3000 Sonnet interactions

**Cursor Pricing:**
- **Hobby**: $0/month - Limited completions and interactions
- **Pro**: $20/month - ~225 Sonnet 4 requests or ~550 Gemini requests
- **Pro+**: $60/month - ~675 Sonnet 4 requests or ~1,650 Gemini requests
- **Ultra**: $200/month - ~4,500 Sonnet 4 requests or ~11,000 Gemini requests
- **Teams**: $40/month - 500 agent requests

**Q. Is Kiro really free during preview?**

Yes! Kiro is free with generous limits during the preview period. After preview, you get unlimited inline completions and 50 interactions per month at no cost.

**Q. Why is Kiro more cost-effective than Cursor?**

- **Simpler pricing**: No complex model-based calculations
- **Better value**: Kiro Pro ($19) offers 1000 Sonnet interactions vs Cursor Pro ($20) with only ~225 Sonnet requests
- **Focus on best model**: Claude 4 by default, no need to pay extra for premium models