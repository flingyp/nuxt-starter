# Nuxt3 Template

一个基于 Nuxt3 的现代化前端项目模板，集成了常用的 UI 组件库和工具。

## 技术栈

- **框架：** [Nuxt3](https://nuxt.com/) - Vue3 的全栈框架
- **UI 组件库：** [Ant Design Vue](https://antdv.com/) - 企业级 Vue 组件库
- **原子化 CSS：** [UnoCSS](https://unocss.dev/) - 即时的原子化 CSS 引擎
- **组合式工具：** [VueUse](https://vueuse.org/) - Vue 组合式 API 工具集
- **图标：** [@iconify-json/carbon](https://icon-sets.iconify.design/carbon/) - Carbon 设计图标集
- **类型检查：** TypeScript - JavaScript 的超集

## 特性

- ✨ 开箱即用的 Nuxt3 配置
- 🎨 集成 Ant Design Vue 组件库，支持暗色主题
- 🎯 UnoCSS 提供的原子化 CSS 能力
- 🛠️ VueUse 提供的组合式 API 工具
- 🌙 内置暗色模式支持（带过渡动画）
- 📦 自动导入组件和组合式函数
- 🔍 完整的 TypeScript 支持

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

## 项目结构

```
├── assets/            # 静态资源
│   └── css/          # 全局样式
├── components/        # 组件
├── composables/      # 组合式函数
├── pages/            # 页面
├── plugins/          # 插件
├── types/            # 类型定义
├── app.vue           # 应用入口
├── nuxt.config.ts    # Nuxt 配置
└── uno.config.ts     # UnoCSS 配置
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

## 贡献

欢迎提交 Issue 和 Pull Request。

## 许可证

[MIT](LICENSE)
