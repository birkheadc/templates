import * as React from 'react';
import utils from '../../../../utils';

type SectionHeaderProps = {
  className?: string,
  children?: React.ReactNode
}

export default function SectionHeader(props: SectionHeaderProps): JSX.Element {
  const { className, children } = props;

  return (
    <h2 className={utils.mergeClass(className, '')}>{children}</h2>
  );
}