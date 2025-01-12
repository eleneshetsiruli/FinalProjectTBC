import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import homePageKa from "./ka/pages/home.json";
import homePageEn from "./en/pages/home.json";

i18n.use(initReactI18next).init({
  resources: {
    ka: {
      translation: { "home-page": homePageKa },
    },
    en: {
      translation: { "home-page": homePageEn },
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
