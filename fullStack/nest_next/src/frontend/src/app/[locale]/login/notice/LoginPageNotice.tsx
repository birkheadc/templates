'use client';

import * as React from 'react';
import { SessionContext } from '../../../../contexts/session/SessionContext';
import NotificationBox from '../../../../components/notification/NotificationBox';
import { NotificationType } from '../../../../types/notification/notificationType';
import { SessionStatus } from '../../../../types/session/session';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';

type LoginPageNoticeProps = {

}

export default function LoginPageNotice(props: LoginPageNoticeProps): JSX.Element {

  const t = useRichTranslations('login');
  const { session } = React.useContext(SessionContext);
  
  return (
    <>
      {session.status === SessionStatus.EXPIRED && <NotificationBox type={NotificationType.WARNING}>{t('sessionExpired')}</NotificationBox>}
    </>
  );
}