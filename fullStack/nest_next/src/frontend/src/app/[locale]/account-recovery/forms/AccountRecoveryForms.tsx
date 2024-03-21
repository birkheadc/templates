'use client';

import { useSearchParams } from 'next/navigation';
import * as React from 'react';
import RequestResetPasswordForm from './RequestResetPasswordForm';
import ResetPasswordForm from './ResetPasswordForm';

type AccountRecoveryFormsProps = {

}

export default function AccountRecoveryForms(props: AccountRecoveryFormsProps): JSX.Element {

  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  return code == null ? <RequestResetPasswordForm /> : <ResetPasswordForm code={code} />;
}