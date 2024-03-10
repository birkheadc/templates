import { LogOutIcon, UserIcon } from 'lucide-react';
import * as React from 'react';
import NavLink from '../../navLink/NavLink';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import { UserContext } from '../../../../contexts/user/UserContext';

type NavSessionLoggedInLinksProps = {

}

export default function NavSessionLoggedInLinks(props: NavSessionLoggedInLinksProps): JSX.Element {

  const t = useRichTranslations('nav');
  const { user } = React.useContext(UserContext);

  return (
    <>
      <NavLink href='/logout'><span className='hidden lg:block'>{t('logout')}</span><LogOutIcon width={'1rem'} /></NavLink>
      <NavLink href='/dashboard'><span className='hidden lg:block'>{user?.displayName}</span><UserIcon width={'1rem'} /></NavLink>
    </>
  );
}