import * as React from 'react';
import { Link, usePathname } from '../../../../../navigation/navigation';
import utils from '../../../../../utils';

type DashboardNavLinkProps = {
  className?: string,
  href: string,
  children?: React.ReactNode
}

export default function DashboardNavLink(props: DashboardNavLinkProps): JSX.Element {
  const { className, href, children } = props;

  const pathname = usePathname();
  const isActive = isCurrentLinkActive(href, pathname);

  const handleClick = () => {
    const activeElement = document.activeElement as HTMLElement;
    activeElement.blur();
  }

  return (
    <li className='flex flex-col h-full gap-2 w-60'>
      <Link className={utils.mergeClass(`flex items-center h-full gap-2 px-1 font-bold text-primary-500 hocus:text-primary-900 ${isActive ? 'text-primary-900' : ''}`, className)} href={href} onClick={handleClick}>{children}</Link>
      <div className={`h-1 bg-primary-900 transition-all ${isActive ? 'w-[100%]' : 'w-[0%]'}`}></div>
    </li>
  )
}

function isCurrentLinkActive(href: string, pathname: string): boolean {
  if (href === '/dashboard') {
    return pathname === '/dashboard';
  }
  return pathname.includes(href);
}