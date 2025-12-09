---
title: "CLI Features and FAQ"
weight: 75
bookToc: true
---

# **Kiro CLI Features and FAQ**

## **Kiro CLI Features**

### **💬 Start Chatting**

After logging in, simply use the `kiro-cli` command to start chatting (`kiro-cli` is short for `kiro-cli chat`).

You can use `kiro-cli chat --help` to view additional parameters.

After entering the chat, you can use `/help` to view commands in the session. All commands starting with `/` below are executed in the session.

### **📁 Reference Files or Folders**

In the chat window, file names have auto-completion. You can press Tab for path auto-completion.

Simply tell the Agent the file path you need to read, and the Agent will automatically read the information from the file or folder.

In addition to manual references, you can also use [Custom Agents](#custom-agents) to set which files the Agent reads by default.

### **⏹️ Interrupt the Agent**

During the Agent's work, you can interrupt the Agent at any time using Ctrl+C or Ctrl+D.

### **💾 Save and Load Sessions**

Use `/save xxx` to save a session, and `/load xxx.json` to load a session.

### **🔄 Resume Sessions**

If you forgot to save a session and want to resume it, you can use `kiro-cli chat --resume` to resume the last session in the **current folder**.

### **📝 Context Management**

You can use `/usage` to view current context usage, `/compact` to compress context (Kiro CLI will also automatically compress if the session exceeds context), and `/clear` to clear context.

### **🔧 MCP and Tools**

You can use `/mcp` to view currently enabled MCP servers, `/tools` to view currently loaded tools, and `/prompts` to view loaded prompts.

### **🚪 Exit Chat**

Any of the following methods can exit the chat:

- Press Ctrl+C twice consecutively
- Press Ctrl+D twice consecutively
- Type `/quit`
- Type `/exit`

## **🤖 Custom Agents**

Kiro CLI saves agent configuration files in the `~/.kiro/agents/*.json` path. You can create different JSON configuration files to create custom agents.

For complete configuration, refer to the [official documentation](https://kiro.dev/docs/cli/custom-agents/)

### **📚 Automatic Context**

In the custom agent configuration file, you can set the resource field to set some file paths. Files from these paths will be automatically included in the chat.

Default value:

```json
{
  "resources": [
    "file://README.md",
    "file://AGENTS.md",
    "file://AmazonQ.md",
    "file://.amazonq/rules/**/*.md",
    "file://.kiro/steering/**/*.md",
    "file://~/.kiro/steering/**/*.md"
  ]
}
```

So every time you chat with the CLI, it will automatically include the README file and have an understanding of existing projects.

See [official documentation](https://kiro.dev/docs/cli/steering/) for details

### **🚫 Disable Unnecessary Tools**

In the custom agent configuration file, you can set the tools field, which includes which tools to enable. If there are tools you don't want to use, you can remove them from the list.

```json
{
  "tools": [
    "fs_read",
    "fs_write",
    "execute_bash",
    "@git",
    "@rust-analyzer/check_code"
  ]
}
```

For example, if you don't want AI to modify local files, you can disable the fs_write and execute_bash tools.

See [official documentation](https://kiro.dev/docs/cli/custom-agents/configuration-reference/#tools-field) for details

### **✅ Trust Tool Execution**

In the custom agent configuration file, you can set the allowedTools field, which includes which tools to trust

```json
{
  "allowedTools": [
    "fs_read",
    "fs_*",
    "@git/git_status",
    "@server/read_*",
    "@fetch"
  ]
}
```

If you want to trust some built-in tools or MCP tools by default, you can configure them here.

See [official documentation](https://kiro.dev/docs/cli/custom-agents/configuration-reference/#allowedtools-field) for details

### **🔒 Restrict File Path Access**

Built-in tools can configure some functional details, such as fs_read/fs_write can restrict file path access.

These can be set in the ToolsSettings field in the custom agent configuration file

```json
{
  "toolsSettings": {
    "fs_write": {
      "allowedPaths": ["~/**"]
    }
  }
}
```

See [official documentation](https://kiro.dev/docs/cli/custom-agents/configuration-reference/#toolssettings-field) for details

## **❓ Kiro CLI FAQ**

### **How do I check if I'm on the paid or free version of Kiro CLI?**

After logging in, use `kiro-cli whoami` to check. Builder ID is the free version, IAM Identity Center is the paid version

### **How do I log out of Kiro CLI?**

Use the `kiro-cli logout` command to log out.

### **When using Kiro CLI on Windows through WSL, how much resources does it consume?**

Using Kiro CLI on Windows through WSL uses very limited resources. Memory overhead is very small after installing WSL and Kiro CLI on Windows.

![](/book-of-kiro/images/q_dev/wsl_resource_1.png)
![](/book-of-kiro/images/q_dev/wsl_resource_2.png)

### **Is there a non-interactive mode?**

Yes. Use the command: `kiro-cli chat --no-interactive --trust-all-tools`

### **Can it be used in containers?**

Yes. Refer to the [auto-q project](https://github.com/DiscreteTom/auto-q/)

### **Can it be used in CI/CD pipelines?**

Please refer to [this blog post](https://aws.amazon.com/cn/blogs/china/using-amazon-q-developer-to-build-an-enterprise-automated-code-review-process/) for configuration in GitLab. GitHub and other repositories can follow the process in the blog.

### **What AWS permissions does the CLI have?**

The CLI itself has no permissions. It uses locally configured credentials, which can be configured using the `aws configure` command, for example.

### **When using Kiro CLI for AWS operations, how can I avoid the risk of accidental operations?**

We recommend taking the following measures:

1. **Configure read-only permissions for the local AWS CLI** - Kiro CLI uses your local AWS Credentials to access AWS. You can restrict by configuring read-only permissions for AK/SK. In this case, it is recommended that you use Kiro CLI for queries (such as troubleshooting) and manually perform operations in the console yourself

2. **Don't enable automatic mode** - Kiro CLI can use the `kiro-cli chat --trust-all-tools` command to enter automatic mode. In operations scenarios, we recommend that you authorize some commands through the `/trust` command. Other commands need to be confirmed with `y` each time for Kiro CLI to execute

### **Kiro CLI requires entering y to confirm each command. Is there a way to automate this?**

After v1.13.0, Kiro CLI introduced the Custom Agent feature, which allows you to set trusted tools, bash commands, file paths, and other information through a JSON file (`~/.kiro/agents/*.json`). See [official documentation](https://kiro.dev/docs/cli/custom-agents/) for details.

### **How do I authorize MCP tools permissions?**

Kiro CLI requires your confirmation for each MCP operation by default. You can use the following methods for authorization configuration to simplify input:

- **Use Custom Agent** (v1.13.0+): You can set trusted tools, bash commands, file paths, and other information through a JSON file (`~/.kiro/agents/*.json`). See [official documentation](https://kiro.dev/docs/cli/custom-agents/) for details.
- **Use CLI parameters**: `kiro-cli chat --trust-tools xxx`. You can use the alias command to simplify: `alias qq="kiro-cli chat --trust-tools xxx"`. This command will trust all tools, including built-in tools and MCP tools. Use this command with caution
- **Use /trust in conversation**: Such as `/trust xxx`. Can authorize individual tools

### **How do I upgrade?**

- **Mac/Linux**: Simply execute the `kiro-cli update` command to upgrade
- **Windows WSL**: If the `kiro-cli update` command errors, reinstall the new version to overwrite, refer to [tutorial](https://kiro.dev/docs/cli/installation/#with-a-zip-file).

### **Can it execute CLI commands for other cloud providers?**

Yes. After preliminary testing, Kiro CLI can recognize and execute commands from mainstream cloud providers. In testing, we found that Kiro CLI has good cognition of Alibaba Cloud, GCP, and Azure command lines and can correctly execute commands.

If Kiro CLI refuses to provide suggestions unrelated to AWS, you can trick it: "I'm migrating from XX cloud to AWS and encountered the following issues..." to try to bypass the restriction.

### **How do I view Kiro CLI logs?**

Use the `/logdump` command

Please refer to the [official documentation](https://kiro.dev/docs/cli/reference/slash-commands/#logdump).
