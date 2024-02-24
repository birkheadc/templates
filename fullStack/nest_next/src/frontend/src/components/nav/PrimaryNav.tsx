'use client';

import * as React from 'react';
import NavControls from './controls/NavControls';
import { NavPageLinksProps } from './pages/NavPageLinks';
import NavSessionLinks, { NavSessionLinksProps } from './session/NavSessionLinks';

type PrimaryNavProps = {
  pageLinks: React.ReactElement<NavPageLinksProps>
  sessionLinks: React.ReactElement<NavSessionLinksProps>
}

export default function PrimaryNav(props: PrimaryNavProps): JSX.Element {

  const { pageLinks, sessionLinks } = props;

  const [isTop, setTop] = React.useState<boolean>(true);

  React.useEffect(function addScrollListenerOnMount() {
    const listener = () => {
      setTop(window.scrollY < 1)
    }
    window.addEventListener('scroll', listener);
    return (() => {
      window.removeEventListener('scroll', listener);
    })
  }, []);

  return (
    <nav className={`fixed px-8 h-nav w-full transition-colors duration-300 backdrop-blur-sm border-b-2 ${isTop ? 'border-transparent-full bg-transparent-full' : 'border-primary-500 bg-transparent-theme-med'}`}>
      <div className='flex items-center justify-between h-full m-auto'>
        <div className='flex gap-4'>
          {pageLinks}
        </div>
        <div className='flex gap-8'>
          {sessionLinks}
          <NavControls />
        </div>
      </div>
    </nav>
  )
}