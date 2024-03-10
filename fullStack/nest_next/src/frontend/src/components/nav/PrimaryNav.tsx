'use client';

import * as React from 'react';
import NavControls from './controls/NavControls';
import NavPageLinks from './pages/NavPageLinks';
import NavSessionLinks from './session/NavSessionLinks';
import useScroll from '../../hooks/scroll/useScroll';

type PrimaryNavProps = {
  
}

export default function PrimaryNav(props: PrimaryNavProps): JSX.Element {

  const scroll = useScroll();

  return (
    <nav className={`z-20 fixed px-8 h-nav w-full transition-colors duration-300 backdrop-blur-sm border-b-2 ${scroll === 0 ? 'border-transparent-full bg-transparent-full' : 'border-primary-500 bg-transparent-theme-med'}`}>
      <div className='flex items-center justify-between h-full m-auto'>
        <div className='flex gap-4'>
          <NavPageLinks />
        </div>
        <div className='flex gap-8'>
          <NavSessionLinks />
          <NavControls />
        </div>
      </div>
    </nav>
  )
}