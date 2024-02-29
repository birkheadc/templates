import * as React from 'react';
import { Result, ResultError } from '../../../../types/result/result';
import { FormValidationErrorMessage } from '../../../../types/formValidation/formValidationErrorMessage';
import PasswordInput from '../passwordInput/PasswordInput';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import { FormValidationError } from '../../../../types/formValidation/formValidation';

type NewPasswordInputProps = {
  password: string,
  changePassword: (password: string) => void,
  passwordId?: string,
  repeatPasswordId?: string,
  errors: FormValidationError[],
}

export default function NewPasswordInput(props: NewPasswordInputProps): JSX.Element {

  const { password, changePassword, passwordId, repeatPasswordId, errors } = props;
  const [ repeat, setRepeat ] = React.useState<string>('');

  const t = useRichTranslations('general');

  const handleChangePassword = (value: string) => {
    changePassword(value);
  }

  const handleChangeRepeat = (value: string) => {
    setRepeat(value);
  }
  
  return (
    <div className='w-full flex flex-col gap-2'>
      <PasswordInput autocomplete='new-password' name={'password'} value={password} change={(value: string) => handleChangePassword(value)} id={passwordId ?? 'password'} />
      <FormValidationErrorsDisplay errors={errors} />
      <PasswordInput autocomplete='new-password' label={t('confirmPassword') as string} name={'repeat'} value={repeat} change={(value: string) => handleChangeRepeat(value)} id={repeatPasswordId ?? 'repeat-password'} />
      <FormValidationErrorsDisplay errors={password === repeat ? [] : [FormValidationErrorMessage.PASSWORDS_DO_NOT_MATCH]} />
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