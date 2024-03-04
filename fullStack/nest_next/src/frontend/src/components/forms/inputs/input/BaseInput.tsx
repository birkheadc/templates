import * as React from 'react';
import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { FormValidationErrorMessage } from '../../../../types/formValidation/formValidationErrorMessage';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';

interface BaseInputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>,
  registeroptions?: RegisterOptions,
  name: Path<T>
}

export default function BaseInput<T extends FieldValues>(props: BaseInputProps<T>): JSX.Element {

  const tErrors = useRichTranslations('formValidationErrorMessages');
  const { name, register, registeroptions, required, ...rest } = props;

  return (
    <input {...rest} className={'p-1 px-3 flex-grow outline-none bg-transparent-full shadow-none'}  {...register(name, {...registeroptions, required: { value: !!required, message: tErrors(FormValidationErrorMessage.REQUIRED) as string }})}></input>
  );
}