'use client';

import * as React from 'react';
import BasicLink from '../../../links/basicLink/BasicLink';
import { Eye, EyeOff } from 'lucide-react';

type PasswordInputProps = {
  value: string,
  change: (value: string) => void,
  forgotPasswordHref?: string,
  id: string
}

export default function PasswordInput(props: PasswordInputProps): JSX.Element {

  const [ show, setShow ] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.change(event.currentTarget.value);
  }
  
  return (
    <div className='flex flex-col w-full gap-1'>
      <label className='font-bold text-primary-700' htmlFor={props.id}>password</label>
      <div className='flex gap-2 p-1 px-3 border bg-primary-50 border-primary-500 focus-within:outline focus-within:outline-1'>
        <input id={props.id} className='flex-grow outline-none bg-primary-50 text-primary-700' type={show ? 'text': 'password' } value={props.value} onChange={handleChange}></input>
        <button className='bg-transparent' type='button' onClick={() => setShow(s => !s)}>{ show ? <EyeOff /> : <Eye /> }</button>
      </div>
      <div className='flex justify-end'>
        { props.forgotPasswordHref && <BasicLink className='text-sm font-light' href={props.forgotPasswordHref} >forgot password?</BasicLink> }
      </div>
    </div>
  );
}