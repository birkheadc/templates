import * as React from 'react';
import './StandardFormLabeledInput.css'

interface IStandardFormLabeledInputProps {
  label: string,
  name: string,
  value: string,
  type?: string,
  autofocus?: boolean,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/**
*
* @returns {JSX.Element | null}
*/
export default function StandardFormLabeledInput(props: IStandardFormLabeledInputProps): JSX.Element | null {
  return (
    <div className='standard-form-labeled-input-wrapper'>
      <label htmlFor={props.name}>{props.label}</label>
      <input autoFocus={props.autofocus} id={props.name} name={props.name} type={props.type || 'text'} value={props.value} onChange={props.handleChange}></input>
    </div>
  );
}