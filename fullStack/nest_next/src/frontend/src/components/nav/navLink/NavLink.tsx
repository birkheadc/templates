'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

type NavLinkProps = {
  href: string,
  children?: React.ReactNode
}

export default function NavLink(props: NavLinkProps): JSX.Element {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  const className = 'flex items-center gap-2 hover:text-primary-100';
  const activeClassName = 'text-primary-100 font-bold';
  const inactiveClassName = 'text-primary-50';

  return (
    <Link className={className + ' ' + (isActive ? activeClassName : inactiveClassName)} href={props.href}>{props.children}</Link>
  )
}