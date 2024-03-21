import * as React from 'react';
import RedirectWrapper from '../../../components/redirectWrapper/RedirectWrapper';
import { SessionStatus } from '../../../types/session/session';
import Section from '../sections/Section';
import useRichTranslations from '../../../hooks/useRichTranslations/useRichTranslations';
import PageHeader from '../header/PageHeader';
import AccountRecoveryForm from './form/AccountRecoveryForm';

type AccountRecoveryPageProps = {

}

export default function AccountRecoveryPage(props: AccountRecoveryPageProps): JSX.Element {

  const t = useRichTranslations('accountRecovery');
  
  return (
    <RedirectWrapper mode='excludes' statuses={[ SessionStatus.LOGGED_IN ]}>
      <Section innerClassName='justify-start'>
        <PageHeader>{t('header')}</PageHeader>
        <AccountRecoveryForm />
      </Section>
    </RedirectWrapper>
  );
}