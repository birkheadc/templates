import * as React from 'react';
import utils from '@/utils';

type PrimaryButtonProps = {
  className?: string,
  children?: React.ReactNode
}

export default function PrimaryButton(props: PrimaryButtonProps): JSX.Element {

  const { className, children } = props;

  return (
    <button className={utils.mergeClass('border p-1 px-3 bg-primary-500 text-primary-100 font-bold', className)}>{children}</button>
  );
}