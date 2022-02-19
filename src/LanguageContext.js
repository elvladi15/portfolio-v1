import { createContext, useContext, useState } from "react";
import { LANGUAGES } from "./translations";

const LanguageContext = createContext();
export function useLanguageContext() {
  return useContext(LanguageContext);
}
export function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState(LANGUAGES.SPANISH);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
