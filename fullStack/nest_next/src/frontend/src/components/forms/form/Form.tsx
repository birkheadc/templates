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
  submit: () => Promise<Result>
}

export default function Form(props: FormProps): JSX.Element {

  const { children, className, classNameInner, submit } = props;

  const [ isProcessing, setProcessing ] = React.useState<boolean>(false);
  const [ recentResult, setRecentResult ] = React.useState<Result | undefined>();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setRecentResult(undefined);
    setProcessing(true);
    const result = await submit();
    setRecentResult(result);
    setProcessing(false);
  }

  return (
    <WaitingOverlay isWaiting={isProcessing}>
      <form className={utils.mergeClass('flex flex-col items-center gap-4 p-8 m-auto w-96', className)} onSubmit={handleSubmit}>
        { recentResult && <ResultDisplay result={recentResult} /> }
        <fieldset className={utils.mergeClass('flex flex-col items-center w-full gap-4', classNameInner)} disabled={isProcessing}>
          { children }
          <SubmitButton />
        </fieldset>
      </form>
    </WaitingOverlay>
  );
}