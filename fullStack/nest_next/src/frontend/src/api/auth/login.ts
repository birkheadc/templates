import { LoginCredentials } from "../../types/auth/credentials/credentials";
import { SessionToken } from "../../types/session/sessionToken/sessionToken";
import { Result } from "../../types/result/result";
import utils from "../../utils";
import { ResultMessage } from "@/types/result/resultMessage";

export default async function login(credentials: LoginCredentials): Promise<Result<SessionToken>> {
  const result = await utils.fetchResult({
    route: '/auth/login',
    builder: SessionToken.fromResponse,
    successMessage: ResultMessage.LOGIN_SUCCESS,
    init: {
      method: 'POST',
      headers: {
        'Authorization': encodeCredentials(credentials)
      }
    }
  });
  return result;
}

function encodeCredentials(credentials: LoginCredentials): string {
  const code = window.btoa(`${credentials.emailAddress}:${credentials.password}`);
  return `Basic ${code}`;
}