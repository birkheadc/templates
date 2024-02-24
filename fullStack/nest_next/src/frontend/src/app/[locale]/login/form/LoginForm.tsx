'use client';

import * as React from 'react';
import Input from '../../../../components/forms/inputs/input/Input';
import PasswordInput from '../../../../components/forms/inputs/passwordInput/PasswordInput';
import { LoginCredentials } from '../../../../types/auth/credentials/credentials';
import { SessionContext } from '../../../../contexts/session/SessionContext';
import Form from '../../../../components/forms/form/Form';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import { Result } from '../../../../types/result/result';

type LoginFormProps = {

}

export default function LoginForm(props: LoginFormProps): JSX.Element {

  const t = useRichTranslations('general');

  const { login } = React.useContext(SessionContext);
  const [ credentials, setCredentials ] = React.useState<LoginCredentials>({
    emailAddress: '',
    password: ''
  });

  const handleSubmit = async (): Promise<Result> => {    
    const result = await login(credentials);
    return result;
  }

  return (
    <Form className='' submit={handleSubmit}>
      <Input autocomplete='email' id='email' label={t('emailAddress') as string} value={credentials.emailAddress} change={(value: string) => setCredentials(r => ({...r, emailAddress: value}))} />
      <PasswordInput id='password' value={credentials.password} change={(value: string) => setCredentials(r => ({...r, password: value}))} />
    </Form>
  );
}