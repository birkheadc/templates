export type Config = {
  api: ApiConfig
}

export type ApiConfig = {
  general: {
    timeout: number
  },
  authentication: {
    url: string,
    method: string
  }
}