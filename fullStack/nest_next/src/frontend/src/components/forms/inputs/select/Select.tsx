import * as React from 'react';
import { FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import utils from '../../../../utils';
import FieldErrorDisplay from '../../form/errorDisplay/FieldErrorDisplay';

interface SelectProps<T extends FieldValues> extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string,
  label?: string,
  name: Path<T>,
  register?: UseFormRegister<T>,
  registerOptions?: RegisterOptions,
  errors?: FieldErrors<T>,
  options: string[]
}

export default function Select<T extends FieldValues>(props: SelectProps<T>): JSX.Element {

  const { className, label, name, id, hidden, disabled, errors, options, register } = props;

  return (
    <div className={utils.mergeClass('flex flex-col gap-1 w-full', hidden ? 'hidden' : '', className)}>
      { label &&
        <div className=''>
          <label className='font-bold text-primary-700' htmlFor={id}>{label}</label>
        </div>
      }
      <fieldset disabled={disabled} className={`flex text-primary-700 border-primary-500 hocus-within:outline hocus-within:outline-1 border-2`}>
        <select {...register ? register(name) : {}} className={'p-1 px-3 flex-grow bg-transparent-full shadow-none w-full hocus:outline hocus:outline-1'} >
          { options.map(
            option =>
            <option className='bg-neutral-950 text-primary-500' key={`select-option-key-${option}`} value={option}>{option}</option>
          ) }
        </select>
      </fieldset>
      <FieldErrorDisplay errors={errors} field={name} />
    </div>
  );
}