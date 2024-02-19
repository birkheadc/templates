import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import SectionHeader from '../headers/SectionHeader';
import Section from '../Section';

type Section3Props = {

}

export default function Section3(props: Section3Props): JSX.Element {

  const t = useRichTranslations('Home.Section3');

  return (
    <Section>
      <SectionHeader>{t('header')}</SectionHeader>
      <p>{t('body')}</p>
    </Section>
  );
}