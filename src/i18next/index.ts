import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import homePageKa from "./ka/pages/home.json";
import homePageEn from "./en/pages/home.json";

import aboutPageKa from "./ka/pages/about.json";
import aboutPageEn from "./en/pages/about.json";

import blogPageKa from "./ka/pages/blog.json";
import blogPageEn from "./en/pages/blog.json";

import footerPageKa from "./ka/pages/footer.json";
import footerPageEn from "./en/pages/footer.json";

i18n.use(initReactI18next).init({
  resources: {
    ka: {
      translation: {
        "home-page": homePageKa,
        "about-page": aboutPageKa,
        "blog-page": blogPageKa,
        "footer-page": footerPageKa,
      },
    },
    en: {
      translation: {
        "home-page": homePageEn,
        "about-page": aboutPageEn,
        "blog-page": blogPageEn,
        "footer-page": footerPageEn,
      },
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
