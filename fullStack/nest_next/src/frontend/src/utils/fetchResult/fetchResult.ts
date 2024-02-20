import { Result, ResultMessage } from "../../types/result/result";
import createAbortSignal from "../createAbortSignal/createAbortSignal";

export default async function fetchResult(url: string, init?: RequestInit): Promise<Result<any>> {
  const { abortSignal, clearAbortSignal } = createAbortSignal();
  try {
    const response = await fetch(url, {...init, signal: abortSignal});

    if (!response.ok) return Result.Fail().WithError({ statusCode: response.status }).WithMessage(ResultMessage.CONNECTION_REFUSED);

    const data = await response.json();
    return Result.Succeed().WithBody(data);
  } catch {
    return Result.Fail().WithMessage(ResultMessage.CONNECTION_FAILED);
  } finally {
    clearAbortSignal();
  }
}