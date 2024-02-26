import * as React from 'react';
import { Result, ResultError } from '../../../../types/result/result';
import { ResultErrorMessage } from '../../../../types/result/resultErrorMessage';
import PasswordInput from '../passwordInput/PasswordInput';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import ResultFieldErrorsDisplay from '../../../resultDisplay/fieldErrorsDisplay/ResultFieldErrorsDisplay';

type NewPasswordInputProps = {

}

export default function NewPasswordInput(props: NewPasswordInputProps): JSX.Element {

  const [ values, setValues ] = React.useState<{ password: string, repeat: string, [key: string]: string }>({ password: '', repeat: ''});
  const [ validationResult, setValidationResult ] = React.useState<Result | undefined>(undefined);

  const t = useRichTranslations('general');

  const handleChange = (name: 'password' | 'repeat', value: string) => {
    const newValues = {...values};
    newValues[name] = value;

    setValues(newValues);
    
    const validationResult = validate(newValues);
    setValidationResult(validationResult);
  }
  
  return (
    <div className='w-full'>
      <PasswordInput name={'password'} value={values.password} change={(value: string) => handleChange('password', value)} id={''} />
      <ResultFieldErrorsDisplay errors={validationResult?.errors.filter(e => e.field === 'password')} />
      <PasswordInput label={t('confirmPassword') as string} name={'repeat'} value={values.repeat} change={(value: string) => handleChange('repeat', value)} id={''} />
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