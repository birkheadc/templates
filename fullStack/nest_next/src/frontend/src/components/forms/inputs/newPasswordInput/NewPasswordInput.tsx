import * as React from 'react';
import PasswordInput from '../passwordInput/PasswordInput';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import { FieldErrors, Path, UseFormRegister, UseFormWatch } from 'react-hook-form';
import RepeatPasswordInput from '../passwordInput/RepeatPasswordInput';

interface NewPasswordInputProps<T extends { password: any, repeat: any }> extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>,
  passwordName: Path<T>,
  repeatName: Path<T>,
  errors?: FieldErrors<T>,
  watch: UseFormWatch<T>
}

export default function NewPasswordInput<T extends { password: any, repeat: any }>(props: NewPasswordInputProps<T>): JSX.Element {

  const { register, passwordName, repeatName, errors, watch } = props;

  const t = useRichTranslations('general');
  
  const password = React.useRef('');
  password.current = watch(passwordName);
  
  return (
    <div className='w-full flex flex-col gap-2'>
      <PasswordInput autocomplete='new-password' label={t('password').toString()} name={passwordName} id={'password'} register={register} errors={errors} />
      <RepeatPasswordInput autocomplete='confirm-password' label={t('confirmPassword').toString()} name={repeatName} id={'repeat-password'} register={register} errors={errors} password={password.current} />
    </div>
  );
}