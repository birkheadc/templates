import { User } from "../user/user"
import { SessionToken } from "./sessionToken/sessionToken"

export type Session = {
  status: SessionStatus,
  token?: SessionToken,
}

export enum SessionStatus {
  CHECKING = 'checking',
  LOGGED_OUT = 'logged out',
  LOGGED_IN = 'logged in',
  EXPIRED = 'expired'
}