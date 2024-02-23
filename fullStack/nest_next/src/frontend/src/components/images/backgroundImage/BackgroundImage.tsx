import utils from '@/utils';
import * as React from 'react';

interface BackgroundImageProps {
  className?: string,
  src: string
}

export default function BackgroundImage(props: BackgroundImageProps): JSX.Element {

  const { className, src } = props;
  
  return (
    <div className={utils.mergeClass(className, 'fixed inset-0 flex justify-stretch items-stretch -z-10')}>
      <img className='mix-blend-multiply w-full h-full' src={src} />
    </div>
  );
}