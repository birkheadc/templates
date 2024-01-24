import * as React from 'react';
import utils from '../../utils';

type LandingPageSectionProps = {
  children: React.ReactNode,
  id: string,
  className?: string
}

export default function LandingPageSection(props: LandingPageSectionProps): JSX.Element {
  return (
    <section id={props.id} className={utils.cn('relative flex flex-col items-center justify-center overflow-hidden h-svh-nav', props.className)}>
      {props.children}
    </section>
  );
}