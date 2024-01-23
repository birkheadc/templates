import * as React from 'react';
import NavLink from './navLink/NavLink';
import { ArrowRightEndOnRectangleIcon, HomeIcon, UserCircleIcon } from '@heroicons/react/24/outline';

type PrimaryNavProps = {

}

export default function PrimaryNav(props: PrimaryNavProps): JSX.Element {
  return (
    <nav className='border-2 border-neutral-950 bg-translucent-medium'>
      <div className='flex justify-between p-4 px-6 m-auto max-w-7xl'>
        <ul className='flex gap-8'>
          <li>
            <NavLink href='/'><HomeIcon width={'1.5em'} /><span className='hidden sm:inline-block'>home</span></NavLink>  
          </li>
        </ul>
        <ul className='flex gap-8'>
          <li>
            <NavLink href='/register'><UserCircleIcon width={'1.5em'} /><span className='hidden sm:inline-block'>register</span></NavLink>
          </li>
          <li>
            <NavLink href='/login'><ArrowRightEndOnRectangleIcon width={'1.5em'} /><span className='hidden sm:inline-block'>login</span></NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}