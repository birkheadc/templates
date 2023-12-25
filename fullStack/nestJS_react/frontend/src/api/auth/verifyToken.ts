import config from "../../config";
import { Result } from "../../types/result/result";
import helpers from "../helpers";

export default async function verifyToken(token: string): Promise<Result> {
  const url = config.api.authentication.url;
  const { signal, timeout } = helpers.getAbortSignal();

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      signal: signal
    });
    
    if (!response.ok) return Result.Fail().WithError({ statusCode: response.status, message: 'Server refused request.' }).WithMessage('Token is invalid.');
    
    return Result.Succeed().WithMessage('Token is valid.');
  } catch {
    return Result.Fail().WithMessage('Failed to connect to server.');
  } finally {
    clearTimeout(timeout);
  }
}