import * as React from 'react';
import _api from "../../api";
import { SessionContext } from '../../app/contexts/session/SessionContext';
import { SessionStatus } from '../../types/session/session';

export function useApi(): { api: typeof _api.local | typeof _api.live } {
  const { session } = React.useContext(SessionContext);
  const [ api, setApi ] = React.useState<typeof _api.local | typeof _api.live>(session.status === SessionStatus.LOCAL ? _api.local : _api.live);

  React.useEffect(function setApiBasedOnSessionContext() {
    setApi(session.status === SessionStatus.LOCAL ? _api.local : _api.live );
  }, [ session ]);
  
  return { api };
}