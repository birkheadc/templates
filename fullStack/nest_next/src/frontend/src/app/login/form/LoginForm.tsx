'use client';

import * as React from 'react';
import Input from '../../../components/forms/inputs/input/Input';
import { LoginRequest } from '../../../../../common/requests/login/loginRequest';
import PasswordInput from '../../../components/forms/inputs/passwordInput/PasswordInput';
import SubmitButton from '../../../components/forms/buttons/submit/SubmitButton';

type LoginFormProps = {

}

export default function LoginForm(props: LoginFormProps): JSX.Element {

  const [ request, setRequest ] = React.useState<LoginRequest>({
    emailAddress: '',
    password: ''
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('process request:', request);
  }

  return (
    <form className='w-80 m-auto flex flex-col items-center gap-2' onSubmit={handleSubmit}>
      <Input label='email address' value={request.emailAddress} change={(value: string) => setRequest(r => ({...r, emailAddress: value}))} />
      <PasswordInput id='password' forgotPasswordHref='/forgot-password' value={request.password} change={(value: string) => setRequest(r => ({...r, password: value}))} />
      <SubmitButton />
    </form>
  );
}