# MEMORY.md - 长期记忆 / 隐形知识

_经过时间沉淀的精华 — 不只是记录事件，而是提炼出规律、原则和重要的认知。_

---

## 三层记忆系统

1. **memory/YYYY-MM-DD.md** — 每日笔记(raw logs)
   - 当天发生的事、对话、待跟进
   - 随手记，不刻意整理

2. **MEMORY.md** — 隐形知识(long-term)
   - 从每日笔记中提炼的规律、原则、教训
   - 不含原始事件，只有"学到了什么"
   - 只有主会话加载(安全考虑)

3. **life/** — 重要生活记录
   - 人生重要节点、里程碑
   - 不想遗忘的经历、感悟
   - 与工作/任务无关的个人记忆

---

## Web 部署技能树

- **静态网站**: HTML/CSS/JS → Nginx / Vercel
- **Node.js**: Express/Next.js → PM2 → Docker
- **Docker**: Dockerfile → Docker Compose → 镜像构建
- **Nginx**: 反向代理 → SSL/TLS → 负载均衡
- **CI/CD**: GitHub Actions → 自动化部署

**常用命令**:
```bash
# Docker
docker build -t app . && docker run -d -p 3000:3000 app

# PM2
pm2 start app.js && pm2 logs

# Nginx
nginx -t && nginx -s reload
```

---

## 使用方式

- 每隔几天(heartbeat时)回顾 `memory/` 目录
- 把值得留下的东西提炼到 MEMORY.md
- 有重要的人生时刻存到 `life/`
- 当天的事当天记在 `memory/YYYY-MM-DD.md`

---

_记忆是最强的超能力。_