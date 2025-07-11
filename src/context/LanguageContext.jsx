import React, { createContext, useState } from 'react';
import { changeLanguageI18n } from '../i18n/i18n';

const LanguageContext = createContext();

function LanguageProvider(props) {
  const [language, setLanguage] = useState('English');

  const changeLanguage = (newLanguage) => {
    if (newLanguage === language) return;

    if (newLanguage === 'English') {
      setLanguage('English');
      changeLanguageI18n('en');
    } else if (newLanguage === 'Dutch') {
      setLanguage('Dutch');
      changeLanguageI18n('nl');
    }
  };

  return (
    <div>
      <LanguageContext.Provider value={{ language, setLanguage, changeLanguage }}>
        {props.children}
      </LanguageContext.Provider>
    </div>
  );
}

export { LanguageContext, LanguageProvider };
