"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { siteCopy, type Language, type SiteCopy } from "@/content/site";

type LanguageContextValue = {
  language: Language;
  copy: SiteCopy;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const storageKey = "campaign-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "es";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(storageKey);
    if (isLanguage(storedLanguage)) {
      setLanguageState(storedLanguage);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) {
      return;
    }

    document.documentElement.lang = language;
    window.localStorage.setItem(storageKey, language);
  }, [language, ready]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      copy: siteCopy[language],
      setLanguage: setLanguageState,
      toggleLanguage: () => setLanguageState((current) => (current === "en" ? "es" : "en")),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
