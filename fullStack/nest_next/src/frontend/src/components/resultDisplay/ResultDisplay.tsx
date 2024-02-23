import * as React from 'react';
import { Result, ResultError } from '../../types/result/result';
import NotificationBox from '../notification/NotificationBox';
import { NotificationType } from '../../types/notification/notificationType';

type ResultDisplayProps = {
  result: Result,
  displayErrors?: boolean
}

export default function ResultDisplay(props: ResultDisplayProps): JSX.Element {
  const { result, displayErrors } = props;

  return (
    <div>
      <NotificationBox type={ result.wasSuccess ? NotificationType.SUCCESS : NotificationType.ERROR }>
        {result.message}
      </NotificationBox>
      {displayErrors && <ResultDisplayErrors errors={result.errors}/>}
    </div>
  );
}

function ResultDisplayErrors(props: { errors: ResultError[]}): JSX.Element {

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