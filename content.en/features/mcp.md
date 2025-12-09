---
title: "Configuring MCP"
weight: 50
---

# **Configuring MCP**

## **What is MCP? Why is it so powerful?**

MCP is a mechanism for adding "special skills" to Kiro's AI. For example:

- Search AWS official documentation
- Operate GitHub repositories
- Perform web searches
- Connect to databases
  These capabilities are like plugins that can be added at any time, making the AI more versatile and helping you handle various development tasks!

## **Setup and Usage of Main MCP Servers**

### **1. AWS Documentation Server — Access AWS Official Documentation**

```JSON
// Append to .kiro/settings/mcp.json

{
  "mcpServers": {
    "aws-docs": {
      "command": "uvx",
      "args": ["awslabs.aws-documentation-mcp-server@latest"],
      "env": {
        "FASTMCP_LOG_LEVEL": "ERROR"  // Set log level to minimum to reduce output
      },
      "disabled": false,
      "autoApprove": [
        "mcp_aws_docs_search_documentation",  // Auto-approve search requests
        "mcp_aws_docs_read_documentation"     // Auto-approve read requests
      ]
    }
  }
}
```

Practical usage examples:

```py
# Just ask in the chat
"What are S3 lifecycle policies?"
"How to optimize Lambda function cold starts?"
"What are DynamoDB partition key design best practices?"

# Kiro will automatically search AWS official documentation and answer
```

Required preparation:

```sh
# Install uv (run on first use)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Requires Python 3.10 or later
uv python install 3.10
```

### 2. **GitHub MCP Server — Integration with GitHub**

```JSON
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}"
      }
    }
  }
}

```

Practical usage examples:

```py
# Get repository information
"Tell me about the latest releases of the facebook/react repository"

# Code search
"Help me find the conv2d implementation in the tensorflow/tensorflow repository"

# Create Issue
"Help me create an Issue for this bug"

# Create PR
"Create a PR from the feature/login branch to the main branch"

```

How to create a GitHub token:

1. Go to GitHub → Settings → Developer settings
2. Select Personal access tokens → Generate new token
3. Required permissions: repo, user
4. Set environment variable: export GITHUB_TOKEN="ghp_xxxx"

### 3. **Web Search Server — Search for Latest Information**

```JSON
{
  "mcpServers": {
    "web-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-bravesearch"],
      "env": {
        "BRAVE_API_KEY": "${BRAVE_API_KEY}"
      },
      "autoApprove": ["brave_search"]  // Auto-execute searches
    }
  }
}

```

Practical usage examples:

```py
# Latest technology news
"Help me search for React 19 new features"

# Troubleshooting
"Investigate the cause of hydration errors in Next.js 14"

# News updates
"Help me summarize this week's JavaScript news"

```

How to get Brave Search API key:

1. Visit https://brave.com/search/api/
2. Register for the free plan (5000 queries per month free)
3. Set the API key in environment variables:

## **Creating Custom MCP Servers**

You can also create your own custom MCP server!<br>
For example, a dedicated server for connecting to internal company APIs:

```JAVASCRIPT
// my-company-mcp-server.js

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server(
  {
    name: 'my-company-tools',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Tool definitions
server.setRequestHandler('tools/list', async () => ({
  tools: [
    {
      name: 'search_company_docs',
      description: 'Search internal company documentation',
      inputSchema: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description: 'Search keywords'
          },
          department: {
            type: 'string',
            enum: ['engineering', 'design', 'marketing'],
            description: 'Filter by department'
          }
        },
        required: ['query']
      }
    },
    {
      name: 'get_employee_info',
      description: 'Get employee information',
      inputSchema: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'Employee email address'
          }
        },
        required: ['email']
      }
    }
  ]
}));

// Tool implementation
server.setRequestHandler('tools/call', async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case 'search_company_docs':
      // Actual search processing
      const results = await searchInternalDocs(args.query, args.department);
      return {
        content: [{
          type: 'text',
          text: `Search results:\n${results.map(r => `- ${r.title}: ${r.url}`).join('\n')}`
        }]
      };

    case 'get_employee_info':
      // Get employee information
      const info = await getEmployeeInfo(args.email);
      return {
        content: [{
          type: 'text',
          text: `Employee info:\nName: ${info.name}\nDepartment: ${info.department}\nExtension: ${info.extension}`
        }]
      };

    default:
      throw new Error(`Unknown tool name: ${name}`);
  }
});

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);

```

Add to configuration:

```json
{
  "mcpServers": {
    "company-tools": {
      "command": "node",
      "args": ["./mcp-servers/my-company-mcp-server.js"],
      "env": {
        "COMPANY_API_KEY": "${COMPANY_API_KEY}"
      }
    }
  }
}
```

## **Debugging MCP Servers**

Troubleshooting methods when things don't run smoothly:

```BASH
# 1. View MCP logs
Open Kiro panel → Output → "Kiro - MCP Logs"

# 2. Check server status
Execute `/mcp` in the chat window

# 3. Manually run server for testing
node ./mcp-servers/my-server.js

# 4. Check environment variables
echo $GITHUB_TOKEN
echo $BRAVE_API_KEY

# 5. Increase timeout
"timeout": 30000  # Set to 30 seconds

```
