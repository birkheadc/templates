'use client';

import * as React from 'react';
import { SessionContext } from '../../../contexts/session/SessionContext';
import { SessionStatus } from '../../../types/session/session';
import NavSessionLoggedInLinks from './loggedInLinks/NavSessionLoggedInLinks';
import NavSessionLoggedOutLinks from './loggedOutLinks/NavSessionLoggedOutLinks';

type NavSessionLinksProps = {

}

export default function NavSessionLinks(props: NavSessionLinksProps): JSX.Element {

  const { session } = React.useContext(SessionContext);

  return (
    <ul className='flex h-full gap-6'>
      { session.status === SessionStatus.LOGGED_IN
        ? <NavSessionLoggedInLinks />
        : <NavSessionLoggedOutLinks />
      }
    </ul>
  );
}