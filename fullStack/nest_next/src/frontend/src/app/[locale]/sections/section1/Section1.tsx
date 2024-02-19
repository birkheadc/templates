import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import HeroHeader from '../headers/HeroHeader';
import Section from '../Section';

type Section1Props = {

}

export default function Section1(props: Section1Props): JSX.Element {

  const t = useRichTranslations('Home.Section1');

  return (
    <Section className='bg-gradient-to-br from-neutral-50 to-primary-200'>
      <HeroHeader>{t('header')}</HeroHeader>
      <p>{t('body')}</p>
    </Section>
  );
}