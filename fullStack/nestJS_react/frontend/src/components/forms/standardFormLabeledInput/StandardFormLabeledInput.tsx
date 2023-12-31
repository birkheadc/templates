import * as React from 'react';
import './StandardFormLabeledInput.css'
import { Result } from '../../../types/result/result';

interface IStandardFormLabeledInputProps {
  label: string,
  name: string,
  value: string,
  type?: string,
  autofocus?: boolean,
  validation?: Result | undefined,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/**
*
* @returns {JSX.Element | null}
*/
export default function StandardFormLabeledInput(props: IStandardFormLabeledInputProps): JSX.Element | null {
  return (
    <div className='standard-form-labeled-input-outer-wrapper'>
      <div className='standard-form-labeled-input-wrapper'>
        <label htmlFor={props.name}>{props.label}</label>
        <input autoFocus={props.autofocus} id={props.name} name={props.name} type={props.type || 'text'} value={props.value} onChange={props.handleChange}></input>
      </div>
      <span className='standard-form-labeleed-input-error-message'>{ props.value.length > 0 ? props.validation?.errors.find(e => e.field === props.name)?.message : ''}</span>
    </div>
  );
}