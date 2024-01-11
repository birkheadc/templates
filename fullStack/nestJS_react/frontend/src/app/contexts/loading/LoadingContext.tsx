import * as React from 'react';
import ReactModal from 'react-modal';
import LoadingSpinner from './LoadingSpinner';

type LoadingContextState = {
  isLoading: boolean,
  useLoading<T>(action: () => Promise<T>): Promise<T>
}

const DEFAULT_LOADING_DATA: LoadingContextState = {
  isLoading: false,
  useLoading: function <T>(action: () => Promise<T>): Promise<T> {
    throw new Error('Function not implemented.');
  }
}

export const LoadingContext = React.createContext<LoadingContextState>(DEFAULT_LOADING_DATA);
export const LoadingProvider = ({ children }: any) => {
  const [ numLoading, setNumLoading ] = React.useState<number>(0);
  const isLoading = numLoading > 0;

  async function useLoading<T>(action: () => Promise<T>): Promise<T> {
    setNumLoading(n => n + 1);
    try {
      return await action();
    } catch (err) {
      throw err;
    } finally {
      setNumLoading(n => (Math.max(0, n - 1)));
    }
  }
  
  return (
    <LoadingContext.Provider value={{ isLoading, useLoading }}>
      <ReactModal isOpen={isLoading}>
        <LoadingSpinner />
      </ReactModal>
      { children }
    </LoadingContext.Provider>
  )
}