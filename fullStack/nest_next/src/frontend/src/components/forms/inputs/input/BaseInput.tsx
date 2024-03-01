import * as React from 'react';
import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

interface BaseInputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>,
  registeroptions: RegisterOptions,
  name: Path<T>
}

export default function BaseInput<T extends FieldValues>(props: BaseInputProps<T>): JSX.Element {

  const { name, register, registeroptions, ...rest } = props;

  return (
    <input {...rest} className={'p-1 px-3 flex-grow outline-none bg-transparent-full shadow-none'}  {...register(name, registeroptions)}></input>
  );
}