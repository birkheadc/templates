import * as React from 'react';
import './LogoutPage.css'
import { SessionContext } from '../../../app/contexts/session/SessionContext';

interface ILogoutPageProps {

}

/**
*
* @returns {JSX.Element | null}
*/
export default function LogoutPage(props: ILogoutPageProps): JSX.Element | null {

  const { logout } = React.useContext(SessionContext);

  React.useEffect(function logoutOnMount() {
    logout();
  }, []);

  return (
    <main className='logout-page-wrapper'>
      <span>Logging you out...</span>
    </main>
  );
}