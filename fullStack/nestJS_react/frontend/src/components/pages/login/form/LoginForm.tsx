import * as React from 'react';
import './LoginForm.css'
import StandardFormLabeledInput from '../../../forms/standardFormLabeledInput/StandardFormLabeledInput';
import { DEFAULT_LOGIN_CREDENTIALS, LoginCredentials } from '../../../../types/credentials/loginCredentials';

interface ILoginFormProps {
  submit: (request: LoginCredentials) => void
}

/**
*
* @returns {JSX.Element | null}
*/
export default function LoginForm(props: ILoginFormProps): JSX.Element | null {

  const [ request, setRequest ] = React.useState<LoginCredentials>(DEFAULT_LOGIN_CREDENTIALS);

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
    <form className='login-form-wrapper standard-form' onSubmit={handleSubmit}>
      <StandardFormLabeledInput autofocus label={'username'} name={'username'} value={request.username} handleChange={handleChange} />
      <StandardFormLabeledInput label={'password'} name={'password'} type='password' value={request.password} handleChange={handleChange} />
      <button type='submit' className='standard-button'>submit</button>
    </form>
  );
}