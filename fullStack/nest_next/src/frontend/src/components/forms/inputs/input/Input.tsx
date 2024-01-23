import * as React from 'react';

type InputProps = {
  placeholder?: string,
  type?: React.HTMLInputTypeAttribute,
  label?: string,
  value: string,
  change: (value: string) => void
}

export default function Input(props: InputProps): JSX.Element {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.change(event.currentTarget.value);
  }

  return (
    <div className='flex flex-col w-full gap-1'>
      { props.label &&
        <div className=''>
          <label className='font-bold text-primary-700'>{props.label}</label>
        </div>
      }
      <div className='flex gap-2 p-1 px-3 border bg-primary-50 border-primary-500 focus-within:outline focus-within:outline-1'>
        <input className='flex-grow outline-none bg-primary-50 text-primary-700' type={props.type} placeholder={props.placeholder} value={props.value} onChange={handleChange}></input>
      </div>
    </div>
  );
}