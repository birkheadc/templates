export enum SessionStatus {
  CHECKING = 0,
  LOGGED_OUT = 1,
  LOGGED_IN = 2,
  EXPIRED = 3
}

export type Session = {
  status: SessionStatus,
  token?: string | undefined
}

export const DEFAULT_SESSION: Session = {
  status: SessionStatus.CHECKING
}