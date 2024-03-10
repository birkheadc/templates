'use client';
import * as React from 'react';
import Section from '../sections/Section';
import { SessionContext } from '../../../contexts/session/SessionContext';
import RedirectWrapper from '../../../components/redirectWrapper/RedirectWrapper';
import { SessionStatus } from '../../../types/session/session';
import PageHeader from '../header/PageHeader';
import useRichTranslations from '../../../hooks/useRichTranslations/useRichTranslations';

type LogoutPageProps = {

}

export default function LogoutPage(props: LogoutPageProps): JSX.Element {

  const t = useRichTranslations('logout');

  const { logout } = React.useContext(SessionContext);

  React.useEffect(function logoutOnMount() {
    logout();
  }, []);

  return (
    <RedirectWrapper mode='includes' statuses={[ SessionStatus.LOGGED_IN ]}>
      <Section className='items-start'>
        <PageHeader>{t('header')}</PageHeader>
      </Section>
    </RedirectWrapper>
  );
}