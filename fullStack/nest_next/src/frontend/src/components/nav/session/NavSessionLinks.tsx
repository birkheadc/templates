'use client';

import * as React from 'react';
import NavLink from '../navLink/NavLink';
import { LogInIcon, LogOutIcon, UserIcon, UserPlusIcon } from 'lucide-react';
import { SessionContext } from '../../../contexts/session/SessionContext';
import { SessionStatus } from '../../../types/session/session';

type NavSessionLinksProps = {

}

export default function NavSessionLinks(props: NavSessionLinksProps): JSX.Element {

  const { session } = React.useContext(SessionContext);

  return (
    <ul className='flex h-full gap-6'>
      { session.status === SessionStatus.LOGGED_IN
        ? <>
            <li><NavLink href='/logout'><span className='hidden lg:block'>logout</span><LogOutIcon width={'1rem'} /></NavLink></li>
            <li><NavLink href='/dashboard'><span className='hidden lg:block'>dashboard</span><UserIcon width={'1rem'} /></NavLink></li>
          </>
        : <>
            <li><NavLink href='/login'><span className='hidden lg:block'>login</span><LogInIcon width={'1rem'} /></NavLink></li>
            <li><NavLink href='/register'><span className='hidden lg:block'>register</span><UserPlusIcon width={'1rem'} /></NavLink></li>
          </>
      }
    </ul>
  );
}