import { LogInIcon, UserPlusIcon } from 'lucide-react';
import * as React from 'react';
import NavLink from '../../navLink/NavLink';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';

type NavSessionLoggedOutLinksProps = {

}

export default function NavSessionLoggedOutLinks(props: NavSessionLoggedOutLinksProps): JSX.Element {

  const t = useRichTranslations('nav');

  return (
    <>
      <NavLink href='/login'><span className='hidden lg:block'>{t('login')}</span><LogInIcon width={'1rem'} /></NavLink>
      <NavLink href='/register'><span className='hidden lg:block'>{t('register')}</span><UserPlusIcon width={'1rem'} /></NavLink>
    </>
  );
}