import { LoginCredentials } from "../../../types/auth/credentials/credentials";
import { SessionToken } from "../../../types/auth/sessionToken/sessionToken";
import { Result, ResultMessage } from "../../../types/result/result";
import utils from "../../../utils";

export default async function login(credentials: LoginCredentials): Promise<Result<SessionToken>> {
  const url = 'http://localhost:3000/api/login';
  const result = await utils.fetchResult(url, {
    method: 'POST',
    headers: {
      'Authorization': encodeCredentials(credentials)
    }
  });
  if (!result.wasSuccess || result.body == null) return result;
  return result.WithBody(SessionToken.fromJSON(result.body)).WithMessage(ResultMessage.LOGIN_SUCCESS);
}

function encodeCredentials(credentials: LoginCredentials): string {
  const code = window.btoa(`${credentials.emailAddress}:${credentials.password}`);
  return `Basic ${code}`;
}