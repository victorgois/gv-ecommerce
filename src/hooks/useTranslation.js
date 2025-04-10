"use client";

import { useIsBrowser } from "./useIsBrowser";
import { translations } from "../translations/pt";

export const useTranslation = () => {
  const isBrowser = useIsBrowser();

  const t = (key) => {
    // Versão segura para SSR
    if (!isBrowser) {
      // Retorna uma string vazia ou placeholder durante SSR
      return key;
    }

    return translations[key] || key;
  };

  return { t };
};
