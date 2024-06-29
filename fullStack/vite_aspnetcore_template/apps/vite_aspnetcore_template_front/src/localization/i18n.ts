import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./translations/en/enTranslations";

const resources = {
  en: {
    enTranslations
  }
}

i18n.use(initReactI18next).init({
  resources,
  interpolation: {
    escapeValue: false
  }
})

export default i18n;