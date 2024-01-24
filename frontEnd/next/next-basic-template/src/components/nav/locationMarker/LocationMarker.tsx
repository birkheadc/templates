'use client';

import * as React from 'react';

type LocationMarkerProps = {

}

export default function LocationMarker(props: LocationMarkerProps): JSX.Element {

  const [ offset, setOffset ] = React.useState<number>(0);
  const [ width, setWidth ] = React.useState<number>(0);

  React.useEffect(function addScrollListeners() {
    
    function calculateOffset() {
      const scrollyY = window.scrollY;
      const navHeight = document.querySelector('#primary-nav')?.clientHeight ?? 0;
      const maxY = document.documentElement.scrollHeight - navHeight;
      const offset = Math.min((scrollyY / maxY), 1);
      return offset;
    }
    
    setOffset(calculateOffset());
    const listener = () => {
      setOffset(calculateOffset());
    }
    
    window.addEventListener('scroll', listener);
    
    return (() => {
      window.removeEventListener('scroll', listener);
    })
  }, []);

  React.useEffect(function addResizeListeners() {
    
    function calculateWidth() {
      const navHeight = document.querySelector('#primary-nav')?.clientHeight ?? 0;
      const maxY = document.documentElement.scrollHeight - navHeight;
      const windowHeight = window.innerHeight - navHeight;
      return Math.min((windowHeight / maxY), 1);
    }

    setWidth(calculateWidth());
    const listener = () => {
      setWidth(calculateWidth());
    }
    
    window.addEventListener('resize', listener);
    
    return (() => {
      window.removeEventListener('resize', listener);
    })
  }, []);

  return (
    <div className='absolute w-full h-full pointer-events-none bg-primary-900'>
      <div className='absolute z-10 h-full p-1 mix-blend-lighten transition-width' style={{ left: `${offset * 100}%`, width: `${width * 100}%` }}>
        <div className='w-full h-full border-2 rounded-md bg-gradient-to-br from-secondary-500 to-secondary-700'>

        </div>
      </div>
    </div>
  );
}