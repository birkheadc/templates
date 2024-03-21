'use client';

import * as React from 'react';
import BasicLink from '../basicLink/BasicLink';
import utils from '../../../utils';
import { usePathname } from '../../../navigation/navigation';
import WaitingOverlay from '../../waitingOverlay/WaitingOverlay';

type PrimaryButtonLinkProps = {
  href: string,
  className?: string,
  children?: React.ReactNode 
}

export default function PrimaryButtonLink(props: PrimaryButtonLinkProps): JSX.Element {
  const { href, className, children } = props;

  const pathname = usePathname();
  const [ isWorking, setWorking ] = React.useState<boolean>(false);

  React.useEffect(function clearWorkingOnNavigate() {
    setWorking(false);
  }, [pathname]);

  const handleClick = () => {
    const activeElement = document.activeElement as HTMLElement;
    setWorking(true);
    activeElement.blur();
  }

  return (
    <BasicLink onClick={handleClick} className={'hocus:no-underline'} href={href}>
      <WaitingOverlay isWaiting={isWorking}>
        <span className={utils.mergeClass('flex items-center justify-center text-lg p-2 px-6 bg-primary-600 text-primary-50 font-bold hocus:bg-primary-400 hocus:text-primary-950 active:scale-90', className)}> { children } </span>
      </WaitingOverlay>
    </BasicLink>
  );
}