# Anki Page Extension

一个Chrome扩展，帮助用户更方便地创建和管理Anki卡片。

## 功能特性

- 快速将网页内容添加到Anki
- 支持自定义卡片模板
- 便捷的弹出窗口操作界面
- 支持快捷键操作

## 技术栈

- React 18
- Vite
- Chrome Extension API
- Prettier 代码格式化

## 项目结构
``` txt
src/
├── pages/ # 主应用页面
│ └── app/
│ ├── index.html
│ └── main.jsx
└── extension/ # 扩展相关文件
├── popup/ # 弹出窗口
│ ├── index.html
│ └── main.jsx
├── background.js
└── content.js
```

## 开发指南

1. 安装依赖
```bash
pnpm install
```

## 在Chrome中安装

1. 打开Chrome扩展管理页面 (`chrome://extensions/`)
2. 开启"开发者模式"
3. 点击"加载已解压的扩展程序"
4. 选择项目的 `dist` 目录

