import * as React from 'react';

type PageHeaderProps = {
  children?: React.ReactNode
}

export default function PageHeader(props: PageHeaderProps): JSX.Element {

  const { children } = props;

  return (
    <h1 className='text-3xl font-bold text-center'>{ children }</h1>
  );
}