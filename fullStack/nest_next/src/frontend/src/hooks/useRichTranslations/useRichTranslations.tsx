import * as React from 'react';
import { NestedKeyOf, RichTranslationValues, useTranslations } from "next-intl";
import { Messages, NestedProperty } from '../../intl/messages/interface';

export default function useRichTranslations<T extends NestedKeyOf<Messages>>(namespace?: T | undefined) {
  
  const t = useTranslations(namespace);

  return (key: NestedKeyOf<NestedProperty<Messages, T>>, values?: RichTranslationValues | undefined) => t.rich(key, {...values,
    em: (inner) =>
    <span className='text-primary-0'>{inner}</span>
  });
}