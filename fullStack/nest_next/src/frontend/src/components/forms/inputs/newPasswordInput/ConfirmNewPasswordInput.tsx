import * as React from 'react';
import PasswordInput from '../passwordInput/PasswordInput';
import { FieldErrors, Path, UseFormRegister, UseFormWatch } from 'react-hook-form';
import RepeatPasswordInput from '../passwordInput/RepeatPasswordInput';

interface ConfirmNewPasswordInputProps<T extends { password: any, repeat: any } | { newPassword: any, repeat: any }> extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>,
  passwordName: Path<T>,
  repeatName: Path<T>,
  errors?: FieldErrors<T>,
  watch: UseFormWatch<T>
}

export default function ConfirmNewPasswordInput<T extends { password: any, repeat: any } | { newPassword: any, repeat: any }>(props: ConfirmNewPasswordInputProps<T>): JSX.Element {

  const { register, passwordName, repeatName, errors, watch } = props;
  
  const password = React.useRef('');
  password.current = watch(passwordName);
  
  return (
    <div className='flex flex-col gap-4 w-full'>
      <PasswordInput validate autoComplete='new-password' label={'newPassword'} name={passwordName} id={'new-password'} required register={register} errors={errors} />
      <RepeatPasswordInput name={repeatName} id={'repeat-new-password'} required register={register} errors={errors} password={password.current} />
    </div>
  );
}