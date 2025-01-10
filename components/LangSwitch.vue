<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale, locales } = useI18n();
</script>

<template>
  <div class="lang-switch">
    <a-select v-model:value="locale">
      <a-select-option v-for="loc in locales" :key="loc.code" :value="loc.code">
        <span v-if="loc.code === 'zh-CN'">🇨🇳</span>
        <span v-if="loc.code === 'zh-TW'">🇨🇳</span>
        <span v-if="loc.code === 'en'">🇬🇧</span>
        {{ loc.name }}
      </a-select-option>
    </a-select>
  </div>
</template>

<style scoped></style>
