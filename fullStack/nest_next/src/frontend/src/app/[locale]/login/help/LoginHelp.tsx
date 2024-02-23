import * as React from 'react';
import { Link } from '../../../../navigation/navigation';
import BasicLink from '../../../../components/links/basicLink/BasicLink';

type LoginHelpProps = {

}

export default function LoginHelp(props: LoginHelpProps): JSX.Element {
  return (
    <div className='flex items-center justify-center w-full gap-4'>
      <BasicLink className='w-40 text-right' href='/recover-password'>recover account</BasicLink>
      <span>|</span>
      <BasicLink className='w-40' href='/register'>register new</BasicLink>
    </div>
  );
}