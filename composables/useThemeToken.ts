import { watchEffect, onMounted } from "vue";
import { theme } from "ant-design-vue";
import type { GlobalToken } from "ant-design-vue/es/theme";

export const useThemeToken = () => {
  const { useToken } = theme;
  const { token } = useToken();

  // 将主题 token 转换为 CSS 变量
  const updateThemeVars = (tokens: GlobalToken) => {
    if (!process.client) return; // 确保只在客户端执行
    
    const root = document.documentElement;
    const prefix = "--ant-";

    // 提取所有以 colorPrimary 开头的颜色变量
    Object.entries(tokens).forEach(([key, value]) => {
      if (key.startsWith("colorPrimary")) {
        root.style.setProperty(`${prefix}${key}`, value as string);
      }
    });
  };

  // 在组件挂载后执行初始化
  onMounted(() => {
    updateThemeVars(token.value);
  });

  // 监听 token 变化
  watchEffect(() => {
    if (process.client) {
      updateThemeVars(token.value);
    }
  });

  return {
    token,
  };
};
