'use client';

import * as React from 'react';
import Form from '../../../../components/forms/form/Form';
import EmailAddressInput from '../../../../components/forms/inputs/emailAddressInput/EmailAddressInput';
import useResult from '../../../../hooks/result/useResult';
import { useForm } from 'react-hook-form';
import { ResetPasswordRequest } from '../../../../types/requests/resetPassword/resetPasswordRequest';
import useLanguage from '../../../../hooks/language/useLanguage';
import api from '../../../../api';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';

type AccountRecoveryFormProps = {

}

export default function AccountRecoveryForm(props: AccountRecoveryFormProps): JSX.Element {

  const t = useRichTranslations('accountRecovery');
  const {language} = useLanguage();

  const { result, awaitResult } = useResult();

  const { register, handleSubmit, watch, formState } = useForm<Omit<ResetPasswordRequest, 'resetUrl'>>();

  const onSubmit = async (request: Omit<ResetPasswordRequest, 'resetUrl'|'language'>) => {
    awaitResult(async () => {
      return await api.user.resetPassword({ emailAddress: request.emailAddress, language: language });
    });
  }

  return (
    <Form submit={handleSubmit(onSubmit)} result={result}>
      <p>{t('instructions')}</p>
      <EmailAddressInput required register={register} errors={formState.errors} name={'emailAddress'} />
    </Form>
  );
}