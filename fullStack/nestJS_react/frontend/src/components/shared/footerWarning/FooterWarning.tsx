import * as React from 'react';
import './FooterWarning.css'
import { SessionContext } from '../../../app/contexts/session/SessionContext';
import { SessionStatus } from '../../../types/session/session';

interface IFooterWarningProps {

}

/**
*
* @returns {JSX.Element | null}
*/
export default function FooterWarning(props: IFooterWarningProps): JSX.Element | null {

  const { session } = React.useContext(SessionContext);
  if (session.status !== SessionStatus.LOCAL) return null;
  
  return (
    <footer className='footer-warning-wrapper'>
      You are in DEMO MODE! Data may be lost at any time!
    </footer>
  );
}