import * as React from 'react';
import { RichTranslationValues, useTranslations } from "next-intl";

export default function useRichTranslations(namespace?: string | undefined) {
  const t = useTranslations(namespace);

  return (key: string, values?: RichTranslationValues | undefined) => t.rich(key, {...values,
    em: (inner) =>
    <span className='text-primary-0'>{inner}</span>
  });
}