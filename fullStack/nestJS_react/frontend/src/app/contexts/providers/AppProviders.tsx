import * as React from 'react';

import { LoadingProvider } from '../loading/LoadingContext';
import { SessionProvider } from '../session/SessionContext';

interface IAppProvidersProps {
  children: React.ReactNode
}

/**
*
* @returns {JSX.Element | null}
*/
export default function AppProviders(props: IAppProvidersProps): JSX.Element | null {
  return (
    <LoadingProvider>
      <SessionProvider>
        {props.children}
      </SessionProvider>
    </LoadingProvider>
  );
}