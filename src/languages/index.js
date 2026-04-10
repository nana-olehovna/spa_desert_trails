import { getLanguage, getTranslations } from "../i18n";

export const t = (key) => { 
    const currentLang = getLanguage();
    return getTranslations(currentLang, key);
}