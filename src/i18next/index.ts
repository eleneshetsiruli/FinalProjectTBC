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

import addBlogPageKa from "./ka/pages/addBlog.json";
import addBlogPageEn from "./en/pages/addBlog.json";

import countriesPageKa from "./ka/pages/countries.json";
import countriesPageEn from "./en/pages/countries.json";

i18n.use(initReactI18next).init({
  resources: {
    ka: {
      translation: {
        "home-page": homePageKa,
        "about-page": aboutPageKa,
        "blog-page": blogPageKa,
        "footer-page": footerPageKa,
        "addBlog-page": addBlogPageKa,
        "countries-page": countriesPageKa,
      },
    },
    en: {
      translation: {
        "home-page": homePageEn,
        "about-page": aboutPageEn,
        "blog-page": blogPageEn,
        "footer-page": footerPageEn,
        "addBlog-page": addBlogPageEn,
        "countries-page": countriesPageEn,
      },
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
