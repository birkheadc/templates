import * as React from 'react';
import { validationConfig } from '../../../../config/config';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import { FormValidationError } from '../../../../types/formValidation/formValidation';
import { FieldErrors } from 'react-hook-form';

interface FieldErrorDisplayProps {
  errors?: FieldErrors,
  field: string
}

export default function FieldErrorDisplay(props: FieldErrorDisplayProps): JSX.Element {

  const { errors, field } = props;
  const error: FormValidationError = FormValidationError.fromFieldErrors(field, errors ? errors[field] : undefined);
  const validationOptions = validationConfig[error?.field ?? '']

  const t = useRichTranslations('formValidationErrorMessages');
  const tCriteria = useRichTranslations('formValidationErrorMatchesCriteria');

  return (
    <div className='text-error-500 h-1 flex items-start text-sm font-light'>
      {(error && error.field && error.message) &&
        ( error.message === 'matches'
        ? validationOptions?.match && <span>{tCriteria(validationOptions.match.criteria)}</span>
        : <span>{t(error.message, { min: () => validationOptions?.minLength, max: () => validationOptions?.maxLength })}</span>
      )}
    </div>
  );
}