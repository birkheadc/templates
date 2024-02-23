import * as React from 'react';
import { Link } from '../../../navigation/navigation';

type BasicLinkProps = {
  href: string,
  className?: string,
  children?: React.ReactNode 
}

export default function BasicLink(props: BasicLinkProps): JSX.Element {
  return (
    <Link className={'text-primary-700 hocus:text-primary-600 hocus:underline' + (props.className ? ' ' + props.className : '')} href={props.href}>{props.children}</Link>
  );
}