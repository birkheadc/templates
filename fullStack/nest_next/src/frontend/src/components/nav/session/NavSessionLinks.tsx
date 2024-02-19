import * as React from 'react';
import NavLink from '../navLink/NavLink';
import { LogIn, UserPlus } from 'lucide-react';

type NavSessionLinksProps = {

}

export default function NavSessionLinks(props: NavSessionLinksProps): JSX.Element {
  return (
    <ul className='flex h-full gap-6'>
      <li><NavLink href='/login'><span className='hidden lg:block'>login</span><LogIn width={'1rem'} /></NavLink></li>
      <li><NavLink href='/register'><span className='hidden lg:block'>register</span><UserPlus width={'1rem'} /></NavLink></li>
    </ul>
  );
}