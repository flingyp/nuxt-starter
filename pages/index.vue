<script setup lang="ts">
const { $message } = useNuxtApp()
const { t } = useI18n()

const [isShow, toggle] = useToggle(false)

const showMessage = () => {
  $message.success(t('messages.success'))
}

const formState = ref({
  username: '',
  password: '',
})

const handleSubmit = () => {
  $message.info(
    t('messages.submitData', { data: JSON.stringify(formState.value) }),
  )
}
</script>

<template>
  <div
    class="min-h-screen p-8 bg-gray-50 dark:bg-[#141414] transition-colors duration-300"
  >
    <!-- 页面标题 -->
    <div class="max-w-7xl mx-auto mb-8 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-50">
        {{ $t("welcome") }}
      </h1>
      <div class="flex items-center gap-4">
        <LangSwitch />
        <ThemeSwitch />
      </div>
    </div>

    <!-- API 示例卡片 -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <!-- 卡片网格布局 -->
      <a-card
        :title="$t('components.antd.title')"
        class="col-span-1 md:col-span-2 shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-[#1f1f1f]"
      >
        <div class="space-y-6">
          <!-- 按钮示例 -->
          <div>
            <h3
              class="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300"
            >
              {{ $t("components.antd.buttons") }}
            </h3>
            <a-space>
              <a-button
                type="primary"
                @click="showMessage"
              >
                {{ $t("components.antd.primaryBtn") }}
              </a-button>
              <a-button>{{ $t("components.antd.defaultBtn") }}</a-button>
              <a-button type="dashed">
                {{ $t("components.antd.dashedBtn") }}
              </a-button>
            </a-space>
          </div>

          <!-- 表单示例 -->
          <div>
            <h3
              class="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300"
            >
              {{ $t("components.antd.form") }}
            </h3>
            <a-form
              :model="formState"
              class="max-w-lg"
              @finish="handleSubmit"
            >
              <a-form-item :label="$t('components.antd.username')">
                <a-input
                  v-model:value="formState.username"
                  :placeholder="$t('components.antd.usernamePlaceholder')"
                />
              </a-form-item>
              <a-form-item :label="$t('components.antd.password')">
                <a-input-password
                  v-model:value="formState.password"
                  :placeholder="$t('components.antd.passwordPlaceholder')"
                />
              </a-form-item>
              <a-form-item>
                <a-button
                  type="primary"
                  html-type="submit"
                >
                  {{ $t("components.antd.submit") }}
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </a-card>

      <!-- VueUse 示例 -->
      <a-card
        :title="$t('components.vueuse.title')"
        class="shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-[#1f1f1f]"
      >
        <div class="space-y-4">
          <a-button @click="toggle(!isShow)">
            {{ $t("components.vueuse.toggle") }}
          </a-button>
          <div
            v-if="isShow"
            class="p-4 rounded transition-colors duration-300 bg-gray-100 dark:bg-[#141414] text-gray-800 dark:text-gray-300"
          >
            {{ $t("components.vueuse.content") }}
          </div>
        </div>
      </a-card>

      <!-- UnoCSS 示例 -->
      <a-card
        :title="$t('components.unocss.title')"
        class="shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-[#1f1f1f]"
      >
        <div class="grid grid-cols-3 gap-4">
          <div
            class="aspect-square bg-blue-500 dark:bg-blue-700 rounded-lg shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-105 transform hover:shadow-xl"
          >
            Box 1
          </div>
          <div
            class="aspect-square bg-green-500 dark:bg-green-700 rounded-lg shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-105 transform hover:shadow-xl"
          >
            Box 2
          </div>
          <div
            class="aspect-square bg-purple-500 dark:bg-purple-700 rounded-lg shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-105 transform hover:shadow-xl"
          >
            Box 3
          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>
