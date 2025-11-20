# Zeabur 部署指南

本项目已配置好 Dockerfile，可以直接在 Zeabur 上部署。

## 🚀 部署步骤

### 1. 在 Zeabur 上创建新项目

1. 登录 [Zeabur](https://zeabur.com)
2. 点击 "New Project"
3. 选择 "Import from GitHub"
4. 选择 `mcp-showcase` 仓库

### 2. 配置部署

Zeabur 会自动检测到 Dockerfile，使用以下配置：

- **Build Command**: 自动使用 Dockerfile
- **Start Command**: Nginx 会自动启动（已在 Dockerfile 中配置）
- **Port**: 80（Nginx 默认端口）

### 3. 环境变量（可选）

如果需要配置环境变量，可以在 Zeabur 的项目设置中添加。

### 4. 部署

点击 "Deploy" 按钮，Zeabur 会自动：
1. 构建 Docker 镜像
2. 运行 TypeScript 编译检查
3. 构建 Vite 生产版本
4. 启动 Nginx 服务器

## 📦 Dockerfile 说明

项目使用多阶段构建：

1. **Builder Stage**: 
   - 使用 Node.js 18 Alpine 镜像
   - 安装依赖 (`npm ci`)
   - 构建项目 (`npm run build`)

2. **Production Stage**:
   - 使用 Nginx Alpine 镜像
   - 复制构建产物到 Nginx HTML 目录
   - 配置 SPA 路由支持

## 🔧 本地测试 Docker 构建

如果想在本地测试 Docker 构建：

```bash
# 构建镜像
docker build -t mcp-showcase .

# 运行容器
docker run -p 8080:80 mcp-showcase

# 访问 http://localhost:8080
```

## ✅ 验证部署

部署成功后，访问 Zeabur 提供的 URL，应该能看到：
- ✅ MCP Directory 首页
- ✅ 103+ 工具列表
- ✅ 搜索和筛选功能正常
- ✅ 工具安装对话框正常

## 🐛 故障排除

### 构建失败

如果构建失败，检查：
1. TypeScript 配置是否正确（`tsconfig.json`, `tsconfig.node.json`）
2. 所有依赖是否在 `package.json` 中
3. 构建日志中的错误信息

### 运行时错误

如果部署后无法访问：
1. 检查 Nginx 配置是否正确
2. 检查端口是否正确映射
3. 查看 Zeabur 的日志输出

## 📝 文件说明

- `Dockerfile`: Docker 构建配置
- `.dockerignore`: Docker 构建时忽略的文件
- `tsconfig.json`: TypeScript 主配置（用于 src/）
- `tsconfig.node.json`: TypeScript Node 配置（用于 vite.config.ts）

## 🔄 更新部署

每次推送到 GitHub 的 main 分支，Zeabur 会自动触发重新部署（如果启用了自动部署）。

手动触发部署：
1. 在 Zeabur 项目页面
2. 点击 "Redeploy" 按钮

