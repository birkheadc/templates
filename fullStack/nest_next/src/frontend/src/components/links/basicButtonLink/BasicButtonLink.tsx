'use client';

import * as React from 'react';
import BasicLink from '../basicLink/BasicLink';
import utils from '../../../utils';
import { usePathname } from '../../../navigation/navigation';
import WaitingOverlay from '../../waitingOverlay/WaitingOverlay';

type BasicButtonLinkProps = {
  href: string,
  className?: string,
  children?: React.ReactNode 
}

export default function BasicButtonLink(props: BasicButtonLinkProps): JSX.Element {
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
        <span className={utils.mergeClass('flex justify-center items-center text-lg p-2 px-6 bg-neutral-50 border-2 text-primary-700 font-bold hocus:bg-primary-400 hocus:text-primary-950 active:scale-90', className)}> { children } </span>
      </WaitingOverlay>
    </BasicLink>
  );
}