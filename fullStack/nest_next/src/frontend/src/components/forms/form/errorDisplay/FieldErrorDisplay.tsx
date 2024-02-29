import * as React from 'react';

interface FieldErrorDisplayProps {
  children?: React.ReactNode
}

export default function FieldErrorDisplay(props: FieldErrorDisplayProps): JSX.Element {

  const { children } = props;

  return (
    <span className='text-error-500'>
      {children}
    </span>
  );
}