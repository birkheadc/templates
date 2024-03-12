'use client';

import * as React from 'react';
import { SessionContext } from '../../contexts/session/SessionContext';
import { SessionStatus } from '../../types/session/session';
import { useRouter } from '../../navigation/navigation';

type RedirectWrapperProps = {
  mode: 'includes' | 'excludes',
  statuses: SessionStatus[],
  children?: React.ReactNode,
  redirect?: string
}

export default function RedirectWrapper(props: RedirectWrapperProps): JSX.Element {

  const { statuses, mode, children, redirect } = props;
  const { session } = React.useContext(SessionContext);
  const router = useRouter();

  React.useEffect(function redirectIfNotLoggedIn() {
    if (shouldRedirect(session.status, mode, statuses)) {
      router.push(redirect ?? '/');
    }
  }, [ statuses, mode, session, redirect ]);

  return (
    <>
      { session.status !== SessionStatus.CHECKING && !shouldRedirect(session.status, mode, statuses) && children }
    </>
  );
}

function shouldRedirect(status: SessionStatus, mode: 'includes' | 'excludes', statuses: SessionStatus[]): boolean {
  if (status === SessionStatus.CHECKING) return false;

  const includes = statuses.includes(status);
  return (mode === 'includes') ? !includes : includes;
}