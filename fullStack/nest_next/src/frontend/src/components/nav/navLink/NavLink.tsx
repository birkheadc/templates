'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
  href: string,
  className?: string,
  activeClassName?: string,
  inactiveClassName?: string,
  children?: React.ReactNode
}

const NavLink = (props: Props) => {

  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <Link className={props.className + ' ' + (isActive ? props.activeClassName : props.inactiveClassName)} href={props.href}>{props.children}</Link>
  )
}

export default NavLink