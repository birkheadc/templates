import * as React from 'react';
import utils from '@/utils';

type PrimaryButtonProps = {
  className?: string,
  children?: React.ReactNode
}

export default function PrimaryButton(props: PrimaryButtonProps): JSX.Element {

  const { className, children } = props;

  return (
    <button className={utils.mergeClass('p-1 px-3 bg-primary-600 text-primary-50 font-bold hocus:bg-primary-400 hocus:text-primary-950 active:scale-90', className)}>{children}</button>
  );
}