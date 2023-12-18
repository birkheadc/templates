import * as React from 'react';
import './PrimaryNav.css'
import { NavLink } from 'react-router-dom';
import { SessionContext } from '../../../app/contexts/session/SessionContext';
import { SessionStatus } from '../../../types/session/session';

interface IPrimaryNavProps {

}

/**
*
* @returns {JSX.Element | null}
*/
export default function PrimaryNav(props: IPrimaryNavProps): JSX.Element | null {

  const { session } = React.useContext(SessionContext);

  return (
    <nav className='primary-nav-wrapper'>
      <div className='primary-nav-inner-wrapper'>
        <ul>
          <li><NavLink to='/'>home</NavLink></li>
        </ul>
        { session.status === SessionStatus.LOGGED_IN
        ? LoggedInLinks
        : LoggedOutLinks
        }
      </div>
    </nav>
  );
}

const LoggedInLinks = (
  <ul>
    <li><NavLink to='/logout'>logout</NavLink></li>
  </ul>
)

const LoggedOutLinks = (
  <ul>
    <li><NavLink to='/login'>login</NavLink></li>
  </ul>
)