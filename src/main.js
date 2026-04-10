import { Header, Main , Footer, goToLogin, ShowMenu, HideMenu, goToRegistration, goToLoginPage, HeaderScroll, goToDestinationFromOther , changeTheme, initTheme, openCard, closeCard, Scroll_Btn, ScrollUp} from "./components";
import { updateLangBtnValue, changeLanguage} from "./i18n";
import { InitRouter,resetUI } from "./router";
import { submitListener } from "./submit_listener/SubmitListener.js";
import { FormReset, goToDestinationFromHome , contactFormClose, contactFormOpen, ContactPopup, openDestination} from "./pages";
import { loadingPage } from "./animations"

import "./style.css"
import "./styles/index.js"



export function renderApp( currentPage, currentPath) {
  document.querySelector("#app").innerHTML = `
    ${Header(currentPath)}
    ${Main(currentPage)}
    ${Footer()}
    ${Scroll_Btn()}
  `
  updateLangBtnValue()
  initTheme()
  changeTheme()
  loadingPage()
}


InitRouter(renderApp)
submitListener()


ContactPopup()




document.addEventListener("change", (event)=> {
  changeLanguage(event)
})

document.addEventListener("click", (event) => {
  goToLogin(event)
  goToRegistration(event)
  goToLoginPage(event)
  ShowMenu(event)
  HideMenu(event)
  goToDestinationFromHome(event)
  goToDestinationFromOther(event)
  contactFormOpen(event)
  contactFormClose(event)
  openCard(event)
  closeCard(event)
  ScrollUp(event)
  openDestination(event)
})

window.addEventListener("scroll", HeaderScroll)

window.addEventListener("load", () => {
  setTimeout(FormReset, 100)
  setTimeout(loadingPage, 500)
})

