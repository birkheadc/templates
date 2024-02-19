import * as React from 'react';
import NavControls from './controls/NavControls';
import NavPageLinks from './pages/NavPageLinks';
import NavSessionLinks from './session/NavSessionLinks';

type PrimaryNavProps = {

}

export default function PrimaryNav(props: PrimaryNavProps): JSX.Element {
  return (
    <nav className='p-4'>
      <div className='flex justify-between m-auto max-w-7xl'>
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