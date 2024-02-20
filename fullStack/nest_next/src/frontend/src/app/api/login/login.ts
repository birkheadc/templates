import { LoginCredentials } from "../../../types/auth/credentials/credentials";
import { Result, ResultMessage } from "../../../types/result/result";
import utils from "../../../utils";

export default async function login(credentials: LoginCredentials): Promise<Result<string>> {
  const url = 'http://localhost:3000/api/login';
  const { abortSignal, clearAbortSignal } = utils.createAbortSignal();

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': encodeCredentials(credentials)
      },
      signal: abortSignal
    });

    if (!response.ok) return Result.Fail().WithError({ statusCode: response.status, message: 'Server refused request.' }).WithMessage(ResultMessage.CONNECTION_REFUSED);

    const data = await response.text();
    if (data === '') return Result.Fail().WithMessage(ResultMessage.UNEXPECTED_RESPONSE);
    return Result.Succeed().WithBody(data).WithMessage(ResultMessage.LOGIN_SUCCESS);
  } catch {
    return Result.Fail().WithMessage(ResultMessage.CONNECTION_FAILED);
  } finally {
    clearAbortSignal();
  }
}

function encodeCredentials(credentials: LoginCredentials): string {
  const code = window.btoa(`${credentials.emailAddress}:${credentials.password}`);
  return `Basic ${code}`;
}