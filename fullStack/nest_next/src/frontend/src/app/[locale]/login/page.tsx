import * as React from 'react';
import LoginForm from './form/LoginForm';

type pageProps = {

}

export default function page(props: pageProps): JSX.Element {
  return (
    <div>
      <h1 className='text-center text-3xl'>login</h1>
      <LoginForm />
    </div>
  );
}