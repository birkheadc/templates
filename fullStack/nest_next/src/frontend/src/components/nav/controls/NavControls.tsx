import * as React from 'react';
import ThemeSwitch from './themeSwitch/ThemeSwitch';

type NavControlsProps = {

}

export default function NavControls(props: NavControlsProps): JSX.Element {
  return (
    <div className='flex'>
      <ThemeSwitch />
    </div>
  );
}