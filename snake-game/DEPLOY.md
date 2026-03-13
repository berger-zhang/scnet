# 部署自动化脚本

## 本地测试

```bash
# 启动本地服务器测试
cd snake-game
python3 -m http.server 8080
# 访问 http://localhost:8080
```

## Vercel 部署

### 方式1: Web 一键部署
1. 访问 https://vercel.com
2. Import GitHub repo: `berger-zhang/scnet`
3. 配置:
   - Framework: Other
   - Build Command: (留空)
   - Output Directory: `snake-game`
4. Deploy

### 方式2: Vercel CLI
```bash
npm i -g vercel
vercel login
# 链接 GitHub 账号后
vercel --prod
```

## 验证检查清单

- [ ] 页面加载无报错
- [ ] 方向键控制正常
- [ ] 触摸控制正常（手机）
- [ ] 分数累加正常
- [ ] 撞墙游戏结束
- [ ] 撞自己游戏结束
- [ ] 重置按钮可用

## 部署后

访问: `https://scnet.vercel.app` (或自定义域名)