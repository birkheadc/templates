import * as React from 'react';
import './TestPage.css';
import { LoadingSpinnerContext } from '../../../app/contexts/loadingSpinner/LoadingSpinnerContext';

interface ITestPageProps {

}
/**
 * 
 * @param {} props
 * @returns {JSX.Element | null}
 */
function TestPage(props: ITestPageProps): JSX.Element | null {

  const { setLoading } = React.useContext(LoadingSpinnerContext);

  const load = () => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    setLoading(true);
  }

  return (
    <main>
      <h1>Test</h1>
      <button onClick={load}>Test Loading Modal</button>
    </main>
  );
}

export default TestPage;