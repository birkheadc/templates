import * as React from 'react';

import { LoadingSpinnerProvider } from '../loadingSpinner/LoadingSpinnerContext';
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
    <LoadingSpinnerProvider>
      <SessionProvider>
        {props.children}
      </SessionProvider>
    </LoadingSpinnerProvider>
  );
}