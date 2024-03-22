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
    <div className={utils.mergeClass('flex justify-center items-stretch p-10 min-h-svh-nav w-full overflow-x-hidden', className)}>
      <div className={utils.mergeClass('flex flex-col items-center justify-between w-full gap-8', innerClassName)}>
        {children}
      </div>
    </div>
  );
}