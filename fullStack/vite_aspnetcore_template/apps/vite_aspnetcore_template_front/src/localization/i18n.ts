import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "@/localization/translations/en/enTranslations";

const resources = {
  en: {
    translation: enTranslations,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
