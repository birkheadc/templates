import { FormValidationErrorMessage } from "../formValidation/formValidationErrorMessage";
import { ResultMessage } from "./resultMessage";

export type ResultError = {
  statusCode?: number,
  field?: string,
  message?: FormValidationErrorMessage
}

export class Result<T = any> {
  wasSuccess: boolean = false;
  errors: ResultError[] = [];
  message?: ResultMessage | undefined = undefined;
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

  static WithSuccess<T>(wasSuccess: boolean): Result<T> {
    const result = new Result<T>();
    result.wasSuccess = wasSuccess;
    return result;
  }

  WithMessage(message: ResultMessage): Result {
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