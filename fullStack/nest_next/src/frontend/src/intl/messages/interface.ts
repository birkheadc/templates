import { ResultMessage } from "@/types/result/resultMessage"
import { ResultErrorMessage } from "../../types/result/resultErrorMessage"

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
    registerNew: string
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
  logout: {

  },
  dashboard: {

  },
  general: {
    signUp: string,
    signIn: string,
    submit: string,
    emailAddress: string,
    password: string,
    confirmPassword: string
  }
  resultMessages: {
    [key in ResultMessage ]: string
  },
  resultErrorMessages: {
    [key in ResultErrorMessage]: string
  }
}

export type NestedProperty<T, K extends string> =K extends `${infer FirstKey}.${infer RestKeys}`
  ? FirstKey extends keyof T
    ? NestedProperty<T[FirstKey], RestKeys>
    : never
  : K extends keyof T
    ? T[K]
    : never;