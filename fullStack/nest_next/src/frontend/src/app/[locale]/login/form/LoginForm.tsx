'use client';

import * as React from 'react';
import Input from '../../../../components/forms/inputs/input/Input';
import { LoginRequest } from '../../../../../../common/requests/login/loginRequest';
import PasswordInput from '../../../../components/forms/inputs/passwordInput/PasswordInput';
import PrimaryButton from '../../../../components/forms/buttons/primary/PrimaryButton';

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
    <form className='flex flex-col items-center gap-2 m-auto w-80' onSubmit={handleSubmit}>
      <Input id='email-address' label='email address' value={request.emailAddress} change={(value: string) => setRequest(r => ({...r, emailAddress: value}))} />
      <PasswordInput id='password' forgotPasswordHref='/forgot-password' value={request.password} change={(value: string) => setRequest(r => ({...r, password: value}))} />
      <PrimaryButton>submit</PrimaryButton>
    </form>
  );
}