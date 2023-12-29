import config from "../../config";
import { Result } from "../../types/result/result";
import { ChangePasswordRequest } from "../../types/settings/changePassword";
import helpers from "../helpers";

export default async function changePassword(token: string, request: ChangePasswordRequest): Promise<Result> {
  const url = config.api.users.url + '/change-password';
  const { signal, timeout } = helpers.getAbortSignal();

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password: request.password}),
      signal: signal
    });

    if (!response.ok) return Result.Fail().WithError({statusCode: response.status}).WithMessage('Failed to update password.');

    return Result.Succeed().WithMessage('Updated password successfully.');
  } catch {
    return Result.Fail().WithMessage('Failed to connect to server.');
  } finally {
    clearTimeout(timeout);
  }
}