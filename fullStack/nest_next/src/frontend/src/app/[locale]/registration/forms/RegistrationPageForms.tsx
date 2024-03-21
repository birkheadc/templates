'use client';

import { useSearchParams } from 'next/navigation';
import * as React from 'react';
import RegistrationForm from './registration/RegistrationForm';
import VerifiedRegistration from './verifiedRegistration/VerifiedRegistration';

type RegistrationPageFormsProps = {

}

export default function RegistrationPageForms(props: RegistrationPageFormsProps): JSX.Element {

  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  
  return code == null ? <RegistrationForm /> : <VerifiedRegistration code={code} />;
}