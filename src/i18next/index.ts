import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  resources: {
    ka: {
      translation: { Welcome: "გამარკობა" },
    },
    en: {
      translation: {
        Welcome: "Welcome to React and react-i18next",
      },
    },
  },
  fallbackLng: "en", // Set a fallback language
  interpolation: {
    escapeValue: false, // Not needed for React
  },
});
