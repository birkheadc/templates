import * as React from 'react';
import { Link } from '../../../../navigation/navigation';
import BasicLink from '../../../../components/links/basicLink/BasicLink';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';

type LoginHelpProps = {

}

export default function LoginHelp(props: LoginHelpProps): JSX.Element {

  const t = useRichTranslations('login');

  return (
    <div className='flex items-center justify-center w-full gap-4'>
      <BasicLink className='w-40 text-right' href='/recover-password'>{t('recoverAccount')}</BasicLink>
      <span>|</span>
      <BasicLink className='w-40' href='/register'>{t('registerNew')}</BasicLink>
    </div>
  );
}