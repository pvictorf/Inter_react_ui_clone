import { useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

export function useLocale(lang = 'ptbr') {
  const [activeLocale, setActiveLocale] = useState(lang);
  const [t] = useTranslation()

  const setLocale = (lang: string) => {
    setActiveLocale(lang)
    changeLanguage(activeLocale)
  }

  return {
    t,
    activeLocale,
    setLocale,
  }
}