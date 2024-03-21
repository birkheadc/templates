import { FormValidationErrorMatchesCriteria } from "../types/formValidation/formValidationErrorMatchesCriteria"

export const validationConfig: ValidationConfig = {
  password: {
    minLength: 8,
    maxLength: 255
  },
  displayName: {
    minLength: 1,
    maxLength: 32,
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