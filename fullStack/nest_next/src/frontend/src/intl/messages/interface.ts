import { ResultMessage } from "@/types/result/resultMessage"
import { FormValidationErrorMessage } from "../../types/formValidation/formValidationErrorMessage"
import { FormValidationErrorMatchesCriteria } from "../../types/formValidation/formValidationErrorMatchesCriteria"

export interface Messages {
  home: {
    section1: {
      header: string,
      body: string
    },
    section2: {
      header: string,
      body: string
    },
    section3: {
      header: string,
      body: string
    },
    section4: {
      header: string,
      body: string
    }
  },
  nav: {
    home: string,
    login: string,
    register: string,
    logout: string,
    dashboard: string
  },
  login: {
    header: string,
    recoverAccount: string,
    registerNew: string,
    sessionExpired: string
  },
  register: {
    header: string,
    instructions: string,
    verified: {
      checking: string,
      failure: string,
      instructions: string
    }
  },
  accountRecovery: {
    header: string
  }
  logout: {
    header: string
  },
  dashboard: {
    changePassword: string,
    nav: {
      dashboard: string,
      security: string,
      userPreferences: string,
      profile: string
    },
    profile: {
      profile: string,
      emailAddress: string,
      displayName: string
    }
  },
  general: {
    signUp: string,
    signIn: string,
    submit: string,
    emailAddress: string,
    displayName: string,
    password: string,
    confirmPassword: string,
    currentPassword: string,
    newPassword: string
  }
  resultMessages: {
    [key in ResultMessage ]: string
  },
  formValidationErrorMessages: {
    [key in FormValidationErrorMessage]: string
  },
  formValidationErrorMatchesCriteria: {
    [key in FormValidationErrorMatchesCriteria]: string
  }
}

export type NestedProperty<T, K extends string> =K extends `${infer FirstKey}.${infer RestKeys}`
  ? FirstKey extends keyof T
    ? NestedProperty<T[FirstKey], RestKeys>
    : never
  : K extends keyof T
    ? T[K]
    : never;