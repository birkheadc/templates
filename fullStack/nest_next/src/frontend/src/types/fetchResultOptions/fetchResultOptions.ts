import { ResultMessage } from "../result/result"

export type FetchResultOptions<T> = {
  url: string,
  builder?: (response: Response) => Promise<T>,
  successMessage?: ResultMessage | string,
  init?: RequestInit
}