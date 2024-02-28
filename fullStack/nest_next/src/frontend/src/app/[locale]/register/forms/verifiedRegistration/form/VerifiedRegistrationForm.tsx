import * as React from 'react';
import Form from '../../../../../../components/forms/form/Form';
import { Result } from '../../../../../../types/result/result';
import { ResultMessage } from '../../../../../../types/result/resultMessage';
import Input from '../../../../../../components/forms/inputs/input/Input';
import EmailAddressInput from '../../../../../../components/forms/inputs/emailAddressInput/EmailAddressInput';
import useRichTranslations from '../../../../../../hooks/useRichTranslations/useRichTranslations';
import NewPasswordInput from '../../../../../../components/forms/inputs/newPasswordInput/NewPasswordInput';
import { CreateUserRequest } from '../../../../../../types/requests/createUser/createUserRequest';
import api from '../../../../../../api';

type VerifiedRegistrationFormProps = {
  emailVerificationCode: string,
  emailAddress: string
}

export default function VerifiedRegistrationForm(props: VerifiedRegistrationFormProps): JSX.Element {

  const [ request, setRequest ] = React.useState<CreateUserRequest>({
    emailVerificationToken: props.emailVerificationCode,
    emailAddress: props.emailAddress,
    password: ''
  });

  const t = useRichTranslations('register.verified')

  const handleChangePassword = (value: string) => {
    setRequest(r => ({
      ...r,
      password: value
    }));
  }

  const handleSubmit = async (): Promise<Result> => {
    const result = await api.user.createUser(request);
    return result;
  }

  return (
    <Form initialResult={Result.Succeed().WithMessage(ResultMessage.VERIFY_EMAIL_SUCCESS)} submit={handleSubmit}>
      <span>{t('instructions')}</span>
      <EmailAddressInput value={request.emailAddress} disabled change={() => {}} />
      <NewPasswordInput password={request.password} changePassword={handleChangePassword} />
    </Form>
  );
}