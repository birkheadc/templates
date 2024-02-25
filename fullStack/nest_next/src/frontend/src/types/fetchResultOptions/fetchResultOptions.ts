import { ResultMessage } from "../result/resultMessage"

export type FetchResultOptions<T> = {
  route: string,
  builder?: (response: Response) => Promise<T>,
  successMessage?: ResultMessage,
  init?: RequestInit
}