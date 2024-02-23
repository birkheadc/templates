import * as React from 'react';
import RegistrationForm from './form/RegistrationForm';
import Section from '../sections/Section';
import RedirectWrapper from '../../../components/redirectWrapper/RedirectWrapper';
import { SessionStatus } from '../../../types/session/session';

type pageProps = {

}

export default function page(props: pageProps): JSX.Element {
  return (
    <RedirectWrapper mode={'excludes'} statuses={[ SessionStatus.LOGGED_IN ]}>
      <Section className='items-start'>
         <h1 className='text-3xl text-center'>register</h1>
      </Section>
    </RedirectWrapper>
  );
}