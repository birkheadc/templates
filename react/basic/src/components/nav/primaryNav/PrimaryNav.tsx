import * as React from 'react';
import './PrimaryNav.css'
import { NavLink } from 'react-router-dom';

interface IPrimaryNavProps {

}

/**
*
* @returns {JSX.Element | null}
*/
export default function PrimaryNav(props: IPrimaryNavProps): JSX.Element | null {
  return (
    <nav className='primary-nav-wrapper'>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/test'>Test</NavLink></li>
      </ul>
    </nav>
  );
}