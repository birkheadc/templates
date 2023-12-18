import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../../components/pages/home/HomePage';
import { SessionContext } from '../contexts/session/SessionContext';
import { SessionStatus } from '../../types/session/session';
import LogoutPage from '../../components/pages/logout/LogoutPage';
import LoginPage from '../../components/pages/login/LoginPage';

interface IAppRoutesProps {

}
/**
 * 
 * @param {} props
 * @returns {JSX.Element | null}
 */
export default function AppRoutes(props: IAppRoutesProps): JSX.Element | null {

  const { session } = React.useContext(SessionContext);

  return (
    <Routes>
      { session.status === SessionStatus.LOGGED_IN
      ? LoggedInRoutes
      : LoggedOutRoutes
      }
      { CommonRoutes }
    </Routes>
  );
}

const LoggedInRoutes = (
  <>
    <Route path='/logout' element={<LogoutPage />} />
  </>
);

const LoggedOutRoutes = (
  <>
    <Route path='/login' element={<LoginPage />} />
  </>
);

const CommonRoutes = (
  <>
    <Route path='/' element={<HomePage />} />
    <Route path='*' element={<Navigate replace={true} to='/' />} />
  </>
);