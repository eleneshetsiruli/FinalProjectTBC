import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import homePageKa from "./ka/pages/home.json";
import homePageEn from "./en/pages/home.json";

import aboutPageKa from "./ka/pages/about.json";
import aboutPageEn from "./en/pages/about.json";

i18n.use(initReactI18next).init({
  resources: {
    ka: {
      translation: { "home-page": homePageKa, "about-page": aboutPageKa },
    },
    en: {
      translation: { "home-page": homePageEn, "about-page": aboutPageEn },
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
