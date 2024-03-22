import { FormValidationErrorMatchesCriteria } from "../types/formValidation/formValidationErrorMatchesCriteria"

export const validationConfig: ValidationConfig = {
  password: {
    minLength: parseInt(process.env.NEXT_PUBLIC_PASSWORD_MIN_LENGTH ?? "0"),
    maxLength: parseInt(process.env.NEXT_PUBLIC_PASSWORD_MAX_LENGTH ?? "0")
  },
  displayName: {
    minLength: parseInt(process.env.NEXT_PUBLIC_DISPLAY_NAME_MIN_LENGTH ?? "0"),
    maxLength: parseInt(process.env.NEXT_PUBLIC_DISPLAY_NAME_MAX_LENGTH ?? "0"),
    match: {
      regexp: /^[a-zA-Z0-9]+$/,
      criteria: FormValidationErrorMatchesCriteria.ALPHANUMERIC
    }
  }
}

export type ValidationConfig = {
  [key: string]: ValidationOptions | undefined
}

export type ValidationOptions = {
  minLength?: number,
  maxLength?: number,
  match?: {
    regexp: RegExp,
    criteria: FormValidationErrorMatchesCriteria
  }
}