import * as React from 'react';
import './ChangePasswordSection.css'
import { Result } from '../../../../types/result/result';
import { LoadingSpinnerContext } from '../../../../app/contexts/loadingSpinner/LoadingSpinnerContext';
import ChangePasswordForm from './form/ChangePasswordForm';
import ResultDisplay from '../../../resultDisplay/ResultDisplay';
import { ChangePasswordRequest } from '../../../../types/settings/changePassword';
import api from '../../../../api';
import { SessionContext } from '../../../../app/contexts/session/SessionContext';

interface IChangePasswordSectionProps {

}

/**
*
* @returns {JSX.Element | null}
*/
export default function ChangePasswordSection(props: IChangePasswordSectionProps): JSX.Element | null {

  const [ recentResult, setRecentResult ] = React.useState<Result | undefined>(undefined);
  const { setLoading } = React.useContext(LoadingSpinnerContext);
  const { session, expire } = React.useContext(SessionContext);

  const submit = async (request: ChangePasswordRequest) => {
    if (session.token == null) {
      expire();
      return;
    }
    setLoading(true);
    const result = await api.users.changePassword(session.token, request);
    setRecentResult(result);
    setLoading(false);
    if (result.errors.some(e => e.statusCode === 401)) expire();
  }

  return (
    <section className='settings-section change-password-section-wrapper'>
      <h2>Change Password</h2>
      <ResultDisplay result={recentResult} />
      <ChangePasswordForm submit={submit} />
    </section>
  );
}