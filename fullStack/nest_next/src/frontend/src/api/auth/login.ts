import { LoginCredentials } from "../../types/auth/credentials/credentials";
import { SessionToken } from "../../types/session/sessionToken/sessionToken";
import { Result, ResultMessage } from "../../types/result/result";
import utils from "../../utils";

export default async function login(credentials: LoginCredentials): Promise<Result<SessionToken>> {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (backendUrl == null) return Result.Fail().WithMessage(ResultMessage.URL_NOT_DEFINED);

  const url = `${backendUrl}/auth/login`;
  const result = await utils.fetchResult({
    url: url,
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