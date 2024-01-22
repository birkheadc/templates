import React from 'react'
import NavLink from './navLink/NavLink'
import { ArrowRightEndOnRectangleIcon, HomeIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const PrimaryNav = () => {

  const className = 'flex items-center gap-2 hover:text-primary-50 text-primary-200';
  const activeClassName = 'text-primary-50 font-bold';
  const inactiveClassName = '';

  return (
    <nav className='bg-primary-900'>
      <div className='flex justify-between p-4 px-6 m-auto max-w-7xl'>
        <ul className='flex gap-8'>
          <li>
            <NavLink className={className} activeClassName={activeClassName} inactiveClassName={inactiveClassName} href='/'><HomeIcon width={'1.5em'} /><span className='hidden sm:inline-block'>home</span></NavLink>
          </li>
        </ul>
        <ul className='flex gap-8'>
          <li>
            <NavLink className={className} activeClassName={activeClassName} inactiveClassName={inactiveClassName} href='/register'><UserCircleIcon width={'1.5em'} /><span className='hidden sm:inline-block'>register</span></NavLink>
          </li>
          <li>
            <NavLink className={className} activeClassName={activeClassName} inactiveClassName={inactiveClassName} href='/login'><ArrowRightEndOnRectangleIcon width={'1.5em'} /><span className='hidden sm:inline-block'>login</span></NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default PrimaryNav