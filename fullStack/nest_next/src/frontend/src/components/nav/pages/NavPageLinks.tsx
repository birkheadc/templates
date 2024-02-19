import * as React from 'react';
import NavLink from '../navLink/NavLink';
import { HomeIcon } from 'lucide-react';

type NavPageLinksProps = {

}

export default function NavPageLinks(props: NavPageLinksProps): JSX.Element {
  return (
    <ul className='flex h-full gap-4'>
      <li><NavLink href={'/'}><span className='hidden lg:block'>home</span><HomeIcon width={'1rem'} /></NavLink></li>
    </ul>
  );
}