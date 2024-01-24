import * as React from 'react';

interface NavBragSectionProps {

}

export default function NavBragSection(props: NavBragSectionProps): JSX.Element {
  return (
    <section id='nav-brag' className='flex flex-col items-center justify-center h-svh-nav bg-primary-700 text-primary-200'>
      <div className='flex flex-col px-10 mx-auto w-fit'>
        <h2 className='text-4xl font-bold'>did you notice the <span className='text-primary-50'>sweet</span> nav bar?</h2>
        <span className='text-2xl font-bold text-primary-300'>it follows you as you scroll</span>
        <span className='text-primary-400'>it knows where you are</span>
        <span className='text-sm text-primary-500'>it knows where you live</span>
        <span className='text-xs text-primary-600'>don't look behind you</span>
      </div>
    </section>
  );
}