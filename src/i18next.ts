// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {getLangFromStorage} from "./utils/common";
const lang = getLangFromStorage() || 'En';

const resources = {
    En: {
        translation: require('./locales/en/translation.json'),
    },
    He: {
        translation: require('./locales/he/translation.json'),
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: lang,
    fallbackLng: lang,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;