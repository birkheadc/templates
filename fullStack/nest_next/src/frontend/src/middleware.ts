import {NextRequest} from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import locales from './intl/locales.json';
 
const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: 'en'
});
 
export default function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;
 
  const shouldHandle =
    pathname === '/' ||
    new RegExp(`^/(${locales.join('|')})(/.*)?$`).test(
      request.nextUrl.pathname
    );
  if (!shouldHandle) {
    return;
  }
  return intlMiddleware(request);
}