import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import Input from '../input/Input';
import { Result } from '../../../../types/result/result';

type EmailAddressInputProps = {
  value: string,
  change: (value: string) => void,
  disabled?: boolean
}

export default function EmailAddressInput(props: EmailAddressInputProps): JSX.Element {

  const { value, change, disabled } = props;

  const t = useRichTranslations('general');

  const handleChange = (value: string) => {
    // TODO: add email validation
    change(value);
  }

  return (
    <Input autocomplete='email' disabled={disabled} id='email' label={t('emailAddress') as string} value={value} change={handleChange} />
  );
}