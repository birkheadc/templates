import * as React from 'react';
import { SessionProvider } from './session/SessionContext';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

type ProvidersProps = {
  children?: React.ReactNode,
  locale: string,
  messages: AbstractIntlMessages
}

export default function Providers(props: ProvidersProps): JSX.Element {

  const { children, locale, messages } = props;
  
  return (
    <SessionProvider>
      <NextIntlClientProvider locale={locale} messages={messages} >
        {children}
      </NextIntlClientProvider>
    </SessionProvider>
  );
}