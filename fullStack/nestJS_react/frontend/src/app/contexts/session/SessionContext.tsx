import * as React from 'react';
import { DEFAULT_SESSION, Session, SessionStatus } from '../../../types/session/session';
import { LoadingSpinnerContext } from '../loadingSpinner/LoadingSpinnerContext';
import api from '../../../api';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode
}

type State = {
  session: Session,
  login: (token: string | undefined) => void,
  logout: () => void,
  expire: () => void
}

const LOCAL_STORAGE_TOKEN_KEY = "token";

export const SessionContext = React.createContext<State>({ session: DEFAULT_SESSION, login: () => {}, logout: () => {}, expire: () => {} });
export const SessionProvider = ({ children }: Props) => {

  const [ session, setSession ] = React.useState<Session>(DEFAULT_SESSION);
  const { setLoading } = React.useContext(LoadingSpinnerContext);

  const nav = useNavigate();

  React.useEffect(() => {
    (async function automaticallyLoginOnMount() {
      const token = window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
      if (token == null) {
        setSession({ status: SessionStatus.LOGGED_OUT });
        return;
      };
      setLoading(true);
      const result = await api.auth.verifyToken(token);
      setLoading(false);
      if (result.wasSuccess) {
        login(token);
      } else {
        expire();
      }
    })();
  }, []);

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
  const expire = () => {
    window.localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    setSession({
      status: SessionStatus.EXPIRED,
      token: undefined
    });
    nav('/login');
  }
  return (
    <SessionContext.Provider value={{ session, login, logout, expire }} >
      { children }
    </SessionContext.Provider>
  );
}