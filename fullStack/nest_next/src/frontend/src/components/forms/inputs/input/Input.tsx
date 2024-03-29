import * as React from 'react';
import { FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import FieldErrorDisplay from '../../form/errorDisplay/FieldErrorDisplay';
import BaseInput from './BaseInput';
import utils from '../../../../utils';

interface InputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string,
  label?: string,
  name: Path<T>,
  register?: UseFormRegister<T>,
  registerOptions: RegisterOptions,
  errors?: FieldErrors<T>,
}

export default function Input<T extends FieldValues>(props: InputProps<T>): JSX.Element {

  const { id, name, label, disabled, errors, readOnly, hidden, className } = props;

  return (
    <div className={utils.mergeClass('flex flex-col gap-1 w-full', hidden ? 'hidden' : '', className)}>
      { label &&
        <div className=''>
          <label className='font-bold text-primary-700' htmlFor={id}>{label}</label>
        </div>
      }
      <fieldset disabled={disabled} className={`flex text-primary-700 border-primary-500 hocus-within:outline hocus-within:outline-1 border-2 ${readOnly ? 'border-primary-300 bg-primary-200 outline-none' : 'border-2 bg-primary-50'}`}>
        <BaseInput {...props} />
      </fieldset>
      <FieldErrorDisplay errors={errors} field={name} />
    </div>
  );
}