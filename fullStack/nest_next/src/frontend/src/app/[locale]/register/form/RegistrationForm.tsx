'use client';

import * as React from 'react';
import { RegisterUserRequest } from '../../../../../../common/requests/register/registerUserRequest';

type RegistrationFormProps = {

}

export default function RegistrationForm(props: RegistrationFormProps): JSX.Element {

  const [ request, setRequest ] = React.useState<RegisterUserRequest>({ emailAddress: 'test@example.com' });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const liveUrl = 'https://c022n4f7xa.execute-api.ap-southeast-2.amazonaws.com/production/users/new';
    const localUrl = 'http://localhost:5000/development/users/new';
    const response = await fetch(liveUrl, {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response.status);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setRequest({ emailAddress: e.currentTarget.value })} value={request.emailAddress}></input>
      <button>submit</button>
    </form>
  );
}