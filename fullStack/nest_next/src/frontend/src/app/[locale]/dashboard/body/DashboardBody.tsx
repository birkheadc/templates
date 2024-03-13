import * as React from 'react';
import Section from '../../sections/Section';

type DashboardBodyProps = {
  children?: React.ReactNode
}

export default function DashboardBody(props: DashboardBodyProps): JSX.Element {

  const { children } = props;
  
  return (
    <Section className='pt-4 pl-12 lg:pl-4 max-w-3xl m-auto' innerClassName='justify-start items-start'>
      { children }
    </Section>
  );
}