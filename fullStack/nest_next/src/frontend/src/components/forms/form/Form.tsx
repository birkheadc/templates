import * as React from 'react';
import ResultDisplay from '../../resultDisplay/ResultDisplay';
import SubmitButton from '../buttons/submit/SubmitButton';
import { Result } from '../../../types/result/result';
import utils from '../../../utils';
import WaitingOverlay from '../../waitingOverlay/WaitingOverlay';

type FormProps = {
  children?: React.ReactNode,
  className?: string,
  classNameInner?: string,
  submit: () => Promise<void>,
  result: Result | null | undefined
}

export default function Form(props: FormProps): JSX.Element {

  const { children, className, classNameInner, submit, result } = props;

  const isProcessing = result === null;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await submit();
  }

  return (
    <form className={utils.mergeClass('flex flex-col items-center gap-4 mx-auto w-80', className)} onSubmit={handleSubmit}>
      <WaitingOverlay isWaiting={isProcessing}>
        { result && <ResultDisplay result={result} /> }
        <fieldset className={utils.mergeClass('flex flex-col items-center gap-4 w-full', classNameInner)} disabled={isProcessing}>
          { children }
          <SubmitButton />
        </fieldset>
      </WaitingOverlay>
    </form>
  );
}