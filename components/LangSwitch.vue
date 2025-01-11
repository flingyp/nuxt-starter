<script setup lang="ts">
const { locale, locales, setLocaleCookie } = useI18n()

const switchLocale = () => {
  setLocaleCookie(locale.value);
};
</script>

<template>
  <div class="lang-switch">
    <a-select v-model:value="locale" @change="switchLocale">
      <a-select-option v-for="loc in locales" :key="loc.code" :value="loc.code">
        <span v-if="loc.code === 'zh-CN'">🇨🇳</span>
        <span v-if="loc.code === 'zh-TW'">🇨🇳</span>
        <span v-if="loc.code === 'en'">🇬🇧</span>
        {{ loc.name }}
      </a-select-option>
    </a-select>
  </div>
</template>

<style scoped>
.lang-switch {
  display: flex;
  align-items: center;
}

.lang-switch :deep(.ant-select-selector) {
  @apply bg-transparent dark:hover:bg-gray-800;
}

.lang-switch :deep(.ant-select-selection-item) {
  @apply text-gray-700 dark:text-gray-200;
}
</style>
