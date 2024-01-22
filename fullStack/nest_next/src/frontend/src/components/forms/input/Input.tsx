import * as React from 'react';

type InputProps = {
  placeholder?: string,
  type?: React.HTMLInputTypeAttribute,
  value: string,
  change: (value: string) => void
}

export default function Input(props: InputProps): JSX.Element {
  return (
    <input type={props.type} placeholder={props.placeholder}></input>
  );
}