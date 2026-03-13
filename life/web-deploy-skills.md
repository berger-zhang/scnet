# Web 应用部署学习笔记

_从零掌握 Web 应用部署_

---

## 技能清单

### 1. 静态网站部署
- [x] HTML/CSS/JS 文件服务
- [ ] Nginx 配置静态文件
- [ ] 域名 + HTTPS 配置

### 2. Node.js 部署
- [ ] Express/Next.js 应用
- [ ] PM2 进程管理
- [ ] 环境变量管理
- [ ] 日志管理

### 3. Docker 容器化
- [ ] Dockerfile 编写
- [ ] Docker Compose 多服务
- [ ] 镜像构建与推送
- [ ] 容器编排基础

### 4. 云平台部署
- [ ] Vercel 部署前端
- [ ] Render / Railway 部署后端
- [ ] 阿里云/腾讯云服务器
- [ ] CI/CD 自动化

### 5. Nginx 反向代理
- [ ] 基础配置
- [ ] SSL/TLS 配置
- [ ] 负载均衡基础
- [ ] 缓存配置

---

## 部署流程图

```
开发 → 构建 → 测试 → 镜像化 → 部署 → 监控
              ↓
         Docker/K8s
              ↓
         Nginx 反向代理
              ↓
         域名 + HTTPS
```

---

## 常用命令

### Docker
```bash
docker build -t app .
docker run -d -p 3000:3000 app
docker-compose up -d
docker ps -a
docker logs -f container_id
```

### Nginx
```bash
nginx -t          # 测试配置
nginx -s reload   # 重载配置
systemctl status nginx
```

### PM2 (Node.js)
```bash
pm2 start app.js
pm2 list
pm2 logs
pm2 restart all
```

---

## 学习资源

- Docker 官方文档: https://docs.docker.com/
- Nginx 入门: https://nginx.org/en/docs/
- PM2 文档: https://pm2.keymetrics.io/
- Vercel: https://vercel.com/docs

---

## 实践项目

1. **静态网页** → 部署到 Vercel
2. **Node.js API** → Docker 容器部署
3. **完整项目** → Docker Compose + Nginx

---

_持续更新中..._