# MCP Tools Corrections Needed

This document tracks corrections needed for MCP tools based on verification results.

## Platform Configuration Updates

✅ **Completed:**
- Added VSCode platform support
- Updated platform list to include 5 platforms: Claude Desktop, Gemini CLI, CodeX CLI, Cursor Editor, VSCode
- Added VSCodeConfigGuide component
- Updated JsonConfigGuide to handle different platform formats (JSON for Claude/Gemini, TOML for CodeX)

## Issues Found by Verification Script

### 1. Official Tools (Only 7 exist in official repo)
Official repository only contains:
- everything
- fetch
- filesystem
- git
- memory
- sequentialthinking (note: hyphen vs camelCase)
- time

**Tools marked as "Official" but NOT in official repo:**
- github, gitlab, sentry, chrome-devtools, playwright, puppeteer, docker, kubernetes
- cloudflare, azure
- postgres, sqlite, mongodb, qdrant, pinecone
- brave-search, google-search
- slack, notion, linear, jira, gdrive, google-maps, spotify
- e2b, gmail, google-calendar

**Action:** These should be changed to "Community" or "Verified Partner" vendor status.

### 2. GitHub Links - 404 Errors
- openapi: https://github.com/snaggle-puss/mcp-openapi-proxy (404)
- aws: https://github.com/rishikottap/mcp-server-aws (404)
- vercel: https://github.com/vercel/mcp-server-vercel (404)
- gcp: https://github.com/mcp-server-gcp/mcp-server-gcp (404)
- mysql: https://github.com/designvkp/mcp-server-mysql (404)
- exa: https://github.com/exa-labs/mcp-server-exa (404)
- replicate: https://github.com/replicate/mcp-server-replicate (404)
- huggingface: https://github.com/huggingface/mcp-server-huggingface (404)
- ollama: https://github.com/ollama/mcp-server-ollama (404)
- glean: https://github.com/glean-technologies/mcp-server-glean (404)
- perplexity: https://github.com/perplexity-ai/mcp-server-perplexity (404)
- apify: https://github.com/apify/mcp-server-apify (404)
- mongodb: https://github.com/mongodb-developer/mcp-server-mongodb (404)
- pinecone: https://github.com/pinecone-io/mcp-server-pinecone (404)
- snowflake: https://github.com/snowflake-labs/mcp-server-snowflake (404)
- clickhouse: https://github.com/ClickHouse/mcp-server-clickhouse (404)

**Action:** Need to find correct GitHub repositories or remove these tools.

### 3. NPM Packages Not Found
Many `@modelcontextprotocol/server-*` packages don't exist on npm:
- @modelcontextprotocol/server-fetch
- @modelcontextprotocol/server-time
- @modelcontextprotocol/server-sentry
- @modelcontextprotocol/server-chrome-devtools
- @modelcontextprotocol/server-playwright
- @modelcontextprotocol/server-docker
- @modelcontextprotocol/server-kubernetes
- @modelcontextprotocol/server-cloudflare
- @modelcontextprotocol/server-azure
- @modelcontextprotocol/server-sqlite
- @modelcontextprotocol/server-qdrant
- @modelcontextprotocol/server-google-search

**Action:** Verify if these are published under different names or if they need different installation commands.

### 4. Invalid GitHub URL Format
- planetscale: Invalid format (needs correction)

### 5. HTTP Redirects
- firecrawl: HTTP 301 (needs to follow redirect)

## Next Steps

1. ✅ Update platform configuration (DONE)
2. ⏳ Verify and correct GitHub links for community tools
3. ⏳ Update vendor status for incorrectly marked "Official" tools
4. ⏳ Find correct npm package names or installation commands
5. ⏳ Test configuration generation for all 5 platforms

## Running Verification

Run the verification script to check all tools:
```bash
node verify-mcp-tools.mjs
```

This will check GitHub links and npm packages for all tools.

