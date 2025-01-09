<script setup lang="ts">
const { $message } = useNuxtApp();

const [isShow, toggle] = useToggle(false);

const showMessage = () => {
  $message.success("这是一条成功消息");
};

const formState = ref({
  username: "",
  password: "",
});

const handleSubmit = () => {
  $message.info(`提交的数据：${JSON.stringify(formState.value)}`);
};
</script>

<template>
  <div
    class="min-h-screen p-8 bg-gray-50 dark:bg-[#141414] transition-colors duration-300"
  >
    <!-- 页面标题 -->
    <div class="max-w-7xl mx-auto mb-8 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-50">
        Nuxt3 + Ant Design Vue + VueUse + UnoCSS 示例
      </h1>
      <ThemeSwitch />
    </div>

    <!-- 卡片网格布局 -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Ant Design Vue 示例 -->
      <a-card
        title="Ant Design Vue 组件示例"
        class="col-span-1 md:col-span-2 shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-[#1f1f1f]"
      >
        <div class="space-y-6">
          <!-- 按钮示例 -->
          <div>
            <h3
              class="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300"
            >
              按钮组件：
            </h3>
            <a-space>
              <a-button type="primary" @click="showMessage">主要按钮</a-button>
              <a-button>默认按钮</a-button>
              <a-button type="dashed">虚线按钮</a-button>
            </a-space>
          </div>

          <!-- 表单示例 -->
          <div>
            <h3
              class="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300"
            >
              表单组件：
            </h3>
            <a-form :model="formState" @finish="handleSubmit" class="max-w-lg">
              <a-form-item label="用户名">
                <a-input
                  v-model:value="formState.username"
                  placeholder="请输入用户名"
                />
              </a-form-item>
              <a-form-item label="密码">
                <a-input-password
                  v-model:value="formState.password"
                  placeholder="请输入密码"
                />
              </a-form-item>
              <a-form-item>
                <a-button type="primary" html-type="submit">提交</a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </a-card>

      <!-- VueUse 示例 -->
      <a-card
        title="VueUse 功能示例"
        class="shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-[#1f1f1f]"
      >
        <div class="space-y-4">
          <a-button @click="toggle(!isShow)">切换显示/隐藏</a-button>
          <div
            v-if="isShow"
            class="p-4 rounded transition-colors duration-300 bg-gray-100 dark:bg-[#141414] text-gray-800 dark:text-gray-300"
          >
            这是一段通过 useToggle 控制显示的内容
          </div>
        </div>
      </a-card>

      <!-- UnoCSS 示例 -->
      <a-card
        title="UnoCSS 样式示例"
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
