import * as React from 'react';
import PrimaryButton from '../primary/PrimaryButton';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';

type SubmitButtonProps = {
  disabled?: boolean
}

export default function SubmitButton(props: SubmitButtonProps): JSX.Element {

  const t = useRichTranslations('general');

  const { disabled } = props;
  
  return (
    <PrimaryButton disabled={disabled} type='submit'>{t('submit')}</PrimaryButton>
  );
}