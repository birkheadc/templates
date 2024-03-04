import useRichTranslations from '@/hooks/useRichTranslations/useRichTranslations';
import { Eye, EyeOff } from 'lucide-react';
import * as React from 'react';
import { UseFormRegister, Path, FieldErrors } from 'react-hook-form';
import FieldErrorDisplay from '../../form/errorDisplay/FieldErrorDisplay';
import { FormValidationErrorMessage } from '@/types/formValidation/formValidationErrorMessage';
import BaseInput from '../input/BaseInput';

interface RepeatPasswordInputProps<T extends { repeat: any }> {
  className?: string,
  label?: string,
  id: string,
  register: UseFormRegister<T>,
  name: Path<T>,
  disabled?: boolean,
  required?: boolean,
  errors?: FieldErrors<T>,
  password: string,
  readonly?: boolean
}

export default function RepeatPasswordInput<T extends { repeat: any }>(props: RepeatPasswordInputProps<T>): JSX.Element {

  const t = useRichTranslations('general');
  const tErrors = useRichTranslations('formValidationErrorMessages');

  const { id, disabled, label, register, password, errors } = props;
  const [ show, setShow ] = React.useState<boolean>(false);
  
  return (
    <div className='flex flex-col w-full gap-1'>
      <label className='font-bold text-primary-700' htmlFor={id}>{label ?? t('password')}</label>
      <fieldset disabled={disabled} className='relative flex items-center justify-center gap-2 border border-primary-500 focus-within:outline focus-within:outline-1 bg-primary-50 text-primary-700 disabled:border-0 disabled:bg-transparent-full'>
      <BaseInput autoComplete='confirm-password' {...props} type={show ? 'text': 'password' } register={register} registeroptions={{ validate: (value: string) => value === password || tErrors(FormValidationErrorMessage.PASSWORDS_DO_NOT_MATCH) as string }} />
        <button className='absolute right-2 top-0 bottom-0 bg-transparent hocus:text-primary-950' type='button' onClick={() => setShow(s => !s)}>{ show ? <EyeOff /> : <Eye /> }</button>
      </fieldset>
      <FieldErrorDisplay error={errors && errors['repeat']?.message as string} />
    </div>
  );
}