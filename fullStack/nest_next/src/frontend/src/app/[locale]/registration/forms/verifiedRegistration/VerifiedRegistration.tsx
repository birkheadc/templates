import * as React from 'react';
import useRichTranslations from '../../../../../hooks/useRichTranslations/useRichTranslations';
import { Result } from '../../../../../types/result/result';
import api from '../../../../../api';
import NotificationBox from '../../../../../components/notification/NotificationBox';
import { NotificationType } from '../../../../../types/notification/notificationType';
import VerifiedRegistrationForm from './form/VerifiedRegistrationForm';

type VerifiedRegistrationProps = {
  code: string
}

export default function VerifiedRegistration(props: VerifiedRegistrationProps): JSX.Element {
  
  const { code } = props;
  const [ recentResult, setRecentResult ] = React.useState<Result<string> | undefined>();

  const t = useRichTranslations('register');

  React.useEffect(() => {
    (async function verifyCodeOnMount() {
      const result = await api.user.verify({ code });
      setRecentResult(result);
    })();
  }, [code])

  if (recentResult == null) return (
    <NotificationBox type={NotificationType.BASIC}>
      <span>{t('verified.checking')}</span>
    </NotificationBox>
  );

  if (!recentResult.wasSuccess || recentResult.body == null) return (
    <NotificationBox type={NotificationType.ERROR}>
      <span>{t('verified.failure')}</span>
    </NotificationBox>
  )

  return (
    <VerifiedRegistrationForm emailAddress={recentResult.body} emailVerificationToken={code} />
  );
}