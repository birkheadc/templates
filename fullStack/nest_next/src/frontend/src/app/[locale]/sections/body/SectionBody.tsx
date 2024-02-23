import * as React from 'react';
import utils from '../../../../utils';

type SectionBodyProps = {
  children?: React.ReactNode,
  className?: string
}

export default function SectionBody(props: SectionBodyProps): JSX.Element {
  
  const { children, className } = props;
  
  return (
    <div className={utils.mergeClass('flex items-center justify-center flex-grow', className)}>
      {children}
    </div>
  );
}