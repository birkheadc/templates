import * as React from 'react';

type DashboardSectionProps = {
  children?: React.ReactNode
}

export default function DashboardSection(props: DashboardSectionProps): JSX.Element {

  const { children } = props;
  
  return (
    <div className='w-full'>
      { children }
    </div>
  );
}