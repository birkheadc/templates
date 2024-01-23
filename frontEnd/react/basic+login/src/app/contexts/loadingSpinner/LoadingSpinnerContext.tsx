import * as React from 'react';
import ReactModal from 'react-modal';
import LoadingSpinner from './LoadingSpinner';

type Props = {
  children: React.ReactNode
}

type State = {
  isLoading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoadingSpinnerContext = React.createContext<State>({ isLoading: false, setLoading: () => {} });
export const LoadingSpinnerProvider = ({ children }: Props) => {
  const [ isLoading, setLoading ] = React.useState<boolean>(false);
  return (
    <LoadingSpinnerContext.Provider value={{ isLoading, setLoading }}>
      <ReactModal className={'loading-spinner-modal-wrapper'} isOpen={isLoading}>
        <LoadingSpinner />
      </ReactModal>
      { children }
    </LoadingSpinnerContext.Provider>
  )
}