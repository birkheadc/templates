import * as React from 'react';
import ReactCountryFlag from 'react-country-flag';

type LanguageButtonProps = {
  language: string,
  countryCode: string,
  changeLanguage: (language: string) => void
}

export default function LanguageButton(props: LanguageButtonProps): JSX.Element {

  const { language, countryCode, changeLanguage } = props;

  return (
    <button className='scale-90 hocus:scale-100' onClick={() => changeLanguage(language)}><ReactCountryFlag countryCode={countryCode} style={{width: '5rem', height: '2rem'}} svg/></button>
  );
}