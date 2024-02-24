import * as React from 'react';
import BasicLink from '../basicLink/BasicLink';
import utils from '../../../utils';

type PrimaryButtonLinkProps = {
  href: string,
  className?: string,
  children?: React.ReactNode 
}

export default function PrimaryButtonLink(props: PrimaryButtonLinkProps): JSX.Element {

  const { href, className, children } = props;

  return (
    <BasicLink className={utils.mergeClass('text-lg p-2 px-6 bg-primary-600 text-primary-50 font-bold hocus:bg-primary-400 hocus:text-primary-950 active:scale-90 hocus:no-underline', className)} href={href}>{children}</BasicLink>
  );
}