import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import SectionHeader from '../headers/SectionHeader';
import Section from '../Section';

type Section4Props = {

}

export default function Section4(props: Section4Props): JSX.Element {

  const t = useRichTranslations('Home.Section4');

  return (
    <Section>
      <SectionHeader>{t('header')}</SectionHeader>
      <p>{t('body')}</p>
    </Section>
  );
}