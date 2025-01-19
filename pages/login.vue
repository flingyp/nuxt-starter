<script setup lang="ts">
const { login } = useUserApi()

const formState = ref({
  username: '',
  password: '',
})

const handleSubmit = async () => {
  try {
    const { data, error } = await login(formState.value)
    if (error.value) return
    // 处理登录成功
    const token = data.value?.data.token
    if (token) {
      const tokenCookie = useCookie('token')
      tokenCookie.value = token
      // 跳转到首页
      navigateTo('/')
    }
  }
  catch (err) {
    console.error('Login failed:', err)
  }
}
</script>

<template>
  <div @click="handleSubmit">
    登陆
  </div>
</template>
