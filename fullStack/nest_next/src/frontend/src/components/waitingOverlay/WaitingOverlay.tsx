import * as React from 'react';
import utils from '../../utils';

type WaitingOverlayProps = {
  className?: string,
  isWaiting: boolean,
  children?: React.ReactNode
}

export default function WaitingOverlay(props: WaitingOverlayProps): JSX.Element {

  const { isWaiting, children, className } = props;

  return (
    <div className={utils.mergeClass('relative w-full', className)}>
      <div className={`${!isWaiting ? 'pointer-events-none hidden' : ''} z-10 absolute inset-0 flex justify-center items-center'`}>
        <div className='rounded-full w-1/2 pt-[50%] border-t-2 animate-spin m-auto'></div>
      </div>
      <div className={`${isWaiting ? 'opacity-30 pointer-events-none' : ''} z-0`}>
        { children }
      </div>
    </div>
  );
}