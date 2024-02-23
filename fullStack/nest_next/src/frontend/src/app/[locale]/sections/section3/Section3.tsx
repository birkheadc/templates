import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import SectionHeader from '../headers/SectionHeader';
import Section from '../Section';
import SectionBody from '../body/SectionBody';

type Section3Props = {

}

export default function Section3(props: Section3Props): JSX.Element {

  const t = useRichTranslations('Home.Section3');

  return (
    <Section className='bg-fixed bg-gradient-to-br from-primary-300 to-primary-50'>
      <SectionHeader>{t('header')}</SectionHeader>
      <SectionBody>
        <p>{t('body')}</p>
      </SectionBody>
    </Section>
  );
}