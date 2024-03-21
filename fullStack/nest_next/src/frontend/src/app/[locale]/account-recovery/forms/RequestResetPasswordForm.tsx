'use client';

import * as React from 'react';
import Form from '../../../../components/forms/form/Form';
import EmailAddressInput from '../../../../components/forms/inputs/emailAddressInput/EmailAddressInput';
import useResult from '../../../../hooks/result/useResult';
import { useForm } from 'react-hook-form';
import useLanguage from '../../../../hooks/language/useLanguage';
import api from '../../../../api';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import { RequestResetPasswordLinkRequest } from '../../../../types/requests/resetPassword/requestResetPasswordLink';

type RequestResetPasswordFormProps = {

}

export default function RequestResetPasswordForm(props: RequestResetPasswordFormProps): JSX.Element {

  const t = useRichTranslations('accountRecovery');
  const {language} = useLanguage();

  const { result, awaitResult } = useResult();

  const { register, handleSubmit, watch, formState } = useForm<Omit<RequestResetPasswordLinkRequest, 'resetUrl'>>();

  const onSubmit = async (request: Omit<RequestResetPasswordLinkRequest, 'resetUrl'|'language'>) => {
    awaitResult(async () => {
      return await api.user.requestResetPasswordLink({ emailAddress: request.emailAddress, language: language });
    });
  }

  return (
    <Form submit={handleSubmit(onSubmit)} result={result}>
      <p>{t('instructions')}</p>
      <EmailAddressInput required register={register} errors={formState.errors} name={'emailAddress'} />
    </Form>
  );
}