export type Config = {
  api: ApiConfig,
  validation: ValidationConfig
}

export type ApiConfig = {
  general: {
    timeout: number
  },
  authentication: {
    url: string
  },
  users: {
    url: string
  }
}

export type ValidationConfig = {
  settings: {
    password: {
      minChars: number,
      maxChars: number
    }
  }
}