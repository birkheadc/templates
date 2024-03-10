'use client';

import * as React from 'react';

export default function useScroll() {

  const [ scroll, setScroll ] = React.useState<number>(0);

  React.useEffect(function addScrollListenerOnMount() {
    const listener = () => {
      setScroll(window.scrollY)
    }
    window.addEventListener('scroll', listener);
    return (() => {
      window.removeEventListener('scroll', listener);
    })
  }, []);

  return scroll;
}