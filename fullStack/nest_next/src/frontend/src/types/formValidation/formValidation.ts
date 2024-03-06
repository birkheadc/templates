export type FormValidation = Record<string, FormValidationError[]>;

export class FormValidationError {
  field: string = '';
  error?: string = undefined;

  static fromJson(json: any): FormValidationError[] {
    const errors: FormValidationError[] = [];
    const array: any[] = Array.isArray(json) ? json : [json];

    array.forEach(element => {
      const error = new FormValidationError();
      error.field = element.field ?? '';
      error.error = element.error ?? undefined;
      errors.push(error);
    });

    return errors;
  }
};