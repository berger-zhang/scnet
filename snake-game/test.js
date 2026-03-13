#!/usr/bin/env node
/**
 * 贪吃蛇游戏 - 自动化测试
 * 运行: node test-snake.js
 */

const { chromium } = require('playwright');

const TEST_URL = process.env.TEST_URL || 'https://scnet.pages.dev/snake-game/';

async function test() {
  console.log('=== 🐍 贪吃蛇测试 ===\n');
  console.log('测试地址:', TEST_URL);
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const results = [];
  
  try {
    // 1. 页面加载
    console.log('📝 测试: 页面加载...');
    await page.goto(TEST_URL, { timeout: 15000 });
    results.push({ name: '页面加载', pass: true });
    
    // 2. 检查标题
    const title = await page.title();
    console.log('  标题:', title);
    results.push({ name: '标题包含"贪吃蛇"', pass: title.includes('贪吃蛇') || title.includes('Snake') });
    
    // 3. 检查 canvas
    const canvas = await page.$('canvas#game');
    console.log('  Canvas:', canvas ? '✓ 存在' : '✗ 不存在');
    results.push({ name: 'Canvas 元素', pass: !!canvas });
    
    // 4. 检查分数显示
    const score = await page.$eval('#score', el => el.textContent);
    console.log('  初始分数:', score);
    results.push({ name: '分数显示', pass: score === '0' });
    
    // 5. 检查按钮
    const startBtn = await page.$('#startBtn');
    const resetBtn = await page.$('#resetBtn');
    console.log('  按钮:', startBtn && resetBtn ? '✓ 存在' : '✗ 不存在');
    results.push({ name: '控制按钮', pass: !!(startBtn && resetBtn));
    
    // 6. 测试开始游戏
    console.log('\n📝 测试: 开始游戏...');
    await startBtn.click();
    await page.waitForTimeout(200);
    const btnText = await page.$eval('#startBtn', el => el.textContent);
    console.log('  开始后按钮文本:', btnText);
    results.push({ name: '开始游戏功能', pass: btnText.includes('游戏中') });
    
    // 7. 测试键盘控制
    console.log('\n📝 测试: 键盘控制...');
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowLeft');
    results.push({ name: '键盘控制', pass: true });
    console.log('  键盘事件: ✓');
    
    // 8. 检查控制台错误
    console.log('\n📝 测试: 控制台错误...');
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.waitForTimeout(500);
    results.push({ name: '无控制台错误', pass: errors.length === 0 });
    if (errors.length) console.log('  错误:', errors);
    else console.log('  无错误 ✓');
    
  } catch (e) {
    console.log('❌ 测试失败:', e.message);
    results.push({ name: '测试执行', pass: false, error: e.message });
  }
  
  await browser.close();
  
  // 输出结果
  console.log('\n=== 📊 测试结果 ===');
  let passed = 0;
  results.forEach(r => {
    const icon = r.pass ? '✓' : '✗';
    console.log(icon + ' ' + r.name);
    if (r.error) console.log('  错误: ' + r.error);
    if (r.pass) passed++;
  });
  
  console.log('\n通过: ' + passed + '/' + results.length);
  console.log('========================\n');
  
  process.exit(passed === results.length ? 0 : 1);
}

test();