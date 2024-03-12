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
    <WaitingOverlay isWaiting={isProcessing}>
      <form className={utils.mergeClass('flex flex-col items-center gap-4 m-auto w-full lg:w-96', className)} onSubmit={handleSubmit}>
        { result && <ResultDisplay result={result} /> }
        <fieldset className={utils.mergeClass('flex flex-col items-center w-full gap-4', classNameInner)} disabled={isProcessing}>
          { children }
          <SubmitButton />
        </fieldset>
      </form>
    </WaitingOverlay>
  );
}