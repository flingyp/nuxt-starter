<script setup lang="ts">
// 监听系统主题变化
const systemDark = usePreferredDark()
watch(systemDark, (newValue) => {
  isDark.value = newValue
})

// 使用 useDark 时设置初始值为系统主题模式
const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light',
})

const toggleDark = useToggle(isDark)

// 切换主题的动画效果
const toggleTheme = (event: MouseEvent) => {
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )

  // 兼容性处理
  if (!document.startViewTransition) {
    toggleDark()
    return
  }

  const transition = document.startViewTransition(() => {
    toggleDark()
  })

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]

    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
</script>

<template>
  <div class="theme-switch">
    <a-button
      type="text"
      size="large"
      class="theme-switch__button"
      @click="toggleTheme"
    >
      <template #icon>
        <div class="theme-switch__icon" />
      </template>
    </a-button>
  </div>
</template>

<style scoped>
.theme-switch {
  @apply inline-flex items-center justify-center;
}

.theme-switch__button {
  @apply !rounded-full flex items-center justify-center transition-colors duration-300;
  @apply hover:bg-gray-100 dark:hover:bg-gray-800;
}

.theme-switch__icon {
  @apply i-carbon-sun dark:i-carbon-moon;
  @apply text-lg transition-all duration-300;
  @apply text-gray-700 dark:text-gray-200;
}
</style>

<style>
/* View Transitions API 相关样式保持不变 */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 2147483646;
}

[data-theme="dark"]::view-transition-old(root) {
  z-index: 2147483646;
}

[data-theme="dark"]::view-transition-new(root) {
  z-index: 1;
}
</style>
