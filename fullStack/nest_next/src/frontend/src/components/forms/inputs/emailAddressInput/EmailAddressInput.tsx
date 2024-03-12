import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import Input from '../input/Input';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import { FormValidationErrorMessage } from '../../../../types/formValidation/formValidationErrorMessage';
import { validationConfig } from '../../../../config/config';

interface EmailAddressInputProps<T extends { emailAddress: any }> extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<T>,
  errors?: FieldErrors<T>,
  name: Path<T>
}

export default function EmailAddressInput<T extends { 'emailAddress': any }>(props: EmailAddressInputProps<T>): JSX.Element {

  const { required, errors } = props;

  const t = useRichTranslations('general');

  return (
    <Input {...props} autoComplete='username' errors={errors} label={t('emailAddress') as string} registerOptions={{ pattern: { value: /^.+\@.+\..+$/, message: FormValidationErrorMessage.IS_EMAIL } , required: { value: !!required, message: FormValidationErrorMessage.REQUIRED }}} />
  );
}