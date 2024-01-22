'use client';

import * as React from 'react';
import { RegisterUserRequest } from '../../../../../common/requests/register/registerUserRequest';

type RegistrationFormProps = {

}

export default function RegistrationForm(props: RegistrationFormProps): JSX.Element {

  const [ request, setRequest ] = React.useState<RegisterUserRequest>({ emailAddress: 'test@example.com' });
  console.log('Request:', request);

  return (
    <form>
      
    </form>
  );
}