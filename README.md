# Nuxt3 Template

一个基于 Nuxt3 的现代化前端项目模板，集成了常用的 UI 组件库和工具。

## 技术栈

- **框架：** [Nuxt3](https://nuxt.com/) - Vue3 的全栈框架
- **UI 组件库：** [Ant Design Vue](https://antdv.com/) - 企业级 Vue 组件库
- **原子化 CSS：** [UnoCSS](https://unocss.dev/) - 即时的原子化 CSS 引擎
- **组合式工具：** [VueUse](https://vueuse.org/) - Vue 组合式 API 工具集
- **图标：** [@iconify-json/carbon](https://icon-sets.iconify.design/carbon/) - Carbon 设计图标集
- **国际化：** [Nuxt i18n](https://i18n.nuxtjs.org/) - 多语言支持
- **类型检查：** TypeScript - JavaScript 的超集
- **代码质量：** [ESLint](https://eslint.org/) - JavaScript 和 Vue 代码的静态检查工具

## 特性

- ✨ 开箱即用的 Nuxt3 配置
- 🎨 集成 Ant Design Vue 组件库，支持暗色主题
- 🎯 UnoCSS 提供的原子化 CSS 能力
- 🛠️ VueUse 提供的组合式 API 工具
- 🌐 内置国际化支持，支持简体中文、繁体中文和英文
- 🌙 内置暗色模式支持（带过渡动画）
- 📦 自动导入组件和组合式函数
- 🔍 完整的 TypeScript 支持
- 🛡️ 集成 ESLint，确保代码质量和一致性

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发服务器

启动开发服务器 (`http://localhost:3000`):

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 本地预览生产版本

```bash
npm run preview
```

### 代码检查

运行 ESLint 检查代码风格：

```bash
npm run lint
```

自动修复问题：

```bash
npm run lint:fix
```

## 项目结构

```
├── assets/            # 静态资源
│   └── css/          # 全局样式
├── components/        # 组件
├── composables/      # 组合式函数
├── i18n/             # 国际化语言文件
│   ├── en.json       # 英文翻译
│   ├── zh-CN.json    # 简体中文翻译
│   └── zh-TW.json    # 繁体中文翻译
├── pages/            # 页面
├── plugins/          # 插件
├── types/            # 类型定义
├── app.vue           # 应用入口
├── nuxt.config.ts    # Nuxt 配置
├── uno.config.ts     # UnoCSS 配置
└── eslint.config.mjs  # ESLint 配置
```

## 自定义主题

项目集成了 Ant Design Vue 的主题定制功能，可以通过以下方式使用：

1. 使用 CSS 变量：

```css
.my-element {
  color: var(--ant-colorPrimary);
  background: var(--ant-colorPrimaryBg);
}
```

2. 使用 UnoCSS 工具类：

```html
<div class="text-primary bg-primary-bg hover:bg-primary-bg-hover">内容</div>
```

## 国际化

项目支持多语言切换，默认语言为简体中文。用户可以通过语言切换组件选择繁体中文或英文。

## 贡献

欢迎提交 Issue 和 Pull Request。

## 许可证

[MIT](LICENSE)
