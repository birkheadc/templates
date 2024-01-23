import * as React from 'react';
import { DEFAULT_SESSION, Session, SessionStatus } from '../../../types/session/session';

type Props = {
  children: React.ReactNode
}

type State = {
  session: Session,
  login: (token: string | undefined) => void,
  logout: () => void
}

const LOCAL_STORAGE_TOKEN_KEY = "token";

export const SessionContext = React.createContext<State>({ session: DEFAULT_SESSION, login: () => {}, logout: () => {} });
export const SessionProvider = ({ children }: Props) => {
  const [ session, setSession ] = React.useState<Session>(DEFAULT_SESSION);
  const login = (token: string | undefined) => {
    if (token == null) return;
    window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    setSession({
      status: SessionStatus.LOGGED_IN,
      token: token
    });
  }
  const logout = () => {
    window.localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    setSession({
      status: SessionStatus.LOGGED_OUT,
      token: undefined
    });
  }
  return (
    <SessionContext.Provider value={{ session, login, logout }} >
      { children }
    </SessionContext.Provider>
  );
}