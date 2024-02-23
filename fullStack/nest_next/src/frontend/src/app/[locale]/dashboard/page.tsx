import * as React from 'react';
import Section from '../sections/Section';
import RedirectWrapper from '../../../components/redirectWrapper/RedirectWrapper';
import { SessionStatus } from '../../../types/session/session';

type DashboardPageProps = {

}

export default function DashboardPage(props: DashboardPageProps): JSX.Element {
  return (
    <RedirectWrapper mode='includes' statuses={[ SessionStatus.LOGGED_IN ]}>
      <Section className='items-start'>
        <h1 className='text-3xl text-center'>dashboard</h1>
      </Section>
    </RedirectWrapper>
  );
}