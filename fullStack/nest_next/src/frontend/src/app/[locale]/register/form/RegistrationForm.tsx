'use client';

import * as React from 'react';
import { RegisterUserRequest } from '../../../../types/requests/register/registerUserRequest';

type RegistrationFormProps = {

}

export default function RegistrationForm(props: RegistrationFormProps): JSX.Element {

  const [ request, setRequest ] = React.useState<RegisterUserRequest>({ emailAddress: 'test@example.com' });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setRequest({ emailAddress: e.currentTarget.value })} value={request.emailAddress}></input>
      <button>submit</button>
    </form>
  );
}