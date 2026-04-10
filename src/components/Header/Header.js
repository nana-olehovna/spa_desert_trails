import { Navigation } from "./Navigation";
import { LangSelector } from "./Lang_Selector";
import { themeBtnGenerator, changeTheme } from "./Theme_Toggle";
import { LoginBtnCreate, HeaderMenuBtn } from "../Buttons";
import { HeaderMenu } from "./Menu_Hidden";




export function Header(currentPath) {
  return `
    <header id="header">
      ${HeaderMenuBtn()}
      ${HeaderMenu()}
      <div class="logo_container">
        <div class="logo_img"><a href="/"></a></div>
        <a href="/" class="site_name">Desert Trails</a>
      </div>
      ${Navigation(currentPath)}
      <div class="personalization">
        ${LangSelector()}
        ${themeBtnGenerator()}
        ${LoginBtnCreate()}
      </div>
    </header>
  `
}


export function HeaderScroll() {
  if (window.scrollY > 50) {
    document.getElementById("header").classList.add("scrolled")
    document.getElementById("scroll-btn").classList.add("scrolled")
  } else {
    document.getElementById("header").classList.remove("scrolled")
    document.getElementById("scroll-btn").classList.remove("scrolled")
  }
}