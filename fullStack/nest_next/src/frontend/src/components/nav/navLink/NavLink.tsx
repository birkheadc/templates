'use client';

import {Link} from '@/navigation/navigation';
import { usePathname } from '../../../navigation/navigation';
import * as React from 'react';
import utils from '../../../utils';

type NavLinkProps = {
  className?: string,
  href: string,
  children?: React.ReactNode
}

export default function NavLink(props: NavLinkProps): JSX.Element {

  const { className, href, children } = props;

  const pathname = usePathname();
  const isActive = isCurrentLinkActive(href, pathname);

  const handleClick = () => {
    const activeElement = document.activeElement as HTMLElement;
    activeElement.blur();
  }

  return (
    <li className='flex flex-col h-full'>
      <Link className={utils.mergeClass(`flex items-center h-full gap-2 px-2 font-bold text-primary-500 hocus:text-primary-900 ${isActive ? 'text-primary-900' : ''}`, className)} href={href} onClick={handleClick}>{children}</Link>
      <div className={`h-1 bg-primary-900 transition-all ${isActive ? 'w-[100%]' : 'w-[0%]'}`}></div>
    </li>
  )
}

function isCurrentLinkActive(href: string, pathname: string): boolean {
  if (href === '/') {
    return pathname === '/';
  }
  return pathname.includes(href);
}