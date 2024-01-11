import * as React from 'react';
import './LoadingPage.css'

interface ILoadingPageProps {

}

/**
*
* @returns {JSX.Element | null}
*/
export default function LoadingPage(props: ILoadingPageProps): JSX.Element | null {
  return (
    <main className='loading-page-wrapper'>
      <h1>verifying session</h1>
    </main>
  );
}