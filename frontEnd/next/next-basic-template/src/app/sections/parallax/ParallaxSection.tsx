import * as React from 'react';
import LandingPageSection from '../../../components/landingPageSection/LandingPageSection';
import styles from './ParallaxSection.module.css';

type ParallaxSectionProps = {

}

export default function ParallaxSection(props: ParallaxSectionProps): JSX.Element {
  return (
    <LandingPageSection id={'parallax'} className={styles.background}>
      <div className='flex flex-col justify-center p-20 bg-white mix-blend-screen'>
        <h1 className='font-extrabold text-7xl md:text-17xl'>parallax</h1>
        <span className='py-6 text-3xl font-bold'>wow.mp3</span>
      </div>
    </LandingPageSection>
  );
}