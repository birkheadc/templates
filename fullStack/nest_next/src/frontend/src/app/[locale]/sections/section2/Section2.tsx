import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import SectionHeader from '../headers/SectionHeader';
import Section from '../Section';
import SectionBody from '../body/SectionBody';
import Image from 'next/image';

type Section2Props = {

}

export default function Section2(props: Section2Props): JSX.Element {

  const t = useRichTranslations('home.section2');

  return (
    <Section className='bg-gradient-to-br from-primary-300 to-primary-50'>
      <SectionHeader>{t('header')}</SectionHeader>
      <SectionBody className='gap-20 lg:flex-row lg:items-start short:flex-row short:items-start'>
        <p>{t('body')}</p>
        <Image className='max-w-full max-h-full' src={'https://picsum.photos/400/300'} alt={'random image'} height={300} width={400} />
      </SectionBody>
    </Section>
  );
}