'use client';

import * as React from 'react';
import Form from '../../../../../components/forms/form/Form';
import { Result } from '../../../../../types/result/result';
import Input from '../../../../../components/forms/inputs/input/Input';
import useRichTranslations from '../../../../../hooks/useRichTranslations/useRichTranslations';
import api from '../../../../../api';
import useLanguage from '../../../../../hooks/language/useLanguage';
import EmailAddressInput from '../../../../../components/forms/inputs/emailAddressInput/EmailAddressInput';

type RegistrationFormProps = {

}

export default function RegistrationForm(props: RegistrationFormProps): JSX.Element {

  const t = useRichTranslations('register');
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
      <p>{t('instructions')}</p>
      <EmailAddressInput value={emailAddress} change={handleChange} />
    </Form>
  );
}