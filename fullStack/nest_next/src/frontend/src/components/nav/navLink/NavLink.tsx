'use client';

import {Link} from '@/navigation/navigation';
import { usePathname } from '../../../navigation/navigation';
import * as React from 'react';

type NavLinkProps = {
  className?: string,
  href: string,
  children?: React.ReactNode
}

export default function NavLink(props: NavLinkProps): JSX.Element {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  const className = 'flex items-center h-full gap-2 font-bold text-primary-500 hocus:text-primary-900';
  const activeClassName = 'text-primary-900';
  const inactiveClassName = '';

  const handleClick = () => {
    const activeElement = document.activeElement as HTMLElement;
    activeElement.blur();
  }

  return (
    <div className='flex flex-col items-center h-full'>
      <Link className={className + ' ' + (isActive ? activeClassName : inactiveClassName)} href={props.href} onClick={handleClick}>{props.children}</Link>
      <div className={`h-1 bg-primary-900 transition-all ${isActive ? 'w-[100%]' : 'w-[0%]'}`}></div>
    </div>
  )
}