import * as React from 'react';

type FooterProps = {

}

export default function Footer(props: FooterProps): JSX.Element {
  return (
    <footer className='flex flex-col items-center justify-center px-4 h-lvh-svh bg-primary-950 text-primary-50'>
      <span>this footer's style has one line of magic</span>
      <span><code>height: calc(100lvh - 100svh)</code></span>
    </footer>
  );
}