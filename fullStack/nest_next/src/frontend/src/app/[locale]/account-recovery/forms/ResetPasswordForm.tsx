import * as React from 'react';
import Form from '../../../../components/forms/form/Form';
import { useForm } from 'react-hook-form';
import { ResetPasswordRequest } from '../../../../types/requests/resetPassword/resetPassword';
import api from '../../../../api';
import useResult from '../../../../hooks/result/useResult';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import ConfirmNewPasswordInput from '../../../../components/forms/inputs/newPasswordInput/ConfirmNewPasswordInput';
import EmailAddressInput from '../../../../components/forms/inputs/emailAddressInput/EmailAddressInput';
import NotificationBox from '../../../../components/notification/NotificationBox';
import { NotificationType } from '../../../../types/notification/notificationType';
import { SessionContext } from '../../../../contexts/session/SessionContext';
import { useRouter } from '../../../../navigation/navigation';

type ResetPasswordFormProps = {
  code: string
}

export default function ResetPasswordForm(props: ResetPasswordFormProps): JSX.Element {

  const [ emailAddress, setEmailAddress ] = React.useState<string | null | undefined>(undefined);

  const { code } = props;
  const t = useRichTranslations('accountRecovery');

  const { result, awaitResult } = useResult();

  const { register, handleSubmit, watch, formState, setError } = useForm<ResetPasswordRequest & { repeat: string }>();

  const { expire } = React.useContext(SessionContext);
  const { push } = useRouter();

  React.useEffect(() => {
    (async function fetchUserOnMount() {
      const result = await api.user.verifyResetPasswordCode({ code });
      setEmailAddress(result.body ?? null);
    })();
  }, []);

  const onSubmit = async (request: Omit<ResetPasswordRequest, 'resetToken'> & { repeat: string }) => {
    awaitResult(async () => {
      const result = await api.user.resetPassword({ resetToken: code, ...request});
      result.errors.forEach(error => {
        if (error.field == null || error.message == null) return;
        setError(error.field as keyof ResetPasswordRequest, { message: error.message });
      });
      if (result.wasSuccess) {
        expire();
        push('/login');
      }
      return result;
    })
  }

  if (emailAddress === undefined) return (
    <NotificationBox type={NotificationType.BASIC}>
      <span>{t('checking')}</span>
    </NotificationBox>
  );

  if (emailAddress === null) return (
    <NotificationBox type={NotificationType.ERROR}>
      <span>{t('failure')}</span>
    </NotificationBox>
  )

  return (
    <Form submit={handleSubmit(onSubmit)} result={result}>
      <p>{t('resetFormInstructions')}</p>
      <EmailAddressInput errors={formState.errors} defaultValue={emailAddress} readOnly register={register} name={'emailAddress'} />
      <ConfirmNewPasswordInput errors={formState.errors} register={register} passwordName={'password'} repeatName={'repeat'} watch={watch} />
    </Form>
  );
}