---
title: "Complete Troubleshooting Guide"
weight: 99
---

# **Complete Troubleshooting Guide**

## **Common IDE Errors and Solutions**

### **High CPU/Memory Usage**

1. Ensure you're upgraded to version v0.6.0 or above
2. Ensure Codebase Indexing is disabled in settings

Reason: The Codebase Indexing feature indexes project files, which may consume considerable CPU and memory resources, especially for large projects. If you don't need this feature, it's recommended to disable it to improve performance. Version v0.6.0 disables this feature by default and provides a toggle option in settings.

### **No `#Codebase` and `#Repository Map` options in context menu**

These two options require enabling Codebase Indexing in settings to activate. However, note that enabling Codebase Indexing may cause high CPU/memory usage.

In the Agentic Coding era, Codebase indexing based on Local RAG is no longer essential. It consumes extra performance (CPU and memory), has unstable recall, and can be replaced with the fs_search tool or similar CLI tools, often with better results. Therefore, it's not recommended.

Suggested workarounds:

- Directly tell the AI "search for XXX in the codebase" through chat, using the fs_search tool
- Use specialized CLI tools like [ast-grep](https://github.com/ast-grep/ast-grep) for code search

### **Cannot input Chinese after adding code using Ctrl+L shortcut**

This issue is tracked in [GitHub Issue](https://github.com/kirodotdev/Kiro/issues/1505).

Temporary solution: After using `Ctrl+L`, press space in the input box to enable Chinese input.

After version v0.5.0, Kiro automatically adds a space after `Ctrl+L`, allowing Chinese input. However, if users delete this space, they need to manually add a space.

### **Error when executing MCP Tool**

Error: Improperly formed request or An unexpected error occurred

This is usually due to non-standard MCP Tool description format, especially the `input_schema` field, which needs to strictly be valid JSON Schema. Please check if your MCP Server is the latest version.

### **How to enable automatic code completion**

By default, Kiro's automatic code completion is enabled. You can click the Autocomplete button in the bottom bar to view and modify auto-completion settings.

### **How to generate Chinese Commit Messages**

Currently, the 🪄 button in the version control interface cannot customize language and can only generate English messages, and is not affected by Steering files.

Workaround: Through the chat panel, tell Kiro: "Commit current changes using Chinese commit message," and have Kiro implement the commit through git command line.

For a smoother experience, you can create a manually triggered Agent Hook, reference content (`.kiro\hooks\manual-git-commit.kiro.hook`):

```json
{
  "enabled": true,
  "name": "Git Commit",
  "description": "Manually triggered hook for committing current changes to Git using Chinese commit messages",
  "version": "1",
  "when": {
    "type": "userTriggered"
  },
  "then": {
    "type": "askAgent",
    "prompt": "View current git changes using git status and git diff commands. Create a meaningful Chinese commit message describing these changes. Then execute: git add -A && git commit -m \"[your Chinese commit message]\". The commit message should be clear, concise, follow good commit message conventions, and be written entirely in Chinese."
  }
}
```

This way, when you need to commit, just trigger the Agent Hook.

### **Updating Kiro**

Open the command palette (Cmd+Shift+P), type "Kiro: Check for Updates", and restart Kiro after updating.

### **macOS: "Kiro is damaged" error**

````md
# Error Message

"Kiro is damaged and can't be opened. You should move it to the Trash"

# Cause

macOS Gatekeeper false positive

# Solutions (try in order of simplicity)

# Method 1: Authorize through System Settings

1. Open "System Settings" → "Privacy & Security"
2. Click "Allow Anyway" next to the prompt "Cannot verify developer identity of Kiro"
3. Reopen Kiro

# Method 2: Move file to reset

1. Drag Kiro.app to Desktop
2. Drag it back to "Applications" folder from Desktop
3. Try to open

# Method 3: Remove attributes via command line

```bash
sudo xattr -d com.apple.quarantine /Applications/Kiro.app
```
````

### **Timed out waiting for authentication provider 'kiro' to register**

Refer to [Login/Logout Issues](#login-logout-issues) below to check if the system browser can be properly invoked and if the callback port is occupied.

### **Kiro access not available for this account**

- If using personal account (GitHub / Google / AWS Builder ID), ensure the account has been activated with an activation code. During Kiro preview phase, AWS Builder ID can enter the application without an activation code, but requires a paid subscription to use normally.
- If using enterprise account, logging in with Identity Center, confirm if the user is subscribed through a [Group]. If subscribed through a [Group], wait up to 24 hours for activation.

### **File editing failure**

**Principle**: When the Agent edits a file, it first searches for a pattern, then replaces it with a new code block. If this pattern has multiple matches or no matches in the file, the agent cannot replace the code block and will error.

**Common causes include:**

1. File was modified by humans or other tools without being re-read by AI
2. File is too long, causing simple patterns to appear multiple times in the same file
3. Pattern to search is too complex or contains special characters, causing LLM to generate invalid or non-existent search patterns
4. LLM's own hallucination causes search pattern to not exist or be incorrectly formatted

**Mitigation methods:**

1. Tell AI to use shell commands or scripts for file editing
2. Have AI generate correct or more accurate search pattern and retry
3. Have AI explain its approach, manually edit file

### **Cannot use Shell integration**

````md
# Error Message

"Shell integration not available"

# Try automatic fix

1. Press Cmd/Ctrl+Shift+P to open command palette
2. Execute "Kiro: Enable Shell Integration"
3. Restart Kiro

# Manual fix method

```sh
# Zsh (macOS default)
echo '[["$TERM_PROGRAM" == "kiro"]] && . "$(kiro --locate-shell-integration-path zsh)"' >> ~/.zshrc
source ~/.zshrc

# Bash
echo '[["$TERM_PROGRAM" == "kiro"]] && . "$(kiro --locate-shell-integration-path bash)"' >> ~/.bashrc
source ~/.bashrc

# Fish
echo 'string match -q "$TERM_PROGRAM" "kiro"' >> ~/.config/fish/config.fish
echo 'and . (kiro --locate-shell-integration-path fish)' >> ~/.config/fish/config.fish

# PowerShell (Windows)
Add-Content $PROFILE 'if ($env:TERM_PROGRAM -eq "kiro") { . "$(kiro --locate-shell-integration-path pwsh)" }'
```
````

### **Authentication error (IAM Identity Center)**

- No Q Developer Pro subscription → Please use Builder ID or social account login
- Region setting error → Please confirm the IAM Identity Center region used by the company (not the Amazon Q Developer subscription region).
- Start URL error → Please contact IT department to confirm correct URL. Example: https://your-company.awsapps.com/start

### **MCP server connection error**

````md
# Common errors and solutions

# Error: Command not found

→ Required tools not installed

# For AWS Docs Server

```sh
curl -LsSf https://astral.sh/uv/install.sh | sh
uv python install 3.10
```

# For Error: Timeout

→ Increase timeout
"timeout": 30000 # 30 seconds

# For Error: Permission denied

→ Check API keys and authentication information

```sh
echo $GITHUB_TOKEN
echo $BRAVE_API_KEY
```

# Debugging method

1. Open Output → "Kiro - MCP Logs" to view logs
2. Use /mcp command to check server status
3. Manually execute server commands for testing
````

### **File not found or cannot read**

```BASH
# Check .gitignore impact
cat .gitignore

# Check Kiro configuration
{
  "fileFiltering": {
    "respectGitIgnore": false  # Temporarily disable
  }
}

# For large files
"@large-file.log:1000-2000"  # Specify line number range for partial read

```

### **Login/Logout Issues**

Here are methods to troubleshoot login/logout issues on Windows. Mac/Linux users can refer to the process.

````md
## 1) First open logs the "official recommended" way

1. Open _Command Prompt_ (CMD) as **administrator**.
2. Run (replace with your installation path):

```sh
"%LocalAppData%\Programs\Kiro\Kiro.exe" --enable-logging
```

> This is Kiro's Windows troubleshooting method, allowing you to see error messages during authentication (such as permissions or callback failures). [Kiro](https://kiro.dev/docs/reference/troubleshooting/)

---

## 2) Quick self-check: Can system invoke default browser

Try in the same CMD:

```sh
start "" "https://example.com"
```

- Opens: Default browser association is normal.
- Doesn't open: Go to **Settings → Apps → Default apps**, associate **HTTPS** with Edge/Chrome, then try again.

> Kiro login "takes you to the default browser to complete verification". If the browser can't open at system level, Kiro naturally won't pop up. [Kiro](https://kiro.dev/docs/reference/auth-methods/)

---

## 3) Check callback port (focus: `localhost:3128`)

Kiro login starts a callback listener locally, commonly **`http://127.0.0.1:3128`**; after browser login succeeds, it redirects back here. If this port is occupied/reserved by system, browser **can't come back** even if opened, or login process can't start at all. [Hacker News](https://news.ycombinator.com/item?id=44562163&utm_source=chatgpt.com)[GitHub](https://github.com/kirodotdev/Kiro/issues/571)

Check if any program is using 3128:

```sh
netstat -ano -p tcp | findstr :3128
```

- If you see `LISTENING`/`ESTABLISHED`, note the PID, end it in "Task Manager" (or `taskkill /PID <pid> /F`).
  - Common occupants: proxy/packet capture tools (Fiddler, CNTLM, Zscaler, etc.).

Check if 3128 is **reserved as excluded port** by Windows (Excluded Port Range):

```sh
netsh int ipv4 show excludedportrange protocol=tcp
```

- If the output range includes 3128, the port **cannot be bound**, Kiro cannot start callback service (this causes "can't open browser/stuck login").

Release 3128 exclusion reservation (requires administrator CMD, execute **carefully**):

```sh
netsh int ipv4 delete excludedportrange protocol=tcp startport=3128 numberofports=1
```

> Some users on Windows encountered "login doesn't pop up/doesn't redirect", confirmed related to **3128 port conflict/reserved by system**; releasing reservation or avoiding conflict restored it. [GitHub](https://github.com/kirodotdev/Kiro/issues/571)[Hacker News](https://news.ycombinator.com/item?id=44562163&utm_source=chatgpt.com)

> ⚠️ If you've changed the system dynamic port range, record original values; Windows default dynamic ports are generally `start=49152 num=16384`, viewable with
> `netsh int ipv4 show dynamicport tcp`, restore if necessary with
> `netsh int ipv4 set dynamicport tcp start=49152 num=16384`.

---

## 4) Clean cache "affecting login"

### Windows

First completely exit Kiro (or `taskkill /IM Kiro.exe /F`), then delete:

```sh
rmdir /S /Q "%AppData%\Kiro"
rmdir /S /Q "%UserProfile%\.kiro"
rmdir /S /Q "%UserProfile%\.aws\sso\cache"
rmdir /S /Q "%LocalAppData%\Kiro"
```

> These are corresponding local state directories on Windows; cleaning often restores "stuck waiting for auth provider" issues. [Kiro](https://kiro.dev/docs/reference/troubleshooting/)

Restart Kiro and retry login.

### MacOS

`rm ~/.aws/sso/cache/kiro-auth-token.json`

Restart Kiro and retry login.

---

## 5) If you're using **IAM Identity Center** login

- **Must have Q Developer Pro subscription** to use Identity Center login method; otherwise "sign-in error" will occur. [Kiro](https://kiro.dev/docs/reference/troubleshooting/)
- Kiro currently **defaults to using us-east-1** for Identity Center login; if your directory/configuration is in another Region, login will fail. You can temporarily switch to **Builder ID / GitHub / Google** login, or configure directory to that Region. [Kiro](https://kiro.dev/docs/reference/troubleshooting/)
- Common login/session issues for IAM Identity Center can be found in official troubleshooting. [AWS Docs+1](https://docs.aws.amazon.com/singlesignon/latest/userguide/troubleshooting.html?utm_source=chatgpt.com)

---

## 6) One-click self-check script (PowerShell)

Paste the following into PowerShell **run as administrator**:

```batch
Write-Host "== Check default browser open =="
Start-Process "https://example.com"

Write-Host "`n== Check port 3128 usage =="
netstat -ano -p tcp | Select-String ":3128"

Write-Host "`n== Check excluded port ranges (tcp) =="
netsh int ipv4 show excludedportrange protocol=tcp

Write-Host "`n== Launch Kiro with logging =="
$kiro = "$env:LocalAppData\Programs\Kiro\Kiro.exe"
if (Test-Path $kiro) {
  Start-Process $kiro -ArgumentList "--enable-logging"
} else {
  Write-Warning "Kiro.exe not found at $kiro"
}
```

---

### Verification after success

- After browser pops up, authorization should automatically return to Kiro; if browser address bar shows `http://127.0.0.1:3128/...`, callback port is normal. [Hacker News](https://news.ycombinator.com/item?id=44562163&utm_source=chatgpt.com)
````

### **Login error: Something doesn't compute**

First confirm if StartURL and Region are selected correctly during login. If needed, contact your administrator for correct StartURL and Region.

If the error message is: "Something doesn't compute: We couldn't verify your login credentials, please try again," it means your username or password is incorrect.

If the above information is correct, check if your system time is correct.

### **How to clear local login cache**

Please delete this file: `~/.aws/sso/cache/kiro-auth-token.json`

### **Improperly formed request**

Usually caused by LLM hallucination, you can tell the AI "retry" or "continue" or "go on". If it fails multiple times, try starting a new session.

### **An unexpected error occurred**

Usually caused by unstable network, you can tell the AI "retry" or "continue" or "go on". If it fails multiple times, try starting a new session or troubleshoot network connection.

### **Dispatch failure**

Usually caused by unstable network, you can tell the AI "retry" or "continue" or "go on". If it fails multiple times, try starting a new session or troubleshoot network connection.

### **Why do I have to login every day? How to extend session time?**

If you log in using IAM Identity Center, you can set the session validity time to 90 days in IAM Identity Center to avoid frequent logins. Refer to [official documentation](https://docs.aws.amazon.com/singlesignon/latest/userguide/90-day-extended-session-duration.html).

### **Advanced debugging techniques**

```BASH
# View Kiro service logs
View -> Output

# Enable Kiro logging
kiro --enable-logging

# Open developer tools
Help → Toggle Developer Tools → Console

# View current configuration
cat ~/.kiro/settings.json
cat .kiro/settings.json

# View memory (context) content
/memory show

# Manually test MCP server
# Using GitHub server as example
npx @modelcontextprotocol/server-github

# Check network issues
curl -I https://api.github.com
curl -I https://kiro.dev

```

### **Clear local files**

If the above methods can't make Kiro work properly, you can also try completely clearing local files and reinstalling Kiro.

#### Windows

- Stop all running Kiro processes
  - `taskkill /f /im Kiro.exe`
- Uninstall (if using user-level installation)
  - `rmdir /s /q "%LOCALAPPDATA%\Programs\kiro"`
- Uninstall (if using system-level installation)
  - `if exist "%PROGRAMFILES%\kiro" rmdir /s /q "%PROGRAMFILES%\kiro"`
- Delete all user data and settings
  - `rmdir /s /q "%APPDATA%\Kiro"`
- Delete extensions
  - `rmdir /s /q "%USERPROFILE%\.kiro"`
- Remove from Program Files (x86)
  - `if exist "%PROGRAMFILES(X86)%\kiro" rmdir /s /q "%PROGRAMFILES(X86)%\kiro"`
- Remove from desktop icon and start menu
  - `if exist "%USERPROFILE%\Desktop\kiro.lnk" del /q "%USERPROFILE%\Desktop\kiro.lnk"`
  - `if exist "%APPDATA%\Microsoft\Windows\Start Menu\Programs\kiro" rmdir /s /q "%APPDATA%\Microsoft\Windows\Start Menu\Programs\kiro"`

#### MacOS

- Delete `~/.kiro`
- Delete `Library/Application Support/Kiro`

## **Common CLI Errors**

### **Error when executing MCP Tool**

Error: Improperly formed request or An unexpected error occurred

Usually due to non-standard MCP Tool description format, especially the `input_schema` field, which needs to strictly be valid JSON Schema

You can use the `/tools schema` subcommand to view MCP Tool description and confirm if the `input_schema` field is valid

### **Crash when using Apple native Terminal**

It's recommended to use iTerm2 as Terminal for Kiro CLI.

If you need to troubleshoot crash causes, try using [this script](https://gist.github.com/DiscreteTom/601bdd428ccb4079eb5e01fb914769fd) to collect Terminal logs and give to Kiro CLI for troubleshooting

### **How to restore default Agent**

When using Kiro CLI, if you set a default Agent via `/agent set-default --name <NAME>` and want to restore the default Agent, use the command `kiro-cli settings --delete chat.defaultAgent` to delete the setting and restore the default Agent

### **Cannot upgrade**

After configuring VPC Endpoint, you may not be able to upgrade CLI using `kiro-cli update`. This is because upgrading requires accessing `desktop-release.q.us-east-1.amazonaws.com`, which is a subdomain of Q's VPC Endpoint. If you need to upgrade, refer to [this documentation](https://kiro.dev/docs/cli/installation/#with-a-zip-file), download the zip installation package from the public network and install manually.

### **byte index is not a char boundary**

Kiro CLI is written in Rust and has strict requirements for UTF-8 string legality. This error indicates Kiro CLI processed an invalid UTF-8 string, please check if local files contain invalid UTF-8 characters

### **How to define and pass parameters in Prompt**

Currently only MCP Prompt supports parameters. You can use [shinkuro](https://github.com/DiscreteTom/shinkuro) or similar MCP servers to convert file prompts to MCP prompts, thus supporting parameters

## **User Management**

### **How to implement subscription or batch subscription using API?**

Currently Kiro does not have public API/SDK, but there is a community solution that implements batch subscription (or API-based auto-subscription) by manually constructing SigV4 signatures. See this [GitHub Repo](https://github.com/DiscreteTom/kiro-management-api).

## **Issue Reporting**

### **IDE Issue Reporting**

If it's an occasional issue (e.g., AI hallucination, incorrect command parameters), this is normal. If Kiro can stably reproduce a problem, it's recommended to obtain Logs and provide them to AWS Support or AWS solutions architect.

**How to obtain logs:**

1. Open Kiro's OUTPUT. Click View in menu bar, then click Output to open panel
2. Dropdown to select Kiro-related logs, such as Kiro Logs. You can see which log has errors
3. Click gear button, select Trace type logs
4. You can click options button to open logs in editor for copying and saving

![](/book-of-kiro/images/kiro_log.png)

In addition to logs in the OUTPUT panel above, you can also try viewing page logs. Click Help -> Toggle Developer Tools in the top bar to open developer tools, click the Console panel to view logs.

After collecting logs, click the "Report issue" button in Kiro's bottom bar to report the issue

### **How to view Kiro CLI logs**

Latest version of Kiro CLI can use the `/logdump` command to save logs as a ZIP file.

### **I have a Kiro CLI issue I want to report to the product team, what information do I need to provide?**

To speed up our troubleshooting of your issue, we recommend you reproduce the issue and provide the following information to AWS Support or AWS solutions architect:

**Required:**

1. Log information (recommended to remove sensitive information). Refer to above for obtaining CLI logs
2. CLI version information, use `kiro-cli --version` to check current version. If not latest version, try executing `kiro-cli update` to upgrade to latest version, then check if issue still exists
3. Operating system version information, such as Windows 11
4. Issue description and what troubleshooting has been done

**Optional:** Video or screenshot of the issue (if you can provide video or screenshot of the issue, it will help us troubleshoot)
