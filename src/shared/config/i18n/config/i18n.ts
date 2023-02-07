import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export const i18nConfig = i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: "ru",
        fallbackLng: "ru",
        debug: false,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });
