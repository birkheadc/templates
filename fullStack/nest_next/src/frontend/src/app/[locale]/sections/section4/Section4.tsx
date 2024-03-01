import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import SectionHeader from '../headers/SectionHeader';
import Section from '../Section';
import SectionBody from '../body/SectionBody';

type Section4Props = {

}

export default function Section4(props: Section4Props): JSX.Element {

  const t = useRichTranslations('home.section4');

  return (
    <Section className='bg-gradient-to-br from-primary-300 to-primary-50'>
      <SectionHeader>{t('header')}</SectionHeader>
      <SectionBody>
        <p>{t('body')}</p>
      </SectionBody>
    </Section>
  );
}