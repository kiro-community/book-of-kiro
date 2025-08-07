---
title: "Q Developer CLI"
weight: 4
bookToc: true
---

{{% hint info %}}
This document covers installation, login, usage, and common questions for Amazon Q Developer CLI.
{{% /hint %}}

## Q CLI Installation and Login

### Q. How to install on Windows?

You need to install WSL on Windows. Please [check the tutorial](https://amzn-chn.feishu.cn/docx/YI5xdNBtRozbjkx5H3McqRm5nNg).

### Q. How to log in to Q CLI?

- **macOS**: You can log in directly through the GUI
- **Linux**: Log in using the `q login` command

### Q. How to log out of Q CLI?

Use the `q logout` command to log out.

## Using Q Developer CLI

### Q. How much resources does using Q Developer CLI through WSL on Windows consume?

Using Q Developer CLI through WSL on Windows consumes very limited resources. The memory overhead after installing WSL and Q Developer CLI on Windows is minimal.

![](/book-of-kiro/images/q_dev/wsl_resource_1.png)
![](/book-of-kiro/images/q_dev/wsl_resource_2.png)

### Q. Is there a non-interactive mode?

Yes. Use the command: `q chat --no-interactive --trust-all-tools`

### Q. Can it be used in containers?

Yes. Refer to the [auto-q project](https://github.com/DiscreteTom/auto-q/)

### Q. Can it be used in CI/CD pipelines?

Please refer to the [related blog](https://aws.amazon.com/cn/blogs/china/using-amazon-q-developer-to-build-an-enterprise-automated-code-review-process/) for configuration in GitLab. Other repositories like GitHub can follow the process described in the blog.

### Q. What AWS permissions does the CLI have?

The CLI itself has no permissions and uses locally configured credentials, such as those configured with the `aws configure` command.

### Q. How to avoid operational risks when using Q CLI for AWS operations?

We recommend taking the following measures:

1. **Configure read-only permissions for local AWS CLI** - Q Developer CLI uses your local AWS Credentials to access AWS. You can limit this by configuring read-only permissions for AK/SK. In this case, we recommend using Q Developer CLI for queries (such as troubleshooting) and manually executing operations in the console yourself.

2. **Don't enable automatic mode** - Q Developer CLI can use the `q chat --trust-all-tools` command to enter automatic mode. In operational scenarios, we recommend using the `/trust` command to authorize specific commands, while other commands require confirmation with `y` each time for commands that Q Developer CLI needs to execute.

### Q. Q CLI requires entering 'y' to confirm every command. Is there a way to automate this?

You can enter the conversation with `q chat --trust-all-tools`, so all tools won't ask for your permission.

{{% hint warning %}}
We recommend users use this feature with caution. Especially in operational scenarios, using it on production systems carries certain risks.
{{% /hint %}}

### Q. How to authorize MCP tools permissions?

Q Developer CLI requires your confirmation for every MCP operation by default. You can use the following methods for authorization configuration to simplify input:

- **Use CLI parameters**: `q chat --trust-tools xxx`. You can use the alias command to simplify it: `alias qq="q chat --trust-tools xxx"`. This command will trust all tools, including built-in tools and MCP tools. Please use this command with caution.
- **Use /trust in conversation**: Such as `/trust xxx`. Can authorize individual tools.

### Q. How to upgrade?

- **Mac/Linux**: Simply execute the `q update` command to upgrade
- **Windows WSL**: If executing `q update` fails, reinstall the new version to overwrite, refer to the [tutorial](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-installing.html#command-line-installing-ubuntu).

### Q. Can it execute CLI commands from other cloud providers?

Yes. Through preliminary testing, Amazon Q Developer CLI can recognize and execute commands from mainstream cloud providers. In testing, we found that Q Developer CLI has good recognition of command lines from Alibaba Cloud, GCP, and Azure, and can execute commands correctly.

### Q. How to view Amazon Q Developer CLI logs?

Please refer to the [official documentation](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-reference.html#command-line-reference-log-files).