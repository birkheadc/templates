export type ResultError = {
  statusCode?: number,
  field?: string,
  message?: string
}

export enum ResultMessage {
  NOT_YET_IMPLEMENTED = 'not yet implemented',
  URL_NOT_DEFINED = 'url not defined',
  CONNECTION_REFUSED = 'connection refused by server',
  CONNECTION_FAILED = 'failed to connect to server',
  POST_COMMENT_SUCCESS = 'comment recieved. thank you!',
  UNEXPECTED_RESPONSE = 'something unexpected happened',
  LOGIN_SUCCESS = 'logged in successfully',
  GENERIC_SUCCESS = 'action successful',
  REGISTRATION_EMAIL_SENT = 'an email has been sent to your inbox with instructions on how to proceed'
}

export class Result<T = any> {
  wasSuccess: boolean = false;
  errors: ResultError[] = [];
  message?: string | ResultMessage | undefined = undefined;
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

  WithMessage(message: string | ResultMessage): Result {
    this.message = message;
    return this;
  }

  WithError(error: ResultError): Result {
    this.errors.push(error);
    return this;
  }

  WithErrors(errors: ResultError[]): Result {
    this.errors = [...this.errors, ...errors];
    return this;
  }

  WithBody<T>(body?: T | undefined): Result<T> {
    const result = new Result<T>();
    result.wasSuccess = this.wasSuccess;
    result.errors = this.errors;
    result.body = body;
    result.message = this.message;
    return result;
  }

  OfType<T>(): Result<T> {
    const result = new Result<T>();
    result.wasSuccess = this.wasSuccess;
    result.errors = this.errors;
    return result;
  }
}