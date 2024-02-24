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
  }
}

export type NestedProperty<T, K extends string> =K extends `${infer FirstKey}.${infer RestKeys}`
  ? FirstKey extends keyof T
    ? NestedProperty<T[FirstKey], RestKeys>
    : never
  : K extends keyof T
    ? T[K]
    : never;