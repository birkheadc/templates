'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

type NavLinkProps = {
  href: string,
  className?: string,
  activeClassName?: string,
  inactiveClassName?: string,
  children?: React.ReactNode
}

export default function NavLink(props: NavLinkProps): JSX.Element {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <Link className={props.className + ' ' + (isActive ? props.activeClassName : props.inactiveClassName)} href={props.href}>{props.children}</Link>
  )
}