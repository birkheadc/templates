import * as React from "react";
import { Result } from "../../types/result/result";

export default function useResult() {
  const [ result, setResult ] = React.useState<Result | null | undefined>(undefined);

  const awaitResult = (async (fn: () => Promise<Result>) => {
    setResult(null);
    const result = await fn();
    setResult(result);
  })
  
  return { result, awaitResult }
}