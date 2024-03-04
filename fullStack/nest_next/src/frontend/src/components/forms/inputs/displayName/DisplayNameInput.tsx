import * as React from 'react';
import Input from '../input/Input';
import { UseFormRegister, FieldErrors, Path } from 'react-hook-form';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import { FormValidationErrorMessage } from '../../../../types/formValidation/formValidationErrorMessage';

interface DisplayNameInputProps<T extends { 'displayName': any }> extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>,
  errors?: FieldErrors<T>,
  name: Path<T>
}

export default function DisplayNameInput<T extends { 'displayName': any }>(props: DisplayNameInputProps<T>): JSX.Element {

  const { required } = props;

  const t = useRichTranslations('general');
  const tErrors = useRichTranslations('formValidationErrorMessages');

  return (
    <Input {...props} autoComplete='username' label={t('displayName') as string} registeroptions={{ required: { value: !!required, message: tErrors(FormValidationErrorMessage.REQUIRED) as string }, minLength: { value: 4, message: tErrors(FormValidationErrorMessage.DISPLAY_NAME_TOO_SHORT) as string }, maxLength: { value: 16, message: tErrors(FormValidationErrorMessage.DISPLAY_NAME_TOO_LONG) as string }, pattern: { value: /^[a-zA-Z0-9]+$/, message: tErrors(FormValidationErrorMessage.DISPLAY_NAME_INVALID) as string } }} />
  );
}