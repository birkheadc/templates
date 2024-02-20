'use client';

import * as React from 'react';
import Input from '../../../../components/forms/inputs/input/Input';
import PasswordInput from '../../../../components/forms/inputs/passwordInput/PasswordInput';
import PrimaryButton from '../../../../components/forms/buttons/primary/PrimaryButton';
import { LoginCredentials } from '../../../../types/auth/credentials/credentials';
import login from '../../../api/login/login';

type LoginFormProps = {

}

export default function LoginForm(props: LoginFormProps): JSX.Element {

  const [ credentials, setCredentials ] = React.useState<LoginCredentials>({
    emailAddress: '',
    password: ''
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await login(credentials);
    console.log({result: result.body });
  }

  return (
    <form className='flex flex-col items-center gap-2 m-auto w-80' onSubmit={handleSubmit}>
      <Input autocomplete='username' id='email-address' label='email address' value={credentials.emailAddress} change={(value: string) => setCredentials(r => ({...r, emailAddress: value}))} />
      <PasswordInput id='password' forgotPasswordHref='/forgot-password' value={credentials.password} change={(value: string) => setCredentials(r => ({...r, password: value}))} />
      <PrimaryButton>submit</PrimaryButton>
    </form>
  );
}