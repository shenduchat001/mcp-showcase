# MCP Directory

A beautiful, modern directory showcasing 100+ production-ready MCP (Model Context Protocol) tools for AI agents.

🌐 **Live Demo**: [View on GitHub Pages](https://shenduchat001.github.io/mcp-showcase/)

## ✨ Features

- 📦 **100+ MCP Tools** - Comprehensive collection of verified MCP servers
- 🎯 **5 Platform Support** - Configuration guides for:
  - Claude Desktop
  - Gemini CLI
  - CodeX CLI
  - Cursor Editor
  - VSCode
- 🔍 **Smart Search** - Search tools by name or description
- 🏷️ **Category Filtering** - Filter by Core, DevTools, Database, Cloud, AI, SaaS, Social, Design, Web3, Science, and more
- 📋 **One-Click Install** - Copy configuration code for your platform
- 🎨 **Modern UI** - Beautiful dark theme with smooth animations
- ♿ **Accessible** - Built with accessibility in mind

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/shenduchat001/mcp-showcase.git
cd mcp-showcase

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app.

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
mcp-showcase/
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point
│   ├── mcpData.ts       # MCP tools data (103+ tools)
│   └── vite-env.d.ts    # TypeScript definitions
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Component library
- **Framer Motion** - Animations
- **React Hooks** - State management

## 📊 MCP Tools Categories

- **Core** - Essential tools (Filesystem, Memory, Fetch, Time)
- **DevTools** - Development tools (Git, GitHub, Docker, Kubernetes)
- **Database** - Database integrations (PostgreSQL, MongoDB, Redis)
- **Cloud** - Cloud platforms (AWS, Azure, GCP, Vercel)
- **AI** - AI services (Brave Search, Replicate, Hugging Face)
- **SaaS** - SaaS integrations (Slack, Notion, Linear, Jira)
- **Social** - Social platforms (Twitter, Discord, Telegram)
- **Design** - Design tools (Figma, Spotify, Unity)
- **Web3** - Blockchain tools (Etherscan, CoinGecko, Solana)
- **Science** - Scientific tools (ArXiv, Wolfram Alpha, Weather)
- **Other** - Miscellaneous tools

## 🔧 Verification

The project includes a verification script to check GitHub links and npm packages:

```bash
node verify-mcp-tools.mjs
```

## 📝 Documentation

- [CORRECTIONS.md](./CORRECTIONS.md) - List of corrections made to MCP tools
- [CORRECTIONS_SUMMARY.md](./CORRECTIONS_SUMMARY.md) - Summary of corrections
- [IMPROVEMENTS.md](./IMPROVEMENTS.md) - Improvement suggestions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Model Context Protocol](https://modelcontextprotocol.io/) - The MCP specification
- All MCP server maintainers and contributors
- Material-UI and Framer Motion communities

## 📞 Support

If you have any questions or issues, please open an issue on GitHub.

---

Made with ❤️ for the MCP community

