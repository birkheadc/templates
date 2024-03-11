import * as React from 'react';
import Form from '../../../../../../components/forms/form/Form';
import EmailAddressInput from '../../../../../../components/forms/inputs/emailAddressInput/EmailAddressInput';
import useRichTranslations from '../../../../../../hooks/useRichTranslations/useRichTranslations';
import ConfirmNewPasswordInput from '../../../../../../components/forms/inputs/newPasswordInput/ConfirmNewPasswordInput';
import { CreateUserRequest } from '../../../../../../types/requests/createUser/createUserRequest';
import api from '../../../../../../api';
import useResult from '@/hooks/result/useResult';
import { SubmitHandler, useForm } from 'react-hook-form';
import DisplayNameInput from '../../../../../../components/forms/inputs/displayName/DisplayNameInput';
import useLanguage from '../../../../../../hooks/language/useLanguage';
import { validationConfig } from '../../../../../../config/config';
import { useRouter } from '@/navigation/navigation';

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
      result.errors.forEach(error => {
        if (error.field == null || error.message == null) return;
        setError(error.field as keyof CreateUserRequest, { message: error.message });
      });
      return result;
    });
    
  }

  return (
    <Form submit={handleSubmit(onSubmit)} result={result}>
      <span>{t('instructions')}</span>
      <EmailAddressInput errors={formState.errors} defaultValue={emailAddress} readOnly register={register} name={'emailAddress'} />
      <DisplayNameInput required errors={formState.errors} register={register} name={'displayName'} />
      <ConfirmNewPasswordInput errors={formState.errors} register={register} passwordName={'password'} repeatName={'repeat'} watch={watch} />
    </Form>
  );
}