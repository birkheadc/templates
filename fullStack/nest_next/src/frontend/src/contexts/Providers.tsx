import * as React from 'react';
import { SessionProvider } from './session/SessionContext';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { UserProvider } from './user/UserContext';

type ProvidersProps = {
  children?: React.ReactNode,
  locale: string,
  messages: AbstractIntlMessages
}

export default function Providers(props: ProvidersProps): JSX.Element {

  const { children, locale, messages } = props;
  
  return (
    <SessionProvider>
      <UserProvider>
        <NextIntlClientProvider locale={locale} messages={messages} >
          {children}
        </NextIntlClientProvider>
      </UserProvider>
    </SessionProvider>
  );
}