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
  const { changeLanguage } = useLanguage();

  React.useEffect(function addCloseOnClickListener() {
    if (!show) return;
    const listener = (event: PointerEvent) => {
      const elements = document.elementsFromPoint(event.clientX, event.clientY);
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.classList.contains(LANGUAGE_BUTTON_CLASS)) {
          return;
        }
      }
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
      <button className={`${LANGUAGE_BUTTON_CLASS} active:scale-90 text-primary-500 hocus:text-primary-950 rounded-full`} onClick={toggleShow}><Globe /></button>
      <div className={`absolute w-16 bottom-0 translate-y-full overflow-hidden`}>
        <div className={`p-2 gap-2 flex flex-col justify-center items-center transition-all ${show ? 'translate-y-0' : '-translate-y-full'}`}>
          <LanguageButton className={LANGUAGE_BUTTON_CLASS} language={'jp'} countryCode='JP' changeLanguage={changeLanguage} hideButtons={() => setShow(false)} />
          <LanguageButton className={LANGUAGE_BUTTON_CLASS} language={'en'} countryCode='US' changeLanguage={changeLanguage} hideButtons={() => setShow(false)} />
        </div>
      </div>
    </div>
  );
}

const LANGUAGE_BUTTON_CLASS = 'language-button';