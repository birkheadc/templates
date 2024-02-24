import * as React from 'react';
import NavLink from '../navLink/NavLink';
import { HomeIcon } from 'lucide-react';
import useRichTranslations from '../../../hooks/useRichTranslations/useRichTranslations';

export type NavPageLinksProps = {

}

export default function NavPageLinks(props: NavPageLinksProps): JSX.Element {

  const t = useRichTranslations('nav');

  return (
    <ul className='flex h-full gap-4'>
      <li><NavLink href={'/'}><span className='hidden lg:block'>{t('home')}</span><HomeIcon width={'1rem'} /></NavLink></li>
    </ul>
  );
}