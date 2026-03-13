# HEARTBEAT.md

# 主动记录任务

## 今日待记录 (主动记录)
- [ ] 所有对话要点
- [ ] 用户提到的重要信息
- [ ] 任务进度

## 系统事件处理

当收到 `nightly-review` 事件时：
1. 读取 `memory/` 目录下所有笔记
2. 提取关键要点到 `.progressive/daily-summary/`
3. 更新 `.progressive/actions.md` 行动项
4. 输出回顾摘要

---

_保持记录 = 保持聪明_