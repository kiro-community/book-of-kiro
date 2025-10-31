---
title: "故障排查完全指南"
weight: 99
---

# **故障排查完全指南**

## **常见错误及解决方案**

### **使用快捷键 Ctrl+L 添加代码后无法输入中文**

此问题在 [GitHub Issue](https://github.com/kirodotdev/Kiro/issues/1505) 中有跟进。

暂时的解决方案是：使用 `Ctrl+L` 后，在输入框敲一个空格就可以输入中文了。

v0.5.0 版本以后，Kiro 会自动在 `Ctrl+L` 后添加一个空格，此时可以输入中文。但是如果用户删除了这个空格，就要手动添加空格了

### **更新 Kiro**

打开命令面板 (Cmd+Shift+P)，输入“Kiro: Check for Updates”，并在更新后重新启动 Kiro。

### **macOS：「Kiro 已损坏」错误**

````md
# 错误信息

"Kiro 已损坏，无法打开。你应该将它移到废纸篓。" / "Kiro is damaged and can't be opened. You should move it to the Trash"

# 原因

macOS 的 Gatekeeper 误报导致

# 解决方法（按简单顺序尝试）

# 方法 1：通过系统设置授权

1. 打开「系统设置」→「隐私与安全性」
2. 在提示「无法确认开发者身份的 Kiro」旁点击「仍然允许」
3. 重新打开 Kiro

# 方法 2：移动文件重置

1. 将 Kiro.app 拖到桌面
2. 再从桌面拖回「应用程序」文件夹
3. 尝试打开

# 方法 3：通过命令行删除属性

```bash
sudo xattr -d com.apple.quarantine /Applications/Kiro.app
```
````

### **Timed out waiting for authentication provider 'kiro' to register**

参考下文 [登录退出异常](#登录退出异常)，排查系统浏览器是否可以被正常唤起，以及回调端口是否被占用

### **Kiro access not available for this account**

- 如果使用个人账号（GitHub / Google / AWS Builder ID），请确保已获得激活码激活账号。在 Kiro 预览阶段，AWS Builder ID 不需要激活码即可进入应用，但是需要付费订阅才可以正常使用。
- 如果使用企业账号，使用 Identity Center 进行登录，请确认是否用户是通过【组】进行订阅，如果是通过【组】进行订阅，则需要等待最长 24 小时的激活时间。

### **编辑文件失败**

**原理**: Agent 在编辑文件时会先搜索一个 pattern，然后替换它为新的代码块。如果这个 pattern 在文件中有多个匹配或者没有匹配，agent 就会无法替换代码块从而报错。

**通常导致这些问题的原因包括：**

1. 文件被人类或其他工具修改后没有被 AI 重新读取
2. 文件太长，导致简单的 pattern 在同一个文件中出现多次
3. 需要搜索的 pattern 过于复杂或存在特殊字符，导致 LLM 生成的 search pattern 不合法或不存在
4. LLM 自身的幻觉导致 search pattern 不存在或格式错误

**缓解方式：**

1. 告诉 AI 使用 shell 命令或脚本进行文件编辑
2. 让 AI 生成正确的或更加准确的搜索 Pattern 后重试
3. 让 AI 说出它的思路，人工编辑文件

### **无法使用 Shell 集成**

````md
# 错误信息

"Shell 集成不可用"

# 尝试自动修复

1. 按 Cmd/Ctrl+Shift+P 打开命令面板
2. 执行 "Kiro: Enable Shell Integration"
3. 重启 Kiro

# 手动修复方法

```sh
# Zsh（macOS 默认）
echo '[["$TERM_PROGRAM" == "kiro"]] && . "$(kiro --locate-shell-integration-path zsh)"' >> ~/.zshrc
source ~/.zshrc

# Bash
echo '[["$TERM_PROGRAM" == "kiro"]] && . "$(kiro --locate-shell-integration-path bash)"' >> ~/.bashrc
source ~/.bashrc

# Fish
echo 'string match -q "$TERM_PROGRAM" "kiro"' >> ~/.config/fish/config.fish
echo 'and . (kiro --locate-shell-integration-path fish)' >> ~/.config/fish/config.fis

# PowerShell（Windows）
Add-Content $PROFILE 'if ($env:TERM_PROGRAM -eq "kiro") { . "$(kiro --locate-shell-integration-path pwsh)" }'
```
````

### **认证错误（IAM Identity Center）**

- 没有 Q Developer Pro 订阅 → 请使用 Builder ID 或社交账号登录
- 区域设置错误 → 请确认公司使用的 IAM Identity Center 的区域（不是 Amazon Q Developer 订阅的区域）。
- Kiro 目前仅支持 us-east-1 区域的订阅，请确保 Amazon Q Developer 的订阅在 us-east-1。
- Start URL 错误 → 请联系 IT 部门确认正确的 URL。示例：https://your-company.awsapps.com/start

### **MCP 服务器连接错误**

````md
# 常见错误及解决方法

# Error: Command not found

→ 未安装必要的工具

# 针对 AWS Docs Server

```sh
curl -LsSf https://astral.sh/uv/install.sh | sh
uv python install 3.10
```

# 针对 Error: Timeout

→ 增加超时时间
"timeout": 30000 # 30 秒

# 针对 Error: Permission denied

→ 检查 API 密钥和认证信息

```sh
echo $GITHUB_TOKEN
echo $BRAVE_API_KEY
```

# 调试方法

1. 打开 Output → "Kiro - MCP Logs" 查看日志
2. 通过 /mcp 命令检查服务器状态
3. 手动执行服务器命令进行测试
````

### **文件未找到或无法读取**

```BASH
# 确认 .gitignore 的影响
cat .gitignore

# 确认 Kiro 的配置
{
  "fileFiltering": {
    "respectGitIgnore": false  # 临时禁用
  }
}

# 对于大文件的情况
"@large-file.log:1000-2000"  # 指定行号范围部分读取

```

### **登录退出异常**

以下是 Windows 环境排查登录退出异常的方法，Mac/Linux 用户可以参考流程。

````md
## 1) 先用“官方建议”的方式打开日志

1. 以**管理员**打开 _命令提示符_（CMD）。
2. 运行（按你的安装路径替换）：

```sh
"%LocalAppData%\Programs\Kiro\Kiro.exe" --enable-logging
```

> 这是 Kiro 文档给 Windows 的排查方式，能看到认证时的错误信息（比如权限或回调失败）。[Kiro](https://kiro.dev/docs/reference/troubleshooting/)

---

## 2) 快速自检：默认浏览器能否被系统调用

在同一个 CMD 里试：

```sh
start "" "https://example.com"
```

- 能打开：默认浏览器关联正常。
- 打不开：去 **设置 → 应用 → 默认应用**，把 **HTTPS** 关联到 Edge/Chrome，然后再试一次。

> Kiro 登录会“把你带到默认浏览器完成验证”。如果系统层面打不开浏览器，Kiro 自然不会弹。[Kiro](https://kiro.dev/docs/reference/auth-methods/)

---

## 3) 检查回调端口（重点：`localhost:3128`）

Kiro 登录会在本地起一个回调监听，常见是 **`http://127.0.0.1:3128`**；浏览器登录成功后会重定向回这里。若这个端口被占用/被系统保留，浏览器就算打开了也**回不来**，或者根本起不来登录流程。 [Hacker News](https://news.ycombinator.com/item?id=44562163&utm_source=chatgpt.com)[GitHub](https://github.com/kirodotdev/Kiro/issues/571)

看有没有程序占用 3128：

```sh
netstat -ano -p tcp | findstr :3128
```

- 如果看到 `LISTENING`/`ESTABLISHED`，记下 PID，在“任务管理器”结束它（或 `taskkill /PID <pid> /F`）。
  - 常见占用者：代理/抓包工具（Fiddler、CNTLM、Zscaler 等）。

看 3128 是否被 Windows **保留为排除端口**（Excluded Port Range）：

```sh
netsh int ipv4 show excludedportrange protocol=tcp
```

- 如果输出范围里包含 3128，则该端口**不可绑定**，Kiro 无法启动回调服务（这会导致“打不开浏览器/卡登录”）。

释放 3128 的排除占位（需要管理员 CMD，**谨慎**执行）：

```sh
netsh int ipv4 delete excludedportrange protocol=tcp startport=3128 numberofports=1
```

> 有用户在 Windows 上遇到“登录不弹/不回跳”，确认与 **3128 端口冲突/被系统保留**有关；释放占位或避免冲突即可恢复。[GitHub](https://github.com/kirodotdev/Kiro/issues/571)[Hacker News](https://news.ycombinator.com/item?id=44562163&utm_source=chatgpt.com)

> ⚠️ 如果你改动过系统动态端口范围，请记录原值；Windows 默认动态端口一般为 `start=49152 num=16384`，可用
> `netsh int ipv4 show dynamicport tcp` 查看，必要时用
> `netsh int ipv4 set dynamicport tcp start=49152 num=16384` 恢复。

---

## 4) 清理“对登录有影响”的缓存

### Windows

先完全退出 Kiro（或 `taskkill /IM Kiro.exe /F`），然后删除：

```sh
rmdir /S /Q "%AppData%\Kiro"
rmdir /S /Q "%UserProfile%\.kiro"
rmdir /S /Q "%UserProfile%\.aws\sso\cache"
rmdir /S /Q "%LocalAppData%\Kiro"
```

> 这些是 Windows 上对应的本地状态目录；清理后常能恢复“卡住等待认证提供方”的问题。[Kiro](https://kiro.dev/docs/reference/troubleshooting/)

再启动 Kiro 重试登录。

### MacOS

`rm ~/.aws/sso/cache/kiro-auth-token.json `

再启动 Kiro 重试登录。

---

## 5) 如果你用的是 **IAM Identity Center** 登录

- **必须有 Q Developer Pro 订阅**才可用 Identity Center 登录方式；否则会报“签入错误”。[Kiro](https://kiro.dev/docs/reference/troubleshooting/)
- Kiro 目前 **默认使用 us-east-1** 做 Identity Center 登录；如果你的目录/配置在别的 Region，会导致无法登录。此时可暂时改用 **Builder ID / GitHub / Google** 登录，或把目录配到该 Region。[Kiro](https://kiro.dev/docs/reference/troubleshooting/)
- IAM Identity Center 的常见登录/会话问题可参考官方故障排查。[AWS 文档+1](https://docs.aws.amazon.com/singlesignon/latest/userguide/troubleshooting.html?utm_source=chatgpt.com)

---

## 6) 一键自检脚本（PowerShell）

把下面内容粘到 **以管理员身份**运行的 PowerShell：

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

### 成功后的验证

- 浏览器弹出后，完成授权应自动回到 Kiro；若浏览器地址栏出现 `http://127.0.0.1:3128/...`，说明回调端口正常。 [Hacker News](https://news.ycombinator.com/item?id=44562163&utm_source=chatgpt.com)
````

### **Improperly formed request**

通常是由于 LLM 的幻觉导致，可以告诉 AI “重试” 或者 “继续” 或者 “go on”，如果多次重试仍然失败，可以尝试重新开始会话。

### **An unexpected error occurred**

通常是网络不稳定导致，可以告诉 AI “重试” 或者 “继续” 或者 “go on”，如果多次重试仍然失败，可以尝试重新开始会话，或排查网络连接。

### **Dispatch failure**

通常是网络不稳定导致，可以告诉 AI “重试” 或者 “继续” 或者 “go on”，如果多次重试仍然失败，可以尝试重新开始会话，或排查网络连接。

### **为什么每天都要登录一次？如何延长会话时间？**

如果您使用 IAM Identity Center 进行登录，您可以在 IAM Identity Center 中设置会话有效时间为 90 天，来避免频繁登录。参考[官方文档](https://docs.aws.amazon.com/singlesignon/latest/userguide/90-day-extended-session-duration.html)。

## **高级调试技巧**

```BASH
# 查看 Kiro 各服务的日志
View -> Output

# 启用 Kiro 日志
kiro --enable-logging

# 打开开发者工具
Help → Toggle Developer Tools → Console

# 查看当前配置
cat ~/.kiro/settings.json
cat .kiro/settings.json

# 查看内存（上下文）内容
/memory show

# 手动测试 MCP 服务器
# 以 GitHub 服务器为例
npx @modelcontextprotocol/server-github

# 检查网络问题
curl -I https://api.github.com
curl -I https://kiro.dev

```

## **问题上报**

如果是偶发性的问题（例如，AI 幻觉、命令参数不正确）是正常现象。如果 Kiro 在某个问题上能稳定复现，建议获取 Logs 提供给 AWS Support 或者 AWS 解决方案架构师。

**日志获取方式：**

1. 打开 Kiro 的 OUTPUT。通过点击菜单栏的 View，再点击 Output 打开面板
2. 下拉选择 Kiro 相关的日志，如 Kiro Logs。您可以看下哪个日志里面有报错
3. 点击齿轮按钮，选择 Trace 类型的日志
4. 可以点击选项按钮，在编辑器中打开日志以便复制和保存

![](/book-of-kiro/images/kiro_log.png)

点击 Kiro 底部栏的 "Report a bug / Suggest an idea" 按钮进行问题上报

## **清除本地文件**

如果以上方法无法使 Kiro 正常工作，也可以尝试彻底清除本地文件后重新安装 Kiro。

### Windows

- 停止所有正在运行的 Kiro 进程
  - `taskkill /f /im Kiro.exe`
- 卸载（如果使用的是用户级安装）
  - `rmdir /s /q "%LOCALAPPDATA%\Programs\kiro"`
- 卸载（如果使用的是系统级安装）
  - `if exist "%PROGRAMFILES%\kiro" rmdir /s /q "%PROGRAMFILES%\kiro"`
- 删除所有用户数据和设置
  - `rmdir /s /q "%APPDATA%\Kiro"`
- 删除插件
  - `rmdir /s /q "%USERPROFILE%\.kiro"`
- 从 Program Files (x86) 中删除
  - `if exist "%PROGRAMFILES(X86)%\kiro" rmdir /s /q "%PROGRAMFILES(X86)%\kiro"`
- 从桌面图标和开始菜单中删除
  - `if exist "%USERPROFILE%\Desktop\kiro.lnk" del /q "%USERPROFILE%\Desktop\kiro.lnk"`
  - `if exist "%APPDATA%\Microsoft\Windows\Start Menu\Programs\kiro" rmdir /s /q "%APPDATA%\Microsoft\Windows\Start Menu\Programs\kiro"`

### MacOS

- 删除 `~/.kiro`
- 删除 `Library/Application Support/Kiro`
