import { ResultMessage } from "@/types/result/resultMessage";
import { FetchResultOptions } from "../../types/fetchResultOptions/fetchResultOptions";
import { Result } from "../../types/result/result";
import createAbortSignal from "../createAbortSignal/createAbortSignal";

export default async function fetchResult<T>(options: FetchResultOptions<T>): Promise<Result<T>> {

  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (baseUrl == null) return Result.Fail().WithMessage(ResultMessage.URL_NOT_DEFINED);

  const { route, builder, successMessage, init } = options;
  const url = baseUrl + route;

  const { abortSignal, clearAbortSignal } = createAbortSignal();
  try {
    const response = await fetch(url, {...init, signal: abortSignal});

    if (!response.ok) {
      console.log({response});
      const body = await response.json();
      console.log({body});
      return Result.Fail().WithErrors().WithMessage(ResultMessage.CONNECTION_REFUSED)
    }

    let result = Result.Succeed().WithMessage(successMessage ?? ResultMessage.GENERIC_SUCCESS);
    if (builder != null) {
      const data: T = await builder(response);
      result = result.WithBody(data);
    }
    return result;
  } catch {
    return Result.Fail().WithMessage(ResultMessage.CONNECTION_FAILED);
  } finally {
    clearAbortSignal();
  }
}