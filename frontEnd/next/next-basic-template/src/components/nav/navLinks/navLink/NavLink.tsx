'use client';

import Link from 'next/link';
import * as React from 'react';

type NavLinkProps = {
  id: string,
  children: React.ReactNode
}

export default function NavLink(props: NavLinkProps): JSX.Element {

  const [ width, setWidth ] = React.useState<number>(0);

  React.useEffect(function setResizeListeners() {
    function calculateWidth() {
      const element = document.querySelector(`#${props.id}`);
      if (element == null) return 0;
      
      const elementHeight = element.clientHeight;
      const navHeight = document.querySelector('#primary-nav')?.clientHeight ?? 0;
      const maxY = document.documentElement.scrollHeight - navHeight;

      const offset = Math.min((elementHeight / maxY), 1);

      return offset;
    }
    
    setWidth(calculateWidth());
    const listener = () => {
      setWidth(calculateWidth());
    }
    
    window.addEventListener('resize', listener);
    
    return (() => {
      window.removeEventListener('resize', listener);
    })
  }, [ props.id ]);
  
  return (
    <li className='' style={{ width: `${width * 100}%` }}>
      <Link className='flex items-center justify-center h-full gap-2 p-2 transition-colors hover:text-secondary-400' href={`#${props.id}`}>{props.children}</Link>
    </li>
  );
}