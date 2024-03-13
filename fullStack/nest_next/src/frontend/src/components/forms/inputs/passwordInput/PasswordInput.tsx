'use client';

import * as React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import FieldErrorDisplay from '../../form/errorDisplay/FieldErrorDisplay';
import BaseInput from '../input/BaseInput';
import { validationConfig } from '../../../../config/config';
import { FormValidationErrorMessage } from '../../../../types/formValidation/formValidationErrorMessage';
import utils from '../../../../utils';

type PasswordInputProps<T extends { password: any } | { newPassword: any }> = {
  autoComplete?: string,
  className?: string,
  label?: 'currentPassword' | 'password' | 'newPassword',
  id: string,
  register: UseFormRegister<T>,
  name: Path<T>,
  disabled?: boolean,
  required?: boolean,
  errors?: FieldErrors<T>
  readonly?: boolean,
  validate?: boolean
}

export default function PasswordInput<T extends { password: any } | { newPassword: any }>(props: PasswordInputProps<T>): JSX.Element {

  const t = useRichTranslations('general');

  const { id, disabled, label, register, errors, name, validate, className } = props;
  const [ show, setShow ] = React.useState<boolean>(false);
  
  return (
    <div className={utils.mergeClass('flex flex-col gap-1 w-full', className)}>
      <label className='font-bold text-primary-700' htmlFor={id}>{t(label ?? 'password')}</label>
      <fieldset disabled={disabled} className='relative flex items-center justify-center gap-2 border border-primary-500 hocus-within:outline hocus-within:outline-1 bg-primary-50 text-primary-700 disabled:border-0 disabled:bg-transparent-full'>
        <BaseInput {...props} type={show ? 'text': 'password' } register={register} registerOptions={validate ? { minLength: { value: validationConfig.password?.minLength ?? 0, message: FormValidationErrorMessage.MIN_LENGTH}, maxLength: { value: validationConfig.password?.maxLength ?? 1, message: FormValidationErrorMessage.MAX_LENGTH}, required: { value: true, message: FormValidationErrorMessage.REQUIRED}} : undefined} />
        <button className='absolute right-2 top-0 bottom-0 bg-transparent' type='button' onClick={() => setShow(s => !s)}>{ show ? <EyeOff /> : <Eye /> }</button>
      </fieldset>
      <FieldErrorDisplay errors={errors} field={name} />
    </div>
  );
}