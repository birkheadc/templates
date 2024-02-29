'use client';

import * as React from 'react';
import Form from '../../../../../components/forms/form/Form';
import { Result } from '../../../../../types/result/result';
import Input from '../../../../../components/forms/inputs/input/Input';
import useRichTranslations from '../../../../../hooks/useRichTranslations/useRichTranslations';
import api from '../../../../../api';
import useLanguage from '../../../../../hooks/language/useLanguage';
import EmailAddressInput from '../../../../../components/forms/inputs/emailAddressInput/EmailAddressInput';
import useResult from '@/hooks/result/useResult';
import { useForm } from 'react-hook-form';
import { RegisterUserRequest } from '@/types/requests/register/registerUserRequest';

type RegistrationFormProps = {

}

export default function RegistrationForm(props: RegistrationFormProps): JSX.Element {

  const t = useRichTranslations('register');
  const {language} = useLanguage();

  const { result, awaitResult } = useResult();

  const { register, handleSubmit, watch, formState } = useForm<Omit<RegisterUserRequest, 'verifyUrl'>>();

  const onSubmit = async (request: Omit<RegisterUserRequest, 'verifyUrl'|'language'>) => {
    awaitResult(async () => {
      return await api.user.register({ emailAddress: request.emailAddress, language: language });
    });
  }

  return (
    <Form submit={handleSubmit(onSubmit)} result={result}>
      <p>{t('instructions')}</p>
      <EmailAddressInput required register={register} errors={formState.errors} name={'emailAddress'} />
    </Form>
  );
}