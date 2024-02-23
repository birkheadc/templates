import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import HeroHeader from '../headers/HeroHeader';
import Section from '../Section';
import SectionBody from '../body/SectionBody';
import styles from './Section1.module.css';
import utils from '../../../../utils';

type Section1Props = {

}

export default function Section1(props: Section1Props): JSX.Element {

  const t = useRichTranslations('Home.Section1');

  return (
    <Section className={utils.mergeClass('items-center pt-20 bg-fixed lg:justify-center bg-hero bg-clip-text ff:bg-scroll', styles.section)}>
      <HeroHeader>{t('header')}</HeroHeader>
      <SectionBody className='max-w-2xl'>
        <p className='text-transparent-offTheme-low text-pretty'>{t('body')}</p>
      </SectionBody>
    </Section>
  );
}