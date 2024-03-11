import * as React from 'react';
import Input from '../input/Input';
import { UseFormRegister, FieldErrors, Path } from 'react-hook-form';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import { FormValidationErrorMessage } from '../../../../types/formValidation/formValidationErrorMessage';
import { validationConfig } from '../../../../config/config';

interface DisplayNameInputProps<T extends { 'displayName': any }> extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>,
  errors?: FieldErrors<T>,
  name: Path<T>
}

export default function DisplayNameInput<T extends { 'displayName': any }>(props: DisplayNameInputProps<T>): JSX.Element {

  const { required, errors } = props;

  const t = useRichTranslations('general');

  return (
    <Input errors={errors} {...props} autoComplete='username' label={t('displayName') as string} registerOptions={{ required: { value: !!required, message: FormValidationErrorMessage.REQUIRED }, minLength: { value: validationConfig.displayName?.minLength ?? 0, message: FormValidationErrorMessage.MIN_LENGTH }, maxLength: { value: validationConfig.displayName?.maxLength ?? 0, message: FormValidationErrorMessage.MAX_LENGTH }, pattern: { value: validationConfig.displayName?.match?.regexp ?? /a/, message: FormValidationErrorMessage.MATCHES }}} />
  );
}