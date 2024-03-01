import * as React from 'react';
import Form from '../../../../../components/forms/form/Form';
import useRichTranslations from '../../../../../hooks/useRichTranslations/useRichTranslations';
import { Result } from '../../../../../types/result/result';
import { ResultMessage } from '../../../../../types/result/resultMessage';
import api from '../../../../../api';
import NotificationBox from '../../../../../components/notification/NotificationBox';
import { NotificationType } from '../../../../../types/notification/notificationType';
import ResultDisplay from '../../../../../components/resultDisplay/ResultDisplay';
import Input from '../../../../../components/forms/inputs/input/Input';
import VerifiedRegistrationForm from './form/VerifiedRegistrationForm';

type VerifiedRegistrationProps = {
  code: string
}

export default function VerifiedRegistration(props: VerifiedRegistrationProps): JSX.Element {
  
  const { code } = props;
  const [ recentResult, setRecentResult ] = React.useState<Result<string> | undefined>();

  const t = useRichTranslations('register');
  const tGeneral = useRichTranslations('general');

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