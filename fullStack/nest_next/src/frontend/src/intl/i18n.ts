import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import messages from './messages/messages';
import locales from './locales.json';
 
export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as string)) {
    notFound();
  };

  return {
    messages: messages[locale]
  }
});