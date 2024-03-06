import * as React from 'react';
import Form from '../../../../../../components/forms/form/Form';
import EmailAddressInput from '../../../../../../components/forms/inputs/emailAddressInput/EmailAddressInput';
import useRichTranslations from '../../../../../../hooks/useRichTranslations/useRichTranslations';
import NewPasswordInput from '../../../../../../components/forms/inputs/newPasswordInput/NewPasswordInput';
import { CreateUserRequest } from '../../../../../../types/requests/createUser/createUserRequest';
import api from '../../../../../../api';
import useResult from '@/hooks/result/useResult';
import { FieldValues, RegisterOptions, SubmitHandler, UseFormRegisterReturn, useForm } from 'react-hook-form';
import Input from '../../../../../../components/forms/inputs/input/Input';
import { FormValidationErrorMessage } from '../../../../../../types/formValidation/formValidationErrorMessage';
import DisplayNameInput from '../../../../../../components/forms/inputs/displayName/DisplayNameInput';
import useLanguage from '../../../../../../hooks/language/useLanguage';

type VerifiedRegistrationFormProps = {
  emailVerificationToken: string,
  emailAddress: string
}

export default function VerifiedRegistrationForm(props: VerifiedRegistrationFormProps): JSX.Element {

  const { emailAddress, emailVerificationToken } = props;

  const t = useRichTranslations('register.verified');

  const { result, awaitResult } = useResult();

  const { language } = useLanguage();

  const { register, handleSubmit, watch, formState, setError } = useForm<Omit<CreateUserRequest, 'emailVerificationCode'> & { repeat: string }>();

  const onSubmit: SubmitHandler<Omit<CreateUserRequest, 'emailVerificationCode'>> = async (request: Omit<CreateUserRequest, 'emailVerificationToken'>) => {
    awaitResult(async () => {
      const result = await api.user.createUser({ ...request, emailVerificationToken: emailVerificationToken, preferredLanguage: language });
      console.log({ result });
      return result;
    });
    
  }

  return (
    <Form submit={handleSubmit(onSubmit)} result={result}>
      <span>{t('instructions')}</span>
      <EmailAddressInput errors={formState.errors} defaultValue={emailAddress} readOnly register={register} name={'emailAddress'} />
      <DisplayNameInput required errors={formState.errors} register={register} name={'displayName'} />
      <NewPasswordInput errors={formState.errors} register={register} passwordName={'password'} repeatName={'repeat'} watch={watch} />
    </Form>
  );
}