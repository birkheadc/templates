import * as React from 'react';
import PrimaryButtonLink from '../../../../../components/links/primaryButtonLink/PrimaryButtonLink';
import BasicButtonLink from '../../../../../components/links/basicButtonLink/BasicButtonLink';
import useRichTranslations from '../../../../../hooks/useRichTranslations/useRichTranslations';

type Section1CallToActionProps = {

}

export default function Section1CallToAction(props: Section1CallToActionProps): JSX.Element {

  const t = useRichTranslations('general');

  return (
    <div className='flex items-stretch justify-center w-full gap-6 lg:gap-12'>
      <PrimaryButtonLink className='w-32 text-center' href='/registration'>{t('signUp')}</PrimaryButtonLink>
      <BasicButtonLink className='w-32 text-center' href='/login'>{t('signIn')}</BasicButtonLink>
    </div>
  );
}