import * as React from 'react';
import PasswordInput from '../passwordInput/PasswordInput';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import { FieldErrors, Path, RegisterOptions, UseFormRegister, UseFormRegisterReturn, UseFormWatch } from 'react-hook-form';
import RepeatPasswordInput from '../passwordInput/RepeatPasswordInput';

type NewPasswordInputProps<T extends { password: any, repeat: any }> = {
  passwordId?: string,
  repeatPasswordId?: string,
  register: UseFormRegister<T>,
  passwordName: Path<T>,
  repeatName: Path<T>,
  disabled?: boolean,
  required?: boolean,
  errors?: FieldErrors<T>,
  readonly?: boolean,
  watch: UseFormWatch<T>
}

export default function NewPasswordInput<T extends { password: any, repeat: any }>(props: NewPasswordInputProps<T>): JSX.Element {

  const { passwordId, repeatPasswordId, register, passwordName, repeatName, disabled, required, errors, readonly, watch } = props;

  const t = useRichTranslations('general');
  const password = React.useRef('');
  password.current = watch(passwordName);
  
  return (
    <div className='w-full flex flex-col gap-2'>
      <PasswordInput autocomplete='new-password' disabled={disabled} readonly={readonly} name={passwordName} id={passwordId ?? 'password'} register={register} required errors={errors} />
      <RepeatPasswordInput autocomplete='confirm-password' disabled={disabled} readonly={readonly} label={t('confirmPassword') as string} name={repeatName} id={repeatPasswordId ?? 'repeat-password'} register={register} required errors={errors} password={password.current} />
    </div>
  );
}

// function validate({ password, repeat }: { password: string, repeat: string }): ResultError[] {
//   // TODO: get password min/max length from somewhere else
//   const min = 8;
//   const max = 64;

//   const errors: ResultError[] = [];
//   if (password.length < min) errors.push({ field: 'password', message: ResultErrorMessage.PASSWORD_TOO_SHORT});
//   if (password.length > max) errors.push({ field: 'password', message: ResultErrorMessage.PASSWORD_TOO_LONG });
//   if (password !== repeat) errors.push({ field: 'repeat', message: ResultErrorMessage.PASSWORDS_DO_NOT_MATCH });

//   return errors;
// }