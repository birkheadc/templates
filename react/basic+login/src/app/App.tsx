import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProviders from './contexts/providers/AppProviders';
import PrimaryNav from '../components/nav/primaryNav/PrimaryNav';
import AppRoutes from './routes/AppRoutes';

interface IAppProps {

}
/**
 * 
 * @param {} props
 * @returns {JSX.Element | null}
 */
export default function App(props: IAppProps): JSX.Element | null {
  return (
    <BrowserRouter>
      <AppProviders>
        <PrimaryNav />
        <AppRoutes />
      </AppProviders>
    </BrowserRouter>
  );
}