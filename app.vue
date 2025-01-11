<script setup lang="ts">
import { computed } from 'vue'
import { theme } from 'ant-design-vue'
import { useDark } from '@vueuse/core'
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context'
import { useThemeToken } from '~/composables/useThemeToken'

const isDark = useDark()
const themeAlgorithm = computed<ThemeConfig>(() => ({
  algorithm: isDark.value ? theme.darkAlgorithm : theme.defaultAlgorithm,
}))

// 使用主题 token
useThemeToken()
</script>

<template>
  <ClientOnly>
    <a-config-provider :theme="themeAlgorithm">
      <a-style-provider hash-priority="high">
        <NuxtPage />
      </a-style-provider>
    </a-config-provider>
  </ClientOnly>
</template>
