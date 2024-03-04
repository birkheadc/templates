import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import Input from '../input/Input';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import { FormValidationErrorMessage } from '../../../../types/formValidation/formValidationErrorMessage';

interface EmailAddressInputProps<T extends { emailAddress: any }> extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>,
  errors?: FieldErrors<T>,
  name: Path<T>
}

export default function EmailAddressInput<T extends { 'emailAddress': any }>(props: EmailAddressInputProps<T>): JSX.Element {

  const { required, errors } = props;

  const t = useRichTranslations('general');
  const tErrors = useRichTranslations('formValidationErrorMessages');

  return (
    <Input {...props} autoComplete='email' errors={errors} label={t('emailAddress') as string} registeroptions={{ required: { value: !!required, message: tErrors(FormValidationErrorMessage.REQUIRED) as string }, pattern: { value: /\S+@\S+\.\S+/, message: tErrors(FormValidationErrorMessage.EMAIL_INVALID) as string, }, }} />
  );
}