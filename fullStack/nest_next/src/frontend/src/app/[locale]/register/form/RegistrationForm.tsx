'use client';

import * as React from 'react';
import { RegisterUserRequest } from '../../../../types/requests/register/registerUserRequest';
import Form from '../../../../components/forms/form/Form';
import { Result } from '../../../../types/result/result';
import Input from '../../../../components/forms/inputs/input/Input';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import api from '../../../../api';
import useLanguage from '../../../../hooks/language/useLanguage';
import { usePathname } from 'next/navigation';

type RegistrationFormProps = {

}

export default function RegistrationForm(props: RegistrationFormProps): JSX.Element {

  const t = useRichTranslations('general');
  const { language } = useLanguage();

  const [ emailAddress, setEmailAddress ] = React.useState<string>('');

  const handleChange = (value: string) => {
    setEmailAddress(value);
  }

  const handleSubmit = async (): Promise<Result> => {
    const result = await api.user.register({ emailAddress, language });
    return result;
  }

  return (
    <Form submit={handleSubmit}>
      <Input autocomplete='email' id='email' label={t('emailAddress') as string} value={emailAddress} change={handleChange} />
    </Form>
  );
}