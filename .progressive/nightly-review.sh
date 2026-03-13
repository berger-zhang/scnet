#!/bin/bash
# 夜间回顾脚本 - Progressive Summarization Nightly Review
# 每天 23:00 自动执行

WORKSPACE="/root/private_data/openclaw/workspace"
TODAY=$(date +%Y-%m-%d)
YESTERDAY=$(date -d "yesterday" +%Y-%m-%d)

echo "=== 夜间回顾开始: $TODAY ==="

# 1. 检查昨日和今日的 memory 文件
echo "📝 检查每日笔记..."
for date in $YESTERDAY $TODAY; do
  if [ -f "$WORKSPACE/memory/$date.md" ]; then
    echo "  ✓ memory/$date.md 存在"
  else
    echo "  ✗ memory/$date.md 不存在"
  fi
done

# 2. 提取关键要点到 daily-summary
echo "📌 提取关键要点..."
SUMMARY_FILE="$WORKSPACE/.progressive/daily-summary/$TODAY.md"
if [ -f "$WORKSPACE/memory/$TODAY.md" ]; then
  cat > "$SUMMARY_FILE" << 'EOF'
# 每日关键要点

## 对话主题

EOF
  echo "  ✓ 已创建 $SUMMARY_FILE"
else
  echo "  ✗ 今日无笔记"
fi

# 3. 更新行动项（如果有新任务）
echo "🎯 更新行动项..."
if [ -f "$WORKSPACE/memory/$TODAY.md" ]; then
  # 简单的关键词检测 - 寻找待办事项
  grep -E "(TODO|待办|记住|不要忘记|帮我)" "$WORKSPACE/memory/$TODAY.md" >> "$WORKSPACE/.progressive/actions.md" 2>/dev/null || true
fi

# 4. 输出状态
echo ""
echo "=== 回顾完成 ==="
echo "今日摘要: $SUMMARY_FILE"
echo "行动项: $WORKSPACE/.progressive/actions.md"

exit 0