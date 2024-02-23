'use client';

import * as React from 'react';
import { LoginCredentials } from "../../types/auth/credentials/credentials";
import { SessionToken } from "../../types/session/sessionToken/sessionToken";
import { Result } from '../../types/result/result';
import api from '../../api';
import { Session, SessionStatus } from '../../types/session/session';

type Data = {
  session: Session
  login: (credentials: LoginCredentials) => Promise<Result>,
  logout: () => void
}

const DEFAULT_DATA: Data = {
  login: function (credentials: LoginCredentials): Promise<Result<any>> {
    throw new Error('Function not implemented.');
  },
  logout: function (): void {
    throw new Error('Function not implemented.');
  },
  session: {
    status: SessionStatus.CHECKING,
    token: undefined
  }
}

export const SessionContext = React.createContext<Data>(DEFAULT_DATA);
export const SessionProvider = ({ children }: { children: React.ReactNode }) => {

  const [ session, setSession ] = React.useState<Session>(DEFAULT_DATA.session);

  React.useEffect(function checkLocalStorageForToken() {
    const token = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (token == null) {
      logout();
      return;
    };
    setSession({
      status: SessionStatus.LOGGED_IN,
      token: new SessionToken(token)
    });
  }, []);

  const login = async (credentials: LoginCredentials): Promise<Result> => {
    await new Promise<void>((res, rej) => {
      setTimeout(() => {
        res();
      }, 2000)
    })
    const result = await api.auth.login(credentials);
    setSession(s => ({
      ...s,
      status: result.wasSuccess && result.body ? SessionStatus.LOGGED_IN : SessionStatus.LOGGED_OUT,
      token: result.body
    }))
    if (result.wasSuccess && result.body) window.localStorage.setItem(LOCAL_STORAGE_KEY, result.body.value);
    return result.WithBody(undefined);
  }

  const logout = () => {
    setSession({
      status: SessionStatus.LOGGED_OUT,
      token: undefined
    });
    window.localStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  return (
    <SessionContext.Provider value={{ login, logout, session }} >
      { children }
    </SessionContext.Provider>
  )
}

const LOCAL_STORAGE_KEY = 'token';