'use client';

import * as React from 'react';
import Input from '../../../../components/forms/inputs/input/Input';
import PasswordInput from '../../../../components/forms/inputs/passwordInput/PasswordInput';
import PrimaryButton from '../../../../components/forms/buttons/primary/PrimaryButton';
import { LoginCredentials } from '../../../../types/auth/credentials/credentials';
import api from '../../../../api';
import { SessionContext } from '../../../../contexts/session/SessionContext';
import { Result } from '../../../../types/result/result';
import ResultDisplay from '../../../../components/resultDisplay/ResultDisplay';
import WaitingOverlay from '../../../../components/waitingOverlay/WaitingOverlay';
import SubmitButton from '../../../../components/forms/buttons/submit/SubmitButton';
import Form from '../../../../components/forms/form/Form';

type LoginFormProps = {

}

export default function LoginForm(props: LoginFormProps): JSX.Element {

  const { login } = React.useContext(SessionContext);
  const [ credentials, setCredentials ] = React.useState<LoginCredentials>({
    emailAddress: '',
    password: ''
  });

  const handleSubmit = async () => {    
    const result = await login(credentials);
    return result;
  }

  return (
    <Form className='' submit={handleSubmit}>
      <Input autocomplete='username' id='email-address' label='email address' value={credentials.emailAddress} change={(value: string) => setCredentials(r => ({...r, emailAddress: value}))} />
      <PasswordInput id='password' value={credentials.password} change={(value: string) => setCredentials(r => ({...r, password: value}))} />
    </Form>
  );
}