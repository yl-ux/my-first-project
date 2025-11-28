# 个人网页 (示例)

这是一个简单的个人网页示例，包含响应式布局、暗色模式切换和前端表单验证。

如何查看：

- 直接在文件管理器中双击 `index.html` 打开（本地静态页面）。
- 推荐使用 VS Code 的 Live Server 插件以获得更接近服务器环境的体验。

文件：

- `index.html` — 页面结构
- `styles.css` — 页面样式（响应式 + 暗色模式）
- `script.js` — 主题切换与表单前端验证

 如果你希望我：
 
 - 添加更多项目卡片并从 JSON 加载数据，请回复 “从 JSON 加载项目”。
 - 将表单连接到后端（发送邮件或存储），请回复 “实现后端表单”。

## 使站点可被搜索引擎索引（SEO）

已为站点添加基本的 SEO 支持：

- 页面元描述（`<meta name="description">`）和关键词（`<meta name="keywords">`）。
- Open Graph 与 Twitter Card 标签，便于分享到社交平台时显示友好预览。
- JSON-LD 结构化数据（`WebSite` + `Person`），帮助搜索引擎理解站点信息。
- `sitemap.xml` 与 `robots.txt`（已替换为 `https://yl-ux.github.io/个人网页/`）。

下一步建议：

- 部署站点到你选择的域名（例如 GitHub Pages、Netlify、Vercel 等）。
- 在 Google Search Console 中添加并验证你的网站，然后提交 `sitemap.xml`。 
- 在 Bing Webmaster 中亦可提交站点并监视收录情况。

示例：通过 GitHub Pages 部署并提交 sitemap 的简要步骤：

1. 将仓库推送到 GitHub。  
2. 在仓库设置中启用 GitHub Pages（通常选择 `main` 分支或 `docs/` 目录）。  
3. 在 `Settings → Pages` 页面，可以看到站点的 URL（例如 `https://<your-username>.github.io/<repo>/`）。我已将占位符替换为你的 GitHub Pages URL（`https://yl-ux.github.io/个人网页/`），如果仓库名或用户名有变动请告诉我以便更新。
4. 在 Google Search Console 中添加该 URL，完成验证（通常可用 DNS、HTML 文件或 HTML 元标记验证）。  
5. 提交 `sitemap.xml`（例如 `https://your-username.github.io/<repo>/sitemap.xml`）。

如果需要，我可以：

- 帮你把 `your-domain.com` 替换为实际域名（或仓库 Pages URL）。
- 指导并演示如何在 Google Search Console 中提交 sitemap。
- 将 `sitemap.xml` 自动生成包含更多页面（比如每个项目页面）。

## 部署到 GitHub Pages（一步到位）

下面是把当前代码部署到 GitHub Pages 的简要步骤。执行前请确认你已经有一个 GitHub 账户。

1. 在本地初始化 git（如果尚未初始化）：

```powershell
Set-Location d:\python
git init
git add .
git commit -m "Initial site"
```

2. 在 GitHub 上创建一个新的仓库（例如 `personal-site`），然后将远程仓库添加并推送到 `main` 分支：

```powershell
git remote add origin https://github.com/<your-username>/<repo>.git
git branch -M main
git push -u origin main
```

3. 我已在仓库中添加 GitHub Actions workflow：`.github/workflows/deploy.yml`，它会在每次 push 到 `main`（或 `master`）时，把仓库内容发布到 `gh-pages` 分支。GitHub 提供的 `GITHUB_TOKEN` 足以执行发布动作，无需额外秘密。

4. 推送后，进入 GitHub 仓库页面：`Settings → Pages`，确认 Pages 源选择为 `gh-pages` 分支（Action 运行后会创建并更新该分支）。

5. 页面上线后，你会看到类似 `https://<your-username>.github.io/<repo>/` 的 URL。已自动将 `index.html`、`sitemap.xml` 与 `robots.txt` 中的 `https://your-domain.com` 替换为 `https://yl-ux.github.io/个人网页/`。

注意与替代方案：
- 如果你更希望直接从 `main` 的 `root` 或 `docs/` 发布，也可以在 `Settings → Pages` 手动选择来源并跳过 Action。  
- 若想使用自定义域，在 GitHub Pages 设置中添加域名并把该域名放入仓库根目录的 `CNAME` 文件（Action 不会自动创建 CNAME）。

需要我替你做的：

- 我可以把 `https://your-domain.com` 全部替换为你的 GitHub Pages URL（或自定义域）。请把你的仓库 URL 或自定义域告诉我。
- 我也可以演示如何在 GitHub 上创建仓库并完成第一次 push（如果你愿意，我会输出一组可复制的 PowerShell 命令）。
