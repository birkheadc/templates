import * as React from 'react';
import PrimaryButton from '../primary/PrimaryButton';

type SubmitButtonProps = {
  disabled?: boolean
}

export default function SubmitButton(props: SubmitButtonProps): JSX.Element {

  const { disabled } = props;
  
  return (
    <PrimaryButton disabled={disabled} type='submit'>submit</PrimaryButton>
  );
}