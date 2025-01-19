import type { UseFetchOptions } from 'nuxt/app'
import type { ApiResponse } from '~/types/api'

const baseURL = process.env.NUXT_PUBLIC_API_BASE || '/api'

interface RequestOptions {
  headers: Record<string, string>
}

export const useRequest = <T = any>(
  url: string,
  opts?: UseFetchOptions<ApiResponse<T>>,
) => {
  const { $message } = useNuxtApp()

  const defaults: UseFetchOptions<ApiResponse<T>> = {
    baseURL,
    key: url,
    // 请求拦截
    onRequest({ options }: { options: RequestOptions }) {
      console.log('请求拦截:', options)
      // 添加 token
      const token = useCookie('token').value
      if (token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        }
      }
    },
    // 响应拦截
    onResponse({ response }) {
      console.log('响应拦截:', response)
      const res = response._data as ApiResponse<T>
      if (res.code !== 200) {
        // 统一错误处理
        $message.error(res.message || '请求失败')
        return Promise.reject(res)
      }
      return res.data
    },
    // 错误处理
    onResponseError({ response }) {
      console.log('错误处理:', response)
      const status = response.status
      switch (status) {
        case 401:
          $message.error('请先登录')
          // 可以在这里处理登录过期
          break
        case 403:
          $message.error('没有权限')
          break
        case 404:
          $message.error('资源不存在')
          break
        case 500:
          $message.error('服务器错误')
          break
        default:
          $message.error('网络错误')
      }
    },
  }

  // 合并配置
  const options = { ...defaults, ...opts }

  return useFetch(url, options)
}
