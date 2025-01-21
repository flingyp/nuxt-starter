import { watchEffect, onMounted } from 'vue'
import { theme } from 'ant-design-vue'
import type { GlobalToken } from 'ant-design-vue/es/theme'

export const useThemeToken = () => {
  const { useToken } = theme
  const { token } = useToken()

  // 将 Ant Design主题 token 转换为 CSS 变量
  const updateThemeVars = (tokens: GlobalToken) => {
    if (!import.meta.client) return // 确保只在客户端执行

    const root = document.documentElement
    const prefix = '--ant-'

    // 提取所有以 colorPrimary 开头的颜色变量
    Object.entries(tokens).forEach(([key, value]) => {
      if (key.startsWith('colorPrimary')) {
        root.style.setProperty(`${prefix}${key}`, value as string)
      }
    })
  }

  // 在组件挂载后执行初始化
  onMounted(() => {
    updateThemeVars(token.value)
  })

  // 监听 token 变化
  watchEffect(() => {
    if (import.meta.client) {
      updateThemeVars(token.value)
    }
  })

  return {
    token,
  }
}
