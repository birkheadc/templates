import * as React from 'react';
import Form from '../../../../../../components/forms/form/Form';
import { Result } from '../../../../../../types/result/result';
import { ResultMessage } from '../../../../../../types/result/resultMessage';
import EmailAddressInput from '../../../../../../components/forms/inputs/emailAddressInput/EmailAddressInput';
import useRichTranslations from '../../../../../../hooks/useRichTranslations/useRichTranslations';
import NewPasswordInput from '../../../../../../components/forms/inputs/newPasswordInput/NewPasswordInput';
import { CreateUserRequest } from '../../../../../../types/requests/createUser/createUserRequest';
import api from '../../../../../../api';
import { FormValidation } from '../../../../../../types/formValidation/formValidation';
import useResult from '@/hooks/result/useResult';
import { RegisterOptions, UseFormRegisterReturn, useForm } from 'react-hook-form';

type VerifiedRegistrationFormProps = {
  emailVerificationToken: string,
  emailAddress: string
}

export default function VerifiedRegistrationForm(props: VerifiedRegistrationFormProps): JSX.Element {

  const { emailAddress, emailVerificationToken } = props;

  const t = useRichTranslations('register.verified');

  const { result, awaitResult } = useResult();

  const { register, handleSubmit, watch, formState } = useForm<Omit<CreateUserRequest, 'emailVerificationCode'> & { repeat: string }>();

  const onSubmit = async (request: Omit<CreateUserRequest, 'emailVerificationToken'>) => {
    awaitResult(async () => {
      return await api.user.createUser({ emailAddress: request.emailAddress, emailVerificationToken: emailVerificationToken, password: request.password });
    });
  }

  return (
    <Form submit={handleSubmit(onSubmit)} result={result}>
      <span>{t('instructions')}</span>
      <EmailAddressInput defaultValue={emailAddress} readOnly register={register} name={'emailAddress'} />
      <NewPasswordInput errors={formState.errors} register={register} passwordName={'password'} repeatName={'repeat'} watch={watch} />
    </Form>
  );
}