import * as React from 'react';
import { SessionProvider } from './session/SessionContext';

type ProvidersProps = {
  children?: React.ReactNode
}

export default function Providers(props: ProvidersProps): JSX.Element {

  const { children } = props;
  
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}