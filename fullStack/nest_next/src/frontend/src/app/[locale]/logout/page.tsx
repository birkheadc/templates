'use client';
import * as React from 'react';
import Section from '../sections/Section';
import { SessionContext } from '../../../contexts/session/SessionContext';
import RedirectWrapper from '../../../components/redirectWrapper/RedirectWrapper';
import { SessionStatus } from '../../../types/session/session';

type LogoutPageProps = {

}

export default function LogoutPage(props: LogoutPageProps): JSX.Element {

  const { logout } = React.useContext(SessionContext);

  React.useEffect(function logoutOnMount() {
    logout();
  }, []);

  return (
    <RedirectWrapper mode='includes' statuses={[ SessionStatus.LOGGED_IN ]}>
      <Section className='items-start'>
        <h1 className='text-3xl text-center'>logging out</h1>
      </Section>
    </RedirectWrapper>
  );
}