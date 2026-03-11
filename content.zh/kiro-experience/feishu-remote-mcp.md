---
title: "飞书 Remote MCP 配置"
weight: 1
bookToc: true
---

# 飞书 Remote MCP 配置

通过配置飞书 Remote MCP，可以在 Kiro 中直接操作飞书云文档，实现文档搜索、创建、编辑、评论等功能。

### 效果展示

在 Kiro 中通过 MCP 调用飞书工具，自动生成技术文档：

![Kiro IDE 中调用飞书 MCP 创建文档](/book-of-kiro/images/feishu-mcp-kiro-ide.png)

以下为生成文档的部分章节截图，展示了文档结构、流程图和代码块等多种内容类型：

{{% tabs "feishu-mcp-doc-results" %}}
{{% tab "项目概述与架构图" %}}
![项目概述、技术栈与系统架构图](/book-of-kiro/images/feishu-mcp-doc-result-1.png)
{{% /tab %}}
{{% tab "登录流程时序图" %}}
![登录流程时序图](/book-of-kiro/images/feishu-mcp-doc-result-2.png)
{{% /tab %}}
{{% tab "数据库表设计" %}}
![数据库表结构设计](/book-of-kiro/images/feishu-mcp-doc-result-3.png)
{{% /tab %}}
{{% /tabs %}}

---

## 一、前置准备

### 1.1 创建飞书应用

