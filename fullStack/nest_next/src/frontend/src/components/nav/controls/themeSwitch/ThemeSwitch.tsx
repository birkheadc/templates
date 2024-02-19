'use client';

import * as React from 'react';
import useTheme from '../../../../hooks/theme/useTheme';
import * as Switch from '@radix-ui/react-switch';
import { Sun, Moon } from 'lucide-react';

type ThemeSwitchProps = {

}

export default function ThemeSwitch(props: ThemeSwitchProps): JSX.Element {

  const { theme, changeTheme } = useTheme();

  const switchTheme = () => {
    changeTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className='flex items-center justify-center'>
      <Switch.Root checked={theme === 'dark'} onCheckedChange={switchTheme} className='flex items-center w-16 overflow-hidden border-2 rounded-full cursor-pointer hocus:border-primary-900 border-primary-600 bg-primary-300'>
        <Switch.Thumb className='rounded-full text-primary-100 flex justify-center items-center p-1 bg-primary-500 h-8 w-[50%] pointer-events-none bg-background shadow-lg ring-0 transition-all data-[state=checked]:translate-x-[100%] data-[state=unchecked]:translate-x-0'>
          {theme === 'light' ? <Sun /> : <Moon />}
        </Switch.Thumb>
      </Switch.Root>
    </div>
  );
}