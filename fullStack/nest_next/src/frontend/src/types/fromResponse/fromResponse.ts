export interface FromResponse<T> {
  fromResponse(response: Response): Promise<T>
}