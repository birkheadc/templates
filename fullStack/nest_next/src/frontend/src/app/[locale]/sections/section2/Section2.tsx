import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import SectionHeader from '../headers/SectionHeader';
import Section from '../Section';

type Section2Props = {

}

export default function Section2(props: Section2Props): JSX.Element {

  const t = useRichTranslations('Home.Section2');

  return (
    <Section>
      <SectionHeader>{t('header')}</SectionHeader>
      <p>{t('body')}</p>
    </Section>
  );
}