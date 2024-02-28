import * as React from 'react';
import { Result, ResultError } from '../../../../types/result/result';
import { ResultErrorMessage } from '../../../../types/result/resultErrorMessage';
import PasswordInput from '../passwordInput/PasswordInput';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import ResultFieldErrorsDisplay from '../../../resultDisplay/fieldErrorsDisplay/ResultFieldErrorsDisplay';

type NewPasswordInputProps = {
  password: string,
  changePassword: (password: string) => void,
  passwordId?: string,
  repeatPasswordId?: string
}

export default function NewPasswordInput(props: NewPasswordInputProps): JSX.Element {

  const { password, changePassword, passwordId, repeatPasswordId } = props;
  const [ repeat, setRepeat ] = React.useState<string>('');
  const [ validationResult, setValidationResult ] = React.useState<Result | undefined>(undefined);

  const t = useRichTranslations('general');

  const handleChangePassword = (value: string) => {
    changePassword(value);
    const validationResult = validate({ password: value, repeat});
    setValidationResult(validationResult);
  }

  const handleChangeRepeat = (value: string) => {
    setRepeat(value);
    const validationResult = validate({ password, repeat: value });
    setValidationResult(validationResult);
  }
  
  return (
    <div className='w-full flex flex-col gap-2'>
      <PasswordInput autocomplete='new-password' name={'password'} value={password} change={(value: string) => handleChangePassword(value)} id={passwordId ?? 'password'} />
      <ResultFieldErrorsDisplay errors={validationResult?.errors.filter(e => e.field === 'password')} />
      <PasswordInput autocomplete='new-password' label={t('confirmPassword') as string} name={'repeat'} value={repeat} change={(value: string) => handleChangeRepeat(value)} id={repeatPasswordId ?? 'repeat-password'} />
      <ResultFieldErrorsDisplay errors={validationResult?.errors.filter(e => e.field === 'repeat')} />
    </div>
  );
}

function validate({ password, repeat }: { password: string, repeat: string }): Result {
  // TODO: get password min/max length from somewhere else
  const min = 8;
  const max = 64;

  const errors: ResultError[] = [];
  if (password.length < min) errors.push({ field: 'password', message: ResultErrorMessage.PASSWORD_TOO_SHORT});
  if (password.length > max) errors.push({ field: 'password', message: ResultErrorMessage.PASSWORD_TOO_LONG });
  if (password !== repeat) errors.push({ field: 'repeat', message: ResultErrorMessage.PASSWORDS_DO_NOT_MATCH });

  return Result.WithSuccess(errors.length < 1).WithErrors(errors);
}