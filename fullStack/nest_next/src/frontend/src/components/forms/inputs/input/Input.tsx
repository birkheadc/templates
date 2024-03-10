import * as React from 'react';
import { FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import FieldErrorDisplay from '../../form/errorDisplay/FieldErrorDisplay';
import BaseInput from './BaseInput';

interface InputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  name: Path<T>,
  register?: UseFormRegister<T>,
  registerOptions: RegisterOptions,
  errors?: FieldErrors<T>,
}

export default function Input<T extends FieldValues>(props: InputProps<T>): JSX.Element {

  const { id, name, label, disabled, errors, readOnly, hidden } = props;

  return (
    <div className={`'flex flex-col w-full gap-0' ${hidden && 'hidden'}`}>
      { label &&
        <div className=''>
          <label className='font-bold text-primary-700' htmlFor={id}>{label}</label>
        </div>
      }
      <fieldset disabled={disabled} className={`flex text-primary-700 border-primary-500 focus-within:outline focus-within:outline-1 border-2 ${readOnly ? 'border-primary-300 bg-primary-200 outline-none' : 'border-2 bg-primary-50'}`}>
        <BaseInput {...props} />
      </fieldset>
      <FieldErrorDisplay errors={errors} field={name} />
    </div>
  );
}