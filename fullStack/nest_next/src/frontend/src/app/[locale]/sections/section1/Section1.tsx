import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import HeroHeader from '../headers/HeroHeader';
import Section from '../Section';
import SectionBody from '../body/SectionBody';
import styles from './Section1.module.css';
import utils from '../../../../utils';
import Section1CallToAction from './callToAction/Section1CallToAction';

type Section1Props = {

}

export default function Section1(props: Section1Props): JSX.Element {

  const t = useRichTranslations('home.section1');

  return (
    <Section className={utils.mergeClass('items-center bg-fixed lg:justify-center bg-hero bg-clip-text ff:bg-scroll', styles.section)}>
      <HeroHeader>{t('header')}</HeroHeader>
      <SectionBody className='max-w-2xl gap-12'>
        <p className='text-transparent-offTheme-low text-pretty'>{t('body')}</p>
        <Section1CallToAction />
      </SectionBody>
    </Section>
  );
}