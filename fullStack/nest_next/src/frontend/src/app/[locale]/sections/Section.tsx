import * as React from 'react';
import utils from '../../../utils';

type SectionProps = {
  className?: string,
  children?: React.ReactNode
}

export default function Section(props: SectionProps): JSX.Element {

  const { className, children } = props;

  return (
    <div className={utils.mergeClass(className, 'p-4 px-8 h-svh-nav')}>
      {children}
    </div>
  );
}