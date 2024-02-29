import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import Input from '../input/Input';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

type EmailAddressInputProps<T extends { emailAddress: any }> = {
  defaultValue?: string,
  register: UseFormRegister<T>,
  required?: boolean,
  disabled?: boolean,
  errors?: FieldErrors<T>,
  name: Path<T>
}

export default function EmailAddressInput<T extends { 'emailAddress': any }>(props: EmailAddressInputProps<T>): JSX.Element {

  const { register, disabled, name, required, errors, defaultValue } = props;

  const t = useRichTranslations('general');
  const tErrors = useRichTranslations('formValidationErrorMessages');

  return (
    <Input autocomplete='email' defaultValue={defaultValue} disabled={disabled} errors={errors} id='email' label={t('emailAddress') as string} register={register} registerOptions={{ required: { value: !!required, message: tErrors('required') as string }, pattern: { value: /\S+@\S+\.\S+/, message: tErrors('emailInvalid') as string, }, }} name={name} />
  );
}