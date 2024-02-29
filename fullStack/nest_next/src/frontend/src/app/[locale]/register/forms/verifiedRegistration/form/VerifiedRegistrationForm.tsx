import * as React from 'react';
import Form from '../../../../../../components/forms/form/Form';
import { Result } from '../../../../../../types/result/result';
import { ResultMessage } from '../../../../../../types/result/resultMessage';
import EmailAddressInput from '../../../../../../components/forms/inputs/emailAddressInput/EmailAddressInput';
import useRichTranslations from '../../../../../../hooks/useRichTranslations/useRichTranslations';
import NewPasswordInput from '../../../../../../components/forms/inputs/newPasswordInput/NewPasswordInput';
import { CreateUserRequest } from '../../../../../../types/requests/createUser/createUserRequest';
import api from '../../../../../../api';
import { FormValidation } from '../../../../../../types/formValidation/formValidation';

type VerifiedRegistrationFormProps = {
  emailVerificationCode: string,
  emailAddress: string
}

export default function VerifiedRegistrationForm(props: VerifiedRegistrationFormProps): JSX.Element {

  const [ validation, setValidation ] = React.useState<FormValidation>({});
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
      {/* <span>{t('instructions')}</span>
      <EmailAddressInput value={request.emailAddress} disabled change={() => {}} />
      <NewPasswordInput errors={} changePassword={handleChangePassword} /> */}
    </Form>
  );
}