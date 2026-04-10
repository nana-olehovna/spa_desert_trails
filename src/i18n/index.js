import en from "./en.json";
import ru from "./ru.json";
import cz from "./cz.json";
import ua from "./ua.json";
import ar from "./ar.json";


import { t } from "../languages";
import {renderApp} from "../main.js"
import page from "page";

const translations = {
    en,
    ru,
    cz,
    ua,
    ar
}

const defaultLanguage = 'en'
const keyLangLocalstorage = "desert-trails-lang"


export const setLanguage = (lang) => localStorage.setItem(keyLangLocalstorage, lang)

export const getLanguage = () => { 
    return localStorage.getItem(keyLangLocalstorage) || defaultLanguage
}

export const getTranslations = (lang, key) => {
    return translations[lang]?.[key] || translations[defaultLanguage]?.[key] || key;
}


export function changeLanguage(event){
    
      if (event.target.id === "lang-btn"){
        const lang = event.target.value
        applyLang(lang)
    }
}

export function applyLang(lang) {
    setLanguage(lang)
    document.documentElement.setAttribute("data-lang", lang)
    renderApp()
}


export function updateLangBtnValue() {
    const langBtn = document.getElementById("lang-btn")
    const currentLang = getLanguage()
    langBtn.value = currentLang
    document.documentElement.setAttribute("data-lang", currentLang)
}