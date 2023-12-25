import * as React from 'react';
import './LoginPage.css'
import LoginForm from './form/LoginForm';
import { LoginCredentials } from '../../../types/credentials/loginCredentials';
import { Link } from 'react-router-dom';
import { LoadingSpinnerContext } from '../../../app/contexts/loadingSpinner/LoadingSpinnerContext';
import api from '../../../api';
import ResultDisplay from '../../resultDisplay/ResultDisplay';
import { Result } from '../../../types/result/result';
import { SessionContext } from '../../../app/contexts/session/SessionContext';
import { SessionStatus } from '../../../types/session/session';

interface ILoginPageProps {

}

/**
*
* @returns {JSX.Element | null}
*/
export default function LoginPage(props: ILoginPageProps): JSX.Element | null {

  const [ recentResult, setRecentResult ] = React.useState<Result | undefined>(undefined);
  const { setLoading } = React.useContext(LoadingSpinnerContext);
  const { session, login } = React.useContext(SessionContext);

  const submit = async (request: LoginCredentials) => {
    setLoading(true);
    const result = await api.auth.login(request);
    setRecentResult(result);
    if (result.wasSuccess) {
      login(result.body);
    }
    setLoading(false);
  }

  return (
    <main className='login-page-wrapper'>
      <h1>Login</h1>
      {session.status === SessionStatus.EXPIRED && <span className='login-expired-message'>Your session has expired. Please log in again.</span>}
      <ResultDisplay result={recentResult} />
      <LoginForm submit={submit} />
    </main>
  );
}