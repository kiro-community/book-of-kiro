---
title: "疑難排解"
weight: 24
bookToc: true
---

# **Kiro IDE 常見問題**

## **Error streaming response: Cannot read properties of undefined (reading 'model')**

請嘗試重新啟動 IDE 並檢查系統網路狀態

GitHub Issue: https://github.com/kirodotdev/Kiro/issues/1147

## **Error streaming response: EntryNotFound (FileSystemError)**

請升級至最新版 IDE，並在新建立的會話中互動。舊版本的 Kiro 建立的聊天會話可能存在此問題。

GitHub Issue: https://github.com/kirodotdev/Kiro/issues/3897

## **CPU/記憶體佔用過高**

1. 確保升級到 v0.6.0 版本以上
2. 確保設定中 Codebase Indexing 已停用

原因：Codebase Indexing 功能會對專案檔案進行索引，可能會佔用較多的 CPU 和記憶體資源，特別在專案較大時，資源佔用尤為明顯。如果不需要該功能，建議停用以提升效能。v0.6.0 版本預設停用了此功能，並在設定中提供了開關選項。

## **上下文選單中沒有 `#Codebase` 和 `#Repository Map` 選項**

這兩個選項需要在設定中啟用 Codebase Indexing 才能啟動。但是需要注意：啟用 Codebase Indexing 後可能會導致 CPU/記憶體佔用過高。Agentic Coding 時代基於 Local RAG 的 Codebase indexing 不再是必選項，它會消耗額外效能（CPU 和記憶體），召回效果不穩定，並且可以使用 fs_search tool 或類似的 CLI 代替，甚至效果更好。所以並不建議使用

建議的解決方案:

