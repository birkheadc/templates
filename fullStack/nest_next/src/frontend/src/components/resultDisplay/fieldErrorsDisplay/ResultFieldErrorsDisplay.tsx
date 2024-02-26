import * as React from 'react';
import { ResultError } from '../../../types/result/result';
import useRichTranslations from '../../../hooks/useRichTranslations/useRichTranslations';

type ResultFieldErrorsDisplayProps = {
  errors: ResultError[] | undefined
}

export default function ResultFieldErrorsDisplay(props: ResultFieldErrorsDisplayProps): JSX.Element {

  const { errors } = props;
  const t = useRichTranslations('resultErrorMessages');

  return (
    <ul className='flex flex-col text-error-500'>
      {errors && errors.map(
        error =>
        <>{error.message && <li>{t(error.message)}</li>}</>
      )}
    </ul>
  );
}