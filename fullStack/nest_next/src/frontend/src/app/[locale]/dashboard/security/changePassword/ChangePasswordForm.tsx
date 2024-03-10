import Form from '@/components/forms/form/Form';
import useResult from '@/hooks/result/useResult';
import { ChangePasswordRequest } from '@/types/requests/changePassword/changePasswordRequest';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../../contexts/user/UserContext';
import EmailAddressInput from '../../../../../components/forms/inputs/emailAddressInput/EmailAddressInput';
import ConfirmNewPasswordInput from '../../../../../components/forms/inputs/newPasswordInput/ConfirmNewPasswordInput';
import PasswordInput from '../../../../../components/forms/inputs/passwordInput/PasswordInput';

interface ChangePasswordFormProps {

}

export default function ChangePasswordForm(props: ChangePasswordFormProps): JSX.Element {

  const { result, awaitResult } = useResult();
  const { register, handleSubmit, watch, formState } = useForm<ChangePasswordRequest & { repeat: string }>();
  const { changePassword } = React.useContext(UserContext);

  const onSubmit = async (request: ChangePasswordRequest) => {
    awaitResult(async () => {
      return await changePassword(request);
    })
  }

  return (
    <Form submit={handleSubmit(onSubmit)} result={result}>
      <EmailAddressInput name={'emailAddress'} hidden />
      <PasswordInput autoComplete='current-password' label='currentPassword' errors={formState.errors} id={'password'} register={register} name={'password'} />
      <ConfirmNewPasswordInput errors={formState.errors} register={register} passwordName={'newPassword'} repeatName={'repeat'} watch={watch} />
    </Form>
  );
}