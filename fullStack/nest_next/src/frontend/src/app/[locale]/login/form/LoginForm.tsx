'use client';

import * as React from 'react';
import { LoginCredentials } from '../../../../types/auth/credentials/credentials';
import { SessionContext } from '../../../../contexts/session/SessionContext';
import Form from '../../../../components/forms/form/Form';
import { useForm } from 'react-hook-form';
import useResult from '../../../../hooks/result/useResult';
import EmailAddressInput from '../../../../components/forms/inputs/emailAddressInput/EmailAddressInput';
import PasswordInput from '@/components/forms/inputs/passwordInput/PasswordInput';

type LoginFormProps = {

}

export default function LoginForm(props: LoginFormProps): JSX.Element {

  const { login } = React.useContext(SessionContext);
  const { result, awaitResult } = useResult();

  const { register, handleSubmit, watch, formState } = useForm<LoginCredentials>();
  
  const onSubmit = async (credentials: LoginCredentials) => {
    awaitResult(async () => {
      return await login(credentials);
    });
  }

  return (
    <Form className='' submit={handleSubmit(onSubmit)} result={result}>
      <EmailAddressInput required register={register} errors={formState.errors} name={'emailAddress'} />
      <PasswordInput required register={register} id={'password'} name={'password'}/>
    </Form>
  );
}