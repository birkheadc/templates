import * as React from 'react';
import BasicLink from '../basicLink/BasicLink';
import utils from '../../../utils';

type BasicButtonLinkProps = {
  href: string,
  className?: string,
  children?: React.ReactNode 
}

export default function BasicButtonLink(props: BasicButtonLinkProps): JSX.Element {
  const { href, className, children } = props;

  return (
    <BasicLink className={utils.mergeClass('flex justify-center items-center text-lg p-2 px-6 bg-neutral-50 border-2 text-primary-700 font-bold hocus:bg-primary-400 hocus:text-primary-950 active:scale-90 hocus:no-underline', className)} href={href}>{children}</BasicLink>
  );
}