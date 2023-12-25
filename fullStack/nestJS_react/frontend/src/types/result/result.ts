export type ResultError = {
  statusCode?: number,
  field?: string,
  message?: string
}

export class Result<T = any> {
  wasSuccess: boolean = false;
  errors: ResultError[] = [];
  body?: T | undefined = undefined;

  static Fail<T>(): Result<T> {
    const result = new Result<T>();
    result.wasSuccess = false;
    return result;
  }
  
  static Succeed<T>(): Result<T> {
    const result = new Result<T>();
    result.wasSuccess = true;
    return result;
  }

  WithError(error: ResultError): Result {
    this.errors.push(error);
    return this;
  }

  WithErrors(errors: ResultError[]): Result {
    this.errors = [...this.errors, ...errors];
    return this;
  }

  WithBody<T>(body: T): Result<T> {
    const result = new Result<T>();
    result.wasSuccess = this.wasSuccess;
    result.errors = this.errors;
    result.body = body;
    return result;
  }
}