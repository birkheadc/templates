'use client';

import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import DashboardBody from '../body/DashboardBody';
import DashboardHeader from '../header/DashboardHeader';

type DashboardPreferencesPageProps = {

}

export default function DashboardPreferencesPage(props: DashboardPreferencesPageProps): JSX.Element {
  const t = useRichTranslations('dashboard');

  return (
    <DashboardBody>
      <DashboardHeader>{t('nav.userPreferences')}</DashboardHeader>
    </DashboardBody>
  );
}