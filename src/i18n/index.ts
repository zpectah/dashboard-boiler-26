import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getConfig } from '@/config';
import { i18nextStorageKey } from '@/constants';
import locales from './locales';

const cfg = () => {
  const config = getConfig();

  return {
    resources: locales,
    supportedLngs: config.locales.supported,
    fallbackLng: config.locales.default,
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: i18nextStorageKey,
      caches: ['localStorage'],
    },
  };
};

i18n.use(initReactI18next).use(LanguageDetector).init(cfg());
