import * as React from 'react';
import utils from '../../../../utils';

type HeroHeaderProps = {
  className?: string,
  children?: React.ReactNode
}

export default function HeroHeader(props: HeroHeaderProps): JSX.Element {

  const { className, children } = props;

  return (
    <h1 className={utils.mergeClass(className, 'text-3xl lg:text-5xl font-bold max-w-2xl text-transparent-offTheme-low text-center text-balance')}>{children}</h1>
  );
}