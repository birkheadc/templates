'use client';

import * as React from 'react';
import { UserContext } from '../../../../contexts/user/UserContext';
import { Link } from '../../../../navigation/navigation';
import useScroll from '../../../../hooks/scroll/useScroll';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import { Home, Lock, Settings2, UserIcon } from 'lucide-react';
import DashboardNavLink from './link/DashboardNavLink';

type DashboardNavProps = {

}

export default function DashboardNav(props: DashboardNavProps): JSX.Element {

  const scroll = useScroll();
  const { user } = React.useContext(UserContext);

  const t = useRichTranslations('dashboard.nav');

  return (
    <div className={`flex flex-col gap-4 p-6 fixed h-full border-r-2 transition-colors ${scroll === 0 ? 'border-transparent-full duration-300' : 'border-primary-500 duration-700'}`}>
      <h2 className='font-bold text-2xl'>{ user?.displayName }</h2>
      <ul className='flex flex-col gap-2'>
        <DashboardNavLink className='flex flex-row gap-2' href={'/dashboard'}><Home width={'2rem'} />{t('dashboard')}</DashboardNavLink>
        <DashboardNavLink className='flex flex-row gap-2' href={'/dashboard/profile'}><UserIcon width={'2rem'} />{t('profile')}</DashboardNavLink>
        <DashboardNavLink className='flex flex-row gap-2' href={'/dashboard/preferences'}><Settings2 width={'2rem'}/>{t('userPreferences')}</DashboardNavLink>
        <DashboardNavLink className='flex flex-row gap-2' href={'/dashboard/security'}><Lock width={'2rem'} />{t('security')}</DashboardNavLink>
      </ul>
    </div>
  );
}