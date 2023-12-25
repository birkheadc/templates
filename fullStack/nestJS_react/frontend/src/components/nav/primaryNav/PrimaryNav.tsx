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
    <li><NavLink to='/'><div className="nav-link-wrapper"><span>home</span></div></NavLink></li>
    <li><NavLink to='/settings'><div className="nav-link-wrapper"><span>settings</span></div></NavLink></li>
    <li><NavLink to='/logout'><div className="nav-link-wrapper"><span>logout</span></div></NavLink></li>
  </ul>
)

const LoggedOutLinks = (
  <ul>
    <li><NavLink to='/'><div className="nav-link-wrapper"><span>home</span></div></NavLink></li>
    <li><NavLink to='/login'><div className="nav-link-wrapper"><span>login</span></div></NavLink></li>
  </ul>
)