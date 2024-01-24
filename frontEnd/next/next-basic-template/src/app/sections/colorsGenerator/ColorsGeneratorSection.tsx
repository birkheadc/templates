import * as React from 'react';
import ColorCard from './colorCard/ColorCard';
import LandingPageSection from '../../../components/landingPageSection/LandingPageSection';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import ColorCode from './colorCode/ColorCode';

interface ColorsGeneratorSectionProps {

}

export default function ColorsGeneratorSection(props: ColorsGeneratorSectionProps): JSX.Element {
  return (
    <LandingPageSection id='colors-generator' className='justify-around bg-primary-300 text-primary-800'>
      <div className='flex flex-col gap-3 px-10 mx-auto w-fit'>
        <h2 className='text-5xl font-bold'>generate <span className='text-secondary-400'>cool</span> <span className='text-secondary-800'>c</span><span className='text-secondary-700'>o</span><span className='text-secondary-600'>l</span><span className='text-secondary-500'>o</span><span className='text-secondary-400'>r</span> palettes</h2>
        <span className='flex flex-row items-center gap-2 text-3xl'>with <a className='flex flex-row gap-2 text-secondary-700 hover:text-secondary-600 focus:text-secondary-600' href='https://uicolors.app/create' target='_blank' rel='noopener noreferrer'>uicolors.app<ArrowTopRightOnSquareIcon width={'1em'}/></a></span>
      </div>
      <div className='flex flex-row items-center justify-center g-2'>
        <div className='flex flex-col gap-2 px-10 m-auto lg:flex-row'>
          <ColorCard color='secondary' number={'800'} />
          <ColorCard color='secondary' number={'700'} />
          <ColorCard color='secondary' number={'600'} />
          <ColorCard color='secondary' number={'500'} />
          <ColorCard color='secondary' number={'400'} />
        </div>
        <ColorCode color='secondary' />
      </div>
      <div>
        <span className='text-lg text-primary-600'>just copy and paste that bad boy into tailwind</span>
      </div>
    </LandingPageSection>
  );
}