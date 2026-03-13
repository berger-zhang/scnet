# Cloudflare Pages 部署配置

## 快速部署步骤 (2分钟)

### 1. 注册 Cloudflare
1. 打开 https://pages.cloudflare.com
2. 用 GitHub 账号登录
3. 点击 "Create a project"
4. 选择 `berger-zhang/scnet`

### 2. 配置
- **Project name**: `snake-game`
- **Production branch**: `main`
- **Build output directory**: `snake-game`
- **Build command**: (留空)

### 3. 完成
- 点击 "Save and Deploy"
- 等待 ~1 分钟

---

## 部署后

访问: `https://snake-game.pages.dev`

---

## 后续部署

修改代码后推送到 GitHub 会自动触发部署：
```bash
git add -A
git commit -m "Update: xxx"
git push origin main
```