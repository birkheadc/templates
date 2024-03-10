import * as React from 'react';
import Section from '../../sections/Section';

type DashboardBodyProps = {
  children?: React.ReactNode
}

export default function DashboardBody(props: DashboardBodyProps): JSX.Element {

  const { children } = props;
  
  return (
    <Section className='w-full'>
      { children }
    </Section>
  );
}