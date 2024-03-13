import * as React from 'react';

type RootLayoutProps = {
  children?: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps): JSX.Element {

  const { children } = props;

  return (
    <>{ children }</>
  );
}