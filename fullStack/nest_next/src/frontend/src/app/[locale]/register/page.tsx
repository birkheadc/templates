import * as React from 'react';
import RegistrationForm from './form/RegistrationForm';
import Section from '../sections/Section';
import RedirectWrapper from '../../../components/redirectWrapper/RedirectWrapper';
import { SessionStatus } from '../../../types/session/session';
import useRichTranslations from '../../../hooks/useRichTranslations/useRichTranslations';

type pageProps = {

}

export default function page(props: pageProps): JSX.Element {

  const t = useRichTranslations('register');

  return (
    <RedirectWrapper mode={'excludes'} statuses={[ SessionStatus.LOGGED_IN ]} redirect='/dashboard'>
      <Section className='items-start'>
         <h1 className='text-3xl font-bold text-center'>{t('header')}</h1>
         <p>{t('instructions')}</p>
         <RegistrationForm />
      </Section>
    </RedirectWrapper>
  );
}