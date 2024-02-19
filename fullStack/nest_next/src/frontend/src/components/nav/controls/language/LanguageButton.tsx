import utils from '@/utils';
import * as React from 'react';
import ReactCountryFlag from 'react-country-flag';

type LanguageButtonProps = {
  language: string,
  countryCode: string,
  changeLanguage: (language: string) => void,
  className?: string,
  hideButtons: () => void
}

export default function LanguageButton(props: LanguageButtonProps): JSX.Element {

  const { language, countryCode, changeLanguage, className, hideButtons } = props;

  const handleClick = () => {
    hideButtons()
    changeLanguage(language);
  }

  return (
    <button className={utils.mergeClass(className, 'scale-90 hocus:scale-100 active:scale-90')} onClick={handleClick}><ReactCountryFlag countryCode={countryCode} style={{width: '5rem', height: '2rem'}} svg/></button>
  );
}