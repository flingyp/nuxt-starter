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

## API 层使用

项目集成了统一的 API 请求层，基于 Nuxt 的 `useFetch` 封装，提供了以下功能：

- 统一的请求配置和错误处理
- 完整的 TypeScript 类型支持
- 自动处理请求/响应拦截
- 支持环境变量配置
- 与 Nuxt 的数据获取最佳实践集成

### 基础用法

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

### 环境配置

在 `.env` 文件中配置 API 基础路径：

```env
NUXT_PUBLIC_API_BASE=http://api.example.com
```

### 错误处理

API 层统一处理了常见的错误情况：

- 401: 未登录或登录过期
- 403: 权限不足
- 404: 资源不存在
- 500: 服务器错误

所有的错误都会通过 Ant Design Vue 的 Message 组件展示给用户。

### 类型支持

所有的 API 请求都有完整的 TypeScript 类型支持：

- 请求参数类型检查
- 响应数据类型提示
- 错误处理类型支持

### 注意事项

1. 在组件中使用 API 时，建议使用 `useAsyncData` 包装请求：
   - 提供更好的数据缓存和复用
   - 自动处理服务端渲染
   - 提供加载状态管理

2. 为每个 `useAsyncData` 调用提供唯一的 key：

```typescript
// 好的做法
const { data } = await useAsyncData('uniqueKey', () => getUserInfo())

// 避免使用动态 key
const { data } = await useAsyncData(`user-${id}`, () => getUserInfo(id))
```

3. 处理错误情况：

```typescript
const { data, error } = await useAsyncData('users', () => getUserList())
if (error.value) {
  // 处理错误
  console.error('Failed to fetch users:', error.value)
  return
}
```

## 贡献

欢迎提交 Issue 和 Pull Request。

## 许可证

[MIT](LICENSE)
