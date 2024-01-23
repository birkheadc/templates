export type LoginCredentials = {
  username: string,
  password: string,
  [key: string]: string
}

export const DEFAULT_LOGIN_CREDENTIALS: LoginCredentials = {
  username: "",
  password: ""
}