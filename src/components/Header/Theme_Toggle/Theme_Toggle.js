import { t } from "../../../languages"

const themes = [
  {
    storageName: "light",
    btnName: "Theme.Light"
  },
  {
    storageName: "dark",
    btnName: "Theme.Dark"
  }
]


export function themeBtnGenerator() {
    return `<div class="theme_box"><button class="theme_btn"></button></div>`
}


const themeStorageName = "desert-trails-theme"
const defaultTheme = "light"


export function getCurrentTheme(){
    const storedTheme = localStorage.getItem(themeStorageName) || defaultTheme
    return storedTheme
}

export function setTheme(theme) {
    localStorage.setItem(themeStorageName, theme)
}


function getOppositeTheme(currentTheme) {
    return themes.find(th => th.storageName !== currentTheme)
}

export function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme)
}

export function setBtnThemeName(theme) {
    const btn = document.querySelector(".theme_btn")
    const opposite = getOppositeTheme(theme)

    if (btn && opposite) {
        btn.textContent = t(`Theme.${opposite.storageName}`)
    }
}


export function initTheme() {
    const currentTheme = getCurrentTheme()
    
    applyTheme(currentTheme)
    setBtnThemeName(currentTheme)

    
}

export function changeTheme(){
    const btn = document.querySelector(".theme_btn")
    btn.addEventListener("click", () => {
        const currentTheme = getCurrentTheme()
        const newTheme = getOppositeTheme(currentTheme).storageName

        setTheme(newTheme)
        applyTheme(newTheme)
        setBtnThemeName(newTheme)

    })
}rffr