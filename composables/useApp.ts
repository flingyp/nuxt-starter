export const useApp = () => {
  const { $dayjs } = useNuxtApp()
  const { locale } = useI18n()

  // 将 Ant Design主题 token 转换为 CSS 变量
  useThemeToken()

  // 监听语言变化，更新 dayjs 语言
  watch(() => locale.value, (newLocale) => {
    const dayjsLocale = newLocale.toLowerCase().replace('-', '-')
    $dayjs.locale(dayjsLocale)
  })
}
