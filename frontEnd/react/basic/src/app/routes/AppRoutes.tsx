import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import TestPage from '../../components/pages/test/TestPage';
import HomePage from '../../components/pages/home/HomePage';

interface IAppRoutesProps {

}
/**
 * 
 * @param {} props
 * @returns {JSX.Element | null}
 */
export default function AppRoutes(props: IAppRoutesProps): JSX.Element | null {
  return (
    <Routes>
      <Route path='/test' element={<TestPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<Navigate replace={true} to='/' />} />
    </Routes>
  );
}