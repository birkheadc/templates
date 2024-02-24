import * as React from 'react';
import { Link } from '../../../navigation/navigation';
import utils from '../../../utils';

type BasicLinkProps = {
  href: string,
  className?: string,
  children?: React.ReactNode 
}

export default function BasicLink(props: BasicLinkProps): JSX.Element {

  const { href, className, children } = props;

  return (
    <Link className={utils.mergeClass('text-primary-700 hocus:text-primary-600 hocus:underline', className)} href={href}>{children}</Link>
  );
}