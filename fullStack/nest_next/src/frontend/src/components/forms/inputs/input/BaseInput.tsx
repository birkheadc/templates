import * as React from 'react';
import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { FormValidationErrorMessage } from '../../../../types/formValidation/formValidationErrorMessage';

interface BaseInputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>,
  registerOptions?: RegisterOptions,
  name: Path<T>,
  validate?: boolean
}

export default function BaseInput<T extends FieldValues>(props: BaseInputProps<T>): JSX.Element {

  const { name, register, registerOptions, required, validate, ...rest } = props;

  return (
    <input {...rest} className={'p-1 px-3 flex-grow outline-none bg-transparent-full shadow-none'}  {...register(name, {...registerOptions, required: { value: !!required, message: FormValidationErrorMessage.REQUIRED }})}></input>
  );
}