import * as React from 'react';

type DashboardHeaderProps = {
  children?: React.ReactNode
}

export default function DashboardHeader(props: DashboardHeaderProps): JSX.Element {

  const { children } = props;

  return (
    <h1 className='font-bold text-2xl w-full'>
      { children }
    </h1>
  );
}