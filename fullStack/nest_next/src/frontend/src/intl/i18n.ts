import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import messages from './messages/messages';
import locales from './locales.json';
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: messages[locale]
  }
 
  // return {
  //   messages: (await import(`./messages/${locale}.json`)).default
  // };
});