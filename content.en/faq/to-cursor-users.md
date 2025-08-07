---
weight: 3
bookFlatSection: true
title: "Cursor Users FAQ"
translationKey: "cursor-faq"
---

# Cursor Users FAQ

## Kiro's Unique Advantages

**Q: What unique features does Kiro have compared to Cursor?**

Kiro provides several unique features that Cursor lacks:

- **Spec Mode**: A structured approach to handling complex development tasks
- **Agent Hooks**: Automated triggers for specific IDE events
- **Flexible Agent Control**: Can choose between Autopilot mode and Supervised mode

## Agent Features

**Q: What is Autopilot mode?**

Kiro's agent supports both Autopilot mode and Supervised mode (toggleable autopilot). Autopilot mode allows Kiro to autonomously modify files within the open workspace. Supervised mode allows users to review and approve changes before applying them.

**Q: Does Kiro have checkpoint functionality like Cursor?**

Currently, Kiro does not have automatic checkpoint functionality. However, you can use Git for version control and create manual commits before running agents. Kiro's Supervised mode also allows you to review changes before applying them, giving you control over what gets modified.

**Q: Does Kiro support agent planning with todos and queues?**

Kiro doesn't have built-in agent planning with todos and queues like Cursor. However, Kiro provides **Spec Mode** - a unique structured approach to handling complex development tasks that formalizes the software development process. This provides better organization for complex projects than simple todo lists.

## Models

**Q: Can I use my own API keys in Kiro?**

Currently, Kiro does not support direct use of API keys. API keys are typically more expensive than subscription fees. In Cursor, if you use API keys, core features like agents are disabled.

**Q: Does Kiro have an automatic mode for model selection?**

Kiro currently does not have an automatic mode for model selection. However, Kiro focuses on providing the best coding model (Claude 4) by default, without needing to choose between different models for optimal performance.

## Context and Memory

**Q: Does Kiro have memory functionality like Cursor?**

Kiro does not have automatic memory generation functionality. Instead, Kiro uses **Steering** - a more structured approach to project rules that you can explicitly define and manage. This gives you better control over how context is maintained between sessions.

**Q: Can I use ignore files to control what Kiro sees?**

Kiro currently does not support using ignore files to control file access. However, you can use Kiro's context controls like #File and #Folder to explicitly specify what to include in conversations.

## MCP (Model Context Protocol)

**Q: Does Kiro support SSE and streamable HTTP transport?**

Kiro currently supports `stdio` transport for MCP servers. While SSE and streamable HTTP are not yet supported, you can use `mcp-remote` as an alternative for remote MCP servers. Most MCP use cases work well under stdio transport.

**Q: Is there an MCP marketplace in Kiro?**

Kiro does not have a built-in MCP marketplace. However, you can install MCP servers from third-party marketplaces. The MCP ecosystem is growing rapidly with many community-contributed servers available.

## Advanced Features

**Q: Does Kiro have background/remote agents?**

Kiro currently does not support background or remote agents. However, these features require additional charges in Cursor and are not essential for most development workflows. Kiro's local agent functionality is comprehensive and efficient.

**Q: Can I use Kiro through a web portal?**

Kiro does not have a web portal interface. Kiro is designed as a desktop IDE experience, providing better performance and integration with local development environments.

## Pricing

**Q: How does Kiro's pricing compare to Cursor?**

Kiro offers competitive pricing with generous limits:

**Kiro Pricing:**
- **Free**: $0/month - Unlimited inline completions, 50 Sonnet interactions
- **Pro**: $19/month - Unlimited inline completions, 1000 Sonnet interactions
- **Pro Plus**: $39/month - Unlimited inline completions, 3000 Sonnet interactions

**Cursor Pricing:**
- **Hobby**: $0/month - Limited completions and interactions
- **Pro**: $20/month - ~225 Sonnet 4 requests or ~550 Gemini requests
- **Pro Plus**: $60/month - ~675 Sonnet 4 requests or ~1,650 Gemini requests
- **Super**: $200/month - ~4,500 Sonnet 4 requests or ~11,000 Gemini requests
- **Team**: $40/month - 500 agent requests

**Q: Is Kiro really free during the preview period?**

Yes! Kiro provides generous limits for free during the preview period. After the preview ends, you can get unlimited inline completions and 50 interactions per month for free.

**Q: Why is Kiro more cost-effective than Cursor?**

- **Simpler pricing**: No complex model-based calculations
- **Better value**: Kiro Pro ($19) provides 1000 Sonnet interactions, while Cursor Pro ($20) only has ~225 Sonnet requests
- **Focus on best models**: Uses Claude 4 by default, no need to pay extra for advanced models