import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import Input from '../input/Input';
import { Path, UseFormRegister } from 'react-hook-form';

type EmailAddressInputProps<T extends { emailAddress: any }> = {
  register: UseFormRegister<T>,
  required?: boolean,
  disabled?: boolean,
  name: Path<T>
}

export default function EmailAddressInput<T extends { 'emailAddress': any }>(props: EmailAddressInputProps<T>): JSX.Element {

  const { register, disabled, name, required } = props;

  const t = useRichTranslations('general');

  return (
    <Input autocomplete='email' disabled={disabled} id='email' label={t('emailAddress') as string} register={register} registerOptions={{ required: required }} name={name} />
  );
}