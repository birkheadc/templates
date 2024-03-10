import * as React from 'react';
import LoginForm from './form/LoginForm';
import Section from '../sections/Section';
import LoginHelp from './help/LoginHelp';
import RedirectWrapper from '../../../components/redirectWrapper/RedirectWrapper';
import { SessionStatus } from '../../../types/session/session';
import useRichTranslations from '../../../hooks/useRichTranslations/useRichTranslations';
import PageHeader from '../header/PageHeader';

type LoginPageProps = {

}

export default function LoginPage(props: LoginPageProps): JSX.Element {

  const t = useRichTranslations('login');

  return (
    <RedirectWrapper mode='excludes' statuses={[ SessionStatus.LOGGED_IN ]} redirect='/dashboard'>
      <Section className='items-start'>
        <PageHeader>{t('header')}</PageHeader>
        <LoginForm />
        <LoginHelp />
      </Section>
    </RedirectWrapper>
  );
}