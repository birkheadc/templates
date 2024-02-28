'use client';

import * as React from 'react';
import BasicLink from '../../../links/basicLink/BasicLink';
import { Eye, EyeOff } from 'lucide-react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';

type PasswordInputProps = {
  autocomplete?: string,
  className?: string,
  label?: string,
  name?: string,
  value: string,
  change: (value: string) => void,
  id: string,
  disabled?: boolean
}

export default function PasswordInput(props: PasswordInputProps): JSX.Element {

  const t = useRichTranslations('general');

  const { autocomplete, value, change, id, disabled, name, label } = props;
  const [ show, setShow ] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    change(event.currentTarget.value);
  }
  
  return (
    <div className='flex flex-col w-full gap-1'>
      <label className='font-bold text-primary-700' htmlFor={id}>{label ?? t('password')}</label>
      <fieldset disabled={disabled} className='flex gap-2 p-1 px-3 border border-primary-500 focus-within:outline focus-within:outline-1 bg-primary-50 text-primary-700 disabled:bg-primary-700 disabled:text-primary-50'>
        <input autoComplete={autocomplete ?? 'current-password'} id={id} className='flex-grow outline-none bg-transparent-full' type={show ? 'text': 'password' } name={name} value={value} onChange={handleChange}></input>
        <button tabIndex={-1} className='bg-transparent hocus:text-primary-950' type='button' onClick={() => setShow(s => !s)}>{ show ? <EyeOff /> : <Eye /> }</button>
      </fieldset>
    </div>
  );
}