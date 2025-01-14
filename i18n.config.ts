import zhCN from './i18n/zh-CN.json'
import zhTW from './i18n/zh-TW.json'
import en from './i18n/en.json'

export default defineI18nConfig(() => ({
  legacy: false, // 是否兼容旧版本
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    en,
  },
}))
