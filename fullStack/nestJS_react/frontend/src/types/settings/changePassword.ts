export type ChangePasswordRequest = {
  password: string,
  confirm: string,
  [key: string]: string
}

export const DEFAULT_CHANGE_PASSWORD_REQUEST: ChangePasswordRequest = {
  password: '',
  confirm: ''
}