- 直接透過聊天告訴 AI「在程式碼庫中搜尋 XXX」，利用 fs_search tool 進行搜尋
- 使用 [ast-grep](https://github.com/ast-grep/ast-grep) 等專用 CLI 工具實現相關程式碼搜尋

## **使用快速鍵 Ctrl+L 新增程式碼後無法輸入中文**

此問題在 [GitHub Issue](https://github.com/kirodotdev/Kiro/issues/1505) 中有追蹤。

暫時的解決方案是：使用 `Ctrl+L` 後，在輸入框敲一個空格就可以輸入中文了。

v0.5.0 版本以後，Kiro 會自動在 `Ctrl+L` 後新增一個空格，此時可以輸入中文。但是如果使用者刪除了這個空格，就要手動新增空格了

## **執行 MCP Tool 時報錯**

報錯：Improperly formed request 或 An unexpected error occurred

通常是 MCP Tool 的描述格式不規範，特別是 `input_schema` 欄位，需要嚴格保證為合法的 JSON Schema。請檢查您的 MCP Server 是否為最新版本

## **如何啟用自動程式碼補全**

預設情況下 Kiro 的自動程式碼補全就是啟用的狀態。可以點擊底部欄的 Autocomplete 按鈕來查看和修改自動補全的設定。

## **如何產生中文的 Commit Message**

目前在版本管理介面的 🪄 按鈕無法自訂語言，只能產生英文，也不會受到 Steering 檔案影響。

緩解的方案是：透過聊天面板，告訴 Kiro：「提交目前修改，使用中文 Commit Message」，讓 Kiro 透過 git 命令列實現提交。

為了讓使用更加絲滑，您可以建立一個手動觸發的 Agent Hooks，參考內容(`.kiro\hooks\manual-git-commit.kiro.hook`)：

```json
{
  "enabled": true,
  "name": "Git提交",
  "description": "手動觸發的鉤子，用於將目前修改提交到Git，使用中文提交資訊",
  "version": "1",
  "when": {
    "type": "userTriggered"
  },
  "then": {
    "type": "askAgent",
    "prompt": "查看目前的git修改，使用git status和git diff命令。建立一個有意義的中文提交資訊來描述這些修改。然後執行：git add -A && git commit -m \"[你的中文提交資訊]\"。提交資訊應該清晰、簡潔，遵循良好的提交資訊規範，完全使用中文書寫。"
  }
}
```

這樣，當需要提交的時候，點擊觸發 Agent Hook 即可。

## **Timed out waiting for authentication provider 'kiro' to register**

參考下文 [登入退出異常](#登入退出異常)，排查系統瀏覽器是否可以被正常喚起，以及回呼連接埠是否被佔用

## **Kiro access not available for this account**

如果使用企業帳號，使用 Identity Center 進行登入，請確認是否使用者是透過【組】進行訂閱，如果是透過【組】進行訂閱，則需要等待最長 24 小時的啟動時間。

## **編輯檔案失敗**

現象：使用 fsReplace / fsWrite / fsAppend 等類似工具編輯檔案失敗

**原理**: Agent 在編輯檔案時會先搜尋一個 pattern，然後替換它為新的程式碼區塊。如果這個 pattern 在檔案中有多個匹配或者沒有匹配，agent 就會無法替換程式碼區塊從而報錯。

**通常導致這些問題的原因包括：**

1. 檔案被人類或其他工具修改後沒有被 AI 重新讀取
2. 檔案太長，導致簡單的 pattern 在同一個檔案中出現多次
3. 需要搜尋的 pattern 過於複雜或存在特殊字元，導致 LLM 產生的 search pattern 不合法或不存在
4. LLM 自身的幻覺導致 search pattern 不存在或格式錯誤

**緩解方式：**

0. AI 會自動重試，如果多次重試無果，請使用如下方式手工干預
1. 告訴 AI 使用 shell 命令或腳本進行檔案編輯
2. 讓 AI 產生正確的或更加準確的搜尋 Pattern 後重試
3. 讓 AI 說出它的思路，人工編輯檔案

## **無法使用 Shell 整合**

````md
# 錯誤資訊

「Shell 整合不可用」

# 嘗試自動修復

1. 按 Cmd/Ctrl+Shift+P 開啟命令面板
2. 執行 "Kiro: Enable Shell Integration"
3. 重新啟動 Kiro

# 手動修復方法

```sh
# Zsh（macOS 預設）
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

## **認證錯誤（IAM Identity Center）**

- 沒有 Q Developer Pro 訂閱 → 請使用 Builder ID 或社群帳號登入
- 區域設定錯誤 → 請確認公司使用的 IAM Identity Center 的區域（不是 Amazon Q Developer 訂閱的區域）。
- Start URL 錯誤 → 請聯繫 IT 部門確認正確的 URL。範例：https://your-company.awsapps.com/start

## **MCP 伺服器連線錯誤**

````md
# 常見錯誤及解決方法

# Error: Command not found

→ 未安裝必要的工具

# 針對 AWS Docs Server

```sh
curl -LsSf https://astral.sh/uv/install.sh | sh
uv python install 3.10
```

# 針對 Error: Timeout

→ 增加逾時時間
"timeout": 30000 # 30 秒

# 針對 Error: Permission denied

→ 檢查 API 金鑰和認證資訊

```sh
echo $GITHUB_TOKEN
echo $BRAVE_API_KEY
```

# 除錯方法

1. 開啟 Output → "Kiro - MCP Logs" 查看日誌
2. 透過 /mcp 命令檢查伺服器狀態
3. 手動執行伺服器命令進行測試
````

## **檔案未找到或無法讀取**

```BASH
# 確認 .gitignore 的影響
cat .gitignore

# 確認 Kiro 的設定
{
  "fileFiltering": {
    "respectGitIgnore": false  # 暫時停用
  }
}

# 對於大檔案的情況
"@large-file.log:1000-2000"  # 指定行號範圍部分讀取

```

## **登入退出異常**

以下是 Windows 環境排查登入退出異常的方法，Mac/Linux 使用者可以參考流程。

````md
## 1) 先用「官方建議」的方式開啟日誌

1. 以**系統管理員**開啟 _命令提示字元_（CMD）。
2. 執行（按你的安裝路徑替換）：

```sh
"%LocalAppData%\Programs\Kiro\Kiro.exe" --enable-logging
```

> 這是 Kiro 文件給 Windows 的排查方式，能看到認證時的錯誤資訊（比如權限或回呼失敗）。[Kiro](https://kiro.dev/docs/reference/troubleshooting/)

---

## 2) 快速自檢：預設瀏覽器能否被系統呼叫

在同一個 CMD 裡試：

```sh
start "" "https://example.com"
```

- 能開啟：預設瀏覽器關聯正常。
- 打不開：去 **設定 → 應用程式 → 預設應用程式**，把 **HTTPS** 關聯到 Edge/Chrome，然後再試一次。

> Kiro 登入會「把你帶到預設瀏覽器完成驗證」。如果系統層面打不開瀏覽器，Kiro 自然不會彈。[Kiro](https://kiro.dev/docs/reference/auth-methods/)

---

## 3) 檢查回呼連接埠（重點：`localhost:3128`）

Kiro 登入會在本機起一個回呼監聽，常見是 **`http://127.0.0.1:3128`**；瀏覽器登入成功後會重新導向回這裡。若這個連接埠被佔用/被系統保留，瀏覽器就算開啟了也**回不來**，或者根本起不來登入流程。 [Hacker News](https://news.ycombinator.com/item?id=44562163&utm_source=chatgpt.com)[GitHub](https://github.com/kirodotdev/Kiro/issues/571)

看有沒有程式佔用 3128：

```sh
netstat -ano -p tcp | findstr :3128
```

- 如果看到 `LISTENING`/`ESTABLISHED`，記下 PID，在「工作管理員」結束它（或 `taskkill /PID <pid> /F`）。
  - 常見佔用者：代理/抓包工具（Fiddler、CNTLM、Zscaler 等）。

看 3128 是否被 Windows **保留為排除連接埠**（Excluded Port Range）：

```sh
netsh int ipv4 show excludedportrange protocol=tcp
```

- 如果輸出範圍裡包含 3128，則該連接埠**不可繫結**，Kiro 無法啟動回呼服務（這會導致「打不開瀏覽器/卡登入」）。

釋放 3128 的排除佔位（需要系統管理員 CMD，**謹慎**執行）：

```sh
netsh int ipv4 delete excludedportrange protocol=tcp startport=3128 numberofports=1
```

> 有使用者在 Windows 上遇到「登入不彈/不回跳」，確認與 **3128 連接埠衝突/被系統保留**有關；釋放佔位或避免衝突即可恢復。[GitHub](https://github.com/kirodotdev/Kiro/issues/571)[Hacker News](https://news.ycombinator.com/item?id=44562163&utm_source=chatgpt.com)

> ⚠️ 如果你改動過系統動態連接埠範圍，請記錄原值；Windows 預設動態連接埠一般為 `start=49152 num=16384`，可用
> `netsh int ipv4 show dynamicport tcp` 查看，必要時用
> `netsh int ipv4 set dynamicport tcp start=49152 num=16384` 恢復。

---

## 4) 清理「對登入有影響」的快取

## Windows

先完全退出 Kiro（或 `taskkill /IM Kiro.exe /F`），然後刪除：

```sh
rmdir /S /Q "%AppData%\Kiro"
rmdir /S /Q "%UserProfile%\.kiro"
rmdir /S /Q "%UserProfile%\.aws\sso\cache"
rmdir /S /Q "%LocalAppData%\Kiro"
```

> 這些是 Windows 上對應的本機狀態目錄；清理後常能恢復「卡住等待認證提供方」的問題。[Kiro](https://kiro.dev/docs/reference/troubleshooting/)

再啟動 Kiro 重試登入。

## MacOS

`rm ~/.aws/sso/cache/kiro-auth-token.json `

再啟動 Kiro 重試登入。

---

## 5) 如果你用的是 **IAM Identity Center** 登入

- **必須有 Q Developer Pro 訂閱**才可用 Identity Center 登入方式；否則會報「簽入錯誤」。[Kiro](https://kiro.dev/docs/reference/troubleshooting/)
- Kiro 目前 **預設使用 us-east-1** 做 Identity Center 登入；如果你的目錄/設定在別的 Region，會導致無法登入。此時可暫時改用 **Builder ID / GitHub / Google** 登入，或把目錄設定到該 Region。[Kiro](https://kiro.dev/docs/reference/troubleshooting/)
- IAM Identity Center 的常見登入/會話問題可參考官方疑難排解。[AWS 文件+1](https://docs.aws.amazon.com/singlesignon/latest/userguide/troubleshooting.html?utm_source=chatgpt.com)

---

## 6) 一鍵自檢腳本（PowerShell）

把下面內容貼到 **以系統管理員身分**執行的 PowerShell：

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

## 成功後的驗證

- 瀏覽器彈出後，完成授權應自動回到 Kiro；若瀏覽器網址列出現 `http://127.0.0.1:3128/...`，說明回呼連接埠正常。 [Hacker News](https://news.ycombinator.com/item?id=44562163&utm_source=chatgpt.com)
````

## **登入報錯：有些內容無法計算 (Something doesn't compute)**

出現此類錯誤有多種可能性，請按照如下步驟進行排查：

1. 確認登入 StartURL 和 Region 是否選擇正確。如有需要，請聯繫您的管理員取得正確的 StartURL 和 Region。
2. 如果報錯資訊是：「有些內容無法計算：我們無法驗證您的登入憑證，請重試」，說明您的使用者名稱或密碼填寫有誤。
3. 如果上述資訊無誤，請檢查您的系統時間是否正確。

## **如何清除本機登入快取**

請刪除此檔案：`~/.aws/sso/cache/kiro-auth-token.json`

## **Improperly formed request**

通常是網路切換或者不穩定導致，例如您一開始沒有使用 VPN，突然撥了 VPN。解決方案如下：

1. 嘗試告訴 AI「繼續」或者 "go on"。
2. 如果您不需要目前會話的上下文，嘗試重新開始會話。
3. 如果您需要目前會話的上下文，嘗試重新啟動 Kiro 後，在目前會話輸入「繼續」或者 "go on"。

## **An unexpected error occurred**

"An unexpected error occurred, please retry." 是我們在遇到未被識別或未被明確處理的異常時統一傳回的兜底錯誤資訊。這類錯誤可能由多種原因引起，在某些邊界/異常狀態下處理不完善。包括但不限於以下幾類：

- 圖片處理缺陷
  - 在傳送某些特定類型的圖片時可以重現，例如將一條 Slack 訊息與使用者圖片一起複製貼上傳送。日誌裡例如 "TypeError: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received undefined"。
  - 系統無法處理 HTTP/HTTPS 格式的圖片連結，只能識別 Base64 編碼格式
- MCP 工具
  - 如果 MCP tool 的描述超過 10240 字元會引發錯誤
  - 有些 MCP 工具（例如 "pdf-reader-mcp"）產生了不正確的 input schema （malformed schema，Improperly formed request）給 Kiro
- 網路連線問題
  - 關閉 WiFi 或網路連線中斷時傳送請求會導致相同錯誤
  - 使用 VPN 會導致該問題，許多 VPN 不穩定。

對於以上錯誤，一旦遇到建議優先排查

## **Dispatch failure**

通常是網路切換或者不穩定導致，例如您一開始沒有使用 VPN，突然撥了 VPN。解決方案如下：

1. 嘗試告訴 AI「繼續」或者 "go on"。
2. 如果您不需要目前會話的上下文，嘗試重新開始會話。
3. 如果您需要目前會話的上下文，嘗試重新啟動 Kiro 後，在目前會話輸入「繼續」或者 "go on"。

## **看不到積分用量**

使用 Amazon Q Developer 訂閱登入 Kiro 無法查看用量，請升級到 Kiro 訂閱

## **報錯 read ECONNRESET**

通常是網路切換或者不穩定導致

## **進階除錯技巧**

```BASH
# 查看 Kiro 各服務的日誌
View -> Output

# 啟用 Kiro 日誌
kiro --enable-logging

# 開啟開發者工具
Help → Toggle Developer Tools → Console

# 查看目前設定
cat ~/.kiro/settings.json
cat .kiro/settings.json

# 查看記憶體（上下文）內容
/memory show

# 手動測試 MCP 伺服器
# 以 GitHub 伺服器為例
npx @modelcontextprotocol/server-github

# 檢查網路問題
curl -I https://api.github.com
curl -I https://kiro.dev

```

## **清除本機檔案**

如果以上方法無法使 Kiro 正常工作，也可以嘗試徹底清除本機檔案後重新安裝 Kiro。

### Windows

- 停止所有正在執行的 Kiro 程序
  - `taskkill /f /im Kiro.exe`
- 解除安裝（如果使用的是使用者級安裝）
  - `rmdir /s /q "%LOCALAPPDATA%\Programs\kiro"`
- 解除安裝（如果使用的是系統級安裝）
  - `if exist "%PROGRAMFILES%\kiro" rmdir /s /q "%PROGRAMFILES%\kiro"`
- 刪除所有使用者資料和設定
  - `rmdir /s /q "%APPDATA%\Kiro"`
- 刪除外掛
  - `rmdir /s /q "%USERPROFILE%\.kiro"`
- 從 Program Files (x86) 中刪除
  - `if exist "%PROGRAMFILES(X86)%\kiro" rmdir /s /q "%PROGRAMFILES(X86)%\kiro"`
- 從桌面圖示和開始選單中刪除
  - `if exist "%USERPROFILE%\Desktop\kiro.lnk" del /q "%USERPROFILE%\Desktop\kiro.lnk"`
  - `if exist "%APPDATA%\Microsoft\Windows\Start Menu\Programs\kiro" rmdir /s /q "%APPDATA%\Microsoft\Windows\Start Menu\Programs\kiro"`

### MacOS

- 刪除 `~/.kiro`
- 刪除 `Library/Application Support/Kiro`

## **日誌取得與問題上報**

如果是偶發性的問題（例如，AI 幻覺、命令參數不正確）是正常現象。如果 Kiro 在某個問題上能穩定重現，建議取得 Logs 提供給 AWS Support 或者 AWS 解決方案架構師。我們建議您至少提供以下兩種日誌：

**Agent 日誌**

1. 開啟 Kiro 的 OUTPUT。透過點擊選單列的 View，再點擊 Output 開啟面板
2. 下拉選擇 Kiro 相關的日誌，如 Kiro Logs。您可以看下哪個日誌裡面有報錯
3. 點擊齒輪按鈕，選擇 Trace 類型的日誌
4. 可以點擊選項按鈕，在編輯器中開啟日誌以便複製和儲存

![](/book-of-kiro/images/kiro_log.png)

**客戶端日誌**

1. 頂部欄點擊 Help -> Toggle Developer Tools 開啟開發者工具
2. 點擊 Console 面板即可查看日誌。

![](/book-of-kiro/images/kiro_developer_tools_log.png)

日誌收集完畢後，點擊 Kiro 底部欄的 "Report issue" 按鈕進行問題上報。
