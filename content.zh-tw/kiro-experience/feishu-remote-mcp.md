---
title: "飛書 Remote MCP 設定"
weight: 1
bookToc: true
---

# 飛書 Remote MCP 設定

透過設定飛書 Remote MCP，可以在 Kiro 中直接操作飛書雲文件，實現文件搜尋、建立、編輯、評論等功能。

### 效果展示

在 Kiro 中透過 MCP 呼叫飛書工具，自動產生技術文件：

![Kiro IDE 中呼叫飛書 MCP 建立文件](/book-of-kiro/images/feishu-mcp-kiro-ide.png)

以下為產生文件的部分章節截圖，展示了文件結構、流程圖和程式碼區塊等多種內容類型：

{{% tabs "feishu-mcp-doc-results" %}}
{{% tab "專案概述與架構圖" %}}
![專案概述、技術堆疊與系統架構圖](/book-of-kiro/images/feishu-mcp-doc-result-1.png)
{{% /tab %}}
{{% tab "登入流程時序圖" %}}
![登入流程時序圖](/book-of-kiro/images/feishu-mcp-doc-result-2.png)
{{% /tab %}}
{{% tab "資料庫表設計" %}}
![資料庫表結構設計](/book-of-kiro/images/feishu-mcp-doc-result-3.png)
{{% /tab %}}
{{% /tabs %}}

---

## 一、前置準備

### 1.1 建立飛書應用

