"use client";

import * as React from "react";

import { translations } from "@/components/translations";

const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = React.useState(
    typeof window !== 'undefined' && localStorage.getItem("locale") || "pt"
  );

  return (
    <LanguageContext.Provider
      value={{ t: translations[locale], setLocale, locale }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLocale = () => React.useContext(LanguageContext);
