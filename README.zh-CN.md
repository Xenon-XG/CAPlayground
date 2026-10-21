<table width="100%">
  <tr>
    <td align="right" width="120"><img src="apps/web/public/icon-dark.png" alt="CAPlayground 图标" width="100" /></td>
    <td align="left"><h1>CAPlayground</h1><h3>在电脑上制作精美的 iOS 和 iPadOS 动态壁纸。</h3></td>
  </tr>
</table>

[English](README.md) · 简体中文

## 项目简介

CAPlayground 是一款在浏览器中运行的 Core Animation 编辑器，可用于制作 iOS 和 iPadOS 动态壁纸。开发进度见[路线图](https://caplayground.vercel.app/roadmap)。中文界面目前覆盖首页、项目管理、编辑器主要操作、壁纸库和账户页面。壁纸作者提供的内容仍按原文显示。

## 本地运行

### 环境要求

- Node.js 20 或更高版本
- Bun（原项目推荐）；也可以在 `apps/web` 下使用 npm 和 `package-lock.json`

应用位于 `apps/web`，所有命令都在该目录运行：

```bash
cd apps/web
bun install
bun run dev
```

访问 http://localhost:3000。生产构建使用 `bun run build && bun run start`。

### 环境变量

复制 `apps/web/.env.example` 为 `apps/web/.env.local`，按需填写。Supabase 认证需要 `NEXT_PUBLIC_SUPABASE_URL` 和 `NEXT_PUBLIC_SUPABASE_ANON_KEY`。不配置时仍可使用本机项目和编辑器，但登录、账户及依赖账户的功能不可用。删除账户的 API 另需 `SUPABASE_SERVICE_ROLE_KEY`。

Google Drive 同步需要 `GOOGLE_CLIENT_ID` 和 `GOOGLE_CLIENT_SECRET`；壁纸投稿及同步所用的 GitHub App 需要对应的 `GITHUB_APP_ID`、`GITHUB_APP_PRIVATE_KEY` 和 `GITHUB_INSTALLATION_ID`。这些服务的凭据应作为私密变量配置，不要提交到仓库。

## 部署到 Cloudflare Workers

项目包含 Next.js 服务端页面和 API 路由，不能直接作为静态站点导出到 Cloudflare Pages。仓库已加入 OpenNext 适配器和 `wrangler.jsonc`，可在 Workers 上构建和预览：

```bash
cd apps/web
npm ci
npm run preview:cf
```

检查预览中的首页、项目创建、`.tendies` 导出、登录和云端同步后，再运行 `npm run deploy:cf`。部署命令需要你自己的 Cloudflare 账户登录和相应权限。也可以在 Cloudflare Workers 的 Git 集成中把项目根目录设为 `apps/web`，安装命令设为 `npm ci`，部署命令设为 `npm run deploy:cf`。

在构建环境中设置 `NEXT_PUBLIC_SITE_URL` 和所需的 `NEXT_PUBLIC_*` 变量；服务端密钥则以 Workers secrets 配置。使用 Google Drive 时，在 Google OAuth 设置中加入 `https://你的域名/api/drive/callback`。使用 Supabase 登录时同步配置站点地址和 OAuth 重定向地址。壁纸库的图片、视频、统计及投稿还依赖仓库代码中引用的外部服务。未配置这些服务时应逐项验证相应功能。

`wrangler.jsonc` 中的 Worker 名称可按需修改。模板 zip 已通过静态资源提供，避免在 Workers 运行时读取本地文件。Cloudflare 的 Next.js 部署建议会随适配器版本变化；此分支使用 Next.js 16 和 OpenNext。Cloudflare 目前推荐对新项目评估 vinext；迁移前应运行兼容性检查并验证登录、API 与模板导出。

## 参与贡献与许可

贡献指南见 [CONTRIBUTING.md](.github/CONTRIBUTING.md)。源代码许可见 [LICENSE](LICENSE)。托管服务的使用还受其[服务条款](https://caplayground.vercel.app/tos)约束，其中包含对分享内容的署名要求。
