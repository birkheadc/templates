import * as React from 'react';
import Section from '../sections/Section';
import RedirectWrapper from '../../../components/redirectWrapper/RedirectWrapper';
import { SessionStatus } from '../../../types/session/session';
import useRichTranslations from '../../../hooks/useRichTranslations/useRichTranslations';
import RegistrationPageForms from './forms/RegistrationPageForms';
import PageHeader from '../header/PageHeader';

type RegistrationPageProps = {

}

export default function RegistrationPage(props: RegistrationPageProps): JSX.Element {

  const t = useRichTranslations('register');

  return (
    <RedirectWrapper mode={'excludes'} statuses={[ SessionStatus.LOGGED_IN ]} redirect='/dashboard'>
      <Section className='items-start'>
        <PageHeader>{t('header')}</PageHeader>
         <RegistrationPageForms />
      </Section>
    </RedirectWrapper>
  );
}