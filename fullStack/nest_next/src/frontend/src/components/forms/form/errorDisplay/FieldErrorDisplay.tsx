import * as React from 'react';

interface FieldErrorDisplayProps {
  error?: string
}

export default function FieldErrorDisplay(props: FieldErrorDisplayProps): JSX.Element {

  const { error } = props;

  return (
    <span className='text-error-500 h-4'>
      {error}
    </span>
  );
}