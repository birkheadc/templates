'use client';

import * as React from 'react';
import DashboardSection from '../section/DashboardSection';
import DashboardSectionBody from '../section/body/DashboardSectionBody';
import DashboardSectionHeader from '../section/header/DashboardSectionHeader';
import ChangePasswordForm from './changePassword/ChangePasswordForm';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import DashboardBody from '../body/DashboardBody';
import DashboardHeader from '../header/DashboardHeader';

type DashboardSecurityPageProps = {

}

export default function DashboardSecurityPage(props: DashboardSecurityPageProps): JSX.Element {

  const t = useRichTranslations('dashboard');

  return (
    <DashboardBody>
      <DashboardHeader>{t('nav.security')}</DashboardHeader>
      <DashboardSection>
        <DashboardSectionHeader>{t('changePassword')}</DashboardSectionHeader>
        <DashboardSectionBody>
          <ChangePasswordForm />
        </DashboardSectionBody>
      </DashboardSection>
    </DashboardBody>
  );
}