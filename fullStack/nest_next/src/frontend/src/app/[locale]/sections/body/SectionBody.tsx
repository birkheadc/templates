import * as React from 'react';
import utils from '../../../../utils';

type SectionBodyProps = {
  children?: React.ReactNode,
  className?: string
}

export default function SectionBody(props: SectionBodyProps): JSX.Element {
  
  const { children, className } = props;
  
  return (
    <div className={utils.mergeClass('flex flex-col items-center justify-center flex-grow gap-8', className)}>
      {children}
    </div>
  );
}