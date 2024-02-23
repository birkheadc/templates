import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import SectionHeader from '../headers/SectionHeader';
import Section from '../Section';
import SectionBody from '../body/SectionBody';

type Section2Props = {

}

export default function Section2(props: Section2Props): JSX.Element {

  const t = useRichTranslations('Home.Section2');

  return (
    <Section className='bg-gradient-to-br from-primary-400 to-primary-200'>
      <SectionHeader>{t('header')}</SectionHeader>
      <SectionBody>
        <p>{t('body')}</p>
      </SectionBody>
    </Section>
  );
}