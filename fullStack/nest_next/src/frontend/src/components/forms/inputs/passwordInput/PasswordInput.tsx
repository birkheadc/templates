'use client';

import * as React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import FieldErrorDisplay from '../../form/errorDisplay/FieldErrorDisplay';
import BaseInput from '../input/BaseInput';

type PasswordInputProps<T extends { password: any }> = {
  autoComplete?: string,
  className?: string,
  label?: string,
  id: string,
  register: UseFormRegister<T>,
  name: Path<T>,
  disabled?: boolean,
  required?: boolean,
  errors?: FieldErrors<T>
  readonly?: boolean
}

export default function PasswordInput<T extends { password: any }>(props: PasswordInputProps<T>): JSX.Element {

  const t = useRichTranslations('general');

  const { id, disabled, label, register, errors } = props;
  const [ show, setShow ] = React.useState<boolean>(false);
  
  return (
    <div className='flex flex-col w-full gap-1'>
      <label className='font-bold text-primary-700' htmlFor={id}>{label ?? t('password')}</label>
      <fieldset disabled={disabled} className='relative flex items-center justify-center gap-2 border border-primary-500 focus-within:outline focus-within:outline-1 bg-primary-50 text-primary-700 disabled:border-0 disabled:bg-transparent-full'>
        <BaseInput {...props} type={show ? 'text': 'password' } register={register} />
        <button className='absolute right-2 top-0 bottom-0 bg-transparent hocus:text-primary-950' type='button' onClick={() => setShow(s => !s)}>{ show ? <EyeOff /> : <Eye /> }</button>
      </fieldset>
      <FieldErrorDisplay error={errors && errors['password']?.message as string} />
    </div>
  );
}