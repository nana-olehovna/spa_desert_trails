import { NavigationMob } from "../Navigation";
import { LangSelector } from "../Lang_Selector";
import { themeBtnGenerator } from "../Theme_Toggle";
import { LoginBtnCreate } from "../../Buttons";


export function HeaderMenu(currentPath) {
  return `
    <div id="header-menu" class="header_menu hidden">
      <div class="header_menu_content">
        ${NavigationMob(currentPath)}
      </div>
    </div>
  `
}