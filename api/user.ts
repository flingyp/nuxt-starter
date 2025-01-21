import type { PaginationParams } from '~/types/api'

export interface UserInfo {
  id: number
  username: string
  email: string
}

export interface LoginParams {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
}

export const useUserApi = () => {
  // 获取用户信息
  const getUserInfo = () => {
    return useRequest<UserInfo>('/user/info')
  }

  // 用户登录
  const login = (data: LoginParams) => {
    return useRequest<LoginResponse>('/user/login', {
      method: 'POST',
      body: data,
    })
  }

  // 获取用户列表
  const getUserList = (params: PaginationParams) => {
    return useRequest<UserInfo[]>('/user/list', {
      params,
    })
  }

  return {
    getUserInfo,
    login,
    getUserList,
  }
}
