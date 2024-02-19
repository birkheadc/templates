'use client';

import * as React from 'react';
import NavControls from './controls/NavControls';
import NavPageLinks from './pages/NavPageLinks';
import NavSessionLinks from './session/NavSessionLinks';

type PrimaryNavProps = {

}

export default function PrimaryNav(props: PrimaryNavProps): JSX.Element {

  const [isTop, setTop] = React.useState<boolean>(true);

  React.useEffect(function addScrollListenerOnMount() {
    const listener = () => {
      setTop(window.scrollY < 50)
    }
    window.addEventListener('scroll', listener);
    return (() => {
      window.removeEventListener('scroll', listener);
    })
  }, []);

  return (
    <nav className={`fixed px-8 h-nav w-full transition-colors duration-700 backdrop-blur-sm ${isTop ? 'bg-neutral-50' : 'bg-transparent-high'}`}>
      <div className='flex h-full justify-between items-center m-auto'>
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