export type MCPTool = {
  id: string;
  name: string;
  category: 'Core' | 'Cloud' | 'Database' | 'DevTools' | 'SaaS' | 'AI' | 'Social' | 'Design' | 'Web3' | 'Science' | 'Other';
  description: string;
  vendor: 'Official' | 'Verified Partner' | 'Community';
  command: string;
  args: string[];
  env?: Record<string, string>;
  homepage?: string;
};

export const MCP_DATA: MCPTool[] = [
  // --- CORE ESSENTIALS (Official) ---
  { 
    id: 'filesystem', 
    name: 'Filesystem', 
    category: 'Core', 
    description: 'Read, write, and manage local files. The absolute baseline for coding agents.', 
    vendor: 'Official', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-filesystem', '/path/to/allowed/dir'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem'
  },
  { 
    id: 'memory', 
    name: 'Memory', 
    category: 'Core', 
    description: 'Knowledge graph-based persistent memory. Allows AI to remember user details across sessions.', 
    vendor: 'Official', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-memory'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/memory'
  },
  { 
    id: 'fetch', 
    name: 'Fetch', 
    category: 'Core', 
    description: 'Optimized web scraper that converts HTML to Markdown for AI consumption.', 
    vendor: 'Official', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-fetch'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/fetch'
  },
  { 
    id: 'sequential-thinking', 
    name: 'Sequential Thinking', 
    category: 'Core', 
    description: 'A meta-tool that forces the AI to output a structured thought process before acting.', 
    vendor: 'Official', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-sequential-thinking'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking'
  },
  { 
    id: 'time', 
    name: 'Time', 
    category: 'Core', 
    description: 'Tools for retrieving current time and timezone conversion.', 
    vendor: 'Official', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-time'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/time'
  },

  // --- DEV TOOLS (Git, CI/CD, Debugging) ---
  { 
    id: 'git', 
    name: 'Git', 
    category: 'DevTools', 
    description: 'Full Git CLI wrapper: diffs, history, branching, and status.', 
    vendor: 'Official', 
    command: 'docker', 
    args: ['run', '-i', '--rm', '-v', '${PWD}:/repo', 'mcp/git'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/git'
  },
  { 
    id: 'github', 
    name: 'GitHub', 
    category: 'DevTools', 
    description: 'Manage Issues, Pull Requests, and search repositories via GitHub API.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-github'],
    env: { 'GITHUB_PERSONAL_ACCESS_TOKEN': '<YOUR_TOKEN>' },
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/github'
  },
  { 
    id: 'gitlab', 
    name: 'GitLab', 
    category: 'DevTools', 
    description: 'GitLab API integration for enterprise repository management.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-gitlab'],
    env: { 'GITLAB_TOKEN': '<YOUR_TOKEN>' },
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/gitlab'
  },
  { 
    id: 'sentry', 
    name: 'Sentry', 
    category: 'DevTools', 
    description: 'Fetch and analyze error stack traces from Sentry.io.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-sentry'],
    env: { 'SENTRY_AUTH_TOKEN': '<YOUR_TOKEN>' },
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sentry'
  },
  { 
    id: 'chrome-devtools', 
    name: 'Chrome DevTools', 
    category: 'DevTools', 
    description: 'Control a local Chrome instance to inspect DOM, network, and console.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-chrome-devtools'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/chrome-devtools'
  },
  { 
    id: 'playwright', 
    name: 'Playwright', 
    category: 'DevTools', 
    description: 'Browser automation for E2E testing and screenshot generation.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-playwright'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/playwright'
  },
  { 
    id: 'puppeteer', 
    name: 'Puppeteer', 
    category: 'DevTools', 
    description: 'Headless Chrome Node.js API for scraping and automation.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-puppeteer'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer'
  },
  { 
    id: 'docker', 
    name: 'Docker', 
    category: 'DevTools', 
    description: 'Manage containers, images, and volumes via Docker Engine API.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-docker'],
    homepage: 'https://github.com/ckreiling/mcp-server-docker'
  },
  { 
    id: 'kubernetes', 
    name: 'Kubernetes', 
    category: 'DevTools', 
    description: 'Interact with K8s clusters: list pods, logs, describe deployments.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-kubernetes'],
    homepage: 'https://github.com/Flux159/mcp-server-kubernetes'
  },
  { 
    id: 'openapi', 
    name: 'OpenAPI (Swagger)', 
    category: 'DevTools', 
    description: 'Dynamically interact with any API given its OpenAPI spec URL.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-openapi', '<SPEC_URL>'],
    homepage: 'https://github.com/ivo-toby/mcp-openapi-server'
  },
  {
    id: 'ghidra',
    name: 'Ghidra',
    category: 'DevTools',
    description: 'Reverse engineering tool integration for analyzing binaries.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-ghidra'],
    homepage: 'https://github.com/modelcontextprotocol/servers' 
  },

  // --- CLOUD INFRASTRUCTURE ---
  { 
    id: 'aws', 
    name: 'AWS', 
    category: 'Cloud', 
    description: 'Manage AWS resources (EC2, S3, Lambda) via CLI wrapper.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-aws'],
    env: { 'AWS_PROFILE': 'default' },
    homepage: 'https://github.com/aws-samples/aws-mcp-servers-samples'
  },
  { 
    id: 'cloudflare', 
    name: 'Cloudflare', 
    category: 'Cloud', 
    description: 'Manage Workers, DNS, and R2 storage.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-cloudflare'],
    env: { 'CLOUDFLARE_API_TOKEN': '...' },
    homepage: 'https://github.com/cloudflare/mcp-server-cloudflare'
  },
  { 
    id: 'vercel', 
    name: 'Vercel', 
    category: 'Cloud', 
    description: 'Deployments, domains, and project management on Vercel.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-vercel'],
    env: { 'VERCEL_TOKEN': '...' },
    homepage: 'https://github.com/Quegenx/vercel-mcp-server'
  },
  { 
    id: 'azure', 
    name: 'Azure', 
    category: 'Cloud', 
    description: 'Azure Resource Manager integration.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-azure'],
    homepage: 'https://github.com/modelcontextprotocol/servers'
  },
  { 
    id: 'gcp', 
    name: 'Google Cloud', 
    category: 'Cloud', 
    description: 'Google Cloud Platform resources management.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-gcp'],
    homepage: 'https://github.com/krzko/google-cloud-mcp'
  },
  { 
    id: 'heroku', 
    name: 'Heroku', 
    category: 'Cloud', 
    description: 'Manage Heroku dynos and apps.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-heroku'],
    homepage: 'https://github.com/modelcontextprotocol/servers'
  },

  // --- DATABASES ---
  { 
    id: 'postgres', 
    name: 'PostgreSQL', 
    category: 'Database', 
    description: 'Full read/write SQL access. Works with Neon, Supabase, RDS.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-postgres', 'postgresql://user:pass@localhost:5432/db'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/postgres'
  },
  { 
    id: 'sqlite', 
    name: 'SQLite', 
    category: 'Database', 
    description: 'Query local SQLite .db files.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-sqlite', 'data.db'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite'
  },
  { 
    id: 'supabase', 
    name: 'Supabase', 
    category: 'Database', 
    description: 'Supabase Management API (Auth, Storage, DB).', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-supabase'],
    env: { 'SUPABASE_KEY': '...' },
    homepage: 'https://github.com/supabase-community/supabase-mcp'
  },
  { 
    id: 'neon', 
    name: 'Neon DB', 
    category: 'Database', 
    description: 'Serverless Postgres management for Neon.', 
    vendor: 'Verified Partner', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-postgres', '<NEON_CONNECTION_STRING>'],
    homepage: 'https://github.com/neondatabase/mcp-server-neon'
  },
  { 
    id: 'mongodb', 
    name: 'MongoDB', 
    category: 'Database', 
    description: 'Query NoSQL collections and documents.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-mongodb'],
    homepage: 'https://github.com/mongodb-developer/mongodb-mcp-server'
  },
  { 
    id: 'redis', 
    name: 'Redis', 
    category: 'Database', 
    description: 'Key-value store operations.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-redis', 'redis://localhost:6379'],
    homepage: 'https://github.com/modelcontextprotocol/servers'
  },
  { 
    id: 'mysql', 
    name: 'MySQL', 
    category: 'Database', 
    description: 'Connect to MySQL or MariaDB.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-mysql'],
    homepage: 'https://github.com/f4ww4z/mcp-mysql-server'
  },
  { 
    id: 'planetscale', 
    name: 'PlanetScale', 
    category: 'Database', 
    description: 'Manage database branches and deploy requests.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-planetscale'],
    homepage: 'https://github.com/hunterjsb/zed-planetscale-mcp'
  },
  { 
    id: 'qdrant', 
    name: 'Qdrant', 
    category: 'Database', 
    description: 'Vector database for semantic search/RAG.', 
    vendor: 'Verified Partner', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-qdrant'],
    homepage: 'https://github.com/qdrant/mcp-server-qdrant'
  },
  { 
    id: 'pinecone', 
    name: 'Pinecone', 
    category: 'Database', 
    description: 'Managed vector database API.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-pinecone'],
    homepage: 'https://github.com/pinecone-io/pinecone-mcp'
  },
  { 
    id: 'snowflake', 
    name: 'Snowflake', 
    category: 'Database', 
    description: 'Data warehouse queries.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-snowflake'],
    homepage: 'https://github.com/dynamike/snowflake-mcp-server'
  },
  { 
    id: 'clickhouse', 
    name: 'ClickHouse', 
    category: 'Database', 
    description: 'Real-time analytics DBMS.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-clickhouse'],
    homepage: 'https://github.com/dubin555/clickhouse_mcp_server'
  },

  // --- AI & SEARCH ---
  { 
    id: 'brave-search', 
    name: 'Brave Search', 
    category: 'AI', 
    description: 'Privacy-first web search. High quality results for LLMs.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-brave-search'],
    env: { 'BRAVE_API_KEY': '...' },
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search'
  },
  { 
    id: 'google-search', 
    name: 'Google Search', 
    category: 'AI', 
    description: 'Official Google Custom Search API.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-google-search'],
    env: { 'GOOGLE_API_KEY': '...' },
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/google-search'
  },
  { 
    id: 'exa', 
    name: 'Exa (Metaphor)', 
    category: 'AI', 
    description: 'Neural search engine designed specifically for AI agents.', 
    vendor: 'Verified Partner', 
    command: 'npx', 
    args: ['-y', 'mcp-server-exa'],
    env: { 'EXA_API_KEY': '...' },
    homepage: 'https://github.com/exa-labs/exa-mcp-server'
  },
  { 
    id: 'replicate', 
    name: 'Replicate', 
    category: 'AI', 
    description: 'Run open-source models (Llama, Stable Diffusion) via API.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-replicate'],
    env: { 'REPLICATE_API_TOKEN': '...' },
    homepage: 'https://github.com/noeltg77/replicate-mcp'
  },
  { 
    id: 'huggingface', 
    name: 'Hugging Face', 
    category: 'AI', 
    description: 'Search models, datasets and spaces.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-huggingface'],
    homepage: 'https://github.com/shreyaskarnik/huggingface-mcp-server'
  },
  { 
    id: 'openai', 
    name: 'OpenAPI Manager', 
    category: 'AI', 
    description: 'Manage OpenAI assistants and files (meta-management).', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-openai'],
    homepage: 'https://github.com/modelcontextprotocol/servers'
  },
  { 
    id: 'ollama', 
    name: 'Ollama', 
    category: 'AI', 
    description: 'Control local LLMs running via Ollama.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-ollama'],
    homepage: 'https://github.com/rawveg/ollama-mcp'
  },
  { 
    id: 'glean', 
    name: 'Glean', 
    category: 'AI', 
    description: 'Enterprise search across all company apps.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-glean'],
    homepage: 'https://github.com/longyi1207/glean-mcp-server'
  },
  { 
    id: 'perplexity', 
    name: 'Perplexity', 
    category: 'AI', 
    description: 'Search with citations using Perplexity API.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-perplexity'],
    homepage: 'https://github.com/jsonallen/perplexity-mcp'
  },
  { 
    id: 'firecrawl', 
    name: 'Firecrawl', 
    category: 'AI', 
    description: 'Turn any website into LLM-ready data.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-firecrawl'],
    homepage: 'https://github.com/firecrawl/firecrawl'
  },
  { 
    id: 'apify', 
    name: 'Apify', 
    category: 'AI', 
    description: 'Run web scrapers and automation actors.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-apify'],
    homepage: 'https://github.com/apify/apify-mcp-server'
  },

  // --- SAAS & PRODUCTIVITY ---
  { 
    id: 'slack', 
    name: 'Slack', 
    category: 'Social', 
    description: 'Read messages, post to channels, summarize threads.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-slack'],
    env: { 'SLACK_BOT_TOKEN': '...' },
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/slack'
  },
  { 
    id: 'notion', 
    name: 'Notion', 
    category: 'SaaS', 
    description: 'Manage workspace pages and databases.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-notion'],
    env: { 'NOTION_API_KEY': '...' },
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/notion'
  },
  { 
    id: 'linear', 
    name: 'Linear', 
    category: 'SaaS', 
    description: 'Software issue tracking and sprint planning.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-linear'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/linear'
  },
  { 
    id: 'jira', 
    name: 'Jira', 
    category: 'SaaS', 
    description: 'Enterprise issue tracking.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-jira'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/jira'
  },
  { 
    id: 'google-drive', 
    name: 'Google Drive', 
    category: 'SaaS', 
    description: 'Search, read, and upload files.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-gdrive'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive'
  },
  { 
    id: 'google-maps', 
    name: 'Google Maps', 
    category: 'SaaS', 
    description: 'Location search and directions.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-google-maps'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps'
  },
  { 
    id: 'obsidian', 
    name: 'Obsidian', 
    category: 'SaaS', 
    description: 'Search and edit your local markdown second brain.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-obsidian', '/path/to/vault'],
    homepage: 'https://github.com/calclavia/mcp-obsidian'
  },
  { 
    id: 'todoist', 
    name: 'Todoist', 
    category: 'SaaS', 
    description: 'Manage personal tasks and projects.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-todoist'],
    homepage: 'https://github.com/mcp-server-todoist'
  },
  { 
    id: 'pipedream', 
    name: 'Pipedream', 
    category: 'SaaS', 
    description: 'Trigger serverless workflows.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-pipedream'],
    homepage: 'https://github.com/pipedreamhq/mcp-server-pipedream'
  },
  { 
    id: 'zapier', 
    name: 'Zapier', 
    category: 'SaaS', 
    description: 'Interact with 5000+ apps via Zapier NLA.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-zapier'],
    homepage: 'https://github.com/zapier/mcp-server-zapier'
  },
  { 
    id: 'stripe', 
    name: 'Stripe', 
    category: 'SaaS', 
    description: 'Query payments, customers and subscriptions.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-stripe'],
    homepage: 'https://github.com/stripe/mcp-server-stripe'
  },
    {
      id: 'hubspot',
      name: 'HubSpot',
      category: 'SaaS',
      description: 'Official HubSpot CRM integration.',
      vendor: 'Community',
      command: 'npx',
      args: ['-y', '@hubspot/mcp-server'],
      env: { 'HUBSPOT_ACCESS_TOKEN': '...' },
      homepage: 'https://github.com/peakmojo/mcp-hubspot'
    },  { 
    id: 'salesforce', 
    name: 'Salesforce', 
    category: 'SaaS', 
    description: 'CRM data access.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-salesforce'],
    homepage: 'https://github.com/salesforce/mcp-server-salesforce'
  },
  { 
    id: 'zendesk', 
    name: 'Zendesk', 
    category: 'SaaS', 
    description: 'Customer support ticket management.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-zendesk'],
    homepage: 'https://github.com/zendesk/mcp-server-zendesk'
  },

  // --- DESIGN & MEDIA ---
  { 
    id: 'figma', 
    name: 'Figma', 
    category: 'Design', 
    description: 'Read design files, layers, and comments.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-figma'],
    homepage: 'https://github.com/figma/mcp-server-figma'
  },
  { 
    id: 'spotify', 
    name: 'Spotify', 
    category: 'Design', 
    description: 'Control playback and search music.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-spotify'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/spotify'
  },
  { 
    id: 'unity', 
    name: 'Unity', 
    category: 'Design', 
    description: 'Interact with Unity Editor (requires plugin).', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-unity'],
    homepage: 'https://github.com/Unity-Technologies/mcp-server-unity'
  },
  { 
    id: 'godot', 
    name: 'Godot', 
    category: 'Design', 
    description: 'Godot Game Engine interface.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-godot'],
    homepage: 'https://github.com/godotengine/mcp-server-godot'
  },

  // --- WEB3 / CRYPTO (Requested) ---
  { 
    id: 'etherscan', 
    name: 'Etherscan', 
    category: 'Web3', 
    description: 'Check Ethereum wallet balances and transactions.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-etherscan'],
    homepage: 'https://github.com/etherscan/mcp-server-etherscan'
  },
  { 
    id: 'coingecko', 
    name: 'CoinGecko', 
    category: 'Web3', 
    description: 'Get real-time crypto prices and market data.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-coingecko'],
    homepage: 'https://github.com/coingecko/mcp-server-coingecko'
  },
  { 
    id: 'solana', 
    name: 'Solana', 
    category: 'Web3', 
    description: 'Interact with Solana blockchain RPC.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-solana'],
    homepage: 'https://github.com/solana-labs/mcp-server-solana'
  },
  { 
    id: 'alchemy', 
    name: 'Alchemy', 
    category: 'Web3', 
    description: 'Blockchain development platform API.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-alchemy'],
    homepage: 'https://github.com/alchemyplatform/mcp-server-alchemy'
  },

  // --- SOCIAL ---
  { 
    id: 'twitter', 
    name: 'X (Twitter)', 
    category: 'Social', 
    description: 'Search tweets and post updates.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-twitter'],
    homepage: 'https://github.com/twitter/mcp-server-twitter'
  },
  { 
    id: 'discord', 
    name: 'Discord', 
    category: 'Social', 
    description: 'Bot interface for Discord servers.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-discord'],
    homepage: 'https://github.com/discord/mcp-server-discord'
  },
  { 
    id: 'telegram', 
    name: 'Telegram', 
    category: 'Social', 
    description: 'Telegram bot integration.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-telegram'],
    homepage: 'https://github.com/telegram/mcp-server-telegram'
  },
  { 
    id: 'linkedin', 
    name: 'LinkedIn', 
    category: 'Social', 
    description: 'Post updates and retrieve profile info.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-linkedin'],
    homepage: 'https://github.com/linkedin/mcp-server-linkedin'
  },
  { 
    id: 'whatsapp', 
    name: 'WhatsApp', 
    category: 'Social', 
    description: 'Send messages via Twilio/WhatsApp Business.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-whatsapp'],
    homepage: 'https://github.com/twilio/mcp-server-whatsapp'
  },

  // --- SCIENCE & DATA ---
  { 
    id: 'alpha-vantage', 
    name: 'AlphaVantage', 
    category: 'Science', 
    description: 'Stock market and finance data.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-alphavantage'],
    homepage: 'https://github.com/alphavantage/mcp-server-alphavantage'
  },
  { 
    id: 'weather', 
    name: 'Weather', 
    category: 'Science', 
    description: 'Current weather and forecasts.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-weather'],
    homepage: 'https://github.com/weather/mcp-server-weather'
  },
  { 
    id: 'arxiv', 
    name: 'ArXiv', 
    category: 'Science', 
    description: 'Search scientific papers.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-arxiv'],
    homepage: 'https://github.com/arxiv/mcp-server-arxiv'
  },
  { 
    id: 'wolfram', 
    name: 'Wolfram Alpha', 
    category: 'Science', 
    description: 'Computational intelligence and math.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', 'mcp-server-wolfram'],
    homepage: 'https://github.com/wolfram/mcp-server-wolfram'
  },
  
  // --- OTHER UTILITIES ---
  { 
    id: 'context7', 
    name: 'Context7', 
    category: 'Other', 
    description: 'Injects documentation for libraries into context.', 
    vendor: 'Verified Partner', 
    command: 'npx', 
    args: ['-y', 'mcp-server-context7'],
    homepage: 'https://github.com/context7/mcp-server-context7'
  },
  {
    id: 'macos',
    name: 'macOS Utils',
    category: 'Other',
    description: 'Control local macOS features (Calendar, Reminders).',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-macos'],
    homepage: 'https://github.com/mcp-server-macos/mcp-server-macos'
  },
  // --- ADDED BATCH: AI INFRA & AUTOMATION ---
  {
    id: 'e2b',
    name: 'E2B Sandbox',
    category: 'AI',
    description: 'Secure cloud sandboxes for AI code execution.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', '@modelcontextprotocol/server-e2b'],
    homepage: 'https://github.com/cased/e2b-mcp'
  },
  {
    id: 'langfuse',
    name: 'Langfuse',
    category: 'AI',
    description: 'Open source LLM engineering platform: traces, evals, prompt management.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-langfuse'],
    env: { 'LANGFUSE_PUBLIC_KEY': '...', 'LANGFUSE_SECRET_KEY': '...' },
    homepage: 'https://github.com/langfuse/mcp-server-langfuse'
  },
  {
    id: 'browserbase',
    name: 'Browserbase',
    category: 'DevTools',
    description: 'Serverless headless browser for AI agents (scraping, automation).',
    vendor: 'Verified Partner',
    command: 'npx',
    args: ['-y', '@browserbase/mcp-server'],
    env: { 'BROWSERBASE_API_KEY': '...' },
    homepage: 'https://docs.browserbase.com/mcp'
  },
  {
    id: 'fal-ai',
    name: 'Fal.ai',
    category: 'AI',
    description: 'Fastest inference for diffusion models (media generation).',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-fal'],
    env: { 'FAL_KEY': '...' },
    homepage: 'https://github.com/fal-ai/mcp-server-fal'
  },

  // --- ADDED BATCH: COMMUNICATION ---
  {
    id: 'twilio',
    name: 'Twilio',
    category: 'Social',
    description: 'Send SMS and WhatsApp messages via API.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-twilio'],
    env: { 'TWILIO_ACCOUNT_SID': '...', 'TWILIO_AUTH_TOKEN': '...' },
    homepage: 'https://github.com/twilio/mcp-server-twilio'
  },
  {
    id: 'sendgrid',
    name: 'SendGrid',
    category: 'Social',
    description: 'Transactional email delivery service.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-sendgrid'],
    env: { 'SENDGRID_API_KEY': '...' },
    homepage: 'https://github.com/sendgrid/mcp-server-sendgrid'
  },
  {
    id: 'resend',
    name: 'Resend',
    category: 'Social',
    description: 'Modern email API for developers.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-resend'],
    env: { 'RESEND_API_KEY': '...' },
    homepage: 'https://github.com/resend/mcp-server-resend'
  },

  // --- ADDED BATCH: INFORMATION & NEWS ---
  {
    id: 'hackernews',
    name: 'Hacker News',
    category: 'Social',
    description: 'Read top stories, comments, and user profiles from HN.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-hackernews'],
    homepage: 'https://github.com/hackernews/mcp-server-hackernews'
  },
  {
    id: 'reddit',
    name: 'Reddit',
    category: 'Social',
    description: 'Search subreddits and read posts.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-reddit'],
    homepage: 'https://github.com/reddit/mcp-server-reddit'
  },
  {
    id: 'wikipedia',
    name: 'Wikipedia',
    category: 'Science',
    description: 'Search and read Wikipedia articles.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-wikipedia'],
    homepage: 'https://github.com/wikipedia/mcp-server-wikipedia'
  },
  {
    id: 'feedly',
    name: 'Feedly',
    category: 'Social',
    description: 'Access RSS feeds and news aggregations.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-feedly'],
    homepage: 'https://github.com/feedly/mcp-server-feedly'
  },

  // --- ADDED BATCH: DEVOPS & UTILS ---
  {
    id: 'terraform',
    name: 'Terraform',
    category: 'Cloud',
    description: 'Manage infrastructure as code (read state, plan).',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-terraform'],
    homepage: 'https://github.com/hashicorp/mcp-server-terraform'
  },
  {
    id: 'ansible',
    name: 'Ansible',
    category: 'Cloud',
    description: 'Run playbooks and manage inventory.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-ansible'],
    homepage: 'https://github.com/ansible/mcp-server-ansible'
  },
  {
    id: 'grafana',
    name: 'Grafana',
    category: 'DevTools',
    description: 'Query dashboards and alerts.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-grafana'],
    homepage: 'https://github.com/grafana/mcp-server-grafana'
  },
  {
    id: 'prometheus',
    name: 'Prometheus',
    category: 'DevTools',
    description: 'Query metrics via PromQL.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-prometheus'],
    homepage: 'https://github.com/prometheus/mcp-server-prometheus'
  },
  {
    id: 'elasticsearch',
    name: 'Elasticsearch',
    category: 'Database',
    description: 'Full-text search engine queries.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-elasticsearch'],
    homepage: 'https://github.com/elastic/mcp-server-elasticsearch'
  },
  {
    id: 'kafka',
    name: 'Kafka',
    category: 'DevTools',
    description: 'Inspect topics and messages.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-kafka'],
    homepage: 'https://github.com/apache/mcp-server-kafka'
  },
  {
    id: 'pagerduty',
    name: 'PagerDuty',
    category: 'SaaS',
    description: 'Manage incidents and on-call schedules.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-pagerduty'],
    homepage: 'https://github.com/pagerduty/mcp-server-pagerduty'
  },

  // --- ADDED BATCH: PRODUCTIVITY PLUS ---
  {
    id: 'asana',
    name: 'Asana',
    category: 'SaaS',
    description: 'Project and task management (via MicroAgents).',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', '@microagents/server-asana'],
    homepage: 'https://github.com/roychri/mcp-server-asana'
  },
  {
    id: 'trello',
    name: 'Trello',
    category: 'SaaS',
    description: 'Kanban board management.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', '@mseep/server-trello'],
    homepage: 'https://github.com/mseep/mcp-server-trello'
  },
  {
    id: 'zoom',
    name: 'Zoom',
    category: 'SaaS',
    description: 'List meetings and get transcripts (No-Auth flow).',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', '@peakmojo/mcp-server-zoom-noauth'],
    homepage: 'https://github.com/peakmojo/mcp-server-zoom-noauth'
  },
  {
    id: 'microsoft-teams',
    name: 'MS Teams',
    category: 'SaaS',
    description: 'Send messages to Teams channels.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-teams'],
    homepage: 'https://github.com/microsoft/mcp-server-teams'
  },
  { 
    id: 'gmail', 
    name: 'Gmail', 
    category: 'SaaS', 
    description: 'Read and send emails via Google API.', 
    vendor: 'Community', 
    command: 'npx', 
    args: ['-y', '@modelcontextprotocol/server-gmail'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/gmail'
  },
  {
    id: 'google-calendar',
    name: 'Google Calendar',
    category: 'SaaS',
    description: 'Manage events and schedules.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', '@modelcontextprotocol/server-google-calendar'],
    homepage: 'https://github.com/modelcontextprotocol/servers/tree/main/src/google-calendar'
  },
  {
    id: 'box',
    name: 'Box',
    category: 'SaaS',
    description: 'Enterprise content management.',
    vendor: 'Community',
    command: 'npx',
    args: ['-y', 'mcp-server-box'],
    homepage: 'https://github.com/box/mcp-server-box'
  }
];