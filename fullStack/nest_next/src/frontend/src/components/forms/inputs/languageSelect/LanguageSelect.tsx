import * as React from 'react';
import { locales } from '../../../../navigation/navigation';
import { Path, UseFormRegister } from 'react-hook-form';
import Select from '../select/Select';

interface LanguageSelectProps<T extends { language: any }> extends React.SelectHTMLAttributes<HTMLSelectElement> {
  register?: UseFormRegister<T>,
  name: Path<T>
}

export default function LanguageSelect<T extends { language: any }>(props: LanguageSelectProps<T>): JSX.Element {
  
  return (
    <Select label='language' {...props} options={locales} />
  );
}