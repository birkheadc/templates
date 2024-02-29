import * as React from 'react';

type InputProps = {
  id?: string,
  placeholder?: string,
  type?: React.HTMLInputTypeAttribute,
  label?: string,
  disabled?: boolean,
  value: string,
  change: (value: string) => void,
  autocomplete?: string
}

export default function Input(props: InputProps): JSX.Element {

  const { id, placeholder, type, label, value, change, autocomplete, disabled } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    change(event.currentTarget.value);
    console.log(event.currentTarget);
  }

  return (
    <div className='flex flex-col w-full gap-1'>
      { label &&
        <div className=''>
          <label className='font-bold text-primary-700' htmlFor={id}>{label}</label>
        </div>
      }
      <fieldset disabled={disabled} className='flex gap-2 border text-primary-700 bg-primary-50 border-primary-500 focus-within:outline focus-within:outline-1 disabled:border-0 disabled:bg-transparent-full'>
        <input autoComplete={autocomplete} disabled={disabled} id={id} className={'p-1 px-3 flex-grow outline-none bg-transparent-full shadow-none'} type={type} placeholder={placeholder} value={value} onChange={handleChange}></input>
      </fieldset>
    </div>
  );
}