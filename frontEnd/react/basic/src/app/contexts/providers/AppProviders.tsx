import * as React from 'react';

import { LoadingSpinnerProvider } from '../loadingSpinner/LoadingSpinnerContext';

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
      {props.children}
    </LoadingSpinnerProvider>
  );
}