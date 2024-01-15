import * as React from 'react';
import './HomePage.css';
import PersonForm from './person/PersonForm';

interface IHomePageProps {

}
/**
 * 
 * @param {} props
 * @returns {JSX.Element | null}
 */
function HomePage(props: IHomePageProps): JSX.Element | null {

  const test = () => {
    console.log('Test...');
  }

  return (
    <main className='home-page-wrapper'>
      <h1>home</h1>
      <a style={{ display: 'block', margin: '0 auto', width: 'fit-content' }} href='https://github.com/birkheadc/templates'>Check out this - and other - template's source code here!</a>
      <button className='standard-button' type='button' onClick={test}>test</button>
      <PersonForm />
    </main>
  );
}

export default HomePage;