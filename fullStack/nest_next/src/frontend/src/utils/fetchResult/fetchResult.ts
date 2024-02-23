import { FetchResultOptions } from "../../types/fetchResultOptions/fetchResultOptions";
import { FromResponse } from "../../types/fromResponse/fromResponse";
import { Result, ResultMessage } from "../../types/result/result";
import createAbortSignal from "../createAbortSignal/createAbortSignal";

export default async function fetchResult<T>(options: FetchResultOptions<T>): Promise<Result<T>> {
  const { url, builder, successMessage, init } = options;
  const { abortSignal, clearAbortSignal } = createAbortSignal();
  try {
    const response = await fetch(url, {...init, signal: abortSignal});

    if (!response.ok) return Result.Fail().WithError({ statusCode: response.status }).WithMessage(ResultMessage.CONNECTION_REFUSED);

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