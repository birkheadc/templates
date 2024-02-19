import * as React from 'react';
import NavControls from './controls/NavControls';
import NavPageLinks from './pages/NavPageLinks';
import NavSessionLinks from './session/NavSessionLinks';

type PrimaryNavProps = {

}

export default function PrimaryNav(props: PrimaryNavProps): JSX.Element {
  return (
    <nav className='p-4 px-8 h-nav'>
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