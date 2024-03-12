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
    <div className={`flex flex-col py-4 gap-10 fixed h-full border-r-2 transition-all backdrop-blur-sm bg-transparent-full overflow-hidden z-30 ${scroll === 0 ? 'border-transparent-full' : 'border-primary-500'} ${isShown ? 'w-60' : 'w-10'}`}>
      <div className='flex items-center gap-2 px-1 justify-start'>
        <DashboardNavToggleButton isShown={isShown} toggleShown={() => setShown(s => !s)} />
        <h2 className='text-2xl font-bold'>{ user?.displayName }</h2>
      </div>
      <ul className='flex flex-col gap-6'>
        <DashboardNavLink href={'/dashboard'}><Home width={'2rem'} /><span>{t('dashboard')}</span></DashboardNavLink>
        <DashboardNavLink href={'/dashboard/profile'}><UserIcon width={'2rem'} /><span>{t('profile')}</span></DashboardNavLink>
        <DashboardNavLink href={'/dashboard/preferences'}><Settings2 width={'2rem'}/><span>{t('userPreferences')}</span></DashboardNavLink>
        <DashboardNavLink href={'/dashboard/security'}><Lock width={'2rem'} /><span>{t('security')}</span></DashboardNavLink>
      </ul>
    </div>
  );
}