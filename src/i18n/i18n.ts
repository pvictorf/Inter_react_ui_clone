import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from './locales'
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: process.env.REACT_APP_LANG,
    fallbackLng: ["en", "pt-BR"],
    debug: false,
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false 
    },
  });

export default i18n;