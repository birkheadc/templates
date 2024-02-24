'use client';

import * as React from 'react';
import NavLink from '../navLink/NavLink';
import { LogInIcon, LogOutIcon, UserIcon, UserPlusIcon } from 'lucide-react';
import { SessionContext } from '../../../contexts/session/SessionContext';
import { SessionStatus } from '../../../types/session/session';
import NavSessionLoggedInLinks, { NavSessionLoggedInLinksProps } from './loggedInLinks/NavSessionLoggedInLinks';
import NavSessionLoggedOutLinks, { NavSessionLoggedOutLinksProps } from './loggedOutLinks/NavSessionLoggedOutLinks';

export type NavSessionLinksProps = {
  loggedInLinks: React.ReactElement<NavSessionLoggedInLinksProps>,
  loggedOutLinks: React.ReactElement<NavSessionLoggedOutLinksProps>
}

export default function NavSessionLinks(props: NavSessionLinksProps): JSX.Element {

  const { loggedInLinks, loggedOutLinks } = props;
  const { session } = React.useContext(SessionContext);

  return (
    <ul className='flex h-full gap-6'>
      { session.status === SessionStatus.LOGGED_IN
        ? loggedInLinks
        : loggedOutLinks
      }
    </ul>
  );
}