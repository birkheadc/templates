'use client';

import * as React from 'react';
import Section from '../sections/Section';
import RedirectWrapper from '../../../components/redirectWrapper/RedirectWrapper';
import { SessionStatus } from '../../../types/session/session';
import { UserContext } from '../../../contexts/user/UserContext';
import useRichTranslations from '../../../hooks/useRichTranslations/useRichTranslations';
import DashboardBody from './body/DashboardBody';
import DashboardHeader from './header/DashboardHeader';
import DashboardSection from './section/DashboardSection';

type DashboardPageProps = {

}

export default function DashboardPage(props: DashboardPageProps): JSX.Element {

  const { user } = React.useContext(UserContext);

  const t = useRichTranslations('dashboard');
  
  return (
    <DashboardBody>
      <span className='hidden'>{`User: ${JSON.stringify(user)}`}</span>
      <DashboardHeader>{t('nav.dashboard')}</DashboardHeader>
      <DashboardSection>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos eveniet molestias expedita porro sequi atque natus? Aliquid odio dolores earum, cumque eius, voluptatibus adipisci delectus possimus consectetur dolorem iusto.</p>
      </DashboardSection>
    </DashboardBody>
  );
}