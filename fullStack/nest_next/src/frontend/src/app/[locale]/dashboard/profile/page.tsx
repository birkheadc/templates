'use client';

import * as React from 'react';
import DashboardBody from '../body/DashboardBody';
import DashboardHeader from '../header/DashboardHeader';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';

type DashboardProfileProps = {

}

export default function DashboardProfile(props: DashboardProfileProps): JSX.Element {

  const t = useRichTranslations('dashboard');

  return (
    <DashboardBody>
      <DashboardHeader>{t('nav.profile')}</DashboardHeader>
    </DashboardBody>
  );
}