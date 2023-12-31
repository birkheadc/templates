import * as React from 'react';
import './ChangePasswordForm.css'
import StandardFormLabeledInput from '../../../../forms/standardFormLabeledInput/StandardFormLabeledInput';
import { ChangePasswordRequest, DEFAULT_CHANGE_PASSWORD_REQUEST } from '../../../../../types/settings/changePassword';
import validation from '../../../../../validation';
import { Result } from '../../../../../types/result/result';

interface IChangePasswordFormProps {
  submit: (request: ChangePasswordRequest) => void
}

/**
*
* @returns {JSX.Element | null}
*/
export default function ChangePasswordForm(props: IChangePasswordFormProps): JSX.Element | null {

  const [ validationResult, setValidationResult ] = React.useState<Result>(Result.Fail());
  const [ request, setRequest ] = React.useState<ChangePasswordRequest>(DEFAULT_CHANGE_PASSWORD_REQUEST);

  React.useEffect(function validateRequestOnChange() {
    const result = validation.settings.changePasswordRequest(request);
    setValidationResult(result);
  }, [ request ]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setRequest(r => {
      const newValue = {...r};
      newValue[name] = value;
      return newValue;
    });
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    props.submit(request);
  }
  
  return (
    <form className='standard-form change-password-form-wrapper' onSubmit={handleSubmit}>
      <div className='standard-form-row'>
        <StandardFormLabeledInput validation={validationResult} label={'password'} name={'password'} type='password' value={request.password} handleChange={handleChange} />
        <StandardFormLabeledInput validation={validationResult} label={'confirm'} name={'confirm'} type='password' value={request.confirm} handleChange={handleChange} />
      </div>
      <button disabled={!validationResult.wasSuccess} className='standard-button' type='submit'>Submit</button>
    </form>
  );
}