import * as React from 'react';
import { FormValidationError } from '../../../types/formValidation/formValidation';

type FormValidationErrorsDisplayProps = {
  errors: FormValidationError[]
}

export default function FormValidationErrorsDisplay(props: FormValidationErrorsDisplayProps): JSX.Element {

  const { errors } = props;

  return (
    <ul>
      {errors.map(
        error =>
        <li className='text-error-500' key={`form-validation-errors-display-key-${error}`}>{error}</li>
      )}
    </ul>
  );
}