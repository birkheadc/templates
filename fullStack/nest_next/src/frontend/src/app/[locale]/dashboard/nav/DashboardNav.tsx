'use client';

import * as React from 'react';
import { UserContext } from '../../../../contexts/user/UserContext';
import useScroll from '../../../../hooks/scroll/useScroll';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import { Home, Lock, Settings2, UserIcon } from 'lucide-react';
import DashboardNavLink from './link/DashboardNavLink';
import DashboardNavToggleButton from './button/DashboardNavToggleButton';

type DashboardNavProps = {

}

export default function DashboardNav(props: DashboardNavProps): JSX.Element {

  const scroll = useScroll();
  const { user } = React.useContext(UserContext);

  const t = useRichTranslations('dashboard.nav');

  const [ isShown, setShown ] = React.useState<boolean>(false);

  return (
    <div className={`flex flex-col gap-4 fixed h-full border-r-2 transition-all backdrop-blur-sm bg-transparent-theme-high ${scroll === 0 ? 'border-transparent-full duration-300' : 'border-primary-500 duration-700'} ${isShown ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className='flex items-center justify-between px-6'>
        <h2 className='text-2xl font-bold'>{ user?.displayName }</h2>
        <DashboardNavToggleButton isShown={isShown} toggleShown={() => setShown(s => !s)} />
      </div>
      <ul className='flex flex-col gap-2'>
        <DashboardNavLink className={`flex flex-row gap-2 px-6 ${isShown ? 'translate-x-0' : 'translate-x-full'}`} href={'/dashboard'}><Home width={'2rem'} /><span className={`${isShown ? '' : 'hidden'}`}>{t('dashboard')}</span></DashboardNavLink>
        <DashboardNavLink className={`flex flex-row gap-2 px-6 ${isShown ? 'translate-x-0' : 'translate-x-full'}`} href={'/dashboard/profile'}><UserIcon width={'2rem'} /><span className={`${isShown ? '' : 'hidden'}`}>{t('profile')}</span></DashboardNavLink>
        <DashboardNavLink className={`flex flex-row gap-2 px-6 ${isShown ? 'translate-x-0' : 'translate-x-full'}`} href={'/dashboard/preferences'}><Settings2 width={'2rem'}/><span className={`${isShown ? '' : 'hidden'}`}>{t('userPreferences')}</span></DashboardNavLink>
        <DashboardNavLink className={`flex flex-row gap-2 px-6 ${isShown ? 'translate-x-0' : 'translate-x-full'}`} href={'/dashboard/security'}><Lock width={'2rem'} /><span className={`${isShown ? '' : 'hidden'}`}>{t('security')}</span></DashboardNavLink>
      </ul>
    </div>
  );
}