import * as React from 'react';
import LoginForm from './form/LoginForm';
import Section from '../sections/Section';

type pageProps = {

}

export default function page(props: pageProps): JSX.Element {
  return (
    <Section>
      <h1 className='text-center text-3xl'>login</h1>
      <LoginForm />
    </Section>
  );
}