1. 访问 [飞书开放平台](https://open.feishu.cn/app/)
2. 创建自建应用
3. 在凭证与基础信息页面获取：
   - **App ID**
   - **App Secret**

### 1.2 配置重定向 URL

1. 进入应用的安全设置页面
2. 在重定向 URL 中添加：`http://localhost:8080/callback`
3. 保存配置

### 1.3 申请权限

在权限管理页面申请以下权限：

**文档权限：**

| 权限标识 | 说明 |
|---------|------|
| `docx:document:readonly` | 查看新版文档 |
| `docx:document:create` | 创建新版文档 |
| `docx:document:write_only` | 编辑新版文档 |
| `search:docs:read` | 搜索文档 |
| `wiki:wiki:readonly` | 查看所有知识库 |
| `wiki:node:read` | 查看知识空间节点信息 |

**用户权限：**

| 权限标识 | 说明 |
|---------|------|
| `contact:user:search` | 搜索用户 |
| `contact:user.base:readonly` | 获取用户基本信息 |

**评论权限：**

| 权限标识 | 说明 |
|---------|------|
| `docs:document.comment:read` | 获取文档评论 |
| `docs:document.comment:create` | 添加文档评论 |

**画板权限：**

| 权限标识 | 说明 |
|---------|------|
| `board:whiteboard:node:create` | 创建白板节点 |
| `board:whiteboard:node:read` | 读取白板节点 |
| `board:whiteboard:node:update` | 更新白板节点 |

---

## 二、获取 User Access Token

### 方式一：通过脚本获取（推荐）

将以下脚本保存为 `feishu_uat.sh`，配置好 `APP_ID` 和 `APP_SECRET` 后运行，即可自动完成授权并获取 Token。

```bash
#!/bin/bash
# 飞书 UAT 一键生成脚本（通用版）
# 使用前请先配置 APP_ID 和 APP_SECRET

# ========== 配置区域 ==========
APP_ID="YOUR_APP_ID"           # 替换为你的 App ID
APP_SECRET="YOUR_APP_SECRET"   # 替换为你的 App Secret
REDIRECT_URI="http://localhost:8080/callback"
# ==============================

LOG_FILE="/tmp/feishu_code_$$.txt"

# 检查配置
if [ "$APP_ID" = "YOUR_APP_ID" ] || [ "$APP_SECRET" = "YOUR_APP_SECRET" ]; then
    echo "❌ 请先配置 APP_ID 和 APP_SECRET"
    echo ""
    echo "编辑脚本，将以下内容替换为你的应用凭证："
    echo "  APP_ID=\"你的App ID\""
    echo "  APP_SECRET=\"你的App Secret\""
    echo ""
    echo "获取方式：https://open.feishu.cn/app/ → 选择应用 → 凭证与基础信息"
    exit 1
fi

# 检查依赖
if ! command -v jq &> /dev/null; then
    echo "❌ 未安装 jq，请先安装："
    echo "  macOS: brew install jq"
    echo "  Linux: apt-get install jq 或 yum install jq"
    exit 1
fi

# 清理旧的日志文件
rm -f "$LOG_FILE"

# 检查端口是否被占用
if lsof -Pi :8080 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo "⚠️  端口 8080 已被占用，正在尝试释放..."
    kill -9 $(lsof -t -i:8080) 2>/dev/null
    sleep 1
fi

# 启动本地服务器接收回调
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
            self.wfile.write('<h1>授权成功！</h1><p>可以关闭此窗口</p>'.encode('utf-8'))
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

# 等待服务器启动
sleep 2

# 生成授权URL
AUTH_URL="https://open.feishu.cn/open-apis/authen/v1/authorize?app_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&scope=docx:document:readonly%20docx:document:create%20docx:document:write_only%20search:docs:read%20wiki:wiki:readonly%20contact:user:search%20contact:user.base:readonly%20docs:document.comment:read%20docs:document.comment:create%20board:whiteboard:node:create%20board:whiteboard:node:read%20board:whiteboard:node:update"

echo "请在浏览器中打开以下URL进行授权："
echo ""
echo "$AUTH_URL"
echo ""

# 尝试自动打开浏览器
if command -v open &> /dev/null; then
    open "$AUTH_URL" 2>/dev/null
elif command -v xdg-open &> /dev/null; then
    xdg-open "$AUTH_URL" 2>/dev/null
fi

# 等待授权码
echo "等待授权..."
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
    echo "❌ 未获取到授权码（超时60秒）"
    rm -f "$LOG_FILE"
    exit 1
fi

echo "✅ 获取到授权码"
rm -f "$LOG_FILE"

# 获取 app_access_token
APP_ACCESS_TOKEN=$(curl -s -X POST 'https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal' \
  -H 'Content-Type: application/json' \
  -d "{\"app_id\":\"${APP_ID}\",\"app_secret\":\"${APP_SECRET}\"}" | jq -r '.app_access_token')

if [ -z "$APP_ACCESS_TOKEN" ] || [ "$APP_ACCESS_TOKEN" = "null" ]; then
    echo "❌ 获取 app_access_token 失败，请检查 APP_ID 和 APP_SECRET"
    exit 1
fi

# 换取 UAT
RESULT=$(curl -s -X POST 'https://open.feishu.cn/open-apis/authen/v1/oidc/access_token' \
  -H "Authorization: Bearer ${APP_ACCESS_TOKEN}" \
  -H 'Content-Type: application/json' \
  -d "{\"grant_type\":\"authorization_code\",\"code\":\"${CODE}\"}")

UAT=$(echo $RESULT | jq -r '.data.access_token')
REFRESH_TOKEN=$(echo $RESULT | jq -r '.data.refresh_token')

if [ -z "$UAT" ] || [ "$UAT" = "null" ]; then
    echo "❌ 获取 UAT 失败"
    echo "错误信息: $(echo $RESULT | jq -r '.message')"
    exit 1
fi

echo ""
echo "✅ UAT 生成成功！"
echo ""
echo "User Access Token (有效期2小时):"
echo "$UAT"
echo ""
echo "Refresh Token (有效期30天):"
echo "$REFRESH_TOKEN"
echo ""
echo "MCP 配置示例:"
echo "X-Lark-MCP-UAT: $UAT"
echo ""
echo "注意: Token 已复制到剪贴板（如果支持）"

# 尝试复制到剪贴板
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

脚本会自动打开浏览器完成授权，获取到的 Token 会自动复制到剪贴板。

### 方式二：手动获取

#### 2.1 浏览器授权

在浏览器打开以下 URL（替换 `YOUR_APP_ID`）：

```
https://open.feishu.cn/open-apis/authen/v1/authorize?app_id=YOUR_APP_ID&redirect_uri=http://localhost:8080/callback&scope=docx:document:readonly%20docx:document:create%20docx:document:write_only%20search:docs:read%20wiki:wiki:readonly%20contact:user:search%20contact:user.base:readonly%20docs:document.comment:read%20docs:document.comment:create%20board:whiteboard:node:create%20board:whiteboard:node:read%20board:whiteboard:node:update
```

#### 2.2 获取授权码

授权后浏览器会跳转到：

```
http://localhost:8080/callback?code=xxxxxx
```

复制 `code=` 后面的值（授权码）。

#### 2.3 换取 User Access Token

执行以下命令（替换 `YOUR_APP_ID`、`YOUR_APP_SECRET`、`YOUR_CODE`）：

```bash
# 步骤1: 获取 app_access_token
APP_ACCESS_TOKEN=$(curl -s -X POST 'https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal' \
  -H 'Content-Type: application/json' \
  -d '{
    "app_id": "YOUR_APP_ID",
    "app_secret": "YOUR_APP_SECRET"
  }' | jq -r '.app_access_token')

# 步骤2: 用授权码换取 User Access Token
curl -s -X POST 'https://open.feishu.cn/open-apis/authen/v1/oidc/access_token' \
  -H "Authorization: Bearer $APP_ACCESS_TOKEN" \
  -H 'Content-Type: application/json' \
  -d '{
    "grant_type": "authorization_code",
    "code": "YOUR_CODE"
  }' | jq '.'
