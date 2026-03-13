# 渐进式总结系统 (Progressive Summarization)

基于 Thiago Forte 的方法论，四层结构：

---

## 第一层：原始对话 (Layer 1 - Raw)
- **位置**: `memory/YYYY-MM-DD.md`
- **内容**: 当天所有对话、事件、想法的原始记录
- **原则**: 不过滤，全部记

## 第二层：关键要点 (Layer 2 - Key Points)
- **位置**: `.progressive/daily-summary/YYYY-MM-DD.md`
- **内容**: 提取每个对话的核心要点
- **格式**: 主题 | 关键信息 | 来源

## 第三层：行动项 (Layer 3 - Action Items)
- **位置**: `.progressive/actions.md`
- **内容**: 需要跟进的任务、待办、承诺
- **状态**: pending | in-progress | done

## 第四层：周/月度洞察 (Layer 4 - Insights)
- **位置**: `.progressive/insights/`
- **内容**: 跨时间段提炼的规律、原则、长期知识
- **更新频率**: 每周/每月

---

## 优先级系统

按重要性和紧急性分类：

- 🔴 **P0** - 必须立即处理
- 🟠 **P1** - 本周内完成
- 🟡 **P2** - 本月内完成
- ⚪ **P3** - 有空再做

---

## 每日流程

1. **白天**: 记录到 `memory/YYYY-MM-DD.md`
2. **傍晚**: 提取要点到 `.progressive/daily-summary/`
3. **夜间**: 自动回顾，提取行动项到 `actions.md`
4. **每周**: 提炼洞察到 `insights/`

---

_记忆是最强的超能力。整理是记忆的朋友。_