import * as React from 'react';
import LandingPageSection from '../../../components/landingPageSection/LandingPageSection';

interface HeroSectionProps {

}

export default function HeroSection(props: HeroSectionProps): JSX.Element {
  return (
    <LandingPageSection id='hero' className='bg-primary-700 text-primary-300 bg-gradient-to-br from-primary-700 to-primary-400'>
      <div className='px-10 mx-auto w-fit'>
        <h1 className='text-5xl font-bold lg:text-7xl'>check out this <span className='text-primary-100'>awesome</span> template</h1>
        <span className='text-primary-400'><span className='text-lg lg:text-2xl'>never wrestle with a config file again</span><span className='align-super'>*</span></span>
      </div>
      <span className='absolute bottom-0 right-0 p-2 px-4 text-sm text-primary-900'>*some restrictions may apply</span>
    </LandingPageSection>
  );
}