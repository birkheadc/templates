import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

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
      <h1>Hello World</h1>
    </BrowserRouter>
  );
}