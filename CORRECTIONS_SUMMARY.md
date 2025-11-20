# MCP Tools 修正总结

## ✅ 已完成的修正

### 1. 平台配置更新
- ✅ 添加了 VSCode 平台支持（现在有5个平台）
- ✅ 更新了平台列表：Claude Desktop, Gemini CLI, CodeX CLI, Cursor Editor, VSCode
- ✅ 添加了 VSCodeConfigGuide 组件
- ✅ 更新了 JsonConfigGuide 以支持不同平台的配置格式（JSON/TOML）

### 2. GitHub 链接修正（已修正的工具）

| 工具ID | 原链接 | 新链接 | 状态 |
|--------|--------|--------|------|
| openapi | snaggle-puss/mcp-openapi-proxy (404) | ivo-toby/mcp-openapi-server | ✅ |
| aws | rishikottap/mcp-server-aws (404) | aws-samples/aws-mcp-servers-samples | ✅ |
| vercel | vercel/mcp-server-vercel (404) | Quegenx/vercel-mcp-server | ✅ |
| planetscale | mcp-server-planetscale (格式错误) | hunterjsb/zed-planetscale-mcp | ✅ |
| mongodb | mongodb-developer/mcp-server-mongodb (404) | mongodb-developer/mongodb-mcp-server | ✅ |
| mysql | designvkp/mcp-server-mysql (404) | f4ww4z/mcp-mysql-server | ✅ |
| exa | exa-labs/mcp-server-exa (404) | exa-labs/exa-mcp-server | ✅ |
| replicate | replicate/mcp-server-replicate (404) | noeltg77/replicate-mcp | ✅ |
| huggingface | huggingface/mcp-server-huggingface (404) | shreyaskarnik/huggingface-mcp-server | ✅ |
| ollama | ollama/mcp-server-ollama (404) | rawveg/ollama-mcp | ✅ |
| glean | glean-technologies/mcp-server-glean (404) | longyi1207/glean-mcp-server | ✅ |
| perplexity | perplexity-ai/mcp-server-perplexity (404) | jsonallen/perplexity-mcp | ✅ |
| apify | apify/mcp-server-apify (404) | apify/apify-mcp-server | ✅ |
| pinecone | pinecone-io/mcp-server-pinecone (404) | pinecone-io/pinecone-mcp | ✅ |
| snowflake | snowflake-labs/mcp-server-snowflake (404) | dynamike/snowflake-mcp-server | ✅ |
| clickhouse | ClickHouse/mcp-server-clickhouse (404) | dubin555/clickhouse_mcp_server | ✅ |
| gcp | mcp-server-gcp/mcp-server-gcp (404) | krzko/google-cloud-mcp | ✅ |
| firecrawl | mendableai/firecrawl/tree/main/packages/mcp-server (404) | firecrawl/firecrawl | ✅ |
| hubspot | HubSpot/mcp-server-hubspot (404) | peakmojo/mcp-hubspot | ✅ |
| e2b | e2b.dev/docs/mcp (文档链接) | cased/e2b-mcp | ✅ |
| sequential-thinking | sequential-thinking (路径错误) | sequentialthinking | ✅ |

### 3. Vendor 状态修正（Official → Community/Verified Partner）

以下工具原本标记为 "Official" 但不在官方仓库中，已修正：

- ✅ github → Community
- ✅ gitlab → Community  
- ✅ sentry → Community
- ✅ chrome-devtools → Community
- ✅ playwright → Community
- ✅ postgres → Community
- ✅ sqlite → Community
- ✅ brave-search → Community
- ✅ google-search → Community
- ✅ slack → Community
- ✅ jira → Community
- ✅ google-drive → Community
- ✅ google-maps → Community
- ✅ gmail → Community
- ✅ google-calendar → Community
- ✅ qdrant → Verified Partner
- ✅ e2b → Community
- ✅ glean → Community (从 Verified Partner 改为 Community)

### 4. 官方工具确认

官方仓库 (modelcontextprotocol/servers) 中只有以下7个工具：
1. everything
2. fetch
3. filesystem ✅
4. git ✅
5. memory ✅
6. sequentialthinking ✅
7. time ✅

## ⚠️ 注意事项

### HTTP 403 错误
验证脚本显示一些工具返回 HTTP 403，这可能是：
- GitHub API 速率限制
- 仓库存在但需要认证访问

这些仓库已通过 GitHub CLI 验证存在：
- docker, kubernetes, cloudflare, supabase, neon, redis, postgres, sqlite, slack, notion, linear, jira, google-drive, google-maps, brave-search, google-search 等

### NPM 包名
一些 `@modelcontextprotocol/server-*` 包在 npm 上不存在，可能需要：
- 使用不同的包名
- 直接从 GitHub 安装
- 使用 docker 或其他安装方式

## 📊 修正统计

- **GitHub 链接修正**: 20+ 个工具
- **Vendor 状态修正**: 18+ 个工具
- **平台配置更新**: 5个平台完整支持
- **总修正数**: 40+ 处

## 🔄 后续建议

1. 定期运行验证脚本检查链接有效性
2. 验证 npm 包名的正确性
3. 更新安装命令（某些工具可能需要不同的安装方式）
4. 添加更多社区工具的验证

## 📝 验证脚本使用

运行验证脚本：
```bash
node verify-mcp-tools.mjs
```

这将检查所有工具的 GitHub 链接和 npm 包名。

