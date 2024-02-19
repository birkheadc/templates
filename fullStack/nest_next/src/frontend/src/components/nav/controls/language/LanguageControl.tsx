'use client';

import * as React from 'react';
import { Globe } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';
import LanguageButton from './LanguageButton';
import useLanguage from '../../../../hooks/language/useLanguage';

type LanguageControlProps = {

}

export default function LanguageControl(props: LanguageControlProps): JSX.Element {

  const [ show, setShow ] = React.useState<boolean>(false);
  const { language, changeLanguage } = useLanguage();

  React.useEffect(function addCloseOnClickListener() {
    // TODO: find a way to hide panel when clicking anywhere outside the panel...
    if (!show) return;
    const listener = (event: PointerEvent) => {
      setShow(false);
    }
    window.addEventListener('pointerdown', listener);
    return (() => {
      window.removeEventListener('pointerdown', listener)
    })
  }, [ show ])

  const toggleShow = () => {
    setShow(s => !s);
  }

  return (
    <div className='relative flex items-center justify-center'>
      <button onClick={toggleShow}><Globe /></button>
      <div className={`absolute w-16 bottom-0 translate-y-full overflow-hidden`}>
        <div className={`p-2 gap-2 flex flex-col justify-center items-center transition-all ${show ? 'translate-y-0' : '-translate-y-full'}`}>
          <LanguageButton language={'en'} countryCode='US' changeLanguage={changeLanguage} />
          <LanguageButton language={'jp'} countryCode='JP' changeLanguage={changeLanguage} />
        </div>
      </div>
    </div>
  );
}