1. 造訪 [飛書開放平台](https://open.feishu.cn/app/)
2. 建立自建應用
3. 在憑證與基礎資訊頁面取得：
   - **App ID**
   - **App Secret**

### 1.2 設定重新導向 URL

1. 進入應用的安全設定頁面
2. 在重新導向 URL 中新增：`http://localhost:8080/callback`
3. 儲存設定

### 1.3 申請權限

在權限管理頁面申請以下權限：

**文件權限：**

| 權限標識 | 說明 |
|---------|------|
| `docx:document:readonly` | 查看新版文件 |
| `docx:document:create` | 建立新版文件 |
| `docx:document:write_only` | 編輯新版文件 |
| `search:docs:read` | 搜尋文件 |
| `wiki:wiki:readonly` | 查看所有知識庫 |
| `wiki:node:read` | 查看知識空間節點資訊 |

**使用者權限：**

| 權限標識 | 說明 |
|---------|------|
| `contact:user:search` | 搜尋使用者 |
| `contact:user.base:readonly` | 取得使用者基本資訊 |

**評論權限：**

| 權限標識 | 說明 |
|---------|------|
| `docs:document.comment:read` | 取得文件評論 |
| `docs:document.comment:create` | 新增文件評論 |

**畫板權限：**

| 權限標識 | 說明 |
|---------|------|
| `board:whiteboard:node:create` | 建立白板節點 |
| `board:whiteboard:node:read` | 讀取白板節點 |
| `board:whiteboard:node:update` | 更新白板節點 |

---

## 二、取得 User Access Token

### 方式一：透過腳本取得（建議）

將以下腳本儲存為 `feishu_uat.sh`，設定好 `APP_ID` 和 `APP_SECRET` 後執行，即可自動完成授權並取得 Token。

```bash
#!/bin/bash
# 飛書 UAT 一鍵產生腳本（通用版）
# 使用前請先設定 APP_ID 和 APP_SECRET

# ========== 設定區域 ==========
APP_ID="YOUR_APP_ID"           # 替換為你的 App ID
APP_SECRET="YOUR_APP_SECRET"   # 替換為你的 App Secret
REDIRECT_URI="http://localhost:8080/callback"
# ==============================

LOG_FILE="/tmp/feishu_code_$$.txt"

# 檢查設定
if [ "$APP_ID" = "YOUR_APP_ID" ] || [ "$APP_SECRET" = "YOUR_APP_SECRET" ]; then
    echo "❌ 請先設定 APP_ID 和 APP_SECRET"
    echo ""
    echo "編輯腳本，將以下內容替換為你的應用憑證："
    echo "  APP_ID=\"你的App ID\""
    echo "  APP_SECRET=\"你的App Secret\""
    echo ""
    echo "取得方式：https://open.feishu.cn/app/ → 選擇應用 → 憑證與基礎資訊"
    exit 1
fi

# 檢查相依性
if ! command -v jq &> /dev/null; then
    echo "❌ 未安裝 jq，請先安裝："
    echo "  macOS: brew install jq"
    echo "  Linux: apt-get install jq 或 yum install jq"
    exit 1
fi

# 清理舊的日誌檔案
rm -f "$LOG_FILE"

# 檢查連接埠是否被佔用
if lsof -Pi :8080 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo "⚠️  連接埠 8080 已被佔用，正在嘗試釋放..."
    kill -9 $(lsof -t -i:8080) 2>/dev/null
    sleep 1
fi

# 啟動本機伺服器接收回呼
python3 - "$LOG_FILE" << 'PYTHON_SCRIPT' &
import http.server
import socketserver
from urllib.parse import urlparse, parse_qs
import sys

log_file = sys.argv[1]

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        query = urlparse(self.path).query
        params = parse_qs(query)
        if 'code' in params:
            code = params['code'][0]
            self.send_response(200)
            self.send_header('Content-type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write('<h1>授權成功！</h1><p>可以關閉此視窗</p>'.encode('utf-8'))
            with open(log_file, 'w') as f:
                f.write(code)
        else:
            self.send_response(200)
            self.end_headers()
    def log_message(self, format, *args):
        pass

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("", 8080), Handler) as httpd:
    httpd.handle_request()
PYTHON_SCRIPT

SERVER_PID=$!

# 等待伺服器啟動
sleep 2

# 產生授權URL
AUTH_URL="https://open.feishu.cn/open-apis/authen/v1/authorize?app_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&scope=docx:document:readonly%20docx:document:create%20docx:document:write_only%20search:docs:read%20wiki:wiki:readonly%20contact:user:search%20contact:user.base:readonly%20docs:document.comment:read%20docs:document.comment:create%20board:whiteboard:node:create%20board:whiteboard:node:read%20board:whiteboard:node:update"

echo "請在瀏覽器中開啟以下URL進行授權："
echo ""
echo "$AUTH_URL"
echo ""

# 嘗試自動開啟瀏覽器
if command -v open &> /dev/null; then
    open "$AUTH_URL" 2>/dev/null
elif command -v xdg-open &> /dev/null; then
    xdg-open "$AUTH_URL" 2>/dev/null
fi

# 等待授權碼
echo "等待授權..."
for i in {1..60}; do
    if [ -f "$LOG_FILE" ]; then
        CODE=$(cat "$LOG_FILE")
        break
    fi
    sleep 1
done

# 清理
kill $SERVER_PID 2>/dev/null
wait $SERVER_PID 2>/dev/null

if [ -z "$CODE" ]; then
    echo "❌ 未取得到授權碼（逾時60秒）"
    rm -f "$LOG_FILE"
    exit 1
fi

echo "✅ 取得到授權碼"
rm -f "$LOG_FILE"

# 取得 app_access_token
APP_ACCESS_TOKEN=$(curl -s -X POST 'https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal' \
  -H 'Content-Type: application/json' \
  -d "{\"app_id\":\"${APP_ID}\",\"app_secret\":\"${APP_SECRET}\"}" | jq -r '.app_access_token')

if [ -z "$APP_ACCESS_TOKEN" ] || [ "$APP_ACCESS_TOKEN" = "null" ]; then
    echo "❌ 取得 app_access_token 失敗，請檢查 APP_ID 和 APP_SECRET"
    exit 1
fi

# 換取 UAT
RESULT=$(curl -s -X POST 'https://open.feishu.cn/open-apis/authen/v1/oidc/access_token' \
  -H "Authorization: Bearer ${APP_ACCESS_TOKEN}" \
  -H 'Content-Type: application/json' \
  -d "{\"grant_type\":\"authorization_code\",\"code\":\"${CODE}\"}")

UAT=$(echo $RESULT | jq -r '.data.access_token')
REFRESH_TOKEN=$(echo $RESULT | jq -r '.data.refresh_token')

if [ -z "$UAT" ] || [ "$UAT" = "null" ]; then
    echo "❌ 取得 UAT 失敗"
    echo "錯誤資訊: $(echo $RESULT | jq -r '.message')"
    exit 1
fi

echo ""
echo "✅ UAT 產生成功！"
echo ""
echo "User Access Token (有效期2小時):"
echo "$UAT"
echo ""
echo "Refresh Token (有效期30天):"
echo "$REFRESH_TOKEN"
echo ""
echo "MCP 設定範例:"
echo "X-Lark-MCP-UAT: $UAT"
echo ""
echo "注意: Token 已複製到剪貼簿（如果支援）"

# 嘗試複製到剪貼簿
if command -v pbcopy &> /dev/null; then
    echo "$UAT" | pbcopy
elif command -v xclip &> /dev/null; then
    echo "$UAT" | xclip -selection clipboard
fi
```

使用方式：

```bash
chmod +x feishu_uat.sh
./feishu_uat.sh
```

腳本會自動開啟瀏覽器完成授權，取得到的 Token 會自動複製到剪貼簿。

### 方式二：手動取得

#### 2.1 瀏覽器授權

在瀏覽器開啟以下 URL（替換 `YOUR_APP_ID`）：

```
https://open.feishu.cn/open-apis/authen/v1/authorize?app_id=YOUR_APP_ID&redirect_uri=http://localhost:8080/callback&scope=docx:document:readonly%20docx:document:create%20docx:document:write_only%20search:docs:read%20wiki:wiki:readonly%20contact:user:search%20contact:user.base:readonly%20docs:document.comment:read%20docs:document.comment:create%20board:whiteboard:node:create%20board:whiteboard:node:read%20board:whiteboard:node:update
```

#### 2.2 取得授權碼

授權後瀏覽器會跳轉到：

```
http://localhost:8080/callback?code=xxxxxx
```

複製 `code=` 後面的值（授權碼）。

#### 2.3 換取 User Access Token

執行以下命令（替換 `YOUR_APP_ID`、`YOUR_APP_SECRET`、`YOUR_CODE`）：

```bash
# 步驟1: 取得 app_access_token
APP_ACCESS_TOKEN=$(curl -s -X POST 'https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal' \
  -H 'Content-Type: application/json' \
  -d '{
    "app_id": "YOUR_APP_ID",
    "app_secret": "YOUR_APP_SECRET"
  }' | jq -r '.app_access_token')

# 步驟2: 用授權碼換取 User Access Token
curl -s -X POST 'https://open.feishu.cn/open-apis/authen/v1/oidc/access_token' \
  -H "Authorization: Bearer $APP_ACCESS_TOKEN" \
  -H 'Content-Type: application/json' \
  -d '{
    "grant_type": "authorization_code",
    "code": "YOUR_CODE"
  }' | jq '.'
```

回傳結果範例：

```json
{
  "code": 0,
  "data": {
    "access_token": "u-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "refresh_token": "ur-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "expires_in": 7200,
    "refresh_expires_in": 2592000
  }
}
```

---

## 三、MCP 設定

### 連線資訊

| 設定項 | 值 |
|-------|---|
| 傳輸方式 | HTTP |
| 服務位址 | `https://mcp.feishu.cn/mcp` |
| 認證方式 | HTTP Header |

### 必要的 HTTP Headers

```
Content-Type: application/json
X-Lark-MCP-UAT: u-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
X-Lark-MCP-Allowed-Tools: search-doc,create-doc,fetch-doc,update-doc,list-docs,get-comments,add-comments,search-user,get-user,fetch-file
```

### 設定範例（JSON 格式）

```json
{
  "mcpServers": {
    "feishu": {
      "transport": "http",
      "url": "https://mcp.feishu.cn/mcp",
      "headers": {
        "Content-Type": "application/json",
        "X-Lark-MCP-UAT": "u-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "X-Lark-MCP-Allowed-Tools": "search-doc,create-doc,fetch-doc,update-doc,list-docs,get-comments,add-comments,search-user,get-user,fetch-file"
      }
    }
  }
}
```

---

## 四、可用工具列表

### 文件操作

| 工具名稱 | 說明 |
|---------|------|
| `search-doc` | 搜尋雲文件 |
| `create-doc` | 建立雲文件 |
| `fetch-doc` | 查看雲文件 |
| `update-doc` | 更新雲文件 |
| `list-docs` | 取得文件列表 |

### 評論功能

| 工具名稱 | 說明 |
|---------|------|
| `get-comments` | 查看評論 |
| `add-comments` | 新增評論 |

### 使用者功能

| 工具名稱 | 說明 |
|---------|------|
| `search-user` | 搜尋使用者 |
| `get-user` | 取得使用者資訊 |

### 檔案功能

| 工具名稱 | 說明 |
|---------|------|
| `fetch-file` | 取得檔案/圖片內容 |

---

## 五、Token 管理

### Token 資訊

| 屬性 | 值 |
|-----|---|
| 格式 | `u-` 開頭 |
| 有效期 | 2 小時 |
| 重新整理有效期 | 30 天（refresh_token） |

### 重新整理 Token

當 User Access Token 過期時，使用 `refresh_token` 重新整理：

```bash
curl -X POST 'https://open.feishu.cn/open-apis/authen/v1/oidc/refresh_access_token' \
  -H 'Content-Type: application/json' \
  -d '{
    "grant_type": "refresh_token",
    "refresh_token": "YOUR_REFRESH_TOKEN"
  }'
```

回傳新的 `access_token` 和 `refresh_token`。

---

## 六、注意事項

{{% hint warning %}}
**安全提醒：** 不要將 App Secret 和 Token 提交到程式碼儲存庫。Token 應儲存在安全的環境變數或金鑰管理系統中。
{{% /hint %}}

1. **Token 有效期：** User Access Token 有效期為 2 小時
2. **Refresh Token：** 有效期 30 天，可用於重新整理 User Access Token
3. **權限範圍：** 確保在飛書開發者後台申請了所有需要的權限
4. **工具白名單：** `X-Lark-MCP-Allowed-Tools` 必須包含要使用的工具，否則無法呼叫
5. **使用者身分：** User Access Token 代表使用者身分，所有操作都以該使用者的權限執行

---

## 七、常見問題

### 錯誤：Invalid access token

- 檢查 Token 是否過期（2 小時有效期）
- 確認使用了正確的 Header 名稱（`X-Lark-MCP-UAT`）
- 驗證 Token 格式是否正確（以 `u-` 開頭）

### 錯誤：redirect_uri request is invalid

- 確認在飛書開發者後台設定了正確的重新導向 URL
- 授權 URL 中的 `redirect_uri` 必須與後台設定完全一致

### 工具無法呼叫

- 檢查 `X-Lark-MCP-Allowed-Tools` 是否包含該工具
- 確認在飛書開發者後台申請了對應的權限
- 驗證應用是否已發布或新增了測試使用者

### 權限不足

- 確認使用者本身具有相應的文件存取權限
- User Access Token 的權限範圍受使用者自身權限限制
