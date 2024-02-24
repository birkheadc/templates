'use client';

import * as React from 'react';
import { RegisterUserRequest } from '../../../../types/requests/register/registerUserRequest';
import Form from '../../../../components/forms/form/Form';
import { Result, ResultMessage } from '../../../../types/result/result';
import Input from '../../../../components/forms/inputs/input/Input';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import api from '../../../../api';

type RegistrationFormProps = {

}

export default function RegistrationForm(props: RegistrationFormProps): JSX.Element {

  const t = useRichTranslations('general');

  const [ request, setRequest ] = React.useState<RegisterUserRequest>({ emailAddress: 'test@example.com' });

  const handleChange = (value: string) => {
    setRequest(r => ({
      ...r,
      emailAddress: value
    }));
  }

  const handleSubmit = async (): Promise<Result> => {
    const result = await api.user.register(request);
    return result;
  }

  return (
    <Form submit={handleSubmit}>
      <Input autocomplete='email' id='email' label={t('emailAddress') as string} value={request.emailAddress} change={handleChange} />
    </Form>
  );
}