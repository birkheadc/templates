'use client';

import * as React from "react";
import { User } from "../../types/user/user";
import { ChangePasswordRequest } from "../../types/requests/changePassword/changePasswordRequest";
import { Result } from "../../types/result/result";
import { UpdatePreferencesRequest } from "../../types/requests/updatePreferences/updatePreferencesRequest";
import { ResultMessage } from "../../types/result/resultMessage";
import api from "../../api";
import { SessionContext } from "../session/SessionContext";

type Data = {
  user: User | undefined,
  changePassword: (request: ChangePasswordRequest) => Promise<Result>,
  updatePreferences: (request: UpdatePreferencesRequest) => Promise<Result>
}

const DEFAULT_DATA: Data = {
  user: undefined,
  changePassword: function (request: ChangePasswordRequest): Promise<Result<any>> {
    throw new Error("Function not implemented.");
  },
  updatePreferences: function (request: UpdatePreferencesRequest): Promise<Result<any>> {
    throw new Error("Function not implemented.");
  }
}

export const UserContext = React.createContext<Data>(DEFAULT_DATA);
export const UserProvider = ({ children }: {  children: React.ReactNode}) => {

  const { session, logout, expire } = React.useContext(SessionContext);
  const [ user, setUser ] = React.useState<User | undefined>();

  React.useEffect(() => {
    (async function fetchUserWhenLogin() {
      if (session.token == null) return;
      const result = await api.user.getUser(session.token);
      if (!result.wasSuccess || result.body == null) {
        logout();
        setUser(undefined);
        return;
      }
      setUser(result.body);
    })();
  }, [ session, logout ])

  const changePassword = async (request: ChangePasswordRequest): Promise<Result> => {
    if (session.token == null) return Result.Fail().WithMessage(ResultMessage.NOT_LOGGED_IN);
    const result = await api.user.changePassword(session.token, request);
    if (result.wasSuccess) {
      expire();
    }
    return result;
  }

  const updatePreferences = async (request: UpdatePreferencesRequest): Promise<Result> => {
    if (session.token == null) return Result.Fail().WithMessage(ResultMessage.NOT_LOGGED_IN);
    const result = await api.user.updatePreferences(session.token, request);
    if (result.wasSuccess && result.body) {
      setUser(result.body);
    }
    return result;
  }
  
  return (
    <UserContext.Provider value={{ user, changePassword, updatePreferences }} >
      { children }
    </UserContext.Provider>
  )
}