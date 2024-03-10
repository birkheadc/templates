import * as React from 'react';
import { Result } from '../../types/result/result';
import NotificationBox from '../notification/NotificationBox';
import { NotificationType } from '../../types/notification/notificationType';
import useRichTranslations from '@/hooks/useRichTranslations/useRichTranslations';
import { FormValidationError } from '../../types/formValidation/formValidation';

type ResultDisplayProps = {
  result: Result,
  displayErrors?: boolean
}

export default function ResultDisplay(props: ResultDisplayProps): JSX.Element {

  const t = useRichTranslations('resultMessages');
  const { result, displayErrors } = props;

  return (
    <div className='w-full'>
      <NotificationBox type={ result.wasSuccess ? NotificationType.SUCCESS : NotificationType.ERROR }>
        { result.message && t(result.message)}
      </NotificationBox>
      {displayErrors && <ResultDisplayErrors errors={result.errors}/>}
    </div>
  );
}

function ResultDisplayErrors(props: { errors: FormValidationError[]}): JSX.Element {

  const { errors } = props;

  return (
    <ul>
      {errors.map(
        (error, index) =>
        <li key={`display-errors-key-${index}`}>
          {error.message}
        </li>
      )}
    </ul>
  )
}