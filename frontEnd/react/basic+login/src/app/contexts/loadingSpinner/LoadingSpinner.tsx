import * as React from 'react';
import './LoadingSpinner.css'

interface ILoadingSpinnerProps {

}

/**
*
* @returns {JSX.Element | null}
*/
export default function LoadingSpinner(props: ILoadingSpinnerProps): JSX.Element | null {
  return (
    <div className='loading-spinner-wrapper'></div>
  );
}