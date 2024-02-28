import * as React from 'react';

type InputProps = {
  className?: string,
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

  const { className, id, placeholder, type, label, value, change, autocomplete, disabled } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    change(event.currentTarget.value);
  }

  return (
    <div className='flex flex-col w-full gap-1'>
      { label &&
        <div className=''>
          <label className='font-bold text-primary-700' htmlFor={id}>{label}</label>
        </div>
      }
      <fieldset disabled={disabled} className='flex gap-2 p-1 px-3 border text-primary-700 bg-primary-50 border-primary-500 focus-within:outline focus-within:outline-1 disabled:bg-primary-700 disabled:text-primary-50'>
        <input autoComplete={autocomplete} disabled={disabled} id={id} className={'flex-grow outline-none bg-transparent-full '} type={type} placeholder={placeholder} value={value} onChange={handleChange}></input>
      </fieldset>
    </div>
  );
}