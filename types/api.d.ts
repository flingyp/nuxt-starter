// 基础响应类型
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
}

// 分页响应类型
export interface PaginatedResponse<T = any> extends ApiResponse {
  data: {
    list: T[]
    total: number
    page: number
    pageSize: number
  }
}

// 分页请求参数
export interface PaginationParams {
  page?: number
  pageSize?: number
}
