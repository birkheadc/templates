import * as React from 'react';
import RegistrationForm from './form/RegistrationForm';

type pageProps = {

}

export default function page(props: pageProps): JSX.Element {
  return (
    <div>
      <h1>register</h1>
      <RegistrationForm />
    </div>
  );
}