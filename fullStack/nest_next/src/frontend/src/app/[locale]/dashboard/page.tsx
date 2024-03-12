'use client';

import * as React from 'react';
import Section from '../sections/Section';
import RedirectWrapper from '../../../components/redirectWrapper/RedirectWrapper';
import { SessionStatus } from '../../../types/session/session';
import { UserContext } from '../../../contexts/user/UserContext';
import useRichTranslations from '../../../hooks/useRichTranslations/useRichTranslations';

type DashboardPageProps = {

}

export default function DashboardPage(props: DashboardPageProps): JSX.Element {

  const { user } = React.useContext(UserContext);

  const t = useRichTranslations('dashboard');
  
  return (
    <Section className='pl-8'>
      <span className='hidden'>{`User: ${JSON.stringify(user)}`}</span>
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
    </Section>
  );
}