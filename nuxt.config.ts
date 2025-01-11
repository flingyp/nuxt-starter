import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // 添加模块
  modules: [
    "@unocss/nuxt",
    "@ant-design-vue/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/i18n"
  ],

  // 配置自动导入
  imports: {
    // 启用自动导入
    autoImport: true,
  },

  // 添加全局 CSS
  css: ["@unocss/reset/tailwind.css", "~/assets/css/theme.css"],

  // unocss 配置
  unocss: {
    // 启用图标
    icons: true,
  },

  // TypeScript 配置
  typescript: {
    shim: false,
    strict: true,
    typeCheck: false,
  },

  i18n: {
    langDir: '',
    defaultLocale: 'zh-CN',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'zh-CN',
        name: '简体中文',
        file: 'zh-CN.json'
      },
      {
        code: 'zh-TW',
        name: '繁體中文',
        file: 'zh-TW.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      }
    ],
  }
});
