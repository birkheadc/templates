import * as React from 'react';
import utils from '../../../../utils';

type HeroHeaderProps = {
  className?: string,
  children?: React.ReactNode
}

export default function HeroHeader(props: HeroHeaderProps): JSX.Element {

  const { className, children } = props;

  return (
    <h1 className={utils.mergeClass(className, '')}>{children}</h1>
  );
}