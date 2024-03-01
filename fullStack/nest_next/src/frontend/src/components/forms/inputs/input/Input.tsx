import * as React from 'react';
import { FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import FieldErrorDisplay from '../../form/errorDisplay/FieldErrorDisplay';

type InputProps<T extends FieldValues> = {
  id?: string,
  placeholder?: string,
  type?: React.HTMLInputTypeAttribute,
  label?: string,
  disabled?: boolean,
  autocomplete?: string,
  name: Path<T>,
  register: UseFormRegister<T>,
  registerOptions: RegisterOptions,
  errors?: FieldErrors<T>,
  defaultValue?: string,
  readonly?: boolean
}

export default function Input<T extends FieldValues>(props: InputProps<T>): JSX.Element {

  const { id, placeholder, type, name, label, autocomplete, disabled, register, registerOptions, errors, defaultValue, readonly } = props;

  return (
    <div className='flex flex-col w-full gap-1'>
      { label &&
        <div className=''>
          <label className='font-bold text-primary-700' htmlFor={id}>{label}</label>
        </div>
      }
      <fieldset disabled={disabled} className={`flex gap-2 text-primary-700 border-primary-500 focus-within:outline focus-within:outline-1 ${readonly ? 'border-0 bg-transparent-full outline-none' : 'border-2 bg-primary-50'}`}>
        <input readOnly={readonly} autoComplete={autocomplete} defaultValue={defaultValue} disabled={disabled} id={id} className={'p-1 px-3 flex-grow outline-none bg-transparent-full shadow-none'} type={type} placeholder={placeholder} {...register(name, registerOptions)}></input>
      </fieldset>
      { errors && <FieldErrorDisplay>{errors[name]?.message as string}</FieldErrorDisplay> }
    </div>
  );
}