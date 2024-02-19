'use client';
import { usePathname, useRouter } from '../../navigation/navigation';
import * as React from 'react';

export default function useLanguage(): { language: string, changeLanguage: (language: string) => void } {

  const [ language, setLanguage ] = React.useState<string>('');
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(function determineLanguageOnMount() {
    if (typeof window === "undefined") return;
    const html = document.documentElement;
    setLanguage(html.getAttribute('lang') ?? 'en');
  }, []);

  const changeLanguage = (language: string) => {
    router.replace(pathname, { locale: language });
  }

  return { language, changeLanguage }
}