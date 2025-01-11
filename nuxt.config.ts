import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // 添加模块
  modules: [
    '@unocss/nuxt',
    '@ant-design-vue/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
  ],

  // 配置自动导入
  imports: {
    // 启用自动导入
    autoImport: true,
  },
  devtools: { enabled: true },

  // 添加全局 CSS
  css: ['@unocss/reset/tailwind.css', '~/assets/css/theme.css'],
  compatibilityDate: '2024-11-01',

  // TypeScript 配置
  typescript: {
    shim: true,
    strict: true,
    typeCheck: false,
  },

  // ESLint 配置
  eslint: {
    config: {
      stylistic: true,
    },
  },

  i18n: {
    langDir: '',
    defaultLocale: 'zh-CN',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'zh-CN',
        name: '简体中文',
        file: 'zh-CN.json',
      },
      {
        code: 'zh-TW',
        name: '繁體中文',
        file: 'zh-TW.json',
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
    ],
  },

  // unocss 配置
  unocss: {
    // 启用图标
    icons: true,
  },
})
