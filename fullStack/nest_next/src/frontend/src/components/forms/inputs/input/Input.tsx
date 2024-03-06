import * as React from 'react';
import { FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import FieldErrorDisplay from '../../form/errorDisplay/FieldErrorDisplay';
import BaseInput from './BaseInput';

interface InputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  name: Path<T>,
  register: UseFormRegister<T>,
  registeroptions: RegisterOptions,
  errors?: FieldErrors<T>,
}

export default function Input<T extends FieldValues>(props: InputProps<T>): JSX.Element {

  const { id, name, label, disabled, errors, readOnly } = props;

  return (
    <div className='flex flex-col w-full gap-1'>
      { label &&
        <div className=''>
          <label className='font-bold text-primary-700' htmlFor={id}>{label}</label>
        </div>
      }
      <fieldset disabled={disabled} className={`flex gap-2 text-primary-700 border-primary-500 focus-within:outline focus-within:outline-1 ${readOnly ? 'border-0 bg-transparent-full outline-none' : 'border-2 bg-primary-50'}`}>
        <BaseInput {...props} />
      </fieldset>
      <FieldErrorDisplay error={errors && errors[name]?.message as string} />
    </div>
  );
}