```

返回结果示例：

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

## 三、MCP 配置

### 连接信息

| 配置项 | 值 |
|-------|---|
| 传输方式 | HTTP |
| 服务地址 | `https://mcp.feishu.cn/mcp` |
| 认证方式 | HTTP Header |

### 必需的 HTTP Headers

```
Content-Type: application/json
X-Lark-MCP-UAT: u-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
X-Lark-MCP-Allowed-Tools: search-doc,create-doc,fetch-doc,update-doc,list-docs,get-comments,add-comments,search-user,get-user,fetch-file
```

### 配置示例（JSON 格式）

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

### 文档操作

| 工具名称 | 说明 |
|---------|------|
| `search-doc` | 搜索云文档 |
| `create-doc` | 创建云文档 |
| `fetch-doc` | 查看云文档 |
| `update-doc` | 更新云文档 |
| `list-docs` | 获取文档列表 |

### 评论功能

| 工具名称 | 说明 |
|---------|------|
| `get-comments` | 查看评论 |
| `add-comments` | 添加评论 |

### 用户功能

| 工具名称 | 说明 |
|---------|------|
| `search-user` | 搜索用户 |
| `get-user` | 获取用户信息 |

### 文件功能

| 工具名称 | 说明 |
|---------|------|
| `fetch-file` | 获取文件/图片内容 |

---

## 五、Token 管理

### Token 信息

| 属性 | 值 |
|-----|---|
| 格式 | `u-` 开头 |
| 有效期 | 2 小时 |
| 刷新有效期 | 30 天（refresh_token） |

### 刷新 Token

当 User Access Token 过期时，使用 `refresh_token` 刷新：

```bash
curl -X POST 'https://open.feishu.cn/open-apis/authen/v1/oidc/refresh_access_token' \
  -H 'Content-Type: application/json' \
  -d '{
    "grant_type": "refresh_token",
    "refresh_token": "YOUR_REFRESH_TOKEN"
  }'
```

返回新的 `access_token` 和 `refresh_token`。

---

## 六、注意事项

{{% hint warning %}}
**安全提醒：** 不要将 App Secret 和 Token 提交到代码仓库。Token 应存储在安全的环境变量或密钥管理系统中。
{{% /hint %}}

1. **Token 有效期：** User Access Token 有效期为 2 小时
2. **Refresh Token：** 有效期 30 天，可用于刷新 User Access Token
3. **权限范围：** 确保在飞书开发者后台申请了所有需要的权限
4. **工具白名单：** `X-Lark-MCP-Allowed-Tools` 必须包含要使用的工具，否则无法调用
5. **用户身份：** User Access Token 代表用户身份，所有操作都以该用户的权限执行

---

## 七、常见问题

### 错误：Invalid access token

- 检查 Token 是否过期（2 小时有效期）
- 确认使用了正确的 Header 名称（`X-Lark-MCP-UAT`）
- 验证 Token 格式是否正确（以 `u-` 开头）

### 错误：redirect_uri request is invalid

- 确认在飞书开发者后台配置了正确的重定向 URL
- 授权 URL 中的 `redirect_uri` 必须与后台配置完全一致

### 工具无法调用

- 检查 `X-Lark-MCP-Allowed-Tools` 是否包含该工具
- 确认在飞书开发者后台申请了对应的权限
- 验证应用是否已发布或添加了测试用户

### 权限不足

- 确认用户本身具有相应的文档访问权限
- User Access Token 的权限范围受用户自身权限限制
