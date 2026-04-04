import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getConfig } from '../config';
import { storageLocalesKey } from '../constants';
import locales from './locales';

const cfg = () => {
  const config = getConfig();

  return {
    resources: locales,
    supportedLngs: config.locales.available,
    fallbackLng: config.locales.default,
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: storageLocalesKey,
      caches: ['localStorage'],
    },
  };
};

i18n.use(initReactI18next).use(LanguageDetector).init(cfg());
