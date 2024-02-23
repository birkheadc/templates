import { SessionToken } from "./sessionToken/sessionToken"

export type Session = {
  status: SessionStatus,
  token: SessionToken | undefined
}

export enum SessionStatus {
  CHECKING = 'checking',
  LOGGED_OUT = 'logged out',
  LOGGED_IN = 'logged in',
  EXPIRED = 'expired'
}