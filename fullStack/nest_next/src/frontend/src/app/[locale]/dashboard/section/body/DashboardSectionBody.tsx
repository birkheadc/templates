import * as React from 'react';

type DashboardSectionBodyProps = {
  children?: React.ReactNode
}

export default function DashboardSectionBody(props: DashboardSectionBodyProps): JSX.Element {
  
  const { children } = props;
  
  return (
    <div className='bg-primary-50 p-6'>
      { children }
    </div>
  );
}