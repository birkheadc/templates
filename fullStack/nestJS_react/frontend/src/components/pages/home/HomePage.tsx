import * as React from 'react';
import './HomePage.css';

interface IHomePageProps {

}
/**
 * 
 * @param {} props
 * @returns {JSX.Element | null}
 */
function HomePage(props: IHomePageProps): JSX.Element | null {

  return (
    <main className='home-page-wrapper'>
      <h1>Home</h1>
    </main>
  );
}

export default HomePage;