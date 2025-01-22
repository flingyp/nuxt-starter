# Nuxt3 Template

一个基于 Nuxt3 的现代化前端项目模板，集成了常用的 UI 组件库和工具。

## 技术栈

- **框架：** [Nuxt3](https://nuxt.com/) - Vue3 的全栈框架
- **UI 组件库：** [Ant Design Vue](https://antdv.com/) - 企业级 Vue 组件库
- **原子化 CSS：** [UnoCSS](https://unocss.dev/) - 即时的原子化 CSS 引擎
- **组合式工具：** [VueUse](https://vueuse.org/) - Vue 组合式 API 工具集
- **图标：** [@iconify-json/carbon](https://icon-sets.iconify.design/carbon/) - Carbon 设计图标集
- **国际化：** [Nuxt i18n](https://i18n.nuxtjs.org/) - 多语言支持
- **日期处理：** [Day.js](https://day.js.org/) - 轻量的日期处理库
- **类型检查：** TypeScript - JavaScript 的超集
- **代码质量：** [ESLint](https://eslint.org/) - JavaScript 和 Vue 代码的静态检查工具

## 特性

- ✨ 开箱即用的 Nuxt3 配置
- 🎨 集成 Ant Design Vue 组件库，支持暗色主题
- 🎯 UnoCSS 提供的原子化 CSS 能力
- 🛠️ VueUse 提供的组合式 API 工具
- 🌐 内置国际化支持，支持简体中文、繁体中文和英文
- 🌙 内置暗色模式支持（带过渡动画）
- 📅 集成 Day.js 日期处理，支持多语言
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
# 使用开发环境配置
npm run dev

# 使用生产环境配置
npm run dev:prod
```

### 构建生产版本

```bash
# 使用开发环境配置构建
npm run build

# 使用生产环境配置构建
npm run generate:prod
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
└── eslint.config.mjs # ESLint 配置
```

## 环境变量

- 开发环境：`.env.development`
- 生产环境：`.env.production`

### 获取环境变量

```typescript
// 通过 useRuntimeConfig 获取环境变量配置
const config = useRuntimeConfig()
console.log('config', config)
```

## 功能使用指南

### 主题配置

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

### 国际化使用

项目支持多语言切换，默认语言为简体中文。用户可以通过语言切换组件选择繁体中文或英文。

```vue
<script setup>
const { t, locale } = useI18n()

// 切换语言
const switchLanguage = (lang) => {
  locale.value = lang
}
</script>

<template>
  <div>{{ t('welcome') }}</div>
</template>
```

### Day.js 使用

项目集成了 Day.js 日期处理库，支持多语言和常用插件：

```vue
<script setup>
const { $dayjs } = useNuxtApp()
const { locale } = useI18n()

// 监听语言变化，更新 dayjs 语言
watch(locale, (newLocale) => {
  const dayjsLocale = newLocale.toLowerCase().replace('-', '-')
  $dayjs.locale(dayjsLocale)
})

// 格式化日期
const formattedDate = $dayjs().format('YYYY-MM-DD HH:mm:ss')

// 相对时间
const relativeTime = $dayjs().subtract(1, 'day').fromNow()

// UTC 时间
const utcTime = $dayjs().utc().format()
</script>
```

### API 层使用

项目集成了统一的 API 请求层，基于 Nuxt 的 `useFetch` 封装，提供了以下功能：

- 统一的请求配置和错误处理
- 完整的 TypeScript 类型支持
- 自动处理请求/响应拦截
- 支持环境变量配置
- 与 Nuxt 的数据获取最佳实践集成

#### 基础用法

1. 定义 API 类型 (types/api.d.ts):

```typescript
// 基础响应类型
interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
}

// 业务数据类型
interface UserInfo {
  id: number
  username: string
  email: string
}
```

2. 创建 API 模块 (api/user.ts):

```typescript
export const useUserApi = () => {
  // 获取用户信息
  const getUserInfo = () => {
    return useRequest<UserInfo>('/user/info')
  }

  // 获取用户列表
  const getUserList = (params: PaginationParams) => {
    return useRequest<UserInfo[]>('/user/list', {
      params,
    })
  }

  return {
    getUserInfo,
    getUserList,
  }
}
```

3. 在组件中使用:

```vue
<script setup lang="ts">
const { getUserInfo, getUserList } = useUserApi()

// 使用 useAsyncData 包装 API 调用
const { data: userInfo, pending: loading } = await useAsyncData('userInfo', () => 
  getUserInfo()
)

// 获取列表数据
const { data: users } = await useAsyncData('users', () => 
  getUserList({ page: 1, pageSize: 10 })
)
</script>
```

## 贡献

欢迎提交 Issue 和 Pull Request。

## 许可证

[MIT](LICENSE)
