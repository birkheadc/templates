import * as React from 'react';
import './ChangePasswordSection.css'
import { Result } from '../../../../types/result/result';
import { LoadingContext } from '../../../../app/contexts/loading/LoadingContext';
import ChangePasswordForm from './form/ChangePasswordForm';
import ResultDisplay from '../../../shared/resultDisplay/ResultDisplay';
import { ChangePasswordRequest } from '../../../../types/settings/changePassword';
import api from '../../../../api';
import { SessionContext } from '../../../../app/contexts/session/SessionContext';
import { UsersContext } from '../../../../app/contexts/users/UsersContext';

interface IChangePasswordSectionProps {

}

/**
*
* @returns {JSX.Element | null}
*/
export default function ChangePasswordSection(props: IChangePasswordSectionProps): JSX.Element | null {

  const [ recentResult, setRecentResult ] = React.useState<Result | undefined>(undefined);
  const { changePassword } = React.useContext(UsersContext);

  const submit = async (request: ChangePasswordRequest) => {
    const result = await changePassword(request);
    setRecentResult(result);
  }

  return (
    <section className='settings-section change-password-section-wrapper'>
      <h2>change password</h2>
      <ResultDisplay result={recentResult} />
      <ChangePasswordForm submit={submit} />
    </section>
  );
}