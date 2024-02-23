import * as React from 'react';
import utils from '../../../utils';

type SectionProps = {
  className?: string,
  innerClassName?: string,
  children?: React.ReactNode
}

export default function Section(props: SectionProps): JSX.Element {

  const { className, innerClassName, children } = props;

  return (
    <div className={utils.mergeClass('flex justify-center items-stretch p-8 min-h-svh-nav', className)}>
      <div className={utils.mergeClass(innerClassName, 'flex flex-col items-center justify-between max-w-5xl gap-8')}>
        {children}
      </div>
    </div>
  );
}