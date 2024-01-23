import Link from 'next/link';
import * as React from 'react';

type BasicLinkProps = {
  href: string,
  className?: string,
  children?: React.ReactNode 
}

export default function BasicLink(props: BasicLinkProps): JSX.Element {
  return (
    <Link className={'text-primary-500 hover:text-pink-500' + (props.className ? ' ' + props.className : '')} href={props.href}>{props.children}</Link>
  );
}