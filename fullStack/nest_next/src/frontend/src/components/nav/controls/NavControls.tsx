import * as React from 'react';
import ThemeSwitch from './themeSwitch/ThemeSwitch';
import LanguageControl from './language/LanguageControl';

type NavControlsProps = {

}

export default function NavControls(props: NavControlsProps): JSX.Element {
  return (
    <div className='flex items-center gap-4'>
      <ThemeSwitch />
      <LanguageControl />
    </div>
  );
}