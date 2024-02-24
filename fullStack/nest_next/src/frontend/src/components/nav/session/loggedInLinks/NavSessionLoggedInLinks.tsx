import { LogOutIcon, UserIcon } from 'lucide-react';
import * as React from 'react';
import NavLink from '../../navLink/NavLink';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';

type NavSessionLoggedInLinksProps = {

}

export default function NavSessionLoggedInLinks(props: NavSessionLoggedInLinksProps): JSX.Element {

  const t = useRichTranslations('nav');

  return (
    <>
      <li><NavLink href='/logout'><span className='hidden lg:block'>{t('logout')}</span><LogOutIcon width={'1rem'} /></NavLink></li>
      <li><NavLink href='/dashboard'><span className='hidden lg:block'>{t('dashboard')}</span><UserIcon width={'1rem'} /></NavLink></li>
    </>
  );
}