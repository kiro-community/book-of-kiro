---
title: "Security and Privacy Settings"
weight: 90
---

# **Security and Privacy Settings**

## **Autopilot Mode vs Supervised Mode — Which is Right for You?**

### **Autopilot Mode (Default)**

```md
# Suitable for

- Value development speed
- Trust AI judgment
- Working in local development environment

# How it works

- Automatically executes file creation, editing, and deletion
- Automatically executes commands (only those in trusted list)
- Can be interrupted at any time with "Stop" command

# Usage example

"Help me implement user authentication"
→ Automatically creates all necessary files and completes implementation
```

### **Supervised Mode (For the Cautious)**

```md
# Suitable for

- Working in production environment
- Important projects
- Want to carefully confirm every AI action

# How it works

- Confirmation dialog appears before each operation
- "Are you sure you want to create this file?"
- "Are you sure you want to execute this command?"

# How to switch

Switch the "Autopilot" toggle in the chat interface to OFF
```

## **Trusted Command Management**

Read-only commands are executed automatically, such as:

```BASH
ls      # List directory contents
cat     # Display file contents
echo    # Output strings
pwd     # Show current directory
which   # Find command path
head    # View beginning of file
tail    # View end of file
find    # File search
grep    # String search
```

Adding custom commands:

```JSON
// Settings → Kiro Agent: Trusted Commands
[
  "npm test",
  "npm run build",
  "git status",
  "git diff",
  "docker ps",
  "docker-compose up",
  "jest",
  "prettier --write"
]
```

Never add dangerous commands:

```BASH
# These commands should NEVER be added!
rm -rf
sudo
chmod 777
curl | sh
eval

```

> If you really want to allow all commands to execute, you can directly add `*` to trust all commands. **Please fully understand the risks of trusting all commands**

## **Data Privacy and Telemetry**

### **Opt-out Method**

````md
# Method 1: Through Settings Interface

Settings → Application → Telemetry and Content → Disabled

# Method 2: Through settings.json Configuration

```json
{
  "telemetry": {
    "enabled": false
  },
  "usageStatisticsEnabled": false
}
```
````

### **Data Collected**

Collected content includes:

- Features used (Specs, Hooks, etc.)
- Error messages
- Performance metrics
- Operating system information
  Not collected:
- Code content
- Prompt content (if disabled in settings)
- File paths
- Personal information

### **Per-Project Settings**

```BASH
# Global settings (applies to all projects)
~/.kiro/settings.json

# Project-specific settings (higher priority)
.kiro/settings.json

# Recommended to add to .gitignore
.kiro/settings.json  # If it contains sensitive information like API keys

```

## **Chat History Location**

Currently Kiro does not have chat session export capability. Raw JSON format chat information is saved at:

- Windows: `~\AppData\Roaming\Kiro\User\globalStorage\kiro.kiroagent\<userid>\*.chat`

## **Security Best Practices**

### **1. Use Environment Variables to Manage API Keys**

```json
# ❌ Bad example: Write directly in settings.json
{
  "mcpServers": {
    "github": {
      "env": {
        "GITHUB_TOKEN": "ghp_actualTokenHere"  # Dangerous!
      }
    }
  }
}

# ✅ Good example: Reference environment variables
{
  "mcpServers": {
    "github": {
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"  # Read from environment variable
      }
    }
  }
}

# Add to .zshrc or .bashrc
export GITHUB_TOKEN="ghp_xxxx"
export BRAVE_API_KEY="BSA_xxxx"
```

### **2. Permission Isolation Per Project**

```json
# Production project
.kiro/settings.json
{
  "sandbox": "docker",        # Enable sandbox environment
  "autoAccept": false,        # Disable auto-approval
  "excludeTools": ["run_shell_command"]  # Prohibit Shell command execution
}

# Development project
.kiro/settings.json
{
  "sandbox": false,           # Disable sandbox (improve speed)
  "autoAccept": false,        # Still disable auto-approval
  "coreTools": ["all"]        # Allow all tools
}

```

### **3. Set .gitignore File**

```BASH
# .gitignore
.env
.env.local
.kiro/settings.json    # May contain API keys
.kiro/cache/           # Cache files
*.log                  # Log files

# But the following should be committed
.kiro/steering/        # Share project knowledge
.kiro/hooks/           # Share Hook configuration
.kiro/specs/           # Share specifications

```

## **Configure Whitelist for Enterprise Firewalls**

You can refer to the [official documentation](https://kiro.dev/docs/privacy-and-security/firewalls/) to configure a whitelist for your enterprise firewall.

Currently the whitelist addresses in the official documentation are incomplete. In addition to the content in the documentation, you also need to add the following domains to the whitelist:

- `codewhisperer.us-east-1.amazonaws.com`
- `prod.us-east-1.telemetry.kiro.aws.dev`

The domain used when downloading Kiro is: `prod.download.desktop.kiro.dev`

## **Private Network Access**

Kiro provides VPC Endpoints to ensure that all **data traffic (traffic interacting with large models)** does not leave the private network. However, other traffic (such as login, authentication, etc.) still needs to go through the public network.

You can refer to the [official website configuration tutorial](https://kiro.dev/docs/privacy-and-security/vpc-endpoints/) to configure VPC Endpoints.

## **How Enterprise Users Can Audit Chat Information**

If you log in to Kiro using an Amazon Q Developer Pro account, you can enable prompt logging in the Amazon Q Developer console. Refer to the [official documentation](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/q-admin-prompt-logging.html).
