import * as React from 'react';
import { DEFAULT_SESSION, Session, SessionStatus } from '../../../types/session/session';
import { LoadingContext } from '../loading/LoadingContext';
import { useNavigate } from 'react-router-dom';
import { LoginCredentials } from '../../../types/credentials/loginCredentials';
import { Result } from '../../../types/result/result';
import { useApi } from '../../../hooks/useApi/useApi';

type SessionContextState = {
  session: Session,
  login: (credentials: LoginCredentials) => Promise<Result>,
  logout: () => void,
  expire: () => void,
  loginLocal: () => void
}

const DEFAULT_SESSION_CONTEXT_STATE: SessionContextState = {
  session: {
    status: SessionStatus.CHECKING,
    token: undefined
  },
  logout: function (): void {
    throw new Error('Function not implemented.');
  },
  expire: function (): void {
    throw new Error('Function not implemented.');
  },
  loginLocal: function (): void {
    throw new Error('Function not implemented.');
  },
  login: function (credentials: LoginCredentials): Promise<Result<any>> {
    throw new Error('Function not implemented.');
  }
}

const LOCAL_STORAGE_TOKEN_KEY = "token";

export const SessionContext = React.createContext<SessionContextState>(DEFAULT_SESSION_CONTEXT_STATE);
export const SessionProvider = ({ children }: any) => {

  const [ session, setSession ] = React.useState<Session>(DEFAULT_SESSION);
  const { useLoading } = React.useContext(LoadingContext);
  
  const { api } = useApi();

  const nav = useNavigate();

  React.useEffect(() => {
    (async function automaticallyLoginOnMount() {
      const token = window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
      if (token == null) {
        setSession({ status: SessionStatus.LOGGED_OUT });
        return;
      };
      if (token === LOCAL_TOKEN_VALUE) {
        loginLocal();
        return;
      }
      await useLoading(async () => {
        const result = await api.auth.verifyToken(token);
        if (result.wasSuccess) {
          storeToken(token);
        } else {
          expire();
        }
      })
    })();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    const result = await useLoading(async () => {
      return await api.auth.login(credentials);
    })
    if (result.wasSuccess && result.body) {
      const token = result.body;
      storeToken(token);
    }
    return result;
  }

  const logout = () => {
    window.localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    setSession({
      status: SessionStatus.LOGGED_OUT,
      token: undefined
    });
  }
  const expire = () => {
    window.localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    setSession({
      status: SessionStatus.EXPIRED,
      token: undefined
    });
    nav('/login');
  }

  const loginLocal = () => {
    window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, LOCAL_TOKEN_VALUE);
    setSession({ status: SessionStatus.LOCAL, token: undefined });
  }

  const storeToken = (token: string) => {
    window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    setSession({
      status: SessionStatus.LOGGED_IN,
      token: token
    });
  }

  return (
    <SessionContext.Provider value={{ session, login, logout, expire, loginLocal }} >
      { children }
    </SessionContext.Provider>
  );
}

const LOCAL_TOKEN_VALUE = 'LOCAL';