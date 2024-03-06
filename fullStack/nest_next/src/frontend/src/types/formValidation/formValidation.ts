import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { FormValidationErrorMessage } from "./formValidationErrorMessage";

export type FormValidation = Record<string, FormValidationError[]>;

export class FormValidationError {
  field?: string = undefined;
  message?: FormValidationErrorMessage = undefined;

  static fromJson(json: any): FormValidationError[] {
    if (json == null) return [];

    const errors: FormValidationError[] = [];
    const array: any[] = Array.isArray(json) ? json : [json];

    array.forEach(element => {
      const error = new FormValidationError();
      error.field = element.field ?? '';
      error.message = element.message ?? undefined;
      errors.push(error);
    });

    return errors;
  }

  static fromFieldErrors(field: string, fieldError: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined): FormValidationError {
    const error = new FormValidationError();
    if (fieldError == null) return error;

    error.field = field;
    const message = fieldError.message?.toString();
    if (message && Object.values<string>(FormValidationErrorMessage).includes(message)) {
      error.message = <FormValidationErrorMessage>message;
    }

    return error;
  }
};