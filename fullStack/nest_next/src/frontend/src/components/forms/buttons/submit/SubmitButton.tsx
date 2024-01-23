import * as React from 'react';

type SubmitButtonProps = {

}

export default function SubmitButton(props: SubmitButtonProps): JSX.Element {
  return (
    <button className='border p-1 px-3 bg-primary-500 text-primary-100 font-bold'>submit</button>
  );
}