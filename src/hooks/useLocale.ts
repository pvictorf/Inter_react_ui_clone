import { useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

export function useLocale(lang: string) {
  const [activeLocale, setActiveLocale] = useState(lang);
  const [t] = useTranslation()

  const setLocale = async (lang: string) => {
    if(lang === activeLocale) return;
    setActiveLocale(lang)
    return await changeLanguage(lang);
  }

  return {
    t,
    activeLocale,
    setLocale,
  }
}