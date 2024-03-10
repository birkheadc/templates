import * as React from 'react';

type DashboardSectionHeaderProps = {
  children?: React.ReactNode
}

export default function DashboardSectionHeader(props: DashboardSectionHeaderProps): JSX.Element {

  const { children } = props;

  return (
    <h2 className='text-2xl font-bold py-4'>
      { children }
    </h2>
  );
}