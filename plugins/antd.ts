import {
  Button,
  message,
  Input,
  Form,
  Select,
  Card,
  Menu,
  Layout,
  ConfigProvider,
  Space,
} from 'ant-design-vue'
import type { App } from 'vue'

// 需要注册的组件
const components = [
  Button,
  Input,
  Form,
  Select,
  Card,
  Menu,
  Layout,
  ConfigProvider,
  Space,
]

export default defineNuxtPlugin((nuxtApp) => {
  // 注册所有组件
  const app: App = nuxtApp.vueApp
  components.forEach((component) => {
    app.use(component)
  })

  // 注册全局方法
  return {
    provide: {
      message,
    },
  }
})
