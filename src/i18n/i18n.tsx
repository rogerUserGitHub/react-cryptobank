import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationNL from './translations/nl.json';
import translationEN from './translations/en.json';

const resources = {
  nl: {
    translation: translationNL,
  },
  en: {
    translation: translationEN,
  },
};

export const supportedLanguages = ['nl-NL', 'en-GB'];
export const locales = ['nl', 'en'];

export const changeLanguageI18n = (newLang: string): any => {
  if (newLang.length === 2) {
    switch (newLang) {
      case 'en':
        i18n.changeLanguage('en-GB');
        break;
      case 'nl':
      default:
        i18n.changeLanguage('nl-NL');
    }
  } else {
    i18n.changeLanguage(newLang);
  }
};

i18n.use(initReactI18next).init({
  resources,
  cache: { enabled: true },
  debug: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
  fallbackLng: 'en-GB',
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  keySeparator: '.',
  react: {
    useSuspense: true,
  },
});

export default i18n;
