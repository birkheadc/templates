import * as React from 'react';
import { ChangePasswordRequest } from '../../../types/settings/changePassword';
import { Result } from '../../../types/result/result';
import { SessionContext } from '../session/SessionContext';
import { SessionStatus } from '../../../types/session/session';
import { LoadingContext } from '../loading/LoadingContext';
import { useApi } from '../../../hooks/useApi/useApi';

type UsersContextState = {
  changePassword: (request: ChangePasswordRequest) => Promise<Result>
}

const DEFAULT_USERS_CONTEXT_STATE: UsersContextState = {
  changePassword: function (request: ChangePasswordRequest): Promise<Result> {
    throw new Error('Function not implemented.');
  }
}

export const UsersContext = React.createContext<UsersContextState>(DEFAULT_USERS_CONTEXT_STATE);
export const UsersProvider = ({ children }: any) => {

  const { session } = React.useContext(SessionContext);
  const { api } = useApi();

  const { useLoading } = React.useContext(LoadingContext);

  const changePassword = async (request: ChangePasswordRequest): Promise<Result> => {
    return useLoading(async () => {
      return await api.users.changePassword(session.token, request);
    });
  }

  return (
    <UsersContext.Provider value={{ changePassword }} >
      { children }
    </UsersContext.Provider>
  );
}