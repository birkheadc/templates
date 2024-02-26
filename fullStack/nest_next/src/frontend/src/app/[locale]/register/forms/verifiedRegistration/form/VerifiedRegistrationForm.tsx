import * as React from 'react';
import Form from '../../../../../../components/forms/form/Form';
import { Result } from '../../../../../../types/result/result';
import { ResultMessage } from '../../../../../../types/result/resultMessage';
import Input from '../../../../../../components/forms/inputs/input/Input';
import EmailAddressInput from '../../../../../../components/forms/inputs/emailAddressInput/EmailAddressInput';
import useRichTranslations from '../../../../../../hooks/useRichTranslations/useRichTranslations';
import NewPasswordInput from '../../../../../../components/forms/inputs/newPasswordInput/NewPasswordInput';

type VerifiedRegistrationFormProps = {
  emailAddress: string
}

export default function VerifiedRegistrationForm(props: VerifiedRegistrationFormProps): JSX.Element {

  const { emailAddress } = props;

  const t = useRichTranslations('register.verified')

  const handleSubmit = async (): Promise<Result> => {
    return Result.Fail().WithMessage(ResultMessage.NOT_YET_IMPLEMENTED);
  }

  return (
    <Form initialResult={Result.Succeed().WithMessage(ResultMessage.VERIFY_EMAIL_SUCCESS)} submit={handleSubmit}>
      <span>{t('instructions')}</span>
      <EmailAddressInput value={emailAddress} disabled change={() => {}} />
      <NewPasswordInput />
    </Form>
  );
}