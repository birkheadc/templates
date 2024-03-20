'use client';

import * as React from 'react';
import DashboardBody from '../body/DashboardBody';
import DashboardHeader from '../header/DashboardHeader';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import { UserContext } from '../../../../contexts/user/UserContext';

type DashboardProfileProps = {

}

export default function DashboardProfile(props: DashboardProfileProps): JSX.Element {

  const t = useRichTranslations('dashboard.profile');

  const { user } = React.useContext(UserContext);

  return (
    <DashboardBody>
      <DashboardHeader>{t('profile')}</DashboardHeader>
      <table>
        <tbody>
          <tr>
            <td className='p-4 font-light'>{t('emailAddress')}</td>
            <td className='p-4 font-bold'>{user?.emailAddress}</td>
          </tr>
          <tr>
            <td className='p-4 font-light'>{t('displayName')}</td>
            <td className='p-4 font-bold'>{user?.displayName}</td>
          </tr>
          <tr>
            <td className='p-4 font-light'>{t('language')}</td>
            <td className='p-4 font-bold'>{user?.preferences.language}</td>
          </tr>
        </tbody>
      </table>
    </DashboardBody>
  );
}